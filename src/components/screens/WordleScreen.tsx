import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, RotateCcw, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { wordleWords, wordleWordSet } from '../../data/wordleWords'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

type LetterState = 'correct' | 'present' | 'absent' | 'pending' | 'empty'
type GameStatus = 'playing' | 'won' | 'lost'

const WORD_LEN = 5
const MAX_GUESSES = 6

const ROW_1 = 'QWERTYUIOP'.split('')
const ROW_2 = 'ASDFGHJKL'.split('')
const ROW_3 = ['ENTER', ...'ZXCVBNM'.split(''), 'BACK']

function pickSolution(): string {
  const idx = Math.floor(Math.random() * wordleWords.length)
  return wordleWords[idx].toUpperCase()
}

function evaluateGuess(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = new Array(WORD_LEN).fill('absent')
  const counts: Record<string, number> = {}
  for (const ch of solution) counts[ch] = (counts[ch] ?? 0) + 1
  // First pass: correct
  for (let i = 0; i < WORD_LEN; i += 1) {
    if (guess[i] === solution[i]) {
      result[i] = 'correct'
      counts[guess[i]] -= 1
    }
  }
  // Second pass: present
  for (let i = 0; i < WORD_LEN; i += 1) {
    if (result[i] !== 'correct' && counts[guess[i]] > 0) {
      result[i] = 'present'
      counts[guess[i]] -= 1
    }
  }
  return result
}

function rankState(prev: LetterState | undefined, next: LetterState): LetterState {
  const order: LetterState[] = ['empty', 'absent', 'present', 'correct']
  if (!prev) return next
  return order.indexOf(next) > order.indexOf(prev) ? next : prev
}

export function WordleScreen() {
  const { setScreen } = useStore()
  const [solution, setSolution] = useState<string>(pickSolution)
  const [guesses, setGuesses] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [status, setStatus] = useState<GameStatus>('playing')
  const [shake, setShake] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const evaluations = useMemo(
    () => guesses.map((g) => evaluateGuess(g, solution)),
    [guesses, solution],
  )

  const letterStates: Record<string, LetterState> = useMemo(() => {
    const map: Record<string, LetterState> = {}
    guesses.forEach((g, gIdx) => {
      const ev = evaluations[gIdx]
      for (let i = 0; i < WORD_LEN; i += 1) {
        map[g[i]] = rankState(map[g[i]], ev[i])
      }
    })
    return map
  }, [guesses, evaluations])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setShake(true)
    setTimeout(() => setShake(false), 450)
    setTimeout(() => setToast(null), 1400)
  }, [])

  const submitGuess = useCallback(() => {
    if (status !== 'playing') return
    if (current.length !== WORD_LEN) {
      showToast('Need 5 letters')
      return
    }
    if (!wordleWordSet.has(current.toLowerCase())) {
      showToast('Not in word list')
      return
    }
    const nextGuesses = [...guesses, current]
    setGuesses(nextGuesses)
    setCurrent('')
    if (current === solution) {
      setStatus('won')
      playSuccessSound()
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setStatus('lost')
      playWrongSound()
    }
  }, [current, guesses, showToast, solution, status])

  const pushLetter = useCallback((letter: string) => {
    if (status !== 'playing') return
    if (current.length >= WORD_LEN) return
    setCurrent((c) => c + letter)
  }, [current.length, status])

  const popLetter = useCallback(() => {
    if (status !== 'playing') return
    setCurrent((c) => c.slice(0, -1))
  }, [status])

  // Physical keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Enter') {
        submitGuess()
        e.preventDefault()
      } else if (e.key === 'Backspace') {
        popLetter()
        e.preventDefault()
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        pushLetter(e.key.toUpperCase())
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pushLetter, popLetter, submitGuess])

  const resetGame = () => {
    setSolution(pickSolution())
    setGuesses([])
    setCurrent('')
    setStatus('playing')
    setToast(null)
  }

  const onKeyPress = (key: string) => {
    if (key === 'ENTER') submitGuess()
    else if (key === 'BACK') popLetter()
    else pushLetter(key)
  }

  return (
    <main className="app-shell wordle-shell">
      <TopBar title="Floedle" />

      <section className="wordle-layout">
        <article className="wordle-hero">
          <div>
            <p className="eyebrow">Word puzzle</p>
            <h2>Six tries. One word.</h2>
            <p>Green = right letter, right spot. Yellow = right letter, wrong spot.</p>
          </div>
          <div className="wordle-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={resetGame}>
              <RotateCcw size={16} /> New word
            </button>
          </div>
        </article>

        <section className="wordle-stage">
          {toast && <div className="wordle-toast" role="status">{toast}</div>}

          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Floedle</summary>
            <div className="game-rules-body">
              <ol>
                <li>Guess the hidden <strong>5-letter word</strong> in <strong>6 tries</strong>.</li>
                <li>Every guess has to be a real 5-letter word (or it gets rejected).</li>
                <li>After each guess, the tiles flip to show how close you are:
                  <ul>
                    <li><span className="game-rules-swatch correct" />Right letter, <strong>right spot</strong></li>
                    <li><span className="game-rules-swatch present" />Right letter, <strong>wrong spot</strong></li>
                    <li><span className="game-rules-swatch absent" />Letter not in the word</li>
                  </ul>
                </li>
                <li>Type with your keyboard or tap the on-screen keys. <kbd>Enter</kbd> submits, <kbd>⌫</kbd> deletes.</li>
              </ol>
            </div>
          </details>

          <div className={`wordle-board ${shake ? 'shaking' : ''}`}>
            {Array.from({ length: MAX_GUESSES }).map((_, rowIdx) => {
              const isCurrentRow = rowIdx === guesses.length && status === 'playing'
              const guess = guesses[rowIdx] ?? (isCurrentRow ? current.padEnd(WORD_LEN, ' ') : '     ')
              const evalRow = evaluations[rowIdx]
              return (
                <div key={rowIdx} className="wordle-row">
                  {Array.from({ length: WORD_LEN }).map((__, colIdx) => {
                    const letter = guess[colIdx]?.trim() ?? ''
                    const state: LetterState = evalRow
                      ? evalRow[colIdx]
                      : letter
                        ? 'pending'
                        : 'empty'
                    return (
                      <span
                        key={colIdx}
                        className={`wordle-tile state-${state} ${letter ? 'filled' : ''}`}
                        style={{ animationDelay: evalRow ? `${colIdx * 0.12}s` : undefined }}
                      >
                        {letter}
                      </span>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {status === 'won' && (
            <div className="wordle-result wordle-result-win">
              <strong>Nice work.</strong> You got it in {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}.
              <button type="button" onClick={resetGame}>Play again</button>
            </div>
          )}
          {status === 'lost' && (
            <div className="wordle-result wordle-result-lose">
              <strong>Out of guesses.</strong> The word was <em>{solution}</em>.
              <button type="button" onClick={resetGame}>Try another</button>
            </div>
          )}

          <div className="wordle-keyboard" role="group" aria-label="Wordle keyboard">
            {[ROW_1, ROW_2, ROW_3].map((row, rIdx) => (
              <div key={rIdx} className="wordle-keyboard-row">
                {row.map((key) => {
                  const isAction = key === 'ENTER' || key === 'BACK'
                  const state = isAction ? '' : letterStates[key] ?? 'empty'
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`wordle-key ${isAction ? 'action' : ''} state-${state}`}
                      onClick={() => onKeyPress(key)}
                      aria-label={key === 'BACK' ? 'Backspace' : key}
                    >
                      {key === 'BACK' ? <Delete size={16} /> : key}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
