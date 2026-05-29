# Audit: bigQuestionsYear3

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_3.md`](../../../src/data/syllabi/primary/big_questions_year_3.md)
**Track id**: `philosophyYear3`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, UNCRC, KS2 PSHE, Common Sense media literacy) — not tagged

## Status flag inconsistency

`status: 'soon'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts); `philosophyYear3` exports 50 generated questions wired in [`primary.ts`](../../../src/data/questionCatalog/primary.ts). **Promote to `playable`**. May 2026 status inconsistency flag confirmed.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Rights, Needs, and Responsibilities | Yes | "Rights and Responsibilities" — 2 blueprints |
| 2. Fair Choices for the Planet | Yes | "Environment and Our Choices" — 2 blueprints (individual action, trade-off) |
| 3. History, Memory, and Stories | Yes | "History, Memory and Stories" — 2 blueprints (myth vs fact, perspective) |
| 4. Power, Rules, and Authority | Yes | "Power and Authority" — 2 blueprints (legitimate authority, rule vs law) |
| 5. Truth, Evidence, and Checking | No | **Gap**: no items on rumours, source reliability, fact/opinion sorting |
| 6. Loyalty, Honesty, and Hard Choices | Yes | "Complex Moral Reasoning: Loyalty or honesty" |
| 7. Community, Belonging, and the Common Good | No | **Gap**: no community-belonging-common-good items at the Year 3 level |
| 8. Building Better Arguments | No | **Gap**: no claim/reason/example/counterexample structure items |

5 of 8 chapters covered. The three gaps (truth-checking, community, argument construction) are core Year 3 skills.

## Per-file recommendations

| File | Y3 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear3`) | 50 (10 blueprints x 5 cycles) | **FIX** | Content quality is solid for age 7-8. "Myth or fact" with the talking-animal-built-a-bridge correct answer is age-appropriate and well-distractored. "Bystander responsibility" is genuinely useful philosophy. Per-distractor explanations specific, no `DEFAULT_FLAW`. Issues: same variant-cycling tonal whiplash as Years 1-2 (Mia/Noor/Ava/Leo/Kim); three syllabus chapters uncovered. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | `topUp('philosophyYear3')` | **KEEP** | Aggregator-only. |

## Open actions (priority order)

1. **Flip `status` to `playable`**.
2. **Author blueprints for Chapter 5 (Truth/Evidence/Checking), Chapter 7 (Community/Common Good), Chapter 8 (Building Better Arguments)** — ~6-9 new blueprints to close the gaps. Chapter 8 in particular needs explicit claim/reason/example structure items since the syllabus makes that the year's central skill.
3. **Cap variant cycling** at 2 cycles (cluster-wide helper change).
4. **Rename chapter buckets** to match the syllabus.
5. **Region tag** — UNCRC framing is global, but PSHE references are UK-specific; decide.

## Estimated effort

- Status flip + chapter rename: ~30 min
- Three chapters of new blueprints: ~4-5 hours (8 items x ~30 min)
- Variant cap (shared helper): ~30 min
- Region tagging: ~15 min

**~6 hours.** Largest authoring effort in the Year 1-3 band because Year 3 has three uncovered chapters and the "Building Better Arguments" chapter introduces formal structure that the current bank does not teach.

## Notes for next auditor

The "Bystander responsibility" item is a standout — it's the kind of question that justifies a philosophy track for primary at all, not just civics-by-another-name. Preserve that voice when authoring the missing chapters. The Year 3 syllabus is the first to explicitly demand claim/reason/example/counterexample structure; the question bank does not yet teach that skill — it tests applied reasoning instead. That gap is real and should be a priority new-authoring target, not a polish item.
