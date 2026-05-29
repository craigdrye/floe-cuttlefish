# Audit: apPsychology

**Syllabus**: [`src/data/syllabi/high/ap_psychology.md`](../../../src/data/syllabi/high/ap_psychology.md)
**Track id**: `apPsychology` (high.ts line 1719)
**Tier**: high
**Region**: US (College Board exam; not currently tagged). Note: 2024+ AP Psych framework revision adds science-practice emphasis — verify all items still align.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Psychology as a Science | yes | Hypothesis, operationalization, experiment, confound, ethics, informed consent. |
| 2. Biological Bases of Behavior | yes | Neuron, dendrite, action potential, myelin, neurotransmitter, endocrine system. Missing: nervous system divisions, brain structures by name (no amygdala/hippocampus/cortex). |
| 3. Sensation, Perception, Consciousness | partial | Absolute threshold, difference threshold (JND), sensation vs perception. Missing: Gestalt principles, sleep stages, dreams, psychoactive drugs. |
| 4. Learning | yes | Classical/operant conditioning, reinforcement vs punishment, negative reinforcement (correctly distinguished from punishment). |
| 5. Cognitive Psychology | partial | Encoding/storage/retrieval, working memory. Missing: heuristics, biases, language, intelligence testing, validity/reliability. |
| 6. Development, Motivation, Emotion, Personality | partial | Piaget, object permanence, attachment, adolescent identity, trait theory. Missing: Erikson, Kohlberg, Maslow, emotion theories (James-Lange, Cannon-Bard, Schachter-Singer). |
| 7. Social Psychology and Mental Health | partial | Conformity, anxiety disorder feature, CBT. Missing: obedience (Milgram), attribution (FAE), bystander effect, schizophrenia/mood disorder specifics. |
| 8. AP Psychology Exam Studio | minimal | The "Review Skills" coverage is thin compared to APHG/APUSH skill batches. |

**May 2026 rubric finding: does NOT apply.** Both AP Psych files are content-bearing. Per-distractor whys correctly distinguish neighbouring concepts (negative reinforcement vs positive punishment; sensation vs perception; encoding vs retrieval).

**Chapter taxonomy mismatch.** File chapters ("Scientific Foundations", "Biological Bases", "Sensation and Perception", "Learning", "Cognition", "Development", "Personality", "Psychological Disorders", "Therapy", "Social Psychology") map mostly to syllabus chapters 1-7 but use 10 chapters versus syllabus's 8. Consolidate: "Personality" + "Development" + "Motivation" → Chapter 6; "Disorders" + "Therapy" + "Social" → Chapter 7.

## Per-file recommendations

| File | AP Psych Q's | Bucket | Reason |
|---|---|---|---|
| [`apPsychologyWorkoutGenerated.ts`](../../../src/data/questionCatalog/apPsychologyWorkoutGenerated.ts) | 50 | **FIX → canonical bank** | Strong content. Per-distractor whys are tight ("encoding vs retrieval", "Piaget vs Skinner", "sensation vs perception"). Fix: consolidate to 8 syllabus chapters. Add items for the partial-coverage areas (Gestalt, sleep stages, heuristics, Milgram, FAE, Schachter-Singer). |
| [`apPsychologyExamBatch.ts`](../../../src/data/questionCatalog/apPsychologyExamBatch.ts) | 10 | **MERGE → WorkoutGenerated** | Substantial overlap (operational definition, neurotransmitter, absolute threshold, negative reinforcement, working memory, object permanence, trait theory, anxiety disorder, CBT, conformity). Less depth than WorkoutGenerated. Cut 8 duplicates; lift the "trait theory" and "anxiety disorder central feature" framings if cleaner. Unlike `apHistoryExamBatch`/`apEnglishExamBatch`, this is NOT pure rubric — it's content that just duplicates WorkoutGenerated. |
| [`introPsychologyWorkoutGenerated.ts`](../../../src/data/questionCatalog/introPsychologyWorkoutGenerated.ts) | unknown | **CHECK cross-routing** | University-tier psych bank. Verify it doesn't cross-route into AP Psych (would over-load track and conflict with revised AP framework). |
| [`neuroscienceWorkoutGenerated.ts`](../../../src/data/questionCatalog/neuroscienceWorkoutGenerated.ts) | unknown | **CHECK cross-routing** | Same — university neuroscience may overflow Chapter 2 with material beyond AP scope. |
| `bonusIdentificationQuestions.ts` (psych subset) | unknown | **CHECK** | Verify no overlap. |

**Net effect**: 60 questions → ~55 (after dedupe) + ~15 new items for partial-coverage chapters = ~70 high-quality AP Psych questions.

## Open actions (priority order)

1. **Consolidate file chapters** from 10 to 8 syllabus chapters.
2. **Dedupe and MERGE** `apPsychologyExamBatch` into WorkoutGenerated (~2 unique framings kept, 8 cut).
3. **Author ~15 items** to close Chapter 3, 5, 6, 7 gaps (Gestalt, sleep, heuristics, Maslow, emotion theories, Milgram, FAE, schizophrenia diagnostic features, CBT vs psychodynamic vs humanistic distinctions).
4. **Add ~5 research-design / data-interpretation FRQ-style items** for revised AP framework's science-practice emphasis. Include scenario with sample-size/operationalization question.
5. **Add `region: 'US'`** to `apPsychology` in `high.ts`.
6. **Add `lastReviewed`** date metadata flag — DSM-5-TR + AP framework rev means clinical terminology should be checked at least annually.
7. **Verify no overflow** from `introPsychologyWorkoutGenerated.ts` and `neuroscienceWorkoutGenerated.ts` (university-tier).

## Estimated effort

- Chapter consolidation: ~1 hour.
- Dedupe ExamBatch merge: ~1 hour.
- 15 closure items + 5 FRQ-style: ~5 hours.
- Cross-routing audit: ~1 hour.
- Region tag + lastReviewed metadata: ~30 min.

**~1 working day.**

## Notes for next auditor

AP Psychology is one of the strongest content banks in the cluster — second only to AP US Gov. The revised AP framework (announced 2024, exam from 2025) increased emphasis on research methods, science practices, data interpretation. Floe's Chapter 1 coverage is solid; Chapters 3, 6, 7 need closing items, ideally with scenario stems. Clinical content (Chapter 7) needs a `lastReviewed` discipline — DSM-5-TR is a moving target.
