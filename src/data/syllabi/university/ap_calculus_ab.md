# AP Calculus AB
**ID**: `apCalculusAB` · **Discipline**: Mathematics · **Stage**: University Freshman (ages 17–19; AP exam taken in HS senior year, recurring as freshman calc-1 prep)
**Aligns with**: College Board AP Calculus AB Course and Exam Description (CED), Units 1–8; equivalent to a one-semester university Calculus I

## Course Philosophy
AP Calculus AB is the first encounter with two ideas that will shape the rest of a student's quantitative life: the **derivative** (instantaneous rate of change, slope of a tangent, best linear approximation) and the **integral** (accumulation, signed area, antiderivative). The course is built on three representations — graphical, numerical, and analytic — and the AP exam relentlessly tests fluency in moving between them. The most common failure mode is mechanical: students learn rules without grasping that the derivative is a *function-valued operator* that answers a real question. The internal goal is to make every formula traceable to a slope, a limit, or an accumulation, so that when the exam asks "interpret f'(2) in context" the student doesn't blank.

## Module 1: Limits and Continuity (Unit 1, 10–12%)
- Intuitive idea of a limit; left-hand and right-hand limits; existence requires equality of one-sided limits
- Estimating limits from tables and graphs; reading limits from piecewise functions
- Algebraic limit techniques: direct substitution, factoring, rationalising, common denominator, conjugates
- Special limits: lim sin(x)/x = 1 (with x → 0), lim (1 − cos x)/x = 0
- **Squeeze (Sandwich) Theorem**; bounding by simpler functions
- Limits at infinity and infinite limits; horizontal and vertical asymptotes
- End behaviour of polynomial and rational functions via dominant-term reasoning
- **Continuity**: definition (lim_{x→c} f(x) = f(c)); types of discontinuity (removable, jump, infinite)
- Continuity on an interval; continuity of compositions, sums, products, quotients
- **Intermediate Value Theorem (IVT)**: hypotheses, conclusion, existence proofs (e.g., "show this equation has a solution on [a, b]")
- **Questions**: evaluate limits algebraically, identify and classify discontinuities, apply IVT to existence problems, use Squeeze Theorem on bounded oscillating functions

## Module 2: Differentiation — Definition and Rules (Units 2 & 3, 18–24%)
- Definition of the derivative as a limit: f'(a) = lim_{h→0} [f(a + h) − f(a)] / h, and the alternative form lim_{x→a} [f(x) − f(a)] / (x − a)
- Derivative as slope of tangent, instantaneous velocity, instantaneous rate of change
- Differentiability ⇒ continuity (and the converse fails); non-differentiable points (corners, cusps, vertical tangents, discontinuities)
- **Basic differentiation rules**: constant, power, sum/difference, constant multiple
- **Product rule**, **quotient rule**
- Derivatives of trig functions (sin, cos, tan, cot, sec, csc), e^x, a^x, ln x, log_b x
- **Chain rule** — the workhorse; recognising "outside" and "inside"; chain rule with multiple layers
- **Implicit differentiation**: differentiating relations, finding tangent lines on curves, slopes of conics
- **Inverse function differentiation**: (f⁻¹)'(y) = 1 / f'(x); derivatives of arcsin, arccos, arctan
- Higher-order derivatives; notation (f'', d²y/dx²)
- **Questions**: differentiate from first principles, apply product/quotient/chain rules in combination, find dy/dx implicitly, find the tangent line at a point on x² + y² = 25, evaluate (f⁻¹)'(c) given a table of values

