# Audit: basicGeometry

**Syllabus**: [`src/data/syllabi/primary/basic_geometry_and_measurement.md`](../../../src/data/syllabi/primary/basic_geometry_and_measurement.md)
**Track id**: `basicGeometry` (also wired as `col-basic-geometry-and-measurement`)
**Tier**: primary
**Region**: UK/Common Core blend, metric units throughout. Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. 2D Shape Detectives | ✅ | Side and vertex counts, square vs rectangle property reasoning |
| 2. 3D Shapes in the Real World | ✅ | Cube faces, can-as-cylinder, sphere/cone/pyramid |
| 3. Position, Direction, and Turns | partial | Half-turn / compass-opposite present; no left/right/grid-route questions |
| 4. Symmetry and Pattern | ❌ | **No symmetry questions.** A core Year 2 strand and an obvious image-based opportunity is silently missing. |
| 5. Length, Height, and Perimeter Foundations | ✅ | Perimeter of squares + composite addition lengths |
| 6. Mass, Capacity, and Temperature | partial | Unit-choice for mass and capacity covered; **no temperature** |
| 7. Time, Money, and Measurement Contexts | partial | Clock half-past + quarter-past, elapsed-time worked example present; **no money** |
| 8. Practical Measuring Projects | ❌ | No multi-step "estimate then measure" questions; not really compatible with single-MCQ format |

## Per-file recommendations

| File | Geometry Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeBasicGeometryAndMeasurementBank` | ~50 (capped) | **FIX** | Strongest of the primary math generated banks: shape-fact distractors are hand-written and plausible (`rectangle` is a great wrong answer for "four equal sides"). Length and perimeter templates are sound. **But** the parametrised "A pencil is N cm long..." question reads like a contrived AI prompt — children would say "why is the pencil getting longer?". Rewrite as cleaner "A square garden has side 6 m — what is the perimeter?" |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `colBasicGeometryAndMeasurement` export | ~50 | **DELETE (or alias)** | Pure duplicate of `basicGeometry` bank with a different baseId. Alias the export. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) `basicGeometry` track | ~10–15 | **DELETE** | Same `XXXXXXX` placeholder distractor pattern as the arithmetic feed. Hard DEFAULT_FLAW. |

## Open actions (priority order)

1. **Author 8 symmetry questions** — the biggest content gap. "Which letter has a vertical line of symmetry: A, F, J, P?" works as plain text and salvages the no-images constraint.
2. **Author 6 money questions** ("Which coins make 47p? 20p+20p+5p+2p, 20p+10p+10p+5p+2p, …") — closes Chapter 7. Region-tag UK or US currency explicitly.
3. **Author 4 temperature questions** ("A fridge is 4°C and a freezer is -18°C. Which is colder?") — closes Chapter 6.
4. **Delete OpenTrivia geometry feed** — same `XXXXXXX` issue as arithmetic.
5. **Rewrite contrived templates**: the "pencil + another pencil's length" framing and "rectangle 'width' rows" wording are AI-generation artifacts. Replace with classroom-relevant contexts.
6. **Mobile-rendering flag**: shape questions are all verbal description ("a shape with 6 sides"). The May 2026 audit flagged absence of image-based questions for a mobile kids app as a real miss — this course is the most obvious place to add SVG shape stimulus. Currently survives on text only; weakens learning vs. competitors.
7. **Region tag**: the bank uses metric throughout. Tag UK and mark for US-unit twin (inches, feet, pounds) before US launch.

## Estimated effort

- Author symmetry / money / temperature: ~5 hours (18 questions × ~15 min)
- Delete OpenTrivia feed: ~10 min
- Rewrite contrived templates: ~90 min (touch ~10 builders)
- Region tag: ~10 min

**~1 working day**, with mobile-image work as a separate design epic.

## Notes for next auditor

The shape-property hand-written rows in `shapeFacts` (`makeBasicGeometryAndMeasurementBank`) are the best content in this file — they meet the `primaryBuilders.ts` bar for distractor specificity. Use as the template when rewriting the parametrised builders. The "Position, direction, and time" mixed bucket inherits the same fallback `textWrong` triple regardless of question — this masks the per-distractor weakness and should be split.
