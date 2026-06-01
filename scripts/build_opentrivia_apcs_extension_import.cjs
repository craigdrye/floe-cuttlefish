const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const auditPath = path.join(repoRoot, 'reports/opentriviaqa-animals-science-technology-audit.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openTriviaApcsExtensionImported.ts')

const allowedSourceIds = new Set([
  'opentriviaqa::science-technology::380',
  'opentriviaqa::science-technology::1001',
  'opentriviaqa::science-technology::1054',
  'opentriviaqa::science-technology::1057',
  'opentriviaqa::science-technology::1296',
  'opentriviaqa::science-technology::1369',
  'opentriviaqa::science-technology::2160',
  'opentriviaqa::science-technology::2167',
  'opentriviaqa::science-technology::2342',
])

const titleOverrides = {
  'opentriviaqa::science-technology::380': 'Web Cookies',
  'opentriviaqa::science-technology::1001': 'Output Devices',
  'opentriviaqa::science-technology::1054': 'Logic Programming',
  'opentriviaqa::science-technology::1057': 'The C Programming Language',
  'opentriviaqa::science-technology::1296': 'Terabits',
  'opentriviaqa::science-technology::1369': 'Fortran',
  'opentriviaqa::science-technology::2160': 'Ada',
  'opentriviaqa::science-technology::2167': 'C',
  'opentriviaqa::science-technology::2342': 'Linear Programming',
}

function normalizeText(value, sourceId) {
  let text = String(value ?? '')
    .replace(/\s+/g, ' ')
    .replace(/a web pages program/g, "a web page's program")
    .replace(/girls name/g, "girl's name")
    .replace(/also a the name/g, 'also the name')
    .trim()
  if (sourceId === 'opentriviaqa::science-technology::1057' && text === 'DMR') return 'Dennis Ritchie'
  if (sourceId === 'opentriviaqa::science-technology::1057') {
    text = text.replace('by BWK and what other computer scientist?', 'by Brian Kernighan and what other computer scientist?')
  }
  if (sourceId === 'opentriviaqa::science-technology::1001') {
    text = text.replace(
      'Which of these is an output device that produces audible sound?',
      'Which output device produces audible sound rather than printed pages or visual display?'
    )
    if (text === 'Printer') return 'A printer for paper output'
    if (text === 'Monitor') return 'A monitor for visual output'
    if (text === 'Microphone') return 'A microphone for audio input'
  }
  if (sourceId === 'opentriviaqa::science-technology::1296') {
    text = text.replace('Many computer drives have a capacity of a terabit. How many bits are in one terabit?', 'How many bits are in one terabit?')
  }
  if (sourceId === 'opentriviaqa::science-technology::2160') {
    text = text.replace("Which girl's name is also the name of a computer programming language?", 'Which name is also the name of a computer programming language?')
  }
  return text
}

