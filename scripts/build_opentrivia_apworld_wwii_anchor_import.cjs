const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaWorldHistoryAnchorImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::history::13',
  'opentriviaqa::history::20',
  'opentriviaqa::history::23',
  'opentriviaqa::history::24',
  'opentriviaqa::history::38',
  'opentriviaqa::history::40',
  'opentriviaqa::history::41',
  'opentriviaqa::history::42',
  'opentriviaqa::history::45',
  'opentriviaqa::history::48',
  'opentriviaqa::history::64',
  'opentriviaqa::history::77',
  'opentriviaqa::history::78',
  'opentriviaqa::history::144',
  'opentriviaqa::history::146',
  'opentriviaqa::history::147',
  'opentriviaqa::history::149',
  'opentriviaqa::history::182',
  'opentriviaqa::history::184',
  'opentriviaqa::history::185',
  'opentriviaqa::history::188',
  'opentriviaqa::history::189',
  'opentriviaqa::history::192',
  'opentriviaqa::history::194',
  'opentriviaqa::history::293',
  'opentriviaqa::history::299',
  'opentriviaqa::history::300',
  'opentriviaqa::history::306',
  'opentriviaqa::history::307',
  'opentriviaqa::history::339',
  'opentriviaqa::history::341',
  'opentriviaqa::history::358',
  'opentriviaqa::history::378',
  'opentriviaqa::history::381',
  'opentriviaqa::history::402',
  'opentriviaqa::history::418',
  'opentriviaqa::history::421',
  'opentriviaqa::history::441',
  'opentriviaqa::history::450',
  'opentriviaqa::history::495',
  'opentriviaqa::history::508',
  'opentriviaqa::history::533',
  'opentriviaqa::history::551',
  'opentriviaqa::history::555',
  'opentriviaqa::history::557',
  'opentriviaqa::history::562',
  'opentriviaqa::history::563',
  'opentriviaqa::history::566',
  'opentriviaqa::history::572',
  'opentriviaqa::history::575',
  'opentriviaqa::history::578',
  'opentriviaqa::history::579',
  'opentriviaqa::history::581',
  'opentriviaqa::history::595',
  'opentriviaqa::history::615',
  'opentriviaqa::history::629',
  'opentriviaqa::history::633',
  'opentriviaqa::history::649',
  'opentriviaqa::history::658',
  'opentriviaqa::history::659',
  'opentriviaqa::history::660',
  'opentriviaqa::history::669',
  'opentriviaqa::history::683',
  'opentriviaqa::history::704',
  'opentriviaqa::history::705',
  'opentriviaqa::history::706',
  'opentriviaqa::history::709',
  'opentriviaqa::history::710',
  'opentriviaqa::history::726',
  'opentriviaqa::history::731',
  'opentriviaqa::history::744',
  'opentriviaqa::history::750',
  'opentriviaqa::history::751',
  'opentriviaqa::history::779',
  'opentriviaqa::history::780',
  'opentriviaqa::history::781',
  'opentriviaqa::history::784',
  'opentriviaqa::history::785',
  'opentriviaqa::history::819',
  'opentriviaqa::history::821',
  'opentriviaqa::history::823',
  'opentriviaqa::history::832',
  'opentriviaqa::history::900',
  'opentriviaqa::history::904',
  'opentriviaqa::history::917',
  'opentriviaqa::history::939',
  'opentriviaqa::history::942',
  'opentriviaqa::history::944',
  'opentriviaqa::history::945',
  'opentriviaqa::history::947',
  'opentriviaqa::history::951',
  'opentriviaqa::history::959',
  'opentriviaqa::history::976',
  'opentriviaqa::history::994',
  'opentriviaqa::history::996',
  'opentriviaqa::history::1006',
  'opentriviaqa::history::1017',
  'opentriviaqa::history::1021',
  'opentriviaqa::history::1025',
  'opentriviaqa::history::1029',
  'opentriviaqa::history::1036',
  'opentriviaqa::history::1041',
  'opentriviaqa::history::1051',
  'opentriviaqa::history::1052',
  'opentriviaqa::history::1056',
  'opentriviaqa::history::1090',
  'opentriviaqa::history::1093',
  'opentriviaqa::history::1126',
  'opentriviaqa::history::1133',
  'opentriviaqa::history::1142',
  'opentriviaqa::history::1143',
  'opentriviaqa::history::1152',
  'opentriviaqa::history::1168',
  'opentriviaqa::history::1193',
  'opentriviaqa::history::1212',
  'opentriviaqa::history::1215',
  'opentriviaqa::history::1230',
  'opentriviaqa::history::1253',
  'opentriviaqa::history::1260',
  'opentriviaqa::history::1261',
  'opentriviaqa::history::1278',
  'opentriviaqa::history::1279',
  'opentriviaqa::history::1280',
  'opentriviaqa::history::1281',
  'opentriviaqa::history::1282',
  'opentriviaqa::history::1283',
  'opentriviaqa::history::1284',
  'opentriviaqa::history::1285',
  'opentriviaqa::history::1298',
  'opentriviaqa::history::1299',
  'opentriviaqa::history::1300',
  'opentriviaqa::history::1306',
  'opentriviaqa::history::1327',
  'opentriviaqa::history::1344',
  'opentriviaqa::history::1376',
  'opentriviaqa::history::1380',
  'opentriviaqa::history::1381',
  'opentriviaqa::history::1382',
  'opentriviaqa::history::1384',
  'opentriviaqa::history::1387',
  'opentriviaqa::history::1388',
  'opentriviaqa::history::1389',
  'opentriviaqa::history::1394',
  'opentriviaqa::history::1422',
  'opentriviaqa::history::1426',
  'opentriviaqa::history::1434',
  'opentriviaqa::history::1435',
  'opentriviaqa::history::1436',
  'opentriviaqa::history::1499',
  'opentriviaqa::history::1501',
  'opentriviaqa::history::1520',
  'opentriviaqa::history::1523',
  'opentriviaqa::history::1534',
  'opentriviaqa::history::1541',
  'opentriviaqa::history::1550',
  'opentriviaqa::history::1555',
  'opentriviaqa::history::1559',
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
      'This answer belongs to a different war, empire, event, or era.',
      'Match the named clue in the prompt to the specific world-history fact being tested.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/world war ii|wwii|hitler|stalin|rommel|montgomery|goebbels|heydrich|bannockburn|agincourt|midway|normandy|austerlitz|napoleonic|anzschluss/.test(text)) return 'World War II and Its Aftermath'
  if (/cold war|cuba|soviet|khrushchev|kennedy|stalin|decolonization|nixon|reagan|kissinger|marshall|berlin|vietnam|korea/.test(text)) return 'Cold War and Decolonization'
  if (/japan|samurai|may[a-z]|inca|quechua|chimor|sapa inca|tokugawa|bushido|noryang|shiroyama/.test(text)) return 'East Asia and Imperial China'
  if (/rome|carthage|alexander|cleopatra|isis|pope leo|byzantine|greek|plato|greece|medieval|crusades|pope|salem/.test(text)) return 'Ancient Mediterranean'
  if (/founding|revolution|washington|jefferson|lincoln|franklin|adams|paris treaty|boston tea party|bill of rights|declaration/.test(text)) return 'Revolutions and Early America'
  if (/space shuttle|apollo|sputnik|luna|moon|columbia|gagarin|komarov|reagan|patent|metric|worlds fair/.test(text)) return 'Global Turning Points'
  return 'AP World History Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/anschluss/.test(text)) return 'Anschluss'
  if (/desert fox|rommel/.test(text)) return 'Erwin Rommel'
  if (/me-262/.test(text)) return 'Me-262'
  if (/albert speer/.test(text)) return 'Albert Speer'
  if (/zhukov/.test(text)) return 'Georgi Zhukov'
  if (/montgomery/.test(text)) return 'Bernard Montgomery'
  if (/hong kong/.test(text)) return 'Hong Kong'
  if (/new amsterdam/.test(text)) return 'New York'
  if (/mous?e/i.test(text)) return 'Panzerkampfwagen VIII Maus'
  if (/napoleon/.test(text) && /1804/.test(text)) return 'Napoleonic France'
  if (/indochina/.test(text)) return 'French Indochina'
  if (/japan|axis|allies|world war ii/.test(text)) return 'World War II'
  if (/barbarossa/.test(text)) return 'Operation Barbarossa'
  if (/salem/.test(text)) return 'Salem Witch Trials'
  if (/tripartite pact/.test(text)) return 'Tripartite Pact'
  if (/resistance movement/.test(text)) return 'Auxiliary Units'
  if (/surrender of the german military forces/.test(text)) return 'General Montgomery'
  if (/big bertha/.test(text)) return 'Big Bertha'
  if (/paris gun/.test(text)) return 'Paris Gun'
  if (/brazil|krupp|germany|arsenic|guillotine/.test(text)) return 'World History'
  return `World History ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_apworld_wwii_anchor_import.cjs.',
    '// Manual allowlist: world history anchor rows centered on wars, empires, and major milestones.',
    '',
    "export const openTriviaWorldHistoryAnchorQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${368001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleForItem(item, index))},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the AP World History anchor micro-batch.`)},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  return lines.join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const rows = audit.courses['AP World History'] || []
  const items = rows.filter((item) => allowedSourceIds.has(item.source_id))
  if (items.length !== allowedSourceIds.size) {
    throw new Error(`Expected ${allowedSourceIds.size} allowlisted rows, found ${items.length}.`)
  }
  fs.writeFileSync(outputPath, buildOutput(items), 'utf8')
  console.log(`Wrote ${items.length} AP World History anchor questions.`)
}

main()
