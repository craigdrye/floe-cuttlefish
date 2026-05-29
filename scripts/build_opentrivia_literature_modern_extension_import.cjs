const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaLiteratureModernExtensionImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::literature::309',
  'opentriviaqa::literature::310',
  'opentriviaqa::literature::311',
  'opentriviaqa::literature::312',
  'opentriviaqa::literature::313',
  'opentriviaqa::literature::314',
  'opentriviaqa::literature::315',
  'opentriviaqa::literature::317',
  'opentriviaqa::literature::319',
  'opentriviaqa::literature::325',
  'opentriviaqa::literature::328',
  'opentriviaqa::literature::353',
  'opentriviaqa::literature::355',
  'opentriviaqa::literature::360',
  'opentriviaqa::literature::385',
  'opentriviaqa::literature::392',
  'opentriviaqa::literature::397',
  'opentriviaqa::literature::401',
  'opentriviaqa::literature::408',
  'opentriviaqa::literature::409',
  'opentriviaqa::literature::411',
  'opentriviaqa::literature::413',
  'opentriviaqa::literature::427',
  'opentriviaqa::literature::428',
  'opentriviaqa::literature::430',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bkings\b/g, "king's")
    .replace(/\bLysanders\b/g, "Lysander's")
    .replace(/\bShakespeares\b/g, "Shakespeare's")
    .replace(/\bJane Austins\b/g, "Jane Austen's")
    .replace(/\bBennets\b/g, "Bennet's")
    .replace(/\bSwifts\b/g, "Swift's")
    .replace(/\bGullivers Travels\b/g, "Gulliver's Travels")
    .replace(/\bWinters Tale\b/g, "The Winter's Tale")
    .replace(/\bThe The Winter's Tale\b/g, "The Winter's Tale")
    .replace(/\bA Midsummer Nights Dream\b/g, "A Midsummer Night's Dream")
    .replace(/\bThe Winters Tale\b/g, "The Winter's Tale")
    .replace(/\bThe Old Mean and the Sea\b/g, 'The Old Man and the Sea')
    .replace(/\bNoble Prize\b/g, 'Nobel Prize')
    .replace(/\bMidnights Children\b/g, "Midnight's Children")
    .replace(/\bTime magazines\b/g, "Time magazine's")
    .replace(/\bNathanial Hawthornes\b/g, "Nathaniel Hawthorne's")
    .replace(/\bpoets only novel\b/g, "poet's only novel")
    .replace(/\bAdultary\b/g, 'Adultery')
    .replace(/\bMischkin\b/g, 'Myshkin')
    .replace(/\bHemingways\b/g, "Hemingway's")
    .replace(/\bwhich opens with the lines, All the worlds a stage,/g, "which opens with the line \"All the world's a stage\"")
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
      'This option does not match the literary work, author, character, or movement clue in the prompt.',
      'Anchor the answer to the named text, author, character, genre, or literary period.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/shakespeare|hamlet|richard iii|comedy of errors|midsummer|tempest|henry v|falstaff|agincourt/.test(text)) return 'Shakespeare and Drama'
  if (/austen|pride and prejudice|bennet|wickham|charlotte lucas/.test(text)) return 'The Novel: Austen to Modernism'
  if (/orwell|dickens|bronte|dostoevsky|dreiser|salinger|caulfield|catcher in the rye|faulkner|hemingway/.test(text)) return 'Canonical Fiction'
  if (/beckett|plath|baudelaire|flowers of evil|godot/.test(text)) return 'Modernism and Poetry'
  if (/gulliver|yahoo|eponym/.test(text)) return 'Literary Terms and Influence'
  return 'AP English Literature Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/hamlet/.test(text)) return 'Hamlet'
  if (/richard iii/.test(text)) return 'Richard III'
  if (/comedy of errors/.test(text)) return 'The Comedy of Errors'
  if (/midsummer/.test(text)) return "A Midsummer Night's Dream"
  if (/henry v|agincourt/.test(text)) return 'Henry V and Agincourt'
  if (/as you like it|all the world/.test(text)) return 'As You Like It'
  if (/tempest/.test(text)) return 'The Tempest'
  if (/pride and prejudice|wickham|charlotte lucas/.test(text)) return 'Pride and Prejudice'
  if (/animal farm|orwell/.test(text)) return 'George Orwell'
  if (/dickens|boz/.test(text)) return 'Charles Dickens'
  if (/heathcliff|bronte/.test(text)) return 'Emily Bronte'
  if (/faulkner|mother is a fish/.test(text)) return 'William Faulkner'
  if (/dostoevsky|myshkin/.test(text)) return 'Dostoevsky'
  if (/american tragedy/.test(text)) return 'An American Tragedy'
  if (/catcher in the rye/.test(text)) return 'The Catcher in the Rye'
  if (/gulliver|yahoo/.test(text)) return "Gulliver's Travels"
  if (/falstaff/.test(text)) return 'Falstaff'
  if (/hemingway/.test(text)) return 'Ernest Hemingway'
  if (/godot|beckett/.test(text)) return 'Waiting for Godot'
  if (/bell jar|plath/.test(text)) return 'Sylvia Plath'
  if (/flowers of evil|baudelaire/.test(text)) return 'Baudelaire'
  return `Literature Extension ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_literature_modern_extension_import.cjs.',
    '// Manual allowlist: canonical AP English Literature rows only; excludes quote-completion and narrow biography trivia.',
    '',
    "export const openTriviaLiteratureModernExtensionQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${363001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleForItem(item, index))},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP English Literature modern/canon extension micro-batch.`)},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  return lines.join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const rows = audit.courses['AP English Literature/Humanities'] || []
  const items = rows.filter((item) => allowedSourceIds.has(item.source_id))
  if (items.length !== allowedSourceIds.size) {
    throw new Error(`Expected ${allowedSourceIds.size} allowlisted rows, found ${items.length}.`)
  }
  fs.writeFileSync(outputPath, buildOutput(items), 'utf8')
  console.log(`Wrote ${items.length} AP English Literature extension questions.`)
}

main()
