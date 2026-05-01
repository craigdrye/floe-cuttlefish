import type { StateCreator } from 'zustand'
import type { AppState, QuizSlice } from './types'

export const createQuizSlice: StateCreator<AppState, [], [], QuizSlice> = (set) => ({
  selectedAge: 'career',
  selectedStageDetail: null,
  selectedDiscipline: 'All',
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
  showLesson: false,
  selectedChapter: null,
  chapterShuffleSeed: 0,

  setSelectedAge: (age) => set({ selectedAge: age }),
  setSelectedStageDetail: (detail) => set({ selectedStageDetail: detail }),
  setSelectedDiscipline: (discipline) => set({ selectedDiscipline: discipline }),

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

  setShowLesson: (show) =>
    set((state) => ({
      showLesson: typeof show === 'function' ? show(state.showLesson) : show,
    })),

  setSelectedChapter: (chapter) =>
    set({ selectedChapter: chapter, chapterShuffleSeed: Date.now(), index: 0, selectedAnswerId: null, showHint: false, showLesson: false }),

  resetQuizState: () =>
    set({
      selectedAnswerId: null,
      showHint: false,
      showLesson: false,
      calculatorInput: '',
    }),

  goHome: () =>
    set({
      showWelcome: false,
      showAudience: false,
      showProfile: false,
      showQuestionnaire: false,
      selectedTrack: null,
      screen: 'map',
      selectedAnswerId: null,
      showHint: false,
      showLesson: false,
    }),
})
