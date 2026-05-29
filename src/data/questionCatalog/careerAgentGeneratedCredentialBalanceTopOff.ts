import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

const SOURCE = 'Floe career agent-generated credential expansion 2026-05-20'

type Trap = [label: string, flaw: string, reframe: string]

type BalanceSeed = {
  trackId: string
  baseId: number
  topic: Topic
  chapter: string
  title: string
  prompt: string
  correct: string
  traps: Trap[]
  lesson: string
}

const contexts = [
  'A learner is reviewing a missed question and needs the most defensible next move.',
  'A practice item adds one operational fact that changes the answer.',
  'A supervisor asks what should be documented before the file is closed.',
  'A timed exam stem includes a tempting shortcut and one controlling detail.',
  'A reviewer wants the answer that would survive later scrutiny.',
]

function q(seed: BalanceSeed, index: number): Question {
  return makeSimpleQuestion(
    seed.baseId + index,
    seed.topic,
    seed.chapter,
    `${seed.title} - balance drill ${index + 1}`,
    `${contexts[index % contexts.length]} ${seed.prompt}`,
    seed.correct,
    seed.traps,
    seed.lesson,
    SOURCE,
  )
}

function expand(seed: BalanceSeed): Question[] {
  return Array.from({ length: contexts.length }, (_, index) => q(seed, index))
}

const commonTraps = {
  shortcut: ['Choose the fastest administrative shortcut', 'Speed does not make an unsupported decision defensible.', 'Use the controlling rule, fact, and record.'] as Trap,
  vague: ['Write a vague note that the issue was reviewed', 'A vague note does not show what facts or rule controlled the decision.', 'Document the reasoning chain.'] as Trap,
  escalateAll: ['Escalate every routine item immediately', 'Escalation is useful when risk or authority requires it, but routine items still need applied judgment.', 'Match escalation to risk.'] as Trap,
}

