const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-history-humanities-literature-candidates.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaLiteraturePoetsAuthorsImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::literature::114',
  'opentriviaqa::literature::149',
  'opentriviaqa::literature::197',
  'opentriviaqa::literature::256',
  'opentriviaqa::literature::395',
  'opentriviaqa::literature::398',
  'opentriviaqa::literature::429',
  'opentriviaqa::literature::543',
  'opentriviaqa::literature::547',
  'opentriviaqa::literature::559',
  'opentriviaqa::literature::561',
  'opentriviaqa::literature::590',
  'opentriviaqa::literature::593',
  'opentriviaqa::literature::598',
  'opentriviaqa::literature::627',
  'opentriviaqa::literature::628',
  'opentriviaqa::literature::629',
  'opentriviaqa::literature::630',
  'opentriviaqa::literature::631',
  'opentriviaqa::literature::632',
  'opentriviaqa::literature::633',
  'opentriviaqa::literature::656',
  'opentriviaqa::literature::659',
  'opentriviaqa::literature::660',
  'opentriviaqa::literature::661',
  'opentriviaqa::literature::662',
  'opentriviaqa::literature::663',
  'opentriviaqa::literature::665',
  'opentriviaqa::literature::667',
  'opentriviaqa::literature::675',
  'opentriviaqa::literature::678',
  'opentriviaqa::literature::681',
  'opentriviaqa::literature::682',
  'opentriviaqa::literature::684',
  'opentriviaqa::literature::685',
  'opentriviaqa::literature::686',
  'opentriviaqa::literature::687',
  'opentriviaqa::literature::736',
  'opentriviaqa::literature::737',
  'opentriviaqa::literature::738',
  'opentriviaqa::literature::740',
  'opentriviaqa::literature::741',
  'opentriviaqa::literature::742',
  'opentriviaqa::literature::743',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bShel Silverstien\b/g, 'Shel Silverstein')
    .replace(/\bJane Austin\b/g, 'Jane Austen')
    .replace(/\bWilliam Butler Yeats\b/g, 'William Butler Yeats')
    .replace(/\bHerman Melvilles\b/g, "Herman Melville's")
    .replace(/\bFrankenstein, who creates\b/g, 'Frankenstein, who creates')
    .replace(/\bAlices Adventures in Wonderland\b/g, "Alice's Adventures in Wonderland")
    .replace(/\bGullivers Travel\b/g, "Gulliver's Travels")
    .replace(/\bLAllegro\b/g, "L'Allegro")
    .replace(/\bil Penseroso\b/g, "Il Penseroso")
    .replace(/\bKhubla Khan\b/g, 'Kubla Khan')
    .replace(/\bShakespeares\b/g, "Shakespeare's")
    .replace(/\bPoets\b/g, 'Poets')
    .replace(/\bMicheangelo\b/g, 'Michelangelo')
    .replace(/\bIt was a cold day in April and the clock was striking thirteen\b/g, 'It was a cold day in April and the clocks were striking thirteen')
    .replace(/\bYoull rejoice\b/g, "You'll rejoice")
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
      'This answer belongs to a different author, poem, book, or literary tradition.',
      'Use the named work, poet, or character in the prompt as the primary clue.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/poe|dickinson|browning|byron|coleridge|wordsworth|tennyson|blake|milton|papa's waltz|nash|brooks|roethke|angelou/.test(text)) return 'Poetry and Poets'
  if (/chaucer|canterbury tales|shakespeare|romeo and juliet|lady anne/.test(text)) return 'Shakespeare and Medieval Literature'
  if (/austen|bronte|steinbeck|dickens|salinger|frankenstein|moby dick|jane eyre|metamorphosis|catcher in the rye/.test(text)) return 'Canonical Fiction'
  if (/wilde|aestheticism|dorian gray|gross indecency/.test(text)) return 'Oscar Wilde and Aestheticism'
  if (/children|alice|goldilocks/.test(text)) return 'Children and Folklore Classics'
  return 'AP English Literature Foundations'
}

function titleForItem(item, index) {
  const text = `${item.prompt} ${item.correct_answer}`.toLowerCase()
  if (/canterbury tales/.test(text)) return 'The Canterbury Tales'
  if (/wind done gone/.test(text)) return 'The Wind Done Gone'
  if (/bennet sisters|pride and prejudice/.test(text)) return 'Pride and Prejudice'
  if (/nobel prize in literature/.test(text)) return 'Literary Nobel Prize'
  if (/alice in wonderland/.test(text)) return "Alice's Adventures in Wonderland"
  if (/eponyms/.test(text)) return 'Dickens Eponyms'
  if (/house of the seven gables/.test(text)) return 'The House of the Seven Gables'
  if (/bronte/.test(text)) return 'Bronte'
  if (/moby dick|white whale/.test(text)) return 'Moby-Dick'
  if (/frankenstein/.test(text)) return 'Frankenstein'
  if (/jekyll and mr hyde/.test(text)) return 'Dr Jekyll and Mr Hyde'
  if (/goldilocks/.test(text)) return 'Goldilocks'
  if (/romeo/.test(text)) return 'Romeo and Juliet'
  if (/dorothy parker/.test(text)) return 'Dorothy Parker'
  if (/byron/.test(text)) return 'Lord Byron'
  if (/wordsworth/.test(text)) return 'William Wordsworth'
  if (/coleridge/.test(text)) return 'Samuel Taylor Coleridge'
  if (/chaucer/.test(text)) return 'Geoffrey Chaucer'
  if (/raleigh/.test(text)) return 'Sir Walter Raleigh'
  if (/milton/.test(text)) return 'John Milton'
  if (/pope/.test(text)) return 'Alexander Pope'
  if (/blake/.test(text)) return 'William Blake'
  if (/tennyson/.test(text)) return 'Alfred, Lord Tennyson'
  if (/dickinson/.test(text)) return 'Emily Dickinson'
  if (/browning/.test(text)) return 'Robert Browning'
  if (/nash|brooks|roethke|angelou/.test(text)) return '20th-Century Poets'
  return `Literature Set ${index + 1}`
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_literature_poets_authors_import.cjs.',
    '// Manual allowlist: poets, canonical authors, and durable literary identity rows only.',
    '',
    "export const openTriviaLiteraturePoetsAuthorsQuestions = makeQuestionBank('AP', [",
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
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the AP English Literature poets/authors micro-batch.`)},`)
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
  console.log(`Wrote ${items.length} AP English Literature poets/authors questions.`)
}

main()
