# Course Gap Question Routing Priorities

Generated: 2026-05-03

## Scope

This report prioritizes next course-family imports and conversions for Floe's specialization in philosophy, maths, and brainteasers. It is based on the current catalog, `reports/rebuild9-question-mapping-progress.md`, `reports/raw-collection-course-mapping.md`, `reports/raw-collection-mapping-readiness.md`, `reports/open-logic-conversion-readiness.md`, `reports/numbas-import-analysis.md`, `reports/remaining-oer-fixed-choice-candidates.md`, and `reports/recent-import-routing-qa.md`.

Do not wire additional questions directly into app code from these recommendations. Treat this as the conversion/import work queue.

## Current Catalog Gaps

- Philosophy is visibly underfilled: the current collection audit shows 34 internal Philosophy questions and 10 Logic & Critical Thinking questions. The mapping reports identify Open Logic Project as the cleanest philosophy/logic-aligned source, but not as a direct fixed-choice import.
- Maths has breadth but shallow high-value depth: many school/AP/college math tracks have 50-question internal banks, Quant has 106, Quant Advanced has 137, Linear Algebra has 4, and AP Calculus has very small high-school coverage in the audit. The large math reservoirs are Numbas, Numbas Exams, and WeBWorK, but all require conversion before live routing.
- Brainteasers have an existing destination, but quality/routing needs cleanup: Brain Burners has 35 internal questions and OpenTriviaQA Brain Teasers added 203. Recent routing QA found weak rationales across that import and noted the imported bank label is not Career even though the live target is `brainBurners`.
- Recent direct imports already consumed the safest fixed-choice pools: OpenSAT, OpenDSA subsets, OpenIntro Stats Slides, IMS Tutorials, OpenTrivia Brain Teasers, OpenTrivia Geography, and OpenDSA Bridge Course are already wired or documented as wired. The remaining highest-value work is course-family conversion, not more blind direct import.

## Priority Queue

### P0: Formal Logic

- Course family: `formalLogic`
- Why this is highest value: It is the clearest specialization gap. Existing Logic & Critical Thinking is tiny, Philosophy is small, and the source aligns directly with Floe's philosophy/rigor positioning.
- Raw sources to feed it:
  - `open_logic_project::formal-logic-core`: 188 matched items, high confidence, marked Design New Course.
  - `open_logic_project::modal-and-counterfactual`: 52 matched items, high confidence, marked Ready To Wire for existing Philosophy / Logic / Moral Crossroads tracks, but should be reviewed as source material before any new wiring.
  - High-value Open Logic chapters from the conversion report: first-order natural deduction, first-order syntax/semantics, first-order tableaux, propositional syntax/semantics, models/theories.
- Actionable next conversion:
  - Build an authored conversion pass, not a raw import. Normalize Open Logic LaTeX into local concept records, then generate fixed-choice or validator-backed exercises around validity, countermodel, truth table, syntax/semantics, and proof-rule recognition.
  - Start with 40-60 reviewed items from propositional logic and first-order syntax/semantics before expanding into modal logic.
- Do not do:
  - Do not import Open Logic problem blocks as playable questions. The Open Logic readiness report found 430 problem blocks but 0 direct fixed-choice items.

### P1: Set Theory and Proof

- Course family: `setTheoryAndProof`
- Why this matters: It bridges philosophy, maths, and CS theory. It also gives Floe a rigorous "reasoning foundations" lane rather than only school math practice.
- Raw sources to feed it:
  - `open_logic_project::sets-and-proof`: 95 matched items, high confidence, marked Design New Course.
  - Open Logic highest-value chapters: sets, functions, relations, methods/proofs, size-of-sets.
  - Existing course context: `logicCriticalThinking`, `mathematics_extensions`, `linearAlgebra`, and Class 11 Math proof/set-function modules can provide syllabus alignment.
- Actionable next conversion:
  - Convert definitions and examples into proof-method, counterexample, set operation, function/relation classification, and quantifier translation questions.
  - Keep the first release tightly scoped to sets, relations, functions, direct proof, contradiction, contrapositive, and counterexample.
- Do not do:
  - Do not mix this into generic College Algebra or Linear Algebra. It should be a distinct reasoning foundations course family.

### P2: Puzzle Logic and Brainteaser Reasoning

- Course family: `puzzleLogic` or a repaired/expanded `brainBurners` family
- Why this matters: Brainteasers are already a Floe specialization lane, but the current import needs quality repair before more volume.
- Raw sources to feed it:
  - Existing `openTriviaQA::brain-teasers` import: 203 wired questions, but QA found weak rationales and some answer leakage.
  - OpenTriviaQA educational categories only after strict filtering: `humanities` has 898 candidates and `for-kids` has 553 candidates in the remaining OER audit; these can contribute stable lateral-thinking and reasoning prompts if filtered aggressively.
  - Existing internal `brainBurners`, `detectiveLogic`, and `logicCriticalThinking` questions can define the target style.
- Actionable next conversion:
  - Run a repair pass on the existing 203 brain-teaser questions: remove answer-leakage cases, improve rationales beyond "the answer is X", normalize the course/source label to the intended Brain Burners destination, and split chapters into lateral reasoning, probability puzzles, liar/truthteller logic, counting puzzles, and trick wording.
  - Only after repair, mine additional OpenTriviaQA brain/humanities/for-kids rows with self-contained prompts, stable answers, and non-trivia reasoning.
