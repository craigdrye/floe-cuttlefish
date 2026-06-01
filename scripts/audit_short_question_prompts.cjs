const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')

const repoRoot = path.resolve(__dirname, '..')
const outputDir = path.join(repoRoot, 'reports')

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

const { normalizeQuestionCatalog } = require(path.join(repoRoot, 'src/lib/quizRuntime.ts'))

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

function cleanPrompt(value) {
  return value
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+]\([^)]+\)/g, ' ')
    .replace(/\$[^$]*\$/g, ' math ')
    .replace(/[*_`#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function countWords(value) {
  return (cleanPrompt(value).match(/[A-Za-z][A-Za-z'-]*/g) ?? []).length
}

function normalizeText(value = '') {
  return value
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function promptFlags(prompt) {
  const clean = cleanPrompt(prompt)
  const words = countWords(prompt)
  const hasQuestionShape = /[?]/.test(clean) || /^(what|which|why|how|when|where|who|select|choose|pick|find|solve|calculate|identify|explain|evaluate|graph|simplify|fill)\b/i.test(clean)
  const hasSentencePunctuation = /[.?!:]$/.test(clean)
  const hasFiniteVerb = /\b(is|are|was|were|be|being|been|has|have|had|do|does|did|can|could|should|would|will|might|must|means|asks|shows|describes|explains|requires|depends|involves|evaluate|find|solve|choose|identify|select|calculate|graph|simplify|fill)\b/i.test(clean)

  const flags = []
  if (!clean && /!\[[^\]]*]\([^)]+\)/.test(prompt)) flags.push('prompt-media-only')
  else if (words <= 2 && !/[?]/.test(clean)) flags.push('prompt-term-only')
  else if (words < 4 && !hasQuestionShape) flags.push('prompt-too-short')
  else if (!hasQuestionShape && (!hasSentencePunctuation || !hasFiniteVerb)) flags.push('prompt-not-sentence-like')
  return flags
}

function correctAnswer(question) {
  return question.answers.find((answer) => answer.correct)
}

function thinSolutionFlags(question) {
  const flags = []
  const solution = normalizeText(question.solution)
  const correct = normalizeText(correctAnswer(question)?.label)

  if (!solution) flags.push('missing-solution')
  else if (correct && solution === correct) flags.push('solution-answer-only')
  else if (countWords(question.solution) < 9) flags.push('solution-too-thin')
  if (/^worked solution:\s*/i.test(question.solution ?? '')) flags.push('solution-has-label')

  return flags
}

function lessonFlags(question) {
  const lesson = normalizeText(question.lesson)
  if (!lesson) return ['missing-lesson']

  const flags = []
  if (countWords(question.lesson) < 32) flags.push('lesson-too-thin')
  if ([
    'is useful because it names a recurring question',
    'use the wording of the prompt',
    'decide whether it is asking for a definition',
    'correct answer:',
    'floe is still drafting',
  ].some((pattern) => lesson.includes(pattern))) {
    flags.push('lesson-template-like')
  }
  return flags
}

function hintFlags(question) {
  const hint = normalizeText(question.mentorHint)
  if (!hint) return ['missing-hint']

  const flags = []
  if (countWords(question.mentorHint) < 7) flags.push('hint-too-thin')
  if ([
    'name the rule first',
    'name the quantity out loud',
    'ask what the system is optimizing',
    'ask what would have to be true',
    'rebuild the argument in plain language',
    'use the actual setup details',
    'test the mechanism, not just the vibe',
    'before choosing an answer',
    'translate the question into the core concept',
  ].some((pattern) => hint.includes(pattern))) {
    flags.push('hint-generic')
  }
  return flags
}

function answerQualityFlags(question) {
  const flags = []
  const wrongAnswers = question.answers.filter((answer) => !answer.correct)
  const metaDistractors = wrongAnswers.filter((answer) => {
    const label = normalizeText(answer.label)
    return [
      /^answer with\b/,
      /^answer only\b/,
      /^answer the first\b/,
      /^always answer\b/,
      /^average all answer choices\b/,
      /^use the adjacent concept\b/,
      /^select (?:the answer|it)\b/,
      /^start with the longest\b/,
      /^write one\b/,
      /^pick the\b/,
      /^choose the\b/,
      /^grab the\b/,
      /^assume\b/,
      /^ignore\b/,
      /^rely on a remembered rule\b/,
      /^treat\b.*\bautomatic\b/,
      /^stop at\b/,
      /^skip\b/,
      /without checking/,
      /sounds nicest/,
      /sounds most senior/,
      /broad intuition/,
      /nearest familiar/,
      /vibe/,
    ].some((pattern) => pattern.test(label))
  })

  if (metaDistractors.length > 0) flags.push('meta-distractor')
  if (wrongAnswers.some((answer) => !answer.misconceptions || answer.misconceptions.length === 0)) {
    flags.push('missing-why-wrong')
  }
  return flags
}

function authoringFlags(question) {
  const flags = [
    ...thinSolutionFlags(question),
    ...lessonFlags(question),
    ...hintFlags(question),
    ...answerQualityFlags(question),
  ]

  if (!question.alternatePrompts?.plain && !question.alternatePrompts?.teaching) {
    flags.push('missing-alternate-prompt')
  }
  if (!question.challengeRating) flags.push('missing-challenge-rating')
  if (countWords(question.prompt) < 15) flags.push('prompt-under-15-words')

  return [...new Set(flags)]
}

const AUTHORING_FLAG_WEIGHTS = {
  'solution-answer-only': 8,
  'missing-solution': 8,
  'lesson-template-like': 8,
  'missing-lesson': 7,
  'meta-distractor': 7,
  'solution-too-thin': 6,
  'lesson-too-thin': 5,
  'hint-generic': 5,
  'hint-too-thin': 4,
  'missing-hint': 4,
  'missing-alternate-prompt': 3,
  'missing-why-wrong': 3,
  'missing-challenge-rating': 2,
  'prompt-under-15-words': 2,
  'solution-has-label': 1,
}

const REPAIR_QUEUE_MIN_PRIORITY = 30

function authoringPriorityScore(flags, question) {
  let score = flags.reduce((total, flag) => total + (AUTHORING_FLAG_WEIGHTS[flag] ?? 1), 0)
  const context = normalizeText(`${question.trackId ?? ''} ${question.topic} ${question.chapter} ${question.title} ${question.prompt}`)
  if (/\b(philosophy|logic|ethics|epistemology|metaphysics|validity|soundness|conditional|gettier)\b/.test(context)) score += 5
  if (/\b(statistics|probability|p-value|confidence interval|bayes|sampling|research)\b/.test(context)) score += 4
  if (/\b(finance|quant|interview|valuation|dcf|bond|working capital)\b/.test(context)) score += 3
  return score
}

function estimateChallengeRating(question) {
  const context = `${question.topic} ${question.chapter} ${question.title} ${question.prompt} ${question.lesson ?? ''}`
  const clean = cleanPrompt(context).toLowerCase()
  let score = 3

  if (/\b(primary|year [1-6]|grade [1-5]|arithmetic|basic)\b/.test(clean)) score -= 1
  if (/\b(ap|a-level|university|college|calculus|organic chemistry|formal logic|philosophy|microeconomics|macroeconomics)\b/.test(clean)) score += 2
  if (/\b(prove|derive|evaluate|calculate|interpret|compare|distinguish|infer|explain why|best explains)\b/.test(clean)) score += 1
  if (/\b(counterfactual|underdetermination|categorical imperative|eudaimonia|epistemology|metaphysics|ontology|falsifiability|validity|soundness|utilitarianism|deontology)\b/.test(clean)) score += 2
  if (/\b(scenario|case|following|diagram|graph|table|data|experiment)\b/.test(clean)) score += 1
  if (countWords(question.prompt) < 5) score += 1
  if (countWords(question.prompt) > 35) score += 1

  return Math.max(1, Math.min(10, score))
}

function loadCatalog(definition) {
  const moduleExports = require(definition.modulePath)
  const builder = moduleExports[definition.exportName]

  if (typeof builder !== 'function') {
    throw new Error(`Missing ${definition.exportName} in ${definition.modulePath}`)
  }

  return normalizeQuestionCatalog(builder())
}

function buildRows() {
  const rows = []

  for (const definition of catalogDefinitions) {
    const catalog = loadCatalog(definition)
    for (const [trackId, questions] of Object.entries(catalog)) {
      for (const question of questions) {
        rows.push({
          catalogKey: definition.catalogKey,
          trackId,
          id: question.id,
          title: question.title,
          chapter: question.chapter,
          prompt: question.prompt,
          cleanPrompt: cleanPrompt(question.prompt),
          charCount: cleanPrompt(question.prompt).length,
          wordCount: countWords(question.prompt),
          flags: promptFlags(question.prompt),
          authoringFlags: authoringFlags(question),
          authoringPriority: authoringPriorityScore(authoringFlags(question), { ...question, trackId }),
          reviewStatus: question.review?.status ?? 'unknown',
          reviewFlags: question.review?.flags ?? [],
          challengeRating: question.challengeRating ?? estimateChallengeRating(question),
          source: question.source ?? question.collection?.sourceName ?? 'unknown',
        })
      }
    }
  }

  return rows.sort((left, right) => {
    if (left.authoringPriority !== right.authoringPriority) return right.authoringPriority - left.authoringPriority
    if (left.flags.length !== right.flags.length) return right.flags.length - left.flags.length
    if (left.wordCount !== right.wordCount) return left.wordCount - right.wordCount
    if (left.charCount !== right.charCount) return left.charCount - right.charCount
    return `${left.trackId}:${left.id}`.localeCompare(`${right.trackId}:${right.id}`)
  })
}

function countBy(values) {
  const counts = {}
  for (const value of values) {
    counts[value] = (counts[value] ?? 0) + 1
  }
  return counts
}

function recommendedAction(row) {
  const flags = new Set([...row.flags, ...row.reviewFlags])
  if (flags.has('invalid-correct-answer') || flags.has('insufficient-answer-choices') || flags.has('missing-prompt')) {
    return 'quarantine'
  }
  if (flags.has('prompt-media-only')) return 'rewrite prompt from media'
  if (flags.has('prompt-term-only') || flags.has('prompt-too-short') || flags.has('prompt-not-sentence-like')) {
    return 'rewrite prompt'
  }
  if (flags.has('answer-leakage') || flags.has('placeholder-answer-choice') || flags.has('placeholder-solution')) {
    return 'repair choices/explanation'
  }
  if (flags.has('missing-lesson')) return 'add lesson'
  if (row.wordCount < 8) return 'review for clarity'
  return 'spot-check'
}

function sortedEntries(object) {
  return Object.entries(object).sort((left, right) => {
    if (right[1] !== left[1]) return right[1] - left[1]
    return left[0].localeCompare(right[0])
  })
}

function groupDashboardRows(rows) {
  const groups = new Map()

  for (const row of rows) {
    const key = `${row.catalogKey}/${row.trackId}`
    const group = groups.get(key) ?? {
      catalogKey: row.catalogKey,
      trackId: row.trackId,
      total: 0,
      flagged: 0,
      recoverable: 0,
      quarantined: 0,
      playable: 0,
      flags: {},
      actions: {},
      chapters: {},
      examples: [],
    }

    const action = recommendedAction(row)
    const isFlagged = row.flags.length > 0 || row.reviewFlags.length > 0 || row.reviewStatus !== 'playable'

    group.total += 1
    if (isFlagged) group.flagged += 1
    if (row.reviewStatus === 'recoverable') group.recoverable += 1
    if (row.reviewStatus === 'quarantined') group.quarantined += 1
    if (row.reviewStatus === 'playable') group.playable += 1
    if (isFlagged) {
      group.actions[action] = (group.actions[action] ?? 0) + 1
      group.chapters[row.chapter] = (group.chapters[row.chapter] ?? 0) + 1
    }

    for (const flag of new Set([...row.flags, ...row.reviewFlags])) {
      group.flags[flag] = (group.flags[flag] ?? 0) + 1
    }

    if (isFlagged && group.examples.length < 12) {
      group.examples.push({
        id: row.id,
        title: row.title,
        chapter: row.chapter,
        prompt: row.cleanPrompt || row.prompt,
        flags: [...new Set([...row.flags, ...row.reviewFlags])],
        reviewStatus: row.reviewStatus,
        challengeRating: row.challengeRating,
        action,
      })
    }

    groups.set(key, group)
  }

  return [...groups.values()]
    .map((group) => ({
      ...group,
      flaggedPct: group.total > 0 ? Math.round((group.flagged / group.total) * 100) : 0,
      flags: Object.fromEntries(sortedEntries(group.flags)),
      actions: Object.fromEntries(sortedEntries(group.actions)),
      chapters: Object.fromEntries(sortedEntries(group.chapters).filter(([, count]) => count > 0).slice(0, 12)),
    }))
    .sort((left, right) => {
      if (right.flagged !== left.flagged) return right.flagged - left.flagged
      if (right.flaggedPct !== left.flaggedPct) return right.flaggedPct - left.flaggedPct
      return `${left.catalogKey}/${left.trackId}`.localeCompare(`${right.catalogKey}/${right.trackId}`)
    })
}

function buildMarkdown(rows) {
  const lines = [
    '# Shortest Wired Question Prompts',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    'Only questions reachable through the app course catalog builders are included. These are the highest-priority prompts to review first because short fragments often fail to teach the learner what they are being asked to reason about.',
    '',
    '| Rank | Priority | Challenge | Review | Flags | Authoring Flags | Track | Prompt | Question |',
    '|---:|---:|---:|---|---|---|---|---|---|',
  ]

  rows.slice(0, 250).forEach((row, index) => {
    const prompt = (row.cleanPrompt || row.prompt).replace(/\s+/g, ' ').replace(/\|/g, '\\|')
    const flags = row.flags.join(', ') || 'none'
    const authoring = row.authoringFlags.join(', ') || 'none'
    const track = `${row.catalogKey}/${row.trackId}`.replace(/\|/g, '\\|')
    lines.push(`| ${index + 1} | ${row.authoringPriority} | ${row.challengeRating}/10 | ${row.reviewStatus} | ${flags} | ${authoring} | \`${track}\` | ${prompt} | \`${row.id}\` ${row.title} [${row.chapter}] |`)
  })

  return `${lines.join('\n')}\n`
}

