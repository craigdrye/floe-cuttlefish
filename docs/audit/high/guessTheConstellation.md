# Audit: guessTheConstellation

**Syllabus**: [`src/data/syllabi/high/guess_the_constellation.md`](../../../src/data/syllabi/high/guess_the_constellation.md)
**Track id**: `guessTheConstellation` (high.ts:988) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: **northern-hemisphere bias** (Big Dipper, Cassiopeia, Orion-as-winter, Pleiades, Cygnus, Lyra, Scorpius, Taurus). Not flagged. Southern Cross / Centaurus / Carina absent.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Northern anchors (Big Dipper, Cassiopeia) | Yes | Both present |
| Winter (Orion, Taurus) | Yes | Both present |
| Clusters/small (Pleiades, Lyra) | Yes | Both present (Pleiades correctly labeled as asterism/cluster not constellation) |
| Summer/zodiac (Cygnus, Scorpius) | Yes | Both present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheConstellationQuestions` | 8 | **FIX (DEFAULT_FLAW + region tag)** | Syllabus key skill "distinguish constellation, asterism, and star cluster" is correctly honoured (Big Dipper = asterism in Ursa Major; Pleiades = cluster not full constellation). Northern hemisphere bias not labelled. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: dedicated `constellation` SVG shape with dark sky background + dot pattern - the best-suited shape in the bonus vocabulary.
- "Orion = winter" framing assumes northern hemisphere; in the southern hemisphere it's a summer constellation.

## Open actions

1. Either **add `region: 'NH'`** (northern hemisphere) tag to the track, or add 2-3 southern questions (Crux/Southern Cross, Centaurus, Carina) and rephrase season cues.
2. Rewrite per-distractor explanations exploiting pattern shape (W vs ladle vs three-belt vs hook).

## Estimated effort

~2 hours.
