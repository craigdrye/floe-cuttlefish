import { Calendar, Sparkles, Moon } from 'lucide-react'
import type { DailyPuzzleControls } from '../../hooks/useDailyPuzzle'

interface Props {
  daily: DailyPuzzleControls
  /** Optional label override for the daily phase (defaults to "Today's puzzle"). */
  dailyLabel?: string
}

/**
 * Small status pill telling the player whether they're on the daily, a bonus, or done for the day.
 * Renders into the existing `.game-rules-banner` slot — styles live in App.css.
 */
export function DailyPuzzleBanner({ daily, dailyLabel = "Today's puzzle" }: Props) {
  if (daily.phase === 'daily') {
    return (
      <div className="daily-banner" data-phase="daily">
        <Calendar size={14} />
        <span>{dailyLabel} · {daily.date}</span>
      </div>
    )
  }
  if (daily.phase === 'bonus') {
    return (
      <div className="daily-banner" data-phase="bonus">
        <Sparkles size={14} />
        <span>Bonus {daily.bonusUsed + 1} of {daily.bonusLimit}</span>
      </div>
    )
  }
  return (
    <div className="daily-banner" data-phase="locked">
      <Moon size={14} />
      <span>Daily &amp; bonuses done — come back tomorrow</span>
    </div>
  )
}
