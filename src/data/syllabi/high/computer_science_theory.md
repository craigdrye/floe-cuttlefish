# Computer Science Theory
**ID**: `computerScienceTheory` - **Discipline**: Computing - **Year**: 11 (ages 15-16)

## Course Aim
Give students a rigorous but motivating introduction to the ideas behind computation: how data is represented, how algorithms are reasoned about, what makes problems efficient or hard, how machines can be modeled, and where computation has limits. Students practice proof habits alongside labs, simulations, and security-minded design questions.

## Course Design Notes
This course works best after or alongside an introductory programming course. It uses unplugged activities, Python or pseudocode labs, diagrams, and short proofs so theory feels usable rather than abstract. The scope aligns with CSTA standards, AP Computer Science Principles big ideas, AP Computer Science A algorithmic reasoning, and classic ACM K-12 computing themes.

## Chapter 1: Data Representation and Digital Systems
- **Key concepts**: bit, byte, binary, hexadecimal, integer representation, overflow, ASCII, Unicode, image and sound encoding, compression.
- **Practice questions**: How is this number represented in binary? What information is lost by this compression? Why can overflow happen?
- **Lab output**: a data representation notebook with conversions, encoding examples, and a short compression experiment.

## Chapter 2: Logic, Circuits, and Proof Habits
- **Key concepts**: proposition, truth table, Boolean algebra, `and`, `or`, `not`, XOR, implication, De Morgan's laws, logic gate, invariant.
- **Practice questions**: Are these two expressions equivalent? Which circuit matches the truth table? What claim must be shown?
- **Lab output**: a truth-table and circuit-design exercise plus a short written proof of equivalence.

## Chapter 3: Algorithms, Correctness, and Complexity Intuition
- **Key concepts**: algorithm, specification, precondition, postcondition, loop invariant, time complexity, space complexity, Big O, best/worst case.
- **Practice questions**: Why does this algorithm terminate? What input creates the worst case? What is ignored when using Big O?
- **Lab output**: an algorithm analysis sheet comparing several solutions to the same problem.

## Chapter 4: Searching, Sorting, and Recursion
- **Key concepts**: linear search, binary search, selection sort, insertion sort, merge sort, recursion, base case, call stack, divide and conquer.
- **Practice questions**: What precondition does binary search require? Which sorting pass just occurred? What is the recursive subproblem?
- **Lab output**: trace diagrams and timing experiments for search, sort, and one recursive function.

## Chapter 5: Data Structures and Graphs
- **Key concepts**: array, list, stack, queue, hash table, tree, graph, node, edge, adjacency list, BFS, DFS, shortest path intuition.
- **Practice questions**: Which structure fits the operation pattern? How does BFS visit this graph? Why might a hash collision matter?
- **Lab output**: a graph model of a school, transit, game, or social system with traversal results and design tradeoffs.

## Chapter 6: Automata, Languages, and Models of Computation
- **Key concepts**: finite-state machine, state, transition, accept state, regular language, regular expression, grammar, Turing machine.
- **Practice questions**: Which strings does this machine accept? How can a pattern be represented as states? What does the tape model capture?
- **Lab output**: a finite-state machine for a vending machine, lock, game enemy, or text pattern, with accepted and rejected examples.

## Chapter 7: Computability, Hard Problems, and Limits
- **Key concepts**: decidable problem, undecidable problem, halting problem, reduction intuition, P, NP, verification, brute force, heuristic.
- **Practice questions**: Is this problem asking to find or verify a solution? Why can no perfect halting checker exist? When is brute force unrealistic?
- **Lab output**: a short explainer comparing an easy, hard, and undecidable problem using examples a non-specialist could understand.

## Chapter 8: Cryptography, Security, and Responsible Theory
- **Key concepts**: threat model, encryption, decryption, symmetric key, public key, hash, digital signature, authentication, randomness, attack surface.
- **Practice questions**: Is this a hash or encryption task? What assumption makes the system secure? What can an attacker observe or change?
- **Lab output**: a security case study that models a protocol, identifies risks, and explains how cryptographic tools help or fail.

## Capstone
Create a theory-to-practice investigation. Students choose an algorithm, data representation system, automaton, graph problem, or security protocol; build a small simulation or visual model; analyze correctness and efficiency; and present a clear argument about what the model proves, approximates, or cannot decide.

## Assessment Ideas
- Problem sets graded on reasoning, notation, diagrams, and clear justification rather than final answers alone.
- Labs graded on accurate models, trace evidence, and connection between code or diagrams and theory.
- Capstone graded on conceptual accuracy, proof or analysis quality, communication, and responsible treatment of limits and security claims.

## Research Notes
- CSTA K-12 Computer Science Standards: https://csteachers.org/k12standards/
- AP Computer Science Principles course page: https://apcentral.collegeboard.org/courses/ap-computer-science-principles
- AP Computer Science A course page: https://apcentral.collegeboard.org/courses/ap-computer-science-a
- ACM/CSTA K-12 Computer Science Standards historical materials: https://csteachers.org/page/standards
- CS50 for AP Computer Science Principles: https://cs50.harvard.edu/ap/
