import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

const SOURCE = 'Floe career agent-generated credential expansion 2026-05-20'

type WrongTuple = [string, string]

type Concept = {
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: WrongTuple[]
  lesson: string
}

type ScenarioLead = {
  label: string
  text: string
}

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: WrongTuple[],
  lesson: string,
  mentorHint?: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
    undefined,
    mentorHint,
  )
}

function mentorHintForConcept(concept: Concept): string {
  switch (concept.chapter) {
    case 'CPA Exam Architecture and Study Operating System':
      return 'Use the blueprint like a work order: identify the content area, item type, and skill level before choosing a study move. A higher skill tag means practice judgment and application, not just recall.'
    case 'FAR Core - Financial Accounting and Reporting':
      return 'First classify the accounting question: recognition, measurement, presentation, or disclosure. Then apply the relevant standard to the triggering fact instead of following labels or management preference.'
    case 'AUD Core - Auditing and Attestation':
      return 'Tie the procedure or report choice to the audit risk and assertion. AUD rewards source reliability, sufficiency, independence, and whether the problem is a misstatement or evidence limitation.'
    case 'REG Core - Taxation and Regulation':
      return 'Separate the tax boxes before calculating: authority, basis, timing, character, eligibility, and documentation. REG distractors often collapse those boxes into one tempting shortcut.'
    case 'Discipline Choice Studio - BAR, ISC, or TCP':
      return 'Choose the Discipline lens by the work being performed, not by a familiar acronym. Ask whether the facts call for reporting analysis, systems controls, or taxpayer planning.'
    case 'Simulations, Research, and Workpaper Craft':
      return 'Read the requirement first, then decide which exhibits and signs actually matter. Good simulation work is organized for partial credit and does not use every number just because it is present.'
    case 'Exam Strategy and Candidate Stamina':
      return 'Sequence and timing decisions should protect overlap, readiness, and endurance. The exam rewards planned tradeoffs more than heroic last-minute coverage.'
    case 'The Bar Exam Operating System':
      return 'Let the call of the question control the subject, task, and posture before you mine facts. A true rule is still wrong if it answers a different legal question.'
    case 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence':
      return 'Sort the doctrine gate first: jurisdiction, scrutiny, forum, hearsay purpose, or admissibility balance. Then apply only the facts that change that rule.'
    case 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property':
      return 'Name the elements and the governing framework before weighing answers. MBE traps often state a correct nearby rule while skipping the element or exception the facts trigger.'
    case 'Essay Subjects and MEE Rule Muscles':
      return 'On essays, make the rule visible and attach each important fact to an element. The grader needs issue, rule, application, and conclusion more than a polished conclusion alone.'
    case 'MPT - Lawyering in a 90-Minute Box':
      return 'Treat the task memo as the rubric and the File and Library as the universe. Format, audience, rule synthesis, and client facts drive points.'
    case 'Memorization, Retrieval, and Attack Outlines':
      return 'Convert doctrine into issue cues, elements, and exception triggers you can retrieve under time. Passive familiarity is weaker than a short rule you can apply to facts.'
    case 'MBE Strategy and Distractor Surgery':
      return 'Predict the tested rule before letting answer choices steer you. Eliminate answers that are true but irrelevant, too broad, or missing the exception in the stem.'
    case 'Simulation, Final Review, and Exam-Day Execution':
      return 'Think in points per minute. Preserve the main rule and fact application, then move before perfection on one item costs points elsewhere.'
    case 'PMP Operating System':
      return 'Ask what authority, objective, or decision right is missing before work begins. PMP best answers usually clarify purpose and governance before detailed execution.'
    case 'People - Teams, Conflict, and Communication':
      return 'Start with servant leadership: understand the facts, facilitate the right conversation, and remove the system obstacle. Escalation is stronger after you know the issue and authority threshold.'
    case 'Stakeholders, Vision, and Business Value':
      return 'Connect the action to stakeholder expectations and value realization. Outputs are not enough if engagement, adoption, or benefit ownership is missing.'
    case 'Starting and Planning the Work':
      return 'Tailor the planning artifact to the work: baseline, backlog, dependency, reserve, or requirement traceability. The right answer makes uncertainty and tradeoffs visible before commitment.'
    case 'Executing, Monitoring, and Controlling':
      return 'For in-flight work, compare the new fact to the approved baseline, metric, or quality agreement. Analyze impact and route decisions through the process before acting quietly.'
    case 'Risk, Issues, Compliance, and Procurement':
      return 'Decide whether the event is an uncertain risk, an occurred issue, a compliance obligation, or a contract performance problem. The response depends on that classification and the approved governance.'
    case 'Agile, Hybrid, and Tailoring Lab':
      return 'Respect agile role boundaries and flow signals while tailoring to constraints. Ask who owns value, what is truly done, and whether the life cycle fits the uncertainty.'
    case 'Business Environment':
      return 'Trace the decision back to business value, compliance, governance, and external change. PMP distractors often protect the plan while ignoring why the project exists.'
    case 'Exam Strategy and Simulation':
      return 'Favor measured, context-fit action: assess, engage, follow the process, then escalate if the threshold is met. Extreme answers need strong facts to justify them.'
    case 'SHRM Decision Logic and HR\'s Role':
      return 'Think like an HR business partner: facts, policy, consistency, risk, and stakeholder impact before the recommendation. The best SHRM answer is balanced, not merely manager-pleasing.'
    case 'People Domain: Talent, Total Rewards, and Employee Relations':
      return 'Tie the people practice to job relevance, fairness, documentation, and the business problem. SHRM distractors often use a people lever without diagnosing the actual driver.'
    case 'Organization Domain: Strategy, Structure, and Change':
      return 'Ask how the people decision supports strategy, culture, capability, and adoption. A structure or announcement is not enough unless behavior and measures change too.'
    case 'Workplace Domain: Compliance, Risk, Safety, and Inclusion':
      return 'Use a process that protects people and the record: assess urgency, confidentiality, legal duties, consistency, and documentation. Compliance answers should be prompt without being reckless.'
    case 'Behavioral Competencies in Practice':
      return 'Identify the competency under pressure: ethics, consultation, communication, business acumen, or global mindset. Strong HR behavior is candid, confidential, and courageous when risk is real.'
    case 'Data, Metrics, and Evidence-Based HR':
      return 'Start with the business question, then choose or segment the metric that actually answers it. Averages and single metrics can hide the pattern that matters.'
    case 'Employee Relations Lab':
      return 'Separate allegation, evidence, credibility, policy, and retaliation risk. Fair employee relations work is structured enough that the conclusion can be explained later.'
    case 'Exam Survival and Scenario Judgment':
      return 'Prefer the option that is lawful, ethical, humane, evidence-aware, and business-aligned. Extreme speed or avoidance usually skips the competency being tested.'
    case 'Patent System, Exam Format, and MPEP Navigation':
      return 'Anchor the answer in the current USPTO source materials and tested MPEP section. On procedure questions, navigation and source control matter as much as memory.'
    case 'Patentability and Subject Matter Eligibility':
      return 'Classify the patentability requirement first: eligibility, utility, enablement, or another disclosure rule. Then ask what the claim and specification actually teach.'
    case 'Claims and Specification Support':
      return 'Read the claim like a checklist and compare each limitation to the original disclosure. Support, clarity, and dependency logic turn on exact claim language.'
    case 'Prior Art and Novelty':
      return 'Track who disclosed what, when, and whether every claim limitation is present. Dates, priority support, and AIA exceptions can change the prior-art result.'
    case 'Obviousness and Rejection Analysis':
      return 'For obviousness, map the claim limitations to the references and test the examiner\'s rationale. Motivation, reasonable expectation, teaching away, and nexus evidence are the decision points.'
    case 'Prosecution Procedure and Office Actions':
      return 'Procedure is deadline and posture driven. Identify whether the case is non-final, final, restricted, allowed, or on appeal before choosing the filing path.'
    case 'MPEP Drills and Procedural Edge Cases':
      return 'Use the MPEP like a rulebook for timing, required papers, fees, petitions, and consequences. Edge cases turn on exact procedural posture, not general patent intuition.'
    case 'USPTO Ethics and Practitioner Judgment':
      return 'Separate client loyalty from duties to the Office and practitioner responsibility. Candor, conflicts, signatures, supervision, and withdrawal are ethics issues before strategy issues.'
    default:
      return 'Name the professional frame first, then apply the facts through the required process. The strongest answer should be defensible without giving in to speed or familiarity.'
  }
}

function expandTrack(startId: number, count: number, concepts: Concept[], leads: ScenarioLead[]): Question[] {
  return Array.from({ length: count }, (_, index) => {
    const concept = concepts[index % concepts.length]
    const lead = leads[Math.floor(index / concepts.length) % leads.length]

    return q(
      startId + index,
      'Career Skills',
      concept.chapter,
      `${concept.title} - ${lead.label}`,
      `${lead.text} ${concept.prompt}`,
      concept.correct,
      concept.wrong,
      concept.lesson,
      mentorHintForConcept(concept),
    )
  })
}

const cpaLeads: ScenarioLead[] = [
  { label: 'MCQ sprint', text: 'During a timed CPA multiple-choice sprint,' },
  { label: 'TBS exhibit', text: 'In a task-based simulation with several exhibits,' },
  { label: 'Controller review', text: 'While reviewing a controller workpaper,' },
  { label: 'Staff debrief', text: 'A senior asks a staff candidate to explain the issue:' },
  { label: 'Final review', text: 'In final review before submitting the testlet,' },
]

const barLeads: ScenarioLead[] = [
  { label: 'MBE stem', text: 'In a legacy UBE-style MBE stem,' },
  { label: 'MEE essay', text: 'On a 30-minute essay question,' },
  { label: 'MPT file', text: 'While organizing an MPT file and library,' },
  { label: 'NextGen drill', text: 'In a NextGen-style integrated lawyering task,' },
  { label: 'Wrong-answer review', text: 'During bar-review error logging,' },
]

const pmpLeads: ScenarioLead[] = [
  { label: 'Predictive project', text: 'On a predictive project with approved baselines,' },
  { label: 'Agile team', text: 'On an adaptive team delivering in short iterations,' },
  { label: 'Hybrid program', text: 'In a hybrid program with governance reviews,' },
  { label: 'Sponsor meeting', text: 'Before a sponsor steering meeting,' },
  { label: 'Exam case', text: 'In a PMP case-based scenario,' },
]

const shrmLeads: ScenarioLead[] = [
  { label: 'SHRM-CP SJI', text: 'In a SHRM-CP situational judgment item,' },
  { label: 'SHRM-SCP SJI', text: 'In a SHRM-SCP strategic scenario,' },
  { label: 'HRBP consult', text: 'As the HR business partner advising leaders,' },
  { label: 'People ops audit', text: 'During a people-operations compliance review,' },
  { label: 'Exam debrief', text: 'While explaining the best-answer logic,' },
]

const patentLeads: ScenarioLead[] = [
  { label: 'MPEP lookup', text: 'During an open-MPEP registration-exam lookup,' },
  { label: 'Office action', text: 'While drafting a response to an Office action,' },
  { label: 'Client intake', text: 'At patent-prosecution intake,' },
  { label: 'Procedure drill', text: 'In a USPTO procedure drill,' },
  { label: 'Ethics screen', text: 'While screening a practitioner-duty issue,' },
]

