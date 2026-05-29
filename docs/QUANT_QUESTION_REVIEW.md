# Quant Finance Interview Course — Question Review

Review of all 260 questions in `src/data/questionCatalog/quant.ts`.

## Summary of work done in this pass

- All 260 questions now have a Deep Dive Lesson. **25 lessons were added** in this pass for questions previously falling back to the placeholder ("Floe is still drafting…").
- **5 chapter labels fixed**: `'Stochastic'` → `'Stochastic Calculus'` (questions 19302, 19304, 19307, 19309, 19403) so the curriculum table-of-contents groups consistently.

## Summary of work done in second pass

- **Deleted ~17 functional duplicates**: Reduced total question count from 260 to 243.
- **Fixed wording and typo bugs**: Fixed prompt and lesson text in questions 19316, 19308, 19407, 19101, 19306, 19508, 19339, and 19523.
- **Made prompts fun**: Did a "make-it-fun" rewrite on a batch of dry definitional Finance questions (Vega, Rho, Asian Options, Knock-out, Lookback, CVA, Information Ratio, Sortino Ratio, Kelly Criterion).

## Chapter inventory (post-fix)

| Chapter | Count |
|---|---:|
| Finance | 81 |
| Probability | 56 |
| Brain Teasers | 35 |
| Algorithms | 26 |
| Calculus | 18 |
| Stochastic Calculus | 16 |
| Linear Algebra | 16 |
| Programming | 5 |
| Fixed Income | 5 |
| Risk Management | 2 |
| **Total** | **243** |

## Quality / wording flags worth fixing next

### 1. Functional duplicates (same question asked twice)

These are pairs where both prompt and intended answer are essentially identical. Recommend deleting the weaker of each pair.

| Keep | Delete | Why |
|---|---|---|
| 19412 Sharpe Ratio (formula) | 19361 Sharpe Ratio (definition) | 19412 is more specific; 19361 was placeholder-lessoned |
| 19325 CVA | 19360 CVA | 19325 has more depth |
| 19207 Newton's Method | 19228 Newton-Raphson | Identical content |
| 19216 Cholesky | 19229 Cholesky | Identical content |
| 19206 QR Decomposition | 19230 QR Decomposition | Identical content |
| 19214 SVD | 19227 SVD | Identical content |
| 19222 Log Taylor Series | 19231 Taylor Series ln(1+x) | Identical content |
| 19211 Integration by Parts (worked example) | 19232 Integration by Parts (formula) | Different angles — could keep both, or merge |
| 19205 L'Hospital's Rule | 19233 L'Hospital's Rule | Identical content |
| 19316 Rho | 19354 Rho of a Call | Identical content |
| 19319 Vol Smile | 19357 Smile vs Skew | Overlapping — merge into one richer question |
| 19127 Cars on Road / 19130 Poisson Process | 19149 Poisson Process | Three nearly identical Poisson-process questions |
| 19128 Meeting Probability | 19155 Romeo & Juliet | Same problem, different wrapper |
| 19129 Triangle Probability | 19157 Triangle from Segment | Identical |
| 19115 Expected Max (uniform) | 19158 Order Statistics (Max) | Identical |
| 19401 Risk-Neutral Measure | 19349 Risk-Neutral Measure | Overlap; 19349 has weaker lesson |

If you delete the listed "Delete" rows you drop from 260 to ~240 questions while removing zero unique content.

### 2. Wording / typo issues

