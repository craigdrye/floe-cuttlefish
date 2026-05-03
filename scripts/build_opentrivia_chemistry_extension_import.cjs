const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-animals-science-technology-audit.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaChemistryExtensionImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::science-technology::739',
  'opentriviaqa::science-technology::748',
  'opentriviaqa::science-technology::804',
  'opentriviaqa::science-technology::809',
  'opentriviaqa::science-technology::1131',
  'opentriviaqa::science-technology::1133',
  'opentriviaqa::science-technology::1343',
  'opentriviaqa::science-technology::1392',
  'opentriviaqa::science-technology::1395',
  'opentriviaqa::science-technology::1482',
  'opentriviaqa::science-technology::1564',
  'opentriviaqa::science-technology::1759',
  'opentriviaqa::science-technology::1789',
  'opentriviaqa::science-technology::1794',
  'opentriviaqa::science-technology::1861',
  'opentriviaqa::science-technology::1865',
  'opentriviaqa::science-technology::1866',
  'opentriviaqa::science-technology::1867',
  'opentriviaqa::science-technology::1868',
  'opentriviaqa::science-technology::1870',
  'opentriviaqa::science-technology::1936',
  'opentriviaqa::science-technology::1937',
  'opentriviaqa::science-technology::1942',
  'opentriviaqa::science-technology::1944',
  'opentriviaqa::science-technology::1945',
  'opentriviaqa::science-technology::1949',
])

const titleOverrides = {
  'opentriviaqa::science-technology::739': 'Water Polarity',
  'opentriviaqa::science-technology::748': 'Dihydrogen Monoxide',
  'opentriviaqa::science-technology::804': 'Stellar Fusion Endpoint',
  'opentriviaqa::science-technology::809': 'Acid Rain pH',
  'opentriviaqa::science-technology::1131': 'Group 11 Metals',
  'opentriviaqa::science-technology::1133': 'Inner Transition Metals',
  'opentriviaqa::science-technology::1343': 'Amino Acid Structure',
  'opentriviaqa::science-technology::1392': 'Solar Composition',
  'opentriviaqa::science-technology::1395': 'Nuclear Fusion',
  'opentriviaqa::science-technology::1482': 'Water Bond Angle',
  'opentriviaqa::science-technology::1564': 'Nuclear Fission Discovery',
  'opentriviaqa::science-technology::1759': 'Calcium Carbonate',
  'opentriviaqa::science-technology::1789': 'Actinium Atomic Number',
  'opentriviaqa::science-technology::1794': 'Radon Atomic Number',
  'opentriviaqa::science-technology::1861': 'Hydrogen-1 Structure',
  'opentriviaqa::science-technology::1865': 'Atomos',
  'opentriviaqa::science-technology::1866': 'Atomic Mass Location',
  'opentriviaqa::science-technology::1867': 'Mass Spectrometry',
  'opentriviaqa::science-technology::1868': 'Hydrogen Ion Structure',
  'opentriviaqa::science-technology::1870': 'Atomic Number',
  'opentriviaqa::science-technology::1936': 'Electron Excited State',
  'opentriviaqa::science-technology::1937': 'Electron Shells',
  'opentriviaqa::science-technology::1942': 'Laser Cooling',
  'opentriviaqa::science-technology::1944': 'Hydrogen Ion as Proton',
  'opentriviaqa::science-technology::1945': 'Composite Subatomic Particles',
  'opentriviaqa::science-technology::1949': 'Strong Nuclear Interaction',
}

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/\bWaters\b/g, "Water's")
    .replace(/\bSuns\b/g, "Sun's")
    .replace(/\bvalance\b/gi, 'valence')
    .replace(/\bcalicium\b/gi, 'calcium')
    .replace(/\bsulphate\b/gi, 'sulfate')
    .replace(/0,01 %/g, '0.01%')
    .replace(/\bcarbon dioxide gas\b/gi, 'carbon dioxide')
    .replace(/\ba Vitamin\b/g, 'a vitamin')
    .replace(/\bWhich is a Vitamin\b/g, 'Which is a vitamin')
    .replace(/which is though less than/g, 'but less than')
    .replace(/How are the orbits in which the electrons of the atom reside called\?/g, 'What are the orbits in which the electrons of an atom reside called?')
    .replace(/For the purposes of their experiments how do/g, 'For the purposes of their experiments, how do')
    .replace(/binds together protons and neutrons together/g, 'binds protons and neutrons together')
    .replace(/atoms mass/g, "atom's mass")
    .replace(/atoms nucleus/g, "atom's nucleus")
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
      'This option does not match the chemistry clue in the prompt.',
      'Use the bonding, atomic-structure, nuclear-chemistry, or materials concept directly.',
    ])
}

function chapterForItem(item) {
  const text = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  if (/water|acid rain|dihydrogen|bond angle|polar/.test(text)) return 'Water Chemistry and Bonding'
  if (/periodic|atomic number|actinium|radon|group 11|lanthanoid|actinoid/.test(text)) {
    return 'Periodic Table and Atomic Structure'
  }
  if (/nucleus|electron|proton|neutron|fission|fusion|stellar|mass spectrometer|atomos|hydrogen-1|laser cooling|sun/.test(text)) {
    return 'Atomic and Nuclear Chemistry'
  }
  if (/amino acid|calcium carbonate|vitamin|photosynthesis|carbon dioxide/.test(text)) return 'Biochemistry and Materials'
  return 'AP Chemistry Foundations'
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    '',
    '// Generated by scripts/build_opentrivia_chemistry_extension_import.cjs.',
    '// Manual allowlist: AP Chemistry concept rows only; no bulk category import.',
    '',
    "export const openTriviaChemistryExtensionQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    const correct = normalizeText(item.correct_answer)
    if (/^(all|none) of these$/i.test(correct)) throw new Error(`Bad correct answer for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${359001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleOverrides[item.source_id] || `Chemistry Extension ${index + 1}`)},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt_text))},`)
    lines.push(`    correct: ${JSON.stringify(correct)},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(`Source: OpenTriviaQA (${item.source_id}). Included in the reviewed AP Chemistry extension micro-batch.`)},`)
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
  console.log(`Wrote ${items.length} AP Chemistry extension questions.`)
}

main()
