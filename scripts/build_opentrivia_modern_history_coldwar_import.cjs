const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaModernHistoryColdWarImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::history::1039',
  'opentriviaqa::history::1040',
  'opentriviaqa::history::1042',
  'opentriviaqa::history::1043',
  'opentriviaqa::history::1045',
  'opentriviaqa::history::1046',
  'opentriviaqa::history::1047',
  'opentriviaqa::history::1068',
  'opentriviaqa::history::1078',
  'opentriviaqa::history::1079',
  'opentriviaqa::history::1080',
  'opentriviaqa::history::1081',
  'opentriviaqa::history::1083',
  'opentriviaqa::history::1087',
  'opentriviaqa::history::1089',
  'opentriviaqa::history::1173',
  'opentriviaqa::history::1174',
  'opentriviaqa::history::1177',
  'opentriviaqa::history::1254',
  'opentriviaqa::history::1256',
  'opentriviaqa::history::1257',
  'opentriviaqa::history::1424',
  'opentriviaqa::history::1427',
  'opentriviaqa::history::1441',
  'opentriviaqa::history::1443',
  'opentriviaqa::history::1508',
  'opentriviaqa::history::1542',
  'opentriviaqa::history::1610',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bUS\b/g, 'U.S.')
    .replace(/\bWW II\b/g, 'World War II')
    .replace(/\bWorld War Two\b/g, 'World War II')
    .replace(/\bHitlers\b/g, "Hitler's")
    .replace(/\bTrumans\b/g, "Truman's")
    .replace(/\bcommander-in-chiefs\b/g, "commander-in-chief's")
    .replace(/\bKTM\b/g, 'KMT')
    .replace(/\bdefectors\b/g, "defector's")
    .replace(/\bspys\b/g, "spy's")
    .replace(/\binstillation\b/g, 'installation')
    .replace(/\bthe the\b/g, 'the')
    .replace(/\bassasination\b/g, 'assassination')
    .replace(/\bGalipoli\b/g, 'Gallipoli')
    .replace(/\bSarikamis\./g, 'Sarikamis')
    .replace(/\bEnglish channel\b/g, 'English Channel')
    .replace(/\bwarfare that was carried out\b/g, 'air campaign carried out')
    .replace(/\bair air campaign\b/g, 'air campaign')
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
      'This option does not match the modern-history clue in the prompt.',
      'Anchor the answer to the relevant war, Cold War policy, decolonization event, decade, or institution.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/truman|korean|atomic bomb|cold war|cuba|u-2|iron curtain|38th parallel|soviet union|communism|european coal and steel|chiang|kmt|taiwan|1990s|1950s/.test(text)) return 'Cold War and Decolonization'
  if (/indochina|dien bien phu|india gained independence|israel was established/.test(text)) return 'Decolonization and Postwar Order'
  if (/battle of britain|world war ii|deadliest conflict|1930s|1940s/.test(text)) return 'World War II and Its Aftermath'
  if (/\bworld war i\b|first world war|franz ferdinand|western front|gallipoli|somme|1914|1910s/.test(text)) return 'World War I'
  if (/1950s|1990s|1910s/.test(text)) return 'Modern History Timeline'
  return 'Modern World History'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/truman doctrine/.test(text)) return 'Truman Doctrine'
  if (/macarthur/.test(text)) return 'Korean War Command'
  if (/atomic bomb/.test(text)) return 'Atomic Monopoly'
  if (/chiang|kmt/.test(text)) return 'Chinese Civil War'
  if (/first decade of the cold war/.test(text)) return 'Early Cold War Presidents'
  if (/indochina/.test(text) || /dien bien phu/.test(text)) return 'Indochina'
  if (/thaw/.test(text)) return 'Cold War Thaw'
  if (/u-2|cuba/.test(text)) return 'Cuban Missile Crisis'
  if (/1950s/.test(text)) return '1950s'
  if (/1990s/.test(text)) return '1990s'
  if (/1910s/.test(text)) return '1910s'
  if (/1940s/.test(text)) return '1940s'
  if (/1930s/.test(text)) return '1930s'
  if (/deadliest/.test(text)) return 'World War II'
  if (/direct military clash/.test(text)) return 'Cold War'
  if (/franz ferdinand/.test(text)) return 'World War I Trigger'
  if (/western front/.test(text)) return 'Western Front'
  if (/dardanelles|gallipoli/.test(text)) return 'Gallipoli'
  if (/battle of britain|raf|luftwaffe|air superiority/.test(text)) return 'Battle of Britain'
  if (/somme/.test(text)) return 'Battle of the Somme'
  if (/iron curtain/.test(text)) return 'Iron Curtain'
  if (/european coal and steel/.test(text)) return 'European Integration'
  if (/38th parallel/.test(text)) return 'Korea: 38th Parallel'
  return `Modern History ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_modern_history_coldwar_import.cjs.',
    '// Manual allowlist: modern-history, Cold War, WWI, and postwar-order rows only.',
    '',
    "export const openTriviaModernHistoryColdWarQuestions = makeQuestionBank('AP', [",
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
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP History modern-history/Cold War micro-batch.`)},`)
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
  console.log(`Wrote ${items.length} AP History modern-history/Cold War questions.`)
}

main()
