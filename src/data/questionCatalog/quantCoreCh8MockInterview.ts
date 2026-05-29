// Quant Interview Core — Chapter 8: Mock Interviews and Recovery.
//
// These are META questions about interview craft, not numeric puzzles. The
// "correct" answer is always about behavior under pressure: how to respond
// to a hint, how to recover from a slip, how to debrief a mock. Distractors
// are real misjudgments candidates make ("pretend the error didn't happen",
// "refuse the hint to show independence"), and lessons reference how
// interviewers actually score the interaction.
//
// Three exports:
//   ch8MockInterviewQuestions         — 8 Question objects (IDs 19960-19967).
//   CH8_MOCK_INTERVIEW_SUB_TOPICS     — id -> cluster name.
//   CH8_MOCK_INTERVIEW_MENTOR_HINTS   — id -> one-line bespoke hint.

import type { Question } from './types'
import { makeQuestionBank } from './base'

export const ch8MockInterviewQuestions: Question[] = makeQuestionBank('Quant Finance', [
  // ---------------- Responding to Hints ----------------
  {
    id: 19960,
    chapter: 'Mock Interview and Recovery',
    title: 'The Boundary Hint',
    prompt: 'You are mid-derivation when the interviewer interrupts: "Consider what happens at the boundary." What is the right immediate response?',
    correct: 'Stop, plug the boundary case into your current setup out loud, and check whether your answer or method survives it.',
    wrong: [
      ['Ask the interviewer which boundary they mean before doing anything else.', 'That deflects the prompt back to them; they have just told you exactly where to look.', 'Try the obvious boundary first; if it produces something useful you do not need to ask.'],
      ['Note the comment, finish the line of work you were on, and return to the boundary at the end.', 'The interviewer is steering you because something is off now, not at the end. Acting later wastes the nudge.', 'Treat a hint as a "do this next" instruction, not a footnote.'],
      ['Restart the problem from scratch with the boundary case as the new starting point.', 'You throw away all the partial structure you already have. The hint is a correction, not a reset.', 'Adjust, do not rebuild.'],
    ],
    lesson: "An interviewer hint is a directed instruction, not a suggestion. When they say 'consider the boundary,' they have spotted that your current path either ignores or breaks at an extreme case, and they are telling you exactly where to test next. The right move is to immediately try the boundary in your existing setup and narrate what you see.\n\nCandidates burn hints in two common ways. First, by asking a clarifying question back ('which boundary?') — that signals you were not actively probing edge cases on your own, and it spends the interviewer's patience without producing any work. Second, by acknowledging the hint and then continuing on the old path — interviewers read this as not listening, which is far more damaging than the original mistake.\n\nThe behavior interviewers want to see: hint received -> visible course correction within ten seconds -> you keep talking. Even if the boundary check does not immediately reveal the fix, the act of pivoting on the hint scores points and usually pries the next idea loose."
  },
  {
    id: 19961,
    chapter: 'Mock Interview and Recovery',
    title: 'The Offered Hint',
    prompt: 'You have been stuck for about 90 seconds. The interviewer says, "Would you like a hint?" What do you do?',
    correct: 'Accept it gracefully, say what you have tried so far in one sentence, and take the hint.',
    wrong: [
      ['Refuse the hint to demonstrate you can solve it independently — that is what they are testing.', 'They are not testing whether you can avoid help; they are testing whether you can collaborate and recover. Refusing reads as ego.', 'Independence is not the signal; throughput is.'],
      ['Ask for a few more minutes to keep trying first, then accept only if you are still stuck.', 'You have already been stuck for 90 seconds. Stalling longer just burns interview time you need for the rest of the question.', 'Once they offer, the cost of the hint is already paid; delaying just adds dead air.'],
      ['Accept the hint but pretend you were about to think of it yourself.', 'Interviewers can tell, and the pretense converts a small negative into a credibility problem.', 'Own the gap; do not perform around it.'],
    ],
    lesson: "When an interviewer proactively offers a hint, the decision has already been made for you: they have decided you need one. Refusing it does not impress them — it tells them you would rather burn shared time than admit you are stuck, which is exactly the wrong signal for a job where you will collaborate with senior researchers daily.\n\nThe small grace note that helps: briefly state where you are ('I have tried X and it does not close, I was about to try Y') before taking the hint. This shows you were working productively, gives the interviewer context to calibrate the hint, and converts the moment from 'candidate is stuck' into 'candidate is collaborating.'\n\nThe scoring rubric most desks use treats hints as priced — accepting one usually drops the question's score by some fixed amount, but ignoring an offered hint and producing nothing is far worse. Take the hint, finish the question, and move on. The interview is not graded on hints-per-question; it is graded on whether the interviewer would want to sit next to you for a year."
  },
  {
    id: 19962,
    chapter: 'Mock Interview and Recovery',
    title: 'After the Hint',
    prompt: 'You received a hint that points in a different direction from your current approach. Do you apply the hint immediately, or first finish checking whether your original approach could work?',
    correct: 'Apply the hint immediately. The interviewer is signaling the intended path; continuing to defend your original approach wastes time and reads as not listening.',
    wrong: [
      ['Finish the original approach quickly so you have something to compare the hint against.', 'You are not being graded on completeness of dead ends. Time spent finishing a wrong approach is time not spent on the right one.', 'A hint is a redirection, not a second opinion.'],
      ['Apply the hint but keep mentioning your original idea so the interviewer sees you considered it.', 'Layering both narratives makes your reasoning harder to follow and signals that you cannot let go of a bad approach.', 'Commit to the new path cleanly.'],
      ['Ask the interviewer whether your original approach would also work, then decide.', 'They have already implicitly told you it would not, by giving the hint. Asking again is a stall.', 'Hints are answers to questions you already asked by being stuck.'],
    ],
    lesson: "A hint is the interviewer telling you, in code, 'do not spend more time on what you were doing.' The right behavior is to pivot cleanly: re-read your setup, plug in the hint, and produce visible progress within roughly thirty seconds. Hanging onto the original approach 'just to check' costs you two ways — you burn clock, and you signal stubbornness in front of someone whose job is to spot that exact failure mode in junior hires.\n\nThe one exception is when the hint is genuinely ambiguous and might be consistent with either path. In that case, ask one targeted clarifying question ('do you mean I should be conditioning on X, or working in terms of X directly?') and then commit. Do not negotiate the hint.\n\nWhat interviewers reward: visible plasticity. The ability to be wrong, hear feedback, and re-route quickly is exactly the trait that distinguishes a useful junior from a high-friction one. Showing that trait in real time, on a question you partly missed, is often a stronger positive signal than getting an easier question fully right."
  },

  // ---------------- Recovery & Pacing ----------------
  {
    id: 19963,
    chapter: 'Mock Interview and Recovery',
    title: 'The Arithmetic Slip',
    prompt: 'Two minutes into a calculation you spot an arithmetic error in a step you already wrote down. The interviewer has not noticed. What do you do?',
    correct: 'Briefly say "I have made an arithmetic error on this line — let me correct it," fix it in place, and continue.',
    wrong: [
      ['Quietly restart the calculation on a fresh line and hope the interviewer does not notice the change.', 'They almost always notice, and now you have added concealment to a small slip. The original error was cheap; the cover-up is expensive.', 'Errors are routine; hiding them is the problem.'],
      ['Erase the bad line, then carry on without commenting.', 'Silent erasure looks identical to silent restart. The interviewer is watching your reasoning, not just your final number.', 'Narrate the correction so they see the recovery.'],
      ['Stop, apologize at length, and explain how the error happened before continuing.', 'Long apologies eat clock and amplify a small mistake. One sentence of acknowledgment is plenty.', 'Recover briskly, not dramatically.'],
    ],
    lesson: "Interviewers are looking for how you handle being wrong, not whether you can avoid being wrong. A small arithmetic slip, noticed and corrected by you in real time, is a positive signal — it shows you are sanity-checking your own work. A small arithmetic slip that you try to hide is a negative signal even if you would have gotten the right number otherwise.\n\nThe optimal recovery script is roughly: 'I have made an error on this line — let me correct it.' Then fix it, then carry on. No long apology, no restart from scratch, no theatrical self-criticism. Six words and a corrected line.\n\nThe meta-point: in research and trading roles, you will make calibration errors, sign errors, and unit errors regularly. The colleagues who are pleasant to work with catch their own errors, flag them immediately, and move on. The ones who are painful to work with hide errors until someone else finds them. The interviewer is screening for the first kind."
  },
  {
    id: 19964,
    chapter: 'Mock Interview and Recovery',
    title: 'The Pacing Call',
    prompt: 'You are 12 minutes into a 45-minute screen with four questions and you are still on the first one. The interviewer has not said anything about time. What do you do?',
    correct: 'Say "I want to make sure I leave time for the other questions — can I move on and come back to this if there is time?" Then move on.',
    wrong: [
      ['Push through and finish question 1 properly, then catch up on the remaining three faster.', 'You are already over budget; the remaining three will not fit in 33 minutes if the first ate 15+. Better to attempt all four than to perfect one.', 'Sunk-cost the question, not the screen.'],
      ['Stay silent on pacing and let the interviewer manage the clock; they will move you on if needed.', 'Many interviewers will not, and your final score is "attempted 1 of 4." Pacing is the candidate\'s job, not the interviewer\'s.', 'Showing pacing awareness is itself a positive signal.'],
      ['Ask the interviewer how much time they think you should spend on question 1.', 'That outsources the judgment they want to see you make. Propose a plan, then ask for confirmation.', 'Lead the pacing decision; do not request it.'],
    ],
    lesson: "Pacing is a tested skill in any timed quant screen, often more heavily than the candidate realizes. Four questions in 45 minutes implies roughly 11 minutes per question with some slack; at 12 minutes on question 1 you are already over budget, and finishing it 'properly' means functionally skipping question 4.\n\nThe right behavior is to flag the pacing decision out loud: 'I want to leave time for the other questions — can I move on and come back?' This does three things at once. It demonstrates situational awareness, it gives the interviewer a chance to redirect ('actually, please finish this one — it is the hardest'), and it preempts the implicit critique that you could not budget time. The interviewer almost always says 'sure, move on.'\n\nA partial attempt on four questions beats a polished attempt on one in nearly every scoring rubric, because the screen is sampling your breadth across topic areas. The strongest candidates are the ones who treat the clock as a constraint they manage actively, not an environmental hazard."
  },
  {
    id: 19965,
    chapter: 'Mock Interview and Recovery',
    title: 'The Skeptical Follow-Up',
    prompt: 'You give an answer. The interviewer asks, "Are you sure?" or asks a follow-up that suggests your answer is wrong. What do you do?',
    correct: 'Reconsider out loud — walk through your assumptions step by step and check each one explicitly, rather than asserting the answer again.',
    wrong: [
      ['Defend the answer firmly; flipping under pressure makes you look unsure of correct reasoning.', 'Flipping under sound pressure is good. Holding under sound pressure is also good. Holding because pressure feels uncomfortable is bad.', 'The question is "is the reasoning right," not "is my posture confident."'],
      ['Immediately switch your answer to whatever the interviewer seems to be hinting at.', 'Flipping without re-checking is just as bad as digging in — it shows you cannot evaluate your own reasoning, only read the room.', 'Re-check, then commit.'],
      ['Ask the interviewer to tell you whether you are right or wrong before continuing.', 'They will not. The point of the prompt is to see you debug your own answer in real time.', 'Treat "are you sure?" as a free re-examination, not a yes/no question.'],
    ],
    lesson: "'Are you sure?' is one of the most common interviewer prompts and one of the most diagnostic. It is usually neutral — the interviewer wants to see whether you can re-examine your reasoning under mild pressure, not whether you will hold the line. Sometimes you were right and the prompt is a stress test; sometimes you were wrong and the prompt is a generous nudge. From inside the chair, you usually cannot tell which.\n\nThe right behavior is to make the assumptions you used visible and re-check each one: 'I assumed X — let me confirm that. I assumed Y — yes, that holds because... I assumed Z — wait, does that actually hold here?' This works whether you were right or wrong. If you were right, the walkthrough demonstrates that your answer is robust. If you were wrong, you usually find the error in the assumption chain yourself.\n\nWhat to avoid: confident re-assertion ('yes, definitely 1/3') or immediate capitulation ('oh, you are right, it must be 1/2'). Both signal that you cannot evaluate your own work — which is the trait the prompt is testing. The interviewer wants to see calibrated self-doubt, not confidence and not panic."
  },

  // ---------------- Post-Mortem & Self-Assessment ----------------
  {
    id: 19966,
    chapter: 'Mock Interview and Recovery',
    title: 'The Post-Mortem Artifact',
    prompt: 'You have just finished a mock interview that went poorly. What is the single most useful artifact to produce before doing your next mock?',
    correct: 'A correction log: for each miss, write down the question type, what specifically failed (setup, arithmetic, recall, pacing), and the next drill to do.',
    wrong: [
      ['A re-solved, polished writeup of each question you got wrong, with full working.', 'Re-solving the same questions overfits to those specific problems. You need a categorical fix, not a per-question fix.', 'Drill the type, not the instance.'],
      ['A list of all the questions you missed, sorted by topic, to read before the next mock.', 'Reading is not drilling. A list with no diagnosis and no next action does not change behavior on the next attempt.', 'Diagnose, then prescribe a drill.'],
      ['A confidence/calibration journal tracking your mood and stress level during each question.', 'Mood logs are weak signal compared to "what type of error did you make and what specifically will fix it."', 'Track the mechanical failure, not the emotional one.'],
    ],
    lesson: "The most valuable post-mortem artifact is a correction log structured around generalization, not specifics. Three columns per row: question type (e.g., 'expected value with stopping condition'), specific failure ('did not set up recurrence; tried direct sum'), next drill ('three EV-with-stopping problems from Heard on the Street within 48 hours').\n\nThis structure forces the diagnostic step that almost everyone skips. Resolving the exact question you missed is comforting but low-value — you are unlikely to see that specific question again, and your real gap is in the class of problems it belongs to. A correction log makes the gap legible at the class level, and the 'next drill' column makes the fix mechanical.\n\nThe second-order benefit: after four or five mocks, the log itself shows patterns. If three of your last ten misses are 'arithmetic on the second page of work,' the fix is not more probability practice — it is a checking ritual. If three are 'froze when interviewer interrupted,' the fix is mock interviews with deliberate interruption. You cannot see these patterns from re-solving individual problems."
  },
  {
    id: 19967,
    chapter: 'Mock Interview and Recovery',
    title: 'Wrong vs Slow',
    prompt: 'When reviewing a mock, which is the stronger learning signal: questions you got wrong, or questions you got right but slowly?',
    correct: 'Slow-right questions — they reveal the gap between knowing the answer and being fluent, which is what drilling fixes most efficiently.',
    wrong: [
      ['Wrong questions, because a wrong answer is a complete failure and a slow answer at least counted.', 'In a real screen, slow-right is often equivalent to wrong because it consumes time budget for other questions. Slow-right is also far more drillable.', 'Time pressure converts slow-right into effectively-wrong.'],
      ['Wrong questions, because slow-right means you understood the method and only need more practice — wrong means a real gap.', 'A slow-right question with a slow setup is also a real gap; it just hides behind getting the final number eventually.', 'Slowness is a gap, not a near-miss.'],
      ['Neither — the strongest signal is questions you got right confidently and quickly, because those are your reliable tools.', 'Reliable tools are valuable in performance but uninformative for improvement. They tell you nothing about what to fix next.', 'Confirmed strengths do not direct your study time.'],
    ],
    lesson: "Both wrong and slow-right questions matter, but slow-right is usually the more actionable signal. A wrong answer often reflects a missing tool — you did not know that random walks have a martingale interpretation, or you had never seen the inclusion-exclusion form of the birthday problem. The fix is to learn the tool, which is real work but well-trodden.\n\nA slow-right answer reflects an unfluent tool — you knew the method existed but had to derive it from first principles, costing five minutes that should have cost ninety seconds. The fix is repetition until the setup is automatic. This is the cheapest, highest-leverage form of practice: a problem set of ten similar questions done back to back will turn a slow-right into a fast-right faster than almost any other intervention.\n\nThe deeper reason slow-right matters more than candidates realize: in a real timed screen, slow-right contaminates the rest of the interview. You burn the clock on question 2, panic-rush question 3, and miss question 4 entirely. So a single slow-right early in the screen can cause multiple wrongs downstream. Drilling fluency on your slow-right questions has compounding returns across an entire screen."
  },
])

