# Government Exam Recovery Audit

## Headline

The current raw data has one narrow recoverable subset: STAAR Alternate 2 teacher-guide rows where the prompt text names the answer choices and `answer_key_excerpt` matches one parsed choice. All standard STAAR, NYSED, MCAS, LEAP, and Florida sources are blocked for safe fixed-choice import from current rows.

Safe recoverable now means the current row contains a usable prompt, parseable choices, and an answer that matches one parsed choice without source PDF/image review.

## Source Summary

| Source | JSON files | Raw rows | Safe recoverable now | Structured choice rows | Rows with answer signal | Rows with A-D choice markers | Folders inspected |
|---|---:|---:|---:|---:|---:|---:|---|
| Florida | 0 | 0 | 0 | 0 | 0 | 0 | not present |
| LEAP | 0 | 0 | 0 | 0 | 0 | 0 | not present |
| MCAS | 0 | 0 | 0 | 0 | 0 | 0 | not present |
| NYSED | 20 | 3885 | 0 | 0 | 1660 | 0 | nysed_ela_2015, nysed_ela_2016, nysed_ela_2017, nysed_ela_2018, nysed_ela_2019, nysed_ela_2021, nysed_ela_2022, nysed_ela_2023, nysed_ela_2024, nysed_ela_2025, nysed_math_2017, nysed_math_2018, nysed_math_2019, nysed_math_2021, nysed_math_2022, nysed_math_2023, nysed_math_2024, nysed_math_2025, nysed_science_2024, nysed_science_2025 |
| STAAR | 8 | 5659 | 0 | 0 | 4913 | 0 | staar_2018, staar_2019, staar_2021, staar_2022, staar_2023, staar_2023_redesign, staar_2024_rationales, staar_2025_rationales |
| STAAR Alternate 2 | 2 | 715 | 6 | 0 | 715 | 0 | staar_alt2_2023, staar_alt2_2025 |

## Source-By-Source Status

- `Florida`: absent; safe now `0` of `0`. Blocker: No matching raw collection folder was found in data/raw_collections. Next: Add/download raw source PDFs or generated JSON before auditing recoverability.
- `LEAP`: absent; safe now `0` of `0`. Blocker: No matching raw collection folder was found in data/raw_collections. Next: Add/download raw source PDFs or generated JSON before auditing recoverability.
- `MCAS`: absent; safe now `0` of `0`. Blocker: No matching raw collection folder was found in data/raw_collections. Next: Add/download raw source PDFs or generated JSON before auditing recoverability.
- `nysed_ela_2015`: blocked; safe now `0` of `233`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2016`: blocked; safe now `0` of `204`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2017`: blocked; safe now `0` of `251`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2018`: blocked; safe now `0` of `186`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2019`: blocked; safe now `0` of `211`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2021`: blocked; safe now `0` of `164`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2022`: blocked; safe now `0` of `191`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2023`: blocked; safe now `0` of `239`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2024`: blocked; safe now `0` of `237`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_ela_2025`: blocked; safe now `0` of `224`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Separate passages from item blocks and extract option lists before joining answer keys.
- `nysed_math_2017`: blocked; safe now `0` of `284`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2018`: blocked; safe now `0` of `185`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2019`: blocked; safe now `0` of `192`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2021`: blocked; safe now `0` of `143`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2022`: blocked; safe now `0` of `204`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2023`: blocked; safe now `0` of `197`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2024`: blocked; safe now `0` of `170`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_math_2025`: blocked; safe now `0` of `178`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_science_2024`: blocked; safe now `0` of `98`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `nysed_science_2025`: blocked; safe now `0` of `94`. Blocker: Rows mostly contain item-map/passages/metadata; choices are not structured or present with the keyed answer. Next: Parse question pages separately from item maps, then join item-map correct letters by grade/item number.
- `staar_2018`: blocked; safe now `0` of `502`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2019`: blocked; safe now `0` of `488`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2021`: blocked; safe now `0` of `529`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2022`: blocked; safe now `0` of `952`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2023`: blocked; safe now `0` of `427`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2023_redesign`: blocked; safe now `0` of `1069`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Use layout-aware PDF extraction to keep each item stem and answer options together, then join answer-key PDFs by item number.
- `staar_2024_rationales`: blocked; safe now `0` of `438`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Join rationale/key PDFs to released-test item blocks by exam and item number after page-aware extraction.
- `staar_2025_rationales`: blocked; safe now `0` of `1254`. Blocker: Rows are PDF fragments, rationales, or answer-key excerpts; stems, choices, and keys are not reliably aligned. Next: Join rationale/key PDFs to released-test item blocks by exam and item number after page-aware extraction.
- `staar_alt2_2023`: partial-safe-subset; safe now `1` of `355`. Blocker: Only rows with parseable teacher-script choices and matching answer text are safe; remaining rows depend on stimulus images or incomplete choice narration. Next: Add a teacher-guide parser that extracts stimulus choice labels/images into structured choices and flags items requiring visual stimuli.
- `staar_alt2_2025`: partial-safe-subset; safe now `5` of `360`. Blocker: Only rows with parseable teacher-script choices and matching answer text are safe; remaining rows depend on stimulus images or incomplete choice narration. Next: Add a teacher-guide parser that extracts stimulus choice labels/images into structured choices and flags items requiring visual stimuli.

## Examples

