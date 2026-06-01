import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, HelpCircle, RotateCcw, Trophy } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

type Grid = number[][]
type Direction = 'left' | 'right' | 'up' | 'down'

const SIZE = 4
const WIN_TILE = 2048

function emptyGrid(): Grid {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0))
}

function clone(g: Grid): Grid {
  return g.map((row) => [...row])
}

function emptyCells(g: Grid): Array<[number, number]> {
  const cells: Array<[number, number]> = []
  for (let r = 0; r < SIZE; r += 1) {
    for (let c = 0; c < SIZE; c += 1) {
      if (g[r][c] === 0) cells.push([r, c])
    }
  }
  return cells
}

function spawn(g: Grid): Grid {
  const empties = emptyCells(g)
  if (empties.length === 0) return g
  const [r, c] = empties[Math.floor(Math.random() * empties.length)]
  const next = clone(g)
  next[r][c] = Math.random() < 0.9 ? 2 : 4
  return next
}

function transpose(g: Grid): Grid {
  return Array.from({ length: SIZE }, (_, r) =>
    Array.from({ length: SIZE }, (__, c) => g[c][r]),
  )
}

function reverseRows(g: Grid): Grid {
  return g.map((row) => [...row].reverse())
}

function slideLeft(g: Grid): { grid: Grid; gained: number; changed: boolean } {
  let gained = 0
  let changed = false
  const next = g.map((row) => {
    const filtered = row.filter((v) => v !== 0)
    const merged: number[] = []
    let i = 0
    while (i < filtered.length) {
      if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
        const value = filtered[i] * 2
        merged.push(value)
        gained += value
        i += 2
      } else {
        merged.push(filtered[i])
        i += 1
      }
    }
    while (merged.length < SIZE) merged.push(0)
    for (let j = 0; j < SIZE; j += 1) {
      if (row[j] !== merged[j]) changed = true
    }
    return merged
  })
  return { grid: next, gained, changed }
}

function moveGrid(g: Grid, dir: Direction): { grid: Grid; gained: number; changed: boolean } {
  // Normalize all directions to "slide left", then unwind.
  let work: Grid
  if (dir === 'left') work = g
  else if (dir === 'right') work = reverseRows(g)
  else if (dir === 'up') work = transpose(g)
  else work = reverseRows(transpose(g)) // down

  const { grid: slid, gained, changed } = slideLeft(work)

  let out: Grid
  if (dir === 'left') out = slid
  else if (dir === 'right') out = reverseRows(slid)
  else if (dir === 'up') out = transpose(slid)
  else out = transpose(reverseRows(slid)) // down

  return { grid: out, gained, changed }
}

function canMove(g: Grid): boolean {
  if (emptyCells(g).length > 0) return true
  for (let r = 0; r < SIZE; r += 1) {
    for (let c = 0; c < SIZE; c += 1) {
      if (r + 1 < SIZE && g[r][c] === g[r + 1][c]) return true
      if (c + 1 < SIZE && g[r][c] === g[r][c + 1]) return true
    }
  }
  return false
}

function hasWon(g: Grid): boolean {
  for (const row of g) for (const v of row) if (v >= WIN_TILE) return true
  return false
}

function newGame(): Grid {
  let g = emptyGrid()
  g = spawn(g)
  g = spawn(g)
  return g
}

export function Game2048Screen() {
  const { setScreen } = useStore()
  const [grid, setGrid] = useState<Grid>(newGame)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('floe-2048-best') : null
    return stored ? parseInt(stored, 10) || 0 : 0
  })
  const [won, setWon] = useState(false)
  const [keepPlaying, setKeepPlaying] = useState(false)
  const lostRef = useRef(false)
  const lost = !canMove(grid)

  const doMove = useCallback((dir: Direction) => {
    if (lostRef.current) return
    if (won && !keepPlaying) return
    setGrid((g) => {
      const { grid: next, gained, changed } = moveGrid(g, dir)
      if (!changed) return g
      const spawned = spawn(next)
      if (gained > 0) {
        setScore((s) => {
          const newScore = s + gained
          setBest((b) => {
            if (newScore > b) {
              if (typeof localStorage !== 'undefined') localStorage.setItem('floe-2048-best', String(newScore))
              return newScore
            }
            return b
          })
          return newScore
        })
      }
      if (!won && hasWon(spawned)) {
        setWon(true)
        playSuccessSound()
      }
      return spawned
    })
  }, [won, keepPlaying])

  useEffect(() => {
    if (lost && !lostRef.current) {
      lostRef.current = true
      playWrongSound()
    }
  }, [lost])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      let dir: Direction | null = null
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') dir = 'left'
      else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') dir = 'right'
      else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') dir = 'up'
      else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') dir = 'down'
      if (dir) {
        e.preventDefault()
        doMove(dir)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [doMove])

  // Touch / swipe
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)
    if (Math.max(absX, absY) < 24) return
    if (absX > absY) doMove(dx > 0 ? 'right' : 'left')
    else doMove(dy > 0 ? 'down' : 'up')
  }

  const reset = () => {
    setGrid(newGame())
    setScore(0)
    setWon(false)
    setKeepPlaying(false)
    lostRef.current = false
  }

  return (
    <main className="app-shell game2048-shell">
      <TopBar title="2048" />
      <section className="game2048-layout">
        <article className="game2048-hero">
          <div>
            <p className="eyebrow">Tile merge</p>
            <h2>Reach the 2048 tile.</h2>
            <p>Slide to combine matching tiles. Their values double on contact.</p>
          </div>
          <div className="game2048-scores">
            <div className="game2048-score-card">
              <span>Score</span>
              <strong>{score}</strong>
            </div>
            <div className="game2048-score-card">
              <span>Best</span>
              <strong>{best}</strong>
            </div>
          </div>
          <div className="game2048-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> New game
            </button>
          </div>
        </article>

        <section className="game2048-stage">
          <details className="game-rules">
            <summary><HelpCircle size={14} /> How to play 2048</summary>
            <div className="game-rules-body">
              <ol>
                <li>Use <kbd>arrow keys</kbd> (or <kbd>WASD</kbd>, or swipe) to slide every tile in one direction.</li>
                <li>When two tiles with the <strong>same number</strong> collide, they merge into one tile with double the value.</li>
                <li>Every move spawns a new <strong>2</strong> (or sometimes <strong>4</strong>) on an empty cell.</li>
                <li>Win by creating a <strong>2048</strong> tile. Keep playing for higher tiles if you like.</li>
                <li>Lose when the board fills up and no merges are possible.</li>
              </ol>
            </div>
          </details>

          <div className="game2048-grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {grid.flat().map((value, idx) => (
              <div
                key={idx}
                className={`game2048-cell ${value > 0 ? `tile tile-${value}` : 'empty'}`}
                data-value={value}
              >
                {value > 0 ? value : ''}
              </div>
            ))}

            {(won && !keepPlaying) && (
              <div className="game2048-overlay">
                <Trophy size={28} />
                <h3>You hit 2048!</h3>
                <div className="game2048-overlay-actions">
                  <button type="button" onClick={() => setKeepPlaying(true)}>Keep playing</button>
                  <button type="button" onClick={reset}>New game</button>
                </div>
              </div>
            )}
            {lost && (
              <div className="game2048-overlay">
                <h3>Game over</h3>
                <p>No more moves. Final score: {score}</p>
                <div className="game2048-overlay-actions">
                  <button type="button" onClick={reset}>Try again</button>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  )
}
