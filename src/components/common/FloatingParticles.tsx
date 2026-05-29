import { useMemo } from 'react'
import { useStore } from '../../store/useStore'

interface Particle {
  id: number
  type: 'bubble' | 'ray' | 'fish' | 'plankton'
  left: string
  size: number
  delay: string
  duration: string
  opacity: number
}

interface Props {
  variant?: 'welcome' | 'map' | 'ambient'
  density?: number
}

function seeded(seed: number) {
  const x = Math.sin(seed * 999) * 10000
  return x - Math.floor(x)
}

export function FloatingParticles({ variant = 'ambient', density = 1 }: Props) {
  const { focusMode } = useStore()

  const particles = useMemo(() => {
    const items: Particle[] = []
    const bubbleCount = Math.round((variant === 'welcome' ? 16 : 10) * density)
    const rayCount = variant === 'welcome' ? 5 : 3
    const fishCount = variant === 'map' ? 4 : 2
    const planktonCount = Math.round(8 * density)

    for (let i = 0; i < bubbleCount; i++) {
      items.push({
        id: i,
        type: 'bubble',
        left: `${3 + seeded(i + 1) * 94}%`,
        size: 3 + seeded(i + 2) * 9,
        delay: `${seeded(i + 3) * 12}s`,
        duration: `${8 + seeded(i + 4) * 14}s`,
        opacity: 0.12 + seeded(i + 5) * 0.2,
      })
    }

    for (let i = 0; i < rayCount; i++) {
      items.push({
        id: 100 + i,
        type: 'ray',
        left: `${10 + i * (80 / rayCount) + seeded(100 + i) * 10}%`,
        size: 40 + seeded(110 + i) * 80,
        delay: `${i * 2}s`,
        duration: `${6 + seeded(120 + i) * 6}s`,
        opacity: 0.04 + seeded(130 + i) * 0.06,
      })
    }

    for (let i = 0; i < fishCount; i++) {
      items.push({
        id: 200 + i,
        type: 'fish',
        left: `${-10 + seeded(200 + i) * 20}%`,
        size: 14 + seeded(210 + i) * 12,
        delay: `${seeded(220 + i) * 20}s`,
        duration: `${18 + seeded(230 + i) * 14}s`,
        opacity: 0.15 + seeded(240 + i) * 0.15,
      })
    }

    for (let i = 0; i < planktonCount; i++) {
      items.push({
        id: 300 + i,
        type: 'plankton',
        left: `${seeded(300 + i) * 100}%`,
        size: 2 + seeded(310 + i) * 3,
        delay: `${seeded(320 + i) * 15}s`,
        duration: `${12 + seeded(330 + i) * 10}s`,
        opacity: 0.08 + seeded(340 + i) * 0.12,
      })
    }

    return items
  }, [variant, density])

  if (focusMode) return null

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle particle-${p.type}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.type === 'ray' ? p.size * 6 : p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
