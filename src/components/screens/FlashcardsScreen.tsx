import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, Shuffle, Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { buildChapterFlashcards } from '../../lib/flashcards'
import { TopBar } from '../layout/TopBar'

function hashCardOrder(seed: string) {
  let hash = 2166136261
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

export function FlashcardsScreen() {
  const { selectedChapter, setScreen, flashcardRatings, setFlashcardRating, clearFlashcardDeckRatings } = useStore()
  const { selectedTrackInfo, chapterAllQuestions, isSelectedCatalogReady } = useQuizData()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewOnly, setReviewOnly] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [shuffleSeed, setShuffleSeed] = useState(0)

  const cards = useMemo(
    () => buildChapterFlashcards(selectedTrackInfo.id, chapterAllQuestions),
    [chapterAllQuestions, selectedTrackInfo.id],
  )
  const chapterDisplayName = (selectedChapter ?? '').replace(/^Capstone:\s*/i, '')
  const deckKey = `${selectedTrackInfo.id}:${selectedChapter ?? 'chapter'}`
  const knownCount = cards.filter((card) => flashcardRatings[`${deckKey}:${card.id}`]?.status === 'known').length
  const reviewCount = cards.filter((card) => flashcardRatings[`${deckKey}:${card.id}`]?.status === 'review').length
  const studyCards = useMemo(() => {
    const filtered = reviewOnly
      ? cards.filter((card) => flashcardRatings[`${deckKey}:${card.id}`]?.status === 'review')
      : cards
    if (!shuffled) return filtered
    return [...filtered].sort((a, b) => {
      const aKey = hashCardOrder(`${a.id}:${shuffleSeed}`)
      const bKey = hashCardOrder(`${b.id}:${shuffleSeed}`)
      return aKey - bKey
    })
  }, [cards, deckKey, flashcardRatings, reviewOnly, shuffled, shuffleSeed])
  const current = studyCards[index]
  const cardKey = current ? `${deckKey}:${current.id}` : ''
  const touchedCount = knownCount + reviewCount
  const knownPct = cards.length > 0 ? Math.round((knownCount / cards.length) * 100) : 0
  const passLabel = reviewOnly ? 'Review pass' : shuffled ? 'Shuffled pass' : 'Full pass'

  useEffect(() => {
    if (index <= 0 || index < studyCards.length) return
    setIndex(Math.max(0, studyCards.length - 1))
  }, [index, studyCards.length])

  const goBack = () => setScreen('chapter')
  const goTo = (nextIndex: number) => {
    if (studyCards.length === 0) return
    setIndex((nextIndex + studyCards.length) % studyCards.length)
    setFlipped(false)
  }
  const setMode = (nextReviewOnly: boolean, nextShuffled = shuffled) => {
    setReviewOnly(nextReviewOnly)
    setShuffled(nextShuffled)
    setIndex(0)
    setFlipped(false)
  }
  const toggleShuffle = () => {
    setShuffled((value) => !value)
    setShuffleSeed((value) => value + 1)
    setIndex(0)
    setFlipped(false)
  }
  const rateCurrent = (status: 'review' | 'known') => {
    if (!current) return
    setFlashcardRating(cardKey, status)
    goTo(index + 1)
  }
  const resetDeck = () => {
    clearFlashcardDeckRatings(deckKey)
    setReviewOnly(false)
    setIndex(0)
    setFlipped(false)
  }

  if (!isSelectedCatalogReady) {
    return (
      <main className="app-shell flashcard-shell">
        <TopBar title={selectedTrackInfo.title} />
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">Flashcards</p>
              <h2>Loading deck</h2>
              <p>Gathering this chapter&apos;s cards.</p>
            </div>
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell flashcard-shell">
      <TopBar title={selectedTrackInfo.title} />

      <section className="flashcard-header">
        <div>
          <p className="eyebrow">{selectedTrackInfo.title} &middot; {chapterDisplayName}</p>
          <h2>Flashcards</h2>
          <p>{cards.length} quick cards &middot; {knownCount} known &middot; {reviewCount} to review</p>
        </div>
        <button className="flashcard-header-action" onClick={goBack} type="button">
          <ArrowLeft size={16} /> Map
        </button>
      </section>

      <section className="flashcard-mode-row" aria-label="Flashcard study mode">
        <button className={!reviewOnly ? 'active' : ''} onClick={() => setMode(false)} type="button">
          All cards
        </button>
        <button className={reviewOnly ? 'active' : ''} onClick={() => setMode(true)} disabled={reviewCount === 0} type="button">
          Review only
        </button>
        <button className={shuffled ? 'active' : ''} onClick={toggleShuffle} type="button">
          <Shuffle size={14} /> Shuffle
        </button>
        <button onClick={resetDeck} disabled={touchedCount === 0} type="button">
          <RotateCcw size={14} /> Reset
        </button>
      </section>

      {current ? (
        <>
          <section className="flashcard-study">
            <div className="flashcard-progress">
              <span>{index + 1}/{studyCards.length} &middot; {passLabel}</span>
              <strong>{current.tag} &middot; {knownPct}% known</strong>
            </div>

            <div className="flashcard-meter" aria-label={`${knownCount} known out of ${cards.length} flashcards`}>
              <span style={{ width: `${knownPct}%` }} />
            </div>

            <button
              className={`flashcard-card${flipped ? ' is-flipped' : ''}`}
              onClick={() => setFlipped((value) => !value)}
              type="button"
              aria-label={flipped ? 'Show front of card' : 'Show back of card'}
            >
              <span className="flashcard-card-kicker">{flipped ? 'Back' : current.title}</span>
              <span className="flashcard-card-text">{flipped ? current.back : current.front}</span>
              <span className="flashcard-card-footer">
                <RotateCcw size={15} /> Tap to flip
              </span>
            </button>

            <div className="flashcard-controls">
              <button className="secondary" onClick={() => goTo(index - 1)} type="button">
                <ChevronLeft size={16} /> Previous
              </button>
              <button className="lets-go" onClick={() => setFlipped((value) => !value)} type="button">
                <Sparkles size={16} /> Flip
              </button>
              <button className="secondary" onClick={() => goTo(index + 1)} type="button">
                Next <ChevronRight size={16} />
              </button>
            </div>

            <div className="flashcard-rating-row">
              <button className="flashcard-review-btn" onClick={() => rateCurrent('review')} type="button">
                <RotateCcw size={16} /> Review again
              </button>
              <button className="flashcard-known-btn" onClick={() => rateCurrent('known')} type="button">
                <CheckCircle2 size={16} /> Got it
              </button>
            </div>

            {touchedCount === cards.length && (
              <div className="flashcard-complete-note">
                <strong>Deck pass complete.</strong>
                <span>{knownCount} known, {reviewCount} marked for another pass.</span>
              </div>
            )}
          </section>

        </>
      ) : (
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">{reviewOnly ? 'Review pass' : 'No deck yet'}</p>
              <h2>{reviewOnly ? 'No cards are marked for review' : 'This chapter does not have flashcards yet'}</h2>
              <p>{reviewOnly ? 'Use the full deck and tap Review again on cards you want to revisit.' : 'I wired the first syllabus-based pass for Quant Interview Core, Financial Modeling, and Investment Banking.'}</p>
            </div>
          </article>
        </section>
      )}

      <button className="back-btn" onClick={goBack} type="button">
        <ArrowLeft size={16} /> Back to chapter map
      </button>
    </main>
  )
}
