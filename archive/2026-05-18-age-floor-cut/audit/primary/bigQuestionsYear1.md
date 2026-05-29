# Audit: bigQuestionsYear1

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_1.md`](../../../src/data/syllabi/primary/big_questions_year_1.md)
**Track id**: `philosophyYear1`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, EYFS, PSHE references) — not currently tagged

## Status flag inconsistency

The track entry in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) is `status: 'soon'`, but the question bank `philosophyYear1` is populated (50 generated questions wired in [`primary.ts`](../../../src/data/questionCatalog/primary.ts) via `topUp`). **Promote to `playable`** — May 2026 audit flag confirmed across all six Big Questions years.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Wondering Together | Partial | Rolled up into "Thinking Skills" bucket |
| 2. Rules That Help | Yes | "Rules and Responsibility" — 2 blueprints |
| 3. Friendship and Belonging | Yes | "Friendship and Kindness" — 2 blueprints |
| 4. Feelings and Reasons | No | **Gap**: no questions about feelings, body clues, or reason-giving for emotions |
| 5. Truth, Mistakes, and Trust | Yes | "Truth and Honesty" — 2 blueprints |
| 6. Caring for Living Things | Yes | "The Natural World" — 2 blueprints |
| 7. Me, You, and What Makes Us Us | No | **Gap**: no identity/sameness items |
| 8. Good Reasons and Gentle Disagreement | Partial | "Thinking Skills: Respectful disagreement" covers it |

Only 5 of 8 chapters mapped. Chapter naming diverges from the syllabus (taxonomy mismatch).

## Per-file recommendations

| File | Y1 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear1`) | 50 (10 blueprints x 5 variant cycles) | **FIX** | Content is genuinely age-appropriate for Year 1 — concrete, kind, reasoned. Per-distractor explanations are present (good — no `DEFAULT_FLAW`). But the same 10 blueprints recycled through 5 variants (Mia/Noor/Ava/Leo/Kim) produces **tonal whiplash across sessions** — a child sees "Mia in the garden" then "Noor in the library" then "Leo at the rock pool" answering the *same* question with name swaps. May 2026 flag confirmed. Cap at 2-3 cycles or author distinct scenarios. Add chapters 4 and 7. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | wraps in `topUp('philosophyYear1')` | **KEEP** | Aggregator-only; out of audit scope. |

No other files feed this track. No `DEFAULT_FLAW` constant; distractor explanations are individually written. No US/UK silent assumptions in question text (variants are name-neutral).

## Open actions (priority order)

1. **Flip `status` to `playable`** in `primary.ts` age catalog — questions exist and are wired.
2. **Author 4-6 blueprints for Chapter 4 (Feelings and Reasons) and Chapter 7 (Identity)** — current bank misses two whole syllabus units.
3. **Cap variant cycling** at 2 instead of 5 (drop the question count from 50 to ~20-25). The tonal whiplash issue is real: same prompt with five different names reads like padding, and Year 1 children replay quickly.
4. **Rename chapter buckets** to match the syllabus exactly ("Rules That Help" not "Rules and Responsibility"; "Caring for Living Things" not "The Natural World").
5. **Region tag** the track `region: 'UK'` (P4C/SAPERE/EYFS framing) or rework to be jurisdiction-neutral for US-first launch.

## Estimated effort

- Status flip + chapter rename: ~30 min
- New blueprints for missing chapters: ~3 hours (5 blueprints x ~30 min including per-distractor work)
- Variant cap + cycle reduction: ~1 hour
- Region decision and tagging: ~30 min

**~5 hours total.** Cheap fix because the content quality is already good — the issue is structural (status, taxonomy, repetition).

## Notes for next auditor

The variant cycling pattern (`variants[cycle % variants.length]`) is shared across all six Big Questions years and all primary humanities tracks built from `buildTrack` in this file. The whiplash flag applies cluster-wide; fix the helper once and every year benefits. Same goes for the chapter-naming drift — the syllabi use distinctive titles ("Truth, Mistakes, and Trust") that get smoothed into generic buckets ("Truth and Honesty") in the bank.
