# Audit: apCalculusAB

**Syllabus**: [`src/data/syllabi/university/ap_calculus_ab.md`](../../../src/data/syllabi/university/ap_calculus_ab.md)
**Track id**: `apCalculusAB`
**Tier**: university
**Region**: US (AP is a College Board credential — jurisdiction-specific; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Limits and Continuity | yes | `calculusWorkoutGenerated.ts` has 5 items + universityBuilders quiz Unit 1 |
| 2. Differentiation: Definition & Fundamental Rules | yes | 9 items in workout (power, product, quotient, trig, exp, log) |
| 3. Composite, Implicit, Inverse | partial | Chain rule covered; implicit/inverse thin |
| 4. Contextual Applications | partial | Tangent slope, related rates, linear approx present; L'Hospital missing |
| 5. Analytical Applications | yes | Critical points, sign tests, optimization setup, second derivative |
| 6. Integration and Accumulation | yes | Antiderivatives, FTC, u-sub, average value, by-parts intuition |
| 7. Differential Equations | yes | Separable form, slope fields, initial conditions |
| 8. Applications of Integration / FRQ | partial | Area/volume not deeply drilled; no FRQ-style multi-part items |

The chapter labels in `calculusWorkoutGenerated.ts` ("Limits", "Derivatives", "Integrals") flatten the syllabus's 8-unit AP taxonomy. Unit numbering would help downstream FRQ rubrics.

## Per-file recommendations

| File | AP-AB Q's | Bucket | Reason |
|---|---|---|---|
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts) | 50 (covers AB+BC) | **KEEP** | **Confirms May 2026 audit's "surprisingly solid" call.** Every distractor has a real per-distractor "why wrong" and a separate hint nudge. No `DEFAULT_FLAW`. Hand-graded miss explanations target specific calculus misconceptions ("That is an antiderivative pattern", "That doubles the correct slope"). Highest quality math file in the catalog. |
| [`universityBuilders.ts`](../../../src/data/questionCatalog/universityBuilders.ts) `makeColCalculusABQuiz` | ~24 | **KEEP** | Structured per-AP-Unit format with setup/prompt/fieldNote/mentorHint scaffolding. Chapter labels exactly match the College Board unit names — this should be the canonical chapter taxonomy. |
| [`numbasWebworkMathImported.ts` calculus bundles + Additional + Third](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) | unknown (3 batches) | **FIX** | Imported with hand-authored distractor explanations (good), but the lesson string warns that diagrams/applets were dropped. Spot-check for orphaned references to images that no longer render. |

No `DEFAULT_FLAW` in any AP-AB-routed file. Wiring at `universityCollege.ts:62`.

## Cross-cluster flags

- **Math notation**: renderer is plain text — no KaTeX/MathJax dependency in the codebase. The catalog already uses ASCII (`x^2`, `sqrt`, `pi`, `lim x->2`). Consistent. No mismatch.
- **Region tag missing**: the AP brand is US-only. Should carry `region: 'US'` and a "AP Calculus AB exam-aligned" subtitle for non-US readers.
- The `apCalculusAB` (camelCase capital "AB") id breaks the convention used everywhere else in `university.ts` (`apCalculusBc` is camelCase). Worth normalising to `apCalculusAb`.

## Open actions (priority order)

1. **Add `region: 'US'`** to the track in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).
2. **Renumber chapters** in `calculusWorkoutGenerated.ts` to match AP Units 1–8 so coverage maps stay legible.
3. **Author 6–8 FRQ-style multi-part items** (chapter 8) — current bank is all single-prompt MCQ. AP exam reality requires "set up the integral, then interpret, then estimate" style.
4. **Add implicit-differentiation and inverse-function-derivative drills** (chapter 3 gap).
5. **Normalise id to `apCalculusAb`** across `university.ts` and `universityCollege.ts:62`.

## Estimated effort

- Region tag + id normalisation: ~30 min
- Chapter renumber: ~1 hour
- FRQ authoring: ~4 hours (8 items × ~30 min — multi-part takes longer)
- Implicit/inverse drills: ~2 hours

**~1 working day to close gaps**, but unlike most courses this track does NOT need a quality pass — `calculusWorkoutGenerated.ts` already meets the bar.

## Notes for next auditor

This is one of the few tracks where the workout-generated file is the gold standard, not the problem. The same `q + miss` shape and the per-distractor-explanation discipline used here is the model that the `*WorkoutGenerated.ts` cluster (linear algebra, multivariable, differential equations, statistics reasoning, college algebra) follows. Audit those together — they share an author voice and likely a single generation pass.
