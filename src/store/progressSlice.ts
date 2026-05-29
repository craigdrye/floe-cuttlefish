import type { StateCreator } from 'zustand'
import type { AppState, ProgressSlice, BossWin, Achievement } from './types'

export const createProgressSlice: StateCreator<AppState, [], [], ProgressSlice> = (set) => ({
  combo: 0,
  maxCombo: 0,
  lastXpGain: null,
  achievements: [],
  pendingAchievement: null,
  petItems: [],
  equippedPetItems: { hat: null, buddy: null, glow: null, dance: null },
  bossWins: [],
  progress: {
    streak: 1,
    readiness: 18,
    completedToday: false,
    solved: [],
    lastVisit: '',
    xp: 0,
    energy: 5,
    activityLog: {},
    reviews: {},
    workedTrackIds: [],
  },

  setProgress: (updater) =>
    set((state) => ({
      progress: updater(state.progress),
    })),

  updateReview: (questionId, quality) =>
    set((state) => {
      const key = String(questionId)
      const item = state.progress.reviews[key] || {
        id: key,
        interval: 0,
        repetition: 0,
        efactor: 2.5,
        nextReviewDate: new Date().toISOString()
      }
      
      let { interval, repetition, efactor } = item
      
      if (quality >= 3) {
        if (repetition === 0) interval = 1
        else if (repetition === 1) interval = 6
        else interval = Math.round(interval * efactor)
        repetition++
      } else {
        repetition = 0
        interval = 1
      }
      
      efactor = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
      if (efactor < 1.3) efactor = 1.3
      
      const nextDate = new Date()
      nextDate.setDate(nextDate.getDate() + interval)
      
      const newItem = { ...item, interval, repetition, efactor, nextReviewDate: nextDate.toISOString() }
      
      return {
        progress: {
          ...state.progress,
          reviews: { ...state.progress.reviews, [key]: newItem }
        }
      }
    }),

  buyPetItem: (item) =>
    set((state) => {
      if (state.petItems.some((owned) => owned.id === item.id)) return state
      if (state.progress.streak < item.cost) return state
      return {
        petItems: [...state.petItems, { ...item, ownedAt: new Date().toISOString() }],
        equippedPetItems: { ...state.equippedPetItems, [item.slot]: item.id },
        progress: {
          ...state.progress,
          xp: state.progress.xp + item.xpBonus,
        },
      }
    }),

  equipPetItem: (slot, itemId) =>
    set((state) => ({
      equippedPetItems: { ...state.equippedPetItems, [slot]: itemId },
    })),

  recordBossWin: (win) =>
    set((state) => {
      if (state.bossWins.some((boss) => boss.id === win.id)) return state
      const full: BossWin = { ...win, wonAt: new Date().toISOString() }
      return {
        bossWins: [...state.bossWins, full],
        progress: {
          ...state.progress,
          xp: state.progress.xp + win.xpAwarded,
          readiness: Math.min(100, state.progress.readiness + 4),
        },
      }
    }),

  incrementCombo: () =>
    set((state) => {
      const newCombo = state.combo + 1
      return {
        combo: newCombo,
        maxCombo: Math.max(newCombo, state.maxCombo),
      }
    }),

  resetCombo: () => set({ combo: 0 }),

  setLastXpGain: (xp) => set({ lastXpGain: xp }),

  unlockAchievement: (achievement) =>
    set((state) => {
      if (state.achievements.some((a) => a.id === achievement.id)) return state
      const full: Achievement = { ...achievement, unlockedAt: new Date().toISOString() }
      return {
        achievements: [...state.achievements, full],
        pendingAchievement: full,
      }
    }),

  dismissAchievement: () => set({ pendingAchievement: null }),
})
