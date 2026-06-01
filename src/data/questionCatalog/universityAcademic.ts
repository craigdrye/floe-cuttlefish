import type { Question } from './types'
import { makeQuestionBank } from './base'
import { openTriviaEarthSystemsQuestions } from './openTriviaEarthPhysicsMicroImported'
import { openTriviaAstronomyQuestions } from './openTriviaScienceMicroImported'
import { openTriviaAstronomyExtensionQuestions } from './openTriviaAstronomyExtensionImported'
import { openTriviaCuratedEnvironmentalScienceAdditionalQuestions } from './openTriviaCuratedAdditionalImported'
import { formalLogicOpenLogicBatchQuestions } from './formalLogicOpenLogicBatch'
import {
  openLogicProjectDataStructuresQuestions,
  openLogicProjectFormalLogicQuestions,
  openLogicProjectLogicCriticalThinkingQuestions,
  openLogicProjectPhilosophyQuestions,
} from './openLogicProjectImported'
import {
  logicCsAdditionalDataStructuresQuestions,
  logicCsAdditionalFormalLogicQuestions,
  logicCsAdditionalLogicCriticalThinkingQuestions,
} from './logicCsAdditionalImported'
import { discreteMathematicsStarterQuestions } from './courseExpansionStarterQuestions'
import { formalLogicGeneratedQuestions } from './formalLogicGenerated'
import { formalLogicWorkoutGeneratedQuestions } from './formalLogicWorkoutGenerated'
import { artHistoryWorkoutGeneratedQuestions } from './artHistoryWorkoutGenerated'
import { philosophyWorkoutGeneratedQuestions } from './philosophyWorkoutGenerated'
import { neuroscienceWorkoutGeneratedQuestions } from './neuroscienceWorkoutGenerated'
import { introPsychologyWorkoutGeneratedQuestions } from './introPsychologyWorkoutGenerated'
import { researchMethodsWorkoutGeneratedQuestions } from './researchMethodsWorkoutGenerated'
import { apEnvironmentalScienceExamBatch2Questions } from './apEnvironmentalScienceExamBatch2'
import { apEnvironmentalScienceWorkoutGeneratedQuestions } from './apEnvironmentalScienceWorkoutGenerated'
import { cosmologyAstronomyWorkoutGeneratedQuestions } from './cosmologyAstronomyWorkoutGenerated'
import { cosmologyAstronomyExamBatch2Questions } from './cosmologyAstronomyExamBatch2'
import { dataStructuresWorkoutGeneratedQuestions } from './dataStructuresWorkoutGenerated'
import { internationalRelationsWorkoutGeneratedQuestions } from './internationalRelationsWorkoutGenerated'
import { macroeconomicsWorkoutGeneratedQuestions } from './macroeconomicsWorkoutGenerated'
import { marketingWorkoutGeneratedQuestions } from './marketingWorkoutGenerated'
import { microeconomicsWorkoutGeneratedQuestions } from './microeconomicsWorkoutGenerated'
import { organicChemistryWorkoutGeneratedQuestions } from './organicChemistryWorkoutGenerated'
import { universityComparativePoliticsQuestions } from './practicalPoliticsQuestions'
import {
  highMacroeconomicsHandBankQuestions,
  highMicroeconomicsHandBankQuestions,
} from './highEconomics'

const logicCriticalThinkingTitles = new Set([
  'Argument clue',
  'Logic tool',
  'Logical Validity',
  'Ad Hominem Fallacy',
  'Modus Ponens',
  'JTB Analysis',
  'Gettier Cases',
  'Problem of Induction',
  'Epistemology: Gettier Problem',
  'Logic: Deductive Validity',
])

const moralCrossroadsTitles = new Set([
  'Ethics focus',
  'Utilitarianism',
  'Categorical Imperative',
  'Problem of Evil',
  'Veil of Ignorance',
  'Euthyphro Dilemma',
  'Error Theory',
  "Ethics: Kant's Categorical Imperative",
  'Ethics: Utilitarianism',
  'Political Philosophy',
])

import { UNIVERSITY_SUB_TOPICS, UNIVERSITY_MENTOR_HINTS, UNIVERSITY_CORRECT_SHORTENED } from './universityPolish'
import { polish as runUniversityPolish } from './polishPipeline'

const _universityBundle = [{ subTopics: UNIVERSITY_SUB_TOPICS, mentorHints: UNIVERSITY_MENTOR_HINTS, correctShortened: UNIVERSITY_CORRECT_SHORTENED, source: 'university' }]

const ACADEMIC_TRACK_MENTOR_OPENERS: Record<string, string> = {
  microeconomics: 'Use the micro model first: identify the agent, constraint, marginal tradeoff, and market condition before judging the options.',
  macroeconomics: 'Start from the macro identity or transmission channel in play, then ask whether the prompt is about a level, a rate, a shift, or a policy response.',
  organicChemistry: 'Translate the wording into structure and electron movement before reading the options; organic chemistry rewards mechanism over memorized labels.',
  neuroscience: 'Locate the scale of the question first: molecule, synapse, circuit, brain region, behavior, or measurement method.',
  introToPsychology: 'Separate the psychological construct from the study finding or everyday example, then match the option to the construct rather than the vibe of the story.',
  cosmologyAndAstronomy: 'Anchor the question in the physical scale first: planet, star, galaxy, universe, light, gravity, or time.',
  artHistory: 'Treat the artwork or movement as evidence: look for period, patronage, materials, composition, and cultural purpose before picking a label.',
  apEnvironmentalScience: 'Track the environmental system and the flow through it: energy, matter, population pressure, pollution, feedback, or risk.',
  researchMethods: 'Name the research-design issue before evaluating answers: variable, measurement, sampling, validity, inference, ethics, or replication.',
  philosophy: 'Rebuild the argument in plain language, then separate the conclusion from the premises or thought experiment doing the work.',
  logicCriticalThinking: 'Put the argument into form before judging it; validity, support, assumptions, and fallacies are about structure, not surface plausibility.',
  formalLogic: 'Abstract away the topic and focus on the formal relationship between symbols, quantifiers, conditionals, premises, and conclusion.',
  contemporaryEthics: 'Identify the moral framework or fairness principle being tested, then ask what kind of reason would count within that framework.',
  discreteMath: 'Convert the prompt into the relevant discrete object: set, relation, graph, recurrence, proof pattern, or counting structure.',
  philSenior: 'Treat this as a higher-level philosophy item: identify the debate, then ask what the named view or thought experiment is designed to show.',
  comparativePracticalPolitics: 'Sort the political claim by institution, incentive, actor, and evidence before choosing an answer.',
  dataStructures: 'Ask what operation or invariant the structure is meant to protect, then compare the options against that constraint.',
  internationalRelations: 'Separate the actor, level of analysis, and theory of power or cooperation before choosing among nearby IR terms.',
  marketing: 'Start with the business decision being made: audience, positioning, research, pricing, channel, or metric.',
}

function academicPromptMove(prompt: string): string {
  const lower = prompt.toLowerCase()
  if (/\bnot\b|\bexcept\b|\bleast\b/.test(lower)) {
    return 'Because the wording contains a limiting or negative cue, eliminate the choices that satisfy the ordinary rule and keep the one that breaks it.'
  }
  if (/\baccording to\b|\bargues?\b|\bclaims?\b|\btheory\b|\bmodel\b|\brule\b|\bprinciple\b/.test(lower)) {
    return 'When a named theory or rule appears, ask what distinctive claim it makes and avoid answers that belong to a neighboring framework.'
  }
  if (/\bwhy\b|\bbecause\b|\bprimarily\b|\bmainly\b|\bmost likely\b/.test(lower)) {
    return 'Since this is asking for a reason or mechanism, prefer the option that explains the causal link rather than one that merely names a related fact.'
  }
  if (/\bcalculate\b|\bcompute\b|\bexpected\b|\bprobability\b|\brate\b|\bcomplexity\b|\bpka\b|\bppm\b|\bcm/.test(lower)) {
    return 'Write down the quantity being asked for and the rule that governs it before comparing answer choices.'
  }
  return 'Use the exact wording of the prompt to decide whether it wants a definition, mechanism, comparison, or application.'
}

function buildAcademicMentorHint(trackId: string, question: Question): string {
  const opener = ACADEMIC_TRACK_MENTOR_OPENERS[trackId] ?? 'Use the university context to identify the governing concept before reading the options.'
  const promptMove = academicPromptMove(question.prompt)
  return `${opener} In "${question.chapter}", treat "${question.title}" as the topic boundary so you do not drift into a nearby concept. ${promptMove}`
}

function hasBespokeMentorHint(question: Question): boolean {
  const hint = question.mentorHint?.trim()
  if (!hint) return false

  return ![
    'Translate the question into plain language before evaluating the choices.',
    'Use the exact wording of the prompt to decide whether it wants a definition, mechanism, comparison, or application.',
  ].includes(hint)
}

function enrichUniversityAcademicMentorHints(trackId: string, questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    mentorHint: hasBespokeMentorHint(question) ? question.mentorHint : buildAcademicMentorHint(trackId, question),
  }))
}

function rewritePhilosophyFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `A learner is checking the philosophy idea "${question.title}". Which answer best completes this sentence: "${stem}"?`
}

function philosophyLesson(question: Question): string {
  return `In philosophy, "${question.title}" is useful because it names a recurring question, argument pattern, or debate. Here the key idea is: ${question.solution}. Use the wording of the prompt to decide whether it is asking for a definition, an example, or the claim a philosopher is using the term to make.`
}

function enrichPhilosophyQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewritePhilosophyFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, what is the best answer for the philosophy idea "${question.title}"?`,
    },
    lesson: question.lesson || philosophyLesson(question),
    challengeRating: question.challengeRating ?? (question.chapter === 'Stretch Zone' ? 7 : question.chapter === 'Philosophy of Mind' ? 6 : 5),
  }))
}

function rewriteResearchMethodsFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `A researcher is planning a study and checks the concept "${question.title}". Which answer best completes this sentence: "${stem}"?`
}

function researchMethodsLesson(question: Question): string {
  return `Research methods terms are tools for judging how trustworthy a study is. For "${question.title}", the key idea is: ${question.solution}. When you see this term, ask whether the issue is about defining a question, measuring a concept, sampling people, assigning conditions, making a causal claim, protecting participants, or interpreting data.`
}

function researchMethodsChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone') return 7
  if (['Causality', 'Analysis', 'Open Science', 'Data Quality'].includes(question.chapter)) return 6
  return 5
}

function enrichResearchMethodsQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteResearchMethodsFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, what does the research-methods concept "${question.title}" help a researcher decide?`,
    },
    lesson: question.lesson || researchMethodsLesson(question),
    challengeRating: researchMethodsChallengeRating(question),
  }))
}

function rewriteOrganicChemistryFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `At the lab bench, a learner is using "${question.title}" as a clue about structure or reactivity. Which answer best completes this sentence: "${stem}"?`
}

function organicChemistryLesson(question: Question): string {
  return `Organic chemistry is a pattern-spotting game: structure controls reactivity. For "${question.title}", the key idea is: ${question.solution}. Look for the functional group, electron-rich and electron-poor atoms, steric crowding, stereochemistry, and the reaction conditions before choosing an answer.`
}

function organicChemistryChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone' || question.id >= 16900) return 7
  if (['Substitution', 'Elimination', 'Alkenes', 'Spectroscopy', 'Synthesis', 'Carbonyls'].includes(question.chapter)) return 6
  return 5
}

function enrichOrganicChemistryQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteOrganicChemistryFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, what clue does "${question.title}" give about an organic molecule or reaction?`,
    },
    lesson: question.lesson || organicChemistryLesson(question),
    challengeRating: organicChemistryChallengeRating(question),
  }))
}

function rewriteNeuroscienceFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `A learner is tracing a signal through the nervous system and spots "${question.title}". Which answer best completes this sentence: "${stem}"?`
}

function neuroscienceLesson(question: Question): string {
  return `Neuroscience gets easier when you track the level of the story. For "${question.title}", the key idea is: ${question.solution}. Ask whether the clue is about a neuron part, an ion movement, a synapse, a neurotransmitter, a brain region, a measurement method, or a clinical pattern.`
}

function neuroscienceChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone' || question.id >= 17000) return 7
  if (['Methods', 'Clinical Neuroscience', 'Plasticity', 'Action Potentials', 'Synapses'].includes(question.chapter)) return 6
  return 5
}

function enrichNeuroscienceQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteNeuroscienceFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, what does "${question.title}" tell us about how the nervous system sends, changes, or measures signals?`,
    },
    lesson: question.lesson || neuroscienceLesson(question),
    challengeRating: neuroscienceChallengeRating(question),
  }))
}

function rewriteMarketingFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `A marketer has a tiny budget, a real customer problem, and one smart move to make. For "${question.title}", which answer best completes this idea: "${stem}"?`
}

function marketingLesson(question: Question): string {
  return `Marketing is not just making noise; it is choosing the right customer, promise, channel, and proof. For "${question.title}", the key idea is: ${question.solution}. Ask whether the clue is about who the customer is, what value they want, how the brand should be positioned, how the offer is priced, how the message reaches people, or how the result is measured.`
}

function marketingChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone' || question.id >= 16900) return 7
  if (['Analytics', 'Digital', 'Pricing', 'Strategy'].includes(question.chapter)) return 6
  return 5
}

function enrichMarketingQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteMarketingFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, how would "${question.title}" help a marketer choose customers, shape an offer, or measure whether a campaign worked?`,
    },
    lesson: question.lesson || marketingLesson(question),
    challengeRating: marketingChallengeRating(question),
  }))
}

function rewriteInternationalRelationsFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `Imagine two countries are trying to read each other's next move without a world government to referee the game. For "${question.title}", which answer best completes this idea: "${stem}"?`
}

function internationalRelationsLesson(question: Question): string {
  return `International relations often asks how states cooperate, compete, bargain, and stay secure when no single global authority can enforce every rule. For "${question.title}", the key idea is: ${question.solution}. First decide whether the clue is about power, law, institutions, trade, war, domestic politics, shared norms, or a collective-action problem.`
}

function internationalRelationsChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone' || question.id >= 16800) return 7
  if (['Realism', 'Liberalism', 'Constructivism', 'Security', 'Conflict', 'Political Economy'].includes(question.chapter)) return 6
  return 5
}

function enrichInternationalRelationsQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteInternationalRelationsFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, how would "${question.title}" help explain why countries cooperate, clash, trade, threaten, or build institutions?`,
    },
    lesson: question.lesson || internationalRelationsLesson(question),
    challengeRating: internationalRelationsChallengeRating(question),
  }))
}

function rewriteDataStructuresFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (!prompt.endsWith(':')) return question.prompt

  const stem = prompt.replace(/:$/, '').trim()
  return `A programmer is choosing the right tool before the code gets slow or messy. For "${question.title}", which answer best completes this idea: "${stem}"?`
}

function dataStructuresLesson(question: Question): string {
  return `Data structures are containers with tradeoffs: each one makes some operations cheap and others expensive. For "${question.title}", the key idea is: ${question.solution}. Ask what operation matters most here: access by index, insert/remove order, lookup by key, preserving priority, walking relationships, sorting, searching, or reusing repeated work.`
}

function dataStructuresChallengeRating(question: Question): Question['challengeRating'] {
  if (question.challengeRating) return question.challengeRating
  if (question.chapter === 'Stretch Zone') return 7
  if (['Graphs', 'Trees', 'Heaps', 'Sorting', 'Algorithms', 'Union-Find', 'Complexity'].includes(question.chapter)) return 6
  return 5
}

function enrichDataStructuresQuestions(questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteDataStructuresFragmentPrompt(question),
    alternatePrompts: {
      ...question.alternatePrompts,
      plain:
        question.alternatePrompts?.plain ??
        `In plain language, what job does "${question.title}" do for a programmer choosing a data structure or algorithm?`,
    },
    lesson: question.lesson || dataStructuresLesson(question),
    challengeRating: dataStructuresChallengeRating(question),
  }))
}

function rewriteAcademicFragmentPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (prompt.endsWith('?')) return question.prompt
  if (prompt.endsWith(':')) {
    return `${prompt} Choose the option that makes the concept precise.`
  }
  return `${prompt} Use the clue to choose the strongest explanation.`
}

function academicLesson(trackId: string, question: Question): string {
  const title = question.title || question.chapter || 'this concept'
  const answer = question.solution || 'the best answer'

  if (trackId === 'artHistory') {
    return `Art history questions are about connecting a visual term to the way artists, patrons, and viewers make meaning. For "${title}", the key idea is: ${answer}. Ask whether the clue is about style, technique, period, subject matter, evidence, or museum interpretation.`
  }
  if (trackId === 'cosmologyAndAstronomy') {
    return `Astronomy questions get easier when you locate the scale: planet, small body, star, galaxy, or universe. For "${title}", the key idea is: ${answer}. Look for whether the clue is about light, gravity, motion, distance, composition, or cosmic history.`
  }
  if (trackId === 'introToPsychology') {
    return `Psychology questions usually connect a behavior or mental process to a named mechanism. For "${title}", the key idea is: ${answer}. Ask whether the clue is about learning, memory, development, the brain, social pressure, emotion, or research evidence.`
  }
  if (trackId === 'apEnvironmentalScience') {
    return `Environmental science questions link systems, resources, and human impacts. For "${title}", the key idea is: ${answer}. Track matter, energy, water, populations, feedback loops, pollution, and tradeoffs before choosing an answer.`
  }
  if (trackId === 'formalLogic') {
    return `Logic questions are about structure. For "${title}", the key idea is: ${answer}. Identify the objects being compared, the rule being applied, and whether the issue is syntax, semantics, proof, set membership, or validity.`
  }
  return `This question is asking you to connect a term to the idea it explains. For "${title}", the key idea is: ${answer}. Read the exact wording, name the concept, and avoid nearby answers that belong to a different chapter.`
}

function enrichAcademicQuestionQuality(trackId: string, questions: Question[]): Question[] {
  return questions.map((question) => ({
    ...question,
    prompt: rewriteAcademicFragmentPrompt(question),
    lesson: question.lesson || academicLesson(trackId, question),
  }))
}

export function buildUniversityAcademicQuestionCatalog(): Record<string, Question[]> {
  const catalog: Record<string, Question[]> = {
  // Wave 4 consolidation 2026-05-18: micro/macro hand banks extracted into highEconomics.ts so
  // the HS-tier age-catalog tracks (which share these ids) can route to the same canonical bank.
  microeconomics: [...highMicroeconomicsHandBankQuestions, ...microeconomicsWorkoutGeneratedQuestions],
  macroeconomics: [...highMacroeconomicsHandBankQuestions, ...macroeconomicsWorkoutGeneratedQuestions],
  // [legacy inline blocks removed — see highEconomics.ts]
  organicChemistry: [...makeQuestionBank('University', [
    { id: 16301, chapter: 'Structure, Bonding, and Acid-Base Reasoning', title: 'Carbon fact', prompt: 'Organic chemistry is mainly centered on compounds containing:', correct: 'Carbon', wrong: [['Only iron', 'Iron is not the central atom of organic chemistry.', 'Organic chemistry revolves around carbon compounds.'], ['Only gold', 'Gold is unrelated to the core definition.', 'Choose the atom that forms organic backbones.'], ['Only helium', 'Helium is inert and not central here.', 'Carbon is the key clue.']] },
    { id: 16302, chapter: 'Structure, Bonding, and Acid-Base Reasoning', title: 'Hydrocarbon', prompt: 'A hydrocarbon contains only:', correct: 'Hydrogen and carbon', wrong: [['Hydrogen and oxygen only', 'That would exclude carbon.', 'Hydrocarbons are carbon-hydrogen compounds.'], ['Carbon and sodium', 'Sodium is not part of the definition.', 'Use the word parts hydro and carbon.'], ['Any three random elements', 'The definition is specific.', 'Stick to hydrogen and carbon.']] },
    { id: 16303, chapter: 'Reaction Energy and Mechanism Logic', title: 'Functional group role', prompt: 'A functional group mainly helps identify:', correct: 'A characteristic pattern of reactivity', wrong: [['The classroom number', 'That is unrelated.', 'Functional groups predict behavior.'], ['The exact color of the liquid only', 'Appearance can vary and is not the main point.', 'Reactivity is the important clue.'], ["Only the molecule's boiling kettle", 'That is nonsense here.', 'Think reaction patterns.']] },
    { id: 16304, chapter: 'Nomenclature, Conformation, and Stereochemistry', title: 'Isomer idea', prompt: 'Isomers are compounds that share:', correct: 'The same molecular formula but different arrangements', wrong: [['Different formulas and identical structure', 'That is the opposite of isomerism.', 'Same formula, different arrangement is the classic definition.'], ['No atoms in common', 'They share the same formula.', 'Do not lose the shared composition idea.'], ['Only the same smell', 'Smell is not the defining feature.', 'Use formula plus arrangement.']] },
    { id: 16305, chapter: 'Structure and Bonding', title: 'Carbon Hybridization', prompt: 'What is the hybridization of the carbon atom in methane (CH4)?', correct: 'sp3', wrong: [["sp2", "sp2 hybridization is for carbons with one double bond, like in ethene.", "Methane has four single bonds."], ["sp", "sp hybridization is for carbons with a triple bond or two double bonds.", "Methane's geometry is tetrahedral."], ["p3", "Hybridization involves 's' and 'p' orbitals mixing.", "Think of the four equivalent C-H bonds."]] },
    { id: 16306, chapter: 'Alkanes and Stereochemistry', title: 'IUPAC Nomenclature', prompt: 'What is the IUPAC name for a straight-chain alkane with 5 carbon atoms?', correct: 'Pentane', wrong: [["Butane", "Butane has 4 carbons.", "Prefixes: meth, eth, but, pent..."], ["Hexane", "Hexane has 6 carbons.", "Count the carbon backbone."], ["Propane", "Propane has 3 carbons.", "Use the standard prefix for five."]] },
    { id: 16307, chapter: 'Alkanes and Stereochemistry', title: 'Chirality', prompt: 'A molecule that is not superimposable on its mirror image is called:', correct: 'Chiral', wrong: [["Achiral", "Achiral molecules are identical to their mirror images.", "Chiral comes from the Greek word for hand."], ["Meso", "Meso compounds have chiral centers but are achiral due to internal symmetry.", "This is a broader definition."], ["Isotopic", "Isotopes are atoms with different neutron counts, not a mirror-image property.", "Think of hands (left vs right)."]]},
    { id: 16308, chapter: 'Spectroscopy', title: 'IR Spectroscopy', prompt: 'In an IR spectrum, a broad peak around 3300 cm⁻¹ typically indicates which functional group?', correct: 'Alcohol (OH)', wrong: [["Carbonyl (C=O)", "Carbonyl peaks are sharp and usually around 1700 cm⁻¹.", "Hydrogen bonding makes OH peaks broad."], ["Alkane (C-H)", "C-H stretches are usually just below 3000 cm⁻¹.", "OH is further to the left and much broader."], ["Alkyne (C≡C)", "Triple bonds are usually in the 2100-2200 cm⁻¹ range.", "3300 is the region for O-H or N-H."]] },
    { id: 16309, chapter: 'Substitution and Elimination', title: 'Carbocation Stability', prompt: 'Which of the following carbocations is the most stable?', correct: 'Tertiary (3°)', wrong: [["Primary (1°)", "Primary carbocations have less inductive stabilization and hyperconjugation.", "More alkyl groups help spread out the positive charge."], ["Secondary (2°)", "Secondary is more stable than primary but less than tertiary.", "The more neighbors, the better."], ["Methyl", "A methyl carbocation is the least stable.", "Inductive effects from attached carbons are key."]] },
    { id: 16310, chapter: 'Alkanes and Stereochemistry', title: 'R/S Configuration', prompt: 'When assigning R/S configuration, what is the first step in the Cahn-Ingold-Prelog (CIP) priority rules?', correct: 'Compare the atomic numbers of the atoms directly attached to the chiral center', wrong: [["Compare the total molecular weight of the groups", "Priority is based on atomic number of the first atom, not total mass.", "Higher atomic number gets higher priority."], ["Count the number of hydrogens in each group", "Hydrogen always has the lowest priority (atomic number 1).", "Start at the first point of difference."], ["Check the color of the molecule", "Atomic properties, not physical appearance, determine priority.", "Use the periodic table."]] },
    { id: 16311, chapter: 'Alkanes and Stereochemistry', title: 'Newman Projections', prompt: 'Which conformation of butane is the lowest in energy (most stable)?', correct: 'Anti-staggered', wrong: [["Gauche-staggered", "Gauche has steric strain from bulky groups being 60 degrees apart.", "Anti has them 180 degrees apart."], ["Eclipsed", "Eclipsed conformations have both torsional and steric strain.", "Always less stable than staggered."], ["Totally eclipsed", "This is the highest energy state where the largest groups overlap.", "Maximize the distance between large groups."]] },
    { id: 16312, chapter: 'Substitution and Elimination', title: 'SN2 Characteristics', prompt: 'An SN2 reaction typically results in what stereochemical outcome at the chiral center?', correct: 'Inversion of configuration (Walden inversion)', wrong: [["Racemization", "Racemization (a mix of R and S) is characteristic of SN1 reactions.", "SN2 is concerted and attacks from the backside."], ["Retention of configuration", "The nucleophile replaces the leaving group from the opposite side.", "Configuration is flipped."], ["Formation of a meso compound", "This depends on the whole molecule, but the specific center always inverts.", "Backside attack is the key mechanism."]] },
    { id: 16313, chapter: 'Substitution and Elimination', title: 'Zaitsev\'s Rule', prompt: 'According to Zaitsev\'s rule, the major product of an E2 elimination is usually:', correct: 'The more substituted alkene', wrong: [["The less substituted alkene", "That is the Hofmann product, usually formed with bulky bases.", "Substitution increases alkene stability."], ["The most acidic alkane", "Elimination forms an alkene, not an alkane.", "Think about double bond stability."], ["The product with the most hydrogens", "More substitution means fewer hydrogens on the double bond carbons.", "Stable double bonds have more carbon neighbors."]] },
    { id: 16314, chapter: 'Spectroscopy', title: 'NMR Multiplicity', prompt: 'According to the n+1 rule in ¹H NMR, a proton with 3 equivalent neighboring protons will appear as a:', correct: 'Quartet', wrong: [["Triplet", "A triplet comes from 2 neighbors.", "3 neighbors + 1 = 4."], ["Singlet", "A singlet has no neighbors.", "Check the adjacent carbons."], ["Doublet", "A doublet comes from 1 neighbor.", "Use the n+1 formula."]] },
    { id: 16315, chapter: 'Substitution and Elimination', title: 'Competition (SN1/SN2/E1/E2)', prompt: 'A secondary alkyl halide reacted with a strong, bulky base (like t-BuOK) in a polar aprotic solvent will primarily undergo:', correct: 'E2', wrong: [["SN2", "Strong bulky bases are poor nucleophiles due to steric hindrance, favoring elimination over substitution.", "Secondary substrates are sensitive to base bulk."], ["SN1", "Strong bases favor concerted (bimolecular) pathways.", "SN1 needs a weak nucleophile and stable carbocation."], ["E1", "E1 occurs with weak bases and usually tertiary substrates.", "Strong bases drive the E2 mechanism."]] },
    { id: 16316, chapter: 'Alkanes and Stereochemistry', title: 'Chair Conformations', prompt: 'In the most stable chair conformation of cis-1,2-dimethylcyclohexane:', correct: 'One methyl group is axial and one is equatorial', wrong: [["Both methyl groups are equatorial", "In a 1,2-cis relationship, one must be up and one must be down relative to the plane; on a chair, this means ax/eq or eq/ax.", "Check the geometry of the 1,2 positions."], ["Both methyl groups are axial", "This would be the least stable conformation due to 1,3-diaxial interactions.", "One equatorial is better than none."], ["The ring becomes planar", "Cyclohexane rings are not planar because it would cause significant angle and torsional strain.", "The chair minimizes energy."]] },
    { id: 16317, chapter: 'Structure and Bonding', title: 'Resonance Stability', prompt: 'Which resonance structure is generally considered the most stable (major contributor)?', correct: 'The one with the most atoms having a complete octet', wrong: [["The one with the most formal charges", "Stability is usually higher when formal charges are minimized.", "Octets are more important than charge minimization."], ["The one with a positive charge on oxygen", "Oxygen is highly electronegative and 'prefers' a negative charge unless it has a full octet.", "Check the electronegativities."], ["The one with the fewest double bonds", "More covalent bonds usually increase stability.", "Full octets and more bonds are better."]] },
    { id: 16318, chapter: 'Reactions of Alkenes', title: 'Hydroboration-Oxidation', prompt: 'The hydroboration-oxidation of 1-methylcyclopentene yields which major product?', correct: 'trans-2-methylcyclopentanol (anti-Markovnikov, syn-addition)', wrong: [["1-methylcyclopentanol", "That would be a Markovnikov addition (OH on the more substituted carbon).", "BH3 adds to the less substituted side."], ["cis-2-methylcyclopentanol", "The addition of H and BH2 is syn, but the resulting OH and Methyl end up trans.", "Analyze the syn-addition geometry."], ["2-methylcyclopentanone", "Oxidation of the borane intermediate yields an alcohol, not a ketone.", "The OH is on the less substituted carbon."]] },
    { id: 16319, chapter: 'Reactions of Alkenes', title: 'Synthesis Strategy', prompt: 'To convert 1-bromobutane into 1-butyne, which sequence of reagents is most effective?', correct: '1. t-BuOK; 2. Br2; 3. Excess NaNH2', wrong: [["1. NaOH; 2. H2SO4; 3. Heat", "NaOH would give an alcohol, not an alkyne.", "You need to form a double bond first, then a dihalide."], ["1. NaNH2; 2. H2", "NaNH2 is a base, but it won't form an alkyne from an alkane in one step.", "Alkyne synthesis usually goes through a dihalide elimination."], ["1. HBr; 2. Mg/Ether", "This would make a Grignard reagent, not an alkyne.", "Think elimination and dihalogenation."]] },
    { id: 16320, chapter: 'Spectroscopy', title: 'Structure Elucidation', prompt: 'A compound with formula C4H8O has a strong IR peak at 1715 cm⁻¹ and a singlet at 2.1 ppm (3H) in ¹H NMR. It is likely:', correct: '2-butanone', wrong: [["Butanal", "Aldehydes have a distinct C-H peak in IR around 2700-2800 cm⁻¹ and an NMR signal at 9-10 ppm.", "The singlet at 2.1 is characteristic of a methyl ketone."], ["Cyclobutanol", "Alcohols have an OH peak around 3300 cm⁻¹, and there is no carbonyl peak at 1715.", "The IR says ketone or aldehyde."], ["Tetrahydrofuran (THF)", "Ethers lack a carbonyl peak at 1715 cm⁻¹.", "Look for the C=O stretch."]] },
    { id: 16321, chapter: 'Reactions of Alkenes', title: 'E/Z Nomenclature', prompt: 'In (E)-3-methyl-2-pentene, where are the higher-priority groups located relative to the double bond?', correct: 'On opposite sides (trans-like)', wrong: [["On the same side (cis-like)", "That would be the (Z) isomer (Zusammen = together).", "(E) comes from Entgegen (opposite)."], ["Attached to the same carbon", "Groups are prioritized on each end of the double bond.", "Compare the two groups on C2 and the two on C3."], ["In the same plane", "Double bonds are always planar; the nomenclature describes the orientation in that plane.", "Use the CIP rules for each carbon."]] },
    { id: 16322, chapter: 'Stretch Zone', title: 'Diels-Alder Stereochemistry', prompt: 'The Diels-Alder reaction of 1,3-butadiene and maleic anhydride typically favors the "endo" product because of:', correct: 'Secondary orbital interactions in the transition state', wrong: [["Steric hindrance being minimized", "Actually, the endo product is often more sterically crowded.", "The electronic effect dominates in the transition state."], ["The reaction being reversible", "Most Diels-Alder reactions are kinetically controlled to give the endo product.", "Endo is the faster-forming product."], ["The use of a catalyst", "The endo rule applies even to uncatalyzed thermal reactions.", "It's an intrinsic orbital property."]] },
    { id: 16323, chapter: 'Structure and Bonding', title: 'pKa Prediction', prompt: 'Which of the following has the lowest pKa (is the strongest acid)?', correct: 'Trichloroacetic acid (Cl3CCOOH)', wrong: [["Acetic acid (CH3COOH)", "Chlorine atoms are electron-withdrawing and stabilize the conjugate base via induction.", "Induction increases acidity."], ["Ethanol (CH3CH2OH)", "Alcohols are much weaker acids than carboxylic acids.", "Compare the stability of the conjugate bases."], ["Trifluoroethanol (CF3CH2OH)", "While more acidic than ethanol, it is still less acidic than trichloroacetic acid because the carboxyl group stabilizes the charge by resonance.", "Resonance usually beats induction."]] },
    { id: 16324, chapter: 'Reactions of Alkenes', title: 'Epoxidation', prompt: 'The reaction of trans-2-butene with mCPBA (meta-chloroperoxybenzoic acid) yields:', correct: 'trans-2,3-dimethyloxirane (a racemic mixture)', wrong: [["cis-2,3-dimethyloxirane (a meso compound)", "Epoxidation is a syn-addition; the stereochemistry of the alkene is preserved.", "Trans alkene stays trans in the ring."], ["Butane-2,3-diol", "mCPBA forms an epoxide, not a diol.", "Acidic workup of the epoxide would give the diol."], ["2-butanone", "This is an addition reaction, not a rearrangement to a ketone.", "The double bond is converted to a three-membered ring."]] },
    { id: 16901, chapter: "Stretch Zone", title: "Stereochemistry: Chirality", prompt: "A molecule with two chiral centers that is superimposable on its mirror image is called:", correct: "A meso compound.", wrong: [["An enantiomer.", "Enantiomers are non-superimposable mirror images.", "It has a plane of symmetry."], ["A diastereomer.", "Diastereomers are non-mirror image stereoisomers.", "Meso compounds are achiral."], ["A racemic mixture.", "A racemic mixture is a 50/50 mix of two enantiomers.", "This is a single achiral molecule."]] },
    { id: 16902, chapter: "Stretch Zone", title: "Mechanisms: SN2", prompt: "The rate of an SN2 reaction is heavily dependent on:", correct: "Steric hindrance at the electrophilic carbon and the concentration of the nucleophile.", wrong: [["Carbocation stability.", "SN2 does not form a carbocation intermediate; SN1 does.", "It is a concerted, one-step mechanism."], ["The concentration of the electrophile only.", "It is a bimolecular reaction, so both concentrations matter.", "Rate = k[E][Nu]."], ["The use of a protic solvent.", "Protic solvents slow down SN2 reactions by solvating the nucleophile.", "Sterics dictate the backside attack."]] },
    { id: 16903, chapter: "Stretch Zone", title: "Mechanisms: E2", prompt: "For an E2 elimination to occur on a cyclohexane ring, the leaving group and the beta-hydrogen must be:", correct: "Anti-periplanar and both in axial positions.", wrong: [["Syn-periplanar and both in equatorial positions.", "They must be 180 degrees apart.", "Equatorial positions cannot be anti-periplanar to each other."], ["Gauche to each other.", "That is a 60-degree angle, unsuitable for the concerted mechanism.", "Think trans-diaxial."], ["Both attached to the same carbon.", "Elimination requires a beta-hydrogen on an adjacent carbon.", "The double bond forms between alpha and beta carbons."]] },
    { id: 16904, chapter: "Stretch Zone", title: "Aromaticity: Huckel's Rule", prompt: "For a compound to be aromatic, it must be cyclic, planar, fully conjugated, and have how many pi electrons?", correct: "4n + 2", wrong: [["4n", "That is the rule for antiaromatic compounds.", "Think of benzene, which has 6 pi electrons (n=1)."], ["2n", "That is not a rule in aromaticity.", "The formula requires + 2."], ["An odd number.", "Pi electrons come in pairs.", "Benzene has 6, naphthalene has 10."]] },
    { id: 16905, chapter: "Stretch Zone", title: "Spectroscopy: NMR", prompt: "In H-NMR spectroscopy, a signal split into a quartet indicates that the proton is adjacent to:", correct: "Three equivalent neighboring protons.", wrong: [["Four equivalent neighboring protons.", "The n+1 rule dictates the splitting pattern.", "n neighbors give n+1 peaks."], ["Two equivalent neighboring protons.", "Two neighbors would produce a triplet.", "n+1 = 4, so n = 3."], ["An electronegative atom like oxygen.", "That affects chemical shift (deshielding), not splitting.", "Look at adjacent carbons."]] },
    { id: 16906, chapter: "Stretch Zone", title: "Reactions: Diels-Alder", prompt: "The Diels-Alder reaction is best described as:", correct: "A [4+2] concerted cycloaddition between a diene and a dienophile.", wrong: [["A step-wise radical substitution.", "It is concerted and pericyclic.", "There are no intermediates."], ["A nucleophilic acyl substitution.", "It forms a cyclic system, usually a cyclohexene ring.", "It involves pi electrons reacting in a ring."], ["An electrophilic aromatic substitution.", "It does not require an aromatic ring.", "It forms a six-membered ring."]] },
    { id: 16907, chapter: "Stretch Zone", title: "Carbonyl Chemistry: Aldol Condensation", prompt: "The driving force for the dehydration step in an aldol condensation is:", correct: "The formation of a highly stable conjugated alpha, beta-unsaturated carbonyl system.", wrong: [["The formation of a carbocation.", "Dehydration usually proceeds via an E1cB mechanism under basic conditions.", "Conjugation lowers the overall energy."], ["The release of a molecule of hydrogen gas.", "Water is released, not hydrogen gas.", "Look at the double bond placement."], ["Steric strain relief.", "The product is more stable due to electronics (conjugation), not just sterics.", "Pi bonds align."]] },
    { id: 16908, chapter: "Stretch Zone", title: "Carboxylic Acids: Fischer Esterification", prompt: "Fischer esterification of a carboxylic acid with an alcohol is an equilibrium process. How is the yield of ester typically maximized?", correct: "By adding excess alcohol or continuously removing water.", wrong: [["By cooling the reaction to 0\u00b0C.", "It is typically refluxed (heated) to drive the reaction.", "Apply Le Chatelier's principle."], ["By adding excess water.", "Adding water drives the equilibrium backward to the carboxylic acid.", "Water is a product."], ["By using a strong base catalyst.", "Fischer esterification is strictly acid-catalyzed.", "Base would deprotonate the acid, halting the reaction."]] },
    { id: 16909, chapter: "Stretch Zone", title: "Mechanisms: EAS", prompt: "A nitro group (-NO2) on a benzene ring directs incoming electrophiles to which position?", correct: "Meta, because it is strongly electron-withdrawing and deactivates the ortho/para positions.", wrong: [["Ortho/Para, because it donates electron density.", "It has a full positive charge on nitrogen; it withdraws electrons.", "Draw the resonance structures."], ["Meta, because it is an electron-donating group.", "It is meta-directing, but because it is withdrawing.", "Deactivators (except halogens) are meta directors."], ["It prevents all substitution entirely.", "It heavily deactivates the ring, but reactions can still occur under forcing conditions.", "The meta position is simply the least deactivated."]] },
    { id: 16910, chapter: "Stretch Zone", title: "Grignard Reagents", prompt: "Grignard reagents are incompatible with which of the following functional groups?", correct: "Carboxylic acids, because the Grignard reagent will act as a base and deprotonate the acid instead of acting as a nucleophile.", wrong: [["Ethers, because they form an explosive complex.", "Ethers (like THF or diethyl ether) are the standard solvents for Grignards.", "Grignards are extremely strong bases."], ["Ketones, because they undergo elimination.", "Ketones are standard electrophiles for Grignard addition.", "Acid-base chemistry is much faster than nucleophilic attack."], ["Alkanes, because they polymerize.", "Alkanes are inert to Grignards.", "Look for acidic protons."]] },
  ]), ...organicChemistryWorkoutGeneratedQuestions],
  neuroscience: [...makeQuestionBank('University', [
    { id: 16401, chapter: 'Neural Cells, Neuroanatomy, and Organization', title: 'Neuron job', prompt: 'A neuron primarily helps the body:', correct: 'Send and process signals', wrong: [['Digest food directly', "Digestion is not the neuron's main role.", 'Neurons are communication cells.'], ['Grow tree bark', 'That is unrelated.', 'Focus on signaling.'], ['Turn bones into cartilage', 'That is not nervous system function.', 'Use the communication idea.']] },
    { id: 16402, chapter: 'Synapses, Neurotransmitters, and Neuropharmacology', title: 'Synapse clue', prompt: 'A synapse is the place where:', correct: 'One neuron communicates with another cell', wrong: [['Blood is made', 'That happens in bone marrow, not at synapses.', 'A synapse is a communication junction.'], ['Teeth are repaired', 'That is unrelated.', 'Think cell-to-cell signal transfer.'], ['Bones lengthen overnight', 'That is not a neural process.', 'Stay with communication between cells.']] },
    { id: 16403, chapter: 'Neural Cells, Neuroanatomy, and Organization', title: 'Brain region', prompt: 'The cerebrum is strongly associated with:', correct: 'Higher thinking and conscious processing', wrong: [['Only fingernail growth', 'That is unrelated.', 'Cerebrum is a major thinking center.'], ['Only red blood cell count', 'That is not its main function.', 'Keep the brain-role mapping clear.'], ['Photosynthesis', 'That is plant biology, not neuroscience.', 'Use the higher-processing clue.']] },
    { id: 16404, chapter: 'Synapses, Neurotransmitters, and Neuropharmacology', title: 'Neurotransmitter role', prompt: 'A neurotransmitter is best described as:', correct: 'A chemical messenger used in neural communication', wrong: [['A bone in the wrist', 'That is anatomy, not neural chemistry.', 'Neurotransmitters carry signals chemically.'], ['A type of microscope', 'That is unrelated.', 'Think messenger molecule.'], ['A weather system', 'That is not biology.', 'Use the communication function.']] },
    { id: 16405, chapter: 'Cognitive Neuroscience', title: 'Hippocampus Function', prompt: 'The primary role of the hippocampus in the brain is:', correct: 'Formation of new declarative memories', wrong: [["Direct control of muscle movement", "The motor cortex and cerebellum handle movement.", "Think of Patient H.M. who lost memory after hippocampal removal."], ["Regulation of heartbeat and breathing", "The brainstem (medulla) controls these autonomic functions.", "The hippocampus is part of the limbic system."], ["Primary processing of visual information", "The occipital lobe handles vision.", "Hippocampus = memory map."]] },
    { id: 16406, chapter: 'Neuroanatomy', title: 'Neuron Structure', prompt: 'Which part of the neuron is primarily responsible for receiving incoming signals from other neurons?', correct: 'Dendrites', wrong: [["Axon", "The axon carries signals away from the cell body.", "Dendrites are like \"ears\" for signals."], ["Axon Hillock", "The hillock is where the decision to fire an action potential is made.", "It is the start of the axon."], ["Terminal Boutons", "These are at the end of the axon and release neurotransmitters.", "Receiving happens at the other end."]] },
    { id: 16407, chapter: 'Synaptic Transmission', title: 'Major Neurotransmitters', prompt: 'What is the primary excitatory neurotransmitter in the vertebrate central nervous system?', correct: 'Glutamate', wrong: [["GABA", "GABA is the primary inhibitory neurotransmitter.", "Glutamate \"excites\" neurons."], ["Serotonin", "Serotonin is a neuromodulator involved in mood and sleep.", "Glutamate is the main fast-acting excitatory signal."], ["Dopamine", "Dopamine is involved in reward and motor control.", "Think of the most abundant excitatory signal."]] },
    { id: 16408, chapter: 'Neuroanatomy', title: 'Brain Lobes', prompt: 'Which lobe of the brain is most associated with executive functions like planning and decision-making?', correct: 'Frontal Lobe', wrong: [["Occipital Lobe", "Occipital is for vision.", "Frontal is at the \"front\" for planning."], ["Temporal Lobe", "Temporal is for hearing and memory.", "Decision-making happens in the prefrontal cortex."], ["Parietal Lobe", "Parietal is for sensory integration and spatial awareness.", "Executive function is frontal."]] },
    { id: 16409, chapter: 'Neurophysiology', title: 'Myelin Function', prompt: 'Myelin sheaths speed up signal conduction through a process called:', correct: 'Saltatory conduction', wrong: [["Slow-wave propagation", "Myelin actually makes signals much faster.", "Signals \"jump\" between nodes."], ["Chemical diffusion", "Conduction is electrical; diffusion is too slow for long axons.", "Think of the \"saltare\" (to jump)."], ["Active transport", "Active transport moves molecules across membranes, but doesn't explain the speed of the impulse.", "The gaps are called Nodes of Ranvier."]] },
    { id: 16410, chapter: 'Neurophysiology', title: 'Na+/K+ Pump', prompt: 'The sodium-potassium pump (Na+/K+-ATPase) maintains the resting potential by pumping:', correct: '3 Na+ out for every 2 K+ in', wrong: [["2 Na+ out for every 3 K+ in", "The pump moves more positive charge out than in, helping keep the inside negative.", "3-out, 2-in."], ["1 Na+ out for every 1 K+ in", "This would be electrically neutral.", "It must be asymmetrical to maintain the gradient."], ["3 K+ out for every 2 Na+ in", "Sodium is high outside; the pump keeps it that way by pumping it out.", "Sodium (Na) starts with N, and is pumped out (o)."]] },
    { id: 16411, chapter: 'Synaptic Transmission', title: 'Receptor Types', prompt: 'Which type of receptor acts faster because it is itself an ion channel?', correct: 'Ionotropic receptor', wrong: [["Metabotropic receptor", "Metabotropic receptors use G-proteins and second messengers, making them slower.", "Ionotropic = ion-channel-linked."], ["G-protein coupled receptor (GPCR)", "GPCR is another name for a metabotropic receptor.", "Think \"ligand-gated ion channel\"."], ["Nuclear receptor", "These involve gene transcription and are the slowest of all.", "Ionotropic is the \"fast\" synaptic transmission."]] },
    { id: 16412, chapter: 'Cognitive Neuroscience', title: 'Language Areas', prompt: 'A patient who can understand speech but has great difficulty producing it likely has a lesion in:', correct: 'Broca\'s Area', wrong: [["Wernicke's Area", "Wernicke's aphasia involves fluent but nonsensical speech (\"word salad\").", "Broca = Broken speech."], ["The Primary Visual Cortex", "This would affect vision, not language production.", "Language is usually in the left hemisphere."], ["The Cerebellum", "The cerebellum coordinates movement but isn't the primary site for language production.", "Production of words is Broca's."]] },
    { id: 16413, chapter: 'Neurophysiology', title: 'Refractory Periods', prompt: 'The absolute refractory period is primarily caused by:', correct: 'Inactivation of voltage-gated Na+ channels', wrong: [["The cell being too negative", "That describes the relative refractory period (hyperpolarization).", "Sodium channels must reset before another spike is possible."], ["The Na+/K+ pump stopping", "The pump works constantly and doesn't cause the refractory period.", "It's about the state of the channels."], ["Too much neurotransmitter in the cleft", "Refractory periods are a property of the axon membrane, not the synapse.", "Think of the h-gate closing."]] },
    { id: 16414, chapter: 'Synaptic Transmission', title: 'Neurotransmitter Release', prompt: 'Which ion is directly responsible for triggering the fusion of synaptic vesicles with the presynaptic membrane?', correct: 'Calcium (Ca2+)', wrong: [["Sodium (Na+)", "Sodium causes the depolarization that opens the calcium channels, but isn't the final trigger.", "Calcium influx is the key step."], ["Potassium (K+)", "Potassium usually exits the cell to repolarize it.", "Calcium is the signal for exocytosis."], ["Chloride (Cl-)", "Chloride is usually inhibitory.", "Think of the voltage-gated Ca2+ channels at the terminal."]] },
    { id: 16415, chapter: 'Neurophysiology', title: 'Nernst Equation', prompt: 'If the concentration of K+ is 100 mM inside and 10 mM outside, what is the approximate equilibrium potential for K+ at body temperature?', correct: '-61 mV', wrong: [["+61 mV", "Potassium is positive and higher inside, so it will flow out, leaving the inside negative.", "Log(out/in) = Log(0.1) = -1."], ["0 mV", "Equilibrium potentials only occur when there is no concentration gradient or an opposing electrical force.", "The gradient is 10:1."], ["-90 mV", "-90 mV is the typical resting potential, which is close to but not identical to the K+ equilibrium.", "61 * log(10/100) = -61."]] },
    { id: 16416, chapter: 'Cognitive Neuroscience', title: 'Molecular Basis of LTP', prompt: 'During Long-Term Potentiation (LTP), the increase in synaptic strength is primarily due to:', correct: 'Insertion of additional AMPA receptors into the postsynaptic membrane', wrong: [["Destruction of NMDA receptors", "NMDA receptors are essential for triggering LTP, not for the lasting strength increase.", "AMPA receptors handle the bulk of the EPSP."], ["The neuron growing a second nucleus", "Neurons don't grow new nuclei.", "Plasticity is at the synapse level."], ["Decreasing the amount of Glutamate released", "LTP is usually postsynaptic (though presynaptic components exist).", "Think of increased sensitivity to Glutamate."]] },
    { id: 16417, chapter: 'Sensory Systems', title: 'Phototransduction', prompt: 'In the dark, vertebrate photoreceptors (rods and cones) are:', correct: 'Depolarized and continuously releasing glutamate', wrong: [["Hyperpolarized and silent", "Light actually causes hyperpolarization in vertebrate eyes.", "Darkness = \"on\" state for release."], ["Firing rapid action potentials", "Photoreceptors are graded-potential cells; they don't fire action potentials.", "They use continuous release."], ["Inactivated by rhodopsin", "Rhodopsin is activated by light, not darkness.", "cGMP levels are high in the dark, keeping channels open."]] },
    { id: 16418, chapter: 'Synaptic Transmission', title: 'SNARE Proteins', prompt: 'The primary role of the SNARE protein complex in the synapse is to:', correct: 'Pull the vesicle and presynaptic membrane together for fusion', wrong: [["Synthesize neurotransmitters", "Enzymes in the cytoplasm or mitochondria do this.", "SNAREs are \"docking\" proteins."], ["Pump ions back into the vesicle", "V-ATPases handle vesicle acidification and loading.", "Think of a winch pulling the vesicle to the wall."], ["Act as a receptor for Dopamine", "SNAREs are intracellular structural proteins, not receptors.", "They respond to the Calcium sensor (Synaptotagmin)."]]},
    { id: 16419, chapter: 'Sensory Systems', title: 'Basal Ganglia Circuit', prompt: 'In the basal ganglia "direct pathway", the net effect on the thalamus (and thus motor output) is:', correct: 'Disinhibition (Excitation)', wrong: [["Increased inhibition (Suppression)", "The direct pathway inhibits an inhibitor, leading to excitation.", "Direct = Go; Indirect = No-go."], ["Direct electrical connection", "The connection is chemical (GABA and Glutamate).", "Think of the \"double negative\" logic."], ["Bypassing the motor cortex", "The basal ganglia project back to the cortex via the thalamus.", "They modulate, not bypass."]] },
    { id: 16420, chapter: 'Neuroanatomy', title: 'Homunculus Organization', prompt: 'On the somatosensory homunculus, why are the hands and lips represented by much larger cortical areas than the back?', correct: 'They have a much higher density of sensory receptors and smaller receptive fields', wrong: [["They are physically closer to the brain", "Physical distance doesn't determine cortical representation.", "Representation is based on functional importance."], ["They use more blood flow during movement", "fMRI measures blood flow, but the map itself is built on receptor density.", "Think of fine motor control vs broad sensation."], ["The back is processed in the cerebellum instead", "All somatosensory info goes to the parietal lobe map.", "Magnification reflects sensitivity."]] },
    { id: 16421, chapter: 'Cognitive Neuroscience', title: 'NMDA Coincidence Detection', prompt: 'The NMDA receptor is called a "coincidence detector" because it only opens when:', correct: 'Glutamate is present AND the postsynaptic membrane is already depolarized', wrong: [["Two different neurotransmitters bind simultaneously", "It only binds Glutamate (and Glycine).", "The second \"event\" is electrical."], ["The neuron fires an action potential AND it is daytime", "Circadian rhythms affect the brain, but not the NMDA channel mechanism directly.", "It requires Magnesium to be expelled."], ["Calcium is high inside AND outside", "Calcium flows through it, it isn't the trigger for opening.", "Depolarization removes the Mg2+ block."]] },
    { id: 16422, chapter: 'Stretch Zone', title: 'fMRI BOLD Signal', prompt: 'The fMRI BOLD (Blood-Oxygen-Level-Dependent) signal actually measures:', correct: 'The ratio of oxygenated to deoxygenated hemoglobin', wrong: [["Direct electrical activity of neurons", "fMRI is an indirect measure; EEG measures electrical activity.", "Neurons don't contain hemoglobin."], ["The number of action potentials per second", "It measures the metabolic response to neural activity, which is a proxy.", "The delay is about 5-6 seconds."], ["The amount of glucose consumed by the brain", "PET scans often use glucose tracers; fMRI focuses on oxygen levels.", "Active neurons demand more oxygenated blood."]] },
    { id: 16423, chapter: 'Cognitive Neuroscience', title: 'Neurodegeneration', prompt: 'Parkinson\'s Disease is primarily characterized by the death of neurons in the:', correct: 'Substantia Nigra', wrong: [["Hippocampus", "Hippocampal cell death is more characteristic of Alzheimer's.", "Substantia Nigra = Black substance."], ["Amygdala", "The amygdala is for emotion; its dysfunction is linked to anxiety/fear disorders.", "Parkinson's starts with motor issues."], ["Prefrontal Cortex", "This is linked to executive dysfunction and personality changes.", "Think Dopamine production centers."]] },
    { id: 16424, chapter: 'Synaptic Transmission', title: 'Summation', prompt: 'If a neuron receives three excitatory inputs (EPSPs) at the exact same location but staggered in time, this is an example of:', correct: 'Temporal summation', wrong: [["Spatial summation", "Spatial summation is inputs from different locations arriving at the same time.", "Temporal = time."], ["Inhibitory cancellation", "EPSPs are excitatory; they don't cancel each other.", "They add up toward the threshold."], ["Action potential refractory", "Summation happens before the action potential is triggered.", "Think \"time\" (temporal)."]]},
    { id: 17001, chapter: "Stretch Zone", title: "Action Potentials", prompt: "The absolute refractory period of a neuron is primarily caused by:", correct: "The inactivation of voltage-gated sodium channels.", wrong: [["The delayed closing of potassium channels.", "That causes the relative refractory period (hyperpolarization).", "The sodium channels plug themselves with an inactivation gate."], ["The depletion of ATP in the sodium-potassium pump.", "The pump works continuously and slowly; it doesn't cause the rapid refractory period.", "It happens immediately after the peak of the action potential."], ["The physical exhaustion of neurotransmitters.", "That is synaptic fatigue, not the axonal refractory period.", "Think ion channels."]] },
    { id: 17002, chapter: "Stretch Zone", title: "Synaptic Transmission", prompt: "The primary role of the SNARE complex in the presynaptic terminal is to:", correct: "Mediate the fusion of synaptic vesicles with the presynaptic membrane upon calcium entry.", wrong: [["Synthesize neurotransmitters.", "Enzymes do this, not SNARE proteins.", "It's about vesicle release."], ["Reuptake neurotransmitters from the cleft.", "Transporters (like SERT or DAT) handle reuptake.", "It 'snares' the vesicle to the membrane."], ["Generate the action potential.", "Voltage-gated ion channels do that.", "It facilitates exocytosis."]] },
    { id: 17003, chapter: "Stretch Zone", title: "Neuroanatomy: Basal Ganglia", prompt: "The indirect pathway of the basal ganglia serves primarily to:", correct: "Inhibit competing or unwanted motor movements.", wrong: [["Facilitate and execute voluntary movement.", "That is the role of the direct pathway.", "It acts as a 'brake'."], ["Process auditory stimuli.", "The basal ganglia are primarily motor/cognitive.", "It sends inhibitory signals to the thalamus."], ["Control autonomic functions like heart rate.", "The brainstem handles that.", "Think Parkinson's and Huntington's diseases."]] },
    { id: 17004, chapter: "Stretch Zone", title: "Sensory Systems: Phototransduction", prompt: "In the dark, photoreceptor cells (rods) are continuously releasing glutamate because:", correct: "High levels of cGMP keep cyclic nucleotide-gated (CNG) sodium/calcium channels open, depolarizing the cell.", wrong: [["Light directly closes potassium channels.", "Light activates rhodopsin, which activates phosphodiesterase to break down cGMP.", "The 'dark current' is a depolarizing current."], ["Glutamate is required to maintain the physical structure of the retina.", "It is a neurotransmitter signaling 'darkness' to bipolar cells.", "Photoreceptors are depolarized in the dark."], ["They are undergoing apoptosis.", "This is normal physiological function.", "cGMP is the key messenger."]] },
    { id: 17005, chapter: "Stretch Zone", title: "Memory: LTP", prompt: "The NMDA receptor acts as a coincidence detector in LTP because it requires both:", correct: "Glutamate binding and postsynaptic depolarization to expel the magnesium block.", wrong: [["GABA and calcium binding.", "It is a glutamate receptor.", "It needs pre- and post-synaptic activity simultaneously."], ["ATP and sodium entry.", "It allows calcium entry, not just sodium.", "The magnesium ion literally plugs the pore at resting potential."], ["Presynaptic inhibition and postsynaptic excitation.", "It requires excitation on both sides (Hebb's rule).", "Depolarization removes the Mg2+ block."]] },
    { id: 17006, chapter: "Stretch Zone", title: "Neurotransmitters: GABA", prompt: "GABA-A receptors mediate fast inhibitory synaptic transmission by:", correct: "Opening chloride channels, leading to hyperpolarization of the postsynaptic membrane.", wrong: [["Opening sodium channels.", "Sodium entry causes depolarization (excitation).", "Chloride is negatively charged."], ["Activating G-proteins to close potassium channels.", "That describes GABA-B receptors (which are metabotropic and open K+ channels).", "GABA-A is ionotropic (fast)."], ["Blocking calcium entry directly.", "It hyperpolarizes the cell away from the action potential threshold.", "Cl- flows in."]] },
    { id: 17007, chapter: "Stretch Zone", title: "Development: Growth Cones", prompt: "Axonal growth cones navigate toward their targets by responding to:", correct: "Attractive and repulsive guidance cues (like netrins and semaphorins) in the extracellular environment.", wrong: [["Magnetic fields generated by the target cells.", "The brain does not use magnetism for axon guidance.", "They use chemical gradients."], ["Pre-existing myelin sheaths.", "Myelination happens after the axons reach their targets.", "Think chemotaxis."], ["Random trial and error until they hit the right spot.", "The wiring is highly specific and guided.", "Filopodia sample the chemical environment."]] },
    { id: 17008, chapter: "Stretch Zone", title: "Cortical Organization", prompt: "The homunculus in the primary somatosensory cortex demonstrates that:", correct: "The area of cortex dedicated to a body part is proportional to its sensory receptor density, not its physical size.", wrong: [["The cortex perfectly mirrors the physical proportions of the body.", "The hands and lips are massively overrepresented.", "It represents tactile acuity."], ["Only the arms and legs are mapped in the cortex.", "The entire body surface is mapped.", "Think of the two-point discrimination threshold."], ["The map is completely random and unstructured.", "It is topographically organized (somatotopy).", "More receptors = more cortical real estate."]] },
    { id: 17009, chapter: "Stretch Zone", title: "Motor Systems: Cerebellum", prompt: "Damage to the cerebellum typically results in:", correct: "Ataxia, characterized by uncoordinated and inaccurate voluntary movements.", wrong: [["Complete paralysis.", "Paralysis is caused by motor cortex or spinal cord damage.", "The cerebellum coordinates, it doesn't initiate."], ["Resting tremors.", "Resting tremors are typical of Parkinson's (basal ganglia). Cerebellar damage causes intention tremors.", "It calibrates movement in real-time."], ["Loss of all sensation.", "The cerebellum is a motor structure.", "Think 'clumsiness' or 'drunken gait'."]] },
    { id: 17010, chapter: "Stretch Zone", title: "Glial Cells", prompt: "Astrocytes play a critical role at the tripartite synapse by:", correct: "Clearing excess neurotransmitters like glutamate from the synaptic cleft to prevent excitotoxicity.", wrong: [["Myelinating axons in the central nervous system.", "Oligodendrocytes do that.", "Astrocytes regulate the chemical environment."], ["Firing action potentials to boost the signal.", "Astrocytes do not fire action potentials.", "They are support cells."], ["Acting as the primary immune cells of the brain.", "Microglia are the immune cells.", "They use transporters to vacuum up glutamate."]] },
  ]), ...neuroscienceWorkoutGeneratedQuestions],
  introToPsychology: introPsychologyWorkoutGeneratedQuestions,
  researchMethods: [...makeQuestionBank('University', [
    { id: 16501, chapter: 'Research Questions and Claims', title: 'Hypothesis', prompt: 'A hypothesis is:', correct: 'A testable statement or prediction', wrong: [['A final proven law', 'Hypotheses are tested, not assumed proven.', 'Think testable starting claim.'], ['A list of every citation', 'That is bibliography work, not hypothesis.', 'Keep method pieces separate.'], ['A random decoration in a paper', 'That is unrelated.', 'Research starts with a testable idea.']] },
    { id: 16502, chapter: 'Measurement and Data Collection', title: 'Data type', prompt: 'Quantitative data is expressed using:', correct: 'Numbers and measurements', wrong: [['Only poems', 'Poems are qualitative narrative, not quantitative.', 'Quantitative means quantity/numbers.'], ['Only hand signals', 'That is a communication method, not a data type.', 'Focus on the numerical aspect.'], ['Only invisible ink', 'That is about secrecy, not data type.', 'Choose the numerical clue.']] },
    { id: 16503, chapter: 'Research Design and Validity', title: 'Variable clue', prompt: 'The variable you change to see its effect is the:', correct: 'Independent variable', wrong: [['The weather variable', 'Unless you are a weather researcher, this is too narrow.', 'Think of the one you manipulate.'], ['The constant variable', 'Constants stay the same.', 'Independent variables are changed.'], ['The dependent variable', 'The dependent variable is the outcome you measure.', 'Focus on the one you control.']] },
    { id: 16504, chapter: 'Sampling, Recruitment, and Power', title: 'Sample idea', prompt: 'A sample is a subset of:', correct: 'A larger population', wrong: [['Only one single atom', 'A sample is usually a group of subjects.', 'Think of a representative subset.'], ['The planet Jupiter', 'Unless you study Jupiter, this is too broad.', 'Use the population-subset definition.'], ['Every person who ever lived', 'That is the entire population of history.', 'A sample is a smaller, manageable group.']] },
    { id: 16505, chapter: 'Foundations of Research', title: 'Independent Variable', prompt: 'In an experiment testing the effect of caffeine on test scores, caffeine is the:', correct: 'Independent Variable', wrong: [["Dependent Variable", "The dependent variable is the outcome being measured (the test scores).", "Independent = what you change."], ["Confounding Variable", "A confounding variable is an outside factor that might influence results.", "Caffeine is the intentional variable."], ["Control Group", "The control group is the set of people NOT receiving caffeine.", "Variable = the thing that varies."]] },
    { id: 16506, chapter: 'Foundations of Research', title: 'Hypothesis Types', prompt: 'The hypothesis that states there is NO relationship between variables is called the:', correct: 'Null Hypothesis (H0)', wrong: [["Alternative Hypothesis (H1)", "The alternative hypothesis states that there IS a relationship.", "Null means \"zero\" or \"none\"."], ["Scientific Law", "A law is an established principle, not a starting prediction.", "Think of the \"default\" assumption in statistics."], ["Qualitative Hypothesis", "This isn't a standard term in hypothesis testing.", "Null vs Alternative is the key pairing."]] },
    { id: 16507, chapter: 'Experimental Design', title: 'Quantitative Data', prompt: 'Which of the following is an example of quantitative data?', correct: 'The temperature of a liquid in degrees Celsius', wrong: [["A person's description of their mood", "Descriptions are qualitative (narrative) data.", "Quantitative = numerical."], ["The color of a car", "Color is categorical/qualitative data.", "Think about whether you can do math with the data."], ["A video of an animal's behavior", "Visual recordings are qualitative until they are coded numerically.", "Measurements are quantitative."]] },
    { id: 16508, chapter: 'Measurement', title: 'Reliability vs Validity', prompt: 'If a scale consistently gives you the same weight every time you step on it, but that weight is 10 lbs too low, the scale is:', correct: 'Reliable but not valid', wrong: [["Valid but not reliable", "It isn't valid because it's wrong, and it is reliable because it's consistent.", "Reliability = consistency."], ["Neither reliable nor valid", "It is consistent, so it meets the definition of reliability.", "Consistency is the key for reliability."], ["Both reliable and valid", "It isn't valid because it doesn't measure the correct weight.", "Validity = accuracy of measurement."]] },
    { id: 16509, chapter: 'Statistical Analysis', title: 'Central Tendency', prompt: 'In a dataset with extreme outliers (like a few billionaires in a small town), which measure of central tendency is most representative of the "average" person?', correct: 'Median', wrong: [["Mean", "The mean is heavily influenced by outliers and will be skewed upward.", "Median is the middle value."], ["Mode", "The mode is just the most frequent value, which might not be central at all.", "Median resists skew."], ["Standard Deviation", "Standard deviation measures spread, not center.", "Think about \"middle\" income."]] },
    { id: 16510, chapter: 'Sampling', title: 'Sampling Methods', prompt: 'A researcher divides a population into groups (like age brackets) and then takes a random sample from EACH group. This is:', correct: 'Stratified Random Sampling', wrong: [["Cluster Sampling", "In cluster sampling, you pick entire groups at random, not individuals from every group.", "Stratified ensures every group is represented."], ["Convenience Sampling", "Convenience sampling is picking people who are easy to reach.", "Randomness is required for stratification."], ["Systematic Sampling", "Systematic sampling is picking every \"nth\" person.", "Divide into strata first."]] },
    { id: 16511, chapter: 'Statistical Analysis', title: 'Type I vs Type II Error', prompt: 'A Type I Error occurs when a researcher:', correct: 'Rejects a null hypothesis that is actually true (False Positive)', wrong: [["Fails to reject a null hypothesis that is actually false (False Negative)", "That is a Type II Error.", "Type I is finding an effect where none exists."], ["Accepts the alternative hypothesis as a law", "Researchers \"fail to reject\" or \"reject\", they don't usually \"prove\" laws.", "Think \"innocent person found guilty\"."], ["Makes a math error in the calculation", "While it can happen, Type I/II refers to the decision error relative to reality.", "Alpha vs Beta."]] },
    { id: 16512, chapter: 'Measurement', title: 'Levels of Measurement', prompt: 'A variable like "Class Rank" (1st, 2nd, 3rd) is measured at which level?', correct: 'Ordinal', wrong: [["Nominal", "Nominal data has no order (like hair color).", "Rank implies an order."], ["Interval", "Interval data has consistent gaps but no true zero (like Celsius).", "We don't know if the gap between 1st and 2nd is the same as 2nd and 3rd."], ["Ratio", "Ratio data has a true zero (like height).", "Ranks are ordered categories."]] },
    { id: 16513, chapter: 'Experimental Design', title: 'RCT Benefits', prompt: 'The primary advantage of a Randomized Controlled Trial (RCT) is that it:', correct: 'Minimizes selection bias and allows for causal inference', wrong: [["Is the cheapest way to do research", "RCTs are often very expensive and time-consuming.", "Quality comes at a cost."], ["Requires the smallest sample size", "RCTs often need large samples to detect effects.", "The benefit is about internal validity."], ["Can be done without any ethical review", "RCTs involving humans require strict ethical oversight.", "Randomization is the key to balance."]] },
    { id: 16514, chapter: 'Statistical Analysis', title: 'p-value Definition', prompt: 'A p-value of 0.05 means:', correct: 'There is a 5% chance of obtaining these results if the null hypothesis is true', wrong: [["There is a 95% chance the hypothesis is true", "A p-value is about the data given the hypothesis, not the hypothesis given the data.", "It measures \"surprisingness\"."], ["The effect size is 5%", "p-values measure significance, not the magnitude of the effect.", "Small p-values can come from tiny effects in huge samples."], ["5% of the data was incorrect", "p-values are a probability calculation, not an error count.", "Think probability of \"fluke\" results."]] },
    { id: 16515, chapter: 'Experimental Design', title: 'Internal Validity Threats', prompt: 'In a year-long study on a new teaching method, students naturally get older and wiser. This threat to internal validity is called:', correct: 'Maturation', wrong: [["History", "History refers to external events (like a war or news story) affecting participants.", "Internal biological/psychological change is maturation."], ["Instrumentation", "Instrumentation refers to the test or observer changing over time.", "The students themselves are changing here."], ["Selection Bias", "Selection bias is a problem with how groups were formed at the start.", "This is change \"during\" the study."]] },
    { id: 16516, chapter: 'Experimental Design', title: 'Regression Discontinuity', prompt: 'A Regression Discontinuity design is often used when an intervention is assigned based on:', correct: 'A strict cutoff score on a pre-existing metric (e.g., scholarship eligibility)', wrong: [["A random coin flip", "That would be a standard RCT.", "RD is for non-random assignments with a clear threshold."], ["The participant's choice", "Participant choice leads to self-selection bias.", "RD uses the \"random-like\" variation near the cutoff."], ["The researcher's intuition", "Intuition is not a systematic assignment rule.", "RD is a quasi-experimental method."]] },
    { id: 16517, chapter: 'Measurement', title: 'Statistical Power', prompt: 'Which of the following would DECREASE the statistical power of a study?', correct: 'Reducing the sample size', wrong: [["Increasing the effect size", "Larger effects are easier to find, which increases power.", "Power is the ability to find an effect."], ["Using a more sensitive measurement tool", "Better tools reduce noise and increase power.", "Power = 1 - Beta."], ["Lowering the alpha level (e.g., from 0.05 to 0.01)", "This actually increases the chance of a Type II error (beta), thus decreasing power.", "Think \"lower significance threshold makes effects harder to claim\"."]] },
    { id: 16518, chapter: 'Experimental Design', title: 'Confounding Control', prompt: 'If you cannot randomize, but you ensure that for every 20-year-old male in the treatment group, there is a 20-year-old male in the control group, you are using:', correct: 'Matching', wrong: [["Double-blinding", "Blinding is about keeping people unaware of their group.", "This is about group composition."], ["Randomization", "You are intentionally picking individuals, not using a random process.", "Matching is a quasi-experimental control."], ["Statistical regression", "Regression is a data analysis technique, not an assignment method.", "Think of \"pair-wise\" balance."]] },
    { id: 16519, chapter: 'Research Ethics', title: 'Belmont Principles', prompt: 'Ensuring that the risks of research are not borne solely by a vulnerable population (like prisoners) while benefits go to the wealthy is an application of:', correct: 'Justice', wrong: [["Beneficence", "Beneficence is about maximizing benefits and minimizing harms for the participants.", "Justice is about fair distribution of burdens and benefits."], ["Respect for Persons", "Respect for persons is about autonomy and informed consent.", "Equity is the key for justice."], ["Fidelity", "Fidelity is about faithfulness and trust, but not the primary Belmont principle for distribution.", "Think \"fairness\"."]] },
    { id: 16520, chapter: 'Statistical Analysis', title: 'Replication Crisis', prompt: 'The practice of "p-hacking" involves:', correct: 'Trying different statistical tests until one yields a significant p-value', wrong: [["Stealing data from other researchers", "That is data theft or plagiarism.", "p-hacking is about manipulating the analysis process."], ["Predicting results after looking at the data (HARKing)", "HARKing is a related but distinct problem in the replication crisis.", "p-hacking is about the p-value itself."], ["Publishing only successful studies", "That is \"publication bias\" or the \"file drawer problem\".", "Hack = manipulation of the math/process."]] },
    { id: 16521, chapter: 'Statistical Analysis', title: 'Test Selection', prompt: 'If you want to compare the mean test scores of THREE different groups (low, medium, and high caffeine), the most appropriate test is:', correct: 'One-way ANOVA', wrong: [["Independent samples t-test", "T-tests can only compare TWO groups.", "ANOVA is for more than two."], ["Pearson Correlation", "Correlation is for two continuous variables, not group means.", "Compare means across categories."], ["Chi-Square", "Chi-Square is for categorical outcome variables.", "Test scores are usually continuous."]] },
    { id: 16522, chapter: 'Measurement', title: 'Construct Validity', prompt: 'Construct validity refers to how well a test:', correct: 'Actually measures the theoretical concept it claims to measure (e.g., intelligence)', wrong: [["Covers all aspects of the subject (Content Validity)", "Content validity is about the breadth of the material.", "Construct is about the \"hidden\" theory."], ["Predicts future outcomes (Criterion Validity)", "Criterion validity is about external benchmarks.", "Think \"theoretical mapping\"."], ["Is consistent over time (Reliability)", "Reliability is NOT validity.", "Does the test match the concept?"]]},
    { id: 16523, chapter: 'Foundations of Research', title: 'Systematic vs Scoping', prompt: 'A "Scoping Review" is typically conducted when the primary goal is to:', correct: 'Map the existing literature and identify the volume and nature of research on a broad topic', wrong: [["Provide a definitive answer to a very specific clinical question", "That is the goal of a Systematic Review.", "Scoping is broader and exploratory."], ["Synthesize the data numerically using meta-analysis", "Scoping reviews usually don't involve meta-analysis.", "Think of \"scanning the landscape\"."], ["Review only the most famous papers in a field", "Scoping reviews should be systematic and comprehensive within their scope.", "It's about mapping, not answering specific narrow questions."]] },
    { id: 16524, chapter: 'Stretch Zone', title: 'Instrumental Variables', prompt: 'In causal inference, an "Instrumental Variable" is a third variable that is correlated with the ____ but only affects the ____ through its effect on the former.', correct: 'Independent Variable; Dependent Variable', wrong: [["Dependent Variable; Independent Variable", "The instrument should not be directly linked to the outcome.", "It acts as a \"random-ish\" lever for the treatment."], ["Control Group; Treatment Group", "Instruments are variables, not groups.", "Think of an instrument as a \"nudge\"."], ["Confounding Variable; Noise", "An instrument helps isolate the effect of the IV from confounding.", "It solves the endogeneity problem."]] },
    { id: 17101, chapter: "Stretch Zone", title: "Validity: Construct Validity", prompt: "Construct validity refers to the extent to which:", correct: "An operationalized measurement accurately captures the theoretical concept it is intended to measure.", wrong: [["The results can be generalized to the broader population.", "That is external validity.", "Think 'Are we actually measuring depression with this survey?'"], ["The experiment controls for all confounding variables.", "That is internal validity.", "It links theory to measurement."], ["The results are consistent over time.", "That is reliability.", "A measure can be reliable but invalid."]] },
    { id: 17102, chapter: "Stretch Zone", title: "Design: Double-Blind RCT", prompt: "The primary purpose of a double-blind design in a randomized controlled trial is to:", correct: "Prevent experimenter bias and participant demand characteristics from influencing the outcome.", wrong: [["Ensure the sample is perfectly representative of the population.", "Random sampling does that, not blinding.", "Blinding conceals the treatment assignment."], ["Eliminate the placebo effect entirely.", "It controls for the placebo effect by making both groups expect treatment equally.", "It keeps expectations symmetrical."], ["Ensure perfect compliance with the drug regimen.", "Blinding doesn't force patients to take their medicine.", "Neither the researcher nor patient knows who gets the real drug."]] },
    { id: 17103, chapter: "Stretch Zone", title: "Statistics: Type I Error", prompt: "A Type I error occurs when a researcher:", correct: "Rejects the null hypothesis when it is actually true (a false positive).", wrong: [["Fails to reject the null hypothesis when it is false.", "That is a Type II error (a false negative).", "Think 'crying wolf'."], ["Calculates the p-value incorrectly.", "It is a statistical decision error, not a math mistake.", "It means finding an effect that isn't really there."], ["Uses a biased sampling method.", "That is a methodological flaw, not a hypothesis testing error.", "Alpha controls the rate of Type I errors."]] },
    { id: 17104, chapter: "Stretch Zone", title: "Sampling: Stratified Random Sampling", prompt: "Stratified random sampling improves upon simple random sampling by:", correct: "Ensuring proportional representation of key demographic subgroups within the sample.", wrong: [["Guaranteeing that every person in the world has an equal chance of selection.", "No sample can do that.", "It divides the population into 'strata' first."], ["Eliminating all non-response bias.", "Stratification doesn't force people to answer the survey.", "It guarantees subgroups aren't left out by random chance."], ["Being much faster and cheaper to execute.", "It is usually more difficult and expensive because you must know the population breakdown first.", "It increases precision."]] },
    { id: 17105, chapter: "Stretch Zone", title: "Ethics: Belmont Report", prompt: "The ethical principle of 'Beneficence' outlined in the Belmont Report requires researchers to:", correct: "Maximize potential benefits to participants while minimizing potential harms.", wrong: [["Ensure participants provide informed consent.", "That falls under the principle of 'Respect for Persons'.", "Think 'do good, avoid harm'."], ["Distribute the risks and benefits of research equally across society.", "That is the principle of 'Justice'.", "It requires a risk-benefit analysis."], ["Pay participants a large sum of money.", "Coercive payment is actually unethical.", "Protect the participant's well-being."]] },
    { id: 17106, chapter: "Stretch Zone", title: "Qualitative: Grounded Theory", prompt: "The primary goal of Grounded Theory methodology is to:", correct: "Inductively generate a theoretical framework directly from the collected qualitative data.", wrong: [["Deductively test a pre-existing hypothesis.", "That is a quantitative approach.", "The theory is 'grounded' in the data."], ["Provide a rich, narrative biography of a single individual.", "That is Narrative Inquiry or a Case Study.", "It aims to explain a process or phenomenon."], ["Statistically prove the prevalence of a behavior.", "Grounded theory is qualitative.", "It uses constant comparison and theoretical sampling."]] },
    { id: 17107, chapter: "Stretch Zone", title: "Measurement: Reliability", prompt: "A measurement tool that yields highly consistent results but completely misses the target concept is said to have:", correct: "High reliability but low validity.", wrong: [["High validity but low reliability.", "If it's invalid, it misses the target.", "Think of a broken scale that always reads 100 lbs."], ["Low reliability and low validity.", "It is consistent, so it is reliable.", "It is precisely wrong."], ["High precision and high accuracy.", "Accuracy is synonymous with validity here.", "It is precise, but not accurate."]] },
    { id: 17108, chapter: "Stretch Zone", title: "Design: Quasi-Experimental", prompt: "What is the defining difference between a quasi-experimental design and a true experiment?", correct: "The lack of random assignment to treatment and control groups.", wrong: [["The absence of a control group entirely.", "Quasi-experiments often have control groups, they just aren't randomly assigned.", "Think pre-existing groups like two different classrooms."], ["The use of qualitative data instead of quantitative.", "Quasi-experiments use quantitative statistics.", "Randomization is the key to causal inference."], ["The study is conducted in a laboratory.", "True experiments are often in labs; quasi are often in the field.", "You cannot control who gets the treatment."]] },
    { id: 17109, chapter: "Stretch Zone", title: "Analysis: ANOVA", prompt: "When comparing the means of three or more independent groups, an ANOVA is preferred over multiple t-tests because:", correct: "Multiple t-tests inflate the family-wise error rate (the cumulative probability of a Type I error).", wrong: [["T-tests cannot handle continuous data.", "T-tests require continuous dependent variables.", "Running 3 t-tests increases the chance of a false positive."], ["ANOVA directly identifies which specific groups differ.", "ANOVA only tells you IF a difference exists; post-hoc tests tell you WHERE.", "It controls the alpha level for the whole experiment."], ["ANOVA does not require the assumption of normal distribution.", "Both ANOVA and t-tests assume normality.", "It prevents false positives."]] },
    { id: 17110, chapter: "Stretch Zone", title: "Mixed Methods", prompt: "In a 'Sequential Explanatory' mixed methods design:", correct: "Quantitative data is collected and analyzed first, followed by qualitative data to explain the quantitative results.", wrong: [["Qualitative data is collected first to build a survey.", "That is a Sequential Exploratory design.", "The qualitative explains the 'why' behind the quantitative 'what'."], ["Both are collected simultaneously and merged.", "That is a Convergent Parallel design.", "It happens in a specific order."], ["Only quantitative data is used.", "Then it wouldn't be a mixed methods design.", "Numbers first, interviews second."]] },
  ]), ...researchMethodsWorkoutGeneratedQuestions],
  philosophy: [...makeQuestionBank('University', [
    {
      id: 16601,
      chapter: 'Doing Philosophy',
      title: 'Argument clue',
      prompt: 'A philosophical argument is not a shouting match; it is a little bridge from reasons to a claim. If someone says "we should change this rule because it treats similar people differently," what is the argument mainly made of?',
      correct: 'A set of reasons supporting a conclusion',
      wrong: [['Any loud disagreement', 'Arguments in philosophy are about reasoning, not volume.', 'Focus on premises and conclusion.'], ['A claim with no supporting reasons', 'Mere claims are not arguments — arguments give reasons.', 'Think structured reasoning.'], ['A random question with no support', 'Philosophical arguments involve justification.', 'Reasons matter.']],
      lesson: 'A philosophical argument has at least one premise and a conclusion. The premise gives a reason; the conclusion is the claim the reason is meant to support. You can picture it like a tiny bridge: reasons on one bank, conclusion on the other, and logic holding the planks together.\n\nThe cute trap is thinking "argument" means "fight." In philosophy, a calm sentence can be an argument if it offers support, and a dramatic speech can fail to be one if it never gives a reason.',
      mentorHint: 'Look for the answer that mentions reasons plus a conclusion. Volume, vibes, and random wondering do not make an argument.',
      alternatePrompts: {
        plain: 'When philosophers talk about an argument, they mean a structured piece of reasoning. Which option best describes that structure?',
        teaching: 'Imagine a friend claims a school rule is unfair and then gives two reasons why. In philosophy, what makes that more than just an opinion?',
      },
      challengeRating: 2,
    },
    {
      id: 16602,
      chapter: 'Knowledge and Skepticism',
      title: 'Knowledge idea',
      prompt: 'A lucky guess can land on the truth, but philosophers usually want knowledge to be more than lucky correctness. In the classic three-part JTB model, what must knowledge include?',
      correct: 'Justified true belief',
      wrong: [['A really good guess', 'A guess lacks justification even if true.', 'Think JTB.'], ['A strongly held opinion alone', 'Strength of conviction is not justification.', 'Use the classic tripartite definition.'], ['A colorful dream', 'Dreams are not the standard definition of knowledge.', 'Choose the belief-based clue.']],
      lesson: 'JTB stands for justified true belief. Belief means the person accepts the claim; truth means the claim matches reality; justification means the person has good reasons or evidence.\n\nThe model is useful because it separates knowledge from lucky guessing. If you guess the answer to a locked-box puzzle and happen to be right, you have truth and maybe belief, but not the evidence that would turn the hit into knowledge.',
      mentorHint: 'Check for all three ingredients: the person believes it, it is true, and they have a good reason for believing it.',
      alternatePrompts: {
        plain: 'In the traditional JTB account, what three ingredients are supposed to make a belief count as knowledge?',
        teaching: 'You guessed the cafe has oat milk and you were right, but you had no evidence. Which classic definition explains why that is not yet knowledge?',
      },
      challengeRating: 3,
    },
    {
      id: 16603,
      chapter: 'Ethics and Moral Theory',
      title: 'Ethics focus',
      prompt: 'Ethics asks the "what should we do?" questions, not just the "what happened?" questions. If a class debates whether it is fair to keep a promise that now hurts someone, which branch of philosophy are they using?',
      correct: 'Moral values and right conduct',
      wrong: [['The descriptive study of market prices', 'That is economics, which is descriptive rather than normative.', 'Ethics is about behavior and values.'], ['Empirical questions about engineering systems', 'That is applied science, not the study of right conduct.', 'Focus on moral questions.'], ['Quantitative questions in physics', 'That belongs to natural science.', 'Choose the conduct clue.']],
      lesson: 'Ethics is moral philosophy: the study of right and wrong, good and bad, duty, harm, fairness, and how people ought to live. It is normative, meaning it asks what should be the case, not merely what is the case.\n\nA weather report can tell you that it is raining. Ethics asks whether you should share your umbrella with someone who forgot theirs. Same puddle, much trickier question.',
      mentorHint: 'Look for the option about right conduct and moral value. Ethics lives in "ought," not just "is."',
      alternatePrompts: {
        plain: 'Which branch of philosophy studies questions about right action, moral value, and how we ought to live?',
        teaching: 'A friend asks whether lying is ever morally allowed. What area of philosophy has just entered the chat, holding a tiny clipboard?',
      },
      challengeRating: 2,
    },
    {
      id: 16604,
      chapter: 'Doing Philosophy',
      title: 'Logic tool',
      prompt: 'In an argument, a conclusion is the claim being defended. What job does a premise do for that conclusion?',
      correct: 'Provide support or evidence for a conclusion',
      wrong: [['Restate the conclusion in different words', 'A premise must give independent support, not just restate the conclusion.', 'Think evidence.'], ['Signal the end of an argument', 'Conclusions end arguments; premises support them.', 'Premises build the case.'], ['Express an emotional reaction', 'Philosophical arguments rely on reasons, not feelings.', 'Use the support-for-conclusion idea.']],
      lesson: 'A premise is a reason offered in support of a conclusion. If the conclusion is "this rule is unfair," a premise might be "it punishes two students differently for the same action."\n\nGood premise spotting makes philosophy less foggy. First underline the claim someone wants you to accept, then ask: what reasons are supposed to carry it there?',
      mentorHint: 'Premises are the support beams. Find the answer that makes them reasons, not endings or feelings.',
      alternatePrompts: {
        plain: 'What is the role of a premise in a philosophical or logical argument?',
        teaching: 'If the conclusion is the treasure chest, what does a premise do on the little reasoning map that leads to it?',
      },
      challengeRating: 2,
    },
    {
      id: 16605,
      chapter: 'Doing Philosophy',
      title: 'Logical Validity',
      prompt: 'A deductive argument can be valid even when its premises are silly. What matters is the logical lock: if the premises were true, what would have to happen to the conclusion?',
      correct: 'If the premises are true, the conclusion MUST be true',
      wrong: [["The conclusion is definitely true in the real world", "An argument can be valid even if the premises are false. Validity is about the structure.", "Validity = logical necessity given the premises."], ["The argument is written in very fancy language", "Logic is about reasoning, not style.", "A valid argument can be simple."], ["Everyone agrees with the conclusion", "Agreement doesn't determine logical validity.", "Think of the \"if... then...\" connection."]],
      lesson: 'Validity is about structure, not factual truth. A deductive argument is valid when it is impossible for the premises to be true and the conclusion false at the same time.\n\nThat means a valid argument can still be unsound if its premises are false. "All sandwiches are astronauts; Craig is a sandwich; therefore Craig is an astronaut" has a valid shape but a deeply unwell sandwich premise.',
      mentorHint: 'Do not ask whether the premises are actually true yet. Ask whether they would force the conclusion if they were true.',
      alternatePrompts: {
        plain: 'What does it mean for a deductive argument to be valid?',
        teaching: 'Suppose an argument has nonsense premises but the conclusion follows perfectly from them. Which answer captures that logical structure?',
      },
      challengeRating: 3,
    },
    {
      id: 16606,
      chapter: 'Branches of Philosophy',
      title: 'Metaphysics vs Ethics',
      prompt: 'Some philosophy questions ask what we should do; others ask what reality is made of in the first place. Which branch studies existence, being, identity, time, and the ultimate nature of reality?',
      correct: 'Metaphysics',
      wrong: [["Ethics", "Ethics studies right and wrong behavior and moral values.", "Metaphysics = \"after physics\"."], ["Epistemology", "Epistemology is the study of knowledge and belief.", "Think of the \"what is\" question."], ["Aesthetics", "Aesthetics studies beauty and art.", "Existence is a metaphysical question."]],
      lesson: 'Metaphysics is the branch of philosophy that asks what reality is like at the deepest level. It includes questions about existence, identity, time, causation, possibility, and whether things like minds, numbers, or universals are real.\n\nA quick sorting trick: ethics asks "what should we do?", epistemology asks "how do we know?", and metaphysics asks "what is there, and what is it like?"',
      mentorHint: 'Listen for the biggest "what exists?" energy. That points to metaphysics, not ethics or aesthetics.',
      alternatePrompts: {
        plain: 'Which branch of philosophy studies being, existence, identity, and the basic structure of reality?',
        teaching: 'If a philosopher asks whether time is real or whether you remain the same person over years of change, which branch are they exploring?',
      },
      challengeRating: 3,
    },
    {
      id: 16607,
      chapter: 'Epistemology',
      title: 'Plato\'s Cave',
      prompt: 'In Plato\'s cave story, prisoners see only shadows and mistake them for the whole world. What do those shadows represent in the allegory?',
      correct: 'The deceptive world of sensory appearances',
      wrong: [["The ultimate truth of reality", "The shadows are illusions; the sun outside represents the truth.", "Prisoners see shadows and think they are real."], ["The ghosts of dead philosophers", "The allegory is about knowledge and education, not ghosts.", "The cave is the physical world."], ["Evil demons trying to trick us", "Descartes used the evil demon; Plato used shadows and puppets.", "Think of \"appearance\" vs \"reality\"."]],
      lesson: 'Plato\'s cave is an allegory about mistaking appearances for reality. The prisoners see shadows on a wall and treat them as the truth because they have never turned around or left the cave.\n\nThe story is not about spooky shadows. It is about education: philosophy is the painful but liberating turn from familiar appearances toward deeper understanding.',
      mentorHint: 'Pair the shadows with appearance and illusion. The sun/outside world is the truth side of the story.',
      alternatePrompts: {
        plain: 'In Plato\'s Allegory of the Cave, what are the shadows on the cave wall meant to symbolize?',
        teaching: 'If someone has only ever seen shadows and thinks they are reality, what philosophical contrast is Plato dramatizing?',
      },
      challengeRating: 3,
    },
    {
      id: 16608,
      chapter: 'Ethics',
      title: 'Utilitarianism',
      prompt: 'A utilitarian acts like a moral scorekeeper for overall well-being, not just personal comfort. Which goal best captures the core utilitarian principle?',
      correct: 'The greatest happiness for the greatest number',
      wrong: [["The most wealth for the individual", "That is egoism, not utilitarianism.", "Utilitarianism is impartial and altruistic."], ["The most beautiful works of art", "That would be a form of aestheticism.", "Utility is usually defined as pleasure or well-being."], ["Strict adherence to all laws", "Sometimes utility requires breaking a law if it prevents more suffering.", "Maximize the good."]],
      lesson: 'Utilitarianism is a consequentialist theory: it judges actions by their outcomes. The classic slogan is to promote the greatest happiness, welfare, or utility for the greatest number.\n\nThis can make utilitarianism powerful and awkward. It asks you to count everyone\'s well-being impartially, even when your favorite option is wearing a tiny crown and waving from your own side.',
      mentorHint: 'Look for consequences and total well-being. If the answer is about duty, law, or personal gain, it is probably not utilitarianism.',
      alternatePrompts: {
        plain: 'What outcome does utilitarianism tell us to maximize when deciding what is morally right?',
        teaching: 'A city has to choose the policy that creates the most overall well-being, even if no option is perfect. Which ethical theory thinks that way?',
      },
      challengeRating: 3,
    },
    {
      id: 16609,
      chapter: 'Doing Philosophy',
      title: 'Ad Hominem Fallacy',
      prompt: 'A debate goes off the rails when someone stops answering the claim and starts insulting the person who made it. Which fallacy is that?',
      correct: 'Attacks the person making the argument rather than the argument itself',
      wrong: [["Misrepresents an opponent's position to make it easier to attack", "That is a Straw Man fallacy.", "Ad hominem = \"to the man\"."], ["Assumes the conclusion in one of the premises", "That is \"begging the question\" or circular reasoning.", "Focus on the personal attack."], ["Claims something is true just because a famous person said it", "That is an appeal to authority.", "Attacking the character, not the claim."]],
      lesson: 'Ad hominem means "to the person." The fallacy happens when someone attacks a speaker\'s character, background, or motives instead of dealing with the argument.\n\nSometimes facts about a person matter, such as conflicts of interest or expertise. The fallacy is the lazy move where the personal jab replaces the reasoning. Tiny mud pie, no logic inside.',
      mentorHint: 'Ask whether the reply engages the claim or swerves into a personal attack.',
      alternatePrompts: {
        plain: 'What happens in an ad hominem fallacy?',
        teaching: 'Someone argues that a policy is unfair, and the reply is "you are annoying." What mistake just happened?',
      },
      challengeRating: 2,
    },
    {
      id: 16610,
      chapter: 'Doing Philosophy',
      title: 'Modus Ponens',
      prompt: 'Modus ponens is the clean "if this, then that" move. If P guarantees Q, and P is actually true, which conclusion follows?',
      correct: 'If P then Q; P; Therefore Q',
      wrong: [["If P then Q; Q; Therefore P", "That is the fallacy of \"affirming the consequent\".", "Modus Ponens is the \"mode of putting\"."], ["If P then Q; Not Q; Therefore Not P", "That is \"Modus Tollens\" (the mode of taking).", "Start with P, get Q."], ["Either P or Q; Not P; Therefore Q", "That is a \"disjunctive syllogism\".", "Conditional reasoning."]],
      lesson: 'Modus ponens has the form: if P then Q; P; therefore Q. It is valid because the first premise says P is enough to bring Q along, and the second premise says P happened.\n\nExample: If the kettle is boiling, the water is hot. The kettle is boiling. Therefore the water is hot. Little logic kettle, extremely obedient.',
      mentorHint: 'Start with P. Modus ponens affirms the antecedent, then takes Q with it.',
      alternatePrompts: {
        plain: 'Which symbolic form represents modus ponens?',
        teaching: 'If a rule says "If P, then Q," and you are told P is true, what valid deductive move can you make?',
      },
      challengeRating: 3,
    },
    {
      id: 16611,
      chapter: 'Epistemology',
      title: 'JTB Analysis',
      prompt: 'The JTB model is a classic attempt to define knowledge without counting lucky guesses. What does JTB say knowledge is?',
      correct: 'Justified True Belief',
      wrong: [["Just the Truth itself", "You can have truth without knowing it (like a lucky guess).", "Knowledge needs a subject who believes it."], ["Anything you strongly feel is certain", "Feelings of certainty don't guarantee truth or justification.", "Belief is necessary but not sufficient."], ["Any belief that makes you happy", "Pragmatism might value useful beliefs, but JTB requires truth and reason.", "Check the three letters: J, T, B."]],
      lesson: 'JTB stands for justified true belief. The thought is that knowledge requires a believer, a true claim, and good support for that claim.\n\nEach piece blocks a different fake-out: truth blocks false beliefs, belief blocks facts nobody accepts, and justification blocks lucky guesses. Gettier cases later show that even this tidy trio is not enough by itself.',
      mentorHint: 'Expand the initials. J is the evidence part, T is the reality part, and B is the person accepting the claim.',
      alternatePrompts: {
        plain: 'What do the letters JTB stand for in the traditional analysis of knowledge?',
        teaching: 'A belief is true and supported by good evidence. Which classic three-part model is trying to call that knowledge?',
      },
      challengeRating: 3,
    },
    {
      id: 16612,
      chapter: 'Metaphysics',
      title: 'Ship of Theseus',
      prompt: 'A ship has every plank replaced one by one until none of the original wood remains. What identity question is the Ship of Theseus thought experiment designed to press?',
      correct: 'Whether an object remains the same if all its parts are replaced over time',
      wrong: [["How much weight a wooden boat can carry", "That is a physics/engineering question.", "The problem is about \"numerical identity\"."], ["Whether ships can have souls", "The problem is usually applied to physical objects and persistence.", "Identity through change."], ["Why the Greeks were so good at sailing", "That is history, not metaphysics.", "If every plank is new, is it the \"same\" ship?"]],
      lesson: 'The Ship of Theseus asks about identity through change. If an object loses and replaces all its parts gradually, is it still the same object, or only a very convincing sequel?\n\nThe puzzle matters because people, bodies, cities, teams, and apps all change over time. Metaphysics asks what, if anything, makes the changed thing numerically the same thing.',
      mentorHint: 'This is not about boats as engineering. It is about sameness over time when the parts change.',
      alternatePrompts: {
        plain: 'What philosophical problem does the Ship of Theseus thought experiment raise?',
        teaching: 'If your favorite ship gets every plank replaced, has the same ship survived or has a new ship quietly taken over in a sailor hat?',
      },
      challengeRating: 3,
    },
    {
      id: 16613,
      chapter: 'Ethics',
      title: 'Categorical Imperative',
      prompt: 'Kant wants a moral rule to be fit for everyone, not just convenient for you in this moment. Under the categorical imperative, what kind of rule may you act on?',
      correct: 'We could consistently will to become a universal law',
      wrong: [["Make us feel the most satisfied", "Kant rejected feelings (inclinations) as the basis for morality.", "Duty is universal."], ["Our parents and teachers told us to follow", "Kant emphasized autonomy (giving the law to oneself).", "The \"Universal Law\" formulation."], ["Lead to the best consequences for everyone", "That is Utilitarianism, which Kant opposed.", "Focus on the \"form\" of the action, not the results."]],
      lesson: 'Kant\'s categorical imperative tests maxims, or personal rules of action. The universal-law version asks whether you could rationally will your rule to be followed by everyone.\n\nIf your rule is "lie whenever it helps me," universalizing it breaks the practice of trusting promises. Kant is asking whether your rule can survive being copied by the whole moral neighborhood.',
      mentorHint: 'Kant is not counting happiness here. Look for universality, consistency, and duty.',
      alternatePrompts: {
        plain: 'According to Kant\'s categorical imperative, what test should a personal rule pass before you act on it?',
        teaching: 'If everyone copied your rule, would the rule still make sense? Which Kantian answer says that is the moral test?',
      },
      challengeRating: 4,
    },
    {
      id: 16614,
      chapter: 'Philosophy of Religion',
      title: 'Problem of Evil',
      prompt: 'The logical problem of evil asks whether a certain picture of God can fit with the existence of suffering. Which three claims create the classic tension?',
      correct: 'God is all-powerful, all-good, and evil exists',
      wrong: [["Evil is real, Hell is real, and people are free", "These could all be true together without a logical contradiction.", "The problem is about the nature of God."], ["God is one, God is three, and God is infinite", "That is a theological puzzle about the Trinity, not the problem of evil.", "Theodicy tries to solve this."], ["Science is true, Religion is true, and Nature is cruel", "While challenging, the \"Problem of Evil\" specifically targets the attributes of a Deity.", "Epicurus framed it as: Is He willing but not able?"]],
      lesson: 'The logical problem of evil targets a triad: God is all-powerful, God is all-good, and evil exists. The challenge is to explain how all three can be true together without contradiction.\n\nThe puzzle is not simply "bad things happen." It is sharper: if a perfectly good being wants to prevent evil, and an all-powerful being can prevent evil, why is evil still here?',
      mentorHint: 'Look for the three-part tension: power, goodness, and evil. Leave other theology puzzles on the shelf.',
      alternatePrompts: {
        plain: 'Which three claims are in tension in the logical problem of evil?',
        teaching: 'A philosopher points at suffering and asks how it fits with a God who is both perfectly good and unlimited in power. Which answer names that pressure point?',
      },
      challengeRating: 4,
    },
    {
      id: 16615,
      chapter: 'Epistemology',
      title: 'Gettier Cases',
      prompt: 'Gettier cases are little epistemology traps where someone has evidence, believes a true claim, and still seems lucky rather than knowledgeable. What do these cases show about the classic JTB definition of knowledge?',
      correct: 'Justified True Belief is not SUFFICIENT for knowledge',
      wrong: [["We can never truly know anything (Skepticism)", "Gettier assumed we have knowledge but showed our \"definition\" was wrong.", "You can have JTB but still only have \"luck\"."], ["Justification is unnecessary if you have the truth", "Gettier cases have truth and justification, but still feel like \"not knowledge\".", "The \"luck\" factor is the issue."], ["All beliefs are actually false", "Gettier's subjects have true beliefs.", "Think of the man who \"knows\" the time from a broken clock that happens to be right."]],
      lesson: 'A Gettier case has all three JTB ingredients: the person believes the claim, the claim is true, and the person has justification. The problem is that the truth is connected to the justification by luck rather than by the right kind of reliable link.\n\nImagine glancing at a stopped clock that happens to show the correct time. Your belief is true and normally justified, but you got lucky. Gettier cases show JTB is not sufficient for knowledge; they do not show that knowledge is impossible.',
      mentorHint: 'Check whether all three JTB ingredients are present, then ask whether luck breaks the connection between the reason and the truth.',
      alternatePrompts: {
        plain: 'What lesson do Gettier cases teach about justified true belief as a definition of knowledge?',
        teaching: 'A stopped clock tells the right time by accident. You believe it, it is true, and you had a normal reason. Why might this still fail to be knowledge?',
      },
      challengeRating: 5,
    },
    {
      id: 16616,
      chapter: 'Metaphysics',
      title: 'Determinism vs Compatibilism',
      prompt: 'Imagine every event has prior causes, but you still choose based on your own reasons, desires, and character. What does a compatibilist claim about free will and determinism?',
      correct: 'Free will and determinism can both be true at the same time',
      wrong: [["Free will is an illusion and everything is determined", "That is hard determinism, not compatibilism.", "Compatibilists try to reconcile freedom with causal order."], ["Human actions are completely random", "Randomness is not the same as agency or responsibility.", "Compatibilists usually want freedom to involve reasons, not chaos."], ["We have no choice because God knows the future", "That is closer to theological fatalism.", "This question is about determinism and human agency."]],
      lesson: 'Compatibilism says determinism and free will can fit together. The trick is redefining freedom: you are free when your action flows from your own motives, reasoning, and character rather than from external coercion.\n\nSo the compatibilist does not need actions to be uncaused. They ask whether the causes run through you in the right way. Tiny steering wheel, still attached to a road.',
      solution: 'The compatibilist answer is that free will and determinism can both be true. Determinism says actions have causes; compatibilism says an action can still be free if it comes from the person\'s own deliberation rather than force, compulsion, or manipulation.',
      mentorHint: 'Do not equate determinism with hopelessness. Compatibilists look for a version of freedom that works inside a caused world.',
      alternatePrompts: {
        plain: 'What does compatibilism say about the relationship between free will and determinism?',
        teaching: 'If your choices have causes but still come from your own reasons, which view says freedom might survive?',
      },
      challengeRating: 4,
    },
    {
      id: 16617,
      chapter: 'Philosophy of Mind',
      title: 'Chinese Room',
      prompt: 'In Searle\'s Chinese Room, a person follows a rulebook to produce convincing Chinese answers without understanding Chinese. What point is the thought experiment trying to make?',
      correct: 'Following a set of rules (syntax) is not the same as understanding (semantics)',
      wrong: [["Computers will eventually become smarter than humans", "The argument is not a prediction of computer power.", "It targets whether symbol manipulation is enough for understanding."], ["Translating languages is impossible for machines", "Machine translation can work practically; Searle is asking about understanding.", "The issue is syntax versus meaning."], ["The brain is just a biological computer", "Searle uses the example to resist reducing understanding to a program alone.", "The person can follow rules without grasping meaning."]],
      lesson: 'The Chinese Room argues against the idea that running the right program automatically equals understanding. Syntax means manipulating symbols by rules; semantics means grasping what those symbols mean.\n\nThe person in the room can output perfect-looking answers by following instructions, but from the inside there is no understanding of the language. That gap is the philosophical pressure point.',
      solution: 'Searle\'s point is that syntax is not semantics. A system might manipulate symbols correctly and still lack genuine understanding, just as the person in the room can follow a rulebook without knowing what the Chinese sentences mean.',
      mentorHint: 'Separate rule-following from meaning. The room can produce the right symbols without understanding them.',
      alternatePrompts: {
        plain: 'What distinction is Searle drawing with the Chinese Room thought experiment?',
        teaching: 'If someone can pass notes in a language by using a rulebook but understands none of it, what does that suggest about programs and meaning?',
      },
      challengeRating: 5,
    },
    {
      id: 16618,
      chapter: 'Philosophy of Mind',
      title: 'Nagel\'s Bat',
      prompt: 'Nagel asks us to imagine knowing every physical fact about echolocation and winged flight while still missing the inside feel of that life. What is his point about consciousness?',
      correct: 'Subjective conscious experience cannot be fully captured by objective physical descriptions',
      wrong: [["Bats have a more complex moral system than humans", "The essay is about consciousness, not ethics.", "The topic is first-person experience."], ["We should use sonar technology to understand the brain", "Technology is not the conclusion of the thought experiment.", "The issue is whether objective facts capture what experience feels like."], ["Animals do not have conscious minds", "Nagel assumes bats have experience; that is what creates the problem.", "The question is whether we can capture that experience objectively."]],
      lesson: 'Nagel\'s famous question is about subjectivity. You might know all the neuroscience, physics, and behavior involved in another form of life, but still not know what it is like from that creature\'s own point of view.\n\nThe argument challenges purely objective accounts of mind. Conscious experience has a first-person feel, and that feel may not be fully translated into third-person description.',
      solution: 'Nagel argues that objective physical descriptions leave something out: the subjective character of experience. Knowing all the external facts about a conscious life does not automatically give you the first-person feel of living it.',
      mentorHint: 'Listen for the contrast between outside facts and inside experience. Nagel is pressing the first-person side.',
      alternatePrompts: {
        plain: 'What does Nagel\'s bat example suggest about objective science and subjective experience?',
        teaching: 'Could you know every physical fact about a form of perception and still not know what it feels like from the inside?',
      },
      challengeRating: 5,
    },
    {
      id: 16619,
      chapter: 'Epistemology',
      title: 'Problem of Induction',
      prompt: 'The toaster has worked every morning so far, so you expect it to work tomorrow. What did Hume think is philosophically tricky about that move from past pattern to future expectation?',
      correct: 'Cannot be rationally justified by either logic or experience',
      wrong: [["Is a fundamental law of physics", "Hume treats the expectation as habit or custom, not a proven law of reason.", "The issue is justification."], ["Is proven every time the sun rises", "Using more past cases to justify future cases repeats the same inductive move.", "That risks circular reasoning."], ["Is a direct revelation from God", "Hume is analyzing human reasoning and habit here, not appealing to revelation.", "Stay with the past-to-future inference."]],
      lesson: 'Induction is reasoning from observed patterns to unobserved cases: the sun has risen before, so it will rise tomorrow. Hume\'s problem is that logic alone does not prove the future must resemble the past, and experience only shows that the past has worked so far.\n\nThat does not mean you should stop using toasters or hide from breakfast. It means induction is practically unavoidable but hard to justify without sneaking induction into the proof.',
      solution: 'Hume argues that our expectation that the future will resemble the past cannot be justified by pure logic or by experience without circularity. Experience tells us past regularities held in the past, but using that to prove future regularities already assumes induction.',
      mentorHint: 'Watch for circularity: you cannot prove induction by saying induction has worked before.',
      alternatePrompts: {
        plain: 'What is Hume\'s problem of induction?',
        teaching: 'If every sunrise so far makes you expect another one tomorrow, what hard question does Hume ask about that expectation?',
      },
      challengeRating: 5,
    },
    {
      id: 16620,
      chapter: 'Political Philosophy',
      title: 'Veil of Ignorance',
      prompt: 'Rawls asks you to design society before you know whether you will be rich or poor, healthy or ill, powerful or ignored. What does the veil of ignorance hide from you?',
      correct: 'Your own social status, wealth, talents, or identity',
      wrong: [["What the laws of physics are", "Rawls lets you know general facts about society and human life.", "The veil hides your personal position."], ["Whether God exists or not", "The thought experiment is about fairness in social design, not theology.", "It removes self-serving knowledge."], ["How to read or write", "The parties are imagined as rational and informed.", "They just do not know which social role will be theirs."]],
      lesson: 'The veil of ignorance is a fairness device. Rawls asks people to choose principles of justice without knowing their own class, talents, identity, wealth, health, or social position.\n\nThat ignorance blocks rigging the rules for yourself. If you might wake up anywhere in the society you design, you have a strong reason to protect basic liberties and care about the worst-off position.',
      solution: 'The veil hides facts about your own place in society: status, wealth, talents, identity, and similar personal advantages or disadvantages. Rawls uses that ignorance to make the choice of social rules more impartial.',
      mentorHint: 'The veil does not erase all knowledge. It erases the facts that would let you design society selfishly.',
      alternatePrompts: {
        plain: 'What information is hidden behind Rawls\' veil of ignorance?',
        teaching: 'If you had to choose social rules before knowing which life you would get, what personal information would be missing?',
      },
      challengeRating: 4,
    },
    {
      id: 16621,
      chapter: 'Ethics',
      title: 'Euthyphro Dilemma',
      prompt: 'Socrates presses a famous question about divine command: is something good because God loves it, or does God love it for another reason? What is the second horn of the dilemma?',
      correct: 'God loves it because it is good',
      wrong: [["God hates it because it is bad", "That reverses the wording but misses the dilemma about the source of goodness.", "The second horn makes goodness independent."], ["Bad people think it is good", "The dilemma is not about human disagreement.", "It is about whether morality depends on divine approval."], ["God is the only thing that is good", "That does not answer whether goodness is created by divine will or recognized by it.", "Focus on the order of explanation."]],
      lesson: 'The Euthyphro dilemma asks whether moral goodness depends on divine approval. If something is good only because God loves it, morality can look arbitrary. If God loves it because it is good, then goodness seems independent of God\'s approval.\n\nIt is a compact little fork in the road: does authority create value, or recognize value?',
      solution: 'The second horn is that God loves the good because it is already good. That answer avoids arbitrariness, but it raises the question of whether moral goodness exists independently of divine command.',
      mentorHint: 'Track the direction: does divine love make the thing good, or respond to goodness already there?',
      alternatePrompts: {
        plain: 'What question does the Euthyphro dilemma raise about God and morality?',
        teaching: 'If a rule is good, is it good because the highest authority commands it, or does the authority command it because it is good?',
      },
      challengeRating: 5,
    },
    {
      id: 16622,
      chapter: 'Philosophy of Mind',
      title: 'Mary\'s Room',
      prompt: 'Mary knows every physical fact about color while living in a black-and-white room. When she sees red for the first time, what challenge does the thought experiment raise?',
      correct: 'Physicalism is false because there are non-physical facts about experience',
      wrong: [["Women are better at science than men", "Mary being a scientist is just part of the setup, not the philosophical point.", "The issue is experience and physical facts."], ["Isolation leads to insanity", "The room is a thought experiment about knowledge, not a psychology study of isolation.", "Ask what Mary learns."], ["Color is a property of objects, not the mind", "The puzzle is about whether the experience of red is captured by physical description.", "The key word is qualia."]],
      lesson: 'Mary\'s Room is the knowledge argument against physicalism. Mary knows all the physical science of color vision, but has never experienced color. When she sees red, it seems she learns what red looks like.\n\nIf she learns something new despite knowing all physical facts, then maybe there are facts about conscious experience that are not purely physical facts. That is the challenge.',
      solution: 'The thought experiment argues that physical facts may not exhaust all facts. If Mary learns what red experience is like after already knowing all the physical information, then subjective experience seems to add something physicalism struggles to capture.',
      mentorHint: 'Ask what Mary gains when she first sees red. The issue is experience, not whether she studied hard enough.',
      alternatePrompts: {
        plain: 'What is Mary\'s Room meant to challenge about physicalism?',
        teaching: 'If a scientist knows all color physics but learns something when she finally sees red, what kind of fact might physicalism be missing?',
      },
      challengeRating: 6,
    },
    {
      id: 16623,
      chapter: 'Metaphysics',
      title: 'Personal Identity Fission',
      prompt: 'In a fission case, one person\'s psychology is copied into two future survivors. Why did Parfit think this makes strict personal identity less important than we assume?',
      correct: 'Identity is not what matters for survival',
      wrong: [["We should never use teleporters", "The thought experiment is a tool for analysis, not a simple travel warning.", "Focus on identity and survival."], ["Souls can be divided like cells", "Parfit does not rely on a soul theory to make the puzzle work.", "The issue is psychological continuity."], ["You are identical to your brain only", "The two-survivor case is meant to make one-to-one identity break down.", "Identity cannot simply be copied twice."]],
      lesson: 'Parfit uses fission cases to separate survival from strict identity. If one person splits into two future people who both remember and continue that life, it cannot be true that the original is numerically identical to both.\n\nBut it still seems that something important survived. Parfit\'s lesson is that psychological continuity and connectedness may matter more than a single all-or-nothing identity label.',
      solution: 'Parfit argues that strict identity is not what matters most for survival. In fission, one-to-one identity fails because there are two continuers, but psychological continuity can still preserve much of what we care about.',
      mentorHint: 'If two future people both continue the earlier psychology, strict identity cannot attach to both. Ask what still matters.',
      alternatePrompts: {
        plain: 'What do Parfit\'s fission cases suggest about personal identity and survival?',
        teaching: 'If two future versions of you wake up with your memories, why might survival be about continuity rather than strict one-person identity?',
      },
      challengeRating: 6,
    },
    {
      id: 16624,
      chapter: 'Ethics',
      title: 'Error Theory',
      prompt: 'Mackie\'s moral error theory says moral claims try to state objective truths, but the world does not contain the special moral facts they need. What does that imply about moral claims?',
      correct: 'Moral claims are cognitive (aim for truth) but they are all systematically false',
      wrong: [["Morality is just a matter of personal opinion", "That is closer to subjectivism; error theory says moral claims aim at objective truth and miss.", "It is more radical than preference talk."], ["We should stop caring about right and wrong", "Error theory is a metaethical claim about moral language and facts, not a full life plan.", "It says the claims are in error."], ["Only scientific facts are true", "Mackie is specifically targeting objective moral properties.", "The view is about moral facts, not every non-scientific statement."]],
      lesson: 'Moral error theory is a form of moral anti-realism. It says ordinary moral claims behave like truth-claims, but they presuppose objective moral properties that do not exist.\n\nA friendly analogy: "this act has objective wrongness in it" would be like talking as if the universe contains a special wrongness ingredient. Mackie thinks that ingredient is not there, so the claims systematically fail.',
      solution: 'Error theory says moral statements are cognitive because they aim to describe how things are, but they are systematically false because there are no objective moral facts of the kind they presuppose.',
      mentorHint: 'Do not reduce it to personal taste. Error theory says moral claims aim at truth, but the truth-making moral facts are missing.',
      alternatePrompts: {
        plain: 'What does moral error theory claim about ordinary moral statements?',
        teaching: 'If moral sentences try to report objective moral facts but those facts are not real, what follows about the sentences?',
      },
      challengeRating: 6,
    },
    {
      id: 17201,
      chapter: "Stretch Zone",
      title: "Epistemology: Gettier Problem",
      prompt: "In a Gettier-style case, someone has good evidence, believes a claim, and the claim is true, but luck is doing the secret wiring. What did Gettier challenge?",
      correct: "Justified True Belief (JTB), by showing cases where JTB does not constitute knowledge.",
      wrong: [["Absolute certainty.", "Descartes focused on certainty; Gettier focused on justified true belief.", "The target is the JTB definition."], ["Empirical observation.", "Gettier was not rejecting observation itself.", "The issue is lucky truth plus justification."], ["The scientific method.", "This is a problem in epistemology, not a critique of experiments as such.", "Ask what definition of knowledge is under pressure."]],
      lesson: "Gettier cases challenge the idea that knowledge is simply justified true belief. They describe cases where someone has evidence and a true belief, but the truth arrives partly by luck.\n\nThat means JTB may be necessary, but it is not sufficient. The missing ingredient has to block lucky success from masquerading as knowledge.",
      solution: "Gettier challenged the JTB definition of knowledge. His cases show that a person can have justification, truth, and belief while still falling short of knowledge because the connection between evidence and truth is too lucky.",
      mentorHint: "Look for truth, belief, justification, and then the little lightning bolt of luck that ruins the definition.",
      alternatePrompts: {
        plain: "What definition of knowledge did Gettier cases put under pressure?",
        teaching: "If a true belief is justified but lucky, why might it still fail to count as knowledge?",
      },
      challengeRating: 6,
    },
    {
      id: 17202,
      chapter: "Stretch Zone",
      title: "Metaphysics: Mind-Body Dualism",
      prompt: "Descartes thinks the thinking mind and the extended body are not just two labels for one stuff. What does substance dualism claim?",
      correct: "The mind (res cogitans) and the body (res extensa) are fundamentally distinct and separable substances.",
      wrong: [["The mind is simply an illusion created by the brain.", "That is closer to eliminative materialism.", "Descartes gives the mind its own kind of substance."], ["The physical universe is all that exists.", "That is physicalism or materialism.", "Dualism means two fundamentally different kinds."], ["Mind and body are two attributes of a single underlying substance.", "That is closer to Spinoza than Descartes.", "Descartes separates thinking substance from extended substance."]],
      lesson: "Substance dualism says mind and body are fundamentally different kinds of thing. For Descartes, mind is thinking substance, while body is extended physical substance.\n\nThe view makes consciousness feel special, but it creates a hard follow-up question: if mind and body are so different, how do they interact when a decision becomes an action?",
      solution: "Descartes' substance dualism claims that mind and body are distinct substances: the mind is essentially thinking, and the body is essentially extended in space. They are connected in human life but not identical.",
      mentorHint: "Dualism means two basic kinds. Descartes separates thinking mind from extended body.",
      alternatePrompts: {
        plain: "What does Cartesian substance dualism say about mind and body?",
        teaching: "If thought and physical extension are two different kinds of reality, which mind-body view are you using?",
      },
      challengeRating: 5,
    },
    {
      id: 17203,
      chapter: "Stretch Zone",
      title: "Ethics: Kant's Categorical Imperative",
      prompt: "Kant asks whether your personal rule could be copied by everyone without contradiction. Under the first formulation of the categorical imperative, what must your maxim be something you can do?",
      correct: "Will to become a universal law of nature.",
      wrong: [["Use to maximize the greatest good for the greatest number.", "That is utilitarian reasoning, not Kant's universal-law test.", "Kant is testing maxims, not summing happiness."], ["Defend based on your personal cultural values.", "Kant wants a rational and universal test, not local preference.", "The rule must apply beyond your convenience."], ["Use to achieve your personal goals.", "That is closer to a hypothetical imperative.", "The categorical imperative is unconditional."]],
      lesson: "Kant's first formulation asks you to act only on a maxim you can rationally will as a universal law. A maxim is the rule you are really following, such as 'lie when it benefits me.'\n\nIf universalizing the rule breaks the practice it depends on, the rule fails. It is a moral copy-paste test: if everyone used it, would the rule still make sense?",
      solution: "The maxim must be one you can will to become a universal law. That means the rule behind your action should be rationally fit for everyone, not just convenient for you in one case.",
      mentorHint: "Ask whether the rule can survive being universalized. Kant is looking for consistency and duty.",
      alternatePrompts: {
        plain: "What does the first formulation of Kant's categorical imperative require?",
        teaching: "If your private rule were copied by everyone, would it still work? Which Kantian test asks that?",
      },
      challengeRating: 6,
    },
    {
      id: 17204,
      chapter: "Stretch Zone",
      title: "Ethics: Utilitarianism",
      prompt: "Rule utilitarianism does not ask you to calculate from scratch every second. It asks whether the rule guiding an action would do what if generally followed?",
      correct: "It conforms to a rule that, if generally followed, would maximize overall societal happiness.",
      wrong: [["It maximizes happiness in that specific, isolated instance.", "That is act utilitarianism.", "Rule utilitarianism evaluates general rules."], ["It fulfills a duty commanded by God.", "That is divine command theory.", "This view is still consequence-based."], ["It ensures perfect equality of outcomes.", "Utilitarianism maximizes total welfare; equality may matter, but it is not the definition.", "Look for overall utility."]],
      lesson: "Rule utilitarianism judges actions by asking whether they fit rules whose general adoption would maximize utility. It keeps the consequentialist goal, but it evaluates stable rules rather than every action in isolation.\n\nThat helps explain why a rule against lying can be useful even when one lie looks tempting. A society where trust works may create more total welfare than constant case-by-case cleverness.",
      solution: "For rule utilitarianism, an action is right when it follows a rule that would maximize overall happiness or welfare if generally adopted. The unit being evaluated is the rule, not only the one isolated act.",
      mentorHint: "Keep the utilitarian goal, but shift the lens from one act to the general rule.",
      alternatePrompts: {
        plain: "How does rule utilitarianism decide whether an action is morally right?",
        teaching: "Instead of asking whether this one lie helps, which utilitarian view asks whether a general permission to lie would improve society?",
      },
      challengeRating: 5,
    },
    {
      id: 17205,
      chapter: "Stretch Zone",
      title: "Logic: Deductive Validity",
      prompt: "A deductive argument is valid when its form preserves truth perfectly. Which test captures validity, even if the example uses silly premises?",
      correct: "It is impossible for the premises to be true and the conclusion to be false simultaneously.",
      wrong: [["The premises are factually true in the real world.", "That is needed for soundness, not validity by itself.", "Validity is about truth preservation if the premises were true."], ["The conclusion is likely to be true based on the evidence.", "That describes inductive strength.", "Deduction is stricter than likelihood."], ["It is persuasive to a rational audience.", "Persuasion is rhetoric, not formal validity.", "A valid argument can be unpersuasive if the premises are odd."]],
      lesson: "Deductive validity is a structural property. An argument is valid if there is no possible situation where the premises are true and the conclusion false.\n\nValidity does not guarantee the premises are actually true. 'All mugs are planets; this cup is a mug; therefore this cup is a planet' has a valid shape but disastrous content.",
      solution: "The validity test is impossibility: if the premises were true, the conclusion could not be false. Factual truth is a separate issue handled by soundness.",
      mentorHint: "Do not check real-world truth first. Check whether the conclusion is forced by the premises.",
      alternatePrompts: {
        plain: "What does deductive validity require?",
        teaching: "How can an argument have nonsense premises but still pass the formal logic test?",
      },
      challengeRating: 5,
    },
    {
      id: 17206,
      chapter: "Stretch Zone",
      title: "Political Philosophy",
      prompt: "Rawls uses the veil of ignorance to stop people from designing rules that secretly favor their own position. What is the thought experiment meant to ensure?",
      correct: "Principles of justice are chosen without bias regarding one's own social position, wealth, or abilities.",
      wrong: [["The philosopher king retains absolute power.", "That belongs to Plato's political philosophy.", "Rawls is building fairness through impartial choice."], ["Everyone is forced to be strictly equal in outcome.", "Rawls allows some inequalities under constraints such as the difference principle.", "The veil is about unbiased rule choice."], ["Property rights are established as absolute.", "That is closer to libertarian theories such as Nozick's.", "Rawls balances liberty and fairness."]],
      lesson: "Rawls asks people to choose principles of justice without knowing their own place in society. That makes it harder to choose rules that favor your class, talent, identity, or wealth.\n\nThe point is impartiality. You have to design the social game before knowing which starting square you will land on.",
      solution: "The veil of ignorance is meant to make principles of justice unbiased with respect to your own social position, wealth, abilities, and identity. You choose rules without knowing whether they will personally advantage you.",
      mentorHint: "The veil removes self-serving information. That is why it supports fairness.",
      alternatePrompts: {
        plain: "Why does Rawls put people behind a veil of ignorance?",
        teaching: "If you do not know whether you will be advantaged or disadvantaged, what kind of social rules are you more likely to choose?",
      },
      challengeRating: 5,
    },
    {
      id: 17207,
      chapter: "Stretch Zone",
      title: "Existentialism: Bad Faith",
      prompt: "Sartre thinks people sometimes hide from their freedom by pretending they are only a role, job, label, or circumstance. What is bad faith?",
      correct: "Denies their radical freedom and acts as if they are an object determined by external circumstances.",
      wrong: [["Lies to another person for personal gain.", "Ordinary lying can happen, but Sartrean bad faith is self-deception about freedom.", "The target is a lie to oneself."], ["Believes in God without empirical evidence.", "Sartre was an atheist, but bad faith is not simply religious belief.", "It is about fleeing responsibility."], ["Fails to follow the categorical imperative.", "That is Kantian vocabulary.", "Sartre is focused on freedom, choice, and authenticity."]],
      lesson: "Bad faith is Sartre's name for self-deception about freedom. A person acts as if they are merely a fixed thing, role, or circumstance, rather than a being who must choose and take responsibility.\n\nThe idea can feel intense because Sartre makes freedom hard to dodge. Even refusing to choose becomes a kind of choice.",
      solution: "Bad faith occurs when someone denies their freedom and treats themselves as if they were only an object, role, or externally determined thing. It is a way of escaping responsibility through self-deception.",
      mentorHint: "Look for self-deception about freedom. Bad faith is not just any lie.",
      alternatePrompts: {
        plain: "What does Sartre mean by bad faith?",
        teaching: "If someone says 'I had no choice, this role completely defines me,' which existentialist mistake might Sartre diagnose?",
      },
      challengeRating: 6,
    },
    {
      id: 17208,
      chapter: "Stretch Zone",
      title: "Philosophy of Science",
      prompt: "Popper thought a scientific theory should make risky contact with evidence. What feature lets a theory be tested by possibly showing it is wrong?",
      correct: "Falsifiability—the capacity to be proven wrong by empirical evidence.",
      wrong: [["Verifiability—the ability to be proven absolutely true.", "Popper emphasized that universal theories are not conclusively verified by repeated successes.", "One counterexample can matter."], ["Consensus—the agreement of the scientific community.", "Consensus can be important socially, but it is not Popper's demarcation test.", "The theory must risk failure."], ["Mathematical elegance.", "Elegance can be appealing, but Popper's criterion is empirical testability.", "Ask what evidence could rule it out."]],
      lesson: "For Popper, falsifiability helps separate scientific theories from claims that can absorb every possible outcome. A theory is scientific when it makes claims that evidence could in principle show to be false.\n\nThe key is risk. A theory that forbids nothing and explains everything after the fact may feel impressive, but it gives evidence no real way to bite.",
      solution: "Popper's criterion is falsifiability: a scientific theory must be testable in a way that could show it is false. It should make risky predictions or constraints that evidence can challenge.",
      mentorHint: "Ask what observation would count against the theory. If nothing could, Popper gets suspicious.",
      alternatePrompts: {
        plain: "What did Popper mean by falsifiability?",
        teaching: "Why is a theory stronger, scientifically, when it risks being wrong instead of explaining every possible result?",
      },
      challengeRating: 5,
    },
    {
      id: 17209,
      chapter: "Stretch Zone",
      title: "Aesthetics",
      prompt: "Kant's disinterested judgment of beauty is not boredom. It means your appreciation is not driven by wanting to own, use, eat, profit from, or morally approve the object. Which answer captures that?",
      correct: "It is not based on any personal desire, utility, or moral interest in the existence of the object.",
      wrong: [["The viewer finds the artwork boring.", "Disinterested does not mean uninterested.", "It means free from desire or use."], ["The artwork has no commercial value.", "The market price is not the point.", "Kant is describing the viewer's stance."], ["It is judged purely by its moral message.", "Kant distinguishes aesthetic judgment from moral judgment.", "Beauty is not simply usefulness or virtue."]],
      lesson: "In Kantian aesthetics, disinterested pleasure means appreciating beauty without wanting the object for some practical purpose. You are not judging it because it is useful, profitable, edible, morally admirable, or yours.\n\nThat does not make the response cold. It means the pleasure is tied to the form of the experience rather than to a private appetite.",
      solution: "A disinterested judgment is not based on personal desire, utility, ownership, profit, or moral interest in the object's existence. It is a way of appreciating beauty without using the object as a means to another end.",
      mentorHint: "Disinterested does not mean bored. It means not driven by desire, usefulness, or ownership.",
      alternatePrompts: {
        plain: "What does Kant mean by a disinterested judgment of taste?",
        teaching: "How can you deeply enjoy a painting without wanting to own it, use it, or turn it into a moral lesson?",
      },
      challengeRating: 6,
    },
    {
      id: 17210,
      chapter: "Stretch Zone",
      title: "Philosophy of Language",
      prompt: "Later Wittgenstein treats words less like museum labels and more like tools used in social activities. Where does meaning come from on this view?",
      correct: "Its use within a specific 'language-game,' rather than an inherent connection to an object.",
      wrong: [["Its logical mapping to a state of affairs in the world.", "That is closer to Wittgenstein's earlier Tractatus view.", "The later view emphasizes ordinary use."], ["The dictionary definition determined by experts.", "Dictionaries track use; they do not create all meaning from above.", "Meaning lives in practice."], ["An eternal Platonic form it represents.", "The later Wittgenstein resists hidden essences.", "Look for use, context, and form of life."]],
      lesson: "Later Wittgenstein argues that meaning is use. Words get their life inside language-games: shared practices where people ask, promise, measure, joke, command, explain, and respond.\n\nSo a word is more like a tool in a toolbox than a label glued to one eternal object. To understand it, watch how people use it in context.",
      solution: "On Wittgenstein's later view, a word's meaning comes from its use within a language-game and a form of life. Meaning is social and practical, not just a hidden link between word and object.",
      mentorHint: "Think tools, not museum labels. The later Wittgenstein asks how the word is used.",
      alternatePrompts: {
        plain: "How does later Wittgenstein explain the meaning of words?",
        teaching: "If the same word works differently in a joke, a command, and a measurement, what does that suggest about meaning?",
      },
      challengeRating: 6,
    },
  ]), ...openLogicProjectPhilosophyQuestions, ...philosophyWorkoutGeneratedQuestions],
  artHistory: [...artHistoryWorkoutGeneratedQuestions],
  dataStructures: [...makeQuestionBank('University', [
    { id: 16701, chapter: 'Stacks, Queues, and Deques', title: 'Stack rule', prompt: 'A stack usually follows which rule?', correct: 'Last in, first out', wrong: [['First in, first out', 'That describes a queue.', 'Stacks pop the newest item first.'], ['Random in, random out', 'Standard stacks are not random.', 'Use the LIFO rule.'], ['All in, none out', 'That is not a useful data structure rule.', 'Stacks support push and pop.']] },
    { id: 16702, chapter: 'Stacks, Queues, and Deques', title: 'Queue rule', prompt: 'A queue usually follows which rule?', correct: 'First in, first out', wrong: [['Last in, first out', 'That is stack behavior.', 'Queues process oldest items first.'], ['Only numbers allowed', 'Queues can store many data types.', 'The rule is about order, not type.'], ['Everything at once', 'Queues process in sequence.', 'Think line at a ticket booth.']] },
    { id: 16703, chapter: 'Recursion, Trees, and Binary Search Trees', title: 'Tree clue', prompt: 'A tree data structure is useful when data has:', correct: 'Parent-child relationships', wrong: [['Only one value forever', 'Trees hold structured collections, not a single fixed value.', 'Think branching relationships.'], ['No hierarchy at all', 'Trees are explicitly hierarchical.', 'Hierarchy is the clue.'], ['Only circular edges every time', 'Cycles are not the core tree property.', 'Trees are branching, not cyclic by default.']] },
    { id: 16704, chapter: 'Hash Tables and Sets', title: 'Hash map strength', prompt: 'Why are hash maps often useful?', correct: 'They support fast lookup by key', wrong: [['They always sort data alphabetically', 'Hash maps are not mainly sorting tools.', 'Their strength is keyed access.'], ['They remove the need for memory', 'They still use memory.', 'Speed comes with storage tradeoffs.'], ['They can only store one item', 'Hash maps store many key-value pairs.', 'Think lookup by key.']] },
    { id: 16705, chapter: "Complexity Analysis", title: "Merge Sort Time Complexity", prompt: "What is the Big-O time complexity of a recursive algorithm described by the recurrence relation T(n) = 2T(n/2) + O(n)?", correct: "O(n log n)", wrong: [["O(n^2)", "This would happen if T(n) = T(n-1) + O(n).", "Think of a tree of depth log(n) where each level does O(n) work."], ["O(n)", "This would be T(n) = T(n/2) + O(1).", "The work isn't halving; it's branching."], ["O(log n)", "This is binary search.", "You process all n elements at each level."]] },
    { id: 16706, chapter: "Linked Lists", title: "Cycle Detection", prompt: "Which algorithm is commonly used to detect a cycle or loop in a singly linked list with O(1) space complexity?", correct: "Floyd's Cycle-Finding Algorithm (Tortoise and Hare)", wrong: [["Dijkstra's Algorithm", "Dijkstra is for shortest paths in graphs.", "Think of two pointers moving at different speeds."], ["Kruskal's Algorithm", "Kruskal is for Minimum Spanning Trees.", "It involves a fast pointer and a slow pointer."], ["Breadth-First Search", "BFS uses a queue, which requires O(n) space.", "We need O(1) space."]] },
    { id: 16707, chapter: "Hash Tables", title: "Open Addressing", prompt: "In open addressing, which collision resolution technique is most vulnerable to primary clustering?", correct: "Linear Probing", wrong: [["Quadratic Probing", "Quadratic probing suffers from secondary clustering, not primary.", "Primary clustering is when sequential gaps fill up and merge into large blocks."], ["Double Hashing", "Double hashing avoids both primary and secondary clustering well.", "This technique simply steps forward by 1."], ["Chaining", "Chaining uses linked lists, not open addressing.", "It's the simplest probing method."]] },
    { id: 16708, chapter: "Trees", title: "BST Deletion", prompt: "When deleting a node with two children in a Binary Search Tree (BST), you must replace it with:", correct: "Its in-order successor or in-order predecessor", wrong: [["Its left child", "The left child might have a right subtree that would violate BST properties.", "You need the next largest or next smallest value."], ["The root of the tree", "Replacing it with the root would destroy the tree structure.", "Find a leaf or a node with one child to swap."], ["A newly created null node", "You can't just delete it; you must maintain the tree structure for the children.", "Look for the minimum value in the right subtree."]] },
    { id: 16709, chapter: "Trees", title: "AVL Rotations", prompt: "In an AVL tree, if an insertion occurs in the right subtree of the left child of an unbalanced node, which rotation is required?", correct: "Left-Right (LR) Rotation", wrong: [["Single Right (LL) Rotation", "LL is used for an insertion in the left subtree of the left child.", "The insertion path 'zig-zags' (Left then Right)."], ["Single Left (RR) Rotation", "RR is for the right subtree of the right child.", "It requires a double rotation."], ["Right-Left (RL) Rotation", "RL is for an insertion in the left subtree of the right child.", "Match the path: Left child, Right subtree."]] },
    { id: 16710, chapter: "Heaps", title: "Building a Heap", prompt: "What is the worst-case time complexity of building a binary heap from an unsorted array using the optimal 'heapify' (bottom-up) approach?", correct: "O(n)", wrong: [["O(n log n)", "This is the time it takes to sort using a heap, or build it by inserting n elements one by one.", "The bottom-up approach is mathematically faster."], ["O(n^2)", "Heap operations are bounded by the height of the tree (log n).", "Most nodes are near the bottom and don't need to sift down far."], ["O(log n)", "You have to process all n elements, so it can't be faster than O(n).", "Think of the sum of heights of all nodes."]] },
    { id: 16711, chapter: "Graphs", title: "Graph Representation", prompt: "When is an Adjacency Matrix preferred over an Adjacency List?", correct: "When the graph is dense and edge existence queries are frequent", wrong: [["When the graph is very sparse", "A matrix would waste a lot of space (O(V^2)) for a sparse graph.", "Think about memory efficiency vs query speed."], ["When you need to iterate over all neighbors quickly", "An adjacency list is faster for iterating over neighbors.", "A matrix allows O(1) checks for a specific edge."], ["When memory space is severely limited", "A matrix uses O(V^2) memory regardless of edges, which is bad for limited memory.", "Dense graphs have edges approaching V^2."]] },
    { id: 16712, chapter: "Graphs", title: "Dijkstra's Algorithm", prompt: "Why does standard Dijkstra's algorithm fail with negative edge weights?", correct: "It assumes that once a node's shortest path is finalized, it cannot be reduced by subsequent longer paths", wrong: [["It cannot process floating-point numbers", "Edge weights can be any numerical type.", "It's a greedy algorithm."], ["It uses a stack instead of a queue", "Dijkstra uses a priority queue.", "The greedy choice assumes adding edges only increases total cost."], ["It requires the graph to be a tree", "Dijkstra works on general graphs with cycles.", "Negative edges allow a path to get 'shorter' by adding more edges."]] },
    { id: 16713, chapter: "Graphs", title: "Minimum Spanning Trees", prompt: "Kruskal's algorithm for finding a Minimum Spanning Tree typically uses which data structure to efficiently detect cycles?", correct: "Disjoint Set (Union-Find)", wrong: [["Priority Queue", "While it uses a priority queue/sort for edges, the cycle detection is done elsewhere.", "It needs to track connected components."], ["Hash Table", "Hash tables don't easily track merging sets.", "Think of operations like 'find' and 'union'."], ["Binary Search Tree", "A BST is too slow for merging sets of vertices.", "It keeps track of which vertices are in which tree."]] },
    { id: 16714, chapter: "Stretch Zone", title: "Disjoint Sets", prompt: "In a Disjoint Set data structure, the 'path compression' optimization ensures that:", correct: "Nodes along the path of a 'Find' operation are attached directly to the root", wrong: [["The height of the tree is always exactly 2", "The height is flattened, but not strictly guaranteed to be exactly 2 instantly.", "It flattens the tree to speed up future operations."], ["All sets are merged into one single set", "Union operations merge sets, path compression just flattens them.", "It optimizes the 'Find' step."], ["Memory usage is compressed by removing unused nodes", "Nodes are never removed; the pointers are just updated.", "It makes subsequent 'Find' calls O(1) amortized."]] },
  ]), ...openLogicProjectDataStructuresQuestions, ...logicCsAdditionalDataStructuresQuestions, ...dataStructuresWorkoutGeneratedQuestions],
  internationalRelations: [...makeQuestionBank('University', [
    { id: 16801, chapter: 'What Is International Relations?', title: 'State actor', prompt: 'In international relations, a state usually means:', correct: 'A politically organized sovereign country', wrong: [['A subnational province with no sovereignty', 'Provinces lack the sovereignty central to IR usage.', 'State here means political entity.'], ['A single city without diplomatic recognition', 'Cities are not sovereign and are too small.', 'Think country-level actor.'], ['A private corporation', 'Firms can be transnational actors, but are not states.', 'Use the political definition.']] },
    { id: 16802, chapter: 'States, Foreign Policy, and Diplomacy', title: 'Diplomacy role', prompt: 'Diplomacy is mainly about:', correct: 'Managing relations and negotiation between political actors', wrong: [['Only military invasion', 'That is force, not diplomacy.', 'Diplomacy emphasizes communication and bargaining.'], ['Ignoring all other countries', 'That blocks relations rather than managing them.', 'It is about engagement.'], ['Issuing unilateral commands without negotiation', 'Coercion bypasses the bargaining and dialogue that define diplomacy.', 'Use the negotiation idea.']] },
    { id: 16803, chapter: 'States, Foreign Policy, and Diplomacy', title: 'Alliance idea', prompt: 'An alliance is usually:', correct: 'An agreement for cooperation between states', wrong: [['A purely economic free-trade pact only', 'Free-trade pacts are agreements, but alliances usually carry security obligations as well.', 'Alliances are political agreements.'], ['A unilateral declaration by one country', 'An alliance requires consent from more than one party.', 'Think coordinated cooperation.'], ['An informal social grouping with no obligations', 'Alliances impose obligations on the parties.', 'Use the agreement idea.']] },
    { id: 16804, chapter: 'Theories of World Politics', title: 'Soft power', prompt: 'Soft power refers to influence through:', correct: 'Attraction, persuasion, and cultural appeal', wrong: [['Only tanks and missiles', 'That is hard power.', 'Soft power works through attraction and legitimacy.'], ['Economic sanctions and embargoes', 'Sanctions are coercive — closer to hard or economic power.', 'Think influence without coercion.'], ['Covert military action', 'Force, overt or covert, is not soft power.', 'It is a form of non-coercive influence.']] },
    { id: 16805, chapter: "Grand Theories", title: "Structural Realism", prompt: "According to Kenneth Waltz's structural realism (neorealism), state behavior is primarily determined by:", correct: "The anarchic structure of the international system and the distribution of capabilities", wrong: [["The personal morality of state leaders", "This is closer to classical realism (human nature) or constructivism.", "Structural realism ignores domestic politics."], ["The type of economic system within a state", "This is a Marxist or liberal view.", "It focuses on the 'structure' of the system."], ["The influence of international organizations like the UN", "Realists believe international organizations are just tools of powerful states.", "Anarchy means there is no global 911."]] },
    { id: 16806, chapter: "Grand Theories", title: "Democratic Peace Theory", prompt: "The core mechanism behind Democratic Peace Theory (the observation that democracies rarely fight each other) is thought to be:", correct: "Institutional constraints (checks and balances) and shared norms of peaceful conflict resolution", wrong: [["Democracies have smaller militaries than autocracies", "Democracies often have very powerful militaries.", "It's about how leaders are held accountable."], ["Authoritarian leaders are biologically more aggressive", "The theory is based on institutions, not biology.", "Think about elections and public opinion."], ["Capitalism makes war unprofitable", "While related (commercial peace), the specific democratic peace focuses on governance.", "It's about the political system's structure."]] },
    { id: 16807, chapter: "Grand Theories", title: "Constructivism", prompt: "Alexander Wendt's famous phrase 'Anarchy is what states make of it' implies that:", correct: "Anarchy does not inherently dictate self-help; its effects depend on shared ideas and identities", wrong: [["There is a global government secretly controlling anarchy", "Constructivism does not claim a secret world government.", "It focuses on social construction."], ["States can easily vote to eliminate anarchy", "Anarchy is a structural fact, but its meaning is fluid.", "Think about how enemies view each other vs how allies do."], ["Anarchy only exists in failing states", "Anarchy in IR means the lack of a supreme global authority, which applies everywhere.", "Ideas matter as much as material power."]] },
    { id: 16808, chapter: "Foreign Policy", title: "Bureaucratic Politics", prompt: "The Bureaucratic Politics Model (Allison's Model III) suggests that foreign policy decisions are:", correct: "The result of bargaining, pulling, and hauling between different government agencies", wrong: [["Calculated choices made by a single rational actor maximizing national interest", "This is the Rational Actor Model (Model I).", "Think 'where you stand depends on where you sit'."], ["Dictated entirely by public opinion polls", "Bureaucracies often insulate themselves from direct public opinion.", "It focuses on internal government dynamics."], ["Random decisions based on the mood of the leader", "Decisions are highly structured by organizational routines and interests.", "Agencies fight for budget and influence."]] },
    { id: 16809, chapter: "Foreign Policy", title: "Nuclear Deterrence", prompt: "For Mutually Assured Destruction (MAD) to be a stable deterrent, both opposing states must possess:", correct: "A secure second-strike capability", wrong: [["An overwhelming first-strike advantage", "If one has a first-strike advantage, MAD fails because they can win a nuclear war.", "Both sides must know they will be destroyed even if they attack first."], ["A comprehensive missile defense system", "Perfect missile defense would actually undermine MAD by making retaliation impossible.", "Vulnerability is key to MAD."], ["Equal numbers of conventional ground troops", "Nuclear deterrence relies on nuclear weapons, not conventional forces.", "The ability to retaliate after being hit."]] },
    { id: 16810, chapter: "International Law", title: "Responsibility to Protect", prompt: "The 'Responsibility to Protect' (R2P) doctrine fundamentally challenges which traditional Westphalian concept?", correct: "Absolute state sovereignty and non-interference in domestic affairs", wrong: [["The balance of power", "R2P is a human rights norm, not a power-balancing strategy.", "It involves intervening inside another country's borders."], ["Free trade and globalization", "R2P is about atrocities, not economics.", "Westphalia established that a king rules his own territory exclusively."], ["Nuclear non-proliferation", "R2P applies to conventional atrocities and genocide.", "It redefines sovereignty as a responsibility, not a right."]] },
    { id: 16811, chapter: "International Law", title: "UN Security Council", prompt: "A major structural limitation of the UN Security Council in resolving conflicts involving major powers is:", correct: "The veto power held by the five permanent members (P5)", wrong: [["It has no military force to deploy", "The UN can deploy peacekeepers, though they are borrowed.", "The problem is decision-making paralysis."], ["It must get unanimous approval from all 193 member states", "That is the General Assembly's realm, and even they don't require unanimity.", "Only 5 countries have this special power."], ["It only meets once a year", "The Security Council is designed to function continuously.", "Any of the five winners of WWII can block a resolution."]] },
    { id: 16812, chapter: "International Political Economy", title: "Bretton Woods", prompt: "The Bretton Woods system (established in 1944) was originally designed to:", correct: "Establish a stable international monetary system based on fixed exchange rates pegged to the US dollar", wrong: [["Create a global military alliance against the Soviet Union", "That was NATO. Bretton Woods was economic.", "It created the IMF and World Bank."], ["Dismantle all tariffs and implement immediate global free trade", "GATT aimed to reduce tariffs, but the system allowed for controlled economies.", "It focused on monetary stability to prevent another Great Depression."], ["Fund the colonization of the developing world", "It was designed to rebuild post-war Europe and stabilize global finance.", "Think 'gold standard' and 'exchange rates'."]] },
    { id: 16813, chapter: "International Political Economy", title: "Comparative Advantage", prompt: "According to the theory of Comparative Advantage, free trade benefits two countries even if one is less efficient at producing everything because:", correct: "They can specialize in producing goods where their relative opportunity cost is lowest", wrong: [["The wealthier country will just give money to the poorer one", "Trade is about exchange, not charity.", "It's about relative efficiency, not absolute efficiency."], ["Tariffs will automatically balance the trade deficit", "Free trade theories usually oppose tariffs.", "Think about what a country is 'least bad' at producing."], ["The global supply of gold increases", "This is a mercantilist view.", "Specialization increases total global output."]] },
    { id: 16814, chapter: "Contemporary Challenges", title: "Hegemonic Stability", prompt: "According to Hegemonic Stability Theory, a liberal, open international economy is most likely to flourish when:", correct: "A single dominant global power is willing and able to enforce the rules of the system", wrong: [["Power is distributed equally among a dozen regional powers", "The theory claims multipolarity leads to protectionism and instability.", "It requires a 'hegemon'."], ["The United Nations is given absolute control over global trade", "The theory focuses on state power, not international organizations.", "Think of the British Empire in the 19th century or the US post-WWII."], ["All states adopt a strict mercantilist policy", "Mercantilism is the opposite of an open, liberal economy.", "One country bears the costs of keeping the system open."]] },
  ]), ...internationalRelationsWorkoutGeneratedQuestions],
  marketing: [...makeQuestionBank('University', [
    { id: 420051, chapter: 'Segmentation, Targeting, and Positioning', title: 'Target audience', prompt: 'A target audience is:', correct: 'The group a message or product is mainly aimed at', wrong: [['Every person on Earth equally', 'Marketing without targeting wastes spend; even mass brands define a primary segment.', 'Think specific intended audience.'], ['Whichever customers happen to walk in', 'That is incidental traffic, not a chosen target.', 'Targeting is strategic, not random.'], ['The set of competitors you face', 'Competitors are an environment factor, not the audience.', 'Focus on who the message is for.']] },
    { id: 420052, chapter: 'Marketing, Value, and Strategy', title: 'Brand role', prompt: 'A brand mainly helps customers:', correct: 'Recognize and form expectations about a product or company', wrong: [['Avoid making any decisions', 'Brands often guide decisions rather than remove them.', 'Recognition and trust are key roles.'], ['Receive a guaranteed lowest price', 'Strong brands often command price premiums rather than discounts.', 'Think identity and expectation.'], ['Turn off all competition', 'Brand strength helps, but does not erase competition.', 'Use the recognition idea.']] },
    { id: 420053, chapter: 'Marketing, Value, and Strategy', title: 'Value proposition', prompt: 'A value proposition explains:', correct: 'Why a customer should choose a product', wrong: [['Only the production cost of the product', 'Cost is internal; value propositions look outward at the customer.', 'Value propositions state customer benefit.'], ['How much profit the firm makes', 'Profit is a firm-side outcome, not a customer-facing promise.', 'Focus on customer value.'], ['The complete legal terms of the sale', 'Legal terms are contractual fine print, not the buying reason.', 'Use the benefit-and-choice idea.']] },
    { id: 420054, chapter: 'Metrics, Analytics, and Marketing Performance', title: 'Conversion clue', prompt: 'A conversion usually means:', correct: 'A user took the action you wanted them to take', wrong: [['A page redesign was published', 'A design change is an input, not a conversion outcome.', 'Think desired action like sign-up or purchase.'], ['Every visitor left immediately', 'That is bounce, the opposite of many conversion goals.', 'Use the goal-completion idea.'], ['A new ad creative was launched', 'Launching creative is upstream of measuring conversions.', 'Conversion is about user behavior.']] },
    { id: 420055, chapter: "Strategy", title: "BCG Matrix", prompt: "In the BCG Growth-Share Matrix, a 'Question Mark' represents a product or business unit with:", correct: "Low market share in a high-growth market", wrong: [["High market share in a low-growth market", "This is a 'Cash Cow'.", "It requires heavy investment to gain share."], ["Low market share in a low-growth market", "This is a 'Dog'.", "The market is growing, but the product isn't keeping up yet."], ["High market share in a high-growth market", "This is a 'Star'.", "Management must decide whether to invest to make it a Star, or phase it out."]] },
    { id: 420056, chapter: "Strategy", title: "Macroenvironment", prompt: "A PESTLE analysis is a strategic tool primarily used to evaluate:", correct: "External macro-environmental factors (Political, Economic, etc.) that can impact a business", wrong: [["Internal company strengths and weaknesses", "This is part of a SWOT analysis.", "These are factors the company cannot directly control."], ["The effectiveness of a specific advertising campaign", "PESTLE is a high-level strategic tool.", "It looks at the 'big picture' world trends."], ["The individual psychological traits of a target customer", "This is psychographic segmentation.", "Think global forces."]] },
    { id: 420057, chapter: "Consumer Behavior", title: "Cognitive Dissonance", prompt: "In marketing, post-purchase 'cognitive dissonance' refers to:", correct: "Inner tension or doubt a consumer feels about whether they made the right purchase decision", wrong: [["The feeling of extreme joy after buying a luxury item", "Dissonance means disharmony or discomfort.", "Buyer's remorse."], ["The inability to remember an advertisement", "That's just forgetting.", "It happens *after* the purchase of a high-involvement item."], ["When a product breaks immediately after the warranty expires", "This causes anger, but dissonance is psychological conflict.", "Did I buy the right brand?"]] },
    { id: 420058, chapter: "Market Research", title: "Primary Data", prompt: "Which of the following is a key advantage of collecting primary data over secondary data?", correct: "It is specifically tailored to answer the exact research problem at hand", wrong: [["It is always much cheaper to collect", "Primary data (like focus groups or surveys) is usually much more expensive.", "You gather it yourself."], ["It is instantly available online", "Secondary data is what you find online; primary data takes time to gather.", "It answers YOUR specific question."], ["It requires no ethical review", "Surveying or observing people often requires ethical considerations.", "It's fresh data."]] },
    { id: 420059, chapter: "Segmentation", title: "Psychographic Segmentation", prompt: "Psychographic segmentation divides a market based on variables such as:", correct: "Lifestyle, personality traits, values, and interests", wrong: [["Age, gender, income, and education", "These are demographic variables.", "It goes beyond 'who' they are to 'why' they buy."], ["City, climate, and population density", "These are geographic variables.", "Think about a consumer's psychology."], ["Usage rate and brand loyalty", "These are behavioral variables.", "It categorizes people by their attitudes and activities."]] },
    { id: 420060, chapter: "Segmentation", title: "Perceptual Mapping", prompt: "A perceptual map is a visual tool typically used in marketing to:", correct: "Display the perceptions of customers regarding different brands relative to competitors along key dimensions", wrong: [["Track the physical GPS location of delivery trucks", "It's a map of the mind, not geography.", "It shows how a brand is 'positioned'."], ["Graph the company's revenue over the last decade", "That is a line chart.", "It usually has an X and Y axis for attributes (e.g., Price vs Quality)."], ["Map out the organizational hierarchy of a marketing department", "That is an org chart.", "It helps identify gaps in the market."]] },
    { id: 420061, chapter: "Product and Pricing", title: "Penetration Pricing", prompt: "The strategy of 'penetration pricing' involves setting an initially low price in order to:", correct: "Rapidly gain market share and achieve high sales volume before competitors react", wrong: [["Maximize short-term profit margins on each unit sold", "That is price skimming.", "Low prices mean low margins, but high volume."], ["Signal to consumers that the product is a luxury, premium item", "Low prices usually signal the opposite of luxury.", "The goal is to 'penetrate' the market deeply."], ["Recover research and development costs immediately", "Skimming is used for quick cost recovery.", "It relies on economies of scale."]] },
    { id: 420062, chapter: "Promotion", title: "PR vs Advertising", prompt: "A primary difference between advertising and public relations (PR) is that PR is typically:", correct: "Unpaid, earned media coverage focused on building a positive corporate image", wrong: [["Paid media placement with guaranteed messaging control", "That defines advertising.", "PR relies on journalists finding the story interesting."], ["Focused only on short-term sales promotions like coupons", "That is sales promotion.", "PR is about reputation."], ["Only used during a corporate crisis or scandal", "PR is a continuous effort to manage image.", "Think of a press release vs a TV commercial."]] },
    { id: 420063, chapter: "Metrics", title: "CAC and LTV", prompt: "For a business to be highly profitable and sustainable, its Customer Acquisition Cost (CAC) should ideally be:", correct: "Significantly lower than the Customer Lifetime Value (LTV)", wrong: [["Exactly equal to the Customer Lifetime Value (LTV)", "If they are equal, the company makes zero profit on the customer.", "You want to make more money from them than you spent to get them."], ["Significantly higher than the Customer Lifetime Value (LTV)", "This means the company is losing money on every customer.", "A common ratio target is LTV:CAC = 3:1."], ["Calculated without factoring in marketing expenses", "CAC is literally the calculation of marketing/sales expenses divided by new customers.", "Cost vs Value."]] },
    { id: 420064, chapter: "Stretch Zone", title: "The Decoy Effect", prompt: "In behavioral economics, the 'decoy effect' in pricing is a strategy where:", correct: "An inferior third option is presented to make one of the other options look like a much better value", wrong: [["Prices are hidden until the customer reaches the checkout", "That is drip pricing or hidden fees.", "Think of the small, medium, and large popcorn pricing at movies."], ["A fake product is advertised that the company never intends to sell", "That is closer to bait-and-switch.", "The decoy is an actual option, just a bad one."], ["The price is set just below a round number (e.g., $9.99 instead of $10.00)", "That is psychological or charm pricing.", "It relies on asymmetric dominance."]] },
  ]), ...marketingWorkoutGeneratedQuestions],
  cosmologyAndAstronomy: [
    ...openTriviaAstronomyQuestions,
    ...openTriviaAstronomyExtensionQuestions,
    ...cosmologyAstronomyExamBatch2Questions,
    ...cosmologyAstronomyWorkoutGeneratedQuestions,
  ],
  apEnvironmentalScience: [
    ...openTriviaEarthSystemsQuestions,
    ...openTriviaCuratedEnvironmentalScienceAdditionalQuestions,
    ...apEnvironmentalScienceExamBatch2Questions,
    ...apEnvironmentalScienceWorkoutGeneratedQuestions,
  ],
  }

  catalog.philosophy = enrichPhilosophyQuestions(catalog.philosophy)
  catalog.researchMethods = enrichResearchMethodsQuestions(catalog.researchMethods)
  catalog.organicChemistry = enrichOrganicChemistryQuestions(catalog.organicChemistry)
  catalog.neuroscience = enrichNeuroscienceQuestions(catalog.neuroscience)
  catalog.marketing = enrichMarketingQuestions(catalog.marketing)
  catalog.internationalRelations = enrichInternationalRelationsQuestions(catalog.internationalRelations)
  catalog.dataStructures = enrichDataStructuresQuestions(catalog.dataStructures)
  for (const trackId of ['artHistory', 'cosmologyAndAstronomy', 'introToPsychology', 'apEnvironmentalScience'] as const) {
    catalog[trackId] = enrichAcademicQuestionQuality(trackId, catalog[trackId])
  }

  const moralCrossroadsQuestions = catalog.philosophy.filter((question) => moralCrossroadsTitles.has(question.title))

  catalog.logicCriticalThinking = [
    ...catalog.philosophy.filter((question) => logicCriticalThinkingTitles.has(question.title)),
    ...openLogicProjectLogicCriticalThinkingQuestions,
    ...logicCsAdditionalLogicCriticalThinkingQuestions,
  ]
  catalog.formalLogic = [
    ...formalLogicGeneratedQuestions,
    ...formalLogicOpenLogicBatchQuestions,
    ...openLogicProjectFormalLogicQuestions,
    ...logicCsAdditionalFormalLogicQuestions,
    ...formalLogicWorkoutGeneratedQuestions,
  ]
  catalog.contemporaryEthics = [
    ...moralCrossroadsQuestions,
    ...catalog.philosophy.filter((question) => ['Ethics', 'Political Philosophy', 'Philosophy of Mind', 'Ethics and Moral Theory', 'Justice, Power, and Political Philosophy', 'Mind, Consciousness, and AI'].includes(question.chapter)),
  ]
  catalog.discreteMath = [
    ...discreteMathematicsStarterQuestions,
    ...openLogicProjectDataStructuresQuestions,
    ...logicCsAdditionalDataStructuresQuestions,
  ]
  catalog.philSenior = moralCrossroadsQuestions
  catalog.comparativePracticalPolitics = universityComparativePoliticsQuestions
  catalog.formalLogic = enrichAcademicQuestionQuality('formalLogic', catalog.formalLogic)
  catalog.comparativePracticalPolitics = enrichAcademicQuestionQuality('comparativePracticalPolitics', catalog.comparativePracticalPolitics)

  const polished: Record<string, Question[]> = {}
  for (const [trackId, questions] of Object.entries(catalog)) {
    polished[trackId] = enrichUniversityAcademicMentorHints(trackId, runUniversityPolish(questions, _universityBundle))
  }
  return polished
}
