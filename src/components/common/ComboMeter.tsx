import { motion, AnimatePresence } from 'framer-motion'
import { Flame } from 'lucide-react'

interface Props {
  combo: number
  maxCombo: number
}

const comboLabels = [
  '',
  '',
  'Nice!',
  'Great!',
  'Amazing!',
  'On fire! 🔥',
  'UNSTOPPABLE!',
  'LEGENDARY! ✨',
]

function getComboLabel(combo: number) {
  if (combo < 2) return ''
  if (combo >= comboLabels.length) return comboLabels[comboLabels.length - 1]
  return comboLabels[combo]
}

function getComboTier(combo: number) {
  if (combo >= 7) return 'legendary'
  if (combo >= 5) return 'fire'
  if (combo >= 3) return 'hot'
  if (combo >= 2) return 'warm'
  return 'idle'
}

export function ComboMeter({ combo }: Props) {
  const tier = getComboTier(combo)
  const label = getComboLabel(combo)

  return (
    <AnimatePresence>
      {combo >= 2 && (
        <motion.div
          className={`combo-meter combo-${tier}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.3, opacity: 0 }}
          transition={{ type: 'spring', damping: 12, stiffness: 400 }}
          key="combo"
        >
          <motion.div
            className="combo-number"
            key={combo}
            initial={{ scale: 1.6, y: -8 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 500 }}
          >
            <Flame size={16} />
            <span>{combo}×</span>
          </motion.div>
          {label && (
            <motion.span
              className="combo-label"
              key={`label-${combo}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
