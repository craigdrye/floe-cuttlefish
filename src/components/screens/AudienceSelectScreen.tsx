import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Check, Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'
import type { AdultFocusOption } from '../../store/useStore'
import { ageGroupForNumericAge, courseTopics, stageDetailForNumericAge } from '../../lib/coursePersonalization'
import { FloatingParticles } from '../common/FloatingParticles'

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

const adultFocusOptions: AdultFocusOption[] = [
  'Geeky Fun',
  'Work Skills',
  'Technical Qualifications',
  'Interview Prep',
]

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


// ── Drum-wheel age picker ──────────────────────────────────────────────
const ITEM_H = 52          // px per row in the drum
const VISIBLE = 5          // rows visible (must be odd)
const MIN_AGE = 8
const MAX_AGE = 70

function AgeDrumWheel({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStart   = useRef<{ y: number; age: number } | null>(null)
  const ages        = Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => i + MIN_AGE)

  // Clamp helper
  const clamp = (n: number) => Math.max(MIN_AGE, Math.min(MAX_AGE, n))

  // Scroll wheel
  const onWheel = useCallback((e: WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1 : -1
    onChange(clamp(value + delta))
  }, [value, onChange])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [onWheel])

  // Touch / mouse drag
  const startDrag = (clientY: number) => {
    dragStart.current = { y: clientY, age: value }
  }
  const moveDrag = (clientY: number) => {
    if (!dragStart.current) return
    const diff  = dragStart.current.y - clientY
    const steps = Math.round(diff / (ITEM_H * 0.6))
    onChange(clamp(dragStart.current.age + steps))
  }
  const endDrag = () => { dragStart.current = null }

  // Offset so the selected age is centred
  const offset = -(value - MIN_AGE) * ITEM_H + ((VISIBLE - 1) / 2) * ITEM_H

  return (
    <div
      className="age-drum-outer"
      ref={containerRef}
      onMouseDown={e => startDrag(e.clientY)}
      onMouseMove={e => { if (dragStart.current) moveDrag(e.clientY) }}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={e => startDrag(e.touches[0].clientY)}
      onTouchMove={e => { e.preventDefault(); moveDrag(e.touches[0].clientY) }}
      onTouchEnd={endDrag}
      style={{ touchAction: 'none', userSelect: 'none' }}
      aria-label="Age picker"
      role="spinbutton"
      aria-valuenow={value}
      aria-valuemin={MIN_AGE}
      aria-valuemax={MAX_AGE}
    >
      {/* fade masks top & bottom */}
      <div className="age-drum-mask age-drum-mask-top" />
      <div className="age-drum-mask age-drum-mask-bottom" />
      {/* selection highlight bar */}
      <div className="age-drum-highlight" />
      {/* scrolling column */}
      <div
        className="age-drum-track"
        style={{ transform: `translateY(${offset}px)`, height: ages.length * ITEM_H }}
      >
        {ages.map(age => (
          <div
            key={age}
            className={`age-drum-item ${age === value ? 'age-drum-item-active' : ''}`}
            style={{ height: ITEM_H }}
            onClick={() => onChange(age)}
          >
            {age === MAX_AGE ? `${age}+` : age}
          </div>
        ))}
      </div>
    </div>
  )
}

