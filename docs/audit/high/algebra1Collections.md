# Audit: algebra1Collections (col-algebra-1)

**Syllabus**: [`src/data/syllabi/high/algebra_1_collections.md`](../../../src/data/syllabi/high/algebra_1_collections.md)
**Track id**: `col-algebra-1` (the only one of four "Covers" ids that exists in the age catalog)
**Tier**: high (year 10)
**Region**: US-leaning (NYSED, STAAR; partly tagged via source line)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Algebraic Habits and Expressions | ✅ | `highBuilders.ts:makeColAlgebraNyNextGenQuiz` Unit 1 — exact match |
| 2. Linear Equations and Literal Equations | ✅ | Unit 2 (Solving equations & inequalities) + algebra1ExamBatch coverage |
| 3. Inequalities and Constraint Reasoning | ✅ | Unit 7 (Inequalities) + exam batch items |
| 4. Functions, Tables, and Graphs | ✅ | Unit 8 (Functions) + exam batch "Functions" chapter |
| 5. Linear Functions and Data Models | ✅ | Units 4, 5 (Linear equations & graphs; Forms of linear equations); exam batch "Linear Models", "Scatter Plots" |
| 6. Systems of Equations and Inequalities | ✅ | Unit 6 (Systems) + exam batch "Systems" |
| 7. Exponents, Polynomials, Exponential Patterns | ✅ | Units 11, 12 (Exponents & radicals; Exponential growth & decay) |
| 8. Quadratics and Algebra 1 Modeling Studio | ✅ | Units 13, 14 (Quadratics) |

Coverage is **excellent** across all eight chapters. This is the best-served track in the cluster.

**Wiring is correct.** `col-algebra-1` is in `highMathTrackIds` (`index.ts:23`) — wait, actually it isn't directly. The set lists `col-algebra-1-ny-next-gen` (with the `-ny-next-gen` suffix), `col-eureka-math-algebra-i`, etc. The age catalog declares `col-algebra-1` (without suffix). So `col-algebra-1` falls through to `high-generated`. **Routing mismatch confirmed.** The hand-authored bank (`makeColAlgebraNyNextGenQuiz`) is mapped to keys (`col-algebra-1-ny-next-gen`, `col-eureka-math-algebra-i`) that **don't exist as tracks**, while the actual track key `col-algebra-1` gets template content.

**Chapter taxonomy.** `highBuilders` uses "Unit 1–17" Khan-style labels. Syllabus uses Chapter 1–8 with descriptive names. Labels are content-faithful but need rename to match the syllabus structure.

## Per-file recommendations

| File | Items for col-algebra-1 | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColAlgebraNyNextGenQuiz` (17 units) | hand-authored | **KEEP** — gold standard | Per May 2026 audit: `highBuilders.ts` is the gold-standard hand-authored math reference. Protect. The 17-unit structure provides depth far beyond the syllabus's 8 chapters. |
| [`algebra1ExamBatch.ts`](../../../src/data/questionCatalog/algebra1ExamBatch.ts) | ~50 | **KEEP** | Per-distractor explanations, NYSED/STAAR-sourced, Floe-native rewrites (not raw imports). High quality. |
| [`schoolAssessmentAlgebra1Questions`](../../../src/data/questionCatalog/schoolAssessmentMathScienceImported.ts) | imported | **KEEP/EVALUATE** | Sample for stripped-context smell; likely keepable. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) math blueprints (top-up) | up to 50 | **FIX (procedural generator)** | What `col-algebra-1` users actually see today due to the routing mismatch. 6 recycled math blueprints with `variant` chapter labels. Should be displaced once routing is fixed. |

## Open actions (priority order)

1. **Fix the routing key.** Either rename the highMath catalog key from `col-algebra-1-ny-next-gen` to `col-algebra-1`, or add `col-algebra-1` to `highMathTrackIds` and add a bundle entry. One-line change unblocks the entire algebra bank.
2. **Audit the other dead keys** in `highMath.ts` (`col-eureka-math-*`, `col-precalculus`, `col-statistics-probability`) — all bind to tracks that don't exist in the age catalog.
3. **Realign chapter labels** from "Unit 1–17" to the syllabus's eight chapter names (or update the syllabus to acknowledge the 17-unit structure as preferred granularity).
4. **Tag `region: 'US'`** on the track entry — content is NYSED/STAAR-aligned.
5. **Author 2–4 capstone-style modeling items** explicitly framed against the Chapter 8 modeling studio.

## Estimated effort

- Routing key fix: ~30 minutes
- Catalog-wide dead-key audit: ~1 hour
- Chapter rename pass: ~1–2 hours
- Modeling items: ~2 hours

## Notes for next auditor

`highBuilders.ts` is the cluster's flagship file. It's worth ~3,500 lines of carefully constructed math items. Protect it: any consolidation work should pull TOWARD this file's structure, never replace it. The routing-key bug here is the same bug as `microeconomics`/`macroeconomics` — content exists, ids mismatch, generator wins by accident.
