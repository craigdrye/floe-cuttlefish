const fs = require('fs')
const path = require('path')
const vm = require('vm')

const repoRoot = path.resolve(__dirname, '..')
const imports = [
  ['IMS Tutorials', 'src/data/questionCatalog/imsTutorialsImported.ts'],
  ['OpenSAT', 'src/data/questionCatalog/openSatImported.ts'],
  ['OpenDSA Algorithms', 'src/data/questionCatalog/openDsaAlgorithmsImported.ts'],
  ['OpenDSA Software', 'src/data/questionCatalog/openDsaSoftwareImported.ts'],
  ['OpenDSA Formal Languages', 'src/data/questionCatalog/openDsaFormalLanguagesImported.ts'],
  ['OpenDSA Bridge Course', 'src/data/questionCatalog/openDsaBridgeCourseImported.ts'],
  ['OpenIntro Stats Slides', 'src/data/questionCatalog/openIntroStatsSlidesImported.ts'],
  ['OpenTrivia Brain Teasers', 'src/data/questionCatalog/openTriviaBrainTeasersImported.ts'],
  ['OpenTrivia Geography', 'src/data/questionCatalog/openTriviaGeographyImported.ts'],
]

function parseQuestionBank(filePath) {
  const absolute = path.join(repoRoot, filePath)
  const text = fs.readFileSync(absolute, 'utf8')
  const match = text.match(/makeQuestionBank\((['"])(.*?)\1,\s*(\[[\s\S]*?\])\s*\)/)
  if (!match) {
    throw new Error(`Could not parse question bank from ${filePath}`)
  }
  const course = match[2]
  try {
    const questions = vm.runInNewContext(match[3], Object.freeze({}))
    return { filePath, course, questions, parseError: null }
  } catch (error) {
    return { filePath, course, questions: tolerantParseQuestions(match[3]), parseError: error.message }
  }
}

function tolerantParseQuestions(arraySource) {
  const records = []
  const idPattern = /\{\s*id:\s*(\d+),([\s\S]*?)(?=\n\s*\{\s*id:\s*\d+,|\n\s*\]\s*$)/g
  let match
  while ((match = idPattern.exec(arraySource))) {
    const body = match[2]
    records.push({
      id: Number(match[1]),
      chapter: field(body, 'chapter'),
      title: field(body, 'title'),
      prompt: field(body, 'prompt'),
      correct: field(body, 'correct'),
      wrong: wrongField(body),
      lesson: field(body, 'lesson'),
      source: field(body, 'source'),
    })
  }
  return records
}

function field(body, name) {
  const doubleQuoted = new RegExp(`${name}:\\s*"([\\s\\S]*?)",\\n\\s*(?:[a-zA-Z_]+|wrong|lesson|source):`)
  const singleQuoted = new RegExp(`${name}:\\s*'([\\s\\S]*?)',\\n\\s*(?:[a-zA-Z_]+|wrong|lesson|source):`)
  const terminalDouble = new RegExp(`${name}:\\s*"([\\s\\S]*?)",?\\n\\s*\\}`)
  const terminalSingle = new RegExp(`${name}:\\s*'([\\s\\S]*?)',?\\n\\s*\\}`)
  const match = body.match(doubleQuoted) || body.match(singleQuoted) || body.match(terminalDouble) || body.match(terminalSingle)
  return match ? match[1].replace(/\\"/g, '"').replace(/\\n/g, '\n') : ''
}

function wrongField(body) {
  const match = body.match(/wrong:\s*\[([\s\S]*?)\],\n\s*lesson:/)
  if (!match) return []
  return [...match[1].matchAll(/\[\s*"([\s\S]*?)"/g)].map((entry) => [entry[1]])
}

function compact(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

function lower(value) {
  return compact(value).toLowerCase()
}

function wrongTexts(question) {
  return (question.wrong || []).map((entry) => Array.isArray(entry) ? String(entry[0] || '') : String(entry || ''))
}

function hasExactAnswerLeak(question) {
  const prompt = lower(question.prompt)
  const answer = lower(question.correct)
  if (!prompt || !answer || answer.length < 4) return false
  if (/^(yes|no|true|false|[a-d]|\d+)$/.test(answer)) return false
  return prompt.includes(answer)
}

function routeFinding(batchName, course, question) {
  const title = lower(`${question.chapter} ${question.title} ${question.prompt}`)
  if (batchName.includes('Trivia Geography') && course !== 'AP') return 'OpenTrivia Geography is not routed to AP'
  if (batchName.includes('Brain Teasers') && course !== 'Career') return 'OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners'
  if (batchName.includes('IMS') && course !== 'Statistics') return 'IMS Tutorials is not routed to Statistics'
  if (batchName.includes('OpenIntro') && course !== 'Statistics') return 'OpenIntro Stats Slides is not routed to Statistics'
  if (batchName.includes('OpenSAT') && !['Mathematics', 'Reading'].includes(course)) return 'OpenSAT is not routed to SAT-like math/reading course'
  if (batchName.includes('OpenDSA') && course !== 'Software') return 'OpenDSA is not routed to Software'
  if (course === 'AP' && /(capital|river|country|geograph|ocean|island)/.test(title)) {
    return 'Geography trivia is routed to AP rather than a geography/world knowledge track'
  }
  return null
}

function qaQuestion(batchName, course, question) {
  const findings = []
  const prompt = compact(question.prompt)
  const correct = compact(question.correct)
  const wrong = wrongTexts(question).map(compact)
  const allAnswers = [correct, ...wrong].map(lower)
  const duplicateAnswers = allAnswers.filter((answer, index) => answer && allAnswers.indexOf(answer) !== index)

  if (!prompt || prompt.length < 18) findings.push('malformed prompt: missing or very short prompt')
  if (/^(what type of study is this|which of the below is correct|which.*is this|which.*best describes)/i.test(prompt)) {
    findings.push('missing context: prompt appears to depend on omitted passage/table/scenario')
  }
  if (/\b(figure|diagram|chart|graph|table|above|below|following code|shown)\b/i.test(prompt) && prompt.length < 180) {
    findings.push('missing context: references external figure/table/code without enough embedded context')
  }
  if (/\b(today|recent|now|president|prime minister|currently)\b/i.test(prompt)) {
    findings.push('stale fact risk: time-sensitive wording')
  }
  if (hasExactAnswerLeak(question)) findings.push('answer leakage: prompt contains exact correct answer text')
  if (!correct) findings.push('malformed answer: missing correct answer')
  if (wrong.length < 2) findings.push('bad distractors: fewer than two wrong choices')
  if (wrong.some((answer) => !answer)) findings.push('bad distractors: blank wrong choice')
  if (duplicateAnswers.length > 0) findings.push('bad distractors: duplicate answer choices')
  if (wrong.map(lower).includes(lower(correct))) findings.push('bad distractors: wrong choice duplicates correct answer')
  if ((question.lesson || '').includes(`Correct answer: ${question.correct}`)) {
    findings.push('weak rationale: lesson repeats correct answer instead of explaining')
  }

  const route = routeFinding(batchName, course, question)
  if (route) findings.push(`routing: ${route}`)

  return [...new Set(findings)]
}

function everyFiftieth(questions) {
  const sampled = []
  for (let index = 0; index < questions.length; index += 50) {
    sampled.push({ index: index + 1, question: questions[index] })
  }
  if (questions.length && sampled[sampled.length - 1].index !== questions.length) {
    sampled.push({ index: questions.length, question: questions[questions.length - 1] })
  }
  return sampled
}

const batches = imports.filter(([, filePath]) => fs.existsSync(path.join(repoRoot, filePath))).map(([name, filePath]) => ({
  name,
  ...parseQuestionBank(filePath),
}))

const summary = {
  generatedAt: new Date().toISOString(),
  samplingRule: 'Every 50th question by generated import order, plus final question in each file when not already sampled.',
  totalQuestions: 0,
  totalSampled: 0,
  batches: [],
  findingCounts: {},
  fullScanFindingCounts: {},
  sampledFindings: [],
  parseErrors: [],
}

for (const batch of batches) {
  if (batch.parseError) {
    summary.parseErrors.push({
      batch: batch.name,
      filePath: batch.filePath,
      error: batch.parseError,
    })
  }
  const sampled = everyFiftieth(batch.questions)
  const batchFindingCounts = {}
  const batchFullScanFindingCounts = {}
  const batchFindings = []
  summary.totalQuestions += batch.questions.length
  summary.totalSampled += sampled.length

  for (const question of batch.questions) {
    for (const finding of qaQuestion(batch.name, batch.course, question)) {
      batchFullScanFindingCounts[finding] = (batchFullScanFindingCounts[finding] || 0) + 1
      summary.fullScanFindingCounts[finding] = (summary.fullScanFindingCounts[finding] || 0) + 1
    }
  }

  for (const sample of sampled) {
    const findings = qaQuestion(batch.name, batch.course, sample.question)
    for (const finding of findings) {
      batchFindingCounts[finding] = (batchFindingCounts[finding] || 0) + 1
      summary.findingCounts[finding] = (summary.findingCounts[finding] || 0) + 1
    }
    const record = {
      batch: batch.name,
      filePath: batch.filePath,
      course: batch.course,
      sampleIndex: sample.index,
      id: sample.question.id,
      chapter: sample.question.chapter,
      title: sample.question.title,
      prompt: compact(sample.question.prompt).slice(0, 320),
      correct: compact(sample.question.correct),
      wrongCount: wrongTexts(sample.question).length,
      findings,
    }
    if (findings.length) {
      batchFindings.push(record)
      summary.sampledFindings.push(record)
    }
  }

  summary.batches.push({
    name: batch.name,
    filePath: batch.filePath,
    course: batch.course,
    questionCount: batch.questions.length,
    sampledCount: sampled.length,
    sampledFindingCount: batchFindings.length,
    findingCounts: batchFindingCounts,
    fullScanFindingCounts: batchFullScanFindingCounts,
    parseError: batch.parseError,
  })
}

const reportJson = path.join(repoRoot, 'reports/recent-import-routing-qa.json')
const reportMd = path.join(repoRoot, 'reports/recent-import-routing-qa.md')
fs.mkdirSync(path.dirname(reportJson), { recursive: true })
fs.writeFileSync(reportJson, `${JSON.stringify(summary, null, 2)}\n`)

const lines = [
  '# Recent Import Routing QA',
  '',
  `- Sampling rule: ${summary.samplingRule}`,
  `- Generated import files reviewed: ${summary.batches.length}`,
  `- Total imported questions in scope: ${summary.totalQuestions}`,
  `- Sampled questions reviewed by script: ${summary.totalSampled}`,
  `- Sampled questions with findings: ${summary.sampledFindings.length}`,
  '',
  '## Headline Findings',
  '',
]

const sortedFindings = Object.entries(summary.findingCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
if (sortedFindings.length === 0) {
  lines.push('- No sampled findings.')
} else {
  for (const [finding, count] of sortedFindings) {
    lines.push(`- ${finding}: ${count}`)
  }
}

if (summary.parseErrors.length) {
  lines.push(...[
    `- Malformed generated TypeScript prevented normal parsing in ${summary.parseErrors.length} file(s); tolerant parsing was used for QA continuity.`,
  ])
}

if (summary.parseErrors.length) {
  lines.push('', '## Malformed Generated Files', '')
  for (const error of summary.parseErrors) {
    lines.push(`- ${error.batch}: \`${error.filePath}\` failed normal JS parsing with \`${error.error}\`.`)
  }
}

lines.push('', '## Batch Summary', '')
for (const batch of summary.batches) {
  lines.push(`- ${batch.name}: ${batch.questionCount} questions, ${batch.sampledCount} sampled, course \`${batch.course}\`, ${batch.sampledFindingCount} sampled with findings.`)
}

lines.push('', '## Full-Scan Heuristic Counts', '')
for (const [finding, count] of Object.entries(summary.fullScanFindingCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
  lines.push(`- ${finding}: ${count}`)
}

lines.push('', '## Sampled Findings', '')
for (const finding of summary.sampledFindings) {
  lines.push(`### ${finding.batch} #${finding.sampleIndex} / id ${finding.id}`)
  lines.push(`- File: \`${finding.filePath}\``)
  lines.push(`- Route: \`${finding.course}\` / chapter \`${finding.chapter}\``)
  lines.push(`- Title: ${finding.title}`)
  lines.push(`- Prompt: ${finding.prompt}`)
  lines.push(`- Correct: ${finding.correct}`)
  lines.push(`- Findings: ${finding.findings.join('; ')}`)
  lines.push('')
}

lines.push('## Recommended Next Steps', '')
lines.push('- Rebuild IMS Tutorials from raw tutorial context or drop context-dependent prompts such as “What type of study is this?” when the source scenario is unavailable.')
lines.push('- Recheck OpenSAT geometry and graph/table questions against source assets; full-scan heuristics found prompts that refer to figures/graphs/tables without embedding the needed asset/context.')
lines.push('- Move OpenTrivia Geography out of the generic `AP` route or create a dedicated geography/world-knowledge route before wiring broadly.')
lines.push('- Replace generic generated distractor rationales with source-specific rationales where possible; they are not fatal but reduce teaching value across OpenSAT/OpenDSA/OpenTrivia imports.')

fs.writeFileSync(reportMd, `${lines.join('\n').trim()}\n`)

console.log(`Wrote ${reportMd}`)
console.log(`Wrote ${reportJson}`)
