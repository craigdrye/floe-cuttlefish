const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { pathToFileURL } = require('node:url')

const repoRoot = path.resolve(__dirname, '..')
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'floe-career-audit-'))
const tempScript = path.join(tempDir, 'audit-career.ts')

const auditSource = `
import { buildCareerQuestionCatalog } from '${pathToFileURL(path.join(repoRoot, 'src/data/questionCatalog/career.ts')).href}'
import { careerCoreTracks } from '${pathToFileURL(path.join(repoRoot, 'src/data/ageCatalog/career.ts')).href}'

type Question = {
  id: number
  prompt: string
  answers: Array<{
    id: string
    label: string
    correct: boolean
  }>
}

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
const rows = careerCoreTracks.map((track) => ({
  id: track.id,
  title: track.title,
  count: catalog[track.id]?.length ?? 0,
}))

const ids = new Map<number, string>()
const prompts = new Map<string, string>()
const advisoryOnlyTracks = new Set(['quant', 'quantAdvanced', 'brainBurners'])
const intraTrackDuplicateIds: Array<{ id: number; first: string; second: string }> = []
const crossTrackDuplicateIds: Array<{ id: number; first: string; second: string }> = []
const intraTrackDuplicatePrompts: Array<{ prompt: string; first: string; second: string }> = []
const advisoryIntraTrackDuplicatePrompts: Array<{ prompt: string; first: string; second: string }> = []
const crossTrackDuplicatePrompts: Array<{ prompt: string; first: string; second: string }> = []
const hardMalformed: Array<{ track: string; id: number | string; reason: string }> = []
const advisoryMalformed: Array<{ track: string; id: number | string; reason: string }> = []

function splitTrack(location: string) {
  return location.split(':', 1)[0]
}

for (const [trackId, questions] of Object.entries(catalog)) {
  for (const question of questions) {
    const location = trackId + ':' + question.id
    if (ids.has(question.id)) {
      const first = ids.get(question.id)!
      const duplicate = { id: question.id, first, second: location }
      if (splitTrack(first) === trackId) {
        intraTrackDuplicateIds.push(duplicate)
      } else {
        crossTrackDuplicateIds.push(duplicate)
      }
    } else {
      ids.set(question.id, location)
    }

    const key = promptKey(question.prompt)
    const recordMalformed = (reason: string) => {
      const entry = { track: trackId, id: question.id, reason }
      if (advisoryOnlyTracks.has(trackId)) {
        advisoryMalformed.push(entry)
      } else {
        hardMalformed.push(entry)
      }
    }

    if (key.length === 0) recordMalformed('empty prompt')
    if (prompts.has(key)) {
      const first = prompts.get(key)!
      const duplicate = { prompt: question.prompt, first, second: location }
      if (splitTrack(first) === trackId) {
        if (advisoryOnlyTracks.has(trackId)) {
          advisoryIntraTrackDuplicatePrompts.push(duplicate)
        } else {
          intraTrackDuplicatePrompts.push(duplicate)
        }
      } else {
        crossTrackDuplicatePrompts.push(duplicate)
      }
    } else {
      prompts.set(key, location)
    }

    const answers = Array.isArray(question.answers) ? question.answers : []
    const correctAnswers = answers.filter((answer) => answer.correct)
    if (correctAnswers.length !== 1) {
      recordMalformed('must have exactly one correct answer')
    }
    if (correctAnswers.some((answer) => !answer.label || answer.label.trim().length === 0)) {
      recordMalformed('empty correct answer')
    }
    if (answers.filter((answer) => !answer.correct).length < 3) {
      recordMalformed('fewer than three wrong answers')
    }
  }
}

const summary = {
  tracks: rows.length,
  questions: Object.values(catalog).reduce((sum, questions) => sum + questions.length, 0),
  minTrack: rows.reduce((left, right) => (left.count <= right.count ? left : right)),
  maxTrack: rows.reduce((left, right) => (left.count >= right.count ? left : right)),
  under50: rows.filter((row) => row.count < 50),
  intraTrackDuplicateIds,
  intraTrackDuplicatePrompts,
  hardMalformed,
  advisory: {
    crossTrackDuplicateIdCount: crossTrackDuplicateIds.length,
    crossTrackDuplicateIdSamples: crossTrackDuplicateIds.slice(0, 20),
    intraTrackDuplicatePromptCount: advisoryIntraTrackDuplicatePrompts.length,
    intraTrackDuplicatePromptSamples: advisoryIntraTrackDuplicatePrompts.slice(0, 20),
    crossTrackDuplicatePromptCount: crossTrackDuplicatePrompts.length,
    crossTrackDuplicatePromptSamples: crossTrackDuplicatePrompts.slice(0, 20),
    legacyMalformedCount: advisoryMalformed.length,
    legacyMalformedSamples: advisoryMalformed.slice(0, 20),
  },
}

const hardFailureCount =
  summary.under50.length +
  summary.intraTrackDuplicateIds.length +
  summary.intraTrackDuplicatePrompts.length +
  summary.hardMalformed.length

Object.assign(summary, { hardFailureCount })

console.log(JSON.stringify(summary, null, 2))

if (hardFailureCount > 0) {
  process.exitCode = 1
}
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
