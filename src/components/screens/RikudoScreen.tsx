import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, HelpCircle, RotateCcw, Trophy } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

// 7-cell hex flower puzzle.
//   A  B
//  C D  E
//   F  G
// Coordinates use offset rows; even rows (0, 2) carry 2 hexes, middle row carries 3.
// Solution path: A(1) → C(2) → F(3) → G(4) → E(5) → B(6) → D(7).

type CellId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

interface HexCell {
  id: CellId
  row: number
  col: number
  solution: number
  given?: boolean
}

const CELLS: HexCell[] = [
  { id: 'A', row: 0, col: 0, solution: 1, given: true },
  { id: 'B', row: 0, col: 1, solution: 6 },
  { id: 'C', row: 1, col: 0, solution: 2 },
  { id: 'D', row: 1, col: 1, solution: 7, given: true },
  { id: 'E', row: 1, col: 2, solution: 5 },
  { id: 'F', row: 2, col: 0, solution: 3 },
  { id: 'G', row: 2, col: 1, solution: 4, given: true },
]

const ADJACENCY: Record<CellId, CellId[]> = {
  A: ['B', 'C', 'D'],
  B: ['A', 'D', 'E'],
  C: ['A', 'D', 'F'],
  D: ['A', 'B', 'C', 'E', 'F', 'G'],
  E: ['B', 'D', 'G'],
  F: ['C', 'D', 'G'],
  G: ['D', 'E', 'F'],
}

const N = CELLS.length

function freshValues(): Record<CellId, number | undefined> {
  const out: Record<string, number | undefined> = {}
  for (const cell of CELLS) out[cell.id] = cell.given ? cell.solution : undefined
  return out as Record<CellId, number | undefined>
}

