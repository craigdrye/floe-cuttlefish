# Audit: guessTheDogBreed

**Syllabus**: [`src/data/syllabi/high/guess_the_dog_breed.md`](../../../src/data/syllabi/high/guess_the_dog_breed.md)
**Track id**: `guessTheDogBreed` (high.ts:808) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Herding (Border Collie, Corgi) | Yes | Both present |
| Scent/sight hounds (Beagle, Greyhound) | Yes | Both present |
| Northern working (Siberian Husky) | Yes | Present |
| Companion (Pug, Poodle) | Yes | Both present |
| Body-shape specialist (Dachshund) | Yes | Present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheDogBreedQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Same family-wide auto-templated distractor explanations. Content (working-history framing, sighthound vs scenthound vs herder taxonomy) is well-chosen; distractor reasoning is generic. |

## Quality notes

- **DEFAULT_FLAW present** (bonus file `q()` helper).
- Syllabus stresses "working history" as the pedagogy hook; question lessons honour this (e.g. Dachshund "bred for burrow work, which explains the long body").
- Media: SVG `dog` icon only.

## Open actions

1. Rewrite per-distractor explanations to exploit working-history contrast (e.g. "Greyhound is built for sight chase, not scent tracking").
2. Reference imagery upgrade as per family pattern.

## Estimated effort

~2 hours.
