import type { ReactNode } from 'react'
import { khanTrackGroups } from '../data/ageCatalog'
import type { AgeGroup, IconKey, TrackSeed } from '../data/ageCatalog'

export type Track = {
  id: string
  title: string
  subtitle: string
  status: 'playable' | 'soon'
  accent: string
  discipline: string
  ageGroup: AgeGroup
  icon: ReactNode
  skills: string[]
}

export function slugifyTrackId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function subtitleForKhanTrack(title: string) {
  const lower = title.toLowerCase()

  if (lower.includes('illustrative mathematics')) {
    return 'Ratios, equations, geometry, and middle-school problem solving.'
  }
  if (lower.includes('eureka math foundations')) {
    return 'Core arithmetic, fractions, place value, and clean problem-solving habits.'
  }
  if (lower.includes('eureka math 3rd') || lower.includes('eureka math 3rd – 8th') || lower.includes('eureka math 3rd-8th')) {
    return 'A broad mix of school-math fluency, word problems, and number sense.'
  }
  if (lower.includes('eureka math algebra i')) {
    return 'Expressions, equations, linear graphs, and algebra foundations.'
  }
  if (lower.includes('eureka math geometry')) {
    return 'Angles, triangles, circles, proofs, and visual reasoning.'
  }
  if (lower.includes('eureka math algebra ii')) {
    return 'Functions, quadratics, exponents, logs, and algebraic modeling.'
  }
  if (lower.includes('eureka math precalculus')) {
    return 'Advanced functions, trig, sequences, and pre-calculus fluency.'
  }
  if (lower.includes('world history project - origins')) {
    return 'Civilizations, trade, empires, belief systems, and long-run change.'
  }
  if (lower.includes('world history project - 1750')) {
    return 'Industrialization, empire, war, decolonization, and the modern world.'
  }
  if (lower.includes('high school biology - ngss')) {
    return 'Cells, ecosystems, genetics, evolution, and evidence-based biology.'
  }
  if (lower.includes('high school physics - ngss')) {
    return 'Forces, motion, energy, waves, circuits, and physical systems.'
  }
  if (/class\s+[1-6]\s+math/.test(lower)) {
    return 'School-math foundations with steady number sense and step-by-step confidence.'
  }
  if (/class\s+(7|8|9|10)\s+math/.test(lower)) {
    return 'School-math practice across algebra, geometry, and exam-style reasoning.'
  }
  if (/class\s+(11|12)\s+math/.test(lower)) {
    return 'Advanced school mathematics with functions, calculus, probability, and rigor.'
  }
  if (lower.includes('algebra')) {
    return 'Expressions, equations, graphs, and algebraic reasoning.'
  }
  if (lower.includes('geometry')) {
    return 'Shapes, angles, proofs, coordinates, and spatial reasoning.'
  }
  if (lower.includes('trigonometry')) {
    return 'Angles, ratios, identities, and triangle-based reasoning.'
  }
  if (lower.includes('statistics')) {
    return 'Data, distributions, inference, and reading numerical evidence clearly.'
  }
  if (lower.includes('precalculus')) {
    return 'Functions, trig, sequences, and the bridge into calculus.'
  }
  if (lower.includes('calculus')) {
    return 'Limits, derivatives, integrals, and curve-based reasoning.'
  }
  if (lower.includes('biology')) {
    return 'Cells, systems, inheritance, and how living things actually work.'
  }
  if (lower.includes('chemistry')) {
    return 'Particles, reactions, bonding, stoichiometry, and chemical patterns.'
  }
  if (lower.includes('physics')) {
    return 'Motion, forces, energy, and getting the units right.'
  }
  if (lower.includes('history')) {
    return 'Causes, consequences, context, and reading the past without bluffing.'
  }
  if (lower.includes('government') || lower.includes('civics') || lower.includes('constitution')) {
    return 'Institutions, rights, power, and how public systems actually work.'
  }
  if (lower.includes('economics') || lower.includes('finance')) {
    return 'Incentives, markets, tradeoffs, and the math hiding behind money.'
  }
  if (lower.includes('computer') || lower.includes('coding') || lower.includes('python') || lower.includes('internet')) {
    return 'Programming, logic, systems, and computational thinking without the fluff.'
  }
  if (lower.includes('reading') || lower.includes('grammar') || lower.includes('ela')) {
    return 'Reading, vocabulary, grammar, and making sense of what the text is doing.'
  }
  if (lower.includes('sat') || lower.includes('lsat') || lower.includes('mcat')) {
    return 'Timed prep, pattern recognition, and cleaner exam decisions under pressure.'
  }
  if (lower.includes('khan kids') || lower.includes('early math')) {
    return 'Foundational practice for early learners, built around simple wins and repetition.'
  }

  return `Quiz pack for ${title.toLowerCase()}.`
}

export function buildKhanStyleTracks(iconForKey: Record<IconKey, ReactNode>): Track[] {
  const seen = new Set<string>()
  const tracksFromGroups: Track[] = []

  for (const group of khanTrackGroups) {
    for (const title of group.titles) {
      const key = title.trim().toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)

      tracksFromGroups.push({
        id: `khan-${slugifyTrackId(title)}`,
        title,
        subtitle: subtitleForKhanTrack(title),
        status: 'playable',
        accent: group.accent,
        discipline: group.discipline,
        ageGroup: group.ageGroup,
        icon: iconForKey[group.icon],
        skills: group.skills,
      })
    }
  }

  return tracksFromGroups
}

export function materializeTrack(seed: TrackSeed, iconForKey: Record<IconKey, ReactNode>): Track {
  return {
    ...seed,
    icon: iconForKey[seed.icon],
  }
}
