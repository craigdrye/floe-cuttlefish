# Audit: guessTheElectricalPart

**Syllabus**: [`src/data/syllabi/high/guess_the_electrical_part.md`](../../../src/data/syllabi/high/guess_the_electrical_part.md)
**Track id**: `guessTheElectricalPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 736
**Region**: **soft US lean.** "GFCI" is a US/Canada term (UK uses RCD; EU uses RCBO). "Outlet receptacle" and "breaker" are US-flavored vs UK "socket"/"MCB". Not blocking, but worth a `region: 'US'` tag or terminology-bridging.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Switches and outlets | ✅ | Toggle switch + outlet receptacle |
| Breakers and GFCI protection | ✅ | Circuit breaker + GFCI |
| Wire connectors and grounding | ✅ | Wire nut + ground wire |
| Boxes and conduit | ✅ | Junction box + conduit |
| Safety clues / what a part is for | ⚠ | Embedded in lesson lines but no dedicated safety question |

Five chapters, eight questions — safety isn't its own question but is well-threaded through lessons.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheElectricalPart (L223–231) | 8 | **FIX** | Stems are accurate and respect the syllabus's "literacy not DIY live work" stance. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Particularly worth fixing for GFCI vs standard outlet (the visible test/reset buttons are the giveaway and worth naming in the wrong-answer reason). |

## Media wiring

Two SVG clue cards via `media()` with the generic `part` shape. **No real photos** — wire nut, GFCI outlet, and conduit are highly visually distinctive in reality.

## Open actions

1. Per-distractor rewrite (~30 min) — especially GFCI test/reset, wire nut color-coded gauge, and conduit vs raceway differences.
2. Add `region: 'US'` tag on the track or bridge UK/EU terminology (GFCI/RCD; outlet/socket).
3. Source real photos for GFCI and wire nut at minimum.

## Effort

~1 hour rewrite + region decision.
