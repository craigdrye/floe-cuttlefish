# SQL Foundations
**ID**: `sqlFoundations` - **Discipline**: Technology - **Stage**: University Freshman / Career Bridge
**Aligns with**: data analyst, data science, business analytics, product analytics, and software foundations

## Course Aim
SQL is not just a query language; it is a discipline for thinking precisely about data. The aim of this course is to give students fluent, trustworthy command of SQL so they can move from a vague business question to a correct, defensible answer backed by relational data. Students learn to read a schema cold, identify the grain of every table they touch, translate plain-English constraints into exact predicates, and combine tables without silently inflating or dropping rows. By the end, students treat a query result as a claim that must be validated, not as a number to be copied into a slide.

The course is built around a single recurring habit: know your grain, check your row counts, and name your denominator before you trust an output. Most real-world SQL mistakes are not syntax errors that the database rejects loudly; they are logically valid queries that quietly answer the wrong question. A join that fans out a one-to-many relationship doubles revenue. A WHERE clause that filters on a column that is sometimes NULL silently discards rows. An average computed over the wrong grain reports a number that no stakeholder can reproduce. Students learn to anticipate, detect, and explain these failures, which is the skill that separates a junior who runs queries from an analyst whose numbers can be trusted.

Finally, the course situates SQL inside the wider analytics workflow. Queries do not live alone; they feed dashboards, models, and decisions, and they must be readable by the next person (often the student, six months later). Students practice structuring analysis with CTEs, documenting assumptions, building reproducible scripts, and reasoning about basic performance so their work survives contact with production data and real reviewers.

## Course Design Notes
This is a lab-centered foundations course for university students, career-bridge learners, and early analysts. Route questions here when learners need SELECT mechanics, filtering and boolean logic, NULL semantics, join types and row-grain reasoning, aggregation and metric design, subqueries and CTEs, window functions, relational modeling, data-quality testing, query performance basics, or end-to-end analytics workflows. Every chapter pairs a concept with a hands-on lab and an explicit failure mode, because SQL is learned by writing, breaking, and debugging queries rather than by memorizing keyword lists.

Two pedagogical commitments run through the course. First, dialect-awareness: examples lean on standard ANSI SQL with PostgreSQL as the reference engine, and the course flags where common dialects (MySQL, SQL Server, SQLite, BigQuery) diverge on things like string concatenation, `LIMIT` vs `TOP`, `ILIKE`, integer division, and NULL ordering. Second, validation-first practice: students are taught to predict a query's row count and grain before running it, then reconcile the prediction with the result. The recurring deliverable is not just a correct query but a short note explaining why it is correct and what could have made it wrong.

## Chapter 1: Relational Thinking and Query Order
- **Core questions**: What is the grain of a table, and why does naming it first prevent most downstream mistakes? Why does the order you *write* SQL clauses differ from the order the engine *logically processes* them?
- **Key concepts**: Relations, rows, columns, tuples, schemas, data types, result sets, the difference between stored data and computed output, SELECT/FROM/WHERE/ORDER BY/LIMIT, and the logical processing order (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT).
- **Applied skills**: Walk through an unfamiliar schema and state each table's grain, likely keys, and three answerable questions; predict a simple query's output before running it; reason about why a column alias defined in SELECT cannot be used in WHERE.
- **Common traps**: Assuming SQL runs top-to-bottom in written order; confusing the table's grain with the result's grain; treating `LIMIT` as a filter on which rows are "correct" rather than an arbitrary truncation of an unordered set; expecting a default sort when no ORDER BY is given.

## Chapter 2: Filtering, Boolean Logic, and NULL Semantics
- **Core questions**: How do you translate a business rule into a precise predicate? Why does three-valued logic (TRUE/FALSE/UNKNOWN) mean a NULL can silently drop rows from both `= 'x'` and `<> 'x'` results?
- **Key concepts**: Comparison operators, AND/OR/NOT, IN, BETWEEN (inclusive endpoints), LIKE/ILIKE and wildcards, date and text filters, operator precedence and parentheses, and NULL-safe logic with IS NULL / IS NOT NULL / COALESCE.
- **Applied skills**: Convert a constraint like "active customers who signed up last quarter but have no recorded region" into a WHERE clause; debug an AND/OR precedence bug; predict and verify the row-count effect of each predicate.
- **Common traps**: Writing `WHERE region <> 'EU'` and losing every NULL region; mixing AND and OR without parentheses; using `= NULL` instead of `IS NULL`; forgetting BETWEEN is inclusive on both ends; assuming `LIKE` is case-insensitive (engine-dependent).

