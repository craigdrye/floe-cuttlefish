import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

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
  lesson: extra.lesson ??
    'Coverage source: NYSED and STAAR Grade 8 math raw collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  solution: extra.solution,
  mentorHint: extra.mentorHint,
  alternatePrompts: extra.alternatePrompts,
  challengeRating: extra.challengeRating,
  source: 'Generated from NYSED/STAAR Grade 8 math coverage',
})

export const grade8MathExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(431001, 'Linear Equations', 'Solve one-step equation', 'Solve for x: x + 7 = 19.', '12', [
    miss('26', 'That adds 7 instead of subtracting it.', 'Undo +7 with -7.'),
    miss('7', 'That copies the constant.', 'Find the number that makes 19.'),
    miss('19', 'That ignores the +7.', 'Isolate x.'),
  ]),
  q(431002, 'Linear Equations', 'Two-step equation', 'Solve for y: 3y - 4 = 11.', '5', [
    miss('3', 'That divides 11 by 3 before handling -4.', 'Add 4 first.'),
    miss('15', 'That stops after adding 4.', 'Then divide by 3.'),
    miss('7', 'That comes from adding incorrectly.', 'Use inverse operations in order.'),
  ]),
  q(431003, 'Functions', 'Function rule', 'A function rule is f(x) = 2x + 1. What is f(6)?', '13', [
    miss('12', 'That uses 2x but misses +1.', 'Substitute 6 into the whole expression.'),
    miss('7', 'That adds 1 to x only.', 'Multiply first, then add.'),
    miss('18', 'That multiplies by 3 instead of using 2x + 1.', 'Follow the rule exactly.'),
  ]),
  q(431004, 'Slope', 'Slope from points', 'What is the slope of the line through (1, 3) and (5, 11)?', '2', [
    miss('8', 'That is only the change in y.', 'Divide rise by run.'),
    miss('4', 'That is only the change in x.', 'Slope is change in y over change in x.'),
    miss('1/2', 'That reverses rise and run.', 'Compute (11 - 3)/(5 - 1).'),
  ]),
  q(431005, 'Pythagorean Theorem', 'Right triangle side', 'A right triangle has legs 6 and 8. What is the hypotenuse?', '10', [
    miss('14', 'That adds the legs directly.', 'Use a^2 + b^2 = c^2.'),
    miss('7', 'That is too small for the hypotenuse.', 'The hypotenuse is the longest side.'),
    miss('100', 'That is c^2, not c.', 'Take the square root at the end.'),
  ]),
  q(431006, 'Exponents', 'Exponent product', 'Simplify x^3 * x^4.', 'x^7', [
    miss('x^12', 'That multiplies exponents instead of adding them.', 'Same base: add exponents.'),
    miss('x', 'That subtracts exponents without reason.', 'Product rule.'),
    miss('2x^7', 'There is no coefficient 2 from multiplying like bases.', 'Keep the base once.'),
  ]),
  q(431007, 'Scientific Notation', 'Large number', 'Write 48,000 in scientific notation.', '4.8 x 10^4', [
    miss('48 x 10^3', 'The first factor should be at least 1 and less than 10.', 'Move the decimal after 4.'),
    miss('4.8 x 10^3', 'That equals 4,800.', 'Count four decimal places.'),
    miss('0.48 x 10^5', 'The first factor should be at least 1.', 'Normalize the coefficient.'),
  ]),
  q(431008, 'Systems', 'System solution', 'If y = x + 2 and y = 8, what is x?', '6', [
    miss('10', 'That adds 2 to 8 instead of solving x + 2 = 8.', 'Substitute y = 8.'),
    miss('8', 'That gives y, not x.', 'Find x.'),
    miss('4', 'That subtracts twice.', 'Only subtract 2 once.'),
  ]),
  q(431009, 'Statistics', 'Mean', 'Four quiz scores are 4, 6, 10, and 12. If the mean is the balance point after every score shares the total equally, what is the mean?', '8', [
    miss('32', 'That is the sum, not the mean.', 'Divide by the number of values.'),
    miss('6', 'That is one data value, not the average.', 'Add all values first.'),
    miss('10', 'That is another data value.', 'Mean balances all values.'),
  ], {
    lesson: 'The mean is the fair-share average: add all the values, then split that total evenly across the number of values. For 4, 6, 10, and 12, the total is 32. Sharing 32 across four scores gives 8, so 8 is the balance point of the data set.',
    solution: 'Add the four scores: 4 + 6 + 10 + 12 = 32. There are four scores, so divide 32 by 4 to get a mean of 8.',
    mentorHint: 'First find the total, then ask what each of the four scores would get if the total were shared evenly.',
    alternatePrompts: {
      plain: 'What is the average of the four numbers 4, 6, 10, and 12?',
      teaching: 'Imagine the scores 4, 6, 10, and 12 pooling their points and sharing them equally. How many points does each score get?',
    },
    challengeRating: 3,
  }),
  q(431010, 'Geometry', 'Cylinder volume', 'The volume of a cylinder is found with:', 'pi r^2 h', [
    miss('2 pi r', 'That is circumference, not volume.', 'Use base area times height.'),
    miss('pi r h', 'The radius must be squared for circular area.', 'Area of base is pi r^2.'),
    miss('l w h', 'That is rectangular prism volume.', 'Cylinder has a circular base.'),
  ]),
])
