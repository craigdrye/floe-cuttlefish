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
  lesson: `Converted from ${sourceName} raw math item ${sourceId}. ${sourceUrl ? `Source URL: ${sourceUrl}. ` : ''}Distractors were authored during Floe import so the item is playable as fixed-choice practice.`,
  source: `${sourceName} (${sourceId})`,
})

export const numbasWebworkAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 461001,
    chapter: 'Order of Operations',
    title: 'BIDMAS order',
    prompt: 'When evaluating an expression with brackets, powers, multiplication, division, addition, and subtraction, which work should happen first?',
    correct: 'Brackets',
    wrong: [
      miss('Addition', 'Addition comes after brackets, powers, multiplication, and division.', 'Start with the grouped part of the expression.'),
      miss('Subtraction', 'Subtraction is not the first operation in BIDMAS.', 'Look for brackets before lower-priority operations.'),
      miss('Multiplication before brackets', 'Multiplication is important, but brackets control the first simplification.', 'Brackets override the usual left-to-right flow.'),
    ],
    sourceId: 'numbas::60569',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/60569/old-1-1-using-bodmas-3-questions/',
  }),
  q({
    id: 461002,
    chapter: 'Factors',
    title: 'Factor of 5',
    prompt: 'Which test correctly identifies whether a whole number has 5 as a factor?',
    correct: 'Its last digit is 0 or 5',
    wrong: [
      miss('The sum of its digits is divisible by 5', 'Digit sums are useful for divisibility by 3 or 9, not 5.', 'Focus on the final digit.'),
      miss('It is an even number', 'Even numbers are divisible by 2, but not necessarily by 5.', 'A number can be even and fail the factor-of-5 test.'),
      miss('Its last digit is 3, 6, or 9', 'Those endings do not guarantee a factor of 5.', 'Multiples of 5 have a very specific ending.'),
    ],
    sourceId: 'numbas::174116',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/174116/19-a-which-numbers-have-a-factor-of-5/',
  }),
  q({
    id: 461003,
    chapter: 'Factors',
    title: 'Factor of 3',
    prompt: 'A whole number has 3 as a factor when:',
    correct: 'The sum of its digits is divisible by 3',
    wrong: [
      miss('Its last digit is 3', 'Some multiples of 3 do not end in 3, such as 12 or 96.', 'Use the digit-sum rule.'),
      miss('It is odd', 'Oddness does not guarantee divisibility by 3.', 'Test 25 as a quick counterexample.'),
      miss('It has at least three digits', 'The number of digits is irrelevant.', 'Small numbers can have 3 as a factor too.'),
    ],
    sourceId: 'numbas::174117',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/174117/19-b-which-numbers-have-a-factor-of-3/',
  }),
  q({
    id: 461004,
    chapter: 'Surds',
    title: 'Rationalising a denominator',
    prompt: 'What is the goal when rationalising the denominator of a fraction involving surds?',
    correct: 'Remove square-root terms from the denominator',
    wrong: [
      miss('Make the numerator equal to 1', 'That is not the purpose of rationalising.', 'The target is the denominator.'),
      miss('Convert every number to a decimal', 'Rationalising keeps exact form instead of decimal approximation.', 'Think exact algebraic simplification.'),
      miss('Remove all fractions from the expression', 'The result can still be a fraction.', 'Only the radical in the denominator is the issue.'),
    ],
    sourceId: 'numbas::22555',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/22555/rationalising-the-denominator-surds/',
  }),
])

