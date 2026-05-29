# Audit: usGovernmentAndCivics

**Syllabus**: [`src/data/syllabi/high/us_government_and_civics.md`](../../../src/data/syllabi/high/us_government_and_civics.md)
**Track id**: `usGovAndCivics` (high.ts line 1422); catalog also exposes `col-us-government-and-civics` as an alias mapping to the same bank.
**Tier**: high
**Region**: US (explicit — US constitutional government course)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Constitutional Foundations and Democratic Ideas | yes | Federalism, judicial review, courts items present. Less depth on Federalist/Anti-Federalist than the AP US Gov track. |
| 2. Federalism and "Who Can Fix This?" | yes | Federalism shared-power item; local zoning authority item. Strong civic-action framing. |
| 3. Congress and Lawmaking | yes | Committee work; bicameralism partially covered via `practicalPoliticsQuestions`. Missing: filibuster mechanics, oversight specifics. |
| 4. Presidency, Bureaucracy, Executive Power | partial | EPA rulemaking item (agency implementation). Missing: executive order vs statute distinction, signing statements. |
| 5. Courts, Civil Liberties, Civil Rights | partial | Judicial review covered; specific required cases live in the AP US Gov bank rather than here. Possible cross-route. |
| 6. Political Ideologies, Public Opinion, Media | partial | Some content via `practicalPoliticsQuestions`; gap on polling methodology, framing, misinformation. |
| 7. Elections, Parties, Interest Groups, Money | partial | "Party functions" item; campaign finance covered indirectly via `apUsGovernment` bank. |
| 8. Public Policy and Civic Action Lab | minimal | Syllabus's distinctive civic-action chapter has very few items targeting "Who can fix this?" memos, public-comment skills. |

**May 2026 rubric finding: does NOT apply.** `highUsGovernmentCivicsQuestions` (civicPoliticsQuestions.ts lines 500-997) is content-bearing, with per-distractor whys grounded in real institutions and concrete scenarios.

**Chapter taxonomy mismatch.** File chapters ("State and Local Government", "Congress", "Executive Branch", "Courts", "Federalism", "Political Parties", …) are concept-organized rather than aligned to the syllabus's 8 chapters. Re-chapter.

## Per-file recommendations

| File | usGovAndCivics Q's | Bucket | Reason |
|---|---|---|---|
| [`civicPoliticsQuestions.ts` → `highUsGovernmentCivicsQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 500-997) | ~50 | **KEEP** | Hand-authored, per-distractor whys, civic-action framing fits this syllabus better than the AP version does. Re-chapter to 8 syllabus chapters. Minor FIX: align "State and Local Government" to syllabus Chapter 2 ("Who Can Fix This?"). |
| [`civicPoliticsQuestions.ts` → `highApUsGovernmentQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 997-1494) | ~50 (other track) | **CROSS-ROUTE selectively** | The required-case items (Marbury, McCulloch, Brown, Federalist 10/51, Brutus 1) are core to syllabus Chapters 1 and 5. Cross-route a subset (~12 items) so non-AP learners also encounter founding documents and key cases without the AP-rubric framing. |
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) | ~30 | **CROSS-ROUTE US-only subset** | First-past-the-post, bill-to-law, House vs Senate items belong here. **Flag UK/EU jurisdiction-specific items** (Prime Minister, House of Lords) for exclusion from this US-focused track. |
| [`civicPoliticsQuestions.ts` → `highConstitution101Questions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 1-500) | ~50 (other track) | **CROSS-ROUTE founding-docs subset** | Chapter 1 of this syllabus needs founding documents content. Constitution 101 is a sibling track with same source file. Cross-route ~10 items. |
| `highGenerated` → `dedicatedHighCivicQuestionsByTrack` override (lines 1443-1454) | n/a | **KEEP routing** | The override correctly routes `usGovAndCivics` to the civic bank instead of the generic `historyBlueprints` fallback. Good. |

**Net effect**: ~50 dedicated + ~25 cross-routed = ~75 questions per the 8 syllabus chapters. Already meets quality bar; mostly a re-chapter and route-graph job.

## Open actions (priority order)

1. **Rename file chapters** in `highUsGovernmentCivicsQuestions` to syllabus's 8 chapters.
2. **Cross-route subsets** from AP US Gov, Constitution 101, and Practical Politics banks into `usGovAndCivics` for Chapters 1, 5, 7.
3. **Strip UK/EU items** from any `practicalPoliticsQuestions` cross-route into this track (region-tag filter).
4. **Author ~8 items** for Chapter 8 (Civic Action Lab): "Who can fix this?" memo scenarios, public-comment outline scoring, agency vs court vs Congress as the right venue.
5. **Author ~5 items** for Chapter 6 (polling, framing, misinformation) — sample/wording/margin-of-error MCQs.
6. **Add `region: 'US'`** to `usGovAndCivics` and `col-us-government-and-civics` aliases.
7. **Dedupe `usGovAndCivics` vs `col-us-government-and-civics`** — both `playable`, same bank. Pick canonical id.

## Estimated effort

- Chapter rename + cross-routing: ~2 hours.
- Region filter on practicalPolitics cross-route: ~1 hour.
- 13 closure items (Chapter 6 + 8): ~4 hours.
- Region tag + id dedupe: ~30 min.

**~1 working day.**

## Notes for next auditor

This track shares its question bank file with `apUsGovernment`, `constitution101`, and `practicalPolitics` — `civicPoliticsQuestions.ts` exports four banks. The four-track structure is sensible (different framings: AP-required-cases vs civic-action vs founding-docs vs participation), but the audits should be read together since changes to one bank affect routing for the others. Practical Politics' UK/EU content needs jurisdiction tagging before any non-AP US tracks pull from it.