- **19316 (Rho), wrong[1].reframe** is `'dr / dr.'` — looks like a typo. Should read `'dC / dr.'` or be removed.
- **19308 (Black-Scholes Assumptions)**: prompt asks "Which is NOT an assumption?" and the "correct" answer is *Volatility is stochastic*. This is fine but a bit oblique — consider rewording the prompt as "Which of the following is *violated* by real markets and so is NOT a Black-Scholes assumption?" to make it less ambiguous on first read.
- **19407 (Counterfeit Coins II)**: lesson says "expected weight if all are 10g is 10×(1+3+9+27+81) = 1210g", correct, but the lesson skips over how to *decode*. Worth one more sentence: "If actual weight = 1207g, deficit = 3g — read 3 in base-3 (010), so bag 2 is light by 1g, the rest are normal."
- **19101 (Boy or Girl)**: technically correct but framed using the standard ambiguity. Some interviewers prefer the *unambiguous* phrasing ("at least one of the children is a boy"). Worth a one-sentence note in the lesson about *why* the answer depends on the protocol.
- **19306 (Gamma near maturity)** says gamma "approaches infinity (becomes a Dirac delta function)". Closer to truth: gamma diverges *only* exactly at the strike — for any finite |S−K|, gamma stays finite. Consider rewording to "Gamma at the strike approaches infinity, while gamma away from the strike approaches zero — the gamma profile concentrates into a spike at K."
- **19508 (Linked List Cycle)**: lesson refers to "Floyd's cycle detection" but the prompt's wrong-answers' reframe also says "Floyd's Cycle-Finding Algorithm" inside the misconceptions array — the misconceptions field is supposed to be a *correction*, not just a reframe of the right answer. Some other questions have similar structural sloppiness in the wrong-answer reframes.

### 3. Misconception/reframe quality

The `[wrong, flaw, reframe]` triples are inconsistent across the file — sometimes substantive, sometimes a one-word "No.". Worst offenders worth tightening (the bare `'No.'` flaws give a learner nothing):
- 19362, 19363, 19364, 19365 (multiple `'No.'` flaws in one question each)
- 19366, 19367, 19368 (Heston, Dupire, SABR all have lazy flaws)
- 19370–19380 (the late-Finance tail is uniformly thin in misconceptions)
- 19701–19705 (Fixed Income tail also weak)

These are exactly the questions that previously lacked lessons and seem to have been written as a fast batch — adding a one-sentence specific flaw and a one-sentence reframe per wrong answer would lift the whole tail substantially.

### 4. Low-difficulty trivia masquerading as quant questions

Several questions are pure factoid recall and don't really test reasoning. They're fine for a vocabulary mode but feel weak in an "interview" frame:
- 19316 Rho (definition)
- 19320 Asian Options (definition)
- 19321 Knock-out (definition)
- 19322 Lookback (definition)
- 19360 CVA (definition)
- 19362 Information Ratio (definition)
- 19363 Sortino Ratio (definition)

Consider upgrading these from "what does X measure?" to a small numerical or interpretive twist — e.g., "An ATM digital call has implied probability 0.40 of expiring ITM. What does this say about the BS-implied N(d₂)?".

## Master ranking spreadsheet

Each row scored on:

- **Q (Quality)**: 1 (poor — vague, ambiguous, or factoid) → 5 (excellent — tests real reasoning, clean wording, strong lesson)
- **D (Difficulty)**: 1 (warm-up) → 5 (truly hard / interview-killer)