### NYSED
- Recoverable examples: none found.
Blocked examples:
- `nysed-ela-2015::grade-3::0` q0: answer ``; prompt `Point* The features of a 0-point response are • A response that does not address any of the requirements of the prompt or is totally inaccurate • A response that is not written in English • A response that is unintelligible or indecipherable • If the prompt requires two texts and the student only references one text, the response can be scored no higher than`
- `nysed-ela-2015::grade-3::1` q1: answer ``; prompt `Essays at this level: 0* Essays at this level: CONTENT AND ANALYSIS: the extent to which the essay conveys ideas and information clearly and accurately in order to support analysis of topics or text W.2, R.1–9 —clearly introduce a topic in a manner that follows logically from the task and purpose —demonstrate comprehension and analysis of the text —clearly i`
- `nysed-ela-2015::grade-3::2` q2: answer ``; prompt `Essays at this level:`
### STAAR
- Recoverable examples: none found.
Blocked examples:
- `staar-2018::algebra-i::0` q0: answer ``; prompt `≤ x≤ 8 B 80 ≤ y≤ 440 C 0 ≤ x≤ 10 D 45 ≤ y≤ 685`
- `staar-2018::algebra-i::1` q1: answer `1 3 Readiness A.2(C) C`; prompt `−7 −6 −5 −4 −3 −2 −1−1 1 2 3 4 5 6 7 −2 −3 −4 −5 −6 −7 x`
- `staar-2018::algebra-i::2` q2: answer `2 1 Supporting A.10(D) G`; prompt `gx( ) = x 48 The graph of . Which of thesewas transformed to create the graph of describes the transformation from the graph of g to the graph of h? F A reflection over the x-axis and a horizontal stretch G A reflection over the y-axis and a horizontal stretch H A reflection over the x-axis and a vertical stretch J A reflection over the y-axis and a vertical`
### STAAR Alternate 2
Recoverable examples:
- `staar-alt2-2023::grade-4-math-teacher-test::2` q2: answer `square in Stimulus 2b`; parsed choices=['Quadrilateral', 'Square']; prompt `Present Stimulus 2a and 2b. Direct the student to Stimulus 2a. Communicate: This square has four sides and four corners. All Direct the student to each answer choice in Stimulus 2b. Communicate: Quadrilateral. Square. Communicate: Find the shape where all the sides are the same length.`
- `staar-alt2-2025::grade-3-mathematics-teacher-guide::3` q3: answer `pentagon`; parsed choices=['Triangle', 'Pentagon', 'Rectangle']; prompt `Present Stimulus 3. Communicate: Nico drew a shape with five sides. Direct the student to each answer choice in Stimulus 3 without communicating the number of sides. Communicate: Triangle. Pentagon. Rectangle. Communicate: Find the shape Nico drew.`
- `staar-alt2-2025::grade-3-mathematics-teacher-guide::6` q6: answer `four eggs in Stimulus 6b`; parsed choices=['Five eggs', 'Four eggs']; prompt `Present Stimulus 6a and 6b. Direct the student to Stimulus 6a. Communicate: Here are six birds and two nests, with no birds Direct the student to each answer choice in Stimulus 6b. Communicate: Five eggs. Four eggs. Communicate: Find the set with an even number of eggs in each nest and no eggs left over.`
Blocked examples:
- `staar-alt2-2023::grade-3-math-teacher-test::1` q1: answer `spinner`; prompt `Present Stimulus 1. Direct the student to Stimulus 1. Communicate: A spinner in the shape of a circle is used to play a Communicate: Find the spinner with two sections.`
- `staar-alt2-2023::grade-3-math-teacher-test::2` q2: answer `game spinner with three sections in Stimulus 2b`; prompt `Present Stimulus 2a and 2b. Direct the student to Stimulus 2a. Communicate: This game spinner has three sections. One. Two. Direct the student to each answer choice in Stimulus 2b. Communicate: Here are two other game Communicate: Find the game spinner that has three sections.`
- `staar-alt2-2023::grade-3-math-teacher-test::3` q3: answer `“4 sections” in Stimulus 3b`; prompt `Present Stimulus 3a and 3b. Direct the student to Stimulus 3a. Communicate: This game spinner is divided into sections that Direct the student to each answer choice in Stimulus 3b. Communicate the information in each answer Communicate: Find how many sections are on the spinner.`

## Cross-Source Blockers

- No inspected standard STAAR or NYSED row has a structured `choices` array.
- NYSED math/science rows often preserve correct-answer/item-map metadata but not the actual stem and options.
- NYSED ELA rows often preserve passages or prose fragments without aligned answer choices and keys.
- Standard STAAR rows are split across released-test fragments, rationale fragments, and answer-key fragments, so stems/options/keys are not reliably aligned.
- STAAR Alternate 2 rows can sometimes be converted now, but many depend on stimulus images or partial teacher-guide wording and should remain blocked until choices are extracted structurally.
- MCAS, LEAP, and Florida cannot be audited in this workspace because no matching raw collection folders are present.

## Next Extractor Improvements

- STAAR released/redesign: use layout-aware PDF extraction to keep item stems and options together, then join answer keys by exam and item number.
- STAAR rationales: join rationale/key PDFs to extracted item blocks; do not treat rationale text alone as a playable question.
- STAAR Alternate 2: parse teacher-guide stimulus sections into structured prompt, choices, image dependency flags, and answer text; import only non-image-dependent rows automatically.
- NYSED math/science: parse question pages separately from item maps, then join correct letters by grade/item number.
- NYSED ELA: split passages from item blocks and extract answer option lists before key joining.
- MCAS/LEAP/Florida: add raw source folders or generated JSON, then run the same structured-choice audit.
