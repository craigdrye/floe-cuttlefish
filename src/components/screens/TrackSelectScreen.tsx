import { useCallback, useEffect, useMemo, useState } from 'react'
import { Flame, Star, User, ArrowLeft, Trophy, Gamepad2, Gift, Sliders, Swords, Type, Grid2x2, Grid3x3, Link2, Box, Waves, Hash, Sigma, Minus, Square, Calculator, Hexagon, Brain, Sparkles, Heart } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { getFilteredTracks, getPersonalizedTracks, allTracks } from '../../lib/trackData'
import { loadQuestionCatalog, questionCatalogKeyForTrack } from '../../data/questionCatalog'
import type { QuestionCatalog } from '../../data/questionCatalog'
import { countPlayableQuestions, normalizeQuestionCatalog } from '../../lib/quizRuntime'
import { courseTopics, inferTrackTopicIds, topicLabelForId } from '../../lib/coursePersonalization'
import { inferCourseDepthCategory, type CourseDepthCategory } from '../../lib/courseDepthCategory'
import type { AdultFocusOption } from '../../store/useStore'

type LibraryMode = 'courses' | 'games'
type GameCategory = 'Top' | 'Guess' | 'Mystery' | 'Word' | 'Math' | 'Arcade'

interface Props {
  mode?: LibraryMode
}

type GameId = 'pong' | 'invaders' | 'present' | 'fight' | 'wordle' | 'quordle' | 'octordle' | 'connections' | 'letterboxed' | 'waffle' | 'g2048' | 'g2248' | 'nerdle' | 'sumplete' | 'sudoku' | 'kakuro' | 'rikudo'
const SELF_DISCOVERY_TRACK_IDS = new Set(['iqTest', 'bigFivePersonality', 'mbtiPersonality', 'personalityTests', 'iqReasoningTests'])

