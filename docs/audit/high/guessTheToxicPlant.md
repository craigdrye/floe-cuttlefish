# Audit: guessTheToxicPlant

**Syllabus**: [`src/data/syllabi/high/guess_the_toxic_plant.md`](../../../src/data/syllabi/high/guess_the_toxic_plant.md)
**Track id**: `guessTheToxicPlant` (high.ts:1144) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: temperate-northern-hemisphere bias; not explicitly tagged but defensible (poison ivy, foxglove, hemlock, yew all northern-temperate)
**Safety**: explicit avoidance framing in lessons; not handling/self-treatment

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Rash/sting (poison ivy, stinging nettle) | Yes | Both present |
| Toxic flowers/shrubs (foxglove, oleander) | Yes | Both present |
| Dangerous berries/evergreens (deadly nightshade, pokeweed, yew) | Yes | All three present |
| Lookalike risk (poison hemlock) | Yes | Present with explicit lookalike note (Queen Anne's lace) |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheToxicPlantQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Strong safety framing in lessons (urushiol oil, cardiac glycosides, tropane alkaloids). The hemlock lesson explicitly flags lookalike risk - matches syllabus intent. Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: `plant` SVG (shared with regular plant tracks - no toxicity visual signal).
- Voice: responsible. Foxglove lesson notes "related compounds inspired important heart medicines under controlled dosing" - good context.

## Open actions

1. Rewrite per-distractor explanations - safety tracks deserve specific reasoning ("Queen Anne's lace stems are hairy and lack purple blotches; hemlock stems are smooth and blotched").
2. Consider a UI-visible `safety` flag on the track so a banner can promote the "for avoidance, not handling" framing.

## Estimated effort

~2 hours.
