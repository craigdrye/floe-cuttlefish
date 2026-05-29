export type RawCollectionExposureStatus = 'map-now' | 'seed-new-course' | 'support-bank' | 'hold'

export type RawCollectionMappingConfidence = 'high' | 'medium' | 'low'

export type RawCollectionScope = 'source' | 'collections'

export type RawCollectionTargetFamily =
  | 'school-stage-support'
  | 'school-math-support'
  | 'school-reading-support'
  | 'school-science-support'
  | 'logic-philosophy'
  | 'computer-science'
  | 'statistics-data-science'
  | 'math-depth'
  | 'exam-prep'
  | 'applied-labs'
  | 'trivia-general'

export type ProposedTrackPlan = {
  id: string
  title: string
  notes?: string
}

export type RawCollectionMappingEntry = {
  id: string
  sourceFolder: string
  scope: RawCollectionScope
  collectionIds?: string[]
  targetFamily: RawCollectionTargetFamily
  targetTrackIds: string[]
  proposedTracks: ProposedTrackPlan[]
  exposureStatus: RawCollectionExposureStatus
  confidence: RawCollectionMappingConfidence
  notes: string[]
}

function sourceEntry(
  sourceFolder: string,
  entry: Omit<RawCollectionMappingEntry, 'id' | 'sourceFolder' | 'scope' | 'collectionIds'>,
): RawCollectionMappingEntry {
  return {
    id: `${sourceFolder}::source`,
    sourceFolder,
    scope: 'source',
    ...entry,
  }
}

function collectionsEntry(
  sourceFolder: string,
  suffix: string,
  collectionIds: string[],
  entry: Omit<RawCollectionMappingEntry, 'id' | 'sourceFolder' | 'scope' | 'collectionIds'>,
): RawCollectionMappingEntry {
  const normalizedCollectionIds = collectionIds.filter(Boolean)

  return {
    id: `${sourceFolder}::${suffix}`,
    sourceFolder,
    scope: 'collections',
    collectionIds: normalizedCollectionIds,
    ...entry,
  }
}

type RawSourceDef = {
  folder: string
  prefix: string
}

const staarLegacySources: RawSourceDef[] = [
  { folder: 'staar_2018', prefix: 'staar-2018' },
  { folder: 'staar_2019', prefix: 'staar-2019' },
  { folder: 'staar_2021', prefix: 'staar-2021' },
]

const staarDetailedSources: RawSourceDef[] = [
  { folder: 'staar_2022', prefix: 'staar-2022' },
  { folder: 'staar_2023', prefix: 'staar-2023' },
  { folder: 'staar_2023_redesign', prefix: 'staar-2023-redesign' },
  { folder: 'staar_2024_rationales', prefix: 'staar-2024-rationale' },
  { folder: 'staar_2025_rationales', prefix: 'staar-2025-rationale' },
]

const staarAltSources: RawSourceDef[] = [
  { folder: 'staar_alt2_2023', prefix: 'staar-alt2-2023' },
  { folder: 'staar_alt2_2025', prefix: 'staar-alt2-2025' },
]

const nysedMathSources: RawSourceDef[] = [
  { folder: 'nysed_math_2017', prefix: 'nysed-math-2017' },
  { folder: 'nysed_math_2018', prefix: 'nysed-math-2018' },
  { folder: 'nysed_math_2019', prefix: 'nysed-math-2019' },
  { folder: 'nysed_math_2021', prefix: 'nysed-math-2021' },
  { folder: 'nysed_math_2022', prefix: 'nysed-math-2022' },
  { folder: 'nysed_math_2023', prefix: 'nysed-math-2023' },
  { folder: 'nysed_math_2024', prefix: 'nysed-math-2024' },
  { folder: 'nysed_math_2025', prefix: 'nysed-math-2025' },
]

const nysedElaSources: RawSourceDef[] = [
  { folder: 'nysed_ela_2015', prefix: 'nysed-ela-2015' },
  { folder: 'nysed_ela_2016', prefix: 'nysed-ela-2016' },
  { folder: 'nysed_ela_2017', prefix: 'nysed-ela-2017' },
  { folder: 'nysed_ela_2018', prefix: 'nysed-ela-2018' },
  { folder: 'nysed_ela_2019', prefix: 'nysed-ela-2019' },
  { folder: 'nysed_ela_2021', prefix: 'nysed-ela-2021' },
  { folder: 'nysed_ela_2022', prefix: 'nysed-ela-2022' },
  { folder: 'nysed_ela_2023', prefix: 'nysed-ela-2023' },
  { folder: 'nysed_ela_2024', prefix: 'nysed-ela-2024' },
  { folder: 'nysed_ela_2025', prefix: 'nysed-ela-2025' },
]

const nysedScienceSources: RawSourceDef[] = [
  { folder: 'nysed_science_2024', prefix: 'nysed-science-2024' },
  { folder: 'nysed_science_2025', prefix: 'nysed-science-2025' },
]

