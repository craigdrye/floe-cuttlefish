// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for three small academic banks:
//
//   - courseExpansionStarterQuestions.ts (Discrete Math, Algorithms, SQL,
//     Earth Science)
//   - mathDiagnosticsGenerated.ts (Numbas-coverage math diagnostics)
//   - formalLogicGenerated.ts (Open Logic Project coverage)
//
// SMALL_ACADEMIC_SUB_TOPICS groups all 63 questions into lesson-shaped
// clusters seeded from each question's `chapter` field, sharpened so each
// cluster reads like a single whiteboard topic.
//
// SMALL_ACADEMIC_MENTOR_HINTS supplies a one-line, bespoke nudge per
// question that names the rule, operator, complexity, clause, layer, or
// inference being tested — no generic "apply the rule" templates.
//
// SMALL_ACADEMIC_CORRECT_SHORTENED is reserved for length-heuristic fixes;
// none of the 63 questions trip the heuristic, so it ships empty but
// available for future audits.

export const SMALL_ACADEMIC_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Discrete Mathematics (467xxx) --------------------
  'Proofs and Logical Equivalence': [467001],
  'Sets and Subset Relations': [467002],
  'Equivalence Relations and Partitions': [467003],
  'Counting and the Product Rule': [467004],
  'Graph Vocabulary and Degree': [467005],
  'Functions: Injection and Surjection': [467006],

  // -------------------- Algorithms (468xxx) --------------------
  'Asymptotic Analysis and Big-O': [468001],
  'Binary Search and Sorted Inputs': [468002],
  'BFS and Shortest Paths': [468003],
  'Dynamic Programming Structure': [468004],

  // -------------------- SQL Foundations (469xxx) --------------------
  'SELECT, FROM, and Projection': [469001],
  'WHERE and Row Filtering': [469002],
  'JOIN Types and Matching': [469003],
  'GROUP BY and Aggregation': [469004, 469005],
  'Window Functions and Partitions': [469006],
  'Keys and Relational Integrity': [469007, 469008],

  // -------------------- Earth Science (470xxx) --------------------
  'Rock Cycle and Sedimentary Formation': [470001],
  'Plate Tectonics and Boundaries': [470002],
  'Atmosphere, Pressure, and Wind': [470003],
  'Climate and the Greenhouse Effect': [470004],
  'Water Cycle and Surface Runoff': [470005],

  // -------------------- Math Diagnostics (391xxx) --------------------
  'Linear Equations and Inequalities': [391001, 391003],
  'Quadratics and Factoring': [391002],
  'Function Evaluation and Slope': [391004, 391005],
  'Exponential and Percent-Change Models': [391006, 391020],
  'Derivatives and the Power Rule': [391007, 391008],
  'Definite Integrals and Accumulation': [391009],
  'Probability Rules': [391010, 391011],
  'Descriptive Statistics and Robustness': [391012, 391013],
  'Matrices and Vectors': [391014, 391015],
  'Kinematics and Newton’s Laws': [391016, 391017],
  'Quantitative Sanity Checks': [391018, 391019],

  // -------------------- Formal Logic (390xxx) --------------------
  'Validity and Counterexamples': [390001, 390002],
  'Material Conditional and Tautology': [390003, 390004, 390005],
  'Natural Deduction Rules': [390006, 390007, 390008],
  'Tableaux: Open and Closed Branches': [390009, 390010],
  'First-Order Syntax: Names and Variables': [390011, 390012],
  'Quantifier Semantics': [390013, 390014, 390015],
  'Models, Domains, and Interpretations': [390016, 390017],
  'Sets, Functions, and Equivalence': [390018, 390019, 390020],
}

