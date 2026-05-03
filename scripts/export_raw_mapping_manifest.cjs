const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')

const repoRoot = path.resolve(__dirname, '..')
const rawCollectionsDir = path.join(repoRoot, 'data', 'raw_collections')

function registerTypeScriptRequireHook() {
  const defaultJsHandler = Module._extensions['.js']

  Module._extensions['.ts'] = function compileTypeScript(module, filename) {
    const source = fs.readFileSync(filename, 'utf8')
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
        verbatimModuleSyntax: false,
      },
      fileName: filename,
    })

    module._compile(outputText, filename)
  }

  Module._extensions['.tsx'] = defaultJsHandler
}

registerTypeScriptRequireHook()

const { rawCollectionMappings } = require(path.join(
  repoRoot,
  'src/data/questionCatalog/rawCollectionMappings.ts',
))

function loadRawSource(folderName) {
  const folder = path.join(rawCollectionsDir, folderName)
  const jsonFiles = fs.readdirSync(folder).filter((name) => name.endsWith('.json')).sort()
  if (jsonFiles.length === 0) {
    throw new Error(`No JSON files found for raw source folder ${folderName}`)
  }

  const payload = JSON.parse(fs.readFileSync(path.join(folder, jsonFiles[0]), 'utf8'))
  const items = payload.items ?? []

  return {
    folderName,
    sourceName: payload.source ?? folderName,
    questionCount: payload.questionCount ?? items.length,
    license: payload.license ?? 'unspecified',
    items,
  }
}

function entryMatchesItem(entry, item) {
  if (entry.scope === 'source') return true
  return Boolean(entry.collectionIds?.includes(item.collection_id))
}

function validateEntriesBySource(rawSource, entries) {
  const collectionIds = new Set(rawSource.items.map((item) => item.collection_id).filter(Boolean))
  for (const entry of entries) {
    if (entry.scope === 'source' && entry.exposureStatus === 'map-now') {
      throw new Error(
        `Source-scoped map-now entry ${entry.id} is too coarse; use collection-scoped mappings instead`,
      )
    }

    if (entry.exposureStatus === 'map-now' && entry.targetTrackIds.length === 0) {
      throw new Error(`Map-now entry ${entry.id} must target at least one existing track id`)
    }

    if (entry.scope !== 'collections') continue
    for (const collectionId of entry.collectionIds ?? []) {
      if (!collectionIds.has(collectionId)) {
        throw new Error(
          `Unknown collection id ${collectionId} in entry ${entry.id} for source ${rawSource.folderName}`,
        )
      }
    }
  }
}

function summarizeSource(rawSource, entries) {
  validateEntriesBySource(rawSource, entries)

  const covered = new Set()
  const entryRows = entries.map((entry) => {
    let matchedQuestionCount = 0
    for (const [index, item] of rawSource.items.entries()) {
      if (!entryMatchesItem(entry, item)) continue
      matchedQuestionCount += 1
      covered.add(index)
    }
    return {
      ...entry,
      matchedQuestionCount,
    }
  })

  const coveragePercent =
    rawSource.items.length === 0 ? 0 : Math.round((covered.size / rawSource.items.length) * 1000) / 10

  return {
    ...rawSource,
    entries: entryRows.sort((left, right) => right.matchedQuestionCount - left.matchedQuestionCount),
    coveredQuestionCount: covered.size,
    coveragePercent,
  }
}

function buildRows() {
  const rawSources = fs
    .readdirSync(rawCollectionsDir)
    .filter((name) => fs.statSync(path.join(rawCollectionsDir, name)).isDirectory())
    .map(loadRawSource)

  const rows = rawSources
    .map((rawSource) => {
      const entries = rawCollectionMappings
        .filter((entry) => entry.sourceFolder === rawSource.folderName)
        .filter((entry) => entry.scope !== 'collections' || (entry.collectionIds?.length ?? 0) > 0)
      return summarizeSource(rawSource, entries)
    })
    .sort((left, right) => {
      if (right.questionCount !== left.questionCount) return right.questionCount - left.questionCount
      return left.folderName.localeCompare(right.folderName)
    })

  const mappedSourceFolders = new Set(rawCollectionMappings.map((entry) => entry.sourceFolder))
  const unmappedSources = rows.filter((row) => !mappedSourceFolders.has(row.folderName)).map((row) => row.folderName)

  const proposedTracks = new Map()
  for (const entry of rawCollectionMappings) {
    for (const proposedTrack of entry.proposedTracks) {
      if (!proposedTracks.has(proposedTrack.id)) {
        proposedTracks.set(proposedTrack.id, {
          ...proposedTrack,
          sourceFolders: new Set([entry.sourceFolder]),
        })
      } else {
        proposedTracks.get(proposedTrack.id).sourceFolders.add(entry.sourceFolder)
      }
    }
  }

  return {
    rows,
    unmappedSources,
    proposedTracks: Array.from(proposedTracks.values())
      .map((track) => ({
        ...track,
        sourceFolders: Array.from(track.sourceFolders).sort(),
      }))
      .sort((left, right) => left.title.localeCompare(right.title)),
  }
}

