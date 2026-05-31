import { useMemo, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ChevronRight, Lock, Sparkles, Star } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { TopBar } from '../layout/TopBar'

const floeFrames = [
  '/assets/cuttlefish/cuttlefish-color-flow-01.png',
  '/assets/cuttlefish/cuttlefish-color-flow-02.png',
  '/assets/cuttlefish/cuttlefish-color-flow-03.png',
  '/assets/cuttlefish/cuttlefish-color-flow-04.png',
  '/assets/cuttlefish/cuttlefish-color-flow-05.png',
  '/assets/cuttlefish/cuttlefish-color-flow-06.png',
  '/assets/cuttlefish/cuttlefish-color-flow-07.png',
  '/assets/cuttlefish/cuttlefish-color-flow-08.png',
]

// Mirror the course-map thresholds for visual parity.
const LESSON_MASTERY_ACCURACY = 0.8
// Player can unlock the next lesson after answering at least this many of
// the current lesson's questions (regardless of accuracy), matching the
// brief's "80% accuracy OR 8 of 10 answered" rule.
const LESSON_UNLOCK_ANSWERED_MIN = 8

function computeStars(accuracy: number, solved: number): 0 | 1 | 2 | 3 {
  if (solved === 0) return 0
  if (accuracy >= 0.9) return 3
  if (accuracy >= 0.75) return 2
  return 1
}

function difficultyLabel(avg: number): 'Easy' | 'Medium' | 'Hard' {
  if (avg <= 2.5) return 'Easy'
  if (avg <= 3.75) return 'Medium'
  return 'Hard'
}

type LessonStats = {
  id: string
  index: number
  title: string
  totalQuestions: number
  target: number
  solved: number
  attempted: number
  accuracy: number
  stars: 0 | 1 | 2 | 3
  unlocked: boolean
  completed: boolean
  isActive: boolean
  avgDifficulty: number
}

