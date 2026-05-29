# Phase 2 Review — Fixed Income

**5 questions** · core: 0 · advanced: 5

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19701 | ⚪ adv | Duration | What does Macaulay Duration measure? | The weighted average time until all cash flows are received. |
| 2 | 19702 | ⚪ adv | Convexity | Why is positive convexity desirable for a bond holder? | The bond price rises more when rates fall than it falls whe… |
| 3 | 19703 | ⚪ adv | DV01 | What is DV01? | The change in price for a 1 basis point (0.01%) move in int… |
| 4 | 19704 | ⚪ adv | Bootstrap | What is "Bootstrapping" in the context of yield curves? | A method to construct a zero-coupon yield curve from the pr… |
| 5 | 19705 | ⚪ adv | CDS | What is a Credit Default Swap (CDS)? | An insurance-like contract where the seller compensates the… |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

