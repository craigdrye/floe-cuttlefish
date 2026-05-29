# Audit: financialAccounting

**Syllabus**: [`src/data/syllabi/university/financial_accounting.md`](../../../src/data/syllabi/university/financial_accounting.md)
**Track id**: `financialAccounting`
**Tier**: university (default `university-generated` bucket → `universityAgentGenerated.ts:675`)
**Region**: **US-anchored**. Syllabus and items explicitly reference **GAAP, SEC, FASB, Form 10-K, Sarbanes-Oxley** — these are US accounting regime. International learners would need IFRS coverage instead. **Region tag `region: 'US'` should be added.**
**Status**: `playable` ([`src/data/ageCatalog/university.ts:467`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Reporting Environment (GAAP, FASB, SEC, accounting equation) | ✅ | "Accounting Equation" items; GAAP/FASB/SEC concepts implied but no explicit conceptual-framework items |
| 2. Financial Statements and Transaction Effects | ✅ | Income statement, net income distinguishing revenue/expense vs financing |
| 3. Recording Process (journals, ledgers, T-accounts, trial balance) | ✅ | "Journal Entries" — debit Equipment / credit Cash mechanics |
| 4. Accrual Accounting and Adjusting Entries | ✅ | "Revenue Recognition" + "Adjusting Entries" + "Unearned Revenue" + "Accrued Salaries" + "Accrual Revenue" — strong mechanics |
| 5. Merchandising, Inventory, COGS (FIFO/LIFO) | ✅ | "Gross Profit" + "FIFO Inventory" items |
| 6. Cash, Receivables, Internal Control (SOX) | ✅ partial | "Bank Reconciliation" only; no allowance-method or SOX items in first 16 |
| 7. Long-Term Assets, Liabilities, Financing | ✅ partial | "Depreciation" item only; no bonds/premium/discount items |
| 8. Statement Analysis and Decision Use (ratios, cash flow) | ⚠️ | Verify beyond first 16 items |

**Chapter taxonomy**: prefixed `"Financial Accounting:"` plus topic — direct mapping. No taxonomy mismatch.

## Per-file recommendations

| File | financialAccounting Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `financialAccounting: [...]` block (id 3111000+, lines 675+) | ~20–30 | **FIX** | **Prompts are pedagogically strong** — real accounting mechanics (accounting-equation impact of a cash equipment purchase, accrual revenue recognition with mixed timing, straight-line depreciation calculation, FIFO COGS, three-day accrued salaries on a Wed year-end). Numerical answers are correct; distractors are recognizable accounting mistakes ("$8,000" before adjustment, "$6,500" after partial adjustment). **But every distractor uses the file-wide `DEFAULT_FLAW` constant.** The conceptual work is done; only per-distractor explanations need writing. |
| (no `financialAccountingWorkoutGenerated.ts`) | 0 | **N/A** | No hand-authored alternative bank exists. The agent-generated block is the entire track. |

**Tone observation**: playful company names ("Luna Lemonade Igloo", "Pickle Parade Co.", "Robot Taco", "Snack Goblin Cafe", "Goblin Groomers", "Sir Prints-a-Lot the printer") consistent with the file-wide pattern. Defensible at university first/sophomore level; less professional than the workout files. For an accounting course that students often take as a credential prerequisite (CPA pipeline), tone could lean more sober.

**Net effect**: ~25–30 questions held back from quality bar by `DEFAULT_FLAW`. Conceptual quality and numerical correctness are real.

## Open actions (priority order)

1. **Rewrite per-distractor explanations** for all `financialAccounting` items. Distractors like "$8,000", "$6,500", "Debit Cash / Credit Equipment" each represent a specific accounting mistake — rewrite says what's wrong with each specifically.
2. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/university.ts:467`](../../../src/data/ageCatalog/university.ts). GAAP/SEC/FASB/Form 10-K/SOX are explicit US regime.
3. **Add `lastReviewed: <date>` metadata** to items touching regulation (SOX, FASB standards) — framework's "regulation-adjacent content should carry `lastReviewed`" guidance applies directly.
4. **Verify chapters 6–8 coverage**. Plan author work for allowance-for-doubtful-accounts (ch6), bonds + impairment (ch7), ratio analysis + indirect-method cash flow (ch8).
5. **Author 4–5 chapter-1 conceptual-framework items** — relevance vs faithful representation, materiality, going concern, FASB-vs-IFRS one-pointer.
6. **Tone calibration**: keep mnemonic company names ("Luna Lemonade Igloo") but cut "Goblin Groomers" / "Snack Goblin" register for CPA-prep professionalism.

## Estimated effort

- Per-distractor rewrite: ~6 hours (25 questions × ~15 min each)
- Region tag + lastReviewed + verification: ~1 hour
- Chapter 6–8 gap-closing: ~3 hours (10 × 20 min)
- Conceptual framework items: ~1.5 hours (5 × 20 min)

**~1.5 working days.** Same shape as `englishComposition101` / `introToSociology` — strong prompts blocked by shared DEFAULT_FLAW, plus targeted authoring.

## Notes for next auditor

`financialAccounting` is the **most clearly US-jurisdiction-locked track in the cluster.** Every conceptual anchor (GAAP, SEC, FASB, Form 10-K, SOX) is US; the syllabus does not mention IFRS, limiting international value. Region tagging is straightforward and overdue.

Numerical correctness is high — items teach real accounting mechanics (revenue timing, accrual adjustments, depreciation calculation, COGS under FIFO). The author built distractors around real student mistakes. DEFAULT_FLAW just blocks the explanation work.

`financialAccounting`, `englishComposition101`, `introToSociology` in `universityAgentGenerated.ts` all share the playful-naming-with-DEFAULT-FLAW pattern from the same author. A single rewriting pass on the file-wide DEFAULT_FLAW unlocks them all. No downstream `.filter()` derivations.
