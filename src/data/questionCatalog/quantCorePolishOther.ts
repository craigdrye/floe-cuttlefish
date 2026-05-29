// Polish data for the "Other" cluster of Core quant questions
// (Calculus, Linear Algebra, Finance, Algorithms, Programming, plus the 1982x practical-pattern block).
//
// Two exports:
//   OTHER_MENTOR_HINTS       — bespoke `mentorHint` for the "Hint" button, keyed by id.
//   OTHER_CORRECT_SHORTENED  — for IDs flagged in the Phase 4 length audit, a shorter
//                              `newCorrect` plus a `lessonAddendum` that absorbs the
//                              explanatory text trimmed from the correct option.
//
// To be merged into quant.ts in a follow-up edit. See
// docs/audit/career/quant_phase4_quality_audit.md for context.

export const OTHER_MENTOR_HINTS: Record<number, string> = {
  // Linear Algebra
  19206: 'A = QR factorizes A into an orthogonal Q and an upper-triangular R. What does each factor preserve about A?',
  19209: 'Once you have A = LU, what work is left to solve Ax = b? Count the cost of forward/backward substitution vs. the factor step.',
  19212: 'Apply Av = lambda v repeatedly: what does A^2 v give you? Now generalize.',
  19213: 'rank(AB) is bounded by the image of A and the kernel of B. Which factor is the bottleneck?',
  19214: 'Every matrix factors as U Sigma V^T with U, V orthogonal and Sigma diagonal. What does Sigma encode?',
  19216: 'Cholesky generalizes the square root to matrices. Which property of a real number is required for a real square root, and what is the matrix analog?',
  19824: 'If one column of the design matrix is an exact linear combination of the others, what does that do to the columns of A^T A?',

  // Calculus
  19207: 'A root of f means f(x) = 0. Newton uses the local tangent line at x_n to find where the tangent crosses zero.',
  19208: 'Think of maximizing f on a curve g = 0. At the optimum, in which direction does the constraint force ∇f to point?',
  19210: 'For a vector function F: R^n -> R^m, the Jacobian is the linear approximation at a point. What are its entries?',
  19215: 'The gradient points uphill, toward locally faster increase. Which direction minimizes the function?',
  19825: "f'(10) = -3 is a local rate, not a level and not an optimum. State the one-unit local approximation.",
  19826: 'Squared terms bottom out at zero. Where does (x - 4)^2 hit zero, and what is left over?',

  // Finance — Greeks & pricing
  19350: 'A forward contract has linear payoff in the underlying. What does the vega of a linear contract have to be?',
  19351: 'Early exercise on an American put can be optimal before expiry. Does that break the European replication argument?',
  19352: 'Delta-neutral means the portfolio value does not move with small underlying moves. Solve for the hedge ratio in shares.',
  19353: 'Stock has zero gamma — it is a linear instrument. What kind of instrument do you need to cancel a nonzero gamma?',
  19355: 'Vanna is a cross-derivative. Which two variables is it the cross-sensitivity of?',
  19356: 'Volga is the second derivative of price in vol. What does positive volga say about how vega responds to vol moves?',
  19358: 'Implied vol is whatever value makes BS reproduce the market price. Is that backward-looking or forward-looking?',
  19359: 'Post-LIBOR, the standard "risk-free" rate is whichever overnight, collateralized rate banks actually fund at. Which family is that?',
  19822: 'Apply the hedge payoff AND the hedge cost in every state of the world, not just the bad one.',
  19823: 'Look for state-by-state dominance before invoking probabilities — is there a trade that is at least as good in every state and strictly better in one?',

  // Algorithms / Programming / Data Structures
  19601: 'You have n+1 numbers in [1, n]. By pigeonhole there must be a repeat. Can you frame "index -> value" as a linked list with a cycle?',
  19602: 'A binary tree has no implicit array layout. What is the natural recursion on (node, left subtree, right subtree)?',
  19603: 'When deleting through a base-class pointer, which destructor gets called if the destructor is non-virtual?',
  19604: 'unique_ptr is move-only; shared_ptr maintains a reference count. Which one models "exactly one owner"?',
  19605: 'Factories let the caller ask for an object by role, not by concrete class. What does that decouple?',
  19827: 'You only care about the 5 largest of 10M items. Which data structure lets you keep just the top k cheaply as you stream?',
  19828: 'Duplicate detection is a membership question. Which O(1)-lookup structure trades memory for linear time?',
  19829: 'Suspiciously good backtests usually have a leak. Which assumptions — data, timing, fees, fills — would invalidate the result if they secretly used the future?',
}

