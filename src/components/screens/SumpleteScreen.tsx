import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Check, HelpCircle, Trophy, X } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyRng } from '../../lib/dailyPuzzle'

type CellMark = 'kept' | 'crossed'
type Difficulty = 4 | 5 | 6 | 7
type PuzzleMode = 'daily' | 'bonus'

const DAILY_DIFFICULTY: Difficulty = 5

interface SumpletePuzzle {
  size: Difficulty
  values: number[][]
  keepMask: boolean[][]
  rowTargets: number[]
  colTargets: number[]
}

function generatePuzzle(size: Difficulty, rng: () => number = Math.random): SumpletePuzzle {
  const values: number[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 1 + Math.floor(rng() * 9)),
  )
  const keepMask: boolean[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => rng() < 0.55),
  )
  // Ensure each row & col has at least one kept cell so targets > 0 (more interesting)
  for (let r = 0; r < size; r += 1) {
    if (!keepMask[r].some(Boolean)) keepMask[r][Math.floor(rng() * size)] = true
  }
  for (let c = 0; c < size; c += 1) {
    let any = false
    for (let r = 0; r < size; r += 1) any = any || keepMask[r][c]
    if (!any) keepMask[Math.floor(rng() * size)][c] = true
  }
  const rowTargets = values.map((row, r) =>
    row.reduce((sum, v, c) => sum + (keepMask[r][c] ? v : 0), 0),
  )
  const colTargets: number[] = []
  for (let c = 0; c < size; c += 1) {
    let s = 0
    for (let r = 0; r < size; r += 1) if (keepMask[r][c]) s += values[r][c]
    colTargets.push(s)
  }
  return { size, values, keepMask, rowTargets, colTargets }
}

