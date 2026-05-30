import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe nationalSecurityPolicyRoadmap 103-pass'

export const nationalSecurityPolicyRoadmapR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ----------------------------------------------------------------------------
  // Chapter 1: Strategy, Interests, and Threats
  // ----------------------------------------------------------------------------
  {
    id: 7619000,
    chapter: 'Strategy, Interests, and Threats',
    title: 'The opportunity factor',
    prompt:
      'An adversary clearly has the missiles (capability) and has declared hostile intent, yet a watch officer keeps the threat warning low. Pointing to threat = capability × intent × opportunity, what is the officer relying on?',
    correct:
      'That opportunity is currently absent — without the access, positioning, or window to act, capability and intent alone do not yet produce an executable threat',
    wrong: [
      miss(
        'That intent can be ignored once capability is confirmed',
        'Intent is one of the three multiplied factors, not a term you may drop; the officer is not discounting intent but observing that the third factor, opportunity, is missing.',
        'The officer is leaning on the third factor in the product. Identify which one — access and a window to act — is currently absent.',
      ),
      miss(
        'That capability is unproven, so the threat cannot be real',
        'The stem stipulates the capability is confirmed; the low warning rests on a different factor than capability, namely the lack of an opportunity to use it.',
        'Capability is given as confirmed. The restraining factor is the one about access and timing, not about whether the weapon exists.',
      ),
      miss(
        'That risk equals consequence, and the consequence here is small',
        'This swaps the threat equation for the risk equation; the officer is reasoning about whether an attack is executable now (opportunity), not about how bad the outcome would be.',
        'You are mixing the threat formula with the risk formula. The factor at work is part of capability × intent × opportunity.',
      ),
    ],
    lesson:
      'A common shorthand makes threat the product of capability, intent, and opportunity. A hostile, well-armed actor with no access, positioning, or window to strike poses a latent rather than imminent threat. Watch officers track opportunity (movements, deployments, openings) precisely because it can change fastest while capability and intent stay constant.',
    source,
    generated: true,
  },
  {
    id: 7619001,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Indicator without a baseline',
    prompt:
      'A brief warns that an adversary has "increased rail movements near the border." A reviewer asks one question before accepting it as a warning indicator. What is the most useful question?',
    correct:
      'Increased compared to what baseline — without a normal-activity reference, "increased" carries no warning value because you cannot tell signal from routine variation',
    wrong: [
      miss(
        'Whether the rail movements were captured by a single source or multiple sources',
        'Source corroboration matters for confidence in the observation, but even a perfectly corroborated "increase" is meaningless as a warning indicator until it is measured against a baseline of normal activity.',
        'Corroboration tells you the observation is real; it does not tell you the observation is abnormal. Ask what "increased" is being measured against.',
      ),
      miss(
        'Whether the adversary has historically used rail to move forces',
        'Historical usage is useful context, but the immediate analytic gap is the absence of a current baseline; "increased" needs a normal level to be increased from, not just a precedent that rail can carry troops.',
        'Precedent is background. The flaw is in the word "increased" itself, which needs a reference level to mean anything.',
      ),
      miss(
        'Whether the analyst applied an ICD 203 confidence level to the claim',
        'A confidence label describes how solid the basis is, but it cannot rescue an indicator that lacks a baseline; you would simply be expressing confidence in an uninterpretable number.',
        'Adding a confidence word to a baselineless figure just dresses up the gap. The missing piece is the comparison level.',
      ),
    ],
    lesson:
      'Indications and warning depends on measuring observed activity against a documented baseline of normal behavior, with pre-defined thresholds for what counts as significant. "Increased," "elevated," or "unusual" are warning words only when anchored to a baseline; absent one, the analyst is reporting motion, not change.',
    source,
    generated: true,
  },
  {
    id: 7619002,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Vulnerability is not threat',
    prompt:
      'A red-team report shows a critical undersea cable could be severed with modest effort, and a memo therefore rates the threat to it as "high." What is the analytic error?',
    correct:
      'The memo conflates vulnerability (the cable\'s exposure) with threat (an actor\'s capability, intent, and opportunity to exploit it) — high vulnerability does not establish that anyone is positioned and motivated to attack',
    wrong: [
      miss(
        'The memo should have used the word "risk" instead of "threat," which would have made it correct',
        'Relabeling does not fix it: risk requires the threat side too, so a bare vulnerability finding does not establish high risk any more than high threat. The substantive gap is the missing actor analysis.',
        'Swapping the label leaves the same hole. The report shows exposure but not that an adversary is able and willing to exploit it.',
      ),
      miss(
        'The memo understated the threat, since an easily severed cable is by definition a high threat',
        'This repeats the very error: ease of severing measures vulnerability, not threat. A cable can be wide open yet face no threat if no capable, intending actor has the opportunity to reach it.',
        'Easy-to-attack describes the target, not the attacker. Threat lives on the adversary side of the ledger.',
      ),
      miss(
        'The memo needed a net assessment of both sides\' cable infrastructure',
        'A net assessment is the wrong tool here; the issue is not a two-sided balance of infrastructure but the conceptual confusion of treating exposure as if it were an actor threat.',
        'Net assessment compares competitors over time. The error is more basic: mistaking a weakness for a threat.',
      ),
    ],
    lesson:
      'Vulnerability is a property of the target — how exposed it is. Threat is a property of an adversary — capability, intent, and opportunity to act. A highly vulnerable asset is only at high threat if a capable, intending actor can reach it. Treating exposure as threat inflates assessments and misdirects resources toward defending things no one is poised to attack.',
    source,
    generated: true,
  },
  {
    id: 7619003,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Linchpin assumption',
    prompt:
      'A regional strategy depends on a partner government surviving an election; if it falls, the entire plan collapses. How should the strategy treat that single point of failure?',
    correct:
      'Identify it as a linchpin assumption, attach watch indicators for early signs the government may fall, and pre-stage a branch plan so the collapse triggers a prepared response rather than a scramble',
    wrong: [
      miss(
        'Treat it as one assumption among many and weight them all equally in a list',
        'Equal-weighting hides the structural fact that this assumption alone can sink the plan; a linchpin warrants dedicated indicators and a branch, not a flat bullet in a list.',
        'Not all assumptions are equal. The one whose failure collapses the whole plan needs its own indicators and contingency, not parity with minor ones.',
      ),
      miss(
        'Omit it, because naming a dependency that could fail undermines confidence in the plan',
        'Hiding the assumption is the classic trap: it does not remove the dependency, it only removes leadership\'s chance to watch for and prepare against its failure.',
        'Concealing a fragile assumption does not make the plan stronger — it just guarantees the failure arrives as a surprise.',
      ),
      miss(
        'Convert it into a vital national interest so it receives top priority',
        'An assumption about a partner\'s survival is a planning premise, not a U.S. interest tier; mislabeling it as a vital interest confuses the stakes with the conditions a plan rests on.',
        'You are conflating two different things: the interest at stake versus a premise the plan depends on. This is a premise.',
      ),
    ],
    lesson:
      'A linchpin assumption is one whose failure unravels an entire plan. Sound strategy surfaces such assumptions explicitly, pairs each with watch indicators that give early warning, and pre-develops a branch plan. The failure mode is burying the linchpin so leaders only discover the dependency when it has already broken.',
    source,
    generated: true,
  },
  {
    id: 7619004,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Peripheral interest, vital-tier response',
    prompt:
      'A staffer recommends a major military deployment in response to a coup in a state where the U.S. has only minor commercial ties and no treaty obligations. Tiering the interest, what is the core objection?',
    correct:
      'The response is disproportionate to the interest — a peripheral interest should not draw a vital-interest-scale commitment, because that overspends finite resources and risk against a low-tier stake',
    wrong: [
      miss(
        'The response is fine because any coup automatically engages vital U.S. interests',
        'No coup automatically rises to vital; vital interests concern national survival and core security, and the stem describes minor ties and no treaty, which place this near the peripheral end.',
        'Coups are not vital interests by default. Grade the actual stake — minor ties, no treaty — and match the response to that tier.',
      ),
      miss(
        'The objection is that the staffer did not propose sanctions first',
        'Sequencing instruments is a separate question; the core problem is the mismatch between a peripheral interest and a vital-scale response, regardless of which instrument leads.',
        'The flaw is scale versus stake, not which tool comes first. Even sanctions could be over-scaled for a peripheral interest.',
      ),
      miss(
        'The objection is that military force is never an appropriate tool for a coup',
        'A categorical ban on force overstates the case; force can fit some interests. The disciplined critique is proportionality to the interest tier, not a blanket prohibition.',
        'The issue is not that force is always wrong — it is that this much response for this small a stake is disproportionate.',
      ),
    ],
    lesson:
      'Tiering interests as vital, important, or peripheral is meant to size the response. A vital interest (national survival, core security) can justify war; a peripheral interest justifies limited tools at most. Recommending a vital-scale commitment for a peripheral stake is the over-resourcing failure the tiering discipline exists to prevent.',
    source,
    generated: true,
  },
  {
    id: 7619005,
    chapter: 'Strategy, Interests, and Threats',
    title: 'NSS as policy anchor, not detail',
    prompt:
      'Two desks dispute whether a given problem deserves priority. One wants to settle it by reading the latest National Security Strategy. What can the NSS legitimately do here, and what can it not?',
    correct:
      'It can frame which interests and objectives the administration has declared priorities, anchoring the argument — but it will not resolve a specific operational dispute, which requires applying that framing to the facts',
    wrong: [
      miss(
        'It will give the precise operational answer, since the NSS lists approved actions for each scenario',
        'The NSS is a strategic-level statement of interests and priorities, not an operational playbook; it does not enumerate approved actions per scenario, so it cannot directly resolve a tactical dispute.',
        'The NSS sets direction, not operational detail. Expecting it to name the exact action mistakes its altitude.',
      ),
      miss(
        'It is irrelevant, because strategy documents have no bearing on day-to-day prioritization',
        'Dismissing it overcorrects; the NSS legitimately anchors which interests the administration prioritizes, which is exactly the framing a prioritization dispute needs even if it does not decide the specifics.',
        'It is not useless — it tells you the declared priorities. It just cannot do the last-mile application by itself.',
      ),
      miss(
        'It overrides statute, so whichever desk aligns with the NSS wins automatically',
        'A strategy document does not override law; authorities come from statute and the Constitution, not from the NSS, so alignment with it does not confer automatic legal victory.',
        'A strategy paper does not outrank statute. Legal authority is a separate axis from strategic priority.',
      ),
    ],
    lesson:
      'The National Security Strategy is a public, high-level statement of the administration\'s interests, objectives, and priorities. It anchors arguments about what matters but is not an operational decision tool and does not confer legal authority. Using it to frame a prioritization debate is appropriate; expecting it to resolve specific operational or legal questions is not.',
    source,
    generated: true,
  },
  {
    id: 7619006,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Ways without means',
    prompt:
      'A strategy review approves the objectives (ends) and the approach (ways) but the comptroller flags that no new resources will be provided. In ends-ways-means terms, what must the strategist now do?',
    correct:
      'Either scale back the ends, change to less resource-intensive ways, or explicitly accept and document the strategic risk created by the gap — silently keeping ambitious ends with no means is the failure',
    wrong: [
      miss(
        'Proceed as written, since the ends and ways were formally approved',
        'Approval of ends and ways does not conjure means; proceeding without resources leaves an unfunded mandate whose risk has merely been hidden, not eliminated.',
        'A signature on ends and ways does not pay for them. The unresourced gap is still there and must be reconciled.',
      ),
      miss(
        'Add more ways to compensate for the lack of means',
        'More ways consume more, not fewer, resources; piling on additional methods deepens the ends-means gap rather than closing it.',
        'Extra methods cost extra resources. Adding ways widens the shortfall you are trying to close.',
      ),
      miss(
        'Reclassify the strategy at a higher level to protect it from scrutiny',
        'Classification governs disclosure, not resourcing; raising the classification does nothing to reconcile ambitious ends with absent means and would be an improper use of classification.',
        'Classifying the problem higher does not fund it. This conflates secrecy with strategy and misuses classification.',
      ),
    ],
    lesson:
      'In Lykke\'s model, strategy balances ends (objectives), ways (methods), and means (resources); strategic risk is the gap when ends and ways exceed means. When means are fixed, the only honest moves are to trim ends, choose cheaper ways, or explicitly own the residual risk. Keeping the ambition while ignoring the shortfall converts a resourcing problem into a hidden, unmanaged risk.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 2: Deterrence, Coercion, and Escalation
  // ----------------------------------------------------------------------------
  {
    id: 7619007,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'The security dilemma and the spiral',
    prompt:
      'A purely defensive ally builds up forces to feel safer; the adversary reads this as preparation for attack and mobilizes in response, leaving both less secure. Which concept best names this dynamic?',
    correct:
      'The security dilemma — measures one state takes for its own security can decrease another\'s security, triggering a spiral even when neither side intends aggression',
    wrong: [
      miss(
        'Compellence, because the ally is forcing the adversary to react',
        'Compellence is a deliberate attempt to make an adversary change behavior; here neither side is trying to coerce the other, and the reaction is an unintended byproduct of defensive measures.',
        'No one here is trying to coerce anyone. The spiral is an unintended side effect, which points to a different concept than compellence.',
      ),
      miss(
        'Extended deterrence, because an ally is involved',
        'Extended deterrence is about a patron threatening retaliation to protect a third party; the stem describes a mutual fear-driven arms spiral, not a guarantee extended over an ally.',
        'The mere presence of an ally does not make it extended deterrence. Look at the mechanism: defensive moves read as threats.',
      ),
      miss(
        'Deterrence by denial, because the buildup denies the adversary an easy attack',
        'Denial is a deliberate strategy to make an objective unattainable; the point of the scenario is the inadvertent spiral that defensive measures produce, which denial does not describe.',
        'Denial is an intentional strategy. The scenario is about unintended escalation, which is a distinct idea.',
      ),
    ],
    lesson:
      'The security dilemma, central to Jervis\'s work, holds that steps a state takes to make itself more secure can make others less secure, prompting countermeasures that leave everyone worse off — a spiral that can occur without aggressive intent on either side. Recognizing it cautions against reading every adversary buildup as proof of hostile intent, and against assuming our own "defensive" moves read as benign abroad.',
    source,
    generated: true,
  },
  {
    id: 7619008,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Assurance vs. deterrence',
    prompt:
      'A nervous ally is contemplating its own escalatory hedge because it doubts U.S. protection. A plan focuses entirely on threatening the adversary. What audience does the plan neglect, and why does that matter?',
    correct:
      'It neglects the ally — assurance is aimed at allies (convince them they are protected so they do not act rashly), and is a distinct task from deterrence aimed at adversaries',
    wrong: [
      miss(
        'It neglects the adversary, who needs an even stronger threat to be deterred',
        'The plan already targets the adversary with threats; the gap is the unaddressed ally whose anxiety could drive its own destabilizing hedge, which more adversary-directed threats do not fix.',
        'The plan is all about the adversary already. The audience left out is the one whose confidence is wobbling.',
      ),
      miss(
        'It neglects domestic public opinion, the only audience that matters for credibility',
        'Domestic opinion is one factor, but the stem\'s acute problem is an ally weighing its own escalation; assurance toward that ally is the missing element, not domestic messaging.',
        'The pressing issue is an ally about to hedge, not the home audience. Match the missing audience to the scenario.',
      ),
      miss(
        'It neglects nothing, because deterring the adversary automatically reassures the ally',
        'Deterrence and assurance are distinct: a credible threat to the adversary does not by itself convince a doubting ally that the patron will actually defend it, which is why dedicated assurance measures exist.',
        'Threatening the adversary and reassuring the ally are not the same act. The ally can still doubt your will to defend it.',
      ),
    ],
    lesson:
      'Deterrence targets adversaries (do not act, or you will pay); assurance targets allies (you are protected, so do not take destabilizing action of your own). They are separate tasks with separate audiences. A plan that only threatens the adversary can leave an anxious ally unreassured — and an unreassured ally may hedge, proliferate, or escalate on its own.',
    source,
    generated: true,
  },
  {
    id: 7619009,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'A red line is not self-enforcing',
    prompt:
      'A principal wants to declare a public red line. A staffer supports it but adds one caution that good signaling theory demands. What is that caution?',
    correct:
      'A red line only deters if it is backed by a credible, pre-decided consequence the principal is actually willing to impose — declaring it without that backing invites the adversary to cross it and expose the bluff',
    wrong: [
      miss(
        'A red line works automatically once stated publicly, so no further planning is needed',
        'Public statement does not create enforcement; an unbacked red line is a bluff, and crossing it with no consequence damages credibility on every future threat.',
        'Saying it out loud does not make it enforce itself. Ask what happens, and whether the principal will really do it, if the line is crossed.',
      ),
      miss(
        'The caution is to keep the red line secret so the adversary cannot prepare to cross it',
        'A secret red line cannot deter, since deterrence requires the adversary to know what is prohibited; the issue is backing the line with a credible consequence, not hiding it.',
        'A hidden line deters no one — the adversary must know it exists. The real gap is the consequence behind it.',
      ),
      miss(
        'The caution is that red lines violate the War Powers Resolution',
        'The War Powers Resolution governs introducing forces into hostilities, not declaratory policy; stating a red line is signaling, not a use of force, so the WPR is not the relevant constraint.',
        'Declaring a line is signaling, not deploying troops. You are reaching for the wrong legal frame.',
      ),
    ],
    lesson:
      'A red line is a deterrent signal, but signals are not self-enforcing. To deter, the line must be clear to the adversary and backed by a consequence the issuer is genuinely prepared to impose. A red line crossed without response is worse than no red line: it teaches the adversary, and other watchers, that the issuer\'s threats can be ignored.',
    source,
    generated: true,
  },
  {
    id: 7619010,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Commitment problem in coercion',
    prompt:
      'An adversary will only comply with a demand if it believes the coercer will both punish non-compliance AND stop the pressure once it complies. The coercer keeps emphasizing the punishment but never credibly promises relief. What failure is this?',
    correct:
      'A failed assurance of relief — coercion requires a credible promise that compliance ends the pain; without it, the target has no incentive to concede because it expects to be punished either way',
    wrong: [
      miss(
        'A failure of capability, since the coercer evidently cannot impose the punishment',
        'The stem says the coercer emphasizes punishment, implying capability is not the issue; the missing element is the assurance that compliance will be rewarded with relief, not capability.',
        'The threat side is being broadcast fine. What is missing is the other half of the bargain: a believable promise to stop.',
      ),
      miss(
        'A failure of proportionality, since the punishment is too large',
        'Proportionality concerns the size of the threatened pain; the scenario\'s breakdown is the absence of a credible "comply and the pressure ends" promise, which is independent of how large the threat is.',
        'The problem is not the size of the stick but the lack of a credible carrot — relief if the target complies.',
      ),
      miss(
        'A failure of deterrence, since the target has already acted',
        'This is coercion (compelling a change), not deterrence (preventing a future act); and even framed as coercion, the breakdown is the missing assurance of relief, not a deterrence label.',
        'This is about changing behavior, not preventing it — and the gap is still the unkept promise of relief.',
      ),
    ],
    lesson:
      'Effective coercion needs two credible halves: a threat that non-compliance brings pain, and an assurance that compliance brings relief. If the target expects to be punished whether or not it concedes, it has no reason to concede. Coercers who broadcast only the threat, never the promise of relief, routinely fail — the assurance is as important as the threat.',
    source,
    generated: true,
  },
  {
    id: 7619011,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Inadvertent escalation',
    prompt:
      'War-gamers warn that a "limited" strike could escalate not because either leader chooses to climb, but because of misperception, fog, or pre-delegated launch authority. What category of escalation is this?',
    correct:
      'Inadvertent (or accidental) escalation — escalation that occurs without a deliberate decision to escalate, driven by misperception, the fog of war, or autonomous/pre-delegated actions',
    wrong: [
      miss(
        'Deliberate escalation, since someone must have chosen to climb the ladder',
        'The whole point of the scenario is that no leader chose to escalate; deliberate escalation requires an intentional decision to climb, which is exactly what is absent here.',
        'Re-read the stem: neither leader chooses to climb. That rules out the "deliberate" category by definition.',
      ),
      miss(
        'Horizontal escalation, because the conflict spreads to new domains',
        'Horizontal escalation describes widening to new geography or domains; the scenario is about unintended intensification from misperception and fog, which is a different axis than horizontal spread.',
        'Horizontal is about where the fight spreads. This is about how it intensifies without anyone deciding to.',
      ),
      miss(
        'Compellence, because the strike is meant to force a change',
        'Compellence names the purpose of an action, not a mode of escalation; even a compellent strike can escalate inadvertently, which is the dynamic the war-gamers are flagging.',
        'Compellence is a goal, not a type of escalation. The question is about how the climb happens, not why the strike was launched.',
      ),
    ],
    lesson:
      'Escalation is not always a choice. Inadvertent escalation arises from misperception, the fog of war, communications failures, or pre-delegated/automated authorities — climbing the ladder without anyone deciding to. Because "limited" actions can escalate inadvertently, options memos should map not just the adversary\'s deliberate next rung but the ways the situation could climb on its own.',
    source,
    generated: true,
  },
  {
    id: 7619012,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Leaving room for de-escalation',
    prompt:
      'A response option is effective but corners the adversary into a humiliating choice between total capitulation and dramatic escalation. What design flaw should the memo flag?',
    correct:
      'It offers the adversary no face-saving off-ramp — leaving no path to de-escalate short of capitulation raises the odds the adversary chooses to escalate rather than back down publicly',
    wrong: [
      miss(
        'It is too weak, since cornering the adversary shows insufficient resolve',
        'The flaw is the opposite of weakness: the option is forceful enough to corner the adversary, and removing any graceful exit makes escalation more, not less, likely.',
        'The problem is not too little pressure — it is pressure with no exit. Ask what the adversary can do besides capitulate or escalate.',
      ),
      miss(
        'It violates proportionality and should be scaled down across the board',
        'Scaling everything down may sacrifice the option\'s effectiveness; the targeted fix is to preserve an off-ramp, not necessarily to weaken the whole response.',
        'You do not need to gut the option — you need to leave a way out. Those are different design moves.',
      ),
      miss(
        'It needs a higher classification because it could provoke the adversary',
        'Classification controls who sees the document, not how the adversary is cornered; the design flaw is strategic (no off-ramp), and classifying it higher does nothing to address that.',
        'Classifying the memo does not give the adversary an exit. The fix is in the option\'s design, not its handling.',
      ),
    ],
    lesson:
      'Coercive options work best when they pair pressure with a face-saving path to comply. An option that leaves an adversary only the choice between humiliating surrender and escalation pushes toward escalation, because leaders rarely accept public humiliation when climbing the ladder is available. Good options preserve an off-ramp the adversary can take without total loss of face.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 3: Intelligence and Evidence
  // ----------------------------------------------------------------------------
  {
    id: 7619013,
    chapter: 'Intelligence and Evidence',
    title: 'ICD 203 "unlikely" band',
    prompt:
      'An analyst assesses a roughly 30% probability for an event and wants the correct ICD 203 estimative term. Which word fits?',
    correct:
      '"Unlikely" — ICD 203 maps the 20-45% band to "unlikely," distinct from "very unlikely" (5-20%) below it and "roughly even chance" (45-55%) above it',
    wrong: [
      miss(
        '"Very unlikely," because 30% is well below even odds',
        '"Very unlikely" is reserved for the 5-20% band; 30% sits above that, in the 20-45% "unlikely" range, so this term understates the probability.',
        '30% is above the 5-20% "very unlikely" band. Find the row that contains 30%.',
      ),
      miss(
        '"Roughly even chance," because 30% is in the neighborhood of a coin flip',
        '"Roughly even chance" covers 45-55% in ICD 203; 30% falls clearly below that band, so using it would overstate the probability.',
        '"Roughly even" is the narrow 45-55% band. 30% is not close enough to land there.',
      ),
      miss(
        '"Low confidence," because 30% signals weak likelihood',
        'ICD 203 keeps likelihood and confidence separate: "low confidence" describes the strength of the basis, not a probability, so it is the wrong axis for a 30% estimate.',
        'You are reaching for a confidence label to express a probability. Pick the likelihood word for the 20-45% band.',
      ),
    ],
    lesson:
      'ICD 203\'s likelihood ladder: almost no chance (1-5%), very unlikely (5-20%), unlikely (20-45%), roughly even chance (45-55%), likely (55-80%), very likely (80-95%), almost certain (95-99%). A ~30% estimate is "unlikely." Note the asymmetry around the middle and that likelihood terms are never to be conflated with confidence levels.',
    source,
    generated: true,
  },
  {
    id: 7619014,
    chapter: 'Intelligence and Evidence',
    title: 'Likelihood high, confidence low',
    prompt:
      'Reporting points strongly toward an imminent attack, but it all traces back to one uncorroborated source with a mixed record. How should the note express this?',
    correct:
      'High likelihood with low confidence — the evidence points strongly toward the event (likelihood), but the thin, single-source, uncorroborated basis warrants low confidence in that judgment',
    wrong: [
      miss(
        'High likelihood with high confidence, since the reporting points strongly to attack',
        'The strength of where the evidence points sets likelihood, but a single uncorroborated source with a mixed record cannot support high confidence; high-high overstates the solidity of the basis.',
        'How strongly it points and how solid the basis is are two different axes. The basis here is thin, so confidence cannot be high.',
      ),
      miss(
        'Low likelihood with low confidence, because the source is weak',
        'A weak source lowers confidence, not likelihood; the reporting still points strongly toward attack, so likelihood remains high even as confidence drops.',
        'Source weakness pulls down confidence, not the probability the evidence indicates. Do not let one slide drag the other.',
      ),
      miss(
        'It cannot be stated, because likelihood and confidence may never appear together',
        'ICD 203 forbids mixing the two in a single combined phrase, but it absolutely expects analysts to state both dimensions separately — here, high likelihood and, in a distinct statement, low confidence.',
        'The rule is no blending in one sentence, not that you cannot report both. State each in its own breath.',
      ),
    ],
    lesson:
      'Likelihood (how probable the event is, given the evidence) and confidence (how solid the evidentiary basis is) move independently. A strong-pointing but single, uncorroborated source yields a high-likelihood, low-confidence judgment. ICD 203 wants both expressed — just not fused into one phrase like "high-confidence likely."',
    source,
    generated: true,
  },
  {
    id: 7619015,
    chapter: 'Intelligence and Evidence',
    title: 'The verbal probability problem',
    prompt:
      'Sherman Kent documented that readers interpreted the same word, "probable," anywhere from ~30% to ~75%. What problem was he exposing, and what is the standard fix?',
    correct:
      'The verbal probability problem — uncalibrated words mean different odds to different readers; the fix is a standardized lexicon (now ICD 203\'s bands) that pins each term to a probability range',
    wrong: [
      miss(
        'A source-reliability problem, fixed by better collection',
        'Kent\'s finding was about how readers decode estimative words, not about whether the underlying reporting was reliable; more collection would not stop two readers from reading "probable" differently.',
        'The issue is in the reader\'s head, not the collector\'s take. Better sourcing does not fix divergent word interpretation.',
      ),
      miss(
        'A classification problem, fixed by marking estimates higher',
        'Classification governs who may read the estimate, not how the words inside are understood; raising the marking does nothing to align readers\' numeric interpretations of "probable."',
        'Marking it Secret does not make "probable" mean the same number to everyone. Wrong lever entirely.',
      ),
      miss(
        'A timeliness problem, fixed by issuing estimates faster',
        'Speed of delivery is unrelated to the ambiguity of estimative language; a faster estimate using "probable" still leaves readers guessing at the odds it conveys.',
        'Getting the estimate out sooner does not sharpen what its words mean. This is about meaning, not tempo.',
      ),
    ],
    lesson:
      'Sherman Kent\'s "Words of Estimative Probability" (1964) showed that unanchored verbal probabilities are read wildly differently by different consumers — "probable" meant 30% to some and 75% to others. The institutional answer is a standardized lexicon tying terms to numeric bands, the lineage that runs to ICD 203\'s estimative ladder, so a word carries roughly the same odds for every reader.',
    source,
    generated: true,
  },
  {
    id: 7619016,
    chapter: 'Intelligence and Evidence',
    title: 'Diagnostic vs. consistent evidence',
    prompt:
      'In an ACH matrix, a piece of evidence is consistent with all four hypotheses. What is its analytic value, and why?',
    correct:
      'It has little diagnostic value — evidence consistent with every hypothesis cannot discriminate among them, so it does not help select the best hypothesis no matter how compelling it seems',
    wrong: [
      miss(
        'High value, because it corroborates the leading hypothesis',
        'Corroborating the leader is exactly the trap: evidence that also fits the rivals confirms nothing distinctively, so it cannot strengthen one hypothesis over the others.',
        'If it fits the alternatives too, it cannot single out the leader. Consistency with everything is the opposite of diagnostic.',
      ),
      miss(
        'High value, because consistent evidence is the most reliable kind',
        'Reliability of a source is separate from diagnosticity; even a rock-solid observation that fits all hypotheses still fails to discriminate among them, which is what ACH cares about.',
        'Reliable is not the same as diagnostic. A trustworthy fact that fits every hypothesis still tells you nothing about which is right.',
      ),
      miss(
        'No value, so it should be deleted from the matrix entirely',
        'It is kept on the matrix because it still establishes background facts and may become diagnostic if a hypothesis changes; ACH downweights it, but deleting evidence is poor tradecraft.',
        'Low diagnostic weight is not the same as worthless. ACH downweights such items but does not erase them from the record.',
      ),
    ],
    lesson:
      'In Analysis of Competing Hypotheses, the prize is diagnostic evidence — items that are consistent with some hypotheses and inconsistent with others, so they help discriminate. Evidence consistent with all hypotheses has little diagnostic value, however persuasive it feels. Heuer\'s method deliberately downweights such items and hunts for the evidence that rules rivals out.',
    source,
    generated: true,
  },
  {
    id: 7619017,
    chapter: 'Intelligence and Evidence',
    title: 'Mirror-imaging',
    prompt:
      'An analyst concludes a rival "won\'t invade in winter because no rational military would" — reasoning from how the U.S. military would weigh the conditions. What cognitive trap is this?',
    correct:
      'Mirror-imaging — projecting one\'s own values, doctrine, and risk calculus onto an adversary, assuming they will reason and decide as we would',
    wrong: [
      miss(
        'Confirmation bias, because the analyst is seeking supporting evidence',
        'Confirmation bias is selectively gathering evidence to support a prior; here the flaw is assuming the adversary shares our reasoning, which is mirror-imaging, not biased evidence selection.',
        'No evidence is being cherry-picked here. The error is assuming the adversary thinks like us.',
      ),
      miss(
        'Anchoring, because the analyst is fixed on the winter detail',
        'Anchoring is over-weighting an initial reference point; the error here is not fixation on a number but imputing U.S.-style rationality to a foreign actor.',
        'There is no initial anchor distorting the estimate. The flaw is whose decision logic is being assumed.',
      ),
      miss(
        'Politicization, because the conclusion serves a policy preference',
        'Politicization is shaping analysis to fit a policy line; nothing in the stem says the conclusion was bent toward a preference — the flaw is purely the assumption that the adversary reasons as we do.',
        'There is no policy thumb on the scale described. The error is analytic projection, not political pressure.',
      ),
    ],
    lesson:
      'Mirror-imaging assumes an adversary shares our values, doctrine, and risk tolerance — "they would never do X because we wouldn\'t." It has produced major surprises when adversaries acted on different logic, geography, or stakes. The corrective is to model the adversary\'s own decision calculus and to treat "no rational actor would" as a red flag, not a conclusion.',
    source,
    generated: true,
  },
  {
    id: 7619018,
    chapter: 'Intelligence and Evidence',
    title: 'ICD 203 analytic standard: sourcing',
    prompt:
      'A finished assessment makes a striking claim but the reader cannot tell which reporting underpins it or how reliable that reporting is. Which ICD 203 analytic standard is most directly violated?',
    correct:
      'The standard requiring properly described quality and credibility of underlying sources — analysis must convey the basis and reliability of the information so consumers can weigh it',
    wrong: [
      miss(
        'The standard requiring a bottom-line-up-front structure',
        'BLUF is a writing convention, not one of the ICD 203 analytic standards; the violation here is the missing sourcing description, which is its own enumerated standard.',
        'BLUF is a style choice, not an ICD 203 standard. The gap is about where the claim comes from.',
      ),
      miss(
        'The standard prohibiting any use of single-source reporting',
        'ICD 203 does not ban single-source reporting; it requires that source quality and credibility be described. The flaw is the missing description, not the use of one source.',
        'There is no rule against single sourcing per se. The rule is that you must characterize the sourcing, which the assessment failed to do.',
      ),
      miss(
        'The standard requiring numeric probabilities instead of words',
        'ICD 203 favors calibrated estimative language and does not mandate numbers; the violated standard concerns describing source quality and credibility, not a numbers-over-words rule.',
        'No standard demands numbers over words. The missing element is a description of the sources behind the claim.',
      ),
    ],
    lesson:
      'ICD 203 sets analytic standards including objectivity, independence from political consideration, timeliness, use of all available sources, and described source quality and credibility. A claim whose underlying reporting and reliability the reader cannot see violates the sourcing standard. Properly characterizing sources lets consumers calibrate how much weight to put on a judgment.',
    source,
    generated: true,
  },
  {
    id: 7619019,
    chapter: 'Intelligence and Evidence',
    title: 'Politicization, both directions',
    prompt:
      'A senior consumer signals they "expect the assessment to support the planned operation." Under ICD 203, what is the analyst\'s obligation?',
    correct:
      'To provide an objective assessment independent of political considerations — analysis must not be distorted to advocate a policy, agenda, or audience preference, even when leadership wants a particular answer',
    wrong: [
      miss(
        'To adjust the assessment to align with leadership\'s stated expectation',
        'Bending analysis to a desired conclusion is precisely the politicization ICD 203 forbids; the analyst owes the consumer the most accurate judgment, not the most welcome one.',
        'Giving the boss the answer they ordered is the definition of politicization. The standard requires the opposite.',
      ),
      miss(
        'To refuse to produce any assessment until the pressure is withdrawn',
        'Withholding the product abdicates the analytic mission; the standard requires producing an objective assessment, not going silent, even under pressure.',
        'Silence is not objectivity. The duty is to deliver an honest judgment, not to walk away.',
      ),
      miss(
        'To soften the language so the assessment neither supports nor contradicts the operation',
        'Deliberately blurring the judgment to dodge the pressure is its own distortion; objectivity means stating the best-supported conclusion clearly, not hedging it into uselessness.',
        'Fuzzing the judgment to avoid offense is also a distortion. Objectivity means saying what the evidence supports, plainly.',
      ),
    ],
    lesson:
      'ICD 203 requires analysis to be objective and independent of political considerations — it may not be shaped to support a policy, agenda, or audience. Politicization runs both ways: caving to pressure for a desired conclusion, and self-censoring or muddying findings to avoid friction. The obligation is the most accurate assessment the evidence supports, stated clearly, regardless of who wants what.',
    source,
    generated: true,
  },
  {
    id: 7619020,
    chapter: 'Intelligence and Evidence',
    title: 'Key assumptions check',
    prompt:
      'Before finalizing a high-stakes estimate, a tradecraft cell runs a structured technique that lists every load-bearing assumption and asks how the conclusion would change if each were wrong. What technique is this?',
    correct:
      'A Key Assumptions Check — an explicit inventory of the assumptions a judgment rests on, tested for how the conclusion shifts if any prove false',
    wrong: [
      miss(
        'A Red Cell exercise, which simulates the adversary\'s perspective',
        'A Red Cell adopts the adversary\'s viewpoint to challenge mirror-imaging; it is a different structured technique than systematically inventorying and stress-testing one\'s own assumptions.',
        'Red Cell role-plays the adversary. This technique audits your own premises instead.',
      ),
      miss(
        'A devil\'s advocacy paper, which argues the opposite conclusion',
        'Devil\'s advocacy builds the strongest counter-case; it overlaps with assumption-testing but is a distinct technique, and the stem specifically describes enumerating and testing assumptions.',
        'Devil\'s advocacy argues the other side. Here the cell is cataloging assumptions, which is its own named method.',
      ),
      miss(
        'An ICD 203 confidence labeling pass',
        'Assigning confidence labels expresses how solid the basis is; it does not surface and test the underlying assumptions, which is what a Key Assumptions Check does.',
        'Labeling confidence rates the basis; it does not list the assumptions. Different step.',
      ),
    ],
    lesson:
      'A Key Assumptions Check is a structured analytic technique that makes the implicit explicit: list the assumptions a judgment depends on, then ask how robust the conclusion is if each fails. It guards against estimates that quietly rest on fragile premises and pairs naturally with watch indicators for the assumptions most likely to break.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 4: Instruments of National Power
  // ----------------------------------------------------------------------------
  {
    id: 7619021,
    chapter: 'Instruments of National Power',
    title: 'DIMEFIL beyond DIME',
    prompt:
      'A counter-threat-finance task force says plain DIME does not capture its toolkit. Which instruments does the expanded DIMEFIL model add, and why might that matter here?',
    correct:
      'DIMEFIL adds Financial, Intelligence, and Law-enforcement instruments to Diplomatic/Informational/Military/Economic — relevant because threat finance is fought largely with financial measures, intelligence, and law-enforcement tools that DIME alone obscures',
    wrong: [
      miss(
        'It adds Force, Influence, and Logistics',
        'DIMEFIL\'s added letters are Financial, Intelligence, and Law-enforcement, not Force/Influence/Logistics; the latter are not the recognized expansion of the model.',
        'The added letters are F-I-L. Map them to Financial, Intelligence, and Law-enforcement, not these terms.',
      ),
      miss(
        'It adds Federal, International, and Local coordination layers',
        'DIMEFIL describes instruments of national power, not governmental coordination layers; the F-I-L stands for Financial, Intelligence, and Law-enforcement instruments.',
        'These are jurisdiction levels, not instruments. DIMEFIL\'s extra letters are tools of power.',
      ),
      miss(
        'Nothing — DIMEFIL is just a longer name for the same four DIME instruments',
        'DIMEFIL genuinely extends the taxonomy with three additional instruments; treating it as a synonym for DIME erases the financial, intelligence, and law-enforcement tools it was created to surface.',
        'It is not a relabel. Three real instruments are added, which is exactly why the task force prefers it.',
      ),
    ],
    lesson:
      'DIME (Diplomatic, Informational, Military, Economic) is the classic instruments-of-power taxonomy; DIMEFIL adds Financial, Intelligence, and Law-enforcement. For problems like terrorism financing, sanctions evasion, or transnational crime, the financial, intelligence, and law-enforcement instruments carry much of the load, so the longer model better captures the real toolkit.',
    source,
    generated: true,
  },
  {
    id: 7619022,
    chapter: 'Instruments of National Power',
    title: 'IEEPA does not reach personal communications',
    prompt:
      'A draft sanctions program under IEEPA would, as written, also restrict ordinary personal correspondence and informational materials with the target country. What statutory limit does this run into?',
    correct:
      'IEEPA exempts certain transactions — notably personal communications and the import/export of informational materials (the "Berman amendment") — so the President\'s IEEPA authority cannot reach them',
    wrong: [
      miss(
        'None — IEEPA gives the President unlimited authority over all transactions with the target',
        'IEEPA is broad but expressly limited; it does not authorize regulating personal communications or informational materials, so "unlimited" misstates the statute.',
        'IEEPA is powerful but not boundless. The statute itself carves out specific categories the program cannot touch.',
      ),
      miss(
        'The 50 Percent Rule, which protects minority-owned entities',
        'The 50 Percent Rule is an OFAC ownership-attribution rule about blocked entities, not a limit protecting personal correspondence; it has nothing to do with communications or informational materials.',
        'The 50 Percent Rule is about who counts as blocked, not about correspondence. Wrong limit.',
      ),
      miss(
        'The War Powers Resolution, which caps economic measures at 60 days',
        'The War Powers Resolution governs introducing armed forces into hostilities, not economic sanctions, and imposes no 60-day cap on IEEPA programs; the relevant limit is IEEPA\'s own exemptions.',
        'War Powers is about troops, not sanctions. The constraint here lives inside IEEPA itself.',
      ),
    ],
    lesson:
      'IEEPA grants broad authority to regulate or block transactions during a declared national emergency, but it carves out exemptions — including personal communications and, under the Berman amendment, the import and export of informational materials (books, films, art, news). A sanctions program that sweeps in ordinary correspondence or informational materials exceeds the statute\'s reach.',
    source,
    generated: true,
  },
  {
    id: 7619023,
    chapter: 'Instruments of National Power',
    title: 'Indirect ownership chains under the 50 Percent Rule',
    prompt:
      'An SDN owns 100% of Company A, which owns 60% of Company B, which owns 55% of Company C. None of A, B, or C is named on the SDN List. Under the 50 Percent Rule, which are blocked?',
    correct:
      'All three — the SDN owns A outright; A\'s 60% makes B blocked (a blocked person\'s 50%+ stake), and B\'s 55% makes C blocked in turn, because the rule applies through indirect ownership chains',
    wrong: [
      miss(
        'Only Company A, because the rule stops at the first entity the SDN directly owns',
        'The 50 Percent Rule expressly reaches indirect ownership; once A is blocked, A is itself a blocked person whose 50%+ stake blocks B, and so on down the chain. It does not stop at the first link.',
        'The rule follows the chain, not just the first link. A blocked entity\'s majority stakes block the next entity too.',
      ),
      miss(
        'None, because no listed SDN directly owns 50% of B or C',
        'Blocked status passes down: the SDN\'s ownership of A makes A blocked, and a blocked entity\'s 50%+ ownership of the next entity blocks it as well, regardless of direct SDN ownership.',
        'Direct SDN ownership is not required at each level. Blocked status is inherited down the ownership chain.',
      ),
      miss(
        'Only Companies A and B, because C\'s 55% is too close to the 50% line to count',
        'The threshold is 50% or more, and 55% clearly exceeds it; there is no proximity-to-the-line exception, so B\'s 55% of C blocks C just as cleanly.',
        '55% is over 50%, full stop. There is no "too close to call" zone in the rule.',
      ),
    ],
    lesson:
      'OFAC\'s 50 Percent Rule blocks any entity owned 50% or more, directly or indirectly, individually or in the aggregate, by one or more blocked persons. Crucially, a blocked entity is itself a blocked person, so blocked status cascades down ownership chains. Name-checking the SDN List alone misses these indirectly blocked entities; full ownership tracing is required.',
    source,
    generated: true,
  },
  {
    id: 7619024,
    chapter: 'Instruments of National Power',
    title: 'Leahy remediation pathway',
    prompt:
      'A foreign unit was made ineligible for assistance after credible reports of a gross violation of human rights. Leadership asks whether assistance can ever resume. Under the Leahy framework, what is the pathway?',
    correct:
      'Yes, through remediation — assistance can resume if the host government takes effective steps to bring those responsible to justice (e.g., credible investigation, prosecution, proportional sentencing), as determined under the State/DoD process',
    wrong: [
      miss(
        'No — a Leahy designation permanently and irrevocably bars the unit forever',
        'The Leahy framework includes a remediation pathway; it is not a permanent, irrevocable bar. Assistance can resume when the host government takes effective corrective measures.',
        'Leahy ineligibility is not necessarily forever. There is a recognized off-ramp tied to the host government\'s actions.',
      ),
      miss(
        'Yes — the unit can simply self-certify that the problem has been fixed',
        'Self-certification by the implicated unit is not the mechanism; remediation turns on the host government taking effective justice measures, assessed by the U.S. government, not the unit\'s own say-so.',
        'The unit cannot clear itself. Remediation depends on government action to bring perpetrators to justice, judged by the U.S.',
      ),
      miss(
        'Yes — a Presidential national-security waiver overrides Leahy without any remediation',
        'Resumption runs through the remediation process tied to effective justice measures, not a blanket national-security waiver that bypasses any corrective action; conflating the two misstates the framework.',
        'There is no free national-security override here. The route back is remediation premised on real corrective steps.',
      ),
    ],
    lesson:
      'The Leahy Laws (22 USC 2378d for State; 10 USC 362 for DoD) bar assistance to security-force units credibly implicated in gross human rights violations. They are not permanent: a remediation process allows assistance to resume when the host government takes effective steps to bring those responsible to justice — credible investigation, prosecution, and proportional accountability — as assessed by State and DoD.',
    source,
    generated: true,
  },
  {
    id: 7619025,
    chapter: 'Instruments of National Power',
    title: 'Sanctions as means, not end',
    prompt:
      'A package would impose heavy sanctions but the memo never states what behavior change would trigger relief. Beyond the missing assurance, what strategic critique applies to sanctions design?',
    correct:
      'Sanctions are an instrument toward a policy objective, not an end in themselves — without a defined objective and a relief pathway tied to it, they become open-ended pain with no theory of how they change the target\'s behavior',
    wrong: [
      miss(
        'Sanctions are inherently ineffective and should be removed from the toolkit',
        'Sanctions can work when designed against a clear objective with a relief pathway; the critique is poor design here, not that the instrument is categorically useless.',
        'The instrument is not the problem — the missing objective and relief pathway are. Do not throw out the tool.',
      ),
      miss(
        'The package should automatically be paired with military force to be credible',
        'Coercive economic measures do not require an accompanying strike to be coherent; the gap is a defined objective and relief condition, not a missing military instrument.',
        'Adding force is not the fix. The design needs a goal and an off-ramp, which is a separate issue.',
      ),
      miss(
        'The only flaw is that the sanctions were not classified at a high enough level',
        'Sanctions designations are public actions by design; classification level is not the relevant critique, and over-classifying them would undercut the deterrent signal they are meant to send.',
        'Sanctions are meant to be visible. Classification is the wrong lens; the missing piece is the objective they serve.',
      ),
    ],
    lesson:
      'Sanctions are an instrument of national power, useful only insofar as they advance a policy objective. Good design specifies the objective, the behavior that would earn relief, and the theory linking pressure to that change. Sanctions with no stated objective and no relief pathway become indefinite punishment that the target may simply absorb, with no route to the outcome the policy actually wants.',
    source,
    generated: true,
  },
  {
    id: 7619026,
    chapter: 'Instruments of National Power',
    title: 'Burden-sharing vs. free-riding',
    prompt:
      'In an alliance options matrix, one option relies on a partner contributing forces but the partner has consistently under-contributed while still enjoying the alliance\'s protection. What dynamic should the matrix flag?',
    correct:
      'The free-rider problem — a partner that benefits from collective security while under-contributing — so the option should account for the gap between assumed and likely actual partner contribution',
    wrong: [
      miss(
        'The security dilemma, since the partner\'s buildup threatens the adversary',
        'The security dilemma involves defensive measures read as threats; here the issue is the opposite — a partner not building up enough and relying on others, which is free-riding, not a spiral.',
        'There is no threatening buildup here; the partner is doing too little, not too much. That points to free-riding.',
      ),
      miss(
        'Extended deterrence failure, since the partner doubts U.S. protection',
        'The stem says the partner enjoys the protection, not that it doubts it; the flagged dynamic is under-contribution despite benefiting, which is burden-sharing/free-riding, not a credibility gap.',
        'The partner trusts the protection enough to lean on it. The problem is contribution, not doubt.',
      ),
      miss(
        'Mirror-imaging, since the U.S. assumes the partner will act as it would',
        'Mirror-imaging is projecting our reasoning onto an adversary; this is an allied burden-sharing problem, and the planning fix is to use realistic contribution estimates, not to relabel it a cognitive bias.',
        'Mirror-imaging is about adversary reasoning. This is an ally doing less than its share — a different concept.',
      ),
    ],
    lesson:
      'In alliances, the free-rider (or burden-sharing) problem arises when a member enjoys collective security while contributing less than its share, betting others will carry the load. Options that assume full partner contribution can collapse if the partner free-rides. A realistic matrix plans against the partner\'s likely, not assumed, contribution and weighs how to incentivize fairer burden-sharing.',
    source,
    generated: true,
  },
  {
    id: 7619027,
    chapter: 'Instruments of National Power',
    title: 'Authority precedes instrument',
    prompt:
      'A staffer is excited about a clever financial measure and drafts the options matrix entry. What must the entry establish before the option is recommendable, per the chapter\'s discipline?',
    correct:
      'The specific legal authority the tool requires (e.g., an IEEPA national emergency and OFAC designation criteria) — an instrument with no identified statutory or executive authority is not a usable option, however clever',
    wrong: [
      miss(
        'The estimated media reaction to the measure',
        'Press reaction is a second-order consideration; the threshold requirement is a lawful basis, because an option without authority cannot be executed regardless of how it plays publicly.',
        'Optics come later. First the option needs a legal lane, or it cannot be done at all.',
      ),
      miss(
        'A higher classification marking to protect the cleverness of the idea',
        'Classification governs handling, not legality; marking the idea higher does not supply the authority an instrument requires before it can be recommended.',
        'Classifying it does not authorize it. The missing piece is statutory or executive authority, not secrecy.',
      ),
      miss(
        'Whether the measure is cheaper than the military options on the matrix',
        'Cost-comparison is one input, but a cheap measure with no legal authority is still not executable; identifying the required authority comes first, not relative cost.',
        'Cheapness is irrelevant if it is not lawful. Establish the authority before comparing price tags.',
      ),
    ],
    lesson:
      'Every instrument of national power runs on a legal authority — a sanction needs an IEEPA emergency and designation criteria; security assistance needs Leahy vetting; covert action needs a Finding. The chapter\'s discipline is to identify the required authority before recommending a tool. A clever option with no statutory or executive basis is a future inspector-general finding, not a usable option.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 5: Interagency Process and Decision Making
  // ----------------------------------------------------------------------------
  {
    id: 7619028,
    chapter: 'Interagency Process and Decision Making',
    title: 'What a Summary of Conclusions does',
    prompt:
      'After a Deputies Committee meeting, the executive secretary must capture the outcome so it actually drives action. What does a Summary of Conclusions need to contain?',
    correct:
      'The decisions reached, the taskings with named owners and deadlines, and any preserved dissent — so the meeting produces accountable action rather than a vague sense of agreement',
    wrong: [
      miss(
        'A verbatim transcript of everything each principal said',
        'A Summary of Conclusions is an action document, not a transcript; its job is to record decisions, taskers, and owners, not to reproduce the full discussion.',
        'It is not a court reporter\'s record. The point is decisions and who does what, not every word spoken.',
      ),
      miss(
        'Only the points of agreement, with disagreements left out to show unity',
        'Scrubbing dissent is a recognized failure mode; the SoC should preserve meaningful disagreement so principals can later resolve it, not manufacture false unanimity.',
        'Deleting the disagreements is exactly the trap. Dissent belongs in the record, not on the cutting-room floor.',
      ),
      miss(
        'A broad strategic narrative with no specific tasks, to keep options open',
        'Vague narrative without owners and deadlines is how meetings end with agreement but no action; the SoC exists precisely to assign concrete taskings.',
        'Open-ended narrative produces no action. The SoC must name tasks, owners, and timelines.',
      ),
    ],
    lesson:
      'A Summary of Conclusions is the NSC system\'s action record: it states what was decided, assigns taskers with named owners and due dates, and preserves meaningful dissent. Its purpose is to convert a meeting into accountable follow-through. The classic failures are recording agreement with no owner, scrubbing dissent, or producing narrative without concrete taskings.',
    source,
    generated: true,
  },
  {
    id: 7619029,
    chapter: 'Interagency Process and Decision Making',
    title: 'Who chairs the Principals Committee',
    prompt:
      'A new staffer assumes the President personally chairs the Principals Committee. Under the typical NSC structure, who actually chairs the PC, and what does that imply?',
    correct:
      'The National Security Advisor typically chairs the Principals Committee — the senior Cabinet-level interagency forum that meets without the President, teeing up issues for Presidential decision',
    wrong: [
      miss(
        'The President chairs the PC, which is why it is the top tier',
        'When the President sits with the council it is the NSC itself, not the PC; the Principals Committee is specifically the Cabinet-level body that convenes without the President, usually chaired by the National Security Advisor.',
        'If the President is in the chair, it is the NSC, not the PC. The PC meets without the President.',
      ),
      miss(
        'The Secretary of State chairs the PC by virtue of seniority in the Cabinet',
        'Cabinet seniority does not set the chair; the National Security Advisor typically chairs the PC to keep it an honest-broker interagency forum, not a single-department-led one.',
        'It is not assigned by Cabinet rank. The chair is the official whose job is to broker across agencies.',
      ),
      miss(
        'The Chairman of the Joint Chiefs chairs the PC as principal military adviser',
        'The Chairman is a statutory adviser and attends, but does not chair the PC; the National Security Advisor does, with the Chairman serving in an advisory role.',
        'The Chairman advises; he does not run the PC. Look for the interagency-broker role instead.',
      ),
    ],
    lesson:
      'The NSC tiers run PCC (working level) → Deputies Committee (sub-Cabinet) → Principals Committee (Cabinet level). The Principals Committee is the senior Cabinet forum that meets without the President, customarily chaired by the National Security Advisor, to resolve or frame issues before they reach the President. When the President presides, the body is the National Security Council itself.',
    source,
    generated: true,
  },
  {
    id: 7619030,
    chapter: 'Interagency Process and Decision Making',
    title: 'Traditional military activity exception',
    prompt:
      'Planners propose unacknowledged battlefield-preparation activities directly tied to an upcoming, publicly acknowledged military operation. A lawyer says this may not require a covert-action Finding. On what basis?',
    correct:
      'The "traditional military activities" exception — activities (and routine support) tied to ongoing or anticipated publicly acknowledged military operations fall outside the statutory definition of covert action and are overseen by the armed services committees, not as a Finding',
    wrong: [
      miss(
        'Because any activity by the military is automatically Title 10 and never needs a Finding',
        'It is not the actor but the nature of the activity that matters; the military can conduct covert action requiring a Finding, and the carve-out here is the specific traditional-military-activities exception, not a blanket service-based exemption.',
        'The exception is about the type of activity tied to acknowledged operations, not simply about who wears the uniform.',
      ),
      miss(
        'Because the President can waive the Finding requirement for any military operation',
        'There is no general Presidential waiver of the Finding requirement; the activity is exempt because it fits the statutory traditional-military-activities exclusion, not because a waiver was invoked.',
        'No waiver power is in play. The activity simply falls outside the covert-action definition by statute.',
      ),
      miss(
        'Because unacknowledged activities are never covert action by definition',
        'Unacknowledged intent is a hallmark of covert action; the reason this particular activity escapes the Finding requirement is the traditional-military-activities exception tied to an acknowledged operation, not that unacknowledged activities are categorically excluded.',
        'Unacknowledged usually points toward covert action. The escape here is a specific statutory exception, not the secrecy itself.',
      ),
    ],
    lesson:
      'The covert-action statute (50 USC 3093) expressly excludes "traditional military activities" and routine support to them — activities connected to ongoing or anticipated, publicly acknowledged military operations. These are overseen by the armed services committees rather than via a Presidential Finding to the intelligence committees. The Title 10/Title 50 line turns on the nature and acknowledgment of the activity, not merely on who conducts it.',
    source,
    generated: true,
  },
  {
    id: 7619031,
    chapter: 'Interagency Process and Decision Making',
    title: 'The Chairman advises, CCDRs command',
    prompt:
      'A memo routes an operational order through the Chairman of the Joint Chiefs of Staff to a combatant commander. Under Goldwater-Nichols, what is the precise error?',
    correct:
      'The Chairman is the principal military adviser and may transmit communications, but is not in the operational chain of command — which runs President → Secretary of Defense → combatant commander, not through the Chairman',
    wrong: [
      miss(
        'No error — the Chairman commands all combatant commanders',
        'Goldwater-Nichols deliberately keeps the Chairman out of the operational command line; the Chairman advises and may relay, but does not command the combatant commanders.',
        'The Chairman is the top adviser, not a commander. Command does not run through him.',
      ),
      miss(
        'The error is that it should go through the relevant service chief instead',
        'Service chiefs are also outside the operational chain — they organize, train, and equip; routing through a service chief is an even clearer error than routing through the Chairman.',
        'Service chiefs are out of the operational chain too. That is not the fix.',
      ),
      miss(
        'The error is that combatant commanders cannot receive orders without congressional approval',
        'Combatant commanders receive operational orders through the President and SecDef; Congress authorizes and funds and oversees but does not insert itself into each operational order.',
        'Operational orders are an executive function. Congress is not a link in that chain.',
      ),
    ],
    lesson:
      'Goldwater-Nichols (1986) routes operational command from the President through the Secretary of Defense directly to the combatant commanders. The Chairman of the Joint Chiefs is the principal military adviser and a designated channel for communications, but is explicitly not in the command chain. Service chiefs organize, train, and equip. Drafting orders "through" the Chairman misplaces an adviser in a commander\'s slot.',
    source,
    generated: true,
  },
  {
    id: 7619032,
    chapter: 'Interagency Process and Decision Making',
    title: 'Picking authority by statute, not convenience',
    prompt:
      'Two lanes could plausibly house an activity; one carries lighter notification burdens. A lead suggests choosing that lane "to keep things simple." What is the governing principle?',
    correct:
      'The lane is determined by what the activity actually is under the relevant statute — Title 10 vs. Title 50 turns on the activity\'s legal nature, not on which oversight regime is more convenient',
    wrong: [
      miss(
        'Whichever lane the lead agency prefers controls, since they own the activity',
        'Ownership does not set the legal character of an activity; mis-housing it to dodge notification creates statutory and oversight violations regardless of agency preference.',
        'Preference does not override statute. The activity\'s legal nature, not the owner\'s wishes, picks the lane.',
      ),
      miss(
        'The lane with lighter notification is correct because it minimizes leak risk',
        'Reducing the notification footprint is not a lawful basis for classifying an activity; the statute defines the lane, and choosing for convenience invites an oversight violation, not security.',
        'Fewer notifications is not a legal justification. Pick the lane the statute assigns, then notify as required.',
      ),
      miss(
        'A coin flip is acceptable when two lanes "could plausibly" apply',
        'Genuine ambiguity is resolved by legal analysis of the activity against the statutes, not by chance; an arbitrary choice is the convenience trap in another form.',
        'Ambiguity calls for legal analysis, not randomness. The statute, applied to the facts, decides.',
      ),
    ],
    lesson:
      'The Title 10 (military operations) vs. Title 50 (intelligence/covert action) divide is set by the legal nature of the activity, not by which oversight regime is lighter. Choosing an authority for convenience — to shrink notifications or simplify paperwork — produces statutory violations and inspector-general findings. The disciplined move is to characterize the activity under the statute, then accept the notification and oversight that follow.',
    source,
    generated: true,
  },
  {
    id: 7619033,
    chapter: 'Interagency Process and Decision Making',
    title: 'Clearance and the dissent it surfaces',
    prompt:
      'A memo is sent for interagency clearance and one department returns a formal non-concurrence. The drafter wants to drop that department from the distribution to "clear" the memo. What is wrong with that?',
    correct:
      'Clearance exists to surface and preserve substantive disagreement, not to engineer unanimity — dropping a non-concurring department hides a real equity from the decision-maker, defeating the purpose of the process',
    wrong: [
      miss(
        'Nothing — once a department is removed, the memo is properly cleared',
        'Removing a stakeholder to manufacture clearance is gaming the process; the decision-maker is then deprived of a relevant agency\'s objection, which is exactly what clearance is meant to expose.',
        'Cutting the objector does not resolve the objection — it hides it. That is the opposite of what clearance is for.',
      ),
      miss(
        'It is wrong only because it slows the memo down',
        'Speed is not the issue; the substantive problem is concealing a legitimate dissent from the decision-maker, which would be wrong even if it were faster.',
        'The harm is not the delay — it is suppressing a real equity the principal needs to see.',
      ),
      miss(
        'It is fine if the dissent is moved to a classified annex no one reads',
        'Burying dissent where it will not be seen is functionally the same as deleting it; preserving dissent means putting it where the decision-maker actually encounters it.',
        'Hiding dissent in an unread annex is just concealment with extra steps. It must reach the decision-maker.',
      ),
    ],
    lesson:
      'Interagency clearance is designed to surface every relevant agency\'s position, including formal non-concurrence. The point is to give the decision-maker the real range of views and equities. Dropping a dissenting agency, or burying its objection where no one will read it, manufactures a false consensus and is among the failure modes oversight reforms were built to catch.',
    source,
    generated: true,
  },
  {
    id: 7619034,
    chapter: 'Interagency Process and Decision Making',
    title: 'Naming the implementation owner',
    prompt:
      'A decision memo lays out options, a recommendation, and agency positions, but nowhere states which agency executes the chosen course. Why is this a defect even though the analysis is strong?',
    correct:
      'Without a named implementation owner, an approved decision has no one accountable for execution — the memo produces a choice but not action, the classic "agreement with no owner" failure',
    wrong: [
      miss(
        'It is not a defect; the owning agency will naturally infer its role from context',
        'Inferred tasking is unreliable and is precisely the gap that leaves decisions unexecuted; the memo must name the owner explicitly rather than hope an agency self-identifies.',
        'Agencies do not reliably infer ownership. If it is not named, it tends not to happen.',
      ),
      miss(
        'The defect is only that the recommendation should have been omitted to avoid bias',
        'Omitting the recommendation would weaken, not strengthen, the memo; the actual defect is the missing implementation owner, and a good memo both recommends and names who executes.',
        'Dropping the recommendation is the wrong fix. The missing element is who carries out the decision.',
      ),
      miss(
        'It is not a defect because the NSC always assigns the owner verbally in the meeting',
        'Relying on an unrecorded verbal assignment leaves no accountable record; the written decision document is supposed to capture the owner so execution is traceable.',
        'Verbal-only assignment vanishes from the record. The written memo needs the owner in it.',
      ),
    ],
    lesson:
      'A decision memo must do more than enable a choice — it must enable action. Naming the implementation owner (and ideally a deadline) is what converts an approved option into executed policy. The recurring interagency failure is a strong analysis and a clean decision with no one accountable for execution, so the decision quietly dies after the meeting.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 6: Law, Authorities, and Oversight
  // ----------------------------------------------------------------------------
  {
    id: 7619035,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Confidential damage standard',
    prompt:
      'Under E.O. 13526, which damage standard corresponds to the "Confidential" classification level?',
    correct:
      'Information whose unauthorized disclosure could reasonably be expected to cause damage to national security',
    wrong: [
      miss(
        'Could reasonably be expected to cause serious damage to national security',
        '"Serious damage" is the Secret standard, one level above Confidential; using it for Confidential overstates the level\'s threshold.',
        'Serious damage = Secret. Confidential is the lowest of the three, with the plainest standard.',
      ),
      miss(
        'Could reasonably be expected to cause exceptionally grave damage to national security',
        '"Exceptionally grave damage" is the Top Secret standard, two levels above Confidential; it is far higher than the Confidential threshold.',
        'Exceptionally grave = Top Secret. That is the top of the ladder, not the bottom.',
      ),
      miss(
        'Any information whose release would embarrass an agency',
        'E.O. 13526 expressly forbids classifying to prevent embarrassment; embarrassment is a prohibited basis, not the Confidential damage standard.',
        'Embarrassment is a banned reason to classify, not a damage level. Pick the lowest damage standard instead.',
      ),
    ],
    lesson:
      'E.O. 13526 sets three levels by anticipated damage from unauthorized disclosure: Confidential (damage), Secret (serious damage), Top Secret (exceptionally grave damage). Each requires an enumerated category and an identifiable harm. Classifying to avoid embarrassment, conceal a legal violation, or restrain competition is expressly prohibited, regardless of the level chosen.',
    source,
    generated: true,
  },
  {
    id: 7619036,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Prohibited bases for classification',
    prompt:
      'A manager wants to classify a report mainly because it documents an embarrassing administrative error. Under E.O. 13526, what is the rule?',
    correct:
      'Classification is prohibited for that purpose — information may not be classified to conceal violations of law, inefficiency, or administrative error, or to prevent embarrassment',
    wrong: [
      miss(
        'It is permitted if the manager holds original classification authority',
        'Holding OCA does not authorize classifying for a prohibited purpose; the bar on concealing error or embarrassment applies regardless of who is doing the classifying.',
        'OCA lets you classify properly, not improperly. The prohibited-purpose rule still binds you.',
      ),
      miss(
        'It is permitted if the report is also marked for the lowest level, Confidential',
        'The prohibition is about the purpose, not the level; classifying to hide an error is barred at every level, including Confidential.',
        'A low level does not launder a forbidden reason. The purpose itself is illegitimate.',
      ),
      miss(
        'It is permitted as long as it is automatically declassified at 25 years',
        'A future declassification date does not cure an unlawful original purpose; you cannot classify to conceal error now and excuse it by a 25-year sunset.',
        'A declassification clock does not legalize a forbidden present-day purpose. The reason is the problem.',
      ),
    ],
    lesson:
      'E.O. 13526 forbids classifying (or keeping classified, or refusing to declassify) information in order to conceal violations of law, inefficiency, or administrative error; prevent embarrassment to a person, organization, or agency; restrain competition; or delay release of information that does not need protection. These prohibited purposes void the classification regardless of level or who applies it.',
    source,
    generated: true,
  },
  {
    id: 7619037,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Automatic declassification at 25 years',
    prompt:
      'A historian asks when permanently valuable classified records are, by default, automatically declassified under E.O. 13526. What is the general rule?',
    correct:
      'At 25 years from the date of origin for records of permanent historical value, unless a specific, narrow exemption applies — classification is not meant to be indefinite',
    wrong: [
      miss(
        'Never — once classified, records remain classified until an agency chooses to review them',
        'E.O. 13526 prohibits indefinite classification and imposes automatic declassification at 25 years for permanently valuable records; it is not contingent on an agency electing to review.',
        'Indefinite classification is barred. There is a default clock, not endless secrecy awaiting a review.',
      ),
      miss(
        'At 10 years in every case, with no exceptions',
        'While original classifiers often set durations up to 10 years where feasible, the automatic-declassification backstop for permanently valuable records is 25 years, and narrow exemptions exist; a flat 10-year rule is wrong.',
        'You are near a real number but the automatic backstop for historical records is 25, and exemptions exist.',
      ),
      miss(
        'At 50 years for all records, mirroring the FOIA exemption clock',
        'The general automatic-declassification point is 25 years; certain especially sensitive categories (e.g., confidential human sources) can extend further, but 50 years is not the baseline rule.',
        '50 years applies only to narrow extra-sensitive categories. The general backstop is shorter.',
      ),
    ],
    lesson:
      'E.O. 13526 bars indefinite classification and sets automatic declassification at 25 years from origin for classified records of permanent historical value, subject to narrow exemptions (such as those protecting confidential human sources or WMD design concepts, which can extend longer). The order\'s premise is that secrecy has a sunset, balancing protection against the public\'s eventual right of access.',
    source,
    generated: true,
  },
  {
    id: 7619038,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Emergency oral covert-action decision',
    prompt:
      'A crisis forces the President to approve a covert action orally before a written Finding can be prepared. Under 50 USC 3093, what does the law require next?',
    correct:
      'A contemporaneous written record of the decision must be made, and it must be reduced to a written Finding as soon as possible but in no event more than 48 hours after the decision',
    wrong: [
      miss(
        'No written Finding is ever required once the President has approved orally',
        'The statute permits an oral decision only as a stopgap; it still requires a contemporaneous record and a written Finding within 48 hours, so an oral approval does not eliminate the written-Finding duty.',
        'Oral approval is a bridge, not an exemption. A written Finding still follows, on a tight clock.',
      ),
      miss(
        'The written Finding may be backdated to authorize actions already taken',
        '50 USC 3093 bars findings that retroactively authorize actions already completed; the Finding documents a decision, it cannot bless past conduct after the fact.',
        'Findings cannot reach backward to legalize completed acts. The statute forbids retroactive authorization.',
      ),
      miss(
        'A written Finding is required within 60 days, mirroring the War Powers clock',
        'The 60-day figure is the War Powers withdrawal clock, not the covert-action timeline; 50 USC 3093\'s emergency rule is 48 hours to reduce an oral decision to a written Finding.',
        'You are borrowing the War Powers clock. The covert-action emergency window is 48 hours, not 60 days.',
      ),
    ],
    lesson:
      'Under 50 USC 3093, a covert-action Finding must be in writing, but if immediate action is required and time does not permit, the President may decide orally provided a contemporaneous written record is made and reduced to a written Finding within 48 hours. Findings may not retroactively authorize actions already taken. Distinguish this 48-hour rule from the War Powers Resolution\'s separate 48-hour report and 60-day clock.',
    source,
    generated: true,
  },
  {
    id: 7619039,
    chapter: 'Law, Authorities, and Oversight',
    title: 'No covert action against the domestic audience',
    prompt:
      'A proposal would use covert means to shape U.S. domestic public opinion in favor of a policy. Under 50 USC 3093, what is the legal bar?',
    correct:
      'It is flatly prohibited — no covert action may be conducted that is intended to influence United States political processes, public opinion, policies, or media',
    wrong: [
      miss(
        'It is permitted if the President signs a Finding authorizing it',
        'A Finding cannot authorize what the statute categorically bars; covert action aimed at U.S. political processes, opinion, policies, or media is prohibited outright, not merely Finding-gated.',
        'No Finding can unlock a flatly prohibited category. This one is off the table entirely.',
      ),
      miss(
        'It is permitted if the intelligence committees are notified in advance',
        'Advance notification does not legalize an activity the statute forbids; notification is the process for permissible covert action, not a cure for a categorical prohibition.',
        'Telling the committees does not make a banned activity lawful. The prohibition is substantive, not procedural.',
      ),
      miss(
        'It is permitted as long as it is classified Top Secret',
        'Classification level is irrelevant to legality; marking the program Top Secret does nothing to overcome the explicit statutory ban on influencing the domestic audience.',
        'Secrecy does not equal legality. The activity is prohibited regardless of its classification.',
      ),
    ],
    lesson:
      '50 USC 3093 expressly prohibits any covert action intended to influence United States political processes, public opinion, policies, or media. This is a categorical bar, not something a Presidential Finding or committee notification can authorize. Covert action is an instrument aimed abroad; turning it on the domestic audience is outside the statute\'s grant of authority altogether.',
    source,
    generated: true,
  },
  {
    id: 7619040,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Who is in the Gang of Eight',
    prompt:
      'In extraordinary circumstances, prior notice of a covert action may be limited to the "Gang of Eight." Which eight members is that?',
    correct:
      'The Speaker and Minority Leader of the House, the Senate Majority and Minority Leaders, and the chair and ranking member of each of the two congressional intelligence committees',
    wrong: [
      miss(
        'The President, Vice President, and the six members of the Cabinet on the NSC',
        'The Gang of Eight is a congressional notification group, not executive-branch officials; it consists of specific House and Senate leaders and intelligence-committee leaders.',
        'The Gang of Eight is in Congress, not the executive branch. It is about who gets notified, not who decides.',
      ),
      miss(
        'The chairs and ranking members of the four armed services and intelligence committees',
        'The Gang of Eight is the two intelligence committees\' leaders plus the four congressional party leaders, not the armed services committees; armed services oversee Title 10 military activities, not covert-action Findings.',
        'Armed services committees are the wrong committees here. Swap them for the chamber leaders.',
      ),
      miss(
        'All members of both congressional intelligence committees',
        'Limiting to the Gang of Eight is a narrowing from full-committee notification; it is eight specific leaders, not the entire membership of both committees.',
        'The whole point is to narrow below the full committees to just eight leaders.',
      ),
    ],
    lesson:
      'When extraordinary circumstances affecting vital U.S. interests justify it, covert-action notice may be limited to the Gang of Eight: the Speaker and House Minority Leader, the Senate Majority and Minority Leaders, and the chair and ranking member of the House and Senate intelligence committees. The default is notification to the full intelligence committees; the Gang of Eight is the narrow exception, with the restriction periodically reviewed.',
    source,
    generated: true,
  },
  {
    id: 7619041,
    chapter: 'Law, Authorities, and Oversight',
    title: 'The 60-day clock starts on the report',
    prompt:
      'Forces have been introduced into hostilities without authorization. A staffer says the 60-day withdrawal clock runs from the start of fighting. Precisely, when does the War Powers 60-day period begin?',
    correct:
      'From when the required report is submitted (or was required to be submitted) — the 60-day clock keys to the 48-hour report trigger, not to an informal start of combat',
    wrong: [
      miss(
        'From the date Congress first debates the deployment',
        'The clock is tied to the report\'s submission (or required submission), not to congressional debate; nothing about a floor debate starts or resets the 60-day period.',
        'Congressional debate does not start the clock. It runs from the report trigger.',
      ),
      miss(
        'From the date the President signs the next defense appropriations bill',
        'Appropriations are unrelated to the War Powers timeline; the 60-day period runs from the report required upon introducing forces, not from a funding signature.',
        'Funding bills have nothing to do with it. The clock keys to the report on the use of force.',
      ),
      miss(
        'From the moment the last U.S. service member departs the theater',
        'Withdrawal ends the deployment; it does not start the clock. The 60-day period runs from the report trigger and is what compels withdrawal in the first place.',
        'Departure is the endpoint, not the start. The clock begins at the report, which then forces the withdrawal.',
      ),
    ],
    lesson:
      'The War Powers Resolution requires a report within 48 hours of introducing forces into hostilities; that report (or the point at which it was required) starts the 60-day clock, extendable up to 30 days for safe withdrawal. Absent a declaration of war or specific authorization, forces must be withdrawn. Presidents have contested the provision\'s constitutionality, but the statutory mechanics tie the clock to the report, not to an informal "start of combat."',
    source,
    generated: true,
  },
  {
    id: 7619042,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Records preservation despite informality',
    prompt:
      'Substantive crisis decisions were captured only in a messaging-app thread. A colleague argues these are too informal to be federal records. What does the Federal Records Act actually turn on?',
    correct:
      'Record status turns on content and function — whether the material documents agency decisions and activities — not on the format or channel; substantive decision logs can be federal records even in a chat',
    wrong: [
      miss(
        'Only documents on official letterhead in an approved system qualify as records',
        'The Federal Records Act defines records by their documentary content and function, not by letterhead or system; substantive material in informal channels can still be a record requiring preservation.',
        'Format does not control. A substantive decision is a record wherever it lives.',
      ),
      miss(
        'Chat messages are categorically exempt because they are transitory by nature',
        'Some chat messages are transitory, but content determines status; messages documenting decisions and activities are not exempt merely because they sit in a chat app.',
        'Not all chats are transitory. Ones that record real decisions are records and must be kept.',
      ),
      miss(
        'Record status depends on the classification level of the message',
        'Classification governs handling and protection, not whether something is a federal record; an unclassified chat documenting a decision is just as much a record as a classified one.',
        'Classification is a separate axis. Record status is about content and function, not the marking.',
      ),
    ],
    lesson:
      'The Federal Records Act (44 USC ch. 31) defines records by content and function — material documenting an agency\'s organization, functions, decisions, and activities — regardless of format or channel. Substantive decision logs in a chat thread can be federal records subject to preservation. Deleting them to "tidy up" risks an unlawful records-disposal problem, not just lost institutional memory.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 7: Crisis Management and Decision Tempo
  // ----------------------------------------------------------------------------
  {
    id: 7619043,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'The SITREP leads with change',
    prompt:
      'A crisis cell\'s situation report opens with three paragraphs of unchanged background before mentioning that an adversary unit crossed a boundary overnight. How should it be reordered?',
    correct:
      'Lead with what changed (the boundary crossing) and its implications, then decisions needed and the public line, with unchanged background available below — a SITREP orients the reader to the delta first',
    wrong: [
      miss(
        'Keep the background first so the reader has full context before the new development',
        'A time-pressed principal may stop reading before reaching the change; a SITREP front-loads the delta precisely so the most important new fact is not buried behind static context.',
        'Context-first buries the news. The reader needs the change up top, not after three stale paragraphs.',
      ),
      miss(
        'Open with "the situation remains dynamic" to set an appropriately cautious tone',
        '"The situation remains dynamic" is non-information that answers no decision-maker question; the opening should be the specific change and its implications, not a tonal filler.',
        'That phrase says nothing. Replace it with the concrete thing that changed.',
      ),
      miss(
        'Lead with the full order of battle so the reader can assess the change themselves',
        'Dumping the order of battle offloads the analysis onto the reader; the SITREP\'s value is to identify and interpret the change, not to hand over raw data to be parsed under time pressure.',
        'Do not make the principal find the change in raw data. Identify and interpret it for them.',
      ),
    ],
    lesson:
      'A crisis situation report exists to orient leaders to the delta: what changed, why it matters, what decisions it forces, and the public line — with unchanged background demoted below or omitted. Leading with stale context, tonal filler like "remains dynamic," or a raw data dump all bury the one thing the reader urgently needs: the new development and its implications.',
    source,
    generated: true,
  },
  {
    id: 7619044,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Decision that cannot wait',
    prompt:
      'During a fast-moving crisis, a cell faces a dozen open issues. To set tempo correctly, what is the first triage question the lead should force?',
    correct:
      'Which decision genuinely cannot wait for the next cycle — separating the one or two time-critical decisions from those that can be deliberated at normal battle rhythm',
    wrong: [
      miss(
        'Which issue has the most documentation already prepared',
        'Readiness of paperwork is not urgency; triaging by which packet is thickest can elevate a non-urgent issue over a genuinely time-critical decision.',
        'Most-prepared is not most-urgent. Sort by what cannot wait, not by what happens to be written up.',
      ),
      miss(
        'Which issue the most senior principal cares about personally',
        'Principal interest matters for prioritization later, but crisis tempo is set by time-criticality; a senior\'s pet issue that can wait should not crowd out a decision that genuinely cannot.',
        'Seniority of interest is not the same as time-criticality. Lead with what the clock forces.',
      ),
      miss(
        'Which issue will generate the most favorable press if resolved quickly',
        'Press payoff is not a triage criterion; setting tempo by media optics risks deferring a genuinely urgent decision in favor of a photogenic one.',
        'Optics do not set tempo. The triage question is about the clock, not the cameras.',
      ),
    ],
    lesson:
      'Crisis tempo is governed by separating the truly time-critical from the merely open. The first triage question is which decision cannot wait for the next cycle; those get immediate attention, while the rest are deliberated at normal battle rhythm. Triaging by paperwork readiness, seniority of interest, or press appeal misallocates the cell\'s scarcest resource — attention under time pressure.',
    source,
    generated: true,
  },
  {
    id: 7619045,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Bounding uncertainty under press pressure',
    prompt:
      'Press demand a casualty figure before agencies have reconciled conflicting reports. What should the spokesperson be authorized to say?',
    correct:
      'What is confirmed, what remains unverified, and when the next update will come — bounding the uncertainty honestly rather than offering a number that may force a humiliating retraction',
    wrong: [
      miss(
        'A single confident number, because silence reads as evasion',
        'A confident-but-wrong casualty figure forces a public retraction that costs far more credibility than briefly bounded uncertainty; precision the data cannot support is worse than honest limits.',
        'A wrong number you must retract is costlier than admitting the count is not yet final. Do not guess.',
      ),
      miss(
        'Every raw, conflicting report so the press can judge for themselves',
        'Releasing unreconciled, contradictory reports without caveats produces public confusion the spokesperson then owns; bounding the uncertainty is the job, not outsourcing it.',
        'Dumping conflicting raw reports creates chaos. Bound the uncertainty; do not offload it to reporters.',
      ),
      miss(
        'A refusal to comment until the investigation is fully complete',
        'Indefinite silence abdicates the communication function and cedes the narrative; the answer is a bounded statement plus a next-update commitment, not a blackout.',
        'Total silence cedes the story. Say what is confirmed and promise the next update.',
      ),
    ],
    lesson:
      'Under press pressure, the professional move is to bound uncertainty: state what is confirmed, flag what is unverified, and commit to a next update. A confident casualty number the data cannot support invites a credibility-shredding retraction; a raw-report dump creates confusion; total silence cedes the narrative. Honest, bounded communication preserves credibility through the crisis.',
    source,
    generated: true,
  },
  {
    id: 7619046,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Public line reconciled to classified reality',
    prompt:
      'The approved public line says de-escalation is underway, but classified reporting shows the adversary is reinforcing. The team is told to "just hold the line." What is the right action?',
    correct:
      'Reconcile the line to current reporting and propose an updated public statement that stays truthful, alerting decision-makers — a public line that contradicts classified reality is a credibility time bomb',
    wrong: [
      miss(
        'Keep repeating the line, since message consistency outweighs accuracy',
        'A demonstrably false public line detonates credibility with allies, press, and the public when reality surfaces; consistency is worthless if the line is disprovable.',
        'Consistency on a false line is a liability, not a virtue. Update the line to match reality.',
      ),
      miss(
        'Leak the classified reporting so the public line is corrected by the press',
        'Unauthorized disclosure violates statutes such as 18 USC 793 and trades a long-term sourcing loss for a single news cycle; the lawful path is to update the line internally, not leak.',
        'Leaking is illegal and self-defeating. Fix the line through the process, not the press.',
      ),
      miss(
        'Say nothing internally because the statement is already approved',
        'Internal silence on a known mismatch is a documented failure mode that ends in retractions and resignations; the duty is to flag the gap and propose a corrected line.',
        'Approved-but-wrong still needs to be raised. Silence on a known mismatch is its own failure.',
      ),
    ],
    lesson:
      'A public line must stay reconciled to the classified picture. When new reporting contradicts the approved message, the move is to alert decision-makers and propose a truthful update — not to robotically repeat a line that reality will soon disprove, leak the underlying intelligence, or stay silent. A public line that contradicts the classified reality is a credibility time bomb that detonates when the truth emerges.',
    source,
    generated: true,
  },
  {
    id: 7619047,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Crisis record that survives the adrenaline',
    prompt:
      'A crisis ends and the after-action review finds decisions, owners, and partner notifications scattered across personal chats. What lightweight fix should the AAR institutionalize?',
    correct:
      'A simple, repeatable crisis-record format capturing decisions, owners, messages, and partner coordination in one preserved place — usable in the moment and compliant with records-preservation obligations',
    wrong: [
      miss(
        'A 200-page crisis-records manual covering every contingency',
        'An exhaustive manual nobody opens mid-crisis guarantees the next event repeats the same scattering; the fix must be lightweight enough to use under pressure.',
        'If it is too heavy to use during a crisis, it will not be used. Keep it lightweight and repeatable.',
      ),
      miss(
        'A rule to delete all working chats afterward to avoid clutter',
        'Deleting working records can violate the Federal Records Act and destroys exactly the institutional memory the AAR is trying to preserve; the goal is to capture and keep, not erase.',
        'Deletion is the opposite of the fix and may be unlawful. The point is to preserve the record, not purge it.',
      ),
      miss(
        'A decision to skip records entirely next time so the team can move faster',
        'Skipping records sacrifices accountability and learning for marginal speed, and leaves nothing for oversight; a lightweight format gives most of the speed without the loss.',
        'No records means no accountability and no learning. A light format is the balance, not abandonment.',
      ),
    ],
    lesson:
      'After-action reviews should turn crisis friction into a repeatable, lightweight record process: one preserved place for decisions, owners, messages, and partner coordination, usable in the moment and compliant with the Federal Records Act. The failures are an unusable doorstop manual, deleting working records (a possible records-law violation), or skipping records altogether for marginal speed.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 8: Policy Writing for Decision Makers
  // ----------------------------------------------------------------------------
  {
    id: 7619048,
    chapter: 'Policy Writing for Decision Makers',
    title: 'The decision question on page one',
    prompt:
      'A packet headed to a deputy opens with a rich situational narrative but never poses the specific choice being requested. What single element fixes the most damage fastest?',
    correct:
      'A one-sentence decision question at the top stating exactly what the deputy is being asked to decide — so the reader knows from the first line what choice the packet exists to enable',
    wrong: [
      miss(
        'A longer executive summary expanding the narrative',
        'More narrative compounds the problem; the packet already has context but no stated choice, and adding summary prose still leaves the deputy guessing what they are deciding.',
        'The packet is drowning in context already. The cure is a stated choice, not more summary.',
      ),
      miss(
        'A glossary so the deputy understands every technical term',
        'Definitions may help comprehension but do not supply the missing decision question; the deputy can know every term and still not know what they are being asked to decide.',
        'Defining terms does not tell the reader what to decide. The missing piece is the question itself.',
      ),
      miss(
        'A reordered chronology so events appear in strict time sequence',
        'Chronological tidiness does not create a decision question; a perfectly ordered timeline with no stated choice still fails the reader, who needs the ask, not a better-sequenced story.',
        'A neater timeline is still a timeline. It does not pose the choice the packet exists to resolve.',
      ),
    ],
    lesson:
      'A decision packet must put the decision question on page one: a single, concrete sentence naming the choice the reader is being asked to make. Without it, even rich, well-organized material leaves the decision-maker unsure what is being requested. The fastest fix for a context-heavy, choice-less packet is to state the decision question up top, then support it.',
    source,
    generated: true,
  },
  {
    id: 7619049,
    chapter: 'Policy Writing for Decision Makers',
    title: 'Pseudo-precision in prose',
    prompt:
      'A memo states there is "a 63.5% chance the adversary attacks within 30 days," based on judgment rather than a model. A reviewer objects. What is the writing flaw?',
    correct:
      'False (pseudo) precision — a decimal-point figure implies a rigor the underlying judgment does not have; calibrated estimative language honestly conveys the uncertainty without faking exactness',
    wrong: [
      miss(
        'The number is too low and should be rounded up to project resolve',
        'The objection is not the magnitude but the spurious precision; nudging the number for effect compounds the dishonesty rather than fixing it.',
        'The problem is the false exactness, not whether the figure is high or low. Do not tweak it for tone.',
      ),
      miss(
        'Any numeric probability is forbidden in policy writing',
        'Numbers are not categorically banned; well-founded quantification can be appropriate. The flaw is precision the judgment cannot support, which calibrated language remedies.',
        'Numbers are not the enemy. Unjustified decimal-point precision is. Calibrate to the actual basis.',
      ),
      miss(
        'The flaw is that 30 days is too specific a time window',
        'A defined time window can sharpen an estimate; the flaw is the decimal-point probability implying unwarranted rigor, not the choice to bound the timeframe.',
        'A bounded timeframe is fine and often helpful. The issue is the over-precise probability, not the window.',
      ),
    ],
    lesson:
      'Pseudo-precision dresses a reasoned judgment in decimal-point numbers that imply a rigor it lacks, misleading readers about how solid the estimate is. The fix is calibrated estimative language (or an honest range) that conveys genuine uncertainty. Numbers are not banned — unjustified precision is. Match the apparent exactness of the language to the actual strength of the basis.',
    source,
    generated: true,
  },
  {
    id: 7619050,
    chapter: 'Policy Writing for Decision Makers',
    title: 'Recommendation out of the footnote',
    prompt:
      'An analyst, wary of seeming presumptuous, tucks the actual recommendation into a footnote on page six. Why does this defeat the memo\'s purpose?',
    correct:
      'A decision-maker reading at speed will never reach a footnote on page six — the recommendation belongs up front, where it can actually be acted on; hiding it abdicates the drafter\'s job',
    wrong: [
      miss(
        'It is appropriate, because recommendations should be understated to respect the principal',
        'Understatement does not require hiding the recommendation; respecting the principal means giving them a clear, actionable recommendation up front, not making them hunt for it.',
        'Respect is not the same as concealment. A clear recommendation up front respects the reader\'s time.',
      ),
      miss(
        'The only problem is the footnote\'s formatting, not its placement',
        'Reformatting a buried footnote does not surface it; the substantive problem is location — the recommendation is out of the reader\'s path, not merely poorly styled.',
        'Prettier footnotes are still footnotes. The issue is where the recommendation sits, not how it looks.',
      ),
      miss(
        'It is fine as long as the body remains strictly neutral',
        'A neutral body plus a hidden recommendation gives the decision-maker nothing to act on; the memo is supposed to recommend visibly, then show the tradeoffs and dissent.',
        'Neutral-plus-hidden equals no usable recommendation. The memo must recommend where the reader will see it.',
      ),
    ],
    lesson:
      'The recommendation is the payload of a decision memo and must sit where a time-pressed reader encounters it — at the top, not in a footnote or appendix. Burying it to avoid seeming presumptuous abdicates the drafter\'s responsibility to recommend. A good memo states the recommendation clearly up front and then shows the options, tradeoffs, and preserved dissent that support it.',
    source,
    generated: true,
  },
  {
    id: 7619051,
    chapter: 'Policy Writing for Decision Makers',
    title: 'A durable public line',
    prompt:
      'A press office wants a punchy public line that sounds strong today. What three properties should a good public line have so it does not become a liability next week?',
    correct:
      'True, brief, and durable — accurate to the classified picture, short enough to be remembered and repeated, and robust enough to survive likely developments without forcing a retraction',
    wrong: [
      miss(
        'Maximally detailed, so it preempts every possible follow-up question',
        'Maximal detail makes a line fragile and unmemorable; the more specifics it commits to, the more likely a later development contradicts one of them and forces a correction.',
        'More detail is more surface area to be wrong. A durable line is brief, not exhaustive.',
      ),
      miss(
        'Maximally strong, even if it slightly overstates current certainty',
        'Overstating certainty is exactly what produces retractions when reality shifts; a line that sounds strong but outruns the facts is the opposite of durable.',
        'Sounding strong by overstating is how lines blow up later. Durability beats bravado.',
      ),
      miss(
        'Vague enough to mean anything, so it can never be proven wrong',
        'Studied vagueness ("the situation remains dynamic") is non-information that fails the audience and erodes trust; durability comes from being true and robust, not from saying nothing.',
        'Empty vagueness is not durability — it is non-information. A good line still says something true.',
      ),
    ],
    lesson:
      'A strong public line is true (reconciled to the classified reality), brief (memorable and repeatable), and durable (robust to likely developments so it need not be retracted). Lines fail when they are over-detailed (fragile), overstated (retraction bait), or so vague they say nothing. The craft is a short, accurate statement that still holds up after the next news cycle.',
    source,
    generated: true,
  },
  {
    id: 7619052,
    chapter: 'Policy Writing for Decision Makers',
    title: 'Length is not relevance',
    prompt:
      'A staffer defends a 40-page memo by saying it is "thorough." The principal returns it unread. What principle did the staffer miss about writing for decision-makers?',
    correct:
      'Length is not a substitute for relevance — a senior reader\'s attention is scarce, so a memo earns its keep by compressing to the decision, the key tradeoffs, and the recommendation, not by exhaustiveness',
    wrong: [
      miss(
        'Thoroughness always wins; the principal simply failed to do their job by not reading it',
        'Blaming the reader inverts the writer\'s responsibility; writing for decision-makers means respecting their scarce attention, and a memo they cannot read at decision speed has failed its function.',
        'The burden is on the writer to be readable at speed, not on the principal to wade through 40 pages.',
      ),
      miss(
        'The fix is simply a smaller font so the same content fits in fewer pages',
        'Shrinking the font preserves the same overload in less space; the real fix is compressing to the decision and tradeoffs, not cosmetically reducing page count.',
        'Cramming the text smaller does not cut the cognitive load. Compress the content, not the type size.',
      ),
      miss(
        'The memo should have been classified higher to signal its importance',
        'Classification does not make a document readable or relevant; a higher marking on a bloated memo still goes unread, and over-classification is its own problem.',
        'A higher marking does not earn attention. The issue is relevance and length, not classification.',
      ),
    ],
    lesson:
      'Writing for decision-makers is governed by the cost of the reader\'s attention. Length is not thoroughness and not relevance; a 40-page memo that goes unread serves no one. The discipline is to compress to the decision question, the essential tradeoffs, and the recommendation, with detail demoted to annexes for those who want it. Every sentence must earn its place against the reader\'s scarce time.',
    source,
    generated: true,
  },
])
