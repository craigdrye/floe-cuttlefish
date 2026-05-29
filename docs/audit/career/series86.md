# Audit: series86

**Syllabus**: [`src/data/syllabi/career/series_86_exam_prep.md`](../../../src/data/syllabi/career/series_86_exam_prep.md)
**Track id**: `series86`
**Tier**: career
**Region**: US (FINRA Series 86 — explicitly US-only; not currently tagged)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Exam Scope and Research Analyst Workflow | ⚠️ partial | One question-triage drill (Credentials1); nothing on Series 86 vs 87 split or SIE relationship |
| 2. Financial Statements and Accounting Linkages | ✅ | EPS units, gross margin, depreciation add-back, working capital, cash-flow proxy, margin bridge |
| 3. Ratios, Margins, Quality of Earnings | ✅ | Receivables warning, one-time revenue beat, channel-fill caution, adjusted-EBITDA add-backs |
| 4. Forecasting and Earnings Drivers | ✅ | Revenue build (volume/price), forecast horizon, share-repurchase math, EPS bridge |
| 5. Valuation Methods | ✅ | Forward P/E, PEG, EV bridge, EV/EBITDA, DCF denominator (WACC), terminal-value sanity, dilution test, multiple-vs-DCF judgment |
| 6. Economics, Markets, Industry | ⚠️ partial | Cyclical-healthcare and equipment-growth (`series86Imported`) cover it; otherwise thin |
| 7. Research Logic and Investment Conclusions | ✅ | Variant perception, mosaic boundary, rating-before-thesis, sector-metric fit |
| 8. Exam Practice, Error Review, Internal Floe Resources | ✅ | Error-log discipline, question triage, REIT valuation, sum-of-the-parts, EPS units (imported review material) |

**Chapter taxonomy mismatch.** Three competing schemes:
- Base in `career.ts` (`series86` block) uses bespoke locations ("Equity Research Dock", "Valuation Reef", "Research Swamp", "Forecast Lagoon")
- `series86Imported.ts` (STC manual) keeps the same bespoke labels ("Valuation Reef", "Cash Flow Dock", "Industry Analysis", "Research Swamp")
- `careerAgentGeneratedCredentials1.ts` and `careerAgentGeneratedLegacyFinanceOpsTopOff.ts` use prefixed labels ("Series 86: EPS", "Series 86: Valuation Multiples", "Series 86: Working Capital")
- `careerAgentGeneratedInterviewReasoningPolish.ts` uses yet another scheme ("Series 86: Analyst Math", "Series 86: Valuation Multiples")

## Per-file recommendations

| File | S86 Q's | Bucket | Reason |
|---|---|---|---|
| [`series86Imported.ts`](../../../src/data/questionCatalog/series86Imported.ts) | ~12 | **KEEP** | Hand-imported from STC Series 86 Final Exam Review with conservative answer-key promotion (per syllabus note). Per-distractor explanations are tight, source attribution is preserved, content is exam-realistic. Canonical practice bank. |
| [`career.ts`](../../../src/data/questionCatalog/career.ts) base `series86` block | 4 | **KEEP (rename chapters)** | Hand-authored mini-bank inside the assembler with per-distractor explanations (EPS, P/E, channel checks, revenue build). Solid; needs chapter realignment. |
| [`careerAgentGeneratedCredentials1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials1.ts) (`series86` section) | ~20 | **FIX** | Strong analytical content (EPS bridge, EV bridge, PEG, working-capital cash flow, terminal-value sanity, variant perception, error-log discipline). All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Becomes canonical agent-generated bank after rewrite. |
| [`careerAgentGeneratedLegacyFinanceOpsTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedLegacyFinanceOpsTopOff.ts) (`series86` section) | ~17 | **MERGE → Credentials1 + DELETE rest** | Adds share-repurchase math, capex-depreciation linkage, tax-rate normalization, segment-analysis multiples (~6 worth saving). Heavy overlap with Credentials1 on margin assumptions, sensitivity, rating-thesis match. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedInterviewReasoningPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedInterviewReasoningPolish.ts) (`series86` section) | 4 | **DELETE** | EPS bridge, valuation-multiple mismatch, channel-check caution, rating-before-thesis — all duplicated above. Different `DEFAULT_FLAW` string. |

**Net effect:** ~57 Series 86 questions across 5 files → ~16 hand-authored kept + ~25 fixed/merged in 1 canonical bank = ~41 questions of much higher quality.

## Open actions (priority order)

1. **Add `lastReviewed: '2026-05'` metadata** — Series 86 is FINRA-regulated and the content outline was revised in 2023. Without review dates, regulation drift goes undetected.
2. **Add `region: 'US'`** to the track entry in `career.ts`.
3. **Resolve overlap with `series8687` track.** The two tracks share most of the same analytical content and many near-duplicate questions cross both banks. Recommend either (a) collapse into one track using the broader `series8687` label, or (b) keep both and explicitly route Series 87 (rules / disclosures / supervision) content to `series8687` and pure-analytical content to `series86`.
4. **Author 4–6 Chapter 1 questions** (Series 86 vs 87 split, SIE co-requisite, exam mechanics, study-tracker design).
5. **Consolidate Credentials1 + LegacyFinanceOpsTopOff `series86` sections** into one bank with per-distractor explanations and chapter names matching the syllabus's eight chapters.
6. **Add `lastReviewed` to `series86Imported.ts`** at the file level so the STC import date is captured.

## Estimated effort

- Per-distractor rewrite + consolidation: ~5 hours (~25 questions × ~12 min)
- Chapter 1 authoring: ~2 hours (~6 questions)
- Cross-track dedupe with `series8687`: ~2 hours
- Chapter-name realignment + DELETE pass: ~30 min

**~1.5 working days at this depth.**

## Notes for next auditor

`series86Imported.ts` is the cleanest content in the whole cluster — manual import from a real Series 86 prep manual with full per-distractor explanations and source attribution. Use it as the voice template for any new authoring on this or `series8687`. The syllabus explicitly flags this file as a curated import to preserve; do not let the dedupe pass disturb its question IDs (used as anchors in user error logs once the app launches).
