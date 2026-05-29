# Audit: guessTheRock

**Syllabus**: [`src/data/syllabi/high/guess_the_rock.md`](../../../src/data/syllabi/high/guess_the_rock.md)
**Track id**: `guessTheRock` (high.ts:1240) - status `playable`, questionCount 12
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (geology is universal)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Igneous (basalt, granite, obsidian, pumice) | Yes | All four present |
| Sedimentary (sandstone, limestone, conglomerate) | Yes | All three present |
| Metamorphic (slate, marble, gneiss) | Yes | All three present |
| Minerals (quartz, amethyst) | Yes | Both present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessTheRockQuestions` | 12 | **KEEP - gold standard for the cluster** | Per-distractor explanations specific to grain/texture/cleavage. Pre-rendered cartoon PNGs wired at `/assets/guess-the-thing/rocks/*-cartoon.png` for all 12 specimens. Lesson copy connects visual traits to formation stories. |

## Quality notes

- No DEFAULT_FLAW.
- **Only track in the cluster with pre-rendered photographic-style cartoon media** (12 PNGs in `generatedSpecimenMediaById`). Sets the bar.
- Voice: matches syllabus key skill "avoid one-clue overconfidence" - distractor reasoning always offers an alternative diagnostic feature.

## Open actions

1. None required. **Use this track as the visual + content model for the rest of the family.**

## Estimated effort

Zero. This is the reference implementation.
