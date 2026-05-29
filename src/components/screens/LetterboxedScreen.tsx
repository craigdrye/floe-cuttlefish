import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Trophy, X, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { letterboxedPuzzles, type LetterboxedPuzzle } from '../../data/letterboxedPuzzles'
import { englishDictionary } from '../../data/englishDictionary'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyIndex } from '../../lib/dailyPuzzle'

type Status = 'playing' | 'won'
type PuzzleMode = 'daily' | 'bonus'

function pickRandomPuzzle(): LetterboxedPuzzle {
  return letterboxedPuzzles[Math.floor(Math.random() * letterboxedPuzzles.length)]
}

function pickDailyPuzzle(dateKey: string): LetterboxedPuzzle {
  return letterboxedPuzzles[dailyIndex('letterboxed', letterboxedPuzzles.length, dateKey)]
}

function getSideForLetter(puzzle: LetterboxedPuzzle, letter: string): number | -1 {
  for (let i = 0; i < puzzle.sides.length; i += 1) {
    if (puzzle.sides[i].includes(letter)) return i
  }
  return -1
}

function isValidWord(puzzle: LetterboxedPuzzle, word: string): { ok: boolean; reason?: string } {
  const w = word.toUpperCase()
  if (w.length < 3) return { ok: false, reason: 'Too short (3+ letters)' }
  for (let i = 0; i < w.length; i += 1) {
    if (getSideForLetter(puzzle, w[i]) === -1) {
      return { ok: false, reason: `"${w[i]}" not in puzzle` }
    }
  }
  for (let i = 1; i < w.length; i += 1) {
    if (getSideForLetter(puzzle, w[i]) === getSideForLetter(puzzle, w[i - 1])) {
      return { ok: false, reason: 'Same-side letters' }
    }
  }
  if (!englishDictionary.has(w.toLowerCase())) return { ok: false, reason: 'Not in dictionary' }
  return { ok: true }
}

