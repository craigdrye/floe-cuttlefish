import { useMemo, useState, useEffect, useRef } from 'react'
import { Flame, Repeat2, Sparkles, Headphones, CheckCircle2, Map, ArrowLeft, Trophy } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { mapScenery } from '../../lib/mapData'
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

const ambientFish = [
  { emoji: '🐠', top: '20%', delay: '0s', duration: '22s' },
  { emoji: '🐟', top: '45%', delay: '8s', duration: '18s' },
  { emoji: '🦀', top: '85%', delay: '14s', duration: '26s' },
  { emoji: '🐡', top: '60%', delay: '5s', duration: '20s' },
]

export function MapScreen() {
  const {
    progress, mode, setMode, setIndex, setSelectedAnswerId,
    setShowHint, setScreen, setSelectedTrack, pendingStageCelebration, setPendingStageCelebration,
    misconceptionArtifacts, selectedChapter, setSelectedChapter,
  } = useStore()

  const {
    selectedTrackInfo, isSelectedCatalogReady, dailyQuestions,
    chapterGroups, mapNodes, baseQuestion, mapBackground, reviewQuestions
  } = useQuizData()

  const QUESTIONS_PER_STAGE = 4
  const [floeFrame, setFloeFrame] = useState(0)
  const [swimStage, setSwimStage] = useState<number | null>(null)
  const [swimState, setSwimState] = useState<'idle' | 'pause' | 'swimming'>('idle')
  const lastRewardVoiceStage = useRef<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloeFrame((prev) => (prev + 1) % floeFrames.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!swimStage || swimState !== 'pause') return
    const timer = window.setTimeout(() => {
      setSwimState('swimming')
      playFanfare()
    }, 2000)
    return () => window.clearTimeout(timer)
  }, [swimStage, swimState])

  useEffect(() => {
    if (!swimStage || swimState !== 'swimming') return
    const timer = window.setTimeout(() => {
      setSwimStage(null)
      setSwimState('idle')
    }, 3600)
    return () => window.clearTimeout(timer)
  }, [swimStage, swimState])

  useEffect(() => {
    if (!pendingStageCelebration || lastRewardVoiceStage.current === pendingStageCelebration) return
    lastRewardVoiceStage.current = pendingStageCelebration
    playRewardVoiceSound('stage')
  }, [pendingStageCelebration])

  const chapters = useMemo(() => chapterGroups.map((group) => group.label), [chapterGroups])

  const completedCount = progress.solved.filter((id) => dailyQuestions.some((q) => q.id === id)).length

  const currentStageIndex = useMemo(() => {
    const solvedInDaily = dailyQuestions.filter((q) => progress.solved.includes(q.id))
    return Math.min(Math.floor(solvedInDaily.length / QUESTIONS_PER_STAGE), 3)
  }, [dailyQuestions, progress.solved])

  const stageProgress = useMemo(() => {
    const start = currentStageIndex * QUESTIONS_PER_STAGE
    const stageQuestions = dailyQuestions.slice(start, start + QUESTIONS_PER_STAGE)
    return stageQuestions.filter((q) => progress.solved.includes(q.id)).length
  }, [currentStageIndex, dailyQuestions, progress.solved])

  const openMisconceptions = misconceptionArtifacts.filter((item) => !item.clearedAt)
  const clearedMisconceptions = misconceptionArtifacts.filter((item) => item.clearedAt)

  const totalQuestions = dailyQuestions.length
  const percentCompleted = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0

  const displayedStageIndex = swimStage ? Math.max(0, swimStage - 1) : currentStageIndex
  const swimClass = swimStage && swimState === 'swimming'
    ? `swimming swim-stage-${swimStage}`
    : swimState === 'pause'
      ? 'swim-paused'
      : ''

  const continueStageComplete = () => {
    const stage = pendingStageCelebration
    setPendingStageCelebration(null)
    if (!stage || stage >= 4) return
    setSwimStage(stage)
    setSwimState('pause')
  }

  const launchGuessTheThingReward = () => {
    setPendingStageCelebration(null)
    setSelectedTrack('guessTheThing')
    setSelectedChapter(null)
    setMode('daily')
    setIndex(0)
    setSelectedAnswerId(null)
    setShowHint(false)
    setScreen('map')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => {
    setSelectedTrack(null)
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
              <p>Pulling in the question set for this stage now.</p>
            </div>
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell">
      <TopBar title={selectedTrackInfo.title} showReferenceGuide={selectedTrackInfo.id === 'quant'} />

      {pendingStageCelebration && (
        <div className="stage-complete" role="dialog" aria-label="Stage complete">
          <div className="stage-complete-card">
            <img src="/assets/welcome/welcome-cuttlefish-explorer.png" alt="" />
            <p className="eyebrow">Stage {pendingStageCelebration} cleared</p>
            <h2>Reward level unlocked.</h2>
            <p>That was a clean little victory. Take the dopamine, or play a silly visual bonus round.</p>
            <div className="stage-complete-actions">
              {selectedTrackInfo.id !== 'guessTheThing' && (
                <button className="bonus-reward-button" onClick={launchGuessTheThingReward} type="button">
                  <Sparkles size={16} /> Guess the Thing
                </button>
              )}
              <button onClick={continueStageComplete} type="button">
                <Trophy size={16} /> Continue the dive
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="dashboard">
        <article className="mission">
          <div className="mission-copy">
            <p className="eyebrow">Season 1: {selectedTrackInfo.title}</p>
            <h2>{selectedTrackInfo.id === 'quant' ? 'Survive the interview reef' : 'Navigate the reef'}</h2>
            <p>Each solved stop builds a route through the reef, from first foothold to moonshot.</p>
          </div>
          <div className="mode-switch" aria-label="Practice mode">
            <button className={mode === 'daily' ? 'active' : ''} onClick={() => { setMode('daily'); setIndex(0); setSelectedAnswerId(null); setScreen('map') }}>
              <Flame size={15} /> Daily
            </button>
            <button className={mode === 'practice' ? 'active' : ''} onClick={() => { setMode('practice'); setIndex(0); setSelectedAnswerId(null); setScreen('map') }}>
              <Repeat2 size={15} /> Endless
            </button>
            <button className={mode === 'doom' ? 'active' : ''} onClick={() => { setMode('doom'); setIndex(0); setSelectedAnswerId(null); setScreen('map') }}>
              <Sparkles size={15} /> Doom Scroll
            </button>
            <button className={mode === 'podcast' ? 'active' : ''} onClick={() => { setMode('podcast'); setIndex(0); setSelectedAnswerId(null); setScreen('map') }}>
              <Headphones size={15} /> Podcast
            </button>
            <button className={mode === 'review' ? 'active' : ''} onClick={() => { setMode('review'); setIndex(0); setSelectedAnswerId(null); setScreen('lesson') }}>
              <Repeat2 size={15} /> Review
              {reviewQuestions.length > 0 && (
                <span className="review-badge">{reviewQuestions.length}</span>
              )}
            </button>
          </div>
        </article>

        <article className="readiness">
          <div className="ring" style={{ '--score': `${percentCompleted}%` } as React.CSSProperties}>
            <span>{percentCompleted}</span>
          </div>
          <div>
            <h3>{selectedTrackInfo.id === 'quant' ? 'Interview readiness' : 'Quiz readiness'}</h3>
            <p>{completedCount}/{totalQuestions} total questions completed. The cuttlefish grows stronger.</p>
          </div>
        </article>
      </section>


      {chapters.length > 0 && (
        <section className="chapter-select" aria-label="Chapter filter">
          <div className="chapter-select-header">
            <p className="eyebrow">Chapter</p>
            <h2>Today&apos;s map</h2>
          </div>
          <div className="chapter-pills">
            <button
              className={`chapter-pill${!selectedChapter ? ' active' : ''}`}
              onClick={() => { setSelectedChapter(null); setIndex(0); setSelectedAnswerId(null) }}
            >
              All
            </button>
            {chapters.map((chapter) => (
              <button
                key={chapter}
                className={`chapter-pill${selectedChapter === chapter ? ' active' : ''}`}
                onClick={() => { setSelectedChapter(chapter); setSelectedAnswerId(null) }}
              >
                {chapter}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="lesson-path" aria-label={`${selectedTrackInfo.title} lesson path`}>
        <div className="path-header">
          <div>
            <p className="eyebrow">Skill path</p>
            <h2>Today&apos;s map</h2>
          </div>
          <div className="path-key">
            <span><CheckCircle2 size={14} /> cleared</span>
            <span><Map size={14} /> current</span>
          </div>
        </div>

        <div
          className="path-track"
          style={mapBackground ? { backgroundImage: `linear-gradient(rgba(248,253,250,0.1), rgba(248,253,250,0.1)), url('${mapBackground}')` } : undefined}
        >
          <svg className="map-route" viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 78 178 C 190 40, 285 44, 380 134 S 560 246, 650 114 S 815 18, 930 92" pathLength="100" />
          </svg>

          {/* Ambient fish */}
          {ambientFish.map((fish, i) => (
            <span key={i} className="map-fish" style={{ top: fish.top, animationDelay: fish.delay, animationDuration: fish.duration }}>
              {fish.emoji}
            </span>
          ))}

          {swimState !== 'idle' && (
            <>
              <div className="swim-bubbles" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {swimState === 'pause' && (
                <div className="swim-pause-note">Floe is lining up the next swim...</div>
              )}
            </>
          )}

          {/* Floe sprite */}
          <div className={`map-floe node-${displayedStageIndex + 1} ${swimClass}`} key={`floe-${displayedStageIndex}-${swimStage ?? 'rest'}`}>
            <div className="map-floe-sprite">
              {floeFrames.map((src, i) => (
                <img key={src} className={`flow-frame ${i === floeFrame ? 'flow-frame-active' : ''}`} src={src} alt="" />
              ))}
            </div>
          </div>

          {/* Map nodes */}
          {mapNodes.map((node, nodeIndex) => {
            const stageStart = nodeIndex * QUESTIONS_PER_STAGE
            const stageQuestions = dailyQuestions.slice(stageStart, stageStart + QUESTIONS_PER_STAGE)
            const stageSolved = stageQuestions.filter((q) => progress.solved.includes(q.id)).length
            const stageComplete = stageSolved >= QUESTIONS_PER_STAGE
            const isCurrent = nodeIndex === currentStageIndex
            return (
              <button
                key={node.id}
                className={`path-node node-${nodeIndex + 1} ${stageComplete ? 'solved' : ''} ${isCurrent ? 'current' : ''}`}
                onClick={() => {
                  setMode('daily')
                  setIndex(nodeIndex * QUESTIONS_PER_STAGE)
                  setSelectedAnswerId(null)
                  setShowHint(false)
                  setScreen('map')
                }}
              >
                <span className="map-place">{mapScenery[nodeIndex]}</span>
                <span className="node-badge">
                  {stageComplete ? <CheckCircle2 size={18} /> : `${stageSolved}/${QUESTIONS_PER_STAGE}`}
                </span>
                <span>{node.chapter}</span>
                <small>{stageComplete ? 'Complete!' : `${stageSolved}/${QUESTIONS_PER_STAGE} solved`}</small>
              </button>
            )
          })}


        </div>

        <div className="map-brief">
          <div>
            <p className="eyebrow">Stage {currentStageIndex + 1} &middot; {stageProgress}/{QUESTIONS_PER_STAGE} solved</p>
            <h3>{baseQuestion?.chapter}</h3>
            <p>{baseQuestion?.briefing}</p>
          </div>
          <button className="lets-go" onClick={() => {
            const stageStart = currentStageIndex * QUESTIONS_PER_STAGE
            const stageQuestions = dailyQuestions.slice(stageStart, stageStart + QUESTIONS_PER_STAGE)
            const firstUnsolved = stageQuestions.findIndex((q) => !progress.solved.includes(q.id))
            const startIdx = firstUnsolved >= 0 ? stageStart + firstUnsolved : stageStart
            setIndex(startIdx)
            setSelectedAnswerId(null)
            setShowHint(false)
            setScreen('lesson')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <Sparkles size={17} /> Let&apos;s go!
          </button>
        </div>
      </section>

      <section className="museum-panel" aria-label="Misconception Museum">
        <div className="museum-panel-copy">
          <p className="eyebrow">Misconception Museum</p>
          <h2>{openMisconceptions.length ? `${openMisconceptions.length} shelf ${openMisconceptions.length === 1 ? 'item' : 'items'} to clear` : 'No misconceptions on the shelf'}</h2>
          <p>{openMisconceptions.length ? 'Wrong answers become artifacts. Clear them by solving the related question later.' : `${clearedMisconceptions.length} retired so far. The shelf is clean for now.`}</p>
        </div>
        <div className="museum-shelf">
          {(openMisconceptions.length ? openMisconceptions : clearedMisconceptions).slice(0, 3).map((item) => (
            <article key={`${item.id}-${item.clearedAt ?? 'open'}`} className={`museum-card ${item.clearedAt ? 'cleared' : ''}`}>
              <span>{item.clearedAt ? 'Cleared' : 'Captured'}</span>
              <strong>{item.questionTitle}</strong>
              <small>{item.flaw}</small>
            </article>
          ))}
          {!misconceptionArtifacts.length && (
            <article className="museum-card empty">
              <span>Empty shelf</span>
              <strong>Misses will land here.</strong>
              <small>That makes review feel concrete instead of punitive.</small>
            </article>
          )}
        </div>
      </section>

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back
      </button>
    </main>
  )
}
