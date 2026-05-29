// Aggregator for the 20 new 23+ adult courses (Waves A/B/B2, 2026-05).
// Keeps career.ts wiring to a single import + graft loop.
import type { Question } from './types'
import { autoMechanicsQuestions } from './autoMechanicsQuestions'
import { plumbingBasicsQuestions } from './plumbingBasicsQuestions'
import { homeElectricalQuestions } from './homeElectricalQuestions'
import { hvacBasicsQuestions } from './hvacBasicsQuestions'
import { usGovernmentWorksQuestions } from './usGovernmentWorksQuestions'
import { votingElectionsQuestions } from './votingElectionsQuestions'
import { howLawsAreMadeQuestions } from './howLawsAreMadeQuestions'
import { asvabPrepQuestions } from './asvabPrepQuestions'
import { personalFinanceQuestions } from './personalFinanceQuestions'
import { investingBasicsQuestions } from './investingBasicsQuestions'
import { psychology101Questions } from './psychology101Questions'
import { pregnancyBasicsQuestions } from './pregnancyBasicsQuestions'
import { criticalThinkingQuestions } from './criticalThinkingQuestions'
import { philosophyIntroQuestions } from './philosophyIntroQuestions'
import { understandingDepressionQuestions } from './understandingDepressionQuestions'
import { understandingAnxietyQuestions } from './understandingAnxietyQuestions'
import { understandingLonelinessQuestions } from './understandingLonelinessQuestions'
import { worldHistoryQuestions } from './worldHistoryQuestions'
import { statisticsIntroQuestions } from './statisticsIntroQuestions'
import { astrophysicsIntroQuestions } from './astrophysicsIntroQuestions'

export const ADULT_NEW_COURSE_BANKS: Record<string, Question[]> = {
  autoMechanics: autoMechanicsQuestions,
  plumbingBasics: plumbingBasicsQuestions,
  homeElectrical: homeElectricalQuestions,
  hvacBasics: hvacBasicsQuestions,
  usGovernmentWorks: usGovernmentWorksQuestions,
  votingElections: votingElectionsQuestions,
  howLawsAreMade: howLawsAreMadeQuestions,
  asvabPrep: asvabPrepQuestions,
  personalFinance: personalFinanceQuestions,
  investingBasics: investingBasicsQuestions,
  psychology101: psychology101Questions,
  pregnancyBasics: pregnancyBasicsQuestions,
  criticalThinking: criticalThinkingQuestions,
  philosophyIntro: philosophyIntroQuestions,
  understandingDepression: understandingDepressionQuestions,
  understandingAnxiety: understandingAnxietyQuestions,
  understandingLoneliness: understandingLonelinessQuestions,
  worldHistory: worldHistoryQuestions,
  statisticsIntro: statisticsIntroQuestions,
  astrophysicsIntro: astrophysicsIntroQuestions,
}
