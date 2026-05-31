import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe nursingFloorOpsRoadmap top-up'

export const nursingFloorOpsRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // -------------------------------------------------------------------------
  // Chapter 1: Unit Map and Daily Rhythm
  // -------------------------------------------------------------------------
  {
    id: 7325000,
    chapter: 'Unit Map and Daily Rhythm',
    title: 'Reading the board in five minutes',
    prompt: 'A charge nurse arrives and wants to "read the unit" before assignments. Which scan most reliably surfaces the highest-risk patient first?',
    correct: 'Cross-reference census against acuity, isolation, fall/observation needs, and overnight changes, not just bed count',
    wrong: [
      miss('Count how many beds are filled and split them evenly by number', 'Even-by-number splitting is acuity-blind; the sickest patient can hide behind a tidy headcount.', 'Ask what makes a patient heavy: acuity, treatments, isolation, observation, and recent change, not the bed total.'),
      miss('Start with whichever room the previous charge nurse mentioned last', 'Recency of mention is not a risk signal; the quiet, unmentioned patient is often the one deteriorating.', 'Build the read from the whole board, then route attention by documented risk rather than who got talked about.'),
      miss('Ask which patients have the most demanding families', 'Family demand is a workload factor but does not identify clinical risk; it drives squeaky-wheel attention.', 'Separate who is loud from who is sick; the risk scan should rank physiologic and safety risk first.'),
    ],
    mentorHint:
      'A charge nurse\'s first scan should find hidden risk, not just distribute rooms evenly. Patient load is shaped by acuity, isolation, observation, recent change, and safety needs, so the board read should combine census with those risk signals.',
    lesson: 'Reading a unit means mapping census against acuity, isolation burden, observation needs, and overnight changes. The headcount tells you how many patients there are, not which one is about to fall, deteriorate, or be missed.',
    source,
    generated: true,
  },
  {
    id: 7325001,
    chapter: 'Unit Map and Daily Rhythm',
    title: 'Purposeful hourly rounding',
    prompt: 'A unit adopts purposeful hourly rounding to cut falls and call-light volume. What is the defining feature that makes it work rather than just "checking in"?',
    correct: 'Proactively addressing the predictable needs (pain, position, toileting, possessions) on a reliable schedule before the patient calls',
    wrong: [
      miss('Walking past every room once an hour to confirm the patient is breathing', 'A drive-by sighting is not rounding; it addresses none of the needs that drive call lights and falls.', 'Rounding works by anticipating the recurring needs, not by confirming presence; name the "Ps" you address each round.'),
      miss('Answering call lights faster once they go off', 'Faster reactive response still leaves the patient waiting and reaching; rounding is meant to be proactive.', 'The point is to meet needs before the light, so unassisted toileting attempts and falls drop.'),
      miss('Documenting a round only when something abnormal is found', 'Exception-only documentation hides whether rounding actually happened and breaks accountability for the schedule.', 'Reliable rounding is documented every round so the pattern, not just the exceptions, is auditable.'),
    ],
    mentorHint:
      'Purposeful rounding works because it anticipates the predictable reasons patients call or get up unsafely. Think of it as a reliable prevention routine: pain, position, toileting, and needed items are addressed before the patient has to improvise.',
    lesson: 'Purposeful hourly rounding reduces falls and call-light use by reliably anticipating predictable needs — pain, position, toileting, and personal items — before the patient has to call. The discipline is proactive and scheduled, not a reactive walk-by.',
    source,
    generated: true,
  },
  {
    id: 7325002,
    chapter: 'Unit Map and Daily Rhythm',
    title: 'Huddle versus rounds',
    prompt: 'A new charge nurse uses "huddle" and "rounds" interchangeably. What distinction matters operationally?',
    correct: 'A huddle is a brief whole-team stand-up to flag unit-level risks and plans; rounds are patient-by-patient reviews of clinical status and care',
    wrong: [
      miss('They are the same event described with two different words', 'Collapsing the two loses the unit-level situational awareness that a huddle provides separate from bedside review.', 'One is a short team-wide risk briefing; the other is patient-by-patient. They serve different altitudes.'),
      miss('A huddle is only for managers; rounds are only for nurses', 'Huddles are deliberately interdisciplinary and frontline; restricting them to managers defeats the purpose.', 'Think about who needs shared awareness of unit risks versus who reviews each patient.'),
      miss('Rounds happen daily; huddles happen only after a safety event', 'Effective units huddle routinely (often per shift) for proactive awareness, not just reactively after an event.', 'Huddles are a routine proactive tool; tie them to the start of a shift, not to incidents.'),
    ],
    mentorHint:
      'Huddles and rounds operate at different altitudes. A huddle creates shared situational awareness for the unit, while rounds dive into the status and care plan for individual patients.',
    lesson: 'A safety huddle is a short, whole-team stand-up that builds shared situational awareness of unit-level risks, staffing, and plans. Rounds are the patient-by-patient review of clinical status. Both matter; conflating them loses the unit-wide view.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Chapter 2: Staffing, Acuity, and Workload
  // -------------------------------------------------------------------------
  {
    id: 7325003,
    chapter: 'Staffing, Acuity, and Workload',
    title: 'Assignment despite objection',
    prompt: 'A nurse believes a proposed assignment is unsafe but the charge nurse cannot change it. What is the most defensible action that both protects patients and the nurse?',
    correct: 'Accept the assignment to keep patients covered while formally documenting the objection through the facility safe-staffing/chain-of-command process',
    wrong: [
      miss('Refuse the assignment and leave the patients uncovered until staffing is fixed', 'Walking away from accepted patients can constitute abandonment and removes the only coverage they have.', 'Patients still need a nurse; the lever is to escalate and document, not to abandon coverage.'),
      miss('Accept it silently and say nothing so the shift moves along', 'Silent acceptance leaves no record of the safety concern and lets the unsafe pattern recur unchallenged.', 'Coverage and a documented objection are not mutually exclusive; do both.'),
      miss('Take the assignment and quietly skip the least urgent tasks to cope', 'Quietly rationing care creates undocumented missed care and hidden risk rather than addressing the staffing gap.', 'The fix is to surface the gap upward, not to absorb it invisibly through cut corners.'),
    ],
    mentorHint:
      'Unsafe-assignment processes try to protect two duties at once: patients still need coverage, and the safety concern needs a clear record and escalation path. The most defensible action keeps care going while making the staffing risk visible through chain of command.',
    lesson: 'When a nurse judges an assignment unsafe but cannot change it, the defensible move is to keep patients covered while formally documenting the objection through the facility chain-of-command or assignment-despite-objection process. Abandoning patients and silent acceptance are both worse.',
    source,
    generated: true,
  },
  {
    id: 7325004,
    chapter: 'Staffing, Acuity, and Workload',
    title: 'Missed care as a signal',
    prompt: 'On consistently understaffed shifts, ambulation, mouth care, and repositioning are the tasks most often left undone. In the research on unfinished/rationed nursing care, what does this pattern indicate?',
    correct: 'Time scarcity is forcing implicit rationing, and these omissions predict downstream harm like falls, pressure injuries, and infections',
    wrong: [
      miss('It proves those tasks were never clinically necessary in the first place', 'Tasks are not optional just because they get cut; omitting them is linked to measurable patient harm.', 'Ask whether the task was skipped because it was unneeded or because there was no time; the literature points to time scarcity.'),
      miss('It means the nurses involved are simply less diligent than their peers', 'Framing it as individual diligence ignores the staffing/workload driver and blames people for a system problem.', 'Look for the structural cause; missed care tracks with workload, not character.'),
      miss('It is harmless as long as medications and treatments are still given', 'Fundamental care omissions (mobility, hygiene, repositioning) independently drive falls, pressure injuries, and infections.', 'These "soft" tasks are exactly the ones whose omission shows up later as preventable harm.'),
    ],
    mentorHint:
      'Unfinished nursing care is a system signal, especially when basic prevention tasks are the first things skipped. Mobility, oral care, and repositioning may look routine, but their omission predicts measurable harm downstream.',
    lesson: 'Missed or rationed nursing care is needed care that is delayed, partially done, or left undone, usually driven by time scarcity. Fundamental care like mobility, hygiene, and repositioning is cut first and its omission predicts falls, pressure injuries, infections, and lower satisfaction.',
    source,
    generated: true,
  },
  {
    id: 7325005,
    chapter: 'Staffing, Acuity, and Workload',
    title: 'Counting the isolation tax',
    prompt: 'Two assignments have identical census and acuity, but one contains three contact-precaution rooms. Why does the precaution load justify rebalancing?',
    correct: 'Gowning, gloving, and contact-precaution workflow add real time and friction to every room entry, raising effective workload',
    wrong: [
      miss('Isolation rooms are actually less work because visitors stay away', 'Fewer visitors does not offset the donning/doffing time and dedicated-equipment burden added to every entry.', 'Tally the per-entry PPE and equipment steps; that is the workload the count is hiding.'),
      miss('Precautions only matter for the infection team, not the staffing grid', 'Precautions directly change frontline workflow time, which is precisely what staffing must account for.', 'The burden lands on the bedside nurse each entry, so it belongs in the assignment math.'),
      miss('It does not, because the patients are not sicker than the comparison group', 'Workload is not only acuity; precaution overhead adds time even when clinical acuity is equal.', 'Equal acuity can still mean unequal work once you count the precaution overhead per entry.'),
    ],
    mentorHint:
      'Workload is more than acuity and headcount. Contact precautions add time to every entry and exit, create equipment friction, and reduce the ease of bundling tasks, so they should be counted in assignment balance.',
    lesson: 'Contact precautions add donning, doffing, and dedicated-equipment steps to every single room entry, plus restricted workflow. Even when census and acuity match, a heavy isolation load is real additional work and is a legitimate reason to rebalance an assignment.',
    source,
    generated: true,
  },
  {
    id: 7325006,
    chapter: 'Staffing, Acuity, and Workload',
    title: 'Agency nurse orientation gap',
    prompt: 'An agency nurse is competent and licensed but has never used this unit\'s smart pumps or documentation system. What is the safest staffing response?',
    correct: 'Provide unit-specific orientation to the equipment and EHR and a clear go-to resource before assigning an independent patient load',
    wrong: [
      miss('Assign a normal full load immediately since the nurse is licensed and experienced', 'Licensure and experience do not transfer device- and EHR-specific competency; unfamiliar tools are where errors cluster.', 'Distinguish general competence from this unit\'s tools; orient to the gap before independent assignment.'),
      miss('Give the agency nurse only the sickest patients to use their experience fully', 'Stacking the highest acuity onto someone unfamiliar with the local tools maximizes the very risk you identified.', 'Match the assignment to the familiarity gap; do not concentrate complexity where the tooling is new.'),
      miss('Have the agency nurse shadow without an assignment for the entire shift', 'A full shift of shadowing wastes a needed nurse and is unnecessary once targeted orientation closes the tool gap.', 'The fix is targeted orientation plus support, not removing the nurse from care entirely.'),
    ],
    mentorHint:
      'Competence has both general and local parts. A licensed nurse may know the clinical work but still need quick orientation to the unit\'s pumps, EHR, escalation paths, and documentation expectations before working independently.',
    lesson: 'Float and agency staff bring real competence but not unit-specific familiarity with smart pumps, EHRs, or local protocols. Safe staffing closes that gap with quick orientation and a named resource before assigning an independent load, rather than assuming licensure covers everything.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Chapter 3: Patient Flow — Admissions, Transfers, and Discharges
  // -------------------------------------------------------------------------
  {
    id: 7325007,
    chapter: 'Patient Flow — Admissions, Transfers, and Discharges',
    title: 'Medication reconciliation, not transcription',
    prompt: 'On admission, a patient hands over a printed home medication list. What does medication reconciliation actually require beyond entering the list?',
    correct: 'Verify the list against multiple sources and compare it to ordered medications to resolve omissions, duplications, and dose discrepancies',
    wrong: [
      miss('Copy the printed list verbatim into the record since the patient brought it', 'Verbatim copying locks in whatever is wrong on the home list and skips the comparison that defines reconciliation.', 'Reconciliation is a comparison and resolution step, not transcription; check the list against other sources and the orders.'),
      miss('Reconciliation is complete once the admitting provider signs the orders', 'A signature does not confirm that home meds were compared to orders; the discrepancy check still has to happen.', 'The work is reconciling two lists, not obtaining a signature; mismatches must be surfaced and resolved.'),
      miss('Only prescription drugs need reconciling; OTC and supplements can be ignored', 'OTC drugs, herbals, and supplements cause real interactions and must be captured in reconciliation.', 'A complete reconciliation includes OTC, herbal, and supplement use, not just prescriptions.'),
    ],
    mentorHint:
      'Medication reconciliation is a safety comparison, not a copy task. The goal is to find and resolve gaps between what the patient actually takes, what the record says, and what the current orders will continue, stop, or change.',
    lesson: 'Medication reconciliation is comparing the patient\'s actual home medications (verified across sources, including OTC and supplements) against the medications ordered, then resolving every omission, duplication, and discrepancy. Copying a list is transcription, not reconciliation, and it propagates errors.',
    source,
    generated: true,
  },
  {
    id: 7325008,
    chapter: 'Patient Flow — Admissions, Transfers, and Discharges',
    title: 'ICU step-down report essentials',
    prompt: 'A patient is transferring from ICU to the floor. Which set of items is most critical to confirm in the transfer report before accepting care?',
    correct: 'Active and recently stopped drips, lines and access, pending labs/studies, code status, and mobility/activity limits',
    wrong: [
      miss('The patient\'s favorite meal and preferred wake-up time', 'Comfort preferences are nice to know but are not the safety-critical gaps that cause post-transfer adverse events.', 'Prioritize what could harm the patient if unknown: drips, lines, pending results, code status, mobility.'),
      miss('Only the admitting diagnosis, since the chart contains everything else', 'The chart lags real time; drips just stopped, lines placed, and pending criticals may not be visible yet.', 'A diagnosis is not a handoff; confirm the live, time-sensitive items that the chart may not yet reflect.'),
      miss('Whichever details the ICU nurse happens to volunteer in passing', 'Relying on what is volunteered is exactly how a stopped drip or pending critical lab gets dropped at transfer.', 'Drive the report with a checklist of safety-critical items rather than accepting an ad hoc summary.'),
    ],
    mentorHint:
      'Transfers are dangerous because live clinical details can fall between teams before the chart catches up. Prioritize information that changes immediate nursing actions: drips, lines, pending results, code status, and mobility limits.',
    lesson: 'Transfers are high-risk handoffs. Before accepting an ICU step-down, confirm the safety-critical, time-sensitive items: active and recently discontinued drips, lines and access, pending labs and studies, code status, and activity or mobility limits. The chart often lags the patient\'s real-time status.',
    source,
    generated: true,
  },
  {
    id: 7325009,
    chapter: 'Patient Flow — Admissions, Transfers, and Discharges',
    title: 'Teach-back done right',
    prompt: 'A nurse wants to confirm a patient understands a new inhaler before discharge. Which phrasing reflects correct teach-back technique?',
    correct: '"To make sure I explained it clearly, can you show me how you\'ll use the inhaler at home?"',
    wrong: [
      miss('"You understand how to use the inhaler, right?"', 'A yes/no question invites a reflexive "yes" and tests politeness, not comprehension or skill.', 'Ask for a demonstration or explanation in the patient\'s own words, and frame the gap as your teaching, not their failing.'),
      miss('"Do you have any questions about the inhaler?"', 'Inviting questions is useful but does not verify the patient can actually perform the steps correctly.', 'Verification needs the patient to show or restate the steps, not just confirm they have no questions.'),
      miss('"I\'ve gone over the inhaler twice, so you should be all set."', 'Repetition by the nurse is not evidence of patient learning; teach-back checks the learner, not the teacher.', 'Shift from how many times you explained to whether the patient can demonstrate it back.'),
    ],
    mentorHint:
      'Teach-back tests the effectiveness of the teaching, not the patient\'s politeness or confidence. The strongest phrasing asks the patient to demonstrate or explain the skill in their own words while making it safe to reveal confusion.',
    lesson: 'Teach-back asks the patient to demonstrate or restate the instruction in their own words, framed as a check on the teaching ("to make sure I explained it well") rather than a quiz on the patient. Yes/no questions and counting repetitions do not verify understanding.',
    source,
    generated: true,
  },
  {
    id: 7325010,
    chapter: 'Patient Flow — Admissions, Transfers, and Discharges',
    title: 'Boarding pressure tradeoff',
    prompt: 'The ED is boarding admitted patients and pressuring the floor to accept the next admission into a room that is cleaned but lacks a confirmed bed assignment, orders review, and ready equipment. What is the sound operational stance?',
    correct: 'Acknowledge the system pressure and accept as fast as readiness allows, fixing the specific blockers, not skipping them',
    wrong: [
      miss('Refuse all admissions until the ED stops boarding patients', 'A blanket refusal pushes risk back onto boarded ED patients, who are often in a less monitored setting.', 'The goal is to remove the specific readiness blockers quickly, not to wall off the unit.'),
      miss('Accept instantly with no readiness check because boarding is an emergency', 'Accept-first with no readiness recreates the rushed-arrival failures that harm both the patient and the workflow.', 'Speed and readiness are not opposites; work the blockers fast rather than ignoring them.'),
      miss('Tell the ED the floor is full even though a clean room exists', 'Misrepresenting capacity is dishonest, erodes trust, and can delay care for a patient who needs the bed.', 'Be honest about the real blockers and resolve them; do not fabricate a full-house status.'),
    ],
    mentorHint:
      'Boarding creates real safety pressure, but rushed admissions create their own hazards if basic readiness is skipped. Good flow work identifies the exact blockers and clears them quickly rather than pretending readiness does not matter.',
    lesson: 'Boarding is a genuine system-level safety problem, so the floor should accept patients as quickly as true readiness allows by clearing specific blockers (bed assignment, orders review, equipment), not by skipping them or by stonewalling. Both accept-first chaos and blanket refusal shift risk elsewhere.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Chapter 4: Safety, Deterioration, and Quality on the Floor
  // -------------------------------------------------------------------------
  {
    id: 7325011,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'NEWS2 escalation thresholds',
    prompt: 'Using the standard National Early Warning Score 2 (NEWS2), an aggregate score of 7 or more should trigger which level of response?',
    correct: 'A high (emergency) response, with urgent assessment by a clinical team competent in critical care and consideration of higher-level care',
    wrong: [
      miss('Routine monitoring continued at the usual 12-hourly interval', 'A score of 7+ is the high-risk band; continuing routine 12-hourly observation ignores an emergency-level trigger.', 'Map the band: low 1-4, medium 5-6, high 7+. Seven and above is an emergency response, not routine.'),
      miss('A low-risk response handled entirely by the ward nurse alone', 'Low-risk is reserved for aggregate 1-4; a score of 7+ requires escalation beyond the ward nurse.', 'Reserve nurse-only response for the low band; the high band needs an urgent clinical/critical-care team.'),
      miss('No response is needed unless the score reaches 10 or higher', 'There is no 10 threshold in NEWS2; the emergency response is already triggered at an aggregate of 7.', 'The top escalation tier begins at 7, not 10; do not invent a higher cutoff.'),
    ],
    mentorHint:
      'Early warning scores are escalation tools, so the score band should map directly to the response intensity. For NEWS2, think in tiers: low scores stay closer to ward review, middle scores need urgent clinical review, and the highest band demands emergency-level response.',
    lesson: 'In NEWS2, an aggregate score of 1-4 is low risk (ward-nurse assessment), 5-6 is medium risk (urgent review), and 7 or more is high risk, triggering an emergency response by a team with critical-care competency. Each band maps to a defined level of escalation.',
    source,
    generated: true,
  },
  {
    id: 7325012,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'The single-parameter rule',
    prompt: 'A patient has a NEWS2 aggregate of only 3, but the new-confusion (consciousness) parameter alone scores 3. What does the scoring system require?',
    correct: 'Escalate to urgent review, because any single parameter scoring 3 triggers a medium-risk response regardless of the low aggregate',
    wrong: [
      miss('Continue routine monitoring because the total is in the low-risk band', 'The low aggregate is overridden by the single-parameter-of-3 rule; new confusion scoring 3 demands review.', 'Remember the override: one parameter at 3 escalates regardless of how low the total is.'),
      miss('Wait until the aggregate climbs to 5 before involving a clinician', 'Waiting ignores the extreme single-parameter derangement that the rule is specifically designed to catch early.', 'The whole point of the single-parameter trigger is to act before the total catches up.'),
      miss('Recheck in four hours since one abnormal value is not concerning', 'A parameter scoring 3 is an extreme derangement, and new confusion in particular has serious causes that cannot wait.', 'Treat a single 3 as a red flag, especially new confusion; do not defer for hours.'),
    ],
    mentorHint:
      'Aggregate scores can hide a single extreme abnormality. NEWS2 uses a single-parameter trigger so one severely deranged finding, especially new confusion, still prompts urgent review even when the total score looks modest.',
    lesson: 'NEWS2 includes a single-parameter trigger: any individual vital sign scoring 3 (an extreme derangement) prompts at least an urgent medium-risk response even if the aggregate is low. New-onset confusion scoring 3 is exactly the kind of finding this rule exists to escalate early.',
    source,
    generated: true,
  },
  {
    id: 7325013,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'Rapid response versus code blue',
    prompt: 'A floor nurse notes a patient is deteriorating: rising work of breathing and new hypotension, but still has a pulse and is breathing. Which activation is appropriate?',
    correct: 'Call a rapid response to bring critical-care expertise before the patient progresses to cardiopulmonary arrest',
    wrong: [
      miss('Call a code blue immediately since the patient is clearly unstable', 'Code blue is for actual or imminent cardiopulmonary arrest; this patient has a pulse and is breathing, so rapid response fits.', 'Match the call to the state: rapid response for deterioration with vitals present, code blue for arrest.'),
      miss('Wait and reassess in an hour to see whether the patient stabilizes alone', 'Waiting forfeits the early-intervention window that rapid response exists to capture, risking progression to arrest.', 'Rapid response is precisely for the pre-arrest window; do not wait for collapse.'),
      miss('Page the primary provider and take no further action until they reply', 'Relying on a single page with no backup can stall while the patient declines; rapid response guarantees a timely team.', 'A page can go unanswered; a rapid response brings a guaranteed, time-bound team to the bedside.'),
    ],
    mentorHint:
      'Rapid response is designed for the pre-arrest window: the patient is clearly deteriorating but still has signs of circulation and breathing. The decision logic is to bring expert help before waiting turns instability into a code.',
    lesson: 'A rapid response team is activated for a deteriorating but not-yet-arrested patient to bring critical-care expertise to the bedside and prevent arrest. A code blue is reserved for actual or imminent cardiopulmonary arrest. Recognizing the pre-arrest window and acting in it is the core skill.',
    source,
    generated: true,
  },
  {
    id: 7325014,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'C. difficile hand hygiene',
    prompt: 'After caring for a patient on contact precautions for Clostridioides difficile, what hand-hygiene method is required, and why?',
    correct: 'Wash with soap and water, because C. difficile spores are not reliably killed or removed by alcohol-based hand rub',
    wrong: [
      miss('Use alcohol-based hand rub, which is the standard for all contact-precaution rooms', 'Alcohol does not inactivate or remove C. difficile spores; soap-and-water washing is needed to physically remove them.', 'Spore-formers are the exception to the alcohol-rub default; recall which organism forces soap and water.'),
      miss('Either method is fine as long as gloves were worn during care', 'Gloves are not a substitute for hand hygiene, and against spores only soap-and-water washing is adequate after glove removal.', 'Hand hygiene is still required after gloves, and for C. diff that hygiene must be soap and water.'),
      miss('No hand hygiene is needed if a gown and gloves were used correctly', 'PPE reduces but does not eliminate contamination; hand hygiene after doffing is mandatory, and here it must be soap and water.', 'Always perform hand hygiene after doffing PPE; for spores it specifically means soap and water.'),
    ],
    mentorHint:
      'Most routine hand hygiene can use alcohol rub, but spore-forming organisms are the major exception. For C. difficile, the safety concept is physical removal of spores after doffing PPE, not just killing ordinary microbes.',
    lesson: 'C. difficile forms environmentally resistant spores that alcohol-based hand rub does not reliably remove. After caring for a C. diff patient, hand hygiene must be soap-and-water washing, which physically removes spores. This is the key exception to the usual alcohol-rub default.',
    source,
    generated: true,
  },
  {
    id: 7325015,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'Acute hemolytic transfusion reaction',
    prompt: 'Fifteen minutes into a transfusion, a patient develops new low back pain, chills, fever, and hypotension. What is the immediate first action?',
    correct: 'Stop the transfusion immediately, disconnect the tubing, and maintain the IV line with normal saline using new tubing',
    wrong: [
      miss('Slow the transfusion rate and continue while monitoring the symptoms', 'Slowing rather than stopping keeps incompatible blood infusing during a likely acute hemolytic reaction, worsening harm.', 'For a suspected hemolytic reaction the rule is stop, not slow; the priority is to halt the blood.'),
      miss('Give an antipyretic and resume once the fever comes down', 'Treating the fever and resuming ignores that this picture suggests hemolysis, not a benign febrile reaction.', 'New back pain and hypotension point to hemolysis; stop the unit rather than medicate-and-resume.'),
      miss('Flush the existing transfusion line with saline and keep the same tubing', 'Flushing the same tubing pushes residual incompatible blood into the patient; tubing must be changed.', 'Keep the vein open with saline on fresh tubing, not by flushing blood-contaminated tubing.'),
    ],
    mentorHint:
      'A suspected transfusion reaction is managed by stopping exposure first. Symptoms like back pain, fever, chills, and hypotension early in the transfusion suggest a serious incompatibility, so preserving IV access must be done without pushing more blood product into the patient.',
    lesson: 'Acute hemolytic transfusion reactions, usually from mislabeling/ABO incompatibility, present early with low back pain, chills, fever, and hypotension. The immediate action is to stop the transfusion, disconnect the blood tubing, and keep the line open with normal saline on new tubing, then assess and notify.',
    source,
    generated: true,
  },
  {
    id: 7325016,
    chapter: 'Safety, Deterioration, and Quality on the Floor',
    title: 'Two patient identifiers',
    prompt: 'Per Joint Commission National Patient Safety Goals, which pairing is an acceptable set of two patient identifiers before administering a medication?',
    correct: 'The patient\'s full name and date of birth, verified against the armband and the medication record',
    wrong: [
      miss('The patient\'s room number and bed letter', 'A room or bed is not unique to the person and can change, so it is explicitly not an acceptable identifier.', 'Identifiers must be person-specific and stable; location-based identifiers are disallowed.'),
      miss('The patient\'s diagnosis and assigned attending physician', 'Diagnosis and physician are shared by many patients and are not unique person-specific identifiers.', 'Pick attributes unique to the individual, like name and date of birth, not shared clinical attributes.'),
      miss('The nurse\'s visual recognition of a patient cared for all week', 'Visual recognition is error-prone and not an approved identifier; two stated/verified identifiers are still required.', 'Familiarity is not an identifier; verify two approved identifiers every time, even for known patients.'),
    ],
    mentorHint:
      'Patient identifiers must identify the person, not the location, diagnosis, or staff familiarity. Safe medication administration requires matching two stable patient-specific identifiers against the record every time.',
    lesson: 'The Joint Commission requires at least two person-specific identifiers (commonly full name and date of birth) verified against the armband and record before medications, blood, or procedures. Room number is explicitly excluded because it is not unique and can change.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Chapter 5: Handoffs, Escalation, and Communication
  // -------------------------------------------------------------------------
  {
    id: 7325017,
    chapter: 'Handoffs, Escalation, and Communication',
    title: 'Mapping SBAR',
    prompt: 'A nurse pages a provider about a patient and says: "Her oxygen is 88% on room air, she\'s post-op day one from a hip, lungs sound diminished at the bases, and I think she needs an order for oxygen and a chest assessment." Which SBAR element is the recommendation?',
    correct: 'The request for an oxygen order and a chest assessment',
    wrong: [
      miss('The oxygen saturation of 88% on room air', 'The current saturation is the Situation/Assessment data, not the Recommendation; R is the explicit ask.', 'Find the sentence that says what the nurse wants the provider to do; that is R.'),
      miss('The fact that she is post-op day one from a hip', 'Surgical history is the Background; it sets context but is not the recommended action.', 'B is the relevant history; R is the concrete request for action.'),
      miss('The finding of diminished breath sounds at the bases', 'The exam finding is part of the Assessment; the Recommendation is the proposed next step.', 'Distinguish what you observed (A) from what you are asking for (R).'),
    ],
    mentorHint:
      'SBAR separates what is happening, what background matters, what you think it means, and what action you need. The recommendation is the ask that turns a concern into a decision point for the provider.',
    lesson: 'SBAR structures escalation: Situation (the immediate problem), Background (relevant history), Assessment (your read of what is happening), and Recommendation (the explicit ask). Naming the recommendation forces a clear, actionable request rather than a vague "the patient looks off."',
    source,
    generated: true,
  },
  {
    id: 7325018,
    chapter: 'Handoffs, Escalation, and Communication',
    title: 'Read-back of a verbal order',
    prompt: 'A provider gives a verbal medication order during a procedure when entry is impractical. What closed-loop step is required to make it safe?',
    correct: 'Write down or enter the order, then read it back to the provider for confirmation before acting on it',
    wrong: [
      miss('Repeat the order silently to yourself and proceed to administer it', 'Silent repetition gives the provider no chance to catch a mishearing; closed-loop requires an audible read-back.', 'Closed-loop means the sender confirms what you heard; say it back out loud and get confirmation.'),
      miss('Administer immediately and document the verbal order afterward', 'Acting before read-back skips the verification step where dose or drug errors are caught.', 'Verify first, act second; the read-back has to happen before administration.'),
      miss('Ask a second nurse to witness you giving the drug instead of reading back', 'A witness to administration does not verify that the order was heard correctly from the provider.', 'The safeguard is confirming the order content with the prescriber, not witnessing the act of giving it.'),
    ],
    mentorHint:
      'Closed-loop communication makes the sender confirm the receiver heard the order correctly before action is taken. This is especially important for verbal medication orders because small sound-alike or dose errors can become immediate patient harm.',
    lesson: 'Verbal and telephone orders (and critical results) require closed-loop communication: write down or enter the order, then read it back to the prescriber for explicit confirmation before acting. This catches mishearings of drug, dose, and route at the moment they would otherwise become errors.',
    source,
    generated: true,
  },
  {
    id: 7325019,
    chapter: 'Handoffs, Escalation, and Communication',
    title: 'Structuring an urgent page',
    prompt: 'A patient is acutely deteriorating and the nurse must page the on-call provider, who is covering many patients. How should the message be structured to get the fastest correct action?',
    correct: 'Lead with the acute problem and current vitals, give only the relevant background, state your assessment, and make a specific request',
    wrong: [
      miss('Begin with the full chronological history from the admission three days ago', 'A chronological narrative buries the acute change the covering provider needs to act on immediately.', 'Front-load the acute problem and vitals; chronology can wait until after the ask is clear.'),
      miss('Send "patient not doing well, please call" with no clinical data', 'Without data the covering provider cannot triage this call against other concurrent demands.', 'Give enough clinical signal (vitals, the change) for the provider to prioritize correctly.'),
      miss('List every normal finding first to reassure the provider before the concern', 'Leading with reassuring normals delays the urgent signal and risks the provider deprioritizing the call.', 'Lead with the abnormal, urgent finding; do not bury it behind a list of normals.'),
    ],
    mentorHint:
      'Urgent pages compete with other urgent pages, so the structure must help the receiver triage quickly. Lead with the acute change and vital signs, then give only the background needed to support a specific next action.',
    lesson: 'An urgent escalation should front-load the acute problem and current vitals, include only pertinent background, state the nurse\'s assessment, and end with a specific request. A covering provider triages many demands, so a clear, prioritized message gets the right action faster.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Chapter 6: Families, Interdisciplinary Coordination, and Documentation
  // -------------------------------------------------------------------------
  {
    id: 7325020,
    chapter: 'Families, Interdisciplinary Coordination, and Documentation',
    title: 'Charting that survives review',
    prompt: 'A nurse responds to a patient\'s fall and needs to document it. Which entry is the most defensible nursing note?',
    correct: 'A timed, objective, factual account of the assessment, findings, actions taken, notifications, and patient response',
    wrong: [
      miss('A note stating the fall was the night shift\'s fault for not rounding', 'Blame and speculation about other staff are subjective, not factual, and undermine the record\'s credibility.', 'Document what you observed and did, with times; leave out blame and conjecture.'),
      miss('A brief entry written from memory at the end of the shift', 'End-of-shift recall is less accurate and less defensible than a contemporaneous, timed entry.', 'Chart contemporaneously with real times rather than reconstructing hours later.'),
      miss('An incident-report number with no clinical note in the chart', 'The incident report is internal quality data and does not replace the required clinical documentation in the record.', 'Keep the two separate: an internal report does not substitute for a factual chart note.'),
    ],
    mentorHint:
      'Clinical documentation should be objective enough to survive someone reading it months later with no memory of the event. After a fall, chart times, assessment findings, actions, notifications, and patient response; keep blame and incident-report mechanics out of the clinical note.',
    lesson: 'Defensible documentation is contemporaneous, timed, objective, and complete: what was assessed, what was found, what actions were taken, who was notified, and how the patient responded. Avoid blame and speculation, chart in real time, and never let an internal incident report substitute for the clinical note.',
    source,
    generated: true,
  },
  {
    id: 7325021,
    chapter: 'Families, Interdisciplinary Coordination, and Documentation',
    title: 'Closing the consult loop',
    prompt: 'Physical therapy documents that a patient now requires a two-person assist and a gait belt, but the bedside team keeps mobilizing the patient with one person. What is the operational failure, and the fix?',
    correct: 'The recommendation never reached the care plan and bedside communication; flag it, update the plan, and communicate the new mobility status to all caregivers',
    wrong: [
      miss('There is no failure because the recommendation is documented in the chart', 'A note that no one acts on is a closed loop only on paper; documentation without communication does not change care.', 'A filed note is not a delivered message; the loop closes only when the bedside plan and team actually change.'),
      miss('PT should personally mobilize the patient on every occasion from now on', 'Off-loading all mobility to PT is unrealistic and ignores that the recommendation must reach nursing care.', 'The fix is integrating the recommendation into the shared care plan, not making one discipline do all the work.'),
      miss('Wait for the next PT visit so they can clarify their own note', 'Waiting leaves the patient at fall risk under a one-person assist that PT has already deemed unsafe.', 'Act on the documented safer plan now; do not let the patient stay at risk until the next consult.'),
    ],
    mentorHint:
      'Consult recommendations do not improve safety unless they change the shared plan at the bedside. Closing the loop means the recommendation is communicated, incorporated into workflows, and visible to every caregiver who will act on it.',
    lesson: 'A consult is only useful when its recommendation reaches the care plan and the bedside team. The failure here is a broken consult-to-bedside loop. The fix is to flag the new mobility status, update the shared care plan, and communicate it to every caregiver so practice matches the safer recommendation.',
    source,
    generated: true,
  },
])
