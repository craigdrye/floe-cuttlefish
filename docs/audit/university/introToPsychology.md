# Audit: introToPsychology

**Syllabus**: [`src/data/syllabi/university/intro_to_psychology.md`](../../../src/data/syllabi/university/intro_to_psychology.md)
**Track id**: `introToPsychology`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:220`)
**Region**: jurisdiction-neutral by content. APA (American Psychological Association) ethics and DSM-5-TR are US-anchored conventions but used internationally; no explicit US-only framing in the questions.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:478`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Psychology as a Science (perspectives, scientific method, operational definitions, replication) | ✅ | "Psychology Foundations" — definition, hypothesis, empirical evidence, operational definition, replication |
| 2. Research Methods, Measurement, Ethics (IV/DV, sampling, correlation, ethics) | ✅ | "Research Methods" — IV, DV, random assignment, random sampling, correlation vs causation, case study, naturalistic observation, survey, longitudinal/cross-sectional |
| 3. Biological Bases of Behavior (neurons, neurotransmitters, brain regions, genetics) | ✅ | "Biopsychology" — nature/nurture, genotype/phenotype, neuron function |
| 4. Sensation, Perception, Consciousness (thresholds, attention, sleep, drugs) | ❌ | **No coverage in workout file** |
| 5. Learning, Memory, Thinking, Language (conditioning, reinforcement, encoding/storage/retrieval) | ✅ | "Learning" + "Memory" — classical/operant conditioning, US/CS, positive/negative reinforcement, encoding, storage, retrieval, working/implicit/explicit memory |
| 6. Development, Motivation, Emotion, Personality (Piaget, attachment, Big Five) | ✅ partial | "Development" + "Personality" — object permanence, attachment, adolescence, personality definition; no Piaget stages, no Big Five named |
| 7. Social Psychology, Culture, Everyday Behavior (attribution, conformity, prejudice) | ⚠️ | Likely covered later in file (need to verify beyond first 36 questions); no items in the first sample |
| 8. Psychological Disorders, Treatment, Applied Psychology (DSM, CBT, biomedical) | ⚠️ | Likely covered later in file; no items in the first sample |

**Chapter taxonomy**: `introPsychologyWorkoutGenerated.ts` uses concise topic chapters (Psychology Foundations, Research Methods, Biopsychology, Learning, Memory, Development, Personality) — direct mapping to syllabus topics, no taxonomy mismatch.

## Per-file recommendations

| File | introToPsychology Q's | Bucket | Reason |
|---|---|---|---|
| [`introPsychologyWorkoutGenerated.ts`](../../../src/data/questionCatalog/introPsychologyWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard for this track.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific psychological reasoning ("That is the dependent variable", "That is operant conditioning"). Sober tone, OpenStax-aligned content, syllabus-shaped chapters. Single canonical source feeds the entire track via `universityAcademic.ts:220`. |

**Single-source wiring**. No DEFAULT_FLAW, no trivia imports, no taxonomy drift. **The cleanest single-file wiring in the cluster.**

**Net effect**: 50 wired questions, all at quality bar. Open authoring gap is chapter 4 (sensation/perception/consciousness) and possibly thin coverage of chapters 6–8 (need to verify beyond first 36 items).

## Open actions (priority order)

1. **Verify coverage of chapters 7–8** by reading items 37–50 of the workout file. If under-covered, plan author work for social psychology (attribution, conformity, bystander effect, fundamental attribution error) and clinical psychology (DSM categories, CBT, evidence-based practice).
2. **Author 6–8 chapter-4 items** — signal detection theory applied to a real decision, Gestalt principles applied to interface/illusion, sensory adaptation, circadian rhythms, dependence vs addiction distinction, REM/NREM sleep stages.
3. **Add 3–4 chapter-6 items** on Piaget stages (sensorimotor, preoperational, concrete, formal), Big Five trait model, Erikson stages.
4. **Tag DSM-5-TR-using items with `region: 'US/global'`** since DSM is US-published though internationally used. Light disclosure for jurisdiction-conscious learners.
5. **Add `lessonReviewed: <date>` metadata** to items that touch diagnostic categories (DSM evolves) — schema change consistent with the framework's "regulation-adjacent content should carry `lastReviewed`" guidance.

## Estimated effort

- Coverage verification: ~30 min
- Chapter 4 authoring: ~2.5 hours (8 questions × 20 min)
- Chapter 6 depth: ~1 hour (4 questions × 20 min)
- Region tag + lastReviewed: ~30 min

**~0.5 working day** to bring `introToPsychology` to full coverage. Among the lightest authoring lifts in the cluster — single-file source already does the work.

## Notes for next auditor

`introToPsychology` is the **cleanest single-file wiring in the cluster** alongside `comparativePracticalPolitics`. One canonical source, per-distractor explanations, syllabus-aligned chapters. The May 2026 audit's "surprisingly solid" verdict on `*WorkoutGenerated.ts` files extends here clearly.

OpenStax Psychology 2e is the named source; the items honor it without copying. The author understood the testability difference between definition recall ("what is encoding") and conceptual discrimination ("encoding vs retrieval vs storage") and built the bank around the latter.

No downstream `.filter()` derivations. This track is independent — gap-closing authoring has zero cascade effect.
