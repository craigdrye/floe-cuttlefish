import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, HelpCircle, RotateCcw, Trophy, Zap } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

const ROWS = 6
const COLS = 5
const WIN_TILE = 2048

// Spawn weighting — favor low values
const SPAWN_POOL: number[] = [2, 2, 2, 2, 2, 4, 4, 4, 8, 8, 16]

type Grid = number[][]
type Pos = { r: number; c: number }

function freshGrid(): Grid {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => SPAWN_POOL[Math.floor(Math.random() * SPAWN_POOL.length)]),
  )
}

function isAdjacent(a: Pos, b: Pos): boolean {
  const dr = Math.abs(a.r - b.r)
  const dc = Math.abs(a.c - b.c)
  return (dr === 1 && dc === 0) || (dr === 0 && dc === 1)
}

// Apply gravity: each column drops, gaps fill at top.
function applyGravity(g: Grid): Grid {
  const next = g.map((row) => [...row])
  for (let c = 0; c < COLS; c += 1) {
    const col: number[] = []
    for (let r = ROWS - 1; r >= 0; r -= 1) {
      if (next[r][c] > 0) col.push(next[r][c])
    }
    for (let r = ROWS - 1; r >= 0; r -= 1) {
      const v = col[(ROWS - 1) - r]
      next[r][c] = v ?? SPAWN_POOL[Math.floor(Math.random() * SPAWN_POOL.length)]
    }
  }
  return next
}

function highestPowerOf2AtMost(n: number): number {
  if (n <= 0) return 0
  let p = 1
  while (p * 2 <= n) p *= 2
  return p
}

