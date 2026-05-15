import { useCallback, useEffect, useMemo, useState } from 'react'
import { Flame, Star, User, ArrowLeft, Trophy, Gamepad2, Gift, Sliders, Coins, Swords, Type, Grid2x2, Grid3x3, Link2, Box, Waves, Hash, Sigma, Minus, Square, Calculator, Hexagon } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { getFilteredTracks, getPersonalizedTracks, allTracks } from '../../lib/trackData'
import { loadQuestionCatalog, questionCatalogKeyForTrack } from '../../data/questionCatalog'
import type { QuestionCatalog } from '../../data/questionCatalog'
import { countPlayableQuestions, normalizeQuestionCatalog } from '../../lib/quizRuntime'
import { courseTopics, inferTrackTopicIds, topicLabelForId } from '../../lib/coursePersonalization'
import { inferCourseDepthCategory, type CourseDepthCategory } from '../../lib/courseDepthCategory'
import type { AdultFocusOption } from '../../store/useStore'

type LibraryMode = 'courses' | 'games'
type GameCategory = 'Top' | 'Mystery' | 'Word' | 'Math' | 'Arcade'

interface Props {
  mode?: LibraryMode
}

type GameId = 'pong' | 'invaders' | 'present' | 'slots' | 'fight' | 'wordle' | 'quordle' | 'octordle' | 'connections' | 'letterboxed' | 'waffle' | 'g2048' | 'g2248' | 'nerdle' | 'sumplete' | 'sudoku' | 'kakuro' | 'rikudo'

