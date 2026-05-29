# Audit: guessTheKitchenTool

**Syllabus**: [`src/data/syllabi/high/guess_the_kitchen_tool.md`](../../../src/data/syllabi/high/guess_the_kitchen_tool.md)
**Track id**: `guessTheKitchenTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 796
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Prep (microplane, mandoline) | ✅ | Both present |
| Mixing and serving (whisk, ladle) | ✅ | Both present |
| Heat and draining (spider strainer, tongs) | ✅ | Both present |
| Baking (bench scraper, offset spatula) | ✅ | Both present |
| Safety: sharp tools, hot liquid | ❌ | No explicit safety-framed question |

Five chapters, eight slots — safety isn't its own question.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheKitchenTool (L278–287) | 8 | **FIX** | Stems are tight and pedagogically clear; chapter taxonomy matches the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Lesson lines occasionally note safety (mandoline) but distractor explanations don't capitalize on real confusions (microplane vs box grater grit). |

## Media wiring

Two SVG clue cards via `media()` with the `kitchen` shape (stylized whisk/spoon icon). **No real kitchen tool photos.** Adequate scaffolding for prototype; not enough for credible visual-ID.

## Open actions

1. Per-distractor rewrite (~30 min).
2. Add a "sharp tools / hot liquid" safety question to close Chapter 5 (~15 min).
3. Source real photos — especially bench scraper vs offset spatula vs fish spatula, where shape clues matter.

## Effort

~1.5 hours rewrite + new question.
