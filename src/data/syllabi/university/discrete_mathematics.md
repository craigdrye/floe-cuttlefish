# Discrete Mathematics
**ID**: `discreteMath` - **Discipline**: Mathematics - **Stage**: University Freshman/Sophomore
**Aligns with**: first university discrete math courses for CS, math, data science, and logic students

## Course Aim
Build the proof language and discrete structures students need for computer science, mathematics, data science, and formal reasoning. Students learn logic, proof, sets, functions, counting, induction, relations, graphs, trees, modular arithmetic, recurrence relations, and computational applications so they can justify claims precisely, model finite systems, and read later algorithms and theory courses with confidence.

## Course Design Notes
This is a rigorous first course in discrete mathematics with frequent proof writing and structured problem sets. Route questions here when students need propositional or predicate logic, proof methods, set and function notation, counting, induction, relations, graph theory, trees, modular arithmetic, recurrences, or CS applications such as algorithms, data structures, databases, cryptography, automata, and program correctness. Emphasize definitions, quantifier discipline, counterexamples, diagrams, small cases before general proof, and clean written solutions rather than answer-only calculation.

## Chapter 1: Logic, Language, and Quantifiers
- **Key concepts**: Propositions, predicates, truth tables, logical connectives, implication, converse, inverse, contrapositive, logical equivalence, tautology, contradiction, quantifiers, negating quantified statements, nested quantifiers, and translating English into formal statements.
- **Practice questions**: Build a truth table; negate a statement with two quantifiers; identify equivalent conditionals; translate a database or program specification into logic; find the flaw in an invalid inference.
- **Student output**: A logic worksheet with formal translations, equivalence proofs, counterexamples, and short explanations of common inference errors.

## Chapter 2: Proof Methods and Mathematical Writing
- **Key concepts**: Definitions, theorem structure, direct proof, proof by contrapositive, proof by contradiction, proof by cases, if-and-only-if proof, existence proof, uniqueness proof, counterexample, proof style, and responsible use of diagrams and examples.
- **Practice questions**: Choose an appropriate proof strategy; prove a parity statement; disprove a universal claim; rewrite an informal argument into a valid proof; separate assumptions from conclusions.
- **Student output**: A proof portfolio with revised drafts, peer feedback, and final solutions demonstrating at least four proof strategies.

## Chapter 3: Sets, Functions, and Cardinality
- **Key concepts**: Sets, subsets, power sets, set-builder notation, union, intersection, difference, complement, Cartesian products, ordered pairs, functions, domain, codomain, image, preimage, injection, surjection, bijection, inverse functions, composition, finite cardinality, and countability preview.
- **Practice questions**: Prove a set identity using element chasing; classify a function as injective or surjective; construct a bijection; compute a power set size; explain why domain and codomain choices matter.
- **Student output**: A set-and-function problem set with formal proofs, diagrams where useful, and at least one CS example involving types, mappings, or lookup tables.

## Chapter 4: Counting and Combinatorics
- **Key concepts**: Sum rule, product rule, complement rule, permutations, combinations, binomial coefficients, Pascal's identity, binomial theorem, inclusion-exclusion, pigeonhole principle, arrangements with repetition, and avoiding overcounting.
- **Practice questions**: Decide whether order matters; count passwords under constraints; apply inclusion-exclusion to overlapping categories; prove a binomial identity combinatorially; use the pigeonhole principle to show existence.
- **Student output**: A counting lab that compares multiple solution methods, includes a short combinatorial proof, and verifies small cases by enumeration.

## Chapter 5: Induction, Recursion, and Recurrences
- **Key concepts**: Weak induction, strong induction, structural induction preview, recursive definitions, loop and recursive invariants, recurrence relations, arithmetic and geometric sums, linear recurrences, recurrence trees, divide-and-conquer recurrences, and connections to algorithm analysis.
- **Practice questions**: Prove a summation formula by induction; use strong induction for a tiling or divisibility claim; solve a simple recurrence; trace a recursive definition; connect a loop invariant to an induction proof.
- **Student output**: An induction and recurrence notebook with proofs, solved recurrences, recursive examples, and brief algorithmic interpretations.

## Chapter 6: Relations, Orders, and Modular Arithmetic
- **Key concepts**: Binary relations, reflexive, symmetric, antisymmetric, transitive properties, equivalence relations, equivalence classes, partitions, partial orders, Hasse diagrams, total orders, congruence modulo n, modular arithmetic, divisibility, greatest common divisor, Euclidean algorithm, modular inverses, and cryptographic motivation.
- **Practice questions**: Determine whether a relation is an equivalence relation or partial order; draw a Hasse diagram; prove congruence properties; compute gcd by the Euclidean algorithm; solve a simple modular equation.
- **Student output**: A structures memo classifying several relations, proving one equivalence-class result, and implementing or tracing the Euclidean algorithm.

## Chapter 7: Graphs and Trees
- **Key concepts**: Graph terminology, degree, paths, walks, trails, cycles, connectedness, directed graphs, bipartite graphs, Euler paths and circuits, Hamiltonian paths preview, graph coloring, planar graphs preview, trees, rooted trees, spanning trees, binary trees, traversal, and graph representations for computing.
- **Practice questions**: Use the handshaking lemma; decide whether an Euler circuit exists; prove a tree edge-count property; test bipartiteness; translate a dependency or network problem into a graph model.
- **Student output**: A graph theory packet with proofs, diagrams, traversal traces, and a small application such as prerequisite planning, network connectivity, or data-structure trees.

## Chapter 8: Discrete Models in Computer Science
- **Key concepts**: Boolean circuits, finite-state machines, regular languages preview, databases and relations, program specifications, invariants, hashing and modular arithmetic, graph algorithms, recurrence-based runtime analysis, discrete probability preview, and limits of computation preview.
- **Practice questions**: Design a finite-state machine for a simple protocol; express a database query using set and relation language; prove a program invariant; analyze a recursive algorithm's recurrence; identify the discrete structure behind a computing problem.
- **Student output**: A CS application dossier connecting at least four course structures to concrete computing tasks, with one proof, one model diagram, and one small implementation or trace.

## Capstone
Students produce a discrete-mathematics modeling and proof project for a computational or mathematical system. The project must define the objects involved, state assumptions in formal language, use at least three course tools such as logic, induction, counting, relations, graphs, trees, modular arithmetic, or recurrences, and present proofs or justified computations. Suitable topics include scheduling constraints, graph coloring, access-control relations, cryptographic toy examples, recurrence analysis of an algorithm, finite-state validation, network connectivity, database normalization examples, or combinatorial counting of configurations.

## Assessment Ideas
- Weekly written problem sets graded for definitions, notation, proof structure, and explanation quality.
- Short quizzes on logic translations, set operations, counting choices, relation properties, modular arithmetic, and graph terminology.
- Proof revision assignments where students improve clarity, quantifier use, and handling of edge cases.
- Mixed computational labs using enumeration, graph traversal, recurrence simulation, or modular arithmetic checks to support but not replace proof.
- Capstone rubric covering formal modeling, correct use of definitions, proof rigor, mathematical communication, and connection to CS applications.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- MIT 6.042J, Mathematics for Computer Science: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/
- UC Berkeley CS70, Discrete Mathematics and Probability Theory: https://www.eecs70.org/
- Stanford CS103, Mathematical Foundations of Computing: https://web.stanford.edu/class/cs103/
- Open Logic Project: https://openlogicproject.org/
- Oscar Levin, Discrete Mathematics: An Open Introduction: https://discrete.openmathbooks.org/
- Richard Hammack, Book of Proof: https://www.people.vcu.edu/~rhammack/BookOfProof/
