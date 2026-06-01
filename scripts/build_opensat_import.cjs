const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const inputPath = path.join(repoRoot, 'data/raw_collections/opensat/opensat_questions.json')
const outputPath = path.join(repoRoot, 'src/data/questionCatalog/openSatImported.ts')

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function usableParagraph(value) {
  const text = normalizeText(value)
  if (!text || text.toLowerCase() === 'null') return ''
  return text
}

function promptForItem(item) {
  const prompt = normalizeText(item.prompt_text)
  const paragraph = usableParagraph(item.paragraph_text)
  if (!paragraph) return prompt
  if (paragraph.toLowerCase().includes(prompt.toLowerCase())) return paragraph
  return `${paragraph}\n\n${prompt}`
}

function chapterForItem(item) {
  const domain = normalizeText(item.domain) || 'OpenSAT'
  const difficulty = normalizeText(item.difficulty)
  return difficulty ? `${domain} - ${difficulty}` : domain
}

function titleForItem(item, index) {
  const domain = normalizeText(item.domain) || 'OpenSAT'
  return `${domain} ${index + 1}`
}

function jsString(value) {
  return JSON.stringify(value)
}

function answerEntries(item) {
  return Object.entries(item.answer_choices ?? {}).sort(([left], [right]) => left.localeCompare(right))
}

function correctChoiceText(item) {
  return normalizeText(item.answer_choices?.[item.correct_answer])
}

function shortLabel(value) {
  const text = normalizeText(value)
  return text.length > 80 ? `${text.slice(0, 77)}...` : text
}

function numericValue(value) {
  const text = normalizeText(value)
    .replace(/[$,%]/g, '')
    .replace(/\\pi/g, '')
    .replace(/π/g, '')
  const fraction = text.match(/^[-+]?\\?frac\{?(-?\d+(?:\.\d+)?)\}?\{?(-?\d+(?:\.\d+)?)\}?$/)
  if (fraction && Number(fraction[2]) !== 0) return Number(fraction[1]) / Number(fraction[2])
  const simpleFraction = text.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/)
  if (simpleFraction && Number(simpleFraction[2]) !== 0) return Number(simpleFraction[1]) / Number(simpleFraction[2])
  const number = text.match(/^-?\d+(?:\.\d+)?$/)
  return number ? Number(number[0]) : null
}

