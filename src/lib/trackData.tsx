import type { ReactNode } from 'react'
import { Brain, BookOpen, Calculator, Code2, Compass, FlaskConical, GraduationCap, Heart, LineChart, Map, Microscope, ShieldQuestion, Sparkles, Star, Swords, Target, Search, Zap, DollarSign, Edit3 } from 'lucide-react'
import { coreTrackSeeds, stageBuckets } from '../data/ageCatalog'
import type { AgeGroup, StageDetail, IconKey } from '../data/ageCatalog'
import { materializeTrack, buildCollectionTracks } from './trackUtils'
import type { Track } from './trackUtils'

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
const coreTracks: Track[] = coreTrackSeeds.map(seed => materializeTrack(seed, iconForKey))
export const allTracks: Track[] = [...coreTracks, ...collectionTracks]

export function trackMatchesStageDetail(track: Track, detail: StageDetail | null) {
  if (!detail) return true
  const bucket = stageBuckets[detail]
  return bucket ? bucket.includes(track.title) : true
}

export function getFilteredTracks(age: AgeGroup, detail: StageDetail | null, discipline: string) {
  const ageFiltered = allTracks.filter(
    track => track.ageGroup === age && trackMatchesStageDetail(track, detail)
  )
  return ageFiltered.filter(track =>
    discipline === 'All' ? true : track.discipline === discipline
  )
}
