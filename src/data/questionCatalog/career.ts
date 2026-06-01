import type { Question } from './types'
import {
  defaultQuestionScaffold,
  makeSimpleQuestion,
  makeQuestionBank,
} from './base'
import { buildQuantQuestionCatalog } from './quant'
import { buildUniversityPrepQuestionCatalog } from './universityPrep'
import { ADULT_NEW_COURSE_BANKS } from './adultCoursesNew'
import { CAREER_TOPUPS } from './careerTopUps'
import { CAREER_TOPUPS_R2 } from './careerTopUpsR2'
import { series86Imported } from './series86Imported'
import {
  vcJargonQuestions,
  ibJargonQuestions,
  defenseBudgetingJargonQuestions,
  clinicalResearchJargonQuestions,
  medicalBillingJargonQuestions,
  cybersecOpsJargonQuestions,
} from './jargonBusters'
import { openTriviaBrainTeaserQuestions } from './openTriviaBrainTeasersImported'
import { brainBurnersOerBatch2Questions } from './brainBurnersOerBatch2'
import { brainBurnersWorkoutGeneratedQuestions } from './brainBurnersWorkoutGenerated'
import { topUpCareerAgentGeneratedCatalog } from './careerAgentGenerated'
import {
  careerLabsClinicalResearchQuestions,
  careerLabsMedicalQuestions,
  careerLabsRegulatoryQuestions,
} from './careerLabsImported'
import {
  barExamQuestions,
  cfaSurvivalQuestions,
  cpaExamQuestions,
  pmpWranglerQuestions,
  professionalEthicsQuestions,
  shrmPeopleQuestions,
} from './careerPhilosophyQualificationQuestions'
import { careerPublicAffairsQuestions } from './practicalPoliticsQuestions'
import {
  cfaLevelTwoQuestions,
  cfaLevelThreeQuestions,
  cfpQuestions,
} from './careerCredentialsCfaCfp'
import {
  cfeQuestions,
  camsQuestions,
  cippEQuestions,
} from './careerCredentialsComplianceFraud'
import {
  sieQuestions,
  series7Questions,
  series63Questions,
  series79Questions,
} from './careerCredentialsFinraBrokerage'
import {
  sqe1Questions,
  sqe2Questions,
  nalaCpQuestions,
} from './careerCredentialsLawUkParalegal'
import { mpreQuestions, mbeQuestions, lsatQuestions } from './careerCredentialsLawUs'
import { mcatQuestions, nclexPnQuestions } from './careerCredentialsMcatNclexPn'
import { nclexRnQuestions, panceQuestions } from './careerCredentialsNclexPance'
import {
  personalityTestsQuestions,
  iqReasoningTestsQuestions,
} from './careerCredentialsPersonalityIq'
import { frmQuestions, caiaQuestions } from './careerCredentialsRiskAlt'
import { usmleStep1Questions, usmleStep2CkQuestions } from './careerCredentialsUsmle'

function promptKey(prompt: string): string {
  return prompt
    .toLowerCase()
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasThreeDistractors(question: Question): boolean {
  return question.answers.filter((answer) => !answer.correct).length >= 3
}

function uniqueByPrompt(questions: Question[]): Question[] {
  const seen = new Set<string>()
  return questions.filter((question) => {
    const key = promptKey(question.prompt)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const RECOVERED_CREDENTIAL_ID_OFFSET = 30_000_000

function recoveredCredentialBank(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    id: question.id + RECOVERED_CREDENTIAL_ID_OFFSET,
  }))
}

import { CAREER_SKILLS_SUB_TOPICS, CAREER_SKILLS_MENTOR_HINTS, CAREER_SKILLS_CORRECT_SHORTENED } from './careerSkillsPolish'
import { polish as runCareerSkillsPolish } from './polishPipeline'

const _careerSkillsBundle = [{ subTopics: CAREER_SKILLS_SUB_TOPICS, mentorHints: CAREER_SKILLS_MENTOR_HINTS, correctShortened: CAREER_SKILLS_CORRECT_SHORTENED, source: 'careerSkills' }]

const GENERIC_CAREER_HINTS = new Set([
  'Ask what you would actually want a competent teammate to do here.',
  ...([
    'Career Skills',
    'Medical',
    'Clinical Research',
    'Supply Chain',
    'Technical Sales',
    'UX Research',
    'ML',
    'Software',
    'Statistics',
    'Series 86',
    'Regulatory',
    'Quant Finance',
  ] as const).map(topic => defaultQuestionScaffold(topic, '__', '__').mentorHint),
])

function careerMentorHint(trackId: string, question: Question): string {
  const text = `${trackId} ${question.topic} ${question.chapter} ${question.title} ${question.prompt}`.toLowerCase()

  if (text.includes('cfa') || text.includes('equity') || text.includes('valuation') || text.includes('financial statement') || text.includes('capital budgeting')) {
    if (text.includes('ethic') || text.includes('mnpi') || text.includes('suitability')) {
      return 'For finance ethics, identify the duty first: confidentiality, fair dealing, suitability, disclosure, or market integrity. The best answer should be the action a documented compliance review could defend.'
    }
    return 'Translate the finance setup into the driver being tested: cash flow, discount rate, growth, margin, leverage, or accounting treatment. Then keep the time period and denominator straight before comparing answers.'
  }

  if (text.includes('surgery') || text.includes('postoperative') || text.includes('sepsis') || text.includes('anticoag') || text.includes('oncologic')) {
    return 'Start with the immediate clinical danger, then ask what decision changes management right now. Surgical judgment questions often hinge on source control, bleeding risk, anatomy, margins, or whether more information would delay a necessary action.'
  }

  if (text.includes('electrical') || text.includes('voltage') || text.includes('breaker') || text.includes('wire') || text.includes('circuit')) {
    return 'For home electrical questions, separate normal function from safety protection: hot, neutral, ground, breaker, load, and fault each have different jobs. If a scenario involves work on wiring, prioritize de-energizing and verifying over convenience.'
  }

  if (text.includes('hvac') || text.includes('refrigerant') || text.includes('heat pump') || text.includes('furnace') || text.includes('air conditioner')) {
    return 'Trace where heat is moving and which component changes pressure or airflow. HVAC questions usually become clear when you follow the cycle: absorb heat, compress, reject heat, meter, and repeat.'
  }

  if (text.includes('plumbing') || text.includes('drain') || text.includes('pipe') || text.includes('water heater') || text.includes('shutoff')) {
    return 'Follow the water path and ask whether the issue is supply, drain, venting, pressure, or safety. The practical answer should reduce damage risk before jumping to a complicated repair.'
  }

  if (text.includes('asvab') || text.includes('arithmetic') || text.includes('mechanical') || text.includes('afqt')) {
    if (text.includes('arithmetic') || text.includes('percent') || text.includes('ratio') || text.includes('interest')) {
      return 'For ASVAB arithmetic, write the relationship as a small equation before calculating. Units, percent meaning, and rate-time-distance wording usually reveal which operation belongs where.'
    }
    return 'Ask which ASVAB subskill the item is testing: score structure, word knowledge, arithmetic, mechanical reasoning, or test strategy. The right answer should fit that subskill rather than a general test-taking slogan.'
  }

  if (text.includes('critical thinking') || text.includes('argument') || text.includes('premise') || text.includes('fallacy') || text.includes('valid')) {
    return 'Map the argument before judging it: premise, conclusion, assumption, and possible flaw. The correct choice should describe the reasoning move, not whether you happen to agree with the topic.'
  }

  if (text.includes('government') || text.includes('voting') || text.includes('law') || text.includes('congress') || text.includes('court')) {
    return 'Identify the institution and step in the process first: voters, legislature, executive agency, court, or constitution. Civics answers are strongest when they match who has authority to do the action.'
  }

  if (text.includes('personal finance') || text.includes('investing') || text.includes('credit') || text.includes('retirement') || text.includes('budget')) {
    return 'Separate the money decision into risk, time horizon, cash flow, cost, and protection. The best answer should improve long-term resilience, not just chase the most exciting short-term number.'
  }

  if (text.includes('psychology') || text.includes('depression') || text.includes('anxiety') || text.includes('loneliness') || text.includes('mental')) {
    return 'Look for the response that is accurate, supportive, and appropriately bounded. These questions usually test recognizing patterns and next safe steps, not diagnosing someone from one clue.'
  }

  if (text.includes('pregnancy') || text.includes('prenatal') || text.includes('labor') || text.includes('postpartum')) {
    return 'Sort the scenario into routine care, warning sign, body change, or support need. When safety is involved, the best answer respects escalation and avoids minimizing red flags.'
  }

  if (text.includes('philosophy') || text.includes('ethic') || text.includes('world history')) {
    return 'Identify the claim, principle, or historical cause being tested before reacting to the example. Good answers preserve context and avoid turning a nuanced idea into an absolute slogan.'
  }

  if (text.includes('machine learning') || text.includes('model') || text.includes('metric') || text.includes('data') || text.includes('ux research')) {
    return 'Ask what decision the practitioner is trying to make and what evidence would improve it. Metrics, sampling, bias, user behavior, and deployment constraints matter more than technical vocabulary by itself.'
  }

  return 'Read the scenario as a workplace decision: what risk, constraint, stakeholder, or evidence matters most? The best answer should be practical, defensible, and matched to the exact role in the prompt.'
}

function enrichCareerHints(catalog: Record<string, Question[]>): Record<string, Question[]> {
  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      questions.map(question => (
        question.mentorHint && !GENERIC_CAREER_HINTS.has(question.mentorHint)
          ? question
          : { ...question, mentorHint: careerMentorHint(trackId, question) }
      )),
    ]),
  )
}

function careerLesson(trackId: string, question: Question): string {
  const text = `${trackId} ${question.topic} ${question.chapter} ${question.title} ${question.prompt}`.toLowerCase()
  const answer = question.solution || 'the best answer'

  if (text.includes('api') || text.includes('inspector') || text.includes('pressure') || text.includes('corrosion') || text.includes('tank') || text.includes('piping')) {
    return `Inspection questions are about protecting integrity, not just spotting a defect. For "${question.title}", the key idea is: ${answer}. First identify the asset, damage mechanism, code scope, evidence quality, and whether the decision needs engineering support, documentation, or return-to-service controls.`
  }

  if (text.includes('customs') || text.includes('tariff') || text.includes('import') || text.includes('broker') || text.includes('classification')) {
    return `Customs broker questions reward careful fact matching. For "${question.title}", the key idea is: ${answer}. Ask which rule controls the entry: classification, valuation, origin, marking, duty exposure, recordkeeping, correction, or broker responsibility.`
  }

  if (text.includes('nerc') || text.includes('grid') || text.includes('bulk electric') || text.includes('reliability') || text.includes('blackstart')) {
    return `Grid-operations questions are about reliability under pressure. For "${question.title}", the key idea is: ${answer}. Track situational awareness, operating limits, communication discipline, restoration sequence, contingency margin, and the evidence an operator would need before acting.`
  }

  if (trackId === 'financialModeling' || text.includes('financial modeling') || text.includes('revenue build') || text.includes('three statements') || text.includes('free cash flow') || text.includes('dcf')) {
    return `Financial modeling questions are about making business logic visible in numbers. For "${question.title}", the key idea is: ${answer}. Ask which operating driver, statement link, cash-flow item, valuation input, or review check would let another person understand and trust the model.`
  }

  if (text.includes('ai governance') || text.includes('aigp') || text.includes('ai system') || text.includes('model') || text.includes('nist ai')) {
    return `AI governance questions are about accountable use, not just model performance. For "${question.title}", the key idea is: ${answer}. Check the use case, harm level, data purpose, human oversight, monitoring, vendor responsibility, and whether controls continue after launch.`
  }

  if (text.includes('compliance') || text.includes('aml') || text.includes('bank') || text.includes('bsa') || text.includes('udaap') || text.includes('hotline')) {
    return `Compliance questions usually test disciplined judgment under pressure. For "${question.title}", the key idea is: ${answer}. Identify the rule, customer or public harm, evidence trail, escalation path, control owner, and whether the response would still look defensible in an audit or exam.`
  }

  if (text.includes('defense') || text.includes('appropriation') || text.includes('budget') || text.includes('obligation') || text.includes('outlay')) {
    return `Defense finance questions are about turning mission needs into legally controlled execution. For "${question.title}", the key idea is: ${answer}. Keep purpose, time, amount, obligation, outlay, documentation, and internal-control evidence separate before choosing the safest action.`
  }

  if (text.includes('appraiser') || text.includes('appraisal') || text.includes('valuation') || text.includes('comparable') || text.includes('income approach')) {
    return `Appraisal questions are about supportable value reasoning. For "${question.title}", the key idea is: ${answer}. Tie the conclusion to property rights, highest and best use, market data, income assumptions, adjustments, scope of work, and a clear reconciliation trail.`
  }

  if (text.includes('procurement') || text.includes('contract') || text.includes('award') || text.includes('solicitation') || text.includes('far')) {
    return `Procurement questions are about a defensible acquisition record. For "${question.title}", the key idea is: ${answer}. Ask what the file must prove: competition, evaluation fairness, price reasonableness, authority, documentation, contractor performance, or closeout discipline.`
  }

  if (text.includes('medical') || text.includes('surgery') || text.includes('clinical') || text.includes('patient') || text.includes('coding')) {
    return `Medical career questions reward safety-first reasoning. For "${question.title}", the key idea is: ${answer}. Identify the immediate risk, what evidence is documented, whether escalation or clarification is needed, and which action changes patient care or claim accuracy right now.`
  }

  return `Workplace questions are easier when you ask what a careful professional would do with the facts given. For "${question.title}", the key idea is: ${answer}. Look for the risk, stakeholder, rule, evidence gap, and next action that would be practical, documented, and defensible.`
}

function rewriteCareerFragmentPrompt(trackId: string, question: Question): string {
  const prompt = question.prompt.trim()
  if (prompt.endsWith('?')) return question.prompt
  if (trackId === 'brainBurners') {
    return `Riddle time: "${prompt}" What is the answer?`
  }
  if (/^(compute|estimate|evaluate|factor|expand|list|rank|put|true or false)\b/i.test(prompt) || /\bwalk through\b/i.test(prompt) || /\bspot the (flaw|strongest flaw|main flaw)\b/i.test(prompt)) {
    return `${prompt} What is the best answer?`
  }
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `In this workplace scenario, which answer best completes the idea: "${stem}"?`
}

function enrichCareerQuestionQuality(catalog: Record<string, Question[]>): Record<string, Question[]> {
  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      questions.map((question) => ({
        ...question,
        prompt: rewriteCareerFragmentPrompt(trackId, question),
        lesson: question.lesson || careerLesson(trackId, question),
      })),
    ]),
  )
}