### Brain Teasers (35 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19001 | Screwy Pirates | Backward induction / game theory | 5 | 4 | Classic — perfect lesson |
| 19002 | River Crossing | Optimization / pairing | 4 | 3 | Clean |
| 19003 | Burning Ropes | Lateral / time measurement | 5 | 3 | Strong lesson |
| 19004 | Defective Ball | Information theory / weighing | 5 | 4 | Excellent |
| 19005 | Trailing Zeros | Number theory / factor counting | 4 | 2 | |
| 19006 | Horse Race | Logic / pruning | 5 | 4 | Iconic |
| 19007 | Box Packing (1×1×4 in 6×6×6) | Combinatorial parity | 4 | 4 | Lesson glosses over the colouring detail |
| 19008 | Calendar Cubes | Constraint satisfaction | 5 | 3 | Fun |
| 19009 | Light Switches | Lateral / observability | 5 | 2 | Classic |
| 19010 | Quant Salary | Crypto / privacy | 4 | 3 | |
| 19011 | Coin Piles (blindfold) | Invariant | 5 | 4 | Beautiful |
| 19012 | Mislabeled Bags | Logic | 5 | 2 | |
| 19013 | Missing Two Integers | Algebra | 4 | 3 | |
| 19014 | Counterfeit Coins I | Linear encoding | 5 | 3 | |
| 19015 | Glass Balls (100 floors) | Optimization | 5 | 5 | Tough but clean |
| 19016 | Door to Offer | Logic | 4 | 2 | |
| 19017 | Message Delivery (locks) | Crypto analogy | 4 | 3 | |
| 19018 | Last Ball | Invariant | 5 | 3 | |
| 19019 | Wise Men + glass | Communication protocol | 4 | 5 | Hard |
| 19020 | Clock Pieces | Arithmetic | 3 | 1 | Trivial after the trick |
| 19021 | Matching Socks | Pigeonhole | 3 | 1 | Warm-up |
| 19022 | Meeting People (R(3,3)=6) | Ramsey theory | 4 | 4 | |
| 19023 | Prisoner Boxes (cycle strategy) | Permutations / cycles | 5 | 5 | Famous, deep |
| 19024 | Division by 9 | Modular arithmetic | 3 | 1 | |
| 19025 | Chameleon Colors | Modular invariant | 5 | 4 | |
| 19026 | Coin Pile splits | Combinatorial invariant | 4 | 3 | |
| 19027 | Chocolate Bar | Counting | 3 | 1 | Almost too easy |
| 19028 | Race Track / gas cans | Real analysis trick | 5 | 4 | Lovely |
| 19029 | Rainbow Hats (mod 7) | Modular cover | 5 | 4 | |
| 19030 | Staircase (Fibonacci) | DP / recurrence | 4 | 2 | |
| 19404 | 100th Digit of (1+√2)^3000 | Algebraic conjugates | 5 | 4 | |
| 19406 | Ants on a Square | Pigeonhole + geometry | 5 | 4 | |
| 19407 | Counterfeit Coins II (base-3) | Encoding | 5 | 4 | Lesson could decode example |
| 19408 | Handshakes (Pigeonhole +1) | Pigeonhole subtlety | 4 | 3 | |
| 19409 | √2 irrational | Proof by contradiction | 4 | 2 | |

**Median Brain Teasers**: Q ≈ 4.5, D ≈ 3. This is the strongest chapter overall.

