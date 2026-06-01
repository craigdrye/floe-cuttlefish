import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

const SOURCE = 'Floe career agent-generated credential expansion 2026-05-20'

type Trap = [label: string, flaw: string, reframe: string]

type Competency = {
  chapter: string
  title: string
  issue: string
  correct: string
  traps: Trap[]
  lesson: string
}

type TrackPlan = {
  baseId: number
  topic: Topic
  contexts: string[]
  competencies: Competency[]
}

function credentialMentorHint(topic: Topic, chapter: string, title: string, prompt: string): string {
  const text = `${chapter} ${title} ${prompt}`.toLowerCase()

  if (topic === 'Series 86') {
    return 'Start with the equity-research workflow: identify the driver, bridge it through the model, then connect it to valuation or recommendation risk. The best answer should be defensible from evidence, not just a familiar finance phrase.'
  }
  if (text.includes('healthcare compliance')) {
    return 'Use the healthcare compliance program frame: legal risk, independence, reporting, investigation, corrective action, education, and board-level evidence. The strongest answer protects patients and payers while preserving a defensible record.'
  }
  if (text.includes('drug safety') || text.includes('safety case') || text.includes('pharma')) {
    return 'Start with pharmacovigilance basics: valid case elements, seriousness, expectedness, causality, reporting clock, and audit trail. Good safety work preserves the signal without overstating what one report proves.'
  }
  if (text.includes('payer') || text.includes('utilization') || text.includes('appeal') || text.includes('claim')) {
    return 'Separate coverage, medical necessity, claims payment, appeal rights, network access, and delegation oversight. Payer questions usually turn on the process right or control that applies at that decision point.'
  }
  if (text.includes('medical coding') || text.includes('coding') || text.includes('chart')) {
    return 'Code only what the record supports, using the official rule set and documented specificity. If the chart is unclear, the professional move is clarification or a supported lower-specificity choice, not guessing for payment.'
  }
  if (topic === 'Clinical Research' || text.includes('protocol') || text.includes('monitoring visit') || text.includes('site file')) {
    return 'Protect the participant, protocol, and data trail in that order. Clinical research scenarios usually reward documented escalation, source support, and sponsor/IRB process over informal cleanup.'
  }
  if (topic === 'Regulatory' || text.includes('regulatory') || text.includes('change-control')) {
    return 'Ask what a regulator would expect to see: controlling requirement, product or process impact, documented rationale, approval path, and evidence of implementation. The answer should make the decision reviewable later.'
  }
  if (text.includes('governance') || text.includes('oversight') || text.includes('board')) {
    return 'Map the issue to oversight: who owns the risk, who must be informed, and what evidence shows the process worked. Governance answers usually favor independence and escalation over quiet local fixes.'
  }
  if (text.includes('documentation') || text.includes('audit trail') || text.includes('file')) {
    return 'Think like a later reviewer: the file should show facts reviewed, rule applied, rationale, owner, approval, and remaining uncertainty. A conclusion without the chain of reasoning is usually too weak.'
  }
  if (text.includes('control')) {
    return 'Separate control design from operating effectiveness. A policy can look right on paper while failing if people bypass it, exceptions are undocumented, or testing never confirms the fix.'
  }
  if (text.includes('conflict') || text.includes('ethics') || text.includes('independence')) {
    return 'Identify the duty or conflict before choosing an action. The safest professional answer preserves independent judgment through disclosure, recusal, escalation, or documented safeguards.'
  }
  if (text.includes('risk')) {
    return 'Rank the issue by overall risk, not just speed or dollar amount. Consider harm, likelihood, control weakness, evidence quality, and whether the issue could recur.'
  }
  if (text.includes('monitoring') || text.includes('testing') || text.includes('remediation')) {
    return 'Ask whether the root cause was fixed and whether someone validated the fix with evidence. Closing a finding is not the same as proving the problem will stay fixed.'
  }
  if (text.includes('communication') || text.includes('plain-language')) {
    return 'Translate the rule into an action someone can carry out: decision, reason, owner, deadline, and consequence. Good professional communication reduces ambiguity rather than showing off terminology.'
  }

  return 'Identify the controlling rule, risk, and best next action before comparing choices. The strongest credential-exam answer should be defensible, documented, and practical under review.'
}

