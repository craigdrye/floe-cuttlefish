import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Transition } from 'framer-motion'
import './App.css'
import { useStore } from './store/useStore'
import { WelcomeScreen } from './components/screens/WelcomeScreen'
import { AudienceSelectScreen } from './components/screens/AudienceSelectScreen'
import { InterestSelectScreen } from './components/screens/InterestSelectScreen'
import { ProfileScreen } from './components/screens/ProfileScreen'
import { QuestionnaireScreen } from './components/screens/QuestionnaireScreen'
import { TrackSelectScreen } from './components/screens/TrackSelectScreen'
import { MapScreen } from './components/screens/MapScreen'
import { ChapterSubMapScreen } from './components/screens/ChapterSubMapScreen'
import { FlashcardsScreen } from './components/screens/FlashcardsScreen'
import { TrainerScreen } from './components/screens/TrainerScreen'
import { PersonalityTestScreen } from './components/screens/PersonalityTestScreen'
import { isPersonalityTrackId } from './data/personalityTests'
import { IqTestScreen } from './components/screens/IqTestScreen'
import { IQ_TEST_TRACK_ID } from './data/iqTest'
import { PongScreen } from './components/screens/PongScreen'
import { InvadersScreen } from './components/screens/InvadersScreen'
import { PresentScreen } from './components/screens/PresentScreen'
import { GuessGiftScreen } from './components/screens/GuessGiftScreen'
import { FightScreen } from './components/screens/FightScreen'
import { WordleScreen } from './components/screens/WordleScreen'
import { QuordleScreen, OctordleScreen } from './components/screens/MultiWordleScreen'
import { ConnectionsScreen } from './components/screens/ConnectionsScreen'
import { LetterboxedScreen } from './components/screens/LetterboxedScreen'
import { WaffleScreen } from './components/screens/WaffleScreen'
import { Game2048Screen } from './components/screens/Game2048Screen'
import { Game2248Screen } from './components/screens/Game2248Screen'
import { NerdleScreen } from './components/screens/NerdleScreen'
import { SumpleteScreen } from './components/screens/SumpleteScreen'
import { SudokuScreen } from './components/screens/SudokuScreen'
import { KakuroScreen } from './components/screens/KakuroScreen'
import { RikudoScreen } from './components/screens/RikudoScreen'
import { AchievementToast } from './components/common/AchievementToast'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}
const pageTransition: Transition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] }

function screenKey(showWelcome: boolean, showAudience: boolean, showInterests: boolean, showProfile: boolean, showQuestionnaire: boolean, selectedTrack: string | null, screen: string) {
  if (showWelcome) return 'welcome'
  if (showAudience) return 'audience'
  if (showInterests) return 'interests'
  if (showQuestionnaire) return 'questionnaire'
  if (showProfile) return 'profile'
  if (screen === 'pong') return 'pong'
  if (screen === 'invaders') return 'invaders'
  if (screen === 'present') return 'present'
  if (screen === 'guessGift') return 'guessGift'
  if (screen === 'fight') return 'fight'
  if (screen === 'wordle') return 'wordle'
  if (screen === 'quordle') return 'quordle'
  if (screen === 'octordle') return 'octordle'
  if (screen === 'connections') return 'connections'
  if (screen === 'letterboxed') return 'letterboxed'
  if (screen === 'waffle') return 'waffle'
  if (screen === 'g2048') return 'g2048'
  if (screen === 'g2248') return 'g2248'
  if (screen === 'nerdle') return 'nerdle'
  if (screen === 'sumplete') return 'sumplete'
  if (screen === 'sudoku') return 'sudoku'
  if (screen === 'kakuro') return 'kakuro'
  if (screen === 'rikudo') return 'rikudo'
  if (selectedTrack) {
    if (screen === 'map') return 'map'
    if (screen === 'chapter') return 'chapter'
    if (screen === 'flashcards') return 'flashcards'
    return 'trainer'
  }
  if (screen === 'courses') return 'courses'
  if (screen === 'games') return 'games'
  return 'hub'
}