const cpaConcepts: Concept[] = [
  {
    chapter: 'CPA Exam Architecture and Study Operating System',
    title: 'Blueprint skill level',
    prompt: 'a candidate sees that a blueprint task is tagged "analysis" rather than "remembering and understanding." What study behavior best matches that skill level?',
    correct: 'Practice comparing facts, relationships, and evidence rather than only memorizing definitions',
    wrong: [
      ['Memorize only the glossary term and skip scenario practice', 'Analysis tasks require relationships and fact patterns, not definition recall alone.'],
      ['Ignore the blueprint because every task is tested the same way', 'The blueprint skill level signals how deeply the candidate may need to use the content.'],
      ['Study only exam logistics because skill levels are administrative', 'Logistics matter, but skill tags describe the professional work being assessed.'],
    ],
    lesson: 'CPA blueprints are not just topic lists. Area, task, item type, and skill level should shape the study drill.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Revenue allocation',
    prompt: 'a bundled contract includes equipment, installation, and a support term, each with different transfer patterns. What is the best first accounting move?',
    correct: 'Identify distinct performance obligations before allocating the transaction price',
    wrong: [
      ['Recognize all revenue at signing because the customer approved the order', 'Approval alone is not transfer of control for every obligation.'],
      ['Treat support as inventory because it is sold with equipment', 'Support is a service obligation, not inventory held for sale.'],
      ['Allocate all consideration to the obligation with the highest margin', 'Allocation follows relative stand-alone selling price, not margin preference.'],
    ],
    lesson: 'Revenue questions become manageable when the contract is separated into obligations, price allocation, and transfer of control.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Lease substance',
    prompt: 'a service agreement gives the customer exclusive use of an identified server for three years and the right to direct how it is used. What should be evaluated?',
    correct: 'Whether the arrangement contains a lease because the customer controls an identified asset',
    wrong: [
      ['Skip lease accounting because the contract title says service agreement', 'Labels do not control when the customer controls an identified asset.'],
      ['Record revenue because a server is technologically advanced', 'Technology level does not determine lessee accounting.'],
      ['Classify it only by whether the vendor owns the building', 'Ownership of the building is beside the point; control of the identified server matters.'],
    ],
    lesson: 'Lease identification turns on control of an identified asset, not the label selected by the parties.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Inventory write-down',
    prompt: 'inventory cost is above expected net realizable value after selling costs. Which reporting conclusion is strongest?',
    correct: 'A write-down may be required because expected recovery is below cost',
    wrong: [
      ['Keep inventory at cost because write-downs wait until the sale date', 'Inventory measurement is assessed before sale when recoverability falls below cost.'],
      ['Write inventory up to the list price so gross margin is stable', 'Inventory is not written above cost to stabilize margins.'],
      ['Move the loss directly to retained earnings', 'Operating inventory write-downs flow through current-period income.'],
    ],
    lesson: 'FAR inventory traps often test the difference between cost, selling price, and net realizable value.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Subsequent-event evidence',
    prompt: 'a customer bankruptcy after year-end confirms financial distress that existed before the balance-sheet date. What is the likely reporting effect?',
    correct: 'Consider recognizing an adjustment because the event gives evidence about an existing condition',
    wrong: [
      ['Disclose only because all later events are nonrecognized events', 'Later events can require recognition when they confirm year-end conditions.'],
      ['Ignore it because the financial statements have not been issued', 'The pre-issuance period is exactly when subsequent events are evaluated.'],
      ['Record a gain contingency for the expected insurance recovery automatically', 'Gain contingencies have more restrictive recognition rules and cannot erase the loss analysis.'],
    ],
    lesson: 'Subsequent events are sorted by whether they illuminate a condition that existed at the reporting date.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Statement of cash flows',
    prompt: 'accounts payable rose because inventory was purchased on account and not yet paid. Under the indirect method, how does that affect operating cash flow?',
    correct: 'Add the increase in accounts payable because cash paid was less than expense or inventory activity reflected in accruals',
    wrong: [
      ['Subtract it because every liability increase is unfavorable', 'Indirect-method signs follow cash effects, not whether the account sounds favorable.'],
      ['Report it as financing because payables are liabilities', 'Trade payables tied to inventory are operating, not financing.'],
      ['Omit it because no cash changed hands', 'Noncash accrual changes are exactly why the indirect reconciliation exists.'],
    ],
    lesson: 'Indirect cash-flow work reconciles accrual accounting to cash, so working-capital changes are key clues.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Government fund focus',
    prompt: 'a city accounts for a general fund purchase order and near-term spending constraint. Which measurement focus should the candidate keep in mind?',
    correct: 'Governmental funds focus on current financial resources and modified accrual accounting',
    wrong: [
      ['All government accounting uses only full accrual like a for-profit corporation', 'Government-wide statements use accrual, but governmental funds use modified accrual.'],
      ['A purchase order is always a depreciation event', 'Purchase orders relate to encumbrances and budgetary control, not depreciation by themselves.'],
      ['Fund accounting is optional if the city has a balanced budget', 'Fund accounting is central to governmental reporting and accountability.'],
    ],
    lesson: 'FAR government questions often hinge on fund type, measurement focus, and basis of accounting.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Independence threat',
    prompt: 'an audit manager owns shares in the client through a brokerage account and says the holding is small. What should the firm evaluate first?',
    correct: 'Whether the financial interest impairs independence under the applicable independence rules',
    wrong: [
      ['Whether the manager personally likes the client staff', 'Friendliness is not the direct issue; the financial interest is.'],
      ['Whether the shares increased in value during busy season', 'Gain or loss amount does not cure an impermissible interest.'],
      ['Whether the client has strong internal controls', 'Controls do not fix auditor independence problems.'],
    ],
    lesson: 'AUD independence questions ask about relationships and interests before audit quality procedures can even matter.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Assertion match',
    prompt: 'management may have recorded inventory that does not exist. Which procedure most directly targets the assertion at risk?',
    correct: 'Observe inventory or perform procedures tied to existence of recorded items',
    wrong: [
      ['Trace receiving reports to the inventory listing to test completeness only', 'Tracing from source documents helps completeness, while the risk is recorded items that may not exist.'],
      ['Review board minutes for dividend approvals', 'Dividend approvals do not address inventory existence.'],
      ['Recalculate depreciation on equipment', 'Depreciation does not test whether inventory quantities exist.'],
    ],
    lesson: 'Audit procedures should match the assertion in the risk: existence, completeness, valuation, rights, or presentation.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'External confirmation',
    prompt: 'accounts receivable are material and collectability concerns increased near year-end. What evidence strategy is most responsive?',
    correct: 'Use confirmations and follow-up procedures to address existence and valuation-related risk',
    wrong: [
      ['Rely only on management saying customers usually pay', 'Management representation alone is weaker than external evidence.'],
      ['Test only payroll approvals because payroll is recurring', 'Payroll does not address receivable existence or collectability.'],
      ['Skip confirmations because customers might be busy', 'Convenience is not an evidence-quality rationale.'],
    ],
    lesson: 'External evidence is often persuasive for receivables, but exceptions and nonresponses still need audit follow-up.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Control deficiency severity',
    prompt: 'the same employee can create vendors, approve invoices, and release payments. What is the best audit concern?',
    correct: 'A segregation-of-duties deficiency that could permit unauthorized or fraudulent disbursements',
    wrong: [
      ['A going-concern conclusion solely because one employee is busy', 'Workload alone is not a going-concern condition.'],
      ['A revenue recognition error because vendors receive cash', 'Vendor payments are in the expenditure cycle, not revenue recognition.'],
      ['A harmless efficiency improvement because fewer people touch the process', 'Efficiency does not outweigh incompatible duties.'],
    ],
    lesson: 'Control questions often ask whether one person can both initiate and conceal an error or fraud.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Report modification',
    prompt: 'the auditor cannot obtain sufficient appropriate evidence about a pervasive opening inventory balance. What should be considered?',
    correct: 'A scope limitation and whether its pervasiveness requires a disclaimer or other modified opinion',
    wrong: [
      ['An adverse opinion automatically because inventory exists', 'Adverse opinions address material misstatement, not inability to obtain evidence.'],
      ['No modification because opening balances are old', 'Opening balances can affect current-period statements and audit evidence.'],
      ['A compilation report because audit evidence was difficult', 'An audit engagement does not become a compilation because evidence is hard to obtain.'],
    ],
    lesson: 'AUD reporting turns on whether the issue is misstatement or evidence limitation, and whether it is material and pervasive.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'Basis after contribution',
    prompt: 'a partner contributes property with built-in gain to a partnership and receives a partnership interest. What basis concept is most important?',
    correct: 'The partner and partnership basis consequences must be tracked separately, including carryover basis and outside basis effects',
    wrong: [
      ['The partnership always records the property at fair value for tax basis', 'Tax basis often carries over rather than resetting to fair value.'],
      ['The partner loses all basis because no cash was paid', 'Contributed property can create outside basis even without cash.'],
      ['Basis matters only when audited by a financial-statement auditor', 'Tax basis is fundamental for tax consequences regardless of financial-statement audit status.'],
    ],
    lesson: 'REG entity questions reward keeping inside basis, outside basis, built-in gain, and distributions in separate mental boxes.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'Like-kind exchange',
    prompt: 'a taxpayer exchanges business real property and receives cash boot in addition to replacement real property. What should be analyzed?',
    correct: 'Realized gain, recognized gain to the extent of boot, and basis in the replacement property',
    wrong: [
      ['No gain can ever be recognized in a like-kind exchange', 'Boot can trigger recognized gain even when nonrecognition applies in part.'],
      ['The entire transaction is wages because cash was received', 'Boot is not wages; it affects gain recognition in a property exchange.'],
      ['Basis is irrelevant because the taxpayer did not sell for all cash', 'Carryover and boot adjustments make basis central.'],
    ],
    lesson: 'Property transaction questions separate realized gain, recognized gain, boot, and substituted basis.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'Tax authority confidence',
    prompt: 'a preparer wants to take an aggressive position based only on a social-media thread and a client preference. What is the best professional response?',
    correct: 'Research authoritative tax law and assess whether the position meets the required support and disclosure standards',
    wrong: [
      ['Use the position because the client signs the return', 'Client signature does not eliminate preparer responsibilities.'],
      ['Avoid documenting the issue so it cannot be questioned', 'Lack of documentation increases professional risk.'],
      ['Assume all aggressive positions are fraud', 'Some positions may be supportable, but they require authority and judgment.'],
    ],
    lesson: 'REG professional responsibility tests authority, support, disclosure, and documentation rather than client pressure.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'Agency authority',
    prompt: 'an employee signs a contract with a supplier after the company repeatedly allowed similar purchases. What legal issue is most relevant?',
    correct: 'Whether the employee had actual or apparent authority to bind the principal',
    wrong: [
      ['Whether every employee is automatically a partner', 'Employment does not by itself create partnership status.'],
      ['Whether contract law disappears because the supplier is a business', 'Commercial contracts are still governed by contract and agency principles.'],
      ['Whether the supplier can depreciate the employee', 'People are not depreciable business assets.'],
    ],
    lesson: 'Business law questions often turn on the authority relationship between principal, agent, and third party.',
  },
  {
    chapter: 'Discipline Choice Studio - BAR, ISC, or TCP',
    title: 'BAR performance analysis',
    prompt: 'management asks why operating margin improved while cash flow weakened. Which Discipline-style skill is most directly tested?',
    correct: 'BAR-style analysis connecting financial metrics, accruals, and business drivers',
    wrong: [
      ['ISC-style access provisioning as the primary issue', 'Access controls may matter elsewhere, but this prompt asks financial analysis.'],
      ['TCP-style estate planning as the direct skill', 'The facts are about business performance, not taxpayer planning.'],
      ['AUD-style independence analysis as the only issue', 'No auditor relationship or assurance engagement is presented.'],
    ],
    lesson: 'BAR emphasizes reporting, analytics, finance, and business analysis beyond core FAR mechanics.',
  },
  {
    chapter: 'Discipline Choice Studio - BAR, ISC, or TCP',
    title: 'ISC access control',
    prompt: 'terminated users remain active in the payroll system for two months after departure. Which Discipline topic does this most directly indicate?',
    correct: 'ISC-style information systems control risk around user access and deprovisioning',
    wrong: [
      ['BAR-style government-wide reconciliation only', 'Government reporting is unrelated to payroll access deprovisioning.'],
      ['TCP-style basis limitation for S corporations', 'Shareholder basis does not address information-system access risk.'],
      ['FAR-style inventory lower-of-cost analysis', 'Inventory valuation does not fix terminated-user access.'],
    ],
    lesson: 'ISC questions often revolve around access, change management, data integrity, security, privacy, and SOC-related controls.',
  },
  {
    chapter: 'Discipline Choice Studio - BAR, ISC, or TCP',
    title: 'TCP planning comparison',
    prompt: 'a closely held owner asks whether an asset sale or stock sale better fits tax objectives and risk tolerance. What is the best Discipline lens?',
    correct: 'TCP-style planning that compares tax consequences, assumptions, and owner-level effects',
    wrong: [
      ['ISC-style vulnerability scanning as the central answer', 'Cybersecurity scanning does not compare transaction tax structures.'],
      ['AUD-style confirmation of receivables as the main deliverable', 'Audit evidence is not the client planning question asked.'],
      ['BAR-style variance labeling without tax computations', 'Variance labels do not answer transaction tax planning.'],
    ],
    lesson: 'TCP goes beyond routine compliance into tax planning, entity choices, dispositions, and taxpayer-specific consequences.',
  },
  {
    chapter: 'Simulations, Research, and Workpaper Craft',
    title: 'TBS exhibit triage',
    prompt: 'a simulation provides six exhibits, but only two contain dates and amounts relevant to the requested adjustment. What is the best approach?',
    correct: 'Read the requirement, identify relevant exhibits, and build a labeled calculation using only needed facts',
    wrong: [
      ['Use every number in every exhibit so nothing is wasted', 'Simulations include distractors; using every number often creates errors.'],
      ['Skip the requirement and start calculating immediately', 'The requirement determines which facts matter.'],
      ['Answer only the first cell because partial credit is impossible', 'Task-based simulations can award partial credit, so organized work matters.'],
    ],
    lesson: 'TBS success depends on requirement control, exhibit triage, labeled assumptions, and calm partial-credit execution.',
  },
  {
    chapter: 'Exam Strategy and Candidate Stamina',
    title: 'Section sequencing',
    prompt: 'a candidate chooses BAR but has not yet studied FAR. What sequencing logic is most defensible?',
    correct: 'Consider taking FAR before BAR because BAR builds on financial reporting and analysis foundations',
    wrong: [
      ['Take BAR first solely because it has a shorter acronym', 'Acronym length is not a readiness factor.'],
      ['Never take FAR early because it is important', 'Importance is a reason to plan deliberately, not avoid it.'],
      ['Ignore prerequisites because all sections test identical content', 'The sections overlap differently; discipline choice can affect sequence.'],
    ],
    lesson: 'CPA section order should reflect overlap, personal strengths, deadlines, and the selected Discipline.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Fraud brainstorming',
    prompt: 'revenue spiked in the final week and sales staff had unusual override access. What should the audit team do?',
    correct: 'Treat it as a fraud-risk indicator and design procedures responsive to cutoff and override risks',
    wrong: [
      ['Assume strong sales prove the client is low risk', 'Unexpected spikes near period-end can increase risk rather than reduce it.'],
      ['Wait until the audit report is issued to investigate', 'Risk responses must occur before forming the opinion.'],
      ['Test only petty cash because fraud is always small', 'Fraud risk is not limited to petty cash and often involves revenue or override.'],
    ],
    lesson: 'AUD fraud scenarios reward skeptical linkage between incentives, unusual patterns, controls, and responsive procedures.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'Statute notice',
    prompt: 'the IRS proposes an adjustment and the taxpayer asks how long they can wait before responding. What should the candidate identify first?',
    correct: 'The applicable notice, deadline, and procedural rights before the response window closes',
    wrong: [
      ['The taxpayer can ignore notices until collection starts', 'Tax procedure is deadline-driven; ignoring notices can forfeit rights.'],
      ['The preparer should answer orally with no file documentation', 'Tax procedure advice should be documented and tied to the notice.'],
      ['Deadlines are identical for every IRS document', 'Different notices carry different rights and deadlines.'],
    ],
    lesson: 'REG procedure questions often test deadlines, notices, penalties, substantiation, and taxpayer rights.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Fair value hierarchy',
    prompt: 'a valuation uses quoted prices for identical assets in an active market. Which fair value input level is implicated?',
    correct: 'Level 1 inputs because quoted prices in active markets are the most observable evidence',
    wrong: [
      ['Level 3 inputs because the number is important', 'Importance does not make an input unobservable.'],
      ['Historical cost because the market price is external', 'Fair value hierarchy classifies valuation inputs, not historical-cost measurement.'],
      ['A tax basis adjustment because the price is quoted', 'Quoted fair values do not automatically create tax-basis changes.'],
    ],
    lesson: 'Fair value questions ask how observable the input is, with quoted active-market prices at the top of the hierarchy.',
  },
  {
    chapter: 'AUD Core - Auditing and Attestation',
    title: 'Analytical procedure follow-up',
    prompt: 'gross margin changed sharply from prior years and management gives only a vague explanation. What should the auditor do?',
    correct: 'Investigate the unexpected relationship and obtain corroborating evidence',
    wrong: [
      ['Accept the explanation because analytical procedures are optional decorations', 'Unexpected analytical results require follow-up when used in audit planning or substantive work.'],
      ['Change the prior-year financial statements without evidence', 'Prior-year changes require support and are not a response to vague current explanations.'],
      ['Ignore the variance because ratios are not journal entries', 'Analytical procedures are evidence tools even though they are not entries.'],
    ],
    lesson: 'Analytical procedures are useful only if unexpected relationships are investigated instead of admired from a distance.',
  },
  {
    chapter: 'FAR Core - Financial Accounting and Reporting',
    title: 'Accounting change classification',
    prompt: 'a company changes depreciation method because the new method better reflects asset consumption. What classification should be considered?',
    correct: 'A change in accounting estimate effected by a change in accounting principle, generally handled prospectively',
    wrong: [
      ['A prior-period error automatically requiring fraud disclosure', 'A justified method change is not automatically an error or fraud.'],
      ['A cash-flow classification issue only', 'Depreciation method affects expense allocation, not just cash-flow presentation.'],
      ['A business combination because assets are involved', 'Changing depreciation method is not acquiring a business.'],
    ],
    lesson: 'FAR tests whether a change is principle, estimate, entity, or error because the reporting treatment differs.',
  },
  {
    chapter: 'REG Core - Taxation and Regulation',
    title: 'S corporation eligibility',
    prompt: 'a corporation considering S status has an ineligible shareholder. What is the best tax conclusion?',
    correct: 'The eligibility problem must be resolved because S status depends on meeting shareholder and stock requirements',
    wrong: [
      ['Elect S status anyway because all small businesses qualify', 'S corporation rules contain specific eligibility limits.'],
      ['Convert automatically to a partnership without legal action', 'Entity classification and legal form do not change automatically.'],
      ['Ignore shareholders because only revenue determines tax status', 'Ownership is central to S corporation eligibility.'],
    ],
    lesson: 'Entity tax questions often start with eligibility before moving to allocations, basis, or distributions.',
  },
  {
    chapter: 'Simulations, Research, and Workpaper Craft',
    title: 'Sign convention',
    prompt: 'a TBS asks for an adjusting entry and says decreases should be entered as negative numbers. What is the safest execution habit?',
    correct: 'Follow the instruction exactly and check signs before submitting',
    wrong: [
      ['Use positive numbers for every answer because that looks cleaner', 'The scoring format may require signs exactly as instructed.'],
      ['Skip the instruction because journal entries imply direction automatically', 'TBS grids often score signs and formats separately from concepts.'],
      ['Enter text explanations into numeric cells', 'Wrong cell type can lose credit even when the concept is understood.'],
    ],
    lesson: 'Simulation craft includes units, signs, rounding, and answer format. Small mechanics can protect hard-earned knowledge.',
  },
]

