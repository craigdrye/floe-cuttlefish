const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaHistoryWwiiColdWarImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::history::723',
  'opentriviaqa::history::730',
  'opentriviaqa::history::734',
  'opentriviaqa::history::735',
  'opentriviaqa::history::802',
  'opentriviaqa::history::811',
  'opentriviaqa::history::816',
  'opentriviaqa::history::831',
  'opentriviaqa::history::836',
  'opentriviaqa::history::838',
  'opentriviaqa::history::839',
  'opentriviaqa::history::888',
  'opentriviaqa::history::890',
  'opentriviaqa::history::891',
  'opentriviaqa::history::897',
  'opentriviaqa::history::898',
  'opentriviaqa::history::914',
  'opentriviaqa::history::915',
  'opentriviaqa::history::916',
  'opentriviaqa::history::918',
  'opentriviaqa::history::919',
  'opentriviaqa::history::920',
  'opentriviaqa::history::921',
  'opentriviaqa::history::922',
  'opentriviaqa::history::923',
  'opentriviaqa::history::924',
  'opentriviaqa::history::929',
  'opentriviaqa::history::932',
  'opentriviaqa::history::936',
  'opentriviaqa::history::1037',
  'opentriviaqa::history::1038',
  'opentriviaqa::history::1044',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bHitlers\b/g, "Hitler's")
    .replace(/\bNazi Germanys\b/g, "Nazi Germany's")
    .replace(/\bMacArthurs\b/g, "MacArthur's")
    .replace(/\bEarths\b/g, "Earth's")
    .replace(/\bhistorys\b/g, "history's")
    .replace(/\bMarshall Petain\b/g, 'Marshal Petain')
    .replace(/\bVasliy\b/g, 'Vasily')
    .replace(/\bCommintern\b/g, 'Comintern')
    .replace(/\bDeath-camp\b/g, 'death camp')
    .replace(/\bsea borne\b/g, 'seaborne')
    .replace(/\bWorld War Two\b/g, 'World War II')
    .replace(/\bWorld War 2\b/g, 'World War II')
    .replace(/\bU\\. S\\./g, 'U.S.')
    .replace(/\bthe US\b/g, 'the U.S.')
    .replace(/\bUS /g, 'U.S. ')
    .replace(/\bJapan in the Pacific War\b/g, 'Japan during the Pacific War')
    .replace(/f…/g, '')
    .trim()
}

function wrongChoices(item) {
  const correct = normalizeText(item.correct_answer).toLowerCase()
  const seen = new Set([correct])
  return item.answer_choices
    .map(normalizeText)
    .filter(Boolean)
    .filter((choice) => !/^(all|none) of these$/i.test(choice))
    .filter((choice) => {
      const key = choice.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .map((choice) => [
      choice,
      'This option does not match the twentieth-century history clue in the prompt.',
      'Anchor the answer to the relevant WWII theater, Cold War policy, Soviet bloc event, or named operation.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/normandy|d-day|overlord|tobruk|rommel|yugoslavia|greece|barbarossa|stalingrad|kursk|holocaust|vichy|petain|nazi germany|invasion of the soviet union/.test(text)) return 'World War II: Europe and North Africa'
  if (/japan|pacific|guadalcanal|java sea|tinian|manila|okinawa|new guinea|philippine sea|atomic bombs|singapore|kamikaze|tokyo|downfall/.test(text)) return 'World War II: Pacific Theater'
  if (/containment|marshall plan|warsaw pact|cuban missile|hungary|czechoslovakia|soviet|stalin/.test(text)) return 'Cold War and Soviet Bloc'
  return 'Twentieth-Century Conflict'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/d-day|overlord/.test(text)) return 'D-Day and Operation Overlord'
  if (/atomic bombs|little boy/.test(text)) return 'Atomic Bombs'
  if (/hungary/.test(text)) return 'Hungary 1956'
  if (/czechoslovakia/.test(text)) return 'Prague Spring'
  if (/cuban missile/.test(text)) return 'Cuban Missile Crisis'
  if (/barbarossa/.test(text)) return 'Operation Barbarossa'
  if (/holocaust/.test(text)) return 'The Holocaust'
  if (/zhukov|stalingrad|kursk/.test(text)) return 'Zhukov'
  if (/normandy/.test(text)) return 'Normandy'
  if (/tobruk|rommel/.test(text)) return 'North Africa'
  if (/yugoslavia and greece/.test(text)) return 'Balkan Campaign'
  if (/invasion of the soviet union|nazi germany/.test(text)) return 'Operation Barbarossa'
  if (/not neutral/.test(text)) return 'World War II Neutrality'
  if (/vichy/.test(text)) return 'Vichy France'
  if (/pacific|guadalcanal|java sea|tinian|manila|okinawa|new guinea|philippine sea|kamikaze|tokyo|singapore|downfall/.test(text)) return 'Pacific Theater'
  if (/containment|kennan/.test(text)) return 'Containment'
  if (/marshall plan/.test(text)) return 'Marshall Plan'
  if (/warsaw pact/.test(text)) return 'Warsaw Pact'
  return `WWII and Cold War ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_history_wwii_coldwar_import.cjs.',
    '// Manual allowlist: WWII and Cold War AP History rows only; no bulk history import.',
    '',
    "export const openTriviaHistoryWwiiColdWarQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${364001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleForItem(item, index))},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP History WWII/Cold War extension micro-batch.`)},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  return lines.join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const rows = Object.values(audit.courses).flat()
  const items = rows.filter((item) => allowedSourceIds.has(item.source_id))
  if (items.length !== allowedSourceIds.size) {
    throw new Error(`Expected ${allowedSourceIds.size} allowlisted rows, found ${items.length}.`)
  }
  fs.writeFileSync(outputPath, buildOutput(items), 'utf8')
  console.log(`Wrote ${items.length} AP History WWII/Cold War questions.`)
}

main()
