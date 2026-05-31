import { answerSet } from '../data/questionCatalog/base'
import { ensureQuestionCollectionMeta } from '../data/questionCatalog/collections'
import type { Answer, Question, QuestionCatalog, Topic } from '../data/questionCatalog'
import type { AgeGroup } from '../data/ageCatalog'
import {
  isPlayableQuestion,
  repairSparseImportedQuestion,
  reviewQuestion,
  stripPlaceholderAnswers,
  summarizeQuestionReviews,
} from '../data/questionCatalog/review'

type TrackLike = {
  id: string
  title: string
  discipline: string
  ageGroup: AgeGroup
  skills: string[]
}

const QUIZ_LENGTH = 300




export function buildTrackQuiz(
  track: TrackLike,
  courseQuestionCatalog: QuestionCatalog,
) {
  const base = courseQuestionCatalog[track.id] ?? []
  if (base.length === 0) {
    throw new Error(`No questions found for track "${track.id}". Check that the catalog is loaded correctly.`)
  }
  const playable = dedupeQuestionsByPrompt(base.filter(isPlayableQuestion))
  if (playable.length === 0) {
    const summary = summarizeQuestionReviews(base)
    throw new Error(
      `No playable questions found for track "${track.id}". ${summary.recoverable} need cleanup and ${summary.quarantined} are quarantined.`,
    )
  }
  return playable.slice(0, QUIZ_LENGTH).map(ensureSixAnswerChoices)
}


