# Audit: cfaLevelOne

**Syllabus**: [`src/data/syllabi/career/cfa_level_one.md`](../../../src/data/syllabi/career/cfa_level_one.md)
**Track id**: `cfaLevelOne`
**Tier**: career
**Region**: US (CFA Institute is global, but the curriculum maps cleanly to US GAAP/SEC examples; not currently tagged)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Ethics and Professional Standards | ✅ | Strong coverage across `cfaSurvivalQuestions`, Finance / Finance2 / Finance3, FrontDoorPolish, FinalPolish |
| 2. Quantitative Methods | ✅ | TVM, geometric vs arithmetic return, base rates, correlation/causation |
| 3. Economics | ✅ | Currency direction, rate hike transmission |
| 4. Financial Statement Analysis | ✅ | FIFO/LIFO, capitalize vs expense, IFRS write-down reversal, working capital |
| 5. Corporate Issuers | ✅ | NPV vs payback, governance |
| 6. Equity Investments | ✅ | DDM vs FCF fit, P/E sanity, dual-class voting, P/B for banks |
| 7. Fixed Income | ✅ | Duration drivers, callable bonds, inverted curve, yield spreads |
| 8. Derivatives | ✅ | Put payoff, forward at initiation, futures mark-to-market |
| 9. Alternative Investments | ⚠️ partial | One NAV/appraisal-smoothing question; no fee-waterfall, hedge-fund-structure, or private-credit coverage |
| 10. Portfolio Management | ✅ | Diversification limits, factor exposure, IPS liquidity constraint |
| 11. Integrated Practice / Exam Strategy | ⚠️ partial | "Except question" trap and formula-scale trap exist, but no full pacing/mocks taxonomy |

**Chapter taxonomy mismatch.** The syllabus uses topic names like "Ethics, Standards, and Professional Reflexes" and "Quantitative Methods and the Analyst Calculator". Question files use a different scheme: `cfaSurvivalQuestions` uses bare topic labels ("Ethics", "Quant", "Financial Reporting"), while the Finance triplet uses prefixed names ("CFA Level I: Ethics", "CFA Level I: Quantitative Methods"), and FinalPolish drops the level marker entirely ("CFA: Ethics and Standards"). Three competing schemes for one course.

## Per-file recommendations

| File | CFA Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) (`cfaSurvivalQuestions`) | ~16 | **KEEP** | Hand-authored, per-distractor explanations, clean exam-grade tone. Canonical CFA bank. |
| [`careerAgentGeneratedQualificationsFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance.ts) | 18 | **FIX** | Strong question design (annuity timing, soft-dollar, FIFO, callable bonds) but every distractor uses file-wide `DEFAULT_FLAW` constant → auto-FIX. Realign chapter names to syllabus and rewrite per-distractor explanations. |
| [`careerAgentGeneratedQualificationsFinance2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance2.ts) | ~20 | **MERGE → Finance + DELETE rest** | Genuinely novel scenarios (gift disclosure, geometric return, callable bond ceiling, FCF vs DDM). ~12 worth salvaging; rest duplicates Finance. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedQualificationsFinance3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance3.ts) | ~12 | **MERGE → Finance (partial), DELETE rest** | Heavy concept overlap with Finance/Finance2 (referral fees, base rates, capitalize/expense again). Salvage IFRS write-down reversal, inverted yield curve, P/B for banks (~5). `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedQualificationsFinalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinalPolish.ts) (CFA section) | 4 | **DELETE** | FIFO-vs-LIFO, diversification, duration, soft-dollar — all duplicated above with better depth. Different `DEFAULT_FLAW` string adds maintenance cost for no content win. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (CFA section) | 4 | **DELETE** | Front-door taster duplicates MNPI, working-capital, factor diversification, exam discipline already covered. `DEFAULT_FLAW` again. |

**Net effect:** 74 CFA questions across 6 files → ~16 hand-authored + ~35 fixed/merged in 1 canonical file = ~50 questions of much higher quality.

## Open actions (priority order)

1. **Add `lastReviewed: '2026-05'` metadata** to the track and to every CFA-tagged question. Regulation- and curriculum-adjacent content needs review dates; the 2026 Level I curriculum is the current target.
2. **Add `region: 'US'`** (or `'global'` if the team wants to make CFA Institute's worldwide reach explicit) to the track entry in `career.ts`.
3. **Consolidate the Finance triplet** into one file with per-distractor explanations and syllabus-aligned chapter names. Use `cfaSurvivalQuestions` as the voice template.
4. **Author 6–10 Alternative Investments questions** to close the partial gap (fee waterfall, hurdle/catch-up, lockups, appraisal vs market vol, private credit structure).
5. **Author 3–5 exam-strategy/pacing questions** matching Chapter 11 (90-second-per-question pacing, mark-and-return discipline, qualifier-circling) so the syllabus's "Integrated Practice" chapter has more than two questions.
6. **Delete the CFA sections of FinalPolish and FrontDoorPolish** and audit whether the rest of those files justify keeping them (likely covered by other audits).

## Estimated effort

- Per-distractor rewrite + consolidation: ~8 hours (50 questions × ~10 min average)
- Alternative Investments + exam-strategy authoring: ~3 hours (~10 questions)
- Chapter-name realignment + DELETE pass: ~45 min
- `lastReviewed` metadata schema change: ~1 hour (shared with all credentials)

**~1.5 working days for this course at this depth.**

## Notes for next auditor

The Qualifications Finance triplet (`Finance` + `Finance2` + `Finance3`) plus FinalPolish + FrontDoorPolish + AppliedPolish + TechnicalPolish + LegacyFinanceOpsTopOff use the same agent-generation pattern across `cfaLevelOne`, `cpaExam`, `series86`, `series8687`, and credentials tracks. The `DEFAULT_FLAW` constant pattern, base + TopOff + FinalTopOff + Polish triplet structure, and chapter-taxonomy drift all recur cluster-wide. Worth a single coordinated remediation rather than course-by-course rewrites.
