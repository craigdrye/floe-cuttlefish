# Phase 2 Review — Programming

**6 questions** · core: 4 · advanced: 2

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19603 | 🟢 core | Virtual Destructor | Why should a base class have a virtual destructor in C++? | To ensure that the derived class destructor is called when… |
| 2 | 19604 | 🟢 core | Smart Pointers | What is the difference between std::unique_ptr and std::shared_ptr? | unique_ptr has exclusive ownership; shared_ptr uses referen… |
| 3 | 19605 | 🟢 core | Factory Pattern | What is the purpose of the Factory Pattern? | To create objects without specifying the exact class of obj… |
| 4 | 19606 | ⚪ adv | Vector vs List | In C++, when is a std::list better than a std::vector? | When frequent insertions and deletions occur in the middle… |
| 5 | 19607 | ⚪ adv | Pass by Reference | In C++, why use "const T&" instead of "T" for large objects? | To avoid expensive copying while ensuring the function cann… |
| 6 | 19828 | 🟢 core | Duplicate Ticker Triage | You are given an array of ticker strings and need to return true if any ticker appears twice. Which implementation is t… | Iterate once and store seen tickers in a hash set. |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

