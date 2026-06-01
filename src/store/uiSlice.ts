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
  floeMode: true,
  pendingStageCelebration: null,

  setShowWelcome: (show) => set({ showWelcome: show }),
  setShowAudience: (show) => set({ showAudience: show }),
  setShowInterests: (show) => set({ showInterests: show }),
  setShowProfile: (show) => set({ showProfile: show }),
  setShowQuestionnaire: (show) => set({ showQuestionnaire: show }),
  setScreen: (screen) => set({ screen }),
  setMode: (mode) => set({ mode }),
  setSelectedTrack: (trackId) =>
    // Switching tracks starts a new session for the adaptive picker, so
    // reseed sessionToken alongside the track change. Same idea as
    // chapterShuffleSeed = Date.now() in setSelectedChapter.
    set({ selectedTrack: trackId, sessionToken: Date.now().toString() }),
  setMood: (mood) => set({ mood }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleFocusMode: () => set((state) => ({ focusMode: !state.focusMode })),
  setFloeMode: (enabled) => set({ floeMode: enabled }),
  setPendingStageCelebration: (stage) => set({ pendingStageCelebration: stage }),
})
