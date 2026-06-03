# Brain Burners: Reasoning for the Joy of It
*Take the puzzle apart, find the move that cracks it, and learn the trick well enough to use it again.*

**ID**: `brainBurners` · **Discipline**: Logic / Puzzles · **Level**: Career

## Course Aim
Most "reasoning" courses smuggle in a job. They wrap every problem in a balance sheet, a patient chart, or an exam syllabus, so the thinking gets buried under the context you have to learn first. Brain Burners strips that away. Here the puzzle is the point: clean, self-contained problems you can hold in your head, solve with a pencil, and feel click. The pleasure is real and so is the payoff — the moves you practice here are the same ones that quietly decide hard problems everywhere else.

The course is built around a small set of reusable techniques, each of which has rescued countless problems that looked impossible at first glance: reframing a wordy setup into a clean model, eliminating cases until only the answer survives, counting without double-counting, reasoning about chance and expected value without fooling yourself, finding the quantity that never changes (an invariant), extracting maximum information from each test, modelling a situation as states and legal moves, reasoning about optimal play against an adversary, reading a sequence for its rule rather than its first few terms, and seeing through wording designed to mislead. You will not memorize a catalogue of trick questions. You will learn *why* the trick works, so the next puzzle that wears a different costume is still naked to you.

The standard is genuine rigor, not vibes. A "solution" here is not the number at the bottom — it is the argument that forces that number and rules out every other. By the end you should be able to look at an unfamiliar puzzle, name the family it belongs to, reach for the right move, and explain your reasoning clearly enough that someone else is convinced. That habit — model, attack, justify — is what transfers, whether you next meet it in a quant interview, a logic exam, a code review, or an argument at dinner.

## Course Design Notes
Floe routes a learner here when they want to think hard for fun: someone prepping for the brainteaser round of a quant or software interview, a student who likes competition-math flavor without a curriculum, or any adult who finds a well-made puzzle more satisfying than a crossword. This is enrichment, not exam prep, so there is no fixed body of facts to cover — the spine is *techniques*, and every chapter is one reusable reasoning move plus the traps that make people fail it. Questions are puzzle-driven and scenario-light: a clean setup, a real question, and distractors that encode the specific mistake each chapter is about (the off-by-one in counting, the unreachable state, the assumption the prompt never stated). Difficulty is mixed and stacks deliberately — early chapters drill one move in isolation, later chapters force the learner to first *diagnose* which move the puzzle needs. Throughout, the course insists on the difference between guessing the answer and proving it, because the proof is where the transfer lives. The tone is playful but never childish: it should make a learner want one more problem, then explain why their last solution actually worked.

## Chapter 1: Puzzle Posture
- **Core questions**: What is fixed and what can vary? What is the smallest version of this puzzle I can solve by hand? What is the question *actually* asking for?
- **Key concepts**: constraints vs goals, knowns and unknowns, reframing prose into a model, solving small cases first, sanity-checking with extreme cases, writing down what you assumed.
- **Applied skills**: turning a wordy setup into a clean diagram, table, or equation; shrinking a big problem (n people, n=100) to a tiny one (n=2, n=3) to spot the pattern; stating your assumptions explicitly before solving.
- **Common traps**: charging at the full problem before testing a small case; treating an unstated assumption as a given; confusing what is being optimized with what is merely constrained; forgetting to re-read what the question wants once you have a number.

## Chapter 2: Elimination and Contradiction
- **Core questions**: What would have to be true if this option were correct? Which clue does that violate? Have I actually covered every case, or only the comfortable ones?
- **Key concepts**: proof by contradiction, exhaustive case analysis, the pigeonhole principle, truth tables, knights-and-knaves (liar/truth-teller) constraints, ruling out vs ruling in.
- **Applied skills**: building an elimination grid for a constraint puzzle; assuming the opposite and chasing it to an absurdity; using pigeonhole to prove a collision must exist without finding it.
- **Common traps**: stopping at the first plausible answer instead of confirming the rest are impossible; an incomplete case split that silently drops a branch; mishandling a liar's statement (a lie about a lie is the truth); confusing "I can't find a counterexample" with "there is none."

## Chapter 3: Counting Without Crying
- **Core questions**: What exact object am I counting? Does order matter? Which configurations am I counting more than once — and which am I missing?
- **Key concepts**: the multiplication and addition principles, permutations vs combinations, overcounting and dividing out symmetry, counting the complement, off-by-one (fencepost) errors, inclusion-exclusion in its simplest form.
- **Applied skills**: deciding whether two arrangements are "the same" before counting; counting "at least one" by subtracting "none" from the total; dividing by the symmetry you accidentally introduced (e.g., seating around a round table).
- **Common traps**: counting ordered when the problem is unordered (or vice versa); the classic fencepost error in ranges and rows; double-counting overlapping cases; forgetting that the complement is sometimes the easy count.

