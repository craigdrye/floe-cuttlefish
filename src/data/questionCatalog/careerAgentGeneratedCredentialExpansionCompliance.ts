import type { Question, Topic } from './types'
import { makeSimpleQuestion } from './base'

const SOURCE = 'Floe career agent-generated credential expansion 2026-05-20'

type WrongAnswers = [string, string, string][]

type CredentialCompetency = {
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: WrongAnswers
}

type ScenarioFrame = {
  tag: string
  setup: string
}

function mentorHintForCredential(competency: CredentialCompetency): string {
  if (competency.chapter.startsWith('CRCM')) {
    return 'First identify the consumer-protection rule being triggered, then ask what timing, notice, disclosure, investigation, or evidence duty follows. CRCM answers usually favor a controlled, documented process over an informal customer-service workaround.'
  }
  if (competency.chapter.startsWith('CCEP')) {
    return 'Use the effective-compliance-program frame: risk assessment, standards, training, reporting, investigation, discipline, third-party controls, and remediation. The best answer should strengthen accountability without hiding the business issue.'
  }
  if (competency.chapter.startsWith('AML') || competency.chapter.startsWith('Bank AML')) {
    return 'Separate customer facts, transaction pattern, rule trigger, and documentation. A strong AML answer explains the risk and next step without tipping off the customer or skipping required records.'
  }
  if (competency.chapter.startsWith('Customs')) {
    return 'Start with the broker and importer reasonable-care duties: support classification, value, origin, and entry decisions with facts and records. Speed or client preference does not override CBP requirements.'
  }
  if (competency.chapter.startsWith('AIGP')) {
    return 'Use an AI life-cycle lens: intended use, data rights, impact, controls, human oversight, monitoring, incident response, and accountable owners. Good governance asks what evidence is needed before and after deployment.'
  }

  return 'Focus on the control duty the facts have triggered, then choose the response that creates the clearest evidence trail without overreaching beyond the facts.'
}

const bankFrames: ScenarioFrame[] = [
  { tag: 'new product review', setup: 'A mid-size bank is preparing to launch a digital account feature, and compliance is asked to review the control design before release.' },
  { tag: 'exam request', setup: 'During a regulator examination, the examiner asks for evidence that a recent issue was handled consistently with the bank policy.' },
  { tag: 'complaint trend', setup: 'A monitoring report shows a rising trend in customer complaints tied to one branch, one script, and one product line.' },
  { tag: 'vendor change', setup: 'A business line wants a third-party processor to handle a regulated customer-facing workflow starting next month.' },
  { tag: 'board package', setup: 'The compliance officer is preparing a quarterly board report after several control gaps were identified.' },
  { tag: 'policy refresh', setup: 'A procedure owner asks whether a regulatory update can wait until the next annual policy review cycle.' },
  { tag: 'line testing', setup: 'First-line testing found exceptions, but the business argues the exceptions are operational rather than compliance-related.' },
  { tag: 'remediation review', setup: 'A corrective action is marked complete, but validation shows the same error still appears in new transactions.' },
  { tag: 'marketing review', setup: 'Marketing wants to publish a campaign quickly because a competitor launched a similar offer yesterday.' },
]

const ethicsFrames: ScenarioFrame[] = [
  { tag: 'hotline report', setup: 'An employee submits a confidential report alleging that a manager bypassed an approval control to win a large deal.' },
  { tag: 'board update', setup: 'The audit committee asks whether the compliance program is working in practice rather than only documented on paper.' },
  { tag: 'third party', setup: 'A sales team wants to onboard a consultant in a high-risk market who refuses to identify beneficial owners.' },
  { tag: 'training gap', setup: 'Completion data shows senior leaders attended annual training, but high-risk sales staff missed role-specific modules.' },
  { tag: 'investigation', setup: 'Internal audit receives evidence suggesting that gifts were approved after the expenses had already been incurred.' },
  { tag: 'policy exception', setup: 'A regional executive asks for an exception to the conflict-of-interest policy because the deal is strategically important.' },
  { tag: 'merger diligence', setup: 'A company being acquired has strong revenue growth but no documented compliance risk assessment.' },
  { tag: 'data signal', setup: 'Compliance analytics show unusual approval patterns clustered around one manager and one vendor.' },
  { tag: 'speak-up culture', setup: 'Survey results show employees know the hotline exists but do not believe reports will be handled without retaliation.' },
]

const amlFrames: ScenarioFrame[] = [
  { tag: 'alert review', setup: 'An AML analyst is reviewing an alert that appears inconsistent with the customer profile and recent account history.' },
  { tag: 'new customer', setup: 'A relationship manager wants to open an account before all risk-based customer information has been collected.' },
  { tag: 'cash pattern', setup: 'A branch notices repeated cash activity just below a reporting threshold across several business days.' },
  { tag: 'system tuning', setup: 'The monitoring team proposes changing alert thresholds after false positives increased for a low-risk product.' },
  { tag: 'audit finding', setup: 'Independent testing identifies weak documentation in several closed AML investigations.' },
  { tag: 'high-risk review', setup: 'A periodic review identifies a customer with foreign ownership, high cash volume, and activity outside expected geography.' },
  { tag: 'case escalation', setup: 'A junior investigator finds adverse media and transaction activity that do not match the customer due diligence file.' },
  { tag: 'exam prep', setup: 'The BSA officer is preparing evidence for examiners on how the bank detects, investigates, and reports suspicious activity.' },
]

const customsFrames: ScenarioFrame[] = [
  { tag: 'entry review', setup: 'An importer asks a broker to clear a shipment quickly even though product details are incomplete.' },
  { tag: 'classification dispute', setup: 'Two tariff provisions appear plausible for the imported article, and the duty impact is material.' },
  { tag: 'origin question', setup: 'A shipment uses inputs from several countries, and the client wants to mark it with the country of final packaging.' },
  { tag: 'client instruction', setup: 'A client tells the broker to use the same entry treatment as last year despite a product design change.' },
  { tag: 'CBP inquiry', setup: 'CBP requests documents supporting an entry after liquidation but within the record retention period.' },
  { tag: 'broker supervision', setup: 'A brokerage employee is preparing entries remotely for a new client under tight deadlines.' },
  { tag: 'post-entry issue', setup: 'After entry summary filing, the importer discovers the declared value excluded a required cost element.' },
  { tag: 'PGA release', setup: 'A product may be subject to another agency requirement in addition to ordinary CBP entry requirements.' },
]

const aigpFrames: ScenarioFrame[] = [
  { tag: 'inventory intake', setup: 'A business unit proposes a new AI use case and asks governance to approve it for production use.' },
  { tag: 'model deployment', setup: 'A model has passed technical testing, but the deployment team has not finalized monitoring and user instructions.' },
  { tag: 'vendor model', setup: 'Procurement wants to buy an AI service whose vendor documentation is incomplete on training data and known limitations.' },
  { tag: 'high-risk use', setup: 'An AI system will support decisions about employment, access to services, or another sensitive individual impact.' },
  { tag: 'incident review', setup: 'Users report that model outputs changed after a data pipeline update and several decisions may have been affected.' },
  { tag: 'privacy review', setup: 'A team wants to fine-tune a model using customer data collected for a different original purpose.' },
  { tag: 'board oversight', setup: 'Senior management asks how to show that AI governance is embedded across the life cycle.' },
  { tag: 'monitoring report', setup: 'A post-deployment report shows drift, degraded accuracy for one subgroup, and unresolved owner questions.' },
]

