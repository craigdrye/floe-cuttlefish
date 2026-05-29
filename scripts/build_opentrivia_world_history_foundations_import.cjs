const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaWorldHistoryFoundationsImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::history::356',
  'opentriviaqa::history::490',
  'opentriviaqa::history::707',
  'opentriviaqa::history::711',
  'opentriviaqa::history::777',
  'opentriviaqa::history::849',
  'opentriviaqa::history::852',
  'opentriviaqa::history::853',
  'opentriviaqa::history::855',
  'opentriviaqa::history::856',
  'opentriviaqa::history::858',
  'opentriviaqa::history::938',
  'opentriviaqa::history::941',
  'opentriviaqa::history::943',
  'opentriviaqa::history::997',
  'opentriviaqa::history::1001',
  'opentriviaqa::history::1003',
  'opentriviaqa::history::1231',
  'opentriviaqa::history::1265',
  'opentriviaqa::history::1267',
  'opentriviaqa::history::1456',
  'opentriviaqa::history::1458',
  'opentriviaqa::history::1527',
  'opentriviaqa::history::1536',
  'opentriviaqa::history::1537',
  'opentriviaqa::history::1611',
  'opentriviaqa::history::1613',
  'opentriviaqa::history::1620',
  'opentriviaqa::history::1623',
  'opentriviaqa::history::1627',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bAlexander the Greats\b/g, "Alexander the Great's")
    .replace(/\bMayas\b/g, 'The Maya')
    .replace(/\bthe The Maya\b/g, 'the Maya')
    .replace(/\bSubstraction\b/g, 'Subtraction')
    .replace(/\bPeoples Republic\b/g, "People's Republic")
    .replace(/\bTokugawa\b/g, 'Tokugawa')
    .replace(/\bMuslin leader\b/g, 'Muslim leader')
    .replace(/\bCape of Good Hope\b/g, 'the Cape of Good Hope')
    .replace(/\b2nd century BC\b/g, '2nd century BCE')
    .replace(/\b2nd century AD\b/g, '2nd century CE')
    .replace(/\b15th century AD\b/g, '15th century CE')
    .replace(/\b3rd century AD\b/g, '3rd century CE')
    .replace(/\b4th century AD\b/g, '4th century CE')
    .replace(/\b3rd century BC\b/g, '3rd century BCE')
    .replace(/\b11th century AD\b/g, '11th century CE')
    .replace(/\b13th century AD\b/g, '13th century CE')
    .replace(/\b17th century AD\b/g, '17th century CE')
    .replace(/\b9th century AD\b/g, '9th century CE')
    .replace(/\bInca\b/g, 'Inca')
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
      'This option does not match the world-history clue in the prompt.',
      'Anchor the answer to the named civilization, dynasty, empire, ruler, battle, or historical process.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/maya|inca|pizarro|cajamarca|atahualpa/.test(text)) return 'Mesoamerican and Andean Civilizations'
  if (/qin|han dynasty|tang dynasty|yuan dynasty|ming dynasty|qing dynasty|opium war|meiji|chinese|japan/.test(text)) return 'East Asia and Imperial China'
  if (/alexander|punic|rome|cannae|carthaginian|five good emperors/.test(text)) return 'Ancient Mediterranean'
  if (/crusade|hattin|saladin|jerusalem|capetian|louis xiv|norman|hastings|england|britain|cromwell|james i|james vi|italy|cavour|garibaldi/.test(text)) return 'Medieval and Early Modern Europe'
  if (/plague of justinian|paper|silk road|americas|cape of good hope/.test(text)) return 'Global Turning Points'
  return 'World History Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/alexander/.test(text)) return 'Alexander the Great'
  if (/crusade|jerusalem|hattin|saladin/.test(text)) return 'Crusades'
  if (/maya/.test(text)) return 'Maya Civilization'
  if (/qing dynasty/.test(text)) return 'Qing Dynasty'
  if (/\bqin\b|shi huangdi/.test(text)) return 'Qin Dynasty'
  if (/han dynasty/.test(text)) return 'Han Dynasty'
  if (/tang dynasty/.test(text)) return 'Tang Dynasty'
  if (/yuan dynasty|kublai/.test(text)) return 'Yuan Dynasty'
  if (/ming dynasty/.test(text)) return 'Ming Dynasty'
  if (/inca|pizarro|cajamarca|atahualpa/.test(text)) return 'Inca Empire'
  if (/james i|james vi/.test(text)) return 'Union of the Crowns'
  if (/meiji/.test(text)) return 'Meiji Restoration'
  if (/foreign invasion of britain|dutch in 1688/.test(text)) return 'Glorious Revolution'
  if (/cromwell/.test(text)) return 'Oliver Cromwell'
  if (/plague of justinian/.test(text)) return 'Plague of Justinian'
  if (/capetian/.test(text)) return 'Capetian France'
  if (/sun king|louis xiv/.test(text)) return 'Louis XIV'
  if (/hastings|normans|harold/.test(text)) return 'Norman Conquest'
  if (/opium war/.test(text)) return 'First Opium War'
  if (/italy/.test(text)) return 'Italian Unification'
  if (/cannae|hannibal/.test(text)) return 'Hannibal and Cannae'
  if (/paper|silk road/.test(text)) return 'Silk Road'
  if (/americas|cape/.test(text)) return 'Age of Exploration'
  if (/five good emperors/.test(text)) return 'Roman Empire'
  return `World History Foundations ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_world_history_foundations_import.cjs.',
    '// Manual allowlist: stable world-history survey rows only; no bulk history import.',
    '',
    "export const openTriviaWorldHistoryFoundationsQuestions = makeQuestionBank('AP', [",
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
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP History world-history foundations micro-batch.`)},`)
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
  console.log(`Wrote ${items.length} AP History world-history foundation questions.`)
}

main()
