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

const { buildLearningSupport } = require(path.join(repoRoot, 'src/lib/learningSupport.ts'))
const { normalizeQuestionCatalog } = require(path.join(repoRoot, 'src/lib/quizRuntime.ts'))
const { buildUniversityAcademicQuestionCatalog } = require(path.join(repoRoot, 'src/data/questionCatalog/universityAcademic.ts'))
const { buildUniversityCollegeQuestionCatalog } = require(path.join(repoRoot, 'src/data/questionCatalog/universityCollege.ts'))
const { buildCareerQuestionCatalog } = require(path.join(repoRoot, 'src/data/questionCatalog/career.ts'))

function supportText(question) {
  const support = buildLearningSupport(question)
  return [
    support.hint,
    ...support.lessonParagraphs,
    support.workedSolution,
  ].join('\n').toLowerCase()
}

function findQuestion(catalog, trackId, predicate) {
  const question = catalog[trackId]?.find(predicate)
  if (!question) throw new Error(`Could not find audit question in ${trackId}`)
  return question
}

const academic = normalizeQuestionCatalog(buildUniversityAcademicQuestionCatalog())
const college = normalizeQuestionCatalog(buildUniversityCollegeQuestionCatalog())
const career = normalizeQuestionCatalog(buildCareerQuestionCatalog())

const cases = [
  {
    name: 'Philosophy Plato cave stays philosophical',
    question: findQuestion(academic, 'philosophy', (question) => question.id === 16607),
    mustInclude: [/appearance/, /reality|truth|understanding/],
    mustNotInclude: [/sampling/, /random sample/, /control group/, /treatment group/, /design determines/, /study-design/],
  },
  {
    name: 'Philosophy Gettier stays epistemic',
    question: findQuestion(academic, 'philosophy', (question) => question.id === 16615 || /gettier/i.test(question.title)),
    mustInclude: [/gettier|justified true belief|jtb/, /luck|accident/],
    mustNotInclude: [/sampling/, /control group/, /treatment group/, /design determines/],
  },
  {
    name: 'Philosophy utilitarianism stays ethical',
    question: findQuestion(academic, 'philosophy', (question) => question.id === 16608),
    mustInclude: [/utilitarian|consequence|happiness|well-being/],
    mustNotInclude: [/sampling/, /random sample/, /control group/, /design determines/],
  },
  {
    name: 'Research sampling can still use study design support',
    question: findQuestion(academic, 'researchMethods', (question) => /sampling methods/i.test(question.title)),
    mustInclude: [/sampling|sample|included|left out|bias/],
    mustNotInclude: [/plato/, /cave/, /gettier/],
  },
  {
    name: 'AP statistics IQR stays statistical',
    question: findQuestion(college, 'apStatistics', (question) => /iqr|interquartile/i.test(`${question.title} ${question.prompt}`)),
    mustInclude: [/iqr|interquartile|q3|quartile/],
    mustNotInclude: [/plato/, /cave/, /gettier/],
  },
  {
    name: 'Finance modeling stays finance',
    question: findQuestion(career, 'financialModeling', (question) => /revenue build|volume times price/i.test(`${question.title} ${question.prompt} ${question.answers.map((answer) => answer.label).join(' ')}`)),
    mustInclude: [/revenue|finance|model|operating|driver|valuation/],
    mustNotInclude: [/plato/, /sampling bias/, /control group/],
  },
]

const failures = []

for (const testCase of cases) {
  const text = supportText(testCase.question)
  for (const pattern of testCase.mustInclude) {
    if (!pattern.test(text)) {
      failures.push(`${testCase.name}: expected support text to include ${pattern}`)
    }
  }
  for (const pattern of testCase.mustNotInclude) {
    if (pattern.test(text)) {
      failures.push(`${testCase.name}: support text leaked forbidden cross-domain pattern ${pattern}`)
    }
  }
}

if (failures.length) {
  console.error('Learning support audit failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Learning support audit passed (${cases.length} cross-domain checks).`)
