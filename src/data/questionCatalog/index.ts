import type { AgeGroup } from '../ageCatalog'

export type { Answer, Misconception, Question, QuestionCatalog, QuestionKind, Topic } from './types'

const highMathTrackIds = new Set([
  'khan-illustrative-mathematics-6th-8th-grade',
  'khan-class-7-math',
  'khan-class-8-math',
  'khan-class-9-math',
  'khan-class-10-math',
  'khan-algebra-1-ny-next-gen',
  'khan-eureka-math-algebra-i',
  'khan-geometry',
  'khan-eureka-math-geometry',
  'khan-algebra-2',
  'khan-eureka-math-algebra-ii',
  'khan-precalculus',
  'khan-high-school-statistics',
  'khan-trigonometry',
  'khan-statistics-probability',
])

const highAdvancedTrackIds = new Set([
  'khan-high-school-biology-ngss',
  'khan-high-school-physics-ngss',
  'khan-world-history-project-origins-to-the-present',
  'khan-world-history-project-1750-to-the-present',
  'apCalculus',
  'apBiology',
  'apChemistry',
  'apPhysics',
  'apEnglish',
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
])

const highFunTrackIds = new Set([
  'chessTactics',
  'creativeWriting',
  'mythologyMonsters',
  'gameDesign',
  'detectiveLogic',
])

const universityCollegeTrackIds = new Set([
  'khan-class-11-math',
  'khan-class-12-math',
  'khan-eureka-math-precalculus',
  'khan-ap-college-calculus-ab',
  'khan-ap-college-statistics',
  'khan-college-algebra',
  'khan-ap-college-calculus-bc',
  'linearAlgebra',
])

const universityAcademicTrackIds = new Set([
  'microeconomics',
  'macroeconomics',
  'organicChemistry',
  'neuroscience',
  'researchMethods',
  'philosophy',
  'dataStructures',
  'internationalRelations',
  'marketing',
])

const universityPrepTrackIds = new Set([
  'ml',
  'software',
  'research',
  'uxResearch',
])

export function questionCatalogKeyForTrack(trackId: string, ageGroup: AgeGroup): string | null {
  if (ageGroup === 'high') {
    if (highMathTrackIds.has(trackId)) return 'high-math'
    if (highAdvancedTrackIds.has(trackId)) return 'high-advanced'
    if (highFunTrackIds.has(trackId)) return 'high-fun'
    return null
  }

  if (ageGroup === 'university') {
    if (universityCollegeTrackIds.has(trackId)) return 'university-college'
    if (universityAcademicTrackIds.has(trackId)) return 'university-academic'
    if (universityPrepTrackIds.has(trackId)) return 'university-prep'
    return null
  }

  if (ageGroup === 'primary') return 'primary'
  if (ageGroup === 'career') return 'career'

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
    case 'career': {
      const module = await import('./career')
      return module.buildCareerQuestionCatalog()
    }
    default:
      return {}
  }
}
