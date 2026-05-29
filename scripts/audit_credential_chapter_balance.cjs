const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { pathToFileURL } = require('node:url')

const repoRoot = path.resolve(__dirname, '..')
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'floe-credential-balance-'))
const tempScript = path.join(tempDir, 'audit-credential-chapter-balance.ts')
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

const auditSource = `
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildCareerQuestionCatalog } from '${pathToFileURL(path.join(repoRoot, 'src/data/questionCatalog/career.ts')).href}'
import { syllabusPathByTrackId } from '${pathToFileURL(path.join(repoRoot, 'src/data/syllabi/index.ts')).href}'

type Question = {
  id: number
  chapter: string
  subTopic?: string
}

const repoRoot = ${JSON.stringify(repoRoot)}
const targetTracks = ${JSON.stringify(targetTracks, null, 2)} as const
const thinChapterThreshold = 5
const summaryOnly = ${JSON.stringify(summaryOnly)}

function normalizeLabel(label: string) {
  return label
    .toLowerCase()
    .replace(/[\\u2012\\u2013\\u2014\\u2015]/g, '-')
    .replace(/[\\u2018\\u2019]/g, "'")
    .replace(/[\\u201c\\u201d]/g, '"')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim()
}

function readSyllabusChapters(trackId: string) {
  const relativePath = syllabusPathByTrackId[trackId]
  if (!relativePath) return { path: null, chapters: [] as string[] }

  const absolutePath = path.join(repoRoot, 'src/data/syllabi', relativePath)
  const markdown = fs.readFileSync(absolutePath, 'utf8')
  const chapters = [...markdown.matchAll(/^## Chapter \\d+:\\s*(.+)$/gm)].map((match) => match[1].trim())
  return { path: relativePath, chapters }
}

const catalog = buildCareerQuestionCatalog() as Record<string, Question[]>
const failures: string[] = []

const rows = targetTracks.map((trackId) => {
  const { path: syllabusPath, chapters } = readSyllabusChapters(trackId)
  const questions = catalog[trackId] ?? []
  const countsByChapter = new Map<string, number>()
  const labelsByKey = new Map<string, string>()
  const syllabusKeys = new Set(chapters.map(normalizeLabel))

  for (const question of questions) {
    const key = normalizeLabel(question.chapter)
    countsByChapter.set(key, (countsByChapter.get(key) ?? 0) + 1)
    labelsByKey.set(key, question.chapter)
  }

  const chapterRows = chapters.map((chapter) => {
    const key = normalizeLabel(chapter)
    const count = countsByChapter.get(key) ?? 0
    return {
      chapter,
      count,
      status: count === 0 ? 'empty' : count < thinChapterThreshold ? 'thin' : 'covered',
    }
  })

  const unknownRuntimeChapters = [...countsByChapter.keys()]
    .filter((key) => !syllabusKeys.has(key))
    .map((key) => ({ chapter: labelsByKey.get(key) ?? key, count: countsByChapter.get(key) ?? 0 }))
    .sort((left, right) => right.count - left.count || left.chapter.localeCompare(right.chapter))

  if (!syllabusPath) failures.push(trackId + ' has no syllabus mapping')
  if (chapters.length === 0) failures.push(trackId + ' has no parsed syllabus chapters')
  const emptyChapters = chapterRows.filter((row) => row.status === 'empty')
  const thinChapters = chapterRows.filter((row) => row.status === 'thin')
  if (emptyChapters.length > 0) {
    failures.push(trackId + ' has empty syllabus chapters: ' + emptyChapters.slice(0, 5).map((entry) => entry.chapter).join(', '))
  }
  if (thinChapters.length > 0) {
    failures.push(trackId + ' has syllabus chapters below ' + thinChapterThreshold + ' questions: ' + thinChapters.slice(0, 5).map((entry) => entry.chapter + ' (' + entry.count + ')').join(', '))
  }
  if (unknownRuntimeChapters.length > 0) {
    failures.push(trackId + ' has runtime chapters not found in syllabus: ' + unknownRuntimeChapters.slice(0, 5).map((entry) => entry.chapter).join(', '))
  }

  return {
    trackId,
    syllabusPath,
    questionCount: questions.length,
    syllabusChapterCount: chapters.length,
    emptyChapterCount: emptyChapters.length,
    thinChapterCount: thinChapters.length,
    unknownRuntimeChapterCount: unknownRuntimeChapters.length,
    chapters: chapterRows,
    unknownRuntimeChapters,
  }
})

const summary = {
  tracks: rows.length,
  thinChapterThreshold,
  emptyChapterTotal: rows.reduce((sum, row) => sum + row.emptyChapterCount, 0),
  thinChapterTotal: rows.reduce((sum, row) => sum + row.thinChapterCount, 0),
  unknownRuntimeChapterTotal: rows.reduce((sum, row) => sum + row.unknownRuntimeChapterCount, 0),
  rows,
  failures,
}

if (summaryOnly) {
  console.log(JSON.stringify({
    tracks: summary.tracks,
    thinChapterThreshold: summary.thinChapterThreshold,
    emptyChapterTotal: summary.emptyChapterTotal,
    thinChapterTotal: summary.thinChapterTotal,
    unknownRuntimeChapterTotal: summary.unknownRuntimeChapterTotal,
    minSyllabusChapterCount: Math.min(...rows.map((row) => row.syllabusChapterCount)),
    maxSyllabusChapterCount: Math.max(...rows.map((row) => row.syllabusChapterCount)),
    minQuestionCount: Math.min(...rows.map((row) => row.questionCount)),
    maxQuestionCount: Math.max(...rows.map((row) => row.questionCount)),
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
