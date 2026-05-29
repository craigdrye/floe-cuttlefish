# Audit: logicAndArgumentation

**Syllabus**: [`src/data/syllabi/high/logic_and_argumentation.md`](../../../src/data/syllabi/high/logic_and_argumentation.md)
**Track id**: `logicAndArgumentation` (High School)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Counts as an Argument? | yes | `logicArgumentationBlueprints` covers premise/conclusion well |
| 2. Argument Mapping and Fair Interpretation | weak | No steelman, charity, or argument-map questions |
| 3. Deductive Logic | yes | Modus ponens, tollens, validity, soundness all covered |
| 4. Inductive, Causal, and Statistical Reasoning | partial | Hasty generalization + post hoc only; no base rates, sample size, correlation/causation depth |
| 5. Informal Fallacies Without Fallacy Bingo | yes | Ad hominem, straw man, red herring, slippery slope, circular, tu quoque, false dilemma — but each is "name the fallacy," not "explain the defect" as the syllabus requires |
| 6. Rhetoric, Persuasion, and Responsible Debate | partial | Ethos/pathos/logos appear; no audience or concession items |
| 7. Cognitive Biases and Intellectual Habits | not covered | No confirmation bias, motivated reasoning, anchoring, Dunning-Kruger |
| 8. Capstone Argument Studio | n/a | Capstone is a portfolio, not a Q-bank target |

This is the **best-served philosophy track in the cluster** because of the dedicated `logicArgumentationBlueprints` (~30 items, dispatched by title match in `highGenerated.ts:1388`) plus `highLogicArgumentationOpenLogicBatch` (10 items) plus `schoolAssessmentLogicArgumentationQuestions` (2 items).

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `logicArgumentationBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) (lines 637-1384) | ~30 unique x cycle to 50 | **KEEP / FIX** | Solid per-distractor explanations, playful "Pebble," "Tavi," "Ria" framing, real fallacy taxonomy. Issues: chapter taxonomy ("Formal Logic," "Informal Fallacies") doesn't match the syllabus chapter names ("Deductive Logic," "Informal Fallacies Without Fallacy Bingo"). Rename chapters. Also, syllabus explicitly wants students to "explain the reasoning defect rather than merely naming the fallacy" — current Q's mostly ask for the fallacy name. Add 6-8 "what specifically went wrong" variants. |
| [`highLogicArgumentationOpenLogicBatch.ts`](../../../src/data/questionCatalog/highLogicArgumentationOpenLogicBatch.ts) | 10 | **KEEP** | High quality, per-distractor, correctly tagged "Argument Structure," "Validity," "Conditionals," "Formal Fallacies," "Quantifier Thinking." Generic `lesson` string ("Open Logic Project raw collection, adapted…") is a mild DEFAULT_FLAW — rewrite the lesson field per question. |
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (`schoolAssessmentLogicArgumentationQuestions`, lines 243-274) | 2 | **MERGE -> logicArg main** | Two STAAR-derived items about controlling claims and evidence-vs-popularity. Fits Chapter 1/4. Two items is not enough to justify a separate file — fold in. |
| `formalLogicGenerated.ts`, `formalLogicWorkoutGenerated.ts`, `formalLogicOpenLogicBatch.ts`, `formalLogicSetTheoryBatch.ts` | 0 (university tier) | **leave** | University-level formal logic banks; not appropriate here. |

## Duplicate-track flag (philYear cluster)

`philYear8` (`status: 'soon'`, `src/data/ageCatalog/high.ts:341`) is titled "Logic & Argumentation" — exact title duplicate of `logicAndArgumentation` (`status: 'playable'`, line 1499). The aggregator code at `highGenerated.ts:1582` already routes both ids to the same blueprint + Open Logic batch — i.e. the questions exist for `philYear8`, only the UI flag hides it. Per Craig's "if questions exist, it should be playable" rule, this is a bug. Delete the `philYear8` stub or set `status: 'playable'` and alias.

## Open actions (priority order)

1. **Resolve `philYear8` duplicate** — delete stub (aggregator change).
2. **Rename `logicArgumentationBlueprints` chapters to match the syllabus** — "Argument Structure" -> "What Counts as an Argument", "Deductive and Inductive Reasoning" -> split into "Deductive Logic" and "Inductive, Causal, and Statistical Reasoning", etc.
3. **Author 6-8 "explain the defect" fallacy questions** — the syllabus explicitly de-emphasizes label-spotting; current questions are mostly label-spotting.
4. **Author 6-8 Chapter 7 bias questions** (confirmation bias, motivated reasoning, anchoring, availability, Dunning-Kruger) — total content gap.
5. **Author 4-5 argument-mapping/steelman questions** for Chapter 2.
6. **Rewrite per-question `lesson` fields** in `highLogicArgumentationOpenLogicBatch.ts` to remove the generic "Coverage source" footnote.

## Estimated effort

- Chapter rename: ~30 min
- 20 new questions (defect explanation, bias, steelman): ~5 hours
- Lesson-field rewrite (10 items): ~45 min

## Notes

This track is the closest thing in the cluster to a working "KEEP with FIX" — the existing blueprint file is the right shape and largely the right voice. Use it as the model when authoring banks for the other philosophy tracks.