function q(id: number, topic: Topic, chapter: string, title: string, prompt: string, correct: string, traps: Trap[], lesson: string): Question {
  const supportLesson = `${lesson}\n\nFor this item, the learning move is to slow the scenario down: name the controlling standard, identify the fact that triggers it, then choose the next action that a later reviewer could understand. The tempting answers usually optimize speed, memory, or polished wording, but professional judgment has to connect evidence, rule, action, and record.`
  const solution = `The strongest answer is: "${correct}". ${lesson} It wins because it creates a defensible chain from the scenario facts to the professional action, instead of relying on recall, style, or speed.`
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    traps,
    supportLesson,
    SOURCE,
    undefined,
    credentialMentorHint(topic, chapter, title, prompt),
    {
      solution,
      alternatePrompts: {
        plain: `${prompt} Which answer would be most defensible under review?`,
        teaching: `If you had to justify this ${title.toLowerCase()} decision later, what answer connects the rule, facts, action, and record most clearly?`,
      },
      challengeRating: topic === 'Series 86' ? 5 : topic === 'Regulatory' || topic === 'Clinical Research' ? 4 : 3,
    },
  )
}

function expandTrack(plan: TrackPlan, limit = 220): Question[] {
  const questions: Question[] = []
  let offset = 0

  for (const competency of plan.competencies) {
    for (const context of plan.contexts) {
      questions.push(q(
        plan.baseId + offset,
        plan.topic,
        competency.chapter,
        `${competency.title} — ${context}`,
        `${context}. ${competency.issue}`,
        competency.correct,
        competency.traps,
        competency.lesson,
      ))
      offset += 1
      if (questions.length >= limit) return questions
    }
  }

  return questions
}

const financeResearchContexts = [
  'An associate is updating a morning-note model before publication',
  'A senior analyst asks for a defensible answer before earnings',
  'A sector team is reconciling company guidance with its own forecast',
  'A compliance reviewer challenges the wording in a draft report',
  'A new issuer in coverage has limited history and noisy margins',
  'A model update changes the target price more than expected',
  'A sales desk wants a quick explanation for institutional clients',
  'A management team gives a non-GAAP bridge with several exclusions',
  'A peer screen shows a valuation multiple far outside the group',
  'A channel-check datapoint conflicts with consensus estimates',
  'A newly launched coverage note must explain its core assumptions',
  'An institutional client asks why the recommendation changed',
  'A pre-publication review finds that the downside case is thin',
  'An earnings preview must separate known facts from estimates',
  'A post-call model refresh creates a surprising margin bridge',
  'A sector comp table mixes companies with different revenue models',
  'A target-price sensitivity exposes a single dominant assumption',
  'A research associate is asked to defend a valuation in committee',
  'A draft report uses management language without independent testing',
  'A market selloff forces the team to revisit the thesis quickly',
]

const generalCredentialContexts = [
  'A candidate is working through a timed practice set',
  'A reviewer finds a file note that would be hard to defend later',
  'A manager wants the fastest answer before the close of business',
  'A junior staffer suggests a shortcut to clear the queue',
  'An audit trail needs to explain the judgment six months later',
  'A stakeholder pressures the team to treat the issue as routine',
  'A training case includes one fact that changes the answer',
  'A mock exam item asks for the best next action',
  'A policy owner asks what would survive independent review',
  'A second reviewer disagrees with the first-pass conclusion',
  'A remediation owner asks whether the issue can be closed',
  'A regulator or examiner requests support for the decision',
  'A new hire chooses the answer that sounds most technical',
  'A senior leader asks for a risk-ranked recommendation',
  'A practice question includes a tempting but incomplete shortcut',
  'A quality-control reviewer tests the decision logic',
  'An exception request arrives without complete support',
  'A procedure says one thing while the actual workflow does another',
  'A deadline creates pressure to skip one control step',
  'A case study asks what a competent professional should do first',
]

const healthcareContexts = [
  'A coordinator is closing a documentation gap before a monitoring visit',
  'A payer file is being reviewed after an appeal denial',
  'A compliance officer is preparing a response to an internal hotline issue',
  'A product team asks whether a claim can be used in launch material',
  'A safety case arrives with incomplete but concerning facts',
  'A clinic manager wants to move a blocked claim today',
  'A regulatory lead is reviewing a change-control packet',
  'A coding auditor is sampling charts from last quarter',
  'A study team is deciding whether a protocol event must be escalated',
  'A utilization-management reviewer must explain the decision clearly',
  'A provider asks whether the chart can support a higher-specificity code',
  'A sponsor asks whether the deviation can be handled informally',
  'A quality team is checking whether the corrective action actually worked',
  'A medical-affairs deck includes a claim stronger than the evidence',
  'A claims analyst sees a pattern that could become an audit issue',
  'A site file is missing one approval date before activation',
  'A patient-safety concern is reported through a nonstandard channel',
  'A reviewer must distinguish clinical facts from billing preference',
  'A launch team wants to reuse materials from another jurisdiction',
  'A senior operator asks what action reduces patient and regulatory risk',
]

