import { useStore } from '../../store/useStore'
import { startOfToday, subDays, format } from 'date-fns'

export function StreakCalendar() {
  const { progress } = useStore()
  const milestones = [
    { days: 3, label: 'Shell spark' },
    { days: 7, label: 'Week reef' },
    { days: 14, label: 'Moon tide' },
    { days: 30, label: 'Deep current' },
  ]
  
  // Generate last 28 days for the contribution grid (4 weeks)
  const today = startOfToday()
  const days = Array.from({ length: 28 }, (_, i) => {
    const d = subDays(today, 27 - i)
    return format(d, 'yyyy-MM-dd')
  })

  // Group into weeks (7 days each)
  const weeks = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }

  const getIntensity = (dateKey: string) => {
    const xp = progress.activityLog?.[dateKey] || 0
    if (xp === 0) return 'level-0'
    if (xp < 50) return 'level-1'
    if (xp < 100) return 'level-2'
    if (xp < 200) return 'level-3'
    return 'level-4'
  }

  return (
    <div className="streak-calendar">
      <div className="calendar-header">
        <h3>Activity</h3>
        <span className="calendar-total">{Object.values(progress.activityLog || {}).reduce((a, b) => a + b, 0)} XP All Time</span>
      </div>
      
      <div className="calendar-grid">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="calendar-week">
            {week.map(day => (
              <div 
                key={day} 
                className={`calendar-day ${getIntensity(day)}`}
                title={`${day}: ${progress.activityLog?.[day] || 0} XP`}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="calendar-legend">
        <span>Less</span>
        <div className="calendar-day level-0" />
        <div className="calendar-day level-1" />
        <div className="calendar-day level-2" />
        <div className="calendar-day level-3" />
        <div className="calendar-day level-4" />
        <span>More</span>
      </div>

      <div className="streak-milestones" aria-label="Streak rewards">
        {milestones.map((milestone) => (
          <div key={milestone.days} className={`streak-milestone ${progress.streak >= milestone.days ? 'unlocked' : ''}`}>
            <strong>{milestone.days}</strong>
            <span>{milestone.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
