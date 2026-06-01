import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_MATHCS_SUB_TOPICS,
  AP_WORKOUT_MATHCS_MENTOR_HINTS,
  AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
} from './apWorkoutMathCsPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/limits|continuity/i.test(chapter)) {
    return `${title} is about local behavior near an input. The useful answer is "${correct}"; check what the expression or graph approaches, and remember that continuity means the approached value and the actual value line up.`
  }
  if (/derivative|applications|modeling/i.test(chapter)) {
    return `${title} is about rate of change. The useful answer is "${correct}"; identify whether the problem asks for slope, a rule for differentiating, a sign pattern, or a model built from changing quantities.`
  }
  if (/integration|accumulation/i.test(chapter)) {
    return `${title} is about accumulation. The useful answer is "${correct}"; use antiderivatives, signed area, units, or a substitution clue to connect tiny pieces into a total.`
  }
  if (/differential equations/i.test(chapter)) {
    return `${title} is about functions defined by their rates of change. The useful answer is "${correct}"; separate variables, use initial conditions to pin down constants, and read slope fields as local derivative information.`
  }
  if (/sequences|series/i.test(chapter)) {
    return `${title} is about infinite lists and sums. The useful answer is "${correct}"; first ask whether terms shrink to zero, then choose the convergence test that matches the series pattern.`
  }
  if (/parametric|polar|vectors|multivariable/i.test(chapter)) {
    return `${title} extends calculus beyond one input. The useful answer is "${correct}"; track the coordinate system, direction, region, constraint, or variable being held fixed before applying the rule.`
  }
  return `${title} is a calculus concept. The useful answer is "${correct}"; connect the algebraic rule to the graph, rate, area, or model the question is really asking about.`
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
  source: 'Generated from Numbas/WeBWorK coverage',
})

