// Auto-generated (regenerate: npx tsx _gen_r2.mts). Round-2 (103-pass) career top-ups,
// each marked generated:true. Appended to the matching career track in buildCareerQuestionCatalog.
import type { Question } from './types'
import { astrophysicsIntroR2Questions } from './astrophysicsIntroR2'
import { asvabPrepR2Questions } from './asvabPrepR2'
import { autoMechanicsR2Questions } from './autoMechanicsR2'
import { clinicalResearchJargonR2Questions } from './clinicalResearchJargonR2'
import { cloudInfrastructureRoadmapR2Questions } from './cloudInfrastructureRoadmapR2'
import { consultingCasesR2Questions } from './consultingCasesR2'
import { criticalThinkingR2Questions } from './criticalThinkingR2'
import { cybersecOpsJargonR2Questions } from './cybersecOpsJargonR2'
import { cybersecurityOperationsRoadmapR2Questions } from './cybersecurityOperationsRoadmapR2'
import { cybersecurityR2Questions } from './cybersecurityR2'
import { defenseBudgetingJargonR2Questions } from './defenseBudgetingJargonR2'
import { enterpriseSaaSRoadmapR2Questions } from './enterpriseSaaSRoadmapR2'
import { financialModelingR2Questions } from './financialModelingR2'
import { homeElectricalR2Questions } from './homeElectricalR2'
import { hospitalAdministrationRoadmapR2Questions } from './hospitalAdministrationRoadmapR2'
import { howLawsAreMadeR2Questions } from './howLawsAreMadeR2'
import { hvacBasicsR2Questions } from './hvacBasicsR2'
import { ibJargonR2Questions } from './ibJargonR2'
import { investingBasicsR2Questions } from './investingBasicsR2'
import { medicalBillingJargonR2Questions } from './medicalBillingJargonR2'
import { medicalBillingRoadmapR2Questions } from './medicalBillingRoadmapR2'
import { medicalR2Questions } from './medicalR2'
import { mlR2Questions } from './mlR2'
import { nationalSecurityPolicyRoadmapR2Questions } from './nationalSecurityPolicyRoadmapR2'
import { negotiationR2Questions } from './negotiationR2'
import { nursingFloorOpsRoadmapR2Questions } from './nursingFloorOpsRoadmapR2'
import { peopleManagementR2Questions } from './peopleManagementR2'
import { personalFinanceR2Questions } from './personalFinanceR2'
import { philosophyIntroR2Questions } from './philosophyIntroR2'
import { physicianPracticeRoadmapR2Questions } from './physicianPracticeRoadmapR2'
import { plumbingBasicsR2Questions } from './plumbingBasicsR2'
import { pregnancyBasicsR2Questions } from './pregnancyBasicsR2'
import { priyasBrutalSurgeonsQuizR2Questions } from './priyasBrutalSurgeonsQuizR2'
import { productManagementR2Questions } from './productManagementR2'
import { professionalEthicsR2Questions } from './professionalEthicsR2'
import { projectManagementR2Questions } from './projectManagementR2'
import { psychology101R2Questions } from './psychology101R2'
import { publicAffairsR2Questions } from './publicAffairsR2'
import { publicSpeakingR2Questions } from './publicSpeakingR2'
import { salesFundamentalsR2Questions } from './salesFundamentalsR2'
import { softwareEngineeringRoadmapR2Questions } from './softwareEngineeringRoadmapR2'
import { softwareR2Questions } from './softwareR2'
import { statisticsIntroR2Questions } from './statisticsIntroR2'
import { supplyChainR2Questions } from './supplyChainR2'
import { technicalSalesR2Questions } from './technicalSalesR2'
import { understandingAnxietyR2Questions } from './understandingAnxietyR2'
import { understandingDepressionR2Questions } from './understandingDepressionR2'
import { understandingLonelinessR2Questions } from './understandingLonelinessR2'
import { usGovernmentWorksR2Questions } from './usGovernmentWorksR2'
import { uxDesignR2Questions } from './uxDesignR2'
import { uxResearchR2Questions } from './uxResearchR2'
import { vcJargonR2Questions } from './vcJargonR2'
import { votingElectionsR2Questions } from './votingElectionsR2'
import { worldHistoryR2Questions } from './worldHistoryR2'