export function Game2248Screen() {
  const { setScreen } = useStore()
  const [grid, setGrid] = useState<Grid>(freshGrid)
  const [chain, setChain] = useState<Pos[]>([])
  const [score, setScore] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('floe-2248-best') : null
    return stored ? parseInt(stored, 10) || 0 : 0
  })

  const won = useMemo(() => grid.some((row) => row.some((v) => v >= WIN_TILE)), [grid])

  const chainSet = useMemo(() => new Set(chain.map((p) => `${p.r},${p.c}`)), [chain])

  const canExtend = useCallback((target: Pos): boolean => {
    if (chain.length === 0) return true
    const last = chain[chain.length - 1]
    if (!isAdjacent(last, target)) return false
    if (chainSet.has(`${target.r},${target.c}`)) {
      // allow stepping back to previous
      const prev = chain[chain.length - 2]
      return !!prev && prev.r === target.r && prev.c === target.c
    }
    const first = chain[0]
    const firstValue = grid[first.r][first.c]
    return grid[target.r][target.c] === firstValue
  }, [chain, chainSet, grid])

  const click = useCallback((r: number, c: number) => {
    const pos: Pos = { r, c }
    if (chain.length === 0) {
      setChain([pos])
      return
    }
    if (chainSet.has(`${r},${c}`)) {
      // Tap last to deselect; tap second-to-last to step back
      const last = chain[chain.length - 1]
      if (last.r === r && last.c === c) {
        setChain((ch) => ch.slice(0, -1))
        return
      }
      const idx = chain.findIndex((p) => p.r === r && p.c === c)
      if (idx >= 0) setChain(chain.slice(0, idx + 1))
      return
    }
    if (!canExtend(pos)) {
      playWrongSound()
      return
    }
    setChain((ch) => [...ch, pos])
  }, [chain, chainSet, canExtend])

  const commitChain = useCallback(() => {
    if (chain.length < 2) return
    const last = chain[chain.length - 1]
    const first = chain[0]
    const value = grid[first.r][first.c]
    const sum = value * chain.length
    const newValue = highestPowerOf2AtMost(sum)
    setGrid((g) => {
      const next = g.map((row) => [...row])
      for (const p of chain) next[p.r][p.c] = 0
      next[last.r][last.c] = newValue
      return applyGravity(next)
    })
    setScore((s) => {
      const newScore = s + newValue
      setBest((b) => {
        if (newScore > b) {
          if (typeof localStorage !== 'undefined') localStorage.setItem('floe-2248-best', String(newScore))
          return newScore
        }
        return b
      })
      return newScore
    })
    setChain([])
    playSuccessSound()
  }, [chain, grid])

  const clearChain = useCallback(() => setChain([]), [])
  const reset = () => {
    setGrid(freshGrid())
    setChain([])
    setScore(0)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Enter') {
        e.preventDefault()
        commitChain()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        clearChain()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [commitChain, clearChain])

  // Container size for SVG overlay (kept in user-space coords; SVG stretches via preserveAspectRatio="none").
  const tileSize = 64
  const gap = 6
  const contentW = COLS * tileSize + (COLS - 1) * gap
  const contentH = ROWS * tileSize + (ROWS - 1) * gap

  return (
    <main className="app-shell game2248-shell">
      <TopBar title="2248" />

      <section className="game2248-layout">
        <article className="game2248-hero">
          <div>
            <p className="eyebrow">Chain merge</p>
            <h2>Connect same-value tiles to combine them.</h2>
            <p>Click adjacent tiles of the same number to build a chain. Then merge.</p>
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
          <div className="game2248-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> New game
            </button>
          </div>
        </article>

        <section className="game2248-stage">
          <details className="game-rules">
            <summary><HelpCircle size={14} /> How to play 2248</summary>
            <div className="game-rules-body">
              <ol>
                <li>Click a tile to start a chain, then click <strong>adjacent same-value tiles</strong> (up/down/left/right) to extend it.</li>
                <li>Tap the same tile again, or any earlier tile in the chain, to <strong>step back</strong>.</li>
                <li>Hit <strong>Merge</strong> (or press <kbd>Enter</kbd>) to collapse the chain into a single higher-value tile at the last position.</li>
                <li>Merge value = the largest power of 2 that fits the chain's total. So 4 tiles of 2 (sum 8) → an <strong>8</strong> tile. 3 tiles of 4 (sum 12) → an <strong>8</strong>.</li>
                <li>Above tiles fall and new tiles spawn at the top after every merge.</li>
                <li>Goal: build a <strong>2048</strong> tile. Then keep climbing.</li>
              </ol>
            </div>
          </details>

          <div className="game2248-controls">
            <span>Chain: <strong>{chain.length}</strong></span>
            <button type="button" onClick={clearChain} disabled={chain.length === 0}>Clear</button>
            <button
              type="button"
              className="primary"
              onClick={commitChain}
              disabled={chain.length < 2}
            >
              <Zap size={14} /> Merge ({chain.length >= 1 ? highestPowerOf2AtMost(grid[chain[0].r][chain[0].c] * chain.length) : 0})
            </button>
          </div>

          <div
            className="game2248-grid"
            style={{
              gridTemplateColumns: `repeat(${COLS}, ${tileSize}px)`,
              gridTemplateRows: `repeat(${ROWS}, ${tileSize}px)`,
              gap,
            }}
          >
            <svg className="game2248-overlay" viewBox={`0 0 ${contentW} ${contentH}`} preserveAspectRatio="none">
              {chain.map((p, i) => {
                if (i === 0) return null
                const prev = chain[i - 1]
                const x1 = prev.c * (tileSize + gap) + tileSize / 2
                const y1 = prev.r * (tileSize + gap) + tileSize / 2
                const x2 = p.c * (tileSize + gap) + tileSize / 2
                const y2 = p.r * (tileSize + gap) + tileSize / 2
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" />
                )
              })}
            </svg>

            {grid.map((row, r) => row.map((value, c) => {
              const isInChain = chainSet.has(`${r},${c}`)
              return (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  className={`game2248-tile tile-${value} ${isInChain ? 'in-chain' : ''}`}
                  onClick={() => click(r, c)}
                >
                  {value > 0 ? value : ''}
                </button>
              )
            }))}
          </div>

          {won && (
            <div className="game2248-result">
              <Trophy size={18} />
              <strong>You hit 2048!</strong> Keep going for higher tiles.
              <button type="button" onClick={reset}>New game</button>
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
