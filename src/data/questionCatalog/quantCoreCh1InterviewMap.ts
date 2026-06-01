// Quant Interview Core — Chapter 1: Interview Map and Problem-Solving Protocol
//
// These eight questions (IDs 19920–19927) cover the meta-skills that quant
// interviewers actually grade in the first minute of a problem: clarifying
// assumptions, sanity-checking an answer before committing, and narrating the
// reasoning out loud. The "correct" answer for each is a piece of interview
// craft, not a number or formula. Distractors capture real misjudgments
// junior candidates make in live phone screens and on-site rounds.
//
// Sub-topic clusters:
//   Clarifying Assumptions      (19920, 19921, 19922)
//   Sanity Checking             (19923, 19924, 19925)
//   Verbal Reasoning & Comms    (19926, 19927)

import type { Question } from './types'
import { makeQuestionBank } from './base'

export const ch1InterviewMapQuestions: Question[] = makeQuestionBank('Quant Finance', [
  // ---------------------------------------------------------------------------
  // Clarifying Assumptions
  // ---------------------------------------------------------------------------
  {
    id: 19920,
    chapter: 'Interview Map',
    title: 'Underspecified by Design',
    prompt: 'A quant interviewer asks: "What is the expected number of times two random walks on the integers meet?" You have not been told whether the walks are symmetric, whether they start at the same point, or whether the time horizon is finite. What is the best opening move?',
    correct: 'State the cleanest default set ("symmetric, same start, infinite horizon") aloud, ask the interviewer to confirm or override, then proceed.',
    wrong: [
      ['Start with the most general case (asymmetric, different starts, finite horizon), since it covers all sub-cases.', 'Most general is also most painful and usually not what the interviewer wants. You will burn the clock on a case they did not ask about.', 'The interviewer chose vague phrasing to see whether you negotiate scope, not to test the hardest variant.'],
      ['Ask the interviewer to fully specify every parameter before writing anything down.', 'Asking ten clarifying questions in a row signals that you cannot make a working assumption. Interviewers read this as indecision.', 'Propose a default and invite a correction — that is one round-trip, not ten.'],
      ['Begin computing under whatever assumption first comes to mind; clarify only if you get stuck.', 'Silent assumptions are the single most common reason candidates lose credit on otherwise-correct work. The interviewer cannot grade what they did not hear.', 'Verbalize the assumption before it ossifies — it costs ten seconds and recovers the whole problem if wrong.'],
    ],
    lesson: 'Quant interview prompts are deliberately underspecified. The interviewer is testing whether you can name a clean default set, state it out loud, and get a yes/no before the algebra starts. A good default is the simplest non-degenerate case the problem admits: here, that is symmetric walks with a shared start and unbounded time.\n\nThe pattern is propose-and-confirm, not interrogate. One sentence of the form "I will assume X, Y, Z — does that match what you had in mind?" is worth five separate clarifying questions. It shows you can move under uncertainty while still inviting correction.\n\nReusable reasoning move: when a problem is vague, name the default aloud and ask for one confirmation, then solve.',
  },
  {
    id: 19921,
    chapter: 'Interview Map',
    title: 'Safe vs. Must-Ask Assumptions',
    prompt: 'Which of the following assumptions is safe to make silently in a quant interview without asking the interviewer first?',
    correct: 'In a derivative-pricing teaser, assume the risk-free rate is flat and constant unless the problem explicitly varies it.',
    wrong: [
      ['In a brain teaser about animals on an island, assume the animals are rational and behave like game-theoretic agents.', 'Rationality of non-human agents is a problem-defining assumption, not a convention. The whole answer flips on it, so you must confirm.', 'Anything that can flip the answer must be asked. Conventions are things that only affect notation.'],
      ['In a probability question about a population, assume the population is infinite so sampling is with replacement.', 'Whether the population is finite or infinite changes both the variance and sometimes the answer. That is a structural choice, not a convention.', 'If the assumption changes the structural form of the answer, ask.'],
      ['In a coding-style question, assume the input array fits in memory and is already sorted.', 'Sortedness is the entire content of many algorithm questions — assuming it silently can hand you the answer for free and the interviewer will notice.', 'Anything that trivializes the problem is exactly the thing you must confirm.'],
    ],
    lesson: 'Safe-to-assume conventions are things every quant in the room would default to identically: flat interest rates in a teaser, fair coins, independent draws, no transaction costs, continuous compounding when convenient. These are notational defaults — they do not change the structural form of the answer.\n\nMust-ask assumptions are anything that can flip the answer or trivialize the problem: rationality of non-human agents, finite vs. infinite population, sorted vs. unsorted input, whether ties are possible, whether players see each other’s moves. If swapping the assumption would change your method, ask.\n\nThe quick test: would two competent quants instinctively pick the same value? If yes, it is a convention and you can assume silently while naming it. If no, it is a problem parameter and you must confirm.\n\nReusable reasoning move: before assuming, ask whether the assumption changes the method or only the notation.',
  },
  {
    id: 19922,
    chapter: 'Interview Map',
    title: 'Hidden Constraint Detection',
    prompt: 'The classic "100 floors, 2 eggs" puzzle asks for the minimum number of drops to find the critical floor in the worst case. A candidate launches into a binary-search argument and concludes that 7 drops suffice. What hidden constraint of the problem have they missed?',
    correct: 'Eggs survive falls below the critical floor and break at or above it — there are only two outcomes per drop, and a broken egg cannot be reused. Binary search assumes three outcomes (above, below, equal) and unlimited probes.',
    wrong: [
      ['The eggs might have different breaking thresholds, so the critical floor is not unique.', 'The puzzle stipulates identical eggs with one shared threshold. Multi-threshold variants exist but are not the standard prompt.', 'The hidden constraint is about the number of eggs you can spend, not about the eggs themselves.'],
      ['The floors are not equally spaced, so a binary search would land on fractional floors.', 'Floors are integer-indexed by stipulation. This is a convention, not a hidden constraint.', 'Re-read the question: the constraint is about how a broken egg restricts future drops, not floor geometry.'],
      ['Binary search is fine; the answer is 7 and the candidate is correct.', 'Binary search needs log2(100) ≈ 7 comparisons, but each "comparison" assumes you can probe at any floor without cost. A broken egg removes that ability.', 'Count what each failed drop actually costs you in remaining information.'],
    ],
    lesson: 'Hidden constraints are facts the problem implies but does not announce. In the egg puzzle, the two operative ones are: (i) once an egg breaks, it is gone, and (ii) the outcome of a drop is binary (survives or breaks), not ternary. Together these turn what looks like log-base-2 search into a roughly square-root problem; the answer is 14 drops, not 7.\n\nDetecting hidden constraints is a specific habit: after reading the prompt, restate the rules of the world in your own words and check whether any operation you want to perform is actually allowed. "Can I probe any floor?" "Can I reuse a broken egg?" "Can I drop two eggs simultaneously?" Most candidates skip this step and discover the constraint only after a wrong answer.\n\nReusable reasoning move: before choosing a method, restate the rules of the world and check that the method’s operations are all legal under those rules.',
  },
  // ---------------------------------------------------------------------------
  // Sanity Checking
  // ---------------------------------------------------------------------------
  {
    id: 19923,
    chapter: 'Interview Map',
    title: 'Magnitude Check',
    prompt: 'You are asked: "Roughly what fraction of two-child families have at least one boy, given that one specified child is a boy?" After algebra you obtain 0.0003. The interviewer waits. What should you do?',
    correct: 'Recognize that any answer to a "fraction of families" question that comes out at 0.03% is almost certainly off by orders of magnitude, announce the suspicion, and recheck the arithmetic before committing.',
    wrong: [
      ['Commit to 0.0003 — the algebra was careful, so the unintuitive answer is probably a quant-interview twist.', 'Quant interviewers love unintuitive answers, but they almost never lie outside the plausible range. A two-child boy-probability question lives near 1/2, 2/3, or 3/4, never near 0.03%.', 'Compare against the plausible range a competent peer would name before any algebra.'],
      ['Report 0.0003 but explain it as a small-sample artifact.', 'There is no sample here — this is a pure probability question. Inventing a small-sample story to defend an implausible number is exactly the failure mode magnitude checks exist to catch.', 'Implausible numbers do not get rescued by hand-waving; they get rechecked.'],
      ['Round 0.0003 to zero and conclude the event is essentially impossible.', 'Rounding away a wrong answer compounds the error. A magnitude check should trigger a recompute, not a re-presentation.', 'When the magnitude is wrong, the cure is to redo the work, not to restate it.'],
    ],
    lesson: 'A magnitude check is the cheap sanity test you run before you commit to an answer. It asks: "If I told a competent peer the question without the math, what range would they guess?" Anything outside that range is suspect.\n\nFor "fraction of two-child families with at least one boy given one is a boy", the answer is 2/3 ≈ 0.667. Getting 0.0003 means you treated the conditioning event as if it were vanishingly rare — almost certainly a unit error or a conditional/joint confusion. The magnitude check catches this without finding the bug.\n\nMagnitude checking is not the same as guessing; it is bracketing. You are asking whether the answer lives in the plausible decade (here, "between 0.5 and 1"), not whether it is exactly right. Anything outside the decade triggers a recompute.\n\nReusable reasoning move: before committing, name the plausible decade of the answer and reject anything outside it.',
  },
  {
    id: 19924,
    chapter: 'Interview Map',
    title: 'Boundary Case Verification',
    prompt: 'You derive that the expected number of distinct values when drawing N times with replacement from {1, ..., K} is N * (1 - (1 - 1/K)^(N-1)). Before quoting it, what is the single most informative check?',
    correct: 'Substitute N = 1 and verify the formula returns 1 (one draw must produce exactly one distinct value). It returns N * (1 - (1 - 1/K)^0) = N * 0 = 0, so the formula is wrong.',
    wrong: [
      ['Substitute K = N and check that the answer is between 0 and N.', 'Range-checking is weaker than boundary-checking: many wrong formulas land inside the right range but fail at the boundary.', 'Pick a boundary the answer is forced to take exactly, not just live within.'],
      ['Substitute N = K = 2 and see whether the formula gives 1.5, the right value for two draws from {1, 2}.', 'Pinning down a single mid-range value catches some errors but not the structural off-by-one this formula has. Boundary checks at N=1 are mandatory and cheaper.', 'Start with the boundary that forces an exact value; only escalate to mid-range cases if it survives.'],
      ['Take the derivative with respect to K and check the sign is negative.', 'Sign-checking derivatives is a useful sanity test but it does not catch the structural N=1 failure. Save it for after boundaries pass.', 'Boundary cases come first; differential checks come second.'],
    ],
    lesson: 'A boundary case is a value of the parameters for which the answer is forced by definition, not by algebra. For "expected distinct values in N draws from K", the forcing boundaries are: N=1 must give 1 (one draw, one value), N=0 must give 0 (no draws, no values), and K=1 must give 1 for any N>=1 (all draws are forced to the only available value).\n\nThe quoted formula fails the N=1 check immediately — it has an off-by-one in the exponent. The correct expression is K * (1 - (1 - 1/K)^N), which gives 1 at N=1 and K at N=infinity. Boundary tests catch this in five seconds; algebraic re-derivation can take five minutes.\n\nWhich boundary to pick: choose the one where the answer is forced to a specific integer or limit, not merely constrained to a range. N=1, N=infinity, K=1, and K=infinity are the canonical four for any draws-with-replacement formula.\n\nReusable reasoning move: before quoting a formula, plug in the boundary at which the answer is forced to a specific value.',
  },
  {
    id: 19925,
    chapter: 'Interview Map',
    title: 'Symmetry Exploitation',
    prompt: 'Two players A and B each flip a fair coin once. You are asked for P(A flips heads | exactly one head appeared). After algebra you obtain 2/3. The problem is symmetric in A and B. What does the symmetry argument tell you?',
    correct: 'By symmetry P(A heads | one head) must equal P(B heads | one head), and the two conditional probabilities must sum to 1 since exactly one head means exactly one of them flipped heads. Therefore each is 1/2, and 2/3 is wrong.',
    wrong: [
      ['Symmetry implies the answer is 1, since A and B are interchangeable so the conditional probability of either flipping heads is certain.', 'Symmetry equates the two conditional probabilities, it does not collapse them to 1. They sum to 1, not each equal 1.', 'Equate, then check what the conditional probabilities must sum to.'],
      ['Symmetry implies the answer is 1/3, matching the classic "boy-girl" puzzle.', 'The boy-girl problem conditions on "at least one boy" (three equally likely cases), giving 2/3 for the second-child question. The condition here is "exactly one head", which is a stricter event and breaks the analogy.', 'Match the conditioning event exactly, not the surface phrasing.'],
      ['Symmetry is irrelevant; 2/3 is the correct boy-girl answer and applies here too.', 'Conditioning on "exactly one head" is not the same as conditioning on "at least one head". The first symmetrizes A and B; the second does not.', 'When the answer disagrees with a symmetry argument, the symmetry argument almost always wins.'],
    ],
    lesson: 'Symmetry is a global property of a problem that any answer must respect. If the setup is invariant under swapping two labels, then any quantity that depends only on those labels must also be invariant — or, in conditional-probability problems, the symmetric quantities must take the same value and sum to the right total.\n\nHere "exactly one head" is a symmetric event in A and B. The two conditional probabilities P(A heads | one head) and P(B heads | one head) are the only two ways the one head could have landed, so they sum to 1. By symmetry they are equal, so each is 1/2. Any answer other than 1/2 is wrong before you re-examine the algebra.\n\nThis is a stronger tool than people give it credit for: a symmetry argument can rule out a wrong answer in one line, even when finding the right derivation takes ten. The classic boy-girl confusion conflates "exactly one head" (symmetric) with "at least one head" (asymmetric in which child is named) — different conditioning events, different answers.\n\nReusable reasoning move: when the setup is symmetric in two labels, check that your answer treats them symmetrically before publishing it.',
  },
  // ---------------------------------------------------------------------------
  // Verbal Reasoning & Communication
  // ---------------------------------------------------------------------------
  {
    id: 19926,
    chapter: 'Interview Map',
    title: 'Narrating Silent Algebra',
    prompt: 'You are working through a multi-step expected-value problem on the whiteboard. Three minutes pass in silence while you do the algebra. The interviewer interrupts and asks you to "talk through what you are doing". What is the best response?',
    correct: 'Verbalize the structural plan ("I am breaking E[X] into a sum over disjoint events, then computing each conditional expectation"), then resume the algebra while narrating each substitution.',
    wrong: [
      ['Apologize for the silence and ask for one more minute to finish, then present the final answer.', 'Quant interviewers grade reasoning, not just final numbers. A correct answer presented after three minutes of opaque silence scores worse than a partial answer with visible reasoning.', 'The reasoning is the product, not the byproduct.'],
      ['Read each line of algebra out loud as you write it, so every symbol is verbalized in real time.', 'Reading the algebra is not the same as narrating the reasoning. The interviewer wants the structural move ("law of total expectation", "conditioning on the first step"), not a transcript.', 'Narrate the why, not the what.'],
      ['Erase the work, restart, and explain the entire plan from the top before writing anything.', 'Discarding correct work to restart the narration is a net loss. Continue from where you are and add the missing layer of explanation.', 'Add narration on top of the existing work; do not throw it away.'],
    ],
    lesson: 'Quant interviewers are grading two things simultaneously: the correctness of the final answer and the legibility of the reasoning that produced it. Silent algebra hides the second axis entirely. A candidate who narrates ("I am about to use the law of total expectation, conditioning on the first hit time") scores higher than one who arrives at the same answer in silence.\n\nThe right unit of narration is the structural move, not the symbol. "I am splitting the expectation into two cases" is the right level; "x squared plus three x" is not. Narration should let the interviewer reconstruct your decision tree, including the branches you considered and rejected. This is also what separates a candidate who got lucky from one who could re-solve a perturbed version of the problem on the spot.\n\nA useful habit: every time you start a new line of algebra, say one sentence about why. If you have not said anything for thirty seconds, name the next move before writing it.\n\nReusable reasoning move: every thirty seconds of silent work, name the next structural move before executing it.',
  },
  {
    id: 19927,
    chapter: 'Interview Map',
    title: 'Naming the Problem Type',
    prompt: 'The interviewer asks: "What is the probability that a random walk on the integers, starting at 0, ever reaches +10 before reaching -5?" What should your first sentence aloud be?',
    correct: '"This is a gambler\'s-ruin problem on a symmetric random walk with absorbing barriers at +10 and -5; I will use the standard linear-equation approach for the hitting probability."',
    wrong: [
      ['"Let me set up the recursion for P(n), the probability of hitting +10 before -5 starting from position n."', 'Jumping into the recursion is correct work, but it skips the naming step. The interviewer learns nothing about whether you recognize the standard form of the problem.', 'Name first, then derive. Naming is a thirty-second move that signals recognition.'],
      ['"This looks like a complicated stochastic process question — let me think about it for a moment."', 'Describing the problem as "complicated" without classifying it signals that you do not have a shelf of known problem types to match against. Even if the next step is correct, the framing is weak.', 'Classify first; difficulty is a property of the candidate, not of the problem.'],
      ['"This is a martingale problem; let me apply the optional stopping theorem."', 'Optional stopping is one valid approach, but the standard name for this problem is gambler\'s ruin, and the recursion approach is more common in interviews. Choosing the heavier tool when the lighter one suffices signals you are pattern-matching to vocabulary, not to the actual problem.', 'Pick the simplest correct name; reserve heavier machinery for when it is genuinely needed.'],
    ],
    lesson: 'Naming the problem type is the cheapest signal you can send. A single phrase — "this is gambler\'s ruin", "this is a stopping-time problem", "this is a constrained optimization with one binding constraint" — tells the interviewer that you have seen the family before and know which toolkit to open. It also commits you to a method publicly, which makes the rest of the conversation easier to follow.\n\nThe right naming level is the problem family, not the specific theorem. "Gambler\'s ruin" is right; "the optional stopping theorem applied to a bounded martingale on the integers" is over-claiming and locks you into one method too early. Naming wrong is recoverable in one sentence ("actually this is more like a coupon-collector variant"); naming nothing is harder to recover from because the interviewer cannot tell what you are anchored to.\n\nThe families worth being fluent in for quant interviews: gambler\'s ruin, coupon collector, birthday problem, ballot problem, occupancy/balls-in-bins, Markov chain hitting times, optional stopping, and the law of total expectation. Most teasers reduce to one of these in one or two steps.\n\nReusable reasoning move: before deriving, name the problem family aloud — even at the risk of naming wrong, since the correction itself counts as reasoning.',
  },
])

