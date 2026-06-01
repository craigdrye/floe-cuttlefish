import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, CheckCircle2, Gift, HelpCircle, Image as ImageIcon, PackageOpen, RotateCcw, XCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { allTracks } from '../../lib/trackData'
import { buildTrackQuiz } from '../../lib/quizRuntime'
import { loadQuestionCatalog, questionCatalogKeyForTrack } from '../../data/questionCatalog'
import { playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'
import type { Answer, Question, QuestionCatalog, QuestionMedia } from '../../data/questionCatalog/types'

type GuessRound = 'wrapped' | 'revealed' | 'answered'

function mediaList(question: Question): QuestionMedia[] {
  if (!question.media) return []
  return Array.isArray(question.media) ? question.media : [question.media]
}

function shuffleAnswers(question: Question, seed: number) {
  const answers = [...question.answers]
  let x = (question.id + seed * 2654435761) >>> 0
  for (let i = answers.length - 1; i > 0; i -= 1) {
    x = (x * 1664525 + 1013904223) >>> 0
    const j = x % (i + 1)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }
  return answers.slice(0, 4)
}

function nextQuestion(questions: Question[], current: Question | null) {
  if (!questions.length) return null
  if (questions.length === 1) return questions[0]

  let pick = current
  for (let i = 0; i < 8 && (!pick || pick.id === current?.id); i += 1) {
    pick = questions[Math.floor(Math.random() * questions.length) % questions.length]
  }
  if (pick && pick.id !== current?.id) return pick

  const idx = current ? questions.findIndex((q) => q.id === current.id) : -1
  return questions[(idx + 1) % questions.length]
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function cleanGuessPrompt(question: Question) {
  const chapter = escapeRegex(question.chapter)
  const title = escapeRegex(question.title)
  const setupPatterns = [
    /^[a-z]+ mode:\s*[^.?!]*[.?!]\s*/i,
    /^start with the obvious clue,\s*like color,\s*shape,\s*or one big pattern\.\s*/i,
    /^use (?:the )?(?:generated )?(?:field-guide )?(?:picture|image|visual clue) as your main clue\.\s*/i,
    /^pick the answer that fits (?:the )?(?:whole )?(?:specimen|object|thing),?\s*not just one clue\.\s*/i,
    /^identify the object being shown\.\s*/i,
    /^identify the object\.\s*/i,
    new RegExp(`^this ${chapter} question is about ${title}\\.\\s*`, 'i'),
  ]

  let prompt = question.prompt.replace(/\s+/g, ' ').trim()
  for (const pattern of setupPatterns) {
    prompt = prompt.replace(pattern, '').trim()
  }

  return prompt || question.prompt
}

export function GuessGiftScreen() {
  const { selectedTrack, setSelectedTrack, setScreen } = useStore()
  const [catalog, setCatalog] = useState<QuestionCatalog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 10000))
  const [question, setQuestion] = useState<Question | null>(null)
  const [round, setRound] = useState<GuessRound>('wrapped')
  const [selected, setSelected] = useState<Answer | null>(null)
  const [score, setScore] = useState({ opened: 0, correct: 0 })

  const track = useMemo(() => allTracks.find((item) => item.id === selectedTrack) ?? null, [selectedTrack])

  useEffect(() => {
    let cancelled = false

    async function load() {
      if (!track) {
        setError('Pick a Guess game from the games shelf first.')
        setLoading(false)
        return
      }

      const catalogKey = questionCatalogKeyForTrack(track.id, track.ageGroup)
      if (!catalogKey) {
        setError('Floe could not find this mystery shelf.')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        const loaded = await loadQuestionCatalog(catalogKey)
        if (cancelled) return
        setCatalog(loaded)
      } catch {
        if (cancelled) return
        setError('The mystery shelf wobbled. Try another Guess game.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [track])

  const questions = useMemo(() => {
    if (!track || !catalog) return []
    return buildTrackQuiz(track, catalog).filter((item) => mediaList(item).length > 0)
  }, [catalog, track])

  useEffect(() => {
    if (!questions.length) return
    setQuestion((current) => current ?? nextQuestion(questions, null))
  }, [questions])

  const answers = useMemo(() => question ? shuffleAnswers(question, seed) : [], [question, seed])
  const image = question ? mediaList(question)[0] ?? null : null
  const correctAnswer = question?.answers.find((answer) => answer.correct) ?? null
  const isCorrect = selected?.correct ?? false
  const displayTitle = track?.title.replace(/^Guess the Thing:\s*/i, '').replace(/^Guess the Thing$/i, 'Guess the Thing') ?? 'Guess the Thing'

  const backToGames = () => {
    setSelectedTrack(null)
    setScreen('games')
  }

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

  const nextMystery = () => {
    const nextSeed = seed + 1
    setSeed(nextSeed)
    setQuestion((current) => nextQuestion(questions, current))
    setSelected(null)
    setRound('wrapped')
  }

  const reset = () => {
    setSeed(Math.floor(Math.random() * 10000))
    setQuestion(nextQuestion(questions, null))
    setSelected(null)
    setScore({ opened: 0, correct: 0 })
    setRound('wrapped')
  }

  if (loading || error || !track || !question) {
    return (
      <main className="app-shell present-shell guess-gift-shell">
        <TopBar title="Guess the Thing" showStats={false} />
        <section className="present-panel guess-gift-empty">
          <ImageIcon size={44} />
          <h2>{loading ? 'Floe is shuffling the mystery shelf.' : error ?? 'No visual mysteries found here yet.'}</h2>
          <button type="button" onClick={backToGames}>
            <ArrowLeft size={16} /> Back to games
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell present-shell guess-gift-shell">
      <TopBar title={displayTitle} showStats={false} />
      <section className="present-layout">
        <article className="present-hero guess-gift-hero">
          <div>
            <p className="eyebrow">Mystery shelf</p>
            <h2>{displayTitle}</h2>
            <p>A tiny shelf of visual clues. Open a box, trust your eyes, and see what Floe found.</p>
          </div>
          <div className="present-actions">
            <button type="button" onClick={backToGames}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className={`present-stage guess-gift-stage present-${round}`}>
          <details className="game-rules">
            <summary><HelpCircle size={14} /> How to play</summary>
            <div className="game-rules-body">
              <ol>
                <li>Tap the wrapped mystery to reveal one picture.</li>
                <li>Pick the best name from the four answers.</li>
                <li>Read the tiny explanation, then open another one.</li>
              </ol>
            </div>
          </details>

          <div className="present-score">
            <span>Opened {score.opened}</span>
            <strong>{score.correct} correct</strong>
          </div>

          <div className="gift-wrap" aria-live="polite">
            {round === 'wrapped' ? (
              <button className="gift-box guess-mystery-box" type="button" onClick={openGift} aria-label="Open this Guess the Thing mystery">
                <span className="gift-lid" />
                <span className="gift-ribbon" />
                <span className="gift-body" />
                <span className="gift-tag"><Gift size={22} /> Reveal it</span>
              </button>
            ) : (
              <div className="gift-reveal">
                <div className="gift-object-card">
                  {image ? <img src={image.src} alt={image.alt} /> : <PackageOpen size={92} />}
                </div>
                <div className="gift-question">
                  <p className="eyebrow">{question.chapter}</p>
                  <h3>What is it?</h3>
                  <p>{cleanGuessPrompt(question)}</p>
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
                <strong>{isCorrect ? 'That is the thing.' : `It was ${correctAnswer?.label ?? 'the hidden thing'}.`}</strong>
              </div>
              <p>{question.lesson}</p>
              <button type="button" onClick={nextMystery}>
                <PackageOpen size={16} /> Another mystery
              </button>
            </article>
          )}
        </section>
      </section>
    </main>
  )
}
