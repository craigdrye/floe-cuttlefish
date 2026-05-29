# Audit: apCalculusBc

**Syllabus**: [`src/data/syllabi/university/ap_calculus_bc.md`](../../../src/data/syllabi/university/ap_calculus_bc.md)
**Track id**: `apCalculusBc`
**Tier**: university
**Region**: US (AP credential — jurisdiction-specific; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. AB Core Refresh | yes | Inherited via `calculusWorkoutGeneratedQuestions` shared with AB |
| 2. Derivative Applications at BC Pace | yes | Same shared bank — fine for BC |
| 3. Integration, Accumulation, Advanced Techniques | partial | By-parts covered conceptually; partial fractions, trig sub missing |
| 4. Differential Equations and Numerical Approximation | partial | Slope fields/separable yes; Euler's method, logistic absent |
| 5. Applications of Integration | partial | Average value present; arc length, shells not drilled |
| 6. Parametric, Polar, Vector-Valued | yes | `apCalculusBcNumbasBatch.ts` covers parametric slope, polar area, vector speed |
| 7. Sequences, Series, Convergence | yes | Strong coverage: geometric, p-series, nth-term, alternating, ratio implied |
| 8. Power Series, Taylor Series, BC Exam Studio | yes | Maclaurin for e^x, radius of convergence, ratio test |

## Per-file recommendations

| File | BC Q's | Bucket | Reason |
|---|---|---|---|
| [`apCalculusBcNumbasBatch.ts`](../../../src/data/questionCatalog/apCalculusBcNumbasBatch.ts) | 10 | **KEEP** | Per-distractor explanations + nudges, BC-specific content (Taylor series, parametric slope, polar area, vector speed, improper integrals). No `DEFAULT_FLAW`. Small but high-signal. |
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts) | 50 (shared) | **KEEP** | See `apCalculusAB.md` — "surprisingly solid" per May 2026 audit, confirmed. Has 5 sequences/series + parametric/polar items already inside it; the BC-specific topics duplicate `apCalculusBcNumbasBatch.ts` on geometric series, p-series, nth-term test. |
| [`universityBuilders.ts`](../../../src/data/questionCatalog/universityBuilders.ts) `makeColCalculusBCQuiz` | ~24 | **KEEP** | AP-Unit-aligned scaffolded format like the AB equivalent. Likely the canonical source. |
| [`numbasWebworkMath*`](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) calculus bundles | unknown | **FIX** | Shared with AB. Spot-check that BC-specific advanced integration items survived the import diagram strip. |

**Duplicate concept overlap** between `calculusWorkoutGenerated.ts` and `apCalculusBcNumbasBatch.ts`: both cover geometric series (a/(1-r)), p-series convergence (p > 1), and nth-term divergence test. Pick one canonical bank for those three concepts, keep both for everything else. No `DEFAULT_FLAW` in any BC-routed file.

## Cross-cluster flags

- **Math notation**: ASCII throughout (`sum (x-2)^n / 3^n`, `1 + x + x^2/2! + ...`). Renderer is plain text. Consistent.
- **Region tag missing**: US-only credential, should carry `region: 'US'`.
- The `apCalculusBc` casing matches one convention; pair with `apCalculusAb` if normalising (currently AB is uppercase, BC is lowercase — inconsistent).

## Open actions (priority order)

1. **Author 6–8 advanced-technique items**: partial fractions, trig substitution, logistic equations, Euler's method. These are BC-specific gaps. Voice template: `apCalculusBcNumbasBatch.ts`.
2. **Author 4–6 arc length / shell / cross-section integral set-up items** (chapter 5).
3. **Dedupe the 3 overlapping series concepts** between `calculusWorkoutGenerated.ts` and `apCalculusBcNumbasBatch.ts` — keep the BC-Numbas versions, drop from the shared workout file (or vice versa).
4. **Add `region: 'US'` and normalise casing** in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).
5. **Verify the `makeColCalculusBCQuiz` chapter labels match the syllabus's 8-unit structure** (sample showed them aligned for AB; spot-check BC).

## Estimated effort

- Advanced technique authoring: ~4 hours (8 items × 30 min)
- Arc length / shells: ~2 hours
- Dedupe and tagging: ~1 hour

**~1 working day** to close BC-specific gaps. Quality bar already met by every routed file.

## Notes for next auditor

BC inherits all of AB's banks, then layers `apCalculusBcNumbasBatch.ts` (BC-only) on top. This is the right architecture, but the dedup needed for the three shared series concepts is real — the same student sees the same question twice if both banks load. Worth a quick taxonomic pass before more authoring. Both BC and AB also share whichever numbas/webwork calculus bundle was imported — read that file carefully when auditing — its diagram-stripped imports may be the silent quality hole in both tracks.
