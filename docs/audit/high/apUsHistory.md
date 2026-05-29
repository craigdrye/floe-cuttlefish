# Audit: apUsHistory

**Syllabus**: [`src/data/syllabi/high/ap_us_history.md`](../../../src/data/syllabi/high/ap_us_history.md)
**Track id**: `apHistory` (catalog also exposes `col-ap-u-s-history` separately)
**Tier**: high
**Region**: US (College Board exam; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Historical Thinking and AP Writing | yes (rubric) | Overcovered — most of `apHistoryExamBatch` lives here (sourcing, CCOT, comparison, periodization, contextualization). |
| 2. Period 1, 1491-1607 (Columbian Exchange, Indigenous) | minimal | Columbian Exchange Q in WorkoutGenerated; no Indigenous societies. |
| 3. Period 2, 1607-1754 (regional colonies, slavery) | yes | "Colonial Regions" + "Mercantilism" Q's; STAAR-sourced "Distance and self-government", "Tobacco settlement". |
| 4. Period 3, 1754-1800 (Revolution, Constitution) | yes | Revolution causes, Articles, Constitution, Federalism — all definitional, no documents. |
| 5. Periods 4-5, 1800-1877 (Market Revolution, Civil War, Reconstruction) | yes | Market Revolution, Second Great Awakening, Sectionalism, Reconstruction — solid one-liners. |
| 6. Periods 6-7, 1865-1945 (industrial, Progressive, New Deal, WWII) | partial | Gilded Age, Progressivism, New Deal — no immigration, labor, imperialism MCQs. |
| 7. Periods 8-9, 1945-Present (Cold War, civil rights, modern conservatism) | partial | Cold War / Civil Rights / Great Society at headline level; no post-1980 conservatism. |
| 8. Exam Studio (DBQ, LEQ, SAQ, complexity) | yes (rubric) | Heavily overcovered — outside evidence, LEQ planning, counterargument, document skills. |

**May 2026 rubric-not-content finding strongly applies.** `apHistoryExamBatch.ts` is **100% AP rubric**: 10 questions, every one asking "what should a CCOT essay do", "what does corroboration mean", "what is good periodization". Zero stimulus, zero document, zero historical date or actor in any prompt.

**Chapter taxonomy mismatch.** Generated files use ad-hoc chapters ("Sourcing", "Continuity and Change", "U.S. History", "World History", "Document Skills", "Exam Skills"). Syllabus uses nine periods + writing studio. Worse: the file commingles U.S. *and* World History rows under the same `apHistory` track although the syllabus is APUSH only — World rows belong to `apWorldHistory`.

## Per-file recommendations

| File | APUSH Q's | Bucket | Reason |
|---|---|---|---|
| [`apHistoryExamBatch.ts`](../../../src/data/questionCatalog/apHistoryExamBatch.ts) | 10 | **DELETE** | 100% rubric drill. Duplicates Chapter 1/8 coverage already in WorkoutGenerated. No content value. |
| [`apHistoryWorkoutGenerated.ts`](../../../src/data/questionCatalog/apHistoryWorkoutGenerated.ts) | 50 (~26 US, ~20 World, ~4 skills) | **FIX → SPLIT** | Mixed US + World History under one track. The US rows are solid one-liner content (mercantilism, Market Revolution, Reconstruction). The World rows duplicate `worldHistoryModernExamBatch` / `worldHistoryOriginsExamBatch` and belong to a different track. Split into apHistory (US only) and route World rows to AP World. Re-chapter to nine-period syllabus spine. |
| [`apHistory` block in `highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (lines 319-365) | 4 inline + many openTrivia | **FIX** | Inline 4 are rubric (DBQ structure, causation, primary source, contextualization) — DELETE (already in WorkoutGenerated). Open trivia imports (`openTriviaUsHistoryAnchor`, `…Extension`, `…WwiiColdWar`, `…WorldHistoryAnchor`, `…Foundations`) deliver high-recall named-fact content useful for "recallable evidence" practice — but every wrong answer uses the stripped fixed string "This answer belongs to a different event, office, war, or historical period." That is the **DEFAULT_FLAW pattern**, auto-FIX target. |
| [`schoolAssessmentUsHistoryQuestions`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (lines 165-241) | 5 | **KEEP** | Hand-curated STAAR-grade content with per-distractor whys. Chapter labels (Colonial America, American Revolution, Early Republic) are syllabus-aligned by period. Model for Chapters 2-4. |
| `openTriviaUsHistoryAnchorImported.ts` (977 lines, 97 stripped distractors) | ~120 | **FIX or DELETE** | High coverage of presidents and milestones (JFK quote, Jefferson quote, Lincoln). Every distractor uses the fixed-string flaw. Either rewrite per-distractor whys or DELETE — at minimum trim to ~40 anchor facts. |
| `openTriviaUsHistoryExtensionImported.ts` (457 lines) | ~50 | **FIX** | Same stripped-distractor pattern; less anchor-quality content. |

**Net effect**: ~180 mixed-quality APUSH questions → ~80 content-bearing US-only questions + ~10 stimulus DBQ items added. Far smaller, far better.

## Open actions (priority order)

1. **Delete `apHistoryExamBatch.ts`**. Keep zero items.
2. **Split `apHistoryWorkoutGenerated.ts`**: route World History rows to `apWorldHistory` / `col-ap-world-history`; keep US rows here, re-chapter to nine periods.
3. **Author 10-15 stimulus DBQ-style MCQs**: short excerpt from a Federalist paper, Lincoln speech, FDR fireside chat, etc. Model: [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts).
4. **Rewrite per-distractor explanations** on the openTriviaUsHistory* files (auto-FIX: DEFAULT_FLAW pattern via fixed string).
5. **Add `region: 'US'`** to `apHistory` and `col-ap-u-s-history` tracks.
6. **Dedupe `apHistory` vs `col-ap-u-s-history`**: both `playable`, similar coverage. Pick canonical id.

## Estimated effort

- Stimulus DBQ MCQ authoring: ~5 hours.
- Split WorkoutGenerated US/World: ~2 hours.
- openTrivia distractor rewrite: ~6 hours (or DELETE for ~1 hour).
- Delete + dedupe + re-chapter: ~2 hours.

**~2 working days.**

## Notes for next auditor

The 4 AP humanities `*ExamBatch.ts` files (`apHistoryExamBatch`, `apEnglishExamBatch`, `apHumanGeographyExamBatch`, `apPsychologyExamBatch`) share a code template — same length, same `q`/`miss` factories, same 10-question size. The history and English ones are pure rubric; the geography and psychology ones include real content. The "ExamBatch" naming is misleading and worth a cluster-level cleanup.
