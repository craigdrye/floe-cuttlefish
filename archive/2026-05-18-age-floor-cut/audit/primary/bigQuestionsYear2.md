# Audit: bigQuestionsYear2

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_2.md`](../../../src/data/syllabi/primary/big_questions_year_2.md)
**Track id**: `philosophyYear2`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, KS1 PSHE) — not currently tagged

## Status flag inconsistency

Track entry in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) is `status: 'soon'`; `philosophyYear2` is populated with 50 generated questions wired through [`primary.ts`](../../../src/data/questionCatalog/primary.ts). **Promote to `playable`** — confirms May 2026 status-flag inconsistency flag.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Fair, Equal, and What People Need | Yes | "Fairness and Justice: Equal or needed" |
| 2. Courage, Fear, and Wise Choices | Yes | "Courage and Fear" — 2 blueprints |
| 3. Knowing, Believing, Guessing, and Checking | Yes | "Knowledge and Belief" — 2 blueprints |
| 4. Community and Helping Each Other | Yes | "Community and Difference: Community role" |
| 5. Difference, Respect, and Prejudice | Yes | "Community and Difference: Prejudice" |
| 6. Promises, Sorry, and Second Chances | Yes | "Fairness and Justice: Second chance" |
| 7. Imagination, Possibility, and Better Worlds | Yes | "Imagination and Possibility" — 2 blueprints |
| 8. Art, Choice, and Class Democracy | No | **Gap**: no art/voting/democracy items |

7 of 8 chapters mapped — strongest coverage in the Big Questions cluster. Chapter taxonomy collapses syllabus titles into broader Floe buckets.

## Per-file recommendations

| File | Y2 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear2`) | 50 (10 blueprints x 5 cycles) | **FIX** | Strong content: "Equal or needed" handles equity vs equality genuinely well for age 6-7; "Reckless or brave" distinguishes risk from courage cleanly; per-distractor explanations are specific and pedagogically useful. **No `DEFAULT_FLAW`**. But same Mia/Noor/Ava/Leo/Kim variant cycling as Year 1 — tonal whiplash flag confirmed. Cap cycles. Add Chapter 8. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | wraps in `topUp('philosophyYear2')` | **KEEP** | Aggregator-only. |

No `DEFAULT_FLAW` constant. No duplicate concept files. No silent US/UK assumptions in prompts (variants are jurisdiction-neutral).

## Open actions (priority order)

1. **Flip `status` to `playable`** in primary age catalog.
2. **Author 3-4 blueprints for Chapter 8 (Art, Choice, and Class Democracy)** — concepts of voting, majority/minority, "is this art?" are missing despite being a syllabus chapter and a memorable Year 2 highlight.
3. **Cap variant cycling** at 2 cycles (drop ~50 to ~20-25 questions). Same fix as Year 1.
4. **Rename chapters** to match syllabus ("Fair, Equal, and What People Need" not "Fairness and Justice"; "Promises, Sorry, and Second Chances" not buried in "Fairness and Justice").
5. **Region tag** — decide UK/jurisdiction-neutral.

## Estimated effort

- Status flip + chapter rename: ~30 min
- Chapter 8 blueprints: ~2 hours (3-4 items)
- Variant cap: ~30 min (helper change benefits cluster)
- Region tagging: ~15 min

**~3-4 hours.** Lowest effort in the Big Questions cluster because coverage is already strong.

## Notes for next auditor

Year 2 is the best-covered Big Questions year and a useful baseline for what the cluster *should* look like. The "Equal or needed" prompt ("Break both pencils so they are equal" as the equity-as-sameness misconception) is the kind of distractor that distinguishes a thoughtful primary philosophy item from a Hallmark moral platitude — preserve that voice. The cap-on-cycling fix is shared with Years 1, 3, 4, 5, 6 — apply once in `buildTrack`.
