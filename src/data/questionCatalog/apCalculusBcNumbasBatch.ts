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
    'Coverage source: Numbas and WeBWorK AP Calculus BC clusters. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from Numbas/WeBWorK AP Calculus BC coverage',
})

export const apCalculusBcNumbasBatchQuestions = makeQuestionBank('Mathematics', [
  q(426001, 'Series', 'Geometric series', 'For |r| < 1, the infinite geometric series a + ar + ar^2 + ... sums to:', 'a / (1 - r)', [
    miss('a / r', 'That misses the repeated-tail structure.', 'Use the standard geometric sum.'),
    miss('a(1 - r)', 'That multiplies instead of dividing.', 'The denominator is 1 - r.'),
    miss('It always diverges', 'Geometric series converge when |r| < 1.', 'Check the ratio condition.'),
  ]),
  q(426002, 'Series', 'p-series', 'The p-series sum of 1/n^p converges when:', 'p > 1', [
    miss('p <= 1', 'Those p-series diverge.', 'Harmonic p = 1 is the boundary.'),
    miss('p = 0 only', 'That gives constant terms, not convergence.', 'Use the p-series test.'),
    miss('All positive p work', 'p between 0 and 1 still diverges.', 'The threshold is strictly greater than 1.'),
  ]),
  q(426003, 'Series', 'nth term test', 'If the terms a_n of a series do not approach 0, then the series:', 'Diverges', [
    miss('Converges absolutely', 'Terms must approach 0 for any chance of convergence.', 'Use the divergence test.'),
    miss('Converges conditionally', 'Conditional convergence still requires terms tending to 0.', 'No zero limit means divergence.'),
    miss('Needs no further conclusion', 'The nth term test is decisive in this case.', 'If terms do not go to 0, stop.'),
  ]),
  q(426004, 'Power Series', 'Radius from ratio test', 'For the power series sum (x - 2)^n / 3^n, the radius of convergence is:', '3', [
    miss('2', 'That is the center, not the radius.', 'Center and radius are different.'),
    miss('1/3', 'That reverses the scale.', 'Converges when |x - 2| / 3 < 1.'),
    miss('All real numbers', 'This is geometric in (x - 2)/3.', 'Apply |ratio| < 1.'),
  ]),
  q(426005, 'Taylor Series', 'Maclaurin for e^x', 'The Maclaurin series for e^x begins:', '1 + x + x^2/2! + x^3/3! + ...', [
    miss('x - x^3/3! + x^5/5! - ...', 'That is sine.', 'e^x has all positive powers with factorial denominators.'),
    miss('1 - x^2/2! + x^4/4! - ...', 'That is cosine.', 'e^x includes every power.'),
    miss('1 / (1 - x) only for all x', 'That is the geometric series form.', 'Use the exponential series.'),
  ]),
  q(426006, 'Advanced Integration', 'Integration by parts', 'Integration by parts is based on rearranging which derivative rule?', 'The product rule', [
    miss('The quotient rule', 'Integration by parts comes from differentiating a product.', 'Think u v.'),
    miss('The chain rule only', 'Substitution is the integration analogue of chain rule.', 'Parts pairs two factors.'),
    miss('The constant rule', 'Constants are not the source of the formula.', 'Use product derivative.'),
  ]),
  q(426007, 'Improper Integrals', 'Improper convergence', 'The integral from 1 to infinity of 1/x^2 dx:', 'Converges', [
    miss('Diverges because the interval is infinite', 'Infinite intervals can still converge.', 'Compare with p-integrals where p > 1.'),
    miss('Diverges because 1/x^2 is positive', 'Positive functions can have finite area.', 'Decay rate matters.'),
    miss('Equals infinity automatically', 'Not automatic; compute or compare.', 'Antiderivative is -1/x.'),
  ]),
  q(426008, 'Parametric Calculus', 'Parametric slope', 'For x(t) = t^2 and y(t) = t^3, dy/dx equals:', '(3t^2) / (2t)', [
    miss('2t / 3t^2', 'That reverses dx/dt and dy/dt.', 'dy/dx = (dy/dt)/(dx/dt).'),
    miss('3t^2 + 2t', 'Parametric slope is a ratio, not a sum.', 'Differentiate both, then divide.'),
    miss('t^6', 'That multiplies the original functions.', 'Use derivatives with respect to t.'),
  ]),
  q(426009, 'Polar Calculus', 'Polar area', 'The area enclosed by a polar curve r = f(theta) from alpha to beta is:', '1/2 integral from alpha to beta of r^2 dtheta', [
    miss('Integral of r dtheta with no 1/2', 'Polar area uses r squared and the 1/2 factor.', 'Think sector area.'),
    miss('Integral of x dy only', 'That is a different line-integral expression.', 'Use the AP polar formula.'),
    miss('2 integral of r^2 dtheta', 'The factor is 1/2, not 2.', 'Sector area drives the formula.'),
  ]),
  q(426010, 'Vector Functions', 'Speed from velocity', 'For a vector-valued position r(t), speed is:', "The magnitude of the velocity vector r'(t)", [
    miss('The x-coordinate of position only', 'Speed uses the whole velocity vector.', 'Take magnitude after differentiating.'),
    miss('The derivative of acceleration', 'Acceleration is already derivative of velocity.', 'Speed comes from velocity.'),
    miss('The signed slope dy/dx only', 'Speed is nonnegative magnitude, not one coordinate slope.', 'Use vector length.'),
  ]),
])
