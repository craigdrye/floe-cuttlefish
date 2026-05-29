# Audit: sqlFoundations

**Syllabus**: [`src/data/syllabi/university/sql_foundations.md`](../../../src/data/syllabi/university/sql_foundations.md)
**Track id**: `sqlFoundations`
**Tier**: university (freshman / career bridge)
**Region**: jurisdiction-neutral (PostgreSQL-canonical)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Relational Thinking and Query Order | ✅ thin | SELECT clause role, WHERE role |
| 2. Filtering, Boolean Logic, Clean Conditions | ✅ thin | Just WHERE role |
| 3. Keys, Joins, and Row Grain | ✅ | INNER JOIN, primary key, foreign key |
| 4. Aggregation and Metric Design | ✅ | GROUP BY, HAVING |
| 5. Subqueries, CTEs, and Readable Analysis | ❌ | Not covered — major gap given syllabus emphasis on CTEs |
| 6. Window Functions and Analyst Patterns | ✅ thin | One ROW_NUMBER example |
| 7. Schema Design and Data Quality | ✅ thin | Primary/foreign key only |
| 8. Performance Basics and Analytics Workflows | ❌ | No EXPLAIN, indexes, query plans |

The track is severely under-populated. Wiring is **`sqlFoundationsStarterQuestions` + `openDsaCoreIntroCsQuestions.filter(q => q.prompt.toLowerCase().includes('database'))`** — the second source filters a Java/intro-CS bank by the literal word "database", which will catch a handful of off-topic items but no real SQL drills.

**Chapter taxonomy mismatch.** Starter file chapters ("Query Basics", "Filtering", "Joins", "Aggregation", "Window Functions", "Data Modeling") are reasonable but don't match the syllabus's eight named chapters.

## Per-file recommendations

| File | SQL Q's | Bucket | Reason |
|---|---|---|---|
| [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts) (`sqlFoundationsStarterQuestions`) | 8 | **KEEP** | Hand-authored, per-distractor `whyWrong + hint`, sober tone. Best content on the track. Far too few questions. |
| [`openDsaCoreImported.ts`](../../../src/data/questionCatalog/openDsaCoreImported.ts) (filtered `prompt.includes('database')`) | unknown small N | **DELETE wiring** | Filter is content-incoherent: it picks Java/intro-CS items that happen to mention "database" rather than SQL drills. Whatever it picks up will have boilerplate distractors ("This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt"). Remove from track. |

## Open actions (priority order)

1. **DELETE the `.filter((q) => q.prompt.toLowerCase().includes('database'))` wiring** — incoherent source. The track should rely entirely on hand-authored SQL content.
2. **Author 40–50 SQL drill questions** to reach syllabus coverage. Priorities by chapter gap:
   - Chapter 2: AND/OR/NOT precedence, LIKE/ILIKE, BETWEEN, NULL-safe filters (~6)
   - Chapter 3: LEFT vs INNER vs anti-join, duplicate amplification, many-to-many bridge tables (~6)
   - Chapter 4: COUNT vs COUNT DISTINCT, denominator traps, conditional aggregation (~5)
   - Chapter 5: CTE staging, scalar vs correlated subqueries, funnel analysis (~6)
   - Chapter 6: RANK vs DENSE_RANK vs ROW_NUMBER, LAG/LEAD, moving averages, period-over-period (~6)
   - Chapter 7: normalization, fact vs dimension, data quality checks (~5)
   - Chapter 8: EXPLAIN plans, when an index helps, materialized views (~5)
3. **Align chapter names** to the syllabus's eight chapters.
4. **Tag region**: PostgreSQL-canonical per syllabus is fine and jurisdiction-neutral; no US tagging needed.

## Estimated effort

- Authoring 40–50 questions: ~14 hours (20 min each with per-distractor rigour)
- Delete unsound filter wiring: ~5 min
- Chapter rename: ~15 min

**~2 working days**. The bank needs roughly 6x its current size to match syllabus depth.

## Notes for next auditor

This is the most under-populated of the eight cluster courses — it has fewer than 10 hand-authored questions versus a syllabus spanning eight rich chapters. Window functions, CTEs, and performance basics are particular gaps. The `sqlFoundationsStarterQuestions` voice is the right template (clean prose, no SQL-specific dialect quirks, references PostgreSQL-style behavior). Consider whether this track should also draw from the `introDataScience` SQL chapter material (currently `introDataScience` is wired to a statistics-only source set, so there's no overlap to exploit).