const availableCollectionSuffixesBySource: Record<string, Set<string>> = {
  staar_2022: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'english-ii',
    'grade-3-math',
    'grade-3-rla',
    'grade-4-math',
    'grade-4-rla',
    'grade-5-rla',
    'grade-5-science',
    'grade-6-math',
    'grade-6-rla',
    'grade-7-math',
    'grade-7-rla',
    'grade-8-math',
    'grade-8-rla',
    'grade-8-science',
    'grade-8-social-studies',
    'u-s-history',
  ]),
  staar_2023: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'grade-3-math',
    'grade-3-rla',
    'grade-4-math',
    'grade-4-rla',
    'grade-5-math',
    'grade-5-rla',
    'grade-5-science',
    'grade-5-spanish-science',
    'grade-6-math',
    'grade-6-rla',
    'grade-7-math',
    'grade-7-rla',
    'grade-8-math',
    'grade-8-rla',
    'grade-8-science',
    'grade-8-social-studies',
    'u-s-history',
  ]),
  staar_2023_redesign: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'english-ii',
    'grade-3-math',
    'grade-3-rla',
    'grade-3-spanish-math',
    'grade-3-spanish-rla',
    'grade-4-math',
    'grade-4-rla',
    'grade-4-spanish-math',
    'grade-4-spanish-rla',
    'grade-5-math',
    'grade-5-rla',
    'grade-5-science',
    'grade-5-spanish-math',
    'grade-5-spanish-rla',
    'grade-5-spanish-science',
    'grade-6-math',
    'grade-6-rla',
    'grade-7-math',
    'grade-7-rla',
    'grade-8-math',
    'grade-8-rla',
    'grade-8-science',
    'grade-8-social-studies',
  ]),
  staar_2024_rationales: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'english-ii',
    'grade-3-math',
    'grade-3-rla',
    'grade-3-spanish-math',
    'grade-3-spanish-rla',
    'u-s-history',
  ]),
  staar_2025_rationales: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'english-ii',
    'grade-3-math',
    'grade-3-rla',
    'grade-3-spanish-math',
    'grade-3-spanish-rla',
    'grade-4-math',
    'grade-4-rla',
    'grade-4-spanish-math',
    'grade-4-spanish-rla',
    'grade-5-math',
    'grade-5-rla',
    'grade-5-science',
    'grade-5-spanish-math',
    'grade-5-spanish-rla',
    'grade-5-spanish-science',
    'grade-6-math',
    'grade-6-rla',
    'grade-7-math',
    'grade-7-rla',
    'grade-8-math',
    'grade-8-rla',
    'grade-8-science',
    'grade-8-social-studies',
    'u-s-history',
  ]),
  staar_alt2_2023: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'grade-3-math-teacher-test',
    'grade-3-rla-teacher-book',
    'grade-4-math-teacher-test',
    'grade-4-reading-teacher-book',
    'grade-5-math-teacher-book',
    'grade-5-reading-teacher-book',
    'grade-5-science-teacher-book',
    'grade-6-math-teacher-book',
    'grade-6-reading-teacher-book',
    'grade-7-reading-teacher-book',
    'grade-8-math-teacher-book',
    'grade-8-reading-teacher-book',
    'grade-8-science-teacher-book',
    'grade-8-social-studies-teacher-book',
    'u-s-history',
  ]),
  staar_alt2_2025: new Set([
    'algebra-i',
    'biology',
    'english-i',
    'grade-3-mathematics-teacher-guide',
    'grade-3-rla-teacher-guide',
    'grade-4-mathematics-teacher-guide',
    'grade-4-rla-teacher-guide',
    'grade-5-rla-teacher-guide',
    'grade-5-science-teacher-guide',
    'grade-6-mathematics-teacher-guide',
    'grade-6-rla-teacher-guide',
    'grade-7-mathematics-teacher-guide',
    'grade-7-rla-teacher-guide',
    'grade-8-mathematics-teacher-guide',
    'grade-8-rla-teacher-guide',
    'grade-8-science-teacher-guide',
    'grade-8-social-studies-teacher-guide',
    'u-s-history',
  ]),
}

const sourceFolderByPrefix = Object.fromEntries(
  [
    ...staarLegacySources,
    ...staarDetailedSources,
    ...staarAltSources,
    ...nysedMathSources,
    ...nysedElaSources,
    ...nysedScienceSources,
  ].map(({ folder, prefix }) => [prefix, folder]),
)

function prefixedCollectionId(prefix: string, suffix: string) {
  const sourceFolder = sourceFolderByPrefix[prefix]
  const available = sourceFolder ? availableCollectionSuffixesBySource[sourceFolder] : undefined
  if (available && !available.has(suffix)) return ''
  return `${prefix}::${suffix}`
}

const mathDepthTrackIds = ['collegeAlgebra', 'apCalculusAB', 'apCalculusBc', 'linearAlgebra', 'trigonometry']

