type Topic = 'Game theory' | 'Probability' | 'Expected value' | 'Statistics'
type QuestionKind = 'quick' | 'deep'

type Misconception = {
  tempting: string
  flaw: string
  reframe: string
}

type Answer = {
  id: string
  label: string
  correct: boolean
  misconceptions?: Misconception[]
}

type QuantQuestion = {
  id: number
  kind: QuestionKind
  topic: Topic
  title: string
  chapter: string
  briefing: string
  prompt: string
  fieldNote: string
  mentorHint: string
  answers: Answer[]
  solution: string
  xp: number
}

type WrongAnswer = {
  label: string
  tempting: string
  flaw: string
  reframe: string
}

type DraftQuestion = Omit<QuantQuestion, 'id'>

const answerIds = ['a', 'b', 'c', 'd'] as const

function rotate<T>(values: T[], offset: number) {
  const shift = offset % values.length
  return [...values.slice(shift), ...values.slice(0, shift)]
}

function buildAnswers(correctLabel: string, wrongAnswers: WrongAnswer[], seed: number): Answer[] {
  const ordered = rotate(
    [
      { label: correctLabel, correct: true },
      ...wrongAnswers.map((wrong) => ({
        label: wrong.label,
        correct: false,
        misconceptions: [
          {
            tempting: wrong.tempting,
            flaw: wrong.flaw,
            reframe: wrong.reframe,
          },
        ],
      })),
    ],
    seed,
  )

  return ordered.map((answer, index) => ({
    id: answerIds[index],
    ...answer,
  }))
}

function uniqueNumbers(correct: number, values: number[]) {
  const used = new Set<number>([correct])
  return values.map((value, index) => {
    let next = value
    while (used.has(next)) {
      next += index + 3
    }
    used.add(next)
    return next
  })
}

function formatMoney(value: number) {
  return `${value >= 0 ? '+$' : '-$'}${Math.abs(value)}`
}

function formatPercent(value: number) {
  const rounded = Math.round(value * 10) / 10
  return Number.isInteger(rounded) ? `${rounded}%` : `${rounded.toFixed(1)}%`
}

function makeExpectedValueQuestions(): DraftQuestion[] {
  const cases = [
    ['Rain Desk', 'Umbrella tape', 0.2, 80, 30],
    ['Rain Desk', 'Monsoon carry', 0.3, 120, 25],
    ['Rain Desk', 'Storm hedge', 0.4, 150, 60],
    ['Rain Desk', 'Cloudy gamma', 0.1, 70, 18],
    ['Rain Desk', 'Typhoon spread', 0.5, 90, 55],
    ['Rain Desk', 'Delta drizzle', 0.35, 140, 50],
    ['Rain Desk', 'Thunder book', 0.25, 110, 40],
    ['Rain Desk', 'Harbor variance', 0.45, 130, 85],
    ['Rain Desk', 'Splash arb', 0.15, 95, 22],
    ['Rain Desk', 'Mist carry', 0.55, 160, 95],
    ['Rain Desk', 'Breakwater skew', 0.28, 125, 45],
    ['Rain Desk', 'Wet floor ETF', 0.32, 105, 36],
    ['Rain Desk', 'Foam ladder', 0.18, 75, 24],
    ['Rain Desk', 'Shoreline basis', 0.42, 180, 70],
    ['Rain Desk', 'Marsh futures', 0.22, 90, 33],
    ['Rain Desk', 'Storm cellar note', 0.48, 135, 80],
    ['Rain Desk', 'Drizzle rebate', 0.12, 65, 16],
    ['Rain Desk', 'Harpoon carry', 0.38, 155, 58],
    ['Rain Desk', 'Ink spill swap', 0.27, 115, 41],
    ['Rain Desk', 'Lagoon beta', 0.33, 145, 52],
    ['Rain Desk', 'Cloud pier ticket', 0.24, 85, 28],
    ['Rain Desk', 'Squall collar', 0.46, 170, 88],
    ['Rain Desk', 'Reef parity bet', 0.14, 72, 19],
    ['Rain Desk', 'Gale carry trade', 0.36, 150, 54],
  ] as const

  return cases.map(([chapter, title, lossProb, loss, gain], index) => {
    const expected = Math.round((1 - lossProb) * gain - lossProb * loss)
    const [positiveOnly, downsideOnly, badAverage] = uniqueNumbers(expected, [
      Math.round((1 - lossProb) * gain),
      -Math.round(lossProb * loss),
      Math.round((gain - loss) / 2),
    ])

    return {
      kind: index % 8 === 7 ? 'deep' : 'quick',
      topic: 'Expected value',
      chapter,
      title,
      briefing:
        'The desk is damp, the payoff sheet is wrinkled, and the interviewer is checking whether you can price a simple lottery without writing fan fiction about market sentiment.',
      prompt: `A trade loses $${loss} with probability ${Math.round(lossProb * 100)}% and gains $${gain} otherwise. What is the expected value?`,
      fieldNote:
        'Expected value is a weighted average. The common outcome does not automatically dominate if the rare outcome is larger.',
      mentorHint: 'Multiply each payoff by its probability, then add the terms with their signs intact.',
      answers: buildAnswers(
        formatMoney(expected),
        [
          {
            label: formatMoney(positiveOnly),
            tempting: 'This keeps only the upside branch, which is often the branch people emotionally prefer.',
            flaw: 'Expected value must include both branches. Ignoring the loss branch turns arithmetic into wishcasting.',
            reframe: 'Weight every mutually exclusive outcome by its probability, then sum them.',
          },
          {
            label: formatMoney(downsideOnly),
            tempting: 'This notices the bad branch but forgets the gain branch.',
            flaw: 'Pricing only the downside is as incomplete as pricing only the upside.',
            reframe: 'Expected value is one line with both terms: gain term plus loss term.',
          },
          {
            label: formatMoney(badAverage),
            tempting: 'This treats the two payoff numbers like equal roommates instead of probability-weighted outcomes.',
            flaw: 'A simple average only works when outcomes are equally likely. They are not.',
            reframe: 'Use the actual probabilities, not a 50-50 shortcut.',
          },
        ],
        index,
      ),
      solution: `Expected value = ${(1 - lossProb).toFixed(2)} x ${gain} - ${lossProb.toFixed(2)} x ${loss} = ${expected}.`,
      xp: index % 8 === 7 ? 18 : 10,
    }
  })
}

