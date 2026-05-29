// Quant Interview Core — Chapter 7: Coding and Data Screen Basics.
//
// These 10 questions (IDs 19940-19949) cover the "name the right pattern"
// muscle that the data screen tends to test: hash maps, two pointers and
// sliding windows, recursion vs memoization, and the implementation edge
// cases that catch otherwise-correct candidates.
//
// Voice and schema match the inline-object entries in quant.ts (see 19601,
// 19602, 19827, 19828, 19829 for the reference tone). Distractors are
// designed to look plausible to someone who has heard of the right pattern
// but is reaching for the wrong tool.

import type { Question } from './types'
import { makeQuestionBank } from './base'

export const ch7CodingQuestions: Question[] = makeQuestionBank('Quant Finance', [
  // -------------------------------------------------------------------------
  // Cluster 1 — Hash Maps & Sets (3 Qs)
  // -------------------------------------------------------------------------
  {
    id: 19940,
    chapter: 'Coding Patterns',
    title: 'Two Sum Lookup',
    prompt: 'Given an unsorted integer array and a target T, you need to return indices i, j such that A[i] + A[j] = T. The interviewer wants the cleanest linear-time solution. What is it?',
    correct: 'Iterate once, and for each A[i] check whether T - A[i] is already in a hash map of "value -> index".',
    wrong: [
      ['Sort the array, then two-pointer scan from both ends.', 'Sorting costs O(n log n) and you lose the original indices the question asks for.', 'A single pass with a hash map matches the problem exactly.'],
      ['Nested loop comparing every pair.', 'That is O(n^2) and is the brute-force baseline you are expected to beat.', 'Trade O(n) memory for linear time.'],
      ['Binary search for T - A[i] on every iteration.', 'Binary search needs sorted data, which the prompt does not give you.', 'Hash lookup is O(1) average; no sorting required.'],
    ],
    lesson: "This is the canonical hash map lookup pattern. Walk the array once; for each value v at index i, ask the map whether T - v has been seen before. If yes, you have your pair. If no, store v -> i and continue.\n\nTime: O(n) average. Space: O(n). The brute-force nested loop is O(n^2) — you should mention it as the baseline you are improving on. Sorting plus two pointers is O(n log n) and is the right move when the input is already sorted, but it scrambles the original indices that the prompt asks you to return.\n\nThe pattern to name out loud: 'complement lookup with a hash map'. Whenever the question is 'is there a pair / triple / k-tuple summing to T', this is the first tool to reach for.",
  },
  {
    id: 19941,
    chapter: 'Coding Patterns',
    title: 'Group Anagrams',
    prompt: 'You are given a list of strings and must return the strings grouped together when they are anagrams of each other (same letters, same multiplicity). What is the canonical interview solution?',
    correct: 'Use a hash map whose key is a canonical form of the string (e.g. the sorted characters) and whose value is the list of originals.',
    wrong: [
      ['Compare every pair of strings character by character.', 'That is O(n^2 * k) and ignores the obvious bucketing structure.', 'Pick a canonical key so anagrams collide on lookup.'],
      ['Hash each string by its raw value.', 'Raw strings are different even when they are anagrams; nothing collides.', 'You need a key that is invariant under permutation.'],
      ['Sort the entire list of strings lexicographically.', 'Sorting the list does not put anagrams next to each other.', 'Sort the characters within each string, not the list of strings.'],
    ],
    lesson: "Name the pattern: 'hash by canonical key'. Anagrams are equivalent under permutation of characters, so any permutation-invariant fingerprint will do as the bucket key.\n\nTwo common choices: (1) the sorted-character string — O(k log k) per word, simple and correct; (2) a 26-length character-count tuple — O(k) per word, slightly faster but more code. Either way the map is { key -> list of originals }.\n\nTotal time: O(n * k log k) for the sorted-key version where n is the number of strings and k is the average length. Space: O(n * k). The wrong move is to compare strings pairwise; the right instinct is always 'is there a canonical form I can hash on?'",
  },
  {
    id: 19942,
    chapter: 'Coding Patterns',
    title: 'First Non-Repeating Character',
    prompt: 'Given a string, return the first character that does not repeat. Example: "swiss" -> "w". Which approach is the cleanest O(n) solution?',
    correct: 'Make one pass to build a character-count hash map, then a second pass over the original string and return the first character with count 1.',
    wrong: [
      ['Use a hash set of seen characters and return the first character not already in the set.', 'A set only knows "seen at all", not "seen exactly once". The first character will always be reported as non-repeating.', 'You need counts, not just membership.'],
      ['Sort the string and look for an adjacent mismatch.', 'Sorting destroys the original position, which is exactly what the question asks you to preserve.', 'Two linear passes beat the O(n log n) sort.'],
      ['For each character, scan the rest of the string to check uniqueness.', 'That is O(n^2) and is the baseline you should be improving on.', 'A single count map plus one ordered pass is enough.'],
    ],
    lesson: "Name the pattern: 'count, then scan in original order'. The two-pass structure is doing real work — pass 1 collects global information (counts), pass 2 uses it while preserving input order.\n\nTime: O(n). Space: O(k) where k is the size of the alphabet (often O(1) for ASCII). The temptation to use a hash set instead of a count map is the most common bug — a set tells you 'have I seen this', not 'how many times'.\n\nVariants: 'first character appearing exactly twice', 'first index whose character is unique in its window' — same shape, same two-pass solution. Reach for a count map whenever 'first / last / only one that ...' shows up in the prompt.",
  },

  // -------------------------------------------------------------------------
  // Cluster 2 — Two Pointers & Sliding Window (3 Qs)
  // -------------------------------------------------------------------------
  {
    id: 19943,
    chapter: 'Coding Patterns',
    title: 'Longest Unique Substring',
    prompt: 'Return the length of the longest substring of a given string that contains no repeating characters. What is the canonical linear-time approach?',
    correct: 'Sliding window with a hash map of last-seen indices: advance the right edge, and when a repeat appears jump the left edge past the previous occurrence.',
    wrong: [
      ['Enumerate every substring and check uniqueness with a hash set.', 'That is O(n^3) — n^2 substrings times O(n) uniqueness checks.', 'A single pass is enough if you keep a window of valid characters.'],
      ['Sort the string and count the longest run of distinct adjacent characters.', 'Sorting destroys the substring relationship; "abca" is not the same as "aabc".', 'The substring must be contiguous in the original string.'],
      ['Recursively try including or excluding each character.', 'Exponential time and overkill for a problem with obvious window structure.', 'The window only moves forward — no backtracking needed.'],
    ],
    lesson: "This is the textbook sliding window pattern. Maintain a window [L, R] that is always a substring of distinct characters. Move R forward one step at a time; if A[R] was last seen at index j and j >= L, jump L to j + 1 to evict the duplicate. Track the best window length as you go.\n\nThe key data structure is a hash map from character to its most recent index — O(1) per step, O(n) total. Space is O(k) for the alphabet.\n\nName the pattern out loud: 'sliding window with a last-seen map'. The window only ever moves forward; you never re-scan from L. That monotonicity is what turns the O(n^2) brute force into O(n).",
  },
  {
    id: 19944,
    chapter: 'Coding Patterns',
    title: 'Two-Sum on a Sorted Array',
    prompt: 'You are told the input array is already sorted, and you need indices of a pair that sums to T. The interviewer asks for O(1) extra space. What is the right approach?',
    correct: 'Two pointers from both ends: move left in if the sum is too small, right in if it is too big, stop when they meet or the sum equals T.',
    wrong: [
      ['Hash map of complements as in the unsorted version.', 'Correct but uses O(n) extra space, which violates the stated constraint.', 'The sortedness lets you do it in O(1) extra space.'],
      ['Binary search for T - A[i] for every i.', 'O(n log n) and ignores the simpler two-pointer structure available when the array is sorted.', 'Use the monotonicity from both ends at once.'],
      ['Sort it again and then scan linearly.', 'It is already sorted; the extra sort is wasted work and does not help.', 'Move two indices toward each other based on the current sum.'],
    ],
    lesson: "Name the pattern: 'two-pointer convergence on a sorted array' — O(n) time, O(1) extra space. The invariant is that any pair that could possibly sum to T still lies between L and R.\n\nIf A[L] + A[R] < T, the smallest element at L cannot be part of a valid pair with anything <= A[R], so L moves in. If the sum exceeds T, the largest element at R cannot be part of a valid pair with anything >= A[L], so R moves in. Each step rules out one element and shrinks the search space by one.\n\nThe hash map solution from the unsorted variant still works, but burns O(n) memory you do not need. When the array is sorted, two pointers are the right tool — and it is the move the interviewer is fishing for.",
  },
  {
    id: 19945,
    chapter: 'Coding Patterns',
    title: 'Container With Most Water',
    prompt: 'Given an array h where h[i] is the height of a vertical line at x = i, find two lines that, together with the x-axis, hold the most water. Water held by (i, j) is (j - i) * min(h[i], h[j]). What is the O(n) solution?',
    correct: 'Two pointers at both ends; at each step compute the area, then move the pointer at the shorter line inward.',
    wrong: [
      ['Try every pair (i, j) and keep the maximum.', 'That is O(n^2) and is the baseline you are expected to beat.', 'A two-pointer sweep gives O(n) with one careful greedy step.'],
      ['Sort the heights and pair the two tallest.', 'Sorting destroys the x-coordinates, which are part of the area formula.', 'You need both height and position; sorting throws away position.'],
      ['Always move the pointer at the taller line inward.', 'That can only reduce both factors of the area — the width shrinks and the height is bounded by the shorter line you left in place.', 'Move the shorter line; that is the only side that might find a taller match.'],
    ],
    lesson: "Two-pointer sweep with a greedy choice. Start with L = 0, R = n - 1 — the widest possible container. Compute the area; then ask which side to move.\n\nMoving the shorter side is the only move that could possibly increase the area: the width strictly decreases by one, so the height must strictly increase to win. The shorter side caps the current height, so it is the only side worth replacing. Moving the taller side keeps height capped by the (unchanged) shorter side, and width is smaller — strict loss.\n\nName the pattern: 'two pointers with a shorter-side greedy step'. O(n) time, O(1) extra space. The proof of correctness — that you never skip the optimal pair — is what interviewers like to hear.",
  },

  // -------------------------------------------------------------------------
  // Cluster 3 — Recursion, DP & Complexity (2 Qs)
  // -------------------------------------------------------------------------
  {
    id: 19946,
    chapter: 'Coding Patterns',
    title: 'Fibonacci, Two Ways',
    prompt: 'The naive recursive fib(n) = fib(n-1) + fib(n-2) is very slow; the memoized version is fast. What are the time complexities of the two?',
    correct: 'Naive recursion is O(2^n); memoized recursion is O(n).',
    wrong: [
      ['Both are O(n) — the recursion just feels slow.', 'Each call without memoization spawns two more, giving a recursion tree of roughly 2^n leaves.', 'Count the number of distinct subproblems vs the number of calls.'],
      ['Naive is O(n^2); memoized is O(log n).', 'Wrong on both ends. The naive call tree branches by two, not by n; memoization computes each fib(k) once for k = 0..n.', 'There are n distinct subproblems, each solved once with memoization.'],
      ['Naive is O(n!); memoized is O(1).', 'Factorial growth would require the branching factor to grow with n, which it does not.', 'Branching factor 2 with depth n gives 2^n, not n!.'],
    ],
    lesson: "Without memoization, fib(n) computes fib(n - 1) and fib(n - 2) from scratch — and each of those does the same, all the way down. The recursion tree has roughly 2^n leaves, and the same subproblems are recomputed exponentially many times. Total time: O(2^n) (more precisely O(phi^n)).\n\nMemoization caches fib(k) the first time it is computed and returns it for free thereafter. There are only n + 1 distinct subproblems (fib(0) through fib(n)), each solved once with O(1) work given its dependencies. Total time: O(n). Space: O(n) for the cache (or O(1) for the bottom-up iterative version that keeps only the last two values).\n\nName the pattern: 'memoize overlapping subproblems'. The same trick converts naive recursion to dynamic programming whenever the call tree has many repeated subcalls.",
  },
  {
    id: 19947,
    chapter: 'Coding Patterns',
    title: 'Climbing Stairs',
    prompt: 'A staircase has n steps. Each move you can climb 1 step or 2 steps. How many distinct sequences of moves reach the top, and what is the recurrence?',
    correct: 'f(n) = f(n - 1) + f(n - 2), with f(0) = f(1) = 1 — the Fibonacci recurrence.',
    wrong: [
      ['f(n) = 2^n, since each step has two choices.', 'Once you take a 2-step, you have skipped a position, so the number of remaining moves is not n.', 'Condition on the size of the first move and recurse on what remains.'],
      ['f(n) = n!, since the moves are ordered.', 'Factorial growth assumes n distinct choices to permute, but you only ever pick from {1, 2}.', 'Two choices at each decision, and the decisions are not independent.'],
      ['f(n) = n, since you can take n single steps or fewer with 2-steps.', 'That undercounts; ways to climb 4 stairs is 5, not 4.', 'Try n = 4 by hand and check.'],
    ],
    lesson: "Name the recurrence: 'condition on the first move'. To reach step n, your first move was either a 1-step (leaving f(n - 1) ways to finish) or a 2-step (leaving f(n - 2)). So f(n) = f(n - 1) + f(n - 2).\n\nBase cases: f(0) = 1 (the empty sequence is the one way to climb zero stairs) and f(1) = 1. From there: 1, 1, 2, 3, 5, 8, 13, ... — Fibonacci.\n\nThe naive recursive implementation is O(2^n); the DP / iterative implementation is O(n) time and O(1) space (keep just the last two values). The interview point: spotting that a problem is the Fibonacci recurrence in disguise is the whole exercise — many staircase, tiling, and path-counting problems collapse to this.",
  },

  // -------------------------------------------------------------------------
  // Cluster 4 — Edge Cases & Implementation Discipline (2 Qs)
  // -------------------------------------------------------------------------
  {
    id: 19948,
    chapter: 'Coding Patterns',
    title: 'Reverse a Linked List',
    prompt: 'You are asked to reverse a singly linked list in place. The algorithm itself is short — but which edge cases trip otherwise-correct candidates?',
    correct: 'Empty list (head is null), single-node list, and remembering to return the new head (the old tail) rather than the original head.',
    wrong: [
      ['Lists of length divisible by 3, because the three-pointer dance falls out of phase.', 'The algorithm has no period-3 dependence; the three pointers (prev, curr, next) work for any length.', 'The risky cases are at the boundaries of the list, not in the middle.'],
      ['Cyclic lists, which become impossible to reverse.', 'The prompt specifies a singly linked list, not a cyclic one; cycle handling is a separate problem.', 'Focus on degenerate inputs and the return value.'],
      ['Lists where values are negative, because the comparison logic breaks.', 'Reversal does not compare values at all; it only manipulates next pointers.', 'The pitfall is structural, not value-based.'],
    ],
    lesson: "The reversal logic itself is three pointers: prev = null, curr = head, and at each step (next = curr.next; curr.next = prev; prev = curr; curr = next). The interview value is showing you have thought about the edges:\n\n1. Empty list: head is null, the loop body never runs, you return prev which is still null. Works only because you initialised prev = null — a common bug is to start the loop assuming head is non-null.\n\n2. Single node: one iteration sets node.next = null and returns the node. Works for free, but worth mentioning to show you checked.\n\n3. Return value: the new head is the OLD TAIL — i.e. prev when the loop ends. Returning the original head returns a one-element list (the old head, whose next was nulled).\n\nName the pattern: 'state the boundary cases before you write the loop'. Interviewers care less about the four-line algorithm than about whether you reason about empty / single / return-value cases without being prompted.",
  },
  {
    id: 19949,
    chapter: 'Coding Patterns',
    title: 'Binary Search Midpoint',
    prompt: 'In a binary search you compute the midpoint of [lo, hi]. Why is mid = (lo + hi) / 2 considered buggy in production code, and what is the standard fix?',
    correct: 'lo + hi can overflow when both are large integers; use mid = lo + (hi - lo) / 2, which gives the same result without overflowing.',
    wrong: [
      ['It is off by one; the correct form is (lo + hi + 1) / 2.', 'The "+1" version is sometimes used to bias toward the upper half in specific variants, but it does not fix the overflow.', 'The fix is about the addition, not the rounding.'],
      ['Integer division rounds the wrong way; floating-point division fixes it.', 'Floating point introduces precision errors and is slower; the overflow is the real bug.', 'Stay in integer arithmetic; just avoid the dangerous sum.'],
      ['It is fine; the formula is mathematically equivalent to the standard one.', 'Mathematically equivalent, yes — but on a 32-bit signed int, lo + hi can wrap to a negative number and crash the search.', 'Look up the famous bug in java.util.Arrays.binarySearch from 2006.'],
    ],
    lesson: "The textbook formula mid = (lo + hi) / 2 is correct in pure arithmetic but unsafe in fixed-width integer types. If lo and hi are both close to INT_MAX, lo + hi overflows the int range and silently wraps to a negative number; the resulting 'midpoint' lies outside [lo, hi] and the search breaks.\n\nThe production-safe form is mid = lo + (hi - lo) / 2. Algebraically identical, but it never sums two large numbers — (hi - lo) is bounded by the array length. This is exactly the fix Joshua Bloch publicised for the long-standing bug in java.util.Arrays.binarySearch.\n\nName the pattern: 'subtract before halving to avoid overflow'. The same idea applies to any (a + b) / 2 in tight numeric code — partition midpoints in quicksort, merge midpoints, etc. Interviewers like to hear you say the word 'overflow' unprompted.",
  },
])

