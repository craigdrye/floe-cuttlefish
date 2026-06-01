import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe nationalSecurityPolicyRoadmap top-up'

export const nationalSecurityPolicyRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ----------------------------------------------------------------------------
  // Chapter 1: Strategy, Interests, and Threats
  // ----------------------------------------------------------------------------
  {
    id: 7304000,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Tiering the interest',
    prompt:
      'A memo argues that a coup in a small, distant state "threatens U.S. interests" and recommends a large response. Before resourcing it, what should you make the author specify?',
    correct:
      'Whether the interest is vital, important, or peripheral — because the tier of the interest, not the drama of the event, should drive how much risk and resource the U.S. accepts',
    wrong: [
      miss(
        'The exact GDP of the country involved',
        'Economic size is one input to importance, but it does not by itself tell you whether a U.S. interest is vital or peripheral; many tiny states sit on vital interests and many large ones do not.',
        'Ask which category of U.S. interest is engaged, then let that tier — not the headline — set the scale of response.',
      ),
      miss(
        'A more forceful verb than "threatens"',
        'Word choice does not change the strategic stakes; escalating the language while leaving the interest undefined is exactly the rhetorical inflation that produces over-resourced responses.',
        'The fix is to grade the interest (vital/important/peripheral), not to intensify the prose around it.',
      ),
      miss(
        'Whether the response will look decisive in the press',
        'Optics is not a strategic interest; sizing a response to its press appearance is how policy ends up disproportionate to the actual stake.',
        'Strategy sizes the response to the tier of interest at stake, not to how the response reads externally.',
      ),
    ],
    lesson:
      'Not every threat to "U.S. interests" is equal. Strategists tier interests — vital (survival), important, peripheral — and match the level of risk and resource to the tier. Forcing the author to state the tier prevents a peripheral event from drawing a vital-interest response.',
    source,
    generated: true,
  },
  {
    id: 7304001,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Risk is not threat',
    prompt:
      'Two scenarios have the same probability of an adversary attack, but one would close a strategic chokepoint and the other would not. How should the risk section treat them?',
    correct:
      'Differently — risk combines threat (likelihood) with consequence (impact), so the high-consequence chokepoint scenario carries greater risk even at equal probability',
    wrong: [
      miss(
        'Identically, because the probability is the same',
        'Equating risk with probability alone drops the consequence axis; a low-likelihood, catastrophic event can outrank a likely but trivial one.',
        'Risk = likelihood × consequence. Hold likelihood constant and the higher-impact scenario is the higher risk.',
      ),
      miss(
        'Rank the more vivid scenario higher regardless of impact',
        'Vividness is a cognitive shortcut, not a risk metric; the availability heuristic inflates dramatic-but-low-impact scenarios.',
        'Rank on consequence and likelihood, not on which scenario tells a better story.',
      ),
      miss(
        'Drop consequence and rank purely on adversary capability',
        'Capability feeds the threat side, but risk also depends on what is lost if the event occurs; ignoring impact understates the chokepoint scenario.',
        'Capability is part of threat; you still have to layer in the consequence to get risk.',
      ),
    ],
    lesson:
      'A common error is to treat "risk" and "threat" as synonyms. Threat captures likelihood (capability × intent × opportunity); risk multiplies that by consequence. Two equally probable events can carry very different risk because their impacts differ.',
    source,
    generated: true,
  },
  {
    id: 7304002,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Ends, ways, means',
    prompt:
      'A strategy paper lists ambitious objectives and a long menu of activities but says little about resources. In ends-ways-means terms, where is the strategic risk?',
    correct:
      'In the mismatch between ends and means — when objectives (ends) and methods (ways) outrun available resources (means), strategic risk is the gap the strategy is silently accepting',
    wrong: [
      miss(
        'There is no risk because the objectives are clearly stated',
        'Clear ends do not eliminate risk; ambitious ends with thin means is the textbook over-extension problem, not a solved one.',
        'Strategic risk lives in the ends-ways-means balance, not in how clearly the ends are written.',
      ),
      miss(
        'In the writing style, which is too ambitious in tone',
        'Tone is cosmetic; the substantive risk is resourcing, not the confidence of the prose.',
        'Look for the resource gap (means) behind the ambition, not the ambition itself.',
      ),
      miss(
        'In having too few activities listed',
        'Adding more ways to an already under-resourced strategy widens, not closes, the ends-means gap.',
        'More activities without more resources deepens the mismatch; the issue is means, not the length of the activity list.',
      ),
    ],
    lesson:
      'Lykke\'s ends-ways-means model frames strategy as objectives (ends) pursued through methods (ways) with resources (means). Strategic risk is the gap when ends and ways exceed means. A strategy that omits resourcing is hiding its risk, not avoiding it.',
    source,
    generated: true,
  },
  {
    id: 7304003,
    chapter: 'Strategy, Interests, and Threats',
    title: 'Net assessment vs. threat list',
    prompt:
      'Leadership asks "how do we actually stand against this competitor over the next decade?" A staffer offers a list of the adversary\'s weapons. What is missing?',
    correct:
      'A net assessment — a comparison of both sides\' strengths, weaknesses, trends, and asymmetries over time, rather than a one-sided enumeration of adversary capabilities',
    wrong: [
      miss(
        'A longer list that also includes the adversary\'s older systems',
        'Adding more adversary inventory keeps the analysis one-sided; the question asks how *we* stand relative to them, which a longer enemy list cannot answer.',
        'The question is comparative; padding the adversary inventory still leaves out our side and the trends.',
      ),
      miss(
        'The dollar cost of each adversary weapon',
        'Cost data is a detail within one side\'s picture; it does not produce the head-to-head, trend-over-time balance the leader requested.',
        'A net assessment weighs both sides over time, not the price tags on one side\'s equipment.',
      ),
      miss(
        'A prediction of exactly what the adversary will buy next',
        'Point prediction of procurement is speculative and still one-sided; net assessment is about the evolving balance, not a single forecast.',
        'Replace the forecast with a two-sided comparison of strengths, weaknesses, and trends.',
      ),
    ],
    lesson:
      'A threat list catalogs one side. A net assessment — the discipline associated with the Pentagon\'s Office of Net Assessment — compares both competitors\' strengths, weaknesses, asymmetries, and trajectories over time, which is what leaders need to judge long-term standing.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 2: Deterrence, Coercion, and Escalation
  // ----------------------------------------------------------------------------
  {
    id: 7304004,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Deterrence vs. compellence',
    prompt:
      'One option aims to stop an adversary from seizing an island; another aims to make them withdraw forces they have already moved in. How should the memo label each?',
    correct:
      'The first is deterrence (prevent an action not yet taken); the second is compellence (reverse an action already taken) — and compellence is generally the harder, more escalatory task',
    wrong: [
      miss(
        'Both are deterrence, since both involve military pressure',
        'Pressure is the means, not the goal; deterrence prevents a future act while compellence forces the undoing of a completed one, and the distinction drives feasibility and escalation risk.',
        'Sort by the goal: preventing a future act vs. reversing a done one. Same pressure, different problems.',
      ),
      miss(
        'Both are compellence, since both demand the adversary change behavior',
        'Deterrence asks the adversary to *keep not acting*, which costs them no visible climbdown; compellence asks them to publicly reverse, which is why it is harder.',
        'Deterrence preserves the status quo; only the "undo what you did" option is compellence.',
      ),
      miss(
        'The labels do not matter as long as the force package is identical',
        'The labels change the difficulty and escalation profile; an identical force package can succeed at deterrence and fail at compellence because reversal demands a humiliating climbdown.',
        'The deter/compel distinction predicts how hard the task is — it is not just terminology.',
      ),
    ],
    lesson:
      'Schelling\'s core distinction: deterrence prevents an adversary from acting; compellence forces them to undo something or start doing something. Compellence is usually harder because it requires the target to visibly back down, raising both the price of compliance and the escalation risk.',
    source,
    generated: true,
  },
  {
    id: 7304005,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Denial vs. punishment',
    prompt:
      'To deter an invasion of a partner, one plan forward-deploys forces so an attack would be defeated on the ground; another threatens large retaliatory strikes afterward. Which is deterrence by denial?',
    correct:
      'The forward-deployed defense is deterrence by denial (convince the adversary the objective cannot be achieved); the retaliation threat is deterrence by punishment',
    wrong: [
      miss(
        'The retaliation threat is denial, because it denies the adversary a peaceful aftermath',
        'Denial works at the point of attack by making the objective unattainable; threatening costs *after* the fact is the definition of punishment, not denial.',
        'Denial blocks the goal during the act; punishment imposes pain afterward. The forward defense is the denial option.',
      ),
      miss(
        'Both are punishment, since both impose costs on the attacker',
        'Defeating an attack on the ground denies the objective rather than imposing post-hoc retaliatory pain; collapsing both into punishment loses the credibility difference between them.',
        'Ask whether the cost is at the moment of attack (denial) or threatened later (punishment).',
      ),
      miss(
        'Neither, because deterrence only works through nuclear weapons',
        'Deterrence operates across conventional and nuclear means; reducing it to nuclear weapons ignores the entire conventional-denial literature and most real-world cases.',
        'Deterrence is not nuclear-only; conventional denial and punishment are both standard forms.',
      ),
    ],
    lesson:
      'Deterrence by denial convinces an adversary they cannot achieve their objective (a successful defense). Deterrence by punishment threatens costs in retaliation. Denial is often more credible because defending in place "speaks loudly," while a punishment threat requires the adversary to believe you will follow through.',
    source,
    generated: true,
  },
  {
    id: 7304006,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Credibility to the right audience',
    prompt:
      'Your team is confident a threat is serious and well-publicized at home. A colleague says that proves it will deter the adversary. What is the flaw?',
    correct:
      'Credibility is judged by the target audience, not by us — a threat deters only if the adversary believes we have both the capability and the will to carry it out',
    wrong: [
      miss(
        'No flaw — a threat that is serious to us is automatically serious to them',
        'This is mirror-imaging; the adversary may discount our resolve, doubt our capability, or read domestic politics as constraining us, regardless of how serious we feel.',
        'Credibility lives in the adversary\'s assessment of our will and capability, not in our own conviction.',
      ),
      miss(
        'The flaw is that the threat was publicized, which always reduces credibility',
        'Public commitment can actually raise credibility by tying hands and engaging reputation; the real gap is whether the *adversary* believes it, not whether it was public.',
        'Publicity can strengthen a commitment; the missing test is the target\'s belief, not the act of going public.',
      ),
      miss(
        'The flaw is using a threat at all rather than a guarantee',
        'Swapping a threat for a guarantee changes the instrument but not the underlying problem: the other side still has to find your commitment credible.',
        'The issue is credibility-to-the-adversary; changing the instrument does not resolve whose belief matters.',
      ),
    ],
    lesson:
      'Deterrence is in the mind of the target. A threat works only if the adversary believes we have the capability and the will to execute it. Assuming a threat deters because *we* take it seriously is mirror-imaging — the credibility that matters is theirs, not ours.',
    source,
    generated: true,
  },
  {
    id: 7304007,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Extended deterrence strain',
    prompt:
      'An ally doubts the U.S. would risk a homeland strike to defend them. A staffer dismisses this as paranoia. Why is the ally\'s doubt analytically reasonable?',
    correct:
      'Extended deterrence is inherently less credible than self-defense — promising to risk your own annihilation on behalf of a third party strains the commitment, which is the classic credibility problem the doubt reflects',
    wrong: [
      miss(
        'It is not reasonable; alliances are legally binding so deterrence is automatic',
        'A treaty obligation does not by itself make the *threat to escalate* believable to an adversary; the commitment problem is about risk-tolerance, not the existence of a treaty clause.',
        'Treaties create obligations, not automatic credibility; the strain is in risking yourself for someone else.',
      ),
      miss(
        'It is not reasonable; the ally simply lacks confidence and needs reassurance',
        'Labeling it a confidence deficit psychologizes a genuine structural problem; even a fully confident ally faces the real question of whether the patron will absorb existential risk for them.',
        'The doubt is structural, not emotional — extended deterrence really is harder to make credible than self-defense.',
      ),
      miss(
        'It is reasonable only if the ally has no military of its own',
        'The credibility strain of extended deterrence exists regardless of the ally\'s own forces; even well-armed allies question whether a patron will run homeland risk for them.',
        'The strain comes from the patron\'s willingness to escalate, not from the ally\'s force size.',
      ),
    ],
    lesson:
      'Extended deterrence — the "nuclear umbrella" and similar guarantees — is harder to make credible than direct self-defense, because it asks a patron to risk its own destruction for a third party. Allies\' doubts about this are a recognized structural problem, which is why reassurance measures (forward forces, exercises, consultations) exist.',
    source,
    generated: true,
  },
  {
    id: 7304008,
    chapter: 'Deterrence, Coercion, and Escalation',
    title: 'Reading the escalation ladder',
    prompt:
      'Before recommending a "limited, proportionate" strike in response to a provocation, what should the options memo explicitly map?',
    correct:
      'Where the action sits on the escalation ladder and the adversary\'s plausible next rungs — so leaders see the response after our response, not just the immediate move',
    wrong: [
      miss(
        'Only the immediate military effect of the strike',
        'First-order effects ignore the adversary\'s reply; a "proportionate" strike can trigger a disproportionate counter if the next rung is not anticipated.',
        'Map the rung above ours too — the adversary moves next, and that move is part of our decision.',
      ),
      miss(
        'Only the domestic political reaction at home',
        'Home-front optics is one consideration, but escalation analysis is about the adversary\'s counter-moves; omitting them is how "limited" actions spiral.',
        'The ladder is bilateral; the adversary\'s likely climb matters more than the domestic read.',
      ),
      miss(
        'Only reassurance that the strike is legal',
        'Legality is necessary but separate; a fully lawful strike can still sit on a rung that invites uncontrolled escalation.',
        'Legality and escalation are different checks; the memo still needs the next-rung analysis.',
      ),
    ],
    lesson:
      'An escalation ladder lays out the sequence of rungs each side can climb. A responsible options memo locates the proposed action on that ladder and forecasts the adversary\'s plausible next rung, so leaders weigh the move *after* the move — not just the immediate, "proportionate" first step.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 3: Intelligence and Evidence
  // ----------------------------------------------------------------------------
  {
    id: 7304009,
    chapter: 'Intelligence and Evidence',
    title: 'Likelihood word matched to range',
    prompt:
      'Under ICD 203 estimative language, an analyst judges an event has roughly a 90% chance. Which standardized term fits?',
    correct:
      '"Very likely" — ICD 203 maps the 80-95% band to "very likely," reserving "almost certain" for the 95-99% range',
    wrong: [
      miss(
        '"Likely," because anything above even odds is simply "likely"',
        'ICD 203 makes "likely" the 55-80% band; using it for a 90% judgment understates the probability by skipping the "very likely" tier.',
        'Check the band: 90% sits in the 80-95% row, which is "very likely," not the 55-80% "likely" row.',
      ),
      miss(
        '"Almost certain," since 90% is close enough to certainty',
        '"Almost certain" is reserved for 95-99% in ICD 203; using it at 90% overstates confidence and blurs the standardized tiers.',
        '90% falls below the 95-99% "almost certain" band; it belongs to "very likely."',
      ),
      miss(
        '"High confidence," because that conveys 90%',
        'ICD 203 separates *likelihood* (very likely) from *confidence* (how solid the basis is) and warns against mixing them in one sentence — "high confidence" is not a likelihood term.',
        'Likelihood and confidence are different axes; pick the likelihood word for the probability, not a confidence label.',
      ),
    ],
    lesson:
      'ICD 203 standardizes estimative language: almost no chance (1-5%), very unlikely (5-20%), unlikely (20-45%), roughly even chance (45-55%), likely (55-80%), very likely (80-95%), almost certain (95-99%). A 90% judgment is "very likely." Likelihood is also kept distinct from confidence, which describes the strength of the underlying evidence.',
    source,
    generated: true,
  },
  {
    id: 7304010,
    chapter: 'Intelligence and Evidence',
    title: 'Likelihood and confidence not mixed',
    prompt:
      'A draft reads: "We assess with high confidence that an attack is likely." Per ICD 203 analytic standards, what is the drafting error?',
    correct:
      'Mixing a confidence level ("high confidence") and a likelihood term ("likely") in the same sentence — ICD 203 says these express different things and should not be combined in one statement',
    wrong: [
      miss(
        'Using "we assess," which is forbidden phrasing',
        '"We assess" is standard analytic voice in IC products; the problem is conflating two distinct dimensions, not the assessment verb.',
        'The verb is fine. The error is putting a confidence level and a likelihood word together.',
      ),
      miss(
        'Failing to give an exact percentage instead of "likely"',
        'ICD 203 prefers calibrated words over false numeric precision; demanding a percentage misreads the standard, which the sentence does not violate by using "likely."',
        'Worded likelihood is acceptable; the violation is the confidence-plus-likelihood combination.',
      ),
      miss(
        'The sentence is too short to be an analytic judgment',
        'Length is not an ICD 203 criterion; a short judgment can be perfectly compliant. The flaw is the mixed dimensions, not brevity.',
        'Brevity is fine; separate the confidence statement from the likelihood statement.',
      ),
    ],
    lesson:
      'ICD 203 treats *likelihood* (the probability of an event) and *confidence* (how solid the evidentiary basis is) as separate dimensions and instructs analysts not to combine a confidence level and a degree of likelihood in the same sentence. The fix: state likelihood and confidence in distinct sentences.',
    source,
    generated: true,
  },
  {
    id: 7304011,
    chapter: 'Intelligence and Evidence',
    title: 'Analysis of Competing Hypotheses',
    prompt:
      'An analyst is convinced an adversary is preparing an attack and keeps finding evidence that fits. To apply Analysis of Competing Hypotheses (ACH) properly, what should they do?',
    correct:
      'Lay out the full set of hypotheses and weight evidence by how well it *disconfirms* alternatives — favoring the hypothesis with the least inconsistent evidence rather than the most confirming evidence',
    wrong: [
      miss(
        'Gather still more evidence consistent with the attack hypothesis',
        'Stacking confirming evidence is exactly the confirmation bias ACH is designed to counter; consistent evidence is weak because it often fits several hypotheses.',
        'ACH downgrades confirming evidence; the diagnostic move is seeking evidence that would *rule out* rivals.',
      ),
      miss(
        'Favor the hypothesis with the largest pile of supporting evidence',
        'Counting supporting items rewards volume over diagnosticity; ACH selects the hypothesis with the fewest *inconsistencies*, not the most confirmations.',
        'Tally inconsistencies, not confirmations — the least-contradicted hypothesis wins under ACH.',
      ),
      miss(
        'Drop the alternatives once the lead hypothesis feels strong',
        'Discarding alternatives early reintroduces the bias ACH exists to fight; the alternatives are the benchmark that gives any evidence its diagnostic value.',
        'Keep the alternatives on the matrix — they are what make evidence diagnostic.',
      ),
    ],
    lesson:
      'ACH, developed by Richards Heuer, arrays hypotheses against evidence in a matrix and focuses on *disconfirmation*: the strongest hypothesis is the one with the least inconsistent evidence, not the most consistent. Consistent evidence is weak because it often fits multiple hypotheses; diagnostic evidence is what discriminates among them.',
    source,
    generated: true,
  },
  {
    id: 7304012,
    chapter: 'Intelligence and Evidence',
    title: 'The "absence of proof" tautology',
    prompt:
      'A report reasons: "We never confirmed the program was dismantled, which proves it is still active." A reviewer flags this. What is the named analytic failure?',
    correct:
      'Treating absence of evidence as evidence of existence — a tautology central to the Iraq WMD post-mortems, where the failure to prove destruction was wrongly taken as proof of continuation',
    wrong: [
      miss(
        'A source-validation error in the original collection',
        'The flaw is in the reasoning chain, not the sourcing; even perfect collection cannot rescue an inference that turns a gap into a positive finding.',
        'The problem is logical, not collection-side: a missing confirmation is being converted into a conclusion.',
      ),
      miss(
        'Over-classification of the underlying reporting',
        'Classification level is unrelated to the inferential error; the sentence would be just as fallacious at any classification.',
        'Classification is a handling question; this is a reasoning fallacy about absence of evidence.',
      ),
      miss(
        'A confidence-labeling error under ICD 203',
        'No confidence label is even present; the failure is the inference itself, which a confidence word would not fix.',
        'Adding a confidence label would not cure the tautology — the inference is the problem.',
      ),
    ],
    lesson:
      'A documented Iraq WMD failure was the tautology that not having proven Saddam destroyed his weapons "proved" they still existed. Absence of evidence is not evidence of existence. Analysts must state what a gap does and does not support, rather than letting an unproven negative masquerade as a positive finding.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 4: Instruments of National Power
  // ----------------------------------------------------------------------------
  {
    id: 7304013,
    chapter: 'Instruments of National Power',
    title: 'OFAC 50 Percent Rule',
    prompt:
      'A company is not on the SDN list, but two sanctioned persons each own 30% of it. A bank asks whether it can transact. What does OFAC\'s 50 Percent Rule say?',
    correct:
      'The company is blocked — its property is blocked because blocked persons own 50% or more in the aggregate, even though the company itself is not listed on the SDN List',
    wrong: [
      miss(
        'It is fine to transact, because the company is not on the SDN list',
        'The 50 Percent Rule blocks entities by ownership regardless of listing; relying only on a name check misses majority-blocked-owned entities that are blocked by operation of the rule.',
        'List-checking alone is insufficient; aggregate ownership of 50%+ by blocked persons blocks the entity.',
      ),
      miss(
        'It is fine, because neither owner individually holds 50%',
        'The rule aggregates ownership across blocked persons; 30% + 30% = 60% in the aggregate, which crosses the threshold even though no single owner reaches 50%.',
        'Aggregate the blocked owners\' stakes — two 30% holders together exceed the 50% trigger.',
      ),
      miss(
        'Only a general license is needed to proceed without further analysis',
        'A general license authorizes specific categories of activity; it is not a blanket pass, and dealings with a blocked entity require authorization, not an assumption that a GL covers it.',
        'A GL only covers what it specifies; absent an applicable license, transacting with the blocked entity is prohibited.',
      ),
    ],
    lesson:
      'OFAC\'s 50 Percent Rule blocks an entity if blocked persons own 50% or more, individually or in the aggregate, directly or indirectly — even if the entity is not itself on the SDN List. Screening a name against the list is not enough; ownership analysis is required.',
    source,
    generated: true,
  },
  {
    id: 7304014,
    chapter: 'Instruments of National Power',
    title: 'General vs. specific license',
    prompt:
      'A U.S. NGO wants to deliver humanitarian aid into a comprehensively sanctioned jurisdiction. Their activity is not covered by any published authorization. What do they need from OFAC?',
    correct:
      'A specific license — a case-by-case OFAC authorization for a transaction not already permitted by a published general license',
    wrong: [
      miss(
        'A general license, which they can self-issue for humanitarian work',
        'General licenses are issued by OFAC, not self-granted; and a GL only applies if the activity falls within its published terms, which by assumption it does not here.',
        'Parties cannot self-issue a GL; if no published GL covers the activity, the route is a specific license.',
      ),
      miss(
        'Nothing — humanitarian aid is always exempt from sanctions',
        'Humanitarian activity is often facilitated by GLs but is not automatically exempt; comprehensive programs still require authorization for transactions not otherwise permitted.',
        'Humanitarian work is frequently licensed, not categorically exempt; check for an applicable license.',
      ),
      miss(
        'A Leahy vetting clearance for the recipient population',
        'Leahy vetting applies to security assistance to foreign forces, not to humanitarian aid under sanctions; it is the wrong authority entirely.',
        'Leahy is about security-force assistance; sanctions authorization comes through OFAC licensing.',
      ),
    ],
    lesson:
      'A general license is a published, self-executing authorization for a category of transactions. A specific license is a case-by-case OFAC authorization for activity not covered by a GL. When no general license fits, the party must apply to OFAC for a specific license.',
    source,
    generated: true,
  },
  {
    id: 7304015,
    chapter: 'Instruments of National Power',
    title: 'IEEPA national emergency predicate',
    prompt:
      'A policy team wants to impose new economic sanctions on a foreign threat using IEEPA. What threshold act must occur before IEEPA authorities can be exercised?',
    correct:
      'The President must declare a national emergency with respect to an unusual and extraordinary threat that has its source in whole or substantial part outside the United States',
    wrong: [
      miss(
        'Congress must first pass a new statute authorizing the specific sanction',
        'IEEPA (50 USC 1701 et seq.) is the standing statute; it is invoked by a presidential national-emergency declaration, not by fresh case-by-case legislation.',
        'IEEPA is already the enabling law; the trigger is a national-emergency declaration, not new legislation each time.',
      ),
      miss(
        'A federal court must enjoin the foreign conduct first',
        'No prior court order is required; IEEPA is an executive-branch economic authority predicated on an emergency declaration, not on litigation.',
        'IEEPA does not run through the courts to start; the predicate is the emergency declaration.',
      ),
      miss(
        'The UN Security Council must adopt a sanctions resolution',
        'IEEPA is a domestic U.S. authority; while the U.S. often aligns with UN measures, an IEEPA program does not depend on a Security Council resolution.',
        'IEEPA is unilateral domestic authority; a Security Council vote is neither required nor sufficient.',
      ),
    ],
    lesson:
      'IEEPA (50 USC 1701-1708) authorizes the President to regulate or block transactions only after declaring a national emergency to deal with an unusual and extraordinary threat originating in substantial part abroad. That declaration is the legal predicate for OFAC designations and economic controls under the program.',
    source,
    generated: true,
  },
  {
    id: 7304016,
    chapter: 'Instruments of National Power',
    title: 'Matching the instrument to the objective',
    prompt:
      'The objective is to shore up a wavering ally\'s confidence without provoking the adversary. Which DIME emphasis best fits, and why?',
    correct:
      'Diplomatic and military assurance measures (consultations, exercises, forward presence) aimed at reassurance — because the objective is allied confidence, not coercion of the adversary',
    wrong: [
      miss(
        'Maximal economic sanctions on the adversary, to show resolve',
        'Sanctions target the adversary and can be read as escalatory; they do not directly address the stated objective of reassuring the ally and risk the very provocation to be avoided.',
        'Match the tool to the objective: the goal is allied assurance, so lead with assurance measures, not adversary punishment.',
      ),
      miss(
        'An immediate offensive military operation to preempt the adversary',
        'A preemptive strike is the opposite of "without provoking the adversary"; it maximizes escalation while only indirectly touching allied confidence.',
        'The objective explicitly avoids provocation; an offensive operation contradicts it.',
      ),
      miss(
        'A public information campaign attacking the adversary\'s legitimacy',
        'An info offensive is adversary-directed and can heighten tensions; it does not reliably build the ally\'s confidence and may invite retaliation.',
        'Reassuring the ally is the aim; an adversary-focused info campaign is aimed at the wrong audience.',
      ),
    ],
    lesson:
      'DIME (Diplomatic, Informational, Military, Economic) instruments must be matched to the objective. When the goal is reassurance of an ally rather than coercion of an adversary, assurance measures — consultations, combined exercises, forward presence — fit; adversary-directed punishment risks the escalation the objective is trying to avoid.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 5: Interagency Process and Decision Making
  // ----------------------------------------------------------------------------
  {
    id: 7304017,
    chapter: 'Interagency Process and Decision Making',
    title: 'Routing to the right NSC tier',
    prompt:
      'An issue is mostly settled at the working level but has one unresolved disagreement between two assistant secretaries that needs a sub-Cabinet decision before going to principals. Which NSC body should take it next?',
    correct:
      'The Deputies Committee — the senior sub-Cabinet interagency forum that resolves issues and ensures matters are fully prepared before they reach the Principals Committee',
    wrong: [
      miss(
        'The Principals Committee, since any disagreement should go straight to the top',
        'Sending unresolved sub-Cabinet issues directly to principals skips the DC\'s preparatory role and wastes Cabinet-level time; the DC exists precisely to tee up or resolve such items first.',
        'Principals\' time is reserved for teed-up decisions; sub-Cabinet disputes belong at the Deputies Committee first.',
      ),
      miss(
        'A Policy Coordination Committee, since PCCs make the final calls',
        'PCCs are the day-to-day working-level coordination bodies (assistant-secretary level); they coordinate, but escalating an unresolved decision is the Deputies Committee\'s function.',
        'The PCC is the working level the issue is rising *from*; the next tier up for a sub-Cabinet decision is the DC.',
      ),
      miss(
        'The full National Security Council with the President presiding',
        'Convening the President for an unresolved assistant-secretary dispute inverts the process; the NSC system filters issues upward through DC and PC so the President sees only what truly needs them.',
        'The President sits at the apex; routine sub-Cabinet disputes are resolved well below that, at the DC.',
      ),
    ],
    lesson:
      'The NSC system runs in tiers: Policy Coordination Committees (PCCs, assistant-secretary, day-to-day coordination), the Deputies Committee (sub-Cabinet, resolves and prepares issues), and the Principals Committee (Cabinet-level). An unresolved sub-Cabinet decision goes to the Deputies Committee, which also ensures issues are ready before they reach principals.',
    source,
    generated: true,
  },
  {
    id: 7304018,
    chapter: 'Interagency Process and Decision Making',
    title: 'Who commands operational forces',
    prompt:
      'During a crisis, a staffer drafts a tasker directing the Army Chief of Staff to conduct an operation. Why is this chain wrong under Goldwater-Nichols?',
    correct:
      'Operational command runs from the President through the Secretary of Defense to the combatant commanders — not through the service chiefs, who organize, train, and equip forces but do not exercise operational command',
    wrong: [
      miss(
        'It is not wrong; service chiefs command their service\'s forces in combat',
        'Goldwater-Nichols specifically removed the service chiefs from the operational chain; they man, train, and equip, while combatant commanders fight the forces.',
        'Since 1986 the service chiefs are out of the operational chain; tasking them to run an operation is the classic error.',
      ),
      miss(
        'It is wrong only because the Chairman of the Joint Chiefs should issue the order',
        'The Chairman is the principal military adviser and a conduit for communications, but the Chairman is not in the operational command chain either; command runs to the combatant commander.',
        'The Chairman advises and transmits but does not command; the operational order belongs to the combatant commander.',
      ),
      miss(
        'It is wrong because only Congress can direct a military operation',
        'Congress authorizes and funds and oversees, but directing an operation is an executive command function; the issue is *which* executive chain, not whether Congress runs operations.',
        'This is about the executive operational chain (President-SecDef-CCDR), not congressional direction.',
      ),
    ],
    lesson:
      'Goldwater-Nichols (1986) streamlined the operational chain to run from the President through the Secretary of Defense directly to the combatant commanders, bypassing the service chiefs. The services organize, train, and equip; combatant commanders employ the forces. Tasking a service chief to run an operation confuses the two roles.',
    source,
    generated: true,
  },
  {
    id: 7304019,
    chapter: 'Interagency Process and Decision Making',
    title: 'Covert action needs a Finding',
    prompt:
      'An agency proposes an activity to influence conditions abroad where the U.S. role is intended to be unacknowledged. Before it can proceed, what does 50 USC 3093 require?',
    correct:
      'A written Presidential Finding that the action is necessary and important to U.S. national security, reported to the congressional intelligence committees as soon as possible after approval and before initiation',
    wrong: [
      miss(
        'Only an internal legal memo from the agency\'s general counsel',
        'A counsel memo cannot substitute for the statutory Finding; covert action requires the President to personally find it necessary and to notify the oversight committees.',
        'Counsel review is not the authority; covert action runs on a Presidential Finding plus committee notification.',
      ),
      miss(
        'A Title 10 execute order from the Secretary of Defense',
        'A Title 10 execute order governs traditional military activities; an unacknowledged influence activity is Title 50 covert action, which needs a Finding, not a military EXORD.',
        'Title 10 EXORDs cover military operations; unacknowledged influence is Title 50 covert action requiring a Finding.',
      ),
      miss(
        'A UN Security Council mandate authorizing the activity',
        'Covert action authority is a matter of domestic U.S. law (a Presidential Finding); it does not depend on, and would not be created by, a Security Council mandate.',
        'The legal predicate is domestic — a Presidential Finding — not an international mandate.',
      ),
    ],
    lesson:
      '50 USC 3093 requires the President to issue a written Finding before a covert action, determining it is necessary to support identifiable U.S. foreign-policy objectives. The Finding is reported to the congressional intelligence committees as soon as possible after approval and before initiation; in exceptional cases notice can be limited to the Gang of Eight.',
    source,
    generated: true,
  },
  {
    id: 7304020,
    chapter: 'Interagency Process and Decision Making',
    title: 'The decision memo\'s job',
    prompt:
      'A deputy will decide among three options tomorrow. Which structure makes a decision memo do its job?',
    correct:
      'A short memo with the decision question up front, the options with tradeoffs, agency positions, relevant legal authorities, a clear recommendation, and the implementation owner',
    wrong: [
      miss(
        'A comprehensive background section first, with options at the very end',
        'Burying options behind background forces the decision-maker to dig; at decision speed the memo must front-load the question, options, and recommendation.',
        'Lead with the decision and options; background supports, it does not precede.',
      ),
      miss(
        'A single recommended course of action with no alternatives shown',
        'Presenting only the preferred option denies the deputy a real choice and hides the tradeoffs the interagency process exists to surface.',
        'A decision memo offers a real menu with tradeoffs, not a take-it-or-leave-it single option.',
      ),
      miss(
        'A neutral summary of views with no recommendation, to avoid bias',
        'Withholding a recommendation abdicates the drafter\'s analytic responsibility; a good memo recommends *and* shows the dissent, rather than going silent to seem impartial.',
        'Make a recommendation and preserve dissent; neutrality-by-omission is not impartiality.',
      ),
    ],
    lesson:
      'A decision memo exists to enable a choice at speed. It states the decision question first, lays out genuine options with tradeoffs and agency positions, cites the relevant authorities, makes a recommendation, and names who implements. Burying options, hiding alternatives, or refusing to recommend all defeat its purpose.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 6: Law, Authorities, and Oversight
  // ----------------------------------------------------------------------------
  {
    id: 7304021,
    chapter: 'Law, Authorities, and Oversight',
    title: 'War Powers 48-hour report',
    prompt:
      'The President introduces U.S. armed forces into hostilities without a prior declaration of war. Under the War Powers Resolution, what is the first reporting obligation?',
    correct:
      'A written report to the Speaker of the House and the President pro tempore of the Senate within 48 hours of introducing the forces',
    wrong: [
      miss(
        'A report within 60 days of introducing the forces',
        'The 60-day figure is the withdrawal clock, not the reporting deadline; the *report* is due within 48 hours of the introduction of forces.',
        'Don\'t confuse the clocks: 48 hours is the report; 60 days is the withdrawal deadline.',
      ),
      miss(
        'No report unless Congress first requests one',
        'The reporting duty is automatic upon introducing forces into hostilities; it does not wait for a congressional request.',
        'The 48-hour report is self-triggering on the use of force, not request-driven.',
      ),
      miss(
        'Notification only to the two intelligence committees',
        'The War Powers report goes to the Speaker and the Senate President pro tempore; intelligence-committee notification is the separate regime for covert action under 50 USC 3093.',
        'War Powers reports go to House/Senate leadership; intelligence committees handle covert-action findings.',
      ),
    ],
    lesson:
      'The War Powers Resolution (1973) requires the President to report in writing to the Speaker and the Senate President pro tempore within 48 hours of introducing forces into hostilities. That report starts the 60-day clock (extendable 30 days for safe withdrawal) within which forces must be withdrawn absent a declaration of war or specific authorization.',
    source,
    generated: true,
  },
  {
    id: 7304022,
    chapter: 'Law, Authorities, and Oversight',
    title: 'War Powers 60-day clock',
    prompt:
      'No declaration of war or specific statutory authorization has been enacted. What does the War Powers Resolution\'s 60-day provision require?',
    correct:
      'Withdrawal of the committed forces within 60 days of the required report, with up to 30 additional days permitted if necessary for their safe withdrawal',
    wrong: [
      miss(
        'Automatic congressional approval of the deployment after 60 days',
        'The Resolution does the opposite — absent affirmative authorization it requires termination, not deemed approval; silence ends the deployment rather than blessing it.',
        'Inaction triggers withdrawal, not approval; the default after 60 days is termination.',
      ),
      miss(
        'A mandatory 90-day deployment regardless of authorization',
        'There is no floor guaranteeing 90 days; 60 days (plus up to 30 for safe withdrawal) is a ceiling on unauthorized deployment, not a minimum entitlement.',
        '60+30 is a maximum for unauthorized use of force, not a guaranteed deployment length.',
      ),
      miss(
        'A new Presidential Finding to continue past 60 days',
        'Findings govern covert action under Title 50, not War Powers troop commitments; continuation past 60 days requires congressional authorization, not a Finding.',
        'Findings are a covert-action mechanism; extending a deployment needs Congress, not a Finding.',
      ),
    ],
    lesson:
      'Absent a declaration of war or specific authorization, the War Powers Resolution requires forces to be withdrawn within 60 days of the report, extendable by up to 30 days for safe withdrawal — a 90-day outer limit. (Presidents have contested the provision\'s constitutionality, but the statutory text is the baseline a staffer must know.)',
    source,
    generated: true,
  },
  {
    id: 7304023,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Top Secret damage standard',
    prompt:
      'Under Executive Order 13526, what damage standard distinguishes the "Top Secret" classification level?',
    correct:
      'Information whose unauthorized disclosure could reasonably be expected to cause exceptionally grave damage to national security',
    wrong: [
      miss(
        'Information whose disclosure could cause serious damage to national security',
        '"Serious damage" is the standard for Secret, the tier below; using it for Top Secret understates the level\'s threshold.',
        'Serious damage = Secret. Top Secret is the higher bar: exceptionally grave damage.',
      ),
      miss(
        'Information whose disclosure could cause damage to national security',
        'Plain "damage" is the Confidential standard, two tiers down; it is far below the Top Secret threshold.',
        'Damage = Confidential; Secret = serious; Top Secret = exceptionally grave.',
      ),
      miss(
        'Any information an agency head wishes to keep from the public',
        'Classification under E.O. 13526 requires an identifiable damage standard and an enumerated category; mere desire to withhold is not a lawful basis to classify.',
        'Classification needs a damage standard and category, not just a preference for secrecy.',
      ),
    ],
    lesson:
      'E.O. 13526 sets three levels by the damage their unauthorized disclosure could cause: Confidential (damage), Secret (serious damage), and Top Secret (exceptionally grave damage). Information may be classified only if it falls in an enumerated category and a classifier can identify the damage — secrecy by preference is not permitted.',
    source,
    generated: true,
  },
  {
    id: 7304024,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Original classification authority',
    prompt:
      'A GS-13 action officer believes a document they are drafting should be Secret and wants to classify it on their own authority. Under E.O. 13526, what is the problem?',
    correct:
      'Original classification can only be exercised by officials with delegated Original Classification Authority; a typical action officer instead derivatively classifies based on existing guidance, not on personal judgment',
    wrong: [
      miss(
        'There is no problem — any cleared employee can originally classify what they write',
        'A security clearance grants access, not the power to originally classify; OCA is a limited, delegated authority, not a default of holding a clearance.',
        'A clearance is about access; original classification is a separate, delegated authority (OCA).',
      ),
      miss(
        'The problem is only that Secret is too low; it should default to Top Secret',
        'Defaulting upward is itself a violation — over-classification is prohibited, and the real issue is who may classify at all, not the level chosen.',
        'The issue is authority to classify, not the level; defaulting to a higher level is also improper.',
      ),
      miss(
        'The problem is that classification requires a court order',
        'No court is involved in classification; it is an executive function governed by E.O. 13526 and exercised through delegated authority and classification guides.',
        'Classification is executive, not judicial; the constraint is delegated OCA and existing guidance.',
      ),
    ],
    lesson:
      'Under E.O. 13526, Original Classification Authority is delegated and limited (Top Secret OCA only by the President, Vice President, or designated agency heads/officials). Most personnel *derivatively* classify by applying existing classification guidance and source documents — they do not invent classifications on personal judgment.',
    source,
    generated: true,
  },
  {
    id: 7304025,
    chapter: 'Law, Authorities, and Oversight',
    title: 'Records preservation after a crisis',
    prompt:
      'After a crisis, a team wants to delete the working chats and ad hoc decision logs to "clean up." Beyond losing institutional memory, what legal issue does this raise?',
    correct:
      'Deleting working records can violate the Federal Records Act, which requires federal agencies to create and preserve records of their decisions and activities',
    wrong: [
      miss(
        'It violates ICD 203 analytic standards on confidence labeling',
        'ICD 203 governs the analytic content of intelligence products, not the retention of agency records; the records-preservation duty comes from the Federal Records Act.',
        'ICD 203 is about analytic quality; records retention is a Federal Records Act question.',
      ),
      miss(
        'It triggers a War Powers reporting requirement',
        'War Powers concerns notifying Congress about uses of force, not the disposition of internal records; deleting chats does not implicate it.',
        'War Powers is about force notifications; record deletion is a records-law issue.',
      ),
      miss(
        'Nothing legal — informal chats are never federal records',
        'Whether something is a federal record depends on content and function, not formality; substantive decision logs in chats can be records subject to preservation.',
        'Format does not control: substantive working records can be federal records regardless of the channel.',
      ),
    ],
    lesson:
      'The Federal Records Act (44 USC ch. 31) obligates agencies to make and preserve records documenting their organization, decisions, and activities. Substantive working materials — even informal chats and decision logs — can be federal records. Deleting them to tidy up can be an unlawful records-disposal problem, not just a memory loss.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 7: Crisis Management and Decision Tempo
  // ----------------------------------------------------------------------------
  {
    id: 7304026,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Speed vs. completeness',
    prompt:
      'A principal must decide within the hour, but the assessment has two material gaps that cannot be closed in time. What does good crisis practice call for?',
    correct:
      'Present the best current judgment, explicitly flag the two gaps and how they could change the picture, and recommend a decision with a defined re-look point as new information arrives',
    wrong: [
      miss(
        'Delay the decision until both gaps are fully closed',
        'In a time-bound crisis, waiting for perfect information forfeits the decision window; the adversary and events do not pause for closure.',
        'There is no time to close the gaps; decide on best judgment and schedule a re-look, don\'t wait.',
      ),
      miss(
        'Present the judgment as if the gaps did not exist, to project confidence',
        'Concealing material gaps gives false confidence and sets up the worst kind of surprise; flagging uncertainty is what preserves credibility and good decisions.',
        'Project calibrated confidence, not false certainty — name the gaps rather than hiding them.',
      ),
      miss(
        'Hand the principal every raw report and let them sort it out',
        'Dumping raw reporting under time pressure offloads the analytic burden to the decision-maker; the staffer\'s job is to synthesize and flag, not to abdicate.',
        'Synthesize and flag; do not pass the raw pile up the chain at decision time.',
      ),
    ],
    lesson:
      'Crisis decisions trade completeness for speed. The professional move is to give the best available judgment, name the material gaps and how they could shift the conclusion, recommend, and set a re-look point. Waiting for certainty, faking it, or dumping raw data all fail the decision-maker.',
    source,
    generated: true,
  },
  {
    id: 7304027,
    chapter: 'Crisis Management and Decision Tempo',
    title: 'Battle rhythm discipline',
    prompt:
      'A crisis cell is exhausted and updates are arriving at random, causing duplicate work and missed handoffs. What structural fix should the lead institute?',
    correct:
      'A defined battle rhythm — scheduled update and decision cycles, fixed product formats, and clear handoffs — so the team synchronizes effort instead of reacting at random',
    wrong: [
      miss(
        'Tell everyone to simply work harder and stay alert',
        'Effort exhortation does not fix an unsynchronized process; without scheduled cycles and handoffs the duplication and gaps persist regardless of how hard people try.',
        'The problem is structure, not effort; impose a rhythm rather than asking for more hustle.',
      ),
      miss(
        'Centralize all decisions in the lead so nothing is missed',
        'Funneling every decision through one person creates a bottleneck that slows the cell further; the fix is synchronized cycles and clear ownership, not single-point control.',
        'A single decision bottleneck makes tempo worse; distribute via defined cycles and handoffs.',
      ),
      miss(
        'Stop producing written products to save time',
        'Dropping written products destroys the shared situational picture and the record; the issue is irregular timing, not the existence of products.',
        'Keep the products but regularize their cadence; abandoning them loses the common picture.',
      ),
    ],
    lesson:
      'A battle rhythm is the scheduled cadence of meetings, updates, and decisions that keeps a crisis cell synchronized. Fixed cycles, standard product formats, and explicit handoffs prevent the duplicate work, gaps, and burnout that come from reacting to information at random.',
    source,
    generated: true,
  },

  // ----------------------------------------------------------------------------
  // Chapter 8: Policy Writing for Decision Makers
  // ----------------------------------------------------------------------------
  {
    id: 7304028,
    chapter: 'Policy Writing for Decision Makers',
    title: 'BLUF on page one',
    prompt:
      'A principal has two minutes per memo. Which opening structure respects that constraint?',
    correct:
      'Bottom-line-up-front: the recommendation and the decision being requested in the first lines, with supporting analysis below for those who read further',
    wrong: [
      miss(
        'A chronological narrative that builds to the recommendation at the end',
        'A build-to-the-finish structure assumes the reader finishes; a two-minute reader who stops early never reaches the recommendation, which is the whole point of the memo.',
        'Don\'t make the reader earn the bottom line; lead with it (BLUF) and support it afterward.',
      ),
      miss(
        'A long context section to establish credibility before recommending',
        'Front-loading context spends the reader\'s scarce attention before the ask; credibility comes from a sound recommendation and clean support, not from a context preamble.',
        'Context supports the recommendation; it should not stand in front of it for a time-pressed reader.',
      ),
      miss(
        'A list of every option in full detail with no recommendation, to stay neutral',
        'A neutral option-dump leaves the decision-maker to do the synthesis; a decision memo is supposed to recommend, then show the tradeoffs.',
        'Recommend first, then show options and tradeoffs; an undifferentiated option list is not BLUF.',
      ),
    ],
    lesson:
      'Bottom-line-up-front (BLUF) puts the recommendation and the decision requested at the very top, with analysis below. It respects a senior reader\'s scarce attention: even if they read only the first lines, they get the ask. Narratives that build to a conclusion fail the reader who stops early.',
    source,
    generated: true,
  },
  {
    id: 7304029,
    chapter: 'Policy Writing for Decision Makers',
    title: 'Separating evidence from judgment in prose',
    prompt:
      'A memo sentence reads: "The adversary is clearly mobilizing for war." A reviewer asks for a rewrite. What writing discipline are they enforcing?',
    correct:
      'Separating evidence from judgment — stating the observed facts and then the analytic inference (with confidence) so the reader can see what is seen versus what is concluded',
    wrong: [
      miss(
        'Removing all adjectives to make the prose more formal',
        'Formality is not the issue; the problem is that an inference ("for war") is fused with an unstated evidentiary basis, so the reader cannot tell observation from conclusion.',
        'The fix is to split fact from inference, not to police adjectives.',
      ),
      miss(
        'Making the sentence longer to add detail',
        'Length alone does not cure the conflation; a longer sentence that still merges evidence and judgment has the same defect.',
        'It\'s about structure, not length — present what was observed, then what you infer.',
      ),
      miss(
        'Replacing "clearly" with an exact probability percentage',
        'Swapping in a pseudo-precise percentage substitutes false precision for the real fix, which is to distinguish the underlying facts from the inference and state confidence in words.',
        'Don\'t fake precision; separate the observation from the judgment and calibrate the judgment.',
      ),
    ],
    lesson:
      'Strong policy prose separates what is observed from what is concluded. "The adversary is clearly mobilizing for war" fuses an unsourced inference with a conclusion. Better: state the indicators observed, then the analytic judgment and its confidence — so the reader can weigh the evidence behind the inference.',
    source,
    generated: true,
  },
  {
    id: 7304030,
    chapter: 'Policy Writing for Decision Makers',
    title: 'Tailoring to the tier',
    prompt:
      'The same issue will be written up for a Policy Coordination Committee working session and, later, for the Principals Committee. How should the two products differ?',
    correct:
      'The PCC product can carry more working-level detail and coordination questions; the PC product should compress to the decision, the key tradeoffs, and the recommendation that principals must actually rule on',
    wrong: [
      miss(
        'They should be identical, since the underlying facts are the same',
        'Identical products ignore the audience: principals need a compressed decision frame, while working-level coordination needs operational detail. Same facts, different altitude.',
        'Same facts, different altitude — tailor the level of detail to the tier reading it.',
      ),
      miss(
        'The PC version should be longer and more detailed than the PCC version',
        'This inverts the hierarchy; senior decision-makers have less time and need *more* compression, not more detail, than the working level.',
        'Detail decreases as you go up the tiers; the PC product is the most compressed, not the longest.',
      ),
      miss(
        'The PCC version should omit the recommendation to stay neutral at the working level',
        'Even working-level coordination benefits from a clear proposed way ahead; neutrality-by-omission stalls coordination and is not a tiering principle.',
        'Both tiers want a clear proposal; tiering changes detail and altitude, not whether you recommend.',
      ),
    ],
    lesson:
      'Tailoring to the tier is a core policy-writing skill. Working-level products (PCC) can carry detail and open coordination questions; the higher the tier, the more the product must compress to the decision, the essential tradeoffs, and the recommendation. Principals read for the choice, not the working-level mechanics.',
    source,
    generated: true,
  },
])
