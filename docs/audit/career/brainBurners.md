# Audit: brainBurners

**Syllabus**: [`src/data/syllabi/career/brain_burners.md`](../../../src/data/syllabi/career/brain_burners.md)
**Track id**: `brainBurners`
**Tier**: career (`ageGroup: 'career-hopper'`, `discipline: 'Logic / Puzzles'`)
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Puzzle Posture | ✅ | Polish "Puzzle panic: Start clean"; OerBatch2 lateral-thinking opens |
| 2. Elimination and Contradiction | ✅ | WorkoutGenerated "Truth Tellers" set + Polish "Worst-case search" |
| 3. Counting Traps | ✅ | WorkoutGenerated "Counting" set + OerBatch2 "Counting Traps" chapter (candles, fences, handshakes, pairs) |
| 4. Invariants and Parity | ✅ | WorkoutGenerated "Parity" + "Invariants" sets + Polish "Invariants: Changing pieces"; OerBatch2 "Color/Parity" content |
| 5. Measurement, Weighing, and Search | ⚠️ | One "binary/ternary search" item in Polish; no dedicated weighing/balance puzzle items |
| 6. Movement, Maps, State Machines | ❌ | **No river-crossing, state-graph, shortest-path items** |
| 7. Language, Misdirection, Information Traps | ✅ | WorkoutGenerated "Wording Traps" + "Lateral Thinking" sets + OerBatch2 "Careful Wording" chapter (surgeon, bus driver, 28 days, match, survivors, etc.) |
| 8. Puzzle Studio (construction) | N/A | Capstone — not naturally tested as MCQ |

**Coverage is good for the first half of the syllabus, gappy for state-space puzzles (Chapter 6) and measurement (Chapter 5).**

**Chapter taxonomy mismatch is notable but in the opposite direction from most tracks**: the question files use short categorical chapters ("Careful Wording", "Parity", "Counting Traps", "Truth Tellers"), and the syllabus uses paragraph-style chapter titles ("Elimination and Contradiction", "Invariants and Parity"). The question-file labels are actually closer to how puzzle taxonomies are normally organized in the field — keep the file labels, soften syllabus wording during realignment.

## Per-file recommendations

