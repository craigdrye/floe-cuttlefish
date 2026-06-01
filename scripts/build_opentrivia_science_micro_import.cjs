const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const rawPath = path.join(repoRoot, 'data/raw_collections/opentriviaqa/opentriviaqa_questions.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaScienceMicroImported.ts')

const chemistrySourceIds = [
  'opentriviaqa::science-technology::626',
  'opentriviaqa::science-technology::767',
  'opentriviaqa::science-technology::768',
  'opentriviaqa::science-technology::769',
  'opentriviaqa::science-technology::770',
  'opentriviaqa::science-technology::772',
  'opentriviaqa::science-technology::773',
  'opentriviaqa::science-technology::774',
  'opentriviaqa::science-technology::775',
  'opentriviaqa::science-technology::882',
  'opentriviaqa::science-technology::1024',
  'opentriviaqa::science-technology::1132',
  'opentriviaqa::science-technology::1266',
  'opentriviaqa::science-technology::1307',
  'opentriviaqa::science-technology::1308',
  'opentriviaqa::science-technology::1310',
  'opentriviaqa::science-technology::1311',
  'opentriviaqa::science-technology::1313',
  'opentriviaqa::science-technology::1315',
  'opentriviaqa::science-technology::1788',
  'opentriviaqa::science-technology::1792',
  'opentriviaqa::science-technology::1863',
  'opentriviaqa::science-technology::1864',
  'opentriviaqa::science-technology::1932',
  'opentriviaqa::science-technology::1933',
]

