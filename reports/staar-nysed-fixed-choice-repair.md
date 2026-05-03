# STAAR/NYSED Fixed-Choice Repair Assessment

## Source Files Inspected

- `data/raw_collections/nysed_ela_2015/nysed_ela_2015_questions.json` (233 items)
- `data/raw_collections/nysed_ela_2016/nysed_ela_2016_questions.json` (204 items)
- `data/raw_collections/nysed_ela_2017/nysed_ela_2017_questions.json` (251 items)
- `data/raw_collections/nysed_ela_2018/nysed_ela_2018_questions.json` (186 items)
- `data/raw_collections/nysed_ela_2019/nysed_ela_2019_questions.json` (211 items)
- `data/raw_collections/nysed_ela_2021/nysed_ela_2021_questions.json` (164 items)
- `data/raw_collections/nysed_ela_2022/nysed_ela_2022_questions.json` (191 items)
- `data/raw_collections/nysed_ela_2023/nysed_ela_2023_questions.json` (239 items)
- `data/raw_collections/nysed_ela_2024/nysed_ela_2024_questions.json` (237 items)
- `data/raw_collections/nysed_ela_2025/nysed_ela_2025_questions.json` (224 items)
- `data/raw_collections/nysed_math_2017/nysed_math_2017_questions.json` (284 items)
- `data/raw_collections/nysed_math_2018/nysed_math_2018_questions.json` (185 items)
- `data/raw_collections/nysed_math_2019/nysed_math_2019_questions.json` (192 items)
- `data/raw_collections/nysed_math_2021/nysed_math_2021_questions.json` (143 items)
- `data/raw_collections/nysed_math_2022/nysed_math_2022_questions.json` (204 items)
- `data/raw_collections/nysed_math_2023/nysed_math_2023_questions.json` (197 items)
- `data/raw_collections/nysed_math_2024/nysed_math_2024_questions.json` (170 items)
- `data/raw_collections/nysed_math_2025/nysed_math_2025_questions.json` (178 items)
- `data/raw_collections/nysed_science_2024/nysed_science_2024_questions.json` (98 items)
- `data/raw_collections/nysed_science_2025/nysed_science_2025_questions.json` (94 items)
- `data/raw_collections/staar_2018/staar_2018_questions.json` (502 items)
- `data/raw_collections/staar_2019/staar_2019_questions.json` (488 items)
- `data/raw_collections/staar_2021/staar_2021_questions.json` (529 items)
- `data/raw_collections/staar_2022/staar_2022_questions.json` (952 items)
- `data/raw_collections/staar_2023/staar_2023_questions.json` (427 items)
- `data/raw_collections/staar_2023_redesign/staar_2023_redesign_questions.json` (1069 items)
- `data/raw_collections/staar_2024_rationales/staar_2024_rationales.json` (438 items)
- `data/raw_collections/staar_2025_rationales/staar_2025_rationales.json` (1254 items)
- `data/raw_collections/staar_alt2_2023/staar_alt2_2023_questions.json` (355 items)
- `data/raw_collections/staar_alt2_2025/staar_alt2_2025_questions.json` (360 items)

## Aggregate Findings

| Source group | Raw items | Correct letters recoverable | Choice markers in prompt | Safe current fixed-choice imports | Metadata/table-like prompts | Tiny prompts |
|---|---:|---:|---:|---:|---:|---:|
| NYSED ELA | 2140 | 372 | 0 | 0 | 1120 | 161 |
| NYSED math | 1553 | 1083 | 0 | 0 | 1192 | 58 |
| NYSED science | 192 | 96 | 0 | 0 | 93 | 14 |
| STAAR rationales | 1692 | 0 | 0 | 0 | 0 | 286 |
| STAAR released tests | 4682 | 451 | 0 | 0 | 0 | 540 |

## Extraction Defects

- No inspected raw item has a structured answer-choice array; any import would need to infer choices from `prompt_text` or go back to source PDFs.
- NYSED math and science extractions mostly captured answer-key/item-map rows, not the question stems and answer options. The correct answer letter is often present, but the stem/options are not.
- NYSED ELA extractions mostly captured passages or prose chunks and usually lack `answer_key_excerpt`, so questions, choices, and correct answers are not aligned.
- STAAR released-test extractions split PDFs into numeric/page fragments and partial answer-key rows. Correct letters can sometimes be parsed from answer-key excerpts, but stems and options are not reliably present in the same record.
- STAAR rationale extractions include some rationale/answer text fragments, but records are misaligned and still do not contain complete fixed-choice options.

## Recoverability From Current Raw Data

- Correct answers: partially recoverable for NYSED math/science and some STAAR answer-key rows; weak for NYSED ELA.
- Answer choices: not safely recoverable from current raw JSON because choices are not structured; this analyzer found no prompt records with four recognizable fixed-choice markers.
- Playable fixed-choice imports: not safe from current raw data alone. The conservative safe subset is `0` items because no collection provides both a trustworthy stem, four choices, and a correct answer in structured fields.

## Safe Subset Counts

- Safe current fixed-choice imports: `0`.
- Heuristic-only candidates with a correct letter and apparent choice markers are counted in `reports/staar-nysed-fixed-choice-repair.json`; current count is `0`.

## Concrete Next-Step Plan

1. Re-extract from source PDFs with a page-aware parser that preserves question blocks and answer-choice coordinates; do not try to repair imports from the existing JSON alone.
2. Build per-source fixtures for one representative PDF each: STAAR released test, STAAR rationale, NYSED math, NYSED ELA, and NYSED science.
3. For NYSED math/science, join item-map answer rows to page-extracted question blocks by question number, then emit only records with one stem, 3-5 choices, and one correct letter.
4. For NYSED ELA, first separate passages from item blocks; only fixed-choice items whose question text and options are captured should be imported.
5. For STAAR, parse answer-key PDFs separately for correct letters and released/rationale PDFs for stems/options, then join by exam and item number.
6. Add a validation gate before catalog import: reject any item without structured `choices`, a valid `correctAnswer`, nontrivial stem text, and no obvious item-map/rationale boilerplate.
