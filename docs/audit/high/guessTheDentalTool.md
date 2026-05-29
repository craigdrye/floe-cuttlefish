# Audit: guessTheDentalTool

**Syllabus**: [`src/data/syllabi/high/guess_the_dental_tool.md`](../../../src/data/syllabi/high/guess_the_dental_tool.md)
**Track id**: `guessTheDentalTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1192
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Seeing and probing (mirror, explorer) | ✅ | Both present |
| Cleaning and gumline (scalers, curettes) | ✅ | Both present |
| Fluid control (air-water syringe, saliva ejector) | ✅ | Both present |
| Support and handling (cotton pliers, bite blocks) | ✅ | Both present |

Perfect 1:1 syllabus coverage with no padding.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheDentalTool (L641–650) | 8 | **FIX** | Stems are appropriately sober for a clinical-vocabulary course, lesson lines maintain the right "literacy not diagnosis" posture (syllabus is explicit about this). **Per-distractor explanations are template-synthesized by `q()`** — every wrong answer reads `"<label> is a plausible distractor..."` — the **DEFAULT_FLAW pattern**. Needs per-distractor rewrites that distinguish explorer (point) vs scaler (hook) vs curette (rounded). |

## Media wiring

Two SVG clue cards via `media()` mixing `lab` and `tool` shapes. **No real dental tool photos.** Cartoon-only scaffolding; for a clinical literacy course, real instrument photos would meaningfully raise quality.

## Open actions

1. Per-distractor rewrite (~30 min) — surface real visual/functional differences between probing, scaling, and grasping instruments.
2. Source real dental tool images (especially curette vs scaler tip silhouettes — the most confused pair).
3. Maintain syllabus's "no diagnosis" framing in any new content.

## Effort

~1 hour rewrite.
