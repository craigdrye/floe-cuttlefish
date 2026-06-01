import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe physicianPracticeRoadmap 103-pass'

export const physicianPracticeRoadmapR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ===========================================================================
  // Chapter 1: Practice Model and Patient Access
  // ===========================================================================
  {
    id: 7622000,
    chapter: 'Practice Model and Patient Access',
    title: 'Demand vs capacity diagnosis',
    prompt:
      'Over a month a clinician averages 92 requested visits per week but only 80 booked-and-completed visits per week, and the third next available appointment keeps climbing. What does this pattern most directly indicate?',
    correct:
      'Demand structurally exceeds usable capacity, so the backlog and wait time will keep growing until supply or demand is rebalanced',
    wrong: [
      miss(
        'The no-show rate is the root cause and overbooking will fix it',
        'No-shows reduce completed visits but the gap here is between requests and capacity itself; even with zero no-shows, 92 requests cannot fit into 80 slots.',
        'Compare incoming requests to total usable slots, not just to completed visits. If requests exceed capacity, no amount of overbooking closes a structural shortfall.',
      ),
      miss(
        'The template is fine because the clinician is fully booked every day',
        'A fully booked schedule with a rising TNAA is the signature of unmet demand, not a healthy system; "always full" hides the growing queue.',
        'Being booked solid is not the same as meeting demand. A climbing third-next-available with full days means the queue is lengthening.',
      ),
      miss(
        'Patients are requesting the wrong visit types and need education',
        'The arithmetic shows more requests than capacity regardless of visit type; blaming patient choices ignores the supply-demand imbalance the numbers reveal.',
        'The mismatch is 92 vs 80 in raw volume. Re-educating patients does not create the dozen missing slots each week.',
      ),
    ],
    lesson:
      'Access diagnosis starts by comparing weekly demand (requests) to usable capacity (slots actually available). When demand persistently exceeds capacity, the backlog and third next available appointment rise until you add supply, reduce demand, or redesign the template. No-show tactics and patient education cannot fix a true supply shortfall.',
    source,
    generated: true,
  },
  {
    id: 7622001,
    chapter: 'Practice Model and Patient Access',
    title: 'Carve-out vs open access',
    prompt:
      'A practice not ready for full open access wants to reduce its six-week routine wait. It decides to reserve a fixed block of same-day slots each morning while pre-booking the rest. What is this hybrid called, and what is its main risk?',
    correct:
      'It is a carve-out (modified open access) model, and its main risk is that reserved slots go unused on low-demand days while overflowing on high-demand days',
    wrong: [
      miss(
        'It is full advanced access, and the main risk is that the backlog is never worked down',
        'Reserving only a block while pre-booking the rest is a carve-out, not full advanced access; full open access works the backlog down and holds most of the day open, not a fixed block.',
        'Full open access does today\'s work today across most of the day. A fixed reserved block with the rest pre-booked is the hybrid, not the full model.',
      ),
      miss(
        'It is double-booking, and the main risk is staff burnout from stacked slots',
        'A carve-out reserves separate same-day slots rather than stacking two patients in one slot; it is not double-booking and its failure mode is mismatch, not stacking.',
        'Double-booking puts two patients in one slot. Here distinct slots are set aside, so the risk is the reserve size not matching that day\'s actual demand.',
      ),
      miss(
        'It is panel management, and the main risk is that complex patients consume the reserve',
        'Panel management is about who belongs to a clinician and their acuity, not about reserving same-day slots; this is a template tactic, misnamed here.',
        'Panel management is about the roster and complexity, not the daily slot mix. Name the template tactic that holds back same-day capacity.',
      ),
    ],
    lesson:
      'A carve-out (modified open access) reserves a fixed number of same-day slots while pre-booking the rest. It is easier to adopt than full advanced access but its weakness is rigidity: the reserved block is too big on slow days (wasted capacity) and too small on busy days (overflow). The fix is to size and flex the reserve to real demand patterns.',
    source,
    generated: true,
  },
  {
    id: 7622002,
    chapter: 'Practice Model and Patient Access',
    title: 'Continuity vs access trade-off',
    prompt:
      'To shrink the wait, a manager proposes routing any patient to whichever clinician has the soonest opening. A senior physician objects. What legitimate trade-off is the physician pointing at?',
    correct:
      'Maximizing speed of access can erode continuity of care, which is linked to better outcomes, fewer duplicate workups, and higher patient trust',
    wrong: [
      miss(
        'There is no trade-off; seeing any available clinician is always equivalent care',
        'Continuity has measurable value (the patient\'s own clinician knows the history, reducing errors and redundant testing); treating all clinicians as interchangeable ignores that.',
        'Ask what is lost when a patient never sees their own clinician. Knowing the history is not free to replace.',
      ),
      miss(
        'The real issue is that other clinicians will resent the extra volume',
        'Workload feelings are a staffing matter, not the care trade-off; the substantive concern is continuity and the outcomes tied to it, not who feels overloaded.',
        'The objection is about patient care quality, not morale. Focus on what the patient loses by bouncing between providers.',
      ),
      miss(
        'Continuity only matters for hospital inpatients, not outpatient visits',
        'Outpatient continuity (a usual source of care) is precisely where relationship and longitudinal knowledge drive chronic-disease management and trust.',
        'Continuity is a core outpatient concept, not just inpatient. Chronic care depends on a known, ongoing relationship.',
      ),
    ],
    lesson:
      'Access and continuity can pull against each other. Always booking the soonest opening speeds access but can break the patient-clinician relationship, which is associated with better chronic-disease outcomes, fewer duplicate tests, and stronger trust. Good template design protects same-clinician continuity for patients who benefit most while still offering timely access.',
    source,
    generated: true,
  },
  {
    id: 7622003,
    chapter: 'Practice Model and Patient Access',
    title: 'New vs established and the schedule',
    prompt:
      'A scheduler asks why "new patient" versus "established patient" matters for the template, beyond the coding difference. What is the strongest operational reason to flag the distinction at booking?',
    correct:
      'New-patient visits typically need more time and more pre-visit work (records, registration, history), so the template must allocate a longer, differently prepared slot',
    wrong: [
      miss(
        'New patients should always be deprioritized because established patients generate more loyalty',
        'Deprioritizing new patients starves the practice of growth and is not the operational point; the distinction is about slot length and prep, not ranking patients.',
        'The reason is workload and preparation per visit, not which patient is more valuable. Think about how much time and setup each needs.',
      ),
      miss(
        'It only matters to billing and has no effect on how the day is scheduled',
        'It has a direct scheduling effect: new visits run longer and require records gathering and registration that established visits do not, so the template must differ.',
        'A new visit is not just a billing label. Consider the extra minutes and pre-visit tasks a first encounter demands.',
      ),
      miss(
        'A patient is "new" only if they have never had any insurance on file',
        'New vs established is defined by whether the patient was seen by the practice/specialty within three years, not by insurance history.',
        'The new/established line is about prior face-to-face care in the group within a time window, not coverage records.',
      ),
    ],
    lesson:
      'A new patient (generally one not seen by the practice or same-specialty group within three years) needs a longer visit and more pre-visit work: outside records, full registration, and a complete history. Established patients usually need shorter, lighter-prep slots. Flagging the distinction at booking lets the template assign the right slot length and pre-visit tasks, protecting both access and visit quality.',
    source,
    generated: true,
  },
  {
    id: 7622004,
    chapter: 'Practice Model and Patient Access',
    title: 'Reading the access dashboard',
    prompt:
      'An access dashboard shows: next-available 1 day, third next available 14 days, no-show rate 4 percent, and demand roughly equal to capacity. What is the most likely explanation for a short next-available but a long TNAA?',
    correct:
      'A few last-minute cancellation gaps create a deceptively short next-available, while the third next available reveals the true two-week wait',
    wrong: [
      miss(
        'High no-shows are clogging the schedule and driving the long TNAA',
        'A 4 percent no-show rate is low and cannot explain a 14-day TNAA; the divergence comes from cancellation gaps inflating next-available, not from no-shows.',
        'Look at the no-show number: 4 percent is small. The gap between next-available and TNAA points to random short-notice openings, not missed visits.',
      ),
      miss(
        'Demand far exceeds capacity, which is why the wait is two weeks',
        'The dashboard says demand roughly equals capacity, so a pure supply shortfall is not the story; the next-available/TNAA split signals cancellation noise, not chronic overload.',
        'Re-read the demand line: it is balanced with capacity. The clue is the difference between the two wait metrics, not a volume mismatch.',
      ),
      miss(
        'The dashboard is broken because next-available should always exceed TNAA',
        'Next-available is normally shorter than TNAA, not longer; that ordering is expected, and a single near-term cancellation gap is exactly why next-available looks rosy.',
        'It is normal for next-available to be earlier than the third one. The pattern is informative, not a data error.',
      ),
    ],
    lesson:
      'Next-available can be misleadingly short when one or two recent cancellations open near-term gaps, while third next available (TNAA) sampled past those gaps shows the real wait. When the two diverge with low no-shows and balanced demand, suspect cancellation churn, not a supply crisis. TNAA is the more honest access metric for exactly this reason.',
    source,
    generated: true,
  },
  {
    id: 7622005,
    chapter: 'Practice Model and Patient Access',
    title: 'Panel size vs RVU productivity',
    prompt:
      'Leadership wants one number to compare two primary care physicians\' "productivity." One has a larger panel; the other generates more work RVUs. What is the cleanest caution about using either number alone?',
    correct:
      'Panel size measures the population owned while work RVUs measure billed clinical effort; neither alone captures acuity, access, or quality, so they must be read together',
    wrong: [
      miss(
        'Work RVUs are the only true productivity measure because panel size is not billable',
        'Work RVUs ignore unbilled but essential work (in-basket, panel management, prevention) and reward visit volume; they are useful but incomplete as a sole measure.',
        'wRVUs count billed effort and miss a lot of real work. Ask what each metric leaves out before crowning one as "true."',
      ),
      miss(
        'Panel size is the only fair measure because RVUs reward over-testing',
        'Panel size says nothing about how much care those patients actually need or receive; a large panel of healthy patients is not equivalent to a smaller, sicker one.',
        'A big roster of well patients is not heavy work. Panel size alone ignores acuity and the care actually delivered.',
      ),
      miss(
        'Both numbers are interchangeable, so leadership can pick whichever is higher',
        'They measure different things (owned population vs billed effort) and can move in opposite directions; picking the flattering one distorts the comparison.',
        'These are not the same quantity. One can be high while the other is low; they are not substitutes.',
      ),
    ],
    lesson:
      'Work RVUs (wRVU) quantify the billed clinical effort of services delivered; panel size quantifies the population a clinician is responsible for. Each misses what the other captures, and both ignore complexity, access, and quality. Compare clinicians using a balanced view (panel and acuity, wRVU, access metrics, outcomes), not a single headline number.',
    source,
    generated: true,
  },
  {
    id: 7622006,
    chapter: 'Practice Model and Patient Access',
    title: 'Slot-release rules',
    prompt:
      'A clinic protects most appointments for established follow-ups but constantly runs out of acute slots by mid-morning. A manager proposes a timed slot-release rule. What does a well-designed release rule actually do?',
    correct:
      'It converts a portion of unbooked protected slots to open booking at defined times so capacity is matched to same-day demand instead of sitting idle',
    wrong: [
      miss(
        'It permanently deletes the protected follow-up slots to make room for acute visits',
        'Release rules reassign unused capacity at set times, not delete protected slots; deletion would gut the continuity follow-ups the practice needs.',
        'Releasing is timed reassignment of unused slots, not destruction. The follow-up capacity still exists until it is released.',
      ),
      miss(
        'It lets any patient book any slot at any time with no rules at all',
        'A release rule is precisely a rule with timing and criteria; removing all rules creates chaos and is the opposite of structured slot release.',
        'The whole point is a defined trigger and timing. "No rules" is not a slot-release rule, it is the absence of one.',
      ),
      miss(
        'It charges patients a fee to unlock a protected slot early',
        'Slot release is a scheduling mechanism, not a pricing one; monetizing access blocks patients and does not match capacity to demand.',
        'This is about timing of availability, not money. A fee neither frees idle capacity nor matches it to need.',
      ),
    ],
    lesson:
      'A slot-release rule unlocks unbooked protected capacity (for example, follow-up slots still open at 24 or 48 hours out) for broader same-day or near-term booking at defined times. It keeps continuity slots protected long enough to serve their purpose while preventing idle capacity from being wasted when acute demand is high. It is timed reassignment, not deletion, free-for-all, or pricing.',
    source,
    generated: true,
  },
  {
    id: 7622007,
    chapter: 'Practice Model and Patient Access',
    title: 'Cancellation vs no-show distinction',
    prompt:
      'A manager lumps every empty slot into one "no-show" bucket. Why does separating true no-shows from late cancellations change the fix?',
    correct:
      'Late cancellations leave a known, reusable gap that a waitlist can fill, while no-shows give zero warning, so the two require different countermeasures',
    wrong: [
      miss(
        'They are the same problem and both are solved only by charging a fee',
        'They differ operationally: a late cancellation can be backfilled from a waitlist with notice, a no-show cannot; a single fee ignores the recoverable nature of cancellations.',
        'One gives you warning and a fillable gap; the other does not. Lumping them hides the waitlist opportunity.',
      ),
      miss(
        'No-shows are always the patient\'s fault and cancellations are always the clinic\'s',
        'Both have mixed causes (reminders, transport, lead time, clinic delays); assigning blanket fault does not point to a fix and is usually wrong.',
        'Causes are mixed for both, not neatly assigned. The useful distinction is recoverability, not blame.',
      ),
      miss(
        'Only no-shows matter because cancellations free the slot automatically',
        'A late cancellation does not refill itself; without a waitlist or release process the freed slot still goes empty, so it very much matters.',
        'A freed slot is not a filled slot. Cancellations only help if something is in place to backfill them.',
      ),
    ],
    lesson:
      'A late cancellation surrenders a slot with some notice, which a waitlist or slot-release process can backfill; a no-show forfeits the slot with no warning, requiring prevention (reminders, shorter lead times, transport help) and measured overbooking. Tracking them separately reveals which lever to pull and how much recoverable capacity actually exists.',
    source,
    generated: true,
  },
  {
    id: 7622008,
    chapter: 'Practice Model and Patient Access',
    title: 'Backlog math before open access',
    prompt:
      'Before going to open access, a clinic measures a "good backlog" (patients who want a future date) and a "bad backlog" (patients who would prefer sooner but were pushed out). Why is this split decisive?',
    correct:
      'Only the bad backlog must be worked down to free capacity for same-day demand; the good backlog is legitimate future demand and should be preserved',
    wrong: [
      miss(
        'Both backlogs must be eliminated entirely before open access can begin',
        'Eliminating the good backlog would cancel appointments patients actually want in the future; only the artificial (bad) backlog blocks open access.',
        'Some future bookings are exactly what patients asked for. You only need to clear the queue people were forced into.',
      ),
      miss(
        'The good backlog is the dangerous one because future visits are unpredictable',
        'It is the bad backlog that is dangerous, because it represents demand displaced into the future that should have been met sooner; chosen future visits are fine.',
        'Patients who chose a later date are not the problem. The hazard is demand that was pushed out against the patient\'s preference.',
      ),
      miss(
        'The split does not matter; you simply add staff until the wait disappears',
        'Adding staff without distinguishing real future demand from displaced demand misjudges how much capacity you actually need and can overbuild.',
        'Sizing capacity requires knowing how much of the queue is genuine future demand. The split tells you what to clear vs keep.',
      ),
    ],
    lesson:
      'Advanced-access readiness depends on separating the good backlog (patients who genuinely want a later date) from the bad backlog (patients pushed into the future against their preference). You work down only the bad backlog to create room to do today\'s work today; the good backlog is real demand to preserve. Confusing the two leads to over- or under-building capacity.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 2: Front Desk and Visit Flow
  // ===========================================================================
  {
    id: 7622009,
    chapter: 'Front Desk and Visit Flow',
    title: 'Copay vs deductible vs coinsurance',
    prompt:
      'A front-desk lead trains new staff on patient cost-share. A patient with a high-deductible plan that has not been met asks why there is "no copay but I owe a lot." What is the correct explanation?',
    correct:
      'Before the deductible is met the patient pays the contracted/allowed amount themselves; a flat copay applies only on plans that use copays, and coinsurance is a percentage after the deductible',
    wrong: [
      miss(
        'The copay and the deductible are the same thing, so the staff entered it wrong',
        'They are distinct: a copay is a fixed per-visit amount; a deductible is the cumulative amount the patient pays before the plan starts sharing cost. The bill is correct, not an error.',
        'Copay and deductible are different mechanisms. One is a flat per-visit fee; the other is a running total the patient must hit first.',
      ),
      miss(
        'Coinsurance means the patient pays a flat dollar amount per service',
        'Coinsurance is a percentage of the allowed amount, not a flat fee; the flat-fee mechanism is the copay.',
        'A percentage of the cost is coinsurance; a fixed dollar amount per visit is a copay. Do not swap them.',
      ),
      miss(
        'High-deductible plans never require any patient payment at the visit',
        'High-deductible plans often require substantial patient payment at the visit precisely because the plan does not pay until the deductible is met.',
        'Unmet deductible usually means the patient owes more at the desk, not less. The plan has not started paying yet.',
      ),
    ],
    lesson:
      'A copay is a fixed per-visit amount; a deductible is the cumulative amount a patient pays before the plan shares costs; coinsurance is a percentage of the allowed amount after the deductible. On an unmet high-deductible plan the patient owes the contracted rate, which can far exceed a typical copay. Front-desk staff must explain and collect these correctly to avoid surprises and bad debt.',
    source,
    generated: true,
  },
  {
    id: 7622010,
    chapter: 'Front Desk and Visit Flow',
    title: 'Registration accuracy and downstream denials',
    prompt:
      'A revenue analyst finds that 40 percent of denials trace to demographic or insurance-ID errors captured at registration. Where should the fix go, and why?',
    correct:
      'At the front-end registration step, with verification edits and staff feedback, because that is where the error is born and where it is cheapest to prevent',
    wrong: [
      miss(
        'In the billing department, by adding more experienced appeal writers',
        'Appealing registration errors is downstream rework; it never stops the front desk from generating the same errors tomorrow.',
        'Appeals clean up after the fact. The errors keep coming unless you fix where they originate.',
      ),
      miss(
        'Nowhere specific; a 40 percent rate is normal and acceptable for any clinic',
        'A 40 percent denial share from preventable data errors is far from acceptable and signals a fixable front-end process gap.',
        'That is a very high preventable-error share. It is a signal to fix a process, not to shrug.',
      ),
      miss(
        'In the payer\'s system, by asking the insurer to relax its edits',
        'The payer\'s edits are catching real data errors; loosening them would let bad claims through and create more rework and compliance risk, not less.',
        'The edits are doing their job by catching bad data. The problem is the data, not the edit.',
      ),
    ],
    lesson:
      'Denials born at registration (wrong member ID, name mismatch, stale plan) are cheapest to prevent at the source: real-time eligibility, field-level edits, and feedback to the staff making the errors. Fixing them only in billing is perpetual rework; the front-end cause keeps regenerating the same failures. Trace denials upstream and fix the handoff where they originate.',
    source,
    generated: true,
  },
  {
    id: 7622011,
    chapter: 'Front Desk and Visit Flow',
    title: 'Referral vs prior authorization',
    prompt:
      'A new scheduler uses "referral" and "prior authorization" interchangeably. What is the practical difference a front desk must respect?',
    correct:
      'A referral is the recommendation/permission to see another provider (often a plan requirement to see a specialist); a prior authorization is the payer\'s approval that a specific service will be covered',
    wrong: [
      miss(
        'They are identical, and having one always satisfies the other',
        'They are different requirements: a referral can be on file while a service still lacks prior authorization, and the missing one drives the denial.',
        'You can hold a valid referral and still be denied for lack of prior auth. They are separate gates.',
      ),
      miss(
        'A prior authorization is only ever required for office visits, not procedures',
        'It is the opposite emphasis: prior authorization is most often required for procedures, imaging, and drugs, less so for routine visits.',
        'Prior auth usually attaches to procedures, imaging, and medications, not basic visits. You have the typical case reversed.',
      ),
      miss(
        'A referral is issued by the insurer and a prior authorization is issued by the patient',
        'A referral typically comes from the referring clinician (and may be required by the plan); prior authorization is granted by the payer. Patients do not issue authorizations.',
        'Patients do not grant authorizations. Sort out who issues each: the referring clinician vs the payer.',
      ),
    ],
    lesson:
      'A referral is the act/permission of sending a patient to another provider, sometimes mandated by the plan to see a specialist. A prior authorization is the payer\'s advance approval that a specific service, drug, or procedure will be covered. Both can be required for the same encounter, and missing either one causes denials, so the front desk must track them separately.',
    source,
    generated: true,
  },
  {
    id: 7622012,
    chapter: 'Front Desk and Visit Flow',
    title: 'Rooming standard ownership',
    prompt:
      'Vitals, medication reconciliation, and screening prompts are done inconsistently because each medical assistant "rooms their own way." What is the durable fix, and what is the trap to avoid?',
    correct:
      'Define one written rooming standard and train to it; the trap is letting personal styles continue, which is the source of the variation',
    wrong: [
      miss(
        'Let the fastest medical assistant\'s method become the unofficial standard by example',
        'Speed is not the same as completeness; copying the quickest person can lock in skipped steps and miss the point of standard work.',
        'Fastest is not the same as correct. A standard is about reliable completeness, not whoever finishes first.',
      ),
      miss(
        'Have providers redo the rooming steps themselves to guarantee accuracy',
        'Pulling the highest-cost clinician down to redo rooming wastes their time and is the opposite of working at top of license; the fix is a reliable MA standard.',
        'Making providers redo MA work is expensive and backwards. The point is a standard the MAs can follow, not provider rework.',
      ),
      miss(
        'Accept the variation since each MA knows their own patients best',
        'Inconsistent vitals and reconciliation are a safety and rework problem regardless of familiarity; the variation is exactly what is being complained about.',
        'Familiarity does not justify missing vitals or reconciliations. The variation itself is the defect to remove.',
      ),
    ],
    lesson:
      'Reliable clinical support requires standard work: one documented rooming standard (vitals, medication reconciliation, screening prompts, room setup) that everyone is trained to and audited against. The recurring trap is tolerating personal styles, which is precisely what generates the missing-data and rework problems. Standardize the floor, not the ceiling.',
    source,
    generated: true,
  },
  {
    id: 7622013,
    chapter: 'Front Desk and Visit Flow',
    title: 'Cycle time vs wait time',
    prompt:
      'A manager wants to improve patient flow and starts measuring "cycle time." A staff member confuses it with the appointment length. What does cycle time actually measure?',
    correct:
      'Total elapsed time from the patient walking in to walking out, including all waiting, not just the face-to-face visit duration',
    wrong: [
      miss(
        'Only the minutes the clinician spends in the exam room with the patient',
        'That is provider face-time; cycle time captures the whole door-to-door experience including check-in, rooming waits, and checkout, where most delay hides.',
        'Face-to-face time is one slice. Cycle time spans arrival to departure, including all the waiting in between.',
      ),
      miss(
        'The number of patients a clinician can see in one day',
        'That is throughput or volume, a different metric; cycle time is the duration of one patient\'s journey, not a daily count.',
        'A daily count is throughput. Cycle time is about one patient\'s elapsed journey, not how many fit in a day.',
      ),
      miss(
        'The scheduled appointment length printed on the template',
        'Scheduled length is a planning input; actual cycle time is measured and usually exceeds it because of real-world waits and handoffs.',
        'The planned slot length is not the measured experience. Cycle time is what actually elapses for the patient.',
      ),
    ],
    lesson:
      'Cycle time is the total elapsed time from patient arrival to departure, including every wait, not just the clinician face-time or the scheduled slot. Measuring it exposes where delay actually accumulates (check-in, rooming, lab, checkout) so improvement targets the real bottleneck rather than blaming the visit length.',
    source,
    generated: true,
  },
  {
    id: 7622014,
    chapter: 'Front Desk and Visit Flow',
    title: 'Estimating patient responsibility',
    prompt:
      'To collect more at time of service, a practice wants front-desk staff to quote a patient-responsibility estimate. What inputs make that estimate trustworthy enough to collect on?',
    correct:
      'Real-time eligibility showing plan status, deductible met-to-date, copay/coinsurance, and the contracted allowed amount for the planned service',
    wrong: [
      miss(
        'The practice\'s full billed charge, since that is the most the patient could owe',
        'Billed charges are not what the patient owes; the patient owes their share of the contracted allowed amount, so quoting full charges overstates and erodes trust.',
        'Patients owe a share of the allowed amount, not the sticker charge. Quoting full charges is both wrong and off-putting.',
      ),
      miss(
        'Last year\'s benefit information stored in the chart',
        'Benefits reset and change at plan-year and job changes; a stale snapshot produces wrong estimates and the disputes you are trying to avoid.',
        'Benefits change yearly and with job changes. A cached figure from last year is exactly how estimates go wrong.',
      ),
      miss(
        'A flat percentage of the charge applied to every patient regardless of plan',
        'A uniform percentage ignores each plan\'s deductible status, copay, and coinsurance, so it is right by accident at best.',
        'One blanket percentage cannot fit different plans and deductible positions. The estimate has to reflect this patient\'s actual benefits.',
      ),
    ],
    lesson:
      'A collectible time-of-service estimate rests on current, real-time benefit data: active coverage, deductible met-to-date, copay and coinsurance, and the contracted allowed amount for the specific service. Quoting full billed charges, stale benefits, or a flat percentage produces wrong numbers that damage trust and collections. Accurate inputs make front-desk collection both fair and effective.',
    source,
    generated: true,
  },
  {
    id: 7622015,
    chapter: 'Front Desk and Visit Flow',
    title: 'Minimum necessary at the front desk',
    prompt:
      'A busy waiting room lets staff call out patients\' full names, dates of birth, and reason for visit. Beyond etiquette, which HIPAA principle does this most directly implicate?',
    correct:
      'The minimum necessary standard, which limits use and disclosure of protected health information to what is needed for the task at hand',
    wrong: [
      miss(
        'The right of access, which guarantees patients copies of their records',
        'Right of access governs giving patients their own records, not how much information staff broadcast in a lobby; this is a use/disclosure limitation issue.',
        'Right of access is about handing records to the patient. Announcing details aloud is about limiting unnecessary disclosure.',
      ),
      miss(
        'The breach notification rule, which requires reporting after a hacking incident',
        'Breach notification applies after an impermissible disclosure occurs; the principle that should prevent over-sharing in the first place is minimum necessary.',
        'Notification is the after-the-fact step. The principle that should stop the over-sharing up front is the one to name.',
      ),
      miss(
        'The conditions-of-participation rule for hospital accreditation',
        'Conditions of participation are Medicare hospital requirements, not the HIPAA privacy principle governing how much PHI staff may reveal.',
        'That is a Medicare hospital standard, not the HIPAA privacy concept about limiting what you disclose.',
      ),
    ],
    lesson:
      'HIPAA\'s minimum necessary standard requires limiting the use, disclosure, and request of protected health information to the least needed for the purpose. Announcing full identifiers and reason-for-visit in a public lobby exceeds that. Practical fixes include calling first name only, using numbers or discreet rooming, and positioning screens and conversations away from public earshot.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 3: Clinical Support and Provider Productivity
  // ===========================================================================
  {
    id: 7622016,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Standing order vs protocol vs delegation',
    prompt:
      'A clinic wants medical assistants to give certain vaccines without the physician writing an individual order each time. What instrument authorizes this, and what must it contain to be safe?',
    correct:
      'A standing order: a written, clinician-authorized protocol with eligibility criteria, contraindications, dosing, and escalation rules that lets qualified staff act without a per-patient order',
    wrong: [
      miss(
        'A verbal "go ahead" from whichever clinician is nearby that day',
        'A verbal, ad hoc okay is not a standing order; it lacks written criteria, contraindications, and consistency, and is indefensible in audit.',
        'A casual verbal nod is not an authorizing instrument. A standing order is written, with criteria and contraindications baked in.',
      ),
      miss(
        'Each MA\'s own judgment, since experienced staff know who needs a vaccine',
        'Individual judgment without a written standing order is the source of variation and risk the protocol exists to prevent; scope of practice requires an authorizing order.',
        'Personal judgment is exactly what a standing order replaces with consistent, authorized criteria. It is not a substitute for the order.',
      ),
      miss(
        'The vaccine manufacturer\'s package insert, which serves as the order',
        'The insert informs dosing and storage but does not authorize a specific staff member to administer without a clinician-signed standing order.',
        'A package insert is reference, not authorization. Someone with prescriptive authority still has to sign the standing order.',
      ),
    ],
    lesson:
      'A standing order is a written protocol, authorized by a clinician with prescriptive authority, that lets qualified staff perform defined actions (like vaccinations) without an individual order, provided eligibility criteria, contraindications, dosing, and escalation rules are spelled out. Verbal okays, personal judgment, or a package insert do not meet that bar and create safety and audit risk.',
    source,
    generated: true,
  },
  {
    id: 7622017,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Vaccine excursion: frozen line',
    prompt:
      'A clinic\'s freezer holding varicella vaccine reads -10 degrees Celsius one morning. Compared with the refrigerated 2 to 8 degrees Celsius line, what is the issue and the first step?',
    correct:
      'Frozen varicella must stay between -50 and -15 degrees Celsius, so -10 is an out-of-range excursion; quarantine the doses, label "do not use," and consult the manufacturer/program before administering',
    wrong: [
      miss(
        'No problem, because -10 degrees Celsius is colder than the 2 to 8 range, so it is safely frozen',
        'Frozen varicella requires -50 to -15 degrees Celsius; -10 is too warm for the frozen line even though it is below the refrigerated range, so it is a real excursion.',
        'The refrigerated 2-8 range is the wrong yardstick. Frozen varicella needs -50 to -15, and -10 falls outside that.',
      ),
      miss(
        'Move it immediately to the refrigerator at 2 to 8 degrees Celsius to "warm it up" to a safe range',
        'Refrigerated storage is not the licensed condition for frozen varicella; moving it there is another excursion, not a remedy.',
        'Varicella is a frozen-storage vaccine. Putting it in the fridge is a second excursion, not a fix.',
      ),
      miss(
        'Use the doses quickly before they warm further since the freezer is recovering',
        'Administering possibly compromised doses under schedule pressure is unsafe; viability must be determined by the manufacturer or program first.',
        'Schedule pressure never overrides cold-chain safety. Determine viability before any dose is given.',
      ),
    ],
    lesson:
      'Refrigerated vaccines store at 2 to 8 degrees Celsius, but frozen vaccines like varicella require -50 to -15 degrees Celsius. A freezer reading of -10 is too warm and is an excursion. The response is the same discipline as any excursion: quarantine, label "do not use," and contact the manufacturer or immunization program for a viability determination before administering. Never assume "colder" or "the fridge" is automatically safe.',
    source,
    generated: true,
  },
  {
    id: 7622018,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Nurse triage red flags',
    prompt:
      'A nurse-triage protocol routes most "chest tightness" calls to a same-day visit, but one caller describes crushing chest pain radiating to the arm with sweating. What must the protocol require here?',
    correct:
      'Immediate escalation to emergency care (call 911/ED), overriding the routine same-day routing, because red-flag symptoms bypass the standard pathway',
    wrong: [
      miss(
        'Book the same-day clinic slot like the other chest-tightness calls to keep the protocol consistent',
        'A protocol that cannot escalate true emergencies is unsafe; red-flag presentations must override routine routing, not be forced into it for consistency.',
        'Consistency does not mean treating an emergency like a routine call. The protocol must have an override for red flags.',
      ),
      miss(
        'Tell the patient to take aspirin and call back in an hour if it worsens',
        'Delaying definitive emergency evaluation for a possible acute coronary syndrome is dangerous; triage must direct to emergency services now, not wait-and-see.',
        'Wait-and-see is the wrong move for a possible heart attack. Triage should send the patient to emergency care immediately.',
      ),
      miss(
        'Transfer the call to scheduling to find the soonest specialist appointment',
        'A future cardiology appointment does not address an acute emergency happening now; the protocol must trigger emergency care, not outpatient booking.',
        'A specialist appointment is a future event. An emergency presentation needs emergency services this moment.',
      ),
    ],
    lesson:
      'Nurse-triage protocols must include red-flag criteria that override routine routing. Crushing chest pain radiating to the arm with diaphoresis is a possible acute coronary syndrome requiring immediate emergency activation, not a same-day clinic slot, home aspirin-and-wait, or a future specialist appointment. Safe protocols define when to escalate out of the standard pathway.',
    source,
    generated: true,
  },
  {
    id: 7622019,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Scope of practice limits',
    prompt:
      'Under schedule pressure, a manager asks a medical assistant to independently adjust a patient\'s insulin dose over the phone. Why is this the wrong delegation, regardless of the MA\'s experience?',
    correct:
      'Adjusting a medication dose is a clinical decision outside an MA\'s scope of practice; experience does not expand legal scope, so it must be a clinician decision or a tightly defined protocol with clinician sign-off',
    wrong: [
      miss(
        'It is fine because an experienced MA effectively functions as a nurse',
        'Functioning informally does not change licensure; scope of practice is defined by law and credential, not by how capable someone is in practice.',
        'Capability is not credential. Scope is set by law and license, not by how skilled the person has become.',
      ),
      miss(
        'It is fine as long as the patient consents to the MA making the change',
        'Patient consent cannot authorize a staff member to perform work outside their legal scope; consent does not cure a scope violation.',
        'A patient cannot consent someone into a scope they do not legally have. The barrier is licensure, not permission.',
      ),
      miss(
        'It is only a problem if the dose change causes harm',
        'Acting outside scope is a violation whether or not harm results; the absence of a bad outcome does not make the delegation appropriate.',
        'Scope violations do not become acceptable just because nothing went wrong. The act itself is outside the role.',
      ),
    ],
    lesson:
      'Scope of practice is set by licensure and law, not by individual skill, patient consent, or whether harm occurred. Adjusting a medication dose is a clinical decision beyond a medical assistant\'s scope; it requires a clinician or a clinician-authorized protocol with defined parameters and sign-off. Delegating outside scope under schedule pressure is a safety and legal failure.',
    source,
    generated: true,
  },
  {
    id: 7622020,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Pre-visit planning for productivity',
    prompt:
      'A clinic adds a "pre-visit planning" huddle each morning. Which task belongs in pre-visit planning to genuinely protect provider time?',
    correct:
      'Identifying care gaps and needed labs/results ahead of the visit so they are ready when the patient arrives, reducing in-visit scramble and rework',
    wrong: [
      miss(
        'Having the provider personally call every patient the night before to confirm',
        'Provider confirmation calls are low-value use of the most expensive time; pre-visit planning is about staff preparing data, not clinicians doing reminder calls.',
        'Pre-visit planning offloads prep from the clinician. Having the provider make confirmation calls does the opposite.',
      ),
      miss(
        'Waiting until the patient is roomed to order any overdue screening labs',
        'Ordering overdue labs only after rooming defeats pre-visit planning; the point is to have results in hand so decisions can be made during the visit.',
        'In-room ordering is exactly the scramble pre-visit planning removes. The labs should be anticipated before arrival.',
      ),
      miss(
        'Cancelling the huddle whenever the schedule looks full to save time',
        'Skipping planning on busy days removes the tool exactly when it helps most; the busiest days benefit most from readiness.',
        'The huddle pays off most on full days. Dropping it when busy is when you most need the prep.',
      ),
    ],
    lesson:
      'Pre-visit planning has the care team review each patient before the visit, surfacing care gaps, due screenings, and needed labs/results so they are ready at the encounter. This protects scarce provider time, cuts in-visit scrambling and follow-up rework, and improves quality capture. It is staff preparation work, not provider phone calls or in-room catch-up, and it matters most on busy days.',
    source,
    generated: true,
  },
  {
    id: 7622021,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Prior-auth workload ownership',
    prompt:
      'Procedures are repeatedly canceled because prior authorizations are started late and no one owns payer follow-up. What is the most durable operational fix?',
    correct:
      'Assign a clear owner and define triggers, required documentation, status tracking, and escalation timelines so authorizations start early and are followed to a decision',
    wrong: [
      miss(
        'Tell the provider to handle each authorization personally between patients',
        'Loading authorizations onto the clinician between visits is a poor use of clinical time and predictably gets dropped under patient load; it needs a defined owner and workflow.',
        'Squeezing auth work into clinical gaps guarantees it slips. The fix is a defined owner and tracking, not provider multitasking.',
      ),
      miss(
        'Start authorizations only after the procedure is scheduled and the patient arrives',
        'Starting at arrival is too late; authorizations take days, so a late start causes exactly the cancellations described. They must begin at the trigger event.',
        'By arrival there is no time left. Authorization has to start at the order/trigger, not on the day of service.',
      ),
      miss(
        'Have each staff member keep a personal list of the auths they happen to know about',
        'Personal lists destroy visibility and continuity; when that person is out, the work and its status vanish, recreating the failure.',
        'Private lists are invisible to everyone else. Tracking has to be shared and owned, not scattered in individual notes.',
      ),
    ],
    lesson:
      'Prior authorization is a managed workflow, not an afterthought. The durable fix names an owner and defines triggers (which orders need auth), required clinical documentation, shared status tracking, and escalation timelines, so authorizations start early and are pursued to a decision. Provider multitasking, late starts, and personal lists all reproduce the cancellations they are meant to prevent.',
    source,
    generated: true,
  },
  {
    id: 7622022,
    chapter: 'Clinical Support and Provider Productivity',
    title: 'Result-management protocol',
    prompt:
      'A clinic wants medical assistants to handle normal lab results so the provider only sees abnormals. What single design element keeps this safe?',
    correct:
      'A clear, written definition of "normal" with explicit escalation thresholds, so any value outside the defined-normal band routes to the clinician',
    wrong: [
      miss(
        'Trusting each MA to decide case by case which results look fine',
        'Case-by-case judgment without defined thresholds is exactly the unsafe variation a protocol must remove; "looks fine" is not a criterion.',
        'A safe protocol does not rely on eyeballing. It needs written thresholds that define normal and trigger escalation.',
      ),
      miss(
        'Letting the MA contact the patient about abnormal results to save the provider time',
        'Communicating and acting on abnormal results is clinical work; abnormals must go to the clinician, not be managed by the MA to save time.',
        'Abnormals are clinician territory. Offloading them to the MA defeats the safety purpose of the protocol.',
      ),
      miss(
        'Having the MA delete results that are only slightly out of range to reduce clutter',
        'Deleting any result is a patient-safety and record-integrity failure; out-of-range values must be surfaced, never discarded.',
        'No result should ever be deleted. Slightly abnormal values still need clinician eyes, not the trash.',
      ),
    ],
    lesson:
      'A safe result-management protocol defines "normal" with explicit numeric thresholds and routes anything outside that band, plus any value needing clinical judgment, to the clinician. Staff handle only clearly defined-normal results and known follow-up steps. Case-by-case guessing, having staff manage abnormals, or deleting results all break the safety design.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 4: Revenue Cycle and Charge Capture
  // ===========================================================================
  {
    id: 7622023,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Charge lag impact',
    prompt:
      'A practice\'s average "charge lag" (days from service to charge entry) is 9 days, and it correlates with rising days in A/R. Why does charge lag matter on its own?',
    correct:
      'Every day of charge lag delays claim submission and therefore payment, and it raises the risk of missing timely-filing deadlines that void the claim entirely',
    wrong: [
      miss(
        'Charge lag has no effect because the claim is paid the same regardless of when it is filed',
        'Late filing can blow past payer timely-filing limits, which void the claim; even within limits, lag delays cash and lengthens A/R.',
        'Filing late risks the timely-filing deadline and always delays cash. The timing is not free.',
      ),
      miss(
        'Charge lag only matters for patient statements, not insurance claims',
        'It affects insurance claims first: charges must be entered before a clean claim can go out, so lag delays payer submission directly.',
        'The claim cannot be sent until the charge is entered. Lag hits payer claims, not just patient bills.',
      ),
      miss(
        'A 9-day lag actually improves accuracy and should be encouraged',
        'There is no accuracy benefit to sitting on charges; prompt, accurate entry is the goal, and lag only adds risk and delay.',
        'Waiting does not make charges more accurate. The aim is prompt and correct, not slow.',
      ),
    ],
    lesson:
      'Charge lag is the time from service date to charge entry. Because claims cannot be submitted until charges are entered, lag directly delays payment and inflates days in A/R, and it risks breaching payer timely-filing limits that void the claim outright. Prompt, accurate charge entry, with reconciliation against the schedule, protects both cash flow and clean-claim eligibility.',
    source,
    generated: true,
  },
  {
    id: 7622024,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Charge reconciliation method',
    prompt:
      'To stop missed charges, a manager wants a reconciliation step. What is the most reliable reconciliation control?',
    correct:
      'Match every scheduled/completed encounter against a captured charge daily, and work the exceptions, so no completed visit closes without a charge or a documented reason',
    wrong: [
      miss(
        'Rely on month-end revenue variance to reveal any missing visits',
        'Billing has no signal for a charge that was never entered; relying on someone noticing a low total is not a control and misses the leak.',
        'A missing charge is invisible to billing. You need an explicit visit-to-charge match, not a gut sense of low revenue.',
      ),
      miss(
        'Spot-check a random 5 percent of visits at the end of each month',
        'A small monthly sample finds errors late and misses most leakage; reconciliation should be a daily, complete match, not a thin retrospective sample.',
        'A 5 percent monthly sample is too little, too late. Reconciliation works best as a complete daily check.',
      ),
      miss(
        'Add a buffer charge to every visit to cover anything that might be missed',
        'Padding charges to cover gaps is speculative and improper billing; the fix is to capture what actually happened, not to inflate every claim.',
        'Inflating every claim to compensate is a compliance problem. Capture the real service, do not guess upward.',
      ),
    ],
    lesson:
      'Reliable charge capture uses daily reconciliation: every completed encounter is matched to a captured charge, and exceptions are worked before they age. This catches the missing-charge leak at the source. Hoping billing notices, sampling a thin slice monthly, or padding charges all either miss the leakage or create compliance risk. The control is a complete, timely visit-to-charge match.',
    source,
    generated: true,
  },
  {
    id: 7622025,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Medical necessity denial',
    prompt:
      'A claim for an office service is denied for "lack of medical necessity" even though the service was performed correctly. What does this denial actually mean, and what is the right response?',
    correct:
      'The payer found the documentation/diagnosis did not support coverage for that service; review and, if justified, appeal with documentation linking the diagnosis to the service, and fix the upstream documentation pattern',
    wrong: [
      miss(
        'It means the service was performed wrong and should be written off immediately',
        'Medical-necessity denials are about documentation and coverage criteria, not whether the service was done correctly; writing off a defensible claim forfeits earned revenue.',
        'The denial is about supporting documentation, not technique. A defensible service should be reviewed and appealed, not abandoned.',
      ),
      miss(
        'It means the patient must pay the full charge since insurance declined',
        'You cannot automatically balance-bill the patient for a medical-necessity denial; coverage and any ABN/notice rules govern patient liability, not a blanket transfer.',
        'A denial does not automatically make it the patient\'s bill. Patient liability depends on notice rules, not on the payer saying no.',
      ),
      miss(
        'It means the diagnosis code is irrelevant and only the procedure code matters',
        'Medical necessity hinges precisely on the diagnosis supporting the procedure; the diagnosis-to-service linkage is the heart of the issue.',
        'Diagnosis coding is central here. Medical necessity is exactly about the diagnosis justifying the service.',
      ),
    ],
    lesson:
      'A medical-necessity denial means the payer did not find documentation and diagnosis supporting coverage for the service, regardless of whether it was performed well. The response is to review the record, appeal with documentation linking diagnosis to service where justified, and fix the upstream documentation/coding pattern. It is not an automatic write-off, an automatic patient bill, or a sign the diagnosis code is irrelevant.',
    source,
    generated: true,
  },
  {
    id: 7622026,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Aged-receivables segmentation',
    prompt:
      'An AR backlog has aged into the 90-plus-day bucket. With limited staff, how should the manager prioritize the work for the best recovery?',
    correct:
      'Segment by payer, dollar value, age, and root cause, then work the highest-value, most-recoverable accounts first while fixing the causes generating new aged claims',
    wrong: [
      miss(
        'Work the accounts strictly oldest-first regardless of dollar value or recoverability',
        'Pure oldest-first ignores that the oldest claims may be the least recoverable and the smallest; value and recoverability should weight the queue.',
        'Oldest is not the same as most recoverable. Weight by dollar value and likelihood, not date alone.',
      ),
      miss(
        'Write off the entire 90-plus bucket to clean up the aging report',
        'Indiscriminate write-offs discard collectible revenue and hide the upstream causes that will refill the bucket; that is cosmetic, not corrective.',
        'Mass write-offs throw away real money and mask the cause. The report looks clean while the leak continues.',
      ),
      miss(
        'Send every aged account straight to a collection agency immediately',
        'Blanket agency referral recovers cents on the dollar minus fees and skips recoverable insurance balances that just need follow-up, not collections.',
        'Many aged accounts are payer balances needing follow-up, not collections. A blanket agency dump under-recovers and skips the cheap fixes.',
      ),
    ],
    lesson:
      'Aged-receivables work should be prioritized by segmenting on payer, dollar value, age, and root cause, then attacking the highest-value, most-recoverable accounts while fixing what keeps generating aged claims. Oldest-first ignores recoverability, blanket write-offs discard money and hide causes, and mass agency referral under-recovers. Segment, prioritize, and close the upstream loop.',
    source,
    generated: true,
  },
  {
    id: 7622027,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Net collection rate',
    prompt:
      'A practice reports a 99 percent gross collection rate and the owner is thrilled. The CFO insists on the net collection rate instead. Why is the net rate the more meaningful number?',
    correct:
      'Net collection rate measures collections against what was actually collectible (charges minus contractual adjustments), so it reveals true performance, while gross rate is distorted by inflated charge masters',
    wrong: [
      miss(
        'Gross collection rate is better because a higher percentage always means more cash',
        'Gross rate compares collections to billed charges, which can be set arbitrarily high; a high gross rate can coexist with poor real performance, so it is not "more cash."',
        'Gross rate divides by sticker charges you can inflate at will. A big percentage there does not mean strong collections.',
      ),
      miss(
        'Net collection rate is just gross rate with the patient portion removed',
        'Net collection rate removes contractual adjustments (the agreed payer write-downs) to measure against collectible revenue, not merely the patient share.',
        'The adjustment being removed is the payer contractual write-down, not the patient portion. That is what makes net meaningful.',
      ),
      miss(
        'The two rates are always equal, so it does not matter which is reported',
        'They differ whenever charges exceed allowed amounts (almost always), because gross divides by billed charges and net by collectible charges.',
        'They diverge as soon as billed charges exceed allowed amounts, which is the normal case. They are not the same number.',
      ),
    ],
    lesson:
      'Gross collection rate divides payments by billed charges, which can be inflated, so a high figure can be meaningless. Net collection rate divides payments by collectible revenue (charges minus contractual adjustments), revealing how well the practice collects what it could actually expect after writing off uncollectible amounts. Net rate is the honest performance measure of the revenue cycle.',
    source,
    generated: true,
  },
  {
    id: 7622028,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Front-end edits vs payer edits',
    prompt:
      'A billing manager wants to catch claim problems before they ever reach the payer. What is the role of a front-end claim scrubber/edit set?',
    correct:
      'It applies rules to flag and stop likely-rejectable or denial-prone claims before submission so they can be corrected, raising the first-pass clean claim rate',
    wrong: [
      miss(
        'It automatically appeals any claim the payer later denies',
        'A scrubber works before submission to prevent problems; appeals happen after a payer decision and are a different, downstream process.',
        'Scrubbing is preventive and pre-submission. Appeals are after the payer rules. The scrubber is not an appeal engine.',
      ),
      miss(
        'It increases the charge amount to maximize reimbursement on each claim',
        'A scrubber checks data correctness and rule compliance, not pricing; inflating charges is not its function and would be improper.',
        'Edits check correctness, not price. Raising charges is neither the scrubber\'s job nor appropriate.',
      ),
      miss(
        'It is unnecessary because payers will simply correct errors for the practice',
        'Payers reject or deny on errors rather than fixing them; catching errors up front is what avoids that rework and delay.',
        'Payers do not fix your errors; they bounce the claim. Front-end edits are what prevent that.',
      ),
    ],
    lesson:
      'A front-end claim scrubber applies edits (eligibility, coding, payer rules, required fields) to flag and hold problem claims before submission, so staff fix them up front. This raises the first-pass clean claim rate and prevents rejections and denials. It is not an appeal tool, not a pricing tool, and it exists precisely because payers bounce errors rather than correcting them.',
    source,
    generated: true,
  },
  {
    id: 7622029,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'Posting an underpayment',
    prompt:
      'A payer pays $80 on a claim where the contracted allowed amount is $110. A poster is about to write off the $30 gap as a contractual adjustment. What is the correct judgment?',
    correct:
      'Do not write it off as contractual; an underpayment below the contracted rate should be identified and appealed/recovered, not absorbed as if it were an agreed adjustment',
    wrong: [
      miss(
        'Write off the $30 because any difference from the charge is a contractual adjustment',
        'A contractual adjustment is the difference between billed charge and the allowed amount; paying below the allowed amount is an underpayment to pursue, not a contractual write-off.',
        'Contractual adjustment is charge-minus-allowed. Here the payer underpaid the allowed amount itself, which is recoverable, not a write-off.',
      ),
      miss(
        'Bill the patient the $30 since the payer did not pay it',
        'The $30 is a payer underpayment against the contract, not patient responsibility; balance-billing the patient for it is improper.',
        'A contractual underpayment is between the practice and payer, not the patient\'s to pay. Do not shift it to the patient.',
      ),
      miss(
        'Write off the underpayment as immaterial because it is only $30',
        'Systematic small underpayments aggregate into large losses and signal a fee-schedule loading or adjudication error worth catching across all claims.',
        'Small underpayments repeat across thousands of claims. The pattern, not the single $30, is the real money.',
      ),
    ],
    lesson:
      'A contractual adjustment is billed charge minus the contracted allowed amount; a payment below the allowed amount is an underpayment, not an adjustment, and should be flagged and recovered. Writing it off, billing the patient, or ignoring small gaps all leak revenue, and recurring underpayments often reveal a fee-schedule or adjudication error worth correcting across every affected claim.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 5: Documentation and Coding Compliance
  // ===========================================================================
  {
    id: 7622030,
    chapter: 'Documentation and Coding Compliance',
    title: 'MDM: the three elements',
    prompt:
      'Under the 2021 office-visit rules, when a clinician levels by medical decision making rather than time, how is the MDM level determined?',
    correct:
      'By meeting or exceeding two of three elements: number/complexity of problems addressed, amount/complexity of data reviewed, and risk of complications/morbidity',
    wrong: [
      miss(
        'By the total number of diagnoses listed, with more diagnoses always meaning a higher level',
        'MDM is not a diagnosis count; it weighs the complexity of problems addressed, data, and risk, and two of those three set the level, not a tally of diagnoses.',
        'Counting diagnoses is not MDM. The level comes from two of three elements: problems, data, and risk.',
      ),
      miss(
        'By the extent of the history and physical exam documented',
        'Since 2021, history and exam volume no longer drive the office-visit level; only medically appropriate history/exam is required and MDM is set by problems, data, and risk.',
        'History and exam stopped driving the level in 2021. MDM is the problems/data/risk grid, not H&P bulk.',
      ),
      miss(
        'By satisfying all three MDM elements at the same level, with no exceptions',
        'The rule requires meeting or exceeding two of the three elements, not all three; demanding all three would systematically under-level visits.',
        'It is two of three, not all three. Requiring every element would wrongly downgrade many visits.',
      ),
    ],
    lesson:
      'For 2021 office E/M (99202-99215), MDM is graded on three elements: number and complexity of problems addressed, amount and complexity of data reviewed/analyzed, and risk of complications/morbidity. The visit level is set by meeting or exceeding two of these three. It is not a diagnosis count, not driven by history/exam volume, and does not require all three elements to align.',
    source,
    generated: true,
  },
  {
    id: 7622031,
    chapter: 'Documentation and Coding Compliance',
    title: 'Time-based leveling: what counts',
    prompt:
      'A clinician chooses to level a 2021 office visit by total time. Which activities can be counted toward that total on the date of the encounter?',
    correct:
      'Both face-to-face and non-face-to-face work personally done by the clinician that day, such as reviewing records, ordering, documenting, and coordinating care',
    wrong: [
      miss(
        'Only the minutes spent face-to-face in the exam room with the patient',
        'The 2021 rules expanded countable time to include the clinician\'s non-face-to-face same-day work, not just exam-room minutes.',
        'Face-to-face minutes are only part of it. Same-day non-face-to-face physician work now counts too.',
      ),
      miss(
        'Time spent by staff (the medical assistant and nurse) on the patient that day',
        'Only the billing clinician\'s personal time counts; staff time is not included in the physician\'s total-time calculation.',
        'It is the clinician\'s own time, not the team\'s. MA and nurse minutes do not go into the count.',
      ),
      miss(
        'Time spent on a different calendar day finishing the note',
        'Total time is the clinician\'s time on the date of the encounter; work done on another day is not counted toward that visit\'s time.',
        'The total is for the date of the encounter. Work bled into another day does not count toward this visit.',
      ),
    ],
    lesson:
      'Under 2021 office E/M time-based leveling, you count the billing clinician\'s total personal time on the date of the encounter, including both face-to-face and non-face-to-face work: reviewing records, ordering tests, documenting, and coordinating care. Staff time, exam-room minutes alone, and work on other days do not count. Accurate time documentation must support the level chosen.',
    source,
    generated: true,
  },
  {
    id: 7622032,
    chapter: 'Documentation and Coding Compliance',
    title: 'Modifier 25 vs modifier 57',
    prompt:
      'A surgeon evaluates a patient and decides to perform a major surgery (90-day global) the next day, billing an E/M for that decision visit. Which modifier applies, and why not modifier 25?',
    correct:
      'Modifier 57 (decision for surgery) applies to the E/M that leads to a major procedure; modifier 25 is for a separate E/M with a minor (0- or 10-day) procedure, not a major surgery decision',
    wrong: [
      miss(
        'Modifier 25, because it always covers an E/M billed near any procedure',
        'Modifier 25 is for a significant, separate E/M on the same day as a minor procedure; the decision-for-surgery E/M tied to a major (90-day global) procedure uses modifier 57.',
        'Modifier 25 pairs with minor procedures. A major-surgery decision visit is modifier 57 territory.',
      ),
      miss(
        'No modifier is needed because the E/M is automatically separately payable before surgery',
        'Without the correct modifier, the E/M can be bundled into the global package and denied; modifier 57 is required to signal the decision-for-surgery exception.',
        'Unmodified, the E/M may bundle into the surgical global. You need modifier 57 to break it out.',
      ),
      miss(
        'Modifier 59, because the E/M is a distinct procedural service',
        'Modifier 59 is for distinct procedural services (e.g., separate procedures), not for flagging an E/M that resulted in the decision for major surgery.',
        'Modifier 59 separates procedures, not the decision-for-surgery E/M. The right flag here is 57.',
      ),
    ],
    lesson:
      'Modifier 57 marks the E/M service that results in the decision to perform a major surgery (90-day global), on the day of or the day before. Modifier 25 marks a significant, separately identifiable E/M on the same day as a minor (0- or 10-day global) procedure. Using the wrong modifier, or none, risks the E/M bundling into the global package and being denied.',
    source,
    generated: true,
  },
  {
    id: 7622033,
    chapter: 'Documentation and Coding Compliance',
    title: 'Incident-to: new problem mid-course',
    prompt:
      'A patient established for hypertension sees the NP for that follow-up (physician-initiated plan, physician on site). During the visit the patient reports a brand-new, unrelated problem the NP evaluates and treats. How should this be billed?',
    correct:
      'The new, unrelated problem cannot be billed incident-to; that portion must be billed under the NP\'s own number at 85 percent because the physician did not initiate that plan of care',
    wrong: [
      miss(
        'The entire visit can still be billed incident-to at 100 percent because the patient is established',
        'Incident-to requires the physician to have initiated the plan for the problem being treated; a brand-new problem fails that test even for an established patient.',
        'Established status is not enough. Incident-to needs the physician to have started the plan for that specific problem.',
      ),
      miss(
        'The visit cannot be billed at all because a new problem voids the whole encounter',
        'The encounter is billable; the hypertension follow-up may qualify and the new problem is billed under the NP\'s own number. Nothing voids the visit.',
        'A new problem does not erase the visit. It just changes which number bills which part.',
      ),
      miss(
        'Add modifier 25 and bill the new problem incident-to as a separate E/M',
        'Modifier 25 addresses a separate E/M with a same-day procedure; it does not convert a new-problem service into an incident-to-eligible one. The incident-to criteria still fail.',
        'Modifier 25 is about E/M-plus-procedure, not about rescuing incident-to eligibility for a new problem.',
      ),
    ],
    lesson:
      'Incident-to billing at 100 percent of the physician fee schedule requires the physician to have initiated the plan of care for the problem being treated, with the patient established and the physician providing direct supervision in the office. A new, unrelated problem the physician never initiated does not qualify and must be billed under the NPP\'s own number at 85 percent. A new problem does not void the visit or get cured by modifier 25.',
    source,
    generated: true,
  },
  {
    id: 7622034,
    chapter: 'Documentation and Coding Compliance',
    title: 'Upcoding vs downcoding risk',
    prompt:
      'A compliance review finds a clinician reflexively bills 99213 for nearly every established visit "to stay safe," even when documentation clearly supports 99214. What is the accurate compliance read?',
    correct:
      'Habitual downcoding is also a compliance and integrity problem: it misrepresents the work, forfeits earned revenue, and a flat coding pattern can itself trigger scrutiny',
    wrong: [
      miss(
        'Downcoding is always safe because billing less can never be a problem',
        'Coding should reflect the documented work; systematically under-coding misrepresents the encounter and a uniform pattern is itself an audit flag, so it is not "always safe."',
        'Coding must match the documentation, not aim low. A flat, inaccurate pattern is its own red flag.',
      ),
      miss(
        'It is fine because only upcoding is ever investigated by payers',
        'Auditors look for coding that does not match documentation in either direction, and flat distributions invite review; the belief that only upcoding matters is wrong.',
        'Both directions can draw scrutiny. The issue is accuracy, not just whether you billed high.',
      ),
      miss(
        'The clinician should switch to billing 99215 for every visit to make up the lost revenue',
        'Reflexively coding the highest level is upcoding and outright fraud risk; the answer is accurate, documentation-supported leveling, not swinging to the top.',
        'Defaulting to the highest code is upcoding fraud. The fix is accuracy, not over-correction.',
      ),
    ],
    lesson:
      'Codes must reflect the documented work. Chronic downcoding misrepresents the encounter, forfeits legitimate revenue, and a suspiciously uniform coding distribution can itself trigger audit. The remedy is accurate, documentation-supported leveling on each visit, neither reflexively low nor reflexively high. "Playing it safe" by always coding down is not actually safe or compliant.',
    source,
    generated: true,
  },
  {
    id: 7622035,
    chapter: 'Documentation and Coding Compliance',
    title: 'Signature and attestation',
    prompt:
      'For incident-to and shared/split or supervised services, why does the physician\'s documentation and signature on the record matter beyond formality?',
    correct:
      'The note must show the required physician involvement (initiating/supervising) to support the billing; without that documentation, the claim lacks the evidence that the billing condition was met',
    wrong: [
      miss(
        'Signatures only matter for malpractice defense, not for billing support',
        'Signatures and attestations are billing-support evidence: they document the supervision/involvement that the payment rule requires, not merely liability protection.',
        'A signature here proves the billing condition was met, not just covers liability. It is billing evidence.',
      ),
      miss(
        'The physician\'s involvement need not be documented as long as everyone remembers it',
        'Memory is not documentation; auditors require the record to show the required involvement, and undocumented supervision is treated as not having occurred.',
        'If it is not in the record, it did not happen for audit purposes. Recollection is not evidence.',
      ),
      miss(
        'A typed name in the EHR can never serve as a valid signature',
        'A properly authenticated electronic signature is valid; the point is that the required involvement is documented and attributable, not that ink is mandatory.',
        'Authenticated e-signatures are valid. The real requirement is documented, attributable physician involvement.',
      ),
    ],
    lesson:
      'For incident-to, supervised, and shared/split services, the physician\'s documented involvement and authenticated signature are the evidence that the billing condition (initiation, supervision, or substantive participation) was met. Undocumented involvement is treated as absent in an audit, which collapses the claim. A valid electronic signature suffices; the requirement is documentation and attribution, not paper.',
    source,
    generated: true,
  },
  {
    id: 7622036,
    chapter: 'Documentation and Coding Compliance',
    title: 'Cloned-note detection',
    prompt:
      'An auditor flags a chart where ten consecutive visits contain word-for-word identical assessment and plan text. Why is identical text across visits a coding-compliance concern, not just a style issue?',
    correct:
      'Identical notes suggest the documentation may not reflect each unique encounter, undermining the medical necessity and MDM that justify the billed level and inviting recoupment',
    wrong: [
      miss(
        'It is purely a readability preference with no effect on billing',
        'Cloned A&P text can fail to support the unique MDM/medical necessity for each visit\'s billed level, which is a substantive coding-compliance problem, not cosmetics.',
        'Identical notes can fail to justify each visit\'s level. That is a billing-support issue, not formatting.',
      ),
      miss(
        'It is acceptable because the patient\'s condition was stable across all ten visits',
        'Even stable conditions require documentation reflecting each encounter\'s assessment and decisions; literal copy across ten visits does not demonstrate per-visit medical decision making.',
        'Stability still needs per-visit documentation of the decisions made. Verbatim repetition does not show that.',
      ),
      miss(
        'It is fine as long as the diagnosis codes differ between the visits',
        'Differing diagnosis codes do not rescue assessment/plan text that fails to reflect each encounter; the narrative must support the level and the work actually done.',
        'Changing the diagnosis code does not fix a copied narrative. The note itself must reflect each visit\'s work.',
      ),
    ],
    lesson:
      'Word-for-word cloned assessment-and-plan text across visits suggests the note does not capture each unique encounter, weakening the medical necessity and MDM that justify the billed level and inviting audit and recoupment. Even stable patients and changing diagnosis codes do not cure it: the documentation must reflect the actual decision making of each visit, not boilerplate.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 6: Patient Rights, Privacy, and Practice Compliance
  // ===========================================================================
  {
    id: 7622037,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'GFE timing windows',
    prompt:
      'An uninsured patient schedules a self-pay procedure 12 business days in advance. Under the No Surprises Act, within what window must the practice deliver the written good-faith estimate?',
    correct:
      'Within 3 business days of scheduling, because the service is scheduled at least 10 business days out',
    wrong: [
      miss(
        'Within 1 business day, because that is the only deadline for any scheduled service',
        'One business day applies when the service is scheduled at least 3 (but fewer than 10) business days out; at 10-plus business days the window is 3 business days.',
        'The 1-day rule is for the 3-to-9-day scheduling tier. At 10+ business days out, the window is longer.',
      ),
      miss(
        'Within 30 days, matching the HIPAA records-access timeline',
        'The 30-day timeline is HIPAA right-of-access, a different rule; GFE delivery windows are 1 or 3 business days depending on scheduling lead time.',
        'You are borrowing the HIPAA access clock. GFE timing is measured in a few business days, not 30.',
      ),
      miss(
        'No specific deadline applies; the estimate can be given at the visit',
        'There are firm business-day deadlines tied to scheduling lead time; handing it over at the visit can violate the GFE timing requirement.',
        'GFE has firm business-day deadlines. "At the visit" is too late for a service scheduled well in advance.',
      ),
    ],
    lesson:
      'No Surprises Act GFE timing depends on scheduling lead time: if the service is scheduled at least 3 business days out, the GFE is due within 1 business day of scheduling; if scheduled at least 10 business days out, within 3 business days; and within 3 business days of a request. The HIPAA 30-day clock is a different rule. The deadlines are firm, not "at the visit."',
    source,
    generated: true,
  },
  {
    id: 7622038,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'GFE dispute window',
    prompt:
      'A self-pay patient\'s final bill is $650 over the good-faith estimate. Within what timeframe after receiving the bill can the patient start the patient-provider dispute resolution process?',
    correct:
      'Within 120 calendar days of receiving the bill, since the bill exceeds the GFE by at least $400',
    wrong: [
      miss(
        'Within 30 days, the same as the HIPAA records-access window',
        'The dispute window is 120 calendar days from the bill; 30 days is the unrelated HIPAA right-of-access timeline.',
        'You are mixing in the HIPAA clock. The GFE dispute window is much longer than 30 days.',
      ),
      miss(
        'There is no time limit; the patient can dispute at any point in the future',
        'There is a defined 120-day window from receipt of the bill; the right is not open-ended.',
        'The dispute right is bounded, not perpetual. Recall the specific number of days from the bill.',
      ),
      miss(
        'Only within the year the service was provided, regardless of billing date',
        'The clock runs from receiving the bill (120 days), not from the calendar year of service.',
        'The window starts when the bill arrives, not at year-end. It is a fixed number of days from the bill.',
      ),
    ],
    lesson:
      'When a self-pay patient\'s billed amount is at least $400 above the good-faith estimate, the patient may initiate the patient-provider dispute resolution process within 120 calendar days of receiving the bill. The $400 figure is the trigger threshold; the 120 days is the filing window. Neither maps to the HIPAA 30-day access clock, and the right is time-limited, not open-ended.',
    source,
    generated: true,
  },
  {
    id: 7622039,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'HIPAA electronic fee cap',
    prompt:
      'A practice fulfills a patient\'s request for an electronic copy of records maintained electronically and wants to use the simplest compliant fee. What flat fee may it charge under HIPAA?',
    correct:
      'A flat fee not to exceed $6.50, which is inclusive of all labor, supplies, and any applicable postage for that electronic copy',
    wrong: [
      miss(
        'Whatever the state per-page fee schedule allows, even if higher',
        'For a patient\'s own access request, HIPAA caps the optional flat electronic fee at $6.50 and bars charging state-schedule amounts that exceed the cost-based limit.',
        'State per-page schedules do not override the federal access-fee limits. The flat electronic option is capped.',
      ),
      miss(
        'A search-and-retrieval fee plus copying, billed by the hour',
        'HIPAA prohibits search-and-retrieval fees for a patient\'s own records; only allowed copying labor, supplies, and postage may be charged, with the flat option capped.',
        'Search-and-retrieval fees are barred for patient access. That is exactly the cost HIPAA excludes.',
      ),
      miss(
        'No fee is ever permitted for a patient\'s own electronic records',
        'A reasonable cost-based fee is allowed; the practice may charge a permitted amount, with $6.50 as the optional flat-fee ceiling, so "never" is wrong.',
        'A cost-based fee is allowed. The point is the cap and what may be included, not a total prohibition.',
      ),
    ],
    lesson:
      'Under HIPAA right of access, a practice may charge a reasonable cost-based fee (copying labor, supplies, and postage); for an electronic copy of electronically maintained records, it may instead use an optional flat fee not to exceed $6.50, inclusive of labor, supplies, and postage. It may not charge search-and-retrieval fees or higher state-schedule amounts for the patient\'s own access, but some fee is permitted.',
    source,
    generated: true,
  },
  {
    id: 7622040,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'Prior-auth decision windows',
    prompt:
      'Under the 2024 CMS Interoperability and Prior Authorization final rule, an impacted payer receives a non-urgent (standard) prior-authorization request. By when must it send a decision?',
    correct:
      'Within 7 calendar days for standard requests, while expedited (urgent) requests must be decided within 72 hours',
    wrong: [
      miss(
        'Within 72 hours for standard requests and 7 calendar days for urgent ones',
        'The windows are reversed: standard is 7 calendar days and expedited (urgent) is the faster 72 hours, because urgent cases need the shorter turnaround.',
        'The faster clock goes to urgent cases. You have the standard and expedited windows swapped.',
      ),
      miss(
        'Within 30 calendar days for standard requests',
        'Thirty days is not the standard window under this rule; the standard decision must come within 7 calendar days.',
        'The rule tightened standard decisions to a week, not a month. Recall the 7-day figure.',
      ),
      miss(
        'There is no required timeframe; payers decide on their own schedule',
        'The rule sets explicit timeframes (7 calendar days standard, 72 hours expedited) for impacted payers; it is not left to discretion.',
        'The rule imposes hard windows. It is not at the payer\'s discretion.',
      ),
    ],
    lesson:
      'The 2024 CMS Interoperability and Prior Authorization final rule (CMS-0057-F) requires impacted payers to send standard (non-urgent) prior-authorization decisions within 7 calendar days and expedited (urgent) decisions within 72 hours, with these decision-timeframe provisions effective beginning 2026. Urgent gets the faster 72-hour clock; the windows are not 30 days and not discretionary.',
    source,
    generated: true,
  },
  {
    id: 7622041,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'NSA emergency balance billing',
    prompt:
      'A patient receives emergency care from an out-of-network physician. Under the No Surprises Act, what may the physician charge the patient, and what is prohibited?',
    correct:
      'Only the patient\'s in-network cost-sharing (based on the qualifying payment amount) may be charged; balance-billing the patient for the difference above that is prohibited',
    wrong: [
      miss(
        'The physician may bill the patient the full charge because the visit was out-of-network',
        'For emergency services the NSA bars balance billing; the patient owes only in-network cost-sharing, and the provider resolves the rest with the plan.',
        'Out-of-network emergency care does not let you bill the patient the balance. The NSA caps the patient at in-network cost-sharing.',
      ),
      miss(
        'The physician may bill the patient nothing at all under any circumstance',
        'The patient still owes their in-network cost-sharing (the QPA-based copay/coinsurance/deductible); the NSA limits the bill, it does not make care free.',
        'The patient still pays in-network cost-sharing. The NSA caps the bill, it does not zero it out.',
      ),
      miss(
        'The physician must collect the difference directly from the patient and then reimburse them',
        'The difference is resolved between provider and plan (open negotiation and, if needed, IDR), not collected from the patient first; the patient is held to in-network cost-sharing.',
        'The patient is shielded from the difference entirely. The provider settles it with the plan, not via the patient.',
      ),
    ],
    lesson:
      'For out-of-network emergency services, the No Surprises Act limits the patient to in-network cost-sharing calculated from the qualifying payment amount (QPA), and prohibits balance billing for the remainder. The provider and plan resolve the rest through a 30-day open negotiation and, if needed, independent dispute resolution (IDR). The patient is not billed the difference, but does owe their normal in-network cost-share.',
    source,
    generated: true,
  },
  {
    id: 7622042,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'OIG: monitoring vs auditing',
    prompt:
      'A practice maps its compliance work to the OIG\'s seven elements. Which activity satisfies the "internal monitoring and auditing" element specifically?',
    correct:
      'Performing periodic reviews of coding/billing against documentation to detect and quantify errors before payers or regulators do',
    wrong: [
      miss(
        'Writing the practice\'s code of conduct and billing policies',
        'Written policies and standards are a separate element; monitoring and auditing is the periodic checking that those standards are actually being followed.',
        'Writing the policies is the standards element. Monitoring is the act of checking conformance to them.',
      ),
      miss(
        'Naming a compliance officer to oversee the program',
        'Designating a compliance officer is its own distinct element; auditing is the ongoing review activity, not the appointment of a person.',
        'Appointing the officer is a different element. Auditing is the recurring review work itself.',
      ),
      miss(
        'Disciplining an employee after a violation is discovered',
        'Disciplinary enforcement and prompt corrective action are separate elements; auditing is the proactive review that surfaces issues in the first place.',
        'Discipline and corrective action are downstream elements. Auditing is the proactive detection step.',
      ),
    ],
    lesson:
      'The OIG\'s seven elements are distinct: written standards, a designated compliance officer/contact, training, open communication lines, internal monitoring and auditing, enforced disciplinary standards, and prompt corrective action. "Monitoring and auditing" specifically means periodic, proactive review (e.g., coding-to-documentation audits) to catch errors early, separate from writing policies, naming an officer, or disciplining after the fact.',
    source,
    generated: true,
  },
  {
    id: 7622043,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'Anti-Kickback vs Stark basics',
    prompt:
      'A practice manager is told the clinic must avoid both "Stark" and "Anti-Kickback" problems. What is the key practical distinction between them?',
    correct:
      'Stark is a strict-liability law specific to physician self-referral of designated health services; the Anti-Kickback Statute is intent-based and broadly bars paying for referrals of federal-program business',
    wrong: [
      miss(
        'They are the same statute under two names, so one analysis covers both',
        'They are different laws with different scopes and standards (Stark strict-liability and self-referral-specific; AKS intent-based and broad), so each requires its own analysis.',
        'These are two separate laws with different tests. One review does not satisfy both.',
      ),
      miss(
        'Stark requires proof of intent while Anti-Kickback is strict liability',
        'It is reversed: Stark is strict-liability (no intent needed), while the Anti-Kickback Statute requires the requisite intent.',
        'You have the standards swapped. Stark is the strict-liability one; AKS turns on intent.',
      ),
      miss(
        'Both apply only to hospitals and never to outpatient physician practices',
        'Both reach physician practices, not just hospitals; self-referral and remuneration-for-referral risks arise squarely in outpatient settings.',
        'These laws reach physician practices directly. They are not hospital-only.',
      ),
    ],
    lesson:
      'The physician self-referral law (Stark) is strict-liability and specifically prohibits a physician from referring designated health services to entities with which they have a financial relationship, absent an exception. The Anti-Kickback Statute is intent-based and broadly criminalizes knowingly paying or receiving remuneration to induce federal-program referrals. They are separate laws with different standards, and both apply to outpatient practices.',
    source,
    generated: true,
  },
  {
    id: 7622044,
    chapter: 'Patient Rights, Privacy, and Practice Compliance',
    title: 'Access denial limits',
    prompt:
      'A patient requests their own records. The practice wants to deny access because the patient still owes a balance and the chart includes a clinician\'s personal observation. What is the correct HIPAA position?',
    correct:
      'An unpaid balance is not a valid basis to deny access; psychotherapy notes and certain narrow grounds may be withheld, but a billing balance is not one of them',
    wrong: [
      miss(
        'Access can be withheld until the outstanding balance is paid in full',
        'HIPAA forbids conditioning a patient\'s access to their own records on payment of an unrelated bill; the balance is not a permitted denial ground.',
        'A debt is not a lawful reason to withhold records. Access cannot be held hostage to a balance.',
      ),
      miss(
        'Any clinician\'s personal observation in the chart can be withheld at will',
        'General clinical observations in the designated record set are accessible; only narrowly defined categories (like psychotherapy notes) are excluded, not ordinary notes.',
        'Ordinary clinical notes are accessible. Only specific narrow categories are excludable, not anything labeled an observation.',
      ),
      miss(
        'The entire record must be denied if any single part is exempt',
        'Even where a narrow exclusion applies, the practice provides the rest; one exempt component does not justify denying the whole record.',
        'A single exempt piece does not bar the whole record. You release what is accessible.',
      ),
    ],
    lesson:
      'HIPAA right of access cannot be conditioned on payment of a bill. Withholding is permitted only on narrow grounds (for example, psychotherapy notes, information compiled for legal proceedings, or limited situations posing serious harm). Ordinary clinical notes are accessible, an exempt component does not bar releasing the rest, and an unpaid balance is never a lawful basis to deny a patient their own records.',
    source,
    generated: true,
  },

  // ===========================================================================
  // Chapter 7: Service, Staffing, and Practice Improvement
  // ===========================================================================
  {
    id: 7622045,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Outcome vs process measures',
    prompt:
      'A practice testing a new diabetes-recall workflow tracks both "percent of overdue patients contacted" and "percent reaching A1c goal." Which is the process measure and which is the outcome measure, and why track both?',
    correct:
      'Contacting overdue patients is the process measure (did we do the work) and A1c-at-goal is the outcome measure (did it help); both are needed because doing the work does not guarantee the result',
    wrong: [
      miss(
        'Both are outcome measures, so tracking one is enough',
        'They are different types: one measures whether the intended action happened (process), the other the result (outcome); collapsing them hides whether execution or the idea itself failed.',
        'One tracks the action, the other the result. They are not the same kind of measure, and each answers a different question.',
      ),
      miss(
        'A1c-at-goal is the process measure because it is a clinical number',
        'Being a clinical number does not make it a process measure; A1c-at-goal is the downstream result (outcome), while the recall action is the process.',
        'Clinical does not mean process. The recall action is the process; the health result is the outcome.',
      ),
      miss(
        'Only the outcome measure matters because results are all that count',
        'Without the process measure you cannot tell whether a flat outcome means the change failed or simply was never executed, which is essential for learning.',
        'If the outcome does not move, the process measure tells you whether you even did the change. You need both to learn.',
      ),
    ],
    lesson:
      'Process measures track whether the intended change was actually carried out (e.g., overdue patients contacted); outcome measures track the result that matters (e.g., A1c at goal). Tracking both is essential: a flat outcome could mean the idea failed or that the process was never executed, and only the pair distinguishes the two. Balancing measures additionally watch for harm elsewhere.',
    source,
    generated: true,
  },
  {
    id: 7622046,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Why small tests of change',
    prompt:
      'A manager wants to roll a new check-in process to all six sites next Monday. An improvement coach urges a one-clinician, one-week test first. What is the strongest argument for the small test?',
    correct:
      'A small test surfaces workflow, patient, and staffing problems cheaply and reversibly, before they are multiplied across every site at maximum cost',
    wrong: [
      miss(
        'A small test is mainly about getting staff to feel included in the decision',
        'The point is learning and risk reduction, not just buy-in; the test reveals real defects before scale, which morale alone does not capture.',
        'It is about catching real problems cheaply, not just inclusion. The learning is the reason, not the feelings.',
      ),
      miss(
        'Small tests are only appropriate when leadership already doubts the change',
        'Small tests apply broadly, especially to promising changes, because even good ideas hit unforeseen workflow snags; doubt is not the trigger.',
        'You test promising changes too, not only suspect ones. The unknowns exist regardless of confidence.',
      ),
      miss(
        'A small test guarantees the change will succeed once scaled',
        'A test informs and de-risks but guarantees nothing; it can still reveal the change should be adapted or abandoned, which is a valid result.',
        'Tests reduce risk; they do not promise success. Abandoning a tested idea is a legitimate outcome.',
      ),
    ],
    lesson:
      'A small test of change (PDSA) exposes workflow, patient, and staffing problems cheaply and reversibly before a change is multiplied across an organization at maximum cost. Its purpose is learning and risk reduction, not merely buy-in, and it applies to promising ideas too. It informs the decision to adopt, adapt, or abandon; it never guarantees success.',
    source,
    generated: true,
  },
  {
    id: 7622047,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Root cause vs symptom',
    prompt:
      'Patients complain about long lobby waits. The manager adds lobby chairs and a coffee station; complaints persist. What improvement discipline was skipped?',
    correct:
      'Identifying the root cause (e.g., provider start-time drift or rooming bottleneck) before acting, rather than treating the visible symptom of the wait',
    wrong: [
      miss(
        'Nothing was skipped; comfort upgrades are the correct response to wait complaints',
        'Comfort measures treat the symptom, not the cause of the wait; if the underlying delay persists, complaints persist, which is exactly what happened.',
        'Chairs and coffee address comfort, not the delay itself. The wait is the symptom, not the cause.',
      ),
      miss(
        'The manager should have immediately disciplined the front-desk staff',
        'Blaming the person closest to the symptom skips root-cause analysis and usually targets the wrong link; the delay may originate upstream in start times or rooming.',
        'Punishing the nearest person is not root-cause work. The cause may be nowhere near the front desk.',
      ),
      miss(
        'The manager should have surveyed patients about chair comfort preferences',
        'More data on comfort still misses the cause of the wait; the analysis needed is of where the delay actually originates, not seating preferences.',
        'Surveying comfort doubles down on the symptom. Find where the delay is generated instead.',
      ),
    ],
    lesson:
      'Effective improvement separates symptom from root cause. Long waits are a symptom; the cause may be provider start-time drift, a rooming bottleneck, or under-staffed peaks. Treating the symptom (comfort upgrades) or blaming the nearest person leaves the cause intact and the complaints recurring. Diagnose where the delay originates, then fix that system.',
    source,
    generated: true,
  },
  {
    id: 7622048,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Service recovery done right',
    prompt:
      'A patient is furious after a billing error overcharged them. Which response best reflects sound service recovery?',
    correct:
      'Acknowledge the error sincerely, fix it promptly, explain what will prevent a recurrence, and follow up to confirm resolution',
    wrong: [
      miss(
        'Defend the billing department and explain why the charge was technically reasonable',
        'Defending the process to an aggrieved patient escalates anger and ignores the recovery goal of acknowledging and fixing the harm.',
        'Justifying the error is the opposite of recovery. Acknowledge and fix first, do not defend.',
      ),
      miss(
        'Promise a sweeping policy overhaul you are not authorized to deliver',
        'Over-promising beyond your authority breaks trust when it is not delivered; recovery requires honest, deliverable commitments.',
        'Promising what you cannot deliver backfires. Recovery depends on commitments you can actually keep.',
      ),
      miss(
        'Quietly issue the refund without any acknowledgment or explanation',
        'A silent refund fixes the dollars but not the relationship; patients need acknowledgment and assurance it will not recur to rebuild trust.',
        'Fixing the money silently misses the relationship. Acknowledgment and prevention matter as much as the refund.',
      ),
    ],
    lesson:
      'Sound service recovery acknowledges the error sincerely, corrects it promptly, explains the prevention step, and follows up to confirm. Defending the process, over-promising beyond your authority, or silently refunding without acknowledgment all fail: the first escalates, the second breaks trust, and the third repairs the dollars but not the relationship. Recovery restores both the issue and the trust.',
    source,
    generated: true,
  },
  {
    id: 7622049,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Standard work as the baseline',
    prompt:
      'A clinic\'s checkout quality swings wildly depending on who is working. Before testing any improvement, why is documenting "standard work" the right first move?',
    correct:
      'Without a defined standard, every result is noise; standard work creates the stable baseline against which any change can be measured and improvement detected',
    wrong: [
      miss(
        'Because standard work lets the manager eliminate the slowest employees',
        'Standard work is about a reliable, shared method, not a tool to cull staff; its purpose is a stable baseline, not headcount reduction.',
        'It is a method for consistency, not a way to rank and fire people. The point is a measurable baseline.',
      ),
      miss(
        'Because documenting the process is required before any insurance audit',
        'While documentation has compliance value, the improvement reason here is establishing a stable baseline so change can be measured, not satisfying an audit.',
        'The improvement reason is measurability, not audit paperwork. You need a stable starting point to detect change.',
      ),
      miss(
        'Because standard work permanently freezes the process so it never changes again',
        'Standard work is a current best-known method that is meant to be improved, not a permanent freeze; it is the baseline you test against and then update.',
        'Standard work is a living baseline, not a freeze. You standardize so you can measure and then improve.',
      ),
    ],
    lesson:
      'Improvement requires a stable baseline. When a process varies by whoever is working, results are noise and you cannot tell whether a change helped. Documenting standard work (the current best-known method everyone follows) creates that baseline, so a test of change can be measured against it. Standard work is meant to be improved over time, not used to cull staff or freeze the process forever.',
    source,
    generated: true,
  },
  {
    id: 7622050,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Cross-coverage planning',
    prompt:
      'A clinic plans coverage for predictable absences (vacations, training). What distinguishes real coverage planning from just hoping people pick up the slack?',
    correct:
      'Defining in advance who covers which tasks, with documented standard work and the access/authority to do them, so essential functions continue without heroics',
    wrong: [
      miss(
        'Telling the team to "be flexible" and figure it out on the day',
        '"Be flexible" is not a plan; without defined owners, documented work, and access, essential tasks fall through exactly when someone is out.',
        'Vague flexibility is not coverage. A plan names who does what, with the access to actually do it.',
      ),
      miss(
        'Keeping one indispensable expert who never takes time off',
        'Relying on an irreplaceable person is the fragility coverage planning exists to remove; everyone is eventually out, and the dependency remains.',
        'An indispensable person is the risk, not the solution. Coverage planning removes single-person dependency.',
      ),
      miss(
        'Paying overtime after the fact to whoever stayed late to absorb the gap',
        'After-the-fact overtime patches a gap with heroics and burnout rather than planning; it does not ensure the right person had the access and skills in advance.',
        'Overtime heroics are reactive, not planning. Coverage is arranged before the absence, with the right access in place.',
      ),
    ],
    lesson:
      'Real coverage planning assigns, in advance, who performs each essential function during predictable absences, backed by documented standard work and the necessary system access and authority. Vague calls to "be flexible," reliance on an indispensable expert, or after-the-fact overtime all leave critical tasks exposed. Plan coverage so the clinic runs without heroics when people are reasonably out.',
    source,
    generated: true,
  },
  {
    id: 7622051,
    chapter: 'Service, Staffing, and Practice Improvement',
    title: 'Capstone: tracing the failing handoff',
    prompt:
      'A practice has rising denials, longer waits, and more complaints all at once. The manager wants the single highest-leverage place to start. What is the soundest approach?',
    correct:
      'Map the patient\'s path end-to-end and find the specific failing handoff feeding multiple problems, then fix that system rather than launching separate fixes for each symptom',
    wrong: [
      miss(
        'Launch parallel task forces for denials, waits, and complaints simultaneously',
        'Three uncoordinated efforts can chase the same upstream cause from different angles, duplicating work and missing the shared handoff that links them.',
        'Separate task forces may all be downstream of one broken handoff. Find the shared cause before splitting the work.',
      ),
      miss(
        'Pick whichever problem the loudest stakeholder cares about most',
        'Loudness is not leverage; the highest-impact fix is the failing handoff driving several symptoms, which may be no one\'s pet issue.',
        'The squeakiest wheel is not necessarily the root. Look for the handoff feeding multiple symptoms.',
      ),
      miss(
        'Wait for more data over the next two quarters before doing anything',
        'Delay lets the failing handoff keep generating denials, waits, and complaints; mapping the path can localize the cause now without two quarters of waiting.',
        'You can localize the failing handoff now by mapping the path. Waiting just extends the damage.',
      ),
    ],
    lesson:
      'When several problems rise together, they often share one failing handoff in the patient\'s path (request to slot to verified eligibility to documented encounter to clean claim to paid balance to closed-loop follow-up). Mapping that path end-to-end localizes the system defect feeding multiple symptoms, so one upstream fix resolves several downstream failures. That beats parallel symptom-chasing, stakeholder volume, or open-ended delay.',
    source,
    generated: true,
  },
  {
    id: 7622052,
    chapter: 'Revenue Cycle and Charge Capture',
    title: 'RVU components and payment',
    prompt:
      'A practice manager explaining Medicare physician payment is asked how a CPT code becomes a dollar amount. What is the correct high-level formula?',
    correct:
      'Sum the work, practice-expense, and malpractice RVUs, adjust each by the geographic practice cost indices, then multiply the total by the annual conversion factor',
    wrong: [
      miss(
        'Multiply the physician\'s hourly rate by the minutes spent, with no RVUs involved',
        'Medicare physician payment is RVU-based, not an hourly-rate model; the three RVU components, geographic adjustment, and conversion factor drive the amount.',
        'It is not an hourly bill. The amount is built from RVUs, geographic indices, and the conversion factor.',
      ),
      miss(
        'Use only the work RVU times the conversion factor and ignore the other components',
        'Payment includes practice-expense and malpractice RVUs too, not just work RVU; omitting them understates the calculation.',
        'Work RVU is one of three components. Practice-expense and malpractice RVUs are part of the total.',
      ),
      miss(
        'Take the practice\'s billed charge and apply a fixed national discount percentage',
        'Medicare does not discount the practice\'s charge; it computes its own allowed amount from RVUs, GPCIs, and the conversion factor independent of the billed charge.',
        'The allowed amount is computed from RVUs and the conversion factor, not as a discount off your charge.',
      ),
    ],
    lesson:
      'Medicare physician payment is RVU-based: each service has work, practice-expense, and malpractice RVUs; each component is adjusted by its geographic practice cost index (GPCI), the adjusted RVUs are summed, and the total is multiplied by the annual conversion factor (for CY 2026, roughly $33.40 for non-qualifying-APM clinicians and $33.57 for qualifying-APM participants). It is not an hourly charge, not work-RVU-only, and not a discount off billed charges.',
    source,
    generated: true,
  },
])
