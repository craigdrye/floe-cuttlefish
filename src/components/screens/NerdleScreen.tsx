import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyRng } from '../../lib/dailyPuzzle'

type CellState = 'correct' | 'present' | 'absent' | 'pending' | 'empty'
type GameStatus = 'playing' | 'won' | 'lost'
type PuzzleMode = 'daily' | 'bonus'

const EQ_LEN = 8
const MAX_GUESSES = 6
const VALID_CHARS = new Set('0123456789+-*/='.split(''))

const DIGITS = '0123456789'.split('')
const OPS = ['+', '-', '*', '/']

function evalSafe(expr: string): number | null {
  if (!/^[\d+\-*/]+$/.test(expr)) return null
  if (/^[+\-*/]/.test(expr) || /[+\-*/]$/.test(expr)) return null
  if (/[+\-*/]{2,}/.test(expr)) return null
  try {
    const val = Function(`"use strict"; return (${expr})`)()
    if (typeof val !== 'number' || !Number.isFinite(val)) return null
    return val
  } catch {
    return null
  }
}

function isValidEquation(eq: string): boolean {
  const parts = eq.split('=')
  if (parts.length !== 2) return false
  const [lhs, rhs] = parts
  if (!lhs || !rhs) return false
  // RHS must be a pure non-negative integer (no leading zero unless single digit)
  if (!/^(0|[1-9]\d*)$/.test(rhs)) return false
  const lhsVal = evalSafe(lhs)
  if (lhsVal === null) return false
  if (!Number.isInteger(lhsVal)) return false
  return lhsVal === parseInt(rhs, 10)
}

function buildEquation(pattern: number, rng: () => number): string | null {
  if (pattern === 0) {
    const a = 10 + Math.floor(rng() * 90)
    const b = 10 + Math.floor(rng() * 90)
    const op = OPS[Math.floor(rng() * 3)] // skip /
    const result = op === '+' ? a + b : op === '-' ? a - b : a * b
    if (result < 0) return null
    return `${a}${op}${b}=${result}`
  }
  if (pattern === 1) {
    const a = 2 + Math.floor(rng() * 8)
    const b = 10 + Math.floor(rng() * 90)
    return `${a}*${b}=${a * b}`
  }
  if (pattern === 2) {
    const a = 1 + Math.floor(rng() * 9)
    const b = 1 + Math.floor(rng() * 9)
    const c = 1 + Math.floor(rng() * 9)
    const op1 = OPS[Math.floor(rng() * 3)]
    const op2 = OPS[Math.floor(rng() * 3)]
    const expr = `${a}${op1}${b}${op2}${c}`
    const result = evalSafe(expr)
    if (result === null || result < 0 || !Number.isInteger(result)) return null
    return `${expr}=${result}`
  }
  const a = 100 + Math.floor(rng() * 900)
  const b = 10 + Math.floor(rng() * 90)
  const result = a - b
  if (result < 0) return null
  return `${a}-${b}=${result}`
}

function generateSolution(rng: () => number = Math.random): string {
  for (let attempts = 0; attempts < 2000; attempts += 1) {
    const eq = buildEquation(Math.floor(rng() * 4), rng)
    if (eq && eq.length === EQ_LEN && isValidEquation(eq)) return eq
  }
  return '12+34=46'
}

function evaluateGuess(guess: string, solution: string): CellState[] {
  const result: CellState[] = new Array(EQ_LEN).fill('absent')
  const counts: Record<string, number> = {}
  for (const ch of solution) counts[ch] = (counts[ch] ?? 0) + 1
  for (let i = 0; i < EQ_LEN; i += 1) {
    if (guess[i] === solution[i]) {
      result[i] = 'correct'
      counts[guess[i]] -= 1
    }
  }
  for (let i = 0; i < EQ_LEN; i += 1) {
    if (result[i] !== 'correct' && counts[guess[i]] > 0) {
      result[i] = 'present'
      counts[guess[i]] -= 1
    }
  }
  return result
}

function rank(prev: CellState | undefined, next: CellState): CellState {
  const order: CellState[] = ['empty', 'absent', 'present', 'correct']
  if (!prev) return next
  return order.indexOf(next) > order.indexOf(prev) ? next : prev
}

