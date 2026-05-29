# Audit: lsat (LSAT Prep)

**Syllabus**: [`src/data/syllabi/university/lsat_prep.md`](../../../src/data/syllabi/university/lsat_prep.md)
**Track id**: `lsat`
**Tier**: university (exam-prep discipline)
**Region**: **US-specific** — LSAT is the Law School Admission Council (LSAC) credential for US/Canada JD admissions. Not used by UK/EU/AU law schools. Not currently `region`-tagged in [`src/data/ageCatalog/university.ts:421`](../../../src/data/ageCatalog/university.ts).
**Status**: `playable`

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. LSAT Orientation, Baseline, Study System | ❌ | No score-report interpretation, weekly-planning, blind-review-vs-timed-review items |
| 2. Argument Structure and Formal Logic | ✅ | Contrapositive (id 3108000), necessary conditions (3108002), quantified syllogism (3108004), mistaken reversal (3108005) |
| 3. Logical Reasoning Foundations | ✅ thin | Main conclusion (3108001, 3108006), passage-structure scaffolding |
| 4. Assumptions, Flaws, Strengthen, Weaken | ✅ | Causal flaws (3108003), necessary assumption (3108007), weaken (3108008), sufficient assumption (3108009), evaluate-the-argument (3108010), false dilemma (3108011) |
| 5. Advanced Logical Reasoning and Timing | ❌ | No parallel-reasoning, parallel-flaw, principle-application, except-questions, pacing/skip-decision content |
| 6. Reading Comprehension Structure | ✅ thin | Passage structure (3108012), main point (3108013), tone (3108014), comparative passages (3108016), main point (3108017) |
| 7. RC Questions and Timed Strategy | ✅ thin | Inference (3108015), main-point question type (3108013); no pacing/passage-order strategy |
| 8. Review Loops, Test-Day, Law-School Skills | ❌ | No error-log, blind-review-process, accommodation-planning, case-briefing items |

Coverage is concentrated in chapters 2–4 (LR fundamentals) and 6–7 (RC fundamentals). Chapters 1, 5, and 8 — all process and meta-skill chapters — are entirely uncovered. **The course teaches LSAT *content* but not LSAT *test-taking strategy or review discipline*.**

## Per-file recommendations

| File | LSAT Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `lsat: [...]` (id 3108000–3108017) | 18 | **FIX** | **Strong content, broken distractor explanations.** Prompts are charming and pedagogically real (TomatoTimer GPA causal flaw, replication-code conditional bridge, mural safety-plan necessary condition). The `correct` answer and the single `lesson` field are well-written. But every wrong answer's `whyWrong` field is the file-wide `DEFAULT_FLAW = 'This is a plausible distractor, but it does not match the scenario or syllabus concept.'` constant — see [`universityAgentGenerated.ts:5`](../../../src/data/questionCatalog/universityAgentGenerated.ts). LSAT students live and die by wrong-answer analysis ("why is C tempting but wrong?"). DEFAULT_FLAW destroys the educational value precisely where it matters most for this exam. **Rewrite per-distractor explanations** to identify each LSAT trap family (mistaken reversal vs negation, irrelevant comparison, too-strong qualifier, scope shift, etc.). |
| (no other LSAT files) | — | — | No imported third-party LSAT bank; no hand-rolled `lsat` block in `universityAcademic.ts`. The agent-generated 18 are the entire bank. |

**Net effect**: 18 well-prompted questions with hollow distractor analysis → 18 LSAT-grade questions after per-distractor rewrite. Adds chapter 1, 5, and 8 authoring backlog of ~30 questions to cover study system, advanced LR, and review loops/law-school readiness.

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/university.ts:421`](../../../src/data/ageCatalog/university.ts). Update subtitle to mention "US/Canada law schools" so non-US learners don't accidentally invest study time.
2. **Rewrite all 54 wrong-answer `whyWrong` strings** (18 × 3). Every distractor must name the trap family: "Mistaken reversal — affirms the consequent", "Too-strong qualifier", "Scope shift", etc. Highest-leverage fix in the cluster.
3. **Author 8–10 chapter-1 questions** on diagnostic score interpretation, blind-review process, error-log discipline, timed-vs-untimed distinction. Voice template: existing 3108xxx prompts (lifestyle-flavoured scenarios).
4. **Author 6–8 chapter-5 questions** on parallel reasoning, parallel flaw, principle application, except-questions, pacing/skip decisions — these are distinct LSAT skills with their own trap families.
5. **Author 4–6 chapter-8 questions** on law-school case briefing, IRAC structure, holding vs dicta, blind-review process design.

## Estimated effort

- Region tag + subtitle update: ~10 min
- Per-distractor rewrite (54 strings): ~6 hours (the prompts and contexts are already strong; just need trap-family analysis)
- Chapter 1/5/8 authoring (~22 questions): ~8 hours

**~2 working days** to bring `lsat` to LSAT-grade quality. The per-distractor rewrite is by far the most important fix.

## Notes for next auditor

DEFAULT_FLAW in [`universityAgentGenerated.ts:5`](../../../src/data/questionCatalog/universityAgentGenerated.ts) affects every track in that file (`mcat`, `lsat`, `anatomyAndPhysiology`, `financialAccounting`, `electricalEngineering`, `eurekaMathPrecalculus`, `introToSociology`). File-wide problem, file-wide fix. The LSAT dropped Analytical Reasoning ("logic games") in 2024; the syllabus correctly de-emphasizes games and bank content is aligned with the current 2-section LSAT.
