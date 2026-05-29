# School Assessment Math/Science Routing Notes

Second pass by Worker B, scoped to STAAR/NYSED school math and science.

## Added Batch

- Added 25 fixed-choice questions in `src/data/questionCatalog/schoolAssessmentMathScienceImported.ts`.
- Source coverage:
  - 5 STAAR 2022 Algebra I items.
  - 5 STAAR 2022 Grade 7 Math items.
  - 5 STAAR 2022 Grade 8 Math items.
  - 10 STAAR 2022 Biology items.
- Every imported item preserves the raw `source_id` in both `lesson` and `source`.
- Distractor explanations were authored during import; answer choices and correct answers came from rows with usable prompt text plus answer-key evidence.

## Wired Tracks

- `col-algebra-1-ny-next-gen`
- `col-eureka-math-algebra-i`
- `col-class-7-math`
- `col-class-8-math`
- `col-high-school-biology-ngss`
- `apBiology`

## Skipped Sources And Reasons

- NYSED math 2025, NYSED science 2024, and NYSED science 2025 were mostly skipped because sampled rows were standards-table or answer-key rows, often with prompts like `Multiple Choice C 1 ...` and no usable stem or distractors.
- STAAR 2024/2025 rationales were skipped for this batch because the extracted rows were frequently rationale fragments rather than full playable questions.
- STAAR 2023 paper/redesign rows were mostly skipped where they required missing diagrams, hot spots, drag-and-drop UI, multi-select answers, or answer choices that collapsed into unreadable placeholders.
- Grade 5 science items with usable prompts were not wired in this pass because the allowed wiring scope did not include `primary.ts`/`scienceYear5`; they remain candidates for a primary-science owner.
- Math items that depended on missing graphs, number lines, box plots, or diagrams were skipped even when an answer key was present.