## Chapter 4: Chance Without Fooling Yourself
- **Core questions**: What is the full sample space, and is every outcome in it equally likely? Am I being asked for a probability, or for an expected value? What does the new information actually tell me — and what does it not?
- **Key concepts**: equally-likely outcomes and the ratio of favorable to total, complementary events, linearity of expectation, conditional probability and updating on evidence, independence vs. mutual exclusivity, classic snares (Monty Hall, the two-children / boy-girl problem, the birthday collision, the gambler's fallacy).
- **Applied skills**: enumerating a clean sample space before dividing; using linearity of expectation to add up contributions even when events overlap or depend on each other; computing "at least one" via the complement; conditioning correctly on what was revealed rather than on what you assumed was revealed.
- **Common traps**: assuming outcomes are equally likely when they are not; confusing P(A given B) with P(B given A); treating dependent events as independent; ignoring the way information was obtained (the difference between "a child is a boy" and "the child who answered the door is a boy"); chasing a hard probability directly when its complement is one line.

## Chapter 5: Invariants and Parity
- **Core questions**: What quantity never changes no matter which legal move I make? Is there something that only ever increases or only ever decreases? Which target states are therefore impossible to reach?
- **Key concepts**: invariants, parity (odd/even) arguments, coloring arguments (e.g., checkerboard), conserved quantities, monovariants for proving a process must terminate, impossibility proofs.
- **Applied skills**: spotting the quantity preserved by every move and using it to rule out a goal; coloring a board to show a tiling can't exist; using a strictly-decreasing measure to prove a game or process always ends.
- **Common traps**: concluding something is reachable just because no obstacle is obvious (absence of proof ≠ proof of possibility); choosing an invariant that isn't actually preserved by all moves; ignoring parity and brute-forcing a search that parity could have closed in one line.

## Chapter 6: Weighing, Searching, and Information
- **Core questions**: How many distinct outcomes could each test produce? How many possibilities can one test therefore eliminate at best? Does adapting to earlier results buy me more than a fixed plan?
- **Key concepts**: information as outcomes per test, the log bound (k tests with b outcomes distinguish at most bᵏ cases), binary vs ternary search, three-outcome balance puzzles, adaptive vs non-adaptive strategies, worst-case vs average-case.
- **Applied skills**: computing the information-theoretic minimum number of weighings or guesses before designing one; building a decision tree where every branch stays within budget; choosing a first move that keeps the remaining cases balanced.
- **Common traps**: forgetting a balance has *three* outcomes, not two, and over-budgeting weighings; designing a strategy that wins on average but blows the worst case; letting one branch carry more remaining cases than a single test can resolve.

## Chapter 7: States, Moves, and Optimal Play
- **Core questions**: What is a complete "state" of this puzzle? Which moves are legal from a given state? When there is an opponent, what is the best move *assuming they answer optimally too*? What is actually blocking progress toward the goal?
- **Key concepts**: state-space modelling, river-crossing and jug-pouring puzzles, legal vs illegal states, reversible moves, graph search and shortest paths, bottlenecks and dead ends; two-player games, winning vs losing positions, working backward from the end, symmetry strategies (mirroring), and the cases where the first or second player can force a win.
- **Applied skills**: writing down a state as a tuple and listing the moves it permits; drawing the state graph for a crossing or pouring puzzle; finding the shortest solution by exploring states breadth-first instead of guessing; labeling game positions as wins or losses by backward induction and identifying the move that hands your opponent a losing position.
- **Common traps**: an underspecified state that forgets a crucial detail (who's holding the flashlight, which bank the boat is on); treating an illegal intermediate state as allowed; assuming a longer path is required when a shorter one exists; missing that some moves are irreversible; in a game, optimizing your own move while assuming the opponent plays badly.

## Chapter 8: Patterns and Sequences
- **Core questions**: What is the *rule* that generates this sequence, not just the next term? Is the pattern arithmetic, multiplicative, recursive, positional, or something disguised (digits, letters, primes, look-and-say)? How would I prove the rule rather than guess it?
- **Key concepts**: arithmetic and geometric progressions, recurrences (each term from the ones before, as in Fibonacci), first and second differences, figurate and polygonal numbers, look-and-say and other "describe the previous line" sequences, the danger of fitting a curve to too few points.
- **Applied skills**: taking successive differences (and differences of differences) to expose a polynomial rule; testing a candidate rule against *every* given term, not just the next; recognizing common families (squares, triangular numbers, powers of two, primes) on sight; distinguishing a position-based rule (term n depends on n) from a recurrence (term n depends on earlier terms).
- **Common traps**: declaring a pattern from two or three terms when several rules fit; assuming "arithmetic" because the first gaps happen to be equal; reading a letter or digit puzzle as a number puzzle (or vice versa); extrapolating a rule that the later given terms already contradict.

## Chapter 9: Wording, Misdirection, and Hidden Assumptions
- **Core questions**: What did the prompt literally say — and what did I add to it? Which vivid detail is bait and which is load-bearing? Is the "obvious" reading the only valid one?
- **Key concepts**: ambiguous and conditional wording, the difference between "if" and "if and only if", irrelevant detail planted to distract, unstated assumptions the solver imports, lateral-thinking and "common sense" traps.
- **Applied skills**: rewriting a slippery prompt into precise logical or mathematical language before solving; separating the relevant constraints from the decorative ones; questioning the framing instead of accepting it.
- **Common traps**: solving the problem you assumed instead of the one stated; reading a one-way conditional as a biconditional; getting anchored by an irrelevant number; accepting a false either/or the puzzle never imposed.

## Chapter 10: Diagnose-the-Move (Mixed Practice)
- **Core questions**: Given a fresh puzzle with no label, which family is it? What is the cheapest move that might crack it, and what should I try first? When is it time to abandon an approach?
- **Key concepts**: technique selection, pattern-matching a setup to its family (counting / probability / invariant / search / state / game / sequence / wording), trying the cheapest-most-likely move first, recognizing a dead end early, combining two techniques in one problem.
- **Applied skills**: triaging an unfamiliar puzzle into a likely family within seconds; switching tools deliberately when the first stalls; solving hybrids that need, say, an invariant *and* a counting argument.
- **Common traps**: forcing a favorite technique onto a puzzle that needs another; sinking time into a stalled approach instead of re-diagnosing; seeing only the first applicable move and missing a cleaner second; mistaking a hard problem for an unsolvable one.

## Capstone: Build (and Defend) a Puzzle Set
Assemble a curated set of eight puzzles with full solutions, and one original puzzle of your own design.

- **The set**: two contradiction/elimination problems, one counting problem, one probability or expected-value problem, two invariant or parity problems, one weighing-or-search problem, and one original hybrid you create.
- **Each solution** must do three things: model the setup cleanly, give an argument that *forces* the answer (not just states it), and name the general technique it belongs to so the reasoning is reusable.
- **For your original puzzle**, also supply a two-rung hint ladder (a nudge, then a stronger nudge) and a one-paragraph note explaining the intended insight, the tempting wrong path, and why the puzzle is fair — solvable by reasoning, not by trivia or luck.
- **Defense**: be ready to justify any single step on request, the way you would in an interview. The goal is not eight right answers; it is eight arguments a skeptical reader would accept, plus proof that you can build the trap as well as spring it.

## Research Notes
- Arthur Engel, *Problem-Solving Strategies* (Springer): the canonical olympiad reference whose chapter spine — the Invariance Principle, Coloring Proofs, the Extremal Principle, the Box (Pigeonhole) Principle, Enumerative Combinatorics — maps directly onto Chapters 3-5 here. https://link.springer.com/book/10.1007/b97682
- Paul Zeitz, *The Art and Craft of Problem Solving* (Wiley): the standard "strategies / tactics / tools" framing (reframing, symmetry, invariants, extreme principle, pigeonhole) that this technique-first syllabus mirrors. https://www.wiley.com/en-us/The+Art+and+Craft+of+Problem+Solving,+3rd+Edition-p-9781119239901
- Tradermath, "Quant Interview Questions & Brainteasers": confirms the working taxonomy of interview brainteasers — probability/expected value, strategy/game puzzles, weighing-and-measurement, and logic riddles — which motivated the dedicated probability chapter and the optimal-play content. https://www.tradermath.org/brainteasers
- Brainstellar, "Puzzles from Quant Interviews": a large bank of the exact probability/EV and strategy puzzles (Monty Hall, two-children, expected-value games) that Chapter 4 and the games portion of Chapter 7 target. https://brainstellar.com/
- "Knights and Knaves," Wikipedia: history and canonical form of the truth-teller/liar puzzles (Smullyan, 1978; Goodman 1931 antecedent) cited in Chapter 2. https://en.wikipedia.org/wiki/Knights_and_Knaves
