import { useMemo, useState, useEffect, useRef, type CSSProperties } from 'react'
import { Flame, Repeat2, Sparkles, CheckCircle2, ArrowLeft, Trophy, Lock, Star, ChevronRight } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { playFanfare, playRewardVoiceSound } from '../../lib/audio'
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

// Chapter completion target: at most 50 (matches design "X/50") but
// capped to the chapter's actual question count if smaller.
const CHAPTER_TARGET_CAP = 50
// Threshold to unlock the next chapter (correct answers count).
const UNLOCK_QUESTIONS_THRESHOLD = 20
// Accuracy threshold for "mastered" (also unlocks capstone).
const MASTERY_ACCURACY = 0.8

type ChapterStats = {
  name: string
  index: number
  totalQuestions: number
  target: number          // X / target completion ring
  solved: number          // # correctly answered (in progress.solved)
  attempted: number       // # questions seen at least once (in progress.reviews)
  accuracy: number        // solved / max(attempted, 1)
  starScorePct: number
  stars: 0 | 1 | 2 | 3
  isCapstone: boolean
  unlocked: boolean
  completed: boolean
  isActive: boolean
}

function detectCapstone(name: string) {
  return /capstone/i.test(name)
}

function computeStarScore(correct: number, answered: number, total: number): number {
  if (total <= 0) return 0
  const correctPct = correct / total
  const answeredPct = answered / total
  return Math.min(100, Math.round(((correctPct + answeredPct) / 2) * 100))
}

function computeStars(starScorePct: number): 0 | 1 | 2 | 3 {
  if (starScorePct <= 0) return 0
  if (starScorePct >= 67) return 3
  if (starScorePct >= 34) return 2
  return 1
}

