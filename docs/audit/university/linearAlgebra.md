# Audit: linearAlgebra

**Syllabus**: [`src/data/syllabi/university/linear_algebra.md`](../../../src/data/syllabi/university/linear_algebra.md)
**Track id**: `linearAlgebra`
**Tier**: university
**Region**: Universal — no jurisdiction. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Vectors, Systems, Row Reduction | yes | Vector addition / scalar mult / magnitude / unit / dot / orthogonal / projection; row operations, pivots, unique-solution criterion |
| 2. Matrices, Linear Maps, Invertibility | yes | Dimensions, entries, addition compatibility, multiplication size rules, undefined products, identity, zero matrix, inverse condition, A⁻¹A = I |
| 3. Subspaces, Bases, Dimension, Rank | yes | Span, linear combination, dependence/independence, R³-can't-hold-4-independent argument, basis definition, standard basis R², dimension, subspace test, zero vector requirement, kernel, image, rank, rank-nullity |
| 4. Determinants, Volume, Orientation | yes | 2×2 formula (ad-bc), singular ⇔ det=0, area-scaling interpretation |
| 5. Eigenvalues, Eigenvectors, Dynamical Systems | partial | Eigenvector definition (Av = λv) covered; **characteristic polynomial computation absent**, **diagonalization absent**, **Markov-chain steady state absent** |
| 6. Orthogonality, Projections, Least Squares | no | Inner product covered indirectly via dot product, but **Gram-Schmidt absent, QR absent, least-squares normal equations absent** |
| 7. Symmetric Matrices, Quadratic Forms, Spectral Theory | no | Not covered |
| 8. SVD, Numerical Thinking, Applications | no | Not covered |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`linearAlgebraWorkoutGenerated.ts`](../../../src/data/questionCatalog/linearAlgebraWorkoutGenerated.ts) | 50 | **KEEP** | **Confirms May 2026 audit's "surprisingly solid" call.** Per-distractor explanations + nudges throughout. No `DEFAULT_FLAW`. Strong dimension-matters discipline ("Inner dimensions match but do not give output size" — output is outer dimensions). Chapter labels (Vectors / Matrices / Determinants / Inverses / Systems / Span / Independence / Basis / Subspaces / Linear Transformations / Rank / Eigenvalues) cover chapters 1–5 of the syllabus, mostly 1–4. |
| [`universityCollege.ts:92-95`](../../../src/data/questionCatalog/universityCollege.ts) inline 4-question dock | 4 | **KEEP** but **MERGE → workout file** | Hand-authored four-item set with playful chapter names ("Linear Algebra Cove", "Reef", "Lagoon"). Per-distractor explanations. The voice is fine; move them into the workout file or a sibling source. |
| `numbasWebworkLinearAlgebraQuestions` + Additional + Third (3 bundles) | unknown | **KEEP** subject to spot-check | Same import pattern as algebra/calculus bundles. Sampled algebra version had per-distractor reasons preserved; expect same here. |

Wired at `universityCollege.ts:90-101`. No other content routes here.

## Cross-cluster flags

- **Math notation**: ASCII (`<3, 4>`, `Ax = b`, `det(A) = 0`, `R^n`). Greek as words. Renderer-safe.
- **Region**: universal. No tag needed.
- **Single-file architecture**: like multivariable, one workout file + tiny inline dock + numbas imports. Clean.
- **Chapters 6-8 largely uncovered**: orthogonality, Gram-Schmidt, least squares, spectral theorem, SVD. Workout-file chapters stop at "Eigenvalues".
- **Eigenvalue depth thin**: definition only; no char-poly computation, no diagonalization, no Markov example.

## Open actions (priority order)

1. **Author chapter 6 content** (orthogonality / projections / least squares): 8-10 items covering Gram-Schmidt, QR, projection geometry, normal equations, residual interpretation. **Biggest gap and most-cited "I needed this in stats" content.**
2. **Author chapter 5 deepening**: characteristic polynomial computation, diagonalization decision (algebraic vs geometric multiplicity), Markov-chain steady state, complex-eigenvalue spiral. ~5 items.
3. **Author chapter 7 content** (spectral / quadratic forms): orthogonal diagonalization, positive-definite test, classification of quadratic forms. ~5 items.
4. **Author chapter 8 content** (SVD / applications): singular values vs eigenvalues, rank-k approximation intuition, PCA connection, conditioning. ~5 items.
5. **Merge the inline 4-question dock** from `universityCollege.ts:92-95` into the main workout file for cleaner architecture.

## Estimated effort

- Chapter 6 authoring: ~5 hours (10 items × 30 min)
- Chapter 5 deepening: ~3 hours
- Chapters 7-8 authoring: ~5 hours
- Inline merge: ~30 min

**~2 working days** to bring the back-half of the syllabus to coverage. The first-half (chapters 1-4) bar is met today.

## Notes for next auditor

Like `multivariableCalculus`, a workout-generated file at the top of the quality bar. Pattern is consistent: single-course-context authoring produces excellent files; generic "fill in distractors" with `DEFAULT_FLAW` fallback produces the `universityAgentGenerated.ts` pattern. Keep scope narrow, demand per-distractor reasoning.