function c(chapter: string, title: string, issue: string, correct: string, traps: Trap[], lesson: string): Competency {
  return { chapter, title, issue, correct, traps, lesson }
}

const commonSourceTraps = {
  speed: ['Move quickly and clean up the support later', 'Speed does not cure a weak basis; regulated work needs support before reliance.', 'The best answer is the one that is defensible before it is fast.'] as Trap,
  memory: ['Rely on memory and skip the controlling reference', 'Credential exams and real practice both punish confident unsupported recall when a rule or record controls.', 'Use the reference, facts, and documented standard.'] as Trap,
  style: ['Choose the wording that sounds most sophisticated', 'Polished language can still be wrong if it misses the rule, calculation, or risk.', 'Substance beats vocabulary.'] as Trap,
}

const plans: Record<string, TrackPlan> = {
  series86: {
    baseId: 4600000,
    topic: 'Series 86',
    contexts: financeResearchContexts,
    competencies: [
      c('Equity Valuation', 'Multiple selection', 'Which valuation move is strongest when a company has temporarily depressed earnings but normal revenue visibility?', 'Use a revenue or normalized-earnings multiple only after explaining why current EPS is distorted and how peers are comparable', [['Apply the lowest P/E peer mechanically', 'A low peer multiple does not solve distorted earnings or comparability.', 'Normalize the driver and justify the peer set.'], ['Ignore valuation until earnings recover', 'Research still needs a reasoned valuation approach under uncertainty.', 'Use a method suited to the facts.'], commonSourceTraps.style], 'Series 86-style valuation questions reward matching the multiple to the economic driver and explaining comparability limits.'),
      c('Financial Statement Analysis', 'Margin bridge', 'A company reports higher gross margin but lower operating margin. What should the analyst inspect first?', 'Whether operating expenses, mix, one-time costs, or accounting classification explain the divergence', [['Conclude pricing improved every part of the business', 'Gross margin improvement does not automatically explain operating margin pressure.', 'Bridge each margin line separately.'], ['Treat operating margin as irrelevant because gross margin improved', 'Operating margin captures expenses below gross profit and can change the investment view.', 'Follow the income statement downward.'], commonSourceTraps.speed], 'Research math is often bridge discipline: isolate which line item moved and why.'),
      c('Forecasting', 'Driver consistency', 'Unit volume rises, price falls, and revenue is flat. What is the best forecast check?', 'Test whether the implied price-volume mix is consistent with management commentary, industry data, and historical elasticity', [['Assume flat revenue means nothing changed', 'Offsetting drivers can hide important business changes.', 'Look through the aggregate.'], ['Forecast both price and volume rising because that looks better', 'Forecasts should follow evidence, not optimism.', 'Respect the implied driver math.'], commonSourceTraps.memory], 'Revenue forecasts need driver consistency; flat top line can conceal mix, price, and demand changes.'),
      c('Accounting and Adjustments', 'Non-GAAP add-back', 'Management excludes a recurring restructuring charge from adjusted EPS every year. What should research do?', 'Challenge whether the adjustment is truly non-recurring and show the impact on reported and adjusted earnings', [['Accept the adjustment because management labels it adjusted', 'The label does not prove the charge is non-recurring.', 'Test recurrence and economics.'], ['Delete all adjusted metrics from the report', 'Adjusted metrics can be useful if reconciled and explained.', 'Use both views carefully.'], commonSourceTraps.style], 'Recurring exclusions can overstate earnings quality. Analysts should reconcile and challenge adjustments.'),
      c('Industry Analysis', 'Peer-group fit', 'A peer trades at a premium but has faster growth, lower leverage, and higher margins. What is the safest comparison?', 'Adjust the interpretation for growth, profitability, risk, and business mix before calling the subject cheap or expensive', [['Call the subject cheap solely because its multiple is lower', 'Lower multiple may be justified by lower quality or growth.', 'Compare the drivers behind the multiple.'], ['Ignore peers because no two companies are identical', 'Peer work is imperfect but useful when differences are explicit.', 'Use comparability with caveats.'], commonSourceTraps.speed], 'Comparable-company analysis is not a table-copying exercise; the explanatory drivers matter.'),
      c('Investment Recommendation', 'Thesis-risk link', 'A target price rises after a model change, but the key thesis risk also increased. What should the report do?', 'Explain the model upside and the risk change together so the recommendation is not misleading', [['Publish the higher target and hide the new risk in an appendix', 'Material thesis risks belong in the main reasoning.', 'Tie upside and risk in the recommendation.'], ['Lower the rating automatically whenever any risk exists', 'All investments have risk; the question is whether risk/reward changed.', 'Evaluate magnitude and probability.'], commonSourceTraps.memory], 'Research recommendations should connect valuation, catalyst, and risk rather than presenting upside in isolation.'),
      c('Quantitative Methods', 'Sensitivity table', 'A one-point margin change moves valuation dramatically. What should the analyst do?', 'Show sensitivity and explain why the business is highly exposed to margin assumptions', [['Suppress the sensitivity because it makes the model look uncertain', 'Sensitivity is exactly how research communicates assumption risk.', 'Expose important drivers.'], ['Choose the middle case and declare it certain', 'Point estimates are not certainty.', 'Show the range when the driver matters.'], commonSourceTraps.style], 'Series 86 preparation should include sensitivity reasoning, not just base-case arithmetic.'),
      c('Research Process', 'Evidence weighting', 'One channel check contradicts five quarters of company and industry data. What is the best posture?', 'Treat it as a signal to investigate, not as standalone proof that the thesis has changed', [['Rewrite the thesis around the single datapoint immediately', 'One datapoint may be noisy or unrepresentative.', 'Weight evidence by quality and breadth.'], ['Ignore the datapoint because it is inconvenient', 'Contradictory evidence deserves follow-up.', 'Investigate without overreacting.'], commonSourceTraps.speed], 'Analysts need evidence discipline: neither overfit nor ignore inconvenient information.'),
      c('Earnings Quality', 'Cash conversion', 'EPS beats estimates while free cash flow misses badly. What should the analyst ask?', 'Whether working capital, capex, revenue recognition, or one-time cash items explain the EPS-cash divergence', [['Raise estimates because EPS beat is the only relevant metric', 'Cash conversion can reveal quality issues behind accounting earnings.', 'Bridge earnings to cash.'], ['Assume fraud immediately', 'A cash miss may have normal explanations; investigate before accusing.', 'Start with reconciliation.'], commonSourceTraps.memory], 'Earnings quality analysis compares accounting profit with cash and balance-sheet movement.'),
      c('Portfolio and Market Context', 'Rate sensitivity', 'A high-duration growth stock sells off after yields rise. What is the cleanest explanation?', 'Higher discount rates can reduce the present value of distant expected cash flows', [['Higher rates mechanically increase every equity valuation', 'Higher discount rates usually pressure long-duration cash flows.', 'Think present value.'], ['Interest rates affect only banks and bonds', 'Discount rates affect equity valuation too.', 'Connect rates to valuation math.'], commonSourceTraps.style], 'Equity research candidates should connect macro moves to valuation mechanics without overclaiming.'),
      c('Regulatory Research Conduct', 'Selective disclosure boundary', 'Management hints at nonpublic quarter-end demand trends in a private call. What should the analyst do?', 'Avoid using or soliciting material nonpublic information and route the issue through firm procedures', [['Use it if the note does not quote management directly', 'MNPI risk is not solved by paraphrasing.', 'Do not trade or publish from improper information.'], ['Share it only with the best clients', 'Selective dissemination compounds the problem.', 'Follow information-barrier and compliance rules.'], commonSourceTraps.speed], 'Research analysts must manage MNPI and selective-disclosure risk, not just model accuracy.'),
      c('Financial Modeling', 'Share-count effect', 'Net income rises but diluted EPS is flat. What should the analyst inspect?', 'Dilution, share issuance, convertibles, options, or buyback changes affecting the diluted share count', [['Assume the income statement is wrong', 'Flat EPS can result from a higher denominator, not an erroneous numerator.', 'Bridge net income to per-share results.'], ['Ignore share count because valuation uses only revenue', 'Per-share metrics matter in equity research.', 'Check the denominator.'], commonSourceTraps.memory], 'EPS is net income divided by diluted shares. Denominator changes can offset profit growth.'),
      c('Credit and Capital Structure', 'Leverage and equity risk', 'A company funds buybacks with new debt while operating earnings are flat. What is the key research concern?', 'EPS accretion may come with higher financial risk and less balance-sheet flexibility', [['Treat the buyback as pure value creation because share count falls', 'A lower share count can be offset by leverage risk and interest cost.', 'Assess accretion and risk together.'], ['Assume debt is always bad regardless of cost or capacity', 'Debt can be sensible if capacity and return justify it.', 'Evaluate tradeoffs.'], commonSourceTraps.style], 'Research judgment should separate financial engineering from sustainable operating improvement.'),
      c('Economics and Markets', 'Cyclical normalization', 'A cyclical company earns record margins at peak demand. How should valuation handle it?', 'Consider mid-cycle earnings and explain where current margins sit relative to normalized conditions', [['Capitalize peak earnings as permanent without discussion', 'Peak-cycle earnings can overstate sustainable value.', 'Normalize cyclical drivers.'], ['Use trough earnings for every scenario', 'Trough-only valuation can be too punitive.', 'Frame a cycle-aware range.'], commonSourceTraps.speed], 'Cyclical valuation requires normalized assumptions and explicit cycle positioning.'),
      c('Report Quality', 'Conclusion support', 'A draft says “we are bullish” but the model, risks, and catalysts are not connected. What is missing?', 'A clear chain from evidence to forecast to valuation to recommendation', [['More adjectives about conviction', 'Conviction language does not replace evidence.', 'Build the investment argument.'], ['A bigger font for the target price', 'Presentation does not solve analytical gaps.', 'Connect the reasoning.'], commonSourceTraps.memory], 'Research reports should make the analytical chain inspectable.'),
      c('Statistics and Estimates', 'Consensus comparison', 'The analyst is above consensus on revenue but below on EPS. What should be reconciled?', 'Margins, expenses, taxes, interest, share count, and mix assumptions between revenue and EPS', [['Assume EPS must be above consensus if revenue is above', 'Revenue outperformance can be offset below the line.', 'Bridge all income-statement drivers.'], ['Ignore consensus because it is always wrong', 'Consensus is a benchmark, not an answer.', 'Explain where and why you differ.'], commonSourceTraps.style], 'Consensus deltas need a bridge; top-line and bottom-line views can diverge for good reasons.'),
      c('Risk Disclosure', 'Catalyst probability', 'A catalyst could unlock upside but timing is uncertain. What should the note do?', 'Separate base-case value from catalyst upside and state the probability/timing uncertainty', [['Put all catalyst upside into the base case automatically', 'Uncertain catalysts should not be treated as guaranteed.', 'Distinguish base case from optionality.'], ['Exclude all catalysts from discussion', 'Material catalysts matter if framed honestly.', 'Discuss probability and timing.'], commonSourceTraps.speed], 'Good research distinguishes expected value, base case, and upside scenarios.'),
      c('ESG and Governance', 'Governance discount', 'A controlled company has weak minority protections. How can that affect valuation?', 'Investors may apply a governance or control-risk discount if cash flows are less accessible or rights are weaker', [['Ignore governance because only EPS matters', 'Governance affects risk, cash-flow access, and investor required return.', 'Risk can affect multiple.'], ['Assume all controlled companies are worthless', 'Control risk varies by facts and protections.', 'Assess the specific governance structure.'], commonSourceTraps.memory], 'Governance is an investment risk when it changes claim quality, incentives, or cash-flow access.'),
      c('Balance Sheet Analysis', 'Working-capital build', 'Revenue growth is strong but receivables grow much faster than sales. What should the analyst test?', 'Collection quality, customer concentration, payment terms, and whether revenue is being pulled forward', [['Celebrate because receivables are always as good as cash', 'Receivables still carry collection and timing risk.', 'Compare receivables growth to sales and cash.'], ['Ignore the balance sheet in equity research', 'Balance-sheet movement often reveals earnings quality.', 'Use all statements.'], commonSourceTraps.style], 'Fast receivables growth can be a quality-of-revenue clue and needs investigation.'),
      c('Recommendation Maintenance', 'Estimate revision discipline', 'New evidence weakens the next two quarters but not the long-term thesis. What is strongest?', 'Revise near-term estimates and explain why the long-term thesis is unchanged or what would break it', [['Leave all estimates unchanged to avoid looking inconsistent', 'Analysts should update estimates when evidence changes.', 'Separate near-term numbers from long-term thesis.'], ['Abandon the thesis because any estimate change proves it failed', 'Estimate revisions do not automatically invalidate the thesis.', 'Locate the change in the time horizon.'], commonSourceTraps.memory], 'Research maintenance is disciplined updating, not stubbornness or panic.'),
    ],
  },
  series87: {
    baseId: 4610000,
    topic: 'Regulatory',
    contexts: financeResearchContexts,
    competencies: [
      c('Research Communications', 'Fair presentation', 'What is the strongest publication control when a report emphasizes upside but the downside scenario is material?', 'Present material risks and assumptions clearly alongside the recommendation and valuation case', [['Put risks only in a generic boilerplate appendix', 'Generic risk language can fail to communicate the actual material downside.', 'Disclose specific material risks.'], ['Remove the downside scenario because it weakens the pitch', 'Research must be fair and balanced, not promotional.', 'Balance the communication.'], commonSourceTraps.speed], 'Series 87 emphasizes communications, disclosures, conflicts, and fair presentation.'),
      c('Conflicts and Disclosures', 'Banking relationship', 'The firm recently managed an offering for the issuer. What should happen in the research communication?', 'Include required relationship/conflict disclosures under firm and regulatory procedures', [['Assume readers know the relationship already', 'Disclosure obligations are not satisfied by assumptions about reader knowledge.', 'Make the conflict visible.'], ['Mention it verbally only to selected clients', 'Required disclosures belong in the communication process, not selective side comments.', 'Use the formal disclosure channel.'], commonSourceTraps.style], 'Research communications must disclose material conflicts so readers can evaluate incentives.'),
      c('Public Appearances', 'Media interview boundary', 'An analyst is asked on live television for a rating change not yet published. What is best?', 'Stay within approved public information and firm procedures; do not preview unpublished research selectively', [['Hint at the change so viewers feel rewarded', 'Selective previewing of research can create fairness and compliance problems.', 'Use approved communications.'], ['Say anything is fine because television is public', 'Public medium does not excuse unapproved or misleading statements.', 'Approval and accuracy still matter.'], commonSourceTraps.memory], 'Public appearances are research communications and need the same discipline around approvals and fairness.'),
      c('Supervision and Approval', 'Pre-use review', 'A junior analyst wants to distribute a note before supervisory review because the market is moving. What is safest?', 'Follow required review and approval procedures before distribution', [['Send now and ask supervision to approve retroactively', 'Retroactive approval defeats the control.', 'Review comes before use.'], ['Send only to favorite clients first', 'Selective distribution worsens the issue.', 'Use approved broad distribution.'], commonSourceTraps.speed], 'Research distribution controls are designed to prevent misleading, conflicted, or unfair communications.'),
      c('Price Targets and Ratings', 'Basis disclosure', 'A report gives a target price but no basis for valuation. What is missing?', 'The valuation method, key assumptions, and risks that could prevent the target from being reached', [['A louder rating word', 'Rating labels do not explain valuation basis.', 'Disclose method and assumptions.'], ['Only the company ticker', 'Readers need the reasoning behind the target.', 'Make the basis inspectable.'], commonSourceTraps.style], 'Price targets should be supported by method, assumptions, and risk discussion.'),
      c('Information Barriers', 'MNPI handling', 'An investment banker offers deal information to help the analyst “understand the story.” What should the analyst do?', 'Decline or escalate according to information-barrier procedures before receiving or using MNPI', [['Accept the information and promise not to trade personally', 'Research use and firm risk remain even without personal trading.', 'Avoid improper information flow.'], ['Use the information only in model assumptions', 'Using MNPI indirectly is still a problem.', 'Keep research based on permissible information.'], commonSourceTraps.memory], 'Series 87 candidates need clear instincts around MNPI and information barriers.'),
      c('Selective Distribution', 'Client access', 'A sales team asks to send a favorable draft to one large client before publication. What is best?', 'Do not selectively distribute unpublished research; follow firm publication and distribution controls', [['Send it because the client pays the most commissions', 'Commercial importance does not override fair distribution controls.', 'Avoid selective release.'], ['Rename it “market color” to avoid research rules', 'Labels do not change substance.', 'Treat research-like content carefully.'], commonSourceTraps.speed], 'Fair distribution is central to research communications compliance.'),
      c('Analyst Independence', 'Issuer pressure', 'An issuer threatens access unless the analyst softens a negative conclusion. What should happen?', 'Maintain analytical independence, document the pressure, and involve supervision/compliance as appropriate', [['Change the conclusion to preserve access', 'Access pressure is exactly why independence controls exist.', 'Protect the integrity of the research.'], ['Delete all notes about the pressure', 'Destroying the record makes the issue worse.', 'Document and escalate.'], commonSourceTraps.style], 'Research integrity requires resisting issuer pressure and documenting conflicts.'),
      c('Promissory Language', 'Guarantee wording', 'A draft says the stock “will definitely double after the product launch.” What is wrong?', 'The language overstates certainty and should be revised to a balanced, supportable view with risks', [['Keep it because confident language sells', 'Research is not advertising; certainty claims can mislead.', 'Use supportable probability language.'], ['Remove all investment opinion from the report', 'Research can give opinions, but they must be supported and balanced.', 'Do not overcorrect into uselessness.'], commonSourceTraps.memory], 'Research communications should avoid unwarranted promissory or exaggerated language.'),
      c('Dissemination Corrections', 'Material error', 'A published report contains a material model error. What is the best next step?', 'Escalate under firm procedures and correct or update the communication promptly and transparently', [['Ignore it if the rating still feels right', 'A material error needs correction even if the conclusion might survive.', 'Fix the record.'], ['Quietly change the model for the next report only', 'Readers of the current report may be relying on wrong information.', 'Address the published error.'], commonSourceTraps.speed], 'When research communications are materially wrong, correction discipline matters.'),
    ],
  },
}