export const SMALL_ACADEMIC_MENTOR_HINTS: Record<number, string> = {
  // -------------------- Discrete Mathematics --------------------
  467001:
    'Contrapositive of P → Q is ¬Q → ¬P — swap and negate. Logically equivalent to the original; the converse (Q → P) is not.',
  467002:
    'Subset A ⊆ B means ∀x (x ∈ A → x ∈ B). It is a universal claim about every element of A, not about cardinality or overlap.',
  467003:
    'An equivalence relation must be reflexive (aRa), symmetric (aRb → bRa), and transitive (aRb ∧ bRc → aRc) — those three together induce a partition.',
  467004:
    'Product rule for counting: independent stages multiply. With 3 then 5 choices, total = 3 × 5 = 15. Add only when stages are mutually exclusive alternatives.',
  467005:
    'Degree of a vertex v in an undirected graph = number of edges incident to v (loops count twice). It is a local measure tied to the handshake lemma.',
  467006:
    'Injective (one-to-one) means f(a) = f(b) → a = b — distinct inputs give distinct outputs. Surjective is the onto property; do not conflate them.',

  // -------------------- Algorithms --------------------
  468001:
    'Big-O describes asymptotic growth of time or space as input size n grows, ignoring constants and lower-order terms. It is not a stopwatch.',
  468002:
    'Binary search runs in O(log n) because each comparison halves the search range — but only on a sorted (ordered) array, not a hash table or shuffled list.',
  468003:
    'BFS finds shortest paths in unweighted graphs because its queue explores vertices in order of edge-distance from the source: level k before level k+1.',
  468004:
    'DP applies when subproblems overlap (so memoization saves work) and the optimal solution is built from optimal sub-solutions (optimal substructure).',

  // -------------------- SQL Foundations --------------------
  469001:
    'SELECT is the projection clause: it lists which columns or computed expressions appear in the output. WHERE filters rows; FROM names the source.',
  469002:
    'WHERE filters rows before grouping or aggregation, using a boolean condition on column values. ORDER BY sorts; LIMIT truncates; SELECT projects.',
  469003:
    'INNER JOIN returns only rows where the ON condition matches in both tables. LEFT JOIN keeps unmatched left rows with NULLs on the right side.',
  469004:
    'GROUP BY collapses rows that share key values into one row per group, so aggregates like COUNT(*), SUM(amount), or AVG(score) can be computed per group.',
  469005:
    'HAVING filters groups after aggregation — use it for conditions on aggregates like COUNT(*) > 10. WHERE cannot reference an aggregate.',
  469006:
    'ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) restarts numbering for each user_id and assigns 1 to the newest row in that partition.',
  469007:
    'A primary key uniquely and stably identifies each row (NOT NULL + UNIQUE). It anchors the row’s identity so foreign keys can reference it reliably.',
  469008:
    'A foreign key column references a primary key in another table, enforcing referential integrity — e.g. orders.customer_id → customers.id.',

  // -------------------- Earth Science --------------------
  470001:
    'Sedimentary rock forms through lithification: sediment is buried, compacted by overlying pressure, and cemented as minerals precipitate between grains.',
  470002:
    'Subduction occurs at convergent boundaries where the denser oceanic plate sinks into the mantle, producing trenches, deep earthquakes, and volcanic arcs.',
  470003:
    'Wind blows down the pressure gradient — from high to low pressure — with the Coriolis effect and surface friction shaping its final direction.',
  470004:
    'Greenhouse gases (CO₂, CH₄, H₂O vapor) absorb outgoing infrared radiation from Earth and re-emit it in all directions, trapping heat in the lower atmosphere.',
  470005:
    'Runoff is the surface-flow stage of the water cycle: precipitation that does not infiltrate moves across land into streams, carrying sediment and solutes.',

  // -------------------- Math Diagnostics --------------------
  391001:
    'Linear equation: isolate x by inverse operations. 3x − 7 = 14 → add 7 (3x = 21) → divide by 3 (x = 7). Undo the additive term before the coefficient.',
  391002:
    'Factor x² + bx + c by finding two numbers that multiply to c and sum to b. For x² − 5x + 6 you need product 6, sum −5 → −2 and −3.',
  391003:
    'When you divide or multiply both sides of an inequality by a negative number, flip the inequality. −2x < 8 → x > −4, not x < −4.',
  391004:
    'Function evaluation: substitute then follow order of operations. f(x) = 2x² − 3 means 2 · (x²) − 3, so f(4) = 2 · 16 − 3 = 29.',
  391005:
    'Slope = rise / run = (y₂ − y₁) / (x₂ − x₁). Through (1, 2) and (5, 10): (10 − 2)/(5 − 1) = 8/4 = 2.',
  391006:
    'Exponential growth model: value = initial · (1 + r)^t. A 5% annual increase from 200 gives 200(1.05)^t — the growth factor is 1 + r, not r alone.',
  391007:
    'The derivative f′(a) is the instantaneous rate of change — the slope of the tangent line at x = a — defined as the limit of (f(a+h) − f(a))/h.',
  391008:
    'Power rule: d/dx [xⁿ] = n x^(n−1). For x⁵ bring the exponent down as coefficient and reduce the power by one: 5x⁴.',
  391009:
    '∫ₐᵇ f(x) dx is the signed area between f and the x-axis from a to b — net accumulated change of an antiderivative across [a, b].',
  391010:
    'Complement rule: P(¬A) = 1 − P(A). Probabilities of A and its complement partition the sample space, so they must sum to 1. Here 1 − 0.3 = 0.7.',
  391011:
    'For independent events, P(A ∩ B) = P(A) · P(B). With 0.4 and 0.5: 0.4 · 0.5 = 0.2. Addition gives the union (with overlap subtracted).',
  391012:
    'The median is order-based (the middle value), so a single extreme outlier shifts it minimally. The mean, range, and max are all pulled by extremes.',
  391013:
    'Standard deviation σ measures typical distance from the mean: √(average of squared deviations). It quantifies spread, not center or count.',
  391014:
    'Matrix dimensions are written rows × columns (m × n). 3 rows and 2 columns = 3 × 2. Order matters for compatibility in multiplication.',
  391015:
    'Dot product of (a₁,a₂) and (b₁,b₂) = a₁b₁ + a₂b₂ — a scalar. (1,2)·(3,4) = 1·3 + 2·4 = 3 + 8 = 11.',
  391016:
    'Average acceleration a = Δv/Δt = (v_f − v_i)/t. (10 − 4)/3 = 2 m/s². The units must come out as velocity per time.',
  391017:
    'Newton’s second law: net force equals mass times acceleration, F = ma. E = mc² is mass-energy equivalence; v = d/t is average speed.',
  391018:
    'Dimensional analysis: the units of your final expression must match the quantity requested (m, m/s, kg, etc.). A unit mismatch flags an algebra slip.',
  391019:
    'Order-of-magnitude estimation: round inputs and recompute mentally. If the calculator answer is off by a factor of 10+, you likely mistyped or mis-formed the expression.',
  391020:
    'Equal percentage change per period = exponential model: value = a · (1 + r)^t. Equal absolute change per period would be linear (a + rt).',

  // -------------------- Formal Logic --------------------
  390001:
    'Validity is semantic: an argument is valid iff there is no valuation/model where every premise is true and the conclusion is false — soundness adds true premises.',
  390002:
    'A counterexample (countervaluation) to invalidity is a valuation making every premise true while the conclusion is false — it shows the inference form fails.',
  390003:
    'The material conditional P → Q is false in exactly one row of its truth table: P true and Q false. All other rows (including P false) make it true.',
  390004:
    'A tautology is a formula true under every valuation — every row of its truth table evaluates to T. P ∨ ¬P and P → P are classic examples.',
  390005:
    'A contradiction is false under every valuation. P ∧ ¬P is the canonical example; P ∨ ¬P is its tautological dual.',
  390006:
    'Modus ponens: from P and P → Q infer Q. It detaches the consequent once the antecedent is asserted — not to be confused with affirming the consequent.',
  390007:
    'Conjunction introduction (∧I): from established lines A and B infer A ∧ B. It simply packages two derived claims into one conjunction.',
  390008:
    'Conditional proof (→I): to prove A → B, open a subproof assuming A, derive B inside it, then discharge the assumption and conclude A → B.',
  390009:
    'An open completed tableau branch describes a satisfying valuation — read its literals as a model / countermodel showing the formula is satisfiable.',
  390010:
    'A tableau branch closes when it contains an explicit clash: a formula φ and its negation ¬φ on the same branch — the literal contradiction.',
  390011:
    'A constant symbol denotes a specific individual in the domain under an interpretation. Predicate symbols express properties or relations; quantifiers bind variables.',
  390012:
    'A variable occurrence is free iff it is not within the scope of a quantifier that binds it. Frequency and alphabetic position are irrelevant — scope is structural.',
  390013:
    '∀x Fx is true in a model M iff every object in the domain of M satisfies F under the interpretation. Universal quantification ranges over the whole domain.',
  390014:
    '∃x Fx is true in a model M iff at least one object in the domain satisfies F — you need a single witness, not every object.',
  390015:
    '∀x∃y differs from ∃y∀x because the inner quantifier can depend on the outer. ∃y∀x demands one fixed y that works for every x; ∀x∃y allows y to vary with x.',
  390016:
    'The domain (universe) of a first-order model is the non-empty set of objects over which variables range and quantifiers quantify — the semantic universe.',
  390017:
    'An interpretation assigns each n-place predicate a set of n-tuples from the domain (its extension): one-place → a set; two-place → a set of ordered pairs.',
  390018:
    'A ⊆ B iff every element of A is also in B — a universal condition over A. It allows A = B and any size of A; disjointness is a different concept.',
  390019:
    'A relation R ⊆ A × B is a function iff for every a ∈ A there is exactly one b ∈ B with (a,b) ∈ R — existence and uniqueness of output per input.',
  390020:
    'An equivalence relation is reflexive (aRa), symmetric (aRb ⇒ bRa), and transitive (aRb ∧ bRc ⇒ aRc) — these three jointly generalize equality.',
}

export const SMALL_ACADEMIC_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {}
