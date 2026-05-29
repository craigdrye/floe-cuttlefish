# Audit: guessThePlant

**Syllabus**: [`src/data/syllabi/high/guess_the_plant.md`](../../../src/data/syllabi/high/guess_the_plant.md)
**Track id**: `guessThePlant` (high.ts:1252) - status `playable`, questionCount 10
**Tier**: high (Visual ID family)
**Region**: explicitly multi-region (NA/LatAm/Europe/Asia/Oceania/Africa). Well-balanced like guessTheFish.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| North America (sugar maple, saguaro) | Yes | Both present |
| Latin America (monstera, cacao) | Yes | Both present |
| Europe (lavender, English oak) | Yes | Both present |
| Asia (bamboo, cherry blossom) | Yes | Both present |
| Oceania (eucalyptus) | Yes | Present |
| Africa (baobab) | Yes | Present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessThePlantQuestions` | 10 | **KEEP** | Per-distractor explanations are specific and use the region-aware framing the syllabus calls for. Cross-region distractors (saguaro vs lavender; baobab vs palm vs bamboo) teach habitat reasoning. |

## Quality notes

- No DEFAULT_FLAW.
- Media: programmatic `plant` SpecimenVisual cards.
- Voice: clean field-guide. Bamboo vs sugarcane and oak vs maple distinctions are pedagogically sound.

## Open actions

1. Add pre-rendered cartoon PNGs (rock-track parity).
2. Otherwise launch-ready.

## Estimated effort

~2 hours media wiring.
