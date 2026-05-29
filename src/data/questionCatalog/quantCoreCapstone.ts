import type { Question } from './types'
import { makeQuestionBank } from './base'

// ---------------------------------------------------------------------------
// QUANT INTERVIEW CORE CAPSTONE — 60-Minute Mixed Quant Screen
// ---------------------------------------------------------------------------
// 10 integrative meta-questions (IDs 19980–19989) that complete the Quant
// Interview Core track. The capstone tests not the individual chapters but
// the synthesis: pacing, sequencing, sanity-checking, hint handling, and
// post-mortem reflection on a single live interview.
//
// Shared scenario (consistent across all 10 questions): Alex is interviewing
// for a first-year quant trader role at Highline Capital, a fictional
// mid-size hedge fund. The screen is six problems in 60 minutes:
//   (1) a Bayes problem (lab test specificity + low base rate)
//   (2) a counting problem (number of distinct n-bit strings with no two
//       adjacent ones)
//   (3) an expected-value problem (recursive dice game)
//   (4) a puzzle (the three light switches / one bulb)
//   (5) a market-estimation prompt (annual US umbrella sales)
//   (6) a coding prompt (two-sum variant — return index pairs that sum to T)
// Each capstone question places Alex at a specific moment in the screen and
// asks the learner to make the call Alex must make.
//
// The three sub-topic clusters group the questions by the kind of synthesis
// they test, not by chapter. Mentor hints are one-line bespoke nudges that
// name the move without giving away the answer.
// ---------------------------------------------------------------------------

const CHAPTER = 'Capstone: Mixed Screen'

