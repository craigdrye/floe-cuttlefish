# Audit: hscVceMaths

**Syllabus**: [`src/data/syllabi/high/hsc_vce_maths_aus.md`](../../../src/data/syllabi/high/hsc_vce_maths_aus.md)
**Track id**: `hscVceMaths` (line 473) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **AU** (untagged — NESA HSC and VCAA VCE; recommend `regions: ['AU']`)
**Status**: `soon` — correctly flagged, no dedicated content present.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Pathways, Algebra, Exam Habits | ❌ | No CAS/non-CAS distinction items, no mark-allocation reasoning, no exact-vs-decimal practice. |
| 2. Functions, Graphs, Transformations | ❌ (generic only) | Generic `mathBlueprints()` topup includes some function items but no piecewise/hybrid/inverse-with-restricted-domain content. |
| 3. Trigonometry and Periodic Models | ❌ | No tide/daylight/sound modelling. No compound-angle identity work. |
| 4. Differential Calculus | ❌ (generic only) | Generic "pancake puddle" related-rates exists but no curve-sketching with full stationary-point classification. |
| 5. Integral Calculus and Differential Equations | ❌ | No volumes of revolution, no logistic models, no separable DE in periodic-model context. |
| 6. Probability, Statistics, Data Interpretation | ❌ | No binomial/normal probability items at VCE Methods depth, no confidence-interval interpretation. |
| 7. Vectors, Complex Numbers, Proof Extensions | ❌ | No vector projection items, no Argand diagrams, no induction proofs. |
| 8. Mechanics and Final Exam Studio | ❌ | No SHM, no inclined-plane resolution at HSC Extension 2 / VCE Specialist depth. |

**Effective coverage: 0% dedicated.** Track receives only `highGenerated.ts` blueprint topup, which is generic mid-difficulty math content that does not distinguish NSW HSC Advanced/Extension 1/Extension 2 from VCE Methods/Specialist pathways.

## Per-file recommendations

| File | HSC/VCE Q's | Bucket | Reason |
|---|---|---|---|
| No dedicated file exists | 0 | — | Track is not referenced in any `questionCatalog/*.ts` file. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `mathBlueprints()` topup | ~50 | **FIX (rebuild as AU blueprints) or DELETE for this track** | Generic blueprints (sticker robot, drone gradient, pancake puddle) overlap topically with HSC Year 12 / VCE Methods but: (1) use neither HSC nor VCE wording, (2) make no pathway distinction, (3) ignore CAS-permitted vs CAS-prohibited norms, (4) do not flag exact-answer requirements that mark schemes enforce. Wrapped under "HSC / VCE Maths (Australia)" they overpromise. |
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts) | 0 wired | **MERGE → hscVceMaths (selective)** | Calculus items overlap with Chapter 4/5 and have stronger working-out structure than generic blueprints. Selective lift with pathway tagging would help. |
| [`trigonometryExamBatch.ts`](../../../src/data/questionCatalog/trigonometryExamBatch.ts), [`precalculusExamBatch.ts`](../../../src/data/questionCatalog/precalculusExamBatch.ts), [`statisticsExamBatch.ts`](../../../src/data/questionCatalog/statisticsExamBatch.ts) | 0 wired | **MERGE → hscVceMaths (selective)** | US-curriculum-flavoured but topically overlapping with Chapters 3, 6. Worth grading for direct lift vs partial rewrite. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE** | Highest priority: pathway-tagged items with HSC- and VCE-style wording, CAS-aware mark allocations, periodic modelling problems, induction proof items. |

## Open actions (priority order)

1. **Add `regions: ['AU']`** to the track entry. Syllabus is explicit (NESA / VCAA).
2. **Add pathway metadata** (e.g., a `subTrack` or `pathway` tag: 'hscAdvanced' | 'hscExtension1' | 'hscExtension2' | 'vceMethods' | 'vceSpecialist'). Without this, the track cannot honour the syllabus's own design.
3. **Stop generic blueprint topup** for this track until AU-specific blueprints are built.
4. **Selective lift from calculus/trig/stats exam batches** with AU re-tagging — interim bridge.
5. **Author 80–100 hand-authored items** across Chapters 1–8 in `highBuilders.ts`, distributed across pathways.
6. **Keep `status: 'soon'`** until pathway-aware content exists.

## Estimated effort

- Region tags + pathway-metadata field design: ~2 hours
- Pathway-aware blueprint authoring: ~6 hours
- Hand-authored bank (~100 questions): ~33 hours
- US-batch selective lift and re-tag: ~5 hours

**~6 working days.**

## Notes for next auditor

HSC and VCE are state-administered Year-12 systems with materially different exam papers, mark schemes, and assumed knowledge. Treating them as one bundled track is reasonable for routing but the question bank itself must distinguish them — an HSC Advanced student should not see VCE Specialist-only material (or vice versa) without a path tag. The current shape (one bundled track, generic blueprint topup) is the worst of both: too narrow to be useful for AU candidates, too AU-flavoured to be useful for non-AU users.
