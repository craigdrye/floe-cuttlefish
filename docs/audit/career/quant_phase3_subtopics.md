# Quant Phase 3 — Sub-topic clusters (proposal)

For each of the 10 chapters in [`quant.ts`](../../../src/data/questionCatalog/quant.ts), I propose a sub-topic grouping. Once you sign off (per chapter or all at once), I'll:

1. Add a `subTopic` field to each Question in `quant.ts` (just for those 261 questions; new field is optional on the type)
2. Modify [`buildLessonsForChapter`](../../../src/lib/lessonGrouping.ts) so chapters with sub-topic tags group by sub-topic and use the sub-topic as the lesson title
3. Fall back to the existing difficulty-sorted grouping for tracks without sub-topic tags

**Constraint:** the lesson grouping caps at 8 lessons per chapter and groups smaller chapters into ~2 lessons. So:
- Chapters with **≥30 Qs** (Finance, Probability, Brain Teasers, Algorithms) get meaningful sub-topic clusters
- Chapters with **<30 Qs** (Calculus, Stochastic Calculus, Linear Algebra, Programming, Fixed Income, Risk) get 1-2 merged buckets — cluster names matter less here but still help

Skim the chapters you care about most; for any I've miscategorized, name the question ID and the cluster it should go to.

---

## Brain Teasers (37) — 7 clusters

| Cluster | IDs | Sample titles |
|---|---|---|
| Backward Induction | 19001, 19006, 19023, 19028 | Pirates, Horse Race, Prisoner Problem, Race Track |
| Lateral & Observability | 19003, 19009, 19012, 19016, 19026 | Burning Ropes, Light Switches, Mislabeled Bags, Door to Offer, Coin Split |
| Weighing & Information | 19004, 19014, 19019, 19029, 19407 | Defective Ball, Counterfeit Coins I, Wise Men, Rainbow Hats, Counterfeit Coins II |
| Invariants & Parity | 19007, 19011, 19018, 19025, 19818 | Box Packing, Coin Piles, Last Ball, Chameleon Colors, Shrinking Blotter |
| Counting & Arithmetic | 19005, 19010, 19013, 19024, 19027, 19404, 19408, 19409 | Trailing Zeros, Quant Salary, Missing Integers, Division by 9, Chocolate Bar, 100th Digit, Handshakes, Irrational Root |
| Logic & Constraint | 19008, 19020, 19030, 19819 | Calendar Cubes, Clock Pieces, Staircase Problem, Spread Gossip Committee |
| Optimization & Movement | 19002, 19015, 19017, 19021, 19022, 19406 | River Crossing, Glass Balls, Message Delivery, Matching Socks, Meeting People, Ants on a Square |

## Probability (59) — 8 clusters

| Cluster | Count | Sample titles |
|---|---:|---|
| Conditional & Bayes | 8 | Boy or Girl, Russian Roulette, Drunk Passenger, Unfair Coin, Monty Hall, Conditional Probability, Two Resume Typos, Overexcited Risk Flag |
| Birthdays & Collisions | 4 | Birthday Problem, Birthday Line, Symmetric Elevator Bet, Snack Table Committee |
| Random Walks | 8 | Gambler's Ruin, Random Ants, Hopping Rabbit, First Passage Time, Reflection Principle, Unfair Gambler's Ruin, Steady State, Random Walk on Graph |
| Expected Value | 11 | Dice Game, Chess Tournament, Application Letters, All-Girl World, Amoeba Population, Candies in a Jar, Coupon Collector, Expected Coffee Damage, Office Dice IPO, Bonus With Teeth, Expected Value of Dice |
| Continuous & Geometric Probability | 8 | N Points on a Circle, Dart Game, Meeting Probability, Triangle Probability, Secretary Problem, Sum of Uniforms (x2), Connecting Noodles |
| Order Statistics | 4 | Expected Max, Expected Max (3 Dice), Order Statistics (Range), Card Game Ace |
| Stats Foundations | 9 | MLE, Sample Variance Bias, Law of Large Numbers, Memoryless Property, Central Limit Theorem, Correlation vs Causation, Correlation Bounds, Infinite Variance, Covariance Matrix, Gaussian CDF Expectation |
| Discrete Counting | 7 | Aces, Dice Order, Cars on Road, Basketball Scores, Badge Numbers Behaving Nicely, Fair from Unfair |

## Finance (78) — 8 clusters

