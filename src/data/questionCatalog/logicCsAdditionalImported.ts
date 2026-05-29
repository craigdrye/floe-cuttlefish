import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const openLogicLesson = (sourceId: string, note: string) =>
  `Source: Open Logic Project (${sourceId}). Authored Floe fixed-choice conversion from an advanced raw exercise. ${note}`

const openDsaLesson = (sourceId: string, correct: string) =>
  `Source: OpenDSA (${sourceId}). Cleaned from the raw exercise into a self-contained fixed-choice card. Correct answer: ${correct}.`

const ol = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  sourceId: string,
  note = 'The original prompt is an open proof task, so this card checks the central theorem move rather than asking for a full derivation.',
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: openLogicLesson(sourceId, note),
  source: `Open Logic Project raw exercise: ${sourceId}`,
})

const odsa = (
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
  lesson: openDsaLesson(sourceId, correct),
  source: `OpenDSA raw exercise: ${sourceId}`,
})

export const logicCsAdditionalFormalLogicQuestions = makeQuestionBank('University', [
  ol(466001, 'Computability', 'Reduction from K to K0', 'Let K be the halting self-application set and K0 be the paired halting set. What is the standard many-one reduction from K to K0?', 'Map x to the pair (x, x)', [
    miss('Map x to 0 for every x', 'A constant map cannot preserve arbitrary membership in K.', 'The reduction must ask whether x halts on itself.'),
    miss('Map x to the pair (0, x)', 'That tests a fixed program on x, not x on itself.', 'Both coordinates need the same input.'),
    miss('Map x to the complement of K0', 'A many-one reduction outputs an instance, not a set complement.', 'Build a paired halting instance.'),
  ], 'openlogic::computability/computability-theory/complete-ce-sets.tex::1', 'The raw exercise asks for the reduction K <=m K0.'),
  ol(466002, 'Computability', 'Transitive Reductions', 'If f reduces A to B and g reduces B to C, which function reduces A to C?', 'The composition g(f(x))', [
    miss('The composition f(g(x))', 'The domains line up in the other order: A first goes through f into B.', 'Follow the instance from A toward C.'),
    miss('The constant function x -> x', 'Identity only works when the source and target sets are already aligned.', 'Use both reductions.'),
    miss('No reduction can be formed', 'Many-one reductions are transitive when the functions compose.', 'The output of f is an input for g.'),
  ], 'openlogic::computability/computability-theory/prop-reduce.tex::3'),
  ol(466003, 'Computability', 'Partial Diagonalization', 'Why does the usual diagonal argument against a universal total computable function not immediately refute a universal partial computable function?', 'At the diagonal index, the constructed partial function may be undefined instead of forcing a numeric contradiction', [
    miss('Partial computable functions cannot be indexed', 'They can be indexed; that is why the diagonal question arises.', 'The escape is undefinedness.'),
    miss('Diagonal arguments never use self-application', 'Self-application is the point of the argument.', 'Ask what happens at e applied to e.'),
    miss('Every partial function is total after all', 'Partiality means some inputs may have no value.', 'Undefinedness blocks the total-function contradiction.'),
  ], 'openlogic::computability/computability-theory/no-universal-function.tex::1'),
  ol(466004, 'Completeness and Compactness', 'Compactness and Nonstandard Elements', 'To use compactness to get a model with an element greater than every standard numeral, what must be true of each finite subset of the added requirements?', 'It is satisfiable by choosing the new element bigger than the largest numeral mentioned in that finite subset', [
    miss('It is unsatisfiable because no standard number is bigger than all standard numbers', 'Compactness checks only finite subsets first.', 'A finite subset mentions only finitely many bounds.'),
    miss('It requires deleting the arithmetic facts true in the standard model', 'The construction keeps the standard theory and adds finitely satisfiable bounds.', 'Finite satisfiability is the hinge.'),
    miss('It works only if the language has no order symbol', 'The source exercise uses arithmetic order.', 'The order relation states the bound requirements.'),
  ], 'openlogic::first-order-logic/completeness/compactness.tex::3'),
  ol(466005, 'Incompleteness', 'No Truth Definition', 'How does the fixed-point lemma support Tarski-style undefinability of truth?', 'It yields a sentence that says of itself that it is not true, creating a liar-style contradiction for any truth definition', [
    miss('It lists every true sentence by length', 'The fixed-point lemma gives self-reference, not a length listing.', 'Look for the sentence talking about itself.'),
    miss('It proves every sentence false', 'The result is not global falsity.', 'It blocks an internal truth predicate.'),
    miss('It removes negation from arithmetic', 'Negation is used in the liar construction.', 'The contradiction comes from truth plus not-true.'),
  ], 'openlogic::incompleteness/incompleteness-provability/fixed-point-lemma.tex::1'),
  ol(466006, 'Incompleteness', 'Loeb Reflection Trap', 'Which reflection-style claim is generally too strong for a consistent computably axiomatized theory T to prove about itself?', 'If T proves Prov(A), then T proves A, as an unrestricted internal reflection principle', [
    miss('If T proves A, then T proves Prov(A)', 'That is a standard derivability condition under suitable coding.', 'The dangerous direction turns provability back into truth.'),
    miss('A proof can be coded by a natural number', 'Arithmetization relies on coding proofs.', 'Coding itself is not the trap.'),
    miss('Provability predicates can mention formulas', 'That is expected in provability logic.', 'The issue is unrestricted reflection.'),
  ], 'openlogic::incompleteness/incompleteness-provability/lob-thm.tex::1'),
  ol(466007, 'Incompleteness', 'True Arithmetic Is Not Axiomatizable', 'Why does the set of all sentences true in the standard model of arithmetic resist computable axiomatization?', 'If it were computably axiomatizable in the relevant way, arithmetic truth would become mechanically capturable, contradicting undefinability and incompleteness phenomena', [
    miss('Because arithmetic has no true sentences', 'Arithmetic has many true sentences.', 'The issue is effective capture of all of them.'),
    miss('Because finite theories cannot have models', 'Finite theories can have models.', 'This concerns the complete true theory of the standard naturals.'),
    miss('Because axioms must be written in English only', 'Formal axioms can be written symbolically.', 'The barrier is computability.'),
  ], 'openlogic::incompleteness/introduction/undecidability.tex::1'),
  ol(466008, 'Set Theory and Logic', 'Comprehension Inconsistency', 'Why does unrestricted comprehension lead to Russell-style inconsistency?', 'It permits a set of exactly the objects that are not members of themselves', [
    miss('It forbids all sets with no members', 'The empty set is not the problem.', 'The problem is self-membership.'),
    miss('It requires every set to be finite', 'Russell inconsistency is not about finiteness.', 'It is about a too-powerful set-builder principle.'),
    miss('It makes equality symmetric', 'Symmetry of equality is harmless here.', 'Focus on the set R such that x is in R iff x is not in x.'),
  ], 'openlogic::first-order-logic/models-theories/set-theory.tex::1'),
])

