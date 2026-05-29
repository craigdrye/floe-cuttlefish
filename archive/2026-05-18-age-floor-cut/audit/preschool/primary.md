# Audit: primary (Primary Foundations)

**Syllabus**: [`src/data/syllabi/preschool/primary_foundations.md`](../../../src/data/syllabi/preschool/primary_foundations.md)
**Track id**: `primary`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral syllabus (EYFS/EYLF/NAEYC/Common Core referenced); current 4 questions are also neutral.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Welcome to Our Learning Day | ❌ | No questions on arrival routines / "first-next-then." |
| 2. Listening, Speaking, and Story Sharing | ⚠️ partial | The 4th hand-authored Q ("Mia packed a coat") is a Year-2-grade reading inference, not a preschool listening task. |
| 3. Marks, Letters, and Names | ❌ | No phonics or name-recognition items. |
| 4. Counting With Bodies and Objects | ⚠️ partial | Q1 (compare 3/4 vs 1/2 vs 2/5 vs 1/3) is mid-primary fractions, not preschool subitising. |
| 5. Shapes, Patterns, and Spatial Words | ⚠️ partial | Q2 (doubling 2,4,8,16) is a Year-3+ multiplicative pattern, well above preschool AB/ABB sorting. |
| 6. Moving, Drawing, and Fine-Motor Confidence | ❌ | Not addressable in MCQ form; needs different schema. |
| 7. Friends, Feelings, and Classroom Choices | ❌ | None. |
| 8. Curious Questions About the World | ⚠️ partial | Q3 (evaporation puddle) is solid early-science but is Year-3-level vocab ("evaporation", "precipitation"). |

**Status flag**: track is `status: 'playable'` in `primary.ts` (line 8) with **4 hand-authored questions wired**. Syllabus chapter coverage: 0/8 properly aged.

## Per-file recommendations

| File | Q's for `primary` | Bucket | Reason |
|---|---|---|---|
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) lines 178-211 | 4 | **FIX → MERGE** | Each Q has hand-authored per-distractor explanations (good model), but the **reading level is wrong for ages 3–5**. The fraction-comparison, doubling-pattern, and evaporation prompts belong in `class3Math` / `class4Math` / `scienceYear3`. Move them, then re-author 4–8 genuine preschool prompts (subitising 1–5, AB pattern next-step, shape-name match, big/small comparison). |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) | 0 | **n/a** | Builder file is unused by `primary` track. Naming is misleading — it produces `col-Nth-grade-math` content, not preschool foundations. |
| [`buildKolibriQuestionCatalog`](../../../src/data/questionCatalog/kolibri.ts) | spread `...buildKolibriQuestionCatalog()` (line 212) | **NOISE** | Kolibri export overlays *all* its keys, but it produces no `primary` track entry, so it has no effect here. Not a fix item; flag for the larger primary-tier audit. |

**Cross-cutting flag**: the 4 in-file Q's are tonally fine ("Number Reef", "Logic Lagoon") but factually preschool-inappropriate. No `DEFAULT_FLAW` constant — explanations are bespoke. This is the only preschool track with any hand-authored content at all.

## Open actions (priority order)

1. **Decide identity of `primary` track**. The syllabus is genuine preschool/EYFS. The current 4 questions are mid-primary. Pick one: either (a) rewrite the 4 Q's as ages-3–5 prompts and keep this as the canonical preschool "school readiness" bank, or (b) demote the track to `status: 'soon'` and migrate the 4 Q's to age-appropriate primary tracks.
2. **If keeping (recommended)**: author 24–40 preschool MCQs across chapters 1–5 and 7–8 (3–5 per chapter). Voice template: light, concrete, one-step. Subitising, name-letter matching, shape ID, AB-pattern next, big-small comparison, weather-clothes pairing, feeling-face naming.
3. **Schema gap**: chapters 3 (mark-making), 6 (fine-motor) cannot be assessed via text MCQ at all. Either drop from in-app coverage and treat as adult-facilitator-only, or extend schema to support picture-choice prompts (see `socialEmotionalLearning` audit).
4. **Mark as the canonical preschool track** in the age catalog (already discipline: Academics, ageGroup: preschool) — once content is real.

## Estimated effort

- Migrate the existing 4 Q's: ~30 min.
- Author 32 preschool Q's (~20 min each): ~10 hours.
- Schema extension for image prompts: 1–2 days.

**~2 days** to make `primary` a real playable preschool track.

## Notes for next auditor

`primary` is the only preschool track with any hand-authored questions today; everything else in the cluster is pure scaffolding. The 4 Q's here are also the only ones that meet the per-distractor quality bar — but they're the wrong age. Treat as a tiny salvage + large authoring job, not a delete.