| File | brainBurners Q's | Bucket | Reason |
|---|---|---|---|
| [`brainBurnersOerBatch2.ts`](../../../src/data/questionCatalog/brainBurnersOerBatch2.ts) | ~50 | **KEEP** | **Gold standard.** Hand-authored Floe-native conversion from OpenTriviaQA/OER classics. Every distractor has a specific `miss(answer, why, hint)` triple — exactly the framework's quality bar. Sober but light tone, fair difficulty. Source attribution clean. |
| [`brainBurnersWorkoutGenerated.ts`](../../../src/data/questionCatalog/brainBurnersWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard.** Same `miss(answer, why, hint)` shape, hand-authored Floe-native drills on parity, invariants, counting, sequences, truth-tellers, probability, ordering, lateral thinking, strategy. Coverage of the puzzle-technique taxonomy is the best of any track in the cluster. Source: "Generated from Brain Burners coverage" — note this is a misleading file *name* (it says "Generated"), not actually agent-generated like the careerAgent* files. |
| [`careerAgentGeneratedInterviewReasoningPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedInterviewReasoningPolish.ts) (brainBurners section, lines 75–96) | 4 | **FIX** | Real content (puzzle setup, invariants, worst-case, proof completeness) but uses file-wide `DEFAULT_FLAW` constant and is tagged `topic: 'Quant Finance'` (incorrect — these are pure puzzles, not finance). Rewrite per-distractor explanations, retag topic. |
| Quant catalog "Brain Teasers" chapter (via `quantCatalog.quant.filter(q => q.chapter === 'Brain Teasers')` in career.ts line 82) | unknown | **REVIEW** | Pulled from quant bank via chapter filter. May be appropriate; may also pull finance-tinted items. Audit the actual filtered set during consolidation. |
| `openTriviaBrainTeasersCleaned` (via `openTriviaBrainTeaserQuestions.filter(hasThreeDistractors)` line 67) | unknown | **REVIEW / likely DELETE** | Raw OpenTriviaQA import. The framework explicitly warns: "Imports source content with stripped context (e.g. `imsTutorialsImported.ts`) → likely DELETE." The OerBatch2 file already converts the best OpenTriviaQA content into Floe-native form with per-distractor explanations — the raw import is redundant and lower quality. |

**Final assembly happens at `career.ts` lines 80–86**: a `uniqueByPrompt` dedup across 5 sources. The dedup partially masks the duplication problem, but does not fix quality of the kept item.

## "Brain burners may be misplaced in career" — check

The May 2026 audit suggested brain burners might be misplaced in the university/career tier. Current state:

- Track `id: 'brainBurners'` is in `careerCoreTracks` (career.ts age catalog line 224–234)
- `ageGroup: 'career-hopper'` (not `'career'` — a distinct sub-tier)
- `discipline: 'Logic / Puzzles'` (not Career)

So brain burners is **in the career age catalog but tagged as career-hopper**, which is a hopper/enrichment lane shared by `consultingCases`, `quant`, `quantAdvanced`, `technicalSales`. It fits with the other "puzzle-adjacent" hopper tracks. **Verdict: it currently lives in the right place.** The content itself is puzzle-genre, not career-skill — but its discoverability via the career hopper lane is appropriate for an adult enrichment audience. No move recommended.

## Open actions (priority order)

1. **Audit and likely DELETE `openTriviaBrainTeasersCleaned` upstream feed** — the OerBatch2 hand-authored conversions already cover the best classic puzzles in Floe-native form. The raw import is lower quality and creates dedup churn.
2. **FIX `careerAgentGeneratedInterviewReasoningPolish.ts` brainBurners section** — rewrite per-distractor explanations and retag topic from "Quant Finance" to "Logic / Puzzles".
3. **Author Chapter 6 (Movement, Maps, State Machines) bank** — 5–6 questions on river-crossing, state-graph, shortest-path, legal-move analysis. Largest content gap.
4. **Expand Chapter 5 (Measurement, Weighing, Search) bank** — 4 questions on balance-puzzle (12-coin classic), binary/ternary search adaptivity, information-gain reasoning.
5. **Audit the quant-catalog Brain Teasers filter** — confirm the items pulled in are puzzle-pure, not finance-flavored. If finance-tinted, narrow the filter or replace with explicit allow-list.

## Estimated effort

- OpenTriviaQA import audit + cut: ~1 hour
- InterviewReasoningPolish FIX: ~30 min (4 Q)
- Chapter 6 authoring: ~2 hours (6 questions × 20 min)
- Chapter 5 authoring: ~1.5 hours (4 questions × 20 min)
- Quant-catalog filter audit: ~30 min

**~0.5–1 working day. Lightest authoring/cleanup in the cluster — the two hand-authored files already do most of the work right.**

## Notes for next auditor

`brainBurners` is the **only track in the cluster where the dominant content sources are already at the framework's quality bar.** OerBatch2 and WorkoutGenerated both use the `miss(answer, why, hint)` triple shape and would be ideal voice templates for fixing the rest of the catalog (similar in shape to `primaryBuilders.ts` referenced in the framework's "quality bar for new authoring" section).

The only meaningful cleanup target is the raw OpenTriviaQA import path — the framework explicitly flags imported-source files with stripped context as likely DELETE candidates. The agent-generated InterviewReasoningPolish brainBurners block is the smallest DEFAULT_FLAW pocket in the cluster (4 items) and easy to FIX.

`openTriviaBrainTeasersImported.ts` is the canonical example for the framework's "imports source content with stripped context" red flag — handling it well sets the pattern for similar imported files elsewhere.
