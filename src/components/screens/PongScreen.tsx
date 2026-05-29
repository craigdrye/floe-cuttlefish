import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, Gamepad2, HelpCircle, Pause, Play, RotateCcw } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playRewardVoiceSound } from '../../lib/audio'

type GameStatus = 'ready' | 'playing' | 'paused' | 'won' | 'lost'

interface PongState {
  floeY: number
  rivalY: number
  ballX: number
  ballY: number
  ballVX: number
  ballVY: number
  floeScore: number
  rivalScore: number
  rally: number
}

const WIDTH = 900
const HEIGHT = 520
const PADDLE_W = 18
const PADDLE_H = 108
const BALL = 15
const TARGET_SCORE = 5

function freshState(): PongState {
  return {
    floeY: HEIGHT / 2 - PADDLE_H / 2,
    rivalY: HEIGHT / 2 - PADDLE_H / 2,
    ballX: WIDTH / 2,
    ballY: HEIGHT / 2,
    ballVX: -360,
    ballVY: 160,
    floeScore: 0,
    rivalScore: 0,
    rally: 0,
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function resetBall(state: PongState, direction: 1 | -1): PongState {
  const vertical = (Math.random() * 220 + 80) * (Math.random() > 0.5 ? 1 : -1)
  return {
    ...state,
    ballX: WIDTH / 2,
    ballY: HEIGHT / 2,
    ballVX: direction * 360,
    ballVY: vertical,
    rally: 0,
  }
}

function drawCourt(ctx: CanvasRenderingContext2D, state: PongState, status: GameStatus) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)
  bg.addColorStop(0, '#063247')
  bg.addColorStop(0.52, '#0b5b69')
  bg.addColorStop(1, '#15334e')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.globalAlpha = 0.35
  for (let i = 0; i < 22; i += 1) {
    ctx.fillStyle = i % 3 === 0 ? '#a8e6cf' : '#87ceeb'
    ctx.beginPath()
    ctx.arc((i * 83 + 38) % WIDTH, (i * 47 + 58) % HEIGHT, 2 + (i % 4), 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  ctx.strokeStyle = 'rgba(232,248,245,0.55)'
  ctx.setLineDash([14, 18])
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(WIDTH / 2, 20)
  ctx.lineTo(WIDTH / 2, HEIGHT - 20)
  ctx.stroke()
  ctx.setLineDash([])

  ctx.fillStyle = 'rgba(255,255,255,0.12)'
  ctx.fillRect(24, 24, WIDTH - 48, HEIGHT - 48)
  ctx.strokeStyle = 'rgba(255,255,255,0.32)'
  ctx.lineWidth = 3
  ctx.strokeRect(24, 24, WIDTH - 48, HEIGHT - 48)

  ctx.fillStyle = '#fbbf24'
  ctx.fillRect(38, state.floeY, PADDLE_W, PADDLE_H)
  ctx.fillStyle = '#f472b6'
  ctx.fillRect(WIDTH - 56, state.rivalY, PADDLE_W, PADDLE_H)

  ctx.fillStyle = '#fef9ef'
  ctx.beginPath()
  ctx.arc(state.ballX, state.ballY, BALL, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#00f5d4'
  ctx.lineWidth = 4
  ctx.stroke()

  ctx.font = '900 64px Outfit, system-ui'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255,255,255,0.82)'
  ctx.fillText(String(state.floeScore), WIDTH / 2 - 92, 84)
  ctx.fillText(String(state.rivalScore), WIDTH / 2 + 92, 84)

  ctx.font = '800 18px Outfit, system-ui'
  ctx.fillStyle = 'rgba(255,255,255,0.72)'
  ctx.fillText(`Rally ${state.rally}`, WIDTH / 2, HEIGHT - 34)

  ctx.font = '900 30px Outfit, system-ui'
  ctx.textAlign = 'left'
  ctx.fillStyle = '#fbbf24'
  ctx.fillText('Floe', 38, 48)
  ctx.textAlign = 'right'
  ctx.fillStyle = '#f472b6'
  ctx.fillText('Current', WIDTH - 38, 48)

  if (status !== 'playing') {
    ctx.fillStyle = 'rgba(3, 22, 34, 0.58)'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#fffdf8'
    ctx.font = '900 44px Outfit, system-ui'
    const headline = status === 'won' ? 'Floe wins the rally!' : status === 'lost' ? 'The current got away.' : status === 'paused' ? 'Paused' : 'Pong with Floe'
    ctx.fillText(headline, WIDTH / 2, HEIGHT / 2 - 24)
    ctx.font = '700 20px Inter, system-ui'
    ctx.fillStyle = 'rgba(255,255,255,0.82)'
    ctx.fillText('Move with ↑/↓, W/S, mouse, or touch. First to 5 wins.', WIDTH / 2, HEIGHT / 2 + 20)
  }
}

export function PongScreen() {
  const { setScreen } = useStore()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef<PongState>(freshState())
  const keysRef = useRef({ up: false, down: false })
  const pointerYRef = useRef<number | null>(null)
  const statusRef = useRef<GameStatus>('ready')
  const lastTimeRef = useRef<number | null>(null)
  const [status, setStatus] = useState<GameStatus>('ready')
  const [score, setScore] = useState({ floe: 0, rival: 0 })

  const syncStatus = useCallback((next: GameStatus) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return
    drawCourt(ctx, stateRef.current, statusRef.current)
  }, [])

  const resetGame = useCallback(() => {
    stateRef.current = freshState()
    setScore({ floe: 0, rival: 0 })
    syncStatus('ready')
    draw()
  }, [draw, syncStatus])

  const startGame = useCallback(() => {
    if (statusRef.current === 'won' || statusRef.current === 'lost') {
      stateRef.current = freshState()
      setScore({ floe: 0, rival: 0 })
    }
    lastTimeRef.current = null
    syncStatus('playing')
  }, [syncStatus])

  useEffect(() => {
    draw()
  }, [draw, status])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') {
        keysRef.current.up = true
        event.preventDefault()
      }
      if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') {
        keysRef.current.down = true
        event.preventDefault()
      }
      if (event.key === ' ') {
        if (statusRef.current === 'playing') syncStatus('paused')
        else startGame()
        event.preventDefault()
      }
    }
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') keysRef.current.up = false
      if (event.key === 'ArrowDown' || event.key.toLowerCase() === 's') keysRef.current.down = false
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [startGame, syncStatus])

  useEffect(() => {
    let frame = 0
    const tick = (time: number) => {
      const state = stateRef.current
      if (statusRef.current === 'playing') {
        const last = lastTimeRef.current ?? time
        const dt = Math.min(0.024, (time - last) / 1000)
        lastTimeRef.current = time

        let floeTarget = state.floeY
        if (pointerYRef.current !== null) floeTarget = pointerYRef.current - PADDLE_H / 2
        if (keysRef.current.up) floeTarget -= 480 * dt
        if (keysRef.current.down) floeTarget += 480 * dt
        state.floeY = clamp(floeTarget, 28, HEIGHT - 28 - PADDLE_H)

        const rivalCenter = state.rivalY + PADDLE_H / 2
        const chase = state.ballY - rivalCenter
        state.rivalY = clamp(state.rivalY + Math.sign(chase) * Math.min(Math.abs(chase), 340 * dt), 28, HEIGHT - 28 - PADDLE_H)

        state.ballX += state.ballVX * dt
        state.ballY += state.ballVY * dt

        if (state.ballY < 38 + BALL || state.ballY > HEIGHT - 38 - BALL) {
          state.ballY = clamp(state.ballY, 38 + BALL, HEIGHT - 38 - BALL)
          state.ballVY *= -1
        }

        const hitFloe = state.ballVX < 0 && state.ballX - BALL <= 56 && state.ballX > 30 && state.ballY >= state.floeY && state.ballY <= state.floeY + PADDLE_H
        const hitRival = state.ballVX > 0 && state.ballX + BALL >= WIDTH - 56 && state.ballX < WIDTH - 30 && state.ballY >= state.rivalY && state.ballY <= state.rivalY + PADDLE_H

        if (hitFloe || hitRival) {
          const paddleY = hitFloe ? state.floeY : state.rivalY
          const offset = (state.ballY - (paddleY + PADDLE_H / 2)) / (PADDLE_H / 2)
          const speed = Math.min(660, Math.abs(state.ballVX) + 24)
          state.ballVX = speed * (hitFloe ? 1 : -1)
          state.ballVY = offset * 330
          state.rally += 1
          state.ballX = hitFloe ? 56 + BALL : WIDTH - 56 - BALL
        }

        if (state.ballX < 0) {
          const next = resetBall({ ...state, rivalScore: state.rivalScore + 1 }, 1)
          stateRef.current = next
          setScore({ floe: next.floeScore, rival: next.rivalScore })
          if (next.rivalScore >= TARGET_SCORE) syncStatus('lost')
        }

        if (state.ballX > WIDTH) {
          const next = resetBall({ ...state, floeScore: state.floeScore + 1 }, -1)
          stateRef.current = next
          setScore({ floe: next.floeScore, rival: next.rivalScore })
          if (next.floeScore >= TARGET_SCORE) {
            playRewardVoiceSound('success')
            syncStatus('won')
          }
        }
      } else {
        lastTimeRef.current = null
      }

      draw()
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [draw, syncStatus])

  const updatePointer = (clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    pointerYRef.current = ((clientY - rect.top) / rect.height) * HEIGHT
  }

  return (
    <main className="app-shell pong-shell">
      <TopBar title="Pong with Floe" />
      <section className="pong-layout">
        <article className="pong-hero">
          <div>
            <p className="eyebrow">Reward level</p>
            <h2>Pong with Floe</h2>
            <p>Keep the pearl in the current. Floe guards the left reef; the current guards the right.</p>
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

        <section className="pong-board-wrap" aria-label="Floe pong game">
          <canvas
            ref={canvasRef}
            className="pong-board"
            width={WIDTH}
            height={HEIGHT}
            onMouseMove={(event) => updatePointer(event.clientY)}
            onMouseLeave={() => { pointerYRef.current = null }}
            onTouchMove={(event) => {
              if (event.touches[0]) updatePointer(event.touches[0].clientY)
            }}
            onTouchStart={(event) => {
              if (event.touches[0]) updatePointer(event.touches[0].clientY)
              if (statusRef.current !== 'playing') startGame()
            }}
            onTouchEnd={() => { pointerYRef.current = null }}
          />

          <details className="game-rules pong-rules" open>
            <summary><HelpCircle size={14} /> How to play Pong</summary>
            <div className="game-rules-body">
              <ol>
                <li>Keep the pearl in play by hitting it with your <strong>left paddle</strong>. The current guards the right.</li>
                <li>Move with <kbd>↑</kbd>/<kbd>↓</kbd>, <kbd>W</kbd>/<kbd>S</kbd>, mouse, or touch — the paddle follows your pointer.</li>
                <li>Press <kbd>Space</kbd> to play, pause, or resume.</li>
                <li>The first side to <strong>{TARGET_SCORE} points</strong> wins. Hit the ball with the edge of the paddle to angle your shot.</li>
              </ol>
            </div>
          </details>
        </section>

        <section className="pong-footer">
          <div>
            <Gamepad2 size={16} />
            <span>Move with W/S, arrow keys, mouse, or touch. Space pauses.</span>
          </div>
          <strong>Floe {score.floe} · Current {score.rival}</strong>
        </section>
      </section>
    </main>
  )
}
