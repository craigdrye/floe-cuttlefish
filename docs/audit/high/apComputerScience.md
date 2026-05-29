# Audit: apComputerScience

**Syllabus**: [`src/data/syllabi/high/ap_computer_science.md`](../../../src/data/syllabi/high/ap_computer_science.md)
**Track id**: `apComputerScience` (parallel `col-ap-computer-science` shadow track)
**Tier**: high (year 12)
**Region**: US (College Board content; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Computing Systems, Data, and the Internet | ⚠️ | Some binary/protocol items in exam batch and OpenDSA imports; thin |
| 2. Algorithms and Computational Thinking | ✅ | `openDsaAlgorithmQuestions` provides substantial coverage |
| 3. Programming Foundations in Java | ⚠️ | Generic loop/boolean items in hand block; no Java-specific syntax items |
| 4. Control Flow and Methods | ⚠️ | Loop hand item exists; De Morgan, scope, return semantics not covered |
| 5. Object-Oriented Programming | ❌ | No constructor / inheritance / polymorphism items found |
| 6. Arrays, ArrayLists, and 2D Data | ⚠️ | One array hand item; nothing on ArrayList traversal pitfalls or 2D loops |
| 7. Searching, Sorting, Recursion, AP FRQ Reasoning | ✅ | `openDsaAlgorithmQuestions` plus FormalLanguages cover search/sort/automata |
| 8. Computing Impact and Create-style Project | ❌ | No items on privacy, bias, digital divide, IP |

**Chapter taxonomy mismatch.** Hand items use "AP CS Dock/Reef/Cove/Lagoon" rather than the syllabus's eight chapters. `apComputerScienceWorkoutGenerated.ts` uses topic labels (likely "Programming Basics", "Data Structures" etc) that need realignment.

**Dual-track problem.** The syllabus header reads `Covers: col-ap-computer-science, col-ap-computer-science-principles`. Of those, `col-ap-computer-science` exists in the age catalog (line 1378) but is **not** wired to `highAdvanced.ts` — it falls through to `highGenerated.ts`. `col-ap-computer-science-principles` is referenced in `highCollectionGroups` titles (line 2078) but no track with that ID exists. End-users opening "AP Computer Science" from the collection list get the templated generator.

## Per-file recommendations

| File | Items for apComputerScience | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (apComputerScience block, lines 402–440) | 4 hand items | **FIX** | Loop/boolean/algorithm/array items are sober and per-distractor explained, but they are language-agnostic and don't reflect Java syntax (the CSA pathway the syllabus is built around). |
| [`apComputerScienceExamBatch.ts`](../../../src/data/questionCatalog/apComputerScienceExamBatch.ts) | ~50 | **KEEP/FIX** | Sample shows AP-style exam questions; verify chapter labels match the syllabus. Likely needs region/`lastReviewed` tagging. |
| [`apComputerScienceWorkoutGenerated.ts`](../../../src/data/questionCatalog/apComputerScienceWorkoutGenerated.ts) | ~50 | **FIX** | Floe-native drill items with per-distractor reasons; chapter labels should be realigned to the eight syllabus chapters; verify Java specificity. |
| [`openDsaFormalLanguagesImported.ts`](../../../src/data/questionCatalog/openDsaFormalLanguagesImported.ts) | imported | **KEEP** | Solid coverage of FSM, regex, grammar topics; better-suited to the standalone `computerScienceTheory` track but useful here for Chapter 7. |
| [`openDsaAlgorithmsImported.ts`](../../../src/data/questionCatalog/openDsaAlgorithmsImported.ts) | imported | **KEEP** | Algorithm/sorting/search coverage; provides Chapters 2 and 7. |
| [`openTriviaApcsExtensionImported.ts`](../../../src/data/questionCatalog/openTriviaApcsExtensionImported.ts) | imported | **FIX** | Stripped-context trivia per the audit's `imsTutorialsImported` smell pattern — sample to confirm; likely needs replacement with Java-specific authored items. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) (computing family blueprints, top-up to 50) | up to 50 | **FIX (procedural generator)** | Generator family `'computing'` reuses 5–6 blueprints with `variant` indexing. Per May 2026 audit, flag generator usage — generic "Variables and Types 2" chapters drown out the syllabus structure. |

## Open actions (priority order)

1. **Resolve `apComputerScience` vs `col-ap-computer-science` routing.** Wire the collection-style id to `highAdvanced.ts`'s `apComputerScience` bank or delete the duplicate.
2. **Author 8–10 Java-specific items** for Chapter 5 (OOP: constructor, `this`, inheritance, polymorphism) and Chapter 6 (ArrayList traversal pitfalls, 2D loops).
3. **Author 4–6 Chapter 8 items** on data privacy, bias, IP, digital divide.
4. **Realign chapter labels** in exam-batch and workout files to the eight syllabus chapter names.
5. **Audit `openTriviaApcsExtensionImported.ts`** for stripped-context items; likely DELETE or MERGE.
6. **Add `region: 'US'`** to the track entry.

## Estimated effort

- Routing fix: ~1 hour
- OOP + ArrayList + Impact authoring: ~6 hours
- Chapter rename + trivia audit: ~2 hours

## Notes for next auditor

Same generator-shadow pattern as `apCalculus` and `apEconomics`: hand bank lives under camelCase id, collection-style id falls through to `highGenerated.ts`. Three of the four AP tracks in this cluster share this exact bug and should be fixed in one pass.
