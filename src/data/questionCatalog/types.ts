export type Topic =
  | 'Mathematics'
  | 'Game theory'
  | 'Probability'
  | 'Expected value'
  | 'Statistics'
  | 'ML'
  | 'Software'
  | 'Research'
  | 'Climate Science'
  | 'Medical'
  | 'Series 86'
  | 'Regulatory'
  | 'Clinical Research'
  | 'Supply Chain'
  | 'Technical Sales'
  | 'UX Research'
  | 'AP'
  | 'A-level'
  | 'High'
  | 'Primary'
  | 'Fun'
  | 'University'
  | 'Career Skills'
  | 'Quant Finance'
  | 'Extension'
  | 'Science'

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

export type QuestionMedia = {
  type: 'image'
  src: string
  alt: string
  label?: string
  caption?: string
}

export type Question = {
  id: number
  kind: QuestionKind
  topic: Topic
  title: string
  chapter: string
  source?: string
  /** Internal-only provenance flag: true = AI-generated question (not human-curated/sourced). Never shown to learners. */
  generated?: boolean
  briefing: string
  setup?: string[]
  /**
   * Canonical per-question difficulty rating used by the adaptive question-ordering
   * picker. 1 = entry-friendly (easiest), 5 = mastery-level integration (hardest).
   * Optional; consumers should provide a sensible default fallback (typically 2-3)
   * when missing.
   */
  difficulty?: 1 | 2 | 3 | 4 | 5
  /**
   * Audience tier marker used mainly by Guess-the-X tracks to set picture/voice
   * register (kids → adults → experts). Distinct from `difficulty`, which captures
   * intra-track progression. Optional.
   */
  difficultyTier?: 'kids' | 'adults' | 'experts'
  /**
   * Optional sub-topic / lesson-cluster label within a chapter. When present,
   * the chapter sub-map groups lessons by this label instead of by difficulty
   * slice. Examples: "Backward Induction" inside Brain Teasers; "Greeks"
   * inside Finance. Distinct from `chapter` (which mirrors the syllabus
   * heading) and `topic` (which is the top-level subject).
   */
  subTopic?: string
  media?: QuestionMedia | QuestionMedia[]
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
