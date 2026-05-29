import type { Question } from './types'
import { careerAgentGeneratedAppliedQuestionsByTrack } from './careerAgentGeneratedApplied'
import { careerAgentGeneratedCore1QuestionsByTrack } from './careerAgentGeneratedCore1'
import { careerAgentGeneratedCredentials1QuestionsByTrack } from './careerAgentGeneratedCredentials1'
import { careerAgentGeneratedLegacyFinanceOpsTopOffQuestionsByTrack } from './careerAgentGeneratedLegacyFinanceOpsTopOff'
import { careerAgentGeneratedQualificationsEthicsOpsQuestionsByTrack } from './careerAgentGeneratedQualificationsEthicsOps'
import { careerAgentGeneratedQualificationsFinanceQuestionsByTrack } from './careerAgentGeneratedQualificationsFinance'
import { careerAgentGeneratedQualificationsLawProjectHrQuestionsByTrack } from './careerAgentGeneratedQualificationsLawProjectHr'
import { careerAgentGeneratedRegulatoryMedicalTopOffQuestionsByTrack } from './careerAgentGeneratedRegulatoryMedicalTopOff'
import { careerAgentGeneratedRoadmapFinanceQuestionsByTrack } from './careerAgentGeneratedRoadmapFinance'
import { careerAgentGeneratedRoadmapGovernmentQuestionsByTrack } from './careerAgentGeneratedRoadmapGovernment'
import { careerAgentGeneratedRoadmapHealthcareQuestionsByTrack } from './careerAgentGeneratedRoadmapHealthcare'
import { careerAgentGeneratedRoadmapTechQuestionsByTrack } from './careerAgentGeneratedRoadmapTech'
import { careerAgentGeneratedCredentialBalanceTopOffQuestionsByTrack } from './careerAgentGeneratedCredentialBalanceTopOff'
import { careerAgentGeneratedCredentialExpansionFinanceQuestionsByTrack } from './careerAgentGeneratedCredentialExpansionFinance'
import { careerAgentGeneratedCredentialExpansionProfessionalQuestionsByTrack } from './careerAgentGeneratedCredentialExpansionProfessional'
import { careerAgentGeneratedCredentialExpansionComplianceQuestionsByTrack } from './careerAgentGeneratedCredentialExpansionCompliance'
import { careerAgentGeneratedCredentialExpansionGovIndustrialQuestionsByTrack } from './careerAgentGeneratedCredentialExpansionGovIndustrial'
import { careerAgentGeneratedCredentialExpansionHealthcareQuestionsByTrack } from './careerAgentGeneratedCredentialExpansionHealthcare'
import { careerAgentGeneratedCredentialExpansionQuestionsByTrack } from './careerAgentGeneratedCredentialExpansion'
import { normalizeCareerCredentialChapters } from './careerCredentialChapterNormalization'

export const careerAgentGeneratedQuestionsByTrack = mergeGeneratedQuestionBanks(
  careerAgentGeneratedCredentialBalanceTopOffQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionFinanceQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionProfessionalQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionComplianceQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionGovIndustrialQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionHealthcareQuestionsByTrack,
  careerAgentGeneratedCore1QuestionsByTrack,
  careerAgentGeneratedCredentials1QuestionsByTrack,
  careerAgentGeneratedLegacyFinanceOpsTopOffQuestionsByTrack,
  careerAgentGeneratedAppliedQuestionsByTrack,
  careerAgentGeneratedQualificationsFinanceQuestionsByTrack,
  careerAgentGeneratedQualificationsLawProjectHrQuestionsByTrack,
  careerAgentGeneratedQualificationsEthicsOpsQuestionsByTrack,
  careerAgentGeneratedRegulatoryMedicalTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapFinanceQuestionsByTrack,
  careerAgentGeneratedRoadmapGovernmentQuestionsByTrack,
  careerAgentGeneratedRoadmapHealthcareQuestionsByTrack,
  careerAgentGeneratedRoadmapTechQuestionsByTrack,
  careerAgentGeneratedCredentialExpansionQuestionsByTrack,
)

function mergeGeneratedQuestionBanks(
  ...banks: Array<Record<string, Question[]>>
): Record<string, Question[]> {
  const merged: Record<string, Question[]> = {}

  for (const bank of banks) {
    for (const [trackId, questions] of Object.entries(bank)) {
      merged[trackId] = [...(merged[trackId] ?? []), ...questions]
    }
  }

  return merged
}

export function topUpCareerAgentGeneratedCatalog(
  catalog: Record<string, Question[]>,
  minimum = 200,
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

  return normalizeCareerCredentialChapters(toppedUp)
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
