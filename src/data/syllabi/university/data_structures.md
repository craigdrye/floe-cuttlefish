# Data Structures
**ID**: `dataStructures` - **Discipline**: Computing - **Year**: University Junior

## Course Aim
Teach students to design, implement, test, and evaluate the data structures that make larger programs efficient. Students compare arrays, lists, stacks, queues, trees, hash tables, graphs, heaps, and priority queues through the lens of representation invariants, asymptotic analysis, memory behavior, implementation tradeoffs, and correctness under edge cases.

## Course Design Notes
This is a rigorous CS2-style implementation course with labs, code review, and performance measurement. Route questions here when students need arrays and linked lists, stacks, queues, recursion, trees, hash tables, heaps, graphs, priority queues, algorithm analysis, amortized reasoning, representation choices, or testing of mutable structures. Emphasize invariants, API design, unit tests, adversarial cases, diagrams, and empirical timing alongside Big-O notation.

## Chapter 1: Analysis, Interfaces, and Representation
- **Key concepts**: Abstract data types, interfaces, implementation hiding, representation invariants, Big-O, Big-Theta, Big-Omega, worst-case versus average-case cost, space complexity, amortized analysis, and benchmarking limits.
- **Practice questions**: State the invariant for a data structure; compare two implementations of the same ADT; classify a code fragment's time and space cost; explain why a benchmark can mislead.
- **Student output**: A tested ADT interface with two simple implementations and a short analysis memo comparing operations.

## Chapter 2: Arrays, Dynamic Arrays, and Linked Lists
- **Key concepts**: Contiguous memory, indexing, capacity, resizing, amortized append, cache locality, singly linked lists, doubly linked lists, sentinels, insertion, deletion, traversal, aliasing, and iterator behavior.
- **Practice questions**: Trace a resize operation; reverse a linked list; choose between an array-backed and node-backed representation; identify pointer-update bugs in deletion.
- **Student output**: Implementations of dynamic array and linked list variants with tests for empty, single-element, boundary, and mutation cases.

## Chapter 3: Stacks, Queues, and Deques
- **Key concepts**: LIFO and FIFO behavior, stack and queue APIs, array-backed stacks, linked stacks, circular buffers, deques, call stack intuition, buffering, scheduling, expression parsing, and balanced-delimiter checks.
- **Practice questions**: Evaluate postfix expressions; use a stack to match parentheses; trace wraparound in a circular queue; compare linked and array-backed queues under frequent enqueue/dequeue.
- **Student output**: Stack, queue, and deque implementations plus a small parser or scheduler exercise that uses them.

## Chapter 4: Recursion, Trees, and Binary Search Trees
- **Key concepts**: Recursive definitions, structural recursion, tree terminology, traversal orders, binary trees, binary search tree invariants, search, insertion, deletion, height, balance, and recursion depth risks.
- **Practice questions**: Trace preorder, inorder, postorder, and level-order traversal; delete a BST node with two children; prove that inorder traversal of a BST is sorted; identify a degenerate tree.
- **Student output**: A binary tree and BST library with traversal generators, insertion, deletion, validation, and tests against malformed structures.

## Chapter 5: Balanced Trees and Ordered Maps
- **Key concepts**: AVL trees or red-black trees, rotations, balance factors or color invariants, ordered maps, ordered sets, range queries, predecessor and successor, B-tree intuition, and when balanced trees beat hash tables.
- **Practice questions**: Perform rotations after insertion; repair a violated invariant; compare lookup, insertion, and ordered iteration costs; choose an ordered map for a range-query workload.
- **Student output**: A balanced-tree exercise with invariant checks, rotation traces, and a brief tradeoff comparison to built-in maps.

## Chapter 6: Hash Tables and Sets
- **Key concepts**: Hash functions, equality contracts, direct addressing, chaining, open addressing, linear probing, quadratic probing, double hashing, tombstones, load factor, resizing, denial-of-service considerations, and average-case versus worst-case behavior.
- **Practice questions**: Trace insertions under collisions; explain why mutable keys are unsafe; compare chaining and probing at high load factor; design tests for deletion with tombstones.
- **Student output**: A hash map or hash set implementation with collision tests, resizing tests, and a measured load-factor experiment.

## Chapter 7: Heaps, Priority Queues, and Scheduling
- **Key concepts**: Priority queue ADT, binary heaps, min-heaps, max-heaps, array representation, heap-order property, complete-tree property, sift up, sift down, heapify, heapsort, top-k queries, and scheduling applications.
- **Practice questions**: Build a heap from an array; trace removal of the minimum; compare repeated insertion with bottom-up heapify; use a priority queue for event ordering.
- **Student output**: A binary heap and priority queue with tests, timing comparisons, and a small top-k or scheduler application.

## Chapter 8: Graph Representations and Traversal
- **Key concepts**: Directed and undirected graphs, weighted and unweighted edges, adjacency lists, adjacency matrices, edge lists, BFS, DFS, connected components, cycle detection, topological order, shortest-path preview, and memory tradeoffs for sparse and dense graphs.
- **Practice questions**: Choose a representation for a sparse or dense graph; trace BFS and DFS order; detect cycles; explain why Dijkstra's algorithm needs a priority queue for efficiency.
- **Student output**: A graph library with adjacency-list representation, BFS, DFS, component analysis, and tests over disconnected, cyclic, and weighted examples.

## Capstone
Students build a data-structure-backed system or library that exposes a clean API, documents invariants, includes a full test suite, and compares at least two implementation choices. Suitable projects include an autocomplete index, route planner, task scheduler, in-memory database index, game-state search tool, log analyzer, or graph exploration toolkit. The final submission includes code, tests, benchmark notes, diagrams, and a tradeoff report.

## Assessment Ideas
- Weekly implementation labs with hidden tests for boundary cases and mutation safety.
- Short analysis quizzes on Big-O, invariants, recursion, amortization, and representation choices.
- Code reviews focused on API design, edge cases, invariant preservation, and test quality.
- Performance labs comparing theoretical complexity with measured behavior.
- Capstone rubric covering correctness, invariants, complexity analysis, tests, documentation, and tradeoff reasoning.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- UC Berkeley CS61B, Data Structures: https://sp24.datastructur.es/
- Princeton Algorithms, Part I: https://algs4.cs.princeton.edu/home/
- MIT 6.006, Introduction to Algorithms: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/
- OpenDSA Data Structures and Algorithms: https://opendsa-server.cs.vt.edu/
- CLRS, Introduction to Algorithms, as a standard reference text for analysis and core structures.
