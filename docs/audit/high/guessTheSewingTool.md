# Audit: guessTheSewingTool

**Syllabus**: [`src/data/syllabi/high/guess_the_sewing_tool.md`](../../../src/data/syllabi/high/guess_the_sewing_tool.md)
**Track id**: `guessTheSewingTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1180
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Cutting and opening seams (fabric shears, rotary cutters, seam rippers) | ✅ | All three present |
| Measuring and marking (tape measure, tailor's chalk) | ✅ | Both present |
| Hand sewing helpers (thimbles, needle threaders) | ✅ | Both present |
| Machine basics (bobbins) | ✅ | Bobbin present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheSewingTool (L630–639) | 8 | **FIX** | Stems are clear, accurate, and gently practical ("shears not on paper" is a nice culture-of-craft touch in the lesson line); chapter names match the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Real distinctions worth surfacing: fabric shears vs pinking shears (zigzag edge), bodkin vs awl. |

## Media wiring

Two SVG clue cards via `media()` with the generic `tool` shape. **No real sewing-tool photos.** Tools here are very visually distinctive in reality (rotary cutter, thimble, bobbin) — real images would meaningfully upgrade the experience.

## Open actions

1. Per-distractor rewrite (~30 min).
2. Source real images, especially for bobbin (very recognizable, otherwise abstract).
3. Optional: add an iron / pressing tool question — pressing is conspicuously absent from the syllabus and bank.

## Effort

~1 hour rewrite.
