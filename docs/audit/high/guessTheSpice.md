# Audit: guessTheSpice

**Syllabus**: [`src/data/syllabi/high/guess_the_spice.md`](../../../src/data/syllabi/high/guess_the_spice.md)
**Track id**: `guessTheSpice` (high, Food Skills, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheSpiceQuestions` (8)

## Coverage map

| Syllabus axis | Covered |
|---|---|
| Pods (cardamom) | YES |
| Threads (saffron) | YES |
| Bark (cinnamon) | YES |
| Buds (clove) | YES |
| Rhizomes (turmeric) | YES |
| Seeds (cumin) | YES |
| Stars (star anise) | YES |
| Powders (paprika) | YES |
| Nutmeg, fennel, sumac, mustard seed, peppercorn | **Missing in stems** (appear as distractors only) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (spice slice) | 8 | **FIX** | Excellent syllabus alignment — every "form" axis is hit exactly once. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) Aroma/use cues mentioned in lesson but never tested — e.g. "this spice tastes like camphor and pine" (cardamom) or "smoky vs sweet vs hot" (paprika variants). (3) Generic jar SVG reused across all eight. (4) Cinnamon Q doesn't distinguish Ceylon vs Cassia, which is the actual interesting fact. |

## Open actions

1. Add 2 sensory-cue Qs (smell/taste descriptor → spice).
2. Split cinnamon into Ceylon vs Cassia bark recognition.
3. Per-spice cartoon (thread vs bark curl vs star vs seed vs powder) or real spice photos.
