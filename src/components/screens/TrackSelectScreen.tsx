import { useEffect, useState } from 'react'
import { Flame, Star, User, ArrowLeft, Trophy } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { getFilteredTracks, allTracks } from '../../lib/trackData'

const heroCharacters = [
  '/assets/cuttlefish/cuttlefish-color-flow-01.png',
  '/assets/cuttlefish/cuttlefish-color-flow-02.png',
  '/assets/cuttlefish/cuttlefish-color-flow-03.png',
  '/assets/cuttlefish/cuttlefish-color-flow-04.png',
  '/assets/cuttlefish/cuttlefish-color-flow-05.png',
  '/assets/cuttlefish/cuttlefish-color-flow-06.png',
  '/assets/cuttlefish/cuttlefish-color-flow-07.png',
  '/assets/cuttlefish/cuttlefish-color-flow-08.png',
]



const disciplineCharacters: Record<string, string> = {
  'Maths': '/assets/fun_characters_transparent/einstein.png',
  'Science': '/assets/fun_characters_transparent/science.png',
  'English': '/assets/fun_characters_transparent/scholar.png',
  'History': '/assets/fun_characters_transparent/history.png',
  'Geography': '/assets/fun_characters_transparent/explorer.png',
  'Philosophy': '/assets/fun_characters_transparent/philosophy.png',
  'Finance': '/assets/fun_characters_transparent/finance.png',
  'Technology': '/assets/fun_characters_transparent/mechanic.png',
  'Space': '/assets/fun_characters_transparent/space.png',
  'Astronomy': '/assets/fun_characters_transparent/astronomy.png',
}

const disciplineColors: Record<string, string> = {
  'Maths': '#3b82f6',
  'Mathematics': '#3b82f6',
  'Science': '#10b981',
  'English': '#f59e0b',
  'History': '#d97706',
  'Geography': '#14b8a6',
  'Philosophy': '#8b5cf6',
  'Finance': '#059669',
  'Technology': '#6366f1',
  'Space': '#6d28d9',
  'Core Curriculum': '#4b7c6f',
}