const STANDALONE_GAMES: Array<{
  id: string
  title: string
  subtitle: string
  screen?: GameId
  /** When set, launching this tile opens a track screen (IQ/personality) via setSelectedTrack instead of a game screen. */
  trackLaunch?: string
  icon: string
  accent: string
  categories: GameCategory[]
}> = [
  {
    id: 'iqTest',
    title: 'IQ Test',
    subtitle: 'Logic, math, verbal, and pattern puzzles. Estimates your IQ at the end.',
    trackLaunch: 'iqTest',
    icon: 'iq',
    accent: '#7c3aed',
    categories: ['Top'],
  },
  {
    id: 'bigFivePersonality',
    title: 'Big Five (OCEAN)',
    subtitle: 'A 50-question profile across the five core personality traits.',
    trackLaunch: 'bigFivePersonality',
    icon: 'persona',
    accent: '#7a5cb4',
    categories: ['Top'],
  },
  {
    id: 'mbtiPersonality',
    title: 'Myers–Briggs (MBTI)',
    subtitle: 'A 50-question test that places you into one of 16 personality types.',
    trackLaunch: 'mbtiPersonality',
    icon: 'mbti',
    accent: '#b45c8e',
    categories: ['Top'],
  },
  {
    id: 'pong',
    title: 'Reef Pong',
    subtitle: 'Old-school arcade. Reflexes meet rhythm.',
    screen: 'pong',
    icon: 'pong',
    accent: '#38bdf8',
    categories: ['Arcade'],
  },
  {
    id: 'invaders',
    title: 'Plankton Invaders',
    subtitle: 'Hold the line. Dodge, fire, repeat.',
    screen: 'invaders',
    icon: 'invaders',
    accent: '#a78bfa',
    categories: ['Top', 'Arcade'],
  },
  {
    id: 'present',
    title: 'Mystery Gift',
    subtitle: 'Unwrap a tiny trivia surprise.',
    screen: 'present',
    icon: 'present',
    accent: '#f472b6',
    categories: ['Top', 'Mystery'],
  },
  {
    id: 'fight',
    title: 'Reef Throwdown',
    subtitle: 'Floe brawls the Reef Boss. Dodge dots, land hits.',
    screen: 'fight',
    icon: 'fight',
    accent: '#f43f5e',
    categories: ['Arcade'],
  },
  {
    id: 'wordle',
    title: 'Floedle',
    subtitle: 'Six tries. One five-letter word.',
    screen: 'wordle',
    icon: 'wordle',
    accent: '#2ec4b6',
    categories: ['Top', 'Word'],
  },
  {
    id: 'quordle',
    title: 'Quordle',
    subtitle: 'Four words at once. Nine guesses.',
    screen: 'quordle',
    icon: 'quordle',
    accent: '#0ea5e9',
    categories: ['Word'],
  },
  {
    id: 'octordle',
    title: 'Octordle',
    subtitle: 'Eight words at once. Pure chaos.',
    screen: 'octordle',
    icon: 'octordle',
    accent: '#a855f7',
    categories: ['Word'],
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Find four groups of four. Four mistakes allowed.',
    screen: 'connections',
    icon: 'connections',
    accent: '#f97316',
    categories: ['Top', 'Mystery'],
  },
  {
    id: 'letterboxed',
    title: 'Letterboxed',
    subtitle: 'Chain words across four sides. Use every letter.',
    screen: 'letterboxed',
    icon: 'letterboxed',
    accent: '#06b6d4',
    categories: ['Word'],
  },
  {
    id: 'waffle',
    title: 'Waffle',
    subtitle: 'Swap tiles to restore six crossing words.',
    screen: 'waffle',
    icon: 'waffle',
    accent: '#eab308',
    categories: ['Word'],
  },
  {
    id: 'g2048',
    title: '2048',
    subtitle: 'Slide and combine tiles to reach 2048.',
    screen: 'g2048',
    icon: 'g2048',
    accent: '#edc22e',
    categories: ['Math'],
  },
  {
    id: 'g2248',
    title: '2248',
    subtitle: 'Chain same-value tiles, then merge.',
    screen: 'g2248',
    icon: 'g2248',
    accent: '#f59e0b',
    categories: ['Math'],
  },
  {
    id: 'nerdle',
    title: 'Nerdle',
    subtitle: 'Guess the hidden equation in six tries.',
    screen: 'nerdle',
    icon: 'nerdle',
    accent: '#6aaa64',
    categories: ['Top', 'Math'],
  },
  {
    id: 'sumplete',
    title: 'Sumplete',
    subtitle: 'Cross out numbers to hit every target.',
    screen: 'sumplete',
    icon: 'sumplete',
    accent: '#3b82f6',
    categories: ['Math'],
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    subtitle: 'Fill the 9×9 grid with 1–9, no repeats.',
    screen: 'sudoku',
    icon: 'sudoku',
    accent: '#0ea5e9',
    categories: ['Math'],
  },
  {
    id: 'kakuro',
    title: 'Kakuro',
    subtitle: 'Crossword puzzle but with sums of digits.',
    screen: 'kakuro',
    icon: 'kakuro',
    accent: '#8b5cf6',
    categories: ['Math'],
  },
  {
    id: 'rikudo',
    title: 'Rikudo',
    subtitle: 'Trace 1 to N through a hex grid.',
    screen: 'rikudo',
    icon: 'rikudo',
    accent: '#ec4899',
    categories: ['Math'],
  },
]

const GAME_CATEGORIES: GameCategory[] = ['Top', 'Guess', 'Mystery', 'Word', 'Math', 'Arcade']

const TOP_GUESS_TRACK_IDS = new Set([
  'guessTheThing',
  'guessTheScatMaster',
  'guessTheTravelBug',
  'guessTheAnatomy',
  'guessTheEcologist',
  'guessThePlants',
  'guessTheMeme',
])

function isGuessTrack(track: { id: string }) {
  return track.id.startsWith('guess')
}

function guessShelfTitle(title: string) {
  return title
    .replace(/^Guess the Thing:\s*/i, '')
    .replace(/^Guess the Thing$/i, 'Mixed Mystery Box')
    .replace(/^Guess the\s+/i, '')
}

function guessShelfSubtitle(track: { title: string; questionCount?: number }) {
  const count = track.questionCount ? `${track.questionCount} quick reveals` : 'Quick reveals'
  return `${count}. Open one picture, make the call, then unwrap another.`
}

function courseTierFromAdultFocus(focus: AdultFocusOption[]): CourseDepthCategory {
  if (focus.includes('Interview Prep')) return 'interview'
  if (focus.includes('Technical Qualifications')) return 'qualifications'
  return 'fundamentals'
}

