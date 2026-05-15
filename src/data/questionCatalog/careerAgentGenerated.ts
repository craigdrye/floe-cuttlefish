import type { Question } from './types'
import { careerAgentGeneratedAppliedQuestionsByTrack } from './careerAgentGeneratedApplied'
import { careerAgentGeneratedCareerSkillsPolishQuestionsByTrack } from './careerAgentGeneratedCareerSkillsPolish'
import { careerAgentGeneratedClimateScienceTopOffQuestionsByTrack } from './careerAgentGeneratedClimateScienceTopOff'
import { careerAgentGeneratedCore1QuestionsByTrack } from './careerAgentGeneratedCore1'
import { careerAgentGeneratedCore2QuestionsByTrack } from './careerAgentGeneratedCore2'
import { careerAgentGeneratedCoreFinalTopOffQuestionsByTrack } from './careerAgentGeneratedCoreFinalTopOff'
import { careerAgentGeneratedCoreRoadmapPolishQuestionsByTrack } from './careerAgentGeneratedCoreRoadmapPolish'
import { careerAgentGeneratedCoreSupplementCommunicationLeadershipQuestionsByTrack } from './careerAgentGeneratedCoreSupplementCommunicationLeadership'
import { careerAgentGeneratedCoreSupplementCommunicationLeadership2QuestionsByTrack } from './careerAgentGeneratedCoreSupplementCommunicationLeadership2'
import { careerAgentGeneratedCoreSupplementDesignTechQuestionsByTrack } from './careerAgentGeneratedCoreSupplementDesignTech'
import { careerAgentGeneratedCoreSupplementDesignTech2QuestionsByTrack } from './careerAgentGeneratedCoreSupplementDesignTech2'
import { careerAgentGeneratedCoreSupplementProductProjectQuestionsByTrack } from './careerAgentGeneratedCoreSupplementProductProject'
import { careerAgentGeneratedCoreSupplementProductProject2QuestionsByTrack } from './careerAgentGeneratedCoreSupplementProductProject2'
import { careerAgentGeneratedCredentials1QuestionsByTrack } from './careerAgentGeneratedCredentials1'
import { careerAgentGeneratedCredentials2QuestionsByTrack } from './careerAgentGeneratedCredentials2'
import { careerAgentGeneratedCredentialsCompliance2QuestionsByTrack } from './careerAgentGeneratedCredentialsCompliance2'
import { careerAgentGeneratedCredentialsRiskPrivacy2QuestionsByTrack } from './careerAgentGeneratedCredentialsRiskPrivacy2'
import { careerAgentGeneratedCredentialsSeriesTopOffQuestionsByTrack } from './careerAgentGeneratedCredentialsSeriesTopOff'
import { careerAgentGeneratedCredentialsTechnical2QuestionsByTrack } from './careerAgentGeneratedCredentialsTechnical2'
import { careerAgentGeneratedHealthcareAppliedTopOffQuestionsByTrack } from './careerAgentGeneratedHealthcareAppliedTopOff'
import { careerAgentGeneratedJargonQuestionsByTrack } from './careerAgentGeneratedJargon'
import { careerAgentGeneratedJargonBillingCyberTopOffQuestionsByTrack } from './careerAgentGeneratedJargonBillingCyberTopOff'
import { careerAgentGeneratedJargonFinanceTopOffQuestionsByTrack } from './careerAgentGeneratedJargonFinanceTopOff'
import { careerAgentGeneratedJargonGovClinicalTopOffQuestionsByTrack } from './careerAgentGeneratedJargonGovClinicalTopOff'
import { careerAgentGeneratedProfessionalPracticePolishQuestionsByTrack } from './careerAgentGeneratedProfessionalPracticePolish'
import { careerAgentGeneratedLegacyFinanceOpsTopOffQuestionsByTrack } from './careerAgentGeneratedLegacyFinanceOpsTopOff'
import { careerAgentGeneratedQualificationsEthicsOpsQuestionsByTrack } from './careerAgentGeneratedQualificationsEthicsOps'
import { careerAgentGeneratedQualificationsEthicsOps2QuestionsByTrack } from './careerAgentGeneratedQualificationsEthicsOps2'
import { careerAgentGeneratedQualificationsAppliedPolishQuestionsByTrack } from './careerAgentGeneratedQualificationsAppliedPolish'
import { careerAgentGeneratedQualificationsFinanceQuestionsByTrack } from './careerAgentGeneratedQualificationsFinance'
import { careerAgentGeneratedQualificationsFinance2QuestionsByTrack } from './careerAgentGeneratedQualificationsFinance2'
import { careerAgentGeneratedQualificationsFinance3QuestionsByTrack } from './careerAgentGeneratedQualificationsFinance3'
import { careerAgentGeneratedQualificationsFinalPolishQuestionsByTrack } from './careerAgentGeneratedQualificationsFinalPolish'
import { careerAgentGeneratedQualificationsLawProjectHrQuestionsByTrack } from './careerAgentGeneratedQualificationsLawProjectHr'
import { careerAgentGeneratedQualificationsLawProjectHr2QuestionsByTrack } from './careerAgentGeneratedQualificationsLawProjectHr2'
import { careerAgentGeneratedQualificationsLawProjectHr3QuestionsByTrack } from './careerAgentGeneratedQualificationsLawProjectHr3'
import { careerAgentGeneratedQualificationsTechnicalPolishQuestionsByTrack } from './careerAgentGeneratedQualificationsTechnicalPolish'
import { careerAgentGeneratedRegulatoryMedicalTopOffQuestionsByTrack } from './careerAgentGeneratedRegulatoryMedicalTopOff'
import { careerAgentGeneratedRoadmapPracticePolishQuestionsByTrack } from './careerAgentGeneratedRoadmapPracticePolish'
import { careerAgentGeneratedRoadmapPracticePolish2QuestionsByTrack } from './careerAgentGeneratedRoadmapPracticePolish2'
import { careerAgentGeneratedRoadmapPracticePolish3QuestionsByTrack } from './careerAgentGeneratedRoadmapPracticePolish3'
import { careerAgentGeneratedRoadmapPracticePolish4QuestionsByTrack } from './careerAgentGeneratedRoadmapPracticePolish4'
import { careerAgentGeneratedRoadmapFinanceQuestionsByTrack } from './careerAgentGeneratedRoadmapFinance'
import { careerAgentGeneratedRoadmapFinanceFinalTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapFinanceFinalTopOff'
import { careerAgentGeneratedRoadmapFinanceTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapFinanceTopOff'
import { careerAgentGeneratedRoadmapGovTechFinalTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapGovTechFinalTopOff'
import { careerAgentGeneratedRoadmapGovernmentQuestionsByTrack } from './careerAgentGeneratedRoadmapGovernment'
import { careerAgentGeneratedRoadmapGovernmentTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapGovernmentTopOff'
import { careerAgentGeneratedRoadmapHealthcareQuestionsByTrack } from './careerAgentGeneratedRoadmapHealthcare'
import { careerAgentGeneratedRoadmapHealthcareFinalTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapHealthcareFinalTopOff'
import { careerAgentGeneratedRoadmapHealthcareTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapHealthcareTopOff'
import { careerAgentGeneratedRoadmapTechQuestionsByTrack } from './careerAgentGeneratedRoadmapTech'
import { careerAgentGeneratedRoadmapTechTopOffQuestionsByTrack } from './careerAgentGeneratedRoadmapTechTopOff'

export const careerAgentGeneratedQuestionsByTrack = mergeGeneratedQuestionBanks(
  careerAgentGeneratedQualificationsFinalPolishQuestionsByTrack,
  careerAgentGeneratedQualificationsTechnicalPolishQuestionsByTrack,
  careerAgentGeneratedQualificationsAppliedPolishQuestionsByTrack,
  careerAgentGeneratedProfessionalPracticePolishQuestionsByTrack,
  careerAgentGeneratedRoadmapPracticePolishQuestionsByTrack,
  careerAgentGeneratedRoadmapPracticePolish2QuestionsByTrack,
  careerAgentGeneratedRoadmapPracticePolish3QuestionsByTrack,
  careerAgentGeneratedRoadmapPracticePolish4QuestionsByTrack,
  careerAgentGeneratedCoreRoadmapPolishQuestionsByTrack,
  careerAgentGeneratedCareerSkillsPolishQuestionsByTrack,
  careerAgentGeneratedClimateScienceTopOffQuestionsByTrack,
  careerAgentGeneratedCore1QuestionsByTrack,
  careerAgentGeneratedCore2QuestionsByTrack,
  careerAgentGeneratedCoreFinalTopOffQuestionsByTrack,
  careerAgentGeneratedCoreSupplementProductProjectQuestionsByTrack,
  careerAgentGeneratedCoreSupplementProductProject2QuestionsByTrack,
  careerAgentGeneratedCoreSupplementDesignTechQuestionsByTrack,
  careerAgentGeneratedCoreSupplementDesignTech2QuestionsByTrack,
  careerAgentGeneratedCoreSupplementCommunicationLeadershipQuestionsByTrack,
  careerAgentGeneratedCoreSupplementCommunicationLeadership2QuestionsByTrack,
  careerAgentGeneratedCredentials1QuestionsByTrack,
  careerAgentGeneratedCredentials2QuestionsByTrack,
  careerAgentGeneratedCredentialsCompliance2QuestionsByTrack,
  careerAgentGeneratedCredentialsRiskPrivacy2QuestionsByTrack,
  careerAgentGeneratedCredentialsSeriesTopOffQuestionsByTrack,
  careerAgentGeneratedCredentialsTechnical2QuestionsByTrack,
  careerAgentGeneratedHealthcareAppliedTopOffQuestionsByTrack,
  careerAgentGeneratedLegacyFinanceOpsTopOffQuestionsByTrack,
  careerAgentGeneratedAppliedQuestionsByTrack,
  careerAgentGeneratedJargonQuestionsByTrack,
  careerAgentGeneratedJargonBillingCyberTopOffQuestionsByTrack,
  careerAgentGeneratedJargonFinanceTopOffQuestionsByTrack,
  careerAgentGeneratedJargonGovClinicalTopOffQuestionsByTrack,
  careerAgentGeneratedQualificationsFinanceQuestionsByTrack,
  careerAgentGeneratedQualificationsFinance2QuestionsByTrack,
  careerAgentGeneratedQualificationsFinance3QuestionsByTrack,
  careerAgentGeneratedQualificationsLawProjectHrQuestionsByTrack,
  careerAgentGeneratedQualificationsLawProjectHr2QuestionsByTrack,
  careerAgentGeneratedQualificationsLawProjectHr3QuestionsByTrack,
  careerAgentGeneratedQualificationsEthicsOpsQuestionsByTrack,
  careerAgentGeneratedQualificationsEthicsOps2QuestionsByTrack,
  careerAgentGeneratedRegulatoryMedicalTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapFinanceQuestionsByTrack,
  careerAgentGeneratedRoadmapFinanceFinalTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapFinanceTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapGovTechFinalTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapGovernmentQuestionsByTrack,
  careerAgentGeneratedRoadmapGovernmentTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapHealthcareQuestionsByTrack,
  careerAgentGeneratedRoadmapHealthcareFinalTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapHealthcareTopOffQuestionsByTrack,
  careerAgentGeneratedRoadmapTechQuestionsByTrack,
  careerAgentGeneratedRoadmapTechTopOffQuestionsByTrack,
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
