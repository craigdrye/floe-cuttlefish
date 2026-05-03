import { answerSet } from './base'
import { questionReviewOverrides } from './reviewOverrides'
import type { Answer, Question, QuestionReview, QuestionReviewFlag, QuestionReviewStatus } from './types'

const PLACEHOLDER_TEXTS = new Set([
  '',
  'see solution',
  'no solution provided.',
  'no solution provided',
  'n/a (open-ended)',
  'n/a',
  'open-ended',
])

function normalizeText(value?: string) {
  return (value ?? '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

function isPlaceholderText(value?: string) {
  return PLACEHOLDER_TEXTS.has(normalizeText(value))
}

function isExplicitPlaceholderText(value?: string) {
  if (value == null) return false
  return isPlaceholderText(value)
}

export function isPlaceholderAnswerLabel(value?: string) {
  return isPlaceholderText(value)
}

export function stripPlaceholderAnswers(question: Question): Question {
  const answers = question.answers.filter((answer) => !isPlaceholderAnswerLabel(answer.label))
  if (answers.length === question.answers.length) return question
  return {
    ...question,
    answers,
  }
}

function extractBulletItems(lesson?: string) {
  if (!lesson) return []
  return [...lesson.matchAll(/^- (.+)$/gm)].map((match) => match[1].trim()).filter(Boolean)
}

function extractEitherOrItems(lesson: string, variable: string) {
  const normalized = lesson.replace(/\s+/g, ' ')
  const pattern = new RegExp(`\\$${variable}\\s*=\\s*([^$]+)\\$\\s+or\\s+\\$${variable}\\s*=\\s*([^$]+)\\$`)
  const match = normalized.match(pattern)
  if (!match) return []
  return [`$${variable} = ${match[1].trim()}$`, `$${variable} = ${match[2].trim()}$`]
}

function extractBothItems(lesson?: string) {
  if (!lesson) return []
  const normalized = lesson.replace(/\s+/g, ' ')
  const match = normalized.match(/both\s+(\$[^$]+\$)\s+and\s+(\$[^$]+\$)\s+are equal/i)
  if (!match) return []
  return [match[1].trim(), match[2].trim()]
}

function listLabel(items: string[]) {
  return items.join(' ; ')
}

function buildListRepair(question: Question, prompt: string, items: string[]) {
  if (items.length < 2) return question

  const correct = listLabel(items)
  const wrongLabels = [
    listLabel([items[0]]),
    listLabel([items[1]]),
    items.length > 2 ? listLabel(items.slice(0, items.length - 1)) : 'None of these are correct.',
  ]

  return {
    ...question,
    prompt,
    answers: answerSet(correct, [
      [wrongLabels[0], 'This includes only part of the valid set.', 'Look for the answer that lists every valid item, not just one.'],
      [wrongLabels[1], 'This is another partial list, not the full correct set.', 'Use the worked solution to include all valid items.'],
      [wrongLabels[2], 'This omits at least one valid item or rejects the valid set entirely.', 'Check the full list established in the explanation.'],
    ]),
    solution: correct,
  }
}

export function repairSparseImportedQuestion(question: Question): Question {
  if (question.source !== 'Khan Academy') return question
  if (question.answers.length > 1) return question

  if (question.prompt === '**Which expressions are equivalent to $2(-6c+3)+4c$ ?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $2(-6c+3)+4c$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which expressions are equivalent to $12r-5$ ?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $12r-5$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which of the following equations has $3$ as a possible value of $w$?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the equations for which $3$ is a possible value of $w$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which of the following equations has $4$ as a possible value of $z$?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the equations for which $4$ is a possible value of $z$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which of the $b$ values are solutions to the following equation?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the solutions to the equation?',
      extractEitherOrItems(question.lesson ?? '', 'b'),
    )
  }

  if (question.prompt === '**Which of the following expressions are equivalent to $-\\left(-\\dfrac{5}{3}\\right)$?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $-\\left(-\\dfrac{5}{3}\\right)$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === 'Consider the sum $5 + (-7) + (-27) + (-55)$.') {
    return buildListRepair(
      question,
      'Which answer correctly lists the sigma notations equal to $5 + (-7) + (-27) + (-55)$?',
      extractBothItems(question.lesson),
    )
  }

  if (question.prompt === '**Which expressions are equivalent to $-2y-8+4y$ ?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $-2y-8+4y$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === 'Consider the sum $2+5+8+11$.') {
    return buildListRepair(
      question,
      'Which answer correctly lists the sigma notations equal to $2+5+8+11$?',
      extractBothItems(question.lesson),
    )
  }

  if (question.prompt === '**Which of the following expressions are equivalent to $\\dfrac{5}{2}$?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $\\dfrac{5}{2}$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which expressions are equivalent to $x^{1.4}$ ?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $x^{1.4}$?',
      [
        '$\\left(x^{^{\\scriptsize\\dfrac15}}\\right)^7$',
        '$\\left(\\sqrt[5]{x}\\right)^7$',
        '$\\sqrt[5]{x^7}$',
      ],
    )
  }

  if (question.prompt === '**Which expressions are equivalent to $\\left(v^{-1}\\right)^{^{\\scriptsize\\dfrac{1}{9}}}$ ?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $\\left(v^{-1}\\right)^{^{\\scriptsize\\dfrac{1}{9}}}$?',
      [
        '$v^{^{\\scriptsize -\\dfrac{1}{9}}}$',
        '$\\left(v^{^{\\scriptsize\\dfrac19}}\\right)^{-1}$',
        '$\\left(\\sqrt[9]{v}\\right)^{-1}$',
      ],
    )
  }

  if (question.prompt === '**Which of the following expressions are equivalent to $\\dfrac{-10}{3}$?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the expressions equivalent to $\\dfrac{-10}{3}$?',
      extractBulletItems(question.lesson),
    )
  }

  if (question.prompt === '**Which polynomials are in standard form?**') {
    return buildListRepair(
      question,
      'Which answer correctly lists the polynomials that are in standard form?',
      extractBulletItems(question.lesson),
    )
  }

  return question
}

