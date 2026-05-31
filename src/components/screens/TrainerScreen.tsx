import { useMemo, useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Brain, BookOpen, Calculator, CheckCircle2, XCircle, Sparkles, ShieldQuestion, Repeat2, Trophy, ArrowLeft } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { TopBar } from '../layout/TopBar'
import { SpeakerPortrait, type SpeakerRole } from '../common/SpeakerPortrait'
import { XpPopup } from '../common/XpPopup'
import { calculateExpression } from '../../lib/mathUtils'
import { playComboSound, playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'
import { bossRewardFor, bossTitleFor } from '../../lib/rewardSystem'
import type { Answer } from '../../data/questionCatalog/types'

function questionRarity(question: { kind: string; xp: number }): string {
  if (question.kind === 'deep' && question.xp >= 18) return 'legendary'
  if (question.kind === 'deep') return 'epic'
  if (question.xp >= 15) return 'rare'
  if (question.xp >= 10) return 'uncommon'
  return 'common'
}

const rarityLabels: Record<string, string> = {
  common: '⚪ Common',
  uncommon: '🟢 Uncommon',
  rare: '🔵 Rare',
  epic: '🟣 Epic',
  legendary: '🟡 Legendary',
}

const successHeadlines = [
  'Correct! Tiny arm-flap salute.',
  'Correct! Small hat toss approved.',
  'Correct! Polite goblin fist-pump.',
  'Correct! Mini trumpet of glory.',
  'Correct! Pocket parade commences.',
  'Correct! Respectful pigeon victory lap.',
  'Correct! Little cape flutter achieved.',
  'Correct! Teacup fanfare activated.',
  'Correct! One ceremonial jazz hand.',
  'Correct! Micro-confetti in spirit.',
] as const

const quickBriefingRoster: Array<{ role: SpeakerRole; name: string; label: string; lines: string[] }> = [
  {
    role: 'drill',
    name: 'Sergeant Ink',
    label: 'pre-question briefing',
    lines: [
      'Spot the rule. Smack the trap.',
      'Read first. Chaos second.',
      'Find the trick. Bonk it.',
      'Eyes up. Ambush the trick.',
      'Count calmly. Crush nonsense.',
      'Catch the clue. Move.',
    ],
  },
  {
    role: 'strongman',
    name: 'Mister Tides',
    label: 'chain-rattle briefing',
    lines: [
      'Read twice. Flex later.',
      'Tiny clue. Huge victory.',
      'No panic. Just pummel patterns.',
      'Lift the hint, not panic.',
      'Big vibes. Small careful steps.',
      'Flex on the fake answer.',
    ],
  },
  {
    role: 'hulkster',
    name: 'Bulk Hogan',
    label: 'ring-rope pep talk',
    lines: [
      'Find the pattern, brother.',
      'Tiny math. Massive splash.',
      'Clobber the sneaky answer.',
      'Whatcha gonna solve, brother?',
      'Snap into the right clue.',
      'Leg-drop the wrong choice.',
    ],
  },
  {
    role: 'karate',
    name: 'Sensei Smack',
    label: 'dojo warning',
    lines: [
      'Use clues. Break nonsense.',
      'Calm brain. Fast hands.',
      'One clean move wins.',
      'Bow. Breathe. Solve cleanly.',
      'Kick doubt. Keep clues.',
      'Quiet mind. Loud correctness.',
    ],
  },
  {
    role: 'captain',
    name: 'Captain Crank',
    label: 'cockpit command',
    lines: [
      'Check gauges. Then guess nothing.',
      'Steady hands. Spot turbulence.',
      'Fly straight through the trick.',
      'Read the map, hotshot.',
      'No barrel rolls into distractors.',
      'Land on the actual rule.',
    ],
  },
  {
    role: 'professor',
    name: 'Doctor Boomhair',
    label: 'lab memo',
    lines: [
      'Observe first. Zap later.',
      'Hypothesis first. Hair second.',
      'Tiny clue. Huge brain noise.',
      'Science the heck out of it.',
      'Do not lick the beaker.',
      'Test the rule, genius.',
    ],
  },
  {
    role: 'pirate',
    name: 'Captain Wrongbeard',
    label: 'deck warning',
    lines: [
      'Find the clue, matey.',
      'Plunder the pattern only.',
      'No guessing on this ship.',
      'Steer past the shiny trap.',
      'Count the clues, scallywag.',
      'Arrrithmetic first. Swagger later.',
    ],
  },
  {
    role: 'mechanic',
    name: 'Greasefang Joe',
    label: 'garage note',
    lines: [
      'Pop the hood on it.',
      'Check parts. Then choose.',
      'Loose bolt? Tight logic.',
      'Trace the problem, wrenchling.',
      'Don’t punch it. Diagnose it.',
      'Find the busted assumption.',
    ],
  },
]

// pickQuickBriefingSpeaker and quickBriefingRoster were previously used by
// the now-removed story-card flavor section. Kept commented for now in case
// we want to revive a calmer version of the briefing speaker.
// (Removed: see git history for the roster definitions.)
void quickBriefingRoster
void successHeadlines

function pickSuccessHeadline(questionId: number, remixSeed: number) {
  return successHeadlines[Math.abs(questionId * 11 + remixSeed) % successHeadlines.length]
}

export function TrainerScreen() {
  const {
    progress, setProgress, mode, index, setIndex,
    selectedAnswerId, setSelectedAnswerId, showHint, setShowHint,
    incrementAnswerShuffleSeed, calculatorInput, setCalculatorInput,
    thoughts, setThought, wrongAnswerFeedback, setWrongAnswerFeedback,
    setScreen, setRemixSeed, setWordingMode,
    combo, incrementCombo, resetCombo,
    lastXpGain, setLastXpGain, unlockAchievement, updateReview,
    captureMisconception, clearMisconception, misconceptionArtifacts, recordBossWin, bossWins, focusMode,
    questionQualityRatings, setQuestionQualityRating,
    showLesson, setShowLesson,
    selectedLesson, setSelectedLesson,
  } = useStore()

  // Back navigation: if the player drilled in through a chapter sub-map
  // (i.e. a specific lesson is selected) we send them back to the chapter
  // sub-map. Otherwise (legacy entry points like the review mode CTA), we
  // fall back to the course-level map.
  const goBackFromTrainer = () => {
    if (selectedLesson) {
      setSelectedLesson(null)
      setScreen('chapter')
    } else {
      setScreen('map')
    }
  }

  const {
    selectedTrackInfo, isSelectedCatalogReady, activeSet, baseQuestion, question, visibleAnswers, remixSeed, catalogError,
  } = useQuizData()

  const [armedAnswerId, setArmedAnswerId] = useState<string | null>(null)
  const [bossIntroDismissedFor, setBossIntroDismissedFor] = useState<string | number | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showThoughts, setShowThoughts] = useState(false)
  const [attentionTool, setAttentionTool] = useState<'ask' | 'hint' | 'teach' | null>(null)

  useEffect(() => {
    setCalculatorInput('')
  }, [baseQuestion.id, remixSeed, setCalculatorInput])

  useEffect(() => {
    setAttentionTool(null)
    const schedule = [
      { tool: 'ask' as const, delay: 3000 },
      { tool: 'hint' as const, delay: 6000 },
      { tool: 'teach' as const, delay: 10000 },
    ]
    const timers = schedule.flatMap(({ tool, delay }) => [
      window.setTimeout(() => setAttentionTool(tool), delay),
      window.setTimeout(() => setAttentionTool((current) => (current === tool ? null : current)), delay + 1500),
    ])
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [baseQuestion.id, question.prompt, remixSeed])

  const thoughtKey = `${baseQuestion.id}-${remixSeed}`
  const calculatorResult = useMemo(() => calculateExpression(calculatorInput), [calculatorInput])
  const selectedAnswer = question.answers.find((a) => a.id === selectedAnswerId)
  const isCorrect = selectedAnswer?.correct
  const rarity = questionRarity(question)
  const activeMuseumItem = misconceptionArtifacts.find((item) => item.questionId === question.id && !item.clearedAt)
  // Lessons play in rounds of "3 questions + a boss" (the round's last question),
  // capped at 2 rounds / 8 questions per lesson:
  //   8+ questions -> two rounds of 4 (3 + boss, 3 + boss), then back to the map
  //   4-7          -> one round (all of them, boss is the last)
  //   <4           -> no boss, just answer what's there
  // (Lessons longer than 8 aren't re-chunked; the remaining questions surface on a
  // later visit. The aim is ~8 questions per lesson, i.e. two clean rounds.)
  const lessonLength = Math.min(activeSet.length, 8)
  const roundPlan = useMemo(() => {
    const n = lessonLength
    const roundCount = Math.floor(n / 4)
    const bossIndices = new Set<number>()
    const roundStarts: number[] = []
    if (roundCount > 0) {
      const base = Math.floor(n / roundCount)
      const rem = n % roundCount
      let cursor = 0
      for (let r = 0; r < roundCount; r += 1) {
        roundStarts.push(cursor)
        cursor += base + (r < rem ? 1 : 0)
        bossIndices.add(cursor - 1) // the round's last question is the boss
      }
    }
    return { roundCount, bossIndices, roundStarts }
  }, [lessonLength])
  const stageNumber = roundPlan.roundStarts.reduce((acc, start, i) => (index >= start ? i + 1 : acc), 1)
  const isBossBattle = mode === 'daily' && roundPlan.bossIndices.has(index)
  const isSecretBoss = isBossBattle && progress.streak >= 7
  const bossId = `${selectedTrackInfo.id}-stage-${stageNumber}`
  const bossTitle = bossTitleFor(selectedTrackInfo.title, stageNumber)
  const bossAlreadyWon = bossWins.some((win) => win.id === bossId)
  const showBossIntro = isBossBattle && bossIntroDismissedFor !== question.id
  const successHeadline = useMemo(() => pickSuccessHeadline(question.id, remixSeed), [question.id, remixSeed])
  const questionMedia = question.media ? (Array.isArray(question.media) ? question.media : [question.media]) : []
  const qualityRating = questionQualityRatings[question.id] ?? { goodQuestion: 5, writingIssues: 5 }

  useEffect(() => {
    if (!showBossIntro) return
    const timer = window.setTimeout(() => setBossIntroDismissedFor(question.id), 2600)
    return () => window.clearTimeout(timer)
  }, [showBossIntro, question.id])

  const checkAchievements = useCallback((newCombo: number, solvedCount: number, xp: number) => {
    if (solvedCount === 1) {
      unlockAchievement({ id: 'first-splash', title: 'First Splash!', description: 'You answered your first question correctly.', icon: '🌊' })
    }
    if (newCombo === 3) {
      unlockAchievement({ id: 'hat-trick', title: 'Hat Trick!', description: 'Three correct answers in a row.', icon: '🎩' })
    }
    if (newCombo === 5) {
      unlockAchievement({ id: 'on-fire', title: 'On Fire!', description: 'Five in a row. The reef is impressed.', icon: '🔥' })
    }
    if (newCombo === 10) {
      unlockAchievement({ id: 'unstoppable', title: 'Unstoppable!', description: 'Ten consecutive correct answers.', icon: '⚡' })
    }
    if (xp >= 100) {
      unlockAchievement({ id: 'century', title: 'Century Club', description: 'You earned 100 XP total.', icon: '💯' })
    }
    if (solvedCount >= 16) {
      unlockAchievement({ id: 'daily-clear', title: 'Daily Clear!', description: 'All 16 daily questions solved.', icon: '🏆' })
    }
  }, [unlockAchievement])

  const submitAnswer = (answer: Answer) => {
    if (selectedAnswerId) return
    setSelectedAnswerId(answer.id)
    setArmedAnswerId(null)

    if (answer.correct) {
      playSuccessSound()
      incrementCombo()
      updateReview(question.id, showHint ? 3 : 5)
      const newCombo = combo + 1
      playComboSound(newCombo)
      playRewardVoiceSound(newCombo >= 3 ? 'combo' : 'success')
      clearMisconception(question.id)
      const firstSolve = !progress.solved.includes(question.id)
      const bossBonus = isBossBattle && firstSolve && !bossAlreadyWon ? bossRewardFor(stageNumber, progress.streak) : 0
      const baseXpGain = question.xp + (newCombo >= 5 ? 5 : newCombo >= 3 ? 2 : 0)
      const xpGain = baseXpGain + bossBonus
      setLastXpGain(xpGain)

      const todayKey = new Date().toISOString().slice(0, 10)
      const newXp = progress.xp + xpGain
      const newSolved = firstSolve ? [...progress.solved, question.id] : progress.solved

      setProgress((current) => ({
        ...current,
        readiness: Math.min(100, current.readiness + (question.kind === 'deep' ? 9 : 5)),
        xp: current.xp + baseXpGain,
        energy: Math.min(5, current.energy + 1),
        solved: newSolved,
        lastVisit: todayKey,
        activityLog: {
          ...(current.activityLog || {}),
          [todayKey]: ((current.activityLog || {})[todayKey] || 0) + xpGain
        }
      }))

      const particleCount = newCombo >= 5 ? 120 : question.kind === 'deep' ? 80 : 40
      confetti({ particleCount, spread: 64, origin: { y: 0.7 } })

      checkAchievements(newCombo, newSolved.length, newXp)
      if (bossBonus) {
        recordBossWin({
          id: bossId,
          title: bossTitle,
          trackId: selectedTrackInfo.id,
          stage: stageNumber,
          xpAwarded: bossBonus,
        })
        unlockAchievement({
          id: `boss-${bossId}`,
          title: 'Boss Cleared!',
          description: `${bossTitle} dropped ${bossBonus} bonus XP.`,
          icon: '👾',
        })
      }
    } else {
      playWrongSound()
      resetCombo()
      updateReview(question.id, 1)
      const firstMisconception = answer.misconceptions?.[0]
      if (firstMisconception) {
        captureMisconception({
          id: `${question.id}-${answer.id}`,
          questionId: question.id,
          questionTitle: question.title,
          chapter: question.chapter,
          answerLabel: answer.label,
          tempting: firstMisconception.tempting,
          flaw: firstMisconception.flaw,
          reframe: firstMisconception.reframe,
        })
      }
      setProgress((current) => ({
        ...current,
        energy: Math.max(0, current.energy - 1),
      }))
    }
  }

  const choose = (answer: Answer) => {
    if (selectedAnswerId) return
    if (armedAnswerId !== answer.id) {
      setArmedAnswerId(answer.id)
      return
    }
    submitAnswer(answer)
  }

  const nextQuestion = () => {
    setLastXpGain(null)
    const nextIndex = index + 1
    const lessonComplete = nextIndex >= lessonLength

    if (isCorrect && mode === 'daily' && lessonComplete) {
      // Lesson finished (all rounds played) — return to the chapter map. We keep
      // `selectedLesson` pointing at the just-completed lesson so Floe lands on it
      // there, then the lesson path glides Floe along to the next lesson. Rounds
      // inside a lesson still flow back-to-back; this only fires at lesson end.
      setScreen(selectedLesson ? 'chapter' : 'map')
    } else {
      setIndex((c) => (c + 1) % Math.max(1, lessonLength))
    }

    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
  }

  const resetQuestion = () => {
    setRemixSeed(baseQuestion.id, (c) => c + 1)
    setWordingMode(baseQuestion.id, (c) => (c + 1) % 3)
    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
    setLastXpGain(null)
  }

  const askDifferently = () => {
    setWordingMode(baseQuestion.id, (c) => (c + 1) % 3)
    incrementAnswerShuffleSeed()
    setSelectedAnswerId(null)
    setArmedAnswerId(null)
    setShowHint(false)
    setShowLesson(false)
    setLastXpGain(null)
  }

  const appendCalculatorToken = (token: string) => {
    setCalculatorInput(`${calculatorInput}${token}`)
  }

  if (!isSelectedCatalogReady) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <section className="dashboard">
          <article className="mission">
            <div className="mission-copy">
              <p className="eyebrow">Loading quiz bank</p>
              <h2>{selectedTrackInfo.title}</h2>
              <p>Pulling in the question set for this course now.</p>
            </div>
          </article>
        </section>
      </main>
    )
  }

  if (catalogError || activeSet.length === 0) {
    return (
      <main className="app-shell">
        <TopBar title={selectedTrackInfo.title} />
        <div className="catalog-error">
          <h3>Questions failed to load</h3>
          <p>{catalogError ?? `No playable questions found for ${selectedTrackInfo.title}.`}</p>
          <button className="secondary" onClick={() => setScreen('map')}>Back to map</button>
        </div>
      </main>
    )
  }

  return (
    <main className={`app-shell ${isBossBattle ? 'secret-boss-shell' : ''}`}>
      <TopBar title={selectedTrackInfo.title} />

      {catalogError && (
        <div className="catalog-error">
          <h3>Questions failed to load</h3>
          <p>{catalogError}</p>
          <button className="secondary" onClick={() => setScreen('map')}>Back to map</button>
        </div>
      )}

      <AnimatePresence>
        {showBossIntro && (
          <motion.div
            className="boss-cutscene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="boss-cutscene-card"
              initial={{ y: 22, scale: 0.94 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <img src="/assets/welcome/welcome-cuttlefish-explorer.png" alt="" />
              <div>
                <p className="eyebrow">{isSecretBoss ? 'Secret boss encounter' : 'Boss encounter'}</p>
                <h2>{bossTitle}</h2>
                <p>Floe peeks through the kelp, points at a harder question from this course, and the reef darkens for the fight.</p>
              </div>
              <button type="button" onClick={() => setBossIntroDismissedFor(question.id)}>Enter boss</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="trainer">


        <AnimatePresence mode="wait">
          <motion.article
            key={`${mode}-${question.id}`}
            className={`question-card ${isBossBattle ? 'secret-boss-card' : ''}`}
            data-rarity={rarity}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <span className={`rarity-badge rarity-${rarity}`}>{isBossBattle ? (isSecretBoss ? 'Secret Boss' : 'Boss Battle') : rarityLabels[rarity]}</span>

            <div className="question-heading">
              <Brain />
              <div>
                <p className="eyebrow">{question.chapter}</p>
                <h2>{question.title}</h2>
              </div>
            </div>

            <div className="prompt-box">
              <BookOpen size={19} />
              <div className="prompt-copy">
                <p className="question-prompt">{question.prompt}</p>
                {question.difficultyTier && (
                  <span className={`difficulty-chip difficulty-${question.difficultyTier}`}>{question.difficultyTier}</span>
                )}
                {questionMedia.length > 0 && (
                  <div className={`question-media-grid question-media-count-${questionMedia.length}`}>
                    {questionMedia.map((item) => (
                      <figure className="question-media" key={`${item.label ?? item.alt}-${item.src.slice(0, 36)}`}>
                        {item.label && <strong>{item.label}</strong>}
                        <img src={item.src} alt={item.alt} />
                        {item.caption && <figcaption>{item.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                {question.setup && question.setup.length > 0 && (
                  <div className="question-setup">
                    <strong>Setup</strong>
                    <ul>{question.setup.map((line) => <li key={line}>{line}</li>)}</ul>
                  </div>
                )}
              </div>
            </div>


            <div className="answers">
              {visibleAnswers.map((answer) => (
                <button
                  key={answer.id}
                  className={[
                    'answer',
                    armedAnswerId === answer.id ? 'armed' : '',
                    selectedAnswerId === answer.id ? 'selected' : '',
                    selectedAnswerId && answer.correct ? 'correct' : '',
                    selectedAnswerId === answer.id && !answer.correct ? 'wrong' : '',
                  ].join(' ')}
                  onClick={() => choose(answer)}
                >
                  <span className="answer-label" title={answer.label}>{answer.label}</span>
                  {armedAnswerId === answer.id && !selectedAnswerId && <span className="commit-hint">Tap again</span>}
                  {selectedAnswerId && answer.correct && <CheckCircle2 size={17} />}
                  {selectedAnswerId === answer.id && !answer.correct && <XCircle size={17} />}
                </button>
              ))}
            </div>

            <div className="actions-toolbar">
              <div className="actions-toolbar-row">
                <button className={`secondary pastel-1${attentionTool === 'ask' ? ' attention-flash' : ''}`} onClick={askDifferently}><ShieldQuestion size={15} /> Ask differently</button>
                <button className={`secondary pastel-2${attentionTool === 'hint' ? ' attention-flash' : ''}`} onClick={() => setShowHint(!showHint)}><Sparkles size={15} /> Hint</button>
                <button className={`secondary pastel-3${attentionTool === 'teach' ? ' attention-flash' : ''}`} onClick={() => setShowLesson(!showLesson)}><BookOpen size={15} /> Teach me</button>
              </div>
              <div className="actions-toolbar-row">
                <button className={`secondary pastel-4${showCalculator ? ' active' : ''}`} onClick={() => setShowCalculator(v => !v)}><Calculator size={15} /> Calculator</button>
                <button className={`secondary pastel-5${showThoughts ? ' active' : ''}`} onClick={() => setShowThoughts(v => !v)}><Brain size={15} /> Note pad</button>
                <button className="secondary pastel-6" onClick={resetQuestion}><Repeat2 size={15} /> Reset Q</button>
              </div>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div className="hint" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <div className="hint-speaker">
                    <SpeakerPortrait role="thinker" />
                    <div>
                      <strong>Sensei Cuttle says:</strong>
                      <p>{question.mentorHint}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showLesson && (
                <motion.div className="lesson-box" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <div className="lesson-content">
                    <div className="lesson-header">
                      <BookOpen size={18} />
                      <h3>Deep Dive Lesson</h3>
                    </div>
                    <div className="lesson-text">
                      {question.lesson ? (
                        question.lesson.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
                      ) : (
                        <p>Floe is still drafting the full lesson for this specific problem. In the meantime, check the hint and worked solution for key concepts!</p>
                      )}
                    </div>
                    <button className="close-lesson" onClick={() => setShowLesson(false)}>Got it</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showCalculator && (
                <motion.div className="tool-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <input
                    id="calc-input"
                    value={calculatorInput}
                    onChange={(e) => setCalculatorInput(e.target.value)}
                    placeholder="9 / (9 + 99)^2"
                    inputMode="decimal"
                  />
                  <div className="calculator-keypad" aria-label="Calculator shortcuts">
                    {[
                      { label: 'x', token: '×' },
                      { label: '+', token: '+' },
                      { label: '-', token: '-' },
                      { label: '^', token: '^' },
                      { label: '(', token: '(' },
                      { label: ')', token: ')' },
                    ].map((key) => (
                      <button
                        key={key.label}
                        className="calculator-key"
                        onClick={() => appendCalculatorToken(key.token)}
                        type="button"
                      >
                        {key.label}
                      </button>
                    ))}
                  </div>
                  <output>{calculatorResult || 'Result appears here'}</output>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showThoughts && (
                <motion.div className="tool-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <textarea id="thoughts-input" value={thoughts[thoughtKey] ?? ''} onChange={(e) => setThought(thoughtKey, e.target.value)} placeholder="Write your scratch reasoning here..." rows={3} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="actions-primary">
              <button className="primary" disabled={!selectedAnswerId} onClick={nextQuestion}>
                Next question
              </button>
            </div>

            <AnimatePresence>
              {selectedAnswer && (
                <motion.div className={`feedback ${isCorrect ? 'good' : 'bad'}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="feedback-title">
                    <div>
                      {isCorrect ? <Trophy size={18} /> : <ShieldQuestion size={18} />}
                      <h3>{isCorrect ? successHeadline : 'Not quite — the logic leaks ink.'}</h3>
                    </div>
                  </div>

                  {isCorrect && !focusMode && <XpPopup xp={lastXpGain} onDone={() => setLastXpGain(null)} />}

                  {!isCorrect && selectedAnswer.misconceptions && (
                    <motion.div className="misconceptions" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                      <div className="museum-capture">
                        <span>Captured for review</span>
                        <strong>This misconception is now on your shelf.</strong>
                      </div>
                      {selectedAnswer.misconceptions.map((item, i) => (
                        <div key={i} className="misconception">
                          <p><strong>Why this was tempting:</strong> {item.tempting}</p>
                          <p><strong>Where it breaks:</strong> {item.flaw}</p>
                          <p><strong>Better move:</strong> {item.reframe}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {isCorrect && activeMuseumItem && (
                    <motion.div className="museum-capture cleared" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                      <span>Museum cleared</span>
                      <strong>You retired a misconception from the shelf.</strong>
                    </motion.div>
                  )}

                  <p className="solution"><strong>Worked solution:</strong> {question.solution}</p>

                  {!isCorrect && (
                    <div className="wrong-feedback-box">
                      <label htmlFor="wrong-fb">Penny for your thoughts</label>
                      <p>Tell us what you&apos;re thinking and we&apos;ll improve.</p>
                      <textarea id="wrong-fb" value={wrongAnswerFeedback[thoughtKey] ?? ''} onChange={(e) => setWrongAnswerFeedback(thoughtKey, e.target.value)} placeholder="What felt unclear or annoying?" rows={2} />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        </AnimatePresence>
      </section>

      <div className="admin-flags" style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', display: 'grid', gap: '14px' }}>
        <div style={{ display: 'grid', gap: '10px' }}>
          <label style={{ display: 'grid', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)' }}>
            <span>Good question</span>
            <input
              type="range"
              min="1"
              max="5"
              value={qualityRating.goodQuestion}
              onChange={(event) => setQuestionQualityRating(question.id, { goodQuestion: Number(event.target.value) })}
            />
            <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, opacity: 0.7 }}>
              <span>Bad</span>
              <span>Good</span>
            </span>
          </label>

          <label style={{ display: 'grid', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)' }}>
            <span>Writing issues</span>
            <input
              type="range"
              min="1"
              max="5"
              value={qualityRating.writingIssues}
              onChange={(event) => setQuestionQualityRating(question.id, { writingIssues: Number(event.target.value) })}
            />
            <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, opacity: 0.7 }}>
              <span>Bad</span>
              <span>Good</span>
            </span>
          </label>
        </div>

        <div style={{ minHeight: '21px' }} aria-hidden="true" />
      </div>

      <button className="back-btn" onClick={goBackFromTrainer} type="button">
        <ArrowLeft size={16} /> Back to map
      </button>
    </main>
  )
}
