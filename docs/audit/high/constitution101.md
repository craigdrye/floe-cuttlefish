# Audit: constitution101

**Syllabus**: [`src/data/syllabi/high/constitution_101.md`](../../../src/data/syllabi/high/constitution_101.md)
**Track id**: `constitution101` (Year 10, ages 14-15)
**Tier**: high
**Region**: **US-explicit and required** (United States Constitution). Tag `region: 'US'`.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Constitutional Conversation and Civic Reasoning | yes | "Preamble and sovereignty," structure-of-government rows |
| 2. Revolution, Confederation, and Founding Principles | yes | Articles of Confederation, Federalist concerns covered (per bank scope) |
| 3. Convention, Compromise, and Ratification | yes | Compromises, Bill of Rights as ratification settlement |
| 4. Congress, Lawmaking, and Representation | yes | Article I, bicameralism, enumerated powers |
| 5. The Presidency, Administration, and Emergency Power | yes | Article II, checks |
| 6. Courts, Judicial Review, and Constitutional Argument | yes | Judicial review item ("Court checks") and `Marbury` references |
| 7. Civil Liberties and the Bill of Rights | yes | Bill of Rights, due process, equal protection all present |
| 8. Reconstruction, Equal Protection, Voting, and Civic Participation | yes | 14th, equal protection, amendment process |

`highConstitution101Questions` (~152 items by id count) wired via `dedicatedHighCivicQuestionsByTrack` at `highGenerated.ts:1446`. **Best-served track in the entire cluster** alongside `politicalPhilosophy` and `practicalPolitics`. Spot-checked items (`civicPoliticsQuestions.ts:3-100+`) are hand-authored with strong per-distractor explanations, conceptually correct, and pitched at Year 10 reading level.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`civicPoliticsQuestions.ts -> highConstitution101Questions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (line 3 onward) | ~152 | **KEEP** | Hand-authored sober tone, per-distractor explanations, accurate constitutional concepts (popular sovereignty, separation of powers, federalism, due process, equal protection, amendment process, judicial review). Chapter taxonomy ("Constitutional Foundations," "Structure of Government," "Federalism," "Rights and Liberties," "Due Process," "Equal Protection," "Amendments," "Judicial Review") roughly matches the syllabus's 8 chapters but uses *concepts*, not the syllabus's chronological chapter titles. Worth aligning. |
| `highApUsGovernmentQuestions` (same file, lines 997+) | 0 (wired to AP track) | **borrow / dedup** | Spot-check for overlapping items — AP and Const 101 cover the same constitutional ground at different depth. Don't duplicate Q-for-Q. |
| `highGenerated.ts` history-blueprint fallback | minor (history family) | leave | "Constitution" keyword routes to 'history' family, so the fallback produces history-flavored items — better than dragon syllogism but still a top-up dilution. |
| `schoolAssessmentUsHistoryQuestions` (wired to `us_history`) | 0 | leave | Different track. |

## Duplicate-track flag

Not a `philYear*` duplicate. **However**, three civics tracks overlap heavily:
- `usGovAndCivics` (`high.ts:1422`) — comprehensive US gov course
- `constitution101` (`high.ts:1917`) — constitutional focus
- `col-ap-us-government-politics` — AP-level

This isn't the bug Craig flagged (those were named-vs-stub `philYear*`s); these three are intentionally distinct courses with different scopes. But content authors should respect the boundaries: `constitution101` is **document-and-text focused**, while `usGovAndCivics` is **institutions-and-process focused**. The current banks (per the wired-routing comments in `highGenerated.ts:1444-1448`) look correctly separated.

## Open actions (priority order)

1. **Align chapter names** with the syllabus's chronological/thematic chapter titles ("Constitutional Conversation and Civic Reasoning," "Revolution, Confederation, and Founding Principles," etc.) rather than the current concept-based chapters. Lower priority — current names are still readable and on-topic.
2. **Add `region: 'US'` tag** to track entry in `high.ts:1917`.
3. **Add `lastReviewed: <date>`** to track-level metadata — constitutional case interpretations evolve (Dobbs, Bruen, Loper Bright shifted ground recently).
4. **Audit for accidental duplication** with `usGovAndCivics` (`highUsGovernmentCivicsQuestions`) and `col-ap-us-government-politics` (`highApUsGovernmentQuestions`) — three banks live in the same file and overlap is likely.
5. **Verify nonpartisan tone** on Chapter 7 (civil liberties) and Chapter 8 (Reconstruction, voting rights) — spot-checked items are balanced, but volume audit recommended.

## Estimated effort

- Chapter rename: ~2 hours
- Region + lastReviewed schema and tag: ~1 hour
- Dedup audit across three constitutional banks: ~3 hours
- Nonpartisan tone verification: ~2 hours

## Flags

- **No DEFAULT_FLAW** in the hand-authored bank.
- **Region tag missing** despite the track being inherently US-only.
- **`lastReviewed` missing** despite content depending on Supreme Court interpretation.
- **Cross-bank dedup risk** with `usGovAndCivics` and AP US Gov.
- **Bank quality**: this is the second-best bank in the cluster after `civicPoliticsQuestions.ts -> highPoliticalPhilosophyQuestions` and ties with `practicalPoliticsQuestions.ts`. Use as the model template for any US-civics authoring across the catalog.
