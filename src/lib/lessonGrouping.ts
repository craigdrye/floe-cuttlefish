import type { Question } from '../data/questionCatalog'
import type { AgeGroup } from '../data/ageCatalog'
import { defaultDifficultyFor, shuffledQuestions } from './quizRuntime'

/**
 * A "lesson" inside a chapter sub-map. Lessons are stable, ordered slices of
 * a chapter's question bank, ramping from low difficulty (Lesson 1) to high
 * (Lesson N) so the chapter sub-map plays like a Duolingo unit.
 *
 * Lesson ids are deterministic per-chapter (`lesson-1`, `lesson-2`, ...) so
 * progress tracking and routing survive reloads and re-renders.
 */
export type Lesson = {
  id: string
  title: string
  index: number
  questions: Question[]
  difficulties: number[]
  /** average difficulty across the lesson's questions (1-5) */
  avgDifficulty: number
}

const MAX_LESSONS_PER_CHAPTER = 8
const TARGET_LESSON_SIZE = 10

/**
 * Build the ordered list of lessons for one chapter.
 *
 * Algorithm:
 *  1. Sort the chapter's questions by difficulty (using `defaultDifficultyFor`
 *     when an explicit `Question.difficulty` is missing).
 *  2. Bucket into N lessons of <= 10 questions each, where
 *     `N = clamp(ceil(total / 10), 1, MAX_LESSONS_PER_CHAPTER)`.
 *  3. Distribute difficulty across lessons: Lesson i (1-indexed) is centered
 *     around difficulty `1 + ((i - 1) * 4) / max(N - 1, 1)`. With a sorted
 *     pool and ascending bucket boundaries, this falls out naturally: the
 *     first contiguous slice is mostly 1s and 2s, the last is mostly 4s and 5s.
 *  4. Within a lesson, shuffle (seeded by lesson index) so the adaptive picker
 *     at trainer level still sees a varied order. The adaptive picker takes
 *     care of per-session ramping.
 *  5. If a chapter has <10 questions, render 1 lesson; if it has 11-20, 2
 *     lessons; etc., up to the 8-lesson cap (chapters with >80 questions
 *     pack the overflow into the last lesson).
 *
 * The function is pure and deterministic — same input → same output.
 */
export function buildLessonsForChapter(
  questions: Question[],
  ageGroup: AgeGroup,
): Lesson[] {
  if (questions.length === 0) return []

  // Preferred path: if every question in the chapter carries a `subTopic`
  // tag, group lessons by sub-topic. Each cluster becomes one lesson with
  // the cluster name as its title.
  const allHaveSubTopic = questions.every((q) => typeof q.subTopic === 'string' && q.subTopic.length > 0)
  if (allHaveSubTopic) {
    return buildSubTopicLessons(questions, ageGroup)
  }

  // Fallback: difficulty-sliced lessons. Sort by effective difficulty
  // (ascending), stable-ish: ties keep their original catalog order via the
  // secondary `id` compare.
  const sorted = [...questions].sort((a, b) => {
    const da = defaultDifficultyFor(a, ageGroup)
    const db = defaultDifficultyFor(b, ageGroup)
    if (da !== db) return da - db
    return a.id - b.id
  })

  const total = sorted.length
  const naturalCount = Math.max(1, Math.ceil(total / TARGET_LESSON_SIZE))
  const lessonCount = Math.min(MAX_LESSONS_PER_CHAPTER, naturalCount)

  // Compute slice boundaries. Spread questions as evenly as possible across
  // the N lessons; if total > MAX_LESSONS_PER_CHAPTER * 10, the last lesson
  // soaks up the leftovers.
  const lessons: Lesson[] = []
  const baseSize = Math.floor(total / lessonCount)
  const remainder = total % lessonCount

  let cursor = 0
  for (let i = 0; i < lessonCount; i += 1) {
    // Distribute remainder across the earliest lessons so the easier lessons
    // (which players actually finish) feel slightly fuller; the last lesson
    // absorbs any catalog overflow above MAX_LESSONS_PER_CHAPTER * 10.
    let size = baseSize + (i < remainder ? 1 : 0)
    if (i === lessonCount - 1) {
      // Final lesson: absorb anything left over (defensive against rounding).
      size = total - cursor
    }
    const slice = sorted.slice(cursor, cursor + size)
    cursor += size

    if (slice.length === 0) continue

    // Seeded shuffle inside the lesson so it doesn't always start on the
    // single easiest question. Seed is stable per-lesson so reloads don't
    // reshuffle.
    const seed = (i + 1) * 2654435761
    const shuffled = shuffledQuestions(slice, seed >>> 0)
    const difficulties = shuffled.map((q) => defaultDifficultyFor(q, ageGroup))
    const avgDifficulty = difficulties.length > 0
      ? difficulties.reduce((acc, d) => acc + d, 0) / difficulties.length
      : 0

    lessons.push({
      id: `lesson-${i + 1}`,
      title: `Lesson ${i + 1}`,
      index: i,
      questions: shuffled,
      difficulties,
      avgDifficulty,
    })
  }

  return lessons
}

