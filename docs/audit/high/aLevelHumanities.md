# Audit: alevelEconomics / alevelHistory / alevelEnglish / alevelComputerScience

**Syllabus**: [`src/data/syllabi/high/a_level_humanities.md`](../../../src/data/syllabi/high/a_level_humanities.md)
**Track ids**: `alevelEconomics` (line 231), `alevelHistory` (242), `alevelEnglish` (253), `alevelComputerScience` (264) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **UK** (untagged — AQA/OCR/Edexcel routes; recommend `regions: ['UK']` on each)
**Status**: all four are `playable`; content does not warrant that flag.

## Coverage map (syllabus → questions)

| Syllabus chapter | alevelEcon | alevelHist | alevelEnglish | alevelCS | Notes |
|---|---|---|---|---|---|
| 1. Humanities Methods and Academic Argument | ⚠️ stub | ⚠️ stub | ⚠️ stub | – | Stub-level argument-structure items per track. |
| 2. Historical Sources, Context, Interpretation | – | ⚠️ stub | – | – | "Who created it, when, why" — useful prompt but single recall item. |
| 3. Breadth, Periodisation, Comparative History | – | ⚠️ stub | – | – | "Continuity-and-change" — definition recall only. |
| 4. Literary Form, Genre, Close Reading | – | – | ⚠️ stub | – | "Close reading = paying careful attention to language, structure, detail" — definition only. |
| 5. Comparative Literature and Context | – | – | ⚠️ stub | – | "Comparison essay structure" — generic. |
| 6. Religion, Ethics, Philosophical Reasoning | ❌ | ❌ | ❌ | – | None of the four tracks covers this. |
| 7. Politics, Economics, Public Ideas | ⚠️ stub | – | – | – | Economics items (elasticity, opportunity cost, inflation, equilibrium) hit Year 9–10 vocabulary, not A-Level evaluation. |
| 8. Independent Research and Exam Studio | ❌ | ❌ | ❌ | – | No bibliography/methodology/timed-writing items. |

The Computer Science track is unmoored from the humanities syllabus (it should arguably be wired to a CS syllabus instead). Its four questions ("algorithm = step-by-step method", "binary base 2", "variable stores value", "conditional makes decisions") are KS3.

**Effective coverage: ~5%, GCSE Foundation depth across all four tracks.** Top-up via `highGenerated.ts` `historyBlueprints()`/`englishBlueprints()`/`lifeEconomicsBlueprints()` is generic middle-school material.

## Per-file recommendations

| File | A-Level Hum/CS Q's | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (577–712) | 4 × 4 = 16 | **DELETE all 16** | **Under-targeting flagged.** "Inflation means a general rise in prices" / "binary is base 2" are GCSE definitions. No source-utility judgement, comparative essay argument, code tracing, or evaluative economic reasoning. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) blueprint topup | ~50 per track | **DELETE for these tracks** | Generic middle-school / early high-school depth. Mismatch under A-Level titles. |
| [`apEconomicsExamBatch.ts`](../../../src/data/questionCatalog/apEconomicsExamBatch.ts) | 0 wired | **MERGE → alevelEconomics (partial)** | Backstop Chapter 7 with re-tag; UK A-Level still needs evaluation paragraphs and policy-context items absent from AP. |
| [`apHistoryExamBatch.ts`](../../../src/data/questionCatalog/apHistoryExamBatch.ts) | 0 wired | **MERGE → alevelHistory (caution)** | AP is US/World; UK A-Level prefers Tudor/Stuart/Modern Britain/Cold War themes per board. Useful only for source-evaluation method items. |
| [`apEnglishExamBatch.ts`](../../../src/data/questionCatalog/apEnglishExamBatch.ts) | 0 wired | **MERGE → alevelEnglish (partial)** | AP-Lit close-reading overlaps Chapter 4. Comparative-context (Chapter 5) still needs UK-specific authoring. |
| [`apComputerScienceExamBatch.ts`](../../../src/data/questionCatalog/apComputerScienceExamBatch.ts) | 0 wired | **MERGE → alevelComputerScience** | Strong overlap — but the syllabus this CS track sits in is humanities. Either re-attach to a CS syllabus or carve out a dedicated A-Level CS spec. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 | **AUTHOR HERE** | Per `CONTENT_AUDIT.md`. Priority: source-utility items, comparative essay-plan critique, ethical-theory case judgements, code-tracing and Big-O reasoning. |

## Open actions (priority order)

1. **Delete all 16 stub questions** in `highAdvanced.ts`.
2. **Decouple `alevelComputerScience` from the humanities syllabus**.
3. **Lift AP-Econ, AP-Lit, AP-CS items** as an interim bridge with UK re-tagging.
4. **Author ~20 questions per track** in `highBuilders.ts`.
5. **Add `regions: ['UK']`** to all four track entries; **re-status to `soon`**.

## Estimated effort

- Stub deletion + blueprint exclusion: ~30 min
- CS syllabus decision + remap: ~2 hours
- AP-batch lift and re-tag: ~6 hours
- Hand-authored bank (~80 questions): ~26 hours

**~5 working days.**

## Notes for next auditor

A-Level Economics and A-Level Computer Science share this combined "humanities & computing" syllabus despite being structurally distinct disciplines. The syllabus header bundles `col-a-level-economics`, `col-a-level-history`, `col-a-level-english-literature`, `col-a-level-computer-science` together — a structural anomaly worth raising. Consider splitting into per-subject syllabi.