export function buildCareerQuestionCatalog(): Record<string, Question[]> {
  const quantCatalog = buildQuantQuestionCatalog()
  const openTriviaBrainTeasersCleaned = uniqueByPrompt(
    openTriviaBrainTeaserQuestions.filter(hasThreeDistractors),
  )

  const catalog: Record<string, Question[]> = {
    ...quantCatalog,
    brainBurners: uniqueByPrompt([
      ...quantCatalog.quant.filter((question) => question.chapter === 'Brain Teasers'),
      ...openTriviaBrainTeasersCleaned,
      ...brainBurnersWorkoutGeneratedQuestions,
      ...brainBurnersOerBatch2Questions,
    ]),
  productManagement: makeQuestionBank('Career Skills', [
    { id: 17001, chapter: 'Product Dock', title: 'Problem first', prompt: 'A strong product manager starts by understanding:', correct: 'The user problem and why it matters', wrong: [['Which feature request arrived most recently', 'Recent feedback can be useful, but recency alone does not prove the underlying user problem or business value.', 'Start from user pain and value.'], ['Only what engineering already built', 'Existing implementation constrains options, but it should not define the user problem by itself.', 'Problem-first beats feature-first.'], ['The solution that sounds most impressive in a meeting', 'A polished solution can still miss the real user need.', 'Use evidence about user needs.']] },
    { id: 17002, chapter: 'Product Reef', title: 'Prioritization', prompt: 'Good prioritization usually balances:', correct: 'Impact, effort, and strategic fit', wrong: [['Only whoever shouts loudest', 'Noise is not a prioritization framework.', 'Use explicit tradeoffs.'], ['Only what is easiest to build', 'Ease matters, but impact matters too.', 'Consider value and cost together.'], ['Only the oldest idea in the backlog', 'Age alone is weak prioritization logic.', 'Rank by effect and feasibility.']] },
    { id: 17003, chapter: 'Product Cove', title: 'Success metric', prompt: 'A product success metric should be:', correct: 'A measurable signal tied to the user or business outcome', wrong: [['A sentence with no numbers or definition', 'That is hard to track.', 'Metrics need clarity and measurement.'], ['A vanity count chosen after launch because it looks big', 'Big-looking numbers can be misleading if they are not tied to the outcome the product is meant to improve.', 'Pick a meaningful signal.'], ['Only the team mood score', 'Morale matters, but product success needs outcome measures.', 'Use a user or business result.']] },
    { id: 17004, chapter: 'Product Lagoon', title: 'MVP meaning', prompt: 'An MVP is usually:', correct: 'The smallest useful version that tests the core value', wrong: [['The most visually polished possible version', 'MVP is not maximum polish.', 'Think smallest viable learning product.'], ['A product with every feature included', 'That is the opposite of minimum.', 'Strip to the core value.'], ['A secret internal code name only', 'Sometimes products have codenames, but that is not the term.', 'Use the minimum viable product definition.']] },
  ]),
  projectManagement: makeQuestionBank('Career Skills', [
    { id: 17101, chapter: 'Project Dock', title: 'Critical path', prompt: 'The critical path in a project is:', correct: 'The sequence of tasks that most directly determines total timeline', wrong: [['The set of tasks with the highest visible status in the project deck', 'Visibility is not the same as schedule impact; a quiet dependency can still control the finish date.', 'Think dependency chain and schedule.'], ['Every task marked high priority by stakeholders', 'Priority matters, but the critical path is about dependencies and duration.', 'Critical means timeline-determining.'], ['Only tasks assigned to project managers', 'Any role can own a task on the critical path if it controls downstream timing.', 'Use dependency and duration logic.']] },
    { id: 17102, chapter: 'Project Reef', title: 'Scope creep', prompt: 'Scope creep means:', correct: 'The project keeps expanding beyond the original agreed work', wrong: [['A project finishes early because fewer tasks are needed', 'That is closer to scope reduction or schedule improvement, not scope creep.', 'Scope creep adds work.'], ['The team moves faster without changing requirements', 'Faster delivery is a schedule change; scope creep is about the work expanding.', 'The issue is growing requirements.'], ['The budget is revised while the work stays identical', 'Budget can be affected by scope creep, but the definition is about added scope.', 'Focus on expansion of work.']] },
    { id: 17103, chapter: 'Project Cove', title: 'Risk register', prompt: 'A risk register is useful because it:', correct: 'Tracks possible project risks and planned responses', wrong: [['Deletes all risks automatically', 'Tracking is not magic elimination.', 'The value is visibility and planning.'], ['Lists completed tasks instead of uncertain future issues', 'That is closer to a task log; a risk register tracks what might go wrong and how to respond.', 'Think risk logging and mitigation.'], ['Replaces the need for communication', 'You still need active coordination.', 'A risk register supports management; it does not replace it.']] },
    { id: 17104, chapter: 'Project Lagoon', title: 'Milestone idea', prompt: 'A milestone is best described as:', correct: 'A significant checkpoint in a project', wrong: [['Any small task completed during a normal workday', 'Milestones are bigger than routine tasks.', 'Think important checkpoint.'], ['A formatting style used to make the schedule easier to read', 'Visual formatting can highlight a milestone, but it is not what makes the checkpoint meaningful.', 'Focus on meaningful progress markers.'], ['A contract clause with no schedule meaning', 'Contracts may include milestones, but a milestone is about notable project progress.', 'Milestones mark notable stages.']] },
  ]),
  consultingCases: makeQuestionBank('Career Skills', [
    { id: 17201, chapter: 'Case Dock', title: 'Structuring', prompt: 'A good case interview answer usually starts by:', correct: 'Structuring the problem into clear buckets', wrong: [['Jumping to the first number you see', 'Fast math without structure gets messy quickly.', 'Frame the problem first.'], ['Telling a personal story unrelated to the case', 'That does not answer the business problem.', 'Stay problem-focused.'], ['Refusing to make assumptions ever', 'Reasonable assumptions are often necessary.', 'State and use clean assumptions.']] },
    { id: 17202, chapter: 'Case Reef', title: 'Profit frame', prompt: 'A standard profit framework starts with:', correct: 'Revenue minus costs', wrong: [['Assets plus liabilities', 'That is balance sheet territory, not the basic profit frame.', 'Use the income logic.'], ['Customers times market size', 'Customer volume and market size can help estimate revenue, but profit still needs both revenue and cost.', 'Start with revenue and cost.'], ['Price elasticity only', 'That can matter, but it is not the whole base frame.', 'Use the broad formula first.']] },
    { id: 17203, chapter: 'Case Cove', title: 'Synthesis', prompt: 'Strong case synthesis means:', correct: 'Summarizing the answer, why it is true, and what to do next', wrong: [['Reading every note back in order', 'That is recap, not synthesis.', 'Pull the main answer into a decision-ready summary.'], ['Adding new unrelated questions at the end only', 'New questions can matter, but synthesis closes the loop first.', 'Answer the client’s question clearly.'], ['Avoiding a recommendation', 'Cases usually need a point of view.', 'Take a position supported by reasoning.']] },
    { id: 17204, chapter: 'Case Lagoon', title: 'Driver tree', prompt: 'A driver tree is useful because it:', correct: 'Breaks a big problem into parts you can analyze', wrong: [['Eliminates the need for data', 'You still need evidence.', 'The tree organizes analysis; it does not replace facts.'], ['Lists every possible issue without showing relationships between them', 'A driver tree should organize causes and sub-causes, not just create an unstructured brainstorm.', 'Use it to decompose the problem.'], ['Makes every answer equally likely before analysis starts', 'Structure helps compare explanations, not flatten them.', 'Breakdown improves clarity.']] },
  ]),
  financialModeling: makeQuestionBank('Career Skills', [
    {
      id: 17301,
      chapter: 'Modeling Dock',
      title: 'Revenue build',
      prompt: 'You are building the revenue tab for a small subscription business, and a reviewer wants to see the engine instead of one magic growth number. What is the usual bottom-up starting point?',
      correct: 'Volume times price',
      wrong: [['Debt plus equity', 'That describes financing or capital structure, not how customers create revenue.', 'Revenue starts with operating drivers.'], ['Net income minus tax', 'That is much lower on the income statement after costs and taxes.', 'Start at the top line.'], ['Market share multiplied by total addressable market as the whole forecast', 'Market share can support a top-down sanity check, but a bottom-up revenue build should connect customer activity to dollars.', 'Turn customer activity into dollars.']],
      lesson: 'A bottom-up revenue build starts with the thing the business sells and the price it earns for each unit. For a SaaS company that might be customers times average subscription price; for a shop it might be orders times average order value.\n\nThis is better than one giant growth blob because someone reviewing the model can ask real questions: are customer counts plausible, is pricing realistic, and which tiny lever is doing the work?',
      solution: 'The clean starting formula is volume times price. First estimate how many units, customers, orders, or subscriptions the business will sell, then multiply by the price per unit. That makes the revenue forecast driver-based instead of a mysterious typed-in total.',
      mentorHint: 'Look for the answer that turns customer activity into dollars. Revenue is built from units and price before financing or taxes enter the story.',
      alternatePrompts: {
        plain: 'In a driver-based financial model, what simple relationship usually starts a revenue forecast?',
        teaching: 'If you were modeling a lemonade stand, would you begin with cups sold times price per cup, or with one mysterious total revenue number?',
      },
      challengeRating: 2,
    },
    {
      id: 17302,
      chapter: 'Modeling Reef',
      title: 'Three statements',
      prompt: 'A three-statement model lets profit, assets, debt, and cash talk to each other instead of living on separate islands. Which three reports are being connected?',
      correct: 'Income statement, balance sheet, and cash flow statement',
      wrong: [['Sales forecast, cap table, and press release', 'Those can matter in finance work, but they are not the three core accounting statements.', 'Think official company financial statements.'], ['Revenue sheet, expense sheet, and valuation sheet', 'Those are model tabs, not the standard three-statement set.', 'Use the conventional reporting trio.'], ['Tax return, invoice, and bank statement', 'Those are useful documents, but they are not the three linked financial statements.', 'One statement shows profit, one shows position, one shows cash.']],
      lesson: 'The income statement shows performance over a period: revenue, costs, and profit. The balance sheet shows financial position at a point in time: assets, liabilities, and equity. The cash flow statement explains how cash moved through operations, investing, and financing.\n\nIn a model, they link together. Net income affects retained earnings, depreciation affects PP&E and gets added back in cash flow, and the ending cash balance lands on the balance sheet.',
      solution: 'The three core statements are the income statement, balance sheet, and cash flow statement. A good model connects them so a change in operations flows through profit, cash, debt, equity, and ending balance sheet accounts.',
      mentorHint: 'Choose the official reporting trio: profit story, financial-position snapshot, and cash-movement bridge.',
      alternatePrompts: {
        plain: 'Which three financial statements are linked in a standard three-statement model?',
        teaching: 'If revenue changes, one report shows profit, another updates cash, and another has to balance. Which three reports are connected?',
      },
      challengeRating: 2,
    },
    {
      id: 17303,
      chapter: 'Modeling Cove',
      title: 'Assumption sensitivity',
      prompt: 'A valuation model has a few input knobs, like growth, margin, churn, or discount rate. When do we say the output is sensitive to one of those assumptions?',
      correct: 'Small changes in that assumption move the output a lot',
      wrong: [['The assumption is formatted in blue font', 'Color can signal an input cell, but sensitivity is about how the result reacts.', 'Wiggle the input and watch the output.'], ['The assumption has no effect on the answer', 'That means the model is insensitive to that assumption.', 'Sensitivity requires movement.'], ['The assumption is hidden on a locked tab', 'Hidden inputs are a model-review problem, not the definition of sensitivity.', 'Focus on output movement.']],
      lesson: 'Sensitivity asks which assumptions actually move the answer. In a DCF, a tiny change in long-term growth or discount rate can swing valuation because it affects many future cash flows at once.\n\nThink of the model as a little control panel. Some knobs barely move the needle; others make the valuation sail across the screen. Those big-moving knobs deserve extra care and scenario testing.',
      solution: 'An assumption is sensitive when a small change in that input causes a large change in the model output. To test it, change one assumption at a time and compare the effect on valuation, cash flow, leverage, or whichever result the model is built to answer.',
      mentorHint: 'Ignore formatting. The real test is whether a small input change causes a big output change.',
      alternatePrompts: {
        plain: 'What does it mean for a financial model output to be sensitive to an assumption?',
        teaching: 'If changing churn from 4% to 5% makes valuation drop hard, what does that tell you about the churn assumption?',
      },
      challengeRating: 3,
    },
    {
      id: 17304,
      chapter: 'Modeling Lagoon',
      title: 'Free cash flow clue',
      prompt: 'A company can show accounting profit and still need cash for working capital, equipment, or growth. Why do valuation models care so much about free cash flow?',
      correct: 'Cash available after operating needs and investment spending',
      wrong: [['Revenue before any costs are paid', 'Revenue is not cash left over; costs and reinvestment still have claims on it.', 'Free cash flow comes after operating needs.'], ['Net income with no cash adjustments', 'Net income includes non-cash items and omits some reinvestment needs.', 'Profit is not the same as available cash.'], ['A guaranteed future share price', 'Free cash flow supports valuation, but it does not predict market price perfectly.', 'Use it as cash generation, not fortune-telling.']],
      lesson: 'Free cash flow is the cash a business can generate after paying the operating costs and reinvestment needed to keep going. That usually means starting from operating performance, then adjusting for taxes, working capital, and capital expenditures.\n\nValuation cares about FCF because owners and lenders ultimately get paid with cash, not with pretty accounting adjectives. Profit matters, but cash is the thing that can actually leave the building.',
      solution: 'Free cash flow shows cash left after the business funds operations and necessary investment. That is why DCF models discount future FCF: it is a closer measure of value available to capital providers than revenue or accounting profit alone.',
      mentorHint: 'Ask what cash is left after the business has paid to operate and reinvest. Profit and cash are cousins, not twins.',
      alternatePrompts: {
        plain: 'Why is free cash flow such an important output in financial modeling and valuation?',
        teaching: 'If a business reports profit but must spend heavily on inventory and equipment, which cash-flow concept tells you what is really left?',
      },
      challengeRating: 3,
    },
  ]),
  uxDesign: makeQuestionBank('Career Skills', [
    { id: 17401, chapter: 'UX Design Dock', title: 'User flow', prompt: 'A user flow is mainly used to show:', correct: 'The steps a user takes to complete a task', wrong: [['A catalog of screens without showing how the user moves between them', 'Individual screens matter, but a flow explains the path, decisions, and transitions that complete the task.', 'User flow maps task steps.'], ['A visual mood board of colors and typography only', 'Visual direction can matter, but a user flow is about the path through actions and decisions.', 'Think journey through an interface or service.'], ['A final pixel-perfect mockup with no task path', 'Mockups show screens; flows show how the user gets from start to outcome.', 'Use the step-by-step path idea.']] },
    { id: 17402, chapter: 'UX Design Reef', title: 'Wireframe purpose', prompt: 'A wireframe is most useful early because it:', correct: 'Lets you test layout and structure before polishing visuals', wrong: [['Locks every pixel forever', 'Wireframes are usually early and flexible.', 'Their value is fast structure work.'], ['Replaces user feedback completely', 'Feedback still matters.', 'Wireframes support learning; they do not end it.'], ['Only exists for printing posters', 'That is not the core product-design use.', 'Think structure before polish.']] },
    { id: 17403, chapter: 'UX Design Cove', title: 'Affordance clue', prompt: 'In UX, an affordance helps users understand:', correct: 'What actions are possible', wrong: [['Which visual style the brand prefers', 'Brand style can shape the interface, but affordance is about perceived action.', 'Affordances signal possible interaction.'], ['How much effort the engineering team spent', 'Implementation effort is not visible action guidance for users.', 'Focus on action cues.'], ['That nothing on the screen can be clicked', 'Some screens may be static, but affordance is about available action.', 'It tells users what they can do.']] },
    { id: 17404, chapter: 'UX Design Lagoon', title: 'Portfolio case study', prompt: 'A strong UX case study usually includes:', correct: 'Problem, process, decisions, and outcome', wrong: [['Only final mockups with no explanation', 'That hides your thinking.', 'Case studies should show how you worked.'], ['A single adjective about the project', 'That is too thin.', 'Explain the problem and reasoning.'], ['Only a list of software tools', 'Tools matter less than process and decisions.', 'Show what you solved and how.']] },
  ]),
  cybersecurity: makeQuestionBank('Career Skills', [
    { id: 17501, chapter: 'Cyber Dock', title: 'Phishing clue', prompt: 'Phishing is an attack that often tries to:', correct: 'Trick people into giving up sensitive information', wrong: [['Scan a system for vulnerabilities without contacting users', 'That describes a different security activity; phishing targets human trust.', 'Phishing relies on deception.'], ['Encrypt files after a device is already compromised', 'That sounds more like ransomware behavior than the initial phishing trick.', 'Think stolen credentials or information.'], ['Strengthen account security by forcing every user to reset credentials', 'A real security team might force resets after an incident, but phishing itself is the deceptive attempt to steal access.', 'The goal is usually theft or compromise.']] },
    { id: 17502, chapter: 'Cyber Reef', title: 'Strong password', prompt: 'A stronger password is usually:', correct: 'Long, unique, and hard to guess', wrong: [['Your first name only', 'That is predictable.', 'Length and uniqueness matter.'], ['The same password for every site', 'Reuse increases risk.', 'Unique passwords limit damage.'], ['123456789', 'That is extremely weak.', 'Avoid obvious patterns.']] },
    { id: 17503, chapter: 'Cyber Cove', title: 'Two-factor idea', prompt: 'Two-factor authentication improves security by:', correct: 'Adding a second proof of identity', wrong: [['Making every password shorter', 'That is not the point.', '2FA adds another verification step.'], ['Removing the need for usernames', 'Usernames still exist.', 'The gain is a second factor.'], ['Guaranteeing zero risk forever', 'Security measures reduce risk; they do not eliminate it absolutely.', 'Think stronger protection, not perfection.']] },
    { id: 17504, chapter: 'Cyber Lagoon', title: 'Least privilege', prompt: 'Least privilege means giving a user:', correct: 'Only the access they need to do their job', wrong: [['All access just in case', 'That creates unnecessary risk.', 'Least privilege limits exposure.'], ['No access to anything ever', 'That prevents work altogether.', 'The principle is enough access, not zero access.'], ['Only access on weekends', 'Time alone does not define the principle.', 'Focus on minimum necessary permissions.']] },
  ]),
  publicSpeaking: makeQuestionBank('Career Skills', [
    { id: 17601, chapter: 'Speaking Dock', title: 'Clear message', prompt: 'A strong presentation usually starts with:', correct: 'A clear point you want the audience to remember', wrong: [['Ten unrelated facts at once', 'That creates confusion.', 'Lead with the central message.'], ['An apology for existing', 'That weakens the opening.', 'Start with purpose and direction.'], ['Reading every slide title quietly', 'That is not an engaging lead.', 'Use a clear main point.']] },
    { id: 17602, chapter: 'Speaking Reef', title: 'Pacing', prompt: 'Good pacing in speaking usually means:', correct: 'Speaking clearly enough for the audience to follow', wrong: [['Talking as fast as possible', 'Speed often hurts comprehension.', 'Clarity beats rush.'], ['Pausing never', 'Pauses help structure and understanding.', 'Use pace and pause intentionally.'], ['Whispering every important sentence', 'That may reduce clarity.', 'Aim for audible control.']] },
    { id: 17603, chapter: 'Speaking Cove', title: 'Audience focus', prompt: 'A useful way to adapt a talk is to ask:', correct: 'What this audience needs to understand or do', wrong: [['Which facts the speaker personally finds most impressive', 'A useful talk starts with the audience’s needs, not just the speaker’s favorite material.', 'Tailor content to audience needs.'], ['Whether slides can replace the whole talk', 'Slides support; they do not replace audience thinking.', 'Start with audience outcome.'], ['How to avoid all questions forever', 'Engagement often matters.', 'Think audience value.']] },
    { id: 17604, chapter: 'Speaking Lagoon', title: 'Nerves clue', prompt: 'A practical response to speaking nerves is to:', correct: 'Prepare, breathe, and focus on the message', wrong: [['Memorize panic', 'That does not help performance.', 'Redirect attention to preparation and delivery.'], ['Refuse to speak at all', 'Avoidance prevents improvement.', 'Use manageable control strategies.'], ['Read every word with your eyes down the whole time', 'That can disconnect you from the audience.', 'Better to know the structure and speak it.']] },
  ]),
  negotiation: makeQuestionBank('Career Skills', [
    { id: 17701, chapter: 'Negotiation Dock', title: 'Interests vs positions', prompt: 'A position is different from an interest because a position is:', correct: 'What someone says they want, while interests explain why', wrong: [['Always more honest', 'Either can be honest or strategic.', 'The key difference is what versus why.'], ['The same thing with better grammar', 'They are conceptually different.', 'Position is the stated ask; interest is the underlying motive.'], ['Only used in sports', 'This is a general negotiation concept.', 'Use the underlying-reason distinction.']] },
    { id: 17702, chapter: 'Negotiation Reef', title: 'BATNA clue', prompt: 'A BATNA is:', correct: 'Your best alternative if no agreement is reached', wrong: [['A bonus paid after signing', 'That sounds deal-related, but BATNA is not a payment; it is your fallback path.', 'BATNA is about your fallback option.'], ['The first offer made at the table', 'The first offer may anchor the discussion, but BATNA sits outside the deal as your alternative.', 'Think alternative path outside the deal.'], ['A way to guarantee the other side agrees', 'BATNA improves leverage but does not guarantee agreement.', 'It is your outside option.']] },
    { id: 17703, chapter: 'Negotiation Cove', title: 'Anchoring', prompt: 'Anchoring in negotiation usually means:', correct: 'An early number influences later discussion', wrong: [['The final signed price after all bargaining is done', 'The final price may be affected by an anchor, but the anchor is the early reference point.', 'Here it is a cognitive effect.'], ['Always agreeing immediately', 'Immediate agreement is a response, not the anchoring effect itself.', 'Anchoring is about reference points.'], ['Removing all uncertainty from price', 'Anchors influence discussion, but do not erase uncertainty.', 'Think early figures shaping later judgment.']] },
    { id: 17704, chapter: 'Negotiation Lagoon', title: 'Win-win check', prompt: 'A strong negotiator looks for options that:', correct: 'Create value before dividing it when possible', wrong: [['Treat the other side\'s interests as irrelevant to the final deal', 'That usually shrinks the available deal space.', 'Good negotiation often expands options first.'], ['Make every issue personal', 'That tends to damage the process.', 'Separate problem-solving from ego battles.'], ['Always split everything 50/50', 'Fairness may matter, but equal splits are not always optimal.', 'Search for mutual gains where possible.']] },
  ]),
  peopleManagement: makeQuestionBank('Career Skills', [
    { id: 17801, chapter: 'Management Dock', title: 'Feedback timing', prompt: 'Helpful feedback is usually best when it is:', correct: 'Specific and timely', wrong: [['Vague and delayed', 'That makes it harder to act on.', 'Good feedback is concrete and close to the event.'], ['Given only once a year', 'Annual review alone is often too slow.', 'More timely feedback is easier to use.'], ['Always public', 'Public feedback can be useful sometimes, but not as a rule.', 'Specificity and timing matter more.']] },
    { id: 17802, chapter: 'Management Reef', title: 'Delegation', prompt: 'Good delegation means:', correct: 'Giving clear ownership with context and expectations', wrong: [['Dropping work on someone with no explanation', 'That is dumping, not delegating.', 'Good delegation includes context and success criteria.'], ['Doing everything yourself forever', 'That blocks scale and growth.', 'Delegation is part of management.'], ['Handing off work and disappearing completely', 'Managers still need alignment and support.', 'Ownership plus follow-through is the right balance.']] },
    { id: 17803, chapter: 'Management Cove', title: '1:1 purpose', prompt: 'A 1:1 meeting is most useful for:', correct: 'Alignment, support, and unblocking over time', wrong: [['Only reading status updates word for word', 'That wastes the relationship value of the meeting.', 'Use 1:1s for real support and direction.'], ['Replacing every team meeting', 'Different meetings serve different purposes.', '1:1s are person-specific.'], ['Avoiding all difficult topics', 'The meeting is often where hard issues should be discussed well.', 'Use it to surface and solve problems.']] },
    { id: 17804, chapter: 'Management Lagoon', title: 'Team clarity', prompt: 'A healthy team usually benefits most from:', correct: 'Clear goals and clear roles', wrong: [['Constantly shifting priorities with no explanation', 'That creates confusion.', 'Clarity improves coordination.'], ['Total silence about expectations', 'Silence makes alignment harder.', 'Goals and roles should be visible.'], ['Only more meetings and no decisions', 'Meetings without clarity do not help much.', 'Structure should support execution.']] },
  ]),
  salesFundamentals: makeQuestionBank('Career Skills', [
    { id: 17901, chapter: 'Sales Dock', title: 'Discovery first', prompt: 'A strong sales conversation usually starts with:', correct: 'Understanding the customer problem', wrong: [['Reading the price list immediately', 'Price matters, but fit and value come first.', 'Discover the problem before pitching.'], ['Talking only about yourself', 'That weakens customer relevance.', 'Customer context should lead.'], ['Skipping questions to save time', 'Questions are how you qualify and understand needs.', 'Discovery is part of efficiency.']] },
    { id: 17902, chapter: 'Sales Reef', title: 'Objection handling', prompt: 'A useful first step when someone objects is to:', correct: 'Clarify the concern before trying to answer it', wrong: [['Argue immediately', 'You may respond to the wrong issue if you do not clarify first.', 'Understand the objection before solving it.'], ['Treat the objection as resistance rather than useful buying signal', 'Unaddressed concerns usually stay in the way.', 'Surface and understand the real concern.'], ['End the conversation instantly', 'Some objections are solvable and informative.', 'Treat objections as signal.']] },
    { id: 17903, chapter: 'Sales Cove', title: 'Value framing', prompt: 'Value-based selling means focusing on:', correct: 'The business or user outcome for the customer', wrong: [['Only how many slides you prepared', 'Preparation matters, but value is about customer results.', 'Translate features into outcomes.'], ['The longest possible feature list', 'Long lists can blur relevance.', 'Match capabilities to customer impact.'], ['The seller’s internal quota rather than the customer’s result', 'Quota pressure may explain the seller’s goal, but value framing centers the buyer’s outcome.', 'Focus on the benefit to the buyer.']] },
    { id: 17904, chapter: 'Sales Lagoon', title: 'Closing signal', prompt: 'A promising buying signal is when a prospect starts asking about:', correct: 'Implementation, timeline, or next steps', wrong: [['General industry trends without connecting them to their own rollout', 'Context questions can be useful, but buying intent usually shows up when the prospect asks how this would actually happen for them.', 'Operational next-step questions often show real interest.'], ['How to avoid every decision forever', 'That suggests avoidance, not progress.', 'Look for commitment-oriented questions.'], ['Nothing at all for six months', 'Silence is not a strong buying signal.', 'Interest often shows up as practical questions.']] },
  ]),
  customsBroker: makeQuestionBank('Career Skills', [
    { id: 18001, chapter: 'Port Entry', title: 'HS code purpose', prompt: 'In customs work, a tariff classification code is mainly used to determine:', correct: 'How a product is categorized for duty and regulatory treatment', wrong: [['Which party negotiated freight pickup', 'Logistics facts can matter elsewhere, but classification is about the product category.', 'Think category, duty, and rules.'], ['The importer’s preferred warehouse location', 'Storage preferences do not set tariff treatment.', 'HS codes define product treatment at the border.'], ['Whether the commercial invoice is printed in color', 'Invoice clarity matters, but color does not determine classification.', 'Focus on regulatory category.']] },
    { id: 18002, chapter: 'Harbor Checkpoint', title: 'Country of origin', prompt: 'For customs purposes, country of origin usually means the country where the goods:', correct: 'Were substantially transformed into their final form', wrong: [['Were shipped from most recently', 'Ship-from location is not always origin.', 'Origin follows the production and transformation rules.'], ['Spent the longest time in a warehouse', 'Warehousing does not create origin.', 'Storage is not substantial transformation.'], ['Were sold at the highest price', 'Pricing does not determine origin.', 'Use the legal origin test.']] },
    { id: 18003, chapter: 'Broker Jetty', title: 'Reasonable care', prompt: 'When customs authorities say an importer must exercise reasonable care, they generally mean the importer should:', correct: 'Use accurate documentation and make a good-faith effort to comply with customs rules', wrong: [['Guess the classification and fix it later if someone complains', 'Guessing is not reasonable care.', 'The standard is diligence and accuracy.'], ['Let the carrier decide everything automatically', 'Some tasks can be delegated, but compliance responsibility stays with the importer.', 'Responsibility does not disappear because another party is involved.'], ['Only review entries when duties look expensive', 'Compliance applies across entries, not only costly ones.', 'Care is a general obligation.']] },
    { id: 18004, chapter: 'Inspection Dock', title: 'Recordkeeping window', prompt: 'Strong customs recordkeeping matters because it helps an importer:', correct: 'Support classifications, values, and origin claims during audits or reviews', wrong: [['Rely on memory after liquidation', 'Memory is not a compliance file.', 'Keep evidence that supports the entry.'], ['Avoid paying all duties forever', 'Records do not erase duty obligations.', 'They help prove that the declared treatment was justified.'], ['Replace the commercial invoice entirely', 'Invoices matter, but they are only one part of the file.', 'Think broader documentation support.']] },
    { id: 18005, chapter: 'HTSUS Classification', title: 'GRI Starting Point', prompt: 'A broker is choosing between two plausible HTSUS headings. The best first move is to:', correct: 'Apply the General Rules of Interpretation together with relevant section and chapter notes', wrong: [['Start with the heading that produces the lowest duty rate', 'Duty rate is not the starting classification rule.', 'Classify before optimizing.'], ['Use only the supplier’s marketing description', 'Marketing language may be incomplete or imprecise.', 'Use legal notes and product facts.'], ['Rely on the prior shipment heading as if the product facts have not changed', 'Prior treatment can help but does not replace current analysis.', 'Verify the rule and facts.']] },
    { id: 18006, chapter: 'Valuation', title: 'Assists', prompt: 'An importer provides molds to a foreign manufacturer free of charge for use in producing imported goods. In customs valuation, that fact most likely raises:', correct: 'A possible assist that may need to be added to transaction value', wrong: [['A non-dutiable domestic retail expense in every case', 'Production assists can affect customs value.', 'Ask what the buyer supplied for production.'], ['A reason to ignore transaction value automatically', 'The transaction-value method may still apply with required additions.', 'Think additions to value.'], ['A country-of-origin change by itself', 'Providing molds does not by itself determine origin.', 'Keep origin and value separate.']] },
    { id: 18007, chapter: 'Entry Summary', title: 'Missing Invoice Detail', prompt: 'A commercial invoice lacks enough product detail to classify a shipment accurately. The broker should generally:', correct: 'Request clarification or supporting documentation before filing an unsupported classification', wrong: [['File the entry using the broadest guess and never revisit it', 'Unsupported guesses create compliance and penalty risk.', 'Reasonable care needs facts.'], ['Ask the trucker to choose the tariff number', 'Transportation parties may not know the classification facts.', 'Get product information.'], ['Delete the invoice from the entry file', 'Removing evidence weakens the compliance record.', 'Document the gap and resolution.']] },
    { id: 18008, chapter: 'Duties and Fees', title: 'AD/CVD Scope', prompt: 'A product may fall within an antidumping or countervailing duty order. What should the broker do before treating ordinary duty as the whole exposure?', correct: 'Check the order scope and product facts to determine whether AD/CVD may apply', wrong: [['Treat AD/CVD as relevant only when the ordinary duty rate is high', 'AD/CVD exposure is separate from ordinary duty rate.', 'Check the order scope.'], ['Treat repeat supplier history as enough to rule out AD/CVD scope exposure', 'Supplier history does not eliminate scope analysis.', 'Use product and order facts.'], ['Apply the lowest possible rate because the importer is in a hurry', 'Speed does not justify unsupported duty treatment.', 'Duty exposure needs support.']] },
    { id: 18009, chapter: 'Origin and Marking', title: 'Ship-From Trap', prompt: 'Goods are shipped from Country B, but major manufacturing occurred in Country A and only packaging occurred in Country B. The origin analysis should focus on:', correct: 'Where substantial transformation occurred, not just the final ship-from country', wrong: [['The last port listed on the bill of lading only', 'Ship-from country is not always origin.', 'Follow production facts.'], ['The language printed on the outer carton only', 'Label language may matter for marking, but it does not decide origin alone.', 'Analyze transformation.'], ['The importer’s preferred trade program first', 'Preference claims depend on rule satisfaction, not preference alone.', 'Start with facts and rules.']] },
    { id: 18010, chapter: 'Corrections', title: 'Post-Entry Error', prompt: 'After filing, an importer discovers a material classification error on an entry summary. The most defensible next step is to:', correct: 'Evaluate the proper correction or disclosure path and document the facts promptly', wrong: [['Wait for CBP to find it because silence is simpler', 'Delay can increase penalty and audit risk.', 'Correct known errors through proper channels.'], ['Change future entries only and ignore the filed entry', 'Future compliance does not resolve the existing error.', 'Address the affected entry.'], ['Delete internal emails about the issue', 'Destroying evidence creates serious compliance risk.', 'Preserve the record.']] },
    { id: 18011, chapter: 'Exam Strategy', title: 'Reference Search', prompt: 'On an open-book customs broker exam question, a good time-management habit is to:', correct: 'Identify the controlling topic and search the relevant reference instead of rereading every source', wrong: [['Read the entire HTSUS front to back for every question', 'That is not realistic under time pressure.', 'Search with intent.'], ['A memory-based answer when a citation is available', 'The exam is built around reference navigation.', 'Use the materials.'], ['The option with the most legal words', 'Legal-sounding language can still be wrong.', 'Verify against the source.']] },
    { id: 18012, chapter: 'Broker Responsibility', title: 'Client Communication', prompt: 'A client pressures the broker to use a lower-duty classification without support. The broker should:', correct: 'Explain the compliance risk, request supporting facts, and refuse to file an unsupported classification', wrong: [['Use the client’s preferred code because the client pays the invoice', 'A broker still has compliance responsibilities.', 'Professional duty survives pressure.'], ['File first and ask questions after liquidation', 'Unsupported filing creates avoidable risk.', 'Resolve material facts before filing.'], ['Threaten the client without explaining the issue', 'Clear advice is better than drama.', 'Communicate risk and required support.']] },
  ]),
  medicalCodingRoadmap: makeQuestionBank('Career Skills', [
    { id: 18101, chapter: 'Coding Clinic', title: 'Diagnosis vs procedure', prompt: 'In medical coding, a diagnosis code is mainly used to describe:', correct: 'Why the patient needed care or what condition was assessed', wrong: [['The procedure performed during the encounter', 'Procedure coding uses CPT or HCPCS rather than diagnosis coding.', 'Diagnosis codes describe the clinical reason or condition.'], ['The exact billing software version', 'Software details are not coded on the claim.', 'Stay with the patient condition or reason for care.'], ['The sterilization process for instruments', 'That is operational, not diagnosis coding.', 'Focus on the condition being treated or evaluated.']] },
    { id: 18102, chapter: 'Claim Reef', title: 'Specificity', prompt: 'A coder is usually expected to choose the most specific supported code because it:', correct: 'Reduces ambiguity and better reflects the documented encounter', wrong: [['Makes every claim pay faster no matter what', 'Specificity helps, but payment depends on more than that.', 'The core goal is accurate representation.'], ['Lets the coder invent missing details', 'Coding must follow documentation, not imagination.', 'Specific does not mean speculative.'], ['Avoids the need for provider notes', 'Coding depends on documentation; it does not replace it.', 'Specificity still requires support.']] },
    { id: 18103, chapter: 'Audit Lagoon', title: 'Unsupported coding', prompt: 'If a code is not supported by the provider documentation, the safest action is to:', correct: 'Query or clarify rather than assign a code that the chart does not support', wrong: [['Select the code with the highest reimbursement as a cautious billing cushion', 'That is not safe; it creates compliance risk.', 'Coding follows documentation, not reimbursement preference.'], ['Submit the code anyway and hope it passes', 'That exposes the organization to denials and audit issues.', 'Unsupported coding is a real risk.'], ['Delete the whole claim immediately', 'Sometimes clarification is enough; total abandonment is not the default.', 'Seek supported accuracy first.']] },
    { id: 18104, chapter: 'Revenue Dock', title: 'Medical necessity', prompt: 'Medical necessity matters in coding and billing because payers often want to see that the service was:', correct: 'Clinically justified for the patient and documented appropriately', wrong: [['Ordered without any diagnosis or rationale', 'An unsupported order may not establish medical necessity.', 'Payers look for justification and documentation.'], ['Selected because it produces the highest reimbursement', 'Payment preference does not establish necessity.', 'Need and documentation matter.'], ['The most expensive option available', 'Cost alone does not justify care.', 'Clinical appropriateness is the key test.']] },
    { id: 18105, chapter: 'ICD-10-CM', title: 'Tabular Verification', prompt: 'After finding a possible ICD-10-CM code in the Alphabetic Index, a coder should:', correct: 'Verify the code and instructions in the Tabular List before final selection', wrong: [['Use the first index hit as the final code without tabular verification', 'The Tabular List may contain specificity, excludes, or sequencing instructions.', 'Index first, verify second.'], ['Use a CPT modifier to fix the diagnosis code', 'CPT modifiers do not replace ICD-10-CM code verification.', 'Stay in the correct code set.'], ['Treat laterality as optional once the index points to a diagnosis family', 'Laterality may be required for specificity.', 'Check the Tabular details.']] },
    { id: 18106, chapter: 'ICD-10-CM', title: 'Sequencing', prompt: 'A record documents an acute condition treated at the visit plus a stable history condition not addressed. Diagnosis sequencing should generally prioritize:', correct: 'The condition chiefly responsible for the encounter, following applicable guidelines', wrong: [['The condition with the longest name', 'Name length does not determine sequencing.', 'Use encounter reason and guidelines.'], ['Every historical condition before the treated problem', 'History codes may matter, but sequencing follows the encounter and rules.', 'Ask why care was provided.'], ['Whichever code has the highest reimbursement', 'Reimbursement preference is not a sequencing rule.', 'Follow coding guidance.']] },
    { id: 18107, chapter: 'CPT', title: 'Procedure Detail', prompt: 'An operative note says a lesion was excised but does not document size or anatomical site. The coder should:', correct: 'Query or review documentation because size and site can determine the CPT code', wrong: [['Select the largest excision code as a conservative reimbursement choice', 'Unsupported upcoding creates compliance risk.', 'CPT often needs precise details.'], ['Use only a diagnosis code and skip the procedure forever', 'The procedure may be codable once documentation is clarified.', 'Clarify the missing facts.'], ['Infer the procedure site from the appointment reason instead of the operative note', 'Coding should not infer unsupported procedure details.', 'Use provider documentation.']] },
    { id: 18108, chapter: 'Modifiers', title: 'Distinct Service', prompt: 'A modifier should be appended only when it:', correct: 'Accurately explains a documented circumstance such as distinct service, laterality, or component billing', wrong: [['Makes a bundled service payable without real support', 'Modifiers require documentation and correct use.', 'Modifier does not mean loophole.'], ['Feels useful because a claim denied last month', 'Prior denial alone does not justify modifier use.', 'Tie modifier to this encounter.'], ['Replaces the need for CPT code selection', 'Modifiers qualify codes; they do not replace base code logic.', 'Code first, modify when supported.']] },
    { id: 18109, chapter: 'NCCI Logic', title: 'Bundling', prompt: 'Two CPT codes appear to describe services where one is normally included in the other. Before billing both, the coder should check:', correct: 'Bundling rules, documentation, and whether any modifier is truly supported', wrong: [['Whether both codes look profitable together', 'Payment amount does not determine bundling compliance.', 'Check the edit and support.'], ['Only the order in which the services appear in the note', 'Sequence in the note does not decide bundling by itself.', 'Use NCCI logic.'], ['Whether the patient requested two line items', 'Patient preference does not override coding rules.', 'Follow coding edits and documentation.']] },
    { id: 18110, chapter: 'HCPCS Level II', title: 'Supplies and Units', prompt: 'A claim includes a separately billable supply with quantity documented as four units. A coder should pay special attention to:', correct: 'HCPCS code selection, unit reporting, and payer documentation requirements', wrong: [['Changing the units to one because most lines look cleaner that way', 'Units should match documented billing rules and quantity.', 'Use the documented quantity and rules.'], ['Using an ICD-10-CM code for the supply itself', 'ICD-10-CM describes diagnoses, not supply items.', 'Choose the right code set.'], ['Ignoring medical necessity because supplies are never reviewed', 'Supplies can still require support.', 'Documentation matters.']] },
    { id: 18111, chapter: 'Provider Query', title: 'Compliant Clarification', prompt: 'A provider note is ambiguous about whether a condition is current or historical. A compliant coder query should be:', correct: 'Clear, non-leading, and based on clinical facts already in the record', wrong: [['Written to push the provider toward the highest-paying diagnosis', 'Leading for reimbursement creates compliance risk.', 'Ask neutrally.'], ['Skipped because ambiguity always means choosing the more severe option', 'Ambiguity should be clarified or coded conservatively under rules.', 'Do not infer severity.'], ['Handled by changing the provider note directly', 'Coders should not alter provider documentation.', 'Request clarification.']] },
    { id: 18112, chapter: 'Exam Strategy', title: 'Timed Case Triage', prompt: 'During CPC practice, a long surgical case is consuming too much time and the answer path is unclear. The best exam-management move is to:', correct: 'Mark it, answer easier items, and return with time for focused code-book navigation', wrong: [['Spend all remaining time proving the one case can be solved', 'One hard item should not consume the whole exam.', 'Protect total points.'], ['Stop using the code books for the rest of the exam', 'Reference use is central to CPC work.', 'Use the books efficiently.'], ['Guess every later question without reading it', 'Triage means moving strategically, not giving up accuracy.', 'Return if time allows.']] },
  ]),
  amlCompliance: makeQuestionBank('Career Skills', [
    { id: 18201, chapter: 'Compliance Wharf', title: 'KYC purpose', prompt: 'Know Your Customer procedures are mainly designed to help a firm:', correct: 'Understand who the customer is and assess risk before and during the relationship', wrong: [['Treat a polished brand as evidence of lower customer risk', 'Brand aesthetics are irrelevant.', 'KYC is about identity and risk.'], ['Guarantee the customer never breaks any law', 'Controls reduce risk; they do not guarantee perfect behavior.', 'Use KYC as a risk-management process.'], ['Replace transaction monitoring entirely', 'Monitoring still matters after onboarding.', 'KYC is one layer, not the whole stack.']] },
    { id: 18202, chapter: 'Monitoring Bay', title: 'Suspicious activity', prompt: 'A transaction is more likely to trigger AML review when it:', correct: 'Looks inconsistent with the customer profile or expected activity', wrong: [['Happens on a normal business day with no unusual pattern', 'Timing alone usually says little unless it fits a broader unusual pattern.', 'Review is about pattern and risk context.'], ['Uses a form that is complete and neatly filled out', 'Clean paperwork helps operations, but suspicious activity analysis focuses on behavior, source, purpose, and risk fit.', 'Think behavior that does not fit the known profile.'], ['Comes from a customer who communicates politely with staff', 'Politeness is not a control measure.', 'Risk indicators depend on facts and patterns.']] },
    { id: 18203, chapter: 'Escalation Pier', title: 'Red flag handling', prompt: 'When an analyst sees a credible red flag, the next good move is usually to:', correct: 'Escalate through the firm process and document the facts clearly', wrong: [['Tell the customer they are under suspicion immediately', 'That can create legal and procedural problems.', 'Follow the internal escalation path.'], ['Treat small transactions as too minor to create a credible red flag', 'Materiality matters, but smaller activity can still be suspicious.', 'Use the risk process, not a casual threshold guess.'], ['Delete the alert to keep the queue tidy', 'That destroys the control record.', 'Document and escalate instead.']] },
    { id: 18204, chapter: 'Case File Reef', title: 'Beneficial ownership', prompt: 'Beneficial ownership checks matter because they help reveal:', correct: 'The real people who ultimately own or control an entity', wrong: [['Only the company’s public brand name', 'A brand name can hide the individuals who actually own or control the entity.', 'Beneficial ownership is about true control.'], ['Only the registered agent listed on a filing', 'A registered agent may receive legal notices but may not own or control the entity.', 'Look through the entity to the real owners.'], ['Whether the customer prefers email or phone', 'Communication preference is not the core issue.', 'The compliance question is who actually controls the entity.']] },
  ]),
  vcJargon: vcJargonQuestions,
  ibJargon: ibJargonQuestions,
  defenseBudgetingJargon: defenseBudgetingJargonQuestions,
  clinicalResearchJargon: clinicalResearchJargonQuestions,
  medicalBillingJargon: medicalBillingJargonQuestions,
  cybersecOpsJargon: cybersecOpsJargonQuestions,
  medical: [
    ...careerLabsMedicalQuestions,
    makeSimpleQuestion(5001, 'Medical', 'Vitals Dock', 'Triage priority',
      'A patient has chest pain, shortness of breath, and low blood pressure. What is the safest first priority?',
      'Assess ABCs and escalate urgent evaluation',
      [
        ['Schedule routine follow-up', 'The symptoms suggest possible instability.', 'Triage unstable signs first.'],
        ['Focus only on diet history', 'History matters, but immediate danger comes first.', 'Stabilize and assess urgent risks.'],
        ['Wait for symptoms to resolve', 'Waiting can be unsafe with red flags.', 'Low blood pressure plus chest symptoms needs urgent attention.'],
      ]),
    makeSimpleQuestion(5002, 'Medical', 'Diagnosis Reef', 'Sensitivity use',
      'A screening test has very high sensitivity. What is it especially useful for?',
      'Ruling out disease when the test is negative',
      [
        ['Confirming disease when positive', 'That is more tied to specificity.', 'High sensitivity means few false negatives.'],
        ['Measuring treatment dose', 'Sensitivity is about test performance, not dosing.', 'Keep diagnostic metrics separate from treatment planning.'],
        ['Replacing clinical judgment', 'Tests support judgment; they do not replace context.', 'Use test results with pretest probability.'],
      ]),
    makeSimpleQuestion(5003, 'Medical', 'Evidence Cove', 'Relative risk',
      'A risk drops from 2% to 1%. Which description is most complete?',
      'A 50% relative reduction and a 1 percentage point absolute reduction',
      [
        ['Only a 50 percentage point reduction', 'That confuses relative percent with absolute percentage points.', 'Report both when possible.'],
        ['No meaningful change', 'A one-point absolute reduction can matter depending on context.', 'Interpret with baseline risk and stakes.'],
        ['A 1% relative reduction', 'Relative reduction is (2 - 1) / 2 = 50%.', 'Compute relative change against the starting risk.'],
      ]),
    makeSimpleQuestion(5004, 'Medical', 'Safety Lagoon', 'Contraindication',
      'What is a contraindication?',
      'A reason a treatment should not be used because it may cause harm',
      [
        ['A reason treatment is guaranteed to work', 'That is almost the opposite.', 'Contraindications flag risk.'],
        ['A billing code', 'Billing codes classify services; contraindications guide safety.', 'Keep administrative and clinical concepts separate.'],
        ['A minor side effect', 'Side effects can occur, but contraindications are reasons to avoid or reconsider treatment.', 'Think safety boundary.'],
      ]),
  ],
  priyasBrutalSurgeonsQuiz: makeQuestionBank('Medical', [
    {
      id: 51953,
      chapter: 'Anticoagulation, Coagulopathy, and Competing Catastrophes',
      title: 'The PE Has a Lawyer, but the Drain Has Evidence',
      prompt: 'POD3 after open right colectomy for cecal cancer, the CT courtroom convicts a segmental PE. The RV is normal, oxygen need is 2 L, and the patient is not hypotensive. Meanwhile the pelvic drain, previously polite, has become a small merlot fountain: 450 mL in 2 hours, hemoglobin down from 10.1 to 7.8. What is the safest senior move?',
      correct: 'Treat the active bleeding first: hold anticoagulation, resuscitate, localize/control the bleed, then restart titratable UFH once hemostasis is achieved',
      wrong: [
        ['Give full-dose enoxaparin immediately because the patient has cancer and a proven PE, then investigate the drain output after therapeutic anticoagulation is established', 'This reverses the priorities. A stable, low-risk PE does not justify worsening active surgical bleeding.', 'Cancer increases thrombosis risk, but it does not make hemorrhage imaginary.'],
        ['Place an IVC filter and declare the PE problem solved for the admission, leaving anticoagulation off until the colectomy pathology and adjuvant plan are finalized', 'A filter may be considered only in selected patients with a true temporary anticoagulation contraindication; it is not definitive PE treatment.', 'A filter is a bridge, not a moral cleansing ritual.'],
        ['Administer systemic thrombolysis because any postoperative PE in a cancer patient is presumed high-risk until proven otherwise', 'There is no shock or RV strain, and recent major abdominal surgery with active bleeding is a major contraindication.', 'Do not treat the radiology report more aggressively than the physiology.'],
      ],
    },
    {
      id: 51954,
      chapter: 'Source Control and Postoperative Sepsis',
      title: 'The Abscess Does Not Care About the Tumor Board Agenda',
      prompt: 'Ten days after resection of an obstructing sigmoid cancer, a patient is afebrile but looks like a haunted tax form: HR 122, lactate 3.4, new confusion, WBC 2.1 after recent chemotherapy. CT shows a 7 cm pelvic gas-fluid collection; the drain has produced almost nothing, and the oncology note says adjuvant therapy should start soon. What is the best next step?',
      correct: 'Control the infected collection now with antibiotics plus image-guided drainage and cultures; defer chemotherapy until sepsis is controlled',
      wrong: [
        ['Start broad-spectrum antibiotics and schedule drainage after restaging scans confirm there is no early metastatic progression that would change the chemotherapy plan', 'Restaging does not outrank source control in a septic postoperative patient with a drainable collection.', 'Antibiotics are not plumbing, and staging scans are not drainage catheters.'],
        ['Begin systemic therapy on schedule because the patient is afebrile and the existing operative drain proves the collection is already controlled', 'Afebrile leukopenic sepsis is still sepsis, and a quiet drain may be blocked, misplaced, or not communicating.', 'A silent drain can be a liar with tubing.'],
        ['Return immediately for laparotomy and takedown of the anastomosis before attempting percutaneous drainage, because any postoperative gas near a colorectal anastomosis requires operation', 'In a patient without generalized peritonitis or refractory shock, percutaneous drainage is often the safer first source-control step.', 'Escalate source control to the physiology, not to your anxiety.'],
      ],
    },
    {
      id: 51955,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Iliac Vein Did Not Sign the Consent Form',
      prompt: "A left colon cancer causes near-complete obstruction. In a non-tertiary OR, the tumor is found glued to bladder and left external iliac vein like a suspicious noodle welded to city infrastructure. The patient is stable, not perforated, and no vascular surgeon is available. Pre-op CT hinted at sidewall involvement, but the referral letter called it 'probably inflammatory.' What should the attending do?",
      correct: 'Divert the obstruction, obtain tissue if needed, stop the definitive resection, and refer for MDT vascular/surgical-oncology planning',
      wrong: [
        ['Perform en bloc colectomy with iliac vein ligation and bladder wedge resection now, accepting leg edema because leaving known cancer behind is worse than vascular improvisation', 'En bloc vascular resection may be appropriate only when planned with expertise, exposure, reconstruction options, and consent.', 'Oncologic courage without vascular control is just bleeding with a slogan.'],
        ['Peel the tumor off the iliac vein and bladder, place clips on any small bleeding points, create a primary anastomosis, and document that the adhesions were inflammatory', 'Fixation to adjacent organs in colon cancer is malignant until proven otherwise; peeling risks tumor violation and R1/R2 resection.', 'Do not convert a potentially curable T4b cancer into confetti.'],
        ['Close without diversion and start neoadjuvant chemotherapy urgently, because systemic therapy is the only way to test whether the sidewall fixation is biologically meaningful', 'The obstructing symptom still needs control; systemic therapy first is unsafe without decompression.', 'Sequence matters: relieve the obstruction before asking chemotherapy to be a plumber.'],
      ],
    },
    {
      id: 51956,
      chapter: 'Diagnostic Traps and False Reassurance',
      title: 'The Quiet Drain Gives Testimony Under Oath and Lies Anyway',
      prompt: "POD6 after low anterior resection for rectal cancer with diverting ileostomy, the patient is on UFH for a PE found on POD2. Now: norepinephrine, lactate 5.1, oliguria, tachypnea, and vague pelvic pain. The drain output is almost zero, the intern says 'so no leak,' and IV-only CT shows a 5 cm presacral gas-fluid collection but no contrast extravasation. Hemoglobin is down 1.5 g/dL. What is the senior move?",
      correct: 'Treat this as septic pelvic leak: pause UFH, resuscitate, give broad antibiotics, obtain urgent operative source control, then restart UFH when hemostasis allows',
      wrong: [
        ['Continue therapeutic heparin and obtain repeat CTPA first, because hypoxia in a patient with a known postoperative PE is most likely thrombotic progression until the chest is cleared again', 'The patient has septic shock and a suspicious pelvic source; anchoring on the PE delays source control and may worsen bleeding.', 'Known PE is not permission to ignore abdominal sepsis.'],
        ['Obtain CT with rectal contrast before any intervention, then request percutaneous drainage if extravasation is finally demonstrated and the heparin level is acceptable', 'Rectal-contrast CT may help in stable patients, but shock makes diagnostic delay dangerous.', 'The test is reasonable; the sequence is not.'],
        ['Ask IR to drain the presacral collection while continuing UFH, avoid the OR because the ileostomy already diverts the anastomosis, and reassess after 24 hours', 'Percutaneous drainage can be appropriate for stable contained leaks, but this patient has shock and possible bleeding on anticoagulation.', 'Diversion lowers contamination; it does not abolish source-control failure.'],
      ],
    },
    {
      id: 51957,
      chapter: 'HPB Catastrophes',
      title: 'The Future Liver Remnant Files an Injunction',
      prompt: 'A perihilar cholangiocarcinoma is staged as potentially resectable with extended right hepatectomy and portal vein reconstruction. The left ducts, which would be the future remnant, are still undrained; bilirubin is 15, fever has arrived wearing a little judge wig, lactate is 2.8, and FLR is estimated at 24% on a rough outside CT. The patient is on LMWH for a PE 3 weeks ago. What is the correct next strategic move?',
      correct: 'Drain the future liver remnant and control cholangitis first, using brief/titratable anticoagulation holds, then reassess FLR function and vascular resectability',
      wrong: [
        ['Proceed tomorrow to extended right hepatectomy with portal vein resection because delay risks tumor progression, and reverse LMWH completely until the epidural and drains are removed', 'Immediate major hepatectomy in cholangitis with undrained FLR and uncertain remnant reserve risks fatal liver failure and sepsis.', 'The liver remnant is the patient after the operation.'],
        ['Perform portal vein embolization immediately, then drain the left ducts once hypertrophy is documented, because FLR volume is the main barrier to safe resection', 'PVE before controlling cholangitis and draining the future remnant can worsen infection and does not solve contaminated bile.', 'Hypertrophy is not resuscitation.'],
        ['Start systemic therapy now and avoid biliary intervention because instrumentation may seed infection and anticoagulation interruption for PE is too dangerous', 'Active cholangitis and severe jaundice require biliary source control; chemotherapy is unsafe before infection control.', 'Systemic therapy does not sterilize obstructed ducts.'],
      ],
    },
    {
      id: 51958,
      chapter: 'Vascular, Trauma, and Damage Control',
      title: 'The Abdomen Becomes a Bad Landlord',
      prompt: "After extended hepatectomy for cholangiocarcinoma with portal vein reconstruction and fresh hepaticojejunostomy, the case has eaten 10 hours, 12 units of blood, and everyone's innocence. pH is 7.18, lactate 7.6, temperature 34.8 C, INR 2.1. The bowel is swollen, peak airway pressures jump when the fascia is pulled together, urine output fades, and Doppler over the remnant portal flow becomes sulky but present. No single bleeder is found. What should Priya do?",
      correct: 'Leave a temporary abdominal closure, continue ICU correction of physiology, monitor remnant inflow/outflow, and return for planned second look/closure',
      wrong: [
        ['Close the fascia tightly to protect the hepaticojejunostomy from exposure, then obtain CT in the ICU if oliguria or ventilator pressures remain abnormal', 'This creates or worsens abdominal compartment physiology and may compromise the portal reconstruction and liver remnant.', 'A closed abdomen is not a success if it strangles the operation.'],
        ['Systemically heparinize immediately for the portal vein reconstruction and keep the abdomen closed, accepting coagulopathy because graft thrombosis is the dominant threat', 'Portal patency matters, but full anticoagulation in uncontrolled coagulopathy after massive transfusion may cause bleeding and does not address compartment risk.', 'Do not anticoagulate your way out of pressure.'],
        ['Take down the hepaticojejunostomy and externalize bile routinely because fresh anastomoses should never be left under temporary abdominal closure', 'A fresh anastomosis is a concern, but routine takedown adds injury; the immediate problem is physiology and abdominal pressure.', 'Damage control means doing less of the right thing, not more of the wrong thing.'],
      ],
    },
    {
      id: 51959,
      chapter: 'Endocrine, Head-and-Neck, and Airway Traps',
      title: 'The Thyroid That Brought an Adrenal Lawyer',
      prompt: "A 46-year-old has a firm thyroid nodule, a suspicious level VI node, and FNA reported as 'concerning for medullary thyroid carcinoma.' The intern, wearing the expression of a tiny courthouse clerk, says, 'Great, total thyroidectomy tomorrow.' The patient also reports episodic pounding headaches and sweats, which everyone politely ignores because the neck ultrasound looks beautifully mapped. What is the safest next move?",
      correct: 'Before thyroidectomy: confirm MTC markers, test RET, exclude pheochromocytoma, then plan compartment surgery',
      wrong: [
        ['Proceed with total thyroidectomy and central neck dissection now, send RET testing afterward, and obtain plasma metanephrines at follow-up if the final pathology confirms medullary carcinoma', 'This is the sequence-only trap: the thyroid and nodal plan may be reasonable later, but pheochromocytoma must be excluded before anesthesia and thyroidectomy.', 'In MEN2 logic, the adrenal can kill the patient before the thyroid specimen reaches pathology.'],
        ['Perform diagnostic lobectomy with frozen section, then complete thyroidectomy only if frozen confirms carcinoma, preserving the contralateral thyroid if the nodule proves indolent', 'That is an almost-correct thyroid-nodule pathway for some follicular-derived cancers, but medullary carcinoma needs biochemical/genetic staging and compartment planning, not piecemeal diagnosis.', 'C-cell cancer does not reward a papillary-thyroid shortcut.'],
        ['Repeat FNA and defer all surgery because calcitonin can be falsely elevated and the normal lateral-neck ultrasound proves there is no regional disease', 'A repeat biopsy may occasionally clarify pathology, but it does not replace calcitonin/CEA, RET testing, pheochromocytoma screening, and deliberate operative planning.', 'A clean lateral neck does not make the endocrine workup optional.'],
      ],
    },
    {
      id: 51960,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Rectum Files a Margin Complaint',
      prompt: 'A 58-year-old has a low rectal adenocarcinoma 4 cm from the anal verge. MRI says T3c, EMVI positive, mesorectal fascia threatened at 1 mm, and a suspicious 8 mm obturator node. The robot is booked; the resident announces that distal margin is the only melodramatic organ in the room. What is the correct next step?',
      correct: 'Send to rectal-cancer MDT for TNT before TME, with lateral-node strategy on restaging',
      wrong: [
        ['Proceed directly to robotic low anterior resection with TME, then give adjuvant chemotherapy or radiation if the circumferential margin is positive on final pathology', 'This is the sequence-only trap: resection, chemotherapy, radiation, and TME are all plausible ingredients, but high-risk MRI features should drive neoadjuvant treatment before cutting.', 'The CRM is not a pathology surprise you politely discover afterward.'],
        ['Perform urgent APR because the tumor is low, remove any visible obturator tissue during the pelvic dissection, and use postoperative chemoradiation for nodal sterilization', 'This overweights distal location and underweights neoadjuvant downstaging, CRM protection, and planned lateral compartment management.', 'Low tumor does not mean APR first, MDT later.'],
        ['Offer immediate watch-and-wait because modern neoadjuvant therapy can produce complete clinical response and organ preservation in selected rectal cancers', 'Watch-and-wait is considered after a complete clinical response to treatment, not before treatment has been delivered.', 'Organ preservation is an outcome of response, not a pre-treatment spell.'],
      ],
    },
    {
      id: 51961,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Lipoma Wearing a False Mustache',
      prompt: "A 63-year-old has an 8 cm deep anterior-thigh mass, enlarging for six months, abutting but not encasing the femoral vessels on outside MRI. The report calls it 'probably atypical lipoma versus sarcoma.' A helpful colleague offers to shell it out through a transverse cosmetic incision so pathology can stop being dramatic. What should you do?",
      correct: 'Refer before cutting: MRI-reviewed core biopsy with planned tract, staging, MDT sequencing',
      wrong: [
        ['Perform marginal excision now through the smallest convenient incision, avoid the femoral vessels, and refer to a sarcoma center only if final pathology confirms high-grade sarcoma', 'This is the almost-correct distractor only if the lesion were a benign superficial mass; here it risks unplanned excision, contaminated planes, and compromised definitive margins.', 'A deep mass larger than 5 cm is not a lipoma until the sarcoma team agrees.'],
        ['Start preoperative radiation first because limb-sparing sarcoma care often uses neoadjuvant radiation, then obtain biopsy and staging immediately before definitive resection', 'This is a sequence-only trap: radiation may be part of treatment, but tissue diagnosis, grade, staging, and biopsy-tract planning come first.', 'Do not irradiate a maybe.'],
        ['Open-biopsy the most fluctuant area in clinic, pack the cavity if necrotic, and use that incision later as the center of a wide resection field', 'Poorly planned open biopsy can contaminate compartments and may not be resectable within a definitive limb-sparing field.', 'The biopsy incision is part of the future operation.'],
      ],
    },
    {
      id: 51962,
      chapter: 'HPB Catastrophes',
      title: 'The Future Liver Remnant Unionizes',
      prompt: "A 61-year-old with suspected perihilar cholangiocarcinoma arrives jaundiced and febrile. ERCP has drained the right system because the endoscopist followed the most photogenic duct; the planned operation is right trisectionectomy with caudate resection, leaving left lateral segments. CT says 'resectable,' and the fellow bows to the glowing word like it is a royal seal. The left system remains dilated; volumetry is not done. What is the safest plan?",
      correct: 'Treat cholangitis, map ducts/vessels, drain the FLR, assess FLR, then PVE/resect if safe',
      wrong: [
        ['Proceed with right trisectionectomy and caudate resection once fever improves on antibiotics, because delay risks cholangitis recurrence and CT has already established an R0 path', 'This ignores the missing-data trap: CT resectability does not prove a drained, vascularized, adequate future liver remnant.', 'What remains matters more than what leaves.'],
        ['Perform portal vein embolization immediately to grow the left lateral remnant, then arrange selective left-sided biliary drainage if bilirubin fails to fall before surgery', 'This is the sequence-only trap: PVE may be needed, but cholangitis control and FLR drainage should not be postponed behind hypertrophy maneuvers.', 'A remnant cannot politely hypertrophy while obstructed and infected.'],
        ['Convert to palliative metal stenting and systemic therapy because any perihilar tumor needing vascular mapping and PVE should be considered biologically unresectable', 'Complexity does not equal futility; the problem is incomplete staging and unsafe preparation, not established unresectability.', 'Do not call palliation just because the checklist got heavy.'],
      ],
    },
    {
      id: 51963,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Colon Blocks the Door While the Liver Hides the Guest List',
      prompt: "A 55-year-old has a near-obstructing sigmoid adenocarcinoma, still passing flatus after decompression. CT shows six bilobar liver lesions, no obvious peritoneal disease, and a cheerful note: 'potentially resectable metastases.' CEA is 900. A senior resident proposes sigmoid colectomy plus wedge resections and ablations tomorrow, before the tumor board can make everyone sad. What is the best sequence?",
      correct: 'Bridge the obstruction, complete staging/biology, give systemic therapy, then reassess staged colorectal-liver treatment',
      wrong: [
        ['Perform sigmoid colectomy with synchronous liver wedge resections and ablations now, because the primary is symptomatic and clearing all visible disease avoids chemotherapy delay', 'This is the heroic wrong answer: it treats visible disease but skips biology, full liver mapping, FLR planning, and response assessment.', 'Stage IV colorectal cancer is not a scavenger hunt for every lesion seen today.'],
        ['Begin full-dose systemic chemotherapy immediately and leave the obstructing primary alone unless it perforates, because stage IV disease should be treated medically first', 'Systemic therapy is important, but a near-obstructing primary may need bridge control with stent or diversion before chemotherapy.', 'Chemotherapy does not decompress a tight sigmoid on command.'],
        ['Do diverting colostomy or stent, then schedule colectomy next week, followed by liver MRI, molecular testing, and chemotherapy after the colon specimen heals', 'This is the sequence-only trap: decompression is reasonable, but definitive colectomy before staging, biology, and MDT strategy can delay systemic treatment and mis-sequence liver-directed care.', 'Bridge means bridge, not sneak a definitive operation through the side door.'],
      ],
    },
    {
      id: 51964,
      chapter: 'Endocrine, Head-and-Neck, and Airway Traps',
      title: 'The Carotid Clears Its Throat',
      prompt: "A 64-year-old previously treated with chemoradiation for tonsillar SCC has a foul ulcer in the oropharynx, two brief self-limited mouth bleeds, muffled voice, trismus, and SpO2 98% while sitting forward like a suspicious gargoyle. CTA shows tumor abutting 240 degrees of the internal carotid but no extravasation. The junior says, 'Great, negative CTA; biopsy under GA tomorrow, then salvage plan.' What is the safest sequence?",
      correct: 'Secure airway and carotid plan first, then biopsy/stage and discuss salvage versus palliation',
      wrong: [
        ['Proceed to direct laryngoscopy and biopsy under general anesthesia tomorrow because salvage candidacy cannot be assessed until histology confirms recurrence', 'This is the sequence-only trap: biopsy is needed, but airway and carotid blowout risk must be controlled before instrumentation.', 'The airway and carotid do not wait politely for pathology.'],
        ['Discharge with oral antibiotics and expedited outpatient PET-CT because normal oxygen saturation and no CTA extravasation make acute hemorrhage unlikely', 'This mistakes false reassurance for safety; sentinel bleeding in an irradiated field with carotid involvement is an emergency-risk pattern.', 'No extravasation is not the same as no danger.'],
        ['Book composite salvage resection with neck dissection and free flap now, asking vascular surgery to stand by only if the carotid is entered', 'This is almost correct only for a staged, resectable recurrence after workup; here it skips airway control, vascular planning, tissue confirmation, and full salvage-vs-palliation assessment.', 'Carotid involvement is not an intraoperative surprise to improvise around.'],
      ],
    },
    {
      id: 51965,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Ink That Would Not Behave',
      prompt: 'The pathology report walks into tumor board wearing judge robes: 18 mm ER-positive invasive ductal carcinoma after lumpectomy, sentinel nodes negative, whole-breast radiation planned. All margins are clear except the posterior margin, where invasive carcinoma is on ink; the pectoralis fascia was not removed. The resident waves a radiation-boost wand and declares the ink spiritually cleansed. What should the surgeon recommend?',
      correct: 'Re-excise the involved posterior margin, including pectoralis fascia if needed, before relying on radiation',
      wrong: [
        ['Accept the margin and add a larger tumor-bed boost because whole-breast radiation is already planned and the involved margin is posterior rather than radial', 'Radiation does not convert tumor on ink into an adequate surgical margin for invasive cancer when re-excision is feasible.', 'A close margin and a positive margin are not the same animal.'],
        ['Convert immediately to mastectomy with axillary dissection because any positive margin after lumpectomy proves breast conservation and sentinel-node staging have failed', 'Mastectomy may be needed if clear margins cannot be obtained, but this scenario first calls for targeted margin re-excision; the negative sentinel nodes do not justify axillary dissection.', 'Do not punish the axilla for a posterior breast-margin problem.'],
        ['Re-excise all six margins widely to avoid geographic miss, then omit radiation if the second specimen is clear', 'The known problem is a specific posterior margin, and whole-breast radiation remains part of breast-conserving therapy.', 'Precision beats theatrical extra cutting.'],
      ],
    },
    {
      id: 51966,
      chapter: 'Melanoma Nodal Logic',
      title: 'The Lymph Map Files a Formal Complaint',
      prompt: "A 63-year-old has a 1.6 mm nonulcerated melanoma excised from the posterior shoulder with no palpable adenopathy. Lymphoscintigraphy refuses to be tidy: uptake appears in the ipsilateral axilla and in a small interval node near the triangular intermuscular space. The intern says, 'Shoulder equals axilla,' and the gamma probe looks offended. What operation best respects the biology?",
      correct: 'Wide local excision plus sentinel-node biopsy of every mapped basin, including the interval node',
      wrong: [
        ['Wide local excision with axillary sentinel-node biopsy only, because interval nodes are uncommon and usually represent tracer noise rather than a true basin', 'An interval node can be the true sentinel node; ignoring it can understage the patient.', 'The lymphoscintigram is not decorative wallpaper.'],
        ['Wide local excision plus elective axillary dissection, reserving the interval node for ultrasound surveillance unless the axillary nodes are positive', 'There is no indication for elective lymph-node dissection in a clinically node-negative patient, and surveillance of a mapped sentinel node misses the staging operation.', 'Do not replace a precise staging biopsy with a bigger, less logical operation.'],
        ['Wide local excision alone because a 1.6 mm nonulcerated melanoma has low enough nodal risk that mapping abnormalities should not change surgery', 'A melanoma of this depth generally warrants discussion and performance of sentinel-node biopsy when clinically node-negative.', 'Depth opens the sentinel-node door; mapping tells you which rooms to enter.'],
      ],
    },
    {
      id: 51967,
      chapter: 'Endocrine Oncologic Traps',
      title: 'The Parathyroid Walnut With a Lawyer',
      prompt: "A patient arrives with calcium 15.4 mg/dL, PTH in the four-digit swamp, nephrolithiasis, and a firm palpable lower-neck mass. In the operating room, the 'adenoma' is a gray 3.5 cm parathyroid mass stuck to the ipsilateral thyroid capsule and strap muscle. The recurrent laryngeal nerve is draped posteriorly, visually intact, stimulating normally, and not grossly invaded. The fellow reaches for the peanut dissector like it is a dessert spoon. What is the senior move?",
      correct: 'Perform en bloc resection with ipsilateral thyroid lobe and involved soft tissue, avoiding capsular rupture',
      wrong: [
        ['Shell out the parathyroid mass intact if possible, send frozen section, and reserve thyroid lobectomy for confirmed carcinoma to avoid overtreating a difficult adenoma', 'Frozen section is unreliable for this distinction, and dissecting along the capsule risks rupture and seeding when carcinoma is suspected.', 'The first operation is the best chance not to spill the disease.'],
        ['Remove the mass piecemeal from the thyroid and strap muscle so the recurrent laryngeal nerve is never placed under traction, then treat recurrence with reoperative neck dissection if pathology proves cancer', 'Piecemeal excision is exactly the oncologic failure mode; nerve preservation should not require tumor violation when the nerve is not invaded.', 'Functional anatomy matters, but it is not a license to seed the field.'],
        ['Perform total thyroidectomy and bilateral central neck dissection because suspected parathyroid carcinoma should be treated like node-positive thyroid cancer', 'Routine bilateral thyroidectomy and central dissection are not the default; the operation should remove the suspicious tumor en bloc with involved adjacent tissue.', 'Do not import thyroid-cancer nodal habits into parathyroid-cancer surgery.'],
      ],
    },
    {
      id: 51968,
      chapter: 'Head-and-Neck Salvage Surgery',
      title: 'The Carotid Says Absolutely Not',
      prompt: "Eleven months after 70 Gy chemoradiation for lateral oropharyngeal SCC, a patient has biopsy-proven local recurrence, severe trismus, gastrostomy dependence, and a new lower cranial neuropathy. PET shows no distant metastases, which makes the registrar briefly sparkle. MRI, however, shows tumor fixed to prevertebral fascia with more than 270 degrees of internal carotid encasement. CTA shows no pseudoaneurysm, and someone says, 'So the carotid is fine.' The tumor board room becomes a courtroom. What is the defensible surgical recommendation?",
      correct: 'Reject curative salvage resection; pursue MDT nonoperative or palliative strategy unless R0 geometry changes',
      wrong: [
        ['Proceed with transoral robotic debulking because PET shows no distant disease and a negative CTA means the carotid can be safely observed postoperatively', 'Debulking is not curative salvage, and CTA excludes a current vascular lesion, not tumor fixation or a safe resection plane.', 'No pseudoaneurysm is not the same as resectable cancer.'],
        ['Book composite salvage resection with carotid skeletonization and free-flap reconstruction, accepting a close vascular margin because systemic options are unlikely to cure isolated recurrence', 'An expected close or positive margin against an encased carotid after radiation is not a defensible curative plan in this anatomy.', 'Salvage surgery earns its morbidity only when R0 is plausible.'],
        ['Delay treatment for repeat PET in six weeks because occult metastasis would make surgery futile and the current CTA proves there is no immediate danger', 'The problem is already biopsy-proven unresectable local recurrence; delay does not solve airway, nutrition, pain, or systemic-treatment planning.', 'Do not use another scan as a hiding place.'],
      ],
    },
    {
      id: 51969,
      chapter: 'Breast Oncologic Sequencing',
      title: 'The Breast Skin Starts a Riot',
      prompt: "A 41-year-old has triple-negative invasive ductal carcinoma, peau d'orange over one-third of the breast, dermal lymphatic tumor on punch biopsy, and biopsy-proven mobile axillary nodes. CT chest/abdomen/pelvis and bone scan show no distant metastases. The patient wants 'the whole thing off tomorrow,' and a junior offers skin-sparing mastectomy with sentinel nodes, as if the skin were merely being dramatic. What plan should the senior surgeon defend?",
      correct: 'Neoadjuvant systemic therapy, then modified radical mastectomy and postmastectomy radiation if no metastases',
      wrong: [
        ['Immediate skin-sparing mastectomy with sentinel-node biopsy and delayed chemotherapy, because removing the inflamed skin first reduces tumor burden and patient anxiety', 'Inflammatory breast cancer is treated with neoadjuvant systemic therapy first; sentinel-node staging is not the right axillary operation for biopsy-proven nodal disease in this setting.', 'The skin findings announce biology, not just a local excision target.'],
        ['Neoadjuvant chemotherapy followed by lumpectomy if MRI shows complete radiographic response, with axillary dissection only if nodes remain palpable', 'Breast conservation is generally not the operative strategy for inflammatory breast cancer, and the initially involved axilla requires definitive management.', 'A pretty MRI after treatment does not rewrite the original disease category.'],
        ['Primary mastectomy with immediate implant reconstruction, then decide on radiation only if final margins or nodes remain positive', 'Postmastectomy radiation is expected in inflammatory breast cancer, and immediate implant reconstruction can compromise the multimodality plan.', 'Do not let reconstruction scheduling drive cancer sequencing.'],
      ],
    },
    {
      id: 51970,
      chapter: 'Melanoma Regional Disease',
      title: 'The Sentinel Node Has Left the Chat',
      prompt: "A 58-year-old has a 3.4 mm ulcerated calf melanoma after diagnostic excision. Before wide excision, clinic exam finds two firm dermal nodules marching toward the groin like tiny bureaucrats with bad news, and a 2.2 cm inguinal node. FNA confirms melanoma in the groin node; biopsy of one dermal nodule confirms melanoma. PET/brain MRI show no distant disease. The junior still wants wide excision plus groin sentinel-node biopsy 'for staging.' What is the senior answer?",
      correct: 'No SLNB; confirm stage III disease and discuss neoadjuvant systemic therapy before definitive nodal surgery',
      wrong: [
        ['Perform wide local excision with sentinel-node biopsy first, then decide on inguinal dissection only if the sentinel node contains additional disease', 'The patient already has clinically apparent, biopsy-proven nodal disease and in-transit metastasis; sentinel-node biopsy no longer answers the staging question.', 'Do not ask the sentinel node a question the FNA already answered.'],
        ['Proceed directly to wide excision of the calf scar, excision of the dermal nodules, and complete inguinal dissection, because all visible disease is technically removable', 'Immediate surgery may be reasonable in selected cases, but clinically node-positive stage III melanoma should trigger multidisciplinary discussion of neoadjuvant systemic therapy before definitive nodal surgery.', 'Technical removability is not the same as optimal sequencing.'],
        ['Treat the dermal nodules as local recurrence only, excise them with narrow margins, and observe the groin node because PET shows no distant metastases', 'The groin node is biopsy-proven melanoma, and in-transit disease is regional stage III disease, not a harmless local scar problem.', 'A negative distant scan does not erase regional disease.'],
      ],
    },
    {
      id: 51971,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Liver That Filed a Complaint',
      prompt: "A 59-year-old with HCV cirrhosis has a 3.1 cm HCC sulking in segment VIII near the right hepatic vein. CT shows no vascular invasion or metastases. Bilirubin is 0.9, INR 1.1, albumin 3.6; the intern waves these around like victory bunting. Platelets are 61,000, he has large varices on EGD, splenomegaly, and one prior episode of controlled ascites. The tumor board gremlin says, 'Right hepatectomy, clean and glorious.' What is the senior move?",
      correct: 'Do not resect; refer for transplant/HPB MDT planning with bridging locoregional therapy if appropriate',
      wrong: [
        ['Proceed with laparoscopic right hepatectomy after platelet transfusion because the tumor is solitary, the bilirubin is normal, and minimally invasive surgery will reduce ascites and wound complications', 'This treats technical removability as permission. Portal hypertension and prior ascites make post-hepatectomy liver failure a central risk, especially for major hepatectomy.', 'In HCC, ask what liver remains and how sick that liver is.'],
        ['Perform TACE as definitive therapy and remove transplant from discussion because portal hypertension makes every curative surgical option unsafe', 'Portal hypertension argues against resection, not against transplant evaluation. A solitary 3.1 cm HCC may fall within transplant pathways depending on full criteria and center policy.', 'Portal hypertension often moves the patient from resection logic toward transplant logic.'],
        ['Do an open anatomic segment VIII resection with Pringle control and low CVP anesthesia because an anatomic margin is oncologically superior to ablation or transplant delay', 'Margin purity does not rescue a poor liver-reserve decision. The dominant risk is decompensation from resection in portal hypertension.', 'A beautiful specimen can still be a bad operation.'],
      ],
    },
    {
      id: 51972,
      chapter: 'Oncologic Surgical Judgment',
      title: "The Peritoneum's Tiny Legal Department",
      prompt: 'A 47-year-old has a Siewert III GEJ/gastric cardia adenocarcinoma with signet-ring features, staged cT3N1 by EUS. CT chest/abdomen/pelvis and PET show no metastases. Nutrition is being tuned, the anesthetist is optimistic, and the stomach is already writing its resignation letter. The fellow wants to start perioperative chemotherapy and book gastrectomy dates now. What missing step should stop the parade?',
      correct: 'Perform staging laparoscopy with peritoneal washings before curative-intent treatment is locked in',
      wrong: [
        ['Proceed directly to perioperative chemotherapy because modern PET/CT has already excluded clinically meaningful metastatic disease and laparoscopy risks delaying systemic therapy', 'PET/CT can miss low-volume peritoneal disease. Positive cytology or small implants can change the entire plan.', 'Peritoneal disease is often a staging-room ambush, not a CT finding.'],
        ['Book upfront total gastrectomy with D2 lymphadenectomy because tissue diagnosis is secure and surgery will provide the most accurate final staging', 'A definitive resection can become an avoidable morbidity if occult peritoneal metastasis is present. Staging should precede irreversible curative surgery.', 'Pathologic staging after the wrong operation is not a victory.'],
        ['Reserve laparoscopy only for visible ascites, ovarian enlargement, or omental caking, as though cytology matters only with macroscopic peritoneal disease', 'The point of laparoscopy and washings is to find radiographically occult disease, especially in high-risk gastric cancers.', 'Absence of visible peritoneal disease on CT is the reason to look, not the reason to relax.'],
      ],
    },
    {
      id: 51973,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Esophagus Returns Wearing a False Mustache',
      prompt: "A 63-year-old treated 18 months ago with definitive chemoradiation for mid-esophageal squamous cancer now has dysphagia. PET shows focal uptake at the old tumor bed and no distant disease. Endoscopy sees a tight ulcerated scar; biopsies are pending because the first pass brought back only inflamed theatre dust. The junior says, 'Local recurrence, no mets, Ivor Lewis on Tuesday.' The irradiated mediastinum quietly sharpens a spoon. What is the defensible senior plan?",
      correct: 'Confirm recurrence and restage fully; consider salvage esophagectomy only through a high-volume MDT pathway',
      wrong: [
        ['Proceed with standard Ivor Lewis esophagectomy now because PET shows isolated disease, the patient is obstructed, and delay risks losing the only curative window', 'This ignores nondiagnostic tissue, incomplete restaging, and the distinct morbidity of salvage surgery after high-dose radiation.', 'Salvage esophagectomy is not planned neoadjuvant esophagectomy with a spicier hat.'],
        ['Place a self-expanding metal stent immediately as a bridge to surgery, then restage after nutrition improves and inflammation settles', 'Stenting can complicate subsequent curative surgery and is not a casual bridge in a potentially resectable esophageal cancer pathway.', 'Palliation tools can sabotage curative options if used before MDT review.'],
        ['Treat with re-irradiation alone because a salvage operation after definitive chemoradiation has prohibitive morbidity and should essentially never be offered', 'This is too nihilistic. Carefully selected isolated recurrence may be considered for salvage surgery, but only after disciplined confirmation and planning.', 'High risk does not mean never; it means selection has to be ruthless.'],
      ],
    },
    {
      id: 51974,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Pancreas Offers a Venous Reconstruction Coupon',
      prompt: "A 58-year-old has pancreatic head adenocarcinoma. After metal stent drainage, bilirubin falls from 12 to 1.4, but CA19-9 remains 1,620. Pancreas-protocol CT shows 110 degrees of SMA abutment, severe short-segment SMV/PV narrowing with reconstructible vein above and below, no liver lesions, and a tiny volume of pelvic fluid that radiology calls 'probably physiologic,' with the confidence of a clerk stamping a haunted passport. The vascular surgeon says the vein is doable. What should the surgical oncologist do?",
      correct: 'Staging laparoscopy and induction systemic therapy before considering resection',
      wrong: [
        ['Proceed directly to pancreaticoduodenectomy with planned SMV/PV resection because the vein is reconstructible, the SMA is not encased, and bilirubin has normalized', 'This overweights technical feasibility and underweights borderline biology, occult metastatic risk, and neoadjuvant sequencing.', 'A reconstructible vein is not a permission slip for an upfront Whipple.'],
        ['Declare the tumor unresectable solely because any SMA contact predicts a positive margin, then offer palliative chemotherapy without laparoscopy or MDT reconsideration', 'Limited arterial abutment is not the same as unresectable encasement. The patient still needs staged, multidisciplinary potentially curative evaluation.', 'Do not confuse borderline with abandoned.'],
        ['Give short-course chemoradiation for local control, then operate immediately if the post-treatment CT shows stable vessel contact and no new metastases', 'This skips systemic induction and occult-metastasis assessment in a patient with high-risk biology. Stable vessel contact after therapy also may not reflect viable tumor response.', 'Pancreatic cancer staging is anatomical and biological; CT after therapy can lie by omission.'],
      ],
    },
    {
      id: 51975,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Disappearing Metastases Demand Applause',
      prompt: "A 52-year-old with a stented, asymptomatic sigmoid cancer had eight bilobar colorectal liver metastases. After 6 months of FOLFOX-bevacizumab, MRI shows four right-sided lesions; two small left-sided lesions have vanished like suspicious noodles into the wallpaper. Planned right trisectionectomy would leave a 21% FLR. Platelets have drifted down, the spleen is bigger, and the fellow says, 'The liver looks happier because there is less cancer.' The liver remnant coughs politely into a tiny handkerchief. What is the best operative strategy?",
      correct: 'Use a staged, parenchymal-sparing liver plan with FLR hypertrophy before any major hepatectomy',
      wrong: [
        ['Perform right trisectionectomy now and ignore the vanished left-sided lesions because complete radiographic response after modern chemotherapy is equivalent to sterilization', 'Disappearing lesions may not be cured, and a 21% FLR after chemotherapy-associated injury is dangerous.', 'Invisible on MRI is not the same as biologically erased.'],
        ['Resect the sigmoid primary first, then wait three months and reassess the liver, because the primary tumor is the source of future metastases and should be removed before complex liver surgery', 'The primary is controlled and asymptomatic. This plan delays the limiting curative problem, which is liver clearance with adequate remnant and disease control.', 'In synchronous CRLM, the first operation should solve the bottleneck, not satisfy tradition.'],
        ['Do a single combined colectomy, right trisectionectomy, and blind ablation of the left liver based on the original scan to minimize time off chemotherapy', 'This compounds physiologic risk, does not respect FLR insufficiency, and treats vanished lesions without precise intraoperative localization strategy.', 'Combining operations can be efficient; it can also be a way to stack preventable failures.'],
      ],
    },
    {
      id: 51976,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Pelvis Requests a Less Dramatic Lawyer',
      prompt: "A 61-year-old with recurrent rectal cancer after TME, pelvic radiation, and systemic therapy arrives vomiting. CT shows two small-bowel transition points, moderate ascites, peritoneal nodules, bilateral hydronephrosis, and a pelvic recurrence crawling to the sidewall with sciatic pain. Albumin is 2.1, ECOG is 3, and NG decompression improves nausea. A visiting surgeon proposes pelvic exenteration plus cytoreduction because 'otherwise we are doing nothing.' The bowel, ascites, ureters, and nerves all object at once in committee minutes. What is the best answer?",
      correct: 'Avoid heroic resection; palliate obstruction with decompression, symptom control, and venting access if needed',
      wrong: [
        ['Offer total pelvic exenteration with ureteric reconstruction because hydronephrosis and sciatic pain prove the pelvis is the dominant symptomatic site', 'Sidewall involvement and peritoneal disease make R0 exenteration unlikely, while multifocal obstruction and poor physiology make morbidity high.', 'Exenteration is justified by achievable margins and patient selection, not by how awful the pelvis looks.'],
        ['Proceed with cytoreductive surgery and HIPEC because peritoneal nodules are present and the obstruction provides a useful therapeutic reason to explore', 'CRS/HIPEC depends on disease extent, fitness, and likelihood of complete cytoreduction. Multifocal MBO, ascites, poor performance status, and recurrent pelvic sidewall disease are bad signals.', 'HIPEC after incomplete cytoreduction is not magic broth.'],
        ['Perform laparotomy with adhesiolysis, two bypasses, diverting ileostomy, and biopsy, accepting high morbidity because restoring enteral intake is the clearest palliative endpoint', 'This assumes surgically correctable obstruction despite multifocal malignant disease and frailty. It risks spending the patient\'s remaining time recovering from an operation that may not work.', 'For MBO, define the symptom target and ask whether the operation can realistically deliver it.'],
      ],
    },
    {
      id: 51977,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Bladder Dome Wants a Divorce',
      prompt: "The sigmoid cancer has arrived in theatre wearing a tiny barrister wig and claiming the bladder dome is merely a close personal friend. CT shows no metastases; cystoscopy shows only mucosal edema. At laparotomy, the tumor is welded to the bladder dome but looks almost peelable if one squints like a dangerous optimist. What is the oncologically sound move?",
      correct: 'Proceed with en bloc sigmoid colectomy and partial cystectomy or planned bladder resection as needed to achieve an R0 margin, with standard vascular ligation and nodal clearance',
      wrong: [
        ['Peel the tumor off the bladder because cystoscopy did not show mucosal invasion', 'Cystoscopy can miss extrinsic muscular or serosal invasion, and peeling risks an R1/R2 margin and tumor violation.', 'In T4b colon cancer, the plane you create may be the recurrence.'],
        ['Shave the bladder surface and fulgurate the suspicious area to avoid urinary morbidity', 'A cosmetic organ-sparing maneuver is not equivalent to an oncologic margin.', 'Functional preservation is valuable only after margin logic is satisfied.'],
        ['Abort resection and give chemotherapy solely because adjacent-organ invasion is present', 'Potentially curable nonmetastatic T4b colon cancer generally requires complete en bloc resection when feasible.', 'Technical difficulty is not the same as unresectability.'],
      ],
    },
    {
      id: 51978,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Sphincter Tribunal',
      prompt: "A 58-year-old has biopsy-proven HPV-associated anal squamous carcinoma, bulky inguinal nodes, and a sphincter that is filing noise complaints. The intern, holding an APR consent like a flaming theatre prop, says, 'It is low, it is ugly, let us remove it.' The patient is not perforated; stools still pass, painfully. What is the senior answer?",
      correct: 'Complete staging and proceed with definitive chemoradiation, adding a diverting stoma only if needed for obstruction, sepsis, or intolerable symptoms; reserve APR for biopsy-proven persistent or recurrent disease',
      wrong: [
        ['Perform upfront APR with inguinal node sampling because the tumor is bulky and low', 'Primary APR overtreats most nonmetastatic anal squamous cancers and ignores the chemoradiation-first paradigm.', 'Anal SCC is the exception that humiliates rectal-cancer reflexes.'],
        ['Treat it as low rectal adenocarcinoma with total neoadjuvant therapy followed by TME', 'Histology changes the disease pathway; anal SCC is not managed by routine TME sequencing.', 'The microscope gets a vote before the pelvis is rearranged.'],
        ['Excise the anal mass locally and observe the nodes after wound healing', 'Bulky nodal anal SCC requires definitive field-based oncologic therapy, not piecemeal local control.', 'Nodal basin logic beats tidying the visible lump.'],
      ],
    },
    {
      id: 51979,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Obstruction Smoke Bomb',
      prompt: "A 39-year-old arrives with a left-sided colon cancer obstructing like a smug cork. He is distended but stable, no peritonitis, lactate normal. His mother had endometrial cancer at 42, and CT shows an indeterminate 1.5 cm liver lesion; the proximal colon has not been examined. The junior says the bowel is yelling too loudly for genetics, chest staging, or MDT. What is the best senior move?",
      correct: 'Decompress safely as a bridge, using SEMS if appropriate expertise and lesion factors allow or a diverting stoma if not, then complete staging, evaluate the remaining colon, test tumor MMR/MSI, assess hereditary risk, and plan definitive resection in MDT',
      wrong: [
        ['Perform emergency segmental colectomy immediately because obstruction makes staging secondary', 'It solves the blockage but may miss synchronous disease, metastatic strategy, and hereditary-risk implications.', 'The tumor used obstruction as a flash grenade.'],
        ['Perform immediate subtotal colectomy because the family history suggests Lynch syndrome', 'Extent of colectomy should not be chosen from suspicion alone while metastatic staging and colon evaluation remain incomplete.', 'Hereditary logic needs evidence, not panic.'],
        ['Start systemic chemotherapy immediately and leave the complete obstruction untreated', 'An unrelieved mechanical obstruction can perforate or decompensate before systemic therapy helps.', 'Oncology cannot perfuse a closed pipe.'],
      ],
    },
    {
      id: 51980,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The CRM Noir',
      prompt: "Pelvic MRI reads like a noir ransom note: low rectal adenocarcinoma 3 cm from the anal verge, mesorectal fascia threatened at 1 mm, EMVI positive, and an 8 mm right internal iliac node lurking in a raincoat. Liver MRI is pending for two small CT lesions. The fellow says, 'APR gives a distal margin; case closed.' Priya points at the sidewall like it owes her money. What is the correct plan?",
      correct: 'Discuss in rectal cancer MDT, complete metastatic workup including liver MRI, plan total neoadjuvant therapy with pelvic chemoradiation strategy that accounts for the threatened CRM and lateral node, then restage to decide TME/APR, possible lateral node management, and liver-directed treatment',
      wrong: [
        ['Proceed directly to APR because the tumor is low and sphincter preservation is unlikely', 'APR may address the distal margin but does not solve threatened CRM, EMVI-driven systemic risk, lateral nodal disease, or liver strategy.', 'The anus is not the only margin in the room.'],
        ['Perform TME first and treat the lateral node and liver lesions only if pathology confirms risk', 'The MRI already identifies high-risk features that should alter neoadjuvant fields and sequencing.', 'A preoperative MRI is not decorative wallpaper.'],
        ['Offer watch-and-wait immediately if early chemoradiation symptoms improve', 'Organ preservation requires rigorous complete clinical response assessment after planned therapy; symptom improvement is not oncologic clearance.', 'A quieter tumor is not a vanished tumor.'],
      ],
    },
    {
      id: 51981,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Map Is Not the Territory, Especially the Liver',
      prompt: 'A 46-year-old marathoner has a transverse colon cancer glued to the stomach and abdominal wall, plus synchronous bilobar liver metastases. The hepatobiliary surgeon can sketch a right hepatectomy plus wedges; the colorectal surgeon can sketch en bloc colectomy and partial gastrectomy. The future liver remnant is borderline, and no one has seen biology after chemotherapy. The whiteboard looks heroic. Priya distrusts whiteboards. What is the best strategy?',
      correct: 'Avoid immediate combined maximal resection; refer to colorectal-HPB MDT for systemic therapy and biology assessment, liver MRI/volumetry, possible portal vein embolization or staged liver-first/colon-first strategy, and later en bloc primary resection only if an R0 and safe liver plan remain achievable',
      wrong: [
        ['Proceed with one-stage colectomy, partial gastrectomy, abdominal wall resection, right hepatectomy, and wedges because all disease is visible', 'Technical resectability does not establish safe remnant liver function, favorable biology, or acceptable combined operative risk.', 'A complete specimen can still be a strategic disaster.'],
        ['Peel the colon tumor off the stomach and abdominal wall to shorten the operation before liver resection', 'Peeling a T4b primary risks tumor violation and positive margins.', 'Saving time by creating an R1 plane is not efficiency.'],
        ['Resect only the primary now and ignore liver treatment until symptoms develop', 'In synchronous metastatic disease, the liver burden often drives survival and must be integrated from the beginning.', 'The loud primary may not be the disease that kills first.'],
      ],
    },
    {
      id: 51982,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Peritoneal Confetti Clause',
      prompt: "A 34-year-old with right colon cancer and iron-deficiency anemia has a CT that politely denies metastases. At laparoscopy before planned colectomy, there are a few omental and right diaphragmatic peritoneal nodules, plus an ovarian implant winking like a tiny bureaucrat who has already stamped 'stage IV.' The primary is not perforated and only partially obstructing. The registrar says, 'We can just remove what we see and do the colectomy.' What should happen?",
      correct: 'Do not perform casual debulking or unplanned definitive colectomy; biopsy or confirm/document peritoneal disease, assess PCI, complete staging and tumor biology including MMR/MSI and hereditary-risk evaluation, and refer to a peritoneal surface malignancy MDT for systemic therapy and possible complete CRS with or without HIPEC if selected',
      wrong: [
        ['Remove the visible implants, perform right colectomy, and call it cytoreduction', 'Incomplete or unplanned cytoreduction can compromise later definitive treatment and may not improve outcome.', 'CRS is an operation plan, not a scavenger hunt.'],
        ['Proceed with colectomy because the CT was negative and the implants may be benign', 'Peritoneal metastases are commonly underdetected by CT; suspicious implants must change staging and intent.', 'A negative scan is not a notarized affidavit from the peritoneum.'],
        ['Abandon all oncologic options and create permanent palliation only because peritoneal disease is automatically futile', 'Selected colorectal peritoneal metastasis patients may benefit from complete cytoreduction in expert centers.', 'Stage IV is not one disease; selection is the blade.'],
      ],
    },
    {
      id: 51983,
      chapter: 'HPB Catastrophes',
      title: 'The Remnant Liver Gets First-Class Plumbing',
      prompt: "A 66-year-old with suspected Bismuth IIIa perihilar cholangiocarcinoma is jaundiced, febrile, and scheduled for right hepatectomy with caudate resection if staging stays clean. CT volumetry says the left liver will be 27% of total functional liver volume. The right anterior ducts are impressively swollen, like angry brass instruments, and the fellow wants ERCP stents into the right system because 'that is where the bile looks most offended.' What is the safest preoperative strategy?",
      correct: 'Control cholangitis and selectively drain the future liver remnant, then reassess FLR function/volume and use portal vein embolization of the side to be resected if the remnant remains inadequate',
      wrong: [
        ['Drain the most dilated right-sided ducts first because they are radiographically dominant', 'Those ducts are in the liver that is planned for removal; draining them may not improve the function of the liver that must carry the patient after resection.', 'In hilar cholangiocarcinoma, ask which liver will stay.'],
        ['Proceed directly to right hepatectomy because drainage risks tumor seeding and cholangitis can be treated with antibiotics', 'Antibiotics do not solve obstructed infected bile ducts, and a marginal undrained remnant increases postoperative liver failure risk.', 'A beautiful margin is not useful if the remnant liver fails.'],
        ['Place bilateral permanent metal stents before the final operative plan is settled', 'Indiscriminate stenting can contaminate ducts, complicate operative planes, and does not replace remnant-directed planning.', 'Drainage should serve the resection plan, not decorate the hilum.'],
      ],
    },
    {
      id: 51984,
      chapter: 'Endocrine, Head-and-Neck, and Airway Traps',
      title: 'The Thyroid Can Wait Its Turn',
      prompt: 'A 42-year-old has biopsy-proven medullary thyroid carcinoma, calcitonin high enough to make the lab machine look embarrassed, and a new RET mutation result. He also reports episodic headaches and palpitations; CT done for staging notes a 3 cm adrenal mass. The thyroid tumor board is sharpening its tiny knives for total thyroidectomy tomorrow. What should Priya throw across the room first?',
      correct: 'Biochemically evaluate for pheochromocytoma and, if present, alpha-block and treat the pheochromocytoma before thyroidectomy; then proceed with appropriate thyroidectomy and compartment-based nodal surgery',
      wrong: [
        ['Proceed with total thyroidectomy and central neck dissection first because medullary thyroid carcinoma does not respond to radioactive iodine', 'The oncologic statement is true, but the sequence is dangerous if an occult pheochromocytoma is present.', 'Correct cancer biology does not excuse unsafe endocrine sequencing.'],
        ['Perform thyroid lobectomy only, then decide on RET testing after final pathology', 'Known medullary carcinoma with RET concern requires broader endocrine and familial evaluation; lobectomy is inadequate for standard MTC management.', 'MTC is not managed like a tiny low-risk papillary cancer.'],
        ['Biopsy the adrenal mass to confirm metastasis before delaying thyroid surgery', 'Biopsying an unexcluded pheochromocytoma can provoke a hypertensive crisis and is not the first diagnostic step.', 'Never stick a needle into a possible pheo casually.'],
      ],
    },
    {
      id: 51985,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Lipoma That Filed a Lawsuit',
      prompt: "A 55-year-old had a 'lipoma' removed from the deep medial thigh through a cheerful transverse incision chosen by a surgeon who apparently hated future oncologists. The mass was 8 cm, ruptured during shell-out, and pathology returns high-grade undifferentiated pleomorphic sarcoma with positive margins. MRI now shows scar and hematoma but no obvious lump. CT chest is negative. What is the least cursed next move?",
      correct: 'Refer to a sarcoma MDT for planned re-excision of the contaminated operative bed including the scar and tract, with radiation sequencing determined by the sarcoma team',
      wrong: [
        ['Observe with serial MRI because there is no definite gross residual tumor', 'Microscopic residual disease and field contamination are common after unplanned excision; absence of a visible mass is false reassurance.', 'Sarcoma margins are not negotiated by postoperative vibes.'],
        ['Immediately perform a wider local excision through the same transverse incision before radiation makes tissues hostile', 'The intent is reasonable, but unplanned repeat surgery without sarcoma MDT mapping may worsen contamination or compromise definitive margins/reconstruction.', 'The second cut should be designed by the team that can finish the job.'],
        ['Give chemotherapy first because high-grade histology means systemic control is the only urgent issue', 'Systemic risk matters, but local field control after contaminated positive-margin excision remains central and should be planned in an MDT sequence.', 'Do not let grade distract from the violated compartment.'],
      ],
    },
    {
      id: 51986,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Pancreas and the Smug Portal Vein',
      prompt: "A fit 63-year-old has pancreatic head adenocarcinoma. After biliary stenting, bilirubin normalizes but CA19-9 remains 620. Pancreas-protocol CT shows 190 degrees of short-segment SMV/portal vein contact with a reconstructable vein above and below, plus hazy less-than-180-degree SMA abutment. No metastases are seen, though the radiology report whispers 'inflammatory stranding' like a noir informant. A confident registrar books a Whipple with possible vein resection for Friday. What should the senior surgeon do?",
      correct: 'Treat as borderline resectable pancreatic cancer: give neoadjuvant systemic therapy, consider staging laparoscopy given biologic risk, restage carefully, and explore for resection/venous reconstruction only if there is no progression and an expert team can achieve an R0 operation',
      wrong: [
        ['Proceed directly to Whipple with planned portal vein resection because the vein is reconstructable', 'Reconstructability alone does not address arterial abutment, margin risk, or suspicious biology reflected by persistently high CA19-9.', 'A vein you can rebuild is not a permission slip to ignore biology.'],
        ['Declare the tumor unresectable and perform prophylactic surgical bypass now', 'Borderline resectable disease may become appropriately resectable after neoadjuvant therapy; bypass is not indicated without symptoms requiring palliation.', 'Do not confuse borderline with hopeless.'],
        ['Give radiation alone to sterilize the SMA margin, then operate if the CT looks unchanged', 'Systemic therapy is central because occult metastatic biology is a major threat; stable post-treatment imaging can be misleading and must be interpreted in MDT context.', 'The pancreas often lies on restaging scans.'],
      ],
    },
    {
      id: 51987,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Peritoneum Refuses to Appear on Camera',
      prompt: "A 59-year-old has poorly differentiated diffuse-type adenocarcinoma of the proximal stomach extending to the GE junction, uT3N+ by EUS. CT chest/abdomen/pelvis is clean, PET is clean, and the intern announces that the peritoneum has 'passed its audition.' There is trace pelvic fluid that radiology calls nonspecific. The team wants to start perioperative chemotherapy and pencil in gastrectomy. What step should not be skipped?",
      correct: 'Perform staging laparoscopy with peritoneal washings before committing to curative-intent therapy and resection; positive cytology or occult implants should redirect management away from curative gastrectomy',
      wrong: [
        ['Treat a negative PET/CT as enough to rule out occult peritoneal disease', 'Peritoneal disease and positive cytology are often missed by cross-sectional imaging and PET, especially in diffuse-type gastric cancer.', 'The peritoneum is a stealth organ.'],
        ['Proceed straight to gastrectomy because surgery provides the most accurate staging', 'A nontherapeutic laparotomy/gastrectomy in occult M1 disease adds morbidity without curative benefit.', 'Staging should prevent the wrong big operation, not happen during it.'],
        ['Use EUS nodal staging to decide; laparoscopy is only needed for obstructing tumors', 'EUS helps local staging but does not reliably exclude peritoneal metastasis or positive cytology.', 'N depth is not the same as M certainty.'],
      ],
    },
    {
      id: 51988,
      chapter: 'Oncologic Surgical Judgment',
      title: 'The Sentinel Node Has Already Confessed',
      prompt: "A 48-year-old has a 4.4 mm ulcerated calf melanoma. The groin contains a palpable node that has already confessed on FNA: melanoma. Two small subcutaneous nodules between calf and groin are biopsy-proven in-transit disease. PET/CT and brain MRI show no distant metastases. The junior books wide local excision plus sentinel node biopsy, because the checklist is wearing a tiny judge's wig. What is the better senior plan?",
      correct: 'Do not perform SLNB; manage as resectable clinical stage III melanoma with MDT review, mutation testing as appropriate, consideration of neoadjuvant immunotherapy, then definitive wide excision and therapeutic management of nodal/in-transit disease based on response and resectability',
      wrong: [
        ['Perform wide local excision with sentinel node biopsy, then decide on completion dissection if the sentinel node is positive', 'The nodal basin is already clinically and cytologically positive; SLNB no longer answers the staging question.', 'Sentinel biopsy is for a quiet basin, not one shouting its diagnosis.'],
        ['Perform immediate wide excision and complete inguinal lymph node dissection, then give adjuvant therapy if pathology confirms stage III disease', 'This is a plausible older reflex, but it may miss the opportunity for neoadjuvant immunotherapy and response-guided regional control.', 'In bulky or clinically evident stage III melanoma, sequencing can be treatment, not delay.'],
        ['Treat as stage IV disease and avoid surgery because in-transit nodules mean systemic spread', 'In-transit lesions are regional disease; with no distant metastases, curative-intent multimodality therapy may still be appropriate.', 'Regional does not automatically mean palliative.'],
      ],
    },
    {
      id: 51989,
      chapter: 'HPB Danger Zones',
      title: "The Smug Cystic Artery That Wasn't",
      prompt: "During a hostile laparoscopic cholecystectomy, the gallbladder is a furious little courthouse and Calot's triangle is perjuring itself. The resident says, 'Big cystic artery, clip it?' A thick pulsatile vessel dives behind the common hepatic duct toward the right liver. The lower gallbladder is fused to the hilum, and you do not have a true critical view. What is the safest next move?",
      correct: 'Do not clip or divide the vessel; stop further hilar dissection, reorient with fixed landmarks and imaging if safe, call experienced help as needed, and use a bailout such as subtotal cholecystectomy that avoids the hilum',
      wrong: [
        ['Clip and divide the vessel because a cystic artery can be large in acute cholecystitis', 'A large vessel heading toward the right liver behind the bile duct is a vasculobiliary trap; dividing it risks right hepatic arterial injury and worsens any bile duct injury.', 'A structure is not the cystic artery until the operation has proved it, not merely wished it.'],
        ["Convert to open and continue dissecting Calot's triangle until the cystic duct is isolated", 'Conversion can improve exposure, but it does not by itself make unsafe hilar dissection safe; the strategy still needs to change.', 'Open surgery is an access choice, not a license to ignore hostile anatomy.'],
        ['Perform a fundus-first total cholecystectomy down to the cystic duct and artery', 'Fundus-first dissection can still funnel the surgeon into the same inflamed hilar danger zone.', 'Bailout means avoiding the danger zone, not arriving there from a more scenic road.'],
      ],
    },
    {
      id: 51990,
      chapter: 'Leaks and Treacherous Drains',
      title: 'The Pelvic Abscess With Excellent Manners',
      prompt: 'Postoperative day 6 after low anterior resection, the patient looks like a polite disaster: heart rate 118, new confusion at night, ileus, WBC 18, lactate 2.4. The pelvic drain has produced almost nothing, wearing the innocent face of a tiny bureaucrat. CT with rectal contrast shows a 5 cm presacral fluid-gas collection but no visible contrast leak. What should you do?',
      correct: 'Treat this as a contained anastomotic leak with abscess: start broad-spectrum antibiotics, urgently obtain percutaneous drainage if anatomically feasible, and reassess for diversion or operation if physiology worsens or drainage is inadequate',
      wrong: [
        ['Observe because the rectal contrast study did not show extravasation', 'Absence of extravasation is not enough to exclude leak; the collection and physiology are already declaring source control failure.', 'The scan did not acquit the anastomosis; it merely failed to catch it speaking.'],
        ['Remove the pelvic drain because low output proves it is not helping', 'Low output may mean the drain is malpositioned, blocked, or not communicating with the abscess; removing it does not address the source.', 'A quiet drain may be lazy, lost, or lying.'],
        ['Give antibiotics alone and repeat CT in 72 hours if the fever rises', 'A drainable infected collection with sepsis physiology needs source control; antibiotics alone are incomplete.', 'Antibiotics are not a plumbing system.'],
      ],
    },
    {
      id: 51991,
      chapter: 'Vasculobiliary Aftermath',
      title: 'The Clip That Invited the Artery to the Funeral',
      prompt: "A patient returns 36 hours after a difficult cholecystectomy done elsewhere. The drain has bilious output, bilirubin is 5, AST/ALT are sharply elevated, and CT shows a small biloma plus patchy ischemia in segments V/VIII. The operative note says 'large cystic artery clipped after brisk bleeding.' The junior proposes ERCP for a cystic duct stump leak and a victory pastry. What is the senior answer?",
      correct: 'Assume a major vasculobiliary injury until proven otherwise: resuscitate, drain infected bile, start antibiotics if septic, obtain high-quality biliary and arterial imaging, and urgently involve or transfer to an HPB center rather than attempting immediate local reconstruction',
      wrong: [
        ['Proceed directly to ERCP and sphincterotomy for presumed cystic duct stump leak', 'ERCP may help selected minor leaks, but ischemic right-liver findings and the operative bleeding history suggest combined arterial and bile duct injury.', 'A stump leak should not make part of the liver look ischemic.'],
        ['Perform immediate hepaticojejunostomy at the index hospital because bile duct injuries should be repaired early', 'Repair in an inflamed, ischemic, poorly characterized vasculobiliary injury risks stricture, leak, sepsis, and loss of hepatic sector viability.', 'The first repair is precious; do not spend it in the wrong room with the wrong map.'],
        ['Observe with drains because the biloma is small and the patient is not yet in shock', 'Contained bile plus arterial compromise can deteriorate; delayed recognition increases septic and hepatic complications.', 'Small collections can be the smoke from a much larger anatomical fire.'],
      ],
    },
    {
      id: 51992,
      chapter: 'Post-Whipple Noir',
      title: 'The Sentinel Bleed Checks In Under a Fake Name',
      prompt: "Post-Whipple day 12. The pancreatic drain has been sour with high amylase, the CT from yesterday showed a small undrained collection near the GDA stump, and at 3 a.m. the drain suddenly produces 80 mL of bright blood then becomes innocent again. Hemoglobin drops 1.2 g/dL, heart rate is 112, pressure responds to a small bolus. The intern says, 'It stopped, probably a drain scratch.' The stomach, dressed as a noir suspect, offers endoscopy as an alibi. What should you do now?",
      correct: 'Treat as sentinel post-pancreatectomy hemorrhage from arterial erosion or pseudoaneurysm: move to monitored or ICU care, resuscitate and correct coagulopathy, obtain urgent CTA and catheter angiography with embolization or covered stent as appropriate, while ensuring drainage/source control of the infected pancreatic leak',
      wrong: [
        ['Observe closely because the bleeding stopped and the hemoglobin drop is modest', 'Sentinel bleeding often stops before catastrophic hemorrhage; transient stability is the misleading clue, not reassurance.', 'A warning shot is not a peace treaty.'],
        ['Perform upper endoscopy first because post-Whipple bleeding is usually intraluminal', 'Endoscopy can delay definitive control when extraluminal arterial erosion communicates with the drain or anastomosis.', 'The scope sees mucosa, not the angry artery bathing in pancreatic juice.'],
        ['Take the patient immediately to laparotomy for blind oversewing of the GDA stump', 'In a temporarily responsive patient, angiographic localization/control is often safer than nonlocalizing reoperation in an inflamed bed.', 'Do not enter the haunted pancreatic bed without a map unless the patient gives you no choice.'],
      ],
    },
    {
      id: 51993,
      chapter: 'Postoperative Collapse',
      title: 'The Abdomen Becomes a Pressure Cooker With Credentials',
      prompt: "Six hours after open repair of a ruptured AAA, the patient has received heroic fluids, blood, and calcium rituals. Now peak airway pressures climb, urine output falls to 5 mL/hr, lactate rises again, norepinephrine doubles, the abdomen is tight as a cursed drum, CVP is 19, and both feet still have Doppler signals. The ICU fellow wants more crystalloid because 'the kidneys are dry.' Bladder pressure is 31 mmHg. What is the correct move?",
      correct: 'Diagnose abdominal compartment syndrome and perform urgent decompressive laparotomy with temporary abdominal closure while continuing balanced resuscitation and correction of coagulopathy',
      wrong: [
        ['Give additional crystalloid because oliguria and vasopressor need indicate inadequate preload', 'Further fluid can worsen visceral and abdominal wall edema, raising intra-abdominal pressure and deepening organ failure.', 'In compartment physiology, the tank may be full but the pump is being squeezed.'],
        ['Send the patient for CT angiography to exclude graft thrombosis because pulses can be misleading', 'The bladder pressure and multisystem dysfunction already establish a time-critical diagnosis; CT transfer delays decompression.', 'The diagnosis is measured at the bedside, not politely requested from radiology.'],
        ['Start diuresis because the high CVP proves volume overload is the main problem', 'High CVP can be transmitted pressure from abdominal and thoracic compression; diuresis does not relieve the compartment.', 'A high number on the monitor can be a pressure artifact wearing a cardiology costume.'],
      ],
    },
    {
      id: 51994,
      chapter: 'Low-Flow Gut Crimes',
      title: 'The Bowel Files a Complaint Before the Labs Wake Up',
      prompt: "Postoperative day 3 after sigmoid colectomy for perforated diverticulitis, the patient is in the ICU on norepinephrine for sepsis. The abdomen is distended but soft, the ostomy is dusky at the edge, pain suddenly becomes severe and weirdly theatrical, lactate is only 2.1, and CT done without arterial phase says 'ileus, no drainable abscess.' The senior resident says, 'Not peritonitic; wait for morning rounds.' The small bowel coughs politely into a handkerchief. What should happen now?",
      correct: 'Escalate immediately for suspected mesenteric ischemia: obtain urgent arterial-phase CTA if the patient can tolerate it, involve vascular and acute care surgery now, optimize perfusion and reduce vasoconstrictors when possible, and prepare for revascularization and/or exploratory laparotomy with planned second look if ischemia is found',
      wrong: [
        ['Treat as postoperative ileus because the abdomen is soft and lactate is only mildly elevated', 'Early mesenteric ischemia may have a soft exam and lactate can lag; pain out of proportion and vasopressor/low-flow risk are more important.', 'The bowel often screams before the blood gas learns the lyrics.'],
        ["Repeat a standard venous-phase CT tomorrow because today's CT showed no abscess", 'Absence of a drainable abscess does not address arterial or nonocclusive ischemia, and delay can convert threatened bowel into dead bowel.', 'A leak search is not a mesenteric perfusion study.'],
        ['Increase norepinephrine to normalize blood pressure before any surgical or vascular evaluation', 'Perfusion must be supported, but escalating vasoconstriction without addressing possible mesenteric ischemia can worsen splanchnic flow.', 'A prettier MAP does not guarantee a perfused intestine.'],
      ],
    },
    {
      id: 51995,
      chapter: 'Hostile Gallbladders and Named Danger Zones',
      title: 'The Infundibulum Commits Perjury',
      prompt: "The gallbladder is a shrunken courtroom witness, and every structure in Calot's triangle is giving false testimony. During laparoscopic cholecystectomy for chronic cholecystitis, the assistant says the tubular structure entering the gallbladder must be the cystic duct. Rouviere's sulcus is visible, but the dissection has drifted caudal to that safe plane; the cystic plate is not cleared and only one tubular structure is seen. What should the senior surgeon do now?",
      correct: 'Stop attempting duct identification in the hepatocystic triangle, declare that the critical view is not achievable, return to a safe plane, and perform a bailout such as subtotal cholecystectomy or abort with drainage/HPB help depending on conditions',
      wrong: [
        ['Clip and divide the apparent cystic duct because it enters the gallbladder', 'This is the classic infundibular trap; the common hepatic duct or common bile duct can be pulled into the silhouette.', 'A structure seeming to enter the gallbladder is not the same as a critical view of safety.'],
        ['Dissect deeper and lower until the anatomy becomes obvious', 'Deeper caudal dissection in the wrong plane increases bile duct and vascular injury risk.', 'When the map fails, digging toward the minefield is not navigation.'],
        ['Perform cholangiography only after clipping the suspected duct to control it', 'Clipping the wrong structure before imaging converts uncertainty into injury.', 'Imaging helps only if access is obtained through a safely identified structure.'],
      ],
    },
    {
      id: 51996,
      chapter: 'Anticoagulation Under Fire',
      title: 'The Valve Wants Heparin; The Abdomen Wants a Knife',
      prompt: 'A patient with a mechanical mitral valve on warfarin arrives with perforated diverticulitis, diffuse peritonitis, lactate rising, and INR 4.2. The valve sits in the chart like a tiny brass lawyer demanding anticoagulation forever. The abdomen, less eloquent, is septic. What is the best perioperative plan?',
      correct: 'Give urgent warfarin reversal with four-factor PCC plus IV vitamin K, proceed to operative source control, use mechanical VTE prevention initially, and restart short-acting heparin when surgical hemostasis permits because the mitral valve remains high thrombotic risk',
      wrong: [
        ['Delay surgery until the INR drifts down naturally to avoid valve thrombosis from reversal', 'Uncontrolled intra-abdominal sepsis is immediately life-threatening; waiting sacrifices source control.', 'A clotting risk matters, but pus with shock keeps a faster clock.'],
        ['Operate immediately without reversal because bleeding can be managed intraoperatively', 'An INR above 4 in major contaminated laparotomy creates avoidable hemorrhage and coagulopathy.', 'Emergency operation does not mean ignoring reversible bleeding risk.'],
        ['Reverse warfarin and avoid all anticoagulation for the entire admission', 'A mechanical mitral valve carries high thrombotic risk; anticoagulation should resume once hemostasis is acceptable.', 'The right answer has two phases: survive the operation, then protect the valve.'],
      ],
    },
    {
      id: 51997,
      chapter: 'Endocrine Nerve Traps',
      title: 'The Nerve Looks Innocent, Which Is Exactly Its Trick',
      prompt: "During total thyroidectomy for a right-sided papillary thyroid cancer with a small contralateral low-risk nodule, the right recurrent laryngeal nerve is identified. Near Berry's ligament, the monitor gives one last offended beep and then silence. The nerve is visually continuous. The fellow says, 'It looks fine; the left side will be quick.' Priya's eyebrow files an incident report. What should be done?",
      correct: 'Stop the contralateral thyroidectomy, complete only what is necessary on the affected side if oncologically safe, obtain postoperative laryngeal assessment, and stage the other side if needed after nerve function is known',
      wrong: [
        ['Proceed with the left thyroidectomy because the right nerve is visually intact', 'Visual continuity does not prove function; bilateral recurrent laryngeal nerve injury can cause airway catastrophe.', "The monitor's silence changes the risk of the second side."],
        ["Divide Berry's ligament more widely on the left to speed the remaining operation", "Berry's ligament is precisely the high-risk zone for terminal recurrent laryngeal nerve injury.", 'Do not answer a nerve warning by rushing through the matching danger zone.'],
        ['Perform prophylactic tracheostomy and complete both sides', 'That escalates morbidity to preserve an elective plan; staging usually avoids creating bilateral injury.', 'Airway rescue is not a license to injure the second nerve.'],
      ],
    },
    {
      id: 51998,
      chapter: 'Neck Hematoma Airway Court',
      title: 'The Calm Oxygen Saturation Is Lying',
      prompt: "Four hours after total thyroidectomy, a patient who restarted therapeutic anticoagulation early develops neck pressure, swelling under the incision, muffled voice, agitation, and mild stridor. Oxygen saturation is still 98%, and the junior suggests waiting for anesthesia because 'the numbers look fine.' The neck is behaving like a velvet trapdoor. What is the senior move?",
      correct: 'Treat this as a threatened airway from expanding post-thyroidectomy neck hematoma: call for help, open the wound immediately at bedside if airway compromise is evolving, evacuate clot to decompress the airway, then secure the airway and return to the operating room for hemostasis and anticoagulation correction',
      wrong: [
        ['Wait for CT because oxygen saturation is preserved', 'Oxygen saturation can remain normal until sudden airway collapse; imaging delays decompression of a time-critical neck hematoma.', 'A calm pulse oximeter can be the last polite sentence before disaster.'],
        ['Give more anticoagulation because the swelling might be venous thrombosis', 'The presentation is expanding postoperative hematoma with airway symptoms; anticoagulation worsens the immediate threat.', 'Do not feed the bleeding because the chart contains a clot history.'],
        ['Apply a tight pressure dressing and reassess in 30 minutes', 'External compression does not reliably decompress the airway and can delay definitive hematoma evacuation.', 'The compartment is inside the neck, not in the bandage.'],
      ],
    },
    {
      id: 51999,
      chapter: 'Leaks, Clots, and Treacherous Drains',
      title: 'The Pelvic Drain Has Joined Management',
      prompt: "POD 5 after low anterior resection with diverting ileostomy, a patient with a PE three weeks ago has therapeutic heparin held for epidural removal. The pelvic drain makes only 15 mL/day, smug and useless. The patient is afebrile on steroids, tachycardic, distended, mildly hypoxic, lactate 3.1, CRP rising, and has new pelvic pain. CT abdomen/pelvis with IV contrast only is read as 'postoperative change, no leak.' The junior points at the old PE and asks for a heparin bolus. What is the best next step?",
      correct: 'Treat occult pelvic anastomotic leak as a leading threat: resuscitate, start broad-spectrum antibiotics, urgently obtain leak-directed imaging with rectal contrast if stable or proceed to operative/drainage source control if unstable, and restart short-acting anticoagulation only after bleeding and source-control decisions are secured',
      wrong: [
        ['Give a therapeutic heparin bolus immediately because the recent PE explains tachycardia and hypoxia', 'PE is plausible, but the abdominal sepsis signals and inadequate leak study make source control the dangerous miss.', 'A real clot history does not cancel a leaking pelvis.'],
        ['Accept the CT as negative and continue routine postoperative care', 'IV-only CT can miss low pelvic leaks, especially early; physiology should override a weak negative test.', 'The scan did not ask the anastomosis the right question.'],
        ['Remove the pelvic drain because low output proves it is not useful', 'Low output may reflect malposition or compartmentalized leak, not absence of leak.', 'A quiet drain can be incompetent rather than reassuring.'],
      ],
    },
    {
      id: 52000,
      chapter: 'Retroperitoneal Zones and Coagulopathic Mayhem',
      title: 'The Pelvis Is a Bear Trap With a Medical Degree',
      prompt: "An anticoagulated 78-year-old on apixaban arrives after a high-speed crash with an open-book pelvic fracture, positive FAST, pH 7.18, temperature 34.6 C, fibrinogen 110 mg/dL, and hypotension. In laparotomy you control a splenic bleed, but pressure remains awful. A tense pelvic retroperitoneal hematoma squats in Zone III like a bear trap wearing clogs. A resident reaches for a clamp: 'Should we open it and ligate the internal iliac?' What is the best damage-control plan?",
      correct: 'Do not open the Zone III hematoma; maintain pelvic binder or external stabilization, perform preperitoneal/pelvic packing as indicated, activate balanced massive transfusion with fibrinogen/calcium/temperature correction, reverse factor Xa anticoagulation per institutional protocol, and proceed to IR embolization once temporized',
      wrong: [
        ['Open the hematoma and clamp blindly toward the internal iliac vessels', 'Zone III pelvic hematomas often contain venous plexus and cancellous bone bleeding; opening them can destroy tamponade.', 'The retroperitoneum may be the only pressure dressing the patient has.'],
        ['Close immediately and obtain CT angiography before any pelvic stabilization or coagulopathy correction', 'An unstable patient needs damage-control temporization before diagnostic elegance.', 'The scanner is not a resuscitation bay with magic walls.'],
        ['Give TXA alone and wait for the apixaban effect to wear off', 'TXA is not source control, reversal, fibrinogen replacement, warming, or pelvic stabilization.', 'Coagulopathy has multiple knobs; turning one is not management.'],
      ],
    },
    {
      id: 52001,
      chapter: 'Anatomy Ambush',
      title: 'Artery drama',
      prompt: 'Priya points at a pulsing red vessel in the operating field and says, "Name the danger before the jellybean intern pokes it." What is the biggest immediate concern?',
      correct: 'Arterial bleeding can be rapid and high-pressure, so control and identification matter immediately',
      wrong: [
        ['It is probably decorative anatomy confetti', 'Blood vessels are not confetti, even in a brutal quiz.', 'A pulsing vessel suggests arterial flow.'],
        ['Treat the red item as decorative rather than a priority signal', 'Delay can be dangerous if a vessel is injured.', 'Think bleeding risk first.'],
        ['Ask whether the vessel has a cute nickname', 'Names can wait; safety cannot.', 'Recognize the immediate surgical hazard.'],
      ],
    },
    {
      id: 52002,
      chapter: 'Sterile Goblin Rules',
      title: 'Tiny sleeve betrayal',
      prompt: 'A sterile glove brushes a non-sterile sleeve. Priya raises one eyebrow so hard it needs its own postcode. What should happen next?',
      correct: 'Treat the glove as contaminated and replace it before continuing',
      wrong: [
        ['Wave the glove in the air until it feels innocent again', 'Air-waving does not restore sterility.', 'Contamination needs correction.'],
        ['Keep going because the sleeve looked polite', 'Politeness is not a sterile barrier.', 'Sterile technique is binary here.'],
        ['Ask the patient to vote on the glove', 'This is not a democracy of microbes.', 'Replace contaminated sterile equipment.'],
      ],
    },
    {
      id: 52003,
      chapter: 'Checklist Dungeon',
      title: 'Wrong-side trap',
      prompt: 'Before incision, the team pauses to confirm patient identity, procedure, and surgical site. What disaster is this ritual mainly designed to prevent?',
      correct: 'Wrong-patient, wrong-procedure, or wrong-site surgery',
      wrong: [
        ['The scalpel getting stage fright', 'The checklist is about human-system safety, not cutlery emotions.', 'Confirm identity, procedure, and site.'],
        ['The lights becoming too dramatic', 'Lighting matters, but that is not the core purpose.', 'This pause prevents major identification errors.'],
        ['The surgeon forgetting lunch', 'Lunch is not the safety target.', 'Think preventable surgical never events.'],
      ],
    },
    {
      id: 52004,
      chapter: 'Tissue Respect Tribunal',
      title: 'Traction goblin',
      prompt: 'A structure will not move easily, and the goblin assistant wants to pull harder. What is the safer surgical instinct?',
      correct: 'Stop, improve exposure, identify the structure, and avoid blind force',
      wrong: [
        ['Pull until something gives, then name it afterward', 'That is how important structures get injured.', 'Identify before applying force.'],
        ['Close your eyes for better vibes', 'Surgery is not vibe-based navigation.', 'Use visualization and anatomy.'],
        ['Declare all anatomy optional', 'Anatomy is extremely not optional.', 'Respect tissue planes and uncertainty.'],
      ],
    },
    {
      id: 52005,
      chapter: 'Hemostasis Cave',
      title: 'Oozing swamp',
      prompt: 'The field is slowly filling with blood, making anatomy harder to see. Why does Priya care about hemostasis before charging onward?',
      correct: 'Bleeding obscures structures and can increase risk, so controlling it improves safety and visibility',
      wrong: [
        ['Blood makes the operation look more cinematic', 'Cinema is not the metric.', 'Visibility and patient safety matter.'],
        ['Anatomy is easier when hidden', 'Hidden anatomy is riskier, not easier.', 'Clear fields help precise work.'],
        ['Hemostasis is only for paperwork', 'It is a core operative safety practice.', 'Control bleeding to see and protect structures.'],
      ],
    },
    {
      id: 52006,
      chapter: 'Nerve Noodle Maze',
      title: 'Electric noodle caution',
      prompt: 'A pale cord-like structure might be a nerve. What is the best brutal-quiz answer before cutting anything near it?',
      correct: 'Identify it confidently and protect it, because nerve injury can cause loss of function or sensation',
      wrong: [
        ['Cut first and ask the nerve how it feels later', 'Nerves do not appreciate post-hoc curiosity.', 'Identify critical structures before cutting.'],
        ['Treat every noodle shape as if it belongs in the spaghetti family', 'Operative fields are not pasta bowls.', 'Cord-like structures may be nerves or vessels.'],
        ['Hide it under gauze and pretend anatomy is solved', 'Covering uncertainty does not solve it.', 'Expose and identify safely.'],
      ],
    },
    {
      id: 52007,
      chapter: 'Post-op Goblin Watch',
      title: 'Fever after surgery',
      prompt: 'A patient develops fever after surgery. Priya says, "Do not diagnose by vibes." What is the better first reasoning move?',
      correct: 'Consider timing, symptoms, exam findings, and likely sources before choosing the next step',
      wrong: [
        ['Blame the hospital soup immediately', 'Soup is not a diagnostic framework.', 'Use timing and clinical evidence.'],
        ['Treat fever as one generic condition instead of asking about the pattern', 'Post-op fever has multiple possible causes.', 'Context changes the differential.'],
        ['Treat the thermometer reading as less important than how the patient looks at first glance', 'Fever can be clinically important.', 'Assess rather than dismiss.'],
      ],
    },
    {
      id: 52008,
      chapter: 'Instrument Goblin Audit',
      title: 'Count the shiny things',
      prompt: 'Why do surgical teams count sponges, sharps, and instruments before closing?',
      correct: 'To reduce the risk of leaving a foreign object inside the patient',
      wrong: [
        ['To see whether the scissors formed a union', 'Labor organizing is not the count purpose.', 'The count protects the patient.'],
        ['Because sponges get lonely in groups of odd numbers', 'Cute, but wrong.', 'Counts catch missing items.'],
        ['To make the operation last longer for style points', 'Extra time is not the goal.', 'The count is a safety check.'],
      ],
    },
    {
      id: 52009,
      chapter: 'Consent Volcano',
      title: 'Permission is not garnish',
      prompt: 'Why is informed consent more than just getting a signature before surgery?',
      correct: 'The patient should understand the procedure, major risks, benefits, and alternatives well enough to decide',
      wrong: [
        ['The signature magically explains everything', 'A signature alone does not prove understanding.', 'Consent is a communication process.'],
        ['It lets the team skip patient questions', 'Questions are part of informed decision-making.', 'Understanding matters.'],
        ['It is mainly for making clipboards feel useful', 'Documentation matters, but consent is ethical and clinical too.', 'Focus on patient autonomy.'],
      ],
    },
    {
      id: 52010,
      chapter: 'Anatomy Ambush',
      title: 'Plane of least chaos',
      prompt: 'Priya says, "Find the tissue plane, do not excavate like a caffeinated badger." What does she mean?',
      correct: 'Work along natural anatomical layers where dissection is safer and clearer',
      wrong: [
        ['Dig randomly until the anatomy apologizes', 'Random force increases injury risk.', 'Use natural planes.'],
        ['Treat the most complicated route as automatically the most educational one', 'Mess is not surgical virtue.', 'Cleaner planes protect structures.'],
        ['Dissection planes are only for airplanes', 'Different kind of plane.', 'In surgery, planes are tissue layers.'],
      ],
    },
    {
      id: 52011,
      chapter: 'Hostile Hilum Goblin Trap',
      title: 'Moynihan hump ambush',
      prompt: 'During a hostile cholecystectomy, the artery curling like a smug goblin beneath the gallbladder infundibulum looks large, pulsatile, and medial. The cystic duct is short, inflammation has erased the usual triangle, and the vessel dives back toward the liver. What is the safest senior-level interpretation?',
      correct: 'Suspect a tortuous right hepatic artery or Moynihan hump and avoid clipping until the gallbladder is dissected off the cystic plate enough to prove a true cystic artery',
      wrong: [
        ['Clip it immediately because any vessel entering the gallbladder neck is the cystic artery', 'A right hepatic artery can run very close to the gallbladder neck; clipping it can devascularize the right liver or bile duct.', 'In the hostile hilum, a vessel that looks too large, too medial, or too important probably is.'],
        ['Divide the cystic duct first to create exposure of the artery', 'Dividing an unproven duct in a hostile hilum can convert uncertainty into bile duct injury.', 'Prove anatomy before committing to division.'],
        ['Use blind bipolar coagulation along the infundibulum because arterial identity is irrelevant if hemostasis is achieved', 'Thermal injury near the hepatic artery and common hepatic duct can cause delayed vascular or biliary catastrophe.', 'Hemostasis without anatomy is not safety.'],
      ],
    },
    {
      id: 52012,
      chapter: 'Pelvic Fog Arena',
      title: 'Smirking iliac vein',
      prompt: 'In a low anterior resection with lateral pelvic dissection, brisk dark bleeding starts deep to the ureter and medial to the internal iliac vessels while hypogastric nerve fibers stretch like pale goblin harp strings. Which maneuver best preserves anatomy while controlling the field?',
      correct: 'Apply focused pressure, expose the internal iliac branch point, identify the bleeding middle rectal or lateral ligament vessel, and secure it with clips or suture under direct vision',
      wrong: [
        ['Clamp the entire lateral ligament blindly en masse to stop bleeding quickly', 'En masse clamping risks hypogastric plexus injury, ureteral injury, and uncontrolled venous tearing.', 'In the lateral pelvis, hemostasis is anatomical, not heroic.'],
        ['Skeletonize the hypogastric nerves first while ignoring the bleeding until visualization improves', 'Persistent bleeding distorts planes and encourages traction injury to autonomic nerves.', 'Control the bleeding enough to see before delicate nerve work.'],
        ['Pack the pelvis and proceed with rectal stapling before returning later', 'Deferred control can hide ongoing venous loss and makes later identification harder after swelling and clot.', 'Do not outsource active bleeding to future-you.'],
      ],
    },
    {
      id: 52013,
      chapter: 'Parotid Nerve Maze',
      title: 'False silver thread',
      prompt: 'During parotidectomy, a shiny tubular structure crossing superficial to the posterior belly of digastric bleeds when nicked. A junior calls it the facial nerve trunk because it is pale and cordlike. What is the most precise correction?',
      correct: 'Treat it as likely retromandibular vein or a venous branch until the facial nerve trunk is confirmed at fixed landmarks such as the tragal pointer, tympanomastoid suture, and posterior belly of digastric',
      wrong: [
        ['Treat any pale cord in the parotid as facial nerve before confirming anatomy', 'Venous structures, fascia, and ductal elements can mimic nerve; fixed landmarks are required.', 'The facial nerve does not introduce itself by bleeding.'],
        ['Coagulate across the structure broadly because facial nerve branches tolerate brief bipolar energy', 'Thermal spread can permanently injure facial nerve branches.', 'Nerve-adjacent energy deserves suspicion, not swagger.'],
        ['Follow the bleeding structure distally because the facial nerve is most reliably found by chasing vessels', 'The facial nerve is identified by anatomy and texture, not by pursuing bleeding veins through the gland.', 'Use landmarks, not panic cartography.'],
      ],
    },
    {
      id: 52014,
      chapter: 'Thyroid Voice Dungeon',
      title: 'Superior pole fairy trap',
      prompt: 'In thyroidectomy, Priya hears an absurd tiny goblin bell as the superior pole vessels are placed on traction. The cricothyroid muscle is visible, superior thyroid artery branches fan high, and voice preservation matters. What is the best operative principle?',
      correct: 'Divide superior pole vessels individually close to the thyroid capsule while protecting the external branch of the superior laryngeal nerve near the cricothyroid muscle',
      wrong: [
        ['Take the superior thyroid pedicle high as a single bundle to reduce bleeding', 'High mass ligation increases risk to the external branch of the superior laryngeal nerve.', 'At the superior pole, close-to-capsule dissection protects voice.'],
        ['Avoid all energy use and rely only on traction until the pole avulses free', 'Traction avulsion causes uncontrolled bleeding and may injure the nerve by stretch.', 'Traction is not a personality substitute for anatomy.'],
        ['Identify the recurrent laryngeal nerve first; then the superior pole nerve risk disappears', 'The recurrent and external superior laryngeal nerves are distinct structures with different danger zones.', 'One protected nerve does not magically protect the other.'],
      ],
    },
    {
      id: 52015,
      chapter: 'Uncinate Cave Troll',
      title: 'SMA-side leash',
      prompt: 'During pancreaticoduodenectomy, the uncinate process is being separated from the SMA. A small arterial bleeder appears posterior to the SMV-portal vein confluence, and the tissue tethers directly toward the SMA like a troll leash. What is the most anatomically disciplined response?',
      correct: 'Control the small inferior pancreaticoduodenal or SMA-side branches close to the pancreatic specimen with clips or fine ties while maintaining the SMA adventitial plane',
      wrong: [
        ['Clamp deeply toward the SMA origin to capture the whole bleeding leash', 'Deep clamping risks SMA injury and compromises intestinal perfusion.', 'The uncinate dissection is won branch by branch, not by force.'],
        ['Use broad thermal sealing across the retroportal tissue until the field is dry', 'Thermal spread near the SMA, SMV, and pancreaticoduodenal arcade can injure major vessels.', 'Dry is not good if the price is cooked artery.'],
        ['Pull the uncinate process laterally until the branch avulses and then repair whatever bleeds', 'Avulsion can tear SMA or SMV branches in a confined retroportal field.', 'Do not turn controlled branches into vascular confetti.'],
      ],
    },
    {
      id: 52016,
      chapter: 'Obturator Blue Cave',
      title: 'White cord is not lymphatic spaghetti',
      prompt: 'During pelvic lymphadenectomy, a pale cord runs along the lateral pelvic wall above a thin-walled blue vessel in the obturator fossa. Priya\'s goblin assistant suggests clipping both because "they are probably lymphatics." What is the correct identification strategy?',
      correct: 'Recognize the obturator nerve as the firm pale cord and preserve it; separately control obturator vessels only when clearly identified and necessary',
      wrong: [
        ['Clip the pale cord because lymphatic channels often look white and tubular', 'The obturator nerve is white, firm, and cordlike; clipping it can cause major adductor dysfunction.', 'In the obturator fossa, white cord is nerve until proven otherwise.'],
        ['Sweep everything inferiorly off the external iliac vein with aggressive traction', 'Traction can avulse obturator vessels or injure the obturator nerve at the canal.', 'The blue cave punishes sweeping.'],
        ['Coagulate the blue vessel and pale cord together to prevent lymphocele', 'Combined coagulation risks nerve burn and venous injury; lymphocele prevention does not justify sacrificing named structures.', 'Do not solve a lymph problem by creating a nerve problem.'],
      ],
    },
    {
      id: 52017,
      chapter: 'Source Control Goblin Court',
      title: 'The drain that lied politely',
      prompt: 'Priya\'s goblin registrar presents POD 6 after low anterior resection: rising norepinephrine, lactate 4.8, oliguria, new atrial fibrillation, and CT showing a 9 cm pelvic collection with gas adjacent to the anastomosis. The drain output is only 20 mL of serous sadness. What is the best operative-level judgment?',
      correct: 'Treat this as uncontrolled intra-abdominal sepsis: resuscitate, give broad antimicrobials, and obtain urgent source control by image-guided drainage if feasible or operative washout and diversion if not',
      wrong: [
        ['Escalate antibiotics alone because the drain output is low', 'Low output does not exclude an undrained infected collection; antibiotics without source control often fail in abscess or leak sepsis.', 'When physiology worsens and imaging shows a drainable focus, ask what pus compartment is still uncommanded.'],
        ['Wait 24 hours for repeat CT because the anastomosis might seal itself like a tiny goblin envelope', 'Shock physiology and lactate elevation make delay dangerous when a source is already visible.', 'Septic deterioration turns diagnostic neatness into harm if it postpones control.'],
        ['Remove the drain at bedside to prevent contamination', 'Removing a nonfunctional drain does not control the pelvic abscess and may remove the only partial egress.', 'Do not confuse drain housekeeping with source control.'],
      ],
    },
    {
      id: 52018,
      chapter: 'Bleeding Versus Clotting Dungeon',
      title: 'Mitral valve ogre and fresh anastomosis',
      prompt: 'A patient with a mechanical mitral valve had emergency colectomy 18 hours ago. They now have brisk sanguineous drain output, falling hemoglobin, INR 2.9, and diffuse oozing at re-exploration without a single heroic bleeder. Priya\'s anticoagulation goblin screams for full-dose heparin immediately. What is the best judgment?',
      correct: 'Prioritize surgical hemostasis and reversal or correction of coagulopathy now, then restart anticoagulation with a short-acting, titratable strategy once bleeding is controlled and thrombotic risk is reassessed',
      wrong: [
        ['Start therapeutic LMWH immediately because mechanical mitral valves are always the loudest monster', 'The valve risk is real, but uncontrolled postoperative bleeding can be immediately fatal and LMWH is hard to rapidly titrate or reverse.', 'High thrombotic risk does not erase active hemorrhage; it changes how urgently you restart once hemostasis exists.'],
        ['Permanently stop anticoagulation because the abdomen bled once', 'That ignores the major thromboembolic risk of a mechanical mitral valve.', 'Temporary interruption for bleeding is not abandoning anticoagulation.'],
        ['Give platelets only and leave the INR untouched because platelets are shiny little clot goblins', 'An elevated INR reflects impaired coagulation factor activity; platelets alone may not correct warfarin-associated coagulopathy.', 'Match correction to the defect: platelets, fibrinogen, factors, temperature, calcium, and pH all matter.'],
      ],
    },
    {
      id: 52019,
      chapter: 'Postoperative Collapse Belfry',
      title: 'Tachycardia Priya refuses to pet',
      prompt: 'POD 2 after sleeve gastrectomy: HR 138, RR 30, shoulder pain, mild epigastric tenderness, WBC 3.1, lactate 3.6, and a normal-looking early swallow study that the intern waves like a victory flag. What is the most defensible next move?',
      correct: 'Assume early leak or intra-abdominal catastrophe remains possible despite the swallow study; resuscitate, give broad antimicrobials, obtain urgent CT with IV and oral contrast if stable, and proceed to operative or endoscopic source control if unstable or confirmed',
      wrong: [
        ['Discharge after reassurance because the swallow study is negative', 'Early contrast studies can miss leaks, and the physiology is strongly abnormal.', 'A negative test cannot overrule shocky vital signs and rising lactate.'],
        ['Treat as anxiety until fever appears', 'Severe tachycardia, tachypnea, leukopenia, and lactate elevation are not benign anxiety markers in this setting.', 'Absence of fever is not absence of sepsis, especially early or immunologically blunted sepsis.'],
        ['Give a beta blocker first so the monitor stops screaming at Priya', 'Suppressing compensatory tachycardia without diagnosing the cause can mask deterioration.', 'Do not cosmetically improve the vital sign that is trying to save the patient.'],
      ],
    },
    {
      id: 52020,
      chapter: 'Necrosis Goblin Abattoir',
      title: 'Wound that smelled like bad decisions',
      prompt: 'After groin vascular exposure, a patient develops severe wound pain beyond exam, dusky skin edges, thin gray drainage, hyponatremia, acute kidney injury, and vasopressor need. CT can happen in 90 minutes if the scanner goblin finishes lunch. What should Priya do?',
      correct: 'Proceed to immediate operative exploration and aggressive debridement with broad-spectrum antibiotics and resuscitation; imaging must not delay treatment when necrotizing infection is clinically likely',
      wrong: [
        ['Wait for CT because gas on imaging is required before cutting', 'Gas can be absent early, and waiting for imaging in a toxic patient can cost tissue and life.', 'Necrotizing infection is a clinical emergency, not a radiology scavenger hunt.'],
        ['Open one corner of the incision at bedside and reassess tomorrow', 'Limited bedside drainage is inadequate for suspected deep necrotizing infection with shock.', 'The operation is diagnostic and therapeutic; timid sampling is not debridement.'],
        ['Narrow antibiotics to cefazolin because this began as a surgical-site infection', 'Necrotizing infections may be polymicrobial or toxin mediated and require broad empiric coverage until cultures and operative findings clarify.', 'Initial antibiotics should cover dangerous plausible biology, then narrow later.'],
      ],
    },
    {
      id: 52021,
      chapter: 'Bile Leak Swamp',
      title: 'Golden drain of treachery',
      prompt: 'POD 3 after difficult laparoscopic cholecystectomy: bilious drain output 700 mL/day, bilirubin-rich fluid, fever, RUQ pain, and CT showing a subhepatic collection. MRCP suggests a lateral common hepatic duct injury rather than a cystic duct stump leak. What is the best senior surgical plan?',
      correct: 'Control sepsis and bile with drainage and antibiotics, define the injury with high-quality cholangiography, and involve hepatobiliary expertise early rather than performing blind local re-clipping',
      wrong: [
        ['Return laparoscopically and place more clips on whatever green goblin tube is visible', 'Blind clipping can convert a partial injury into a major ductal disaster or vascular-biliary catastrophe.', 'Bile duct injury repair starts with anatomy, drainage, and the right expertise.'],
        ['Send home with the drain because bile outside the duct is technically leaving the body', 'High-output bile leak with fever and a collection means ongoing contamination and sepsis risk.', 'External drainage is helpful only if infected spaces and the duct problem are controlled.'],
        ['ERCP stent only, without draining the collection or defining the suspected hepatic duct injury', 'ERCP may help selected leaks, but an infected collection still needs drainage and a major duct injury may need specialized reconstruction.', 'Separate biliary decompression from control of infected bile already in the abdomen.'],
      ],
    },
    {
      id: 52022,
      chapter: 'PE Versus Hemorrhage Arena',
      title: 'Clot hydra in the fresh pelvis',
      prompt: 'POD 1 after complex pelvic oncologic resection with raw venous surfaces and fresh bowel anastomosis, the patient develops obstructive shock from saddle PE on echo and CTA. Drains are already sanguineous and fibrinogen is low. Priya must choose before the hydra eats the ICU. What is the best judgment?',
      correct: 'Convene immediate multidisciplinary PE response; support circulation and pursue reperfusion with the least bleeding-catastrophic effective option, such as catheter-directed therapy or surgical embolectomy when available, reserving systemic lysis for arrest or no viable alternative',
      wrong: [
        ['Give full-dose systemic thrombolysis automatically because the PE is massive', 'Massive PE needs reperfusion, but fresh major surgery and active bleeding make systemic lysis exceptionally hazardous if alternatives exist.', 'The question is not reperfuse or not; it is which reperfusion route best balances imminent death against bleeding.'],
        ['Use prophylactic-dose anticoagulation only and hope the clot becomes emotionally mature', 'Prophylactic dosing is inadequate for obstructive shock from PE.', 'Shock from PE is a hemodynamic emergency, not routine VTE prevention.'],
        ['Place an IVC filter and declare the existing saddle PE solved', 'An IVC filter may reduce further emboli in selected patients, but it does not reperfuse the obstructing clot already causing shock.', 'Filters are not treatment for current obstructive physiology.'],
      ],
    },
    {
      id: 52023,
      chapter: 'Rectal Goblin MDT',
      title: 'Threatened CRM is not a mood',
      prompt: 'Priya\'s MRI goblin presents a low rectal adenocarcinoma: lower edge 4 cm from anal verge, cT3c with 6 mm extramural spread, EMVI positive, mesorectal fascia distance 0.5 mm, and a 9 mm irregular internal iliac node. CT shows no distant disease. What is the most defensible MDT move before Priya lets anyone wave a stapler near the pelvis?',
      correct: 'Treat as high-risk locally advanced rectal cancer with total neoadjuvant therapy, include pelvic nodal disease in the radiation plan, restage, then perform high-quality TME with selective lateral pelvic node strategy if suspicious disease persists',
      wrong: [
        ['Proceed directly to low anterior resection because the tumor is technically resectable', 'This ignores the threatened circumferential resection margin, EMVI, and lateral pelvic nodal risk; a fast operation may simply mint an R1 goblin.', 'Threatened CRM is an MDT problem before it is a stapling problem.'],
        ['Do transanal local excision because the lesion is low and Priya owns a heroic headlamp', 'Local excision is oncologically inadequate for cT3c, EMVI-positive disease with suspicious nodes.', 'Local excision belongs to carefully selected early tumors, not bulky mesorectal-risk disease.'],
        ['Perform abdominoperineal resection immediately to guarantee a distal margin', 'APR may ultimately be required, but distal clearance alone does not solve a threatened radial margin or untreated nodal basin.', 'In rectal cancer, the radial margin often matters more than the dramatic perineal exit.'],
      ],
    },
    {
      id: 52024,
      chapter: 'Pancreas Leak Dungeon',
      title: 'Amylase swamp votes grade B',
      prompt: 'After pancreaticoduodenectomy for pancreatic head cancer, Priya\'s drain amylase is 6800 U/L on POD3. On POD8 the patient has fever, leukocytosis, and a 5 cm peripancreatic collection. Interventional radiology places a drain; antibiotics are adjusted to cultures. There is no organ failure, no reoperation, and the drain remains beyond 3 weeks. What is the correct interpretation?',
      correct: 'Clinically relevant postoperative pancreatic fistula, ISGPS grade B, managed with source control, drain management, antibiotics, and nutritional or metabolic support rather than automatic laparotomy',
      wrong: [
        ['Biochemical leak only, because the patient did not need reoperation', 'A biochemical leak has no clinical impact; this case required antibiotics, percutaneous drainage, and prolonged drainage.', 'If management changes, the goblin has left the biochemical cage.'],
        ['ISGPS grade C fistula, because the amylase number is high', 'Grade C is defined by reoperation, organ failure, or fistula-related death, not by amylase height alone.', 'Grade the consequence, not the laboratory scream.'],
        ['Normal postoperative drainage after Whipple, because collections are expected', 'Fever, leukocytosis, high drain amylase, and image-guided drainage are not normal background noise.', 'Expected anatomy distortion is not permission to ignore infected pancreatic juice.'],
      ],
    },
    {
      id: 52025,
      chapter: 'Perihilar Bile Council',
      title: 'Future liver remnant before goblin glory',
      prompt: 'Priya reviews a perihilar cholangiocarcinoma: right ductal confluence involvement with right portal vein involvement, left hepatic artery clear, no distant disease, anticipated left future liver remnant 24%, bilirubin 11 mg/dL, cholangitis controlled. What preoperative strategy best respects oncologic intent and liver failure risk?',
      correct: 'Plan extended right hepatectomy with caudate and extrahepatic bile duct resection only after optimizing the future liver remnant, including selective drainage of the future remnant and portal vein embolization when volumetry or function are inadequate',
      wrong: [
        ['Proceed straight to extended right hepatectomy because R0 resection is the only thing that matters', 'An R0 specimen is not a victory if the remnant liver is too small or poorly drained and the patient develops post-hepatectomy liver failure.', 'In perihilar cholangiocarcinoma, resectability includes what remains, not only what leaves.'],
        ['Drain every obstructed duct bilaterally before surgery to make the bilirubin look pretty', 'Unselective drainage can seed infection and complicate surgery; the key target is usually the future liver remnant.', 'Drain the liver you plan to keep, not every goblin tunnel on the cholangiogram.'],
        ['Declare the case unresectable solely because the right portal vein is involved', 'Ipsilateral portal vein involvement can be compatible with resection in expert HPB centers if contralateral inflow, outflow, and ducts are clear.', 'Vascular involvement is anatomical detail, not an automatic surrender flag.'],
      ],
    },
    {
      id: 52026,
      chapter: 'Thyroid Node Crypt',
      title: 'Do not berry-pick the lateral goblins',
      prompt: 'A 2.4 cm papillary thyroid carcinoma has biopsy-proven metastatic nodes in right level IV and suspicious right central compartment nodes. Vocal cords move normally. Priya asks what operation is oncologically coherent rather than cosmetically adorable.',
      correct: 'Total thyroidectomy with therapeutic compartment-oriented central neck dissection and therapeutic right lateral neck dissection of involved nodal levels, preserving uninvolved critical structures',
      wrong: [
        ['Total thyroidectomy with removal of only the single biopsied level IV node', 'Berry-picking lateral neck disease leaves occult compartmental nodal disease behind and worsens regional control.', 'Metastatic thyroid nodes are managed by compartments, not souvenir plucking.'],
        ['Right thyroid lobectomy only, because papillary thyroid cancer is often indolent', 'Biopsy-proven lateral nodal metastasis changes the risk and operative field; lobectomy alone is undertreatment.', 'Indolent biology does not erase structural N1b disease.'],
        ['Prophylactic bilateral lateral neck dissection because Priya distrusts all neck goblins equally', 'Lateral neck dissection is therapeutic for clinically or biopsy-proven disease; prophylactic bilateral lateral dissection adds morbidity without clear benefit.', 'Treat mapped disease; do not carpet-bomb normal compartments.'],
      ],
    },
    {
      id: 52027,
      chapter: 'Colon Node Furnace',
      title: 'T4b is not a shaving contest',
      prompt: 'During colectomy for a right colon cancer, Priya finds the tumor densely invading a loop of ileum and the abdominal wall. There are no liver or peritoneal metastases. The scrub goblin offers to peel the tumor off the ileum to avoid a bigger specimen. What is the oncologically correct principle?',
      correct: 'Perform en bloc multivisceral resection of adherent involved structures with an intact mesocolic lymphovascular package to maximize R0 resection and adequate nodal staging',
      wrong: [
        ['Sharply peel the tumor off the ileum and abdominal wall, then send margins separately', 'Dissecting through malignant adhesions risks tumor violation and positive margins; inflammatory versus malignant adherence is not safely settled by goblin vibes.', 'For suspected T4b colon cancer, en bloc beats heroic peeling.'],
        ['Abort resection because any adjacent organ involvement means incurable disease', 'Localized T4b invasion can still be curable if an R0 en bloc resection is feasible and there is no distant spread.', 'Locally advanced is not the same as metastatic.'],
        ['Do a limited wedge of colon only because lymph nodes rarely change management', 'Colon cancer requires oncologic vascular ligation and adequate lymphadenectomy for staging and treatment planning.', 'Margins and nodes travel together in a proper colon cancer operation.'],
      ],
    },
    {
      id: 52028,
      chapter: 'Anastomotic Leak Bog',
      title: 'Stable pelvis, controlled violence',
      prompt: 'On POD6 after low anterior resection with diverting loop ileostomy, Priya\'s patient has pelvic pain, CRP rising, low fever, and CT with rectal contrast showing a 4 cm contained presacral abscess adjacent to the anastomosis. Hemodynamics are stable, abdomen is soft, and there is no diffuse peritonitis. What is the best next management frame?',
      correct: 'Treat as a contained anastomotic leak with broad antibiotics, image-guided or transanal drainage when feasible, close reassessment, and reserve reoperation for clinical deterioration or failed source control',
      wrong: [
        ['Immediate laparotomy and takedown of the anastomosis in every case', 'A stable, diverted, contained pelvic leak can often be controlled without dismantling the anastomosis.', 'Leak management is source control scaled to physiology, not automatic maximal drama.'],
        ['Observe without antibiotics because the ileostomy diverts the fecal stream', 'Diversion reduces ongoing contamination but does not sterilize an infected pelvic collection.', 'A diverted goblin abscess is still an abscess.'],
        ['Start adjuvant chemotherapy immediately because oncologic timelines outrank leaks', 'Uncontrolled pelvic sepsis increases morbidity and can make systemic therapy unsafe or impossible.', 'You cannot chemotherapy your way out of bad source control.'],
      ],
    },
    {
      id: 52029,
      chapter: 'Damage Control Goblin Court',
      title: 'Cold belly, hot physiology',
      prompt: 'Priya opens a blunt-trauma abdomen: shattered spleen, bucket-level hemoperitoneum, bowel spillage from two jejunal holes, pH 7.12, temp 34.1 C, INR 2.1, lactate 9, and norepinephrine climbing while the goblin fellow asks for a hand-sewn anastomosis because it would be elegant. What is the best senior move?',
      correct: 'Pack and control hemorrhage, rapidly control contamination with stapled or temporarily closed bowel ends, use temporary abdominal closure, and return after ICU correction of hypothermia, acidosis, and coagulopathy',
      wrong: [
        ['Perform definitive splenectomy, bowel resection, two anastomoses, fascial closure, and a tiny victory bow', 'Definitive reconstruction in severe physiologic exhaustion increases bleeding, leak, abdominal compartment, and death risk.', 'Damage control is chosen because physiology is failing, not because Priya dislikes elegance.'],
        ['Leave the bowel holes open because hemorrhage control is the only priority in damage control', 'Uncontrolled enteric contamination will continue sepsis and peritoneal soilage.', 'Damage control means abbreviated hemorrhage and contamination control, not one-third of an operation.'],
        ['Close the fascia tightly to prevent the abdomen from looking like a goblin suitcase', 'Tight closure after massive resuscitation and packing can precipitate abdominal compartment syndrome.', 'Temporary abdominal closure is a physiologic tool, not cosmetic surrender.'],
      ],
    },
    {
      id: 52030,
      chapter: 'Retroperitoneal Vascular Goblin Map',
      title: 'Zone one is not a pinata',
      prompt: 'A hypotensive patient has a penetrating epigastric wound and a rapidly expanding midline zone 1 retroperitoneal hematoma. The small bowel is eviscerating itself emotionally, the anesthesiologist says the pressure is 70 by rumor, and a junior reaches to scoop clot directly out of the hematoma. What should Priya demand first?',
      correct: 'Obtain proximal vascular control before opening the hematoma, with supraceliac aortic control if needed, then expose the injured great vessel in an organized fashion',
      wrong: [
        ['Evacuate the clot immediately because the bleeding vessel is hiding under the shiny red goblin pudding', 'Opening a contained expanding central hematoma without control can convert tamponade into exsanguination.', 'In central vascular trauma, control comes before curiosity.'],
        ['Ligate the left renal vein first because every zone 1 hematoma is secretly renal', 'Zone 1 includes major aortic, caval, mesenteric, and visceral vascular injuries; blind renal-vein maneuvers are not a strategy.', 'The exposure follows the suspected vessel and the need for proximal control.'],
        ['Pack harder and leave the abdomen because retroperitoneal hematomas are always observed', 'Expanding or pulsatile central hematomas after penetrating trauma require exploration.', 'Observation rules differ by zone, mechanism, and behavior of the hematoma.'],
      ],
    },
    {
      id: 52031,
      chapter: 'Reperfusion Compartment Crypt',
      title: 'Pulses do not absolve the calf',
      prompt: 'After popliteal artery shunt and definitive repair for a mangled knee dislocation with 7 hours of ischemia, the foot has Doppler signals again. Two hours later the calf is tense, pain is brutal despite fentanyl, passive toe stretch makes the patient levitate, CK is rising, and Priya\'s goblin intern says pulses mean the compartments are fine. What is the correct move?',
      correct: 'Perform urgent complete lower-leg fasciotomy of all four compartments; reperfusion and pulses do not exclude acute compartment syndrome',
      wrong: [
        ['Trend compartment pressures for 6 hours because Doppler signals are reassuring', 'Waiting in a high-risk reperfused limb with classic findings risks irreversible muscle and nerve necrosis.', 'Compartment syndrome is time-critical; pulses can remain present until late.'],
        ['Do a small lateral skin nick so the calf can sigh politely', 'Incomplete fasciotomy fails to decompress all threatened compartments.', 'A real lower-leg fasciotomy decompresses the anterior, lateral, superficial posterior, and deep posterior compartments.'],
        ['Treat with mannitol and elevation above the heart until the swelling goblin calms down', 'Elevation above the heart can reduce perfusion pressure, and medical therapy does not replace decompression.', 'The definitive treatment for established acute compartment syndrome is fasciotomy.'],
      ],
    },
    {
      id: 52032,
      chapter: 'Massive Transfusion Furnace',
      title: 'The calcium goblin is not optional',
      prompt: 'A pelvic-fracture trauma patient arrives cold, confused, SBP 78, base deficit -12, fibrinogen low, and the rapid infuser is drinking blood products like a brass goblin tuba. The team has given 5 units RBC, no plasma yet, 3 liters crystalloid, and no calcium check. What is the most defensible resuscitation correction?',
      correct: 'Activate and run a balanced massive transfusion strategy with early plasma and platelets, minimize crystalloid, warm the patient and products, monitor ionized calcium and fibrinogen, and use goal-directed correction as data arrive',
      wrong: [
        ['Continue RBC-only transfusion until the hemoglobin looks heroic', 'RBC-only resuscitation worsens dilutional coagulopathy and does not replace plasma, platelets, or fibrinogen.', 'Hemorrhagic shock resuscitation treats oxygen delivery and hemostasis together.'],
        ['Give more crystalloid first because it is faster and less administratively goblin-shaped', 'Large-volume crystalloid dilutes clotting factors, worsens hypothermia and acidosis, and increases edema.', 'In massive hemorrhage, crystalloid is not a substitute for hemostatic resuscitation.'],
        ['Treat calcium as urgent only after obvious ECG drama appears', 'Citrate from large-volume transfusion can cause hypocalcemia, impaired contractility, hypotension, and coagulopathy.', 'In MTP, calcium is monitored and replaced proactively, not after the monitor writes poetry.'],
      ],
    },
    {
      id: 52033,
      chapter: 'Missed Hollow Viscus Bog',
      title: 'Seatbelt goblin left breadcrumbs',
      prompt: 'A restrained driver with abdominal seatbelt sign has initial CT showing trace free fluid without solid-organ injury and mild jejunal wall thickening. Six hours later: HR 126, increasing focal tenderness, WBC falling to 3.2, lactate 4.1, and the repeat exam makes Priya\'s spleen emotionally resign. The radiology goblin says there is still no free air. What is the best judgment?',
      correct: 'Treat occult bowel or mesenteric injury as highly likely and proceed to urgent diagnostic laparoscopy or laparotomy based on physiology and local expertise',
      wrong: [
        ['Discharge because absence of free air excludes hollow viscus injury', 'Free air is insensitive; bowel and mesenteric injuries can be missed early on CT.', 'CT helps risk-stratify, but worsening physiology and peritonitis outrank a tidy report.'],
        ['Give analgesia only and stop examining because repeated palpation irritates the goblin', 'Serial exams are essential when initial imaging is equivocal and bowel injury remains possible.', 'The trend is the diagnosis trying to become obvious.'],
        ['Wait for oral contrast to leak before operating', 'Requiring contrast extravasation delays source control and misses injuries that do not demonstrate obvious leak.', 'Do not demand the rarest CT sign before acting on a dangerous clinical pattern.'],
      ],
    },
    {
      id: 52034,
      chapter: 'Emergency General Surgery Damage Pit',
      title: 'Feculent peritonitis hates optimism',
      prompt: 'An 82-year-old with perforated sigmoid diverticulitis has feculent peritonitis, pH 7.19, lactate 7.8, temp 35 C, escalating norepinephrine, steroid use, and edematous bowel. Priya\'s goblin optimist proposes primary anastomosis because the stapler sounds confident. What is the best operative frame?',
      correct: 'Prioritize rapid source control with resection of the diseased segment, avoid high-risk anastomosis in profound shock, and choose end colostomy or damage-control discontinuity with planned relook depending on physiology',
      wrong: [
        ['Perform primary anastomosis because avoiding a stoma improves the discharge summary\'s vibes', 'Septic shock, steroids, acidosis, hypothermia, and bowel edema make anastomotic failure much more likely.', 'A beautiful anastomosis in hostile physiology is just a delayed leak wearing perfume.'],
        ['Lavaged-only management is enough because the perforation is old and probably tired', 'Feculent peritonitis from perforated diverticulitis requires reliable source control, not wishful rinsing.', 'Source control means eliminating ongoing contamination.'],
        ['Spend hours mobilizing the splenic flexure and perfecting reconstruction before resuscitation', 'Lengthy definitive reconstruction during physiologic collapse increases mortality risk.', 'In extremis EGS, the clock is a toxin.'],
      ],
    },
    {
      id: 52035,
      chapter: 'Portal Hypertension Goblin Tribunal',
      title: 'Varix that was not a plumbing hobby',
      prompt: 'Priya faces a Child-Pugh B cirrhotic with refractory ascites, platelets 38,000, cavernous-looking collaterals, and a bleeding fundal gastric varix fed by the posterior gastric vein with a large gastrorenal shunt. The endoscopy goblin wants to band it like an esophageal varix. What is the most defensible senior move?',
      correct: 'Recognize isolated gastric variceal bleeding with a spontaneous gastrorenal shunt and coordinate definitive portal-hypertension therapy such as cyanoacrylate or EUS-guided obliteration, BRTO or PARTO when anatomy fits, or TIPS when portal decompression is required and liver reserve allows',
      wrong: [
        ['Band the fundal varix repeatedly because all varices are basically esophageal noodles', 'Fundal gastric varices are large, submucosal, and high-flow; banding is less reliable and can provoke ulcer bleeding.', 'Match therapy to varix anatomy, shunt anatomy, and hepatic reserve.'],
        ['Proceed to emergency devascularization and splenectomy because Priya brought sharp goblin spoons', 'Operation in decompensated portal hypertension with ascites and thrombocytopenia carries high mortality and is not first-line when endovascular or endoscopic options exist.', 'Portal hypertension is usually beaten by physiology and anatomy, not theatrical laparotomy.'],
        ['Give octreotide only and wait for the varix to become emotionally smaller', 'Vasoactive drugs are temporizing; persistent or high-risk gastric variceal bleeding needs local obliteration, decompression, or shunt-directed therapy.', 'Stabilization is not definitive source control.'],
      ],
    },
    {
      id: 52036,
      chapter: 'Liver Resection Inflow Outflow Dungeon',
      title: 'Blue hepatic vein goblin votes no',
      prompt: 'During an anatomic right hepatectomy for a large HCC, Priya controls right portal inflow and sees a clean demarcation, but intraoperative ultrasound shows the tumor abuts the middle hepatic vein and segments 5 and 8 will be removed while segment 4 will remain. The junior wants to take the middle hepatic vein for a prettier margin. What is the correct operative judgment?',
      correct: 'Do not sacrifice the middle hepatic vein casually; confirm what remnant sectors depend on it, preserve or reconstruct critical venous drainage for the future liver remnant, and only trade venous outflow for margin if the remnant will remain adequately drained',
      wrong: [
        ['Take the middle hepatic vein whenever it improves the specimen photo', 'A congested remnant can fail even if inflow and volume look acceptable; venous drainage is part of functional liver remnant quality.', 'The liver you leave must drain, not just exist.'],
        ['Treat portal inflow demarcation as enough even when venous drainage could shift the plane', 'Demarcation after inflow control does not prove adequate hepatic venous outflow after resection.', 'Inflow paints the map; outflow decides whether the remnant survives.'],
        ['Clamp the portal triad longer so venous congestion has time to declare itself politely', 'Prolonged ischemia does not solve outflow anatomy and can injure the remnant.', 'Pringle time is not a diagnostic goblin oracle for hepatic vein dependence.'],
      ],
    },
    {
      id: 52037,
      chapter: 'Transplant Artery Panic Belfry',
      title: 'Doppler goblin stops singing',
      prompt: 'POD 2 after deceased donor liver transplant, Priya sees AST 4200, lactate rising, bile in the drain turning thin and angry, and Doppler shows no hepatic arterial signal with tardus-parvus flow absent rather than merely dampened. The intern asks for aspirin and a repeat scan tomorrow. What should happen?',
      correct: 'Treat early hepatic artery thrombosis as a graft-threatening emergency: urgent confirmatory CTA or angiography without delaying action, immediate transplant-team re-exploration or endovascular or surgical revascularization when feasible, and relisting if salvage fails',
      wrong: [
        ['Start aspirin and wait because hepatic arteries enjoy quiet reflection', 'Early hepatic artery thrombosis can rapidly cause ischemic cholangiopathy, graft necrosis, sepsis, and graft loss.', 'No arterial inflow after transplant is not a watchful-waiting problem.'],
        ['Do ERCP first because bile in the drain proves the biliary anastomosis is the only issue', 'The bile duct depends heavily on hepatic arterial supply after transplant; biliary leak can be the smoke from arterial fire.', 'In transplant, biliary catastrophe often asks you to check the artery.'],
        ['Give more portal inflow because the portal vein is the liver main highway', 'Portal flow cannot replace hepatic arterial supply to the biliary tree and arterialized hepatic microcirculation.', 'Portal patency does not rescue an occluded hepatic artery.'],
      ],
    },
    {
      id: 52038,
      chapter: 'Transplant Bile Duct Crypt',
      title: 'Anastomosis goblin or ischemic hydra',
      prompt: 'Six months after liver transplant, Priya reviews cholestasis, recurrent cholangitis, and MRCP showing multiple intrahepatic strictures with relative sparing of a technically wide duct-to-duct anastomosis. Hepatic artery waveform is weak and CTA shows a severe hepatic artery anastomotic stenosis. What is the senior interpretation?',
      correct: 'Suspect ischemic cholangiopathy from hepatic arterial insufficiency rather than a simple anastomotic stricture; urgently address arterial stenosis and manage biliary sepsis with drainage or endoscopic or percutaneous therapy, recognizing possible graft loss',
      wrong: [
        ['Dilate only the duct-to-duct anastomosis because all post-transplant strictures live there like obedient goblins', 'Diffuse nonanastomotic intrahepatic strictures point toward ischemia, preservation injury, rejection, or recurrent disease rather than isolated anastomotic scarring.', 'Pattern matters: one narrow ring is not the same as a burnt biliary tree.'],
        ['Treat cholestatic labs as evidence that arterial compromise is irrelevant', 'The transplanted biliary tree is highly dependent on hepatic arterial inflow; arterial stenosis can present as biliary disease.', 'Cholestasis after transplant can be vascular until proven otherwise.'],
        ['Schedule elective outpatient ERCP in a month because cholangitis is just bile duct drama', 'Recurrent cholangitis plus arterial compromise risks sepsis, abscess, and progressive graft injury.', 'Infected obstructed bile and poor arterial inflow are a bad duet.'],
      ],
    },
    {
      id: 52039,
      chapter: 'Esophageal Perforation Goblin Court',
      title: 'Neck crepitus was not confetti',
      prompt: 'After difficult endoscopic dilation of a radiation stricture, Priya gets a patient with chest pain, fever, tachycardia, left pleural effusion, mediastinal air, and contrast leak into the pleural space 18 hours later. The GI goblin asks for antibiotics and vibes. What is the best operative-level judgment?',
      correct: 'Treat this as an uncontained thoracic esophageal perforation with sepsis risk: resuscitate, broad antibiotics and antifungals as appropriate, nil per os, urgent drainage of pleura and mediastinum, and defect control by primary repair with buttress, covered stent, diversion, or resection depending on tissue quality and contamination',
      wrong: [
        ['Observe because 18 hours is still early enough for the hole to apologize', 'Uncontained leak into the pleural space with systemic signs needs source control; delay increases mediastinitis and mortality.', 'Contained cervical pinhole and septic thoracic leak are different animals.'],
        ['Place a covered stent only and ignore the pleural contamination', 'A stent may control the lumen, but infected pleural and mediastinal contamination still requires drainage.', 'Seal the hole and drain the swamp.'],
        ['Give oral contrast again tomorrow to see if the goblin trail gets prettier', 'Repeating diagnostic tests while physiology worsens delays therapy.', 'Once the leak and contamination are proven, the next test is source control.'],
      ],
    },
    {
      id: 52040,
      chapter: 'Gastric Ischemia Abattoir',
      title: 'Stomach remnant became a haunted eggplant',
      prompt: 'POD 1 after revisional sleeve-to-Roux surgery with extensive short gastric division and difficult left crus dissection, Priya sees severe epigastric pain, lactate 5.2, pressor need, and endoscopy showing dusky black proximal gastric mucosa with no bleeding on contact. CT shows portal venous gas and perigastric fluid. What is the correct senior move?',
      correct: 'Assume transmural gastric ischemia or necrosis until proven otherwise and proceed to urgent exploration for resection of nonviable stomach, drainage, broad antimicrobials, and reconstruction or diversion based on remaining perfusion and patient physiology',
      wrong: [
        ['Treat with proton pump inhibitor infusion because black mucosa is just an ulcer wearing goblin makeup', 'Diffuse dusky nonbleeding mucosa with shock, lactate, portal venous gas, and perigastric fluid suggests ischemic necrosis, not routine ulcer disease.', 'Endoscopic color plus physiology can be a mandate to operate.'],
        ['Wait for a repeat endoscopy in 48 hours because gastric ischemia is rare', 'Rarity does not protect a dying stomach; delay risks perforation, sepsis, and death.', 'Rare catastrophes still need catastrophic-speed decisions.'],
        ['Place a nasogastric tube and feed distal to it because decompression restores arterial supply', 'Decompression can help distention but does not reverse established transmural ischemia or necrosis.', 'A tube is not a vascular reconstruction spell.'],
      ],
    },
    {
      id: 52041,
      chapter: 'Axillary Goblin Treaty',
      title: 'Two blue nodes and no axillary tantrum',
      prompt: 'Priya has a 63-year-old with cT1cN0 ER-positive invasive ductal carcinoma treated by lumpectomy. Sentinel node biopsy finds 2 of 3 nodes with macrometastases, no gross extranodal extension. She will receive whole-breast irradiation and systemic therapy. The axillary goblin demands a level I-II dissection for "completeness." What is the most defensible management?',
      correct: 'Omit completion axillary lymph node dissection because this matches the low-burden sentinel-node-positive breast-conservation setting where regional control is maintained with breast radiation and systemic therapy',
      wrong: [
        ['Perform completion ALND because any macrometastatic sentinel node mandates it', 'That over-treats selected cT1-2N0 lumpectomy patients with 1-2 positive sentinel nodes and increases lymphedema risk.', 'Ask whether the patient fits the breast-conservation, whole-breast radiation, low-volume axillary disease scenario.'],
        ['Treat removal of positive sentinel nodes as eliminating any need for regional radiation review', 'The evidence for omitting ALND assumes appropriate radiation and systemic therapy, not abandonment of local-regional treatment.', 'De-escalation is a package deal, not a goblin coupon for doing nothing.'],
        ['Convert to mastectomy solely because two sentinel nodes are positive', 'Sentinel node positivity alone does not require mastectomy when breast conservation is otherwise appropriate.', 'Axillary management and breast operation choice are related but not interchangeable.'],
      ],
    },
    {
      id: 52042,
      chapter: 'Margin Goblin Court',
      title: 'Ink is the guillotine',
      prompt: 'After lumpectomy for a 1.4 cm grade 2 invasive ductal carcinoma with a small associated DCIS component, final pathology shows invasive carcinoma 0.7 mm from the anterior margin, DCIS 3 mm from all margins, and no ink on invasive cancer or DCIS. Whole-breast irradiation is planned. Priya taps the specimen map with a cursed crayon. Should she re-excise?',
      correct: 'No re-excision is required solely for a close but ink-negative margin in invasive breast cancer treated with whole-breast irradiation',
      wrong: [
        ['Re-excise until every invasive cancer margin is at least 2 mm', 'For invasive cancer with whole-breast irradiation, the standard negative margin is no ink on tumor, not a mandatory 2 mm clearance.', 'Do not import the DCIS margin target into invasive cancer without context.'],
        ['Re-excise because anterior margins are automatically unreliable goblin doors', 'An anterior close margin may matter if residual breast tissue remains, but close ink-negative disease alone is not an automatic re-excision mandate.', 'Margin decisions combine ink status, anatomy, residual tissue, and planned radiation.'],
        ['Perform mastectomy because any margin under 1 mm predicts certain local failure', 'Close ink-negative margins do not by themselves mandate mastectomy in appropriately selected invasive cancer.', 'The brutal answer is precision, not maximal tissue sacrifice.'],
      ],
    },
    {
      id: 52043,
      chapter: 'Flap Perfusion Crypt',
      title: 'Blue DIEP goblin siren',
      prompt: 'Thirty minutes after free DIEP flap inset for breast reconstruction, the skin paddle becomes swollen and violaceous. The arterial Doppler remains crisp, capillary refill is rapid and dark, scratch bleeding is brisk and dusky, and the venous coupler signal disappears. Priya sees the venous goblin chewing the pedicle. What is the correct move?',
      correct: 'Urgently reopen and explore the pedicle and anastomoses, relieve compression or kinking, evacuate hematoma if present, and revise venous outflow as needed',
      wrong: [
        ['Observe for 6 hours because the arterial Doppler is still loud', 'A good arterial signal does not exclude venous thrombosis or obstruction; delay can lose the flap.', 'Blue, swollen, fast-filling flap plus lost venous signal is venous trouble until proven otherwise.'],
        ['Apply leeches as first-line treatment for a newly congested free flap in the operating room', 'Leeches can temporize selected non-reconstructable venous congestion, but early free-flap compromise requires operative exploration when salvageable.', 'Do not feed the goblins before checking the plumbing.'],
        ['Cool the flap and lower the blood pressure to reduce swelling', 'Hypotension and cold worsen perfusion risk and do not correct venous obstruction.', 'Mechanical or thrombotic outflow failure needs an anatomic solution.'],
      ],
    },
    {
      id: 52044,
      chapter: 'Parathyroid Crisis Furnace',
      title: 'Calcium dragon at 17',
      prompt: 'A 58-year-old arrives confused with vomiting, pancreatitis, creatinine 2.4, calcium 17.2 mg/dL, phosphate low, and PTH 1900 pg/mL. Ultrasound suggests a 3.5 cm inferior parathyroid lesion. Priya tells the calcium goblin to stop licking the ECG. What is the best immediate management frame?',
      correct: 'Begin aggressive IV isotonic saline resuscitation, add rapid temporizing therapy such as calcitonin plus antiresorptive treatment when appropriate, correct electrolytes, monitor closely, and arrange urgent parathyroidectomy once stabilized',
      wrong: [
        ['Take the patient directly to incision before resuscitation because the gland is the source', 'Parathyroidectomy is definitive, but severe hypercalcemia with AKI and encephalopathy needs immediate medical stabilization to reduce perioperative risk.', 'In crisis, cool the metabolic fire while mobilizing the endocrine OR.'],
        ['Give thiazide diuretics to force the kidneys to handle calcium', 'Thiazides can worsen hypercalcemia by increasing renal calcium reabsorption.', 'Not every diuretic is a calcium broom.'],
        ['Wait for outpatient sestamibi confirmation before treating', 'Symptomatic severe hypercalcemia is an emergency; localization refinement must not delay treatment.', 'The patient is in crisis, not auditioning for a tidy clinic algorithm.'],
      ],
    },
    {
      id: 52045,
      chapter: 'Adrenal Storm Kennel',
      title: 'Pheo goblin hates beta first',
      prompt: 'A 42-year-old with episodic headaches, diaphoresis, palpitations, BP 230/120, and a 5 cm adrenal mass has plasma metanephrines more than four times the upper limit of normal. Surgery is planned. The anesthesia goblin wants to start propranolol tonight because the heart rate is ugly. What is the correct preoperative sequence?',
      correct: 'Establish alpha blockade first with volume expansion and BP control, then add beta blockade only after adequate alpha blockade if tachyarrhythmia persists',
      wrong: [
        ['Start beta blockade first because tachycardia is the loudest number', 'Unopposed alpha stimulation can precipitate severe hypertension or cardiovascular collapse in pheochromocytoma.', 'Never muzzle the beta door while the alpha goblin is still armed.'],
        ['Proceed to adrenalectomy without blockade because tumor removal is definitive', 'Manipulation of an unblocked pheochromocytoma can trigger catastrophic catecholamine surges.', 'The safest operation starts days before incision.'],
        ['Use an ACE inhibitor alone and avoid endocrine preparation', 'General antihypertensives may not protect against catecholamine surges during induction and tumor manipulation.', 'This is receptor physiology, not ordinary clinic hypertension.'],
      ],
    },
    {
      id: 52046,
      chapter: 'Retained Item Root-Cause Dungeon',
      title: 'Sponge that beat the checklist',
      prompt: 'After an emergency damage-control laparotomy with shift change, high BMI, multiple teams, and an intentionally packed abdomen later closed in a second operation, radiology finds an unrecognized retained sponge. Counts were documented as correct. Priya convenes the root-cause goblin tribunal. What is the best systems response?',
      correct: 'Perform a nonpunitive root-cause analysis focused on workflow failure points, reconciliation of intentional packing, handoff design, adjunct technology, radiographic policy for high-risk cases, and clear closure accountability',
      wrong: [
        ['Fire the circulating nurse because the count was documented as correct', 'A blame-only response misses predictable system hazards such as emergency conditions, handoffs, packing documentation, and closure transitions.', 'Never-event analysis must explain how defenses failed, not just find a forehead for the sticker.'],
        ['Add a louder final count and otherwise keep the process unchanged', 'A retained item after a documented correct count requires stronger system redesign than repeating the same barrier louder.', 'If the trap beat the count once, ask what independent barrier should have caught it.'],
        ['Stop using intentional packing in damage-control surgery', 'Packing can be lifesaving; the failure is uncontrolled reconciliation and communication, not the concept of packing itself.', 'Do not ban the tool when the tracking system is the goblin hole.'],
      ],
    },
  ]),
  series86: [
    makeSimpleQuestion(6001, 'Series 86', 'Equity Research Dock', 'EPS basics',
      'A company earns $100 million and has 50 million shares outstanding. What is EPS?',
      '$2.00',
      [
        ['$0.50', 'That divides shares by earnings instead of earnings by shares.', 'EPS = net income / shares.'],
        ['$50.00', 'That ignores the million-unit scale.', 'Keep units consistent.'],
        ['$100.00', 'That is total earnings, not earnings per share.', 'Per-share means divide by share count.'],
      ],
      undefined,
      undefined,
      undefined,
      'EPS is a per-share measure, so start with total earnings and divide by the share count. Keep the units aligned before judging whether the dollar amount is reasonable.'),
    makeSimpleQuestion(6002, 'Series 86', 'Valuation Reef', 'P/E multiple',
      'A stock trades at $40 and expected EPS is $2. What is the forward P/E?',
      '20x',
      [
        ['0.05x', 'That is EPS divided by price.', 'P/E = price / earnings per share.'],
        ['2x', 'That misses a factor of ten.', 'Divide 40 by 2.'],
        ['$80', 'P/E is a multiple, not a dollar value.', 'Use x notation for valuation multiples.'],
      ],
      undefined,
      undefined,
      undefined,
      'Forward P/E compares today’s price with expected earnings per share. Divide price by forward EPS and express the result as a multiple, not as dollars.'),
    makeSimpleQuestion(6003, 'Series 86', 'Research Swamp', 'Channel checks',
      'What is the main purpose of channel checks in equity research?',
      'To gather industry or supply-chain evidence that can inform company forecasts',
      [
        ['To guarantee inside information', 'Research must avoid material nonpublic information.', 'Use lawful, mosaic-style evidence.'],
        ['To replace financial statements', 'Channel checks supplement filings; they do not replace them.', 'Combine qualitative checks with financial analysis.'],
        ['To set accounting rules', 'Accounting standards are not set by analysts.', 'Analysts interpret information, they do not write GAAP.'],
      ],
      undefined,
      undefined,
      undefined,
      'Channel checks are about building a lawful mosaic of evidence around demand, pricing, supply, or sentiment. The hint is to supplement the model without crossing into material nonpublic information.'),
    makeSimpleQuestion(6004, 'Series 86', 'Forecast Lagoon', 'Revenue build',
      'Which is a basic bottom-up way to forecast revenue?',
      'Units sold multiplied by average selling price',
      [
        ['Net income divided by beta', 'Beta is a market risk measure, not a revenue driver.', 'Start from operating drivers.'],
        ['Debt minus cash', 'That relates to enterprise value, not revenue.', 'Use business volume and pricing.'],
        ['Share count times dividend yield', 'That relates to equity distributions, not revenue.', 'Revenue comes from sales activity.'],
      ],
      undefined,
      undefined,
      undefined,
      'A bottom-up forecast starts from the business drivers that create sales. For revenue, look for volume times price before moving to margins, valuation, or capital-structure metrics.'),
    ...series86Imported,
  ],
  series87: makeQuestionBank('Career Skills', [
    { id: 6101, chapter: 'Research Desk', title: 'Forward multiple', prompt: 'A stock trades at $36 and expected next-year EPS is $3. What is the forward P/E?', correct: '12x', wrong: [['0.083x', 'That inverts the ratio.', 'Forward P/E is price divided by expected EPS.'], ['33x', 'That overstates the result.', 'Divide 36 by 3 cleanly.'], ['$108', 'That is a dollar amount, not a multiple.', 'P/E is expressed as an x multiple.']] },
    { id: 6102, chapter: 'Coverage Notes', title: 'Catalyst logic', prompt: 'An equity research analyst says a stock could rerate if margins improve faster than the market expects. What is the analyst pointing to?', correct: 'A potential change in valuation if future earnings expectations rise', wrong: [['A guaranteed takeover offer', 'A rerating is not automatically an acquisition story.', 'Think about changing expectations and multiples.'], ['A new accounting standard only', 'Accounting changes can matter, but the statement is about earnings expectations.', 'Margin improvement changes the forecast and possibly the multiple.'], ['A bond default trigger', 'That is a credit event, not the equity thesis described here.', 'Stay with equity valuation logic.']] },
    { id: 6103, chapter: 'Compliance Memo', title: 'Disclosure discipline', prompt: 'Why must a research report clearly disclose conflicts of interest?', correct: 'So readers can evaluate whether the analyst or firm may have incentives that affect objectivity', wrong: [['Because disclosures make the price target automatically correct', 'Disclosure does not validate the thesis.', 'It helps readers judge independence and bias risk.'], ['Because every report must include the analyst’s full model history', 'Model history can be useful, but that is not the core reason for conflict disclosure.', 'The purpose is transparency about incentives and relationships.'], ['Because conflicts of interest are allowed only if hidden carefully', 'Hidden conflicts are the opposite of good practice.', 'The point is to surface possible bias.']] },
    { id: 6104, chapter: 'Research Judgment', title: 'Channel check boundary', prompt: 'What is the safest research instinct when doing channel checks with customers or suppliers?', correct: 'Gather lawful mosaic-style information without soliciting material nonpublic information', wrong: [['Ask directly for unreleased quarterly numbers', 'That creates obvious material nonpublic information risk.', 'Research should avoid MNPI and use lawful information gathering.'], ['Treat internal analysis as complete enough without external stakeholder context', 'External checks can be valid when done properly.', 'The boundary is lawful, non-MNPI information.'], ['Treat rumors as confirmed facts if they fit the thesis', 'That undermines research quality and compliance.', 'Corroborate carefully and stay inside the rules.']] },
    { id: 6105, chapter: 'Model Revision Bay', title: 'Estimate revision', prompt: 'A company reports higher-than-expected revenue, but most of the beat came from a one-time distributor fill while underlying sell-through looked weak. What is the strongest analyst instinct?', correct: 'Be cautious about raising forward estimates until the quality and sustainability of the revenue are clearer', wrong: [['Raise the long-term forecast aggressively because the headline beat was positive', 'Headline upside does not always indicate durable operating strength.', 'Separate recurring demand from one-off channel effects.'], ['Treat one-time effects as making the entire revenue beat uninformative', 'One-time effects matter, but the result still deserves analysis.', 'The question is quality of earnings, not total dismissal.'], ['Cut the price target immediately with no further work', 'The data point may be mixed rather than purely negative.', 'Refine the thesis based on sustainability, not emotional reversal.']] },
    { id: 6106, chapter: 'Accounting Reef', title: 'Working-capital warning', prompt: 'Two companies report the same EPS growth, but one also shows a large rise in receivables relative to sales. Why might that matter to an equity analyst?', correct: 'It may signal weaker cash conversion or more aggressive revenue recognition quality than EPS alone shows', wrong: [['It proves the company committed fraud', 'A warning sign is not automatic proof of fraud.', 'Use receivables growth as a quality-of-earnings clue that needs interpretation.'], ['It is irrelevant because EPS already captures all business quality', 'Per-share earnings do not capture every cash-flow or collection issue.', 'Analysts should check whether reported earnings are converting into cash.'], ['It means the company has no growth prospects', 'Receivables can rise for many reasons.', 'The concern is earnings quality and collection dynamics, not instant collapse.']] },
    { id: 6107, chapter: 'Research Ethics Cove', title: 'Selective access', prompt: 'Management offers an analyst a private meeting and says they can explain “what the market is missing,” but asks the analyst not to share details because they are not public yet. What is the best response?', correct: 'Avoid receiving material nonpublic information and keep the interaction within lawful, public-information boundaries', wrong: [['Accept the information and use it carefully without writing it down', 'Not writing it down does not remove MNPI risk.', 'The issue is receiving or using nonpublic material information at all.'], ['Take the meeting and rely on intuition instead of the details', 'Exposure to MNPI risk can occur even if you later claim not to use it.', 'Set clear boundaries before the conversation.'], ['Refuse all future management meetings forever', 'Management access can be legitimate when handled properly.', 'The boundary is lawful, public, and broadly accessible information.']] },
    { id: 6108, chapter: 'Valuation Lagoon', title: 'Multiple versus DCF judgment', prompt: 'When might an analyst place more weight on a DCF than on near-term trading multiples?', correct: 'When near-term earnings are temporarily distorted and the core value depends more on longer-run cash-generation assumptions', wrong: [['Whenever the company has a stock ticker', 'The valuation method should follow the business context, not the existence of listed shares.', 'Choose the framework that best fits the economics.'], ['Only when comparable companies do not exist anywhere in the market', 'Lack of comps is one case, but not the only reason to lean on DCF.', 'DCF can be useful when timing distortions weaken simple multiple analysis.'], ['Because DCF always gives the highest valuation', 'A method is not better because it is more flattering.', 'Use DCF when it better captures underlying cash-generation logic.']] },
  ]),
  ccep: makeQuestionBank('Career Skills', [
    { id: 6201, chapter: 'Compliance Program Dock', title: 'Reporting line', prompt: 'Why is a direct reporting line from compliance leadership to the board or audit committee valuable?', correct: 'It supports independence and escalation of significant issues without management filtering', wrong: [['It guarantees zero misconduct', 'Reporting structure improves oversight but does not eliminate all misconduct.', 'The value is independence and visibility.'], ['It lets compliance approve every business decision instantly', 'Compliance informs and escalates; it does not automatically run every decision.', 'Think governance and independence.'], ['It replaces the need for investigations', 'Good governance does not eliminate fact-finding.', 'Oversight and investigation are different functions.']] },
    { id: 6202, chapter: 'Hotline Reef', title: 'Anonymous report', prompt: 'An employee makes an anonymous hotline report alleging bribery in a foreign subsidiary. What is the best first compliance move?', correct: 'Triage the allegation, preserve relevant information, and begin a documented investigation process', wrong: [['Wait for the employee to self-identify before treating the concern as reportable', 'Anonymous reports can still raise serious risk and require review.', 'Treat credible allegations through the formal process.'], ['Tell the local manager to warn everyone involved immediately', 'That can compromise evidence and the integrity of the review.', 'Start with controlled triage and preservation.'], ['Close the case if there is no invoice attached', 'Lack of immediate proof does not eliminate the need to assess the allegation.', 'Investigations start with triage, not certainty.']] },
    { id: 6203, chapter: 'Training Cove', title: 'Risk-based training', prompt: 'Why do compliance teams often prefer risk-based training over sending the same training to every employee?', correct: 'Because higher-risk roles need more targeted guidance and examples relevant to their decisions', wrong: [['Because some employees do not need any compliance expectations', 'Everyone has some expectations, even if the depth varies.', 'Risk-based does not mean no training.'], ['Because regulators ban general training', 'General training is not banned.', 'The point is tailoring by risk exposure.'], ['Because targeted training is mainly cheaper to print', 'Cost may vary, but the main reason is effectiveness.', 'Match training depth to role-specific risk.']] },
    { id: 6204, chapter: 'Investigation Lagoon', title: 'Remediation', prompt: 'A compliance investigation confirms a control failure but finds no proven financial loss. What should happen next?', correct: 'The organization should still document root cause, remediate the control gap, and consider any reporting obligations', wrong: [['Do nothing because no money was lost', 'Control failures can create regulatory and conduct risk even without immediate loss.', 'Fix the weakness, not just the outcome.'], ['Destroy the notes to protect confidentiality', 'Records should be handled carefully, not destroyed to avoid accountability.', 'Document findings and remediation appropriately.'], ['Wait for the same issue to happen again before acting', 'Repeat failure is not a prerequisite for remediation.', 'Confirmed weaknesses should be addressed promptly.']] },
    { id: 6205, chapter: 'Governance Channel', title: 'Independence pressure', prompt: 'A business head tells compliance not to escalate a serious issue to the board until after quarter-end because “the facts are not perfect yet.” What is the strongest compliance instinct?', correct: 'Escalate according to governance requirements once the issue is material enough to require oversight, even if some facts are still developing', wrong: [['Wait silently until every detail is proven beyond doubt', 'Board oversight can be required before every factual detail is resolved.', 'Material issues often need timely escalation with clear caveats.'], ['Let the business decide because they own the revenue impact', 'Revenue ownership does not override governance obligations.', 'Compliance independence matters most when pressure is highest.'], ['Send an informal text instead of using the formal escalation path', 'Material issues should follow documented governance channels.', 'Use defensible escalation, not casual side channels.']] },
    { id: 6206, chapter: 'Risk Assessment Shoals', title: 'Third-party risk', prompt: 'A company expands into a new country using local intermediaries who interact with government officials. What should a mature compliance program emphasize before launch?', correct: 'A risk-based third-party diligence and control framework tailored to corruption, payments, and oversight risk', wrong: [['A single generic code-of-conduct email to all vendors', 'Generic messaging alone is weak for high-risk intermediaries.', 'Heightened corruption exposure usually needs targeted diligence and controls.'], ['Immediate termination rights only after the first scandal', 'Reactive tools matter, but the strongest move is front-end risk management.', 'Design controls before the misconduct event.'], ['No extra controls if local management says the intermediaries are trusted', 'Local comfort is not a substitute for program discipline.', 'Trust should be supported by diligence, monitoring, and documentation.']] },
    { id: 6207, chapter: 'Investigation Pier', title: 'Scope discipline', prompt: 'During an internal investigation, the first allegation appears substantiated, but early interviews hint at broader control failures in adjacent teams. What is the best next step?', correct: 'Reassess and expand scope as needed while documenting why the investigation boundaries changed', wrong: [['Keep the scope artificially narrow to finish faster', 'Speed is not the only investigation objective.', 'A defensible investigation responds to evidence, not convenience.'], ['Stop investigating because the original allegation was already proven', 'The first confirmed issue may reveal a wider systemic problem.', 'Investigations should follow credible leads.'], ['Publicly announce conclusions before the expanded review begins', 'Premature conclusions can create fairness and credibility problems.', 'Update scope before overcommitting to a final narrative.']] },
    { id: 6208, chapter: 'Culture Lagoon', title: 'Speak-up signal', prompt: 'A company has excellent written policies and high training completion, but hotline usage is near zero and exit interviews suggest employees fear retaliation. What is the best compliance interpretation?', correct: 'Formal program artifacts look strong, but speak-up culture and trust in reporting channels may be weak', wrong: [['The low hotline volume proves there is almost no misconduct risk', 'Silence can signal fear just as easily as health.', 'A quiet hotline is not automatically a healthy one.'], ['Training completion alone proves the program is effective', 'Completion metrics are useful but incomplete.', 'Program effectiveness also depends on culture, escalation, and response trust.'], ['Retaliation concerns belong only to HR, not compliance', 'Retaliation can directly undermine compliance reporting and issue detection.', 'Culture and controls interact; this is a core compliance concern.']] },
  ]),
  nerc: makeQuestionBank('Career Skills', [
    { id: 6301, chapter: 'Control Room Dock', title: 'Reliability first', prompt: 'In system operations, what is the core purpose of reliability standards?', correct: 'To support secure and dependable operation of the bulk power system', wrong: [['To maximize electricity prices during peak hours', 'Market outcomes are separate from the core reliability purpose.', 'The main goal is dependable system operation.'], ['To let each operator invent their own emergency process', 'Standards exist to create disciplined, shared expectations.', 'Think consistency and grid security.'], ['To replace all operator judgment', 'Standards guide operations but do not eliminate judgment.', 'Reliability work still requires informed decisions.']] },
    { id: 6302, chapter: 'Awareness Reef', title: 'Situational awareness', prompt: 'Why is situational awareness critical for a grid operator during abnormal conditions?', correct: 'Because operators need an accurate picture of system conditions to make timely, reliable decisions', wrong: [['Because alarms are mainly useful for historical archiving', 'Historical records matter, but abnormal conditions require real-time judgment.', 'Situational awareness supports live operational decisions.'], ['Because the operator with the most screens automatically has the best answer', 'More screens do not guarantee understanding.', 'Awareness is about interpretation, not display count.'], ['Because restoration plans never need updating once written', 'Conditions change, and operators must adjust to the actual system state.', 'Use the current picture, not stale assumptions.']] },
    { id: 6303, chapter: 'Emergency Swamp', title: 'Communication discipline', prompt: 'During a reliability event, why is closed-loop communication valuable?', correct: 'It confirms that a directive was heard, understood, and carried out as intended', wrong: [['It slows the room down so much that no one can act', 'Clear confirmation supports, rather than blocks, accurate execution.', 'The goal is accuracy under pressure.'], ['It is only for training simulations, not real events', 'Communication discipline matters even more in live events.', 'Use confirmation especially when stakes are high.'], ['It removes the need to log actions', 'Communication and recordkeeping support each other.', 'Confirm instructions and maintain the operating record.']] },
    { id: 6304, chapter: 'Restoration Lagoon', title: 'Restoration mindset', prompt: 'After a major outage, what is the safest general principle during restoration?', correct: 'Restore methodically using verified system conditions and established plans rather than rushing unsupported actions', wrong: [['Re-energize everything at once to save time', 'Speed without verification can compound instability.', 'Restoration should be controlled and verified.'], ['Treat the pre-outage system model as still reliable without reconciling it to the incident', 'Outage conditions can change the system state materially.', 'Verify actual conditions before acting.'], ['Let each station improvise independently with no coordination', 'Major restoration requires coordinated action.', 'Use plans, communication, and confirmed status.']] },
    { id: 6305, chapter: 'Contingency Reach', title: 'N-1 thinking', prompt: 'Why do operators care so much about whether the system can withstand the loss of a single critical element?', correct: 'Because secure operation depends on maintaining reliability even after a credible contingency occurs', wrong: [['Because one outage event is always harmless by definition', 'A single element outage can trigger wider problems if the system is not prepared.', 'Contingency analysis is about resilience after a plausible failure.'], ['Because contingency studies are mainly an accounting exercise', 'This is an operational reliability concept, not a bookkeeping one.', 'Operators use contingency logic to avoid cascading risk.'], ['Because once the current system is stable, future element loss no longer matters', 'Present stability does not eliminate next-event risk.', 'Reliable operations require thinking one step ahead.']] },
    { id: 6306, chapter: 'Alarm Bank', title: 'Alarm management', prompt: 'A control room is flooded with alarms during a fast-moving event. What is the greatest operational risk if alarm management is poor?', correct: 'Operators may miss the few most critical signals and lose decision quality during the event', wrong: [['Too many alarms automatically improve visibility because nothing is hidden', 'Signal overload can reduce clarity rather than improve it.', 'More alarms are not helpful if priority is unclear.'], ['The main problem is that the event log becomes too colorful', 'Display aesthetics are not the issue.', 'The core risk is degraded situational awareness.'], ['Alarm overload matters only after the event ends', 'The danger is highest during the live event when prioritization matters most.', 'Poor alarm handling can distort immediate operational judgment.']] },
    { id: 6307, chapter: 'Transfer Path Cove', title: 'Operating margin judgment', prompt: 'A system is operating near transfer limits during high demand. Why is it dangerous to treat the current state as acceptable just because nothing has failed yet?', correct: 'Because limited margin leaves less ability to absorb the next disturbance without violating reliable operating criteria', wrong: [['Because operators should always curtail load whenever demand is high', 'High demand alone does not require that response.', 'The concern is shrinking reliability margin, not demand by itself.'], ['Because current flows do not matter until after a line trips', 'Flows and limits matter precisely because they shape post-contingency risk.', 'Do not wait for failure to care about margin.'], ['Because transfer limits are mainly theoretical and can usually be ignored briefly', 'Treating limits casually can create real system risk.', 'Operating margin exists for a reason: contingency resilience.']] },
    { id: 6308, chapter: 'Blackstart Shelf', title: 'Plan versus improvisation', prompt: 'Why do restoration and blackstart procedures put so much weight on predefined sequencing and verification?', correct: 'Because restoration actions can interact in complex ways, so disciplined sequencing reduces the chance of reintroducing instability', wrong: [['Because operators are not allowed to think during restoration', 'Judgment still matters, but it operates within a disciplined framework.', 'Plans support judgment; they do not eliminate it.'], ['Because restoration success depends mainly on speaking confidently', 'Confidence does not substitute for verified conditions and sequence control.', 'The system needs coordinated, technically sound steps.'], ['Because the grid always returns exactly to normal if any generation is started first', 'Restoration is not that simple.', 'Sequence and verification matter because the system is fragile after major disturbance.']] },
  ]),
  patentBar: makeQuestionBank('Career Skills', [
    { id: 6401, chapter: 'Patentability Dock', title: 'Novelty instinct', prompt: 'What is the core novelty question in patentability analysis?', correct: 'Whether a single prior-art reference already discloses every element of the claimed invention', wrong: [['Whether the invention seems expensive to build', 'Commercial cost does not define novelty.', 'Novelty is about what prior art already discloses.'], ['Whether two inventors worked in the same city', 'Geography alone is not the core novelty test.', 'Stay with the content of the prior art.'], ['Whether the claim is written in very technical language', 'Technical wording does not make an old invention novel.', 'Ask what the prior art already teaches.']] },
    { id: 6402, chapter: 'Prosecution Reef', title: 'Claim drafting purpose', prompt: 'Why does precise claim language matter so much in patent prosecution?', correct: 'Because the claims define the legal boundaries of what protection is being sought', wrong: [['Because the abstract is the only legally important part of the application', 'The abstract is not the sole boundary-setting section.', 'Claims are the core legal definition.'], ['Because broad wording automatically guarantees allowance', 'Overly broad claims can trigger rejections.', 'Precision matters more than sounding expansive.'], ['Because claim wording matters only after litigation starts', 'Claim language matters from drafting through prosecution and beyond.', 'The boundary-setting function begins immediately.']] },
    { id: 6403, chapter: 'Office Action Cove', title: 'Applicant response', prompt: 'An examiner rejects a claim over prior art. What is a typical applicant response path?', correct: 'Argue why the rejection is incorrect, amend the claims, or do both', wrong: [['Treat the rejection as procedural noise rather than a substantive examination issue', 'Unanswered rejections do not move prosecution forward safely.', 'Applicants usually respond with argument, amendment, or both.'], ['File a trademark application instead', 'Trademark is a different regime.', 'Stay inside patent prosecution procedure.'], ['Call the examiner and ask for a pass with no record', 'Examiner interaction can be useful, but prosecution still depends on proper record-based response.', 'Maintain a defensible prosecution record.']] },
    { id: 6404, chapter: 'Deadline Lagoon', title: 'Procedural discipline', prompt: 'Why is deadline tracking so important in patent practice?', correct: 'Because missed procedural deadlines can forfeit rights or require costly recovery steps', wrong: [['Because deadlines exist only for billing purposes', 'Billing is not the main reason deadlines matter.', 'Patent rights depend heavily on procedural timing.'], ['Because extensions are always free and automatic', 'Some remedies are limited, costly, or unavailable.', 'Do not rely on cleanup when you can avoid the miss.'], ['Because substance never matters if the calendar is perfect', 'Substance still matters, but timing failures can be fatal.', 'Both legal analysis and procedure matter.']] },
    { id: 6405, chapter: 'Prior Art Channel', title: 'Single reference versus combination', prompt: 'Why does it matter whether every claim element is found in one reference versus spread across several references?', correct: 'Because a single-reference disclosure raises a different patentability problem than a rejection built from combining teachings', wrong: [['Because only one-reference issues can ever be overcome', 'Both kinds of rejections may be argued or amended around.', 'The point is that the legal theory changes when elements are combined.'], ['Because multiple references automatically make the invention patentable', 'A combination can still challenge patentability.', 'Do not assume that spreading elements across references ends the problem.'], ['Because the number of references affects filing fees more than substance', 'The question is about patentability analysis, not fee arithmetic.', 'Pay attention to the rejection theory, not just the citation count.']] },
    { id: 6406, chapter: 'Specification Reef', title: 'Support problem', prompt: 'An inventor wants to claim a broad genus, but the specification only gives a few narrow examples and little guidance beyond them. What is the main prosecution risk?', correct: 'The application may not adequately support the full breadth of the claims being sought', wrong: [['The application automatically becomes a trademark filing', 'That is a different legal regime.', 'The issue here is support for the claimed scope.'], ['Broad claims always become valid if the examples work', 'Working examples help, but they do not necessarily support every broader embodiment.', 'Claim breadth should match what the application teaches.'], ['The only risk is that the abstract is too short', 'Abstract format is not the main issue described.', 'The concern is whether the disclosure justifies the reach of the claim.']] },
    { id: 6407, chapter: 'Response Tactics Cove', title: 'Amendment tradeoff', prompt: 'Why should a patent practitioner be careful when narrowing claims to overcome prior art?', correct: 'Because amendments may help secure allowance but can also reduce future claim scope and flexibility', wrong: [['Because amendments are never allowed after filing', 'Amendments are a normal part of prosecution.', 'The real tradeoff is between allowance and retained scope.'], ['Because narrower claims are always stronger in every sense', 'Narrower claims may be easier to allow, but they protect less territory.', 'Allowance and scope are related but not identical goals.'], ['Because any amendment automatically invalidates the application', 'Applications are often prosecuted through amendment.', 'The caution is strategic, not existential.']] },
    { id: 6408, chapter: 'Procedure Lagoon', title: 'Interview judgment', prompt: 'When can an examiner interview be strategically useful during prosecution?', correct: 'When it helps clarify the examiner’s reasoning, test possible amendments, or narrow the live issues more efficiently', wrong: [['Only after the patent has already issued', 'Interviews are a prosecution-stage tool, not just a post-issuance event.', 'They can help while the application is still being examined.'], ['Whenever the applicant wants to avoid creating any written record at all', 'Interviews do not eliminate the need for a proper record.', 'Use them to clarify issues, not to escape procedure.'], ['Never, because written argument always makes oral discussion unnecessary', 'Written responses are essential, but discussion can still improve understanding and efficiency.', 'Interviews can complement formal prosecution.']] },
  ]),
  crcm: makeQuestionBank('Career Skills', [
    { id: 6501, chapter: 'Banking Rules Dock', title: 'Best next action', prompt: 'A new deposit product is being designed and the business asks compliance for sign-off. What is the strongest first compliance move?', correct: 'Map the product features to the applicable regulatory requirements before advising on approval or controls', wrong: [['Approve it if the product is similar to a competitor offering', 'Competitor behavior is not a substitute for requirement analysis.', 'Start with the rule set and product facts.'], ['Wait for the first customer complaint before reviewing it', 'Reactive review is too late for product compliance risk.', 'Front-end mapping is the safer move.'], ['Focus only on marketing copy before understanding the product mechanics', 'Marketing matters, but product structure can drive which rules apply.', 'Classify the product and obligations first.']] },
    { id: 6502, chapter: 'Scenario Reef', title: 'Rule interaction', prompt: 'Why are CRCM-style questions often harder than simple rule memorization?', correct: 'Because the correct answer may depend on identifying which requirements apply and which do not in a multi-factor scenario', wrong: [['Because every question is mostly arithmetic', 'Some compliance work has numbers, but the challenge is usually applicability and judgment.', 'Focus on matching facts to the right rule set.'], ['Because regulators prefer trick wording over substance', 'Wording can be difficult, but the real issue is analytical application.', 'The exam tests disciplined scenario reading.'], ['Because no regulations ever overlap in practice', 'Overlap is common in real compliance work.', 'You often need to sort primary from secondary requirements.']] },
    { id: 6503, chapter: 'Escalation Cove', title: 'Issue rating', prompt: 'A monitoring review finds a control gap that affected a small number of accounts but could scale across the business if unaddressed. What should compliance care about most?', correct: 'Both current impact and the potential for broader systemic risk', wrong: [['Only the small number of known cases', 'Known count matters, but systemic potential can make an issue more serious.', 'Assess present harm and future exposure.'], ['Only whether the business unit agrees it is important', 'Business input helps, but issue severity needs independent judgment.', 'Severity should not depend only on business comfort.'], ['Only whether a regulator has already asked about it', 'Regulator attention matters, but unasked risk can still be material.', 'Do not outsource issue judgment to timing.']] },
    { id: 6504, chapter: 'Testing Lagoon', title: 'Monitoring versus audit', prompt: 'What is the clearest distinction between compliance monitoring and internal audit?', correct: 'Monitoring is an ongoing compliance oversight activity, while audit provides more independent assurance on controls', wrong: [['Monitoring and audit are interchangeable names for the same thing', 'They can coordinate, but they are not identical functions.', 'Independence and scope differ.'], ['Monitoring should never review controls already tested by audit', 'Overlap may occur, but the functions serve different purposes.', 'The key distinction is type of oversight and assurance.'], ['Audit is mainly for drafting procedures while monitoring is for annual reporting', 'That reverses and oversimplifies both roles.', 'Think operational oversight versus independent assurance.']] },
    { id: 6505, chapter: 'Complaint Channel', title: 'Complaint signal', prompt: 'Why do consumer complaints matter so much in bank compliance programs?', correct: 'They can reveal control failures, unfair treatment patterns, or product risks before other monitoring catches them', wrong: [['They matter only when the volume is large enough for media attention', 'A small number of complaints can still reveal a serious issue.', 'Look at pattern, severity, and root cause.'], ['They replace the need for other compliance testing', 'Complaints are one signal, not the entire program.', 'Use them alongside monitoring, QA, and risk assessment.'], ['They are mainly a customer service issue with no regulatory value', 'Complaint handling can have direct compliance significance.', 'Customer harm often carries regulatory relevance.']] },
    { id: 6506, chapter: 'Advisory Reach', title: 'Business pressure', prompt: 'A senior executive says compliance is being “too conservative” and asks for a fast verbal answer on a complex issue with no written analysis. What is the strongest instinct?', correct: 'Provide advice through a documented process proportional to the risk instead of giving an unsupported off-the-cuff answer', wrong: [['Give the verbal approval to preserve the relationship', 'Relationship management does not justify weak compliance process.', 'High-risk issues need defensible analysis.'], ['Refuse to discuss the issue at all', 'Compliance should still engage constructively.', 'The better move is disciplined advice, not total withdrawal.'], ['Escalate every disagreement directly to the board immediately', 'Escalation should be proportionate.', 'Start with a documented advisory process unless governance requires more.']] },
    { id: 6507, chapter: 'Change Control Shoals', title: 'Reg change management', prompt: 'A regulation changes, but the affected process spans product, operations, training, and systems teams. What is the strongest compliance response?', correct: 'Use structured change management to identify impacted areas, assign owners, and verify implementation across functions', wrong: [['Send the new rule to the business and assume they will handle it', 'Passive distribution is not strong implementation management.', 'Cross-functional impact needs ownership and verification.'], ['Wait until the effective date passes to see what breaks', 'That creates avoidable compliance risk.', 'Prepare implementation before the rule is live.'], ['Rewrite the policy only and treat the project as complete', 'Policy updates alone do not change systems or behavior.', 'Translate rules into process and control changes.']] },
    { id: 6508, chapter: 'Governance Lagoon', title: 'Residual risk', prompt: 'After remediation, management says the issue is “closed.” What should compliance still ask?', correct: 'Whether the root cause was actually addressed and what residual risk remains after the fix', wrong: [['Whether the issue wording sounded strong enough in the memo', 'Language matters less than whether the control gap is really fixed.', 'Closure requires substance, not just documentation.'], ['Whether the remediation was cheap', 'Cost matters, but effectiveness matters more.', 'The key question is whether the fix reduced the risk adequately.'], ['Whether the regulator has complimented the company yet', 'External praise is not the closure standard.', 'Assess root cause resolution and residual exposure.']] },
  ]),
  aigp: makeQuestionBank('Career Skills', [
    { id: 6601, chapter: 'Governance Dock', title: 'Accountability', prompt: 'A company deploys an AI system that affects hiring decisions. What governance principle matters most before launch?', correct: 'Clear accountability for how the system is used, monitored, and challenged when it affects people', wrong: [['Let the vendor own all accountability since they built the model', 'Vendor support does not eliminate internal accountability for deployment decisions.', 'The deploying organization still needs governance ownership.'], ['Treat high accuracy as sufficient governance even without drift, fairness, or escalation controls', 'Performance matters, but governance also covers oversight, challenge, and impact.', 'Do not collapse governance into one metric.'], ['Avoid documenting roles so teams stay flexible', 'Undefined ownership weakens governance.', 'High-impact systems need clear responsibility.']] },
    { id: 6602, chapter: 'Risk Reef', title: 'High-risk use case', prompt: 'Why might the same AI model require different governance controls in two different business uses?', correct: 'Because the context of use changes the level of harm, sensitivity, and oversight needed', wrong: [['Because governance depends only on model size', 'Model size is not the sole risk driver.', 'Use context and impact to set control intensity.'], ['Because one department may simply prefer more paperwork', 'Controls should be risk-based, not arbitrary.', 'The governing factor is impact and exposure.'], ['Because once a model is approved anywhere, it is safe everywhere', 'A model can be acceptable in one context and risky in another.', 'Evaluate use-case-specific risk.']] },
    { id: 6603, chapter: 'Data Cove', title: 'Privacy tradeoff', prompt: 'A team wants to improve model performance by feeding in more customer data than originally planned. What is the strongest governance question?', correct: 'Whether the additional data use is necessary, justified, and consistent with privacy and purpose limitations', wrong: [['Whether the model would look more advanced in the demo', 'Optics do not answer governance concerns.', 'Ask whether the extra data use is justified and allowed.'], ['Whether storage is cheap enough to keep everything forever', 'Cheap storage does not make broad data use appropriate.', 'Governance asks what is necessary and permitted.'], ['Whether legal can sign later after launch', 'Retrospective cleanup is weak governance.', 'Review purpose and data boundaries before expanding use.']] },
    { id: 6604, chapter: 'Human Oversight Lagoon', title: 'Human in the loop', prompt: 'When is “human oversight” weak rather than strong?', correct: 'When the human reviewer cannot meaningfully understand, challenge, or override the AI output in practice', wrong: [['When the reviewer works quickly but still has real authority and context', 'Speed alone does not make oversight fake.', 'The issue is whether the human can exercise meaningful judgment.'], ['When the AI output is presented alongside supporting evidence', 'Supporting evidence can strengthen oversight.', 'Weak oversight happens when humans are nominal but powerless.'], ['When the system is documented in a policy', 'Documentation alone does not define the quality of oversight.', 'A real reviewer needs authority and usable information.']] },
    { id: 6605, chapter: 'Control Design Bay', title: 'Monitoring drift', prompt: 'Why should AI governance continue after launch instead of ending at approval?', correct: 'Because model behavior, inputs, users, and harms can change over time, requiring ongoing monitoring and response', wrong: [['Because post-launch governance is mostly ceremonial', 'Live systems can create new risks after deployment.', 'Monitoring matters because conditions change.'], ['Because approved models never need any challenge once documentation is filed', 'Approval is not the end of risk management.', 'Operational monitoring is part of responsible use.'], ['Because initial validation proves the model will behave the same way forever', 'Validation is a point-in-time check; inputs, users, policies, and real-world behavior can drift after launch.', 'The real issue is changing performance and impact.']] },
    { id: 6606, chapter: 'Third-Party Shoals', title: 'Vendor governance', prompt: 'A vendor says its AI system is “fully compliant” and refuses to explain how outputs are evaluated. What is the best governance concern?', correct: 'The organization may lack enough transparency and evidence to assess whether the tool is suitable for its use case', wrong: [['The only issue is whether the vendor sounds confident', 'Confidence is not evidence.', 'Users need sufficient information to evaluate suitability and risk.'], ['Vendor tools do not need governance if they are widely used', 'Popularity is not a substitute for assessment.', 'Third-party AI still requires internal diligence.'], ['The system must be banned solely because it uses AI', 'The problem is lack of assessability, not the mere presence of AI.', 'Focus on evidence, suitability, and control.']] },
    { id: 6607, chapter: 'Incident Channel', title: 'Harm response', prompt: 'A deployed AI tool begins producing biased recommendations against a protected group. What is the strongest first governance response?', correct: 'Contain the issue, assess the impact, and trigger documented incident and remediation processes', wrong: [['Leave it running while the team writes a perfect retrospective', 'Containment should not wait for polished analysis.', 'Reduce harm first, then investigate fully.'], ['Delete the logs to reduce liability', 'Destroying evidence undermines accountability and remediation.', 'Preserve evidence and respond through process.'], ['Rely on user caution as the main control for model bias', 'User caution alone may not address system-level harm.', 'Treat it as a real incident requiring action.']] },
    { id: 6608, chapter: 'Strategy Lagoon', title: 'Policy versus practice', prompt: 'A company publishes a strong AI ethics statement but has no inventory of where AI is actually used. What is the clearest governance weakness?', correct: 'The organization lacks operational visibility, making it hard to apply policy to real systems and risks', wrong: [['The ethics statement itself is invalid because it is public', 'Public principles can be useful.', 'The weakness is missing operational implementation.'], ['Inventory matters only for model developers, not business owners', 'Business ownership is part of operational governance.', 'You cannot govern what you cannot identify.'], ['No weakness exists if employees mean well', 'Intent is not a control framework.', 'Governance needs actual system visibility and accountability.']] },
  ]),
  apiInspectors: makeQuestionBank('Career Skills', [
    { id: 6701, chapter: 'Code Books Dock', title: 'Open-book reality', prompt: 'Why are API inspector exams often difficult even though they are open-book?', correct: 'Because success depends on quickly finding and applying the right code provisions under time pressure', wrong: [['Because all answers are hidden and cannot be looked up', 'The references are available, but navigation and judgment are demanding.', 'Open-book does not mean easy-book.'], ['Because memorization becomes completely unnecessary', 'You still need enough familiarity to navigate the references efficiently.', 'Lookup speed depends on conceptual fluency.'], ['Because candidates are graded on handwriting quality', 'The challenge is technical application, not penmanship.', 'The real difficulty is targeted code use.']] },
    { id: 6702, chapter: 'Pressure Vessel Reef', title: 'Fitness instinct', prompt: 'An inspector finds metal loss in service. What is the strongest first technical instinct?', correct: 'Determine whether the loss threatens continued safe service based on the applicable code and assessment criteria', wrong: [['Replace the equipment immediately without assessment', 'Immediate replacement is not always required.', 'Start by evaluating the condition against the governing criteria.'], ['Treat missing encryption as theoretical until data exposure is confirmed', 'Visible damage can matter before failure occurs.', 'Inspection aims to act before loss of containment.'], ['Judge severity only by how ugly the corrosion looks', 'Appearance alone is not a sufficient assessment method.', 'Use measured condition and applicable criteria.']] },
    { id: 6703, chapter: 'Piping Cove', title: 'Repair versus rerate', prompt: 'Why does it matter whether a degraded component is repaired, altered, or rerated?', correct: 'Because the classification can change which requirements, approvals, and evaluations apply', wrong: [['Because those words are mostly interchangeable in inspection practice', 'The distinctions can carry procedural and technical consequences.', 'Classification affects the path forward.'], ['Because rerating always avoids the need for engineering review', 'Rerating can require significant technical review.', 'Do not assume it is the easy route.'], ['Because repair classification matters only for billing', 'The main issue is technical and code compliance, not invoicing.', 'Terminology drives requirements.']] },
    { id: 6704, chapter: 'Tank Lagoon', title: 'Out-of-service inspection', prompt: 'Why might an internal or out-of-service inspection still be necessary even when external data look acceptable?', correct: 'Because some damage mechanisms or condition details cannot be reliably assessed from outside alone', wrong: [['Because internal inspections are always required on the shortest possible interval', 'Intervals are not simply “as often as possible.”', 'Need depends on condition, mechanism, and code criteria.'], ['Because external inspection has no value at all', 'External inspection is valuable but not always sufficient.', 'Use the method that fits the damage risk.'], ['Because shutting equipment down is usually cheaper than monitoring it online', 'Shutdown cost is usually substantial.', 'The real question is condition visibility and risk.']] },
    { id: 6705, chapter: 'Corrosion Bay', title: 'Rate versus snapshot', prompt: 'Why is corrosion rate often more informative than a single thickness reading?', correct: 'Because remaining life and inspection planning depend on how fast the condition is changing, not just where it is today', wrong: [['Because the latest thickness reading is irrelevant once rate is known', 'Current condition still matters.', 'Use both present thickness and the rate of change.'], ['Because corrosion rate automatically predicts the exact failure date', 'Rates support planning but do not remove uncertainty.', 'Use rate as a decision aid, not a prophecy.'], ['Because a single reading is always wrong', 'A single reading can be accurate but incomplete.', 'The limitation is lack of trend, not guaranteed error.']] },
    { id: 6706, chapter: 'Welding Shoals', title: 'Procedure discipline', prompt: 'Why do inspectors care so much about approved procedures and qualifications during repairs?', correct: 'Because repair quality depends not just on intent but on using controlled methods and qualified execution', wrong: [['Because procedure paperwork replaces the need to inspect the repair', 'Documentation supports but does not replace inspection.', 'Process control and verification both matter.'], ['Because any experienced welder can safely improvise in code service', 'Experience is valuable, but controlled repair still matters.', 'High-consequence equipment needs qualified methods.'], ['Because qualifications matter only for new construction, not in-service work', 'Repair work can be just as critical.', 'Do not relax control because the asset is already in service.']] },
    { id: 6707, chapter: 'Reference Shelf', title: 'Code conflict instinct', prompt: 'A candidate finds two reference passages that seem to point in different directions. What is the strongest exam instinct?', correct: 'Pause and verify which code, edition, scope, and context actually govern the question before choosing an answer', wrong: [['The midpoint between the two apparent answers', 'Compromise is not a code-interpretation method.', 'Resolve the governing reference first.'], ['The stricter-sounding passage even if it is not controlling', 'Stricter is not always the applicable rule.', 'Applicability matters more than tone.'], ['Field experience treated as stronger than the governing reference', 'Experience helps, but the exam tests code-based judgment.', 'Anchor the answer in the governing document context.']] },
    { id: 6708, chapter: 'Inspection Lagoon', title: 'Practical judgment', prompt: 'What does good API-style inspection judgment usually combine?', correct: 'Measured condition, damage mechanism understanding, code requirements, and documented engineering logic', wrong: [['Only the most conservative possible answer in every case', 'Conservatism matters, but unsupported overreaction is not the goal.', 'Judgment should be technically justified.'], ['Only the inspector’s intuition from past jobs', 'Experience helps, but decisions need disciplined support.', 'Combine field sense with code and evidence.'], ['Only the asset owner’s production preference', 'Operations pressure cannot replace integrity assessment.', 'Inspection decisions must remain technically defensible.']] },
    { id: 6709, chapter: 'Thickness Math', title: 'Average corrosion rate', prompt: 'A pipe location measured 0.480 in. thick six years ago and 0.390 in. thick today. What is the average corrosion rate?', correct: '0.015 in. per year', wrong: [['0.090 in. per year', 'That is the total metal loss, not the annual rate.', 'Divide loss by years.'], ['0.0065 in. per year', 'That divides the current thickness by time rather than the metal loss.', 'Use old minus current thickness.'], ['0.030 in. per year', 'That overstates the rate for the six-year interval.', '0.090 divided by 6.']] },
    { id: 6710, chapter: 'Remaining Life', title: 'Minimum thickness margin', prompt: 'A vessel shell is 0.410 in. thick, the required minimum is 0.350 in., and the corrosion rate is 0.012 in. per year. Estimated remaining life is closest to:', correct: '5 years', wrong: [['34 years', 'That divides current thickness by rate and ignores required minimum thickness.', 'Use available thickness only.'], ['3 years', 'That understates the available thickness margin.', 'Subtract minimum from current thickness first.'], ['12 years', 'That confuses the corrosion rate with the thickness margin.', 'Remaining life is margin divided by rate.']] },
    { id: 6711, chapter: 'Inspection Intervals', title: 'Interval after rate change', prompt: 'A circuit’s corrosion rate doubles after a process change. The most defensible inspection-planning response is to:', correct: 'Recalculate remaining life and inspection interval using the updated rate and service risk', wrong: [['Keep the old interval because the previous plan was approved', 'Approval does not make the old assumptions permanent.', 'Plans depend on current risk.'], ['Extend the interval because more history always lowers uncertainty', 'More history can reveal higher risk, as it does here.', 'Use the direction of the data.'], ['Wait for leakage before changing the plan', 'Inspection planning is meant to act before loss of containment.', 'Use trend information early.']] },
    { id: 6712, chapter: 'NDE Selection', title: 'Method fit', prompt: 'A damage mechanism is expected to cause localized internal pitting rather than broad external thinning. The selected NDE method should be judged mainly by whether it can:', correct: 'Detect and size the expected pitting at the relevant locations with adequate reliability', wrong: [['Produce the cheapest report regardless of detection limits', 'Cost matters, but method capability must fit the damage mechanism.', 'Match method to damage.'], ['Repeat the prior repair technique as if the damage mechanism has not changed', 'Prior technique may not fit the current damage concern.', 'Damage mechanism drives selection.'], ['Avoid recording uncertain readings', 'Uncertainty should be documented and managed, not hidden.', 'Data quality matters.']] },
    { id: 6713, chapter: 'Risk-Based Inspection', title: 'Likelihood and consequence', prompt: 'In risk-based inspection planning, an item with moderate likelihood of failure but very high consequence should usually:', correct: 'Receive attention proportional to the combined risk, not be dismissed because likelihood is only moderate', wrong: [['Be ignored unless likelihood is the single highest in the unit', 'Consequence is part of risk.', 'Risk combines likelihood and consequence.'], ['Be treated identically to every low-consequence item', 'RBI differentiates inspection effort by risk.', 'Do not flatten the risk picture.'], ['Avoid inspection because high consequence is not measurable', 'Consequence can be estimated and used in planning.', 'Use the risk model carefully.']] },
    { id: 6714, chapter: 'Repairs', title: 'Temporary repair control', prompt: 'A temporary repair clamp is installed to keep equipment running until the next outage. What should the inspector be most concerned about after immediate safety is addressed?', correct: 'Engineering basis, approval, monitoring, documentation, and a plan to remove or replace the temporary repair', wrong: [['Letting the temporary repair become permanent without review', 'Temporary repairs need controlled follow-up.', 'Do not let temporary become invisible.'], ['Recording only that production was restored', 'Return to service is not enough documentation.', 'Track the technical basis and controls.'], ['Assuming the clamp proves the original damage no longer matters', 'The underlying condition still needs integrity management.', 'A clamp controls risk only if governed.']] },
    { id: 6715, chapter: 'Rerating', title: 'Lower pressure service', prompt: 'A corroded vessel may be acceptable only at a lower maximum allowable pressure. Before the rerating is accepted, the inspector should verify:', correct: 'A documented engineering evaluation and required updates to records, limits, and markings as applicable', wrong: [['A verbal promise from operations to run gently', 'Operating intent does not replace rerating requirements.', 'Make the new limit controlled and documented.'], ['That rerating avoids all inspection involvement', 'Rerating is a technical change requiring review.', 'Controlled change, not shortcut.'], ['That the old design pressure remains on every operating document', 'Documents should reflect the approved conditions.', 'Avoid conflicting limits.']] },
    { id: 6716, chapter: 'Pressure Testing', title: 'Return to service', prompt: 'After a significant pressure-boundary repair, schedule pressure leads the team to ask whether testing or alternative evaluation can be skipped. The inspector should first:', correct: 'Confirm the applicable code and engineering requirements for pressure testing or accepted alternatives before return to service', wrong: [['Let startup urgency decide the technical requirement', 'Schedule pressure does not determine code compliance.', 'Verify the requirement.'], ['Treat a visually clean repair as enough evidence for return to service', 'Visual appearance alone may not satisfy return-to-service requirements.', 'Use applicable acceptance criteria.'], ['Delay all documentation until the next planned outage', 'Return-to-service decisions need support now.', 'Document before relying on the repair.']] },
    { id: 6717, chapter: 'Damage Mechanisms', title: 'CUI suspicion', prompt: 'Insulated piping has a history of wet insulation and coating breakdown near supports. Even without an active leak, the inspector should consider:', correct: 'Corrosion under insulation or localized external corrosion as a credible damage mechanism', wrong: [['No credible risk because insulation hides the pipe', 'Hidden surfaces can increase inspection uncertainty.', 'Wet insulation is a clue.'], ['Only internal erosion from process velocity', 'The facts point to an external insulation/coating mechanism.', 'Match mechanism to evidence.'], ['A documentation issue only, with no inspection implication', 'Records matter, but the condition may require inspection planning.', 'Treat it as possible damage.']] },
    { id: 6718, chapter: 'Records', title: 'Repair package', prompt: 'A completed repair package lacks the work scope, material traceability, inspection results, and approval basis. The main integrity problem is that future inspectors:', correct: 'Cannot confidently understand what was changed, why it was acceptable, or how it affects future inspection planning', wrong: [['Need only the invoice amount to plan inspection', 'Cost does not describe technical condition.', 'Future planning needs technical records.'], ['Can assume the repair was perfect because equipment restarted', 'Startup does not prove full code compliance or long-term integrity.', 'Records preserve the basis.'], ['Should delete old inspection history to avoid confusion', 'History is essential to trend and condition assessment.', 'Preserve and reconcile records.']] },
    { id: 6719, chapter: 'Code Scope', title: 'Asset boundary', prompt: 'A question mixes tank, piping, and pressure-vessel facts. Before applying any detailed rule, the candidate should identify:', correct: 'Which asset and code scope the question is actually testing', wrong: [['The answer choice with the most familiar words', 'Familiar wording can point to the wrong code.', 'Scope first.'], ['The highest possible inspection cost', 'Cost does not identify the governing code.', 'Classify the asset.'], ['The rule used on the candidate’s most recent job, regardless of facts', 'Field experience must be matched to the exam scenario.', 'Use the question facts.']] },
    { id: 6720, chapter: 'Professional Judgment', title: 'Incomplete evidence', prompt: 'Operations asks for inspection signoff, but required thickness data are incomplete for the area of concern. The best response is to:', correct: 'Withhold or qualify signoff until enough evidence supports the technical conclusion required', wrong: [['Sign unconditionally and gather the missing readings later if convenient', 'Unsupported signoff creates integrity and accountability risk.', 'Evidence first.'], ['Let production cost decide whether the data are necessary', 'Cost pressure cannot replace technical basis.', 'Protect the inspection conclusion.'], ['Use a vague note that hides the missing evidence', 'Ambiguous documentation weakens the record.', 'Be clear about limitations.']] },
  ]),
  cdfm: makeQuestionBank('Career Skills', [
    { id: 6801, chapter: 'Budget Dock', title: 'Purpose of appropriation', prompt: 'Why does the source and purpose of funds matter so much in defense financial management?', correct: 'Because different appropriations are available for different legally defined purposes and constraints', wrong: [['Because all government funds can be moved freely if the mission is important enough', 'Mission urgency does not erase fiscal boundaries.', 'Purpose restrictions are core to fiscal discipline.'], ['Because appropriation labels are mainly accounting decoration', 'The labels correspond to legal availability and control.', 'Treat appropriations as real constraints.'], ['Because purpose rules matter only at year-end', 'They matter whenever funds are used.', 'Availability rules apply throughout execution.']] },
    { id: 6802, chapter: 'Execution Reef', title: 'Obligation logic', prompt: 'What is the key management reason to distinguish obligations from actual outlays?', correct: 'Because funds can be legally committed before cash is disbursed, and both stages matter for control and forecasting', wrong: [['Because outlays are the only stage that affects budget execution', 'Execution management starts before cash leaves.', 'Commitments and obligations shape control earlier.'], ['Because obligations are informal promises with no control value', 'Obligations are central to budget execution and tracking.', 'They are not casual intentions.'], ['Because both terms mean exactly the same thing in practice', 'They are related but not identical.', 'Understand timing and control differences.']] },
    { id: 6803, chapter: 'Control Cove', title: 'Anti-deficiency instinct', prompt: 'What is the safest financial-management instinct when a program office wants to keep spending despite uncertain fund availability?', correct: 'Verify legal funding availability and control limits before allowing further commitments', wrong: [['Keep spending if leadership seems confident more funds will arrive', 'Expected future funding does not authorize current overcommitment.', 'Availability must be real, not hoped-for.'], ['Shift the cost later so the books look cleaner now', 'Timing games do not solve legal availability problems.', 'Control first, cosmetics never.'], ['Approve it because mission owners know best', 'Mission ownership does not override funding rules.', 'Fiscal controls still apply.']] },
    { id: 6804, chapter: 'Forecast Lagoon', title: 'Variance signal', prompt: 'A program repeatedly under-executes against plan. Why should finance care beyond the optics of missing a target?', correct: 'Persistent variance can signal weak planning, poor assumptions, or execution risk that affects future funding decisions', wrong: [['Because variance matters only if the spreadsheet looks messy', 'Presentation is not the issue.', 'Execution variance can reveal real program weaknesses.'], ['Because under-execution always means the program needs more money', 'Sometimes it means the opposite.', 'Understand the driver before choosing the remedy.'], ['Because actuals should always exactly equal plan in government programs', 'Forecasts are not perfect.', 'The issue is whether the variance reveals a controllable problem.']] },
    { id: 6805, chapter: 'Audit Bay', title: 'Document trail', prompt: 'Why is documentation so important in defense finance decisions?', correct: 'Because managers need evidence showing that funds were used consistently with legal authority and internal controls', wrong: [['Because documentation exists mainly to slow down operations', 'Controls may feel heavy, but the point is accountability and legality.', 'Records support defensible execution.'], ['Because verbal approval from a senior leader is always enough', 'Leadership direction does not replace control documentation.', 'Significance requires traceability.'], ['Because only auditors care about records', 'Program managers and certifiers also depend on them.', 'Documentation supports day-to-day control, not just audits.']] },
    { id: 6806, chapter: 'Lifecycle Shoals', title: 'Year-end pressure', prompt: 'Why can year-end spending pressure create elevated risk in public financial management?', correct: 'Because urgency can push teams toward weak documentation, poor prioritization, or misuse of funds if controls slip', wrong: [['Because year-end automatically suspends normal fiscal rules', 'Rules do not disappear at year-end.', 'Pressure increases risk; it does not remove law.'], ['Because every late-year purchase is improper by definition', 'Late spending is not automatically wrong.', 'The problem is weak justification or poor control, not the month itself.'], ['Because funds should never be used late in the cycle', 'Timely execution near year-end can be legitimate.', 'Use discipline rather than blanket panic.']] },
    { id: 6807, chapter: 'Program Reach', title: 'Cross-functional judgment', prompt: 'A budget issue touches contracting, operations, and accounting. What is the strongest finance response?', correct: 'Coordinate across functions so the legal, operational, and recording consequences are aligned before action', wrong: [['Leave it to whichever team noticed the issue first', 'First visibility does not equal sole ownership.', 'Cross-functional issues need integrated handling.'], ['Solve the accounting entry first and let the rest follow later', 'Recording is not the only dimension.', 'Legal and operational consequences matter too.'], ['Ask each team for its own answer and choose the most convenient one', 'Convenience is not a control framework.', 'Reconcile the issue through coordinated analysis.']] },
    { id: 6808, chapter: 'Assurance Lagoon', title: 'Why finance matters', prompt: 'What is the best high-level description of strong defense financial management?', correct: 'Turning mission needs into legally controlled, transparent, and decision-useful resource execution', wrong: [['Spending every available dollar as quickly as possible', 'Speed alone is not stewardship.', 'The goal is disciplined mission support.'], ['Preventing all program change by insisting on static budgets', 'Adaptation is necessary, but it must be controlled.', 'Finance should enable decisions, not freeze them blindly.'], ['Treating financial management as a back-office recordkeeping task only', 'Recording matters, but finance also shapes decision quality and control.', 'The function is both operational and fiduciary.']] },
  ]),
  certifiedGeneralAppraiser: makeQuestionBank('Career Skills', [
    { id: 6901, chapter: 'Value Theory Dock', title: 'Highest and best use', prompt: 'Why is highest and best use analysis so central in appraisal?', correct: 'Because value depends on the most supportable use of the property, not just its current use', wrong: [['Because current use always sets value automatically', 'Current use can matter, but it is not always the value conclusion.', 'Analyze the most supportable use.'], ['Because appraisers are free to pick the most optimistic imaginary use', 'Supportability matters more than optimism.', 'Highest and best use is constrained, not fantasy.'], ['Because it matters only for vacant land and never improved property', 'The concept can matter in both cases.', 'Use analysis is broader than one asset type.']] },
    { id: 6902, chapter: 'Income Reef', title: 'NOI judgment', prompt: 'Why is net operating income different from simple cash in the bank?', correct: 'Because NOI is a valuation measure of property operations, not just whatever cash happens to sit in an account', wrong: [['Because NOI includes every financing decision automatically', 'Financing is generally separated from property operating performance.', 'NOI focuses on operations of the asset itself.'], ['Because NOI is always equal to gross rent', 'Expenses matter materially.', 'Net means after operating expenses.'], ['Because only industrial property uses NOI', 'NOI is widely relevant in income-producing property.', 'The concept is not property-type exclusive.']] },
    { id: 6903, chapter: 'USPAP Cove', title: 'Independence', prompt: 'Why must an appraiser care so much about impartiality and unsupported advocacy?', correct: 'Because the credibility of the appraisal depends on objective analysis rather than pushing a client-preferred result', wrong: [['Because clients are never allowed to provide information', 'Clients can provide information; the appraiser still must evaluate it independently.', 'Input is allowed, advocacy is not.'], ['Because impartiality matters only in litigation assignments', 'Credibility matters across appraisal work.', 'Objectivity is a core professional expectation.'], ['Because a value opinion is valid if the client is satisfied', 'Client satisfaction is not the credibility standard.', 'The work must remain supportable and independent.']] },
    { id: 6904, chapter: 'Comparable Sales Lagoon', title: 'Comp selection', prompt: 'What makes a comparable sale more useful?', correct: 'It is meaningfully similar in the value-driving characteristics that matter for the subject property', wrong: [['It sold for the highest price in the area', 'A high price does not make it comparable.', 'Similarity matters more than headline value.'], ['It is geographically close even if everything else differs', 'Location matters, but similarity is multi-factor.', 'Compare the characteristics that drive value.'], ['It requires no adjustments at all because every property is unique', 'Uniqueness does not eliminate the need for disciplined comparison.', 'Use the most relevant comparables and adjust thoughtfully.']] },
    { id: 6905, chapter: 'Scope of Work Bay', title: 'Assignment design', prompt: 'Why does scope of work matter so much at the start of an appraisal assignment?', correct: 'Because the reliability of the conclusion depends on doing enough work for the intended use and problem being solved', wrong: [['Because scope is mostly administrative wording after the analysis is done', 'Scope shapes the analysis from the beginning.', 'It is not an afterthought.'], ['Because all appraisals require the exact same level of investigation', 'Assignment needs can differ.', 'Scope should fit the problem and intended use.'], ['Because smaller scope always means more efficient and equally credible work', 'Too little scope can undermine credibility.', 'Efficiency does not excuse under-analysis.']] },
    { id: 6906, chapter: 'Commercial Reasoning Shoals', title: 'Vacancy assumption', prompt: 'Why is an unrealistic vacancy assumption dangerous in an income approach valuation?', correct: 'Because small changes in stabilized assumptions can materially distort indicated value', wrong: [['Because vacancy never affects properties with long leases', 'Lease structure matters, but vacancy assumptions can still affect value analysis.', 'Do not assume away occupancy risk.'], ['Because investors care only about cap rate, not income quality', 'Cap rate and income assumptions both matter.', 'Value depends on the cash-flow picture as a whole.'], ['Because vacancy assumptions matter only for residential appraisal', 'Commercial valuation is highly sensitive to occupancy and income assumptions.', 'This is a core income-approach issue.']] },
    { id: 6907, chapter: 'Reconciliation Shelf', title: 'Approach weighting', prompt: 'Why might an appraiser place more weight on one valuation approach than another?', correct: 'Because some approaches fit the property type, data quality, and assignment problem better than others', wrong: [['Because each approach must always receive equal weight', 'Equal weighting is not a universal rule.', 'Weight should follow relevance and reliability.'], ['Because the highest value indication should usually win', 'Selecting the highest number is not sound reconciliation.', 'Credibility matters more than optimism.'], ['Because the client requested the more favorable approach', 'Client preference does not determine analytical weight.', 'Reconciliation should be independent and supportable.']] },
    { id: 6908, chapter: 'Reporting Lagoon', title: 'Supportable conclusion', prompt: 'What makes an appraisal conclusion most defensible on review?', correct: 'A clear chain from data to adjustments to reasoning to final opinion of value', wrong: [['A very confident tone without much explanation', 'Confidence alone does not create support.', 'Reviewers need logic and evidence.'], ['A conclusion that matches the contract price exactly', 'Agreement with a deal number is not the credibility test.', 'The analysis must stand on its own.'], ['The longest report possible regardless of relevance', 'Length is not the same as supportability.', 'Clarity and defensible reasoning matter more.']] },
  ]),
  regulatoryAffairsRoadmap: [
    ...careerLabsRegulatoryQuestions,
    makeSimpleQuestion(7001, 'Regulatory', 'Submission Dock', 'Regulatory strategy',
      'A startup wants to launch a new medical device in the US. The product is similar to an existing legally marketed device, but not identical. What is the best first regulatory question?',
      'Whether there is a suitable predicate device and what pathway the differences imply',
      [
        ['How quickly marketing can write claims', 'Claims matter, but pathway and predicate logic come first.', 'Start with intended use, technological differences, and pathway risk.'],
        ['Whether the device looks expensive enough for premium pricing', 'Pricing is commercial strategy, not regulatory classification.', 'Regulatory work starts with safety, effectiveness, and pathway.'],
        ['Whether competitors have attractive websites', 'Competitor materials may inform claims, but they do not establish clearance strategy.', 'Anchor the plan in FDA pathway requirements.'],
      ]),
    makeSimpleQuestion(7002, 'Regulatory', 'Claims Reef', 'Labeling boundaries',
      'A product team wants to add a stronger claim to the website because early users like the product. What should regulatory affairs do first?',
      'Check whether the claim is supported by evidence and consistent with the cleared or approved intended use',
      [
        ['Approve it because users said it worked', 'Anecdotes are not enough for regulated claims.', 'Claims need evidence and must stay inside the authorized use.'],
        ['Block every marketing claim automatically', 'Regulatory should guide compliant communication, not freeze the business by default.', 'The right question is what can be supported.'],
        ['Ask sales to decide because they know customers', 'Sales input is useful, but regulatory claims need evidence and compliance review.', 'Separate customer language from allowed promotional claims.'],
      ]),
    makeSimpleQuestion(7003, 'Regulatory', 'Change Control Cove', 'Design change',
      'After launch, engineering changes a material used in a device component. What is the safest regulatory instinct?',
      'Assess whether the change could affect safety, effectiveness, performance, or regulatory filings before release',
      [
        ['Ship it if the part still fits', 'Physical fit is not the only risk.', 'Evaluate impact on safety, performance, biocompatibility, and documentation.'],
        ['Treat every design change as requiring a fresh approval regardless of documented impact assessment', 'Some changes do not trigger a new submission, but they still need documented assessment.', 'Use a structured change-control decision.'],
        ['Only tell regulatory after launch', 'That creates avoidable compliance risk.', 'Regulatory review belongs before implementation.'],
      ]),
    makeSimpleQuestion(7004, 'Regulatory', 'Audit Lagoon', 'Inspection readiness',
      'An auditor asks why a requirement changed six months ago. What evidence should a well-run team be able to show?',
      'A traceable record explaining the change, review, approval, and impact assessment',
      [
        ['A verbal explanation from the engineer who remembers it', 'Memory is fragile and not inspection-ready.', 'Audits depend on documented traceability.'],
        ['Only the newest version of the document', 'The current state matters, but the history and rationale matter too.', 'Keep change history and approvals visible.'],
        ['A promise that the product still works', 'Assertions are weaker than records.', 'Show controlled evidence, not vibes in a lab coat.'],
      ]),
  ],
  clinicalResearchRoadmap: [
    ...makeQuestionBank('Career Skills', [
    { id: 6961, chapter: 'GCP Dock', title: 'Protocol first', prompt: 'Why is protocol adherence so central in clinical research operations?', correct: 'Because protocol discipline protects participants and preserves the integrity of the study data', wrong: [['Because the protocol is mainly a suggestion once enrollment begins', 'Deviation can create safety and data-quality problems.', 'The protocol is an operational and ethical anchor.'], ['Because only monitors care about protocol details', 'Sites, investigators, and sponsors all depend on protocol compliance.', 'It is not a niche concern.'], ['Because perfect adherence guarantees perfect science', 'Protocol discipline matters, but it does not eliminate every study risk.', 'Still treat it as a core control.']] },
    { id: 6962, chapter: 'Consent Reef', title: 'Re-consent judgment', prompt: 'When might re-consenting participants become necessary?', correct: 'When important new information could affect a participant’s willingness to continue in the study', wrong: [['Only when the consent form version number changes, regardless of what changed', 'Version changes must be reviewed, but re-consent is driven by whether new information is meaningful for participant decision-making.', 'The issue is meaningful information affecting informed participation.'], ['Never, because one signed consent covers the entire trial no matter what changes', 'Consent is an ongoing process, not a one-time shield.', 'Material new information may require re-consent.'], ['Only after database lock', 'That is far too late for participant decision-making.', 'Re-consent is tied to information relevance, not study timeline alone.']] },
    { id: 6963, chapter: 'Data Integrity Cove', title: 'Source versus CRF', prompt: 'Why is it risky if case report form entries cannot be traced back clearly to source documentation?', correct: 'Because data credibility and verifiability are weakened when the audit trail is incomplete', wrong: [['Because CRFs do not matter if the source exists somewhere', 'Transcription and traceability still matter.', 'The chain from source to reported data must be defendable.'], ['Because tracing is mainly a sponsor preference, not a research quality issue', 'Traceability is core to research quality and inspection readiness.', 'It is more than convenience.'], ['Because monitors prefer longer notes', 'The issue is evidentiary reliability, not note length.', 'Focus on audit trail integrity.']] },
    { id: 6964, chapter: 'Safety Lagoon', title: 'AE versus workflow delay', prompt: 'A participant reports a significant new symptom near the end of clinic hours, and the coordinator is behind on data entry. What takes priority?', correct: 'Participant safety assessment and proper adverse-event handling take priority over routine administrative backlog', wrong: [['Finish data entry first so the records stay current', 'Administrative timeliness does not outrank participant safety.', 'Safety and reporting come first.'], ['Wait until the monitor’s next visit to decide if it matters', 'Safety triage should not wait for routine oversight cadence.', 'Escalate through site clinical workflow promptly.'], ['Treat the symptom as unrelated until the investigator gives a later causality opinion', 'Potential events should be captured and escalated promptly.', 'Document and assess through the proper process.']] },
    { id: 6965, chapter: 'Deviation Bay', title: 'Deviation significance', prompt: 'Why does a protocol deviation need more than simple documentation in some cases?', correct: 'Because some deviations may affect participant safety, data integrity, or require additional reporting and corrective action', wrong: [['Because every deviation automatically ends the study', 'Severity varies by deviation.', 'Assess impact rather than assume total failure.'], ['Because deviations only matter if a regulator is already watching', 'Internal quality obligations exist regardless of current scrutiny.', 'Impact assessment is part of routine compliance.'], ['Because once documented, no further judgment is needed', 'Documentation is necessary but not always sufficient.', 'Some deviations need assessment and follow-up.']] },
    { id: 6966, chapter: 'Monitor Shelf', title: 'Query handling', prompt: 'A monitor raises a data query, but the coordinator believes the source is correct and the CRF entry is also correct. What is the strongest response?', correct: 'Resolve the query with source-based explanation and documentation rather than changing data just to clear the issue', wrong: [['Change the CRF to match the monitor’s preference', 'Data should not be altered merely to satisfy pressure.', 'Let source-supported facts drive the response.'], ['Delete the source note so the discrepancy disappears', 'Destroying records is unacceptable.', 'Preserve the audit trail and explain the issue.'], ['Treat the coordinator\'s confidence as enough to close the query informally', 'Queries still need timely, documented resolution.', 'Respond through process, not assumption.']] },
    { id: 6967, chapter: 'Role Clarity Shoals', title: 'Coordinator versus investigator', prompt: 'Why is role clarity between the study coordinator and principal investigator so important?', correct: 'Because tasks may be delegated, but responsibility for key clinical and protocol decisions cannot simply become ambiguous', wrong: [['Because coordinators should make all medical judgments to save investigator time', 'Efficiency does not justify role confusion.', 'Clinical responsibility boundaries matter.'], ['Because delegation means the investigator no longer needs oversight', 'Delegation does not remove overall responsibility.', 'Oversight remains critical.'], ['Because the PI should avoid all operational awareness to preserve independence', 'Investigators still need appropriate study oversight.', 'Role clarity supports accountability, not disengagement.']] },
    { id: 6968, chapter: 'Inspection Lagoon', title: 'Inspection readiness', prompt: 'What is the clearest sign that a site is genuinely inspection-ready rather than just cosmetically organized?', correct: 'Its records, staff explanations, and actual practices consistently align with the protocol and documented procedures', wrong: [['The binders are color-coded and look neat', 'Organization helps, but cosmetics are not readiness.', 'Inspectors test substance and consistency.'], ['The site can answer only the easiest likely questions', 'Readiness requires deeper operational consistency.', 'Being polished on the surface is not enough.'], ['The monitor has not complained recently', 'Lack of recent complaints is not a full readiness standard.', 'True readiness shows up in records and practice alignment.']] },
    ]),
    ...careerLabsClinicalResearchQuestions,
    makeSimpleQuestion(8001, 'Clinical Research', 'Consent Dock', 'Informed consent',
      'A participant signs a consent form, then asks a basic question that shows they did not understand the study risks. What should a clinical research coordinator do?',
      'Pause and re-explain the study in understandable language before proceeding',
      [
        ['Continue because the form is signed', 'A signature alone does not prove informed consent.', 'Consent is a process, not a paper trophy.'],
        ['Tell them to ask the sponsor later', 'The site team must support understanding before participation.', 'Address comprehension before study procedures.'],
        ['Remove them from the study immediately', 'Confusion calls for clarification first unless they choose not to continue.', 'Protect autonomy by making the decision informed.'],
      ]),
    makeSimpleQuestion(8002, 'Clinical Research', 'Protocol Reef', 'Protocol deviation',
      'A required study visit happens outside the allowed visit window. What is the best response?',
      'Document the deviation, assess participant impact, and follow reporting requirements',
      [
        ['Hide it because the visit still happened', 'Hiding deviations creates serious quality and compliance risk.', 'Document and assess transparently.'],
        ['Withdraw the participant automatically', 'Not every deviation requires withdrawal.', 'Follow the protocol, PI judgment, and reporting rules.'],
        ['Change the source record to fit the window', 'Altering records is not acceptable.', 'Records should reflect what actually happened.'],
      ]),
    makeSimpleQuestion(8003, 'Clinical Research', 'Source Data Swamp', 'Source documentation',
      'Why does source documentation matter in a clinical trial?',
      'It provides the original evidence that study data are accurate and verifiable',
      [
        ['It is mainly decorative paperwork', 'Source records are central to data integrity.', 'If it is not documented, it is hard to verify.'],
        ['It replaces the case report form', 'CRFs summarize/transmit data; source supports verification.', 'Understand the chain from source to entered data.'],
        ['It is only needed after a study fails', 'Source documentation is routine quality infrastructure.', 'Build inspection readiness from day one.'],
      ]),
    makeSimpleQuestion(8004, 'Clinical Research', 'Safety Lagoon', 'Adverse event handling',
      'A participant reports a new serious symptom during a trial. What should the coordinator prioritize?',
      'Ensure clinical escalation and capture/report the event according to protocol and regulations',
      [
        ['Wait until the next scheduled visit', 'Serious symptoms may need immediate attention.', 'Participant safety comes first.'],
        ['Decide alone whether it was caused by the drug', 'Causality assessment is not solely the coordinator’s call.', 'Escalate to the investigator and follow reporting workflow.'],
        ['Treat an apparently unrelated serious symptom as outside the trial documentation workflow', 'Unrelated events may still require documentation.', 'Capture first, assess through the proper process.'],
      ]),
  ],
  professionalEthics: professionalEthicsQuestions,
  publicAffairs: careerPublicAffairsQuestions,
  cfaLevelOne: cfaSurvivalQuestions,
  cfaLevelTwo: recoveredCredentialBank(cfaLevelTwoQuestions),
  cfaLevelThree: recoveredCredentialBank(cfaLevelThreeQuestions),
  cfp: recoveredCredentialBank(cfpQuestions),
  sie: recoveredCredentialBank(sieQuestions),
  series7: recoveredCredentialBank(series7Questions),
  series63: recoveredCredentialBank(series63Questions),
  series79: recoveredCredentialBank(series79Questions),
  frm: recoveredCredentialBank(frmQuestions),
  caia: recoveredCredentialBank(caiaQuestions),
  cpaExam: cpaExamQuestions,
  barExam: barExamQuestions,
  mpre: recoveredCredentialBank(mpreQuestions),
  mbe: recoveredCredentialBank(mbeQuestions),
  careerLsat: recoveredCredentialBank(lsatQuestions),
  sqe1: recoveredCredentialBank(sqe1Questions),
  sqe2: recoveredCredentialBank(sqe2Questions),
  nalaCp: recoveredCredentialBank(nalaCpQuestions),
  nclexRn: recoveredCredentialBank(nclexRnQuestions),
  nclexPn: recoveredCredentialBank(nclexPnQuestions),
  pance: recoveredCredentialBank(panceQuestions),
  usmleStep1: recoveredCredentialBank(usmleStep1Questions),
  usmleStep2Ck: recoveredCredentialBank(usmleStep2CkQuestions),
  careerMcat: recoveredCredentialBank(mcatQuestions),
  cfe: recoveredCredentialBank(cfeQuestions),
  cams: recoveredCredentialBank(camsQuestions),
  cippE: recoveredCredentialBank(cippEQuestions),
  personalityTests: recoveredCredentialBank(personalityTestsQuestions),
  iqReasoningTests: recoveredCredentialBank(iqReasoningTestsQuestions),
  pmpWrangler: pmpWranglerQuestions,
  shrmPeople: shrmPeopleQuestions,
  supplyChain: [
    makeSimpleQuestion(9001, 'Supply Chain', 'Forecast Dock', 'Forecast bias',
      'A demand forecast is consistently below actual demand for eight weeks. What problem should you suspect?',
      'Forecast bias, because the errors lean in one direction instead of canceling out',
      [
        ['Random noise only', 'Random errors should not consistently miss in the same direction.', 'Look for systematic bias when misses have a pattern.'],
        ['Perfect safety stock policy', 'Stock policy does not explain a persistent forecast miss.', 'Separate forecast accuracy from inventory buffers.'],
        ['A lower lead time', 'Lead time affects replenishment timing, not the definition of forecast bias.', 'Name the pattern in the forecast errors.'],
      ]),
    makeSimpleQuestion(9002, 'Supply Chain', 'Inventory Reef', 'Safety stock',
      'A supplier becomes less reliable and lead-time variability increases. What usually happens to required safety stock?',
      'It increases, because uncertainty during replenishment is higher',
      [
        ['It decreases because the supplier is slower', 'More uncertainty generally requires more buffer, not less.', 'Safety stock protects against variability.'],
        ['It becomes zero', 'Unreliable supply makes zero buffer riskier.', 'Match buffers to variability and service targets.'],
        ['It only depends on package color', 'Package color is not an inventory driver unless it changes demand or handling.', 'Focus on demand, lead time, service level, and variability.'],
      ]),
    makeSimpleQuestion(9003, 'Supply Chain', 'Bottleneck Swamp', 'Constraint thinking',
      'A factory has five steps. Four steps can process 100 units/hour, but one step processes 60 units/hour. What is the system bottleneck?',
      'The 60 units/hour step',
      [
        ['The first step, always', 'The bottleneck is the limiting capacity, not automatically the first station.', 'Find the narrowest throughput point.'],
        ['All steps equally', 'Capacity is not equal here.', 'The slowest effective step constrains output.'],
        ['The warehouse after production', 'The stated production constraint is inside the process.', 'Use the data given before inventing a new constraint.'],
      ]),
    makeSimpleQuestion(9004, 'Supply Chain', 'Expedite Lagoon', 'Expediting tradeoff',
      'A customer order is late, and a manager wants to expedite it by interrupting the current production schedule. What tradeoff should you consider?',
      'Helping one urgent order may delay other orders and reduce overall schedule stability',
      [
        ['Expediting has no downside', 'Rush changes often create knock-on delays.', 'Consider system-wide impact, not one order in isolation.'],
        ['Late orders should always be canceled', 'Cancellation is a commercial decision, not the default operational fix.', 'Evaluate options and consequences.'],
        ['Only accounting should decide', 'Costs matter, but operations needs to assess capacity and schedule effects.', 'Use cross-functional judgment.'],
      ]),
  ],
  technicalSales: [
    makeSimpleQuestion(10001, 'Technical Sales', 'Discovery Dock', 'Discovery call',
      'A prospect asks for a product demo immediately, but you do not yet know their problem. What is the strongest next move?',
      'Ask discovery questions to understand pain, use case, success criteria, and stakeholders before tailoring the demo',
      [
        ['Show every feature in the product', 'Feature tours are easy to forget and hard to connect to value.', 'Demo around the customer’s problem.'],
        ['Quote the highest price first', 'Pricing without context can derail qualification.', 'Understand value and fit before commercial detail.'],
        ['Avoid technical questions entirely', 'Technical sales requires enough technical depth to qualify and guide fit.', 'Balance discovery with credible technical conversation.'],
      ]),
    makeSimpleQuestion(10002, 'Technical Sales', 'Objection Reef', 'Security objection',
      'A technical buyer says, “We cannot use this unless it meets our security requirements.” What should you do?',
      'Clarify the specific requirements and map them to documented controls or gaps',
      [
        ['Say “we are secure” and move on', 'Generic reassurance does not satisfy technical risk review.', 'Use evidence: docs, certifications, architecture, and known gaps.'],
        ['Treat finance approval as enough even while security requirements remain unresolved', 'Security can block a deal even when budget exists.', 'Treat technical blockers as real buying criteria.'],
        ['Promise any feature they ask for', 'Overpromising damages trust and delivery.', 'Clarify, verify, then commit carefully.'],
      ]),
    makeSimpleQuestion(10003, 'Technical Sales', 'Value Cove', 'ROI story',
      'A customer likes the product but asks why it is worth the cost. What makes the best ROI answer?',
      'Tie the product to measurable business impact such as time saved, risk reduced, or revenue gained',
      [
        ['List internal engineering details only', 'Technical detail helps, but ROI needs customer value.', 'Translate features into outcomes.'],
        ['Say competitors cost more', 'Competitive pricing can help, but value should stand on its own.', 'Anchor the answer in the customer’s economics.'],
        ['Offer a random discount immediately', 'Discounting before value is established weakens the deal.', 'Build the value case first.'],
      ]),
    makeSimpleQuestion(10004, 'Technical Sales', 'Pilot Lagoon', 'Pilot success criteria',
      'A prospect agrees to a pilot. What should you define before it starts?',
      'Clear success criteria, timeline, owners, data needed, and decision process',
      [
        ['Only the kickoff meeting time', 'A kickoff is not enough to make a pilot evaluable.', 'Define what success means and who decides.'],
        ['A vague hope that users like it', 'Vague pilots drift and are hard to close.', 'Make the evaluation concrete.'],
        ['The renewal discount', 'Renewal terms are premature if the pilot value is undefined.', 'First set up a fair test.'],
      ]),
  ],
  }

  const polished: Record<string, Question[]> = {}
  for (const [trackId, questions] of Object.entries(catalog)) {
    polished[trackId] = runCareerSkillsPolish(questions, _careerSkillsBundle)
  }

  // The interview-prep tracks ml / software / uxResearch are registered as career-hopper
  // tracks (so they route to the 'career' catalog), but their authored banks live in the
  // university-prep catalog. Graft them in here so they stop resolving to an empty bank and
  // getting hidden by the zero-count filter. (ml:10, software:63, uxResearch:10 = 83 questions.)
  const _prep = buildUniversityPrepQuestionCatalog()
  for (const id of ['ml', 'software', 'uxResearch'] as const) {
    if (!polished[id]?.length && _prep[id]?.length) {
      polished[id] = _prep[id]
    }
  }

  // 20 new 23+ adult courses (Waves A/B/B2): trades, civics, and accessible intros.
  for (const [id, bank] of Object.entries(ADULT_NEW_COURSE_BANKS)) {
    polished[id] = bank
  }

  // Quality-pass top-ups (2026-05): append AI-generated (generated:true) questions to
  // courses that were under 50, bringing every career course to >=50.
  for (const [id, extra] of Object.entries(CAREER_TOPUPS)) {
    polished[id] = [...(polished[id] ?? []), ...extra]
  }

  // Round-2 (103-pass) top-ups: bring each course up to >=103 questions.
  for (const [id, extra] of Object.entries(CAREER_TOPUPS_R2)) {
    polished[id] = [...(polished[id] ?? []), ...extra]
  }

  return enrichCareerHints(enrichCareerQuestionQuality(topUpCareerAgentGeneratedCatalog(polished)))
}