const heroCharacters = [
  '/assets/cuttlefish/cuttlefish-color-flow-01.png',
  '/assets/cuttlefish/cuttlefish-color-flow-02.png',
  '/assets/cuttlefish/cuttlefish-color-flow-03.png',
  '/assets/cuttlefish/cuttlefish-color-flow-04.png',
  '/assets/cuttlefish/cuttlefish-color-flow-05.png',
  '/assets/cuttlefish/cuttlefish-color-flow-06.png',
  '/assets/cuttlefish/cuttlefish-color-flow-07.png',
  '/assets/cuttlefish/cuttlefish-color-flow-08.png',
]



const disciplineCharacters: Record<string, string> = {
  'Maths': '/assets/fun_characters_transparent/einstein.png',
  'Science': '/assets/fun_characters_transparent/science.png',
  'English': '/assets/fun_characters_transparent/scholar.png',
  'History': '/assets/fun_characters_transparent/history.png',
  'Geography': '/assets/fun_characters_transparent/explorer.png',
  'Philosophy': '/assets/fun_characters_transparent/philosophy.png',
  'Finance': '/assets/fun_characters_transparent/finance.png',
  'Business/Finance': '/assets/fun_characters_transparent/finance.png',
  'Technology': '/assets/fun_characters_transparent/mechanic.png',
  'Space': '/assets/fun_characters_transparent/space.png',
  'Astronomy': '/assets/fun_characters_transparent/astronomy.png',
}

const disciplineColors: Record<string, string> = {
  'Academics': '#64748b',
  'Architecture': '#b45309',
  'Arts': '#c026d3',
  'Arts/Humanities': '#a855f7',
  'Arts/Maths': '#7c3aed',
  'Arts/Music': '#db2777',
  'Astronomy': '#7c3aed',
  'Business': '#6366f1',
  'Business/Finance': '#2563eb',
  'Career': '#475569',
  'Climate Science': '#0d9488',
  'College Foundations': '#64748b',
  'College Prep': '#64748b',
  'Commercial': '#0284c7',
  'Communication': '#be185d',
  'Compliance': '#0891b2',
  'Computing': '#4f46e5',
  'Computing/Arts': '#7c3aed',
  'Maths': '#3b82f6',
  'Mathematics': '#3b82f6',
  'Mathematics / Data Literacy': '#2563eb',
  'Science': '#10b981',
  'Science & Art': '#0ea5e9',
  'Science/Culture': '#0891b2',
  'Science/Food': '#0d9488',
  'Science/Humanities': '#0f766e',
  'English': '#f59e0b',
  'Economics': '#2563eb',
  'Economics/Business': '#4f46e5',
  'Energy': '#ca8a04',
  'Engineering': '#64748b',
  'Exam Prep': '#d97706',
  'History': '#d97706',
  'History/Geography': '#0f766e',
  'Geography': '#14b8a6',
  'Philosophy': '#8b5cf6',
  'Humanities': '#a855f7',
  'Humanities / Philosophy': '#8b5cf6',
  'Humanities/Computing': '#7c3aed',
  'Finance': '#059669',
  'Food Skills': '#ea580c',
  'Games': '#f97316',
  'Government': '#475569',
  'Healthcare': '#e11d48',
  'Industrial': '#6b7280',
  'Kids Discovery': '#f59e0b',
  'Kids Discovery (Pre-K - 2nd)': '#f59e0b',
  'Leadership': '#7c3aed',
  'Legal': '#92400e',
  'Life Skills': '#d97706',
  'Literature': '#be123c',
  'Logic': '#6366f1',
  'Logic / Puzzles': '#6366f1',
  'Music': '#db2777',
  'Operations': '#b45309',
  'Practical Skills': '#ea580c',
  'Professional Ethics': '#6d28d9',
  'Public Affairs': '#2563eb',
  'Real Estate': '#0f766e',
  'Research': '#0284c7',
  'Social Science': '#8b5cf6',
  'Sports': '#16a34a',
  'Story': '#be123c',
  'Technology': '#6366f1',
  'Tech & Life': '#0891b2',
  'Transport': '#0284c7',
  'Space': '#6d28d9',
  'Core Curriculum': '#64748b',
  'Creative': '#c026d3',
  'Creative Tech': '#7c3aed',
  'Design': '#db2777',
  'Digital Culture': '#4f46e5',
  'Discovery': '#f59e0b',
  'Fun Discovery': '#f59e0b',
}

