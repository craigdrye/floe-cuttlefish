// Auto-generated aggregator (regenerate: npx tsx _gen_tiertopups.mts).
// University + high tier question top-ups (each marked generated:true). Merged into every
// catalog by loadQuestionCatalog, appended to the matching trackId. Career top-ups are NOT
// here (they merge inside buildCareerQuestionCatalog).
import { defaultQuestionScaffold } from './base'
import type { Question } from './types'
import { advancedEthicsMoralPhilosophyHighTopUpQuestions } from './advancedEthicsMoralPhilosophyHighTopUp'
import { alevelHistoryHighTopUpQuestions } from './alevelHistoryHighTopUp'
import { alevelMathsHighTopUpQuestions } from './alevelMathsHighTopUp'
import { algorithmsTopUpQuestions } from './algorithmsTopUp'
import { anatomyAndPhysiologyTopUpQuestions } from './anatomyAndPhysiologyTopUp'
import { basic_html_and_html5HighTopUpQuestions } from './basic_html_and_html5HighTopUp'
import { chessTacticsHighTopUpQuestions } from './chessTacticsHighTopUp'
import { climateProjectHighTopUpQuestions } from './climateProjectHighTopUp'
import { colSeventhGradeMathHighTopUpQuestions } from './col-7th-grade-mathHighTopUp'
import { colEighthGradeMathHighTopUpQuestions } from './col-8th-grade-mathHighTopUp'
import { colALevelBiologyHighTopUpQuestions } from './col-a-level-biologyHighTopUp'
import { colGcseMathsUkHighTopUpQuestions } from './col-gcse-maths-ukHighTopUp'
import { colGrammarHighTopUpQuestions } from './col-grammarHighTopUp'
import { colHighSchoolBiologyNgssHighTopUpQuestions } from './col-high-school-biology-ngssHighTopUp'
import { colHighSchoolChemistryHighTopUpQuestions } from './col-high-school-chemistryHighTopUp'
import { colHighSchoolPhysicsHighTopUpQuestions } from './col-high-school-physicsHighTopUp'
import { colIntegratedMath1HighTopUpQuestions } from './col-integrated-math-1HighTopUp'
import { colJeeMainPrepIndiaHighTopUpQuestions } from './col-jee-main-prep-indiaHighTopUp'
import { col7thGradeReadingAndVocabHighTopUpQuestions } from './col7thGradeReadingAndVocabHighTopUp'
import { col9thGradeReadingVocabHighTopUpQuestions } from './col9thGradeReadingVocabHighTopUp'
import { colIntegratedMath2HighTopUpQuestions } from './colIntegratedMath2HighTopUp'
import { collegeAdmissionsHighTopUpQuestions } from './collegeAdmissionsHighTopUp'
import { constitution101HighTopUpQuestions } from './constitution101HighTopUp'
import { contemporaryEthicsTopUpQuestions } from './contemporaryEthicsTopUp'
import { creativeWritingStudioHighTopUpQuestions } from './creativeWritingStudioHighTopUp'
import { detectiveLogicHighTopUpQuestions } from './detectiveLogicHighTopUp'
import { discreteMathTopUpQuestions } from './discreteMathTopUp'
import { earthScienceHighTopUpQuestions } from './earthScienceHighTopUp'
import { electricalEngineeringTopUpQuestions } from './electricalEngineeringTopUp'
import { englishComposition101TopUpQuestions } from './englishComposition101TopUp'
import { epistemologyBasicsHighTopUpQuestions } from './epistemologyBasicsHighTopUp'
import { eurekaMathPrecalculusTopUpQuestions } from './eurekaMathPrecalculusTopUp'
import { existentialismHighTopUpQuestions } from './existentialismHighTopUp'
import { financeAndCapitalMarketsHighTopUpQuestions } from './financeAndCapitalMarketsHighTopUp'
import { financialAccountingTopUpQuestions } from './financialAccountingTopUp'
import { gameDesignBasicsHighTopUpQuestions } from './gameDesignBasicsHighTopUp'
import { genBio1TopUpQuestions } from './genBio1TopUp'
import { genChem1TopUpQuestions } from './genChem1TopUp'
import { genPhys1TopUpQuestions } from './genPhys1TopUp'
import { generalBiology2TopUpQuestions } from './generalBiology2TopUp'
import { generalChemistry2TopUpQuestions } from './generalChemistry2TopUp'
import { generalPhysics2TopUpQuestions } from './generalPhysics2TopUp'
import { handsOnScienceHighTopUpQuestions } from './handsOnScienceHighTopUp'
import { hscVceMathsHighTopUpQuestions } from './hscVceMathsHighTopUp'
import { introToEthicsHighTopUpQuestions } from './introToEthicsHighTopUp'
import { introToSociologyTopUpQuestions } from './introToSociologyTopUp'
import { lifeSkillsAndAdultingHighTopUpQuestions } from './lifeSkillsAndAdultingHighTopUp'
import { lifeSkillsUniTopUpQuestions } from './lifeSkillsUniTopUp'
import { logicAndArgumentationHighTopUpQuestions } from './logicAndArgumentationHighTopUp'
import { logicCriticalThinkingTopUpQuestions } from './logicCriticalThinkingTopUp'
import { lsatTopUpQuestions } from './lsatTopUp'
import { mathSeniorTopUpQuestions } from './mathSeniorTopUp'
import { mcatTopUpQuestions } from './mcatTopUp'
import { middleSchoolBigHistoryHighTopUpQuestions } from './middleSchoolBigHistoryHighTopUp'
import { middleSchoolBiologyHighTopUpQuestions } from './middleSchoolBiologyHighTopUp'
import { middleSchoolChemistryHighTopUpQuestions } from './middleSchoolChemistryHighTopUp'
import { middleSchoolEarthSpaceHighTopUpQuestions } from './middleSchoolEarthSpaceHighTopUp'
import { middleSchoolPhysicsHighTopUpQuestions } from './middleSchoolPhysicsHighTopUp'
import { mythologyAndMonstersHighTopUpQuestions } from './mythologyAndMonstersHighTopUp'
import { naplanYear7HighTopUpQuestions } from './naplanYear7HighTopUp'
import { naplanYear9HighTopUpQuestions } from './naplanYear9HighTopUp'
import { philJuniorTopUpQuestions } from './philJuniorTopUp'
import { philSophomoreTopUpQuestions } from './philSophomoreTopUp'
import { philosophyCapstoneHighTopUpQuestions } from './philosophyCapstoneHighTopUp'
import { readingVocab8thHighTopUpQuestions } from './readingVocab8thHighTopUp'
import { researchTopUpQuestions } from './researchTopUp'
import { sqlFoundationsTopUpQuestions } from './sqlFoundationsTopUp'
import { tenthGradeReadingVocabHighTopUpQuestions } from './tenthGradeReadingVocabHighTopUp'
import { uniScienceTopUpQuestions } from './uniScienceTopUp'
import { usGovAndCivicsHighTopUpQuestions } from './usGovAndCivicsHighTopUp'
import { usHistoryHighTopUpQuestions } from './usHistoryHighTopUp'

