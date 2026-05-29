import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const lessonFor = (sourceId: string, note: string) =>
  `Source: Open Logic Project (${sourceId}). Authored Floe conversion from the raw proof/problem prompt. ${note}`

const formal = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  sourceId: string,
  note = 'The original item is an open proof or classification exercise, so this card checks the same concept in fixed-choice form.',
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: lessonFor(sourceId, note),
  source: `Open Logic Project raw exercise: ${sourceId}`,
})

const ds = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  sourceId: string,
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: lessonFor(sourceId, 'The original item is an open set/function/relation exercise; this card isolates the course-ready definition or proof move.'),
  source: `Open Logic Project raw exercise: ${sourceId}`,
})

export const openLogicProjectFormalLogicQuestions = makeQuestionBank('University', [
  formal(462001, 'Natural Deduction', 'Identity Symmetry', 'To prove symmetry of identity in natural deduction, which target form captures the idea?', 'From x = y, derive y = x', [
    miss('From x = y, derive x = y', 'That is reflexivity or restating the premise, not symmetry.', 'Symmetry reverses the identity statement.'),
    miss('From x = y and y = z, derive x = z', 'That is transitivity.', 'Use the one-premise reversal.'),
    miss('From x is not y, derive y = x', 'Negated identity does not give positive identity.', 'Keep equality positive.'),
  ], 'openlogic::first-order-logic/natural-deduction/identity.tex::1'),
  formal(462002, 'Natural Deduction', 'Identity Transitivity', 'Which inference pattern is the identity transitivity exercise asking you to justify?', 'From x = y and y = z, infer x = z', [
    miss('From x = y, infer y = x', 'That is symmetry, not transitivity.', 'Transitivity chains two equalities.'),
    miss('From x = x, infer y = y', 'That uses reflexive identity separately for each object.', 'Look for a bridge through y.'),
    miss('From x != y, infer y != x', 'That is about nonidentity symmetry, not identity transitivity.', 'The source exercise is about equality.'),
  ], 'openlogic::first-order-logic/natural-deduction/identity.tex::1'),
  formal(462003, 'Natural Deduction', 'Substitution of Identicals', 'If you have x = y and A(x), which natural-deduction move best matches substitution of identicals?', 'Infer A(y)', [
    miss('Infer not A(y)', 'Identity substitution preserves the predicate, not its negation.', 'Equal objects share the relevant property.'),
    miss('Infer x is not y', 'That contradicts the identity premise.', 'Use equality as a replacement license.'),
    miss('Infer A(x) or A(y) only', 'The equality premise supports the stronger replacement.', 'Move the property across identity.'),
  ], 'openlogic::first-order-logic/natural-deduction/identity.tex::2'),
  formal(462004, 'Proof-Theoretic Notions', 'Inconsistency Check', 'A theory or set of premises is inconsistent exactly when:', 'It proves or entails a contradiction', [
    miss('It contains at least one long formula', 'Length is irrelevant to consistency.', 'Ask whether contradiction follows.'),
    miss('It has no variables', 'Variable use does not decide consistency.', 'Consistency is about joint satisfiability or derivability of contradiction.'),
    miss('Every formula in it is atomic', 'Atomic sets can be consistent or inconsistent depending on interpretation.', 'Look for impossible joint commitments.'),
  ], 'openlogic::first-order-logic/natural-deduction/proof-theoretic-notions.tex::1'),
  formal(462005, 'Provability and Consistency', 'Negation and Inconsistency', 'The source exercise asks you to connect provability of not-A with inconsistency. Which equivalence is the key idea?', 'A set proves not-A iff adding A makes the set inconsistent', [
    miss('A set proves A iff adding A makes the set inconsistent', 'Adding what is already provable should not by itself create inconsistency.', 'The contradiction comes from adding the opposite.'),
    miss('A set is inconsistent iff it has no formulas', 'The empty set is not automatically inconsistent.', 'Inconsistency needs contradiction.'),
    miss('A set proves not-A iff removing A makes every formula true', 'Removal is not the proof-theoretic test here.', 'The test is adding A and deriving contradiction.'),
  ], 'openlogic::first-order-logic/natural-deduction/provability-consistency.tex::1'),
  formal(462006, 'Quantifier Rules', 'Universal Instantiation', 'From forall x A(x), which step is licensed in a first-order derivation?', 'Infer A(t) for an appropriate term t', [
    miss('Infer exists x not A(x)', 'That negates the universal instead of instantiating it.', 'Universal claims apply to each case.'),
    miss('Infer forall x not A(x)', 'No negation is introduced by universal instantiation.', 'Keep the predicate unchanged.'),
    miss('Infer A(t) only if t is not in the language', 'Instantiation uses terms available under the rule restrictions.', 'Do not invent a forbidden term.'),
  ], 'openlogic::first-order-logic/natural-deduction/proving-things-quant.tex::1'),
  formal(462007, 'Quantifier Rules', 'Existential Strategy', 'When a derivation requires the existential-elimination rule, what is the usual disciplined strategy?', 'Assume a fresh witness temporarily and derive a result independent of that witness', [
    miss('Choose the most convenient existing constant and keep assumptions about it forever', 'Existential elimination needs freshness and discharge discipline.', 'The witness cannot smuggle in extra facts.'),
    miss('Replace exists with forall immediately', 'Existential and universal quantifiers are not interchangeable.', 'One witness is not every object.'),
    miss('Deny the existential and stop', 'That is not an elimination proof.', 'Use a temporary witness to reason from existence.'),
  ], 'openlogic::first-order-logic/natural-deduction/proving-things-quant.tex::2'),
  formal(462008, 'Natural Deduction', 'Conditional Proof', 'To derive A -> B in natural deduction, the standard proof pattern is to:', 'Assume A temporarily and derive B, then discharge the assumption', [
    miss('Assume B and derive A', 'That proves the converse B -> A.', 'Start with the antecedent.'),
    miss('Assume not-A and derive not-B', 'That proves the inverse, not the original conditional.', 'Contrapositive would start from not-B.'),
    miss('List A -> B as a premise without justification', 'That begs the question in a derivation exercise.', 'Build the conditional by a subproof.'),
  ], 'openlogic::first-order-logic/natural-deduction/proving-things.tex::1'),
  formal(462009, 'Natural Deduction', 'Disjunction Elimination', 'Which proof shape best matches proof by cases for A or B?', 'Derive the same conclusion from A and from B, then infer that conclusion', [
    miss('Derive A from B only', 'One branch is not enough for proof by cases.', 'Both disjuncts need coverage.'),
    miss('Infer both A and B immediately', 'A disjunction does not give both disjuncts.', 'An or-statement gives cases, not conjunction.'),
    miss('Deny both A and B', 'That conflicts with the starting disjunction.', 'Use the alternatives constructively.'),
  ], 'openlogic::first-order-logic/natural-deduction/proving-things.tex::3'),
  formal(462010, 'Soundness', 'Soundness Theorem Meaning', 'A soundness proof for a natural-deduction system aims to show that:', 'Anything derivable by the rules is semantically valid', [
    miss('Anything semantically valid is derivable by the rules', 'That is completeness.', 'Soundness goes from proof to truth preservation.'),
    miss('Every formula is derivable', 'That would make the system trivial or inconsistent.', 'Sound systems do not prove everything.'),
    miss('No proof may use assumptions', 'Derivations often use assumptions carefully.', 'The theorem is about rule reliability.'),
  ], 'openlogic::first-order-logic/natural-deduction/soundness.tex::1'),
  formal(462011, 'First-Order Semantics', 'Sentence Satisfaction', 'Why does the truth of a first-order sentence not depend on a variable assignment?', 'A sentence has no free variables for an assignment to vary', [
    miss('Sentences contain no logical symbols', 'Sentences may contain many logical symbols.', 'The key is free variables.'),
    miss('Assignments change the domain of the structure', 'Assignments map variables to objects; they do not change the domain.', 'Separate structure from assignment.'),
    miss('Predicates are ignored in sentences', 'Predicates are central to sentence truth.', 'Only free-variable dependence disappears.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/assignments.tex::1'),
  formal(462012, 'First-Order Semantics', 'Existential Satisfaction', 'M satisfies exists x A(x) exactly when:', 'Some assignment differing at most on x satisfies A(x)', [
    miss('Every assignment must make A(x) false', 'That is the negation of existential satisfaction.', 'Exists needs at least one witness.'),
    miss('A(x) contains no predicate symbols', 'Predicate symbols are allowed.', 'Focus on witness assignment.'),
    miss('The domain is empty in all cases', 'Standard existential truth requires a witness in the domain.', 'Look for some object.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/assignments.tex::2'),
  formal(462013, 'First-Order Semantics', 'Skolem Form Intuition', 'What does a Skolem function do in a formula like forall x exists y A(x,y)?', 'It chooses a y-value as a function of each x', [
    miss('It deletes the universal quantifier by making x meaningless', 'The x-dependence is precisely what the function records.', 'Skolemization keeps dependency information.'),
    miss('It proves A is false for every x', 'Skolemization is not negation.', 'It is a witness-selection device.'),
    miss('It turns predicates into truth tables', 'Truth tables are propositional tools, not Skolem functions.', 'Think witness function.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/assignments.tex::4'),
  formal(462014, 'First-Order Semantics', 'Extensionality of Predicates', 'In model-theoretic semantics, two predicates with the same extension in a structure agree on:', 'Exactly which tuples satisfy them', [
    miss('The spelling of their predicate letters', 'Extensional agreement is semantic, not typographic.', 'Look at assigned tuples.'),
    miss('The number of variables in the whole language', 'Language size is not the extension of one predicate.', 'An extension is a set of tuples.'),
    miss('Which proof system is being used', 'Extensions belong to structures, not proof calculi.', 'Think semantic interpretation.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/extensionality.tex::1'),
  formal(462015, 'Syntax', 'Free Variable Occurrence', 'A variable occurrence is free when it is:', 'Not within the scope of a quantifier binding that occurrence', [
    miss('Printed with a capital letter', 'Capitalization is not the binding criterion.', 'Look for quantifier scope.'),
    miss('Inside any formula with a connective', 'Connectives do not by themselves bind variables.', 'Only quantifiers bind variables.'),
    miss('Always the first variable in a formula', 'Position alone does not decide freedom.', 'Scope decides.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/free-vars-sentences.tex::1'),
  formal(462016, 'Semantic Notions', 'Entailment and Unsatisfiability', 'Which test captures the link between entailment and unsatisfiability?', 'Gamma entails A iff Gamma together with not-A is unsatisfiable', [
    miss('Gamma entails A iff Gamma together with A is unsatisfiable', 'Adding the conclusion should not create the countermodel test.', 'Add the negation of the conclusion.'),
    miss('Gamma entails A iff not-A is a tautology', 'That ignores Gamma and reverses the target.', 'Entailment blocks Gamma-true, A-false cases.'),
    miss('Gamma entails A iff Gamma has no sentences', 'Premise-set size does not define entailment.', 'Use the no-countermodel criterion.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/semantic-notions.tex::1'),
  formal(462017, 'Subformulas', 'Subformula Transitivity', 'If B is a subformula of A and C is a subformula of B, what follows?', 'C is a subformula of A', [
    miss('A is a subformula of C', 'That reverses the containment direction.', 'Subformula-of is transitive downward.'),
    miss('B and C must be identical', 'A subformula can have smaller subformulas.', 'Nested parts can differ.'),
    miss('C cannot contain any connectives', 'Subformulas can be complex.', 'The issue is structural containment.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/subformulas.tex::1'),
  formal(462018, 'Unique Readability', 'Unique Readability Goal', 'Unique readability for formulas is important because it guarantees that:', 'A well-formed formula has one correct main construction or parse', [
    miss('Every formula is true in every model', 'That is semantic validity, not readability.', 'This is about syntax.'),
    miss('No formula may contain parentheses', 'Parentheses often help enforce readability.', 'The goal is unambiguous structure.'),
    miss('Every predicate has exactly one argument', 'Arity is separate from unique parsing.', 'Think parse tree.'),
  ], 'openlogic::first-order-logic/syntax-and-semantics/unique-readability.tex::3'),
  formal(462019, 'Propositional Semantics', 'Formula Classification', 'A propositional formula is contingent when:', 'It is true on at least one valuation and false on at least one valuation', [
    miss('It is true on every valuation', 'That is a tautology.', 'Contingency needs mixed rows.'),
    miss('It is false on every valuation', 'That is unsatisfiable or contradictory.', 'Contingency needs at least one true row.'),
    miss('It contains no sentence letters', 'Contingency is about truth across valuations.', 'Classify by rows.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/semantic-notions.tex::1'),
  formal(462020, 'Propositional Semantics', 'Satisfiability', 'A propositional formula is satisfiable exactly when:', 'At least one valuation makes it true', [
    miss('Every valuation makes it false', 'That is unsatisfiable.', 'One true row is enough.'),
    miss('It has more than one connective', 'Connective count does not decide satisfiability.', 'Evaluate possible truth assignments.'),
    miss('It cannot be used in an argument', 'Satisfiable formulas can appear in arguments.', 'This is a semantic status.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/semantic-notions.tex::1'),
  formal(462021, 'Propositional Semantics', 'Tautology', 'A propositional formula is a tautology exactly when:', 'Every valuation makes it true', [
    miss('Exactly one valuation makes it true', 'That would be satisfiable but not tautological.', 'Tautology has no false rows.'),
    miss('Every valuation makes it false', 'That is contradiction.', 'Tautology is the all-true case.'),
    miss('It contains only one atomic letter', 'A one-letter formula can be contingent.', 'Truth pattern matters.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/semantic-notions.tex::1'),
  formal(462022, 'Propositional Semantics', 'Semantic Deduction', 'The semantic deduction theorem connects Gamma plus A entails B with:', 'Gamma entails A -> B', [
    miss('Gamma entails B -> A', 'That is the converse conditional.', 'Discharge A into the antecedent.'),
    miss('Gamma and B entails A', 'That reverses the assumed formula and conclusion.', 'Move the extra assumption into an implication.'),
    miss('A alone is unsatisfiable', 'That is not the deduction theorem pattern.', 'The theorem converts an assumption into a conditional.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/semantic-notions.tex::4'),
  formal(462023, 'Valuations', 'Truth-Functional Connective', 'A connective is truth-functional when its compound truth value is fixed by:', 'The truth values of its immediate component formulas', [
    miss('The font used to print the formula', 'Typography does not determine truth value.', 'Truth-functional means truth-value inputs.'),
    miss('The biography of the person writing it', 'Classical valuation ignores author biography.', 'Use component truth values.'),
    miss('The number of pages in the proof', 'Proof length is not a truth-function input.', 'Look at the valuation of components.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/valuations-sat.tex::1'),
  formal(462024, 'Tableaux', 'Countermodel Role', 'In a tableau test for validity, an open completed branch usually indicates:', 'A countermodel or valuation has survived', [
    miss('The argument has been proved valid', 'Closed branches support validity; open branches show a surviving case.', 'Open means not contradicted.'),
    miss('Every formula is a tautology', 'An open branch does not show that.', 'It gives a possible assignment/model.'),
    miss('The language has no constants', 'Branch openness is not a vocabulary count.', 'Read the branch semantically.'),
  ], 'openlogic::first-order-logic/tableaux/soundness.tex::1'),
  formal(462025, 'Models and Theories', 'Definability', 'In model theory, a set is definable in a structure when:', 'Some formula picks out exactly that set in the structure', [
    miss('It has been listed in alphabetical order', 'Definability is by formula, not ordering.', 'Look for a formula whose extension matches.'),
    miss('It contains every object in every possible structure', 'That is too strong and not the definition.', 'Definability is relative to a structure and formula.'),
    miss('It cannot be described in the language', 'That is the opposite of definability.', 'Use the language to describe the set.'),
  ], 'openlogic::first-order-logic/models-theories/expressing-relations.tex::1'),
])

export const openLogicProjectLogicCriticalThinkingQuestions = makeQuestionBank('University', [
  formal(462101, 'Proof Methods', 'Indirect Proof', 'In an indirect proof of a claim C, what do you typically assume first?', 'Assume not-C and derive a contradiction', [
    miss('Assume C and immediately stop', 'That does not establish the claim from accepted premises.', 'Indirect proof starts with the denial.'),
    miss('Assume an unrelated claim and derive C by luck', 'The assumption must target the negation of the conclusion.', 'Negate the goal.'),
    miss('Assume both C and not-C as permanent premises', 'That builds in inconsistency instead of deriving it.', 'The contradiction must result from the temporary assumption.'),
  ], 'openlogic::methods/proofs/proof-by-contradiction.tex::1'),
  formal(462102, 'Proof Methods', 'Reading a Proof', 'When expanding a compressed proof, the most important thing to add is:', 'Which definition or inference rule justifies each step', [
    miss('More dramatic wording between the same lines', 'Style does not supply justification.', 'Explain why each step follows.'),
    miss('A different theorem with no connection to the proof', 'Expansion should clarify the existing proof.', 'Stay with the given steps.'),
    miss('Only the final answer, repeated several times', 'The task is to expose the reasoning, not repeat the endpoint.', 'Name the warrants.'),
  ], 'openlogic::methods/proofs/reading-proofs.tex::1'),
  formal(462103, 'Proof Methods', 'Unpacking Definitions', 'If asked to prove a set inclusion statement, what is the usual first move?', 'Take an arbitrary element of the left-hand set and show it belongs to the right-hand set', [
    miss('Count the letters in the set names', 'Set inclusion is not about notation length.', 'Use arbitrary-element reasoning.'),
    miss('Assume the two sets have the same name', 'Equal names are not the proof method.', 'Show membership preservation.'),
    miss('Pick only one favorite example and stop', 'One example does not prove a general inclusion.', 'Use an arbitrary element.'),
  ], 'openlogic::methods/proofs/using-definitions.tex::1'),
  formal(462104, 'Argument Analysis', 'Counterexample to Validity', 'To refute validity, what kind of case do you need?', 'A case where all premises are true and the conclusion is false', [
    miss('A case where all premises are false and the conclusion is false', 'That does not show failure of truth preservation.', 'Keep premises true.'),
    miss('A case where the conclusion is true', 'A true conclusion does not refute validity.', 'Invalidity needs a false conclusion under true premises.'),
    miss('A case where the argument is unpopular', 'Popularity is not the logical criterion.', 'Use possible truth conditions.'),
  ], 'openlogic::propositional-logic/syntax-and-semantics/semantic-notions.tex::3'),
  formal(462105, 'Argument Analysis', 'Proof by Cases', 'Why does a proof from A or B normally need two subproofs?', 'Because the conclusion must follow whichever disjunct is true', [
    miss('Because both A and B must be false', 'That contradicts A or B.', 'Each possible disjunct gets a branch.'),
    miss('Because cases are only decorative', 'Cases carry the logical work.', 'The conclusion must be secured in each branch.'),
    miss('Because disjunction means exactly one side is true in all logics', 'Inclusive disjunction may allow both; proof by cases still covers each side.', 'Do not rely on exclusivity.'),
  ], 'openlogic::sets-functions-relations/sets/proofs-about-sets.tex::1'),
])

export const openLogicProjectPhilosophyQuestions = makeQuestionBank('University', [
  formal(462201, 'Philosophical Logic', 'Common Knowledge Reading', 'In epistemic logic, a statement that everyone in a group knows, everyone knows that everyone knows, and so on is called:', 'Common knowledge', [
    miss('A private sensation', 'Private access is the opposite direction from group iterated knowledge.', 'Think group-level iteration.'),
    miss('A material conditional', 'A conditional is a connective, not a group knowledge state.', 'This is modal/epistemic vocabulary.'),
    miss('A counterexample', 'A counterexample refutes a general claim.', 'The question is about knowledge operators.'),
  ], 'openlogic::applied-modal-logic/epistemic-logic/truth-at-w.tex::1'),
  formal(462202, 'Philosophical Logic', 'Possible Worlds', 'In modal logic, evaluating a formula at a world mainly means asking:', 'Whether the formula is true at that point in the model', [
    miss('Whether the formula is printed on that page of the book', 'Worlds are semantic points, not page locations.', 'Evaluate truth in the model.'),
    miss('Whether every natural number is finite', 'That is arithmetic, not modal evaluation.', 'Focus on truth at a world.'),
    miss('Whether no accessibility relation exists', 'Many modal evaluations use accessibility relations.', 'World-relative truth is the core.'),
  ], 'openlogic::normal-modal-logic/syntax-and-semantics/truth-at-w.tex::1'),
])

export const openLogicProjectDataStructuresQuestions = makeQuestionBank('Software', [
  ds(462301, 'Sets', 'Empty Set Uniqueness', 'Why is there at most one empty set?', 'Any two sets with no elements have exactly the same elements, so extensionality makes them equal', [
    miss('Because empty sets are not sets', 'The empty set is a set.', 'Use extensional equality.'),
    miss('Because one empty set has more elements than the other', 'Both have no elements.', 'There is no element-level difference.'),
    miss('Because equality ignores membership', 'Set equality is determined by membership.', 'Extensionality is the key.'),
  ], 'openlogic::sets-functions-relations/sets/basics.tex::1'),
  ds(462302, 'Sets', 'Ordered Pair Equality', 'If ordered pairs (a,b) and (c,d) are equal, what must be true?', 'a = c and b = d', [
    miss('a = d and b = c', 'That swaps the order.', 'Ordered pairs preserve first and second position.'),
    miss('Only a = c is required', 'Both coordinates must match.', 'Check both slots.'),
    miss('The pairs are equal whenever the four objects are in one set', 'Membership in a shared set is not ordered-pair equality.', 'Use coordinate equality.'),
  ], 'openlogic::sets-functions-relations/sets/pairs-and-products.tex::1'),
  ds(462303, 'Sets', 'Cartesian Product Size', 'If A has n elements, how many elements does A^k have for k >= 1?', 'n^k', [
    miss('n + k', 'Cartesian powers multiply choices for each coordinate.', 'Each of k positions has n choices.'),
    miss('k^n', 'The exponent tracks the number of coordinates.', 'Base is the size of A.'),
    miss('2^n', 'That is the size of the power set of A.', 'This is ordered k-tuples.'),
  ], 'openlogic::sets-functions-relations/sets/pairs-and-products.tex::3'),
  ds(462304, 'Sets', 'Subsets of Four Elements', 'A set with four distinct elements has how many subsets?', '16', [
    miss('4', 'Each element can be included or excluded.', 'Use 2^n.'),
    miss('8', 'That is the count for three elements.', 'Double once more for the fourth element.'),
    miss('24', 'That counts permutations of four elements, not subsets.', 'Order does not matter for subsets.'),
  ], 'openlogic::sets-functions-relations/sets/subsets.tex::1'),
  ds(462305, 'Sets', 'Power Set Size', 'If A has n elements, the power set of A has:', '2^n elements', [
    miss('n^2 elements', 'That is not the subset-counting rule.', 'Each element is in or out.'),
    miss('n elements', 'A and its power set usually differ in size.', 'Count all subsets.'),
    miss('No elements unless A is empty', 'Every set has subsets, including the empty set.', 'Power set always includes at least empty set.'),
  ], 'openlogic::sets-functions-relations/sets/subsets.tex::2'),
  ds(462306, 'Sets', 'Union Absorption', 'If A is a subset of B, what is A union B?', 'B', [
    miss('A', 'A intersection B would be A under this condition.', 'Union with the larger set gives the larger set.'),
    miss('The empty set', 'Subset inclusion does not imply both sets are empty.', 'All elements are already in B.'),
    miss('A set outside both A and B', 'Union contains elements from A or B.', 'Nothing new outside B is added.'),
  ], 'openlogic::sets-functions-relations/sets/unions-and-intersections.tex::1'),
  ds(462307, 'Sets', 'Intersection Absorption', 'If A is a subset of B, what is A intersection B?', 'A', [
    miss('B', 'That would be the union result when A is contained in B.', 'Intersection keeps only the overlap.'),
    miss('Everything not in A', 'That describes a complement-like idea.', 'Intersection is shared membership.'),
    miss('A cartesian product', 'Intersection is a set operation, not ordered pairs.', 'Use overlap.'),
  ], 'openlogic::sets-functions-relations/sets/unions-and-intersections.tex::2'),
  ds(462308, 'Sets', 'Subset Transitivity', 'If A is a subset of B and B is a subset of C, what follows?', 'A is a subset of C', [
    miss('C is a subset of A', 'That reverses the direction.', 'Containment chains forward.'),
    miss('A and C are disjoint', 'Nested sets are not generally disjoint.', 'Elements of A pass through B into C.'),
    miss('B has no elements', 'The premises do not imply emptiness.', 'Use transitivity of inclusion.'),
  ], 'openlogic::sets-functions-relations/sets/unions-and-intersections.tex::3'),
  ds(462309, 'Functions', 'Composition of Injections', 'If f: A -> B and g: B -> C are both injective, what can you conclude about g composed with f?', 'It is injective', [
    miss('It is automatically constant', 'Injective functions avoid collisions; constant functions usually create them.', 'Track distinct inputs.'),
    miss('It is not a function', 'Composition of compatible functions is a function.', 'The codomain/domain match.'),
    miss('It must fail to be injective', 'Composition preserves injectivity here.', 'If outputs match, work backward through g and f.'),
  ], 'openlogic::sets-functions-relations/functions/composition.tex::1'),
  ds(462310, 'Functions', 'Composition of Surjections', 'If f: A -> B and g: B -> C are both surjective, what can you conclude about g composed with f?', 'It is surjective', [
    miss('It cannot hit any element of C', 'Surjectivity says every element is hit.', 'Choose a preimage through g, then through f.'),
    miss('It is injective but never surjective', 'Surjectivity, not injectivity, is preserved by these premises.', 'Track coverage of C.'),
    miss('It has two outputs for every input', 'That would violate being a function.', 'Composition still gives one output per input.'),
  ], 'openlogic::sets-functions-relations/functions/composition.tex::2'),
  ds(462311, 'Functions', 'Left Inverse', 'If a function f has a left inverse g with g(f(x)) = x, what property of f follows?', 'f is injective', [
    miss('f is necessarily constant', 'A constant function on a multi-element domain cannot have a left inverse.', 'Left inverse separates inputs.'),
    miss('f has no domain', 'The statement assumes f is a function from a domain.', 'Use the inverse equation.'),
    miss('f is automatically not a function', 'Having a left inverse is a function property.', 'It supports one-to-one behavior.'),
  ], 'openlogic::sets-functions-relations/functions/inverses.tex::1'),
  ds(462312, 'Functions', 'Right Inverse', 'If a function f has a right inverse h with f(h(y)) = y for every y in the codomain, what property of f follows?', 'f is surjective', [
    miss('f is injective only', 'A right inverse guarantees every codomain element is hit.', 'It is about coverage.'),
    miss('f maps every input to two outputs', 'That would violate functionhood.', 'The inverse equation supplies preimages.'),
    miss('f has an empty codomain in every case', 'The property is not codomain emptiness.', 'Every y has h(y) as a preimage.'),
  ], 'openlogic::sets-functions-relations/functions/inverses.tex::2'),
  ds(462313, 'Functions', 'Bijection Inverse', 'A two-sided inverse function exists for f: A -> B when f is:', 'Bijective', [
    miss('Only many-to-one', 'Many-to-one behavior blocks a well-defined two-sided inverse.', 'Need one-to-one and onto.'),
    miss('Only defined on no inputs', 'The general inverse theorem is about bijections.', 'Use both injective and surjective.'),
    miss('A relation that is not a function', 'The source exercise concerns functions.', 'Invertible functions are bijections.'),
  ], 'openlogic::sets-functions-relations/functions/inverses.tex::3'),
  ds(462314, 'Functions', 'Partial Inverse Domain', 'The partial inverse described for f is defined at y when:', 'There is a unique x with f(x) = y', [
    miss('There are two or more different x-values with f(x) = y', 'Then the inverse value would be ambiguous.', 'Partial inverse needs uniqueness.'),
    miss('There is no x with f(x) = y', 'Then y is not hit by f.', 'No preimage means no inverse value.'),
    miss('y is written before x alphabetically', 'Notation order is irrelevant.', 'Use the unique-preimage condition.'),
  ], 'openlogic::sets-functions-relations/functions/partial-functions.tex::1'),
  ds(462315, 'Relations', 'Equivalence Relation', 'To show a relation is an equivalence relation, you must show it is:', 'Reflexive, symmetric, and transitive', [
    miss('Injective, surjective, and bijective', 'Those classify functions, not relations as equivalence relations.', 'Use the three relation properties.'),
    miss('Only transitive', 'Transitivity alone is not enough.', 'Need all three.'),
    miss('Irreflexive and asymmetric only', 'Those fit strict-order style relations, not equivalence.', 'Equivalence behaves like sameness.'),
  ], 'openlogic::sets-functions-relations/relations/equivalence-relations.tex::1'),
  ds(462316, 'Relations', 'Relation as a Graph', 'A binary relation on a finite set can be drawn as a directed graph where arrows represent:', 'Ordered pairs in the relation', [
    miss('Subsets of the power set only', 'A relation is represented by pairs, not arbitrary subsets.', 'Each arrow is from first coordinate to second.'),
    miss('Truth-table rows for unrelated propositions', 'Graph arrows encode related objects.', 'Use ordered pairs.'),
    miss('Only elements not in the set', 'The relation is on the given set.', 'Vertices are set elements.'),
  ], 'openlogic::sets-functions-relations/relations/graphs.tex::1'),
  ds(462317, 'Relations', 'Transitive Closure', 'The transitive closure of R is designed to be:', 'The smallest transitive relation containing R', [
    miss('A relation that removes every path of length two', 'Transitive closure adds what is needed for transitivity.', 'It closes paths, it does not erase them.'),
    miss('A function from R to the empty set', 'Closure is a relation operation.', 'Stay with relation containment.'),
    miss('Any relation disjoint from R', 'It must contain R.', 'Closure extends the original relation.'),
  ], 'openlogic::sets-functions-relations/relations/operations.tex::1'),
  ds(462318, 'Relations', 'Strict Order from Partial Order', 'Given a partial order <=, the associated strict order is usually defined by:', 'a < b iff a <= b and a != b', [
    miss('a < b iff b <= a and a = b', 'That reverses and collapses the strict relation.', 'Strict means comparable and distinct in the forward direction.'),
    miss('a < b iff neither a nor b is in the set', 'Order relations are on elements of the set.', 'Use <= plus nonidentity.'),
    miss('a < b iff every element equals every other element', 'That is not a strict order definition.', 'Remove equality from the partial order.'),
  ], 'openlogic::sets-functions-relations/relations/orders.tex::1'),
  ds(462319, 'Relations', 'Reflexive Symmetric Not Transitive', 'Which example type can be reflexive and symmetric but fail transitivity?', 'A relation where each object is related to itself and some two-way links do not close into a third link', [
    miss('A relation with no self-links at all', 'That cannot be reflexive on a nonempty set.', 'Reflexivity requires self-pairs.'),
    miss('A relation where every two-step chain always closes', 'That would be transitive.', 'You need a failed two-step chain.'),
    miss('A relation that is not made of ordered pairs', 'Binary relations are sets of ordered pairs.', 'Use pair properties.'),
  ], 'openlogic::sets-functions-relations/relations/special-properties.tex::1'),
])
