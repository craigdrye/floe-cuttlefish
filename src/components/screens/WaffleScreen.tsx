import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, RotateCcw, Trophy, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { wafflePuzzles, CELL_POSITIONS, CORNER_INDICES, letterIndicesForCol, letterIndicesForRow, type WafflePuzzle } from '../../data/wafflePuzzles'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyIndex, dailyRng } from '../../lib/dailyPuzzle'

type TileState = 'correct' | 'present-line' | 'absent'
type Status = 'playing' | 'won' | 'lost'
type PuzzleMode = 'daily' | 'bonus'

function pickRandomPuzzle(): WafflePuzzle {
  return wafflePuzzles[Math.floor(Math.random() * wafflePuzzles.length)]
}

function pickDailyPuzzle(dateKey: string): WafflePuzzle {
  return wafflePuzzles[dailyIndex('waffle', wafflePuzzles.length, dateKey)]
}

function shuffleNonCorners(solution: string, rng: () => number = Math.random): string {
  const tiles = solution.split('')
  const cornerSet = new Set<number>(CORNER_INDICES)
  const movableIdx: number[] = []
  for (let i = 0; i < tiles.length; i += 1) {
    if (!cornerSet.has(i)) movableIdx.push(i)
  }
  // Collect movable letters, shuffle, place back ensuring no tile is in its original spot (best effort)
  const movableLetters = movableIdx.map((i) => tiles[i])
  // Fisher-Yates
  for (let i = movableLetters.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    ;[movableLetters[i], movableLetters[j]] = [movableLetters[j], movableLetters[i]]
  }
  // Place back
  movableIdx.forEach((cellIdx, k) => {
    tiles[cellIdx] = movableLetters[k]
  })
  return tiles.join('')
}

// Compute per-tile state for Waffle coloring.
// "correct" — tile matches solution at this index
// "present-line" — tile letter appears in this tile's row OR col solution (depending on whether
//   the cell is on an across word, a down word, or both)
// "absent" — otherwise
function computeStates(current: string, solution: string): TileState[] {
  const states: TileState[] = new Array(21).fill('absent')

  for (let i = 0; i < 21; i += 1) {
    if (current[i] === solution[i]) {
      states[i] = 'correct'
      continue
    }

    const [r, c] = CELL_POSITIONS[i]
    const inAcrossRow = r === 0 || r === 2 || r === 4
    const inDownCol = c === 0 || c === 2 || c === 4

    const collectLine = (indices: readonly number[]) => indices.map((idx) => solution[idx]).join('')

    let lineLetters = ''
    if (inAcrossRow) lineLetters += collectLine(letterIndicesForRow(r as 0 | 2 | 4))
    if (inDownCol) lineLetters += collectLine(letterIndicesForCol(c as 0 | 2 | 4))

    if (lineLetters.includes(current[i])) states[i] = 'present-line'
  }

  return states
}

function isSolved(current: string, solution: string): boolean {
  return current === solution
}

