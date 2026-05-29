# Quant Interview Core
*Solve the puzzle, name the trick, and say your reasoning out loud the way a quant interviewer wants to hear it.*

**ID**: `quant` · **Discipline**: Finance · **Level**: Career

## Course Aim
Quant trading, quant research, and quant developer interviews do not reward people who have memorized a list of brainteasers. They reward people who can take a short, slippery problem, state their assumptions cleanly, find the structure (a symmetry, an invariant, a linearity-of-expectation shortcut), get a defensible number, and sanity-check it before the interviewer has to. The hard part is rarely the math itself. It is staying organized and articulate while a stranger watches you think and occasionally drops a hint to see how you handle it.

This course trains that performance. It is built for the first-round screen most prop shops, quant funds, and market makers use: a probability-and-expected-value round, a combinatorics round, a brainteaser-and-logic round, a mental-math-and-estimation round, and a coding-and-data round, all wrapped in constant pressure to explain yourself. Every chapter hands you concrete prompts of the kind interviewers actually ask — fair-value of a die-rolling game, expected number of records in a random sequence, a 100-prisoners-style information puzzle, "price this option to within a nickel in your head" — and asks for the move a strong candidate makes, not the textbook label. The wrong answers are the plausible mistakes real candidates make under the clock: forgetting that linearity of expectation ignores dependence, double-counting arrangements, confusing P(A|B) with P(B|A), assuming optimal stopping doesn't change the value of a game.

By the end you should be able to set up a probability problem without panicking, count without overcounting, recognize a parity or invariant argument on sight, do fast arithmetic and order-of-magnitude estimates that hold up, write a clean O(n) solution and state its complexity, and — above all — narrate what you are assuming, what you are computing, and what would change your answer. The verbal habit is half the score.

## Course Design Notes
Keep this course rigorous, scenario-first, and retrieval-heavy. Route questions here when they test interview-style probability, expected value, counting, logic puzzles, invariants, mental math, market numeracy, basic algorithmic coding, or the meta-skill of reasoning aloud under time pressure for a quant screen. Chapters mirror the standard first-round loop so a learner can drill the exact round they have coming up.

Where a precise fact or formula matters — the gambler's-ruin probability, the expected number of trials to first success, the formula for combinations with repetition, the binomial-model option price — the lesson states it exactly so the learner leaves with the correct version, not folk memory. Distractors are themselves the classic interview errors, each with a short explanation of the distinction it blurs, so the learner can tell apart the look-alikes: independent vs mutually exclusive, permutation vs combination, average-case vs worst-case complexity, expected value vs most-likely outcome. The voice is a calm desk quant sitting across the table: demanding about correctness, generous about method, and allergic to bluffing. A confident wrong number stated without a check is worse here than a slower right one.

## Interview Loop and Practice Rhythm
First-round quant screens are short and dense — often 45 to 60 minutes, sometimes a timed online assessment first, then a live phone or onsite round. The pace rewards fluency, not heroics. Treat preparation like interval training rather than a reading marathon.

| Round | What they probe | Practice posture |
|---|---|---|
| Probability and expected value | Setup, conditioning, EV, sanity checks | Daily; this powers almost everything else |
| Counting and combinatorics | Clean enumeration without over/undercounting | Drill patterns until they are reflexes |
| Brainteasers and invariants | Finding structure, not grinding | Solve, then name the reusable move |
| Mental math and estimation | Speed, plausibility, market numeracy | Timed sets, 60-90 seconds per problem |
| Coding and data screen | Correct, complexity-aware, tested code | One problem a day, explained aloud |
| Mock and communication | Composure, hint response, recovery | Weekly, recorded or with a partner |

Suggested cadence: 6 to 10 weeks, 5 to 6 short blocks a week, one weekly timed mock. Every block should produce something retrievable: solved problems with written setups, a labeled puzzle technique, a mental-math log of recurring errors, or a coded solution with complexity and tests. Reading solutions without re-deriving them is the quant-prep version of watching someone else exercise. The error log is the actual product; if you are not tracking which trap got you, you are not preparing, you are entertaining yourself.

