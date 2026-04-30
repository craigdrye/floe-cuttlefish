import { useState, useEffect } from 'react'
import { ArrowLeft, GraduationCap, Briefcase, Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { ageDetailOptions } from '../../data/ageCatalog'
import { FloatingParticles } from '../common/FloatingParticles'
import type { AgeGroup, StageDetail } from '../../data/ageCatalog'

export function AudienceSelectScreen() {
  const {
    setShowAudience,
    setShowWelcome,
    selectedAge,
    setSelectedAge,
    selectedStageDetail,
    setSelectedStageDetail,
    setSelectedDiscipline,
    login,
    register,
    loginAsGuest,
  } = useStore()

  const [activeGroup, setActiveGroup] = useState<'kids' | 'adults' | null>(null)
  const [mounted, setMounted] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const defaultStageDetail = (ageGroup: AgeGroup): StageDetail | null => {
    const details = ageDetailOptions[ageGroup]
    return details && details.length > 0 ? (details[0]?.id as StageDetail) : null
  }

  const handleSelect = (ageGroup: AgeGroup) => {
    setSelectedAge(ageGroup)
    setSelectedStageDetail(defaultStageDetail(ageGroup))
    setSelectedDiscipline('All')
  }

  const kidsOptions: { id: AgeGroup; label: string; emoji: string }[] = [
    { id: 'preschool', label: 'Pre-school', emoji: '🐣' },
    { id: 'primary', label: 'Primary school', emoji: '🌱' },
    { id: 'high', label: 'High school', emoji: '🔬' },
  ]

  const adultsOptions: { id: AgeGroup; label: string; emoji: string }[] = [
    { id: 'career-hopper', label: 'Career-switching', emoji: '🦘' },
    { id: 'career', label: 'Career', emoji: '💼' },
    { id: 'university', label: 'University', emoji: '🎓' },
    { id: 'nerd', label: 'Geek', emoji: '🤓' },
  ]

  const hasStageDetails = ageDetailOptions[selectedAge] && ageDetailOptions[selectedAge]!.length > 0

  return (
    <main className={`audience-shell ${mounted ? 'mounted' : ''}`}>
      <FloatingParticles variant="ambient" />
      <div className="audience-container">
        <header className="audience-header">
          <p className="audience-eyebrow">Step 2 of 3</p>
          <h1 className="audience-title">Choose your adventure</h1>
          <p className="audience-subtitle">Pick a path that fits — you can always switch later.</p>
        </header>

        <div className="audience-auth" style={{ marginBottom: '24px', width: '100%' }}>
          <div className="auth-inputs">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>
          {error && <p className="auth-error">{error}</p>}
        </div>

        <div className="audience-group-toggle" style={{ display: 'flex', gap: '16px', marginBottom: '24px', width: '100%' }}>
          <button
            className={`audience-panel ${activeGroup === 'kids' ? 'panel-active' : ''}`}
            onClick={() => setActiveGroup('kids')}
            type="button"
            style={{ flex: 1, cursor: 'pointer' }}
          >
            <div className="panel-header" style={{ marginBottom: 0, justifyContent: 'center' }}>
              <span className="panel-icon panel-icon-kids"><GraduationCap size={22} /></span>
              <h2>Kids</h2>
            </div>
          </button>

          <button
            className={`audience-panel ${activeGroup === 'adults' ? 'panel-active' : ''}`}
            onClick={() => setActiveGroup('adults')}
            type="button"
            style={{ flex: 1, cursor: 'pointer' }}
          >
            <div className="panel-header" style={{ marginBottom: 0, justifyContent: 'center' }}>
              <span className="panel-icon panel-icon-adults"><Briefcase size={22} /></span>
              <h2>Grown ups</h2>
            </div>
          </button>
        </div>

        {activeGroup && (
          <div className="audience-panels" style={{ display: 'block', width: '100%' }}>
            <div className="audience-panel panel-active" style={{ width: '100%' }}>
              <div className="panel-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {(activeGroup === 'kids' ? kidsOptions : adultsOptions).map((option) => (
                  <button
                    key={`${activeGroup}-${option.id}`}
                    className={`panel-option ${selectedAge === option.id ? 'option-active' : ''}`}
                    onClick={() => handleSelect(option.id)}
                    type="button"
                  >
                    <span className="option-emoji">{option.emoji}</span>
                    <span className="option-label">{option.label}</span>
                  </button>
                ))}
              </div>
              {hasStageDetails && (
                <div className="panel-substage" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  {ageDetailOptions[selectedAge]!.map((option) => (
                    <button
                      key={option.id}
                      className={`substage-pill ${selectedStageDetail === option.id ? 'substage-active' : ''}`}
                      onClick={() => setSelectedStageDetail(option.id as StageDetail)}
                      type="button"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="audience-actions" style={{ marginTop: '24px' }}>
          <button
            className="audience-cta"
            onClick={() => {
              if (username.trim()) {
                register(username.trim(), email.trim())
                login(username.trim())
                setShowAudience(false)
              } else {
                setError('Please enter a username to save progress.')
              }
            }}
          >
            <Sparkles size={18} />
            Create Profile & Continue
          </button>

          <button
            className="audience-guest"
            onClick={() => {
              loginAsGuest()
              setShowAudience(false)
            }}
          >
            Play as Guest
          </button>
        </div>
      </div>

      <button
        className="back-btn"
        onClick={() => {
          setShowAudience(false)
          setShowWelcome(true)
        }}
        type="button"
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </main>
  )
}