export const quantCapstoneQuestions: Question[] = makeQuestionBank('Quant Finance', [
  // -------------------------------------------------------------------------
  // CLUSTER 1 — Time-Pressure Decisions (19980–19982)
  // Sequencing, abandonment, and time-banking on the 60-minute clock.
  // -------------------------------------------------------------------------
  {
    id: 19980,
    chapter: CHAPTER,
    title: "Alex's opening sequence",
    prompt: 'Alex has just been handed the six-problem packet at Highline Capital. The screen is 60 minutes, so the implied budget is 10 minutes per problem, but the interviewer has said "you choose the order — submit answers in any sequence." Alex skims all six: the Bayes problem looks like a standard test-result update, the counting problem mentions an "n up to 30" parameter, the EV is a recursive dice game, the puzzle is the three-switch / one-bulb chestnut Alex has seen, the market-estimation is "annual US umbrella sales," and the coding problem asks for an O(n log n) or better solution. What is the right opening sequence?',
    correct: 'Start with the switch puzzle (known shortcut, ~2 min), then Bayes and EV (each ~8 min) to bank time, then counting and coding, leaving the market-estimation for last so the noisy answer doesn\'t anchor judgement on the rest.',
    wrong: [
      ['Work strictly in the order printed on the packet — interviewers grade partly on discipline and shuffling looks chaotic.', 'Strict packet-order is a myth in modern quant screens — the interviewer explicitly invited reordering, and walking past a 2-minute freebie to tackle a 12-minute EV first wastes the asymmetric payoff.', 'Take the freebie first when the interviewer hands you permission to reorder.'],
      ['Start with the market-estimation prompt because it warms up the verbalization muscle and gives the interviewer an early read on communication.', 'Market-estimation answers vary by an order of magnitude; opening with the noisiest answer plants doubt in the interviewer\'s mind and burns mental energy on the question with the lowest information density.', 'Open on a question where a correct answer is unambiguous.'],
      ['Open with the coding problem because it is the longest and you want the heaviest item finished first while you are fresh.', 'Opening with the longest problem violates the asymmetric-payoff heuristic: a stalled coding problem at minute 5 leaves Alex with five problems and 45 minutes and rising anxiety, whereas finishing three short ones first locks in three correct answers and 35 minutes for the remaining three.', 'Cash quick wins before tackling the heavy item.'],
    ],
    lesson: 'Sequencing under time pressure is itself a quant skill. The opening move should harvest asymmetric payoff: a problem Alex has a known 2-minute path through (the switch puzzle) is worth more than a 10-minute coding problem with execution risk. Bank time early by clearing freebies, save soft-edged answers (market estimation) for when verification time is short anyway, and avoid opening on items that could anchor your confidence downward.\n\nThe capstone integrates pacing (Ch 8) with problem typing (every prior chapter) — the strongest signal in a screen is not getting every answer right; it is demonstrating disciplined judgement under time pressure.',
  },
  {
    id: 19981,
    chapter: CHAPTER,
    title: 'Alex stalls on counting at minute 18',
    prompt: 'Alex is 8 minutes into the counting problem (the n=30 adjacent-ones string count) and has tried two approaches: a direct enumeration that produced an off-by-one Alex cannot locate, and a recurrence f(n)=f(n-1)+f(n-2) that Alex is "almost sure" is right but has not verified for small n. The packet has four problems left and 42 minutes on the clock. The interviewer is silent. What is the right call?',
    correct: 'Spend 60 seconds verifying f(n)=f(n-1)+f(n-2) by hand on n=1,2,3,4 against direct enumeration; if it matches, commit to the recurrence answer and move on. If it does not, bail to the next problem and return only if time permits.',
    wrong: [
      ['Push through with the direct enumeration — Alex is close and switching now wastes the 8 minutes invested.', 'Sunk-cost reasoning is the most expensive trap in a timed screen. The 8 minutes are gone whether Alex stays or leaves; the only relevant question is the marginal payoff of the next minute.', 'Sunk cost is irrelevant; only marginal time matters.'],
      ['Ask the interviewer whether the recurrence is correct so Alex can commit cleanly.', 'Asking for confirmation on the core mathematical claim signals to the interviewer that Alex is uncertain about a verifiable fact — and a verifiable fact is exactly what Alex should verify in 60 seconds rather than outsource.', 'Hints are for unsticking insight, not validating arithmetic.'],
      ['Skip the problem entirely and come back at the end — counting problems are notoriously time-sinking and the EV and coding problems pay better per minute.', 'Skipping without a 60-second verification throws away an answer Alex is one calibration check from locking in. The right bail is conditional on a fast check, not unconditional.', 'A 60-second verification beats both stubborn pushing and full abandonment.'],
    ],
    lesson: 'Abandonment is a skill. The decision rule on a stalled problem is not "stay or leave" — it is "is there a cheap check that converts uncertainty into commitment?" A 60-second hand-check of f(1)=1, f(2)=2, f(3)=3, f(4)=5 against direct enumeration costs almost nothing and converts a 50/50 commit into a 100/0 commit.\n\nWhen no such check exists, leave. Sunk cost is irrelevant; the only quantity in the decision is the marginal payoff of the next minute compared to its payoff on the next problem. This is the same EV reasoning from Ch 4 applied to your own time.',
  },
  {
    id: 19982,
    chapter: CHAPTER,
    title: "Alex's verification budget",
    prompt: 'Alex has finished five of the six problems with 12 minutes left and is starting the coding problem. The naive two-sum approach is O(n²) and Alex can code it in 4 minutes; the hash-map approach is O(n) and will take 7 minutes including a sanity-check on collisions. The interviewer said up front "we value correctness above speed; we also value sanity-checking your prior answers." How should Alex spend the 12 minutes?',
    correct: 'Code the hash-map O(n) solution in 7 minutes (the interviewer explicitly named "correctness above speed"), then spend the remaining 5 minutes re-checking the magnitudes of the Bayes posterior and the EV — the two answers most prone to silent arithmetic slips.',
    wrong: [
      ['Code the O(n²) solution in 4 minutes and spend the remaining 8 minutes polishing the market-estimation narrative for the writeup.', 'The interviewer\'s "correctness above speed" line is a directive: a working O(n²) when an O(n) was clearly within reach gets graded as the candidate ducking the algorithmic question. Polishing a market-estimation narrative is the lowest-value use of verification time.', 'Read the interviewer\'s explicit criteria literally.'],
      ['Code the hash-map solution in 7 minutes, then start a stretch problem the interviewer hinted might be a "bonus" — extra problems impress.', 'Stretch problems are a vanity move when verification time exists. A wrong Bayes posterior dragging the screen score down because Alex chased bonus credit is the classic over-confidence failure.', 'Verify what is on the table before reaching for what is not.'],
      ['Code the O(n²), then re-derive the EV from scratch — full rederivation is the strongest sanity check.', 'Full rederivation under time pressure is statistically as likely to introduce a new error as to catch an old one. Verification should use an independent channel (estimate the magnitude, plug in a boundary case), not a repeat of the original computation.', 'Independent-channel verification beats rederivation.'],
    ],
    lesson: 'A 60-minute screen should leave 5 minutes of verification budget. The budget is not used to redo problems from scratch — it is used to apply independent-channel checks: does the magnitude make sense, does the boundary case (n=1, p=0, T=0) give the expected limit, does the answer pass the units test?\n\nThe capstone integrates the verification habit from Ch 1 with the pacing discipline of Ch 8. Time-banking only pays off if the banked time is spent on the verification moves with the highest catch rate per minute, not on stretch goals or cosmetic polish.',
  },

  // -------------------------------------------------------------------------
  // CLUSTER 2 — Integration Across Chapters (19983–19986)
  // Questions where the answer requires combining moves from two chapters.
  // -------------------------------------------------------------------------
  {
    id: 19983,
    chapter: CHAPTER,
    title: "Alex's Bayes posterior sanity check",
    prompt: 'Alex has just computed the Bayes problem and got a posterior of P(disease | positive test) = 0.92. The setup: base rate 1 in 1000, test sensitivity 99%, test specificity 95%. Alex has 90 seconds to decide whether to submit 0.92 or recheck. What should Alex do, and on what grounds?',
    correct: 'Recheck — a 1-in-1000 base rate with 95% specificity means roughly 50 false positives per 1000 healthy people versus ~1 true positive, so the posterior should be on the order of 1/51 ≈ 0.02, not 0.92. The magnitude is wrong by more than an order of magnitude.',
    wrong: [
      ['Submit 0.92 — Alex did the Bayes calculation carefully and second-guessing well-executed arithmetic wastes time.', 'Bayes problems with low base rates and imperfect specificity almost always produce counterintuitively low posteriors. A posterior of 0.92 in this setup is a screaming red flag that base-rate and false-positive volume were swapped in the denominator.', 'Low base rate + imperfect specificity → low posterior, almost always.'],
      ['Submit 0.92 with a note saying "I am uncertain" — transparency is rewarded.', 'Hedging with "I am uncertain" instead of doing the 30-second magnitude check Alex has time for is the worst of both worlds: Alex still gets the wrong answer and signals to the interviewer that Alex knows it might be wrong but did not verify.', 'Hedging is a substitute for verification, not a complement to it.'],
      ['Recheck the arithmetic step-by-step from scratch — the most rigorous sanity check is full rederivation.', 'Full rederivation under 90 seconds risks reproducing the same error. The high-yield check is the magnitude argument: "with base rate 0.001 and 5% false positive rate, false positives dominate true positives by ~50x, so the posterior must be small."', 'Magnitude check beats rederivation when time is short.'],
    ],
    lesson: 'A 0.92 posterior on a Bayes problem with a 1-in-1000 base rate is the canonical fingerprint of denominator confusion: Alex likely divided P(positive | disease) × P(disease) by P(positive | disease) alone rather than by P(positive) = P(pos | disease)P(disease) + P(pos | healthy)P(healthy).\n\nThe magnitude argument — "false positives outnumber true positives ~50 to 1, so the posterior must be small" — is the sanity check that catches this in seconds. The capstone integrates the Bayes mechanics of the Probability chapter with the magnitude-check habit from Ch 1: the strongest quants verify the order of magnitude before they verify the third decimal.',
  },
  {
    id: 19984,
    chapter: CHAPTER,
    title: 'Estimate, then compute',
    prompt: 'The counting problem asks Alex for the number of n=30 bit-strings with no two adjacent ones. The interviewer adds, "Before you compute, write down a single-digit estimate of the order of magnitude." Alex writes "about 10^6" based on the rough Fibonacci-growth intuition, then computes the exact answer using f(n)=f(n-1)+f(n-2) with f(1)=2, f(2)=3, getting f(30)=1346269. What did Alex do right, and what is the meta-lesson the interviewer was probing?',
    correct: 'Alex anchored the exact computation against a fast magnitude estimate; the meta-lesson is that estimate-then-compute lets the candidate catch off-by-one errors (e.g., starting Fibonacci with f(1)=1 instead of 2 would have given f(30)=832040, half the right answer) before submitting.',
    wrong: [
      ['Alex demonstrated that exact computation is unnecessary when estimation gets you within an order of magnitude — interviewers prefer fast estimates over slow exact answers.', 'Interviewers prefer correct answers over fast ones; the estimate is a guardrail for the exact computation, not a substitute for it. Submitting "about 10^6" instead of 1346269 would be graded as ducking the question.', 'Estimate is the guardrail, not the answer.'],
      ['Alex demonstrated that the Fibonacci recurrence applies, but the meta-lesson is that closed-form solutions (using the golden ratio) are always preferred over recurrences.', 'A closed-form using φ^n / √5 is no more accurate for n=30 than the recurrence and is much more error-prone to write under time pressure. The meta-lesson is not "closed forms beat recurrences"; it is "estimate first, compute second, verify by comparing the two."', 'Closed forms are not always preferred under time pressure.'],
      ['Alex demonstrated good intuition; the meta-lesson is that interviewers grade on intuition alone, so the exact computation was wasted effort.', 'Interviewers grade on both — intuition without execution is hand-waving; execution without intuition leaves no error-detection layer. The capstone tests whether the candidate runs both in parallel.', 'Intuition and execution are complementary, not substitutes.'],
    ],
    lesson: 'Estimate-then-compute is the most underused error-detection technique in quant interviews. The estimate is cheap (10 seconds of Fibonacci-growth intuition: f(n) ≈ φ^n / √5, so f(30) ≈ 1.6^30 / 2.24 ≈ 10^6) and catches the entire class of "starting-condition" errors that produce answers half or double the correct value.\n\nThe capstone integrates the combinatorics rigor of Ch 3 with the estimation discipline of Ch 6. The integrated move — write the estimate down, then compute, then compare — turns a single-shot computation into a two-channel verified answer at almost no time cost.',
  },
  {
    id: 19985,
    chapter: CHAPTER,
    title: 'EV that needs a coding move',
    prompt: 'The EV problem is a recursive dice game: roll a fair d6, if you roll k you may either stop and keep $k, or pay $1 and re-roll for up to 10 rolls total. Alex sees that the closed-form recursion E_n = max(k, -1 + E_{n-1}) requires evaluating E for n=1..10. Alex has 7 minutes left on this problem. What is the right execution?',
    correct: 'Pseudocode a 5-line bottom-up loop on paper: E_1 = 3.5; for n=2..10, E_n = average of max(k, E_{n-1} - 1) over k=1..6. Hand-tabulate the iteration; the iterative computation is faster and less error-prone than a 10-step algebraic substitution.',
    wrong: [
      ['Solve algebraically: write E_10 in terms of E_9, expand E_9 in terms of E_8, and substitute all the way down to E_1.', 'Ten levels of nested algebraic substitution under time pressure is a 50/50 to produce an arithmetic slip somewhere. Iterative computation with a 6-row × 10-column table is the same calculation but in a format where mistakes are catchable by inspection.', 'Iterate; do not substitute ten deep.'],
      ['Approximate using the optional-stopping intuition that the optimal threshold approaches some fixed point, and just report that fixed point.', 'The optional-stopping fixed point is the right intuition for n=∞, but the problem asks for n=10. Reporting the limit when the question asks for a finite-horizon answer is a category error.', 'Match the answer to the horizon asked.'],
      ['Skip the EV problem entirely — multi-step EV problems are time sinks and Alex should bank the time for the coding problem.', 'Skipping a problem Alex knows the algorithm for in favor of one that has not been started is loss-aversion masquerading as pacing discipline. The right move is to execute the EV efficiently, not to bail on it.', 'Efficient execution beats avoidance.'],
    ],
    lesson: 'A surprising fraction of expected-value problems are best executed with a coding-style mental model — a bottom-up loop with a small state — rather than as a chain of algebraic substitutions. The reason is error topology: a five-line loop on paper has errors localized to single rows you can scan; ten levels of nested substitution have errors that propagate invisibly.\n\nThe capstone integrates the EV machinery of Ch 4 with the algorithmic execution patterns of Ch 7. Recognizing when to put on the coding hat — even for a problem labeled "EV" — is itself the skill the capstone tests.',
  },
  {
    id: 19986,
    chapter: CHAPTER,
    title: 'The switch puzzle reframed',
    prompt: 'After Alex submits the standard three-switch / one-bulb answer (use heat as the second channel), the interviewer says: "Now suppose Alex cannot enter the room at all, but instead a friend inside the room reports back exactly one observation: which switch is on. The bulb may have burned out. What is the probability Alex correctly identifies all three switches?" How should Alex reframe and answer?',
    correct: 'Reframe as a probability problem: with one observation reporting which switch is on (and a possibly burned-out bulb), Alex can never distinguish the two off-switches by the friend\'s report alone. So Alex correctly identifies all three with probability 1/2 (guessing between the two off-switches), and the puzzle becomes a Bayes update only if the bulb-burnout prior is given.',
    wrong: [
      ['The probability is 1, because Alex can still use heat as the second channel through the friend.', 'The reframed problem explicitly limits the friend\'s report to "which switch is on" — heat is not in the observation channel. Smuggling the original solution into a constrained restatement misses the point that the interviewer changed the problem.', 'Re-read the constraints when the problem is restated.'],
      ['The probability is 1/3, because Alex must guess one of three switches and any one is equally likely to be correct.', 'The friend\'s "which switch is on" report deterministically identifies the on-switch, so the residual uncertainty is across the two off-switches, not all three. The base rate is 1/2, not 1/3.', 'Condition on the report; do not ignore it.'],
      ['The probability is 0, because a burned-out bulb makes all switches indistinguishable.', 'A burned-out bulb means the friend\'s "which switch is on" report becomes uninformative; in that case the probability drops to 1/3 (uniform guess across three switches). The unconditional answer assumes the bulb works, giving 1/2. The fully Bayesian answer mixes the two.', 'Distinguish the working-bulb branch from the burned-out branch.'],
    ],
    lesson: 'A puzzle becomes a probability problem the moment the information channel is constrained. The original three-switch puzzle is a logic-puzzle because heat doubles the channel from 2 states to 4; remove the heat channel and you are left with 3 switches reporting through 2 states (on/off), which is information-theoretically insufficient to distinguish all three.\n\nThe capstone integrates the lateral-thinking move from Ch 5 (find a second physical channel) with the probability machinery from Ch 2 (compute the residual uncertainty when the channel is insufficient). The strongest candidates spot when a "puzzle" the interviewer is reframing has crossed into "compute the probability under the new constraint."',
  },

  // -------------------------------------------------------------------------
  // CLUSTER 3 — Handling Hints & Recovery (19987–19989)
  // What to do with a hint, when to bail, and how to write the correction log.
  // -------------------------------------------------------------------------
  {
    id: 19987,
    chapter: CHAPTER,
    title: 'Hint with 30 seconds left',
    prompt: 'Alex has 30 seconds left on the counting problem when the interviewer says: "Hint — think about whether the recurrence depends on the last bit." Alex was already mid-execution on a different (non-recurrence) approach and was 80% through. What is the right response?',
    correct: 'Acknowledge the hint verbally ("I see — that suggests f(n) depends on f(n-1) and f(n-2)"), but finish the current approach if it is 80% done. Submit the current answer and note in the writeup that the hint pointed at the recurrence path.',
    wrong: [
      ['Drop the current approach immediately and restart with the recurrence — the interviewer\'s hint is a directive, not a suggestion.', 'Restarting a counting problem with 30 seconds on the clock produces a half-finished restart and zero submitted answer. The hint reveals what Alex would have done if more time were available; it does not invalidate the work in progress.', 'Acknowledge the hint; do not let it destroy a near-complete answer.'],
      ['Ignore the hint entirely and finish the current approach — engaging with the hint signals dependence.', 'Failing to acknowledge a hint at all signals either inattention or stubbornness. The strong move is to verbally register that Alex heard and understood the hint while still submitting the work-in-progress.', 'Engagement is not dependence.'],
      ['Ask the interviewer to clarify what they mean by "the last bit" — clarifying questions show engagement.', 'Asking for clarification with 30 seconds on the clock burns the remaining budget. Clarifications belong earlier in the problem; at the 30-second mark, only execution matters.', 'Clarify early; execute late.'],
    ],
    lesson: 'A hint at minute 9:30 of a 10-minute problem is information about what the interviewer wanted, not a command to restart. The correct response has three parts: (1) acknowledge audibly so the interviewer hears that Alex registered the hint, (2) finish the in-flight approach if it is near completion, (3) note in the writeup that the hint was registered and would have changed the approach if received earlier.\n\nThe capstone tests whether Alex can integrate new information without destroying old work. Hint handling is a load-management skill: too rigid and you submit nothing, too flexible and you submit fragments.',
  },
  {
    id: 19988,
    chapter: CHAPTER,
    title: 'Two minutes in, the approach is wrong',
    prompt: 'Alex is two minutes into the coding problem with the naive O(n²) two-sum and realizes — by reading the constraint "n up to 10^6" at the bottom of the prompt — that O(n²) will not pass the implicit performance requirement. Alex has 8 minutes left on the problem. Push through with O(n²) or bail to the hash-map O(n)?',
    correct: 'Bail to the hash-map O(n) approach. Two minutes of sunk cost is small relative to the 8 minutes remaining, and the constraint reading explicitly invalidates the O(n²) path. State the change-of-approach verbally so the interviewer sees the recovery.',
    wrong: [
      ['Push through with O(n²) — Alex can submit a working solution and verbally note the complexity issue, which interviewers will appreciate.', 'Submitting an O(n²) when the constraint explicitly requires better is graded as not having read the constraint, not as a thoughtful trade-off. The verbal note does not recover the points.', 'Constraints are not suggestions; they are pass/fail criteria.'],
      ['Stop the coding problem entirely and use the 8 minutes to re-verify earlier answers — coding failure is recoverable, but a wrong Bayes is unfixable.', 'Earlier-answer verification is high-value, but only after the coding problem has been honestly attempted at the requested complexity. Skipping the problem entirely is graded as the candidate not having an algorithm at all.', 'Verify other answers from the verification budget, not by stealing from active-problem time.'],
      ['Ask the interviewer whether O(n²) is acceptable for the input sizes given — clarifying constraint expectations shows judgement.', 'The constraint "n up to 10^6" is stated in the prompt; asking the interviewer to soften it signals that Alex did not read the problem. The right move is to switch approaches silently and execute.', 'Re-reading the constraints is the candidate\'s job, not the interviewer\'s.'],
    ],
    lesson: 'Two minutes is the right time to bail. Sunk cost grows quadratically in regret and linearly in actual minutes: bailing at minute 2 of 10 costs 2 minutes; bailing at minute 8 of 10 costs 8 minutes and leaves zero time for the recovery. The decision rule is "discover-and-switch," not "discover-and-finish-anyway-because-I-already-started."\n\nThe capstone integrates the algorithmic complexity reasoning of Ch 7 with the abandonment discipline of Ch 8. The strongest signal a candidate sends is the willingness to switch approaches early — and the verbal narration of the switch ("I just noticed n is up to 10^6, switching to a hash-map approach") is itself a signal of mature engineering judgement.',
  },
  {
    id: 19989,
    chapter: CHAPTER,
    title: "Alex's correction log",
    prompt: 'The screen is over. Alex has 15 minutes before the next interview round to write a correction log for self-review. Across the six problems, Alex: got the Bayes right after a 92-to-0.02 correction; nailed the counting and EV; submitted the standard switch-puzzle answer; gave a market estimate that Alex now thinks was 3x too high; submitted a working O(n) coding solution. What should Alex actually write in the correction log?',
    correct: 'For each problem, log the approach taken, the moment Alex was most uncertain, and the specific verification step (or its absence) that determined the outcome. Especially: log that the 92→0.02 Bayes correction was caught by the magnitude check, and that the market estimate was not verified against any independent channel.',
    wrong: [
      ['Write only the questions Alex got wrong — there is no learning value in logging problems Alex already solved correctly.', 'Problems solved correctly via a verification catch (the Bayes 92→0.02 fix) contain the most learning per minute, because they encode which verification habits actually paid off. A correction log of only-mistakes loses the positive-signal data.', 'Log the catches, not just the misses.'],
      ['Write a one-paragraph summary of the interview experience and how Alex felt during each problem.', 'Affective summaries are personal-journal content, not interview-prep content. The log should capture decisions (approach, verification, abandonment) and outcomes, in a form that lets Alex replay the screen and see which moves generalize.', 'Log decisions, not feelings.'],
      ['Write the full mathematical solution to each problem from memory to build pattern recognition.', 'Re-deriving the solutions is what textbook problem sets are for; the unique value of the post-screen log is capturing the meta-moves (sequencing, hint handling, bail decisions) that no textbook teaches. The math is the easiest part to re-derive later.', 'Capture the meta-moves; the math is in the textbooks.'],
    ],
    lesson: 'The post-screen correction log is the most undervalued part of interview prep. The screen itself takes 60 minutes; the log takes 15 minutes; the log produces 80% of the learning. The reason: during the screen, decisions are made under time pressure with incomplete information, and the only place those decision-traces survive is in a structured post-mortem written while the memory is fresh.\n\nThe template that pays off is per-problem: (1) approach chosen and why, (2) moment of highest uncertainty, (3) verification move that caught (or missed) the error, (4) what Alex would do differently with full hindsight. The capstone closes the loop on the entire Quant Interview Core track: pacing (Ch 8) plus sanity-checking (Ch 1) plus reflective practice (this lesson) is the loop that turns a one-shot screen into a generalizable skill.',
  },
])