function MenuBubbles() {
  const bubbles =
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${10 + ((i * 37) % 80)}%`,
      size: 3 + ((i * 5) % 8),
      delay: `${(i * 1.7) % 10}s`,
      duration: `${10 + ((i * 3) % 14)}s`,
      opacity: 0.08 + ((i * 0.017) % 0.12),
    }))

  return (
    <div className="floating-particles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="particle particle-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  )
}

export function TrackSelectScreen() {
  const {
    setShowAudience,
    selectedAge,
    selectedStageDetail,
    selectedDiscipline,
    setSelectedDiscipline,
    setSelectedTrack,
    setIndex,
    setSelectedAnswerId,
    setShowHint,
    setScreen,
    progress,
    maxCombo,
    user,
    setShowProfile,
    bossWins,
    setProgress,
  } = useStore()

  const [mounted, setMounted] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroCharacters.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const ageFilteredTracks = getFilteredTracks(selectedAge, selectedStageDetail, 'All')
  const ageDisciplines = Array.from(new Set(ageFilteredTracks.map((t) => t.discipline)))
  ageDisciplines.push('All')
  
  const finalDisciplines = ['Your courses', ...ageDisciplines]
  
  let visibleTracks = getFilteredTracks(selectedAge, selectedStageDetail, selectedDiscipline)
  if (selectedDiscipline === 'Your courses') {
    const workedIds = new Set([...(progress.workedTrackIds || []), ...bossWins.map(b => b.trackId)])
    visibleTracks = allTracks.filter(t => workedIds.has(t.id))
  }
  
  useEffect(() => {
    // Default to 'Your courses' if we have some, otherwise first available
    const hasWorked = (progress.workedTrackIds?.length || 0) > 0 || bossWins.length > 0
    if (selectedDiscipline !== 'All' && !finalDisciplines.includes(selectedDiscipline)) {
      setSelectedDiscipline(hasWorked ? 'Your courses' : finalDisciplines[1] || 'All')
    }
  }, [finalDisciplines, selectedDiscipline, setSelectedDiscipline, progress.workedTrackIds, bossWins.length])

  const disciplineChar = selectedDiscipline !== 'All' ? disciplineCharacters[selectedDiscipline] : null

  return (
    <main className={`menu-shell ${mounted ? 'mounted' : ''}`}>
      <MenuBubbles />

      <nav className="topbar">
        <div className="topbar-left">
          <div className="topbar-logo">
            {heroCharacters.map((src, i) => (
              <img key={src} className={`flow-frame ${i === heroIndex ? 'flow-frame-active' : ''}`} src={src} alt="" />
            ))}
          </div>
          <span className="topbar-brand">{user?.username || 'Floe'}</span>
        </div>
        <div className="topbar-right">
          <span className="stat-chip stat-chip-streak"><Flame size={13} /> <strong>{progress.streak}</strong></span>
          <span className="stat-chip stat-chip-xp"><Star size={13} /> <strong>{progress.xp} XP</strong></span>
          {maxCombo >= 3 && (
            <span className="stat-chip stat-chip-combo"><Trophy size={13} /> <strong>{maxCombo}×</strong></span>
          )}
          <button className="profile-btn" onClick={() => setShowProfile(true)} type="button"><User size={15} /></button>
        </div>
      </nav>

      <section className="menu-hero-v2">
        <div className="menu-hero-text">
          <h1 className="menu-hero-title">Grow with Floe</h1>
          <p className="menu-hero-subtitle">Learn the thing with Floe Cuttlefish.</p>
        </div>
      </section>

      <section className="track-select-v2" aria-label="Select a quiz track">
        <div className="track-select-header">
          <div>
            <p className="eyebrow">Choose your track</p>
            <h2>What are we training for?</h2>
          </div>
          {disciplineChar && (
            <img className="discipline-character" src={disciplineChar} alt={selectedDiscipline} />
          )}
        </div>

        <div className="course-browser-v2">
          <div className="course-browser-top">
            <div className="discipline-tabs" role="tablist">
              {finalDisciplines.map((d) => (
                <button
                  key={d}
                  className={selectedDiscipline === d ? 'active' : ''}
                  onClick={() => setSelectedDiscipline(d)}
                  type="button"
                >
                  {d}
                </button>
              ))}
            </div>
            <span className="track-count">{visibleTracks.length} available</span>
          </div>

          <div className="all-courses-grid">
            {visibleTracks.map((track) => (
              <button
                key={`browse-${track.id}`}
                className={`track-card compact ${track.status === 'soon' ? 'locked' : ''}`}
                style={{ '--track': disciplineColors[track.discipline] || '#4b7c6f' } as React.CSSProperties}
                onClick={() => {
                  if (track.status === 'playable') {
                    // Track that this course has been worked on
                    if (!progress.workedTrackIds?.includes(track.id)) {
                      setProgress(prev => ({
                        ...prev,
                        workedTrackIds: [...(prev.workedTrackIds || []), track.id]
                      }))
                    }
                    setSelectedTrack(track.id)
                    setIndex(0)
                    setSelectedAnswerId(null)
                    setShowHint(false)
                    setScreen('map')
                  }
                }}
              >
                <span className="track-icon">{track.icon}</span>
                <span className="track-status">{track.discipline}</span>
                <strong>{track.title}</strong>
                <span>{track.subtitle}</span>
                <span className="skill-tags">
                  {track.skills.map((skill) => (
                    <small key={`${track.id}-${skill}`}>{skill}</small>
                  ))}
                </span>
              </button>
            ))}
          </div>

          {!visibleTracks.length && (
            <div className="no-course-state">
              <img className="no-course-character" src="/assets/fun_characters_transparent/thought.png" alt="" />
              <p>No matching quiz track for this stage yet.</p>
              <p className="no-course-hint">Try another discipline, or suggest one below.</p>
            </div>
          )}
        </div>

        <div className="track-suggestion-v2">
          <div className="suggestion-content">
            <p className="eyebrow">Missing something?</p>
            <p>Don&apos;t see the quiz track you want? Suggest it!</p>
          </div>
          <textarea
            className="track-suggestion-box"
            placeholder="Suggest a quiz track, topic, or strange new obsession..."
            aria-label="Suggest a new quiz track"
            rows={3}
          />
        </div>
      </section>

      <button className="back-btn" onClick={() => { setSelectedTrack(null); setShowAudience(true) }} type="button">
        <ArrowLeft size={16} /> Back to start
      </button>
    </main>
  )
}