## Module 3: Contextual Applications of Differentiation (Unit 4, 10–15%)
- Average vs instantaneous rate of change; secant vs tangent; units of f'(x) in context
- **Position–velocity–acceleration** in straight-line motion: s(t), v(t) = s'(t), a(t) = v'(t); speed = |velocity|; speeding up/slowing down
- Total distance vs displacement (preview, relevant after integration)
- **Related rates**: setting up an equation relating quantities, differentiating with respect to t, plugging in the instant
- Classic related rates: ladder sliding down a wall, water filling a cone, expanding sphere/circle, shadow problems, baseball runner
- **Linear approximation** and differentials: L(x) = f(a) + f'(a)(x − a); use to estimate function values; over- vs underestimation from concavity
- L'Hôpital's Rule for 0/0 and ∞/∞ indeterminate forms (and recognising when it does/doesn't apply)
- **Questions**: interpret f'(c) with units, classic related rate setups, linear approximation estimates with error sign, applying L'Hôpital correctly

## Module 4: Analytical Applications of Differentiation (Unit 5, 15–18%)
- **Mean Value Theorem (MVT)**: hypotheses (continuous on [a,b], differentiable on (a,b)), conclusion, geometric meaning; Rolle's Theorem as a special case
- Extreme Value Theorem on closed intervals
- **Critical points** (f'(x) = 0 or undefined); first derivative test; classifying as relative max/min
- **Concavity and second derivative test**; inflection points (where concavity changes AND f exists)
- Sketching f from f' and f'' information; reading f' graphs to deduce f's behaviour
- **Optimization**: setting up an objective function, identifying the constraint, solving on the relevant interval, justifying the answer
- Classic optimization: max area for given perimeter, min surface area for given volume, can/box problems, shortest distance from point to curve
- **Questions**: applying MVT to existence proofs, finding absolute extrema on a closed interval, complete f / f' / f' tables of behaviour, set up and solve optimization problems with full justification

## Module 5: Integration and Accumulation of Change (Unit 6, 17–20%)
- Antiderivatives and indefinite integrals; the constant of integration
- Basic antiderivative formulas (power rule reversed, e^x, sin/cos, sec², 1/x → ln|x|)
- **Riemann sums**: left, right, midpoint, trapezoidal; over- and underestimates from monotonicity
- Definite integral as the limit of Riemann sums; ∫_a^b f(x) dx as signed area
- **Properties of definite integrals**: linearity, additivity over intervals, ∫_a^a = 0, ∫_a^b = −∫_b^a, comparison
- **Fundamental Theorem of Calculus, Part 1**: d/dx ∫_a^x f(t) dt = f(x) (and Leibniz-rule variants with chain rule)
- **Fundamental Theorem of Calculus, Part 2**: ∫_a^b f(x) dx = F(b) − F(a) where F is any antiderivative
- **u-substitution** for both indefinite and definite integrals; changing limits when substituting
- Integrating piecewise and absolute-value functions
- **Questions**: estimate definite integrals from Riemann sums and tables, evaluate indefinite/definite integrals using u-sub, apply FTC including with chain rule (e.g., d/dx ∫_0^{x²} sin t dt)

## Module 6: Differential Equations (Unit 7, 6–12%)
- Verifying solutions to differential equations; understanding ODE vs algebraic equation
- **Slope fields**: drawing, interpreting, and matching to ODEs; using slope fields to sketch particular solutions
- **Separation of variables** for first-order separable ODEs; finding general and particular solutions
- **Exponential growth and decay**: dy/dt = ky and its solution y = y₀ e^(kt); applications (population, radioactive decay, Newton's law of cooling)
- (Logistic models are AP Calculus BC, but a brief mention helps.)
- **Questions**: match a slope field to a differential equation, solve a separable ODE with an initial condition, set up and solve an exponential growth model from a word problem

## Module 7: Applications of Integration (Unit 8, 10–15%)
- **Average value of a function** on [a, b]: (1/(b − a)) ∫_a^b f(x) dx; Mean Value Theorem for Integrals
- Position from velocity: s(t) = s(t₀) + ∫_{t₀}^t v(τ) dτ; total distance = ∫|v(t)| dt
- **Net change theorem**: ∫_a^b f'(x) dx = f(b) − f(a) — interpreting accumulated change
- **Area between two curves**: ∫_a^b [top − bottom] dx (or in y if more natural)
- **Volumes of solids of revolution**: disk method, washer method (axis ⊥ slice)
- Volumes by **known cross sections** perpendicular to an axis (squares, equilateral triangles, semicircles)
- (Shell method and arc length are typically BC — mention only.)
- **Questions**: compute average value with units, compute total distance from a velocity function with sign changes, set up ∫ for area between curves with intersection points, set up disk/washer volume integrals (do not always evaluate)

## Stretch Zone (push beyond AB into BC and analysis flavour)
- Why ε–δ matters: the rigorous definition of a limit and where intuition breaks
- Continuous-but-nowhere-differentiable functions (Weierstrass) — visual intuition
- The connection between linear approximation and Taylor polynomials (preview of BC)
- Improper integrals (∫_1^∞ 1/x^p dx and the convergence threshold p > 1) — a BC topic worth previewing
- Newton's method as a derivative application
- Numerical integration error: trapezoid rule overestimates concave-up integrands, etc., and Simpson's rule (BC)
- Volumes by shells; arc length; surface of revolution (BC topics, but doable)
- The exponential function as the unique solution to dy/dx = y, y(0) = 1
- The derivative as the best linear approximation — why dy ≈ f'(x) dx is "the same" idea as L(x)
- Connections: optimization in economics (marginal cost = marginal revenue), thermodynamics (work as ∫F dx), probability (CDFs as integrals of PDFs)
- Common AP exam pitfalls to drill: forgetting absolute value in ln integrals; failing to change limits in u-sub; confusing speed and velocity; misjustifying extrema (a sign chart is required, not just a critical point)
