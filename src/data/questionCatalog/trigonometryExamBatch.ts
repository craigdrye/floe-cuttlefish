import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

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
  lesson:
    'Coverage source: Numbas, WeBWorK, and OER trigonometry collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from Numbas/WeBWorK/OER Trigonometry coverage',
})

export const trigonometryExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(441001, 'Angles and Radians', 'Coterminal angle', 'Which angle is coterminal with 45 degrees?', '405 degrees', [
    miss('90 degrees', 'That is not 360 degrees away from 45.', 'Coterminal angles differ by full rotations.'),
    miss('135 degrees', 'That changes the terminal side.', 'Add or subtract 360 degrees.'),
    miss('-45 degrees', 'That reflects across the initial side, not coterminal with 45.', 'Check the difference from 45.'),
  ]),
  q(441002, 'Trig Graphs', 'Period change', 'What is the period of y = sin(2x)?', 'pi', [
    miss('2pi', 'That is the period of sin(x), not sin(2x).', 'Period is 2pi divided by the coefficient of x.'),
    miss('4pi', 'That doubles instead of halves the base period.', 'A larger inside coefficient shortens the period.'),
    miss('2', 'The period is an angle measure, not just the coefficient.', 'Use 2pi / 2.'),
  ]),
  q(441003, 'Trig Graphs', 'Phase shift', 'For y = cos(x - pi/4), what is the phase shift?', 'Right pi/4', [
    miss('Left pi/4', 'The form x - c shifts right by c.', 'Solve x - pi/4 = 0 for the new starting point.'),
    miss('Up pi/4', 'The shift is inside the cosine, so it is horizontal.', 'Vertical shifts are outside the trig function.'),
    miss('No shift', 'The input has been changed from x.', 'Compare with y = cos(x).'),
  ]),
  q(441004, 'Trig Equations', 'Cosine solutions', 'Solve cos(x) = 0 on [0, 2pi].', 'pi/2 and 3pi/2', [
    miss('0 and pi', 'Those are where sine is zero, not cosine.', 'Cosine is the x-coordinate on the unit circle.'),
    miss('pi only', 'There are two solutions in the interval.', 'Trace the full unit circle.'),
    miss('pi/6 and 5pi/6', 'Those have cosine values +/-sqrt(3)/2, not zero.', 'Look for points on the y-axis.'),
  ]),
  q(441005, 'Identities', 'Reciprocal identity', 'Which expression is equivalent to sec(x)?', '1/cos(x)', [
    miss('1/sin(x)', 'That is csc(x), not sec(x).', 'Secant is reciprocal cosine.'),
    miss('sin(x)/cos(x)', 'That is tan(x).', 'Use the reciprocal identity.'),
    miss('cos(x)/sin(x)', 'That is cot(x).', 'Match sec with cosine.'),
  ]),
  q(441006, 'Identities', 'Tangent identity', 'Which identity correctly defines tan(x)?', 'sin(x)/cos(x)', [
    miss('cos(x)/sin(x)', 'That is cot(x).', 'Tangent is sine over cosine.'),
    miss('1/sin(x)', 'That is csc(x).', 'Use a quotient identity, not a reciprocal alone.'),
    miss('sin(x) + cos(x)', 'Tangent is not a sum identity.', 'Recall the basic quotient relationship.'),
  ]),
  q(441007, 'Reference Angles', 'Reference angle', 'What is the reference angle for 150 degrees?', '30 degrees', [
    miss('60 degrees', 'That would be the reference angle for 120 degrees.', 'In quadrant II, subtract from 180.'),
    miss('150 degrees', 'Reference angles are acute except on axes.', 'Use the angle to the nearest x-axis.'),
    miss('210 degrees', 'That is coterminal direction work, not reference angle.', 'Reference angle is positive and acute.'),
  ]),
  q(441008, 'Non-Right Triangles', 'Triangle area formula', 'A triangle has sides 6 and 10 with included angle 30 degrees. What is its area?', '15', [
    miss('30', 'That misses the one-half factor or sine value.', 'Use (1/2)ab sin(C).'),
    miss('60', 'That uses side product only.', 'Include both one-half and sin(30).'),
    miss('300', 'That multiplies all visible numbers directly.', 'Use the trig area formula.'),
  ]),
  q(441009, 'Polar Coordinates', 'Polar to rectangular', 'The polar point (r, theta) = (2, 0) has which rectangular coordinates?', '(2, 0)', [
    miss('(0, 2)', 'That would match theta = pi/2.', 'Use x = r cos(theta), y = r sin(theta).'),
    miss('(2, 2)', 'The sine component is zero at theta = 0.', 'Evaluate cos(0) and sin(0).'),
    miss('(-2, 0)', 'That would point along angle pi.', 'Angle 0 points along positive x.'),
  ]),
  q(441010, 'Complex Trig Form', 'De Moivre idea', 'If z = r(cos theta + i sin theta), what is z^2?', 'r^2(cos 2theta + i sin 2theta)', [
    miss('r(cos 2theta + i sin 2theta)', 'The modulus should also be squared.', 'Powers raise r and multiply the angle.'),
    miss('r^2(cos theta + i sin theta)', 'The angle should double when squaring.', 'Use De Moivre on both parts.'),
    miss('2r(cos theta + i sin theta)', 'Squaring is not the same as multiplying the modulus by 2.', 'Apply the power to polar form.'),
  ]),
])
