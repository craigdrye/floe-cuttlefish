// Waffle: 5x5 grid where 21 cells hold letters (4 corner-of-quadrant cells are empty).
// Six 5-letter words: 3 across (rows 0, 2, 4) + 3 down (cols 0, 2, 4).
// Player swaps tile pairs to restore the solution.
//
// Cell indices (in row-major order, skipping empty cells):
//   r0:  0  1  2  3  4
//   r1:  5  .  6  .  7
//   r2:  8  9 10 11 12
//   r3: 13  . 14  . 15
//   r4: 16 17 18 19 20
//
// Solution stored as a 21-character string in cell-index order.

export interface WafflePuzzle {
  id: string
  solution: string // 21 letters, cell-index order
  acrossWords: [string, string, string]
  downWords: [string, string, string]
  swapBudget: number
}

// Puzzle 1 — six valid English words that share corners cleanly:
//   S T A R S   (STARS)
//   T . H . C
//   O P E R A   (OPERA)
//   R . A . L
//   E N D E D   (ENDED)
//   Down cols 0/2/4: STORE, AHEAD, SCALD
//
// Puzzle 2:
//   S H A R P   (SHARP)
//   C . T . L
//   A R O M A   (AROMA)
//   L . M . C
//   P A S T E   (PASTE)
//   Down cols 0/2/4: SCALP, ATOMS, PLACE
export const wafflePuzzles: WafflePuzzle[] = [
  {
    id: 'waffle-1',
    solution: 'STARSTHCOPERARALENDED',
    acrossWords: ['STARS', 'OPERA', 'ENDED'],
    downWords: ['STORE', 'AHEAD', 'SCALD'],
    swapBudget: 15,
  },
  {
    id: 'waffle-2',
    solution: 'SHARPCTLAROMALMCPASTE',
    acrossWords: ['SHARP', 'AROMA', 'PASTE'],
    downWords: ['SCALP', 'ATOMS', 'PLACE'],
    swapBudget: 15,
  },
]

// Indices considered "corners" — these stay correct in a fresh shuffle.
export const CORNER_INDICES = [0, 4, 16, 20] as const

// Helper: derive 5-letter word from cells at given indices
export function letterIndicesForRow(row: 0 | 2 | 4): [number, number, number, number, number] {
  if (row === 0) return [0, 1, 2, 3, 4]
  if (row === 2) return [8, 9, 10, 11, 12]
  return [16, 17, 18, 19, 20]
}
export function letterIndicesForCol(col: 0 | 2 | 4): [number, number, number, number, number] {
  if (col === 0) return [0, 5, 8, 13, 16]
  if (col === 2) return [2, 6, 10, 14, 18]
  return [4, 7, 12, 15, 20]
}

// Map cell index → (row, col) for layout
export const CELL_POSITIONS: Array<[number, number]> = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 0], [1, 2], [1, 4],
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
  [3, 0], [3, 2], [3, 4],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
]
