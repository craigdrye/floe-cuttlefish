import { answerSet } from '../data/questionCatalog/base'
import type { Answer, Question, QuestionCatalog, QuestionKind, Topic } from '../data/questionCatalog'
import type { AgeGroup } from '../data/ageCatalog'

type TrackLike = {
  id: string
  title: string
  discipline: string
  ageGroup: AgeGroup
  skills: string[]
}

const QUIZ_LENGTH = 300

const chapterNodes = ['Dock', 'Reef', 'Cove', 'Lagoon', 'Jetty', 'Harbor', 'Swamp', 'Lookout'] as const
const questionTitles = ['Chaos check', 'Constraint dodge', 'Assumption trap', 'Boss puzzle', 'Signal check', 'Debrief duel'] as const

function topicForTrack(track: TrackLike): Topic {
  if (track.id === 'quant') return 'Quant Finance'
  if (track.id.startsWith('ap')) return 'AP'
  if (track.id.startsWith('alevel')) return 'A-level'
  if (track.discipline === 'Mathematics') return 'Mathematics'
  if (track.ageGroup === 'primary') return 'Primary'
  if (track.ageGroup === 'high') return 'Fun'
  if (track.ageGroup === 'university') return 'University'
  return 'Career Skills'
}

function generatedQuestionId(track: TrackLike, index: number) {
  const seed = hashString(`floe-track-${track.id}`)
  return 1000000 + (seed % 100000) * 100 + index
}

