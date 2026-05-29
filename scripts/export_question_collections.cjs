const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')

const repoRoot = path.resolve(__dirname, '..')

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

const { summarizeQuestionReviews } = require(path.join(repoRoot, 'src/data/questionCatalog/review.ts'))
const { normalizeQuestionCatalog } = require(path.join(repoRoot, 'src/lib/quizRuntime.ts'))

const catalogDefinitions = [
  ['primary', 'src/data/questionCatalog/primary.ts', 'buildPrimaryQuestionCatalog'],
  ['high-math', 'src/data/questionCatalog/highMath.ts', 'buildHighMathQuestionCatalog'],
  ['high-advanced', 'src/data/questionCatalog/highAdvanced.ts', 'buildHighAdvancedQuestionCatalog'],
  ['high-fun', 'src/data/questionCatalog/highFun.ts', 'buildHighFunQuestionCatalog'],
  ['university-college', 'src/data/questionCatalog/universityCollege.ts', 'buildUniversityCollegeQuestionCatalog'],
  ['university-academic', 'src/data/questionCatalog/universityAcademic.ts', 'buildUniversityAcademicQuestionCatalog'],
  ['university-prep', 'src/data/questionCatalog/universityPrep.ts', 'buildUniversityPrepQuestionCatalog'],
  ['career', 'src/data/questionCatalog/career.ts', 'buildCareerQuestionCatalog'],
]

function loadCatalog(modulePath, exportName) {
  const moduleExports = require(path.join(repoRoot, modulePath))
  const builder = moduleExports[exportName]

  if (typeof builder !== 'function') {
    throw new Error(`Missing ${exportName} in ${modulePath}`)
  }

  return normalizeQuestionCatalog(builder())
}

function upsertCollection(map, catalogKey, trackId, question) {
  const collection = question.collection
  if (!collection) return

  const existing = map.get(collection.collectionId) ?? {
    collectionId: collection.collectionId,
    collectionLabel: collection.collectionLabel,
    sourceName: collection.sourceName,
    sourceLicense: collection.sourceLicense,
    sourceTrackId: collection.sourceTrackId,
    catalogKeys: new Set(),
    currentTrackIds: new Set(),
    chapters: new Set(),
    topicTags: new Set(),
    totalQuestions: 0,
    playableQuestions: 0,
    recoverableQuestions: 0,
    quarantinedQuestions: 0,
  }

  existing.catalogKeys.add(catalogKey)
  existing.currentTrackIds.add(trackId)
  if (collection.sourceChapter) existing.chapters.add(collection.sourceChapter)
  for (const tag of collection.topicTags ?? []) {
    existing.topicTags.add(tag)
  }

  existing.totalQuestions += 1
  const review = summarizeQuestionReviews([question])
  existing.playableQuestions += review.playable
  existing.recoverableQuestions += review.recoverable
  existing.quarantinedQuestions += review.quarantined

  map.set(collection.collectionId, existing)
}

function buildRows() {
  const collections = new Map()

  for (const [catalogKey, modulePath, exportName] of catalogDefinitions) {
    const catalog = loadCatalog(modulePath, exportName)
    for (const [trackId, questions] of Object.entries(catalog)) {
      for (const question of questions) {
        upsertCollection(collections, catalogKey, trackId, question)
      }
    }
  }

  return Array.from(collections.values())
    .map((row) => ({
      ...row,
      catalogKeys: Array.from(row.catalogKeys).sort(),
      currentTrackIds: Array.from(row.currentTrackIds).sort(),
      chapters: Array.from(row.chapters).sort(),
      topicTags: Array.from(row.topicTags).sort(),
      chapterCount: row.chapters.size,
    }))
    .sort((left, right) => {
      if (right.totalQuestions !== left.totalQuestions) return right.totalQuestions - left.totalQuestions
      return left.collectionId.localeCompare(right.collectionId)
    })
}

function buildMarkdown(rows) {
  const totalQuestions = rows.reduce((sum, row) => sum + row.totalQuestions, 0)
  const totalPlayable = rows.reduce((sum, row) => sum + row.playableQuestions, 0)
  const totalRecoverable = rows.reduce((sum, row) => sum + row.recoverableQuestions, 0)
  const totalQuarantined = rows.reduce((sum, row) => sum + row.quarantinedQuestions, 0)

  const lines = [
    '# Question Collections',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    '## Overall',
    '',
    `- Collections: ${rows.length}`,
    `- Total questions: ${totalQuestions}`,
    `- Playable: ${totalPlayable}`,
    `- Recoverable: ${totalRecoverable}`,
    `- Quarantined: ${totalQuarantined}`,
    '',
    '## Largest Collections',
    '',
  ]

  for (const row of rows.slice(0, 40)) {
    lines.push(`### ${row.collectionLabel}`)
    lines.push('')
    lines.push(`- Collection ID: \`${row.collectionId}\``)
    lines.push(`- Source: ${row.sourceName}`)
    lines.push(`- License: ${row.sourceLicense}`)
    lines.push(`- Questions: ${row.totalQuestions}`)
    lines.push(`- Playable: ${row.playableQuestions}`)
    lines.push(`- Recoverable: ${row.recoverableQuestions}`)
    lines.push(`- Quarantined: ${row.quarantinedQuestions}`)
    lines.push(`- Current track ids: ${row.currentTrackIds.join(', ')}`)
    lines.push(`- Catalog keys: ${row.catalogKeys.join(', ')}`)
    lines.push(`- Chapters: ${row.chapterCount}`)
    lines.push(`- Topic tags: ${row.topicTags.join(', ')}`)
    lines.push('')
  }

  return `${lines.join('\n')}\n`
}

function main() {
  const rows = buildRows()
  const outputDir = path.join(repoRoot, 'reports')
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'question-collections.json'), JSON.stringify(rows, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-collections.md'), buildMarkdown(rows), 'utf8')

  console.log(`Wrote ${rows.length} question collections.`)
  for (const row of rows.slice(0, 10)) {
    console.log(`${row.collectionId}: questions=${row.totalQuestions}, playable=${row.playableQuestions}`)
  }
}

main()
