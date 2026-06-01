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
    .map((choice, index) => {
      const [flaw, reframe] = astronomyFeedback(item, choice, index)
      return [choice, flaw, reframe]
    })
}

function shortChoice(choice) {
  const text = normalizeText(choice)
  return text.length > 64 ? `${text.slice(0, 61)}...` : text
}

function astronomyFeedback(item, choice, index) {
  const context = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  const label = shortChoice(choice)

  if (/\bmoon\b|lunar|phase|tide/.test(context)) {
    const moves = [
      'mixes up Moon-phase timing with a different cycle or viewing pattern',
      'uses a nearby lunar fact but not the motion or surface clue being tested',
      'answers as if the Moon were changing randomly rather than following a repeatable orbit pattern',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Anchor lunar questions to orbit, phase, surface, or tide clues.']
  }
  if (/star|constellation|sirius|pleiades|castor|pollux|polaris|betelgeuse|proxima|aldebaran/.test(context)) {
    const moves = [
      'names a real sky object, but not the star or constellation clue in the prompt',
      'confuses a famous star, constellation, or nearby object with the one being described',
      'matches the general night-sky category but misses the specific identifier',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Check whether the clue is asking for a star, constellation, distance, or nickname.']
  }
  if (/spacecraft|telescope|gagarin|laika|hubble|probe|apollo|mission|astronaut/.test(context)) {
    const moves = [
      'belongs to spaceflight history, but not the mission, person, or instrument in the clue',
      'confuses a spacecraft/astronaut fact with a different milestone',
      'sounds space-related but does not match the event named in the prompt',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Pin the answer to the named mission, person, telescope, or milestone.']
  }
  if (/mars|venus|jupiter|mercury|saturn|uranus|neptune|pluto|planet|solar system|orbit|sun|astronomical unit/.test(context)) {
    const moves = [
      'is a Solar System fact, but about the wrong planet, orbit, or scale',
      'confuses a planet feature with a neighboring planet or another body',
      'uses a plausible-sounding Solar System number or name but not the one asked for',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Match the clue to the exact planet, orbit, distance, or Solar System structure.']
  }
  if (/kepler|copernicus|heliocentrism|asteroid|astronomy/.test(context)) {
    const moves = [
      'points at a real astronomy idea but not the historical concept in the clue',
      'mixes up discovery history with a different astronomer or model',
      'answers the broad topic while missing the named astronomy principle',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Separate the historical model, discovery, and named astronomer before choosing.']
  }

  return [
    `${label} is astronomy-adjacent, but it does not fit the specific object, motion, scale, or discovery in the prompt.`,
    'Anchor the answer to Moon phases, planets, stars, spacecraft, or Solar System structure.',
  ]
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
    lines.push(`    lesson: ${JSON.stringify(`Use the clue to identify the exact astronomy object, scale, motion, mission, or discovery being tested. Nearby space words can sound right while pointing to a different part of the sky.`)},`)
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
