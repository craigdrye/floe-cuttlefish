import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { FloatingParticles } from '../common/FloatingParticles'
import confetti from 'canvas-confetti'

interface Question {
  id: string
  prompt: string
  subtitle?: string
  options: { value: string; label: string; emoji: string; description?: string }[]
}

const questions: Question[] = [
  {
    id: 'vibe',
    prompt: 'What is your ideal study vibe?',
    subtitle: 'This helps Floe match your energy.',
    options: [
      { value: 'chill', label: 'Chill & steady', emoji: '😌', description: 'Low pressure, calm flow' },
      { value: 'intense', label: 'Intense focus', emoji: '🔥', description: 'Deep work, no distractions' },
      { value: 'chaotic', label: 'Chaotic sprints', emoji: '🌪️', description: 'Short bursts of energy' },
      { value: 'methodical', label: 'Methodical & ordered', emoji: '📏', description: 'Step by step, no skipping' }
    ]
  },
  {
    id: 'learning-style',
    prompt: 'How do you learn best?',
    subtitle: 'Everyone\'s brain is wired differently.',
    options: [
      { value: 'visual', label: 'Seeing diagrams & charts', emoji: '👁️', description: 'Visual learner' },
      { value: 'reading', label: 'Reading explanations', emoji: '📖', description: 'Text-based learner' },
      { value: 'doing', label: 'Trying things hands-on', emoji: '🛠️', description: 'Kinesthetic learner' },
      { value: 'listening', label: 'Hearing someone explain', emoji: '🎧', description: 'Audio learner' }
    ]
  },
  {
    id: 'hurdle',
    prompt: 'What is your biggest learning hurdle?',
    subtitle: 'Be honest — Floe doesn\'t judge.',
    options: [
      { value: 'math', label: 'Math & Numbers', emoji: '🧮', description: 'Numbers feel foreign' },
      { value: 'focus', label: 'Staying focused', emoji: '🧠', description: 'Brain keeps wandering' },
      { value: 'memory', label: 'Remembering details', emoji: '🐘', description: 'It goes in and right back out' },
      { value: 'confidence', label: 'Confidence', emoji: '🥺', description: 'I doubt myself too much' }
    ]
  },
  {
    id: 'time',
    prompt: 'How much time do you have right now?',
    subtitle: 'Floe will adjust the session length.',
    options: [
      { value: '5min', label: '5 minutes', emoji: '⚡', description: 'Quick burst' },
      { value: '15min', label: '15 minutes', emoji: '☕', description: 'Coffee break' },
      { value: '30min', label: '30 minutes', emoji: '📚', description: 'Solid session' },
      { value: 'unlimited', label: 'No rush', emoji: '🌊', description: 'I\'ve got time' }
    ]
  },
  {
    id: 'challenge',
    prompt: 'How much challenge do you want?',
    subtitle: 'This affects question difficulty.',
    options: [
      { value: 'gentle', label: 'Keep it gentle', emoji: '🌸', description: 'Easy wins, build confidence' },
      { value: 'balanced', label: 'Balanced mix', emoji: '⚖️', description: 'Some easy, some hard' },
      { value: 'push-me', label: 'Push me', emoji: '💪', description: 'I want to struggle a bit' },
      { value: 'nightmare', label: 'Nightmare mode', emoji: '☠️', description: 'Only the hardest questions' }
    ]
  },
  {
    id: 'interest',
    prompt: 'What subject secretly fascinates you?',
    subtitle: 'Pick the one that makes your eyes light up.',
    options: [
      { value: 'universe', label: 'The Universe', emoji: '🌌', description: 'Stars, physics, infinity' },
      { value: 'money', label: 'How money works', emoji: '💰', description: 'Markets, economics, wealth' },
      { value: 'history', label: 'Ancient History', emoji: '🏛️', description: 'Empires, myths, civilizations' },
      { value: 'logic', label: 'Pure Logic & Code', emoji: '💻', description: 'Algorithms, math, puzzles' }
    ]
  },
  {
    id: 'social',
    prompt: 'How do you prefer to learn?',
    subtitle: 'Solo wolf or pack animal?',
    options: [
      { value: 'solo', label: 'Solo — just me', emoji: '🐺', description: 'I focus better alone' },
      { value: 'compete', label: 'Compete with others', emoji: '🏆', description: 'Leaderboards motivate me' },
      { value: 'together', label: 'Learn with friends', emoji: '🤝', description: 'Study buddies are the best' },
      { value: 'mentor', label: 'Guided by a mentor', emoji: '🧙', description: 'I want someone to lead' }
    ]
  },
  {
    id: 'goal',
    prompt: 'What is your ultimate goal?',
    subtitle: 'Dream big — Floe believes in you.',
    options: [
      { value: 'career', label: 'Career advancement', emoji: '🚀', description: 'Level up professionally' },
      { value: 'curiosity', label: 'Pure curiosity', emoji: '🔍', description: 'I just love learning' },
      { value: 'exam', label: 'Pass an exam', emoji: '📝', description: 'Specific test coming up' },
      { value: 'fun', label: 'Just for fun', emoji: '🎮', description: 'Make learning feel like play' }
    ]
  },
  {
    id: 'reward',
    prompt: 'What reward keeps you coming back?',
    subtitle: 'Floe will nudge the loop toward what actually feels good.',
    options: [
      { value: 'streaks', label: 'Keeping a streak alive', emoji: '🔥', description: 'Daily continuity motivates me' },
      { value: 'badges', label: 'Unlocking cute badges', emoji: '🏅', description: 'I like collecting visible wins' },
      { value: 'mastery', label: 'Feeling real mastery', emoji: '🧠', description: 'I want proof I understand' },
      { value: 'surprise', label: 'Tiny surprises', emoji: '✨', description: 'Novelty keeps me engaged' }
    ]
  },
  {
    id: 'friction',
    prompt: 'When you quit, what usually happened?',
    subtitle: 'This tells Floe what to protect you from.',
    options: [
      { value: 'too-hard', label: 'It got too hard too fast', emoji: '🧗', description: 'I need better ramps' },
      { value: 'boring', label: 'It got boring', emoji: '😴', description: 'I need more motion and stakes' },
      { value: 'lost', label: 'I lost the thread', emoji: '🧭', description: 'I need clearer structure' },
      { value: 'shame', label: 'I felt bad at it', emoji: '🛟', description: 'I need kinder recovery after misses' }
    ]
  }
]

