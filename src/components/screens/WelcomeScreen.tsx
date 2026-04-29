import { useState, useEffect, useMemo } from 'react'
import { Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'

const welcomeCharacters = [
  '/assets/welcome/welcome-cuttlefish-rainbow.png',
  '/assets/welcome/welcome-cuttlefish-sensei.png',
  '/assets/welcome/welcome-cuttlefish-socrates.png',
  '/assets/welcome/welcome-cuttlefish-drill.png',
  '/assets/welcome/welcome-cuttlefish-explorer.png',
]

const welcomeLines = [
  'Pick a thing, wobble bravely into it, and let the little reef of questions become a route.',
  'Choose a strange new skill, paddle into the fog, and let each question put another plank under your feet.',
  'Start with one slippery idea, give it a tiny helmet, and march it across the reef one answer at a time.',
  'Find the thing that keeps tapping on the glass, then follow it until the scary bits become stepping stones.',
  'Bring your confusion. We will teach it to swim, build it a dock, and eventually make it useful.',
  'Pick a path, make a mess, learn the current, and let Floe turn the splashy bits into progress.',
]

function getInitialCharIndex() {
  const saved = window.localStorage.getItem('floe-welcome-character')
  return saved ? (Number(saved) + 1) % welcomeCharacters.length : 0
}

function loadWelcomeLine() {
  return welcomeLines[Math.floor(Math.random() * welcomeLines.length)]
}

// Ambient underwater bubbles
function Bubbles() {
  const bubbles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      size: 4 + Math.random() * 10,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 12}s`,
      opacity: 0.15 + Math.random() * 0.25,
    })), [])

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
  } = useStore()

  const [charIndex, setCharIndex] = useState(getInitialCharIndex)
  const [welcomeLine] = useState(loadWelcomeLine)
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
            Learn the thing
            <br />
            <span className="welcome-h1-accent">with Floe</span>
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
          <p className="welcome-line">{welcomeLine}</p>
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
