const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-animals-science-technology-audit.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaEarthPhysicsMicroImported.ts')

const earthScienceSourceIds = [
  'opentriviaqa::science-technology::2',
  'opentriviaqa::science-technology::3',
  'opentriviaqa::science-technology::4',
  'opentriviaqa::science-technology::186',
  'opentriviaqa::science-technology::305',
  'opentriviaqa::science-technology::744',
  'opentriviaqa::science-technology::848',
  'opentriviaqa::science-technology::917',
  'opentriviaqa::science-technology::1060',
  'opentriviaqa::science-technology::1061',
  'opentriviaqa::science-technology::1076',
  'opentriviaqa::science-technology::1078',
  'opentriviaqa::science-technology::1527',
  'opentriviaqa::science-technology::1528',
  'opentriviaqa::science-technology::1531',
]

const physicsSourceIds = [
  'opentriviaqa::science-technology::373',
  'opentriviaqa::science-technology::593',
  'opentriviaqa::science-technology::663',
  'opentriviaqa::science-technology::666',
  'opentriviaqa::science-technology::713',
  'opentriviaqa::science-technology::716',
  'opentriviaqa::science-technology::1328',
  'opentriviaqa::science-technology::1910',
  'opentriviaqa::science-technology::1941',
  'opentriviaqa::science-technology::2475',
  'opentriviaqa::science-technology::2477',
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

function chapterForEarth(prompt) {
  if (/cloud|atmosphere|weather|cyclone|precipitation|nimbostratus/i.test(prompt)) return 'Atmosphere and Weather'
  if (/volcano|magma|earthquake|rock/i.test(prompt)) return 'Geology and Earth Systems'
  if (/water cycle|pollution|greenhouse|ozone/i.test(prompt)) return 'Environmental Systems'
  return 'Earth Science Foundations'
}

function chapterForPhysics(prompt) {
  if (/velocity|acceleration|free-fall|gravity|orbit/i.test(prompt)) return 'Motion and Gravity'
  if (/Ampere|Ohm|photon|magnetic/i.test(prompt)) return 'Electricity and Modern Physics'
  return 'Physics Foundations'
}

function earthFeedback(item, choice, index) {
  const context = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  const label = shortChoice(choice)
  if (/cloud|atmosphere|weather|cyclone|precipitation|nimbostratus/.test(context)) {
    const moves = [
      'sounds weather-related, but it does not match the cloud, atmosphere, or precipitation clue',
      'confuses one atmospheric layer, cloud type, or weather process with another',
      'answers a nearby sky idea rather than the specific weather process being tested',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Anchor the answer to the named cloud, atmospheric layer, or weather process.']
  }
  if (/volcano|magma|earthquake|rock|geology/.test(context)) {
    const moves = [
      'is Earth-science vocabulary, but not the geology process or material in the clue',
      'mixes up surface features with the rock, magma, or earthquake fact being tested',
      'answers a nearby geology idea rather than the exact Earth-system relationship',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Match the clue to the geology process, rock material, or Earth-system feature.']
  }
  return [
    `${label} is Earth-science adjacent, but it does not fit the environmental process or system named in the prompt.`,
    'Use the named process or system: atmosphere, weather, geology, pollution, or water cycle.',
  ]
}

function physicsFeedback(item, choice, index) {
  const context = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  const label = shortChoice(choice)
  if (/velocity|acceleration|free-fall|gravity|orbit|motion|force/.test(context)) {
    const moves = [
      'confuses the motion quantity with a different speed, force, or gravity idea',
      'uses physics vocabulary, but not the relationship between motion and force in the clue',
      'answers a nearby mechanics concept instead of the exact quantity being asked for',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Name the motion quantity first: speed, velocity, acceleration, force, gravity, or orbit.']
  }
  if (/ampere|ohm|photon|magnetic|electric|current/.test(context)) {
    const moves = [
      'belongs to electricity or modern physics, but not the unit, particle, or field clue here',
      'mixes up a physics unit with a different quantity',
      'sounds technical, but it does not match the electrical or quantum relationship in the prompt',
    ]
    return [`${label} ${moves[index % moves.length]}.`, 'Tie the answer to the named unit, particle, field, or electrical relationship.']
  }
  return [
    `${label} is physics-related, but it does not fit the definition or relationship named in the question.`,
    'Use the physics relationship or definition named in the question.',
  ]
}

function feedbackForItem(item, choice, target, index) {
  return target === 'earth' ? earthFeedback(item, choice, index) : physicsFeedback(item, choice, index)
}

function buildQuestion(item, id, target) {
  const prompt = normalizeText(item.prompt_text)
  const wrong = wrongChoices(item)
  if (wrong.length < 2) throw new Error(`Not enough wrong choices for ${item.source_id}`)
  const isEarth = target === 'earth'
  return [
    '  {',
    `    id: ${id},`,
    `    chapter: ${JSON.stringify(isEarth ? chapterForEarth(prompt) : chapterForPhysics(prompt))},`,
    `    title: ${JSON.stringify(prompt.length <= 58 ? prompt : `OpenTrivia ${isEarth ? 'Earth Science' : 'Physics'} ${id}`)},`,
    `    prompt: ${JSON.stringify(prompt)},`,
    `    correct: ${JSON.stringify(normalizeText(item.correct_answer))},`,
    `    wrong: ${JSON.stringify(wrong.map((choice, wrongIndex) => {
      const [flaw, reframe] = feedbackForItem(item, choice, target, wrongIndex)
      return [choice, flaw, reframe]
    }))},`,
    `    lesson: ${JSON.stringify(isEarth ? 'Use the clue to identify the exact Earth-system process: atmosphere, weather, geology, pollution, or the water cycle. Nearby Earth-science words can sound right while pointing to a different process.' : 'Use the clue to identify the exact physics relationship: motion, force, gravity, electricity, magnetism, or modern-physics vocabulary. Nearby technical words can sound right while pointing to a different quantity.')},`,
    "    source: 'OpenTriviaQA',",
    '  },',
  ].join('\n')
}

function main() {
  const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'))
  const bySourceId = new Map((audit.acceptedCandidates ?? []).map((item) => [item.source_id, item]))
  const earthRows = earthScienceSourceIds.map((sourceId) => bySourceId.get(sourceId))
  const physicsRows = physicsSourceIds.map((sourceId) => bySourceId.get(sourceId))
  if ([...earthRows, ...physicsRows].some((row) => !row)) {
    throw new Error('One or more reviewed Earth/Physics source ids were not found.')
  }

  let nextId = 342001
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_earth_physics_micro_import.cjs from the reviewed science audit.',
    '// Small stable Earth systems and AP Physics micro-batch only.',
    '',
    "export const openTriviaEarthSystemsQuestions = makeQuestionBank('University', [",
    ...earthRows.map((item) => buildQuestion(item, nextId++, 'earth')),
    '])',
    '',
    "export const openTriviaPhysicsQuestions = makeQuestionBank('AP', [",
    ...physicsRows.map((item) => buildQuestion(item, nextId++, 'physics')),
    '])',
    '',
  ]

  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8')
  console.log(`Wrote ${earthRows.length} Earth systems and ${physicsRows.length} physics OpenTriviaQA questions.`)
}

main()