- Do not do:
  - Do not bulk-import OpenTriviaQA. The full source has 49,716 questions and is explicitly held as too broad/off-brand without aggressive filtering.
  - Do not expand entertainment, sports, celebrities, rated, newest, people, or time-sensitive trivia.

### P3: Math Diagnostics and Algebra Workout

- Course families: `mathDiagnostics`, `algebraWorkout`, `collegeAlgebraWorkout`
- Why this matters: Maths volume is the largest available opportunity, but the best raw sources are not app-ready. A diagnostic/workout family gives a practical destination for generated variants rather than dumping material into existing tracks.
- Raw sources to feed it:
  - `numbas::source`: 9,808 matched items, medium confidence, marked Design New Course with proposed `algebraWorkout`, `mechanicsDrills`, and `quantitativeMethods`.
  - `numbas_exams::source`: 12,063 matched items, medium confidence, marked Needs Extraction Fix / seed new course with proposed `mathDiagnostics` and `mechanicsDrills`.
  - WeBWorK OPL: 22,861 raw problems, support bank only; useful later for `collegeAlgebraWorkout` and `contestMathDrills`.
- Actionable next conversion:
  - For Numbas, refetch full `.exam` payloads and preserve variables, marking schemes, answer fields, and resources. Then render deterministic static variants for supported part types.
  - Prioritize CC BY / CC BY-SA items tagged calculus, algebraic manipulation, probability, statistics, matrices, vectors, functions, differentiation, and integration.
  - For WeBWorK, build a `.pg` parser before any catalog work. The remaining OER audit found 1,616 explicit fixed-only widget files in source scan, but 0 safe direct imports from current raw JSON because choices/correct answers were not extracted.
- Do not do:
  - Do not wire current Numbas or WeBWorK raw rows. Numbas has 21,858 conversion-required records out of 21,871 analyzed; WeBWorK has 0 safe direct fixed-choice imports from the current extract.

### P4: Quantitative Methods and Mechanics Drills

- Course families: `quantitativeMethods`, `mechanicsDrills`
- Why this matters: These are valuable for advanced maths, quant interview prep, physics-style reasoning, and applied problem solving. They should come after the generic math conversion path because they need diagrams, rendered variables, and answer checking.
- Raw sources to feed it:
  - Numbas tags: statics 556, mechanics 540, statistics 537, probability 492, matrices 186+, vectors 192, data analysis 177.
  - Existing tracks: Quant, Quant Advanced, AP Statistics, Intro Data Science, General Physics I, Linear Algebra.
  - OpenIntro IMS can provide statistics/data-science support where already marked Ready To Wire, but recent progress notes warn raw IMS/OpenIntro exercises are mostly open-ended and solution alignment is unreliable.
- Actionable next conversion:
  - After Numbas rendering exists, generate static mechanics and quantitative-methods variants with diagrams embedded or text-restated.
  - Start with non-applet, low-variable, permissively licensed records; quarantine GeoGebra/JSXGraph-heavy items.
- Do not do:
  - Do not treat this as a direct statistics import. Recent QA found weak rationales in imported statistics batches, and OpenIntro raw exercises are not consistently fixed-choice/playable.

## Lower Priority / Support Only

- Algorithms Drills: OpenDSA has strong CS value, including `opendsa::algorithms` with 400 matched items marked Design New Course and 122 remaining bridge-course candidates in the OER audit. This is useful, but less central to the requested philosophy/maths/brainteaser specialization than Formal Logic and math conversion.
- OpenSAT: already wired into SAT Math and Reading/Writing. It is exam-prep support, not a specialization gap.
- OpenTriviaQA Geography and general educational trivia: keep as course support only. Recent QA found geography routing concerns, and the broader trivia corpus is off-brand unless filtered into a purposeful course.
- Government school assessments: STAAR/NYSED have useful school-math support potential, but reports repeatedly flag extraction damage, answer-key rows, rationale-only rows, and missing structured choices. They are not the highest-value specialization gap.
- Lab/task sources: OpenIntro labs, OI labs, pharma hands-on, and similar task-based material should wait for a lab/resource pipeline rather than quiz-card imports.

## Recommended Next Imports / Conversions

1. Create the Formal Logic conversion backlog from Open Logic Project core chapters. Target 40-60 authored, source-cited fixed-choice or validator-backed questions first.
2. Create the Set Theory and Proof backlog from Open Logic sets/functions/relations and proof-method chapters. Keep it separate from generic math.
3. Repair OpenTriviaQA Brain Teasers before expanding: fix rationales, remove leakage, normalize routing, and split into reasoning chapters.
4. Build the Numbas conversion pipeline for deterministic rendered static variants. Do not import current raw Numbas rows directly.
5. Build or defer the WeBWorK `.pg` fixed-choice parser. Do not spend catalog-routing time on WeBWorK until answers and choices are extractable.

## Deferral Rules

- Defer any source without prompt, correct answer, at least two distinct wrong answers, and enough local context.
- Defer any parameterized source until rendered variants and provenance are stored.
- Defer any broad trivia source unless it passes a course-specific filter and avoids entertainment/time-sensitive facts.
- Defer government exam batches until extraction separates question stems, answer choices, answer keys, and rationales cleanly.
- Defer app-code wiring until the relevant conversion report shows reviewed playable questions, not just source alignment.
