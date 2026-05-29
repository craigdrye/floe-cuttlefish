# Audit: guessTheMushroom

**Syllabus**: [`src/data/syllabi/high/guess_the_mushroom.md`](../../../src/data/syllabi/high/guess_the_mushroom.md)
**Track id**: `guessTheMushroom` (high.ts:976) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral
**Safety**: foraging-adjacent. Lesson copy correctly disclaims ("mushroom identification should never be casual for eating"; "safe foraging still requires expert confirmation").

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Iconic (fly agaric) | Yes | Present with toxicity note |
| Honeycomb/golden (morels, chanterelles) | Yes | Both present |
| Shelf/cultivated (oyster, shiitake, button) | Yes | All three present |
| Toothy/boletes (lion's mane, porcini) | Yes | Both present |
| Safety (visual ID alone insufficient) | Partial | Disclaimer is in individual lessons, not its own meta-question |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheMushroomQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Strong taxonomic vocabulary (pores vs gills vs ridges vs teeth). Safety framing is responsible. Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: `mushroom` SVG card.
- Syllabus explicitly asks for a "safety: why visual ID alone is not enough" unit. Currently absent as a dedicated question; disclaimers are in individual lessons.

## Open actions

1. Add 1-2 explicit safety/lookalike questions (e.g. destroying angel vs button; false morel vs true morel).
2. Rewrite per-distractor explanations using cap/gill/pore vocabulary.
3. Consider `safetyDisclaimer` metadata on the track so the safety banner can be UI-promoted.

## Estimated effort

~3 hours.
