import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Delete, HelpCircle, Lightbulb, Pencil, RotateCcw, Trophy } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { sudokuPuzzles, type SudokuPuzzle } from '../../data/sudokuPuzzles'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyIndex } from '../../lib/dailyPuzzle'

type Cell = {
  given: boolean
  value: number // 0 = empty
  notes: Set<number>
}
type PuzzleMode = 'daily' | 'bonus'

function pickRandomPuzzle(): SudokuPuzzle {
  return sudokuPuzzles[Math.floor(Math.random() * sudokuPuzzles.length)]
}

function pickDailyPuzzle(dateKey: string): SudokuPuzzle {
  return sudokuPuzzles[dailyIndex('sudoku', sudokuPuzzles.length, dateKey)]
}

function parseBoard(puzzle: SudokuPuzzle): Cell[] {
  const out: Cell[] = []
  for (let i = 0; i < 81; i += 1) {
    const ch = puzzle.puzzle[i]
    const value = /[1-9]/.test(ch) ? parseInt(ch, 10) : 0
    out.push({ given: value > 0, value, notes: new Set() })
  }
  return out
}

function isConflict(board: Cell[], idx: number): boolean {
  const value = board[idx].value
  if (value === 0) return false
  const r = Math.floor(idx / 9)
  const c = idx % 9
  const br = Math.floor(r / 3) * 3
  const bc = Math.floor(c / 3) * 3
  for (let i = 0; i < 9; i += 1) {
    const rowIdx = r * 9 + i
    if (rowIdx !== idx && board[rowIdx].value === value) return true
    const colIdx = i * 9 + c
    if (colIdx !== idx && board[colIdx].value === value) return true
    const boxIdx = (br + Math.floor(i / 3)) * 9 + (bc + (i % 3))
    if (boxIdx !== idx && board[boxIdx].value === value) return true
  }
  return false
}

const HINT_BUDGET = 3

