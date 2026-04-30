# Data Structures
**ID**: `dataStructures` · **Discipline**: Computing · **Year**: University Junior

## Course Philosophy
This is a core computer science course that bridges the gap between basic programming and complex algorithm design. Students will learn how to organize, store, and manipulate data efficiently, evaluating the time and space complexity tradeoffs of different architectural choices.

## Module 1: Complexity Analysis and Fundamentals (15%)
- Review of Big-O, Big-Omega, and Big-Theta notation
- Time vs Space Complexity tradeoffs
- Analyzing iterative and recursive algorithms
- Arrays vs Linked Lists: memory allocation, contiguous vs non-contiguous memory, and the cost of insertion/deletion/access
- Implementing Singly, Doubly, and Circular Linked Lists
- **Questions**: Deriving the Big-O time complexity of a nested loop with a dependent counter, implementing a method to reverse a doubly linked list

## Module 2: Stacks, Queues, and Hash Tables (20%)
- Stacks (LIFO): Implementation using arrays and linked lists; applications (call stack, parenthesis matching, evaluating postfix expressions)
- Queues (FIFO): Implementation using arrays (circular arrays) and linked lists; Deques (Double-ended queues); applications (scheduling, buffering)
- Hash Tables: Direct addressing vs hashing
- Hash functions: Properties of a good hash function
- Collision resolution techniques: Chaining (using linked lists) vs Open Addressing (Linear probing, quadratic probing, double hashing)
- Load factor and dynamic resizing
- **Questions**: Evaluating a postfix expression using a stack, comparing the performance of chaining vs linear probing under high load factors

## Module 3: Trees and Binary Search Trees (25%)
- Tree terminology: Root, node, edge, leaf, height, depth, subtree
- Binary Trees: Full, complete, and perfect binary trees
- Tree Traversals: Depth-First (Pre-order, In-order, Post-order) and Breadth-First (Level-order)
- Binary Search Trees (BST): Properties, insertion, deletion, and searching (average $O(\log n)$, worst case $O(n)$)
- AVL Trees (Self-balancing BSTs): Rotations (LL, RR, LR, RL) and maintaining balance factors
- (Optional/Stretch: Red-Black Trees or B-Trees)
- **Questions**: Tracing the deletion of a node with two children in a BST, performing AVL tree rotations after an insertion

## Module 4: Heaps and Priority Queues (20%)
- Priority Queues: Abstract data type definition
- Binary Heaps (Min-heaps and Max-heaps): Array representation, complete tree property, and heap-order property
- Heap operations: Insertion (`siftUp`), Deletion of min/max (`siftDown`), and `heapify`
- Heap Sort algorithm and its $O(n \log n)$ time complexity
- Applications: Dijkstra's algorithm (preview), median maintenance
- **Questions**: Building a max-heap from an unsorted array, tracking the state of an array during Heap Sort

## Module 5: Graphs and Advanced Data Structures (20%)
- Graph terminology: Directed vs Undirected, Weighted vs Unweighted, Cyclic vs Acyclic
- Graph Representations: Adjacency Matrix vs Adjacency List (space/time complexity tradeoffs)
- Graph Traversals: Breadth-First Search (BFS) using a queue and Depth-First Search (DFS) using a stack/recursion
- Shortest Path: Dijkstra's Algorithm using a priority queue
- Minimum Spanning Trees: Prim's Algorithm and Kruskal's Algorithm (introducing the Union-Find / Disjoint Set data structure)
- **Questions**: Choosing between an adjacency matrix and list for a sparse vs dense graph, tracing Dijkstra's algorithm to find the shortest path

## Stretch Zone
- Tries (Prefix Trees) for efficient string searching
- Disjoint Sets (Union-Find) with path compression