## Chapter 3: Keys, Joins, and Row Grain
- **Core questions**: Which join type answers the question being asked, and how do you know a join changed your row count for the wrong reason? How does a many-to-many relationship silently amplify aggregates?
- **Key concepts**: Primary, foreign, and composite keys; one-to-one, one-to-many, many-to-many; INNER vs LEFT/RIGHT/FULL OUTER JOIN; join conditions vs filter conditions; bridge/junction tables; anti-joins (`LEFT JOIN ... WHERE key IS NULL`) and self-joins.
- **Applied skills**: Choose and justify a join type; run a join audit comparing pre- and post-join row counts; find customers with no orders using a LEFT JOIN anti-pattern; detect duplicate amplification before it corrupts a SUM.
- **Common traps**: Putting a filter on the right table in WHERE after a LEFT JOIN, silently turning it into an INNER JOIN; joining on a non-unique key and double-counting; assuming an INNER JOIN preserves all left rows; confusing "missing match" (NULLs from outer join) with "zero value."

## Chapter 4: Aggregation and Metric Design
- **Core questions**: At what grain are you aggregating, and what is the exact denominator of your rate? When is COUNT(*) wrong and COUNT(DISTINCT x) right?
- **Key concepts**: COUNT(*) vs COUNT(column) vs COUNT(DISTINCT), SUM, AVG, MIN, MAX, GROUP BY, HAVING, conditional aggregation with `SUM(CASE WHEN ...)` or `COUNT(...) FILTER`, cohorts, and rate construction.
- **Applied skills**: Compute revenue by month at the correct grain; separate a row filter (WHERE) from a group filter (HAVING); choose the right denominator for a conversion rate; build a conditional aggregate to count a subset within each group.
- **Common traps**: Using AVG on a column that already aggregated something (averaging averages); forgetting COUNT(column) skips NULLs while COUNT(*) does not; putting an aggregate condition in WHERE instead of HAVING; selecting a non-grouped, non-aggregated column and getting a dialect-dependent arbitrary value; integer division collapsing a rate to 0.

## Chapter 5: Subqueries, CTEs, and Readable Analysis
- **Core questions**: When does a correlated subquery re-run per row, and when can a CTE or join express the same logic more clearly and cheaply? How do you stage a multi-step analysis so each step is independently verifiable?
- **Key concepts**: Scalar, table, and correlated subqueries; IN / NOT IN / EXISTS / NOT EXISTS; common table expressions (WITH); staging and naming logic; the NOT IN + NULL trap; recursive CTEs (introductory).
- **Applied skills**: Rewrite a deeply nested query as a readable chain of named CTEs; isolate a failing calculation by validating each CTE in turn; stage a funnel analysis step by step; replace `NOT IN (subquery)` with `NOT EXISTS` when NULLs are possible.
- **Common traps**: `NOT IN` returning zero rows because the subquery contains a NULL; assuming a CTE is always materialized/optimized like a temp table (engine-dependent); correlated subqueries that quietly run once per outer row and dominate runtime; CTEs that hide an unvalidated grain change.

## Chapter 6: Window Functions and Analyst Patterns
- **Core questions**: How do window functions add computed columns across related rows without collapsing detail the way GROUP BY does? What is the difference between ROW_NUMBER, RANK, and DENSE_RANK when there are ties?
- **Key concepts**: OVER, PARTITION BY, ORDER BY within a window, ROW_NUMBER/RANK/DENSE_RANK, LAG/LEAD, running totals and moving averages via frame clauses (ROWS/RANGE BETWEEN), first/latest-record selection, and period-over-period change.
- **Applied skills**: Rank orders within each customer; select the latest status per account with ROW_NUMBER + a filter; compute a 7-day moving average; calculate month-over-month change with LAG; build a retention/cohort pattern.
- **Common traps**: Trying to filter directly on a window-function result in WHERE (must wrap in a subquery/CTE because windows are computed after WHERE); confusing RANK (gaps after ties) with DENSE_RANK (no gaps) and ROW_NUMBER (arbitrary tie-break); forgetting that a running total needs an explicit ORDER BY in the window; mishandling the default frame.

