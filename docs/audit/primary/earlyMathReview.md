# Audit: earlyMathReview

**Syllabus**: [`src/data/syllabi/primary/early_math_review.md`](../../../src/data/syllabi/primary/early_math_review.md)
**Track id**: `col-early-math-review`
**Tier**: primary
**Region**: UK/Common Core K–2 blend. Not tagged. Untagged metric units.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Counting That Stays Matched | partial | "One less" + next-number patterns to 20; no one-to-one matching prompts |
| 2. Seeing Small Numbers Quickly | ❌ | **No subitising questions.** Five-frame / ten-frame / dot-card stimuli need images, blocked by the no-image constraint |
| 3. Number Order and the Number Track | ✅ | Next-in-sequence covers forward and back step-of-1 within 20 |
| 4. Addition as Joining | ✅ | Addition facts within 10 |
| 5. Subtraction as Taking Away | ✅ | Subtraction facts within 10 |
| 6. Number Bonds, Doubles, and Helpful Facts | partial | Doubling 1–6 present; no explicit "bond to 10" framing |
| 7. Shapes, Patterns, and Sorting | partial | Colour/shape repeat-pattern questions present; no sorting-rule questions |
| 8. Measures, Position, and Word Problems | partial | Position words via shape mix; no length comparison, no word problems |

This is the second-lowest coverage in the primary math cluster (after preschool-adjacent tracks). Five of eight chapters are absent or partial.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeEarlyMathReviewBank` | ~50 (capped) | **FIX** | Calibrated to the right difficulty — small numbers, simple language. Uses `textWrong` shared triples for pattern questions, which produces nonsense distractors (e.g. "small" being an option on a colour-pattern question). Each builder needs distractors tied to the actual pattern in play. |
| Same file, `colEarlyMathReview` export at baseId 1000000 | ~50 | **KEEP as alias** | Just a re-export at different id seed; no extra content. |
| Khan / CK-12 filtered into Class 1–6 collections | n/a here | n/a | This track does not receive Khan/CK-12 filter; it's pure generated content. Good — Khan content uses LaTeX (`$\\dfrac{...}{...}$`) which would render as raw text on the kids surface. |

## Key flaw to fix

The patterns chapter (Chapter 7) is a textbook case of template-generation failure:

```ts
['red, blue, red, blue, ?', 'red', ...],
['circle, square, circle, square, ?', 'circle', ...],
```

…all share the same `textWrong` triple `['blue', 'square', 'small']`. So the "circle, square, circle, square" question has "small" as a wrong answer — visually obvious nonsense to anyone reviewing manually. Six-year-olds will laugh. This is the **DEFAULT_FLAW equivalent for text-answer questions**: a shared distractor pool that drifts off-topic per question.

## Open actions (priority order)

1. **Fix the shared `textWrong` distractor pool** for the patterns builder. Generate distractors from the actual pattern: for `red, blue, red, blue, ?` the wrong answers should be `purple` (off-palette), `green` (off-palette), `red and blue` (misreads the question).
2. **Author 8 number-bond questions** ("What goes with 6 to make 10?") — closes Chapter 6.
3. **Author 6 comparison-and-measure word problems** ("Sam's tower is 8 cubes, Mia's is 5. How many more cubes does Sam have?") — closes Chapter 8.
4. **Flag subitising chapter as image-dependent** and either delete the chapter from the syllabus or commit to image stimulus on the kids surface.
5. **Tone check**: this is a confidence-rebuild course per the design notes ("emotional safety matters", "mistakes are information"). The generated prompts read flat ("What is 8 - 4?"). Compare to `primaryBuilders.ts` `setup / fieldNote / mentorHint` which model the calm-mentor voice the syllabus calls for. Even one-line setups would lift tone.

## Estimated effort

- Fix patterns distractor pool: ~45 min
- Author bonds + word problems: ~4 hours (14 questions × ~15 min, with mentor-voice scaffolding)
- Tone-pass on the existing 50: ~2 hours
- Region tag: ~10 min

**~1 working day**.

## Notes for next auditor

The shared-`textWrong`-pool failure mode also appears in `makeClass1MathBank` and `makeClass2MathBank` mixed-skill buckets. Single fix pattern, multiple courses.
