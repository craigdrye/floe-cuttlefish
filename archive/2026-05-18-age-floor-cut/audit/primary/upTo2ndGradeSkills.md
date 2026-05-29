# Audit: upTo2ndGradeSkills

**Syllabus**: [`src/data/syllabi/primary/up_to_2nd_grade_col.md`](../../../src/data/syllabi/primary/up_to_2nd_grade_col.md)
**Track id**: `upTo2ndGradeSkills` (wired in `primary.ts` as `'col-up-to-2nd-grade-skills'` per syllabus header, but the actual catalog wiring uses the camelCase id only on the ageCatalog seed — **no question wiring exists in `primary.ts` for this track id**).
**Tier**: primary (preschool-adjacent; ageGroup `preschool`)
**Region**: US-leaning (Common Core early math + ELA; NAEYC reference). Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Counting, Place Value, and Number Patterns | ❌ | No track-specific bank exists |
| 2. Addition and Subtraction Stories | ❌ | Adjacent content lives in `earlyMathReview` and `class1Math` |
| 3. Shape, Time, Measurement, and Fractions | ❌ | Adjacent in `basicGeometry` and `class2Math` |
| 4. Reading Simple Sentences | ❌ | English-tier, not math; this audit notes the math chapters only |
| 5. Comprehension and Vocabulary | ❌ | English-tier |
| 6. Materials, Forces, Light, Sound, and Magnets | ❌ | Science-tier |
| 7. Community, Rules, Needs, and Wants | ❌ | Social-studies-tier |
| 8. Feelings, Friendship, and Problem Solving | ❌ | SEL-tier |

This course is a **Kids Discovery collection** (multi-disciplinary), not a pure math track. The math chapters (1–3) overlap heavily with `earlyMathReview` and `class1Math`. The syllabus explicitly says "mirrors preschool/up_to_2nd_grade_skills.md but uses the upper end of difficulty range".

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| (no dedicated math file) | 0 | **GAP** | The track has no question wiring in `primary.ts`'s catalog builder under any of `upTo2ndGradeSkills`, `col-up-to-2nd-grade-skills`, or `'up-to-2nd-grade'`. The track exists in the age catalog (`primaryCoreTracks`) with `status: 'playable'` but ships zero questions. **Status flag should be `soon`, not `playable`.** |
| Candidate source: `makeIndiaClass1MathQuiz` and `makeIndiaClass2MathQuiz` upper-difficulty subsets | n/a | **REFERENCE** | The natural math content for chapters 1–3 already exists in `colGapBuilders.ts`. Either alias-import a subset into a new `upTo2ndGradeSkills` wiring or write a thin builder that pulls hard-end items from both India quizzes. |
| Candidate source: `primaryGeneratedMath.ts` `makeEarlyMathReviewBank` | n/a | **REFERENCE** | The pattern, double, and shape questions in `makeEarlyMathReviewBank` map to syllabus chapters 1–3 once the patterns-pool flaw is fixed. |

## Open actions (priority order)

1. **Flag the track as `status: 'soon'`** until questions are wired. Currently misleadingly marked `playable` with an empty question array — players will hit a dead course.
2. **Wire math content** by aliasing or composing existing banks:
   - Chapter 1 → `class2Math` skip-counting + place-value questions
   - Chapter 2 → `earlyMathReview` add/subtract within 10 + `class1Math` within-20 stories
   - Chapter 3 → `basicGeometry` shape facts + `class2Math` fraction-of-quantity + `class2Math` clock questions
3. **Author 10–15 reading-and-comprehension questions** (chapters 4–5) — out of math-cluster scope but the track will look broken without them. Coordinate with English-tier audit.
4. **Author 10 science / community / SEL questions** for chapters 6–8 — coordinate with preschool/SEL audit.
5. **Region tag** — Common Core + NAEYC reference makes US-first explicit.

## Estimated effort (math content only — full course needs cross-tier work)

- Status flag fix: ~5 min
- Math wiring via alias / composition: ~1 hour
- Light authoring to lift difficulty for the "upper end" framing: ~2 hours
- Region tag: ~10 min

**~half-day for math chapters; full course coverage requires English, Science, and SEL collaborators.**

## Notes for next auditor

This track is the canonical example of a "playable but empty" Floe primary course. The audit framework flag "Track has `status: 'soon'` but the file has questions → promote to `playable`" has a mirror flaw worth tracking: "Track has `status: 'playable'` but no question wiring → demote to `soon` or fix wiring." Multiple primary collection tracks (`naplanYear3`, `naplanYear5`, `elevenPlus`, `pslePrep`) are correctly marked `soon`; this one should join them or get wired. Mobile-rendering and DEFAULT_FLAW checks are not applicable because there is no content to evaluate.
