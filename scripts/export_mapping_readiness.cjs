const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const reportsDir = path.join(repoRoot, 'reports')
const auditPath = path.join(reportsDir, 'raw-collection-mapping-audit.json')

const gateOrder = [
  'needs-extraction-fix',
  'routing-review',
  'review-fully',
  'ready-to-wire',
  'design-new-course',
  'support-bank',
  'hold',
]

const gateLabels = {
  'needs-extraction-fix': 'Needs Extraction Fix',
  'routing-review': 'Needs Routing Review',
  'review-fully': 'Review Fully',
  'ready-to-wire': 'Ready To Wire',
  'design-new-course': 'Design New Course',
  'support-bank': 'Support Bank',
  hold: 'Hold',
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function compactList(values) {
  if (!values || values.length === 0) return 'none'
  return values.join(', ')
}

function proposedTrackLabel(tracks) {
  if (!tracks || tracks.length === 0) return 'none'
  return tracks.map((track) => `${track.id} (${track.title})`).join(', ')
}

function suggestedReviewCount(row, gate) {
  if (gate === 'needs-extraction-fix' || gate === 'hold') return 0
  if (gate === 'review-fully') return row.matchedQuestionCount
  if (gate === 'design-new-course') return Math.min(row.matchedQuestionCount, 40)
  if (gate === 'support-bank') return Math.min(row.matchedQuestionCount, Math.max(row.sampleCount, 10))
  return Math.min(row.matchedQuestionCount, Math.max(row.sampleCount, Math.ceil(row.matchedQuestionCount / 50)))
}

function reviewPlan(row, gate) {
  if (gate === 'needs-extraction-fix') {
    return 'Fix or rerun the extractor first; do not spend human review time routing malformed rows.'
  }
  if (gate === 'routing-review') {
    return 'Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.'
  }
  if (gate === 'review-fully') {
    return `Read all ${row.matchedQuestionCount} questions before wiring; the entry is small enough that sampling is not worth the risk.`
  }
  if (gate === 'ready-to-wire') {
    return 'Do a final every-50th spot check, then wire to the listed existing tracks.'
  }
  if (gate === 'design-new-course') {
    return 'Review representative samples, define the course boundary, then split chapters before importing.'
  }
  if (gate === 'support-bank') {
    return 'Keep as a curated reserve; only promote into live courses after a specific course needs it.'
  }
  return 'Do not review for live mapping yet.'
}

function readinessForRow(row) {
  const reasons = []
  let gate = 'ready-to-wire'

  if (row.exposureStatus === 'hold') {
    gate = 'hold'
    reasons.push('Marked hold in the source mapping manifest.')
  } else if (row.samplePromptQualityIssueCount > 0) {
    gate = 'needs-extraction-fix'
    reasons.push(`${row.samplePromptQualityIssueCount}/${row.sampleCount} sampled prompts had quality flags.`)
  } else if (row.exposureStatus === 'seed-new-course') {
    gate = 'design-new-course'
    reasons.push('Mapped as a new-course seed rather than a direct live import.')
  } else if (row.exposureStatus === 'support-bank') {
    gate = 'support-bank'
    reasons.push('Mapped as support-bank material, not a direct live import.')
  } else if (row.matchedQuestionCount <= 30) {
    gate = 'review-fully'
    reasons.push('Small entry; full manual review is cheap and safer than sampling.')
  } else if (row.confidence === 'low') {
    gate = 'routing-review'
    reasons.push('Low confidence mapping.')
  } else if (row.sampleCandidateMismatchCount > 0) {
    gate = 'routing-review'
    reasons.push(`${row.sampleCandidateMismatchCount}/${row.sampleCount} samples disagreed with raw candidate tracks.`)
  } else if (row.targetTrackIds.length === 0) {
    gate = 'routing-review'
    reasons.push('No existing target track is listed.')
  } else {
    reasons.push('No sampled extraction blockers; manifest targets existing tracks.')
  }

  return {
    ...row,
    readinessGate: gate,
    readinessLabel: gateLabels[gate],
    readinessReasons: reasons,
    suggestedReviewCount: suggestedReviewCount(row, gate),
    reviewPlan: reviewPlan(row, gate),
  }
}

function summarize(rows) {
  const gates = new Map(gateOrder.map((gate) => [gate, { gate, label: gateLabels[gate], entries: 0, questions: 0 }]))
  for (const row of rows) {
    const bucket = gates.get(row.readinessGate)
    bucket.entries += 1
    bucket.questions += row.matchedQuestionCount
  }

  const sourceBlocks = new Map()
  for (const row of rows.filter((item) => item.readinessGate === 'needs-extraction-fix')) {
    const current = sourceBlocks.get(row.sourceFolder) ?? {
      sourceFolder: row.sourceFolder,
      sourceName: row.sourceName,
      entries: 0,
      questions: 0,
      sampledPromptIssues: 0,
      mapNowEntries: 0,
    }
    current.entries += 1
    current.questions += row.matchedQuestionCount
    current.sampledPromptIssues += row.samplePromptQualityIssueCount
    if (row.exposureStatus === 'map-now') current.mapNowEntries += 1
    sourceBlocks.set(row.sourceFolder, current)
  }

  return {
    generatedAt: new Date().toISOString(),
    totalEntries: rows.length,
    totalMatchedQuestions: rows.reduce((sum, row) => sum + row.matchedQuestionCount, 0),
    gates: Array.from(gates.values()),
    extractionBlockedSources: Array.from(sourceBlocks.values()).sort((left, right) => {
      if (right.mapNowEntries !== left.mapNowEntries) return right.mapNowEntries - left.mapNowEntries
      return right.questions - left.questions
    }),
  }
}

function sortRows(rows) {
  return [...rows].sort((left, right) => {
    const gateDelta = gateOrder.indexOf(left.readinessGate) - gateOrder.indexOf(right.readinessGate)
    if (gateDelta !== 0) return gateDelta
    if (right.riskScore !== left.riskScore) return right.riskScore - left.riskScore
    return right.matchedQuestionCount - left.matchedQuestionCount
  })
}

function sampleFlagSummary(row) {
  const flags = new Map()
  for (const sample of row.samples ?? []) {
    for (const flag of sample.promptQualityFlags ?? []) {
      flags.set(flag, (flags.get(flag) ?? 0) + 1)
    }
  }
  if (flags.size === 0) return 'none'
  return Array.from(flags.entries())
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([flag, count]) => `${flag} x${count}`)
    .join(', ')
}

