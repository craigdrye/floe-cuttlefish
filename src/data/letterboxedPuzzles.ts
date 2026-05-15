// Letterboxed puzzles. Each puzzle is 12 distinct letters arranged on 4 sides.
// Rules:
//   1. Each word ≥ 3 letters, made only from the 12 puzzle letters.
//   2. Consecutive letters in a word must be on DIFFERENT sides.
//   3. Each next word must start with the previous word's last letter.
//   4. Win when every one of the 12 letters has been used at least once.

export interface LetterboxedPuzzle {
  id: string
  sides: [string[], string[], string[], string[]] // top, right, bottom, left — 3 letters each
  par: number // suggested solve length
}

export const letterboxedPuzzles: LetterboxedPuzzle[] = [
  {
    id: 'reef-1',
    sides: [
      ['T', 'R', 'A'],
      ['C', 'O', 'N'],
      ['I', 'E', 'L'],
      ['S', 'P', 'M'],
    ],
    par: 4,
  },
  {
    id: 'reef-2',
    sides: [
      ['B', 'L', 'U'],
      ['I', 'O', 'N'],
      ['S', 'H', 'E'],
      ['R', 'T', 'A'],
    ],
    par: 5,
  },
  {
    id: 'reef-3',
    sides: [
      ['G', 'A', 'R'],
      ['D', 'E', 'N'],
      ['I', 'S', 'T'],
      ['M', 'O', 'C'],
    ],
    par: 4,
  },
]