const barConcepts: Concept[] = [
  {
    chapter: 'The Bar Exam Operating System',
    title: 'Call control',
    prompt: 'the fact pattern contains tort, contract, and evidence details, but the call asks only which objection should be sustained. What is the best first move?',
    correct: 'Use the call to identify the subject and legal task before sorting facts',
    wrong: [
      ['Write about every possible claim because all facts are equally tested', 'The call narrows the scoring task. Extra issue wandering burns time.'],
      ['Pick the doctrine that appears first chronologically', 'Chronology is not a substitute for the question asked.'],
      ['Ignore procedural posture because facts are more interesting', 'Procedural posture often decides the answer.'],
    ],
    lesson: 'Bar performance starts with the call, then the rule, then the facts that matter to that rule.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Personal jurisdiction',
    prompt: 'a defendant has no meaningful contacts with the forum, but venue would be convenient for the plaintiff. Which issue is decisive?',
    correct: 'Whether the court has personal jurisdiction consistent with statutory authority and due process',
    wrong: [
      ['Venue convenience automatically creates personal jurisdiction', 'Venue and personal jurisdiction are separate requirements.'],
      ['Subject matter jurisdiction cures all forum defects', 'A court can have subject matter jurisdiction while lacking power over a defendant.'],
      ['The plaintiff can create contacts by mailing the complaint', 'Service does not create minimum contacts by itself.'],
    ],
    lesson: 'Civil procedure questions often test separate gateways: subject matter jurisdiction, personal jurisdiction, venue, and service.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Erie choice',
    prompt: 'a federal court sits in diversity and must decide whether to apply a state rule affecting the claim outcome. What framework is implicated?',
    correct: 'Erie analysis, including whether state substantive law or federal procedural law governs',
    wrong: [
      ['Dormant Commerce Clause because two states are mentioned', 'Interstate facts do not automatically raise commerce discrimination.'],
      ['Hearsay because the rule was spoken by a judge', 'The issue is choice of law in diversity, not admissibility of a statement.'],
      ['Double jeopardy because there are two court systems', 'Double jeopardy is criminal procedure, not diversity civil litigation.'],
    ],
    lesson: 'Erie questions ask whether federal diversity courts should apply state substantive law or federal procedural rules.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'State action',
    prompt: 'a private employer restricts employee speech with no governmental involvement. What threshold issue comes first?',
    correct: 'Whether there is state action before applying constitutional speech limits',
    wrong: [
      ['Strict scrutiny applies to every private workplace rule', 'Constitutional scrutiny usually requires government action.'],
      ['The rule is void because speech is always protected from everyone', 'Private actors are generally not bound by the First Amendment absent state action.'],
      ['Takings analysis controls because employment has value', 'Takings concerns property taken by government, not private workplace discipline.'],
    ],
    lesson: 'Constitutional claims usually need government action before rights and scrutiny analysis begin.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Scrutiny selection',
    prompt: 'a statute treats people differently based on a classification. What should the examinee identify before choosing the answer?',
    correct: 'The classification or right at issue because it determines the level of scrutiny',
    wrong: [
      ['Use strict scrutiny whenever the statute seems unfair', 'Unfairness alone does not trigger strict scrutiny.'],
      ['Use rational basis for all individual-rights questions', 'Fundamental rights can trigger heightened review.'],
      ['Apply the parol evidence rule because the statute has words', 'Parol evidence is a contract doctrine, not equal protection analysis.'],
    ],
    lesson: 'Constitutional law answer choices often differ by scrutiny level, so classification and right come first.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Hearsay purpose',
    prompt: 'a statement is offered to show the listener had notice, not that the statement was true. What is the best evidence analysis?',
    correct: 'It may be nonhearsay because it is offered for effect on the listener rather than truth',
    wrong: [
      ['It is hearsay whenever words were spoken out of court', 'Out-of-court words are hearsay only when offered for truth, absent exclusions.'],
      ['It is automatically excluded because the declarant is absent', 'Declarant absence matters, but purpose and exceptions still control.'],
      ['It is character evidence because it includes a person', 'Mentioning a person is not character evidence.'],
    ],
    lesson: 'Evidence questions reward asking why the statement is offered before hunting for exceptions.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Impeachment limit',
    prompt: 'a lawyer offers a prior inconsistent statement solely to attack credibility. Which distinction matters?',
    correct: 'Whether the statement is admitted only for impeachment or also substantively under a hearsay rule or exclusion',
    wrong: [
      ['All prior inconsistent statements prove the truth of their contents', 'Some impeach only; substantive use requires a separate rule.'],
      ['Impeachment is never allowed on cross-examination', 'Cross-examination is a common place for impeachment.'],
      ['A prior statement always triggers strict scrutiny', 'Strict scrutiny is constitutional law, not evidence admissibility.'],
    ],
    lesson: 'Evidence often separates credibility use from substantive truth use.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'UCC formation',
    prompt: 'a sale of goods includes an acceptance with additional terms. What threshold should the candidate decide?',
    correct: 'Apply UCC Article 2 rules because the transaction is for goods',
    wrong: [
      ['Apply only common-law mirror-image rules without considering goods', 'Article 2 changes the analysis for goods transactions.'],
      ['Use real-property recording rules because a sale occurred', 'Recording acts concern land, not goods.'],
      ['Treat every additional term as a tort', 'Additional contract terms are not torts merely because they create risk.'],
    ],
    lesson: 'Contracts questions often turn on whether common law or UCC Article 2 governs before formation rules are applied.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Condition failure',
    prompt: 'a contract duty is expressly conditioned on an event that never occurs. What issue is most important?',
    correct: 'Whether nonoccurrence of the condition excuses the duty unless the condition is waived or excused',
    wrong: [
      ['Damages are automatic because every disappointment is breach', 'Failure of a condition may mean the duty never matured.'],
      ['The Statute of Frauds always cancels conditions', 'The Statute of Frauds is a writing requirement for certain contracts, not a condition eraser.'],
      ['Specific performance is mandatory in every contract case', 'Specific performance is exceptional and depends on remedy rules.'],
    ],
    lesson: 'Conditions decide whether a duty is triggered; breach analysis comes after a duty exists.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Negligence elements',
    prompt: 'a plaintiff proves careless conduct but no actual harm. Which negligence element is missing?',
    correct: 'Damages, because negligence requires actual injury in addition to duty, breach, and causation',
    wrong: [
      ['Intent, because all torts require purpose to harm', 'Negligence is not an intent tort.'],
      ['Consideration, because harm must be bargained for', 'Consideration is a contract concept.'],
      ['Venue, because the injury occurred somewhere', 'Venue is procedural and does not supply negligence damages.'],
    ],
    lesson: 'Negligence needs duty, breach, causation, and damages. A careless act alone is not enough.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Products strict liability',
    prompt: 'a consumer is injured by a manufacturing defect in a product used as intended. Which doctrine is most likely implicated?',
    correct: 'Strict products liability for a defective product that caused injury',
    wrong: [
      ['Battery because the manufacturer touched the consumer directly', 'Battery requires intentional harmful or offensive contact.'],
      ['Larceny because the product was valuable', 'Larceny is a property crime and does not address product defects.'],
      ['Res judicata because the product was sold once before', 'Claim preclusion requires prior litigation, not a prior sale.'],
    ],
    lesson: 'Products questions separate manufacturing defects, design defects, warning defects, causation, and damages.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Search timeline',
    prompt: 'police stop, frisk, arrest, search a bag, and then question the suspect. What is the best organizational move?',
    correct: 'Analyze each police step chronologically under the relevant Fourth, Fifth, or Sixth Amendment rule',
    wrong: [
      ['Apply only the trial right to counsel to every police action', 'Different constitutional protections attach at different points.'],
      ['Assume one valid stop validates every later search and statement', 'Each step can require its own justification.'],
      ['Use contract formation rules because officers made requests', 'Police procedure is not contract law.'],
    ],
    lesson: 'Criminal procedure is a timeline subject. Place each government action before choosing the rule.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Recording act race',
    prompt: 'two buyers claim the same parcel and the facts give purchase dates, notice, and recording dates. What should the examinee do?',
    correct: 'Identify the jurisdiction recording act and compare notice plus recording facts',
    wrong: [
      ['Give title to whoever paid the higher price', 'Recording acts do not award title by purchase price.'],
      ['Resolve it with hearsay exceptions', 'The dispute is priority in land conveyancing, not evidence.'],
      ['Assume first in time always wins under every statute', 'Notice and race-notice statutes can alter first-in-time results.'],
    ],
    lesson: 'Recording-act questions require the statute type, notice status, and recording order.',
  },
  {
    chapter: 'Essay Subjects and MEE Rule Muscles',
    title: 'Agency liability essay',
    prompt: 'an employee signs a deal while appearing to act for the company, and the call asks whether the company is bound. What rule set should lead?',
    correct: 'Actual authority, apparent authority, and ratification if the facts support it',
    wrong: [
      ['Future interests, because authority can vest later', 'Future interests are property doctrine, not agency authority.'],
      ['Hearsay exceptions, because the employee spoke', 'The legal effect of the act, not admissibility, is the issue.'],
      ['Strict products liability, because a company is involved', 'Business involvement does not make every claim a products case.'],
    ],
    lesson: 'MEE business-entity questions often test agency authority before deeper entity governance issues.',
  },
  {
    chapter: 'Essay Subjects and MEE Rule Muscles',
    title: 'Secured priority',
    prompt: 'a debtor grants security interests to two creditors, and the facts list attachment, perfection, and filing dates. What analysis is needed?',
    correct: 'Attachment, perfection, and priority, including any special priority rule',
    wrong: [
      ['Equal protection scrutiny because two creditors are treated differently', 'Priority rules are commercial law, not constitutional classification.'],
      ['Personal jurisdiction because the debtor has contacts', 'Creditor priority is not decided by minimum contacts.'],
      ['The mailbox rule because financing statements were sent', 'Filing effectiveness and secured transactions rules control, not acceptance by mail.'],
    ],
    lesson: 'For administrations where secured transactions remains relevant, priority questions need attachment, perfection, and priority in that order.',
  },
  {
    chapter: 'Essay Subjects and MEE Rule Muscles',
    title: 'Transition awareness',
    prompt: 'a July 2026 examinee asks whether legacy MEE subject lists remain unchanged. What is the best study response?',
    correct: 'Check the current NCBE subject outline and jurisdiction adoption status because tested subjects are changing during the transition',
    wrong: [
      ['Use a 2019 outline without checking updates', 'The 2026 transition changes tested subject expectations.'],
      ['Ignore NCBE materials because commercial outlines never age', 'Official outlines control the exam scope more directly than stale prep notes.'],
      ['Study only local law and skip multistate subjects', 'Jurisdiction components may matter, but UBE components still test multistate material.'],
    ],
    lesson: 'Bar prep in 2026 needs date-specific scope control because legacy and NextGen materials overlap during transition.',
  },
  {
    chapter: 'MPT - Lawyering in a 90-Minute Box',
    title: 'Task memo obedience',
    prompt: 'the supervising attorney asks for an objective memo with two issues and no separate facts section. What is the best MPT response?',
    correct: 'Follow the requested format and organize the memo around the two assigned issues',
    wrong: [
      ['Write a persuasive brief because it sounds more lawyerly', 'The MPT scores task compliance; changing format loses points.'],
      ['Use outside law from memory to impress the grader', 'The MPT supplies the law in the Library and expects its use.'],
      ['Spend most of the time summarizing every file document', 'The work product needs analysis, not a document inventory.'],
    ],
    lesson: 'MPT success starts with obeying the task memo, then using the Library and File to produce the requested document.',
  },
  {
    chapter: 'MPT - Lawyering in a 90-Minute Box',
    title: 'Rule synthesis',
    prompt: 'two Library cases state related but not identical tests. What should the examinee do in the work product?',
    correct: 'Synthesize the controlling rule and apply the relevant File facts to each element',
    wrong: [
      ['Quote both cases at length with no application', 'Rule dumping without fact application leaves points on the table.'],
      ['Choose the case with the shorter name automatically', 'Case name length is not a legal relevance test.'],
      ['Ignore the Library and rely on memory', 'MPT tasks are closed-universe; Library authority controls.'],
    ],
    lesson: 'MPT graders reward usable rule synthesis connected to client facts, not decorative case summaries.',
  },
  {
    chapter: 'Memorization, Retrieval, and Attack Outlines',
    title: 'Rule compression',
    prompt: 'a student can recite a full outline but freezes on timed essays. What is the best repair?',
    correct: 'Build attack-outline rules and practice closed-book application under timed conditions',
    wrong: [
      ['Read the full outline more passively and avoid writing', 'Passive rereading rarely fixes retrieval under pressure.'],
      ['Stop learning rules and rely entirely on vibes', 'Bar essays still require legal rules and elements.'],
      ['Practice only formatting because substance slows people down', 'Organization helps, but rules and facts carry the score.'],
    ],
    lesson: 'Attack outlines should convert large doctrine into retrievable issue cues, elements, and exceptions.',
  },
  {
    chapter: 'MBE Strategy and Distractor Surgery',
    title: 'True but irrelevant',
    prompt: 'an answer states a correct rule, but it addresses damages when the call asks only formation. How should it be treated?',
    correct: 'Eliminate it as true but irrelevant to the legal task asked',
    wrong: [
      ['Select it because any true rule is the best answer', 'MBE answers must answer the call, not merely state law.'],
      ['Select it if it is the longest answer', 'Length is not a reliability cue.'],
      ['Eliminate all answers containing legal rules', 'The right answer usually contains the right legal rule for the call.'],
    ],
    lesson: 'A polished distractor can be legally true and still wrong because it answers a different question.',
  },
  {
    chapter: 'Simulation, Final Review, and Exam-Day Execution',
    title: 'Time triage',
    prompt: 'an examinee is eight minutes over budget on an essay and still wants to perfect one minor issue. What is the best exam move?',
    correct: 'Move on after preserving the main points because unfinished components cost more than minor polish earns',
    wrong: [
      ['Spend unlimited time until the essay feels elegant', 'The bar is a timed exam; elegance cannot bankrupt later components.'],
      ['Leave the next essay blank to compensate', 'Blank answers forfeit available points.'],
      ['Rewrite the introduction three times', 'Introductions rarely drive scores compared with rule and fact analysis.'],
    ],
    lesson: 'Bar strategy is point banking. Finish every component with organized, legally responsive work.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Future interest classification',
    prompt: 'a grant gives land "to A for life, then to B if B graduates from law school." What is the best first property move?',
    correct: 'Classify the present estate and future interests before applying any validity rule',
    wrong: [
      ['Treat it as a contract offer because B might graduate', 'This is a conveyance of property interests, not offer acceptance.'],
      ['Ignore B because future interests never matter', 'Future interests are directly tested in property.'],
      ['Apply hearsay because the grant uses words', 'Written conveyance language is not being offered as courtroom hearsay here.'],
    ],
    lesson: 'Real property questions often become easier after drawing the present estate and future interests.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Summary judgment burden',
    prompt: 'a moving party shows no genuine dispute of material fact and entitlement to judgment as a matter of law. What should the nonmovant provide?',
    correct: 'Evidence showing a genuine dispute on a material fact, not mere allegations',
    wrong: [
      ['A more emotional complaint with stronger adjectives', 'Pleadings alone generally do not defeat a supported summary-judgment motion.'],
      ['A request for a jury without any factual showing', 'The jury right does not eliminate the need for a genuine factual dispute.'],
      ['An automatic appeal before judgment is entered', 'Appealability is separate and usually waits for a final judgment.'],
    ],
    lesson: 'Summary judgment tests whether the record, not the pleadings alone, shows a triable material fact.',
  },
  {
    chapter: 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence',
    title: 'Relevance and prejudice',
    prompt: 'evidence has some tendency to prove a disputed fact but also risks unfair emotional impact. What rule balance is implicated?',
    correct: 'Relevance plus Rule 403-style balancing of probative value against unfair prejudice',
    wrong: [
      ['Automatic admission because relevant evidence can never be excluded', 'Relevant evidence may still be excluded for unfair prejudice or other concerns.'],
      ['Automatic exclusion because emotional evidence is always unfair', 'Emotional effect is not the same as unfair prejudice.'],
      ['Personal jurisdiction because the evidence affects a person', 'Evidence admissibility is not minimum contacts analysis.'],
    ],
    lesson: 'Evidence questions distinguish logical relevance from discretionary exclusion for unfair prejudice, confusion, or waste.',
  },
  {
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'Homicide mental state',
    prompt: 'a killing occurs during conduct showing extreme recklessness rather than a deliberate intent to kill. Which distinction matters?',
    correct: 'The mental state may support a different homicide grade than purposeful killing',
    wrong: [
      ['All killings are the same offense if the result is death', 'Homicide grades turn on mental state and circumstances.'],
      ['Only property law applies because a body occupies land', 'The issue is criminal homicide, not estates in land.'],
      ['Consideration determines the grade', 'Consideration is a contract element, not a homicide element.'],
    ],
    lesson: 'Criminal law questions often turn on mens rea and grading facts.',
  },
  {
    chapter: 'Essay Subjects and MEE Rule Muscles',
    title: 'Fiduciary duty facts',
    prompt: 'a corporate director votes on a transaction that personally benefits the director. What should an essay answer analyze?',
    correct: 'Duty of loyalty, conflict handling, approval process, and fairness if relevant',
    wrong: [
      ['Only negligence per se because a director made a mistake', 'Director self-interest raises loyalty and conflict issues, not just negligence.'],
      ['Only personal jurisdiction because the corporation has a headquarters', 'Entity governance is distinct from court power.'],
      ['Only the best evidence rule because minutes exist', 'Minutes may be evidence, but the substantive issue is fiduciary duty.'],
    ],
    lesson: 'Business associations essays commonly reward spotting authority, fiduciary duty, conflicts, and governance approvals.',
  },
  {
    chapter: 'MPT - Lawyering in a 90-Minute Box',
    title: 'Client letter tone',
    prompt: 'the assigned work product is a client letter explaining litigation risk. Which tone is best?',
    correct: 'Clear, practical, and client-facing while still applying the Library law accurately',
    wrong: [
      ['A dense bench memo full of unexplained citations', 'A client letter should translate legal analysis into usable advice.'],
      ['A sales pitch promising victory', 'Lawyerly communication should not overpromise outcomes.'],
      ['A bullet list of all facts with no legal conclusion', 'The client needs analysis and recommendation, not raw notes.'],
    ],
    lesson: 'MPT format controls tone. The same legal analysis must be packaged for the assigned audience.',
  },
  {
    chapter: 'MBE Strategy and Distractor Surgery',
    title: 'Exception hunting',
    prompt: 'two answer choices state the general rule, but one ignores a fact triggering an exception. What should the examinee do?',
    correct: 'Choose the answer that accounts for the exception triggered by the facts',
    wrong: [
      ['Choose the broadest rule because broad answers feel safer', 'Broad rules often fail when an exception is the tested point.'],
      ['Ignore exception facts because they are usually decorative', 'Bar examiners include facts to change legal consequences.'],
      ['Select both answers even on single-best items', 'Single-best MBE items require one answer.'],
    ],
    lesson: 'Many MBE traps are correct general rules that fail under the specific exception in the stem.',
  },
]

