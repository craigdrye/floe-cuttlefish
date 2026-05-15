import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, HelpCircle, RotateCcw, Trophy } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

type KakuroCell =
  | { kind: 'wall'; downSum?: number; rightSum?: number }
  | { kind: 'fill'; solution: number }

type CellState = KakuroCell & { value?: number }

const ROWS = 5
const COLS = 5

// Hand-validated 5x5 layout.
//   Row 1 across (cols 3-4):  3 + 4 = 7
//   Row 2 across (cols 2-4):  2 + 5 + 8 = 15
//   Row 3 across (cols 1-3):  1 + 6 + 9 = 16
//   Row 4 across (cols 1-2):  7 + 8 = 15
//   Col 1 down (rows 3-4):    1 + 7 = 8
//   Col 2 down (rows 2-4):    2 + 6 + 8 = 16
//   Col 3 down (rows 1-3):    3 + 5 + 9 = 17
//   Col 4 down (rows 1-2):    4 + 8 = 12
const PUZZLES: KakuroCell[][][] = [
  [
    [{ kind: 'wall' }, { kind: 'wall' }, { kind: 'wall' }, { kind: 'wall', downSum: 17 }, { kind: 'wall', downSum: 12 }],
    [{ kind: 'wall' }, { kind: 'wall' }, { kind: 'wall', downSum: 16, rightSum: 7 }, { kind: 'fill', solution: 3 }, { kind: 'fill', solution: 4 }],
    [{ kind: 'wall' }, { kind: 'wall', downSum: 8, rightSum: 15 }, { kind: 'fill', solution: 2 }, { kind: 'fill', solution: 5 }, { kind: 'fill', solution: 8 }],
    [{ kind: 'wall', rightSum: 16 }, { kind: 'fill', solution: 1 }, { kind: 'fill', solution: 6 }, { kind: 'fill', solution: 9 }, { kind: 'wall' }],
    [{ kind: 'wall', rightSum: 15 }, { kind: 'fill', solution: 7 }, { kind: 'fill', solution: 8 }, { kind: 'wall' }, { kind: 'wall' }],
  ],
]

function freshBoard(): CellState[][] {
  return PUZZLES[0].map((row) =>
    row.map((cell) => (cell.kind === 'fill' ? { ...cell, value: undefined } : { ...cell })),
  )
}

interface Run {
  cells: Array<[number, number]>
  target: number
}

// Compute all runs (rows then cols) from the puzzle definition.
function computeRuns(): { rowRuns: Run[]; colRuns: Run[] } {
  const rowRuns: Run[] = []
  const colRuns: Run[] = []
  const board = PUZZLES[0]
  // Row runs
  for (let r = 0; r < ROWS; r += 1) {
    let cur: Run | null = null
    for (let c = 0; c < COLS; c += 1) {
      const cell = board[r][c]
      if (cell.kind === 'wall') {
        if (cur) { rowRuns.push(cur); cur = null }
        if (cell.rightSum !== undefined) cur = { cells: [], target: cell.rightSum }
      } else if (cur) {
        cur.cells.push([r, c])
      }
    }
    if (cur) rowRuns.push(cur)
  }
  // Col runs
  for (let c = 0; c < COLS; c += 1) {
    let cur: Run | null = null
    for (let r = 0; r < ROWS; r += 1) {
      const cell = board[r][c]
      if (cell.kind === 'wall') {
        if (cur) { colRuns.push(cur); cur = null }
        if (cell.downSum !== undefined) cur = { cells: [], target: cell.downSum }
      } else if (cur) {
        cur.cells.push([r, c])
      }
    }
    if (cur) colRuns.push(cur)
  }
  return { rowRuns, colRuns }
}

const RUNS = computeRuns()

function evaluateBoard(board: CellState[][]): { conflicts: Set<string>; solved: boolean } {
  const conflicts = new Set<string>()
  let solved = true
  const checkRun = (run: Run) => {
    const values: number[] = []
    let allFilled = true
    for (const [r, c] of run.cells) {
      const cell = board[r][c]
      if (cell.kind !== 'fill' || cell.value === undefined) { allFilled = false; continue }
      values.push(cell.value)
    }
    // Duplicate check
    const seen = new Map<number, [number, number][]>()
    for (let i = 0; i < run.cells.length; i += 1) {
      const [r, c] = run.cells[i]
      const cell = board[r][c]
      if (cell.kind === 'fill' && cell.value !== undefined) {
        const list = seen.get(cell.value) ?? []
        list.push([r, c])
        seen.set(cell.value, list)
      }
    }
    for (const list of seen.values()) {
      if (list.length > 1) {
        for (const [r, c] of list) conflicts.add(`${r},${c}`)
      }
    }
    if (allFilled) {
      const sum = values.reduce((a, b) => a + b, 0)
      if (sum !== run.target) {
        for (const [r, c] of run.cells) conflicts.add(`${r},${c}`)
        solved = false
      }
    } else {
      solved = false
    }
  }
  RUNS.rowRuns.forEach(checkRun)
  RUNS.colRuns.forEach(checkRun)
  return { conflicts, solved }
}

