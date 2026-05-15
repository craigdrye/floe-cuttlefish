import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'

const welcomeCharacters = [
  '/assets/welcome/welcome-cuttlefish-rainbow.png',
  '/assets/welcome/welcome-cuttlefish-sensei.png',
  '/assets/welcome/welcome-cuttlefish-socrates.png',
  '/assets/welcome/welcome-cuttlefish-drill.png',
  '/assets/welcome/welcome-cuttlefish-explorer.png',
]

function getInitialCharIndex() {
  const saved = window.localStorage.getItem('floe-welcome-character')
  return saved ? (Number(saved) + 1) % welcomeCharacters.length : 0
}

function buildBubbleSpecs() {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 17) % 84)}%`,
    size: 4 + ((i * 7) % 10),
    delay: `${(i * 0.6) % 8}s`,
    duration: `${8 + ((i * 3) % 12)}s`,
    opacity: 0.15 + ((i * 0.03) % 0.2),
  }))
}

// Ambient underwater bubbles
function Bubbles() {
  const bubbles = buildBubbleSpecs()

  return (
    <div className="welcome-bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="welcome-bubble"
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

export function WelcomeScreen() {
  const {
    setShowWelcome,
    setShowAudience,
    onboardingUsername,
    setOnboardingUsername,
    onboardingEmail,
    setOnboardingEmail,
  } = useStore()

  const [charIndex, setCharIndex] = useState(getInitialCharIndex)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => (prev + 1) % welcomeCharacters.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('floe-welcome-character', String(charIndex))
  }, [charIndex])

  return (
    <main className={`welcome-shell ${mounted ? 'mounted' : ''}`}>
      <Bubbles />
      <section className="welcome-page" aria-label="Welcome to Floe Cuttlefish">
        <div className="welcome-copy">
          <p className="welcome-eyebrow">Floe Cuttlefish</p>
          <h1>
            Curious about everything?
            <br />
            <span className="welcome-h1-accent">Dive in with Floe.</span>
          </h1>
        </div>
        <div className="welcome-art-wrap">
          {welcomeCharacters.map((src, i) => (
            <img
              key={src}
              className={`welcome-art ${i === charIndex ? 'welcome-art-active' : ''}`}
              src={src}
              alt={`Floe Cuttlefish character ${i + 1}`}
            />
          ))}
        </div>
        <div className="welcome-bottom">
          <div className="welcome-auth" aria-label="Login details">
            <input
              type="text"
              placeholder="Username"
              value={onboardingUsername}
              onChange={(e) => setOnboardingUsername(e.target.value)}
              className="welcome-auth-input"
            />
            <span className="welcome-auth-or">or</span>
            <input
              type="email"
              placeholder="Email"
              value={onboardingEmail}
              onChange={(e) => setOnboardingEmail(e.target.value)}
              className="welcome-auth-input"
            />
          </div>
          <button className="welcome-cta" onClick={() => {
            setShowWelcome(false)
            setShowAudience(true)
          }}>
            <Sparkles size={19} />
            Let's go
          </button>
        </div>
      </section>
    </main>
  )
}
