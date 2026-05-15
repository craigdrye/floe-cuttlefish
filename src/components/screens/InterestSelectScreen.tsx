import { useState, useEffect } from 'react'
import { ArrowLeft, Gamepad2, BrainCircuit } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { FloatingParticles } from '../common/FloatingParticles'

export function InterestSelectScreen() {
  const {
    setShowInterests,
    setShowAudience,
    setScreen,
    onboardingUsername,
    onboardingEmail,
    setOnboardingMode,
    login,
    register,
    loginAsGuest,
    user,
  } = useStore()

  const isEditing = user !== null

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const goToLibrary = (library: 'games' | 'courses') => {
    setOnboardingMode(library === 'games' ? 'games' : 'quizzes')
    if (!user) {
      const identifier = onboardingUsername.trim() || onboardingEmail.trim()
      if (identifier) {
        register(identifier, onboardingEmail.trim())
        login(identifier)
      } else {
        loginAsGuest()
      }
    }
    setShowInterests(false)
    setScreen(library)
  }

  return (
    <main className={`audience-shell ${mounted ? 'mounted' : ''}`}>
      <FloatingParticles variant="ambient" />

      <div className="audience-container">
        <header className="audience-header">
          <p className="audience-eyebrow">
            {isEditing ? 'Hub' : 'Step 3 of 3'}
          </p>
          <h1 className="audience-title">
            {isEditing ? 'Where to next?' : 'Pick your adventure'}
          </h1>
          <p className="audience-subtitle">
            {isEditing
              ? 'Tweak your topics, then pick games or quizzes.'
              : 'Choose your topics, then dive in.'}
          </p>
        </header>

        <section className="audience-panel audience-mode-panel hub-launch-panel">
          <div className="mode-options">
            <button
              className="mode-option mode-option-launch"
              onClick={() => goToLibrary('games')}
              type="button"
            >
              <Gamepad2 size={28} />
              <span>Games</span>
              <small>Quick guesses, arcade, brain breaks</small>
            </button>
            <button
              className="mode-option mode-option-launch"
              onClick={() => goToLibrary('courses')}
              type="button"
            >
              <BrainCircuit size={28} />
              <span>Quizzes</span>
              <small>Structured tracks on your topics</small>
            </button>
          </div>
        </section>
      </div>

      <button
        className="back-btn"
        onClick={() => {
          setShowInterests(false)
          setShowAudience(true)
        }}
        type="button"
      >
        <ArrowLeft size={16} />
        Topic select
      </button>
    </main>
  )
}
