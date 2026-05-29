# Eureka Math Precalculus
**ID**: `eurekaMathPrecalculus` - **Discipline**: Maths - **Year**: University Sophomore (equivalent)

## Course Aim
Precalculus is where the scattered tools of algebra and geometry finally cohere into a single language for describing change, shape, and rotation. The aim of this course is to make functions, transformations, trigonometry, complex numbers, vectors, matrices, and a first taste of limits feel like dialects of that one language rather than eight unrelated units. By the end, a student should be able to take a situation -- a tide, a population, a rotating point, a projectile -- and move fluidly among its symbolic, graphical, numerical, geometric, and computational descriptions, choosing whichever representation makes the next step clearest.

The deeper goal is calculus readiness in the honest sense: not memorized identities and asymptote rules, but the habit of asking *what is changing, with respect to what, and how fast*. Limits, instantaneous rate, and the local-versus-global distinction are introduced here precisely so that the leap to derivatives later feels like a continuation rather than a rupture. Every algebraic technique is paired with the geometric picture it controls, because students who can only manipulate symbols stall the moment a problem refuses to factor cleanly.

Finally, the course treats modeling as a form of reasoning, not decoration. A model is a set of assumptions made visible; students learn to state those assumptions, fit parameters to data, read residuals, and -- crucially -- say where the model breaks. Exact mathematics and contextual judgment are held in tension throughout, so that "the answer is 6" and "the answer is 6 meters, valid only for the first eight seconds" are recognized as different claims.

## Course Design Notes
This course adapts the conceptual arc of Eureka Math Precalculus for advanced secondary, early university, and bridge-to-calculus settings. Route learners here when they need rigorous precalculus reasoning: function families and transformations, polynomial and rational behavior, exponential/logarithmic/logistic models, unit-circle trigonometry and harmonic modeling, complex numbers as plane geometry, vectors and matrices as linear transformations, and an introduction to parametric, polar, conic, and limit ideas.

The eight chapters are ordered so each strand feeds the next: functions and transformations underwrite everything; trigonometry sets up both harmonic modeling and the polar/complex view; complex numbers and matrices share the rotation idea; the final chapter braids parametric, polar, and conic forms into the first limit questions that open calculus. Use graphing technology, spreadsheets, CAS, or coding notebooks freely for exploration and model checking -- but keep exact reasoning, proof, and interpretation central. A correct decimal from a calculator is the start of an explanation, never the end of one.

Questions in this bank emphasize translation between representations, justification of claims (why an inverse fails to be a function, why a hole is not an asymptote, why multiplying by i is a rotation), and the diagnosis of the specific errors students reliably make. Distractors are written to mirror real misconceptions, so a wrong answer tells the learner *which* false rule they are running.

## Chapter 1: Functions, Transformations, and Mathematical Models
- **Core questions**: What does it mean for a relation to be a function, and when does it have an inverse? How do shifts, stretches, reflections, and their order reshape a graph? What is a function family, and what do its parameters mean?
- **Key concepts**: Function notation; domain and range; composition; one-to-one functions and inverses; the order and direction of transformations f(x) to a*f(b(x - h)) + k; even/odd symmetry; average rate of change; families of functions; parameters and the assumptions a model encodes.
- **Applied skills**: Compose two functions and interpret the composite in context; decide via the horizontal-line test whether an inverse is itself a function and find it algebraically; predict a graph from its transformed rule; compute and interpret average rate of change over an interval; critique a model used outside its domain.
- **Common traps**: Applying horizontal shifts in the wrong direction (x - 3 moves *right*, not left); reversing composition order (f(g(x)) is not g(f(x))); confusing f^{-1}(x) with 1/f(x); transforming inside vs. outside the function (inside affects x and is "backwards," outside affects y); assuming every function has an inverse.

## Chapter 2: Polynomial and Rational Functions
- **Core questions**: How do degree, leading coefficient, and multiplicity dictate a polynomial's shape? What is the difference between a hole and a vertical asymptote, and how do you find each? When does a rational function have a horizontal versus an oblique asymptote?
- **Key concepts**: Polynomial structure and end behavior; real and complex zeros; multiplicity and its graphical signature (cross vs. touch); the Factor and Remainder Theorems; synthetic and long division; rational functions; removable discontinuities (holes); vertical, horizontal, and oblique asymptotes; sign analysis.
- **Applied skills**: Build a polynomial from prescribed roots, multiplicities, and end behavior; use synthetic division and the Remainder Theorem to test a factor and evaluate; locate an oblique asymptote by polynomial division; construct a sign chart to graph a rational function; classify each discontinuity.
- **Common traps**: Assuming a degree-n polynomial has n distinct *real* roots (it has n roots counting multiplicity, some complex); treating a factor that cancels as a vertical asymptote rather than a hole; using y = 0 as the horizontal asymptote when numerator and denominator degrees are equal; forgetting that an oblique asymptote appears only when the numerator degree is exactly one more than the denominator's.

