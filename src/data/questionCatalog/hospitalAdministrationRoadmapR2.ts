import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe hospitalAdministrationRoadmap 103-pass'

export const hospitalAdministrationRoadmapR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ===========================================================================
  // Chapter 1: Hospital System Map and Governance
  // ===========================================================================
  {
    id: 7620000,
    chapter: 'Hospital System Map and Governance',
    title: 'Deemed status meaning',
    prompt:
      'A board member asks why the hospital pursues Joint Commission accreditation when CMS sets the actual Medicare requirements. What is the most accurate explanation of how the two connect?',
    correct:
      'Accreditation by a CMS-approved body confers "deemed status," letting the hospital meet Medicare Conditions of Participation without a routine state CMS survey',
    wrong: [
      miss(
        'Joint Commission accreditation legally replaces the CMS Conditions of Participation entirely, so CMS rules no longer apply',
        'Deemed status does not replace the Conditions of Participation; the hospital still must meet them, and CMS retains authority including validation and complaint surveys.',
        'Accreditation is a route to demonstrating the CoP are met, not a waiver of them.',
      ),
      miss(
        'Accreditation is purely voluntary marketing and has no relationship to Medicare payment eligibility',
        'Accreditation is tied directly to Medicare participation through deemed status; calling it marketing misses its regulatory function.',
        'Ask whether accreditation can substitute for the government survey that gates Medicare money.',
      ),
      miss(
        'CMS performs the accreditation survey itself, and the Joint Commission only issues the certificate',
        'CMS approves accrediting organizations and may validate them, but the Joint Commission conducts its own survey; CMS does not perform the accreditation survey.',
        'Separate who runs the survey from who recognizes the standards as meeting Medicare\'s.',
      ),
    ],
    lesson:
      'Hospitals must meet CMS Conditions of Participation to bill Medicare. Rather than undergo a routine state survey, a hospital can be accredited by a CMS-approved organization (such as the Joint Commission) whose standards CMS has "deemed" to meet or exceed federal requirements. CMS still does random validation surveys and complaint investigations, so deemed status is a route to compliance, not an exemption from it.',
    source,
    generated: true,
  },
  {
    id: 7620001,
    chapter: 'Hospital System Map and Governance',
    title: 'Medical staff bylaws authority',
    prompt:
      'A new CEO wants to unilaterally rewrite the rules for how physicians are credentialed and disciplined, treating it as an administrative policy. Why is this the wrong instrument?',
    correct:
      'Credentialing and peer-review rules live in the medical staff bylaws, which the organized medical staff develops and the governing board approves — not unilateral administrative policy',
    wrong: [
      miss(
        'Because only the state medical board can write any rule that affects physicians',
        'The state board licenses physicians but does not author a hospital\'s internal credentialing and peer-review process; that is the medical staff bylaws, board-approved.',
        'Distinguish state licensure from a single hospital\'s self-governance documents.',
      ),
      miss(
        'Because the CEO must first get the change ratified by a patient advisory council',
        'Patient advisory councils inform experience and design, but they have no authority over medical staff bylaws; that authority is the organized medical staff plus the board.',
        'Identify which body actually owns physician self-governance, not which group is sympathetic.',
      ),
      miss(
        'There is no problem; a CEO can change any hospital rule by executive memo',
        'Medical staff bylaws are a structured, board-approved document with due-process implications; rewriting them by memo bypasses required medical staff input and board approval.',
        'Some rules require formal medical staff process and board sign-off, not a memo.',
      ),
    ],
    lesson:
      'The organized medical staff is a self-governing body whose bylaws define credentialing, privileging, peer review, and fair-hearing (due-process) rights. The medical staff develops the bylaws and the governing board approves them. A CEO cannot unilaterally rewrite them, because doing so bypasses medical staff self-governance and the board\'s ultimate accountability for care quality.',
    source,
    generated: true,
  },
  {
    id: 7620002,
    chapter: 'Hospital System Map and Governance',
    title: 'Board fiduciary duties',
    prompt:
      'During a board orientation, a trustee asks what their core legal duties are as a hospital board member. Which pairing best captures the fiduciary duties they owe the organization?',
    correct: 'The duty of care, the duty of loyalty, and the duty of obedience to the organization\'s mission and law',
    wrong: [
      miss(
        'The duty to maximize physician income and the duty to grow market share',
        'Income and growth may be strategic aims, but they are not fiduciary duties; a trustee\'s legal duties are care, loyalty, and obedience to mission and law.',
        'Strategy goals are not the same as the legal duties a court would enforce.',
      ),
      miss(
        'The duty to personally approve every clinical order and discharge',
        'Boards govern; they do not practice medicine or manage operations case by case. Clinical orders belong to credentialed clinicians, not trustees.',
        'Governance sets direction and oversight; it does not do hands-on clinical work.',
      ),
      miss(
        'The duty to attend meetings and nothing more, since trustees are usually volunteers',
        'Volunteer status does not lower the standard; trustees still owe enforceable duties of care, loyalty, and obedience regardless of compensation.',
        'Being unpaid does not shrink a fiduciary\'s legal obligations.',
      ),
    ],
    lesson:
      'Hospital trustees owe three classic fiduciary duties: care (act with diligence and informed judgment), loyalty (put the organization\'s interests ahead of personal gain, managing conflicts of interest), and obedience (stay faithful to the mission and to the law). These duties, not income or market share, define the board\'s accountability for the institution\'s solvency and quality of care.',
    source,
    generated: true,
  },
  {
    id: 7620003,
    chapter: 'Hospital System Map and Governance',
    title: 'Escalation versus ownership',
    prompt:
      'A unit manager keeps escalating every staffing hiccup directly to the COO, who then re-delegates it back down. What governance principle is being violated?',
    correct:
      'Problems should be resolved at the lowest level with the authority and information to fix them; escalation is for issues that genuinely exceed that level',
    wrong: [
      miss(
        'The COO should personally own all staffing decisions to ensure consistency',
        'Centralizing every staffing hiccup at the COO destroys responsiveness and overloads the executive; routine staffing belongs with managers who hold the information.',
        'Consistency comes from clear rules, not from funneling every small issue to one executive.',
      ),
      miss(
        'The manager is correct because escalating early always reduces risk',
        'Reflexive escalation of routine issues clogs leadership bandwidth and signals the manager is not exercising the authority their role carries.',
        'Escalate what exceeds your authority, not everything that is mildly inconvenient.',
      ),
      miss(
        'A new staffing committee should own these decisions instead of the manager',
        'Spawning a committee for routine unit staffing adds process without adding authority where the work happens; the manager already owns this.',
        'Routine local decisions need a clear owner, not another standing body.',
      ),
    ],
    lesson:
      'Sound governance pushes decisions to the lowest level that has the authority and information to make them, reserving escalation for issues that truly exceed that level (resources, policy conflict, cross-department deadlock). Reflexive escalation overloads executives and erodes the manager\'s ownership; the fix is clarifying decision rights, not centralizing or adding committees.',
    source,
    generated: true,
  },
  {
    id: 7620004,
    chapter: 'Hospital System Map and Governance',
    title: 'Who owns utilization review',
    prompt:
      'A hospital is standing up a formal program to review whether admissions and continued stays meet medical-necessity criteria. Which structure is the standard owner of this function?',
    correct:
      'A utilization review (UR) committee or function, supported by case management and a physician advisor, reviewing status and medical necessity',
    wrong: [
      miss(
        'The billing department, since the goal is to get claims paid',
        'Billing submits claims downstream; it cannot make or defend the clinical medical-necessity judgments that UR and the physician advisor own.',
        'Getting paid follows from a defensible status decision; billing does not make that decision.',
      ),
      miss(
        'The marketing department, since admissions affect volume',
        'Marketing has no role in medical-necessity review; admission status is a clinical and compliance determination, not a volume-growth lever.',
        'Volume promotion is unrelated to whether a specific admission meets criteria.',
      ),
      miss(
        'Individual attending physicians alone, with no committee or review structure',
        'Attendings make the admission order, but a Medicare-participating hospital must have a UR plan and committee; relying on uncoordinated individual judgment fails the Condition of Participation.',
        'A standing review structure is required, not just scattered individual calls.',
      ),
    ],
    lesson:
      'Medicare Conditions of Participation require hospitals to have a utilization review plan and committee that reviews medical necessity of admissions and continued stays. In practice, case management and a physician advisor support UR, applying status criteria and the Two-Midnight Rule. Billing and marketing have no role in this clinical-compliance determination.',
    source,
    generated: true,
  },
  {
    id: 7620005,
    chapter: 'Hospital System Map and Governance',
    title: 'EMS as part of the workflow',
    prompt:
      'An administrator redesigning ED throughput excludes the regional EMS agencies from the project, reasoning they are "outside the hospital." Why is this a mistake?',
    correct:
      'EMS arrivals, offload times, and diversion status are part of the real ED workflow; excluding them hides a major driver of front-door flow',
    wrong: [
      miss(
        'It is not a mistake; EMS is a separate organization with no effect on internal flow',
        'Ambulance patient offload delays directly consume ED nurses and beds, and diversion reshapes arrivals; EMS is inside the flow whether or not it is inside the building.',
        'Organizational boundaries do not match the real patient-flow boundary.',
      ),
      miss(
        'Because EMS legally controls which patients the hospital must admit',
        'EMS does not control hospital admission decisions; the reason to include them is operational flow (offload, diversion), not a legal admission mandate.',
        'The issue is shared workflow and timing, not a legal admission obligation.',
      ),
      miss(
        'Because EMS sets the hospital\'s HCAHPS scores',
        'EMS does not set HCAHPS, which surveys discharged inpatients; the relevant connection is arrival pattern and offload timing, not experience scoring.',
        'Tie EMS to arrivals and offload, not to the inpatient experience survey.',
      ),
    ],
    lesson:
      'Front-door flow starts before the patient is in the building. EMS offload delays tie up ED nurses and stretchers, and ambulance diversion changes who arrives and when. Treating EMS as "external" ignores a control point that shapes boarding and door-to-provider times. Real workflow maps follow the patient, not the org chart.',
    source,
    generated: true,
  },
  {
    id: 7620006,
    chapter: 'Hospital System Map and Governance',
    title: 'Service line versus department',
    prompt:
      'Leadership wants cardiology care to be coordinated across the ED, cath lab, inpatient telemetry, imaging, and outpatient clinics under shared goals. What organizational concept does this describe?',
    correct:
      'A service line — a matrixed structure organizing resources around a patient population or condition across traditional departments',
    wrong: [
      miss(
        'A cost center — a single accounting unit where expenses are tracked',
        'A cost center is an accounting construct for tracking spend, not a cross-department care-coordination structure organized around a patient population.',
        'Accounting buckets do not coordinate care across departments; service lines do.',
      ),
      miss(
        'A diagnosis-related group (DRG) — the unit Medicare uses to pay',
        'A DRG is a payment classification for an individual stay, not an organizational structure that aligns departments around a condition.',
        'A payment category for one case is not an operating structure for a whole population.',
      ),
      miss(
        'A standing committee — a meeting body that issues recommendations',
        'A committee deliberates and advises; a service line actually owns aligned operations, staffing, and outcomes across the cardiac care continuum.',
        'A recommending body is weaker than a structure that owns operations and results.',
      ),
    ],
    lesson:
      'A service line organizes people, space, and budget around a patient population or condition (cardiac, oncology, orthopedics) that spans many traditional departments. It is typically matrixed: a service-line leader coordinates across the ED, procedural areas, inpatient units, imaging, and clinics toward shared volume, quality, and margin goals. It is distinct from a cost center (accounting), a DRG (payment), or a committee (deliberation).',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 2: Patient Flow, Capacity, and Throughput
  // ===========================================================================
  {
    id: 7620007,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Bed occupancy rate math',
    prompt:
      'A 200-bed hospital recorded 5,400 inpatient days in a 30-day month. What was its bed occupancy rate, and why does the answer matter operationally?',
    correct: '90% (5,400 / (200 × 30)) — near the upper end where flow becomes fragile',
    wrong: [
      miss(
        '27% (5,400 / 200 / 100), treating beds as a percentage base',
        'Occupancy is inpatient days divided by available bed-days (beds × days), not inpatient days divided by beds; the denominator must include the period length.',
        'Multiply beds by the number of days to get the bed-days denominator.',
      ),
      miss(
        '180% (5,400 / 30), dividing days by the month length only',
        'Dividing inpatient days by 30 ignores the number of beds entirely; occupancy must compare used bed-days to available bed-days.',
        'Both the bed count and the day count belong in the denominator.',
      ),
      miss(
        '90%, which is comfortably safe with plenty of slack for surges',
        'The 90% figure is correct, but 90% leaves almost no buffer; flow strain and boarding typically begin well before full occupancy, around the mid-80s.',
        'The number is right, but read what 90% means for surge headroom.',
      ),
    ],
    lesson:
      'Bed occupancy rate = inpatient days of care / available bed-days (beds × days in period) × 100, here 5,400 / 6,000 = 90%. Around 85% is often cited as a practical ceiling: above it, small surges produce boarding, diversion, and unsafe assignments because there is no slack to absorb variability. Occupancy is a flow-risk signal, not just a utilization statistic.',
    source,
    generated: true,
  },
  {
    id: 7620008,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Left without being seen',
    prompt:
      'An ED dashboard shows the "left without being seen" (LWBS) rate climbing from 1% to 4%. What does this metric most directly signal?',
    correct:
      'Patients are abandoning the waiting room before evaluation — a access and safety signal tied to long door-to-provider waits',
    wrong: [
      miss(
        'Patients are being discharged too early after treatment',
        'LWBS counts patients who leave before being evaluated, not patients discharged after care; early discharge is a different problem measured differently.',
        'LWBS is about never being seen, not about leaving after treatment.',
      ),
      miss(
        'The hospital is performing well because fewer patients need care',
        'A rising LWBS rate is a red flag: patients in need are leaving untreated, creating clinical and liability risk, not a sign of lower demand.',
        'People leaving before evaluation is a danger signal, not reduced need.',
      ),
      miss(
        'Coding accuracy in the ED has declined',
        'LWBS reflects waiting-room abandonment driven by wait times and capacity, not the accuracy of diagnosis coding.',
        'This is a flow-and-access measure, not a documentation-coding measure.',
      ),
    ],
    lesson:
      'LWBS (left without being seen) is the share of ED arrivals who leave before a provider evaluation. A rising LWBS rate signals that door-to-provider waits are too long, usually because the ED is boarding admitted patients or is short on capacity. It is both an access metric and a safety/liability concern, since some who leave have genuine emergencies.',
    source,
    generated: true,
  },
  {
    id: 7620009,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Discharge before noon',
    prompt:
      'A hospital pushes a "discharge before noon" target to relieve afternoon ED boarding. A nurse manager warns the target could backfire. What is the legitimate risk to guard against?',
    correct:
      'Rushing or front-loading discharges to hit a clock can compromise safe discharge readiness and follow-up if the underlying barriers are not fixed',
    wrong: [
      miss(
        'There is no real risk; an earlier discharge time is always strictly better for patients',
        'Earlier discharge helps flow, but only if the patient is genuinely ready; a time target pursued by cutting corners trades flow gains for readmissions and harm.',
        'A time goal is only good if discharge readiness is preserved, not assumed.',
      ),
      miss(
        'The risk is that HCAHPS will stop measuring discharge information entirely',
        'HCAHPS does not stop measuring anything because of an internal target; the real risk is unsafe rushed discharges, not a change in the survey.',
        'The danger is to the patient and readmission rate, not to what the survey covers.',
      ),
      miss(
        'The risk is that GMLOS will increase because patients leave sooner',
        'Earlier discharge does not raise geometric mean length of stay; the concern is premature discharge quality, not a paradoxical LOS rise.',
        'Leaving sooner does not lengthen stays; focus on readiness, not the LOS math.',
      ),
    ],
    lesson:
      'Discharge-before-noon and similar targets work only when they are paired with fixing upstream barriers (early rounding, pharmacy turnaround, transport, case management, ride availability). Used as a raw clock target, they incentivize rushing patients who are not ready, producing avoidable readmissions and harm. The right move is to redesign the discharge process, not just push the deadline.',
    source,
    generated: true,
  },
  {
    id: 7620010,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Surge capacity tiers',
    prompt:
      'A capacity-management plan defines escalating tiers (for example, green / yellow / red / black) with predefined actions at each level. What is the main operational value of this tiered structure?',
    correct:
      'It pre-authorizes specific actions and owners at defined trigger points, so staff act early on objective signals instead of improvising under pressure',
    wrong: [
      miss(
        'It guarantees the hospital will never go on ambulance diversion',
        'Tiered plans manage surge and may delay diversion, but they cannot guarantee it never happens; their value is structured, timely escalation, not a diversion guarantee.',
        'Structured escalation reduces chaos; it does not promise an outcome.',
      ),
      miss(
        'It replaces the need for a capacity huddle because the tiers act automatically',
        'Tiers define triggers and actions, but huddles still coordinate owners and constraints in real time; the structure supports the huddle, it does not eliminate it.',
        'Predefined tiers inform the huddle; they do not run operations by themselves.',
      ),
      miss(
        'It shifts accountability for capacity entirely onto frontline nurses',
        'A good tier plan distributes defined actions across leadership and departments; pushing all accountability to the bedside is exactly the failure the plan prevents.',
        'Tiers spread ownership across the organization, not just the frontline.',
      ),
    ],
    lesson:
      'Surge or capacity escalation tiers translate objective signals (boarding count, occupancy, ED holds) into predefined actions with named owners at each level. Their value is removing hesitation: staff act early on agreed triggers instead of debating whether things are "bad enough." They support, but do not replace, the real-time capacity huddle, and they spread accountability rather than dumping it on the bedside.',
    source,
    generated: true,
  },
  {
    id: 7620011,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Observed-to-expected LOS',
    prompt:
      'A unit reports an observed-to-expected (O/E) length-of-stay ratio of 1.20. How should an administrator read this?',
    correct:
      'Patients are staying about 20% longer than expected given their case mix — a flag to investigate discharge barriers, not necessarily poor care',
    wrong: [
      miss(
        'Patients are staying 20% shorter than expected, which is efficient',
        'An O/E above 1.0 means observed exceeds expected (longer stays); only a ratio below 1.0 indicates shorter-than-expected stays.',
        'Decide which side of 1.0 means longer, then place 1.20 on it.',
      ),
      miss(
        'The unit treated 20% more patients than predicted this period',
        'O/E length of stay compares stay duration to a risk-adjusted expectation, not patient volume; it says nothing about how many patients were treated.',
        'This ratio is about days per stay, not headcount.',
      ),
      miss(
        'The unit\'s case mix index is 1.20',
        'O/E LOS and CMI are different metrics; a 1.20 LOS ratio is not a CMI value, even though both reference complexity-adjusted expectations.',
        'Do not conflate a length-of-stay ratio with the DRG-weight average.',
      ),
    ],
    lesson:
      'Observed-to-expected length of stay divides actual stay days by a risk-adjusted expected value (often built from GMLOS by DRG). A ratio above 1.0 means stays run longer than the case mix predicts (1.20 = about 20% longer), which usually points to discharge-process barriers rather than sicker patients, since the expectation is already risk-adjusted. Below 1.0 means shorter than expected.',
    source,
    generated: true,
  },
  {
    id: 7620012,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'OR block utilization',
    prompt:
      'A surgeon\'s reserved operating-room block runs at 45% utilization while other surgeons are turned away for lack of time. What is the disciplined first move?',
    correct:
      'Review block utilization data and reallocate or release underused block time per the block policy, using objective thresholds',
    wrong: [
      miss(
        'Build a new operating room to create more capacity',
        'Adding an OR is a major capital project to fix what is an allocation problem; the existing block is sitting idle nearly half the time.',
        'You have unused time already; capital cannot fix a scheduling-allocation gap.',
      ),
      miss(
        'Let the underused block stand untouched to avoid upsetting the surgeon',
        'Leaving idle block time protected while others are turned away wastes the most expensive real estate in the hospital and is hard to defend to the board.',
        'Protecting idle prime time at others\' expense is the problem, not a courtesy.',
      ),
      miss(
        'Cancel all block scheduling and run the OR purely first-come-first-served',
        'Abolishing blocks removes the predictability surgeons and staffing depend on; the fix is enforcing utilization thresholds, not scrapping the system.',
        'Tighten the rules on idle blocks rather than dismantling block scheduling entirely.',
      ),
    ],
    lesson:
      'OR block time is scarce, expensive capacity allocated to surgeons or services. Block policies set a utilization threshold (commonly around 75%) below which time is reviewed and reallocated or released to others. A 45% block while colleagues are turned away is an allocation failure: the answer is data-driven reallocation under the block policy, not new capital or scrapping blocks.',
    source,
    generated: true,
  },
  {
    id: 7620013,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Throughput versus capacity',
    prompt:
      'An administrator says "we do not have a bed problem, we have a throughput problem." What distinction is being drawn?',
    correct:
      'Capacity is how many beds exist; throughput is how fast patients move through them — the same beds serve more patients if flow is faster',
    wrong: [
      miss(
        'Capacity and throughput are the same thing measured in different units',
        'They are genuinely different: a hospital can have ample physical beds yet poor flow, so adding beds would not fix a throughput-limited system.',
        'If they were the same, faster discharges could not substitute for more beds.',
      ),
      miss(
        'Throughput means total revenue and capacity means total cost',
        'Throughput refers to patient movement through the system, not revenue; conflating it with finance misses the operational point.',
        'These are flow concepts, not a revenue-versus-cost pairing.',
      ),
      miss(
        'A throughput problem can only ever be solved by hiring more staff',
        'Staffing is one lever, but throughput also depends on discharge timing, bed turnover, ancillary results, and handoffs; it is not a single-lever problem.',
        'Flow has many constraints; staffing is one of several, not the only fix.',
      ),
    ],
    lesson:
      'Capacity is the stock of beds; throughput is the rate patients flow through them. A hospital boarding patients despite open physical beds usually has a throughput problem (slow discharges, late turnover, ancillary delays), which more beds will not fix. Improving flow effectively expands functional capacity without construction, which is why administrators distinguish the two.',
    source,
    generated: true,
  },
  {
    id: 7620014,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Ambulance diversion tradeoff',
    prompt:
      'An overwhelmed ED considers going on ambulance diversion. What is the most important systemic caution about using diversion as a flow tool?',
    correct:
      'Diversion delays definitive care and can shift the burden to nearby EDs; it treats a symptom of inpatient gridlock rather than the cause',
    wrong: [
      miss(
        'Diversion is illegal under EMTALA in all circumstances',
        'Diversion is not categorically illegal; the systemic caution is that it delays care and offloads strain to neighbors, while EMTALA still applies to anyone who arrives.',
        'The issue is system impact and continued EMTALA duty, not a blanket ban.',
      ),
      miss(
        'Diversion permanently solves boarding because the inpatient units empty out',
        'Diversion reduces incoming ambulances but does nothing to clear admitted boarders or speed discharges; the inpatient bottleneck remains.',
        'Stopping arrivals does not unblock the back-end discharge constraint.',
      ),
      miss(
        'Diversion improves the hospital\'s HCAHPS scores by lowering volume',
        'Diversion does not improve HCAHPS and may worsen community access; its real effect is shifting load and delaying definitive care.',
        'Cutting arrivals is not an experience-score strategy; it is a strained-capacity signal.',
      ),
    ],
    lesson:
      'Ambulance diversion can briefly relieve an overwhelmed ED, but it delays definitive care for patients rerouted farther away and pushes load onto neighboring hospitals, which can cascade regionally. It addresses the symptom (arrivals) while the cause is usually inpatient gridlock and slow discharges. EMTALA obligations still attach to anyone who presents. It is a last-resort signal, not a fix.',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 3: Healthcare Finance and Resource Stewardship
  // ===========================================================================
  {
    id: 7620015,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Operating versus total margin',
    prompt:
      'A hospital reports a 1% operating margin but a 6% total margin in a strong investment year. What explains the gap, and which figure better reflects core operations?',
    correct:
      'Total margin includes non-operating income such as investment returns and donations; operating margin (1%) better reflects core patient-care performance',
    wrong: [
      miss(
        'Operating margin includes investment income, so it is always the larger of the two',
        'It is the reverse: total margin adds non-operating income (investments, gifts), so total margin is the broader, often larger figure; operating margin excludes those.',
        'Which margin adds investment gains on top? That one runs higher.',
      ),
      miss(
        'The two should always be identical; a gap means an accounting error',
        'A gap is normal and expected whenever there is meaningful non-operating income; it is not an error but the very definition of the two measures.',
        'A difference is built into the definitions, not a mistake to reconcile away.',
      ),
      miss(
        'Total margin is the better measure of how the patient-care business is doing',
        'Total margin is inflated by non-operating items unrelated to care delivery; operating margin isolates the core business and is the better operational read.',
        'To judge the care business, strip out investments and gifts.',
      ),
    ],
    lesson:
      'Operating margin = (operating revenue − operating expenses) / operating revenue, capturing only the patient-care business. Total margin adds non-operating income (investment returns, contributions, government appropriations), so in a good market year total margin can far exceed operating margin. A thin operating margin with a healthy total margin means core operations are barely profitable and the cushion is coming from investments, a fragile position.',
    source,
    generated: true,
  },
  {
    id: 7620016,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Days in accounts receivable',
    prompt:
      'A revenue-cycle director reports "days in A/R" rose from 45 to 62 days. What does this most directly indicate, and why does it matter?',
    correct:
      'It is taking longer on average to collect billed revenue, which ties up cash and can signal billing, coding, or denial problems',
    wrong: [
      miss(
        'The hospital became more profitable because receivables are an asset',
        'Receivables are money owed but not yet collected; a rising A/R-days figure means slower cash conversion, which strains liquidity rather than boosting profit.',
        'Uncollected billings sitting longer is a cash problem, not a profit gain.',
      ),
      miss(
        'Patients are staying 62 days in the hospital on average',
        'Days in A/R measures collection time on claims, not length of stay; it has nothing to do with how long patients occupy beds.',
        'This metric is about collecting bills, not the duration of stays.',
      ),
      miss(
        'The case mix index increased to 62',
        'Days in A/R is a revenue-cycle timing metric; CMI is a DRG-weight average near 1.0–2.0. A value of 62 cannot be a CMI.',
        'A collection-speed number is not a complexity index.',
      ),
    ],
    lesson:
      'Days in accounts receivable = net patient receivables / average daily net patient revenue. It estimates how long, on average, it takes to collect after billing. A rise from 45 to 62 days ties up cash and often signals upstream problems (registration errors, coding lag, rising denials, slow payers). Because it directly affects days cash on hand, A/R days is a closely watched revenue-cycle and liquidity metric.',
    source,
    generated: true,
  },
  {
    id: 7620017,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Payer mix shift',
    prompt:
      'A hospital\'s payer mix shifts as a large employer leaves town: commercial volume drops and Medicare/Medicaid share rises, even though total volume is flat. What is the likely financial effect?',
    correct:
      'Net revenue per case typically falls, because government payers generally reimburse below commercial rates for the same services',
    wrong: [
      miss(
        'Net revenue rises, because Medicare and Medicaid pay more than commercial insurers',
        'Government payers generally reimburse below commercial rates; shifting toward them at flat volume usually lowers, not raises, net revenue per case.',
        'Compare typical commercial versus government reimbursement levels before guessing direction.',
      ),
      miss(
        'There is no financial effect, since the number of patients is unchanged',
        'Revenue depends on who pays, not just how many; the same service can yield very different net revenue by payer, so mix matters even at flat volume.',
        'Equal volume can still mean less money if the payer mix worsens.',
      ),
      miss(
        'The case mix index will automatically fall to compensate',
        'CMI reflects clinical complexity of cases, not payer; a payer-mix shift does not mechanically change CMI, and CMI does not offset reimbursement differences.',
        'Payer mix and case complexity are independent; one does not cancel the other.',
      ),
    ],
    lesson:
      'Payer mix is the share of revenue or volume by payer (commercial, Medicare, Medicaid, self-pay). Because commercial plans generally pay more than government programs for the same DRG, a shift toward Medicare/Medicaid lowers net revenue per case even when volume and acuity are unchanged. Understanding payer mix is essential to explaining margin pressure that is not visible in volume figures alone.',
    source,
    generated: true,
  },
  {
    id: 7620018,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Charity care versus bad debt',
    prompt:
      'A finance committee debates whether unpaid patient balances are "charity care" or "bad debt." Why does the distinction matter?',
    correct:
      'Charity care is provided to patients qualified as unable to pay under financial-assistance policy; bad debt is amounts expected to be collected but not paid — they are accounted for and scrutinized differently',
    wrong: [
      miss(
        'There is no real difference; both are simply uncollected revenue',
        'They differ in intent and accounting: charity care is granted up front under policy to those unable to pay, while bad debt is a failed collection on expected payment.',
        'One is a deliberate write-off by policy; the other is a collection failure.',
      ),
      miss(
        'Charity care is money the hospital owes patients, not the reverse',
        'Charity care is care the hospital provides without expectation of payment to qualifying patients; it is not a debt the hospital owes to patients.',
        'Charity care flows from hospital to patient as forgiven cost, not as cash owed.',
      ),
      miss(
        'Bad debt qualifies for the same community-benefit reporting as charity care',
        'Charity care and bad debt are reported differently; charity care counts toward community benefit for nonprofit reporting, while bad debt generally does not.',
        'Community-benefit reporting treats deliberate charity differently from failed collections.',
      ),
    ],
    lesson:
      'Charity care is care given to patients determined unable to pay under the hospital\'s financial-assistance policy; it is intended free care and, for nonprofits, counts toward community benefit. Bad debt is revenue the hospital expected to collect but did not. The distinction drives accounting, IRS Form 990 community-benefit reporting, and how leaders interpret uncompensated care, so misclassifying them distorts both the books and the mission story.',
    source,
    generated: true,
  },
  {
    id: 7620019,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Variance decomposition driver',
    prompt:
      'Pharmacy expense is $200,000 over budget. Volume rose 4%, but the budget assumed an old, cheaper drug while the unit switched to a costlier biologic. Which variance driver dominates here?',
    correct:
      'Rate (price) variance — the per-unit cost rose well beyond the modest volume increase',
    wrong: [
      miss(
        'Volume variance, because more patients were treated',
        'A 4% volume rise cannot explain a large overrun when the per-dose drug cost jumped; the dominant driver is the higher unit price, not the small volume change.',
        'A modest volume bump cannot account for a switch to a far costlier drug.',
      ),
      miss(
        'Efficiency variance, because staff worked more slowly',
        'Efficiency (productivity) variance concerns labor hours per unit of work, not drug acquisition cost; this overrun is about what each dose costs, not how fast staff worked.',
        'This is a purchasing-price story, not a labor-productivity story.',
      ),
      miss(
        'There is no real variance; over-budget pharmacy spend is always just inflation',
        'Calling it generic inflation skips the analysis; the identifiable driver is a specific shift to a higher-priced biologic, which is a rate variance to be named and managed.',
        'Name the actual driver instead of writing it off as inflation.',
      ),
    ],
    lesson:
      'Budget variances decompose into volume (how much), rate/price (cost per unit), mix (what kind of cases), and efficiency/utilization (resources per case). Here a small volume rise cannot explain a large overrun, but a switch to a costlier biologic raises per-unit cost — a rate (price) variance. Naming the correct driver is the whole point: it tells you whether to renegotiate price, manage utilization, or address mix, rather than cutting blindly.',
    source,
    generated: true,
  },
  {
    id: 7620020,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Total cost of care versus unit price',
    prompt:
      'A vendor offers a surgical mesh at 20% below the current unit price. Before signing, what is the most disciplined analysis an administrator should demand?',
    correct:
      'Compare total cost of care — including complication, reoperation, and length-of-stay impact — not just the unit price',
    wrong: [
      miss(
        'Sign immediately, since a lower unit price always reduces total spend',
        'A cheaper unit price can raise total cost if the product drives more complications, reoperations, or longer stays; unit price alone is an incomplete and misleading view.',
        'Cheaper per item can still cost more per outcome; check downstream effects.',
      ),
      miss(
        'Reject it outright, because cheaper supplies are always lower quality',
        'Lower price does not automatically mean lower quality; the disciplined move is to evaluate clinical outcomes and total cost, not to assume either direction.',
        'Do not assume quality from price; measure outcomes and total cost.',
      ),
      miss(
        'Decide based on which vendor offers the longest payment terms',
        'Payment terms affect cash timing but not whether the product is clinically and economically sound; total cost of care is the deciding analysis.',
        'Financing terms are secondary to the clinical and total-cost picture.',
      ),
    ],
    lesson:
      'Supply decisions must be judged on total cost of care, not sticker price. A cheaper implant or device that increases complications, reoperations, or length of stay can cost the system far more than it saves on the line item. The right pressure-test asks for outcome data and the full downstream cost, which is why physician and clinical input belong in value-analysis decisions.',
    source,
    generated: true,
  },
  {
    id: 7620021,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Productivity and worked hours',
    prompt:
      'A unit\'s productivity is measured against a worked-hours-per-unit-of-service target, but census dropped sharply mid-month. What is the disciplined way to read a sudden "unfavorable" productivity number?',
    correct:
      'Productivity is volume-sensitive; a census drop with fixed core staffing temporarily worsens the ratio, so flex staffing and the timing must be examined before judging performance',
    wrong: [
      miss(
        'The staff clearly became lazy and discipline is warranted',
        'A worsening productivity ratio after a census drop usually reflects fixed minimum staffing against lower volume, not effort; punishing staff misreads the math.',
        'When volume falls faster than staffing can flex, the ratio worsens for structural reasons.',
      ),
      miss(
        'Productivity numbers are meaningless and should be ignored',
        'Productivity is a useful labor metric; the point is to interpret it with volume and acuity context, not to discard it.',
        'Interpret the ratio in context rather than throwing the metric away.',
      ),
      miss(
        'The hospital should immediately lay off staff to fix the ratio',
        'Knee-jerk layoffs to chase a short-term ratio can leave the unit unsafe when census rebounds; the issue is flexing to demand, not permanent cuts.',
        'A temporary volume dip is not a basis for permanent headcount cuts.',
      ),
    ],
    lesson:
      'Labor productivity (worked hours per unit of service, or worked HPPD against a target) is sensitive to volume because a portion of staffing is fixed (minimum safe coverage). A sudden census drop makes the ratio look unfavorable even when staff did nothing wrong; the right response is to flex variable staffing to demand and examine acuity and timing, not to discipline staff or cut permanently.',
    source,
    generated: true,
  },
  {
    id: 7620022,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Capital request versus operating fix',
    prompt:
      'An OR requests a $1.2M robot, citing long case times. Review shows delays come from turnover and instrument-tray gaps, not the existing equipment. What is the disciplined recommendation?',
    correct:
      'Address the process problem (turnover, tray readiness) first and re-test the case-time data before approving major capital',
    wrong: [
      miss(
        'Approve the robot, since new technology reliably fixes operational delays',
        'Capital rarely fixes a process problem; if turnover and tray gaps drive the delays, an expensive robot leaves the real constraint untouched.',
        'New equipment will not cure delays caused by turnover and supply readiness.',
      ),
      miss(
        'Approve it because surgeons will be unhappy otherwise',
        'Capital decisions follow the business case and patient benefit, not the loudest stakeholder; buying to soothe is how money goes to the wrong constraint.',
        'Satisfaction is not a business case; the data says the constraint is process.',
      ),
      miss(
        'Reject all capital requests from the OR for the year',
        'A blanket rejection ignores legitimate future needs and the OR\'s real strategic case; the issue is this request\'s rationale, not a freeze on all capital.',
        'Decline this rationale, not every future OR investment on principle.',
      ),
    ],
    lesson:
      'A capital business case must tie the spend to the actual constraint and a measurable benefit. When data show delays come from turnover and instrument readiness, buying a robot spends seven figures without touching the bottleneck. Fix and re-measure the process first; if a true capacity or capability gap remains, then build the capital case on the corrected data.',
    source,
    generated: true,
  },
  {
    id: 7620023,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Documentation drives CMI',
    prompt:
      'Two units treat equally sick patients, but Unit A\'s case mix index is markedly higher. Coding review finds Unit B under-documents comorbidities. What is the real issue and the right fix?',
    correct:
      'Incomplete clinical documentation is depressing Unit B\'s CMI and reimbursement; the fix is clinical documentation improvement, not treating sicker patients',
    wrong: [
      miss(
        'Unit B should admit sicker patients to raise its CMI',
        'CMI should reflect the patients actually treated; deliberately changing who is admitted to game the index is both unethical and clinically wrong.',
        'The gap is documentation, not the acuity of patients you should seek out.',
      ),
      miss(
        'The difference proves Unit A is overcoding and should be cut back',
        'If Unit A accurately captures comorbidities present, it is coding correctly; the finding is that Unit B under-documents, so the correction is on B, not a cut on A.',
        'Accurate capture is not overcoding; the deficiency is on the under-documenting unit.',
      ),
      miss(
        'CMI cannot be influenced by documentation at all',
        'CMI is built from coded diagnoses, which depend directly on documentation; better capture of true comorbidities legitimately raises CMI and reimbursement.',
        'Coding feeds CMI, and coding depends on what is documented.',
      ),
    ],
    lesson:
      'Case mix index is computed from coded MS-DRGs, which depend on documented diagnoses and comorbidities. When clinically present comorbidities are not documented, the DRG and CMI understate true acuity, leaving legitimate reimbursement on the table. Clinical documentation improvement (CDI) captures the real severity; the goal is accuracy, never inflating acuity or changing whom you treat.',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 4: Quality, Patient Safety, and Accreditation
  // ===========================================================================
  {
    id: 7620024,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Universal Protocol components',
    prompt:
      'To prevent wrong-site surgery, the Joint Commission\'s Universal Protocol requires three core elements. Which set correctly names them?',
    correct: 'Pre-procedure verification, marking the procedure site, and a time-out immediately before the procedure',
    wrong: [
      miss(
        'A signed consent form, a billing pre-authorization, and a discharge summary',
        'Consent, authorization, and discharge are administrative steps, not the Universal Protocol; the protocol is verification, site marking, and the time-out.',
        'The protocol is a safety sequence in the OR, not a paperwork checklist.',
      ),
      miss(
        'Two patient identifiers, hand hygiene, and medication reconciliation',
        'These are other National Patient Safety Goals, not the Universal Protocol; the protocol\'s three parts are verification, site marking, and time-out.',
        'Those are separate safety goals; name the three steps specific to wrong-site prevention.',
      ),
      miss(
        'A root cause analysis, a corrective action plan, and a follow-up audit',
        'RCA and corrective actions follow an event; the Universal Protocol is a preventive pre-procedure sequence, not a post-event analysis.',
        'You are asked for the prevention steps before surgery, not the post-event response.',
      ),
    ],
    lesson:
      'The Joint Commission\'s Universal Protocol for preventing wrong-site, wrong-procedure, and wrong-person surgery has three components: (1) a pre-procedure verification process, (2) marking the operative site, and (3) a time-out immediately before starting, where the team confirms correct patient, procedure, and site. It arose from sentinel-event review of wrong-site surgery and is distinct from other safety goals like two-identifier ID.',
    source,
    generated: true,
  },
  {
    id: 7620025,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Two patient identifiers',
    prompt:
      'A National Patient Safety Goal requires using at least two patient identifiers before care. A nurse proposes using the patient\'s room number as one identifier. Why is that improper?',
    correct:
      'The identifier must be specific to the individual; a room or bed number is location-based and changes, so it is not an acceptable identifier',
    wrong: [
      miss(
        'Room number is fine as long as it is used consistently every time',
        'Consistency does not cure the flaw; room numbers are tied to location, not person, and reassign frequently, so they can match the wrong patient.',
        'A reliable identifier follows the person, not the bed.',
      ),
      miss(
        'Any two pieces of information count, so room number plus diagnosis is acceptable',
        'Identifiers must be person-specific (name, ID number, date of birth); diagnosis and room are not acceptable patient identifiers under the goal.',
        'The two identifiers must each uniquely point to the individual.',
      ),
      miss(
        'The rule only requires one identifier, so the second can be anything',
        'The goal requires at least two acceptable, person-specific identifiers; it does not allow a free-for-all on the second.',
        'Both identifiers must be valid and person-specific, not just one.',
      ),
    ],
    lesson:
      'The two-identifier National Patient Safety Goal requires at least two person-specific identifiers (such as full name, date of birth, or medical record number) before administering care, medications, or procedures. The patient\'s room or bed number is explicitly unacceptable because it is location-based and changes, creating a real risk of matching an order to the wrong person.',
    source,
    generated: true,
  },
  {
    id: 7620026,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Alarm fatigue management',
    prompt:
      'A telemetry unit is flooded with non-actionable monitor alarms and staff are missing real ones. A National Patient Safety Goal addresses this. What is the appropriate management approach?',
    correct:
      'Establish clinical alarm-management policies — set appropriate parameters, customize per patient, and reduce non-actionable alarms — to combat alarm fatigue',
    wrong: [
      miss(
        'Permanently silence or disable the alarms that go off most often',
        'Disabling frequent alarms can silence a genuinely dangerous one; the goal is reducing non-actionable alarms through proper settings, not turning off safety alerts.',
        'Quieting nuisance alarms must not blind the unit to real ones.',
      ),
      miss(
        'Assign one nurse to manually watch all monitors so alarms can be ignored',
        'A single watcher cannot reliably cover all monitors and removes alarms\' safety function; the standard is managing alarm settings, not replacing them with one person.',
        'A human cannot substitute for a properly tuned alarm system across a unit.',
      ),
      miss(
        'Wait until a patient is harmed before changing anything',
        'Alarm fatigue is a known, preventable hazard with a specific safety goal; waiting for harm before acting is exactly the reactive failure the goal targets.',
        'Act on the known hazard now; do not wait for a sentinel event to justify it.',
      ),
    ],
    lesson:
      'Alarm fatigue — desensitization from too many non-actionable alarms — is a recognized patient-safety hazard with its own National Patient Safety Goal. The correct response is a clinical alarm-management program: setting clinically appropriate parameters, customizing alarms to the patient, reducing nuisance alarms, and defining who responds. Silencing or disabling alarms wholesale, or replacing them with a single watcher, defeats their safety purpose.',
    source,
    generated: true,
  },
  {
    id: 7620027,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Medication reconciliation purpose',
    prompt:
      'A patient is admitted on eight home medications, started on new inpatient drugs, and then transferred to a step-down unit. What is the core purpose of medication reconciliation at each transition?',
    correct:
      'Compare the patient\'s current medications against new orders at each transition to catch omissions, duplications, and interactions',
    wrong: [
      miss(
        'To determine which medications the insurer will reimburse',
        'Medication reconciliation is a safety process to align the med list across transitions, not a coverage or billing determination.',
        'This is a patient-safety comparison, not a payment check.',
      ),
      miss(
        'To reduce the total number of medications regardless of clinical need',
        'The aim is an accurate, safe, intentional list, not arbitrary reduction; medications are continued, changed, or stopped based on clinical need, not a count target.',
        'The goal is the right list, not the shortest list.',
      ),
      miss(
        'To document medications only at discharge, since that is when errors matter',
        'Reconciliation is required at every transition of care (admission, transfer, discharge) because errors are introduced at each handoff, not only at discharge.',
        'Each handoff is a risk point, not just the final one.',
      ),
    ],
    lesson:
      'Medication reconciliation compares the medications a patient is actually taking with newly ordered ones at every transition of care — admission, transfer, and discharge — to identify and resolve omissions, duplications, dosing errors, and interactions. Transitions are where med errors are introduced, so reconciliation belongs at each handoff, with the goal of an accurate, intentional list rather than a shorter one.',
    source,
    generated: true,
  },
  {
    id: 7620028,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Never events and nonpayment',
    prompt:
      'A surgical team leaves a sponge inside a patient, requiring a second operation. Beyond the clinical harm, how do CMS and payers typically treat such a "never event"?',
    correct:
      'It is a serious reportable event that payers generally will not reimburse, and CMS does not pay the extra costs of treating certain hospital-acquired conditions',
    wrong: [
      miss(
        'CMS pays a bonus for the additional care needed to correct it',
        'There is no bonus for correcting a never event; payers decline to reimburse the preventable harm and its corrective care, the opposite of a reward.',
        'Preventable harm is not reimbursed at a premium; it is non-paid.',
      ),
      miss(
        'It has no financial consequence as long as the patient eventually recovers',
        'Recovery does not erase the financial and reporting consequences; never events trigger nonpayment, reporting obligations, and quality scrutiny regardless of outcome.',
        'Outcome does not remove the nonpayment and reporting consequences.',
      ),
      miss(
        'It is reimbursed normally because all complications are paid the same way',
        'Never events (like retained surgical items) are treated differently from ordinary complications; they are largely preventable and specifically excluded from payment.',
        'Preventable never events are carved out from normal complication payment.',
      ),
    ],
    lesson:
      'Never events (serious reportable events such as retained surgical items, wrong-site surgery, and certain hospital-acquired conditions) are largely preventable and treated specially. CMS does not pay the additional cost of treating certain hospital-acquired conditions, and many payers refuse reimbursement for the event and its correction. They also carry reporting and accreditation consequences, reinforcing that prevention is far cheaper than the aftermath.',
    source,
    generated: true,
  },
  {
    id: 7620029,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'RCA targets systems not blame',
    prompt:
      'During a root cause analysis of a medication error, a manager pushes to conclude "the nurse was careless" and move on. Why is that conclusion methodologically wrong?',
    correct:
      'RCA must drill past individual blame to the system factors (process, design, staffing, alerts) that allowed the error, so a durable fix is possible',
    wrong: [
      miss(
        'Because the nurse should be praised instead of analyzed',
        'RCA is neither blame nor praise of an individual; it is a systems analysis. Substituting praise for blame still skips the process causes.',
        'The point is system causes, not relabeling the individual\'s performance.',
      ),
      miss(
        'Because RCA is only valid if it identifies exactly one root cause',
        'Most adverse events have multiple contributing system factors; insisting on a single cause is itself a methodological error, separate from the blame problem.',
        'Events usually have several contributing causes, not one tidy culprit.',
      ),
      miss(
        'Because the manager lacks authority to lead an RCA',
        'The flaw is the blame-only conclusion, not who chairs the analysis; a different chair making the same individual-blame error would be equally wrong.',
        'The error is the reasoning, not the seniority of who runs it.',
      ),
    ],
    lesson:
      'Root cause analysis deliberately looks past "who" to "why the system allowed it." Stopping at individual carelessness (operator error is a symptom, not a root cause) yields a corrective action like "be careful," which fixes nothing. Asking "why" repeatedly surfaces fixable system factors — confusing labels, missing alerts, unsafe staffing — and adverse events usually have several such contributing causes.',
    source,
    generated: true,
  },
  {
    id: 7620030,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'SIR confidence interval',
    prompt:
      'A hospital\'s CAUTI SIR is 0.80, but the 95% confidence interval runs from 0.55 to 1.10. What is the correct interpretation?',
    correct:
      'The point estimate suggests fewer infections than predicted, but because the interval includes 1.0, the result is not statistically significantly better than expected',
    wrong: [
      miss(
        'The hospital has definitively beaten the national benchmark and can stop monitoring',
        'Because the confidence interval crosses 1.0, the apparent improvement is not statistically significant; declaring victory and stopping surveillance is unwarranted.',
        'An interval that includes 1.0 means the difference might be chance.',
      ),
      miss(
        'An SIR of 0.80 means 80% of catheterized patients got infected',
        'The SIR is observed-over-predicted infections, not an infection rate; 0.80 means 20% fewer than predicted, not 80% infected.',
        'SIR is a ratio to expectation, not a percentage of patients infected.',
      ),
      miss(
        'The wide interval proves the data were collected incorrectly',
        'A wide interval usually reflects a small number of predicted infections, not data error; it signals statistical uncertainty, not a collection mistake.',
        'Width signals low event counts and uncertainty, not necessarily bad data.',
      ),
    ],
    lesson:
      'The Standardized Infection Ratio compares observed to predicted infections; below 1.0 looks better than expected. But statistical significance depends on the confidence interval: if it includes 1.0, the difference is not significant, so a 0.80 with a 0.55–1.10 interval is not proven better. Wide intervals typically come from few predicted infections, which is why low-volume units need cautious interpretation.',
    source,
    generated: true,
  },
  {
    id: 7620031,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Error disclosure to patients',
    prompt:
      'A preventable medication error reaches a patient and causes a temporary but real harm. What does ethical and accreditation guidance direct regarding disclosure?',
    correct:
      'The patient (or family) should receive timely, honest disclosure of the unanticipated outcome, including what is known and what is being done',
    wrong: [
      miss(
        'Disclose nothing unless the patient specifically asks about an error',
        'Disclosure of harmful unanticipated outcomes is an affirmative obligation, not contingent on the patient guessing to ask; silence breaches both ethics and standards.',
        'The duty to disclose does not wait for the patient to suspect something.',
      ),
      miss(
        'Wait until the malpractice claim is resolved before telling the patient anything',
        'Withholding disclosure pending litigation is both unethical and counterproductive; transparency is expected promptly, and delay can worsen trust and legal exposure.',
        'Honest disclosure precedes, and does not wait on, the legal process.',
      ),
      miss(
        'Tell only the patient\'s insurer, since they handle the financial side',
        'The disclosure obligation runs to the patient and family about their care, not to the insurer as a substitute; informing a payer does not satisfy it.',
        'The person owed the truth is the patient, not the payer.',
      ),
    ],
    lesson:
      'Joint Commission standards and professional ethics call for disclosing unanticipated outcomes, including harmful errors, to patients and families: what happened, what is known, and what is being done. Honest, timely disclosure (often paired with apology where appropriate) respects the patient, supports a just culture, and is associated with better trust and outcomes than concealment or delay.',
    source,
    generated: true,
  },
  {
    id: 7620032,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Corrective action that works',
    prompt:
      'After a wrong-dose insulin event, a quality summary proposes the corrective action "remind nurses to be careful with insulin." Why will this likely fail an effective-action review?',
    correct:
      'Reminders and re-education are weak, person-dependent actions; stronger corrective actions change the system (forcing functions, standardization, technology)',
    wrong: [
      miss(
        'Because the corrective action should instead name and discipline the nurse',
        'Discipline does not prevent recurrence and undermines just culture; the deficiency is weak system change, not insufficient blame.',
        'Punishment is not a corrective action; durable system change is.',
      ),
      miss(
        'Because corrective actions are optional and any plausible one is acceptable',
        'Accreditation expects effective, sustainable corrective actions tied to root causes; "be careful" is specifically the kind of weak action reviews reject.',
        'Actions are judged on strength and durability, not mere plausibility.',
      ),
      miss(
        'Because the action should wait for a second event to confirm the pattern',
        'Waiting for another harm event is the opposite of corrective action; the weakness here is the reminder\'s reliance on memory, not timing.',
        'You do not need a repeat event; you need a stronger action now.',
      ),
    ],
    lesson:
      'Corrective actions sit on a hierarchy of effectiveness. Weak actions (reminders, re-education, "be careful") depend on individual vigilance and rarely hold. Strong actions change the system: forcing functions, standardized protocols, barcode verification, default order sets, and physical or software constraints. Effective-action reviews push teams up that hierarchy, because a durable fix removes the chance to err, not just the intention to.',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 5: Regulatory and Compliance Floor
  // ===========================================================================
  {
    id: 7620033,
    chapter: 'Regulatory and Compliance Floor',
    title: 'Two-Midnight case-by-case exception',
    prompt:
      'A high-risk patient is admitted as inpatient even though the physician does not expect a stay spanning two midnights. Under the current Two-Midnight Rule, can this be appropriate?',
    correct:
      'Yes — the case-by-case exception lets a physician admit as inpatient based on documented clinical judgment even if two midnights are not expected',
    wrong: [
      miss(
        'No — inpatient status is never permitted unless the stay actually spans two midnights',
        'The rule is not absolute; a documented case-by-case exception allows inpatient status based on the admitting physician\'s judgment of risk, even under two midnights.',
        'There is a documented exception to the two-midnight expectation.',
      ),
      miss(
        'Yes — but only if the patient is enrolled in Medicare Advantage, not traditional Medicare',
        'The case-by-case exception applies under traditional Medicare; recent rules extended Two-Midnight requirements to MA plans, but the exception is not MA-only.',
        'The exception is not limited to one Medicare product line.',
      ),
      miss(
        'No — only the utilization review committee, never the admitting physician, can authorize inpatient status',
        'The admitting physician makes the status decision with documentation; UR reviews and supports it, but the case-by-case exception rests on the physician\'s documented judgment.',
        'The physician\'s documented judgment, supported by UR, drives status.',
      ),
    ],
    lesson:
      'The Two-Midnight Rule generally pays inpatient (Part A) when the physician expects care spanning at least two midnights. But the case-by-case exception permits inpatient admission for patients who do not meet that expectation when the admitting physician documents that the severity, comorbidities, and risk of an adverse event justify inpatient care. Documentation of that clinical judgment is what makes it defensible.',
    source,
    generated: true,
  },
  {
    id: 7620034,
    chapter: 'Regulatory and Compliance Floor',
    title: 'Elements of an appropriate transfer',
    prompt:
      'A small ED must transfer an unstable patient it cannot stabilize to a higher-level center. Under EMTALA, which set of conditions defines an "appropriate transfer"?',
    correct:
      'Treatment to minimize risk within capability, an accepting facility with space and qualified staff that has agreed to accept, records sent, and qualified personnel and equipment for transport',
    wrong: [
      miss(
        'Simply calling an ambulance and sending the patient to the nearest hospital',
        'EMTALA requires far more: an accepting facility that agreed to take the patient, records, risk-minimizing care, and qualified transport — not just dispatching an ambulance.',
        'A bare ambulance call omits acceptance, records, and qualified transport.',
      ),
      miss(
        'Confirming the patient\'s insurance will cover the receiving hospital first',
        'EMTALA prohibits gating an emergency transfer on insurance; appropriateness is defined by clinical and logistical safeguards, not coverage verification.',
        'Coverage checks are not an element of an appropriate transfer.',
      ),
      miss(
        'Obtaining the patient\'s written request and nothing more',
        'A written request can support transferring an unstable patient, but the transfer must still meet all appropriate-transfer elements (acceptance, records, transport); the request alone is insufficient.',
        'A patient request does not waive the other required safeguards.',
      ),
    ],
    lesson:
      'Under EMTALA, an appropriate transfer of an unstable patient requires: (1) the sending hospital provides care within its capability to minimize transfer risk, (2) a receiving facility with space and qualified personnel has agreed to accept, (3) medical records are sent, and (4) transport uses qualified personnel and appropriate equipment. A physician must certify that benefits outweigh risks. None of this turns on insurance.',
    source,
    generated: true,
  },
  {
    id: 7620035,
    chapter: 'Regulatory and Compliance Floor',
    title: 'EMTALA penalty scale',
    prompt:
      'A hospital with more than 100 beds delays a medical screening exam to verify insurance, and a CMS investigation substantiates an EMTALA violation. Roughly what magnitude of civil monetary penalty per violation should leadership expect, and what is the ultimate sanction?',
    correct:
      'A civil monetary penalty on the order of six figures per violation for a larger hospital, with termination of the Medicare provider agreement as the ultimate sanction',
    wrong: [
      miss(
        'A fixed $500 fine per violation and no risk to Medicare participation',
        '$500 vastly understates EMTALA penalties, which reach roughly six figures per violation for larger hospitals; termination of the Medicare agreement is also on the table.',
        'EMTALA penalties are orders of magnitude larger than a nominal fine.',
      ),
      miss(
        'No financial penalty, only a warning letter for a first offense',
        'EMTALA violations can carry substantial civil monetary penalties even on investigation, and repeated or egregious violations risk Medicare termination; it is not a warning-only regime.',
        'A substantiated violation can bring real penalties, not just a letter.',
      ),
      miss(
        'A penalty capped at the cost of the single patient\'s care',
        'EMTALA penalties are set by regulation per violation (six figures for larger hospitals), not tied to one patient\'s bill, and the Medicare agreement itself is at risk.',
        'The penalty is a regulatory per-violation amount, not the patient\'s charges.',
      ),
    ],
    lesson:
      'EMTALA violations carry steep civil monetary penalties — for hospitals with 100 or more beds, on the order of well over $100,000 per violation (annually inflation-adjusted), and somewhat less for smaller hospitals — plus penalties on responsible physicians. The ultimate sanction is termination of the Medicare provider agreement, which for most hospitals is existential. This is why "verify insurance first" is a catastrophic instruction.',
    source,
    generated: true,
  },
  {
    id: 7620036,
    chapter: 'Regulatory and Compliance Floor',
    title: 'HIPAA minimum necessary and treatment',
    prompt:
      'A nurse practitioner requests a patient\'s full record to coordinate the patient\'s ongoing treatment. A new privacy clerk wants to redact most of it citing "minimum necessary." Who is right?',
    correct:
      'The clinician — the minimum necessary standard does not apply to disclosures to a provider for treatment of that patient',
    wrong: [
      miss(
        'The clerk — minimum necessary always applies to every disclosure without exception',
        'Minimum necessary has defined exceptions; disclosures to a provider for treatment are exempt so clinicians get the full picture needed for safe care.',
        'Treatment-purpose disclosures to a provider are a named exception.',
      ),
      miss(
        'The clerk — but only because the request was verbal rather than written',
        'The format of the request is irrelevant; the treatment exception to minimum necessary applies regardless of whether the request is verbal or written.',
        'The exception turns on purpose (treatment), not on verbal versus written.',
      ),
      miss(
        'Neither — HIPAA forbids sharing a full record with anyone for any reason',
        'HIPAA permits sharing PHI for treatment, payment, and operations; it does not forbid full-record sharing with a treating provider — that is exactly what the exception allows.',
        'HIPAA enables treatment sharing; it does not prohibit it outright.',
      ),
    ],
    lesson:
      'HIPAA\'s minimum necessary standard requires limiting PHI use and disclosure to what is needed for the purpose — but it has key exceptions. Disclosures to a health care provider for treatment of the patient are exempt, so a treating clinician may receive the information needed for safe, coordinated care without artificial redaction. Misapplying minimum necessary to treatment can endanger patients and misreads the rule.',
    source,
    generated: true,
  },
  {
    id: 7620037,
    chapter: 'Regulatory and Compliance Floor',
    title: 'Breach risk assessment',
    prompt:
      'An employee emails a spreadsheet with PHI to the wrong internal colleague, who deletes it on notice. A manager assumes this is automatically a reportable breach. What does HIPAA actually require first?',
    correct:
      'A risk assessment of factors (PHI involved, who received it, whether it was actually viewed, and mitigation) to determine the probability that PHI was compromised',
    wrong: [
      miss(
        'Immediate media notification, since any PHI exposure triggers it',
        'Media notice is for breaches of 500+ residents of a state and only after a breach is established; a single misdirected internal email first requires a risk assessment.',
        'Media notice is a high-threshold, late-stage step, not the first move.',
      ),
      miss(
        'Nothing at all, because internal emails can never be breaches',
        'Internal misdirection can be a breach depending on the risk assessment; assuming it never is skips the required four-factor analysis.',
        'Internal does not automatically mean safe; you must assess the risk.',
      ),
      miss(
        'Automatic 60-day individual notification with no analysis',
        'Notification is required only if the risk assessment shows a low probability of compromise cannot be demonstrated; an unauthorized disclosure is presumed a breach unless that assessment rebuts it.',
        'Run the risk assessment before assuming the 60-day clock has started.',
      ),
    ],
    lesson:
      'Under the Breach Notification Rule, an impermissible use or disclosure of unsecured PHI is presumed a breach unless the entity demonstrates a low probability that PHI was compromised via a risk assessment of at least four factors: the nature/extent of the PHI, the unauthorized person who received it, whether the PHI was actually acquired or viewed, and the extent of mitigation. The assessment determines whether notification obligations (and their 60-day clock) are triggered.',
    source,
    generated: true,
  },
  {
    id: 7620038,
    chapter: 'Regulatory and Compliance Floor',
    title: 'Observation and the SNF three-day rule',
    prompt:
      'A patient spends four nights in the hospital but two were under observation and only two as inpatient. They now need skilled nursing care. Does Medicare\'s SNF benefit qualify?',
    correct:
      'No — the SNF benefit requires a three-day inpatient stay, and observation days do not count toward it, so two inpatient nights fall short',
    wrong: [
      miss(
        'Yes — any four nights in a hospital bed satisfy the requirement',
        'The requirement is specifically three inpatient days; total nights including observation do not count, so four mixed nights with only two inpatient do not qualify.',
        'Count inpatient nights only; observation nights do not apply.',
      ),
      miss(
        'Yes — observation and inpatient days are treated identically for the SNF benefit',
        'They are not identical: observation is outpatient (Part B) and is explicitly excluded from the three-day inpatient qualifying count.',
        'Observation is outpatient status and does not count toward the inpatient three days.',
      ),
      miss(
        'No — because Medicare never covers skilled nursing facility care at all',
        'Medicare Part A does cover SNF care after a qualifying three-day inpatient stay; the failure here is the count, not the absence of any SNF benefit.',
        'The SNF benefit exists; the patient just did not meet the inpatient-day count.',
      ),
    ],
    lesson:
      'Medicare\'s SNF benefit requires a qualifying inpatient hospital stay of at least three consecutive days (not counting the discharge day), and observation days — being outpatient (Part B) — do not count. A patient with only two inpatient nights, even amid additional observation nights, does not qualify. This is the human cost of status decisions and a core reason the Two-Midnight Rule and accurate status determination matter.',
    source,
    generated: true,
  },
  {
    id: 7620039,
    chapter: 'Regulatory and Compliance Floor',
    title: 'Policy on paper versus monitoring',
    prompt:
      'During a CMS survey, a hospital points to a thick binder of well-written compliance policies. The surveyor still cites deficiencies. What principle explains this?',
    correct:
      'A written policy is not compliance; surveyors look for evidence the policy is implemented, monitored, and actually followed in practice',
    wrong: [
      miss(
        'The policies must have been written by the wrong department',
        'Authorship is not the issue; even perfectly written policies fail a survey if there is no evidence they are followed and monitored in practice.',
        'Who wrote it matters far less than whether it is actually done.',
      ),
      miss(
        'Surveyors are not allowed to look beyond written documentation',
        'Surveyors specifically observe practice, interview staff, and review records to verify implementation; they are not confined to reading the binder.',
        'Surveys test real-world practice, not just the document.',
      ),
      miss(
        'The hospital simply needs more policies to cover the gaps',
        'Adding policies to a binder that is not being followed compounds the problem; the deficiency is implementation and monitoring, not insufficient paperwork.',
        'More unimplemented policy does not fix an implementation gap.',
      ),
    ],
    lesson:
      'Compliance is demonstrated in practice, not on paper. Surveyors and auditors verify that policies are implemented, staff are trained, and adherence is monitored with evidence — observations, interviews, records, and corrective tracking. A flawless binder with no monitoring is a classic gap: assuming a written policy proves compliance is exactly the trap regulators are trained to catch.',
    source,
    generated: true,
  },
  {
    id: 7620040,
    chapter: 'Regulatory and Compliance Floor',
    title: 'EMTALA and on-call coverage',
    prompt:
      'A specialist on the official ED call schedule refuses to come in for an unstable patient, and the hospital cannot otherwise provide the needed care. What is the EMTALA exposure?',
    correct:
      'Both the hospital and the on-call physician can face EMTALA liability; on-call physicians are obligated to respond to stabilize emergency conditions',
    wrong: [
      miss(
        'Only the hospital is liable; individual physicians are never subject to EMTALA',
        'On-call physicians are directly subject to EMTALA and can be individually penalized for failing to respond; liability is not the hospital\'s alone.',
        'EMTALA reaches the on-call physician, not just the institution.',
      ),
      miss(
        'No exposure, because being on call is voluntary and unenforceable',
        'Once a physician is on the official call list, EMTALA obligates a response for emergency stabilization; it is not an optional courtesy.',
        'Listed call duty is an EMTALA obligation, not a voluntary favor.',
      ),
      miss(
        'Exposure exists only if the patient is uninsured',
        'EMTALA obligations and penalties do not depend on insurance status; the duty to respond and stabilize applies regardless of coverage.',
        'Insurance status is irrelevant to the on-call duty and its penalties.',
      ),
    ],
    lesson:
      'EMTALA extends to physicians who are on a hospital\'s official on-call list: they must respond within a reasonable time to help screen and stabilize emergency conditions. A refusal that leaves a patient unstable can expose both the hospital and the physician to civil monetary penalties, independent of the patient\'s insurance. Hospitals must maintain on-call coverage consistent with the services they offer.',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 6: CMS Value-Based Payment Programs
  // ===========================================================================
  {
    id: 7620041,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'HVBP four domains',
    prompt:
      'A board wants to know how Hospital Value-Based Purchasing (HVBP) scores hospitals. Currently, how are its quality domains weighted in the Total Performance Score?',
    correct:
      'Four domains — clinical outcomes, safety, person and community engagement (patient experience), and efficiency/cost reduction — each weighted equally at 25%',
    wrong: [
      miss(
        'A single domain: 30-day readmission rates, weighted at 100%',
        'Readmissions are the HRRP program, not HVBP; HVBP uses four equally weighted domains, none of which is solely readmissions.',
        'Readmissions belong to a different program; HVBP has four balanced domains.',
      ),
      miss(
        'Two domains: infection rates and patient experience, split 50/50',
        'HVBP has four domains, not two, and infection-only scoring describes the HAC program; experience is one quarter of HVBP, not half.',
        'Count the domains: HVBP balances four, not two.',
      ),
      miss(
        'Patient experience weighted at 75% with everything else at 25%',
        'Patient experience (person and community engagement) is one of four equally weighted 25% domains, not a dominant 75%; the domains are balanced.',
        'Experience is a quarter of the score, not three quarters.',
      ),
    ],
    lesson:
      'Hospital Value-Based Purchasing scores hospitals across four equally weighted domains (currently 25% each): clinical outcomes, safety, person and community engagement (which includes HCAHPS patient experience), and efficiency and cost reduction. The Total Performance Score redistributes a withheld pool, so a hospital can net gain or lose. Mixing this up with readmissions (HRRP) or infections-only (HAC) is a common error.',
    source,
    generated: true,
  },
  {
    id: 7620042,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'HVBP withhold is budget neutral',
    prompt:
      'An administrator claims HVBP "only takes money away." How does HVBP actually move dollars, and what does that mean for a high performer?',
    correct:
      'CMS withholds a percentage of base DRG payments into a pool and redistributes it by performance, so a high performer can earn back more than was withheld — a net gain',
    wrong: [
      miss(
        'CMS keeps the withheld funds permanently regardless of performance',
        'The withhold is redistributed back to hospitals based on performance, not retained by CMS; high performers can recover more than was withheld.',
        'The pool is paid back out by performance, not pocketed by CMS.',
      ),
      miss(
        'Every hospital automatically loses exactly the withhold amount',
        'The program is redistributive: poor performers net-lose, but strong performers net-gain, so the effect is not a uniform loss for all.',
        'Outcomes vary by performance; it is not a flat loss for everyone.',
      ),
      miss(
        'HVBP adds new money on top of base payments with no withhold at all',
        'HVBP funds its incentives by first withholding from base DRG payments (a 2% withhold); it is not fresh money layered on top.',
        'The incentive pool comes from a withhold, not from new appropriations.',
      ),
    ],
    lesson:
      'HVBP is budget-neutral and redistributive: CMS withholds a set percentage (2%) of participating hospitals\' base operating DRG payments into a pool and pays it back out according to each hospital\'s Total Performance Score. Low performers net-lose; high performers can earn back more than was withheld, a net positive. Calling it "only a penalty" misreads the design and undersells the upside of strong performance.',
    source,
    generated: true,
  },
  {
    id: 7620043,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'Excess Readmission Ratio',
    prompt:
      'Under HRRP, a hospital\'s heart-failure Excess Readmission Ratio (ERR) is 1.10. What does that mean?',
    correct:
      'Its predicted 30-day readmissions exceed the expected rate for similar hospitals by about 10% — worse than the peer benchmark for that condition',
    wrong: [
      miss(
        'It readmitted 110% of its heart-failure patients',
        'A readmission rate cannot exceed 100% of patients; the ERR is a ratio of predicted to expected readmission rates, not a percentage of patients readmitted.',
        'ERR compares rates to expectation; it is not a share of patients.',
      ),
      miss(
        'Its readmissions are 10% below the expected benchmark, which is good',
        'An ERR above 1.0 means worse than expected (more readmissions than predicted); only below 1.0 is better than the benchmark.',
        'Above 1.0 is the unfavorable side of the ratio.',
      ),
      miss(
        'It will receive a 10% bonus payment for that condition',
        'HRRP has no bonuses; it only penalizes, and an ERR above 1.0 contributes to a penalty, not a reward.',
        'HRRP is penalty-only; there is no readmission bonus.',
      ),
    ],
    lesson:
      'The Excess Readmission Ratio is a hospital\'s predicted 30-day readmission rate divided by the expected rate for similar hospitals, risk-adjusted and condition-specific. An ERR above 1.0 means more readmissions than expected (1.10 = about 10% worse) and feeds the HRRP penalty calculation; below 1.0 is better than peers. HRRP is penalty-only (no bonuses), capped at a 3% reduction of base operating DRG payments.',
    source,
    generated: true,
  },
  {
    id: 7620044,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'Planned readmissions excluded',
    prompt:
      'A heart-failure patient is discharged, then returns 12 days later for a scheduled, staged coronary procedure that was planned at discharge. How does HRRP treat this return?',
    correct:
      'It is generally excluded as a planned readmission; HRRP targets unplanned readmissions, not scheduled follow-up care',
    wrong: [
      miss(
        'It always counts against the hospital because it is within 30 days',
        'Being within 30 days is necessary but not sufficient; HRRP measures unplanned readmissions, and planned, scheduled procedures are excluded by the algorithm.',
        'The 30-day window alone does not make a planned return count.',
      ),
      miss(
        'It counts double because it follows a tracked condition',
        'There is no double-counting; a planned, staged procedure is excluded, not weighted more heavily, regardless of the index condition.',
        'Planned care is removed, not amplified.',
      ),
      miss(
        'It counts only if the patient changes hospitals for the procedure',
        'Whether the patient returns to the same or a different applicable hospital does not convert a planned procedure into a counted unplanned readmission.',
        'The exclusion is about planned versus unplanned, not which hospital.',
      ),
    ],
    lesson:
      'HRRP measures 30-day unplanned readmissions for its tracked conditions. The measure logic uses a planned-readmission algorithm to exclude scheduled, anticipated returns such as staged procedures and certain elective admissions, so they do not penalize the hospital. The trap is assuming any return within 30 days counts; planned follow-up care is specifically carved out.',
    source,
    generated: true,
  },
  {
    id: 7620045,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'HRRP peer grouping',
    prompt:
      'Two hospitals have identical raw readmission rates, but one serves far more dual-eligible (Medicare-Medicaid) patients and receives a smaller HRRP penalty. What policy explains this?',
    correct:
      'HRRP stratifies hospitals into peer groups by share of dual-eligible patients and compares each hospital to similar peers, mitigating penalties tied to socioeconomic burden',
    wrong: [
      miss(
        'CMS exempts any hospital with dual-eligible patients from HRRP entirely',
        'There is no blanket exemption; HRRP adjusts comparisons via peer grouping by dual-eligible share, but the program still applies.',
        'It is peer comparison, not exemption.',
      ),
      miss(
        'The hospital with more dual-eligibles is paid a bonus for serving them',
        'HRRP has no bonuses; the peer-grouping policy reduces unfair penalties, it does not pay extra for the population served.',
        'The mechanism is fairer comparison, not a bonus.',
      ),
      miss(
        'Dual-eligible status changes the six tracked conditions for that hospital',
        'The tracked conditions are the same for all hospitals; dual-eligible share affects peer grouping for comparison, not which conditions are measured.',
        'Peer grouping changes the comparison set, not the measured conditions.',
      ),
    ],
    lesson:
      'To avoid disproportionately penalizing safety-net hospitals, HRRP uses stratified peer grouping: hospitals are sorted into groups by their proportion of dual-eligible (Medicare-Medicaid) beneficiaries and compared against similar peers when computing penalties. This adjusts for socioeconomic burden without exempting anyone or paying bonuses, and without changing the six tracked conditions.',
    source,
    generated: true,
  },
  {
    id: 7620046,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'Stacking the three programs',
    prompt:
      'A CFO asks the worst-case Medicare payment exposure from the three major value-based programs combined. Which statement correctly characterizes the stacking?',
    correct:
      'They are separate programs that can apply simultaneously: HRRP up to 3%, HAC Reduction a flat 1%, and HVBP a 2% withhold redistributed by performance',
    wrong: [
      miss(
        'Only one of the three can apply to a hospital in a given year',
        'The programs are independent and can hit the same hospital in the same year; they are not mutually exclusive.',
        'These programs stack; they do not take turns.',
      ),
      miss(
        'All three share a single combined 3% cap on total Medicare payments',
        'There is no shared 3% cap across all three; each has its own mechanism and they apply on top of one another, so combined exposure exceeds any single program\'s cap.',
        'Each program has its own stake; they are not pooled under one cap.',
      ),
      miss(
        'HAC and HRRP are the same program with two names',
        'HAC (infections/PSI-90, flat 1% worst quartile) and HRRP (readmissions, up to 3%) are distinct programs with different measures, penalties, and logic.',
        'Infections and readmissions are governed by separate programs.',
      ),
    ],
    lesson:
      'The three big inpatient value-based programs operate independently and can apply to the same hospital concurrently: HRRP penalizes excess 30-day readmissions (up to 3% of base DRG payments), the HAC Reduction Program imposes a flat 1% on the worst-performing quartile, and HVBP withholds 2% and redistributes it by performance. Combined, a poor performer faces meaningful stacked exposure; there is no single shared cap.',
    source,
    generated: true,
  },
  {
    id: 7620047,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'Experience down while throughput up',
    prompt:
      'Throughput improved (shorter stays, faster discharges) but HCAHPS scores fell, and the board is confused. What is the most useful administrative explanation and action?',
    correct:
      'Faster flow can hurt experience if communication and discharge readiness slip; the action is to protect communication, responsiveness, and discharge information while sustaining throughput',
    wrong: [
      miss(
        'HCAHPS and throughput are unrelated, so the drop must be a survey error',
        'They are related: pushing speed without preserving communication and readiness commonly lowers experience scores; assuming survey error ignores a real tradeoff.',
        'Speed and experience interact; do not dismiss the drop as noise.',
      ),
      miss(
        'Ignore HCAHPS because throughput is the only thing that affects payment',
        'HCAHPS carries real reimbursement weight within HVBP\'s person-and-community-engagement domain; dismissing it ignores money and a quality signal.',
        'Experience feeds HVBP payment; it is not free to ignore.',
      ),
      miss(
        'Lengthen every stay again to restore the experience scores',
        'Reversing throughput gains overcorrects and harms flow and cost; the fix is preserving communication during faster care, not slowing everyone down.',
        'The answer is better communication at speed, not abandoning throughput.',
      ),
    ],
    lesson:
      'Throughput and experience can move in opposite directions when speed comes at the cost of communication, responsiveness, and clear discharge information — the very things HCAHPS measures. Because HCAHPS sits inside HVBP and affects payment, the right move is to protect those experience drivers while keeping flow gains, not to choose one over the other or dismiss the data.',
    source,
    generated: true,
  },
  // ===========================================================================
  // Chapter 7: People, Service, and Leadership Communication
  // ===========================================================================
  {
    id: 7620048,
    chapter: 'People, Service, and Leadership Communication',
    title: 'Span of control overload',
    prompt:
      'A nurse manager directly supervises 70 staff across three shifts and quality is slipping. An administrator frames this as the manager "not being organized enough." Why is that framing wrong?',
    correct:
      'A span of control of 70 across three shifts is structurally unmanageable; the issue is organizational design (too-wide span), not the individual\'s effort',
    wrong: [
      miss(
        'The framing is correct; any competent manager can supervise 70 people well',
        'Span of control has practical limits, especially across shifts; blaming the individual for a structurally excessive span misdiagnoses a design problem.',
        'There is a real ceiling on how many reports one manager can lead well.',
      ),
      miss(
        'The solution is to send the manager to a time-management course',
        'Training cannot overcome a structurally excessive span; the fix is redesigning the structure (assistant managers, charge roles), not personal productivity tips.',
        'A design problem is not solved by individual time-management training.',
      ),
      miss(
        'The manager should simply work longer hours to cover the gap',
        'More hours from one overstretched person is unsustainable and unsafe; the answer is narrowing the span, not extracting more from the individual.',
        'Adding hours to an overloaded role is the failure pattern, not the fix.',
      ),
    ],
    lesson:
      'Span of control is the number of direct reports a leader can effectively supervise. A span of 70 across three shifts exceeds reasonable limits, especially in a 24/7 clinical setting, and predictably degrades quality and engagement. Framing structural overload as a personal failing is a classic antipattern; the fix is design change — assistant managers, charge nurses, or a flatter, better-bounded structure.',
    source,
    generated: true,
  },
  {
    id: 7620049,
    chapter: 'People, Service, and Leadership Communication',
    title: 'Change management adoption',
    prompt:
      'A hospital rolls out a new EHR documentation workflow by sending one all-staff email the night before go-live. Adoption is chaotic. Which change-management principle was most clearly violated?',
    correct:
      'Successful change requires engagement, training, and a phased plan with feedback — not a one-way announcement immediately before go-live',
    wrong: [
      miss(
        'Change always fails unless every employee personally approves it first',
        'Unanimous approval is neither required nor realistic; what was missing was engagement, preparation, and training, not a veto for everyone.',
        'The gap is preparation and involvement, not universal sign-off.',
      ),
      miss(
        'The only fix is to make the change mandatory with disciplinary threats',
        'Coercion without preparation worsens resistance and errors; effective change management builds understanding and capability, not fear.',
        'Threats do not substitute for training and engagement.',
      ),
      miss(
        'A single email is sufficient; the staff simply lacked motivation',
        'Blaming staff motivation deflects from a failed rollout; a last-minute one-way email provides no training, support, or feedback loop, guaranteeing chaos.',
        'The rollout method failed before motivation ever entered the picture.',
      ),
    ],
    lesson:
      'Change management treats adoption as something you design for: communicate the why early, involve affected staff, train and support people, phase the rollout, and create feedback loops to fix problems fast. A single announcement the night before go-live skips all of this, so resistance and errors are predictable. The failure is the process, not the people\'s motivation.',
    source,
    generated: true,
  },
  {
    id: 7620050,
    chapter: 'People, Service, and Leadership Communication',
    title: 'Board brief turns data into a decision',
    prompt:
      'An administrator must brief the board on rising ED boarding. Which structure makes the strongest executive brief?',
    correct:
      'State the situation and impact, name the root driver, present a clear recommendation with owner and measurable target, and the resources or decision needed',
    wrong: [
      miss(
        'Present every raw data table from the past year and let the board interpret it',
        'Dumping raw data without synthesis forces the board to do the analysis and obscures the decision; an executive brief distills data into a recommendation.',
        'The board needs a decision frame, not an unprocessed data dump.',
      ),
      miss(
        'Describe the problem in detail but omit any recommendation to stay neutral',
        'Withholding a recommendation abdicates the administrator\'s role; the board relies on leadership to propose a defensible course, not just narrate the problem.',
        'Neutral problem-description without a recommendation is an abdication, not balance.',
      ),
      miss(
        'Reassure the board that the problem will resolve itself without action',
        'False reassurance erodes credibility and delays needed decisions; a strong brief names the driver and the action, not a hope that it self-corrects.',
        'Boards need an honest driver and plan, not optimism without a basis.',
      ),
    ],
    lesson:
      'An effective board or executive brief turns operations data into a decision: situation and impact, the root driver, a specific recommendation with a named owner and a measurable target, and the resource or decision being requested. Raw data dumps, deliberate neutrality, and false reassurance all fail because they leave the board unable to act. Leadership means proposing the defensible next move.',
    source,
    generated: true,
  },
  {
    id: 7620051,
    chapter: 'People, Service, and Leadership Communication',
    title: 'Communicating during a leak',
    prompt:
      'A draft restructuring plan leaks to staff before leadership is ready, and rumors are spreading. What is the strongest leadership response?',
    correct:
      'Communicate promptly and honestly with what is known and not yet decided, commit to an update cadence, and correct misinformation directly',
    wrong: [
      miss(
        'Stay silent until every detail is finalized, to avoid saying anything premature',
        'Silence during a leak cedes the narrative to rumor; honest acknowledgment of what is known and undecided beats a vacuum that fear fills.',
        'In a leak, silence amplifies rumor rather than controlling it.',
      ),
      miss(
        'Deny the document exists to calm people down',
        'Denying a real document destroys trust the moment it is exposed and makes every future message suspect; honesty is the only durable footing.',
        'A provable denial is the fastest way to lose all credibility.',
      ),
      miss(
        'Launch an investigation into who leaked it before addressing staff concerns',
        'Hunting the leaker first signals the wrong priorities and leaves anxious staff uninformed; address the substance and cadence first, sources later if at all.',
        'People\'s questions come before a leak investigation.',
      ),
    ],
    lesson:
      'When sensitive information leaks, the worst options are silence and denial — both surrender the narrative and corrode trust. The strongest response is prompt, honest communication: share what is known, name what is not yet decided, commit to a clear update cadence, and correct misinformation directly. Leading the conversation with candor, not chasing the leaker, is what stabilizes a team.',
    source,
    generated: true,
  },
  {
    id: 7620052,
    chapter: 'People, Service, and Leadership Communication',
    title: 'Burnout as a system signal',
    prompt:
      'Exit interviews on one unit repeatedly cite chronic short-staffing, mandatory overtime, and no input into schedules. Leadership plans to respond with a resilience and mindfulness workshop. Why is this insufficient?',
    correct:
      'The drivers named are structural (staffing, workload, control); resilience training treats burnout as a personal deficit and leaves the real causes untouched',
    wrong: [
      miss(
        'It is sufficient; burnout is purely an individual coping problem',
        'When staff name staffing, overtime, and lack of control, the causes are organizational; framing burnout as individual coping ignores the evidence in front of leadership.',
        'The exit interviews point to system causes, not a coping deficit.',
      ),
      miss(
        'It is insufficient only because the workshop should be made mandatory',
        'Mandating the workshop does not fix staffing or workload; the deficiency is addressing structural drivers, not attendance.',
        'Compelling attendance does not touch the structural causes.',
      ),
      miss(
        'It is insufficient because the unit should simply be closed',
        'Closing the unit is a drastic non-sequitur; the issue is fixing staffing, workload, and schedule control, not eliminating the service.',
        'The fix is redesigning the work, not shutting the unit down.',
      ),
    ],
    lesson:
      'Burnout driven by chronic understaffing, excessive workload, and lack of control over schedules is a systems problem, not a personal-resilience deficit. Offering only mindfulness or resilience training signals that staff should better tolerate broken conditions, which deepens disengagement. The credible response addresses the named structural drivers — staffing, workload distribution, and giving staff a voice in scheduling — and uses well-being support as a complement, not a substitute.',
    source,
    generated: true,
  },
])