function generateTrackQuestions(track: TrackLike, startIndex: number, count: number): Question[] {
  const primarySkill = track.skills[0] ?? track.discipline
  const secondarySkill = track.skills[1] ?? track.discipline
  const tertiarySkill = track.skills[2] ?? track.discipline
  const topic = topicForTrack(track)

  return Array.from({ length: count }, (_, offset) => {
    const index = startIndex + offset
    const step = index + 1
    const chapter = `${track.title} ${chapterNodes[index % chapterNodes.length]}`
    const title = `${questionTitles[index % questionTitles.length]} ${step}`
    const kind: QuestionKind = index % 10 === 9 ? 'deep' : 'quick'
    const skillFocus = track.skills[index % Math.max(track.skills.length, 1)] ?? track.discipline

    const scoreStart = 45 + ((index * 3) % 30)
    const scoreEnd = 56 + ((index * 3) % 30)
    const scoreGain = scoreEnd - scoreStart
    const mode = index % 5

    const setupVariants = [
      [
        `You are in the ${track.title} quiz path, working on ${skillFocus.toLowerCase()}.`,
        `A learner has a messy first instinct and needs to know what principle to apply before doing anything flashy.`,
        'The best answer should be the move that still makes sense after you test it against the actual problem.',
      ],
      [
        `A teammate says, "We can skip structure and wing it for ${primarySkill.toLowerCase()}."`,
        `You need to respond with the soundest professional or academic move, not the fastest sounding one.`,
        'Pick the answer that would survive review from someone competent and slightly judgmental.',
      ],
      [
        `A progress tracker in ${secondarySkill.toLowerCase()} moves from ${scoreStart} to ${scoreEnd}.`,
        'The learner is being asked for the absolute gain in points, not a percentage and not the final score alone.',
        'This is a straightforward quantitative question hiding inside a quiz wrapper.',
      ],
      [
        `Two plans are on the table for a ${track.discipline.toLowerCase()} checkpoint in ${track.title}.`,
        'One plan sounds polished but vague. The other is boring but measurable.',
        'Choose the option that creates the cleanest decision path.',
      ],
      [
        `You just missed a question in ${tertiarySkill.toLowerCase()}.`,
        'A good debrief should help you spot the broken assumption instead of just making you feel scolded.',
        'Choose the question that would actually improve the next attempt.',
      ],
    ] as const

    const promptVariants = [
      `Before solving fully, what is the strongest first move for this ${skillFocus.toLowerCase()} problem?`,
      `What is the strongest response to that suggestion?`,
      'What is the absolute gain in points?',
      `Which plan should win, and why?`,
      `Which debrief question gives the best learning signal?`,
    ] as const

    const fieldNoteVariants = [
      `Good ${track.title.toLowerCase()} answers usually start with the right principle, not the most confident performance.`,
      `Structure is not bureaucracy here. It is how you stop fake certainty from driving the result.`,
      'Absolute gain means end minus start. A surprising number of brains try to answer a different question.',
      `When two plans compete, the winner is usually the one with clearer success criteria and cleaner downside management.`,
      'A useful debrief targets the faulty assumption, not just the visible mistake.',
    ] as const

    const mentorHintVariants = [
      `Name the concept first: ${skillFocus.toLowerCase()}. Then ask which option actually applies it.`,
      `The strongest answer should still look good if someone asks, "How would you defend that step by step?"`,
      'Do the subtraction directly. Do not convert this into a percentage unless the question explicitly asks for one.',
      'Pick the plan that is measurable, testable, and least dependent on vibes.',
      'The best debrief question points at the mechanism that failed, not at your feelings about the failure.',
    ] as const

    const correctOptions = [
      `Define the constraint, apply ${skillFocus.toLowerCase()}, then verify against the scenario`,
      `No. Keep the structure, test assumptions, and use evidence before conclusions`,
      `${scoreGain} points`,
      `The plan with clear success criteria, measurable risk, and explicit owners`,
      `What assumption failed, and what signal would catch it earlier next time?`,
    ] as const

    const wrongOptions: [string, string, string][][] = [
      [
        [
          'Start with fancy jargon and hope confidence does the rest',
          'Style can sound convincing but does not replace method.',
          'Use a reproducible process tied to the stated constraint.',
        ],
        [
          'Skip the constraint and optimize whatever metric looks coolest',
          'Unconstrained optimization often solves the wrong problem.',
          'Name the objective and limits before optimizing.',
        ],
        [
          'Pick the option with the loudest vibe and move on',
          'Vibes are not a control framework.',
          'Choose the option that can be defended with logic and evidence.',
        ],
      ],
      [
        [
          'Agree because speed always beats structure',
          'Speed without structure creates expensive rework.',
          'Keep a lightweight structure so speed is still reliable.',
        ],
        [
          'Ignore assumptions and just memorize one script',
          'Rigid scripts fail when context shifts.',
          'Use principles plus scenario checks.',
        ],
        [
          'Escalate panic and skip the diagnosis',
          'Panic is not a diagnostic method.',
          'Stabilize first, then examine what changed.',
        ],
      ],
      [
        [
          `${scoreGain + 5} points`,
          'This overstates the change.',
          'Absolute gain is end minus start.',
        ],
        [
          `${Math.max(scoreGain - 4, 1)} points`,
          'This understates the change.',
          'Compute the difference exactly.',
        ],
        [
          `${scoreEnd} points`,
          'This is the final level, not the increase.',
          'Gain means delta, not total.',
        ],
      ],
      [
        [
          'The plan with the coolest slide deck title',
          'Presentation quality is not the decision rule.',
          'Compare based on outcomes, risks, and ownership.',
        ],
        [
          'The plan that avoids all measurement to reduce stress',
          'No measurement means no feedback loop.',
          'Pick the plan that can be observed and corrected.',
        ],
        [
          'The plan with maximum scope and zero sequencing',
          'Unsequenced scope usually collapses execution.',
          'Prefer staged plans with explicit checkpoints.',
        ],
      ],
      [
        [
          'How can we sound more confident next time without changing anything?',
          'Confidence tone does not fix a broken process.',
          'Ask process questions that lead to better decisions.',
        ],
        [
          'Who can we blame so the postmortem feels complete?',
          'Blame closes learning loops.',
          'Focus on mechanism, signal, and prevention.',
        ],
        [
          'Can we skip retros forever and trust luck?',
          'Luck is not an operating model.',
          'Use debriefs to improve the next iteration.',
        ],
      ],
    ]

    const correct = correctOptions[mode]
    const wrong = wrongOptions[mode]

    return ensureSixAnswerChoices({
      id: generatedQuestionId(track, index),
      kind,
      topic,
      title,
      chapter,
      briefing: `Sergeant Ink has opened the ${track.title} simulator again. This stop is about ${skillFocus.toLowerCase()}, and the right answer should still make sense after you explain it out loud.`,
      setup: [...setupVariants[mode]],
      prompt: promptVariants[mode],
      fieldNote: fieldNoteVariants[mode],
      mentorHint: mentorHintVariants[mode],
      answers: answerSet(correct, wrong),
      solution: correct,
      xp: kind === 'deep' ? 18 : 10,
    })
  })
}

export function buildTrackQuiz(
  track: TrackLike,
  courseQuestionCatalog: QuestionCatalog,
) {
  const base = courseQuestionCatalog[track.id] ?? []
  if (base.length === 0) {
    throw new Error(`No questions found for track "${track.id}". Check that the catalog is loaded correctly.`)
  }
  return base.slice(0, QUIZ_LENGTH).map(ensureSixAnswerChoices)
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

export function normalizeQuestionCatalog(questionCatalog: Record<string, Question[]>) {
  return Object.fromEntries(
    Object.entries(questionCatalog).map(([key, value]) => [key, value.map(ensureSixAnswerChoices)]),
  ) as Record<string, Question[]>
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
    return {
      ...base,
      briefing:
        'Same question, stripped down. First identify what is being asked, then list the givens, then choose the answer that follows from those givens.',
      setup: [
        `Question type: ${base.topic}.`,
        `Goal: ${base.prompt}`,
        ...(base.setup ?? []),
      ],
      prompt:
        'Using only the setup above, which answer is correct? Ignore which answer feels most familiar and follow the quantities step by step.',
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
  }

  return {
    ...base,
    briefing: narrativeByTopic[base.topic],
    setup: base.setup,
    prompt: `In plain language: ${base.prompt}`,
    fieldNote: `Narrative version: ${base.fieldNote}`,
  }
}
