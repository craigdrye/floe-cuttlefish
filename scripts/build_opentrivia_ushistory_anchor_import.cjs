const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaUsHistoryAnchorImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::history::27',
  'opentriviaqa::history::28',
  'opentriviaqa::history::29',
  'opentriviaqa::history::31',
  'opentriviaqa::history::37',
  'opentriviaqa::history::58',
  'opentriviaqa::history::92',
  'opentriviaqa::history::110',
  'opentriviaqa::history::116',
  'opentriviaqa::history::118',
  'opentriviaqa::history::119',
  'opentriviaqa::history::123',
  'opentriviaqa::history::124',
  'opentriviaqa::history::127',
  'opentriviaqa::history::128',
  'opentriviaqa::history::130',
  'opentriviaqa::history::132',
  'opentriviaqa::history::134',
  'opentriviaqa::history::155',
  'opentriviaqa::history::156',
  'opentriviaqa::history::161',
  'opentriviaqa::history::162',
  'opentriviaqa::history::165',
  'opentriviaqa::history::298',
  'opentriviaqa::history::315',
  'opentriviaqa::history::327',
  'opentriviaqa::history::352',
  'opentriviaqa::history::419',
  'opentriviaqa::history::522',
  'opentriviaqa::history::525',
  'opentriviaqa::history::576',
  'opentriviaqa::history::584',
  'opentriviaqa::history::622',
  'opentriviaqa::history::628',
  'opentriviaqa::history::703',
  'opentriviaqa::history::712',
  'opentriviaqa::history::719',
  'opentriviaqa::history::749',
  'opentriviaqa::history::842',
  'opentriviaqa::history::846',
  'opentriviaqa::history::860',
  'opentriviaqa::history::876',
  'opentriviaqa::history::879',
  'opentriviaqa::history::883',
  'opentriviaqa::history::912',
  'opentriviaqa::history::940',
  'opentriviaqa::history::983',
  'opentriviaqa::history::1012',
  'opentriviaqa::history::1069',
  'opentriviaqa::history::1070',
  'opentriviaqa::history::1072',
  'opentriviaqa::history::1073',
  'opentriviaqa::history::1074',
  'opentriviaqa::history::1075',
  'opentriviaqa::history::1077',
  'opentriviaqa::history::1086',
  'opentriviaqa::history::1096',
  'opentriviaqa::history::1099',
  'opentriviaqa::history::1100',
  'opentriviaqa::history::1101',
  'opentriviaqa::history::1102',
  'opentriviaqa::history::1113',
  'opentriviaqa::history::1116',
  'opentriviaqa::history::1148',
  'opentriviaqa::history::1182',
  'opentriviaqa::history::1187',
  'opentriviaqa::history::1190',
  'opentriviaqa::history::1192',
  'opentriviaqa::history::1211',
  'opentriviaqa::history::1216',
  'opentriviaqa::history::1271',
  'opentriviaqa::history::1273',
  'opentriviaqa::history::1295',
  'opentriviaqa::history::1343',
  'opentriviaqa::history::1348',
  'opentriviaqa::history::1349',
  'opentriviaqa::history::1352',
  'opentriviaqa::history::1367',
  'opentriviaqa::history::1372',
  'opentriviaqa::history::1375',
  'opentriviaqa::history::1409',
  'opentriviaqa::history::1421',
  'opentriviaqa::history::1429',
  'opentriviaqa::history::1463',
  'opentriviaqa::history::1493',
  'opentriviaqa::history::1517',
  'opentriviaqa::history::1535',
  'opentriviaqa::history::1545',
  'opentriviaqa::history::1547',
  'opentriviaqa::history::1554',
  'opentriviaqa::history::1560',
  'opentriviaqa::history::1562',
  'opentriviaqa::history::1566',
  'opentriviaqa::history::1588',
  'opentriviaqa::history::1612',
  'opentriviaqa::history::1616',
  'opentriviaqa::history::1619',
])

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
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
      'This answer belongs to a different event, office, war, or historical period.',
      'Match the named clue in the prompt to the specific U.S. history fact being tested.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/jefferson|lincoln|franklin|kennedy|bush|clinton|reagan|roosevelt|fillmore|john adams|washington|truman|eisenhower|nixon|johnson/.test(text)) return 'Presidents and Leadership'
  if (/civil war|antietam|gettysburg|bull run|reconstruction|grant|lee|mcclellan|farragut|my lai|fort wagner/.test(text)) return 'Civil War and Reconstruction'
  if (/cold war|cuba|vietnam|korea|kissinger|reagan|kennedy|nixon doctrine|decolonization|iran hostage|soviet|marshall/.test(text)) return 'Cold War and Vietnam'
  if (/revolution|founding|declaration|boston tea party|paris treaty|franklin|adams|washington|metric conversion act/.test(text)) return 'Revolution and Founding'
  if (/space shuttle|moon|apollo|olympic|worlds fair|patent|waterway|bush|consumer|technology/.test(text)) return '20th Century America'
  return 'AP U.S. History Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/jefferson/.test(text)) return 'Thomas Jefferson'
  if (/kennedy/.test(text)) return 'John F. Kennedy'
  if (/lincoln/.test(text)) return 'Abraham Lincoln'
  if (/clinton/.test(text)) return 'Bill Clinton'
  if (/kissinger/.test(text)) return 'Henry Kissinger'
  if (/civil war/.test(text) || /antietam|gettysburg|bull run/.test(text)) return 'Civil War'
  if (/vietnam/.test(text)) return 'Vietnam War'
  if (/korea/.test(text)) return 'Korean War'
  if (/cuba/.test(text)) return 'Cuban Missile Crisis'
  if (/revolution/.test(text) || /founding/.test(text) || /declaration/.test(text)) return 'Founding Era'
  if (/space shuttle|moon/.test(text)) return 'Space Age'
  if (/worlds fair/.test(text)) return 'Worlds Fair'
  if (/metric conversion/.test(text)) return 'Metric Conversion Act'
  return `US History Anchor ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_ushistory_anchor_import.cjs.',
    '// Manual allowlist: U.S. history anchors, wars, presidents, and core milestones only.',
    '',
    "export const openTriviaUsHistoryAnchorQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${367001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleForItem(item, index))},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the AP U.S. History anchor micro-batch.`)},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  return lines.join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const rows = audit.courses['AP US History'] || []
  const items = rows.filter((item) => allowedSourceIds.has(item.source_id))
  if (items.length !== allowedSourceIds.size) {
    throw new Error(`Expected ${allowedSourceIds.size} allowlisted rows, found ${items.length}.`)
  }
  fs.writeFileSync(outputPath, buildOutput(items), 'utf8')
  console.log(`Wrote ${items.length} AP U.S. History anchor questions.`)
}

main()
