import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  NUMBAS_MATH_SUB_TOPICS,
  NUMBAS_MATH_MENTOR_HINTS,
  NUMBAS_MATH_CORRECT_SHORTENED,
} from './numbasMathPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

type ImportedMathQuestion = {
  id: number
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
  sourceId: string
  sourceName: 'Numbas' | 'WeBWorK OPL'
  sourceUrl?: string
}

const q = ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  sourceId,
  sourceName,
  sourceUrl,
}: ImportedMathQuestion) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: `Second-pass conversion from ${sourceName} raw math item ${sourceId}. ${sourceUrl ? `Source URL: ${sourceUrl}. ` : ''}Converted into a stable fixed-choice conceptual check; randomized numeric answer-entry details, diagrams, or applet dependencies were not imported.`,
  source: `${sourceName} (${sourceId})`,
})

const _baseNumbasWebworkAdditionalAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 466001,
    chapter: 'Logarithms',
    title: 'Product rule for logarithms',
    prompt: 'Which logarithm law correctly expands log_b(MN)?',
    correct: 'log_b(M) + log_b(N)',
    wrong: [
      miss('log_b(M) log_b(N)', 'The product rule turns multiplication inside the log into addition outside.', 'A product inside becomes a sum of logs.'),
      miss('log_b(M + N)', 'Logarithms do not distribute over addition this way.', 'Keep the product M times N in mind.'),
      miss('log_b(M) - log_b(N)', 'Subtraction matches a quotient, not a product.', 'Use subtraction only for division inside the log.'),
    ],
    sourceId: 'numbas::60584',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60584/4-3-addition-and-subtraction-of-logarithms/',
  }),
  q({
    id: 466002,
    chapter: 'Quadratics',
    title: 'Completing the square',
    prompt: 'When completing the square for x^2 + bx, what term is added and subtracted to form a perfect square?',
    correct: '(b/2)^2',
    wrong: [
      miss('b^2', 'The coefficient must be halved before squaring.', 'The square is built from x + b/2.'),
      miss('2b', 'Doubling the coefficient does not create a square trinomial.', 'Think about expanding (x + c)^2.'),
      miss('sqrt(b)', 'Completing the square uses a squared half-coefficient, not a square root.', 'Find c so that 2c = b.'),
    ],
    sourceId: 'numbas::60580',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60580/musa-s-copy-of-3-solving-quadratics-by-completing-/',
  }),
  q({
    id: 466003,
    chapter: 'Logarithms',
    title: 'Logarithmic to exponential form',
    prompt: 'Which equation is equivalent to log_a(C) = B?',
    correct: 'a^B = C',
    wrong: [
      miss('B^a = C', 'The base of the logarithm becomes the base of the power.', 'Read log base a as asking what exponent goes on a.'),
      miss('a^C = B', 'The logarithm value is the exponent, not the result.', 'The output B is the exponent.'),
      miss('a + B = C', 'Logarithms convert to powers, not addition.', 'Use exponential form.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setLogarithmicFunctions/beth3logfun.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466004,
    chapter: 'Polynomials',
    title: 'Quadratic from roots',
    prompt: 'A quadratic has roots r and s. Which expression has exactly those roots before any nonzero scaling?',
    correct: '(x - r)(x - s)',
    wrong: [
      miss('(x + r)(x + s)', 'This has roots -r and -s.', 'A factor x - r becomes zero at x = r.'),
      miss('x^2 + rs', 'This does not generally vanish at both r and s.', 'Each root needs its own linear factor.'),
      miss('(r - s)x', 'That is linear unless r = s, and it does not encode two roots.', 'A quadratic needs two linear factors.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setPolynomials/quadfromroots1.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466005,
    chapter: 'Quadratic Functions',
    title: 'Vertex form',
    prompt: 'In vertex form f(x) = a(x - h)^2 + k, what point is the vertex?',
    correct: '(h, k)',
    wrong: [
      miss('(-h, k)', 'The sign inside the parentheses is already x minus h.', 'Set x - h equal to 0.'),
      miss('(a, k)', 'a controls stretch and reflection, not the horizontal vertex coordinate.', 'The shift values are h and k.'),
      miss('(h, a)', 'k is the vertical shift; a is not the y-coordinate of the vertex.', 'Look outside the squared term for vertical shift.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setQuadraticFunction/beth2.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

const _baseNumbasWebworkAdditionalTrigonometryQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 466101,
    chapter: 'Special Right Triangles',
    title: '30-60-90 side ratios',
    prompt: 'In a 30-60-90 triangle, what is the ratio of shorter leg : longer leg : hypotenuse?',
    correct: '1 : sqrt(3) : 2',
    wrong: [
      miss('1 : 1 : sqrt(2)', 'That is the 45-45-90 triangle ratio.', 'The 30-60-90 triangle has unequal legs.'),
      miss('1 : 2 : sqrt(3)', 'The hypotenuse must be the longest side.', 'Put the side opposite 90 degrees last.'),
      miss('sqrt(3) : 1 : 2', 'The shorter leg is opposite 30 degrees, not 60 degrees.', 'The longer leg is the sqrt(3) part.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/30-60-90-01.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466102,
    chapter: 'Special Right Triangles',
    title: '45-45-90 side ratios',
    prompt: 'In a 45-45-90 triangle, what is the relationship between a leg and the hypotenuse?',
    correct: 'The hypotenuse is leg * sqrt(2)',
    wrong: [
      miss('The hypotenuse equals the leg', 'That would not satisfy the Pythagorean theorem for two equal legs.', 'Use a^2 + a^2.'),
      miss('The hypotenuse is leg / sqrt(2)', 'That would make the hypotenuse shorter than a leg.', 'The hypotenuse is the longest side.'),
      miss('The hypotenuse is 2 times the leg', 'That belongs to the short-leg relationship in a 30-60-90 triangle.', 'Equal legs create a sqrt(2) factor.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/45-45-90-01.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466103,
    chapter: 'Angles',
    title: 'Coterminal angles',
    prompt: 'Which operation always produces a coterminal angle measured in degrees?',
    correct: 'Add or subtract 360 degrees',
    wrong: [
      miss('Add or subtract 180 degrees', 'That usually points in the opposite direction, not the same terminal side.', 'One full turn is needed.'),
      miss('Multiply the angle by 360', 'Multiplication changes the direction unpredictably.', 'Coterminal angles differ by whole turns.'),
      miss('Change the sign of the angle', 'A negative angle often rotates the other way to a different terminal side.', 'Use full rotations.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/Angles02.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466104,
    chapter: 'Trig Functions',
    title: 'Even and odd trig functions',
    prompt: 'Which identity correctly describes sine as an odd function?',
    correct: 'sin(-x) = -sin(x)',
    wrong: [
      miss('sin(-x) = sin(x)', 'That would make sine even, but cosine has that property.', 'Odd functions change sign when x changes sign.'),
      miss('sin(-x) = 1/sin(x)', 'Changing sign is not the reciprocal operation.', 'Reciprocal identities are different from parity identities.'),
      miss('sin(-x) = cos(x)', 'Sine and cosine do not swap just because the angle is negated.', 'Track symmetry across the origin.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/EvenOddTrig.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466105,
    chapter: 'Sinusoidal Graphs',
    title: 'Amplitude from equation',
    prompt: 'For y = a sin(b(x - c)) + d, what does |a| represent?',
    correct: 'Amplitude',
    wrong: [
      miss('Period', 'The period is controlled by b.', 'Amplitude is vertical distance from midline to peak.'),
      miss('Horizontal shift', 'The horizontal shift is controlled by c.', 'Look at the multiplier outside sine.'),
      miss('Midline', 'The midline is y = d.', 'Amplitude is a distance, not the center line.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setTrigGraphs/p2.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

const _baseNumbasWebworkAdditionalCalculusQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 466201,
    chapter: 'Chain Rule',
    title: 'Outer and inner derivatives',
    prompt: 'When differentiating f(g(x)), what does the chain rule require?',
    correct: "f'(g(x)) times g'(x)",
    wrong: [
      miss("f'(x) + g'(x)", 'The chain rule multiplies outer and inner derivatives.', 'Differentiate the outside, keep the inside, then multiply by the inside derivative.'),
      miss('f(g(x)) times x', 'The original composite is not enough.', 'Both layers must be differentiated.'),
      miss("g'(f(x)) only", 'This reverses the composition and drops the outer derivative.', 'Keep the original nesting order.'),
    ],
    sourceId: 'numbas::60990',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60990/7-1-chain-rule-binomial/',
  }),
  q({
    id: 466202,
    chapter: 'Chain Rule',
    title: 'Derivative of ln(u)',
    prompt: 'If y = ln(u(x)), what is dy/dx?',
    correct: "u'(x) / u(x)",
    wrong: [
      miss('u(x) / u\'(x)', 'The derivative of ln(u) places u in the denominator.', 'Differentiate the inside and divide by the inside.'),
      miss('ln(u\'(x))', 'You do not take the log of the derivative.', 'Use the known derivative of ln.'),
      miss('1 / u\'(x)', 'The denominator is the inside function, not its derivative.', 'The numerator is u prime.'),
    ],
    sourceId: 'numbas::60992',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60992/7-3-chain-rule-log-of-binomial/',
  }),
  q({
    id: 466203,
    chapter: 'Riemann Sums',
    title: 'Limit of Riemann sums',
    prompt: 'What does the limit of right Riemann sums represent as the number of subintervals goes to infinity?',
    correct: 'The definite integral over the interval',
    wrong: [
      miss('Only the largest rectangle area', 'The limit combines all rectangles as their widths shrink.', 'Think accumulated area.'),
      miss('The derivative at the right endpoint', 'Riemann sums approximate integrals, not derivatives.', 'Rectangles are measuring area.'),
      miss('The average of the endpoint x-values', 'The x-values locate rectangles but are not the final quantity.', 'Add function heights times widths.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/270/setIntegrals0Theory/osu_in_0_19.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466204,
    chapter: 'Substitution',
    title: 'Choosing u in substitution',
    prompt: 'For an integral involving a composite expression, which choice is usually best for u?',
    correct: 'An inner expression whose derivative also appears nearby',
    wrong: [
      miss('The entire integrand every time', 'That rarely simplifies dx into a usable expression.', 'Look for an inside function and its derivative.'),
      miss('A random constant from the problem', 'A constant substitution cannot absorb the variable structure.', 'u should change with x.'),
      miss('The final antiderivative', 'The antiderivative is what you are trying to find.', 'Choose u before integrating.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/270/setIntegrals14Substitution/osu_in_14_10.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466205,
    chapter: 'Multivariable Chain Rule',
    title: 'Chain rule with parametric inputs',
    prompt: 'If z = f(x, y), x = x(t), and y = y(t), which expression gives dz/dt?',
    correct: 'f_x dx/dt + f_y dy/dt',
    wrong: [
      miss('f_x + f_y only', 'The rates of x and y with respect to t are missing.', 'Each partial derivative needs its matching input rate.'),
      miss('dx/dt + dy/dt only', 'This ignores how z depends on x and y.', 'Weight each input rate by a partial derivative.'),
      miss('f_x f_y dx/dt dy/dt', 'The multivariable chain rule adds branch contributions, not one product of all terms.', 'Trace the two paths from t to z.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/272/setStewart14_5/problem_1.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

const _baseNumbasWebworkAdditionalLinearAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 466301,
    chapter: 'Determinants',
    title: '2x2 determinant',
    prompt: 'For a 2x2 matrix [[a, b], [c, d]], what is the determinant?',
    correct: 'ad - bc',
    wrong: [
      miss('ab - cd', 'This multiplies across rows instead of diagonals.', 'Use main diagonal minus off diagonal.'),
      miss('ad + bc', 'The off-diagonal product is subtracted.', 'The sign between the two products matters.'),
      miss('a + d - b - c', 'The determinant uses products, not just entry sums.', 'Pair diagonal entries.'),
    ],
    sourceId: 'numbas::201852',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/201852/determinant-of-a-2x2-matrix/',
  }),
  q({
    id: 466302,
    chapter: 'Matrix Inverses',
    title: 'Invertibility test',
    prompt: 'A square matrix is invertible exactly when:',
    correct: 'Its determinant is nonzero',
    wrong: [
      miss('Its determinant is zero', 'A zero determinant means the matrix is singular.', 'Nonzero determinant signals invertibility.'),
      miss('It has at least one zero entry', 'Zero entries do not determine invertibility by themselves.', 'Use the determinant, not a single entry.'),
      miss('It is not square', 'Only square matrices can have two-sided inverses in the usual sense.', 'Invertibility starts with being square.'),
    ],
    sourceId: 'numbas::201853',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/201853/inverse-of-a-2x2-matrix/',
  }),
  q({
    id: 466303,
    chapter: 'Determinants',
    title: '3x3 determinant meaning',
    prompt: 'Geometrically, the absolute value of a 3x3 determinant gives:',
    correct: 'The volume scale factor of the linear transformation',
    wrong: [
      miss('The trace of the matrix', 'The trace is the sum of diagonal entries, not the volume scale.', 'Determinants measure scaling of area or volume.'),
      miss('The number of nonzero entries', 'Entry count does not capture transformation scaling.', 'Think transformed unit cube.'),
      miss('The length of the first column', 'A column length alone misses the whole transformation.', 'All three columns matter.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/Dartmouth/setMTWCh1S3/problem_1.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466304,
    chapter: 'Row Reduction',
    title: 'Free variables',
    prompt: 'In a reduced row echelon system, a variable is free when:',
    correct: 'Its column has no pivot',
    wrong: [
      miss('Its column contains the first pivot', 'A pivot variable is leading, not free.', 'Free variables live in non-pivot columns.'),
      miss('Its row is all zeros', 'Rows do not correspond one-to-one with every variable.', 'Look at columns.'),
      miss('Its coefficient is negative', 'Sign does not decide whether a variable is free.', 'Pivot position decides.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/set119LinearSystems/p22.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466305,
    chapter: 'Vector Addition',
    title: 'Parallelogram rule',
    prompt: 'In the parallelogram rule for adding two vectors, where is the resultant drawn?',
    correct: 'Along the diagonal from the common tail to the opposite corner',
    wrong: [
      miss('Along either original vector only', 'The resultant combines both vectors.', 'Complete the parallelogram and use its diagonal.'),
      miss('Perpendicular to both vectors in every case', 'The resultant is not generally perpendicular to the inputs.', 'Its direction depends on both vectors.'),
      miss('From the opposite corner back to the common tail only', 'That would reverse the resultant direction.', 'Start at the shared tail.'),
    ],
    sourceId: 'numbas::35072',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/35072/vector-addition-parallelogram-rule/',
  }),
])

const _baseNumbasWebworkAdditionalStatisticsQuestions = makeQuestionBank('Statistics', [
  q({
    id: 466401,
    chapter: 'Confidence Intervals',
    title: 'Confidence interval truth value',
    prompt: 'After a confidence interval is computed from data, which statement is most accurate?',
    correct: 'The interval is fixed; the confidence level describes the long-run method',
    wrong: [
      miss('The parameter moves randomly inside and outside the interval', 'The parameter is fixed in the usual frequentist interpretation.', 'The random object was the interval before sampling.'),
      miss('95% confidence means 95% of sample observations are inside', 'That confuses a confidence interval with a data coverage interval.', 'Confidence intervals estimate parameters.'),
      miss('A wider confidence interval always proves the estimate is biased', 'Width reflects uncertainty, not necessarily bias.', 'Bias and precision are different ideas.'),
    ],
    sourceId: 'numbas::56333',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/56333/confidence-intervals-true-false/',
  }),
  q({
    id: 466402,
    chapter: 'Normal Distribution',
    title: 'Same standard deviation',
    prompt: 'Two normal distributions have the same standard deviation but different means. What is true?',
    correct: 'They have the same shape but different centers',
    wrong: [
      miss('They have different shapes but the same center', 'The mean controls center and the standard deviation controls spread.', 'Same standard deviation means same spread.'),
      miss('They must be identical distributions', 'Different means shift the distribution.', 'Same spread does not mean same center.'),
      miss('Neither can be normal', 'Normal distributions can share standard deviation and differ in mean.', 'Mean and standard deviation are separate parameters.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setStat/gust34.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466403,
    chapter: 'Hypothesis Tests',
    title: 'Two-sided alternative',
    prompt: 'For the claim that a population mean differs from 98.6, which alternative hypothesis is appropriate?',
    correct: 'mu != 98.6',
    wrong: [
      miss('mu = 98.6', 'Equality belongs in the null hypothesis.', 'The word differs means either higher or lower.'),
      miss('mu > 98.6 only', 'That tests only higher values.', 'A two-sided alternative allows both directions.'),
      miss('x-bar = 98.6', 'Hypotheses are about population parameters, not one sample statistic.', 'Use mu for the population mean.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/ASU-topics/setStat/di12.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 466404,
    chapter: 'Normal Distribution',
    title: '68-95-99.7 rule',
    prompt: 'In an approximately normal distribution, about what percent of observations fall within two standard deviations of the mean?',
    correct: '95%',
    wrong: [
      miss('68%', '68% corresponds to one standard deviation.', 'Two standard deviations covers more of the bell curve.'),
      miss('50%', 'Half the data are below the mean, but that is not the two-standard-deviation rule.', 'Use the empirical rule.'),
      miss('99.7%', '99.7% corresponds to three standard deviations.', 'Two standard deviations is the middle value in 68-95-99.7.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/CollegeOfIdaho/setStatistics_Ch03NormalDistribution/03Stats_04_NormalDist.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

const _numbasBundle = [
  {
    subTopics: NUMBAS_MATH_SUB_TOPICS,
    mentorHints: NUMBAS_MATH_MENTOR_HINTS,
    correctShortened: NUMBAS_MATH_CORRECT_SHORTENED,
    source: 'numbasMath',
  },
]

export const numbasWebworkAdditionalAlgebraQuestions = runPolish(_baseNumbasWebworkAdditionalAlgebraQuestions, _numbasBundle)
export const numbasWebworkAdditionalTrigonometryQuestions = runPolish(_baseNumbasWebworkAdditionalTrigonometryQuestions, _numbasBundle)
export const numbasWebworkAdditionalCalculusQuestions = runPolish(_baseNumbasWebworkAdditionalCalculusQuestions, _numbasBundle)
export const numbasWebworkAdditionalLinearAlgebraQuestions = runPolish(_baseNumbasWebworkAdditionalLinearAlgebraQuestions, _numbasBundle)
export const numbasWebworkAdditionalStatisticsQuestions = runPolish(_baseNumbasWebworkAdditionalStatisticsQuestions, _numbasBundle)

