# Open Logic Project Conversion Readiness

## Finding

No direct fixed-choice subset was found in the extracted Open Logic Project raw collection.
The extractor found 430 `prob` blocks; 0 contain direct fixed-choice markers such as `choices`, `correct answer`, or `correctchoice`.
7 block(s) use “which of the following” phrasing, but these are enumerated tasks without an answer key or complete local context.

## Shape of Source Items

- `open_response`: 270
- `other`: 94
- `enumerated_subproblems`: 59
- `enumerated_which_following`: 7

## Highest-Value Chapters for Formal Logic / Logic Critical Thinking

- `first-order-logic/natural-deduction`: 12 problem(s) across 6 file(s), deductive proof rules.
- `first-order-logic/syntax-and-semantics`: 21 problem(s) across 10 file(s), first-order syntax and semantics.
- `first-order-logic/tableaux`: 11 problem(s) across 6 file(s), validity and countermodel practice.
- `propositional-logic/syntax-and-semantics`: 11 problem(s) across 4 file(s), propositional syntax, truth, validity.
- `first-order-logic/models-theories`: 4 problem(s) across 2 file(s), models, theories, definability.
- `first-order-logic/axiomatic-deduction`: 11 problem(s) across 7 file(s), supporting or advanced topic.
- `first-order-logic/completeness`: 23 problem(s) across 7 file(s), supporting or advanced topic.
- `first-order-logic/sequent-calculus`: 10 problem(s) across 6 file(s), supporting or advanced topic.
- `sets-functions-relations/sets`: 11 problem(s) across 5 file(s), sets and set operations.
- `proof-theory/sequent-calculus`: 8 problem(s) across 4 file(s), formal proof systems.
- `sets-functions-relations/functions`: 8 problem(s) across 3 file(s), functions and mappings.
- `proof-theory/cut-elimination`: 7 problem(s) across 4 file(s), formal proof systems.
- `sets-functions-relations/relations`: 6 problem(s) across 6 file(s), relations and logical structure.
- `proof-theory/normalization`: 4 problem(s) across 2 file(s), formal proof systems.
- `methods/proofs`: 3 problem(s) across 3 file(s), argument/proof habits.
- `proof-theory/natural-deduction`: 1 problem(s) across 1 file(s), formal proof systems.
- `normal-modal-logic/syntax-and-semantics`: 13 problem(s) across 5 file(s), extension unit after core logic.
- `sets-functions-relations/size-of-sets`: 39 problem(s) across 10 file(s), supporting or advanced topic.

## Recommended Authored Conversion Pipeline

1. Normalize LaTeX source into lesson-sized concept records: definition, theorem/proposition, example, exercise, dependencies, and source citation.
2. Select core chapters first: methods/proofs, sets-functions-relations basics, propositional syntax/semantics, first-order syntax/semantics, and natural deduction/tableaux.
3. Generate fixed-choice items from source-grounded templates only where the surrounding definition or theorem is local enough to support a keyed answer.
4. Use deterministic validators for formula/truth-table/semantic-notion questions where possible; otherwise route to human review.
5. Add critical-thinking wrappers that translate formal tasks into argument analysis: validity, counterexample, ambiguity, sufficient/necessary condition, and proof strategy.
6. Keep advanced parts as enrichment: modal logic, proof theory, many-valued/intuitionistic logic, model theory, computability, and incompleteness.

## MCQ Candidate Policy

No sample transformed MCQ candidates are included because the currently extracted problem blocks do not carry enough local context plus keyed answers to generate fixed-choice items without risking missing context.