/**
 * Group questions into one lesson per distinct `subTopic`. Lesson order is
 * driven by first-appearance of each subTopic in the input array (so the
 * catalog file's order matters). Within a lesson questions are sorted by
 * difficulty ascending then seeded-shuffled, matching the difficulty-slice
 * lesson behaviour.
 *
 * Cluster names with more than `MAX_LESSONS_PER_CHAPTER` entries cap at the
 * limit by merging extras into the last lesson; this should be rare since
 * sub-topic taxonomies are hand-curated.
 */
function buildSubTopicLessons(questions: Question[], ageGroup: AgeGroup): Lesson[] {
  const groups = new Map<string, Question[]>()
  const order: string[] = []
  for (const q of questions) {
    const key = q.subTopic ?? 'Other'
    let bucket = groups.get(key)
    if (!bucket) {
      bucket = []
      groups.set(key, bucket)
      order.push(key)
    }
    bucket.push(q)
  }

  // Soft cap on lesson count. If a chapter has more than 8 distinct
  // sub-topics, merge the tail into the last lesson rather than dropping any.
  let lessonNames = order
  if (order.length > MAX_LESSONS_PER_CHAPTER) {
    const head = order.slice(0, MAX_LESSONS_PER_CHAPTER - 1)
    const tailKeys = order.slice(MAX_LESSONS_PER_CHAPTER - 1)
    const mergedKey = tailKeys.join(' / ')
    const merged: Question[] = []
    for (const k of tailKeys) {
      const bucket = groups.get(k)
      if (bucket) merged.push(...bucket)
    }
    groups.set(mergedKey, merged)
    lessonNames = [...head, mergedKey]
  }

  const lessons: Lesson[] = []
  lessonNames.forEach((name, i) => {
    const bucket = groups.get(name) ?? []
    if (bucket.length === 0) return

    // Sort within cluster by difficulty ascending, then seeded shuffle so
    // reloads don't always start on the same question.
    const sorted = [...bucket].sort((a, b) => {
      const da = defaultDifficultyFor(a, ageGroup)
      const db = defaultDifficultyFor(b, ageGroup)
      if (da !== db) return da - db
      return a.id - b.id
    })
    const seed = (i + 1) * 2654435761
    const shuffled = shuffledQuestions(sorted, seed >>> 0)
    const difficulties = shuffled.map((q) => defaultDifficultyFor(q, ageGroup))
    const avgDifficulty = difficulties.length > 0
      ? difficulties.reduce((acc, d) => acc + d, 0) / difficulties.length
      : 0

    lessons.push({
      id: `lesson-${i + 1}`,
      title: name,
      index: i,
      questions: shuffled,
      difficulties,
      avgDifficulty,
    })
  })

  return lessons
}
