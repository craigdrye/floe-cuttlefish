# Audit: guessTheBodyPart

**Syllabus**: [`src/data/syllabi/high/guess_the_body_part.md`](../../../src/data/syllabi/high/guess_the_body_part.md)
**Track id**: `guessTheBodyPart` (high.ts:1300) - status `playable`, questionCount 12
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral
**Safety**: explicit "anatomy education, not medical advice" disclaimer in heart question and syllabus

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Organs (heart, lungs, brain, kidney, liver, stomach) | Yes | All six present |
| Bones (femur, skull, rib cage) | Yes | All three present |
| Vessels/nerves (aorta, spinal cord) | Yes | Both present |
| Landmarks (diaphragm) | Yes | Present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessTheBodyPartQuestions` | 12 | **KEEP** | Per-distractor explanations are structure-function literate ("Kidneys filter blood and make urine" as distinguisher for liver). Disclaimer wording is responsible. |

## Quality notes

- No DEFAULT_FLAW.
- Media: programmatic `anatomy` SpecimenVisual; no pre-rendered PNGs.
- Voice: sober. Matches the syllabus's medicine-curious-but-careful framing.

## Open actions

1. Add pre-rendered anatomical cartoon PNGs (rock-track parity). Especially valuable here because anatomy ID benefits hugely from realistic visual reference.
2. Consider lifting the safety disclaimer to track metadata so the UI can surface it on every question, not just heart.

## Estimated effort

~3 hours media wiring.
