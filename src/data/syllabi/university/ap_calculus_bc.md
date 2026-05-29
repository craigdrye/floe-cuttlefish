# AP Calculus BC
**ID**: `apCalculusBc` · **Discipline**: Maths · **Year**: University Sophomore (equivalent)
**Aligns with**: College Board AP Calculus BC Course and Exam Description (CED); equivalent to a full two-semester single-variable calculus sequence (Calculus I and II)

## Course Aim
AP Calculus BC is the complete single-variable calculus course. It contains every AB topic and adds the techniques and ideas that turn a one-semester course into a two-semester one: advanced integration (integration by parts, partial fractions, improper integrals), logistic growth and Euler's method, parametric, polar, and vector-valued calculus, and the entire theory of infinite sequences and series, culminating in Taylor and Maclaurin series. The aim of this course is fluency that survives a timed exam: you should be able to read a setup, name the idea in play, choose the right tool, execute cleanly, and state a conclusion with correct units and notation.

The two structural facts you should internalize early are that Unit 6 (Integration and Accumulation) and Unit 10 (Infinite Sequences and Series) together account for roughly 35% of the exam, and that the new material relative to AB — series, parametric/polar/vector, and the harder integration techniques — is where most BC points are won or lost. We treat calculus as a reasoning discipline, not a list of formulas. Every result is tied to a definition (the derivative as a limit, the integral as a Riemann-sum limit, convergence as the limit of partial sums) so that when a problem is unfamiliar you can fall back on what the symbols actually mean.

By the end of the course you should be exam-ready in the literal sense: comfortable on the no-calculator and calculator-active sections alike, able to write a full free-response solution that earns every available rubric point, and able to justify a convergence-test choice or a related-rates setup in words. The deeper goal is durable mathematical maturity — the kind that makes multivariable calculus, differential equations, and a physics or engineering sequence feel like extensions of ideas you already own.

## Course Design Notes
Route a question here when it tests any AB-level topic at BC depth or pace, plus any BC-only topic: advanced integration techniques, improper integrals, Euler's method, logistic models, parametric/polar/vector calculus, sequences and series, convergence tests, power series, radius and interval of convergence, Taylor and Maclaurin polynomials and series, and error bounds (Lagrange and alternating-series). Mirror the real exam balance — weight Integration and Series heavily, and make sure series gets the largest single share of practice because it is both the most heavily tested BC-only unit and the one students find least intuitive.

Keep items proof-aware (state the hypotheses a theorem requires before applying it), notation-careful (distinguish a derivative from a differential, a sequence from a series, a Taylor polynomial from the full series), and exam-practical (separate no-calculator skills from calculator-active interpretation). Favor questions that force a decision — which technique, which test, which theorem — over questions that merely ask for a single mechanical computation. Common traps are listed per chapter so that distractors target the specific misconception, not just a wrong number.

## Chapter 1: AB Core Refresh and the Language of Limits
- **Core questions**: What does the formal (epsilon-delta intuition) and operational definition of a limit guarantee, and how do continuity and differentiability depend on it? When does direct substitution fail and what repairs it?
- **Key concepts**: One-sided and two-sided limits, limits at infinity, the precise relationship continuity ⇒ (does not imply) differentiability, the limit definitions of the derivative, basic differentiation rules (power, product, quotient, chain), and the AP mathematical practices (notation, justification, communication).
- **Applied skills**: Resolve 0/0 forms by factoring, rationalizing, or trig identities; classify discontinuities; verify differentiability at a piecewise junction by matching value and slope; differentiate composite expressions accurately and quickly.
- **Common traps**: Claiming a function is differentiable just because it is continuous (the converse is false — |x| at 0); dropping the inner-derivative factor in the chain rule; treating a removable discontinuity as if the function value already exists there.

## Chapter 2: Differentiation in Context and Function Analysis
- **Core questions**: How do you translate a real situation (motion, growth, geometry) into a derivative statement, and how do you justify a claim about extrema or concavity rigorously rather than by eyeballing a graph?
- **Key concepts**: Related rates, optimization, the Mean Value Theorem and its hypotheses, increasing/decreasing and concavity tests, the first- and second-derivative tests, candidates' test for absolute extrema, and L'Hôpital's Rule.
- **Applied skills**: Set up and solve related-rates problems with explicit variable definitions; build a sign chart and write a justification sentence; apply L'Hôpital's Rule only after confirming a 0/0 or ∞/∞ form; analyze motion (position, velocity, speed, acceleration) including when an object speeds up vs. slows down.
- **Common traps**: Applying L'Hôpital's Rule to a form that is not indeterminate; confusing speed with velocity (speed increases when velocity and acceleration share a sign); forgetting to check MVT hypotheses (continuity on [a,b], differentiability on (a,b)) before invoking it; reporting a critical point as an extremum without a test.