export function MapScreen() {
  const {
    progress, mode, setMode, setIndex, setSelectedAnswerId,
    setShowHint, setScreen, setSelectedTrack, pendingStageCelebration, setPendingStageCelebration,
    selectedChapter, setSelectedChapter,
  } = useStore()

  const {
    selectedTrackInfo, isSelectedCatalogReady, courseQuestions, reviewQuestions
  } = useQuizData()

  const [floeFrame, setFloeFrame] = useState(0)
  const lastRewardVoiceStage = useRef<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloeFrame((prev) => (prev + 1) % floeFrames.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!pendingStageCelebration || lastRewardVoiceStage.current === pendingStageCelebration) return
    lastRewardVoiceStage.current = pendingStageCelebration
    playRewardVoiceSound('stage')
    playFanfare()
  }, [pendingStageCelebration])

  const ambientFish = [
    { emoji: '🐠', top: '12%', size: '18px', dur: '23s', delay: '1.5s' },
    { emoji: '🐟', top: '32%', size: '16px', dur: '18s', delay: '6.2s' },
    { emoji: '🐡', top: '55%', size: '14px', dur: '29s', delay: '3.8s' },
    { emoji: '🐠', top: '72%', size: '20px', dur: '20s', delay: '8.4s' },
    { emoji: '🐟', top: '88%', size: '15px', dur: '26s', delay: '0.7s' },
  ]

  // Build chapter list from the question catalog. Catalog order matches
  // syllabus order (the question authors group + comment by chapter), so
  // first-seen order is the right one. Falls back to alphabetical when no
  // questions are loaded.
  const chapterStats = useMemo<ChapterStats[]>(() => {
    if (courseQuestions.length === 0) return []

    // Bucket questions per chapter, preserving first-seen order.
    const order: string[] = []
    type Q = (typeof courseQuestions)[number]
    const byChapter = new Map<string, Q[]>()
    for (const q of courseQuestions) {
      const ch = q.chapter
      let bucket = byChapter.get(ch)
      if (!bucket) {
        bucket = []
        order.push(ch)
        byChapter.set(ch, bucket)
      }
      bucket.push(q)
    }

    // Move the capstone (if any) to the end.
    order.sort((a, b) => {
      const aCap = detectCapstone(a) ? 1 : 0
      const bCap = detectCapstone(b) ? 1 : 0
      return aCap - bCap
    })

    const solvedSet = new Set(progress.solved)
    const reviewIds = new Set(Object.keys(progress.reviews).map((k) => Number(k)))

    // First pass: raw stats.
    const raw = order.map((name, index) => {
      const qs = byChapter.get(name)!
      const totalQuestions = qs.length
      const target = Math.min(totalQuestions, CHAPTER_TARGET_CAP)
      let solved = 0
      let attempted = 0
      for (const q of qs) {
        if (solvedSet.has(q.id)) solved++
        if (reviewIds.has(q.id)) attempted++
      }
      const denom = Math.max(attempted, solved)
      const accuracy = denom > 0 ? solved / denom : 0
      const starScorePct = computeStarScore(solved, attempted, totalQuestions)
      return {
        name,
        index,
        totalQuestions,
        target,
        solved,
        attempted,
        accuracy,
        starScorePct,
        stars: computeStars(starScorePct),
        isCapstone: detectCapstone(name),
      }
    })

    // All chapters unlocked by default — learners can hop around freely.
    // Progress tracking (stars, completion ring) still reflects what's been
    // solved; only the gating is removed.
    const completedFlags = raw.map((c) => {
      if (c.target === 0) return false
      const solvedEnough = c.solved >= c.target
      const masteredBig = c.solved >= UNLOCK_QUESTIONS_THRESHOLD && c.accuracy >= MASTERY_ACCURACY
      return solvedEnough || masteredBig
    })

    const unlockedFlags = raw.map(() => true)

    // Determine the active chapter:
    // 1. If selectedChapter is set and unlocked, that one.
    // 2. Else: first unlocked incomplete chapter.
    // 3. Else: capstone if all done, else last unlocked.
    let activeIndex = -1
    if (selectedChapter) {
      const found = raw.findIndex((c) => c.name === selectedChapter)
      if (found >= 0 && unlockedFlags[found]) activeIndex = found
    }
    if (activeIndex < 0) {
      activeIndex = raw.findIndex((_c, i) => unlockedFlags[i] && !completedFlags[i])
    }
    if (activeIndex < 0) {
      // Everything complete — highlight capstone if present, else last.
      const capIdx = raw.findIndex((c) => c.isCapstone)
      activeIndex = capIdx >= 0 ? capIdx : raw.length - 1
    }

    return raw.map((c, i) => ({
      ...c,
      unlocked: unlockedFlags[i],
      completed: completedFlags[i],
      isActive: i === activeIndex,
    }))
  }, [courseQuestions, progress.solved, progress.reviews, selectedChapter])

  const activeChapter = chapterStats.find((c) => c.isActive) ?? null
  const totalAnswered = chapterStats.reduce((sum, c) => sum + c.attempted, 0)
  const totalQuestions = chapterStats.reduce((sum, c) => sum + c.totalQuestions, 0)
  const overallPct = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0

  const goBack = () => {
    setSelectedTrack(null)
    setSelectedChapter(null)
  }

  const enterChapter = (name: string) => {
    setSelectedChapter(name)
    setMode('daily')
    setIndex(0)
    setSelectedAnswerId(null)
    setShowHint(false)
    // Drill into the chapter's sub-map (lesson path) instead of jumping
    // straight to the trainer. The sub-map will route the player into a
    // specific lesson, which then enters the trainer.
    setScreen('chapter')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const continueActive = () => {
    if (!activeChapter) return
    enterChapter(activeChapter.name)
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

  // Render top-down: index 0 (Chapter 1) at the top, capstone at the bottom.
  // Player flows downward through the course, matching the previous Floe map
  // aesthetic that worked best with custom background art.
  return (
    <main className="app-shell chapter-path-shell">
      <TopBar title={selectedTrackInfo.title} showReferenceGuide={selectedTrackInfo.id === 'quant'} />

      {pendingStageCelebration && (
        <div className="stage-complete" role="dialog" aria-label="Stage complete">
          <div className="stage-complete-card">
            <img src="/assets/welcome/welcome-cuttlefish-explorer.png" alt="" />
            <p className="eyebrow">Chapter milestone</p>
            <h2>Reward level unlocked.</h2>
            <p>Floe&apos;s arms flail in tiny triumph. Take a breath, then back to the path.</p>
            <div className="stage-complete-actions">
              <button onClick={() => setPendingStageCelebration(null)} type="button">
                <Trophy size={16} /> Continue the dive
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky header: track + overall progress */}
      <section className="chapter-path-header">
        <div className="chapter-path-header-copy">
          <p className="eyebrow">Season 1 &middot; {selectedTrackInfo.title}</p>
          <h2>{selectedTrackInfo.id === 'quant' ? 'Survive the interview reef' : 'Chapter path'}</h2>
          <p>{totalAnswered}/{totalQuestions} answered &middot; {overallPct}% answered</p>
        </div>
        <div className="chapter-path-header-ring">
          <div className="ring" style={{ '--score': `${overallPct}%` } as React.CSSProperties}>
            <span>{overallPct}</span>
          </div>
        </div>
      </section>

      <section className="mode-switch-row" aria-label="Practice mode">
        <div className="mode-switch">
          <button className={mode === 'daily' ? 'active' : ''} onClick={() => { setMode('daily'); setIndex(0); setSelectedAnswerId(null) }}>
            <Flame size={15} /> Learn
          </button>
          <button className={mode === 'practice' ? 'active' : ''} onClick={() => { setMode('practice'); setIndex(0); setSelectedAnswerId(null) }}>
            <Repeat2 size={15} /> Endless
          </button>
          <button className={mode === 'doom' ? 'active' : ''} onClick={() => { setMode('doom'); setIndex(0); setSelectedAnswerId(null) }}>
            <Sparkles size={15} /> Hard
          </button>
          <button
            className={mode === 'review' ? 'active' : ''}
            disabled={reviewQuestions.length === 0}
            title={reviewQuestions.length === 0 ? 'No due review questions yet' : `${reviewQuestions.length} due for review`}
            onClick={() => { setMode('review'); setIndex(0); setSelectedAnswerId(null); setSelectedChapter(null); setScreen('lesson') }}
          >
            <Repeat2 size={15} /> Review
            {reviewQuestions.length > 0 && (
              <span className="review-badge">{reviewQuestions.length}</span>
            )}
          </button>
        </div>
      </section>

      {/* Duolingo-style chapter path */}
      <section className="chapter-path" aria-label="Chapter progression">
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

        {/* Ambient swimming fish */}
        <div aria-hidden="true">
          {ambientFish.map((fish, i) => (
            <span
              key={`fish-${i}`}
              className="chapter-fish"
              style={{
                top: fish.top,
                fontSize: fish.size,
                animationDelay: fish.delay,
                animationDuration: fish.dur,
              }}
            >
              {fish.emoji}
            </span>
          ))}
        </div>

        <ol className="chapter-path-list">
          {chapterStats.map((chapter, i) => {
            const side = i % 2 === 0 ? 'left' : 'right'
            const targetLabel = `${chapter.attempted}/${chapter.totalQuestions}`
            const ringPct = chapter.totalQuestions > 0
              ? Math.min(100, Math.round((chapter.attempted / chapter.totalQuestions) * 100))
              : 0
            const classes = [
              'chapter-node-row',
              `chapter-node-${side}`,
              chapter.completed ? 'chapter-node-completed' : '',
              !chapter.unlocked ? 'chapter-node-locked' : '',
              chapter.isActive ? 'chapter-node-active' : '',
              chapter.isCapstone ? 'chapter-node-capstone' : '',
            ].filter(Boolean).join(' ')

            const total = chapterStats.length
            const depth = total > 1 ? i / (total - 1) : 0
            return (
              <li key={chapter.name} className={classes} style={{ '--chapter-depth': depth } as CSSProperties}>
                {chapter.isActive && (
                  <div className="chapter-node-floe" aria-hidden="true">
                    {floeFrames.map((src, idx) => (
                      <img
                        key={src}
                        className={`flow-frame ${idx === floeFrame ? 'flow-frame-active' : ''}`}
                        src={src}
                        alt=""
                      />
                    ))}
                  </div>
                )}

                <button
                  className="chapter-node"
                  disabled={!chapter.unlocked}
                  onClick={() => chapter.unlocked && enterChapter(chapter.name)}
                  type="button"
                  aria-label={`Chapter ${i + 1}: ${chapter.name} — ${chapter.unlocked ? `${targetLabel} answered` : 'locked'}`}
                >
                  <div
                    className="chapter-node-ring"
                    style={{ '--ring': `${ringPct}%` } as React.CSSProperties}
                  >
                    <div className="chapter-node-ring-inner">
                      {!chapter.unlocked ? (
                        <Lock size={22} />
                      ) : chapter.completed ? (
                        <CheckCircle2 size={26} />
                      ) : chapter.isCapstone ? (
                        <Trophy size={22} />
                      ) : (
                        <span className="chapter-node-count">{targetLabel}</span>
                      )}
                    </div>
                  </div>

                  <div className="chapter-node-caption">
                    <span className="chapter-node-eyebrow">
                      {chapter.isCapstone ? 'Capstone' : `Chapter ${i + 1}`}
                    </span>
                    <strong>{chapter.name.replace(/^Capstone:\s*/i, '')}</strong>
                    <div className="chapter-node-stars" aria-label={`${chapter.stars} of 3 stars, ${chapter.starScorePct}% combined progress`}>
                      {[0, 1, 2].map((s) => (
                        <Star
                          key={s}
                          size={13}
                          className={s < chapter.stars ? 'star-on' : 'star-off'}
                          fill={s < chapter.stars ? 'currentColor' : 'none'}
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

      {/* Sticky bottom CTA */}
      {activeChapter && (
        <div className="chapter-path-cta">
          <div className="chapter-path-cta-copy">
            <p className="eyebrow">{activeChapter.isCapstone ? 'Capstone unlocked' : 'Up next'}</p>
            <strong>{activeChapter.name.replace(/^Capstone:\s*/i, '')}</strong>
            <span>{activeChapter.attempted}/{activeChapter.totalQuestions} answered &middot; {Math.round(activeChapter.accuracy * 100)}% accuracy</span>
          </div>
          <button className="lets-go" onClick={continueActive} type="button">
            <Sparkles size={17} /> Continue <ChevronRight size={15} />
          </button>
        </div>
      )}

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back
      </button>
    </main>
  )
}