export const CH8_MOCK_INTERVIEW_SUB_TOPICS: Record<number, string> = {
  19960: 'Responding to Hints',
  19961: 'Responding to Hints',
  19962: 'Responding to Hints',
  19963: 'Recovery & Pacing',
  19964: 'Recovery & Pacing',
  19965: 'Recovery & Pacing',
  19966: 'Post-Mortem & Self-Assessment',
  19967: 'Post-Mortem & Self-Assessment',
}

export const CH8_MOCK_INTERVIEW_MENTOR_HINTS: Record<number, string> = {
  19960: 'A boundary prompt is a "try this case now" instruction, not a topic for follow-up discussion. Plug the extreme in and narrate.',
  19961: 'They already decided you need the hint by offering it. The only question is whether you take it cleanly or stall first.',
  19962: 'A hint is a redirection, not a second opinion. Pivot fast and visibly; do not defend the original path.',
  19963: 'Six words: "I made an error — let me correct it." Then fix and continue. No theatrics, no silent restart.',
  19964: 'At 12 minutes on question 1 of 4 in 45 minutes, the math has already decided. Flag the pacing decision out loud and move on.',
  19965: '"Are you sure?" is a free re-examination, not a confidence test. Walk back through assumptions, do not re-assert.',
  19966: 'Categorical, not specific. Question type, what failed mechanically, what drill comes next — three columns per miss.',
  19967: 'Slow-right contaminates the rest of the screen by eating clock. It is also the cheapest gap to drill away.',
}
