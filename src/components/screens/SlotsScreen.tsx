import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, CheckCircle2, RotateCcw, Sparkles, XCircle, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { guessTheFossilQuestions } from '../../data/questionCatalog/fieldIdentificationQuestions'
import { playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'
import type { Answer, Question, QuestionMedia } from '../../data/questionCatalog/types'

type SlotsRound = 'ready' | 'spinning' | 'landed' | 'answered'

const fossilBank: Question[] = guessTheFossilQuestions

function mediaList(question: Question): QuestionMedia[] {
  if (!question.media) return []
  return Array.isArray(question.media) ? question.media : [question.media]
}

function firstImage(question: Question | null): QuestionMedia | null {
  if (!question) return null
  const images = mediaList(question)
  return images[0] ?? images[1] ?? null
}

function shuffleAnswers(question: Question, seed: number) {
  const answers = [...question.answers]
  let x = (question.id + seed * 1013904223) >>> 0
  for (let i = answers.length - 1; i > 0; i -= 1) {
    x = (x * 1664525 + 1013904223) >>> 0
    const j = x % (i + 1)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }
  return answers
}

function pickRandomDifferent(current: Question | null): Question {
  if (!fossilBank.length) throw new Error('Fossil bank empty')
  if (fossilBank.length === 1) return fossilBank[0]
  let next = fossilBank[Math.floor(Math.random() * fossilBank.length)]
  while (current && next.id === current.id) {
    next = fossilBank[Math.floor(Math.random() * fossilBank.length)]
  }
  return next
}

const SPIN_DURATION_MS = 3600
const SPIN_START_INTERVAL = 55
const SPIN_END_INTERVAL = 480

export function SlotsScreen() {
  const { setScreen } = useStore()
  const [round, setRound] = useState<SlotsRound>('ready')
  const [reelQuestion, setReelQuestion] = useState<Question>(() => pickRandomDifferent(null))
  const [landedQuestion, setLandedQuestion] = useState<Question | null>(null)
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1_000_000))
  const [selected, setSelected] = useState<Answer | null>(null)
  const [score, setScore] = useState({ pulls: 0, correct: 0 })

  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current)
    }
  }, [])

  const answers = useMemo(
    () => (landedQuestion ? shuffleAnswers(landedQuestion, seed) : []),
    [landedQuestion, seed],
  )

  const reelImage = firstImage(reelQuestion)
  const landedImage = firstImage(landedQuestion)
  const isCorrect = selected?.correct ?? false

  const pullLever = () => {
    if (round === 'spinning') return
    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
      spinTimeoutRef.current = null
    }
    const target = pickRandomDifferent(landedQuestion)
    setLandedQuestion(null)
    setSelected(null)
    setRound('spinning')
    playRewardVoiceSound('success')

    let elapsed = 0
    let last: Question | null = reelQuestion

    const tick = () => {
      if (elapsed >= SPIN_DURATION_MS) {
        spinTimeoutRef.current = null
        setReelQuestion(target)
        setLandedQuestion(target)
        setRound('landed')
        return
      }
      const next = pickRandomDifferent(last)
      last = next
      setReelQuestion(next)
      const progress = Math.min(1, elapsed / SPIN_DURATION_MS)
      const eased = SPIN_START_INTERVAL + (SPIN_END_INTERVAL - SPIN_START_INTERVAL) * Math.pow(progress, 2.2)
      elapsed += eased
      spinTimeoutRef.current = setTimeout(tick, eased)
    }

    tick()
  }

  const chooseAnswer = (answer: Answer) => {
    if (round !== 'landed') return
    setSelected(answer)
    setRound('answered')
    setScore((current) => ({
      pulls: current.pulls + 1,
      correct: current.correct + (answer.correct ? 1 : 0),
    }))
    if (answer.correct) playSuccessSound()
    else playWrongSound()
  }

  const pullAgain = () => {
    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
      spinTimeoutRef.current = null
    }
    setSelected(null)
    setLandedQuestion(null)
    setSeed((current) => current + 1)
    setRound('ready')
  }

  const fullReset = () => {
    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
      spinTimeoutRef.current = null
    }
    setSelected(null)
    setLandedQuestion(null)
    setSeed(Math.floor(Math.random() * 1_000_000))
    setScore({ pulls: 0, correct: 0 })
    setRound('ready')
  }

  return (
    <main className="app-shell slots-shell">
      <TopBar title="Fossil Slots" />
      <section className="slots-layout">
        <article className="slots-hero">
          <div>
            <p className="eyebrow">Spin to identify</p>
            <h2>Pull the lever. Name the bone.</h2>
            <p>The reel will slow down and stop on a fossil. Pick the right one to score.</p>
          </div>
          <div className="slots-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={fullReset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className={`slots-stage slots-${round}`}>
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Fossil Slots</summary>
            <div className="game-rules-body">
              <ol>
                <li>Pull the lever to start the reel spinning through fossil images.</li>
                <li>The reel slows and <strong>lands on one fossil</strong>.</li>
                <li>Pick the correct answer from the four choices below.</li>
                <li>Right answers grow your score; wrong ones cost nothing — you can always pull again.</li>
              </ol>
            </div>
          </details>

          <div className="slots-score">
            <span>Pulls {score.pulls}</span>
            <strong>{score.correct} correct</strong>
          </div>

          <div className="slots-machine">
            <div className="slots-marquee">
              <Sparkles size={16} />
              <span>FLOE FOSSIL SLOTS</span>
              <Sparkles size={16} />
            </div>

            <div className="slots-window" aria-live="polite">
              <div className={`slots-reel ${round === 'spinning' ? 'spinning' : ''}`}>
                {round === 'landed' || round === 'answered' ? (
                  landedImage ? (
                    <img src={landedImage.src} alt={landedImage.alt} />
                  ) : (
                    <div className="slots-placeholder">?</div>
                  )
                ) : (
                  reelImage ? (
                    <img src={reelImage.src} alt={reelImage.alt} />
                  ) : (
                    <div className="slots-placeholder">?</div>
                  )
                )}
              </div>
              <div className="slots-window-frame" aria-hidden="true" />
            </div>

            <button
              type="button"
              className={`slots-lever ${round === 'spinning' ? 'pulled' : ''}`}
              onClick={pullLever}
              disabled={round === 'spinning' || round === 'landed' || round === 'answered'}
              aria-label="Pull the lever"
            >
              <span className="slots-lever-stick" />
              <span className="slots-lever-knob" />
              <span className="slots-lever-text">
                {round === 'ready' ? 'PULL' : round === 'spinning' ? 'SPIN' : 'DONE'}
              </span>
            </button>
          </div>

          {round === 'landed' && landedQuestion && (
            <div className="slots-question">
              <p className="eyebrow">{landedQuestion.chapter}</p>
              <h3>{landedQuestion.prompt || 'What is it?'}</h3>
            </div>
          )}

          {(round === 'landed' || round === 'answered') && landedQuestion && (
            <div className="slots-answer-grid">
              {answers.map((answer) => (
                <button
                  key={answer.id}
                  type="button"
                  className={[
                    selected?.id === answer.id ? 'selected' : '',
                    round === 'answered' && answer.correct ? 'correct' : '',
                    round === 'answered' && selected?.id === answer.id && !answer.correct ? 'wrong' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => chooseAnswer(answer)}
                  disabled={round === 'answered'}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          )}

          {round === 'answered' && landedQuestion && (
            <article className={`slots-result ${isCorrect ? 'result-correct' : 'result-wrong'}`}>
              <div>
                {isCorrect ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
                <strong>
                  {isCorrect
                    ? 'Bullseye.'
                    : `Not quite. It was ${landedQuestion.answers.find((answer) => answer.correct)?.label}.`}
                </strong>
              </div>
              <p>{landedQuestion.lesson}</p>
              <button type="button" onClick={pullAgain}>
                <RotateCcw size={16} /> Pull again
              </button>
            </article>
          )}
        </section>
      </section>
    </main>
  )
}
