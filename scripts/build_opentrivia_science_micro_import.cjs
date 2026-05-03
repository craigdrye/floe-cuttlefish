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
    `    wrong: ${JSON.stringify(wrong.map((choice) => [choice, isChemistry ? 'This does not match the chemical symbol, formula, atomic structure, or acid-base relationship in the prompt.' : 'This does not match the planet, orbit, star, galaxy, or Solar System clue in the prompt.', isChemistry ? 'Use the periodic-table fact, formula, or reaction relationship directly.' : 'Anchor on the astronomical definition or Solar System relationship being described.']))},`,
    `    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed science micro-batch for ${isChemistry ? 'AP Chemistry' : 'Cosmology and Astronomy'}.`)},`,
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
