import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Shuffle, Trophy, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { connectionsPuzzles, type ConnectionsGroup, type ConnectionsPuzzle } from '../../data/connectionsPuzzles'
import { playSuccessSound, playWrongSound } from '../../lib/audio'
import { useDailyPuzzle } from '../../hooks/useDailyPuzzle'
import { DailyPuzzleBanner } from '../common/DailyPuzzleBanner'
import { dailyIndex } from '../../lib/dailyPuzzle'

const MAX_MISTAKES = 4

type Status = 'playing' | 'won' | 'lost'
type PuzzleMode = 'daily' | 'bonus'

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function pickRandomPuzzle(): ConnectionsPuzzle {
  return connectionsPuzzles[Math.floor(Math.random() * connectionsPuzzles.length)]
}

function pickDailyPuzzle(dateKey: string): ConnectionsPuzzle {
  return connectionsPuzzles[dailyIndex('connections', connectionsPuzzles.length, dateKey)]
}

function allWords(puzzle: ConnectionsPuzzle): string[] {
  return puzzle.groups.flatMap((g) => g.words)
}

export function ConnectionsScreen() {
  const { setScreen } = useStore()
  const daily = useDailyPuzzle('connections')
  const [puzzle, setPuzzle] = useState<ConnectionsPuzzle | null>(null)
  const [puzzleMode, setPuzzleMode] = useState<PuzzleMode | null>(null)
  const [order, setOrder] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [solvedGroups, setSolvedGroups] = useState<ConnectionsGroup[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (puzzle !== null) return
    if (daily.phase === 'daily') {
      const next = pickDailyPuzzle(daily.date)
      setPuzzle(next)
      setPuzzleMode('daily')
      setOrder(shuffle(allWords(next)))
      setSelected([])
      setSolvedGroups([])
      setMistakes(0)
    }
  }, [daily.phase, daily.date, puzzle])

  const status: Status = puzzle === null
    ? 'playing'
    : solvedGroups.length === 4 ? 'won' : mistakes >= MAX_MISTAKES ? 'lost' : 'playing'

  useEffect(() => {
    if (puzzle === null) return
    if (status === 'won') playSuccessSound()
    else if (status === 'lost') playWrongSound()
    if ((status === 'won' || status === 'lost') && puzzleMode === 'daily') {
      daily.finishDaily()
    }
  }, [status, puzzle, puzzleMode, daily])

  const remaining = useMemo(() => {
    const solvedSet = new Set(solvedGroups.flatMap((g) => g.words))
    return order.filter((w) => !solvedSet.has(w))
  }, [order, solvedGroups])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 1600)
  }, [])

  const toggleWord = (word: string) => {
    if (status !== 'playing') return
    setSelected((sel) => {
      if (sel.includes(word)) return sel.filter((w) => w !== word)
      if (sel.length >= 4) return sel
      return [...sel, word]
    })
  }

  const submit = () => {
    if (selected.length !== 4 || status !== 'playing' || puzzle === null) return
    const match = puzzle.groups.find((g) => g.words.every((w) => selected.includes(w)))
    if (match) {
      setSolvedGroups((s) => [...s, match])
      setSelected([])
      playSuccessSound()
      return
    }

    // Check for "one away" — 3 of 4 in the same group
    const closest = puzzle.groups
      .filter((g) => !solvedGroups.includes(g))
      .map((g) => ({ g, hits: g.words.filter((w) => selected.includes(w)).length }))
      .sort((a, b) => b.hits - a.hits)[0]
    if (closest && closest.hits === 3) {
      showToast('One away…')
    } else {
      showToast('Not quite.')
    }
    setMistakes((m) => m + 1)
    setShake(true)
    setTimeout(() => setShake(false), 450)
    playWrongSound()
  }

  const reshuffle = () => setOrder((o) => shuffle(o))
  const deselect = () => setSelected([])

  const startBonusPuzzle = useCallback(() => {
    if (daily.phase !== 'bonus') return
    daily.consumeBonus()
    const next = pickRandomPuzzle()
    setPuzzle(next)
    setPuzzleMode('bonus')
    setOrder(shuffle(allWords(next)))
    setSelected([])
    setSolvedGroups([])
    setMistakes(0)
    setToast(null)
  }, [daily])

  const revealAll = () => {
    if (puzzle === null) return
    const unsolved = puzzle.groups.filter((g) => !solvedGroups.includes(g))
    setSolvedGroups([...solvedGroups, ...unsolved])
    setSelected([])
  }

  return (
    <main className="app-shell connections-shell">
      <TopBar title="Connections" />

      <section className="connections-layout">
        <article className="connections-hero">
          <div>
            <p className="eyebrow">Find four groups of four</p>
            <h2>Group the words by what they share.</h2>
            <p>Tap four words, then submit. Watch for tricky overlaps.</p>
          </div>
          <div className="connections-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
          </div>
        </article>

        <section className="connections-stage">
          <DailyPuzzleBanner daily={daily} />
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Connections</summary>
            <div className="game-rules-body">
              <ol>
                <li>The 16 words below secretly split into <strong>4 themed groups of 4</strong>.</li>
                <li>Tap exactly <strong>4 words</strong> you think share a theme, then hit Submit.</li>
                <li>If three of your four belong together, you'll see "<strong>One away…</strong>" — try a different fourth.</li>
                <li>You can make <strong>4 mistakes</strong> before the game ends.</li>
                <li>The themes climb in trickiness:
                  <ul>
                    <li><span className="game-rules-swatch" style={{ background: '#fde68a' }} />Yellow — easiest</li>
                    <li><span className="game-rules-swatch" style={{ background: '#86efac' }} />Green</li>
                    <li><span className="game-rules-swatch" style={{ background: '#93c5fd' }} />Blue</li>
                    <li><span className="game-rules-swatch" style={{ background: '#c4b5fd' }} />Purple — often wordplay or "___" patterns</li>
                  </ul>
                </li>
                <li>Watch for words that could fit two categories. Shuffle to see them differently.</li>
              </ol>
            </div>
          </details>

          <div className="connections-meta">
            <div className="connections-mistakes" aria-label="Mistakes remaining">
              <span>Mistakes:</span>
              {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
                <span
                  key={i}
                  className={`connections-mistake ${i < MAX_MISTAKES - mistakes ? 'live' : 'lost'}`}
                  aria-hidden
                />
              ))}
            </div>
            {toast && <div className="connections-toast" role="status">{toast}</div>}
          </div>

          <div className="connections-solved">
            {solvedGroups.map((g) => (
              <div key={g.label} className={`connections-solved-row diff-${g.difficulty}`}>
                <div className="connections-solved-label">{g.label.toUpperCase()}</div>
                <div className="connections-solved-words">{g.words.join(' · ')}</div>
              </div>
            ))}
          </div>

          <div className={`connections-grid ${shake ? 'shaking' : ''}`}>
            {remaining.map((word) => {
              const isSelected = selected.includes(word)
              return (
                <button
                  key={word}
                  type="button"
                  className={`connections-cell ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleWord(word)}
                  disabled={status !== 'playing'}
                >
                  {word}
                </button>
              )
            })}
          </div>

          {status === 'playing' && (
            <div className="connections-controls">
              <button type="button" onClick={reshuffle} className="ghost">
                <Shuffle size={14} /> Shuffle
              </button>
              <button type="button" onClick={deselect} className="ghost" disabled={selected.length === 0}>
                Deselect all
              </button>
              <button
                type="button"
                onClick={submit}
                className="primary"
                disabled={selected.length !== 4}
              >
                Submit ({selected.length}/4)
              </button>
            </div>
          )}

          {puzzle === null && daily.phase === 'bonus' && (
            <div className="connections-result win">
              <Trophy size={18} />
              <strong>Daily already solved.</strong> Want a bonus puzzle? {daily.bonusRemaining} left today.
              <button type="button" onClick={startBonusPuzzle}>Play bonus puzzle</button>
            </div>
          )}
          {puzzle === null && daily.phase === 'locked' && (
            <div className="connections-result lose">
              <strong>You're done for today.</strong> Daily and bonuses both finished — come back tomorrow.
            </div>
          )}
          {status === 'won' && puzzle !== null && (
            <div className="connections-result win">
              <Trophy size={18} />
              <strong>{puzzleMode === 'daily' ? 'Daily solved!' : 'Solved!'}</strong> {mistakes === 0 ? 'Perfect run.' : `${mistakes} mistake${mistakes === 1 ? '' : 's'}.`}
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
            <div className="connections-result lose">
              <strong>Out of mistakes.</strong>
              <button type="button" onClick={revealAll}>Reveal answers</button>
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
