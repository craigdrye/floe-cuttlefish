import type { ReactNode } from 'react'
import { Brain, BookOpen, Calculator, Code2, Compass, FlaskConical, GraduationCap, Heart, LineChart, Map, Microscope, ShieldQuestion, Sparkles, Star, Swords, Target, Search, Zap, DollarSign, Edit3 } from 'lucide-react'
import { coreTrackSeeds, stageBuckets } from '../data/ageCatalog'
import type { AgeGroup, StageDetail, IconKey } from '../data/ageCatalog'
import { materializeTrack, buildCollectionTracks } from './trackUtils'
import type { Track } from './trackUtils'
import { trackMatchesAnyTopic } from './coursePersonalization'
import type { CourseTopicId } from './coursePersonalization'
import type { StageDetail as StageDetailType } from '../data/ageCatalog'
import { IQ_TEST_TRACK_ID } from '../data/iqTest'

/**
 * The IQ Test is an adult-only universal track: it appears in the "All" tab
 * for anyone over 20, regardless of the interest filter. It lives in the
 * career catalog with `ageGroup: 'career'` but is also surfaced for
 * `university` juniors/seniors and `career-hopper` learners via this helper.
 */
function isAdultUniversalTrack(track: { id: string }) {
  return track.id === IQ_TEST_TRACK_ID
}

function adultUniversalTrackVisibleFor(age: AgeGroup, detail: StageDetailType | null) {
  if (age === 'career' || age === 'career-hopper') return true
  if (age === 'university') {
    if (!detail) return true
    return detail === 'university-junior' || detail === 'university-senior'
  }
  return false
}

export const iconForKey: Record<IconKey, ReactNode> = {
  brain: <Brain size={24} />,
  book: <BookOpen size={24} />,
  calculator: <Calculator size={24} />,
  code: <Code2 size={24} />,
  compass: <Compass size={24} />,
  flask: <FlaskConical size={24} />,
  'graduation-cap': <GraduationCap size={24} />,
  heart: <Heart size={24} />,
  'line-chart': <LineChart size={24} />,
  map: <Map size={24} />,
  microscope: <Microscope size={24} />,
  shield: <ShieldQuestion size={24} />,
  sparkles: <Sparkles size={24} />,
  star: <Star size={24} />,
  swords: <Swords size={24} />,
  target: <Target size={24} />,
  search: <Search size={24} />,
  'book-open': <BookOpen size={24} />,
  zap: <Zap size={24} />,
  'dollar-sign': <DollarSign size={24} />,
  'edit-3': <Edit3 size={24} />,
}

const collectionTracks = buildCollectionTracks(iconForKey)
const coreTracks: Track[] = coreTrackSeeds
  .filter(seed => seed.ageGroup !== 'preschool')
  .map(seed => materializeTrack(seed, iconForKey))
export const allTracks: Track[] = [...coreTracks, ...collectionTracks]

export function trackMatchesStageDetail(track: Track, detail: StageDetail | null) {
  if (track.id.startsWith('guess')) return true
  if (!detail) return true
  const bucket = stageBuckets[detail]
  return bucket ? bucket.includes(track.title) : true
}

export function getFilteredTracks(age: AgeGroup, detail: StageDetail | null, discipline: string) {
  const ageFiltered = allTracks.filter((track) => {
    if (isAdultUniversalTrack(track)) {
      return adultUniversalTrackVisibleFor(age, detail)
    }
    return track.ageGroup === age && trackMatchesStageDetail(track, detail)
  })
  return ageFiltered.filter(track =>
    discipline === 'All' ? true : track.discipline === discipline
  )
}

function isFlexibleDiscoveryTrack(track: Track) {
  return track.id.startsWith('guess')
}

const hopperTracksForCareerFinance = new Set([
  'quant',
  'quantAdvanced',
  'consultingCases',
  'brainBurners',
])

export function getPersonalizedTracks(age: AgeGroup, detail: StageDetail | null, topicIds: CourseTopicId[]) {
  const includeCareerHopper =
    age === 'career' &&
    topicIds.length > 0 &&
    topicIds.includes('business-finance')

  return allTracks.filter((track) => {
    if (isAdultUniversalTrack(track)) {
      // IQ Test bypasses topic filtering entirely and is gated only by age.
      return adultUniversalTrackVisibleFor(age, detail)
    }
    const ageMatchesCore = track.ageGroup === age && trackMatchesStageDetail(track, detail)
    const ageMatchesHopper =
      includeCareerHopper &&
      track.ageGroup === 'career-hopper' &&
      trackMatchesStageDetail(track, detail) &&
      (trackMatchesAnyTopic(track, topicIds) || hopperTracksForCareerFinance.has(track.id))
    const ageOk = ageMatchesCore || isFlexibleDiscoveryTrack(track) || ageMatchesHopper
    return ageOk && trackMatchesAnyTopic(track, topicIds)
  })
}