## Chapter 1: The Interview Map and a Problem-Solving Protocol
**Core questions**
- What round is this — probability, counting, puzzle, estimation, or coding — and what level of rigor does it want?
- What is the interviewer actually signaling with a hint, a follow-up, or a poker face?
- What is my standing routine for clarifying, attacking, checking, and explaining any prompt?

**Key concepts**: quant trader vs quant researcher vs quant developer screens, online assessment vs live round, clarifying assumptions before computing, choosing a representation (tree, table, recursion, complement), a verbalize-as-you-go habit, the deliberate sanity check, and graceful handling of "are you sure?"

**Applied skills**: convert a one-line prompt into stated assumptions and a plan; pick the representation that makes the structure visible; narrate reasoning continuously without freezing; respond to a hint as new information rather than as a verdict.

**Common traps**: diving into arithmetic before the question is fully stated; going silent the moment the problem gets hard, which hides exactly the reasoning being graded; treating "are you sure?" as proof you are wrong and reflexively flipping a correct answer; skipping the final sanity check because the clock feels tight.

**Practice deliverable**: a one-page personal interview protocol — clarify, represent, solve, check, explain — that you can apply to any problem type.

## Chapter 2: Probability Foundations
**Core questions**
- What is the sample space, and are these events actually independent or just feel like it?
- Is it easier to count the event or its complement?
- What does new information change, and in which direction?

**Key concepts**: sample spaces, equally-likely outcomes, independence vs mutual exclusivity, conditional probability, the multiplication and addition rules, complements, Bayes' rule, the base-rate / false-positive trap, and the named distributions that recur (Bernoulli, binomial, geometric, Poisson, uniform, normal).

**Applied skills**: set up a problem by the complement when "at least one" appears; apply Bayes to a screening-test or signal-detection scenario; recognize a geometric setup ("expected trials until first success" = 1/p) on sight; state in words why two events are or are not independent.

**Common traps**: confusing independent ("P(A∩B)=P(A)P(B)") with mutually exclusive ("can't both happen"), which are nearly opposites; multiplying probabilities of events that are not independent; flipping the conditional, P(A|B) vs P(B|A), and ignoring the base rate so a "99% accurate" test looks decisive when most positives are false; forgetting to renormalize after conditioning removes part of the sample space.

**Practice deliverable**: a probability drill set with explicit setup, calculation, and a one-line sanity check on every problem, plus a tally of which trap each miss belonged to.

## Chapter 3: Counting and Combinatorics
**Core questions**
- Does order matter here — am I counting permutations or combinations?
- Is each outcome being counted exactly once, or am I double-counting symmetric arrangements?
- Where is the hidden constraint that shrinks the count?

**Key concepts**: the multiplication principle, permutations and combinations, the formula C(n,k)=n!/(k!(n−k)!), combinations with repetition (stars and bars), inclusion-exclusion, complementary counting, distinguishable vs indistinguishable objects, and simple recursive counting.

**Applied skills**: choose permutation vs combination by asking whether reordering makes a new outcome; use stars and bars for "distribute identical items into groups"; apply inclusion-exclusion for "at least one of several overlapping conditions"; set up a recurrence when direct counting explodes.

**Common traps**: counting ordered arrangements when the problem wants unordered sets (or vice versa); dividing by a symmetry factor twice, or forgetting to divide at all; double-counting in inclusion-exclusion by dropping the correction term; treating identical objects as distinct, which silently inflates the count.

**Practice deliverable**: a counting-pattern notebook grouped by technique (permutation, combination, stars and bars, inclusion-exclusion, complement, recursion), each with one worked example and the tell that triggers it.

## Chapter 4: Expected Value, Games, and Optimal Stopping
**Core questions**
- What is the expected payoff, and is "expected" the same as "most likely" here? (Usually not.)
- Does the option to stop or continue change the value of the game?
- Which strategy dominates, and what is the fair price to play?