export function AudienceSelectScreen() {
  const {
    setShowAudience,
    setShowWelcome,
    selectedAge,
    setSelectedAge,
    setSelectedStageDetail,
    setSelectedDiscipline,
    onboardingAge,
    setOnboardingAge,
    onboardingUsername,
    onboardingEmail,
    selectedInterests,
    setSelectedInterests,
    toggleSelectedInterest,
    selectedAdultFocus,
    toggleSelectedAdultFocus,
    setShowInterests,
    register,
    login,
    loginAsGuest,
    user,
    floeMode,
    setFloeMode,
  } = useStore()

  const [mounted, setMounted] = useState(false)
  const [fishSchool] = useState(loadFishSchool)

  const [flippedFishSchool] = useState(loadFlippedFishSchool)
  const [showFish] = useState(() => Math.random() < 0.6)
  const [showFlippedFish] = useState(() => Math.random() < 0.3)


  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    const ageGroup = ageGroupForNumericAge(onboardingAge)
    setSelectedAge(ageGroup)
    setSelectedStageDetail(stageDetailForNumericAge(onboardingAge))
    setSelectedDiscipline('All')
  }, [onboardingAge, setSelectedAge, setSelectedDiscipline, setSelectedStageDetail])

  const stageLabel =
    selectedAge === 'primary' ? 'Primary school' :
    selectedAge === 'high' ? 'High school' :
    selectedAge === 'university' ? 'University' :
    'Geek 🤓'

  return (
    <main className={`audience-shell ${mounted ? 'mounted' : ''}`}>
      <FloatingParticles variant="ambient" />

      {showFish && (
        <div className="audience-fish-school" aria-hidden="true">
          {fishSchool.map((fishSrc, index) => (
            <span
              key={fishSrc}
              className={`audience-fish audience-fish-${index + 1}`}
              style={{ backgroundImage: `url('${fishSrc}')` }}
            />
          ))}
        </div>
      )}

      {showFlippedFish && (
        <div className="audience-flipped-fish-school" aria-hidden="true">
          {flippedFishSchool.map((fishSrc, index) => (
            <span
              key={fishSrc}
              className={`audience-flipped-fish audience-flipped-fish-${index + 1}`}
              style={{ backgroundImage: `url('${fishSrc}')` }}
            />
          ))}
        </div>
      )}

      <div className="audience-container">

        <header className="audience-header">
          <p className="audience-eyebrow">Step 2 of 3</p>
          <h1 className="audience-title">Where to next?</h1>
          <p className="audience-subtitle">Tweak your topics, then pick games or quizzes.</p>
        </header>

        <section className="audience-panel audience-age-panel">
          <div className="age-panel-copy">
            <p className="audience-eyebrow">Age</p>
            <h2>{onboardingAge === MAX_AGE ? `${onboardingAge}+` : onboardingAge}</h2>
            <span>{stageLabel}</span>
          </div>
          <AgeDrumWheel value={onboardingAge} onChange={setOnboardingAge} />
        </section>

        <section className="audience-panel audience-topic-panel">
          <div className="topic-panel-header">
            <div>
              <p className="audience-eyebrow">Topics</p>
              <h2>What are you into?</h2>
            </div>
            <div className="topic-panel-meta">
              <span>{selectedInterests.length || 'Any'} selected</span>
              {selectedInterests.length > 0 && (
                <button
                  className="topic-unselect-all"
                  onClick={() => setSelectedInterests([])}
                  type="button"
                >
                  Unselect all
                </button>
              )}
            </div>
          </div>
          <div className="topic-checkbox-grid">
            {courseTopics.map((topic) => {
              const checked = selectedInterests.includes(topic.id)
              return (
                <label key={topic.id} className={`topic-checkbox ${checked ? 'checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSelectedInterest(topic.id)}
                  />
                  <span className="topic-checkmark">
                    {checked && <Check size={14} />}
                  </span>
                  <span>{topic.label}</span>
                </label>
              )
            })}
          </div>
        </section>

        {onboardingAge >= 23 && (
          <section className="audience-panel audience-adult-focus-panel">
            <div className="topic-panel-header">
                <div>
                  <p className="audience-eyebrow">Focus</p>
                  <h2>One more thing</h2>
                </div>
            </div>
            <div className="adult-focus-grid">
              {adultFocusOptions.map((focus) => {
                const checked = selectedAdultFocus.includes(focus)
                return (
                  <button
                    key={focus}
                    className={`adult-focus-option ${checked ? 'checked' : ''}`}
                    onClick={() => toggleSelectedAdultFocus(focus)}
                    type="button"
                  >
                    <span className="topic-checkmark">
                      {checked && <Check size={14} />}
                    </span>
                    <span>{focus}</span>
                  </button>
                )
              })}
            </div>
          </section>
        )}

        <label className="floe-mode-toggle">
          <input
            type="checkbox"
            checked={floeMode}
            onChange={(event) => setFloeMode(event.target.checked)}
          />
          <span className="floe-mode-toggle-switch" aria-hidden="true" />
          <span className="floe-mode-toggle-copy">
            <strong>Floe mode</strong>
            <small>Soft cuttlefish colors</small>
          </span>
        </label>

        <div className="audience-actions">
          <button
            className="audience-cta"
            onClick={() => {
              if (!user) {
                const identifier = onboardingUsername.trim() || onboardingEmail.trim()
                if (identifier) {
                  register(identifier, onboardingEmail.trim())
                  login(identifier)
                } else {
                  loginAsGuest()
                }
              }
              setShowAudience(false)
              setShowInterests(true)
            }}
            type="button"
          >
            <Sparkles size={18} />
            Let&apos;s go
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