export const CH1_INTERVIEW_MAP_SUB_TOPICS: Record<number, string> = {
  19920: 'Clarifying Assumptions',
  19921: 'Clarifying Assumptions',
  19922: 'Clarifying Assumptions',
  19923: 'Sanity Checking',
  19924: 'Sanity Checking',
  19925: 'Sanity Checking',
  19926: 'Verbal Reasoning & Communication',
  19927: 'Verbal Reasoning & Communication',
}

export const CH1_INTERVIEW_MAP_MENTOR_HINTS: Record<number, string> = {
  19920: 'Propose a default set of assumptions in one sentence and ask the interviewer to confirm — that is one round-trip, not ten clarifying questions.',
  19921: 'Ask whether the assumption changes the structural method or only the notation. If it changes the method, confirm before assuming.',
  19922: 'Before picking a method, restate the rules of the world in your own words and check whether each operation you want is actually permitted.',
  19923: 'Name the plausible decade your answer should live in before doing the algebra; reject anything that lands outside it.',
  19924: 'Plug in the boundary where the answer is forced to a specific value (often N=1 or K=1) — algebra mistakes show up there in seconds.',
  19925: 'If the setup is symmetric in two labels, your answer must be too. A symmetric problem with an asymmetric answer is almost always wrong.',
  19926: 'Every thirty seconds of silent work, name the next structural move out loud before writing it.',
  19927: 'Before deriving anything, name the problem family aloud — gambler\'s ruin, coupon collector, hitting time, and so on.',
}
