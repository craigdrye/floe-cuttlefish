# Audit: guessTheMachineShopTool

**Syllabus**: [`src/data/syllabi/high/guess_the_machine_shop_tool.md`](../../../src/data/syllabi/high/guess_the_machine_shop_tool.md)
**Track id**: `guessTheMachineShopTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1120
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Measuring (calipers, micrometers) | ✅ | Both present |
| Machines (lathes, drill presses) | ✅ | Both present |
| Cutting (end mills, taps, reamers) | ✅ | All three present |
| Work holding (bench vises) | ✅ | Bench vise present |

Excellent 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheMachineShopTool (L575–584) | 8 | **FIX** | Stems are technically accurate and well-pitched for shop literacy without assuming access; chapter taxonomy matches the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Real opportunities for distractor rigor here: caliper vs micrometer (precision tier), end mill vs drill bit (side-cutting vs end-cutting), tap vs die (internal vs external thread). |

## Media wiring

Two SVG clue cards via `media()` mixing `tool` and `part` shapes. **No real shop-tool photos.** Caliper and micrometer in particular would benefit from real images — their physical differences are highly diagnostic.

## Open actions

1. Per-distractor rewrite (~45 min — these distractors have especially rich real-world contrasts worth surfacing).
2. Source real photos for caliper, micrometer, end mill, and tap.
3. Optional: add a chamfering/deburring expert question.

## Effort

~1 hour rewrite. Strong technical foundation.
