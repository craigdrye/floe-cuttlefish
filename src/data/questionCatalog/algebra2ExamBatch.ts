import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/function structure|transformation/i.test(chapter)) {
    return `${title} is about how functions are built and changed. The useful answer is "${correct}"; follow the order of operations, inner-before-outer composition, and shifts outside or inside the function.`
  }
  if (/quadratics|complex/i.test(chapter)) {
    return `${title} is about algebraic structure beyond real-number factoring. The useful answer is "${correct}"; track signs, powers, and definitions like i squared carefully.`
  }
  if (/exponential|logarithmic/i.test(chapter)) {
    return `${title} is about turning multiplication patterns into exponent questions. The useful answer is "${correct}"; ask what power creates the value, or rewrite both sides with the same base.`
  }
  if (/rational|radical/i.test(chapter)) {
    return `${title} is about expression restrictions. The useful answer is "${correct}"; find where a denominator would become zero or where a radical rule changes the allowed values.`
  }
  if (/polynomial/i.test(chapter)) {
    return `${title} is about evaluating or factoring polynomial structure. The useful answer is "${correct}"; use the theorem or identity directly instead of only looking at the constant term.`
  }
  if (/sequences|series/i.test(chapter)) {
    return `${title} is about repeated patterns. The useful answer is "${correct}"; compare consecutive terms to decide whether the pattern is adding or multiplying.`
  }
  if (/probability|statistics/i.test(chapter)) {
    return `${title} is about using the right probability relationship. The useful answer is "${correct}"; decide whether the situation asks for both events, either event, or a conditional change.`
  }
  return `${title} is an Algebra 2 skill. The useful answer is "${correct}"; identify the structure first, then use the matching algebra rule.`
}

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  extra: {
    lesson?: string
    solution?: string
    mentorHint?: string
    alternatePrompts?: Question['alternatePrompts']
    challengeRating?: Question['challengeRating']
  } = {},
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: extra.lesson ?? lessonFor(chapter, title, correct),
  solution: extra.solution,
  mentorHint: extra.mentorHint,
  alternatePrompts: extra.alternatePrompts,
  challengeRating: extra.challengeRating,
  source: 'Generated from NYSED/STAAR/OER Algebra II coverage',
})