export const logicCsAdditionalLogicCriticalThinkingQuestions = makeQuestionBank('University', [
  ol(466101, 'Proof Strategy', 'Many-One Reduction Proof', 'When proving that a composition of reductions is a reduction, what is the key membership chain to show?', 'x is in A iff f(x) is in B iff g(f(x)) is in C', [
    miss('x is in A iff g(x) is in A', 'That does not follow the two given reductions.', 'Move from A to B to C.'),
    miss('x is outside every set iff f is constant', 'Constancy is unrelated and usually false.', 'Use the iff guarantees.'),
    miss('Only one direction of implication is ever needed', 'Many-one reduction requires equivalence of membership.', 'Check both directions through the chain.'),
  ], 'openlogic::computability/computability-theory/prop-reduce.tex::1'),
  ol(466102, 'Proof Strategy', 'Compactness Setup', 'In a compactness argument, why is proving finite satisfiability often the decisive first step?', 'Compactness transfers satisfiability of every finite subset to satisfiability of the whole set', [
    miss('It proves every finite subset is false', 'The compactness route needs finite satisfiability, not finite failure.', 'Each finite piece must have a model.'),
    miss('It avoids model theory entirely', 'Compactness is a model-theoretic theorem.', 'Finite models or finite constraints are used to get a model of all constraints.'),
    miss('It shows the language has no formulas', 'The language remains intact.', 'The theorem links finite subsets to the full set.'),
  ], 'openlogic::first-order-logic/completeness/compactness-direct.tex::3'),
  ol(466103, 'Proof Strategy', 'Computable Inseparability', 'To prove two computably enumerable sets are computably inseparable, what do you assume for contradiction?', 'That there is a decidable set containing one of them and disjoint from the other', [
    miss('That both sets are finite lists written in sorted order', 'Sorting does not address decidability of separation.', 'The separator is a decidable set.'),
    miss('That every sentence is both provable and refutable', 'That would collapse consistency instead of setting up separability.', 'Keep the two collections apart.'),
    miss('That no program can enumerate either set', 'The theorem concerns enumerable sets that still cannot be decidably separated.', 'Enumeration and decidable separation differ.'),
  ], 'openlogic::incompleteness/incompleteness-provability/rosser-thm.tex::1'),
  ol(466104, 'Proof Strategy', 'Definability Target', 'When an exercise asks whether a truth-related set is definable in arithmetic, what must the defining formula do?', 'Pick out exactly the intended natural numbers inside the standard arithmetic structure', [
    miss('Use the same variable name in every formula regardless of meaning', 'Variable spelling is not definability.', 'The extension of the formula matters.'),
    miss('Make every arithmetic sentence provable', 'Definability is semantic selection, not automatic provability.', 'Ask which numbers satisfy the formula.'),
    miss('Avoid all quantifiers forever', 'Arithmetic definitions may use quantifiers.', 'The issue is exact representation.'),
  ], 'openlogic::incompleteness/incompleteness-provability/tarski-thm.tex::1'),
])

