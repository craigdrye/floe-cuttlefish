# Audit: guessTheMicroscopePart

**Syllabus**: [`src/data/syllabi/high/guess_the_microscope_part.md`](../../../src/data/syllabi/high/guess_the_microscope_part.md)
**Track id**: `guessTheMicroscopePart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1132
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Viewing & magnification (eyepiece, objective lenses) | ✅ | Both present |
| Slide support (stage, clips) | ✅ | Stage present; clip named as distractor |
| Light control (condenser, diaphragm) | ✅ | Both present |
| Focusing & switching power (coarse focus, fine focus, nosepiece) | ✅ | All three present |

Excellent 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheMicroscopePart (L586–595) | 8 | **FIX** | Stems are accurate and well-paced — they walk the student down a real microscope. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. The biggest pedagogical wins are in distinguishing condenser vs diaphragm (focus vs amount of light) and coarse vs fine focus (when to use which) — currently silent in distractor reasons. |

## Media wiring

Two SVG clue cards via `media()` mixing `lab` and `part` shapes — neither resembles a microscope. **No real microscope diagrams.** A single labeled microscope diagram referenced across all 8 questions would be a meaningful upgrade.

## Open actions

1. Per-distractor rewrite (~30 min — there are genuine "which knob first" and "what changes" answers worth teaching).
2. Add a labeled microscope diagram as shared media — natural fit for this track specifically.

## Effort

~1 hour rewrite.
