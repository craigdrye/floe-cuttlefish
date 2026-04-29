import type { PetItem } from '../store/useStore'

export const petShopItems: Array<Omit<PetItem, 'ownedAt'>> = [
  { id: 'kelp-crown', name: 'Kelp Crown', slot: 'hat', icon: '👑', cost: 2, xpBonus: 12 },
  { id: 'bubble-scarf', name: 'Bubble Scarf', slot: 'glow', icon: '🫧', cost: 3, xpBonus: 18 },
  { id: 'tiny-lantern', name: 'Tiny Lantern', slot: 'buddy', icon: '🏮', cost: 5, xpBonus: 28 },
  { id: 'star-goggles', name: 'Star Goggles', slot: 'hat', icon: '🥽', cost: 7, xpBonus: 44 },
  { id: 'moon-boots', name: 'Moon Boots', slot: 'dance', icon: '🛼', cost: 10, xpBonus: 70 },
  { id: 'nebula-cape', name: 'Nebula Cape', slot: 'glow', icon: '🌈', cost: 14, xpBonus: 120 },
]

export const homePhases = [
  {
    id: 'shell-nook',
    minXp: 0,
    title: 'Shell Nook',
    icon: '🐚',
    description: 'A soft place for Floe to nap between hard questions.',
  },
  {
    id: 'reef-loft',
    minXp: 80,
    title: 'Reef Loft',
    icon: '🪸',
    description: 'Coral shelves, glow moss, and a tiny planning desk.',
  },
  {
    id: 'crystal-dome',
    minXp: 180,
    title: 'Crystal Dome',
    icon: '🔮',
    description: 'A luminous study dome where solved courses become constellations.',
  },
  {
    id: 'rocket-grotto',
    minXp: 340,
    title: 'Rocket Grotto',
    icon: '🚀',
    description: 'The underwater home now has a questionable but beautiful launchpad.',
  },
  {
    id: 'starship-floe',
    minXp: 560,
    title: 'Starship Floe',
    icon: '🛸',
    description: 'Floe has built a ship from shells, math, and stubbornness.',
  },
  {
    id: 'nebula-party',
    minXp: 820,
    title: 'Technicolor Rainbow Nebula',
    icon: '🌈',
    description: 'The credits roll at a dance party with space cats and space dogfish. Courses continue forever.',
  },
]

export function getHomePhase(xp: number) {
  return [...homePhases].reverse().find((phase) => xp >= phase.minXp) ?? homePhases[0]
}

export function getNextHomePhase(xp: number) {
  return homePhases.find((phase) => phase.minXp > xp) ?? null
}

export function bossRewardFor(stage: number, streak: number) {
  return 30 + stage * 12 + Math.min(30, streak * 3)
}

export function bossTitleFor(trackTitle: string, stage: number) {
  const names = ['Doubt Eel', 'Scope Creep Kraken', 'Fog-of-War Manta', 'Final Deadline Leviathan']
  return `${names[Math.min(stage - 1, names.length - 1)]} of ${trackTitle}`
}
