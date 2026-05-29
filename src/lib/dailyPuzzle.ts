// Deterministic per-day puzzle picks plus a tiny seeded RNG (mulberry32).
// Used by the games hub so every player sees the same daily problem.

export const DAILY_BONUS_LIMIT = 3

/** YYYY-MM-DD in the player's local timezone. */
export function todayKey(now: Date = new Date()): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** djb2-style string hash → unsigned 32-bit. */
export function hashString(input: string): number {
  let h = 5381 >>> 0
  for (let i = 0; i < input.length; i += 1) {
    h = (((h << 5) + h) ^ input.charCodeAt(i)) >>> 0
  }
  return h >>> 0
}

/** Seeded RNG. Returns a function that yields [0, 1). */
export function mulberry32(seed: number): () => number {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6D2B79F5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Deterministic index into [0, len) seeded by `${gameId}:${dateKey}`. */
export function dailyIndex(gameId: string, len: number, dateKey: string = todayKey()): number {
  if (len <= 0) return 0
  return hashString(`${gameId}:${dateKey}`) % len
}

/** Deterministic RNG seeded by `${gameId}:${dateKey}`. */
export function dailyRng(gameId: string, dateKey: string = todayKey()): () => number {
  return mulberry32(hashString(`${gameId}:${dateKey}`))
}

/** Fisher–Yates that uses the supplied rng. */
export function shuffleWith<T>(arr: readonly T[], rng: () => number): T[] {
  const next = [...arr]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}