export const rawCollectionMappings: RawCollectionMappingEntry[] = [
  ...staarLegacySources.flatMap(({ folder, prefix }) => [
    collectionsEntry(folder, 'algebra-i', [prefixedCollectionId(prefix, 'algebra-i')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-algebra-1'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Algebra I is a clean direct fit to the existing Algebra 1 track.'],
    }),
    collectionsEntry(folder, 'biology', [prefixedCollectionId(prefix, 'biology')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['col-high-school-biology', 'apBiology'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'medium',
      notes: ['Prefer the general high-school biology lane; AP Biology is only a secondary fallback.'],
    }),
    collectionsEntry(folder, 'english-i', [prefixedCollectionId(prefix, 'english-i')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-9th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['English I aligns with the 9th-grade reading/vocab lane.'],
    }),
    collectionsEntry(folder, 'english-ii', [prefixedCollectionId(prefix, 'english-ii')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-10th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['English II aligns with the 10th-grade reading/vocab lane.'],
    }),
    collectionsEntry(folder, 'u-s-history', [prefixedCollectionId(prefix, 'u-s-history')], {
      targetFamily: 'school-stage-support',
      targetTrackIds: ['usHistory'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['This is a direct fit for the general U.S. History course, not APUSH by default.'],
    }),
    collectionsEntry(folder, 'math-general', [prefixedCollectionId(prefix, 'math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class5Math', 'class6Math', 'col-class-7-math', 'col-class-8-math'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'low',
      notes: ['Older Texas math collections are not grade-specific enough to map live with high confidence.'],
    }),
    collectionsEntry(folder, 'reading-general', [prefixedCollectionId(prefix, 'reading')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab4th', 'readingVocab5th', 'readingVocab6th', 'col-7th-grade-reading-and-vocab', 'col-8th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'low',
      notes: ['Older Texas reading collections are broad support banks rather than precise grade placements.'],
    }),
    collectionsEntry(folder, 'science-general', [prefixedCollectionId(prefix, 'science')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['scienceYear5', 'middleSchoolEarthSpace', 'col-high-school-biology'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'low',
      notes: ['Older Texas science collections are broad support banks rather than precise grade placements.'],
    }),
    collectionsEntry(folder, 'social-studies-general', [prefixedCollectionId(prefix, 'social-studies')], {
      targetFamily: 'school-stage-support',
      targetTrackIds: ['usHistory'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'low',
      notes: ['Generic social-studies slices need finer curation before live exposure.'],
    }),
    collectionsEntry(folder, 'writing-general', [prefixedCollectionId(prefix, 'writing')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-9th-grade-reading-and-vocab', 'col-10th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'low',
      notes: ['Writing is useful support material, but too broad to map to one exact ladder rung.'],
    }),
  ]),
  ...staarDetailedSources.flatMap(({ folder, prefix }) => [
    collectionsEntry(folder, 'grade-3-math', [prefixedCollectionId(prefix, 'grade-3-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class3Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 3 math fits the Class 3 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-4-math', [prefixedCollectionId(prefix, 'grade-4-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class4Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 4 math fits the Class 4 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-5-math', [prefixedCollectionId(prefix, 'grade-5-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class5Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 5 math fits the Class 5 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-6-math', [prefixedCollectionId(prefix, 'grade-6-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class6Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 6 math fits the Class 6 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-7-math', [prefixedCollectionId(prefix, 'grade-7-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-class-7-math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 7 math fits the existing 7th-grade math track directly.'],
    }),
    collectionsEntry(folder, 'grade-8-math', [prefixedCollectionId(prefix, 'grade-8-math')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-class-8-math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 math fits the existing 8th-grade math track directly.'],
    }),
    collectionsEntry(folder, 'algebra-i', [prefixedCollectionId(prefix, 'algebra-i')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-algebra-1'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Algebra I is a direct fit to the existing Algebra 1 track.'],
    }),
    collectionsEntry(folder, 'grade-3-rla', [prefixedCollectionId(prefix, 'grade-3-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: [],
      proposedTracks: [{ id: 'readingVocab3rd', title: '3rd Grade Reading and Vocab', notes: 'Needed to catch grade-3 reading material cleanly.' }],
      exposureStatus: 'seed-new-course',
      confidence: 'high',
      notes: ['Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.'],
    }),
    collectionsEntry(folder, 'grade-4-rla', [prefixedCollectionId(prefix, 'grade-4-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab4th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 4 RLA fits the 4th-grade reading track directly.'],
    }),
    collectionsEntry(folder, 'grade-5-rla', [prefixedCollectionId(prefix, 'grade-5-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab5th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 5 RLA fits the 5th-grade reading track directly.'],
    }),
    collectionsEntry(folder, 'grade-6-rla', [prefixedCollectionId(prefix, 'grade-6-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab6th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 6 RLA fits the 6th-grade reading track directly.'],
    }),
    collectionsEntry(folder, 'grade-7-rla', [prefixedCollectionId(prefix, 'grade-7-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-7th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 7 RLA fits the 7th-grade reading track directly.'],
    }),
    collectionsEntry(folder, 'grade-8-rla', [prefixedCollectionId(prefix, 'grade-8-rla')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-8th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 RLA fits the 8th-grade reading track directly.'],
    }),
    collectionsEntry(folder, 'english-i', [prefixedCollectionId(prefix, 'english-i')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-9th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['English I aligns with the 9th-grade reading/vocab lane.'],
    }),
    collectionsEntry(folder, 'english-ii', [prefixedCollectionId(prefix, 'english-ii')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-10th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['English II aligns with the 10th-grade reading/vocab lane.'],
    }),
    collectionsEntry(folder, 'grade-5-science', [prefixedCollectionId(prefix, 'grade-5-science')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['scienceYear5'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'medium',
      notes: ['Grade 5 science is a reasonable direct fit to the Year 5 science discovery lane.'],
    }),
    collectionsEntry(folder, 'grade-8-science', [prefixedCollectionId(prefix, 'grade-8-science')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['middleSchoolEarthSpace'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 science is a strong fit for the middle-school earth and space science lane.'],
    }),
    collectionsEntry(folder, 'biology', [prefixedCollectionId(prefix, 'biology')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['col-high-school-biology', 'apBiology'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'medium',
      notes: ['Prefer general high-school biology once fully wired; AP Biology is only a fallback.'],
    }),
    collectionsEntry(folder, 'grade-8-social-studies', [prefixedCollectionId(prefix, 'grade-8-social-studies')], {
      targetFamily: 'school-stage-support',
      targetTrackIds: ['usHistory'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'medium',
      notes: ['Grade 8 social studies is close to U.S. history but still broad enough to treat as support.'],
    }),
    collectionsEntry(folder, 'u-s-history', [prefixedCollectionId(prefix, 'u-s-history')], {
      targetFamily: 'school-stage-support',
      targetTrackIds: ['usHistory'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['U.S. History should land in the general U.S. History course, not APUSH by default.'],
    }),
    collectionsEntry(
      folder,
      'spanish-variants',
      [
        prefixedCollectionId(prefix, 'grade-3-spanish-math'),
        prefixedCollectionId(prefix, 'grade-3-spanish-rla'),
        prefixedCollectionId(prefix, 'grade-4-spanish-math'),
        prefixedCollectionId(prefix, 'grade-4-spanish-rla'),
        prefixedCollectionId(prefix, 'grade-5-spanish-math'),
        prefixedCollectionId(prefix, 'grade-5-spanish-rla'),
        prefixedCollectionId(prefix, 'grade-5-spanish-science'),
      ],
      {
        targetFamily: 'school-stage-support',
        targetTrackIds: [],
        proposedTracks: [],
        exposureStatus: 'hold',
        confidence: 'high',
        notes: ['Spanish-language variants are valuable, but there is no clean live Spanish track family yet.'],
      },
    ),
  ]),
  ...staarAltSources.flatMap(({ folder, prefix }) => {
    const is2023 = folder === 'staar_alt2_2023'
    return [
      collectionsEntry(
        folder,
        'grade-3-math',
        [prefixedCollectionId(prefix, is2023 ? 'grade-3-math-teacher-test' : 'grade-3-mathematics-teacher-guide')],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['class3Math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 3 math should support, not replace, the main Class 3 Math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-3-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-3-rla-teacher-book' : 'grade-3-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: [],
          proposedTracks: [{ id: 'readingVocab3rd', title: '3rd Grade Reading and Vocab' }],
          exposureStatus: 'seed-new-course',
          confidence: 'medium',
          notes: ['Alternate-format Grade 3 RLA reinforces the need for a dedicated 3rd-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-4-math',
        [prefixedCollectionId(prefix, is2023 ? 'grade-4-math-teacher-test' : 'grade-4-mathematics-teacher-guide')],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['class4Math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 4 math should support the existing Class 4 Math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-4-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-4-reading-teacher-book' : 'grade-4-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: ['readingVocab4th'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 4 reading should support the existing 4th-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-5-math',
        is2023 ? [prefixedCollectionId(prefix, 'grade-5-math-teacher-book')] : [],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['class5Math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 5 math should support the existing Class 5 Math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-5-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-5-reading-teacher-book' : 'grade-5-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: ['readingVocab5th'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 5 reading should support the existing 5th-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-5-science',
        [prefixedCollectionId(prefix, is2023 ? 'grade-5-science-teacher-book' : 'grade-5-science-teacher-guide')],
        {
          targetFamily: 'school-science-support',
          targetTrackIds: ['scienceYear5'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 5 science should support the existing Year 5 science lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-6-math',
        [prefixedCollectionId(prefix, is2023 ? 'grade-6-math-teacher-book' : 'grade-6-mathematics-teacher-guide')],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['class6Math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 6 math should support the existing Class 6 Math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-6-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-6-reading-teacher-book' : 'grade-6-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: ['readingVocab6th'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 6 reading should support the existing 6th-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-7-math',
        is2023 ? [] : [prefixedCollectionId(prefix, 'grade-7-mathematics-teacher-guide')],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['col-class-7-math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 7 math should support the existing 7th-grade math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-7-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-7-reading-teacher-book' : 'grade-7-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: ['col-7th-grade-reading-and-vocab'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 7 reading should support the existing 7th-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-8-math',
        [
          prefixedCollectionId(prefix, is2023 ? 'grade-8-math-teacher-book' : 'grade-8-mathematics-teacher-guide'),
        ],
        {
          targetFamily: 'school-math-support',
          targetTrackIds: ['col-class-8-math'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 8 math should support the existing 8th-grade math lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-8-rla',
        [prefixedCollectionId(prefix, is2023 ? 'grade-8-reading-teacher-book' : 'grade-8-rla-teacher-guide')],
        {
          targetFamily: 'school-reading-support',
          targetTrackIds: ['col-8th-grade-reading-and-vocab'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 8 reading should support the existing 8th-grade reading lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-8-science',
        [prefixedCollectionId(prefix, is2023 ? 'grade-8-science-teacher-book' : 'grade-8-science-teacher-guide')],
        {
          targetFamily: 'school-science-support',
          targetTrackIds: ['middleSchoolEarthSpace'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'high',
          notes: ['Alternate-format Grade 8 science should support the existing middle-school earth and space lane.'],
        },
      ),
      collectionsEntry(
        folder,
        'grade-8-social-studies',
        [prefixedCollectionId(prefix, is2023 ? 'grade-8-social-studies-teacher-book' : 'grade-8-social-studies-teacher-guide')],
        {
          targetFamily: 'school-stage-support',
          targetTrackIds: ['usHistory'],
          proposedTracks: [],
          exposureStatus: 'support-bank',
          confidence: 'medium',
          notes: ['Alternate-format Grade 8 social studies is best treated as U.S. history support.'],
        },
      ),
      collectionsEntry(folder, 'algebra-i', [prefixedCollectionId(prefix, 'algebra-i')], {
        targetFamily: 'school-math-support',
        targetTrackIds: ['col-algebra-1'],
        proposedTracks: [],
        exposureStatus: 'support-bank',
        confidence: 'high',
        notes: ['Alternate-format Algebra I should support the main Algebra 1 lane.'],
      }),
      collectionsEntry(folder, 'biology', [prefixedCollectionId(prefix, 'biology')], {
        targetFamily: 'school-science-support',
        targetTrackIds: ['col-high-school-biology', 'apBiology'],
        proposedTracks: [],
        exposureStatus: 'support-bank',
        confidence: 'medium',
        notes: ['Alternate-format biology is useful support, but should not be surfaced raw.'],
      }),
      collectionsEntry(folder, 'english-i', [prefixedCollectionId(prefix, 'english-i')], {
        targetFamily: 'school-reading-support',
        targetTrackIds: ['col-9th-grade-reading-and-vocab'],
        proposedTracks: [],
        exposureStatus: 'support-bank',
        confidence: 'high',
        notes: ['Alternate-format English I should support the 9th-grade reading lane.'],
      }),
      collectionsEntry(folder, 'u-s-history', [prefixedCollectionId(prefix, 'u-s-history')], {
        targetFamily: 'school-stage-support',
        targetTrackIds: ['usHistory'],
        proposedTracks: [],
        exposureStatus: 'support-bank',
        confidence: 'high',
        notes: ['Alternate-format U.S. History should support the main U.S. history lane.'],
      }),
    ].filter((entry) => !entry.collectionIds || entry.collectionIds.length > 0)
  }),
  ...nysedMathSources.flatMap(({ folder, prefix }) => [
    collectionsEntry(folder, 'grade-3', [prefixedCollectionId(prefix, 'grade-3')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class3Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 3 NYSED math fits the Class 3 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-4', [prefixedCollectionId(prefix, 'grade-4')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class4Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 4 NYSED math fits the Class 4 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-5', [prefixedCollectionId(prefix, 'grade-5')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class5Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 5 NYSED math fits the Class 5 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-6', [prefixedCollectionId(prefix, 'grade-6')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['class6Math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 6 NYSED math fits the Class 6 Math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-7', [prefixedCollectionId(prefix, 'grade-7')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-class-7-math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 7 NYSED math fits the 7th-grade math ladder directly.'],
    }),
    collectionsEntry(folder, 'grade-8', [prefixedCollectionId(prefix, 'grade-8')], {
      targetFamily: 'school-math-support',
      targetTrackIds: ['col-class-8-math'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 NYSED math fits the 8th-grade math ladder directly.'],
    }),
  ]),
  ...nysedElaSources.flatMap(({ folder, prefix }) => [
    collectionsEntry(folder, 'grade-3', [prefixedCollectionId(prefix, 'grade-3')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: [],
      proposedTracks: [{ id: 'readingVocab3rd', title: '3rd Grade Reading and Vocab', notes: 'Needed to complete the primary reading ladder.' }],
      exposureStatus: 'seed-new-course',
      confidence: 'high',
      notes: ['Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.'],
    }),
    collectionsEntry(folder, 'grade-4', [prefixedCollectionId(prefix, 'grade-4')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab4th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 4 NYSED ELA fits the 4th-grade reading lane directly.'],
    }),
    collectionsEntry(folder, 'grade-5', [prefixedCollectionId(prefix, 'grade-5')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab5th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 5 NYSED ELA fits the 5th-grade reading lane directly.'],
    }),
    collectionsEntry(folder, 'grade-6', [prefixedCollectionId(prefix, 'grade-6')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['readingVocab6th'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 6 NYSED ELA fits the 6th-grade reading lane directly.'],
    }),
    collectionsEntry(folder, 'grade-7', [prefixedCollectionId(prefix, 'grade-7')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-7th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 7 NYSED ELA fits the 7th-grade reading lane directly.'],
    }),
    collectionsEntry(folder, 'grade-8', [prefixedCollectionId(prefix, 'grade-8')], {
      targetFamily: 'school-reading-support',
      targetTrackIds: ['col-8th-grade-reading-and-vocab'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 NYSED ELA fits the 8th-grade reading lane directly.'],
    }),
  ]),
  ...nysedScienceSources.flatMap(({ folder, prefix }) => [
    collectionsEntry(folder, 'grade-5', [prefixedCollectionId(prefix, 'grade-5')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['scienceYear5'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'medium',
      notes: ['Grade 5 NYSED science is a reasonable direct fit for the Year 5 science lane.'],
    }),
    collectionsEntry(folder, 'grade-8', [prefixedCollectionId(prefix, 'grade-8')], {
      targetFamily: 'school-science-support',
      targetTrackIds: ['middleSchoolEarthSpace'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Grade 8 NYSED science is a strong fit for the middle-school earth and space lane.'],
    }),
  ]),
  collectionsEntry(
    'open_logic_project',
    'formal-logic-core',
    [
      'open-logic-project::propositional-logic',
      'open-logic-project::first-order-logic',
      'open-logic-project::proof-theory',
      'open-logic-project::methods',
      'open-logic-project::model-theory',
      'open-logic-project::second-order-logic',
      'open-logic-project::intuitionistic-logic',
      'open-logic-project::many-valued-logic',
    ],
    {
      targetFamily: 'logic-philosophy',
      targetTrackIds: ['logicCriticalThinking', 'philosophy'],
      proposedTracks: [
        {
          id: 'formalLogic',
          title: 'Formal Logic',
          notes: 'This should become a flagship philosophy/logic lane rather than a buried subset.',
        },
      ],
      exposureStatus: 'seed-new-course',
      confidence: 'high',
      notes: [
        'This is the cleanest source for a serious logic identity in the product.',
      ],
    },
  ),
  collectionsEntry(
    'open_logic_project',
    'sets-and-proof',
    [
      'open-logic-project::sets-functions-relations',
      'open-logic-project::set-theory',
    ],
    {
      targetFamily: 'logic-philosophy',
      targetTrackIds: ['logicCriticalThinking', 'linearAlgebra', 'mathematics_extensions'],
      proposedTracks: [
        {
          id: 'setTheoryAndProof',
          title: 'Set Theory and Proof',
          notes: 'Natural bridge between philosophy-style logic and advanced mathematics.',
        },
      ],
      exposureStatus: 'seed-new-course',
      confidence: 'high',
      notes: [
        'These questions deserve their own rigorous reasoning track rather than being diluted into a general philosophy course.',
      ],
    },
  ),
  collectionsEntry(
    'open_logic_project',
    'modal-and-counterfactual',
    [
      'open-logic-project::applied-modal-logic',
      'open-logic-project::normal-modal-logic',
      'open-logic-project::counterfactuals',
    ],
    {
      targetFamily: 'logic-philosophy',
      targetTrackIds: ['philosophy', 'logicCriticalThinking', 'philSenior'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: [
        'This subset strengthens the current philosophy and moral reasoning tracks directly.',
      ],
    },
  ),
  collectionsEntry(
    'open_logic_project',
    'logic-and-computation',
    [
      'open-logic-project::computability',
      'open-logic-project::lambda-calculus',
      'open-logic-project::turing-machines',
      'open-logic-project::incompleteness',
    ],
    {
      targetFamily: 'logic-philosophy',
      targetTrackIds: ['introCS', 'dataStructures', 'software'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'medium',
      notes: [
        'These are valuable, but should support CS/theory tracks rather than be exposed raw to general philosophy learners.',
      ],
    },
  ),
  collectionsEntry(
    'opendsa',
    'core-cs',
    [
      'open-dsa::introtosoftwaredesign',
      'open-dsa::swdesignanddatastructs',
      'open-dsa::mengbridgecourse',
      'open-dsa::design',
      'open-dsa::development',
      'open-dsa::background',
      'open-dsa::pointers',
      'open-dsa::simpledemo',
      'open-dsa::graphics',
    ],
    {
      targetFamily: 'computer-science',
      targetTrackIds: ['introCS', 'software', 'dataStructures'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: [
        'This is the cleanest computing fit in the new warehouse and should strengthen the existing CS ladder first.',
      ],
    },
  ),
  collectionsEntry(
    'opendsa',
    'algorithms',
    [
      'open-dsa::abo',
      'open-dsa::alganal',
      'open-dsa::binary',
      'open-dsa::cmp',
      'open-dsa::graph',
      'open-dsa::hashing',
      'open-dsa::indexing',
      'open-dsa::list',
      'open-dsa::np',
      'open-dsa::recurtutor',
      'open-dsa::searching',
      'open-dsa::senioralganal',
      'open-dsa::sorting',
    ],
    {
      targetFamily: 'computer-science',
      targetTrackIds: ['dataStructures', 'software', 'introCS'],
      proposedTracks: [
        {
          id: 'algorithmsDrills',
          title: 'Algorithms Drills',
          notes: 'This is one of the clearest new technical course candidates in the whole raw haul.',
        },
      ],
      exposureStatus: 'seed-new-course',
      confidence: 'high',
      notes: [
        'This subset is too strong to hide entirely inside general CS survey courses.',
      ],
    },
  ),
  collectionsEntry(
    'opendsa',
    'theory-and-languages',
    [
      'open-dsa::ct',
      'open-dsa::deformstesting',
      'open-dsa::fla',
      'open-dsa::pl',
    ],
    {
      targetFamily: 'computer-science',
      targetTrackIds: ['software', 'introCS', 'logicCriticalThinking'],
      proposedTracks: [],
      exposureStatus: 'support-bank',
      confidence: 'medium',
      notes: [
        'This is good material, but more specialized and less immediately learner-friendly than the core CS and algorithms slices.',
      ],
    },
  ),
  sourceEntry('numbas', {
    targetFamily: 'math-depth',
    targetTrackIds: [...mathDepthTrackIds, 'apStatistics'],
    proposedTracks: [
      { id: 'algebraWorkout', title: 'Algebra Workout' },
      { id: 'mechanicsDrills', title: 'Mechanics Drills' },
      { id: 'quantitativeMethods', title: 'Quantitative Methods' },
    ],
    exposureStatus: 'seed-new-course',
    confidence: 'medium',
    notes: [
      'This is a large, mixed math reservoir and should be split into deliberate math families rather than injected wholesale into one track.',
    ],
  }),
  sourceEntry('numbas_exams', {
    targetFamily: 'math-depth',
    targetTrackIds: [...mathDepthTrackIds, 'genPhys1'],
    proposedTracks: [
      { id: 'mathDiagnostics', title: 'Math Diagnostics' },
      { id: 'mechanicsDrills', title: 'Mechanics Drills' },
    ],
    exposureStatus: 'seed-new-course',
    confidence: 'medium',
    notes: [
      'The exam grouping makes this especially good for diagnostics and chaptered drill sets.',
    ],
  }),
  sourceEntry('webwork_opl', {
    targetFamily: 'math-depth',
    targetTrackIds: [...mathDepthTrackIds, 'quantAdvanced'],
    proposedTracks: [
      { id: 'contestMathDrills', title: 'Contest Math Drills' },
      { id: 'collegeAlgebraWorkout', title: 'College Algebra Workout' },
    ],
    exposureStatus: 'support-bank',
    confidence: 'low',
    notes: [
      'This is too large and too weakly tagged to expose directly right now, but too valuable to ignore.',
    ],
  }),
  collectionsEntry(
    'openintro_ims',
    'foundations-and-exploration',
    [
      'openintro-ims::data-design',
      'openintro-ims::data-hello',
      'openintro-ims::explore-categorical',
      'openintro-ims::explore-numerical',
      'openintro-ims::foundations-bootstrapping',
      'openintro-ims::foundations-errors',
      'openintro-ims::foundations-mathematical',
      'openintro-ims::foundations-randomization',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics', 'introDataScience'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['This slice cleanly strengthens the exploratory and foundations side of the stats/data ladder.'],
    },
  ),
  collectionsEntry(
    'openintro_ims',
    'inference',
    [
      'openintro-ims::inference-many-means',
      'openintro-ims::inference-one-mean',
      'openintro-ims::inference-one-prop',
      'openintro-ims::inference-paired-means',
      'openintro-ims::inference-tables',
      'openintro-ims::inference-two-means',
      'openintro-ims::inference-two-props',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics', 'quant', 'medical'],
      proposedTracks: [{ id: 'statisticsLab', title: 'Statistics Lab' }],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Inference content belongs directly in statistics-heavy tracks and supports quant/medical reasoning well.'],
    },
  ),
  collectionsEntry(
    'openintro_ims',
    'modeling',
    [
      'openintro-ims::model-logistic',
      'openintro-ims::model-mlr',
      'openintro-ims::model-slr',
      'openintro-ims::inf-model-logistic',
      'openintro-ims::inf-model-mlr',
      'openintro-ims::inf-model-slr',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['introDataScience', 'apStatistics', 'ml'],
      proposedTracks: [{ id: 'statisticsLab', title: 'Statistics Lab' }],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Modeling is best shared across data-science, statistics, and ML-prep tracks.'],
    },
  ),
  collectionsEntry(
    'openintro_stats',
    'foundations',
    [
      'openintro-stats::ch_intro_to_data',
      'openintro-stats::ch_summarizing_data',
      'openintro-stats::ch_probability',
      'openintro-stats::ch_distributions',
      'openintro-stats::ch_foundations_for_inf',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics', 'introDataScience'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Core foundations content fits directly into the existing statistics ladder.'],
    },
  ),
  collectionsEntry(
    'openintro_stats',
    'inference',
    [
      'openintro-stats::ch_inference_for_means',
      'openintro-stats::ch_inference_for_props',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Inference chapters belong directly in AP Statistics.'],
    },
  ),
  collectionsEntry(
    'openintro_stats',
    'regression',
    [
      'openintro-stats::ch_regr_simple_linear',
      'openintro-stats::ch_regr_mult_and_log',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['introDataScience', 'apStatistics'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['Regression chapters fit both data-science and statistics pathways.'],
    },
  ),
  collectionsEntry(
    'ims_tutorials',
    'data-and-explore',
    [
      'ims-tutorials::01-data',
      'ims-tutorials::02-explore',
      'ims-tutorials::04-foundations',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics', 'introDataScience'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['These tutorial MCQs fit the foundational side of the stats ladder directly.'],
    },
  ),
  collectionsEntry(
    'ims_tutorials',
    'modeling-and-inference',
    [
      'ims-tutorials::03-model',
      'ims-tutorials::05-infer',
      'ims-tutorials::06-model-infer',
    ],
    {
      targetFamily: 'statistics-data-science',
      targetTrackIds: ['apStatistics', 'introDataScience'],
      proposedTracks: [],
      exposureStatus: 'map-now',
      confidence: 'high',
      notes: ['These tutorial MCQs fit the modeling and inference side of the stats ladder directly.'],
    },
  ),
  sourceEntry('openintro_stats_slides', {
    targetFamily: 'statistics-data-science',
    targetTrackIds: ['apStatistics', 'introDataScience'],
    proposedTracks: [],
    exposureStatus: 'support-bank',
    confidence: 'medium',
    notes: [
      'Worth preserving, but the answer extraction is noisier than the main OpenIntro sources.',
    ],
  }),
  ...[
    'oilabs_tidy',
    'oilabs_jamovi',
    'oilabs_jasp',
    'oilabs_stata',
    'openintro_labs_rguroo',
  ].map((sourceFolder) =>
    sourceEntry(sourceFolder, {
      targetFamily: 'applied-labs',
      targetTrackIds: ['apStatistics', 'introDataScience'],
      proposedTracks: [{ id: 'dataLabs', title: 'Data Labs' }],
      exposureStatus: 'hold',
      confidence: 'high',
      notes: [
        'These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.',
      ],
    }),
  ),
  sourceEntry('pharma_hands_on', {
    targetFamily: 'applied-labs',
    targetTrackIds: ['medical', 'introDataScience'],
    proposedTracks: [{ id: 'clinicalDataLabs', title: 'Clinical Data Labs' }],
    exposureStatus: 'hold',
    confidence: 'high',
    notes: [
      'Good resource for applied reasoning later, but too task-shaped for direct quiz import today.',
    ],
  }),
  collectionsEntry('opensat', 'math', ['opensat::math'], {
    targetFamily: 'exam-prep',
    targetTrackIds: ['col-sat-math'],
    proposedTracks: [],
    exposureStatus: 'map-now',
    confidence: 'high',
    notes: ['SAT math questions have a clean existing home in the SAT math track.'],
  }),
  collectionsEntry('opensat', 'english', ['opensat::english'], {
    targetFamily: 'exam-prep',
    targetTrackIds: [],
    proposedTracks: [
      {
        id: 'col-sat-reading-writing',
        title: 'SAT Reading and Writing',
        notes: 'The source clearly supports a dedicated verbal companion to the existing SAT math lane.',
      },
    ],
    exposureStatus: 'seed-new-course',
    confidence: 'high',
    notes: ['SAT English should seed a dedicated SAT Reading and Writing track rather than being diluted elsewhere.'],
  }),
  sourceEntry('opentriviaqa', {
    targetFamily: 'trivia-general',
    targetTrackIds: ['brainBurners'],
    proposedTracks: [
      { id: 'triviaSprint', title: 'Trivia Sprint' },
      { id: 'cultureAndMediaQuiz', title: 'Culture and Media Quiz' },
    ],
    exposureStatus: 'hold',
    confidence: 'low',
    notes: [
      'Huge volume, but off-center for the current Floe identity and too noisy for serious academic tracks.',
    ],
  }),
]
