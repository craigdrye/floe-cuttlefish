import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../../store/useStore'
import { playFanfare } from '../../lib/audio'

export function AchievementToast() {
  const { pendingAchievement, dismissAchievement } = useStore()

  useEffect(() => {
    if (pendingAchievement) {
      playFanfare()
      const timer = setTimeout(dismissAchievement, 4000)
      return () => clearTimeout(timer)
    }
  }, [pendingAchievement, dismissAchievement])

  return (
    <AnimatePresence>
      {pendingAchievement && (
        <motion.div
          className="achievement-toast"
          initial={{ y: -80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -60, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={() => {
            dismissAchievement()
          }}
        >
          <span className="achievement-icon">{pendingAchievement.icon}</span>
          <div className="achievement-copy">
            <strong>{pendingAchievement.title}</strong>
            <span>{pendingAchievement.description}</span>
          </div>
          <div className="achievement-shimmer" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