export function WaffleScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('waffle')
  const [puzzle, setPuzzle] = useState<WafflePuzzle | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [tiles, setTiles] = useState<string>('')
  const [selected, setSelected] = useState<number | null>(null)
  const [swapsLeft, setSwapsLeft] = useState<number>(0)

  useEffect(() => {
    if (puzzle !== null) return
    if (daily.phase === 'daily') {
      const next = pickDailyPuzzle(daily.date)
      setPuzzle(next)
      setPuzzleMode('daily')
      setTiles(shuffleNonCorners(next.solution, dailyRng('waffle:shuffle', daily.date)))
      setSelected(null)
      setSwapsLeft(next.swapBudget)
    }
  }, [daily.phase, daily.date, puzzle])

  const states = useMemo(() => puzzle ? computeStates(tiles, puzzle.solution) : [], [tiles, puzzle])
  const solved = puzzle ? isSolved(tiles, puzzle.solution) : false
  const outOfSwaps = puzzle ? swapsLeft <= 0 && !solved : false
  const status: Status = !puzzle ? 'playing' : solved ? 'won' : outOfSwaps ? 'lost' : 'playing'

  useEffect(() => {
    if (!puzzle) return
    if (status === 'won') playSuccessSound()
    else if (status === 'lost') playWrongSound()
    if ((status === 'won' || status === 'lost') && puzzleMode === 'daily') {
      daily.finishDaily()
    }
  }, [status, puzzle, puzzleMode, daily])

  const clickTile = useCallback((idx: number) => {
    if (status !== 'playing') return
    if (states[idx] === 'correct') return
    if (selected === null) {
      setSelected(idx)
      return
    }
    if (selected === idx) {
      setSelected(null)
      return
    }
    // Swap
    const next = tiles.split('')
    ;[next[selected], next[idx]] = [next[idx], next[selected]]
    setTiles(next.join(''))
    setSelected(null)
    setSwapsLeft((s) => Math.max(0, s - 1))
  }, [selected, states, status, tiles])

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    const next = pickRandomPuzzle()
    setPuzzle(next)
    setPuzzleMode('bonus')
    setTiles(shuffleNonCorners(next.solution))
    setSelected(null)
    setSwapsLeft(next.swapBudget)
  }, [daily])

  const reshuffle = useCallback(() => {
    if (!puzzle) return
    setTiles(shuffleNonCorners(puzzle.solution))
    setSelected(null)
    setSwapsLeft(puzzle.swapBudget)
  }, [puzzle])

  return (
    <main className="app-shell waffle-shell">
      <TopBar title="Waffle" />

      <section className="waffle-layout">
        <article className="waffle-hero">
          <div>
            <p className="eyebrow">Word swap</p>
            <h2>Restore six crossing words.</h2>
            <p>Tap a tile, then another, to swap. Green = locked. Yellow = right line, wrong spot.</p>
          </div>
          <div className="waffle-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reshuffle}>
              <RotateCcw size={16} /> Reshuffle
            </button>
          </div>
        </article>

        <section className="waffle-stage">
          <DailyPuzzleBanner daily={daily} />
          <details className="game-rules">
            <summary><HelpCircle size={14} /> How to play Waffle</summary>
            <div className="game-rules-body">
              <ol>
                <li>21 letter tiles are scrambled across a 5×5 grid (the 4 inner gaps stay empty).</li>
                <li>The solution is <strong>six valid 5-letter words</strong>: 3 across (top, middle, bottom rows) and 3 down (left, middle, right columns) — they share corners.</li>
                <li>Tap any tile, then tap another tile, to <strong>swap them</strong>.</li>
                <li>Tile colors guide you:
                  <ul>
                    <li><span className="game-rules-swatch correct" /><strong>Green</strong> — letter is already in the right spot (you can't move it again).</li>
                    <li><span className="game-rules-swatch present" /><strong>Yellow</strong> — letter belongs in this row or column, but not at this exact spot.</li>
                    <li><span className="game-rules-swatch absent" /><strong>Gray</strong> — letter doesn't belong on this line at all.</li>
                  </ul>
                </li>
                <li>You only have a fixed <strong>swap budget</strong> — solve before it hits zero.</li>
              </ol>
            </div>
          </details>

          {puzzle === null && daily.phase === 'bonus' && (
            <div className="waffle-result win">
              <Trophy size={18} />
              <strong>Daily already solved.</strong> Want a bonus puzzle? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus puzzle</button>
            </div>
          )}
          {puzzle === null && daily.phase === 'locked' && (
            <div className="waffle-result lose">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}

          {puzzle && <div className="waffle-meta">
            <span>Swaps left: <strong>{swapsLeft}</strong> / {puzzle.swapBudget}</span>
          </div>}

          {puzzle && <div className="waffle-grid">
            {Array.from({ length: 5 * 5 }).map((_, gridIdx) => {
              const row = Math.floor(gridIdx / 5)
              const col = gridIdx % 5
              const cellIdx = CELL_POSITIONS.findIndex(([r, c]) => r === row && c === col)
              if (cellIdx === -1) return <span key={gridIdx} className="waffle-cell empty" aria-hidden />
              const isSelected = selected === cellIdx
              const state = states[cellIdx]
              const isCorner = CORNER_INDICES.includes(cellIdx as typeof CORNER_INDICES[number])
              return (
                <button
                  key={gridIdx}
                  type="button"
                  className={`waffle-cell tile state-${state} ${isSelected ? 'selected' : ''} ${isCorner ? 'corner' : ''}`}
                  onClick={() => clickTile(cellIdx)}
                  disabled={status !== 'playing' || state === 'correct'}
                >
                  {tiles[cellIdx]}
                </button>
              )
            })}
          </div>}

          {status === 'won' && puzzle !== null && (
            <div className="waffle-result win">
              <Trophy size={18} />
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> {swapsLeft} swap{swapsLeft === 1 ? '' : 's'} to spare.
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
          {status === 'lost' && puzzle !== null && (
            <div className="waffle-result lose">
              <strong>Out of swaps.</strong> Want a fresh shuffle?
              <button type="button" onClick={reshuffle}>Reshuffle</button>
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
        </section>
      </section>
    </main>
  )
}