**Key concepts**: expectation as a probability-weighted average, linearity of expectation (which holds even when variables are dependent), conditional expectation and the law of total expectation, the geometric/negative-binomial expectations, gambler's ruin, optimal stopping, fair value, and risk-neutral pricing intuition.

**Applied skills**: use linearity of expectation to dodge brute force (e.g., expected number of fixed points, records, or matches); compute the fair value of a dice or card game and the price you'd pay to play; solve a simple stopping problem by comparing "stop now" against "expected value of continuing"; set up gambler's ruin for a random-walk question.

**Common traps**: reporting the most-likely outcome instead of the expected value; assuming you must add independence to use linearity of expectation (you do not); ignoring that the right to stop strictly raises a game's value, so a "stop at the first X" rule beats a fixed plan; conflating expected value with a guarantee and forgetting variance when the interviewer asks about risk.

**Practice deliverable**: a fair-game analysis for two or three classic games (dice, cards, a stopping game) with payoff model, EV, optimal strategy, and the price you'd quote.

## Chapter 5: Brainteasers, Invariants, and Logic Puzzles
**Core questions**
- What quantity stays the same no matter what move is made?
- What would a proof by contradiction or an extremal case force to be true?
- Which small case exposes the pattern the full problem is hiding?

**Key concepts**: parity arguments, invariants and monovariants, proof by contradiction, the pigeonhole principle, extremal arguments ("consider the largest/first"), information and weighing puzzles, state-space compression, and reasoning about common knowledge (the "blue eyes" / hat family).

**Applied skills**: spot when a coloring or parity argument settles a tiling or movement puzzle; identify the invariant that makes a process impossible or forces an outcome; use pigeonhole to prove existence without construction; reduce an information puzzle (weighings, switches, prisoners) to "how many distinguishable outcomes do I get per question?"

**Common traps**: grinding cases when one invariant settles the whole thing; assuming a solution exists and trying to build it, when the answer is that it cannot (a parity or invariant argument proves impossibility); botching common-knowledge puzzles by confusing what each person knows with what everyone knows that everyone knows; pattern-matching to a famous puzzle and missing the twist in the wording.

**Practice deliverable**: five puzzle write-ups that each name the reusable reasoning move (invariant, parity, pigeonhole, contradiction, information bound) rather than just the answer.

## Chapter 6: Mental Math, Estimation, and Market Numeracy
**Core questions**
- Is this answer even plausible — right order of magnitude, right sign, right ballpark?
- Which approximation is good enough to preserve the decision?
- What market friction (spread, fees, slippage) actually matters to the number?

**Key concepts**: fast multiplication and division tricks, percentages and percentage changes, fractions to decimals, powers and rough roots, compounding and the rule of 72, order-of-magnitude (Fermi) estimation, rates and unit conversions, bid-ask spreads, expected value of a quoted market, and basic risk/reward and edge.

**Applied skills**: estimate products and quotients to two significant figures under time pressure; convert between odds, probabilities, and payouts quickly; use the rule of 72 to approximate doubling time; reason about whether you should "hit" or "lift" a quoted two-sided market given your fair value; sketch a Fermi estimate ("how many X in a Y?") with stated assumptions.

**Common traps**: misplacing a decimal or an order of magnitude and not catching it because no plausibility check was run; over-precise arithmetic that burns time the decision didn't need; confusing a percentage-point change with a percent change; quoting a market without leaving room for the spread, so you "win" the trade and lose money; treating an estimate as exact and defending it instead of bracketing a range.

**Practice deliverable**: a timed mental-math and estimation log (60-90 seconds per problem) that records both the answer and the recurring error type, so drills target the actual leak.

## Chapter 7: Coding and the Data Screen
**Core questions**
- Which data structure makes this operation cheap?
- What is the time and space complexity, and is it worst-case or average-case?
- What edge case breaks my first solution?

**Key concepts**: arrays and strings, hash maps and sets, sorting, two-pointer and sliding-window patterns, stacks and queues, recursion and basic dynamic programming, simulation, Big-O notation, and the discipline of testing with edge cases (empty input, single element, duplicates, overflow).

