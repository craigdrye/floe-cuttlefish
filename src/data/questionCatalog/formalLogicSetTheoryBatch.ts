import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/sets/i.test(chapter)) {
    return `${title} is a set-language idea. The useful answer is "${correct}"; track membership carefully and ask whether the operation is collecting, overlapping, removing, counting, or taking all subsets.`
  }
  if (/relations/i.test(chapter)) {
    return `${title} is about structure between objects. The useful answer is "${correct}"; relations are sets of ordered pairs, and properties like reflexive, symmetric, and transitive describe how those pairs behave.`
  }
  if (/functions/i.test(chapter)) {
    return `${title} is about mapping inputs to outputs. The useful answer is "${correct}"; first check whether each input has exactly one output, then ask whether outputs collide, are all covered, or can be reversed.`
  }
  if (/proof/i.test(chapter)) {
    return `${title} is a proof-method idea. The useful answer is "${correct}"; choose the proof shape that matches the claim, such as direct proof, contradiction, contrapositive, counterexample, or induction.`
  }
  if (/logic and sets/i.test(chapter)) {
    return `${title} connects logical form with set language. The useful answer is "${correct}"; negating quantifiers swaps all with exists, and De Morgan laws swap union with intersection under complement.`
  }
  return `${title} is a formal-logic concept. The useful answer is "${correct}"; translate the notation into plain membership, mapping, relation, or proof language before choosing.`
}

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
  lesson: lessonFor(chapter, title, correct),
  source: 'Open Logic Project/OER set theory and proof coverage',
})

