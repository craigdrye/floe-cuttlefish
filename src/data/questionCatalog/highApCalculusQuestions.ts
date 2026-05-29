import { makeQuestionBank } from './base'

export const highApCalculusQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Chapter 1: Limits and Continuity
  // -----------------------------------------------------------------------
  {
    id: 4400300,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'Limit by direct substitution',
    prompt: 'Evaluate lim x->2 of (x^2 + 3x - 1).',
    correct: '9, because the polynomial is continuous everywhere so direct substitution gives 4 + 6 - 1',
    wrong: [
      ['7, because 2^2 + 3(2) - 1 equals 7', 'That arithmetic is wrong: 4 + 6 - 1 = 9, not 7.', 'Recompute 4 + 6 - 1 carefully.'],
      ['Does not exist, because the limit is an indeterminate form', 'Polynomials are continuous, so substitution gives a finite value, not 0/0.', 'No indeterminate form appears here.'],
      ['11, because 2^2 + 3(2) + 1 equals 11', 'The constant term is -1, not +1; sign matters.', 'Watch the sign of the constant.'],
    ],
    lesson: 'For polynomials and other functions continuous at the target point, the limit equals the value found by direct substitution.',
  },
  {
    id: 4400301,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'Indeterminate 0/0 by factoring',
    prompt: 'Evaluate lim x->3 of (x^2 - 9) / (x - 3).',
    correct: '6, because (x^2 - 9)/(x - 3) simplifies to x + 3 for x != 3 and approaches 3 + 3',
    wrong: [
      ['0, because the numerator is 0 at x = 3', 'The denominator is also 0, giving 0/0; you must factor or use L\'Hopital before concluding.', 'It is an indeterminate form.'],
      ['Does not exist, because the function is undefined at x = 3', 'A removable discontinuity still has a two-sided limit; the limit can exist even if the value does not.', 'A hole does not destroy the limit.'],
      ['9, because 3^2 equals 9', 'After cancellation the simplified expression is x + 3, not x^2.', 'Factor numerator as (x - 3)(x + 3).'],
    ],
    lesson: 'For 0/0 forms, factor or rationalize first; the limit captures behavior approaching the point, not the (often undefined) value at it.',
  },
  {
    id: 4400302,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'L\'Hopital\'s Rule',
    prompt: 'Evaluate lim x->0 of (sin(3x)) / x.',
    correct: '3, because differentiating top and bottom gives 3cos(3x)/1, which approaches 3',
    wrong: [
      ['1, because lim sin(x)/x equals 1', 'That standard limit needs the argument and denominator to match; here the argument is 3x, so the limit is 3.', 'Adjust for the inner multiplier.'],
      ['0, because sin(0) is 0', 'The numerator is 0 and so is the denominator; this is 0/0, not simply 0.', 'It is indeterminate, not zero.'],
      ['Does not exist, because oscillation prevents a limit', 'sin(3x)/x has a well-defined two-sided limit at 0 equal to 3.', 'Use L\'Hopital or rescale the variable.'],
    ],
    lesson: 'For 0/0 forms involving sin or cos, L\'Hopital\'s Rule or rescaling produces clean answers; lim sin(kx)/x = k.',
  },
  {
    id: 4400303,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'Infinite limit and asymptote',
    prompt: 'Evaluate lim x->infinity of (3x^2 + 5) / (2x^2 - x + 1).',
    correct: '3/2, because dividing numerator and denominator by x^2 leaves the leading coefficient ratio',
    wrong: [
      ['Infinity, because the numerator grows without bound', 'The denominator also grows like x^2, so the ratio stabilizes at the leading coefficient ratio.', 'Compare leading powers.'],
      ['0, because lower terms vanish', 'Lower-order terms vanish, but the leading-order ratio 3x^2/2x^2 does not vanish.', 'Keep the leading coefficients.'],
      ['1, because top and bottom are both quadratics', 'Same degree means the ratio of leading coefficients, not 1.', 'Use 3 over 2.'],
    ],
    lesson: 'For rational functions, the limit at infinity equals the ratio of leading coefficients when numerator and denominator have the same degree.',
  },
  {
    id: 4400304,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'Intermediate Value Theorem',
    prompt: 'Let f(x) = x^3 + x - 1. Which conclusion is justified by the Intermediate Value Theorem on [0, 1]?',
    correct: 'There exists c in (0, 1) with f(c) = 0, since f is continuous and f(0) = -1, f(1) = 1',
    wrong: [
      ['f has a maximum on (0, 1) by IVT', 'Maxima follow from the Extreme Value Theorem on closed intervals, not IVT.', 'IVT is about reaching intermediate output values.'],
      ['f is differentiable on (0, 1) by IVT', 'IVT is a continuity theorem; it says nothing about differentiability.', 'Continuity, not smoothness.'],
      ['There is exactly one root of f on (0, 1) by IVT', 'IVT guarantees at least one root, not uniqueness; uniqueness needs monotonicity.', 'IVT does not count roots.'],
    ],
    lesson: 'IVT: if f is continuous on [a, b] and N is between f(a) and f(b), some c in (a, b) satisfies f(c) = N; sign change implies a root.',
  },
  {
    id: 4400305,
    chapter: 'Chapter 1: Limits and Continuity',
    title: 'Classifying discontinuity',
    prompt: 'The function f(x) = (x^2 - 4)/(x - 2) for x != 2, with f(2) = 5, has which kind of discontinuity at x = 2?',
    correct: 'A removable discontinuity, because the limit exists (equal to 4) but does not match f(2) = 5',
    wrong: [
      ['A jump discontinuity, because left and right limits differ', 'Both one-sided limits equal 4; nothing jumps.', 'Compare the one-sided limits.'],
      ['An infinite discontinuity, because the denominator is 0 at x = 2', 'Numerator also vanishes; the singularity is removable, not infinite.', 'Factor first.'],
      ['No discontinuity, because f is defined at x = 2', 'Being defined is not enough; the value must match the limit for continuity.', 'Continuity needs three conditions.'],
    ],
    lesson: 'Continuity at a requires f(a) defined, the limit at a to exist, and the two to agree; a fixable mismatch is removable.',
  },

  // -----------------------------------------------------------------------
  // Chapter 2: Derivatives Foundation
  // -----------------------------------------------------------------------
  {
    id: 4400306,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Derivative from the definition',
    prompt: 'Using f(x) = x^2, evaluate lim h->0 of (f(x + h) - f(x))/h.',
    correct: '2x, because (x + h)^2 - x^2 = 2xh + h^2 and dividing by h then letting h go to 0 leaves 2x',
    wrong: [
      ['x^2, because that is f(x)', 'The limit defines the derivative, not the original function.', 'Expand (x + h)^2 first.'],
      ['h, because h appears in the expression', 'h is the variable being sent to 0; it cannot remain in the answer.', 'Take the limit after simplifying.'],
      ['2, because the second derivative of x^2 is 2', 'The question asks for f\'(x), not f\'\'(x).', 'Use f\'(x) = 2x.'],
    ],
    lesson: 'The limit definition of the derivative produces the power rule for x^n; algebraic simplification before the limit is essential.',
  },
  {
    id: 4400307,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Power rule',
    prompt: 'Differentiate f(x) = 4x^5 - 7x^2 + 3.',
    correct: '20x^4 - 14x, because the power rule gives nx^(n-1) on each term and constants vanish',
    wrong: [
      ['20x^4 - 14x + 3, because the constant differentiates to 3', 'The derivative of a constant is 0, not the constant itself.', 'Constants disappear under differentiation.'],
      ['4x^4 - 7x + 0, because the coefficients move to the exponent', 'Power rule keeps the coefficient and multiplies by the original exponent, not the new one.', 'Bring down the exponent.'],
      ['5x^4 - 2x, because the original exponents appear', 'You forgot to multiply by the coefficients 4 and 7.', 'Multiply 5 by 4 and 2 by 7.'],
    ],
    lesson: 'Power rule: d/dx[c x^n] = c n x^(n-1); linearity lets you differentiate term by term.',
  },
  {
    id: 4400308,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Product rule',
    prompt: 'Differentiate f(x) = x^2 sin(x).',
    correct: '2x sin(x) + x^2 cos(x), by the product rule (uv)\' = u\'v + uv\'',
    wrong: [
      ['2x cos(x), because the derivative of each factor', 'You multiplied derivatives instead of using the product rule; (uv)\' is not u\'v\'.', 'Use u\'v + uv\'.'],
      ['2x sin(x) - x^2 cos(x), with a sign error on cos', 'The derivative of sin(x) is +cos(x), not -cos(x).', 'd/dx[sin x] = cos x.'],
      ['x^2 cos(x), because only the trig part matters', 'You dropped the contribution from differentiating x^2.', 'Both factors contribute.'],
    ],
    lesson: 'Product rule: (uv)\' = u\'v + uv\'; mistaking it for u\'v\' is one of the most common AP errors.',
  },
  {
    id: 4400309,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Quotient rule',
    prompt: 'Differentiate f(x) = (x + 1)/(x^2 + 1).',
    correct: '((x^2 + 1) - (x + 1)(2x)) / (x^2 + 1)^2, by the quotient rule (low d-high minus high d-low) over low-squared',
    wrong: [
      ['1/(2x), because the derivatives divide', 'You cannot differentiate numerator and denominator separately and divide them.', 'Use the full quotient rule.'],
      ['((x + 1)(2x) - (x^2 + 1)) / (x^2 + 1)^2, with reversed order', 'The order is bottom times derivative of top minus top times derivative of bottom; you swapped them.', 'Mnemonic: low-d-high minus high-d-low.'],
      ['(2x - 1)/(x^2 + 1), by linearity', 'The quotient rule is required; there is no linearity shortcut for quotients.', 'Apply the quotient rule.'],
    ],
    lesson: 'Quotient rule: (u/v)\' = (u\'v - uv\')/v^2; order of subtraction matters because the result is not symmetric.',
  },
  {
    id: 4400310,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Chain rule with nested composition',
    prompt: 'Differentiate f(x) = sin(3x^2 + 1).',
    correct: 'cos(3x^2 + 1) * 6x, applying the chain rule: derivative of outer evaluated at inner times derivative of inner',
    wrong: [
      ['cos(3x^2 + 1), because that is the derivative of the outer function', 'You forgot the chain rule factor: multiply by the derivative of the inner function 6x.', 'Always multiply by the inner derivative.'],
      ['-cos(3x^2 + 1) * 6x, because the derivative of sin is -cos', 'd/dx[sin u] = cos u; the negative sign belongs to d/dx[cos u].', 'Sin gives +cos, not -cos.'],
      ['cos(6x), by differentiating the inside first', 'The chain rule preserves the inner function inside the outer derivative; do not collapse it.', 'Keep the inner argument intact in cos.'],
    ],
    lesson: 'Chain rule: d/dx[f(g(x))] = f\'(g(x)) g\'(x); forgetting g\'(x) is the single most common AP error.',
  },
  {
    id: 4400311,
    chapter: 'Chapter 2: Derivatives Foundation',
    title: 'Implicit differentiation',
    prompt: 'For x^2 + y^2 = 1, find dy/dx at the point (sqrt(3)/2, 1/2).',
    correct: '-sqrt(3), because 2x + 2y(dy/dx) = 0 gives dy/dx = -x/y = -(sqrt(3)/2)/(1/2)',
    wrong: [
      ['sqrt(3), with the sign dropped', 'Solving 2x + 2y y\' = 0 gives y\' = -x/y; the negative sign is required.', 'Watch the sign of -x/y.'],
      ['-1/sqrt(3), by inverting the ratio', 'The formula is -x/y, not -y/x; you inverted the ratio.', 'Numerator is x, denominator is y.'],
      ['0, because the equation is symmetric', 'Symmetry of the equation does not make dy/dx zero except where x = 0.', 'Compute -x/y directly.'],
    ],
    lesson: 'For implicit relations, differentiate both sides with respect to x, treat y as a function of x via the chain rule, then solve for dy/dx.',
  },

  // -----------------------------------------------------------------------
  // Chapter 3: Derivatives Applications
  // -----------------------------------------------------------------------
  {
    id: 4400312,
    chapter: 'Chapter 3: Derivatives Applications',
    title: 'Related rates: sliding ladder',
    prompt: 'A 10 ft ladder slides down a wall. When the foot is 6 ft from the wall and sliding out at 1 ft/s, how fast is the top sliding down?',
    correct: '3/4 ft/s downward, because x^2 + y^2 = 100 gives 2x x\' + 2y y\' = 0, with x = 6, y = 8 yielding y\' = -6/8',
    wrong: [
      ['1 ft/s, equal to the ground rate', 'The rates are linked by the geometry; they need not be equal.', 'Use 2x x\' + 2y y\' = 0.'],
      ['4/3 ft/s, by inverting the ratio', 'The relation gives y\' = -(x/y) x\', not -(y/x) x\'.', 'Be careful which side carries x and which carries y.'],
      ['10 ft/s, the length of the ladder', 'The ladder length is constant; that is the constraint, not the rate.', 'Differentiate the constraint.'],
    ],
    lesson: 'Related rates: write a relation among quantities, differentiate implicitly with respect to time, then substitute the instantaneous values.',
  },
  {
    id: 4400313,
    chapter: 'Chapter 3: Derivatives Applications',
    title: 'Related rates: conical tank',
    prompt: 'Water fills a cone (apex down, height = radius) at 2 m^3/min. How fast is the water level rising when h = 3 m?',
    correct: '2/(9 pi) m/min, because V = pi h^3 / 3 gives dV/dt = pi h^2 dh/dt, so dh/dt = 2/(9 pi)',
    wrong: [
      ['2/(3 pi), by forgetting to substitute h = 3 into h^2', 'You need h^2 = 9 in the denominator, not h = 3.', 'Square the radius factor.'],
      ['2/pi, dropping the h^2 entirely', 'The cross-sectional area at the surface is pi h^2, which scales the rate.', 'Include the full pi h^2 factor.'],
      ['9 pi / 2, by inverting the relation', 'You inverted; dh/dt = (dV/dt)/(pi h^2), not the reciprocal.', 'Solve for dh/dt, not its reciprocal.'],
    ],
    lesson: 'For a cone with r = h, V = pi h^3 / 3; differentiation gives dV/dt = pi h^2 dh/dt, which yields a slowing dh/dt as h grows.',
  },
  {
    id: 4400314,
    chapter: 'Chapter 3: Derivatives Applications',
    title: 'Optimization: max area, fixed perimeter',
    prompt: 'Among rectangles with perimeter 40, which has maximum area?',
    correct: 'The 10 by 10 square, because constraint 2x + 2y = 40 with A = xy gives max at x = y = 10',
    wrong: [
      ['A 5 by 15 rectangle, longer is better', 'Area 75 is less than the square\'s 100; longer is not better here.', 'Compare 75 with 100.'],
      ['A 1 by 19 rectangle, since the perimeter is used efficiently', 'That gives area 19, far from optimal.', 'Equal sides maximize area.'],
      ['No maximum exists, the area is unbounded', 'With perimeter fixed at 40, the area is bounded and achieved at a square.', 'Constraint forces a bound.'],
    ],
    lesson: 'For fixed perimeter, the rectangle of maximum area is a square; the same principle generalizes to isoperimetric problems.',
  },
  {
    id: 4400315,
    chapter: 'Chapter 3: Derivatives Applications',
    title: 'Mean Value Theorem hypotheses',
    prompt: 'Which set of conditions does the Mean Value Theorem require on [a, b] to conclude f\'(c) = (f(b) - f(a))/(b - a) for some c in (a, b)?',
    correct: 'f continuous on [a, b] and differentiable on the open interval (a, b)',
    wrong: [
      ['f differentiable on the closed interval [a, b] including endpoints', 'Differentiability on the open interval is sufficient and is the standard statement.', 'Open interval differentiability suffices.'],
      ['f continuous on (a, b) only, no differentiability needed', 'Without differentiability, f\'(c) is not even defined.', 'You need a derivative to talk about f\'(c).'],
      ['f(a) = f(b), the Rolle condition', 'That is Rolle\'s Theorem, a special case of MVT; the general MVT does not require equal endpoint values.', 'Rolle is the equal-endpoints special case.'],
    ],
    lesson: 'MVT: continuity on [a, b] plus differentiability on (a, b) guarantees a point with derivative equal to the average rate of change.',
  },
  {
    id: 4400316,
    chapter: 'Chapter 3: Derivatives Applications',
    title: 'Linearization',
    prompt: 'Use the linearization of f(x) = sqrt(x) at x = 25 to estimate sqrt(26).',
    correct: '5.1, because L(x) = 5 + (1/10)(x - 25), so L(26) = 5 + 0.1',
    wrong: [
      ['5.099, the calculator value', 'Linearization gives 5.1; the question asks for the linear estimate, not the exact value.', 'Use the linear formula.'],
      ['5.01, by mistakenly using (1/100) as the slope', 'f\'(25) = 1/(2 sqrt(25)) = 1/10, not 1/100.', 'Slope is 1/(2 sqrt(a)).'],
      ['6, by linear interpolation between 25 and 36', 'That is not the tangent-line approximation at 25; the tangent slope is 1/10.', 'Use derivative at the base point.'],
    ],
    lesson: 'Linearization L(x) = f(a) + f\'(a)(x - a) approximates f near a; the tangent line is the best linear model locally.',
  },

  // -----------------------------------------------------------------------
  // Chapter 4: Curve Sketching
  // -----------------------------------------------------------------------
  {
    id: 4400317,
    chapter: 'Chapter 4: Curve Sketching',
    title: 'Critical points',
    prompt: 'For f(x) = x^3 - 3x, what are the critical points?',
    correct: 'x = -1 and x = 1, because f\'(x) = 3x^2 - 3 = 0 gives x^2 = 1',
    wrong: [
      ['x = 0 only, because that is where f equals 0', 'Critical points come from f\'(x) = 0, not f(x) = 0.', 'Set the derivative to zero.'],
      ['x = -3 and x = 3, by solving f\'(x) = 3', 'You should solve f\'(x) = 0, not f\'(x) = 3.', 'Equate the derivative to zero.'],
      ['No critical points exist, because f is unbounded', 'Unboundedness does not preclude critical points; cubics have them.', 'Solve 3x^2 - 3 = 0.'],
    ],
    lesson: 'Critical points are interior x where f\'(x) = 0 or is undefined; they are candidates for local extrema.',
  },
  {
    id: 4400318,
    chapter: 'Chapter 4: Curve Sketching',
    title: 'Concavity and inflection',
    prompt: 'For f(x) = x^3 - 3x, where is the inflection point?',
    correct: 'x = 0, because f\'\'(x) = 6x changes sign there',
    wrong: [
      ['x = 1, a critical point', 'Critical points come from f\', not from sign changes of f\'\'.', 'Use the second derivative.'],
      ['No inflection point, because f is a polynomial', 'Polynomials of degree at least 3 typically have inflection points.', 'Cubics inflect.'],
      ['x = -1, by symmetry alone', 'Symmetry around x = 0 implies the inflection is at 0, not at -1.', 'Solve f\'\'(x) = 0.'],
    ],
    lesson: 'Inflection points are where concavity changes; require f\'\' to change sign, not merely to equal zero.',
  },
  {
    id: 4400319,
    chapter: 'Chapter 4: Curve Sketching',
    title: 'Second derivative test',
    prompt: 'At x = 1, f(x) = x^3 - 3x has f\'(1) = 0 and f\'\'(1) = 6. Conclude:',
    correct: 'A local minimum at x = 1, because f\' is zero and f\'\' is positive there',
    wrong: [
      ['A local maximum, because the critical point is highest', 'Positive f\'\' indicates concave up, which means local minimum, not maximum.', 'Positive curvature equals bowl shape.'],
      ['An inflection point, because f\'\' is nonzero', 'Inflections need f\'\' to change sign; being nonzero rules them out at that point.', 'Inflections involve sign change.'],
      ['Nothing can be concluded without more data', 'The second derivative test gives a definitive answer when f\'\'(c) is nonzero.', 'Apply the test.'],
    ],
    lesson: 'Second derivative test: at a critical point, f\'\'(c) > 0 means local min, f\'\'(c) < 0 means local max, and f\'\'(c) = 0 is inconclusive.',
  },
  {
    id: 4400320,
    chapter: 'Chapter 4: Curve Sketching',
    title: 'Increasing intervals',
    prompt: 'On which intervals is f(x) = x^3 - 3x increasing?',
    correct: '(-infinity, -1) and (1, infinity), where f\'(x) = 3x^2 - 3 is positive',
    wrong: [
      ['(-1, 1), where the function values are smallest', 'On (-1, 1), f\' is negative so f is decreasing, not increasing.', 'Sign of f\' tells you direction.'],
      ['All real numbers, because cubics increase overall', 'This cubic has a local max and min, so it decreases between them.', 'Check the sign of f\'.'],
      ['Only (1, infinity), because the function eventually grows', 'It also increases on (-infinity, -1); both intervals matter.', 'Both branches qualify.'],
    ],
    lesson: 'A function increases where its derivative is positive; sign analysis of f\' partitions the domain.',
  },
  {
    id: 4400321,
    chapter: 'Chapter 4: Curve Sketching',
    title: 'Global versus local extrema',
    prompt: 'On the closed interval [-2, 2], what is the absolute maximum of f(x) = x^3 - 3x?',
    correct: '2, attained at the endpoint x = 2 (and also at the local max x = -1)',
    wrong: [
      ['-2, at the other endpoint', 'f(-2) = -2 is a low value, not a high one.', 'Compute f at endpoints and critical points.'],
      ['Infinity, because cubics are unbounded', 'On a closed interval, the function is bounded by EVT.', 'EVT guarantees a maximum.'],
      ['Does not exist, no maximum on a closed cubic', 'EVT guarantees a maximum on any closed interval for continuous f.', 'Closed plus continuous yields a maximum.'],
    ],
    lesson: 'For continuous f on [a, b], compare values at endpoints and interior critical points; the largest is the absolute maximum.',
  },

  // -----------------------------------------------------------------------
  // Chapter 5: Integration Foundation
  // -----------------------------------------------------------------------
  {
    id: 4400322,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'Antiderivative',
    prompt: 'Find the most general antiderivative of f(x) = 6x^2 - 4x + 1.',
    correct: '2x^3 - 2x^2 + x + C, by reversing the power rule and including the constant of integration',
    wrong: [
      ['2x^3 - 2x^2 + x, no constant included', 'The most general antiderivative requires +C; you missed an entire family of functions.', 'Include the +C.'],
      ['12x - 4, by differentiating again', 'You differentiated instead of antidifferentiating.', 'Reverse the power rule.'],
      ['6x^3 - 4x^2 + x + C, by keeping coefficients fixed', 'You must divide by the new exponent: 6x^2 antidifferentiates to 2x^3, not 6x^3.', 'Divide by n + 1.'],
    ],
    lesson: 'Antidifferentiation reverses the power rule: x^n becomes x^(n+1)/(n+1); always include +C for indefinite integrals.',
  },
  {
    id: 4400323,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'Riemann sum types',
    prompt: 'For f(x) = x^2 on [0, 1] with 4 equal subintervals, which Riemann sum underestimates the true integral?',
    correct: 'Left Riemann sum, because f is increasing so left-endpoint heights are below the curve',
    wrong: [
      ['Right Riemann sum, because the right endpoints are larger', 'Larger right-endpoint heights mean the right sum overestimates, not underestimates.', 'Increasing plus right gives overestimate.'],
      ['Midpoint sum, because it is always too small', 'Midpoint is generally between left and right; for concave-up f it tends to underestimate, but it is not the cleanest answer here.', 'Left is the cleanest underestimate.'],
      ['Trapezoid sum, because trapezoids miss curvature', 'For concave-up f, the trapezoid sum overestimates, not underestimates.', 'Trapezoid overestimates when concave up.'],
    ],
    lesson: 'For increasing f, left sums underestimate and right sums overestimate; for concave-up f, trapezoid overestimates and midpoint underestimates.',
  },
  {
    id: 4400324,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'Trapezoid rule overestimate',
    prompt: 'If f is concave up on [a, b], how does the trapezoid approximation compare to the exact integral?',
    correct: 'It overestimates, because trapezoid chords lie above the curve when concavity is upward',
    wrong: [
      ['It underestimates, because chords cut corners', 'Concave up means the curve dips below its chords, so the trapezoid is above the curve.', 'Curve sags below chord when concave up.'],
      ['It matches exactly, because trapezoids are linear', 'Linearity of trapezoid pieces does not match curved f exactly.', 'Curvature creates error.'],
      ['It depends on whether f is increasing', 'For trapezoid error, concavity is the deciding factor, not monotonicity.', 'Concavity controls trapezoid error.'],
    ],
    lesson: 'Trapezoid overestimates concave-up integrals and underestimates concave-down integrals; this is the standard AP error-direction rule.',
  },
  {
    id: 4400325,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'FTC Part 1',
    prompt: 'If g(x) = integral from 0 to x of sin(t^2) dt, find g\'(x).',
    correct: 'sin(x^2), by the Fundamental Theorem of Calculus Part 1',
    wrong: [
      ['cos(x^2) * 2x, by differentiating the integrand', 'You differentiated sin(t^2); FTC Part 1 says g\'(x) is the integrand evaluated at x, no extra derivative needed.', 'Just evaluate the integrand at x.'],
      ['0, because the integral is a constant', 'The integral is a function of x (upper limit), not a constant.', 'Upper limit is a variable.'],
      ['-cos(x^2), an antiderivative of sin(x^2)', 'No closed form exists, and FTC Part 1 does not require one.', 'FTC bypasses the antiderivative here.'],
    ],
    lesson: 'FTC Part 1: d/dx of integral from a to x of f(t) dt equals f(x); the upper limit\'s rate gives the integrand evaluated there.',
  },
  {
    id: 4400326,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'FTC Part 2 (Net change theorem)',
    prompt: 'If F\'(x) = v(x) is the velocity of an object, what does the integral from a to b of v(x) dx represent?',
    correct: 'The net change in position from time a to time b, by the Net Change Theorem (FTC Part 2)',
    wrong: [
      ['The total distance traveled regardless of direction', 'That would be the integral of |v(x)|; signed velocity gives displacement, not distance.', 'Absolute value matters for distance.'],
      ['The average velocity over the interval', 'Average velocity divides by (b - a); the integral alone is total displacement.', 'Average requires division by length.'],
      ['The acceleration at time b', 'Acceleration is the derivative of velocity, not its integral.', 'Integral is the antiderivative direction.'],
    ],
    lesson: 'Net Change Theorem (FTC Part 2): the integral of a rate equals the total change in the accumulated quantity over the interval.',
  },
  {
    id: 4400327,
    chapter: 'Chapter 5: Integration Foundation',
    title: 'Substitution',
    prompt: 'Evaluate the indefinite integral of 2x cos(x^2) dx.',
    correct: 'sin(x^2) + C, by u-substitution with u = x^2 and du = 2x dx',
    wrong: [
      ['2x sin(x^2) + C, keeping the 2x factor', 'After substitution the 2x dx becomes du and disappears; do not keep it.', 'The 2x absorbs into du.'],
      ['-sin(x^2) + C, with a sign error', 'Antiderivative of cos(u) is +sin(u), not -sin(u).', 'Sign on cos integral is positive.'],
      ['x^2 sin(x^2) + C, by guessing', 'Differentiate to check: the product rule would not yield 2x cos(x^2).', 'Verify by differentiating back.'],
    ],
    lesson: 'u-substitution: pick u so du absorbs an existing factor of the integrand; this is the integral analog of the chain rule.',
  },

  // -----------------------------------------------------------------------
  // Chapter 6: Integration Applications
  // -----------------------------------------------------------------------
  {
    id: 4400328,
    chapter: 'Chapter 6: Integration Applications',
    title: 'Area between curves',
    prompt: 'Find the area of the region bounded by y = x and y = x^2 between x = 0 and x = 1.',
    correct: '1/6, since integral from 0 to 1 of (x - x^2) dx equals 1/2 - 1/3',
    wrong: [
      ['1/2, ignoring the lower curve', 'You need the difference top minus bottom, not just the top.', 'Subtract the lower curve.'],
      ['-1/6, with bottom on top', 'You took bottom minus top; reverse the subtraction to get a positive area.', 'Top curve is x on [0, 1].'],
      ['1, by adding rather than subtracting', 'Adding areas double-counts; area between curves is a difference.', 'Use the difference.'],
    ],
    lesson: 'Area between curves is the integral of (upper - lower) over the relevant interval; check which curve is on top.',
  },
  {
    id: 4400329,
    chapter: 'Chapter 6: Integration Applications',
    title: 'Volume by disks',
    prompt: 'A region under y = sqrt(x) on [0, 4] is revolved around the x-axis. Use disks to find the volume.',
    correct: '8 pi, because V = pi integral from 0 to 4 of (sqrt(x))^2 dx = pi * 8',
    wrong: [
      ['16 pi, forgetting to square the radius', 'You used 2x instead of x; the radius (sqrt x) squared equals x.', 'Square the radius first.'],
      ['4 pi, halving the integral mistakenly', 'integral of x from 0 to 4 is 8, not 4; recheck arithmetic.', 'integral x dx from 0 to 4 is 8.'],
      ['8 pi^2, with an extra pi factor', 'There is one pi in the disk formula, not pi^2.', 'V = pi integral of R^2.'],
    ],
    lesson: 'Disk method: V = pi integral of (radius)^2 d(axis variable); use disks when the cross-section perpendicular to the axis is a solid circle.',
  },
  {
    id: 4400330,
    chapter: 'Chapter 6: Integration Applications',
    title: 'Volume by washers',
    prompt: 'The region between y = x and y = x^2 on [0, 1] is rotated about the x-axis. The correct setup is:',
    correct: 'pi integral from 0 to 1 of (x^2 - x^4) dx, washers with outer radius x and inner radius x^2',
    wrong: [
      ['pi integral from 0 to 1 of (x - x^2) dx, the area without squaring', 'Volume needs radii squared, not just the difference of the curves.', 'Square each radius.'],
      ['pi integral from 0 to 1 of (x^2 - x^4)^2 dx, squaring the difference', 'You must square radii separately and then subtract, not square the difference.', 'Subtract squares, do not square the subtraction.'],
      ['2 pi integral from 0 to 1 of x(x - x^2) dx, a shell setup', 'That setup uses cylindrical shells, which apply when rotating about a vertical axis with horizontal slicing; here the axis is horizontal.', 'Washers fit this geometry.'],
    ],
    lesson: 'Washers: V = pi integral of (R_outer^2 - R_inner^2) d(axis variable); use washers when each cross-section is an annulus.',
  },
  {
    id: 4400331,
    chapter: 'Chapter 6: Integration Applications',
    title: 'Volume by shells',
    prompt: 'The region under y = x^2 on [0, 2] is rotated about the y-axis. The shell-method setup is:',
    correct: '2 pi integral from 0 to 2 of x * x^2 dx, where the radius is x and the height is x^2',
    wrong: [
      ['pi integral from 0 to 2 of (x^2)^2 dx, a disk setup', 'Disks would integrate along y, not along x; shells fit when integrating along x for a vertical-axis rotation.', 'Match axis to method.'],
      ['2 pi integral from 0 to 2 of x^2 dx, missing the radius factor', 'Shell volume is 2 pi r h dx; you forgot the radius r = x.', 'Each shell needs circumference times height.'],
      ['2 pi integral from 0 to 4 of y * sqrt(y) dy, swapping the limits', 'If you switch to y, the bounds become y in [0, 4] and the shell geometry changes; the simpler setup uses x directly.', 'Pick one variable consistently.'],
    ],
    lesson: 'Shells: V = 2 pi integral of (radius)(height) d(axis variable); use shells when slicing parallel to the axis of rotation.',
  },
  {
    id: 4400332,
    chapter: 'Chapter 6: Integration Applications',
    title: 'Average value',
    prompt: 'Find the average value of f(x) = x^2 on [0, 3].',
    correct: '3, because (1/3) * integral from 0 to 3 of x^2 dx = (1/3)(9) = 3',
    wrong: [
      ['9, the value at the endpoint', 'Average value divides the integral by the interval length; you skipped the division.', 'Divide by (b - a).'],
      ['1/3, dropping the integral', 'You computed 1/(b - a) without integrating; you need to multiply by the integral too.', 'Use (1/(b - a)) times integral.'],
      ['4.5, the midpoint of 0 and 9', 'Averaging endpoint values is not the integral average for nonlinear f.', 'Use the integral definition.'],
    ],
    lesson: 'Average value of f on [a, b] is (1/(b - a)) times the integral of f from a to b; MVT for integrals guarantees a c attaining it.',
  },

  // -----------------------------------------------------------------------
  // Chapter 7: Differential Equations
  // -----------------------------------------------------------------------
  {
    id: 4400333,
    chapter: 'Chapter 7: Differential Equations',
    title: 'Separable ODE',
    prompt: 'Solve dy/dx = xy with y(0) = 1.',
    correct: 'y = e^(x^2 / 2), because dy/y = x dx integrates to ln|y| = x^2/2 + C and y(0) = 1 forces C = 0',
    wrong: [
      ['y = e^x, forgetting the x factor', 'Integrating x dx gives x^2/2, not x; the exponent should be x^2/2.', 'Integrate x carefully.'],
      ['y = x^2/2 + 1, by integrating the right side only', 'You must separate, getting dy/y on the left so ln|y| appears.', 'Both sides must be separated.'],
      ['y = 1, treating xy as zero', 'xy is not identically zero, so y is not constant.', 'Solve the ODE properly.'],
    ],
    lesson: 'Separable ODE: rearrange to dy/g(y) = f(x) dx, integrate both sides, then apply the initial condition to fix the constant.',
  },
  {
    id: 4400334,
    chapter: 'Chapter 7: Differential Equations',
    title: 'Slope field interpretation',
    prompt: 'A slope field shows segments steeper as |x| grows and flatter near x = 0, with no dependence on y. This is consistent with:',
    correct: 'dy/dx = x, because slopes vary with x only and are zero at x = 0',
    wrong: [
      ['dy/dx = y, because the field varies with position', 'A field for dy/dx = y would change with y, not x; the description says no y dependence.', 'Check which variable controls the slope.'],
      ['dy/dx = xy, because both variables are involved', 'The description says slopes do not depend on y, contradicting xy.', 'No y dependence is the key clue.'],
      ['dy/dx = 1, slopes are constant', 'Constant slopes would not steepen with |x|.', 'Slopes must vary with x.'],
    ],
    lesson: 'A slope field plots the value of dy/dx at each (x, y); features like axis symmetry or variable independence reveal the form of the ODE.',
  },
  {
    id: 4400335,
    chapter: 'Chapter 7: Differential Equations',
    title: 'Exponential growth',
    prompt: 'A population satisfies dP/dt = 0.1 P with P(0) = 200. Find P(t).',
    correct: 'P(t) = 200 e^(0.1 t), the standard solution to exponential growth',
    wrong: [
      ['P(t) = 200 + 0.1 t, linear growth', 'The ODE says rate is proportional to P, which yields exponential growth, not linear.', 'Proportional rate equals exponential.'],
      ['P(t) = 200 e^t, ignoring the rate constant 0.1', 'The exponent must carry the rate constant; otherwise growth is too fast.', 'Keep the 0.1 in the exponent.'],
      ['P(t) = 200 / (1 + e^(-0.1 t)), logistic', 'Logistic models have a carrying capacity term; this ODE is purely exponential.', 'No carrying capacity here.'],
    ],
    lesson: 'dP/dt = kP has solution P(t) = P(0) e^(kt); recognize this as the exponential growth or decay template.',
  },
  {
    id: 4400336,
    chapter: 'Chapter 7: Differential Equations',
    title: 'Euler\'s method (BC)',
    prompt: 'Use one Euler step of size h = 0.1 starting at (0, 1) for dy/dx = y. Estimate y(0.1).',
    correct: '1.1, because y_new = y_old + h * f(x_old, y_old) = 1 + 0.1 * 1',
    wrong: [
      ['1.105, the more accurate second-order value', 'That mixes in higher-order corrections; Euler\'s method uses only the linear term.', 'Use linear update only.'],
      ['1.0, no change after one step', 'Euler updates by h * y; with y = 1 the change is 0.1, not 0.', 'Apply the slope correctly.'],
      ['1.21, two steps instead of one', 'The question asks for one step; one step gives 1.1, not 1.21.', 'Take exactly one step.'],
    ],
    lesson: 'Euler\'s method (BC topic) advances by y_new = y_old + h * f(x_old, y_old); it is the simplest numerical ODE solver.',
  },
  {
    id: 4400337,
    chapter: 'Chapter 7: Differential Equations',
    title: 'Logistic differential equation',
    prompt: 'The ODE dP/dt = 0.2 P (1 - P/500) has which long-term behavior for P(0) = 50?',
    correct: 'P approaches 500, the carrying capacity, as t increases',
    wrong: [
      ['P grows without bound', 'The logistic term (1 - P/500) drives the rate toward 0 as P approaches 500; unbounded growth does not occur.', 'Carrying capacity caps growth.'],
      ['P decays to 0', 'Starting between 0 and 500, dP/dt is positive, so P grows toward 500, not 0.', 'Check sign of dP/dt initially.'],
      ['P oscillates around 500', 'The logistic equation has monotone solutions between equilibria, not oscillations.', 'No oscillation in 1D logistic.'],
    ],
    lesson: 'Logistic ODE dP/dt = kP(1 - P/M) has stable equilibrium at M; solutions starting in (0, M) increase monotonically to M.',
  },

  // -----------------------------------------------------------------------
  // Chapter 8: Series (BC)
  // -----------------------------------------------------------------------
  {
    id: 4400338,
    chapter: 'Chapter 8: Series (BC)',
    title: 'Geometric series',
    prompt: 'Evaluate the sum of (1/3)^n from n = 0 to infinity.',
    correct: '3/2, because a/(1 - r) with a = 1 and r = 1/3 equals 1/(2/3)',
    wrong: [
      ['1/3, just the common ratio', 'The common ratio is not the sum; you need a/(1 - r).', 'Apply the closed-form formula.'],
      ['Diverges, because terms are positive', 'Geometric series with |r| < 1 converge regardless of sign.', '|1/3| < 1, so it converges.'],
      ['1, sum of a trivial series', 'The full sum is 1 + 1/3 + 1/9 + ... = 3/2, more than 1.', 'Sum the entire tail too.'],
    ],
    lesson: 'Geometric series sum to a/(1 - r) when |r| < 1; this is the workhorse closed-form for BC series questions.',
  },
  {
    id: 4400339,
    chapter: 'Chapter 8: Series (BC)',
    title: 'p-series convergence',
    prompt: 'The series sum of 1/n^p converges for:',
    correct: 'p > 1, by the p-series test',
    wrong: [
      ['p >= 1, including the harmonic series', 'The harmonic series (p = 1) diverges, so equality is excluded.', 'p = 1 is the borderline divergence.'],
      ['p > 0, since terms shrink', 'Terms shrinking is necessary but not sufficient; harmonic shrinks yet diverges.', 'Shrinking is not enough.'],
      ['All real p, since 1/n^p is bounded', 'Boundedness of terms does not imply convergence of the series.', 'Many bounded-term series diverge.'],
    ],
    lesson: 'p-series 1/n^p converges if and only if p > 1; the harmonic case p = 1 is the canonical divergent example.',
  },
  {
    id: 4400340,
    chapter: 'Chapter 8: Series (BC)',
    title: 'Ratio test',
    prompt: 'For the series sum of n / 2^n, what does the ratio test conclude?',
    correct: 'It converges, because the limit of |a_(n+1)/a_n| is 1/2, which is less than 1',
    wrong: [
      ['It diverges, because n grows without bound', 'The denominator 2^n grows faster than n, controlling growth.', 'Compare growth rates.'],
      ['Ratio test is inconclusive, limit equals 1', 'The ratio limit is 1/2, not 1; the test is decisive.', 'Compute the ratio limit.'],
      ['It converges to n/2^n, the general term', 'The general term tends to 0 but is not the sum; the sum has a specific value found by other means.', 'General term is not the sum.'],
    ],
    lesson: 'Ratio test: if lim |a_(n+1)/a_n| = L, the series converges absolutely for L < 1, diverges for L > 1, and is inconclusive at L = 1.',
  },
  {
    id: 4400341,
    chapter: 'Chapter 8: Series (BC)',
    title: 'Maclaurin series of e^x',
    prompt: 'The Maclaurin series for e^x is:',
    correct: 'sum from n = 0 to infinity of x^n / n!, converging for all real x',
    wrong: [
      ['sum of x^n, the geometric series', 'That converges only for |x| < 1 and is not the exponential.', 'Factorials appear in the denominator.'],
      ['sum of x^n / n, the harmonic-like series', 'Denominator must be n!, not n; check the derivative pattern.', 'Use n! in the denominator.'],
      ['1 + x + x^2 + x^3 + ..., the geometric again', 'That is geometric, not exponential; differentiate term by term to see they differ.', 'Differentiate to compare.'],
    ],
    lesson: 'The Maclaurin series for e^x has terms x^n / n! and converges everywhere; sin and cos have closely related alternating series.',
  },
  {
    id: 4400342,
    chapter: 'Chapter 8: Series (BC)',
    title: 'Maclaurin of sin and cos',
    prompt: 'The Maclaurin series for sin(x) is:',
    correct: 'x - x^3/3! + x^5/5! - ..., with only odd powers and alternating signs',
    wrong: [
      ['1 - x^2/2! + x^4/4! - ..., the cosine series', 'That alternating series with even powers represents cos(x), not sin(x).', 'Sine starts at x, not 1.'],
      ['x + x^3/3! + x^5/5! + ..., without alternation', 'sin(x) alternates because successive derivatives at 0 alternate in sign.', 'Signs must alternate.'],
      ['sum of x^n / n!, the exponential', 'That includes both odd and even powers; sine only uses odd.', 'Odd powers only for sine.'],
    ],
    lesson: 'sin(x) = sum of (-1)^n x^(2n+1) / (2n+1)!; cos(x) = sum of (-1)^n x^(2n) / (2n)!; both converge for all real x.',
  },
  {
    id: 4400343,
    chapter: 'Chapter 8: Series (BC)',
    title: 'Lagrange error bound',
    prompt: 'For the Taylor approximation T_n(x) of f at x = a, the Lagrange remainder R_n(x) is bounded by:',
    correct: '(M / (n + 1)!) * |x - a|^(n + 1), where M bounds |f^(n+1)| on the interval',
    wrong: [
      ['|f^(n+1)(x)| / (n + 1)!, the exact value', 'You need a bound on the (n+1)th derivative, not its exact value; M is a supremum.', 'Bound, do not evaluate.'],
      ['|x - a|^n / n!, dropping a power', 'The remainder uses (n + 1)! and the (n + 1)th power of (x - a).', 'Increment n by one in the formula.'],
      ['Always zero for polynomials', 'It is zero only when f equals its Taylor polynomial; in general R_n is nonzero.', 'Zero only for polynomials of degree at most n.'],
    ],
    lesson: 'Lagrange error: |R_n(x)| <= (M / (n + 1)!) |x - a|^(n + 1) with M an upper bound on the (n + 1)th derivative on the interval.',
  },

  // -----------------------------------------------------------------------
  // Chapter 9: Parametric, Polar, Vector (BC)
  // -----------------------------------------------------------------------
  {
    id: 4400344,
    chapter: 'Chapter 9: Parametric, Polar, Vector (BC)',
    title: 'Parametric derivative',
    prompt: 'For x(t) = t^2 and y(t) = t^3, find dy/dx in terms of t.',
    correct: '(3 t^2) / (2 t) = 3 t / 2, because dy/dx equals (dy/dt) / (dx/dt)',
    wrong: [
      ['3 t^2 - 2 t, subtracting the derivatives', 'dy/dx is a ratio of dy/dt to dx/dt, not a difference.', 'Use the ratio formula.'],
      ['6 t / 2, computing d/dt of y/x', 'You should compute the ratio of derivatives, not the derivative of the ratio.', 'Order: differentiate first, then divide.'],
      ['t^3 / t^2 = t, by canceling original functions', 'Canceling y by x is not differentiation; you must take dy/dt and dx/dt.', 'Differentiate before dividing.'],
    ],
    lesson: 'For parametric curves, dy/dx = (dy/dt) / (dx/dt); the formula assumes dx/dt nonzero at the point of interest.',
  },
  {
    id: 4400345,
    chapter: 'Chapter 9: Parametric, Polar, Vector (BC)',
    title: 'Arc length integral',
    prompt: 'For y = f(x) on [a, b], the arc length is:',
    correct: 'integral from a to b of sqrt(1 + (f\'(x))^2) dx',
    wrong: [
      ['integral from a to b of f(x) dx, the area under f', 'Area under f and length of the graph of f are different quantities.', 'Length integrand involves derivative.'],
      ['integral from a to b of sqrt(1 + f(x)) dx, with f not its derivative', 'The integrand has (f\'(x))^2, not f(x), under the square root.', 'It is the derivative that appears.'],
      ['integral from a to b of f\'(x) dx, just the derivative', 'That gives f(b) - f(a), the change in height, not the slanted arc length.', 'Pythagoras adds a 1 plus a squared slope.'],
    ],
    lesson: 'Arc length for y = f(x): integral of sqrt(1 + (f\')^2) dx; for parametric (x(t), y(t)), use sqrt((x\')^2 + (y\')^2) dt.',
  },
  {
    id: 4400346,
    chapter: 'Chapter 9: Parametric, Polar, Vector (BC)',
    title: 'Polar area',
    prompt: 'The area swept by r = f(theta) from theta = a to theta = b is:',
    correct: '(1/2) integral from a to b of (f(theta))^2 d theta',
    wrong: [
      ['integral from a to b of f(theta) d theta, the basic integral', 'Polar area requires the 1/2 factor and squaring; this is not the same as Cartesian area.', 'Polar area has 1/2 r^2.'],
      ['integral from a to b of (f(theta))^2 d theta, missing the 1/2', 'You squared but forgot the leading 1/2 that comes from the wedge area.', 'Wedge area formula has 1/2.'],
      ['(1/2) integral from a to b of f(theta) d theta, missing the square', 'The polar element of area uses r^2, not r.', 'Square the radius.'],
    ],
    lesson: 'Polar area: A = (1/2) integral of r^2 d theta; comes from summing infinitesimal triangular wedges of angular width d theta.',
  },
  {
    id: 4400347,
    chapter: 'Chapter 9: Parametric, Polar, Vector (BC)',
    title: 'Speed of a vector-valued curve',
    prompt: 'For r(t) = (cos t, sin t), find the speed |r\'(t)|.',
    correct: '1, because r\'(t) = (-sin t, cos t) has magnitude sqrt(sin^2 t + cos^2 t) = 1',
    wrong: [
      ['0, because r(t) is bounded', 'Boundedness of position does not mean zero speed; the particle moves around the unit circle.', 'Differentiate and take the magnitude.'],
      ['t, the parameter itself', 'Speed depends on the magnitude of the velocity vector, not on t directly.', 'Compute |r\'(t)|.'],
      ['2, by adding components', 'Speed is the magnitude (Pythagorean combination), not the sum.', 'Use Pythagorean magnitude.'],
    ],
    lesson: 'For vector-valued r(t), velocity is r\'(t) and speed is |r\'(t)| = sqrt of sum of squared component derivatives.',
  },

  // -----------------------------------------------------------------------
  // Synthesis / mixed
  // -----------------------------------------------------------------------
  {
    id: 4400348,
    chapter: 'Synthesis and AP Strategy',
    title: 'Choosing a method: disks vs shells',
    prompt: 'A region described by 0 <= y <= 1, 0 <= x <= y^2 is rotated about the y-axis. Which method is most natural?',
    correct: 'Disks integrating along y, because cross sections perpendicular to the y-axis are circles of radius y^2',
    wrong: [
      ['Shells integrating along y, with no radius', 'Shells require a radius factor that does not match this geometry naturally.', 'Disks fit because slices perpendicular to y are circular.'],
      ['Washers integrating along x, with two radii', 'There is no inner curve here, so washers reduce to disks.', 'No annulus, just a disk.'],
      ['No solid of revolution can be formed', 'A solid of revolution forms whenever a region is rotated; the question is which method, not whether.', 'A solid exists; choose the cleanest method.'],
    ],
    lesson: 'Choose disks or washers when slicing perpendicular to the axis of rotation; choose shells when slicing parallel to it.',
  },
  {
    id: 4400349,
    chapter: 'Synthesis and AP Strategy',
    title: 'Reading an FRQ correctly',
    prompt: 'A free-response question says "Justify your answer." Which response earns the justification point?',
    correct: 'Citing the specific theorem and verifying its hypotheses (e.g. "f is continuous on [a, b] and f(a) and f(b) have opposite signs, so by IVT a root exists")',
    wrong: [
      ['Stating the conclusion without explanation, the answer must be obvious', 'AP graders require explicit reasoning; an unjustified conclusion loses the justification point.', 'Show the theorem name and check its hypotheses.'],
      ['Writing "by my graph" without showing the graph or its features', 'A graph reference must point to specific features, not be a generic appeal.', 'Cite the specific feature you use.'],
      ['Saying "it is intuitive" or "it is clear"', 'Intuition is not justification on AP exams; cite the theorem and verify conditions.', 'Justify with a named theorem.'],
    ],
    lesson: 'AP justifications must name the theorem, verify its hypotheses, and state the conclusion; vague appeals lose credit even when the final answer is correct.',
  },
])
