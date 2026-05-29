# Audit: eurekaMathPrecalculus

**Syllabus**: [`src/data/syllabi/university/eureka_math_precalculus.md`](../../../src/data/syllabi/university/eureka_math_precalculus.md)
**Track id**: `eurekaMathPrecalculus`
**Tier**: university
**Region**: US (Eureka Math is a US K-12 curriculum from Great Minds). Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Functions, Transformations, Models | partial | Function eval, composition domain present (in precalcExamBatch & highBuilders precalc) |
| 2. Polynomial and Rational Functions | yes | End behavior, vertical asymptote, horizontal asymptote (limit case) covered |
| 3. Exponential, Logarithmic, Logistic | partial | Log product rule covered; logistic/half-life thin |
| 4. Trigonometry on the Unit Circle | yes | Radians, Pythagorean identity, exact unit-circle values |
| 5. Periodic Functions and Harmonic Models | partial | Trig graph parameters (amplitude/period/phase/midline) covered in agent-generated |
| 6. Complex Numbers and Complex Plane | yes | i-multiplication-as-rotation, modulus/argument multiplication, De Moivre intuition (agent-generated) |
| 7. Vectors, Matrices, Linear Transformations | yes | Vector magnitude, dot product (zero → perpendicular), matrix-as-transformation, 3D determinant (agent-generated) |
| 8. Parametric, Polar, Conic, Limit Ideas | partial | Conic ellipse form, polar conversion in agent-generated; limit-introduction items present |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `eurekaMathPrecalculus` block (lines 859–949) | ~30 | **FIX** | Strong, distinctive prompts — "tiny crab complex rotation", "spinning math pancakes", "donut with ambition" — that genuinely test concept rotation/multiplication/limits. **But uses the file-wide `DEFAULT_FLAW` constant** ("This is a plausible distractor, but it does not match the scenario or syllabus concept.") for every wrong answer. **DEFAULT_FLAW FLAGGED.** Same problem as the careerAgentGeneratedRoadmapFinance pattern. Rewrite per-distractor explanations, keep the voice. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColPrecalculusQuiz` | ~24 | **KEEP** | Scaffolded setup/prompt/fieldNote/mentorHint format, hand-authored per-distractor reasons ("That adds the components without using the magnitude formula", "That is the squared magnitude, not the magnitude"). Unit-aligned chapters. Canonical voice for precalculus. |
| [`precalculusExamBatch.ts`](../../../src/data/questionCatalog/precalculusExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor reasons, sober tone. Covers radians, Pythagorean identity, composition domain, vectors, conics, log laws, polynomial end behaviour, geometric sum, binomial expansion. |
| `numbasWebworkAdditionalTrigonometryQuestions` + Third trig (in `numbasWebworkMathAdditionalImported.ts` etc.) | unknown | **KEEP** subject to spot-check | Sampled algebra and trig batches: per-distractor explanations + sourceUrl preserved. Same quality bar as the calculus bundle. |

Wired at `universityCollege.ts:59` and `universityAgentGenerated.ts:859`. No content is wired exclusively here that's not also visible to neighbouring tracks (precalc batch is precalc-only; trig batches load to the precalc route).

## Cross-cluster flags

- **`DEFAULT_FLAW` IN `universityAgentGenerated.ts`** (line 5: `DEFAULT_FLAW = 'This is a plausible distractor, but it does not match the scenario or syllabus concept.'`). Affects all 30+ Eureka questions and the rest of that file's track payloads. **Highest-priority finding for this track.**
- **Tone mismatch**: the agent-generated Eureka block uses playful titles ("Caffeinated squirrel sine", "Volume goblin determinant") that fit primary/brain-burner voice. Per `CONTENT_AUDIT.md` quality bar, "sober for MCAT/AP/credentials". Precalc isn't AP-credential, but it's a serious university prep course — the playfulness undercuts authority. Worth a tone-pass decision.
- **Math notation**: ASCII (`5pi/6`, `<3, -2i>`, `sin(5pi/6) = 1/2`). Renderer-safe.
- **Region**: Eureka Math is US-only (Great Minds curriculum). Tag `region: 'US'`.

## Open actions (priority order)

1. **Rewrite the 30+ Eureka questions in `universityAgentGenerated.ts`** with per-distractor explanations — the voice is good, the distractors are good, only the "why wrong" line is the file-wide `DEFAULT_FLAW`. ~5 hours.
2. **Tone decision**: keep playful voice (commit to primary/brain-burner register) or sober up (commit to precalc-prep register). Don't leave it mid-pivot.
3. **Author chapter 3 expansion**: logistic-growth, carrying capacity, half-life parameter estimation (~4 items).
4. **Add `region: 'US'` tag** in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).
5. **Coordinate with `collegeAlgebra`** — precalc chapter 1–3 overlap with college algebra chapter 4–7. Spot-check for duplicate items.

## Estimated effort

- Distractor rewrite (30 items): ~5 hours
- Tone pass (whichever direction): ~3 hours
- Chapter 3 authoring: ~2 hours
- Region tag + dedupe pass: ~1 hour

**~1.5 working days.**

## Notes for next auditor

`universityAgentGenerated.ts` feeds many tracks via `universityAgentGeneratedQuestionsByTrack` (mcat, eurekaMathPrecalculus, more). The shared `DEFAULT_FLAW` is a cross-track problem — a single sweep across the file beats per-track fixes.
