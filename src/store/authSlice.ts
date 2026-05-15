import type { StateCreator } from 'zustand'
import type { AppState, AuthSlice, UserProfile } from './types'

export const createAuthSlice: StateCreator<AppState, [], [], AuthSlice> = (set) => ({
  user: null,
  savedUsers: [],

  login: (username) =>
    set((state) => {
      const identifier = username.trim().toLowerCase()
      const user = state.savedUsers.find((u) =>
        u.username.toLowerCase() === identifier || u.email?.toLowerCase() === identifier
      )
      if (user) {
        return {
          user,
          onboardingAge: user.onboardingAge ?? state.onboardingAge,
          onboardingUsername: user.username,
          onboardingEmail: user.email ?? state.onboardingEmail,
          selectedInterests: user.interests ?? state.selectedInterests,
          selectedAdultFocus: user.adultFocus ?? state.selectedAdultFocus,
        }
      }
      return state
    }),

  register: (username, email) =>
    set((state) => {
      const identifier = username.trim()
      const normalizedIdentifier = identifier.toLowerCase()
      const normalizedEmail = email?.trim().toLowerCase()
      const existingUser = state.savedUsers.find((u) =>
        u.username.toLowerCase() === normalizedIdentifier ||
        (normalizedEmail ? u.email?.toLowerCase() === normalizedEmail : false)
      )
      if (existingUser) {
        const updatedUser: UserProfile = {
          ...existingUser,
          email: email?.trim() || existingUser.email,
          onboardingAge: state.onboardingAge,
          interests: state.selectedInterests,
          adultFocus: state.selectedAdultFocus,
          onboardingComplete: true,
        }
        return {
          user: updatedUser,
          savedUsers: state.savedUsers.map((user) => user.username === existingUser.username ? updatedUser : user),
        }
      }
      const newUser: UserProfile = {
        username: identifier,
        email: email?.trim() || undefined,
        isGuest: false,
        questionnaireAnswers: {},
        onboardingAge: state.onboardingAge,
        interests: state.selectedInterests,
        adultFocus: state.selectedAdultFocus,
        onboardingComplete: true,
      }
      return {
        user: newUser,
        onboardingUsername: newUser.username,
        onboardingEmail: newUser.email ?? state.onboardingEmail,
        savedUsers: [...state.savedUsers, newUser],
      }
    }),

  loginAsGuest: () =>
    set((state) => ({
      user: {
        username: 'Guest',
        isGuest: true,
        questionnaireAnswers: {},
        onboardingAge: state.onboardingAge,
        interests: state.selectedInterests,
        adultFocus: state.selectedAdultFocus,
        onboardingComplete: true,
      },
    })),

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
