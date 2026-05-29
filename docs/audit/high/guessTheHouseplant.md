# Audit: guessTheHouseplant

**Syllabus**: [`src/data/syllabi/high/guess_the_houseplant.md`](../../../src/data/syllabi/high/guess_the_houseplant.md)
**Track id**: `guessTheHouseplant` (high.ts:664) - status `playable`, questionCount 10
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (houseplants are global)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Leaf shapes (monstera, fiddle-leaf fig, rubber plant) | Yes | All three present |
| Vines/plantlets (pothos, spider plant) | Yes | Both present |
| Tough survivors (snake plant, ZZ plant) | Yes | Both present |
| Flowers/spathes (peace lily) | Yes | Present |
| Pattern leaves/succulents (calathea, aloe) | Yes | Both present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheHouseplantQuestions` | 10 | **FIX (DEFAULT_FLAW)** | Full 10-for-10 coverage of syllabus. Care-clue framing ("ZZ stores water in rhizomes - tolerates low light") is in lesson copy. Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present** (bonus file pattern).
- Media: `plant` SVG; no pre-rendered PNGs.
- Voice: playful where the syllabus invites it ("tiny domestic drama of figuring out why a plant is unhappy") - lesson copy lands this well.

## Open actions

1. Rewrite per-distractor explanations exploiting leaf-shape and care contrast (e.g. "Snake plant tolerates low light, but its leaves are upright swords, not the holey monstera shape").
2. Media upgrade per family pattern.

## Estimated effort

~2 hours.