export const logicCsAdditionalDataStructuresQuestions = makeQuestionBank('Software', [
  odsa(466201, 'Graph Terms', 'Graphs Without Edges', 'Which statement about graphs is correct?', 'A graph may have vertices and no edges', [
    miss('Every graph must have at least one edge', 'Edgeless graphs are valid.', 'A graph can have isolated vertices.'),
    miss('A graph with no edges must have no vertices', 'Vertices can exist without edges.', 'Edges are relationships between vertices.'),
    miss('Only directed graphs may omit edges', 'Directed and undirected graphs can both be edgeless.', 'Edge absence is allowed generally.'),
  ], 'opendsa::Graph/GedgesTF.html'),
  odsa(466202, 'Linked Lists', 'Insert Before Position k', 'In a linked-chain list, which reference is most directly useful for inserting a new node at position k?', 'The node currently at position k - 1', [
    miss('The node currently at position k + 1', 'That is after the insertion point and does not give the needed predecessor link.', 'Insertion rewires the previous node.'),
    miss('Only the last node of the list', 'The tail helps only for append operations.', 'Position k may be in the middle.'),
    miss('The new node before its next pointer is set', 'The new node is needed, but the predecessor reference lets you attach it.', 'Find the node before the insertion point.'),
  ], 'opendsa::MengBridgeCourse/ListsCheckpoint2Q2.html'),
  odsa(466203, 'Sorted Lists', 'Why Sorted Add Omits Position', 'Why would a sorted-list ADT usually omit an add-at-position operation?', 'The sorted add operation must choose the position that preserves sorted order', [
    miss('Because sorted lists cannot add new entries', 'Sorted lists support insertion, but insertion is constrained.', 'The structure decides where the value belongs.'),
    miss('Because positions do not exist in lists', 'Lists still have positions.', 'The client should not choose an order-breaking position.'),
    miss('Because sorted lists must use hash tables internally', 'Implementation choice is separate from the ADT rule.', 'The key issue is preserving the sorted invariant.'),
  ], 'opendsa::SWDesignAndDataStructs/SortedListsCheckpoint2Q1.html'),
  odsa(466204, 'Trees', 'Leaf Node Definition', 'In a tree data structure, a leaf is:', 'A node with no children', [
    miss('The topmost node of the tree', 'That is the root.', 'Leaves appear at the ends of branches.'),
    miss('A node with the same parent as another node', 'Those are siblings.', 'A leaf is defined by child count.'),
    miss('The connection between two nodes', 'That is an edge.', 'A leaf is a node.'),
  ], 'opendsa::SWDesignAndDataStructs/TreesCheckpoint1Q1.html'),
  odsa(466205, 'Trees', 'Perfect Binary Tree Count', 'Using height as one more than the number of edges from root to deepest node, how many nodes are in a perfect binary tree of height 3?', '7', [
    miss('3', 'That counts height levels, not all nodes.', 'Add nodes across levels: 1 + 2 + 4.'),
    miss('8', 'That is 2^3, but the node count is 2^h - 1 with this height convention.', 'Subtract one from the next power of two.'),
    miss('15', 'That is the count for height 4 under this convention.', 'Height 3 has three levels.'),
  ], 'opendsa::SWDesignAndDataStructs/TreesCheckpoint2Q1.html'),
  odsa(466206, 'Algorithm Analysis', 'Tight Upper Bound', 'What is the tightest Big-O upper bound among the choices for the growth rate 5n + 3?', 'O(n)', [
    miss('O(n^2)', 'It is an upper bound but not the tightest listed one.', 'Drop constants and lower-order terms.'),
    miss('O(log n)', '5n + 3 eventually grows faster than log n.', 'Linear growth is larger than logarithmic growth.'),
    miss('O(1)', 'The expression grows with n.', 'It is not constant.'),
  ], 'opendsa::AlgAnal/AlgAnlsMCQbest1.html'),
  odsa(466207, 'Algorithm Analysis', 'Insertion Sort and Inversions', 'If I is the number of inversions in an input array of n records, insertion sort runs in what time?', 'Theta(n + I)', [
    miss('Theta(n)', 'That is only the nearly sorted case with few inversions.', 'Each inversion can force movement.'),
    miss('Theta(n^2)', 'That is the worst case, but the inversion-sensitive bound is sharper.', 'Use both base scan cost and inversion count.'),
    miss('Theta(I - n)', 'Runtime cannot be negative when I is small.', 'The terms add.'),
  ], 'opendsa::Sorting/InssortMCQinver.html'),
])

