# Audit: guessTheSeaweed

**Syllabus**: [`src/data/syllabi/high/guess_the_seaweed.md`](../../../src/data/syllabi/high/guess_the_seaweed.md)
**Track id**: `guessTheSeaweed` (high.ts:640) - status `playable`, questionCount 10
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (multi-region food culture clues)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Brown (kelp, sargassum, bladderwrack) | Yes | All three present |
| Edible (nori, kombu, wakame, dulse) | Yes | All four present |
| Green (sea lettuce) | Partial | Sea lettuce appears only as a distractor; no dedicated question |
| Red (Irish moss) | Partial | Appears as distractor; not its own question |
| Reef builders (coralline algae) | Partial | Distractor only |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheSeaweedQuestions` | 10 | **FIX (DEFAULT_FLAW + gap)** | Brown and edible chapters fully covered; green, red, and reef-builder chapters under-covered (those species appear as distractors only). Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: reuses `leaf` SVG shape for all seaweeds.
- Food-culture framing in lesson copy is one of the strongest in the cluster.

## Open actions

1. **Author 2-3 new questions** for sea lettuce (green), Irish moss/dulse-as-thickener (red), and coralline algae (reef builder) to close chapter gaps.
2. Rewrite per-distractor explanations using color-family (brown/green/red) contrast.

## Estimated effort

~3 hours (authoring + rewrite).
