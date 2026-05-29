# Audit: collegeAdmissions

**Syllabus**: [`src/data/syllabi/high/college_admissions.md`](../../../src/data/syllabi/high/college_admissions.md)
**Track id**: `collegeAdmissions` (Year 11/12, ages 15-18)
**Tier**: high
**Region**: **US-primary** (Common App, ED/EA/REA/RD, FAFSA, CSS Profile, AP/IB/dual enrollment, SAT/ACT). Syllabus design note explicitly says "U.S.-centered but includes transfer, international, portfolio, athletic, and U.K./global comparison notes where useful." Tag `region: 'US'` with `crossReference: 'UK'` if schema supports.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Admissions Landscape and Personal Goals | not covered | No fit/holistic-review items |
| 2. Building a Balanced College List | not covered | No reach/target/likely items |
| 3. Application Systems and Timelines | not covered | No ED/EA/REA/RD items |
| 4. Academic Profile, Testing, and Course Rigor | not covered | No test-optional, transcript-rigor items |
| 5. Activities, Honors, and Applicant Narrative | not covered | No activities-list, leadership items |
| 6. Personal Statement and Supplemental Essays | not covered | No essay-craft items |
| 7. Recommendations, Interviews, Portfolios, Special Paths | not covered | No rec-letter/interview items |
| 8. Financial Aid, Offers, and Final Decision | not covered | No FAFSA/CSS/net-price items |

**Zero dedicated content.** `status: 'soon'` (`high.ts:407`), which honestly reflects the empty bank. Falls through `familyFor` -> 'life' (matches "admissions") -> `lifeEconomicsBlueprints` (2 items cycled 25x). Players who tap the (currently-hidden) `soon` track would see opportunity-cost-Saturday + canteen-cookie 25 times each.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `lifeEconomicsBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x 25 = 50 (only if status flipped) | **DELETE for this track** | Wrong topic completely. |
| No other questionCatalog file mentions admissions content | 0 | n/a | Genuine greenfield. |

## Duplicate-track flag

Not a `philYear*` duplicate. No other admissions track exists. Clean greenfield.

## Open actions (priority order)

1. **Keep `status: 'soon'` until a real bank exists** — the current fallback would harm rather than help.
2. **Add `region: 'US'`** to the track entry when authoring begins.
3. **Author 40-50 questions** across 8 chapters. Voice: `jargonBusters.ts` (career skills voice translates well to "what is ED vs EA"). Concrete cases:
   - "A student applies ED to College A. Two weeks later they're admitted. What must they do regarding pending RD applications to other colleges?" (binding ED logic)
   - "A test-optional college tells applicants 'we'll consider scores if submitted.' A student has a 1280 SAT — should they submit it to a college with a published middle 50% of 1400-1530?" (submission strategy)
   - "FAFSA opens October 1. A student also needs CSS Profile for several private colleges. What changes about their data collection?" (form-process comparison)
4. **Pull from external authoritative sources** the syllabus references — Common App, Federal Student Aid, College Board. Cite `lastReviewed: <date>` per the CONTENT_AUDIT.md schema-change note, since aid rules shift.
5. **Decide on UK comparison content** — syllabus mentions UCAS comparison; if shipping internationally, author a Chapter 7 UCAS subset.

## Estimated effort

- Author 40-50 hand-written admissions Q's: ~12 hours
- Region tag + `lastReviewed` schema: ~1 hour
- UCAS comparison subset (8-10 Q's): ~3 hours

## Flags

- **Currently no real content** — and yet `lifeEconomicsBlueprints` would still inject 50 cycled non-answers if the track flipped to playable. This is the worst possible state for a "soon" track to be in: silently broken behind the flag.
- **`lastReviewed` schema gap** — admissions rules (test-optional policies, FAFSA timing, ED2/REA variants) change yearly. The CONTENT_AUDIT.md quality bar explicitly flags this as needed for "regulation-adjacent" content.
- **Silent US-specificity** when flipped on without UCAS variants.
- **Note**: `status: 'soon'` is *correct* here per "if questions exist it should be playable" — questions do NOT exist (the fallback is not real content). This is the inverse of the `philYear*` bug.
