# OpenIntro IMS Routing Notes

Worker: 1, OpenIntro IMS / statistics-data only.

## Added

- Added 56 self-contained OpenIntro IMS questions to `src/data/questionCatalog/openIntroImsImported.ts`.
- Wired the imported questions into `apStatistics` and `introDataScience` in `src/data/questionCatalog/universityCollege.ts`.
- Preserved each raw `openintro-ims::...` source ID in the playable lesson text.

## Selection Criteria

- Kept prompts that are playable without missing tables, plots, or external book context.
- Preferred concept checks, study design classification, variable/parameter identification, regression interpretation, inference setup, paired-data decisions, and ANOVA basics.
- Used the raw prompt as the traceable source of truth when the raw solution field was blank or visibly misaligned.

## Skipped For Now

- Figure/table-dependent exercises where the app would not show the referenced visual.
- Long multi-part calculation exercises that would require substantial worked setup or generated answer choices.
- Items whose raw solution text appears offset from the prompt.
- Advanced model-output questions that reference unavailable regression tables, diagnostics, or histograms.