export function ChapterSubMapScreen() {
  const {
    progress, setMode, setIndex, setSelectedAnswerId, setShowHint, setScreen,
    selectedChapter, setSelectedLesson, selectedLesson,
  } = useStore()

  const {
    selectedTrackInfo, isSelectedCatalogReady, chapterLessons, chapterAllQuestions,
  } = useQuizData()

  const [floeFrame, setFloeFrame] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloeFrame((prev) => (prev + 1) % floeFrames.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const lessonStats = useMemo<LessonStats[]>(() => {
    if (chapterLessons.length === 0) return []

    const solvedSet = new Set(progress.solved)
    const reviewIds = new Set(Object.keys(progress.reviews).map((k) => Number(k)))

    const raw = chapterLessons.map((lesson) => {
      let solved = 0
      let attempted = 0
      for (const q of lesson.questions) {
        if (solvedSet.has(q.id)) solved++
        if (reviewIds.has(q.id)) attempted++
      }
      const target = lesson.questions.length
      const denom = Math.max(attempted, solved)
      const accuracy = denom > 0 ? solved / denom : 0
      return {
        id: lesson.id,
        index: lesson.index,
        title: lesson.title,
        totalQuestions: lesson.questions.length,
        target,
        solved,
        attempted,
        accuracy,
        stars: computeStars(accuracy, solved),
        avgDifficulty: lesson.avgDifficulty,
      }
    })

    // All lessons unlocked by default — learners can hop around freely.
    const completedFlags = raw.map((l) => {
      if (l.target === 0) return false
      return l.solved >= l.target
        || (l.attempted >= LESSON_UNLOCK_ANSWERED_MIN && l.accuracy >= LESSON_MASTERY_ACCURACY)
    })

    const unlockedFlags = raw.map(() => true)

    // Active lesson: first unlocked & incomplete; else last unlocked.
    let activeIndex = -1
    if (selectedLesson) {
      const found = raw.findIndex((l) => l.id === selectedLesson)
      if (found >= 0 && unlockedFlags[found]) activeIndex = found
    }
    if (activeIndex < 0) {
      activeIndex = raw.findIndex((_l, i) => unlockedFlags[i] && !completedFlags[i])
    }
    if (activeIndex < 0) {
      // All complete — highlight the last lesson.
      activeIndex = raw.length - 1
    }

    return raw.map((lesson, i) => ({
      ...lesson,
      unlocked: unlockedFlags[i],
      completed: completedFlags[i],
      isActive: i === activeIndex,
    }))
  }, [chapterLessons, progress.solved, progress.reviews, selectedLesson])

  const activeLessonStat = lessonStats.find((l) => l.isActive) ?? null
  const totalSolved = lessonStats.reduce((sum, l) => sum + l.solved, 0)
  const totalTarget = lessonStats.reduce((sum, l) => sum + l.target, 0)
  const overallPct = totalTarget > 0 ? Math.round((totalSolved / totalTarget) * 100) : 0
  const chapterDisplayName = (selectedChapter ?? '').replace(/^Capstone:\s*/i, '')

  // When we land here having just completed the selected lesson, let Floe rest on
  // that lesson for a beat, then clear the selection so the active node advances to
  // the next incomplete lesson — Floe glides along the path (layout animation).
  const floeAdvancedRef = useRef(false)
  useEffect(() => {
    if (floeAdvancedRef.current || !selectedLesson) return
    const current = lessonStats.find((l) => l.id === selectedLesson)
    if (!current || !current.completed) return
    const nextIncomplete = lessonStats.find((l) => l.unlocked && !l.completed)
    if (!nextIncomplete) return
    floeAdvancedRef.current = true
    const timer = window.setTimeout(() => setSelectedLesson(null), 900)
    return () => window.clearTimeout(timer)
  }, [selectedLesson, lessonStats, setSelectedLesson])

  const goBack = () => {
    setSelectedLesson(null)
    setScreen('map')
  }

  const enterLesson = (lessonId: string) => {
    setSelectedLesson(lessonId)
    setMode('daily')
    setIndex(0)
    setSelectedAnswerId(null)
    setShowHint(false)
    setScreen('lesson')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const continueActive = () => {
    if (!activeLessonStat) return
    enterLesson(activeLessonStat.id)
  }

  if (!isSelectedCatalogReady) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">Loading lessons</p>
              <h2>{chapterDisplayName || selectedTrackInfo.title}</h2>
              <p>Pulling in the chapter&apos;s lesson set now.</p>
            </div>
          </article>
        </section>
      </main>
    )
  }

  // Guard: if somehow no chapter is selected (shouldn't happen via normal
  // routing), bounce back to the course map.
  if (!selectedChapter || chapterLessons.length === 0) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">No lessons</p>
              <h2>Nothing to see here</h2>
              <p>This chapter doesn&apos;t have any lessons yet. Head back to the map.</p>
            </div>
          </article>
        </section>
        <button className="back-btn" onClick={goBack} type="button">
          <ArrowLeft size={16} /> Back
        </button>
      </main>
    )
  }

  return (
    <main className="app-shell chapter-path-shell">
      <TopBar title={selectedTrackInfo.title} />

      {/* Sticky header: track + chapter + overall chapter progress */}
      <section className="chapter-path-header">
        <div className="chapter-path-header-copy">
          <p className="eyebrow">{selectedTrackInfo.title} &middot; {chapterDisplayName}</p>
          <h2>Lesson path</h2>
          <p>
            {totalSolved}/{chapterAllQuestions?.length ?? totalTarget} answered &middot; {overallPct}% mastery &middot; {chapterLessons.length} lesson{chapterLessons.length === 1 ? '' : 's'}
          </p>
        </div>
        <div className="chapter-path-header-ring">
          <div className="ring" style={{ '--score': `${overallPct}%` } as React.CSSProperties}>
            <span>{overallPct}</span>
          </div>
        </div>
      </section>

      {/* Duolingo-style lesson path (reuses chapter-path styles) */}
      <section className="chapter-path" aria-label="Lesson progression">
        <div className="chapter-path-bubbles" aria-hidden="true">
          {Array.from({ length: 14 }, (_, i) => (
            <span
              key={i}
              className="chapter-path-bubble"
              style={{
                left: `${(i * 7 + 5) % 95}%`,
                width: `${4 + (i % 5) * 2}px`,
                height: `${4 + (i % 5) * 2}px`,
                animationDelay: `${(i * 1.3) % 8}s`,
                animationDuration: `${10 + (i % 6) * 2}s`,
              }}
            />
          ))}
        </div>

        <ol className="chapter-path-list" ref={listRef}>
          {lessonStats.map((lesson, i) => {
            const side = i % 2 === 0 ? 'left' : 'right'
            const targetLabel = `${lesson.solved}/${lesson.target}`
            const ringPct = lesson.target > 0
              ? Math.min(100, Math.round((lesson.solved / lesson.target) * 100))
              : 0
            const classes = [
              'chapter-node-row',
              `chapter-node-${side}`,
              lesson.completed ? 'chapter-node-completed' : '',
              !lesson.unlocked ? 'chapter-node-locked' : '',
              lesson.isActive ? 'chapter-node-active' : '',
            ].filter(Boolean).join(' ')

            return (
              <li key={lesson.id} className={classes}>
                {lesson.isActive && (
                  <motion.div
                    layoutId="chapter-floe"
                    className="chapter-node-floe"
                    aria-hidden="true"
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  >
                    {floeFrames.map((src, idx) => (
                      <img
                        key={src}
                        className={`flow-frame ${idx === floeFrame ? 'flow-frame-active' : ''}`}
                        src={src}
                        alt=""
                      />
                    ))}
                  </motion.div>
                )}

                <button
                  className="chapter-node"
                  disabled={!lesson.unlocked}
                  onClick={() => lesson.unlocked && enterLesson(lesson.id)}
                  type="button"
                  aria-label={`${lesson.title} — ${lesson.unlocked ? targetLabel : 'locked'}`}
                >
                  <div
                    className="chapter-node-ring"
                    style={{ '--ring': `${ringPct}%` } as React.CSSProperties}
                  >
                    <div className="chapter-node-ring-inner">
                      {!lesson.unlocked ? (
                        <Lock size={22} />
                      ) : lesson.completed ? (
                        <CheckCircle2 size={26} />
                      ) : (
                        <span className="chapter-node-count">{targetLabel}</span>
                      )}
                    </div>
                  </div>

                  <div className="chapter-node-caption">
                    <span className="chapter-node-eyebrow">
                      {lesson.title}
                    </span>
                    <strong>
                      {lesson.totalQuestions} question{lesson.totalQuestions === 1 ? '' : 's'} &middot; {difficultyLabel(lesson.avgDifficulty)}
                    </strong>
                    <div className="chapter-node-stars" aria-label={`${lesson.stars} of 3 stars`}>
                      {[0, 1, 2].map((s) => (
                        <Star
                          key={s}
                          size={13}
                          className={s < lesson.stars ? 'star-on' : 'star-off'}
                          fill={s < lesson.stars ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ol>
      </section>

      {activeLessonStat && (
        <div className="chapter-path-cta">
          <div className="chapter-path-cta-copy">
            <p className="eyebrow">Up next</p>
            <strong>{activeLessonStat.title}</strong>
            <span>{activeLessonStat.solved}/{activeLessonStat.target} solved &middot; {Math.round(activeLessonStat.accuracy * 100)}% accuracy</span>
          </div>
          <button className="lets-go" onClick={continueActive} type="button">
            <Sparkles size={17} /> Continue <ChevronRight size={15} />
          </button>
        </div>
      )}

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back to chapters
      </button>
    </main>
  )
}
