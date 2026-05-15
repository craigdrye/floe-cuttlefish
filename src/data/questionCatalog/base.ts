import type { Answer, Question, Topic } from './types'

export function defaultQuestionScaffold(topic: Topic, title: string, prompt: string) {
  const lowerPrompt = prompt.toLowerCase()

  const byTopic: Record<Topic, { briefing: string; setup: string[]; fieldNote: string; mentorHint: string }> = {
    Mathematics: {
      briefing: 'This question is testing a specific math skill. Read the givens carefully, decide which rule applies, and then do the arithmetic or logic cleanly.',
      setup: [
        `You are working on "${title}".`,
        'Pull out the actual quantities, shapes, or relationships before looking at the answers.',
        'Choose the answer that fits the math, not the one that merely sounds familiar.',
      ],
      fieldNote: 'Math questions get easier when you separate the diagram facts, the rule you need, and the calculation you actually have to do.',
      mentorHint: 'Name the rule first, then apply it to the exact numbers in the setup.',
    },
    'Game theory': {
      briefing: 'This question is testing incentives and fallback states. Before looking at the answers, work out who benefits from each next step and who does not.',
      setup: [
        `You are being tested on the core idea behind "${title}".`,
        'Do not start by choosing the answer that feels most fair or most dramatic.',
        'Start by asking what each player, state, or move implies next.',
      ],
      fieldNote: 'Game theory questions get easier when you define what happens after a no vote, a rejection, or a different move.',
      mentorHint: 'Write down the fallback state first. Many of the wrong answers ignore it.',
    },
    Probability: {
      briefing: 'This question is testing whether you can separate the headline percentages from the conditional probability you actually need.',
      setup: [
        `You are working on "${title}".`,
        'Treat the percentages like groups of cases rather than abstract decoration.',
        'The answer should come from the right bucket of outcomes, not from the loudest number in the question.',
      ],
      fieldNote: 'If the problem feels slippery, translate it into a concrete crowd and count what lands in each bucket.',
      mentorHint: 'Ask which probability the question wants, then build that group directly.',
    },
    'Expected value': {
      briefing: 'This question is testing weighted-average reasoning. The most likely outcome is not always the expected outcome.',
      setup: [
        `You are working on "${title}".`,
        'List every possible outcome and its probability before doing arithmetic.',
        'Then combine the branches with signs intact.',
      ],
      fieldNote: 'Expected value means long-run average, not best case and not most common case.',
      mentorHint: 'Multiply each payoff by its probability, then add. Do not drop the ugly branch.',
    },
    Statistics: {
      briefing: 'This question is testing whether you can connect the statistical concept to the quantity the problem is actually asking about.',
      setup: [
        `You are working on "${title}".`,
        'Identify the object being measured first: variance, slope, residual, probability, or estimate.',
        'Then choose the rule that applies to that object rather than a nearby buzzword.',
      ],
      fieldNote: 'Many wrong answers are statistically adjacent ideas applied to the wrong quantity.',
      mentorHint: 'Name the quantity out loud before touching the answers.',
    },
    ML: {
      briefing: 'This question is testing practical machine-learning judgment, not just vocabulary. Think objective, failure mode, and evaluation.',
      setup: [
        `You are working on "${title}".`,
        'Picture a real model pipeline and ask what would actually go wrong here.',
        'The best answer should improve decision quality, not just sound technical.',
      ],
      fieldNote: 'ML interview questions often hide the real issue inside evaluation, leakage, or metric choice.',
      mentorHint: 'Ask what the system is optimizing and what kind of mistake is expensive.',
    },
    Software: {
      briefing: 'This question is testing engineering judgment. Prefer the move that is simplest, observable, and correct under the stated constraints.',
      setup: [
        `You are working on "${title}".`,
        'Think like the person debugging or maintaining this later.',
        'The best answer should reduce uncertainty or match the structure of the problem directly.',
      ],
      fieldNote: 'In software questions, "clever" is often a distractor. Reliable usually wins.',
      mentorHint: 'Ask what information you need first, or what data structure naturally fits the query.',
    },
    Research: {
      briefing: 'This question is testing scientific reasoning. Focus on question, design, evidence, and what the result does not prove.',
      setup: [
        `You are working on "${title}".`,
        'Separate the observed result from the causal story people want to tell about it.',
        'Look for the comparison or design feature that makes the claim stronger or weaker.',
      ],
      fieldNote: 'A good research answer keeps evidence and interpretation in the right order.',
      mentorHint: 'Ask what would have to be true for the claim to actually follow.',
    },
    'Climate Science': {
      briefing: 'This question is testing climate-system reasoning. Track energy, carbon, uncertainty, and timescale before choosing an answer.',
      setup: [
        `You are working on "${title}".`,
        'Separate weather anecdotes from climate evidence, and forcing from feedback.',
        'Prefer the answer that preserves mechanism, scale, and uncertainty rather than the one with the loudest certainty.',
      ],
      fieldNote: 'Climate science questions reward mechanism plus statistical context: what changed, over what scale, and compared with what counterfactual?',
      mentorHint: 'Ask whether this is about radiation, feedback, carbon budget, variability, attribution, or risk.',
    },
    Medical: {
      briefing: 'This question is testing clinical reasoning with safety first. Start by identifying the urgent risk, then the meaning of the evidence.',
      setup: [
        `You are working on "${title}".`,
        'Do not jump straight to the fanciest diagnosis or metric.',
        'Start with stability, risk, and what decision the information supports.',
      ],
      fieldNote: 'The safest answer usually respects red flags, uncertainty, and what the test result can actually tell you.',
      mentorHint: 'Ask whether this is a safety question, a diagnostic question, or an interpretation question.',
    },
    'Series 86': {
      briefing: 'This question is testing equity-research style thinking: connect the finance concept to the operating driver and keep the arithmetic honest.',
      setup: [
        `You are working on "${title}".`,
        'Identify whether this is a per-share math question, a valuation multiple, or a forecasting driver question.',
        'Then use the cleanest version of the calculation or interpretation.',
      ],
      fieldNote: 'Series 86 questions often look intimidating until you sort them into a basic finance bucket.',
      mentorHint: 'Ask whether you are solving for a ratio, a per-share number, or an operating driver.',
    },
    Regulatory: {
      briefing: 'This question is testing compliance judgment. The best answer is usually the one that is most defensible when reviewed later.',
      setup: [
        `You are working on "${title}".`,
        'Think about documentation, evidence, and process discipline.',
        'The answer should reduce regulatory risk, not just move quickly.',
      ],
      fieldNote: 'Regulatory work rewards clarity, traceability, and defensible decisions.',
      mentorHint: 'Ask what would look strongest in an audit trail or submission review.',
    },
    'Clinical Research': {
      briefing: 'This question is testing trial-site judgment. Protect the participant, protect the protocol, and keep the data trail clean.',
      setup: [
        `You are working on "${title}".`,
        'The best answer should balance participant safety with protocol discipline.',
        'Avoid choices that create undocumented ambiguity.',
      ],
      fieldNote: 'In clinical research, operational sloppiness becomes both a safety problem and a data problem.',
      mentorHint: 'Ask what keeps the participant safe and the record defensible.',
    },
    'Supply Chain': {
      briefing: 'This question is testing flow reasoning. Look for the bottleneck, the uncertainty, or the tradeoff that drives the whole system.',
      setup: [
        `You are working on "${title}".`,
        'Trace how goods, information, or delays move through the system.',
        'The best answer should improve flow rather than optimize one local metric blindly.',
      ],
      fieldNote: 'Supply-chain questions often punish local fixes that ignore the actual constraint.',
      mentorHint: 'Ask what is limiting throughput or creating avoidable variability.',
    },
    'Technical Sales': {
      briefing: 'This question is testing whether you can diagnose before pitching. Trust comes from matching the answer to the buyer problem.',
      setup: [
        `You are working on "${title}".`,
        'Think about the customer problem, the technical concern, and the decision path.',
        'The best answer should clarify value without overpromising.',
      ],
      fieldNote: 'Technical sales questions usually reward diagnosis, evidence, and scoped next steps.',
      mentorHint: 'Ask what the buyer needs to believe before the deal can move.',
    },
    'UX Research': {
      briefing: 'This question is testing research craft. Users are not the problem; the design and the evidence are.',
      setup: [
        `You are working on "${title}".`,
        'Separate what users say, what they do, and what the study design can support.',
        'The best answer should produce cleaner evidence, not just a cleaner feeling.',
      ],
      fieldNote: 'Strong UX research answers avoid leading questions and overclaiming from small signals.',
      mentorHint: 'Ask what behavior or pattern you can defend after the study ends.',
    },
    AP: {
      briefing: 'This question is testing a course skill directly. First identify the concept being used, then decide what the problem is asking you to do with it.',
      setup: [
        `You are working on "${title}".`,
        lowerPrompt.includes('which') ? 'The question is asking you to choose the correct principle or interpretation, not to guess from wording.' : 'The question is asking for a specific algebraic or conceptual move.',
        'Use the setup details to eliminate answers that sound familiar but do not actually fit the problem.',
      ],
      fieldNote: 'Course-style math questions get easier when you separate the concept from the exact task.',
      mentorHint: 'Before choosing an answer, say out loud what the concept is and what the question wants from you.',
    },
    'A-level': {
      briefing: 'This question is testing structured subject knowledge. Define the rule, match it to the problem, and only then choose the answer.',
      setup: [
        `You are working on "${title}".`,
        'Do not rush to the answer choice that uses the right buzzword.',
        'First identify the rule or relationship the problem is actually testing.',
      ],
      fieldNote: 'A-level style questions reward method before confidence.',
      mentorHint: 'Name the relevant rule first, then apply it carefully.',
    },
    Primary: {
      briefing: 'This question is testing one simple idea at a time. Use the clues in the question and keep the reasoning small and concrete.',
      setup: [
        `You are working on "${title}".`,
        'Look for the one clue or pattern that matters most.',
        'Choose the answer that matches the evidence in the question.',
      ],
      fieldNote: 'These questions are meant to build confidence through one clean step at a time.',
      mentorHint: 'Point to the clue in the question before picking your answer.',
    },
    Fun: {
      briefing: 'This question is playful on purpose, but it still has a real structure underneath. Find the pattern before you commit.',
      setup: [
        `You are working on "${title}".`,
        'The silliest-looking answer is often bait.',
        'Look for the option that actually matches the rule, clue, or mechanism.',
      ],
      fieldNote: 'Fun tracks still reward clean reasoning more than chaos.',
      mentorHint: 'Ask what rule would let you explain your answer to someone else.',
    },
    University: {
      briefing: 'This question is testing concept-first reasoning. Reduce the problem to the underlying model before choosing an answer.',
      setup: [
        `You are working on "${title}".`,
        'Do not let the terminology intimidate you. Most questions are asking one core thing well.',
        'Figure out the concept first, then check which answer actually expresses it.',
      ],
      fieldNote: 'University-style questions often hide a simple core beneath formal vocabulary.',
      mentorHint: 'Translate the question into plain language before evaluating the choices.',
    },
    'Career Skills': {
      briefing: 'This question is testing practical professional judgment. The best answer should work in the real world, not just in a clever sentence.',
      setup: [
        `You are working on "${title}".`,
        'Look for the option that is defensible, useful, and operationally sound.',
        'Avoid answers that optimize style, speed, or confidence at the expense of process.',
      ],
      fieldNote: 'Career questions usually reward the move that scales and survives review.',
      mentorHint: 'Ask what you would actually want a competent teammate to do here.',
    },
    'Quant Finance': {
      briefing: 'This question is testing quantitative finance knowledge. Evaluate the mathematical principles, assumptions, and practical applications.',
      setup: [
        `You are working on "${title}".`,
        'Identify the core quantitative or mathematical concept before looking at the choices.',
        'Beware of intuitive but incorrect shortcuts, especially in probability and brain teasers.',
      ],
      fieldNote: 'Quant finance questions test both your mathematical rigor and your ability to apply it practically.',
      mentorHint: 'What is the fundamental mathematical or financial principle being tested here?',
    },
    'Extension': {
      briefing: 'This is an advanced extension topic. It requires rigorous logical steps or specialized knowledge beyond the core curriculum.',
      setup: [
        `You are working on "${title}".`,
        'Work through the logic one step at a time.',
        'Do not skip steps or assume common-sense shortcuts; extension topics reward precise reasoning.',
      ],
      fieldNote: 'Extension questions build on core skills by adding complexity or removing obvious constraints.',
      mentorHint: 'Break the problem into its smallest logical parts.',
    },
  }

  return byTopic[topic]
}


