import type { Question } from './types'
import { aigpGems } from './generated23/aigpGems'
import { aigpS0G23 } from './generated23/aigpS0G23'
import { amlComplianceGems } from './generated23/amlComplianceGems'
import { amlComplianceS0G23 } from './generated23/amlComplianceS0G23'
import { apiInspectorsGems } from './generated23/apiInspectorsGems'
import { apiInspectorsS0G23 } from './generated23/apiInspectorsS0G23'
import { astrophysicsIntroGems } from './generated23/astrophysicsIntroGems'
import { astrophysicsIntroS0G23 } from './generated23/astrophysicsIntroS0G23'
import { asvabPrepGems } from './generated23/asvabPrepGems'
import { asvabPrepS0G23 } from './generated23/asvabPrepS0G23'
import { autoMechanicsGems } from './generated23/autoMechanicsGems'
import { autoMechanicsS0G23 } from './generated23/autoMechanicsS0G23'
import { bankComplianceAmlRoadmapGems } from './generated23/bankComplianceAmlRoadmapGems'
import { bankComplianceAmlRoadmapS0G23 } from './generated23/bankComplianceAmlRoadmapS0G23'
import { barExamGems } from './generated23/barExamGems'
import { barExamS0G23 } from './generated23/barExamS0G23'
import { brainBurnersGems } from './generated23/brainBurnersGems'
import { brainBurnersS0G23 } from './generated23/brainBurnersS0G23'
import { caiaGems } from './generated23/caiaGems'
import { caiaS0G23 } from './generated23/caiaS0G23'
import { camsAGenerated23 } from './generated23/camsAGenerated23'
import { camsBGenerated23 } from './generated23/camsBGenerated23'
import { camsCGenerated23 } from './generated23/camsCGenerated23'
import { camsGems } from './generated23/camsGems'
import { careerLsatGems } from './generated23/careerLsatGems'
import { careerLsatS0G23 } from './generated23/careerLsatS0G23'
import { careerLsatS1G23 } from './generated23/careerLsatS1G23'
import { careerLsatS2G23 } from './generated23/careerLsatS2G23'
import { careerMcatGems } from './generated23/careerMcatGems'
import { careerMcatS0G23 } from './generated23/careerMcatS0G23'
import { ccepGems } from './generated23/ccepGems'
import { ccepS0G23 } from './generated23/ccepS0G23'
import { cdfmGems } from './generated23/cdfmGems'
import { cdfmS0G23 } from './generated23/cdfmS0G23'
import { certifiedGeneralAppraiserGems } from './generated23/certifiedGeneralAppraiserGems'
import { certifiedGeneralAppraiserS0G23 } from './generated23/certifiedGeneralAppraiserS0G23'
import { cfaLevelOneGems } from './generated23/cfaLevelOneGems'
import { cfaLevelThreeGems } from './generated23/cfaLevelThreeGems'
import { cfaLevelThreeS0G23 } from './generated23/cfaLevelThreeS0G23'
import { cfaLevelTwoGems } from './generated23/cfaLevelTwoGems'
import { cfaLevelTwoS0G23 } from './generated23/cfaLevelTwoS0G23'
import { cfeGems } from './generated23/cfeGems'
import { cfeGenerated23 } from './generated23/cfeGenerated23'
import { cfpGems } from './generated23/cfpGems'
import { cfpGenerated23 } from './generated23/cfpGenerated23'
import { cippEAGenerated23 } from './generated23/cippEAGenerated23'
import { cippEBGenerated23 } from './generated23/cippEBGenerated23'
import { cippECGenerated23 } from './generated23/cippECGenerated23'
import { cippEGems } from './generated23/cippEGems'
import { clinicalResearchJargonGems } from './generated23/clinicalResearchJargonGems'
import { clinicalResearchRoadmapGems } from './generated23/clinicalResearchRoadmapGems'
import { cloudInfrastructureRoadmapGems } from './generated23/cloudInfrastructureRoadmapGems'
import { consultingCasesGems } from './generated23/consultingCasesGems'
import { consultingCasesGenerated23 } from './generated23/consultingCasesGenerated23'
import { cpaExamGems } from './generated23/cpaExamGems'
import { cpaExamS0G23 } from './generated23/cpaExamS0G23'
import { crcmGems } from './generated23/crcmGems'
import { crcmS0G23 } from './generated23/crcmS0G23'
import { creditLevFinRoadmapGems } from './generated23/creditLevFinRoadmapGems'
import { criticalThinkingGems } from './generated23/criticalThinkingGems'
import { customsBrokerGems } from './generated23/customsBrokerGems'
import { customsBrokerS0G23 } from './generated23/customsBrokerS0G23'
import { cybersecOpsJargonGems } from './generated23/cybersecOpsJargonGems'
import { cybersecurityGems } from './generated23/cybersecurityGems'
import { cybersecurityOperationsRoadmapGems } from './generated23/cybersecurityOperationsRoadmapGems'
import { cybersecurityOperationsRoadmapS0G23 } from './generated23/cybersecurityOperationsRoadmapS0G23'
import { cybersecurityS0G23 } from './generated23/cybersecurityS0G23'
import { defenseBudgetingJargonGems } from './generated23/defenseBudgetingJargonGems'
import { defenseBudgetingRoadmapGems } from './generated23/defenseBudgetingRoadmapGems'
import { enterpriseSaaSRoadmapGems } from './generated23/enterpriseSaaSRoadmapGems'
import { enterpriseSaaSRoadmapS0G23 } from './generated23/enterpriseSaaSRoadmapS0G23'
import { equityResearchRoadmapGems } from './generated23/equityResearchRoadmapGems'
import { equityResearchRoadmapS0G23 } from './generated23/equityResearchRoadmapS0G23'
import { financialModelingGems } from './generated23/financialModelingGems'
import { financialModelingS0G23 } from './generated23/financialModelingS0G23'
import { frmGems } from './generated23/frmGems'
import { frmS0G23 } from './generated23/frmS0G23'
import { healthInsurancePayersRoadmapGems } from './generated23/healthInsurancePayersRoadmapGems'
import { healthcareComplianceRoadmapGems } from './generated23/healthcareComplianceRoadmapGems'
import { healthcareComplianceRoadmapS0G23 } from './generated23/healthcareComplianceRoadmapS0G23'
import { hedgeFundsRoadmapGems } from './generated23/hedgeFundsRoadmapGems'
import { homeElectricalGems } from './generated23/homeElectricalGems'
import { homeElectricalS0G23 } from './generated23/homeElectricalS0G23'
import { hospitalAdministrationRoadmapGems } from './generated23/hospitalAdministrationRoadmapGems'
import { hospitalAdministrationRoadmapS0G23 } from './generated23/hospitalAdministrationRoadmapS0G23'
import { howLawsAreMadeGems } from './generated23/howLawsAreMadeGems'
import { howLawsAreMadeS0G23 } from './generated23/howLawsAreMadeS0G23'
import { hvacBasicsGems } from './generated23/hvacBasicsGems'
import { hvacBasicsS0G23 } from './generated23/hvacBasicsS0G23'
import { ibJargonGems } from './generated23/ibJargonGems'
import { investingBasicsGems } from './generated23/investingBasicsGems'
import { investmentBankingRoadmapGems } from './generated23/investmentBankingRoadmapGems'
import { investmentBankingRoadmapS0G23 } from './generated23/investmentBankingRoadmapS0G23'
import { mbeGems } from './generated23/mbeGems'
import { mbeS0G23 } from './generated23/mbeS0G23'
import { medicalBillingJargonGems } from './generated23/medicalBillingJargonGems'
import { medicalBillingRoadmapGems } from './generated23/medicalBillingRoadmapGems'
import { medicalBillingRoadmapS0G23 } from './generated23/medicalBillingRoadmapS0G23'
import { medicalCodingRoadmapGems } from './generated23/medicalCodingRoadmapGems'
import { medicalGems } from './generated23/medicalGems'
import { medicalGenerated23 } from './generated23/medicalGenerated23'
import { mlGems } from './generated23/mlGems'
import { mlS0G23 } from './generated23/mlS0G23'
import { mpreGems } from './generated23/mpreGems'
import { mpreGenerated23 } from './generated23/mpreGenerated23'
import { nalaCpGems } from './generated23/nalaCpGems'
import { nalaCpGenerated23 } from './generated23/nalaCpGenerated23'
import { nationalSecurityPolicyRoadmapGems } from './generated23/nationalSecurityPolicyRoadmapGems'
import { nationalSecurityPolicyRoadmapS0G23 } from './generated23/nationalSecurityPolicyRoadmapS0G23'
import { nclexPnGems } from './generated23/nclexPnGems'
import { nclexPnS0G23 } from './generated23/nclexPnS0G23'
import { nclexRnGems } from './generated23/nclexRnGems'
import { nclexRnGenerated23 } from './generated23/nclexRnGenerated23'
import { negotiationGems } from './generated23/negotiationGems'
import { negotiationS0G23 } from './generated23/negotiationS0G23'
import { nercGems } from './generated23/nercGems'
import { nercS0G23 } from './generated23/nercS0G23'
import { nursingFloorOpsRoadmapGems } from './generated23/nursingFloorOpsRoadmapGems'
import { nursingFloorOpsRoadmapS0G23 } from './generated23/nursingFloorOpsRoadmapS0G23'
import { panceGems } from './generated23/panceGems'
import { panceGenerated23 } from './generated23/panceGenerated23'
import { patentBarGems } from './generated23/patentBarGems'
import { peopleManagementGems } from './generated23/peopleManagementGems'
import { peopleManagementGenerated23 } from './generated23/peopleManagementGenerated23'
import { personalFinanceGems } from './generated23/personalFinanceGems'
import { personalFinanceS0G23 } from './generated23/personalFinanceS0G23'
import { pharmaDrugSafetyRoadmapGems } from './generated23/pharmaDrugSafetyRoadmapGems'
import { philosophyIntroGems } from './generated23/philosophyIntroGems'
import { physicianPracticeRoadmapGems } from './generated23/physicianPracticeRoadmapGems'
import { physicianPracticeRoadmapS0G23 } from './generated23/physicianPracticeRoadmapS0G23'
import { plumbingBasicsGems } from './generated23/plumbingBasicsGems'
import { pmpWranglerGems } from './generated23/pmpWranglerGems'
import { pmpWranglerS0G23 } from './generated23/pmpWranglerS0G23'
import { pregnancyBasicsGems } from './generated23/pregnancyBasicsGems'
import { privateEquityRoadmapGems } from './generated23/privateEquityRoadmapGems'
import { privateEquityRoadmapS0G23 } from './generated23/privateEquityRoadmapS0G23'
import { procurementContractingRoadmapGems } from './generated23/procurementContractingRoadmapGems'
import { productManagementGems } from './generated23/productManagementGems'
import { productManagementS0G23 } from './generated23/productManagementS0G23'
import { professionalEthicsGems } from './generated23/professionalEthicsGems'
import { professionalEthicsGenerated23 } from './generated23/professionalEthicsGenerated23'
import { projectManagementGems } from './generated23/projectManagementGems'
import { projectManagementS0G23 } from './generated23/projectManagementS0G23'
import { psychology101Gems } from './generated23/psychology101Gems'
import { publicAffairsGems } from './generated23/publicAffairsGems'
import { publicAffairsS0G23 } from './generated23/publicAffairsS0G23'
import { publicAffairsS1G23 } from './generated23/publicAffairsS1G23'
import { publicAffairsS2G23 } from './generated23/publicAffairsS2G23'
import { publicSpeakingGems } from './generated23/publicSpeakingGems'
import { publicSpeakingS0G23 } from './generated23/publicSpeakingS0G23'
import { quantAdvancedGems } from './generated23/quantAdvancedGems'
import { quantAdvancedS0G23 } from './generated23/quantAdvancedS0G23'
import { quantGems } from './generated23/quantGems'
import { quantS0G23 } from './generated23/quantS0G23'
import { regulatoryAffairsRoadmapGems } from './generated23/regulatoryAffairsRoadmapGems'
import { salesFundamentalsGems } from './generated23/salesFundamentalsGems'
import { salesFundamentalsGenerated23 } from './generated23/salesFundamentalsGenerated23'
import { salesTradingRoadmapGems } from './generated23/salesTradingRoadmapGems'
import { salesTradingRoadmapS0G23 } from './generated23/salesTradingRoadmapS0G23'
import { series63Gems } from './generated23/series63Gems'
import { series79Gems } from './generated23/series79Gems'
import { series79S0G23 } from './generated23/series79S0G23'
import { series7Gems } from './generated23/series7Gems'
import { series7S0G23 } from './generated23/series7S0G23'
import { series86Gems } from './generated23/series86Gems'
import { series86S0G23 } from './generated23/series86S0G23'
import { series87Gems } from './generated23/series87Gems'
import { series87S0G23 } from './generated23/series87S0G23'
import { shrmPeopleGems } from './generated23/shrmPeopleGems'
import { sieGems } from './generated23/sieGems'
import { sieS0G23 } from './generated23/sieS0G23'
import { softwareEngineeringRoadmapGems } from './generated23/softwareEngineeringRoadmapGems'
import { softwareGems } from './generated23/softwareGems'
import { softwareS0G23 } from './generated23/softwareS0G23'
import { softwareS1G23 } from './generated23/softwareS1G23'
import { sqe1Gems } from './generated23/sqe1Gems'
import { sqe1S0G23 } from './generated23/sqe1S0G23'
import { sqe2Gems } from './generated23/sqe2Gems'
import { sqe2S0G23 } from './generated23/sqe2S0G23'
import { statisticsIntroGems } from './generated23/statisticsIntroGems'
import { statisticsIntroS0G23 } from './generated23/statisticsIntroS0G23'
import { supplyChainGems } from './generated23/supplyChainGems'
import { supplyChainS0G23 } from './generated23/supplyChainS0G23'
import { technicalSalesGems } from './generated23/technicalSalesGems'
import { technicalSalesGenerated23 } from './generated23/technicalSalesGenerated23'
import { understandingAnxietyGems } from './generated23/understandingAnxietyGems'
import { understandingDepressionGems } from './generated23/understandingDepressionGems'
import { understandingLonelinessGems } from './generated23/understandingLonelinessGems'
import { understandingLonelinessS0G23 } from './generated23/understandingLonelinessS0G23'
import { usGovernmentWorksGems } from './generated23/usGovernmentWorksGems'
import { usGovernmentWorksS0G23 } from './generated23/usGovernmentWorksS0G23'
import { usmleStep1AGenerated23 } from './generated23/usmleStep1AGenerated23'
import { usmleStep1BGenerated23 } from './generated23/usmleStep1BGenerated23'
import { usmleStep1CGenerated23 } from './generated23/usmleStep1CGenerated23'
import { usmleStep1Gems } from './generated23/usmleStep1Gems'
import { usmleStep2CkGems } from './generated23/usmleStep2CkGems'
import { usmleStep2CkGenerated23 } from './generated23/usmleStep2CkGenerated23'
import { uxDesignGems } from './generated23/uxDesignGems'
import { uxDesignGenerated23 } from './generated23/uxDesignGenerated23'
import { uxResearchGems } from './generated23/uxResearchGems'
import { uxResearchGenerated23 } from './generated23/uxResearchGenerated23'
import { vcJargonGems } from './generated23/vcJargonGems'
import { ventureCapitalRoadmapGems } from './generated23/ventureCapitalRoadmapGems'
import { votingElectionsGems } from './generated23/votingElectionsGems'
import { votingElectionsS0G23 } from './generated23/votingElectionsS0G23'
import { worldHistoryGems } from './generated23/worldHistoryGems'

