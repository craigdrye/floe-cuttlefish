# Audit: bigQuestionsYear4

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_4.md`](../../../src/data/syllabi/primary/big_questions_year_4.md)
**Track id**: `philosophyYear4`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, UNCRC, KS2 PSHE, Common Sense media literacy) — not tagged

## Status flag inconsistency

`status: 'soon'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts); `philosophyYear4` exports 50 questions wired through [`primary.ts`](../../../src/data/questionCatalog/primary.ts). **Promote to `playable`** — May 2026 flag confirmed.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Intentions, Outcomes, and Repair | Yes | "Ethics and Intentions" — 2 blueprints (intentions/outcomes, hard kindness) |
| 2. Fairness, Equality, and Need | No | **Gap**: Year 3 covers fairness; Year 4 should add equity/access, but the bank only has "Wealth and Poverty: Needs and wants" which is Chapter 4 |
| 3. Truth, News, and Media | Yes | "Truth and Media" — 2 blueprints (reliable source, bias) |
| 4. Wealth, Poverty, and Helping Well | Yes | "Wealth and Poverty" — 2 blueprints (charity vs justice, needs vs wants) |
| 5. Freedom, Safety, and Shared Rules | Yes | "Human Nature and Society: Freedom and security" |
| 6. Human Nature and Cooperation | Yes | "Human Nature and Society: State of nature" |
| 7. Art, Beauty, and Value | Yes | "Art, Beauty and Value" — 2 blueprints (what counts as art, subjective beauty) |
| 8. Stronger Arguments and Open Minds | No | **Gap**: no explicit counterexample/argument-map items |

6 of 8 chapters mapped. Notable: the syllabus calls fairness/equity Chapter 2 of Year 4 — building on Year 3's fairness work — but the question bank treats fairness as "done in Year 3" and skips ahead.

## Per-file recommendations

| File | Y4 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear4`) | 50 (10 blueprints x 5 cycles) | **FIX** | Highest-quality philosophy items in the cluster so far. "Charity or justice" is a genuinely sophisticated short-term/structural distinction at age 8-9. "Bias" (reviewer owns competing place) is a real-world media literacy scenario. "State of nature" is age-appropriately introduced. Per-distractor explanations specific. No `DEFAULT_FLAW`. Issues: variant-cycling whiplash; 2 chapters uncovered; "subjective beauty" item is starting to drift toward Year 5-6 abstraction. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | `topUp('philosophyYear4')` | **KEEP** | Aggregator-only. |

## Open actions (priority order)

1. **Flip `status` to `playable`**.
2. **Author blueprints for Chapter 2 (Fairness/Equality/Need) and Chapter 8 (Stronger Arguments)** — ~5-7 items. Chapter 2 should add equity (extra support for some), not repeat Year 3 fair-vs-equal basics; Chapter 8 should teach counterexample tests and argument revision.
3. **Cap variant cycling** at 2 cycles.
4. **Rename chapter buckets** to syllabus.
5. **Region tag**.

## Estimated effort

- Status flip + rename: ~30 min
- Two chapters new blueprints: ~3 hours
- Variant cap (shared helper): ~30 min
- Region tag: ~15 min

**~4 hours.**

## Notes for next auditor

Year 4 is where the bank starts demonstrating that the underlying authoring quality is high — "charity vs justice" and "bias from competing interest" are well-written. The contrast with the Year 5/6 over-reach (see those audits) is striking: when the bank stays close to concrete dilemmas it works, when it reaches for AI rights and epistemology it doesn't. This is a pattern to preserve as new authoring fills the gaps.
