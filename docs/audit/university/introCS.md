# Audit: introCS

**Syllabus**: [`src/data/syllabi/university/intro_computer_science.md`](../../../src/data/syllabi/university/intro_computer_science.md)
**Track id**: `introCS`
**Tier**: university (freshman)
**Region**: jurisdiction-neutral (Python-canonical)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Computing Systems & Programming Workflow | ❌ | No questions on terminals/venvs/git workflow |
| 2. Values, Variables, Types, Expressions | ✅ | Variable, assignment, string, boolean, type, expression, modulo |
| 3. Control Flow and Iteration | ✅ | if/else, comparison, AND, for/while, infinite loop, accumulator |
| 4. Functions, Decomposition, Recursion Basics | ✅ partial | Function, parameter, return, side effect, pure function — recursion missing |
| 5. Core Data Structures in Python | ✅ | List, index, dictionary, set, iteration, strings |
| 6. Files, Errors, Debugging, Testing | ✅ | File read, CSV, exception, try/except, print debug, debugger, trace, test case, edge case, off-by-one |
| 7. Simple Algorithms and Complexity | ❌ | No Big-O for beginners, no linear/binary search, no sorting intuition |
| 8. Building a Small Program | ✅ thin | Readable code, comments, blank-file skill — no project-shaped questions |

**Chapter taxonomy mismatch.** Workout file uses chapters "Computational Thinking", "Programs", "Variables", "Expressions", "Conditionals", "Loops", "Functions", "Collections", "Strings", "Files", "Errors", "Debugging", "Testing", "Style", "Problem Solving" — topic-good but does not match the syllabus's named eight chapters. The OpenDSA bridge import uses chapters like "Software Engineering Bridge", "Core Data Structures", "Algorithms and Complexity" — totally wrong scope for a freshman CS1.

## Per-file recommendations

| File | introCS Q's | Bucket | Reason |
|---|---|---|---|
| [`introCsWorkoutGenerated.ts`](../../../src/data/questionCatalog/introCsWorkoutGenerated.ts) | 50 | **KEEP** | Hand-authored, `miss(answer, why, hint)` triples, beginner-appropriate tone, broad coverage. Best file on this track. Rename chapters to match syllabus. |
| [`openDsaBridgeCourseImported.ts`](../../../src/data/questionCatalog/openDsaBridgeCourseImported.ts) | ~280 | **DELETE for introCS** | **Wrong audience** — Meng Bridge Course is a Java OOP transition course (ArrayBag overloaded methods, inheritance dispatch). Boilerplate distractor explanations: every wrong answer carries "This is a plausible CS bridge-course answer, but it misses the data-structure, Java, or algorithm rule in the prompt." Out of scope for a Python CS1. Cut from `introCS` and `softwareFoundations`. |
| [`openDsaCoreImported.ts`](../../../src/data/questionCatalog/openDsaCoreImported.ts) (`openDsaCoreIntroCsQuestions`) | ~few hundred | **DELETE** | Boilerplate DEFAULT_FLAW distractors ("This matches a nearby Java or intro-CS idea…"). **Line 42 (OOP2Checkpoint3Q2)** has a stripped code snippet — the prompt mentions "the following variable myObj is declared as type GeneralCase" but no code follows; the answer reduces to a Java OOP dispatch question without the code. Java-focused, not Python-focused — wrong audience entirely. |
| [`logicCsAdditionalImported.ts`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) (`logicCsAdditionalIntroCsQuestions`) | 2 | **KEEP** | Hand-authored Floe conversions. Tiny but clean. |

## Open actions (priority order)

1. **DELETE the OpenDSA imports** (`openDsaBridgeCourseQuestions`, `openDsaCoreIntroCsQuestions`) from the `introCS` track wiring. They're Java-centric, boilerplate-distracted, and wrong audience for a Python CS1. Net loss of ~600 questions; net quality gain massive.
2. **Author 25–30 questions** to close gaps: Chapter 1 (shell, venv, repo, pseudocode), Chapter 4 recursion (base case, call stack, recursive list-sum), Chapter 7 (linear vs binary search, basic Big-O intuition for beginners, slow-loop refactor with set).
3. **Rename chapters** in `introCsWorkoutGenerated.ts` to the syllabus's eight-chapter spine.
4. **Verify Python-canonical examples** — current file uses backticks (`` `x = 5` ``, `` `for` ``) but stays language-agnostic-leaning. Lean further into Python idioms (`enumerate`, list comprehensions, `pathlib`) to match syllabus framing.

## Estimated effort

- Authoring 25–30 questions: ~8 hours
- Delete + rewire: ~30 min
- Chapter rename: ~30 min

**~1.5 working days**.

## Notes for next auditor

`introCsWorkoutGenerated.ts` is the highest-quality CS1 bank in the catalog and should be the voice template for any Python CS1 expansion. The `openDsaBridgeCourseImported.ts` Meng Bridge Course content is Java-OOP transition material — if a future Java-OOP track exists (none in current catalog), it could be moved there after a heavy distractor rewrite; otherwise delete.
