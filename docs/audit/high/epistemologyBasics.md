# Audit: epistemologyBasics

**Syllabus**: [`src/data/syllabi/high/epistemology_basics.md`](../../../src/data/syllabi/high/epistemology_basics.md)
**Track id**: `epistemologyBasics` (High School)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Is Knowledge? | not covered (in this track's wired bank) | Single belief/truth/justification row exists in `philosophyWorkoutGenerated` but is not wired here |
| 2. Justified True Belief and the Gettier Shock | not covered | Gettier row exists in `philosophyWorkoutGenerated` but not wired |
| 3. Sources of Knowledge | not covered | Rationalism/empiricism, a priori/a posteriori rows in `philosophyWorkoutGenerated` but not wired |
| 4. Skepticism, Doubt, and Certainty | not covered | Skepticism row in `philosophyWorkoutGenerated` but not wired |
| 5. Induction, Science, and Evidence | not covered | Falsifiability, paradigm, underdetermination, IBE all in `philosophyWorkoutGenerated` philsci section, not wired |
| 6. Truth, Relativism, and Disagreement | not covered | No coherence/correspondence/pragmatic theory rows reach this track |
| 7. Social Epistemology and Epistemic Justice | not covered | Total gap — testimony, expertise, echo chamber, testimonial injustice |
| 8. Capstone: Responsible Belief Portfolio | n/a | Portfolio assignment |

**This is the worst-served philosophy track in the cluster.** No dedicated bank exists; the track falls through to `philosophyCreativeBlueprints` (2 items, cycled 25x) producing a 50-item bank of dragon-syllogism + core-loop repeats. Effectively zero real epistemology content reaches a player.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x 25 = 50 | **DELETE for this track** | Off-topic completely. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) rows 7-14, 33-36 | 0 (not wired here) | **MERGE -> epistemologyBasics (heavy)** | ~12 directly relevant items: epistemology definition, JTB, Gettier, skepticism, empiricism, rationalism, a priori, a posteriori, falsifiability (Popper), paradigm (Kuhn), underdetermination, inference-to-best-explanation. This is most of the syllabus core. Wire it and rewrite the generic `lesson` strings. |
| `civicPoliticsQuestions.ts`, `practicalPoliticsQuestions.ts` | 0 | leave | Wrong topic. |

## Duplicate-track flag (philYear cluster)

`philYear10` (`status: 'soon'`, `src/data/ageCatalog/high.ts:363`) is titled "Epistemology Basics" — exact duplicate of `epistemologyBasics` (`status: 'playable'`, line 1576). Neither is wired in `highGenerated.ts:1443` map, so both produce the same fallback nonsense. Per Craig's rule, delete the `philYear10` stub. The bigger fix is wiring real epistemology questions to both ids.

## Open actions (priority order)

1. **Resolve `philYear10` duplicate** — delete stub.
2. **Wire `philosophyWorkoutGenerated.ts` epistemology rows** (7-14) + philsci rows (33-36) into a `dedicatedHighCivicQuestionsByTrack`-style map for `epistemologyBasics` and `philYear10`.
3. **Rewrite the generic `lesson` footnote** in the salvaged rows (currently "Coverage source: reviewed OpenTriviaQA philosophy rows…" — soft DEFAULT_FLAW).
4. **Author 20-25 questions** for the uncovered chapters: testimony/expertise (Ch. 3 extension), source reliability (Ch. 7), echo chambers/testimonial injustice (Ch. 7), induction-vs-deduction practical (Ch. 5), correspondence-coherence-pragmatic truth theories (Ch. 6).
5. **Suppress the dragon-syllogism fallback** for this track.

## Estimated effort

- Wire + sanitize philosophyWorkout rows (~12 Q's): ~2 hours
- Author 20 new chapter-gap questions: ~5 hours
- Fallback suppression: ~30 min

## Flags

- **DEFAULT_FLAW pattern (soft)**: every question in `philosophyWorkoutGenerated.ts` shares the identical `lesson:` text ("Coverage source: reviewed OpenTriviaQA philosophy rows plus intro philosophy and Open Logic adjacent skill gaps. This is an authored Floe-native drill item, not a direct raw import."). Functions as DEFAULT_FLAW: every right answer has the same boilerplate, no per-question teaching moment. Address before promoting any of these rows.
- **No dedicated route** in `dedicatedHighCivicQuestionsByTrack` despite Q's existing in adjacent banks.
- **University-level pitch** in `philosophyWorkoutGenerated.ts` (e.g. "tripartite analysis," "Mary's Room") — may need light reading-level edits for High School.