export function SumpleteScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('sumplete')
  const [difficulty, setDifficulty] = useState<Difficulty>(DAILY_DIFFICULTY)
  const [puzzle, setPuzzle] = useState<SumpletePuzzle | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  // user marks: undefined = undecided, 'kept' (default visually), 'crossed'
  const [marks, setMarks] = useState<Array<Array<CellMark | undefined>>>([])

  useEffect(() => {
    if (puzzle !== null) return
    if (daily.phase === 'daily') {
      const p = generatePuzzle(DAILY_DIFFICULTY, dailyRng('sumplete', daily.date))
      setPuzzle(p)
      setPuzzleMode('daily')
      setDifficulty(DAILY_DIFFICULTY)
      setMarks(Array.from({ length: p.size }, () => Array(p.size).fill(undefined)))
    }
  }, [daily.phase, daily.date, puzzle])

  const userRowSums = useMemo(() =>
    puzzle ? puzzle.values.map((row, r) =>
      row.reduce((sum, v, c) => sum + (marks[r][c] === 'crossed' ? 0 : v), 0),
    ) : [], [puzzle, marks])

  const userColSums = useMemo(() => {
    if (!puzzle) return []
    const sums: number[] = []
    for (let c = 0; c < puzzle.size; c += 1) {
      let s = 0
      for (let r = 0; r < puzzle.size; r += 1) {
        if (marks[r][c] !== 'crossed') s += puzzle.values[r][c]
      }
      sums.push(s)
    }
    return sums
  }, [puzzle, marks])

  const won = useMemo(() => {
    if (!puzzle) return false
    return userRowSums.every((s, r) => s === puzzle.rowTargets[r]) &&
           userColSums.every((s, c) => s === puzzle.colTargets[c])
  }, [userRowSums, userColSums, puzzle])

  useEffect(() => {
    if (!won) return
    playSuccessSound()
    if (puzzleMode === 'daily') daily.finishDaily()
  }, [won, puzzleMode, daily])

  const toggle = useCallback((r: number, c: number, target: CellMark) => {
    setMarks((m) => {
      const next = m.map((row) => [...row])
      next[r][c] = next[r][c] === target ? undefined : target
      return next
    })
  }, [])

  const startBonusPuzzle = useCallback((size: Difficulty = difficulty) => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    const p = generatePuzzle(size)
    setPuzzle(p)
    setPuzzleMode('bonus')
    setDifficulty(size)
    setMarks(Array.from({ length: p.size }, () => Array(p.size).fill(undefined)))
  }, [daily, difficulty])

  const changeDifficulty = (size: Difficulty) => {
    setDifficulty(size)
    // Changing difficulty only restarts the puzzle outside of daily-locked mode (i.e. on bonus rounds).
    if (puzzleMode !== 'daily') {
      const p = generatePuzzle(size)
      setPuzzle(p)
      setMarks(Array.from({ length: p.size }, () => Array(p.size).fill(undefined)))
    }
  }

  const revealHint = () => {
    if (!puzzle) return
    // Show one correct decision: pick a random cell whose mark mismatches the actual keepMask.
    const candidates: Array<[number, number]> = []
    for (let r = 0; r < puzzle.size; r += 1) {
      for (let c = 0; c < puzzle.size; c += 1) {
        const expected: CellMark = puzzle.keepMask[r][c] ? 'kept' : 'crossed'
        const userMark = marks[r][c] === 'crossed' ? 'crossed' : 'kept'
        if (userMark !== expected) candidates.push([r, c])
      }
    }
    if (candidates.length === 0) return
    const [r, c] = candidates[Math.floor(Math.random() * candidates.length)]
    setMarks((m) => {
      const next = m.map((row) => [...row])
      next[r][c] = puzzle.keepMask[r][c] ? 'kept' : 'crossed'
      return next
    })
    playWrongSound()
  }

  return (
    <main className="app-shell sumplete-shell">
      <TopBar title="Sumplete" />

      <section className="sumplete-layout">
        <article className="sumplete-hero">
          <div>
            <p className="eyebrow">Cross-out logic</p>
            <h2>Cross out numbers to hit every target.</h2>
            <p>Each row and column has a target. Cross out the right cells so the remaining values sum to it.</p>
          </div>
          <div className="sumplete-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            {puzzle && <button type="button" onClick={revealHint} disabled={won}>Hint</button>}
          </div>
        </article>

        <section className="sumplete-stage">
          <DailyPuzzleBanner daily={daily} />
          <details className="game-rules">
            <summary><HelpCircle size={14} /> How to play Sumplete</summary>
            <div className="game-rules-body">
              <ol>
                <li>Every row and every column has a <strong>target sum</strong> shown on the right and below.</li>
                <li>Cross out exactly the right cells so the <strong>kept (non-crossed) values</strong> in each row and column add up to its target.</li>
                <li><strong>Tap a cell</strong> (or its ✗ badge) to <strong>cross it out</strong>. Tap again to un-cross.</li>
                <li>Right-click a cell (or tap the ✓ badge) to mark it as <strong>definitely kept</strong> — useful for tracking your reasoning. Kept and unmarked cells both count toward the sum.</li>
                <li>Solve when every row and column matches its target.</li>
              </ol>
            </div>
          </details>

          {puzzleMode !== 'daily' && (
            <div className="sumplete-difficulty">
              <span>Size:</span>
              {([4, 5, 6, 7] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className={`sumplete-diff ${difficulty === sz ? 'active' : ''}`}
                  onClick={() => changeDifficulty(sz)}
                >
                  {sz}×{sz}
                </button>
              ))}
            </div>
          )}

          {puzzle === null && daily.phase === 'bonus' && (
            <div className="sumplete-result">
              <Trophy size={18} />
              <strong>Daily already solved.</strong> Pick a size and play a bonus puzzle. {daily.bonusRemaining} left today.
              <div className="sumplete-difficulty">
                <span>Size:</span>
                {([4, 5, 6, 7] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    className={`sumplete-diff ${difficulty === sz ? 'active' : ''}`}
                    onClick={() => setDifficulty(sz)}
                  >
                    {sz}×{sz}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => startBonusPuzzle(difficulty)}>Play bonus puzzle</button>
            </div>
          )}
          {puzzle === null && daily.phase === 'locked' && (
            <div className="sumplete-result">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}

          {puzzle && <div className="sumplete-board" style={{ '--size': puzzle.size } as React.CSSProperties}>
            <div className="sumplete-grid">
              {puzzle.values.map((row, r) => row.map((value, c) => {
                const mark = marks[r][c]
                return (
                  <button
                    key={`${r}-${c}`}
                    type="button"
                    className={`sumplete-cell ${mark ? `mark-${mark}` : ''}`}
                    onClick={() => toggle(r, c, 'crossed')}
                    onContextMenu={(e) => { e.preventDefault(); toggle(r, c, 'kept') }}
                    aria-label={`Cell value ${value}${mark ? `, marked ${mark}` : ''}`}
                  >
                    <span className="sumplete-value">{value}</span>
                    <span className="sumplete-cell-badge" aria-hidden>
                      {mark === 'kept' ? <Check size={12} /> : mark === 'crossed' ? <X size={12} /> : null}
                    </span>
                  </button>
                )
              }))}
            </div>

            <div className="sumplete-row-targets">
              {puzzle.rowTargets.map((t, r) => (
                <div
                  key={r}
                  className={`sumplete-target ${userRowSums[r] === t ? 'hit' : userRowSums[r] > t ? 'over' : 'under'}`}
                >
                  {t}
                  <span className="sumplete-target-current">{userRowSums[r]}</span>
                </div>
              ))}
            </div>

            <div className="sumplete-col-targets">
              {puzzle.colTargets.map((t, c) => (
                <div
                  key={c}
                  className={`sumplete-target ${userColSums[c] === t ? 'hit' : userColSums[c] > t ? 'over' : 'under'}`}
                >
                  {t}
                  <span className="sumplete-target-current">{userColSums[c]}</span>
                </div>
              ))}
            </div>
          </div>}

          {won && puzzle !== null && (
            <div className="sumplete-result">
              <Trophy size={18} />
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> All targets hit.
              {daily.phase === 'bonus' && (
                <button type="button" onClick={() => startBonusPuzzle(difficulty)}>
                  Play bonus puzzle ({daily.bonusRemaining} left)
                </button>
              )}
              {daily.phase === 'locked' && (
                <button type="button" disabled>Come back tomorrow</button>
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