const pmpConcepts: Concept[] = [
  {
    chapter: 'PMP Operating System',
    title: 'Best next action',
    prompt: 'the project manager notices a conflict between two functional leads that is slowing decisions. What should the project manager do first?',
    correct: 'Facilitate a collaborative discussion to understand the conflict and seek an agreed resolution',
    wrong: [
      ['Escalate immediately to the CEO before understanding the issue', 'Premature escalation skips the project manager responsibility to facilitate and analyze.'],
      ['Ignore the conflict because teams should self-correct eventually', 'Unmanaged conflict can damage delivery and stakeholder trust.'],
      ['Update the cost baseline to hide the delay', 'Baselines are not used to conceal conflict or performance issues.'],
    ],
    lesson: 'PMP scenarios usually prefer analyze, collaborate, and resolve at the right level before escalating.',
  },
  {
    chapter: 'People - Teams, Conflict, and Communication',
    title: 'Team charter breach',
    prompt: 'a team member repeatedly violates working agreements during reviews. What response best fits servant leadership?',
    correct: 'Address the behavior using the team charter, clarify expectations, and coach toward the agreed norm',
    wrong: [
      ['Remove the team member without conversation for the first violation', 'Immediate removal is disproportionate unless safety or ethics risk requires it.'],
      ['Let the violation continue to avoid discomfort', 'Avoidance undermines team norms and trust.'],
      ['Change the product roadmap so the behavior matters less', 'Roadmap changes do not solve conduct and collaboration issues.'],
    ],
    lesson: 'Servant leadership is not passivity. It means supporting the team while reinforcing agreed norms.',
  },
  {
    chapter: 'People - Teams, Conflict, and Communication',
    title: 'Distributed communication',
    prompt: 'a distributed team misses decisions because messages are scattered across private chats. What is the strongest action?',
    correct: 'Establish a transparent communication plan and shared decision log accessible to the team',
    wrong: [
      ['Ask everyone to send more private messages faster', 'More fragmented communication worsens the root cause.'],
      ['Cancel all meetings regardless of collaboration needs', 'Meeting reduction can help, but the issue is decision visibility.'],
      ['Wait until closing to document decisions', 'Decision logs are useful during execution, not only after the fact.'],
    ],
    lesson: 'Communication planning should match stakeholder needs, team distribution, and transparency requirements.',
  },
  {
    chapter: 'Stakeholders, Vision, and Business Value',
    title: 'Stakeholder resistance',
    prompt: 'an influential operations manager opposes the project because expected benefits are unclear. What should the project manager do?',
    correct: 'Engage the stakeholder to clarify expectations, value, impacts, and success measures',
    wrong: [
      ['Remove the stakeholder from the register because they are negative', 'Resistance is a reason to engage, not erase.'],
      ['Send only technical specifications and avoid benefit discussion', 'The concern is value and impact, not just technical design.'],
      ['Assume the sponsor will force support without communication', 'Sponsor authority does not replace stakeholder engagement.'],
    ],
    lesson: 'Stakeholder work connects expectations, value, influence, and communication strategy.',
  },
  {
    chapter: 'Stakeholders, Vision, and Business Value',
    title: 'Benefits measurement',
    prompt: 'the team delivers the requested system, but no one owns the post-launch adoption metric. What is missing?',
    correct: 'A benefits measurement owner and plan for tracking outcomes after delivery',
    wrong: [
      ['A larger project logo so adoption feels official', 'Branding does not assign accountability for benefits.'],
      ['A procurement claim against the sponsor', 'No supplier dispute is described.'],
      ['A rule that outputs are the same as outcomes', 'Outputs are deliverables; outcomes are value realized from use.'],
    ],
    lesson: 'Modern PMP emphasis includes value delivery, benefits, and outcomes, not just scope completion.',
  },
  {
    chapter: 'Starting and Planning the Work',
    title: 'Development approach',
    prompt: 'requirements are unclear, users can give frequent feedback, and the product can be released incrementally. Which approach is most suitable?',
    correct: 'An adaptive or hybrid approach that supports iterative learning and feedback',
    wrong: [
      ['A rigid predictive plan solely because it is easier to print', 'Unclear requirements and feedback needs favor adaptation.'],
      ['No project approach because uncertainty means work cannot begin', 'Uncertainty calls for tailoring, not paralysis.'],
      ['A procurement-only approach because users have opinions', 'User feedback affects delivery approach more directly than procurement by itself.'],
    ],
    lesson: 'PMP tailoring asks the project manager to match life cycle and artifacts to uncertainty, complexity, and value flow.',
  },
  {
    chapter: 'Starting and Planning the Work',
    title: 'WBS versus backlog',
    prompt: 'stable regulatory deliverables must be decomposed for accountability, while product features will evolve. What representation fits best?',
    correct: 'Use a WBS for stable scope and a prioritized backlog for evolving product work',
    wrong: [
      ['Use only a backlog and ignore mandated deliverables', 'Compliance deliverables may need explicit decomposition and ownership.'],
      ['Use only a WBS and freeze all learning', 'Evolving features benefit from backlog refinement.'],
      ['Use neither because two artifacts would be confusing', 'Hybrid contexts often need more than one tailored artifact.'],
    ],
    lesson: 'Hybrid planning can combine predictive decomposition with adaptive backlog management.',
  },
  {
    chapter: 'Executing, Monitoring, and Controlling',
    title: 'Change control',
    prompt: 'a stakeholder requests a scope addition after the scope baseline is approved. What should the project manager do?',
    correct: 'Submit the request through integrated change control with impact analysis',
    wrong: [
      ['Add the work immediately to keep the stakeholder happy', 'Baselined predictive scope changes require review and approval.'],
      ['Reject every change because baselines are sacred', 'Valid changes can be approved after analysis.'],
      ['Ask the team to work overtime without documentation', 'Undocumented changes create scope, schedule, and morale risk.'],
    ],
    lesson: 'Change control protects baselines and value by making impacts visible before approval.',
  },
  {
    chapter: 'Executing, Monitoring, and Controlling',
    title: 'Earned value signal',
    prompt: 'CPI is below 1.0 and SPI is above 1.0. What does the dashboard suggest?',
    correct: 'The project is ahead of schedule but over budget relative to earned value',
    wrong: [
      ['Both schedule and cost are favorable because one index is above 1.0', 'Each index must be interpreted separately.'],
      ['The project has no issue because SPI is positive', 'CPI below 1.0 signals cost inefficiency.'],
      ['Earned value cannot be interpreted until closure', 'EVM is designed for monitoring during delivery.'],
    ],
    lesson: 'PMP formulas matter most when translated into project decisions, not recited in isolation.',
  },
  {
    chapter: 'Executing, Monitoring, and Controlling',
    title: 'Quality prevention',
    prompt: 'defects are repeatedly found late during customer acceptance. What quality response is strongest?',
    correct: 'Analyze root causes and improve upstream quality practices to prevent recurrence',
    wrong: [
      ['Increase final inspection only and leave the process unchanged', 'Inspection catches defects but does not prevent the source problem.'],
      ['Lower acceptance criteria without stakeholder approval', 'Changing quality requirements needs governance and stakeholder agreement.'],
      ['Hide defect trends until the final report', 'Transparency is needed while corrective action is still possible.'],
    ],
    lesson: 'Quality management favors prevention, root-cause analysis, and continuous improvement over late heroics.',
  },
  {
    chapter: 'Risk, Issues, Compliance, and Procurement',
    title: 'Risk becomes issue',
    prompt: 'a previously identified supplier-delay risk has occurred and is now blocking integration testing. What should the PM update?',
    correct: 'Treat it as an issue, execute the response plan, and update issue and risk records',
    wrong: [
      ['Leave it only in the risk register because risks and issues are identical', 'A risk is uncertain; once it occurs it is managed as an issue.'],
      ['Close the project because one risk occurred', 'An issue calls for response and escalation as needed, not automatic closure.'],
      ['Delete the original risk to avoid embarrassment', 'Project records should preserve visibility and lessons learned.'],
    ],
    lesson: 'Risk management distinguishes uncertain events from issues that have already happened.',
  },
  {
    chapter: 'Risk, Issues, Compliance, and Procurement',
    title: 'Threat response',
    prompt: 'a critical component may fail certification, and redesign could reduce the probability. Which risk response is this?',
    correct: 'Mitigation because the team is reducing probability or impact of a threat',
    wrong: [
      ['Exploitation because the event is negative', 'Exploit is for opportunities, not threats.'],
      ['Acceptance because action is being taken', 'Active redesign is not passive acceptance.'],
      ['Transference because the team is doing the work itself', 'Transfer shifts ownership or impact to a third party, often through contract or insurance.'],
    ],
    lesson: 'Threat responses include avoid, mitigate, transfer, accept, and escalate; opportunities use different verbs.',
  },
  {
    chapter: 'Risk, Issues, Compliance, and Procurement',
    title: 'Contract type',
    prompt: 'scope is well defined and the buyer wants maximum cost predictability. Which contract type is usually most aligned?',
    correct: 'Fixed-price contract, assuming requirements are sufficiently stable',
    wrong: [
      ['Cost-reimbursable contract because the buyer wants price certainty', 'Cost-reimbursable contracts shift more cost risk to the buyer.'],
      ['Time-and-materials with no ceiling for maximum predictability', 'Open-ended T&M can reduce price predictability.'],
      ['No contract because predictability is desired', 'Predictability is a reason to choose terms carefully, not skip contracting.'],
    ],
    lesson: 'Procurement questions test risk allocation, scope clarity, incentives, and supplier management.',
  },
  {
    chapter: 'Agile, Hybrid, and Tailoring Lab',
    title: 'Product owner boundary',
    prompt: 'developers want the project manager to reorder backlog items without consulting the product owner. What is the best response?',
    correct: 'Facilitate backlog discussion while respecting the product owner role in prioritization',
    wrong: [
      ['Personally reorder everything because project managers outrank product owners in agile', 'Agile role boundaries matter; priority ownership is not unilateral PM control.'],
      ['Let developers choose priority solely by technical interest', 'Technical input matters, but value prioritization needs product ownership.'],
      ['Freeze the backlog forever to avoid conflict', 'Backlogs are expected to evolve through refinement.'],
    ],
    lesson: 'Agile questions often test role boundaries, servant leadership, and value-based prioritization.',
  },
  {
    chapter: 'Agile, Hybrid, and Tailoring Lab',
    title: 'WIP limit',
    prompt: 'work keeps starting but few items finish, and the Kanban board shows overloaded in-progress columns. What should the team try?',
    correct: 'Use or tighten WIP limits to improve flow and finish work before starting more',
    wrong: [
      ['Start more items so at least something completes', 'Starting more work worsens overloaded flow.'],
      ['Hide blocked items so the board looks healthier', 'Visual management requires honest transparency.'],
      ['Ban customer feedback because feedback creates work', 'Feedback helps value delivery; the issue is flow management.'],
    ],
    lesson: 'Kanban flow problems are often visible through WIP, cycle time, blocked work, and throughput.',
  },
  {
    chapter: 'Business Environment',
    title: 'Governance threshold',
    prompt: 'a proposed change exceeds the cost threshold set by governance policy. What should happen?',
    correct: 'Follow the defined escalation and approval path before implementation',
    wrong: [
      ['Implement first because governance is only for final reports', 'Governance thresholds exist to guide decisions before action.'],
      ['Split the change into smaller requests to avoid review', 'Circumventing governance is unethical and risky.'],
      ['Ask the team to absorb the cost without visibility', 'Hidden cost impacts undermine transparency and control.'],
    ],
    lesson: 'The 2026 PMP emphasis gives governance, compliance, and business environment a larger role in scenario judgment.',
  },
  {
    chapter: 'Business Environment',
    title: 'Compliance requirement',
    prompt: 'a new privacy regulation affects data collected by the project. What should the PM do?',
    correct: 'Assess compliance impact, engage appropriate experts, and update plans or backlog items as needed',
    wrong: [
      ['Ignore the regulation until after release', 'Compliance risks should be addressed while changes are still feasible.'],
      ['Ask developers to interpret the law alone', 'Legal or compliance expertise may be needed for regulatory impact.'],
      ['Remove all data features without analysis', 'The response should be proportionate and informed.'],
    ],
    lesson: 'Compliance scenarios require impact analysis, expert engagement, documentation, and appropriate action.',
  },
  {
    chapter: 'Business Environment',
    title: 'External market shift',
    prompt: 'a competitor releases a feature that changes customer expectations mid-project. What is the best PM action?',
    correct: 'Assess impact on business value with stakeholders and adapt scope or backlog through governance',
    wrong: [
      ['Ignore the market because the original plan is approved', 'Business value can change when the external environment changes.'],
      ['Add every competitor feature immediately', 'Reaction without prioritization can destroy focus and value.'],
      ['Cancel all risk management because the issue is external', 'External changes are part of business-environment risk.'],
    ],
    lesson: 'Projects should remain connected to strategy, market changes, and benefits throughout delivery.',
  },
  {
    chapter: 'Exam Strategy and Simulation',
    title: 'Escalation trap',
    prompt: 'an answer choice escalates to the sponsor before the project manager has analyzed impact or engaged the team. Why is it suspicious?',
    correct: 'PMP best-answer logic usually expects the PM to analyze and collaborate before escalating ordinary issues',
    wrong: [
      ['Sponsors should never be informed about anything', 'Sponsors need appropriate information and decisions at the right time.'],
      ['Escalation is always illegal', 'Escalation is valid when authority, threshold, or risk requires it.'],
      ['Analysis is useful only after closure', 'Analysis is central to in-flight project decisions.'],
    ],
    lesson: 'Many PMP distractors are too extreme: escalate too soon, act without facts, hide information, or ignore stakeholders.',
  },
  {
    chapter: 'Stakeholders, Vision, and Business Value',
    title: 'Shared vision drift',
    prompt: 'team members describe the project goal in conflicting ways during a review. What should the project leader do?',
    correct: 'Reestablish a shared vision with key stakeholders and align team understanding',
    wrong: [
      ['Assume conflicting descriptions prove the project is complete', 'Misalignment usually means the vision needs clarification.'],
      ['Ask each team member to pursue their own goal independently', 'Independent goals can fragment value delivery.'],
      ['Update only the risk register and avoid conversation', 'Documentation alone does not create shared understanding.'],
    ],
    lesson: 'The PMP ECO emphasizes common vision, stakeholder alignment, and keeping the vision current.',
  },
  {
    chapter: 'Starting and Planning the Work',
    title: 'Reserve use',
    prompt: 'an identified risk occurs and the approved response requires contingency funds. What is the proper reserve logic?',
    correct: 'Use contingency reserve according to the risk response and update forecasts and records',
    wrong: [
      ['Use management reserve without authorization for any minor issue', 'Management reserve is controlled separately and often needs approval.'],
      ['Treat all reserves as extra profit', 'Reserves are planned risk funds, not profit cushions.'],
      ['Never use reserves even when the risk occurs', 'Contingency reserve exists for identified risks.'],
    ],
    lesson: 'Finance planning includes contingency, management reserve, risk exposure, and transparent forecast updates.',
  },
  {
    chapter: 'Executing, Monitoring, and Controlling',
    title: 'Agile metric misuse',
    prompt: 'a manager wants to compare two teams only by velocity and punish the lower number. What should the PM or agile lead explain?',
    correct: 'Velocity is a planning signal for a team, not a standalone productivity ranking across teams',
    wrong: [
      ['Velocity is always identical across teams when agile is used', 'Teams estimate differently and have different contexts.'],
      ['The lower-velocity team must be removed immediately', 'One metric without context is a poor basis for punitive action.'],
      ['Velocity should be hidden from the team that produces it', 'Agile metrics should support transparency and improvement.'],
    ],
    lesson: 'Metrics should inform decisions without creating perverse incentives or ignoring context.',
  },
  {
    chapter: 'Risk, Issues, Compliance, and Procurement',
    title: 'Opportunity response',
    prompt: 'a vendor offers early access to a tool that could increase benefits if adopted with a partner. Which opportunity response may fit?',
    correct: 'Share or enhance the opportunity depending on whether partnership or probability improvement is the strategy',
    wrong: [
      ['Mitigate because all uncertain events are threats', 'Mitigation is a threat response; positive risks are opportunities.'],
      ['Avoid because benefits might increase', 'Avoid is used to eliminate threats, not pursue upside.'],
      ['Transfer because the word vendor appears', 'Transfer is a threat response that shifts impact, not automatically any vendor involvement.'],
    ],
    lesson: 'Positive risk responses include exploit, enhance, share, accept, and escalate.',
  },
  {
    chapter: 'Agile, Hybrid, and Tailoring Lab',
    title: 'Definition of done',
    prompt: 'stakeholders accept stories inconsistently because teams use different completion standards. What artifact or agreement helps most?',
    correct: 'A shared definition of done and acceptance criteria appropriate to the work',
    wrong: [
      ['A hidden checklist used only by the project manager', 'Completion standards need shared visibility.'],
      ['A longer sprint with no quality criteria', 'Duration does not solve inconsistent completion standards.'],
      ['A cost baseline instead of quality expectations', 'Cost control does not define product completion.'],
    ],
    lesson: 'Agile delivery needs visible quality and acceptance agreements so increments are truly usable.',
  },
  {
    chapter: 'Business Environment',
    title: 'Sustainability impact',
    prompt: 'a sponsor asks the team to ignore sustainability criteria that were part of approved success metrics. What should the PM do?',
    correct: 'Clarify governance-approved success metrics and assess any proposed change through the proper process',
    wrong: [
      ['Remove the criteria silently to satisfy the sponsor', 'Silent removal violates transparency and governance.'],
      ['Refuse all sponsor input regardless of authority', 'Sponsor input matters but should follow the change process.'],
      ['Treat sustainability as unrelated to project success by definition', 'The 2026 ECO explicitly includes broader value and sustainability considerations.'],
    ],
    lesson: 'Project success now extends beyond scope, schedule, and budget when governance defines broader outcomes.',
  },
]