function parseLeadingNumber(label: string) {
  const match = label.match(/^(.*?)([-+]?\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null

  const [, prefix, numericText, suffix] = match
  const value = Number(numericText)
  if (!Number.isFinite(value)) return null

  return { prefix, suffix, value, decimals: numericText.includes('.') ? numericText.split('.')[1].length : 0 }
}

function formatLikeLabel(
  template: { prefix: string; suffix: string; decimals: number },
  value: number,
) {
  const rounded = template.decimals > 0 ? value.toFixed(template.decimals) : String(Math.round(value))
  return `${template.prefix}${rounded}${template.suffix}`
}

function candidateNumberVariants(label: string) {
  const parsed = parseLeadingNumber(label)
  if (!parsed) return []

  const magnitude = Math.max(1, Math.round(Math.abs(parsed.value) * 0.35))
  const candidates = [
    parsed.value + magnitude,
    parsed.value - magnitude,
    parsed.value * -1,
    parsed.value + Math.max(2, Math.round(Math.abs(parsed.value) * 0.75)),
  ]

  return candidates
    .filter((value) => Number.isFinite(value) && value !== parsed.value)
    .map((value) => formatLikeLabel(parsed, value))
}

function mutateLabel(label: string) {
  const replacements: Array<[RegExp, string]> = [
    [/\balways\b/i, 'never'],
    [/\bnever\b/i, 'always'],
    [/\bmore\b/i, 'less'],
    [/\bless\b/i, 'more'],
    [/\bbefore\b/i, 'after'],
    [/\bafter\b/i, 'before'],
    [/\bhighest\b/i, 'lowest'],
    [/\blowest\b/i, 'highest'],
    [/\bminimum\b/i, 'maximum'],
    [/\bmaximum\b/i, 'minimum'],
    [/\bpositive\b/i, 'negative'],
    [/\bnegative\b/i, 'positive'],
    [/\bspecific\b/i, 'general'],
    [/\bgeneral\b/i, 'specific'],
    [/\bfirst\b/i, 'last'],
    [/\blast\b/i, 'first'],
    [/\bonly\b/i, 'every'],
    [/\bevery\b/i, 'only'],
  ]

  for (const [pattern, replacement] of replacements) {
    if (pattern.test(label)) {
      return label.replace(pattern, replacement)
    }
  }

  return null
}

function genericDistractorPool(question: Question) {
  const byTopic: Partial<Record<Topic, string[]>> = {
    Mathematics: [
      'Grab the closest-looking formula without checking what the givens actually describe',
      'Do part of the computation correctly, then stop before matching it back to the question',
    ],
    'Game theory': [
      'Use the fairest-looking move instead of the incentive-stable one',
      'Assume the next round helps every player equally',
    ],
    Probability: [
      'Use the biggest percentage mentioned in the setup',
      'Average the headline percentages without conditioning on the right group',
    ],
    'Expected value': [
      'Pick the most likely payoff instead of the weighted average',
      'Ignore the low-probability branch because it feels exceptional',
    ],
    Statistics: [
      'Use the memorized slogan without the algebra underneath it',
      'Treat the sample pattern as automatic proof of the larger claim',
    ],
    ML: [
      'Optimize the metric that sounds nicest without checking the cost tradeoff',
      'Assume a cleaner-looking model is automatically the better model',
    ],
    Software: [
      'Pick the cleverest pattern rather than the simplest reliable one',
      'Assume scalability matters more than correctness in this exact case',
    ],
    Research: [
      'Take the claim at face value without checking design or evidence',
      'Treat correlation as enough to settle causation',
    ],
    Medical: [
      'Choose the fastest action before checking the safety signal',
      'Assume a common symptom always points to the most dramatic diagnosis',
    ],
    'Series 86': [
      'Use the finance word that sounds most senior without doing the math',
      'Pick the market story and skip the accounting logic',
    ],
    Regulatory: [
      'Choose the fastest route instead of the defensible compliant route',
      'Assume a product claim is fine if it sounds broadly reasonable',
    ],
    'Clinical Research': [
      'Prioritize speed over protocol and documentation',
      'Treat participant safety as separate from data quality',
    ],
    'Supply Chain': [
      'Push more volume without checking the bottleneck',
      'Assume inventory always fixes uncertainty by itself',
    ],
    'Technical Sales': [
      'Pitch immediately instead of diagnosing the buyer problem',
      'Treat enthusiasm as proof of fit',
    ],
    'UX Research': [
      'Trust the first quote without checking the pattern',
      'Assume what users say is always the same as what they do',
    ],
    AP: [
      'Choose the textbook-sounding phrase without applying the concept',
      'Use the nearest formula even if the setup points somewhere else',
    ],
    'A-level': [
      'Apply the right-looking rule to the wrong part of the problem',
      'Stop at a familiar keyword instead of finishing the logic',
    ],
    Primary: [
      'Pick the answer that sounds nicest instead of using the clue',
      'Choose the biggest-looking number even when the rule says otherwise',
    ],
    Fun: [
      'Grab the most dramatic answer instead of the patterned one',
      'Follow the vibe and ignore the mechanism',
    ],
    University: [
      'Use the adjacent concept without checking the exact definition',
      'Answer with the broad intuition and skip the formal test',
    ],
    'Career Skills': [
      'Choose the convenient action instead of the defensible professional one',
      'Pick the fastest move and ignore the process risk',
    ],
    'Extension': [
      'Skip the rigorous logical steps for a common-sense shortcut',
      'Assume the standard rule applies without checking the extension constraint',
    ],
  }

  return byTopic[question.topic] ?? [
    'Pick the most intuitive-sounding answer without checking the key detail',
    'Use the nearest familiar rule even if the setup points somewhere else',
  ]
}

function makeGeneratedDistractor(label: string, reason: string): Answer {
  return {
    id: 'z',
    label,
    correct: false,
    misconceptions: [
      {
        tempting: 'This is the kind of answer that feels tidy at first glance.',
        flaw: reason,
        reframe: 'Use the actual setup details and test the mechanism, not just the vibe of the option.',
      },
    ],
  }
}

export function ensureSixAnswerChoices(question: Question): Question {
  const answerIds = ['a', 'b', 'c', 'd', 'e', 'f'] as const

  if (question.topic === 'Fun' && (Array.isArray(question.media) ? question.media.length > 0 : Boolean(question.media))) {
    return {
      ...question,
      answers: question.answers.map((answer, index) => ({
        ...answer,
        id: answerIds[index] ?? answer.id,
      })),
    }
  }

  if (question.answers.length >= 6) {
    return {
      ...question,
      answers: question.answers.map((answer, index) => ({
        ...answer,
        id: answerIds[index] ?? answer.id,
      })),
    }
  }

  const existingLabels = new Set(question.answers.map((answer) => answer.label.trim().toLowerCase()))
  const correctAnswer = question.answers.find((answer) => answer.correct)
  const extras: Answer[] = []

  if (correctAnswer) {
    for (const candidate of candidateNumberVariants(correctAnswer.label)) {
      const normalized = candidate.trim().toLowerCase()
      if (!existingLabels.has(normalized)) {
        existingLabels.add(normalized)
        extras.push(
          makeGeneratedDistractor(
            candidate,
            'It copies the shape of the right answer but changes the quantity in a way the setup does not support.',
          ),
        )
      }
      if (question.answers.length + extras.length >= 6) break
    }

    if (question.answers.length + extras.length < 6) {
      const mutated = mutateLabel(correctAnswer.label)
      if (mutated) {
        const normalized = mutated.trim().toLowerCase()
        if (!existingLabels.has(normalized)) {
          existingLabels.add(normalized)
          extras.push(
            makeGeneratedDistractor(
              mutated,
              'It flips a key qualifier in the correct principle, which usually breaks the logic of the answer.',
            ),
          )
        }
      }
    }
  }

  for (const label of genericDistractorPool(question)) {
    const normalized = label.trim().toLowerCase()
    if (!existingLabels.has(normalized)) {
      existingLabels.add(normalized)
      extras.push(
        makeGeneratedDistractor(
          label,
          'It sounds plausible in the abstract, but it does not actually answer the question the setup is asking.',
        ),
      )
    }
    if (question.answers.length + extras.length >= 6) break
  }

  return {
    ...question,
    answers: [...question.answers, ...extras]
      .slice(0, 6)
      .map((answer, index) => ({
        ...answer,
        id: answerIds[index] ?? answer.id,
      })),
  }
}

function answerLabelLength(label: string) {
  return label.replace(/\s+/g, ' ').trim().length
}

function shouldBalanceAnswerLengths(question: Question) {
  const correct = question.answers.find((answer) => answer.correct)
  const wrong = question.answers.filter((answer) => !answer.correct)
  if (!correct || wrong.length < 2) return false

  const correctLength = answerLabelLength(correct.label)
  const wrongLengths = wrong.map((answer) => answerLabelLength(answer.label))
  const maxWrong = Math.max(...wrongLengths)
  const avgWrong = wrongLengths.reduce((sum, length) => sum + length, 0) / wrongLengths.length

  return correctLength >= 20 && correctLength > maxWrong && correctLength >= Math.max(maxWrong * 1.2, avgWrong * 1.45)
}

function balanceAnswerLabelLengths(question: Question): Question {
  if (!shouldBalanceAnswerLengths(question)) return question

  const correct = question.answers.find((answer) => answer.correct)
  if (!correct) return question

  const targetLength = Math.min(answerLabelLength(correct.label) + 4, Math.max(32, Math.round(answerLabelLength(correct.label) * 0.9)))
  const existing = new Set(question.answers.map((answer) => answer.label.trim().toLowerCase()))
  const expanded = question.answers.map((answer) => {
    if (answer.correct || answerLabelLength(answer.label) >= targetLength) return answer

    const label = expandedDistractorLabel(answer.label, question, targetLength)
    const normalized = label.trim().toLowerCase()
    if (normalized === answer.label.trim().toLowerCase() || existing.has(normalized)) return answer

    existing.add(normalized)
    return { ...answer, label }
  })

  return { ...question, answers: expanded }
}

function expandedDistractorLabel(label: string, question: Question, targetLength: number) {
  const trimmed = label.trim()
  const lower = `${question.topic} ${question.chapter} ${question.title} ${question.prompt}`.toLowerCase()
  const candidates = [
    expandSpecificDistractor(trimmed, lower),
    expandByAnswerShape(trimmed, lower),
    `${trimmed} under the stated conditions`,
    `${trimmed} as the main answer to this question`,
  ].filter(Boolean) as string[]

  for (const candidate of candidates) {
    if (answerLabelLength(candidate) >= Math.min(targetLength, 48)) return candidate
  }

  return candidates[0] ?? trimmed
}

function expandSpecificDistractor(label: string, lowerContext: string): string | null {
  const normalized = label.toLowerCase()

  if (!label) return 'A result from applying a different setup condition'
  if (normalized === 'incorrect interpretation') return 'A result from a different interpretation of the setup'
  if (normalized === 'incomplete answer') return 'A choice that uses only part of the given evidence'
  if (normalized === 'categorical error') return 'A choice from the wrong category for this question'
  if (normalized === 'neither') return 'Neither option works under the stated condition'
  if (normalized === 'both') return 'Both options work under the stated condition'
  if (normalized === 'true') return 'True under the stated conditions'
  if (normalized === 'false') return 'False under the stated conditions'
  if (normalized === 'yes') return 'Yes, based on the stated conditions'
  if (normalized === 'no') return 'No, based on the stated conditions'

  const onlyMatch = label.match(/^Only\s+(.+)$/i)
  if (onlyMatch) {
    return `Only ${onlyMatch[1]} works for the given setup`
  }

  if (lowerContext.includes('cross section') && /^[A-Za-z ]+$/.test(label)) {
    return `A ${label.toLowerCase()} cross section of the solid`
  }

  if (lowerContext.includes('shape') && /^[A-Za-z ]+$/.test(label)) {
    return `A ${label.toLowerCase()} shape in this situation`
  }

  if ((lowerContext.includes('limit') || lowerContext.includes('integral')) && looksLikeMathValue(label)) {
    return `A finite value of ${label}`
  }

  if ((lowerContext.includes('equation') || lowerContext.includes('solution')) && looksLikeMathValue(label)) {
    return `A possible solution of ${label}`
  }

  if ((lowerContext.includes('probability') || lowerContext.includes('expected value')) && looksLikeMathValue(label)) {
    return `A calculated probability or value of ${label}`
  }

  return null
}

function expandByAnswerShape(label: string, lowerContext: string): string | null {
  if (looksLikeMathValue(label)) {
    if (lowerContext.includes('density') || lowerContext.includes('mass') || lowerContext.includes('volume')) {
      return `A calculated measurement of ${label}`
    }
    return `A calculated value of ${label}`
  }

  if (/^[A-Z][A-Za-z -]{1,24}$/.test(label)) {
    if (lowerContext.includes('biology') || lowerContext.includes('science')) {
      return `The ${label} concept in this scenario`
    }
    if (lowerContext.includes('history') || lowerContext.includes('government')) {
      return `The ${label} answer in this context`
    }
    return `The ${label} option for this question`
  }

  if (answerLabelLength(label) < 24) {
    return `${label} for this exact setup`
  }

  return null
}

function looksLikeMathValue(label: string) {
  const compact = label.replace(/\s+/g, '')
  const letters = (compact.match(/[A-Za-z]/g) ?? []).length
  const mathMarks = (compact.match(/[$\\\d=+\-*/^()[\]{}<>.,:]/g) ?? []).length

  if (/(?:\\dfrac|\\frac|\\sqrt|\$)/.test(label) && letters <= 18) return true
  if (!/[A-Za-z]/.test(label) && /(?:\d|=|\$|\\)/.test(label)) return true
  return mathMarks >= Math.max(3, letters * 2)
}

export function normalizeQuestionCatalog(questionCatalog: Record<string, Question[]>) {
  return Object.fromEntries(
    Object.entries(questionCatalog).map(([key, value]) => [
      key,
      dedupeQuestionsByPrompt(
        value.map((question) => {
          const staged = ensureQuestionCollectionMeta(question, key)
          const sanitized = repairSparseImportedQuestion(stripPlaceholderAnswers(staged))
          const reviewed = reviewQuestion(sanitized, key)
          return isPlayableQuestion(reviewed) ? balanceAnswerLabelLengths(ensureSixAnswerChoices(reviewed)) : reviewed
        }),
      ),
    ]),
  ) as Record<string, Question[]>
}

function duplicatePromptKey(question: Question) {
  return question.prompt
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function dedupeQuestionsByPrompt(questions: Question[]) {
  const seen = new Set<string>()

  return questions.filter((question) => {
    const key = duplicatePromptKey(question)
    if (!key) return true
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

/**
 * Adaptive question-ordering relies on a 1-5 `difficulty` rating on each
 * Question. The VC flagship track is fully hand-tagged; most other files are
 * not yet. Until every file is tagged, callers (e.g. useQuizData) should fall
 * back to this default using the track's age group as the strongest signal.
 *
 *  - Primary tracks         → 2  (mostly entry-friendly)
 *  - High-school tracks     → 3  (mid-range, syllabus-aligned)
 *  - University/Career      → 3  (mid-range; flagship tracks override per-Q)
 *  - Capstone-flagged Qs    → 5  (detected via chapter prefix "Capstone")
 *
 * The numeric scale matches the canonical `Question.difficulty` field:
 *   1 = entry-friendly, 5 = mastery-level integration.
 */
export function defaultDifficultyFor(question: Question, ageGroup: AgeGroup): 1 | 2 | 3 | 4 | 5 {
  if (question.difficulty) return question.difficulty
  if (question.chapter && /\bcapstone\b/i.test(question.chapter)) return 5
  switch (ageGroup) {
    case 'preschool':
    case 'primary':
      return 2
    case 'high':
      return 3
    case 'university':
    case 'career':
    case 'career-hopper':
    case 'nerd':
      return 3
    default:
      return 3
  }
}

/**
 * Adaptive question ordering — pre-launch runtime helper.
 *
 * Goal: make a session feel like a difficulty ramp without becoming
 * deterministic across sessions. We bucket every question by its 1-5
 * difficulty signal (`Question.difficulty ?? defaultDifficultyFor(...)`)
 * then interleave the buckets across three session segments with shifting
 * weights:
 *
 *  - Early third  : 50% easy {1,2}, 30% medium {3}, 20% hard {4,5}
 *  - Middle third : 30% easy,       40% medium,     30% hard
 *  - Late third   : 20% easy,       30% medium,     50% hard
 *
 * Within each bucket, ordering is a seeded shuffle using `sessionSeed` so
 * the same session never reshuffles mid-flight, but the next session
 * (different seed) sees a different sequence.
 *
 * Graceful fallback: if every question has no `difficulty` field *and*
 * the bucketing collapses to a single bucket (e.g. all default to 3),
 * we return a plain `shuffledQuestions(...)` over the input so today's
 * behaviour is preserved for un-tagged tracks.
 *
 * Opt-in semantics: the adaptive ordering only kicks in when at least
 * one question carries an explicit `Question.difficulty`. Tracks with no
 * tags fall back to the seeded shuffle (which is what callers should
 * use to replace `index % activeSet.length` cycling).
 */
export function buildAdaptiveOrder(
  questions: Question[],
  sessionSeed: number,
  ageGroup: AgeGroup,
): Question[] {
  if (questions.length === 0) return []

  const hasExplicitDifficulty = questions.some((q) => typeof q.difficulty === 'number')
  if (!hasExplicitDifficulty) {
    // No track-level difficulty data — fall back to a session-seeded shuffle.
    // Same surface area, no daily seed, no deterministic order across sessions.
    return shuffledQuestions(questions, sessionSeed)
  }

  // Bucket by canonical {easy=1-2, medium=3, hard=4-5}.
  const easy: Question[] = []
  const medium: Question[] = []
  const hard: Question[] = []
  for (const q of questions) {
    const d = q.difficulty ?? defaultDifficultyFor(q, ageGroup)
    if (d <= 2) easy.push(q)
    else if (d === 3) medium.push(q)
    else hard.push(q)
  }

  // If everything ended up in a single bucket, treat as uniform — just shuffle.
  const populated = [easy, medium, hard].filter((b) => b.length > 0)
  if (populated.length <= 1) {
    return shuffledQuestions(questions, sessionSeed)
  }

  // Seeded shuffle within each bucket. We salt the seed per bucket so the
  // three bucket orders are independent rather than correlated.
  const easyShuffled = shuffledQuestions(easy, (sessionSeed ^ 0x1a2b3c4d) >>> 0)
  const mediumShuffled = shuffledQuestions(medium, (sessionSeed ^ 0x5e6f7081) >>> 0)
  const hardShuffled = shuffledQuestions(hard, (sessionSeed ^ 0x90a1b2c3) >>> 0)

  // Per-segment weights: [easyWeight, mediumWeight, hardWeight] summing to 1.
  const segmentWeights: Array<[number, number, number]> = [
    [0.5, 0.3, 0.2], // early
    [0.3, 0.4, 0.3], // middle
    [0.2, 0.3, 0.5], // late
  ]

  const total = questions.length
  const segmentSizes = [
    Math.floor(total / 3),
    Math.floor(total / 3),
    total - 2 * Math.floor(total / 3),
  ]

  // Walking cursors into each shuffled bucket. We draw round-robin-ish
  // using the weights, falling through to any non-empty bucket when one runs
  // out so we always emit exactly `total` items.
  let eIdx = 0
  let mIdx = 0
  let hIdx = 0

  const drawFromBucket = (bucketKey: 'easy' | 'medium' | 'hard'): Question | null => {
    if (bucketKey === 'easy' && eIdx < easyShuffled.length) return easyShuffled[eIdx++]
    if (bucketKey === 'medium' && mIdx < mediumShuffled.length) return mediumShuffled[mIdx++]
    if (bucketKey === 'hard' && hIdx < hardShuffled.length) return hardShuffled[hIdx++]
    return null
  }

  const drawAny = (): Question | null => {
    if (eIdx < easyShuffled.length) return easyShuffled[eIdx++]
    if (mIdx < mediumShuffled.length) return mediumShuffled[mIdx++]
    if (hIdx < hardShuffled.length) return hardShuffled[hIdx++]
    return null
  }

  // Tiny seeded PRNG for the bucket-choice within a segment. Independent
  // stream from the shuffle PRNGs so weights interleave organically.
  let pickerState = (sessionSeed ^ 0xc0ffee11) >>> 0
  const nextRand = () => {
    pickerState = (pickerState * 1664525 + 1013904223) >>> 0
    return pickerState / 0xffffffff
  }

  const result: Question[] = []
  for (let segment = 0; segment < 3; segment += 1) {
    const [we, wm] = segmentWeights[segment]
    const size = segmentSizes[segment]
    for (let i = 0; i < size; i += 1) {
      const r = nextRand()
      const preferred =
        r < we ? drawFromBucket('easy') :
        r < we + wm ? drawFromBucket('medium') :
        drawFromBucket('hard')
      // Bucket exhausted for this preference — fall through to any remaining.
      const drawn = preferred ?? drawAny()
      if (!drawn) break // pool fully exhausted
      result.push(drawn)
    }
  }

  // Defensive: if any rounding/empty-bucket edge left us short, top up.
  while (result.length < total) {
    const drawn = drawAny()
    if (!drawn) break
    result.push(drawn)
  }

  return result
}

export function countPlayableQuestions(questions: Question[]) {
  return questions.filter(isPlayableQuestion).length
}

function hashString(value: string) {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }
  return hash
}

export function shuffledQuestions<T>(questions: T[], seed: number): T[] {
  let state = (seed ^ 0xdeadbeef) >>> 0
  const items = [...questions]
  for (let i = items.length - 1; i > 0; i--) {
    state = (state * 1664525 + 1013904223) >>> 0
    const j = state % (i + 1)
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

export function shuffledAnswers(answers: Answer[], seed: string) {
  let state = hashString(seed)
  const items = [...answers]

  for (let index = items.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0
    const swapIndex = state % (index + 1)
    ;[items[index], items[swapIndex]] = [items[swapIndex], items[index]]
  }

  return items
}


export function remixQuestion(base: Question, seed: number): Question {
  if (seed === 0) return base

  if (base.id === 1 || (base.topic === 'Game theory' && base.title.toLowerCase().includes('pirate'))) {
    const pirateCounts = [5, 7, 9, 11, 15]
    const n = pirateCounts[seed % pirateCounts.length]
    const votesNeeded = Math.ceil(n / 2)
    const extraVotes = votesNeeded - 1
    const keep = 100 - extraVotes
    const paidPirates = Array.from({ length: extraVotes }, (_, index) => 1 + index * 2)
    const unpaidPirates = Array.from({ length: n - 1 }, (_, index) => index + 1).filter(
      (pirate) => !paidPirates.includes(pirate),
    )
    const paidText = paidPirates.map((pirate) => `pirate ${pirate}`).join(', ')
    const unpaidText = unpaidPirates.length ? `${unpaidPirates.map((pirate) => `pirate ${pirate}`).join(', ')} get 0` : 'no other pirates get 0'

    return {
      ...base,
      setup: [
        `${n} pirates must divide 100 gold coins.`,
        `The pirates are numbered by seniority. Pirate ${n} is the most senior and proposes first. Pirate 1 is the least senior.`,
        `After pirate ${n} proposes a split, all ${n} pirates vote. Pirate ${n} gets to vote for their own proposal.`,
        `A proposal passes if at least half the pirates vote yes. With ${n} pirates, that means pirate ${n} needs ${votesNeeded} yes votes total.`,
        `If pirate ${n} fails to get ${votesNeeded} yes votes, pirate ${n} is fed to the sharks. Then pirate ${n - 1} becomes the most senior remaining pirate and makes a new proposal under the same rules.`,
        'A pirate votes yes only if the offer is better than what they expect to get after rejecting the proposal. If the money is tied, they prefer the proposer to be fed to the sharks.',
      ],
      prompt: `What should pirate ${n} offer in the very first proposal, assuming pirate ${n} wants the proposal to pass and wants to keep as many coins as possible?`,
      fieldNote: `Pirate ${n} already supplies one yes vote, so the job is to buy exactly ${extraVotes} more yes votes as cheaply as possible.`,
      mentorHint: `Work backward from the ${n - 1}-pirate game. The cheapest votes come from pirates who would get zero if pirate ${n} is fed to the sharks.`,
      answers: answerSet(
        `Pirate ${n} keeps ${keep}; ${paidText} each get 1; ${unpaidText}`,
        [
          [
            `Pirate ${n} keeps ${100 - (n - 1)}; every lower pirate gets 1`,
            `Pirate ${n} does not need to buy every lower pirate. They only need ${votesNeeded} total yes votes, including their own.`,
            `Count the minimum winning coalition first, then buy only the cheapest extra votes.`,
          ],
          [
            `Pirate ${n} keeps 99; pirate ${n - 1} gets 1; everyone else gets 0`,
            `Pirate ${n - 1} is expensive because they become proposer if pirate ${n} is fed to the sharks.`,
            'Do not buy the next proposer unless their fallback payoff is cheap.',
          ],
          [
            `No proposal can pass; pirate ${n} is fed to the sharks`,
            'Some lower pirates do worse in the fallback state, so they can be bought for one coin.',
            'A no vote is only attractive when the fallback is at least as good as the current offer.',
          ],
        ],
      ),
      solution: `Pirate ${n} needs ${votesNeeded} yes votes. Their own vote counts, so they need ${extraVotes} more. Working backward shows the cheapest voters are ${paidText}, who can each be offered 1 coin. Pirate ${n} keeps ${keep}.`,
    }
  }

  if (base.id === 4 || (base.topic === 'Game theory' && base.title.toLowerCase().includes('tiger'))) {
    const tigerCounts = [5, 6, 11, 20, 101]
    const n = tigerCounts[seed % tigerCounts.length]
    const eaten = n % 2 === 1

    return {
      ...base,
      setup: [
        `There are ${n} rational tigers and exactly one sheep on an island.`,
        'Any tiger may eat the sheep, but a tiger that eats the sheep immediately becomes a sheep.',
        'Tigers prefer eating sheep to eating grass, but survival matters more than lunch.',
        'Every tiger knows all the other tigers are rational and can reason forward.',
      ],
      prompt: `With ${n} tigers, will the original sheep be eaten?`,
      mentorHint: 'Check n = 1, 2, 3, 4. The answer flips every time you add one tiger.',
      answers: answerSet(
        eaten ? 'Yes, because the number of tigers is odd' : 'No, because the number of tigers is even',
        [
          [
            eaten ? 'No, because there are too many tigers' : 'Yes, because there are many tigers',
            'The total number is not enough by itself. The parity of the number is what controls the induction.',
            'Ask whether the tiger who eats would be safe after becoming a sheep.',
          ],
          [
            'Yes for every number above 3',
            'The pattern does not become permanently yes. It alternates forever.',
            'Each added tiger flips whether eating is safe.',
          ],
          [
            'No for every number above 3',
            'Five tigers is already a counterexample: eating leaves four tigers, where the sheep is safe.',
            'Build the cases upward instead of reasoning from crowd size.',
          ],
        ],
      ),
      solution: `The pattern alternates: 1 tiger eats, 2 do not, 3 do, 4 do not. Since ${n} is ${eaten ? 'odd' : 'even'}, the sheep ${eaten ? 'is' : 'is not'} eaten.`,
    }
  }

  if (base.topic === 'Probability') {
    const cases = [
      [2, 92, 88],
      [5, 85, 94],
      [10, 91, 89],
      [15, 93, 90],
      [25, 90, 93],
    ]
    const [prevalence, sensitivity, specificity] = cases[seed % cases.length]
    const p = prevalence / 100
    const sens = sensitivity / 100
    const spec = specificity / 100
    const posterior = (p * sens) / (p * sens + (1 - p) * (1 - spec))
    const rounded = Math.round(posterior * 1000) / 10

    return {
      ...base,
      setup: [
        `The event occurs in ${prevalence}% of cases.`,
        `The test is ${sensitivity}% sensitive, so it catches ${sensitivity}% of true cases.`,
        `The test is ${specificity}% specific, so ${100 - specificity}% of non-cases falsely test positive.`,
        'You observe one positive test result.',
      ],
      prompt: 'After a positive result, roughly what is the probability the event is actually present?',
      mentorHint: 'Use a crowd of 10,000 cases and count true positives and false positives.',
      answers: answerSet(
        `About ${rounded}%`,
        [
          [
            `About ${sensitivity}%`,
            'That is sensitivity, or P(positive | event), not P(event | positive).',
            'Reverse the conditioning by building the positive bucket.',
          ],
          [
            `About ${prevalence}%`,
            'That ignores the information from the positive test result.',
            'The posterior should update away from the base rate.',
          ],
          [
            'About 50%',
            'This guesses uncertainty instead of counting the true-positive and false-positive groups.',
            'Use counts so the false positives are visible.',
          ],
        ],
      ),
      solution: `P(event | positive) = (${p.toFixed(2)} x ${sens.toFixed(2)}) / [(${p.toFixed(2)} x ${sens.toFixed(2)}) + (${(1 - p).toFixed(2)} x ${(1 - spec).toFixed(2)})] = about ${rounded}%.`,
    }
  }

  if (base.topic === 'Expected value') {
    const cases = [
      [120, 25, 30],
      [150, 60, 40],
      [70, 18, 10],
      [90, 55, 50],
      [140, 50, 35],
    ]
    const [loss, gain, rainPercent] = cases[seed % cases.length]
    const ev = Math.round((1 - rainPercent / 100) * gain - (rainPercent / 100) * loss)

    return {
      ...base,
      setup: [
        'A trader is considering a one-period weather-linked trade.',
        `If it rains, the trader loses $${loss}.`,
        `If it does not rain, the trader gains $${gain}.`,
        `The probability of rain is ${rainPercent}%, so the probability of no rain is ${100 - rainPercent}%.`,
      ],
      prompt: 'What is the expected payoff of the trade?',
      mentorHint: 'Weight the loss and gain by their probabilities, then add them with signs.',
      answers: answerSet(
        `${ev >= 0 ? '+$' : '-$'}${Math.abs(ev)}`,
        [
          [
            `+$${Math.round((1 - rainPercent / 100) * gain)}`,
            'This only prices the no-rain upside and drops the loss branch.',
            'Expected value must include every possible outcome.',
          ],
          [
            `-$${Math.round((rainPercent / 100) * loss)}`,
            'This only prices the rainy downside and drops the gain branch.',
            'Add both weighted branches.',
          ],
          [
            `${gain - loss >= 0 ? '+$' : '-$'}${Math.abs(Math.round((gain - loss) / 2))}`,
            'This averages the two payoffs as if rain and no rain are equally likely.',
            'Use the stated probabilities, not a 50-50 shortcut.',
          ],
        ],
      ),
      solution: `Expected payoff = ${((100 - rainPercent) / 100).toFixed(2)} x ${gain} - ${(rainPercent / 100).toFixed(2)} x ${loss} = ${ev}.`,
    }
  }

  if (base.topic === 'Statistics') {
    const cases = [
      [4, 4],
      [9, 9],
      [16, 8],
      [25, 5],
      [36, 12],
    ]
    const [variance, n] = cases[seed % cases.length]
    const answer = variance / n

    return {
      ...base,
      setup: [
        `You have ${n} independent observations.`,
        `Each observation has variance ${variance}.`,
        'You take the simple average of those observations.',
      ],
      prompt: 'What is the variance of the sample mean?',
      fieldNote: 'Averaging independent noise reduces variance by a factor of n.',
      mentorHint: 'For independent observations, Var(mean) = Var(single observation) / n.',
      answers: answerSet(
        `${answer}`,
        [
          [
            `${variance}`,
            'That is the variance of one observation, not the average.',
            'Averaging independent draws reduces variance.',
          ],
          [
            `${Math.sqrt(answer)}`,
            'That is the standard deviation scale, not the variance scale.',
            'Do not take the square root unless the question asks for standard deviation.',
          ],
          [
            `${variance / (n * n)}`,
            'This keeps the n squared from one algebra step but forgets there are n independent terms in the sum.',
            'Expand Var((1/n) sum Xi): the n terms leave variance divided by n.',
          ],
        ],
      ),
      solution: `Var(mean) = ${variance} / ${n} = ${answer}.`,
    }
  }

  return base
}

export function rewordQuestion(base: Question, mode: number): Question {
  if (mode === 0) return base

  if (mode === 1) {
    const reworded = buildRewordedPrompt(base, 'plain')
    return {
      ...base,
      briefing:
        'Same question, asked more plainly. First identify the task, then use the facts in the setup to decide which answer follows.',
      setup: [
        `Question type: ${base.topic}.`,
        `Original idea: ${base.title} (${base.chapter}).`,
        ...(base.setup ?? []),
      ],
      prompt: reworded,
      fieldNote: `Breakdown version: ${base.fieldNote}`,
    }
  }

  const narrativeByTopic: Record<Topic, string> = {
    Mathematics:
      'Story version. Treat the diagram or expression like a small machine: list the givens, name the rule, and carry the arithmetic through without switching tracks halfway.',
    'Game theory':
      'Story version. Imagine every character can see the next version of the game before voting. Nobody votes from loyalty; they vote from their fallback.',
    Probability:
      'Story version. Picture a crowd being sorted into buckets. The answer lives inside the bucket of positive results, not inside the headline accuracy number.',
    'Expected value':
      'Story version. The trade has two possible futures. Price the whole thing by giving each future its probability-weighted share of the final average.',
    Statistics:
      'Story version. Think of the formula as a machine: identify the object being estimated, the noise around it, and how averaging or projection changes that noise.',
    ML:
      'Story version. Treat the model like a tool with failure modes. Ask what it optimizes, where it is tested, and what kind of mistake matters most.',
    Software:
      'Story version. Think like the person who will maintain the system later. Identify the constraint, choose the simplest useful tool, and name the tradeoff.',
    Research:
      'Story version. Read the claim like a scientist: what question is being asked, what evidence supports it, and what uncertainty remains?',
    'Climate Science':
      'Story version. Follow the climate system carefully: separate weather from climate, forcing from feedback, and uncertainty from ignorance.',
    Medical:
      'Story version. Start with safety, then evidence. Identify the risk, the diagnostic idea, and what decision the information supports.',
    'Series 86':
      'Story version. Think like an equity research associate: connect the financial concept to the company driver, then compute the cleanest version.',
    Regulatory:
      'Story version. Think like the person protecting launch from avoidable compliance bruises: clarify the pathway, evidence, claim, or record before anyone sprints.',
    'Clinical Research':
      'Story version. Picture the trial site on a busy day. The answer should protect the participant, preserve the protocol, and leave a clean evidence trail.',
    'Supply Chain':
      'Story version. Follow the flow of goods like water through a reef. Find the constraint, the uncertainty, or the tradeoff that changes the whole system.',
    'Technical Sales':
      'Story version. You are the bridge between a buyer with a real problem and a product with limits. Earn trust by diagnosing before pitching.',
    'UX Research':
      'Story version. The user is not on trial; the design is. Ask what behavior reveals, what evidence supports, and what assumption needs testing.',
    AP:
      'Story version. Treat this like a timed AP section: identify the tested concept fast, remove distractors, and justify the answer with one clear principle.',
    'A-level':
      'Story version. Work methodically: define the rule, apply the formula cleanly, and check units or logic before locking your answer.',
    Primary:
      'Story version. Keep it simple and concrete. Use clear clues, basic patterns, and one-step reasoning to choose the best answer.',
    Fun:
      'Story version. Treat the question like a playful elective with real structure underneath: spot the pattern, test the clue, and choose the answer that makes the system click.',
    University:
      'Story version. Approach it like a first serious seminar or problem set: name the concept, reduce the question to its core model, and eliminate sloppy interpretations.',
    'Career Skills':
      'Story version. Treat this like practical professional training: clarify the real objective, choose the soundest operating principle, and prefer action that scales.',
    'Quant Finance':
      'Story version. Treat the market or game like a precise mechanism: state your assumptions, apply the probability or finance model, and find the value that respects the constraints.',
    'Extension':
      'Story version. This is an advanced extension. Work methodically through the logic, avoiding shortcuts, and verify each step against the stated constraints.',
    Science:
      'Story version. Treat the question like a small experiment: name the system, the variable that changes, and the mechanism, then choose the answer that respects the conditions.',
    High:
      'Story version. Approach it like a focused high-school class: state the rule or definition first, then pick the option that exactly fits it.',
  }

  return {
    ...base,
    briefing: narrativeByTopic[base.topic],
    setup: base.setup,
    prompt: buildRewordedPrompt(base, 'teaching'),
    fieldNote: base.fieldNote,
  }
}

function buildRewordedPrompt(question: Question, style: 'plain' | 'teaching'): string {
  const original = normalizePromptForRewording(question.prompt)
  const lower = `${question.topic} ${question.chapter} ${question.title} ${question.prompt}`.toLowerCase()

  if (style === 'plain') {
    return plainRewording(question, original, lower)
  }

  return teachingRewording(question, original, lower)
}

function normalizePromptForRewording(prompt: string): string {
  return prompt
    .replace(/\s+/g, ' ')
    .replace(/\s+([?.!,;:])/g, '$1')
    .trim()
}

function plainRewording(question: Question, original: string, lower: string): string {
  const sentencePart = original.match(/^what is the (.+?) in the following sentence\?\s*(.+)$/i)
  if (sentencePart) {
    return `In this sentence, which answer identifies the ${sentencePart[1]}: ${sentencePart[2]}`
  }

  const trailingQuestion = trailingQuestionSentence(original)
  if (trailingQuestion && trailingQuestion !== original) {
    const context = original.slice(0, -trailingQuestion.length).trim()
    return `${context} ${rewriteQuestionStem(trailingQuestion, lower)}`
  }

  const definitionTarget = original.match(/^what is (?:the meaning of )?(.+?)\?*$/i)
  if (definitionTarget && !/\b(in|from|for|about)\b/i.test(definitionTarget[1])) {
    return `Which answer gives the best definition of ${definitionTarget[1]}?`
  }

  const findTarget = original.match(/^(.+?)\bfind ([^.?!]+)\.?$/i)
  if (findTarget) {
    return `Using the given information, which answer gives ${findTarget[2].trim()}?`
  }

  if (/^(what|which|why|how|when|where|who)\b/i.test(original)) {
    return rewriteQuestionStem(original, lower)
  }

  if (lower.includes('calculate') || lower.includes('how many') || lower.includes('how much') || lower.includes('solve')) {
    return `Find the requested value from this situation: ${original}`
  }

  if (question.topic === 'Primary') {
    return `Try this in simpler words: ${original} Which answer best matches the clues?`
  }

  return `Put another way: ${original} Which choice gives the best answer to that same task?`
}

function rewriteQuestionStem(original: string, lower: string): string {
  const withoutQuestionMark = original.replace(/\?+$/, '')

  const whenWhat = original.match(/^when\b(.+),\s*what\b(.+)/i)
  if (whenWhat) {
    return `While${whenWhat[1]}, which answer identifies ${whatIsToNounPhrase(whenWhat[2])}`
  }

  if (/^which of the following\b/i.test(original)) {
    return original.replace(/^which of the following\b/i, 'Pick the answer that')
  }

  if (/^which\b/i.test(original)) {
    const whichPart = original.match(/^which part is (.+)$/i)
    if (whichPart) {
      return `Which answer identifies the part that is ${whichPart[1]}`
    }
    return original.replace(/^which\b/i, 'Pick the answer that identifies which')
  }

  if (/^what is\b/i.test(original)) {
    return original.replace(/^what is\b/i, 'Which answer gives')
  }

  if (/^what does\b/i.test(original)) {
    return original.replace(/^what does\b/i, 'Which answer best explains what')
  }

  if (/^what should\b/i.test(original)) {
    return original.replace(/^what should\b/i, 'Which answer gives the best next step for what')
  }

  if (/^why\b/i.test(original)) {
    return `Which explanation best answers this why-question: ${withoutQuestionMark}?`
  }

  if (/^how many\b/i.test(original) || /^how much\b/i.test(original)) {
    return `Work out the quantity being asked for here: ${withoutQuestionMark}.`
  }

  if (/^how\b/i.test(original)) {
    return `Which choice best explains the process or method in this question: ${withoutQuestionMark}?`
  }

  if (/^when\b/i.test(original)) {
    return `Given that situation, which answer best fits: ${withoutQuestionMark}.`
  }

  if (/^where\b/i.test(original)) {
    return `Pick the answer that identifies the correct place, location, or part in this situation: ${withoutQuestionMark}.`
  }

  if (/^who\b/i.test(original)) {
    return `Pick the answer that identifies the person, group, or role described here: ${withoutQuestionMark}.`
  }

  if (lower.includes('best') || lower.includes('most')) {
    return `Choose the option that most directly fits this same situation: ${original}`
  }

  return `Answer the same question in a more direct form: ${original}`
}

function whatIsToNounPhrase(fragment: string): string {
  const match = fragment.match(/^ is (?:a|an|the) (.+)$/i)
  return match ? `the ${match[1]}` : `what${fragment}`
}

function trailingQuestionSentence(prompt: string): string | null {
  const match = prompt.match(/((?:What|Which|Why|How|When|Where|Who)\b[^?]*\?)$/)
  return match?.[1] ?? null
}

function teachingRewording(question: Question, original: string, lower: string): string {
  const sentencePart = original.match(/^what is the (.+?) in the following sentence\?\s*(.+)$/i)
  if (sentencePart) {
    return `Treat this as a close-reading check. In the sentence "${sentencePart[2]}", which answer names the ${sentencePart[1]}?`
  }

  const definitionTarget = original.match(/^what is (?:the meaning of )?(.+?)\?*$/i)
  if (definitionTarget && !/\b(in|from|for|about)\b/i.test(definitionTarget[1])) {
    return `Treat this as a definition check. Which answer states what ${definitionTarget[1]} means without adding extra conditions?`
  }

  if (lower.includes('critical thinking') || lower.includes('argument') || lower.includes('premise') || lower.includes('fallacy') || lower.includes('valid')) {
    return `Treat this as an argument map. What is the claim, what is the support, and which answer names the reasoning role or flaw correctly: ${original}`
  }

  if (lower.includes('electrical') || lower.includes('voltage') || lower.includes('breaker') || lower.includes('wire') || lower.includes('circuit')) {
    return `Ask it as a safety-and-function question. Which answer correctly describes what the electrical part or quantity does in this situation: ${original}`
  }

  if (question.topic === 'Mathematics' || lower.includes('math') || lower.includes('algebra') || lower.includes('calculus')) {
    return `Imagine you are solving this without answer choices. What rule, relationship, or calculation does this situation require: ${original}`
  }

  if (question.topic === 'Probability' || question.topic === 'Expected value' || lower.includes('probability') || lower.includes('expected value')) {
    return `Reframe the problem as a set of possible cases. From the situation described, which answer follows when the relevant cases are counted or weighted correctly: ${original}`
  }

  if (question.topic === 'Statistics' || lower.includes('study') || lower.includes('sample') || lower.includes('p-value') || lower.includes('confidence')) {
    return `Ask it as a data-reasoning question: what quantity, comparison, or claim is the evidence actually allowed to support here: ${original}`
  }

  if (question.topic === 'ML' || question.topic === 'Software' || lower.includes('model') || lower.includes('algorithm') || lower.includes('data structure')) {
    return `Treat this as an engineering decision. Given the constraint or failure mode in the prompt, which answer chooses the tool, metric, or action that best fits: ${original}`
  }

  if (question.topic === 'Research' || lower.includes('experiment') || lower.includes('control') || lower.includes('causal')) {
    return `Ask it like a research-methods reviewer: what design feature, limitation, or interpretation determines the strongest answer here: ${original}`
  }

  if (question.topic === 'Medical' || lower.includes('clinical') || lower.includes('patient') || lower.includes('diagnos')) {
    return `Turn it into a clinical judgment question: what is the key risk, finding, or decision point in this scenario, and which answer handles it best: ${original}`
  }

  if (question.topic === 'Career Skills' || lower.includes('roadmap') || lower.includes('client') || lower.includes('manager')) {
    return `Frame it as a practical workplace call: what outcome matters, what constraint is present, and which answer is the most defensible action: ${original}`
  }

  if (question.topic === 'Primary') {
    return `Read this like a teacher asking for the main clue. Which word, number, shape, or detail is the question asking you to notice: ${original}`
  }

  if (question.topic === 'Science' || question.topic === 'High' || lower.includes('biology') || lower.includes('chemistry') || lower.includes('physics')) {
    return `Ask it as a science reasoning question: what quantity, system, or mechanism is being tested, and which answer matches the conditions given: ${original}`
  }

  if (lower.includes('history') || lower.includes('government') || lower.includes('ethics') || lower.includes('philosophy') || lower.includes('argument')) {
    return `Treat this as a meaning-and-reasoning question. What claim, cause, principle, or institution is being tested, and which answer states it most accurately: ${original}`
  }

  if (question.topic === 'Fun') {
    return `Look past the playful surface and ask for the rule underneath. Which answer follows from the clue, pattern, or system in this question: ${original}`
  }

  return `Here is the same task from a teaching angle: what concept is being tested, what clue in the prompt matters most, and which answer fits that clue: ${original}`
}
