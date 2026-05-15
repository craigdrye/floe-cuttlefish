# SQL Foundations
**ID**: `sqlFoundations` - **Discipline**: Technology - **Stage**: University Freshman / Career Bridge
**Aligns with**: data analyst, data science, business analytics, product analytics, and software foundations

## Course Aim
Give students practical command of SQL as a language for thinking with relational data. Students learn to read schemas, ask precise questions, write correct queries, join without accidental duplication, summarize responsibly, design simple tables, reason about performance basics, and use SQL inside analytics workflows that lead to trustworthy decisions.

## Course Design Notes
This is a lab-centered foundations course for university students, career bridge learners, and early analysts. Route questions here when students need SELECT queries, joins, aggregation, relational modeling, schema reading, CTEs, window functions, SQL debugging, analytics workflows, or database performance basics. Emphasize query grain, readable structure, careful denominators, and habitually checking row counts before trusting outputs.

## Chapter 1: Relational Thinking and Query Order
- **Key concepts**: Relational tables, rows, columns, schemas, data types, result sets, query order, SELECT, FROM, WHERE, ORDER BY, LIMIT, NULLs, and the difference between stored data and query output.
- **Practice questions**: Identify the grain of a table; predict the output of a simple query; explain why SQL clause order differs from execution logic; handle NULLs in filters.
- **Student output**: A schema walk-through that names tables, columns, likely keys, row grain, and three answerable business questions.

## Chapter 2: Filtering, Boolean Logic, and Clean Conditions
- **Key concepts**: Comparisons, AND, OR, NOT, IN, BETWEEN, LIKE, ILIKE, date filters, text filters, operator precedence, parentheses, NULL-safe logic, and translating plain-English constraints into predicates.
- **Practice questions**: Convert a business rule into a WHERE clause; find records inside a date window; debug an AND/OR mistake; explain why a NULL did or did not match.
- **Student output**: A filter workbook with progressively complex conditions, expected row-count checks, and short notes explaining each predicate.

## Chapter 3: Keys, Joins, and Row Grain
- **Key concepts**: Primary keys, foreign keys, composite keys, one-to-one, one-to-many, many-to-many, INNER JOIN, LEFT JOIN, join conditions, duplicate amplification, missing matches, bridge tables, and anti-joins.
- **Practice questions**: Choose the correct join type; explain why row counts changed; detect a many-to-many join problem; find customers without orders.
- **Student output**: A join audit that compares pre-join and post-join row counts, documents join keys, and flags duplicate or unmatched records.

## Chapter 4: Aggregation and Metric Design
- **Key concepts**: COUNT, COUNT DISTINCT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, grouping grain, rates, denominators, cohorts, conditional aggregation, and common metric traps.
- **Practice questions**: Calculate revenue by month; separate WHERE from HAVING; choose the correct denominator for conversion rate; explain when COUNT DISTINCT is needed.
- **Student output**: A metric notebook or SQL script with grouped summaries, denominator notes, and a brief interpretation of trends or anomalies.

## Chapter 5: Subqueries, CTEs, and Readable Analysis
- **Key concepts**: Scalar subqueries, table subqueries, correlated subqueries, common table expressions, staging logic, query naming, incremental debugging, reusable analysis patterns, and temporary result thinking.
- **Practice questions**: Rewrite a nested query as CTEs; isolate a failing calculation; stage a funnel analysis; explain what each CTE contributes.
- **Student output**: A multi-step analysis query using named CTEs, inline comments for logic boundaries, and validation checks between stages.

## Chapter 6: Window Functions and Analyst Patterns
- **Key concepts**: PARTITION BY, ORDER BY inside windows, ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, running totals, moving averages, first and latest records, period-over-period change, and cohort retention patterns.
- **Practice questions**: Rank orders within each customer; find the latest status per account; calculate a seven-day moving average; compare this month with last month.
- **Student output**: A window-function query pack with ranking, latest-record selection, running total, and period comparison examples.

## Chapter 7: Schema Design and Data Quality
- **Key concepts**: Entities, attributes, relationships, normalization, denormalization, fact tables, dimension tables, constraints, uniqueness, referential integrity, data dictionaries, naming conventions, and data quality tests.
- **Practice questions**: Sketch a schema for a small application; choose primary and foreign keys; identify redundant columns; write checks for missing, duplicate, or invalid values.
- **Student output**: A simple relational schema with table descriptions, keys, sample rows, and a data quality checklist.

## Chapter 8: Performance Basics and Analytics Workflows
- **Key concepts**: Indexes, query plans, selective filters, avoiding unnecessary columns, join order intuition, materialized views, transactions, isolation basics, extract-transform-load workflows, dashboards, reproducible SQL files, and handoff to Python or BI tools.
- **Practice questions**: Read a simple EXPLAIN plan; decide whether an index could help; reduce an expensive query; outline a repeatable analytics workflow from raw tables to dashboard.
- **Student output**: An analytics workflow brief with source tables, staged queries, performance notes, validation checks, and a final dashboard-ready dataset.

## Capstone
Students complete a relational analytics project using a small multi-table dataset. The project must include schema exploration, filtering, joins, aggregation, at least one window function, CTE-based query structure, data quality checks, basic performance reflection, and a final business or research recommendation supported by reproducible SQL.

## Assessment Ideas
- Short weekly query drills checked for correctness, formatting, and row-count reasoning.
- Debugging exercises where students fix broken joins, incorrect filters, and misleading aggregations.
- Schema sketches graded on keys, relationships, grain, and data quality awareness.
- Analytics memos that connect SQL output to cautious interpretation.
- Capstone review using a rubric for query correctness, relational reasoning, validation, performance awareness, and communication.

## Research Notes
- SQLBolt lessons: https://sqlbolt.com/
- PostgreSQL documentation: https://www.postgresql.org/docs/
- Mode SQL tutorial: https://mode.com/sql-tutorial/
- Data 8, Foundations of Data Science: https://www.data8.org/
- Pandas documentation for SQL integration context: https://pandas.pydata.org/docs/
- UC Berkeley Data Science education resources: https://data.berkeley.edu/education
