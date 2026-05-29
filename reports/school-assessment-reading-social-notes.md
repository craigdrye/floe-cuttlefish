# School Assessment Reading/Social Routing Notes

Selective pass by Worker 2, scoped to STAAR/NYSED school reading, ELA, social studies, and history.

## Added Batch

- Added 15 fixed-choice questions in `src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts`.
- Source coverage:
  - 8 STAAR ELA/writing items from 2018, 2021, and 2022.
  - 5 STAAR Grade 8 social studies/U.S. history items from 2018, 2021, and 2022.
  - 2 logic/argumentation adaptations from clean STAAR ELA evidence/claim rows.
- Every imported item preserves the raw `source_id` in both `lesson` and `source`.
- Prompts, choices, and correct answers came from rows with complete fixed-choice text and answer-key evidence; distractor explanations were authored during Floe import.

## Wired Tracks

- `col-sat-reading-and-writing`
- `col-7th-grade-reading-and-vocab`
- `col-8th-grade-reading-and-vocab`
- `logicAndArgumentation`
- `apHistory`
- `us_history`
- `col-ap-u-s-history`

## Skipped Sources And Reasons

- NYSED ELA 2025 was skipped because sampled rows were mostly answer-key/standards-table lines, not playable question stems with choices.
- NYSED ELA 2024 and several earlier NYSED rows were skipped where extraction split passages into paragraph chunks without answer choices.
- STAAR English reading-comprehension rows were skipped when the prompt depended on an unavailable passage, paragraph range, paired selection, or quotation context not fully present in the row.
- STAAR 2023 redesign ELA and social-studies rows were mostly skipped when the answer-key excerpt did not preserve a reliable correct option, or when items were multipart, short constructed response, hotspot, drag/drop, or select-multiple.
- STAAR 2024/2025 rationale rows were skipped where they were rationale fragments rather than full playable questions.
- Social-studies/history rows were skipped when they required missing maps, diagrams, tables, photographs, or excerpt context.