const shrmConcepts: Concept[] = [
  {
    chapter: 'SHRM Decision Logic and HR\'s Role',
    title: 'Best answer order',
    prompt: 'a manager asks HR to terminate an employee immediately after a vague complaint. What is the best first HR response?',
    correct: 'Gather relevant facts, review policy and risk, and determine whether investigation or interim action is needed',
    wrong: [
      ['Terminate immediately because the manager is frustrated', 'HR should not support adverse action without facts, policy basis, and risk review.'],
      ['Ignore the complaint because it is vague', 'A vague complaint may still require fact-finding.'],
      ['Promise the employee a specific outcome before investigating', 'Predetermining outcomes undermines fairness and credibility.'],
    ],
    lesson: 'SHRM situational judgment often rewards lawful, fair, business-aware fact gathering before action.',
  },
  {
    chapter: 'People Domain: Talent, Total Rewards, and Employee Relations',
    title: 'Job analysis',
    prompt: 'a hiring team wants interview questions based on personality preferences rather than job requirements. What should HR recommend?',
    correct: 'Use job analysis to define competencies and structured interview questions tied to essential work',
    wrong: [
      ['Let each interviewer ask whatever feels interesting', 'Unstructured preference questions reduce reliability and defensibility.'],
      ['Select only candidates who resemble the current team', 'Similarity bias can undermine inclusion and job relevance.'],
      ['Avoid documenting criteria so the process feels flexible', 'Documentation supports consistency and legal defensibility.'],
    ],
    lesson: 'Selection systems should be job-related, structured, consistent, and documented.',
  },
  {
    chapter: 'People Domain: Talent, Total Rewards, and Employee Relations',
    title: 'Adverse impact review',
    prompt: 'a neutral assessment screens out one protected group at a much higher rate than others. What should HR do?',
    correct: 'Analyze adverse impact and validate whether the assessment is job-related and consistent with business necessity',
    wrong: [
      ['Keep using the test because it is facially neutral', 'Neutral practices can still create disparate impact.'],
      ['Discard all selection standards permanently', 'The goal is valid, job-related selection, not no standards.'],
      ['Tell recruiters to hide the results', 'Concealing data increases risk and prevents correction.'],
    ],
    lesson: 'Workplace domain knowledge includes practices that look neutral but may create legal or access risk.',
  },
  {
    chapter: 'People Domain: Talent, Total Rewards, and Employee Relations',
    title: 'Progressive discipline',
    prompt: 'a supervisor wants different discipline for two employees with similar records and conduct. What should HR check?',
    correct: 'Consistency, documentation, policy alignment, mitigating facts, and legitimate business reasons',
    wrong: [
      ['Approve the harsher action for the less popular employee', 'Popularity is not a legitimate discipline factor.'],
      ['Forbid all discipline if perfect consistency is impossible', 'Differences can be justified by relevant facts.'],
      ['Skip documentation to preserve manager flexibility', 'Documentation is central to fair and defensible employee relations.'],
    ],
    lesson: 'Discipline should be proportionate, documented, consistent, and connected to policy and facts.',
  },
  {
    chapter: 'People Domain: Talent, Total Rewards, and Employee Relations',
    title: 'Total rewards fit',
    prompt: 'turnover among scarce engineers is rising and exit data points to career growth more than base pay. What should HR analyze?',
    correct: 'Retention drivers such as career paths, development, recognition, manager quality, and competitive rewards',
    wrong: [
      ['Increase pay only and ignore exit themes', 'Pay may matter, but the data points to broader retention drivers.'],
      ['Assume turnover is healthy because all teams change', 'Turnover among scarce roles can threaten strategy.'],
      ['Eliminate development programs to reduce cost', 'Development may be part of the retention solution.'],
    ],
    lesson: 'Total rewards and retention require diagnosing the business problem before choosing a lever.',
  },
  {
    chapter: 'Organization Domain: Strategy, Structure, and Change',
    title: 'Change readiness',
    prompt: 'leaders announce a reorganization but managers cannot explain why it matters. What should HR recommend?',
    correct: 'Build a change plan with stakeholder analysis, manager enablement, communication, and success measures',
    wrong: [
      ['Send one email and assume adoption is complete', 'Change requires reinforcement and manager readiness.'],
      ['Delay all communication until rumors stop', 'Silence usually increases rumor and resistance.'],
      ['Focus only on the org chart and ignore behavior change', 'Structure alone does not ensure adoption.'],
    ],
    lesson: 'SHRM organization-domain questions connect strategy, culture, communication, and change adoption.',
  },
  {
    chapter: 'Organization Domain: Strategy, Structure, and Change',
    title: 'Training transfer',
    prompt: 'employees liked a training class, but performance did not improve. What should HR evaluate next?',
    correct: 'Whether learning transferred to behavior and results, including manager support and job conditions',
    wrong: [
      ['Declare success because satisfaction scores were high', 'Reaction data is not the same as behavior or business impact.'],
      ['Cancel all training because one class did not move results', 'The issue needs diagnosis before broad cancellation.'],
      ['Measure only attendance because attendance is easiest', 'Attendance does not show learning transfer.'],
    ],
    lesson: 'Evidence-based HR distinguishes reaction, learning, behavior, and results.',
  },
  {
    chapter: 'Organization Domain: Strategy, Structure, and Change',
    title: 'Succession risk',
    prompt: 'a critical role has one incumbent nearing retirement and no ready successor. What is HR\'s most strategic move?',
    correct: 'Create a succession and development plan tied to business continuity risk',
    wrong: [
      ['Wait until the employee resigns to start recruiting', 'Succession planning addresses foreseeable continuity risk.'],
      ['Promote the most available person without readiness review', 'Availability is not the same as capability or fit.'],
      ['Keep the risk secret so leaders do not worry', 'Leadership needs visibility into critical talent risk.'],
    ],
    lesson: 'Strategic HR translates workforce risks into plans for capability, continuity, and leadership readiness.',
  },
  {
    chapter: 'Workplace Domain: Compliance, Risk, Safety, and Inclusion',
    title: 'Accommodation process',
    prompt: 'an employee requests a schedule change due to a medical condition. What should HR do?',
    correct: 'Engage in an interactive process, obtain appropriate information, and assess reasonable accommodation options',
    wrong: [
      ['Deny the request because schedules must be identical for everyone', 'Equal treatment does not eliminate accommodation duties.'],
      ['Ask for a full medical history unrelated to the request', 'Medical information requests should be limited and appropriate.'],
      ['Promise any requested accommodation before analysis', 'The process evaluates reasonableness and business impact.'],
    ],
    lesson: 'Accommodation questions reward process discipline: engage, document, assess, and protect confidentiality.',
  },
  {
    chapter: 'Workplace Domain: Compliance, Risk, Safety, and Inclusion',
    title: 'Harassment complaint',
    prompt: 'an employee reports harassment but asks HR to keep it completely secret and do nothing. What is the best response?',
    correct: 'Explain confidentiality limits and take appropriate steps to assess and address the concern',
    wrong: [
      ['Promise absolute secrecy and close the file', 'HR cannot promise inaction if the organization may need to prevent harm.'],
      ['Broadcast the complaint to the whole department', 'Need-to-know confidentiality still matters.'],
      ['Retaliate against the employee for raising a concern', 'Retaliation creates serious legal and ethical risk.'],
    ],
    lesson: 'Employee relations investigations require confidentiality limits, anti-retaliation protection, and prompt appropriate action.',
  },
  {
    chapter: 'Workplace Domain: Compliance, Risk, Safety, and Inclusion',
    title: 'Wage and hour risk',
    prompt: 'nonexempt employees answer work messages after hours and do not record the time. What should HR address?',
    correct: 'Off-the-clock work risk, timekeeping expectations, manager practices, and pay correction if needed',
    wrong: [
      ['Ignore the time because messages were short', 'Short work periods can still be compensable depending on facts and law.'],
      ['Reclassify everyone as exempt without duties review', 'Exemption classification requires legal criteria, not convenience.'],
      ['Delete the messages to avoid payroll questions', 'Destroying evidence and avoiding pay obligations increases risk.'],
    ],
    lesson: 'Wage and hour scenarios often test classification, hours worked, records, manager training, and remediation.',
  },
  {
    chapter: 'Workplace Domain: Compliance, Risk, Safety, and Inclusion',
    title: 'Safety escalation',
    prompt: 'employees report a serious hazard that could cause immediate injury. What should HR prioritize?',
    correct: 'Take prompt safety action, involve responsible safety leaders, and document mitigation',
    wrong: [
      ['Schedule a discussion for next quarter because safety is cultural', 'Immediate hazards require prompt action.'],
      ['Treat the report as gossip unless three managers agree', 'Safety concerns should be assessed, not dismissed by popularity vote.'],
      ['Discipline employees for reporting the hazard', 'Punishing safety reports can create retaliation and compliance risk.'],
    ],
    lesson: 'Safety and compliance issues can require urgent escalation before ordinary coaching or survey work.',
  },
  {
    chapter: 'Behavioral Competencies in Practice',
    title: 'Ethical pushback',
    prompt: 'an executive asks HR to alter investigation notes to make a termination easier. Which competency is most directly tested?',
    correct: 'Ethical practice, including refusing to falsify records and escalating appropriately',
    wrong: [
      ['Relationship management means doing whatever the executive asks', 'Relationships do not override ethics or documentation integrity.'],
      ['Business acumen means hiding facts to reduce legal fees', 'Business acumen includes sustainable risk management, not falsification.'],
      ['Communication means using vague wording to conceal the request', 'Clear escalation is needed when integrity is threatened.'],
    ],
    lesson: 'SHRM behavioral competencies include judgment and courage, not just interpersonal smoothness.',
  },
  {
    chapter: 'Behavioral Competencies in Practice',
    title: 'Consultation role',
    prompt: 'a leader wants HR to rubber-stamp a decision that conflicts with policy. What is the best HR posture?',
    correct: 'Consult as a business partner by explaining risks, options, policy requirements, and recommended action',
    wrong: [
      ['Approve the decision because partnership means agreement', 'Consultation includes advising and challenging when needed.'],
      ['Refuse to discuss alternatives and quote policy only', 'Effective consultation combines policy, options, and business impact.'],
      ['Tell employees about the confidential leadership conversation', 'Confidentiality still matters while advising leaders.'],
    ],
    lesson: 'HR consultation balances credibility, policy, business needs, and ethical judgment.',
  },
  {
    chapter: 'Data, Metrics, and Evidence-Based HR',
    title: 'Turnover diagnosis',
    prompt: 'turnover is high in one unit, but compensation is market-competitive. What data should HR review next?',
    correct: 'Manager practices, engagement, workload, promotion rates, exit themes, and demographic patterns',
    wrong: [
      ['Assume pay is always the only turnover cause', 'Turnover has multiple drivers beyond compensation.'],
      ['Ignore unit-level differences because company turnover is average', 'Localized hotspots can still create business risk.'],
      ['Stop collecting exit data because it is uncomfortable', 'Evidence is needed to diagnose and act.'],
    ],
    lesson: 'Evidence-based HR asks which metric answers the business question and what additional data reduces uncertainty.',
  },
  {
    chapter: 'Data, Metrics, and Evidence-Based HR',
    title: 'Metric gaming',
    prompt: 'recruiters are measured only on time-to-fill and start pushing poorly matched candidates. What should HR adjust?',
    correct: 'Balance speed with quality, retention, hiring-manager satisfaction, and candidate experience metrics',
    wrong: [
      ['Reward even faster fills regardless of outcomes', 'Single-metric pressure can create bad behavior.'],
      ['Stop measuring recruiting entirely', 'The fix is better metrics, not no visibility.'],
      ['Blame candidates for accepting jobs too quickly', 'The process design is driving the behavior.'],
    ],
    lesson: 'HR dashboards should avoid incentives that improve a number while harming the business outcome.',
  },
  {
    chapter: 'Employee Relations Lab',
    title: 'Investigation plan',
    prompt: 'a complaint names two witnesses and includes dates, but the accused manager denies everything. What should HR do?',
    correct: 'Plan a fair investigation with interviews, document review, credibility assessment, and anti-retaliation reminders',
    wrong: [
      ['Close the case because the manager denied the allegation', 'Denial is evidence to consider, not a reason to skip investigation.'],
      ['Assume the complaint is true without fact-finding', 'Fair process requires assessing evidence.'],
      ['Interview only friends of the manager', 'Biased witness selection undermines reliability.'],
    ],
    lesson: 'Employee relations investigations separate allegations, facts, credibility, policy findings, and recommendations.',
  },
  {
    chapter: 'Employee Relations Lab',
    title: 'Retaliation prevention',
    prompt: 'after an employee complains, the manager removes desirable assignments with no documented reason. What should HR assess?',
    correct: 'Potential retaliation and whether there is a legitimate, documented business reason for the change',
    wrong: [
      ['Ignore it because assignments are always discretionary', 'Discretion can still be used in a retaliatory way.'],
      ['Tell the employee complaints always reduce opportunities', 'That statement would be direct retaliation risk.'],
      ['Focus only on whether the original complaint was proven', 'Retaliation can occur even if the original complaint is not substantiated.'],
    ],
    lesson: 'Retaliation analysis looks at protected activity, adverse action, timing, and legitimate reasons.',
  },
  {
    chapter: 'Exam Survival and Scenario Judgment',
    title: 'Extreme answers',
    prompt: 'two options say to ignore the issue or fire everyone immediately. Why are they weak SHRM answers?',
    correct: 'They are extreme responses that skip proportional fact-based action',
    wrong: [
      ['Extreme answers are always correct because HR must be decisive', 'Decisiveness without facts or proportionality is risky.'],
      ['SHRM items never test judgment', 'Situational judgment items explicitly test decision-making.'],
      ['Ignoring issues is best when time is short', 'Time pressure does not excuse unsafe or unlawful inaction.'],
    ],
    lesson: 'SHRM best-answer logic often avoids extremes and favors fact-based, ethical, business-aligned action.',
  },
  {
    chapter: 'SHRM Decision Logic and HR\'s Role',
    title: 'Business alignment',
    prompt: 'HR proposes a talent initiative but cannot connect it to strategic goals or workforce risk. What should be improved?',
    correct: 'Tie the initiative to business strategy, expected outcomes, metrics, and stakeholder needs',
    wrong: [
      ['Launch it anyway because HR programs do not need business cases', 'Strategic HR should show business relevance.'],
      ['Use only inspirational language and no measures', 'Inspiration does not replace outcomes or accountability.'],
      ['Avoid stakeholders until the program is finished', 'Stakeholder input helps design and adoption.'],
    ],
    lesson: 'SHRM expects HR to operate as a business partner with evidence, metrics, and stakeholder alignment.',
  },
  {
    chapter: 'People Domain: Talent, Total Rewards, and Employee Relations',
    title: 'Onboarding gap',
    prompt: 'new hires leave within 45 days and surveys show unclear expectations. What should HR examine?',
    correct: 'Onboarding, role clarity, manager check-ins, realistic job previews, and early support',
    wrong: [
      ['Assume all early turnover is unavoidable', 'Early turnover often reveals process or expectation gaps.'],
      ['Increase recruiting volume without fixing onboarding', 'More hiring will not solve early attrition drivers.'],
      ['Delay manager involvement until annual review', 'Early manager support is critical.'],
    ],
    lesson: 'Talent management covers the full employee life cycle, including selection, onboarding, performance, and retention.',
  },
  {
    chapter: 'Organization Domain: Strategy, Structure, and Change',
    title: 'Culture diagnosis',
    prompt: 'engagement scores are high overall, but comments show employees fear speaking up about defects. What should HR tell leaders?',
    correct: 'Overall scores may mask psychological safety or culture risks that need targeted action',
    wrong: [
      ['High average scores prove there are no issues', 'Averages can hide meaningful pockets of risk.'],
      ['Delete negative comments to protect morale', 'Suppressing data undermines trust and learning.'],
      ['Treat defects as solely an engineering issue with no people dimension', 'Speak-up culture is an organizational and leadership issue.'],
    ],
    lesson: 'HR analytics require interpretation, segmentation, and attention to what the metric may hide.',
  },
  {
    chapter: 'Workplace Domain: Compliance, Risk, Safety, and Inclusion',
    title: 'Privacy minimum',
    prompt: 'a supervisor asks HR to share an employee medical note with the full team. What should HR do?',
    correct: 'Protect confidential medical information and disclose only what is necessary to those with a business need',
    wrong: [
      ['Share the note because coworkers are curious', 'Curiosity is not a business need.'],
      ['Post it without names even if details identify the employee', 'De-identification must be meaningful, not cosmetic.'],
      ['Refuse to discuss any work restriction with the manager', 'Managers may need limited restriction information to implement accommodation.'],
    ],
    lesson: 'Privacy questions test minimum necessary disclosure, confidentiality, and operational need-to-know.',
  },
  {
    chapter: 'Behavioral Competencies in Practice',
    title: 'Global mindset',
    prompt: 'a policy designed for U.S. employees is being rolled out globally without local legal or cultural review. What should HR recommend?',
    correct: 'Assess local law, culture, business needs, and stakeholder input before implementation',
    wrong: [
      ['Apply the U.S. policy everywhere because consistency is always legal', 'Global consistency must be balanced with local requirements.'],
      ['Let each office invent unrelated policies with no governance', 'Localization still needs coherent governance.'],
      ['Translate the words and skip legal review', 'Translation does not address legal or cultural fit.'],
    ],
    lesson: 'Global mindset means adapting HR practices responsibly across legal and cultural contexts.',
  },
  {
    chapter: 'Data, Metrics, and Evidence-Based HR',
    title: 'Four-fifths flag',
    prompt: 'selection rates suggest one group is selected at substantially less than four-fifths of the highest group rate. What should HR do?',
    correct: 'Treat it as an adverse-impact flag requiring analysis, validation review, and possible process correction',
    wrong: [
      ['Assume the process is illegal without further analysis', 'The four-fifths rule is a screening flag, not a final legal conclusion by itself.'],
      ['Ignore it because the rule is only math', 'The metric points to a possible fairness and legal issue.'],
      ['Fix it by changing scores after selection is complete with no basis', 'Manipulating results is not a defensible validation strategy.'],
    ],
    lesson: 'Adverse-impact metrics are diagnostic tools that should trigger evidence-based review.',
  },
  {
    chapter: 'Employee Relations Lab',
    title: 'Credibility factors',
    prompt: 'two witnesses give conflicting accounts of the same incident. What should HR evaluate?',
    correct: 'Consistency, plausibility, corroboration, motive, opportunity to observe, and documentation',
    wrong: [
      ['Believe the higher-ranking person automatically', 'Rank is not a credibility factor by itself.'],
      ['Pick the account that is shorter', 'Brevity does not establish reliability.'],
      ['Avoid findings whenever accounts conflict', 'Investigations often require reasoned credibility determinations.'],
    ],
    lesson: 'Investigation findings should explain how evidence and credibility factors support the conclusion.',
  },
]

