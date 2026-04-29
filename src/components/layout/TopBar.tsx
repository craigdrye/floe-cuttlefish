import { Flame, Star, Home, User } from 'lucide-react'
import { useStore } from '../../store/useStore'

interface Props {
  title: string
  showReferenceGuide?: boolean
}

export function TopBar({ title }: Props) {
  const { progress, goHome, maxCombo, user, setShowProfile } = useStore()

  const handleProfileClick = () => {
    setShowProfile(true)
  }

  return (
    <nav className="topbar">
      <div className="topbar-left">
        <button className="stat-chip" onClick={goHome} type="button" title="Home">
          <Home size={14} />
        </button>
        <span className="topbar-title">{title}</span>
      </div>
      <div className="topbar-right">
        <span className="stat-chip stat-chip-streak">
          <Flame size={13} /> <strong>{progress.streak} day</strong>
        </span>
        <span className="stat-chip" title="Focus energy">
          ❤️ <strong>{progress.energy}/5</strong>
        </span>
        <span className="stat-chip stat-chip-xp">
          <Star size={13} /> <strong>{progress.xp} XP</strong>
        </span>
        {maxCombo >= 3 && (
          <span className="stat-chip stat-chip-combo">
            <strong>{maxCombo}x</strong>
          </span>
        )}
        <button className="profile-btn" onClick={handleProfileClick} type="button" title="Profile">
          {user && !user.isGuest ? (
            <span className="profile-initial">{user.username.charAt(0).toUpperCase()}</span>
          ) : (
            <User size={15} />
          )}
        </button>
      </div>
    </nav>
  )
}
