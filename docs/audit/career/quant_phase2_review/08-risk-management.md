# Phase 2 Review — Risk Management

**2 questions** · core: 0 · advanced: 2

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19374 | ⚪ adv | VaR vs ES | Why is Expected Shortfall (ES) considered better than Value at Risk (VaR)? | It is a coherent risk measure that accounts for the "tail"… |
| 2 | 19375 | ⚪ adv | Backtesting | What is the purpose of backtesting a VaR model? | To compare the model's predicted losses with actual histori… |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

