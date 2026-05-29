// Bespoke polish layer for the imported Numbas / WeBWorK math banks.
// Sub-topics cluster the imported items into named teaching threads; mentor hints
// add a per-question coaching line that names the specific rule, identity, or
// structural trick the learner should reach for.

export const NUMBAS_MATH_SUB_TOPICS: Record<string, number[]> = {
  'BODMAS / Order of Operations': [461001],
  'Factors and Multiples': [461002, 461003],
  'Surds and Radicals': [461004],
  'Logarithm Laws': [466001, 466003],
  'Logarithmic and Exponential Equations': [462001, 462003],
  'Quadratic Factoring and Completing the Square': [466002, 466004, 462002],
  'Quadratic Functions and Vertex Form': [466005],
  'Sinusoidal Graphs and Transformations': [466105, 462101],
  'Right-Triangle and Special Angle Ratios': [466101, 466102],
  'Unit Circle and Reference Angles': [462102, 462103, 466103],
  'Trig Identities and Function Parity': [466104],
  'Derivatives - Power and Linear Rules': [461101, 461103],
  'Derivatives - Product, Quotient, and Chain Rules': [466201, 466202, 462201, 462202],
  'Multivariable and Vector Derivatives': [461104, 461105, 461106, 466205],
  'Integration Techniques': [461102, 466203, 466204, 462203],
  'Matrix Basics and Notation': [461201, 462301, 462302],
  'Matrix Multiplication and Transformations': [461205, 462303],
  'Row Reduction and Linear Systems': [461202, 466304],
  'Determinants and Invertibility': [466301, 466302, 466303],
  'Eigenvalues and Characteristic Polynomial': [461204],
  'Vectors and Graph Matrices': [461203, 466305],
  'Descriptive Statistics and Resistance': [462401, 462402],
  'Probability and Independence': [461303, 462403],
  'Sampling and Confidence Intervals': [461301, 466401],
  'Normal Distribution and Empirical Rule': [466402, 466404],
  'Hypothesis Tests and Inference': [461302, 461304, 461305, 466403],
}

