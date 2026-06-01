import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AppState } from './types'
import { createUISlice } from './uiSlice'
import { createAuthSlice } from './authSlice'
import { createProgressSlice } from './progressSlice'
import { createQuizSlice } from './quizSlice'
import { createDailyPuzzleSlice } from './dailyPuzzleSlice'

// Re-export types so other files can just import from useStore
export * from './types'

export const useStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createUISlice(...a),
      ...createAuthSlice(...a),
      ...createProgressSlice(...a),
      ...createQuizSlice(...a),
      ...createDailyPuzzleSlice(...a),
    }),
    {
      name: 'floe-storage-v7',
      partialize: (state) => ({
        progress: state.progress,
        selectedAge: state.selectedAge,
        selectedStageDetail: state.selectedStageDetail,
        onboardingAge: state.onboardingAge,
        onboardingUsername: state.onboardingUsername,
        onboardingEmail: state.onboardingEmail,
        selectedInterests: state.selectedInterests,
        selectedAdultFocus: state.selectedAdultFocus,
        thoughts: state.thoughts,
        remixSeeds: state.remixSeeds,
        wordingModes: state.wordingModes,
        achievements: state.achievements,
        misconceptionArtifacts: state.misconceptionArtifacts,
        flaggedQuestions: state.flaggedQuestions,
        repeatedQuestions: state.repeatedQuestions,
        questionQualityRatings: state.questionQualityRatings,
        flashcardRatings: state.flashcardRatings,
        teachBeforeQuestion: state.teachBeforeQuestion,
        petItems: state.petItems,
        equippedPetItems: state.equippedPetItems,
        bossWins: state.bossWins,
        maxCombo: state.maxCombo,
        mood: state.mood,
        darkMode: state.darkMode,
        focusMode: state.focusMode,
        user: state.user,
        savedUsers: state.savedUsers,
        dailyPuzzles: state.dailyPuzzles,
      }),
    }
  )
)