const patentConcepts: Concept[] = [
  {
    chapter: 'Patent System, Exam Format, and MPEP Navigation',
    title: 'Source material control',
    prompt: 'a candidate finds a blog summary that conflicts with the current USPTO source-material list. What should control exam preparation?',
    correct: 'The current USPTO registration-exam source materials and relevant MPEP revision',
    wrong: [
      ['The blog controls because it is easier to read', 'Convenience does not override USPTO-designated source materials.'],
      ['Any old MPEP version is fine because patent law never changes', 'The tested source materials can change and must be checked.'],
      ['Commercial flashcards replace the MPEP during the exam', 'The exam source set, not third-party summaries, controls.'],
    ],
    lesson: 'Patent bar study should be tied to the USPTO source-material list and current tested MPEP revision.',
  },
  {
    chapter: 'Patentability and Subject Matter Eligibility',
    title: 'Eligibility category',
    prompt: 'an application claims a mathematical idea without a practical application or additional inventive concept. What issue is most direct?',
    correct: 'Subject matter eligibility under the abstract-idea framework',
    wrong: [
      ['Inventorship only because math has authors', 'Inventorship may matter elsewhere, but the stated defect is eligibility.'],
      ['Restriction practice because numbers can be divided', 'Restriction concerns distinct inventions, not abstract-idea eligibility.'],
      ['Assignment recordation because the claim has value', 'Ownership recordation does not cure ineligible subject matter.'],
    ],
    lesson: 'Eligibility questions ask whether the claimed invention fits statutory categories and avoids judicial exceptions or adds enough application.',
  },
  {
    chapter: 'Patentability and Subject Matter Eligibility',
    title: 'Enablement gap',
    prompt: 'the specification states the desired result but gives no teaching that lets a skilled artisan make and use the full claimed scope. What rejection is implicated?',
    correct: 'Lack of enablement because the disclosure does not teach how to make and use the claimed invention',
    wrong: [
      ['Anticipation solely because the claim is broad', 'Breadth alone is not anticipation without a prior-art disclosure of every limitation.'],
      ['Double patenting because the result is desirable', 'Desirability does not create double patenting.'],
      ['Small entity status because the inventor lacks details', 'Entity status is a fee issue, not disclosure sufficiency.'],
    ],
    lesson: 'Disclosure requirements test whether the specification supports, describes, enables, and distinctly claims the invention.',
  },
  {
    chapter: 'Claims and Specification Support',
    title: 'New matter amendment',
    prompt: 'after filing, the applicant adds a claim limitation that has no support in the original specification, drawings, or claims. What is the concern?',
    correct: 'The amendment may introduce prohibited new matter',
    wrong: [
      ['The amendment is always allowed if it narrows the claim', 'Narrowing still requires original disclosure support.'],
      ['The issue is only fee payment', 'Fees do not cure lack of written support.'],
      ['The limitation becomes prior art against the applicant', 'Unsupported new matter is a disclosure problem, not automatically applicant prior art.'],
    ],
    lesson: 'Claim amendments must stay within the original disclosure; narrower does not automatically mean supported.',
  },
  {
    chapter: 'Claims and Specification Support',
    title: 'Dependent claim logic',
    prompt: 'claim 2 refers back to claim 1 and adds a narrower limitation. What is true about claim 2?',
    correct: 'It includes all limitations of claim 1 plus the additional limitation',
    wrong: [
      ['It replaces claim 1 and removes all earlier limitations', 'A dependent claim incorporates the referenced claim limitations.'],
      ['It is invalid solely because it is shorter', 'Length does not determine validity.'],
      ['It can never be separately patentable', 'A dependent claim can add a patentably significant limitation.'],
    ],
    lesson: 'Dependent claims narrow by incorporating the parent claim and adding further limitations.',
  },
  {
    chapter: 'Prior Art and Novelty',
    title: 'Every limitation',
    prompt: 'a reference discloses most claim elements but omits one required limitation. What is the anticipation result?',
    correct: 'The reference does not anticipate unless it discloses every claim limitation arranged as required',
    wrong: [
      ['It anticipates because most elements are enough', 'Anticipation requires every limitation.'],
      ['It proves lack of utility automatically', 'Missing a limitation in prior art does not show the invention lacks utility.'],
      ['It bars filing fees from being paid', 'Prior art analysis does not determine fee payment ability.'],
    ],
    lesson: 'Novelty analysis is limitation-by-limitation. Missing one required element defeats anticipation.',
  },
  {
    chapter: 'Prior Art and Novelty',
    title: 'Effective filing date',
    prompt: 'a reference date falls between a provisional filing and the nonprovisional filing, and the claim may not be supported by the provisional. What must be analyzed?',
    correct: 'Whether the claim is entitled to the provisional filing date for the relevant subject matter',
    wrong: [
      ['Assume every later claim automatically gets every provisional date', 'Priority requires support for the claimed subject matter.'],
      ['Ignore dates because prior art is only about words', 'Effective dates determine whether references qualify.'],
      ['Treat the provisional as an issued patent', 'A provisional preserves a filing date but does not issue as a patent.'],
    ],
    lesson: 'Prior-art questions often turn on effective filing dates and whether priority documents support the claim.',
  },
  {
    chapter: 'Obviousness and Rejection Analysis',
    title: 'Motivation to combine',
    prompt: 'an examiner combines two references but does not explain why a skilled artisan would combine them. What response point is strongest?',
    correct: 'Challenge the rationale to combine and reasonable expectation of success if unsupported by the record',
    wrong: [
      ['Argue that two references can never be combined', 'Obviousness can rely on combinations when supported.'],
      ['Argue only that the applicant worked hard', 'Effort alone does not overcome obviousness.'],
      ['Pay an issue fee to end examination immediately', 'An issue fee is not the response to an outstanding rejection.'],
    ],
    lesson: 'Obviousness analysis needs claim limitations, reference teachings, rationale to combine, and expectation of success.',
  },
  {
    chapter: 'Obviousness and Rejection Analysis',
    title: 'Secondary considerations',
    prompt: 'the applicant has evidence of unexpected results tied to the claimed feature. How should it be used?',
    correct: 'Present it as objective evidence of nonobviousness with a nexus to the claimed invention',
    wrong: [
      ['Submit it without explaining connection to the claims', 'Objective evidence is strongest when tied to claimed features.'],
      ['Use it only to prove inventorship', 'Unexpected results address nonobviousness, not who invented.'],
      ['Ignore it because examiners never consider evidence', 'Evidence can matter when properly presented and connected.'],
    ],
    lesson: 'Secondary considerations need a nexus to the claim and should be integrated with the obviousness response.',
  },
  {
    chapter: 'Prosecution Procedure and Office Actions',
    title: 'Non-final response',
    prompt: 'the first Office action rejects all claims as obvious. What is a standard applicant option?',
    correct: 'Timely respond with amendments, arguments, evidence, or a combination addressing the rejection',
    wrong: [
      ['Do nothing and assume prosecution continues indefinitely', 'Failure to respond can lead to abandonment.'],
      ['File an issue fee because all claims are rejected', 'Issue fees follow allowance, not rejection.'],
      ['Call the examiner and rely on an undocumented oral promise only', 'Interviews can help, but a timely written response is required.'],
    ],
    lesson: 'Office action procedure is deadline-driven and requires a response that actually addresses outstanding issues.',
  },
  {
    chapter: 'Prosecution Procedure and Office Actions',
    title: 'Final rejection options',
    prompt: 'after a final rejection, the applicant wants continued examination with claim amendments. What procedural path is commonly available?',
    correct: 'File a request for continued examination if appropriate, with the required submission and fee',
    wrong: [
      ['Assume final rejection means no further USPTO option exists', 'Final rejection limits ordinary amendment practice but does not end all options.'],
      ['Pay the maintenance fee before any patent issues', 'Maintenance fees are post-issuance.'],
      ['Record an assignment to force allowance', 'Ownership recordation does not overcome substantive rejections.'],
    ],
    lesson: 'After final rejection, applicants must choose among compliant options such as amendment practice, RCE, appeal, or abandonment strategy.',
  },
  {
    chapter: 'Prosecution Procedure and Office Actions',
    title: 'Restriction requirement',
    prompt: 'the examiner requires election between distinct inventions in one application. What should the applicant do?',
    correct: 'Make an election and preserve rights as appropriate, while considering divisional strategy',
    wrong: [
      ['Ignore the requirement because restriction is optional for examiners only', 'Restriction requirements demand a response.'],
      ['Cancel all claims automatically without strategy', 'Election can be made while preserving non-elected claims for later practice.'],
      ['Argue copyright law because there are multiple ideas', 'Patent restriction practice is not copyright analysis.'],
    ],
    lesson: 'Restriction practice tests election, rejoinder, divisional applications, and claim-group strategy.',
  },
  {
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'IDS timing',
    prompt: 'the practitioner learns of material prior art during prosecution. What duty and procedural tool are implicated?',
    correct: 'Duty of disclosure and filing an information disclosure statement consistent with timing rules',
    wrong: [
      ['Keep it private because unfavorable art need not be disclosed', 'Material information can trigger disclosure duties.'],
      ['Submit it only after litigation begins', 'Disclosure obligations arise during prosecution.'],
      ['Send it to the client but not the Office under any circumstances', 'Client notice alone may not satisfy duty to the Office.'],
    ],
    lesson: 'IDS questions combine duty of disclosure, materiality, timing, and proper submission mechanics.',
  },
  {
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'Priority claim correction',
    prompt: 'a priority claim appears defective and the deadline may still allow correction by petition or proper filing. What should be checked first?',
    correct: 'The specific rule, timing, required statement or petition, and whether the priority benefit can still be restored',
    wrong: [
      ['Assume all priority defects are incurable forever', 'Some defects can be corrected if requirements and timing are met.'],
      ['Assume all defects are automatically cured without action', 'Priority claims often require specific timely action.'],
      ['Change inventorship to fix priority without analysis', 'Inventorship and priority are distinct issues.'],
    ],
    lesson: 'Procedural edge cases require exact timing, required documents, fees, and petition standards.',
  },
  {
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'Appeal posture',
    prompt: 'the applicant believes the examiner maintains an erroneous rejection after final. What route may be appropriate if prosecution is otherwise ready?',
    correct: 'Appeal to the Patent Trial and Appeal Board with the required notices and briefs',
    wrong: [
      ['File a trademark opposition in the same application', 'Trademark opposition is unrelated to patent application appeal.'],
      ['Pay maintenance fees to make the rejection disappear', 'Maintenance fees do not address pending rejections.'],
      ['Ask the examiner to issue a patent without addressing the rejection', 'Outstanding rejections must be overcome or reversed.'],
    ],
    lesson: 'Appeal is a procedural route for contesting maintained rejections, with its own deadlines and briefing requirements.',
  },
  {
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'Certificate of correction',
    prompt: 'an issued patent contains a minor clerical mistake that does not require reexamination of patentability. What tool may fit?',
    correct: 'A certificate of correction if the statutory and rule requirements are met',
    wrong: [
      ['A continuation application that edits the issued patent directly', 'Continuations do not directly correct issued patent text.'],
      ['A restriction requirement after issuance', 'Restriction is prosecution practice, not issued-patent correction.'],
      ['A terminal disclaimer for every typo', 'Terminal disclaimers address term and double-patenting issues, not ordinary clerical errors.'],
    ],
    lesson: 'Post-allowance and post-issuance tools differ: correction, reissue, reexamination, and continuation practice are not interchangeable.',
  },
  {
    chapter: 'USPTO Ethics and Practitioner Judgment',
    title: 'Duty of candor',
    prompt: 'a practitioner knows of material prior art that undermines patentability but the client asks not to disclose it. What is the best response?',
    correct: 'Explain and comply with the duty of disclosure and candor to the Office, or withdraw if necessary',
    wrong: [
      ['Follow the client instruction because loyalty always beats candor', 'Practitioners owe duties to the Office as well as clients.'],
      ['Submit false arguments to distract the examiner', 'False or misleading conduct violates professional duties.'],
      ['Wait until after allowance because disclosure is optional then', 'Material information during prosecution cannot be hidden strategically.'],
    ],
    lesson: 'USPTO ethics questions often test candor, conflicts, signatures, communication, and withdrawal judgment.',
  },
  {
    chapter: 'USPTO Ethics and Practitioner Judgment',
    title: 'Conflict screen',
    prompt: 'a practitioner is asked to prosecute claims for two clients seeking overlapping patent scope. What should be assessed?',
    correct: 'Whether a conflict of interest exists and whether representation is permissible with informed consent or must be declined',
    wrong: [
      ['Represent both secretly to preserve revenue', 'Undisclosed conflicts violate professional duties.'],
      ['Assume patent matters can never create conflicts', 'Patent prosecution can create direct adversity or material limitation conflicts.'],
      ['Let the examiner decide the conflict', 'Conflict analysis is the practitioner responsibility.'],
    ],
    lesson: 'Practitioner judgment includes identifying conflicts before confidential information and claim strategy collide.',
  },
  {
    chapter: 'Patentability and Subject Matter Eligibility',
    title: 'Utility requirement',
    prompt: 'the application claims a compound but gives no specific, substantial, and credible use. What issue is raised?',
    correct: 'Utility, because the application must disclose a specific and credible practical use',
    wrong: [
      ['Venue, because the compound is located somewhere', 'Venue is litigation procedure, not patentability.'],
      ['Best mode only, because usefulness never matters', 'Utility is a separate patentability requirement.'],
      ['Maintenance fee timing, because compounds are expensive', 'Maintenance fees occur after issuance and do not establish utility.'],
    ],
    lesson: 'Utility questions ask whether the invention has a specific, substantial, and credible use.',
  },
  {
    chapter: 'Claims and Specification Support',
    title: 'Antecedent basis',
    prompt: 'a claim later refers to "the fastener" even though no fastener was introduced earlier. What drafting issue is likely?',
    correct: 'Lack of antecedent basis or claim clarity problem',
    wrong: [
      ['Anticipation by the applicant\'s own grammar', 'Antecedent basis is a clarity issue, not a prior-art disclosure.'],
      ['Assignment defect because the word belongs to someone', 'Claim grammar is not ownership recordation.'],
      ['Foreign filing license because the term sounds technical', 'Foreign filing licenses are unrelated to claim antecedent basis.'],
    ],
    lesson: 'Claim clarity includes antecedent basis, definiteness, and consistent limitation language.',
  },
  {
    chapter: 'Prior Art and Novelty',
    title: 'Public disclosure exception',
    prompt: 'an inventor publicly disclosed the invention before filing, then a third party published the same subject matter afterward. What must be checked?',
    correct: 'Whether an AIA grace-period exception applies based on the inventor-originated disclosure and timing',
    wrong: [
      ['Assume every disclosure by anyone is fatal forever', 'AIA exceptions can protect certain inventor-originated disclosures.'],
      ['Ignore public disclosures because only patents count as prior art', 'Public disclosures can qualify as prior art.'],
      ['Treat the third party as the inventor automatically', 'Publication does not by itself establish inventorship.'],
    ],
    lesson: 'AIA prior-art questions often turn on who disclosed what, when, and whether an exception applies.',
  },
  {
    chapter: 'Obviousness and Rejection Analysis',
    title: 'Teaching away',
    prompt: 'the primary reference discourages the modification proposed by the examiner. What argument may be relevant?',
    correct: 'The reference may teach away from the combination, weakening the obviousness rationale',
    wrong: [
      ['Teaching away proves the claim is indefinite', 'Teaching away is an obviousness concept, not definiteness.'],
      ['Any discouraging language guarantees allowance', 'Teaching away helps but must be weighed with the full record.'],
      ['The applicant should abandon automatically', 'A possible argument is not a reason for automatic abandonment.'],
    ],
    lesson: 'Obviousness is fact-sensitive; teaching away can undermine motivation to combine.',
  },
  {
    chapter: 'Prosecution Procedure and Office Actions',
    title: 'After allowance',
    prompt: 'the application is allowed and the applicant wants the patent to issue. What payment is generally required?',
    correct: 'Timely payment of the issue fee and completion of any required formalities',
    wrong: [
      ['A request for continued examination is always required after allowance', 'RCE reopens prosecution; it is not required for normal issuance.'],
      ['A notice of appeal is required to accept allowance', 'Appeal contests rejection, not allowance.'],
      ['A new nonprovisional application must be filed for the same claims', 'Allowed claims can proceed to issuance through issue procedures.'],
    ],
    lesson: 'Allowance shifts attention to issue fee, formalities, and post-allowance strategy.',
  },
  {
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'Revival inquiry',
    prompt: 'an application went abandoned after a missed response deadline, and the client asks whether it can be restored. What should be checked?',
    correct: 'Whether revival is available under the applicable standard, timing, petition, fee, and required response',
    wrong: [
      ['Assume abandoned applications can never be revived', 'Revival may be available if requirements are met.'],
      ['Assume revival occurs automatically when the client apologizes', 'Revival requires formal petition practice and compliance.'],
      ['File only an assignment because ownership revives prosecution', 'Assignment recordation does not revive an abandoned application.'],
    ],
    lesson: 'Revival questions are procedural: standard, delay, petition, fee, and missing response all matter.',
  },
  {
    chapter: 'USPTO Ethics and Practitioner Judgment',
    title: 'Signature responsibility',
    prompt: 'a nonpractitioner assistant prepares a response and asks to sign the practitioner\'s name. What is the correct professional stance?',
    correct: 'The practitioner must review and sign only filings for which they can take responsibility under USPTO rules',
    wrong: [
      ['Let anyone sign if the deadline is close', 'Signature rules and practitioner responsibility do not disappear near deadlines.'],
      ['Backdate the signature to preserve appearance', 'Backdating is dishonest and creates ethics risk.'],
      ['Avoid reviewing because assistants are efficient', 'Delegation does not eliminate practitioner supervision.'],
    ],
    lesson: 'USPTO practice permits support work, but practitioners remain responsible for proper review, signatures, and candor.',
  },
]

export const careerAgentGeneratedCredentialExpansionProfessionalQuestionsByTrack: Record<string, Question[]> = {
  cpaExam: expandTrack(4610000, 160, cpaConcepts, cpaLeads),
  barExam: expandTrack(4611000, 160, barConcepts, barLeads),
  pmpWrangler: expandTrack(4612000, 150, pmpConcepts, pmpLeads),
  shrmPeople: expandTrack(4613000, 150, shrmConcepts, shrmLeads),
  patentBar: expandTrack(4614000, 170, patentConcepts, patentLeads),
}
