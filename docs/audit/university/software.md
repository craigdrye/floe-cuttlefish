# Audit: software (Software Engineering Interview Prep)

**Syllabus**: [`src/data/syllabi/university/software_engineering_prep.md`](../../../src/data/syllabi/university/software_engineering_prep.md)
**Track id**: `software` (also overlaps with `softwareDesign`, `softwareFoundations`)
**Tier**: university (senior / career hopper)
**Region**: jurisdiction-neutral

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Engineering Habits & Developer Workflow | ❌ | No questions on PRs, code review hygiene, debugging journals |
| 2. Data Structures, Algorithms & Problem Solving | ✅ | Inline `software:` block: sliding window, monotonic stack, trie complexity, BFS-vs-DFS, DP tabulation/memoization |
| 3. Systems Thinking & Architecture | ✅ | CAP theorem, consistent hashing, WebSockets |
| 4. Code Design, APIs, Maintainability | ✅ | SOLID Open/Closed, Strategy pattern; `softwareDesignWorkoutGenerated.ts` covers SOLID, encapsulation, cohesion, coupling, abstraction in depth |
| 5. Testing, Quality, Reliability | ✅ | Unit/integration/E2E/regression/flaky tests in workout file |
| 6. Collaboration, Product Judgment, Team Practice | ❌ | Not covered — pure interview-prep stories missing |
| 7. Shipping, Operations, Security-Minded Engineering | ✅ partial | Feature flags, observability, alert fatigue, SLO in workout file; secrets management, least privilege, input sanitization, threat modeling present |
| 8. Interview Readiness & Early-Career Growth | ❌ | No STAR-story prompts, no behavioral framing |

**Chapter taxonomy mismatch.** The inline `software:` block uses chapter labels "Module 1: Algorithms", "Module 1: Data Structures", "Module 2: Advanced DS", "Module 2: Graphs", "Module 3: DP", "Module 4: System Design", "Module 5: OOD" — these match `ml`/`research`/`uxResearch` Module-N convention, not the syllabus's eight numbered chapters. `softwareDesignWorkoutGenerated.ts` uses thematic chapters ("Requirements", "Design Principles", "SOLID", "Testing", "Architecture", "Data", "Security", "Operations", "Delivery") — closer to the syllabus but still misaligned.

## Per-file recommendations

| File | software Q's | Bucket | Reason |
|---|---|---|---|
| Inline block in [`universityPrep.ts`](../../../src/data/questionCatalog/universityPrep.ts) (lines 27–37) | 10 | **KEEP** | Hand-authored, full per-distractor explanations, interview-grade prompts (CAP, consistent hashing, sliding window, Strategy pattern). Voice template for the whole university-prep family. |
| [`softwareDesignWorkoutGenerated.ts`](../../../src/data/questionCatalog/softwareDesignWorkoutGenerated.ts) | 50 | **KEEP** | Hand-authored `q + miss(answer, why, hint)`. Covers SOLID, requirements, architecture, testing, operations, security. Mature tone. **US-adjacent caution: "Secrets Management" chapter is generic; no FedRAMP/SOC 2 mentions found.** |
| [`openDsaBridgeCourseImported.ts`](../../../src/data/questionCatalog/openDsaBridgeCourseImported.ts) | many | **DELETE** | Java-OOP bridge content, boilerplate distractor pattern. Wrong audience: this is senior SWE interview prep. |
| [`openDsaSoftwareImported.ts`](../../../src/data/questionCatalog/openDsaSoftwareImported.ts) | many | **DELETE** | Heavy DEFAULT_FLAW pattern. OpenDSA definitional trivia, irrelevant to interview prep. |
| [`openDsaFormalLanguagesImported.ts`](../../../src/data/questionCatalog/openDsaFormalLanguagesImported.ts) | ~30 | **DELETE** | Theory of computation, not SWE interview prep. Wrong scope. |
| `openDsaCoreSoftwareQuestions` (from `openDsaCoreImported.ts`) | ~few hundred | **DELETE** | Boilerplate distractor pattern; OpenDSA-textbook-specific, irrelevant to industry SWE interviews. |
| [`logicCsAdditionalImported.ts`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) (`logicCsAdditionalSoftwareQuestions`) | 3 | **KEEP** | Hand-authored Floe conversions. Tiny but clean. |

## Open actions (priority order)

1. **DELETE all five OpenDSA imports** from the `software` track wiring (lines 38–42 of `universityPrep.ts`). Net loss is huge in raw count but eliminates the boilerplate-distractor noise and out-of-scope Java/OpenDSA-textbook trivia. Keep the inline block + workout file + 3 logic items.
2. **Author 25–30 questions** for the missing chapters: Chapter 1 (PR review, isolating prod-only bugs, asking for help with context), Chapter 6 (clarifying tickets, async update writing, pushback on deadlines), Chapter 8 (STAR story prompts, project walkthroughs, 30-60-90 plans). Template: inline block + `softwareDesignWorkoutGenerated.ts`.
3. **Rename chapters** in the inline block to syllabus chapter names; align workout file chapters to the syllabus eight.
4. **Verify no US-specific compliance creep** if future security questions are added — keep secrets/least-privilege/threat-modeling content jurisdiction-neutral.

## Estimated effort

- Author 25–30 questions: ~8 hours
- Delete + rewire: ~30 min
- Chapter rename: ~30 min

**~1.5 working days**.

## Notes for next auditor

The `software` track shares the same five OpenDSA imports with `softwareDesign` and `softwareFoundations` — pruning them here unlocks the same cleanup across the cluster. `softwareDesign` is wired to just `openDsaSoftwareQuestions + softwareDesignWorkoutGeneratedQuestions`; once OpenDSA is removed it relies entirely on the strong workout file. `softwareFoundations` is wired to `openDsaBridgeCourseQuestions + introCsWorkoutGeneratedQuestions` — same call: drop the bridge import, keep the workout. These three tracks rise or fall together.
