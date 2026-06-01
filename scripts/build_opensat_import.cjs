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

function finalNumericValue(value) {
  const text = normalizeText(value).replace(/,/g, '')
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean)
  const tail = sentences.slice(-2).join(' ')
  const matches = tail.match(/-?\d+(?:\.\d+)?/g)
  if (!matches?.length) return null
  return Number(matches[matches.length - 1])
}

function numericAnswerExplanationMismatch(item) {
  if (item.collection_id !== 'opensat::math') return false
  const correctValue = numericValue(correctChoiceText(item))
  const finalValue = finalNumericValue(item.explanation)
  if (correctValue === null || finalValue === null) return false
  return Math.abs(correctValue - finalValue) > 1e-9
}

function stableIndex(seed, length) {
  let hash = 2166136261
  for (const char of String(seed)) {
    hash ^= char.charCodeAt(0)
    hash = Math.imul(hash, 16777619)
  }
  return Math.abs(hash) % length
}

function variant(seed, options) {
  return options[stableIndex(seed, options.length)]
}

function articleFor(value) {
  return /^[aeiou]/i.test(value) ? 'an' : 'a'
}

function promptCue(item) {
  const domain = normalizeText(item.domain)
  const prompt = normalizeText(item.prompt_text)
  const cue = prompt.length > 68 ? `${prompt.slice(0, 65)}...` : prompt
  return domain ? `${domain}: ${cue}` : cue
}

function dedupeItems(items) {
  const seen = new Set()
  const deduped = []
  for (const item of items) {
    const key = [
      normalizeText(item.collection_id).toLowerCase(),
      normalizeText(item.domain).toLowerCase(),
      normalizeText(item.paragraph_text).toLowerCase(),
      normalizeText(item.prompt_text).toLowerCase(),
      normalizeText(item.correct_answer).toLowerCase(),
      JSON.stringify(item.answer_choices ?? {}),
    ].join('\u0001')
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(item)
  }
  return deduped
}

