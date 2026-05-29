const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { pathToFileURL } = require('node:url')

const repoRoot = path.resolve(__dirname, '..')
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'floe-credential-audit-'))
const tempScript = path.join(tempDir, 'audit-credential-expansion.ts')
const summaryOnly = process.argv.includes('--summary')

const targetTracks = [
  'series86',
  'series87',
  'cfaLevelOne',
  'cpaExam',
  'barExam',
  'pmpWrangler',
  'shrmPeople',
  'patentBar',
  'crcm',
  'ccep',
  'amlCompliance',
  'bankComplianceAmlRoadmap',
  'customsBroker',
  'aigp',
  'nerc',
  'apiInspectors',
  'cdfm',
  'certifiedGeneralAppraiser',
  'medicalCodingRoadmap',
  'clinicalResearchRoadmap',
  'healthcareComplianceRoadmap',
  'regulatoryAffairsRoadmap',
  'pharmaDrugSafetyRoadmap',
  'healthInsurancePayersRoadmap',
  'procurementContractingRoadmap',
  'defenseBudgetingRoadmap',
]

const generatedSource = 'Floe career agent-generated credential expansion 2026-05-20'

const auditSource = `
import { buildCareerQuestionCatalog } from '${pathToFileURL(path.join(repoRoot, 'src/data/questionCatalog/career.ts')).href}'

type Question = {
  id: number
  prompt: string
  track?: string
  source?: string
  answers: Array<{ id: string; label: string; correct: boolean }>
}

const targetTracks = ${JSON.stringify(targetTracks, null, 2)} as const
const generatedSource = ${JSON.stringify(generatedSource)}
const minimumQuestions = 200
const summaryOnly = ${JSON.stringify(summaryOnly)}

function promptKey(prompt: string) {
  return prompt
    .toLowerCase()
    .replace(/[\\u201c\\u201d]/g, '"')
    .replace(/[\\u2018\\u2019]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim()
}

const catalog = buildCareerQuestionCatalog() as Record<string, Question[]>
const failures: string[] = []
const allGenerated = new Map<number, string>()
const generatedDuplicateIds: Array<{ id: number; first: string; second: string }> = []

const rows = targetTracks.map((trackId) => {
  const questions = catalog[trackId] ?? []
  const generatedTagged = questions.filter((question) => question.source === generatedSource)
  const ids = new Set<number>()
  const prompts = new Set<string>()
  const duplicateIds: number[] = []
  const duplicatePrompts: Array<{ id: number; prompt: string }> = []
  const malformed: Array<{ id: number; reason: string }> = []

  for (const question of questions) {
    if (ids.has(question.id)) duplicateIds.push(question.id)
    ids.add(question.id)

    const key = promptKey(question.prompt)
    if (prompts.has(key)) duplicatePrompts.push({ id: question.id, prompt: question.prompt })
    prompts.add(key)

    const correctAnswers = question.answers.filter((answer) => answer.correct)
    if (correctAnswers.length !== 1) malformed.push({ id: question.id, reason: 'must have exactly one correct answer' })
    if (question.answers.filter((answer) => !answer.correct).length < 3) malformed.push({ id: question.id, reason: 'fewer than three wrong answers' })

    if (question.source === generatedSource) {
      const location = trackId + ':' + question.id
      const first = allGenerated.get(question.id)
      if (first) generatedDuplicateIds.push({ id: question.id, first, second: location })
      else allGenerated.set(question.id, location)
    }
  }

  if (questions.length < minimumQuestions) failures.push(trackId + ' has ' + questions.length + ' questions; expected at least ' + minimumQuestions)
  if (generatedTagged.length === 0) failures.push(trackId + ' has no generated credential-expansion source tags')
  if (duplicateIds.length > 0) failures.push(trackId + ' has duplicate ids: ' + duplicateIds.slice(0, 10).join(', '))
  if (duplicatePrompts.length > 0) failures.push(trackId + ' has duplicate prompts, first id ' + duplicatePrompts[0].id)
  if (malformed.length > 0) failures.push(trackId + ' has malformed questions, first id ' + malformed[0].id + ': ' + malformed[0].reason)

  return {
    trackId,
    count: questions.length,
    generatedTagged: generatedTagged.length,
    duplicateIdCount: duplicateIds.length,
    duplicatePromptCount: duplicatePrompts.length,
    malformedCount: malformed.length,
  }
})

if (generatedDuplicateIds.length > 0) {
  failures.push('generated credential-expansion questions have duplicate ids: ' + JSON.stringify(generatedDuplicateIds.slice(0, 10)))
}

const summary = {
  tracks: rows.length,
  minimumQuestions,
  generatedSource,
  generatedTaggedTotal: rows.reduce((sum, row) => sum + row.generatedTagged, 0),
  generatedDuplicateIdCount: generatedDuplicateIds.length,
  rows,
  failures,
}

if (summaryOnly) {
  console.log(JSON.stringify({
    tracks: summary.tracks,
    minimumQuestions: summary.minimumQuestions,
    generatedSource: summary.generatedSource,
    generatedTaggedTotal: summary.generatedTaggedTotal,
    generatedDuplicateIdCount: summary.generatedDuplicateIdCount,
    minCount: Math.min(...rows.map((row) => row.count)),
    maxCount: Math.max(...rows.map((row) => row.count)),
    malformedTrackCount: rows.filter((row) => row.malformedCount > 0).length,
    duplicateTrackCount: rows.filter((row) => row.duplicateIdCount > 0 || row.duplicatePromptCount > 0).length,
    failures: summary.failures,
  }, null, 2))
} else {
  console.log(JSON.stringify(summary, null, 2))
}

if (failures.length > 0) process.exitCode = 1
`

fs.writeFileSync(tempScript, auditSource)

const result = spawnSync('npx', ['tsx', tempScript], {
  cwd: repoRoot,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
})

if (result.stdout) process.stdout.write(result.stdout)
if (result.stderr) process.stderr.write(result.stderr)

fs.rmSync(tempDir, { recursive: true, force: true })
process.exit(result.status ?? 1)