const credentialCompetencies: Competency[] = [
  c('Exam Strategy', 'Best-answer discipline', 'Which approach most improves performance on a scenario-heavy credential exam?', 'Identify the controlling rule, fact pattern, and best next action before comparing answer choices', [commonSourceTraps.memory, commonSourceTraps.style, commonSourceTraps.speed], 'Scenario exams reward disciplined issue spotting and defensible process.'),
  c('Governance and Oversight', 'Escalation threshold', 'A fact pattern does not prove a violation, but it creates credible risk. What is the best action?', 'Escalate through the defined process with a balanced summary of facts, risk, and uncertainty', [['Close it because uncertainty means nothing happened', 'Uncertainty can be exactly why escalation or review is needed.', 'Escalate credible risk without overstating it.'], ['Accuse the stakeholder immediately', 'Premature accusations can be unfair and procedurally weak.', 'Use process and evidence.'], commonSourceTraps.speed], 'Professional exams often test escalation judgment, not just memorized definitions.'),
  c('Documentation', 'Audit trail', 'What makes the file strongest when a judgment call is challenged later?', 'A clear record of facts reviewed, rule applied, rationale, approver, and unresolved limitations', [['A one-word conclusion with no support', 'A conclusion without reasoning cannot be tested.', 'Document the chain of judgment.'], ['A private note outside the system of record', 'Side notes are not reliable audit evidence.', 'Keep the decision in the official record.'], commonSourceTraps.style], 'Defensible documentation shows how a competent professional reached the answer.'),
  c('Controls', 'Control failure', 'A control exists on paper but is routinely bypassed to meet deadlines. What is the likely issue?', 'Control design may look adequate, but operating effectiveness is weak', [['The control is perfect because the policy exists', 'A policy is not effective if people bypass it.', 'Test operation, not just design.'], ['Deadlines automatically waive control requirements', 'Schedule pressure does not nullify core controls.', 'Use approved exception paths.'], commonSourceTraps.memory], 'Many credentials distinguish control design from operating effectiveness.'),
  c('Ethics and Independence', 'Conflict response', 'A stakeholder offers a benefit tied to a favorable decision. What is the safest response?', 'Identify the conflict, avoid compromised judgment, and follow disclosure or recusal procedures', [['Accept it if the answer was already planned', 'A benefit tied to outcome creates appearance and independence concerns.', 'Protect independence.'], ['Hide it because disclosure would be awkward', 'Undisclosed conflicts are worse than awkward conversations.', 'Use the conflict process.'], commonSourceTraps.speed], 'Conflicts are managed through transparency, process, and independent judgment.'),
  c('Risk Assessment', 'Risk-based prioritization', 'Two issues compete for attention: one is low-dollar but high-risk, the other high-dollar but well explained. What should drive priority?', 'Overall risk, including harm, likelihood, control weakness, and evidence quality', [['Use dollar amount as the only ranking factor', 'Dollar amount matters but is not the whole risk picture.', 'Prioritize by full risk.'], ['Work the easiest item first regardless of risk', 'Ease is not a risk criterion.', 'Use a defensible triage method.'], commonSourceTraps.style], 'Risk-based exams test how multiple facts combine, not single-factor shortcuts.'),
  c('Regulatory Change', 'Change management', 'A rule or standard changes, but procedures, training, and testing remain old. What is missing?', 'A change-management plan that updates obligations, owners, controls, training, and monitoring', [['Assume staff will notice the change on their own', 'Passive awareness is not a control.', 'Operationalize the change.'], ['Update only the slide deck and call it implemented', 'Training materials alone do not update procedures or controls.', 'Change the system of work.'], commonSourceTraps.speed], 'Regulatory change management connects new requirements to actual operating behavior.'),
  c('Monitoring and Testing', 'Finding remediation', 'A repeat finding appears after management marked it remediated. What should be questioned?', 'Whether the root cause was fixed and whether validation tested sustainable effectiveness', [['Treat repeat findings as impossible once closed', 'Closure can be wrong or superficial.', 'Validate the fix.'], ['Change the finding title so it looks new', 'Renaming does not remediate root cause.', 'Address substance.'], commonSourceTraps.memory], 'Repeat findings often signal weak root-cause analysis or ineffective remediation.'),
  c('Professional Judgment', 'Evidence conflict', 'Evidence points in two directions. What is the strongest professional response?', 'Reconcile the conflict, document uncertainty, and avoid conclusions stronger than the evidence supports', [['Select only the evidence that supports the preferred answer', 'Cherry-picking undermines professional judgment.', 'Address conflicting evidence directly.'], ['Refuse to decide any issue with uncertainty', 'Judgment often operates under uncertainty.', 'Make bounded, documented decisions.'], commonSourceTraps.style], 'The best answer often handles uncertainty honestly instead of pretending it is gone.'),
  c('Communication', 'Plain-language advice', 'A technical conclusion must be sent to business owners. What makes it useful?', 'State the decision, reason, required action, owner, deadline, and consequence in plain language', [['Use only acronyms so it sounds expert', 'Acronym-heavy advice can fail operationally.', 'Make the action clear.'], ['Send a long rule excerpt with no recommendation', 'People need the applied conclusion, not only raw text.', 'Translate rule into action.'], commonSourceTraps.speed], 'Professional communication should move correct action, not merely display expertise.'),
]

