# Audit: differentialEquations

**Syllabus**: [`src/data/syllabi/university/differential_equations.md`](../../../src/data/syllabi/university/differential_equations.md)
**Track id**: `differentialEquations`
**Tier**: university
**Region**: Universal — no jurisdiction. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Modeling, Slope Fields, First-Order Foundations | yes | Order/degree, first-order classification, solution meaning, IVPs, slope fields, equilibrium/autonomous, uniqueness reasoning |
| 2. Analytic Methods for First-Order ODEs | yes | Separable form, simple integration, integrating factor (e^∫p dx), particular solution |
| 3. Second-Order Linear Equations | yes | Order identification, characteristic equation, distinct roots, repeated root (x e^rx trick), complex roots (e^αx cos βx) |
| 4. Oscillations, Forcing, Engineering Models | no | Damped oscillator / RLC / resonance / beats not drilled |
| 5. Laplace Transforms and Discontinuous Inputs | partial | Laplace role + derivative transform (sY - y(0)) covered; **convolution, Heaviside, Dirac absent** |
| 6. Linear Systems and Phase Plane Analysis | partial | System notation x' = Ax + eigenvalue intuition covered; **phase-portrait classification (node/saddle/spiral) absent** |
| 7. Nonlinear and Qualitative Analysis | partial | Direction-field crossing rationale covered; **nullclines, linearization, predator-prey absent** |
| 8. Numerical Methods, Series Solutions | partial | Euler method + step-size tradeoff covered; **RK4, power-series solutions, Frobenius absent** |
| Methods follow-on | yes | Undetermined coefficients fit, exponential-forcing guess, variation of parameters role |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`differentialEquationsWorkoutGenerated.ts`](../../../src/data/questionCatalog/differentialEquationsWorkoutGenerated.ts) | 50 | **KEEP** | **Confirms May 2026 audit's "surprisingly solid" call.** Per-distractor explanations + nudges throughout. No `DEFAULT_FLAW`. Strong technique-discrimination distractors ("That fits polynomial forcing" when asked about exponential forcing; "That is repeated-root behavior" when asked about complex roots). Chapter labels (Foundations / Initial Value Problems / Separable Equations / Linear First Order / Autonomous Equations / Second Order Equations / Undetermined Coefficients / Variation of Parameters / Laplace Transforms / Systems of ODEs / Numerical Methods / Qualitative Analysis) cover ~6 of 8 syllabus chapters cleanly. |

Wired at `universityCollege.ts:88`. Single-file architecture like multivariable.

## Cross-cluster flags

- **Math notation**: ASCII (`y' + p(x)y = q(x)`, `e^(integral p(x) dx)`, `sY(s) - y(0)`, `r^2 + 5r + 6 = 0`). Greek as words ("lambda", "alpha", "beta"). Renderer-safe.
- **Region**: universal mathematics. No tag needed.
- **Chapter 4 entirely uncovered**: oscillations, forcing, RLC circuits, mass-spring-damper — the "engineering applications" centerpiece of a typical ODE course. This is the biggest gap.
- **Chapter 6 phase-portrait classification gap**: students see "eigenvalues determine growth/decay/oscillation" but never see node/saddle/spiral/center classification. The qualitative-analysis backbone of dynamical systems is missing.
- **Single-file architecture**: like multivariable and linear algebra, this loads exactly one bank. Clean.

## Open actions (priority order)

1. **Author chapter 4 content**: mass-spring-damper free response, damped/overdamped/critically damped classification from characteristic roots, forced response, resonance condition, RLC analogy. ~8 items. **Largest gap.**
2. **Author chapter 6 phase-portrait classification**: real distinct eigenvalues (node vs saddle), complex eigenvalues (spiral vs center), repeated eigenvalues, stability decision from eigenvalue signs. ~5 items.
3. **Author chapter 5 deepening**: Heaviside step function, Dirac delta, convolution, piecewise forcing translation. ~5 items.
4. **Author chapter 7 nonlinear content**: nullclines, Jacobian-at-equilibrium, SIR model parameters, predator-prey equilibria. ~5 items.
5. **Author chapter 8 RK4 / series-solution content**: RK4 update, error-order comparison, power-series recurrence near ordinary point. ~4 items.

## Estimated effort

- Chapter 4 authoring: ~5 hours
- Chapter 6 phase portraits: ~3 hours
- Chapters 5, 7, 8 deepening: ~7 hours total

**~2 working days** to close the back-half coverage. Front-half (chapters 1-3) bar is met today.

## Notes for next auditor

This is the third "surprisingly solid" workout-generated file in the cluster (alongside `multivariableCalculus` and `linearAlgebra`). All three follow the same `q + miss` shape, all three have no `DEFAULT_FLAW`, all three are one-file architectures with simple wiring. The May 2026 audit's verdict holds. The shared author-pattern suggests these were generated together — auditing the missing fourth (calculus) confirms the same shape and bar in `calculusWorkoutGenerated.ts`. The pattern to replicate when authoring chapter 4 (oscillations) is exactly the format used in the existing file: 3-character chapter label, distinct misconception per distractor, short-but-pointed nudge.
