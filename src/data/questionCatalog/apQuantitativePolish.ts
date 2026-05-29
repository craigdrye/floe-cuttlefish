// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP quantitative-discipline survey banks:
//   - highApCalculusQuestions          (IDs 4400300-4400349, 50 Qs)
//   - highApEconomicsQuestions         (IDs 4400500-4400549, 50 Qs)
//   - highApComputerScienceQuestions   (IDs 4400800-4400849, 50 Qs)
//
// AP_QUANT_SUB_TOPICS maps each question id to a stable sub-topic label that
// aligns with the AP exam unit structure for each discipline. Calculus uses
// the nine AP Calc AB/BC chapters plus a synthesis cluster; Economics covers
// the standard AP Micro + AP Macro unit menu; Computer Science is partitioned
// into AP CSP big ideas (4400800-4400819) and AP CSA Java topics (4400820+).
//
// AP_QUANT_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice appropriate to the discipline: math tutor
// for Calculus, AP Econ TA for Economics, senior Java developer for CS.
//
// AP_QUANT_CORRECT_SHORTENED trims `correct` strings flagged by the length
// heuristic (correct >=1.8x longest wrong AND >=20 char gap). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no info is lost.

export const AP_QUANT_SUB_TOPICS: Record<number, string> = {
  // ============================================================
  // AP Calculus AB/BC (4400300-4400349)
  // ============================================================
  // Limits & Continuity
  4400300: 'Limits & Continuity',
  4400301: 'Limits & Continuity',
  4400302: 'Limits & Continuity',
  4400303: 'Limits & Continuity',
  4400304: 'Limits & Continuity',
  4400305: 'Limits & Continuity',

  // Derivatives Foundation
  4400306: 'Derivatives Foundation',
  4400307: 'Derivatives Foundation',
  4400308: 'Derivatives Foundation',
  4400309: 'Derivatives Foundation',
  4400310: 'Derivatives Foundation',
  4400311: 'Derivatives Foundation',

  // Derivative Applications
  4400312: 'Derivative Applications',
  4400313: 'Derivative Applications',
  4400314: 'Derivative Applications',
  4400315: 'Derivative Applications',
  4400316: 'Derivative Applications',

  // Curve Sketching
  4400317: 'Curve Sketching',
  4400318: 'Curve Sketching',
  4400319: 'Curve Sketching',
  4400320: 'Curve Sketching',
  4400321: 'Curve Sketching',

  // Integration Foundation
  4400322: 'Integration Foundation',
  4400323: 'Integration Foundation',
  4400324: 'Integration Foundation',
  4400325: 'Integration Foundation',
  4400326: 'Integration Foundation',
  4400327: 'Integration Foundation',

  // Integration Applications
  4400328: 'Integration Applications',
  4400329: 'Integration Applications',
  4400330: 'Integration Applications',
  4400331: 'Integration Applications',
  4400332: 'Integration Applications',

  // Differential Equations
  4400333: 'Differential Equations',
  4400334: 'Differential Equations',
  4400335: 'Differential Equations',
  4400336: 'Differential Equations',
  4400337: 'Differential Equations',

  // Series (BC)
  4400338: 'Series (BC)',
  4400339: 'Series (BC)',
  4400340: 'Series (BC)',
  4400341: 'Series (BC)',
  4400342: 'Series (BC)',
  4400343: 'Series (BC)',

  // Parametric/Polar/Vector (BC)
  4400344: 'Parametric/Polar/Vector (BC)',
  4400345: 'Parametric/Polar/Vector (BC)',
  4400346: 'Parametric/Polar/Vector (BC)',
  4400347: 'Parametric/Polar/Vector (BC)',

  // Synthesis & FRQ Strategy
  4400348: 'Synthesis & FRQ Strategy',
  4400349: 'Synthesis & FRQ Strategy',

  // ============================================================
  // AP Economics (4400500-4400549)
  // ============================================================
  // Supply & Demand
  4400500: 'Supply & Demand',
  4400501: 'Supply & Demand',
  4400502: 'Supply & Demand',

  // Elasticity
  4400503: 'Elasticity',
  4400504: 'Elasticity',
  4400505: 'Elasticity',
  4400506: 'Elasticity',

  // Surplus & Government Intervention
  4400507: 'Surplus & Government Intervention',
  4400508: 'Surplus & Government Intervention',
  4400509: 'Surplus & Government Intervention',
  4400510: 'Surplus & Government Intervention',

  // Production Costs
  4400511: 'Production Costs',
  4400512: 'Production Costs',
  4400513: 'Production Costs',

  // Market Structures
  4400514: 'Market Structures',
  4400515: 'Market Structures',
  4400516: 'Market Structures',
  4400517: 'Market Structures',

  // Game Theory
  4400518: 'Game Theory',
  4400519: 'Game Theory',

  // Factor Markets
  4400520: 'Factor Markets',
  4400521: 'Factor Markets',

  // Market Failure
  4400522: 'Market Failure',
  4400523: 'Market Failure',
  4400524: 'Market Failure',

  // Macro Indicators
  4400525: 'Macro Indicators',
  4400526: 'Macro Indicators',
  4400527: 'Macro Indicators',

  // Inflation & Unemployment
  4400528: 'Inflation & Unemployment',
  4400529: 'Inflation & Unemployment',
  4400530: 'Inflation & Unemployment',
  4400531: 'Inflation & Unemployment',

  // AD/AS Model
  4400532: 'AD/AS Model',
  4400533: 'AD/AS Model',
  4400534: 'AD/AS Model',
  4400535: 'AD/AS Model',

  // Multipliers & Fiscal Policy
  4400536: 'Multipliers & Fiscal Policy',
  4400537: 'Multipliers & Fiscal Policy',
  4400538: 'Multipliers & Fiscal Policy',
  4400539: 'Multipliers & Fiscal Policy',

  // Money & Banking
  4400540: 'Money & Banking',
  4400541: 'Money & Banking',
  4400542: 'Money & Banking',

  // Monetary Policy
  4400543: 'Monetary Policy',
  4400544: 'Monetary Policy',

  // Phillips Curve
  4400545: 'Phillips Curve',
  4400546: 'Phillips Curve',

  // Trade & Exchange Rates
  4400547: 'Trade & Exchange Rates',
  4400548: 'Trade & Exchange Rates',
  4400549: 'Trade & Exchange Rates',

  // ============================================================
  // AP Computer Science (4400800-4400849)
  // ============================================================
  // CSP: Binary & Boolean Logic
  4400800: 'CSP: Binary & Boolean Logic',
  4400801: 'CSP: Binary & Boolean Logic',
  4400803: 'CSP: Binary & Boolean Logic',
  4400804: 'CSP: Binary & Boolean Logic',

  // CSP: Algorithms & Efficiency
  4400802: 'CSP: Algorithms & Efficiency',
  4400805: 'CSP: Algorithms & Efficiency',
  4400806: 'CSP: Algorithms & Efficiency',

  // CSP: Internet & Networking
  4400807: 'CSP: Internet & Networking',
  4400808: 'CSP: Internet & Networking',
  4400809: 'CSP: Internet & Networking',

  // CSP: Cybersecurity
  4400810: 'CSP: Cybersecurity',
  4400811: 'CSP: Cybersecurity',
  4400812: 'CSP: Cybersecurity',

  // CSP: Data Analysis
  4400813: 'CSP: Data Analysis',
  4400814: 'CSP: Data Analysis',

  // CSP: Programming Patterns
  4400815: 'CSP: Programming Patterns',
  4400816: 'CSP: Programming Patterns',

  // CSP: Computing Impact
  4400817: 'CSP: Computing Impact',
  4400818: 'CSP: Computing Impact',
  4400819: 'CSP: Computing Impact',

  // CSA: Primitives & References
  4400820: 'CSA: Primitives & References',
  4400821: 'CSA: Primitives & References',
  4400822: 'CSA: Primitives & References',

  // CSA: Class Structure
  4400823: 'CSA: Class Structure',
  4400824: 'CSA: Class Structure',
  4400848: 'CSA: Class Structure',

  // CSA: Inheritance & Polymorphism
  4400825: 'CSA: Inheritance & Polymorphism',
  4400826: 'CSA: Inheritance & Polymorphism',
  4400827: 'CSA: Inheritance & Polymorphism',
  4400828: 'CSA: Inheritance & Polymorphism',
  4400829: 'CSA: Inheritance & Polymorphism',

  // CSA: ArrayList & Collections
  4400830: 'CSA: ArrayList & Collections',
  4400831: 'CSA: ArrayList & Collections',
  4400832: 'CSA: ArrayList & Collections',

  // CSA: 2D Arrays
  4400833: 'CSA: 2D Arrays',
  4400834: 'CSA: 2D Arrays',

  // CSA: Recursion
  4400835: 'CSA: Recursion',
  4400836: 'CSA: Recursion',

  // CSA: Sorting & Searching
  4400837: 'CSA: Sorting & Searching',
  4400838: 'CSA: Sorting & Searching',
  4400839: 'CSA: Sorting & Searching',
  4400840: 'CSA: Sorting & Searching',
  4400841: 'CSA: Sorting & Searching',
  4400847: 'CSA: Sorting & Searching',

  // CSA: Strings & Exceptions
  4400842: 'CSA: Strings & Exceptions',
  4400843: 'CSA: Strings & Exceptions',
  4400844: 'CSA: Strings & Exceptions',
  4400845: 'CSA: Strings & Exceptions',
  4400846: 'CSA: Strings & Exceptions',
  4400849: 'CSA: Strings & Exceptions',
}

