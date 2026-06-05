import { useEffect, useMemo, useState } from 'react'
import { useStore } from '../store/useStore'
import { allTracks } from '../lib/trackData'
import { starterQuestionsFor } from '../data/starterQuestions'
import { 
  loadQuestionCatalog, 
  questionCatalogKeyForTrack
} from '../data/questionCatalog'
import type { QuestionCatalog } from '../data/questionCatalog'
import {
  buildAdaptiveOrder,
  buildTrackQuiz,
  defaultDifficultyFor,
  normalizeQuestionCatalog,
  remixQuestion,
  rewordQuestion,
  shuffledAnswers,
  shuffledQuestions,
} from '../lib/quizRuntime'
import { buildLessonsForChapter } from '../lib/lessonGrouping'
import type { Question } from '../data/questionCatalog/types'
import type { MisconceptionArtifact } from '../store/types'

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
const ADAPTIVE_STATISTICS_TRACK_ID = 'adaptiveStatistics'
const ADAPTIVE_STATISTICS_WARMUP_COUNT = 6
const ADAPTIVE_STATISTICS_CALIBRATION_ID_MIN = 881000001
const ADAPTIVE_STATISTICS_CALIBRATION_ID_MAX = 881000020

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

function adaptiveStatsDifficulty(question: Question, selectedAge: ReturnType<typeof useStore.getState>['selectedAge']) {
  return question.difficulty ?? defaultDifficultyFor(question, selectedAge)
}

function trapKeyFromTempting(value: string) {
  return value.match(/^This is the ([^.]+)\./i)?.[1]?.toLowerCase() ?? null
}

function questionTrapKeys(question: Question) {
  const keys = new Set<string>()
  for (const answer of question.answers) {
    if (answer.correct) continue
    for (const misconception of answer.misconceptions ?? []) {
      const key = trapKeyFromTempting(misconception.tempting)
      if (key) keys.add(key)
    }
  }
  return keys
}

function warmupStatisticsOrder(questions: Question[], seed: number, selectedAge: ReturnType<typeof useStore.getState>['selectedAge']) {
  const authoredCalibration = questions
    .filter((question) => (
      question.id >= ADAPTIVE_STATISTICS_CALIBRATION_ID_MIN &&
      question.id <= ADAPTIVE_STATISTICS_CALIBRATION_ID_MAX
    ))
    .sort((a, b) => a.id - b.id)
    .slice(0, ADAPTIVE_STATISTICS_WARMUP_COUNT)
  const authoredIds = new Set(authoredCalibration.map((question) => question.id))
  if (authoredCalibration.length >= ADAPTIVE_STATISTICS_WARMUP_COUNT) {
    const rest = shuffledQuestions(
      questions.filter((question) => !authoredIds.has(question.id)),
      (seed ^ 0x6d2b79f5) >>> 0,
    )
    return [...authoredCalibration, ...rest]
  }

  const buckets = new Map<number, Question[]>()
  for (const question of questions) {
    if (authoredIds.has(question.id)) continue
    const difficulty = adaptiveStatsDifficulty(question, selectedAge)
    buckets.set(difficulty, [...(buckets.get(difficulty) ?? []), question])
  }

  const shuffledBuckets = [1, 2, 3, 4, 5].map((difficulty) => ({
    difficulty,
    questions: shuffledQuestions(buckets.get(difficulty) ?? [], (seed ^ (difficulty * 0x45d9f3b)) >>> 0),
  }))

  const diagnostic: Question[] = [...authoredCalibration]
  for (let round = 0; diagnostic.length < ADAPTIVE_STATISTICS_WARMUP_COUNT; round += 1) {
    let addedThisRound = false
    for (const bucket of shuffledBuckets) {
      const next = bucket.questions[round]
      if (!next) continue
      diagnostic.push(next)
      addedThisRound = true
      if (diagnostic.length >= ADAPTIVE_STATISTICS_WARMUP_COUNT) break
    }
    if (!addedThisRound) break
  }

  const diagnosticIds = new Set(diagnostic.map((question) => question.id))
  const rest = shuffledQuestions(
    questions.filter((question) => !diagnosticIds.has(question.id)),
    (seed ^ 0x6d2b79f5) >>> 0,
  )

  return [...diagnostic, ...rest]
}

function adaptiveQuestionRating(question: Question, selectedAge: ReturnType<typeof useStore.getState>['selectedAge']) {
  return adaptiveStatsDifficulty(question, selectedAge)
}

function expectedAdaptiveSuccess(playerRating: number, questionRating: number) {
  return 1 / (1 + Math.pow(10, (questionRating - playerRating) / 1.2))
}

