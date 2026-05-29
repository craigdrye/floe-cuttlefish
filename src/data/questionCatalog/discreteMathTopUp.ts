import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe discreteMath top-up'

export const discreteMathTopUpQuestions: Question[] = makeQuestionBank('University', [
  // Chapter 1: Logic, Language, and Quantifiers
  {
    id: 7418000,
    chapter: 'Logic, Language, and Quantifiers',
    title: 'Negating a Nested Quantifier',
    prompt:
      'What is the correct negation of the statement "for every integer x, there exists an integer y such that x + y = 0"?',
    correct: 'There exists an integer x such that for every integer y, x + y is not 0',
    wrong: [
      miss(
        'For every integer x, there exists an integer y such that x + y is not 0',
        'Negation must flip every quantifier; this left the leading "for every" unchanged.',
        'Push the negation inward: each "for all" becomes "there exists" and vice versa.',
      ),
      miss(
        'There exists an integer x and there exists an integer y such that x + y is not 0',
        'The inner "there exists" must become "for every," not stay existential.',
        'Negating an existential quantifier turns it into a universal one.',
      ),
      miss(
        'For every integer x and every integer y, x + y is not 0',
        'Only the outer universal should become existential; the inner existential becomes universal.',
        'Flip each quantifier exactly once as you move the negation through.',
      ),
    ],
    lesson:
      'To negate a quantified statement, push the negation inward: every "for all" becomes "there exists," every "there exists" becomes "for all," and the innermost predicate is negated last. The original is true (take y = -x), so its negation is false, which is a useful sanity check.',
    source,
    generated: true,
  },
  {
    id: 7418001,
    chapter: 'Logic, Language, and Quantifiers',
    title: 'Conditional and Contrapositive',
    prompt:
      'Which statement is logically equivalent to "If a number is divisible by 6, then it is divisible by 3"?',
    correct: 'If a number is not divisible by 3, then it is not divisible by 6',
    wrong: [
      miss(
        'If a number is divisible by 3, then it is divisible by 6',
        'That is the converse, which swaps hypothesis and conclusion and is not equivalent.',
        'The converse of P implies Q is Q implies P, a different claim.',
      ),
      miss(
        'If a number is not divisible by 6, then it is not divisible by 3',
        'That is the inverse, which negates both parts without swapping them; it is not equivalent.',
        'Equivalence comes from negating AND swapping, not just negating.',
      ),
      miss(
        'A number is divisible by 6 if and only if it is divisible by 3',
        'A biconditional is strictly stronger and is false (3 is divisible by 3 but not by 6).',
        'A single implication is weaker than "if and only if."',
      ),
    ],
    lesson:
      'A conditional P implies Q is always logically equivalent to its contrapositive (not Q) implies (not P). Its converse Q implies P and inverse (not P) implies (not Q) are equivalent to each other but not to the original. Confusing these is one of the most common reasoning errors.',
    source,
    generated: true,
  },
  {
    id: 7418002,
    chapter: 'Logic, Language, and Quantifiers',
    title: 'Vacuously True Implications',
    prompt:
      'Consider "For every x in the empty set, x is greater than 100." What is the truth value of this statement?',
    correct: 'True, because there is no counterexample (it is vacuously true)',
    wrong: [
      miss(
        'False, because no number in the set is greater than 100',
        'There is no element to violate the claim, so it cannot be false.',
        'A universal claim fails only if some element breaks it.',
      ),
      miss(
        'Undefined, because the set has no elements',
        'A universally quantified statement over an empty domain has a definite truth value.',
        'Empty-domain universals are well-defined, not undefined.',
      ),
      miss(
        'It depends on which number you check first',
        'There is nothing to check; the domain is empty.',
        'With no elements, no checking is possible.',
      ),
    ],
    lesson:
      'A universal statement "for all x in S, P(x)" is vacuously true when S is empty, because falsifying it would require an element that violates P, and none exists. This mirrors why "if P then Q" is true whenever P is false: there is no case in which the claim is broken.',
    source,
    generated: true,
  },
  // Chapter 2: Proof Methods and Mathematical Writing
  {
    id: 7418003,
    chapter: 'Proof Methods and Mathematical Writing',
    title: 'Choosing Proof by Contradiction',
    prompt:
      'To prove "the square root of 2 is irrational," which proof strategy is standard and why?',
    correct:
      'Proof by contradiction: assume sqrt(2) = a/b in lowest terms and derive that a and b are both even',
    wrong: [
      miss(
        'Direct proof: compute sqrt(2) exactly and observe it has no repeating pattern',
        'You cannot write down an exact non-terminating value, and "no pattern" is not a proof.',
        'Irrationality is naturally a "no such fraction exists" claim.',
      ),
      miss(
        'Proof by induction on the digits of sqrt(2)',
        'Induction proves statements indexed by natural numbers, not the digits of one real number.',
        'There is no natural-number index to induct on here.',
      ),
      miss(
        'Proof by example: 1.41 squared is close to 2, so it cannot be a fraction',
        'An approximation never establishes irrationality; many irrationals are near fractions.',
        'Examples cannot prove a universal "no fraction works" claim.',
      ),
    ],
    lesson:
      'Statements asserting that no object of a certain kind exists are natural candidates for proof by contradiction. Assuming sqrt(2) = a/b in lowest terms forces a^2 = 2b^2, making a even, then b even, contradicting "lowest terms." The contradiction shows the assumption was impossible.',
    source,
    generated: true,
  },
  {
    id: 7418004,
    chapter: 'Proof Methods and Mathematical Writing',
    title: 'What a Counterexample Proves',
    prompt:
      'A student claims "every odd number is prime." You point to 9. What exactly has this established?',
    correct: 'The universal claim is false; one counterexample disproves a "for all" statement',
    wrong: [
      miss(
        'That most odd numbers are not prime',
        'A single counterexample disproves the universal but says nothing about how many fail.',
        'Disproving "all" requires only one exception, not a majority.',
      ),
      miss(
        'That the claim is true except for 9',
        'A universal claim with even one exception is simply false, not "true except for one case."',
        'There is no partial credit for a universally quantified statement.',
      ),
      miss(
        'Nothing, because 9 is a single example and examples cannot prove things',
        'Examples cannot prove a universal, but one counterexample does disprove it.',
        'Disproving and proving a universal are not symmetric.',
      ),
    ],
    lesson:
      'To disprove "for all x, P(x)" you need exactly one x where P(x) fails. Here 9 = 3 x 3 is odd but composite, so the claim collapses. Crucially, examples can never prove a universal claim true, but a single counterexample always proves one false.',
    source,
    generated: true,
  },
  {
    id: 7418005,
    chapter: 'Proof Methods and Mathematical Writing',
    title: 'Direct Proof of a Parity Claim',
    prompt:
      'In a direct proof that "the product of any two odd integers is odd," how should you represent two arbitrary odd integers?',
    correct: 'As 2m + 1 and 2n + 1 for some integers m and n',
    wrong: [
      miss(
        'As 2m + 1 and 2m + 1 for the same integer m',
        'Using the same m forces the two numbers to be equal; you need independent odd integers.',
        'Two arbitrary numbers need two independent parameters.',
      ),
      miss(
        'As specific values like 3 and 5',
        'Specific values prove only that 3 x 5 is odd, not the general claim.',
        'A universal statement needs arbitrary, not chosen, integers.',
      ),
      miss(
        'As 2m and 2n + 1',
        '2m is even; this would represent one even and one odd integer, not two odd ones.',
        'An odd integer has the form 2k + 1, not 2k.',
      ),
    ],
    lesson:
      'A direct proof of a universal claim starts from the definitions with arbitrary, independent parameters. Writing odds as 2m+1 and 2n+1 gives (2m+1)(2n+1) = 2(2mn + m + n) + 1, which is odd by definition. Reusing one variable or picking specific numbers would not prove the general statement.',
    source,
    generated: true,
  },
  // Chapter 4: Counting and Combinatorics
  {
    id: 7418006,
    chapter: 'Counting and Combinatorics',
    title: 'Combination Versus Permutation',
    prompt:
      'A pizza shop offers 8 toppings. How many ways can you choose a 3-topping pizza, where order does not matter and toppings are distinct?',
    correct: 'C(8,3) = 56',
    wrong: [
      miss(
        'P(8,3) = 336',
        'That counts ordered selections; on a pizza the order of toppings is irrelevant.',
        'Dividing 336 by 3! removes the duplicate orderings.',
      ),
      miss(
        '8^3 = 512',
        'That allows repetition and order, counting each multiset many times over.',
        'Toppings are distinct and unordered, so neither repetition nor order applies.',
      ),
      miss(
        '8 x 3 = 24',
        'Multiplying the totals is not how combinations work.',
        'Use the binomial coefficient formula n! / (k!(n-k)!).',
      ),
    ],
    lesson:
      'When order does not matter and items are distinct, use combinations: C(8,3) = 8! / (3! x 5!) = 56. Permutations P(8,3) = 336 count ordered arrangements, which is 3! = 6 times too many here. Asking "does the order of my choices matter?" decides between the two.',
    source,
    generated: true,
  },
  {
    id: 7418007,
    chapter: 'Counting and Combinatorics',
    title: 'Pigeonhole Principle',
    prompt:
      'In a group of 13 people, why must at least two of them share the same birth month?',
    correct: 'There are only 12 months, so by the pigeonhole principle 13 people cannot all differ',
    wrong: [
      miss(
        'Because birthdays are randomly distributed and collisions are likely',
        'The pigeonhole principle guarantees a match; it is not a probability statement.',
        'This is a certainty, not a likelihood.',
      ),
      miss(
        'Because 13 is a prime number',
        'Primality of 13 is irrelevant; what matters is 13 exceeding 12.',
        'Compare the number of people to the number of months.',
      ),
      miss(
        'It is not guaranteed; all 13 could have distinct months',
        'With only 12 months, 13 distinct assignments are impossible.',
        'You cannot place 13 items in 12 boxes without sharing.',
      ),
    ],
    lesson:
      'The pigeonhole principle states that if n items go into m boxes and n > m, at least one box holds two or more items. With 13 people (items) and 12 months (boxes), a shared month is forced. The key skill is choosing the right pigeons and holes.',
    source,
    generated: true,
  },
  {
    id: 7418008,
    chapter: 'Counting and Combinatorics',
    title: 'Inclusion-Exclusion for Two Sets',
    prompt:
      'In a class of 30 students, 18 take French and 15 take Spanish, and 8 take both. How many take at least one of the two languages?',
    correct: '25',
    wrong: [
      miss(
        '33',
        'That adds 18 and 15 without subtracting the 8 counted twice.',
        'Students taking both were counted in each subject total.',
      ),
      miss(
        '41',
        'That adds all three numbers, double-counting and then adding the overlap again.',
        'Inclusion-exclusion subtracts the overlap once; it does not add it.',
      ),
      miss(
        '22',
        'That subtracts the overlap twice instead of once.',
        'Use |A or B| = |A| + |B| - |A and B|, subtracting the overlap a single time.',
      ),
    ],
    lesson:
      'Inclusion-exclusion for two sets gives |A or B| = |A| + |B| - |A and B| = 18 + 15 - 8 = 25. Adding the totals double-counts the students in both languages, so you subtract the overlap exactly once to correct it.',
    source,
    generated: true,
  },
  // Chapter 5: Induction, Recursion, and Recurrences
  {
    id: 7418009,
    chapter: 'Induction, Recursion, and Recurrences',
    title: 'Purpose of the Inductive Step',
    prompt:
      'In a proof by mathematical induction, what exactly does the inductive step establish?',
    correct: 'That if the statement holds for n = k, then it also holds for n = k + 1',
    wrong: [
      miss(
        'That the statement holds for the smallest value of n',
        'That is the base case, a separate part of the proof.',
        'The step is about passing from one case to the next, not the starting point.',
      ),
      miss(
        'That the statement holds for all n simultaneously',
        'No single step proves all cases at once; that conclusion follows from base plus step.',
        'The step only links k to k + 1.',
      ),
      miss(
        'That the statement holds for n = k by assuming it for n = k + 1',
        'That reverses the direction; you assume k and prove k + 1, not the other way.',
        'Induction builds upward from smaller to larger.',
      ),
    ],
    lesson:
      'Induction has two parts: a base case (the claim holds at the start) and an inductive step (if it holds at k, it holds at k+1). Together they form a chain that reaches every n at or above the base. The step assumes the case for k - the inductive hypothesis - to prove the next case.',
    source,
    generated: true,
  },
  {
    id: 7418010,
    chapter: 'Induction, Recursion, and Recurrences',
    title: 'Solving a Divide-and-Conquer Recurrence',
    prompt:
      'Merge sort satisfies T(n) = 2T(n/2) + cn. What is its asymptotic running time?',
    correct: 'Theta(n log n)',
    wrong: [
      miss(
        'Theta(n^2)',
        'That is selection or insertion sort worst case; merge sort divides the work evenly.',
        'Each level does Theta(n) work across log n levels.',
      ),
      miss(
        'Theta(n)',
        'Linear time ignores the log n levels of recursion the split creates.',
        'There are about log base 2 of n levels, each costing Theta(n).',
      ),
      miss(
        'Theta(log n)',
        'You must process all n elements, so the time cannot be sub-linear.',
        'Total work is the per-level cost times the number of levels.',
      ),
    ],
    lesson:
      'For T(n) = 2T(n/2) + cn, the recursion tree has about log base 2 of n levels, each doing Theta(n) total work, giving Theta(n log n). This is the Master Theorem balanced case (Case 2), since the combine cost cn matches n^(log base 2 of 2) = n. It is why merge sort beats quadratic sorts.',
    source,
    generated: true,
  },
  {
    id: 7418011,
    chapter: 'Induction, Recursion, and Recurrences',
    title: 'Why the Base Case Matters',
    prompt:
      'A "proof" by induction verifies the inductive step k implies k+1 perfectly but skips the base case. What is wrong?',
    correct:
      'Without a true base case, the chain has nothing to start from, so the claim need not hold for any n',
    wrong: [
      miss(
        'Nothing is wrong; a correct inductive step alone proves the statement',
        'The step only transfers truth; with no verified starting case there is nothing to transfer.',
        'An implication chain is useless without a true first link.',
      ),
      miss(
        'The proof is fine as long as the statement is true for large n',
        'Truth for large n is what you are trying to prove, not something you may assume.',
        'You cannot assume the conclusion to fix the proof.',
      ),
      miss(
        'It only fails for negative integers',
        'Without a base case the argument fails to establish the claim at any value, not just negatives.',
        'The missing anchor undermines the whole chain.',
      ),
    ],
    lesson:
      'The inductive step is an implication: if true at k, then true at k+1. Without a verified base case, that implication never fires, since you can prove k+1 only after establishing some starting k. A famous illustration is "all horses are the same color," whose step looks fine but whose base case fails.',
    source,
    generated: true,
  },
  // Chapter 6: Relations, Orders, and Modular Arithmetic
  {
    id: 7418012,
    chapter: 'Relations, Orders, and Modular Arithmetic',
    title: 'Euclidean Algorithm for gcd',
    prompt:
      'Using the Euclidean algorithm, what is gcd(252, 105)?',
    correct: '21',
    wrong: [
      miss(
        '7',
        '7 divides both numbers but is not the greatest such divisor; 21 also divides both.',
        'Keep taking remainders until you reach 0; the last nonzero remainder is the gcd.',
      ),
      miss(
        '3',
        '3 is a common divisor but smaller than 21, so it is not the greatest.',
        'The gcd is the largest common divisor, found via repeated remainders.',
      ),
      miss(
        '105',
        '105 does not divide 252 (252 = 2 x 105 + 42), so it cannot be the gcd.',
        'The gcd cannot exceed the smaller number unless that number divides the larger.',
      ),
    ],
    lesson:
      'The Euclidean algorithm repeatedly replaces (a, b) with (b, a mod b): 252 mod 105 = 42, 105 mod 42 = 21, 42 mod 21 = 0. The last nonzero remainder, 21, is the gcd. This is far faster than factoring and underlies modular-inverse computation.',
    source,
    generated: true,
  },
  {
    id: 7418013,
    chapter: 'Relations, Orders, and Modular Arithmetic',
    title: 'When a Modular Inverse Exists',
    prompt:
      'For which moduli n does the integer 6 have a multiplicative inverse modulo n?',
    correct: 'Exactly when gcd(6, n) = 1, i.e. when n shares no factor of 2 or 3 with 6',
    wrong: [
      miss(
        'For every modulus n greater than 1',
        'An inverse exists only when 6 and n are coprime; e.g. 6 has no inverse mod 8 or mod 9.',
        'Check whether 6 and n share a common factor.',
      ),
      miss(
        'Only when n is prime',
        'Coprimality is the real condition; 6 has an inverse mod 25 even though 25 is not prime.',
        'Primality of n is sufficient but not necessary.',
      ),
      miss(
        'Only when n is even',
        'If n is even it shares the factor 2 with 6, so no inverse exists; this is backwards.',
        'A shared factor with 6 destroys invertibility.',
      ),
    ],
    lesson:
      'An integer a has a multiplicative inverse mod n if and only if gcd(a, n) = 1. Since 6 = 2 x 3, it is invertible exactly when n avoids the factors 2 and 3. When they are coprime, the extended Euclidean algorithm produces the inverse.',
    source,
    generated: true,
  },
  {
    id: 7418014,
    chapter: 'Relations, Orders, and Modular Arithmetic',
    title: 'Fermat’s Little Theorem',
    prompt:
      'Using Fermat’s Little Theorem, what is 3^16 mod 17?',
    correct: '1',
    wrong: [
      miss(
        '3',
        'That would be 3^17 mod 17 by the a^p form; the exponent here is p - 1 = 16.',
        'Fermat gives a^(p-1) congruent to 1, not a^p.',
      ),
      miss(
        '16',
        '16 is p - 1, not the value of the power; the theorem yields 1.',
        'The result of a^(p-1) mod p is 1 when a is not a multiple of p.',
      ),
      miss(
        '0',
        '3 is not divisible by 17, so the power is never congruent to 0.',
        'A power of a nonzero residue stays nonzero mod a prime.',
      ),
    ],
    lesson:
      'Fermat’s Little Theorem says that if p is prime and a is not divisible by p, then a^(p-1) is congruent to 1 mod p. Here p = 17 and a = 3, so 3^16 is congruent to 1 mod 17. This result powers fast modular exponentiation and primality tests in cryptography.',
    source,
    generated: true,
  },
  // Chapter 7: Graphs and Trees
  {
    id: 7418015,
    chapter: 'Graphs and Trees',
    title: 'Handshaking Lemma',
    prompt:
      'In any undirected graph, why is the number of vertices with odd degree always even?',
    correct: 'Because the sum of all degrees equals twice the number of edges, which is even',
    wrong: [
      miss(
        'Because every edge connects exactly two vertices of equal degree',
        'Edges connect two vertices but their degrees need not be equal.',
        'The argument is about the total degree sum, not pairwise equality.',
      ),
      miss(
        'Because graphs always have an even number of vertices',
        'Graphs can have any number of vertices; the claim is about odd-degree ones.',
        'Total vertex count is unrelated to the parity of odd-degree vertices.',
      ),
      miss(
        'It is not always true; a graph can have three odd-degree vertices',
        'A graph with three odd-degree vertices is impossible by the degree-sum argument.',
        'The even degrees contribute evenly, so odd-degree vertices must pair up.',
      ),
    ],
    lesson:
      'The handshaking lemma says the sum of all vertex degrees equals 2|E|, which is even. The even-degree vertices contribute an even total, so the odd-degree vertices must also sum to an even number, which forces their count to be even. This is why no graph has an odd number of odd-degree vertices.',
    source,
    generated: true,
  },
  {
    id: 7418016,
    chapter: 'Graphs and Trees',
    title: 'Existence of an Euler Circuit',
    prompt:
      'A connected undirected graph has an Euler circuit (a closed walk using every edge exactly once) if and only if which condition holds?',
    correct: 'Every vertex has even degree',
    wrong: [
      miss(
        'Every vertex has odd degree',
        'Odd degrees block an Euler circuit; you would get stuck at a vertex you cannot leave.',
        'Each time you enter a vertex you must also leave, requiring even degree.',
      ),
      miss(
        'The graph visits every vertex exactly once',
        'That describes a Hamiltonian cycle, a different and much harder condition.',
        'Euler circuits are about edges, Hamiltonian cycles about vertices.',
      ),
      miss(
        'The graph is a tree',
        'A tree has no cycle at all, so it cannot have an Euler circuit (except a single vertex).',
        'Trees have leaves of degree 1, which is odd.',
      ),
    ],
    lesson:
      'A connected graph has an Euler circuit if and only if every vertex has even degree, because each visit to a vertex uses one edge to enter and one to leave. If exactly two vertices have odd degree, an Euler path (open trail) exists instead. Do not confuse this edge-based property with Hamiltonian cycles, which concern visiting every vertex.',
    source,
    generated: true,
  },
  {
    id: 7418017,
    chapter: 'Discrete Models in Computer Science',
    title: 'Loop Invariant Versus Postcondition',
    prompt:
      'When proving a loop correct, what is the defining property of a loop invariant?',
    correct: 'It is true before the loop starts and remains true after every iteration of the loop body',
    wrong: [
      miss(
        'It is the condition that becomes true only when the loop finally exits',
        'That describes the postcondition; the invariant must hold throughout, not just at the end.',
        'An invariant holds every iteration, not only at termination.',
      ),
      miss(
        'It is the boolean expression in the loop guard that controls iteration',
        'The guard decides whether to continue; the invariant is a separate asserted property.',
        'The guard and the invariant play different roles.',
      ),
      miss(
        'It is a statement that is true only on the first iteration',
        'An invariant must be preserved across all iterations, not just the first.',
        'Preservation across every pass is the whole point.',
      ),
    ],
    lesson:
      'A loop invariant is a property that holds before the loop and is preserved by each iteration. Combined with the loop terminating and the negated guard, the invariant implies the postcondition - this is induction applied to program correctness. Confusing the invariant (true every iteration) with the postcondition (true at the end) is a classic mistake.',
    source,
    generated: true,
  },
])