export function SudokuScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('sudoku')
  const [puzzle, setPuzzle] = useState<SudokuPuzzle | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [board, setBoard] = useState<Cell[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [notesMode, setNotesMode] = useState(false)
  const [mistakes, setMistakes] = useState(0)
  const [hintsLeft, setHintsLeft] = useState(HINT_BUDGET)

  useEffect(() => {
    if (puzzle !== null) return
    if (daily.phase === 'daily') {
      const next = pickDailyPuzzle(daily.date)
      setPuzzle(next)
      setPuzzleMode('daily')
      setBoard(parseBoard(next))
      setSelected(null)
      setMistakes(0)
      setHintsLeft(HINT_BUDGET)
    }
  }, [daily.phase, daily.date, puzzle])

  const conflicts = useMemo(() => board.map((_, idx) => isConflict(board, idx)), [board])

  const solved = useMemo(() => {
    if (board.length === 0) return false
    if (board.some((c) => c.value === 0)) return false
    return board.every((_, idx) => !isConflict(board, idx))
  }, [board])

  useEffect(() => {
    if (!solved) return
    playSuccessSound()
    if (puzzleMode === 'daily') daily.finishDaily()
  }, [solved, puzzleMode, daily])

  const selectedCell = selected !== null ? board[selected] : null
  const selectedValue = selectedCell && selectedCell.value > 0 ? selectedCell.value : null

  const inputDigit = useCallback((d: number) => {
    if (selected === null || !puzzle) return
    if (solved) return
    setBoard((b) => {
      const target = b[selected]
      if (target.given) return b
      const next = [...b]
      if (notesMode && target.value === 0) {
        const newNotes = new Set(target.notes)
        if (newNotes.has(d)) newNotes.delete(d)
        else newNotes.add(d)
        next[selected] = { ...target, notes: newNotes }
        return next
      }
      // Bump mistakes only when going from correct/empty into a wrong digit —
      // overwriting an already-wrong cell with another wrong digit shouldn't double-count.
      const correctDigit = parseInt(puzzle.solution[selected], 10)
      const prevWasWrong = target.value > 0 && target.value !== correctDigit
      if (d !== correctDigit && d !== 0 && !prevWasWrong) {
        setMistakes((m) => m + 1)
        playWrongSound()
      }
      next[selected] = { ...target, value: d, notes: new Set() }
      // Clear that digit from neighbor notes for QoL
      const r = Math.floor(selected / 9)
      const c = selected % 9
      const br = Math.floor(r / 3) * 3
      const bc = Math.floor(c / 3) * 3
      for (let i = 0; i < 9; i += 1) {
        const indices = [r * 9 + i, i * 9 + c, (br + Math.floor(i / 3)) * 9 + (bc + (i % 3))]
        for (const idx of indices) {
          if (idx === selected) continue
          if (next[idx].notes.has(d)) {
            const cleared = new Set(next[idx].notes)
            cleared.delete(d)
            next[idx] = { ...next[idx], notes: cleared }
          }
        }
      }
      return next
    })
  }, [selected, notesMode, puzzle, solved])

  const erase = useCallback(() => {
    if (selected === null) return
    if (solved) return
    setBoard((b) => {
      if (b[selected].given) return b
      const next = [...b]
      next[selected] = { ...b[selected], value: 0, notes: new Set() }
      return next
    })
  }, [selected, solved])

  const reveal = useCallback(() => {
    if (selected === null || !puzzle) return
    if (solved) return
    if (hintsLeft <= 0) return
    setBoard((b) => {
      if (b[selected].given || b[selected].value !== 0) return b
      const correct = parseInt(puzzle.solution[selected], 10)
      const next = [...b]
      next[selected] = { ...b[selected], value: correct, notes: new Set() }
      setHintsLeft((h) => Math.max(0, h - 1))
      return next
    })
  }, [selected, puzzle, solved, hintsLeft])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (/^[1-9]$/.test(e.key)) { inputDigit(parseInt(e.key, 10)); e.preventDefault() }
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') { erase(); e.preventDefault() }
      else if (selected !== null && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        const r = Math.floor(selected / 9)
        const c = selected % 9
        let nr = r, nc = c
        if (e.key === 'ArrowLeft') nc = Math.max(0, c - 1)
        else if (e.key === 'ArrowRight') nc = Math.min(8, c + 1)
        else if (e.key === 'ArrowUp') nr = Math.max(0, r - 1)
        else nr = Math.min(8, r + 1)
        setSelected(nr * 9 + nc)
        e.preventDefault()
      } else if (e.key.toLowerCase() === 'n') { setNotesMode((n) => !n); e.preventDefault() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inputDigit, erase, selected])

  const resetSamePuzzle = () => {
    if (!puzzle) return
    setBoard(parseBoard(puzzle))
    setSelected(null)
    setMistakes(0)
    setHintsLeft(HINT_BUDGET)
  }

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    const next = pickRandomPuzzle()
    setPuzzle(next)
    setPuzzleMode('bonus')
    setBoard(parseBoard(next))
    setSelected(null)
    setMistakes(0)
    setHintsLeft(HINT_BUDGET)
  }, [daily])

  return (
    <main className="app-shell sudoku-shell">
      <TopBar title="Sudoku" />

      <section className="sudoku-layout">
        <article className="sudoku-hero">
          <div>
            <p className="eyebrow">Number logic{puzzle ? ` · ${puzzle.difficulty}` : ''}</p>
            <h2>Fill the grid with 1–9.</h2>
            <p>Every row, column, and 3×3 box must contain 1 through 9 exactly once.</p>
          </div>
          <div className="sudoku-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            {puzzle && (
              <button type="button" onClick={resetSamePuzzle}>
                <RotateCcw size={16} /> Reset
              </button>
            )}
          </div>
        </article>

        <section className="sudoku-stage">
          <DailyPuzzleBanner daily={daily} />
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Sudoku</summary>
            <div className="game-rules-body">
              <ol>
                <li>The grid is 9×9, split into nine 3×3 boxes. Some cells start filled.</li>
                <li>Click a blank cell, then press <kbd>1</kbd>–<kbd>9</kbd> (or use the number pad) to fill it.</li>
                <li>Each <strong>row</strong>, each <strong>column</strong>, and each <strong>3×3 box</strong> must contain every digit 1–9 exactly once.</li>
                <li>Conflicts are highlighted in red — fix them as you go.</li>
                <li>Toggle <kbd>N</kbd> (or the pencil button) for <strong>notes mode</strong> — small candidate digits in empty cells.</li>
                <li>Arrow keys move the selection. <kbd>Backspace</kbd> clears.</li>
              </ol>
            </div>
          </details>

          {puzzle === null && daily.phase === 'bonus' && (
            <div className="sudoku-result">
              <Trophy size={18} />
              <strong>Daily already solved.</strong> Want a bonus puzzle? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus puzzle</button>
            </div>
          )}
          {puzzle === null && daily.phase === 'locked' && (
            <div className="sudoku-result">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}

          {puzzle && <>
          <div className="sudoku-meta">
            <span>Mistakes: <strong>{mistakes}</strong></span>
            <span>Hints: <strong>{hintsLeft}</strong></span>
            <button
              type="button"
              className={`sudoku-toggle ${notesMode ? 'on' : ''}`}
              onClick={() => setNotesMode((n) => !n)}
              aria-pressed={notesMode}
            >
              <Pencil size={14} /> Notes {notesMode ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className={`sudoku-grid ${notesMode ? 'notes-mode' : ''}`} role="grid">
            {board.map((cell, idx) => {
              const r = Math.floor(idx / 9)
              const c = idx % 9
              const isSelected = selected === idx
              const isPeer = selected !== null && (
                Math.floor(selected / 9) === r ||
                selected % 9 === c ||
                (Math.floor(Math.floor(selected / 9) / 3) === Math.floor(r / 3) &&
                  Math.floor((selected % 9) / 3) === Math.floor(c / 3))
              )
              const sameValue = selectedValue !== null && cell.value === selectedValue
              const hasConflict = conflicts[idx]
              const isCorrect = !cell.given && cell.value > 0 && cell.value === parseInt(puzzle.solution[idx], 10)
              const isWrong = !cell.given && cell.value > 0 && cell.value !== parseInt(puzzle.solution[idx], 10)
              return (
                <button
                  key={idx}
                  type="button"
                  className={`sudoku-cell ${cell.given ? 'given' : ''} ${isSelected ? 'selected' : ''} ${isPeer && !isSelected ? 'peer' : ''} ${sameValue && !isSelected ? 'match' : ''} ${hasConflict ? 'conflict' : ''} ${isWrong ? 'wrong' : ''} ${isCorrect ? 'correct' : ''} box-${Math.floor(r / 3)}-${Math.floor(c / 3)}`}
                  onClick={() => setSelected(idx)}
                >
                  {cell.value > 0 ? cell.value : cell.notes.size > 0 ? (
                    <div className="sudoku-notes">
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                        <span key={n} className={cell.notes.has(n) ? 'on' : ''}>{cell.notes.has(n) ? n : ''}</span>
                      ))}
                    </div>
                  ) : ''}
                </button>
              )
            })}
          </div>

          <div className="sudoku-pad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
              <button
                key={d}
                type="button"
                className="sudoku-num"
                onClick={() => inputDigit(d)}
              >
                {d}
              </button>
            ))}
            <button type="button" className="sudoku-num action" onClick={erase} aria-label="Erase">
              <Delete size={16} />
            </button>
            <button
              type="button"
              className="sudoku-num action"
              onClick={reveal}
              disabled={hintsLeft <= 0 || selected === null}
              aria-label={`Reveal cell, ${hintsLeft} hint${hintsLeft === 1 ? '' : 's'} left`}
              title={`${hintsLeft} hint${hintsLeft === 1 ? '' : 's'} left`}
            >
              <Lightbulb size={16} />
            </button>
          </div>

          {solved && (
            <div className="sudoku-result">
              <Trophy size={18} />
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> {mistakes === 0 ? 'Clean run.' : `${mistakes} mistake${mistakes === 1 ? '' : 's'}.`}
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
          </>}
        </section>
      </section>
    </main>
  )
}