function mathFeedback(item, label, index) {
  const context = `${item.domain} ${item.prompt_text} ${item.paragraph_text}`.toLowerCase()
  const correct = correctChoiceText(item)
  const wrongValue = numericValue(label)
  const correctValue = numericValue(correct)
  const display = shortLabel(label)
  const correctDisplay = shortLabel(correct)
  const seed = `${item.source_id}:${item.domain}:${item.prompt_text}:${label}:${index}`
  const asksFor = context.match(/what is (?:the )?(?:value|measure|area|radius|circumference|slope|sum|percentage|probability|number) of ([^?.]+)[?.]?/)
  const targetPhrase = asksFor?.[1]
    ? `The target is ${shortLabel(asksFor[1])}, so`
    : /system|equation/.test(context)
      ? 'Because both equations must stay true,'
      : /survey|people|percent|percentage|probability/.test(context)
        ? 'Because the denominator and group matter,'
        : /circle|rectangle|triangle|sector|angle|volume|area/.test(context)
          ? 'Because the figure relationship matters,'
          : 'Because the final requested quantity matters,'

  if (wrongValue !== null && correctValue !== null && wrongValue !== correctValue) {
    if (Math.sign(wrongValue) !== Math.sign(correctValue) && correctValue !== 0) {
      const signContext = /slope|line|coordinate/.test(context)
        ? 'line or slope direction'
        : /quadratic|root|x-axis|intersect|factor/.test(context)
          ? 'root, intercept, or coefficient sign'
          : 'subtraction or equation direction'
      return [
        variant(seed, [
          `The value ${display} has the opposite sign from ${correctDisplay}; that usually means the ${signContext} flipped during the work.`,
          `${display} has the right kind of size but the wrong sign. Recheck the ${signContext} before simplifying.`,
          `Choosing ${display} points to a sign slip: this setup needs ${correctDisplay}, not the sign-reversed result.`,
          `${display} is the sign-mirror trap here. Keep the negative and positive terms separate until the last step.`,
          `This answer changes the direction of the calculation. The ${signContext} should lead to ${correctDisplay}, not ${display}.`,
          `${display} usually appears when the algebra is set up in the opposite direction. Track which side is being subtracted from which.`,
          `The sign on ${display} is the clue: it comes from reversing the ${signContext}, not from solving the requested quantity.`,
          `${display} is tempting if the magnitude looks familiar, but the sign contradicts the setup that gives ${correctDisplay}.`,
        ]),
        variant(`${seed}:tip`, [
          'Carry the sign through each line instead of fixing it at the end.',
          'Write one extra line for the signed equation before simplifying.',
          'Check whether the answer should be positive or negative before choosing.',
          'Substitute the signed value back into the setup as a quick check.',
        ]),
      ]
    }
    if (Math.abs(wrongValue) < Math.abs(correctValue)) {
      const missingStep = /percent|rate|ratio|proportion/.test(context)
        ? 'percent base or rate conversion'
        : /area|volume|circle|rectangle|triangle/.test(context)
          ? 'second dimension or full figure relationship'
          : /function|exponent|quadratic/.test(context)
          ? 'exponent, coefficient, or final substitution step'
            : 'required operation'
      return [
        variant(seed, [
          `${targetPhrase} ${display} stops short of the full result ${correctDisplay}; the ${missingStep} is still missing.`,
          `${display} is an intermediate-size answer. It looks like one step of the work, not the final value ${correctDisplay}.`,
          `The answer ${display} is too small for this setup because it leaves out the ${missingStep} needed to reach ${correctDisplay}.`,
          `${display} likely comes from using only part of the given information; finishing the ${missingStep} gets to ${correctDisplay}.`,
          `This undercounts the requested quantity. The setup points past ${display} to ${correctDisplay}.`,
          `${display} is the "almost there" trap: it captures part of the calculation before the final operation that reaches ${correctDisplay}.`,
          `Picking ${display} usually means the calculation used the right direction but stopped before the full quantity ${correctDisplay} was found.`,
          `${display} fits a partial relationship in the problem, but the question asks for the completed result ${correctDisplay}.`,
        ]),
        variant(`${seed}:tip`, [
          'Ask whether you have used every condition in the prompt.',
          'Circle the requested quantity and make sure the last line solves for that exact thing.',
          'Check whether this is only one component of a larger total.',
          'Do one more substitution or unit check before choosing.',
        ]),
      ]
    }
    if (Math.abs(wrongValue) > Math.abs(correctValue)) {
      const extraStep = /percent|rate|ratio|proportion/.test(context)
        ? 'base, rate, or total'
        : /area|volume|circle|rectangle|triangle/.test(context)
          ? 'length, area, or scale factor'
        : /function|exponent|quadratic/.test(context)
          ? 'coefficient, exponent, or solution'
            : 'operation'
      const extraStepPhrase = `${articleFor(extraStep)} ${extraStep}`
      return [
        variant(seed, [
          `${display} overshoots ${correctDisplay}; it usually appears when the ${extraStep} is applied one time too many.`,
          `${display} is too large for this setup; it likely repeats ${extraStepPhrase} step after the final quantity ${correctDisplay} was already found.`,
          `${display} has been inflated past the target ${correctDisplay}, often by double-counting the ${extraStep}.`,
          `Choosing ${display} points to an extra operation after the problem should have stopped at ${correctDisplay}.`,
          `${display} is the overcount trap: it keeps calculating after the requested quantity ${correctDisplay} has already been reached.`,
          `The setup does not support a result as large as ${display}. Recheck whether the ${extraStep} was counted twice.`,
          `${display} usually comes from treating a one-step scale or rate adjustment as if it had to happen again.`,
          `This goes beyond the requested value. The arithmetic should land at ${correctDisplay}, not the larger ${display}.`,
        ]),
        variant(`${seed}:tip`, [
          'Estimate the answer size before doing exact arithmetic.',
          'After calculating, ask whether one of the setup numbers was counted twice.',
          'Compare the result with the original quantities for a quick magnitude check.',
          'Stop at the quantity the stem asks for; do not keep transforming it.',
        ]),
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
  const cue = promptCue(item)

  if (domain.includes('standard english')) {
    const moves = [
      `may look grammatical in isolation, but in ${cue} it creates a punctuation, agreement, or modifier problem`,
      `sounds polished, but it does not fit the sentence boundary or verb pattern in ${cue}`,
      `changes the rhythm of the sentence without solving the convention being tested in ${cue}`,
    ]
    return [
      `Choosing "${display}" ${moves[index % moves.length]}.`,
      'Read the whole sentence after inserting the option; grammar traps often break just outside the edited phrase.',
    ]
  }
  if (domain.includes('expression of ideas')) {
    const moves = [
      `may be clear on its own, but it does not create the transition, emphasis, or organization needed in ${cue}`,
      'adds a reasonable-sounding idea while missing the writer\'s purpose at this point in the passage',
      'focuses on wording polish instead of the sentence\'s job in the paragraph',
    ]
    return [
      `Choosing "${display}" ${moves[index % moves.length]}.`,
      'Ask what job the sentence must do for the paragraph before judging style.',
    ]
  }
  if (domain.includes('craft') || domain.includes('structure')) {
    const moves = [
      `overstates the author's purpose beyond what the quoted wording in ${cue} can support`,
      'captures a related tone or topic but misses the specific rhetorical function being tested',
      'treats a detail as the main structural move of the passage',
    ]
    return [
      `Choosing "${display}" ${moves[index % moves.length]}.`,
      'Tie the answer to the author\'s exact word choice, structure, or stated purpose.',
    ]
  }

  const moves = [
    'sounds plausible but is broader than the evidence in the passage allows',
    'uses a real detail from the text while drawing the wrong inference from it',
    'answers a nearby idea instead of the specific claim or evidence relationship asked about',
  ]
  return [
    `Choosing "${display}" ${moves[index % moves.length]} in ${cue}.`,
    'Point to the exact line of support before picking the answer.',
  ]
}

function distractorFeedback(item, label, index) {
  return item.collection_id === 'opensat::english'
    ? readingWritingFeedback(item, label, index)
    : mathFeedback(item, label, index)
}

function contextualizeFlaw(item, flaw) {
  const cue = promptCue(item)
  if (!cue) return flaw
  if (flaw.includes(cue)) return flaw
  return `${flaw} In this item, anchor the choice to: ${cue}.`
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
      return [label, contextualizeFlaw(item, flaw), reframe]
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
  items.forEach((item, index) => {
    const originalIndex = Number.isInteger(item.__importIndex) ? item.__importIndex : index
    lines.push(buildQuestionLiteral(item, baseId + originalIndex, originalIndex))
  })
  lines.push('])')
  return lines.join('\n')
}

function withImportOrdinals(items) {
  return items.map((item, index) => ({ ...item, __importIndex: index }))
}

function main() {
  const payload = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
  const items = payload.items ?? []
  validateItems(items)

  const rawMathItems = withImportOrdinals(items.filter((item) => item.collection_id === 'opensat::math'))
  const mathMismatchCount = rawMathItems.filter(numericAnswerExplanationMismatch).length
  const mathItems = dedupeItems(rawMathItems.filter((item) => !numericAnswerExplanationMismatch(item)))
  const englishItems = dedupeItems(withImportOrdinals(items.filter((item) => item.collection_id === 'opensat::english')))
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
  console.log(`Wrote ${mathItems.length} SAT math and ${englishItems.length} SAT reading/writing questions (${mathMismatchCount} numeric answer/explanation mismatches and ${items.length - mathItems.length - englishItems.length - mathMismatchCount} exact duplicates skipped).`)
}

main()
