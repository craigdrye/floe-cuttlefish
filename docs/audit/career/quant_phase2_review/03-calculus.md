# Phase 2 Review — Calculus

**16 questions** · core: 6 · advanced: 10

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19201 | ⚪ adv | e^pi vs pi^e | Without a calculator, which is larger: e^pi or pi^e? | e^pi |
| 2 | 19203 | ⚪ adv | Taylor Series | What is the Taylor series expansion of e^x around x=0? | 1 + x + x^2/2! + x^3/3! + ... |
| 3 | 19205 | ⚪ adv | L'Hospital's Rule | Evaluate the limit as x approaches 0 of sin(x) / x. | 1 |
| 4 | 19207 | 🟢 core | Newton's Method | What is the iteration formula for Newton's method to find a root of f(x) = 0? | x_{n+1} = x_n - f(x_n) / f'(x_n) |
| 5 | 19208 | 🟢 core | Lagrange Multipliers | When are Lagrange multipliers used? | To find the local extrema of a function subject to equality… |
| 6 | 19210 | 🟢 core | Jacobian Matrix | What is the Jacobian matrix of a vector-valued function? | The matrix of all first-order partial derivatives. |
| 7 | 19211 | ⚪ adv | Integration by Parts | What is the result of the integral of x * e^x dx? | (x - 1) * e^x + C |
| 8 | 19215 | 🟢 core | Gradient Descent | In which direction does the gradient descent algorithm move? | The direction of the negative gradient. |
| 9 | 19221 | ⚪ adv | Hessian Matrix | What does the Hessian matrix represent? | The matrix of second-order partial derivatives. |
| 10 | 19222 | ⚪ adv | Log Taylor Series | What is the Taylor series for ln(1+x) around x=0? | x - x^2/2 + x^3/3 - x^4/4 ... |
| 11 | 19223 | ⚪ adv | Quadratic Gradient | What is the gradient of f(x) = x^T A x with respect to x (for symmetric A)? | 2Ax |
| 12 | 19224 | ⚪ adv | Divergence vs Curl | In vector calculus, what does the Divergence of a field represent? | The net flow out of a point (scalar). |
| 13 | 19225 | ⚪ adv | Fundamental Theorem | What does the Fundamental Theorem of Calculus link? | Differentiation and Integration as inverse operations. |
| 14 | 19410 | ⚪ adv | Derivative of Nested Log | What is the derivative of y = ln(ln x)? | 1 / (x * ln x) |
| 15 | 19825 | 🟢 core | Derivative as Local Price Tag | A pricing function f(x) gives expected P&L as a function of position size x. At x = 10, f'(10) = -3. What is the best i… | Near x = 10, adding one small unit is expected to reduce P&… |
| 16 | 19826 | 🟢 core | One-Dimensional Bowl | You need to minimize g(x) = (x - 4)^2 + 7. No heroic calculus cape required. What is the minimum value? | 7, achieved at x = 4. |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

