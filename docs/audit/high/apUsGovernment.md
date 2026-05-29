# Audit: apUsGovernment

**Syllabus**: [`src/data/syllabi/high/ap_us_government.md`](../../../src/data/syllabi/high/ap_us_government.md)
**Track id**: `col-ap-us-government-politics` (no camelCase variant in `high.ts`)
**Tier**: high
**Region**: US (College Board exam; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Constitutional Foundations and Democratic Ideals | yes | Federalist 10, Federalist 51, Brutus 1 all present in `highApUsGovernmentQuestions`. |
| 2. Federalism and the National-State Balance | yes | McCulloch v. Maryland, Lopez (likely), implied powers. |
| 3. Congress and Representation | partial | Bill-to-law and committee work exist (in `civicsQuestions`); no Baker v. Carr or Shaw v. Reno. |
| 4. The Presidency and the Bureaucracy | partial | Agency role / rulemaking covered; no Federalist 70, no signing statements. |
| 5. The Courts and Constitutional Interpretation | yes | Marbury v. Madison, Brown v. Board, judicial review. |
| 6. Civil Liberties and Civil Rights | yes | Brown, plus likely Schenck, Gideon, Tinker, Engel, Citizens United, McDonald, Letter from Birmingham Jail mentions. |
| 7. Political Beliefs, Ideology, Public Opinion | partial | Some polling concepts in `practicalPoliticsQuestions`, no margin-of-error MCQs. |
| 8. Participation, Elections, Parties, Interest Groups, Media | yes | Political parties, campaign finance, Citizens United covered. |

**May 2026 rubric finding: does NOT apply.** Both `highApUsGovernmentQuestions` (497 lines, ~50 Q) and `highUsGovernmentCivicsQuestions` (497 lines, ~50 Q) are content-bearing with per-distractor whys grounded in real cases, clauses, and procedures. This is the strongest bank in the cluster.

**Chapter taxonomy mismatch.** File chapters ("Foundations", "Federalism", "Constitutional Interpretation", "Civil Rights") are close to syllabus units 1-3 and 5-6, but not aligned to the 8-chapter syllabus naming. Rename to syllabus chapters.

**Track id confusion**: there is no camelCase `apUsGovernment` in `high.ts`. The track only exists as `col-ap-us-government-politics`. The civic dual `usGovAndCivics` is a separate, non-AP playable track that shares the `civicPoliticsQuestions.ts` source file (different export bank). Risk of duplication if a learner enrols in both.

## Per-file recommendations

| File | AP US Gov Q's | Bucket | Reason |
|---|---|---|---|
| [`civicPoliticsQuestions.ts` → `highApUsGovernmentQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 997-1494) | ~50 | **KEEP** | **Gold standard for the cluster.** Hand-authored, per-distractor whys, required-case grounded (Federalist 10/51, Brutus 1, Marbury, McCulloch, Brown). Tone is sober and AP-appropriate. Source of voice for any new AP Gov authoring. Minor FIX: rename chapters to syllabus's 8-chapter spine. |
| [`civicPoliticsQuestions.ts` → `highUsGovernmentCivicsQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 500-997) | ~50 | **KEEP (different track)** | Routes to the non-AP `usGovAndCivics` track. Substantial overlap (committee work, judicial review, federalism) but with civic-action framing rather than required-case framing. Worth keeping the two banks separate — see `usGovernmentAndCivics.md` audit. |
| [`civicPoliticsQuestions.ts` → `highConstitution101Questions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (lines 1-500) | ~50 | **KEEP (different track)** | Foundational doc-focus. Mild overlap with Chapter 1 of this AP syllabus (Federalist papers). Cross-link rather than duplicate. |
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) | ~30 | **KEEP (different track)** | Covers polling, voting systems, UK/EU comparisons. Out-of-syllabus for AP US Gov (jurisdiction-specific UK/EU content). The US portions could feed Chapter 7/8 by cross-routing. **Flag jurisdiction-specific UK/EU content** for region tagging. |
| `highGenerated` fallback (`historyBlueprints` generates 3 generic items per track that hits this track via `dedicatedHighCivicQuestionsByTrack` override) | 0 | n/a | Override routes to dedicated bank — no fallback noise. |

**Net effect**: ~50 hand-authored questions for the AP track, plus shared content with adjacent civics tracks. Already meets the quality bar. Mostly a re-chapter and tag job.

## Open actions (priority order)

1. **Rename file chapters** in `highApUsGovernmentQuestions` to match the 8-chapter syllabus spine ("Foundations" → "Chapter 1: Constitutional Foundations and Democratic Ideals").
2. **Add `region: 'US'`** to `col-ap-us-government-politics` in `high.ts`.
3. **Add a camelCase `apUsGovernment` track** in `high.ts` or document why only `col-…` form exists; consolidate if duplicate.
4. **Add ~10 missing required-case items**: Baker v. Carr, Shaw v. Reno, Federalist 70, Schenck v. US, Wisconsin v. Yoder.
5. **Add 5-8 polling/data-analysis items** for Chapter 7 (margin of error, sampling, question wording).
6. **Add stimulus items** with short founding-document excerpts (Declaration preamble, Federalist 10 faction paragraph) to match AP exam's required-document SCOTUS-comparison format.
7. **Decide on relationship with `usGovAndCivics`**: cross-share content via routing layer or accept the modest overlap.

## Estimated effort

- Chapter rename: ~1 hour.
- 10 missing required-case items: ~3 hours.
- 5-8 polling/data items: ~2 hours.
- Stimulus items: ~3 hours.

**~1 working day to fully close gaps.** Lowest-effort track in the cluster.

## Notes for next auditor

`civicPoliticsQuestions.ts` (1989 lines, 152 Q-ids across 4 exported banks: Constitution 101, US Gov & Civics, AP US Gov, Political Philosophy) is the highest-quality humanities source file in the cluster. Use this file's voice and structure as the model when remediating apEnglish, apHistory, and apEuropeanHistory.
