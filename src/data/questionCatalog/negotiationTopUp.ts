import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe negotiation top-up'

export const negotiationTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: Negotiation Fundamentals
  // ---------------------------------------------------------------------------
  {
    id: 7316000,
    chapter: 'Negotiation Fundamentals',
    title: 'Reservation point vs target',
    prompt: 'You are selling a used forklift. The most you hope to get is $9,000; the least you will accept before walking to your backup buyer is $6,500. In negotiation terms, what is the $6,500 figure?',
    correct: 'Your reservation point — the worst deal you will accept before turning to your BATNA',
    wrong: [
      miss('Your target, because it is the number you should aim for', 'The target is the optimistic figure you aim for ($9,000 here); the $6,500 is your floor, not your aspiration. Aiming at your floor concedes the whole range.', 'The number you hope for is the target; the number below which you walk is the reservation point. They sit at opposite ends.'),
      miss('Your BATNA itself', 'Your BATNA is the backup buyer (an alternative course of action), not a price. The reservation point is the dollar figure that backup justifies.', 'BATNA is the alternative action; the reservation point is the price below which that alternative becomes the better choice.'),
      miss('The midpoint of the zone of possible agreement', 'The ZOPA midpoint depends on the buyer\'s numbers too, which are not given. $6,500 is set purely by your own alternative.', 'Your floor is fixed by your own outside option, not by averaging the two sides’ positions.'),
    ],
    lesson: 'The reservation point (or walkaway) is the least favorable deal you will accept before choosing your BATNA instead. Your BATNA sets that point; the target is the optimistic figure you aim for. Confusing the floor with the target is the fastest way to give away your bargaining range.',
    source,
    generated: true,
  },
  {
    id: 7316001,
    chapter: 'Negotiation Fundamentals',
    title: 'Improving your BATNA',
    prompt: 'Before a salary negotiation, the single most reliable way to increase your leverage is to:',
    correct: 'Develop a stronger real alternative, such as a competing offer or a credible path to one',
    wrong: [
      miss('Rehearse more confident body language and a firmer tone', 'Presentation can help at the margin, but it cannot manufacture leverage you do not have. A counterpart who senses no real alternative is not moved by posture.', 'Leverage comes from what you can actually do if the deal fails, not from how you carry yourself in the room.'),
      miss('Decide privately to ask for a much higher number', 'Raising your aspiration without improving your alternatives just makes your reservation point unreachable; it does not change your fallback if they say no.', 'A bigger ask is not the same as a better outside option; only the latter shifts real power.'),
      miss('Learn the other side’s reservation point before you speak', 'Knowing their floor helps you claim value, but it does not improve your own position if the deal collapses. Your leverage still rests on your alternatives.', 'Information about them helps you bargain; only a stronger alternative of your own raises your floor.'),
    ],
    lesson: 'Leverage in negotiation flows from the strength of your BATNA. Improving your real outside options — a competing offer, a viable alternative supplier, the ability to walk and be fine — does more to shift power than any tactic at the table. Working on your alternatives before you negotiate is often the highest-value preparation you can do.',
    source,
    generated: true,
  },
  {
    id: 7316002,
    chapter: 'Negotiation Fundamentals',
    title: 'No ZOPA',
    prompt: 'A buyer can pay at most $40,000. A seller will not part with the asset for less than $45,000, and neither number can move. What is the correct conclusion?',
    correct: 'There is no zone of possible agreement, so no mutually acceptable price exists on this issue alone',
    wrong: [
      miss('A ZOPA exists between $40,000 and $45,000', 'That gap is exactly the region where the buyer is already above their ceiling and the seller is below their floor — the opposite of a ZOPA. A ZOPA requires the buyer’s max to meet or exceed the seller’s min.', 'When the buyer’s ceiling is below the seller’s floor, the ranges do not overlap; that gap is a negative ZOPA, not the deal space.'),
      miss('They should simply split the difference at $42,500', 'Splitting the difference assumes an overlap to split. Here $42,500 is below the seller’s floor and above the buyer’s ceiling, so both sides reject it.', 'You can only split a difference that lies inside both parties’ acceptable ranges; here it lies inside neither.'),
      miss('The seller should accept $40,000 because a sale beats no sale', 'By assumption the seller’s $45,000 floor is fixed by their own alternative; selling below it makes them worse off than walking away.', 'A reservation point is defined as the point below which walking away is better; accepting beneath it is by definition a losing deal.'),
    ],
    lesson: 'A zone of possible agreement exists only when the buyer’s maximum is at or above the seller’s minimum. When the ranges do not overlap, there is no price both will accept on that issue. The way forward is to expand beyond the single issue — add value, change terms, or accept that no deal is the right outcome.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 2: Creating Value Before Claiming It
  // ---------------------------------------------------------------------------
  {
    id: 7316003,
    chapter: 'Creating Value Before Claiming It',
    title: 'Logrolling defined',
    prompt: 'Two divisions negotiating a shared budget each concede on the issues they care least about in exchange for winning on the issues they care most about. This trade across issues by relative priority is best called:',
    correct: 'Logrolling',
    wrong: [
      miss('Anchoring', 'Anchoring is setting an early reference number to shape the range. It operates within a single issue and does not involve trading across issues by priority.', 'Anchoring shapes one number; this move trades different issues against each other by how much each side values them.'),
      miss('Splitting the difference', 'Splitting the difference compromises on one dimension by meeting in the middle. Logrolling deliberately does not split each issue — it gives each side its top priority whole.', 'Meeting in the middle treats one issue; logrolling assigns whole issues to whichever side values them more.'),
      miss('Issuing an ultimatum', 'An ultimatum is a take-it-or-leave-it demand on a position. It claims value rather than creating it through priority-based trades.', 'An ultimatum closes options; logrolling opens them by exploiting differences in what each side values.'),
    ],
    lesson: 'Logrolling is an integrative tactic: each party concedes on its low-priority issues in exchange for concessions on its high-priority ones. It works precisely because the sides value the issues differently, so trading them creates joint gains that splitting every issue down the middle would destroy.',
    source,
    generated: true,
  },
  {
    id: 7316004,
    chapter: 'Creating Value Before Claiming It',
    title: 'Contingent contract',
    prompt: 'A buyer thinks a software rollout will hit 10,000 users in a year; the vendor doubts it will reach 4,000, so they deadlock on a per-seat price. Which structure best resolves a disagreement about a future fact?',
    correct: 'A contingent contract that ties price to the actual user count once it is known',
    wrong: [
      miss('Have both sides simply agree on the higher 10,000 estimate', 'Forcing agreement on a contested forecast does not resolve the underlying uncertainty; one side is being asked to bet against its own belief, so it will resist or feel cheated.', 'A contingent contract lets each side keep its belief and let reality decide, rather than forcing a fake consensus on the forecast.'),
      miss('Split the difference and price as if usage will be 7,000', 'Averaging two forecasts is arbitrary and leaves both sides exposed if reality differs; it does not exploit their genuine difference in expectations.', 'Splitting a disputed forecast satisfies no one’s belief; tie the term to the outcome instead so the difference becomes a feature.'),
      miss('Insist the vendor accept the buyer’s number because the buyer is paying', 'Payment does not make a forecast true. Imposing one side’s estimate just relocates the risk and breeds distrust if the number proves wrong.', 'Who pays does not settle a factual dispute; a contingent term resolves it by making payment follow the actual result.'),
    ],
    lesson: 'When parties disagree about a future fact, a contingent contract makes the agreement depend on how that fact turns out — for example, price scales with the actual user count. This turns a deadlock-causing difference in beliefs into a source of value: each side gets the outcome it expects if it is right, and the dispute is settled by reality rather than argument.',
    source,
    generated: true,
  },
  {
    id: 7316005,
    chapter: 'Creating Value Before Claiming It',
    title: 'Sharing information safely',
    prompt: 'In an integrative negotiation, which kind of information is generally safe to share early because it tends to expand the pie rather than weaken your position?',
    correct: 'Your relative priorities across the issues — which ones matter most to you',
    wrong: [
      miss('Your exact reservation point on price', 'Revealing your walkaway hands the counterpart the entire bargaining surplus; they can simply offer just above your floor. This is value-claiming information, not value-creating information.', 'Your floor is the one number that lets them take all the surplus; relative priorities, by contrast, enable trades.'),
      miss('The lowest figure you secretly hope they will accept', 'Disclosing your most aggressive target undercuts your own anchor and gives away your strategy without enabling any joint trade.', 'Telling them your aspiration weakens your anchor; it does not help either side find a mutually better package.'),
      miss('Nothing at all — information sharing always destroys leverage', 'Refusing to share any information forecloses the trades that integrative bargaining depends on. The skill is sharing priorities, not floors.', 'Total secrecy prevents logrolling; the art is distinguishing priority information (safe) from reservation information (risky).'),
    ],
    lesson: 'Integrative negotiation requires some information exchange to find joint gains, but not all information is equal. Sharing your relative priorities across issues lets both sides logroll — trade low-priority items for high-priority ones — while protecting your reservation point keeps your claiming leverage intact. Managing this tension is central to creating value without giving it away.',
    source,
    generated: true,
  },
  {
    id: 7316006,
    chapter: 'Creating Value Before Claiming It',
    title: 'Objective criteria',
    prompt: 'In principled negotiation, when two sides disagree on a fair price, "insisting on objective criteria" means resolving it by reference to:',
    correct: 'Independent standards such as market rate, professional appraisal, or precedent that neither side controls',
    wrong: [
      miss('Whichever side has more bargaining power getting its way', 'Letting power decide is exactly what objective criteria are meant to replace; the point is to make the outcome legitimate rather than coerced.', 'Objective criteria substitute a fair external standard for a contest of wills, not for raw leverage.'),
      miss('Splitting the difference between the two opening positions', 'A midpoint between two arbitrary openings is not an objective standard — it just rewards whoever opened more extremely. Criteria should be independent of either side’s number.', 'A standard is "objective" only if it does not depend on where either party chose to start; a midpoint does.'),
      miss('The negotiator who feels most strongly about the number prevailing', 'Intensity of feeling is not a standard of fairness; objective criteria exist precisely so outcomes do not turn on who can perform the most conviction.', 'Strength of feeling is subjective; the goal is an external benchmark both sides recognize as legitimate.'),
    ],
    lesson: 'Insisting on objective criteria is the fourth move of principled negotiation (after separating people from the problem, focusing on interests, and inventing options for mutual gain). Grounding a disagreement in independent standards — market data, expert appraisal, legal precedent, industry norms — produces outcomes both sides can accept as fair and reduces the deal to a contest of will.',
    source,
    generated: true,
  },
  {
    id: 7316007,
    chapter: 'Creating Value Before Claiming It',
    title: 'Four moves of principled negotiation',
    prompt: 'Fisher and Ury’s principled negotiation rests on four moves. Which of the following is NOT one of them?',
    correct: 'Anchor aggressively to dominate the bargaining range',
    wrong: [
      miss('Separate the people from the problem', 'This is in fact one of the four principles — handling relationship and emotion issues separately from the substantive ones. So it cannot be the exception.', 'This is a genuine principled-negotiation move; the question asks which move does NOT belong.'),
      miss('Focus on interests, not positions', 'This is one of the four principles — look behind stated demands to the underlying needs. It belongs to the framework, so it is not the odd one out.', 'This is a core principle of the Harvard model; look for the move that is a hard-bargaining tactic instead.'),
      miss('Invent options for mutual gain', 'This is one of the four principles — generate multiple options that could satisfy both sides before deciding. It belongs, so it is not the exception.', 'This is one of the four; the exception is a distributive tactic that the principled model deliberately downplays.'),
    ],
    lesson: 'Principled negotiation, from Fisher and Ury’s Getting to Yes, has four moves: separate the people from the problem; focus on interests, not positions; invent options for mutual gain; and insist on objective criteria. Aggressive anchoring is a distributive, value-claiming tactic — useful in its place, but not part of the interest-based framework.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 3: Claiming Value and Bargaining Tactics
  // ---------------------------------------------------------------------------
  {
    id: 7316008,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'Decreasing concession pattern',
    prompt: 'Over a price negotiation you move down by $5,000, then $5,000 again, then $5,000 again. What does this equal-step pattern most likely signal to the other side?',
    correct: 'That there is probably more room to give, since your steps have not shrunk',
    wrong: [
      miss('That you have reached your firm limit and will not move further', 'Equal-sized steps imply a steady supply of concessions; a firm limit is signaled by steps that get smaller, not by repeating the same move.', 'Sameness reads as "plenty left"; firmness is communicated by shrinking each step toward zero.'),
      miss('That you are negotiating in bad faith', 'A consistent concession size is not bad faith — it is simply a weak signaling pattern. Bad faith involves deception or moving goalposts, not concession sizing.', 'This is a signaling mistake, not an ethics problem; ask what the pattern communicates about remaining room.'),
      miss('That the other side should immediately accept your latest number', 'If anything, equal steps invite the other side to keep pushing, because the pattern advertises that more is available. It does not prompt acceptance.', 'Equal steps encourage further pressure rather than closure; the pattern says "keep asking," not "we’re done."'),
    ],
    lesson: 'Concession patterns are signals. A pattern of clearly decreasing concessions — large, then smaller, then smaller still — reinforces that you are approaching your reservation point and tends to produce better outcomes. Equal-sized or, worse, increasing concessions tell the counterpart that more is always available, inviting them to keep pushing.',
    source,
    generated: true,
  },
  {
    id: 7316009,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'The winner’s curse',
    prompt: 'You make what you think is an aggressive lowball offer to buy a small business, expecting weeks of haggling. The seller accepts instantly. In negotiation, this immediate acceptance is a classic warning sign of:',
    correct: 'The winner’s curse — the offer may have been too generous given information you did not have',
    wrong: [
      miss('A strong BATNA on your side that you should now exploit', 'Instant acceptance says nothing about your alternatives; it says something worrying about the value of what you just bought. It is a signal to reassess, not to press.', 'Quick acceptance is information about the deal’s value, not about your outside options; treat it as a caution flag.'),
      miss('Successful anchoring that pulled the price your way', 'You did not anchor low and then negotiate up; the other side took your number whole, which suggests your "low" offer was still above what they would have taken.', 'If your aggressive anchor is snapped up untouched, the anchor may not have been aggressive at all.'),
      miss('Proof that your reservation point was set correctly', 'Your reservation point is about the worst you would accept; it has nothing to do with how fast they said yes. The speed of acceptance is the relevant signal here.', 'Acceptance speed is unrelated to your own walkaway; focus on what their eagerness reveals about hidden value.'),
    ],
    lesson: 'The winner’s curse describes the unease of getting exactly what you asked for and realizing the counterpart’s quick yes reveals bad news about what you bought. In bilateral negotiation with asymmetric information, an instantly accepted offer often means you bid above what the other side would have taken. Build in diligence and contingencies rather than celebrating a fast close.',
    source,
    generated: true,
  },
  {
    id: 7316010,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'MESO',
    prompt: 'A negotiator presents three different offers at once — all equally acceptable to her, but structured differently across price, term, and support. This technique is called a MESO. Its main advantage is that it:',
    correct: 'Reveals the counterpart’s priorities from which package they prefer, while still anchoring firmly',
    wrong: [
      miss('Lets her concede on all three dimensions at the same time', 'A MESO is not three concessions; all three packages are equal in value to her, so she gives nothing away by offering them. It is a probing and anchoring move.', 'The offers are equivalent to the offerer, so no value is conceded; the gain is the information in their choice.'),
      miss('Guarantees the counterpart will accept at least one of the three', 'There is no guarantee of acceptance; the counterpart can reject all three. The benefit is the information in which one they lean toward.', 'MESO does not force a yes; it surfaces preferences and signals flexibility.'),
      miss('Hides her real position by overwhelming the other side with choices', 'MESO is not obfuscation. Research shows it reads as a sincere, flexible attempt to reach agreement, and it strengthens rather than disguises the anchor.', 'The point is transparency about flexibility, not confusion; the offers honestly reflect equally good outcomes for her.'),
    ],
    lesson: 'A multiple equivalent simultaneous offer (MESO) is a set of offers that are equal in value to the proposer but differ in structure. Because all are acceptable to her, she concedes nothing by presenting them; the counterpart’s preference among them reveals their priorities, helping create value. MESOs also anchor strongly and signal good-faith flexibility.',
    source,
    generated: true,
  },
  {
    id: 7316011,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'The negotiator’s dilemma',
    prompt: 'The "negotiator’s dilemma" describes the core tension that:',
    correct: 'Tactics that help you claim a bigger share can undermine the cooperation needed to create value, and vice versa',
    wrong: [
      miss('You must choose between negotiating and walking away to your BATNA', 'That is the accept-or-walk decision, governed by your reservation point. The negotiator’s dilemma is about the clash between cooperative and competitive moves within a deal.', 'This dilemma lives inside the negotiation, between creating and claiming — not at the door deciding whether to deal at all.'),
      miss('You can never know the other side’s true reservation point', 'Information asymmetry is a real challenge, but the dilemma named by Lax and Sebenius is specifically the pull between value creation and value claiming.', 'The dilemma is about a strategic tension, not merely about missing information; think cooperate versus compete.'),
      miss('Acting ethically always costs you money at the table', 'Ethics-versus-profit is a different problem. The negotiator’s dilemma is about how claiming behavior can shrink the very pie that cooperation would have grown.', 'Reframe around creating versus claiming value; the tension is strategic, not primarily moral.'),
    ],
    lesson: 'Lax and Sebenius’s negotiator’s dilemma captures why negotiation is hard: claiming value (aggressive anchors, leverage, holding information close) can poison the cooperation that creating value (sharing priorities, trading, expanding the pie) requires. Skilled negotiators manage the tension deliberately rather than collapsing into pure competition or pure accommodation.',
    source,
    generated: true,
  },
  {
    id: 7316012,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'Anchoring origin',
    prompt: 'The anchoring effect that makes an early number disproportionately shape later judgments was first documented in the 1970s by which researchers?',
    correct: 'Amos Tversky and Daniel Kahneman, as part of their work on judgment heuristics',
    wrong: [
      miss('Roger Fisher and William Ury in Getting to Yes', 'Fisher and Ury developed principled negotiation and coined BATNA, but the anchoring-and-adjustment heuristic comes from cognitive psychology, not their work.', 'Fisher and Ury gave us BATNA and the four moves; anchoring as a cognitive bias has a different origin.'),
      miss('David Lax and James Sebenius', 'Lax and Sebenius described the negotiator’s dilemma and value creation/claiming. The anchoring heuristic predates and sits outside their framework.', 'Lax and Sebenius are the create-versus-claim thinkers; the anchoring bias was identified by experimental psychologists.'),
      miss('Howard Raiffa', 'Raiffa advanced the analytical and decision-theoretic study of negotiation, including post-settlement settlements, but anchoring-and-adjustment is attributed elsewhere.', 'Raiffa is associated with decision analysis and post-settlement settlements, not with naming the anchoring heuristic.'),
    ],
    lesson: 'The anchoring-and-adjustment heuristic — the tendency to rely heavily on the first number introduced, even an arbitrary one, and adjust insufficiently from it — was identified by Amos Tversky and Daniel Kahneman in 1974. In negotiation, this is why a well-supported first offer can pull the final outcome toward itself.',
    source,
    generated: true,
  },
  {
    id: 7316013,
    chapter: 'Claiming Value and Bargaining Tactics',
    title: 'Using silence',
    prompt: 'After you state a firm, well-justified number, the other side goes quiet. The most disciplined move is usually to:',
    correct: 'Let the silence sit and wait for them to respond rather than filling it',
    wrong: [
      miss('Immediately offer a small concession to break the tension', 'Filling silence with a concession trains the counterpart that discomfort produces movement, and you have just negotiated against yourself before they replied.', 'Conceding into silence means you bid against yourself; the cost of the pause is theirs to bear, not yours.'),
      miss('Restate the number with more justification to fill the gap', 'Piling on more reasons can read as anxiety and weaken a clean offer; over-justifying an anchor invites the counterpart to attack the weakest reason.', 'A clean number does not need reinforcement; talking past it dilutes the anchor and signals nervousness.'),
      miss('Withdraw the number and ask what they would prefer', 'Pulling your offer at the first sign of silence discards your anchor entirely and hands the framing back to them for no reason.', 'Silence is not rejection; abandoning your anchor over a pause throws away the position you just established.'),
    ],
    lesson: 'Silence after a firm offer is uncomfortable, and negotiators who cannot tolerate it tend to concede or over-explain — effectively bargaining against themselves. Letting the pause sit puts the burden of the next move on the counterpart and protects the value of a clean, well-justified anchor.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 4: Communication, Emotion, and Trust
  // ---------------------------------------------------------------------------
  {
    id: 7316014,
    chapter: 'Communication, Emotion, and Trust',
    title: 'Labeling an emotion',
    prompt: 'A counterpart is visibly frustrated and says the timeline is "completely unrealistic." Using the labeling technique, your strongest opening response is:',
    correct: '"It sounds like the timeline feels rushed and is putting your team under real pressure."',
    wrong: [
      miss('"You’re overreacting — the timeline is perfectly standard for this kind of work."', 'Dismissing the feeling escalates it and signals you are not listening; labeling acknowledges the emotion to defuse it, not argue it away.', 'A label names the emotion to lower the heat; contradicting the feeling does the opposite.'),
      miss('"Fine, I’ll extend the timeline by two weeks to keep you happy."', 'Conceding substance to make an emotion stop is capitulation, not tactical empathy. Labeling addresses the feeling without giving away the deal point.', 'Naming a feeling is meant to build trust, not to trade away a term; you can acknowledge frustration and still hold the line.'),
      miss('"Let’s just move on and not dwell on how you feel about it."', 'Skipping past the emotion leaves it unaddressed and festering; an unspoken frustration usually resurfaces as a later blocker.', 'Ignoring the emotion does not make it go away; labeling surfaces it so the substantive conversation can proceed.'),
    ],
    lesson: 'Labeling means naming the other side’s apparent emotion — "it sounds like…", "it seems like…" — to show you understand it. This is tactical empathy: acknowledging a feeling builds trust and lowers the temperature without conceding any substance. Crucially, demonstrating that you understand is not the same as agreeing or giving in.',
    source,
    generated: true,
  },
  {
    id: 7316015,
    chapter: 'Communication, Emotion, and Trust',
    title: 'Calibrated questions',
    prompt: 'A "calibrated question" in negotiation is best described as an open-ended "how" or "what" question whose purpose is to:',
    correct: 'Invite the counterpart to solve part of the problem and reveal constraints, while giving them a feeling of control',
    wrong: [
      miss('Pin the counterpart down to a yes-or-no answer quickly', 'Calibrated questions are deliberately open-ended; yes/no questions shut down information and put the counterpart on the defensive, which is the opposite goal.', 'These questions open the conversation up; "how" and "what" cannot be answered with a one-word yes or no.'),
      miss('Subtly accuse the counterpart of negotiating in bad faith', 'That describes confrontation, not a calibrated question. Calibrated questions lower defensiveness; an accusation raises it.', 'A calibrated question recruits the other side as a problem-solver; it is not a disguised attack.'),
      miss('State your demand in the form of a question to seem polite', 'A demand dressed as a question ("Will you just sign?") is not calibrated; calibrated questions genuinely seek the other side’s input on how to proceed.', 'The aim is real inquiry that surfaces constraints, not a politely phrased ultimatum.'),
    ],
    lesson: 'Calibrated questions are open-ended queries — typically "how" or "what" — that have no fixed answer and ask the counterpart to think through the problem with you. "How am I supposed to do that?" or "What would it take to make this work for your team?" shift problem-solving onto them, surface real constraints, and give them a sense of control while you keep yours.',
    source,
    generated: true,
  },
  {
    id: 7316016,
    chapter: 'Communication, Emotion, and Trust',
    title: 'Accusation audit',
    prompt: 'Before delivering bad news in a renewal talk, you say up front: "You’re probably going to think this price increase is unfair, and that we’re taking your loyalty for granted." This pre-emptive naming of their likely objections is called:',
    correct: 'An accusation audit, which defuses negative reactions by voicing them first',
    wrong: [
      miss('A nibble, because you are asking for a little more', 'A nibble is a small extra demand made just before closing; here you are not asking for anything, you are pre-empting the other side’s objections to bad news.', 'A nibble extracts a last concession; this move instead disarms the objections you expect to hear.'),
      miss('Logrolling, because you are trading on emotions', 'Logrolling is trading across substantive issues by priority. Naming likely accusations is an emotional/communication move, not an issue trade.', 'Logrolling moves substantive issues around; this technique manages the counterpart’s anticipated reaction.'),
      miss('Anchoring, because you are setting the tone for the price', 'Anchoring is introducing a reference number to shape the range. The accusation audit is about pre-empting objections, and it does not set a number.', 'No number is being planted here; the move addresses expected complaints, not the bargaining range.'),
    ],
    lesson: 'An accusation audit means listing the negative things the other side might be about to think or say — and saying them yourself first. By voicing "you’ll think this is unfair" before they do, you take the sting out of their objection and make space for a calmer conversation. It is a trust-and-tension tool, distinct from substantive tactics like logrolling or anchoring.',
    source,
    generated: true,
  },
  {
    id: 7316017,
    chapter: 'Communication, Emotion, and Trust',
    title: 'Separate people from problem',
    prompt: 'Halfway through a tense supplier dispute, the conversation turns into personal blame about who caused the delay. Applying "separate the people from the problem" means you should:',
    correct: 'Treat the relationship friction and the substantive delay issue as two distinct problems and address each on its own terms',
    wrong: [
      miss('Concede the substantive point so the personal tension goes away', 'Buying peace by giving up substance conflates the two problems — it lets a relationship issue cost you a deal point. The principle is to handle them separately, not to trade one for the other.', 'Separating them means you can repair the relationship without surrendering substance; collapsing them does the opposite.'),
      miss('Win the personal argument first, then return to the substance', '"Winning" the personal fight further entangles people and problem and usually deepens the rift, making the substantive issue harder to solve.', 'The goal is to de-escalate the personal layer, not to defeat the person; scoring points fuses the two problems tighter.'),
      miss('Treat the relationship as irrelevant and push only on the facts', 'Pretending the emotional rift does not exist leaves it to sabotage the substantive work; people problems must be addressed, just separately.', 'Separating is not ignoring; the relationship issue still needs handling, just on its own track.'),
    ],
    lesson: 'Separating the people from the problem — the first move of principled negotiation — means dealing with relationship issues (perception, emotion, communication) independently from substantive issues. You can be soft on the people and hard on the problem: repair trust and lower defensiveness while still pressing firmly on the substance, instead of trading one for the other.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 5: Power, Ethics, and Difficult Tactics
  // ---------------------------------------------------------------------------
  {
    id: 7316018,
    chapter: 'Power, Ethics, and Difficult Tactics',
    title: 'The nibble',
    prompt: 'You have verbally agreed terms and are about to sign when the buyer adds, "And of course you’ll throw in free onboarding, right?" This last-second extra ask is the classic tactic known as:',
    correct: 'The nibble — a small additional demand made once you feel the deal is essentially done',
    wrong: [
      miss('An accusation audit', 'An accusation audit pre-empts the other side’s objections by voicing them first. This is the reverse — a fresh demand for more value at the finish line.', 'An accusation audit defuses objections; this move extracts an extra concession just before signing.'),
      miss('A contingent contract', 'A contingent contract ties terms to a future uncertain fact. A nibble is not conditional on anything — it is simply asking for one more thing at the close.', 'No future fact is involved; the nibble is just a last-minute add-on to a deal you thought was settled.'),
      miss('A MESO', 'A MESO is presenting several equivalent offers at once to surface preferences. The nibble is a single extra ask appended after agreement, not a set of upfront options.', 'A MESO comes early as multiple offers; the nibble comes late as one more demand.'),
    ],
    lesson: 'The nibble is a small extra demand made just as the deal feels closed, exploiting your reluctance to reopen everything over a minor point. The disciplined responses are to make any concession conditional ("happy to, if you can move the start date") or to flag it explicitly, rather than caving — because giving in teaches the counterpart to keep nibbling.',
    source,
    generated: true,
  },
  {
    id: 7316019,
    chapter: 'Power, Ethics, and Difficult Tactics',
    title: 'Testing a deadline',
    prompt: 'A counterpart insists you must sign "by end of day or the offer is gone." Before reacting, the most useful first step is to:',
    correct: 'Probe whether the deadline is real by asking what drives it and what genuinely happens after it passes',
    wrong: [
      miss('Sign immediately to avoid losing the opportunity', 'Signing under an untested deadline is exactly what the tactic is designed to produce; pressure is not evidence that the deadline is real.', 'A deadline’s job is to compress your thinking; comply only after confirming the consequence is genuine.'),
      miss('Walk away at once to call their bluff', 'Walking on principle without information risks killing a real deal over a deadline that might have been negotiable. Probe first, then decide.', 'Reflexively leaving is as untested as reflexively signing; gather the facts behind the deadline before acting.'),
      miss('Set an even tighter counter-deadline to seize the initiative', 'Escalating with a competing artificial deadline turns a solvable timing question into a standoff and damages the relationship without testing reality.', 'Matching pressure with pressure obscures the real question: is the deadline genuine, and what actually happens if it passes?'),
    ],
    lesson: 'False or arbitrary deadlines are a common hard-bargaining tactic meant to rush you past careful thinking. Many "hard" deadlines are flexible once tested. Asking what drives the date and what truly happens if it slips separates a real constraint from manufactured pressure, so you respond to facts rather than to the clock.',
    source,
    generated: true,
  },
  {
    id: 7316020,
    chapter: 'Power, Ethics, and Difficult Tactics',
    title: 'Bluffing vs misrepresentation',
    prompt: 'In most professional and legal norms, which statement crosses the line from hard bargaining into impermissible misrepresentation?',
    correct: 'Stating a specific false fact, such as "we already have a signed competing offer at $80,000," when none exists',
    wrong: [
      miss('Declining to reveal your reservation point when asked directly', 'You are not obliged to disclose your walkaway; keeping it private is standard, legitimate bargaining, not deception.', 'Withholding your own floor is permitted; the issue is asserting a concrete falsehood about facts.'),
      miss('Expressing strong enthusiasm about your own product’s value', 'Puffery and optimistic opinion about value are generally tolerated; misrepresentation involves false statements of material fact, not enthusiasm.', 'Opinion and puffery are not material fact; look for a specific fabricated fact instead.'),
      miss('Saying the price "is going to be tough for us to accept" when you could accept it', 'Vague posturing about how hard a price is to swallow is ordinary bargaining bluff, not a false statement of fact about something verifiable.', 'Soft posturing differs from inventing a concrete, checkable fact that is simply untrue.'),
    ],
    lesson: 'There is a line between hard bargaining and bad faith. Withholding your reservation point, puffery about value, and vague posturing are generally acceptable. Asserting a specific, material falsehood — a fictitious competing offer, fabricated costs — is misrepresentation, which damages reputation and can be legally actionable. Knowing where the line sits protects both your integrity and your interests.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 6: Internal and Multi-Party Negotiation
  // ---------------------------------------------------------------------------
  {
    id: 7316021,
    chapter: 'Internal and Multi-Party Negotiation',
    title: 'Principal-agent gap',
    prompt: 'A sales rep negotiating on behalf of her company offers a discount to close her quarterly quota, even though it hurts the company’s margin. This misalignment between the negotiator’s incentives and the organization’s interests is an example of:',
    correct: 'The principal-agent problem, where the agent’s goals diverge from the principal’s',
    wrong: [
      miss('A weak BATNA on the company’s side', 'The issue is not the strength of the company’s alternatives but that the rep is optimizing her own quota over the company’s margin. That is an incentive misalignment, not a fallback problem.', 'Look at whose incentives are driving the discount, not at the quality of the company’s outside options.'),
      miss('A logrolling trade between the rep and the customer', 'Logrolling is trading issues by priority to create joint value. Here the rep is simply giving away company value to hit a personal target — no priority trade is occurring.', 'No issues are being traded by relative priority; the problem is the agent’s divergent incentive.'),
      miss('A failure to anchor the opening price high enough', 'Even a high anchor would not fix the underlying issue: the rep is motivated to discount for her own quota regardless of where the price started.', 'The anchor is beside the point; the root cause is that the agent’s reward differs from the principal’s interest.'),
    ],
    lesson: 'The principal-agent problem arises whenever someone negotiates on another’s behalf and their incentives diverge — a rep chasing quota, a broker earning commission, a lawyer billing hours. Organizations manage it by aligning incentives, setting clear mandates and authority limits, and reviewing the deal against the principal’s actual interests, not just whether an agreement was reached.',
    source,
    generated: true,
  },
  {
    id: 7316022,
    chapter: 'Internal and Multi-Party Negotiation',
    title: 'Negotiate internally first',
    prompt: 'A team is about to open a high-stakes external partnership negotiation. Why is securing an internal mandate before the first external meeting usually critical?',
    correct: 'Without an agreed internal mandate, the team may commit to terms it cannot deliver or be undercut by colleagues later',
    wrong: [
      miss('Because internal alignment lets the team anchor at a higher external number', 'A mandate is about authority and deliverability, not about the size of the opening anchor; you can anchor high with or without internal sign-off, but you cannot honor a deal you have no authority to make.', 'The point is what the team is authorized to promise, not how aggressive the first number is.'),
      miss('Because external counterparts are not allowed to negotiate until you have', 'There is no such rule; the counterpart’s readiness is independent of your internal process. The reason is your own ability to commit credibly.', 'The constraint is internal authority and deliverability, not any permission from the other side.'),
      miss('Because internal negotiation always takes longer than external negotiation', 'Duration is not the issue and the claim is not generally true; the risk is making external commitments your own organization will not back.', 'Time is not the concern; the concern is committing to something you cannot actually deliver internally.'),
    ],
    lesson: 'Negotiators face two tables at once: the external one and the internal one. Securing a mandate — agreed objectives, authority limits, and a stakeholder map — before going external prevents two failures: promising terms the organization will not honor, and having an internal veto holder undo the deal at implementation. Align inside before you bargain outside.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 7: Closing, Documentation, and Implementation
  // ---------------------------------------------------------------------------
  {
    id: 7316023,
    chapter: 'Closing, Documentation, and Implementation',
    title: 'Post-settlement settlement',
    prompt: 'Two sides reach an agreement both can accept. Before signing, one says, "Now that we have a deal we can live with, is there any way we could make it better for both of us?" This move is known as:',
    correct: 'A post-settlement settlement — searching for joint improvements after a tentative deal but before committing',
    wrong: [
      miss('A nibble for one more concession', 'A nibble seeks extra value for one side only at the close. A post-settlement settlement looks for mutual improvements with the existing deal as a safe fallback.', 'A nibble is one-sided and grabs value; this move openly seeks gains for both, keeping the agreed deal as the floor.'),
      miss('Reopening the negotiation in bad faith', 'It is the opposite of bad faith: the agreed deal stays on the table as a guaranteed fallback, and the search is explicitly for changes that help both parties.', 'Nothing already agreed is being threatened; the existing deal is the safety net while both look for a Pareto improvement.'),
      miss('Setting an anchor for the next negotiation', 'Anchoring sets a reference number to shape a bargaining range. A post-settlement settlement is about improving the current deal, not planting a number for a future one.', 'This is about extracting more joint value from the deal you just made, not positioning for a separate future talk.'),
    ],
    lesson: 'A post-settlement settlement, popularized by Howard Raiffa, means that once you have an acceptable agreement, you ask whether a different arrangement could make both sides better off — keeping the original deal as a guaranteed fallback. Because no one risks losing the agreed outcome, it is a low-risk way to capture value left on the table before the ink dries.',
    source,
    generated: true,
  },
])