function formatCounts(counts) {
  const entries = sortedEntries(counts).slice(0, 5)
  if (entries.length === 0) return 'none'
  return entries.map(([label, count]) => `${label} (${count})`).join(', ')
}

function escapeTable(value) {
  return String(value).replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim()
}

function buildDashboardMarkdown(groups, rows) {
  const total = rows.length
  const flagged = rows.filter((row) => row.flags.length > 0 || row.reviewFlags.length > 0 || row.reviewStatus !== 'playable').length
  const needsAuthoring = rows.filter((row) => row.authoringPriority >= REPAIR_QUEUE_MIN_PRIORITY).length
  const recoverable = rows.filter((row) => row.reviewStatus === 'recoverable').length
  const quarantined = rows.filter((row) => row.reviewStatus === 'quarantined').length
  const needsReviewRows = rows.filter((row) => row.flags.length > 0 || row.reviewFlags.length > 0 || row.reviewStatus !== 'playable')
  const actionCounts = countBy(needsReviewRows.map(recommendedAction))
  const authoringCounts = countBy(rows.flatMap((row) => row.authoringFlags))

  const lines = [
    '# Question Quality Dashboard',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    'Only questions reachable through the app course catalog builders are included.',
    '',
    '## Overall',
    '',
    `- Wired questions audited: ${total}`,
    `- Needs review: ${flagged}`,
    `- High-priority authoring/depth pass: ${needsAuthoring} (priority >= ${REPAIR_QUEUE_MIN_PRIORITY})`,
    `- Recoverable: ${recoverable}`,
    `- Quarantined: ${quarantined}`,
    `- Top actions: ${formatCounts(actionCounts)}`,
    `- Top authoring flags: ${formatCounts(authoringCounts)}`,
    '',
    '## Priority Tracks',
    '',
    '| Rank | Track | Needs Review | Recoverable | Quarantined | Top Flags | Top Actions |',
    '|---:|---|---:|---:|---:|---|---|',
  ]

  groups.slice(0, 50).forEach((group, index) => {
    const track = `${group.catalogKey}/${group.trackId}`
    lines.push(`| ${index + 1} | \`${track}\` | ${group.flagged}/${group.total} (${group.flaggedPct}%) | ${group.recoverable} | ${group.quarantined} | ${escapeTable(formatCounts(group.flags))} | ${escapeTable(formatCounts(group.actions))} |`)
  })

  lines.push('')
  lines.push('## Track Detail')
  lines.push('')

  for (const group of groups.slice(0, 20)) {
    const track = `${group.catalogKey}/${group.trackId}`
    lines.push(`### ${track}`)
    lines.push('')
    lines.push(`- Needs review: ${group.flagged}/${group.total} (${group.flaggedPct}%)`)
    lines.push(`- Review statuses: playable ${group.playable}, recoverable ${group.recoverable}, quarantined ${group.quarantined}`)
    lines.push(`- Top flags: ${formatCounts(group.flags)}`)
    lines.push(`- Top actions: ${formatCounts(group.actions)}`)
    lines.push(`- Flagged chapters: ${formatCounts(group.chapters)}`)
    lines.push('')

    if (group.examples.length > 0) {
      lines.push('| Action | Challenge | Status | Flags | Prompt | Question |')
      lines.push('|---|---:|---|---|---|---|')
      for (const example of group.examples.slice(0, 8)) {
        lines.push(`| ${escapeTable(example.action)} | ${example.challengeRating}/10 | ${example.reviewStatus} | ${escapeTable(example.flags.join(', ') || 'none')} | ${escapeTable(example.prompt).slice(0, 180)} | \`${example.id}\` ${escapeTable(example.title)} [${escapeTable(example.chapter)}] |`)
      }
      lines.push('')
    }
  }

  return `${lines.join('\n')}\n`
}

