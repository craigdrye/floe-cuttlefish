# Audit: timesTables

**Syllabus**: [`src/data/syllabi/primary/times_tables.md`](../../../src/data/syllabi/primary/times_tables.md)
**Track id**: `timesTables` (also `col-times-tables`)
**Tier**: primary
**Region**: UK/US blend; metric units in stories. Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Equal Groups Everywhere | partial | Implicit in product framing; no explicit "4 bags of 3" story questions in this bank (those live in `primaryBuilders.ts` `makeCol3rdGradeMathQuiz`) |
| 2. Arrays, Rows, and Columns | ❌ | **No array questions.** This is the single biggest gap — arrays are the visual backbone of Year 2 multiplication. Needs image stimulus or careful ASCII grids |
| 3. Skip-Counting on Number Lines | ❌ | No "What comes next: 5, 10, 15, ?" in this bank (covered in early math review and class1 instead) |
| 4. The 2 Times Table and Doubling | ✅ | 2× covered exhaustively |
| 5. The 5 Times Table | ✅ | 5× covered exhaustively |
| 6. The 10 Times Table and Place Value | ✅ | 10× covered; no place-value connection ("10 × 4 makes 4 tens"); just bare facts |
| 7. Building 3s and 4s from Known Facts | partial | 3× and 4× facts present; no derived-fact reasoning ("you know 2 × 6 = 12, so 4 × 6 must be 24") |
| 8. Retrieval, Division Links, and Calm Practice | ✅ | Missing-factor builder generates `2 × ? = 12` style questions |

## Per-file recommendations

| File | Times-tables Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeTimesTablesBank` | ~50 (capped from ~70 generated) | **FIX** | Bank generates `2/3/4/5/10` × `1–10` = 50 base facts + 20 missing-factor variants, capped at 50 total. Strong fact coverage but every distractor uses `numericWrong()` with the canned "comes from a nearby arithmetic or counting slip" string. For times tables this masks real misconceptions — `7 × 8` distractors should include `54` (off-by-2 from 56 — common pattern conflation), `49` (confusion with `7 × 7`), `64` (confusion with `8 × 8`). Rewrite distractor explanations per-fact. |
| Same file, `colTimesTables` export | ~50 | **DELETE (or alias)** | Identical bank rebound to `col-times-tables`. Alias. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) `timesTables` track | ~10 (estimated) | **DELETE** | Same `XXXXXXX` placeholder pattern. Flag for whole-file removal in cross-cluster work. |

## Open actions (priority order)

1. **Author 8 derived-fact questions** ("If 4 × 5 = 20, what is 4 × 6?"). Closes Chapter 7's "build from known" core idea — it's what the syllabus actually asks for and what generated bare-fact recall cannot capture.
2. **Author 6 array-comprehension questions in plain ASCII** ("An array has 4 rows of 3 dots. Which multiplication fact matches?"). Salvages Chapter 2 without images. Flag the visual-array gap to design for image-stimulus follow-up.
3. **Rewrite `numericWrong()` for multiplication** to name misconception by fact: pattern conflation (`7 × 8` → `56` but said `54`), table-confusion (`6 × 7 = 42` but answered `48` from `6 × 8`), additive slip (`6 × 7` → `13`).
4. **Delete OpenTrivia times-tables feed**.
5. **Tone check**: the syllabus explicitly calls for "anxiety-safe retrieval … low-pressure games". Bank delivers bare timed-feel questions ("What is 7 × 8?"). Compare `primaryBuilders.ts` for the warmer `setup / fieldNote / mentorHint` triple — adopt that even for fluency drills.
6. **Region tag**: bare-number multiplication is region-neutral but the "missing-factor" framing assumes UK convention `2 × ? = 12`. Worth a region note for ordering (`? × 2 = 12` is more common in US).

## Estimated effort

- Author derived facts + arrays: ~3.5 hours (14 questions × ~15 min)
- Rewrite distractor explanations across 50 facts: ~3 hours (one good template per times table, then mechanical fill)
- Delete OpenTrivia: ~5 min
- Tone-pass: ~90 min
- Region/status checks: ~10 min

**~1 working day**.

## Notes for next auditor

`makeTimesTablesBank` is the cleanest of the generated banks structurally — small, focused, covers `2/3/4/5/10` deliberately per syllabus. The fix is voice and distractor specificity, not architecture. Use it as the model when rationalising `makeArithmeticBank`.
