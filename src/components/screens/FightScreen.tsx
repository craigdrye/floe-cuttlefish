import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, RotateCcw, HelpCircle } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { useStore } from '../../store/useStore'
import { playRewardVoiceSound, playSuccessSound, playWrongSound } from '../../lib/audio'

type FightStatus = 'ready' | 'playing' | 'won' | 'lost'

interface Projectile {
  id: number
  x: number
  y: number
  vx: number
  owner: 'player' | 'opponent'
  color: string
}

const FIELD_W = 880
const FIELD_H = 460
const GROUND_OFFSET = 80
const SPRITE_W = 110
const SPRITE_H = 140
const PLAYER_X_DEFAULT = 70
const PLAYER_X_MIN = 8
const PLAYER_X_MAX = FIELD_W / 2 - SPRITE_W - 8
const OPPONENT_X_DEFAULT = FIELD_W - 70 - SPRITE_W
const OPPONENT_X_MIN = FIELD_W / 2 + 8
const OPPONENT_X_MAX = FIELD_W - SPRITE_W - 8
const OPPONENT_MOVE_SPEED = 2.2
const OPPONENT_RETARGET_INTERVAL_MS = 1200
const OPPONENT_RETARGET_JITTER_MS = 900
const OPPONENT_JUMP_INTERVAL_MS = 1800
const OPPONENT_JUMP_JITTER_MS = 1400
const MAX_HP = 5
const GRAVITY = 0.7
const JUMP_VELOCITY = 13.5
const OPPONENT_JUMP_VELOCITY = 11.5
const PROJECTILE_SPEED = 7
const PROJECTILE_R = 8
const AI_FIRE_INTERVAL_MS = 1500
const AI_FIRE_JITTER_MS = 700
const CLICK_VS_DBL_CLICK_MS = 220

const PLAYER_SRC = '/assets/cuttlefish/cuttlefish-color-flow-01.png'
const OPPONENT_SRC = '/assets/fun_characters_transparent/hulk.png'
const BACKGROUND_SRC = '/assets/reef/reef-world-scroll_long1.png'

