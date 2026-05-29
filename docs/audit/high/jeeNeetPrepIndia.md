# Audit: jeeMain / neetPrep

**Syllabus**: [`src/data/syllabi/high/jee_neet_prep_india.md`](../../../src/data/syllabi/high/jee_neet_prep_india.md)
**Track ids**: `jeeMain` (line 451), `neetPrep` (462) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **IN** (untagged — NTA / CBSE / NCERT; recommend `regions: ['IN']` on both)
**Status**: both `soon` — correctly flagged because there is no dedicated content.

## Coverage map (syllabus → questions)

| Syllabus chapter | jeeMain | neetPrep | Notes |
|---|---|---|---|
| 1. Exam System, NCERT Base, Study Architecture | ❌ | ❌ | No NTA-format items, no negative-marking strategy, no NCERT page-reference items. |
| 2. Mathematics for JEE Pathways | ❌ (generic only) | – | No JEE-style multi-step algebra, complex numbers, or numerical-value items. |
| 3. Physics Mechanics and Measurement | ❌ (generic only) | – | No projectile/rotation/collision items at JEE depth. |
| 4. Physics E&M, Waves, Optics, Modern Physics | ❌ (generic only) | – | No AC/EMI, no photoelectric, no wave-optics interference items. |
| 5. Physical / Inorganic Chemistry | ❌ (generic only) | – | No Nernst, no coordination-compound isomerism, no NCERT inorganic factual items. |
| 6. Organic Chemistry Strategy | ❌ (generic only) | – | No mechanism prediction, no acidity/basicity ranking. |
| 7. Biology for NEET | – | ❌ (generic only) | No NCERT diagram-based, assertion-reason, or genetics-pedigree items. |
| 8. Integrated Mocks and Exam Temperament | ❌ | ❌ | No timed mixed-subject sets, no skip/solve/revisit reasoning. |

**Effective coverage: 0% of dedicated JEE/NEET content.** Both tracks rely on `highGenerated.ts` blueprint topup. The math/science blueprints peak around early-college difficulty (related rates, basic factoring, NGSS biology recall) and do not approach JEE Main 90-question 3-hour format or NEET 200-question 3h20min format with negative marking.

## Per-file recommendations

| File | JEE/NEET Q's | Bucket | Reason |
|---|---|---|---|
| No dedicated file exists | 0 | — | Neither track is referenced in any `questionCatalog/*.ts` file. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `mathBlueprints()` / `scienceBlueprints()` topup | ~50 each | **DELETE for these tracks** | Generic content under "JEE Main Prep (India)" or "NEET Biology Prep (India)" is misleading — JEE/NEET-aspirants expect NCERT-aligned items with NTA-format options A/B/C/D and four-mark/minus-one scoring context. Generic topup does not deliver this. |
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts), [`apPhysicsExamBatch.ts`](../../../src/data/questionCatalog/apPhysicsExamBatch.ts), [`apChemistryExamBatch.ts`](../../../src/data/questionCatalog/apChemistryExamBatch.ts), [`apBiologyExamBatch.ts`](../../../src/data/questionCatalog/apBiologyExamBatch.ts) | 0 wired | **DO NOT MERGE** | AP banks sit at roughly the right depth but the curriculum mismatch is large — JEE Main demands rotational mechanics and AC circuit derivations beyond AP Physics 1/2; NEET demands NCERT-line-by-line recall (e.g., Pteridophyte families) that AP-Bio does not test. Lifting AP items would mislabel them. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE (or new dedicated file)** | Per `CONTENT_AUDIT.md`. JEE/NEET prep is content-heavy enough to warrant a dedicated file (`jeeNeetPrep.ts`) with NCERT chapter tagging. |

## Open actions (priority order)

1. **Add `regions: ['IN']`** to both track entries.
2. **Stop generic blueprint topup** — generic items under an India-exam label damage credibility.
3. **Author dedicated JEE/NEET banks** in a new `jeeNeetPrep.ts`. Target ~180 JEE Main + ~90 NEET items with NCERT class/chapter references, four-option format.
4. **Keep `status: 'soon'`** until dedicated content lands.
5. **Add assertion-reason / statement-based item format** — NEET-specific, not present in catalog.

## Estimated effort

- Region tags + blueprint exclusion: ~30 min
- Dedicated JEE bank (~180 items at 25 min each): ~75 hours
- Dedicated NEET biology bank (~90 items): ~38 hours
- Format scaffolding (assertion-reason builder, NCERT-tag metadata): ~4 hours

**~14 working days across both tracks. Largest authoring gap in the cluster.** Could be sequenced: NEET-biology first (single subject, NCERT-line recall is more tractable), then JEE physics, then chemistry, then math.

## Notes for next auditor

JEE/NEET prep is genuinely a different content shape from US AP or UK A-Level: tutorial-style problem solving in NTA's 90-minute-per-subject sectional format, mocked at scale, with NCERT memorisation as the spine. If Floe is committing to this market, a dedicated authoring workstream (potentially with an India-based content author) is justified — the lift from existing content is small. Consider also the optional `jeeAdvanced` track if `jeeMain` succeeds; that is a distinct, harder exam.