const seeds: BalanceSeed[] = [
  {
    trackId: 'series86',
    baseId: 5200000,
    topic: 'Series 86',
    chapter: 'FINRA Function Map and Research Analyst Workflow',
    title: 'Series 86 workflow triage',
    prompt: 'The stem mixes financial-statement facts, valuation assumptions, and publication language. What should the candidate decide first?',
    correct: 'Classify whether the question is testing Series 86 analysis or Series 87 communication conduct before solving details',
    traps: [commonTraps.shortcut, ['Start calculating every number immediately', 'Calculation can waste time if the tested domain is disclosure or supervision.', 'Classify the task first.'], ['Treat all research questions as valuation questions', 'Research analyst exams split analytical and communication duties.', 'Map the stem to the exam function.']],
    lesson: 'A strong Series 86 workflow starts by identifying the tested analytical function and separating it from Series 87 communication rules.',
  },
  {
    trackId: 'series86',
    baseId: 5200010,
    topic: 'Series 86',
    chapter: 'Function 1 — Information, Data, and Source Quality',
    title: 'Source quality',
    prompt: 'An earnings preview relies on one management comment, stale industry data, and a fresh filing footnote. What is the best analytical habit?',
    correct: 'Rank sources by reliability, recency, representativeness, and relevance before using them in the model',
    traps: [commonTraps.shortcut, ['Use only the most optimistic source', 'Optimism is not a source-quality criterion.', 'Weight evidence by quality.'], ['Ignore the filing because it is harder to read', 'Difficult evidence may still be the controlling evidence.', 'Use the most reliable source.']],
    lesson: 'Series 86 information-gathering questions reward disciplined source selection before model work.',
  },
  {
    trackId: 'series86',
    baseId: 5200020,
    topic: 'Series 86',
    chapter: 'Exam Practice, Error Review, and Internal Floe Resources',
    title: 'Error log use',
    prompt: 'A candidate repeatedly misses valuation questions for different apparent reasons. What is the best error-log entry?',
    correct: 'Record the tested concept, clue missed, arithmetic step, trap type, and next drill',
    traps: [commonTraps.vague, ['Mark every miss as careless', 'Careless is often a label, not a diagnosis.', 'Name the specific failure mode.'], ['Only reread the whole manual', 'Rereading can help, but targeted practice needs a specific error diagnosis.', 'Turn each miss into a drill.']],
    lesson: 'Failed-question review becomes useful when each miss produces a specific corrective action.',
  },
  {
    trackId: 'series87',
    baseId: 5200100,
    topic: 'Regulatory',
    chapter: 'Research Analyst Role and Exam Map',
    title: 'Series 87 domain triage',
    prompt: 'A question mentions a research report, a media appearance, a conflict disclosure, and a supervisory approval step. What should the candidate identify first?',
    correct: 'The regulated communication or conduct obligation being tested before choosing the next action',
    traps: [commonTraps.shortcut, ['Build a valuation model first', 'Series 87 is primarily about regulated communications and conduct, not model construction.', 'Identify the communication rule.'], ['Assume the analyst can decide alone', 'Many Series 87 issues require supervision, disclosure, or compliance process.', 'Check the role and authority.']],
    lesson: 'Series 87 questions are easiest when the candidate first names the communication, disclosure, supervision, or MNPI issue.',
  },
  {
    trackId: 'series87',
    baseId: 5200110,
    topic: 'Regulatory',
    chapter: 'Public Appearances and Other Research Communications',
    title: 'Public appearance control',
    prompt: 'An analyst is invited to discuss a covered issuer on a live segment before a rating change has been published. What is the safest response?',
    correct: 'Use only approved, supportable public information and avoid previewing unpublished research or unsupported certainty',
    traps: [commonTraps.shortcut, ['Hint at the change without saying it directly', 'A hint can still selectively preview unpublished research.', 'Stay within approved public information.'], ['Say anything is permitted because the segment is public', 'A public medium does not remove approval, balance, or accuracy obligations.', 'Treat it as a regulated communication.']],
    lesson: 'Public appearances require approval discipline, fair presentation, and care around unpublished research.',
  },
  {
    trackId: 'series87',
    baseId: 5200120,
    topic: 'Regulatory',
    chapter: 'Dissemination, Corrections, and Recordkeeping',
    title: 'Correction workflow',
    prompt: 'After publication, the team finds a material spreadsheet error that affects the price target support. What should happen next?',
    correct: 'Escalate under firm procedures and issue a prompt, transparent correction or update with a retained audit trail',
    traps: [commonTraps.vague, ['Quietly fix only the internal model', 'Readers may still rely on the published error.', 'Correct the communication record.'], ['Wait until the next scheduled report no matter what', 'A material error may require prompt action.', 'Match timing to materiality.']],
    lesson: 'Material research errors need controlled correction, distribution discipline, and records that show what changed.',
  },
  {
    trackId: 'series87',
    baseId: 5200130,
    topic: 'Regulatory',
    chapter: 'Supervision and Approval Workflow',
    title: 'Pre-use review',
    prompt: 'A junior analyst wants to send a draft note to clients before principal review because the market is moving. What is the best answer?',
    correct: 'Follow required supervisory review and approval before distribution',
    traps: [commonTraps.shortcut, ['Send only to the largest client first', 'Selective early distribution creates fairness and supervision problems.', 'Use approved distribution controls.'], ['Ask for approval after clients react', 'Retroactive review defeats the control.', 'Review comes before use.']],
    lesson: 'Supervisory controls are pre-use controls; market urgency does not erase approval requirements.',
  },
  {
    trackId: 'series87',
    baseId: 5200140,
    topic: 'Regulatory',
    chapter: 'Analyst Ethics and MNPI Boundaries',
    title: 'MNPI boundary',
    prompt: 'A banker offers deal details to help the analyst understand a covered issuer. What is the best immediate action?',
    correct: 'Decline or stop the flow of information and escalate through information-barrier procedures before receiving or using MNPI',
    traps: [commonTraps.shortcut, ['Accept the information but avoid quoting it', 'Using MNPI indirectly can still violate controls.', 'Do not receive or use improper information.'], ['Share it with only the research team', 'Internal sharing can compound an information-barrier breach.', 'Escalate through the defined process.']],
    lesson: 'Analyst ethics questions often turn on stopping improper information flow before it contaminates research work.',
  },
  {
    trackId: 'series87',
    baseId: 5200150,
    topic: 'Regulatory',
    chapter: 'Series 87 Exam Execution and Mixed Scenarios',
    title: 'Mixed Series 87 scenario',
    prompt: 'A stem combines a draft research report, a pending media appearance, a missing disclosure, and an approval question. What should the candidate do?',
    correct: 'Identify each regulated issue, then choose the answer that handles the highest-risk required action first',
    traps: [commonTraps.shortcut, ['Answer only the valuation part of the stem', 'Series 87 mixed scenarios usually test conduct and communication controls.', 'Resolve the regulated communication issue.'], ['Ignore sequencing because all issues matter', 'When several issues appear, the best answer often turns on the first required action.', 'Prioritize required action and risk.']],
    lesson: 'Mixed Series 87 questions require issue sorting across disclosure, supervision, public appearance, dissemination, correction, and MNPI rules.',
  },
  {
    trackId: 'barExam',
    baseId: 5200200,
    topic: 'Career Skills',
    chapter: 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property',
    title: 'MBE Core II issue sorting',
    prompt: 'A fact pattern includes a broken promise, a later injury, a police search, and a deed transfer. What is the best first move?',
    correct: 'Separate the facts by subject and apply the elements for the specific doctrine being tested',
    traps: [commonTraps.shortcut, ['Write one general fairness answer', 'MBE Core II questions turn on elements, defenses, and timing.', 'Sort by doctrine.'], ['Assume every injury is only a tort issue', 'The same stem can test contracts, criminal procedure, or property consequences.', 'Follow the call of the question.']],
    lesson: 'Contracts, torts, criminal law/procedure, and property questions reward subject triage before rule selection.',
  },
  {
    trackId: 'shrmPeople',
    baseId: 5200300,
    topic: 'Career Skills',
    chapter: 'Employee Relations Lab',
    title: 'Employee relations investigation',
    prompt: 'A manager requests immediate termination after a complaint, but the documentation is thin and witnesses disagree. What should HR do first?',
    correct: 'Define the allegation, preserve relevant evidence, interview fairly, and document findings before recommending action',
    traps: [commonTraps.shortcut, ['Terminate immediately because the manager is frustrated', 'Frustration does not replace a fair and documented process.', 'Investigate before deciding.'], ['Promise confidentiality without limits', 'HR should protect information but cannot promise absolute confidentiality.', 'Explain process boundaries clearly.']],
    lesson: 'Employee relations work needs fair process, evidence discipline, and proportionate recommendations.',
  },
  {
    trackId: 'patentBar',
    baseId: 5200400,
    topic: 'Career Skills',
    chapter: 'MPEP Drills and Procedural Edge Cases',
    title: 'MPEP edge case',
    prompt: 'An application has a priority issue, a possible IDS problem, and an approaching response deadline. What should the practitioner do first?',
    correct: 'Identify the controlling MPEP topic and deadline before choosing the petition, response, or disclosure path',
    traps: [commonTraps.shortcut, ['Draft a merits argument before checking the procedural deadline', 'A good argument can still fail if the procedural path is wrong or late.', 'Control deadline and procedure first.'], ['Assume every defect can be fixed the same way', 'Priority, IDS, revival, correction, and response problems have different procedures.', 'Match the fix to the defect.']],
    lesson: 'Patent bar procedural questions reward fast MPEP navigation and careful distinction among edge-case remedies.',
  },
  {
    trackId: 'crcm',
    baseId: 5200500,
    topic: 'Regulatory',
    chapter: 'Product-Rule Mapping',
    title: 'Product-rule matrix',
    prompt: 'A bank launches a new digital credit feature that changes application intake, disclosures, and servicing. What should compliance build first?',
    correct: 'A product-rule matrix mapping lifecycle events to requirements, owners, controls, and test evidence',
    traps: [commonTraps.vague, ['Review only the marketing page', 'Marketing is only one lifecycle point.', 'Map obligations across the product journey.'], ['Wait for complaints before mapping rules', 'Rule mapping should happen before customer harm appears.', 'Build controls before launch.']],
    lesson: 'CRCM-style product work starts by mapping rules to product events and control owners.',
  },
  {
    trackId: 'crcm',
    baseId: 5200510,
    topic: 'Regulatory',
    chapter: 'Complaints, UDAAP, and Customer Harm',
    title: 'Complaint trend',
    prompt: 'Complaints show customers repeatedly misunderstood a fee after call-center explanations. What is the best compliance response?',
    correct: 'Analyze root cause, customer harm, UDAAP risk, remediation, and control changes to scripts or disclosures',
    traps: [commonTraps.shortcut, ['Treat each complaint as isolated without checking patterns', 'Repeated complaints can indicate a systemic issue.', 'Trend and root-cause the pattern.'], ['Change the fee name only', 'Renaming does not resolve unclear practice or customer harm.', 'Fix the cause.']],
    lesson: 'Complaint analysis should connect customer harm, root cause, remediation, and prevention.',
  },
  {
    trackId: 'crcm',
    baseId: 5200520,
    topic: 'Regulatory',
    chapter: 'Fair Lending and Community Obligations',
    title: 'Fair lending dashboard',
    prompt: 'A pricing exception report shows unexplained differences across borrower groups. What should compliance do?',
    correct: 'Review data quality, policy reasons, protected-class risk, controls, and whether remediation or escalation is needed',
    traps: [commonTraps.vague, ['Assume differences are acceptable because exceptions are allowed', 'Allowed exceptions can still create fair-lending risk if not controlled.', 'Test policy and outcomes.'], ['Suppress the report until the next exam', 'Avoiding evidence worsens governance risk.', 'Escalate credible risk.']],
    lesson: 'Fair lending work requires evidence-based review of policy, exceptions, outcomes, and controls.',
  },
  {
    trackId: 'crcm',
    baseId: 5200530,
    topic: 'Regulatory',
    chapter: 'BSA/AML, Privacy, and Information Protection',
    title: 'Cross-functional control map',
    prompt: 'A deposit product uses customer data for onboarding, fraud screening, and marketing preferences. What should compliance verify?',
    correct: 'How BSA/AML, privacy, safeguarding, disclosures, and handoffs are controlled across the product workflow',
    traps: [commonTraps.shortcut, ['Review only the BSA policy', 'The facts also raise privacy and information-protection obligations.', 'Map the cross-functional controls.'], ['Assume vendors own all data obligations', 'Outsourcing does not eliminate bank oversight.', 'Verify owner, control, and evidence.']],
    lesson: 'Bank compliance often sits across BSA/AML, GLBA/privacy, information security, and customer communications.',
  },
  {
    trackId: 'crcm',
    baseId: 5200540,
    topic: 'Regulatory',
    chapter: 'Regulatory Change and Board Reporting',
    title: 'Regulatory change memo',
    prompt: 'A final rule changes disclosure timing for a product line. What should the compliance manager report?',
    correct: 'Impacted products, required control changes, owners, deadlines, testing plan, residual risk, and decisions needed',
    traps: [commonTraps.vague, ['Forward the rule text with no impact analysis', 'Leadership needs applied implications, not just raw text.', 'Translate rule into action.'], ['Update training only', 'Training is not enough if systems, procedures, and tests remain old.', 'Operationalize the change.']],
    lesson: 'Regulatory change management turns new obligations into owners, controls, dates, testing, and board-ready status.',
  },
  {
    trackId: 'crcm',
    baseId: 5200550,
    topic: 'Regulatory',
    chapter: 'Monitoring, Testing, and Issue Management',
    title: 'Monitoring plan',
    prompt: 'A bank marks a finding closed after policy updates, but no sample testing confirms the new control works. What should compliance do?',
    correct: 'Validate operating effectiveness with defined test steps, evidence, exceptions, and closure criteria',
    traps: [commonTraps.vague, ['Close the issue because the policy changed', 'A policy update does not prove the control operates effectively.', 'Validate the fix.'], ['Retitle the repeat finding to avoid escalation', 'Changing the label does not remediate root cause.', 'Track and escalate repeat issues honestly.']],
    lesson: 'CRCM monitoring and issue management require testing evidence, root-cause discipline, and defensible closure.',
  },
  {
    trackId: 'ccep',
    baseId: 5200600,
    topic: 'Regulatory',
    chapter: 'Governance, Reporting Lines, and Independence',
    title: 'Compliance independence',
    prompt: 'A business leader wants all sensitive reports routed only through the revenue organization. What is the best compliance concern?',
    correct: 'The reporting line may undermine independence, authority, and board visibility for significant compliance risks',
    traps: [commonTraps.shortcut, ['Accept because revenue owns the relationship', 'Business ownership does not replace independent compliance access.', 'Protect authority and escalation.'], ['Move every report straight to regulators', 'Internal governance and escalation usually come first unless law or urgency requires otherwise.', 'Use the governance path.']],
    lesson: 'Effective compliance programs need authority, independence, resources, and access to senior leadership or the board.',
  },
  {
    trackId: 'ccep',
    baseId: 5200610,
    topic: 'Regulatory',
    chapter: 'Reporting Channels and Escalation',
    title: 'Hotline triage',
    prompt: 'A hotline report alleges retaliation and possible document destruction. What is the best first response?',
    correct: 'Triage severity, preserve evidence, protect against retaliation, and route the matter under the escalation matrix',
    traps: [commonTraps.vague, ['Wait for a second complaint before acting', 'Retaliation and evidence risk require timely triage.', 'Preserve and route promptly.'], ['Tell the accused manager all details immediately', 'Premature disclosure can compromise evidence or reporter protection.', 'Control confidentiality and process.']],
    lesson: 'Reporting channels need severity triage, routing, evidence preservation, and non-retaliation controls.',
  },
  {
    trackId: 'ccep',
    baseId: 5200620,
    topic: 'Regulatory',
    chapter: 'Investigations and Case Management',
    title: 'Investigation scope',
    prompt: 'An allegation is broad, emotional, and partly unsupported. What should the investigation plan do?',
    correct: 'Define the allegation, scope, evidence sources, interview order, confidentiality limits, and decision standard',
    traps: [commonTraps.shortcut, ['Investigate every rumor in the department', 'Overbroad scope can become unfair and ineffective.', 'Scope the allegation clearly.'], ['Close the case because the first report is emotional', 'Tone does not determine whether risk exists.', 'Test facts through process.']],
    lesson: 'A good investigation plan is fair, scoped, evidence-driven, and documented from intake to closure.',
  },
  {
    trackId: 'customsBroker',
    baseId: 5200700,
    topic: 'Career Skills',
    chapter: 'Broker Role, Exam Format, and Reference Navigation',
    title: 'CBLE reference navigation',
    prompt: 'A customs broker exam question combines broker responsibility, entry timing, and HTSUS classification. What should the candidate do first?',
    correct: 'Identify the controlling reference area and search term before trying to solve from memory',
    traps: [commonTraps.shortcut, ['Rely on a remembered rule without checking the reference', 'The CBLE rewards precise reference navigation.', 'Use the controlling source.'], ['Start with the longest answer choice', 'Length is not evidence.', 'Start with reference and issue.']],
    lesson: 'Customs broker preparation depends on knowing where to find the controlling rule quickly and accurately.',
  },
  {
    trackId: 'aigp',
    baseId: 5200800,
    topic: 'Regulatory',
    chapter: 'Generative AI Evaluation and Security',
    title: 'GenAI evaluation gate',
    prompt: 'A generative AI tool will answer customer questions using retrieval over internal documents. What release gate matters most?',
    correct: 'Test groundedness, prompt-injection resistance, sensitive-data leakage, unsafe outputs, and escalation thresholds before launch',
    traps: [commonTraps.shortcut, ['Launch because the demo answers look fluent', 'Fluency does not prove accuracy, safety, or security.', 'Evaluate failure modes.'], ['Measure only average response length', 'Length does not test groundedness or risk.', 'Use risk-relevant evaluations.']],
    lesson: 'Generative AI governance needs evaluation sets and security testing tied to real deployment risks.',
  },
  {
    trackId: 'apiInspectors',
    baseId: 5200900,
    topic: 'Career Skills',
    chapter: 'Equipment Design Basics and Inspection Data',
    title: 'Equipment data sheet',
    prompt: 'An inspector receives thickness readings but no design pressure, material, service history, or prior inspection record. What is the best next step?',
    correct: 'Collect the missing equipment design and service data before drawing a continued-service conclusion',
    traps: [commonTraps.shortcut, ['Approve continued service from thickness readings alone', 'Thickness data needs design and service context.', 'Gather the basis first.'], ['Reject the equipment automatically', 'Missing data requires follow-up, not necessarily immediate rejection.', 'Use evidence-based inspection judgment.']],
    lesson: 'API inspection decisions depend on design basis, service conditions, materials, history, and inspection data together.',
  },
]

export const careerAgentGeneratedCredentialBalanceTopOffQuestionsByTrack: Record<string, Question[]> = seeds.reduce(
  (acc, seed) => {
    acc[seed.trackId] = [...(acc[seed.trackId] ?? []), ...expand(seed)]
    return acc
  },
  {} as Record<string, Question[]>,
)
