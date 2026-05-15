import type { Track } from './trackUtils'
import type { AgeGroup, StageDetail } from '../data/ageCatalog'

export type CourseTopicId =
  | 'maths'
  | 'science'
  | 'philosophy'
  | 'humanities'
  | 'politics-civics'
  | 'exam-prep'
  | 'practical-skills'
  | 'arts-music'
  | 'geography-history'
  | 'digital-culture'
  | 'business-finance'

export type CourseTopic = {
  id: CourseTopicId
  label: string
  shortLabel: string
}

export const courseTopics: CourseTopic[] = [
  { id: 'maths', label: 'Maths', shortLabel: 'Maths' },
  { id: 'science', label: 'Science', shortLabel: 'Science' },
  { id: 'philosophy', label: 'Philosophy', shortLabel: 'Philosophy' },
  { id: 'humanities', label: 'Humanities', shortLabel: 'Humanities' },
  { id: 'politics-civics', label: 'Politics/Civics', shortLabel: 'Civics' },
  { id: 'exam-prep', label: 'Exam Prep', shortLabel: 'Exams' },
  { id: 'practical-skills', label: 'Practical Skills', shortLabel: 'Practical' },
  { id: 'arts-music', label: 'Arts/Music', shortLabel: 'Arts' },
  { id: 'geography-history', label: 'Geography/History', shortLabel: 'Geo/History' },
  { id: 'digital-culture', label: 'Digital Culture', shortLabel: 'Digital' },
  { id: 'business-finance', label: 'Business/Finance', shortLabel: 'Business' },
]

const topicMatchers: Record<CourseTopicId, RegExp[]> = {
  maths: [
    /\bmath(s|ematics)?\b/i,
    /\balgebra|geometry|calculus|trigonometry|statistics|probability|number|fractions?|ratios?\b/i,
    /\blinear algebra|precalculus|multivariable|data literacy\b/i,
  ],
  science: [
    /\bscience|biology|chemistry|physics|astronomy|space|earth|geology|botany|ecology\b/i,
    /\bmedicine|healthcare|clinical|anatomy|lab|microscopy|climate|environmental\b/i,
    /\banimal|fish|bird|fossil|weather|mineral|molecular\b/i,
  ],
  philosophy: [
    /\bphilosophy|logic|ethics|consciousness|meta-ethics|validity|arguments?\b/i,
    /\bproofs?|quantifiers?|set theory\b/i,
  ],
  humanities: [
    /\bhumanities|english|literature|reading|grammar|ela|poetry|shakespeare|art history\b/i,
    /\breligion|faith|writing|character analysis|literary\b/i,
  ],
  'politics-civics': [
    /\bpolitics|civics|government|constitution|public affairs|policy|law|legal\b/i,
    /\binstitutions|elections|voting|rights|diplomacy|international relations\b/i,
  ],
  'exam-prep': [
    /\bexam prep|sat|lsat|mcat|ap |act|assessment|staar|nysed|series 86|cfa|cpa\b/i,
    /\btest|timed prep|admission\b/i,
  ],
  'practical-skills': [
    /\bpractical|life skills|career|leadership|communication|operations|industrial|real estate\b/i,
    /\brepair|tools?|cooking|home systems|safety|outdoor|manufacturing|interview\b/i,
  ],
  'arts-music': [
    /\barts?|music|design|architecture|typography|photography|creative\b/i,
    /\binstrument|rhythm|style clues|built environment\b/i,
  ],
  'geography-history': [
    /\bgeography|history|world history|us history|archaeology|modern history\b/i,
    /\bmap|landmarks|civilizations|empires|cold war|wwii|origins\b/i,
  ],
  'digital-culture': [
    /\bdigital culture|technology|computing|computer|coding|programming|software|data structures?\b/i,
    /\bcybersecurity|internet|meme|creative tech|algorithms?|python|sql\b/i,
  ],
  'business-finance': [
    /\bbusiness|finance|economics|commercial|marketing|accounting|compliance\b/i,
    /\bmarkets?|revenue|valuation|bank|equity|portfolio|money|sales\b/i,
    /\bconsulting cases|investment banking|private equity|m\s*&\s*a|financial modeling|quant desk\b/i,
  ],
}

export function topicLabelForId(topicId: CourseTopicId) {
  return courseTopics.find((topic) => topic.id === topicId)?.label ?? topicId
}

export function inferTrackTopicIds(track: Pick<Track, 'title' | 'subtitle' | 'discipline' | 'skills'>): CourseTopicId[] {
  const searchable = [track.title, track.subtitle, track.discipline, ...track.skills].join(' ')

  return courseTopics
    .filter((topic) => topicMatchers[topic.id].some((matcher) => matcher.test(searchable)))
    .map((topic) => topic.id)
}

export function trackMatchesAnyTopic(track: Track, topicIds: CourseTopicId[]) {
  if (topicIds.length === 0) return true
  const matchedTopics = inferTrackTopicIds(track)
  return topicIds.some((topicId) => matchedTopics.includes(topicId))
}

export function ageGroupForNumericAge(age: number): AgeGroup {
  if (age <= 10) return 'primary'
  if (age <= 17) return 'high'
  if (age <= 22) return 'university'
  return 'career'
}

export function stageDetailForNumericAge(age: number): StageDetail | null {
  if (age <= 6) return 'primary-year-1'
  if (age <= 10) return `primary-year-${Math.min(6, Math.max(1, age - 5))}` as StageDetail
  if (age <= 17) return `high-year-${Math.min(12, Math.max(7, age - 4))}` as StageDetail
  if (age <= 18) return 'university-freshman'
  if (age === 19) return 'university-sophomore'
  if (age === 20) return 'university-junior'
  if (age <= 22) return 'university-senior'
  return null
}
