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

const {
  summarizeQuestionFlags,
  summarizeQuestionReviews,
} = require(path.join(repoRoot, 'src/data/questionCatalog/review.ts'))
const {
  countPlayableQuestions,
  normalizeQuestionCatalog,
} = require(path.join(repoRoot, 'src/lib/quizRuntime.ts'))

const catalogDefinitions = [
  {
    catalogKey: 'primary',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/primary.ts'),
    exportName: 'buildPrimaryQuestionCatalog',
  },
  {
    catalogKey: 'high-math',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/highMath.ts'),
    exportName: 'buildHighMathQuestionCatalog',
  },
  {
    catalogKey: 'high-advanced',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/highAdvanced.ts'),
    exportName: 'buildHighAdvancedQuestionCatalog',
  },
  {
    catalogKey: 'high-fun',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/highFun.ts'),
    exportName: 'buildHighFunQuestionCatalog',
  },
  {
    catalogKey: 'university-college',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/universityCollege.ts'),
    exportName: 'buildUniversityCollegeQuestionCatalog',
  },
  {
    catalogKey: 'university-academic',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/universityAcademic.ts'),
    exportName: 'buildUniversityAcademicQuestionCatalog',
  },
  {
    catalogKey: 'university-prep',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/universityPrep.ts'),
    exportName: 'buildUniversityPrepQuestionCatalog',
  },
  {
    catalogKey: 'career',
    modulePath: path.join(repoRoot, 'src/data/questionCatalog/career.ts'),
    exportName: 'buildCareerQuestionCatalog',
  },
]

function compareRows(left, right) {
  const leftBlocked = left.recoverable + left.quarantined
  const rightBlocked = right.recoverable + right.quarantined
  if (rightBlocked !== leftBlocked) return rightBlocked - leftBlocked
  if (left.playable !== right.playable) return left.playable - right.playable
  return left.trackId.localeCompare(right.trackId)
}

function truncatePrompt(prompt) {
  const compact = prompt.replace(/\s+/g, ' ').trim()
  return compact.length > 180 ? `${compact.slice(0, 177)}...` : compact
}

function summarizeTrack(catalogKey, trackId, questions) {
  const reviewSummary = summarizeQuestionReviews(questions)
  const flagSummary = Object.entries(summarizeQuestionFlags(questions))
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5)

  const sampleQuestions = questions
    .filter((question) => question.review && question.review.status !== 'playable')
    .slice(0, 8)
    .map((question) => ({
      id: question.id,
      title: question.title,
      chapter: question.chapter,
      status: question.review?.status ?? 'quarantined',
      flags: question.review?.flags ?? [],
      prompt: truncatePrompt(question.prompt),
    }))

  return {
    catalogKey,
    trackId,
    total: questions.length,
    playable: countPlayableQuestions(questions),
    recoverable: reviewSummary.recoverable,
    quarantined: reviewSummary.quarantined,
    topFlags: flagSummary,
    sampleQuestions,
  }
}

function formatFlagSummary(flags) {
  if (flags.length === 0) return 'none'
  return flags.map(([flag, count]) => `${flag} (${count})`).join(', ')
}

function buildMarkdown(rows) {
  const totalQuestions = rows.reduce((sum, row) => sum + row.total, 0)
  const totalPlayable = rows.reduce((sum, row) => sum + row.playable, 0)
  const totalRecoverable = rows.reduce((sum, row) => sum + row.recoverable, 0)
  const totalQuarantined = rows.reduce((sum, row) => sum + row.quarantined, 0)

  const lines = [
    '# Question Review Queue',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    '## Overall',
    '',
    `- Total questions: ${totalQuestions}`,
    `- Playable: ${totalPlayable}`,
    `- Recoverable: ${totalRecoverable}`,
    `- Quarantined: ${totalQuarantined}`,
    '',
    '## Priority Tracks',
    '',
  ]

  for (const row of rows) {
    const blocked = row.recoverable + row.quarantined
    if (blocked === 0) continue

    lines.push(`### ${row.trackId} (${row.catalogKey})`)
    lines.push('')
    lines.push(`- Total: ${row.total}`)
    lines.push(`- Playable: ${row.playable}`)
    lines.push(`- Recoverable: ${row.recoverable}`)
    lines.push(`- Quarantined: ${row.quarantined}`)
    lines.push(`- Top flags: ${formatFlagSummary(row.topFlags)}`)
    lines.push('')

    if (row.sampleQuestions.length > 0) {
      lines.push('Sample blocked questions:')
      lines.push('')
      for (const question of row.sampleQuestions) {
        lines.push(`- \`${question.id}\` ${question.title} [${question.chapter}]`)
        lines.push(`  Status: ${question.status}; Flags: ${question.flags.join(', ') || 'none'}`)
        lines.push(`  Prompt: ${question.prompt}`)
      }
      lines.push('')
    }
  }

  return `${lines.join('\n')}\n`
}

function loadCatalog(definition) {
  const moduleExports = require(definition.modulePath)
  const builder = moduleExports[definition.exportName]

  if (typeof builder !== 'function') {
    throw new Error(`Missing ${definition.exportName} in ${definition.modulePath}`)
  }

  return normalizeQuestionCatalog(builder())
}

function main() {
  const rows = []

  for (const definition of catalogDefinitions) {
    const catalog = loadCatalog(definition)
    for (const [trackId, questions] of Object.entries(catalog)) {
      rows.push(summarizeTrack(definition.catalogKey, trackId, questions))
    }
  }

  rows.sort(compareRows)

  const outputDir = path.join(repoRoot, 'reports')
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'question-review-queue.json'), JSON.stringify(rows, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-review-queue.md'), buildMarkdown(rows), 'utf8')

  const topRows = rows
    .filter((row) => row.recoverable + row.quarantined > 0)
    .slice(0, 10)
    .map((row) => `${row.trackId}: blocked=${row.recoverable + row.quarantined}, playable=${row.playable}`)

  console.log(`Wrote review queue for ${rows.length} tracks.`)
  console.log(topRows.join('\n'))
}

main()
