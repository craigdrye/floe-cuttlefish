# Audit: algorithms

**Syllabus**: [`src/data/syllabi/university/algorithms.md`](../../../src/data/syllabi/university/algorithms.md)
**Track id**: `algorithms`
**Tier**: university
**Region**: jurisdiction-neutral (CS theory) — no US-specific framework

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Algorithmic Analysis and Correctness | ✅ partial | OpenDSA "Algorithm Analysis" bank dominates; loop-invariant + induction proofs missing |
| 2. Recurrences, Divide & Conquer, Sorting | ✅ | Master Theorem, mergesort, quicksort partially covered (mostly through starter + OpenDSA) |
| 3. Greedy Algorithms | ❌ | No exchange-argument / interval-scheduling / Huffman questions |
| 4. Dynamic Programming | ✅ thin | One starter question; no LCS / edit distance / knapsack |
| 5. Graph Modeling, Search, Structure | ✅ | BFS/DFS starters + OpenDSA |
| 6. Shortest Paths, MSTs, Network Problems | ❌ | No Dijkstra/Bellman-Ford/Kruskal/Prim/union-find drills on this track (they live on `dataStructures`) |
| 7. Complexity, Reductions, NP-Completeness | ❌ | Formal-languages import lands here but is grammar/automata, not NP reductions |
| 8. Randomized, Approximation, Algorithm Engineering | ❌ | No randomized quicksort, approximation ratios, profiling content |

**Chapter taxonomy mismatch.** Wired bank uses chapters "Algorithm Analysis", "Formal Languages and Automata", and starter chapters like "Algorithm Analysis", "Search", "Graphs", "Dynamic Programming". None match the syllabus's eight-chapter spine. Formal-languages content is in scope for a *Theory of Computation* course, not CS2 algorithms.

## Per-file recommendations

| File | Algorithms Q's | Bucket | Reason |
|---|---|---|---|
| [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts) (`algorithmsStarterQuestions`) | 4 | **KEEP** | Hand-authored, per-distractor `whyWrong + hint` triples, sober tone. Only 4 questions — far too few. Use as the voice template for fill-in authoring. |
| [`openDsaAlgorithmsImported.ts`](../../../src/data/questionCatalog/openDsaAlgorithmsImported.ts) | ~245 | **FIX or DELETE** | **Boilerplate distractor explanations** — every wrong answer carries the same "This matches a nearby algorithm or data-structure idea, but not the exact condition in the prompt" line (DEFAULT_FLAW pattern). **Lines 11, 60, 70 have ugly escaped code fragments** (`"\"a += i;\""`, `\\Theta(n)`, raw `for (i = 0; i < n - 1; i++) ...` with no formatting) — unreadable as a quiz. Lift the salvageable definitional questions (Algorithm Analysis chapter 1) into the starter file; cut the rest. |
| [`openDsaFormalLanguagesImported.ts`](../../../src/data/questionCatalog/openDsaFormalLanguagesImported.ts) | ~30 | **MERGE → discreteMath or new theory track** | Grammar / parse tree / EBNF content does not belong in an algorithms course. Same boilerplate distractor pattern ("This is a nearby formal-language or programming-language option…"). Move to `discreteMath` or a future Theory of Computation track. |

**Net effect**: ~280 questions → ~30 keepable algorithms questions + an authoring backlog of ~60 to cover greedy, DP, shortest paths, NP-completeness, and randomization.

## Open actions (priority order)

1. **Author 50–60 questions** across the four uncovered chapters (greedy exchange arguments, DP state design, Dijkstra negative-edge counterexample, Master Theorem application, NP-completeness reduction sketch, randomized vs Las Vegas/Monte Carlo). Template: `algorithmsStarterQuestions`.
2. **Strip OpenDSA boilerplate distractor strings** and re-write per-question `whyWrong` lines that name the specific misconception. If unfeasible at scale, DELETE the file and keep only ~10 salvageable analysis items.
3. **Fix escaped code fragments** at `openDsaAlgorithmsImported.ts:11/60/70` — either reformat as code blocks the renderer can display or delete the affected items.
4. **Move formal-languages content** out of `algorithms` to `discreteMath`.
5. **Rename chapters** in any kept content to match the syllabus's eight-chapter spine.

## Estimated effort

- Authoring 50–60 questions: ~18 hours (20 min each with per-distractor rigour)
- OpenDSA distractor rewrite (if kept): ~20 hours (or ~30 min to delete and salvage 10)
- Formal-languages migration: ~30 min

**~3 working days** to bring `algorithms` to syllabus parity. The course is currently a thin starter file plus a noisy import; bulk authoring is the bottleneck.

## Notes for next auditor

The OpenDSA family (`openDsaCoreImported`, `openDsaSoftwareImported`, `openDsaAlgorithmsImported`, `openDsaBridgeCourseImported`, `openDsaFormalLanguagesImported`) all share the same boilerplate-distractor pathology in slightly different wording. They were imported via scripts (`scripts/build_opendsa_*.cjs`) without per-question distractor authoring — a class-wide DEFAULT_FLAW pattern. Treat as a cluster.