const _baseCalculusWorkoutGeneratedQuestions = makeQuestionBank('Mathematics', [
  q(396001, 'Chapter 1: Limits, Continuity, and the Language of Change', 'Direct substitution', 'Evaluate lim x->2 of (x^2 + 3).', '7', [
    miss('5', 'That uses x + 3 instead of x^2 + 3.', 'Substitute 2 into the whole expression.'),
    miss('4', 'That stops at x^2.', 'Do not forget the +3.'),
    miss('Does not exist', 'Polynomials are continuous everywhere.', 'Direct substitution works here.'),
  ]),
  q(396002, 'Chapter 1: Limits, Continuity, and the Language of Change', 'Removable factor', 'Evaluate lim x->3 of (x^2 - 9)/(x - 3).', '6', [
    miss('0', 'The expression is 0/0 before simplification, not the limit value.', 'Factor x^2 - 9.'),
    miss('Does not exist', 'The hole is removable after cancellation.', 'Cancel x - 3, then substitute.'),
    miss('3', 'After cancellation the expression is x + 3.', 'Use difference of squares.'),
  ]),
  q(396003, 'Chapter 1: Limits, Continuity, and the Language of Change', 'One-sided mismatch', 'If lim x->1- f(x) = 2 and lim x->1+ f(x) = 5, then lim x->1 f(x):', 'Does not exist', [
    miss('2', 'That only uses the left-hand limit.', 'Two-sided limits need both sides to agree.'),
    miss('5', 'That only uses the right-hand limit.', 'Compare both one-sided limits.'),
    miss('3.5', 'Limits do not average mismatched one-sided values.', 'Agreement, not averaging, is required.'),
  ]),
  q(396004, 'Chapter 1: Limits, Continuity, and the Language of Change', 'Infinite behavior', 'As x approaches 0 from the right, 1/x approaches:', 'Positive infinity', [
    miss('Negative infinity', 'From the right, x is positive.', 'Use the sign of small positive denominators.'),
    miss('0', 'The reciprocal of a tiny positive number is huge.', 'Try x = 0.001.'),
    miss('1', 'There is no substitution at x = 0.', 'Think limiting behavior.'),
  ]),
  q(396005, 'Chapter 1: Limits, Continuity, and the Language of Change', 'Continuity at a point', 'A function is continuous at x = a when:', 'f(a) exists, the limit exists, and they are equal', [
    miss('Only f(a) exists', 'A filled point alone is not enough.', 'The graph must approach that value too.'),
    miss('Only the limit exists', 'The function value must match the limit.', 'Continuity connects value and limit.'),
    miss('The derivative is negative', 'Derivative sign is unrelated to the definition of continuity.', 'Use the three continuity conditions.'),
  ]),
  q(396006, 'Chapter 2: Derivative Meaning and Rules', 'Power rule', 'What is d/dx of x^5?', '5x^4', [
    miss('x^4', 'The coefficient 5 is missing.', 'Bring the exponent down.'),
    miss('5x^5', 'The exponent should decrease by 1.', 'Power rule: nx^(n-1).'),
    miss('x^6/6', 'That is an antiderivative pattern.', 'The question asks derivative.'),
  ]),
  q(396007, 'Chapter 2: Derivative Meaning and Rules', 'Constant derivative', 'What is d/dx of 11?', '0', [
    miss('11', 'A constant does not change with x.', 'Derivative measures rate of change.'),
    miss('1', 'That is the derivative of x, not 11.', 'No x is present.'),
    miss('11x', 'That is an antiderivative.', 'Differentiate, do not integrate.'),
  ]),
  q(396008, 'Chapter 2: Derivative Meaning and Rules', 'Linearity', 'What is d/dx of 3x^2 - 4x + 9?', '6x - 4', [
    miss('6x + 4', 'The derivative of -4x is -4.', 'Keep the sign.'),
    miss('3x - 4', 'The derivative of 3x^2 is 6x.', 'Apply the power rule to x^2.'),
    miss('x^3 - 2x^2 + 9x', 'That is integration-like.', 'Use derivative rules term by term.'),
  ]),
  q(396009, 'Chapter 2: Derivative Meaning and Rules', 'Product rule', 'Differentiate f(x) = x^2 sin x.', '2x sin x + x^2 cos x', [
    miss('2x cos x', 'That differentiates both factors but drops product structure.', 'Use u v\' + v u\'.'),
    miss('x^2 cos x', 'That only differentiates sin x.', 'Also differentiate x^2.'),
    miss('2x sin x', 'That only differentiates x^2.', 'Also differentiate sin x.'),
  ]),
  q(396010, 'Chapter 2: Derivative Meaning and Rules', 'Quotient rule', 'For f(x) = x/(x + 1), f\'(x) equals:', '1/(x + 1)^2', [
    miss('1', 'That ignores the denominator.', 'Use quotient rule or rewrite carefully.'),
    miss('x/(x + 1)^2', 'The numerator simplifies to 1, not x.', 'Compute (x+1)-x.'),
    miss('-1/(x + 1)^2', 'The sign is reversed.', 'Derivative numerator is (x+1)-x.'),
  ]),
  q(396011, 'Chapter 2: Derivative Meaning and Rules', 'Chain rule', 'Differentiate (2x + 5)^3.', '6(2x + 5)^2', [
    miss('3(2x + 5)^2', 'That misses the derivative of the inside.', 'Multiply by 2.'),
    miss('(2x + 5)^2', 'That misses both the outer coefficient and inner derivative.', 'Outer derivative gives 3; inner gives 2.'),
    miss('3(2x + 5)^4', 'The exponent should decrease.', 'Power rule on the outside.'),
  ]),
  q(396012, 'Chapter 2: Derivative Meaning and Rules', 'Exponential derivative', 'What is d/dx of e^(3x)?', '3e^(3x)', [
    miss('e^(3x)', 'That misses the chain-rule factor 3.', 'Differentiate the exponent.'),
    miss('3x e^(3x)', 'The derivative of 3x is 3, not 3x.', 'Use chain rule.'),
    miss('e^3', 'The variable x remains in the exponent.', 'Do not treat 3x as constant.'),
  ]),
  q(396013, 'Chapter 2: Derivative Meaning and Rules', 'Log derivative', 'What is d/dx of ln x?', '1/x', [
    miss('x', 'That is not the logarithm derivative.', 'Recall the standard derivative.'),
    miss('ln x / x', 'There is no extra ln x factor.', 'Basic rule: derivative of ln x is reciprocal.'),
    miss('0', 'ln x changes with x.', 'It is not constant.'),
  ]),
  q(396014, 'Chapter 2: Derivative Meaning and Rules', 'Trig derivative', 'What is d/dx of cos x?', '-sin x', [
    miss('sin x', 'The sign is wrong.', 'Cosine differentiates to negative sine.'),
    miss('-cos x', 'That is not the derivative of cosine.', 'Derivative rotates to sine with a negative.'),
    miss('tan x', 'Tangent is not the derivative of cosine.', 'Use the basic trig derivative.'),
  ]),
  q(396015, 'Applications of Derivatives', 'Tangent slope', 'For y = x^2 at x = 3, the tangent slope is:', '6', [
    miss('9', 'That is the function value, not the slope.', 'Differentiate first.'),
    miss('3', 'That is the x-coordinate.', 'Slope is y\' = 2x.'),
    miss('12', 'That doubles the correct slope.', 'Evaluate 2x at 3 once.'),
  ]),
  q(396016, 'Applications of Derivatives', 'Critical point', 'A critical point can occur where:', 'f\'(x) = 0 or f\'(x) is undefined', [
    miss('f(x) = 0 only', 'Zeros of the function are x-intercepts, not necessarily critical points.', 'Critical points concern the derivative.'),
    miss('f\'(x) = 1 only', 'Derivative equal to 1 is not the standard critical condition.', 'Look for horizontal or undefined tangent.'),
    miss('The function value is simply high on the graph', 'A high output value alone is not a critical-point condition; the derivative behavior matters.', 'Use derivative behavior.'),
  ]),
  q(396017, 'Applications of Derivatives', 'Increasing interval', 'If f\'(x) > 0 on an interval, f is:', 'Increasing on that interval', [
    miss('Decreasing on that interval', 'Negative derivative indicates decreasing.', 'Positive slope means rising.'),
    miss('Always concave down', 'Concavity depends on f\'\'.', 'First derivative controls increasing/decreasing.'),
    miss('Constant on that interval', 'A positive derivative means change.', 'Constant functions have derivative 0.'),
  ]),
  q(396018, 'Applications of Derivatives', 'Second derivative', 'If f\'\'(x) < 0 on an interval, f is:', 'Concave down', [
    miss('Concave up', 'Positive second derivative means concave up.', 'Negative means slopes are decreasing.'),
    miss('Always increasing', 'Increasing depends on f\'.', 'Second derivative controls concavity.'),
    miss('Undefined everywhere', 'A negative second derivative is defined.', 'Do not confuse sign with existence.'),
  ]),
  q(396019, 'Applications of Derivatives', 'Local maximum test', 'If f\' changes from positive to negative at x = a, then f has:', 'A local maximum at a', [
    miss('A local minimum at a', 'Minimum is negative-to-positive.', 'The function rises then falls.'),
    miss('No possible extremum', 'A sign change in f\' is strong evidence of an extremum.', 'Track increasing then decreasing.'),
    miss('An inflection point only', 'Inflection concerns concavity change.', 'This is first-derivative sign behavior.'),
  ]),
  q(396020, 'Applications of Derivatives', 'Optimization setup', 'To maximize area with a fixed perimeter, the first key step is usually to:', 'Write the area as a function of one variable using the constraint', [
    miss('Differentiate the perimeter without using area', 'The objective is area, not perimeter.', 'Use the constraint to reduce variables.'),
    miss('Set every variable equal to zero', 'That usually destroys the geometry.', 'Keep the constraint meaningful.'),
    miss('Ignore the constraint', 'The fixed perimeter is essential.', 'Optimization needs objective plus constraint.'),
  ]),
  q(396021, 'Chapter 4: Integration and Accumulation', 'Basic antiderivative', 'An antiderivative of 4x^3 is:', 'x^4 + C', [
    miss('12x^2 + C', 'That is the derivative of 4x^3.', 'Integrate by raising the power.'),
    miss('4x^4 + C', 'You forgot to divide by the new exponent.', 'Power rule for integration divides by n+1.'),
    miss('x^3 + C', 'The power should increase.', 'Reverse the derivative rule.'),
  ]),
  q(396022, 'Chapter 4: Integration and Accumulation', 'Constant of integration', 'Why do indefinite integrals include + C?', 'Because functions differing by a constant have the same derivative', [
    miss('Because every integral must equal a positive number', 'Integrals can be negative or functions.', 'C represents vertical shifts.'),
    miss('Because C is always zero', 'If C were always zero, it would not be needed.', 'There are infinitely many antiderivatives.'),
    miss('Because derivatives of constants are one', 'Derivatives of constants are zero.', 'That is exactly why constants disappear.'),
  ]),
  q(396023, 'Chapter 4: Integration and Accumulation', 'Definite integral meaning', 'A definite integral of velocity over time gives:', 'Change in position', [
    miss('Acceleration only', 'Acceleration is derivative of velocity.', 'Integrating rate accumulates change.'),
    miss('Initial position only', 'The integral gives displacement, not the starting value.', 'Add initial position separately if needed.'),
    miss('Mass', 'Velocity-time area is displacement.', 'Use units: distance/time times time.'),
  ]),
  q(396024, 'Chapter 4: Integration and Accumulation', 'FTC evaluation', 'Evaluate integral from 0 to 2 of 3x^2 dx.', '8', [
    miss('12', 'That may come from substituting into 3x^2 at 2.', 'Find antiderivative x^3.'),
    miss('6', 'That is the derivative-style coefficient.', 'Integrate first, then evaluate.'),
    miss('2', 'That ignores the function height.', 'Use F(2)-F(0).'),
  ]),
  q(396025, 'Chapter 4: Integration and Accumulation', 'Area below axis', 'If f(x) is below the x-axis on an interval, its definite integral over that interval is:', 'Negative signed area', [
    miss('Always positive geometric area', 'Definite integrals track signed area.', 'Below the axis contributes negative.'),
    miss('Always zero', 'Below-axis area can have nonzero signed value.', 'Only cancellation can make zero.'),
    miss('Undefined', 'Being below the axis does not prevent integration.', 'The sign changes, not existence.'),
  ]),
  q(396026, 'Chapter 4: Integration and Accumulation', 'U-substitution clue', 'Which integral most clearly invites u = x^2 + 1?', 'Integral of 2x cos(x^2 + 1) dx', [
    miss('Integral of cos(x^2 + 1) dx', 'It lacks the derivative factor 2x.', 'Look for inside function and its derivative.'),
    miss('Integral of 2x cos x dx', 'The inside is just x, not x^2 + 1.', 'Match u to the composite expression.'),
    miss('Integral of x^2 + 1 dx', 'That can be done directly without substitution.', 'U-sub works best with a composite and derivative.'),
  ]),
  q(396027, 'Chapter 4: Integration and Accumulation', 'Integration by parts', 'Integration by parts is most directly based on:', 'The product rule', [
    miss('The quotient rule only', 'Quotient rule is not the source formula.', 'Integration by parts reverses product differentiation.'),
    miss('The chain rule only', 'Chain rule reversal is substitution.', 'Product rule reversal is parts.'),
    miss('The Pythagorean theorem', 'That is geometry, not integration by parts.', 'Think derivative of uv.'),
  ]),
  q(396028, 'Chapter 4: Integration and Accumulation', 'Average value', 'The average value of f on [a,b] is:', '(1/(b-a)) integral_a^b f(x) dx', [
    miss('integral_a^b f(x) dx', 'That is total accumulation, not average.', 'Divide by interval length.'),
    miss('(b-a) integral_a^b f(x) dx', 'That multiplies when it should divide.', 'Average equals total over length.'),
    miss('f(a) + f(b)', 'Endpoint sum is not the average value formula.', 'Use the integral over the whole interval.'),
  ]),
  q(396029, 'Chapter 6: Differential Equations and Modeling', 'Separable equation', 'dy/dx = xy is separable because it can be written as:', 'dy/y = x dx', [
    miss('dy = x/y dx', 'That divides by y in the wrong direction.', 'Move y with dy.'),
    miss('dy/dx = x + y', 'That is a different equation.', 'Separate variables by sides.'),
    miss('y = x always', 'That is not separation.', 'Rearrange differentials and variables.'),
  ]),
  q(396030, 'Chapter 6: Differential Equations and Modeling', 'Initial condition', 'An initial condition is used to:', 'Find the particular solution from a family of solutions', [
    miss('Make the derivative disappear', 'Initial conditions do not remove derivatives by themselves.', 'They determine constants.'),
    miss('Change every differential equation into algebra only', 'Solving may still require calculus.', 'Use it after general integration.'),
    miss('Prove the equation has no variables', 'Initial conditions specify a point.', 'They pin down C.'),
  ]),
  q(396031, 'Sequences and Series', 'Geometric series', 'The infinite geometric series with first term a and ratio r converges when:', '|r| < 1', [
    miss('|r| > 1', 'Terms grow rather than shrink.', 'Convergence requires shrinking ratio.'),
    miss('r = 1 only', 'Then terms do not shrink to zero unless a is zero.', 'Use absolute value less than one.'),
    miss('a is negative only', 'The first term sign does not decide convergence.', 'Ratio controls long-run behavior.'),
  ]),
  q(396032, 'Sequences and Series', 'Geometric sum', 'For |r| < 1, a + ar + ar^2 + ... equals:', 'a/(1-r)', [
    miss('a/(1+r)', 'The sign in the denominator is wrong.', 'Use 1 minus the ratio.'),
    miss('ar/(1-r)', 'That starts with the second term.', 'The first term is a.'),
    miss('1/(a-r)', 'That mixes parameters incorrectly.', 'Recall the standard geometric formula.'),
  ]),
  q(396033, 'Sequences and Series', 'Nth-term test', 'If the terms of a series do not approach 0, then the series:', 'Diverges', [
    miss('Converges absolutely', 'Terms must approach zero for any convergence.', 'The nth-term test is a quick divergence test.'),
    miss('Converges conditionally', 'Conditional convergence still requires terms to approach zero.', 'No zero term limit means divergence.'),
    miss('Must equal 1', 'There is no fixed sum.', 'The test gives divergence, not a sum.'),
  ]),
  q(396034, 'Sequences and Series', 'P-series', 'The p-series sum 1/n^p converges when:', 'p > 1', [
    miss('p <= 1', 'That is the divergent range.', 'Harmonic p = 1 diverges.'),
    miss('p = 0 only', 'p = 0 gives terms equal to 1.', 'Terms do not go to zero.'),
    miss('p is any real number', 'Convergence depends on p.', 'Use the p-series rule.'),
  ]),
  q(396035, 'Sequences and Series', 'Alternating series', 'The alternating series test requires terms that:', 'Decrease to 0 in magnitude', [
    miss('Increase without bound', 'Then terms do not approach zero.', 'Alternating signs alone are not enough.'),
    miss('Are all positive', 'Alternating series change sign.', 'The test is for alternating signs.'),
    miss('Have ratio exactly 2', 'That would usually grow.', 'Look for decreasing magnitudes.'),
  ]),
  q(396036, 'Parametric and Polar', 'Parametric derivative', 'For parametric x(t), y(t), dy/dx equals:', '(dy/dt)/(dx/dt), when dx/dt is not zero', [
    miss('(dx/dt)/(dy/dt)', 'That is the reciprocal.', 'dy/dx means y-rate over x-rate.'),
    miss('dy/dt + dx/dt', 'Rates are divided, not added.', 'Use chain rule relation.'),
    miss('y/x always', 'Slope is not coordinate ratio in general.', 'Use derivatives with respect to t.'),
  ]),
  q(396037, 'Parametric and Polar', 'Polar point', 'The polar coordinate (r, theta) describes:', 'Distance from origin and angle from the polar axis', [
    miss('Horizontal and vertical distances only', 'That describes Cartesian coordinates.', 'Polar uses radius and angle.'),
    miss('Slope and intercept', 'Those describe a line form.', 'Use radial distance.'),
    miss('Area and volume', 'Polar coordinates locate points.', 'They are not measurements of region size.'),
  ]),
  q(396038, 'Vectors', 'Vector magnitude', 'The magnitude of vector <3,4> is:', '5', [
    miss('7', 'That adds components rather than using Pythagorean length.', 'Compute sqrt(3^2+4^2).'),
    miss('1', 'That subtracts components.', 'Magnitude is nonnegative length.'),
    miss('25', 'That is the squared magnitude.', 'Take the square root.'),
  ]),
  q(396039, 'Vectors', 'Dot product sign', 'If two nonzero vectors have dot product 0, they are:', 'Perpendicular', [
    miss('Parallel in the same direction', 'Same-direction parallel vectors have positive dot product.', 'Zero dot product means orthogonal.'),
    miss('Parallel in opposite directions', 'Opposite parallel vectors have negative dot product.', 'Think 90 degrees.'),
    miss('Identical', 'Identical nonzero vectors have positive dot product.', 'Use the angle interpretation.'),
  ]),
  q(396040, 'Vectors', 'Gradient meaning', 'The gradient of a scalar function points in the direction of:', 'Steepest increase', [
    miss('Steepest decrease only', 'The negative gradient points steepest downhill.', 'Gradient itself points uphill.'),
    miss('Zero change always', 'Gradient can be nonzero.', 'It shows fastest local increase.'),
    miss('Local spinning of a vector field', 'That is curl language; the gradient organizes change in a scalar field.', 'Gradient is about scalar fields.'),
  ]),
  q(396041, 'Multivariable', 'Partial derivative', 'A partial derivative with respect to x treats other independent variables as:', 'Constants', [
    miss('Variables to differentiate at the same time', 'That would be total differentiation.', 'Partial means one variable changes.'),
    miss('Always zero variables', 'Other variables are held fixed, not erased.', 'Treat them like constants.'),
    miss('New dependent variables', 'The role does not change.', 'Hold all but x fixed.'),
  ]),
  q(396042, 'Multivariable', 'Critical point', 'For f(x,y), a typical interior critical point satisfies:', 'f_x = 0 and f_y = 0', [
    miss('f_x = 0 only', 'Both first partials matter.', 'Set the gradient equal to zero.'),
    miss('f_y = 1 only', 'A first partial equal to 1 is not the critical condition.', 'Use zero partial derivatives.'),
    miss('x = y always', 'Critical points need not lie on x = y.', 'Use derivative equations.'),
  ]),
  q(396043, 'Multivariable', 'Double integral', 'A double integral over a region usually accumulates:', 'A quantity over area', [
    miss('A quantity over time only', 'Time integrals are usually single-variable unless time-region is specified.', 'Double integrals use area regions.'),
    miss('Only a boundary curve length', 'Line integrals accumulate along curves.', 'Double integrals cover regions.'),
    miss('Only one point value', 'Integration accumulates many values.', 'Think area sweep.'),
  ]),
  q(396044, 'Multivariable', 'Lagrange multipliers', 'Lagrange multipliers are used for:', 'Optimization subject to constraints', [
    miss('Factoring quadratics only', 'That is algebra, not Lagrange multipliers.', 'Constraints are the key clue.'),
    miss('Testing every possible input without using the constraint equation', 'Lagrange multipliers use the constraint directly instead of brute-force guessing.', 'This is multivariable optimization.'),
    miss('Computing simple averages only', 'Averages do not require Lagrange multipliers.', 'Use when a constraint limits choices.'),
  ]),
  q(396045, 'Chapter 6: Differential Equations and Modeling', 'Slope field', 'A slope field visualizes:', 'The derivative dy/dx at many points', [
    miss('Only exact solution curves with no slope information', 'Slope fields show local direction information.', 'Small line segments represent slopes.'),
    miss('The area under a curve only', 'That is integral geometry.', 'Slope fields are for differential equations.'),
    miss('A histogram of data', 'Histograms display distributions.', 'Slope fields display rates.'),
  ]),
  q(396046, 'Modeling', 'Related rates', 'Related rates problems usually connect variables by:', 'A shared equation differentiated with respect to time', [
    miss('A list of true-or-false cases with no changing quantities', 'Related rates need variables tied by an equation and changing with time.', 'Use an equation like area or volume.'),
    miss('Ignoring time completely', 'Rates usually involve time.', 'Differentiate both sides with respect to t.'),
    miss('Only factoring constants', 'Factoring may help algebra, but the method is time differentiation.', 'Look for changing quantities.'),
  ]),
  q(396047, 'Modeling', 'Linear approximation', 'Linear approximation near x = a uses:', 'f(a) + f\'(a)(x-a)', [
    miss('f\'(a) + f(a)(x-a)', 'The value and slope are swapped.', 'Start at f(a), move by slope times change.'),
    miss('f(a)(x-a)', 'This misses the original value and slope.', 'Use tangent line form.'),
    miss('f(x)^2', 'That is not a linear approximation.', 'Use the tangent line.'),
  ]),
  q(396048, 'Modeling', 'Newton method', 'Newton\'s method uses tangent lines to approximate:', 'Roots of an equation', [
    miss('Only areas under curves', 'Area is integration, not Newton iteration.', 'Newton targets f(x)=0.'),
    miss('Only maximum volume boxes', 'Optimization is a different use of derivatives.', 'Newton uses x - f/f\'.'),
    miss('Whether a statement is true or false without solving an equation', 'Newton’s method is numerical calculus for approximating roots, not logical truth evaluation.', 'It iterates toward zeros.'),
  ]),
  q(396049, 'Concept Checks', 'Differentiability implies', 'If a function is differentiable at a point, then it is also:', 'Continuous at that point', [
    miss('Discontinuous at that point', 'Differentiability is stronger than continuity.', 'No sharp break or hole is allowed.'),
    miss('Guaranteed to have derivative zero', 'Differentiability says the derivative exists, not that it is zero.', 'Slope can be many values.'),
    miss('Guaranteed to be linear everywhere', 'Differentiable functions can be curved.', 'Local smoothness is not global linearity.'),
  ]),
  q(396050, 'Concept Checks', 'Continuity does not imply', 'A function can be continuous at a point but fail to be differentiable there if it has:', 'A sharp corner or cusp', [
    miss('A removable hole', 'A hole means not continuous at that point unless filled correctly.', 'Think absolute value at 0.'),
    miss('No graph at all', 'Continuity requires a defined local graph.', 'The issue is sharpness.'),
    miss('A constant slope nearby', 'Constant slope usually supports differentiability.', 'Corners have mismatched one-sided slopes.'),
  ]),
])

export const calculusWorkoutGeneratedQuestions = runPolish(_baseCalculusWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_MATHCS_SUB_TOPICS,
    mentorHints: AP_WORKOUT_MATHCS_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
    source: 'apWorkoutMathCs',
  },
])
