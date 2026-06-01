import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/trigonometric/i.test(chapter)) {
    return `${title} is about connecting angle measures and trig identities. The useful answer is "${correct}"; convert degrees to radians carefully and use squared identities exactly as written.`
  }
  if (/function families|polynomial|rational|exponential|logarithmic/i.test(chapter)) {
    return `${title} is about reading function structure. The useful answer is "${correct}"; check domains, asymptotes, log rules, and end behavior from the expression rather than from surface numbers.`
  }
  if (/vectors|complex|polar|analytic geometry/i.test(chapter)) {
    return `${title} is about representing objects with coordinates, components, or standard forms. The useful answer is "${correct}"; multiply matching components, identify conic signs, or translate polar information carefully.`
  }
  if (/limits|rates|calculus readiness|matrices|systems|discrete/i.test(chapter)) {
    return `${title} is about preparing for later algebra and calculus moves. The useful answer is "${correct}"; track the sequence, coefficient, or structure that the formula is actually asking for.`
  }
  return `${title} is a precalculus skill. The useful answer is "${correct}"; identify the function family or representation before choosing the rule.`
}

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: lessonFor(chapter, title, correct),
  source: 'Generated from Numbas/WeBWorK/OER Precalculus coverage',
})

export const precalculusExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(439001, 'Chapter 3: Trigonometric Foundations and Periodic Functions', 'Radians', 'What is 180 degrees in radians?', 'pi', [
    miss('2pi', 'That corresponds to 360 degrees.', 'A half-turn is pi radians.'),
    miss('pi/2', 'That corresponds to 90 degrees.', '180 degrees is twice 90 degrees.'),
    miss('180pi', 'That forgets to divide by 180 in the conversion.', 'Use degrees x pi/180.'),
  ]),
  q(439002, 'Chapter 3: Trigonometric Foundations and Periodic Functions', 'Pythagorean identity', 'Which identity is always true?', 'sin^2(x) + cos^2(x) = 1', [
    miss('sin(x) + cos(x) = 1', 'The unsquared sum is not always 1.', 'The standard identity uses squares.'),
    miss('tan^2(x) + 1 = sin^2(x)', 'That mixes identities incorrectly.', 'Recall 1 + tan^2(x) = sec^2(x).'),
    miss('cos^2(x) - sin^2(x) = 1', 'That is not generally true.', 'Test x = pi/4 if unsure.'),
  ]),
  q(439003, 'Chapter 1: Function Families and Transformation Review', 'Composition domain', 'If f(x) = sqrt(x) and g(x) = x - 4, what restriction is needed for f(g(x))?', 'x >= 4', [
    miss('x >= 0', 'That is the domain of f alone, not after substituting g(x).', 'Require x - 4 >= 0.'),
    miss('x <= 4', 'That makes x - 4 nonpositive, not nonnegative.', 'Square-root inputs must be at least zero.'),
    miss('All real numbers', 'The square root still restricts the input.', 'Check the expression inside the radical.'),
  ]),
  q(439004, 'Chapter 5: Vectors, Complex Numbers, and Polar Form', 'Dot product', 'What is the dot product of <2, -1> and <3, 4>?', '2', [
    miss('10', 'That ignores the negative contribution from -1 times 4.', 'Multiply components and add.'),
    miss('<6, -4>', 'That is componentwise multiplication, not a dot product result.', 'Dot product is a scalar.'),
    miss('-2', 'The sign arithmetic is off.', 'Compute 2*3 + (-1)*4.'),
  ]),
  q(439005, 'Chapter 6: Polar, Parametric, and Analytic Geometry', 'Ellipse form', 'Which equation represents an ellipse centered at the origin?', 'x^2/9 + y^2/4 = 1', [
    miss('x^2/9 - y^2/4 = 1', 'A minus sign gives a hyperbola.', 'Ellipse standard form has a sum of squared terms.'),
    miss('y = x^2 + 4', 'That is a parabola.', 'Conics with both x^2 and y^2 can form ellipses.'),
    miss('x^2 + y^2 = -1', 'No real points satisfy this equation.', 'A real ellipse has positive radius-squared values.'),
  ]),
  q(439006, 'Chapter 2: Polynomial, Rational, Exponential, Logarithmic Models', 'Vertical asymptote', 'For f(x) = (x + 1)/(x - 5), what is the vertical asymptote?', 'x = 5', [
    miss('y = 1', 'That is the horizontal asymptote from leading coefficients.', 'Vertical asymptotes come from denominator zeros.'),
    miss('x = -1', 'That is the numerator zero, not the denominator zero.', 'Set x - 5 equal to zero.'),
    miss('y = 5', 'Vertical asymptotes are equations x = constant.', 'Use the input value that is excluded.'),
  ]),
  q(439007, 'Chapter 2: Polynomial, Rational, Exponential, Logarithmic Models', 'Log property', 'Simplify log_b(mn).', 'log_b(m) + log_b(n)', [
    miss('log_b(m) log_b(n)', 'Products inside a log become sums, not products.', 'Use the product rule for logarithms.'),
    miss('log_b(m) - log_b(n)', 'That is the quotient rule.', 'A product inside the log maps to addition.'),
    miss('log_b(m + n)', 'Logs do not distribute over addition.', 'Keep the multiplication structure.'),
  ]),
  q(439008, 'Chapter 2: Polynomial, Rational, Exponential, Logarithmic Models', 'End behavior', 'A polynomial has positive leading coefficient and odd degree. What is its end behavior?', 'Falls left, rises right', [
    miss('Rises left, rises right', 'That matches positive even degree.', 'Odd degree ends go in opposite directions.'),
    miss('Falls left, falls right', 'That matches negative even degree.', 'Positive odd degree rises to the right.'),
    miss('Rises left, falls right', 'That matches negative odd degree.', 'Check the sign of the leading coefficient.'),
  ]),
  q(439009, 'Chapter 8: Limits, Rates, and Calculus Readiness', 'Finite geometric sum', 'What is the sum 1 + 2 + 4 + 8 + 16?', '31', [
    miss('16', 'That is only the last term.', 'Add all terms or use the geometric-sum formula.'),
    miss('32', 'That is the next power of 2, one more than the sum.', 'For powers 1 through 16, the sum is 2^5 - 1.'),
    miss('30', 'That misses the first term.', 'Include the initial 1.'),
  ]),
  q(439010, 'Chapter 7: Matrices, Systems, and Discrete Structure', 'Binomial expansion coefficient', 'In the expansion of (x + 2)^3, what is the coefficient of x^2?', '6', [
    miss('3', 'That is the binomial coefficient before multiplying by 2.', 'The x^2 term is 3*x^2*2.'),
    miss('12', 'That uses 2^2 instead of 2 for the x^2 term.', 'Only one factor of 2 appears with x^2.'),
    miss('8', 'That is the constant term.', 'Expand or identify the x^2 term specifically.'),
  ]),
])
