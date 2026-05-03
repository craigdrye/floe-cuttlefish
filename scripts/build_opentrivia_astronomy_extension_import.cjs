const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-animals-science-technology-audit.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaAstronomyExtensionImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::science-technology::164',
  'opentriviaqa::science-technology::165',
  'opentriviaqa::science-technology::166',
  'opentriviaqa::science-technology::168',
  'opentriviaqa::science-technology::170',
  'opentriviaqa::science-technology::357',
  'opentriviaqa::science-technology::805',
  'opentriviaqa::science-technology::852',
  'opentriviaqa::science-technology::853',
  'opentriviaqa::science-technology::927',
  'opentriviaqa::science-technology::1103',
  'opentriviaqa::science-technology::1105',
  'opentriviaqa::science-technology::1181',
  'opentriviaqa::science-technology::1183',
  'opentriviaqa::science-technology::1316',
  'opentriviaqa::science-technology::1399',
  'opentriviaqa::science-technology::1416',
  'opentriviaqa::science-technology::1417',
  'opentriviaqa::science-technology::1418',
  'opentriviaqa::science-technology::1421',
  'opentriviaqa::science-technology::1496',
  'opentriviaqa::science-technology::1497',
  'opentriviaqa::science-technology::1499',
  'opentriviaqa::science-technology::1502',
  'opentriviaqa::science-technology::1575',
  'opentriviaqa::science-technology::1576',
  'opentriviaqa::science-technology::1577',
  'opentriviaqa::science-technology::1578',
  'opentriviaqa::science-technology::1580',
  'opentriviaqa::science-technology::1583',
  'opentriviaqa::science-technology::1681',
  'opentriviaqa::science-technology::1682',
  'opentriviaqa::science-technology::1684',
  'opentriviaqa::science-technology::1688',
  'opentriviaqa::science-technology::1726',
  'opentriviaqa::science-technology::1751',
  'opentriviaqa::science-technology::1752',
  'opentriviaqa::science-technology::1796',
  'opentriviaqa::science-technology::1804',
  'opentriviaqa::science-technology::1805',
  'opentriviaqa::science-technology::1812',
  'opentriviaqa::science-technology::1813',
  'opentriviaqa::science-technology::1846',
  'opentriviaqa::science-technology::1848',
  'opentriviaqa::science-technology::1849',
  'opentriviaqa::science-technology::1919',
  'opentriviaqa::science-technology::1922',
  'opentriviaqa::science-technology::2263',
  'opentriviaqa::science-technology::2264',
  'opentriviaqa::science-technology::2266',
  'opentriviaqa::science-technology::2291',
  'opentriviaqa::science-technology::2364',
  'opentriviaqa::science-technology::2365',
])

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bcelestial bodys\b/gi, "celestial body's")
    .replace(/\bit relation\b/gi, 'in relation')
    .replace(/\bgreek\b/g, 'Greek')
    .replace(/\bProxima Centuori\b/g, 'Proxima Centauri')
    .replace(/\bProxima Centuri\b/g, 'Proxima Centauri')
    .replace(/\bAldeberan\b/g, 'Aldebaran')
    .replace(/\bCastor Pollux\b/g, 'Castor and Pollux')
    .replace(/\bHara\b/g, 'Hera')
    .replace(/\bTombough\b/g, 'Tombaugh')
    .replace(/\bSaturns\b/g, "Saturn's")
    .replace(/\bSuns\b/g, "Sun's")
    .replace(/\bSolar system\b/g, 'Solar System')
    .replace(/\bthe sun\b/g, 'the Sun')
    .replace(/\baround the sun\b/g, 'around the Sun')
    .replace(/What is the size of Mars compared to the size of Earth\./g, 'What is the size of Mars compared to the size of Earth?')
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
      'This option does not match the astronomy clue in the prompt.',
      'Anchor the answer to Moon phases, planets, stars, spacecraft, or Solar System structure.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  if (/kepler|copernicus|heliocentrism|asteroid/.test(text)) return 'History and Concepts of Astronomy'
  if (/laika|gagarin|hubble|space telescope/.test(text)) return 'Telescopes and Spaceflight'
  if (/\bmoon\b|lunar/.test(text) && !/mars|jupiter|saturn|uranus|neptune|galilean/.test(text)) return 'The Moon'
  if (/sirius|pleiades|castor|pollux|polaris|constellation|star|betelgeuse|proxima/.test(text)) return 'Stars and Constellations'
  if (/mars|venus|jupiter|mercury|saturn|pluto|planet|solar system|orbit|sun|astronomical unit/.test(text)) return 'Solar System and Planetary Science'
  return 'Cosmology and Astronomy Foundations'
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_astronomy_extension_import.cjs.',
    '// Manual allowlist: stable astronomy rows only; excludes pop culture, astrology, stale records, and dated future plans.',
    '',
    "export const openTriviaAstronomyExtensionQuestions = makeQuestionBank('University', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    const chapter = chapterForItem(item)
    lines.push('  {')
    lines.push(`    id: ${361001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapter)},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(`${chapter} ${index + 1}`)},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt_text))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed Cosmology and Astronomy extension micro-batch.`)},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  return lines.join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const items = audit.acceptedCandidates.filter((item) => allowedSourceIds.has(item.source_id))
  if (items.length !== allowedSourceIds.size) {
    throw new Error(`Expected ${allowedSourceIds.size} allowlisted rows, found ${items.length}.`)
  }
  fs.writeFileSync(outputPath, buildOutput(items), 'utf8')
  console.log(`Wrote ${items.length} Cosmology and Astronomy extension questions.`)
}

main()