### Probability (56 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19101 | Boy or Girl | Conditional probability | 4 | 2 | Note ambiguity |
| 19102 | Russian Roulette | Conditional probability | 5 | 4 | |
| 19103 | Aces (one per hand) | Multinomial | 4 | 3 | |
| 19104 | Gambler's Ruin (symmetric) | Martingale | 5 | 3 | |
| 19105 | N points on a circle | Geometric probability | 5 | 4 | |
| 19106 | Birthday Problem | Combinatorics | 4 | 2 | |
| 19107 | Drunk Passenger | Symmetry | 5 | 4 | Beautiful |
| 19108 | Connecting Noodles | Linearity of expectation | 5 | 4 | |
| 19109 | Dice Game (re-roll on 4-6) | Recursive expectation | 4 | 3 | |
| 19110 | Card Game First Ace | Order statistics | 4 | 3 | |
| 19111 | Unfair Coin (10H Bayes) | Bayes | 5 | 4 | |
| 19112 | Fair from Unfair | Von Neumann trick | 5 | 3 | |
| 19113 | Coupon Collector | Harmonic sum | 4 | 3 | |
| 19114 | Random Ants on a stick | Symmetry | 5 | 4 | Lovely insight |
| 19115 | Expected Max (2 uniforms) | Order statistics | 4 | 2 | DUPE 19158 |
| 19116 | Hopping Rabbit (lands on 10?) | Linear recurrence | 5 | 4 | |
| 19117 | Chess Tournament (final) | Bracket symmetry | 4 | 3 | |
| 19118 | Application Letters (derangements) | Inclusion-exclusion | 5 | 4 | |
| 19119 | All-Girl World | Linearity of expectation | 5 | 3 | |
| 19120 | Dart Game (next is worse?) | Symmetry | 5 | 3 | |
| 19121 | Birthday Line (best position) | Optimization | 4 | 4 | |
| 19122 | Dice Order (increasing) | Combinatorial | 4 | 2 | |
| 19123 | Monty Hall | Conditional probability | 5 | 3 | Iconic |
| 19124 | Amoeba Population | Galton-Watson / generating functions | 5 | 5 | |
| 19125 | Candies in a Jar | Order arguments | 3 | 4 | Lesson is sketchy on the inclusion-exclusion |
| 19126 | Basketball Scores (Bertrand) | Reflection principle | 5 | 4 | |
| 19127 | Cars on Road (Poisson memoryless) | Memoryless | 4 | 3 | DUPE 19130/19149 |
| 19128 | Meeting Probability | Geometric probability | 4 | 3 | DUPE 19155 |
| 19129 | Triangle Probability | Geometric probability | 4 | 3 | DUPE 19157 |
| 19130 | Poisson inter-arrival | Distributions | 3 | 2 | DUPE 19127/19149 |
| 19131 | Secretary Problem | Optimal stopping | 5 | 5 | |
| 19132 | Sum of Uniforms to >1 | Series / e | 5 | 4 | |
| 19133 | First Passage Time | Lévy / inverse-Gaussian | 4 | 5 | |
| 19134 | Reflection Principle | BM | 4 | 4 | |
| 19135 | Unfair Gambler's Ruin | Martingale | 5 | 4 | |
| 19136 | Steady State conditions | Markov chains | 4 | 3 | |
| 19137 | Random Walk on Graph | Markov / PageRank | 4 | 4 | |
| 19146 | MLE | Statistics | 3 | 2 | Definition-style |
| 19147 | Sample Variance Bias (n−1) | Bessel correction | 4 | 3 | |
| 19148 | LLN Weak vs Strong | Convergence modes | 4 | 4 | |
| 19149 | Poisson inter-arrival (again) | Distributions | 3 | 2 | DUPE 19127/19130 |
| 19150 | Memoryless Property | Distributions | 3 | 2 | Overlaps 19127 |
| 19151 | CLT | Statistics | 4 | 2 | |
| 19152 | Correlation vs Causation | Statistics | 4 | 2 | Useful warm-up |
| 19153 | Conditional Probability (basic) | Conditional probability | 2 | 1 | Trivial |
| 19154 | Expected Max with re-rolls (3 dice) | Optimal stopping | 5 | 4 | |
| 19155 | Romeo & Juliet | Geometric probability | 4 | 3 | DUPE 19128 |
| 19156 | Correlation Bounds | Linear algebra of correlations | 5 | 4 | |
| 19157 | Triangle from Segment | Geometric probability | 3 | 3 | DUPE 19129 |
| 19158 | Order Stats (Max) | Order statistics | 4 | 2 | DUPE 19115 |
| 19159 | Order Stats (Range) | Order statistics | 4 | 3 | |
| 19160 | Infinite Variance (Cauchy) | Heavy tails | 4 | 3 | |
| 19161 | Sum of Uniforms PDF | Convolution | 4 | 3 | |
| 19162 | Covariance Matrix PSD | Linear algebra | 4 | 3 | |
| 19163 | Gaussian CDF Expectation | Probability integral transform | 5 | 4 | Slick |
| 19405 | Expected Sum of Two Dice | Linearity of expectation | 2 | 1 | Trivial |

**Median Probability**: Q ≈ 4, D ≈ 3. Many duplicates dragging the average down.

