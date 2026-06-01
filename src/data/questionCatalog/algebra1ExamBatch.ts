import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/functions|tables|graphs/i.test(chapter)) {
    return `${title} is about interpreting a function in context. The useful answer is "${correct}"; decide what inputs and outputs are possible before treating the symbols as abstract numbers.`
  }
  if (/linear functions|data models/i.test(chapter)) {
    return `${title} is about reading a model. The useful answer is "${correct}"; separate starting value, rate of change, residual, and trend so each number keeps its job.`
  }
  if (/inequalities/i.test(chapter)) {
    return `${title} is about solving while preserving the comparison. The useful answer is "${correct}"; use inverse operations and only flip the inequality when multiplying or dividing by a negative.`
  }
  if (/systems/i.test(chapter)) {
    return `${title} is about making two equations agree at the same point. The useful answer is "${correct}"; set matching expressions equal or substitute carefully, then answer the variable asked for.`
  }
  if (/exponents|polynomials|exponential/i.test(chapter)) {
    return `${title} is about expression structure. The useful answer is "${correct}"; distinguish repeated multiplication, rates, coefficients, and like terms.`
  }
  if (/quadratics/i.test(chapter)) {
    return `${title} is about a curved model and its turning point. The useful answer is "${correct}"; use the vertex, opening direction, and coordinates according to the context.`
  }
  return `${title} is an Algebra 1 skill. The useful answer is "${correct}"; identify the algebra structure, then use the rule that matches it.`
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
  source: 'Generated from NYSED/STAAR/OER Algebra I coverage',
})

export const algebra1ExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(436001, 'Chapter 4: Functions, Tables, and Graphs', 'Domain from context', 'A function gives the cost of buying n notebooks. Which domain makes the most sense?', 'Whole numbers n >= 0', [
    miss('All real numbers', 'You cannot buy a fractional or negative number of notebooks.', 'Use the context, not just the algebra.'),
    miss('Negative integers only', 'A purchase quantity cannot be negative.', 'Think about possible counts.'),
    miss('All numbers less than 0', 'That contradicts the real-world situation.', 'Notebook counts start at zero.'),
  ]),
  q(436002, 'Chapter 4: Functions, Tables, and Graphs', 'Range from graph description', 'A linear function has y-intercept 3 and positive slope. What happens to y as x increases?', 'y increases', [
    miss('y decreases', 'That would match a negative slope.', 'Positive slope means upward trend.'),
    miss('y stays constant', 'That would match zero slope.', 'A nonzero positive slope changes y.'),
    miss('y is always 3', 'The intercept is only the value when x = 0.', 'Do not confuse intercept with all outputs.'),
  ]),
  q(436003, 'Chapter 5: Linear Functions and Data Models', 'Interpret slope', 'A line models account balance with y = 25x + 100, where x is months. What does 25 represent?', 'The balance increases by $25 per month', [
    miss('The starting balance is $25', 'The starting value is the y-intercept, 100.', 'The coefficient of x is the rate of change.'),
    miss('The balance after 25 months', '25 is not an input value here.', 'Read the equation structure.'),
    miss('The account loses $25 per month', 'The coefficient is positive, so the model increases.', 'Check the sign of the slope.'),
  ]),
  q(436004, 'Chapter 3: Inequalities and Constraint Reasoning', 'Solve inequality', 'Solve 3x - 2 > 10.', 'x > 4', [
    miss('x < 4', 'The inequality direction does not flip when adding or dividing by a positive number.', 'Only multiplying or dividing by a negative flips the sign.'),
    miss('x > 12', 'That stops before dividing by 3.', 'Add 2, then divide by 3.'),
    miss('x > 8/3', 'That divides before undoing -2.', 'Use inverse operations in order.'),
  ]),
  q(436005, 'Chapter 6: Systems of Equations and Inequalities', 'Substitution', 'If y = 3x and y = x + 8, what is x?', '4', [
    miss('8', 'That gives the constant, not the solution for x.', 'Set 3x equal to x + 8.'),
    miss('12', 'That is y after finding x, not x.', 'The question asks for x.'),
    miss('2', 'That comes from dividing 8 by 4 instead of solving 2x = 8.', 'Subtract x from both sides.'),
  ]),
  q(436006, 'Chapter 5: Linear Functions and Data Models', 'Residual meaning', 'A model predicts 18, but the actual value is 22. What is the residual actual - predicted?', '4', [
    miss('-4', 'That computes predicted minus actual.', 'Use actual - predicted.'),
    miss('40', 'That adds actual and predicted.', 'Residual is a difference.'),
    miss('18', 'That repeats the prediction.', 'Compare prediction to actual.'),
  ]),
  q(436007, 'Chapter 7: Exponents, Polynomials, Exponential Patterns', 'Growth factor', 'An exponential model is y = 50(1.2)^x. What is the growth factor?', '1.2', [
    miss('50', 'That is the initial value.', 'The repeated multiplier is inside the parentheses.'),
    miss('0.2', 'That is the growth rate, not the growth factor.', 'Growth factor equals 1 plus the growth rate.'),
    miss('x', 'x is the input exponent, not the factor.', 'Find the base of the exponential part.'),
  ]),
  q(436008, 'Chapter 8: Quadratics and Algebra 1 Modeling Studio', 'Vertex interpretation', 'A quadratic height model has vertex (3, 20) and opens downward. What does 20 represent?', 'The maximum height', [
    miss('The starting height', 'The starting height is the y-value when x = 0, not necessarily the vertex.', 'A downward-opening vertex is a maximum.'),
    miss('The time when height is maximum', 'That is represented by x = 3.', 'Use the y-coordinate for the height.'),
    miss('The minimum height', 'A downward-opening parabola has a maximum at the vertex.', 'Check opening direction.'),
  ]),
  q(436009, 'Chapter 7: Exponents, Polynomials, Exponential Patterns', 'Add polynomials', 'Simplify (2x^2 + 3x) + (5x^2 - x + 4).', '7x^2 + 2x + 4', [
    miss('7x^4 + 2x + 4', 'Like terms add coefficients; exponents do not add in addition.', 'Combine x^2 terms as x^2 terms.'),
    miss('7x^2 + 4x + 4', 'The x terms are 3x and -x, which combine to 2x.', 'Track the negative sign.'),
    miss('10x^2 + 3x + 4', 'That multiplies or miscombines coefficients.', 'Group like powers.'),
  ]),
  q(436010, 'Chapter 5: Linear Functions and Data Models', 'Arithmetic sequence', 'The sequence 5, 9, 13, 17, ... is best described as:', 'Arithmetic with common difference 4', [
    miss('Geometric with common ratio 4', 'The terms increase by adding 4, not multiplying by 4.', 'Compare differences between consecutive terms.'),
    miss('Arithmetic with common difference 5', 'The first term is 5, but the difference is 4.', 'Subtract consecutive terms.'),
    miss('Geometric with common ratio 9/5', 'That ratio does not stay constant.', 'Check whether differences or ratios are constant.'),
  ]),
])
