import { useEffect, useMemo } from 'react'
import { useStore } from '../store/useStore'
import type { DailyGameId } from '../store/types'
import { DAILY_BONUS_LIMIT, todayKey } from '../lib/dailyPuzzle'

export type DailyPhase = 'daily' | 'bonus' | 'locked'

export interface DailyPuzzleControls {
  /** YYYY-MM-DD this hook is reasoning about. */
  date: string
  /** 'daily' before the daily is finished, 'bonus' while bonuses remain, 'locked' once exhausted. */
  phase: DailyPhase
  /** Convenience: true when the current puzzle is the daily one. */
  isDaily: boolean
  /** Has the daily been marked complete (win or loss)? */
  dailyComplete: boolean
  /** Number of bonus puzzles consumed today (0..3). */
  bonusUsed: number
  /** Bonus puzzles still available (0..3). */
  bonusRemaining: number
  /** Cap for bonuses per day. */
  bonusLimit: number
  /** Mark today's daily as finished. Idempotent. */
  finishDaily: () => void
  /** Consume one bonus play. No-op once the cap is hit. */
  consumeBonus: () => void
}

/**
 * Game-side hook for the daily/bonus puzzle flow. Mount it once per screen; it
 * keeps the store entry rolled forward to today and exposes the small set of
 * commands a game needs (finish daily, take a bonus).
 */
export function useDailyPuzzle(gameId: DailyGameId): DailyPuzzleControls {
  const entry = useStore((s) => s.dailyPuzzles[gameId])
  const ensureDailyEntry = useStore((s) => s.ensureDailyEntry)
  const markDailyComplete = useStore((s) => s.markDailyComplete)
  const consumeBonus = useStore((s) => s.consumeBonus)

  useEffect(() => {
    ensureDailyEntry(gameId)
  }, [gameId, ensureDailyEntry])

  return useMemo<DailyPuzzleControls>(() => {
    const date = todayKey()
    const fresh =
      entry && entry.date === date
        ? entry
        : { date, dailyComplete: false, bonusUsed: 0 }
    const phase: DailyPhase = !fresh.dailyComplete
      ? 'daily'
      : fresh.bonusUsed >= DAILY_BONUS_LIMIT
        ? 'locked'
        : 'bonus'
    return {
      date,
      phase,
      isDaily: phase === 'daily',
      dailyComplete: fresh.dailyComplete,
      bonusUsed: fresh.bonusUsed,
      bonusRemaining: Math.max(0, DAILY_BONUS_LIMIT - fresh.bonusUsed),
      bonusLimit: DAILY_BONUS_LIMIT,
      finishDaily: () => markDailyComplete(gameId),
      consumeBonus: () => consumeBonus(gameId),
    }
  }, [entry, gameId, markDailyComplete, consumeBonus])
}
