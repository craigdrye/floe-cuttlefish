# Audit: apCalculus

**Syllabus**: [`src/data/syllabi/high/ap_calculus.md`](../../../src/data/syllabi/high/ap_calculus.md)
**Track id**: `apCalculus` (also a parallel `col-ap-calculus` shadow track — see below)
**Tier**: high (year 12)
**Region**: US (College Board content; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Limits, Continuity, and the Language of Change | ✅ | 4 hand items in `highAdvanced.ts` + `calculusWorkoutGenerated` limits/continuity bank |
| 2. Derivative Meaning and Rules | ✅ | Hand items (derivative intuition, chain rule) + workout power/product/quotient/chain coverage |
| 3. Differentiation Applications | ✅ | Concavity hand item + workout optimization/related-rates set |
| 4. Integration and Accumulation | ✅ | Definite-integral hand item + workout FTC and Riemann coverage |
| 5. Integration Techniques and Applications | ⚠️ | Light: workout covers substitution and area; weak on volumes by disks/washers and BC-only techniques |
| 6. Differential Equations and Modeling | ⚠️ | Workout coverage thin; no slope-field items found |
| 7. BC Extensions (parametric, polar, vectors, series) | ❌ | Not in `apCalculus`. `apCalculusBcNumbasBatch.ts` exists but is wired to **university** `apCalculusBc`, not HS |
| 8. AP Calculus Exam Studio (FRQ scoring, justifications) | ❌ | No FRQ-style or justification items |

**Chapter-taxonomy mismatch.** Hand items use whimsical chapter labels ("AP Calculus Pier/Reef/Dock/Lagoon") rather than the syllabus's Chapter 1–8 names. The workout file uses topic labels ("Limits", "Derivatives") that don't map cleanly either.

**Routing mismatch.** The syllabus header reads `Covers: col-ap-calculus`. That track ID exists in the age catalog (line 1818) but is **not** wired to `highAdvanced.ts` — it falls through to `highGenerated.ts` (the procedural blueprint generator). End-users opening "AP Calculus" from the collection list get templated `${chapter} ${variant}` questions, not the hand items below.

## Per-file recommendations

| File | Items for apCalculus | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (apCalculus block, lines 116–150) | 4 hand items | **KEEP** | Clean per-distractor explanations, sober AP tone, correct concept anchors. Small but solid. |
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts) | ~91 (full file appended) | **FIX** | Strong per-distractor coverage of limits, derivatives, applications, integrals. Chapter labels need alignment to the eight syllabus chapter names; no BC content; reused boilerplate `lesson` line is generic. |
| [`apCalculusBcNumbasBatch.ts`](../../../src/data/questionCatalog/apCalculusBcNumbasBatch.ts) | 0 for HS | **KEEP (university)** | Confirmed: wired only to `apCalculusBc` in `universityCollege.ts:87`. Not orphaned globally, but **does not feed HS apCalculus**. Leave it where it is; flag the absence of BC content on the HS side. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `calculusBlueprints()` | up to 50 via top-up | **FIX (procedural generator)** | Six fixed blueprints recycled with a `variant` counter produce chapter labels like "Limits and Continuity 1", "Related Rates 2". Per the May 2026 audit guidance, flag generator usage: keep as emergency floor, but do not let it stand in for hand-authored AP coverage. The hand-authored `highBuilders.ts` `makeColCalculusABQuiz` (chapter "Unit 1–9") is the gold standard model. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColCalculusABQuiz` / `makeColCalculusBCQuiz` | not wired to `apCalculus` | **MERGE → apCalculus** | These hand-authored AB and BC banks (chapters Unit 1–9 / Unit 1–11) exist but feed only the (mis-routed) college tracks. They should be the primary source for HS apCalculus too. |

## Open actions (priority order)

1. **Resolve the `apCalculus` vs `col-ap-calculus` routing.** Either wire `col-ap-calculus` to the hand-authored AB bank in `highBuilders.ts` (preferred — matches the syllabus header), or delete the redundant `col-ap-calculus` track.
2. **Author 6–8 FRQ-style justification items** for Chapter 8 (Exam Studio). Voice template: `highBuilders.ts`.
3. **Add slope-field and Euler-method items** for Chapter 6.
4. **Add a BC extension subset** (parametric derivative, polar area, simple series convergence) by lifting selected items from `highBuilders.ts:makeColCalculusBCQuiz`.
5. **Re-label workout chapters** to the eight syllabus chapter names.
6. **Tag `region: 'US'`** on the track entry.

## Estimated effort

- Routing fix: ~1 hour
- 6–8 FRQ items + 4 slope-field items + 4 BC extension items: ~5 hours
- Chapter rename across `calculusWorkoutGenerated.ts`: ~1 hour

## Notes for next auditor

The `apCalculusBcNumbasBatch` and `apEnvironmentalScience*` files are not orphaned, but they are **out of cluster** — both feed university tracks, not HS. The May 2026 audit's "orphan" claim should be updated: they have homes, just not in HS. The real orphan smell is in the other direction — HS `apCalculus` is starving for content because the hand-authored builders are pointed at college tracks.
