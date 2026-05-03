import type { Question } from './types'
import { careerAgentGeneratedAppliedQuestionsByTrack } from './careerAgentGeneratedApplied'
import { careerAgentGeneratedCore1QuestionsByTrack } from './careerAgentGeneratedCore1'
import { careerAgentGeneratedCore2QuestionsByTrack } from './careerAgentGeneratedCore2'
import { careerAgentGeneratedCredentials1QuestionsByTrack } from './careerAgentGeneratedCredentials1'
import { careerAgentGeneratedCredentials2QuestionsByTrack } from './careerAgentGeneratedCredentials2'
import { careerAgentGeneratedJargonQuestionsByTrack } from './careerAgentGeneratedJargon'

export const careerAgentGeneratedQuestionsByTrack: Record<string, Question[]> = {
  ...careerAgentGeneratedCore1QuestionsByTrack,
  ...careerAgentGeneratedCore2QuestionsByTrack,
  ...careerAgentGeneratedCredentials1QuestionsByTrack,
  ...careerAgentGeneratedCredentials2QuestionsByTrack,
  ...careerAgentGeneratedAppliedQuestionsByTrack,
  ...careerAgentGeneratedJargonQuestionsByTrack,
}

export function topUpCareerAgentGeneratedCatalog(
  catalog: Record<string, Question[]>,
  minimum = 50,
): Record<string, Question[]> {
  const toppedUp: Record<string, Question[]> = { ...catalog }

  for (const [trackId, generated] of Object.entries(careerAgentGeneratedQuestionsByTrack)) {
    const existing = toppedUp[trackId] ?? []
    if (existing.length >= minimum || generated.length === 0) {
      toppedUp[trackId] = existing
      continue
    }

    const existingIds = new Set(existing.map((question) => question.id))
    const existingPrompts = new Set(existing.map(promptKey))
    const additions: Question[] = []

    for (const question of generated) {
      const key = promptKey(question)
      if (existingIds.has(question.id) || existingPrompts.has(key)) continue
      existingIds.add(question.id)
      existingPrompts.add(key)
      additions.push(question)
      if (existing.length + additions.length >= minimum) break
    }

    toppedUp[trackId] = [...existing, ...additions]
  }

  return toppedUp
}

function promptKey(question: Question) {
  return question.prompt
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