## Chapter 3: Exponential, Logarithmic, and Logistic Models
- **Core questions**: Why is exponential change defined by a constant *ratio* rather than a constant difference? How are logarithms the inverse of exponentials, and what do the log laws let you do? When does logistic growth beat a pure exponential model?
- **Key concepts**: Exponential growth and decay; the natural base e; logarithms as inverses; product, quotient, and power log laws; change of base; half-life and doubling time; continuous and compound interest; linearization via logs (semi-log/log-log); logistic model P(t) = L/(1 + A e^{-kt}); carrying capacity L; the inflection at half capacity.
- **Applied skills**: Solve exponential and logarithmic equations exactly and numerically; convert a percentage growth rate to a base or continuous rate; estimate parameters from two data points; linearize data to test for exponential behavior; compare exponential vs. logistic fits and identify carrying capacity.
- **Common traps**: Writing log(a + b) = log a + log b (the laws apply to products, not sums); mishandling the sign when solving e^{kt} for a decay constant; confusing the growth factor (1.05) with the growth rate (0.05); forgetting domain restrictions of logarithms (argument > 0); treating logistic growth as exponential near the carrying capacity, where it actually flattens.

## Chapter 4: Trigonometry on the Unit Circle
- **Core questions**: Why is radian measure the natural unit for angles? How does the unit circle define all six trig functions and their signs by quadrant? How do you solve a trigonometric equation and capture *all* its solutions?
- **Key concepts**: Radian measure and arc length; unit-circle definitions of sine, cosine, tangent and their reciprocals; reference angles and exact values; periodicity and signs by quadrant; the Pythagorean and related identities; inverse trig functions and their restricted ranges; trigonometric equations.
- **Applied skills**: Convert between degrees and radians and compute arc length; evaluate exact trig values at special angles; prove an identity by reducing one side; solve a trig equation on a stated interval and write the general solution; evaluate compositions like sin(arccos x).
- **Common traps**: Treating arcsin/arccos/arctan as having full range (they are restricted, so sin(arcsin x) and arcsin(sin x) are not symmetric); losing solutions by dividing out a trig factor instead of setting it to zero; sign errors from ignoring the quadrant; confusing reference angle with the actual angle; degree-radian mode mismatches.

## Chapter 5: Periodic Functions and Harmonic Models
- **Core questions**: How do amplitude, period, phase shift, and midline each control a sinusoid? Given a graph, table, or data set, how do you recover a sinusoidal model? When is a periodic model the wrong choice?
- **Key concepts**: General sinusoid a*sin(b(x - c)) + d; amplitude |a|, period 2*pi/|b|, phase shift c, midline d; frequency; modeling circular motion, tides, daylight, sound, and seasonal data; sinusoidal regression; residual patterns; competing models.
- **Applied skills**: Read amplitude, period, phase shift, and midline off a graph and write the equation; build a sinusoidal model from a max/min and a period; interpret phase shift and midline in context (e.g., mean tide height); fit a model to data and inspect residuals for a missed trend.
- **Common traps**: Reporting the coefficient b as the period instead of using 2*pi/|b|; getting the phase-shift direction backwards when the equation is written as bx - c rather than b(x - c); mistaking the vertical shift for amplitude; forcing a sinusoid onto data whose period drifts or whose residuals show structure.

## Chapter 6: Complex Numbers and the Complex Plane
- **Core questions**: What does a complex number *do* geometrically? Why is multiplying by i a 90-degree rotation, and multiplication in general a rotation-and-scaling? How do De Moivre's theorem and the roots of unity arise from this picture?
- **Key concepts**: Complex arithmetic and conjugates; modulus and argument; rectangular and polar (trigonometric) form; multiplication as "multiply moduli, add arguments"; powers via De Moivre's theorem; the n distinct nth roots equally spaced on a circle; introductory Euler connection e^{i*theta} = cos theta + i sin theta.
- **Applied skills**: Convert between rectangular and polar form; multiply and divide in polar form geometrically; compute powers and all nth roots and plot them; explain a rotation as multiplication by a unit-modulus complex number; verify a geometric claim with exact complex arithmetic.
- **Common traps**: Adding moduli instead of multiplying them in a product; subtracting arguments in a product (you subtract only for division); forgetting that multiplication by i sends (x, y) to (-y, x), not (y, -x) (that is conjugation/rotation the other way); reporting only one nth root instead of all n; confusing conjugation with negation.