function buildMarkdown({ rows, unmappedSources, proposedTracks }) {
  const fullyCovered = rows.filter((row) => row.coveragePercent === 100).length
  const partiallyCovered = rows.filter((row) => row.coveragePercent > 0 && row.coveragePercent < 100).length
  const untouched = rows.filter((row) => row.coveragePercent === 0).length

  const lines = [
    '# Raw Collection Mapping Manifest',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    '## Overall',
    '',
    `- Raw source folders: ${rows.length}`,
    `- Explicit mapping entries: ${rawCollectionMappings.length}`,
    `- Fully covered sources: ${fullyCovered}`,
    `- Partially covered sources: ${partiallyCovered}`,
    `- Untouched sources: ${untouched}`,
    `- Unmapped source folders: ${unmappedSources.length}`,
    '',
    '## Proposed New Tracks',
    '',
  ]

  if (proposedTracks.length === 0) {
    lines.push('- None')
    lines.push('')
  } else {
    for (const track of proposedTracks) {
      lines.push(`- \`${track.id}\` ${track.title}`)
      lines.push(`  Sources: ${track.sourceFolders.join(', ')}`)
      if (track.notes) {
        lines.push(`  Notes: ${track.notes}`)
      }
    }
    lines.push('')
  }

  if (unmappedSources.length > 0) {
    lines.push('## Unmapped Sources')
    lines.push('')
    for (const folderName of unmappedSources) {
      lines.push(`- ${folderName}`)
    }
    lines.push('')
  }

  lines.push('## Source Coverage')
  lines.push('')

  for (const row of rows) {
    lines.push(`### ${row.sourceName}`)
    lines.push('')
    lines.push(`- Folder: \`${row.folderName}\``)
    lines.push(`- Questions/tasks: ${row.questionCount}`)
    lines.push(`- License: ${row.license}`)
    lines.push(`- Covered by manifest: ${row.coveredQuestionCount} (${row.coveragePercent}%)`)

    if (row.entries.length === 0) {
      lines.push(`- Status: no explicit mapping entries yet`)
      lines.push('')
      continue
    }

    lines.push('- Entries:')
    lines.push('')
    for (const entry of row.entries) {
      lines.push(`  - \`${entry.id}\``)
      lines.push(`    Family: ${entry.targetFamily}`)
      lines.push(`    Status: ${entry.exposureStatus}; Confidence: ${entry.confidence}`)
      lines.push(`    Scope: ${entry.scope}; Matched questions: ${entry.matchedQuestionCount}`)
      lines.push(`    Existing track ids: ${entry.targetTrackIds.join(', ') || 'none'}`)
      lines.push(
        `    Proposed tracks: ${
          entry.proposedTracks.length > 0
            ? entry.proposedTracks.map((track) => `${track.id} (${track.title})`).join(', ')
            : 'none'
        }`,
      )
      lines.push(`    Notes: ${entry.notes.join(' ')}`)
    }
    lines.push('')
  }

  return `${lines.join('\n')}\n`
}

function main() {
  const result = buildRows()
  const outputDir = path.join(repoRoot, 'reports')
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(
    path.join(outputDir, 'raw-collection-mapping-manifest.json'),
    JSON.stringify(result, null, 2),
    'utf8',
  )
  fs.writeFileSync(
    path.join(outputDir, 'raw-collection-mapping-manifest.md'),
    buildMarkdown(result),
    'utf8',
  )

  console.log(`Wrote mapping manifest for ${result.rows.length} raw sources.`)
  console.log(`Unmapped sources: ${result.unmappedSources.length}`)
  for (const row of result.rows.slice(0, 12)) {
    console.log(`${row.folderName}: coverage=${row.coveragePercent}% questions=${row.questionCount}`)
  }
}

main()
