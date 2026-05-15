import { useEffect, useMemo, useState } from 'react'
import { useStore } from '../store/useStore'
import { allTracks } from '../lib/trackData'
import { starterQuestions } from '../data/starterQuestions'
import { 
  loadQuestionCatalog, 
  questionCatalogKeyForTrack
} from '../data/questionCatalog'
import type { QuestionCatalog } from '../data/questionCatalog'
import {
  buildTrackQuiz,
  normalizeQuestionCatalog,
  remixQuestion,
  rewordQuestion,
  shuffledAnswers,
  shuffledQuestions,
} from '../lib/quizRuntime'

const MAP_BACKGROUNDS = [
  '/assets/reef/reef-world-scroll_long1.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f02c6eca9481949b7d767a5b327704.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f02d5953848194aeb38fe20c770f9e.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f02e4675dc8194843b7795f77fe94f.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f02f47eb688194a01cd627bfbeb10f.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f0312af20881949ce13382f96408e8.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f0323697448194aa0e91cb4d2e4c3c.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f0358da7048194b3fa0a929da8ae69.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f036373d2081949a754408e196a5de.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f03705eb148194ab0c747f25d1a6eb.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f037d1c58c8194ae133ae1f3563a0b.png',
  '/assets/generated/map-backgrounds/ig_0e08c313e734bdf10169f0389dca98819496f0b904c36b2ec6.png',
  '/assets/generated/map-backgrounds/swamp-reef-map-v1.png'
]

const MAX_VISIBLE_CHAPTER_GROUPS = 10
const MAP_STAGE_COUNT = 4

type ChapterGroup = {
  label: string
  chapters: string[]
}

function hashForAnswerCount(seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return hash
}

function buildChapterGroups(courseQuestions: ReturnType<typeof buildTrackQuiz>): ChapterGroup[] {
  const chapters: string[] = []
  const seen = new Set<string>()

  for (const question of courseQuestions) {
    if (!seen.has(question.chapter)) {
      seen.add(question.chapter)
      chapters.push(question.chapter)
    }
  }

  if (chapters.length <= MAX_VISIBLE_CHAPTER_GROUPS) {
    return chapters.map((chapter) => ({ label: chapter, chapters: [chapter] }))
  }

  const groups: ChapterGroup[] = []
  const size = Math.ceil(chapters.length / MAX_VISIBLE_CHAPTER_GROUPS)

  for (let groupIndex = 0; groupIndex < MAX_VISIBLE_CHAPTER_GROUPS; groupIndex++) {
    const slice = chapters.slice(groupIndex * size, (groupIndex + 1) * size)
    if (!slice.length) break

    groups.push({
      label: `Unit ${groupIndex + 1}`,
      chapters: slice,
    })
  }

  return groups
}

