import { makeQuestionBank } from './base'

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
  lesson: `Third-pass conversion from ${sourceName} raw math item ${sourceId}. ${sourceUrl ? `Source URL: ${sourceUrl}. ` : ''}Selected because the raw prompt or advice exposed a stable concept that could be reviewed as fixed-choice practice without importing applets, random-variable rendering, or diagrams.`,
  source: `${sourceName} (${sourceId})`,
})

export const numbasWebworkThirdAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 462001,
    chapter: 'Logarithmic Equations',
    title: 'Undoing a logarithm',
    prompt: 'To solve log_a(bx + c) = d, what is the key first algebraic move?',
    correct: 'Rewrite it as bx + c = a^d',
    wrong: [
      miss('Rewrite it as bx + c = d^a', 'The logarithm base becomes the base of the exponential expression.', 'Ask what power of a gives the log argument.'),
      miss('Divide both sides by log_a before changing form', 'There is no separate factor log_a to divide away.', 'Convert between logarithmic and exponential form.'),
      miss('Set bx + c equal to a + d', 'Logarithms undo exponentiation, not addition.', 'The output of the log is an exponent.'),
    ],
    sourceId: 'numbas::60586',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60586/4-5-solve-a-logarithmic-equation/',
  }),
  q({
    id: 462002,
    chapter: 'Quadratics',
    title: 'Factoring x^2 + bx + c',
    prompt: 'When factoring x^2 + bx + c as (x + m)(x + n), what must m and n do?',
    correct: 'Add to b and multiply to c',
    wrong: [
      miss('Add to c and multiply to b', 'The middle coefficient comes from m + n, while the constant comes from mn.', 'Expand (x + m)(x + n).'),
      miss('Always be the same number', 'The two numbers can be different.', 'Think of examples such as x^2 + 5x + 6.'),
      miss('Multiply to b and have no relation to c', 'The constant term is created by multiplying m and n.', 'Track the last term in the product.'),
    ],
    sourceId: 'numbas::60577',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60577/musa-s-copy-of-3-factorising-quadratic-equations-w/',
  }),
  q({
    id: 462003,
    chapter: 'Exponential Models',
    title: 'Half-life model',
    prompt: 'In a half-life model, what happens to the amount of substance after each full half-life period?',
    correct: 'It is multiplied by 1/2',
    wrong: [
      miss('It decreases by the same fixed number of units', 'Half-life is multiplicative decay, not constant subtraction.', 'Each period keeps the same fraction.'),
      miss('It doubles', 'Doubling describes growth, not radioactive half-life decay.', 'Half-life means half remains.'),
      miss('It becomes zero immediately', 'After one half-life, half remains.', 'The decay continues over repeated intervals.'),
    ],
    sourceId: 'numbas::191842',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/191842/exponential-and-logarithms-introduction-radioactiv/',
  }),
])

export const numbasWebworkThirdTrigonometryQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 462101,
    chapter: 'Sinusoidal Graphs',
    title: 'Amplitude in trig graphs',
    prompt: 'For a sinusoidal graph y = A sin(Bx + C), what does |A| determine?',
    correct: 'The amplitude',
    wrong: [
      miss('The period', 'The period depends on B, not the outside multiplier A.', 'Amplitude measures vertical size.'),
      miss('The phase shift', 'The phase shift depends on B and C together.', 'Look at the coefficient outside sine.'),
      miss('The x-intercept nearest the origin', 'Intercept locations depend on the whole expression.', 'A controls peak distance from the midline.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/Graphing01.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 462102,
    chapter: 'Reference Angles',
    title: 'Reference angle meaning',
    prompt: 'What is a reference angle?',
    correct: 'The acute angle between the terminal side and the x-axis',
    wrong: [
      miss('The original angle plus 360 degrees', 'That creates a coterminal angle, not a reference angle.', 'Reference angles are always acute or zero in standard work.'),
      miss('The angle between the terminal side and the y-axis only', 'Reference angles are measured to the x-axis.', 'Use the horizontal axis.'),
      miss('The angle measured clockwise no matter where the terminal side lies', 'Clockwise direction is not the defining feature.', 'Focus on the small angle to the x-axis.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/RadianReferenceAngles1.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 462103,
    chapter: 'Unit Circle',
    title: 'Coordinates on the unit circle',
    prompt: 'For an angle theta in standard position on the unit circle, what do the terminal point coordinates represent?',
    correct: '(cos(theta), sin(theta))',
    wrong: [
      miss('(sin(theta), cos(theta))', 'The x-coordinate is cosine and the y-coordinate is sine.', 'Read coordinates left to right as x then y.'),
      miss('(tan(theta), sec(theta))', 'Tangent and secant are related ratios, not the basic unit-circle coordinates.', 'Start with cosine and sine.'),
      miss('(theta, 1)', 'Theta is the angle measure, not generally an x-coordinate.', 'The radius is 1, but the point still has trig coordinates.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/MC/Trigonometry/PointOnUnitCircle.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

export const numbasWebworkThirdCalculusQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 462201,
    chapter: 'Product Rule',
    title: 'Derivative of a product',
    prompt: 'If y = u(x)v(x), which expression matches the product rule?',
    correct: "u'(x)v(x) + u(x)v'(x)",
    wrong: [
      miss("u'(x)v'(x)", 'The product rule is not just the product of derivatives.', 'Each term differentiates one factor and leaves the other unchanged.'),
      miss("u'(x) + v'(x)", 'That drops the original factors from the two product-rule terms.', 'A product needs two terms with one unchanged factor each.'),
      miss("u(x)v(x) + C", 'That is the original product with a constant, not its derivative.', 'Differentiate both factors in turn.'),
    ],
    sourceId: 'numbas::60993',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60993/7-4-differentiation-product-rule-basic/',
  }),
  q({
    id: 462202,
    chapter: 'Exponential Derivatives',
    title: 'Derivative of e^u',
    prompt: 'When differentiating e^(u(x)), what does the chain rule add?',
    correct: 'A factor of u prime(x)',
    wrong: [
      miss('A factor of ln(u)', 'The derivative of e^u is e^u times the derivative of u, not ln(u).', 'Differentiate the exponent.'),
      miss('A factor of e only', 'The whole expression e^u remains, and u prime is also needed.', 'The inside function contributes its derivative.'),
      miss('No extra factor ever', 'Composite exponentials require the chain rule.', 'Check whether the exponent is more than x.'),
    ],
    sourceId: 'numbas::60850',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60850/6-4-differentiation-exponentials-and-logs/',
  }),
  q({
    id: 462203,
    chapter: 'Integration',
    title: 'Constant of integration',
    prompt: 'Why do indefinite integrals include a + C term?',
    correct: 'Functions that differ by a constant have the same derivative',
    wrong: [
      miss('Because every antiderivative must pass through the origin', 'The constant means antiderivatives can be shifted vertically.', 'A whole family of functions has the same derivative.'),
      miss('Because definite integrals always include C', 'Definite integrals evaluate to numbers after applying bounds.', 'This question asks about indefinite integrals.'),
      miss('Because C is the exponent added by the power rule', 'The power rule changes exponents, but C accounts for lost constants.', 'Constants differentiate to zero.'),
    ],
    sourceId: 'numbas::61208',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/61208/8-1-integration-indefinite-integral/',
  }),
])

export const numbasWebworkThirdLinearAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 462301,
    chapter: 'Matrix Dimensions',
    title: 'Order of a matrix',
    prompt: 'The order or size of a matrix is written m x n. What do m and n represent?',
    correct: 'm rows and n columns',
    wrong: [
      miss('m columns and n rows', 'Matrix order is rows first, then columns.', 'Read the size from top-to-bottom count first.'),
      miss('m diagonal entries and n zero entries', 'Order describes dimensions, not entry values.', 'Count rows and columns.'),
      miss('m determinants and n eigenvalues', 'Those are other matrix concepts, not the size notation.', 'The order is a shape description.'),
    ],
    sourceId: 'numbas::191893',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/191893/order-of-a-matrix/',
  }),
  q({
    id: 462302,
    chapter: 'Matrix Arithmetic',
    title: 'Adding matrices',
    prompt: 'How are two matrices of the same size added?',
    correct: 'Add corresponding entries',
    wrong: [
      miss('Multiply rows of the first by columns of the second', 'That describes matrix multiplication, not addition.', 'Addition is entry by entry.'),
      miss('Add only the diagonal entries', 'Every corresponding entry is added.', 'The whole matrix participates.'),
      miss('Stack one matrix underneath the other', 'Stacking changes the dimensions and is not matrix addition.', 'The result keeps the same size.'),
    ],
    sourceId: 'numbas::193013',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/193013/matrix-addition-and-subtraction-short/',
  }),
  q({
    id: 462303,
    chapter: 'Matrix Multiplication',
    title: 'Rows times columns',
    prompt: 'In matrix multiplication AB, how is an entry of the product formed?',
    correct: 'Take a dot product of a row of A with a column of B',
    wrong: [
      miss('Add entries in the same positions of A and B', 'That is matrix addition, not multiplication.', 'Multiplication pairs rows with columns.'),
      miss('Multiply only the diagonal entries', 'Each product entry uses an entire row and column.', 'Think row-by-column dot product.'),
      miss('Transpose A and then copy B', 'Transposition is a separate operation.', 'The product entry is built from matching row and column positions.'),
    ],
    sourceId: 'numbas::196736',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/196736/matrix-multiplication/',
  }),
])

