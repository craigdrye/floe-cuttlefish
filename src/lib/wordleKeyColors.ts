// Scattered pastel colour per keyboard letter for the Wordle-family games.
// Used for un-played ("empty") keys only; once a letter is guessed its
// state-correct/present/absent colour takes over.
const WORDLE_KEY_PASTELS = [
  '#ffd1dc', // pink
  '#ffe5b4', // peach
  '#fff7b2', // lemon
  '#c9f2c7', // mint
  '#bfe9ff', // sky
  '#d3d4ff', // periwinkle
  '#ecd1ff', // lilac
  '#ffd9c0', // apricot
  '#cdeede', // seafoam
  '#f6cfe4', // blossom
]

// Deterministic but scattered (non-spectrum) colour per letter: a multiplicative
// hash so neighbouring keys jump around the palette instead of stepping through
// it like a rainbow.
export function wordleKeyColor(key: string): string {
  const h = (key.charCodeAt(0) * 2654435761) >>> 0
  return WORDLE_KEY_PASTELS[h % WORDLE_KEY_PASTELS.length]
}
