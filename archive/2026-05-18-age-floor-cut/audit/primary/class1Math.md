# Audit: class1Math

**Syllabus**: [`src/data/syllabi/primary/class_1_math.md`](../../../src/data/syllabi/primary/class_1_math.md)
**Track id**: `class1Math` (wired also as `col-class-1-math`)
**Tier**: primary
**Region**: **Indian-curriculum-flavoured** (NCERT Class 1 + UK KS1 + Common Core Grade 1 + ACARA). Syllabus explicitly multi-framework. Currently untagged. The `col-class-N-math` framing and `makeIndiaClass1MathQuiz` builder name make Indian as the primary stylistic reference.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Counting, Matching, and Number Talk | ✅ | `makeIndiaClass1MathQuiz` dot-count questions, "find the middle number" |
| 2. Numbers to 100 and Place Value | ✅ | "How many tens in N", "one more / one less" |
| 3. Addition as Joining | ✅ | Both banks ship within-20 facts; India bank uses concrete shells/strawberries stories |
| 4. Subtraction as Taking Away and Comparing | ✅ | Within-20 subtraction; comparison via "which is larger" |
| 5. Shape, Position, and Drawing | partial | Triangle/square/circle side counts; **no 3D shape questions and no position language** ("above/below") in this bank — position lives in earlyMathReview shapes mix |
| 6. Measurement Through Comparing | ✅ | "Use the clue word" (longer/shorter/heavier/lighter/taller) |
| 7. Time, Money, and Everyday Maths | partial | `3:30 = half past 3` and 5p/cents in mixed-skill; **no money totals, no daily-routine sequencing** |
| 8. Word Problems, Games, and Checking | partial | India bank's shells + strawberries are essentially word problems; no two-step, no "check" prompts |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) `makeIndiaClass1MathQuiz` | ~45 | **FIX** | Best Class-1 bank: real classroom contexts ("shells on a rock", "strawberries eaten"), broad chapter coverage, plausible-numeric distractors. But distractor explanations all use the shared `numericWrong()` line "That comes from using the wrong operation or skipping one step in the setup" — soft DEFAULT_FLAW. Rewrite per fact, then promote to KEEP. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeClass1MathBank` (exported as `class1Math`) | ~50 | **MERGE → IndiaClass1** | Overlapping coverage — both ship "one more / one less" and within-20 add/sub. The mixed-skill `textWrong` pool (`['12', 'circle', '2:30']`) gets applied to every text question regardless of topic — a clock question gets `circle` as a wrong answer. Salvage the place-value (tens-and-ones) and half-of-N questions, drop the rest. |
| Khan / CK-12 filter (`['counting', 'add within 10', 'subtract within 10', 'shapes', 'small numbers']`) | varies | **FIX** | LaTeX rendering blocker as elsewhere; the Khan filter on `shapes` may pull in middle-school polygon work that's far above level. Strict-cap the filter and strip LaTeX. |

## Open actions (priority order)

1. **Fix shared `textWrong` mixed-skill pool** in `makeClass1MathBank` — the most visible flaw on this track. Same fix template as Grade 4, Grade 5, earlyMathReview.
2. **Author 8 position-language questions** ("The cat is _ the box. Choose: above, below, beside, between") — closes Chapter 5 position strand without needing images.
3. **Author 6 simple money-total questions** in rupees or paise (India region tag) **and** a UK-coin twin in pence. Closes Chapter 7. The current 5-cents framing assumes US.
4. **Add region tag to track**: `region: 'IN'` or `region: 'multi'`. The syllabus explicitly enumerates four frameworks; until tagged, the catalog stays culturally ambiguous.
5. **Tone-pass the generated bank** — `makeIndiaClass1MathQuiz` already uses warm story framing; `makeClass1MathBank` is colder ("What is one more than 12?"). Borrow the India bank's voice for the merged result.
6. **Mobile rendering**: confirmed all fractions in this bank render plain ASCII (`"1/2"`), no images, no LaTeX leakage from local content. Khan/CK-12 filter is the only LaTeX risk.

## Estimated effort

- Distractor pool fix: ~30 min
- Author position + money questions: ~3.5 hours (14 questions × ~15 min)
- Per-fact distractor rewrite on India bank: ~2 hours
- Region tag + Khan filter cap: ~30 min

**~1 working day**.

## Notes for next auditor

This is the first course where **regional divergence becomes a real issue**: `class_N_math` framing is Indian-curriculum primary (NCERT Class N), while `Nth_grade_maths_collections` is US-Common-Core-first. The two run parallel through Class/Grade 6. Pick: keep both tagged by region, or collapse with a region selector. The current dual-track setup is the least-bad option pre-launch but creates double maintenance.
