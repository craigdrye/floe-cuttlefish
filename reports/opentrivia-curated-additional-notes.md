# OpenTriviaQA Curated Additional Notes

Worker: 1, OpenTriviaQA high-signal academic slices only.

## Added

- Added 48 reviewed OpenTriviaQA questions to `src/data/questionCatalog/openTriviaCuratedAdditionalImported.ts`.
- Wired the batch into existing tracks:
  - `apHumanGeography`: 8 physical geography rows and 3 language/culture rows.
  - `apHistory`: 15 world/U.S. history rows.
  - `apBiology`: 5 biology / nucleic-acid / evolution rows.
  - `apPhysics`: 4 physical science rows.
  - `apEnglish`: 8 canonical literature rows.
  - `artHistory`: 2 Renaissance art rows.
  - `apEnvironmentalScience`: 3 environmental science / hazards rows.
- Preserved each raw `opentriviaqa::...` source ID in the playable lesson text.

## Selection Criteria

- Preferred stable academic facts, canonical texts, named historical events, physical geography, biology, physics, environmental science, and AP humanities concepts.
- Required four usable source answer choices and no source ID already present in the OpenTrivia imported source files.
- Lightly normalized wording where raw prompts had typos, awkward truncation, or dated phrasing while keeping the source ID traceable.

## Skipped For Now

- Broad pop culture, celebrity, sports, TV, music, movie-award, and franchise-recall trivia.
- Items with source answer ambiguity, "all/none of these" dependence where it weakened the item, or highly local recall with little course alignment.
- Already imported OpenTriviaQA source IDs.
- Large geography/history runs that would inflate track size without adding much new instructional signal.

## Verification Notes

- Added source IDs are unique relative to existing imported OpenTriviaQA source IDs.
- The repository already contains a small number of pre-existing duplicate OpenTriviaQA source IDs across older import files; this pass did not add to that duplicate set.
