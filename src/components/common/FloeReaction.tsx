import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../../store/useStore'
import type { TargetAndTransition } from 'framer-motion'

interface Props {
  state: 'idle' | 'correct' | 'wrong' | 'combo'
}

const characterMap = {
  idle: '/assets/welcome/welcome-cuttlefish-rainbow.png',
  correct: '/assets/fun_characters_transparent/elvis.png',
  wrong: '/assets/fun_characters_transparent/thought.png',
  combo: '/assets/welcome/welcome-cuttlefish-explorer.png',
  cozy: '/assets/welcome/welcome-cuttlefish-sensei.png',
}

export function FloeReaction({ state }: Props) {
  const { mood, combo } = useStore()
  const reaction = useMemo((): { imgSrc: string; animation: TargetAndTransition } => {
    if (state === 'wrong') {
      return { imgSrc: characterMap.wrong, animation: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } } }
    }
    if (state === 'combo' || (state === 'correct' && combo >= 3)) {
      return { imgSrc: characterMap.combo, animation: { y: [0, -15, 0], scale: [1, 1.1, 1], transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' } } }
    }
    if (state === 'correct') {
      return { imgSrc: characterMap.correct, animation: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0], transition: { duration: 0.5 } } }
    }
    if (mood === 'cozy') {
      return { imgSrc: characterMap.cozy, animation: { y: [0, -4, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } } }
    }
    return { imgSrc: characterMap.idle, animation: { y: [0, -8, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } } }
  }, [state, combo, mood])

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={reaction.imgSrc}
        src={reaction.imgSrc}
        alt="Floe"
        className="floe-reaction"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, ...reaction.animation }}
        exit={{ opacity: 0, scale: 0.8 }}
        style={{ width: 64, height: 64, objectFit: 'contain' }}
      />
    </AnimatePresence>
  )
}
