import type { StateCreator } from 'zustand'
import type { AppState, DailyGameId, DailyPuzzleEntry, DailyPuzzleSlice } from './types'
import { DAILY_BONUS_LIMIT, todayKey } from '../lib/dailyPuzzle'

function freshEntry(date: string): DailyPuzzleEntry {
  return { date, dailyComplete: false, bonusUsed: 0 }
}

function rollEntry(prev: DailyPuzzleEntry | undefined, date: string): DailyPuzzleEntry {
  if (!prev || prev.date !== date) return freshEntry(date)
  return prev
}

export const createDailyPuzzleSlice: StateCreator<AppState, [], [], DailyPuzzleSlice> = (set, get) => ({
  dailyPuzzles: {},

  ensureDailyEntry: (gameId: DailyGameId) => {
    const date = todayKey()
    const current = get().dailyPuzzles[gameId]
    if (current && current.date === date) return current
    const next = freshEntry(date)
    set((state) => ({ dailyPuzzles: { ...state.dailyPuzzles, [gameId]: next } }))
    return next
  },

  markDailyComplete: (gameId: DailyGameId) => {
    const date = todayKey()
    set((state) => {
      const entry = rollEntry(state.dailyPuzzles[gameId], date)
      if (entry.dailyComplete) return state
      return {
        dailyPuzzles: {
          ...state.dailyPuzzles,
          [gameId]: { ...entry, dailyComplete: true },
        },
      }
    })
  },

  consumeBonus: (gameId: DailyGameId) => {
    const date = todayKey()
    set((state) => {
      const entry = rollEntry(state.dailyPuzzles[gameId], date)
      if (!entry.dailyComplete) return state
      if (entry.bonusUsed >= DAILY_BONUS_LIMIT) return state
      return {
        dailyPuzzles: {
          ...state.dailyPuzzles,
          [gameId]: { ...entry, bonusUsed: entry.bonusUsed + 1 },
        },
      }
    })
  },
})