export const NUMBAS_MATH_MENTOR_HINTS: Record<number, string> = {
  // numbasWebworkMathImported - Algebra
  461001: 'BIDMAS / PEMDAS: brackets always resolve first because they override the default precedence. Treat them as a forced reorder.',
  461002: 'Divisibility-by-5 test: only the units digit matters. If it is 0 or 5, the number is a multiple of 5. No digit sums needed.',
  461003: 'Divisibility-by-3 test: sum the digits and check that sum against 3. Digit-sum tests work for 3 and 9, not for 5 or 2.',
  461004: 'Rationalising means clearing radicals from the denominator, usually by multiplying by a conjugate. The target is the bottom, not the top.',
  // numbasWebworkMathImported - Calculus
  461101: 'Power rule: d/dx[kx^n] = k·n·x^(n-1). Bring the exponent down as a factor, then drop it by one.',
  461102: 'u-substitution works when du = u\'(x) dx already appears in the integrand. Match the inside function with a derivative factor outside.',
  461103: 'Derivative of a linear function bx - a is just the slope b. Constants vanish; only the coefficient of x survives.',
  461104: 'Vector derivative r\'(t) is taken component-wise: differentiate each coordinate function of t independently, then reassemble the vector.',
  461105: 'Partial f_x: hold every other variable (y and z) fixed and differentiate as if only x is changing. The fixed variables act like constants.',
  461106: 'Directional derivative formula: grad f · u-hat, where u-hat is v normalized. Always rescale v to length 1 before dotting with the gradient.',
  // numbasWebworkMathImported - Linear Algebra
  461201: 'Identity matrix I_n: square, ones on the main diagonal, zeros everywhere else. It is the multiplicative identity: AI = IA = A.',
  461202: 'RREF requires every pivot to equal 1 AND every other entry in that pivot column to be 0. Plain echelon form only demands a leading nonzero.',
  461203: 'Adjacency matrix A[i][j] = 1 means an edge from vertex i to vertex j. Symmetric for undirected graphs, possibly asymmetric for directed ones.',
  461204: 'Characteristic polynomial: det(tI - A) = 0 gives the eigenvalues. The variable t lives on the diagonal of the shifted matrix.',
  461205: 'A 2D linear map is fully determined by where it sends e_1 and e_2, so tracking the unit square shows shear, rotation, scale, and reflection at once.',
  // numbasWebworkMathImported - Statistics
  461301: 'Confidence-interval interpretation: the 95% is a property of the procedure, not this specific interval. Repeat the experiment many times; 95% of the intervals cover the true parameter.',
  461302: 'Nominal data are unordered labels (colors, brands). Ordinal adds rank, interval/ratio add numeric spacing. Look for the absence of a natural order.',
  461303: 'PDF rules: f(x) >= 0 everywhere, and the total area under the curve over its support is exactly 1. Height can exceed 1; area cannot.',
  461304: 'Paired t-test reduces each pair to a difference d_i = x_i - y_i, then runs a one-sample t on those differences. Pairing controls subject-level variation.',
  461305: 'One-way ANOVA F-statistic compares MS_between to MS_within. It asks whether group means differ more than within-group noise would predict.',
  // numbasWebworkMathAdditionalImported - Algebra
  466001: 'Product rule for logs: log_b(MN) = log_b(M) + log_b(N). A product inside becomes a sum outside; division becomes subtraction.',
  466002: 'Completing the square for x^2 + bx: add and subtract (b/2)^2, because (x + b/2)^2 = x^2 + bx + (b/2)^2. Halve, then square.',
  466003: 'Log-to-exponential conversion: log_a(C) = B is the same statement as a^B = C. The log value B is the exponent applied to base a.',
  466004: 'Factor theorem: if r is a root, (x - r) is a factor. So roots r and s give (x - r)(x - s), which expands to x^2 - (r+s)x + rs.',
  466005: 'Vertex form a(x - h)^2 + k locks the vertex at (h, k): the squared term is zero exactly at x = h, leaving y = k. The a controls stretch only.',
  // numbasWebworkMathAdditionalImported - Trigonometry
  466101: '30-60-90 ratio is 1 : sqrt(3) : 2 (short leg : long leg : hypotenuse). Short leg opposite 30 deg; long leg opposite 60 deg; hypotenuse opposite 90 deg.',
  466102: '45-45-90 isoceles right triangle: legs equal, hypotenuse = leg · sqrt(2). Pythagoras: a^2 + a^2 = 2a^2, so hypotenuse = a·sqrt(2).',
  466103: 'Coterminal angles share a terminal side; they differ by full turns of 360 degrees (or 2pi radians). Adding 180 degrees flips to the opposite ray instead.',
  466104: 'Sine is odd: sin(-x) = -sin(x), so its graph is symmetric about the origin. Cosine is even: cos(-x) = cos(x), symmetric about the y-axis.',
  466105: 'For y = a·sin(b(x - c)) + d: |a| is amplitude, 2pi/|b| is period, c is horizontal shift, d is the midline. Amplitude is always the outside multiplier.',
  // numbasWebworkMathAdditionalImported - Calculus
  466201: 'Chain rule: (f o g)\'(x) = f\'(g(x))·g\'(x). Differentiate the outer at the inner, then multiply by the derivative of the inner.',
  466202: 'Logarithmic differentiation: d/dx[ln(u)] = u\'/u. Inner derivative on top; inner function on bottom. Pure chain rule applied to ln.',
  466203: 'Riemann sum limit definition: integral from a to b of f(x) dx = lim (n->inf) Sum f(x_i*)·Delta x. Area under the curve as rectangle widths shrink to zero.',
  466204: 'u-sub strategy: pick u so that du = u\'(x) dx appears (up to a constant) in the integrand. Look for a composite where the inner\'s derivative is already a factor.',
  466205: 'Multivariable chain rule with one parameter: dz/dt = (df/dx)(dx/dt) + (df/dy)(dy/dt). Sum the contributions from each branch of the dependency tree.',
  // numbasWebworkMathAdditionalImported - Linear Algebra
  466301: '2x2 determinant: det([[a,b],[c,d]]) = ad - bc. Main diagonal product minus anti-diagonal product. Sign of the second term matters.',
  466302: 'Invertibility test: A^(-1) exists iff det(A) != 0. Equivalent: full rank, trivial null space, and all eigenvalues nonzero.',
  466303: '|det(A)| is the volume scale factor of the linear map. Sign of det(A) records orientation: positive preserves it, negative flips it.',
  466304: 'After RREF: pivot columns correspond to basic (leading) variables; columns without a pivot give free variables that parametrize the solution set.',
  466305: 'Parallelogram rule: place tails together; the resultant is the diagonal from that shared tail to the far corner. Equivalently, tip-to-tail addition.',
  // numbasWebworkMathAdditionalImported - Statistics
  466401: 'Frequentist CI: once computed from data, the interval is fixed and the parameter is fixed; the 95% describes the long-run capture rate of the method, not this one trial.',
  466402: 'Normal family parameters: mu shifts center, sigma controls spread. Same sigma => same bell shape, just translated horizontally by the mu difference.',
  466403: 'Two-sided alternative for "differs from": H_a: mu != 98.6. One-sided ("greater than" or "less than") uses > or <. Equality always lives in H_0.',
  466404: 'Empirical (68-95-99.7) rule: within 1 sigma is about 68%, within 2 sigma about 95%, within 3 sigma about 99.7% of a normal distribution.',
  // numbasWebworkMathThirdImported - Algebra
  462001: 'Solving log_a(bx + c) = d: exponentiate both sides with base a to get bx + c = a^d. The log undoes the exponent; now solve the linear piece.',
  462002: 'Factoring x^2 + bx + c = (x + m)(x + n): need m + n = b and m·n = c. Expand (x + m)(x + n) to verify the sum-and-product relationship.',
  462003: 'Half-life decay: amount(t) = A_0 · (1/2)^(t/T). Each half-life period multiplies what is left by 1/2 again. Multiplicative, not subtractive.',
  // numbasWebworkMathThirdImported - Trigonometry
  462101: 'In y = A·sin(Bx + C), |A| is the amplitude (peak distance from the midline). B controls period (2pi/|B|); C contributes phase shift.',
  462102: 'Reference angle = the acute angle from the terminal side to the nearest x-axis ray (never the y-axis). Always between 0 and 90 degrees.',
  462103: 'On the unit circle, the terminal point at angle theta is (cos(theta), sin(theta)). x = cosine, y = sine; the radius is 1 so no scaling needed.',
  // numbasWebworkMathThirdImported - Calculus
  462201: 'Product rule: (uv)\' = u\'v + uv\'. Two terms: each term differentiates exactly one factor and leaves the other untouched.',
  462202: 'Derivative of e^u(x): d/dx[e^u] = e^u · u\'(x). Exponential\'s derivative is itself, then chain rule multiplies by the inner derivative.',
  462203: '+C exists because differentiation kills constants, so the antiderivative is only determined up to an additive constant. Whole family of curves shares one derivative.',
  // numbasWebworkMathThirdImported - Linear Algebra
  462301: 'Matrix order m x n: m is the number of rows (counted top-to-bottom), n is the number of columns (counted left-to-right). Rows first, always.',
  462302: 'Matrix addition is entry-wise: (A + B)[i][j] = A[i][j] + B[i][j]. Requires identical dimensions; result keeps the same shape.',
  462303: 'Matrix product (AB)[i][j] = row i of A dotted with column j of B. Inner dimensions must match: (m x k) · (k x n) -> (m x n).',
  // numbasWebworkMathThirdImported - Statistics
  462401: 'For skewed data or outliers, use resistant summaries: median for center, IQR for spread. Mean and standard deviation are pulled by extreme values.',
  462402: 'Spread vs location: mean, median, mode describe center (location). Range, IQR, variance, standard deviation describe variability (spread).',
  462403: 'Independent events: P(A and B) = P(A) · P(B). Independence is exactly the failure of conditioning to change probability: P(A | B) = P(A).',
}

export const NUMBAS_MATH_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}