export const numbasWebworkThirdStatisticsQuestions = makeQuestionBank('Statistics', [
  q({
    id: 462401,
    chapter: 'Summary Statistics',
    title: 'Outliers and resistant measures',
    prompt: 'For data with strong outliers, which pair is usually a better summary of center and spread?',
    correct: 'Median and interquartile range',
    wrong: [
      miss('Mean and standard deviation', 'Both can be pulled strongly by outliers.', 'Use resistant summaries for skewed data or outliers.'),
      miss('Mode and sample size', 'Mode can miss spread, and sample size is not a spread measure.', 'Choose one center measure and one variability measure.'),
      miss('Maximum and minimum only', 'Those define the range and are themselves outlier-sensitive.', 'Focus on the middle half of the data.'),
    ],
    sourceId: 'numbas::155000',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/155000/sm06-choosing-the-appropriate-average/',
  }),
  q({
    id: 462402,
    chapter: 'Summary Statistics',
    title: 'Location versus spread',
    prompt: 'Which measure describes spread rather than location?',
    correct: 'Interquartile range',
    wrong: [
      miss('Mean', 'The mean is a measure of center or location.', 'Spread describes how values vary.'),
      miss('Median', 'The median is a measure of center or location.', 'Look for a distance between parts of the data.'),
      miss('Mode', 'The mode is a common value, not a measure of variability.', 'Spread is about dispersion.'),
    ],
    sourceId: 'numbas::154868',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/154868/sm07-identify-measures-of-spread-location/',
  }),
  q({
    id: 462403,
    chapter: 'Independent Events',
    title: 'Multiplication rule',
    prompt: 'If events A and B are independent, how do you find P(A and B)?',
    correct: 'P(A) times P(B)',
    wrong: [
      miss('P(A) plus P(B)', 'Adding probabilities is for union-style questions with overlap handled separately.', 'Independent joint probability multiplies.'),
      miss('P(A) divided by P(B)', 'Division appears in conditional probability formulas, not the basic independent intersection rule.', 'Both events happening means multiply.'),
      miss('P(A) minus P(B)', 'Subtraction does not describe the chance both independent events occur.', 'Use the product rule.'),
    ],
    sourceId: 'numbas::12531',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/12531/select-a-card-and-roll-a-dice/',
  }),
])