### Calculus (18 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19201 | e^π vs π^e | Function analysis | 5 | 4 | |
| 19203 | Taylor series e^x | Series | 3 | 1 | Recall |
| 19205 | L'Hospital sin(x)/x | Limits | 3 | 1 | DUPE 19233 |
| 19207 | Newton's Method (formula) | Root finding | 3 | 2 | DUPE 19228 |
| 19208 | Lagrange Multipliers | Constrained optimization | 4 | 3 | |
| 19210 | Jacobian | Multivariable | 3 | 2 | |
| 19211 | ∫x e^x dx | Integration by parts | 3 | 2 | DUPE 19232 |
| 19215 | Gradient Descent | Optimization | 3 | 1 | Recall |
| 19221 | Hessian | Multivariable | 4 | 3 | |
| 19222 | Taylor series ln(1+x) | Series | 3 | 2 | DUPE 19231 |
| 19223 | Gradient of x'Ax | Matrix calculus | 4 | 3 | Useful |
| 19224 | Divergence vs Curl | Vector calculus | 3 | 2 | Less relevant for quant |
| 19225 | Fundamental Theorem | Calculus | 2 | 1 | Background recall |
| 19228 | Newton-Raphson | Root finding | 3 | 2 | DUPE 19207 |
| 19231 | Taylor series ln(1+x) | Series | 3 | 2 | DUPE 19222 |
| 19232 | Integration by parts (formula) | Integration | 3 | 1 | DUPE 19211 |
| 19233 | L'Hospital's Rule | Limits | 3 | 1 | DUPE 19205 |
| 19410 | Derivative of ln(ln x) | Chain rule | 3 | 2 | |

**Median Calculus**: Q ≈ 3, D ≈ 2. Heavy duplication; mostly recall-style.

### Linear Algebra (16 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19202 | Positive Definite eigenvalues | Spectral theory | 4 | 2 | |
| 19204 | Trace and Determinant | Eigenvalues | 4 | 2 | |
| 19206 | QR Decomposition | Factorisation | 3 | 2 | DUPE 19230 |
| 19209 | LU advantage | Numerical | 4 | 3 | |
| 19212 | Eigenvalues of A^n | Spectral | 4 | 2 | |
| 19213 | Rank of product | Rank | 4 | 3 | |
| 19214 | SVD | Factorisation | 4 | 3 | DUPE 19227 |
| 19216 | Cholesky | Factorisation | 4 | 3 | DUPE 19229 |
| 19217 | Positive Definite tests | Spectral | 4 | 3 | |
| 19218 | Idempotent eigenvalues | Spectral | 5 | 3 | Lovely |
| 19219 | Trace cyclic property | Trace | 4 | 3 | |
| 19220 | Orthogonal determinant | Spectral | 4 | 2 | |
| 19226 | Unitary matrix | Generalisation | 3 | 2 | |
| 19227 | SVD again | Factorisation | 3 | 2 | DUPE 19214 |
| 19229 | Cholesky again | Factorisation | 3 | 2 | DUPE 19216 |
| 19230 | QR again | Factorisation | 3 | 2 | DUPE 19206 |

**Median Linear Algebra**: Q ≈ 4, D ≈ 2.5. Strong content but ~25% pure duplicates.

### Stochastic Calculus (16 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19302 | Itô's Lemma (d ln S) | Itô | 5 | 3 | |
| 19304 | BM Covariance | BM | 4 | 3 | |
| 19307 | Martingale Definition | Martingales | 4 | 2 | |
| 19309 | Quadratic Variation | BM | 4 | 3 | |
| 19403 | GBM | Models | 4 | 2 | |
| 19801 | BM properties (NOT differentiable) | BM | 4 | 2 | |
| 19802 | Absorbing Barrier (920/1000) | Martingale | 5 | 3 | |
| 19803 | Itô's Lemma S² | Itô | 4 | 3 | |
| 19804 | Martingale Test (W²) | Martingales | 5 | 3 | |
| 19805 | Martingale Test (exp W) | Girsanov precursor | 5 | 4 | |
| 19806 | Quadratic Variation (dW)² = dt | Itô | 4 | 3 | |
| 19807 | Ornstein-Uhlenbeck | Mean reversion | 4 | 3 | |
| 19808 | Itô integral ∫W dW | Itô | 5 | 4 | |
| 19809 | Vasicek negative rates | Models | 4 | 3 | |
| 19810 | Girsanov | Measure change | 5 | 5 | |
| 19811 | Feynman-Kac | PDE-SDE | 5 | 5 | |