export function LetterboxedScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('letterboxed')
  const [puzzle, setPuzzle] = useState<LetterboxedPuzzle | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [solvedWords, setSolvedWords] = useState<string[]>([])
  const [current, setCurrent] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (puzzle !== null) return
    if (daily.phase === 'daily') {
      setPuzzle(pickDailyPuzzle(daily.date))
      setPuzzleMode('daily')
      setSolvedWords([])
      setCurrent('')
    }
  }, [daily.phase, daily.date, puzzle])

  const allLettersUsed = useMemo(() => {
    if (!puzzle) return false
    const used = new Set<string>()
    solvedWords.forEach((w) => { for (const c of w) used.add(c) })
    return puzzle.sides.flat().every((l) => used.has(l))
  }, [solvedWords, puzzle])

  const status: Status = allLettersUsed && solvedWords.length > 0 ? 'won' : 'playing'

  useEffect(() => {
    if (status === 'won') playSuccessSound()
    if (status === 'won' && puzzleMode === 'daily') {
      daily.finishDaily()
    }
  }, [status, puzzleMode, daily])

  const requiredFirstLetter = solvedWords.length > 0
    ? solvedWords[solvedWords.length - 1].slice(-1)
    : null

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setShake(true)
    setTimeout(() => setShake(false), 400)
    setTimeout(() => setToast(null), 1600)
  }, [])

  const pushLetter = useCallback((letter: string) => {
    if (status !== 'playing' || !puzzle) return
    if (requiredFirstLetter && current.length === 0 && letter !== requiredFirstLetter) {
      showToast(`Must start with ${requiredFirstLetter}`)
      playWrongSound()
      return
    }
    if (current.length > 0 && getSideForLetter(puzzle, current[current.length - 1]) === getSideForLetter(puzzle, letter)) {
      showToast('Same side — pick another')
      return
    }
    setCurrent((c) => c + letter)
  }, [current, puzzle, requiredFirstLetter, showToast, status])

  const popLetter = useCallback(() => setCurrent((c) => c.slice(0, -1)), [])

  const submit = useCallback(() => {
    if (status !== 'playing' || !puzzle) return
    if (!current) return
    const check = isValidWord(puzzle, current)
    if (!check.ok) {
      showToast(check.reason ?? 'Invalid')
      playWrongSound()
      return
    }
    if (requiredFirstLetter && current[0] !== requiredFirstLetter) {
      showToast(`Must start with ${requiredFirstLetter}`)
      playWrongSound()
      return
    }
    setSolvedWords((s) => [...s, current])
    setCurrent('')
    playSuccessSound()
  }, [current, puzzle, requiredFirstLetter, showToast, status])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Enter') { submit(); e.preventDefault() }
      else if (e.key === 'Backspace') { popLetter(); e.preventDefault() }
      else if (/^[a-zA-Z]$/.test(e.key)) { pushLetter(e.key.toUpperCase()); e.preventDefault() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pushLetter, popLetter, submit])

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    setPuzzle(pickRandomPuzzle())
    setPuzzleMode('bonus')
    setSolvedWords([])
    setCurrent('')
    setToast(null)
  }, [daily])

  const usedLetters = useMemo(() => {
    const set = new Set<string>()
    solvedWords.forEach((w) => { for (const c of w) set.add(c) })
    return set
  }, [solvedWords])

  // Compute box layout positions for each side
  // top: y=0, left=center, right=center
  // right: x=right, evenly spaced down
  // bottom: y=bottom, evenly spaced
  // left: x=0, evenly spaced down
  const sideLabels = ['top', 'right', 'bottom', 'left'] as const

  return (
    <main className="app-shell letterboxed-shell">
      <TopBar title="Letterboxed" />

      <section className="letterboxed-layout">
        <article className="letterboxed-hero">
          <div>
            <p className="eyebrow">Word chain</p>
            <h2>Chain words. Use every letter.</h2>
            <p>Each next word starts with the last letter. No two consecutive letters on the same side.</p>
          </div>
          <div className="letterboxed-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
          </div>
        </article>

        <section className="letterboxed-stage">
          <DailyPuzzleBanner daily={daily} />
          {toast && <div className="letterboxed-toast" role="status">{toast}</div>}

          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Letterboxed</summary>
            <div className="game-rules-body">
              <ol>
                <li>The box has <strong>12 unique letters</strong>, 3 on each of its 4 sides.</li>
                <li>Spell a word by tapping letters in order. Each word must be at least <strong>3 letters</strong> and a real English word.</li>
                <li><strong>Consecutive letters must come from different sides.</strong> You can never tap two letters in a row that share a side.</li>
                <li>After your first word, every next word has to <strong>start with the previous word's last letter</strong> — it's a chain.</li>
                <li>The goal: use <strong>all 12 letters at least once</strong> across however many words you need.</li>
                <li>The puzzle shows a "par" — the fewest words a tight solver might need. Beat it for bragging rights.</li>
              </ol>
            </div>
          </details>

          {puzzle === null && daily.phase === 'bonus' && (
            <div className="letterboxed-result">
              <Trophy size={18} />
              <strong>Daily already solved.</strong> Want a bonus puzzle? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus puzzle</button>
            </div>
          )}
          {puzzle === null && daily.phase === 'locked' && (
            <div className="letterboxed-result">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}

          {puzzle && <>
            <div className={`letterboxed-box ${shake ? 'shaking' : ''}`}>
              <div className="letterboxed-box-frame" />
              {puzzle.sides.map((side, sideIdx) => (
                <div key={sideIdx} className={`letterboxed-side side-${sideLabels[sideIdx]}`}>
                  {side.map((letter) => {
                    const isUsed = usedLetters.has(letter)
                    const isInCurrent = current.includes(letter)
                    return (
                      <button
                        key={letter}
                        type="button"
                        className={`letterboxed-letter ${isUsed ? 'used' : ''} ${isInCurrent ? 'active' : ''}`}
                        onClick={() => pushLetter(letter)}
                        disabled={status !== 'playing'}
                      >
                        {letter}
                      </button>
                    )
                  })}
                </div>
              ))}

              {/* SVG lines connecting letters in current word */}
              <CurrentWordLines puzzle={puzzle} current={current} />
            </div>

            <div className="letterboxed-input-area">
              <div className="letterboxed-current">
                {current ? current : <span className="letterboxed-current-hint">Tap letters to spell a word{requiredFirstLetter ? ` (start with ${requiredFirstLetter})` : ''}</span>}
              </div>
              <div className="letterboxed-input-buttons">
                <button type="button" onClick={popLetter} disabled={!current}>
                  <X size={14} /> Delete
                </button>
                <button type="button" onClick={() => setCurrent('')} disabled={!current}>Clear</button>
                <button type="button" className="primary" onClick={submit} disabled={!current}>Enter word</button>
              </div>
            </div>
          </>}

          {solvedWords.length > 0 && (
            <div className="letterboxed-solved">
              <p className="eyebrow">Your chain</p>
              <div className="letterboxed-chain">
                {solvedWords.map((w, i) => (
                  <span key={i} className="letterboxed-chain-word">{w}</span>
                ))}
              </div>
            </div>
          )}

          {status === 'won' && puzzle !== null && (
            <div className="letterboxed-result">
              <Trophy size={18} />
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> {solvedWords.length} word{solvedWords.length === 1 ? '' : 's'}. Par was {puzzle.par}.
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

function CurrentWordLines({ puzzle, current }: { puzzle: LetterboxedPuzzle; current: string }) {
  if (current.length < 2) return null
  const points: Array<{ x: number; y: number }> = current.split('').map((l) => positionForLetter(puzzle, l))
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  return (
    <svg className="letterboxed-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d={path} fill="none" stroke="#2ec4b6" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  )
}

function positionForLetter(puzzle: LetterboxedPuzzle, letter: string): { x: number; y: number } {
  // Side containers in CSS span 7%–93% along their main axis with 14%-thick bands;
  // letters are space-around inside, so centers sit at 7 + (i+0.5) * (86/n).
  // CSS flex-direction is row (top/bottom) and column (left/right) without reverse,
  // so DOM order matches visual left-to-right (top/bottom) and top-to-bottom (left/right).
  for (let sideIdx = 0; sideIdx < puzzle.sides.length; sideIdx += 1) {
    const i = puzzle.sides[sideIdx].indexOf(letter)
    if (i === -1) continue
    const along = 7 + (i + 0.5) * (86 / puzzle.sides[sideIdx].length)
    if (sideIdx === 0) return { x: along, y: 7 }   // top
    if (sideIdx === 1) return { x: 93, y: along }  // right
    if (sideIdx === 2) return { x: along, y: 93 }  // bottom
    return { x: 7, y: along }                       // left
  }
  return { x: 50, y: 50 }
}