function adaptiveStatisticsPlayerRating(
  questions: Question[],
  selectedAge: ReturnType<typeof useStore.getState>['selectedAge'],
  solvedIds: Set<number>,
  attemptedIds: Set<number>,
) {
  const attempted = questions.filter((question) => attemptedIds.has(question.id))
  if (!attempted.length) return 2.4

  let rating = 2.4
  const ordered = attempted.slice().sort((a, b) => a.id - b.id)
  ordered.forEach((question, index) => {
    const itemRating = adaptiveQuestionRating(question, selectedAge)
    const expected = expectedAdaptiveSuccess(rating, itemRating)
    const actual = solvedIds.has(question.id) ? 1 : 0
    const speed = Math.max(0.16, 0.62 - index * 0.025)
    rating += speed * (actual - expected)
    rating = Math.max(1, Math.min(5, rating))
  })
  return rating
}

function buildAdaptiveStatisticsOrder(
  questions: Question[],
  seed: number,
  selectedAge: ReturnType<typeof useStore.getState>['selectedAge'],
  solvedIds: Set<number>,
  attemptedIds: Set<number>,
  misconceptionArtifacts: MisconceptionArtifact[],
) {
  const attempted = questions.filter((question) => attemptedIds.has(question.id))
  if (attempted.length < ADAPTIVE_STATISTICS_WARMUP_COUNT) {
    const warmup = warmupStatisticsOrder(questions, seed, selectedAge)
    return [
      ...warmup.filter((question) => !attemptedIds.has(question.id)),
      ...warmup.filter((question) => attemptedIds.has(question.id)),
    ]
  }
  const target = adaptiveStatisticsPlayerRating(questions, selectedAge, solvedIds, attemptedIds)
  const activeTrapKeys = new Set(
    misconceptionArtifacts
      .filter((item) => !item.clearedAt)
      .map((item) => trapKeyFromTempting(item.tempting))
      .filter((key): key is string => Boolean(key)),
  )

  const unseen = questions.filter((question) => !attemptedIds.has(question.id))
  const seen = questions.filter((question) => attemptedIds.has(question.id))
  const candidatePool = unseen.length >= 12 ? unseen : [...unseen, ...seen]
  const ordered = shuffledQuestions(candidatePool, seed)
    .map((question, orderIndex) => {
      const questionRating = adaptiveQuestionRating(question, selectedAge)
      const fitDistance = Math.abs(questionRating - target)
      const stretchBonus = questionRating > target && questionRating <= target + 0.9 ? -0.08 : 0
      const easePenalty = questionRating < target - 1.2 ? 0.16 : 0
      const repeatPenalty = attemptedIds.has(question.id) ? 1.35 : 0
      return {
        question,
        score: fitDistance + stretchBonus + easePenalty + repeatPenalty + orderIndex * 0.0001,
      }
    })
    .sort((a, b) => a.score - b.score)
    .map((item) => item.question)
  const trapPractice = activeTrapKeys.size > 0
    ? ordered.filter((question) => {
      const keys = questionTrapKeys(question)
      return [...activeTrapKeys].some((key) => keys.has(key))
    })
    : []
  const trapPracticeIds = new Set(trapPractice.map((question) => question.id))
  const trapAwareOrdered = trapPractice.length > 0
    ? [...trapPractice, ...ordered.filter((question) => !trapPracticeIds.has(question.id))]
    : ordered

  const remainingIds = new Set(trapAwareOrdered.map((question) => question.id))
  const remaining = shuffledQuestions(
    questions.filter((question) => !remainingIds.has(question.id)),
    (seed ^ 0x51ed270b) >>> 0,
  )

  return [...trapAwareOrdered, ...remaining]
}