## Chapter 3: Integration, Accumulation, and Advanced Techniques
- **Core questions**: Why does the Fundamental Theorem of Calculus link the two halves of calculus, and how do you choose among substitution, parts, and partial fractions? When does an improper integral converge?
- **Key concepts**: Riemann sums (left, right, midpoint, trapezoidal) as the definition of the definite integral, both parts of the FTC, u-substitution, integration by parts (and the LIATE heuristic / tabular method), partial-fraction decomposition, and improper integrals over infinite intervals or at vertical asymptotes.
- **Applied skills**: Select a technique from the structure of the integrand; integrate products with parts (including the loop trick for e^x sin x); decompose rational functions; evaluate improper integrals as limits and decide convergence; interpret an accumulation function ∫ₐˣ f(t) dt and its derivative.
- **Common traps**: Forgetting to convert limits of integration when substituting in a definite integral (or forgetting +C in an indefinite one); choosing u and dv badly in parts; treating an improper integral as ordinary instead of writing it as a limit; confusing total distance (∫|v| dt) with displacement (∫v dt).

## Chapter 4: Differential Equations, Logistic Models, and Euler's Method
- **Core questions**: What does a slope field tell you about a family of solutions, and how do exponential and logistic models differ in their long-run behavior? How does Euler's method approximate a solution, and why does it accumulate error?
- **Key concepts**: Slope fields, separable equations, exponential growth/decay (dy/dt = ky), the logistic model (dy/dt = ky(1 − y/L)) and its carrying capacity L, the point of fastest growth at y = L/2, Euler's method as repeated tangent-line stepping, and verifying solutions by substitution.
- **Applied skills**: Solve separable equations and apply an initial condition to pin down the constant; sketch or read a slope field; carry out a multi-step Euler approximation by hand; identify carrying capacity and the inflection point of a logistic curve; interpret model parameters in context.
- **Common traps**: Separating variables incorrectly or forgetting the constant of integration before applying the initial condition; assuming logistic solutions grow without bound (they level off at L); using the wrong step size or dropping a step in Euler's method; confusing the rate dy/dt with the amount y.

## Chapter 5: Applications of Integration
- **Core questions**: Given a region or a rate, which integral expresses the quantity you want — area, volume, average value, arc length, or accumulated change — and how do you set it up before computing?
- **Key concepts**: Average value of a function, area between curves, volumes by disks and washers, volumes by known cross sections, and arc length for y = f(x). (Shells are a useful supplement though outside the strict BC scope; arc length for parametric/polar curves appears in Chapter 6.)
- **Applied skills**: Read a diagram to set up area and volume integrals with correct radii and bounds; integrate with respect to the appropriate variable; express total accumulated change and average value; build arc-length integrands.
- **Common traps**: Subtracting curves in the wrong order or integrating with respect to the wrong variable; forgetting to square the radius in a volume integral, or squaring a difference instead of taking the difference of squares for washers; confusing average value with average rate of change; using the wrong bounds when curves cross.

## Chapter 6: Parametric, Polar, and Vector-Valued Functions
- **Core questions**: How do calculus operations change when a curve is described by a parameter, by polar coordinates, or by a position vector, and what do velocity, speed, and area mean in each representation?
- **Key concepts**: Parametric dy/dx = (dy/dt)/(dx/dt) and the second derivative; parametric and polar arc length; vector-valued position, velocity (the derivative), speed (the magnitude of velocity), acceleration, and total distance traveled; polar slope; and polar area A = ½∫ r² dθ.
- **Applied skills**: Find tangent slopes and concavity for parametric curves; compute speed and total distance for a particle given a vector position; convert between polar and rectangular; set up and evaluate polar area integrals, including regions between two polar curves.
- **Common traps**: Computing d²y/dx² as the second t-derivative of y instead of the t-derivative of dy/dx divided by dx/dt; forgetting the ½ or the r² in polar area; using ∫r dθ instead of ½∫r² dθ; finding the wrong θ-bounds where polar curves intersect (the pole and symmetry).

