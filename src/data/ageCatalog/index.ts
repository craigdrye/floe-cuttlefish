import { careerCoreTracks, careerKhanGroups } from './career'
import { highCoreTracks, highKhanGroups, highStageBuckets } from './high'
import { primaryCoreTracks, primaryKhanGroups, primaryStageBuckets } from './primary'
import type { AgeGroup, StageDetail, StageBucketMap } from './types'
import { universityCoreTracks, universityKhanGroups, universityStageBuckets } from './university'

export type { AgeGroup, IconKey, KhanGroupSeed, StageDetail, StageBucketMap, TrackSeed } from './types'

export const ageOptions: { id: AgeGroup; label: string }[] = [
  { id: 'career', label: 'Career-switching' },
  { id: 'preschool', label: 'Pre-school' },
  { id: 'primary', label: 'Primary' },
  { id: 'high', label: 'High school' },
  { id: 'university', label: 'University' },
]

export const ageDetailOptions: Partial<Record<AgeGroup, Array<{ id: StageDetail; label: string }>>> = {
  preschool: [
    { id: 'primary-early', label: 'Early years' },
  ],
  primary: [
    { id: 'primary-year-1', label: 'Year 1' },
    { id: 'primary-year-2', label: 'Year 2' },
    { id: 'primary-year-3', label: 'Year 3' },
    { id: 'primary-year-4', label: 'Year 4' },
    { id: 'primary-year-5', label: 'Year 5' },
    { id: 'primary-year-6', label: 'Year 6' },
  ],
  high: [
    { id: 'high-year-7', label: 'Year 7' },
    { id: 'high-year-8', label: 'Year 8' },
    { id: 'high-year-9', label: 'Year 9' },
    { id: 'high-year-10', label: 'Year 10' },
    { id: 'high-year-11', label: 'Year 11' },
    { id: 'high-year-12', label: 'Year 12' },
  ],
  university: [
    { id: 'university-freshman', label: 'Freshman' },
    { id: 'university-sophomore', label: 'Sophomore' },
    { id: 'university-junior', label: 'Junior' },
    { id: 'university-senior', label: 'Senior' },
  ],
}

export const stageBuckets: StageBucketMap = {
  ...primaryStageBuckets,
  ...highStageBuckets,
  ...universityStageBuckets,
}

export const coreTrackSeeds = [
  ...primaryCoreTracks,
  ...highCoreTracks,
  ...universityCoreTracks,
  ...careerCoreTracks,
]

export const khanTrackGroups = [
  ...primaryKhanGroups,
  ...highKhanGroups,
  ...universityKhanGroups,
  ...careerKhanGroups,
]
