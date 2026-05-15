import type { StateCreator } from 'zustand'
import type { AppState, UISlice } from './types'

export const createUISlice: StateCreator<AppState, [], [], UISlice> = (set) => ({
  showWelcome: true,
  showAudience: false,
  showInterests: false,
  showProfile: false,
  showQuestionnaire: false,
  screen: 'map',
  mode: 'daily',
  selectedTrack: null,
  mood: null,
  darkMode: false,
  focusMode: false,
  pendingStageCelebration: null,

  setShowWelcome: (show) => set({ showWelcome: show }),
  setShowAudience: (show) => set({ showAudience: show }),
  setShowInterests: (show) => set({ showInterests: show }),
  setShowProfile: (show) => set({ showProfile: show }),
  setShowQuestionnaire: (show) => set({ showQuestionnaire: show }),
  setScreen: (screen) => set({ screen }),
  setMode: (mode) => set({ mode }),
  setSelectedTrack: (trackId) => set({ selectedTrack: trackId }),
  setMood: (mood) => set({ mood }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleFocusMode: () => set((state) => ({ focusMode: !state.focusMode })),
  setPendingStageCelebration: (stage) => set({ pendingStageCelebration: stage }),
})
