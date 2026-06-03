import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const nationalSecurityPolicyRoadmapGems: Question[] = [
  // ---------------------------------------------------------------------------
  // Chapter: Intelligence and Evidence
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10058000,
    'Career Skills',
    'Intelligence and Evidence',
    'Two Knobs, Not One',
    'An analyst writes: "We assess with high confidence that an attack is unlikely in the next 30 days." A reviewer flags the sentence as malformed under ICD 203 — not because the judgment is wrong, but because it fuses two things that are supposed to move independently. What two distinct ideas has the sentence collapsed into one?',
    'The probability of the event ("unlikely," a word of estimative probability) and the analyst\'s confidence in the underlying evidence ("high confidence") — two orthogonal dimensions that ICD 203 forbids combining in a single sentence because they answer different questions.',
    [
      [
        '"High confidence" and "unlikely" are simply contradictory — you cannot be confident that something is unlikely',
        'Treats the two as the same scale pointing opposite directions, when they are different scales entirely',
        'You can be highly confident in an unlikely call: rich, corroborated evidence can strongly support the judgment that an event probably will not happen',
      ],
      [
        'It mixes a quantitative percentage with a qualitative word, which ICD 203 bans',
        'Invents a rule about numbers versus words; ICD 203 actually pairs each likelihood word with a percentage band',
        'The defect is conflating likelihood with evidentiary confidence, not mixing formats — both standardized words are perfectly allowed on their own',
      ],
      [
        'It states a probability without naming the source, violating sourcing standards',
        'Sourcing is a separate ICD 203 requirement; the flagged flaw here is the likelihood-confidence fusion, not a missing citation',
        'Even with a perfect source line, welding "high confidence" to "unlikely" in one sentence would still be malformed',
      ],
    ],
    'Lesson: Intelligence carries two independent signals that consumers constantly merge. Likelihood (a word of estimative probability) answers "how probable is the event?"; confidence answers "how good is the evidence behind that estimate?" They are orthogonal — you can be highly confident an event is unlikely, or have only low confidence in a "likely" call resting on thin sourcing. ICD 203 bars putting both in one sentence precisely because a reader who sees them fused will silently average them into a single vague feeling of certainty, which is exactly the misread that gets policymakers to overreach or underreact.',
    'Floe generated',
    true,
    'Ask: is this sentence about how probable the event is, or about how good the evidence is? If it tries to say both at once, it is broken.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058001,
    'Career Skills',
    'Intelligence and Evidence',
    'When Absence of Proof Becomes Proof',
    'A desk officer reports: "We have found no evidence of a covert weapons program. Therefore we judge with high confidence that no program exists." A senior analyst calls this reasoning circular and dangerous. Where exactly does the logic fail?',
    'It treats the absence of evidence as if it were evidence of absence — but finding nothing can equally mean the program is well hidden, or that collection simply cannot see it; the "high confidence" rests on a gap, not on a finding.',
    [
      [
        'The error is using "high confidence" when the correct word is "likely"',
        'Reframes a logic failure as a vocabulary slip; swapping the word would dress up the same broken inference',
        'No estimative word can rescue a judgment built on a collection gap; the problem is the reasoning, not the label',
      ],
      [
        'The conclusion is fine, but the report should have cited which collection systems looked',
        'Adding sources to a flawed inference makes it look sturdier without fixing it',
        'Even a full list of systems would not justify "high confidence" from a null result; it would only clarify how blind the search was',
      ],
      [
        'The officer should have hedged with "we cannot rule out a program," which means the same thing',
        'These do not mean the same thing — one asserts a confident negative, the other flags an unresolved possibility',
        'The repair is to treat silence as a gap to be characterized, not to flip to an equally unsupported phrasing',
      ],
    ],
    'Lesson: "We found nothing, so there is nothing" is the most seductive fallacy in intelligence, because doing diligent work feels like it should earn a confident answer. But absence of evidence is not evidence of absence — a clean search is consistent with both "no program" and "a program we cannot see." The deep move is to convert the silence into an explicit information gap with a stated cause (denied area, no access, never tasked), so the consumer can weigh the not-knowing instead of mistaking it for knowing. Confidence must attach to what the evidence shows, never to what it failed to show.',
    'Floe generated',
    true,
    'A search that turns up nothing tells you about your collection as much as about the world. Ask what a hidden program would look like to you.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058002,
    'Career Skills',
    'Intelligence and Evidence',
    'The Adversary Who Thinks Like You',
    'Planners conclude an adversary will not launch a costly winter offensive "because no rational actor would accept those losses for so little ground." The offensive comes anyway. An after-action review names the analytic sin that produced the miss. What was it?',
    'Mirror-imaging — assuming the adversary shares your own values, cost tolerance, and definition of "rational," so their decision was scored against your preferences rather than theirs.',
    [
      [
        'Politicization — the assessment was bent to please policymakers',
        'Names a different failure; nothing here suggests pressure to reach a desired answer',
        'The miss came from importing the analyst\'s own logic, not from external pressure to slant the call',
      ],
      [
        'Groupthink — the team suppressed dissent to preserve consensus',
        'Plausible-sounding, but the described error is about whose values were used, not about how the team handled disagreement',
        'Even a team with vigorous debate could all mirror-image together; the root flaw is the assumed shared rationality',
      ],
      [
        'Anchoring — the team clung to an initial estimate despite new data',
        'Anchoring is about failing to update; here the team never had the right model of the adversary to begin with',
        'The problem was not stale data but a foreign actor scored on the analyst\'s own cost-benefit scale',
      ],
    ],
    'Lesson: Mirror-imaging is assuming the other side weighs costs, risks, and "rationality" the way you do — so "no rational actor would do X" quietly means "I would not do X." It is dangerous precisely because it disguises itself as hard-nosed realism. An adversary may value regime survival over soldiers\' lives, prestige over territory, or a long horizon over your quarterly one. The discipline is to reconstruct the decision from inside their objectives and constraints, then ask what looks rational there — because deterrence and warning both collapse the moment you defend against the enemy you would be instead of the one you face.',
    'Floe generated',
    true,
    'When you hear "no rational actor would," ask: rational by whose values? Replace "I" with the adversary and re-run the calculus.',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Deterrence, Coercion, and Escalation
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10058003,
    'Career Skills',
    'Deterrence, Coercion, and Escalation',
    'The Asymmetry of Asking Versus Forbidding',
    'Two demands sit on the table. Demand A: "Do not move troops across that border." Demand B: "Withdraw the troops you already moved across that border." Strategists warn that B is far harder to make stick than A, even backed by identical threats. Why is compelling an adversary to undo an act structurally tougher than deterring the act in the first place?',
    'Deterrence only needs the adversary to keep doing nothing, which costs them no visible face and has no deadline; compellence demands a visible, dated reversal that publicly admits defeat, so the adversary must swallow humiliation and you must prove you will keep punishing until they move.',
    [
      [
        'Because withdrawal requires more military force than blocking an advance does',
        'Frames it as a force-ratio problem, but the difficulty is political and psychological, not a matter of tonnage',
        'B is harder even with overwhelming force, because the obstacle is the adversary\'s need to climb down visibly, not the physics of the move',
      ],
      [
        'Because B is illegal under international law while A is permitted',
        'Invents a legal asymmetry; both demands can rest on the same legal footing',
        'The asymmetry is inherent to compellence versus deterrence, not a quirk of which body of law applies',
      ],
      [
        'Because deterrence threats are always more credible than compellence threats by nature',
        'States the conclusion as if it were the cause; credibility differs because of the deadline and face problems, which is what the question asks you to identify',
        'It is not that deterrent threats are magically believed — it is that "keep doing nothing" demands no costly reversal, so the threat has less work to do',
      ],
    ],
    'Lesson: Schelling\'s great insight is that deterrence and compellence are not the same coin. Deterrence asks the adversary to keep doing nothing — passive, dateless, and face-saving, so the threat just sits there. Compellence asks them to act: to reverse, withdraw, or undo, on a clock, in plain view, which means publicly accepting defeat. That demand for a visible climb-down is why compellence routinely fails where the identical threat would have deterred — the adversary can absorb "I never started" far more easily than "I backed down." Always know which one you are attempting, because they have different costs of success.',
    'Floe generated',
    true,
    'Ask whether you want the adversary to keep doing nothing, or to visibly undo something they already did. The second forces them to lose face on a deadline.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058004,
    'Career Skills',
    'Deterrence, Coercion, and Escalation',
    'Two Ways to Say No',
    'A small state facing a larger neighbor can pursue two deterrence postures. Posture 1: field forces that can physically stop an invasion from succeeding on the ground. Posture 2: promise devastating retaliation that makes any invasion not worth the cost. A strategist notes that Posture 1 tends to be the more believable of the two. Why is denial usually more credible than punishment?',
    'Denial works by making the adversary doubt they can win, and a defender visibly fielding blocking forces obviously will use them if attacked; punishment works only if the adversary believes you will actually carry out costly, possibly self-endangering retaliation after the fact — a promise that is easy to doubt.',
    [
      [
        'Because denial is cheaper to build than a retaliatory capability',
        'Cost is not the issue; denial forces are often more expensive than a punishment threat',
        'Even when denial costs more, it is more credible because using it is automatic and self-defensive, not a separate costly choice made after you have already lost',
      ],
      [
        'Because punishment is prohibited by the laws of armed conflict',
        'Conflates credibility with legality; proportionate retaliation is not inherently unlawful',
        'The credibility gap comes from doubt that you will follow through, not from any legal bar on retaliation',
      ],
      [
        'Because denial deters intent while punishment only deters capability',
        'Reverses the logic and misuses the terms; both postures aim at the adversary\'s decision, not at separate factors',
        'Denial attacks the expected benefit of attacking; punishment attacks the expected cost — and the cost threat is the one the adversary can more easily bet you will not impose',
      ],
    ],
    'Lesson: Deterrence by denial says "you will fail"; deterrence by punishment says "you will pay." The credibility gap between them is the heart of the matter. Denial is self-enforcing — forces postured to stop an attack obviously will be used the instant one comes, so the adversary need not gamble on your resolve. Punishment requires the adversary to believe you will, after already suffering the attack, deliberately choose to inflict pain that may invite retaliation against you — a promise every adversary is tempted to call a bluff. This is why credible deterrence so often means convincing the other side it simply cannot win, rather than merely threatening to make winning expensive.',
    'Floe generated',
    true,
    'One posture says "you cannot win," the other says "you will pay later." Ask which threat the adversary has to trust your future resolve to believe.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058005,
    'Career Skills',
    'Deterrence, Coercion, and Escalation',
    'The Shield That Reads as a Sword',
    'A state, feeling threatened, builds up purely defensive forces and missile defenses to feel safer. Its neighbor responds by expanding its own arsenal, and both end up less secure than before. This recurring trap has a name, and it captures something unsettling about defensive moves. What is the dynamic, and what makes it so hard to escape?',
    'The security dilemma — measures one state takes to feel more secure look threatening to another, who arms in response, leaving both less secure; it is hard to escape because even genuinely defensive intentions cannot be reliably signaled, so the other side must hedge against capability, not stated intent.',
    [
      [
        'The arms race fallacy — states irrationally match each other\'s spending out of pride',
        'Attributes the spiral to irrationality, but each state\'s response can be perfectly rational given uncertainty',
        'The dilemma bites even between two rational, status-quo states, precisely because neither can verify the other is benign',
      ],
      [
        'Brinkmanship — deliberately courting disaster to force the other side to back down',
        'Describes an intentional risk-taking tactic, not the unintended spiral of mutual defensive buildups',
        'No one here is courting disaster on purpose; the tragedy is that defensive, fear-driven moves produce the threat they feared',
      ],
      [
        'Extended deterrence failure — an ally doubts the protection promised to it',
        'Names a different problem about the credibility of guarantees to third parties',
        'The trap here is bilateral and arises from defensive moves being misread, not from doubts about a protective umbrella',
      ],
    ],
    'Lesson: The security dilemma is the quiet engine behind many spirals: actions a state takes purely to defend itself are indistinguishable, from the outside, from preparations to attack — so a neighbor hedges, and the first state hedges back. Its depth lies in the signaling problem: intentions live in your head and can change tomorrow, but capabilities are visible and must be planned against today, so even sincerely defensive states are forced to react to each other\'s hardware. This is why a "reassuring" buildup can be the most destabilizing move of all, and why arms control and transparency exist — to let states show intent that words alone cannot prove.',
    'Floe generated',
    true,
    'Ask how your defensive move looks from the other capital. If they cannot tell your shield from a sword, they will arm against the sword.',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Instruments of National Power
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10058006,
    'Career Skills',
    'Instruments of National Power',
    'The Company That Is Blocked But Not Listed',
    'A US bank is about to wire funds to Trading Co., a firm that does not appear anywhere on OFAC\'s SDN list. A compliance officer halts the transfer anyway, citing the 50 Percent Rule. How can a company that is not on the sanctions list still be off-limits to deal with?',
    'Under OFAC\'s 50 Percent Rule, any entity owned 50 percent or more by one or more blocked persons is itself blocked automatically — even though OFAC never names it on the SDN list — so Trading Co. inherits the sanctions through its ownership.',
    [
      [
        'It cannot be — if a firm is not on the SDN list, transacting with it is permitted',
        'States the exact misconception the rule exists to defeat; the SDN list is not exhaustive of blocked parties',
        'Ownership by blocked persons blocks the entity by operation of the rule, with no separate listing required',
      ],
      [
        'Only if OFAC has issued a specific advisory naming Trading Co. as a front company',
        'Invents a naming requirement; the rule is self-executing based on ownership, not on any advisory',
        'No advisory is needed — the obligation to look through ownership falls on the transacting party, not on OFAC to publish each subsidiary',
      ],
      [
        'Only if a single blocked person owns the whole company outright',
        'Sets the bar too high and misses the aggregation principle',
        'The rule triggers at 50 percent in the aggregate across multiple blocked owners, not only at sole ownership',
      ],
    ],
    'Lesson: The 50 Percent Rule is where sanctions stop being a checklist and start demanding investigation. An entity owned 50 percent or more by blocked persons is itself blocked, automatically and invisibly — OFAC does not, and cannot, list every such subsidiary. The unsettling implication is that the SDN list is a floor, not a ceiling: "it is not on the list" is never a safe answer. The burden of tracing ownership sits entirely on the transacting party, which is why "assume an entity is clean because it is not literally listed" is a classic and costly failure mode for anyone wielding the economic instrument.',
    'Floe generated',
    true,
    'Treat the SDN list as a floor, not a ceiling. Ask who owns the company, not just whether the company is named.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058007,
    'Career Skills',
    'Instruments of National Power',
    'Two Minorities Make a Majority',
    'Blocked Person X owns 30 percent of Acme Corp. A different sanctioned individual, Blocked Person Y — designated under an entirely separate sanctions program — owns another 25 percent. Neither is anywhere near a majority alone, and Acme is not on the SDN list. Is Acme blocked?',
    'Yes — OFAC aggregates the ownership of all blocked persons, even across different sanctions programs, so 30 plus 25 equals 55 percent and Acme is blocked, despite no single blocked owner reaching 50 percent.',
    [
      [
        'No — neither owner holds 50 percent, so the 50 Percent Rule is not triggered',
        'Misses aggregation; the rule sums the stakes of all blocked persons rather than testing each one alone',
        'Combined blocked ownership of 55 percent crosses the threshold even though each individual stake is a minority',
      ],
      [
        'No — X and Y are designated under different programs, so their stakes cannot be combined',
        'Believes program boundaries wall off the math, but OFAC explicitly aggregates across distinct programs',
        'The rule looks at total ownership by blocked persons regardless of which program designated each one',
      ],
      [
        'Only the 30 percent stake held by X is blocked; the rest of Acme is freely transactable',
        'Treats the rule as blocking a fraction of the entity, when crossing 50 percent in aggregate blocks the whole entity',
        'Once aggregate blocked ownership hits 50 percent, the entire entity and all its property are blocked, not just a slice',
      ],
    ],
    'Lesson: Aggregation is the teeth of the 50 Percent Rule. OFAC sums the holdings of every blocked person, including those sanctioned under completely separate programs, so two sub-majority stakes can combine to block an entity that no single bad actor controls. The deeper lesson for the economic instrument is that sanctions evasion lives in structure: an adversary need only split ownership among several designated parties, none a majority, to keep a useful company off the SDN list. Diligence therefore means mapping the whole ownership web and adding it up — checking owners one at a time is exactly how a 55-percent-blocked firm slips through.',
    'Floe generated',
    true,
    'Do not test each blocked owner separately. Add every blocked stake together and ask whether the sum reaches 50 percent.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10058008,
    'Career Skills',
    'Instruments of National Power',
    'The Single-Tool Options Memo',
    'An action officer presents a decision memo recommending airstrikes as the response to a partner government\'s provocation. The "options" section lists three variants of the strike — large, medium, and small. A reviewer sends it back, calling it single-instrument analysis. What is the flaw, and why does it matter for a decision maker?',
    'All three "options" are the same instrument (military force) at different sizes, so the memo never weighs diplomatic, economic, or informational tools against it — denying the principal a genuine choice and hiding the second-order and partner reactions a different instrument might avoid.',
    [
      [
        'The flaw is that three options is too few; a good memo offers at least five',
        'Fixates on a count, but adding more variants of the same strike would not cure single-instrument thinking',
        'The problem is the absence of different instruments, not the number of choices; ten sizes of one tool is still one tool',
      ],
      [
        'The flaw is recommending force at all when diplomacy should always come first',
        'Substitutes a blanket preference for analysis; force may well be right, but the memo must show it beat real alternatives',
        'The issue is that no alternative instrument was weighed, not that force is inherently wrong',
      ],
      [
        'The flaw is that the memo lacks a named implementation owner',
        'Names a real but different defect; here the reviewer\'s objection is specifically about the narrow range of instruments',
        'Even with a perfect owner line, presenting only sized variants of one tool would still be single-instrument analysis',
      ],
    ],
    'Lesson: DIME (diplomatic, informational, military, economic) exists to force a habit of mind: the first question is not "how much force?" but "which instrument fits this objective, at what second-order cost?" A memo offering only large, medium, and small versions of the same tool gives the illusion of choice while quietly pre-deciding the instrument — and it blinds the principal to the spillover, partner reaction, and legal authority a sanction, a demarche, or an information campaign might carry. Real options span instruments; sizing one hammer three ways is how an action officer smuggles a conclusion past a decision maker.',
    'Floe generated',
    true,
    'Count the instruments, not the variants. Three sizes of one tool is still one tool — where are the diplomatic, economic, and informational columns?',
    { challengeRating: 6 },
  ),
]
