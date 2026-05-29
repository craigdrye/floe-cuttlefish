# Career Labs Routing Notes

Worker E scope: career, medical, regulatory, pharma, and open lab conversion opportunities.

## Added Batch

Added 18 source-traceable quiz cards in `src/data/questionCatalog/careerLabsImported.ts`.

- `medical`: 5 cards from `pharma_hands_on`, focused on CDISC/ADaM ADSL row meaning, efficacy-population filtering, treatment denominators, small-n table cells, and subject identifiers.
- `clinicalResearch`: 8 cards from `pharma_hands_on` and `openintro_labs_rguroo`, focused on clinical data operations, variable typing, case-sensitive clinical flags, grouping state, reproducible examples, and applied interpretation of mean/median, IQR, and simulation comparisons.
- `regulatory`: 5 cards from `pharma_hands_on`, focused on traceable table labels, controlled formatting, zero-count handling, clean analysis environments, and explicit transformation pipelines.

Each card keeps the raw `source_id` in `lesson` and sets `source` to either `Pharma hands-on` or `OpenIntro Labs`.

## Skipped Or Deferred

- Most OpenIntro lab prompts were skipped because they are procedural, screenshot-driven, tool-specific, or require inspecting generated plots rather than answering a concise fixed-choice concept check.
- OpenIntro platform variants (`oilabs_tidy`, `oilabs_stata`, `oilabs_jamovi`, `oilabs_jasp`) often duplicate the same lab concepts across tools. I used the Rguroo OpenIntro source for a small representative conversion and avoided duplicating equivalent prompts across platforms.
- `introDataScience` is a strong conceptual fit for several OpenIntro lab conversions, but that track is wired through `src/data/questionCatalog/universityCollege.ts`, which was outside this worker's stated write scope. I did not edit that file.
- Pharma prompts that were pure coding mechanics, IDE navigation, snippets, or long procedural table-building instructions were skipped unless they could be distilled into a clinical data, regulatory traceability, or clinical research operations concept.