function countCorrectAnswers(answers: Answer[]) {
  return answers.filter((answer) => answer.correct).length
}

function promptLikelyLeaksAnswers(question: Question) {
  const rawPrompt = question.prompt
  const prompt = normalizeText(rawPrompt)
  if (!prompt) return false

  const candidateLabels = question.answers
    .map((answer) => answer.label.trim())
    .filter((label) => label.length >= 4)

  if (candidateLabels.length < 2) return false

  const binaryAnswers = new Set(
    question.answers.map((answer) => normalizeText(answer.label)).filter(Boolean),
  )
  if (binaryAnswers.size === 2 && binaryAnswers.has('true') && binaryAnswers.has('false')) {
    return false
  }

  const promptLines = rawPrompt
    .split('\n')
    .map((line) => normalizeText(line))
    .filter(Boolean)

  const standaloneLineMatches = candidateLabels.filter((label) => {
    const normalized = normalizeText(label)
    return promptLines.includes(normalized)
  })

  if (standaloneLineMatches.length >= 2) {
    return true
  }
  return false
}

function buildReview(flags: QuestionReviewFlag[], notes: string[]): QuestionReview {
  let status: QuestionReviewStatus = 'playable'

  if (
    flags.includes('missing-prompt') ||
    flags.includes('invalid-correct-answer') ||
    flags.includes('insufficient-answer-choices')
  ) {
    status = 'quarantined'
  } else if (
    flags.includes('placeholder-solution') ||
    flags.includes('placeholder-answer-choice') ||
    flags.includes('answer-leakage')
  ) {
    status = 'recoverable'
  }

  return { status, flags, notes }
}

function applyReviewOverride(review: QuestionReview, trackId: string | undefined, questionId: number) {
  const override = (trackId ? questionReviewOverrides[`${trackId}:${questionId}`] : undefined)
    ?? questionReviewOverrides[String(questionId)]

  if (!override) return review

  const flags = review.flags.filter((flag) => !override.removeFlags?.includes(flag))
  for (const flag of override.addFlags ?? []) {
    if (!flags.includes(flag)) flags.push(flag)
  }

  const notes = [...review.notes, ...(override.addNotes ?? [])]

  return {
    ...review,
    status: override.status ?? review.status,
    flags,
    notes,
  }
}

export function reviewQuestion(question: Question, trackId?: string): Question {
  const flags: QuestionReviewFlag[] = []
  const notes: string[] = []

  if (!question.prompt.trim()) {
    flags.push('missing-prompt')
    notes.push('Prompt is empty.')
  }

  const correctAnswerCount = countCorrectAnswers(question.answers)
  if (correctAnswerCount !== 1) {
    flags.push('invalid-correct-answer')
    notes.push(`Expected exactly one correct answer, found ${correctAnswerCount}.`)
  }

  if (question.answers.length < 2) {
    flags.push('insufficient-answer-choices')
    notes.push(`Only ${question.answers.length} answer choice is available.`)
  }

  if (isExplicitPlaceholderText(question.solution) || isExplicitPlaceholderText(question.lesson)) {
    flags.push('placeholder-solution')
    notes.push('Solution or lesson is still a placeholder.')
  }

  if (question.answers.some((answer) => isPlaceholderAnswerLabel(answer.label))) {
    flags.push('placeholder-answer-choice')
    notes.push('At least one answer choice is still a placeholder.')
  }

  if (promptLikelyLeaksAnswers(question)) {
    flags.push('answer-leakage')
    notes.push('Prompt appears to embed answer choices directly.')
  }

  if (!question.lesson?.trim()) {
    flags.push('missing-lesson')
    notes.push('Question has no worked explanation yet.')
  }

  return {
    ...question,
    review: applyReviewOverride(buildReview(flags, notes), trackId, question.id),
  }
}

export function isPlayableQuestion(question: Question) {
  const review = question.review ?? reviewQuestion(question).review
  return review?.status === 'playable'
}

export function summarizeQuestionFlags(questions: Question[]) {
  const summary: Partial<Record<QuestionReviewFlag, number>> = {}

  for (const question of questions) {
    const review = question.review ?? reviewQuestion(question).review
    for (const flag of review?.flags ?? []) {
      summary[flag] = (summary[flag] ?? 0) + 1
    }
  }

  return summary
}

export function summarizeQuestionReviews(questions: Question[]) {
  return questions.reduce(
    (summary, question) => {
      const status = question.review?.status ?? reviewQuestion(question).review?.status ?? 'quarantined'
      summary[status] += 1
      return summary
    },
    { playable: 0, recoverable: 0, quarantined: 0 },
  )
}
