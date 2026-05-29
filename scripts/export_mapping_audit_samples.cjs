const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const rawCollectionsDir = path.join(repoRoot, 'data', 'raw_collections')
const manifestPath = path.join(repoRoot, 'reports', 'raw-collection-mapping-manifest.json')

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function loadRawSource(folderName) {
  const folder = path.join(rawCollectionsDir, folderName)
  const jsonFile = fs.readdirSync(folder).find((name) => name.endsWith('.json'))
  if (!jsonFile) throw new Error(`No raw JSON found for ${folderName}`)

  return readJson(path.join(folder, jsonFile))
}

function entryMatchesItem(entry, item) {
  if (entry.scope === 'source') return true
  return Boolean(entry.collectionIds?.includes(item.collection_id))
}

function compactText(value) {
  if (!value) return ''

  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(value, maxLength = 320) {
  const compact = compactText(value)
  if (compact.length <= maxLength) return compact
  return `${compact.slice(0, maxLength - 3)}...`
}

function promptForItem(item) {
  return (
    item.prompt_text ??
    item.statement_html ??
    item.title ??
    item.question_title ??
    item.paragraph_text ??
    item.raw_latex ??
    ''
  )
}

function answerEvidenceForItem(item) {
  if (item.correct_answer) return `correct=${item.correct_answer}`
  if (item.answer_key_excerpt) return item.answer_key_excerpt
  if (item.solution_text) return item.solution_text
  if (item.advice_html) return item.advice_html
  return ''
}

function promptQualityFlags(prompt) {
  const compact = compactText(prompt)
  const flags = []

  if (!compact) flags.push('missing-prompt')
  if (compact && compact.length < 25) flags.push('very-short-prompt')
  if (/^\d+$/.test(compact)) flags.push('numeric-only-prompt')
  if (/copyright|developed and published under contract|all rights reserved/i.test(compact)) {
    flags.push('frontmatter-or-copyright')
  }
  if (/reference materials/i.test(compact)) flags.push('reference-materials')
  if (/\bpoints Does not provide a response/i.test(compact)) flags.push('rubric-row')
  if (/\bOption\s+[A-Z“”"]?\s+is\s+(correct|incorrect)\b/i.test(compact)) {
    flags.push('rationale-only')
  }
  if (/^[a-z]/.test(compact) && /\b(Source:|Option|Which|What|How|Why)\b/i.test(compact)) {
    flags.push('fragment-start')
  }
  if (/^\d+\s+\d+\s+\d+(?:\s+\d+)+$/.test(compact)) flags.push('numeric-table-fragment')
  if (/^(Multiple Choice|Constructed Response)\s+/i.test(compact)) {
    flags.push('answer-key-row')
  }
  if (/\b(NGLS|TEKS|SE)?\.[A-Z][A-Za-z.]*\.Content\./.test(compact)) {
    flags.push('standards-table-row')
  }
  if (/\b(Multiple Choice|Constructed Response)\s+[A-D]\s+\d+\s+/.test(compact)) {
    flags.push('answer-map-row')
  }
  if (/\[missing prompt preview\]/i.test(compact)) flags.push('missing-prompt')

  return flags
}

function sampleIndexes(length, sampleCount) {
  if (length <= sampleCount) {
    return Array.from({ length }, (_, index) => index)
  }

  const candidates = new Set([0, length - 1, Math.floor(length / 2)])
  const stride = Math.max(1, Math.floor(length / Math.max(1, sampleCount - 1)))
  for (let index = stride; candidates.size < sampleCount && index < length; index += stride) {
    candidates.add(index)
  }
  for (let index = 0; candidates.size < sampleCount && index < length; index += 1) {
    candidates.add(index)
  }

  return Array.from(candidates).sort((left, right) => left - right)
}

function sampleCountForEntry(entry) {
  if (entry.exposureStatus === 'map-now') return 5
  if (entry.exposureStatus === 'seed-new-course') return 4
  if (entry.exposureStatus === 'support-bank') return 3
  return 2
}

function riskScoreForEntry(entry) {
  let score = 0
  if (entry.exposureStatus === 'map-now') score += 50
  if (entry.exposureStatus === 'seed-new-course') score += 35
  if (entry.scope === 'source') score += 25
  if (entry.confidence === 'medium') score += 15
  if (entry.confidence === 'low') score += 30
  if (entry.matchedQuestionCount > 1000) score += 15
  if (entry.matchedQuestionCount > 10000) score += 25
  return score
}

function candidateOverlap(entry, item) {
  const rawCandidates = new Set(item.candidate_track_ids ?? [])
  if (rawCandidates.size === 0 || entry.targetTrackIds.length === 0) return true
  return entry.targetTrackIds.some((trackId) => rawCandidates.has(trackId))
}

function auditEntry(row, entry, rawItems) {
  const matchedItems = rawItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => entryMatchesItem(entry, item))

  const indexes = sampleIndexes(matchedItems.length, sampleCountForEntry(entry))
  const samples = indexes.map((matchedIndex) => {
    const { item, index } = matchedItems[matchedIndex]
    return {
      rawIndex: index,
      sourceId: item.source_id ?? '',
      collectionId: item.collection_id ?? '',
      title: item.title ?? item.question_title ?? item.exam_title ?? item.source_file ?? '',
      prompt: truncate(promptForItem(item)),
      answerEvidence: truncate(answerEvidenceForItem(item), 220),
      rawCandidateTrackIds: item.candidate_track_ids ?? [],
      topicTags: item.topic_tags ?? [],
      candidateOverlapsTargets: candidateOverlap(entry, item),
      promptQualityFlags: promptQualityFlags(promptForItem(item)),
    }
  })

  const mismatchCount = samples.filter((sample) => !sample.candidateOverlapsTargets).length
  const promptQualityIssueCount = samples.filter((sample) => sample.promptQualityFlags.length > 0).length

  return {
    sourceFolder: row.folderName,
    sourceName: row.sourceName,
    entryId: entry.id,
    targetFamily: entry.targetFamily,
    exposureStatus: entry.exposureStatus,
    confidence: entry.confidence,
    scope: entry.scope,
    matchedQuestionCount: matchedItems.length,
    targetTrackIds: entry.targetTrackIds,
    proposedTracks: entry.proposedTracks,
    notes: entry.notes,
    riskScore: riskScoreForEntry(entry),
    sampleCount: samples.length,
    sampleCandidateMismatchCount: mismatchCount,
    samplePromptQualityIssueCount: promptQualityIssueCount,
    reviewRecommendation: reviewRecommendationForEntry(entry, matchedItems.length, promptQualityIssueCount),
    samples,
  }
}

function reviewRecommendationForEntry(entry, matchedQuestionCount, promptQualityIssueCount) {
  if (entry.exposureStatus === 'hold') return 'Do not review for live course mapping yet.'
  if (entry.confidence === 'low') return 'Review manually before any live exposure.'
  if (promptQualityIssueCount > 0 && entry.exposureStatus === 'map-now') {
    return 'Fix extraction quality before wiring; one or more samples do not look like usable questions.'
  }
  if (matchedQuestionCount <= 30 && entry.exposureStatus !== 'support-bank') {
    return 'Small enough to review fully before wiring.'
  }
  if (entry.exposureStatus === 'seed-new-course') {
    return 'Review representative samples, then design the new course boundary.'
  }
  return 'Sample review is enough for first pass; escalate to full review if any sample feels misplaced.'
}

function buildAuditRows() {
  const manifest = readJson(manifestPath)
  const rawPayloads = new Map()

  return manifest.rows.flatMap((row) => {
    if (!rawPayloads.has(row.folderName)) {
      rawPayloads.set(row.folderName, loadRawSource(row.folderName))
    }

    const rawItems = rawPayloads.get(row.folderName).items ?? []
    return row.entries.map((entry) => auditEntry(row, entry, rawItems))
  })
}

function buildMarkdown(rows) {
  const priorityRows = rows
    .filter((row) => row.exposureStatus !== 'hold')
    .sort((left, right) => {
      if (right.riskScore !== left.riskScore) return right.riskScore - left.riskScore
      return right.matchedQuestionCount - left.matchedQuestionCount
    })
    .slice(0, 80)

  const lines = [
    '# Raw Mapping Audit Samples',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    '## How To Use This',
    '',
    '- Read the samples for each priority entry before wiring that entry into a live course.',
    '- If any sample feels misplaced, inspect the whole collection or split the mapping again.',
    '- Treat raw candidate-track overlap as a weak signal only; several miners used older heuristic target ids.',
    '- Treat prompt-quality flags as blockers before live course exposure.',
    '- For small entries, review every question before exposing them.',
    '- Held sources are preserved in JSON but omitted from the main Markdown queue.',
    '',
    '## Overall',
    '',
    `- Mapping entries audited: ${rows.length}`,
    `- Priority entries shown: ${priorityRows.length}`,
    `- Sampled questions in priority queue: ${priorityRows.reduce((sum, row) => sum + row.sampleCount, 0)}`,
    '',
    '## Priority Queue',
    '',
  ]

  for (const row of priorityRows) {
    lines.push(`### ${row.entryId}`)
    lines.push('')
    lines.push(`- Source: ${row.sourceName} (\`${row.sourceFolder}\`)`)
    lines.push(`- Status: ${row.exposureStatus}; Confidence: ${row.confidence}; Risk score: ${row.riskScore}`)
    lines.push(`- Matched questions: ${row.matchedQuestionCount}`)
    lines.push(`- Target family: ${row.targetFamily}`)
    lines.push(`- Existing track ids: ${row.targetTrackIds.join(', ') || 'none'}`)
    lines.push(
      `- Proposed tracks: ${
        row.proposedTracks.length > 0
          ? row.proposedTracks.map((track) => `${track.id} (${track.title})`).join(', ')
          : 'none'
      }`,
    )
    lines.push(`- Review recommendation: ${row.reviewRecommendation}`)
    lines.push('')
    lines.push('Samples:')
    lines.push('')

    for (const sample of row.samples) {
      lines.push(`- Raw index ${sample.rawIndex}; collection \`${sample.collectionId}\``)
      lines.push(`  Source id: ${sample.sourceId || 'none'}`)
      if (sample.title) lines.push(`  Title: ${compactText(sample.title)}`)
      lines.push(`  Prompt: ${sample.prompt || '[missing prompt preview]'}`)
      if (sample.answerEvidence) lines.push(`  Answer evidence: ${sample.answerEvidence}`)
      lines.push(
        `  Raw candidates: ${
          sample.rawCandidateTrackIds.length > 0 ? sample.rawCandidateTrackIds.join(', ') : 'none'
        }`,
      )
      lines.push(`  Candidate overlap: ${sample.candidateOverlapsTargets ? 'yes' : 'no'}`)
      if (sample.promptQualityFlags.length > 0) {
        lines.push(`  Prompt quality flags: ${sample.promptQualityFlags.join(', ')}`)
      }
    }
    lines.push('')
  }

  return `${lines.join('\n')}\n`
}

function main() {
  const rows = buildAuditRows()
  const outputDir = path.join(repoRoot, 'reports')
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'raw-collection-mapping-audit.json'), JSON.stringify(rows, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'raw-collection-mapping-audit.md'), buildMarkdown(rows), 'utf8')

  console.log(`Wrote mapping audit for ${rows.length} entries.`)
  for (const row of rows.sort((left, right) => right.riskScore - left.riskScore).slice(0, 12)) {
    console.log(`${row.entryId}: risk=${row.riskScore}, samples=${row.sampleCount}`)
  }
}

main()
