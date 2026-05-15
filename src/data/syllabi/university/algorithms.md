# Algorithms
**ID**: `algorithms` - **Discipline**: Computing - **Stage**: University Sophomore
**Aligns with**: standard CS2 / algorithms courses and technical interview foundations

## Course Aim
Develop students who can design algorithms, prove their correctness, analyze their resource use, and implement them with enough care that theory and code agree. Students learn asymptotic analysis, recurrence solving, divide and conquer, greedy methods, dynamic programming, graph algorithms, shortest paths, minimum spanning trees, NP-completeness, randomized algorithms, approximation, and the practical judgment needed to choose an algorithm under real constraints.

## Course Design Notes
This is a proof-and-implementation algorithms course for students who already know basic programming and data structures. Route questions here when students need algorithm selection, loop invariants, recurrence analysis, asymptotic comparison, correctness proofs, graph modeling, dynamic programming states, reductions, NP-completeness, randomized tradeoffs, approximation guarantees, or technical interview-style reasoning. Emphasize clear problem statements, preconditions, invariants, proof sketches, adversarial tests, empirical timing, and written explanations that connect implementation details to theoretical guarantees.

## Chapter 1: Algorithmic Analysis and Correctness
- **Key concepts**: Computational problems, input size, worst-case and average-case analysis, Big-O, Big-Theta, Big-Omega, little-o intuition, space complexity, lower and upper bounds, loop invariants, induction for correctness, termination, and model-of-computation assumptions.
- **Practice questions**: Rank growth rates; analyze nested loops with dependent bounds; write a loop invariant for search; distinguish a correctness proof from a test result; compare two algorithms with different asymptotic and constant-factor behavior.
- **Student output**: A short analysis portfolio with code fragments, asymptotic classifications, invariant-based proof sketches, and timing data for increasing input sizes.

## Chapter 2: Recurrences, Divide and Conquer, and Sorting
- **Key concepts**: Recursive algorithms, recurrence relations, substitution method, recursion trees, Master Theorem cases, binary search, merge sort, quicksort, deterministic and randomized partitioning, selection, sorting lower bounds, stability, in-place behavior, and implementation hazards.
- **Practice questions**: Solve a recurrence using two methods; prove binary search correct; trace quicksort on adversarial input; explain why comparison sorting has an Omega(n log n) lower bound; choose a sorting strategy for a constrained workload.
- **Student output**: Implemented and tested divide-and-conquer algorithms with recurrence analysis and an experiment comparing merge sort, quicksort variants, and library sorting.

## Chapter 3: Greedy Algorithms
- **Key concepts**: Greedy-choice property, optimal substructure, exchange arguments, stays-ahead proofs, cut properties, interval scheduling, activity selection, Huffman coding, caching intuition, matroid preview, and counterexamples to plausible greedy rules.
- **Practice questions**: Construct a counterexample for a failed greedy heuristic; prove interval scheduling by an exchange argument; trace Huffman tree construction; decide whether a problem is greedy, dynamic programming, or neither.
- **Student output**: A greedy-algorithm memo that includes problem specification, algorithm, proof of optimality or counterexample, complexity analysis, and tested implementation.

## Chapter 4: Dynamic Programming
- **Key concepts**: Overlapping subproblems, optimal substructure, state definition, recurrence design, memoization, tabulation, reconstruction of solutions, space compression, sequence alignment, longest common subsequence, knapsack variants, edit distance, matrix-chain multiplication, and shortest-path connections.
- **Practice questions**: Identify the state and transition for a new problem; convert a recursive recurrence to a table; reconstruct an optimal solution; reduce memory use from two-dimensional to one-dimensional storage; explain why a greedy solution fails.
- **Student output**: A dynamic programming lab notebook with at least three problems, each including state definition, recurrence, base cases, order of evaluation, implementation, tests, and complexity analysis.

