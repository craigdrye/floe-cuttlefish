export type Topic =
  | 'Mathematics'
  | 'Game theory'
  | 'Probability'
  | 'Expected value'
  | 'Statistics'
  | 'ML'
  | 'Software'
  | 'Research'
  | 'Medical'
  | 'Series 86'
  | 'Regulatory'
  | 'Clinical Research'
  | 'Supply Chain'
  | 'Technical Sales'
  | 'UX Research'
  | 'AP'
  | 'A-level'
  | 'Primary'
  | 'Fun'
  | 'University'
  | 'Career Skills'
  | 'Quant Finance'
  | 'Extension'

export type QuestionKind = 'quick' | 'deep'

export type Misconception = {
  tempting: string
  flaw: string
  reframe: string
}

export type QuestionReviewStatus = 'playable' | 'recoverable' | 'quarantined'

export type QuestionReviewFlag =
  | 'missing-prompt'
  | 'invalid-correct-answer'
  | 'insufficient-answer-choices'
  | 'placeholder-solution'
  | 'placeholder-answer-choice'
  | 'answer-leakage'
  | 'missing-lesson'

export type QuestionReview = {
  status: QuestionReviewStatus
  flags: QuestionReviewFlag[]
  notes: string[]
}

export type QuestionReviewOverride = {
  status?: QuestionReviewStatus
  addFlags?: QuestionReviewFlag[]
  removeFlags?: QuestionReviewFlag[]
  addNotes?: string[]
}

export type QuestionIngestionStage = 'raw' | 'normalized' | 'reviewed' | 'mapped'

export type QuestionSourceLicense =
  | 'unknown'
  | 'CC BY 4.0'
  | 'CC BY-SA 3.0'
  | 'CC BY-NC-SA 3.0'
  | 'CC BY-NC-SA 4.0'
  | 'CC BY-NC 3.0'
  | 'MIT'
  | 'platform-mixed'

export type QuestionCollectionMeta = {
  collectionId: string
  collectionLabel: string
  sourceName: string
  sourceLicense: QuestionSourceLicense
  sourceTrackId: string
  sourceChapter?: string
  ingestionStage: QuestionIngestionStage
  candidateTrackIds: string[]
  topicTags: string[]
}

export type Answer = {
  id: string
  label: string
  correct: boolean
  misconceptions?: Misconception[]
  showLesson?: boolean
  setShowLesson?: (show: boolean) => void
}

export type Question = {
  id: number
  kind: QuestionKind
  topic: Topic
  title: string
  chapter: string
  source?: string
  briefing: string
  setup?: string[]
  prompt: string
  fieldNote: string
  mentorHint: string
  answers: Answer[]
  solution: string
  lesson?: string
  xp: number
  review?: QuestionReview
  collection?: QuestionCollectionMeta
}

export type QuestionCatalog = Record<string, Question[]>
