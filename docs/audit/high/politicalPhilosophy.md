# Audit: politicalPhilosophy

**Syllabus**: [`src/data/syllabi/high/political_philosophy.md`](../../../src/data/syllabi/high/political_philosophy.md)
**Track id**: `politicalPhilosophy` (Year 9, ages 13-14)
**Tier**: high
**Region**: jurisdiction-neutral (syllabus explicitly nonpartisan and comparative)

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Why Have Government? | yes | Legitimacy, social contract rows in `highPoliticalPhilosophyQuestions` |
| 2. Citizenship, Virtue, and Constitutional Design | partial | Constitutional design covered by cross-link to `constitution101`; civic virtue thin |
| 3. Liberty, Rights, Speech, and Harm | yes | Harm principle, negative/positive liberty present |
| 4. Justice, Equality, Property, and Work | yes | Rawls veil of ignorance, property debates, equality |
| 5. Power, Ideology, and Political Reality | partial | Ideology as map covered; propaganda/hegemony/Weber typology absent |
| 6. Democracy, Pluralism, and Disagreement | partial | Majority/minority rights covered; civil disobedience, public reason, polarization absent |
| 7. Borders, Empire, Global Justice, and Climate | weak | Indigenous sovereignty row exists; borders, migration, climate justice, intergenerational justice missing |
| 8. Seminar, Texts, and Public Argument | n/a | Capstone-style; not a Q-bank target |

This is the **second-best-served track** in the cluster. The dedicated `highPoliticalPhilosophyQuestions` bank (152 items by id count in `civicPoliticsQuestions.ts`) is wired through `dedicatedHighCivicQuestionsByTrack` in `highGenerated.ts:1449`.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`civicPoliticsQuestions.ts -> highPoliticalPhilosophyQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (line 1494 onward) | ~152 | **KEEP** | High-quality hand-authored: per-distractor explanations, real concepts (legitimacy, harm principle, veil of ignorance, civil disobedience, feminist political theory, Indigenous sovereignty, anarchism, platform governance, religion-and-authority). Sober tone, jurisdiction-neutral. This is the gold-standard bank for the cluster. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) rows 27-32 | 0 (not wired here) | **possible MERGE** | University-level Rawls/Nozick/liberty/equality. Likely redundant with the existing bank; spot-check for unique angles before lifting. |
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x cycled | **suppressed** | Because `politicalPhilosophy` has a dedicated bank in `dedicatedHighCivicQuestionsByTrack`, the fallback still appends generated questions in `generatedQuestions`. Verify the order — dedicated should dominate. The two off-topic items (dragon syllogism, core loop) will still appear in the cycled top-up. |

## Duplicate-track flag (philYear cluster)

`philYear9` (`status: 'soon'`, `src/data/ageCatalog/high.ts:352`) is titled "Political Philosophy" — exact duplicate of `politicalPhilosophy` (`status: 'playable'`, line 1345). `highGenerated.ts:1450` already routes `philYear9` to `highPoliticalPhilosophyQuestions`, so the entire 152-item bank already reaches `philYear9` — the `status: 'soon'` flag is hiding a fully populated track from the UI. Per Craig's rule, delete the stub or flip the flag.

## Open actions (priority order)

1. **Resolve `philYear9` duplicate** — delete stub.
2. **Close Chapter 5 gaps**: 6-8 questions on propaganda, hegemony, Weber's authority typology (charismatic / traditional / legal-rational), bureaucracy, complicity.
3. **Close Chapter 6 gaps**: 6-8 questions on civil disobedience, public reason, polarization, deliberation.
4. **Close Chapter 7 gaps**: 6-8 questions on borders, migration, climate justice, intergenerational justice, postcolonial critique.
5. **Suppress the philosophyCreative fallback for this track** so the dragon-syllogism question doesn't dilute a real Year 9 polphil set.
6. **Verify nonpartisan tone** — spot-check the Indigenous sovereignty and feminist political theory rows for the syllabus's "name tradeoffs and reconstruct several plausible views before defending their own" standard.

## Estimated effort

- Author ~20 chapter-gap questions: ~5 hours
- Fallback suppression: ~30 min in `highGenerated.ts`
- Audit for partisan drift: ~1 hour

## Notes

The `civicPoliticsQuestions.ts` voice is the right model for the rest of the philosophy + civics cluster. Where you have to author from scratch (intro_to_ethics, advanced_ethics, epistemology, existentialism), copy this voice and its per-distractor rigour.
