# Quant Phase 2 — Track Boundary Review

Speed-review packets for [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts)'s 261 questions.

**Phase 1 (done):** routing migrated from `chapter ∈ {Brain Teasers, Probability} OR title-in-allowlist` to an explicit `CORE_QUESTION_IDS` Set. Byte-equivalent — 124 in Core, 137 in Advanced.

**Phase 2 (here):** decide which of the 261 questions belong in Core, which belong in Advanced, and which are duplicates flagged for deletion.

## Workflow

1. Walk through one packet at a time (chapters sized for one sitting each)
2. Mark decisions inline in each packet's Decisions log
3. When a chapter is signed off, edit `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts) — add IDs for new core moves, remove IDs for new advanced moves
4. Delete confirmed duplicates from `quant.ts` directly (and from `CORE_QUESTION_IDS` if present)

## Packets

| Chapter | Count | Core / Adv | Packet |
|---|---:|---|---|
| Algorithms | 28 | 3 / 25 | [packet](10-algorithms.md) |
| Brain Teasers | 37 | 37 / 0 | [packet](01-brain-teasers.md) |
| Calculus | 16 | 6 / 10 | [packet](03-calculus.md) |
| Finance | 78 | 8 / 70 | [packet](06-finance.md) |
| Fixed Income | 5 | 0 / 5 | [packet](07-fixed-income.md) |
| Linear Algebra | 14 | 7 / 7 | [packet](04-linear-algebra.md) |
| Probability | 59 | 59 / 0 | [packet](02-probability.md) |
| Programming | 6 | 4 / 2 | [packet](09-programming.md) |
| Risk Management | 2 | 0 / 2 | [packet](08-risk-management.md) |
| Stochastic Calculus | 16 | 0 / 16 | [packet](05-stochastic-calculus.md) |


## Pre-flagged duplicate pairs (from [`QUANT_QUESTION_REVIEW.md`](../../../QUANT_QUESTION_REVIEW.md))

These 16 pairs were identified in a prior review pass and **all drop-side IDs have already been removed** from `quant.ts`. The table below is informational — there is no pending action.

**Legend:** ✅ both still in `quant.ts` (real action); 🔵 one side already removed; ⚪ both removed.


| Keep | Drop | Both present? | Reason |
|---:|---:|---|---|
| 19412 | 19361 | 🔵 drop already removed | 19412 is more specific; 19361 was placeholder-lessoned |
| 19325 | 19360 | 🔵 drop already removed | 19325 has more depth |
| 19207 | 19228 | 🔵 drop already removed | Identical content |
| 19216 | 19229 | 🔵 drop already removed | Identical content |
| 19206 | 19230 | 🔵 drop already removed | Identical content |
| 19214 | 19227 | 🔵 drop already removed | Identical content |
| 19222 | 19231 | 🔵 drop already removed | Identical content |
| 19211 | 19232 | 🔵 drop already removed | Different angles — could keep both, or merge |
| 19205 | 19233 | 🔵 drop already removed | Identical content |
| 19316 | 19354 | 🔵 drop already removed | Identical content |
| 19319 | 19357 | 🔵 drop already removed | Overlapping — merge into one richer question |
| 19127 | 19149 | 🔵 drop already removed | Three nearly identical Poisson-process questions |
| 19128 | 19155 | 🔵 drop already removed | Same problem, different wrapper |
| 19129 | 19157 | 🔵 drop already removed | Identical |
| 19115 | 19158 | 🔵 drop already removed | Identical |
| 19401 | 19349 | 🔵 drop already removed | Overlap; 19349 has weaker lesson |


## Pre-Phase-2 baseline (won't change as we go)

- Total Qs in `quant.ts`: 261
- Core (`quant` track): 124
- Advanced (`quantAdvanced`): 137
- Chapter inventory:

  - Finance: 78
  - Probability: 59
  - Brain Teasers: 37
  - Algorithms: 28
  - Calculus: 16
  - Stochastic Calculus: 16
  - Linear Algebra: 14
  - Programming: 6
  - Fixed Income: 5
  - Risk Management: 2