export function useQuizData() {
  const {
    selectedTrack,
    selectedAge,
    mode,
    index,
    remixSeeds,
    wordingModes,
    answerShuffleSeed,
    progress,
    mood,
    user,
    selectedChapter,
    chapterShuffleSeed,
  } = useStore()
  const profileAnswers = user?.questionnaireAnswers ?? {}
  
  const [loadedQuestionCatalogs, setLoadedQuestionCatalogs] = useState<Record<string, QuestionCatalog>>({})

  const selectedTrackInfo =
    allTracks.find((track) => track.id === selectedTrack && track.ageGroup === selectedAge) ??
    allTracks.find((track) => track.id === selectedTrack) ??
    allTracks[0]
  const selectedCatalogKey = questionCatalogKeyForTrack(selectedTrackInfo.id, selectedTrackInfo.ageGroup)
  const selectedTrackCatalog = selectedCatalogKey ? loadedQuestionCatalogs[selectedCatalogKey] ?? null : null
  
  const isSelectedCatalogReady = selectedCatalogKey === null || selectedTrackCatalog !== null

  useEffect(() => {
    if (!selectedTrack) return

    const catalogKey = questionCatalogKeyForTrack(selectedTrackInfo.id, selectedTrackInfo.ageGroup)
    if (!catalogKey || loadedQuestionCatalogs[catalogKey]) return

    let cancelled = false
    loadQuestionCatalog(catalogKey).then((catalog) => {
      if (cancelled) return
      setLoadedQuestionCatalogs((current) =>
        current[catalogKey] ? current : { ...current, [catalogKey]: normalizeQuestionCatalog(catalog) }
      )
    })

    return () => { cancelled = true }
  }, [loadedQuestionCatalogs, selectedTrack, selectedTrackInfo])

  const { courseQuestions, catalogError } = useMemo(() => {
    if (!isSelectedCatalogReady) return { courseQuestions: [], catalogError: null }
    try {
      return { courseQuestions: buildTrackQuiz(selectedTrackInfo, selectedTrackCatalog ?? {}), catalogError: null }
    } catch (err) {
      return { courseQuestions: [], catalogError: err instanceof Error ? err.message : String(err) }
    }
  }, [isSelectedCatalogReady, selectedTrackCatalog, selectedTrackInfo])

  const dailyQuestions = useMemo(() => courseQuestions, [courseQuestions])

  const chapterGroups = useMemo(() => buildChapterGroups(courseQuestions), [courseQuestions])

  const activeChapterGroup = useMemo(() => {
    if (!selectedChapter) return null
    return chapterGroups.find((group) => group.label === selectedChapter) ?? null
  }, [chapterGroups, selectedChapter])

  const chapterQuestions = useMemo(() => {
    if (!activeChapterGroup) return null
    const chapterSet = new Set(activeChapterGroup.chapters)
    const filtered = courseQuestions.filter((q) => chapterSet.has(q.chapter))
    return shuffledQuestions(filtered, chapterShuffleSeed)
  }, [activeChapterGroup, chapterShuffleSeed, courseQuestions])

  const reviewQuestions = useMemo(() => {
    const now = new Date()
    return courseQuestions.filter(q => {
      const review = progress.reviews[q.id]
      if (!review) return false
      return new Date(review.nextReviewDate) <= now
    })
  }, [courseQuestions, progress.reviews])

  const activeSet = chapterQuestions
    ?? (mode === 'review' && reviewQuestions.length > 0
      ? reviewQuestions
      : mode === 'daily'
        ? dailyQuestions
        : courseQuestions)
  
  const baseQuestion = (activeSet.length ? activeSet : starterQuestions)[
    index % (activeSet.length ? activeSet.length : starterQuestions.length)
  ]
  
  const remixSeed = remixSeeds[baseQuestion.id] ?? 0
  const wordingMode = wordingModes[baseQuestion.id] ?? 0
  const question = rewordQuestion(remixQuestion(baseQuestion, remixSeed), wordingMode)
  
  const visibleAnswers = useMemo(
    () => {
      const shuffled = shuffledAnswers(question.answers, `${mode}-${baseQuestion.id}-${remixSeed}-${answerShuffleSeed}`)
      const seed = hashForAnswerCount(`${baseQuestion.id}-${remixSeed}`)
      
      // Mood adaptation: cozy=fewer choices, fired=more
      let minChoices = 3
      let maxChoices = 6
      if (mood === 'cozy' || profileAnswers.challenge === 'gentle' || profileAnswers.friction === 'too-hard') { minChoices = 3; maxChoices = 3 }
      else if (mood === 'good' || profileAnswers.challenge === 'balanced') { minChoices = 3; maxChoices = 5 }
      else if (mood === 'fired' || profileAnswers.challenge === 'nightmare') { minChoices = 4; maxChoices = 6 }
      if (profileAnswers.time === '5min') maxChoices = Math.min(maxChoices, 4)
      // curious = default 3-6
      
      const range = maxChoices - minChoices + 1
      const count = minChoices + (seed % range)
      if (shuffled.length <= count) return shuffled
      const correct = shuffled.filter(a => a.correct)
      const wrong = shuffled.filter(a => !a.correct)
      return [...correct, ...wrong.slice(0, count - correct.length)]
    },
    [answerShuffleSeed, baseQuestion.id, mode, mood, profileAnswers.challenge, profileAnswers.friction, profileAnswers.time, question.answers, remixSeed]
  )

  // Map nodes for display (4 positioned stages)
  const mapNodes = useMemo(() => {
    const QUESTIONS_PER_STAGE = 4
    const stages: typeof dailyQuestions[number][] = []
    for (let i = 0; i < MAP_STAGE_COUNT && i * QUESTIONS_PER_STAGE < dailyQuestions.length; i++) {
      stages.push(dailyQuestions[i * QUESTIONS_PER_STAGE])
    }
    return stages
  }, [dailyQuestions])

  // Select map background based on track ID
  const mapBackground = useMemo(() => {
    const seed = hashForAnswerCount(selectedTrackInfo.id)
    return MAP_BACKGROUNDS[seed % MAP_BACKGROUNDS.length]
  }, [selectedTrackInfo.id])

  return {
    selectedTrackInfo,
    isSelectedCatalogReady,
    catalogError,
    courseQuestions,
    chapterGroups,
    dailyQuestions,
    chapterQuestions,
    mapNodes,
    activeSet,
    baseQuestion,
    question,
    visibleAnswers,
    remixSeed,
    wordingMode,
    mapBackground,
    reviewQuestions,
  }
}
