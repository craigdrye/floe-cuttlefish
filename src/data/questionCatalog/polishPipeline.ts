import type { Question } from './types'

/**
 * Shared polish pipeline for track question banks.
 *
 * Three optional polish operations, each one keyed by question id:
 *
 *  1. `applySubTopic` — attaches a `subTopic` cluster label to each question.
 *     The chapter sub-map groups lessons by these labels when ALL questions
 *     in a chapter carry a subTopic (see `lessonGrouping.ts`).
 *
 *  2. `applyMentorHint` — replaces the generic topic-scaffolded `mentorHint`
 *     with a bespoke one-line nudge.
 *
 *  3. `applyCorrectShortening` — replaces the correct-answer label and
 *     appends a `lessonAddendum` to the question's `lesson`. Used to fix
 *     length-heuristic violations (correct answer dramatically longer than
 *     wrongs).
 *
 * Each function is independent and idempotent. Compose by piping:
 *
 *   const polished = applyCorrectShortening(
 *     applyMentorHint(
 *       applySubTopic(questions, SUB_TOPICS),
 *       MENTOR_HINTS,
 *     ),
 *     CORRECT_SHORTENED,
 *   )
 *
 * Or via the `polish` helper:
 *
 *   const polished = polish(questions, { SUB_TOPICS, MENTOR_HINTS, CORRECT_SHORTENED })
 */

export type SubTopicsByCluster = Record<string, number[]>
export type SubTopicsByQuestionId = Record<number, string>
export type SubTopicsInput = SubTopicsByCluster | SubTopicsByQuestionId
export type MentorHintMap = Record<number, string>
export type CorrectShorteningMap = Record<number, { newCorrect?: string; lessonAddendum?: string }>

function isClusterShape(input: SubTopicsInput): input is SubTopicsByCluster {
  // Cluster shape has string keys; id-shape has numeric keys (which appear as
  // numeric strings on the runtime object). Cheap heuristic: peek at the first
  // entry and check whether the value is an array.
  const first = Object.values(input)[0]
  return Array.isArray(first)
}

export function buildSubTopicLookup(clusters: SubTopicsInput, source = 'unknown'): Map<number, string> {
  const map = new Map<number, string>()
  if (isClusterShape(clusters)) {
    for (const [cluster, ids] of Object.entries(clusters)) {
      for (const id of ids) {
        if (map.has(id)) {
          console.warn(`[polishPipeline:${source}] question ${id} appears in two sub-topic clusters: '${map.get(id)}' and '${cluster}'`)
        }
        map.set(id, cluster)
      }
    }
  } else {
    for (const [id, cluster] of Object.entries(clusters)) {
      map.set(Number(id), cluster)
    }
  }
  return map
}

export function applySubTopic(questions: Question[], subTopicLookup: Map<number, string>): Question[] {
  return questions.map((q) => {
    const subTopic = subTopicLookup.get(q.id)
    return subTopic ? { ...q, subTopic } : q
  })
}

export function applyMentorHint(questions: Question[], hints: MentorHintMap): Question[] {
  return questions.map((q) => {
    const hint = hints[q.id]
    return hint ? { ...q, mentorHint: hint } : q
  })
}

export function applyCorrectShortening(questions: Question[], fixes: CorrectShorteningMap): Question[] {
  return questions.map((q) => {
    const fix = fixes[q.id]
    if (!fix) return q
    const updated: Question = { ...q }
    if (fix.newCorrect) {
      updated.answers = q.answers.map((a) =>
        a.correct ? { ...a, label: fix.newCorrect! } : a,
      )
    }
    if (fix.lessonAddendum) {
      const existing = (q.lesson ?? '').trimEnd()
      updated.lesson = existing
        ? `${existing}\n\n${fix.lessonAddendum}`
        : fix.lessonAddendum
    }
    return updated
  })
}

export function polish(
  questions: Question[],
  bundles: Array<{
    subTopics?: SubTopicsInput
    subTopicLookup?: Map<number, string>
    mentorHints?: MentorHintMap
    correctShortened?: CorrectShorteningMap
    source?: string
  }>,
): Question[] {
  // Merge all bundles into single maps so we walk the question list only once.
  const subTopicLookup = new Map<number, string>()
  const mentorHints: MentorHintMap = {}
  const correctShortened: CorrectShorteningMap = {}

  for (const bundle of bundles) {
    if (bundle.subTopicLookup) {
      for (const [id, cluster] of bundle.subTopicLookup) subTopicLookup.set(id, cluster)
    }
    if (bundle.subTopics) {
      const lookup = buildSubTopicLookup(bundle.subTopics, bundle.source)
      for (const [id, cluster] of lookup) subTopicLookup.set(id, cluster)
    }
    if (bundle.mentorHints) Object.assign(mentorHints, bundle.mentorHints)
    if (bundle.correctShortened) Object.assign(correctShortened, bundle.correctShortened)
  }

  return applyCorrectShortening(
    applyMentorHint(applySubTopic(questions, subTopicLookup), mentorHints),
    correctShortened,
  )
}