## Chapter 7: Schema Design and Data Quality
- **Core questions**: How do you model entities and relationships so the schema enforces correctness, and where is denormalization a deliberate tradeoff rather than a mistake? What automated checks catch bad data before it reaches a dashboard?
- **Key concepts**: Entities, attributes, relationships, normalization (1NF–3NF), denormalization for analytics, star schemas with fact and dimension tables, constraints (NOT NULL, UNIQUE, CHECK, FOREIGN KEY), referential integrity, surrogate vs natural keys, naming conventions, and data dictionaries.
- **Applied skills**: Sketch a normalized schema for a small application and choose primary/foreign keys; identify redundant or update-anomaly-prone columns; design a fact/dimension model for reporting; write data-quality tests for missing, duplicate, out-of-range, and orphaned values.
- **Common traps**: Storing repeating groups in one column (violating 1NF) and parsing them later; using a mutable natural key as a primary key; assuming a FOREIGN KEY constraint exists when it was never declared; over-normalizing an analytics table so every query needs six joins; treating "no constraint errors" as proof of clean data.

## Chapter 8: Performance Basics and Analytics Workflows
- **Core questions**: When can an index actually help a query, and what makes a filter non-sargable so the index is ignored? How do you turn a one-off query into a reproducible, validated pipeline from raw tables to a dashboard-ready dataset?
- **Key concepts**: B-tree indexes, selectivity, sargable predicates, reading a basic EXPLAIN plan (seq scan vs index scan), avoiding `SELECT *`, materialized views, transactions and ACID basics, ETL/ELT staging, and handoff to Python/BI tools.
- **Applied skills**: Read a simple EXPLAIN plan and decide whether an index would help; rewrite a function-wrapped filter so it can use an index; outline a repeatable workflow with source tables, staged transformations, validation checks, and a final published dataset; document assumptions for the next analyst.
- **Common traps**: Wrapping an indexed column in a function (`WHERE DATE(created_at) = ...`) and forcing a full scan; adding indexes that are never used or that slow writes; trusting a dashboard number without a row-count/grain reconciliation upstream; assuming a query that is fast on 10k rows scales to 10M; running a destructive UPDATE/DELETE without a transaction or a WHERE clause.

## Capstone
Students complete a relational analytics project on a small multi-table dataset (e.g., orders, customers, products, events). The deliverable must include: (1) a schema exploration that names each table's grain and keys; (2) filtering that correctly handles NULLs; (3) at least one join with a documented pre/post row-count audit proving no accidental amplification; (4) aggregation with an explicitly stated denominator; (5) at least one window function (ranking, latest-record, or period-over-period); (6) a CTE-structured query with validation checks between stages; (7) a data-quality test suite for missing/duplicate/invalid values; (8) a short performance reflection (what would you index and why); and (9) a final business or research recommendation supported by reproducible, commented SQL that another analyst could rerun and verify.

## Assessment Ideas
- Short weekly query drills checked for correctness, formatting, and row-count reasoning.
- Debugging exercises where students fix broken joins, NULL-dropping filters, and misleading aggregations.
- Schema sketches graded on keys, relationships, grain, normalization choices, and data-quality awareness.
- Analytics memos that connect SQL output to cautious, denominator-aware interpretation.
- Capstone review using a rubric for query correctness, relational reasoning, validation discipline, performance awareness, and communication.

## Research Notes
- SQLBolt interactive lessons (incl. order of execution): https://sqlbolt.com/
- PostgreSQL documentation: https://www.postgresql.org/docs/
- Mode SQL tutorial (analyst patterns): https://mode.com/sql-tutorial/
- Use The Index, Luke (indexing and performance): https://use-the-index-luke.com/
- Data 8, Foundations of Data Science: https://www.data8.org/
- UC Berkeley Data Science education resources: https://data.berkeley.edu/education