export function KakuroScreen() {
  const { setScreen } = useStore()
  const [board, setBoard] = useState<CellState[][]>(freshBoard)
  const [selected, setSelected] = useState<[number, number] | null>(null)
  const [mistakes, setMistakes] = useState(0)

  const { conflicts, solved } = useMemo(() => evaluateBoard(board), [board])

  useEffect(() => { if (solved) playSuccessSound() }, [solved])

  const inputDigit = useCallback((d: number) => {
    if (!selected) return
    if (solved) return
    const [r, c] = selected
    setBoard((b) => {
      const cell = b[r][c]
      if (cell.kind !== 'fill') return b
      const next = b.map((row) => row.map((cc) => ({ ...cc })))
      next[r][c] = { ...cell, value: d }
      // Only count a mistake when transitioning from correct/empty to wrong —
      // overwriting a wrong digit with another wrong digit shouldn't double-count.
      const prevWasWrong = cell.value !== undefined && cell.value !== cell.solution
      if (d !== cell.solution && !prevWasWrong) {
        setMistakes((m) => m + 1)
        playWrongSound()
      }
      return next
    })
  }, [selected, solved])

  const erase = useCallback(() => {
    if (!selected) return
    if (solved) return
    const [r, c] = selected
    setBoard((b) => {
      const cell = b[r][c]
      if (cell.kind !== 'fill') return b
      const next = b.map((row) => row.map((cc) => ({ ...cc })))
      next[r][c] = { ...cell, value: undefined }
      return next
    })
  }, [selected, solved])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (/^[1-9]$/.test(e.key)) { inputDigit(parseInt(e.key, 10)); e.preventDefault() }
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') { erase(); e.preventDefault() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inputDigit, erase])

  const reset = () => {
    setBoard(freshBoard())
    setSelected(null)
    setMistakes(0)
  }

  return (
    <main className="app-shell kakuro-shell">
      <TopBar title="Kakuro" />

      <section className="kakuro-layout">
        <article className="kakuro-hero">
          <div>
            <p className="eyebrow">Cross-sum logic</p>
            <h2>Fill each run to its target.</h2>
            <p>Digits 1–9, no repeats in any single run. Like a numeric crossword.</p>
          </div>
          <div className="kakuro-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className="kakuro-stage">
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Kakuro</summary>
            <div className="game-rules-body">
              <ol>
                <li>The black "clue" cells show <strong>sum targets</strong>. The number on the <strong>upper-right</strong> applies to the row of white cells running <strong>right</strong>. The number on the <strong>lower-left</strong> applies to the column of white cells running <strong>down</strong>.</li>
                <li>Fill each white cell with a digit <strong>1–9</strong>.</li>
                <li>Within any single run (a row or column of white cells), each digit may appear <strong>only once</strong>.</li>
                <li>Each run's digits must sum to its target.</li>
                <li>Use only the numbers that fit — e.g. a run of two summing to 3 must be 1 + 2.</li>
              </ol>
            </div>
          </details>

          <div className="kakuro-meta">
            <span>Mistakes: <strong>{mistakes}</strong></span>
          </div>

          <div className="kakuro-grid">
            {board.map((row, r) => row.map((cell, c) => {
              const key = `${r},${c}`
              if (cell.kind === 'wall') {
                const hasBoth = cell.rightSum !== undefined && cell.downSum !== undefined
                return (
                  <div key={key} className="kakuro-cell wall">
                    {cell.rightSum !== undefined && <span className="clue right">{cell.rightSum}</span>}
                    {cell.downSum !== undefined && <span className="clue down">{cell.downSum}</span>}
                    {hasBoth && <span className="slash" aria-hidden />}
                  </div>
                )
              }
              const isSelected = selected && selected[0] === r && selected[1] === c
              const isConflict = conflicts.has(key)
              const isWrong = cell.value !== undefined && cell.value !== cell.solution
              return (
                <button
                  key={key}
                  type="button"
                  className={`kakuro-cell fill ${isSelected ? 'selected' : ''} ${isConflict ? 'conflict' : ''} ${isWrong ? 'wrong' : ''}`}
                  onClick={() => setSelected([r, c])}
                >
                  {cell.value ?? ''}
                </button>
              )
            }))}
          </div>

          <div className="kakuro-pad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
              <button key={d} type="button" className="kakuro-num" onClick={() => inputDigit(d)}>
                {d}
              </button>
            ))}
            <button type="button" className="kakuro-num action" onClick={erase} aria-label="Erase">
              <Delete size={16} />
            </button>
          </div>

          {solved && (
            <div className="kakuro-result">
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