const STANDALONE_GAMES: Array<{
  id: GameId
  title: string
  subtitle: string
  screen: GameId
  icon: GameId
  accent: string
  categories: GameCategory[]
}> = [
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
    id: 'slots',
    title: 'Fossil Slots',
    subtitle: 'Pull the lever. Name the bone.',
    screen: 'slots',
    icon: 'slots',
    accent: '#fbbf24',
    categories: ['Mystery'],
  },
  {
    id: 'fight',
    title: 'Mr T Throwdown',
    subtitle: 'Floe brawls a tougher Floe. Pity the fool.',
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

const GAME_CATEGORIES: GameCategory[] = ['Top', 'Mystery', 'Word', 'Math', 'Arcade']

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
  'Maths': '#3b82f6',
  'Mathematics': '#3b82f6',
  'Science': '#10b981',
  'English': '#f59e0b',
  'History': '#d97706',
  'Geography': '#14b8a6',
  'Philosophy': '#8b5cf6',
  'Finance': '#059669',
  'Business/Finance': '#059669',
  'Technology': '#6366f1',
  'Space': '#6d28d9',
  'Core Curriculum': '#4b7c6f',
  'Fun Discovery': '#d97706',
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

  /** 30+ (career) learners with hub topics: streamlined tabs + depth row (Fundamentals / Qualifications / Interview). */
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

  // Filter helper: split tracks by their kind (guess-style = games, otherwise courses)
  const filterByKind = useCallback((tracks: ReturnType<typeof getFilteredTracks>) =>
    tracks.filter((track) => {
      const isGame = track.id.startsWith('guess')
      return mode === 'games' ? isGame : !isGame
    }), [mode])

  const finalDisciplines = useMemo(() => {
    const ageFilteredTracks = filterByKind(getFilteredTracks(selectedAge, selectedStageDetail, 'All'))
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
  }, [filterByKind, mode, professionalCourseNav, selectedAge, selectedStageDetail, selectedInterests])

  const visibleTracks = useMemo(() => {
    const applyKind = (tracks: ReturnType<typeof getFilteredTracks>) => filterByKind(tracks)

    if (mode === 'games') {
      if (selectedDiscipline === 'All') {
        return applyKind(getFilteredTracks(selectedAge, selectedStageDetail, 'All'))
      }
      const topic = courseTopics.find((item) => item.label === selectedDiscipline)
      if (topic) return applyKind(getPersonalizedTracks(selectedAge, selectedStageDetail, [topic.id]))
      return applyKind(getFilteredTracks(selectedAge, selectedStageDetail, selectedDiscipline))
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

    // For "All" inside Courses mode: only show tracks that match the user's selected interests
    if (selectedDiscipline === 'All') {
      if (selectedInterests.length > 0) {
        return applyKind(getPersonalizedTracks(selectedAge, selectedStageDetail, selectedInterests))
      }
      return applyKind(getFilteredTracks(selectedAge, selectedStageDetail, 'All'))
    }

    const topic = courseTopics.find((item) => item.label === selectedDiscipline)
    if (topic) return applyKind(getPersonalizedTracks(selectedAge, selectedStageDetail, [topic.id]))

    return applyKind(getFilteredTracks(selectedAge, selectedStageDetail, selectedDiscipline))
  }, [bossWins, filterByKind, mode, progress.workedTrackIds, selectedAge, selectedDiscipline, selectedInterests, selectedStageDetail])

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
        const playableQuestionCount = loadedCatalog?.[track.id]
          ? countPlayableQuestions(loadedCatalog[track.id])
          : track.questionCount

        if (loadedCatalog && catalogKey && playableQuestionCount === 0) return null

        return {
          ...track,
          questionCount: playableQuestionCount,
        }
      })
      .filter((track): track is NonNullable<typeof track> => track !== null)
  ), [loadedQuestionCatalogs, visibleTracks])

  const displayTracks = useMemo(() => {
    if (!showCourseTierRow) return visibleTracksWithCounts
    return visibleTracksWithCounts.filter((t) => inferCourseDepthCategory(t) === courseTier)
  }, [visibleTracksWithCounts, showCourseTierRow, courseTier])

  const displayStandaloneGames = useMemo(
    () => STANDALONE_GAMES.filter((game) => game.categories.includes(gameCategory)),
    [gameCategory],
  )

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
    <main className={`menu-shell ${mounted ? 'mounted' : ''}`}>
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
              ? 'Quick guesses, arcade challenges, brain breaks.'
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
                ? 'What kind of distraction?'
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
                ? displayStandaloneGames.length
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
              const Icon = game.icon === 'present' ? Gift
                : game.icon === 'slots' ? Coins
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
                    setScreen(game.screen)
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
            {displayTracks.map((track) => (
              <button
                key={`browse-${track.id}`}
                className={`track-card compact ${track.status === 'soon' ? 'locked' : ''}`}
                style={{ '--track': disciplineColors[track.discipline] || '#4b7c6f' } as React.CSSProperties}
                onClick={() => {
                  if (track.status === 'playable') {
                    // Track that this course has been worked on
                    if (!progress.workedTrackIds?.includes(track.id)) {
                      setProgress((prev) => ({
                        ...prev,
                        workedTrackIds: [...(prev.workedTrackIds || []), track.id],
                      }))
                    }
                    setSelectedTrack(track.id)
                    setIndex(0)
                    setSelectedAnswerId(null)
                    setShowHint(false)
                    setScreen('map')
                  }
                }}
              >
                <span className="track-icon">{track.icon}</span>
                <span className="track-status">{track.discipline}</span>
                <strong>{track.title}</strong>
                <span>{track.subtitle}</span>
                <div className="track-meta">
                  <span className="skill-tags">
                    {inferTrackTopicIds(track).slice(0, 2).map((topicId) => (
                      <small key={`${track.id}-${topicId}`} className="topic-tag">{topicLabelForId(topicId)}</small>
                    ))}
                    {track.skills.map((skill) => (
                      <small key={`${track.id}-${skill}`}>{skill}</small>
                    ))}
                  </span>
                  {track.questionCount && (
                    <span className="q-count-badge">
                      <Star size={10} /> {track.questionCount} questions
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

        {mode === 'courses' && (
          <div className="track-suggestion-v2">
            <div className="suggestion-content">
              <p className="eyebrow">Missing something?</p>
              <p>Don&apos;t see a course you want? Suggest it!</p>
            </div>
            <textarea
              className="track-suggestion-box"
              placeholder="Suggest a course, topic, or strange new obsession..."
              aria-label="Suggest a new course"
              rows={3}
            />
          </div>
        )}
      </section>

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back to hub
      </button>
    </main>
  )
}