**Median Stochastic Calculus**: Q ≈ 4.5, D ≈ 3. Strong, coherent chapter — best curriculum-design in the file.

### Finance (81 questions)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19301 | Put-Call Parity | No-arbitrage | 5 | 3 | |
| 19303 | American Call Early Exercise | Optionality | 5 | 3 | |
| 19305 | Delta of ATM Call | Greeks | 4 | 2 | |
| 19306 | Gamma near Maturity | Greeks | 4 | 3 | Wording could be sharper |
| 19308 | BS Assumptions | Modelling | 4 | 2 | Reword prompt |
| 19310 | Theta sign | Greeks | 4 | 2 | |
| 19311 | Bull Spread | Strategies | 4 | 2 | |
| 19312 | Binary Options | Exotics | 4 | 2 | |
| 19313 | Exchange Options | Exotics | 4 | 4 | Margrabe |
| 19314 | N(d2) meaning | BS | 5 | 3 | |
| 19315 | Vega definition | Greeks | 3 | 1 | Recall |
| 19316 | Rho definition | Greeks | 2 | 1 | Typo + DUPE 19354 |
| 19317 | Straddle Gamma | Greeks | 4 | 3 | |
| 19318 | Theta-Gamma BS PDE | PDE | 5 | 4 | |
| 19319 | Vol Smile | Vol surface | 4 | 2 | DUPE 19357 |
| 19320 | Asian Options | Exotics | 3 | 1 | Recall |
| 19321 | Knock-out | Exotics | 3 | 2 | |
| 19322 | Lookback | Exotics | 3 | 2 | |
| 19323 | Discounted Stock as Martingale | Pricing theory | 5 | 3 | |
| 19324 | Put Delta | Greeks | 4 | 2 | |
| 19325 | CVA | Counterparty risk | 4 | 3 | |
| 19326 | Correlation Swap | Exotics | 4 | 4 | |
| 19327 | Variance Swap | Exotics | 4 | 4 | |
| 19328 | Model Risk | Risk management | 4 | 2 | |
| 19330 | BS PDE Boundary | PDE | 4 | 3 | |
| 19331 | Drift and Pricing | Pricing theory | 5 | 3 | Counterintuitive — strong |
| 19332 | Time-Dependent Vol | BS extensions | 4 | 3 | |
| 19333 | American Call (revisit) | Optionality | 4 | 2 | Overlaps 19303 |
| 19334 | American Put Early Exercise | Optionality | 5 | 4 | |
| 19335 | ATM Call Rule of Thumb | Approximations | 5 | 3 | Useful trader heuristic |
| 19336 | Vol → ∞ limit | BS limits | 4 | 3 | |
| 19337 | Mean Reversion in BS | Modelling | 4 | 3 | |
| 19338 | Call Convexity | Greeks | 4 | 3 | |
| 19339 | Stop-Loss Hedge trap | Hedging | 4 | 4 | Lesson is slightly off-topic — talks about static hedging instead |
| 19340 | Forward Price (with dividend) | Forwards | 4 | 2 | |
| 19341 | Digital Replication | Replication | 5 | 4 | |
| 19342 | Put-Call Parity (dividends) | No-arbitrage | 4 | 3 | |
| 19343 | Butterfly Spread | Strategies | 4 | 3 | |
| 19344 | Call Delta = N(d1) | Greeks | 4 | 2 | |
| 19345 | Gamma definition | Greeks | 3 | 1 | DUPE 19306 |
| 19346 | Theta sign (call) | Greeks | 3 | 2 | DUPE 19310 |
| 19347 | Vega and Maturity | Greeks | 4 | 2 | |
| 19348 | Straddle | Strategies | 4 | 2 | |
| 19349 | Risk-Neutral Measure | Pricing theory | 3 | 2 | DUPE 19401 |
| 19350 | Vega of a Forward | Greeks | 4 | 2 | |
| 19351 | Put-Call Parity (American) | No-arbitrage | 4 | 3 | |
| 19352 | Delta-Neutrality | Hedging | 4 | 2 | |
| 19353 | Gamma-Neutrality | Hedging | 4 | 3 | |
| 19354 | Rho of a Call | Greeks | 3 | 2 | DUPE 19316 |
| 19355 | Vanna | Higher Greeks | 4 | 3 | |
| 19356 | Volga (Vomma) | Higher Greeks | 4 | 3 | |
| 19357 | Smile vs Skew | Vol surface | 3 | 2 | DUPE 19319 |
| 19358 | Implied Volatility | Vol surface | 4 | 2 | |
| 19359 | Risk-Free Rate | Conventions | 3 | 2 | |
| 19360 | CVA | Counterparty risk | 3 | 2 | DUPE 19325 |
| 19361 | Sharpe Ratio | Performance | 3 | 2 | DUPE 19412 (lesson now added) |
| 19362 | Information Ratio | Performance | 4 | 3 | Lesson now added |
| 19363 | Sortino Ratio | Performance | 4 | 2 | Lesson now added |
| 19364 | Kelly Criterion | Sizing | 5 | 3 | Lesson now added |
| 19365 | Risk Aversion | Utility | 4 | 3 | Lesson now added |
| 19366 | Heston Model | Vol modelling | 4 | 4 | Lesson now added |
| 19367 | Dupire Equation | Vol modelling | 4 | 5 | Lesson now added |
| 19368 | SABR Model | Vol modelling | 4 | 4 | Lesson now added |
| 19369 | Jump-Diffusion | Vol modelling | 4 | 4 | Lesson now added |
| 19370 | Variance Swap Hedge | Replication | 5 | 5 | Lesson now added — strong |
| 19371 | Vol Risk Premium | Trading | 4 | 3 | Lesson now added |
| 19372 | CVA vs DVA | xVA | 4 | 3 | Lesson now added |
| 19373 | IM vs VM | Collateral | 4 | 3 | Lesson now added |
| 19376 | Pin Risk | Trading | 5 | 3 | Lesson now added |
| 19377 | HJM Framework | Rates | 4 | 5 | Lesson now added |
| 19378 | Swaption vs Caplet | Rates | 5 | 4 | Lesson now added |
| 19379 | ISDA Master | Plumbing | 4 | 2 | Lesson now added |
| 19380 | Gap Risk | Risk | 4 | 3 | Lesson now added |
| 19401 | Risk-Neutral Measure | Pricing theory | 5 | 3 | Strong |
| 19402 | Straddle Payoff | Strategies | 3 | 1 | DUPE 19348 |
| 19411 | Markowitz | Portfolio theory | 4 | 3 | |
| 19412 | Sharpe Ratio (formula) | Performance | 4 | 2 | |
| 19413 | CAPM | Asset pricing | 4 | 2 | |
| 19414 | Beta | Asset pricing | 4 | 2 | |
| 19415 | Duration & Convexity | Bonds | 4 | 3 | |
| 19416 | VaR | Risk | 4 | 3 | |

