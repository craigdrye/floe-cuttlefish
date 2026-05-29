# Audit: discreteMath

**Syllabus**: [`src/data/syllabi/university/discrete_mathematics.md`](../../../src/data/syllabi/university/discrete_mathematics.md)
**Track id**: `discreteMath`
**Tier**: university
**Region**: Universal — no jurisdiction. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Logic, Language, Quantifiers | partial | Contrapositive in starter; openLogicProject (FOL) bank routes mostly to `formalLogic` track. Discrete-track exposure thin. |
| 2. Proof Methods and Mathematical Writing | partial | Direct/contrapositive present; proof-by-contradiction, induction-as-proof drills absent here |
| 3. Sets, Functions, Cardinality | yes | Strong via `openLogicProjectDataStructuresQuestions`: empty set uniqueness, ordered-pair equality, Cartesian product size, power-set, subsets, union/intersection absorption, subset transitivity, composition of injections, cardinality |
| 4. Counting and Combinatorics | partial | Product rule + injection in starter; **inclusion-exclusion, pigeonhole, binomial-theorem combinatorial proof missing** |
| 5. Induction, Recursion, Recurrences | no | Not covered |
| 6. Relations, Orders, Modular Arithmetic | partial | Equivalence-relation triple in starter; **Hasse diagrams, modular inverse, Euclidean algorithm missing** |
| 7. Graphs and Trees | yes | Graph degree in starter; via `logicCsAdditionalDataStructuresQuestions`: edgeless graphs, leaf definition, perfect binary tree count; via openDsa: more graph and tree algorithm content |
| 8. Discrete Models in CS | partial | Algorithm analysis (Big-O for 5n+3, insertion-sort inversions) covered through openDsa imports; **finite-state machines, regular languages, hashing absent** |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts) `discreteMathematicsStarterQuestions` | 23 | **KEEP** | Hand-authored, per-distractor explanations + nudges, lessons that summarise the concept (not opaque source IDs). Covers contrapositive, subsets, equivalence relations, product rule, graph degree, injections — six chapters at one item each. Solid starter; clearly the canonical voice. |
| [`openLogicProjectImported.ts`](../../../src/data/questionCatalog/openLogicProjectImported.ts) `openLogicProjectDataStructuresQuestions` | 19 | **KEEP** | Per-distractor reasons preserved. Strong on sets, functions, relations. Source IDs (`openlogic::sets-functions-relations/...`) traceable. |
| [`logicCsAdditionalImported.ts`](../../../src/data/questionCatalog/logicCsAdditionalImported.ts) `logicCsAdditionalDataStructuresQuestions` | 7 | **KEEP** | Per-distractor reasons. Graph/tree/algorithm-analysis bridge to CS applications. |
| [`openDsaCoreImported.ts`](../../../src/data/questionCatalog/openDsaCoreImported.ts) `openDsaCoreDataStructuresQuestions` | 150+ | **FIX or DELETE** | (1) Raw LaTeX in prompts (`\Theta`, `O(n^2)`) renders literally — app has no KaTeX/MathJax. (2) `DEFAULT_FLAW`-equivalent boilerplate on every distractor. Many items are True/False with one wrong answer. Triage: salvage ~10–15, delete rest. |

Wired at `universityAcademic.ts:378-383`. The four files combine to ~200 routed items but the openDsa bulk is the problem.

## Cross-cluster flags

- **LaTeX RENDERING MISMATCH CONFIRMED**: `openDsaCoreImported.ts` has 7+ raw `\Theta` occurrences. App has **no KaTeX/MathJax** (verified — no refs in `src/components`, `src/lib`, `package.json`). Plain-text renderer displays backslashes literally. **Flag: either add KaTeX or strip LaTeX.** Every other math file uses ASCII conventions that render fine.
- **`DEFAULT_FLAW` equivalent in `openDsaCoreImported.ts`**: identical generic-reason strings across every distractor. Same pattern as `imsTutorialsImported.ts`.
- **Region**: universal. No tag needed.
- **CS-vs-Math identity**: track straddles maths and CS by syllabus design. Beware drift toward pure CS at the expense of proof / counting / number-theory.

## Open actions (priority order)

1. **Strip or transliterate LaTeX in `openDsaCoreImported.ts`** (regex pass: `\Theta` → `Theta`, `\Omega` → `Omega`, `O(n^2)` is fine, `\log n` → `log n`). ~2 hours including spot-check.
2. **Audit `openDsaCoreImported.ts` for salvageable items** with self-contained prompts and at least conceptual distractors. Keep ~15–20, delete the rest. ~3 hours.
3. **Author chapter 5 content** (induction / recurrences): proof of `sum 1..n = n(n+1)/2`, strong induction tile argument, recurrence T(n) = 2T(n/2) + n solution, recursion-tree visualization. **~8 items. Largest content gap.**
4. **Author chapter 6 deepening**: Hasse diagram interpretation, gcd via Euclidean algorithm, modular inverse, Chinese Remainder hint. ~5 items.
5. **Author chapter 4 deepening**: inclusion-exclusion 3-set, pigeonhole existence proof, binomial-identity combinatorial argument. ~5 items.

## Estimated effort

- LaTeX strip pass: ~2 hours
- openDsa triage: ~3 hours
- Chapters 4/5/6 authoring: ~9 hours (18 items × 30 min)

**~2 working days.** The LaTeX/import-quality work pairs with the authoring work cleanly.

## Notes for next auditor

Most visible LaTeX rendering mismatch in the cluster. Kolibri (CK-12) imports also contain stray backslash-escaped fragments in lesson strings. Decision is repo-wide: add KaTeX (cluster needs no rewrite) or stay ASCII (imports need stripping).
