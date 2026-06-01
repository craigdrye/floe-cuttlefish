import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { wordleWords } from '../../data/wordleWords'
import { wordleValidGuesses } from '../../data/wordleValidGuesses'
import { wordsForInterests } from '../../data/wordleInterestWords'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyRng } from '../../lib/dailyPuzzle'
import { wordleKeyColor } from '../../lib/wordleKeyColors'
import type { CourseTopicId } from '../../lib/coursePersonalization'

type LetterState = 'correct' | 'present' | 'absent' | 'pending' | 'empty'
type GameStatus = 'playing' | 'won' | 'lost'
type PuzzleMode = 'daily' | 'bonus'

const WORD_LEN = 5
const MAX_GUESSES = 6
// When the player has interests selected, this fraction of solutions is drawn
// from the interest sub-pool. Remainder uses the general pool. 0.65 gives
// strong topical bias while keeping enough variety to avoid feeling repetitive.
const INTEREST_BIAS = 0.65

const ROW_1 = 'QWERTYUIOP'.split('')
const ROW_2 = 'ASDFGHJKL'.split('')
const ROW_3 = ['ENTER', ...'ZXCVBNM'.split(''), 'BACK']

function pickRandomSolution(interestIds: ReadonlyArray<CourseTopicId> = []): string {
  const interestPool = wordsForInterests(interestIds)
  const useInterest = interestPool.length > 0 && Math.random() < INTEREST_BIAS
  const pool = useInterest ? interestPool : wordleWords
  const idx = Math.floor(Math.random() * pool.length)
  return pool[idx].toUpperCase()
}

// Daily picks from the general pool only so every player sees the same word.
function pickDailySolution(dateKey: string): string {
  const rng = dailyRng('wordle', dateKey)
  const idx = Math.floor(rng() * wordleWords.length)
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
  const { setScreen, selectedInterests } = useStore()
  const daily = useDailyPuzzle('wordle')

  // `null` means no puzzle is loaded — the screen shows a CTA card instead of the board.
  const [solution, setSolution] = useState<string | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [guesses, setGuesses] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [status, setStatus] = useState<GameStatus>('playing')
  const [shake, setShake] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  // Auto-load the daily puzzle the first time the player opens the screen each day.
  useEffect(() => {
    if (solution !== null) return
    if (daily.phase === 'daily') {
      setSolution(pickDailySolution(daily.date))
      setPuzzleMode('daily')
      setGuesses([])
      setCurrent('')
      setStatus('playing')
    }
  }, [daily.phase, daily.date, solution])

  const evaluations = useMemo(
    () => solution ? guesses.map((g) => evaluateGuess(g, solution)) : [],
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
    if (!solution) return
    if (current.length !== WORD_LEN) {
      showToast('Need 5 letters')
      return
    }
    if (!wordleValidGuesses.has(current.toLowerCase())) {
      showToast('Not in word list')
      return
    }
    const nextGuesses = [...guesses, current]
    setGuesses(nextGuesses)
    setCurrent('')
    let resolved: GameStatus | null = null
    if (current === solution) {
      setStatus('won')
      playSuccessSound()
      resolved = 'won'
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setStatus('lost')
      playWrongSound()
      resolved = 'lost'
    }
    if (resolved && puzzleMode === 'daily') {
      daily.finishDaily()
    }
  }, [current, daily, guesses, puzzleMode, showToast, solution, status])

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

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    setSolution(pickRandomSolution(selectedInterests))
    setPuzzleMode('bonus')
    setGuesses([])
    setCurrent('')
    setStatus('playing')
    setToast(null)
  }, [daily, selectedInterests])

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
          </div>
        </article>

        <section className="wordle-stage">
          <DailyPuzzleBanner daily={daily} />
          {toast && <div className="wordle-toast" role="status">{toast}</div>}

          <details className="game-rules">
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

          {solution === null && daily.phase === 'bonus' && (
            <div className="wordle-result wordle-result-win">
              <strong>Daily already solved.</strong> Want a bonus puzzle? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus puzzle</button>
            </div>
          )}
          {solution === null && daily.phase === 'locked' && (
            <div className="wordle-result wordle-result-lose">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow for a fresh word.
            </div>
          )}
          {status === 'won' && solution !== null && (
            <div className="wordle-result wordle-result-win">
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Nice work.'}</strong> You got it in {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}.
              {daily.phase === 'bonus' && (
                <button type="button" onClick={startBonusPuzzle}>
                  Play bonus puzzle ({daily.bonusRemaining} left)
                </button>
              )}
              {daily.phase === 'locked' && (
                <button type="button" disabled>Come back tomorrow</button>
              )}
            </div>
          )}
          {status === 'lost' && solution !== null && (
            <div className="wordle-result wordle-result-lose">
              <strong>Out of guesses.</strong> The word was <em>{solution}</em>.
              {daily.phase === 'bonus' && (
                <button type="button" onClick={startBonusPuzzle}>
                  Play bonus puzzle ({daily.bonusRemaining} left)
                </button>
              )}
              {daily.phase === 'locked' && (
                <button type="button" disabled>Come back tomorrow</button>
              )}
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
                      style={!isAction && state === 'empty' ? { background: wordleKeyColor(key), color: '#3a3450' } : undefined}
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