export const AP_QUANT_MENTOR_HINTS: Record<number, string> = {
  // ============================================================
  // AP Calculus (math tutor voice)
  // ============================================================
  4400300: 'Polynomials are continuous everywhere, so a limit at an interior point is just direct substitution. Plug in and arithmetic.',
  4400301: 'You hit 0/0 - factor first. The numerator is a difference of squares; cancel the common factor before letting x approach 3.',
  4400302: 'When sin(kx) sits over x and you get 0/0, the standard limit lim sin(u)/u = 1 says the answer is just k. Or apply L\'Hopital once.',
  4400303: 'Same degree on top and bottom? The limit at infinity is the ratio of leading coefficients. Ignore the lower-order debris.',
  4400304: 'IVT trades continuity plus a sign change for a guaranteed root. Check the hypotheses, then state the conclusion - do not ask it for more.',
  4400305: 'Three boxes must all check for continuity: f(a) defined, limit exists, and they match. If only the third fails, it is removable.',
  4400306: 'You are running the limit definition by hand. Expand (x + h)^2, cancel the x^2, divide by h, then take h to 0 - keep the steps in order.',
  4400307: 'Power rule term by term: pull the exponent down as a coefficient, then drop the exponent by one. Constants vanish.',
  4400308: 'Product rule, not just chain. (uv)\' = u\'v + uv\' - both factors contribute, neither one disappears.',
  4400309: 'Quotient rule has an order: low d-high minus high d-low, all over low-squared. Reversing the subtraction flips the sign.',
  4400310: 'Chain rule has two pieces: derivative of outer evaluated at the inner, then times derivative of the inner. Do not forget the second factor.',
  4400311: 'Differentiate both sides treating y as y(x). Solve for dy/dx; the formula here is -x/y - sign and order both matter.',
  4400312: 'Write the constraint x^2 + y^2 = 100, differentiate with respect to t, then substitute the instant. The ratio -x/y carries the sign.',
  4400313: 'Use r = h to get V = pi h^3 / 3, differentiate, then plug in h = 3. The h^2 factor in the denominator is what slows the rise.',
  4400314: 'Fixed perimeter, maximum area - the answer is always the square. Use calculus on A(x) = x(20 - x) if you want to verify.',
  4400315: 'MVT: continuity on the closed interval, differentiability on the open one. Rolle is the special case f(a) = f(b).',
  4400316: 'Tangent line at a base point: L(x) = f(a) + f\'(a)(x - a). The slope here is 1/(2 sqrt(25)) = 1/10.',
  4400317: 'Critical points come from setting f\'(x) = 0 (or undefined). Function value is a red herring.',
  4400318: 'Inflection requires a sign change in f\'\', not just f\'\' = 0. Test concavity on either side.',
  4400319: 'Second derivative test at a critical point: positive f\'\' means concave up means local min. Bowl shape, low point.',
  4400320: 'Sign chart for f\'(x) = 3x^2 - 3. Increasing where it is positive - which is outside the roots, not between them.',
  4400321: 'On a closed interval, compare f at endpoints and at interior critical points. Largest value wins.',
  4400322: 'Reverse the power rule: divide by the new exponent. And add +C - the entire family is the answer.',
  4400323: 'For increasing f, left endpoints sit below the curve, so left sums underestimate. Right sums overshoot.',
  4400324: 'Concave up means the curve sags below its chords, so trapezoids sit above the curve - overestimate.',
  4400325: 'FTC Part 1: differentiating an integral with variable upper limit just gives the integrand evaluated there. No antiderivative needed.',
  4400326: 'Integral of a rate gives net change. Velocity integrates to displacement; absolute value would give distance.',
  4400327: 'u-substitution: pick u = x^2 so du = 2x dx absorbs the front of the integrand. The 2x disappears into du.',
  4400328: 'Area between curves: integrate (top - bottom). On [0, 1], y = x sits above y = x^2.',
  4400329: 'Disk method: V = pi * integral of R^2. Here R = sqrt(x), so R^2 = x. Integrate x from 0 to 4.',
  4400330: 'Washers: pi * integral of (R_outer^2 - R_inner^2). Square each radius separately, then subtract.',
  4400331: 'Shell method: 2 pi * integral of (radius)(height) dx. Radius = x, height = x^2 for this region.',
  4400332: 'Average value = (1/(b - a)) * integral. Divide by interval length - do not skip that step.',
  4400333: 'Separable: rearrange to dy/y = x dx, integrate to ln|y| = x^2/2 + C, then apply y(0) = 1.',
  4400334: 'Read the field: which variable does the slope depend on? "No y dependence" rules out y and xy.',
  4400335: 'dP/dt = kP solves to P(0) e^(kt). Keep the rate constant in the exponent.',
  4400336: 'Euler: y_new = y_old + h * f. One step from (0, 1) with h = 0.1 and slope 1 gives 1.1.',
  4400337: 'Logistic dP/dt = kP(1 - P/M). Starting between 0 and M, you climb monotonically to the carrying capacity.',
  4400338: 'Geometric series sums to a/(1 - r) when |r| < 1. With a = 1 and r = 1/3, that is 1/(2/3).',
  4400339: 'p-series: converges iff p > 1. The harmonic series (p = 1) is the canonical divergent borderline.',
  4400340: 'Ratio test: compute lim |a_(n+1)/a_n|. If less than 1, converges. The 2^n in the denominator wins.',
  4400341: 'Maclaurin of e^x is sum x^n / n!. Factorials in the denominator, all powers included, converges everywhere.',
  4400342: 'sin(x) uses only odd powers with alternating signs. Cos uses even powers. Differentiate to swap.',
  4400343: 'Lagrange remainder: |R_n| <= (M/(n+1)!) * |x - a|^(n+1), where M bounds the (n+1)th derivative.',
  4400344: 'Parametric derivative is the ratio dy/dt divided by dx/dt - not a difference, not a derivative of a ratio.',
  4400345: 'Arc length integrand is sqrt(1 + (f\'(x))^2). Pythagoras combines horizontal 1 with squared slope.',
  4400346: 'Polar area: (1/2) * integral of r^2 d theta. Both the 1/2 and the squaring are essential.',
  4400347: 'Speed = magnitude of velocity vector. Differentiate componentwise, then take the Pythagorean norm.',
  4400348: 'Slicing perpendicular to the rotation axis gives disks or washers; parallel gives shells. Match slice to axis.',
  4400349: 'A justification point requires a named theorem, verification of hypotheses, and a stated conclusion. Vagueness loses credit.',

  // ============================================================
  // AP Economics (AP Econ TA voice)
  // ============================================================
  4400500: 'A change in input price shifts supply, not demand. Buyers respond by moving along the unchanged demand curve.',
  4400501: 'Substitutes: when one rises, demand for the other shifts right. Tea demand shifts right, lifting both P and Q.',
  4400502: 'Both shifts move quantity the same way (up) but price oppositely. Quantity is determinate, price ambiguous.',
  4400503: 'Total revenue test: if price up and total revenue up, demand is inelastic over that range. |PED| < 1.',
  4400504: 'Cross-price elasticity = %DeltaQ_A / %DeltaP_B. Sign first (positive = substitutes), then magnitude.',
  4400505: 'Income elasticity: negative = inferior, between 0 and 1 = normal necessity, above 1 = normal luxury.',
  4400506: 'PES = %DeltaQ_s / %DeltaP. Quantity change goes on top - 15/5, not the other way around.',
  4400507: 'A tax wedges price-paid above price-received and kills mutually beneficial trades. Revenue is a transfer, not surplus.',
  4400508: 'A binding ceiling sits below equilibrium and cuts quantity supplied. Shortage and non-price rationing follow.',
  4400509: 'Tax burden falls on the more inelastic side. Statutory incidence (who writes the check) is a red herring.',
  4400510: 'Per-unit subsidies push output above the efficient quantity. The new triangle of cost above WTP is deadweight loss.',
  4400511: 'Marginal pulls average toward itself. MC crosses ATC at its minimum, from below.',
  4400512: 'Short-run total cost = FC + (MC * Q). With FC = 400 and MC * Q = 5 * 60 = 300, TC = 700.',
  4400513: 'Shutdown rule: operate iff P >= AVC. Fixed costs are sunk in the short run - ignore them in the operating decision.',
  4400514: 'Perfect-competition long run: free entry drives economic profit to zero at minimum ATC, where P = MR = MC.',
  4400515: 'Monopoly produces where MR = MC but charges P > MC along the demand curve - that gap is the deadweight loss wedge.',
  4400516: 'Monopolistic competition long run: P = ATC (zero profit) but P > MC and output below min ATC - excess capacity.',
  4400517: 'Kinked demand: rivals match price cuts (elastic below) but ignore price hikes (inelastic above). Prices are sticky.',
  4400518: 'When defect strictly dominates cooperate for each player, the unique Nash is mutual defection - Pareto-inferior but rational.',
  4400519: 'Nash equilibrium is mutual best response: no unilateral deviation pays. Joint payoff maximization is a different concept.',
  4400520: 'Hire labor up to MRP_L = wage. Past that, the next worker costs more than they bring in.',
  4400521: 'Labor demand is MRP, and MRP = MP times price. Higher MP at every level shifts labor demand rightward.',
  4400522: 'Pigouvian tax = marginal external cost. It pushes MPC up to MSC, restoring the efficient quantity.',
  4400523: 'Pure public goods are non-rival AND non-excludable. Private goods reverse both; club goods and common resources sit on the diagonals.',
  4400524: 'Information asymmetry pre-trade produces adverse selection: high quality exits, low quality remains. Akerlof\'s lemons.',
  4400525: 'GDP counts new domestic market production. Used goods, transfers, and unpaid work are out.',
  4400526: 'For small rates, real GDP growth approximately equals nominal growth minus inflation. 7 - 3 = 4.',
  4400527: 'Deflator: current-weighted, all domestic production. CPI: fixed urban consumer basket, includes imports.',
  4400528: 'Structural unemployment = durable skills/location mismatch. Permanent industry shifts are structural, not frictional.',
  4400529: 'Discouraged workers leave the labor force entirely - they vanish from the numerator AND the denominator, lowering the rate.',
  4400530: 'CPI = (current basket cost / base basket cost) * 100. Index level, not percent change.',
  4400531: 'Rising prices and rising unemployment together = stagflation = cost-push SRAS shock leftward.',
  4400532: 'Business cycle phases: expansion, peak, contraction, trough. Trough is the bottom turning point in output.',
  4400533: 'AD shifts when C, I, G, or NX changes at every price level. Price-level changes alone are movements along AD.',
  4400534: 'LRAS is vertical at potential output. Upward-sloping is SRAS; horizontal is the Keynesian special case.',
  4400535: 'Self-correction works through SRAS: nominal wages fall, SRAS shifts right, output returns to potential at a lower price level.',
  4400536: 'Spending multiplier = 1 / (1 - MPC) = 1 / MPS. With MPC = 0.75, MPS = 0.25 and multiplier = 4.',
  4400537: 'Tax multiplier = -MPC / (1 - MPC). Some of every tax change is saved, so |tax mult| < |spending mult|.',
  4400538: 'Textbook multipliers assume flat SRAS and no crowding out. Reality steepens both, shrinking the real-GDP impact.',
  4400539: 'Crowding out runs through loanable funds: government borrowing pushes rates up, private investment falls.',
  4400540: 'M1 is the most liquid means-of-payment money: currency in circulation and checkable deposits. Stocks, bonds, commodities are out.',
  4400541: 'Money multiplier = 1 / required reserve ratio. With rr = 0.20, multiplier = 5; $1,000 deposit supports up to $5,000.',
  4400542: 'Higher required reserves shrink the money multiplier and contract the money supply. Less to lend.',
  4400543: 'Expansionary OMO = Fed buys securities, reserves rise, federal funds rate falls. Buy injects, sell drains.',
  4400544: 'Contractionary policy: raise rates, slow borrowing, cool inflation. Money supply falls; investment falls.',
  4400545: 'Short-run Phillips: inverse relation between inflation and unemployment for given expectations. Long-run is vertical.',
  4400546: 'Long-run Phillips is vertical at the natural rate because expectations fully adjust. No permanent trade-off.',
  4400547: 'Comparative advantage is about opportunity cost, not absolute productivity. A pays 2 wheat per cloth vs B\'s 3 wheat - A specializes in cloth.',
  4400548: 'A stronger dollar makes US exports pricier abroad and imports cheaper at home. Exports fall, imports rise.',
  4400549: 'Balance of payments identity: current-account deficit is offset by financial-account surplus. The flows balance overall.',

  // ============================================================
  // AP Computer Science (senior Java developer voice)
  // ============================================================
  4400800: 'Each bit doubles the count. Eight bits gives 2^8 = 256 distinct values; that is why unsigned bytes run 0-255.',
  4400801: 'Place values right-to-left: 1, 2, 4, 8. 1011 turns on the 8, the 2, and the 1. 8 + 2 + 1 = 11.',
  4400802: 'Abstraction hides lower-level detail so callers reason at a higher level. Layers of meaning, not file compression.',
  4400803: 'AND is the strict one: every operand must be true. One false input forces the whole result to false.',
  4400804: 'XOR is true exactly when the inputs differ. OR is also true in that case, so XOR true implies OR true.',
  4400805: 'Binary search requires sorted data. Without ordering, halving the array tells you nothing about which half to keep.',
  4400806: 'Binary search is O(log n). Doubling n adds exactly one comparison, because log_2(2n) = log_2(n) + 1.',
  4400807: 'DNS is the internet phone book: name to IP. Encryption is TLS\'s job, not DNS.',
  4400808: 'IP routes packets; TCP makes them arrive reliably and in order. TLS layers encryption above TCP.',
  4400809: 'Port 80 for HTTP, port 443 for HTTPS. Browsers append :443 silently for any https:// URL.',
  4400810: 'Symmetric: one shared secret. Asymmetric: public/private key pair. The pair solves key distribution.',
  4400811: 'Cryptographic hashes are one-way: fixed-size digest, infeasible to reverse. Not encryption, not compression.',
  4400812: 'MITM sits on the wire between two parties who think they are talking directly. TLS plus cert validation is the defense.',
  4400813: 'Filter first to narrow rows, then aggregate the filtered subset. Aggregating first loses the rows you needed.',
  4400814: 'Biased outputs almost always trace to biased training data. The model learns whatever distribution you feed it.',
  4400815: 'A loop with a conditional inside combines iteration and selection. Recursion would be a self-call; you do not need that here.',
  4400816: 'Wrapping repeated code behind a named function is procedural abstraction - the simplest and most useful form of abstraction.',
  4400817: 'The digital divide is about people: unequal access to devices, broadband, and digital literacy across communities.',
  4400818: 'Open source is free to use but not free of conditions. Attribution, copyleft, or share-alike clauses are legally binding.',
  4400819: 'Privacy by design: minimize collection, disclose purpose, limit use. Hoarding data maximizes risk without benefit.',
  4400820: 'Java has exactly eight primitives (lowercase keywords). String is a class, hence a reference type.',
  4400821: '== compares references; new String() always allocates a fresh object. Use .equals() for content comparison.',
  4400822: 'int / int truncates toward zero in Java. To get a double result, at least one operand must be a double.',
  4400823: 'private restricts visibility for encapsulation. It is not about threads, inheritance, or storage location.',
  4400824: 'No constructors? The compiler inserts a public no-arg one that just calls super(). Write any constructor of your own and that default vanishes.',
  4400825: 'super() chains to the parent constructor so inherited fields initialize first. No separate parent object is created.',
  4400826: 'Override: same name, same parameters, compatible (covariant) return type. Different parameters would be overload, not override.',
  4400827: 'Java instance methods dispatch on the runtime type. Declared type controls what is callable; runtime type chooses which override runs.',
  4400828: 'Single inheritance for classes, multiple for interfaces. Abstract classes can hold state; interfaces (since Java 8) can hold default methods.',
  4400829: 'instanceof returns true for the actual class AND every supertype. A Dog is also an Animal.',
  4400830: 'remove(int) is by index - zero-based. remove(1) on [10, 20, 30] deletes the 20 (the middle one).',
  4400831: 'set(i, x) replaces at index i and returns the old value. add(i, x) inserts and shifts later elements right.',
  4400832: 'Removing while incrementing i skips alternating elements because everything shifts left under you. Iterate backward or use Iterator.remove().',
  4400833: 'For new int[rows][cols], the outer loop runs rows-many times and the inner loop runs cols-many. Use < length, never <= length.',
  4400834: 'Column index 1 means m[r][1] for each r. Values 2 and 5 sum to 7.',
  4400835: 'Every recursion needs a base case that returns without recursing. Otherwise the call stack grows until StackOverflowError.',
  4400836: 'Trace down: 4 * f(3) = 4 * 3 * f(2) = 4 * 3 * 2 * f(1) = 4 * 3 * 2 * 1 = 24.',
  4400837: 'Selection sort scans the unsorted region for its minimum each pass and swaps it into the next position.',
  4400838: 'Insertion sort grows a sorted prefix. After pass 2, only indices 0..2 are sorted; indices 3 and later are still untouched.',
  4400839: 'Merge sort: log n levels of splitting, O(n) merge work per level. Total O(n log n), always - even worst case.',
  4400840: 'Linear search just walks the array and checks each element. No ordering, no hashing, no parallelism required.',
  4400841: 'Nested loops multiply iteration counts. n * n = O(n^2). Sequential loops add: O(n) + O(n) = O(n).',
  4400842: '== checks identity (same object); .equals() checks logical equality as defined by the class. Most value classes override equals.',
  4400843: 'substring(begin, end) is half-open: [begin, end). Length of result is end - begin. Index 2 to 4 gives "cd".',
  4400844: 'indexOf returns -1 as the not-found sentinel, never throws. Always check for -1 before using the result as an index.',
  4400845: 'Three different conventions: arrays use .length (field), String uses .length() (method), ArrayList uses .size() (method).',
  4400846: 'After a matching catch handles the exception, control resumes after the try/catch. No automatic retry, no JVM crash.',
  4400847: 'Values are 5, 7, 9, 11, 13 - then 15 fails the < test. Five iterations. Range / step = 10 / 2.',
  4400848: 'Static methods belong to the class, not an instance. No "this", no direct instance-field access, callable without constructing anything.',
  4400849: 'Post-increment x++ returns the OLD value then bumps. Pre-increment ++x bumps then returns the new value. Trace each step.',
}