for (const [index, trackId] of [
  'cfaLevelOne', 'cpaExam', 'barExam', 'pmpWrangler', 'shrmPeople', 'patentBar', 'crcm', 'ccep',
  'amlCompliance', 'bankComplianceAmlRoadmap', 'customsBroker', 'aigp', 'nerc', 'apiInspectors',
  'cdfm', 'certifiedGeneralAppraiser', 'medicalCodingRoadmap', 'clinicalResearchRoadmap',
  'healthcareComplianceRoadmap', 'regulatoryAffairsRoadmap', 'pharmaDrugSafetyRoadmap',
  'healthInsurancePayersRoadmap', 'procurementContractingRoadmap', 'defenseBudgetingRoadmap',
].entries()) {
  const healthcareTrack = /medical|clinical|healthcare|regulatoryAffairs|pharma|Payers/i.test(trackId)
  const contexts = healthcareTrack ? healthcareContexts : generalCredentialContexts
  const baseId = 4700000 + index * 10000
  const topic: Topic =
    healthcareTrack ? (trackId === 'clinicalResearchRoadmap' ? 'Clinical Research' : trackId === 'regulatoryAffairsRoadmap' ? 'Regulatory' : 'Career Skills') :
    ['crcm', 'ccep', 'aigp'].includes(trackId) ? 'Regulatory' :
    'Career Skills'

  plans[trackId] = {
    baseId,
    topic,
    contexts,
    competencies: credentialCompetencies,
  }
}

export const careerAgentGeneratedCredentialExpansionQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  Object.entries(plans).map(([trackId, plan]) => [trackId, expandTrack(plan, 220)]),
)
