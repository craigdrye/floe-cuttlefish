import type { AgeGroup } from '../ageCatalog'

export type {
  Answer,
  Misconception,
  Question,
  QuestionCatalog,
  QuestionKind,
  QuestionReview,
  QuestionReviewFlag,
  QuestionReviewOverride,
  QuestionReviewStatus,
  Topic,
} from './types'

const highMathTrackIds = new Set([
  'col-illustrative-mathematics-6th-8th-grade',
  'col-class-7-math',
  'col-class-8-math',
  'col-class-9-math',
  'col-class-10-math',
  'col-algebra-1-ny-next-gen',
  'col-eureka-math-algebra-i',
  'col-geometry',
  'col-eureka-math-geometry',
  'col-algebra-2',
  'col-eureka-math-algebra-ii',
  'col-precalculus',
  'col-high-school-statistics',
  'col-trigonometry',
  'col-statistics-probability',
  'col-sat-math',
])

const highAdvancedTrackIds = new Set([
  'col-high-school-biology-ngss',
  'col-high-school-physics-ngss',
  'col-world-history-project-origins-to-the-present',
  'col-world-history-project-1750-to-the-present',
  'apHumanGeography',
  'apCalculus',
  'apBiology',
  'apChemistry',
  'apPhysics',
  'apEnglish',
  'apPsychology',
  'apHistory',
  'apEconomics',
  'apComputerScience',
  'alevelMaths',
  'alevelBiology',
  'alevelChemistry',
  'alevelPhysics',
  'alevelEconomics',
  'alevelHistory',
  'alevelEnglish',
  'alevelComputerScience',
  'biology_2e',
  'psychology_2e',
  'us_history',
  'principles_economics_3e',
  'basic_javascript',
  'basic_html_and_html5',
  'mathematics_extensions',
  'ib_history',
  'col-sat-reading-and-writing',
])

const highFunTrackIds = new Set([
  'chessTactics',
  'creativeWriting',
  'mythologyMonsters',
  'gameDesign',
  'detectiveLogic',
])

const universityCollegeTrackIds = new Set([
  'col-class-11-math',
  'col-class-12-math',
  'col-eureka-math-precalculus',
  'col-college-algebra',
  'class11Math',
  'class12Math',
  'collegeAlgebra',
  'introDataScience',
  'apCalculusAB',
  'apStatistics',
  'mathDiagnostics',
  'apCalculusBc',
  'collegeAlgebraWorkout',
  'linearAlgebra',
  'differentialEquations',
  'multivariableCalculus',
])

const universityAcademicTrackIds = new Set([
  'microeconomics',
  'macroeconomics',
  'organicChemistry',
  'neuroscience',
  'introToPsychology',
  'cosmologyAndAstronomy',
  'artHistory',
  'apEnvironmentalScience',
  'researchMethods',
  'philosophy',
  'logicCriticalThinking',
  'formalLogic',
  'philSenior',
  'dataStructures',
  'internationalRelations',
  'marketing',
])

const universityPrepTrackIds = new Set([
  'introCS',
  'ml',
  'software',
  'softwareDesign',
  'softwareFoundations',
  'research',
  'uxResearch',
])

export function questionCatalogKeyForTrack(trackId: string, ageGroup: AgeGroup): string | null {
  if (ageGroup === 'high') {
    if (highMathTrackIds.has(trackId)) return 'high-math'
    if (highAdvancedTrackIds.has(trackId)) return 'high-advanced'
    if (highFunTrackIds.has(trackId)) return 'high-fun'
    return 'high-generated'
  }

  if (ageGroup === 'university') {
    if (universityCollegeTrackIds.has(trackId)) return 'university-college'
    if (universityAcademicTrackIds.has(trackId)) return 'university-academic'
    if (universityPrepTrackIds.has(trackId)) return 'university-prep'
    return 'university-generated'
  }

  if (ageGroup === 'primary') return 'primary'
  if (ageGroup === 'career' || ageGroup === 'career-hopper' || ageGroup === 'nerd') return 'career'

  return null
}

export async function loadQuestionCatalog(catalogKey: string) {
  switch (catalogKey) {
    case 'primary': {
      const module = await import('./primary')
      return module.buildPrimaryQuestionCatalog()
    }
    case 'high-math': {
      const module = await import('./highMath')
      return module.buildHighMathQuestionCatalog()
    }
    case 'high-advanced': {
      const module = await import('./highAdvanced')
      return module.buildHighAdvancedQuestionCatalog()
    }
    case 'high-fun': {
      const module = await import('./highFun')
      return module.buildHighFunQuestionCatalog()
    }
    case 'high-generated': {
      const module = await import('./highGenerated')
      return module.buildHighGeneratedQuestionCatalog()
    }
    case 'university-college': {
      const module = await import('./universityCollege')
      return module.buildUniversityCollegeQuestionCatalog()
    }
    case 'university-academic': {
      const module = await import('./universityAcademic')
      return module.buildUniversityAcademicQuestionCatalog()
    }
    case 'university-prep': {
      const module = await import('./universityPrep')
      return module.buildUniversityPrepQuestionCatalog()
    }
    case 'university-generated': {
      const module = await import('./universityAgentGenerated')
      return module.buildUniversityAgentGeneratedQuestionCatalog()
    }
    case 'career': {
      const module = await import('./career')
      return module.buildCareerQuestionCatalog()
    }
    case 'kolibri': {
      const module = await import('./kolibri')
      return module.buildKolibriQuestionCatalog()
    }
    case 'openstax': {
      const module = await import('./openstax')
      return module.buildOpenStaxQuestionCatalog()
    }
    default:
      return {}
  }
}
