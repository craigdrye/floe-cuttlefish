import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: Open Logic Project raw collection. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from Open Logic Project coverage',
})

export const formalLogicWorkoutGeneratedQuestions = makeQuestionBank('University', [
  q(395001, 'Propositional Logic', 'Negation', 'If P is true, then not-P is:', 'False', [
    miss('True', 'Negation flips the truth value.', 'Use the simplest truth table row.'),
    miss('Both true and false', 'Classical logic does not allow both for one sentence in one valuation.', 'Use bivalence.'),
    miss('Neither true nor false', 'Classical propositional logic assigns a truth value.', 'Negation has a determinate value.'),
  ]),
  q(395002, 'Propositional Logic', 'Conjunction', 'The conjunction P and Q is true exactly when:', 'Both P and Q are true', [
    miss('At least one of P or Q is true', 'That is inclusive disjunction.', 'And requires both sides.'),
    miss('P is false and Q is true', 'A false conjunct makes the whole conjunction false.', 'Both conjuncts must hold.'),
    miss('P and Q have the same letter count', 'Surface form is irrelevant.', 'Use truth values.'),
  ]),
  q(395003, 'Propositional Logic', 'Disjunction', 'In classical inclusive logic, P or Q is false exactly when:', 'Both P and Q are false', [
    miss('Both P and Q are true', 'Inclusive or is true when both are true.', 'Only the double-false row fails.'),
    miss('P is true and Q is false', 'One true disjunct is enough.', 'Or needs at least one true side.'),
    miss('P and Q are different atomic letters', 'The names of atoms do not determine truth.', 'Check truth values.'),
  ]),
  q(395004, 'Propositional Logic', 'Biconditional', 'P if and only if Q is true when:', 'P and Q have the same truth value', [
    miss('P is true and Q is false', 'That is a mismatch.', 'Biconditional means same truth value.'),
    miss('P is false and Q is true', 'That is also a mismatch.', 'Both true or both false work.'),
    miss('Q is longer than P', 'Length has no semantic role.', 'Use truth values, not notation length.'),
  ]),
  q(395005, 'Propositional Logic', 'Entailment', 'Gamma entails C means:', 'Every valuation or model that satisfies Gamma also satisfies C', [
    miss('C appears alphabetically after Gamma', 'Entailment is semantic, not alphabetical.', 'Think truth preservation.'),
    miss('Gamma and C are both short formulas', 'Formula length is irrelevant.', 'Use models where premises are true.'),
    miss('C is false whenever Gamma is true', 'That is the opposite of entailment.', 'Entailment preserves truth.'),
  ]),
  q(395006, 'Truth Tables', 'Truth table purpose', 'A truth table is mainly used to:', 'Evaluate all truth-value cases for a formula or argument', [
    miss('Count the number of words in a sentence', 'Truth tables track truth values, not grammar length.', 'Rows represent valuations.'),
    miss('Choose names for predicates', 'Predicate interpretation is first-order semantics.', 'Truth tables are propositional tools.'),
    miss('Prove a historical claim', 'Truth tables are formal logical tools.', 'Stay with propositional cases.'),
  ]),
  q(395007, 'Truth Tables', 'Rows for atoms', 'A truth table with 3 distinct atomic sentence letters has how many rows?', '8', [
    miss('3', 'Each atom can be true or false, so cases multiply.', 'Use 2^n.'),
    miss('6', 'That multiplies by 2 incorrectly for this setting.', 'For 3 atoms, compute 2*2*2.'),
    miss('9', 'That squares the number of atoms.', 'Truth assignments are binary choices.'),
  ]),
  q(395008, 'Truth Tables', 'Tautological consequence', 'To test whether P entails Q by truth table, look for:', 'A row where P is true and Q is false', [
    miss('A row where Q is true', 'A true conclusion row does not refute entailment.', 'Counterexamples need true premise and false conclusion.'),
    miss('A row where P is false', 'False premise rows do not threaten entailment.', 'Focus on premise-true rows.'),
    miss('A row with no atomic letters', 'Truth tables are built from atomic assignments.', 'Use rows with valuations.'),
  ]),
  q(395009, 'Proof Rules', 'Modus tollens', 'From P -> Q and not-Q, which follows by modus tollens?', 'not-P', [
    miss('Q', 'Q is explicitly denied.', 'Denying the consequent denies the antecedent.'),
    miss('P', 'That would conflict with the conditional and not-Q.', 'Use modus tollens, not modus ponens.'),
    miss('Q -> P', 'The rule does not reverse the conditional.', 'Infer the negated antecedent.'),
  ]),
  q(395010, 'Proof Rules', 'Disjunction introduction', 'If you have proven A, which line can you infer by disjunction introduction?', 'A or B', [
    miss('A and B', 'Conjunction requires both A and B.', 'Or only needs one side.'),
    miss('not-A', 'Nothing here licenses negation.', 'You can weaken A into a disjunction.'),
    miss('B only', 'A alone does not prove arbitrary B.', 'The safe inference is A or B.'),
  ]),
  q(395011, 'Proof Rules', 'Disjunction elimination', 'To use disjunction elimination on A or B, you usually need:', 'A route from A to C and a route from B to C', [
    miss('Only a proof of A', 'That ignores the B branch.', 'Both disjuncts must support the same conclusion.'),
    miss('Only a proof that C is false', 'That does not eliminate the disjunction.', 'Build cases to C.'),
    miss('A truth table with no rows', 'The proof rule needs case derivations.', 'Use proof branches.'),
  ]),
  q(395012, 'Proof Rules', 'Reductio', 'A proof by contradiction typically assumes:', 'The negation of what it wants to prove', [
    miss('The conclusion directly with no work', 'That would beg the question.', 'Assume the opposite and derive contradiction.'),
    miss('Every premise is false', 'Reductio does not generally deny all premises.', 'Target the desired conclusion.'),
    miss('A random unrelated sentence', 'The assumption must connect to the target.', 'Use not-C to prove C.'),
  ]),
  q(395013, 'First-Order Syntax', 'Term', 'In first-order logic, which is usually a term?', 'A constant symbol such as a', [
    miss('The connective and', 'Connectives build formulas, not terms.', 'Terms refer to objects.'),
    miss('The quantifier forall', 'Quantifiers bind variables in formulas.', 'Terms are names, variables, or function applications.'),
    miss('A full sentence such as Pa', 'That is a formula, not a term.', 'Terms can occupy argument places.'),
  ]),
  q(395014, 'First-Order Syntax', 'Atomic formula', 'Which expression is an atomic formula in a simple first-order language?', 'R(a, b)', [
    miss('not R(a, b)', 'Negation makes it molecular, not atomic.', 'Atomic formulas have no connectives.'),
    miss('forall x R(x, a)', 'A quantifier makes it non-atomic.', 'Atomic means predicate applied to terms.'),
    miss('a', 'A constant alone is a term, not a formula.', 'Formulas can be true or false.'),
  ]),
  q(395015, 'First-Order Syntax', 'Scope', 'In forall x (Fx -> Gx), the scope of forall x is:', 'The whole formula Fx -> Gx inside the parentheses', [
    miss('Only the first letter F', 'Quantifier scope is structural, not one character.', 'Parentheses mark the scope.'),
    miss('Only Gx', 'The quantifier occurs before the whole parenthesized formula.', 'Read the parentheses.'),
    miss('No part of the formula', 'The quantifier has an explicit scope.', 'Everything inside the parentheses is governed.'),
  ]),
  q(395016, 'First-Order Syntax', 'Bound variable', 'In exists x (Fx and Gx), the occurrences of x are:', 'Bound by exists x', [
    miss('Free', 'They occur within the scope of a matching quantifier.', 'Check for exists x.'),
    miss('Predicate symbols', 'x is a variable, not a predicate.', 'F and G are predicates.'),
    miss('Connectives', 'and is the connective.', 'x is the bound variable.'),
  ]),
  q(395017, 'Quantifiers', 'Universal instantiation', 'From forall x Fx, what may you infer for a particular object a?', 'Fa', [
    miss('not-Fa', 'Universal affirmation does not imply its negation.', 'Instantiate the universal claim.'),
    miss('exists x not-Fx', 'That contradicts the universal claim in many settings.', 'Use the named instance.'),
    miss('forall x not-Fx', 'The polarity is reversed.', 'Keep F positive.'),
  ]),
  q(395018, 'Quantifiers', 'Existential generalization', 'From Fa, which inference is usually allowed?', 'exists x Fx', [
    miss('forall x Fx', 'One instance does not prove all instances.', 'Existential is weaker than universal.'),
    miss('not exists x Fx', 'Fa provides a witness.', 'A witness supports existence.'),
    miss('exists x not-Fx', 'The predicate has been negated incorrectly.', 'Generalize the same property.'),
  ]),
  q(395019, 'Quantifiers', 'Negated universal', 'not forall x Fx is classically equivalent to:', 'exists x not-Fx', [
    miss('forall x not-Fx', 'Not all does not mean none.', 'One counterexample is enough.'),
    miss('exists x Fx', 'That does not deny the universal.', 'You need an object failing F.'),
    miss('forall x Fx', 'That is the original claim.', 'Move negation across the quantifier carefully.'),
  ]),
  q(395020, 'Quantifiers', 'Negated existential', 'not exists x Fx is classically equivalent to:', 'forall x not-Fx', [
    miss('exists x not-Fx', 'At least one non-F does not rule out an F.', 'No F means every object is non-F.'),
    miss('forall x Fx', 'That is the opposite of no F.', 'Push the negation through exists.'),
    miss('not forall x Fx', 'That means not all are F, which is weaker.', 'No F is stronger.'),
  ]),
  q(395021, 'Identity', 'Identity predicate', 'In first-order logic with identity, a = b says:', 'a and b refer to the same object', [
    miss('a is alphabetically before b', 'Identity is semantic equality, not ordering.', 'It says same object.'),
    miss('a and b are different objects', 'That is inequality.', 'Equality collapses reference.'),
    miss('a causes b', 'Identity is not causation.', 'Use sameness, not influence.'),
  ]),
  q(395022, 'Identity', 'Reflexivity', 'The identity principle a = a is an example of:', 'Reflexivity', [
    miss('Symmetry only', 'Symmetry says if a = b then b = a.', 'a equals itself is reflexive.'),
    miss('Transitivity only', 'Transitivity links three terms.', 'Self-identity is reflexive.'),
    miss('Irreflexivity', 'Identity is reflexive, not irreflexive.', 'Every object is identical to itself.'),
  ]),
  q(395023, 'Sets', 'Empty set', 'The empty set is:', 'The set with no elements', [
    miss('A set containing every object', 'That would be a universal set in a context.', 'Empty means no members.'),
    miss('A set containing exactly zero as an element', 'A set containing 0 has one element.', 'Do not confuse no elements with the number 0.'),
    miss('Not a set at all', 'The empty set is a set.', 'It is the smallest set by membership.'),
  ]),
  q(395024, 'Sets', 'Union', 'The union A U B contains:', 'Everything in A or in B or in both', [
    miss('Only elements in both A and B', 'That is intersection.', 'Union uses or.'),
    miss('Only elements in A but not B', 'That is set difference.', 'Union combines membership.'),
    miss('No elements unless A equals B', 'Union does not require equality.', 'Any element from either set counts.'),
  ]),
  q(395025, 'Sets', 'Intersection', 'The intersection A intersect B contains:', 'Elements that are in both A and B', [
    miss('Elements in A or B or both', 'That is union.', 'Intersection requires shared membership.'),
    miss('Elements in neither A nor B', 'That is outside both sets.', 'Look for overlap.'),
    miss('Only the largest element of A', 'Intersection is not about largest values.', 'It is about common elements.'),
  ]),
  q(395026, 'Sets', 'Set difference', 'A minus B contains:', 'Elements in A that are not in B', [
    miss('Elements in B that are not in A', 'That is B minus A.', 'Order matters in set difference.'),
    miss('Elements in both A and B', 'That is intersection.', 'Difference removes B-members from A.'),
    miss('All elements in either set', 'That is union.', 'Start with A, remove B.'),
  ]),
  q(395027, 'Sets', 'Power set', 'The power set of A is:', 'The set of all subsets of A', [
    miss('The set of all elements not in A', 'That is complement relative to a universe.', 'Power set collects subsets.'),
    miss('The largest number in A', 'Power set is not a maximum operation.', 'It is a set of sets.'),
    miss('A with every element squared', 'Power set has nothing to do with numeric powers.', 'The name is misleading if read arithmetically.'),
  ]),
  q(395028, 'Relations', 'Binary relation', 'A binary relation on a set A is typically a set of:', 'Ordered pairs from A', [
    miss('Single isolated elements only', 'Unary properties concern single elements.', 'Binary relations connect pairs.'),
    miss('Truth-table columns only', 'Relations are set-theoretic objects here.', 'Use ordered pairs.'),
    miss('Proof rules', 'Proof rules are syntactic, not binary relation elements.', 'Think pairs like (a, b).'),
  ]),
  q(395029, 'Relations', 'Symmetric relation', 'A relation R is symmetric when:', 'If aRb, then bRa', [
    miss('If aRb and bRc, then aRc', 'That is transitivity.', 'Symmetry reverses order.'),
    miss('Every a is related to itself', 'That is reflexivity.', 'Symmetry is about pairs going both ways.'),
    miss('No object is related to itself', 'That is irreflexivity.', 'Symmetry does not ban self-pairs.'),
  ]),
  q(395030, 'Relations', 'Transitive relation', 'A relation R is transitive when:', 'If aRb and bRc, then aRc', [
    miss('If aRb, then bRa', 'That is symmetry.', 'Transitivity chains relations.'),
    miss('Every object relates to itself', 'That is reflexivity.', 'Look for a two-step chain.'),
    miss('No ordered pairs are allowed', 'A relation can be transitive with pairs.', 'The rule concerns compatible pairs.'),
  ]),
  q(395031, 'Relations', 'Equivalence relation', 'An equivalence relation must be:', 'Reflexive, symmetric, and transitive', [
    miss('Only transitive', 'Transitivity alone is not enough.', 'Equivalence needs three properties.'),
    miss('Reflexive and irreflexive', 'Those conflict for nonempty sets.', 'Use the standard trio.'),
    miss('Symmetric and numerical only', 'Relations need not be numerical.', 'Equivalence abstracts sameness.'),
  ]),
  q(395032, 'Relations', 'Function as relation', 'A function from A to B assigns:', 'Each element of A exactly one output in B', [
    miss('Each element of A every output in B', 'That is too many outputs for a function.', 'Exactly one output per input.'),
    miss('Some elements of A no output by definition', 'A total function assigns every input.', 'Unless partial functions are specified, use total function.'),
    miss('Outputs with no inputs only', 'A function is organized by inputs from A.', 'Start with domain elements.'),
  ]),
  q(395033, 'Functions', 'Injective', 'An injective function is one where:', 'Different inputs always have different outputs', [
    miss('Every possible output is hit', 'That is surjective.', 'Injective means no two inputs collapse together.'),
    miss('Every input has two outputs', 'That violates functionhood.', 'A function has one output per input.'),
    miss('The domain is empty only', 'Empty functions can be injective, but injectivity is more general.', 'Use the no-collisions idea.'),
  ]),
  q(395034, 'Functions', 'Surjective', 'A surjective function from A to B is one where:', 'Every element of B is hit by at least one input from A', [
    miss('Different inputs always have different outputs', 'That is injective.', 'Surjective means onto the codomain.'),
    miss('No element of B is hit', 'That is the opposite of surjective unless B is empty.', 'Every codomain element needs a preimage.'),
    miss('A and B are predicates', 'A and B are sets in this context.', 'Use domain and codomain.'),
  ]),
  q(395035, 'Functions', 'Bijective', 'A bijection is:', 'Both injective and surjective', [
    miss('Neither injective nor surjective', 'That is the opposite.', 'Bijections pair elements exactly.'),
    miss('Only a relation with no outputs', 'A bijection is a special function.', 'It is one-to-one and onto.'),
    miss('A proof by contradiction', 'That is a proof method, not a function property.', 'Use function vocabulary.'),
  ]),
  q(395036, 'Modal Logic', 'Possible worlds', 'In modal semantics, possible worlds are used to evaluate:', 'Modal claims about necessity and possibility', [
    miss('Only arithmetic addition', 'Modal semantics is not primarily arithmetic.', 'Worlds represent alternative ways things might be.'),
    miss('The number of proof pages', 'Page count is irrelevant.', 'Modal operators range over accessible worlds.'),
    miss('Only grammar punctuation', 'Possible worlds are semantic tools.', 'Think necessity and possibility.'),
  ]),
  q(395037, 'Modal Logic', 'Necessity', 'Box P is true at a world w when:', 'P is true at every relevant accessible world from w', [
    miss('P is false at every accessible world', 'That would support necessity of not-P.', 'Box means all accessible worlds satisfy P.'),
    miss('P is true at exactly one world only', 'That is closer to a weak possibility condition.', 'Necessity checks all relevant worlds.'),
    miss('P has no truth value', 'Classical modal semantics still evaluates truth at worlds.', 'Use accessible worlds.'),
  ]),
  q(395038, 'Modal Logic', 'Possibility', 'Diamond P is true at a world w when:', 'P is true at at least one relevant accessible world from w', [
    miss('P is true at every accessible world', 'That is necessity.', 'Possibility needs one accessible witness.'),
    miss('P is false at every accessible world', 'Then P is not possible relative to w.', 'Find one accessible world with P true.'),
    miss('P is not a formula', 'The operator applies to a formula.', 'Use modal truth conditions.'),
  ]),
  q(395039, 'Computability', 'Computable function', 'Informally, a computable function is one whose values can be found by:', 'An effective step-by-step procedure', [
    miss('A guess with no method', 'Computability requires an effective procedure.', 'Think algorithm.'),
    miss('Only a physical calculator brand', 'The model is mathematical, not brand-specific.', 'Use procedure, not device.'),
    miss('A sentence being grammatically correct', 'Grammar is not computability.', 'Focus on algorithms.'),
  ]),
  q(395040, 'Computability', 'Decidable set', 'A decidable set is one where membership can be:', 'Correctly answered yes or no by an algorithm that halts', [
    miss('Answered only when the answer is yes', 'That describes semidecision/recognition, not full decidability.', 'Decidable halts on both yes and no cases.'),
    miss('Never answered by any method', 'That would be undecidable or worse.', 'Decidable means an algorithm exists.'),
    miss('Decided by alphabetical order only', 'Membership is not generally alphabetical.', 'Use halting yes/no procedure.'),
  ]),
  q(395041, 'Computability', 'Semidecidable set', 'A semidecision procedure for a set must halt when:', 'The input is in the set', [
    miss('The input is not in the set', 'That would semidecide the complement.', 'Recognition guarantees yes cases.'),
    miss('Every input is outside the set', 'That is not the definition.', 'Focus on behavior for members.'),
    miss('No input is ever processed', 'A procedure must process inputs.', 'It may run forever on nonmembers.'),
  ]),
  q(395042, 'Computability', 'Reduction intuition', 'A reduction from problem A to problem B is useful because it:', 'Shows how solving B would let us solve A', [
    miss('Shows A has no connection to B', 'A reduction creates a precise connection.', 'Transform A-instances into B-instances.'),
    miss('Deletes both problems', 'Reduction is not deletion.', 'It transfers solvability information.'),
    miss('Only changes notation style', 'A real reduction preserves answer structure.', 'It is not cosmetic.'),
  ]),
  q(395043, 'Computability', 'Halting problem', 'The halting problem asks whether:', 'A given program eventually stops on a given input', [
    miss('A program uses a serif font', 'Font is irrelevant to computation.', 'Halting is about stopping behavior.'),
    miss('A proof contains a universal quantifier', 'That is logic syntax, not the halting problem.', 'Think programs and inputs.'),
    miss('A set has an empty intersection', 'That is set theory.', 'Use computation vocabulary.'),
  ]),
  q(395044, 'Proof Theory', 'Soundness', 'A proof system is sound when:', 'Everything provable in it is semantically valid', [
    miss('Every valid sentence is provable', 'That is completeness.', 'Soundness goes from proof to truth.'),
    miss('No sentence is ever provable', 'That is not the intended property.', 'Soundness allows proofs, but only good ones.'),
    miss('It uses short symbols only', 'Notation length is irrelevant.', 'Match syntax to semantics.'),
  ]),
  q(395045, 'Proof Theory', 'Completeness', 'A proof system is complete when:', 'Every semantically valid target can be proved in it', [
    miss('Every provable target is semantically valid', 'That is soundness.', 'Completeness goes from truth/validity to proof.'),
    miss('Every formula is provable', 'That would be disastrous in ordinary systems.', 'Only valid targets should be guaranteed.'),
    miss('No formulas require rules', 'Rules are how proofs are built.', 'Completeness is about enough rules.'),
  ]),
  q(395046, 'Proof Theory', 'Consistency', 'A theory is inconsistent if:', 'It proves a contradiction or both a sentence and its negation', [
    miss('It has more than one axiom', 'Many consistent theories have many axioms.', 'Inconsistency is about contradiction.'),
    miss('It contains a long formula', 'Length does not determine consistency.', 'Look for P and not-P.'),
    miss('It has a model', 'Having a model usually indicates consistency for standard systems.', 'Contradictions block models.'),
  ]),
  q(395047, 'Model Theory', 'Satisfiable set', 'A set of sentences is satisfiable when:', 'There is at least one model in which all of them are true', [
    miss('Every sentence is false in every model', 'That is not satisfiable.', 'Find one model making all true.'),
    miss('The sentences are printed in order', 'Ordering is irrelevant to satisfiability.', 'Use models and truth.'),
    miss('No interpretation is allowed', 'Models provide interpretations.', 'Satisfiable means some interpretation works.'),
  ]),
  q(395048, 'Model Theory', 'Theory', 'In logic, a theory is often treated as:', 'A set of sentences closed or studied under consequence', [
    miss('Only a personal guess with no sentences', 'Formal theories are sets of sentences or axioms.', 'Use formal commitments.'),
    miss('A single punctuation mark', 'A theory has content.', 'Think axioms and consequences.'),
    miss('A random truth table row', 'A theory is not one valuation row.', 'It is a collection of claims.'),
  ]),
  q(395049, 'Metatheory', 'Object language', 'The object language is:', 'The formal language being studied', [
    miss('The language used to talk about the formal language', 'That is the metalanguage.', 'Object language is the target.'),
    miss('Only spoken English', 'Object languages can be symbolic formal languages.', 'It is what the theory studies.'),
    miss('A set of physical objects', 'Object language is linguistic, not a box of objects.', 'The name can mislead.'),
  ]),
  q(395050, 'Metatheory', 'Metalanguage', 'The metalanguage is:', 'The language used to describe or reason about the object language', [
    miss('The formal language being directly interpreted', 'That is the object language.', 'Meta means one level up.'),
    miss('A modal operator', 'Modal operators are symbols inside a language.', 'Metalanguage talks about symbols and truth.'),
    miss('A relation that must be symmetric', 'That is relation theory, not metalanguage.', 'Use language-level distinction.'),
  ]),
])
