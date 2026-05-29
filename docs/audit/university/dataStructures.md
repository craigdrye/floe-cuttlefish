# Audit: dataStructures

**Syllabus**: [`src/data/syllabi/university/data_structures.md`](../../../src/data/syllabi/university/data_structures.md)
**Track id**: `dataStructures`
**Tier**: university
**Region**: jurisdiction-neutral

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Analysis, Interfaces, Representation | ✅ partial | Big-O treated in `dataStructuresWorkoutGenerated.ts`; ADT/invariant framing thin |
| 2. Arrays, Dynamic Arrays, Linked Lists | ✅ | Dynamic array, amortized append, head/tail insertion, Floyd cycle detection |
| 3. Stacks, Queues, Deques | ✅ | LIFO/FIFO rule, parens matching, deque definition |
| 4. Recursion, Trees, BSTs | ✅ | In-order = sorted, leaf, root, BST worst-case degeneration |
| 5. Balanced Trees and Ordered Maps | ✅ thin | AVL LR rotation in `universityAcademic.ts`; no red-black, no range queries, no B-tree |
| 6. Hash Tables and Sets | ✅ | Hash function, collision, chaining, load factor, primary clustering |
| 7. Heaps, Priority Queues, Scheduling | ✅ | Heap property, build-heap O(n), priority extraction |
| 8. Graph Representations and Traversal | ✅ | Adjacency matrix vs list, BFS/DFS, Dijkstra/Kruskal placement |

Coverage is broad — best-covered course in this cluster. Quality is the issue, not breadth.

**Chapter taxonomy mismatch.** Wired chapters mix "Data Structures Dock/Reef/Cove/Lagoon" (sea-themed nursery names misplaced on a junior CS course), "Complexity Analysis", "Linked Lists", "Trees", "Heaps", "Graphs", "Stretch Zone". The themed names should be removed for sober university tone; the topic names should be aligned to the syllabus's eight-chapter spine.

## Per-file recommendations

| File | DS Q's | Bucket | Reason |
|---|---|---|---|
| Inline block in [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) (lines 294–309) | 14 | **FIX** | First 4 use childish "Dock/Reef/Cove/Lagoon" chapter naming inappropriate for university tone. Last 10 (Merge Sort recurrence, Floyd, Open Addressing, AVL, BST deletion, Build-Heap, Adjacency Matrix, Dijkstra, Kruskal, Union-Find) are strong with proper per-distractor explanations. Rename chapters; cut the first 4 or rewrite. |
| [`openDsaAlgorithmsImported.ts`](../../../src/data/questionCatalog/openDsaAlgorithmsImported.ts) (via spread) | ~245 | **DELETE most** | Boilerplate DEFAULT_FLAW distractors ("This matches a nearby algorithm or data-structure idea…"). Lines 11/60/70 contain ugly escaped code fragments. Salvage ~15 clean definitional items; cut the rest. |
| `openDsaCoreDataStructuresQuestions` (from `openDsaCoreImported.ts` via re-export) | ~few hundred | **DELETE most** | Same boilerplate distractor pattern ("This matches a nearby Java or intro-CS idea…"). `openDsaCoreImported.ts:42` (OOP2Checkpoint3Q2) has **stripped code snippet context** — the prompt references "the following variable myObj is declared as type GeneralCase" but no code is shown. Many questions reference Java code that was lost in the import. |
| [`logicCsAdditionalImported.ts`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) (`logicCsAdditionalDataStructuresQuestions`) | 7 | **KEEP** | Hand-authored Floe conversions of OpenDSA prompts. Proper per-distractor `whyWrong + hint`. Sober academic tone. Source attribution is clear. |
| [`dataStructuresWorkoutGenerated.ts`](../../../src/data/questionCatalog/dataStructuresWorkoutGenerated.ts) | 50 | **KEEP** | Hand-authored with `miss(answer, why, hint)` triples. Covers complexity, arrays, linked lists, stacks, queues, hashing, trees, heaps, graphs, sorting, union-find. Chapter naming matches topic, sober tone. This is the canonical bank. |

`openLogicProjectDataStructuresQuestions` was not located by the simple grep — confirm export path if it exists.

## Open actions (priority order)

1. **DELETE the OpenDSA imports** for this track and the `openDsaCoreDataStructures*` re-export. Salvage at most ~15 items into the workout file. Net loss is small because the workout file already covers the topic space.
2. **Rewrite the 4 themed inline questions** in `universityAcademic.ts` (Dock/Reef/Cove/Lagoon) — same content, mature chapter names matching the syllabus.
3. **Add balanced-tree depth** (red-black invariants, ordered map use cases, B-tree intuition) — currently only one AVL question.
4. **Rename workout-file chapters** to align with the syllabus's eight chapters.

## Estimated effort

- Delete + salvage: ~2 hours
- Inline rewrite + chapter rename: ~1 hour
- Balanced-tree authoring (~8 questions): ~3 hours

**~1 working day**. This is the most rescuable course in the cluster because the hand-authored workout file is already strong.

## Notes for next auditor

`dataStructuresWorkoutGenerated.ts` and `softwareDesignWorkoutGenerated.ts` and `introCsWorkoutGenerated.ts` share an identical `q + miss` helper pattern with the same authoring lineage ("Coverage source: reviewed OpenDSA … plus … course skill gaps. This is an authored Floe-native drill item, not a direct raw import."). They're the same author, same era — KEEP all three as the model for university-prep CS authoring.
