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
    'Coverage source: Open Logic Project raw collection. This is an authored Floe-native conversion item, not a direct proof-exercise import.',
  source: 'Open Logic Project/OER formal logic coverage',
})

export const formalLogicOpenLogicBatchQuestions = makeQuestionBank('University', [
  q(455001, 'Arguments and Consequence', 'Premise role', 'In a deductive argument, a premise is best understood as:', 'A statement offered as support for the conclusion', [
    miss('The final claim being supported', 'That describes the conclusion.', 'Ask which statements are doing the supporting.'),
    miss('A question with no truth value', 'Premises in deductive logic are normally truth-evaluable statements.', 'Arguments work with claims.'),
    miss('Any sentence that appears first on the page', 'Position alone does not determine role.', 'Use function, not layout.'),
  ]),
  q(455002, 'Arguments and Consequence', 'Conclusion role', 'The conclusion of an argument is the claim that:', 'The premises are supposed to establish or support', [
    miss('Must always be written after the premises', 'Conclusions can appear before or between premises.', 'Look for argumentative role.'),
    miss('Cannot be false if the premises are false', 'False premises do not automatically decide the conclusion.', 'Validity is conditional.'),
    miss('Names the topic of the argument only', 'A topic is not yet a claim supported by reasons.', 'Find the supported statement.'),
  ]),
  q(455003, 'Validity and Soundness', 'Validity test', 'A deductive argument is valid exactly when:', 'There is no possible case where all premises are true and the conclusion is false', [
    miss('All of its premises are actually true', 'That is about soundness, not validity by itself.', 'Validity is structural truth preservation.'),
    miss('The conclusion sounds believable', 'Believability is not the formal test.', 'Search for a counterexample case.'),
    miss('It has at least three premises', 'Argument length does not determine validity.', 'A one-premise argument can be valid.'),
  ]),
  q(455004, 'Validity and Soundness', 'Soundness test', 'A sound deductive argument must be:', 'Valid and have all true premises', [
    miss('Invalid but persuasive', 'Persuasion is not soundness.', 'Soundness includes validity.'),
    miss('Valid with at least one false premise', 'False premises block soundness.', 'Sound means valid plus true premises.'),
    miss('Short enough to fit in a truth table', 'Length is irrelevant.', 'Check structure and premise truth.'),
  ]),
  q(455005, 'Validity and Soundness', 'Counterexample pattern', 'To show an argument is invalid, you need a possible case where:', 'The premises are true and the conclusion is false', [
    miss('The premises are false and the conclusion is true', 'False-premise rows do not refute validity.', 'Invalidity needs truth not preserved.'),
    miss('Every statement is false', 'That may not test the argument form.', 'Keep premises true and conclusion false.'),
    miss('The conclusion is unpopular', 'Popularity is irrelevant.', 'Use a possible truth-value assignment or model.'),
  ]),
  q(455006, 'Conditionals', 'Material conditional false row', 'In classical propositional logic, P -> Q is false exactly when:', 'P is true and Q is false', [
    miss('P is false and Q is false', 'A false antecedent makes the material conditional true.', 'Only true-to-false fails.'),
    miss('P is true and Q is true', 'That is the clear true case.', 'The promise is kept when Q follows P.'),
    miss('Q is true and P is false', 'That row is true for the material conditional.', 'Again, only P true and Q false fails.'),
  ]),
  q(455007, 'Conditionals', 'Necessary condition', 'If oxygen is necessary for the fire to burn, then:', 'The fire cannot burn without oxygen', [
    miss('Oxygen alone guarantees fire', 'Necessary does not mean sufficient.', 'It is required, not enough by itself.'),
    miss('Fire is necessary for oxygen', 'That reverses the dependency.', 'Ask what is required for what.'),
    miss('Oxygen and fire are unrelated', 'The statement asserts a requirement.', 'Necessary means cannot do without it.'),
  ]),
  q(455008, 'Conditionals', 'Sufficient condition', 'If submitting the form is sufficient for entering the raffle, then:', 'Submitting the form guarantees entry into the raffle', [
    miss('Entering the raffle guarantees the form was submitted', 'There may be other ways to enter.', 'Sufficient goes from condition to result.'),
    miss('Submitting the form is required for entry', 'Sufficient need not be necessary.', 'It is enough, not always required.'),
    miss('No one can enter the raffle', 'That contradicts the sufficiency claim.', 'The condition triggers the outcome.'),
  ]),
  q(455009, 'Conditionals', 'Affirming the consequent', 'Which form is the fallacy of affirming the consequent?', 'If P then Q; Q; therefore P', [
    miss('If P then Q; P; therefore Q', 'That is modus ponens.', 'Affirming the consequent starts from Q.'),
    miss('If P then Q; not-Q; therefore not-P', 'That is modus tollens.', 'This one denies the consequent.'),
    miss('P or Q; not-P; therefore Q', 'That is disjunctive syllogism.', 'Look for conditional reversal.'),
  ]),
  q(455010, 'Conditionals', 'Denying the antecedent', 'Which form is the fallacy of denying the antecedent?', 'If P then Q; not-P; therefore not-Q', [
    miss('If P then Q; not-Q; therefore not-P', 'That is valid modus tollens.', 'Denying the antecedent starts with not-P.'),
    miss('If P then Q; P; therefore Q', 'That is valid modus ponens.', 'Do not reject the valid conditional rule.'),
    miss('P and Q; therefore P', 'That is conjunction elimination.', 'The fallacy is about a conditional.'),
  ]),
  q(455011, 'Truth Tables', 'Recognizing tautologies', 'When every row of a completed truth table for a formula is T, the formula is:', 'Tautological', [
    miss('Contradictory', 'A contradiction has F on every row.', 'All true rows point the other way.'),
    miss('Contingent', 'A contingent formula has a mix of true and false rows.', 'There is no false row here.'),
    miss('Invalid', 'Invalidity applies to arguments; this is a single-formula classification.', 'Classify the formula by its rows.'),
  ]),
  q(455012, 'Truth Tables', 'Contradiction meaning', 'A contradiction is a sentence that is:', 'False under every truth-value assignment', [
    miss('True under every assignment', 'That is a tautology.', 'Contradictions cannot be true.'),
    miss('Sometimes true and sometimes false', 'That is contingency.', 'Every row must fail.'),
    miss('A sentence with two connectives', 'Number of connectives does not decide status.', 'Evaluate all rows.'),
  ]),
  q(455013, 'Truth Tables', 'Contingency meaning', 'A contingent sentence is:', 'True on some assignments and false on others', [
    miss('True on every assignment', 'That is tautological.', 'Contingent means truth depends on the valuation.'),
    miss('False on every assignment', 'That is contradictory.', 'Look for mixed rows.'),
    miss('Not allowed in propositional logic', 'Most ordinary formulas are contingent.', 'It is a standard category.'),
  ]),
  q(455014, 'Truth Tables', 'Rows from atoms', 'A truth table with 4 distinct atomic sentence letters has how many rows?', '16', [
    miss('4', 'Each atom has two choices, so rows are not just the number of atoms.', 'Use 2^n.'),
    miss('8', 'That is the count for 3 atoms.', 'Double again for the fourth atom.'),
    miss('12', 'Rows are powers of two in this setup.', 'Compute 2*2*2*2.'),
  ]),
  q(455015, 'Connectives', 'De Morgan conjunction', 'Which formula is equivalent to not-(P and Q)?', 'not-P or not-Q', [
    miss('not-P and not-Q', 'That is stronger than the original negated conjunction.', 'Only one conjunct needs to fail.'),
    miss('P or Q', 'That drops the negation incorrectly.', 'Push the negation through and flip the connective.'),
    miss('P and not-Q', 'That covers only one way for the conjunction to fail.', 'Either side can fail.'),
  ]),
  q(455016, 'Connectives', 'De Morgan disjunction', 'Which formula is equivalent to not-(P or Q)?', 'not-P and not-Q', [
    miss('not-P or not-Q', 'That is equivalent to not-(P and Q), not not-(P or Q).', 'For or to fail, both disjuncts fail.'),
    miss('P and Q', 'That removes the negation.', 'Push negation through and flip or to and.'),
    miss('P -> Q', 'A conditional is not De Morgan equivalent here.', 'Use negations of both parts.'),
  ]),
  q(455017, 'Proof Rules', 'Modus ponens use', 'From P -> Q and P, which conclusion follows by modus ponens?', 'Q', [
    miss('not-P', 'That would deny the antecedent without support.', 'Use the conditional with P affirmed.'),
    miss('not-Q', 'That contradicts what the rule gives.', 'P triggers Q.'),
    miss('Q -> P', 'The rule does not reverse the arrow.', 'Infer the consequent.'),
  ]),
  q(455018, 'Proof Rules', 'Modus tollens use', 'From P -> Q and not-Q, which conclusion follows by modus tollens?', 'not-P', [
    miss('P', 'If P were true, Q would follow, conflicting with not-Q.', 'Deny the antecedent by denying the consequent.'),
    miss('Q', 'Q is explicitly denied.', 'Use the contradiction with P.'),
    miss('P and Q', 'That conflicts with not-Q.', 'The valid conclusion is negative.'),
  ]),
  q(455019, 'Proof Rules', 'Conjunction introduction', 'If you have proved A and you have proved B, conjunction introduction lets you infer:', 'A and B', [
    miss('A or B only', 'That is weaker than what conjunction introduction gives.', 'Both proven claims can be joined.'),
    miss('not-A', 'No negation is licensed.', 'The rule combines claims.'),
    miss('A -> B', 'A conditional requires a different proof pattern.', 'Conjunction introduction makes an and-statement.'),
  ]),
  q(455020, 'Proof Rules', 'Disjunction syllogism', 'From A or B and not-A, which conclusion follows?', 'B', [
    miss('A', 'A is denied.', 'The remaining disjunct must hold.'),
    miss('not-B', 'That would make the original disjunction false.', 'One side of the or must be true.'),
    miss('A and B', 'You do not get both from a disjunction.', 'Eliminate the denied option.'),
  ]),
  q(455021, 'First-Order Logic', 'Predicate role', 'In first-order logic, a predicate symbol is mainly used to:', 'Express a property of or relation among objects', [
    miss('Name exactly one object', 'That is the role of a constant symbol.', 'Predicates become true or false of objects.'),
    miss('Choose the order of proof lines', 'Proof order is not what predicates express.', 'Think properties and relations.'),
    miss('Stand for a whole truth table', 'Truth tables are not predicate symbols.', 'Predicates apply to terms.'),
  ]),
  q(455022, 'First-Order Logic', 'Universal quantifier', 'The formula forall x F(x) says:', 'Every object in the domain has property F', [
    miss('At least one object has property F', 'That is existential quantification.', 'Universal means all.'),
    miss('No object has property F', 'That would be forall x not-F(x).', 'Do not add a negation.'),
    miss('F is a connective between formulas', 'F is a predicate here.', 'The quantifier ranges over objects.'),
  ]),
  q(455023, 'First-Order Logic', 'Existential quantifier', 'The formula exists x F(x) says:', 'At least one object in the domain has property F', [
    miss('Every object has property F', 'That is universal quantification.', 'Existential means at least one.'),
    miss('No object has property F', 'That is the negation of an existential.', 'Exists claims something is there.'),
    miss('F is false in every model', 'The formula asserts a witness, not universal falsity.', 'Look for one example.'),
  ]),
  q(455024, 'First-Order Logic', 'Negating universal', 'The negation of forall x F(x) is equivalent to:', 'exists x not-F(x)', [
    miss('forall x not-F(x)', 'That says nothing has F, which is too strong.', 'Not all means at least one counterexample.'),
    miss('exists x F(x)', 'That does not negate the universal.', 'Some F can coexist with not all F.'),
    miss('not-exists x not-F(x)', 'That is equivalent to the original universal.', 'You need a counterexample object.'),
  ]),
  q(455025, 'First-Order Logic', 'Negating existential', 'The negation of exists x F(x) is equivalent to:', 'forall x not-F(x)', [
    miss('exists x not-F(x)', 'That says at least one object lacks F, not that no object has F.', 'No witness means all fail F.'),
    miss('forall x F(x)', 'That is much stronger and not a negation.', 'Negate existence by universal denial.'),
    miss('not-forall x not-F(x)', 'That is equivalent to exists x F(x).', 'Do not double back to the original.'),
  ]),
  q(455026, 'Identity', 'Identity reflexivity', 'The principle of identity reflexivity says:', 'Every object is identical to itself', [
    miss('Every object is identical to every other object', 'That collapses all objects together and is not reflexivity.', 'Reflexive means same object to itself.'),
    miss('No object is identical to itself', 'That rejects the usual identity principle.', 'Identity is reflexive.'),
    miss('Only named objects can be self-identical', 'Unnamed objects are still objects.', 'The principle is general.'),
  ]),
  q(455027, 'Sets and Relations', 'Subset direction', 'If A is contained in B as a subset, which membership test must always pass?', 'Take any element of A; it must also be in B', [
    miss('Take any element of B; it must also be in A', 'That reverses the subset direction.', 'Start with the smaller or contained set.'),
    miss('No element can appear in both A and B', 'That describes disjointness, not subset inclusion.', 'Subset means shared containment.'),
    miss('A must have exactly one element', 'Subsets can have zero, one, or many elements.', 'Membership preservation is the key.'),
  ]),
  q(455028, 'Sets and Relations', 'Relation symmetry', 'A relation R is symmetric when:', 'If aRb, then bRa', [
    miss('If aRb and bRc, then aRc', 'That is transitivity.', 'Symmetry flips the pair.'),
    miss('Every object is related to itself', 'That is reflexivity.', 'Symmetry is about reversing order.'),
    miss('No object is related to another object', 'Empty relations can be symmetric, but that is not the definition.', 'Use the if-reversed condition.'),
  ]),
  q(455029, 'Sets and Relations', 'Function output rule', 'What condition fails the vertical-line-style idea of a function from inputs to outputs?', 'One input is paired with two different outputs', [
    miss('Two different inputs share the same output', 'Many-to-one behavior is still allowed for functions.', 'Uniqueness is checked per input.'),
    miss('Every input has one output', 'That is exactly what a function requires.', 'Look for the violation.'),
    miss('The output set is larger than the input set', 'Set size alone does not violate being a function.', 'Inspect pairings for each input.'),
  ]),
  q(455030, 'Metatheory', 'Consistency', 'A set of sentences is consistent when:', 'It is possible for all of them to be true together', [
    miss('At least one sentence in the set is false', 'That does not define consistency.', 'Consistency asks whether joint truth is possible.'),
    miss('The set contains a contradiction as a theorem', 'That would show inconsistency.', 'Contradictions block joint satisfaction.'),
    miss('Every sentence uses the same predicate letter', 'Notation uniformity is irrelevant.', 'Use possible simultaneous truth.'),
  ]),
])