## Chapter 7: Vectors, Matrices, and Linear Transformations
- **Core questions**: How do vectors encode magnitude and direction, and what do the dot and cross products measure? How does a 2x2 or 3x3 matrix *act* as a geometric transformation? What does a determinant tell you?
- **Key concepts**: Vectors in 2D and 3D; magnitude, direction, components; the dot product and angle/orthogonality; the cross product, area, and normal vectors; matrices as linear maps; rotation, reflection, dilation, and shear matrices; matrix multiplication as composition; determinants as signed area/volume scaling; inverses and linear systems.
- **Applied skills**: Use the dot product to find an angle or test orthogonality; use the cross product to find a parallelogram area or a normal vector; build the matrix for a named geometric action; compose transformations by multiplying matrices in the correct order; compute a determinant and interpret it; solve a linear system via matrices.
- **Common traps**: Reversing composition order (the matrix applied first is written on the *right*); computing bc - ad instead of ad - bc for a 2x2 determinant; reporting |a x b|^2 instead of |a x b| for an area; treating the dot product (a scalar) as if it were a vector; expecting an inverse when the determinant is zero.

## Chapter 8: Parametric, Polar, Conic, and Limit Ideas
- **Core questions**: How do parametric equations describe motion that a single y = f(x) rule cannot? How do polar coordinates and conic sections each capture geometry the Cartesian view hides? What does it mean for a function to approach a limit, and how is that different from its value?
- **Key concepts**: Parametric equations and the parameter as time; eliminating the parameter; projectile/motion models; polar coordinates and graphs; conic sections by focus-directrix definition; eccentricity and the relations c^2 = a^2 - b^2 (ellipse) and c^2 = a^2 + b^2 (hyperbola); numerical, graphical, and algebraic limits; removable discontinuities; continuity; average vs. instantaneous rate of change.
- **Applied skills**: Convert a parametric curve to rectangular form and vice versa; graph and interpret a polar equation; identify a conic's center, foci, and eccentricity from its equation; evaluate a limit from a table, a graph, and by algebraic cancellation; distinguish a removable discontinuity from a jump or infinite one; estimate instantaneous rate as a limit of average rates.
- **Common traps**: Forgetting that a limit can exist where the function is undefined (0/0 after cancellation gives a finite limit); plugging in to get 0/0 and concluding the limit fails to exist; losing orientation/direction when eliminating a parameter; confusing the polar r with a Cartesian radius for non-circular curves; swapping the ellipse and hyperbola relations between a, b, and c.

## Capstone
Students complete a connected modeling-and-proof project that genuinely uses at least three major course strands and makes its mathematics defensible to a skeptical reader. Strong projects in past cohorts have modeled local tide or daylight data with a fitted sinusoid and validated it against residuals; represented a sequence of plane rotations both as complex-number multiplication and as matrix composition, proving the two agree; or analyzed projectile motion in parametric form and posed an instantaneous-velocity question answered with a limit.

The final submission must include: (1) exact mathematics, not just decimals from a tool; (2) a technology artifact (graph, spreadsheet fit, or notebook) used for exploration or verification; (3) at least one proof or derivation (an identity, a transformation claim, a root-behavior argument, or a limit justification); (4) an explicit model critique stating assumptions, parameter meanings, and where the model fails; and (5) a short presentation pitched to a mathematically literate audience. Assessment rewards correct interpretation and honest limitations over volume of computation.

## Assessment Ideas
- Translation tasks requiring students to move among graphs, formulas, tables, and verbal descriptions of the same object.
- Proof and justification prompts for identities, inverse restrictions, root behavior, asymptote classification, and transformation claims.
- Technology labs graded on interpretation and verification, not screenshots or command syntax.
- Modeling memos that state assumptions, fit and interpret parameters, examine residuals, and bound the model's domain of validity.
- Cumulative oral or written defenses that explicitly connect a precalculus idea (rate of change, local behavior, transformation) to its calculus successor.

## Research Notes
- OpenStax Precalculus: https://openstax.org/details/books/precalculus
- Illustrative Mathematics high school tasks: https://tasks.illustrativemathematics.org/
- Eureka Math Precalculus resources: https://greatminds.org/math/eurekamath
- NCTM Principles to Actions: https://www.nctm.org/PrinciplestoActions/
- Khan Academy Precalculus: https://www.khanacademy.org/math/precalculus