export const numbasWebworkCalculusQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 461101,
    chapter: 'Differentiation',
    title: 'Power rule shape',
    prompt: 'For a term of the form kx^n, what does the power rule do?',
    correct: 'Multiply by n and lower the exponent by 1',
    wrong: [
      miss('Divide by n and raise the exponent by 1', 'That is closer to an antiderivative pattern.', 'This question asks for differentiation.'),
      miss('Leave the exponent unchanged', 'The exponent changes under the power rule.', 'Bring the exponent down, then reduce it.'),
      miss('Always make the derivative equal to 0', 'Only constant terms differentiate to 0.', 'A variable power usually has a nonzero derivative.'),
    ],
    sourceId: 'numbas::27496',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/27496/q21/',
  }),
  q({
    id: 461102,
    chapter: 'Integration',
    title: 'Substitution target',
    prompt: 'In an integral such as integral bcx^(b-1) sin(ax^b) dx, why is u = ax^b a natural substitution?',
    correct: 'Its derivative is proportional to x^(b-1), matching the outside factor',
    wrong: [
      miss('It removes the sine function because sin(u) is always 0', 'Sine does not vanish under substitution.', 'The point is to match the inside function and its derivative.'),
      miss('It changes every integral into a polynomial', 'Substitution does not always create a polynomial.', 'Track the inner expression of the sine.'),
      miss('It is chosen because u must always equal x', 'The substitution is chosen from structure, not a fixed rule.', 'Look for a composite function.'),
    ],
    sourceId: 'numbas::126096',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/126096/integration-by-substitution/',
  }),
  q({
    id: 461103,
    chapter: 'Derivatives',
    title: 'Linear function derivative',
    prompt: "If f(x) = bx - a, where a and b are constants, what is f'(x)?",
    correct: 'b',
    wrong: [
      miss('a', 'The constant a disappears when differentiated.', 'Only the coefficient of x remains.'),
      miss('bx', 'That is part of the original function, not its derivative.', 'Differentiate term by term.'),
      miss('b - a', 'The derivative of the constant term is 0.', 'Constants do not contribute slope.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/270/setDerivatives1/osu_dr_1_12.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 461104,
    chapter: 'Vector Functions',
    title: 'Derivative of a vector function',
    prompt: "When differentiating a vector function r(t), how is r'(t) found?",
    correct: 'Differentiate each component with respect to t',
    wrong: [
      miss('Differentiate only the first component', 'Every component changes with t independently.', 'Apply the derivative component by component.'),
      miss('Take the dot product of all components', 'A dot product gives a scalar and is not the derivative operation.', 'Keep the vector structure.'),
      miss('Replace t with 0 in the original function', 'Substitution at one value is evaluation, not differentiation.', 'Find the rate of change first.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/272/setStewart13_2/problem_6.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 461105,
    chapter: 'Partial Derivatives',
    title: 'Partial derivative focus',
    prompt: 'When finding the partial derivative f_x of a function f(x, y, z), which variables are treated as constants?',
    correct: 'y and z',
    wrong: [
      miss('x only', 'x is the variable being changed for f_x.', 'Hold the other variables fixed.'),
      miss('No variables', 'Partial derivatives isolate change in one variable.', 'Everything except x is fixed.'),
      miss('All variables', 'If all variables are constant, there is no variable left to differentiate.', 'One variable moves; the rest stay fixed.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/272/setStewart14_3/UR_VC_5_11.pg',
    sourceName: 'WeBWorK OPL',
  }),
  q({
    id: 461106,
    chapter: 'Directional Derivatives',
    title: 'Directional derivative ingredients',
    prompt: 'To find a directional derivative of f at a point in the direction of vector v, what should v be converted to first?',
    correct: 'A unit vector',
    wrong: [
      miss('A zero vector', 'The zero vector has no direction.', 'Direction needs length one, not length zero.'),
      miss('A matrix of second derivatives', 'That is a Hessian-related object, not the direction input.', 'Normalize the direction vector.'),
      miss('The original function value', 'The function value is not a direction.', 'Separate the point, gradient, and direction.'),
    ],
    sourceId: 'webwork-opl::OpenProblemLibrary/272/setStewart14_6/problem_6.pg',
    sourceName: 'WeBWorK OPL',
  }),
])

export const numbasWebworkLinearAlgebraQuestions = makeQuestionBank('Mathematics', [
  q({
    id: 461201,
    chapter: 'Matrices',
    title: 'Special matrix names',
    prompt: 'Which description matches an identity matrix?',
    correct: 'A square matrix with 1s on the main diagonal and 0s elsewhere',
    wrong: [
      miss('A matrix with every entry equal to 0', 'That describes the zero matrix.', 'Identity matrices preserve products.'),
      miss('Any matrix with more rows than columns', 'Identity matrices are square.', 'Rows and columns must match.'),
      miss('A matrix with all entries above the diagonal equal to 1', 'That is not the identity pattern.', 'Only the main diagonal has 1s.'),
    ],
    sourceId: 'numbas::196733',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/196733/names-of-special-matrices/',
  }),
  q({
    id: 461202,
    chapter: 'Row Reduction',
    title: 'Reduced row echelon form',
    prompt: 'In reduced row echelon form, what must happen in each pivot column?',
    correct: 'The pivot is 1 and every other entry in that column is 0',
    wrong: [
      miss('The pivot can be any nonzero number', 'That may fit echelon form before full reduction, but not reduced row echelon form.', 'Reduced form normalizes pivots.'),
      miss('All entries in the pivot row must be 0', 'A pivot row needs a leading 1.', 'The pivot is the nonzero anchor.'),
      miss('The pivots must move left as you go down', 'Pivots move to the right as rows descend.', 'Think staircase down and right.'),
    ],
    sourceId: 'numbas::12037',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/12037/are-given-matrices-in-reduced-row-echelon-form/',
  }),
  q({
    id: 461203,
    chapter: 'Graph Matrices',
    title: 'Adjacency matrix entry',
    prompt: 'In an adjacency matrix for a graph, what does a 1 in row i, column j usually indicate?',
    correct: 'There is an edge from vertex i to vertex j',
    wrong: [
      miss('Vertex i has degree exactly j', 'The column index is a vertex label, not a degree count.', 'Entries record connections.'),
      miss('Vertices i and j have the same label', 'Distinct row and column positions can still mark an edge.', 'Look for whether the vertices are adjacent.'),
      miss('The graph has exactly one vertex', 'A single entry does not describe the whole graph size.', 'Interpret the entry locally.'),
    ],
    sourceId: 'numbas::113784',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/113784/graphs-match-adjacency-matrix-to-a-graph/',
  }),
  q({
    id: 461204,
    chapter: 'Eigenvalues',
    title: 'Characteristic polynomial',
    prompt: 'For a square matrix A, the characteristic polynomial is usually built from which determinant?',
    correct: 'det(tI - A)',
    wrong: [
      miss('det(A + I) only', 'That loses the variable t and is not the characteristic polynomial.', 'The polynomial tracks t against A.'),
      miss('det(A) / t', 'The characteristic polynomial is not a quotient by t.', 'Use a determinant involving tI.'),
      miss('The sum of every entry of A', 'Entry sums do not produce the characteristic polynomial.', 'Eigenvalue work starts from a determinant.'),
    ],
    sourceId: 'numbas::163606',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/163606/characteristic-poly-eigenvalues-and-eigenvectors-3/',
  }),
  q({
    id: 461205,
    chapter: 'Matrix Transformations',
    title: 'Unit square transformation',
    prompt: 'A 2D matrix transformation can be understood by watching what happens to which reference shape?',
    correct: 'The unit square',
    wrong: [
      miss('Only the x-axis label', 'A label alone does not show area, shear, rotation, or scaling.', 'Use a shape with both basis directions.'),
      miss('A number line with no y-axis', 'A 2D transformation needs two-dimensional reference information.', 'The unit square shows both axes.'),
      miss('A histogram of matrix entries', 'Entry frequency does not show the geometric action.', 'Think geometric image under multiplication.'),
    ],
    sourceId: 'numbas::201249',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/201249/2d-matrix-transformations-sketches-matrices/',
  }),
])

export const numbasWebworkStatisticsQuestions = makeQuestionBank('Statistics', [
  q({
    id: 461301,
    chapter: 'Confidence Intervals',
    title: 'Meaning of a 95% confidence interval',
    prompt: 'What does a 95% confidence interval procedure mean in repeated sampling?',
    correct: 'About 95% of intervals made this way would contain the true parameter',
    wrong: [
      miss('There is a 95% chance this fixed interval changes tomorrow', 'Once computed, the interval is fixed.', 'The 95% refers to the long-run method.'),
      miss('Exactly 95% of the sample values are inside the interval', 'Confidence intervals estimate parameters, not the spread of sample observations.', 'Do not confuse confidence with data coverage.'),
      miss('The sample mean is definitely the true mean', 'A confidence interval expresses uncertainty.', 'The true parameter may or may not be inside this interval.'),
    ],
    sourceId: 'numbas::182957',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/182957/understanding-confidence-intervals/',
  }),
  q({
    id: 461302,
    chapter: 'Variables',
    title: 'Nominal variable',
    prompt: 'Which description best fits a nominal variable?',
    correct: 'Categories with no intrinsic order',
    wrong: [
      miss('Categories that must be ranked from low to high', 'That describes an ordinal variable.', 'Nominal labels do not have a natural order.'),
      miss('Measurements that can take any value on a continuum', 'That describes a continuous quantitative variable.', 'Nominal variables are categorical.'),
      miss('Counts that must be whole numbers', 'That describes discrete quantitative data.', 'Look for labels rather than counts.'),
    ],
    sourceId: 'numbas::158751',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/158751/statistics-match-variable-types/',
  }),
  q({
    id: 461303,
    chapter: 'Probability Density',
    title: 'PDF condition',
    prompt: 'Which statement must be true for a probability density function?',
    correct: 'Its total area over the full range is 1',
    wrong: [
      miss('It must be negative for some values', 'A probability density cannot be negative.', 'Densities stay at or above zero.'),
      miss('Its highest point must equal 1', 'A density can be taller than 1 over a narrow range.', 'Area, not height alone, represents probability.'),
      miss('It must assign positive probability to every exact point', 'For continuous variables, individual points usually have probability 0.', 'Probabilities come from intervals.'),
    ],
    sourceId: 'numbas::174723',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/174723/pa2-continuous-random-variables/',
  }),
  q({
    id: 461304,
    chapter: 'Paired Tests',
    title: 'Paired t-test data',
    prompt: 'In a paired sample t-test, what values are analyzed after pairing each subject or unit?',
    correct: 'The within-pair differences',
    wrong: [
      miss('Only the larger value in each pair', 'Keeping only larger values destroys the paired comparison.', 'The difference within each pair is the signal.'),
      miss('The two samples as unrelated groups', 'That ignores the pairing structure.', 'Pairing controls for subject-level variation.'),
      miss('The ranks of all observations pooled together', 'That points toward a different nonparametric setup.', 'A paired t-test uses numerical differences.'),
    ],
    sourceId: 'numbas::528',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/528/paired-sample-t-test/',
  }),
  q({
    id: 461305,
    chapter: 'ANOVA',
    title: 'One-way ANOVA purpose',
    prompt: 'A one-way ANOVA is mainly used to test whether:',
    correct: 'Several group means differ more than expected from within-group variation',
    wrong: [
      miss('One individual observation is an outlier', 'ANOVA compares group means, not one point in isolation.', 'Think between-group versus within-group variation.'),
      miss('Two categorical variables are independent', 'That is usually a chi-square style question.', 'ANOVA uses quantitative responses across groups.'),
      miss('A single sample proportion equals 0.5', 'That is a one-proportion inference question.', 'ANOVA is about means across multiple groups.'),
    ],
    sourceId: 'numbas::54743',
    sourceName: 'Numbas',
    sourceUrl: 'https://numbas.mathcentre.ac.uk/question/54743/anova-one-way-alcohol-effect/',
  }),
])