export const algebra2ExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(438001, 'Chapter 1: Function Structure and Transformation', 'Inverse function', 'If f(x) = 2x + 5, what is f inverse of x?', '(x - 5)/2', [
    miss('2x - 5', 'That reverses only the addition, not the multiplication.', 'Swap x and y, then solve for y.'),
    miss('(x + 5)/2', 'The sign on 5 should change when undoing +5.', 'Undo +5 with -5.'),
    miss('x/2 + 5', 'That does not undo the original +5.', 'The inverse must reverse operations in reverse order.'),
  ]),
  q(438002, 'Chapter 1: Function Structure and Transformation', 'Compose functions', 'If f(x) = x + 3 and g(x) = 2x, what is f(g(4))?', '11', [
    miss('14', 'That applies g after f instead of f after g.', 'Compute g(4) first.'),
    miss('8', 'That stops after g(4).', 'Then plug the result into f.'),
    miss('7', 'That applies f to 4 only.', 'Composition uses the inner function first.'),
  ]),
  q(438003, 'Chapter 2: Quadratics, Complex Numbers, Algebraic Fluency', 'Powers of i', 'What is i^2?', '-1', [
    miss('1', 'That is not the defining square of i.', 'The imaginary unit is defined by i^2 = -1.'),
    miss('i', 'That would mean squaring does nothing.', 'Use the core definition.'),
    miss('-i', 'That is not the second power in the cycle.', 'Track powers: i, -1, -i, 1.'),
  ]),
  q(438004, 'Chapter 5: Exponential and Logarithmic Models', 'Log definition', 'What is log_2(32)?', '5', [
    miss('16', 'That divides 32 by 2 instead of finding an exponent.', 'Ask: 2 to what power is 32?'),
    miss('30', 'That subtracts 2 from 32.', 'Logarithms answer exponent questions.'),
    miss('64', 'That squares or doubles in the wrong direction.', 'Use powers of 2.'),
  ]),
  q(438005, 'Chapter 5: Exponential and Logarithmic Models', 'Solve exponential equation', 'Solve 3^x = 81.', '4', [
    miss('27', 'That divides 81 by 3.', 'Write 81 as a power of 3.'),
    miss('3', '3^3 is 27, not 81.', 'Keep multiplying by 3 one more time.'),
    miss('78', 'That subtracts instead of comparing powers.', 'Match common bases.'),
  ]),
  q(438006, 'Chapter 4: Rational and Radical Expressions', 'Excluded value', 'For the expression 1/(x - 6), which value is excluded from the domain?', 'x = 6', [
    miss('x = -6', 'That would make x + 6 zero, not x - 6.', 'Set the denominator equal to zero.'),
    miss('x = 0', 'The denominator is not zero when x = 0.', 'Check x - 6.'),
    miss('All real numbers are allowed', 'Division by zero is not allowed.', 'Find where the denominator vanishes.'),
  ]),
  q(438007, 'Chapter 3: Polynomial Functions and Identities', 'Remainder theorem', 'For p(x) = x^3 - 2x + 1, what is the remainder when p(x) is divided by x - 2?', '5', [
    miss('1', 'That evaluates the constant only.', 'Use p(2).'),
    miss('-5', 'That likely uses x = -2 instead of x = 2.', 'For x - 2, substitute 2.'),
    miss('0', 'That would mean x - 2 is a factor, but p(2) is not zero.', 'Calculate 8 - 4 + 1.'),
  ]),
  q(438008, 'Chapter 1: Function Structure and Transformation', 'Vertical shift', 'Compared with y = x^2, what does y = x^2 - 7 do to the graph?', 'Shifts it down 7 units', [
    miss('Shifts it up 7 units', 'The constant is negative, so the graph moves down.', 'Vertical shifts happen outside the square.'),
    miss('Shifts it right 7 units', 'Horizontal shifts appear inside the squared expression.', 'This change is outside x^2.'),
    miss('Reflects it over the x-axis', 'A reflection would multiply the whole function by -1.', 'Look at the added constant.'),
  ]),
  q(438009, 'Chapter 6: Sequences, Series, Recursive Reasoning', 'Geometric sequence', 'A geometric sequence starts 3, 6, 12, 24, ... What is the common ratio?', '2', [
    miss('3', 'That is the first term, not the repeated multiplier.', 'Divide a term by the previous term.'),
    miss('6', 'That is the second term, not the ratio.', 'Use consecutive terms.'),
    miss('4', 'That is not constant between terms.', 'Check 6/3 and 12/6.'),
  ]),
  q(438010, 'Chapter 8: Probability, Statistics, and Function Modeling Studio', 'Independent events', 'Events A and B are independent, so knowing one happened does not change the probability of the other. If P(A)=0.4 and P(B)=0.5, what is P(A and B)?', '0.20', [
    miss('0.90', 'That adds the probabilities instead of multiplying for independent "and".', 'For independent events, multiply.'),
    miss('0.10', 'That subtracts the probabilities.', 'Intersection is not found by subtraction here.'),
    miss('0.45', 'That averages the probabilities.', 'Use the multiplication rule.'),
  ], {
    lesson: 'For independent events, the probability of both events happening is found by multiplying their individual probabilities. Independence means one event does not change the chance of the other, so the intersection rule becomes P(A and B) = P(A) x P(B).',
    solution: 'Multiply the probabilities because the events are independent: 0.4 x 0.5 = 0.20.',
    mentorHint: 'Independent "and" means multiply; "or" is where addition rules usually appear.',
    alternatePrompts: {
      plain: 'If A and B are independent with probabilities 0.4 and 0.5, what is the probability that both happen?',
      teaching: 'Why do independent events use multiplication for P(A and B), and what does 0.4 x 0.5 equal?',
    },
    challengeRating: 3,
  }),
])
