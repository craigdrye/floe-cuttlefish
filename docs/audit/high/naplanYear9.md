# Audit: naplanYear9

**Syllabus**: [`src/data/syllabi/high/naplan_year_9.md`](../../../src/data/syllabi/high/naplan_year_9.md)
**Track id**: `naplanYear9` (line 495) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **AU** (untagged — ACARA NAPLAN; recommend `regions: ['AU']`)
**Status**: `soon` — accurate, no dedicated content present.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Final NAPLAN Readiness and Test Intelligence | ❌ | No test-triage, no error-log-driven practice items. |
| 2. Reading Inference, Tone, Authorial Purpose | ❌ | No NAPLAN-style inference items with distractor analysis. |
| 3. Reading Complex and Multimodal Texts | ❌ | No satire/irony/multi-source synthesis items. |
| 4. Writing Arguments With Control | ❌ | No timed-persuasive prompt-evaluation items. |
| 5. Narrative Craft and Writing Precision | ❌ | No narrative-rewriting items aimed at pacing/sentence rhythm. |
| 6. Language Conventions for Mature Editing | ❌ | No complex-spelling / clause-level grammar items at Y9 difficulty. |
| 7. Numeracy — Algebra, Number, Measurement, Geometry | ❌ (generic only) | Generic `mathBlueprints()` topup has simultaneous-equation and Pythagoras items at roughly Y9 difficulty but without NAPLAN wording. |
| 8. Numeracy — Statistics, Probability, Mixed Reasoning | ❌ (generic only) | Some probability items in blueprint pool; no scatter-plot / line-of-best-fit / two-way-table items in NAPLAN format. |

**Effective coverage: 0% of dedicated NAPLAN Year 9 content.** Track relies on `highGenerated.ts` blueprint topup (~50 items) that touches Y9 difficulty in numeracy but ignores the three literacy domains entirely.

## Per-file recommendations

| File | NAPLAN Y9 Q's | Bucket | Reason |
|---|---|---|---|
| No dedicated file exists | 0 | — | Not referenced in any `questionCatalog/*.ts` file. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) blueprint topup | ~50 | **DELETE for this track or rebuild as NAPLAN blueprints** | Numeracy-only coverage means the literacy half of the assessment is invisible to a candidate using this track. Mismatch under the "NAPLAN Prep" label. |
| [`grade9MathExamBatch.ts`](../../../src/data/questionCatalog/grade9MathExamBatch.ts) | 0 wired | **MERGE → naplanYear9 (numeracy partial)** | US Grade 9 math overlaps topically with NAPLAN Y9 numeracy (algebra, Pythagoras, simultaneous equations). Selective lift with AU re-tag. |
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (STAAR English I/II) | 0 wired to this track | **MERGE → naplanYear9 (literacy partial)** | STAAR Grade 8/9 English I items overlap with NAPLAN Chapter 2/4/6 — revision, transition, controlling-idea items. Already strong per-distractor explanations. Re-tag for AU after screening. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE (or shared `naplanPrep.ts`)** | Year 9 is the final NAPLAN year; high-stakes for many AU schools' senior pathways. Worth the same authoring depth as gcseMaths. |

## Open actions (priority order)

1. **Add `regions: ['AU']`** to the track entry.
2. **Stop generic blueprint topup** for this track.
3. **Author a dedicated `naplanPrep.ts` file** shared with `naplanYear7`, with year-band tagging. Target ~70 items for Y9 (slightly higher than Y7 due to higher stakes and broader content).
4. **Lift grade9MathExamBatch and STAAR English I/II items** as interim numeracy/literacy coverage, screened for US-specific cultural references.
5. **Add a NAPLAN-writing marking-rubric explainer** — the writing genre rotates (persuasive / narrative) and the 10-criteria rubric is unique to NAPLAN; no existing file teaches to it.
6. **Keep `status: 'soon'`** until dedicated content lands.

## Estimated effort

- Region tag: ~5 min
- Dedicated NAPLAN authoring (70 Y9 items × four domains, shared scaffolding with Y7): ~28 hours
- US-batch lift, screening, re-tag: ~5 hours
- Writing-rubric explainer items (~15 items): ~5 hours

**~5 working days for Y9 alone.** Bundled with Y7 above, ~6 days total (shared scaffolding reduces duplication).

## Notes for next auditor

Year 9 NAPLAN is materially harder than Year 7 — scatter plots, line of best fit, simultaneous equations, Pythagoras-in-context — and the writing genre rotates between persuasive and narrative across years, so a practice bank must include both. Australian Curriculum English Year 9 sits at "evaluate, interpret, analyse" depth; practice items must reach that, not just literal-comprehension. STAAR English I items (already in `schoolAssessmentReadingSocialImported.ts`) are the closest existing analogue and worth more careful evaluation than the numeracy lift.
