import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe physicianPracticeRoadmap top-up'

export const physicianPracticeRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // Chapter 1: Practice Model and Patient Access
  {
    id: 7318000,
    chapter: 'Practice Model and Patient Access',
    title: 'Third next available',
    prompt:
      'A practice wants one number that honestly reflects how long a patient waits to be seen. Why do access experts track the third next available appointment rather than the first available?',
    correct:
      'The first and second openings are often last-minute cancellation gaps, so the third next available better reflects true system capacity',
    wrong: [
      miss(
        'The third slot is always the most expensive, so it carries the most revenue weight',
        'Third next available is an access (wait-time) metric, not a revenue one; the choice has nothing to do with what a slot is worth.',
        'Ask what the metric is measuring. It is days-to-access, so the reason for picking the third slot must relate to measurement honesty.',
      ),
      miss(
        'Federal rules require practices to report exactly the third appointment',
        'No federal rule mandates this metric; it became the industry standard through advanced-access work by Murray and Berwick, not regulation.',
        'A measurement convention is not the same as a legal requirement. Think about why this number is more representative than the first.',
      ),
      miss(
        'Patients are only allowed to book three appointments ahead',
        'There is no three-appointment booking cap; the third next available is simply a sampling point on the schedule, not a limit.',
        'The metric describes the schedule, it does not constrain patients. Focus on why the third opening is less distorted than the first.',
      ),
    ],
    lesson:
      'Third next available appointment (TNAA) is the average days between a request and the third open slot on a clinician\'s schedule. The first two openings are frequently random cancellation gaps, so the third best represents the true performance of the access system. It is a measurement convention, not a legal rule or a booking limit.',
    source,
    generated: true,
  },
  {
    id: 7318001,
    chapter: 'Practice Model and Patient Access',
    title: 'Open access design',
    prompt:
      'A primary care practice has a six-week wait for routine visits while same-day urgent demand is unpredictable. The manager wants to move toward advanced (open) access. What is the foundational step?',
    correct:
      'Work down the existing backlog so most of each day can be held open for that day\'s demand',
    wrong: [
      miss(
        'Stop offering same-day visits so the future schedule looks fuller',
        'Open access exists precisely to absorb today\'s demand; killing same-day slots is the opposite of the model.',
        'Advanced access means "do today\'s work today." Ask what has to happen to the backlog before that is possible.',
      ),
      miss(
        'Double-book every routine slot to catch up faster',
        'Chronic double-booking burns out staff and degrades every visit; it manages symptoms of backlog rather than eliminating it.',
        'Backlog is the disease, not the schedule shape. Think about reducing the queue, not stacking more onto it.',
      ),
      miss(
        'Extend the booking horizon to twelve months so patients always have a date',
        'A longer horizon hides the backlog rather than removing it, and it locks the schedule against today\'s real demand.',
        'A far-future date is not access. The model requires shrinking the queue so capacity can meet demand as it arrives.',
      ),
    ],
    lesson:
      'Advanced/open access rests on matching daily capacity to daily demand. Before a practice can "do today\'s work today," it must reduce the pre-booked backlog; otherwise there is no room to hold open. Backlog reduction, balanced supply and demand, and contingency planning are the pillars of the model.',
    source,
    generated: true,
  },
  {
    id: 7318002,
    chapter: 'Practice Model and Patient Access',
    title: 'No-show math',
    prompt:
      'A clinic runs a 22 percent no-show rate on a 20-slot daily template. Leadership wants to recover lost capacity without harming patients who show. What is the most defensible response?',
    correct:
      'Address the drivers of no-shows (reminders, transport, scheduling lead time) and use measured, targeted overbooking only where data supports it',
    wrong: [
      miss(
        'Overbook every slot by 22 percent across the board',
        'Flat overbooking ignores that no-shows cluster by visit type, day, and patient; uniform overbooking guarantees crowded waits when patients do show.',
        'No-shows are not evenly distributed. Match any overbooking to where the data actually shows gaps, and fix root causes first.',
      ),
      miss(
        'Charge a large no-show fee to everyone and consider the gap solved',
        'Fees may deter some no-shows but collect poorly, fall hardest on vulnerable patients, and do nothing about transport or reminder failures.',
        'A fee is a blunt tool that does not recover the slot or fix why people miss visits. Look for the option that targets causes and uses data.',
      ),
      miss(
        'Discharge any patient with two no-shows to protect the template',
        'Reflexive discharge abandons continuity and access for exactly the patients who may face barriers, and it does not fill the slots.',
        'Punishing patients is not capacity management. Think about reducing no-shows and recovering capacity with evidence.',
      ),
    ],
    lesson:
      'No-shows cluster by visit type, lead time, and patient circumstance, so a flat fix is wrong. Reduce them at the source (timely reminders, shorter lead times, transport and reminder support) and apply measured overbooking only where the pattern justifies it. Blanket fees or discharges neither recover capacity nor address causes.',
    source,
    generated: true,
  },

  // Chapter 2: Front Desk and Visit Flow
  {
    id: 7318003,
    chapter: 'Front Desk and Visit Flow',
    title: 'Eligibility timing',
    prompt:
      'A manager wants insurance eligibility to be verified at the optimal point to prevent denials and patient-balance surprises. When is the best time to run electronic eligibility?',
    correct:
      'Before the visit (at or shortly after scheduling) with a same-day recheck for any flagged or changed coverage',
    wrong: [
      miss(
        'Only after the claim is denied, since that is when problems surface',
        'Post-denial eligibility is reactive rework; it is the exact pattern that produces avoidable denials, delays, and patient anger.',
        'You want to prevent the denial, not react to it. Ask which timing catches coverage problems before any service is rendered.',
      ),
      miss(
        'At checkout, so staff have the full visit context',
        'Checkout is too late: the service is already rendered, and an inactive plan discovered then becomes a balance the practice rarely recovers.',
        'By checkout the cost is already incurred. Move the check earlier so coverage gaps are caught before the visit.',
      ),
      miss(
        'Once a month in a batch for all upcoming patients only',
        'A monthly batch misses coverage that changes between the batch and the visit, which is common around plan-year and job changes.',
        'Coverage can change day to day. A stale monthly snapshot will miss the changes that drive denials.',
      ),
    ],
    lesson:
      'Eligibility should be verified pre-visit (ideally at scheduling) with a same-day recheck for flagged cases, because coverage changes and front-end verification prevents the denials and balance surprises that surface at checkout or after the claim. Reactive, late, or stale checks all let preventable problems through.',
    source,
    generated: true,
  },
  {
    id: 7318004,
    chapter: 'Front Desk and Visit Flow',
    title: 'Closing the referral loop',
    prompt:
      'A primary care office sends specialist referrals, but patients routinely call weeks later saying no one contacted them. What defines a closed-loop referral the practice should build toward?',
    correct:
      'The referral is transmitted, the specialist confirms receipt and scheduling, and the consult result returns to the referring provider',
    wrong: [
      miss(
        'The referral order is entered in the EHR',
        'Order entry is the start of the process; a referral that is entered but never transmitted, confirmed, or returned is exactly what is failing here.',
        'Entering an order is step one, not completion. A closed loop has to track all the way back to the result.',
      ),
      miss(
        'The patient is handed the specialist\'s phone number',
        'Handing over a number offloads the work onto the patient and produces precisely the dropped referrals the scenario describes.',
        'Relying on patient persistence is not a system. The loop must include confirmation and result return, not patient effort.',
      ),
      miss(
        'The front desk faxes the referral and assumes the fax went through',
        'A fax with no confirmation is an open loop; failed or unread faxes are a leading cause of referrals that never reach the patient.',
        'Sending is not the same as confirmed receipt. A closed loop requires confirmation and the returning consult note.',
      ),
    ],
    lesson:
      'A closed-loop referral tracks the order from transmission, to confirmed receipt and scheduling by the specialist, to the consult result returning to the referring clinician. Stopping at order entry, a handed-over phone number, or an unconfirmed fax leaves the loop open and is the usual source of "no one ever called me."',
    source,
    generated: true,
  },
  {
    id: 7318005,
    chapter: 'Front Desk and Visit Flow',
    title: 'Time-of-service collection',
    prompt:
      'A practice collects almost nothing at the front desk and chases balances by mail, recovering little. What is the most effective revenue-protecting front-desk change?',
    correct:
      'Collect copays and known patient responsibility at time of service using a real-time eligibility estimate',
    wrong: [
      miss(
        'Bill everything to the patient after insurance adjudicates, with no front-desk collection',
        'Post-adjudication mailing is exactly the low-yield approach that is failing; the probability of collecting drops sharply once the patient leaves.',
        'Collection success falls fast after the patient walks out. Look for the option that captures money while the patient is present.',
      ),
      miss(
        'Require full estimated charges in cash before any patient is roomed',
        'Demanding full estimated charges up front is a poor patient experience, often inaccurate before the visit, and risks turning patients away from needed care.',
        'There is a middle ground between collecting nothing and demanding everything. Think known responsibility, like the copay, at time of service.',
      ),
      miss(
        'Send all balances straight to a collections agency on day one',
        'Immediate collections damages patient relationships and recovers cents on the dollar minus agency fees; it skips the cheapest collection point entirely.',
        'Agencies are a last resort, not a front-desk strategy. The cheapest dollar to collect is the one collected at the desk.',
      ),
    ],
    lesson:
      'The cheapest, highest-yield collection happens at time of service: copays and known patient responsibility captured at the front desk using a real-time estimate. Mailing everything post-adjudication, demanding full charges before rooming, or jumping to collections all either lose money or harm the patient relationship.',
    source,
    generated: true,
  },

  // Chapter 3: Clinical Support and Provider Productivity
  {
    id: 7318006,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Top of license',
    prompt:
      'A manager wants providers, nurses, and medical assistants each "working at the top of their license." What does that principle actually require?',
    correct:
      'Each role performs the highest-level work it is licensed and trained for, with lower-complexity tasks delegated downward under protocol',
    wrong: [
      miss(
        'Every staff member is cross-trained to do every other role\'s job',
        'Universal cross-training is the opposite of working at top of license; it pushes clinical work to people not licensed for it and pulls clinicians down to clerical tasks.',
        'Top of license is about matching work to scope, not making everyone do everything. Think delegation downward, not blending.',
      ),
      miss(
        'Providers personally handle every task to guarantee quality',
        'Doing everything keeps clinicians buried in work others could safely perform under protocol, which destroys productivity and access.',
        'If the highest-cost clinician does the lowest-level work, the license is being wasted. Push routine work down within scope.',
      ),
      miss(
        'Staff take whatever task is next in the queue regardless of role',
        'Queue-grabbing ignores scope of practice and risks unlicensed staff doing clinical work; the principle is about scope alignment, not load balancing.',
        'Random task pickup ignores licensure entirely. The principle aligns each task to the appropriate scope.',
      ),
    ],
    lesson:
      'Working at the top of license means each role does the most advanced work its training and license allow, while routine, lower-complexity work is delegated downward under clear protocol. It maximizes access and productivity by keeping expensive clinical time for clinical decisions. It is not universal cross-training, do-it-all clinicians, or scope-blind queue grabbing.',
    source,
    generated: true,
  },
  {
    id: 7318007,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Vaccine cold chain',
    prompt:
      'During morning setup, the vaccine refrigerator data logger shows the temperature drifted outside the recommended 2 to 8 degrees Celsius range overnight. Clinic is fully booked. What should staff do first?',
    correct:
      'Quarantine the affected vaccines, label them "do not use," and contact the manufacturer or immunization program before administering any',
    wrong: [
      miss(
        'Administer the vaccines quickly before the temperature drifts further',
        'Using potentially compromised vaccines is a patient-safety violation; an excursion can render doses ineffective, and schedule pressure never overrides cold-chain rules.',
        'A schedule full of patients is not a reason to give doses that may be inactive. Safety and product integrity come before throughput.',
      ),
      miss(
        'Discard all the vaccines immediately to be safe and cancel the day',
        'Reflexive disposal may waste viable, recoverable inventory; the protocol calls for evaluation by the manufacturer or program, not automatic destruction.',
        'An excursion does not automatically mean the doses are ruined. The protocol is quarantine and evaluate, not destroy on sight.',
      ),
      miss(
        'Move the vaccines to a household freezer to drop the temperature fast',
        'Freezing refrigerated vaccines is itself a damaging excursion and compounds the problem; storage units must hold 2 to 8 degrees Celsius, not freezer temperatures.',
        'Most refrigerated vaccines are destroyed by freezing. The fix is not a new excursion in the other direction.',
      ),
    ],
    lesson:
      'On a temperature excursion, refrigerated vaccines (stored at 2 to 8 degrees Celsius) should be quarantined and labeled "do not use," and the manufacturer or immunization program contacted to determine viability before any administration. Using them under schedule pressure is unsafe; destroying or freezing them is wrong because some doses may be recoverable.',
    source,
    generated: true,
  },
  {
    id: 7318008,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'In-basket as a team',
    prompt:
      'A single physician\'s in-basket holds normal lab results, routine refills, prior-auth forms, and a few messages needing clinical judgment, and it is drowning the provider. What is the best operating model?',
    correct:
      'Pool and triage the in-basket so support staff handle protocol-driven items and route only judgment items to the provider',
    wrong: [
      miss(
        'Require the provider to clear every message personally each day',
        'Personally clearing everything keeps clerical and protocol work on the highest-cost person and is the cause of the overload, not the cure.',
        'The overload comes from the provider touching routine items. Move protocol work off the provider.',
      ),
      miss(
        'Auto-delete any message not opened within 48 hours',
        'Deleting unprocessed clinical messages is a patient-safety and continuity failure; results and refills cannot simply vanish.',
        'Unread clinical messages are not clutter to purge. They must be worked, just by the right person.',
      ),
      miss(
        'Forward the entire in-basket to a different provider when it gets full',
        'Shuffling the whole queue to a colleague just relocates the overload and breaks continuity without applying any triage logic.',
        'Moving the pile does not shrink it. The fix is triage by item type, not handing the whole thing to someone else.',
      ),
    ],
    lesson:
      'A pooled, triaged in-basket lets support staff resolve protocol-driven items (normal results, eligible refills, prior-auth legwork) and routes only items needing clinical judgment to the provider. Making the provider clear everything causes the overload; deleting or wholesale-forwarding messages is unsafe and solves nothing.',
    source,
    generated: true,
  },

  // Chapter 4: Revenue Cycle and Charge Capture
  {
    id: 7318009,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Rejection vs denial',
    prompt:
      'A biller is told to "appeal" a claim that came back from the clearinghouse because the patient\'s member ID was malformed. Why is that the wrong move?',
    correct:
      'That is a rejection, not a denial: it never entered adjudication, so it should be corrected and resubmitted rather than appealed',
    wrong: [
      miss(
        'Appeals are always faster, so appealing is fine either way',
        'You cannot appeal a claim the payer never adjudicated; an appeal contests a payment decision, and a rejection is a decision that the claim was never accepted for processing.',
        'An appeal challenges a decision the payer made. A rejected claim was never processed, so there is nothing to appeal yet.',
      ),
      miss(
        'It should be written off because the ID was wrong',
        'A malformed ID is a correctable data error, not a reason to abandon billable revenue; fixing and resubmitting recovers it.',
        'A typo is fixable. Writing off a correctable rejection throws away money the practice has earned.',
      ),
      miss(
        'The patient should be balance-billed for the full charge instead',
        'Billing the patient for a clearinghouse data error is improper and skips the obvious fix of correcting the ID and resubmitting to the payer.',
        'A front-end data error is the practice\'s to fix, not the patient\'s to pay. Correct and resubmit to the payer.',
      ),
    ],
    lesson:
      'A rejection happens before adjudication (a clearinghouse or payer front-end edit catches a data problem) and is fixed and resubmitted. A denial happens after adjudication (the payer processed the claim and declined to pay) and may be appealed. Confusing the two wastes time appealing things that simply need correction.',
    source,
    generated: true,
  },
  {
    id: 7318010,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Days in A/R',
    prompt:
      'A practice manager reports that "days in accounts receivable" jumped from 38 to 61 over a quarter. What does this metric most directly tell leadership?',
    correct:
      'On average it is taking much longer to collect what has been billed, signaling a cash-flow and collection problem to investigate',
    wrong: [
      miss(
        'The practice is seeing fewer patients than last quarter',
        'Days in A/R measures collection speed on billed charges, not visit volume; a clinic can be busier than ever and still see this number rise.',
        'This metric is about how fast money comes in, not how many patients arrive. Re-read what A/R is measuring.',
      ),
      miss(
        'The practice is overpaid and must issue refunds',
        'A rising days-in-A/R reflects slow or stuck collections, the opposite of being overpaid; nothing here points to refunds.',
        'Higher A/R days means money is outstanding longer, not that too much came in. Think collection lag, not overpayment.',
      ),
      miss(
        'Coding accuracy has improved this quarter',
        'Better coding would tend to speed clean payment and lower A/R days; a sharp rise suggests the opposite or a process breakdown.',
        'Improving coding usually shortens A/R days. A jump signals a problem, not an improvement.',
      ),
    ],
    lesson:
      'Days in accounts receivable approximates the average time to collect billed charges (total A/R divided by average daily charges). A rising number means collections are slowing, flagging a cash-flow or process problem to segment by payer, age, and root cause. It does not measure patient volume, overpayment, or coding quality.',
    source,
    generated: true,
  },
  {
    id: 7318011,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Clean claim rate',
    prompt:
      'Leadership sets a target to raise the "first-pass clean claim rate." Operationally, what should the team focus on to move this number?',
    correct:
      'Reduce front-end errors so a higher share of claims are accepted and paid on first submission without edits or rework',
    wrong: [
      miss(
        'Submit fewer claims each day so the percentage looks better',
        'Throttling submissions does not make claims cleaner; it just delays revenue while the same error rate persists.',
        'The rate is about quality per claim, not how many you send. Slowing down hides nothing and delays cash.',
      ),
      miss(
        'Appeal more denials after they happen',
        'Appeals address claims that already failed; clean claim rate is about getting it right the first time so rework and appeals fall.',
        'First-pass means before any rework. Appeals are downstream cleanup, not the lever for this metric.',
      ),
      miss(
        'Increase the charge amount on each claim',
        'Higher charges do not change whether a claim is accepted cleanly; clean claim rate depends on data accuracy and payer rules, not price.',
        'Pricing has nothing to do with whether a claim passes edits. Focus on accuracy of the data going out.',
      ),
    ],
    lesson:
      'First-pass clean claim rate is the share of claims accepted and paid on initial submission without correction. It is driven by front-end accuracy: registration, eligibility, coding, and payer-rule compliance. Submitting fewer or higher-charge claims, or appealing more, does not improve cleanliness; preventing errors before submission does.',
    source,
    generated: true,
  },

  // Chapter 5: Documentation and Coding Compliance
  {
    id: 7318012,
    chapter: 'Documentation and Coding Compliance',
    title: 'E/M leveling after 2021',
    prompt:
      'Under the 2021 office-visit E/M rules (CPT 99202-99215), a clinician can select the code level using either total time or medical decision making. For a given visit, which level should be reported?',
    correct:
      'Compare the level supported by total time with the level supported by MDM and report the higher of the two',
    wrong: [
      miss(
        'Always use medical decision making, because time is no longer allowed',
        'Time is fully allowed under the 2021 rules and now counts both face-to-face and non-face-to-face same-day work by the clinician; you may choose whichever yields the higher level.',
        'The 2021 change kept time as a valid path. You pick between time and MDM, not MDM only.',
      ),
      miss(
        'Use whichever method produces the lower level, to stay conservative',
        'Deliberately under-coding a documented, justified level is not "conservative"; it forfeits earned revenue and misrepresents the work performed.',
        'You should report the level you can support, not artificially the lowest. Compare both methods and use the higher supported one.',
      ),
      miss(
        'Count the extent of history and physical exam documented to set the level',
        'Since 2021 the volume of history and exam no longer drives the office-visit level; only medically appropriate history/exam is required, and the level comes from MDM or time.',
        'History and exam volume stopped driving the level in 2021. The level is set by MDM or by total time.',
      ),
    ],
    lesson:
      'Since January 1, 2021, office-visit E/M codes (99202-99215) are leveled by either total time (face-to-face plus non-face-to-face same-day work) or by MDM (problems, data, risk). You compare the level each method supports and report the higher one. The amount of history and exam documented no longer sets the level.',
    source,
    generated: true,
  },
  {
    id: 7318013,
    chapter: 'Documentation and Coding Compliance',
    title: 'Modifier 25 judgment',
    prompt:
      'A patient comes in for a scheduled wart removal (a minor procedure) and, during the same visit, the clinician evaluates and adjusts treatment for poorly controlled diabetes. Is appending modifier 25 to an E/M code appropriate?',
    correct:
      'Yes, if the diabetes evaluation is significant and separately identifiable from the procedure and documented distinctly',
    wrong: [
      miss(
        'No, because a separate diagnosis is required and was not used here',
        'A different diagnosis is not required for modifier 25; the test is whether a significant, separately identifiable E/M occurred and is documented, which it is here.',
        'Modifier 25 does not hinge on a separate diagnosis. It hinges on significant, separately documented E/M work.',
      ),
      miss(
        'Yes, always, because any office visit with a procedure earns a separate E/M',
        'Routine pre- and post-procedure evaluation is bundled into the minor procedure; modifier 25 is only justified when E/M work is substantially above that, so "always" is wrong and audit-risky.',
        'The normal work around a minor procedure is already bundled. Modifier 25 needs E/M work beyond that, not automatic billing.',
      ),
      miss(
        'No, because modifier 25 only applies when two different physicians are involved',
        'Modifier 25 applies to the same physician or qualified professional providing a separately identifiable E/M on the same day as the procedure; it is not a multi-provider modifier.',
        'Modifier 25 is for the same provider doing extra, separate E/M work. The number of physicians is not the test.',
      ),
    ],
    lesson:
      'Modifier 25 reports a significant, separately identifiable E/M service by the same clinician on the same day as a procedure. The extra E/M must exceed the usual pre/post work bundled into the procedure and be documented distinctly. A separate diagnosis is not required, it is not automatic for every procedure visit, and it is not about multiple physicians.',
    source,
    generated: true,
  },
  {
    id: 7318014,
    chapter: 'Documentation and Coding Compliance',
    title: 'Incident-to eligibility',
    prompt:
      'A nurse practitioner sees a patient in a private office (POS 11). To bill the visit incident-to the physician at 100 percent of the Medicare fee schedule, which condition must hold?',
    correct:
      'The patient is established with an existing problem the physician initiated, and the physician provides direct supervision in the office',
    wrong: [
      miss(
        'The patient may be brand new with a brand-new problem',
        'Incident-to cannot be used for a new patient or a new problem; the physician must have personally initiated care and stay actively involved, so a new problem must be billed under the NPP\'s own number.',
        'Incident-to needs the physician to have started the plan of care. New patients and new problems are excluded.',
      ),
      miss(
        'The physician must be in the room for the entire encounter',
        'Incident-to requires direct supervision (physician present in the office suite and immediately available), not personal presence in the exam room throughout.',
        'Direct supervision means available in the suite, not in the room. The presence test is the office, not the exam room.',
      ),
      miss(
        'It can be billed from the patient\'s home during a telehealth visit',
        'Incident-to is tied to the office setting (POS 11); a visit from the patient\'s home does not meet the place-of-service condition for incident-to billing.',
        'Incident-to is an office-setting rule. A home/telehealth encounter does not satisfy the place-of-service requirement.',
      ),
    ],
    lesson:
      'Incident-to billing pays an NPP visit at 100 percent of the physician fee schedule (vs 85 percent under the NPP\'s own number) only when: the patient is established with a problem the physician initiated and stays involved in, the physician provides direct supervision (in the office suite, immediately available), and the setting is the private office (POS 11). New patients, new problems, and non-office settings do not qualify.',
    source,
    generated: true,
  },
  {
    id: 7318015,
    chapter: 'Documentation and Coding Compliance',
    title: 'Copy-forward risk',
    prompt:
      'An auditor finds that a clinician\'s telehealth notes contain a full normal physical exam copied forward from prior in-person visits. Beyond looking sloppy, what is the core compliance problem?',
    correct:
      'The note documents an exam that did not occur, which can constitute billing for services not performed and undermines audit credibility',
    wrong: [
      miss(
        'It is acceptable because copy-forward saves clinician time',
        'Time savings do not justify documenting work that did not happen; an exam recorded but not performed is a billing and compliance liability, not efficiency.',
        'Convenience does not excuse a false record. Ask what it means to document an exam that never occurred.',
      ),
      miss(
        'It is only a formatting issue with no payment implications',
        'It is substantive, not cosmetic: the content describes a different service than what occurred, which can inflate the level billed and trigger recoupment.',
        'This is about content, not layout. A documented-but-undone exam can change what was billed.',
      ),
      miss(
        'It is fine as long as the patient never reads the note',
        'Patient access is irrelevant to the compliance defect; the record must accurately reflect the encounter regardless of who reads it, and patients have a right to it anyway.',
        'Whether the patient reads it does not change the falsity. The record must match what actually happened.',
      ),
    ],
    lesson:
      'Copy-forward (cloning) becomes a compliance problem when the note documents work that did not happen, such as a physical exam in a telehealth visit. That can amount to billing for services not performed, inflate the coded level, and destroy audit credibility. Documentation must reflect the encounter that actually occurred.',
    source,
    generated: true,
  },
  {
    id: 7318016,
    chapter: 'Documentation and Coding Compliance',
    title: 'Unsigned note bottleneck',
    prompt:
      'A practice has dozens of encounters with unsigned, unfinalized notes more than a week old. From a revenue-cycle standpoint, what is the most accurate statement?',
    correct:
      'Unfinalized notes hold up coding and clean claim submission and create audit and continuity-of-care risk',
    wrong: [
      miss(
        'Claims can be submitted normally; signatures are just an internal courtesy',
        'Finalized, signed documentation is generally required to support the claim, and submitting on unsigned notes is an audit and compliance exposure.',
        'A signature is not decorative; it finalizes the record the claim relies on. Submitting without it is risky.',
      ),
      miss(
        'Coders should estimate the level and submit to keep cash flowing',
        'Coding a guessed level on an incomplete note is exactly what audits catch; it risks recoupment and is not a legitimate way to speed cash.',
        'Guessing a code from an unfinished note is an audit magnet. The note has to be complete first.',
      ),
      miss(
        'The only downside is a cluttered provider inbox',
        'The impact reaches well beyond the inbox: coding, billing, the next clinician\'s reference, and audit readiness all stall on unfinalized notes.',
        'The harm is not just visual clutter. Think about everything downstream that waits on a finalized note.',
      ),
    ],
    lesson:
      'Unsigned, unfinalized notes stall the coding and billing queues, jeopardize clean claim submission, impair the next clinician\'s reference, and create audit risk. Practices need timely note completion; coders should never guess a level to push cash, and the problem is far more than an inbox annoyance.',
    source,
    generated: true,
  },

  // Chapter 6: Patient Rights, Privacy, and Practice Compliance
  {
    id: 7318017,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'Good faith estimate scope',
    prompt:
      'A solo dermatology practice assumes the No Surprises Act good-faith-estimate (GFE) requirement applies only to hospitals. A self-pay patient schedules an excision two weeks out. What is actually required?',
    correct:
      'The practice must give the uninsured/self-pay patient a written GFE of expected charges within the rule\'s timeframe',
    wrong: [
      miss(
        'Nothing, because GFE rules exempt small and solo practices',
        'There is no small-practice exemption: the GFE requirement applies to all physicians and settings, including solo and small practices, for uninsured and self-pay patients.',
        'The rule has no carve-out for practice size. It applies to all physicians for uninsured/self-pay patients.',
      ),
      miss(
        'A verbal estimate at check-in is sufficient',
        'The GFE must be a written estimate provided within defined timeframes after scheduling or request; a casual verbal number at check-in does not satisfy the rule.',
        'The GFE has to be in writing and on time, not an off-the-cuff verbal figure at the desk.',
      ),
      miss(
        'A GFE is only owed if the patient files a billing dispute first',
        'The GFE is owed proactively when an uninsured/self-pay service is scheduled or a cost estimate is requested; it is not contingent on a later dispute.',
        'The estimate comes before the bill, not after a complaint. It is triggered by scheduling or a request.',
      ),
    ],
    lesson:
      'Under the No Surprises Act, all physicians and practices, including solo and small ones, must give uninsured or self-pay patients a written good-faith estimate of expected charges within set timeframes after scheduling or a request. It cannot be a verbal aside, has no small-practice exemption, and is provided proactively, not only after a dispute.',
    source,
    generated: true,
  },
  {
    id: 7318018,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'GFE dispute threshold',
    prompt:
      'A self-pay patient received a written good-faith estimate and is later billed substantially more. At roughly what billed-versus-estimate gap can the patient use the patient-provider dispute resolution process?',
    correct:
      'When the final bill is at least $400 more than the good-faith estimate',
    wrong: [
      miss(
        'Any amount over the estimate, no matter how small',
        'A trivial overage does not trigger the formal dispute process; the rule sets a specific threshold of at least $400 above the GFE before the patient can use it.',
        'There is a defined dollar trigger, not "any overage." Recall the specific threshold in the rule.',
      ),
      miss(
        'Only if the bill is more than double the estimate',
        'The trigger is a flat dollar amount above the estimate, not a percentage or multiple; a $400 gap qualifies regardless of the ratio.',
        'The threshold is a fixed dollar figure, not a percentage or a doubling. Recall the exact number.',
      ),
      miss(
        'There is no patient dispute process for self-pay estimates',
        'A patient-provider dispute resolution process does exist for uninsured/self-pay patients when the bill exceeds the GFE by the threshold; the right is real.',
        'Such a process does exist for self-pay GFEs. The question is the dollar threshold that opens it.',
      ),
    ],
    lesson:
      'Under the No Surprises Act, an uninsured or self-pay patient may use the patient-provider dispute resolution process when the final bill is at least $400 more than the good-faith estimate. It is a fixed dollar threshold, not any overage, not a percentage, and the process genuinely exists for self-pay estimates.',
    source,
    generated: true,
  },
  {
    id: 7318019,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'HIPAA right of access',
    prompt:
      'A patient submits a written request for an electronic copy of their own records. Under the HIPAA right of access, how must a covered physician practice respond?',
    correct:
      'Provide access generally within 30 days (with one possible 30-day extension) and charge only a reasonable, cost-based fee',
    wrong: [
      miss(
        'It may take up to 90 days and charge a search-and-retrieval fee',
        'The outer limit is 30 days plus at most one 30-day extension, and HIPAA prohibits charging search-and-retrieval fees for a patient\'s own records.',
        'Ninety days is too long and search/retrieval charges are barred. Recall the 30-day rule and the cost-based fee limit.',
      ),
      miss(
        'It may refuse because releasing records is risky if a balance is owed',
        'A patient cannot be denied access to their own records over an unpaid bill; the right of access is not contingent on payment of the account.',
        'An outstanding balance does not let a practice withhold the patient\'s own records. Access is a right, not a bargaining chip.',
      ),
      miss(
        'It must provide only a paper copy regardless of what was requested',
        'If the records are maintained electronically and an electronic copy is readily producible, the practice must honor the requested electronic format.',
        'Format follows the request when feasible. If an electronic copy is readily producible, it should be provided that way.',
      ),
    ],
    lesson:
      'HIPAA right of access requires covered entities to provide a patient access to their own records generally within 30 days (one 30-day extension allowed), in the requested format if readily producible, for only a reasonable cost-based fee. Practices cannot charge search/retrieval fees, withhold records over a balance, or force paper when electronic was requested and feasible.',
    source,
    generated: true,
  },
  {
    id: 7318020,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'OIG compliance elements',
    prompt:
      'A small practice wants to stand up a basic compliance program aligned to the OIG\'s seven elements. Which item is one of those seven core elements?',
    correct:
      'Designating a compliance officer or contact responsible for the program',
    wrong: [
      miss(
        'Purchasing malpractice insurance for every provider',
        'Malpractice coverage is prudent risk management but is not one of the OIG\'s seven compliance-program elements, which concern fraud-and-abuse prevention.',
        'Insurance is risk transfer, not a compliance-program element. The seven elements are about preventing/detecting improper conduct.',
      ),
      miss(
        'Guaranteeing a minimum profit margin each quarter',
        'A profit target has nothing to do with the OIG elements; the program is about written standards, training, monitoring, and corrective action, not financial performance.',
        'Compliance elements address conduct and oversight, not margins. Look for a governance/oversight item.',
      ),
      miss(
        'Outsourcing all billing to a third party',
        'Outsourcing billing neither creates nor substitutes for a compliance program; the practice still needs the OIG\'s structural elements regardless of who bills.',
        'Who does the billing is not one of the elements. Think about who is accountable for the compliance program itself.',
      ),
    ],
    lesson:
      'The OIG\'s seven elements of an effective compliance program are: written policies and standards, a designated compliance officer/contact, training and education, open lines of communication, internal monitoring and auditing, well-publicized disciplinary standards, and prompt corrective action. They are governance and oversight measures, not insurance, profit, or outsourcing decisions.',
    source,
    generated: true,
  },

  // Chapter 7: Service, Staffing, and Practice Improvement
  {
    id: 7318021,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'PDSA cycle',
    prompt:
      'A manager wants to test whether texting lab results reduces phone-call volume, using a Plan-Do-Study-Act cycle. What does the "Study" step require?',
    correct:
      'Compare what actually happened against the prediction made in Plan, using the data collected during Do',
    wrong: [
      miss(
        'Immediately roll the change out to every clinic site',
        'That skips learning entirely; scaling belongs to a later Act decision, and rolling out before studying defeats the purpose of a small test.',
        'Study is about learning from the result, not spreading the change. Scaling comes after you analyze.',
      ),
      miss(
        'Decide whether the manager personally liked the new process',
        'Personal preference is not a measure; Study compares observed results to the documented prediction and measures, not to how the manager feels.',
        'A PDSA studies data against a prediction, not the manager\'s taste. Look for the measurement-based answer.',
      ),
      miss(
        'Write the new texting workflow into the policy manual permanently',
        'Codifying a change before studying its results locks in an unproven process; documentation of a permanent policy is premature at the Study step.',
        'You analyze before you make anything permanent. Studying precedes any commit-it-to-policy step.',
      ),
    ],
    lesson:
      'In PDSA, Plan sets a prediction and measures, Do runs the small test and collects data, Study compares the actual result to the prediction to learn what happened, and Act decides to adopt, adapt, or abandon. The Study step is analysis against the prediction, not scaling, personal preference, or premature policy-writing.',
    source,
    generated: true,
  },
  {
    id: 7318022,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Balancing measures',
    prompt:
      'A clinic shortens visit length to boost throughput and watches the visits-per-day metric rise. A good improvement plan also tracks a "balancing measure." What is the purpose of that measure?',
    correct:
      'To detect whether improving one metric is quietly harming another part of the system, such as quality or patient experience',
    wrong: [
      miss(
        'To confirm the main metric is moving in the intended direction',
        'That role belongs to the outcome or process measure; a balancing measure watches for unintended harm elsewhere, not confirmation of the primary goal.',
        'Confirming the target metric is the outcome measure\'s job. A balancing measure looks at side effects.',
      ),
      miss(
        'To replace the primary metric once it improves',
        'A balancing measure is tracked alongside the primary metric, not as a substitute; it guards against trade-offs, it does not take over.',
        'It runs in parallel, not as a replacement. Think about catching unintended consequences.',
      ),
      miss(
        'To give staff a metric that is easy to hit for morale',
        'Balancing measures are chosen to expose trade-offs, not to be easy wins; picking soft metrics defeats their watchdog purpose.',
        'It is not a feel-good number. Its job is to reveal harm caused by chasing the main metric.',
      ),
    ],
    lesson:
      'A balancing measure checks whether gains on the primary metric are creating problems elsewhere, for example shorter visits raising throughput but lowering quality, safety, or patient satisfaction. It is tracked alongside outcome and process measures specifically to surface trade-offs, not to confirm, replace, or sugarcoat the main metric.',
    source,
    generated: true,
  },
  {
    id: 7318023,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Bus-factor staffing',
    prompt:
      'Prior-authorization processing depends entirely on one experienced employee, and her two-week leave caused a backlog and patient delays. What is the most durable staffing fix?',
    correct:
      'Document standard work and cross-train at least one backup, with periodic practice so the skill stays current',
    wrong: [
      miss(
        'Ask the employee to remain reachable by phone during her leave',
        'Reaching into someone\'s protected leave is not a system fix; it relies on the same single point of failure and is unfair and unsustainable.',
        'Leaning on the one expert during her time off repeats the dependency. Build redundancy instead.',
      ),
      miss(
        'Pause all prior authorizations until she returns',
        'Pausing prior auth for two weeks directly delays patient care and procedures, which is the harm the fix is supposed to prevent.',
        'Stopping the work harms patients. The goal is to keep it moving when one person is out.',
      ),
      miss(
        'Give her a retention bonus so she never takes leave',
        'Pay does not remove the single-person dependency; everyone is eventually out sick or on leave, and the fragility remains.',
        'A bonus does not make a person always available. Address the structural fragility, not her attendance.',
      ),
    ],
    lesson:
      'Single-person dependency (a high "bus factor") makes operations fragile. The durable fix is documented standard work plus a cross-trained backup who practices the skill periodically, so essential tasks like prior authorization keep moving when anyone is out. Interrupting leave, pausing the work, or paying to prevent absences all leave the fragility in place.',
    source,
    generated: true,
  },
])