// Floe-generated banks for the adult (23+) tier. generated:true; tagged to existing chapters. Auto-generated.
export const CAREER_GENERATED_23: Record<string, Question[]> = {
  aigp: [...aigpGems, ...aigpS0G23],
  amlCompliance: [...amlComplianceGems, ...amlComplianceS0G23],
  apiInspectors: [...apiInspectorsGems, ...apiInspectorsS0G23],
  astrophysicsIntro: [...astrophysicsIntroGems, ...astrophysicsIntroS0G23],
  asvabPrep: [...asvabPrepGems, ...asvabPrepS0G23],
  autoMechanics: [...autoMechanicsGems, ...autoMechanicsS0G23],
  bankComplianceAmlRoadmap: [...bankComplianceAmlRoadmapGems, ...bankComplianceAmlRoadmapS0G23],
  barExam: [...barExamGems, ...barExamS0G23],
  brainBurners: [...brainBurnersGems, ...brainBurnersS0G23],
  caia: [...caiaGems, ...caiaS0G23],
  cams: [...camsAGenerated23, ...camsBGenerated23, ...camsCGenerated23, ...camsGems],
  careerLsat: [...careerLsatGems, ...careerLsatS0G23, ...careerLsatS1G23, ...careerLsatS2G23],
  careerMcat: [...careerMcatGems, ...careerMcatS0G23],
  ccep: [...ccepGems, ...ccepS0G23],
  cdfm: [...cdfmGems, ...cdfmS0G23],
  certifiedGeneralAppraiser: [...certifiedGeneralAppraiserGems, ...certifiedGeneralAppraiserS0G23],
  cfaLevelOne: [...cfaLevelOneGems],
  cfaLevelThree: [...cfaLevelThreeGems, ...cfaLevelThreeS0G23],
  cfaLevelTwo: [...cfaLevelTwoGems, ...cfaLevelTwoS0G23],
  cfe: [...cfeGems, ...cfeGenerated23],
  cfp: [...cfpGems, ...cfpGenerated23],
  cippE: [...cippEAGenerated23, ...cippEBGenerated23, ...cippECGenerated23, ...cippEGems],
  clinicalResearchJargon: [...clinicalResearchJargonGems],
  clinicalResearchRoadmap: [...clinicalResearchRoadmapGems],
  cloudInfrastructureRoadmap: [...cloudInfrastructureRoadmapGems],
  consultingCases: [...consultingCasesGems, ...consultingCasesGenerated23],
  cpaExam: [...cpaExamGems, ...cpaExamS0G23],
  crcm: [...crcmGems, ...crcmS0G23],
  creditLevFinRoadmap: [...creditLevFinRoadmapGems],
  criticalThinking: [...criticalThinkingGems],
  customsBroker: [...customsBrokerGems, ...customsBrokerS0G23],
  cybersecOpsJargon: [...cybersecOpsJargonGems],
  cybersecurity: [...cybersecurityGems, ...cybersecurityS0G23],
  cybersecurityOperationsRoadmap: [...cybersecurityOperationsRoadmapGems, ...cybersecurityOperationsRoadmapS0G23],
  defenseBudgetingJargon: [...defenseBudgetingJargonGems],
  defenseBudgetingRoadmap: [...defenseBudgetingRoadmapGems],
  enterpriseSaaSRoadmap: [...enterpriseSaaSRoadmapGems, ...enterpriseSaaSRoadmapS0G23],
  equityResearchRoadmap: [...equityResearchRoadmapGems, ...equityResearchRoadmapS0G23],
  financialModeling: [...financialModelingGems, ...financialModelingS0G23],
  frm: [...frmGems, ...frmS0G23],
  healthInsurancePayersRoadmap: [...healthInsurancePayersRoadmapGems],
  healthcareComplianceRoadmap: [...healthcareComplianceRoadmapGems, ...healthcareComplianceRoadmapS0G23],
  hedgeFundsRoadmap: [...hedgeFundsRoadmapGems],
  homeElectrical: [...homeElectricalGems, ...homeElectricalS0G23],
  hospitalAdministrationRoadmap: [...hospitalAdministrationRoadmapGems, ...hospitalAdministrationRoadmapS0G23],
  howLawsAreMade: [...howLawsAreMadeGems, ...howLawsAreMadeS0G23],
  hvacBasics: [...hvacBasicsGems, ...hvacBasicsS0G23],
  ibJargon: [...ibJargonGems],
  investingBasics: [...investingBasicsGems],
  investmentBankingRoadmap: [...investmentBankingRoadmapGems, ...investmentBankingRoadmapS0G23],
  mbe: [...mbeGems, ...mbeS0G23],
  medical: [...medicalGems, ...medicalGenerated23],
  medicalBillingJargon: [...medicalBillingJargonGems],
  medicalBillingRoadmap: [...medicalBillingRoadmapGems, ...medicalBillingRoadmapS0G23],
  medicalCodingRoadmap: [...medicalCodingRoadmapGems],
  ml: [...mlGems, ...mlS0G23],
  mpre: [...mpreGems, ...mpreGenerated23],
  nalaCp: [...nalaCpGems, ...nalaCpGenerated23],
  nationalSecurityPolicyRoadmap: [...nationalSecurityPolicyRoadmapGems, ...nationalSecurityPolicyRoadmapS0G23],
  nclexPn: [...nclexPnGems, ...nclexPnS0G23],
  nclexRn: [...nclexRnGems, ...nclexRnGenerated23],
  negotiation: [...negotiationGems, ...negotiationS0G23],
  nerc: [...nercGems, ...nercS0G23],
  nursingFloorOpsRoadmap: [...nursingFloorOpsRoadmapGems, ...nursingFloorOpsRoadmapS0G23],
  pance: [...panceGems, ...panceGenerated23],
  patentBar: [...patentBarGems],
  peopleManagement: [...peopleManagementGems, ...peopleManagementGenerated23],
  personalFinance: [...personalFinanceGems, ...personalFinanceS0G23],
  pharmaDrugSafetyRoadmap: [...pharmaDrugSafetyRoadmapGems],
  philosophyIntro: [...philosophyIntroGems],
  physicianPracticeRoadmap: [...physicianPracticeRoadmapGems, ...physicianPracticeRoadmapS0G23],
  plumbingBasics: [...plumbingBasicsGems],
  pmpWrangler: [...pmpWranglerGems, ...pmpWranglerS0G23],
  pregnancyBasics: [...pregnancyBasicsGems],
  privateEquityRoadmap: [...privateEquityRoadmapGems, ...privateEquityRoadmapS0G23],
  procurementContractingRoadmap: [...procurementContractingRoadmapGems],
  productManagement: [...productManagementGems, ...productManagementS0G23],
  professionalEthics: [...professionalEthicsGems, ...professionalEthicsGenerated23],
  projectManagement: [...projectManagementGems, ...projectManagementS0G23],
  psychology101: [...psychology101Gems],
  publicAffairs: [...publicAffairsGems, ...publicAffairsS0G23, ...publicAffairsS1G23, ...publicAffairsS2G23],
  publicSpeaking: [...publicSpeakingGems, ...publicSpeakingS0G23],
  quant: [...quantGems, ...quantS0G23],
  quantAdvanced: [...quantAdvancedGems, ...quantAdvancedS0G23],
  regulatoryAffairsRoadmap: [...regulatoryAffairsRoadmapGems],
  salesFundamentals: [...salesFundamentalsGems, ...salesFundamentalsGenerated23],
  salesTradingRoadmap: [...salesTradingRoadmapGems, ...salesTradingRoadmapS0G23],
  series63: [...series63Gems],
  series7: [...series7Gems, ...series7S0G23],
  series79: [...series79Gems, ...series79S0G23],
  series86: [...series86Gems, ...series86S0G23],
  series87: [...series87Gems, ...series87S0G23],
  shrmPeople: [...shrmPeopleGems],
  sie: [...sieGems, ...sieS0G23],
  software: [...softwareGems, ...softwareS0G23, ...softwareS1G23],
  softwareEngineeringRoadmap: [...softwareEngineeringRoadmapGems],
  sqe1: [...sqe1Gems, ...sqe1S0G23],
  sqe2: [...sqe2Gems, ...sqe2S0G23],
  statisticsIntro: [...statisticsIntroGems, ...statisticsIntroS0G23],
  supplyChain: [...supplyChainGems, ...supplyChainS0G23],
  technicalSales: [...technicalSalesGems, ...technicalSalesGenerated23],
  understandingAnxiety: [...understandingAnxietyGems],
  understandingDepression: [...understandingDepressionGems],
  understandingLoneliness: [...understandingLonelinessGems, ...understandingLonelinessS0G23],
  usGovernmentWorks: [...usGovernmentWorksGems, ...usGovernmentWorksS0G23],
  usmleStep1: [...usmleStep1AGenerated23, ...usmleStep1BGenerated23, ...usmleStep1CGenerated23, ...usmleStep1Gems],
  usmleStep2Ck: [...usmleStep2CkGems, ...usmleStep2CkGenerated23],
  uxDesign: [...uxDesignGems, ...uxDesignGenerated23],
  uxResearch: [...uxResearchGems, ...uxResearchGenerated23],
  vcJargon: [...vcJargonGems],
  ventureCapitalRoadmap: [...ventureCapitalRoadmapGems],
  votingElections: [...votingElectionsGems, ...votingElectionsS0G23],
  worldHistory: [...worldHistoryGems],
}