function App() {
  const {
    showWelcome,
    showAudience,
    showInterests,
    showProfile,
    showQuestionnaire,
    selectedTrack,
    screen,
    darkMode,
    floeMode,
    user,
    onboardingAge,
    setShowWelcome,
    setShowAudience,
    setShowInterests,
    setScreen,
    setSelectedTrack,
    setOnboardingUsername,
    setOnboardingEmail,
    setSelectedInterests,
    setSelectedAdultFocus,
  } = useStore()

  useEffect(() => {
    document.title = 'Floe — Learn the thing'
  }, [])

  useEffect(() => {
    document.body.classList.toggle('deep-ocean', darkMode)
    return () => document.body.classList.remove('deep-ocean')
  }, [darkMode])

  useEffect(() => {
    const active = floeMode && !selectedTrack
    document.body.classList.toggle('floe-mode-active', active)
    return () => document.body.classList.remove('floe-mode-active')
  }, [floeMode, selectedTrack])

  useEffect(() => {
    if (!user || user.isGuest || !showWelcome) return

    const age = user.onboardingAge ?? onboardingAge
    const hasOnboardingChoices =
      user.onboardingComplete ||
      (user.interests !== undefined && (age < 23 || user.adultFocus !== undefined))

    if (!hasOnboardingChoices) return

    setOnboardingUsername(user.username)
    setOnboardingEmail(user.email ?? '')
    setSelectedInterests(user.interests ?? [])
    setSelectedAdultFocus(user.adultFocus ?? [])
    setSelectedTrack(null)
    setScreen('hub')
    // User preference: always show the landing/welcome page on refresh. We intentionally do
    // NOT auto-dismiss it for returning users (no setShowWelcome(false) here); onboarding data
    // is still restored above, and the learner clicks through from the landing page as normal.
    setShowAudience(false)
    setShowInterests(true)
  }, [
    onboardingAge,
    setOnboardingEmail,
    setOnboardingUsername,
    setScreen,
    setSelectedAdultFocus,
    setSelectedInterests,
    setSelectedTrack,
    setShowAudience,
    setShowInterests,
    setShowWelcome,
    showWelcome,
    user,
  ])

  const key = screenKey(showWelcome, showAudience, showInterests, showProfile, showQuestionnaire, selectedTrack, screen)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  let content: React.ReactNode
  if (showWelcome) content = <WelcomeScreen />
  else if (showAudience) content = <AudienceSelectScreen />
  else if (showInterests) content = <InterestSelectScreen />
  else if (showQuestionnaire) content = <QuestionnaireScreen />
  else if (showProfile) content = <ProfileScreen />
  else if (screen === 'pong') content = <PongScreen />
  else if (screen === 'invaders') content = <InvadersScreen />
  else if (screen === 'present') content = <PresentScreen />
  else if (screen === 'guessGift') content = <GuessGiftScreen />
  else if (screen === 'fight') content = <FightScreen />
  else if (screen === 'wordle') content = <WordleScreen />
  else if (screen === 'quordle') content = <QuordleScreen />
  else if (screen === 'octordle') content = <OctordleScreen />
  else if (screen === 'connections') content = <ConnectionsScreen />
  else if (screen === 'letterboxed') content = <LetterboxedScreen />
  else if (screen === 'waffle') content = <WaffleScreen />
  else if (screen === 'g2048') content = <Game2048Screen />
  else if (screen === 'g2248') content = <Game2248Screen />
  else if (screen === 'nerdle') content = <NerdleScreen />
  else if (screen === 'sumplete') content = <SumpleteScreen />
  else if (screen === 'sudoku') content = <SudokuScreen />
  else if (screen === 'kakuro') content = <KakuroScreen />
  else if (screen === 'rikudo') content = <RikudoScreen />
  else if (selectedTrack && isPersonalityTrackId(selectedTrack)) content = <PersonalityTestScreen />
  else if (selectedTrack === IQ_TEST_TRACK_ID) content = <IqTestScreen />
  else if (selectedTrack && screen === 'map') content = <MapScreen />
  else if (selectedTrack && screen === 'chapter') content = <ChapterSubMapScreen />
  else if (selectedTrack && screen === 'flashcards') content = <FlashcardsScreen />
  else if (selectedTrack) content = <TrainerScreen />
  else if (screen === 'courses') content = <TrackSelectScreen mode="courses" />
  else if (screen === 'games') content = <TrackSelectScreen mode="games" />
  else content = <InterestSelectScreen />

  return (
    <>
      <AchievementToast />
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          className="page-transition"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
