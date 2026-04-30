export type AgeGroup = 'preschool' | 'primary' | 'high' | 'university' | 'career-hopper' | 'career' | 'nerd'

export type StageDetail =
  | 'primary-early'
  | 'primary-year-1'
  | 'primary-year-2'
  | 'primary-year-3'
  | 'primary-year-4'
  | 'primary-year-5'
  | 'primary-year-6'
  | 'high-year-7'
  | 'high-year-8'
  | 'high-year-9'
  | 'high-year-10'
  | 'high-year-11'
  | 'high-year-12'
  | 'university-freshman'
  | 'university-sophomore'
  | 'university-junior'
  | 'university-senior'
  | null

export type IconKey =
  | 'brain'
  | 'book'
  | 'calculator'
  | 'code'
  | 'compass'
  | 'flask'
  | 'graduation-cap'
  | 'heart'
  | 'line-chart'
  | 'map'
  | 'microscope'
  | 'shield'
  | 'sparkles'
  | 'star'
  | 'swords'
  | 'target'
  | 'search'
  | 'book-open'
  | 'zap'
  | 'dollar-sign'
  | 'edit-3'
  | 'target'

export type TrackSeed = {
  id: string
  title: string
  subtitle: string
  status: 'playable' | 'soon'
  accent: string
  discipline: string
  ageGroup: AgeGroup
  icon: IconKey
  skills: string[]
}

export type CollectionSeed = {
  ageGroup: AgeGroup;
  discipline: string;
  accent: string;
  icon: IconKey;
  skills: string[];
  titles: string[];
}

export type StageBucketMap = Partial<Record<Exclude<StageDetail, null>, readonly string[]>>
