# Audit: guessTheBird

**Syllabus**: [`src/data/syllabi/high/guess_the_bird.md`](../../../src/data/syllabi/high/guess_the_bird.md)
**Track id**: `guessTheBird` (high.ts:1264) - status `playable`, questionCount 12
**Tier**: high (Visual ID family)
**Region**: silently North-American-skewed (American robin, Northern cardinal, Blue jay, Canada goose, Bald eagle). **Flag for region tagging.**

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Garden (robin/cardinal/blue jay) | Yes | All three present |
| Water (mallard/Canada goose) | Yes | Both present |
| Tiny + tree birds (hummingbird/woodpecker) | Yes | Both present |
| Raptors + night (bald eagle/barn owl) | Yes | Both present |
| Sea + wading (penguin/flamingo/heron) | Yes | All three present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessTheBirdQuestions` | 12 | **FIX** | Content quality is high (per-distractor explanations, plausible near-misses like robin vs cardinal vs blue jay). But species list is silently US-centric; syllabus does not say "North American birds" and the track subtitle reads as generic ("backyard, water, raptor, and wading birds"). |

## Quality notes

- Per-distractor explanations: yes, no DEFAULT_FLAW.
- Media: programmatic `bird` SpecimenVisual cards only; no pre-rendered PNGs wired (compare rocks).
- Voice: clean field-guide. Bill-shape and silhouette cues are pedagogically sound.

## Open actions

1. Either **rename the track / syllabus to "Guess the Bird (North America)"** or add 4-6 international entries (e.g. kookaburra, magpie, hoopoe, kingfisher) to live up to the generic title.
2. Add `region: 'US'` (or `'NA'`) tag in `ageCatalog/high.ts` until step 1 is resolved.
3. Add pre-rendered PNGs to match the rock-track media bar.

## Estimated effort

~3 hours: 1h tagging decision + 2h additional content if going international.
