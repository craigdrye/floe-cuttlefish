// Wordle solution sub-pools keyed by user interest (selected on AudienceSelectScreen).
// All entries: lowercase, exactly 5 letters, common English noun/adjective/verb.
// Words appear here in addition to the general pool — when a user has interests
// selected, the picker weights solutions toward matching sub-pools.
//
// Coverage is intentionally light at launch; expand as players engage with each interest.

import type { CourseTopicId } from '../lib/coursePersonalization'

export const wordleInterestWords: Partial<Record<CourseTopicId, string[]>> = {
  maths: [
    'prime', 'cubed', 'angle', 'curve', 'sigma', 'theta', 'ratio',
    'slope', 'locus', 'plane', 'solid', 'proof', 'lemma', 'gamma',
    'alpha', 'axiom', 'gauss', 'delta', 'roots', 'sigma',
  ],
  science: [
    'atoms', 'cells', 'force', 'orbit', 'fluid', 'plant', 'virus',
    'ozone', 'larva', 'plate', 'basin', 'helix', 'quark', 'lipid',
    'magma', 'spore', 'ovary', 'fauna', 'flora', 'fault',
  ],
  philosophy: [
    'logic', 'ethic', 'truth', 'cause', 'proof', 'doubt', 'sense',
    'being', 'value', 'telos', 'dogma', 'irony', 'maxim', 'realm',
    'mind', 'doubt', 'moral', 'noble', 'right', 'wrong',
  ],
  humanities: [
    'novel', 'prose', 'drama', 'story', 'lyric', 'opera', 'scene',
    'motif', 'verse', 'rhyme', 'theme', 'genre', 'image', 'voice',
    'style', 'comma', 'plain', 'short', 'first', 'world',
  ],
  'politics-civics': [
    'voter', 'party', 'polls', 'court', 'judge', 'mayor', 'civic',
    'civil', 'taxes', 'draft', 'lobby', 'swing', 'motion', 'state',
    'rally', 'union', 'right', 'crown', 'cabin', 'reign',
  ],
  'practical-skills': [
    'drill', 'screw', 'paint', 'frame', 'brick', 'plant', 'gauge',
    'level', 'mount', 'patch', 'caulk', 'sheet', 'plumb', 'wedge',
    'pivot', 'crimp', 'shelf', 'crank', 'spool', 'guide',
  ],
  'arts-music': [
    'piano', 'music', 'chord', 'scale', 'tempo', 'viola', 'opera',
    'brass', 'drums', 'flute', 'organ', 'vocal', 'choir', 'sheet',
    'rondo', 'allegro', 'forte', 'paint', 'brush', 'canvas',
  ].filter((w) => w.length === 5),
  'geography-history': [
    'river', 'ocean', 'basin', 'plain', 'ridge', 'marsh', 'fjord',
    'delta', 'swamp', 'atlas', 'polar', 'royal', 'siege', 'manor',
    'ruler', 'crown', 'sword', 'forge', 'realm', 'cliff',
  ],
  'digital-culture': [
    'pixel', 'cyber', 'modem', 'troll', 'viral', 'login', 'click',
    'hover', 'swipe', 'cache', 'proxy', 'batch', 'queue', 'route',
    'patch', 'merge', 'forge', 'logic', 'frame', 'array',
  ],
  'business-finance': [
    'stock', 'bonds', 'asset', 'taxes', 'audit', 'value', 'trade',
    'agent', 'money', 'owner', 'debit', 'bonus', 'costs', 'sales',
    'price', 'buyer', 'seven', 'yield', 'index', 'spend',
  ],
}

/** Get all words tagged to at least one of the given interest IDs. Deduplicated. */
export function wordsForInterests(interestIds: ReadonlyArray<CourseTopicId>): string[] {
  if (interestIds.length === 0) return []
  const pool = new Set<string>()
  for (const id of interestIds) {
    const words = wordleInterestWords[id]
    if (!words) continue
    for (const w of words) {
      // Defensive guard — only 5-letter lowercase entries
      if (w.length === 5 && /^[a-z]+$/.test(w)) pool.add(w)
    }
  }
  return Array.from(pool)
}