**Applied skills**: pick a hash map to turn an O(n²) scan into O(n); state the complexity of a solution before being asked; dry-run code on a small input out loud; handle the edge cases (empty, negative, duplicate, boundary) before the interviewer points them out; translate a probability or simulation question into clean, runnable code.

**Common traps**: optimizing prematurely instead of first stating a correct brute force and its complexity; quoting average-case complexity as if it were worst-case (hash maps degrade, quicksort has a bad case); off-by-one errors in loops and window boundaries; ignoring integer overflow or floating-point error in a numeric problem; writing code silently, which hides the reasoning the screen is grading.

**Practice deliverable**: five interview-style solutions, each with a stated approach, complexity analysis, at least three test cases including edge cases, and a sentence on the tradeoff you chose.

## Chapter 8: Mock Interviews, Communication, and Recovery
**Core questions**
- Where exactly did the solution stall, and was it a knowledge gap or a composure gap?
- Did the hint reveal a pattern I should have seen, and did I use it well?
- What is the single highest-value thing to drill before the next round?

**Key concepts**: timed full-loop practice, thinking aloud, productive use of hints, recovering from a wrong start without spiraling, managing visible stress, pacing across multiple problems, and the structured post-mortem (question type, miss type, fix).

**Applied skills**: run a mixed 45-60 minute mock under realistic pressure; verbalize a plan even when unsure; abandon a dead end cleanly and pivot instead of defending it; convert a hint into immediate progress; debrief honestly and classify each miss by cause (setup, computation, pattern, communication, pacing).

**Common traps**: practicing only problems you can already solve, so the mock feels good and teaches nothing; treating a single solved hard problem as readiness while ignoring a shaky basics round; freezing or apologizing instead of narrating after a misstep; reviewing only the score and not the miss type, so the same trap returns next week.

**Practice deliverable**: a mock-interview review sheet logging each problem's type, the miss type, the reusable lesson, and the next drill, accumulated week over week into a personal weakness map.

## Capstone: The Full First-Round Screen
Sit a single 60-minute mixed quant screen, ideally with a partner or recorded, covering one problem from each core area:
- a multi-step probability problem requiring conditioning or Bayes
- a counting problem where overcounting is the trap
- an expected-value game with an optimal-stopping or strategy decision
- one brainteaser that turns on an invariant, parity, or information argument
- one market-estimation or mental-math prompt quoted to a sensible precision
- one coding problem solved, complexity-stated, and tested aloud

Submit your answers, the reasoning notes you spoke through, and a correction log that classifies every error by cause and names the fix.

The capstone is not about getting all six exactly right under the clock — nobody does on the first sitting. It is about proving you can move through a real loop while staying organized, vocal, and self-checking: stating assumptions, finding structure, getting a defensible number, and recovering when one problem goes sideways without dragging the rest down with it.

## Assessment Ideas
- Probability and counting sets graded on setup quality and the presence of a sanity check, not just the final number.
- Expected-value and game problems graded on whether the strategy and the fair price are justified, not guessed.
- Puzzle write-ups graded on the transferable reasoning move named, so the skill survives a new puzzle.
- Mental-math and estimation logs graded on plausibility discipline and shrinking error rate over time.
- Coding solutions graded on correctness, stated complexity, edge-case handling, and clarity of explanation.
- Capstone graded on accuracy, pacing, communication, and recovery after hints — the full interview signal, not a problem set.

## Research Notes
- Princeton Center for Career Development, "Quantitative Interview Preparation": role types and core screening areas. https://careerdevelopment.princeton.edu/guides/interviews/quantitative-interview-preparation
- MIT OpenCourseWare, probability and statistics courses (6.041 / 18.05): foundations behind interview probability and EV. https://ocw.mit.edu/search/?q=probability%20statistics
- Baruch College Pre-MFE Program topics: the math, probability, and programming baseline quant employers expect. https://mfe.baruch.cuny.edu/pre-mfe-program/
- QuantInsti / Quantra, "Quant Interview Questions Preparation": representative first-round problem types across probability, statistics, and coding. https://quantra.quantinsti.com/course/quant-interview-questions-preparation