**Median Finance**: Q ≈ 4, D ≈ 3. Largest chapter, most duplicates, and broadest range — would benefit most from a dedup pass.

### Risk Management (2)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19374 | VaR vs ES | Coherence | 4 | 3 | Lesson now added |
| 19375 | Backtesting | Validation | 4 | 3 | Lesson now added |

Tiny chapter — could absorb into Finance or grow to 6-8 questions on the risk-systems angle (FRTB, stress testing, scenario design, capital).

### Fixed Income (5)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19701 | Macaulay Duration | Bonds | 4 | 2 | Lesson now added |
| 19702 | Convexity | Bonds | 4 | 2 | Lesson now added |
| 19703 | DV01 | Bonds | 4 | 2 | Lesson now added |
| 19704 | Bootstrap | Curve construction | 4 | 3 | Lesson now added |
| 19705 | CDS | Credit | 4 | 3 | Lesson now added |

Coherent micro-chapter; a 2nd round with key-rate durations, repo, basis, and butterfly spreads would round it out.

### Algorithms (26)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19501 | Quicksort complexity | Sorting | 3 | 1 | Recall |
| 19502 | Knuth/Fisher-Yates Shuffle | Randomisation | 5 | 3 | Common pitfall makes it strong |
| 19503 | Reservoir Sampling | Streaming | 5 | 3 | |
| 19504 | Find Min/Max in 3n/2 | Comparison lower bound | 4 | 3 | |
| 19505 | Infinite Array Search | Search | 4 | 3 | |
| 19506 | 2D Sorted Matrix | Search | 5 | 3 | Elegant |
| 19507 | Fibonacci Efficiency | DP | 4 | 2 | |
| 19508 | Linked List Cycle (Floyd) | Pointers | 5 | 3 | |
| 19509 | Stack from 2 Queues | Data structures | 3 | 2 | |
| 19510 | Count Set Bits (Kernighan) | Bit tricks | 4 | 2 | |
| 19511 | Power of 2 | Bit tricks | 4 | 2 | |
| 19512 | log(n!) Complexity | Stirling | 4 | 3 | |
| 19513 | Knapsack DP | DP | 4 | 3 | |
| 19514 | LCS | DP | 4 | 3 | |
| 19515 | Dijkstra | Graphs | 3 | 2 | Recall |
| 19516 | Simpson's Rule | Numerical | 4 | 2 | |
| 19517 | Discrete sampling from CDF | Sampling | 4 | 2 | |
| 19518 | Leap Year (2000 vs 2100) | Calendar | 3 | 1 | Trivial |
| 19519 | Matrix Exponentiation | Algorithms | 4 | 4 | |
| 19520 | sin(x)/x stability | Numerical | 5 | 3 | Real bug pattern |
| 19521 | Kadane | DP | 4 | 2 | |
| 19522 | Submarine Interception | Enumeration | 4 | 4 | |
| 19523 | Robot Collision (asteroids) | Stack | 4 | 4 | Lesson actually solves a *different* problem (asteroids) — needs alignment with prompt |
| 19524 | Importance Sampling | Variance reduction | 5 | 4 | |
| 19601 | Find Duplicates O(1) space | Floyd cycle | 5 | 4 | |
| 19602 | Tree Summation | Recursion | 3 | 1 | Trivial |

