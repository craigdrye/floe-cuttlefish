# Audit: introToEthics

**Syllabus**: [`src/data/syllabi/high/intro_to_ethics.md`](../../../src/data/syllabi/high/intro_to_ethics.md)
**Track id**: `introToEthics` (Year 7, ages 11-12)
**Tier**: high
**Region**: jurisdiction-neutral (do not US-tag)

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Makes a Question Ethical? | partial | Generic philosophy blueprint covers "premise" idea but not law-vs-manners-vs-morality sorting |
| 2. Reasons, Feelings, and Fair Discussion | weak | Generic blueprint has no claim/reason/objection scaffold |
| 3. Consequences and the Greatest Good | covered via fallback | Hit only through `philosophyWorkoutGenerated` consequentialism row if/when surfaced |
| 4. Rules, Duties, and Respect for People | covered via fallback | Same, single deontology row |
| 5. Character, Habits, and Flourishing | covered via fallback | Single virtue ethics row |
| 6. Care, Relationships, and Responsibilities | not covered | No care ethics content reaches this track |
| 7. Comparing Frameworks in Real Dilemmas | not covered | No four-column framework comparisons exist |
| 8. Ethics in School, Technology, Animals, and Environment | not covered | No age-appropriate digital/animal/environment ethics items |

The track falls through `familyFor()` -> `philosophy` family -> `philosophyCreativeBlueprints()` (only **2** blueprints). The cycle generator then repeats them 25 times to reach 50, producing **massive duplication** within the playable bank.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 unique x 25 repeats = 50 | **DELETE for this track** | Two blueprints (dragon-syllogism, game core-loop) are both off-topic for Year 7 ethics. The "core loop" item is a game-design question that leaked in because creative + philosophy share the function. Repetition makes this worse, not better. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) | 50 university-grade Q's (not currently wired into this track) | **MERGE -> introToEthics (selective)** | Rows 21-26 (normative, consequentialism, utilitarianism, deontology, virtue, categorical imperative) are good content but pitched for University. Salvage 5-6 as seed material, rewrite at Year 7 reading level. |
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) | 0 (career bank, not wired here) | leave in career | Voice is workplace-ethics, wrong audience. |
| `primaryGeneratedHumanitiesExam.ts` | unknown, primary-tier | **possible MERGE** | Worth grepping for child-level dilemma items that could promote. |

**Hand-authored ethics bank for this track does not exist.**

## Duplicate-track flag (philYear cluster)

`philYear7` (`status: 'soon'`, `src/data/ageCatalog/high.ts:330`) is titled "Introduction to Ethics" — same title, same syllabus territory as `introToEthics` (`status: 'playable'`, `src/data/ageCatalog/high.ts:539`). This is one of the **6 philYear7-12 duplicates** flagged in the May 2026 audit: `philYear7` (Intro Ethics), `philYear8` (Logic & Arg.), `philYear9` (Pol. Phil.), `philYear10` (Epistemology), `philYear11` (Existentialism), `philYear12` (Advanced Ethics). All shadow named playable tracks. Per Craig's "if questions exist, it should be playable" rule, the resolution is: delete the `philYear*` stubs (or alias their ids to the named tracks). The current `status: 'soon'` flag is a bug — the catalog routing in `highGenerated.ts:1450` already maps `philYear9 -> highPoliticalPhilosophyQuestions`, so questions do reach those stubs but the UI hides them.

## Open actions (priority order)

1. **Resolve `philYear7` duplicate** — delete stub or alias to `introToEthics` (aggregator change, not for this auditor).
2. **Author 30-40 Year 7-level ethics questions** — hand-written, dilemma-rich, jurisdiction-neutral; one bank per chapter. Voice template: `civicPoliticsQuestions.ts` (sober, per-distractor) but with concrete school/family/online cases per the syllabus.
3. **Remove philosophy fallback for this track** — `philosophyCreativeBlueprints` should not produce 50 cycled items; cap or replace.
4. **Salvage 5-6 rows from `philosophyWorkoutGenerated.ts`** — rewrite at Year 7 reading level (drop "tripartite analysis," add "true, believed, and for a fair reason").

## Estimated effort

- Author ~32 hand-written questions (4 per chapter): ~8 hours
- Salvage + rewrite from philosophyWorkout: ~1 hour
- Aggregator fix (out of scope): ~30 min

## Notes for next auditor

The whole **philYear7-12 + philosophyCapstone + introToEthics + advancedEthicsMoralPhilosophy + logicAndArgumentation + politicalPhilosophy + epistemologyBasics + existentialism** cluster shares the same fallback path. Fixing one fallback fixes many — but the named tracks still each need their own hand-authored bank because their reading level and chapter taxonomy differ.