function makeBayesQuestions(): DraftQuestion[] {
  const cases = [
    [0.01, 0.9, 0.9],
    [0.02, 0.92, 0.88],
    [0.03, 0.95, 0.9],
    [0.05, 0.85, 0.94],
    [0.08, 0.9, 0.93],
    [0.12, 0.88, 0.91],
    [0.15, 0.93, 0.9],
    [0.04, 0.97, 0.85],
    [0.06, 0.89, 0.92],
    [0.1, 0.91, 0.89],
    [0.07, 0.95, 0.87],
    [0.09, 0.86, 0.94],
    [0.11, 0.9, 0.9],
    [0.13, 0.92, 0.88],
    [0.14, 0.94, 0.86],
    [0.16, 0.87, 0.93],
    [0.18, 0.9, 0.91],
    [0.2, 0.85, 0.95],
    [0.22, 0.88, 0.92],
    [0.24, 0.91, 0.9],
    [0.26, 0.93, 0.89],
    [0.28, 0.89, 0.94],
    [0.3, 0.9, 0.93],
    [0.32, 0.92, 0.91],
  ] as const

  return cases.map(([prevalence, sensitivity, specificity], index) => {
    const numerator = prevalence * sensitivity
    const denominator = numerator + (1 - prevalence) * (1 - specificity)
    const posterior = (numerator / denominator) * 100
    const [naiveSensitivity, baseRate, shrugMiddle] = uniqueNumbers(Math.round(posterior * 10), [
      Math.round(sensitivity * 1000),
      Math.round(prevalence * 1000),
      Math.round(((sensitivity + specificity) * 50) * 10),
    ])

    return {
      kind: index % 8 === 5 ? 'deep' : 'quick',
      topic: 'Probability',
      chapter: 'Base Rate Swamp',
      title: `Posterior check ${index + 1}`,
      briefing:
        'The interviewer has hidden Bayes inside a medical-test costume again. The only escape route is counting true positives and false positives separately.',
      prompt: `An event has prevalence ${Math.round(prevalence * 100)}%. A test has sensitivity ${Math.round(sensitivity * 100)}% and specificity ${Math.round(specificity * 100)}%. You test positive. Roughly what is P(event | positive)?`,
      fieldNote:
        'The base rate matters because false positives come from a much larger pool when the event is rare.',
      mentorHint:
        'Imagine 10,000 observations. Count positives from the event group and false positives from the non-event group.',
      answers: buildAnswers(
        formatPercent(posterior),
        [
          {
            label: formatPercent(naiveSensitivity / 10),
            tempting: 'Sensitivity sounds like the headline number, so it is easy to confuse it with the posterior.',
            flaw: 'Sensitivity is P(positive | event), not P(event | positive). Those are different conditional probabilities.',
            reframe: 'Flip the conditioning by rebuilding the positive bucket from both populations.',
          },
          {
            label: formatPercent(baseRate / 10),
            tempting: 'This keeps the prior and acts as if the test told you almost nothing.',
            flaw: 'A decent test should update the prior. The update may be modest, but it is not zero.',
            reframe: 'Use Bayes or a count table so the evidence actually moves the probability.',
          },
          {
            label: formatPercent(shrugMiddle / 10),
            tempting: 'A middle-ish answer can feel emotionally safe when the problem is hard.',
            flaw: 'Bayes is not solved by vibes. The positive pool has a precise composition.',
            reframe: 'Count true positives and false positives explicitly, then divide.',
          },
        ],
        index + 1,
      ),
      solution: `Posterior = (${prevalence.toFixed(2)} x ${sensitivity.toFixed(2)}) / [(${prevalence.toFixed(2)} x ${sensitivity.toFixed(2)}) + (${(1 - prevalence).toFixed(2)} x ${(1 - specificity).toFixed(2)})] = ${formatPercent(posterior)}.`,
      xp: index % 8 === 5 ? 16 : 10,
    }
  })
}