function rowsForMarkdown(rows, gate, maxRows) {
  const filtered = rows.filter((row) => row.readinessGate === gate)
  return maxRows ? filtered.slice(0, maxRows) : filtered
}

function buildMarkdown({ rows, summary }) {
  const sortedRows = sortRows(rows)
  const lines = [
    '# Raw Collection Mapping Readiness',
    '',
    `Generated on ${summary.generatedAt}.`,
    '',
    '## Operating Rule',
    '',
    '- Extraction quality and course routing are separate gates.',
    '- A source can have the right course target and still be blocked if the mined prompt is an answer-key row, copyright page, fragment, or standards table.',
    '- For live imports, do not wire a mapping entry until it is either fully reviewed or its samples plus every-50th spot checks are clean.',
    '',
    '## Overall',
    '',
    `- Mapping entries: ${summary.totalEntries}`,
    `- Matched raw questions/tasks: ${summary.totalMatchedQuestions}`,
  ]

  for (const gate of summary.gates) {
    lines.push(`- ${gate.label}: ${gate.entries} entries / ${gate.questions} questions`)
  }

  lines.push('')
  lines.push('## Immediate Queue')
  lines.push('')

  for (const source of summary.extractionBlockedSources.slice(0, 30)) {
    lines.push(
      `- ${source.sourceName} (\`${source.sourceFolder}\`): ${source.entries} blocked entries, ${source.mapNowEntries} were marked map-now, ${source.questions} matched questions`,
    )
  }

  if (summary.extractionBlockedSources.length === 0) {
    lines.push('- No extraction-blocked sources.')
  }

  lines.push('')

  const sectionDefs = [
    ['needs-extraction-fix', 80],
    ['routing-review', 80],
    ['review-fully', 80],
    ['ready-to-wire', 80],
    ['design-new-course', 80],
    ['support-bank', 80],
    ['hold', 40],
  ]

  for (const [gate, maxRows] of sectionDefs) {
    const sectionRows = rowsForMarkdown(sortedRows, gate, maxRows)
    lines.push(`## ${gateLabels[gate]}`)
    lines.push('')

    if (sectionRows.length === 0) {
      lines.push('- None')
      lines.push('')
      continue
    }

    for (const row of sectionRows) {
      lines.push(`### ${row.entryId}`)
      lines.push('')
      lines.push(`- Source: ${row.sourceName} (\`${row.sourceFolder}\`)`)
      lines.push(`- Status/confidence: ${row.exposureStatus} / ${row.confidence}`)
      lines.push(`- Matched questions: ${row.matchedQuestionCount}`)
      lines.push(`- Target family: ${row.targetFamily}`)
      lines.push(`- Existing tracks: ${compactList(row.targetTrackIds)}`)
      lines.push(`- Proposed tracks: ${proposedTrackLabel(row.proposedTracks)}`)
      lines.push(`- Sample prompt flags: ${sampleFlagSummary(row)}`)
      lines.push(`- Suggested manual reads: ${row.suggestedReviewCount}`)
      lines.push(`- Reason: ${row.readinessReasons.join(' ')}`)
      lines.push(`- Plan: ${row.reviewPlan}`)
      lines.push('')
    }

    const totalRows = rows.filter((row) => row.readinessGate === gate).length
    if (totalRows > sectionRows.length) {
      lines.push(`_Showing first ${sectionRows.length} of ${totalRows} entries in this gate._`)
      lines.push('')
    }
  }

  return `${lines.join('\n')}\n`
}

function main() {
  if (!fs.existsSync(auditPath)) {
    throw new Error('Missing audit JSON. Run npm run review:mapping-audit first.')
  }

  const auditRows = readJson(auditPath)
  const rows = sortRows(auditRows.map(readinessForRow))
  const summary = summarize(rows)
  const payload = { summary, rows }

  fs.mkdirSync(reportsDir, { recursive: true })
  fs.writeFileSync(path.join(reportsDir, 'raw-collection-mapping-readiness.json'), JSON.stringify(payload, null, 2), 'utf8')
  fs.writeFileSync(path.join(reportsDir, 'raw-collection-mapping-readiness.md'), buildMarkdown(payload), 'utf8')

  console.log(`Wrote mapping readiness for ${rows.length} entries.`)
  for (const gate of summary.gates) {
    console.log(`${gate.gate}: ${gate.entries} entries / ${gate.questions} questions`)
  }
}

main()
