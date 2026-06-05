import { useMemo, useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Brain, BookOpen, Calculator, CheckCircle2, XCircle, Sparkles, ShieldQuestion, Repeat2, Trophy, ArrowLeft, Star } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { TopBar } from '../layout/TopBar'
import { SpeakerPortrait, type SpeakerRole } from '../common/SpeakerPortrait'
import { XpPopup } from '../common/XpPopup'
import { calculateExpression } from '../../lib/mathUtils'
import { playComboSound, playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'
import { bossRewardFor, bossTitleFor } from '../../lib/rewardSystem'
import { buildLearningSupport } from '../../lib/learningSupport'
import { LESSON_INTROS } from '../../data/questionCatalog/lessonIntros'
import type { Answer, Misconception, Question } from '../../data/questionCatalog/types'

const ADAPTIVE_STATISTICS_TRACK_ID = 'adaptiveStatistics'
const ADAPTIVE_STATISTICS_WARMUP_COUNT = 6
const ADAPTIVE_STATISTICS_CALIBRATION_ID_MIN = 881000001
const ADAPTIVE_STATISTICS_CALIBRATION_ID_MAX = 881000020

const CLIMBER_TRAP_DOMAINS: Record<string, string> = {
  'total-vs-average trap': 'Averages as fair-share balance',
  'outlier-pulls-the-mean trap': 'Typical values in skewed worlds',
  'average-hides-spread trap': 'Spread, reliability, and risk',
  'percent-without-a-base trap': 'Percentages with their hidden base',
  'randomness-as-vibe trap': 'Randomness as a method, not a mood',
  'warped-mirror sample trap': 'Samples as mirrors for populations',
  'correlation-story trap': 'Correlation as clue, not confession',
  'causation-without-fair-groups trap': 'Fair comparison before causal claims',
  'base-rate blindness trap': 'Base rates behind alarms and tests',
  'next-play prediction trap': 'Long-run expectation vs one outcome',
  'chart-scale illusion trap': 'Graphs as visual arguments',
  'outlier panic trap': 'Outliers as mysteries to investigate',
  'tiny-sample confidence trap': 'Sample size and statistical wobble',
  'exact-looking poll trap': 'Intervals as honest uncertainty',
  'significant-means-important trap': 'Statistical signal vs real-world meaning',
  'line-as-proof trap': 'Regression lines without overclaiming',
  'prediction-is-reality trap': 'Residuals and model humility',
  'one-trial-is-enough trap': 'Simulation through repetition',
  'sparkly-noise trap': 'False discovery and hidden searching',
  'certainty-as-strength trap': 'Careful humility as a strength',
}

const CLIMBER_AHA_INSIGHTS: Record<string, string> = {
  'total-vs-average trap': 'A mean is a rebalancing story: everyone pours their values into one bowl, then the pile is shared back equally.',
  'outlier-pulls-the-mean trap': 'One extreme value can tug the mean like a moon pulling the tide; the median often stays calmer.',
  'average-hides-spread trap': 'Two groups can share the same average while living in totally different worlds of risk, wobble, and surprise.',
  'percent-without-a-base trap': 'A percentage is never alone. It always whispers, "percent of what?"',
  'randomness-as-vibe trap': 'Random is not messy. Random is a disciplined way to stop our preferences from choosing the evidence.',
  'warped-mirror sample trap': 'A sample is a mirror for a population. If the mirror is warped, the answer can look precise and still be wrong.',
  'correlation-story trap': 'Correlation is a clue that two things move together, not a confession that one caused the other.',
  'causation-without-fair-groups trap': 'To talk about cause, you need a fair comparison: groups that differ in the treatment, not in every other useful thing.',
  'base-rate blindness trap': 'A test result changes your odds, but the starting odds still matter. Rare things remain rare unless the evidence is very strong.',
  'next-play prediction trap': 'Expected value describes the long-run center of gravity, not a promise about the very next try.',
  'chart-scale illusion trap': 'Graphs are arguments made with space. Always check what the axes are doing before trusting the picture.',
  'outlier panic trap': 'An outlier is not automatically junk. It is a mystery: measurement error, rare event, or important clue?',
  'tiny-sample confidence trap': 'Small samples wobble. A handful of observations can feel like a pattern while still mostly being weather.',
  'exact-looking poll trap': 'Intervals are honest uncertainty. They say, "Here is the range my sample can responsibly defend."',
  'significant-means-important trap': 'Statistical significance asks whether a signal is likely real. Importance asks whether it matters in the world.',
  'line-as-proof trap': 'A regression line is a useful summary, not a magic spell. It can describe a trend without proving a cause.',
  'prediction-is-reality trap': 'A model prediction is a best guess with leftover error around it. Residuals are the humility tax.',
  'one-trial-is-enough trap': 'Simulation teaches by repetition. One run is a story; many runs reveal the pattern underneath.',
  'sparkly-noise trap': 'If you search enough patterns, some sparkle by accident. Good statistics asks what was planned before the looking began.',
  'certainty-as-strength trap': 'The strongest statistical thinkers sound careful because they are tracking what the evidence can and cannot carry.',
}

function adaptiveStatisticsDifficulty(question: Question): number {
  if (question.difficulty) return question.difficulty
  if (question.challengeRating) return Math.max(1, Math.min(5, Math.ceil(question.challengeRating / 2)))
  return question.kind === 'deep' ? 4 : 2
}

function adaptiveStatisticsLevelLabel(courseQuestions: Question[], solvedIds: Set<number>, attemptedIds: Set<number>) {
  const attempted = courseQuestions.filter((item) => attemptedIds.has(item.id))
  if (attempted.length === 0) return null
  const correct = attempted.filter((item) => solvedIds.has(item.id))
  const accuracy = correct.length / Math.max(1, attempted.length)
  const correctDifficulty = correct.length
    ? correct.reduce((sum, item) => sum + adaptiveStatisticsDifficulty(item), 0) / correct.length
    : 1
  const climbLevel = Math.max(1, Math.min(5, Math.round(correctDifficulty + (accuracy >= 0.75 ? 0.5 : 0))))
  const names = ['Gentle foundations', 'Building the lens', 'Pattern spotter', 'Evidence climber', 'Inference explorer']
  return names[climbLevel - 1]
}

function adaptiveStatisticsCoachNote({
  attemptedCount,
  accuracy,
  activeTrapCount,
  level,
}: {
  attemptedCount: number
  accuracy: number | null
  activeTrapCount: number
  level: string | null
}) {
  if (attemptedCount === 0) {
    return {
      title: 'Floe is finding your level',
      body: 'Just play. Every answer helps Floe tune the next few questions toward the edge of your comfort zone.',
    }
  }

  if (attemptedCount < ADAPTIVE_STATISTICS_WARMUP_COUNT) {
    const remaining = ADAPTIVE_STATISTICS_WARMUP_COUNT - attemptedCount
    return {
      title: `${remaining} level-finding question${remaining === 1 ? '' : 's'} left`,
      body: activeTrapCount > 0
        ? `I have caught ${activeTrapCount} thinking trap${activeTrapCount === 1 ? '' : 's'} for later. Wrong answers are not a verdict; they help tune the stream.`
        : 'I am still sampling broadly before I settle into your flow band.',
    }
  }

  if (activeTrapCount > 0) {
    return {
      title: 'Trap-aware climb active',
      body: `You are calibrated${level ? ` around ${level.toLowerCase()}` : ''}. I will mix nearby difficulty with cousin questions for the traps on your shelf.`,
    }
  }

  return {
    title: level ? `${level} path` : 'Adaptive path',
    body: accuracy === null
      ? 'The climb is now choosing questions near your current level, then gently stretching upward.'
      : `You are running at ${Math.round(accuracy * 100)}% accuracy so far. I will keep the water just choppy enough to grow in.`,
  }
}

function trapKeyFromTempting(value: string) {
  return value.match(/^This is the ([^.]+)\./i)?.[1]?.toLowerCase() ?? null
}

function trapNameFromKey(value: string) {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function trapDomainName(key: string | null) {
  if (!key) return 'Statistical thinking'
  return CLIMBER_TRAP_DOMAINS[key] ?? trapNameFromKey(key)
}

function firstQuestionTrapKey(question: Question) {
  for (const answer of question.answers) {
    if (answer.correct) continue
    for (const misconception of answer.misconceptions ?? []) {
      const key = trapKeyFromTempting(misconception.tempting)
      if (key) return key
    }
  }
  return null
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

function questionRarity(question: { kind: string; xp: number }): string {
  if (question.kind === 'deep' && question.xp >= 18) return 'legendary'
  if (question.kind === 'deep') return 'epic'
  if (question.xp >= 15) return 'rare'
  if (question.xp >= 10) return 'uncommon'
  return 'common'
}

const rarityLabels: Record<string, string> = {
  common: '⚪ Common',
  uncommon: '🟢 Uncommon',
  rare: '🔵 Rare',
  epic: '🟣 Epic',
  legendary: '🟡 Legendary',
}

const successHeadlines = [
  'Correct! Tiny arm-flap salute.',
  'Correct! Small hat toss approved.',
  'Correct! Polite goblin fist-pump.',
  'Correct! Mini trumpet of glory.',
  'Correct! Pocket parade commences.',
  'Correct! Respectful pigeon victory lap.',
  'Correct! Little cape flutter achieved.',
  'Correct! Teacup fanfare activated.',
  'Correct! One ceremonial jazz hand.',
  'Correct! Micro-confetti in spirit.',
] as const

function showQuestionQualityControls() {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem('floe:showQualityControls') === 'true'
}

function anonymousRatingClientId() {
  if (typeof window === 'undefined') return 'server'

  const key = 'floe:question-rating-client-id'
  const existing = window.localStorage.getItem(key)
  if (existing) return existing

  const generated =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `anon-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
  window.localStorage.setItem(key, generated)
  return generated
}

function firstSentence(value?: string) {
  const text = (value ?? '').replace(/\s+/g, ' ').trim()
  if (!text) return ''
  const match = text.match(/^(.+?[.!?])(?:\s|$)/)
  return match?.[1] ?? text
}

function answerMisconceptions(question: Question, selectedAnswer: Answer | undefined): Misconception[] {
  if (!selectedAnswer || selectedAnswer.correct) return []
  if (selectedAnswer.misconceptions?.length) return selectedAnswer.misconceptions

  const correct = question.answers.find((answer) => answer.correct)
  const lessonClue = firstSentence(question.lesson)
  return [
    {
      tempting: `"${selectedAnswer.label}" is close enough to the topic to feel plausible, especially if you are matching keywords instead of testing the idea.`,
      flaw: correct
        ? `The prompt is asking for the option that best fits "${question.title}" in ${question.chapter}. The answer that matches that job is "${correct.label}", not this choice.`
        : `This choice does not match the exact job the prompt is asking the answer to do.`,
      reframe: lessonClue || `Restate the question in plain language, then compare each option against that exact task instead of choosing the nearest familiar phrase.`,
    },
  ]
}

const quickBriefingRoster: Array<{ role: SpeakerRole; name: string; label: string; lines: string[] }> = [
  {
    role: 'drill',
    name: 'Sergeant Ink',
    label: 'pre-question briefing',
    lines: [
      'Spot the rule. Smack the trap.',
      'Read first. Chaos second.',
      'Find the trick. Bonk it.',
      'Eyes up. Ambush the trick.',
      'Count calmly. Crush nonsense.',
      'Catch the clue. Move.',
    ],
  },
  {
    role: 'strongman',
    name: 'Mister Tides',
    label: 'chain-rattle briefing',
    lines: [
      'Read twice. Flex later.',
      'Tiny clue. Huge victory.',
      'No panic. Just pummel patterns.',
      'Lift the hint, not panic.',
      'Big vibes. Small careful steps.',
      'Flex on the fake answer.',
    ],
  },
  {
    role: 'hulkster',
    name: 'Bulk Hogan',
    label: 'ring-rope pep talk',
    lines: [
      'Find the pattern, brother.',
      'Tiny math. Massive splash.',
      'Clobber the sneaky answer.',
      'Whatcha gonna solve, brother?',
      'Snap into the right clue.',
      'Leg-drop the wrong choice.',
    ],
  },
  {
    role: 'karate',
    name: 'Sensei Smack',
    label: 'dojo warning',
    lines: [
      'Use clues. Break nonsense.',
      'Calm brain. Fast hands.',
      'One clean move wins.',
      'Bow. Breathe. Solve cleanly.',
      'Kick doubt. Keep clues.',
      'Quiet mind. Loud correctness.',
    ],
  },
  {
    role: 'captain',
    name: 'Captain Crank',
    label: 'cockpit command',
    lines: [
      'Check gauges. Then guess nothing.',
      'Steady hands. Spot turbulence.',
      'Fly straight through the trick.',
      'Read the map, hotshot.',
      'No barrel rolls into distractors.',
      'Land on the actual rule.',
    ],
  },
  {
    role: 'professor',
    name: 'Doctor Boomhair',
    label: 'lab memo',
    lines: [
      'Observe first. Zap later.',
      'Hypothesis first. Hair second.',
      'Tiny clue. Huge brain noise.',
      'Science the heck out of it.',
      'Do not lick the beaker.',
      'Test the rule, genius.',
    ],
  },
  {
    role: 'pirate',
    name: 'Captain Wrongbeard',
    label: 'deck warning',
    lines: [
      'Find the clue, matey.',
      'Plunder the pattern only.',
      'No guessing on this ship.',
      'Steer past the shiny trap.',
      'Count the clues, scallywag.',
      'Arrrithmetic first. Swagger later.',
    ],
  },
  {
    role: 'mechanic',
    name: 'Greasefang Joe',
    label: 'garage note',
    lines: [
      'Pop the hood on it.',
      'Check parts. Then choose.',
      'Loose bolt? Tight logic.',
      'Trace the problem, wrenchling.',
      'Don’t punch it. Diagnose it.',
      'Find the busted assumption.',
    ],
  },
]

// pickQuickBriefingSpeaker and quickBriefingRoster were previously used by
// the now-removed story-card flavor section. Kept commented for now in case
// we want to revive a calmer version of the briefing speaker.
// (Removed: see git history for the roster definitions.)
void quickBriefingRoster
void successHeadlines

function pickSuccessHeadline(questionId: number, remixSeed: number) {
  return successHeadlines[Math.abs(questionId * 11 + remixSeed) % successHeadlines.length]
}

export function TrainerScreen() {
  const {
    progress, setProgress, mode, index, setIndex,
    selectedAge,
    selectedAnswerId, setSelectedAnswerId, showHint, setShowHint,
    incrementAnswerShuffleSeed, calculatorInput, setCalculatorInput,
    thoughts, setThought, wrongAnswerFeedback, setWrongAnswerFeedback,
    setScreen, setRemixSeed, setWordingMode,
    combo, incrementCombo, resetCombo,
    lastXpGain, setLastXpGain, unlockAchievement, updateReview,
    captureMisconception, clearMisconception, misconceptionArtifacts, recordBossWin, bossWins, focusMode,
    questionQualityRatings, setQuestionQualityRating,
    showLesson, setShowLesson, teachBeforeQuestion,
    selectedLesson, setSelectedLesson,
  } = useStore()

  // Back navigation: if the player drilled in through a chapter sub-map
  // (i.e. a specific lesson is selected) we send them back to the chapter
  // sub-map. Otherwise (legacy entry points like the review mode CTA), we
  // fall back to the course-level map.
  const goBackFromTrainer = () => {
    if (selectedLesson) {
      setSelectedLesson(null)
      setScreen('chapter')
    } else {
      setScreen('map')
    }
  }

  const {
    selectedTrackInfo, isSelectedCatalogReady, courseQuestions, activeSet, baseQuestion, question, visibleAnswers, remixSeed, catalogError,
  } = useQuizData()

  const [armedAnswerId, setArmedAnswerId] = useState<string | null>(null)
  const [bossIntroDismissedFor, setBossIntroDismissedFor] = useState<string | number | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showThoughts, setShowThoughts] = useState(false)
  const [attentionTool, setAttentionTool] = useState<'ask' | 'hint' | 'teach' | null>(null)
  const [ratingSyncState, setRatingSyncState] = useState<'idle' | 'saving' | 'saved' | 'local' | 'failed'>('idle')
  const [retiredTrapName, setRetiredTrapName] = useState<string | null>(null)

  useEffect(() => {
    setCalculatorInput('')
  }, [baseQuestion.id, remixSeed, setCalculatorInput])

  useEffect(() => {
    setAttentionTool(null)
    if (!selectedLesson || mode !== 'daily' || index !== 0 || selectedAnswerId) return

    const schedule = [
      { tool: 'ask' as const, delay: 3000 },
      { tool: 'hint' as const, delay: 3160 },
      { tool: 'teach' as const, delay: 3320 },
      { tool: 'ask' as const, delay: 3800 },
      { tool: 'hint' as const, delay: 3960 },
      { tool: 'teach' as const, delay: 4120 },
    ]
    const timers = schedule.flatMap(({ tool, delay }) => [
      window.setTimeout(() => setAttentionTool(tool), delay),
      window.setTimeout(() => setAttentionTool((current) => (current === tool ? null : current)), delay + 140),
    ])
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [baseQuestion.id, index, mode, question.prompt, remixSeed, selectedAnswerId, selectedLesson])

  const thoughtKey = `${baseQuestion.id}-${remixSeed}`
  const calculatorResult = useMemo(() => calculateExpression(calculatorInput), [calculatorInput])
  const selectedAnswer = question.answers.find((a) => a.id === selectedAnswerId)
  const isCorrect = selectedAnswer?.correct
  const rarity = questionRarity(question)
  const activeMuseumItem = misconceptionArtifacts.find((item) => item.questionId === question.id && !item.clearedAt)
  // Lessons play in rounds of "3 questions + a boss" (the round's last question),
  // capped at 2 rounds / 8 questions per run. Long lesson buckets can keep all
  // their questions, but one play-through still moves on after the familiar
  // short session length.
  const adaptiveStatisticsAttemptedCount = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? courseQuestions.filter((item) => progress.reviews[item.id]).length
    : 0
  const adaptiveStatisticsAttemptedIds = useMemo(
    () => new Set(Object.keys(progress.reviews).map((key) => Number(key))),
    [progress.reviews],
  )
  const adaptiveStatisticsSolvedIds = useMemo(
    () => new Set(progress.solved),
    [progress.solved],
  )
  const adaptiveStatisticsCourseQuestionIds = useMemo(
    () => new Set(courseQuestions.map((item) => item.id)),
    [courseQuestions],
  )
  const adaptiveStatisticsActiveTrapCount = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? misconceptionArtifacts.filter((item) => adaptiveStatisticsCourseQuestionIds.has(item.questionId) && !item.clearedAt).length
    : 0
  const adaptiveStatisticsAccuracy = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID && adaptiveStatisticsAttemptedCount > 0
    ? courseQuestions.filter((item) => adaptiveStatisticsAttemptedIds.has(item.id) && adaptiveStatisticsSolvedIds.has(item.id)).length / adaptiveStatisticsAttemptedCount
    : null
  const adaptiveStatisticsLevel = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? adaptiveStatisticsLevelLabel(courseQuestions, adaptiveStatisticsSolvedIds, adaptiveStatisticsAttemptedIds)
    : null
  const adaptiveStatisticsCurrentAhaKey = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID &&
    question.id >= ADAPTIVE_STATISTICS_CALIBRATION_ID_MIN &&
    question.id <= ADAPTIVE_STATISTICS_CALIBRATION_ID_MAX
    ? firstQuestionTrapKey(question)
    : null
  const adaptiveStatisticsAhaMoment = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID &&
    Boolean(selectedAnswerId) &&
    isCorrect &&
    adaptiveStatisticsCurrentAhaKey
    ? {
      title: trapDomainName(adaptiveStatisticsCurrentAhaKey),
      insight: CLIMBER_AHA_INSIGHTS[adaptiveStatisticsCurrentAhaKey] ?? 'A new statistics lens just joined your climb map.',
    }
    : null
  const lessonLength = Math.min(activeSet.length, 8)
  const roundPlan = useMemo(() => {
    const n = lessonLength
    const roundCount = Math.floor(n / 4)
    const bossIndices = new Set<number>()
    const roundStarts: number[] = []
    if (roundCount > 0) {
      const base = Math.floor(n / roundCount)
      const rem = n % roundCount
      let cursor = 0
      for (let r = 0; r < roundCount; r += 1) {
        roundStarts.push(cursor)
        cursor += base + (r < rem ? 1 : 0)
        bossIndices.add(cursor - 1) // the round's last question is the boss
      }
    }
    return { roundCount, bossIndices, roundStarts }
  }, [lessonLength])
  const stageNumber = roundPlan.roundStarts.reduce((acc, start, i) => (index >= start ? i + 1 : acc), 1)
  const isBossBattle = mode === 'daily' && roundPlan.bossIndices.has(index)
  const isSecretBoss = isBossBattle && progress.streak >= 7
  const bossId = `${selectedTrackInfo.id}-stage-${stageNumber}`
  const bossTitle = bossTitleFor(selectedTrackInfo.title, stageNumber)
  const bossAlreadyWon = bossWins.some((win) => win.id === bossId)
  const showBossIntro = isBossBattle && bossIntroDismissedFor !== question.id
  const successHeadline = useMemo(() => pickSuccessHeadline(question.id, remixSeed), [question.id, remixSeed])
  const questionMedia = question.media ? (Array.isArray(question.media) ? question.media : [question.media]) : []
  const qualityRating = questionQualityRatings[question.id] ?? { goodQuestion: 5, writingIssues: 5 }
  const showQualityControls = showQuestionQualityControls()
  const selectedMisconceptions = answerMisconceptions(question, selectedAnswer)
  const learningSupport = buildLearningSupport(question, selectedAnswer)
  const learnPrimerText = learningSupport.lessonParagraphs[0]
  const showLearnPrimer = selectedTrackInfo.id !== ADAPTIVE_STATISTICS_TRACK_ID &&
    teachBeforeQuestion &&
    mode === 'daily' &&
    index === 0 &&
    !selectedAnswerId &&
    Boolean(learnPrimerText)
  const lessonIntro = question.subTopic ? LESSON_INTROS[question.subTopic] : undefined
  const adaptiveStatisticsStatusLabel = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? adaptiveStatisticsAttemptedCount < ADAPTIVE_STATISTICS_WARMUP_COUNT
      ? selectedAnswerId
        ? 'Level signal saved'
        : 'Finding your level'
      : adaptiveStatisticsLevel ? `Flow: ${adaptiveStatisticsLevel}` : 'Adaptive flow'
    : null
  const adaptiveStatisticsCoach = selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID
    ? adaptiveStatisticsCoachNote({
      attemptedCount: adaptiveStatisticsAttemptedCount,
      accuracy: adaptiveStatisticsAccuracy,
      activeTrapCount: adaptiveStatisticsActiveTrapCount,
      level: adaptiveStatisticsLevel,
    })
    : null
  useEffect(() => {
    setRatingSyncState('idle')
    setRetiredTrapName(null)
  }, [question.id, remixSeed])

  const rateQuestion = useCallback(async (rating: number) => {
    setQuestionQualityRating(question.id, { learnerRating: rating })
    setRatingSyncState('saving')

    if (
      import.meta.env.DEV &&
      typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ) {
      setRatingSyncState('local')
      return
    }

    try {
      const response = await fetch('/api/question-rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          questionId: question.id,
          questionTitle: question.title,
          chapter: question.chapter,
          subTopic: question.subTopic ?? null,
          trackId: selectedTrackInfo.id,
          trackTitle: selectedTrackInfo.title,
          ageGroup: selectedAge,
          mode,
          selectedLesson,
          difficulty: question.difficulty ?? null,
          challengeRating: question.challengeRating ?? null,
          generated: Boolean(question.generated),
          prompt: question.prompt,
          clientId: anonymousRatingClientId(),
        }),
      })

      if (!response.ok) throw new Error(`Rating API returned ${response.status}`)
      const payload = await response.json().catch(() => null) as { stored?: boolean } | null
      setRatingSyncState(payload?.stored === false ? 'local' : 'saved')
    } catch (error) {
      console.warn('[Floe] question rating saved locally only', error)
      setRatingSyncState('failed')
    }
  }, [mode, question, selectedAge, selectedLesson, selectedTrackInfo, setQuestionQualityRating])

  useEffect(() => {
    if (!showBossIntro) return
    const timer = window.setTimeout(() => setBossIntroDismissedFor(question.id), 2600)
    return () => window.clearTimeout(timer)
  }, [showBossIntro, question.id])

  const checkAchievements = useCallback((newCombo: number, solvedCount: number, xp: number) => {
    if (solvedCount === 1) {
      unlockAchievement({ id: 'first-splash', title: 'First Splash!', description: 'You answered your first question correctly.', icon: '🌊' })
    }
    if (newCombo === 3) {
      unlockAchievement({ id: 'hat-trick', title: 'Hat Trick!', description: 'Three correct answers in a row.', icon: '🎩' })
    }
    if (newCombo === 5) {
      unlockAchievement({ id: 'on-fire', title: 'On Fire!', description: 'Five in a row. The reef is impressed.', icon: '🔥' })
    }
    if (newCombo === 10) {
      unlockAchievement({ id: 'unstoppable', title: 'Unstoppable!', description: 'Ten consecutive correct answers.', icon: '⚡' })
    }
    if (xp >= 100) {
      unlockAchievement({ id: 'century', title: 'Century Club', description: 'You earned 100 XP total.', icon: '💯' })
    }
    if (solvedCount >= 16) {
      unlockAchievement({ id: 'daily-clear', title: 'Reef Regular!', description: 'You solved 16 questions. Floe is taking notes.', icon: '🏆' })
    }
  }, [unlockAchievement])

  const submitAnswer = (answer: Answer) => {
    if (selectedAnswerId) return
    setSelectedAnswerId(answer.id)
    setArmedAnswerId(null)

    if (answer.correct) {
      playSuccessSound()
      // Brief haptic tick on a correct answer (Android/Chrome; iOS Safari ignores it).
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') navigator.vibrate(35)
      incrementCombo()
      updateReview(question.id, showHint ? 3 : 5)
      const newCombo = combo + 1
      playComboSound(newCombo)
      playRewardVoiceSound(newCombo >= 3 ? 'combo' : 'success')
      clearMisconception(question.id)
      if (selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID) {
        const currentTrapKeys = questionTrapKeys(question)
        const matchingTrap = misconceptionArtifacts.find((item) => {
          if (item.clearedAt || item.questionId === question.id) return false
          const key = trapKeyFromTempting(item.tempting)
          return Boolean(key && currentTrapKeys.has(key))
        })
        if (matchingTrap) {
          const key = trapKeyFromTempting(matchingTrap.tempting)
          clearMisconception(matchingTrap.questionId)
          setRetiredTrapName(key ? trapNameFromKey(key) : 'Thinking Trap')
        }
      }
      const firstSolve = !progress.solved.includes(question.id)
      const bossBonus = isBossBattle && firstSolve && !bossAlreadyWon ? bossRewardFor(stageNumber, progress.streak) : 0
      const baseXpGain = question.xp + (newCombo >= 5 ? 5 : newCombo >= 3 ? 2 : 0)
      const xpGain = baseXpGain + bossBonus
      setLastXpGain(xpGain)

      const todayKey = new Date().toISOString().slice(0, 10)
      const newXp = progress.xp + xpGain
      const newSolved = firstSolve ? [...progress.solved, question.id] : progress.solved

      setProgress((current) => ({
        ...current,
        readiness: Math.min(100, current.readiness + (question.kind === 'deep' ? 9 : 5)),
        xp: current.xp + baseXpGain,
        energy: Math.min(5, current.energy + 1),
        solved: newSolved,
        lastVisit: todayKey,
        activityLog: {
          ...(current.activityLog || {}),
          [todayKey]: ((current.activityLog || {})[todayKey] || 0) + xpGain
        }
      }))

      const particleCount = newCombo >= 5 ? 120 : question.kind === 'deep' ? 80 : 40
      confetti({ particleCount, spread: 64, origin: { y: 0.7 } })

      checkAchievements(newCombo, newSolved.length, newXp)
      if (bossBonus) {
        recordBossWin({
          id: bossId,
          title: bossTitle,
          trackId: selectedTrackInfo.id,
          stage: stageNumber,
          xpAwarded: bossBonus,
        })
        unlockAchievement({
          id: `boss-${bossId}`,
          title: 'Boss Cleared!',
          description: `${bossTitle} dropped ${bossBonus} bonus XP.`,
          icon: '👾',
        })
      }
    } else {
      playWrongSound()
      resetCombo()
      updateReview(question.id, 1)
      const firstMisconception = answer.misconceptions?.[0]
      if (firstMisconception) {
        captureMisconception({
          id: `${question.id}-${answer.id}`,
          questionId: question.id,
          questionTitle: question.title,
          chapter: question.chapter,
          answerLabel: answer.label,
          tempting: firstMisconception.tempting,
          flaw: firstMisconception.flaw,
          reframe: firstMisconception.reframe,
        })
      }
      setProgress((current) => ({
        ...current,
        energy: Math.max(0, current.energy - 1),
      }))
    }
  }

  const choose = (answer: Answer) => {
    if (selectedAnswerId) {
      if (selectedAnswerId === answer.id) nextQuestion()
      return
    }
    if (armedAnswerId !== answer.id) {
      setArmedAnswerId(answer.id)
      return
    }
    submitAnswer(answer)
  }

  const nextQuestion = () => {
    setLastXpGain(null)
    if (selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID) {
      setIndex(0)
      incrementAnswerShuffleSeed()
      setSelectedAnswerId(null)
      setArmedAnswerId(null)
      setShowHint(false)
      setShowLesson(false)
      return
    }

    const nextIndex = index + 1
    const lessonComplete = nextIndex >= lessonLength

    if (isCorrect && mode === 'daily' && lessonComplete) {
      // Lesson finished (all rounds played) — return to the chapter map. We keep
      // `selectedLesson` pointing at the just-completed lesson so Floe lands on it
      // there, then the lesson path glides Floe along to the next lesson. Rounds
      // inside a lesson still flow back-to-back; this only fires at lesson end.
      setScreen(selectedLesson ? 'chapter' : 'map')
    } else {
      setIndex((c) => (c + 1) % Math.max(1, lessonLength))
    }

    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
  }

  const resetQuestion = () => {
    setRemixSeed(baseQuestion.id, (c) => c + 1)
    setWordingMode(baseQuestion.id, (c) => (c + 1) % 3)
    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
    setLastXpGain(null)
  }

  const askDifferently = () => {
    setWordingMode(baseQuestion.id, (c) => (c + 1) % 3)
    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
    setLastXpGain(null)
  }

  const appendCalculatorToken = (token: string) => {
    setCalculatorInput(`${calculatorInput}${token}`)
  }

  if (!isSelectedCatalogReady) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">Loading quiz bank</p>
              <h2>{selectedTrackInfo.title}</h2>
              <p>Pulling in the question set for this course now.</p>
            </div>
          </article>
        </section>
      </main>
    )
  }

  if (catalogError || activeSet.length === 0) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <div className="catalog-error">
          <h3>Questions failed to load</h3>
          <p>{catalogError ?? `No playable questions found for ${selectedTrackInfo.title}.`}</p>
          <button className="secondary" onClick={() => setScreen('map')}>Back to map</button>
        </div>
      </main>
    )
  }

  return (
    <main className={`app-shell ${isBossBattle ? 'secret-boss-shell' : ''}`}>
      <TopBar title={selectedTrackInfo.title} />

      {catalogError && (
        <div className="catalog-error">
          <h3>Questions failed to load</h3>
          <p>{catalogError}</p>
          <button className="secondary" onClick={() => setScreen('map')}>Back to map</button>
        </div>
      )}

      <AnimatePresence>
        {showBossIntro && (
          <motion.div
            className="boss-cutscene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="boss-cutscene-card"
              initial={{ y: 22, scale: 0.94 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <img src="/assets/welcome/welcome-cuttlefish-explorer.png" alt="" />
              <div>
                <p className="eyebrow">{isSecretBoss ? 'Secret boss encounter' : 'Boss encounter'}</p>
                <h2>{bossTitle}</h2>
                <p>Floe peeks through the kelp, points at a harder question from this course, and the reef darkens for the fight.</p>
              </div>
              <button type="button" onClick={() => setBossIntroDismissedFor(question.id)}>Enter boss</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="trainer">


        <AnimatePresence mode="wait">
          <motion.article
            key={`${mode}-${question.id}`}
            className={`question-card ${isBossBattle ? 'secret-boss-card' : ''}`}
            data-rarity={rarity}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <span className={`rarity-badge rarity-${rarity}`}>{isBossBattle ? (isSecretBoss ? 'Secret Boss' : 'Boss Battle') : rarityLabels[rarity]}</span>
            {' '}
            {adaptiveStatisticsStatusLabel && (
              <span className="adaptive-climber-status">{adaptiveStatisticsStatusLabel}</span>
            )}

            <div className="question-heading">
              <Brain />
              <div>
                <p className="eyebrow">{question.chapter}</p>
                <h2>{question.title}</h2>
              </div>
            </div>

            {showLearnPrimer && lessonIntro && (
              <div className="lesson-intro-card" style={{ marginBottom: '12px', padding: '14px 16px', background: 'rgba(255,255,255,0.5)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.45)' }}>
                <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--ocean-deep)' }}>{lessonIntro.heading}</strong>
                {lessonIntro.paragraphs.map((para, i) => (
                  <p key={i} style={{ margin: i === 0 ? 0 : '8px 0 0', fontSize: '13.5px', lineHeight: 1.5 }}>{para}</p>
                ))}
              </div>
            )}

            {showLearnPrimer && (
              <div className="learn-primer">
                <div>
                  <span>Before you dive</span>
                  <strong>{question.title}</strong>
                  <p>{learnPrimerText}</p>
                </div>
                <button type="button" onClick={() => setShowLesson(true)}>
                  <BookOpen size={15} /> Deep dive
                </button>
              </div>
            )}

            {adaptiveStatisticsCoach && (
              <div className="climber-coach-note">
                <Sparkles size={17} />
                <div>
                  <span>Climber coach</span>
                  <strong>{adaptiveStatisticsCoach.title}</strong>
                  <p>{adaptiveStatisticsCoach.body}</p>
                </div>
              </div>
            )}

            <div className="prompt-box">
              <BookOpen size={19} />
              <div className="prompt-copy">
                <p className="question-prompt">{question.prompt}</p>
                {question.difficultyTier && (
                  <span className={`difficulty-chip difficulty-${question.difficultyTier}`}>{question.difficultyTier}</span>
                )}
                {questionMedia.length > 0 && (
                  <div className={`question-media-grid question-media-count-${questionMedia.length}`}>
                    {questionMedia.map((item) => (
                      <figure className="question-media" key={`${item.label ?? item.alt}-${item.src.slice(0, 36)}`}>
                        {item.label && <strong>{item.label}</strong>}
                        <img src={item.src} alt={item.alt} />
                        {item.caption && <figcaption>{item.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>


            <div className="answers">
              {visibleAnswers.map((answer) => (
                <button
                  key={answer.id}
                  className={[
                    'answer',
                    armedAnswerId === answer.id ? 'armed' : '',
                    selectedAnswerId === answer.id ? 'selected' : '',
                    selectedAnswerId && answer.correct ? 'correct' : '',
                    selectedAnswerId === answer.id && !answer.correct ? 'wrong' : '',
                  ].join(' ')}
                  onClick={() => choose(answer)}
                >
                  <span className="answer-label" title={answer.label}>{answer.label}</span>
                  {armedAnswerId === answer.id && !selectedAnswerId && <span className="commit-hint">Tap again</span>}
                  {selectedAnswerId && answer.correct && <CheckCircle2 size={17} />}
                  {selectedAnswerId === answer.id && !answer.correct && <XCircle size={17} />}
                  {selectedAnswerId === answer.id && <span className="next-hint">Next →</span>}
                </button>
              ))}
            </div>

            <div className="actions-toolbar">
              <div className="actions-toolbar-row">
                <button className={`secondary pastel-1${attentionTool === 'ask' ? ' attention-flash' : ''}`} onClick={askDifferently}><ShieldQuestion size={15} /> Ask differently</button>
                <button className={`secondary pastel-2${attentionTool === 'hint' ? ' attention-flash' : ''}`} onClick={() => setShowHint(!showHint)}><Sparkles size={15} /> Hint</button>
                <button className={`secondary pastel-3${attentionTool === 'teach' ? ' attention-flash' : ''}`} onClick={() => setShowLesson(!showLesson)}><BookOpen size={15} /> Teach me</button>
              </div>
              <div className="actions-toolbar-row">
                <button className={`secondary pastel-4${showCalculator ? ' active' : ''}`} onClick={() => setShowCalculator(v => !v)}><Calculator size={15} /> Calculator</button>
                <button className={`secondary pastel-5${showThoughts ? ' active' : ''}`} onClick={() => setShowThoughts(v => !v)}><Brain size={15} /> Note pad</button>
                <button className="secondary pastel-6" onClick={resetQuestion}><Repeat2 size={15} /> Reset Q</button>
              </div>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div className="hint" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <div className="hint-speaker">
                    <SpeakerPortrait role="thinker" />
                    <div>
                      <strong>Sensei Cuttle says:</strong>
                      <p>{learningSupport.hint}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showLesson && (
                <motion.div className="lesson-box" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <div className="lesson-content">
                    <div className="lesson-header">
                      <BookOpen size={18} />
                      <h3>Deep Dive Lesson</h3>
                    </div>
                    <div className="lesson-text">
                      {learningSupport.lessonParagraphs.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <button className="close-lesson" onClick={() => setShowLesson(false)}>Got it</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showCalculator && (
                <motion.div className="tool-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <input
                    id="calc-input"
                    value={calculatorInput}
                    onChange={(e) => setCalculatorInput(e.target.value)}
                    placeholder="9 / (9 + 99)^2"
                    inputMode="decimal"
                  />
                  <div className="calculator-keypad" aria-label="Calculator shortcuts">
                    {[
                      { label: 'x', token: '×' },
                      { label: '+', token: '+' },
                      { label: '-', token: '-' },
                      { label: '^', token: '^' },
                      { label: '(', token: '(' },
                      { label: ')', token: ')' },
                    ].map((key) => (
                      <button
                        key={key.label}
                        className="calculator-key"
                        onClick={() => appendCalculatorToken(key.token)}
                        type="button"
                      >
                        {key.label}
                      </button>
                    ))}
                  </div>
                  <output>{calculatorResult || 'Result appears here'}</output>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThoughts && (
                <motion.div className="tool-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <textarea id="thoughts-input" value={thoughts[thoughtKey] ?? ''} onChange={(e) => setThought(thoughtKey, e.target.value)} placeholder="Write your scratch reasoning here..." rows={3} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="actions-primary">
              <button className="primary" disabled={!selectedAnswerId} onClick={nextQuestion}>
                Next question
              </button>
            </div>

            <div className="question-rating" aria-label="Rate this question">
              <div>
                <strong>Rate this question</strong>
                <span>
                  {typeof qualityRating.learnerRating === 'number'
                    ? `${qualityRating.learnerRating}/5`
                    : 'Tap a star'}
                </span>
              </div>
              <div className="question-rating-stars" role="radiogroup" aria-label="Question rating">
                {[1, 2, 3, 4, 5].map((rating) => {
                  const active = typeof qualityRating.learnerRating === 'number' && rating <= qualityRating.learnerRating
                  return (
                    <button
                      key={rating}
                      type="button"
                      className={active ? 'active' : ''}
                      onClick={() => rateQuestion(rating)}
                      role="radio"
                      aria-checked={qualityRating.learnerRating === rating}
                      aria-label={`${rating} star${rating === 1 ? '' : 's'}`}
                    >
                      <Star size={19} fill={active ? 'currentColor' : 'none'} />
                    </button>
                  )
                })}
              </div>
              <small>
                {ratingSyncState === 'saving'
                  ? 'Saving...'
                  : ratingSyncState === 'saved'
                    ? 'Saved'
                    : ratingSyncState === 'local'
                      ? 'Saved on this device'
                      : ratingSyncState === 'failed'
                        ? 'Saved here; internet sync failed'
                        : 'Anonymous feedback helps Floe improve'}
              </small>
            </div>

            <AnimatePresence>
              {selectedAnswer && (
                <motion.div className={`feedback ${isCorrect ? 'good' : 'bad'}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="feedback-title">
                    <div>
                      {isCorrect ? <Trophy size={18} /> : <ShieldQuestion size={18} />}
                      <h3>{isCorrect ? successHeadline : 'Not quite — the logic leaks ink.'}</h3>
                    </div>
                  </div>

                  {adaptiveStatisticsAhaMoment && (
                    <motion.div
                      className="climber-aha-lit"
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.04, type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <div>
                        <span>Aha lit</span>
                        <strong>{adaptiveStatisticsAhaMoment.title}</strong>
                      </div>
                      <p>{adaptiveStatisticsAhaMoment.insight}</p>
                      <small>Saved to your Aha Library. Floe will build from this ledge.</small>
                    </motion.div>
                  )}

                  {isCorrect && !focusMode && <XpPopup xp={lastXpGain} onDone={() => setLastXpGain(null)} />}

                  {!isCorrect && selectedMisconceptions.length > 0 && (
                    <motion.div className="misconceptions" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                      <div className="museum-capture">
                        <span>{selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID ? 'Caught trap' : 'Captured for review'}</span>
                        <strong>{selectedTrackInfo.id === ADAPTIVE_STATISTICS_TRACK_ID ? 'You caught a pattern in your thinking.' : 'This misconception is now on your shelf.'}</strong>
                        <small>
                          You chose {selectedAnswer.label}. Correct path: {question.answers.find((answer) => answer.correct)?.label ?? 'the best-matching answer'}.
                        </small>
                      </div>
                      {selectedMisconceptions.map((item, i) => (
                        <div key={i} className="misconception">
                          <p><strong>Why this was tempting:</strong> {item.tempting}</p>
                          <p><strong>Where it breaks:</strong> {item.flaw}</p>
                          <p><strong>Better move:</strong> {item.reframe}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {isCorrect && activeMuseumItem && (
                    <motion.div className="museum-capture cleared" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                      <span>Museum cleared</span>
                      <strong>You retired a misconception from the shelf.</strong>
                    </motion.div>
                  )}

                  {isCorrect && retiredTrapName && (
                    <motion.div className="museum-capture cleared climber-trap-retired" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                      <span>Lens sharpened</span>
                      <strong>{retiredTrapName} retired.</strong>
                      <small>You met the same idea in a new costume and saw through it.</small>
                    </motion.div>
                  )}

                  <p className="solution"><strong>Worked solution:</strong> {learningSupport.workedSolution}</p>

                  {!isCorrect && (
                    <div className="wrong-feedback-box">
                      <label htmlFor="wrong-fb">Penny for your thoughts</label>
                      <p>Tell us what you&apos;re thinking and we&apos;ll improve.</p>
                      <textarea id="wrong-fb" value={wrongAnswerFeedback[thoughtKey] ?? ''} onChange={(e) => setWrongAnswerFeedback(thoughtKey, e.target.value)} placeholder="What felt unclear or annoying?" rows={2} />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        </AnimatePresence>
      </section>

      {showQualityControls && (
        <div className="admin-flags" style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', display: 'grid', gap: '14px' }}>
          <div style={{ display: 'grid', gap: '10px' }}>
            <label style={{ display: 'grid', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)' }}>
              <span>Good question</span>
              <input
                type="range"
                min="1"
                max="5"
                value={qualityRating.goodQuestion}
                onChange={(event) => setQuestionQualityRating(question.id, { goodQuestion: Number(event.target.value) })}
              />
              <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, opacity: 0.7 }}>
                <span>Bad</span>
                <span>Good</span>
              </span>
            </label>

            <label style={{ display: 'grid', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)' }}>
              <span>Writing issues</span>
              <input
                type="range"
                min="1"
                max="5"
                value={qualityRating.writingIssues}
                onChange={(event) => setQuestionQualityRating(question.id, { writingIssues: Number(event.target.value) })}
              />
              <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, opacity: 0.7 }}>
                <span>Bad</span>
                <span>Good</span>
              </span>
            </label>
          </div>

          <div style={{ minHeight: '21px' }} aria-hidden="true" />
        </div>
      )}

      <button className="back-btn" onClick={goBackFromTrainer} type="button">
        <ArrowLeft size={16} /> Back to map
      </button>
    </main>
  )
}
