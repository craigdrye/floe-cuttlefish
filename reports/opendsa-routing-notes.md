# OpenDSA Routing Notes

Worker 3 routed the remaining clean OpenDSA computer-science questions into live question catalogs.

## Newly Generated Import

- `src/data/questionCatalog/openDsaCoreImported.ts`
- Unique OpenDSA source IDs: 150
- Buckets:
  - `openDsaCoreIntroCsQuestions`: 2
  - `openDsaCoreSoftwareQuestions`: 21
  - `openDsaCoreDataStructuresQuestions`: 125
  - `openDsaCoreFormalLogicQuestions`: 2

## Routing

- `introCS`: intro Java/JUnit/OOP leftovers.
- `software`: software design, Java foundations, sets/maps/testing, and related programming-language items.
- `dataStructures`: algorithms, complexity, lists, hashes, graphs, trees, queues, stacks, recursion, and sorting.
- `formalLogic` and `logicCriticalThinking`: the small remaining self-contained programming-language/formal-logic items.

## Skipped Blocks

- Items already imported by the existing `openDsa*Imported.ts` files.
- Templated or placeholder answers such as `CorrectAnswer`, generated DOM reads, and option placeholders.
- Prompts requiring missing diagrams, UML, rendered views, code snippets, function bodies, or line-number context.
- Course-admin / local policy prompts such as honor-code, registration, welcome, WebCAT, and placeholder quiz items.
- Answer-leaking prompts where the extracted prompt already included the correct answer.
- Single-letter A/B/C/D choices when the actual options were not preserved in the prompt.