export function answerSet(correct: string, wrong: [string, string, string][]): Answer[] {
  return [
    { id: 'a', label: correct, correct: true },
    ...wrong.map(([label, flaw, reframe], index) => ({
      id: ['b', 'c', 'd'][index],
      label,
      correct: false,
      misconceptions: [
        {
          tempting: 'This answer follows a common shortcut, so it feels plausible at first glance.',
          flaw,
          reframe,
        },
      ],
    })),
  ]
}

export function makeSimpleQuestion(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  lesson?: string,
  source?: string,
): Question {
  const scaffold = defaultQuestionScaffold(topic, title, prompt)
  return {
    id,
    kind: 'quick',
    topic,
    chapter,
    source,
    title,
    briefing: scaffold.briefing,
    setup: scaffold.setup,
    prompt,
    fieldNote: scaffold.fieldNote,
    mentorHint: scaffold.mentorHint,
    answers: answerSet(correct, wrong),
    solution: correct,
    lesson,
    xp: 10,
  }
}

export function makeQuestionBank(
  topic: Topic,
  definitions: Array<{
    id: number
    chapter: string
    title: string
    prompt: string
    correct: string
    wrong: [string, string, string][]
    lesson?: string
    source?: string
  }>,
): Question[] {
  return definitions.map((definition) =>
    makeSimpleQuestion(
      definition.id,
      topic,
      definition.chapter,
      definition.title,
      definition.prompt,
      definition.correct,
      definition.wrong,
      definition.lesson,
      definition.source,
    ),
  )
}


