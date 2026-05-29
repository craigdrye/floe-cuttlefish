# Audit: barExam

**Syllabus**: [`src/data/syllabi/career/bar_exam.md`](../../../src/data/syllabi/career/bar_exam.md)
**Track id**: `barExam`
**Tier**: career
**Region**: **US** (UBE / NextGen UBE / MBE / MEE / MPT) — **not currently tagged in `career.ts`**. Auto-FIX for region tagging.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Bar Exam Operating System | ✅ | Hits via "Essay Triage", "MBE Reading", "Exam Day Judgment" buckets |
| 2. MBE Core I — Civ Pro, Con Law, Evidence | ✅ | Strong: 6–8 items per subject across the LawProjectHr trio |
| 3. MBE Core II — Contracts, Torts, Crim, Property | ✅ | Well covered; some Property and Crim Pro thinner |
| 4. Essay Subjects / MEE Rule Muscles | ⚠️ | Touches Wills, Family, Sec Trans, Business Assocs once each; not enough for an MEE-grade bank |
| 5. MPT — Lawyering in 90-Minute Box | ✅ | 4–5 items on File/Library, task memo, client letter |
| 6. Memorization / Retrieval / Attack Outlines | ⚠️ | Implicit only ("rule application", "wrong-answer log"); no dedicated coverage |
| 7. MBE Strategy and Distractor Surgery | ✅ | Strong: "exception spotlight", "too broad", "answer choice traps" |
| 8. Simulation / Final Review / Exam-Day Execution | ✅ | Time-mgmt, hard-question triage, answer-review items |

**Chapter taxonomy mismatch.** Three competing schemes:
- `careerPhilosophyQualificationQuestions.ts` uses doctrinal labels: "Contracts", "Torts", "Civil Procedure", "Evidence", "MPT", "MEE Strategy", "Exam Transition"
- `careerAgentGeneratedQualificationsLawProjectHr{,2,3}.ts` uses "Bar Exam: <Subject>" prefix style: "Bar Exam: MBE Reading", "Bar Exam: Essay Triage"
- `careerAgentGeneratedQualificationFrontDoorPolish.ts` uses "Bar: <Subject>": "Bar: Civil Procedure", "Bar: Evidence"

The syllabus uses chapter numbers + descriptive names ("MBE Core I — Civ Pro, Con Law, Evidence"). None of the question files match. Realign to syllabus chapters.

## Per-file recommendations

| File | barExam Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) (`barExamQuestions`) | 12 | **KEEP** | Hand-authored with real per-distractor explanations and sober tone. Best content in the track. Promote to canonical bank. |
| [`careerAgentGeneratedQualificationsLawProjectHr.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr.ts) | 18 | **FIX** | Decent prompts (call-of-question, hearsay purpose, recording acts) but every wrong answer uses file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations and align chapters. Some distractors verge on cartoonish ("Whether the buyer likes the neighbors", "magic words"). |
| [`careerAgentGeneratedQualificationsLawProjectHr2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr2.ts) | 17 | **MERGE → LawProjectHr (FIX)** | Adds MEE subjects (Business Assocs, Wills/Trusts, Family, Sec Trans) — genuinely fills Chapter 4 gap. Lift those into the canonical bank, dedupe Civ Pro/Evidence overlap with base. |
| [`careerAgentGeneratedQualificationsLawProjectHr3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr3.ts) | 12 | **MERGE → LawProjectHr / DELETE rest** | Substantial overlap with base ("Essays: Element shopping list" mirrors base "Tiny facts, big issue"; "MBE Reading" repeated). Salvage ~4 distinct items (attempt, prior restraint, proceeds puzzle, settlement comm). Cut the rest. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (barExam section) | 4 | **DELETE** | Re-covers "loud fact, quiet element" (already in base), "Wrong court comfort" (already covered), "Useful but excluded" (hearsay redundant), "IRAC discipline" (already in hand-authored). Different `DEFAULT_FLAW` than the LawProjectHr family — adds maintenance overhead for zero net content. |

**Net effect**: 63 barExam questions across 5 files → ~25 questions in 2 canonical sources (hand-authored core + FIXed LawProjectHr base). Plus ~8 net-new MEE-subject items lifted from Hr2. Total: ~33 questions, higher quality.

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 467. Bar Exam is wholly US-specific (UBE, NCBE, MBE/MEE/MPT). This is also a UX issue: international learners landing on it deserve clarity.
2. **Consolidate the LawProjectHr triplet** for barExam into one file with per-distractor explanations and syllabus-aligned chapter names. Use the hand-authored core as voice template.
3. **Author 6–10 Chapter 6 (memorization / attack outline) questions** to close the dedicated coverage gap.
4. **Delete the barExam section of `QualificationFrontDoorPolish`** (audit the other tracks in that file as a separate exercise).
5. **Add a "Last reviewed: 2026-MM" metadata** to questions touching the July 2026 MEE subject changes — these are date-sensitive (Conflicts, Family, Trusts, Sec Trans drop from MEE).

## Estimated effort

- Region tag: ~5 min
- Consolidation + per-distractor rewrite: ~7 hours (47 Q → 25)
- Chapter 6 authoring: ~3 hours (8 questions × 20 min)
- Delete + chapter rename: ~30 min

**~1.5 working days at this depth.**

## Notes for next auditor

The LawProjectHr triplet (base + 2 + 3) also feeds `pmpWrangler` and `shrmPeople` with the same triplet/DEFAULT_FLAW pattern — those audits will repeat much of this analysis. The hand-authored `careerPhilosophyQualificationQuestions.ts` similarly has cpaExam and cfaLevelOne sections in the same high-quality style, worth modeling future authoring on.
