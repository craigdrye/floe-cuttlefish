# Logic/CS Additional Import Notes

Worker 5 scope: advanced Open Logic Project and OpenDSA leftovers only.

## Added

- Added `src/data/questionCatalog/logicCsAdditionalImported.ts`.
- Total new questions: 24.
- Unique raw source IDs: 24.

## Routing

- `formalLogic`: 8 Open Logic advanced computability, compactness, incompleteness, and set-theory cards.
- `logicCriticalThinking`: 4 Open Logic proof-strategy cards.
- `dataStructures`: 7 OpenDSA data-structure and algorithm-analysis cards.
- `software`: 3 OpenDSA software/design/formal-language cards.
- `introCS`: 2 OpenDSA computer-science foundations cards.

## Selection Policy

- Open Logic items were authored as fixed-choice concept or proof-move checks because the raw archive is mostly open proof prompts.
- OpenDSA items were cleaned only where the underlying concept could stand alone without the missing rendered widget, diagram, code block, or local course context.
- Every imported item preserves its raw `source_id` in both `lesson` and `source`.

## Skipped

- Missing diagrams, parse trees, ASTs, graphics canvases, and UML prompts.
- Prompts that depended on hidden code blocks, line numbers, or rendered interactive state.
- Answer-leaking extracted prompts unless the concept could be safely rewritten without the leaked answer.
- Course-admin/honor-code/survey/checklist items.
- Templated placeholders such as `CorrectAnswer`, `Distractor`, `option1`, or unexpanded variable names.
- Source IDs already present in existing Open Logic/OpenDSA imports, plus duplicate source IDs within this new batch.

## Verification

- `npm run build` completed successfully after the initial wiring.
- A later clean rebuild hit Vite output cleanup `ENOTEMPTY` on `dist/images`; `npm run build -- --emptyOutDir=false` then completed successfully, confirming TypeScript and bundling for the current code.