function makeStatisticsQuestions(): DraftQuestion[] {
  const varianceCases = [4, 9, 16, 25]
  const sampleSizes = [4, 9, 16, 25]

  const varianceQuestions = varianceCases.map((variance, index) => {
    const n = sampleSizes[index]
    return {
      kind: 'quick' as const,
      topic: 'Statistics' as const,
      chapter: 'Regression Dojo',
      title: `Sample mean variance ${index + 1}`,
      briefing:
        'The whiteboard has become hostile and is now asking for the variance of an average. That is still just algebra, not theology.',
      prompt: `If independent observations each have variance ${variance}, what is the variance of their sample mean when n = ${n}?`,
      fieldNote: 'Averaging independent noise shrinks variance by a factor of n.',
      mentorHint: 'For independent draws, Var(mean) = Var(single observation) / n.',
      answers: buildAnswers(
        `${variance / n}`,
        [
          {
            label: `${variance}`,
            tempting: 'This remembers the single-observation variance but forgets the averaging step.',
            flaw: 'The sample mean is less noisy than one draw.',
            reframe: 'Divide the variance by n for independent observations.',
          },
          {
            label: `${Math.sqrt(variance / n)}`,
            tempting: 'This mixes up variance and standard deviation.',
            flaw: 'Standard deviation is the square root of variance. The question asked for variance.',
            reframe: 'Keep track of which scale you are using before taking square roots.',
          },
          {
            label: `${variance / (n * n)}`,
            tempting: 'There is a real n squared inside the algebra at one step, so this wrong answer feels close.',
            flaw: 'The covariance expansion leaves one net factor of n in the denominator, not n squared.',
            reframe: 'Write mean = (1/n) sum Xi and expand Var(mean) carefully.',
          },
        ],
        index,
      ),
      solution: `Var(mean) = ${variance} / ${n} = ${variance / n}.`,
      xp: 10,
    }
  })

  const errorQuestions = [16, 25, 36, 49].map((oldN, index) => {
    const newN = oldN * 4
    return {
      kind: 'quick' as const,
      topic: 'Statistics' as const,
      chapter: 'Regression Dojo',
      title: `Standard error scaling ${index + 1}`,
      briefing:
        'A recruiter has asked for intuition instead of formulas. That is dangerous, because intuition without scaling laws usually hallucinates.',
      prompt: `A sample mean is estimated from ${oldN} independent observations. If you increase the sample size to ${newN}, what happens to its standard error, all else equal?`,
      fieldNote: 'Standard error scales like 1 / sqrt(n).',
      mentorHint: 'Quadrupling n multiplies sqrt(n) by 2.',
      answers: buildAnswers(
        'It is cut in half',
        [
          {
            label: 'It stays the same',
            tempting: 'The estimator is the same object, so it is easy to miss the role of sample size.',
            flaw: 'Precision improves with more independent data.',
            reframe: 'Track the 1 / sqrt(n) scaling explicitly.',
          },
          {
            label: 'It is quartered',
            tempting: 'This incorrectly moves the variance scaling directly onto the standard error.',
            flaw: 'Variance scales with 1 / n; standard error scales with 1 / sqrt(n).',
            reframe: 'Take the square root at the end, not at the start.',
          },
          {
            label: 'It doubles',
            tempting: 'This gets the direction exactly backward.',
            flaw: 'More independent data reduces noise, it does not amplify it.',
            reframe: 'Remember that averaging more draws stabilizes the estimate.',
          },
        ],
        index + 1,
      ),
      solution: 'Standard error is proportional to 1 / sqrt(n). Quadrupling n doubles the denominator, so the standard error is cut in half.',
      xp: 10,
    }
  })

  const transformQuestions = [
    ['X', '3X + 5'],
    ['returns', '2 x returns - 7'],
    ['signal', '5 x signal + 1'],
    ['spread', '4 x spread + 12'],
  ] as const

  const correlationQuestions = transformQuestions.map(([base, transformed], index) => ({
    kind: index === 3 ? 'deep' as const : 'quick' as const,
    topic: 'Statistics' as const,
    chapter: 'Regression Dojo',
    title: `Correlation invariance ${index + 1}`,
    briefing:
      'The algebra is trying to see whether you know what correlation notices and what it politely ignores.',
    prompt: `If you replace ${base} with ${transformed}, what happens to its correlation with Y, assuming the multiplier is positive?`,
    fieldNote: 'Correlation ignores shifts and positive rescalings.',
    mentorHint: 'Adding a constant does nothing to covariance. Positive scaling cancels after standardization.',
    answers: buildAnswers(
      'It stays the same',
      [
        {
          label: 'It changes sign',
          tempting: 'People often associate any transformation with a changed sign.',
          flaw: 'Only a negative multiplier flips the sign of correlation.',
          reframe: 'Check the sign of the scale factor before changing the sign of the correlation.',
        },
        {
          label: 'It becomes zero',
          tempting: 'Centering and rescaling can sound like they erase the original signal.',
          flaw: 'They standardize magnitude, not dependence structure.',
          reframe: 'Correlation is built to survive positive affine transformations.',
        },
        {
          label: 'There is not enough information',
          tempting: 'The statement can feel too general if you do not remember the invariance rule.',
          flaw: 'This is one of the few places where the rule is exact.',
          reframe: 'Positive affine transformations preserve correlation exactly.',
        },
      ],
      index + 2,
    ),
    solution: 'Correlation is unchanged by adding a constant and by multiplying by a positive constant.',
    xp: index === 3 ? 16 : 10,
  }))

  const covarianceQuestions = [1, 2, 3, 4].map((index) => ({
    kind: 'quick' as const,
    topic: 'Statistics' as const,
    chapter: 'Regression Dojo',
    title: `Independence and covariance ${index}`,
    briefing:
      'This is the sort of fact interviewers ask because it is simple, foundational, and surprisingly easy to blur under pressure.',
    prompt: 'If X and Y are independent and both have finite second moments, what is Cov(X, Y)?',
    fieldNote: 'Independence implies E[XY] = E[X]E[Y].',
    mentorHint: 'Write Cov(X, Y) = E[XY] - E[X]E[Y].',
    answers: buildAnswers(
      '0',
      [
        {
          label: '1',
          tempting: 'A lot of people reach for a default constant when they know the answer is simple but not which simple.',
          flaw: 'Covariance depends on centering, not on a default normalization.',
          reframe: 'Expand the definition and cancel the terms.',
        },
        {
          label: 'Var(X) + Var(Y)',
          tempting: 'Variance and covariance often appear in the same formulas, so this can feel nearby.',
          flaw: 'Covariance is a cross term, not the sum of the marginal variances.',
          reframe: 'Keep the cross term separate from the marginal variance terms.',
        },
        {
          label: 'It must be positive',
          tempting: 'Independence can feel like a clean positive relationship instead of no linear relationship.',
          flaw: 'Independence kills the covariance term rather than forcing it positive.',
          reframe: 'Use the definition directly instead of inferring a sign.',
        },
      ],
      index + 3,
    ),
    solution: 'Independence implies E[XY] = E[X]E[Y], so Cov(X, Y) = E[XY] - E[X]E[Y] = 0.',
    xp: 10,
  }))

  const slopeQuestions = [
    'positive',
    'negative',
    'positive',
    'negative',
  ] as const

  const olsSignQuestions = slopeQuestions.map((sign, index) => ({
    kind: 'quick' as const,
    topic: 'Statistics' as const,
    chapter: 'Regression Dojo',
    title: `OLS sign check ${index + 1}`,
    briefing:
      'The interviewer wants a one-line sanity check on regression geometry. This is where covariance quietly runs the room.',
    prompt: `In a simple regression of Y on X with Var(X) > 0, if Cov(X, Y) is ${sign}, what is the sign of the OLS slope?`,
    fieldNote: 'In simple regression, beta hat = Cov(X, Y) / Var(X).',
    mentorHint: 'Var(X) is positive, so it cannot flip the sign.',
    answers: buildAnswers(
      sign,
      [
        {
          label: sign === 'positive' ? 'negative' : 'positive',
          tempting: 'Sign flips are easy to hallucinate when the formula is not in front of you.',
          flaw: 'A positive denominator cannot reverse the sign of the numerator.',
          reframe: 'Read the formula beta hat = Cov(X, Y) / Var(X) literally.',
        },
        {
          label: 'zero',
          tempting: 'Zero can feel safe when you are unsure about direction.',
          flaw: 'The slope is zero only when the covariance is zero.',
          reframe: 'Match the sign of the covariance unless the covariance is exactly zero.',
        },
        {
          label: 'Cannot be determined',
          tempting: 'This sounds careful, but the formula actually pins the answer down completely.',
          flaw: 'Once you know the covariance sign and Var(X) > 0, the sign is determined.',
          reframe: 'Use the formula instead of treating the question as qualitative.',
        },
      ],
      index,
    ),
    solution: `The OLS slope is Cov(X, Y) / Var(X). Since Var(X) > 0, the slope has the same sign as Cov(X, Y), so it is ${sign}.`,
    xp: 10,
  }))

  const lawQuestions = [1, 2, 3, 4].map((index) => ({
    kind: index === 4 ? 'deep' as const : 'quick' as const,
    topic: 'Statistics' as const,
    chapter: 'Regression Dojo',
    title: `Limit law sanity check ${index}`,
    briefing:
      'You are being asked to separate the law of large numbers from the central limit theorem before the whiteboard files a complaint.',
    prompt: 'Which statement is true for IID observations with finite variance as sample size grows?',
    fieldNote: 'LLN concerns convergence of the sample mean. CLT concerns the scaled distribution of its error.',
    mentorHint: 'One theorem says the sample mean settles down. The other says the normalized error becomes approximately normal.',
    answers: buildAnswers(
      'The sample mean converges to the true mean, and the centered sample mean scaled by sqrt(n) becomes approximately normal',
      [
        {
          label: 'The sample mean becomes exactly normal for every n',
          tempting: 'The CLT gets simplified into a stronger statement than it actually gives.',
          flaw: 'The approximation improves with n, but it is not exact for every finite sample.',
          reframe: 'Keep the word approximately, and keep the sqrt(n) scaling.',
        },
        {
          label: 'The sample mean converges to the sample variance',
          tempting: 'Both statistics stabilize, so it is easy to mix up what each converges to.',
          flaw: 'The sample mean targets the population mean, not another sample statistic.',
          reframe: 'Track the target parameter of each estimator separately.',
        },
        {
          label: 'Neither theorem needs finite variance',
          tempting: 'People often remember only IID and forget the moment conditions.',
          flaw: 'The standard CLT here relies on finite variance.',
          reframe: 'Keep the regularity conditions attached to the theorem.',
        },
      ],
      index,
    ),
    solution:
      'The law of large numbers says the sample mean converges to the population mean. The central limit theorem says sqrt(n)(mean - population mean) becomes approximately normal under the usual finite-variance assumptions.',
    xp: index === 4 ? 16 : 10,
  }))

  return [
    ...varianceQuestions,
    ...errorQuestions,
    ...correlationQuestions,
    ...covarianceQuestions,
    ...olsSignQuestions,
    ...lawQuestions,
  ]
}

