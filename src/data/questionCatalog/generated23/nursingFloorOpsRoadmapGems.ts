import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const nursingFloorOpsRoadmapGems: Question[] = [
  // ----------------------------------------------------------------------------
  // Safety, Deterioration, and Quality on the Floor
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10063000,
    'Career Skills',
    'Safety, Deterioration, and Quality on the Floor',
    "The reassuring total that hides one screaming number",
    "Your post-op patient's NEWS2 adds up to 3 — well inside the green zone you would normally just keep watching. But that whole 3 comes from one vital sign: a respiratory rate that has crept up to 25, which scores 3 on its own. Everything else is perfect. The aggregate says 'relax.' What does the single parameter say, and which one should win?",
    "A score of 3 in any single parameter is a 'red score' that triggers urgent clinician review on its own, regardless of how low the total is — so this patient needs an urgent review now, because one extreme derangement can be the first sign of collapse that a comfortable average is busy concealing",
    [
      ["Trust the aggregate: a total of 3 is low-risk, so routine monitoring is the correct, evidence-based response", "The aggregate is exactly the trap NEWS2's red-score rule was built to defeat — averaging a dangerous respiratory rate against four normal values produces a calm-looking number that masks a real emergency.", "Ask whether any single parameter scores 3 before you read the total; the red-score rule overrides the sum."],
      ["Recheck in four hours, because a rising respiratory rate is uncomfortable but never urgent until oxygen saturation also drops", "Respiratory rate is usually the earliest vital to deteriorate, often before saturation falls; waiting for a second abnormal sign throws away the head start the rate just gave you.", "Treat an isolated rate of 25 as the warning, not as something to confirm later with a second failing system."],
      ["Average it differently — weight the four normal vitals more heavily so the score better reflects the patient's overall stability", "NEWS2 deliberately does not let normal values dilute an extreme one; the single-parameter rule exists precisely because re-weighting toward 'overall stability' is how floors miss early arrests.", "The whole point of the red score is that one extreme value is not allowed to be averaged away."],
    ],
    "Early-warning scores are usually read as a single total, which quietly assumes that risk adds up smoothly — that five mildly-off vitals are as worrying as one catastrophically-off one. NEWS2 rejects that assumption with the single-parameter rule: any one parameter scoring 3 demands urgent review on its own, because the body does not deteriorate as a tidy average. A respiratory rate of 25 against four perfect vitals is not a stable patient; it is a patient whose first system is failing while the others have not yet been dragged down. The deep idea is that aggregation hides extremes, and the most dangerous number on a chart is often the one the total is busy reassuring you about.",
    'Floe generated',
    true,
    "Before you read the NEWS2 total, scan for any single parameter scoring 3 — that red score escalates on its own.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10063001,
    'Career Skills',
    'Safety, Deterioration, and Quality on the Floor',
    "Why the gel pump fails the one patient who needs it most",
    "You finish caring for a patient on contact precautions for C. difficile. The alcohol hand-rub dispenser is right at the door, fast and convenient, and it kills essentially everything else you encounter all shift. Yet for this room the rule is soap and water at the sink. If alcohol destroys most pathogens on contact, why does it fail here?",
    "C. diff forms tough spores that alcohol does not kill or remove, so a quick gel rub leaves them sitting on your hands — soap and water work mainly by physically washing the spores off under friction and running water, which is a removal mechanism, not a chemical kill",
    [
      ["Alcohol does kill C. diff spores, but too slowly; if you let the gel dry for a full minute it works as well as soap", "Drying time is the fix for vegetative bacteria, not for C. diff spores — the spore coat resists alcohol regardless of contact time, which is why removal by washing, not waiting, is the answer.", "The barrier is the spore's chemistry, not the dose of alcohol; more dwell time does not breach it."],
      ["Soap and water are required because they chemically kill the spores, whereas alcohol only stuns them temporarily", "Standard handwashing does not kill C. diff spores either; its value is mechanical — friction and rinsing physically carry the spores off the skin and down the drain.", "Reframe handwashing as removal, not disinfection: neither agent reliably kills the spore."],
      ["The difference is irrelevant as long as you wore gloves; hand hygiene choice does not matter after glove removal", "Gloves leak and hands get contaminated during removal, which is exactly why post-glove hand hygiene still matters — and for this organism it specifically has to be the washing that removes spores.", "Gloves reduce but do not eliminate contamination, so the removal step after them still has to be the right one."],
    ],
    "Most hand hygiene logic rests on a kill model: apply an antiseptic, it destroys the microbe, your hands are safe. C. difficile breaks that model because it survives as a spore with an armored coat that alcohol cannot penetrate. The counterintuitive resolution is that the recommended response is not a stronger killer but a different mechanism entirely — soap and water remove the spores by friction and rinsing rather than killing them in place. The lesson that lingers is that 'clean' can mean two different things, kill versus physical removal, and choosing the convenient kill-based tool against a removal problem leaves the most dangerous organism exactly where you left it: on your hands, ready to seed the next room.",
    'Floe generated',
    true,
    "Ask whether the organism is killed by your agent or merely carried away by it — C. diff spores must be physically washed off.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10063002,
    'Career Skills',
    'Safety, Deterioration, and Quality on the Floor',
    "Punishing the nurse who caught the mistake",
    "A nurse notices, just before giving a dose, that the prior shift hung the wrong concentration of a drip. She fixes it, no patient is harmed, and she files a near-miss report. Management's instinct is to formally discipline whoever made the original error to 'send a message.' Under a just-culture safety model, why is that instinct quietly self-defeating?",
    "Reflexive punishment teaches everyone that surfacing errors is dangerous, so the next near miss goes unreported and the system loses its only early warning — just culture instead asks whether the error came from a system flaw versus reckless conduct, and protects honest reporting so the latent hazard actually gets fixed",
    [
      ["The instinct is correct: visible discipline deters carelessness, and fear of consequences is the most reliable way to drive error rates down", "Fear drives reporting underground rather than driving errors down; the hazard that caused the mix-up stays in place, now invisible, while staff learn to hide rather than flag the next one.", "Deterrence assumes errors come from choosing to be careless; most come from system design that punishment never touches."],
      ["Just culture means no one is ever held accountable for anything, so the original nurse simply faces no consequence at all", "Just culture is not blanket amnesty — it still distinguishes honest slips from reckless or malicious conduct, holding the latter accountable; it protects the reporting of error, not the right to behave dangerously.", "The dividing line is conduct type (slip vs. recklessness), not a blanket of no consequences."],
      ["Focus the response on the catcher: reward her publicly and let the original error go entirely uninvestigated", "Praising the catch is fine, but skipping the investigation wastes the near miss — the point of the report is to find and fix the system flaw that set the trap, not just to celebrate the person who happened to step over it.", "A near miss is data about the system; the response is analysis, not only applause for the individual."],
    ],
    "Safety reporting depends on a fragile bargain: staff will surface their own and others' errors only if doing so feels safe. Just culture formalizes that bargain by separating blameless human error and system-induced slips from genuinely reckless behavior, and protecting the former. The trap in 'sending a message' through punishment is that it optimizes for the wrong variable — it suppresses reports rather than hazards, so the unit grows quieter and more dangerous at the same time. The deep tension is that the most informative event a floor can have is a near miss, a free preview of an accident, and a culture that punishes the people closest to it is paying to make itself blind precisely where it most needs to see.",
    'Floe generated',
    true,
    "Ask what the punishment teaches the next person who notices an error — and whether it fixes the system flaw or just hides it.",
    { challengeRating: 6 },
  ),

  // ----------------------------------------------------------------------------
  // Staffing, Acuity, and Workload
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10063003,
    'Career Skills',
    'Staffing, Acuity, and Workload',
    "Both nurses have four patients, so it's fair — right?",
    "As charge, you split the floor so each nurse carries exactly four patients. One nurse has four stable patients awaiting discharge; the other has four with continuous drips, a fresh post-op, hourly neuro checks, and a confused fall-risk. A nurse complains the split is unfair. By the numbers it is perfectly equal. What is the assignment actually equalizing, and what is it ignoring?",
    "It equalizes headcount but ignores acuity and workload — the real burden is set by dependency, treatments, monitoring frequency, and safety risk, so four high-acuity patients can be several times the load of four stable ones, and a 'numerically fair' split can be genuinely unsafe",
    [
      ["The split is fair and defensible: equal patient counts are the recognized standard of equity, and acuity differences average out over a shift", "Acuity does not average out within a single shift — the drip titrations and neuro checks all land on one nurse in real time; equal counts measure the wrong thing, which is why acuity-based staffing exists.", "Counting patients measures quantity, not the work each patient generates; the burdens do not cancel."],
      ["Fairness should instead be measured purely by total diagnoses on each side, so reassign until the diagnosis counts match", "Diagnosis count is just another headcount in disguise; it still ignores dependency, treatment burden, and the minute-to-minute monitoring that actually consumes a nurse's time.", "Swapping one tally (patients) for another (diagnoses) repeats the same error of counting instead of weighing."],
      ["Give the busier nurse a fifth, lighter patient to 'balance' the assignment so both sides feel they carry the same number", "Adding patients to the already-overloaded nurse worsens the imbalance you are trying to fix; the remedy is to move acuity off that side, not to pile more headcount onto it.", "The fix is redistributing burden, not equalizing counts upward onto the heavier assignment."],
    ],
    "Nurse staffing is almost always discussed in ratios — four-to-one, six-to-one — because counts are easy to see and easy to defend. But a count is a proxy, and a bad one: the actual work a patient generates comes from dependency, treatment intensity, monitoring frequency, and safety risk, none of which appear in the headcount. The 'numeric parity' fallacy is believing that equal numbers mean equal load, when four titratable drips with hourly checks can outweigh four discharges several times over. The lasting insight is that fairness and safety live in the units you choose to measure: pick patients-per-nurse and you can build an assignment that is perfectly equal on paper and quietly hazardous at the bedside.",
    'Floe generated',
    true,
    "Ask what one patient actually costs in nursing time — treatments, monitoring, dependency, risk — not just how many bodies are in beds.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10063004,
    'Career Skills',
    'Staffing, Acuity, and Workload',
    "The float nurse who is licensed for everything and ready for nothing",
    "A no-show leaves you short, and the float pool sends a competent, licensed RN. Relieved, you hand her the hardest assignment on the unit — three fresh chemo patients and a complex titratable drip — reasoning that an RN license means an RN can do RN work. By morning you have several near misses. Where did the 'licensed equals competent here' assumption break down?",
    "A license certifies broad professional scope, not unit-specific familiarity — the float nurse may have never managed this chemo protocol or this drip, so safe staffing matches the float to tasks within her actual competency and pairs unfamiliar work with backup, rather than stacking the unit's most specialized load onto its least oriented nurse",
    [
      ["Nothing broke down conceptually: an RN license legally covers all RN tasks, so assigning the hardest work to any licensed RN is always sound", "Legal scope is not the same as demonstrated, unit-specific competency; the license permits the task but does not guarantee the nurse has ever performed this protocol safely on this floor.", "Separate 'allowed to' from 'practiced at' — staffing safety depends on the second, not just the first."],
      ["The real error was assigning the float any patients at all; float nurses should only ever observe and never take an assignment", "Floats are essential and fully capable within their competencies; the fix is matching them to appropriate work with support, not benching skilled help in the middle of a staffing crisis.", "The remedy is competency-matched assignment plus backup, not refusing to use the float at all."],
      ["Give the float the heaviest load but tell her to simply call you for anything unfamiliar, which fully resolves the competency gap", "An informal 'call me' does not resolve an assignment built on unfamiliar specialty work — she may not recognize what she does not know, and you cannot reliably backstop a whole high-acuity load by phone.", "Backup supplements a competency-matched assignment; it cannot substitute for one that is mismatched from the start."],
    ],
    "It is tempting to treat a professional license as a guarantee of interchangeability: an RN is an RN, so any RN can take any RN assignment. But a license certifies a broad legal scope, while bedside safety depends on narrow, situated competence — has this specific nurse run this specific protocol, on this unit, recently? The failure mode is stacking a unit's most specialized, least forgiving work onto the person with the least orientation to it, precisely because their credential made them look like a drop-in replacement. The deeper point is that competence is contextual, not portable, and good staffing matches people to the tasks they can actually do safely now, reserving the specialized load for those oriented to it and giving unfamiliar work real backup.",
    'Floe generated',
    true,
    "A license says what a nurse may legally do; it does not say what she has actually practiced on this unit. Match to competency, not credential.",
    { challengeRating: 6 },
  ),

  // ----------------------------------------------------------------------------
  // Handoffs, Escalation, and Communication
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10063005,
    'Career Skills',
    'Handoffs, Escalation, and Communication',
    "The story that starts on admission day and buries the emergency",
    "You page the on-call provider about a patient whose blood pressure just crashed. You begin, naturally, at the beginning: 'So he came in Tuesday for cellulitis, and his home meds are...' three sentences in, the provider is still waiting to learn why you called. SBAR exists to fix exactly this. What does leading the call the SBAR way actually change?",
    "SBAR front-loads the Situation and the Recommendation so the acute change and your ask come first — 'his pressure just dropped to 78/40, I need you at the bedside now' — and the background becomes supporting detail; chronological storytelling instead buries the one urgent fact under days of history the provider does not yet need",
    [
      ["Lead with the full background first; a provider cannot safely act on a blood pressure until they have heard the complete admission history in order", "Reversing the order is the whole point of SBAR — in an acute event the provider needs the situation and ask immediately and can absorb history afterward; front-loading days of context delays the response the patient needs now.", "Urgent calls invert narrative order: the punchline (situation and ask) comes first, history second."],
      ["SBAR's value is mainly that it makes the call sound more professional and polished, not that it changes what information arrives when", "SBAR is about sequence and content under time pressure, not polish — it guarantees the acute change and a concrete recommendation reach the provider first, which is a clinical-safety function, not a cosmetic one.", "The benefit is the ordering of facts for fast action, not the tone of the conversation."],
      ["Drop the Recommendation entirely; it is the provider's job to decide, so a nurse stating an ask oversteps the role", "The R in SBAR is essential — a clear ask ('I need you at bedside' or 'can we get a fluid bolus') converts a vague report into an actionable one and is well within the nursing role of escalation.", "Recommendation is a request and a focusing device, not a usurpation of the provider's decision."],
    ],
    "Humans tell stories chronologically, from the beginning, and in most of life that is the right instinct. Clinical escalation inverts it. SBAR — Situation, Background, Assessment, Recommendation — deliberately puts the acute change and the concrete ask first, demoting the patient's history to supporting context the provider can take in once they know why the phone rang. The chronological 'story from day one' fails not because it is inaccurate but because it sequences the most urgent fact last, spending the provider's attention on background while a crashing patient waits. The lingering idea is that under time pressure the order in which true facts arrive is itself a safety variable: the same information, told beginning-first versus ask-first, produces a slow response or a fast one.",
    'Floe generated',
    true,
    "In an urgent call, say the acute change and your specific ask first; the history is support, not the lead.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10063006,
    'Career Skills',
    'Handoffs, Escalation, and Communication',
    "Why you repeat the order back word for word",
    "Over the phone at 2 a.m., a tired provider orders a medication. You heard '15 milligrams.' Best practice is not to simply say 'got it' and hang up, but to read the order back aloud: 'confirming, 50 milligrams of...' and the provider says 'no — one-five, fifteen.' What does this read-back step buy that an attentive 'understood' never can?",
    "Read-back closes the loop by sending your interpretation back to the source for confirmation, so a mishearing surfaces before it reaches the patient — 'understood' only confirms you heard something, not that you heard the same thing the provider said, which is exactly how a 15 becomes a 50",
    [
      ["A confident 'understood' is equivalent: if you were paying attention and heard clearly, repeating the order back adds nothing but delay", "'Understood' confirms only that you received a message, not that it matches the one sent; read-back is the sole step that catches the silent mismatch between what was said and what was heard.", "Attention prevents inattention errors but not mishearing — only echoing the content back can expose that gap."],
      ["Read-back's real purpose is legal documentation of the call, not catching errors, so a quiet note in the chart serves the same function", "Charting records the call after the fact; read-back's safety value is catching the mistake in real time, before administration, which a later note can never do.", "Documentation is retrospective; read-back is a live error-detection step, and the two are not interchangeable."],
      ["Closed-loop communication means the provider should repeat your read-back a second time, creating an endless confirmation chain", "Closed loop simply requires the receiver to read back and the sender to confirm — one round-trip closes it; there is no infinite regress, just sender, receiver, confirmation.", "A loop closes in one confirmation cycle; the model is a single round-trip, not unbounded repetition."],
    ],
    "Communication feels complete the moment a message is sent and acknowledged, but acknowledgment ('got it,' 'understood') only proves that something was received — not that what was received matches what was meant. Read-back, the core of closed-loop communication, forces the receiver's interpretation back to the sender, turning a one-way transmission into a verified round-trip and exposing mishearings like 15-versus-50 before they reach a patient. The deep idea is that the dangerous errors in spoken orders are not failures of attention but silent divergences between sent and heard meaning, invisible to both parties until one of them says the number out loud. The cheap, slightly awkward act of repeating the order back is precisely what makes that invisible gap audible.",
    'Floe generated',
    true,
    "Acknowledgment proves a message arrived; read-back proves it arrived unchanged. Echo the order back to close the loop.",
    { challengeRating: 6 },
  ),
]