function MenuBubbles() {
  const bubbles =
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${10 + ((i * 37) % 80)}%`,
      size: 3 + ((i * 5) % 8),
      delay: `${(i * 1.7) % 10}s`,
      duration: `${10 + ((i * 3) % 14)}s`,
      opacity: 0.08 + ((i * 0.017) % 0.12),
    }))

  return (
    <div className="floating-particles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="particle particle-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  )
}

export function TrackSelectScreen({ mode = 'courses' }: Props = {}) {
  const {
    selectedAge,
    selectedStageDetail,
    selectedDiscipline,
    selectedInterests,
    selectedAdultFocus,
    setSelectedAge,
    setSelectedStageDetail,
    setSelectedDiscipline,
    setSelectedTrack,
    setIndex,
    setSelectedAnswerId,
    setShowHint,
    setScreen,
    progress,
    maxCombo,
    user,
    setShowProfile,
    bossWins,
    setProgress,
  } = useStore()

  const [mounted, setMounted] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const [loadedQuestionCatalogs, setLoadedQuestionCatalogs] = useState<Record<string, QuestionCatalog>>({})
  const defaultCourseTier = useMemo(() => courseTierFromAdultFocus(selectedAdultFocus), [selectedAdultFocus])
  const [courseTier, setCourseTier] = useState<CourseDepthCategory>(() => defaultCourseTier)
  const [gameCategory, setGameCategory] = useState<GameCategory>('Top')

  /** 23+ (career) learners with hub topics: streamlined tabs + depth row (Fundamentals / Qualifications / Interview). */
  const professionalCourseNav =
    mode === 'courses' && selectedAge === 'career' && selectedInterests.length > 0

  const showCourseTierRow =
    professionalCourseNav && selectedDiscipline !== 'Your courses'

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    if (selectedAge !== 'preschool') return
    setSelectedAge('primary')
    setSelectedStageDetail('primary-year-1')
  }, [selectedAge, setSelectedAge, setSelectedStageDetail])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroCharacters.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const goBack = () => {
    setScreen('hub')
  }

  const openInterestsEdit = () => {
    setScreen('hub')
  }

  const guessTracks = useMemo(() => allTracks.filter(isGuessTrack), [])

  // Filter helper: split tracks by their kind (guess-style = games, otherwise courses)
  const filterByKind = useCallback((tracks: ReturnType<typeof getFilteredTracks>) =>
    tracks.filter((track) => {
      const isGame = isGuessTrack(track)
      return mode === 'games' ? isGame : !isGame
    }), [mode])

  const finalDisciplines = useMemo(() => {
    const ageFilteredTracks = mode === 'games'
      ? guessTracks
      : filterByKind(getFilteredTracks(selectedAge, selectedStageDetail, 'All'))
    const availableTopicIds = new Set(ageFilteredTracks.flatMap((track) => inferTrackTopicIds(track)))

    if (mode === 'games') {
      // Games library: show all + topic chips, no "For you" / "Your courses" personalization
      return [
        'All',
        ...courseTopics
          .filter((topic) => availableTopicIds.has(topic.id))
          .map((topic) => topic.label),
      ]
    }

    // Courses library: restrict topic chips to the user's chosen interests
    const interestSet = new Set(selectedInterests)
    const restrictedTopics = selectedInterests.length > 0
      ? courseTopics.filter((topic) => interestSet.has(topic.id) && availableTopicIds.has(topic.id))
      : courseTopics.filter((topic) => availableTopicIds.has(topic.id))

    if (professionalCourseNav) {
      return ['Your courses', ...restrictedTopics.map((topic) => topic.label), 'All']
    }

    return [
      'For you',
      'Your courses',
      'All',
      ...restrictedTopics.map((topic) => topic.label),
    ]
  }, [filterByKind, guessTracks, mode, professionalCourseNav, selectedAge, selectedStageDetail, selectedInterests])

  const visibleTracks = useMemo(() => {
    const applyKind = (tracks: ReturnType<typeof getFilteredTracks>) => filterByKind(tracks)

    if (mode === 'games') {
      if (selectedDiscipline === 'All') {
        return guessTracks
      }
      const topic = courseTopics.find((item) => item.label === selectedDiscipline)
      if (topic) return guessTracks.filter((track) => inferTrackTopicIds(track).includes(topic.id))
      return guessTracks.filter((track) => track.discipline === selectedDiscipline)
    }

    if (selectedDiscipline === 'For you') {
      const interests = selectedInterests.length > 0
        ? applyKind(getPersonalizedTracks(selectedAge, selectedStageDetail, selectedInterests))
        : applyKind(getFilteredTracks(selectedAge, selectedStageDetail, 'All'))
      return interests
    }

    if (selectedDiscipline === 'Your courses') {
      const workedIds = new Set([...(progress.workedTrackIds || []), ...bossWins.map((boss) => boss.trackId)])
      return applyKind(allTracks.filter((track) => workedIds.has(track.id)))
    }

    // For "All" inside Courses mode: only show tracks that match the user's selected interests.
    // Exception: Self-discovery tracks (personality tests) always appear in "All" for the age
    // groups they're seeded for, regardless of interest filter.
    if (selectedDiscipline === 'All') {
      const ageFiltered = getFilteredTracks(selectedAge, selectedStageDetail, 'All')
      const selfDiscovery = ageFiltered.filter((t) => t.discipline === 'Self-discovery')
      if (selectedInterests.length > 0) {
        const personalized = getPersonalizedTracks(selectedAge, selectedStageDetail, selectedInterests)
        const personalizedIds = new Set(personalized.map((t) => t.id))
        const merged = [...personalized, ...selfDiscovery.filter((t) => !personalizedIds.has(t.id))]
        return applyKind(merged)
      }
      return applyKind(ageFiltered)
    }

    const topic = courseTopics.find((item) => item.label === selectedDiscipline)
    if (topic) return applyKind(getPersonalizedTracks(selectedAge, selectedStageDetail, [topic.id]))

    return applyKind(getFilteredTracks(selectedAge, selectedStageDetail, selectedDiscipline))
  }, [bossWins, filterByKind, guessTracks, mode, progress.workedTrackIds, selectedAge, selectedDiscipline, selectedInterests, selectedStageDetail])

  useEffect(() => {
    const neededCatalogKeys = Array.from(
      new Set(
        visibleTracks
          .map((track) => questionCatalogKeyForTrack(track.id, track.ageGroup))
          .filter((catalogKey): catalogKey is string => Boolean(catalogKey)),
      ),
    )

    const missingCatalogKeys = neededCatalogKeys.filter((catalogKey) => !loadedQuestionCatalogs[catalogKey])
    if (missingCatalogKeys.length === 0) return

    let cancelled = false

    Promise.all(
      missingCatalogKeys.map(async (catalogKey) => [
        catalogKey,
        normalizeQuestionCatalog(await loadQuestionCatalog(catalogKey)),
      ] as const),
    ).then((entries) => {
      if (cancelled) return
      setLoadedQuestionCatalogs((current) => {
        const next = { ...current }
        for (const [catalogKey, catalog] of entries) {
          next[catalogKey] = next[catalogKey] ?? catalog
        }
        return next
      })
    })

    return () => {
      cancelled = true
    }
  }, [loadedQuestionCatalogs, visibleTracks])

  const visibleTracksWithCounts = useMemo(() => (
    visibleTracks
      .map((track) => {
        const catalogKey = questionCatalogKeyForTrack(track.id, track.ageGroup)
        const loadedCatalog = catalogKey ? loadedQuestionCatalogs[catalogKey] : null
        const catalogQuestions = loadedCatalog?.[track.id]
        const playableQuestionCount = catalogQuestions
          ? countPlayableQuestions(catalogQuestions)
          : track.questionCount
        const isSelfDiscoveryTrack = SELF_DISCOVERY_TRACK_IDS.has(track.id) || track.discipline === 'Self-discovery'

        if (!isSelfDiscoveryTrack) {
          if (!catalogKey) return null
          if (loadedCatalog && !catalogQuestions) return null
          if ((track.questionCount ?? 0) === 0 && !loadedCatalog) return null
          if (loadedCatalog && playableQuestionCount === 0) return null
        }

        if (loadedCatalog && catalogKey && playableQuestionCount === 0) return null

        return {
          ...track,
          questionCount: playableQuestionCount,
        }
      })
      .filter((track): track is NonNullable<typeof track> => track !== null)
  ), [loadedQuestionCatalogs, visibleTracks])

  const displayTracks = useMemo(() => {
    const tracks = showCourseTierRow
      ? visibleTracksWithCounts.filter((t) => inferCourseDepthCategory(t) === courseTier)
      : visibleTracksWithCounts

    if (mode !== 'games') return tracks
    if (gameCategory === 'Guess') return tracks
    if (gameCategory === 'Top') return tracks.filter((track) => TOP_GUESS_TRACK_IDS.has(track.id))
    return []
  }, [visibleTracksWithCounts, showCourseTierRow, courseTier, mode, gameCategory])

  const displayStandaloneGames = useMemo(
    () => STANDALONE_GAMES.filter((game) => game.categories.includes(gameCategory)),
    [gameCategory],
  )

  const playableGuessTracks = useMemo(
    () => mode === 'games' ? displayTracks.filter((track) => track.status === 'playable') : [],
    [displayTracks, mode],
  )

  const launchGuessTrack = useCallback((trackId: string) => {
    setSelectedTrack(trackId)
    setIndex(0)
    setSelectedAnswerId(null)
    setShowHint(false)
    setScreen('guessGift')
  }, [setIndex, setScreen, setSelectedAnswerId, setSelectedTrack, setShowHint])

  const launchSurpriseGuess = useCallback(() => {
    if (!playableGuessTracks.length) return
    const pick = playableGuessTracks[Math.floor(Math.random() * playableGuessTracks.length)]
    launchGuessTrack(pick.id)
  }, [launchGuessTrack, playableGuessTracks])

  useEffect(() => {
    if (mode === 'games') {
      if (selectedDiscipline !== 'All') {
        setSelectedDiscipline('All')
      }
      return
    }

    const hasWorked = (progress.workedTrackIds?.length || 0) > 0 || bossWins.length > 0
    const firstTopicLabel = finalDisciplines.find(
      (d) => d !== 'Your courses' && d !== 'All' && d !== 'For you',
    )
    const inList = finalDisciplines.includes(selectedDiscipline)

    if (!inList) {
      if (professionalCourseNav) {
        const next = firstTopicLabel ?? 'All'
        setSelectedDiscipline(next)
        if (next !== 'Your courses') {
          queueMicrotask(() => setCourseTier(defaultCourseTier))
        }
      } else {
        setSelectedDiscipline(
          selectedInterests.length > 0 ? 'For you' : hasWorked ? 'Your courses' : finalDisciplines[2] || 'All',
        )
      }
      return
    }

    if (!professionalCourseNav && selectedDiscipline === 'All' && selectedInterests.length > 0) {
      setSelectedDiscipline('For you')
    }

    if (professionalCourseNav && selectedDiscipline === 'For you' && firstTopicLabel) {
      setSelectedDiscipline(firstTopicLabel)
      queueMicrotask(() => setCourseTier(defaultCourseTier))
    }
  }, [
    mode,
    finalDisciplines,
    selectedDiscipline,
    setSelectedDiscipline,
    progress.workedTrackIds,
    bossWins.length,
    selectedInterests.length,
    professionalCourseNav,
    defaultCourseTier,
  ])

  const disciplineChar = selectedDiscipline !== 'All' ? disciplineCharacters[selectedDiscipline] : null

  return (
    <main className={`menu-shell menu-shell-${mode} ${mounted ? 'mounted' : ''}`}>
      <MenuBubbles />

      <nav className="topbar">
        <div className="topbar-left">
          <div className="topbar-logo">
            {heroCharacters.map((src, i) => (
              <img key={src} className={`flow-frame ${i === heroIndex ? 'flow-frame-active' : ''}`} src={src} alt="" />
            ))}
          </div>
          <span className="topbar-brand">{user?.username || 'Floe'}</span>
        </div>
        <div className="topbar-right">
          <span className="stat-chip stat-chip-streak"><Flame size={13} /> <strong>{progress.streak}</strong></span>
          <span className="stat-chip stat-chip-xp"><Star size={13} /> <strong>{progress.xp} XP</strong></span>
          {maxCombo >= 3 && (
            <span className="stat-chip stat-chip-combo"><Trophy size={13} /> <strong>{maxCombo}×</strong></span>
          )}
          <button className="profile-btn" onClick={() => setShowProfile(true)} type="button"><User size={15} /></button>
        </div>
      </nav>

      <section className="menu-hero-v2">
        <div className="menu-hero-text">
          <h1 className="menu-hero-title">
            {mode === 'games' ? 'Games' : 'Courses'}
          </h1>
          <p className="menu-hero-subtitle">
            {mode === 'games'
              ? 'Mystery boxes, arcade challenges, brain breaks.'
              : 'Pick a track and dive in.'}
          </p>
        </div>
      </section>

      <section className="track-select-v2" aria-label={mode === 'games' ? 'Select a game' : 'Select a course'}>
        <div className="track-select-header">
          <div>
            <p className="eyebrow">{mode === 'games' ? 'Pick a game' : 'Choose your track'}</p>
            <h2>
              {mode === 'games'
                ? 'What are we opening?'
                : selectedDiscipline === 'For you' && !professionalCourseNav
                  ? 'Picked from your interests'
                  : 'What are we training for?'}
            </h2>
          </div>
          {mode === 'courses' && (
            <button
              className="change-topics-btn"
              onClick={openInterestsEdit}
              type="button"
              title="Change your topics"
            >
              <Sliders size={14} /> Change topics
            </button>
          )}
          {disciplineChar && mode === 'courses' && (
            <img className="discipline-character" src={disciplineChar} alt={selectedDiscipline} />
          )}
        </div>

        <div className="course-browser-v2">
          <div className="course-browser-top">
            {mode === 'courses' ? (
              <div className="course-browser-tabs-column">
                <div className="discipline-tabs" role="tablist">
                  {finalDisciplines.map((d) => (
                    <button
                      key={d}
                      className={selectedDiscipline === d ? 'active' : ''}
                      onClick={() => {
                        setSelectedDiscipline(d)
                        if (professionalCourseNav && d !== 'Your courses') setCourseTier(defaultCourseTier)
                      }}
                      type="button"
                    >
                      {d}
                    </button>
                  ))}
                </div>
                {showCourseTierRow && (
                  <div className="course-tier-tabs" role="tablist" aria-label="Course focus">
                    {(['fundamentals', 'qualifications', 'interview'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        role="tab"
                        aria-selected={courseTier === tier}
                        className={courseTier === tier ? 'active' : ''}
                        onClick={() => setCourseTier(tier)}
                      >
                        {tier === 'fundamentals' ? 'Fundamentals' : tier === 'qualifications' ? 'Qualifications' : 'Interview prep'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div />
            )}
            <span className="track-count">
              {mode === 'games'
                ? displayStandaloneGames.length + displayTracks.length
                : displayTracks.length}{' '}
              available
            </span>
          </div>

          {mode === 'games' && (
            <div className="game-category-tabs" role="tablist" aria-label="Game category">
              {GAME_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={gameCategory === category}
                  className={gameCategory === category ? 'active' : ''}
                  onClick={() => setGameCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="all-courses-grid">
            {mode === 'games' && selectedDiscipline === 'All' && displayStandaloneGames.map((game) => {
              const Icon = game.icon === 'iq' ? Brain
                : game.icon === 'persona' ? Sparkles
                : game.icon === 'mbti' ? Heart
                : game.icon === 'present' ? Gift
                : game.icon === 'fight' ? Swords
                : game.icon === 'wordle' ? Type
                : game.icon === 'quordle' ? Grid2x2
                : game.icon === 'octordle' ? Grid3x3
                : game.icon === 'connections' ? Link2
                : game.icon === 'letterboxed' ? Box
                : game.icon === 'waffle' ? Waves
                : game.icon === 'g2048' ? Hash
                : game.icon === 'g2248' ? Sigma
                : game.icon === 'nerdle' ? Calculator
                : game.icon === 'sumplete' ? Minus
                : game.icon === 'sudoku' ? Square
                : game.icon === 'kakuro' ? Sigma
                : game.icon === 'rikudo' ? Hexagon
                : Gamepad2
              return (
                <button
                  key={`standalone-${game.id}`}
                  className="track-card compact standalone-game"
                  style={{ '--track': game.accent } as React.CSSProperties}
                  onClick={() => {
                    setIndex(0)
                    setSelectedAnswerId(null)
                    setShowHint(false)
                    if (game.trackLaunch) {
                      // IQ/personality render off selectedTrack (see App.tsx), not a game screen.
                      setSelectedTrack(game.trackLaunch)
                      setScreen('map')
                    } else if (game.screen) {
                      setScreen(game.screen)
                    }
                  }}
                  type="button"
                >
                  <span className="track-icon"><Icon size={28} /></span>
                  <span className="track-status">Mini-game</span>
                  <strong>{game.title}</strong>
                  <span>{game.subtitle}</span>
                </button>
              )
            })}
            {mode === 'games' && playableGuessTracks.length > 1 && (
              <button
                key="guess-surprise"
                className="track-card compact guess-game-card guess-surprise-card"
                style={{ '--track': '#2ec4b6' } as React.CSSProperties}
                onClick={launchSurpriseGuess}
                type="button"
              >
                <span className="track-icon"><Sparkles size={28} /></span>
                <span className="track-status">Mystery box</span>
                <strong>Surprise mystery</strong>
                <span>Let Floe grab a random wrapped clue from the whole shelf.</span>
                <div className="track-meta">
                  <span className="skill-tags">
                    <small>One tap reveal</small>
                    <small>Lucky dip</small>
                  </span>
                  <span className="q-count-badge">
                    <Gift size={10} /> {playableGuessTracks.reduce((sum, track) => sum + (track.questionCount || 0), 0)} mysteries
                  </span>
                </div>
              </button>
            )}
            {displayTracks.map((track) => (
              <button
                key={`browse-${track.id}`}
                className={`track-card compact ${mode === 'games' ? 'guess-game-card' : ''} ${track.status === 'soon' ? 'locked' : ''}`}
                style={{ '--track': disciplineColors[track.discipline] || '#64748b' } as React.CSSProperties}
                onClick={() => {
                  if (track.status === 'playable') {
                    // Guess games are arcade-style one-off loops; course progress should stay with courses.
                    if (mode !== 'games' && !progress.workedTrackIds?.includes(track.id)) {
                      setProgress((prev) => ({
                        ...prev,
                        workedTrackIds: [...(prev.workedTrackIds || []), track.id],
                      }))
                    }
                    if (mode === 'games') {
                      launchGuessTrack(track.id)
                    } else {
                      setSelectedTrack(track.id)
                      setIndex(0)
                      setSelectedAnswerId(null)
                      setShowHint(false)
                      setScreen('map')
                    }
                  }
                }}
                >
                <span className="track-icon">{mode === 'games' ? <Gift size={26} /> : track.icon}</span>
                <span className="track-status">{mode === 'games' ? 'Mystery box' : track.discipline}</span>
                <strong>{mode === 'games' ? guessShelfTitle(track.title) : track.title}</strong>
                <span>{mode === 'games' ? guessShelfSubtitle(track) : track.subtitle}</span>
                <div className="track-meta">
                  <span className="skill-tags">
                    {mode !== 'games' && inferTrackTopicIds(track).slice(0, 2).map((topicId) => (
                      <small key={`${track.id}-${topicId}`} className="topic-tag">{topicLabelForId(topicId)}</small>
                    ))}
                    {mode === 'games' ? (
                      <>
                        <small>Open box</small>
                        <small>Visual clue</small>
                      </>
                    ) : track.skills.map((skill) => (
                      <small key={`${track.id}-${skill}`}>{skill}</small>
                    ))}
                  </span>
                  {track.questionCount && (
                    <span className="q-count-badge">
                      {mode === 'games' ? <Gift size={10} /> : <Star size={10} />} {track.questionCount} {mode === 'games' ? 'mysteries' : 'questions'}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {!displayTracks.length && mode === 'courses' && (
            <div className="no-course-state">
              <img className="no-course-character" src="/assets/fun_characters_transparent/thought.png" alt="" />
              {visibleTracksWithCounts.length > 0 && showCourseTierRow ? (
                <>
                  <p>No courses in this focus yet.</p>
                  <p className="no-course-hint">
                    Try another tab above — Fundamentals, Qualifications, or Interview prep — or switch topic.
                  </p>
                </>
              ) : (
                <>
                  <p>No matching courses for your interests yet.</p>
                  <p className="no-course-hint">Try another topic, or pick more interests.</p>
                  <button className="change-topics-btn" onClick={openInterestsEdit} type="button">
                    <Sliders size={14} /> Change topics
                  </button>
                </>
              )}
            </div>
          )}
          {!visibleTracksWithCounts.length && mode === 'games' && selectedDiscipline !== 'All' && (
            <div className="no-course-state">
              <img className="no-course-character" src="/assets/fun_characters_transparent/thought.png" alt="" />
              <p>No games match that filter yet.</p>
              <p className="no-course-hint">Try another topic.</p>
            </div>
          )}
        </div>


      </section>

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back to hub
      </button>
    </main>
  )
}
