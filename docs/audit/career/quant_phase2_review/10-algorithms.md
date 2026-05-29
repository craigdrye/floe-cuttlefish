# Phase 2 Review — Algorithms

**28 questions** · core: 3 · advanced: 25

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19501 | ⚪ adv | Quicksort Complexity | What is the average-case and worst-case time complexity of Quicksort? | Average: O(n log n), Worst: O(n^2) |
| 2 | 19502 | ⚪ adv | Knuth Shuffle | How do you generate a random permutation of n elements in O(n) time? | Iterate from i=0 to n-1, swapping element i with a random e… |
| 3 | 19503 | ⚪ adv | Reservoir Sampling | How do you pick a random element from a stream of unknown length such that every element has probability 1/n? | Keep the k-th element with probability 1/k. |
| 4 | 19504 | ⚪ adv | Find Max and Min | What is the minimum number of comparisons to find both the max and min of an array of n elements? | 3n/2 |
| 5 | 19505 | ⚪ adv | Infinite Array Search | How do you find an element in an array of unknown (infinite) size? | Check indices 1, 2, 4, 8... until you exceed the value, the… |
| 6 | 19506 | ⚪ adv | 2D Matrix Search | How do you find a value in an n x n matrix where rows and columns are sorted? | Start at top-right, move left if value is smaller, down if… |
| 7 | 19507 | ⚪ adv | Fibonacci Efficiency | Why is the recursive F(n) = F(n-1) + F(n-2) slow? | It computes the same subproblems many times, leading to O(2… |
| 8 | 19508 | ⚪ adv | Linked List Cycle | How do you detect a cycle in a linked list with O(1) space? | Use two pointers, one moving twice as fast as the other. |
| 9 | 19509 | ⚪ adv | Stack using Queues | How can you implement a Stack using two Queues? | On push, add to the empty queue and move all elements from… |
| 10 | 19510 | ⚪ adv | Count Set Bits | How do you count the number of 1s in a binary integer efficiently? | Use n = n & (n - 1) repeatedly until n is 0. |
| 11 | 19511 | ⚪ adv | Power of 2 | How do you check if n is a power of 2 using bitwise operators? | (n > 0) && (n & (n - 1) == 0) |
| 12 | 19512 | ⚪ adv | log(n!) Complexity | What is the Big O complexity of log(n!)? | O(n log n) |
| 13 | 19513 | ⚪ adv | Knapsack Problem | What is the time complexity of the 0/1 Knapsack problem using Dynamic Programming? | O(n * W) where n is items and W is capacity. |
| 14 | 19514 | ⚪ adv | Longest Common Subsequence | What is the time complexity of finding the LCS of two strings of length n and m? | O(n * m) |
| 15 | 19515 | ⚪ adv | Dijkstra's Algorithm | What is the time complexity of Dijkstra's algorithm using a binary heap? | O((V + E) log V) |
| 16 | 19516 | ⚪ adv | Numerical Integration | What is Simpson's Rule for numerical integration? | A method that uses parabolic segments to approximate the ar… |
| 17 | 19517 | ⚪ adv | Discrete Sampling | How do you sample from a discrete distribution with probabilities p1...pn using a Uniform(0,1) variable U? | Calculate cumulative probabilities Ck = sum(p1...pk) and fi… |
| 18 | 19518 | ⚪ adv | Date Increment | What is the "Leap Year" rule for the year 2000 vs 2100? | 2000 was a leap year (divisible by 400), but 2100 will not… |
| 19 | 19519 | ⚪ adv | Matrix Exponentiation | How can you efficiently compute M^n for a matrix M and large n? | Binary exponentiation (Exponentiation by Squaring) in O(log… |
| 20 | 19520 | ⚪ adv | sin(x)/x Stability | How should you implement f(x) = sin(x)/x to be stable at x = 0? | Return 1 if \|x\| is very small, or use the Taylor expansion… |
| 21 | 19521 | ⚪ adv | Max Subarray Sum | What is Kadane's Algorithm used for? | Finding the contiguous subarray with the largest sum in O(n… |
| 22 | 19522 | ⚪ adv | Submarine Interception | A submarine starts at an unknown integer p and moves v units/turn. Can you hit it with a missile? | Yes, by enumerating all pairs (p, v) and checking one pair… |
| 23 | 19523 | ⚪ adv | Robot Collision | Two robots on a line have identical code. How can they collide if they land at different spots? | Move in one direction and check for the other's parachute;… |
| 24 | 19524 | ⚪ adv | Importance Sampling | When is Importance Sampling useful in Monte Carlo pricing? | When pricing deep out-of-the-money options to reduce varian… |
| 25 | 19601 | 🟢 core | Finding Duplicates | In an array of n+1 elements where each value is in the range [1, n], how do you find a duplicate in O(n) time and O(1)… | Treat the array as a linked list and use Floyd's cycle dete… |
| 26 | 19602 | ⚪ adv | Tree Summation | How do you sum all nodes in a binary tree? | Recursively: Current Value + Sum(Left Child) + Sum(Right Ch… |
| 27 | 19827 | 🟢 core | Streaming Top Five | A feed has 10 million trades and you only need the 5 largest trade sizes. Memory matters because your laptop fan is alr… | Scan once and maintain a min-heap of size 5. |
| 28 | 19829 | 🟢 core | Backtest Smell Test | A strategy backtest shows a 90% annual return with tiny drawdowns. Before doing a victory lap on the office chair, what… | Whether the data, timestamps, fees, and execution assumptio… |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

