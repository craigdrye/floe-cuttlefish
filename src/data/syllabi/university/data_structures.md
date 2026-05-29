# Data Structures
**ID**: `dataStructures` - **Discipline**: Computing - **Year**: University Junior

## Course Aim
Data structures are the difference between a program that works on a toy input and one that survives real traffic. This course teaches you to design, implement, test, and *evaluate* the structures that make larger programs efficient: dynamic arrays, linked lists, stacks, queues, trees, balanced trees, hash tables, heaps, priority queues, and graphs. The central skill is not memorizing operations but reasoning about each structure through four lenses at once — its representation invariant (what must always be true of the internal state), its asymptotic cost (Big-O for time and space), its real memory behavior (allocation, copying, cache locality), and its correctness under adversarial and edge-case input.

The course is deliberately implementation-first. You will write the structures, not just describe them, and you will defend your choices with both a complexity argument and a measurement. A recurring theme is that the textbook bound and the stopwatch disagree in instructive ways: a hash map is O(1) average but O(n) under a collision attack; a dynamic array append is O(1) amortized but stutters on resize; a binary search tree is O(log n) only while it stays balanced. You learn to hold the average case, the worst case, and the amortized case as three separate facts and to say which one matters for a given workload.

By the end you should be able to pick up an unfamiliar ADT, state its invariant, choose between two reasonable representations with a written tradeoff, implement it with a test suite that targets empty/single/boundary/mutation cases, and explain where it breaks. That judgment — choosing the right structure for the query pattern and proving you chose well — is what separates a working coder from an engineer, and it is what later courses in algorithms, databases, and systems assume you already have.

## Course Design Notes
This is a rigorous CS2-style course built around weekly implementation labs, code review, and performance measurement. Route questions here when students need arrays and linked lists, stacks, queues, deques, recursion, binary and balanced trees, hash tables and sets, heaps and priority queues, graph representations and traversal, algorithm analysis, amortized reasoning, representation choices, or the testing of mutable structures. Pair every "what is the cost" question with a "why" — the invariant or recurrence that produces the cost — and a "when it fails" trap, because the most common student error is reciting a Big-O without knowing which case it describes.

Emphasize invariants, API design, unit tests, adversarial cases, diagrams, and empirical timing alongside notation. Questions should reward reasoning that an interviewer or a code reviewer would accept: not "linked lists are slow" but "linked lists lose to arrays on random access and cache locality, but win on O(1) splice when you already hold the node." Keep numeric claims precise (build-heap is O(n), not O(n log n); a single dynamic-array append is O(1) amortized, not worst-case) and tie every structure back to a workload that motivates it.

## Chapter 1: Analysis, Interfaces, and Representation Invariants
- **Core questions**: What does an abstract data type promise versus how it is implemented? How do you classify a code fragment as O(1), O(log n), O(n), O(n log n), or O(n^2)? What is a representation invariant and why does every mutable structure need one?
- **Key concepts**: Abstract data types and information hiding; Big-O, Big-Theta, Big-Omega; worst-case vs average-case vs amortized cost; space complexity; representation invariants and abstraction functions; the limits of benchmarking (warm-up, JIT, cache, constant factors).
- **Applied skills**: Write an ADT interface with two distinct implementations; annotate each operation with its tight bound; state and assert an invariant in code; design a benchmark that isolates the operation under test from setup noise.
- **Common traps**: Treating Big-O as a stopwatch instead of a growth rate; quoting "O(n)" without saying which case (a hash lookup is O(1) average but O(n) worst); confusing Big-O (upper bound) with Big-Theta (tight bound); ignoring constant factors when n is small; trusting a single benchmark run that measured allocation or cache warm-up rather than the algorithm.

## Chapter 2: Arrays, Dynamic Arrays, and Linked Lists
- **Core questions**: When does contiguous storage beat node-based storage, and vice versa? Why is appending to a dynamic array O(1) *amortized* but not O(1) worst-case? What pointer updates make a doubly linked list deletion correct?
- **Key concepts**: Contiguous memory and O(1) indexing; capacity vs size; geometric resizing and the amortized-append argument; cache locality; singly vs doubly linked lists; sentinel/dummy nodes; aliasing and iterator invalidation under mutation.
- **Applied skills**: Implement a dynamic array with doubling growth and trace a resize; reverse a linked list in place; splice a node in O(1) given its predecessor; choose array-backed vs node-backed for a stated access pattern and justify it.
- **Common traps**: Believing each append is constant-time when the resize copies all n elements (amortization spreads that cost; growth by a *constant* instead of a *factor* breaks the O(1) amortized bound); forgetting to update both `prev` and `next` on doubly-linked deletion; thinking linked lists give fast random access (they are O(n) — you must walk the chain); mutating a list while iterating over it.

