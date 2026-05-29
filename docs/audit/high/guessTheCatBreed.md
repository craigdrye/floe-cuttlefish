# Audit: guessTheCatBreed

**Syllabus**: [`src/data/syllabi/high/guess_the_cat_breed.md`](../../../src/data/syllabi/high/guess_the_cat_breed.md)
**Track id**: `guessTheCatBreed` (high.ts:820) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (breeds are global)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Longhair/giant (Maine Coon, Persian) | Yes | Both present |
| Colorpoint (Siamese, Ragdoll) | Yes | Both present |
| Unusual coats (Sphynx, Bengal, Russian Blue, Devon Rex) | Yes | All four present |
| Trait clues (ears/eyes/coat texture/body) | Implicit | Captured inside individual questions |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheCatBreedQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Family-wide pattern: every wrong distractor uses the templated `${label} is a plausible distractor, but it does not match the key clue in this prompt.` + generic nudge inside the bonus-file `q()` helper. Content selection is good but distractor explanations are boilerplate. |

## Quality notes

- **DEFAULT_FLAW present**: every "wrong" answer is auto-generated from a single label via the bonus file `q()` helper (line ~100). No per-distractor reasoning.
- Media: programmatic SVG `cat` icon + paired "literal clue" SVG. No pre-rendered breed PNGs. Sufficient as visual scaffolding; doesn't reach photo-grade visual-ID standard.
- Voice: brief, sober. Lesson lines are accurate.

## Open actions

1. **Rewrite per-distractor explanations** (8 questions x 3 wrongs = 24 lines). Use breed-vs-breed contrast (e.g. "Persian also long-haired but flat-faced, not tufted-eared and large-bodied").
2. Source or commission breed reference imagery to lift media beyond SVG icons.
3. No region tagging needed.

## Estimated effort

~2 hours rewrite + media work separate.
