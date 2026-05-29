# Audit: englishComposition101

**Syllabus**: [`src/data/syllabi/university/english_composition_101.md`](../../../src/data/syllabi/university/english_composition_101.md)
**Track id**: `englishComposition101`
**Tier**: university (default `university-generated` bucket → `universityAgentGenerated.ts:123`)
**Region**: jurisdiction-neutral by content; cites MLA and APA, which are global academic conventions. No region-specific framing.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:368`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Writing Process and Rhetorical Situation (audience, purpose, genre) | ✅ | "English Composition: Rhetorical Situation" items — audience identification, purpose framing |
| 2. Active Reading and Academic Conversation (annotation, "they say / I say") | ⚠️ | Light. Some annotated-bibliography prompts but minimal pure-reading items |
| 3. Thesis, Claims, Essay Architecture (thesis revision, paragraph order) | ✅ | "Thesis Statements" + "Paragraph Structure" (MEAL) + "Paragraph Cohesion" + "Revision" items |
| 4. Argument Models and Logical Structure (Toulmin, warrant, counterclaim, fallacy) | ✅ | "Toulmin Argument" + "Fallacies" + "Counterclaims" + "Counterarguments" + "Rebuttal" items |
| 5. Research Questions and Information Literacy (database, peer review, evaluation) | ✅ | "Database Search" (Boolean) + "Source Types" (peer-reviewed) items |
| 6. Source Integration, Citation, Academic Integrity (paraphrase, plagiarism, MLA/APA) | ✅ | "Academic Integrity" (patchwriting) + "Annotated Bibliography" items |
| 7. Synthesis and the Research Essay | ✅ | "Synthesis" items — combining sources to create new insight |
| 8. Style, Peer Review, Portfolio, Multimodal | ✅ partial | "Style" (active verbs) items present; no peer-review or multimodal items |

**Chapter taxonomy**: `universityAgentGenerated.ts` uses chapter strings prefixed `"English Composition:"` with the syllabus topic — direct mapping. No chapter-name mismatch.

## Per-file recommendations

| File | englishComposition101 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `englishComposition101: [...]` block (id 3105000+) | ~20–25 | **FIX** | **Prompts are surprisingly good** — real composition pedagogy (MEAL paragraphs, Toulmin warrants, slippery slope, patchwriting plagiarism, Boolean search, "they say / I say"-flavored synthesis). The correct answers are precise and the distractors are recognizable composition mistakes ("Replace every short word with a more academic-sounding word"). **But every distractor uses the file-wide `DEFAULT_FLAW` constant** `'This is a plausible distractor, but it does not match the scenario or syllabus concept.'` ([`universityAgentGenerated.ts:5`](../../../src/data/questionCatalog/universityAgentGenerated.ts)). Rewrite per-distractor explanations. Voice is acceptable for first-year college (mildly playful "Sock Swamp", "cryptid teammate") but tone is **less professional than the workout files** in this cluster. |
| (no `englishComposition101WorkoutGenerated.ts`) | 0 | **N/A** | No hand-authored alternative bank exists. |

**Net effect**: ~25 high-prompt questions held back from quality bar by the shared `DEFAULT_FLAW`. Rewriting per-distractor explanations is a high-ROI cleanup — the conceptual work is already done.

## Open actions (priority order)

1. **Rewrite per-distractor explanations** for all `englishComposition101` items. Each wrong answer (e.g. "Replace every short word with a more academic-sounding word") names a specific composition mistake; rewrite says what's wrong with it. Voice template: `philosophyWorkoutGenerated.ts` plus `practicalPoliticsQuestions.ts` hand-rolls.
2. **Author 8–10 chapter-2 active-reading items** — annotation, summary vs paraphrase, assumption vs evidence, "they say / I say" response moves.
3. **Author 4–5 chapter-8 peer-review and multimodal items** — useful peer feedback, multimodal adaptation, reflective portfolio notes.
4. **Tone calibration**: keep playful campus framing ("nap pods", "Sock Swamp"); dial back the more cartoonish ("squirrel fleeing drama", "ferret slope") toward the workout-file sober-but-warm voice.
5. **No region tag needed** — content is jurisdiction-neutral; MLA is internationally used.

## Estimated effort

- Per-distractor rewrite: ~6 hours (25 × ~15 min)
- Chapter 2 + 8 authoring: ~4.5 hours (15 × 20 min)
- Tone pass: ~1 hour

**~1.5 working days.** Conceptual work is real; lift is per-distractor rewriting plus targeted gap-closing.

## Notes for next auditor

`englishComposition101` is **the clearest demonstration that good prompts + DEFAULT_FLAW = blocked from quality bar**. The author understood composition pedagogy — items teach real moves, name recognizable mistakes, use campus-life framing that lands with first-year students. The shared `DEFAULT_FLAW` constant is the *only* thing keeping this bank from KEEP.

Tone is closer to the joke-MCAT block in the same file ("Sock Swamp", "scooter squirrel leap") than to the sober workout files. For first-year writing this is defensible. But `englishComposition101`, `introToSociology`, `financialAccounting` in `universityAgentGenerated.ts` all share the playful-naming-with-DEFAULT-FLAW pattern — a single rewriting pass on the file-wide DEFAULT_FLAW unlocks ~10 tracks at once.

No downstream `.filter()` derivations. Cleanup doesn't cascade.
