# Audit: guessTheInsect

**Syllabus**: [`src/data/syllabi/high/guess_the_insect.md`](../../../src/data/syllabi/high/guess_the_insect.md)
**Track id**: `guessTheInsect` (high.ts:964) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: monarch butterfly is explicitly NA-tagged in lesson ("famous for...migration in North America") - rest are global. Minor flag.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Pollinators (honeybee, butterfly) | Yes | Honeybee + monarch |
| Aerial predators (dragonfly) | Yes | Present |
| Beetles | Yes | Lady beetle |
| Noisy/jumpers (cicada, grasshopper) | Yes | Both present |
| Ambush + night fliers (mantis, moth) | Yes | Both present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheInsectQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Solid taxonomic coverage; pollinator vs predator vs ambush framing matches syllabus. Distractors are templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: `insect` SVG card.
- Syllabus key skill "don't treat every unfamiliar insect as harmful" is supported by lesson framing on lady beetle (aphid eater) and honeybee (pollinator).

## Open actions

1. Rewrite per-distractor explanations exploiting body-plan contrasts (e.g. "Damselfly has clear wings but folds them along the body, not held out like a dragonfly").
2. Either internationalize monarch (add "and migrates in parts of Latin America") or accept the NA framing.

## Estimated effort

~2 hours.