export function useQuizData() {
  const {
    selectedTrack,
    selectedAge,
    mode,
    index,
    selectedAnswerId,
    remixSeeds,
    wordingModes,
    answerShuffleSeed,
    progress,
    mood,
    user,
    selectedChapter,
    selectedLesson,
    chapterShuffleSeed,
    sessionToken,
    misconceptionArtifacts,
    repeatedQuestions,
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
    // Try matching by group label first (matches when chapters fit individually).
    const direct = chapterGroups.find((group) => group.label === selectedChapter)
    if (direct) return direct
    // Fallback: MapScreen uses raw chapter labels, while ChapterSubMap consumes
    // groups that may collapse many chapters into "Unit N". If we have a raw
    // chapter name that doesn't match a group label, build a one-chapter group
    // on the fly so the sub-map can still show lessons for it.
    const isRawChapter = chapterGroups.some((group) => group.chapters.includes(selectedChapter))
    if (isRawChapter) return { label: selectedChapter, chapters: [selectedChapter] }
    return null
  }, [chapterGroups, selectedChapter])

  // All questions belonging to the selected chapter (pre-lesson filter).
  // Used by the chapter sub-map to compute lesson groupings + progress.
  const chapterAllQuestions = useMemo(() => {
    if (!activeChapterGroup) return null
    const chapterSet = new Set(activeChapterGroup.chapters)
    return courseQuestions.filter((q) => chapterSet.has(q.chapter))
  }, [activeChapterGroup, courseQuestions])

  // Lessons (≤10 Qs each, difficulty-ramped) for the selected chapter.
  const chapterLessons = useMemo(() => {
    if (!chapterAllQuestions || chapterAllQuestions.length === 0) return []
    return buildLessonsForChapter(chapterAllQuestions, selectedAge)
  }, [chapterAllQuestions, selectedAge])

  // The currently-active lesson object, if `selectedLesson` is set.
  const activeLesson = useMemo(() => {
    if (!selectedLesson) return null
    return chapterLessons.find((lesson) => lesson.id === selectedLesson) ?? null
  }, [chapterLessons, selectedLesson])

  const chapterQuestions = useMemo(() => {
    if (!activeChapterGroup || !chapterAllQuestions) return null
    // If a lesson is selected, the trainer should only see that lesson's
    // questions. Otherwise, fall back to the whole chapter (legacy mode for
    // entry points that haven't been routed through the sub-map yet).
    if (activeLesson) {
      return shuffledQuestions(activeLesson.questions, chapterShuffleSeed)
    }
    return shuffledQuestions(chapterAllQuestions, chapterShuffleSeed)
  }, [activeChapterGroup, activeLesson, chapterAllQuestions, chapterShuffleSeed])

  const reviewQuestions = useMemo(() => {
    const now = new Date()
    const byId = new Map(courseQuestions.map((q) => [q.id, q]))
    const queued: Question[] = []
    const seen = new Set<number>()
    const add = (questionId: number) => {
      if (seen.has(questionId)) return
      const question = byId.get(questionId)
      if (!question) return
      seen.add(questionId)
      queued.push(question)
    }

    for (const item of misconceptionArtifacts) {
      if (!item.clearedAt) add(item.questionId)
    }

    courseQuestions.forEach(q => {
      const review = progress.reviews[q.id]
      if (review && new Date(review.nextReviewDate) <= now) add(q.id)
    })

    repeatedQuestions.forEach(add)

    return queued
  }, [courseQuestions, misconceptionArtifacts, progress.reviews, repeatedQuestions])

  const hardQuestions = useMemo(() => {
    const hard = courseQuestions.filter((q) => defaultDifficultyFor(q, selectedAge) >= 4)
    return hard.length >= 4 ? hard : courseQuestions
  }, [courseQuestions, selectedAge])

  const rawActiveSet = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? courseQuestions
    : chapterQuestions
    ?? (mode === 'review' && reviewQuestions.length > 0
      ? reviewQuestions
      : mode === 'doom'
        ? hardQuestions
      : mode === 'daily'
        ? dailyQuestions
        : courseQuestions)

  // Adaptive ordering: bucket by Question.difficulty (1-5) and ramp the
  // session from easier → harder, with seeded shuffles inside each band.
  // Keyed on identity of rawActiveSet, sessionToken, and selectedAge so the
  // sequence stays stable while the player is mid-session and only changes
  // when they start a new one (track switch / reset / etc).
  const computedActiveSet = useMemo(() => {
    if (!rawActiveSet.length) return rawActiveSet
    // Mix a hash of the session token + a track-id hash into a numeric seed.
    const seed = (hashForAnswerCount(sessionToken) ^ hashForAnswerCount(selectedTrackInfo.id)) >>> 0
    if (selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID) {
      const solvedIds = new Set(progress.solved)
      const attemptedIds = new Set(Object.keys(progress.reviews).map((key) => Number(key)))
      return buildAdaptiveStatisticsOrder(rawActiveSet, seed, selectedAge, solvedIds, attemptedIds, misconceptionArtifacts)
    }
    return buildAdaptiveOrder(rawActiveSet, seed, selectedAge)
  }, [misconceptionArtifacts, progress.reviews, progress.solved, rawActiveSet, sessionToken, selectedAge, selectedTrackInfo.id])
  const [adaptiveOrderSnapshot, setAdaptiveOrderSnapshot] = useState<Question[] | null>(null)

  useEffect(() => {
    if (selectedTrackInfo.id !== ADAPTIVE_STATISTICS_TRACK_ID) return
    if (selectedAnswerId) return
    setAdaptiveOrderSnapshot(computedActiveSet)
  }, [computedActiveSet, selectedAnswerId, selectedTrackInfo.id])

  const activeSet = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID && selectedAnswerId && adaptiveOrderSnapshot
    ? adaptiveOrderSnapshot
    : computedActiveSet

  // Pick the safety-net bank by the user's age group so the fallback voice
  // matches the audience (8-yr-old vs career-changer). Falls back to the
  // default flat bank if selectedAge is unknown.
  const fallbackQuestions = starterQuestionsFor(selectedAge)
  const baseQuestion = (activeSet.length ? activeSet : fallbackQuestions)[
    index % (activeSet.length ? activeSet.length : fallbackQuestions.length)
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
    chapterAllQuestions,
    chapterLessons,
    activeLesson,
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