export function QuestionnaireScreen() {
  const { setShowQuestionnaire, submitQuestionnaire, user } = useStore()

  const [mounted, setMounted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>(user?.questionnaireAnswers || {})
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const currentQuestion = questions[currentStep]
  const isLast = currentStep === questions.length - 1
  const hasAnsweredCurrent = !!answers[currentQuestion.id]

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }))
  }

  const handleNext = () => {
    if (isLast) {
      submitQuestionnaire(answers)
      setCompleted(true)
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } })
      setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.4, x: 0.3 } }), 400)
      setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { y: 0.4, x: 0.7 } }), 700)
      setTimeout(() => setShowQuestionnaire(false), 2500)
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  if (completed) {
    return (
      <main className={`questionnaire-shell mounted`}>
        <FloatingParticles variant="welcome" density={1.5} />
        <div className="questionnaire-container questionnaire-complete">
          <div className="complete-icon">🎉</div>
          <h1>Profile Complete!</h1>
          <p>Floe now knows you better. Your recommendations are being customized...</p>
        </div>
      </main>
    )
  }

  return (
    <main className={`questionnaire-shell ${mounted ? 'mounted' : ''}`}>
      <FloatingParticles variant="ambient" />
      <div className="questionnaire-container">

        <div className="questionnaire-progress">
          <div
            className="progress-bar"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>

        <header className="questionnaire-header">
          <p className="eyebrow">Question {currentStep + 1} of {questions.length}</p>
          <h1>{currentQuestion.prompt}</h1>
          {currentQuestion.subtitle && (
            <p className="q-subtitle">{currentQuestion.subtitle}</p>
          )}
        </header>

        <div className="questionnaire-options">
          {currentQuestion.options.map(opt => (
            <button
              key={opt.value}
              className={`q-option ${answers[currentQuestion.id] === opt.value ? 'selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              <span className="q-emoji">{opt.emoji}</span>
              <div className="q-option-text">
                <span className="q-label">{opt.label}</span>
                {opt.description && <span className="q-desc">{opt.description}</span>}
              </div>
              {answers[currentQuestion.id] === opt.value && <CheckCircle2 className="q-check" size={20} />}
            </button>
          ))}
        </div>

        <div className="questionnaire-actions">
          <button
            className="q-back-btn"
            onClick={() => currentStep > 0 ? setCurrentStep(prev => prev - 1) : setShowQuestionnaire(false)}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            className="q-next-btn"
            disabled={!hasAnsweredCurrent}
            onClick={handleNext}
          >
            {isLast ? (
              <>
                <Sparkles size={16} />
                Complete Profile
              </>
            ) : (
              <>
                Next
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

      </div>
    </main>
  )
}