export function buildCycledMathQuiz(
  baseId: number,
  briefing: string,
  unitBlueprints: Array<{
    chapter: string
    title: string
    setup: string[]
    prompt: string
    fieldNote: string
    mentorHint: string
    correct: string
    wrong: [string, string, string][]
    source?: string
  }>,
) {
  return Array.from({ length: 50 }, (_, index) => {
    const blueprint = unitBlueprints[index % unitBlueprints.length]
    const cycle = Math.floor(index / unitBlueprints.length) + 1
    const lesson = [
      blueprint.fieldNote,
      blueprint.mentorHint,
      `Correct answer: ${blueprint.correct}.`,
    ].join(' ')
    const question: Question = {
      id: baseId + index,
      kind: index % 10 === 9 ? 'deep' : 'quick',
      topic: 'Mathematics',
      chapter: blueprint.chapter,
      source: blueprint.source,
      title: `${blueprint.title} #${cycle}`,
      briefing,
      setup: blueprint.setup,
      prompt: blueprint.prompt,
      fieldNote: blueprint.fieldNote,
      mentorHint: blueprint.mentorHint,
      answers: answerSet(blueprint.correct, blueprint.wrong),
      solution: blueprint.correct,
      lesson,
      xp: index % 10 === 9 ? 16 : 10,
    }
    return question
  })
}
