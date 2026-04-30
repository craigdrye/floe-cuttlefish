# Software Engineering Interview Prep
**ID**: `software` · **Discipline**: Technology · **Year**: University Senior / Career Hopper

## Course Philosophy
This syllabus is designed to prepare software engineers for rigorous technical interviews at top-tier tech companies (FAANG/MAANG). It focuses on Data Structures & Algorithms (LeetCode style), System Design, and Behavioral interviewing.

## Module 1: Data Structures & Algorithms Fundamentals (20%)
- Big-O Time and Space Complexity analysis
- Arrays and Strings: Two-pointer technique, Sliding Window, Prefix Sums
- Hash Tables: Frequency counting, anagrams, two-sum variations
- Linked Lists: Fast/Slow pointers (cycle detection), reversing, merging
- Stacks and Queues: Monotonic stacks, parenthesis matching, BFS queues
- **Questions**: Solving "Valid Anagram" using a hash map, implementing "Reverse a Linked List", using the sliding window technique for "Longest Substring Without Repeating Characters"

## Module 2: Advanced Data Structures & Algorithms (25%)
- Trees and BSTs: Traversals (Inorder, Preorder, Postorder), Lowest Common Ancestor, validating BSTs
- Graphs: BFS (shortest path in unweighted graphs), DFS (cycle detection, topological sort), connected components (Union-Find)
- Heaps/Priority Queues: Top K elements, median from a data stream
- Tries (Prefix Trees): Autocomplete implementations
- Backtracking: Permutations, combinations, subsets, N-Queens
- **Questions**: Solving "Number of Islands" using DFS/BFS, implementing a Trie for search suggestions, solving "Merge K Sorted Lists" using a priority queue

## Module 3: Dynamic Programming and Greedy Algorithms (15%)
- 1D Dynamic Programming: Memoization vs Tabulation, climbing stairs, house robber, coin change
- 2D Dynamic Programming: Longest Common Subsequence, edit distance, unique paths
- Greedy Algorithms: Interval scheduling, jump game
- **Questions**: Formulating the state transition equation for the "Knapsack Problem", recognizing when to use Greedy vs DP

## Module 4: System Design Interviews (25%)
- Core Concepts: Vertical vs Horizontal scaling, Load Balancers, Caching (Redis/Memcached), Database Sharding, Replication, CAP Theorem (Consistency vs Availability)
- Storage: Relational (SQL) vs NoSQL (Document, Key-Value, Columnar, Graph)
- Communication: REST, RPC, WebSockets, Message Queues (Kafka/RabbitMQ)
- Microservices vs Monoliths
- Walkthrough Framework: Understand requirements $\to$ Capacity estimation $\to$ High-level design $\to$ Deep dive into components
- **Questions**: Designing a URL shortener (e.g., TinyURL), designing a distributed rate limiter, designing a chat application (e.g., WhatsApp)

## Module 5: Object-Oriented Design & Behavioral (15%)
- Object-Oriented Design (OOD): SOLID principles, Design Patterns (Singleton, Factory, Observer, Strategy)
- Designing classes and interfaces for real-world objects (e.g., Design a Parking Lot, Design an Elevator System)
- Behavioral Interviews: The STAR Method (Situation, Task, Action, Result)
- Leadership Principles: Answering "Tell me about a time you had a conflict with a coworker" or "Tell me about a time you failed."
- **Questions**: Applying the Factory pattern to a mock scenario, delivering a concise STAR response to a behavioral question

## Stretch Zone
- Concurrency and Multithreading: Deadlocks, mutexes, semaphores (e.g., Dining Philosophers problem)
- API Design and schema definition
