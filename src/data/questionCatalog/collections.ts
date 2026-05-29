import type { Question, QuestionCollectionMeta, QuestionSourceLicense } from './types'

const sourceLicenseRegistry: Record<string, QuestionSourceLicense> = {
  OpenStax: 'CC BY 4.0',
  LibreTexts: 'CC BY 4.0',
  WeBWorK: 'CC BY-NC-SA 3.0',
  'Open Logic Project': 'CC BY 4.0',
  OpenIntro: 'CC BY-SA 3.0',
  'IMS Tutorials': 'CC BY-SA 3.0',
  OpenSAT: 'unknown',
  OpenDSA: 'MIT',
  OpenTriviaQA: 'unknown',
  'Khan Academy': 'CC BY-NC-SA 3.0',
  'FreeCodeCamp': 'CC BY-NC-SA 4.0',
  Wikibooks: 'CC BY-SA 3.0',
  Kolibri: 'platform-mixed',
  'CK-12': 'unknown',
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function titleCaseFromTrackId(trackId: string) {
  return trackId
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (match) => match.toUpperCase())
}

function uniqueTags(question: Question) {
  return Array.from(
    new Set([
      question.topic,
      question.chapter,
      ...(question.source ? [question.source] : []),
    ].filter(Boolean)),
  )
}

export function sourceLicenseForQuestion(question: Question): QuestionSourceLicense {
  if (!question.source) return 'unknown'
  return sourceLicenseRegistry[question.source] ?? 'unknown'
}

export function buildQuestionCollectionMeta(question: Question, trackId: string): QuestionCollectionMeta {
  const sourceName = question.source ?? 'Internal'
  const sourceTrackId = trackId
  const sourceTrackLabel = titleCaseFromTrackId(trackId)

  return {
    collectionId: `${slugify(sourceName)}::${slugify(sourceTrackId)}`,
    collectionLabel: `${sourceName} / ${sourceTrackLabel}`,
    sourceName,
    sourceLicense: sourceLicenseForQuestion(question),
    sourceTrackId,
    sourceChapter: question.chapter,
    ingestionStage: 'reviewed',
    candidateTrackIds: [trackId],
    topicTags: uniqueTags(question),
  }
}

export function ensureQuestionCollectionMeta(question: Question, trackId: string): Question {
  if (question.collection) return question
  return {
    ...question,
    collection: buildQuestionCollectionMeta(question, trackId),
  }
}
