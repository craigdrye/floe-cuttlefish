# OpenIntro Stats Additional Routing Notes

- Worker: A
- Scope: OpenIntro Statistics, OpenIntro Statistics Slides, and OpenIntro Labs (Rguroo)
- New catalog file: `src/data/questionCatalog/openIntroStatsAdditionalImported.ts`
- Routed tracks: `apStatistics`, `introDataScience`
- Total added: 30 questions

## Source Split

- OpenIntro Statistics textbook raw bank: 10
- OpenIntro Statistics Slides raw bank: 7
- OpenIntro Labs (Rguroo) raw bank: 13

## Selection Notes

- Preferred source-traceable concept checks with fixed choices and a single defensible answer.
- Converted selected calculation prompts into compact multiple-choice questions when the source prompt and, where available, solution text made the answer verifiable.
- Restated missing slide/lab context inside prompts where the original item depended on a plot, prior calculation, or lab UI step.
- Preserved source identifiers in each `lesson` field.

## Skipped Reasons

- Long Rguroo lab tasks requiring screenshots, custom plots, saved Rguroo objects, or open-ended written reports.
- Slide items that depended on unimported images, tables, model output, or previous slide calculations and could not be made self-contained without inventing too much context.
- Textbook exercises with missing solution text and multi-part numeric work where answer choices would have required fragile reconstruction.
- Items with mangled LaTeX or ambiguous extracted wording.

## Routing

- Added `openIntroStatsAdditionalImportedQuestions` to `apStatistics`.
- Added `openIntroStatsAdditionalImportedQuestions` to `introDataScience`.
- Did not route to quant, ML, or other non-owned tracks.
