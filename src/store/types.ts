import type { AgeGroup, StageDetail } from '../data/ageCatalog/types'
import type { CourseTopicId } from '../lib/coursePersonalization'

export type AppScreen = 'hub' | 'courses' | 'games' | 'map' | 'lesson' | 'profile' | 'questionnaire' | 'pong' | 'invaders' | 'present' | 'slots' | 'fight' | 'wordle' | 'quordle' | 'octordle' | 'connections' | 'letterboxed' | 'waffle' | 'g2048' | 'g2248' | 'nerdle' | 'sumplete' | 'sudoku' | 'kakuro' | 'rikudo'
export type AppMode = 'daily' | 'practice' | 'doom' | 'podcast' | 'review'
export type Mood = 'fired' | 'good' | 'cozy' | 'curious' | null
export type AdultFocusOption = 'Geeky Fun' | 'Work Skills' | 'Technical Qualifications' | 'Interview Prep'

export interface UserProfile {
  username: string
  email?: string
  isGuest: boolean
  questionnaireAnswers: Record<string, string>
  onboardingAge?: number
  interests?: CourseTopicId[]
  adultFocus?: AdultFocusOption[]
  onboardingComplete?: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
}

export interface ReviewItem {
  id: string
  interval: number
  repetition: number
  efactor: number
  nextReviewDate: string
}

export interface MisconceptionArtifact {
  id: string
  questionId: number
  questionTitle: string
  chapter: string
  answerLabel: string
  tempting: string
  flaw: string
  reframe: string
  capturedAt: string
  clearedAt: string | null
}

export interface PetItem {
  id: string
  name: string
  slot: 'hat' | 'buddy' | 'glow' | 'dance'
  icon: string
  cost: number
  xpBonus: number
  ownedAt: string
}

export interface BossWin {
  id: string
  title: string
  trackId: string
  stage: number
  xpAwarded: number
  wonAt: string
}

export interface ProgressState {
  streak: number
  readiness: number
  completedToday: boolean
  solved: number[]
  lastVisit: string
  xp: number
  energy: number
  activityLog: Record<string, number>
  reviews: Record<string, ReviewItem>
  workedTrackIds: string[]
}

export interface UISlice {
  showWelcome: boolean
  showAudience: boolean
  showInterests: boolean
  showProfile: boolean
  showQuestionnaire: boolean
  screen: AppScreen
  mode: AppMode
  selectedTrack: string | null
  mood: Mood
  darkMode: boolean
  focusMode: boolean
  pendingStageCelebration: number | null

  setShowWelcome: (show: boolean) => void
  setShowAudience: (show: boolean) => void
  setShowInterests: (show: boolean) => void
  setShowProfile: (show: boolean) => void
  setShowQuestionnaire: (show: boolean) => void
  setScreen: (screen: AppScreen) => void
  setMode: (mode: AppMode) => void
  setSelectedTrack: (trackId: string | null) => void
  setMood: (mood: Mood) => void
  toggleDarkMode: () => void
  toggleFocusMode: () => void
  setPendingStageCelebration: (stage: number | null) => void
}

export interface AuthSlice {
  user: UserProfile | null
  savedUsers: UserProfile[]

  login: (username: string) => void
  register: (username: string, email?: string) => void
  loginAsGuest: () => void
  logout: () => void
  submitQuestionnaire: (answers: Record<string, string>) => void
}

export interface ProgressSlice {
  combo: number
  maxCombo: number
  lastXpGain: number | null
  achievements: Achievement[]
  pendingAchievement: Achievement | null
  petItems: PetItem[]
  equippedPetItems: Record<PetItem['slot'], string | null>
  bossWins: BossWin[]
  progress: ProgressState

  setProgress: (updater: (current: ProgressState) => ProgressState) => void
  updateReview: (questionId: number, quality: number) => void
  buyPetItem: (item: Omit<PetItem, 'ownedAt'>) => void
  equipPetItem: (slot: PetItem['slot'], itemId: string | null) => void
  recordBossWin: (win: Omit<BossWin, 'wonAt'>) => void
  incrementCombo: () => void
  resetCombo: () => void
  setLastXpGain: (xp: number | null) => void
  unlockAchievement: (achievement: Omit<Achievement, 'unlockedAt'>) => void
  dismissAchievement: () => void
}

export interface QuizSlice {
  selectedAge: AgeGroup
  selectedStageDetail: StageDetail | null
  selectedDiscipline: string
  onboardingAge: number
  onboardingUsername: string
  onboardingEmail: string
  onboardingMode: 'games' | 'quizzes' | 'both'
  selectedInterests: CourseTopicId[]
  selectedAdultFocus: AdultFocusOption[]
  index: number
  selectedAnswerId: string | null
  showHint: boolean
  remixSeeds: Record<number, number>
  wordingModes: Record<number, number>
  answerShuffleSeed: number
  calculatorInput: string
  thoughts: Record<string, string>
  wrongAnswerFeedback: Record<string, string>
  misconceptionArtifacts: MisconceptionArtifact[]
  flaggedQuestions: number[]
  repeatedQuestions: number[]
  showLesson: boolean
  selectedChapter: string | null
  chapterShuffleSeed: number

  setSelectedAge: (age: AgeGroup) => void
  setSelectedStageDetail: (detail: StageDetail | null) => void
  setSelectedDiscipline: (discipline: string) => void
  setOnboardingAge: (age: number) => void
  setOnboardingUsername: (username: string) => void
  setOnboardingEmail: (email: string) => void
  setOnboardingMode: (mode: 'games' | 'quizzes' | 'both') => void
  setSelectedInterests: (interests: CourseTopicId[]) => void
  toggleSelectedInterest: (interest: CourseTopicId) => void
  setSelectedAdultFocus: (focus: AdultFocusOption[]) => void
  toggleSelectedAdultFocus: (focus: AdultFocusOption) => void
  setIndex: (index: number | ((current: number) => number)) => void
  setSelectedAnswerId: (id: string | null) => void
  setShowHint: (show: boolean | ((current: boolean) => boolean)) => void
  setShowLesson: (show: boolean | ((current: boolean) => boolean)) => void
  setRemixSeed: (questionId: number, seed: number | ((current: number) => number)) => void
  setWordingMode: (questionId: number, mode: number | ((current: number) => number)) => void
  incrementAnswerShuffleSeed: () => void
  setCalculatorInput: (input: string) => void
  setThought: (key: string, thought: string) => void
  setWrongAnswerFeedback: (key: string, feedback: string) => void
  captureMisconception: (artifact: Omit<MisconceptionArtifact, 'capturedAt' | 'clearedAt'>) => void
  clearMisconception: (questionId: number) => void
  toggleFlagQuestion: (questionId: number) => void
  toggleRepeatQuestion: (questionId: number) => void
  setSelectedChapter: (chapter: string | null) => void
  resetQuizState: () => void
  goHome: () => void
}

export type AppState = UISlice & AuthSlice & ProgressSlice & QuizSlice
