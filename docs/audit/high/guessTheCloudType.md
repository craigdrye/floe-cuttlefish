# Audit: guessTheCloudType

**Syllabus**: [`src/data/syllabi/high/guess_the_cloud_type.md`](../../../src/data/syllabi/high/guess_the_cloud_type.md)
**Track id**: `guessTheCloudType` (high.ts:856) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (meteorology is universal)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Low (cumulus, stratus) | Yes | Both present |
| High (cirrus, cirrostratus) | Yes | Both present |
| Middle (altocumulus) | Yes | Present |
| Rain/storm (nimbostratus, cumulonimbus) | Yes | Both present |
| Special (lenticular) | Yes | Present (mammatus appears as distractor only) |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheCloudTypeQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Full syllabus coverage. Height + texture taxonomy honoured. Halo-around-sun trick for cirrostratus is correct. Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: dedicated `cloud` SVG shape (multi-ellipse puff + rain hatching).
- Voice: clean meteorological.

## Open actions

1. Rewrite per-distractor explanations exploiting height + shape contrast (e.g. "Cirrus is also wispy but is high-altitude ice crystals; altostratus is a mid-level uniform veil").
2. Optional: add a mammatus question to convert it from distractor to first-class species.

## Estimated effort

~1.5 hours.