export const CH7_CODING_SUB_TOPICS: Record<number, string> = {
  19940: 'Hash Maps & Sets',
  19941: 'Hash Maps & Sets',
  19942: 'Hash Maps & Sets',
  19943: 'Two Pointers & Sliding Window',
  19944: 'Two Pointers & Sliding Window',
  19945: 'Two Pointers & Sliding Window',
  19946: 'Recursion, DP & Complexity',
  19947: 'Recursion, DP & Complexity',
  19948: 'Edge Cases & Implementation Discipline',
  19949: 'Edge Cases & Implementation Discipline',
}

export const CH7_CODING_MENTOR_HINTS: Record<number, string> = {
  19940: 'Trade O(n) extra memory for linear time: as you scan, ask the map whether the complement T - A[i] has already been seen.',
  19941: 'Anagrams are equivalent under permutation. Pick a canonical key (sorted characters or a char-count tuple) and bucket on it.',
  19942: 'A set tells you "seen at all" — you need "seen exactly once". Count in one pass, then re-scan in original order.',
  19943: 'Keep a window of distinct characters and a map of last-seen indices. The left edge only ever moves forward.',
  19944: 'Sortedness unlocks O(1) extra space — start at both ends and let the comparison with T decide which pointer moves in.',
  19945: 'Width shrinks by one every step, so only moving the shorter line gives the height a chance to grow. Move the shorter side.',
  19946: 'Count distinct subproblems vs total calls. Without memoization the tree branches by two at every level.',
  19947: 'Condition on the size of the first move: a 1-step leaves f(n - 1) ways, a 2-step leaves f(n - 2). Recognise the recurrence.',
  19948: 'The hard part is not the three-pointer loop; it is empty / single-node inputs and remembering that the new head is the old tail.',
  19949: 'Pure arithmetic is fine; fixed-width integer arithmetic is not. What goes wrong with lo + hi when both are near INT_MAX?',
}