export function NerdleScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('nerdle')
  const [solution, setSolution] = useState<string | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [guesses, setGuesses] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [status, setStatus] = useState<GameStatus>('playing')
  const [toast, setToast] = useState<string | null>(null)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (solution !== null) return
    if (daily.phase === 'daily') {
      setSolution(generateSolution(dailyRng('nerdle', daily.date)))
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

  const charStates: Record<string, CellState> = useMemo(() => {
    const map: Record<string, CellState> = {}
    guesses.forEach((g, gi) => {
      const ev = evaluations[gi]
      for (let i = 0; i < EQ_LEN; i += 1) {
        map[g[i]] = rank(map[g[i]], ev[i])
      }
    })
    return map
  }, [guesses, evaluations])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setShake(true)
    setTimeout(() => setShake(false), 450)
    setTimeout(() => setToast(null), 1600)
  }, [])

  const submit = useCallback(() => {
    if (status !== 'playing' || !solution) return
    if (current.length !== EQ_LEN) {
      showToast(`Need ${EQ_LEN} characters`)
      return
    }
    if (!isValidEquation(current)) {
      showToast('Not a valid equation')
      return
    }
    const next = [...guesses, current]
    setGuesses(next)
    setCurrent('')
    let resolved: GameStatus | null = null
    if (current === solution) {
      setStatus('won')
      playSuccessSound()
      resolved = 'won'
    } else if (next.length >= MAX_GUESSES) {
      setStatus('lost')
      playWrongSound()
      resolved = 'lost'
    }
    if (resolved && puzzleMode === 'daily') daily.finishDaily()
  }, [current, daily, guesses, puzzleMode, solution, status, showToast])

  const push = useCallback((ch: string) => {
    if (status !== 'playing') return
    if (current.length >= EQ_LEN) return
    if (!VALID_CHARS.has(ch)) return
    setCurrent((c) => c + ch)
  }, [current.length, status])

  const pop = useCallback(() => {
    if (status !== 'playing') return
    setCurrent((c) => c.slice(0, -1))
  }, [status])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Enter') { submit(); e.preventDefault() }
      else if (e.key === 'Backspace') { pop(); e.preventDefault() }
      else if (VALID_CHARS.has(e.key)) { push(e.key); e.preventDefault() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [push, pop, submit])

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    setSolution(generateSolution())
    setPuzzleMode('bonus')
    setGuesses([])
    setCurrent('')
    setStatus('playing')
    setToast(null)
  }, [daily])

  return (
    <main className="app-shell nerdle-shell">
      <TopBar title="Nerdle" />

      <section className="nerdle-layout">
        <article className="nerdle-hero">
          <div>
            <p className="eyebrow">Math equation puzzle</p>
            <h2>Guess the hidden equation.</h2>
            <p>Eight characters. Six tries. Same color rules as Wordle.</p>
          </div>
          <div className="nerdle-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
          </div>
        </article>

        <section className="nerdle-stage">
          <DailyPuzzleBanner daily={daily} />
          {toast && <div className="nerdle-toast" role="status">{toast}</div>}

          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Nerdle</summary>
            <div className="game-rules-body">
              <ol>
                <li>The hidden answer is an <strong>8-character equation</strong>, e.g. <kbd>12+34=46</kbd>.</li>
                <li>Valid characters: digits <kbd>0-9</kbd> and operators <kbd>+ - * /</kbd> <kbd>=</kbd>.</li>
                <li>Every guess must be a <strong>mathematically valid equation</strong> — both sides must evaluate equal, with normal <strong>*/</strong> before <strong>+/-</strong> precedence.</li>
                <li>You get <strong>6 tries</strong>. After each guess, cells flip to show:
                  <ul>
                    <li><span className="game-rules-swatch correct" />Right character, right spot</li>
                    <li><span className="game-rules-swatch present" />Right character, wrong spot</li>
                    <li><span className="game-rules-swatch absent" />Not in the equation</li>
                  </ul>
                </li>
                <li>The right-hand side is a non-negative whole number with no leading zeros.</li>
              </ol>
            </div>
          </details>

          <div className={`nerdle-board ${shake ? 'shaking' : ''}`}>
            {Array.from({ length: MAX_GUESSES }).map((_, rowIdx) => {
              const isCurrentRow = rowIdx === guesses.length && status === 'playing'
              const row = guesses[rowIdx] ?? (isCurrentRow ? current.padEnd(EQ_LEN, ' ') : ' '.repeat(EQ_LEN))
              const ev = evaluations[rowIdx]
              return (
                <div key={rowIdx} className="nerdle-row">
                  {Array.from({ length: EQ_LEN }).map((__, colIdx) => {
                    const ch = row[colIdx]?.trim() ?? ''
                    const state: CellState = ev ? ev[colIdx] : ch ? 'pending' : 'empty'
                    return (
                      <span
                        key={colIdx}
                        className={`nerdle-tile state-${state} ${ch ? 'filled' : ''}`}
                        style={{ animationDelay: ev ? `${colIdx * 0.08}s` : undefined }}
                      >
                        {ch}
                      </span>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {solution === null && daily.phase === 'bonus' && (
            <div className="nerdle-result win">
              <strong>Daily already solved.</strong> Want a bonus equation? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus equation</button>
            </div>
          )}
          {solution === null && daily.phase === 'locked' && (
            <div className="nerdle-result lose">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}
          {status === 'won' && solution !== null && (
            <div className="nerdle-result win">
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> {guesses.length} {guesses.length === 1 ? 'try' : 'tries'}.
              {daily.phase === 'bonus' && (
                <button type="button" onClick={startBonusPuzzle}>
                  Play bonus equation ({daily.bonusRemaining} left)
                </button>
              )}
              {daily.phase === 'locked' && (
                <button type="button" disabled>Come back tomorrow</button>
              )}
            </div>
          )}
          {status === 'lost' && solution !== null && (
            <div className="nerdle-result lose">
              <strong>Out of guesses.</strong> The answer was <em>{solution}</em>.
              {daily.phase === 'bonus' && (
                <button type="button" onClick={startBonusPuzzle}>
                  Play bonus equation ({daily.bonusRemaining} left)
                </button>
              )}
              {daily.phase === 'locked' && (
                <button type="button" disabled>Come back tomorrow</button>
              )}
            </div>
          )}

          <div className="nerdle-keyboard">
            <div className="nerdle-key-row">
              {DIGITS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`nerdle-key state-${charStates[d] ?? 'empty'}`}
                  onClick={() => push(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="nerdle-key-row">
              {OPS.map((op) => (
                <button
                  key={op}
                  type="button"
                  className={`nerdle-key state-${charStates[op] ?? 'empty'}`}
                  onClick={() => push(op)}
                >
                  {op}
                </button>
              ))}
              <button
                type="button"
                className={`nerdle-key state-${charStates['='] ?? 'empty'}`}
                onClick={() => push('=')}
              >
                =
              </button>
              <button type="button" className="nerdle-key action" onClick={pop} aria-label="Backspace">
                <Delete size={16} />
              </button>
              <button type="button" className="nerdle-key action wide" onClick={submit}>
                Enter
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
