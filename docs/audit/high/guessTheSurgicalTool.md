# Audit: guessTheSurgicalTool

**Syllabus**: [`src/data/syllabi/high/guess_the_surgical_tool.md`](../../../src/data/syllabi/high/guess_the_surgical_tool.md)
**Track id**: `guessTheSurgicalTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1084
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Cutting and grasping (scalpel, forceps) | ✅ | Both present |
| Control and exposure (hemostat, retractor) | ✅ | Both present |
| Closure and examination (suture needle, speculum) | ✅ | Both present |
| Access and suction (trocar, Yankauer) | ✅ | Both present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheSurgicalTool (L542–551) | 8 | **FIX** | Stems are appropriately sober for OR vocabulary; the syllabus's "no pretending to perform procedures" stance is reflected. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Rich real distinctions to surface: forceps vs hemostat (grasp vs locking clamp), retractor vs speculum (tissue vs cavity opening), trocar vs scalpel (puncture access vs incision). |

## Media wiring

Two SVG clue cards via `media()` mixing `tool` (hammer-like icon) and `lab` (flask icon) shapes — both off-category for surgical instruments. **No real instrument photos.** High-priority real-media swap.

## Open actions

1. Per-distractor rewrite (~30 min — strong contrast opportunities here).
2. **High priority:** real surgical instrument photos (silhouettes work well in this category).
3. Maintain syllabus's vocabulary-not-practice posture.

## Effort

~1 hour rewrite + media work.
