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
    'Coverage source: NYSED, STAAR, and OER Grade 9 algebra/geometry collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  solution: extra.solution,
  mentorHint: extra.mentorHint,
  alternatePrompts: extra.alternatePrompts,
  challengeRating: extra.challengeRating,
  source: 'Generated from NYSED/STAAR/OER Grade 9 math coverage',
})

export const grade9MathExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(434001, 'Linear Functions', 'Slope-intercept form', 'What is the slope of the line y = -3x + 8?', '-3', [
    miss('8', 'That is the y-intercept, not the slope.', 'In y = mx + b, m is the slope.'),
    miss('3', 'That drops the negative sign.', 'Keep the sign attached to x.'),
    miss('-8', 'That uses the intercept with the wrong role.', 'Identify the coefficient of x.'),
  ]),
  q(434002, 'Linear Equations', 'Solve multi-step equation', 'Solve for x: 4x - 7 = 21.', '7', [
    miss('3.5', 'That divides before undoing -7.', 'Add 7 first, then divide by 4.'),
    miss('14', 'That stops after subtracting incorrectly.', 'Use inverse operations carefully.'),
    miss('28', 'That stops after adding 7.', 'After 4x = 28, divide by 4.'),
  ]),
  q(434003, 'Systems', 'Elimination', 'Solve the system: x + y = 9 and x - y = 3.', '(6, 3)', [
    miss('(3, 6)', 'That swaps x and y.', 'Add the equations to solve for x.'),
    miss('(9, 3)', 'Those are constants from the equations, not the solution.', 'Find values that satisfy both equations.'),
    miss('(12, -3)', 'That adds the constants without solving the pair.', 'Use elimination or substitution.'),
  ]),
  q(434004, 'Quadratics', 'Factor quadratic', 'Factor x^2 + 6x + 9.', '(x + 3)^2', [
    miss('(x + 1)(x + 9)', 'That gives the right constant but the wrong middle term.', 'The factors must add to 6.'),
    miss('(x - 3)^2', 'That expands to x^2 - 6x + 9.', 'Check the sign of the middle term.'),
    miss('x(x + 6) + 9', 'That is not a full factorization.', 'Look for a perfect square trinomial.'),
  ]),
  q(434005, 'Quadratics', 'Zeros from factors', 'If (x - 2)(x + 5) = 0, what are the solutions?', 'x = 2 or x = -5', [
    miss('x = -2 or x = 5', 'That reverses both signs.', 'Set each factor equal to zero.'),
    miss('x = 2 or x = 5', 'That misses the sign from x + 5 = 0.', 'Solve each factor separately.'),
    miss('x = -10', 'That multiplies constants instead of using the zero-product property.', 'A product is zero when at least one factor is zero.'),
  ]),
  q(434006, 'Exponents', 'Power of a power', 'Simplify (a^3)^4.', 'a^12', [
    miss('a^7', 'That adds exponents instead of multiplying them.', 'Power of a power: multiply exponents.'),
    miss('a^1', 'That subtracts exponents without reason.', 'There is no division here.'),
    miss('4a^3', 'The outside exponent is not a coefficient.', 'Apply the exponent to the power.'),
  ]),
  q(434007, 'Radicals', 'Square root', 'Simplify sqrt(50).', '5sqrt(2)', [
    miss('25sqrt(2)', 'That pulls out 25 instead of its square root.', 'Use 50 = 25 x 2.'),
    miss('10sqrt(5)', 'That does not multiply back to sqrt(50).', 'Pull out the largest perfect-square factor.'),
    miss('sqrt(25)', 'That drops the remaining factor of 2.', 'Keep both factors represented.'),
  ]),
  q(434008, 'Geometry', 'Distance formula', 'What is the distance between (1, 2) and (4, 6)?', '5', [
    miss('7', 'That adds the coordinate changes.', 'Use the Pythagorean relationship.'),
    miss('3', 'That uses only the change in x.', 'Include both horizontal and vertical changes.'),
    miss('4', 'That uses only the change in y.', 'Distance uses both legs.'),
  ]),
  q(434009, 'Statistics', 'Scatter plots', 'A scatter plot has points that generally rise as you move from left to right. What type of association does this upward pattern show between the two variables?', 'Positive association', [
    miss('Negative association', 'That would slope downward from left to right.', 'Track how y changes as x increases.'),
    miss('No association', 'A clear upward pattern is an association.', 'Look for the overall trend.'),
    miss('Causal association', 'A scatter plot alone does not prove causation.', 'Association is not the same as cause.'),
  ], {
    lesson: 'A scatter plot shows association by the overall pattern of points. If the points tend to rise as x increases, larger x-values are paired with larger y-values, which is a positive association. The plot can show a relationship, but it does not by itself prove one variable causes the other.',
    solution: 'An upward left-to-right pattern means y tends to increase as x increases, so the association is positive.',
    mentorHint: 'Trace the cloud from left to right: up means positive, down means negative, and no clear pattern means weak or no association.',
    alternatePrompts: {
      plain: 'If points on a scatter plot generally go up as x increases, what kind of association is shown?',
      teaching: 'Imagine walking along the scatter plot from left to right. If the points climb as you walk, what does that say about the relationship?',
    },
    challengeRating: 3,
  }),
  q(434010, 'Inequalities', 'Graph inequality', 'Which statement describes the graph of x <= 4 on a number line?', 'Closed circle at 4, shaded left', [
    miss('Open circle at 4, shaded left', 'The symbol includes equality, so the endpoint is closed.', 'Less than or equal includes 4.'),
    miss('Closed circle at 4, shaded right', 'That represents x >= 4.', 'Less than values are to the left.'),
    miss('Open circle at 4, shaded right', 'That represents x > 4.', 'Check both endpoint and direction.'),
  ]),
])
