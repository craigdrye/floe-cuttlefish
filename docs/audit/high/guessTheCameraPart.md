# Audit: guessTheCameraPart

**Syllabus**: [`src/data/syllabi/high/guess_the_camera_part.md`](../../../src/data/syllabi/high/guess_the_camera_part.md)
**Track id**: `guessTheCameraPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 916
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Optics (lens, aperture) | ✅ | Lens + aperture questions |
| Exposure (shutter, aperture) | ✅ | Shutter + aperture |
| Viewing and recording (viewfinder, sensor) | ✅ | Both present |
| Accessories and storage (hot shoe, card slot, tripod) | ✅ | Hot shoe + memory card slot + tripod socket |

Clean 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheCameraPart (L388–397) | 8 | **FIX** | Stems are well-targeted and pedagogically sound; chapter taxonomy matches the syllabus. **Per-distractor explanations come from the shared `q()` template** — every wrong answer is `"<label> is a plausible distractor, but it does not match the key clue in this prompt."` This is a **DEFAULT_FLAW pattern**. Needs per-distractor rewrites (e.g. *"Shutter controls time, not light volume"* for an aperture stem). |

## Media wiring

Two stylized SVG data-URL clue cards per question via `media()` with the `camera` shape. **Inline cartoons only — no real camera/lens photos.** Acceptable scaffolding; doesn't yet meet "visual ID" promise.

## Open actions

1. Rewrite the 8 wrong-answer explanations per-distractor (~30 min).
2. Source labeled photos or diagrams (front element, sensor stack, viewfinder pentaprism) to upgrade visual-ID experience.
3. Optional: split aperture into its own "depth of field" expert question.

## Effort

~1 hour rewrite. Solid foundation, only distractor explanations and real media missing.
