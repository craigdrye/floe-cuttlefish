import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Transition } from 'framer-motion'
import './App.css'
import { useStore } from './store/useStore'
import { WelcomeScreen } from './components/screens/WelcomeScreen'
import { AudienceSelectScreen } from './components/screens/AudienceSelectScreen'
import { ProfileScreen } from './components/screens/ProfileScreen'
import { QuestionnaireScreen } from './components/screens/QuestionnaireScreen'
import { TrackSelectScreen } from './components/screens/TrackSelectScreen'
import { MapScreen } from './components/screens/MapScreen'
import { TrainerScreen } from './components/screens/TrainerScreen'
import { AchievementToast } from './components/common/AchievementToast'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}
const pageTransition: Transition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] }

function screenKey(showWelcome: boolean, showAudience: boolean, showProfile: boolean, showQuestionnaire: boolean, selectedTrack: string | null, screen: string) {
  if (showWelcome) return 'welcome'
  if (showAudience) return 'audience'
  if (showQuestionnaire) return 'questionnaire'
  if (showProfile) return 'profile'
  if (!selectedTrack) return 'tracks'
  return screen === 'map' ? 'map' : 'trainer'
}

function App() {
  const { showWelcome, showAudience, showProfile, showQuestionnaire, selectedTrack, screen, darkMode } = useStore()

  useEffect(() => {
    document.title = 'Floe — Learn the thing'
  }, [])

  useEffect(() => {
    document.body.classList.toggle('deep-ocean', darkMode)
    return () => document.body.classList.remove('deep-ocean')
  }, [darkMode])

  const key = screenKey(showWelcome, showAudience, showProfile, showQuestionnaire, selectedTrack, screen)

  let content: React.ReactNode
  if (showWelcome) content = <WelcomeScreen />
  else if (showAudience) content = <AudienceSelectScreen />
  else if (showQuestionnaire) content = <QuestionnaireScreen />
  else if (showProfile) content = <ProfileScreen />
  else if (!selectedTrack) content = <TrackSelectScreen />
  else if (screen === 'map') content = <MapScreen />
  else content = <TrainerScreen />

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
