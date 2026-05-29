import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
  xp: number | null
  onDone?: () => void
}

export function XpPopup({ xp, onDone }: Props) {
  useEffect(() => {
    if (xp !== null && xp > 0) {
      const t = setTimeout(() => onDone?.(), 1200)
      return () => clearTimeout(t)
    }
  }, [xp, onDone])

  return (
    <AnimatePresence>
      {xp !== null && xp > 0 && (
        <motion.div
          key={xp}
          className="xp-popup"
          initial={{ opacity: 0, y: 0, scale: 0.8 }}
          animate={{ opacity: 1, y: -40, scale: 1 }}
          exit={{ opacity: 0, y: -70, scale: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Star size={14} />
          <span>+{xp} XP</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
