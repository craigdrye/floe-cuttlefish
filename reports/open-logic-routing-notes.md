# Open Logic Project Routing Notes

Worker 2 scope: Open Logic Project / formal logic only.

## Routed in this pass

- Added `src/data/questionCatalog/openLogicProjectImported.ts` with authored fixed-choice conversions from raw Open Logic Project proof/problem prompts.
- Wired 25 items into `formalLogic`.
- Wired 5 items into `logicCriticalThinking`.
- Wired 2 modal/epistemic logic items into `philosophy`.
- Wired 19 sets/functions/relations items into `dataStructures`.

Each added question preserves the raw Open Logic `source_id` in both `lesson` and `source`.

## Selection policy

The raw source has no keyed multiple-choice subset. I only converted prompts where the raw exercise cleanly supports a definition check, proof-strategy check, semantic classification, or standard theorem consequence without needing missing diagrams, textbook-local labels, or a long proof as the answer.

## Still unused / course-design needed

- Most proof-theory, completeness, incompleteness, model theory, computability, lambda-calculus, modal tableaux, and set-size material remains unused.
- Many items reference local figures, theorem labels, or long derivations and would need a lesson-aware conversion pass rather than direct quiz-card routing.
- Advanced modal, many-valued, intuitionistic, and proof-theory material likely wants enrichment or senior formal-logic course boundaries before bulk import.