type TrackHintProfile = {
  domainNudge: string
  operatingLens: string
}

const TRACK_HINT_PROFILES: Partial<Record<string, TrackHintProfile>> = {
  astrophysicsIntro: {
    domainNudge: 'Think like an astrophysicist: connect the scale in the prompt to the physical mechanism, not to a memorized space fact.',
    operatingLens: 'track what is moving, emitting, attracting, or being measured before choosing the answer',
  },
  asvabPrep: {
    domainNudge: 'Treat this as a practical aptitude question: slow down, identify the rule, and avoid the answer that only feels familiar.',
    operatingLens: 'use the given quantities, mechanical relationship, or word clue exactly as stated',
  },
  autoMechanics: {
    domainNudge: 'Picture the car as a system with symptoms, causes, and safe next checks.',
    operatingLens: 'separate the visible symptom from the component or maintenance step that actually explains it',
  },
  clinicalResearchJargon: {
    domainNudge: 'Translate the clinical-research term into what it protects: participants, protocol integrity, data quality, or the audit trail.',
    operatingLens: 'choose the answer that would keep a site coordinator and monitor aligned on the same meaning',
  },
  cloudInfrastructureRoadmap: {
    domainNudge: 'Think like an infrastructure owner: reliability, cost, security, and operability all matter at once.',
    operatingLens: 'favor the option that makes the system easier to run under real traffic and failure conditions',
  },
  consultingCases: {
    domainNudge: 'Use a consulting case lens: define the business objective, then isolate the driver or constraint that changes the recommendation.',
    operatingLens: 'prefer the answer that would structure the client problem instead of jumping to an unsupported fix',
  },
  criticalThinking: {
    domainNudge: 'Read this as an argument, not just a claim.',
    operatingLens: 'separate evidence, assumption, and conclusion before trusting the answer that sounds persuasive',
  },
  cybersecOpsJargon: {
    domainNudge: 'Translate the security term into the operational job it performs during detection, response, or risk reduction.',
    operatingLens: 'match the answer to the control, signal, or incident workflow named by the prompt',
  },
  cybersecurityOperationsRoadmap: {
    domainNudge: 'Think like a security-operations lead: the right move should improve visibility, containment, or repeatable response.',
    operatingLens: 'prioritize the action that reduces risk while preserving a usable trail for later investigation',
  },
  cybersecurity: {
    domainNudge: 'Frame the question around attacker path, defensive control, and blast radius.',
    operatingLens: 'look for the answer that addresses the actual vulnerability or exposure rather than a nearby security buzzword',
  },
  defenseBudgetingJargon: {
    domainNudge: 'Translate the budgeting term into the decision, appropriation, or oversight step it controls.',
    operatingLens: 'keep funding authority, timing, and accountability separate as you read the choices',
  },
  enterpriseSaaSRoadmap: {
    domainNudge: 'Think in enterprise SaaS terms: buyer risk, implementation friction, retention, and expansion are usually linked.',
    operatingLens: 'choose the option that would make the account, product, or rollout more durable over time',
  },
  financialModeling: {
    domainNudge: 'Treat the model as a chain of assumptions, drivers, and outputs.',
    operatingLens: 'name the line item or metric being affected before deciding which answer preserves the economics',
  },
  homeElectrical: {
    domainNudge: 'Use a safety-first electrical lens: identify the circuit condition before picking a tool, device, or fix.',
    operatingLens: 'favor the answer that respects load, grounding, protection, and safe troubleshooting order',
  },
  hospitalAdministrationRoadmap: {
    domainNudge: 'Think like a hospital operator balancing safety, throughput, staffing, quality, and reimbursement.',
    operatingLens: 'pick the answer that would still make sense in a daily huddle or executive review',
  },
  howLawsAreMade: {
    domainNudge: 'Track where the proposal is in the lawmaking process before judging who can act next.',
    operatingLens: 'separate drafting, committee work, floor votes, executive action, and judicial review',
  },
  hvacBasics: {
    domainNudge: 'Think of the HVAC system as airflow, refrigerant flow, heat transfer, controls, and safety protections working together.',
    operatingLens: 'match the symptom or measurement to the part of the system that could realistically cause it',
  },
  ibJargon: {
    domainNudge: 'Translate the banking term into the deal, valuation, or client-coverage work it actually affects.',
    operatingLens: 'keep process language, accounting mechanics, and market judgment in separate buckets',
  },
  investingBasics: {
    domainNudge: 'Use an investor lens: risk, time horizon, diversification, fees, and behavior usually matter more than hot takes.',
    operatingLens: 'choose the answer that preserves long-term decision quality rather than chasing a short-term story',
  },
  medicalBillingJargon: {
    domainNudge: 'Translate the billing term into where money, documentation, payer rules, or patient responsibility changes hands.',
    operatingLens: 'track whether the prompt is about coding, submission, adjudication, denial, payment, or collection',
  },
  medicalBillingRoadmap: {
    domainNudge: 'Think like a revenue-cycle manager: clean data, timely work, payer rules, and follow-up discipline drive cash.',
    operatingLens: 'choose the answer that reduces rework, leakage, deadline risk, or ambiguity in the billing workflow',
  },
  medical: {
    domainNudge: 'Use a clinical-safety lens before a trivia lens.',
    operatingLens: 'identify the urgent risk, diagnostic meaning, or next safe step implied by the prompt',
  },
  ml: {
    domainNudge: 'Think like an ML practitioner: objective, data, evaluation, leakage, and deployment failure modes all matter.',
    operatingLens: 'pick the answer that improves real model decision quality instead of just sounding technical',
  },
  nationalSecurityPolicyRoadmap: {
    domainNudge: 'Use a national-security policy lens: actors, authorities, incentives, and second-order consequences matter.',
    operatingLens: 'choose the option that fits the institutional role and risk tradeoff in the prompt',
  },
  negotiation: {
    domainNudge: 'Treat the negotiation as interests, alternatives, leverage, and relationship dynamics rather than a contest of clever lines.',
    operatingLens: 'look for the move that improves information, options, or commitment without needlessly escalating',
  },
  nursingFloorOpsRoadmap: {
    domainNudge: 'Think from the floor: patient safety, staffing, handoff clarity, and escalation paths drive the right answer.',
    operatingLens: 'favor the option that a charge nurse could execute cleanly during a busy shift',
  },
  peopleManagement: {
    domainNudge: 'Use a manager lens: clarity, fairness, feedback, accountability, and team trust are the operating constraints.',
    operatingLens: 'choose the action that makes expectations and consequences more explicit without dodging the human issue',
  },
  personalFinance: {
    domainNudge: 'Think in household cash-flow terms: risk, timing, compounding, debt cost, and behavior all shape the best move.',
    operatingLens: 'prefer the answer that protects resilience before optimizing for an impressive-sounding return',
  },
  philosophyIntro: {
    domainNudge: 'Read the prompt as a conceptual distinction, not a word-association exercise.',
    operatingLens: 'identify the claim, principle, or objection being tested before choosing the answer',
  },
  physicianPracticeRoadmap: {
    domainNudge: 'Think like a practice operator balancing patient access, clinician time, compliance, quality, and revenue.',
    operatingLens: 'choose the answer that improves the workflow without creating new risk for patients or the practice',
  },
  plumbingBasics: {
    domainNudge: 'Picture the plumbing system as pressure, venting, drainage, traps, fixtures, and shutoffs working together.',
    operatingLens: 'match the symptom to the safest likely cause or next diagnostic step',
  },
  pregnancyBasics: {
    domainNudge: 'Use a calm safety lens: timing, symptoms, normal variation, and red flags should guide the choice.',
    operatingLens: 'separate reassuring basics from situations that need clinician guidance or urgent attention',
  },
  priyasBrutalSurgeonsQuiz: {
    domainNudge: 'Think like a surgeon under pressure: anatomy, physiology, sequencing, and risk control decide the move.',
    operatingLens: 'choose the answer that protects the patient and the operative plan, not the one that only sounds bold',
  },
  productManagement: {
    domainNudge: 'Use a product-management lens: outcomes, customers, constraints, and decision rights matter more than activity.',
    operatingLens: 'pick the answer that clarifies the problem and aligns the team around the highest-leverage next step',
  },
  professionalEthics: {
    domainNudge: 'Read the scenario through duty, transparency, conflicts, harm, and accountability.',
    operatingLens: 'choose the answer you could defend to the affected people and to a later review',
  },
  projectManagement: {
    domainNudge: 'Think like a project lead: scope, risk, dependencies, communication, and ownership have to stay visible.',
    operatingLens: 'favor the option that reduces ambiguity and keeps the plan executable',
  },
  psychology101: {
    domainNudge: 'Anchor the psychology term in behavior, evidence, and mechanism rather than a familiar label.',
    operatingLens: 'match the prompt to the specific concept being tested, not to a neighboring idea',
  },
  publicAffairs: {
    domainNudge: 'Use a public-affairs lens: audience, message discipline, stakeholders, timing, and trust shape the answer.',
    operatingLens: 'choose the move that preserves credibility while advancing the policy or communication goal',
  },
  publicSpeaking: {
    domainNudge: 'Think about what the audience needs to hear, understand, and remember.',
    operatingLens: 'favor the answer that improves clarity, structure, delivery, or audience trust',
  },
  salesFundamentals: {
    domainNudge: 'Use a sales lens: diagnose need, build trust, qualify fit, and create a clear next step.',
    operatingLens: 'choose the answer that advances the buyer conversation without overpromising or skipping discovery',
  },
  softwareEngineeringRoadmap: {
    domainNudge: 'Think like an engineer growing into reliable delivery: correctness, maintainability, observability, and collaboration all count.',
    operatingLens: 'pick the answer that makes the system or team easier to reason about later',
  },
  software: {
    domainNudge: 'Use engineering judgment: behavior, ownership, failure modes, and maintainability matter more than surface neatness.',
    operatingLens: 'choose the answer that would survive code review, production traffic, and future maintenance',
  },
  statisticsIntro: {
    domainNudge: 'Translate the statistics wording into the quantity, comparison, or uncertainty the question is really asking about.',
    operatingLens: 'name the variable, denominator, or inference target before reading the choices',
  },
  supplyChain: {
    domainNudge: 'Think in flows: inventory, demand, lead time, bottlenecks, variability, and incentives interact.',
    operatingLens: 'choose the option that improves the whole system instead of optimizing one local metric',
  },
  technicalSales: {
    domainNudge: 'Use a technical-sales lens: diagnose the buyer problem, map technical proof to value, and keep trust intact.',
    operatingLens: 'prefer the answer that answers the buyer risk without turning into a premature pitch',
  },
  understandingAnxiety: {
    domainNudge: 'Use a compassionate mental-health lens: separate symptoms, triggers, coping skills, and when support is needed.',
    operatingLens: 'choose the answer that normalizes the experience without minimizing risk or overclaiming a cure',
  },
  understandingDepression: {
    domainNudge: 'Use a compassionate mental-health lens: distinguish mood, behavior, risk signs, and support options carefully.',
    operatingLens: 'choose the answer that is accurate, nonjudgmental, and safety-aware',
  },
  understandingLoneliness: {
    domainNudge: 'Use a social-wellbeing lens: loneliness is about connection, patterns, expectations, and practical next steps.',
    operatingLens: 'choose the answer that treats the person as capable while naming the real barrier to connection',
  },
  usGovernmentWorks: {
    domainNudge: 'Track the government actor and power involved before judging the outcome.',
    operatingLens: 'separate constitutional role, institutional process, and political preference',
  },
  uxDesign: {
    domainNudge: 'Think like a UX designer: user goal, context, feedback, hierarchy, and accessibility decide whether the design works.',
    operatingLens: 'choose the answer that improves the user experience rather than merely decorating the interface',
  },
  uxResearch: {
    domainNudge: 'Use a research-craft lens: study design, behavior, bias, and evidence strength are the heart of the question.',
    operatingLens: 'pick the answer that produces cleaner learning without overclaiming from weak data',
  },
  vcJargon: {
    domainNudge: 'Translate the venture term into ownership, risk, incentives, fundraising stage, or investor economics.',
    operatingLens: 'keep company-building language and financing mechanics separate',
  },
  votingElections: {
    domainNudge: 'Track the election rule, actor, and stage of the process before evaluating the choice.',
    operatingLens: 'separate voter eligibility, ballot mechanics, counting rules, and institutional consequences',
  },
  worldHistory: {
    domainNudge: 'Place the event or idea in its historical context before choosing the answer.',
    operatingLens: 'look for the cause, consequence, or comparison that best fits the period named by the prompt',
  },
}

