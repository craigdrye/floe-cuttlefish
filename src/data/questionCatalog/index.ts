import type { AgeGroup } from '../ageCatalog'

export type {
  Answer,
  Misconception,
  Question,
  QuestionCatalog,
  QuestionKind,
  QuestionMedia,
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
  'col-algebra-1',
  'col-geometry',
  'col-algebra-2',
  'col-get-ready-for-precalculus',
  'col-high-school-statistics',
  'trigonometry',
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
  // A-level ids removed from high-advanced routing 2026-05-20: their question banks are
  // compiled into the high-generated catalog (alevelMaths:32, alevelEnglish:11, alevelHistory:10,
  // alevelEconomics:10, alevelChemistry/Physics/ComputerScience:4, alevelBiology:2). They were
  // routing here to an empty bank and getting hidden by the zero-count filter. Letting them fall
  // through to 'high-generated' surfaces the existing content. ~77 questions.
  'biology_2e',
  'psychology_2e',
  'us_history',
  'principles_economics_3e',
  'basic_javascript',
  'basic_html_and_html5',
  'mathematics_extensions',
  'ib_history',
  'col-sat-reading-and-writing',
  'apEuropeanHistory',
  'middleSchoolBigHistory',
  // HS-tier econ tracks (also declared in universityAcademicTrackIds — age group disambiguates)
  'macroeconomics',
  'microeconomics',
])

const highFunTrackIds = new Set([
  'chessTactics',
  'creativeWriting',
  'mythologyMonsters',
  'gameDesign',
  // Wave 4 consolidation 2026-05-18: gameDesignBasics (syllabus-aligned id, but no questions
  // wired) now routes to the same gameDesign bundle so users opening the syllabus card see
  // real content. Audit recommends eventually retiring `gameDesign` in favor of this id.
  'gameDesignBasics',
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
  'contemporaryEthics',
  'discreteMath',
  'philSenior',
  'comparativePracticalPolitics',
  'dataStructures',
  'internationalRelations',
  'marketing',
])

const universityPrepTrackIds = new Set([
  'introCS',
  'algorithms',
  'sqlFoundations',
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

/**
 * Public catalog loader: builds the requested catalog, then appends the relevant
 * tier's question top-ups (generated:true) to any track that already has a bank in
 * this catalog. The top-up aggregators are imported DYNAMICALLY (not statically) so
 * their ~14k questions stay OUT of the eager app bundle and only load when a course
 * in that tier is actually opened. The maps are tier-disjoint, so scoping by catalog
 * key produces identical results to merging all of them.
 * (Career top-ups merge inside buildCareerQuestionCatalog.)
 */
export async function loadQuestionCatalog(catalogKey: string) {
  const catalog = await loadQuestionCatalogRaw(catalogKey)
  const maps: Array<Record<string, import('./types').Question[]>> = []
  if (catalogKey === 'primary') {
    maps.push((await import('./primary103TopUps')).PRIMARY_103_TOPUPS)
  } else if (catalogKey.startsWith('university')) {
    maps.push((await import('./tierTopUps')).TIER_TOPUPS)
    maps.push((await import('./university103TopUps')).UNIVERSITY_103_TOPUPS)
  } else if (catalogKey.startsWith('high')) {
    maps.push((await import('./tierTopUps')).TIER_TOPUPS)
    maps.push((await import('./high103TopUps')).HIGH_103_TOPUPS)
  }
  for (const map of maps) {
    for (const [id, extra] of Object.entries(map)) {
      if (catalog[id]) catalog[id] = [...catalog[id], ...extra]
    }
  }
  return catalog
}

async function loadQuestionCatalogRaw(catalogKey: string): Promise<Record<string, import('./types').Question[]>> {
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
