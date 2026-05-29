const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaLiteratureCanonicalOpeningsShakespeareImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::humanities::591',
  'opentriviaqa::humanities::592',
  'opentriviaqa::literature::288',
  'opentriviaqa::literature::289',
  'opentriviaqa::literature::306',
  'opentriviaqa::literature::307',
  'opentriviaqa::literature::308',
  'opentriviaqa::literature::524',
  'opentriviaqa::literature::545',
  'opentriviaqa::literature::546',
  'opentriviaqa::literature::696',
  'opentriviaqa::literature::708',
  'opentriviaqa::literature::745',
  'opentriviaqa::literature::755',
  'opentriviaqa::literature::769',
  'opentriviaqa::literature::771',
  'opentriviaqa::literature::776',
  'opentriviaqa::literature::777',
  'opentriviaqa::literature::789',
  'opentriviaqa::literature::790',
  'opentriviaqa::literature::791',
  'opentriviaqa::literature::792',
  'opentriviaqa::literature::793',
  'opentriviaqa::literature::794',
  'opentriviaqa::literature::900',
  'opentriviaqa::literature::901',
  'opentriviaqa::literature::906',
  'opentriviaqa::literature::909',
  'opentriviaqa::literature::910',
  'opentriviaqa::literature::924',
  'opentriviaqa::literature::1054',
  'opentriviaqa::literature::1057',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bAnthony and Cleopatra\b/g, 'Antony and Cleopatra')
    .replace(/\bHans Christian Andersens\b/g, "Hans Christian Andersen's")
    .replace(/\bOscar Wildes\b/g, "Oscar Wilde's")
    .replace(/\bEdgar Allen Poe\b/g, 'Edgar Allan Poe')
    .replace(/\bkings widow\b/g, "king's widow")
    .replace(/\bShakespeares\b/g, "Shakespeare's")
    .replace(/\bKing Lears\b/g, "King Lear's")
    .replace(/\bfamilys\b/g, "family's")
    .replace(/\bPulitzer prize\b/g, 'Pulitzer Prize')
    .replace(/\byoull\b/g, "you'll")
    .replace(/\b20th Century\b/g, '20th century')
    .replace(/\btrial in in 1895\b/g, 'trial in 1895')
    .replace(/\bThis novel opens with the following sentence: You may rejoice to hear that a disaster has accompanied the commencement of an enterprise which you have regarded with such evil foreboding\.\./g, 'What novel opens with the line "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings"?')
    .replace(/\bIt was the best of times,it was the worst of times\.\.\. is\b/g, '"It was the best of times, it was the worst of times..." is')
    .replace(/\bIt was the best of times, it was the worst of times\. is the beginning of this famous Dickens historical novel, concerning\b/g, 'What Dickens historical novel begins "It was the best of times, it was the worst of times" and concerns')
    .replace(/\band concerns the French Revolution and dealing with\b/g, 'and concerns the French Revolution and deals with')
    .replace(/\bIt is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife\./g, '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."')
    .replace(/\bWhat novel opens with this line: It was a cold day in April and the clock was striking thirteen\.\?/g, 'What novel opens with the line "It was a cold day in April and the clocks were striking thirteen"?')
    .replace(/\bWhat novel opens with this line: Youll rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings\.\./g, 'What novel opens with the line "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings"?')
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
      'This answer points to a different author, work, character, movement, or literary context.',
      'Use the named clue in the prompt and match it to the specific text, writer, or character being tested.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/shakespeare|othello|macbeth|romeo and juliet|twelfth night|richard iii|claudius|duncan|iago|shylock|edmund/.test(text)) return 'Shakespeare: Plays and Characters'
  if (/opens with|opening line|clock was striking|forebodings|best of times|truth universally/.test(text)) return 'Famous Opening Lines'
  if (/sappho|longfellow|frost|ballad of reading gaol/.test(text)) return 'Poetry and Poets'
  if (/wilde|dorian gray|aestheticism|henry wotton/.test(text)) return 'Oscar Wilde and Aestheticism'
  if (/grapes of wrath|joad|steinbeck|pro-labor|oklahoma to california/.test(text)) return 'The Grapes of Wrath'
  if (/joyce|hemingway|dickens|david copperfield/.test(text)) return 'Modern and Victorian Fiction'
  return 'AP English Literature Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/sappho/.test(text)) return 'Sappho'
  if (/shylock/.test(text)) return 'Shylock'
  if (/nineteen eighty-four|1984|clock/.test(text)) return 'Nineteen Eighty-Four'
  if (/frankenstein|forebodings/.test(text)) return 'Frankenstein'
  if (/othello/.test(text)) return 'Othello'
  if (/macbeth|duncan/.test(text)) return 'Macbeth'
  if (/romeo and juliet/.test(text)) return 'Romeo and Juliet'
  if (/ulysses/.test(text)) return 'Ulysses'
  if (/james joyce/.test(text)) return 'James Joyce'
  if (/farewell to arms/.test(text)) return 'A Farewell to Arms'
  if (/uriah heep|david copperfield/.test(text)) return 'David Copperfield'
  if (/twelfth night|titania/.test(text)) return 'Shakespeare Heroines'
  if (/grapes of wrath|steinbeck|joad/.test(text)) return 'The Grapes of Wrath'
  if (/longfellow/.test(text)) return 'Longfellow'
  if (/aestheticism/.test(text)) return 'Aestheticism'
  if (/dorian gray|henry wotton/.test(text)) return 'The Picture of Dorian Gray'
  if (/reading gaol/.test(text)) return 'The Ballad of Reading Gaol'
  if (/richard iii/.test(text)) return 'Richard III'
  if (/claudius/.test(text)) return 'Claudius'
  if (/iago/.test(text)) return 'Iago'
  if (/edmund|king lear/.test(text)) return 'King Lear'
  if (/frost/.test(text)) return 'Robert Frost'
  if (/best of times/.test(text)) return 'A Tale of Two Cities'
  if (/truth universally/.test(text)) return 'Pride and Prejudice'
  return `Canonical Literature ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_literature_canonical_openings_shakespeare_import.cjs.',
    '// Manual allowlist: canonical AP English Literature rows only; excludes quote-completion rows and narrow biography trivia.',
    '',
    "export const openTriviaLiteratureCanonicalOpeningsShakespeareQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${363501 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleForItem(item, index))},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP English Literature canonical openings/Shakespeare extension micro-batch.`)},`)
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
  console.log(`Wrote ${items.length} AP English Literature canonical questions.`)
}

main()