## Chapter 5: Graph Modeling, Search, and Structure
- **Key concepts**: Directed and undirected graphs, weighted and unweighted graphs, adjacency lists, adjacency matrices, sparse versus dense tradeoffs, BFS, DFS, connected components, cycle detection, bipartite testing, topological sorting, strongly connected components preview, and graph invariants.
- **Practice questions**: Model a scheduling, dependency, or reachability problem as a graph; trace BFS and DFS state; prove a BFS distance property; detect cycles in directed and undirected graphs; choose a representation for a given input scale.
- **Student output**: A graph toolkit with BFS, DFS, component analysis, topological sort, representation benchmarks, and tests over disconnected, cyclic, acyclic, sparse, and dense examples.

## Chapter 6: Shortest Paths, Minimum Spanning Trees, and Network Problems
- **Key concepts**: Single-source shortest paths, Dijkstra's algorithm, Bellman-Ford, negative edges, path reconstruction, all-pairs shortest paths preview, minimum spanning trees, Kruskal's algorithm, Prim's algorithm, union-find, cut and cycle properties, and network design applications.
- **Practice questions**: Explain why Dijkstra fails with negative weights; compare priority-queue choices; prove an MST cut property; trace union-find operations; choose between shortest-path and spanning-tree formulations.
- **Student output**: Implementations of Dijkstra, Bellman-Ford, Kruskal or Prim, and union-find, with proof notes, complexity analysis, and a route-planning or network-design case study.

## Chapter 7: Complexity, Reductions, and NP-Completeness
- **Key concepts**: Decision versus optimization problems, polynomial time, certificates, verification, P, NP, NP-hard, NP-complete, many-one reductions, SAT, 3-SAT, CLIQUE, VERTEX-COVER, independent set, Hamiltonian cycle, subset sum, and the role of reductions in problem classification.
- **Practice questions**: Convert an optimization problem to a decision version; verify a certificate in polynomial time; write a reduction outline; distinguish NP-hard from NP-complete; explain what NP-completeness says and does not say about practical instances.
- **Student output**: A reduction dossier with diagrams, source and target problem definitions, correctness argument in both directions, polynomial-time mapping, and implications for exact algorithms.

## Chapter 8: Randomized, Approximation, and Practical Algorithm Engineering
- **Key concepts**: Randomized quicksort, Las Vegas versus Monte Carlo algorithms, expected runtime, hashing connections, randomized sampling, approximation ratios, greedy approximation for set cover, vertex cover approximation, local search intuition, heuristics, benchmarking methodology, profiling, and responsible use of libraries.
- **Practice questions**: Compute expected comparisons for a randomized choice; distinguish high probability from expectation; prove a simple approximation bound; decide when an exact exponential algorithm is acceptable; interpret profiling output before optimizing.
- **Student output**: A practical algorithm study comparing exact, randomized, heuristic, and approximation approaches on a selected problem, with test data, performance plots, and a written recommendation.

## Capstone
Students complete an algorithmic investigation that begins with a real problem and ends with a defensible implementation and analysis. The project must define the computational problem precisely, model the input, compare at least two algorithmic strategies, prove correctness for the chosen exact method or state an approximation or randomized guarantee, implement and test the solution, analyze time and space complexity, measure performance on meaningful cases, and present tradeoffs clearly. Suitable projects include route planning, course scheduling, document similarity, resource allocation, network design, approximate set cover, sequence alignment, or puzzle solving.

## Assessment Ideas
- Weekly problem sets with proofs, recurrence analysis, asymptotic bounds, and small implementation tasks.
- In-class proof checks on loop invariants, induction, exchange arguments, cut properties, and reductions.
- Programming labs graded on correctness, edge cases, asymptotic behavior, code clarity, and empirical evidence.
- Short quizzes on algorithm selection, graph traces, DP state design, and complexity classifications.
- Capstone rubric covering problem formulation, algorithm choice, proof quality, implementation reliability, tests, performance analysis, and communication.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- MIT 6.006, Introduction to Algorithms: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/
- MIT 6.046J, Design and Analysis of Algorithms: https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/
- Stanford CS161, Design and Analysis of Algorithms: https://web.stanford.edu/class/archive/cs/cs161/cs161.1252/
- UC Berkeley CS170, Efficient Algorithms and Intractable Problems: https://cs170.org/
- CLRS, Introduction to Algorithms, as the standard reference for analysis, design paradigms, graph algorithms, and NP-completeness.
- Princeton Algorithms, Parts I and II: https://algs4.cs.princeton.edu/home/