const astronomySourceIds = [
  'opentriviaqa::science-technology::26',
  'opentriviaqa::science-technology::27',
  'opentriviaqa::science-technology::28',
  'opentriviaqa::science-technology::30',
  'opentriviaqa::science-technology::31',
  'opentriviaqa::science-technology::32',
  'opentriviaqa::science-technology::35',
  'opentriviaqa::science-technology::358',
  'opentriviaqa::science-technology::359',
  'opentriviaqa::science-technology::363',
  'opentriviaqa::science-technology::364',
  'opentriviaqa::science-technology::402',
  'opentriviaqa::science-technology::404',
  'opentriviaqa::science-technology::405',
  'opentriviaqa::science-technology::407',
  'opentriviaqa::science-technology::408',
  'opentriviaqa::science-technology::409',
  'opentriviaqa::science-technology::410',
  'opentriviaqa::science-technology::412',
  'opentriviaqa::science-technology::413',
  'opentriviaqa::science-technology::487',
  'opentriviaqa::science-technology::802',
  'opentriviaqa::science-technology::850',
  'opentriviaqa::science-technology::851',
  'opentriviaqa::science-technology::855',
  'opentriviaqa::science-technology::929',
  'opentriviaqa::science-technology::931',
  'opentriviaqa::science-technology::933',
  'opentriviaqa::science-technology::1019',
  'opentriviaqa::science-technology::1021',
  'opentriviaqa::science-technology::1098',
  'opentriviaqa::science-technology::1261',
  'opentriviaqa::science-technology::1268',
  'opentriviaqa::science-technology::1317',
  'opentriviaqa::science-technology::1442',
]

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function wrongChoices(item) {
  const correct = normalizeText(item.correct_answer).toLowerCase()
  const seen = new Set([correct])
  return (item.answer_choices ?? [])
    .map(normalizeText)
    .filter(Boolean)
    .filter((choice) => {
      const key = choice.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
}

function shortChoice(choice) {
  const text = normalizeText(choice)
  return text.length > 64 ? `${text.slice(0, 61)}...` : text
}

function stableIndex(seed, length) {
  let hash = 0
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return hash % length
}

function variant(seed, options) {
  return options[stableIndex(seed, options.length)]
}

function promptClue(item) {
  const text = normalizeText(item.prompt_text)
  const cleaned = text
    .replace(/^what is the name of /i, '')
    .replace(/^what is /i, '')
    .replace(/^which /i, 'which ')
    .replace(/[?.!]+$/g, '')
  return cleaned.length > 74 ? `${cleaned.slice(0, 71)}...` : cleaned
}

function chapterForChemistry(prompt) {
  if (/symbol|periodic table|atomic number|noble gases|valence|protons|neutrons/i.test(prompt)) return 'Atoms and the Periodic Table'
  if (/acid|base|pH|indicator|NaOH|HCl/i.test(prompt)) return 'Acids and Bases'
  return 'Chemical Formulas and Compounds'
}

function chapterForAstronomy(prompt) {
  if (/planet|solar system|moon|satellite|orbit|perihelion/i.test(prompt)) return 'Solar System'
  if (/star|binary|nebula|galaxy|brown dwarf|ecliptic|zodiac/i.test(prompt)) return 'Stars and Galaxies'
  return 'Astronomy Foundations'
}

function chemistryFeedback(item, choice, index) {
  const context = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  const label = shortChoice(choice)
  const clue = promptClue(item)
  const seed = `${item.source_id}|${choice}|${index}`
  if (/symbol|periodic table|atomic number|noble gases|valence|protons|neutrons|element/.test(context)) {
    const flaw = variant(seed, [
      `${label} is the wrong periodic-table identifier for this clue about ${clue}.`,
      `${label} may look element-like, but it is not the symbol, number, or particle count asked for here.`,
      `${label} drifts to a nearby chemistry fact instead of the exact periodic-table fact in the prompt.`,
      `${label} treats the clue as a general element question, but the prompt needs the specific identifier for ${shortChoice(item.correct_answer)}.`,
    ])
    return [flaw, 'Use the element symbol, atomic number, group, or particle count named in the prompt.']
  }
  if (/acid|base|ph|indicator|naoh|hcl|litmus/.test(context)) {
    const flaw = variant(seed, [
      `${label} reverses or blurs the acid-base relationship in this reaction clue.`,
      `${label} sounds chemical, but it does not fit the pH, reagent, or indicator behavior being tested.`,
      `${label} mixes up the products or roles in an acid-base situation.`,
      `${label} points to a different kind of reaction than the one described by ${clue}.`,
    ])
    return [flaw, 'Anchor the choice to pH, acid/base behavior, or the named reagent.']
  }
  return [
    variant(seed, [
      `${label} is chemistry-related, but it does not match the formula, compound, element, or reaction clue here.`,
      `${label} is a plausible chemistry word, but the prompt is asking for the specific answer tied to ${clue}.`,
      `${label} belongs near the same subject area, but it answers a different chemistry question.`,
    ]),
    'Use the periodic-table fact, formula, or reaction relationship directly.',
  ]
}

function astronomyFeedback(item, choice, index) {
  const context = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  const label = shortChoice(choice)
  const clue = promptClue(item)
  const seed = `${item.source_id}|${choice}|${index}`
  if (/planet|solar system|moon|satellite|orbit|perihelion|sun/.test(context)) {
    const flaw = variant(seed, [
      `${label} is a Solar System answer, but this clue points to ${shortChoice(item.correct_answer)} instead.`,
      `${label} confuses the planet, moon, orbit, or scale in this clue about ${clue}.`,
      `${label} is plausible space vocabulary, but it misses the exact object described by ${clue}.`,
      `${label} matches the neighborhood, not the specific Solar System relationship that points to ${shortChoice(item.correct_answer)}.`,
      `${label} would fit a different planet clue; this one hinges on the detail in the prompt.`,
    ])
    return [flaw, 'Match the clue to the exact planet, moon, orbit, or Solar System relationship.']
  }
  if (/star|binary|nebula|galaxy|brown dwarf|ecliptic|zodiac/.test(context)) {
    const flaw = variant(seed, [
      `${label} matches the broad sky category, but not the star, galaxy, or celestial structure in this clue.`,
      `${label} confuses one kind of astronomical object with another.`,
      `${label} sounds astronomical, but it is not at the scale the question is asking about.`,
      `${label} answers a nearby space question rather than the one cued by ${clue}.`,
    ])
    return [flaw, 'Check whether the clue points to a star, galaxy, nebula, orbit path, or constellation.']
  }
  return [
    variant(seed, [
      `${label} is space-related, but it does not fit the specific astronomy definition in the prompt.`,
      `${label} is a nearby astronomy term, but the clue is asking for ${shortChoice(item.correct_answer)}.`,
      `${label} belongs in the sky, but not in the relationship described by ${clue}.`,
    ]),
    'Anchor on the astronomical definition or Solar System relationship being described.',
  ]
}

function feedbackForItem(item, choice, track, index) {
  return track === 'apChemistry'
    ? chemistryFeedback(item, choice, index)
    : astronomyFeedback(item, choice, index)
}

function buildQuestion(item, id, track) {
  const prompt = normalizeText(item.prompt_text)
  const isChemistry = track === 'apChemistry'
  const wrong = wrongChoices(item)
  if (wrong.length < 2) throw new Error(`Not enough wrong choices for ${item.source_id}`)
  return [
    '  {',
    `    id: ${id},`,
    `    chapter: ${JSON.stringify(isChemistry ? chapterForChemistry(prompt) : chapterForAstronomy(prompt))},`,
    `    title: ${JSON.stringify(prompt.length <= 58 ? prompt : `OpenTrivia ${isChemistry ? 'Chemistry' : 'Astronomy'} ${id}`)},`,
    `    prompt: ${JSON.stringify(prompt)},`,
    `    correct: ${JSON.stringify(normalizeText(item.correct_answer))},`,
    `    wrong: ${JSON.stringify(wrong.map((choice, wrongIndex) => {
      const [flaw, reframe] = feedbackForItem(item, choice, track, wrongIndex)
      return [choice, flaw, reframe]
    }))},`,
    `    lesson: ${JSON.stringify(isChemistry ? 'Use the chemistry clue to decide whether the question is about a symbol, formula, element property, or acid-base relationship. Nearby chemistry words can be tempting without matching the exact fact.' : 'Use the astronomy clue to decide whether the question is about a planet, orbit, star, galaxy, or Solar System relationship. Nearby space words can be tempting without matching the exact fact.')},`,
    "    source: 'OpenTriviaQA',",
    '  },',
  ].join('\n')
}

function main() {
  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8')).items ?? []
  const rawBySourceId = new Map(raw.map((item) => [item.source_id, item]))
  const chemistry = chemistrySourceIds.map((id) => rawBySourceId.get(id))
  const astronomy = astronomySourceIds.map((id) => rawBySourceId.get(id))
  const missing = [...chemistry, ...astronomy].filter(Boolean).length !== chemistrySourceIds.length + astronomySourceIds.length
  if (missing) throw new Error('One or more reviewed OpenTriviaQA science source ids were not found.')

  let nextId = 338001
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_science_micro_import.cjs from data/raw_collections/opentriviaqa.',
    '// Small reviewed micro-batch: stable chemistry symbols/formulas and astronomy definitions only.',
    '',
    "export const openTriviaChemistryQuestions = makeQuestionBank('AP', [",
    ...chemistry.map((item) => buildQuestion(item, nextId++, 'apChemistry')),
    '])',
    '',
    "export const openTriviaAstronomyQuestions = makeQuestionBank('University', [",
    ...astronomy.map((item) => buildQuestion(item, nextId++, 'cosmologyAndAstronomy')),
    '])',
    '',
  ]

  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8')
  console.log(`Wrote ${chemistry.length} chemistry and ${astronomy.length} astronomy OpenTriviaQA science questions.`)
}

main()