function wrongChoices(item) {
  const correct = normalizeText(item.correct_answer, item.source_id).toLowerCase()
  const seen = new Set([correct])
  const chapter = chapterForItem(item)
  const correctAnswer = normalizeText(item.correct_answer, item.source_id)
  return item.answer_choices
    .map((choice) => normalizeText(choice, item.source_id))
    .filter(Boolean)
    .filter((choice) => {
      const key = choice.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .map((choice) => {
      if (chapter === 'Computer Systems and the Web') {
        return [
          choice,
          `${choice} is a computing-related answer, but the prompt is asking for ${correctAnswer}: ${systemConcept(item, correctAnswer)}.`,
          'Ask whether the clue is about input, output, stored web state, or how a device/program is used.',
        ]
      }
      if (chapter === 'Programming Languages') {
        return [
          choice,
          `${choice} is near the programming-language world, but this clue points to ${correctAnswer}, not that language or name.`,
          'Use the historical clue, language feature, or exact naming clue before choosing.',
        ]
      }
      if (chapter === 'Data Representation') {
        return [
          choice,
          `${choice} misses the scale: tera means a trillion in this AP CS-style unit clue.`,
          'For bits and storage prefixes, check the magnitude before picking a familiar smaller number.',
        ]
      }
      if (chapter === 'Algorithms and Optimization') {
        return [
          choice,
          `${choice} is a famous thinker, but not the optimization figure tied to linear programming here.`,
          'Match the person to the algorithm or method named in the prompt, not just to mathematics generally.',
        ]
      }
      return [
        choice,
        `${choice} is a nearby computing answer, but the clue is specifically asking for ${correctAnswer}.`,
        'Identify whether the question is about web state, devices, programming languages, units, or algorithms.',
      ]
    })
}

function systemConcept(item, answer) {
  const context = `${item.prompt_text} ${answer}`.toLowerCase()
  if (/cookie/i.test(context)) return 'a small bit of client-side state saved by a web page'
  if (/speaker/i.test(answer)) return 'an output device that turns digital audio into sound'
  return 'the specific computing concept described by the clue'
}

function chapterForItem(item) {
  const text = `${item.prompt_text} ${item.correct_answer}`.toLowerCase()
  if (/cookie|output device|speaker/.test(text)) return 'Computer Systems and the Web'
  if (/programming language|prolog|fortran|ada|language| c programming/.test(text)) return 'Programming Languages'
  if (/terabit|bits/.test(text)) return 'Data Representation'
  if (/linear programming|inequalities|dantzig/.test(text)) return 'Algorithms and Optimization'
  return 'AP Computer Science Foundations'
}

function lessonForItem(item) {
  const chapter = chapterForItem(item)
  if (chapter === 'Computer Systems and the Web') {
    return 'Computer-system questions usually ask what role a tool plays: input, output, storage, or web state. A cookie is saved by a site on the client side; a speaker is output because it produces sound.'
  }
  if (chapter === 'Programming Languages') {
    return 'Programming-language history questions hinge on the exact clue: a language paradigm, the people behind a language, or a name shared with a language. Nearby languages can be plausible without matching that clue.'
  }
  if (chapter === 'Data Representation') {
    return 'Data-size questions are place-value questions in computer clothing. A terabit is one trillion bits, so do the prefix scale first before worrying about bytes or devices.'
  }
  if (chapter === 'Algorithms and Optimization') {
    return 'Linear programming is an optimization method for systems of linear constraints. The historical clue points to George Dantzig, whose simplex method made the field practical.'
  }
  return 'Use the computing clue to decide whether the question is about a device role, web state, programming-language history, data representation, or optimization.'
}

function buildOutput(items) {
  const lines = [
    "import { makeQuestionBank } from './base'",
    "import { polish as runPolish } from './polishPipeline'",
    "import {",
    "  OPEN_TRIVIA_WAVE20_SUB_TOPICS,",
    "  OPEN_TRIVIA_WAVE20_MENTOR_HINTS,",
    "  OPEN_TRIVIA_WAVE20_CORRECT_SHORTENED,",
    "} from './openTriviaWave20Polish'",
    '',
    '// Generated by scripts/build_opentrivia_apcs_extension_import.cjs.',
    '// Manual allowlist: durable AP Computer Science concept/history rows only.',
    '',
    "const _baseOpenTriviaApcsExtensionQuestions = makeQuestionBank('AP', [",
  ]

  items.forEach((item, index) => {
    const wrong = wrongChoices(item)
    if (wrong.length < 2) throw new Error(`Too few wrong choices for ${item.source_id}`)
    lines.push('  {')
    lines.push(`    id: ${360001 + index},`)
    lines.push(`    chapter: ${JSON.stringify(chapterForItem(item))},`)
    lines.push("    source: 'OpenTriviaQA',")
    lines.push(`    title: ${JSON.stringify(titleOverrides[item.source_id] || `AP CS Extension ${index + 1}`)},`)
    lines.push(`    prompt: ${JSON.stringify(normalizeText(item.prompt_text, item.source_id))},`)
    lines.push(`    correct: ${JSON.stringify(normalizeText(item.correct_answer, item.source_id))},`)
    lines.push(`    wrong: ${JSON.stringify(wrong)},`)
    lines.push(`    lesson: ${JSON.stringify(lessonForItem(item))},`)
    lines.push('  },')
  })

  lines.push('])')
  lines.push('')
  lines.push('export const openTriviaApcsExtensionQuestions = runPolish(_baseOpenTriviaApcsExtensionQuestions, [')
  lines.push('  {')
  lines.push('    subTopics: OPEN_TRIVIA_WAVE20_SUB_TOPICS,')
  lines.push('    mentorHints: OPEN_TRIVIA_WAVE20_MENTOR_HINTS,')
  lines.push('    correctShortened: OPEN_TRIVIA_WAVE20_CORRECT_SHORTENED,')
  lines.push("    source: 'openTriviaWave20',")
  lines.push('  },')
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
  console.log(`Wrote ${items.length} AP Computer Science extension questions.`)
}

main()
