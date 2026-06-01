const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const rawPath = path.join(repoRoot, 'data/raw_collections/opentriviaqa/opentriviaqa_questions.json')
const auditPath = path.join(repoRoot, 'reports/opentrivia-for-kids-mapping-audit.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaForKidsImported.ts')

const trackIdMap = {
  'col-arithmetic': 'arithmetic',
  'col-times-tables': 'timesTables',
  'col-money-basics': 'moneyBasics',
  'col-basic-geometry-and-measurement': 'basicGeometry',
  'col-class-5-math': 'class5Math',
  'col-class-6-math': 'class6Math',
  'col-4th-grade-reading-and-vocab': 'readingVocab4th',
  'col-5th-grade-reading-and-vocab': 'readingVocab5th',
  scienceYear1: 'scienceYear1',
  oceanPrimary: 'oceanPrimary',
  scienceYear3: 'scienceYear3',
}

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function wrongChoices(item) {
  const correct = normalizeText(item.correct_answer).toLowerCase()
  const seen = new Set([correct])
  return (item.answer_choices ?? [])
    .map(normalizeText)
    .filter(Boolean)
    .filter((choice) => {
      const key = choice.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
}

function numericValue(value) {
  const cleaned = normalizeText(value).replace(/[$,]/g, '')
  if (/^-?\d+(?:\.\d+)?%?$/.test(cleaned)) return Number(cleaned.replace('%', ''))
  return null
}

function shortChoice(choice) {
  const text = normalizeText(choice)
  return text.length > 64 ? `${text.slice(0, 61)}...` : text
}

function chapterForTrack(trackId) {
  if (trackId === 'arithmetic') return 'Arithmetic Practice'
  if (trackId === 'timesTables') return 'Multiplication Facts'
  if (trackId === 'moneyBasics') return 'Money Word Problems'
  if (trackId === 'basicGeometry') return 'Measurement and Geometry'
  if (trackId === 'class5Math') return 'Class 5 Mixed Maths'
  if (trackId === 'class6Math') return 'Class 6 Mixed Maths'
  if (trackId === 'readingVocab4th') return 'Antonyms and Vocabulary'
  if (trackId === 'readingVocab5th') return 'Grammar and Vocabulary'
  if (trackId === 'oceanPrimary') return 'Ocean Animals'
  if (trackId === 'scienceYear3') return 'Plants and Earth Science'
  return 'Primary Science'
}

function rationaleForTrack(trackId, choice, item, index) {
  const correct = normalizeText(item.correct_answer)
  const prompt = normalizeText(item.prompt_text).toLowerCase()
  const choiceLabel = shortChoice(choice)
  if (trackId.includes('Math') || ['arithmetic', 'timesTables', 'moneyBasics', 'basicGeometry'].includes(trackId)) {
    const wrongNumber = numericValue(choice)
    const correctNumber = numericValue(correct)
    if (wrongNumber !== null && correctNumber !== null && wrongNumber !== correctNumber) {
      if (wrongNumber === 0 || correctNumber === 0 || prompt.includes('0')) {
        return [choice, `${choiceLabel} misses the zero rule or the step that makes the total become ${correct}.`, 'Watch for zero in multiplication and for “gave away” wording in subtraction stories.']
      }
      if (Math.abs(wrongNumber) < Math.abs(correctNumber)) {
        return [choice, `${choiceLabel} is too small; it usually means one group, coin, unit, or step in the story was not counted.`, 'Read the story once for the action, then count every group or change.']
      }
      return [choice, `${choiceLabel} is too large; it usually means something was added twice or the question asks for what is left, not the starting amount.`, 'Check whether the story says add, take away, share, or multiply.']
    }
    if (/pattern|next/.test(prompt)) {
      return [choice, `${choiceLabel} continues the pattern by the wrong jump size.`, 'Look at how each term changes before choosing the next one.']
    }
    if (/time|clock|a\.m|p\.m/.test(prompt)) {
      return [choice, `${choiceLabel} uses a nearby time but not the elapsed-time move in the story.`, 'Count forward or backward on the clock in small chunks.']
    }
    return [choice, `${choiceLabel} uses a nearby quantity, but it does not match the operation the word problem is asking for.`, 'Work through the quantities step by step before choosing.']
  }
  if (trackId.includes('readingVocab')) {
    const moves = [
      'has a related feeling, but not the exact opposite or meaning the prompt asks for',
      'fits a different sentence role than the one being tested',
      'sounds familiar, but it does not match the clue word closely enough',
    ]
    return [choice, `${choiceLabel} ${moves[index % moves.length]}.`, 'Check whether the prompt asks for an opposite, grammar role, or word meaning.']
  }
  const scienceMoves = [
    'names something real, but not the feature asked about in the clue',
    'mixes up what the animal, plant, or object does with where it lives',
    'answers a nearby science idea instead of the observable clue in the question',
  ]
  return [choice, `${choiceLabel} ${scienceMoves[index % scienceMoves.length]}.`, 'Use the observable feature, habitat, or basic science fact named in the question.']
}

function titleForItem(item, index) {
  const prompt = normalizeText(item.prompt_text)
  if (prompt.length <= 58) return prompt
  return `OpenTrivia For Kids ${index + 1}`
}

function main() {
  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8')).items ?? []
  const rawBySourceId = new Map(raw.map((item) => [item.source_id, item]))
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const byTrack = {}

  for (const course of audit.mappedCourses ?? []) {
    const trackId = trackIdMap[course.courseId]
    if (!trackId) continue
    for (const sourceId of course.sourceIds ?? []) {
      const item = rawBySourceId.get(sourceId)
      if (!item) continue
      const wrong = wrongChoices(item)
      if (wrong.length < 2) continue
      byTrack[trackId] ??= []
      byTrack[trackId].push(item)
    }
  }

  let nextId = 337001
  const lines = [
    "import { makeQuestionBank } from './base'",
    "import { polish as runPolish } from './polishPipeline'",
    "import type { Question } from './types'",
    "import {",
    "  OPEN_TRIVIA_WAVE20_SUB_TOPICS,",
    "  OPEN_TRIVIA_WAVE20_MENTOR_HINTS,",
    "  OPEN_TRIVIA_WAVE20_CORRECT_SHORTENED,",
    "} from './openTriviaWave20Polish'",
    '',
    '// Generated by scripts/build_opentrivia_for_kids_import.cjs from data/raw_collections/opentriviaqa.',
    '// Uses the reviewed for-kids allowlist and drops binary true/false rows with fewer than two distractors.',
    '',
    'const _baseOpenTriviaForKidsQuestionsByTrack = {',
  ]

  for (const [trackId, items] of Object.entries(byTrack).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`  ${JSON.stringify(trackId)}: makeQuestionBank('Primary', [`)
    items.forEach((item, index) => {
      const wrong = wrongChoices(item)
      lines.push('    {')
      lines.push(`      id: ${nextId++},`)
      lines.push(`      chapter: ${JSON.stringify(chapterForTrack(trackId))},`)
      lines.push(`      title: ${JSON.stringify(titleForItem(item, index))},`)
      lines.push(`      prompt: ${JSON.stringify(normalizeText(item.prompt_text))},`)
      lines.push(`      correct: ${JSON.stringify(normalizeText(item.correct_answer))},`)
      lines.push(`      wrong: ${JSON.stringify(wrong.map((choice, wrongIndex) => rationaleForTrack(trackId, choice, item, wrongIndex)))},`)
      lines.push(`      lesson: ${JSON.stringify(`Practice this as a ${chapterForTrack(trackId).toLowerCase()} question: read the clue carefully, name the relationship it is testing, and then choose the answer that fits that relationship exactly.`)},`)
      lines.push("      source: 'OpenTriviaQA',")
      lines.push('    },')
    })
    lines.push('  ]),')
  }

  lines.push('}')
  lines.push('')
  lines.push('export const openTriviaForKidsQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(')
  lines.push('  Object.entries(_baseOpenTriviaForKidsQuestionsByTrack).map(([trackKey, trackBank]) => [')
  lines.push('    trackKey,')
  lines.push('    runPolish(trackBank, [')
  lines.push('      {')
  lines.push('        subTopics: OPEN_TRIVIA_WAVE20_SUB_TOPICS,')
  lines.push('        mentorHints: OPEN_TRIVIA_WAVE20_MENTOR_HINTS,')
  lines.push('        correctShortened: OPEN_TRIVIA_WAVE20_CORRECT_SHORTENED,')
  lines.push("        source: 'openTriviaWave20',")
  lines.push('      },')
  lines.push('    ]),')
  lines.push('  ]),')
  lines.push(')')
  lines.push('')
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8')
  const total = Object.values(byTrack).reduce((sum, items) => sum + items.length, 0)
  console.log(`Wrote ${total} OpenTriviaQA for-kids questions across ${Object.keys(byTrack).length} tracks.`)
}

main()
