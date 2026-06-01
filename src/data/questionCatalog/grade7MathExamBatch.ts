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
    'Coverage source: NYSED and STAAR Grade 7 math raw collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  solution: extra.solution,
  mentorHint: extra.mentorHint,
  alternatePrompts: extra.alternatePrompts,
  challengeRating: extra.challengeRating,
  source: 'Generated from NYSED/STAAR Grade 7 math coverage',
})

export const grade7MathExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(432001, 'Integer Operations', 'Negative numbers', 'What is -6 + 14?', '8', [
    miss('-20', 'That adds the magnitudes and keeps a negative sign.', 'Opposite signs: subtract magnitudes.'),
    miss('-8', 'That gives the right distance but the wrong sign.', 'The larger magnitude is positive.'),
    miss('20', 'That ignores the negative sign on -6.', 'Use the number line direction.'),
  ]),
  q(432002, 'Proportional Relationships', 'Unit rate', 'A cyclist travels 36 miles in 3 hours. What is the unit rate?', '12 miles per hour', [
    miss('9 miles per hour', 'That divides by 4 instead of 3.', 'Miles per 1 hour means 36 divided by 3.'),
    miss('33 miles per hour', 'That subtracts instead of dividing.', 'A rate is a quotient.'),
    miss('108 miles per hour', 'That multiplies miles by hours.', 'Find one-hour distance.'),
  ]),
  q(432003, 'Percent', 'Percent discount', 'A jacket costs $40 and is discounted by 25%. What is the sale price?', '$30', [
    miss('$10', 'That is the discount amount, not the final price.', 'Subtract the discount from the original price.'),
    miss('$25', 'That treats 25% as $25.', '25% of $40 is one quarter of 40.'),
    miss('$50', 'That increases the price.', 'A discount lowers the price.'),
  ]),
  q(432004, 'Expressions', 'Evaluate expression', 'Evaluate 5a - 2 when a = 4.', '18', [
    miss('12', 'That subtracts before multiplying.', 'Substitute first, then follow order of operations.'),
    miss('20', 'That misses the -2.', 'Evaluate the whole expression.'),
    miss('7', 'That adds 5 and 4 before subtracting.', '5a means 5 times a.'),
  ]),
  q(432005, 'Equations', 'Two-step equation', 'Solve for x: 2x + 5 = 17.', '6', [
    miss('11', 'That stops after subtracting 5.', 'After subtracting 5, divide by 2.'),
    miss('24', 'That adds instead of subtracting.', 'Undo +5 with -5.'),
    miss('8.5', 'That divides 17 by 2 before undoing +5.', 'Use inverse operations in reverse order.'),
  ]),
  q(432006, 'Angle Relationships', 'Supplementary angles', 'Two angles are supplementary. One angle is 65 degrees. What is the other?', '115 degrees', [
    miss('25 degrees', 'That uses 90 degrees instead of 180 degrees.', 'Supplementary angles sum to 180 degrees.'),
    miss('65 degrees', 'That assumes the angles are equal.', 'Only their sum is given.'),
    miss('125 degrees', 'That subtracts from 190.', 'Use 180 - 65.'),
  ]),
  q(432007, 'Circles', 'Circumference formula', 'Which expression gives the circumference of a circle with radius r?', '2 pi r', [
    miss('pi r^2', 'That is area, not circumference.', 'Circumference is distance around.'),
    miss('pi d^2', 'That squares the diameter incorrectly.', 'Use diameter times pi, or 2 pi r.'),
    miss('2 r^2', 'That misses pi and squares the radius.', 'The circle constant is pi.'),
  ]),
  q(432008, 'Probability', 'Simple probability', 'A bag has 3 red marbles and 7 blue marbles mixed together. If every marble is equally likely to be drawn, what is the probability of drawing a red marble on one try?', '3/10', [
    miss('3/7', 'That compares red to blue instead of red to total.', 'Probability uses favorable outcomes over total outcomes.'),
    miss('7/10', 'That is the probability of blue.', 'The question asks for red.'),
    miss('1/3', 'That does not use the 10 total marbles.', 'Add all marbles first.'),
  ], {
    lesson: 'Simple probability is favorable outcomes divided by total possible outcomes. Here the favorable outcomes are the 3 red marbles. The total possible outcomes are all 10 marbles in the bag, so the chance of red is 3 out of 10.',
    solution: 'Add the marbles to get the total: 3 red + 7 blue = 10 marbles. The probability of red is favorable over total, so it is 3/10.',
    mentorHint: 'Use red marbles over all marbles, not red over blue.',
    alternatePrompts: {
      plain: 'There are 3 red marbles and 7 blue marbles in a bag. What fraction of all the marbles are red?',
      teaching: 'Probability is a fraction: wanted outcomes over all outcomes. Which marbles are wanted, and how many marbles are possible?',
    },
    challengeRating: 3,
  }),
  q(432009, 'Data', 'Median', 'What is the median of 4, 9, 2, 7, and 12?', '7', [
    miss('6.8', 'That is the mean, not the median.', 'Median is the middle value after ordering.'),
    miss('4', 'That is not the middle after sorting.', 'Sort the list first.'),
    miss('9', 'That is one side of the ordered middle.', 'Order: 2, 4, 7, 9, 12.'),
  ]),
  q(432010, 'Scale Drawings', 'Scale factor', 'A map scale says 1 inch represents 5 miles. How many miles are represented by 4 inches?', '20 miles', [
    miss('9 miles', 'That adds 4 and 5 instead of scaling.', 'Multiply inches by miles per inch.'),
    miss('1.25 miles', 'That divides in the wrong direction.', 'Each inch is 5 miles.'),
    miss('45 miles', 'That concatenates the numbers rather than calculating.', 'Use 4 x 5.'),
  ]),
])