| Cluster | Count | Sample titles |
|---|---:|---|
| Options Greeks | 13 | Delta of ATM Call, Gamma near Maturity, Theta, Vega, Rho, Vanna, Volga, Put Delta, Vega of a Forward |
| Replication & Hedging | 9 | Put-Call Parity (x3), Digital Option Replication, Static Hedge Error, Forward Price, Delta-Neutrality, Gamma-Neutrality, Tiny Umbrella Hedge |
| Strategies & Exotics | 13 | Bull Spread, Butterfly, Straddle (x3), Asian, Barrier, Lookback, Binary, Exchange, Pin Risk, Theta-Gamma, Dominated Trade Parade |
| Black-Scholes & PDE | 5 | BS Assumptions, d1/d2, BS PDE Boundary, Drift and Pricing, Time-Dependent Vol |
| Volatility & Vol Products | 9 | IV Smile, IV (general), Vol Risk Premium, ATM Call Rule of Thumb, Volatility to Infinity, Variance Swap (x2 inc. hedge), Correlation Swap, Vega and Maturity |
| Stochastic Models | 7 | Heston, Dupire, SABR, Jump-Diffusion, Mean Reversion, HJM, Swaption vs Caplet |
| Credit & Counterparty | 5 | CVA, CVA vs DVA, IM vs VM, ISDA Master, Gap Risk |
| Portfolio & Performance | 17 | Sharpe, Information Ratio, Sortino, Kelly, Risk-Aversion, Portfolio Optimization, CAPM, Beta, Duration & Convexity, VaR, American Call (x3), Call Convexity, Risk-Free Rate, Risk-Neutral Measure, Risk-Neutral Martingale, Model Risk |

## Algorithms (28) — 7 clusters

| Cluster | Count | Sample titles |
|---|---:|---|
| Sorting & Selection | 3 | Quicksort Complexity, Knuth Shuffle, Find Max and Min |
| Search | 2 | Infinite Array Search, 2D Matrix Search |
| Dynamic Programming | 4 | Fibonacci Efficiency, Knapsack, Longest Common Subsequence, Max Subarray Sum |
| Data Structures | 7 | Linked List Cycle, Stack using Queues, Reservoir Sampling, Finding Duplicates, Tree Summation, Streaming Top Five, Discrete Sampling |
| Bit & Numeric Tricks | 4 | Count Set Bits, Power of 2, log(n!) Complexity, sin(x)/x Stability |
| Numerical Methods | 3 | Numerical Integration, Matrix Exponentiation, Importance Sampling |
| Practical Patterns | 5 | Date Increment, Backtest Smell Test, Dijkstra's Algorithm, Robot Collision, Submarine Interception |

## Smaller chapters

### Calculus (16) — 2 clusters

| Cluster | IDs |
|---|---|
| Series, Limits & Optimization | 19201, 19203, 19205, 19207, 19208, 19222, 19826 (Taylor, e^pi vs pi^e, L'Hospital, Newton, Lagrange, Log Taylor, 1D Bowl) |
| Derivatives, Integration & Vector Calc | 19210, 19211, 19215, 19221, 19223, 19224, 19225, 19410, 19825 (Jacobian, Integration by Parts, Gradient Descent, Hessian, Quadratic Gradient, Div vs Curl, FTC, Nested Log, Local Price Tag) |

### Stochastic Calculus (16) — 2 clusters

| Cluster | IDs |
|---|---|
| Brownian Motion & Ito Calculus | 19302, 19304, 19309, 19403, 19801, 19803, 19806, 19808 (Ito's Lemma x2, BM Covariance, GBM, Brownian Motion, Quad Variation x2, Ito Integration) |
| Martingales, Models & Theorems | 19307, 19403, 19802, 19804, 19805, 19807, 19809, 19810, 19811 (Martingale Def, Martingale Tests x2, OU, Vasicek, Absorbing Barrier, Girsanov, Feynman-Kac) |

### Linear Algebra (14) — 2 clusters

| Cluster | IDs |
|---|---|
| Decompositions | 19206, 19209, 19214, 19216 (QR, LU, SVD, Cholesky) |
| Properties, Eigenvalues & Rank | 19202, 19204, 19212, 19213, 19217, 19218, 19219, 19220, 19226, 19824 (Positive Definite x2, Trace+Det, Eigenvalues of A^n, Rank of Product, Idempotent, Trace Property, Orthogonal Det, Unitary, Column Space) |

### Programming (6) — 1 lesson

C++ specifics + one container pattern. No cluster needed (will surface as one lesson).

### Fixed Income (5) — 1 lesson

Rate sensitivity (Duration, Convexity, DV01) + curve mechanics (Bootstrap, CDS). One lesson.

### Risk Management (2) — 1 lesson

VaR vs ES + Backtesting. One lesson.

---

## How to give feedback

For each chapter you want to redirect, tell me:
- A different cluster split (give me the chapter name and the clusters you want)
- Specific question moves (e.g., "19023 belongs in Lateral & Observability, not Backward Induction")
- A different name for a cluster
- Or "looks good" for any chapter that's ready to apply

Once you sign off, I'll write the `subTopic` tags into `quant.ts` and update the lesson-grouping algorithm.
