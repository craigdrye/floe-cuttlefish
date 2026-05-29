# Audit: practicalPolitics

**Syllabus**: [`src/data/syllabi/high/practical_politics_and_voting.md`](../../../src/data/syllabi/high/practical_politics_and_voting.md)
**Track id**: `practicalPolitics`
**Tier**: high
**Region**: **US + UK + EU explicit** (syllabus is consciously trijurisdictional). Region tag needed: `regions: ['US', 'UK', 'EU']` or similar.

## Coverage map (syllabus -> questions)

| Syllabus unit | Covered? | Notes |
|---|---|---|
| 1. Citizenship, Democracy, and Political Power | yes | Sovereignty, rule-of-law, representation rows present |
| 2. Elections, Voting Systems, and Representation | yes | FPTP, ranked-choice, proportional rep all covered (sample item: "First past the post") |
| 3. U.S. Government in Practice | yes | Bill-to-law, House-vs-Senate, federalism well covered |
| 4. U.K. Government in Practice | yes | PM, House of Lords, Commons confidence covered (sample: "Prime minister clue") |
| 5. The European Union and Multi-Level Governance | yes | EU Commission/Parliament/Council distinction present per file structure |
| 6. Political Ideas, Parties, and Public Opinion | partial | Ideologies covered; polling literacy and margin-of-error light |
| 7. Money, Media, Lobbying, and Influence | partial | Campaign finance/lobbying covered; need more on disinformation and platform-incentive items |
| 8. Civic Action Lab | weak | This is mostly practice/portfolio territory; some "how to contact a representative" items present but more would help |

`highPracticalPoliticsQuestions` (~169 items by id count) is the dedicated bank, wired via `dedicatedHighCivicQuestionsByTrack` at `highGenerated.ts:1452`. This is one of the **best-served tracks** in the cluster, alongside `politicalPhilosophy` and `constitution101`.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) | ~169 | **KEEP** | Hand-authored, per-distractor explanations, genuinely comparative across US/UK/EU. Chapter taxonomy ("U.S. Institutions," "Voting Systems," "U.K. Parliament") roughly matches syllabus units — verify wording alignment. Sober tone, nonpartisan, balanced. |
| `civicPoliticsQuestions.ts -> highUsGovernmentCivicsQuestions` and `highApUsGovernmentQuestions` | 0 (wired to other tracks) | **cross-reference** | Overlap on US institutions is intentional — `usGovAndCivics` and `col-ap-us-government-politics` are deeper US-only courses. Don't duplicate; ensure no Q lifts. |
| `highGenerated.ts` blueprint fallback | minimal (history family routes to `historyBlueprints`) | leave | Politics/voting words push `familyFor` to 'history' (correctly), so the fallback at least produces history-shaped items rather than dragon syllogisms. Still off-topic — bank should be self-sufficient and not need top-up. |

## Region tagging (mandatory for this track)

The syllabus is explicit: "United States, the United Kingdom, and the European Union." Sample items in `practicalPoliticsQuestions.ts` clearly cover all three. **Add `regions: ['US', 'UK', 'EU']` tag** to the track entry in `src/data/ageCatalog/high.ts:1433`. This is the only cluster track that needs *multi*-region tagging — most US-civics tracks (`constitution101`, `usGovAndCivics`) need `region: 'US'`, and the philosophy tracks are jurisdiction-neutral.

## Duplicate-track flag

No `philYear*` duplicate. `practicalPolitics` is distinct from `usGovAndCivics` and `constitution101` — the syllabus deliberately broadens scope.

## Open actions (priority order)

1. **Add `regions: ['US', 'UK', 'EU']`** to track entry (schema may need extension to support multi-region).
2. **Author 8-10 polling-literacy items** (sample size, margin of error, question wording, trend interpretation, hidden-bias polls).
3. **Author 6-8 disinformation/platform-incentive items** for Unit 7.
4. **Author 6-8 civic-action items** for Unit 8 (writing to a representative, public-comment process, attending a council meeting, petition mechanics).
5. **Verify chapter-name alignment** between the bank's `chapter` strings and the syllabus unit titles.
6. **Cross-check** for accidental duplication with `usGovAndCivics`, `col-ap-us-government-politics`, and `constitution101`.

## Estimated effort

- Region-tag schema + tag: ~1 hour
- 20-25 new questions across Units 6-8: ~6 hours
- Chapter-name alignment + dedup audit: ~2 hours

## Flags

- **No DEFAULT_FLAW** in the hand-authored bank.
- **Region tag missing** — this is the cluster's only multi-region track, makes it the canonical test case for the schema change.
- **Possible overlap** with `usGovAndCivics` and `col-ap-us-government-politics` warrants a spot-check.
