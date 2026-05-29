import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, RotateCcw, Sparkles, Timer, ListChecks } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { TopBar } from '../layout/TopBar'
import { allTracks } from '../../lib/trackData'
import {
  BIG_FIVE_TRAIT_INFO,
  LIKERT_OPTIONS,
  MBTI_POLE_INFO,
  MBTI_TYPE_DESCRIPTIONS,
  PERSONALITY_TRACK_IDS,
  SHORT_TEST_SIZE,
  LONG_BIG_FIVE_SIZE,
  LONG_MBTI_SIZE,
  buildBigFiveSession,
  buildMbtiSession,
  scoreBigFive,
  scoreMbti,
  type BigFiveItem,
  type BigFiveTrait,
  type MbtiDichotomy,
  type MbtiItem,
  type MbtiPole,
  type TestLength,
} from '../../data/personalityTests'

type Mode = 'big-five' | 'mbti'

type Session =
  | { mode: 'big-five'; items: BigFiveItem[] }
  | { mode: 'mbti'; items: MbtiItem[] }

export function PersonalityTestScreen() {
  const { selectedTrack, selectedAge, setScreen, setSelectedTrack } = useStore()

  const mode: Mode = selectedTrack === PERSONALITY_TRACK_IDS.mbti ? 'mbti' : 'big-five'

  const track =
    allTracks.find((t) => t.id === selectedTrack && t.ageGroup === selectedAge) ??
    allTracks.find((t) => t.id === selectedTrack)

  const [session, setSession] = useState<Session | null>(null)
  const [index, setIndex] = useState(0)
  const [bigFiveAnswers, setBigFiveAnswers] = useState<Record<string, 1 | 2 | 3 | 4 | 5>>({})
  const [mbtiAnswers, setMbtiAnswers] = useState<Record<string, MbtiPole>>({})
  const [showResult, setShowResult] = useState(false)

  const startSession = (length: TestLength) => {
    if (mode === 'big-five') {
      setSession({ mode: 'big-five', items: buildBigFiveSession(length) })
    } else {
      setSession({ mode: 'mbti', items: buildMbtiSession(length) })
    }
    setIndex(0)
    setBigFiveAnswers({})
    setMbtiAnswers({})
    setShowResult(false)
  }

  const exitToCourses = () => {
    setSelectedTrack(null)
    setScreen('courses')
  }

  const title = track?.title ?? (mode === 'mbti' ? 'MBTI' : 'Big Five')
  const sessionMode = session?.mode

  const bigFiveResult = useMemo(
    () => (sessionMode === 'big-five' && showResult ? scoreBigFive(bigFiveAnswers) : null),
    [sessionMode, showResult, bigFiveAnswers]
  )
  const mbtiResult = useMemo(
    () => (sessionMode === 'mbti' && showResult ? scoreMbti(mbtiAnswers) : null),
    [sessionMode, showResult, mbtiAnswers]
  )

  // ─── Step 1: length picker ────────────────────────────────
  if (!session) {
    const longSize = mode === 'mbti' ? LONG_MBTI_SIZE : LONG_BIG_FIVE_SIZE
    return (
      <main className="app-shell personality-shell">
        <TopBar title={title} />
        <section className="personality-pick">
          <header className="personality-intro">
            <p className="eyebrow">
              <Sparkles size={13} /> {mode === 'mbti' ? 'MBTI · personality preferences' : 'Big Five · OCEAN traits'}
            </p>
            <h2>{title}</h2>
            <p className="personality-hint">
              Pick how long you want this to take. The short version is randomly drawn each time,
              so retakes will feel a bit different.
            </p>
          </header>
          <div className="personality-length-options">
            <button type="button" className="personality-length-card" onClick={() => startSession('short')}>
              <Timer size={20} />
              <div>
                <strong>Short · {SHORT_TEST_SIZE} questions</strong>
                <p>A balanced random sample. Good if you’re curious and short on time. Retake it for a different mix.</p>
              </div>
            </button>
            <button type="button" className="personality-length-card" onClick={() => startSession('long')}>
              <ListChecks size={20} />
              <div>
                <strong>Long · {longSize} questions</strong>
                <p>The full item bank. Slower, but the result is more stable.</p>
              </div>
            </button>
          </div>
          <button className="back-btn" onClick={exitToCourses} type="button">
            <ArrowLeft size={16} /> Back to courses
          </button>
        </section>
      </main>
    )
  }

  const total = session.items.length
  const currentItem = session.items[index]
  const progressPct = Math.round((index / total) * 100)

  const recordBigFive = (value: 1 | 2 | 3 | 4 | 5) => {
    if (session.mode !== 'big-five') return
    setBigFiveAnswers({ ...bigFiveAnswers, [currentItem.id]: value })
    advance()
  }

  const recordMbti = (pole: MbtiPole) => {
    if (session.mode !== 'mbti') return
    setMbtiAnswers({ ...mbtiAnswers, [currentItem.id]: pole })
    advance()
  }

  const advance = () => {
    if (index + 1 >= total) {
      setShowResult(true)
    } else {
      setIndex(index + 1)
    }
  }

  const goBack = () => {
    if (showResult) {
      setShowResult(false)
      setIndex(total - 1)
      return
    }
    if (index > 0) {
      setIndex(index - 1)
    } else {
      // First question — bail back to length picker.
      setSession(null)
    }
  }

  const retake = () => {
    setSession(null)
    setIndex(0)
    setBigFiveAnswers({})
    setMbtiAnswers({})
    setShowResult(false)
  }

  // ─── Step 3: result ───────────────────────────────────────
  if (showResult) {
    return (
      <main className="app-shell personality-shell">
        <TopBar title={title} />
        <section className="personality-result">
          {bigFiveResult && <BigFiveResultCard scores={bigFiveResult.scores} />}
          {mbtiResult && <MbtiResultCard result={mbtiResult} />}
          <div className="personality-actions">
            <button className="secondary" onClick={retake} type="button">
              <RotateCcw size={15} /> Retake
            </button>
            <button className="primary" onClick={exitToCourses} type="button">
              Back to courses
            </button>
          </div>
        </section>
      </main>
    )
  }

  // ─── Step 2: question flow ────────────────────────────────
  return (
    <main className="app-shell personality-shell">
      <TopBar title={title} />
      <section className="personality-test">
        <header className="personality-header">
          <div className="personality-intro">
            <p className="eyebrow">
              <Sparkles size={13} /> {mode === 'mbti' ? 'MBTI · personality preferences' : 'Big Five · OCEAN traits'}
            </p>
            <h2>{title}</h2>
            <p className="personality-hint">
              {mode === 'mbti'
                ? 'There are no right answers — pick the option that feels more like you. You can change your mind any time.'
                : 'There are no right answers — say how much each statement sounds like you. Honest beats flattering.'}
            </p>
          </div>
          <div className="personality-progress" aria-label="progress">
            <div className="personality-progress-track">
              <div className="personality-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="personality-progress-label">
              Question {index + 1} of {total}
            </span>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.article
            key={currentItem.id}
            className="personality-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <p className="personality-prompt">{currentItem.prompt}</p>

            {session.mode === 'big-five' ? (
              <div className="likert-row">
                {LIKERT_OPTIONS.map((opt) => {
                  const selected = bigFiveAnswers[currentItem.id] === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      className={`likert-btn${selected ? ' selected' : ''}`}
                      onClick={() => recordBigFive(opt.value)}
                    >
                      <span className="likert-value">{opt.value}</span>
                      <span className="likert-label">{opt.label}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="forced-choice">
                {'options' in currentItem &&
                  currentItem.options.map((opt) => {
                    const selected = mbtiAnswers[currentItem.id] === opt.pole
                    return (
                      <button
                        key={opt.pole + opt.label}
                        type="button"
                        className={`forced-choice-btn${selected ? ' selected' : ''}`}
                        onClick={() => recordMbti(opt.pole)}
                      >
                        {opt.label}
                      </button>
                    )
                  })}
              </div>
            )}
          </motion.article>
        </AnimatePresence>

        <button className="back-btn" onClick={goBack} type="button">
          <ArrowLeft size={16} /> {index === 0 ? 'Change test length' : 'Previous question'}
        </button>
      </section>
    </main>
  )
}

function BigFiveResultCard({ scores }: { scores: Record<BigFiveTrait, number> }) {
  const order: BigFiveTrait[] = ['O', 'C', 'E', 'A', 'N']
  return (
    <article className="personality-result-card">
      <p className="eyebrow"><Sparkles size={13} /> Your Big Five profile</p>
      <h2>OCEAN snapshot</h2>
      <p className="personality-hint">
        Each score is a percentile within the 5-point Likert range. 50 is the middle; closer to 0 or 100 is a stronger lean.
      </p>
      <ul className="ocean-list">
        {order.map((trait) => {
          const info = BIG_FIVE_TRAIT_INFO[trait]
          const pct = scores[trait]
          const lean = pct >= 60 ? info.high : pct <= 40 ? info.low : 'A balance of both ends of this trait.'
          return (
            <li key={trait} className="ocean-item">
              <div className="ocean-header">
                <strong>{info.name}</strong>
                <span className="ocean-score">{pct}</span>
              </div>
              <div className="ocean-bar">
                <div className="ocean-bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="ocean-lean">{lean}</p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

function MbtiResultCard({ result }: { result: { type: string; strengths: Record<MbtiDichotomy, { pole: MbtiPole; pct: number }> } }) {
  const desc = MBTI_TYPE_DESCRIPTIONS[result.type] ?? {
    nickname: 'Your type',
    summary: 'A blended profile — your preferences are close to the middle on at least one dichotomy.',
  }
  const order: MbtiDichotomy[] = ['EI', 'SN', 'TF', 'JP']
  return (
    <article className="personality-result-card">
      <p className="eyebrow"><Sparkles size={13} /> Your MBTI type</p>
      <h2>{result.type} · {desc.nickname}</h2>
      <p className="personality-hint">{desc.summary}</p>
      <ul className="mbti-list">
        {order.map((dichotomy) => {
          const { pole, pct } = result.strengths[dichotomy]
          const info = MBTI_POLE_INFO[pole]
          return (
            <li key={dichotomy} className="mbti-item">
              <div className="mbti-header">
                <strong>{pole} · {info.name}</strong>
                <span className="mbti-score">{pct}% lean</span>
              </div>
              <p className="mbti-blurb">{info.blurb}</p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
