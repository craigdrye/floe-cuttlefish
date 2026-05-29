# Audit: guessTheLabGlassware

**Syllabus**: [`src/data/syllabi/high/guess_the_lab_glassware.md`](../../../src/data/syllabi/high/guess_the_lab_glassware.md)
**Track id**: `guessTheLabGlassware`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 952
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Holding and mixing (beakers, Erlenmeyer flasks) | ✅ | Both present |
| Measuring volume (graduated cylinders, volumetric flasks) | ✅ | Both present |
| Small samples and transfer (test tubes, pipettes) | ✅ | Both present |
| Titration and evaporation (burettes, watch glasses) | ✅ | Both present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheLabGlassware (L421–429) | 8 | **FIX** | Stems are accurate and pitched well for early lab literacy; lesson lines correctly emphasize precision tiers (beaker rough, graduated cylinder better, volumetric flask exact). **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. The precision hierarchy is the most teachable concept and is currently underexploited in distractor reasons. |

## Media wiring

Two SVG clue cards via `media()` with the `lab` shape (stylized flask). **All 8 questions get the same flask icon** with different captions — the visual-ID promise barely holds. Real silhouettes of each shape would solve this for ~zero pedagogical risk (these objects are visually unambiguous).

## Open actions

1. Per-distractor rewrite emphasizing precision tier and shape function (~30 min).
2. **High priority:** swap to real glassware silhouettes/photos — eight distinct items rendered as the same icon is the worst visual-ID match in the cluster.

## Effort

~1 hour rewrite + media swap.