export const logicCsAdditionalSoftwareQuestions = makeQuestionBank('Software', [
  odsa(466302, 'Java Generics', 'Generic Parameter Use', 'When using a generic class in Java, why should client code usually specify the generic type parameter?', 'So the compiler can check uses of the class against the intended element type', [
    miss('So the program always runs faster at runtime', 'Generics mainly provide compile-time type checking.', 'Think type safety before execution.'),
    miss('So the class can contain only integers', 'The point is to choose the appropriate type, not always int.', 'Generic parameters vary by use.'),
    miss('So the compiler ignores type errors', 'Generics help catch type errors.', 'The compiler uses the type parameter as a constraint.'),
  ], 'opendsa::IntroToSoftwareDesign/GenericsQuestion.html'),
  odsa(466303, 'Requirements', 'Nonfunctional Requirement', 'Which requirement is nonfunctional rather than a user action?', 'The system shall complete user-submitted requests within 10 seconds', [
    miss('The system shall allow users to search for a product item', 'That describes a feature the user can perform.', 'Nonfunctional requirements describe qualities or constraints.'),
    miss('The system shall allow registered customers to place an order', 'That is functional behavior.', 'Look for performance, reliability, or quality constraints.'),
    miss('The system shall notify users when an item is added to the cart', 'That is a functional notification behavior.', 'The timing constraint is the nonfunctional one.'),
  ], 'opendsa::MengBridgeCourse/DesignCheckpoint1Q3.html'),
  odsa(466304, 'Grammars', 'Optional Statement List in EBNF', 'A BNF statement list allows either no statements or one statement followed by zero or more semicolon-statement repeats. Which EBNF shape captures that?', '(<statement> (; <statement>)*)?', [
    miss('(<statement>;)*', 'That requires a trailing semicolon pattern and misses the final statement shape.', 'The semicolon belongs before each additional statement.'),
    miss('<statement> (; <statement>)*', 'That requires at least one statement, but the BNF allows empty.', 'The whole nonempty pattern must be optional.'),
    miss('(<statement>;)* <statement>?', 'This permits forms that do not match the same semicolon grouping as cleanly.', 'Use one optional nonempty list.'),
  ], 'opendsa::FLA/ExtendedBNF.html'),
])

export const logicCsAdditionalIntroCsQuestions = makeQuestionBank('Software', [
  odsa(466401, 'Computer Science Foundations', 'Computational Problem', 'A computational problem is best understood as:', 'A mapping from valid inputs to desired outputs', [
    miss('A single Java file', 'A Java file may implement a solution, but the problem is more abstract.', 'Separate specification from implementation.'),
    miss('A screenshot of a running program', 'A screenshot is an artifact, not the input-output relation.', 'Think mathematical specification.'),
    miss('Only the hardware used to run code', 'Hardware executes programs but does not define the problem.', 'The problem says what output is wanted.'),
  ], 'opendsa::AlgAnal/ProblemAlgorithmProgramTF8.html'),
  odsa(466402, 'Computer Science Foundations', 'Program Role', 'Why is it misleading to say that a program itself is the abstract input-output problem?', 'A program is a concrete procedure or implementation for solving a problem', [
    miss('Because programs cannot be executed', 'Programs are executable or interpretable artifacts.', 'The issue is abstraction level.'),
    miss('Because problems must always be written in Java', 'Problems are language-independent specifications.', 'Many languages can solve the same problem.'),
    miss('Because a program can never take input', 'Programs commonly take input.', 'The distinction is not whether input exists.'),
  ], 'opendsa::AlgAnal/ProblemAlgorithmProgramTF10.html'),
])
