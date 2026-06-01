import type { StateCreator } from 'zustand'
import type { AppScreen, AppState, QuizSlice } from './types'

export const createQuizSlice: StateCreator<AppState, [], [], QuizSlice> = (set) => ({
  selectedAge: 'career',
  selectedStageDetail: null,
  selectedDiscipline: 'All',
  onboardingAge: 18,
  onboardingUsername: '',
  onboardingEmail: '',
  onboardingMode: 'both',
  selectedInterests: [],
  selectedAdultFocus: [],
  index: 0,
  selectedAnswerId: null,
  showHint: false,
  remixSeeds: {},
  wordingModes: {},
  answerShuffleSeed: 0,
  calculatorInput: '',
  thoughts: {},
  wrongAnswerFeedback: {},
  misconceptionArtifacts: [],
  flaggedQuestions: [],
  repeatedQuestions: [],
  questionQualityRatings: {},
  flashcardRatings: {},
  showLesson: false,
  teachBeforeQuestion: true,
  selectedChapter: null,
  selectedLesson: null,
  chapterShuffleSeed: 0,
  // Seeded once at module-evaluation time (app mount). Reseeded on track
  // switch (uiSlice.setSelectedTrack) and on resetQuizState. The adaptive
  // question picker keys its memoized order off this token.
  sessionToken: Date.now().toString(),

  setSelectedAge: (age) => set({ selectedAge: age }),
  setSelectedStageDetail: (detail) => set({ selectedStageDetail: detail }),
  setSelectedDiscipline: (discipline) => set({ selectedDiscipline: discipline }),
  setOnboardingAge: (age) => set({ onboardingAge: age }),
  setOnboardingUsername: (username) => set({ onboardingUsername: username }),
  setOnboardingEmail: (email) => set({ onboardingEmail: email }),
  setOnboardingMode: (mode) => set({ onboardingMode: mode }),
  setSelectedInterests: (interests) => set({ selectedInterests: interests }),
  toggleSelectedInterest: (interest) =>
    set((state) => ({
      selectedInterests: state.selectedInterests.includes(interest)
        ? state.selectedInterests.filter((item) => item !== interest)
        : [...state.selectedInterests, interest],
    })),
  setSelectedAdultFocus: (focus) => set({ selectedAdultFocus: focus }),
  toggleSelectedAdultFocus: (focus) =>
    set((state) => ({
      selectedAdultFocus: state.selectedAdultFocus.includes(focus)
        ? state.selectedAdultFocus.filter((item) => item !== focus)
        : [...state.selectedAdultFocus, focus],
    })),

  setIndex: (index) =>
    set((state) => ({
      index: typeof index === 'function' ? index(state.index) : index,
    })),

  setSelectedAnswerId: (id) => set({ selectedAnswerId: id }),

  setShowHint: (show) =>
    set((state) => ({
      showHint: typeof show === 'function' ? show(state.showHint) : show,
    })),

  setRemixSeed: (questionId, seed) =>
    set((state) => ({
      remixSeeds: {
        ...state.remixSeeds,
        [questionId]: typeof seed === 'function' ? seed(state.remixSeeds[questionId] ?? 0) : seed,
      },
    })),

  setWordingMode: (questionId, mode) =>
    set((state) => ({
      wordingModes: {
        ...state.wordingModes,
        [questionId]: typeof mode === 'function' ? mode(state.wordingModes[questionId] ?? 0) : mode,
      },
    })),

  incrementAnswerShuffleSeed: () =>
    set((state) => ({ answerShuffleSeed: state.answerShuffleSeed + 1 })),

  setCalculatorInput: (input) => set({ calculatorInput: input }),

  setThought: (key, thought) =>
    set((state) => ({
      thoughts: { ...state.thoughts, [key]: thought },
    })),

  setWrongAnswerFeedback: (key, feedback) =>
    set((state) => ({
      wrongAnswerFeedback: { ...state.wrongAnswerFeedback, [key]: feedback },
    })),

  captureMisconception: (artifact) =>
    set((state) => {
      const exists = state.misconceptionArtifacts.some((item) => item.id === artifact.id && !item.clearedAt)
      if (exists) return state
      return {
        misconceptionArtifacts: [
          {
            ...artifact,
            capturedAt: new Date().toISOString(),
            clearedAt: null,
          },
          ...state.misconceptionArtifacts,
        ].slice(0, 24),
      }
    }),

  clearMisconception: (questionId) =>
    set((state) => ({
      misconceptionArtifacts: state.misconceptionArtifacts.map((item) =>
        item.questionId === questionId && !item.clearedAt
          ? { ...item, clearedAt: new Date().toISOString() }
          : item
      ),
    })),

  toggleFlagQuestion: (questionId) =>
    set((state) => ({
      flaggedQuestions: state.flaggedQuestions.includes(questionId)
        ? state.flaggedQuestions.filter((id) => id !== questionId)
        : [...state.flaggedQuestions, questionId],
    })),

  toggleRepeatQuestion: (questionId) =>
    set((state) => ({
      repeatedQuestions: state.repeatedQuestions.includes(questionId)
        ? state.repeatedQuestions.filter((id) => id !== questionId)
        : [...state.repeatedQuestions, questionId],
    })),

  setQuestionQualityRating: (questionId, rating) =>
    set((state) => {
      const current = state.questionQualityRatings[questionId] ?? {
        goodQuestion: 5,
        writingIssues: 5,
        updatedAt: new Date().toISOString(),
      }

      return {
        questionQualityRatings: {
          ...state.questionQualityRatings,
          [questionId]: {
            ...current,
            ...rating,
            updatedAt: new Date().toISOString(),
          },
        },
      }
    }),

  setFlashcardRating: (cardKey, status) =>
    set((state) => ({
      flashcardRatings: {
        ...state.flashcardRatings,
        [cardKey]: {
          status,
          updatedAt: new Date().toISOString(),
        },
      },
    })),

  clearFlashcardDeckRatings: (deckKey) =>
    set((state) => ({
      flashcardRatings: Object.fromEntries(
        Object.entries(state.flashcardRatings).filter(([cardKey]) => !cardKey.startsWith(`${deckKey}:`))
      ),
    })),

  setShowLesson: (show) =>
    set((state) => ({
      showLesson: typeof show === 'function' ? show(state.showLesson) : show,
    })),

  setTeachBeforeQuestion: (show) => set({ teachBeforeQuestion: show }),

  setSelectedChapter: (chapter) =>
    set({ selectedChapter: chapter, selectedLesson: null, chapterShuffleSeed: Date.now(), index: 0, selectedAnswerId: null, showHint: false, showLesson: false }),

  setSelectedLesson: (lesson) =>
    set({ selectedLesson: lesson, index: 0, selectedAnswerId: null, showHint: false, showLesson: false }),

  resetQuizState: () =>
    set({
      selectedAnswerId: null,
      showHint: false,
      showLesson: false,
      calculatorInput: '',
      // A "reset" semantically means the player wants to start fresh — give
      // them a new adaptive ordering on the way back in.
      sessionToken: Date.now().toString(),
    }),

  rerollSessionToken: () => set({ sessionToken: Date.now().toString() }),

  goHome: () =>
    set((state) => {
      const inStandaloneGame = state.screen === 'pong' || state.screen === 'invaders' || state.screen === 'present' || state.screen === 'guessGift' || state.screen === 'fight' || state.screen === 'wordle' || state.screen === 'quordle' || state.screen === 'octordle' || state.screen === 'connections' || state.screen === 'letterboxed' || state.screen === 'waffle' || state.screen === 'g2048' || state.screen === 'g2248' || state.screen === 'nerdle' || state.screen === 'sumplete' || state.screen === 'sudoku' || state.screen === 'kakuro' || state.screen === 'rikudo'
      const inGuessTrack = state.selectedTrack?.startsWith('guess') ?? false
      const targetScreen: AppScreen =
        inStandaloneGame || inGuessTrack ? 'games' :
        state.selectedTrack ? 'courses' :
        'hub'
      return {
        showWelcome: false,
        showAudience: false,
        showInterests: false,
        showProfile: false,
        showQuestionnaire: false,
        selectedTrack: null,
        screen: targetScreen,
        selectedAnswerId: null,
        showHint: false,
        showLesson: false,
      }
    }),
})
