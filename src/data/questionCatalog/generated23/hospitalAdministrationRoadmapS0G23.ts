import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const hospitalAdministrationRoadmapS0G23: Question[] = [
  // Chapter: Hospital System Map (2 new -> reaches 8)
  makeSimpleQuestion(
    9500000,
    'Career Skills',
    'Hospital System Map',
    "Credentialing authority",
    'A surgeon was found to be operating outside the privileges granted at the last review, and the CEO wants to know who actually owns the decision to grant, restrict, or revoke that surgeon\'s clinical privileges. Which body holds that authority?',
    'The medical staff, through its credentialing and peer-review process, recommends privileges and the governing board grants or revokes them; administration supports the process but does not own the clinical decision',
    [
      ['The CEO can revoke clinical privileges directly because the CEO runs the hospital', 'Administrative authority covers operations and employment, not the clinical competency judgment that medical staff bylaws assign to peer review and the board. A CEO who unilaterally pulls privileges invites a due-process challenge.', 'Route the concern through the medical staff peer-review process and let the board act on its recommendation.'],
      ['The state medical board, since it issues the physician\'s license', 'The state board controls licensure to practice in the state, not the specific privileges a given hospital grants. A licensed physician can still be denied privileges at a particular facility.', 'Separate licensure (state board) from privileging (hospital medical staff and governing board).'],
      ['The department manager, because they supervise the surgical unit\'s daily work', 'Operational supervision is not the same as clinical credentialing authority. A manager schedules and runs the unit but cannot adjudicate clinical competency or privileges.', 'Escalate to the medical staff credentialing committee, which owns the privileging recommendation.'],
    ],
    'Clinical privileging follows a defined chain: the medical staff evaluates competency through peer review and credentialing and recommends privileges, and the governing board holds final legal authority to grant or revoke them. Administration enables the process but the clinical judgment and final action sit with medical staff and the board, which is why a one-person decision by the C-suite is both out of bounds and legally fragile.',
    'Floe generated',
    true,
    'Ask which body the medical staff bylaws assign the clinical-competency judgment to, and which body has the ultimate legal authority to act on it.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9500001,
    'Career Skills',
    'Hospital System Map',
    "Physician advisor role",
    'Case management and a treating physician disagree about whether an admitted patient meets inpatient status criteria, and the disagreement is stalling the bed. Which role exists specifically to bridge clinical judgment and status/utilization rules in this situation?',
    'The physician advisor, who reviews the case against status criteria with the attending and helps resolve inpatient-versus-observation determinations',
    [
      ['The chief financial officer, because patient status drives reimbursement', 'The CFO cares about the revenue impact but is not the role designed to discuss clinical criteria physician-to-physician. Sending a finance leader to debate medical necessity misframes the conversation.', 'Engage the physician advisor, whose job is exactly this clinical-plus-rules bridge.'],
      ['The bed-management coordinator, since they assign the bed', 'Bed management executes placement once status is decided; it does not have the clinical authority or the utilization-review mandate to settle a status dispute with the attending.', 'Have the physician advisor resolve status first, then let bed management place the patient.'],
      ['The compliance officer, because the rule is regulatory', 'Compliance monitors adherence and investigates violations but does not perform real-time, case-level status determinations alongside the treating physician.', 'Use the physician advisor for the case-level determination; involve compliance only if a pattern of improper status emerges.'],
    ],
    'The physician advisor is a clinician positioned inside utilization review to translate between bedside clinical judgment and the status/medical-necessity rules that govern inpatient versus observation. They speak the attending\'s language while applying the criteria, which is why they, not finance, bed control, or compliance, are the right first call when a status disagreement stalls a case.',
    'Floe generated',
    true,
    'Identify the role built to hold a peer-to-peer clinical conversation while applying utilization and status criteria.',
    { challengeRating: 5 },
  ),

  // Chapter: Patient Flow and Capacity (1 new -> reaches 8)
  makeSimpleQuestion(
    9500002,
    'Career Skills',
    'Patient Flow and Capacity',
    "Observed-to-expected length of stay",
    'A service line reports an observed-to-expected (O/E) length-of-stay ratio of 1.30 against its case-mix-adjusted expected stay. The medical director argues this just proves the patients are sicker than average. How should an administrator read the 1.30?',
    'Patients are staying about 30 percent longer than the case-mix-adjusted benchmark predicts, so the ratio already accounts for severity and points to an excess-stay opportunity to investigate',
    [
      ['It means the patients are 30 percent sicker than average, so no action is needed', 'The expected denominator is already risk- and case-mix-adjusted, so acuity is baked into the benchmark. A ratio above 1.0 is excess stay beyond what severity predicts, not evidence of severity.', 'Treat O/E above 1.0 as a flow signal: look at discharge timing, consults, and barriers, not just acuity.'],
      ['It means the hospital is discharging patients too quickly and risking readmissions', 'A ratio above 1.0 means stays are longer than expected, not shorter. This reverses the direction of the metric.', 'Remember O/E below 1.0 is shorter than expected; 1.30 is longer than expected.'],
      ['It means expected length of stay was set too low and should be raised to match', 'Resetting the benchmark to the hospital\'s own performance hides the gap rather than explaining it. The expected value is a national case-mix benchmark, not a local target to inflate.', 'Keep the benchmark fixed and investigate the operational drivers of the excess days.'],
    ],
    'Observed-to-expected length of stay divides actual stay by a case-mix- and severity-adjusted expected stay (often GMLOS-based), so the comparison is already risk-adjusted. A value above 1.0 means patients stay longer than the benchmark predicts even after accounting for how sick they are, which flags excess days worth examining; a value at or below 1.0 means stays meet or beat the benchmark. Reading a high ratio as mere acuity ignores that acuity is already in the denominator.',
    'Floe generated',
    true,
    'Ask what the "expected" denominator already adjusts for before deciding whether a high ratio is just sicker patients.',
    { challengeRating: 6 },
  ),

  // Chapter: Finance and Resource Stewardship (2 new -> reaches 8)
  makeSimpleQuestion(
    9500003,
    'Career Skills',
    'Finance and Resource Stewardship',
    "Operating margin vs days cash on hand",
    'A board member sees that the hospital posted a thin positive operating margin last quarter and concludes the organization can comfortably absorb a six-week revenue disruption from a billing-system outage. What is the most accurate correction?',
    'Operating margin measures profitability on operations, not the ability to survive without cash inflow; the relevant survivability measure is days cash on hand, which estimates how long the hospital can cover expenses from unrestricted cash',
    [
      ['A positive operating margin guarantees the hospital can survive the disruption, so no further check is needed', 'Margin is an earnings ratio over a period, not a measure of how much cash is on hand. A hospital can be marginally profitable yet have very few days of cash and be unable to make payroll during an outage.', 'Pull days cash on hand to judge survivability; margin alone does not answer the liquidity question.'],
      ['Days cash on hand and operating margin measure the same thing, so either confirms survivability', 'They measure different things: one is profitability, the other is liquidity. Two hospitals with identical margins can have very different cash cushions.', 'Treat profitability and liquidity as separate questions answered by separate metrics.'],
      ['The hospital should look at its case mix index to judge whether it can survive the outage', 'CMI describes the average complexity of patients and drives reimbursement weight; it says nothing about how many days of cash are available to weather a revenue interruption.', 'Use days cash on hand for survivability; CMI is about documentation and reimbursement, not liquidity.'],
    ],
    'Operating margin is profitability ((operating revenue minus operating expense) divided by operating revenue) over a period, while days cash on hand is a liquidity measure: unrestricted cash and investments divided by average daily operating expense (excluding depreciation). A hospital can be profitable yet illiquid, so survivability through a revenue interruption is answered by days cash on hand, not by margin. Confusing the two is a classic board-level error.',
    'Floe generated',
    true,
    'Separate "are we profitable" from "how long can we pay the bills with no new revenue" and match each to its own metric.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    9500004,
    'Career Skills',
    'Finance and Resource Stewardship',
    "Labor variance driver decomposition",
    'A unit\'s nursing salary expense ran $90,000 over budget. Patient days came in 8 percent above plan, the contracted hourly rate was unchanged, and worked hours per patient day matched the budgeted standard. What is the most defensible attribution of the variance?',
    'It is primarily a volume variance: the extra spend is explained by treating more patient days at the same rate and the same hours per patient day, so it is the expected cost of higher census, not inefficiency',
    [
      ['It is a rate variance from paying nurses more per hour than budgeted', 'The setup states the contracted hourly rate was unchanged, so there is no rate component. Calling it a rate problem invents a driver the facts rule out.', 'Check which input actually moved; here only volume changed, so the variance is a volume variance.'],
      ['It is an efficiency variance because the unit used too many hours per patient day', 'Worked hours per patient day matched the budgeted standard, so efficiency did not deteriorate. The extra hours are proportional to the extra patients, not waste.', 'Compare hours per patient day to standard; when it matches, efficiency is not the driver.'],
      ['It is unfavorable and the unit manager should be coached to cut overtime', 'Labeling a volume-driven variance as a management failure penalizes the manager for treating more patients at planned productivity. The fix, if any, is a flexible budget, not coaching.', 'Flex the budget to actual volume before judging the variance; the manager held rate and productivity to plan.'],
    ],
    'A labor variance decomposes into volume (more or fewer units of service), rate (price paid per hour), and efficiency (hours per unit, e.g., HPPD). When rate and hours per patient day both hold to plan and only patient days rose, the overspend is a volume variance and is largely expected; a flexible budget that scales to actual volume would show little true unfavorable variance. Naming the wrong driver leads to the wrong corrective action.',
    'Floe generated',
    true,
    'Hold each input against plan one at a time: which of volume, rate, and hours per patient day actually moved?',
    { challengeRating: 7 },
  ),

  // Chapter: Quality, Safety, and Compliance (1 new -> reaches 8)
  makeSimpleQuestion(
    9500005,
    'Career Skills',
    'Quality, Safety, and Compliance',
    "Reading the Standardized Infection Ratio",
    'The infection prevention report shows a CLABSI Standardized Infection Ratio (SIR) of 1.40 for the ICU. A unit director argues this is good news because it is above 1.0 and "higher is better, like a grade." How should an administrator interpret 1.40?',
    'An SIR above 1.0 means more infections were observed than predicted from the risk-adjusted national baseline, so 1.40 indicates about 40 percent more CLABSIs than expected and is a worse-than-expected, action-prompting result',
    [
      ['1.40 is good because higher numbers mean stronger infection control', 'The SIR is a ratio of observed to predicted infections, not a score where higher is better. Above 1.0 means worse than the benchmark, which is exactly backward from the director\'s reading.', 'Anchor on the definition: SIR above 1.0 is more infections than predicted, so 1.40 is a problem to act on.'],
      ['1.40 simply reflects that the ICU treats sicker patients, so it needs no response', 'The predicted denominator is already risk-adjusted for factors like device days and unit type, so acuity is accounted for. A value of 1.40 is excess infection beyond that adjustment.', 'Because risk adjustment is built in, treat 1.40 as a real signal and review line care, maintenance bundles, and device days.'],
      ['1.40 means 1.40 infections occurred this period, a small absolute number', 'The SIR is a relative ratio, not a raw count of infections. Reading it as an absolute number misstates what the metric reports.', 'Interpret the SIR as observed divided by predicted, then look up the actual observed count separately.'],
    ],
    'The Standardized Infection Ratio compares the number of healthcare-associated infections actually observed to the number predicted from a risk-adjusted national baseline: SIR equals observed divided by predicted. A value of 1.0 means as predicted, below 1.0 means fewer than predicted (better), and above 1.0 means more than predicted (worse). An SIR of 1.40 therefore signals roughly 40 percent more infections than expected after risk adjustment and warrants action, not celebration.',
    'Floe generated',
    true,
    'Recall that the SIR is observed divided by predicted, so decide which direction from 1.0 is the good direction before judging 1.40.',
    { challengeRating: 5 },
  ),
]
