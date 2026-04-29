import { useEffect, useState } from 'react'
import { ArrowLeft, User, Flame, Star, Trophy, Sparkles, LogOut, Eye, EyeOff, Home } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { FloatingParticles } from '../common/FloatingParticles'
import { StreakCalendar } from '../common/StreakCalendar'
import { getRecommendations } from '../../lib/recommendationEngine'
import { getFilteredTracks } from '../../lib/trackData'
import { homePhases, petShopItems, getHomePhase, getNextHomePhase } from '../../lib/rewardSystem'

export function ProfileScreen() {
  const {
    user,
    progress,
    maxCombo,
    achievements,
    setShowProfile,
    setShowQuestionnaire,
    logout,
    setSelectedTrack,
    setScreen,
    focusMode,
    toggleFocusMode,
    petItems,
    equippedPetItems,
    buyPetItem,
    equipPetItem,
    bossWins,
  } = useStore()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const recommendedTrackIds = user && user.questionnaireAnswers 
    ? getRecommendations(user.questionnaireAnswers) 
    : []
    
  const allTracks = getFilteredTracks('career', null, 'All') // Get all possible tracks
  const recommendedTracks = allTracks.filter(t => recommendedTrackIds.includes(t.id))

  const homePhase = getHomePhase(progress.xp)
  const nextHomePhase = getNextHomePhase(progress.xp)
  const nextHomePercent = nextHomePhase
    ? ((progress.xp - homePhase.minXp) / (nextHomePhase.minXp - homePhase.minXp)) * 100
    : 100
  const endgameReached = homePhase.id === 'nebula-party'

  const equippedItems = ['hat', 'buddy', 'glow', 'dance'].map((slot) => {
    const itemId = equippedPetItems[slot as keyof typeof equippedPetItems]
    return itemId ? petShopItems.find((i) => i.id === itemId) : null
  })

  const ownedItemIds = new Set(petItems.map((i) => i.id))

  const handleLogout = () => {
    logout()
  }

  return (
    <main className={`profile-shell ${mounted ? 'mounted' : ''}`}>
      <FloatingParticles variant="ambient" />
      <div className="profile-container">
        <header className="profile-header" style={{ position: 'relative' }}>
          <button 
            type="button" 
            onClick={() => setShowProfile(false)} 
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--ocean-deep)', cursor: 'pointer', padding: '8px' }}
            aria-label="Back to home"
          >
            <Home size={24} />
          </button>
          <div className="profile-avatar">
            {user && !user.isGuest ? (
              <span>{user.username.charAt(0).toUpperCase()}</span>
            ) : (
              <User size={32} />
            )}
          </div>
          <h1>{user ? user.username : 'Guest Player'}</h1>
          {user && user.email && <p className="profile-email">{user.email}</p>}
        </header>

        {!user?.questionnaireAnswers || Object.keys(user.questionnaireAnswers).length === 0 ? (
          <section className="profile-onboarding">
            <div className="onboarding-card">
              <div className="onboarding-content">
                <h2>Build Your Profile</h2>
                <p>Answer a few fun questions so Floe can recommend the perfect paths for you.</p>
              </div>
              <button 
                className="onboarding-btn"
                onClick={() => setShowQuestionnaire(true)}
              >
                <Sparkles size={16} />
                Get to Know Me
              </button>
            </div>
          </section>
        ) : (
          <section className="profile-recommendations">
            <h2>Recommended for You</h2>
            {recommendedTracks.length > 0 ? (
              <div className="recommendations-list">
                {recommendedTracks.map(track => (
                  <button
                    key={track.id}
                    className="recommendation-card"
                    onClick={() => {
                      setSelectedTrack(track.id)
                      setScreen('map')
                      setShowProfile(false)
                    }}
                  >
                    <span className="rec-icon">{track.icon}</span>
                    <div className="rec-info">
                      <strong>{track.title}</strong>
                      <span>{track.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="no-recs">Check the track select screen for more paths!</p>
            )}
            
            <button 
                className="retake-btn"
                onClick={() => setShowQuestionnaire(true)}
              >
                Retake Questionnaire
              </button>
          </section>
        )}

        <section className="profile-stats">
          <div className="stat-card">
            <Flame className="stat-icon streak-icon" size={24} />
            <div className="stat-info">
              <strong>{progress.streak}</strong>
              <span>Day Streak</span>
            </div>
          </div>
          <div className="stat-card">
            <Star className="stat-icon xp-icon" size={24} />
            <div className="stat-info">
              <strong>{progress.xp}</strong>
              <span>Total XP</span>
            </div>
          </div>
          <div className="stat-card">
            <Trophy className="stat-icon combo-icon" size={24} />
            <div className="stat-info">
              <strong>{maxCombo}×</strong>
              <span>Max Combo</span>
            </div>
          </div>
        </section>

        <section className="profile-activity">
          <StreakCalendar />
        </section>



        <section className={`pet-arc ${endgameReached ? 'nebula-complete' : ''}`} aria-label="Floe reward system" style={{ marginTop: '2rem' }}>
          <article className="pet-card">
            <div className="pet-stage">
              <div className="pet-floe">
                <img src="/assets/welcome/welcome-cuttlefish-explorer.png" alt="Floe" />
                {equippedItems.map((item) => item && (
                  <span key={item.id} className={`pet-accessory slot-${item.slot}`}>{item.icon}</span>
                ))}
              </div>
              <div className="pet-stats">
                <p className="eyebrow">Floe Tamagotchi</p>
                <h2>{equippedItems.some(i => i !== null) ? 'Floe is dressed for the run' : 'Floe wants a little outfit'}</h2>
                <p>Streak days unlock accessories. Buying one immediately grants bonus XP and can be equipped like a tiny trophy.</p>
                <div className="pet-chip-row">
                  <span><Flame size={14} /> {progress.streak} streak days</span>
                  <span><Trophy size={14} /> {petItems.length}/{petShopItems.length} items</span>
                  <span><Star size={14} /> {bossWins.length} bosses</span>
                </div>
              </div>
            </div>
          </article>

          <article className="home-card">
            <div className="home-card-top">
              <div>
                <p className="eyebrow">Underwater home</p>
                <h2><Star size={20} /> {homePhase.title}</h2>
              </div>
              <span className="home-icon">{homePhase.icon}</span>
            </div>
            <p>{homePhase.description}</p>
            <div className="home-progress" aria-label={nextHomePhase ? `${nextHomePercent}% to ${nextHomePhase.title}` : 'Endgame home reached'}>
              <span style={{ width: `${Math.min(100, Math.max(0, nextHomePercent))}%` }} />
            </div>
            <small>{nextHomePhase ? `${nextHomePhase.minXp - progress.xp} XP until ${nextHomePhase.title}` : 'Endgame reached. Keep learning to decorate the nebula.'}</small>
            {endgameReached && (
              <div className="nebula-party">
                <Sparkles size={18} />
                <strong>Spaceship launched: dance party unlocked.</strong>
                <span>🌈 🐈 🐕‍🦺 ✨</span>
              </div>
            )}
          </article>
        </section>

        <section className="pet-shop" aria-label="Floe accessory shop">
          <div className="pet-shop-header">
            <div>
              <p className="eyebrow">Streak shop</p>
              <h2><Star size={20} /> Accessories that feed XP</h2>
            </div>
            <span>Use streak milestones, not coins.</span>
          </div>
          <div className="shop-grid">
            {petShopItems.map((item) => {
              const owned = ownedItemIds.has(item.id)
              const equipped = equippedPetItems[item.slot] === item.id
              const locked = progress.streak < item.cost
              return (
                <article key={item.id} className={`shop-item ${owned ? 'owned' : ''} ${locked ? 'locked' : ''}`}>
                  <span className="shop-icon">{item.icon}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.cost} day streak · +{item.xpBonus} XP · {item.slot}</small>
                  </div>
                  {owned ? (
                    <button type="button" className={equipped ? 'equipped' : ''} onClick={() => equipPetItem(item.slot, equipped ? null : item.id)}>
                      {equipped ? 'Equipped' : 'Equip'}
                    </button>
                  ) : (
                    <button type="button" disabled={locked} onClick={() => buyPetItem(item)}>
                      {locked ? 'Locked' : 'Buy'}
                    </button>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="home-timeline" aria-label="Endgame progression">
          {homePhases.map((phase) => (
            <span key={phase.id} className={progress.xp >= phase.minXp ? 'active' : ''}>
              <strong>{phase.icon}</strong>
              {phase.title}
            </span>
          ))}
        </section>

        <section className="profile-achievements">
          <h2>Achievements</h2>
          {achievements.length > 0 ? (
            <div className="achievements-grid">
              {achievements.map((a) => (
                <div key={a.id} className="achievement-item">
                  <span className="ach-icon">{a.icon}</span>
                  <div className="ach-text">
                    <strong>{a.title}</strong>
                    <small>{a.description}</small>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-achievements">Start training to earn achievements!</p>
          )}
        </section>

        <section className="profile-settings" style={{ marginTop: '2rem', marginBottom: '1rem', background: 'var(--card-bg)', borderRadius: '16px', padding: '1.5rem' }}>
          <h2>Settings</h2>
          <div className="setting-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Focus Mode</strong>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Disable particles and animations for deep work.</p>
            </div>
            <button 
              onClick={toggleFocusMode}
              style={{
                background: focusMode ? 'var(--primary-color)' : 'var(--input-bg)',
                color: focusMode ? 'white' : 'var(--text-primary)',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              {focusMode ? <EyeOff size={18} /> : <Eye size={18} />}
              {focusMode ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </section>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      <button
        className="back-btn"
        onClick={() => setShowProfile(false)}
        type="button"
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </main>
  )
}
