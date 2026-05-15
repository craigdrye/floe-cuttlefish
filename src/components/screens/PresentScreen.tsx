import { useMemo, useState } from 'react'
import { ArrowLeft, CheckCircle2, Gift, HelpCircle, PackageOpen, RotateCcw, XCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { guessTheFossilQuestions } from '../../data/questionCatalog/fieldIdentificationQuestions'
import { guessTheHistoricalRuinQuestions } from '../../data/questionCatalog/bonusIdentificationQuestions'
import { playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'
import type { Answer, Question, QuestionMedia } from '../../data/questionCatalog/types'

type GiftRound = 'wrapped' | 'revealed' | 'answered'

const giftBank = [...guessTheFossilQuestions, ...guessTheHistoricalRuinQuestions]

function mediaList(question: Question): QuestionMedia[] {
  if (!question.media) return []
  return Array.isArray(question.media) ? question.media : [question.media]
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

function nextQuestion(current: Question | null, seed: number) {
  if (!giftBank.length) return null
  const offset = current ? giftBank.findIndex((question) => question.id === current.id) + 1 : seed
  return giftBank[((offset % giftBank.length) + giftBank.length) % giftBank.length]
}

export function PresentScreen() {
  const { setScreen } = useStore()
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * giftBank.length))
  const [question, setQuestion] = useState<Question | null>(() => nextQuestion(null, seed))
  const [round, setRound] = useState<GiftRound>('wrapped')
  const [selected, setSelected] = useState<Answer | null>(null)
  const [score, setScore] = useState({ opened: 0, correct: 0 })

  const answers = useMemo(() => question ? shuffleAnswers(question, seed) : [], [question, seed])
  const images = question ? mediaList(question) : []
  const image = images[0] ?? null
  const isCorrect = selected?.correct ?? false

  const openGift = () => {
    setRound('revealed')
    playRewardVoiceSound('success')
  }

  const chooseAnswer = (answer: Answer) => {
    if (round !== 'revealed') return
    setSelected(answer)
    setRound('answered')
    setScore((current) => ({
      opened: current.opened + 1,
      correct: current.correct + (answer.correct ? 1 : 0),
    }))
    if (answer.correct) playSuccessSound()
    else playWrongSound()
  }

  const nextGift = () => {
    const nextSeed = seed + 1
    setSeed(nextSeed)
    setQuestion((current) => nextQuestion(current, nextSeed))
    setSelected(null)
    setRound('wrapped')
  }

  const reset = () => {
    const nextSeed = Math.floor(Math.random() * giftBank.length)
    setSeed(nextSeed)
    setQuestion(nextQuestion(null, nextSeed))
    setSelected(null)
    setScore({ opened: 0, correct: 0 })
    setRound('wrapped')
  }

  if (!question) {
    return (
      <main className="app-shell present-shell">
        <TopBar title="Floe's Present" />
        <section className="present-panel">
          <h2>Floe is looking for the gift shelf.</h2>
          <button type="button" onClick={() => setScreen('map')}>
            <ArrowLeft size={16} /> Back to map
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell present-shell">
      <TopBar title="Floe's Present" />
      <section className="present-layout">
        <article className="present-hero">
          <div>
            <p className="eyebrow">Reward level</p>
            <h2>Floe brought you a present.</h2>
            <p>Open the box, inspect the mystery object, then name the fossil or archaeological thing inside.</p>
          </div>
          <div className="present-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className={`present-stage present-${round}`}>
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Mystery Gift</summary>
            <div className="game-rules-body">
              <ol>
                <li>Tap Floe's wrapped present to <strong>open it</strong> and reveal what's inside.</li>
                <li>Read the prompt and <strong>pick the correct identification</strong> from the four answer choices.</li>
                <li>You'll get a green check for right answers and a short note explaining the find.</li>
                <li>Hit <strong>Another present</strong> to keep going. Reset clears your score.</li>
              </ol>
            </div>
          </details>

          <div className="present-score">
            <span>Opened {score.opened}</span>
            <strong>{score.correct} correct</strong>
          </div>

          <div className="gift-wrap" aria-live="polite">
            {round === 'wrapped' ? (
              <button className="gift-box" type="button" onClick={openGift} aria-label="Open Floe's present">
                <span className="gift-lid" />
                <span className="gift-ribbon" />
                <span className="gift-body" />
                <span className="gift-tag"><Gift size={22} /> Open it</span>
              </button>
            ) : (
              <div className="gift-reveal">
                <div className="gift-object-card">
                  {image ? (
                    <img src={image.src} alt={image.alt} />
                  ) : (
                    <PackageOpen size={92} />
                  )}
                </div>
                <div className="gift-question">
                  <p className="eyebrow">{question.chapter}</p>
                  <h3>What is it?</h3>
                  <p>{question.prompt}</p>
                </div>
              </div>
            )}
          </div>

          {round !== 'wrapped' && (
            <div className="present-answer-grid">
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

          {round === 'answered' && (
            <article className={`present-result ${isCorrect ? 'result-correct' : 'result-wrong'}`}>
              <div>
                {isCorrect ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
                <strong>{isCorrect ? 'Yes. Floe chose well.' : `Not quite. It was ${question.answers.find((answer) => answer.correct)?.label}.`}</strong>
              </div>
              <p>{question.lesson}</p>
              <button type="button" onClick={nextGift}>
                <PackageOpen size={16} /> Another present
              </button>
            </article>
          )}
        </section>
      </section>
    </main>
  )
}
