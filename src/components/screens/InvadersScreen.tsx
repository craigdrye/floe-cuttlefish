import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, Gamepad2, HelpCircle, Pause, Play, RotateCcw } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playRewardVoiceSound } from '../../lib/audio'

type InvaderStatus = 'ready' | 'playing' | 'paused' | 'won' | 'lost'

interface Invader {
  id: number
  x: number
  y: number
  alive: boolean
  kind: number
}

interface Shot {
  x: number
  y: number
  vy: number
}

interface InvadersState {
  floeX: number
  invaders: Invader[]
  shots: Shot[]
  enemyShots: Shot[]
  direction: 1 | -1
  score: number
  lives: number
  wave: number
  fireCooldown: number
  enemyCooldown: number
}

const WIDTH = 900
const HEIGHT = 560
const FLOE_W = 72
const FLOE_H = 38
const INVADER_W = 44
const INVADER_H = 28

function makeInvaders(wave: number): Invader[] {
  const invaders: Invader[] = []
  let id = 1
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      invaders.push({
        id,
        x: 118 + col * 72,
        y: 82 + row * 52 + Math.min(18, wave * 3),
        alive: true,
        kind: row % 3,
      })
      id += 1
    }
  }
  return invaders
}

function freshState(): InvadersState {
  return {
    floeX: WIDTH / 2,
    invaders: makeInvaders(1),
    shots: [],
    enemyShots: [],
    direction: 1,
    score: 0,
    lives: 3,
    wave: 1,
    fireCooldown: 0,
    enemyCooldown: 0.9,
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function drawInvader(ctx: CanvasRenderingContext2D, invader: Invader) {
  const colors = ['#f472b6', '#a78bfa', '#2ec4b6']
  ctx.fillStyle = colors[invader.kind]
  ctx.beginPath()
  ctx.roundRect(invader.x - INVADER_W / 2, invader.y - INVADER_H / 2, INVADER_W, INVADER_H, 10)
  ctx.fill()
  ctx.fillStyle = '#062437'
  ctx.beginPath()
  ctx.arc(invader.x - 11, invader.y - 2, 3, 0, Math.PI * 2)
  ctx.arc(invader.x + 11, invader.y - 2, 3, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = 'rgba(255,255,255,0.7)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(invader.x - 17, invader.y + 10)
  ctx.lineTo(invader.x - 25, invader.y + 18)
  ctx.moveTo(invader.x + 17, invader.y + 10)
  ctx.lineTo(invader.x + 25, invader.y + 18)
  ctx.stroke()
}

function drawFloe(ctx: CanvasRenderingContext2D, x: number) {
  const y = HEIGHT - 66
  ctx.fillStyle = '#fbbf24'
  ctx.beginPath()
  ctx.ellipse(x, y, FLOE_W / 2, FLOE_H / 2, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#fffdf8'
  ctx.beginPath()
  ctx.arc(x - 16, y - 4, 6, 0, Math.PI * 2)
  ctx.arc(x + 16, y - 4, 6, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#063247'
  ctx.beginPath()
  ctx.arc(x - 14, y - 3, 3, 0, Math.PI * 2)
  ctx.arc(x + 18, y - 3, 3, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#fbbf24'
  ctx.lineWidth = 5
  for (let i = -2; i <= 2; i += 1) {
    ctx.beginPath()
    ctx.moveTo(x + i * 13, y + 16)
    ctx.lineTo(x + i * 16, y + 31)
    ctx.stroke()
  }
}

function drawGame(ctx: CanvasRenderingContext2D, state: InvadersState, status: InvaderStatus) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  const bg = ctx.createLinearGradient(0, 0, 0, HEIGHT)
  bg.addColorStop(0, '#031622')
  bg.addColorStop(0.5, '#063247')
  bg.addColorStop(1, '#0b5b69')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.globalAlpha = 0.42
  for (let i = 0; i < 38; i += 1) {
    ctx.fillStyle = i % 4 === 0 ? '#fbbf24' : '#e8f8f5'
    ctx.beginPath()
    ctx.arc((i * 97 + 31) % WIDTH, (i * 53 + 24) % 320, 1.4 + (i % 3), 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  ctx.strokeStyle = 'rgba(168,230,207,0.2)'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(28, HEIGHT - 34)
  ctx.bezierCurveTo(190, HEIGHT - 74, 330, HEIGHT - 16, 504, HEIGHT - 46)
  ctx.bezierCurveTo(650, HEIGHT - 70, 760, HEIGHT - 28, 872, HEIGHT - 62)
  ctx.stroke()

  state.invaders.filter((invader) => invader.alive).forEach((invader) => drawInvader(ctx, invader))
  drawFloe(ctx, state.floeX)

  ctx.fillStyle = '#fef9ef'
  state.shots.forEach((shot) => {
    ctx.beginPath()
    ctx.arc(shot.x, shot.y, 6, 0, Math.PI * 2)
    ctx.fill()
  })

  ctx.fillStyle = '#ff6b6b'
  state.enemyShots.forEach((shot) => {
    ctx.beginPath()
    ctx.roundRect(shot.x - 4, shot.y - 8, 8, 16, 4)
    ctx.fill()
  })

  ctx.font = '900 28px Outfit, system-ui'
  ctx.fillStyle = '#fffdf8'
  ctx.textAlign = 'left'
  ctx.fillText(`Score ${state.score}`, 30, 44)
  ctx.textAlign = 'center'
  ctx.fillText(`Wave ${state.wave}`, WIDTH / 2, 44)
  ctx.textAlign = 'right'
  ctx.fillText(`Lives ${state.lives}`, WIDTH - 30, 44)

  if (status !== 'playing') {
    ctx.fillStyle = 'rgba(3, 22, 34, 0.62)'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#fffdf8'
    ctx.font = '900 43px Outfit, system-ui'
    const headline = status === 'won' ? 'Reef cleared!' : status === 'lost' ? 'The reef got crowded.' : status === 'paused' ? 'Paused' : 'Space Invaders with Floe'
    ctx.fillText(headline, WIDTH / 2, HEIGHT / 2 - 20)
    ctx.font = '700 19px Inter, system-ui'
    ctx.fillStyle = 'rgba(255,255,255,0.84)'
    ctx.fillText('Move with A/D or arrows. Space/click/tap fires pearls.', WIDTH / 2, HEIGHT / 2 + 24)
  }
}

export function InvadersScreen() {
  const { setScreen } = useStore()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef<InvadersState>(freshState())
  const statusRef = useRef<InvaderStatus>('ready')
  const lastTimeRef = useRef<number | null>(null)
  const keysRef = useRef({ left: false, right: false, fire: false })
  const pointerXRef = useRef<number | null>(null)
  const [status, setStatus] = useState<InvaderStatus>('ready')
  const [hud, setHud] = useState({ score: 0, lives: 3, wave: 1 })

  const syncStatus = useCallback((next: InvaderStatus) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    drawGame(ctx, stateRef.current, statusRef.current)
  }, [])

  const resetGame = useCallback(() => {
    stateRef.current = freshState()
    setHud({ score: 0, lives: 3, wave: 1 })
    syncStatus('ready')
    draw()
  }, [draw, syncStatus])

  const startGame = useCallback(() => {
    if (statusRef.current === 'won' || statusRef.current === 'lost') {
      stateRef.current = freshState()
      setHud({ score: 0, lives: 3, wave: 1 })
    }
    lastTimeRef.current = null
    syncStatus('playing')
  }, [syncStatus])

  const fire = () => {
    const state = stateRef.current
    if (state.fireCooldown > 0 || statusRef.current !== 'playing') return
    state.shots.push({ x: state.floeX, y: HEIGHT - 94, vy: -620 })
    state.fireCooldown = 0.22
  }

  useEffect(() => {
    draw()
  }, [draw, status])

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (key === 'arrowleft' || key === 'a') keysRef.current.left = true
      if (key === 'arrowright' || key === 'd') keysRef.current.right = true
      if (key === ' ') {
        if (statusRef.current === 'ready' || statusRef.current === 'paused') startGame()
        else fire()
        keysRef.current.fire = true
      }
      if (['arrowleft', 'arrowright', 'a', 'd', ' '].includes(key)) event.preventDefault()
    }
    const up = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      if (key === 'arrowleft' || key === 'a') keysRef.current.left = false
      if (key === 'arrowright' || key === 'd') keysRef.current.right = false
      if (key === ' ') keysRef.current.fire = false
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [startGame])

  useEffect(() => {
    let frame = 0
    const tick = (time: number) => {
      const state = stateRef.current
      if (statusRef.current === 'playing') {
        const last = lastTimeRef.current ?? time
        const dt = Math.min(0.024, (time - last) / 1000)
        lastTimeRef.current = time
        state.fireCooldown = Math.max(0, state.fireCooldown - dt)
        state.enemyCooldown = Math.max(0, state.enemyCooldown - dt)

        if (pointerXRef.current !== null) state.floeX = clamp(pointerXRef.current, 52, WIDTH - 52)
        if (keysRef.current.left) state.floeX -= 430 * dt
        if (keysRef.current.right) state.floeX += 430 * dt
        state.floeX = clamp(state.floeX, 52, WIDTH - 52)
        if (keysRef.current.fire) fire()

        const alive = state.invaders.filter((invader) => invader.alive)
        const speed = 34 + state.wave * 8 + (36 - alive.length) * 1.4
        let hitEdge = false
        alive.forEach((invader) => {
          invader.x += state.direction * speed * dt
          if (invader.x > WIDTH - 58 || invader.x < 58) hitEdge = true
        })
        if (hitEdge) {
          state.direction *= -1
          alive.forEach((invader) => {
            invader.y += 22
          })
        }

        state.shots = state.shots.map((shot) => ({ ...shot, y: shot.y + shot.vy * dt })).filter((shot) => shot.y > -20)
        state.enemyShots = state.enemyShots.map((shot) => ({ ...shot, y: shot.y + shot.vy * dt })).filter((shot) => shot.y < HEIGHT + 20)

        for (const shot of state.shots) {
          const target = alive.find((invader) => Math.abs(shot.x - invader.x) < INVADER_W / 2 && Math.abs(shot.y - invader.y) < INVADER_H / 2)
          if (target) {
            target.alive = false
            shot.y = -100
            state.score += 10 + target.kind * 5
          }
        }
        state.shots = state.shots.filter((shot) => shot.y > -20)

        if (state.enemyCooldown <= 0 && alive.length) {
          const shooter = alive[Math.floor(Math.random() * alive.length)]
          state.enemyShots.push({ x: shooter.x, y: shooter.y + 20, vy: 220 + state.wave * 24 })
          state.enemyCooldown = Math.max(0.35, 1.05 - state.wave * 0.08)
        }

        const floeY = HEIGHT - 66
        const wasHit = state.enemyShots.some((shot) => Math.abs(shot.x - state.floeX) < FLOE_W / 2 && Math.abs(shot.y - floeY) < FLOE_H / 2)
        if (wasHit) {
          state.lives -= 1
          state.enemyShots = []
          if (state.lives <= 0) syncStatus('lost')
        }

        if (alive.some((invader) => invader.y > HEIGHT - 116)) syncStatus('lost')

        if (state.invaders.every((invader) => !invader.alive)) {
          if (state.wave >= 3) {
            playRewardVoiceSound('success')
            syncStatus('won')
          } else {
            state.wave += 1
            state.invaders = makeInvaders(state.wave)
            state.shots = []
            state.enemyShots = []
            state.direction = 1
          }
        }

        setHud({ score: state.score, lives: state.lives, wave: state.wave })
      } else {
        lastTimeRef.current = null
      }
      draw()
      frame = window.requestAnimationFrame(tick)
    }
    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [draw, syncStatus])

  const updatePointer = (clientX: number) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    pointerXRef.current = ((clientX - rect.left) / rect.width) * WIDTH
  }

  return (
    <main className="app-shell pong-shell">
      <TopBar title="Space Invaders with Floe" />
      <section className="pong-layout">
        <article className="pong-hero">
          <div>
            <p className="eyebrow">Reward level</p>
            <h2>Space Invaders with Floe</h2>
            <p>Floe fires pearls upward while reef invaders drift down through the dark water.</p>
          </div>
          <div className="pong-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={status === 'playing' ? () => syncStatus('paused') : startGame}>
              {status === 'playing' ? <Pause size={16} /> : <Play size={16} />}
              {status === 'playing' ? 'Pause' : status === 'paused' ? 'Resume' : 'Play'}
            </button>
            <button type="button" onClick={resetGame}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className="pong-board-wrap" aria-label="Floe space invaders game">
          <canvas
            ref={canvasRef}
            className="pong-board invaders-board"
            width={WIDTH}
            height={HEIGHT}
            onMouseMove={(event) => updatePointer(event.clientX)}
            onMouseLeave={() => { pointerXRef.current = null }}
            onMouseDown={() => {
              if (statusRef.current !== 'playing') startGame()
              else fire()
            }}
            onTouchMove={(event) => {
              if (event.touches[0]) updatePointer(event.touches[0].clientX)
            }}
            onTouchStart={(event) => {
              if (event.touches[0]) updatePointer(event.touches[0].clientX)
              if (statusRef.current !== 'playing') startGame()
              else fire()
            }}
            onTouchEnd={() => { pointerXRef.current = null }}
          />

          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Space Invaders</summary>
            <div className="game-rules-body">
              <ol>
                <li>Floe sits at the bottom. Reef invaders march down in formation, faster as their numbers thin out.</li>
                <li>Move with <kbd>←</kbd>/<kbd>→</kbd>, <kbd>A</kbd>/<kbd>D</kbd>, mouse, or touch.</li>
                <li>Fire pearls with <kbd>Space</kbd>, click, or tap. Hold to autofire.</li>
                <li>Each row of invaders is worth more — the back row scores 20, the middle 15, the front 10.</li>
                <li>You have <strong>3 lives</strong>. Take a hit and the screen clears of enemy fire. Clear <strong>3 waves</strong> to win.</li>
              </ol>
            </div>
          </details>
        </section>

        <section className="pong-footer">
          <div>
            <Gamepad2 size={16} />
            <span>Move with A/D, arrows, mouse, or touch. Space/click/tap fires.</span>
          </div>
          <strong>Score {hud.score} · Lives {hud.lives} · Wave {hud.wave}</strong>
        </section>
      </section>
    </main>
  )
}