function buildRepairQueueMarkdown(rows) {
  const lines = [
    '# Question Repair Queue',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    `Only wired-in course questions are included. Rows are ranked by authored-learning priority and filtered to priority >= ${REPAIR_QUEUE_MIN_PRIORITY}: thin solutions, generic hints, missing/template lessons, meta distractors, missing alternate prompts, and missing challenge ratings.`,
    '',
    '| Rank | Priority | Challenge | Track | Chapter | Flags | Prompt | Question |',
    '|---:|---:|---:|---|---|---|---|---|',
  ]

  rows
    .filter((row) => row.authoringPriority >= REPAIR_QUEUE_MIN_PRIORITY)
    .slice(0, 500)
    .forEach((row, index) => {
      const track = `${row.catalogKey}/${row.trackId}`
      lines.push(`| ${index + 1} | ${row.authoringPriority} | ${row.challengeRating}/10 | \`${escapeTable(track)}\` | ${escapeTable(row.chapter)} | ${escapeTable(row.authoringFlags.join(', '))} | ${escapeTable(row.cleanPrompt || row.prompt).slice(0, 220)} | \`${row.id}\` ${escapeTable(row.title)} |`)
    })

  return `${lines.join('\n')}\n`
}

function main() {
  const rows = buildRows()
  const dashboard = groupDashboardRows(rows)

  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'shortest-question-prompts.json'), JSON.stringify(rows, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'shortest-question-prompts.md'), buildMarkdown(rows), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-quality-dashboard.json'), JSON.stringify(dashboard, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-quality-dashboard.md'), buildDashboardMarkdown(dashboard, rows), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-repair-queue.json'), JSON.stringify(rows.filter((row) => row.authoringPriority >= REPAIR_QUEUE_MIN_PRIORITY), null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'question-repair-queue.md'), buildRepairQueueMarkdown(rows), 'utf8')

  const flagged = rows.filter((row) => row.flags.length > 0).length
  const authoring = rows.filter((row) => row.authoringPriority >= REPAIR_QUEUE_MIN_PRIORITY).length
  console.log(`Audited ${rows.length} wired questions.`)
  console.log(`Flagged ${flagged} short or non-sentence-like wired questions.`)
  console.log(`Queued ${authoring} high-priority questions for authored learning-depth review (priority >= ${REPAIR_QUEUE_MIN_PRIORITY}).`)
  console.log('Wrote reports/shortest-question-prompts.{json,md}')
  console.log('Wrote reports/question-quality-dashboard.{json,md}')
  console.log('Wrote reports/question-repair-queue.{json,md}')
}

main()
