# Audit: logicCriticalThinking

**Syllabus**: [`src/data/syllabi/university/logic_critical_thinking.md`](../../../src/data/syllabi/university/logic_critical_thinking.md)
**Track id**: `logicCriticalThinking`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:358`)
**Region**: jurisdiction-neutral. Formal logic, fallacies, Bayesian reasoning are universal.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:555`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Arguments, Charity, Standard Form | ✅ | Inherited via `logicCriticalThinkingTitles` filter — Argument clue, Validity, Modus Ponens, JTB, Gettier, Induction |
| 2. Propositional Logic (truth tables, MP/MT, De Morgan) | ✅ partial | Modus Ponens only; no truth-table or De Morgan items |
| 3. Predicate Logic and Quantifiers | ✅ partial | Open Logic / DSA imports — Many-One Reduction, Compactness, Definability (graduate-level; too advanced) |
| 4. Informal Fallacies and Cognitive Bias | ✅ thin | Ad Hominem only; no straw-man, slippery slope, anchoring, confirmation bias |
| 5. Induction, Probability, Causation | ✅ partial | Hume's Induction; no Bayes / base-rate / confounder items |
| 6. Scientific Reasoning and Evidence | ❌ | Falsifiability lives on `formalLogic` and `philosophy`; not inherited |
| 7. Public Discourse, Digital Claims, AI | ❌ | **No coverage anywhere** — modern syllabus topic with no question-bank presence |
| 8. Argument Mapping and Reasoned Prose | ⚠️ | Toulmin on `englishComposition101`; not inherited here |

**Wiring**: `logicCriticalThinking` is derived as `.filter()` over `philosophy` titles plus three import banks (`openDsaCoreFormalLogicQuestions`, `openLogicProjectLogicCriticalThinkingQuestions`, `logicCsAdditionalLogicCriticalThinkingQuestions`). The inherited philosophy items use the hardcoded `logicCriticalThinkingTitles` set at [`universityAcademic.ts:48`](../../../src/data/questionCatalog/universityAcademic.ts) — 10 specific titles only.

**Chapter taxonomy**: mixed. Inherited items use chapters from `philosophy` ("Doing Philosophy", "Stretch Zone", "Epistemology"). Open Logic Project items use "Proof Strategy" / "Reductions" etc. No chapter matches the syllabus chapter names.

## Per-file recommendations

| File | logicCriticalThinking Q's | Bucket | Reason |
|---|---|---|---|
| `philosophy.filter(title ∈ logicCriticalThinkingTitles)` ([`universityAcademic.ts:48–59,358`](../../../src/data/questionCatalog/universityAcademic.ts)) | 10 | **KEEP** | Hand-authored items (Argument clue, Validity, Modus Ponens, JTB, Gettier, Induction, Ad Hominem). Per-distractor explanations are real. **Filter set is hardcoded title strings** — a title rename in `philosophy` silently drops the item. Fragile derivation. |
| [`openLogicProjectLogicCriticalThinkingQuestions`](../../../src/data/questionCatalog/openLogicProjectImported.ts) | unknown | **KEEP / RESCOPE** | Open Logic Project conversions. **Quality is real** (per-distractor `miss` triples on reductions, compactness, definability). **But content is graduate-level computability/incompleteness**, not intro critical-thinking. Move to `formalLogic`. |
| [`logicCsAdditionalLogicCriticalThinkingQuestions`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) | ~4 | **KEEP / RESCOPE** | Same pattern — Many-One Reduction, Compactness Setup, Computable Inseparability. Graduate math logic on wrong track. Move to `formalLogic`. |
| [`openDsaCoreFormalLogicQuestions`](../../../src/data/questionCatalog/openDsaCoreImported.ts) | unknown | **KEEP / RESCOPE** | Same pattern. Belongs on `formalLogic`. |

**No DEFAULT_FLAW. No trivia imports. But major content-fit mismatch**: syllabus is intro critical reasoning (fallacies, bias, Bayes, science, AI/misinformation); feeders are graduate proof theory.

**Net effect**: ~30 wired items, 10 intro-appropriate + ~20 graduate mis-routed. After rescoping, ~10 high-quality intro items remain — large authoring backlog for chapters 4 (fallacy/bias), 5 (Bayes/confounders), 6 (replication/pseudoscience), 7 (digital claims/AI), 8 (Toulmin).

## Open actions (priority order)

1. **Move the three OpenLogic/OpenDSA import wirings** from `logicCriticalThinking` to `formalLogic` ([`universityAcademic.ts:358–363`](../../../src/data/questionCatalog/universityAcademic.ts)). Content is good; just wrong track.
2. **Expand `logicCriticalThinkingTitles`** to pull more from `philosophy` (Soundness, Induction, Falsifiability, Paradigm, Underdetermination, Inference to Best Explanation — all exist in `philosophyWorkoutGenerated.ts`).
3. **Author 15–20 chapter-4 fallacy/bias items** — straw man, equivocation, slippery slope, false dilemma, confirmation bias, availability, anchoring, motivated reasoning. Largest gap.
4. **Author 8–10 chapter-5 probabilistic items** — Bayes update, base rates, confounders, P(A|B) vs P(B|A), expected value.
5. **Author 6–8 chapter-6 + chapter-7 items** — p-hacking, replication, pseudoscience demarcation; lateral reading, AI hallucination, deepfake awareness. Chapter 7 is the syllabus's most distinctive contemporary contribution.
6. **Author 4–5 chapter-8 argument-mapping items** — Toulmin claim/ground/warrant, rebuttal moves.
7. **Replace hardcoded title-set derivation** with chapter-tag approach for resilience against `philosophy` title renames.

## Estimated effort

- Rescope + expand title set: ~1 hour
- Chapter 4 fallacy/bias: ~6 hours (18 × 20 min)
- Chapters 5–7 authoring: ~8 hours (24 × 20 min)
- Chapter 8 + derivation refactor: ~2.5 hours

**~2 working days.** Second-largest backlog after `contemporaryEthics`. Existing wiring is either fragile (title filter) or content-mismatched (graduate proof theory on intro track).

## Notes for next auditor

`logicCriticalThinking` and `formalLogic` are **paired tracks with tangled wiring.** Same import banks (`openDsaCoreFormalLogicQuestions`, `openLogicProjectFormalLogicQuestions`/`LogicCriticalThinkingQuestions`) feed both, without honoring the syllabus distinction: `formalLogic` is proof/quantifier/computability; `logicCriticalThinking` is fallacy/bias/Bayes/argument-mapping.

The graduate-level content (Many-One Reduction, Compactness, Tarski definability) is excellent for `formalLogic` and wrong for `logicCriticalThinking`. Fix is wiring-only.

Hardcoded `logicCriticalThinkingTitles` filter is the most fragile derivation in the cluster — same pattern flagged in `contemporaryEthics.md` (`moralCrossroadsTitles`). Chapter-tag-based derivation would be more resilient.

Chapter 7 (digital claims, AI hallucination, deepfakes) has zero coverage anywhere in the cluster and is the highest-impact contemporary authoring lift.
