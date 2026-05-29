# Audit: advancedEthicsMoralPhilosophy

**Syllabus**: [`src/data/syllabi/high/advanced_ethics.md`](../../../src/data/syllabi/high/advanced_ethics.md)
**Track id**: `advancedEthicsMoralPhilosophy` (Year 12, ages 16-18)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Ethical Method and Moral Argument | weak | No bank covers argument reconstruction at senior level for this track |
| 2. Consequentialism and Utilitarian Reasoning | covered via fallback | One row in `philosophyWorkoutGenerated` (not wired) |
| 3. Deontology, Rights, and Respect for Persons | covered via fallback | One row (not wired) |
| 4. Virtue Ethics, Care Ethics, and Moral Character | partial | Virtue row present; care ethics absent |
| 5. Metaethics, Relativism, and Moral Knowledge | not covered | No metaethics items reach this track |
| 6. Bioethics, Personhood, and Medical Decision-Making | not covered | No autonomy/beneficence/justice items |
| 7. Justice, Power, and Public Ethics | partial | Some overlap with `politicalPhilosophy` bank (Rawls, harm principle) but not wired here |
| 8. Environmental, Animal, Technology, and Media Ethics | not covered | No AI-ethics, animal-welfare, climate-justice items |

Same fallback problem as `introToEthics`: routes to `philosophyCreativeBlueprints` (2 items, cycled 25x).

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x 25 = 50 | **DELETE for this track** | Off-level (Pebble-the-dragon and core-loop). Senior bioethics deserves better. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) | 50 (not wired here) | **MERGE -> advancedEthics (heavy)** | This is roughly the right level. Rows 21-32 (normative, conseq., util., deont., virtue, CI, polphil basics, Rawls, Nozick, liberty, equality) are usable as-is or with light edits. Wire it. |
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) | 0 | **MERGE -> advancedEthics (partial)** | Q's about conflict-of-interest, duty-under-pressure, and consequences-vs-duties are usable for Chapter 7 (Public Ethics). Lift ~6 rows; the rest stay in career. |
| `civicPoliticsQuestions.ts` (`highPoliticalPhilosophyQuestions`, rows on Rawls/civil disobedience) | 0 | **borrow for cross-link** | Don't duplicate; let `politicalPhilosophy` keep them and reference. |

**No hand-authored advanced ethics bank exists.** Major content gap given this is the senior-level capstone-feeder course.

## Duplicate-track flag (philYear cluster)

`philYear12` (`status: 'soon'`, `src/data/ageCatalog/high.ts:385`) has the *exact same title* "Advanced Ethics & Moral Philosophy" as `advancedEthicsMoralPhilosophy` (`status: 'playable'`, line 517). Pure duplicate — same year band, same subtitle phrasing. The May 2026 audit's 6-duplicate flag includes this one. Per Craig's rule, delete the `philYear12` stub or alias it. Bonus quirk: `philYear12` is not even wired in `highGenerated.ts:1443` (no dedicated routing), so it gets only the cycled fallback.

## Open actions (priority order)

1. **Resolve `philYear12` duplicate** — delete stub (aggregator change).
2. **Wire `philosophyWorkoutGenerated.ts` into this track** in `highGenerated.ts` `dedicatedHighCivicQuestionsByTrack`-style map. Note `DEFAULT_FLAW`-style generic `lesson` string ("Coverage source: reviewed OpenTriviaQA philosophy rows…") — rewrite per-question lessons before promoting.
3. **Author 25-30 chapter-specific questions** for bioethics (Ch. 6), metaethics (Ch. 5), and applied tech/animal ethics (Ch. 8). Voice template: hand-authored `civicPoliticsQuestions.ts` sobriety.
4. **Cross-link with `politicalPhilosophy`** for Chapter 7 justice content rather than duplicating.

## Estimated effort

- Wire + sanitize philosophyWorkout (50 Q's): ~3 hours
- Author 25 new bioethics/metaethics/tech-ethics: ~7 hours
- Lift 6 career-ethics rows: ~30 min

## Flags

- **Generic `lesson` string** in `philosophyWorkoutGenerated.ts` functions as a soft DEFAULT_FLAW — every question shares the same "Coverage source" sentence rather than a per-Q teaching moment.
- **Two identical titles** in `high.ts` for `philYear12` and `advancedEthicsMoralPhilosophy` — UI duplication risk.
