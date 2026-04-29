import type { StateCreator } from 'zustand'
import type { AppState, AuthSlice, UserProfile } from './types'

export const createAuthSlice: StateCreator<AppState, [], [], AuthSlice> = (set) => ({
  user: null,
  savedUsers: [],

  login: (username) =>
    set((state) => {
      const user = state.savedUsers.find((u) => u.username === username)
      if (user) return { user }
      return state
    }),

  register: (username, email) =>
    set((state) => {
      if (state.savedUsers.some((u) => u.username === username)) return state
      const newUser: UserProfile = { username, email, isGuest: false, questionnaireAnswers: {} }
      return {
        user: newUser,
        savedUsers: [...state.savedUsers, newUser],
      }
    }),

  loginAsGuest: () =>
    set({
      user: { username: 'Guest', isGuest: true, questionnaireAnswers: {} },
    }),

  logout: () =>
    set({
      user: null,
      showProfile: false,
      showQuestionnaire: false,
      showAudience: true,
    }),

  submitQuestionnaire: (answers) =>
    set((state) => {
      if (!state.user) return state
      const updatedUser = { ...state.user, questionnaireAnswers: answers }
      return {
        user: updatedUser,
        savedUsers: state.user.isGuest ? state.savedUsers : state.savedUsers.map(u => u.username === updatedUser.username ? updatedUser : u)
      }
    }),
})