const GENERIC_TIER_TOPUP_HINTS = new Set([
  'Translate the question into the core concept first, then eliminate answers that do not match the wording.',
  ...(['Mathematics', 'Statistics', 'Research', 'University', 'Science', 'High', 'AP', 'A-level'] as const)
    .map(topic => defaultQuestionScaffold(topic, '__', '__').mentorHint),
])

function tierTopUpHint(trackId: string, question: Question): string {
  const text = `${trackId} ${question.topic} ${question.chapter} ${question.title} ${question.prompt}`.toLowerCase()

  if (text.includes('math') || text.includes('algebra') || text.includes('precalculus') || text.includes('calculus') || text.includes('equation') || text.includes('function')) {
    if (text.includes('derivative') || text.includes('integral') || text.includes('limit')) {
      return 'Decide whether the problem is asking about local behavior, accumulated change, or a boundary value. Then choose the calculus rule that matches that structure before doing any arithmetic.'
    }
    if (text.includes('graph') || text.includes('slope') || text.includes('intercept')) {
      return 'Read the graph feature as a relationship: slope means rate, intercept means starting value, and shape means how the rate changes. The answer should describe that relationship, not just repeat a visible number.'
    }
    return 'Put the problem into a clean mathematical form first: expression, equation, graph, table, or word model. Once the representation is clear, the answer choices become tests of the same relationship.'
  }

  if (text.includes('chem') || text.includes('mole') || text.includes('equilibrium') || text.includes('acid') || text.includes('base') || text.includes('redox')) {
    return 'Track the chemistry mechanism before the vocabulary: particles, moles, charge, energy, proton transfer, or electron transfer. The right choice should respect conservation and the conditions stated in the prompt.'
  }

  if (text.includes('biology') || text.includes('anatomy') || text.includes('physiology') || text.includes('cell') || text.includes('ecology')) {
    return 'Identify the level of biology being tested: molecule, cell, organ system, organism, population, or ecosystem. Then choose the option whose function or mechanism belongs at that level.'
  }

  if (text.includes('physics') || text.includes('electric') || text.includes('circuit') || text.includes('force') || text.includes('motion') || text.includes('energy')) {
    return 'Name the physical quantity and the principle that controls it: force balance, conservation, fields, circuits, waves, or energy transfer. Check units and direction so a nearby formula does not lead you away from the scenario.'
  }

  if (text.includes('economics') || text.includes('market') || text.includes('supply') || text.includes('demand') || text.includes('gdp') || text.includes('inflation')) {
    return 'Separate the economic model from the story: which curve, incentive, market failure, or macro identity is doing the work? The right answer should follow the direction of the shift or trade-off, not the most dramatic outcome.'
  }

  if (text.includes('history') || text.includes('government') || text.includes('civics') || text.includes('constitution') || text.includes('politics')) {
    return 'Anchor the question in cause, institution, or historical context before choosing. Strong history and civics answers connect the event or rule to the power structure it changed or preserved.'
  }

  if (text.includes('ethics') || text.includes('philosophy') || text.includes('logic') || text.includes('argument')) {
    return 'Separate the claim, principle, and example. In ethics and logic questions, the strongest answer usually names the rule being applied rather than reacting to whether the scenario feels agreeable.'
  }

  if (text.includes('writing') || text.includes('grammar') || text.includes('reading') || text.includes('vocab') || text.includes('composition')) {
    return 'Look at what the sentence or passage is trying to do: clarify meaning, support a claim, combine ideas, or choose precise wording. The best answer should improve that job without changing the intended meaning.'
  }

  if (text.includes('research') || text.includes('study') || text.includes('experiment') || text.includes('data') || text.includes('sample')) {
    return 'Ask what the evidence can and cannot show. Sampling, comparison groups, measurement quality, and confounders determine whether the conclusion is descriptive, correlational, or causal.'
  }

  if (text.includes('software') || text.includes('algorithm') || text.includes('sql') || text.includes('data structure')) {
    return 'Translate the prompt into the operation being performed: storing, searching, grouping, ordering, traversing, or updating state. The correct tool should match that operation and its constraint.'
  }

  return 'Read the prompt for the exact relationship being tested, then eliminate choices that are true in the subject but not true of this scenario. A good hint here is to slow down on scope, cause, and wording.'
}

