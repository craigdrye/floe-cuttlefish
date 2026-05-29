# Audit: computerScienceTheory

**Syllabus**: [`src/data/syllabi/high/computer_science_theory.md`](../../../src/data/syllabi/high/computer_science_theory.md)
**Track id**: `computerScienceTheory`
**Tier**: high (year 11)
**Region**: not jurisdiction-specific (curriculum is CSTA-aligned but content is universal)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Data Representation and Digital Systems (binary, hex, ASCII, compression) | ⚠️ | Generator computing blueprints occasionally hit binary/encoding; no dedicated bank |
| 2. Logic, Circuits, and Proof Habits (truth tables, Boolean algebra, De Morgan) | ⚠️ | Generic boolean items; nothing on De Morgan or invariants |
| 3. Algorithms, Correctness, and Complexity (Big O, pre/post conditions, invariants) | ✅ | `openDsaAlgorithmQuestions` covers complexity reasoning |
| 4. Searching, Sorting, and Recursion | ✅ | `openDsaAlgorithmQuestions` strong here |
| 5. Data Structures and Graphs (stack, queue, hash, BFS/DFS) | ✅ | `openDsaCoreImported` + `dataStructuresWorkoutGenerated` (university) cover this |
| 6. Automata, Languages, Models of Computation (FSM, regex, Turing) | ✅ | `openDsaFormalLanguagesQuestions` is well-targeted to this chapter |
| 7. Computability and Hard Problems (P vs NP, halting, reductions) | ❌ | No items found |
| 8. Cryptography, Security, Responsible Theory (threat model, PKI, hash) | ❌ | No items found |

**Routing.** Track id `computerScienceTheory` is not in `highMath/Advanced/Fun` sets → falls through to `high-generated`. The relevant `openDsa*` imports are wired to **`apComputerScience`** in `highAdvanced.ts:435–436`, not to this track. Result: HS students opening "Computer Science Theory" see the procedural blueprint generator's computing family, not the FSM/algorithm content the syllabus describes.

**Chapter-taxonomy mismatch.** The generator emits chapters like "Computing Basics 2", "Variables and Types 3" — incompatible with the eight syllabus chapters (Data Representation through Cryptography).

## Per-file recommendations

| File | Items for computerScienceTheory | Bucket | Reason |
|---|---|---|---|
| [`openDsaAlgorithmsImported.ts`](../../../src/data/questionCatalog/openDsaAlgorithmsImported.ts) | imported (large) | **MERGE → computerScienceTheory** | Currently lives only under `apComputerScience`. Belongs here too (Chapters 3, 4). |
| [`openDsaFormalLanguagesImported.ts`](../../../src/data/questionCatalog/openDsaFormalLanguagesImported.ts) | imported | **MERGE → computerScienceTheory** | Best fit is here, not `apComputerScience`. FSM/regex/grammar = Chapter 6. |
| [`openDsaCoreImported.ts`](../../../src/data/questionCatalog/openDsaCoreImported.ts) | imported | **MERGE → computerScienceTheory** | Data structures = Chapter 5. |
| [`openDsaSoftwareImported.ts`](../../../src/data/questionCatalog/openDsaSoftwareImported.ts) | imported | **EVALUATE** | Sample before merging; may be too applied. |
| [`logicCsAdditionalImported.ts`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) | imported | **EVALUATE** | Likely useful for Chapter 2 logic; check for `imsTutorialsImported`-style stripped context. |
| [`highAgentGenerated.ts`](../../../src/data/questionCatalog/highAgentGenerated.ts) | no entry | **GAP** | No `computerScienceTheory` topUp; gap to fill or generator stays as floor. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) computing blueprints (top-up) | up to 50 | **FIX (procedural generator)** | Currently the only thing users see. Generic and chapter-misaligned. |

## Open actions (priority order)

1. **Wire `computerScienceTheory`** into `highAdvancedTrackIds` and add a bundle entry that imports the `openDsa*` files (formal languages, algorithms, core data structures).
2. **Author 6–8 items** for Chapter 7 (Computability): halting problem intuition, P vs NP, brute force vs heuristic, verification vs solving.
3. **Author 6–8 items** for Chapter 8 (Cryptography): symmetric vs asymmetric, hash vs encryption, threat model framing, randomness.
4. **Author 4–6 items** for Chapter 2 (De Morgan's laws, equivalence proofs, invariants).
5. **Align all chapter labels** to the eight syllabus chapter names.

## Estimated effort

- Routing + import wiring: ~1 hour
- Authoring (16–22 items): ~7 hours
- Chapter rename pass: ~1 hour

## Notes for next auditor

This track is the cleanest "content exists, just wired to the wrong track" case in the cluster. `openDsaFormalLanguages` is specifically about automata and languages — the textbook fit is `computerScienceTheory` Chapter 6, but it currently only fires under `apComputerScience`. Re-wire it without duplicating.
