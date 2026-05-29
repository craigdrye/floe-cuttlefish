# Audit: scienceEarlyYears (Science Discovery: Early Years)

**Syllabus**: [`src/data/syllabi/preschool/science_discovery_early_years.md`](../../../src/data/syllabi/preschool/science_discovery_early_years.md)
**Track id**: `scienceEarlyYears`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (EYFS, EYLF, NRC Framework for K-12 Science, NGSS, Head Start referenced).
**Primary-tier siblings**: `scienceYear1`…`scienceYear6` (each is a generated bank).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. My Scientist Senses | ❌ | sensory sorting; partly schema-mismatched |
| 2. Weather Watchers | ⚠️ partial | CK-12 'seasons' keyword filter may surface a few weather Q's, but they will be primary-grade, not Pre-K |
| 3. Water, Ice, and Puddles | ❌ | not matched by current keyword filter |
| 4. Seeds and Growing Things | ⚠️ partial | CK-12 'plants' filter may surface mid-primary plant Q's |
| 5. Animals, Homes, and Care | ⚠️ partial | CK-12 'animals' / 'nature' filter may surface mid-primary animal Q's |
| 6. Push, Pull, Roll, and Build | ❌ | not matched by current keyword filter |
| 7. Sorting, Patterns, and Materials | ❌ | not matched |
| 8. Wonder Walks and Caring Choices | ❌ | not matched |

**Status flag**: syllabus marks track as `status: 'soon'` in its frontmatter — but the [age catalog at line 45](../../../src/data/ageCatalog/primary.ts) marks `scienceEarlyYears` as `status: 'playable'` because the loop generator sets `'playable' as const` for every science year. **Catalog–syllabus disagreement.**

**Wiring**: [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) line 98:
`'scienceEarlyYears': filterQs(ck12, ['nature', 'animals', 'plants', 'seasons']),`

This is the **only preschool track with any wired upstream beyond the 4-Q `primary` track**. But the CK-12 corpus is K-12 STEM (mostly primary/secondary); a keyword filter on `chapter` strings will surface mid-primary content, not Pre-K observation prompts. Best-case the filter returns a handful of "Which animal lives in the ocean?" items; worst-case it returns physics or middle-school biology.

## Per-file recommendations

| File | Q's reaching `scienceEarlyYears` | Bucket | Reason |
|---|---|---|---|
| [`kolibri.ts`](../../../src/data/questionCatalog/kolibri.ts) (CK-12 slice via `filterQs`) | unknown but >0; reading-age mismatch likely | **FIX or DELETE** | The keyword filter is a fragile bridge. CK-12 chapters tagged 'animals' or 'plants' are written for grade-level readers, not ages 3–5. Cut the wire and treat `scienceEarlyYears` as syllabus-only until real preschool questions are authored. |
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) `scienceYear1` (60 Q's) | 0 (different track) | **DO NOT MERGE** | `scienceYear1` is already age-up from preschool; reusing it here would compound the reading-age mismatch. |
| any other file | 0 | **N/A** | |

**Cross-cutting flags**:
- **Catalog–syllabus disagreement on status**: syllabus says `soon`, catalog says `playable`. Resolve.
- The `filterQs` wire is fragile — it depends on free-text `chapter` strings matching arbitrary keywords. Add a unit test or remove the wire.
- `scienceYearN` generators all use templated `whyWrong` — flag for the primary-tier audit (not this doc's scope).
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts) `syllabusPathByTrackId`.

## Open actions (priority order)

1. **Resolve status mismatch**: set `scienceEarlyYears` to `status: 'soon'` in the loop in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) until real Pre-K Q's exist.
2. **Cut the CK-12 keyword wire** (line 98 of `questionCatalog/primary.ts`) or replace it with a hand-picked allowlist (likely 0–5 items).
3. **Add syllabus mapping** `scienceEarlyYears: 'preschool/science_discovery_early_years.md'`.
4. **Author preschool science bank** — 24–30 Q's across chapters 2 (weather), 3 (water), 4 (seeds), 5 (animals/homes), 6 (forces: push/pull/roll), 7 (materials). Chapters 1 and 8 are facilitator-led and don't translate to MCQ.
5. **Picture prompts** (chapter 7 materials sort) need the SEL schema extension.

## Estimated effort

- Status fix + cut CK-12 wire + syllabus mapping: 30 min.
- Author 28 preschool science Q's: ~5 hours.
- Optional image-led extension (8 Q's): +3 hours once schema lands.

**~1 day to make `scienceEarlyYears` real.**

## Notes for next auditor

This is the only preschool track that gets *any* upstream content today (via the CK-12 keyword filter). That makes it the most-deceptive ghost: it will surface a few real questions at runtime, but they're the wrong age, so the user experience is worse than for the zero-Q tracks. Cut the wire first, then author.