function enrichTierTopUpHints(trackId: string, questions: Question[]): Question[] {
  return questions.map(question => (
    question.mentorHint && !GENERIC_TIER_TOPUP_HINTS.has(question.mentorHint)
      ? question
      : { ...question, mentorHint: tierTopUpHint(trackId, question) }
  ))
}

const RAW_TIER_TOPUPS: Record<string, Question[]> = {
  advancedEthicsMoralPhilosophy: advancedEthicsMoralPhilosophyHighTopUpQuestions,
  alevelHistory: alevelHistoryHighTopUpQuestions,
  alevelMaths: alevelMathsHighTopUpQuestions,
  algorithms: algorithmsTopUpQuestions,
  anatomyAndPhysiology: anatomyAndPhysiologyTopUpQuestions,
  basic_html_and_html5: basic_html_and_html5HighTopUpQuestions,
  chessTactics: chessTacticsHighTopUpQuestions,
  climateProject: climateProjectHighTopUpQuestions,
  colSeventhGradeMath: colSeventhGradeMathHighTopUpQuestions,
  colEighthGradeMath: colEighthGradeMathHighTopUpQuestions,
  colALevelBiology: colALevelBiologyHighTopUpQuestions,
  colGcseMathsUk: colGcseMathsUkHighTopUpQuestions,
  colGrammar: colGrammarHighTopUpQuestions,
  colHighSchoolBiologyNgss: colHighSchoolBiologyNgssHighTopUpQuestions,
  colHighSchoolChemistry: colHighSchoolChemistryHighTopUpQuestions,
  colHighSchoolPhysics: colHighSchoolPhysicsHighTopUpQuestions,
  colIntegratedMath1: colIntegratedMath1HighTopUpQuestions,
  colJeeMainPrepIndia: colJeeMainPrepIndiaHighTopUpQuestions,
  col7thGradeReadingAndVocab: col7thGradeReadingAndVocabHighTopUpQuestions,
  col9thGradeReadingVocab: col9thGradeReadingVocabHighTopUpQuestions,
  colIntegratedMath2: colIntegratedMath2HighTopUpQuestions,
  collegeAdmissions: collegeAdmissionsHighTopUpQuestions,
  constitution101: constitution101HighTopUpQuestions,
  contemporaryEthics: contemporaryEthicsTopUpQuestions,
  creativeWritingStudio: creativeWritingStudioHighTopUpQuestions,
  detectiveLogic: detectiveLogicHighTopUpQuestions,
  discreteMath: discreteMathTopUpQuestions,
  earthScience: earthScienceHighTopUpQuestions,
  electricalEngineering: electricalEngineeringTopUpQuestions,
  englishComposition101: englishComposition101TopUpQuestions,
  epistemologyBasics: epistemologyBasicsHighTopUpQuestions,
  eurekaMathPrecalculus: eurekaMathPrecalculusTopUpQuestions,
  existentialism: existentialismHighTopUpQuestions,
  financeAndCapitalMarkets: financeAndCapitalMarketsHighTopUpQuestions,
  financialAccounting: financialAccountingTopUpQuestions,
  gameDesignBasics: gameDesignBasicsHighTopUpQuestions,
  genBio1: genBio1TopUpQuestions,
  genChem1: genChem1TopUpQuestions,
  genPhys1: genPhys1TopUpQuestions,
  generalBiology2: generalBiology2TopUpQuestions,
  generalChemistry2: generalChemistry2TopUpQuestions,
  generalPhysics2: generalPhysics2TopUpQuestions,
  handsOnScience: handsOnScienceHighTopUpQuestions,
  hscVceMaths: hscVceMathsHighTopUpQuestions,
  introToEthics: introToEthicsHighTopUpQuestions,
  introToSociology: introToSociologyTopUpQuestions,
  lifeSkillsAndAdulting: lifeSkillsAndAdultingHighTopUpQuestions,
  lifeSkillsUni: lifeSkillsUniTopUpQuestions,
  logicAndArgumentation: logicAndArgumentationHighTopUpQuestions,
  logicCriticalThinking: logicCriticalThinkingTopUpQuestions,
  lsat: lsatTopUpQuestions,
  mathSenior: mathSeniorTopUpQuestions,
  mcat: mcatTopUpQuestions,
  middleSchoolBigHistory: middleSchoolBigHistoryHighTopUpQuestions,
  middleSchoolBiology: middleSchoolBiologyHighTopUpQuestions,
  middleSchoolChemistry: middleSchoolChemistryHighTopUpQuestions,
  middleSchoolEarthSpace: middleSchoolEarthSpaceHighTopUpQuestions,
  middleSchoolPhysics: middleSchoolPhysicsHighTopUpQuestions,
  mythologyAndMonsters: mythologyAndMonstersHighTopUpQuestions,
  naplanYear7: naplanYear7HighTopUpQuestions,
  naplanYear9: naplanYear9HighTopUpQuestions,
  philJunior: philJuniorTopUpQuestions,
  philSophomore: philSophomoreTopUpQuestions,
  philosophyCapstone: philosophyCapstoneHighTopUpQuestions,
  readingVocab8th: readingVocab8thHighTopUpQuestions,
  research: researchTopUpQuestions,
  sqlFoundations: sqlFoundationsTopUpQuestions,
  tenthGradeReadingVocab: tenthGradeReadingVocabHighTopUpQuestions,
  uniScience: uniScienceTopUpQuestions,
  usGovAndCivics: usGovAndCivicsHighTopUpQuestions,
  usHistory: usHistoryHighTopUpQuestions,
}

export const TIER_TOPUPS: Record<string, Question[]> = Object.fromEntries(
  Object.entries(RAW_TIER_TOPUPS).map(([trackId, questions]) => [
    trackId,
    enrichTierTopUpHints(trackId, questions),
  ]),
)
