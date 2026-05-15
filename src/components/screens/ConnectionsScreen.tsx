import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, RotateCcw, Shuffle, Trophy, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { connectionsPuzzles, type ConnectionsGroup, type ConnectionsPuzzle } from '../../data/connectionsPuzzles'
import { playSuccessSound, playWrongSound } from '../../lib/audio'

const MAX_MISTAKES = 4

type Status = 'playing' | 'won' | 'lost'

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function pickPuzzle(): ConnectionsPuzzle {
  return connectionsPuzzles[Math.floor(Math.random() * connectionsPuzzles.length)]
}

function allWords(puzzle: ConnectionsPuzzle): string[] {
  return puzzle.groups.flatMap((g) => g.words)
}

export function ConnectionsScreen() {
  const { setScreen } = useStore()
  const [puzzle, setPuzzle] = useState<ConnectionsPuzzle>(pickPuzzle)
  const [order, setOrder] = useState<string[]>(() => shuffle(allWords(puzzle)))
  const [selected, setSelected] = useState<string[]>([])
  const [solvedGroups, setSolvedGroups] = useState<ConnectionsGroup[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const [shake, setShake] = useState(false)

  const status: Status = solvedGroups.length === 4 ? 'won' : mistakes >= MAX_MISTAKES ? 'lost' : 'playing'

  useEffect(() => {
    if (status === 'won') playSuccessSound()
    else if (status === 'lost') playWrongSound()
  }, [status])

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
    if (selected.length !== 4 || status !== 'playing') return
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

  const reset = () => {
    const next = pickPuzzle()
    setPuzzle(next)
    setOrder(shuffle(allWords(next)))
    setSelected([])
    setSolvedGroups([])
    setMistakes(0)
    setToast(null)
  }

  const revealAll = () => {
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
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> New puzzle
            </button>
          </div>
        </article>

        <section className="connections-stage">
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

          {status === 'won' && (
            <div className="connections-result win">
              <Trophy size={18} />
              <strong>Solved!</strong> {mistakes === 0 ? 'Perfect run.' : `${mistakes} mistake${mistakes === 1 ? '' : 's'}.`}
              <button type="button" onClick={reset}>New puzzle</button>
            </div>
          )}
          {status === 'lost' && (
            <div className="connections-result lose">
              <strong>Out of mistakes.</strong>
              <button type="button" onClick={revealAll}>Reveal answers</button>
              <button type="button" onClick={reset}>Try another</button>
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
