# Audit: series8687

**Syllabus**: [`src/data/syllabi/career/series_86_87.md`](../../../src/data/syllabi/career/series_86_87.md)
**Track id**: `series8687`
**Tier**: career
**Region**: US (FINRA registration exams — explicitly US-only; not currently tagged)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Research Analyst Role and Exam Map | ❌ | No questions on Series 86 vs 87 split, SIE relationship, or exam-map study tracker |
| 2. Financial Statements and Business Drivers | ✅ | Accounting Reef (working-capital warning), receivables-vs-sales quality |
| 3. Forecasting, Modeling, and Sensitivity | ✅ | Estimate revisions, channel-fill caution, heroic margin staircase, sensitivity analysis |
| 4. Equity Valuation Toolkit | ✅ | Forward P/E, EV/EBITDA bridge, sum-of-the-parts, DCF sensitivity, target-price bridge, valuation sanity check |
| 5. Industry, Market, Economic Context | ⚠️ partial | One governance-risk question; no macro/cyclicality/regulation content tagged to this track |
| 6. Research Report Discipline | ✅ | Rating-thesis alignment, risk section purpose, assumption-typo consistency, recommendation ratings |
| 7. Analyst Ethics, Conflicts, Disclosures | ✅ | Banker pressure, gift from issuer, personal holding, selective dissemination, MNPI selective whisper, issuer-paid travel |
| 8. Supervision, Communications, Exam Execution | ⚠️ partial | "Publish button temptation" covers compliance-review sequencing; no supervisory-approval-workflow or recordkeeping content |

**Chapter taxonomy mismatch.** The base bank in `career.ts` (`series8687`) uses bespoke chapter labels ("Research Desk", "Coverage Notes", "Compliance Memo", "Research Judgment", "Valuation Lagoon"). The TopOff and AppliedPolish files use prefixed labels ("Series 86/87: Valuation", "Series 86/87: MNPI", "Series 86/87: Disclosures"). Neither scheme matches the syllabus's eight named chapters.

## Per-file recommendations

| File | S86/87 Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) base `series8687` block | 8 | **KEEP (rename chapters)** | Hand-authored within the assembler, per-distractor explanations, exam-grade tone (rerate logic, MNPI boundary, dual-method valuation judgment). Solid foundation; needs chapter rename to syllabus taxonomy. |
| [`careerAgentGeneratedCredentials1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials1.ts) (`series8687` section) | ~16 | **FIX** | Strong content (price-target bridge, conflict transparency, EV/EBITDA, SOTP, earnings bridge, terminal-value sanity). All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Rewrite per-distractor; this becomes the canonical bank. |
| [`careerAgentGeneratedCredentialsSeriesTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsSeriesTopOff.ts) | 12 | **MERGE → Credentials1 + DELETE rest** | Salvage MNPI-from-supplier, issuer-paid travel, governance smoke signal, earnings normalization (~6–8 questions). Rest duplicates conflict / banker-pressure already covered. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedCredentialsTechnical2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsTechnical2.ts) (`series8687` section) | ~12 | **MERGE → Credentials1 (partial)** | Worth checking — file is dominated by patent-bar / API-inspector / appraiser content; the series8687 segment likely re-treads valuation and disclosure. Salvage anything novel; otherwise DELETE. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedQualificationsAppliedPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsAppliedPolish.ts) (`series8687` section) | 4 | **DELETE** | Banker pressure, target-price bridge, personal holding, channel-check anecdote — all duplicated above with deeper treatment. Different `DEFAULT_FLAW` string. |

**Net effect:** ~52 S86/87 questions across 5 files → ~8 hand-authored kept + ~25 fixed/merged into 1 canonical file = ~33 questions of much higher quality.

## Open actions (priority order)

1. **Add `lastReviewed: '2026-05'` metadata** — this is FINRA-regulated content and the Series 86/87 outline was last revised in 2023 (per the syllabus's research note). Without review dates, regulation drift is invisible.
2. **Add `region: 'US'`** to the track entry in `career.ts`. Series 86/87 are FINRA-only.
3. **Author 4–6 Chapter 1 questions** (Series 86 vs 87 scope, SIE co-requisite, what each exam tests, study-map design) — currently the whole chapter has zero questions.
4. **Author 4–6 Chapter 8 questions** (supervisory approval workflow, recordkeeping, public-appearance rules, communications with sales/trading) — currently the chapter has one question.
5. **Consolidate the Credentials1 + SeriesTopOff + Technical2 series8687 sections** into one canonical bank with per-distractor explanations and chapter names matching the syllabus.
6. **Verify naming overlap with `series86` track** — content cross-pollinates between the two tracks (see `series86.md` audit). Decide whether one track absorbs the other or whether the split is meaningful enough to keep.

## Estimated effort

- Per-distractor rewrite + consolidation: ~6 hours (~30 questions × ~12 min)
- Chapters 1 and 8 authoring: ~4 hours (~12 questions)
- Chapter-name realignment + DELETE pass: ~30 min

**~1.5 working days at this depth.**

## Notes for next auditor

This track and `series86` (Series 86 Exam Prep) overlap substantially in syllabus content and question scope. The split is intentional in the syllabus design — `series86` focuses on the analytical side only, `series8687` keeps both Series 86 and Series 87 together — but the question banks do not respect that split. Most Credentials1 `series8687` questions could equally answer to `series86`. Decide the product policy first (one track or two), then dedupe.