export function FightScreen() {
  const { setScreen } = useStore()
  const [status, setStatus] = useState<FightStatus>('ready')
  const [playerHp, setPlayerHp] = useState(MAX_HP)
  const [opponentHp, setOpponentHp] = useState(MAX_HP)
  const [projectiles, setProjectiles] = useState<Projectile[]>([])
  const [playerJumpY, setPlayerJumpY] = useState(0)
  const [playerX, setPlayerX] = useState(PLAYER_X_DEFAULT)
  const [opponentX, setOpponentX] = useState(OPPONENT_X_DEFAULT)
  const [opponentJumpY, setOpponentJumpY] = useState(0)

  const playerXRef = useRef(PLAYER_X_DEFAULT)
  const playerJumpYRef = useRef(0)
  const playerVyRef = useRef(0)
  const opponentXRef = useRef(OPPONENT_X_DEFAULT)
  const opponentTargetXRef = useRef(OPPONENT_X_DEFAULT)
  const opponentJumpYRef = useRef(0)
  const opponentVyRef = useRef(0)
  const projectilesRef = useRef<Projectile[]>([])
  const statusRef = useRef<FightStatus>('ready')
  const playerHpRef = useRef(MAX_HP)
  const opponentHpRef = useRef(MAX_HP)
  const nextProjectileIdRef = useRef(1)
  const lastAiFireRef = useRef(0)
  const aiNextDelayRef = useRef(AI_FIRE_INTERVAL_MS)
  const lastOpponentRetargetRef = useRef(0)
  const opponentRetargetDelayRef = useRef(OPPONENT_RETARGET_INTERVAL_MS)
  const lastOpponentJumpRef = useRef(0)
  const opponentJumpDelayRef = useRef(OPPONENT_JUMP_INTERVAL_MS)
  const rafRef = useRef<number | null>(null)
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const fieldRef = useRef<HTMLDivElement | null>(null)
  const touchTrackRef = useRef({ startX: 0, startY: 0, moved: false })

  // Keep refs in sync with status
  useEffect(() => { statusRef.current = status }, [status])
  useEffect(() => { playerHpRef.current = playerHp }, [playerHp])
  useEffect(() => { opponentHpRef.current = opponentHp }, [opponentHp])

  const spawnProjectile = useCallback((owner: 'player' | 'opponent') => {
    if (statusRef.current !== 'playing') return
    const id = nextProjectileIdRef.current++
    const isPlayer = owner === 'player'
    const x = isPlayer
      ? playerXRef.current + SPRITE_W * 0.78
      : opponentXRef.current + SPRITE_W * 0.22
    const baseY = FIELD_H - GROUND_OFFSET - SPRITE_H * 0.55
    const y = isPlayer
      ? baseY - playerJumpYRef.current
      : baseY - opponentJumpYRef.current
    const vx = isPlayer ? PROJECTILE_SPEED : -PROJECTILE_SPEED
    const next: Projectile = {
      id,
      x,
      y,
      vx,
      owner,
      color: isPlayer ? '#00f5d4' : '#f43f5e',
    }
    projectilesRef.current = [...projectilesRef.current, next]
    setProjectiles(projectilesRef.current)
  }, [])

  const jump = useCallback(() => {
    if (statusRef.current !== 'playing') return
    if (playerJumpYRef.current > 0) return // already in air
    playerVyRef.current = JUMP_VELOCITY
  }, [])

  const startGame = useCallback(() => {
    const now = performance.now()
    projectilesRef.current = []
    setProjectiles([])
    playerJumpYRef.current = 0
    playerVyRef.current = 0
    setPlayerJumpY(0)
    setPlayerHp(MAX_HP)
    setOpponentHp(MAX_HP)
    playerHpRef.current = MAX_HP
    opponentHpRef.current = MAX_HP
    playerXRef.current = PLAYER_X_DEFAULT
    setPlayerX(PLAYER_X_DEFAULT)
    opponentXRef.current = OPPONENT_X_DEFAULT
    opponentTargetXRef.current = OPPONENT_X_DEFAULT
    opponentJumpYRef.current = 0
    opponentVyRef.current = 0
    setOpponentX(OPPONENT_X_DEFAULT)
    setOpponentJumpY(0)
    lastAiFireRef.current = now
    aiNextDelayRef.current = AI_FIRE_INTERVAL_MS
    lastOpponentRetargetRef.current = now
    opponentRetargetDelayRef.current = OPPONENT_RETARGET_INTERVAL_MS
    lastOpponentJumpRef.current = now
    opponentJumpDelayRef.current = OPPONENT_JUMP_INTERVAL_MS
    setStatus('playing')
    statusRef.current = 'playing'
    playRewardVoiceSound('success')
  }, [])

  const reset = useCallback(() => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current)
      clickTimerRef.current = null
    }
    projectilesRef.current = []
    setProjectiles([])
    playerJumpYRef.current = 0
    playerVyRef.current = 0
    setPlayerJumpY(0)
    setPlayerHp(MAX_HP)
    setOpponentHp(MAX_HP)
    playerHpRef.current = MAX_HP
    opponentHpRef.current = MAX_HP
    playerXRef.current = PLAYER_X_DEFAULT
    setPlayerX(PLAYER_X_DEFAULT)
    opponentXRef.current = OPPONENT_X_DEFAULT
    opponentTargetXRef.current = OPPONENT_X_DEFAULT
    opponentJumpYRef.current = 0
    opponentVyRef.current = 0
    setOpponentX(OPPONENT_X_DEFAULT)
    setOpponentJumpY(0)
    setStatus('ready')
    statusRef.current = 'ready'
  }, [])

  // Game loop
  useEffect(() => {
    const tick = (now: number) => {
      if (statusRef.current === 'playing') {
        // Player physics
        if (playerJumpYRef.current > 0 || playerVyRef.current !== 0) {
          playerJumpYRef.current += playerVyRef.current
          playerVyRef.current -= GRAVITY
          if (playerJumpYRef.current <= 0) {
            playerJumpYRef.current = 0
            playerVyRef.current = 0
          }
          setPlayerJumpY(playerJumpYRef.current)
        }

        // Opponent AI: side-to-side wandering
        if (now - lastOpponentRetargetRef.current >= opponentRetargetDelayRef.current) {
          const span = OPPONENT_X_MAX - OPPONENT_X_MIN
          opponentTargetXRef.current = OPPONENT_X_MIN + Math.random() * span
          lastOpponentRetargetRef.current = now
          opponentRetargetDelayRef.current =
            OPPONENT_RETARGET_INTERVAL_MS - OPPONENT_RETARGET_JITTER_MS / 2 + Math.random() * OPPONENT_RETARGET_JITTER_MS
        }
        const dx = opponentTargetXRef.current - opponentXRef.current
        if (Math.abs(dx) > OPPONENT_MOVE_SPEED) {
          opponentXRef.current += Math.sign(dx) * OPPONENT_MOVE_SPEED
        } else {
          opponentXRef.current = opponentTargetXRef.current
        }
        setOpponentX(opponentXRef.current)

        // Opponent AI: occasional jump
        if (
          opponentJumpYRef.current === 0 &&
          opponentVyRef.current === 0 &&
          now - lastOpponentJumpRef.current >= opponentJumpDelayRef.current
        ) {
          opponentVyRef.current = OPPONENT_JUMP_VELOCITY
          lastOpponentJumpRef.current = now
          opponentJumpDelayRef.current =
            OPPONENT_JUMP_INTERVAL_MS - OPPONENT_JUMP_JITTER_MS / 2 + Math.random() * OPPONENT_JUMP_JITTER_MS
        }
        if (opponentJumpYRef.current > 0 || opponentVyRef.current !== 0) {
          opponentJumpYRef.current += opponentVyRef.current
          opponentVyRef.current -= GRAVITY
          if (opponentJumpYRef.current <= 0) {
            opponentJumpYRef.current = 0
            opponentVyRef.current = 0
          }
          setOpponentJumpY(opponentJumpYRef.current)
        }

        // AI firing
        if (now - lastAiFireRef.current >= aiNextDelayRef.current) {
          spawnProjectile('opponent')
          lastAiFireRef.current = now
          aiNextDelayRef.current = AI_FIRE_INTERVAL_MS - AI_FIRE_JITTER_MS / 2 + Math.random() * AI_FIRE_JITTER_MS
        }

        // Move projectiles + collisions
        const playerHitbox = {
          x: playerXRef.current + 18,
          y: FIELD_H - GROUND_OFFSET - SPRITE_H - playerJumpYRef.current + 12,
          w: SPRITE_W - 36,
          h: SPRITE_H - 24,
        }
        const opponentHitbox = {
          x: opponentXRef.current + 18,
          y: FIELD_H - GROUND_OFFSET - SPRITE_H - opponentJumpYRef.current + 12,
          w: SPRITE_W - 36,
          h: SPRITE_H - 24,
        }

        let playerDamage = 0
        let opponentDamage = 0
        const survivors: Projectile[] = []
        for (const p of projectilesRef.current) {
          const nx = p.x + p.vx
          // Off-screen
          if (nx < -20 || nx > FIELD_W + 20) continue
          // Collision check
          if (p.owner === 'opponent') {
            if (
              nx >= playerHitbox.x && nx <= playerHitbox.x + playerHitbox.w &&
              p.y >= playerHitbox.y && p.y <= playerHitbox.y + playerHitbox.h
            ) {
              playerDamage += 1
              continue
            }
          } else {
            if (
              nx >= opponentHitbox.x && nx <= opponentHitbox.x + opponentHitbox.w &&
              p.y >= opponentHitbox.y && p.y <= opponentHitbox.y + opponentHitbox.h
            ) {
              opponentDamage += 1
              continue
            }
          }
          survivors.push({ ...p, x: nx })
        }
        projectilesRef.current = survivors
        setProjectiles(survivors)

        if (playerDamage > 0) {
          playerHpRef.current = Math.max(0, playerHpRef.current - playerDamage)
          setPlayerHp(playerHpRef.current)
          playWrongSound()
        }
        if (opponentDamage > 0) {
          opponentHpRef.current = Math.max(0, opponentHpRef.current - opponentDamage)
          setOpponentHp(opponentHpRef.current)
          playSuccessSound()
        }

        if (opponentHpRef.current <= 0) {
          statusRef.current = 'won'
          setStatus('won')
          playRewardVoiceSound('success')
        } else if (playerHpRef.current <= 0) {
          statusRef.current = 'lost'
          setStatus('lost')
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [spawnProjectile])

  // Cleanup click timer on unmount
  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    }
  }, [])

  const moveFloeToClientX = (clientX: number) => {
    const field = fieldRef.current
    if (!field) return
    const rect = field.getBoundingClientRect()
    const scale = FIELD_W / rect.width
    const localX = (clientX - rect.left) * scale
    const target = localX - SPRITE_W / 2
    const clamped = Math.max(PLAYER_X_MIN, Math.min(PLAYER_X_MAX, target))
    playerXRef.current = clamped
    setPlayerX(clamped)
  }

  // Mouse: follow cursor X within left half of the field
  const onMouseMove = (e: React.MouseEvent) => {
    if (statusRef.current !== 'playing') return
    moveFloeToClientX(e.clientX)
  }

  // Click vs double-click: single click jumps, double click fires
  const triggerTap = () => {
    if (statusRef.current !== 'playing') return
    if (clickTimerRef.current !== null) {
      clearTimeout(clickTimerRef.current)
      clickTimerRef.current = null
      spawnProjectile('player')
      return
    }
    clickTimerRef.current = setTimeout(() => {
      clickTimerRef.current = null
      jump()
    }, CLICK_VS_DBL_CLICK_MS)
  }

  const onClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return
    triggerTap()
  }

  // Touch: drag to move, tap to jump, double-tap to fire (mirrors mouse)
  const onTouchStart = (e: React.TouchEvent) => {
    if (statusRef.current !== 'playing') return
    const t = e.touches[0]
    if (!t) return
    touchTrackRef.current = { startX: t.clientX, startY: t.clientY, moved: false }
    moveFloeToClientX(t.clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (statusRef.current !== 'playing') return
    const t = e.touches[0]
    if (!t) return
    if (Math.hypot(t.clientX - touchTrackRef.current.startX, t.clientY - touchTrackRef.current.startY) > 8) {
      touchTrackRef.current.moved = true
    }
    moveFloeToClientX(t.clientX)
  }
  const onTouchEnd = () => {
    if (statusRef.current !== 'playing') return
    if (touchTrackRef.current.moved) return
    triggerTap()
  }

  return (
    <main className="app-shell fight-shell">
      <TopBar title="Reef Throwdown" />

      <section className="fight-layout">
        <article className="fight-hero">
          <div>
            <p className="eyebrow">Reef brawl</p>
            <h2>Floe vs. Reef Boss Floe</h2>
            <p>
              Drag your <strong>mouse or finger</strong> to slide Floe along the sand. <strong>Single tap</strong> to jump.
              <strong> Double-tap</strong> to fire.
            </p>
          </div>
          <div className="fight-actions">
            <button type="button" onClick={() => setScreen('games')}>
              <ArrowLeft size={16} /> Back to games
            </button>
            <button type="button" onClick={reset}>
              <RotateCcw size={16} /> Reset
            </button>
          </div>
        </article>

        <section className="fight-stage">
          <details className="game-rules" open>
            <summary><HelpCircle size={14} /> How to play Reef Throwdown</summary>
            <div className="game-rules-body">
              <ol>
                <li><strong>Move:</strong> Floe follows your mouse cursor (desktop) or your finger (touch) along the bottom of the reef.</li>
                <li><strong>Jump:</strong> <kbd>single-click</kbd> or <kbd>single-tap</kbd> anywhere on the field.</li>
                <li><strong>Fire:</strong> <kbd>double-click</kbd> or <kbd>double-tap</kbd> to launch a dot at Reef Boss Floe.</li>
                <li>Reef Boss jumps, slides side to side, and fires back — even mid-air. Dodge his dots while landing your own.</li>
                <li>Each hit takes one HP. First to drain the other's HP wins.</li>
              </ol>
            </div>
          </details>

          <div className="fight-hud">
            <div className="fight-hud-side">
              <span className="fight-hud-name">Floe</span>
              <div className="fight-hp">
                {Array.from({ length: MAX_HP }).map((_, i) => (
                  <span key={i} className={`fight-hp-pip ${i < playerHp ? 'on' : ''}`} />
                ))}
              </div>
            </div>
            <div className="fight-hud-side fight-hud-right">
              <span className="fight-hud-name">Reef Boss Floe</span>
              <div className="fight-hp">
                {Array.from({ length: MAX_HP }).map((_, i) => (
                  <span key={i} className={`fight-hp-pip mr-t ${i < opponentHp ? 'on' : ''}`} />
                ))}
              </div>
            </div>
          </div>

          <div
            ref={fieldRef}
            className={`fight-field fight-${status}`}
            onMouseMove={onMouseMove}
            onClick={onClick}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
              backgroundImage: `url('${BACKGROUND_SRC}')`,
            }}
          >
            <div
              className="fight-character fight-player"
              style={{
                left: playerX,
                top: FIELD_H - GROUND_OFFSET - SPRITE_H - playerJumpY,
                width: SPRITE_W,
                height: SPRITE_H,
              }}
            >
              <img src={PLAYER_SRC} alt="Floe" />
            </div>

            <div
              className="fight-character fight-opponent"
              style={{
                left: opponentX,
                top: FIELD_H - GROUND_OFFSET - SPRITE_H - opponentJumpY,
                width: SPRITE_W,
                height: SPRITE_H,
              }}
            >
              <img src={OPPONENT_SRC} alt="Reef Boss Floe" />
              <div className="fight-mr-t-badge">MR T</div>
            </div>

            {projectiles.map((p) => (
              <span
                key={p.id}
                className="fight-projectile"
                style={{
                  left: p.x - PROJECTILE_R,
                  top: p.y - PROJECTILE_R,
                  width: PROJECTILE_R * 2,
                  height: PROJECTILE_R * 2,
                  background: p.color,
                  boxShadow: `0 0 18px ${p.color}`,
                }}
              />
            ))}

            <div className="fight-ground" />

            {status === 'ready' && (
              <div className="fight-overlay">
                <h3>Ready to brawl?</h3>
                <p>Drag to move. Single tap jumps. Double tap fires.</p>
                <button type="button" onClick={startGame}>Start fight</button>
              </div>
            )}
            {status === 'won' && (
              <div className="fight-overlay fight-overlay-win">
                <h3>You knocked out Reef Boss Floe.</h3>
                <p>Bone-rattling work.</p>
                <button type="button" onClick={startGame}>Rematch</button>
              </div>
            )}
            {status === 'lost' && (
              <div className="fight-overlay fight-overlay-lose">
                <h3>Reef Boss Floe got the better of you.</h3>
                <p>Reset and try again.</p>
                <button type="button" onClick={startGame}>Rematch</button>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  )
}
