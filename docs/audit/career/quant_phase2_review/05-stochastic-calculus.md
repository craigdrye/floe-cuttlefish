# Phase 2 Review — Stochastic Calculus

**16 questions** · core: 0 · advanced: 16

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19302 | ⚪ adv | Ito's Lemma | If dS = mu*S*dt + sigma*S*dW, what is the process for d(ln S)? | d(ln S) = (mu - sigma^2/2)dt + sigma*dW |
| 2 | 19304 | ⚪ adv | Brownian Motion Covariance | Let W(t) be a standard Brownian motion. What is the covariance between W(s) and W(t) for s < t? | s |
| 3 | 19307 | ⚪ adv | Martingale Definition | What is the defining mathematical property of a martingale process M(t)? | E[M(t) \| F(s)] = M(s) for all s < t |
| 4 | 19309 | ⚪ adv | Quadratic Variation | What is the quadratic variation of standard Brownian motion W(t) over the interval [0, t]? | t |
| 5 | 19403 | ⚪ adv | Geometric Brownian Motion | Why is Geometric Brownian Motion (GBM) used to model stock prices instead of standard Brownian Motion? | GBM ensures stock prices never become negative and returns… |
| 6 | 19801 | ⚪ adv | Brownian Motion | Which property is NOT true for a standard Brownian Motion Wt? | Wt is differentiable with respect to t. |
| 7 | 19802 | ⚪ adv | Absorbing Barrier | A random walk starts at 80 and stops at 0 or 1000. Probability of hitting 0? | 920 / 1000 = 0.92 |
| 8 | 19803 | ⚪ adv | Ito's Lemma (S^2) | If dS = sigma*S*dW, what is the drift of S^2? | sigma^2 * S^2 |
| 9 | 19804 | ⚪ adv | Martingale Test (W^2) | Is Wt^2 a martingale? | No, Wt^2 - t is the martingale. |
| 10 | 19805 | ⚪ adv | Martingale Test (exp) | Is exp(Wt) a martingale? | No, exp(Wt - t/2) is the martingale. |
| 11 | 19806 | ⚪ adv | Quadratic Variation | What does (dWt)^2 = dt mean in Ito Calculus? | The quadratic variation of Brownian motion over [0,t] is ex… |
| 12 | 19807 | ⚪ adv | Ornstein-Uhlenbeck | What is the key feature of the OU process dX = theta(mu - X)dt + sigma*dW? | Mean reversion to mu. |
| 13 | 19808 | ⚪ adv | Ito Integration | What is the integral of Wt dWt from 0 to T? | 1/2(WT^2 - T) |
| 14 | 19809 | ⚪ adv | Vasicek Model | In the Vasicek model, can interest rates become negative? | Yes, because it uses a Normal distribution for increments. |
| 15 | 19810 | ⚪ adv | Girsanov Theorem | What is the main use of the Girsanov Theorem? | Changing the drift of a stochastic process by changing the… |
| 16 | 19811 | ⚪ adv | Feynman-Kac Formula | What does the Feynman-Kac formula link? | Parabolic PDEs and expectations of stochastic processes. |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