// ---------------------------------------------------------------------------
// Sub-topic clusters for the capstone chapter.
// Cluster names are stable identifiers used by the lesson grouping.
// ---------------------------------------------------------------------------
export const QUANT_CAPSTONE_SUB_TOPICS: Record<number, string> = {
  19980: 'Time-Pressure Decisions',
  19981: 'Time-Pressure Decisions',
  19982: 'Time-Pressure Decisions',
  19983: 'Integration Across Chapters',
  19984: 'Integration Across Chapters',
  19985: 'Integration Across Chapters',
  19986: 'Integration Across Chapters',
  19987: 'Handling Hints & Recovery',
  19988: 'Handling Hints & Recovery',
  19989: 'Handling Hints & Recovery',
}

// ---------------------------------------------------------------------------
// Bespoke one-line mentor hints — name the move, do not give the answer.
// ---------------------------------------------------------------------------
export const QUANT_CAPSTONE_MENTOR_HINTS: Record<number, string> = {
  19980: 'Cash the freebie first. Which of the six problems does Alex already have a known 2-minute path through?',
  19981: 'Sunk cost is irrelevant. Is there a 60-second check that converts the recurrence guess into a commit?',
  19982: 'Read the interviewer\'s words literally — "correctness above speed" and "sanity-check prior answers" are both directives.',
  19983: 'With a 1-in-1000 base rate and 5% false positives, false positives outnumber true positives by ~50x. What does that imply about the posterior?',
  19984: 'The estimate is the guardrail, not the answer. What error would a wrong starting condition (f(1)=1 vs 2) produce, and would the magnitude estimate catch it?',
  19985: 'Iterate, do not substitute ten levels deep. What error topology does each format produce under time pressure?',
  19986: 'Re-read the constraints. When the heat channel is gone, what residual uncertainty is Alex left with?',
  19987: 'A hint at minute 9:30 is information, not a directive. What is the cost of restarting versus the cost of acknowledging-and-finishing?',
  19988: 'Bail early, bail loud. Two minutes of sunk cost is cheap; eight minutes of misallocated work is not.',
  19989: 'The screen takes 60 minutes; the log takes 15. Which captures the meta-moves no textbook teaches?',
}
