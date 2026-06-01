import type { Question } from '../data/questionCatalog'
import { CURATED_FLASHCARD_DECKS } from '../data/curatedFlashcards'

export type Flashcard = {
  id: string
  chapter: string
  title: string
  front: string
  back: string
  tag: string
  sourceQuestionId?: number
}

function clean(value?: string) {
  return (value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function deckKey(trackId: string, chapter?: string) {
  return `${trackId}:${clean(chapter)}` as `${string}:${string}`
}

export function hasFlashcardsForTrack(trackId: string) {
  return Object.keys(CURATED_FLASHCARD_DECKS).some((key) => key.startsWith(`${trackId}:`))
}

export function buildChapterFlashcards(trackId: string, chapterQuestions: Question[] | null | undefined): Flashcard[] {
  const chapter = chapterQuestions?.[0]?.chapter
  return CURATED_FLASHCARD_DECKS[deckKey(trackId, chapter)] ?? []
}