export const OTHER_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // Linear Algebra
  19206: {
    newCorrect: 'A = QR',
    lessonAddendum:
      'Q is orthogonal (Q^T Q = I) and R is upper triangular. QR is the matrix form of Gram-Schmidt on the columns of A.',
  },
  19209: {
    newCorrect: 'It lets you solve Ax = b cheaply for many different b once A is factored.',
    lessonAddendum:
      'The one-time O(n^3) factor cost is amortized over many O(n^2) forward/back substitutions — useful when calibrating a model under many right-hand sides.',
  },
  19214: {
    newCorrect: 'A = U Sigma V^T',
    lessonAddendum:
      'U and V are orthogonal matrices and Sigma is diagonal with the non-negative singular values on the diagonal. SVD generalizes eigendecomposition to non-square matrices.',
  },

  // Calculus
  19208: {
    newCorrect: 'To optimize a function subject to equality constraints.',
    lessonAddendum:
      'Concretely: maximize f(x) subject to g(x) = 0, solved by setting ∇f = λ ∇g. Lambda is the "shadow price" of relaxing the constraint.',
  },
  19825: {
    newCorrect: 'Near x = 10, one extra unit reduces P&L by about 3.',
    lessonAddendum:
      "f'(10) = -3 is a local slope, not the function value and not an optimizer. The one-unit move is a first-order approximation — fine for small steps, not for global claims.",
  },

  // Finance
  19351: {
    newCorrect: 'No — it holds only as an inequality.',
    lessonAddendum:
      'For American options the relationship weakens to C − P ≥ S − K e^(-rT). The early-exercise feature of the put can make the original European equality fail.',
  },
  19352: {
    newCorrect: 'Short Delta shares of the underlying.',
    lessonAddendum:
      'For a Black-Scholes call, Delta = N(d1), so the long-call hedge is to short N(d1) shares. As S moves, Delta changes (gamma), so the hedge must be rebalanced.',
  },
  19353: {
    newCorrect: 'No — stock has zero gamma, so you need another option.',
    lessonAddendum:
      'Gamma is the second derivative of price in S. A linear instrument (stock) cannot create or cancel curvature. You add an option to neutralize gamma, then adjust stock to restore delta-neutrality.',
  },
  19358: {
    newCorrect: 'The volatility that makes the BS formula match the market price.',
    lessonAddendum:
      'IV is found by numerically inverting BS(σ) = market_price (typically with Newton). It is forward-looking and reflects risk premia, so it is generally above realized vol on average.',
  },
  19359: {
    newCorrect: 'Overnight Index Swap rates (e.g. SOFR, ESTR).',
    lessonAddendum:
      'Post-LIBOR, OIS rates are the standard "risk-free" proxy because they reflect collateralized overnight funding — closer to the actual rate at which hedges are funded.',
  },

  // Algorithms / Programming / Data Structures
  19601: {
    newCorrect: "Use Floyd's cycle detection on the index → value mapping.",
    lessonAddendum:
      'Treating A[i] as a pointer from i to A[i] creates a functional graph; pigeonhole forces a cycle, and the cycle entry point is the duplicate. This gives O(n) time and O(1) extra space without modifying the array.',
  },
  19603: {
    newCorrect: 'So the derived destructor runs when deleting through a base pointer.',
    lessonAddendum:
      'Without `virtual`, deleting through a base-class pointer skips the derived destructor — only the base destructor runs, leaking any resources owned by the derived part. Rule of thumb: if a class has any virtual functions, make the destructor virtual too.',
  },
  19604: {
    newCorrect: 'unique_ptr has a single owner; shared_ptr is reference-counted.',
    lessonAddendum:
      'unique_ptr is move-only and has zero overhead. shared_ptr maintains a thread-safe control block and is for genuinely shared lifecycles. weak_ptr observes a shared_ptr without keeping it alive — used to break reference cycles.',
  },
  19605: {
    newCorrect: 'To create objects without naming the concrete class.',
    lessonAddendum:
      'A factory returns a base-class handle while the concrete type is chosen at runtime. This decouples callers from concrete classes and centralizes construction logic, so new variants can be added without touching call sites.',
  },
  19829: {
    newCorrect: 'Whether the backtest accidentally uses future information or unrealistic fills.',
    lessonAddendum:
      'Concrete checks: point-in-time data, timestamp alignment, transaction costs, slippage and capacity, and survivorship bias. Implementation judgment starts at leakage and execution assumptions — the metrics come last.',
  },
}