**Median Algorithms**: Q ≈ 4, D ≈ 3.

### Programming (5)

| ID | Title | Topic | Q | D | Notes |
|---|---|---|---:|---:|---|
| 19603 | Virtual Destructor | C++ | 4 | 2 | |
| 19604 | unique_ptr vs shared_ptr | C++ | 4 | 2 | |
| 19605 | Factory Pattern | Patterns | 3 | 1 | |
| 19606 | Vector vs List | C++ | 4 | 2 | |
| 19607 | const T& | C++ | 4 | 2 | |

Tightly C++-focused. If the audience includes Python/Rust quants, consider 2-3 broader-language items (GIL, copy-on-write, ownership model).

## Suggested next steps in priority order

1. **Delete duplicates** (~20 candidates above). Big quality win, zero content loss.
2. **Strengthen the misconception/reframe pairs** in 19316, 19345–19360, 19361–19380, 19701–19705. Replace bare `'No.'` flaws with one specific sentence each — these are the questions where a learner most needs the correction explained.
3. **Reword the handful of dodgy prompts/lessons** flagged above (19316 typo, 19306 Dirac wording, 19308 phrasing, 19339 lesson off-topic, 19523 lesson solves wrong problem).
4. **Backfill 2-3 questions per under-covered topic**: Risk Management (currently 2), Fixed Income (currently 5). Both feel curriculum-light vs Finance.
5. **Consider a "fun" pass on prompts**: most questions are dry. Brain Teasers already use names and stories well; the Finance / Probability / Stochastic Calculus chapters could borrow that style. Adding a short scenario sentence ("You're on the trading desk and the head of vol asks…") to ~30% of definitional questions would lift engagement noticeably without changing the underlying content.
