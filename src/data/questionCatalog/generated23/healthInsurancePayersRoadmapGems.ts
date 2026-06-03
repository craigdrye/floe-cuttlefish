import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const healthInsurancePayersRoadmapGems: Question[] = [
  // ===========================================================================
  // Payer Ecosystem and Plan Design
  // ===========================================================================
  makeSimpleQuestion(
    10040000,
    'Career Skills',
    'Payer Ecosystem and Plan Design',
    'The MLR rule is a floor, not a ceiling',
    'A regulator brags that the 80/85 percent medical loss ratio rule "caps how much money insurers can keep." An analyst objects: the rule says at least 80-85 cents of every premium dollar must go to claims and quality, with rebates owed if it does not. Strangely, this means the surest way for an insurer to grow its dollar profit is to let premiums climb. Why does a spending floor reward bigger premiums?',
    'Because the rule fixes a percentage, not a dollar amount, the insurer keeps the same slice (up to 15-20 percent) of a larger pie, so raising premiums grows the dollars it gets to retain without ever breaching the ratio',
    [
      ['Because the rule directly caps profit at 20 percent, so the insurer raises premiums to reach that legal maximum', 'There is no dollar cap at all; the 80/85 figure is a minimum on the share spent on care, not a ceiling on profit. The misconception flips the rule upside down, and it misses why higher premiums help: a fixed percentage of a bigger number is more money, with no cap to bump against.', 'Read MLR as a floor on the care share, which leaves the retained dollars free to scale with premium size.'],
      ['Because higher premiums automatically lower the medical loss ratio, letting the insurer dodge the spending requirement', 'Raising premiums alone would lower the ratio and trigger rebates, not avoid them; the trick works only because claims tend to rise alongside premiums, keeping the ratio intact while the retained dollars grow. The answer mistakes ratio manipulation for the actual incentive.', 'Note that the ratio is held roughly constant as both sides scale, so it is the dollar slice, not the ratio, that grows.'],
      ['Because rebates are paid out of the medical-spending portion, so a bigger premium leaves more cushion before rebates start', 'Rebates are owed precisely when the care share falls below the floor; they are not drawn from a cushion that premiums build up. The real mechanism is that a percentage applied to a larger base yields more retained dollars, independent of any rebate buffer.', 'Tie the incentive to the percentage-of-a-larger-base math, not to a rebate reserve.'],
    ],
    'The ACA medical loss ratio rule forces insurers to spend at least 80 percent (individual and small group) or 85 percent (large group) of premium on medical claims and quality improvement, refunding the shortfall. The deep point is that regulating a ratio rather than an absolute dollar amount leaves an insurer indifferent to efficiency: it keeps a fixed slice, so the path to more profit runs through a bigger premium base, not through holding costs down. A floor meant to protect members can quietly reward the very premium inflation it was never designed to stop.',
    'Floe generated',
    true,
    'Ask what stays constant under the rule (a percentage) and what is therefore free to grow (the dollars).',
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    10040001,
    'Career Skills',
    'Payer Ecosystem and Plan Design',
    'Who actually bears the claims risk',
    'A large employer offers health coverage with a national insurer\'s name on the ID card, processed through that insurer\'s claims system. A blockbuster year of high-cost claims arrives. The benefits manager assumes "the insurance company will eat the losses." But the contract is a self-funded ASO arrangement with stop-loss above $500,000 per member. Who is actually on the hook for an ordinary $90,000 hospital stay?',
    'The employer pays the $90,000 out of its own funds, because in a self-funded plan the carrier only administers the claims while the employer bears the claims risk up to the stop-loss attachment point',
    [
      ['The insurer pays it, because its name is on the card and it adjudicates the claim', 'Branding and adjudication are administrative services, not risk transfer; in an ASO setup the employer funds the claims and the carrier merely processes them. Confusing the logo with the risk-bearer is exactly the trap that makes self-funded plans look like fully insured ones.', 'Separate who administers the claim from who funds it; the card tells you the former, the funding model tells you the latter.'],
      ['The stop-loss carrier pays it, since stop-loss exists to cover large hospital claims', 'Stop-loss only attaches above the threshold (here $500,000), so a $90,000 claim is entirely the employer\'s. Treating stop-loss as first-dollar coverage misreads it as primary insurance rather than a catastrophic backstop.', 'Check the attachment point: stop-loss covers the excess above it, not claims beneath it.'],
      ['The risk is split between employer and insurer in proportion to the administrative fee', 'The administrative (ASO) fee buys processing, not shared risk; there is no proportional split of claims dollars. This invents a risk-sharing arrangement that the funding model does not contain.', 'Recognize the ASO fee as payment for services, leaving claims risk wholly with the employer below stop-loss.'],
    ],
    'The first question in payer work is which line of business you are in and who bears the financial risk. In a fully insured plan the carrier owns the claims risk; in a self-funded (ERISA) plan with an ASO arrangement, the employer funds claims and the carrier only administers, with stop-loss as a catastrophic backstop above an attachment point. The unsettling lesson is that the entity whose brand the member trusts may bear none of the risk, which also changes which rulebook governs (ERISA largely preempts state insurance law). Reading the card never tells you who pays.',
    'Floe generated',
    true,
    'Distinguish the party that processes the claim from the party whose money actually funds it.',
    { challengeRating: 6 },
  ),

  // ===========================================================================
  // Risk, Quality, and Value-Based Care
  // ===========================================================================
  makeSimpleQuestion(
    10040002,
    'Career Skills',
    'Risk, Quality, and Value-Based Care',
    'Risk adjustment is revenue, not billing',
    'A Medicare Advantage plan\'s coding team is told, "Every documented chronic condition is worth money." A new analyst assumes this means the plan bills CMS for each diagnosis the way a clinic bills for a procedure. But a stable, well-controlled case of diabetes generates no service claim that month, yet still raises the plan\'s payment. Where does that extra money come from, and why?',
    'From a higher monthly capitation payment: the documented condition raises the member\'s risk score (RAF), which CMS multiplies against the county benchmark to set a per-member-per-month payment, regardless of any service rendered that month',
    [
      ['From a per-diagnosis fee CMS pays each time a chronic condition is coded on a claim', 'CMS does not pay piecework per diagnosis; the diagnosis feeds an annual risk score that scales a prospective capitation payment. Treating it as fee-for-diagnosis confuses risk adjustment with claims billing and would imply no payment in a month with no claim, which is false.', 'See the diagnosis as an input to a prospective per-member payment, not as a billable line item.'],
      ['From the provider, who shares part of the service revenue back to the plan for documenting the condition', 'The money flows from CMS to the plan as capitation, not from the provider; providers do not rebate revenue for coding. This answer points the cash flow in the wrong direction entirely.', 'Trace the dollars to CMS capitation tied to the risk score, not to a provider kickback.'],
      ['From the member, whose premium rises when more conditions are documented', 'MA member premiums are not recalculated upward per documented diagnosis; the payment adjustment is CMS-to-plan and prospective. This conflates member cost-sharing with the plan\'s federal revenue stream.', 'Keep member premium separate from the risk-adjusted capitation CMS pays the plan.'],
    ],
    'Risk adjustment exists so plans are paid more for sicker members and are not punished for enrolling them. The key mental shift is that this is revenue from CMS or the state, set prospectively by a risk score times a benchmark, not money collected per service like a claim. That is why a documented-but-quiet chronic condition still pays, and why the discipline is fundamentally about accurate, supportable documentation rather than service volume. It also explains the sharp ethical edge: because diagnoses move dollars directly, coding without chart support is not a billing error but potential False Claims exposure under RADV audit.',
    'Floe generated',
    true,
    'Ask whether the payment is triggered by a service performed or by a condition documented and scored.',
    { challengeRating: 7 },
  ),

  makeSimpleQuestion(
    10040003,
    'Career Skills',
    'Risk, Quality, and Value-Based Care',
    'The line between gap closure and upcoding',
    'Two Medicare Advantage plans both raise revenue by capturing more diagnoses. Plan A sends clinicians to examine members, documents conditions found and treated in the chart, and codes them. Plan B mines old records and adds diagnosis codes that were dropped years ago, with no current encounter showing the condition was assessed. Both raise RAF scores identically this year. Under a RADV audit, why is only one of them safe?',
    'Because RADV validates each diagnosis against the medical record using MEAT criteria (monitored, evaluated, assessed, or treated at a current encounter); Plan A\'s codes are supported by a present encounter while Plan B\'s are not, so Plan B faces recoupment and False Claims exposure',
    [
      ['Both are safe, because if the diagnosis was ever validly documented in the past it remains codeable in any later year', 'Risk adjustment is reset annually and each year\'s code must reflect a current-year encounter; a years-old notation does not satisfy MEAT for this payment year. Assuming permanence of past diagnoses is exactly how plans drift into unsupported coding.', 'Require a current-year, documented encounter for each code, not a historical mention.'],
      ['Only Plan A is safe because it captured more total conditions, and audits penalize plans that capture too few', 'Audits do not reward volume of capture; they test whether each submitted code is supported. The safety difference is documentation support, not how many conditions each plan found.', 'Judge audit risk by per-code chart support, not by how many diagnoses were captured.'],
      ['Only Plan B is safe because chart review is a CMS-endorsed supplemental data source, while in-person exams are not', 'Chart review and in-home assessments are both permitted data sources; what matters is whether the underlying condition is supported by a qualifying encounter. The answer mistakes the data channel for the validity of the documentation behind it.', 'Focus on whether the condition is genuinely supported now, not on which permitted channel surfaced it.'],
    ],
    'Coding accuracy and coding intensity look identical in the RAF score but diverge completely under audit. RADV checks every diagnosis against the chart using MEAT criteria tied to a current encounter, so legitimately closing a documentation gap (a real, currently managed condition) is rewarded while resurrecting unsupported codes is recoupable and can trigger False Claims liability. The deeper tension is that the same revenue lever rewards good care documentation and tempts fraud, and the only thing separating them is whether a clinician actually saw and addressed the condition this year. The score cannot tell the difference; the medical record can.',
    'Floe generated',
    true,
    'Ask whether each code is backed by a current, documented encounter, not whether it raises the score.',
    { challengeRating: 7 },
  ),

  makeSimpleQuestion(
    10040004,
    'Career Skills',
    'Risk, Quality, and Value-Based Care',
    'When the measure is not the outcome',
    'A Medicare Advantage plan is one HEDIS point from a higher Star rating that would unlock a large quality-bonus payment. A director notes that CAHPS member-experience measures (how members rate getting care and customer service) have been weighted several times heavier than most clinical measures, and proposes pouring resources into a satisfaction phone campaign right before the survey window. A skeptic warns this could backfire on the very thing Stars are meant to reward. What is the deepest risk here?',
    'Optimizing the measured proxy (survey scores) can diverge from improving the underlying outcome (members actually getting good care), so the plan may lift the number while the real experience, and the trust the rating is meant to certify, stagnates or worsens',
    [
      ['There is no real risk: CAHPS is heavily weighted precisely so plans will invest in member experience, so a campaign is exactly the intended response', 'Heavy weighting signals what CMS values, but a survey-timing push targets the score rather than the lived experience it proxies; the intended response is better care, not better polling. Reading the weight as license to game the survey misses why the measure exists.', 'Aim at the experience the survey is trying to detect, not at the survey result itself.'],
      ['The main risk is that CAHPS scores move quickly, so a late campaign will overshoot and trigger a penalty for sudden improvement', 'Member-experience scores are in fact slow to move and there is no penalty for improving; the late-campaign concern is the opposite of overshoot. This inverts a known property of CAHPS and invents a nonexistent penalty.', 'Recall that experience measures lag and resist quick fixes, which is itself why a timing gimmick is unlikely to work.'],
      ['The risk is purely financial: spending on the campaign could exceed the bonus, making it a bad investment regardless of the measure', 'Cost-benefit matters, but it is a shallower concern than the core distortion; even a cheap campaign that lifts scores without improving care defeats the rating\'s purpose. Framing it as only a budgeting question ignores the proxy-versus-outcome problem.', 'Look past the spend to whether you are improving the outcome or merely its measurement.'],
    ],
    'Star Ratings convert quality into real dollars through the quality-bonus payment, and CMS has weighted member-experience (CAHPS) measures heavily to push plans toward what members actually feel. But any time a measure becomes a target, optimizing the measure can replace improving the outcome it stands for, a version of Goodhart\'s law. The lasting insight is that the smartest move is rarely to chase the proxy directly; experience measures are deliberately slow-moving so that only durable improvements in care register, and a plan that games the survey risks the trust the rating was designed to certify.',
    'Floe generated',
    true,
    'Ask whether the plan is improving what the measure detects, or just the measure.',
    { challengeRating: 6 },
  ),

  // ===========================================================================
  // Utilization Management and Medical Policy
  // ===========================================================================
  makeSimpleQuestion(
    10040005,
    'Career Skills',
    'Utilization Management and Medical Policy',
    'Medical necessity versus benefit exclusion',
    'A member requests coverage for a procedure. A reviewer must deny it but is choosing between two rationales: (a) "not medically necessary, criteria not met," or (b) "this service is excluded from the plan\'s benefits entirely." The clinician argues the choice is just wording. But the two denials send the member down different appeal roads with different rights. Why does picking the right rationale matter so much?',
    'Because a medical-necessity denial is a clinical judgment that grants the member rights like a peer-to-peer review and external clinical review, while a benefit exclusion is a contract question with no clinical override; mislabeling one as the other routes the appeal to the wrong process and can strip or invent rights',
    [
      ['It does not really matter, since the member has the same appeal window and steps either way', 'The window may overlap, but the substance differs: a medical-necessity denial triggers clinical-review rights (peer-to-peer, independent medical review) that a pure benefit exclusion does not. Treating them as identical sends the appeal down a path that cannot resolve the actual dispute.', 'Match the appeal mechanism to the kind of denial: clinical review for necessity, contract interpretation for exclusion.'],
      ['It matters only for internal record-keeping, because the member sees the same denial letter regardless', 'The member-facing notice must state the actual reason, and the reason determines which appeal track and rights apply; it is not a back-office label. Reducing it to record-keeping ignores that the rationale governs the member\'s real options.', 'See the stated rationale as the thing that controls the member\'s appeal rights, not a clerical note.'],
      ['Benefit exclusions are the stronger denial, so labeling a weak medical-necessity case as an exclusion makes it harder to overturn', 'Calling a clinically debatable service an "exclusion" when it is actually covered-but-contested is a misclassification that can be reversed for using the wrong basis, and it improperly denies the member the clinical-review rights they are owed. Strategic mislabeling is a compliance failure, not a tactic.', 'Classify by the true reason; do not pick the label that seems hardest to appeal.'],
    ],
    'A denial is only as good as its named basis. Medical-necessity denials are clinical determinations: the reviewer must cite the unmet criterion and the member gains rights such as peer-to-peer discussion and external clinical review. A benefit exclusion is a contract determination: the service simply is not covered, and there is no clinical fact to argue. The deep point is that the rationale is not cosmetic, it is jurisdictional, deciding which body hears the appeal and what evidence counts. Mislabeling one as the other does not just misword a letter; it routes a member into a process that cannot give them the answer they are entitled to.',
    'Floe generated',
    true,
    'Ask whether the dispute is about clinical facts (necessity) or about what the contract covers (exclusion).',
    { challengeRating: 7 },
  ),

  makeSimpleQuestion(
    10040006,
    'Career Skills',
    'Utilization Management and Medical Policy',
    'A denial must name the unmet criterion',
    'A utilization reviewer denies an inpatient admission request, writing only "not medically necessary." The request is appealed and overturned almost immediately. A medical director reviews and says the denial was doomed from the start, not because the clinical call was wrong, but because of how it was written. What was the fatal flaw?',
    'It failed to name the specific clinical criterion that was not met and the exact evidence missing, so it gave the appeal nothing to rebut and no path for the provider to cure the gap, making it indefensible regardless of the merits',
    [
      ['It used clinical-criteria software (like MCG or InterQual) at all, when reviewers must rely solely on their own judgment', 'Plans are expected to apply recognized clinical criteria; the problem was not using them but failing to cite which criterion went unmet. The answer attacks the legitimate tool rather than the missing specificity.', 'Cite the criterion you applied and where the request fell short, rather than abandoning criteria.'],
      ['It denied an inpatient request, which can never be denied for medical necessity, only downgraded to observation', 'Inpatient requests can be denied or redirected to a lower level of care when criteria are not met; there is no blanket prohibition. The flaw was the empty rationale, not the act of denying inpatient status.', 'Focus on documenting the unmet level-of-care criterion, not on a rule that does not exist.'],
      ['It was overturned because the reviewer lacked the right medical specialty, so the denial was procedurally void', 'Specialty match can matter, but nothing here indicates a specialty defect; the stated, fixable problem was the conclusory rationale with no cited criterion or missing evidence. The answer invents a procedural ground the scenario does not support.', 'Tie the failure to the absent criterion and evidence, the flaw the director actually identified.'],
    ],
    'A defensible denial does two things a bare conclusion cannot: it names the specific clinical criterion that was not satisfied, and it identifies the precise evidence whose absence drove the decision. This is what makes a denial appeal-ready and, paradoxically, fair, because it tells the provider exactly what to submit to cure the gap. The lesson is that in utilization management the reasoning is the product: a correct clinical instinct expressed as "not medically necessary" is worthless, while a transparent rationale gives both the member a real chance to respond and the plan a record that survives audit and the CMS reason-transparency requirements.',
    'Floe generated',
    true,
    'Ask what the appeal reviewer (or the provider) could even respond to in a one-line denial.',
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    10040007,
    'Career Skills',
    'Utilization Management and Medical Policy',
    'The expedited clock runs shorter',
    'A prior-authorization request arrives flagged urgent: a delay risks the member\'s health. A new reviewer plans to handle it within the same standard turnaround window the team uses for routine requests, reasoning that the same clinical criteria apply either way. A supervisor stops her. What has she missed about the relationship between the criteria and the clock?',
    'The clinical criteria may be identical, but an expedited/urgent request carries a separate, much shorter decision deadline; applying the standard timeframe to an urgent case can itself create clinical and regulatory harm even if the eventual decision is correct',
    [
      ['Nothing important: as long as the right criteria are applied and the decision is correct, the timing is an administrative detail', 'Timeliness is a substantive obligation, not an administrative nicety; an urgent request has its own shortened clock, and missing it harms the member and breaches the rule regardless of the eventual answer. Treating speed as optional is exactly the trap here.', 'Treat the expedited deadline as a hard, separate requirement that the correct outcome does not excuse.'],
      ['She should apply an even longer timeframe to urgent cases, since they require more careful clinical scrutiny', 'Urgency compresses the deadline rather than extending it; the member\'s health risk is precisely why the clock is shorter, not longer. This inverts the relationship between acuity and turnaround.', 'Remember that higher acuity shortens, not lengthens, the allowed decision window.'],
      ['The criteria themselves change for urgent requests, so she should locate a separate urgent criteria set before deciding', 'What changes is the clock, not the medical-necessity criteria; the same standards apply, just on a faster timeline. Hunting for a different criteria set wastes the very time the expedited deadline is trying to protect.', 'Keep the criteria constant and switch only the timeframe to the expedited window.'],
    ],
    'Utilization management runs on two independent dials: the clinical criteria that decide the answer, and the regulatory clock that decides how fast. They are easy to fuse, but an expedited or urgent request keeps the same criteria while sharply shortening the decision deadline, because the harm from delay is itself a clinical risk. The enduring point is that in payer operations a correct decision delivered late can be a violation and a patient-safety event at once; timeliness is not paperwork around the clinical judgment, it is part of the judgment\'s legitimacy.',
    'Floe generated',
    true,
    'Separate the dial that sets the answer (criteria) from the dial that sets the speed (the clock), and ask which urgency changes.',
    { challengeRating: 6 },
  ),
]
