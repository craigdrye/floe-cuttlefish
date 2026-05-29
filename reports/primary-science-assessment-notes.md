# Primary Science Assessment Notes

Worker 3 selective pass over STAAR/NYSED primary and grade science raw collections.

## Added Batch

- Added 23 fixed-choice science questions in `src/data/questionCatalog/primaryScienceAssessmentImported.ts`.
- Source coverage:
  - 8 STAAR 2022 Grade 5 Science items.
  - 2 STAAR 2023 Redesign Grade 5 Science items.
  - 13 STAAR 2022 Grade 8 Science items.
- Every imported item preserves the raw `source_id` in both `lesson` and `source`.
- Answer choices and correct answers came from rows with usable prompt text plus answer-key evidence; distractor explanations were authored during import.

## Wired Tracks

- `scienceYear5`: 10 grade 5 science items.
- `middleSchoolEarthSpace`: 3 grade 8 earth/space items.
- `middleSchoolBiology`: 5 grade 8 life science/ecology items.
- `middleSchoolChemistry`: 2 grade 8 chemistry/periodic-table items.
- `middleSchoolPhysics`: 3 grade 8 motion/energy/force items.

## Skipped Sources And Reasons

- NYSED Science 2024 and 2025 were skipped in this pass because sampled rows were mostly answer-key or standards-table fragments, constructed-response shells, or prompts without recoverable fixed-choice distractors.
- STAAR 2024 and 2025 rationales were skipped because the available extraction is rationale-focused rather than clean full-question rows.
- STAAR 2023 Grade 5/8 Science paper-sampler rows were mostly skipped where they required image selection, multipart UI, hot spots, drag-and-drop answers, or missing diagrams.
- STAAR 2022 Grade 5/8 Science rows were skipped when they depended on unrecoverable diagrams, food webs, charts, periodic tables, graph images, or answer-document griddables rather than self-contained fixed-choice text.
- STAAR Alt 2 science teacher guides were skipped because the prompts depend on external stimuli and teacher-directed picture choices.
