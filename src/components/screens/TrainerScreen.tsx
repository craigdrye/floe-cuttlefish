import { useMemo, useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Brain, BookOpen, Calculator, CheckCircle2, XCircle, Sparkles, ShieldQuestion, Repeat2, Trophy, ArrowLeft } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { useQuizData } from '../../hooks/useQuizData'
import { TopBar } from '../layout/TopBar'
import { SpeakerPortrait } from '../common/SpeakerPortrait'
import { XpPopup } from '../common/XpPopup'
import { calculateExpression } from '../../lib/mathUtils'
import { playComboSound, playSuccessSound, playWrongSound } from '../../lib/audio'
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

export function TrainerScreen() {
  const {
    progress, setProgress, mode, index, setIndex,
    selectedAnswerId, setSelectedAnswerId, showHint, setShowHint,
    incrementAnswerShuffleSeed, calculatorInput, setCalculatorInput,
    thoughts, setThought, wrongAnswerFeedback, setWrongAnswerFeedback,
    setScreen, setRemixSeed, setWordingMode,
    combo, incrementCombo, resetCombo,
    lastXpGain, setLastXpGain, unlockAchievement, updateReview, setPendingStageCelebration,
    captureMisconception, clearMisconception, misconceptionArtifacts, recordBossWin, bossWins, focusMode,
    flaggedQuestions, repeatedQuestions, toggleFlagQuestion, toggleRepeatQuestion,
    showLesson, setShowLesson,
  } = useStore()

  const {
    selectedTrackInfo, activeSet, baseQuestion, question, visibleAnswers, remixSeed, catalogError
  } = useQuizData()

  const QUESTIONS_PER_STAGE = 4
  const [armedAnswerId, setArmedAnswerId] = useState<string | null>(null)
  const [bossIntroDismissedFor, setBossIntroDismissedFor] = useState<string | number | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showThoughts, setShowThoughts] = useState(false)

  useEffect(() => {
    setCalculatorInput('')
  }, [baseQuestion.id, remixSeed, setCalculatorInput])

  const thoughtKey = `${baseQuestion.id}-${remixSeed}`
  const calculatorResult = useMemo(() => calculateExpression(calculatorInput), [calculatorInput])
  const selectedAnswer = question.answers.find((a) => a.id === selectedAnswerId)
  const isCorrect = selectedAnswer?.correct
  const rarity = questionRarity(question)
  const activeMuseumItem = misconceptionArtifacts.find((item) => item.questionId === question.id && !item.clearedAt)
  const stageNumber = Math.floor(index / QUESTIONS_PER_STAGE) + 1
  const isBossBattle = mode === 'daily' && index % QUESTIONS_PER_STAGE === QUESTIONS_PER_STAGE - 1
  const isSecretBoss = isBossBattle && progress.streak >= 7
  const bossId = `${selectedTrackInfo.id}-stage-${stageNumber}`
  const bossTitle = bossTitleFor(selectedTrackInfo.title, stageNumber)
  const bossAlreadyWon = bossWins.some((win) => win.id === bossId)
  const showBossIntro = isBossBattle && bossIntroDismissedFor !== question.id

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
    if (isCorrect) {
      const nextIndex = index + 1
      const currentStage = Math.floor(index / QUESTIONS_PER_STAGE)
      const nextStage = Math.floor(nextIndex / QUESTIONS_PER_STAGE)
      const stageJustCompleted = nextStage > currentStage

      if (mode === 'daily' && (nextIndex >= activeSet.length || stageJustCompleted)) {
        if (stageJustCompleted) setPendingStageCelebration(currentStage + 1)
        setScreen('map')
        if (nextIndex < activeSet.length) setIndex(nextIndex)
      } else {
        setIndex((c) => (c + 1) % activeSet.length)
      }
      incrementAnswerShuffleSeed()
      setSelectedAnswerId(null)
      setArmedAnswerId(null)
      setShowHint(false)
      setShowLesson(false)
      return
    }

    if (mode !== 'daily') setIndex((c) => (c + 1) % activeSet.length)
    setScreen('map')
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

            <div className="story-card">
              <div className="speaker">
                <SpeakerPortrait role={question.kind === 'deep' ? 'explorer' : 'drill'} />
                <div>
                  <strong>{question.kind === 'deep' ? 'Cuttlebella Jones' : 'Sergeant Ink'}</strong>
                  <span>{question.kind === 'deep' ? 'expedition briefing' : 'pre-question briefing'}</span>
                </div>
              </div>
              <p>{question.briefing}</p>
            </div>

            <div className="prompt-box">
              <BookOpen size={19} />
              <div className="prompt-copy">
                <p className="question-prompt">{question.prompt}</p>
                {question.setup && question.setup.length > 0 && (
                  <div className="question-setup">
                    <strong>Setup</strong>
                    <ul>{question.setup.map((line) => <li key={line}>{line}</li>)}</ul>
                  </div>
                )}
              </div>
            </div>


            <div className="actions-toolbar">
              <button className="secondary" onClick={askDifferently}><ShieldQuestion size={15} /> Ask differently</button>
              <button className="secondary" onClick={() => setShowHint(!showHint)}><Sparkles size={15} /> Hint</button>
              <button className="secondary" onClick={() => setShowLesson(!showLesson)}><BookOpen size={15} /> Teach me</button>
              <button className={`secondary${showCalculator ? ' active' : ''}`} onClick={() => setShowCalculator(v => !v)}><Calculator size={15} /> Calculator</button>
              <button className={`secondary${showThoughts ? ' active' : ''}`} onClick={() => setShowThoughts(v => !v)}><Brain size={15} /> Note pad</button>
              <button className="secondary" onClick={resetQuestion}><Repeat2 size={15} /> Reset</button>
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
                  <input id="calc-input" value={calculatorInput} onChange={(e) => setCalculatorInput(e.target.value)} placeholder="9 / (9 + 99)" inputMode="decimal" />
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
              <div className="commit-rule">
                <CheckCircle2 size={14} />
                <span>Tap once to lock an answer. Tap the lit answer again to submit.</span>
              </div>
            </div>

            <div className="actions-primary">
              <button className="primary" disabled={!selectedAnswerId} onClick={nextQuestion}>
                {isCorrect ? 'Next question' : 'Back to map'}
              </button>
            </div>

            <AnimatePresence>
              {selectedAnswer && (
                <motion.div className={`feedback ${isCorrect ? 'good' : 'bad'}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="feedback-title">
                    <div>
                      {isCorrect ? <Trophy size={18} /> : <ShieldQuestion size={18} />}
                      <h3>{isCorrect ? 'Correct! Tiny arm-flap salute.' : 'Not quite — the logic leaks ink.'}</h3>
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

      <div className="admin-flags" style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', gap: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={flaggedQuestions.includes(question.id)} 
            onChange={() => toggleFlagQuestion(question.id)} 
          />
          Flag (bad question)
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--ocean-deep)', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={repeatedQuestions.includes(question.id)} 
            onChange={() => toggleRepeatQuestion(question.id)} 
          />
          Repeated
        </label>
      </div>

      <button className="back-btn" onClick={() => setScreen('map')} type="button">
        <ArrowLeft size={16} /> Back to map
      </button>
    </main>
  )
}