function mathFeedback(item, label, index) {
  const context = `${item.domain} ${item.prompt_text} ${item.paragraph_text}`.toLowerCase()
  const correct = correctChoiceText(item)
  const wrongValue = numericValue(label)
  const correctValue = numericValue(correct)
  const display = shortLabel(label)
  const correctDisplay = shortLabel(correct)

  if (wrongValue !== null && correctValue !== null && wrongValue !== correctValue) {
    if (Math.sign(wrongValue) !== Math.sign(correctValue) && correctValue !== 0) {
      return [
        `The value ${display} has the wrong sign compared with ${correctDisplay}, usually from reversing a subtraction, slope direction, or equation move.`,
        'Track signs separately before simplifying the final value.',
      ]
    }
    if (Math.abs(wrongValue) < Math.abs(correctValue)) {
      return [
        `The value ${display} is too small, which usually means one factor, interval, side length, or repeated step was left out.`,
        'Check whether the answer needs the full quantity, not only one part of it.',
      ]
    }
    if (Math.abs(wrongValue) > Math.abs(correctValue)) {
      return [
        `The value ${display} is too large, which usually means a rate, area, exponent, or total was applied one time too many.`,
        'Sanity-check the size of the answer against the setup before choosing it.',
      ]
    }
  }

  if (/slope|line|coordinate|xy-plane/.test(context)) {
    return [
      `The choice ${display} comes from a line-graph slip, such as swapping rise and run or using one coordinate difference incorrectly.`,
      'For slope, write change in y over change in x before simplifying.',
    ]
  }
  if (/circle|radius|diameter|inscribed|area|triangle|rectangle|angle|volume|perimeter|hypotenuse/.test(context)) {
    return [
      `The choice ${display} uses a nearby geometry fact but does not match the exact length, area, angle, or ratio being requested.`,
      'Name the figure relationship first, then check the units of the final answer.',
    ]
  }
  if (/quadratic|root|x-axis|intersect|factor|parabola/.test(context)) {
    return [
      `The choice ${display} reflects a quadratic trap, such as using one root, the wrong sign from factoring, or the wrong coefficient relationship.`,
      'Decide whether the question asks for roots, vertex, intercepts, or a coefficient pattern.',
    ]
  }
  if (/function|f\(|substitut|expression|equation|solve/.test(context)) {
    return [
      `The choice ${display} is a substitution or algebra-manipulation trap; it starts from the right expression but loses a term, exponent, sign, or restriction.`,
      'Substitute in small steps and keep the target quantity visible.',
    ]
  }
  if (/percent|ratio|proportion|rate|average|mean|median|survey|probability|data|table|graph/.test(context)) {
    return [
      `The choice ${display} uses a number from the setup, but it answers a different denominator, comparison group, statistic, or percent-change question.`,
      'Circle the base group and requested statistic before calculating.',
    ]
  }

  const fallbackMoves = [
    'stopping one step before the requested quantity',
    'using a nearby number instead of the governing relationship',
    'answering a related question rather than this exact one',
  ]
  return [
    `The choice ${display} is tempting, but it likely comes from ${fallbackMoves[index % fallbackMoves.length]}.`,
    'Match the answer to the exact quantity requested and test it against the setup.',
  ]
}

function readingWritingFeedback(item, label, index) {
  const domain = normalizeText(item.domain).toLowerCase()
  const display = shortLabel(label)

  if (domain.includes('standard english')) {
    const moves = [
      'keeps the sentence grammatical in one spot while creating a punctuation or agreement problem elsewhere',
      'sounds polished but does not fit the sentence boundary, modifier, or verb pattern required here',
      'changes the sentence rhythm without solving the actual convention being tested',
    ]
    return [
      `The choice ${display} ${moves[index % moves.length]}.`,
      'Read the whole sentence after inserting the option; grammar traps often break just outside the edited phrase.',
    ]
  }
  if (domain.includes('expression of ideas')) {
    const moves = [
      'may be clear on its own, but it does not create the transition, emphasis, or organization the paragraph needs',
      'adds a reasonable-sounding idea while missing the writer\'s purpose at this point in the passage',
      'focuses on wording polish instead of the sentence\'s job in the paragraph',
    ]
    return [
      `The choice ${display} ${moves[index % moves.length]}.`,
      'Ask what job the sentence must do for the paragraph before judging style.',
    ]
  }
  if (domain.includes('craft') || domain.includes('structure')) {
    const moves = [
      'overstates the author\'s purpose beyond what the quoted wording can support',
      'captures a related tone or topic but misses the specific rhetorical function being tested',
      'treats a detail as the main structural move of the passage',
    ]
    return [
      `The choice ${display} ${moves[index % moves.length]}.`,
      'Tie the answer to the author\'s exact word choice, structure, or stated purpose.',
    ]
  }

  const moves = [
    'sounds plausible but is broader than the evidence in the passage allows',
    'uses a real detail from the text while drawing the wrong inference from it',
    'answers a nearby idea instead of the specific claim or evidence relationship asked about',
  ]
  return [
    `The choice ${display} ${moves[index % moves.length]}.`,
    'Point to the exact line of support before picking the answer.',
  ]
}

function distractorFeedback(item, label, index) {
  return item.collection_id === 'opensat::english'
    ? readingWritingFeedback(item, label, index)
    : mathFeedback(item, label, index)
}

function wrongTriples(item) {
  const correct = correctChoiceText(item).toLowerCase()
  const seen = new Set([correct])
  return answerEntries(item)
    .filter(([key]) => key !== item.correct_answer)
    .map(([, label]) => normalizeText(label))
    .filter((label) => {
      const key = label.toLowerCase()
      if (!label || seen.has(key)) return false
      seen.add(key)
      return true
    })
    .map((label, index) => {
      const [flaw, reframe] = distractorFeedback(item, label, index)
      return [label, flaw, reframe]
    })
}

function validateItems(items) {
  const problems = []
  for (const item of items) {
    if (!normalizeText(item.prompt_text)) problems.push(`${item.source_id}: missing prompt`)
    if (!correctChoiceText(item)) problems.push(`${item.source_id}: missing correct answer text`)
    if (answerEntries(item).length < 2) problems.push(`${item.source_id}: fewer than two answer choices`)
    if (wrongTriples(item).length < 1) problems.push(`${item.source_id}: fewer than two distinct answer labels`)
    if (!normalizeText(item.explanation)) problems.push(`${item.source_id}: missing explanation`)
  }
  if (problems.length > 0) {
    throw new Error(`OpenSAT import validation failed:\n${problems.join('\n')}`)
  }
}

function buildQuestionLiteral(item, id, index) {
  const lesson = normalizeText(item.explanation)

  return [
    '  {',
    `    id: ${id},`,
    `    chapter: ${jsString(chapterForItem(item))},`,
    `    title: ${jsString(titleForItem(item, index))},`,
    `    prompt: ${jsString(promptForItem(item))},`,
    `    correct: ${jsString(correctChoiceText(item))},`,
    `    wrong: ${jsString(wrongTriples(item))},`,
    `    lesson: ${jsString(lesson)},`,
    "    source: 'OpenSAT',",
    '  },',
  ].join('\n')
}

function buildBank(name, topic, items, baseId, exported = true) {
  const declaration = exported ? 'export const' : 'const'
  const lines = [`${declaration} ${name} = makeQuestionBank(${jsString(topic)}, [`]
  items.forEach((item, index) => lines.push(buildQuestionLiteral(item, baseId + index, index)))
  lines.push('])')
  return lines.join('\n')
}

function main() {
  const payload = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
  const items = payload.items ?? []
  validateItems(items)

  const mathItems = items.filter((item) => item.collection_id === 'opensat::math')
  const englishItems = items.filter((item) => item.collection_id === 'opensat::english')
  const output = [
    "import { makeQuestionBank } from './base'",
    "import { polish as runPolish } from './polishPipeline'",
    "import {",
    "  OPEN_SAT_SUB_TOPICS,",
    "  OPEN_SAT_MENTOR_HINTS,",
    "  OPEN_SAT_CORRECT_SHORTENED,",
    "} from './openSatPolish'",
    '',
    '// Generated by scripts/build_opensat_import.cjs from data/raw_collections/opensat.',
    '// Keep these questions source-traceable; edit the raw data or generator rather than hand-editing this file.',
    '',
    buildBank('_baseOpenSatMathQuestions', 'Mathematics', mathItems, 320001, false),
    '',
    buildBank('_baseOpenSatReadingWritingQuestions', 'AP', englishItems, 321001, false),
    '',
    'const _openSatPolishBundles = [',
    '  {',
    '    subTopics: OPEN_SAT_SUB_TOPICS,',
    '    mentorHints: OPEN_SAT_MENTOR_HINTS,',
    '    correctShortened: OPEN_SAT_CORRECT_SHORTENED,',
    "    source: 'openSat',",
    '  },',
    ']',
    '',
    'export const openSatMathQuestions = runPolish(_baseOpenSatMathQuestions, _openSatPolishBundles)',
    'export const openSatReadingWritingQuestions = runPolish(_baseOpenSatReadingWritingQuestions, _openSatPolishBundles)',
    '',
  ].join('\n')

  fs.writeFileSync(outputPath, output, 'utf8')
  console.log(`Wrote ${mathItems.length} SAT math and ${englishItems.length} SAT reading/writing questions.`)
}

main()
