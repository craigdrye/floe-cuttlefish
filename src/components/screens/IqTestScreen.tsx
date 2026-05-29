import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Brain, RotateCcw, Sparkles } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import {
  IQ_QUESTIONS,
  SHORT_TEST_COUNT,
  bandForIq,
  categoryLabel,
  estimateIQ,
  sampleIqQuestions,
  type IqQuestion,
  type IqTestLength,
} from '../../data/iqTest'

type Phase = 'intro' | 'taking' | 'results'

export function IqTestScreen() {
  const setScreen = useStore((s) => s.setScreen)
  const setSelectedTrack = useStore((s) => s.setSelectedTrack)

  const [phase, setPhase] = useState<Phase>('intro')
  const [length, setLength] = useState<IqTestLength>('short')
  const [items, setItems] = useState<IqQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [armed, setArmed] = useState<string | null>(null)

  const total = items.length
  const question = items[index]

  const maxScore = useMemo(() => items.reduce((acc, q) => acc + q.weight, 0), [items])
  const rawScore = useMemo(
    () => items.reduce((acc, q) => acc + (answers[q.id] === q.correctId ? q.weight : 0), 0),
    [items, answers],
  )
  const correctCount = useMemo(
    () => items.reduce((acc, q) => acc + (answers[q.id] === q.correctId ? 1 : 0), 0),
    [items, answers],
  )
  const iq = useMemo(() => estimateIQ(rawScore, maxScore), [rawScore, maxScore])
  const band = useMemo(() => bandForIq(iq), [iq])

  const start = (chosen: IqTestLength) => {
    setLength(chosen)
    const next = chosen === 'short' ? sampleIqQuestions(SHORT_TEST_COUNT) : sampleIqQuestions(IQ_QUESTIONS.length)
    setItems(next)
    setIndex(0)
    setAnswers({})
    setArmed(null)
    setPhase('taking')
  }

  const choose = (optionId: string) => {
    if (!question) return
    if (armed !== optionId) {
      setArmed(optionId)
      return
    }
    const nextAnswers = { ...answers, [question.id]: optionId }
    setAnswers(nextAnswers)
    setArmed(null)
    if (index + 1 >= total) {
      setPhase('results')
    } else {
      setIndex(index + 1)
    }
  }

  const skip = () => {
    if (!question) return
    const nextAnswers = { ...answers, [question.id]: '__skipped__' }
    setAnswers(nextAnswers)
    setArmed(null)
    if (index + 1 >= total) {
      setPhase('results')
    } else {
      setIndex(index + 1)
    }
  }

  const restart = () => {
    setPhase('intro')
    setItems([])
    setIndex(0)
    setAnswers({})
    setArmed(null)
  }

  const back = () => {
    setSelectedTrack(null)
    setScreen('courses')
  }

  return (
    <main className="app-shell">
      <TopBar title="IQ Test" />

      <section className="trainer">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.article
              key="iq-intro"
              className="question-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <span className="rarity-badge rarity-epic">Adult IQ estimate</span>
              <div className="question-heading">
                <Brain />
                <div>
                  <p className="eyebrow">Pick a length · untimed</p>
                  <h2>Estimate your IQ</h2>
                </div>
              </div>

              <div className="prompt-box">
                <Sparkles size={19} />
                <div className="prompt-copy">
                  <p className="question-prompt">
                    A 150-item bank spanning number sequences, pattern recognition, verbal analogies,
                    logic, spatial reasoning, and vocabulary. No per-question feedback — pick the
                    best answer and move on.
                  </p>
                  <div className="question-setup">
                    <strong>How it works</strong>
                    <ul>
                      <li><strong>Short test:</strong> {SHORT_TEST_COUNT} items drawn at random from the bank, stratified across categories. Replayable — each attempt is a fresh draw, so you can take it multiple times.</li>
                      <li><strong>Long test:</strong> All {IQ_QUESTIONS.length} items, shuffled. Roughly 45–60 minutes if you don\'t rush.</li>
                      <li>Skips count as incorrect for scoring.</li>
                      <li>Both lengths use the same IQ-band mapping, so scores are comparable.</li>
                    </ul>
                  </div>
                  <p className="question-prompt" style={{ marginTop: 12, opacity: 0.85 }}>
                    Heads up: this is an entertainment estimate, not a clinical IQ test. Real
                    psychometric assessments are supervised, timed, and far more extensive.
                  </p>
                </div>
              </div>

              <div className="actions-primary" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="primary" onClick={() => start('short')} type="button">
                  Start short test ({SHORT_TEST_COUNT} questions)
                </button>
                <button className="secondary" onClick={() => start('long')} type="button">
                  Start long test ({IQ_QUESTIONS.length} questions)
                </button>
              </div>
            </motion.article>
          )}

          {phase === 'taking' && question && (
            <motion.article
              key={`iq-q-${question.id}-${index}`}
              className="question-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <span className="rarity-badge rarity-rare">
                Question {index + 1} of {total} · {length === 'short' ? 'Short' : 'Long'} test
              </span>

              <div className="question-heading">
                <Brain />
                <div>
                  <p className="eyebrow">{categoryLabel(question.category)}</p>
                  <h2>{question.prompt}</h2>
                </div>
              </div>

              {question.setup && question.setup.length > 0 && (
                <div className="prompt-box">
                  <Sparkles size={19} />
                  <div className="prompt-copy">
                    <div className="question-setup">
                      <ul>
                        {question.setup.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="answers">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    className={['answer', armed === option.id ? 'armed' : ''].join(' ')}
                    onClick={() => choose(option.id)}
                    type="button"
                  >
                    <span className="answer-label" title={option.label}>{option.label}</span>
                    {armed === option.id && <span className="commit-hint">Tap again</span>}
                  </button>
                ))}
                <div className="commit-rule">
                  <span>
                    Tap once to lock an answer. Tap again to submit. No feedback shown until the end.
                  </span>
                </div>
              </div>

              <div className="actions-primary" style={{ display: 'flex', gap: 12 }}>
                <button className="secondary" onClick={skip} type="button">
                  Skip this question
                </button>
              </div>

              <div className="iq-progress" style={{ marginTop: 18 }}>
                <div
                  style={{
                    height: 6,
                    borderRadius: 999,
                    background: 'rgba(15,23,42,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${((index + 1) / total) * 100}%`,
                      height: '100%',
                      background: '#7c3aed',
                      transition: 'width 0.25s ease',
                    }}
                  />
                </div>
              </div>
            </motion.article>
          )}

          {phase === 'results' && (
            <motion.article
              key="iq-results"
              className="question-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <span className="rarity-badge rarity-legendary">
                {length === 'short' ? 'Short test estimate' : 'Long test estimate'}
              </span>
              <div className="question-heading">
                <Brain />
                <div>
                  <p className="eyebrow">{band.label}</p>
                  <h2>Estimated IQ: {iq}</h2>
                </div>
              </div>

              <div className="prompt-box">
                <Sparkles size={19} />
                <div className="prompt-copy">
                  <p className="question-prompt">{band.copy}</p>
                  <div className="question-setup">
                    <strong>Score breakdown</strong>
                    <ul>
                      <li>{correctCount} of {total} items answered correctly</li>
                      <li>Weighted raw score: {rawScore} / {maxScore}</li>
                      <li>Range band: {Math.max(70, iq - 7)}–{Math.min(145, iq + 7)} (±7)</li>
                      <li>Test length: {length === 'short' ? `Short (${SHORT_TEST_COUNT})` : `Long (${IQ_QUESTIONS.length})`}</li>
                    </ul>
                  </div>
                  <p className="question-prompt" style={{ marginTop: 12, opacity: 0.85 }}>
                    A real IQ result is the centre of a confidence interval, not a single number.
                    Short-test estimates have a wider band; if you want a tighter reading, try the
                    long test (or supervised psychometric testing).
                  </p>
                </div>
              </div>

              <div className="actions-primary" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="primary" onClick={restart} type="button">
                  <RotateCcw size={15} /> Take it again
                </button>
                <button className="secondary" onClick={back} type="button">
                  Back to courses
                </button>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      <button className="back-btn" onClick={back} type="button">
        <ArrowLeft size={16} /> Back to courses
      </button>
    </main>
  )
}
