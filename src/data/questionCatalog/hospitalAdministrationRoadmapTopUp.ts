import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe hospitalAdministrationRoadmap top-up'

export const hospitalAdministrationRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // -------------------------------------------------------------------------
  // Chapter 1: Hospital System Map and Governance
  // -------------------------------------------------------------------------
  {
    id: 7326000,
    chapter: 'Hospital System Map and Governance',
    title: 'Who governs credentialing',
    prompt:
      'A surgeon\'s privileges are up for renewal and a quality concern has been raised. In a typical hospital governance structure, which body holds the ultimate legal responsibility for approving medical staff appointments and privileges?',
    correct: 'The governing board, acting on recommendations from the organized medical staff',
    wrong: [
      miss(
        'The CEO alone, because they run the organization day to day',
        'The CEO leads operations but does not own credentialing liability; appointing and privileging physicians is a board fiduciary duty, informed by medical staff peer review.',
        'Ask which body the law holds accountable for physician quality, not which person is busiest day to day.',
      ),
      miss(
        'The state medical board that issued the license',
        'The state board licenses physicians to practice in the state, but it does not grant or renew privileges at a specific hospital; that is the facility\'s board acting on medical staff input.',
        'Separate the license to practice in a state from privileges to practice at one hospital.',
      ),
      miss(
        'The hospital\'s legal department, since liability is involved',
        'Legal advises on risk but holds no governance authority to appoint medical staff; the decision rests with the board on medical staff recommendation.',
        'Advisors inform the decision; the decision still belongs to the accountable governing body.',
      ),
    ],
    lesson:
      'In hospital governance, the governing board carries ultimate legal responsibility for the quality of care, including approving medical staff appointments and clinical privileges. It acts on recommendations from the organized medical staff (peer review and credentials committees). The CEO runs operations and legal advises, but neither owns the credentialing decision.',
    source,
    generated: true,
  },
  {
    id: 7326001,
    chapter: 'Hospital System Map and Governance',
    title: 'Physician advisor role',
    prompt:
      'A hospital is fighting frequent payer denials over whether patients should be inpatient or observation. Which role is specifically designed to bridge clinical judgment and the rules that govern patient status?',
    correct: 'The physician advisor, who reviews status decisions and supports utilization review',
    wrong: [
      miss(
        'The chief financial officer, since the dispute is about payment',
        'The CFO owns financial strategy but is not positioned to make case-level clinical status judgments; that bridge between medicine and payment rules is the physician advisor.',
        'Status decisions need a clinician who also knows the payment rules, not a finance executive.',
      ),
      miss(
        'The bedside nurse, who knows the patient best',
        'The bedside nurse provides essential care and observations but does not adjudicate inpatient-versus-observation status against payer and CMS criteria.',
        'Knowing the patient is not the same as adjudicating status against regulatory criteria.',
      ),
      miss(
        'The billing clerk, who submits the claims',
        'Billing staff process claims after the fact and cannot make or defend the clinical-status determination that drives the denial.',
        'Processing a claim downstream is not the same as making the upstream clinical-status call.',
      ),
    ],
    lesson:
      'The physician advisor is a clinician who specializes in the intersection of medical necessity, patient status, and payment rules. They review inpatient-versus-observation decisions, support utilization review, and help defend status determinations against denials. Finance, nursing, and billing each touch the problem but none owns this bridge role.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 2: Patient Flow, Capacity, and Throughput
  // -------------------------------------------------------------------------
  {
    id: 7326002,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'ALOS versus GMLOS',
    prompt:
      'A CFO asks why the hospital benchmarks length of stay against geometric mean length of stay (GMLOS) rather than the simple average (ALOS). What is the best technical reason?',
    correct: 'GMLOS dampens the effect of a few extreme outlier stays, giving a more stable benchmark',
    wrong: [
      miss(
        'GMLOS always produces a larger number, which makes the hospital look better',
        'GMLOS is typically lower than the arithmetic mean because it down-weights long outliers; it is chosen for statistical stability, not to flatter the hospital.',
        'Think about which measure outliers pull around the most, not which one reads higher.',
      ),
      miss(
        'GMLOS counts only Medicare patients while ALOS counts everyone',
        'Both measures can be computed on any population; the difference is the type of average (geometric vs. arithmetic), not which patients are included.',
        'The difference is the math used to average, not which patients are in the denominator.',
      ),
      miss(
        'GMLOS ignores discharge data and uses admission data only',
        'Both metrics are computed from completed stays (admission to discharge); GMLOS does not discard discharge information.',
        'Both metrics measure completed stays; the contrast is geometric versus arithmetic mean.',
      ),
    ],
    lesson:
      'ALOS is the arithmetic mean of stays and is easily skewed by a few very long admissions. GMLOS, the geometric mean, is far less sensitive to those outliers, which is why CMS uses it in DRG-based comparisons and why hospitals track observed-over-expected LOS against it. A ratio at or below 1.0 suggests stays are in line with case complexity.',
    source,
    generated: true,
  },
  {
    id: 7326003,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Staffed bed reality',
    prompt:
      'The bed board shows 12 open inpatient beds, yet the ED is boarding and the house supervisor refuses to assign patients to several of them. What concept explains the supervisor\'s decision?',
    correct: 'A physical bed is only true capacity when it is also staffed; unstaffed beds cannot safely accept patients',
    wrong: [
      miss(
        'The supervisor is hoarding beds to avoid work and should be overruled',
        'Refusing to fill unstaffed beds is a safety judgment, not avoidance; assigning patients to beds with no nurse creates an unsafe and unbillable situation.',
        'Before assuming bad faith, ask whether each open bed actually has a nurse assigned.',
      ),
      miss(
        'Open beds on the board are always immediately usable by definition',
        'The board often shows physically vacant beds regardless of staffing; counting them as usable capacity is exactly how boarding and overload happen.',
        'A bed board shows physical vacancy; usable capacity also requires staffing.',
      ),
      miss(
        'The beds must be left empty to keep occupancy statistics low',
        'No legitimate practice withholds needed beds to manipulate occupancy; the constraint here is staffing, not a statistical game.',
        'The constraint is nurses for the beds, not a metric the hospital is trying to suppress.',
      ),
    ],
    lesson:
      'Capacity is staffed capacity. A vacant, clean, physically available bed is not usable unless a nurse is assigned to cover it within safe ratios. Treating physical beds as real capacity is a classic flow error that produces unsafe assignments, boarding, and downstream PACU and ED gridlock.',
    source,
    generated: true,
  },
  {
    id: 7326004,
    chapter: 'Patient Flow, Capacity, and Throughput',
    title: 'Observation status meaning',
    prompt:
      'A family is upset that their mother\'s several days "in the hospital" did not count toward the Medicare requirement for skilled nursing facility coverage. What status most likely caused this?',
    correct: 'She was in observation (outpatient) status, which does not count toward the three-day inpatient qualifying stay',
    wrong: [
      miss(
        'She was a full inpatient, but the paperwork was filed late',
        'Inpatient days do count toward the SNF qualifying stay; the gap the family hit is the hallmark of observation/outpatient status, not a filing delay.',
        'If inpatient days counted, the SNF benefit would have qualified; this gap is the observation signature.',
      ),
      miss(
        'She was discharged too quickly to qualify for any benefit',
        'The issue is the type of status during the stay, not its length; even a multi-day observation stay does not count toward the inpatient requirement.',
        'Length did not disqualify her; outpatient status did.',
      ),
      miss(
        'Medicare never covers skilled nursing care after a hospital stay',
        'Medicare Part A does cover SNF care after a qualifying three-day inpatient stay; the problem is that observation days do not satisfy that three-day requirement.',
        'Medicare does cover SNF after a qualifying inpatient stay; the trap is that observation does not qualify.',
      ),
    ],
    lesson:
      'Observation is an outpatient status billed under Part B, even when the patient occupies a bed for days. Because Medicare\'s SNF benefit requires a three-day inpatient (Part A) qualifying stay, observation days do not count. This is why patient-status decisions, governed by the Two-Midnight Rule, carry real financial consequences for patients and families.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 3: Healthcare Finance and Resource Stewardship
  // -------------------------------------------------------------------------
  {
    id: 7326005,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'What case mix index measures',
    prompt:
      'Two hospitals report the same number of discharges, but Hospital A has a case mix index (CMI) of 1.8 and Hospital B has 1.1. What does this difference most directly indicate?',
    correct: 'Hospital A treats a more clinically complex, resource-intensive patient population on average',
    wrong: [
      miss(
        'Hospital A discharges patients faster than Hospital B',
        'CMI reflects the average DRG relative weight (complexity and resource intensity), not throughput speed; a higher CMI does not mean shorter stays.',
        'CMI is about how heavy the cases are, not how quickly patients leave.',
      ),
      miss(
        'Hospital A has better patient satisfaction scores',
        'CMI is a clinical-complexity and reimbursement metric derived from DRG weights; it says nothing about HCAHPS or patient experience.',
        'Satisfaction lives in HCAHPS; CMI measures case complexity from DRG weights.',
      ),
      miss(
        'Hospital A overcharges patients relative to Hospital B',
        'A higher CMI reflects sicker, more complex cases (and correspondingly higher legitimate reimbursement), not overbilling.',
        'Higher CMI means heavier cases and higher justified payment, not inflated charges.',
      ),
    ],
    lesson:
      'Case mix index is the average of the MS-DRG relative weights for a hospital\'s discharges. A baseline of 1.0 is the national average; higher values indicate more complex, resource-intensive patients and correspondingly higher Medicare/Medicaid reimbursement. Accurate documentation and coding directly drive CMI, which is why clinical documentation improvement programs matter financially.',
    source,
    generated: true,
  },
  {
    id: 7326006,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Days cash on hand',
    prompt:
      'A board member asks which single metric best answers "how long could we keep the doors open if revenue suddenly stopped?" Which financial metric is designed to answer exactly that?',
    correct: 'Days cash on hand',
    wrong: [
      miss(
        'Operating margin',
        'Operating margin shows whether core operations are profitable over a period, but it does not tell you how many days of expenses your cash reserves could cover if revenue stopped.',
        'Margin measures profitability of operations; the board asked about survivable runway from reserves.',
      ),
      miss(
        'Case mix index',
        'CMI measures clinical complexity of the patient population, not liquidity or how long reserves would last.',
        'CMI is a complexity metric, not a liquidity or survival-runway metric.',
      ),
      miss(
        'Payer mix',
        'Payer mix describes the proportion of revenue by payer (Medicare, Medicaid, commercial, self-pay); it does not measure cash reserves or operating runway.',
        'Payer mix is about who pays, not how many days of cash you hold.',
      ),
    ],
    lesson:
      'Days cash on hand divides available cash and short-term investments by average daily operating expenses (typically excluding depreciation). It estimates how many days the organization could operate with no new revenue, making it the key liquidity and resilience metric. Operating margin, by contrast, measures whether core operations are profitable, not survivability.',
    source,
    generated: true,
  },
  {
    id: 7326007,
    chapter: 'Healthcare Finance and Resource Stewardship',
    title: 'Hours per patient day',
    prompt:
      'A med-surg unit recorded 480 worked nursing-care hours over 24 hours with an average census of 40 patients. What is the unit\'s hours per patient day (HPPD), and what does it represent?',
    correct: '12 HPPD — the direct nursing-care hours delivered per patient over a 24-hour period',
    wrong: [
      miss(
        '0.083 HPPD, dividing patients by hours',
        'HPPD divides worked care hours by patient days, not patients by hours; inverting the ratio gives a meaningless fraction.',
        'Check the direction of the division: care hours on top, patient days on the bottom.',
      ),
      miss(
        '520 HPPD, adding hours and patients together',
        'HPPD is a ratio of hours to patient days, not a sum; adding the two quantities has no operational meaning.',
        'HPPD is a division of two quantities, not their sum.',
      ),
      miss(
        '12 HPPD, but it includes paid vacation and sick time',
        'The 12 is the correct quotient, but HPPD counts only hours actually worked in direct care; paid leave is excluded.',
        'The number is right but the definition is wrong: HPPD excludes paid-but-not-worked time.',
      ),
    ],
    lesson:
      'HPPD equals total worked direct-care nursing hours divided by patient days (480 / 40 = 12). It is a core staffing-productivity metric; higher-acuity units such as ICUs carry higher HPPD targets than med-surg. Critically, it counts only hours actually worked at the bedside, not paid vacation, sick, or education time.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 4: Quality, Patient Safety, and Accreditation
  // -------------------------------------------------------------------------
  {
    id: 7326008,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Sentinel event RCA timeline',
    prompt:
      'A wrong-site surgery occurs at a Joint Commission-accredited hospital. Within what timeframe is the organization expected to complete a thorough root cause analysis and action plan?',
    correct: 'Within 45 days of the event (with the process generally begun within 72 hours)',
    wrong: [
      miss(
        'Within 24 hours of the event',
        'Twenty-four hours is far too short for a thorough RCA; the Joint Commission expects the analysis to begin promptly (within about 72 hours) but be completed within 45 days.',
        'Distinguish when the analysis must start from when the full RCA must be finished.',
      ),
      miss(
        'Within 10 business days of the event',
        'Ten business days is not the Joint Commission standard; the expected window for a completed RCA and action plan is 45 calendar days.',
        'Recall the specific Joint Commission number for completing the RCA, not a generic short deadline.',
      ),
      miss(
        'Within 90 days of the event',
        'Ninety days exceeds the Joint Commission expectation; a thorough RCA and action plan are expected within 45 days.',
        'The standard window is shorter than a quarter; pin down the exact figure.',
      ),
    ],
    lesson:
      'A sentinel event is a patient safety event reaching a patient that causes death, permanent harm, or severe temporary harm. The Joint Commission expects the root cause analysis process to begin within about 72 hours and a thorough RCA plus action plan to be completed within 45 calendar days. Wrong-site surgery is a classic sentinel-event example.',
    source,
    generated: true,
  },
  {
    id: 7326009,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Reading a standardized infection ratio',
    prompt:
      'A hospital\'s CLABSI standardized infection ratio (SIR) for the year is 1.35. How should an administrator interpret this?',
    correct: 'The unit had 35% more central-line bloodstream infections than predicted given its patient mix and device use',
    wrong: [
      miss(
        '35% of central lines became infected this year',
        'The SIR is a ratio of observed to predicted infections, not an infection rate; it does not mean 35% of lines got infected.',
        'SIR compares observed to predicted counts; it is not the percentage of devices infected.',
      ),
      miss(
        'The hospital performed better than the national benchmark',
        'An SIR above 1.0 means more infections than predicted (worse than benchmark); only an SIR below 1.0 indicates better-than-expected performance.',
        'Decide which side of 1.0 means better, then place 1.35 on that scale.',
      ),
      miss(
        'There were exactly 1.35 infections on the unit',
        'The SIR is a normalized ratio adjusted for risk, not a raw count of infections; the actual number of infections is the numerator, not the SIR itself.',
        'The SIR is observed divided by predicted, not the raw observed count.',
      ),
    ],
    lesson:
      'The Standardized Infection Ratio divides observed infections by the number predicted from NHSN risk-adjustment models. An SIR of 1.0 means as expected; above 1.0 is worse than expected (1.35 = 35% more than predicted); below 1.0 is better. If the confidence interval includes 1.0, the difference is not statistically significant.',
    source,
    generated: true,
  },
  {
    id: 7326010,
    chapter: 'Quality, Patient Safety, and Accreditation',
    title: 'Just culture and reporting',
    prompt:
      'After implementing a nonpunitive ("just culture") reporting system, a hospital sees safety-event reports rise sharply in the first year. What is the most likely correct interpretation for leadership?',
    correct: 'Reporting increased because staff feel safe disclosing events, not because care got more dangerous',
    wrong: [
      miss(
        'Care quality has collapsed and the program should be rolled back',
        'A rise in reports under a new nonpunitive system reflects better surfacing of events, not a sudden decline in safety; rolling it back would re-hide the very data you need.',
        'Ask whether more events happened or whether more existing events are now being reported.',
      ),
      miss(
        'The increase proves staff are gaming the system for attention',
        'Just-culture frameworks distinguish honest error from reckless behavior; treating increased honest reporting as gaming destroys the trust the program depends on.',
        'More disclosure under psychological safety is the goal, not evidence of manipulation.',
      ),
      miss(
        'Leadership should set a cap on the number of reports allowed',
        'Capping reports suppresses the data that drives improvement and signals that disclosure is unwelcome, undoing the program\'s purpose.',
        'Limiting reports re-creates the silence the program was built to break.',
      ),
    ],
    lesson:
      'In a just culture, staff are not punished for honest errors or near-misses, which encourages disclosure. A first-year surge in reports typically means events that were always happening are finally being surfaced, giving leaders the data to fix systems. A falling report count, especially when staff say "nothing changes," is the warning sign, not a rising one.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 5: Regulatory and Compliance Floor
  // -------------------------------------------------------------------------
  {
    id: 7326011,
    chapter: 'Regulatory and Compliance Floor',
    title: 'EMTALA screening before payment',
    prompt:
      'A patient with chest pain arrives at a Medicare-participating ED and registration wants to verify insurance before anyone sees him. Under EMTALA, what is required?',
    correct: 'He must receive a medical screening exam to determine whether an emergency condition exists, and this cannot be delayed to ask about payment',
    wrong: [
      miss(
        'Registration may confirm insurance first, since uninsured patients can be referred elsewhere',
        'EMTALA forbids delaying the medical screening exam to inquire about payment or insurance; ability to pay cannot gate emergency screening or stabilization.',
        'EMTALA bars using payment questions to delay the screening exam.',
      ),
      miss(
        'He can be sent to a clinic because chest pain is not always an emergency',
        'EMTALA requires a screening exam to determine whether an emergency condition exists; the hospital cannot pre-judge and divert him without that exam.',
        'You cannot assume it is not an emergency; EMTALA requires the screen to find out.',
      ),
      miss(
        'EMTALA applies only to patients formally admitted as inpatients',
        'EMTALA applies to anyone who comes to a dedicated emergency department requesting evaluation or treatment, well before any admission decision.',
        'EMTALA attaches at arrival to the ED, not at admission.',
      ),
    ],
    lesson:
      'EMTALA requires any Medicare-participating hospital with an ED to provide a medical screening exam to anyone who comes seeking evaluation, and to stabilize an emergency medical condition, regardless of ability to pay. Examination and treatment cannot be delayed to ask about payment or insurance. If the hospital cannot stabilize, it must arrange an appropriate transfer.',
    source,
    generated: true,
  },
  {
    id: 7326012,
    chapter: 'Regulatory and Compliance Floor',
    title: 'EMTALA receiving-hospital duty',
    prompt:
      'A community hospital has a stroke patient who needs neurointerventional care it cannot provide. It calls a tertiary center that has the specialized capability and an open bed. Under EMTALA, what is the tertiary center\'s obligation?',
    correct: 'A hospital with the needed specialized capabilities and capacity may not refuse an appropriate transfer',
    wrong: [
      miss(
        'It may decline if the patient\'s insurance is out of network',
        'EMTALA\'s receiving-hospital duty does not turn on insurance; a hospital with the capability and capacity cannot refuse an appropriate transfer based on payer.',
        'The duty to accept does not depend on the patient\'s network or coverage.',
      ),
      miss(
        'It may decline because the patient did not originate in its own ED',
        'The whole point of the duty is to accept patients transferred from hospitals that lack the capability; origin elsewhere is exactly when it applies.',
        'The rule exists precisely for patients who started at another hospital.',
      ),
      miss(
        'It has no obligation until the patient physically arrives',
        'The obligation to accept the appropriate transfer arises at the request stage, given capability and capacity; it does not wait for arrival.',
        'The duty attaches at the transfer request, not on arrival.',
      ),
    ],
    lesson:
      'EMTALA includes a "reverse" or receiving-hospital duty: a facility with the specialized capabilities and the capacity to treat a patient may not refuse an appropriate transfer from a hospital that lacks those capabilities. This obligation is independent of the patient\'s insurance or where they first presented.',
    source,
    generated: true,
  },
  {
    id: 7326013,
    chapter: 'Regulatory and Compliance Floor',
    title: 'HIPAA breach notification deadline',
    prompt:
      'A hospital confirms a breach of unsecured protected health information affecting 1,200 patients. By when must it notify the affected individuals and the Secretary of HHS?',
    correct: 'Without unreasonable delay and no later than 60 days after discovery of the breach',
    wrong: [
      miss(
        'Within 30 days after discovery of the breach',
        'Thirty days is not the HIPAA Breach Notification deadline; the outer limit for notifying individuals and HHS for a large breach is 60 days from discovery.',
        'Recall the specific HIPAA outer deadline, which is longer than 30 days.',
      ),
      miss(
        'Within 90 days after discovery of the breach',
        'Ninety days exceeds the HIPAA limit; notification must occur without unreasonable delay and no later than 60 days after discovery.',
        'The HIPAA limit is shorter than a quarter; pin down the exact figure.',
      ),
      miss(
        'Only at the end of the calendar year, in the annual summary log',
        'The annual summary log applies to small breaches (under 500 individuals); a breach of 1,200 requires notice to individuals and HHS within 60 days, not at year-end.',
        'Year-end logging is for small breaches; large breaches trigger the 60-day clock.',
      ),
    ],
    lesson:
      'Under the HIPAA Breach Notification Rule, covered entities must notify affected individuals without unreasonable delay and no later than 60 days after discovering a breach of unsecured PHI. For breaches affecting 500 or more individuals, HHS must also be notified within that same 60-day window (small breaches may be logged and reported annually instead).',
    source,
    generated: true,
  },
  {
    id: 7326014,
    chapter: 'Regulatory and Compliance Floor',
    title: 'HIPAA media notification threshold',
    prompt:
      'In the same breach, the compliance officer must decide whether prominent media outlets must be notified. What specifically triggers the HIPAA media-notification requirement?',
    correct: 'A breach affecting 500 or more residents of a single state or jurisdiction',
    wrong: [
      miss(
        'Any breach affecting more than 100 patients nationwide',
        'One hundred is not the HIPAA media threshold; media notice is triggered by 500 or more residents of one state or jurisdiction.',
        'The media trigger is a specific count tied to one state, not 100 nationwide.',
      ),
      miss(
        'Any breach involving electronic records, regardless of count',
        'The media requirement is count- and jurisdiction-based, not format-based; whether records are electronic or paper does not by itself trigger media notice.',
        'It is the number of affected state residents, not the record format, that triggers media notice.',
      ),
      miss(
        'Every breach of 500 or more individuals, even if spread across many states',
        'The 500 threshold for media notice applies per state or jurisdiction; 800 split across two states with no single state hitting 500 does not trigger media notice.',
        'The 500 count must be reached within one state, not summed across all states.',
      ),
    ],
    lesson:
      'HIPAA requires notifying prominent media outlets serving a state or jurisdiction when a breach affects 500 or more residents of that single state or jurisdiction. The count is by place of residence and applies per state, so 800 individuals spread across two states (with neither reaching 500) does not trigger media notice. The deadline mirrors the 60-day individual-notice rule.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 6: CMS Value-Based Payment Programs
  // -------------------------------------------------------------------------
  {
    id: 7326015,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'HRRP penalty ceiling',
    prompt:
      'A hospital underperforms on 30-day readmissions for heart failure and pneumonia. Under the CMS Hospital Readmissions Reduction Program (HRRP), what is the maximum payment reduction it can face?',
    correct: 'Up to a 3% reduction on base Medicare inpatient (DRG) payments',
    wrong: [
      miss(
        'Up to a 1% reduction, the same as the HAC Reduction Program',
        'One percent is the HAC Reduction Program penalty; HRRP\'s maximum penalty is higher, capped at 3% of base operating DRG payments.',
        'Do not conflate the infection program (1%) with the readmissions program ceiling.',
      ),
      miss(
        'Up to a 2% reduction, equal to the HVBP withhold',
        'Two percent is the Hospital Value-Based Purchasing withhold pool, not the HRRP cap; HRRP can reduce payments by up to 3%.',
        'The 2% figure belongs to HVBP\'s withhold, not the HRRP ceiling.',
      ),
      miss(
        'Up to a 10% reduction across all Medicare payments',
        'No HRRP penalty reaches 10%, and it applies to base operating DRG payments, not all Medicare payments; the cap is 3%.',
        'The HRRP ceiling is single digits and DRG-based, not a sweeping double-digit cut.',
      ),
    ],
    lesson:
      'HRRP penalizes hospitals with higher-than-expected 30-day unplanned readmissions across six tracked conditions (AMI, heart failure, pneumonia, COPD, CABG, and elective hip/knee replacement). The penalty is calculated from the Excess Readmission Ratio with peer grouping by dual-eligible share, and caps at a 3% reduction in base operating DRG payments.',
    source,
    generated: true,
  },
  {
    id: 7326016,
    chapter: 'CMS Value-Based Payment Programs',
    title: 'Which program owns infections',
    prompt:
      'A hospital lands in the worst-performing quartile on CLABSI, CAUTI, and the PSI-90 safety composite and takes a 1% Medicare payment cut. Which CMS program is this?',
    correct: 'The Hospital-Acquired Condition (HAC) Reduction Program',
    wrong: [
      miss(
        'The Hospital Readmissions Reduction Program (HRRP)',
        'HRRP penalizes 30-day readmissions for specific conditions, not hospital-acquired infections or the PSI-90 composite; the infection/safety penalty is the HAC Reduction Program.',
        'Readmissions and infections are different programs; match the measures to the right one.',
      ),
      miss(
        'Hospital Value-Based Purchasing (HVBP)',
        'HVBP redistributes a 2% withhold across multiple domains including patient experience and can be net-positive; the flat 1% worst-quartile infection penalty is HAC, not HVBP.',
        'HVBP is a redistributive withhold; the worst-quartile flat cut is the HAC program.',
      ),
      miss(
        'The Medicare Shared Savings Program (MSSP)',
        'MSSP is an accountable-care/shared-savings model for ACOs, not a per-hospital infection penalty; the program tied to HAIs and PSI-90 is the HAC Reduction Program.',
        'Shared savings is an ACO model, not the infection-penalty program.',
      ),
    ],
    lesson:
      'The HAC Reduction Program penalizes hospitals in the worst-performing quartile (above the 75th percentile of Total HAC Score) with a flat 1% Medicare payment reduction. Its measures are the PSI-90 patient-safety composite plus chart-abstracted healthcare-associated infections such as CLABSI, CAUTI, SSI, MRSA, and C. difficile, scored as an equally weighted average.',
    source,
    generated: true,
  },
  // -------------------------------------------------------------------------
  // Chapter 7: People, Service, and Leadership Communication
  // -------------------------------------------------------------------------
  {
    id: 7326017,
    chapter: 'People, Service, and Leadership Communication',
    title: 'HCAHPS weight in HVBP',
    prompt:
      'A board member dismisses HCAHPS patient-experience scores as "soft" and irrelevant to the bottom line. What is the strongest factual correction an administrator can give?',
    correct: 'Patient experience (HCAHPS) accounts for roughly one quarter of the Hospital Value-Based Purchasing score, directly affecting Medicare payment',
    wrong: [
      miss(
        'HCAHPS has no financial impact and is only used for public marketing',
        'HCAHPS is built into Hospital Value-Based Purchasing, where it carries about a quarter of the score; it directly affects reimbursement, not just marketing.',
        'Check whether HCAHPS feeds a payment program before calling it financially irrelevant.',
      ),
      miss(
        'HCAHPS determines 100% of the hospital\'s Medicare reimbursement',
        'HCAHPS is influential but is one of several HVBP domains (about a quarter of the score), not the entire basis of Medicare payment.',
        'It is a major slice of one program, not the whole of Medicare payment.',
      ),
      miss(
        'HCAHPS only matters for the Readmissions Reduction Program',
        'Readmissions are a separate program (HRRP); patient experience is weighted within HVBP, not HRRP.',
        'Map experience scores to HVBP, not to the readmissions program.',
      ),
    ],
    lesson:
      'HCAHPS measures the patient\'s experience (nurse and doctor communication, responsiveness, cleanliness and quietness, discharge information, care transition, and overall rating) using top-box scoring. About one quarter of a hospital\'s Hospital Value-Based Purchasing score comes from these dimensions, so experience scores carry real reimbursement weight, not just reputational value.',
    source,
    generated: true,
  },
])
