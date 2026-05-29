# Phase 2 Review — Linear Algebra

**14 questions** · core: 7 · advanced: 7

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19202 | ⚪ adv | Positive Definite | If A is a symmetric positive definite matrix, what is true about its eigenvalues? | All eigenvalues are strictly greater than 0 |
| 2 | 19204 | ⚪ adv | Trace and Determinant | For an NxN matrix A, how do the eigenvalues relate to the trace and determinant? | Trace = sum of eigenvalues, Determinant = product of eigenv… |
| 3 | 19206 | 🟢 core | QR Decomposition | What does the QR decomposition of a matrix A represent? | A = QR, where Q is orthogonal and R is upper triangular. |
| 4 | 19209 | 🟢 core | LU Decomposition | What is the main advantage of LU decomposition for solving Ax = b? | It allows for efficient solving for multiple different b ve… |
| 5 | 19212 | 🟢 core | Eigenvalues of A^n | If lambda is an eigenvalue of A, what is an eigenvalue of A^n? | lambda^n |
| 6 | 19213 | 🟢 core | Rank of Product | What is the upper bound for the rank of the product AB? | min(rank(A), rank(B)) |
| 7 | 19214 | 🟢 core | SVD | What is the Singular Value Decomposition (SVD)? | A = U Sigma V^T, where U, V are orthogonal and Sigma is dia… |
| 8 | 19216 | 🟢 core | Cholesky Decomposition | What type of matrix is required for Cholesky decomposition A = LL^T? | Symmetric and Positive Definite |
| 9 | 19217 | ⚪ adv | Positive Definite Check | How can you verify a matrix is Positive Definite? | All eigenvalues are positive OR all upper-left subdetermina… |
| 10 | 19218 | ⚪ adv | Idempotent Matrix | What are the possible eigenvalues of an idempotent matrix (A^2 = A)? | 0 or 1 |
| 11 | 19219 | ⚪ adv | Trace Property | Which of the following is true for the trace of matrices? | Trace(AB) = Trace(BA) |
| 12 | 19220 | ⚪ adv | Orthogonal Determinant | What is the determinant of an orthogonal matrix (Q^T Q = I)? | +1 or -1 |
| 13 | 19226 | ⚪ adv | Unitary Matrix | What is a Unitary matrix? | A complex square matrix whose conjugate transpose is its in… |
| 14 | 19824 | 🟢 core | Column Space Reality Check | A model uses three features, but feature C is always exactly 2 * feature A - feature B. In a linear regression design m… | The columns are linearly dependent, so the solution may not… |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

