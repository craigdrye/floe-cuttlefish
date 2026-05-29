# Audit: guessTheTree

**Syllabus**: [`src/data/syllabi/high/guess_the_tree.md`](../../../src/data/syllabi/high/guess_the_tree.md)
**Track id**: `guessTheTree` (high.ts:1012) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (species chosen are recognizable globally)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Needles/cones (pine, cedar) | Yes | Both present |
| Seeds/leaves (oak, maple, ginkgo) | Yes | All three present |
| Bark (birch, sycamore) | Yes | Both present |
| Water-loving (willow) | Yes | Present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheTreeQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Honors syllabus key skill ("use bark, seeds, cones, and habitat as supporting evidence") in question variety. Distractors templated. Reuses `plant` SVG icon. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: shares `plant` SVG with guessThePlant/guessTheToxicPlant - **no tree-specific silhouette**.
- Overlap risk with guessThePlant (both feature maple, oak). Distinct tracks because guessThePlant is region-keyed, guessTheTree is leaf/bark/cone-keyed - acceptable but worth noting.

## Open actions

1. Add a `tree` SVG shape (silhouette with trunk + crown variants).
2. Rewrite per-distractor explanations exploiting bark/leaf/cone contrast.
3. Cross-reference with guessThePlant to keep distinct framings.

## Estimated effort

~2 hours.