## Chapter 7: Sequences, Series, and Convergence Tests
- **Core questions**: What is the difference between a sequence and a series, and how do you choose a convergence test from the structure of the terms? When is convergence absolute versus conditional, and how large can the truncation error be?
- **Key concepts**: Sequence limits; partial sums; the nth-term (divergence) test; geometric series (sum a/(1−r) for |r|<1); p-series (converge iff p>1); the integral test; direct and limit comparison tests; the alternating series test; the ratio test; absolute vs. conditional convergence; and the alternating-series error bound (error ≤ absolute value of the first omitted term).
- **Applied skills**: Match a series to the right test by reading its terms (geometric ratio, factorials → ratio test, rational in n → p-series/comparison, alternating with decreasing terms → AST); state and check each test's hypotheses before concluding; classify absolute vs. conditional convergence; bound the remainder of an alternating series.
- **Common traps**: Believing the nth-term test proves convergence (it can only prove divergence); applying the alternating-series bound when terms are not monotonically decreasing to 0; forgetting that the harmonic series (p=1) diverges; concluding convergence from comparison without verifying the inequality direction; confusing the sequence of terms with the sequence of partial sums.

## Chapter 8: Power Series, Taylor Series, and the Lagrange Error Bound
- **Core questions**: How do you find where a power series converges, build the Taylor or Maclaurin series of a function, and bound the error of a Taylor polynomial approximation?
- **Key concepts**: Power series, radius and interval of convergence (ratio test plus separate endpoint checks); Taylor and Maclaurin polynomials; the known series for eˣ, sin x, cos x, 1/(1−x), and ln(1+x); building new series by substitution, differentiation, integration, and multiplication; and the Lagrange error bound |Rₙ(x)| ≤ M·|x−a|^(n+1)/(n+1)! where M bounds |f^(n+1)| on the interval.
- **Applied skills**: Find radius and interval of convergence including endpoint behavior; construct Taylor polynomials of a given degree at a center; manipulate known series to derive new ones (e.g., x·eˣ², ∫ of a series); apply the Lagrange bound to guarantee an approximation's accuracy.
- **Common traps**: Forgetting to test the endpoints of the interval of convergence (the ratio test is inconclusive there); confusing a Taylor polynomial with the full series, or the radius with the interval; misindexing factorials and powers in the general term; using the wrong M (it must bound the (n+1)th derivative, not f itself) in the Lagrange bound.

## Capstone
Assemble a BC exam-readiness portfolio that mirrors the real exam's balance and demands full justification, not just answers. It contains: (1) an AB repair sheet documenting and fixing your top prerequisite gaps; (2) an integration-technique decision tree with a worked example and a common trap for each method; (3) a differential-equations brief solving one separable and one logistic model, including a slope-field sketch, an Euler approximation with error commentary, and a contextual interpretation of carrying capacity; (4) a parametric/polar/vector motion lab analyzing one particle's speed and total distance and computing one polar area between curves; (5) a one-page convergence-test map with trigger clues, required hypotheses, and an example series per test; (6) a Taylor-series packet deriving three series from the known list and bounding one approximation with the Lagrange error bound; and (7) two timed mixed free-response sets — one no-calculator, one calculator-active — graded against an AP-style rubric for setup, conditions, notation, units, and conclusion. The portfolio should demonstrate that you can choose the right tool under time pressure and defend the choice in writing.

## Assessment Ideas
- Short no-calculator checks for algebra, notation, exact values, and known Taylor series recall.
- Calculator-active problems that require interpretation (units, meaning of an accumulation) rather than button-pushing.
- Convergence-test quizzes where students name the test and verify its hypotheses before applying it.
- Free-response rubrics focused on setup, stated conditions, notation, units, and a final sentence of conclusion.
- One full mock exam (45 MC + 6 FRQ, split into the real calculator/no-calculator parts) plus a remediation plan organized by unit and error type.

## Research Notes
- College Board AP Calculus BC exam page (format: 45 MC / 6 FRQ, Section I and II each 50%): https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam
- College Board AP Calculus AB and BC Course and Exam Description (unit weightings; Units 6 and 10 highest): https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf
- College Board explanation of AP Calculus AB versus BC: https://blog.collegeboard.org/difference-between-ap-calculus-ab-and-bc
- Lagrange error bound and alternating-series remainder reference: https://www.albert.io/blog/lagrange-error-bound-formula-ap-calculus-ab-bc-review/
