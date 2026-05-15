import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, RotateCcw, Check, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { wordleWords, wordleWordSet } from '../../data/wordleWords'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

type LetterState = 'correct' | 'present' | 'absent' | 'pending' | 'empty'
type GameStatus = 'playing' | 'won' | 'lost'

const WORD_LEN = 5
const ROW_1 = 'QWERTYUIOP'.split('')
const ROW_2 = 'ASDFGHJKL'.split('')
const ROW_3 = ['ENTER', ...'ZXCVBNM'.split(''), 'BACK']

interface MultiWordleScreenProps {
  boardCount: 4 | 8
  title: string
  subtitle: string
}

function pickSolutions(n: number): string[] {
  const picked = new Set<string>()
  while (picked.size < n) {
    picked.add(wordleWords[Math.floor(Math.random() * wordleWords.length)].toUpperCase())
  }
  return [...picked]
}

function evaluateGuess(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = new Array(WORD_LEN).fill('absent')
  const counts: Record<string, number> = {}
  for (const ch of solution) counts[ch] = (counts[ch] ?? 0) + 1
  for (let i = 0; i < WORD_LEN; i += 1) {
    if (guess[i] === solution[i]) {
      result[i] = 'correct'
      counts[guess[i]] -= 1
    }
  }
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

export function MultiWordleScreen({ boardCount, title, subtitle }: MultiWordleScreenProps) {
  const { setScreen } = useStore()
  const maxGuesses = boardCount + 5 // 9 for Quordle, 13 for Octordle (standard)

  const [solutions, setSolutions] = useState<string[]>(() => pickSolutions(boardCount))
  const [guesses, setGuesses] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [shake, setShake] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  // Per-board solved state
  const solvedAt: Array<number | null> = useMemo(() => {
    return solutions.map((sol) => {
      const idx = guesses.findIndex((g) => g === sol)
      return idx === -1 ? null : idx
    })
  }, [guesses, solutions])

  const allSolved = solvedAt.every((s) => s !== null)
  const outOfGuesses = guesses.length >= maxGuesses
  const status: GameStatus = allSolved ? 'won' : outOfGuesses ? 'lost' : 'playing'

  useEffect(() => {
    if (status === 'won') playSuccessSound()
    else if (status === 'lost') playWrongSound()
  }, [status])

  const evaluationsPerBoard: LetterState[][][] = useMemo(() => {
    return solutions.map((sol, boardIdx) => {
      const solveIdx = solvedAt[boardIdx]
      return guesses.map((g, gIdx) => {
        // Once a board is solved, stop evaluating subsequent guesses on it
        if (solveIdx !== null && gIdx > solveIdx) return new Array(WORD_LEN).fill('empty') as LetterState[]
        return evaluateGuess(g, sol)
      })
    })
  }, [guesses, solutions, solvedAt])

  // Per-board letter states for keyboard chips — combine across boards (take "best correct" rule per board, then aggregate weakest across boards is more accurate, but simplest is best-across-boards)
  const letterStates: Record<string, LetterState> = useMemo(() => {
    const map: Record<string, LetterState> = {}
    evaluationsPerBoard.forEach((boardEvals, boardIdx) => {
      const solveIdx = solvedAt[boardIdx]
      boardEvals.forEach((ev, gIdx) => {
        if (solveIdx !== null && gIdx > solveIdx) return
        const g = guesses[gIdx]
        for (let i = 0; i < WORD_LEN; i += 1) {
          map[g[i]] = rankState(map[g[i]], ev[i])
        }
      })
    })
    return map
  }, [evaluationsPerBoard, guesses, solvedAt])

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
    setGuesses((g) => [...g, current])
    setCurrent('')
  }, [current, showToast, status])

  const pushLetter = useCallback((letter: string) => {
    if (status !== 'playing') return
    if (current.length >= WORD_LEN) return
    setCurrent((c) => c + letter)
  }, [current.length, status])

  const popLetter = useCallback(() => {
    if (status !== 'playing') return
    setCurrent((c) => c.slice(0, -1))
  }, [status])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Enter') { submitGuess(); e.preventDefault() }
      else if (e.key === 'Backspace') { popLetter(); e.preventDefault() }
      else if (/^[a-zA-Z]$/.test(e.key)) { pushLetter(e.key.toUpperCase()); e.preventDefault() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pushLetter, popLetter, submitGuess])

  const resetGame = () => {
    setSolutions(pickSolutions(boardCount))
    setGuesses([])
    setCurrent('')
    setToast(null)
  }

  const onKeyPress = (key: string) => {
    if (key === 'ENTER') submitGuess()
    else if (key === 'BACK') popLetter()
    else pushLetter(key)
  }

  const sizeClass = boardCount === 4 ? 'quordle' : 'octordle'

  return (
    <main className={`app-shell wordle-shell wordle-multi-shell ${sizeClass}`}>
      <TopBar title={title} />

      <section className="wordle-layout">
        <article className="wordle-hero">
          <div>
            <p className="eyebrow">Word puzzle · {boardCount} boards</p>
            <h2>{subtitle}</h2>
            <p>Each guess applies to every board. {maxGuesses} guesses total.</p>
          </div>
          <div className="wordle-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={resetGame}>
              <RotateCcw size={16} /> New round
            </button>
          </div>
        </article>

        <section className="wordle-stage">
          {toast && <div className="wordle-toast" role="status">{toast}</div>}

          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play {title}</summary>
            <div className="game-rules-body">
              <ol>
                <li>You're solving <strong>{boardCount} hidden 5-letter words at once</strong>.</li>
                <li>Every guess types into <strong>every board</strong> simultaneously — so a guess earns four (or eight) bits of feedback.</li>
                <li>A board <strong>locks in</strong> the moment you solve it; you keep going on the rest.</li>
                <li>You get <strong>{maxGuesses} total guesses</strong>. Win by solving all {boardCount} before they run out.</li>
                <li>Same colors as Floedle:
                  <ul>
                    <li><span className="game-rules-swatch correct" />Right letter, right spot</li>
                    <li><span className="game-rules-swatch present" />Right letter, wrong spot</li>
                    <li><span className="game-rules-swatch absent" />Not in that board's word</li>
                  </ul>
                </li>
                <li>Tip: open with guesses that cover lots of common letters (e.g. <kbd>RAISE</kbd>, <kbd>CLOUT</kbd>) before committing.</li>
              </ol>
            </div>
          </details>

          <div className="wordle-progress">
            <span>
              Guess <strong>{Math.min(guesses.length + (status === 'playing' ? 1 : 0), maxGuesses)}</strong> / {maxGuesses}
            </span>
            <span>
              <strong>{solvedAt.filter((s) => s !== null).length}</strong> / {boardCount} solved
            </span>
          </div>

          <div className={`multi-wordle-grid ${sizeClass}`}>
            {solutions.map((sol, boardIdx) => {
              const boardEvals = evaluationsPerBoard[boardIdx]
              const isSolved = solvedAt[boardIdx] !== null
              const isLost = !isSolved && status === 'lost'
              return (
                <div
                  key={boardIdx}
                  className={`multi-wordle-board ${isSolved ? 'solved' : ''} ${isLost ? 'lost' : ''}`}
                >
                  <div className="multi-wordle-board-tag">
                    {isSolved && <Check size={14} />}
                    {isSolved ? sol : isLost ? sol : `#${boardIdx + 1}`}
                  </div>
                  <div className={`wordle-board mini ${shake ? 'shaking' : ''}`}>
                    {Array.from({ length: maxGuesses }).map((_, rowIdx) => {
                      const isCurrentRow = rowIdx === guesses.length && status === 'playing' && !isSolved
                      const guess = guesses[rowIdx] ?? (isCurrentRow ? current.padEnd(WORD_LEN, ' ') : '     ')
                      const evalRow = boardEvals[rowIdx]
                      const solveIdx = solvedAt[boardIdx]
                      const skippedAfterSolve = solveIdx !== null && rowIdx > solveIdx
                      return (
                        <div key={rowIdx} className="wordle-row mini">
                          {Array.from({ length: WORD_LEN }).map((__, colIdx) => {
                            const letter = skippedAfterSolve ? '' : (guess[colIdx]?.trim() ?? '')
                            const state: LetterState = !skippedAfterSolve && evalRow && rowIdx < guesses.length
                              ? evalRow[colIdx]
                              : letter
                                ? 'pending'
                                : 'empty'
                            return (
                              <span
                                key={colIdx}
                                className={`wordle-tile mini state-${state} ${letter ? 'filled' : ''}`}
                                style={{ animationDelay: evalRow && rowIdx < guesses.length ? `${colIdx * 0.08}s` : undefined }}
                              >
                                {letter}
                              </span>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {status === 'won' && (
            <div className="wordle-result wordle-result-win">
              <strong>Cleared all {boardCount}.</strong> Used {guesses.length} of {maxGuesses} guesses.
              <button type="button" onClick={resetGame}>Play again</button>
            </div>
          )}
          {status === 'lost' && (
            <div className="wordle-result wordle-result-lose">
              <strong>Out of guesses.</strong> Missed {solvedAt.filter((s) => s === null).length} of {boardCount}.
              <button type="button" onClick={resetGame}>Try another round</button>
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

export function QuordleScreen() {
  return <MultiWordleScreen boardCount={4} title="Quordle" subtitle="Four words. Nine guesses." />
}

export function OctordleScreen() {
  return <MultiWordleScreen boardCount={8} title="Octordle" subtitle="Eight words. Thirteen guesses." />
}