const crcmCompetencies: CredentialCompetency[] = [
  {
    chapter: 'CRCM Core Regulations',
    title: 'Reg E error resolution',
    prompt: 'The facts suggest a possible electronic fund transfer error. What should the compliance manager prioritize?',
    correct: 'Trigger the Regulation E error-resolution process, preserve timing evidence, and document the investigation and response.',
    wrong: [
      ['Wait for the customer to complain a second time before logging it', 'Regulation E timing and investigation duties can begin from the notice of error.', 'Treat credible error notices as process triggers, not courtesy feedback.'],
      ['Treat every disputed transfer as confirmed fraud before review', 'The bank still needs a controlled investigation and defensible conclusion.', 'Use the required process to determine what happened.'],
      ['Resolve it only through marketing goodwill credits', 'A goodwill credit does not replace regulatory error-resolution obligations.', 'Separate customer service gestures from compliance-required handling.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'Truth in Savings advertising',
    prompt: 'The promotion highlights a high annual percentage yield but omits conditions that materially affect whether customers receive it. What is the best compliance response?',
    correct: 'Require clear, accurate Regulation DD disclosures for the APY, conditions, and limitations before the advertisement runs.',
    wrong: [
      ['Approve it because the APY number is mathematically possible', 'A rate can be possible and still advertised in a misleading or incomplete way.', 'Advertising review must cover conditions and clarity, not only arithmetic.'],
      ['Move the conditions to an internal FAQ only', 'Material account terms must be communicated to consumers, not hidden in staff-only material.', 'Customers need the information that affects the advertised yield.'],
      ['Rely on branch staff to explain missing terms after account opening', 'Later oral explanation is not a substitute for compliant advertising and account disclosures.', 'Build accuracy into the customer-facing message.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'Reg B adverse action',
    prompt: 'A loan application is denied after the bank uses both credit score information and a manual underwriting exception. What should compliance verify?',
    correct: 'That the applicant receives a timely adverse action notice with specific, accurate principal reasons for the decision.',
    wrong: [
      ['Send only a generic note saying credit was unavailable', 'Generic reasons may fail to tell the applicant the actual basis for the decision.', 'Adverse action notices must be specific enough to be useful.'],
      ['Avoid a notice because the decision involved judgment', 'Manual judgment does not remove notice obligations.', 'Reg B applies to decisions, including judgmental underwriting.'],
      ['Tell the applicant to call if they want any reason', 'The bank must provide the required notice rather than shifting the burden to the applicant.', 'Provide the required explanation on time.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'Flood insurance force placement',
    prompt: 'A monitored loan appears to lack sufficient flood insurance after policy expiration. What is the most defensible next step?',
    correct: 'Follow flood notice and force-placement procedures, track timing, and document coverage evidence and borrower communications.',
    wrong: [
      ['Ignore the gap until the next annual review', 'Flood coverage gaps require timely handling when identified.', 'Monitoring must lead to action when required insurance is missing.'],
      ['Force place immediately without the required notice process', 'Force placement is controlled by notice and timing requirements.', 'Use the required sequence and document it.'],
      ['Accept any verbal assurance from the borrower as proof', 'Verbal assurance is weak evidence of required coverage.', 'Obtain and retain adequate insurance documentation.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'Reg Z finance charge',
    prompt: 'A fee connected to a closed-end loan may have been excluded from the finance charge. What should compliance do first?',
    correct: 'Analyze whether the fee is a finance charge under Regulation Z and assess disclosure and restitution impact if it was misclassified.',
    wrong: [
      ['Assume all fees paid at closing are excluded', 'Some closing-related fees may be finance charges depending on purpose and treatment.', 'Classify fees using the rule, not the location on the statement.'],
      ['Change the fee name without changing disclosures', 'Renaming a fee does not control the regulatory analysis.', 'Substance and treatment matter.'],
      ['Wait for an examiner to calculate the impact', 'The bank should self-identify, quantify, and remediate issues when appropriate.', 'Own the analysis before it becomes an exam finding.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'HMDA data integrity',
    prompt: 'Testing finds repeated errors in reportable loan data fields before annual submission. What is the best compliance move?',
    correct: 'Perform root-cause review, correct the loan application register, and strengthen controls before submission.',
    wrong: [
      ['Submit the file and plan to explain later', 'Known data quality issues should be corrected before submission where possible.', 'HMDA reporting requires accurate, controlled data.'],
      ['Correct only the sample files tested', 'Sampling errors may indicate broader root causes.', 'Determine scope before limiting remediation.'],
      ['Tell lenders to remember better next year', 'Training alone is weak if system mapping or procedures caused the errors.', 'Fix the control cause, not only the symptom.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'CRA assessment area',
    prompt: 'The bank expands lending through digital channels into new geographies. What should compliance evaluate?',
    correct: 'Whether assessment areas and CRA performance context still reasonably reflect lending activity, branches, and regulatory expectations.',
    wrong: [
      ['Leave assessment areas unchanged because the website has no branch', 'Digital activity can still affect CRA strategy and performance analysis.', 'Evaluate actual activity and applicable CRA rules.'],
      ['Use only the most profitable ZIP codes', 'CRA assessment cannot be designed only around profitability.', 'Assessment-area decisions must be defensible and not arbitrarily exclude areas.'],
      ['Stop tracking community development activity', 'Community development remains relevant to CRA performance.', 'Digital growth increases the need for disciplined tracking.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'UDAAP complaint signal',
    prompt: 'Customers complain that a product feature works differently from how front-line staff described it. What is the best compliance response?',
    correct: 'Treat complaints as a UDAAP risk signal, compare customer-facing statements to actual product behavior, and remediate harm if needed.',
    wrong: [
      ['Dismiss complaints because the contract is technically correct', 'UDAAP risk can arise from misleading practices even when contract text exists.', 'Review the full customer experience.'],
      ['Tell staff to stop writing down complaints', 'Suppressing complaint evidence worsens compliance risk.', 'Complaint capture is part of control intelligence.'],
      ['Assume customers misunderstood and close the issue', 'A pattern of misunderstanding may reveal a disclosure or sales-practice problem.', 'Use patterns to test whether the practice is clear and fair.'],
    ],
  },
  {
    chapter: 'CRCM Core Regulations',
    title: 'BSA pillars',
    prompt: 'The bank has a written BSA policy but weak training records and no recent independent test. What should compliance conclude?',
    correct: 'A written policy alone is insufficient; the BSA program needs implemented pillars, including training and independent testing.',
    wrong: [
      ['The policy alone satisfies the BSA program requirement', 'Program adequacy depends on implementation, not documentation alone.', 'Evidence must show controls operate in practice.'],
      ['Training matters only for tellers', 'Appropriate personnel across relevant roles need risk-based training.', 'Match training to job duties and risk.'],
      ['Independent testing can be skipped if no SARs were filed', 'Testing is a program requirement independent of recent filing volume.', 'Use testing to assess whether decisions and controls are sound.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'Reg CC hold notice',
    prompt: 'Operations extended a deposit hold but did not send the required notice until after the customer complained. What should compliance do?',
    correct: 'Assess the Regulation CC timing failure, customer impact, root cause, and corrective action for future hold notices.',
    wrong: [
      ['Treat the complaint as closed because the funds eventually cleared', 'Delayed availability can still create a notice and timing issue.', 'Analyze the control failure even if the money later became available.'],
      ['Delete the hold reason to make the account history simpler', 'Altering records undermines the audit trail.', 'Maintain accurate records and remediate transparently.'],
      ['Assume branch discretion overrides notice requirements', 'Operational discretion does not remove regulatory notice obligations.', 'Procedures must support required notices.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'FCRA dispute handling',
    prompt: 'A customer disputes credit information the bank furnished to a consumer reporting agency. What is the best next action?',
    correct: 'Investigate the disputed information, report corrections when warranted, and document the FCRA furnisher response.',
    wrong: [
      ['Tell the customer to resolve it only with the credit bureau', 'Furnishers have investigation duties when disputes are received through applicable channels.', 'Coordinate the required furnisher process.'],
      ['Keep furnishing the same data without review', 'Continuing inaccurate data after notice can create risk.', 'Investigate and update as facts require.'],
      ['Remove all accurate tradelines to avoid work', 'Overcorrecting accurate information is not a sound compliance response.', 'Correct errors while preserving accurate reporting.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'Military Lending Act screen',
    prompt: 'A covered borrower may be receiving a consumer credit product with fees that affect the military annual percentage rate. What should compliance verify?',
    correct: 'Confirm covered-borrower status, MAPR calculation, product coverage, and required MLA disclosures before consummation.',
    wrong: [
      ['Apply ordinary APR rules only', 'The MLA uses MAPR concepts that can differ from ordinary APR treatment.', 'Use the MLA-specific calculation and coverage analysis.'],
      ['Ask the customer to waive MLA protections', 'Covered protections generally cannot be waived by convenience.', 'Design the product to comply rather than relying on waiver.'],
      ['Screen only after default', 'Covered-borrower screening is needed before extending covered credit.', 'Resolve MLA status before consummation.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'Reg P privacy notice',
    prompt: 'A product team wants to share nonpublic personal information with a new marketing partner. What should compliance review?',
    correct: 'Whether the sharing fits a Regulation P exception or requires notice and opt-out rights, plus contract and privacy controls.',
    wrong: [
      ['Approve sharing because the partner is popular', 'Vendor reputation does not determine privacy permissibility.', 'Analyze the sharing purpose and privacy rule.'],
      ['Rely on a general website privacy slogan', 'A slogan is not a substitute for required notices and opt-out handling.', 'Use specific privacy disclosures and controls.'],
      ['Delay review until after the first campaign', 'Privacy controls belong before customer information is shared.', 'Build compliance into the launch path.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'RESPA servicing error',
    prompt: 'A borrower sends a written notice alleging that mortgage servicing fees were misapplied. What should the bank do?',
    correct: 'Route it through the Regulation X error-resolution workflow, meet timing requirements, and preserve servicing evidence.',
    wrong: [
      ['Handle it only as an ordinary customer-service note', 'Mortgage servicing error notices can trigger specific procedural duties.', 'Identify regulated notices and route them correctly.'],
      ['Refuse to investigate because the borrower is delinquent', 'Delinquency does not erase servicing error-resolution obligations.', 'Investigate the claimed error on its facts.'],
      ['Change transaction codes without documenting the reason', 'Undocumented corrections weaken servicing records.', 'Maintain an audit trail for any adjustment.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'SCRA rate reduction',
    prompt: 'A servicemember provides orders and asks for relief on a pre-service obligation. What is the best compliance focus?',
    correct: 'Assess SCRA eligibility, apply required protections such as rate limits when applicable, and document the decision.',
    wrong: [
      ['Treat SCRA as optional hardship assistance', 'SCRA protections are legal obligations when criteria are met.', 'Analyze eligibility under the statute and procedures.'],
      ['Require the customer to be delinquent first', 'SCRA protections are not limited to delinquent accounts.', 'Focus on service status and obligation timing.'],
      ['Decline because the account is profitable', 'Profitability does not override servicemember protections.', 'Apply the rule consistently.'],
    ],
  },
  {
    chapter: 'CRCM Foundational Regulations',
    title: 'TCPA consent',
    prompt: 'Collections wants to use an automated dialing campaign to reach mobile numbers. What should compliance verify?',
    correct: 'Confirm consent, revocation handling, number source, message content, and TCPA operational controls before dialing.',
    wrong: [
      ['Dial first and remove people only after a lawsuit', 'TCPA exposure should be controlled before outreach starts.', 'Consent and revocation controls are preventive.'],
      ['Assume account ownership equals consent for all technology', 'Consent analysis depends on channel, number, and calling method.', 'Match consent to the planned communication.'],
      ['Use vendor assurances without testing files', 'Vendor statements do not replace bank oversight.', 'Validate the data and controls used for dialing.'],
    ],
  },
  {
    chapter: 'CRCM CMS',
    title: 'Third-party compliance risk',
    prompt: 'A vendor will provide scripts, disclosures, and transaction processing for a regulated product. What should compliance require?',
    correct: 'Risk-based due diligence, contractual compliance obligations, monitoring, reporting, and issue-escalation rights.',
    wrong: [
      ['Rely only on the vendor sales demo', 'A demo does not establish compliance control adequacy.', 'Review evidence, obligations, and oversight mechanisms.'],
      ['Treat outsourcing as transferring regulatory responsibility', 'The bank remains accountable for regulated activities performed by vendors.', 'Outsourcing requires oversight, not abdication.'],
      ['Review the vendor only after the first consumer harm occurs', 'Third-party risk management should happen before and during the relationship.', 'Use due diligence and ongoing monitoring.'],
    ],
  },
  {
    chapter: 'CRCM CMS',
    title: 'Risk-based monitoring plan',
    prompt: 'Compliance resources are limited, and several laws could be tested this quarter. What is the best planning approach?',
    correct: 'Prioritize monitoring based on risk assessment results, product changes, prior findings, complaint trends, and regulatory deadlines.',
    wrong: [
      ['Test topics alphabetically', 'Alphabetical order ignores risk and regulatory urgency.', 'Monitoring should be risk-based and explainable.'],
      ['Test only areas with no past issues', 'Clean areas may need periodic coverage, but known risks deserve attention.', 'Use risk signals to allocate resources.'],
      ['Let each business line choose whether it wants testing', 'Business input helps, but compliance must maintain independent risk-based coverage.', 'Govern the plan centrally with stakeholder input.'],
    ],
  },
  {
    chapter: 'CRCM CMS',
    title: 'Issue root cause',
    prompt: 'A repeat finding appears in multiple branches after earlier corrective action. What should compliance do?',
    correct: 'Reopen issue management, perform root-cause and scope analysis, strengthen corrective action, and validate sustainability.',
    wrong: [
      ['Close it again because the original due date passed', 'A due date does not prove remediation worked.', 'Validation must confirm the control is fixed.'],
      ['Blame only the newest branch employee', 'Repeat findings usually require process, training, system, or oversight analysis.', 'Look for root cause across the control environment.'],
      ['Create a new policy title without changing the process', 'Renaming documents does not remediate operating failures.', 'Correct the cause and test the fix.'],
    ],
  },
  {
    chapter: 'CRCM CMS',
    title: 'Regulatory change management',
    prompt: 'A final rule changes disclosure timing with a mandatory compliance date. What is the strongest CMS response?',
    correct: 'Assess impact, assign accountable owners, update procedures and systems, train affected staff, and validate implementation before the deadline.',
    wrong: [
      ['Wait for the first examiner question', 'Regulatory change management must be proactive.', 'Track requirements to implementation evidence.'],
      ['Forward the rule to everyone and assume it is handled', 'Email distribution alone does not establish implementation.', 'Assign owners, milestones, and validation.'],
      ['Update policy language but leave system logic unchanged', 'A disclosure timing change often requires operational and system controls.', 'Implementation must reach the process that produces the disclosure.'],
    ],
  },
  {
    chapter: 'CRCM CMS',
    title: 'Exam management response',
    prompt: 'Examiners identify a likely violation and ask for the bank response. What should compliance coordinate?',
    correct: 'Validate facts, determine scope and consumer impact, draft a clear response, and define corrective action with accountable timelines.',
    wrong: [
      ['Deny the finding before reviewing evidence', 'A reflexive denial can damage credibility.', 'Validate facts before taking a position.'],
      ['Promise immediate completion without a plan', 'Unrealistic commitments create follow-up risk.', 'Set achievable corrective actions and track them.'],
      ['Send raw files without explanation or quality review', 'Exam responses need accuracy, context, and control.', 'Prepare complete and reviewed materials.'],
    ],
  },
]

const ccepCompetencies: CredentialCompetency[] = [
  {
    chapter: 'CCEP Standards and Policies',
    title: 'Code of conduct alignment',
    prompt: 'The code of conduct conflicts with a sales incentive plan that rewards volume without regard to approval quality. What should the compliance professional recommend?',
    correct: 'Align incentives, code expectations, and controls so performance goals do not undermine compliant and ethical conduct.',
    wrong: [
      ['Keep the conflict because incentives are outside compliance scope', 'Incentives can materially affect compliance behavior.', 'Program design should address how people are rewarded.'],
      ['Rewrite the code to match any existing incentive', 'The code should express ethical expectations, not rationalize risky incentives.', 'Bring incentives into alignment with the program.'],
      ['Tell employees to use personal judgment without changing controls', 'Individual judgment helps but cannot compensate for conflicting structures.', 'Fix the system that drives behavior.'],
    ],
  },
  {
    chapter: 'CCEP Standards and Policies',
    title: 'Risk assessment design',
    prompt: 'The company uses a generic risk template copied from another industry. What is the best compliance critique?',
    correct: 'A credible risk assessment must reflect the company business model, geography, third parties, products, controls, and misconduct history.',
    wrong: [
      ['Generic templates are always sufficient if formatted professionally', 'Format does not prove risk relevance.', 'Risk assessment must be tailored to actual exposure.'],
      ['Only legal should know the risk assessment results', 'Program owners need risk information to design controls.', 'Communicate results to accountable stakeholders.'],
      ['Risk assessment is unnecessary after policies exist', 'Policies should be shaped by current risk assessment.', 'Risk drives program priorities.'],
    ],
  },
  {
    chapter: 'CCEP Administration',
    title: 'Board reporting',
    prompt: 'The board asks what information it should receive to oversee compliance effectively. What is the strongest answer?',
    correct: 'Provide risk-based metrics, significant issues, investigations, remediation status, resource needs, and changes in the risk profile.',
    wrong: [
      ['Report only that all policies exist', 'Policy existence says little about program performance.', 'Oversight needs operating evidence and risk context.'],
      ['Send every raw hotline note without triage', 'Raw unfiltered data can obscure the issues requiring oversight.', 'Summarize with escalation of significant matters.'],
      ['Avoid bad news to protect morale', 'The board needs material compliance issues to fulfill oversight responsibilities.', 'Escalate significant risks transparently.'],
    ],
  },
  {
    chapter: 'CCEP Administration',
    title: 'Compliance independence',
    prompt: 'A business leader wants final authority over whether allegations involving their team are investigated. What should compliance protect?',
    correct: 'Maintain appropriate independence, escalation rights, and investigation authority for credible compliance allegations.',
    wrong: [
      ['Let the implicated business leader decide the investigation scope', 'That creates conflict-of-interest and credibility problems.', 'Investigations need independence from implicated management.'],
      ['Cancel investigations that may hurt quarterly targets', 'Business targets do not override investigation obligations.', 'Investigate credible allegations through the established process.'],
      ['Route all allegations only to public relations', 'Communications may be involved later, but fact-finding and remediation need compliance ownership.', 'Start with proper investigation governance.'],
    ],
  },
  {
    chapter: 'CCEP Communication and Training',
    title: 'Role-based training',
    prompt: 'Annual training is complete, but high-risk teams cannot apply gift, antitrust, or third-party rules to real scenarios. What is the best response?',
    correct: 'Add targeted, role-based training and measure whether employees can apply the rules in their actual workflows.',
    wrong: [
      ['Declare success because completion is 100 percent', 'Completion is useful but does not prove comprehension or application.', 'Measure effectiveness, not attendance alone.'],
      ['Train only new hires forever', 'Existing employees in changing risk areas also need training.', 'Match training to role, risk, and timing.'],
      ['Replace all training with policy links', 'Policies support training but do not ensure practical understanding.', 'Use applied examples for high-risk roles.'],
    ],
  },
  {
    chapter: 'CCEP Reporting Systems',
    title: 'Non-retaliation',
    prompt: 'Employees say they do not report concerns because prior reporters were excluded from opportunities. What is the best compliance action?',
    correct: 'Investigate retaliation risk, enforce non-retaliation expectations, protect reporters, and report culture metrics to leadership.',
    wrong: [
      ['Focus only on increasing hotline posters', 'Awareness materials do not fix retaliation concerns.', 'Address whether reporting is actually safe.'],
      ['Ask reporters to accept career consequences as normal', 'Retaliation undermines the program and speak-up culture.', 'Protect reporters and hold retaliators accountable.'],
      ['Shut down anonymous reporting to reduce complaints', 'Removing channels can suppress detection.', 'Strengthen trust and triage instead.'],
    ],
  },
  {
    chapter: 'CCEP Reporting Systems',
    title: 'Investigation triage',
    prompt: 'A report alleges misconduct that could involve senior management and financial records. What should compliance do first?',
    correct: 'Triage severity, preserve evidence, manage conflicts, involve appropriate legal or audit resources, and document the investigation plan.',
    wrong: [
      ['Ask the accused executive to collect the evidence', 'That risks evidence integrity and conflicts.', 'Preserve evidence through independent channels.'],
      ['Wait until the next annual audit', 'Serious allegations require timely triage.', 'Act promptly based on severity and risk.'],
      ['Interview everyone publicly at once', 'Public, unfocused interviews can compromise confidentiality and fact-finding.', 'Use a controlled investigation plan.'],
    ],
  },
  {
    chapter: 'CCEP Enforcement and Discipline',
    title: 'Consistent discipline',
    prompt: 'Two employees committed similar policy violations, but one is a top performer. What should compliance recommend?',
    correct: 'Apply discipline consistently, considering relevant facts, role, intent, and precedent rather than sales value.',
    wrong: [
      ['Ignore the top performer violation to protect revenue', 'Selective enforcement damages program credibility.', 'Consistency is central to effective compliance.'],
      ['Punish only junior employees because they are easier to replace', 'Discipline based on status undermines fairness and deterrence.', 'Use facts and precedent.'],
      ['Never document discipline decisions', 'Undocumented discipline weakens defensibility.', 'Document rationale and consistency.'],
    ],
  },
  {
    chapter: 'CCEP Third-Party Risk',
    title: 'Third-party due diligence',
    prompt: 'A consultant requests payment through an unrelated offshore entity after promising government access. What is the best response?',
    correct: 'Pause onboarding, escalate red flags, conduct enhanced due diligence, and resolve ownership, services, and payment legitimacy before approval.',
    wrong: [
      ['Approve because the consultant may increase sales', 'Commercial upside does not neutralize corruption and payment red flags.', 'Resolve red flags before engagement.'],
      ['Split the payment into smaller invoices', 'Structuring payments can worsen the control concern.', 'Payment transparency is essential.'],
      ['Use a verbal contract to move faster', 'Verbal arrangements are weak controls for high-risk third parties.', 'Use documented scope, approvals, and monitoring.'],
    ],
  },
  {
    chapter: 'CCEP Risk Areas',
    title: 'Conflict of interest',
    prompt: 'A procurement manager owns part of a supplier but says the supplier offers the best price. What should compliance require?',
    correct: 'Require disclosure, conflict review, recusal where appropriate, and documented approval or mitigation before the supplier decision.',
    wrong: [
      ['Approve automatically if the price is low', 'A favorable price does not eliminate conflict risk.', 'Review influence, disclosure, and mitigation.'],
      ['Ban all relationships without review', 'Some conflicts can be managed, but they must be disclosed and evaluated.', 'Use a structured conflict process.'],
      ['Let the manager decide whether the conflict matters', 'Self-review is not a reliable mitigation.', 'Use independent review and recusal where needed.'],
    ],
  },
  {
    chapter: 'CCEP Risk Areas',
    title: 'FCPA red flags',
    prompt: 'A distributor in a high-risk country asks for a large success fee and refuses audit rights. What is the best compliance position?',
    correct: 'Treat the request as an anti-corruption red flag requiring enhanced review, contract controls, and approval before proceeding.',
    wrong: [
      ['Approve because success fees are never risky', 'Success fees can be legitimate but may create bribery risk in context.', 'Review the facts and controls.'],
      ['Avoid written terms so audit rights are not needed', 'Lack of written terms increases risk.', 'Use contracts, audit rights, and payment controls.'],
      ['Assume local custom overrides company policy', 'Local practice does not override anti-corruption obligations.', 'Apply policy and law consistently.'],
    ],
  },
  {
    chapter: 'CCEP Risk Areas',
    title: 'Antitrust meeting risk',
    prompt: 'At a trade association meeting, competitors begin discussing future prices and customer allocation. What should the employee do?',
    correct: 'Object, leave if the discussion continues, ensure departure is recorded, and report the incident through compliance channels.',
    wrong: [
      ['Stay silent and listen for market intelligence', 'Listening to improper competitor discussions can still create risk.', 'Distance the company and report.'],
      ['Share the company pricing plan to be transparent', 'Sharing future pricing with competitors is a serious antitrust risk.', 'Do not exchange competitively sensitive information.'],
      ['Assume trade associations are exempt from antitrust rules', 'Trade associations are not safe zones for collusion.', 'The content of the discussion matters.'],
    ],
  },
  {
    chapter: 'CCEP Risk Areas',
    title: 'Confidential information',
    prompt: 'A manager wants to upload confidential customer and employee data to an unapproved AI tool to summarize complaints. What should compliance advise?',
    correct: 'Stop the upload until privacy, confidentiality, information security, approved-use, and vendor controls are assessed.',
    wrong: [
      ['Approve because the tool is efficient', 'Efficiency does not override confidentiality and privacy obligations.', 'Evaluate data use and vendor controls first.'],
      ['Remove only obvious names and ignore remaining sensitive data', 'Partial de-identification may not address all confidentiality or reidentification risk.', 'Assess the full data set and tool use.'],
      ['Let each manager choose any tool personally', 'Uncontrolled tool selection undermines governance.', 'Use approved technology and data-handling controls.'],
    ],
  },
  {
    chapter: 'CCEP Risk Areas',
    title: 'Records hold',
    prompt: 'The company receives notice of a government inquiry, and routine deletion will purge relevant messages in two days. What is the proper action?',
    correct: 'Issue and enforce a legal hold, suspend routine deletion for relevant records, and preserve evidence according to counsel direction.',
    wrong: [
      ['Let deletion continue because it is routine', 'Routine deletion may need to stop once preservation duties arise.', 'Preserve potentially relevant records.'],
      ['Ask employees to decide individually what matters', 'Individual unsupervised decisions risk inconsistent preservation.', 'Use a coordinated hold process.'],
      ['Delete faster before the inquiry expands', 'Accelerating deletion can create obstruction risk.', 'Preserve and document.'],
    ],
  },
  {
    chapter: 'CCEP Monitoring and Auditing',
    title: 'Monitoring vs auditing',
    prompt: 'Leadership asks whether ongoing transaction analytics can replace periodic independent audits. What is the best answer?',
    correct: 'Use monitoring and auditing as complementary controls: monitoring detects patterns continuously, while audits independently test design and operation.',
    wrong: [
      ['Monitoring always replaces audit work', 'Continuous monitoring is useful but does not provide the same independent assurance.', 'Use both according to risk.'],
      ['Audits are useful only after misconduct is proven', 'Audits can identify control weaknesses before misconduct is confirmed.', 'Assurance should be proactive.'],
      ['Neither matters if policies are signed', 'Signed policies do not prove controls work.', 'Test and monitor actual behavior.'],
    ],
  },
  {
    chapter: 'CCEP Mergers and Acquisitions',
    title: 'Post-acquisition integration',
    prompt: 'A newly acquired company has no hotline, no third-party files, and inconsistent gift practices. What should compliance do?',
    correct: 'Perform risk-based integration: triage urgent risks, extend reporting channels and policies, review third parties, and set remediation timelines.',
    wrong: [
      ['Wait until the acquired company has a violation', 'Integration should reduce risk before problems surface.', 'Bring the acquired entity into the program promptly.'],
      ['Assume diligence ended at closing', 'Post-closing integration is part of effective compliance.', 'Convert diligence findings into remediation.'],
      ['Apply every control instantly without prioritization', 'Immediate blanket changes may be unrealistic and miss urgent risks.', 'Use risk-based sequencing.'],
    ],
  },
  {
    chapter: 'CCEP Response and Prevention',
    title: 'Root cause remediation',
    prompt: 'An investigation confirms misconduct and shows prior warnings were ignored. What is the strongest remediation plan?',
    correct: 'Address discipline, harmed parties, control failures, ignored signals, training gaps, and management accountability, then validate the fixes.',
    wrong: [
      ['Discipline one employee and close the matter without control review', 'Misconduct often reveals system weaknesses beyond one person.', 'Remediate root causes and validate.'],
      ['Add a policy appendix no one owns', 'Paper changes without owners and testing rarely fix behavior.', 'Assign action owners and evidence requirements.'],
      ['Suppress the investigation report to avoid lessons learned', 'Avoiding analysis prevents program improvement.', 'Use findings to improve controls while managing privilege appropriately.'],
    ],
  },
  {
    chapter: 'CCEP Administration',
    title: 'Escalation criteria',
    prompt: 'A compliance manager is unsure whether an issue should go to senior management or the board. What factor matters most?',
    correct: 'Escalate based on severity, legal exposure, senior involvement, control breakdown, potential harm, and risk appetite thresholds.',
    wrong: [
      ['Escalate only issues that are already public', 'Private issues can be material and require oversight.', 'Use risk and severity, not publicity.'],
      ['Never escalate if business leaders object', 'Business discomfort is not a valid reason to suppress material issues.', 'Escalation criteria should be independent.'],
      ['Escalate every minor typo to the board', 'Over-escalating immaterial issues can obscure real risks.', 'Use defined thresholds.'],
    ],
  },
  {
    chapter: 'CCEP Standards and Policies',
    title: 'Policy lifecycle',
    prompt: 'A policy has not been reviewed since a major regulatory and business model change. What should compliance do?',
    correct: 'Update the policy through controlled review, stakeholder approval, communication, training, and version history.',
    wrong: [
      ['Leave it alone because employees once acknowledged it', 'Old acknowledgement does not ensure current relevance.', 'Policies need lifecycle governance.'],
      ['Quietly overwrite it with no approval record', 'Uncontrolled changes weaken accountability.', 'Use review, approval, and version control.'],
      ['Archive it without checking dependent procedures', 'Procedures may rely on the policy.', 'Assess downstream impacts before retirement.'],
    ],
  },
  {
    chapter: 'CCEP Monitoring and Auditing',
    title: 'Data analytics signal',
    prompt: 'Analytics show that exceptions cluster around one approver at month-end. What should compliance do?',
    correct: 'Use the signal to prioritize targeted review, compare against policy requirements, and determine whether escalation or control changes are needed.',
    wrong: [
      ['Ignore the pattern because analytics are not interviews', 'Data signals can reveal risks worth investigating.', 'Use analytics to focus follow-up.'],
      ['Accuse the approver publicly without review', 'A pattern is not proof of misconduct by itself.', 'Validate facts through a fair process.'],
      ['Turn off the report because it creates work', 'Suppressing risk signals weakens the program.', 'Improve triage and ownership.'],
    ],
  },
]

const amlCompetencies: CredentialCompetency[] = [
  {
    chapter: 'AML Foundations',
    title: 'Customer identification',
    prompt: 'The customer file lacks enough information to form a reasonable belief about identity. What should the AML professional do?',
    correct: 'Follow CIP procedures to obtain, verify, and document required identifying information before treating onboarding as complete.',
    wrong: [
      ['Open the account because the relationship manager recognizes the customer', 'Personal familiarity does not replace required CIP controls.', 'Identity verification must follow documented procedures.'],
      ['Collect identity information only after the first suspicious alert', 'CIP is an onboarding requirement, not only an investigation step.', 'Verify identity before account opening is complete.'],
      ['Use a nickname as the primary legal name', 'Nicknames do not provide reliable legal identity.', 'Record and verify required identifying information.'],
    ],
  },
  {
    chapter: 'AML Foundations',
    title: 'Customer due diligence',
    prompt: 'Expected activity in the customer profile does not match actual transaction behavior. What is the best AML response?',
    correct: 'Review and update CDD as appropriate, investigate the inconsistency, and decide whether escalation is warranted.',
    wrong: [
      ['Ignore the difference because CDD is only an onboarding form', 'CDD supports ongoing monitoring and risk understanding.', 'Use CDD throughout the relationship.'],
      ['Automatically exit every customer with a profile mismatch', 'Mismatch requires review, not automatic exit in every case.', 'Investigate facts and apply risk-based decisions.'],
      ['Change expected activity to match transactions without support', 'Backfilling expectations to fit activity undermines monitoring.', 'Document a legitimate basis for updates.'],
    ],
  },
  {
    chapter: 'AML Foundations',
    title: 'Beneficial ownership',
    prompt: 'A legal entity customer provides ownership documents that obscure who controls the company. What should the AML team prioritize?',
    correct: 'Obtain and verify required beneficial ownership and control information according to risk-based procedures.',
    wrong: [
      ['Accept the entity name as the only owner', 'Legal entity names do not identify the natural persons who own or control the entity.', 'Look through the entity as required.'],
      ['Skip ownership review because the account is profitable', 'Profitability does not remove beneficial ownership obligations.', 'Apply requirements consistently.'],
      ['Ask only for a marketing brochure', 'A brochure is not reliable ownership or control evidence.', 'Use appropriate documentation and certification processes.'],
    ],
  },
  {
    chapter: 'Suspicious Activity',
    title: 'SAR decisioning',
    prompt: 'The investigation finds no clear lawful purpose and multiple red flags, but the dollar amount is not large. What should guide the SAR decision?',
    correct: 'Use the SAR criteria, suspicious pattern, and documented facts rather than relying only on transaction size.',
    wrong: [
      ['Never file unless the amount is enormous', 'Suspicious activity is not determined solely by large dollar value.', 'Evaluate red flags and regulatory thresholds.'],
      ['File only if the customer confesses', 'Banks often file based on reasonable suspicion, not admissions.', 'Use documented facts and analysis.'],
      ['Close the case because red flags are inconvenient', 'Operational burden is not a reason to ignore suspicious activity.', 'Escalate and document the rationale.'],
    ],
  },
  {
    chapter: 'Suspicious Activity',
    title: 'SAR confidentiality',
    prompt: 'A customer asks whether the bank is filing a SAR about their account. What is the proper response?',
    correct: 'Do not disclose SAR existence or nonexistence; follow internal escalation and communication procedures.',
    wrong: [
      ['Confirm the SAR so the customer can explain', 'SAR confidentiality prohibits disclosure to the subject.', 'Collect information without revealing SAR decisions.'],
      ['Deny a SAR was filed even if unsure', 'Improvised statements create risk.', 'Use approved communication procedures.'],
      ['Email the draft SAR to the customer for accuracy', 'Sharing SAR content with the subject violates confidentiality principles.', 'Keep SAR materials restricted.'],
    ],
  },
  {
    chapter: 'Currency Reporting',
    title: 'CTR aggregation',
    prompt: 'Several cash transactions by or on behalf of the same person exceed the daily reporting threshold when aggregated. What should the bank do?',
    correct: 'Aggregate known reportable cash transactions and file a CTR when the regulatory threshold and criteria are met.',
    wrong: [
      ['Treat each cash transaction separately forever', 'CTR rules can require aggregation when the bank has knowledge.', 'Aggregate by the rule and facts.'],
      ['Avoid filing because each transaction was under the threshold', 'Multiple transactions can trigger reporting when aggregated.', 'Look at daily total and person relationship.'],
      ['File only if the customer used the word cash', 'Currency reporting depends on actual currency transactions, not customer wording.', 'Analyze transaction type and amount.'],
    ],
  },
  {
    chapter: 'Currency Reporting',
    title: 'Structuring',
    prompt: 'The pattern suggests transactions may be arranged to avoid a reporting requirement. What is the best AML action?',
    correct: 'Investigate for structuring, document the pattern and purpose indicators, and file a SAR if suspicion is supported.',
    wrong: [
      ['Tell the customer exactly how to stay under thresholds', 'Coaching evasion is improper and heightens risk.', 'Do not help structure transactions.'],
      ['Ignore it because no single transaction exceeds the threshold', 'Structuring can involve transactions below a threshold.', 'Evaluate intent and pattern.'],
      ['Automatically close the account without documenting analysis', 'Exit may be appropriate sometimes, but the SAR analysis still needs documentation.', 'Investigate and record the decision path.'],
    ],
  },
  {
    chapter: 'Sanctions and OFAC',
    title: 'Potential sanctions hit',
    prompt: 'Screening returns a close name and geography match to a sanctions target. What should the AML team do?',
    correct: 'Follow sanctions escalation, determine whether it is a true match, block or reject if required, and retain decision evidence.',
    wrong: [
      ['Release the transaction because most alerts are false positives', 'False-positive rates do not justify skipping review.', 'Resolve the alert based on match criteria.'],
      ['Ask the customer whether they are sanctioned and rely on the answer', 'Self-certification is not enough for a sanctions match.', 'Use evidence-based sanctions review.'],
      ['Delete the alert to avoid delaying the customer', 'Deleting unresolved alerts destroys the control record.', 'Document disposition and required action.'],
    ],
  },
  {
    chapter: 'Enhanced Due Diligence',
    title: 'High-risk customer review',
    prompt: 'A customer risk profile includes high cash volume, foreign counterparties, and opaque ownership. What should the AML program require?',
    correct: 'Apply enhanced due diligence proportionate to risk, including deeper ownership, source of funds, expected activity, and monitoring review.',
    wrong: [
      ['Use the same review as a low-risk payroll account', 'Higher-risk profiles require more robust review.', 'Scale diligence to risk.'],
      ['Approve solely because no SAR has been filed yet', 'Absence of prior SARs does not eliminate risk.', 'Assess current risk factors directly.'],
      ['Lower the risk rating to reduce workload', 'Changing ratings to manage workload undermines the risk model.', 'Resource decisions should follow risk, not erase it.'],
    ],
  },
  {
    chapter: 'Enhanced Due Diligence',
    title: 'Foreign correspondent banking',
    prompt: 'A foreign financial institution seeks a correspondent account and has weak AML supervision in its home country. What is required?',
    correct: 'Perform risk-based due diligence and enhanced controls appropriate to correspondent banking risk before approving the relationship.',
    wrong: [
      ['Open the account first and review it after a year', 'Correspondent banking risk requires diligence before and during the relationship.', 'Complete required review before approval.'],
      ['Rely only on the foreign bank logo', 'Branding is not evidence of AML control quality.', 'Review supervision, ownership, controls, and expected activity.'],
      ['Skip review because only banks are involved', 'Bank-to-bank relationships can carry significant AML risk.', 'Correspondent accounts require specialized diligence.'],
    ],
  },
  {
    chapter: 'Enhanced Due Diligence',
    title: 'Private banking risk',
    prompt: 'A private banking client has foreign political exposure and complex source-of-wealth information. What should the AML team do?',
    correct: 'Conduct enhanced review of source of wealth, source of funds, beneficial ownership, expected activity, and senior approval requirements.',
    wrong: [
      ['Treat wealth as proof of low risk', 'Wealth does not eliminate corruption or laundering risk.', 'Assess source and political exposure.'],
      ['Avoid documenting sensitive facts', 'Sensitive facts still need controlled documentation.', 'Document analysis with appropriate confidentiality.'],
      ['Let the relationship manager approve alone', 'High-risk private banking often needs independent AML review and escalation.', 'Use senior and compliance approvals where required.'],
    ],
  },
  {
    chapter: 'Information Sharing',
    title: '314(a) request',
    prompt: 'The bank receives a law enforcement information-sharing request through the proper channel. What is the correct approach?',
    correct: 'Search required records within the prescribed process, maintain confidentiality, and report matches as required.',
    wrong: [
      ['Forward the request to all customers for comment', 'Information-sharing requests are confidential.', 'Limit access and follow the secure process.'],
      ['Ignore it because no subpoena arrived', '314(a) has its own required process.', 'Respond according to the request procedures.'],
      ['Report every similar name without review', 'Overbroad reporting can reduce quality.', 'Search and validate according to instructions.'],
    ],
  },
  {
    chapter: 'Recordkeeping',
    title: 'Monetary instruments',
    prompt: 'A noncustomer purchases monetary instruments with currency near recordkeeping thresholds. What should the bank ensure?',
    correct: 'Apply monetary instrument recordkeeping rules, collect required purchaser information, and evaluate suspicious patterns.',
    wrong: [
      ['Treat monetary instruments as outside BSA controls', 'Monetary instruments have specific recordkeeping requirements.', 'Apply the relevant BSA rule.'],
      ['Skip records because the person is not a customer', 'Noncustomer transactions can still trigger recordkeeping.', 'Collect required information based on transaction type.'],
      ['Split the sale into separate receipts to avoid documentation', 'Splitting to avoid records is a control failure and possible red flag.', 'Document according to the rule.'],
    ],
  },
  {
    chapter: 'Recordkeeping',
    title: 'Funds transfer information',
    prompt: 'A payment operation lacks required originator or beneficiary information for covered funds transfers. What should AML operations do?',
    correct: 'Apply funds transfer recordkeeping and travel rule procedures, repair missing information, and evaluate recurring defects.',
    wrong: [
      ['Process all transfers regardless of missing required information', 'Covered transfers may require specific records and transmitted information.', 'Use repair or reject procedures as appropriate.'],
      ['Delete incomplete records after settlement', 'Record retention is part of BSA compliance.', 'Preserve required records.'],
      ['Treat repeated missing information as a technology-only issue', 'System defects can create compliance and suspicious activity concerns.', 'Investigate root cause and pattern.'],
    ],
  },
  {
    chapter: 'Program Governance',
    title: 'Independent testing',
    prompt: 'The AML program has not been independently tested after major product and system changes. What is the risk?',
    correct: 'The bank lacks independent assurance that controls remain designed and operating effectively after risk changes.',
    wrong: [
      ['Testing is unnecessary if the BSA officer is experienced', 'Experience does not replace independent testing.', 'Use independent review to validate the program.'],
      ['Testing only needs to check whether policies have titles', 'Testing should assess design and operating effectiveness.', 'Review evidence of actual control performance.'],
      ['Product changes reduce the need for testing', 'Change often increases the need to validate controls.', 'Test after meaningful risk or system changes.'],
    ],
  },
  {
    chapter: 'Monitoring Systems',
    title: 'Alert tuning governance',
    prompt: 'A proposed tuning change will reduce alerts by 60 percent. What should AML governance require?',
    correct: 'Document rationale, data analysis, risk impact, approvals, validation, and post-implementation monitoring before relying on the change.',
    wrong: [
      ['Approve solely because fewer alerts save time', 'Efficiency is not enough if suspicious activity detection weakens.', 'Balance effectiveness and efficiency.'],
      ['Change thresholds without retaining old logic', 'Loss of change history weakens model governance.', 'Preserve rationale and version control.'],
      ['Let one analyst change production rules informally', 'Production monitoring logic needs controlled approval.', 'Use governance for scenario changes.'],
    ],
  },
  {
    chapter: 'Trade and AML',
    title: 'Trade finance red flags',
    prompt: 'Invoices appear overvalued, goods descriptions are vague, and counterparties are in unrelated jurisdictions. What should the AML analyst do?',
    correct: 'Investigate for trade-based money laundering indicators, compare documents to expected business, and escalate if suspicion remains.',
    wrong: [
      ['Assume all trade documents are accurate because they are formal', 'Formal documents can still be used to disguise value or parties.', 'Review substance and consistency.'],
      ['Ignore goods descriptions because AML only covers cash', 'AML risk includes trade finance and noncash movement of value.', 'Apply AML review to trade activity.'],
      ['Approve if the customer promises the shipment is urgent', 'Urgency does not resolve red flags.', 'Complete risk-based review before approval.'],
    ],
  },
  {
    chapter: 'PEP and Adverse Media',
    title: 'Politically exposed person',
    prompt: 'Screening identifies a senior foreign political figure connected to an account through ownership. What is the best response?',
    correct: 'Evaluate PEP risk, source of wealth, source of funds, ownership/control, adverse media, and approval or exit criteria.',
    wrong: [
      ['Automatically treat every PEP as prohibited', 'PEP status creates higher risk but not always automatic prohibition.', 'Apply risk-based EDD and approval rules.'],
      ['Ignore indirect ownership connections', 'Control and ownership links can matter for PEP risk.', 'Look through the relationship structure.'],
      ['Avoid adverse media review to reduce bias', 'Adverse media, handled carefully, is relevant to risk assessment.', 'Use reliable sources and documented analysis.'],
    ],
  },
]

const bankAmlRoadmapCompetencies: CredentialCompetency[] = [
  {
    chapter: 'Bank AML Roadmap',
    title: 'Enterprise risk assessment',
    prompt: 'The bank wants a roadmap for the next AML program year. What should come first?',
    correct: 'Update the BSA/AML risk assessment so products, customers, geographies, channels, and controls drive priorities.',
    wrong: [
      ['Start by buying a new monitoring tool without defining risks', 'Tools should support risk priorities, not substitute for them.', 'Let the risk assessment shape the roadmap.'],
      ['Copy last year plan exactly', 'Risk profiles change with products, customers, and external threats.', 'Refresh priorities with current evidence.'],
      ['Ask each branch to choose unrelated projects', 'Local input helps, but the roadmap needs enterprise risk logic.', 'Coordinate priorities centrally.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Policy governance',
    prompt: 'AML procedures conflict across branches and systems. What is the best roadmap action?',
    correct: 'Create controlled policy and procedure governance with owners, version control, approval, training, and implementation evidence.',
    wrong: [
      ['Let every branch keep its own unofficial procedure', 'Inconsistent procedures create uneven controls.', 'Standardize where possible and govern exceptions.'],
      ['Archive procedures so conflicts are less visible', 'Removing procedures does not fix control gaps.', 'Clarify requirements and ownership.'],
      ['Update only the policy title page', 'Cosmetic updates do not align operations.', 'Drive changes into procedures and training.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'BSA officer authority',
    prompt: 'The BSA officer lacks resources and cannot escalate unresolved issues. What should the roadmap address?',
    correct: 'Define BSA officer authority, independence, reporting lines, staffing, and escalation rights commensurate with the bank risk profile.',
    wrong: [
      ['Move all decisions to sales leadership', 'Sales ownership can conflict with AML independence.', 'BSA governance needs authority and escalation.'],
      ['Treat resource gaps as personal time-management issues', 'Persistent resource gaps can impair program effectiveness.', 'Assess staffing against risk and workload.'],
      ['Remove board reporting to simplify operations', 'Board and senior management oversight are central to governance.', 'Improve reporting rather than suppressing it.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Internal controls',
    prompt: 'The bank has policies but no evidence that controls operate consistently. What should the roadmap build?',
    correct: 'Implement control activities, evidence capture, exception handling, quality assurance, and management reporting tied to AML risks.',
    wrong: [
      ['Assume written policies equal effective controls', 'Policies need operating practices and evidence.', 'Design controls that can be tested.'],
      ['Track only successful transactions', 'Exceptions often reveal whether controls work.', 'Capture both completion and exception evidence.'],
      ['Rely on informal branch memory', 'Memory is not a sustainable control.', 'Use documented workflows and records.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Training map',
    prompt: 'Training completion is high, but errors cluster in cash handling and business account onboarding. What should the roadmap do?',
    correct: 'Map training to job roles and error patterns, then add targeted modules and effectiveness checks for affected teams.',
    wrong: [
      ['Repeat the same generic module for everyone', 'Generic training may not address role-specific errors.', 'Use risk and performance data to tailor training.'],
      ['Stop training because completion is high', 'Completion does not prove correct execution.', 'Measure understanding and behavior.'],
      ['Train only the compliance department', 'Front-line and operations staff often own key AML controls.', 'Train appropriate personnel by role.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Independent test plan',
    prompt: 'The prior audit missed a system conversion that affected alert generation. What should the roadmap require?',
    correct: 'Scope independent testing to cover material system, product, and risk changes, including data integrity and scenario operation.',
    wrong: [
      ['Test only the same sample as last year', 'A static scope can miss new risks.', 'Scope testing around current risk and change.'],
      ['Exclude technology because AML owns policy', 'AML effectiveness depends on systems and data.', 'Include data and system controls.'],
      ['Use only self-certifications from process owners', 'Self-certifications are not independent testing.', 'Obtain independent assurance.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Customer risk rating',
    prompt: 'Customer risk scores are rarely updated after onboarding. What should the roadmap include?',
    correct: 'Implement event-driven and periodic risk-rating refreshes using CDD changes, transaction behavior, adverse media, and product use.',
    wrong: [
      ['Freeze risk ratings permanently', 'Customer risk can change materially over time.', 'Refresh ratings based on events and periodic reviews.'],
      ['Lower scores automatically after six months', 'Time alone does not reduce risk.', 'Use evidence of actual risk changes.'],
      ['Let relationship managers override scores without review', 'Uncontrolled overrides weaken risk classification.', 'Govern overrides with rationale and approval.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Alert lifecycle',
    prompt: 'Alerts age because ownership is unclear between operations and investigations. What should the roadmap define?',
    correct: 'Define alert ownership, service levels, escalation paths, quality review, closure standards, and aging metrics.',
    wrong: [
      ['Let alerts stay open until someone has time', 'Unmanaged aging weakens suspicious activity detection.', 'Use ownership and service levels.'],
      ['Close old alerts automatically without review', 'Age does not remove the need for disposition.', 'Triage and document closure.'],
      ['Measure only total alerts created', 'Volume alone does not show investigation quality or timeliness.', 'Track aging, outcomes, and quality.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'SAR narrative quality',
    prompt: 'SAR filings are timely, but narratives often omit who, what, when, where, why, and how. What should the roadmap add?',
    correct: 'Add SAR quality standards, reviewer checklists, analyst coaching, and feedback loops from QA or audit findings.',
    wrong: [
      ['Focus only on filing speed', 'Timeliness matters, but poor narratives reduce usefulness.', 'Balance timeliness with quality.'],
      ['Use vague boilerplate for every SAR', 'Boilerplate can obscure facts and suspicion.', 'Write fact-specific narratives.'],
      ['Remove quality review to reduce cycle time', 'Quality review helps ensure useful and defensible filings.', 'Improve workflow rather than eliminating review.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'CTR exempt persons',
    prompt: 'The bank exempts business customers from CTR filing but has weak annual review evidence. What should the roadmap address?',
    correct: 'Strengthen exemption eligibility review, annual monitoring, revocation criteria, and documentation for exempt-person decisions.',
    wrong: [
      ['Keep exemptions forever once granted', 'Exemption eligibility can change and requires review.', 'Monitor continued eligibility.'],
      ['Exempt any frequent cash customer', 'Frequent cash activity alone does not establish exemption eligibility.', 'Apply the rule and document analysis.'],
      ['Stop monitoring exempt customers entirely', 'Exemption from CTR filing does not eliminate AML monitoring.', 'Continue risk-based monitoring.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'OFAC governance',
    prompt: 'Screening is performed by several systems with inconsistent disposition codes. What should the roadmap prioritize?',
    correct: 'Standardize sanctions screening governance, match criteria, disposition codes, escalation, quality assurance, and record retention.',
    wrong: [
      ['Let each system define a match differently without documentation', 'Inconsistency weakens sanctions controls.', 'Standardize and document disposition logic.'],
      ['Turn off screening where false positives are high', 'High false positives call for tuning and QA, not uncontrolled shutdown.', 'Improve effectiveness and efficiency with governance.'],
      ['Rely on customers to self-report sanctions status', 'Sanctions controls cannot depend on customer self-identification alone.', 'Use screening and escalation controls.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Board reporting metrics',
    prompt: 'The board package lists AML activities but does not show risk, trends, or unresolved issues. What should be added?',
    correct: 'Add concise metrics on risk profile, alerts, SARs, CTRs, sanctions, training, testing, issue aging, and resource constraints.',
    wrong: [
      ['Send only the full procedure manual quarterly', 'A manual is not a board oversight dashboard.', 'Report risk and performance indicators.'],
      ['Hide issue aging until all items are closed', 'Aging issues are relevant to oversight.', 'Show status and accountability.'],
      ['Use only positive metrics', 'One-sided reporting undermines oversight.', 'Include meaningful problems and trends.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Issue management',
    prompt: 'Audit findings recur because corrective actions are closed based on manager attestation. What should change?',
    correct: 'Require root-cause analysis, action evidence, independent validation, owners, due dates, and escalation for overdue or failed fixes.',
    wrong: [
      ['Close findings when a manager promises improvement', 'Promises do not prove remediation.', 'Validate action effectiveness.'],
      ['Create a new finding each year without connecting them', 'Recurring issues need root-cause and trend analysis.', 'Manage repeat findings as program risks.'],
      ['Avoid escalation to keep reports clean', 'Suppressing overdue issues weakens governance.', 'Escalate material or stale issues.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Data lineage',
    prompt: 'Monitoring scenarios depend on customer and transaction fields from multiple systems. What should the roadmap include?',
    correct: 'Document data lineage, completeness, transformations, reconciliations, change controls, and ownership for AML-critical data.',
    wrong: [
      ['Assume data is correct because reports run daily', 'A report can run daily with incomplete or mis-mapped data.', 'Validate data feeding AML controls.'],
      ['Let technology own all data issues without AML review', 'AML owns the compliance impact of monitoring data quality.', 'Use joint ownership and controls.'],
      ['Ignore transformations between systems', 'Transformations can change meaning or completeness.', 'Trace data from source to alert.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'New product AML review',
    prompt: 'A fintech partnership will introduce instant payments and new customer acquisition channels. What should the roadmap require?',
    correct: 'Embed AML review in product change management, including risk assessment, controls, monitoring, sanctions, training, and vendor oversight.',
    wrong: [
      ['Launch first and assess AML after volume grows', 'New products can create immediate AML risks.', 'Assess risks before launch.'],
      ['Assume fintech partners own all compliance duties', 'The bank remains accountable for its program and relationships.', 'Oversee partner controls.'],
      ['Use old monitoring scenarios without testing fit', 'New payment features can change risk patterns.', 'Validate scenario coverage.'],
    ],
  },
  {
    chapter: 'Bank AML Roadmap',
    title: 'Exam readiness',
    prompt: 'The bank expects a BSA/AML examination next quarter. What evidence should the roadmap organize?',
    correct: 'Prepare risk assessment, program documents, monitoring evidence, filings, QA, training, testing, issues, board reports, and change records.',
    wrong: [
      ['Create evidence only after examiners ask', 'Exam readiness depends on maintained records, not last-minute assembly.', 'Keep evidence current and retrievable.'],
      ['Provide policies without operating records', 'Policies alone do not show implementation.', 'Include evidence that controls worked.'],
      ['Coach staff to avoid discussing known gaps', 'Concealing gaps damages credibility.', 'Explain gaps, remediation, and ownership accurately.'],
    ],
  },
]

const customsCompetencies: CredentialCompetency[] = [
  {
    chapter: 'Customs Broker Entry Practice',
    title: 'Reasonable care',
    prompt: 'The importer wants to rely on a vague product description for entry. What should a broker do?',
    correct: 'Request sufficient product, value, origin, and admissibility information so the entry can be made with reasonable care.',
    wrong: [
      ['File immediately because speed is the only broker duty', 'Speed does not replace reasonable care in customs business.', 'Obtain enough facts to support the entry.'],
      ['Use the highest duty rate without analysis', 'Overpaying does not cure classification or admissibility errors.', 'Classify and declare based on evidence.'],
      ['Let the carrier choose the tariff number', 'Classification is part of customs business requiring informed review.', 'Use proper broker and importer diligence.'],
    ],
  },
  {
    chapter: 'Customs Broker Classification',
    title: 'GRI sequence',
    prompt: 'Two HTS headings could apply to a product. What is the correct classification method?',
    correct: 'Apply the General Rules of Interpretation in order, using section and chapter notes and the terms of the headings.',
    wrong: [
      ['Choose the heading with the lowest duty rate first', 'Duty outcome does not control classification.', 'Apply the legal classification rules first.'],
      ['Classify only by product nickname', 'Commercial nicknames may not match tariff terms.', 'Use HTS text, notes, and GRIs.'],
      ['Use last year tariff code without checking changes', 'Prior treatment may be relevant but product or tariff changes can alter classification.', 'Reassess against current facts and law.'],
    ],
  },
  {
    chapter: 'Customs Broker Valuation',
    title: 'Transaction value',
    prompt: 'The invoice price excludes packing costs and an assist provided by the buyer. What should the broker evaluate?',
    correct: 'Whether additions to transaction value are required, including assists, packing, royalties, proceeds, or selling commissions when applicable.',
    wrong: [
      ['Declare only the invoice subtotal no matter what', 'Invoice price may need statutory additions.', 'Analyze transaction value elements.'],
      ['Exclude assists because they were provided outside the invoice', 'Assists can be dutiable even if not invoiced as a sale line.', 'Review all value contributions.'],
      ['Use retail price in the United States by default', 'Transaction value starts with price paid or payable, adjusted as required.', 'Use the correct valuation method in order.'],
    ],
  },
  {
    chapter: 'Customs Broker Valuation',
    title: 'Related-party value',
    prompt: 'The buyer and seller are related and the price appears unusually low. What should the broker consider?',
    correct: 'Assess whether the relationship influenced the price and whether transaction value is acceptable or another valuation method is needed.',
    wrong: [
      ['Reject all related-party transaction values automatically', 'Related-party transactions can be acceptable if the relationship did not influence price.', 'Analyze acceptability rather than assuming.'],
      ['Accept the price solely because both parties signed the invoice', 'A signed invoice does not resolve related-party valuation concerns.', 'Review pricing evidence.'],
      ['Ignore valuation because classification is harder', 'Both classification and valuation matter for duty calculation.', 'Address each entry element.'],
    ],
  },
  {
    chapter: 'Customs Broker Origin',
    title: 'Country of origin marking',
    prompt: 'Final packaging occurs in one country, but substantial manufacturing occurred elsewhere. What should the broker review?',
    correct: 'Determine country of origin under the applicable rule, including substantial transformation or specific marking rules, before declaring marking.',
    wrong: [
      ['Use the packaging country automatically', 'Packaging alone may not determine origin.', 'Analyze the applicable origin rule.'],
      ['Let the importer choose the most marketable country', 'Marketing preference does not control origin marking.', 'Origin declarations must be legally supportable.'],
      ['Skip origin because duty is zero', 'Origin can affect marking, admissibility, trade remedies, and reporting even when ordinary duty is zero.', 'Review origin independently.'],
    ],
  },
  {
    chapter: 'Customs Broker Trade Remedies',
    title: 'AD/CVD scope',
    prompt: 'A product may fall under an antidumping or countervailing duty order. What is the safest broker response?',
    correct: 'Review the order scope, product characteristics, origin, and available rulings or instructions before entry treatment is selected.',
    wrong: [
      ['Ignore AD/CVD if the importer says duty is too expensive', 'Cost concerns do not remove trade remedy obligations.', 'Scope analysis is required when risk exists.'],
      ['Assume HTS classification alone decides AD/CVD scope', 'HTS numbers help but scope language controls AD/CVD coverage.', 'Review the scope text and facts.'],
      ['Wait until liquidation to consider AD/CVD', 'Entry treatment should be evaluated before filing.', 'Resolve scope risk early or seek guidance.'],
    ],
  },
  {
    chapter: 'Customs Broker Entry Practice',
    title: 'Entry type selection',
    prompt: 'The shipment facts may qualify for a special entry process, but documentation is incomplete. What should the broker do?',
    correct: 'Select entry type only after confirming eligibility, documentation, bond, and admissibility requirements.',
    wrong: [
      ['Choose the fastest entry type regardless of eligibility', 'Entry type must match legal and operational requirements.', 'Confirm eligibility before filing.'],
      ['Use informal entry for all shipments', 'Informal entry has value and merchandise limitations.', 'Match entry type to shipment facts.'],
      ['Let entry type be decided after release', 'Entry type affects filing and release requirements.', 'Determine the proper process before submission.'],
    ],
  },
  {
    chapter: 'Customs Broker Entry Practice',
    title: 'Entry summary timing',
    prompt: 'An entry summary deadline is approaching, but the team is waiting for final commercial documents. What should the broker prioritize?',
    correct: 'Manage the filing deadline, obtain missing support urgently, and escalate if accurate and timely filing is at risk.',
    wrong: [
      ['Miss the deadline because documentation is inconvenient', 'Timely entry summary filing is a broker and importer control issue.', 'Escalate before the deadline expires.'],
      ['File unsupported guesses with no disclosure plan', 'Unsupported declarations create compliance risk.', 'Use available lawful options and document rationale.'],
      ['Ignore the client until CBP contacts the broker', 'Diligence requires timely correspondence and action.', 'Communicate and escalate proactively.'],
    ],
  },
  {
    chapter: 'Customs Broker Authority',
    title: 'Power of attorney',
    prompt: 'A new client asks the broker to file entries before authorization documents are complete. What is required?',
    correct: 'Obtain proper authority, including a valid power of attorney where required, before transacting customs business for the client.',
    wrong: [
      ['File first because the client sounded sincere', 'Broker authority must be documented, not assumed from conversation.', 'Secure authorization before acting.'],
      ['Use a power of attorney from an unrelated company', 'Authority must come from the proper principal.', 'Verify the client and signer authority.'],
      ['Let a freight forwarder authorize customs business for the importer without evidence', 'A broker needs proper authorization from the party it represents.', 'Confirm authority chain.'],
    ],
  },
  {
    chapter: 'Customs Broker Records',
    title: 'Record retention',
    prompt: 'CBP requests entry records within the retention period, but the broker archived them across several systems. What should the broker do?',
    correct: 'Retrieve and provide required records timely, preserving confidentiality and maintaining a reliable recordkeeping process.',
    wrong: [
      ['Refuse because records are archived', 'Archiving does not remove record availability obligations.', 'Records must remain retrievable.'],
      ['Send only the documents easiest to find', 'Partial responses may fail to satisfy CBP requests.', 'Provide complete required records.'],
      ['Delete old files to simplify the request', 'Destroying requested records creates serious compliance risk.', 'Preserve and produce required records.'],
    ],
  },
  {
    chapter: 'Customs Broker Supervision',
    title: 'Responsible supervision',
    prompt: 'Brokerage employees prepare entries with minimal review despite high volumes and new clients. What should licensed broker management ensure?',
    correct: 'Maintain responsible supervision and control through training, review, procedures, audit trails, and oversight proportional to risk and volume.',
    wrong: [
      ['Assume employees never need broker oversight', 'A broker is responsible for proper transaction of customs business.', 'Supervise based on complexity and risk.'],
      ['Review only entries that generate large fees', 'Fee size is not the only risk indicator.', 'Use risk-based quality controls.'],
      ['Outsource supervision to the importer completely', 'Importers have responsibilities, but broker supervision remains a broker duty.', 'Maintain broker controls over brokerage work.'],
    ],
  },
  {
    chapter: 'Customs Broker Ethics',
    title: 'Advice to client',
    prompt: 'The broker knows a client instruction would likely produce a false declaration. What is the broker duty?',
    correct: 'Advise the client against the improper action, refuse to participate in false information, and document the communication.',
    wrong: [
      ['Follow the instruction because the client pays the invoice', 'Client instructions do not justify false customs information.', 'Broker duties include truthful and diligent conduct.'],
      ['Stay silent and let CBP discover it later', 'Silence can allow an improper filing.', 'Advise the client and avoid participation.'],
      ['Change records so the instruction looks accurate', 'Altering records is misconduct.', 'Maintain accurate documentation.'],
    ],
  },
  {
    chapter: 'Customs Broker Post-Entry',
    title: 'Protest timing',
    prompt: 'The importer disagrees with CBP liquidation treatment. What should the broker evaluate?',
    correct: 'Whether a protest is available, timely, properly supported, and filed by an authorized party.',
    wrong: [
      ['File a protest whenever a client dislikes duty costs', 'A protest needs a protestable decision and support.', 'Assess availability and grounds.'],
      ['Wait indefinitely while gathering perfect evidence', 'Protest rights have timing constraints.', 'Manage deadlines while building support.'],
      ['Assume informal emails replace formal protest procedures', 'Formal protest rules govern the process.', 'Use the proper filing method and content.'],
    ],
  },
  {
    chapter: 'Customs Broker Post-Entry',
    title: 'Liquidation',
    prompt: 'A duty issue is discovered after entry but before liquidation. What should the broker consider?',
    correct: 'Use the appropriate post-entry correction or disclosure path based on timing, error type, and CBP rules.',
    wrong: [
      ['Wait until after liquidation for every issue', 'Some corrections should be made before liquidation when possible.', 'Use timing-specific remedies.'],
      ['Make no correction if the error favors the importer', 'Errors that underpay duties can create liability.', 'Correct material errors through the right mechanism.'],
      ['Change the original invoice to match the filed entry', 'Altering commercial documents is improper.', 'Correct customs filings, not source records.'],
    ],
  },
  {
    chapter: 'Customs Broker Special Programs',
    title: 'Drawback support',
    prompt: 'A client wants drawback but cannot link imports, exports, and duty payments. What should the broker explain?',
    correct: 'Drawback claims require traceable eligibility support, records, calculations, and compliance with the applicable drawback rules.',
    wrong: [
      ['Drawback is automatic whenever goods leave the country', 'Drawback requires eligibility and documentation.', 'Build the import-export-duty support chain.'],
      ['Use estimates when records are missing', 'Unsupported estimates can undermine the claim.', 'Use verifiable records and approved methods.'],
      ['Ignore prior claims because each claim is isolated', 'Prior claims and records may affect eligibility and audit risk.', 'Maintain consistent claim support.'],
    ],
  },
  {
    chapter: 'Customs Broker Special Programs',
    title: 'Foreign-trade zone movement',
    prompt: 'Merchandise will move through a foreign-trade zone before consumption entry. What should the broker verify?',
    correct: 'Confirm zone status, admission, manipulation, transfer, and entry requirements before declaring duty treatment.',
    wrong: [
      ['Treat FTZ goods as ordinary domestic goods immediately', 'FTZ status changes customs handling and duty timing.', 'Track zone procedures carefully.'],
      ['Ignore records because the goods are not yet entered for consumption', 'Zone activity has its own records and controls.', 'Maintain documentation throughout the zone process.'],
      ['Assume any manipulation changes origin automatically', 'Origin and status changes depend on applicable rules.', 'Analyze the legal effect of the FTZ activity.'],
    ],
  },
  {
    chapter: 'Customs Broker Authority',
    title: 'Employee authority',
    prompt: 'An unlicensed employee signs customs documents under the broker process. What must the broker ensure?',
    correct: 'The employee acts within authorized scope, under broker supervision, with proper power of attorney and controls as required.',
    wrong: [
      ['Unlicensed employees can never assist with customs business', 'Employees may act for the broker within permitted authority and supervision.', 'The issue is authorization and control.'],
      ['Employees can act independently once hired', 'Employment alone does not remove broker supervision duties.', 'Maintain oversight and documented authority.'],
      ['Authority can be assumed from email access', 'System access is not a substitute for legal authorization.', 'Document authorization and scope.'],
    ],
  },
  {
    chapter: 'Customs Broker Admissibility',
    title: 'Partner government agency',
    prompt: 'The article may be regulated by FDA, EPA, USDA, or another partner government agency. What should the broker do?',
    correct: 'Identify applicable agency requirements and obtain admissibility data before filing or release decisions.',
    wrong: [
      ['File only CBP data and hope other agencies do not apply', 'PGA requirements can determine admissibility.', 'Screen product facts for agency coverage.'],
      ['Assume tariff classification answers every agency question', 'Classification helps but may not capture all PGA requirements.', 'Review product-specific agency rules.'],
      ['Let the importer resolve PGA holds after release only', 'Admissibility should be addressed before or during entry as required.', 'Collect required data early.'],
    ],
  },
  {
    chapter: 'Customs Broker Bonds',
    title: 'Bond sufficiency',
    prompt: 'A shipment has high duty exposure and potential AD/CVD risk. What should the broker assess?',
    correct: 'Whether the importer bond is sufficient for the transaction risk, duty exposure, and CBP requirements.',
    wrong: [
      ['Assume any bond amount is always enough', 'Bond sufficiency depends on exposure and requirements.', 'Evaluate risk and coverage.'],
      ['Ignore bonds because duties are paid later', 'Bonds secure obligations tied to entry.', 'Confirm bond adequacy before filing.'],
      ['Use another importer bond for convenience', 'Bond use must match the correct principal and transaction.', 'Use proper bond authority.'],
    ],
  },
  {
    chapter: 'Customs Broker Classification',
    title: 'Section and chapter notes',
    prompt: 'The heading language seems broad, but a chapter note excludes the product. What controls?',
    correct: 'Apply the legal notes with the GRIs; section and chapter notes can determine or exclude classification.',
    wrong: [
      ['Ignore notes if the heading sounds close', 'Legal notes are part of tariff classification.', 'Read heading terms together with notes.'],
      ['Classify by duty rate alone', 'Duty rate is a consequence, not the classification method.', 'Use legal text and interpretive rules.'],
      ['Use only search results from the importer website', 'Product descriptions help facts but do not replace HTS legal notes.', 'Analyze the tariff schedule.'],
    ],
  },
  {
    chapter: 'Customs Broker Post-Entry',
    title: 'Post summary correction',
    prompt: 'An entry summary contains a classification error discovered before liquidation. What should the broker evaluate?',
    correct: 'Whether a post summary correction or other appropriate mechanism is available, timely, and supported by documentation.',
    wrong: [
      ['Leave the error because CBP may not notice', 'Known errors should be addressed through proper procedures.', 'Use available correction mechanisms.'],
      ['Submit a correction without importer authorization or support', 'Corrections need authority and evidence.', 'Coordinate with the importer and document basis.'],
      ['Correct only if the duty decreases', 'Both overpayments and underpayments matter.', 'Correct material errors regardless of direction.'],
    ],
  },
  {
    chapter: 'Customs Broker Enforcement',
    title: 'Prior disclosure',
    prompt: 'The importer discovers a pattern of underpaid duties caused by incorrect value declarations. What should the broker discuss?',
    correct: 'Escalate to counsel or appropriate advisors to consider prior disclosure, tender, scope, and corrective action before CBP discovers it.',
    wrong: [
      ['Keep filing the same way until CBP audits', 'Continuing known errors increases exposure.', 'Address known noncompliance promptly.'],
      ['Destroy old entries to reduce the pattern', 'Destroying records is improper and dangerous.', 'Preserve records and evaluate disclosure.'],
      ['Treat prior disclosure as a marketing discount request', 'Prior disclosure is an enforcement mitigation process, not commercial negotiation.', 'Analyze legal requirements and tender.'],
    ],
  },
]

const aigpCompetencies: CredentialCompetency[] = [
  {
    chapter: 'AIGP Foundations',
    title: 'Governance charter',
    prompt: 'The organization lacks clear ownership for AI risk decisions. What should the AI governance professional establish?',
    correct: 'A governance charter with roles, decision rights, escalation paths, risk appetite, policy authority, and life-cycle responsibilities.',
    wrong: [
      ['Let every project team define governance independently', 'Fragmented governance produces inconsistent risk decisions.', 'Create enterprise expectations with local implementation.'],
      ['Make governance a one-time launch checklist', 'AI governance spans design, deployment, monitoring, and retirement.', 'Use life-cycle oversight.'],
      ['Assign all risk decisions to the model developer alone', 'Developers are important but governance needs cross-functional accountability.', 'Include legal, privacy, security, risk, business, and technical owners.'],
    ],
  },
  {
    chapter: 'AIGP Foundations',
    title: 'AI inventory',
    prompt: 'Leadership asks which AI systems exist and which are high risk. What is the best first control?',
    correct: 'Maintain an AI inventory capturing use case, owner, model source, data, users, decision impact, risk tier, and deployment status.',
    wrong: [
      ['Track only systems that use the phrase artificial intelligence in their name', 'AI risk depends on function, not branding.', 'Inventory systems by capability and use.'],
      ['Rely on finance invoices as the only AI registry', 'Invoices may miss internally built or embedded systems.', 'Use a governed intake and inventory process.'],
      ['Inventory only after an incident occurs', 'An inventory is foundational for proactive governance.', 'Track systems before approval and throughout operation.'],
    ],
  },
  {
    chapter: 'AIGP Foundations',
    title: 'AI impact assessment',
    prompt: 'A proposed system could affect individuals in a meaningful way. What should the assessment focus on?',
    correct: 'Identify potential benefits, harms, affected groups, legal obligations, controls, residual risk, and approval conditions.',
    wrong: [
      ['Measure only the project return on investment', 'ROI does not capture rights, safety, fairness, or compliance risk.', 'Impact assessment is broader than economics.'],
      ['Ask only whether the model is technically impressive', 'Technical quality is one input, not the whole impact question.', 'Assess real-world use and harm.'],
      ['Skip assessment because a vendor built the model', 'Vendor source does not remove deployer governance duties.', 'Assess the system in its intended context.'],
    ],
  },
  {
    chapter: 'AIGP Data Governance',
    title: 'Training data suitability',
    prompt: 'The team wants to train on data collected for a different purpose with uneven representation. What should governance require?',
    correct: 'Review legal basis, purpose compatibility, data quality, representativeness, consent or notice issues, and mitigation for bias or privacy risk.',
    wrong: [
      ['Use all available data because more data is always compliant', 'More data can increase privacy, bias, and quality problems.', 'Use fit-for-purpose and lawful data.'],
      ['Ignore representation because accuracy is high overall', 'Aggregate accuracy can hide subgroup harm.', 'Evaluate performance across relevant groups.'],
      ['Treat training data as outside governance once stored', 'Data governance applies through collection, training, testing, and maintenance.', 'Track provenance and use restrictions.'],
    ],
  },
  {
    chapter: 'AIGP Data Governance',
    title: 'Bias testing',
    prompt: 'Model results differ materially across protected or vulnerable groups. What is the best governance action?',
    correct: 'Analyze subgroup performance, investigate causes, evaluate fairness tradeoffs, document mitigation, and escalate residual risk.',
    wrong: [
      ['Report only aggregate accuracy', 'Aggregate metrics can mask disparate performance.', 'Use subgroup and context-aware evaluation.'],
      ['Suppress subgroup analysis to avoid sensitive findings', 'Avoiding measurement prevents risk management.', 'Measure carefully with privacy and legal controls.'],
      ['Assume bias disappears after deployment', 'Deployment can amplify or reveal bias.', 'Monitor and mitigate throughout the life cycle.'],
    ],
  },
  {
    chapter: 'AIGP Transparency',
    title: 'Explainability',
    prompt: 'Users and reviewers cannot understand what inputs drive the model output. What should governance require?',
    correct: 'Provide explanations appropriate to stakeholders, use context, risk, and model type, including limitations and meaningful factors.',
    wrong: [
      ['Publish source code as the only explanation', 'Source code may not be meaningful to users or decision reviewers.', 'Tailor explanation to audience and purpose.'],
      ['Say the system is proprietary and provide no information', 'Confidentiality can be protected while still providing appropriate transparency.', 'Balance IP protection with accountability.'],
      ['Explain only the business benefit', 'Benefit does not explain system functioning or output factors.', 'Explain how outputs should be understood and challenged.'],
    ],
  },
  {
    chapter: 'AIGP Deployment',
    title: 'Human oversight',
    prompt: 'The system recommends decisions, but human reviewers routinely rubber-stamp outputs. What is the governance concern?',
    correct: 'Human oversight is ineffective unless reviewers have authority, competence, time, information, and a real ability to override or escalate.',
    wrong: [
      ['A human name in the workflow is always enough', 'Nominal review does not ensure meaningful oversight.', 'Design oversight to influence decisions.'],
      ['Remove all human review because automation is faster', 'Speed may increase risk in high-impact contexts.', 'Match oversight to risk and use.'],
      ['Tell reviewers not to question the model', 'That defeats the purpose of oversight.', 'Enable challenge and escalation.'],
    ],
  },
  {
    chapter: 'AIGP Monitoring',
    title: 'Model drift',
    prompt: 'Post-deployment metrics show data drift and declining performance. What should the governance process do?',
    correct: 'Trigger monitoring escalation, assess impact, pause or adjust use if needed, remediate causes, and document changes.',
    wrong: [
      ['Ignore drift if the model was approved at launch', 'Approval is not permanent assurance.', 'Monitor production behavior continuously.'],
      ['Retrain silently with unreviewed data', 'Uncontrolled retraining can introduce new risks.', 'Use change control and validation.'],
      ['Blame users without checking data or model changes', 'User behavior may matter, but drift requires technical and process review.', 'Investigate evidence before assigning cause.'],
    ],
  },
  {
    chapter: 'AIGP Frameworks',
    title: 'NIST AI RMF functions',
    prompt: 'A team asks how to structure AI risk management under the NIST AI RMF. Which approach best matches the framework?',
    correct: 'Use Govern across the organization and apply Map, Measure, and Manage to identify context, evaluate risks, and act on them.',
    wrong: [
      ['Use only Manage after incidents happen', 'The AI RMF includes proactive governance, mapping, and measurement.', 'Risk management begins before incidents.'],
      ['Treat Map as a marketing inventory only', 'Mapping includes context, intended purpose, stakeholders, and impact.', 'Use Map to understand risk context.'],
      ['Skip Govern because technical teams own AI', 'Govern establishes policies, roles, and accountability across the organization.', 'Technical work needs governance structure.'],
    ],
  },
  {
    chapter: 'AIGP Laws and Regulations',
    title: 'EU high-risk obligations',
    prompt: 'A system is likely high risk under EU AI rules. What should governance prepare?',
    correct: 'Risk management, data governance, technical documentation, logs, transparency, human oversight, accuracy, robustness, cybersecurity, and post-market monitoring.',
    wrong: [
      ['Only a launch announcement', 'High-risk AI obligations require substantive controls and evidence.', 'Prepare the required governance and technical documentation.'],
      ['A one-page disclaimer saying AI may be wrong', 'Disclaimers do not replace high-risk system obligations.', 'Implement controls across the life cycle.'],
      ['No action if the model is accurate in a demo', 'Demo performance does not prove regulatory compliance.', 'Assess and document production readiness.'],
    ],
  },
  {
    chapter: 'AIGP Laws and Regulations',
    title: 'General-purpose AI dependency',
    prompt: 'The company uses a general-purpose model inside a customer-impacting workflow. What should governance examine?',
    correct: 'Clarify provider and deployer roles, downstream use, documentation, limitations, risk controls, monitoring, and regulatory obligations.',
    wrong: [
      ['Assume all obligations sit only with the model provider', 'Deployers can have obligations based on how the model is used.', 'Map roles and use context.'],
      ['Ignore provider documentation because the model is popular', 'Popularity does not replace due diligence.', 'Review limitations, data, and usage controls.'],
      ['Treat every downstream use as identical', 'Risk depends on context and impact.', 'Assess the actual workflow.'],
    ],
  },
  {
    chapter: 'AIGP Vendor Governance',
    title: 'Model card review',
    prompt: 'A vendor provides a model card with limited detail on limitations and test populations. What should governance do?',
    correct: 'Request sufficient documentation on intended use, data, evaluation, limitations, risks, and controls before approval.',
    wrong: [
      ['Approve because a model card exists', 'The existence of documentation does not prove it is adequate.', 'Review quality and relevance.'],
      ['Treat vendor confidentiality as a reason for no diligence', 'Confidentiality can be managed through controlled review.', 'Obtain enough evidence to govern risk.'],
      ['Rely only on vendor sales claims', 'Sales claims are not assurance evidence.', 'Use technical, legal, and risk documentation.'],
    ],
  },
  {
    chapter: 'AIGP Privacy',
    title: 'DPIA connection',
    prompt: 'The AI system processes personal data in a way likely to create high privacy risk. What should governance coordinate?',
    correct: 'Coordinate privacy impact assessment or DPIA analysis with AI impact assessment, data minimization, purpose limits, and mitigation.',
    wrong: [
      ['Run AI review and privacy review in isolation', 'AI and privacy risks often overlap.', 'Coordinate assessments and controls.'],
      ['Assume anonymization without testing reidentification risk', 'Data may not be truly anonymous in context.', 'Validate de-identification and residual risk.'],
      ['Use personal data first and ask privacy later', 'Privacy obligations should be assessed before processing begins.', 'Build privacy into design and approval.'],
    ],
  },
  {
    chapter: 'AIGP Incident Response',
    title: 'AI incident escalation',
    prompt: 'A deployed model produced harmful outputs for a subset of users. What should governance do?',
    correct: 'Activate incident response, assess harm and scope, preserve logs, notify required stakeholders, mitigate, and document lessons learned.',
    wrong: [
      ['Delete logs to avoid reputational harm', 'Logs are needed for investigation, accountability, and possible reporting.', 'Preserve evidence.'],
      ['Assume harm is impossible because the model is automated', 'Automation can create or scale harm.', 'Assess actual impact.'],
      ['Wait for social media attention before acting', 'Incident response should be risk-triggered, not publicity-triggered.', 'Escalate promptly based on facts.'],
    ],
  },
  {
    chapter: 'AIGP Documentation',
    title: 'Logging and traceability',
    prompt: 'The team cannot reconstruct which model version produced a contested decision. What control is missing?',
    correct: 'Traceable logging of model version, input data, output, user action, override, and decision context according to risk and retention requirements.',
    wrong: [
      ['A generic statement that AI was involved', 'A generic statement does not support audit or challenge.', 'Capture decision-level traceability where appropriate.'],
      ['Only the final business outcome', 'The final outcome does not reveal model contribution or review.', 'Log the components needed for accountability.'],
      ['No logs because storage costs money', 'Cost matters, but high-impact systems need evidence.', 'Set proportionate retention and logging controls.'],
    ],
  },
  {
    chapter: 'AIGP Change Management',
    title: 'Model update control',
    prompt: 'Developers want to deploy a material model update without repeating impact assessment. What should governance require?',
    correct: 'Use change management to reassess risk, validation, documentation, user notice, monitoring, and approval before deployment.',
    wrong: [
      ['Treat all updates as minor by default', 'Some updates materially change risk or performance.', 'Classify changes by impact.'],
      ['Deploy first because governance approved the original version', 'Original approval may not cover material changes.', 'Reassess before release.'],
      ['Skip documentation if test scores improved', 'Improved scores do not remove accountability requirements.', 'Document what changed and why it is acceptable.'],
    ],
  },
  {
    chapter: 'AIGP Transparency',
    title: 'Synthetic content notice',
    prompt: 'The system generates realistic audio, image, or text that users may mistake for human-created content. What should governance consider?',
    correct: 'Assess transparency or labeling obligations, misuse risk, user context, content provenance, and controls against deception.',
    wrong: [
      ['Hide AI involvement to increase engagement', 'Concealment can create transparency and deception risk.', 'Tell users when required and appropriate.'],
      ['Label only internal drafts and not public outputs', 'Public-facing synthetic content may need transparency controls.', 'Assess audience and legal obligations.'],
      ['Assume all synthetic content is prohibited', 'Many synthetic uses are allowed with proper controls.', 'Govern based on risk and requirements.'],
    ],
  },
  {
    chapter: 'AIGP Laws and Regulations',
    title: 'Prohibited AI practices',
    prompt: 'A proposal involves manipulative targeting of vulnerable users in a way that could cause harm. What should governance do?',
    correct: 'Escalate for prohibited-practice analysis and stop or redesign the use case if it crosses legal or ethical boundaries.',
    wrong: [
      ['Approve because vulnerable users increase conversion', 'Commercial benefit does not justify manipulative harmful practices.', 'Assess prohibited and high-risk boundaries.'],
      ['Proceed until regulators object', 'Prohibited uses should be prevented, not tested in the market.', 'Screen use cases before launch.'],
      ['Move the feature to a different team to avoid review', 'Changing ownership does not change the risk.', 'Govern the use case substance.'],
    ],
  },
  {
    chapter: 'AIGP Data Governance',
    title: 'Training data rights',
    prompt: 'The training corpus may include copyrighted, confidential, or contract-restricted content. What should governance require?',
    correct: 'Review data provenance, license terms, confidentiality duties, use restrictions, retention, and removal or mitigation obligations.',
    wrong: [
      ['Use the data because it was easy to scrape', 'Availability does not prove lawful or permitted use.', 'Check provenance and rights.'],
      ['Ignore contracts because AI training is technical', 'Contract restrictions can govern data use.', 'Include legal review in data governance.'],
      ['Delete provenance records after training', 'Provenance records support accountability and later remediation.', 'Retain appropriate lineage evidence.'],
    ],
  },
  {
    chapter: 'AIGP Performance and Security',
    title: 'Robustness and cybersecurity',
    prompt: 'Testing shows the model is vulnerable to prompt injection or data poisoning. What is the best governance decision?',
    correct: 'Require risk mitigation, security testing, monitoring, incident procedures, and approval conditions before production use.',
    wrong: [
      ['Launch because ordinary cybersecurity does not apply to AI', 'AI systems have security risks that need controls.', 'Integrate AI-specific and general security testing.'],
      ['Document the vulnerability but assign no owner', 'Unowned risks are unlikely to be mitigated.', 'Set owners, controls, and acceptance criteria.'],
      ['Tell users to be careful and skip technical controls', 'User caution is not enough for known system vulnerabilities.', 'Use layered controls.'],
    ],
  },
  {
    chapter: 'AIGP Accountability',
    title: 'RACI for AI controls',
    prompt: 'Privacy, legal, security, data science, and business teams each assume another team owns final approval. What should governance create?',
    correct: 'A RACI or similar accountability model that assigns control ownership, approvals, evidence duties, and escalation for AI risks.',
    wrong: [
      ['Leave ownership ambiguous to preserve flexibility', 'Ambiguity creates gaps in control execution.', 'Assign clear accountability.'],
      ['Make every person equally accountable for every control', 'Diffuse accountability can become no accountability.', 'Define specific roles and decision rights.'],
      ['Let the vendor own internal approval decisions', 'Vendors provide inputs, but the organization owns its governance decisions.', 'Keep internal accountability.'],
    ],
  },
  {
    chapter: 'AIGP Life Cycle',
    title: 'Decommissioning',
    prompt: 'A model is no longer reliable but remains embedded in a workflow. What should governance do?',
    correct: 'Plan decommissioning or replacement, preserve required records, manage user and process impacts, and monitor residual risk during transition.',
    wrong: [
      ['Leave it running because it was expensive to build', 'Sunk cost does not justify unreliable AI use.', 'Retire or replace systems that no longer meet requirements.'],
      ['Turn it off with no operational plan', 'Abrupt removal can disrupt services or controls.', 'Manage transition and residual risk.'],
      ['Delete all evidence of prior operation', 'Records may be needed for audit, challenge, or incident review.', 'Retain required documentation.'],
    ],
  },
]

function buildCredentialQuestions(
  baseId: number,
  count: number,
  topic: Topic,
  competencies: CredentialCompetency[],
  frames: ScenarioFrame[],
): Question[] {
  return Array.from({ length: count }, (_, index) => {
    const competency = competencies[index % competencies.length]
    const frame = frames[Math.floor(index / competencies.length) % frames.length]
    return makeSimpleQuestion(
      baseId + index,
      topic,
      competency.chapter,
      `${competency.title} (${frame.tag})`,
      `${frame.setup} ${competency.prompt}`,
      competency.correct,
      competency.wrong,
      undefined,
      SOURCE,
      undefined,
      mentorHintForCredential(competency),
    )
  })
}

export const careerAgentGeneratedCredentialExpansionComplianceQuestionsByTrack: Record<string, Question[]> = {
  crcm: buildCredentialQuestions(4620000, 170, 'Regulatory', crcmCompetencies, bankFrames),
  ccep: buildCredentialQuestions(4621000, 170, 'Career Skills', ccepCompetencies, ethicsFrames),
  amlCompliance: buildCredentialQuestions(4622000, 130, 'Career Skills', amlCompetencies, amlFrames),
  bankComplianceAmlRoadmap: buildCredentialQuestions(4623000, 120, 'Career Skills', bankAmlRoadmapCompetencies, amlFrames),
  customsBroker: buildCredentialQuestions(4624000, 170, 'Career Skills', customsCompetencies, customsFrames),
  aigp: buildCredentialQuestions(4625000, 170, 'Regulatory', aigpCompetencies, aigpFrames),
}
