// Aggregator for career-course question top-ups (2026-05 quality pass).
// Each course was short of 50 questions; these AI-generated (generated:true) banks
// fill the gap. career.ts appends these to the matching track arrays.
import type { Question } from './types'
import { mlTopUpQuestions } from './mlTopUp'
import { uxResearchTopUpQuestions } from './uxResearchTopUp'
import { enterpriseSaaSRoadmapTopUpQuestions } from './enterpriseSaaSRoadmapTopUp'
import { softwareEngineeringRoadmapTopUpQuestions } from './softwareEngineeringRoadmapTopUp'
import { nationalSecurityPolicyRoadmapTopUpQuestions } from './nationalSecurityPolicyRoadmapTopUp'
import { clinicalResearchJargonTopUpQuestions } from './clinicalResearchJargonTopUp'
import { cybersecOpsJargonTopUpQuestions } from './cybersecOpsJargonTopUp'
import { defenseBudgetingJargonTopUpQuestions } from './defenseBudgetingJargonTopUp'
import { ibJargonTopUpQuestions } from './ibJargonTopUp'
import { medicalBillingJargonTopUpQuestions } from './medicalBillingJargonTopUp'
import { vcJargonTopUpQuestions } from './vcJargonTopUp'
import { cloudInfrastructureRoadmapTopUpQuestions } from './cloudInfrastructureRoadmapTopUp'
import { cybersecurityOperationsRoadmapTopUpQuestions } from './cybersecurityOperationsRoadmapTopUp'
import { consultingCasesTopUpQuestions } from './consultingCasesTopUp'
import { cybersecurityTopUpQuestions } from './cybersecurityTopUp'
import { financialModelingTopUpQuestions } from './financialModelingTopUp'
import { negotiationTopUpQuestions } from './negotiationTopUp'
import { peopleManagementTopUpQuestions } from './peopleManagementTopUp'
import { physicianPracticeRoadmapTopUpQuestions } from './physicianPracticeRoadmapTopUp'
import { productManagementTopUpQuestions } from './productManagementTopUp'
import { projectManagementTopUpQuestions } from './projectManagementTopUp'
import { publicSpeakingTopUpQuestions } from './publicSpeakingTopUp'
import { salesFundamentalsTopUpQuestions } from './salesFundamentalsTopUp'
import { uxDesignTopUpQuestions } from './uxDesignTopUp'
import { medicalBillingRoadmapTopUpQuestions } from './medicalBillingRoadmapTopUp'
import { nursingFloorOpsRoadmapTopUpQuestions } from './nursingFloorOpsRoadmapTopUp'
import { hospitalAdministrationRoadmapTopUpQuestions } from './hospitalAdministrationRoadmapTopUp'
import { professionalEthicsTopUpQuestions } from './professionalEthicsTopUp'
import { investingBasicsTopUpQuestions } from './investingBasicsTopUp'

export const CAREER_TOPUPS: Record<string, Question[]> = {
  ml: mlTopUpQuestions,
  uxResearch: uxResearchTopUpQuestions,
  enterpriseSaaSRoadmap: enterpriseSaaSRoadmapTopUpQuestions,
  softwareEngineeringRoadmap: softwareEngineeringRoadmapTopUpQuestions,
  nationalSecurityPolicyRoadmap: nationalSecurityPolicyRoadmapTopUpQuestions,
  clinicalResearchJargon: clinicalResearchJargonTopUpQuestions,
  cybersecOpsJargon: cybersecOpsJargonTopUpQuestions,
  defenseBudgetingJargon: defenseBudgetingJargonTopUpQuestions,
  ibJargon: ibJargonTopUpQuestions,
  medicalBillingJargon: medicalBillingJargonTopUpQuestions,
  vcJargon: vcJargonTopUpQuestions,
  cloudInfrastructureRoadmap: cloudInfrastructureRoadmapTopUpQuestions,
  cybersecurityOperationsRoadmap: cybersecurityOperationsRoadmapTopUpQuestions,
  consultingCases: consultingCasesTopUpQuestions,
  cybersecurity: cybersecurityTopUpQuestions,
  financialModeling: financialModelingTopUpQuestions,
  negotiation: negotiationTopUpQuestions,
  peopleManagement: peopleManagementTopUpQuestions,
  physicianPracticeRoadmap: physicianPracticeRoadmapTopUpQuestions,
  productManagement: productManagementTopUpQuestions,
  projectManagement: projectManagementTopUpQuestions,
  publicSpeaking: publicSpeakingTopUpQuestions,
  salesFundamentals: salesFundamentalsTopUpQuestions,
  uxDesign: uxDesignTopUpQuestions,
  medicalBillingRoadmap: medicalBillingRoadmapTopUpQuestions,
  nursingFloorOpsRoadmap: nursingFloorOpsRoadmapTopUpQuestions,
  hospitalAdministrationRoadmap: hospitalAdministrationRoadmapTopUpQuestions,
  professionalEthics: professionalEthicsTopUpQuestions,
  investingBasics: investingBasicsTopUpQuestions,
}
