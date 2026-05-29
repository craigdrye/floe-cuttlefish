// Connections puzzles: 16 words, grouped into 4 themed categories of 4.
// Difficulty: yellow (easy) → green → blue → purple (hardest / wordplay).

export interface ConnectionsGroup {
  label: string
  difficulty: 'yellow' | 'green' | 'blue' | 'purple'
  words: [string, string, string, string]
}

export interface ConnectionsPuzzle {
  id: string
  groups: [ConnectionsGroup, ConnectionsGroup, ConnectionsGroup, ConnectionsGroup]
}

export const connectionsPuzzles: ConnectionsPuzzle[] = [
  {
    id: 'reef-mix',
    groups: [
      {
        label: 'Things found on a reef',
        difficulty: 'yellow',
        words: ['CORAL', 'CLAM', 'KELP', 'URCHIN'],
      },
      {
        label: 'Citrus fruits',
        difficulty: 'green',
        words: ['LIME', 'LEMON', 'ORANGE', 'YUZU'],
      },
      {
        label: 'Shades of blue',
        difficulty: 'blue',
        words: ['NAVY', 'AZURE', 'COBALT', 'TEAL'],
      },
      {
        label: '___ shark',
        difficulty: 'purple',
        words: ['CARD', 'LOAN', 'TIGER', 'POOL'],
      },
    ],
  },
  {
    id: 'tools-and-noise',
    groups: [
      {
        label: 'Carpenter tools',
        difficulty: 'yellow',
        words: ['HAMMER', 'SAW', 'DRILL', 'CHISEL'],
      },
      {
        label: 'Loud sounds',
        difficulty: 'green',
        words: ['CLAP', 'BOOM', 'CRASH', 'BANG'],
      },
      {
        label: 'Currency',
        difficulty: 'blue',
        words: ['YEN', 'PESO', 'EURO', 'RAND'],
      },
      {
        label: '___ band',
        difficulty: 'purple',
        words: ['ROCK', 'RUBBER', 'WEDDING', 'BROAD'],
      },
    ],
  },
  {
    id: 'celestial-pet',
    groups: [
      {
        label: 'Planets',
        difficulty: 'yellow',
        words: ['MARS', 'VENUS', 'SATURN', 'NEPTUNE'],
      },
      {
        label: 'Small pets',
        difficulty: 'green',
        words: ['HAMSTER', 'GERBIL', 'GUPPY', 'CANARY'],
      },
      {
        label: 'Greek letters',
        difficulty: 'blue',
        words: ['ALPHA', 'DELTA', 'OMEGA', 'SIGMA'],
      },
      {
        label: 'Pen ___',
        difficulty: 'purple',
        words: ['PAL', 'CIL', 'NAME', 'GUIN'],
      },
    ],
  },
  {
    id: 'sweet-flow',
    groups: [
      {
        label: 'Pasta shapes',
        difficulty: 'yellow',
        words: ['PENNE', 'FUSILLI', 'ZITI', 'ORZO'],
      },
      {
        label: 'Synonyms for happy',
        difficulty: 'green',
        words: ['GLAD', 'JOLLY', 'MERRY', 'CHIPPER'],
      },
      {
        label: 'Bodies of water',
        difficulty: 'blue',
        words: ['LAGOON', 'BAYOU', 'FJORD', 'STRAIT'],
      },
      {
        label: 'Words after "ICE"',
        difficulty: 'purple',
        words: ['BERG', 'CREAM', 'SKATE', 'PACK'],
      },
    ],
  },
]