function makeGameTheoryQuestions(): DraftQuestion[] {
  const tigerCases = [5, 6, 7, 8, 9, 10, 25, 26, 51, 52, 99, 100]

  const tigerQuestions = tigerCases.map((n, index) => ({
    kind: index % 6 === 5 ? 'deep' as const : 'quick' as const,
    topic: 'Game theory' as const,
    chapter: 'Boss Puzzle Lagoon',
    title: `Tiger parity ${index + 1}`,
    briefing:
      'The island still has terrible governance and excellent interview utility. The only thing that matters is whether eating leaves an even or odd number of tigers behind.',
    prompt: `There are ${n} rational tigers and one sheep. A tiger that eats the sheep becomes a sheep. Will the sheep be eaten?`,
    fieldNote: 'The answer alternates with parity: odd tiger counts eat, even tiger counts do not.',
    mentorHint: 'Solve 1, 2, 3, 4 first and then stop pretending the pattern is mysterious.',
    answers: buildAnswers(
      n % 2 === 1 ? 'Yes, because the number of tigers is odd' : 'No, because the number of tigers is even',
      [
        {
          label: n % 2 === 1 ? 'No, because there are too many tigers' : 'Yes, because there are many tigers',
          tempting: 'Large numbers invite hand-wavy danger stories.',
          flaw: 'The game is controlled by one-step recursion, not by vibes about crowd size.',
          reframe: 'Reduce the problem to the n - 1 case after one tiger eats.',
        },
        {
          label: 'Yes for every n above 3',
          tempting: 'Once the pattern starts moving it can look monotone instead of alternating.',
          flaw: 'The parity flip never stops. Adding one tiger flips the answer.',
          reframe: 'Check what happens after one tiger eats and becomes a sheep.',
        },
        {
          label: 'No for every n above 3',
          tempting: 'More predators can feel like more risk for the first tiger to move.',
          flaw: 'Sometimes the transformed sheep is safe precisely because the remaining tiger count is even.',
          reframe: 'Track the post-move state, not just the pre-move headcount.',
        },
      ],
      index,
    ),
    solution: `The pattern alternates: 1 tiger eats, 2 do not, 3 do, 4 do not. Therefore ${n} tigers ${n % 2 === 1 ? 'do' : 'do not'} eat the sheep because ${n} is ${n % 2 === 1 ? 'odd' : 'even'}.`,
    xp: index % 6 === 5 ? 18 : 11,
  }))

  const pirateCases = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  const pirateQuestions = pirateCases.map((n, index) => {
    const keep = 100 - Math.floor((n - 1) / 2)
    const [tooManyVotes, offByOne, impossiblePanic] = uniqueNumbers(keep, [
      100 - (n - 1),
      100 - Math.ceil((n - 1) / 2),
      100 - Math.floor((n - 2) / 2),
    ])

    return {
      kind: index % 5 === 4 ? 'deep' as const : 'quick' as const,
      topic: 'Game theory' as const,
      chapter: 'Dockside Game Theory',
      title: `Pirate vote buy ${index + 1}`,
      briefing:
        'The pirates are still a hiring committee with knives. The proposer only buys the minimum number of cheapest votes and keeps the rest.',
      prompt: `With ${n} perfectly rational pirates splitting 100 coins under the 50% approval rule, how many coins does the most senior pirate keep in the final accepted proposal?`,
      fieldNote:
        'The proposer needs only the minimum passing coalition and buys pirates who would get zero in the next state.',
      mentorHint:
        'The proposer buys one-coin votes from every other lower pirate and keeps the remaining coins.',
      answers: buildAnswers(
        `${keep} coins`,
        [
          {
            label: `${tooManyVotes} coins`,
            tempting: 'This assumes the proposer must buy off every lower pirate.',
            flaw: 'The proposer only needs the minimum winning coalition, not unanimous applause.',
            reframe: 'Count how many extra votes are required and pay only those pirates.',
          },
          {
            label: `${offByOne} coins`,
            tempting: 'This is the right pattern with the wrong coalition size.',
            flaw: 'A one-vote mistake changes the payout immediately.',
            reframe: 'Compute the passing threshold carefully, including the proposer’s own vote.',
          },
          {
            label: `${impossiblePanic} coins`,
            tempting: 'This comes from misreading the alternating zero-payoff pattern by one pirate.',
            flaw: 'The zero-payoff pirates alternate by parity, not by rank proximity alone.',
            reframe: 'Work backward from smaller pirate sets and buy the cheapest votes in that fallback table.',
          },
        ],
        index + 1,
      ),
      solution: `With ${n} pirates, the proposer buys ${Math.floor((n - 1) / 2)} one-coin votes and keeps the remaining ${keep} coins.`,
      xp: index % 5 === 4 ? 18 : 11,
    }
  })

  return [...tigerQuestions, ...pirateQuestions]
}

const generatedQuestions = [
  ...makeExpectedValueQuestions(),
  ...makeBayesQuestions(),
  ...makeStatisticsQuestions(),
  ...makeGameTheoryQuestions(),
]

export const quantEndlessQuestions: QuantQuestion[] = generatedQuestions.map((question, index) => ({
  id: index + 6,
  ...question,
}))
