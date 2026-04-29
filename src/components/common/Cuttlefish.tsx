import { motion } from 'framer-motion'

export type CuttlefishMood = 'neutral' | 'thinking' | 'win' | 'oops'

interface CuttlefishProps {
  mood: CuttlefishMood
}

export function Cuttlefish({ mood }: CuttlefishProps) {
  return (
    <motion.div
      className={`cuttlefish ${mood}`}
      animate={{ y: [0, -4, 0], rotate: mood === 'oops' ? [-2, 2, -1, 0] : 0 }}
      transition={{ duration: mood === 'oops' ? 0.35 : 3, repeat: mood === 'oops' ? 0 : Infinity }}
      aria-hidden="true"
    >
      <picture>
        <source srcSet="/assets/cuttlefish/all-variants.webp" type="image/webp" />
        <img src="/assets/cuttlefish/all-variants.gif" alt="" />
      </picture>
    </motion.div>
  )
}

export function StaticMascot({ src }: { src: string }) {
  return <img className="static-cuttlefish" src={src} alt="" aria-hidden="true" />
}
