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

export type QuestionKind = 'quick' | 'deep'

export type Misconception = {
  tempting: string
  flaw: string
  reframe: string
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
  briefing: string
  setup?: string[]
  prompt: string
  fieldNote: string
  mentorHint: string
  answers: Answer[]
  solution: string
  lesson?: string
  xp: number
}

export type QuestionCatalog = Record<string, Question[]>
