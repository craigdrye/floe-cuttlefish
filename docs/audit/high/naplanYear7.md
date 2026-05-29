# Audit: naplanYear7

**Syllabus**: [`src/data/syllabi/high/naplan_year_7.md`](../../../src/data/syllabi/high/naplan_year_7.md)
**Track id**: `naplanYear7` (line 484) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high (placed here despite Year 7 sitting at the upper-primary/lower-secondary boundary)
**Region**: **AU** (untagged — ACARA NAPLAN; recommend `regions: ['AU']`)
**Status**: `soon` — accurate, no dedicated content present.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. NAPLAN Map, Mindset, Digital Strategy | ❌ | No online-format items, no flag/skip/check reasoning. |
| 2. Reading for Main Ideas and Evidence | ❌ | No NAPLAN-style passage + main-idea selection items. |
| 3. Reading Across Text Types | ❌ | No multimodal/visual text items. |
| 4. Writing Planning and Text Structure | ❌ | No prompt-unpacking or plan-evaluation items. |
| 5. Writing Craft, Voice, Revision | ❌ | No vocabulary precision or sentence-variety drills tagged to NAPLAN criteria. |
| 6. Language Conventions in Context | ❌ | No spelling-pattern or punctuation items at NAPLAN difficulty. |
| 7. Numeracy — Number, Algebra, Measurement | ❌ (generic only) | Generic `mathBlueprints()` topup includes ratio/linear items but not at Year 7 difficulty with NAPLAN wording. |
| 8. Numeracy — Data, Probability, Mixed Problem Solving | ❌ (generic only) | Some probability and data items in blueprint pool, but no two-way table / stem-and-leaf items in NAPLAN format. |

**Effective coverage: 0% of dedicated NAPLAN Year 7 content.** Track relies on `highGenerated.ts` blueprint topup that produces ~50 items; none use ACARA NAPLAN domain naming, digital-test interaction patterns, or the conventions/numeracy item formats NAPLAN actually uses.

## Per-file recommendations

| File | NAPLAN Y7 Q's | Bucket | Reason |
|---|---|---|---|
| No dedicated file exists | 0 | — | Not referenced in any `questionCatalog/*.ts` file. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) blueprint topup | ~50 | **DELETE for this track or rebuild as NAPLAN blueprints** | Generic blueprints cover roughly the right age range (Year 7 = ages 11–12) but lack the four-domain structure (reading, writing, conventions, numeracy) NAPLAN is built around. A Year 7 NAPLAN candidate gets only numeracy-flavoured items under this track. |
| [`grade7MathExamBatch.ts`](../../../src/data/questionCatalog/grade7MathExamBatch.ts) | 0 wired | **MERGE → naplanYear7 (numeracy partial)** | US Grade 7 math items overlap topically with NAPLAN numeracy; selective lift with AU re-tag would partially cover Chapters 7–8. |
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (STAAR Reading) | 0 wired to this track | **MERGE → naplanYear7 (reading partial)** | STAAR Grade 7 writing/reading items overlap with NAPLAN Chapter 2/4 structure. Re-tag for AU and screen for US-specific text references. |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts), [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) | 0 wired | **DO NOT MERGE** | Primary items sit below Year 7 NAPLAN difficulty in most cases. Better to author Year 7-specific items. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE (or new `naplanPrep.ts`)** | Strongest path: a dedicated NAPLAN file mirroring ACARA's four domains with item formats matching digital-test interactions. |

## Open actions (priority order)

1. **Add `regions: ['AU']`** to the track entry.
2. **Re-evaluate placement** — Year 7 (ages 11–12) likely sits under primary, not high.
3. **Stop generic blueprint topup** for this track.
4. **Author a shared `naplanPrep.ts` file** (with `naplanYear9`) split across the four NAPLAN domains. Target ~60 items for Y7.
5. **Lift grade7MathExamBatch and STAAR reading items** as interim bridge, screened for US references.
6. **Keep `status: 'soon'`** until dedicated content lands.

## Estimated effort

- Region tag + placement review: ~1 hour
- Dedicated NAPLAN authoring (60 Y7 items × four domains): ~25 hours
- US-batch lift, screening, re-tag: ~5 hours

**~4 working days for Y7 alone (or ~6 days bundled with Y9 if shared scaffolding).**

## Notes for next auditor

NAPLAN now runs as an online adaptive test via the ACARA platform — items routinely include flag/check/skip metacognitive interactions that no other track in the catalog covers. The writing domain in particular has its own marking rubric (10 criteria, scored 0–6 or 0–4) that practice items should explicitly teach to. Bundling Y7 and Y9 into a shared file is sensible because the domain structure is identical and only the difficulty band changes; pair this audit with `naplanYear9.md`.