## Chapter 3: Stacks, Queues, and Deques
- **Core questions**: Which problems are naturally LIFO and which are FIFO? How does a circular buffer reuse a fixed array without shifting? When does a linked implementation beat an array-backed one for a queue?
- **Key concepts**: Stack (LIFO) and queue (FIFO) APIs; array-backed vs linked stacks; circular buffers and modular wraparound; deques (double-ended); the call stack as a stack; buffering and scheduling; expression evaluation and balanced-delimiter checking.
- **Applied skills**: Evaluate a postfix expression with a stack; match nested parentheses/brackets; implement a circular queue and trace head/tail wraparound and full-vs-empty detection; benchmark a linked queue against an array-backed one under heavy enqueue/dequeue.
- **Common traps**: Confusing LIFO and FIFO when a problem "feels" ordered; off-by-one errors distinguishing a full circular buffer from an empty one (both can have head == tail unless you track size or leave a gap); using a plain array as a queue and paying O(n) to shift on every dequeue; assuming the call stack is unbounded — deep recursion overflows it.

## Chapter 4: Recursion, Trees, and Binary Search Trees
- **Core questions**: How do you reason about a recursive routine without simulating every call? Why does in-order traversal of a BST emit sorted output? How do you delete a BST node that has two children?
- **Key concepts**: Structural recursion and base cases; tree terminology (root, leaf, height, depth); preorder, inorder, postorder, and level-order traversal; the BST ordering invariant (left < node < right); search/insert/delete; the in-order successor; recursion-depth risk on degenerate trees.
- **Applied skills**: Produce all four traversal orders by hand and in code; delete a two-child node by swapping in its in-order successor; write a validator that rejects a malformed BST; identify a degenerate (linked-list-shaped) tree and explain its O(n) operations.
- **Common traps**: Checking only the immediate children instead of the full subtree range when validating a BST (a node can be larger than its parent yet still violate an ancestor's bound); replacing a deleted two-child node with an arbitrary child and breaking the invariant; assuming a plain BST is balanced (it is not — sorted insertions produce an O(n) chain); blowing the call stack on a deep recursive traversal.

## Chapter 5: Balanced Trees and Ordered Maps
- **Core questions**: What invariant keeps a search tree's height O(log n)? When does an ordered map beat a hash map? Why might you pick a red-black tree over an AVL tree, or the reverse?
- **Key concepts**: Self-balancing via rotations; AVL balance factors (-1, 0, +1) vs red-black color and black-height invariants; ordered maps/sets; range queries, predecessor/successor, ordered iteration; B-tree intuition for disk/block storage.
- **Applied skills**: Perform single and double rotations after an insertion; repair a violated balance/color invariant; compare lookup, insert, and ordered-iteration costs against a hash map; choose an ordered structure for a range-query or "next-largest-key" workload.
- **Common traps**: Assuming hash maps always win — they cannot do ordered iteration or range queries, where balanced trees shine; conflating the two balancing schemes (AVL is more rigidly balanced and favors lookup-heavy loads; red-black does fewer rotations — at most 2 on insert and at most 3 on delete — and wins on insert/delete-heavy loads); forgetting that "balanced" guarantees O(log n) height, not perfect balance; rotating in the wrong direction for an LR vs LL imbalance.

## Chapter 6: Hash Tables and Sets
- **Core questions**: What makes a good hash function and equality contract? How do chaining and open addressing differ under high load? Why are mutable keys and untrusted inputs dangerous?
- **Key concepts**: Hash functions and the hashCode/equals contract; load factor (entries ÷ buckets) and resize/rehash thresholds; separate chaining vs open addressing (linear probing, quadratic probing, double hashing); primary vs secondary clustering; tombstones for deletion; hash-flooding denial-of-service; average O(1) vs worst-case O(n).
- **Applied skills**: Trace insertions and collisions under both chaining and linear probing; implement deletion with tombstones and test that lookups still find later entries; measure how lookup cost degrades as load factor rises; explain why a key's hash must not change while it is stored.
- **Common traps**: Quoting O(1) as if it were guaranteed (it is average-case; adversarial keys or a bad hash force O(n)); mutating a key after insertion so its bucket no longer matches; deleting an open-addressing entry by clearing the slot, which orphans probes past it (use a tombstone); letting load factor climb without resizing; assuming linear probing and chaining behave the same near full — linear probing suffers primary clustering and degrades sharply.

## Chapter 7: Heaps, Priority Queues, and Scheduling
- **Core questions**: How does an array encode a complete binary tree with no pointers? Why is building a heap bottom-up O(n) when n insertions cost O(n log n)? When is a heap the right tool instead of a sorted list?
- **Key concepts**: Priority-queue ADT; binary min-/max-heaps; the array layout (children of index i at 2i+1 and 2i+2); heap-order and complete-tree properties; sift-up (insert) and sift-down (remove); bottom-up heapify; heapsort; top-k queries; event scheduling.
- **Applied skills**: Build a heap from an unsorted array bottom-up and trace it; extract-min and restore the invariant via sift-down; implement a priority queue and use it for top-k or event ordering; time bottom-up build against repeated insertion to confirm the O(n) vs O(n log n) gap.
- **Common traps**: Assuming a heap is fully sorted (only the root is the extreme; siblings are unordered); claiming bottom-up build is O(n log n) — it is O(n), because the sum of node heights converges (Σ h/2^h → 2) and most nodes sit near the leaves; using a heap when you actually need ordered iteration or arbitrary-key search (use a balanced tree); breaking the complete-tree shape by removing from the wrong position.

## Chapter 8: Graph Representations and Traversal
- **Core questions**: Adjacency list or adjacency matrix — which, and why? What does BFS guarantee that DFS does not? Why does Dijkstra need a priority queue and nonnegative weights?
- **Key concepts**: Directed/undirected and weighted/unweighted graphs; adjacency lists (O(V+E) space) vs matrices (O(V^2) space, O(1) edge check); BFS with a queue, DFS with a stack/recursion; connected components; cycle detection; topological order on a DAG; shortest-path preview (BFS for unweighted, Dijkstra for nonnegative-weighted).
- **Applied skills**: Choose a representation for a sparse vs dense graph and justify the space/query tradeoff; trace BFS and DFS visit order from a start node; detect a cycle; produce a topological order; explain why Dijkstra finalizes nodes greedily.
- **Common traps**: Using an adjacency matrix for a sparse graph and wasting O(V^2) memory, or a list when you need frequent O(1) edge-existence checks on a dense graph; forgetting the visited set and looping forever on a cycle; expecting BFS to give shortest paths on a *weighted* graph (it counts edges, not weights); running standard Dijkstra with negative edges — its greedy "finalized" assumption fails because a later, longer path can become cheaper.

## Capstone
Build a data-structure-backed system or library that exposes a clean, documented API, states its invariants, ships a full test suite, and compares at least two implementation choices with both a complexity argument and a measurement. Strong projects include an autocomplete index (trie vs sorted array + binary search), a route planner (graph + Dijkstra/BFS), a task scheduler (binary heap), an in-memory database index (hash map vs balanced tree, motivated by range queries), a game-state search tool, or a log analyzer with sliding-window aggregates. The submission must include: source code; tests covering empty, single-element, boundary, and mutation cases plus at least one adversarial case (e.g., a hash-collision or degenerate-tree input); benchmark notes that compare measured behavior to the theoretical bound and explain any divergence; diagrams of the internal representation; and a written tradeoff report defending the chosen structure for the target workload.

## Assessment Ideas
- Weekly implementation labs with hidden tests for boundary cases, mutation safety, and adversarial input.
- Short analysis quizzes on Big-O, invariants, recursion, amortization, and representation choice — always asking *which case* a bound describes.
- Code reviews focused on API design, invariant preservation, edge cases, and test quality.
- Performance labs comparing theoretical complexity with measured behavior (amortized append, bottom-up heapify, hash-table load factor).
- Capstone rubric covering correctness, invariants, complexity analysis, tests, documentation, and tradeoff reasoning.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- UC Berkeley CS61B, Data Structures: https://sp24.datastructur.es/
- Princeton Algorithms, Part I: https://algs4.cs.princeton.edu/home/
- MIT 6.006, Introduction to Algorithms: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/
- OpenDSA Data Structures and Algorithms: https://opendsa-server.cs.vt.edu/
- CLRS, Introduction to Algorithms, as a standard reference text for analysis and core structures.
