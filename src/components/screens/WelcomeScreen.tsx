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

const fishImages = [
  '/assets/generated/fish easteregg.png',
  '/assets/generated/fish easteregg1.png',
  '/assets/generated/fish easteregg3.png',
]

const flippedFishImages = [
  '/assets/generated/fish easteregg-flipped.png',
  '/assets/generated/fish easteregg1-flipped.png',
  '/assets/generated/fish easteregg3-flipped.png',
]

const wobblyRouteLines = [
  'Pick a thing, wobble bravely into it, and let the little reef of questions become a route.',
  'Pick a curious thing, flop toward it nobly, and let the baby reef of questions sketch a path.',
  'Choose a slippery thing, wobble into the deep end, and let the questions lay pebbles home.',
  'Grab one odd little idea, splash toward it, and let the reef of questions turn into a trail.',
  'Pick a direction, paddle crookedly at it, and let the question-reef quietly build you a road.',
  'Find one tiny obsession, wobble after it, and let the reef of questions string together a route.',
  'Choose a weird little goal, slosh into it bravely, and let the questions coral themselves into a path.',
  'Pick a shiny topic, drift toward it with confidence issues, and let the reef of questions guide the way.',
  'Take one interesting thing, bump into it repeatedly, and let the reef of questions become a map.',
  'Choose the thing that keeps blinking at you, wobble closer, and let the questions make stepping stones.',
  'Pick a puzzle-shaped itch, paddle straight at it, and let the reef of questions turn into a lane.',
]

const welcomeLines = [
  ...wobblyRouteLines,
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

function loadFishSchool() {
  const pool = [...fishImages]
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool
}

function loadFlippedFishSchool() {
  const pool = [...flippedFishImages]
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool
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
  } = useStore()

  const [charIndex, setCharIndex] = useState(getInitialCharIndex)
  const [welcomeLine] = useState(loadWelcomeLine)
  const [fishSchool] = useState(loadFishSchool)
  const [midFishSchool] = useState(loadFlippedFishSchool)
  const [mounted, setMounted] = useState(false)
  const [showSaucer] = useState(() => Math.random() < 0.05)
  const [showLineFish] = useState(() => Math.random() < 0.4)
  const [showMidFish] = useState(() => Math.random() < 0.15)

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
      {showSaucer && (
        <div className="welcome-saucer" aria-hidden="true" />
      )}
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
          {showMidFish && (
            <div className="welcome-mid-fish-school" aria-hidden="true">
              {midFishSchool.map((fishSrc, index) => (
                <span
                  key={fishSrc}
                  className={`welcome-mid-fish welcome-mid-fish-${index + 1}`}
                  style={{ backgroundImage: `url('${fishSrc}')` }}
                />
              ))}
            </div>
          )}
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
          <div className="welcome-line-wrap">
            <p className="welcome-line">{welcomeLine}</p>
          </div>
          <button className="welcome-cta" onClick={() => {
            setShowWelcome(false)
            setShowAudience(true)
          }}>
            <Sparkles size={19} />
            Let's go
          </button>
          {wobblyRouteLines.includes(welcomeLine) && showLineFish && (
            <div className="welcome-fish-school" aria-hidden="true">
              {fishSchool.map((fishSrc, index) => (
                <span
                  key={fishSrc}
                  className={`welcome-line-fish welcome-line-fish-${index + 1}`}
                  style={{ backgroundImage: `url('${fishSrc}')` }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