function readableTrackName(trackId: string): string {
  return trackId
    .replace(/R2$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function profileForTrack(trackId: string): TrackHintProfile {
  return (
    TRACK_HINT_PROFILES[trackId] ?? {
      domainNudge: `Treat this as a ${readableTrackName(trackId)} judgment question, not a vocabulary flashcard.`,
      operatingLens: 'choose the option that best fits the constraint, tradeoff, or consequence in the prompt',
    }
  )
}

function quotedTermFrom(prompt: string): string | undefined {
  const quotedTerm = prompt.match(/"([^"]{3,80})"/)?.[1]?.trim()
  return quotedTerm || undefined
}

function promptNudge(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase()
  if (/\b(rate|percentage|ratio|kpi|metric|dashboard|budget|cost|cash|revenue|valuation|model|forecast|probability|average|days|dollars?)\b/.test(lowerPrompt)) {
    return 'Name the unit or metric first, then match each answer to the exact numerator, denominator, driver, or consequence the prompt asks about.'
  }
  if (/\b(best|strongest|responsible|cleanest|should|response|move|recommend)\b/.test(lowerPrompt)) {
    return 'Treat "best" as "most defensible under the stated constraints"; eliminate choices that are merely fast, tidy, or confident.'
  }
  if (/\b(client|customer|stakeholder|manager|teammate|team|patient|payer|provider|buyer|user|employee|leader)\b/.test(lowerPrompt)) {
    return 'Picture the next handoff: the right answer should make the situation clearer and safer for the person who has to act on it.'
  }
  if (/\b(why|because|reveal|matter|risk|cost|tradeoff|failure)\b/.test(lowerPrompt)) {
    return 'Look for the answer that connects cause to consequence, not the one that only names a familiar term.'
  }
  if (/\b(which|what|define|definition|term|means)\b/.test(lowerPrompt)) {
    return 'State the concept in plain language before checking which choice matches it exactly.'
  }
  return 'Use every detail in the prompt as a constraint; most wrong answers will ignore one detail or swap in a neighboring concept.'
}

function mentorHintForCareerTopUp(trackId: string, question: Question): string {
  const profile = profileForTrack(trackId)
  const focus = quotedTermFrom(question.prompt) ?? question.title.toLowerCase()
  return `${profile.domainNudge} For "${question.title}" in ${question.chapter}, anchor on ${focus} and ${profile.operatingLens}. ${promptNudge(question.prompt)}`
}

function enrichCareerTopUpsR2(topUps: Record<string, Question[]>): Record<string, Question[]> {
  const enriched: Record<string, Question[]> = {}
  for (const [trackId, questions] of Object.entries(topUps)) {
    enriched[trackId] = questions.map((question) => ({
      ...question,
      mentorHint: mentorHintForCareerTopUp(trackId, question),
    }))
  }
  return enriched
}

const RAW_CAREER_TOPUPS_R2: Record<string, Question[]> = {
  astrophysicsIntro: astrophysicsIntroR2Questions,
  asvabPrep: asvabPrepR2Questions,
  autoMechanics: autoMechanicsR2Questions,
  clinicalResearchJargon: clinicalResearchJargonR2Questions,
  cloudInfrastructureRoadmap: cloudInfrastructureRoadmapR2Questions,
  consultingCases: consultingCasesR2Questions,
  criticalThinking: criticalThinkingR2Questions,
  cybersecOpsJargon: cybersecOpsJargonR2Questions,
  cybersecurityOperationsRoadmap: cybersecurityOperationsRoadmapR2Questions,
  cybersecurity: cybersecurityR2Questions,
  defenseBudgetingJargon: defenseBudgetingJargonR2Questions,
  enterpriseSaaSRoadmap: enterpriseSaaSRoadmapR2Questions,
  financialModeling: financialModelingR2Questions,
  homeElectrical: homeElectricalR2Questions,
  hospitalAdministrationRoadmap: hospitalAdministrationRoadmapR2Questions,
  howLawsAreMade: howLawsAreMadeR2Questions,
  hvacBasics: hvacBasicsR2Questions,
  ibJargon: ibJargonR2Questions,
  investingBasics: investingBasicsR2Questions,
  medicalBillingJargon: medicalBillingJargonR2Questions,
  medicalBillingRoadmap: medicalBillingRoadmapR2Questions,
  medical: medicalR2Questions,
  ml: mlR2Questions,
  nationalSecurityPolicyRoadmap: nationalSecurityPolicyRoadmapR2Questions,
  negotiation: negotiationR2Questions,
  nursingFloorOpsRoadmap: nursingFloorOpsRoadmapR2Questions,
  peopleManagement: peopleManagementR2Questions,
  personalFinance: personalFinanceR2Questions,
  philosophyIntro: philosophyIntroR2Questions,
  physicianPracticeRoadmap: physicianPracticeRoadmapR2Questions,
  plumbingBasics: plumbingBasicsR2Questions,
  pregnancyBasics: pregnancyBasicsR2Questions,
  priyasBrutalSurgeonsQuiz: priyasBrutalSurgeonsQuizR2Questions,
  productManagement: productManagementR2Questions,
  professionalEthics: professionalEthicsR2Questions,
  projectManagement: projectManagementR2Questions,
  psychology101: psychology101R2Questions,
  publicAffairs: publicAffairsR2Questions,
  publicSpeaking: publicSpeakingR2Questions,
  salesFundamentals: salesFundamentalsR2Questions,
  softwareEngineeringRoadmap: softwareEngineeringRoadmapR2Questions,
  software: softwareR2Questions,
  statisticsIntro: statisticsIntroR2Questions,
  supplyChain: supplyChainR2Questions,
  technicalSales: technicalSalesR2Questions,
  understandingAnxiety: understandingAnxietyR2Questions,
  understandingDepression: understandingDepressionR2Questions,
  understandingLoneliness: understandingLonelinessR2Questions,
  usGovernmentWorks: usGovernmentWorksR2Questions,
  uxDesign: uxDesignR2Questions,
  uxResearch: uxResearchR2Questions,
  vcJargon: vcJargonR2Questions,
  votingElections: votingElectionsR2Questions,
  worldHistory: worldHistoryR2Questions,
}

export const CAREER_TOPUPS_R2: Record<string, Question[]> = enrichCareerTopUpsR2(RAW_CAREER_TOPUPS_R2)
