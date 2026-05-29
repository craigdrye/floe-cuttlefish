# Audit: cpaExam

**Syllabus**: [`src/data/syllabi/career/cpa_exam.md`](../../../src/data/syllabi/career/cpa_exam.md)
**Track id**: `cpaExam`
**Tier**: career
**Region**: US (AICPA Uniform CPA Exam — explicitly US-only; not currently tagged)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Exam Architecture and Study OS | ⚠️ partial | One "simulation triage" question (Finance.ts). No questions on Core+Discipline model, testlet structure, score weighting, blueprint reading, rolling credit window |
| 2. FAR Core | ✅ | Subsequent events, capital vs expense, leases, revenue recognition (performance obligations), inventory lower-of-cost, current ratio, ratio interpretation |
| 3. AUD Core | ✅ | External confirmation, completeness vs occurrence direction, sample-exception evaluation, scope-limitation reports, screenshot evidence reliability |
| 4. REG Core | ✅ | Business-vs-personal allocation, property basis sorting, preparer pressure ethics, agency/apparent authority, side-letter revenue effect |
| 5. Discipline Choice Studio (BAR/ISC/TCP) | ⚠️ partial | One variance-analysis question stands in for BAR; nothing for ISC, nothing for TCP, no decision-memo content |
| 6. Simulations, Research, Workpaper Craft | ⚠️ partial | One simulation-triage question; no TBS-anatomy or authoritative-research content |
| 7. Exam Strategy and Candidate Stamina | ❌ | No pacing, section-order, retake-recovery, or burnout questions |

**Chapter taxonomy mismatch.** `cpaExamQuestions` uses bare topic labels ("Audit", "FAR", "REG", "AUD/ISC Controls", "Exam Structure"). Finance / Finance2 / Finance3 use prefixed names ("CPA Exam: Audit Evidence", "CPA Exam: FAR"). FinalPolish drops the "Exam" qualifier ("CPA: Audit Evidence", "CPA: Internal Controls"). Three competing schemes. None match the syllabus's "Core + Discipline" language.

## Per-file recommendations

| File | CPA Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) (`cpaExamQuestions`) | ~14 | **KEEP** | Hand-authored, per-distractor explanations, sober exam tone. Canonical CPA bank. Includes the only Discipline-choice question. |
| [`careerAgentGeneratedQualificationsFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance.ts) | 18 | **FIX** | Strong scenario design (external confirmations, subsequent events, business-vs-personal, IT access removal). All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Realign chapter names. |
| [`careerAgentGeneratedQualificationsFinance2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance2.ts) | ~14 | **MERGE → Finance + DELETE rest** | Adds genuinely novel content (lease classification, revenue performance obligations, depreciation method effects). Overlap with Finance on capital-vs-expense. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedQualificationsFinance3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinance3.ts) | ~10 | **MERGE → Finance (partial)** | Salvage variance investigation and side-letter; rest duplicates concepts already in Finance/Finance2. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedQualificationsFinalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsFinalPolish.ts) (CPA section) | 4 | **DELETE** | Screenshot evidence, side-letter, segregation-of-duties (third time), aggressive deduction — all duplicated above. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (CPA section) | 4 | **DELETE** | "One person, too much power" is the **third** segregation-of-duties question across the cluster. Other three are restatements of audit-evidence and revenue-recognition concepts already covered. |

**Net effect:** ~64 CPA questions across 6 files → ~14 hand-authored + ~30 fixed/merged in 1 canonical file = ~44 questions of higher quality with no triple-duplicates.

## Open actions (priority order)

1. **Add `lastReviewed: '2026-05'` metadata** — the 2026 AICPA blueprint took effect 1 Jan 2026 with FAR fair-value scope changes, REG/TCP tax-law assumptions, ISC reference updates, and BAR fair-value tasks. Without review dates, questions silently drift past blueprint refreshes.
2. **Add `region: 'US'`** to the track entry in `career.ts`. CPA is US-only; the absence of regional tagging is silently misleading for non-US users.
3. **Author 8–10 Discipline-Studio questions** (BAR, ISC, TCP) — currently the syllabus's whole Chapter 5 is represented by one variance question. Each Discipline deserves at least 3 questions (entry-level practitioner vocabulary, classic blueprint task, decision-fit reasoning).
4. **Author 4–6 Exam Strategy / pacing questions** to cover Chapter 7 (section-order logic, FAR-before-BAR pairing, MCQ/TBS pacing split, retake protocol).
5. **Consolidate the Finance triplet** into one file with per-distractor explanations and chapter names matching the syllabus's Core + Discipline taxonomy.
6. **Detect cross-file duplicate concepts** before merge — segregation-of-duties appears in at least four files, each as the same "one person creates vendors, approves invoices, releases payments" stem with different distractors. Pick the strongest version, delete the rest.

## Estimated effort

- Per-distractor rewrite + consolidation: ~7 hours (~40 questions × ~10 min average)
- Discipline-Studio + Exam Strategy authoring: ~4 hours (~14 questions)
- Chapter-name realignment + DELETE pass: ~45 min
- `lastReviewed` schema work shared with `cfaLevelOne` and Series tracks

**~1.5 working days for this course at this depth.**

## Notes for next auditor

CPA is the most duplicated track in the cluster — the segregation-of-duties stem appears verbatim (or near-verbatim) in Finance, Finance2, FinalPolish, and FrontDoorPolish. Same for revenue-recognition / performance-obligation framing and capital-vs-expense. The DEFAULT_FLAW pattern combined with thin variation produces a "more questions, same content" outcome that needs aggressive deduplication. Worth running a cross-file dedupe pass at the prompt-stem level for the whole credentials cluster.