export const AP_QUANT_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ============================================================
  // Calculus shortenings
  // ============================================================
  4400304: {
    newCorrect: 'There is some c in (0, 1) with f(c) = 0',
    lessonAddendum: 'f is continuous on [0, 1] and f(0) = -1, f(1) = 1, so by IVT a root lies between them.',
  },
  4400306: {
    newCorrect: '2x, by expanding (x + h)^2 and taking h to 0',
    lessonAddendum: '(x + h)^2 - x^2 = 2xh + h^2; divide by h to get 2x + h, then let h go to 0 to leave 2x.',
  },
  4400309: {
    newCorrect: '((x^2 + 1) - (x + 1)(2x)) / (x^2 + 1)^2',
    lessonAddendum: 'Quotient rule: low d-high minus high d-low, all over low-squared. Order of subtraction matters.',
  },
  4400311: {
    newCorrect: '-sqrt(3), from dy/dx = -x/y',
    lessonAddendum: 'Differentiating implicitly gives 2x + 2y(dy/dx) = 0, so dy/dx = -x/y = -(sqrt(3)/2)/(1/2) = -sqrt(3).',
  },
  4400322: {
    newCorrect: '2x^3 - 2x^2 + x + C',
    lessonAddendum: 'Reverse the power rule term by term and add the constant of integration; +C represents the entire family.',
  },
  4400332: {
    newCorrect: '3, from (1/3) * integral of x^2 on [0, 3]',
    lessonAddendum: 'Compute (1/3) * integral from 0 to 3 of x^2 dx = (1/3)(9) = 3.',
  },
  4400333: {
    newCorrect: 'y = e^(x^2 / 2)',
    lessonAddendum: 'Separating gives dy/y = x dx; integrating yields ln|y| = x^2/2 + C, and y(0) = 1 forces C = 0.',
  },
  4400337: {
    newCorrect: 'P approaches 500, the carrying capacity',
    lessonAddendum: 'Starting between 0 and the carrying capacity, the logistic solution rises monotonically to 500 as t increases.',
  },
  4400340: {
    newCorrect: 'Converges, because the ratio-test limit is 1/2',
    lessonAddendum: 'lim |a_(n+1)/a_n| = 1/2 < 1, so the ratio test concludes absolute convergence.',
  },
  4400343: {
    newCorrect: '(M / (n + 1)!) * |x - a|^(n + 1)',
    lessonAddendum: 'M is any upper bound on |f^(n+1)| over the interval between a and x; the formula gives the Lagrange remainder bound.',
  },
  4400348: {
    newCorrect: 'Disks integrating along y',
    lessonAddendum: 'Cross sections perpendicular to the y-axis are full circles of radius y^2, so disk slicing along y is the cleanest setup.',
  },
  4400349: {
    newCorrect: 'Name the theorem and verify its hypotheses',
    lessonAddendum: 'For example: "f is continuous on [a, b] and f(a), f(b) have opposite signs, so by IVT a root exists." Citing a theorem and checking the conditions is what earns the justification point.',
  },

  // ============================================================
  // Economics shortenings
  // ============================================================
  4400510: {
    newCorrect: 'Output rises above the efficient level, creating deadweight loss',
    lessonAddendum: 'The deadweight loss equals the area on the units whose marginal cost exceeds buyers\' willingness to pay - production beyond the efficient quantity.',
  },
  4400513: {
    newCorrect: 'Price is at least equal to average variable cost',
    lessonAddendum: 'When P >= AVC, the firm covers variable cost and contributes something toward fixed cost. Below AVC the firm loses more by producing than by shutting down.',
  },
  4400538: {
    newCorrect: 'Real GDP rises by less than the textbook multiplier suggests',
    lessonAddendum: 'Near full employment SRAS is steep, so part of the stimulus shows up as higher prices rather than higher real output. Crowding out further offsets fiscal expansion through higher interest rates.',
  },

  // ============================================================
  // Computer Science shortenings
  // ============================================================
  4400804: {
    newCorrect: 'None - XOR true implies OR true',
    lessonAddendum: 'XOR is true only when exactly one operand is true, and inclusive OR is also true in that case. The only divergence is the both-true case, where OR is true but XOR is false.',
  },
  4400815: {
    newCorrect: 'Iteration plus selection',
    lessonAddendum: 'The loop over inputs is iteration; the "if positive, print" branch is selection. Together they handle an unknown count of inputs with a per-item decision.',
  },
}