export const formalLogicSetTheoryBatchQuestions = makeQuestionBank('University', [
  q(461001, 'Sets', 'Empty set', 'The empty set is the set that contains:', 'No elements', [
    miss('All possible elements', 'That describes a universal set, not the empty set.', 'Empty means none.'),
    miss('Exactly one element called 0', '0 is a number; the empty set has no members.', 'No members at all.'),
    miss('Only negative numbers', 'That is a particular set, not the empty set.', 'Empty has nothing.'),
  ]),
  q(461002, 'Sets', 'Subset test', 'A is a subset of B means:', 'Every element of A is also an element of B', [
    miss('Every element of B is also an element of A', 'That reverses the direction.', 'Start with elements of A.'),
    miss('A and B have no elements in common', 'That is disjointness, not subset.', 'Subset allows overlap.'),
    miss('A must have fewer elements than B', 'A subset can equal B in size.', 'Subset allows equality.'),
  ]),
  q(461003, 'Sets', 'Proper subset', 'A is a proper subset of B means:', 'A is a subset of B and A is not equal to B', [
    miss('A equals B exactly', 'Proper subset excludes equality.', 'Proper means strictly contained.'),
    miss('A has no elements', 'A could be empty, but it need not be.', 'Proper is about containment, not emptiness.'),
    miss('B is a subset of A', 'Direction is wrong.', 'A is inside B.'),
  ]),
  q(461004, 'Sets', 'Union meaning', 'The union A ∪ B contains:', 'Elements in A or in B (or both)', [
    miss('Only elements in both A and B', 'That describes intersection.', 'Union is inclusive or.'),
    miss('Elements in neither A nor B', 'That would be complement relative to a universe.', 'Union collects members.'),
    miss('Only elements in A but not B', 'That is difference A \\ B.', 'Union includes both sets.'),
  ]),
  q(461005, 'Sets', 'Intersection meaning', 'The intersection A ∩ B contains:', 'Elements in both A and B', [
    miss('Elements in A or in B', 'That is union.', 'Intersection is overlap.'),
    miss('Elements in A but not in B', 'That is difference.', 'Intersection is shared elements.'),
    miss('Elements in neither A nor B', 'That is outside both sets.', 'Intersection is common members.'),
  ]),
  q(461006, 'Sets', 'Set difference', 'The difference A \\ B contains:', 'Elements in A that are not in B', [
    miss('Elements in both A and B', 'That is intersection.', 'Difference removes B elements.'),
    miss('Elements in B that are not in A', 'That is B \\ A.', 'Direction matters.'),
    miss('Elements in A or B', 'That is union.', 'Difference filters A.'),
  ]),
  q(461007, 'Sets', 'Complement', 'The complement of A (relative to a universe U) is:', 'Elements of U that are not in A', [
    miss('Elements in A and U', 'A is already a subset of U; that describes A itself.', 'Complement is outside A.'),
    miss('Elements not in U', 'Complement is defined within U.', 'Stay inside the universe.'),
    miss('Elements in A or not in U', 'That mixes two different universes.', 'Use U minus A.'),
  ]),
  q(461008, 'Sets', 'Power set', 'The power set P(A) is:', 'The set of all subsets of A', [
    miss('The set of all elements not in A', 'That is complement.', 'Power set collects subsets.'),
    miss('The set containing only A', 'P(A) includes many subsets, including empty and A.', 'All subsets.'),
    miss('The set of all supersets of A', 'That is different.', 'Power set is subsets.'),
  ]),
  q(461009, 'Sets', 'Cardinality', 'The cardinality |A| of a finite set A is:', 'The number of elements in A', [
    miss('The sum of the elements in A', 'Sets do not assume numeric addition of elements.', 'Count members.'),
    miss('The largest element in A', 'Max value is not cardinality.', 'Cardinality counts.'),
    miss('The number of subsets of A', 'That is 2^|A|, not |A| itself.', 'Cardinality is member count.'),
  ]),
  q(461010, 'Sets', 'Distributive law', 'Which identity is true for sets?', 'A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)', [
    miss('A ∩ (B ∪ C) = (A ∪ B) ∩ (A ∪ C)', 'That is a different valid identity for unions/intersections; it is not the distributive form shown.', 'Pick the standard distributive expansion of ∩ over ∪.'),
    miss('A ∪ (B ∪ C) = (A ∩ B) ∩ C', 'Union does not turn into intersection like that.', 'Keep operations consistent.'),
    miss('A \\ (B ∪ C) = (A \\ B) ∪ (A \\ C)', 'Difference distributes over union as intersection, not union.', 'Think De Morgan-like behavior.'),
  ]),
  q(461011, 'Relations', 'Ordered pairs', 'A binary relation on a set A is best thought of as:', 'A set of ordered pairs from A × A', [
    miss('A single number measuring distance', 'Relations are sets of pairs, not one number.', 'Think (a,b) pairs.'),
    miss('A set of subsets of A', 'That is a power set idea, not relation definition.', 'Pairs in the Cartesian product.'),
    miss('A truth table for one propositional letter', 'Relations are not propositional truth tables.', 'Use ordered pairs.'),
  ]),
  q(461012, 'Relations', 'Reflexive', 'A relation R on A is reflexive when:', 'For every a in A, aRa', [
    miss('For every a in A, not aRa', 'That describes irreflexive.', 'Reflexive includes self-related.'),
    miss('Whenever aRb then bRa', 'That is symmetry.', 'Reflexive is about (a,a).'),
    miss('Whenever aRb and bRc then aRc', 'That is transitivity.', 'Reflexive is self-pairs.'),
  ]),
  q(461013, 'Relations', 'Symmetric', 'A relation R on A is symmetric when:', 'If aRb then bRa', [
    miss('If aRb and bRc then aRc', 'That is transitivity.', 'Symmetric flips order.'),
    miss('For every a, aRa', 'That is reflexive.', 'Symmetric is about swapping.'),
    miss('For some a, aRa', 'That is too weak.', 'Must hold for all related pairs.'),
  ]),
  q(461014, 'Relations', 'Transitive', 'A relation R on A is transitive when:', 'If aRb and bRc then aRc', [
    miss('If aRb then bRa', 'That is symmetry.', 'Transitive composes links.'),
    miss('For every a, aRa', 'That is reflexive.', 'Transitive is two-step closure.'),
    miss('If aRc then aRb', 'That is not the transitive form.', 'Use the chain condition.'),
  ]),
  q(461015, 'Relations', 'Equivalence relation', 'An equivalence relation is one that is:', 'Reflexive, symmetric, and transitive', [
    miss('Only transitive', 'Transitive alone is not enough.', 'Need all three properties.'),
    miss('Only symmetric', 'Symmetry alone is not enough.', 'Need reflexive + transitive too.'),
    miss('Irreflexive and asymmetric', 'Those define a strict order-like pattern, not equivalence.', 'Equivalence groups into classes.'),
  ]),
  q(461016, 'Relations', 'Equivalence classes', 'Equivalence classes under an equivalence relation:', 'Partition the set into non-overlapping groups', [
    miss('Always overlap heavily', 'Distinct equivalence classes are disjoint.', 'Each element belongs to exactly one class.'),
    miss('Are just arbitrary subsets', 'They are determined by the relation.', 'Class = all elements equivalent to a given one.'),
    miss('Contain no elements', 'Classes are usually nonempty when defined for an element.', 'They cover the set.'),
  ]),
  q(461017, 'Functions', 'Function definition', 'A function f: A → B assigns:', 'Exactly one output in B to each input in A', [
    miss('At least two outputs to each input', 'That violates being a function.', 'One output per input.'),
    miss('Outputs only for some inputs in A', 'That would be a partial function; standard definition uses total mapping.', 'Every input gets an output.'),
    miss('Exactly one input to each output', 'Injective is different from being a function.', 'Uniqueness is per input.'),
  ]),
  q(461018, 'Functions', 'Injective', 'A function is injective (one-to-one) when:', 'Different inputs always produce different outputs', [
    miss('Different outputs can come from the same input', 'That cannot happen for a function at all.', 'Functions already have one output per input.'),
    miss('Every output is hit by some input', 'That is surjective.', 'Injective is about uniqueness of preimages.'),
    miss('It has no outputs', 'Not a meaningful function on a nonempty domain.', 'Injection is about collisions.'),
  ]),
  q(461019, 'Functions', 'Surjective', 'A function is surjective (onto) when:', 'Every element of the codomain is an output of some input', [
    miss('Different inputs always give different outputs', 'That is injective.', 'Surjective covers the codomain.'),
    miss('No element of the codomain is hit', 'That would not be a surjection.', 'Onto means covered.'),
    miss('It has exactly one input', 'Domain size is irrelevant.', 'The key is covering outputs.'),
  ]),
  q(461020, 'Functions', 'Bijective', 'A function is bijective when it is:', 'Both injective and surjective', [
    miss('Neither injective nor surjective', 'That cannot be bijective.', 'Need one-to-one and onto.'),
    miss('Only surjective', 'Surjective alone is not enough.', 'Need injective too.'),
    miss('Only injective', 'Injective alone is not enough.', 'Need onto too.'),
  ]),
  q(461021, 'Functions', 'Inverse function', 'A function f has an inverse function f^{-1} when f is:', 'Bijective', [
    miss('Only injective', 'Injective ensures left-inverse on image, but not a two-sided inverse on codomain.', 'Need onto as well.'),
    miss('Only surjective', 'Surjective ensures right-inverse existence, not uniqueness.', 'Need one-to-one too.'),
    miss('Never invertible', 'Many functions are invertible.', 'Bijective gives a proper inverse.'),
  ]),
  q(461022, 'Functions', 'Composition', 'The composition (g ∘ f)(x) means:', 'Apply f to x, then apply g to the result', [
    miss('Apply g first, then f', 'That reverses the order.', 'Rightmost function goes first.'),
    miss('Add f(x) and g(x)', 'Composition is not addition.', 'It is nesting of functions.'),
    miss('Multiply f and g as numbers', 'Functions compose, they do not multiply like scalars in general.', 'Use f then g.'),
  ]),
  q(461023, 'Proof Methods', 'Direct proof', 'A direct proof typically starts from:', 'The assumptions (premises) and derives the conclusion step by step', [
    miss('The negation of the conclusion', 'That is proof by contradiction.', 'Direct proof uses givens directly.'),
    miss('One convenient example treated as if it proves every case', 'Examples can guide, but a proof must cover the general claim.', 'Derive logically.'),
    miss('The conclusion and works backward without justification', 'Working backward can be a strategy, but proof needs justified steps.', 'Use premises to conclusion.'),
  ]),
  q(461024, 'Proof Methods', 'Proof by contradiction', 'A proof by contradiction works by assuming:', 'The negation of the conclusion and deriving a contradiction', [
    miss('The conclusion is true and stopping immediately', 'That is not a proof.', 'Need contradiction from the negation.'),
    miss('An unrelated statement about weather', 'Irrelevant assumptions do not prove the claim.', 'Assume not-conclusion.'),
    miss('That no axioms exist', 'You still reason from background logic/axioms.', 'Negate and contradict.'),
  ]),
  q(461025, 'Proof Methods', 'Contrapositive', 'To prove an implication P → Q by contrapositive, you prove:', '¬Q → ¬P', [
    miss('Q → P', 'That is the converse and not equivalent.', 'Use contrapositive.'),
    miss('¬P → ¬Q', 'That is the inverse and not equivalent.', 'Negate and swap.'),
    miss('P ∧ Q', 'That is stronger than needed and not equivalent.', 'Prove the contrapositive.'),
  ]),
  q(461026, 'Proof Methods', 'Counterexample', 'To show a universal claim "For all x, P(x)" is false, you need:', 'One counterexample where P(x) fails', [
    miss('A proof that P(x) holds for one x', 'One true instance does not prove a universal.', 'Universals fail by one counterexample.'),
    miss('A long list of cases that all happen to satisfy P(x)', 'Supporting examples do not refute a universal claim; one failing case does.', 'One counterexample suffices.'),
    miss('An argument that the claim sounds wrong', 'Intuition is not a counterexample.', 'Produce a specific x.'),
  ]),
  q(461027, 'Logic and Sets', 'Negating a universal', 'The negation of "For all x, P(x)" is:', 'There exists an x such that not P(x)', [
    miss('For all x, not P(x)', 'That is stronger than the negation.', 'Not all means at least one exception.'),
    miss('There exists an x such that P(x)', 'That can be true even if the universal is true.', 'Need a failing instance.'),
    miss('P(x) for some fixed x without saying which', 'You must assert existence of a counterexample.', 'Exists x with not P(x).'),
  ]),
  q(461028, 'Logic and Sets', 'Negating an existential', 'The negation of "There exists an x such that P(x)" is:', 'For all x, not P(x)', [
    miss('There exists an x such that not P(x)', 'That does not deny existence of a P witness.', 'No witness means all fail.'),
    miss('For all x, P(x)', 'That is not the negation.', 'Negate existence by universal denial.'),
    miss('P(x) is neither true nor false', 'Classical quantification assumes truth-evaluable predicates.', 'Use standard quantifier negation.'),
  ]),
  q(461029, 'Logic and Sets', 'De Morgan for sets', 'Which identity matches De Morgan’s law for complements?', '(A ∪ B)^c = A^c ∩ B^c', [
    miss('(A ∪ B)^c = A^c ∪ B^c', 'Complement flips union to intersection.', 'Swap ∪ with ∩.'),
    miss('(A ∩ B)^c = A^c ∩ B^c', 'Complement flips intersection to union.', 'Swap ∩ with ∪.'),
    miss('(A \\ B)^c = A^c \\ B^c', 'Difference does not distribute like that.', 'Use union/intersection form.'),
  ]),
  q(461030, 'Proof Methods', 'Induction idea', 'Mathematical induction is typically used to prove statements about:', 'All natural numbers (or all integers from a starting point)', [
    miss('Only one specific number', 'Induction is for infinitely many cases.', 'Base case + step.'),
    miss('Only real numbers with no ordering', 'Induction relies on successor structure.', 'Use N-style progression.'),
    miss('Only a few sampled integers that look like the pattern continues', 'Induction is proof over a successor chain, not statistical sampling.', 'Prove base, then step.'),
  ]),
])
