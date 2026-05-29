# Audit: philosophy

**Syllabus**: [`src/data/syllabi/university/philosophy.md`](../../../src/data/syllabi/university/philosophy.md)
**Track id**: `philosophy`
**Tier**: university
**Region**: jurisdiction-neutral (canonical Western intro philosophy with comparative-tradition gestures)
**Status**: `playable` ([`src/data/ageCatalog/university.ts:74`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Doing Philosophy (validity, soundness, counterexamples) | ✅ | Strong: `philosophyWorkoutGenerated` "Arguments" chapter + `universityAcademic.ts` "Doing Philosophy" hand-rolls (Modus Ponens, Ad Hominem) |
| 2. Knowledge and Skepticism | ✅ | JTB, Gettier, empiricism/rationalism, a priori/a posteriori, Hume's induction |
| 3. Reality, Time, Causation, Identity | ✅ partial | Ship of Theseus, Parfit fission, dualism, determinism, compatibilism; no presentism/eternalism, no Frankfurt cases |
| 4. Philosophy of Religion | ✅ thin | Problem of Evil + Euthyphro present; cosmological/teleological/ontological arguments absent |
| 5. Ethics and Moral Theory | ✅ | Consequentialism, utilitarianism, deontology, virtue ethics, Categorical Imperative, Error Theory |
| 6. Justice, Power, Political Philosophy | ✅ | Rawls, Nozick, liberty, equality, social contract |
| 7. Mind, Consciousness, AI | ✅ | Chinese Room, qualia, Mary's Room, Nagel's bat, functionalism (much of this duplicates `philJunior` material) |
| 8. Philosophical Writing and Global Extensions | ✅ thin | Confucian/Daoist gestures in `philosophyWorkoutGenerated`; no Buddhist no-self, Ubuntu, Islamic philosophy; no writing-craft items |

**Chapter taxonomy mismatch.** Three taxonomies: workout uses topic names; `universityAcademic` hand-rolls mix oceanic "Philosophy Dock/Reef/Cove" (lifted from primary-style) with "Doing Philosophy" etc.; OpenTriviaQA imports use their own. None match the syllabus's eight chapters.

## Per-file recommendations

| File | Philosophy Q's | Bucket | Reason |
|---|---|---|---|
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) | 50 | **KEEP** | May 2026 audit flagged this as solid — confirmed. Per-distractor `whyWrong + hint` triples, sober tone, syllabus-shaped chapter coverage spanning Arguments → Comparative Philosophy. Single shared `lesson` boilerplate is the only weakness; per-distractor explanations are real. Promote to canonical bank for this track. |
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) hand-rolls in `philosophy: [...]` | ~32 | **FIX** | Mixed quality. The "Stretch Zone" Gettier/Mind-Body/Kant/Mill/Popper items (id 17201–17210) are excellent. The "Philosophy Dock/Reef/Cove/Lagoon" introductory items (id 16601–16604) carry the primary-style oceanic chapter names and cartoonish distractors ("A costume change in a play", "How to build a car engine") that read wrong for university tone. **Fix**: rename "Dock/Reef/Cove/Lagoon" chapters to syllabus chapter names; rewrite the four cartoonish distractors; keep all 17xxx items as-is. |
| [`openTriviaArtPhilosophyMicroImported.ts`](../../../src/data/questionCatalog/openTriviaArtPhilosophyMicroImported.ts) (`openTriviaPhilosophyQuestions`) | ~16 | **DELETE** | DEFAULT_FLAW pattern — every wrong answer carries the identical string `"This choice does not match the philosopher, concept, or school of thought named in the prompt."`. Trivia-style "name the philosopher" items, not argument-method drills. Salvage 2–3 fact items into a "Major Philosophers" appendix only if needed. |
| [`openTriviaArtPhilosophyExtensionImported.ts`](../../../src/data/questionCatalog/openTriviaArtPhilosophyExtensionImported.ts) (`openTriviaPhilosophyExtensionQuestions`) | unknown (~10–20) | **DELETE** | Same DEFAULT_FLAW pattern. Same trivia-not-philosophy character. |
| [`openLogicProjectImported.ts`](../../../src/data/questionCatalog/openLogicProjectImported.ts) (`openLogicProjectPhilosophyQuestions`) | unknown | **KEEP** | Open Logic Project conversions — per-distractor real explanations, conceptually rigorous. Possibly better-placed on `formalLogic`. |

**Net effect**: ~100 wired questions → ~85 high-quality once the OpenTrivia imports are cut. Plus chapter-4 (religion) and chapter-8 (writing + global) authoring backlog of ~15 questions.

## Open actions (priority order)

1. **DELETE the two OpenTriviaQA philosophy imports** from the wiring in [`universityAcademic.ts:292`](../../../src/data/questionCatalog/universityAcademic.ts) — they are DEFAULT_FLAW trivia.
2. **Rename "Philosophy Dock/Reef/Cove/Lagoon" chapter names** in the hand-roll block (id 16601–16604) to "Doing Philosophy" / "Knowledge and Skepticism" etc. matching the syllabus.
3. **Rewrite the 4 oceanic-themed intro items** with university-tone distractors. Voice template: `philosophyWorkoutGenerated.ts`.
4. **Author 10–15 questions** for chapter-4 (cosmological/teleological/ontological arguments, Pascal's Wager, theodicy types) and chapter-8 (Buddhist no-self, Ubuntu, essay construction). Voice template: `philosophyWorkoutGenerated.ts`.
5. **Note overlap with `philSenior` (Moral Crossroads) and `contemporaryEthics`** — both are derived by `.filter()` from this `philosophy` track (see [`universityAcademic.ts:356,372,384`](../../../src/data/questionCatalog/universityAcademic.ts)). Any rewrite here cascades to those tracks.

## Estimated effort

- Delete + chapter rename: ~30 min
- Oceanic-item rewrite: ~1 hour
- Chapter-4 + chapter-8 authoring: ~5 hours (15 questions × 20 min)

**~1 working day** to bring `philosophy` to the quality bar. `philosophyWorkoutGenerated` is the model; the rest just needs trimming and renaming.

## Notes for next auditor

`philSenior`, `contemporaryEthics`, `logicCriticalThinking` are derived as `.filter()`s over `philosophy` plus appendix imports ([`universityAcademic.ts:356–384`](../../../src/data/questionCatalog/universityAcademic.ts)). Derivation keys are hard-coded title strings; renaming a title silently drops it from downstream tracks. Coordinate retitling with those sets.