export function RikudoScreen() {
  const { setScreen } = useStore()
  const [values, setValues] = useState<Record<CellId, number | undefined>>(freshValues)
  const [selected, setSelected] = useState<CellId | null>(null)
  const [mistakes, setMistakes] = useState(0)

  // Find cell holding a particular value
  const cellByValue = useMemo(() => {
    const map = new Map<number, CellId>()
    for (const cell of CELLS) {
      const v = values[cell.id]
      if (v !== undefined) map.set(v, cell.id)
    }
    return map
  }, [values])

  // A cell has a "break" if its value's neighbor (value±1) is placed but not adjacent.
  const breaks = useMemo(() => {
    const out = new Set<CellId>()
    for (const cell of CELLS) {
      const v = values[cell.id]
      if (v === undefined) continue
      for (const delta of [-1, 1]) {
        const neighborValue = v + delta
        if (neighborValue < 1 || neighborValue > N) continue
        const partnerId = cellByValue.get(neighborValue)
        if (!partnerId) continue
        if (!ADJACENCY[cell.id].includes(partnerId)) {
          out.add(cell.id)
          out.add(partnerId)
        }
      }
    }
    return out
  }, [values, cellByValue])

  const duplicates = useMemo(() => {
    const out = new Set<CellId>()
    const seen = new Map<number, CellId[]>()
    for (const cell of CELLS) {
      const v = values[cell.id]
      if (v === undefined) continue
      const list = seen.get(v) ?? []
      list.push(cell.id)
      seen.set(v, list)
    }
    for (const list of seen.values()) {
      if (list.length > 1) for (const id of list) out.add(id)
    }
    return out
  }, [values])

  const solved = useMemo(() => {
    for (const cell of CELLS) {
      if (values[cell.id] !== cell.solution) return false
    }
    return true
  }, [values])

  useEffect(() => { if (solved) playSuccessSound() }, [solved])

  const inputDigit = useCallback((d: number) => {
    if (!selected) return
    if (solved) return
    const target = CELLS.find((c) => c.id === selected)
    if (!target || target.given) return
    setValues((v) => {
      const prev = v[selected]
      const prevWasWrong = prev !== undefined && prev !== target.solution
      if (d !== target.solution && !prevWasWrong) {
        setMistakes((m) => m + 1)
        playWrongSound()
      }
      return { ...v, [selected]: d }
    })
  }, [selected, solved])

  const erase = useCallback(() => {
    if (!selected) return
    if (solved) return
    const target = CELLS.find((c) => c.id === selected)
    if (!target || target.given) return
    setValues((v) => ({ ...v, [selected]: undefined }))
  }, [selected, solved])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (/^[1-9]$/.test(e.key)) {
        const d = parseInt(e.key, 10)
        if (d >= 1 && d <= N) { inputDigit(d); e.preventDefault() }
      } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') {
        erase(); e.preventDefault()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inputDigit, erase])

  const reset = () => {
    setValues(freshValues())
    setSelected(null)
    setMistakes(0)
  }

  // Layout: each row offset by 0.5 * hexW. Row gap = 0.75 * hexH.
  const hexW = 70
  const hexH = 80
  const verticalStep = hexH * 0.78
  const hexPositions = CELLS.map((cell) => {
    const rowOffset = cell.row === 1 ? 0 : hexW / 2 // outer rows offset right
    return {
      cell,
      left: cell.col * hexW + rowOffset,
      top: cell.row * verticalStep,
    }
  })

  // Draw connectors (lines) between every adjacent pair (light) and between consecutive value pairs (bright).
  const containerW = Math.max(...hexPositions.map((p) => p.left)) + hexW
  const containerH = Math.max(...hexPositions.map((p) => p.top)) + hexH
  const centerOf = (id: CellId) => {
    const pos = hexPositions.find((p) => p.cell.id === id)!
    return { x: pos.left + hexW / 2, y: pos.top + hexH / 2 }
  }
  const adjPairs: Array<[CellId, CellId]> = []
  const seenPair = new Set<string>()
  for (const cell of CELLS) {
    for (const neighbor of ADJACENCY[cell.id]) {
      const key = [cell.id, neighbor].sort().join('-')
      if (seenPair.has(key)) continue
      seenPair.add(key)
      adjPairs.push([cell.id, neighbor])
    }
  }
  const pathPairs: Array<[CellId, CellId]> = []
  for (let v = 1; v < N; v += 1) {
    const a = cellByValue.get(v)
    const b = cellByValue.get(v + 1)
    if (a && b) pathPairs.push([a, b])
  }

  return (
    <main className="app-shell rikudo-shell">
      <TopBar title="Rikudo" />

      <section className="rikudo-layout">
        <article className="rikudo-hero">
          <div>
            <p className="eyebrow">Hex path puzzle</p>
            <h2>Number the path 1 to {N}.</h2>
            <p>Each consecutive pair must touch — like a connect-the-dots through hexes.</p>
          </div>
          <div className="rikudo-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className="rikudo-stage">
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Rikudo</summary>
            <div className="game-rules-body">
              <ol>
                <li>Place the numbers <strong>1 through {N}</strong> into the hexes, one per cell.</li>
                <li>Cells holding <strong>consecutive numbers</strong> (1 next to 2, 2 next to 3, …) must be <strong>directly adjacent</strong> — sharing an edge.</li>
                <li>Some numbers are pre-placed as givens — you can't change them.</li>
                <li>Click a hex, then press <kbd>1</kbd>–<kbd>{N}</kbd>. Use <kbd>Backspace</kbd> to erase.</li>
                <li>Solid lines show valid consecutive links; red glow means a break in the path.</li>
              </ol>
            </div>
          </details>

          <div className="rikudo-meta">
            <span>Mistakes: <strong>{mistakes}</strong></span>
          </div>

          <div className="rikudo-board" style={{ width: containerW, height: containerH }}>
            <svg className="rikudo-lines" viewBox={`0 0 ${containerW} ${containerH}`} preserveAspectRatio="none">
              {adjPairs.map(([a, b]) => {
                const pa = centerOf(a)
                const pb = centerOf(b)
                return (
                  <line key={`${a}-${b}-adj`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                    stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                )
              })}
              {pathPairs.map(([a, b]) => {
                const pa = centerOf(a)
                const pb = centerOf(b)
                const isAdj = ADJACENCY[a].includes(b)
                return (
                  <line key={`${a}-${b}-path`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                    stroke={isAdj ? '#2ec4b6' : '#f43f5e'} strokeWidth="3" strokeLinecap="round" />
                )
              })}
            </svg>

            {hexPositions.map(({ cell, left, top }) => {
              const value = values[cell.id]
              const isSelected = selected === cell.id
              const hasBreak = breaks.has(cell.id) || duplicates.has(cell.id)
              const isCorrect = value !== undefined && value === cell.solution
              return (
                <button
                  key={cell.id}
                  type="button"
                  className={`rikudo-hex ${cell.given ? 'given' : ''} ${isSelected ? 'selected' : ''} ${hasBreak ? 'break' : ''} ${isCorrect && !cell.given ? 'correct' : ''}`}
                  style={{ left, top, width: hexW, height: hexH }}
                  onClick={() => setSelected(cell.id)}
                >
                  {value ?? ''}
                </button>
              )
            })}
          </div>

          <div className="rikudo-pad">
            {Array.from({ length: N }, (_, i) => i + 1).map((d) => (
              <button key={d} type="button" className="rikudo-num" onClick={() => inputDigit(d)}>
                {d}
              </button>
            ))}
            <button type="button" className="rikudo-num action" onClick={erase} aria-label="Erase">
              <Delete size={16} />
            </button>
          </div>

          {solved && (
            <div className="rikudo-result">
              <Trophy size={18} />
              <strong>Solved!</strong> {mistakes === 0 ? 'Clean run.' : `${mistakes} mistake${mistakes === 1 ? '' : 's'}.`}
              <button type="button" onClick={reset}>Play again</button>
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
