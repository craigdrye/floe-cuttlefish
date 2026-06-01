import type { Question } from './types'
import { makeSimpleQuestion } from './base'
import {
  makeHighSchoolBiologyNGSSQuiz,
  makeHighSchoolPhysicsNGSSQuiz,
  makeWorldHistoryOriginsQuiz,
  makeWorldHistory1750Quiz,
} from './colGapBuilders'
import { buildOpenStaxQuestionCatalog } from './openstax'
import { buildFCCQuestionCatalog } from './fcc'
import { introCsWorkoutGeneratedQuestions } from './introCsWorkoutGenerated'
import { buildWikibooksQuestionCatalog } from './wikibooks'
import { openTriviaGeographyQuestions } from './openTriviaGeographyImported'
// Wave 4 HS Sciences (2026-05-18): the following imports were deleted (DEFAULT_FLAW distractor pattern):
//   openTriviaAnimalBiologyImported, openTriviaMolecularBiologyImported,
//   openTriviaApBiologyScienceBatch2Imported, openTriviaChemistryExtensionImported,
//   openTriviaPhysicsExtensionImported. openTriviaScienceMicroImported.openTriviaChemistryQuestions
//   and openTriviaEarthPhysicsMicroImported.openTriviaPhysicsQuestions also removed.
import { openTriviaApcsExtensionQuestions } from './openTriviaApcsExtensionImported'
import {
  openTriviaCuratedGeographyAdditionalQuestions,
  openTriviaCuratedHistoryAdditionalQuestions,
  openTriviaCuratedLanguageCultureAdditionalQuestions,
  openTriviaCuratedLiteratureAdditionalQuestions,
} from './openTriviaCuratedAdditionalImported'
import { openSatReadingWritingQuestions } from './openSatImported'
// Wave 4 consolidation 2026-05-18: apComputerScienceExamBatch + apEconomicsExamBatch merged into
// their respective WorkoutGenerated banks; ExamBatch files deleted.
// HS Sciences Wave 4 (2026-05-18): apBiologyExamBatch + apBiologyAnimalEcologyBatch +
// apChemistryExamBatch + apPhysicsExamBatch merged into their respective WorkoutGenerated
// banks; ExamBatch files deleted.
import { highSchoolBiologyNgssExamBatchQuestions } from './highSchoolBiologyNgssExamBatch'
import { highSchoolPhysicsNgssExamBatchQuestions } from './highSchoolPhysicsNgssExamBatch'
import { highHumanitiesAuthoredApEuropeanHistoryQuestions, highHumanitiesAuthoredMiddleSchoolBigHistoryQuestions } from './highHumanitiesAuthored'
import { topUpHighAgentGeneratedTrack } from './highAgentGenerated'
import { topUpHighGeneratedTrack } from './highGenerated'
import { calculusWorkoutGeneratedQuestions } from './calculusWorkoutGenerated'
import { apPhysicsWorkoutGeneratedQuestions } from './apPhysicsWorkoutGenerated'
import { apChemistryWorkoutGeneratedQuestions } from './apChemistryWorkoutGenerated'
import { apBiologyWorkoutGeneratedQuestions } from './apBiologyWorkoutGenerated'
import { apEconomicsWorkoutGeneratedQuestions } from './apEconomicsWorkoutGenerated'
import { apComputerScienceWorkoutGeneratedQuestions } from './apComputerScienceWorkoutGenerated'
import { apEnglishWorkoutGeneratedQuestions } from './apEnglishWorkoutGenerated'
import { apPsychologyWorkoutGeneratedQuestions } from './apPsychologyWorkoutGenerated'
import { apHumanGeographyWorkoutGeneratedQuestions } from './apHumanGeographyWorkoutGenerated'
import { apHistoryWorkoutGeneratedQuestions } from './apHistoryWorkoutGenerated'
import { microeconomicsWorkoutGeneratedQuestions } from './microeconomicsWorkoutGenerated'
import { macroeconomicsWorkoutGeneratedQuestions } from './macroeconomicsWorkoutGenerated'
import {
  highMacroeconomicsHandBankQuestions,
  highMicroeconomicsHandBankQuestions,
} from './highEconomics'
import { worldHistoryModernExamBatchQuestions } from './worldHistoryModernExamBatch'
import { worldHistoryOriginsExamBatchQuestions } from './worldHistoryOriginsExamBatch'
import { schoolAssessmentHighSchoolBiologyQuestions } from './schoolAssessmentMathScienceImported'
import {
  schoolAssessmentReadingWritingQuestions,
  schoolAssessmentUsHistoryQuestions,
} from './schoolAssessmentReadingSocialImported'

function highAdvancedLesson(question: Question): string {
  const title = question.title || question.chapter || 'this question'
  const answer = question.solution || 'the correct answer'
  return `This AP-style question is testing whether you can connect a term, fact, or scenario to the underlying concept. For "${title}", the key idea is: ${answer}. Name the concept first, then use the wording of the prompt to avoid picking a nearby but different idea.`
}

function rewriteHighAdvancedPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (prompt.endsWith('?')) return question.prompt
  if (/_{2,}|\\_\\_|blank|fill in/i.test(prompt)) {
    return `${prompt} Which answer correctly fills the blank?`
  }
  if (prompt.endsWith(':')) {
    return `${prompt} Which option makes the idea most precise?`
  }
  return `${prompt} Which option best matches the clue?`
}

function enrichHighAdvancedQuestionQuality(catalog: Record<string, Question[]>): Record<string, Question[]> {
  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      questions.map((question) => ({
        ...question,
        prompt: rewriteHighAdvancedPrompt(question),
        lesson: question.lesson || highAdvancedLesson(question),
      })),
    ]),
  )
}

export function buildHighAdvancedQuestionCatalog(): Record<string, Question[]> {
  const fcc = buildFCCQuestionCatalog()
  const basicJavascript = fcc['basic-javascript'] || []
  const basicHtml = fcc['basic-html-and-html5'] || []
  const catalog: Record<string, Question[]> = {
  'col-high-school-biology-ngss': [
    ...makeHighSchoolBiologyNGSSQuiz(),
    ...highSchoolBiologyNgssExamBatchQuestions,
    ...schoolAssessmentHighSchoolBiologyQuestions,
  ],
  'col-high-school-physics-ngss': [
    ...makeHighSchoolPhysicsNGSSQuiz(),
    ...highSchoolPhysicsNgssExamBatchQuestions,
  ],
  'col-world-history-project-origins-to-the-present': [
    ...makeWorldHistoryOriginsQuiz(),
    ...worldHistoryOriginsExamBatchQuestions,
  ],
  'col-world-history-project-1750-to-the-present': [
    ...makeWorldHistory1750Quiz(),
    ...worldHistoryModernExamBatchQuestions,
  ],
  apHumanGeography: [
    ...openTriviaGeographyQuestions,
    ...openTriviaCuratedGeographyAdditionalQuestions,
    ...openTriviaCuratedLanguageCultureAdditionalQuestions,
    ...apHumanGeographyWorkoutGeneratedQuestions,
  ],
  apPsychology: [...apPsychologyWorkoutGeneratedQuestions],
  apEuropeanHistory: [...highHumanitiesAuthoredApEuropeanHistoryQuestions],
  middleSchoolBigHistory: [...highHumanitiesAuthoredMiddleSchoolBigHistoryQuestions],
  'col-sat-reading-and-writing': [
    ...openSatReadingWritingQuestions,
    ...schoolAssessmentReadingWritingQuestions,
  ],
  apCalculus: [
    makeSimpleQuestion(13001, 'AP', 'AP Calculus Pier', 'Derivative intuition',
      'If f(x) = x^2, what is f\'(3)?',
      '6',
      [
        ['3', 'That is x, not 2x evaluated at x = 3.', 'Derivative of x^2 is 2x, then substitute x = 3.'],
        ['9', '9 is f(3), not f\'(3).', 'Distinguish function value from slope.'],
        ['12', 'That doubles twice.', 'Use 2x once for the derivative.'],
      ]),
    makeSimpleQuestion(13002, 'AP', 'AP Calculus Reef', 'Integral meaning',
      'What does a definite integral most directly represent in a basic AP Calculus setting?',
      'Accumulated change or signed area under a curve',
      [
        ['Only the slope at one point', 'Slope at one point is derivative language, not integral language.', 'Think accumulation rather than instantaneous rate.'],
        ['The highest point on the graph', 'An integral does not directly ask for a maximum.', 'Match the operation to its geometric meaning.'],
        ['A random average of y-values', 'Averages can involve integrals, but that is not the core idea.', 'Start with area/accumulation as the main interpretation.'],
      ]),
    makeSimpleQuestion(13003, 'AP', 'AP Calculus Dock', 'Chain rule',
      'If y = (3x + 1)^4, what derivative rule is most important?',
      'The chain rule',
      [
        ['The quotient rule', 'There is no quotient here.', 'Look for a function inside another function.'],
        ['The product rule', 'This is a composition, not a product of separate factors.', 'Outer power plus inner linear term means chain rule.'],
        ['No rule is needed', 'A nontrivial composition still needs a derivative rule.', 'Name the governing rule first, then compute.'],
      ]),
    makeSimpleQuestion(13004, 'AP', 'AP Calculus Lagoon', 'Concavity clue',
      'If f\'\'(x) > 0 on an interval, the graph of f is:',
      'Concave up',
      [
        ['Concave down', 'The sign is reversed.', 'Positive second derivative means the slope is increasing.'],
        ['Always decreasing', 'Concavity and increasing/decreasing are different ideas.', 'Separate first-derivative behavior from second-derivative behavior.'],
        ['Guaranteed to cross the x-axis', 'Second derivative sign says nothing direct about x-intercepts.', 'Use the derivative test that matches the question.'],
      ]),
    ...calculusWorkoutGeneratedQuestions,
  ],
  apBiology: [
    makeSimpleQuestion(13101, 'AP', 'AP Biology Reef', 'Cell transport',
      'What best describes osmosis?',
      'Movement of water across a selectively permeable membrane',
      [
        ['Movement of glucose using ATP pumps', 'That describes active transport of solutes, not osmosis.', 'Osmosis focuses on water movement.'],
        ['Random movement of all molecules equally', 'That is diffusion in general, not the specific membrane-water concept.', 'Osmosis is water plus membrane context.'],
        ['Cell division into two daughter cells', 'That is mitosis.', 'Separate transport processes from cell-cycle processes.'],
      ]),
    makeSimpleQuestion(13102, 'AP', 'AP Biology Dock', 'ATP source',
      'Which organelle is most associated with making ATP in eukaryotic cells?',
      'Mitochondria',
      [
        ['Ribosomes', 'Ribosomes build proteins, not most ATP.', 'Match organelle to its main job.'],
        ['Golgi apparatus', 'Golgi modifies and packages materials.', 'Energy production is the mitochondrion’s role.'],
        ['Nucleus', 'The nucleus stores DNA and regulates cell activity.', 'Do not confuse control centers with energy centers.'],
      ]),
    makeSimpleQuestion(13103, 'AP', 'AP Biology Cove', 'Natural selection',
      'For natural selection to occur, which condition matters most?',
      'Heritable variation that affects survival or reproduction',
      [
        ['All individuals being identical', 'No variation means nothing to select between.', 'Selection needs differences tied to fitness.'],
        ['Traits changing because organisms try harder', 'That is not Darwinian selection.', 'Focus on inherited variation, not effort.'],
        ['Every trait being beneficial', 'Selection acts among mixed outcomes, not universal benefits.', 'Variation plus differential success is the key.'],
      ]),
    makeSimpleQuestion(13104, 'AP', 'AP Biology Lagoon', 'DNA role',
      'What is the primary role of DNA?',
      'To store genetic information',
      [
        ['To directly produce ATP', 'ATP production is not DNA’s main role.', 'DNA stores instructions, it is not the cell’s fuel.'],
        ['To dissolve cell membranes', 'That is not a biological function of DNA.', 'Stay with information storage and inheritance.'],
        ['To act as the main structural protein', 'DNA is a nucleic acid, not the main structural protein.', 'Separate nucleic acids from proteins.'],
      ]),
    ...schoolAssessmentHighSchoolBiologyQuestions,
    ...apBiologyWorkoutGeneratedQuestions,
  ],
  apChemistry: [
    makeSimpleQuestion(13201, 'AP', 'AP Chemistry Dock', 'Mole concept',
      'One mole of a substance equals:',
      '6.022 x 10^23 particles',
      [
        ['One gram of every substance', 'Moles are a counting unit, not always one gram.', 'Mass per mole depends on molar mass.'],
        ['The number of atoms in one molecule', 'That depends on the chemical formula.', 'A mole counts whole entities.'],
        ['Exactly one liter of gas', 'Gas volume depends on conditions.', 'Use particle count as the definition.'],
      ]),
    makeSimpleQuestion(13202, 'AP', 'AP Chemistry Reef', 'pH direction',
      'If a solution becomes more acidic, what usually happens to its pH?',
      'It decreases',
      [
        ['It increases', 'More acidic means lower pH, not higher.', 'Remember the pH scale runs opposite to acidity strength.'],
        ['It stays exactly the same', 'A change in acidity changes pH.', 'Use the scale relationship directly.'],
        ['It becomes zero every time', 'Zero is extreme, not universal.', 'The question asks about direction, not a fixed final value.'],
      ]),
    makeSimpleQuestion(13203, 'AP', 'AP Chemistry Cove', 'Reaction signs',
      'What best shows a chemical reaction has happened?',
      'A new substance is formed',
      [
        ['The beaker changed rooms', 'Location change is not chemistry.', 'Look for substance change, not container movement.'],
        ['Only the sample became smaller', 'Mass or volume change alone can be misleading.', 'The key is new composition.'],
        ['The liquid was stirred', 'Stirring is a physical action, not proof of reaction.', 'A reaction changes what the substance is.'],
      ]),
    makeSimpleQuestion(13204, 'AP', 'AP Chemistry Lagoon', 'Periodic trend',
      'Elements in the same column of the periodic table usually share:',
      'Similar valence electron patterns and chemical behavior',
      [
        ['The same mass number', 'Mass numbers vary.', 'Columns group similar outer-electron structures.'],
        ['Exactly the same number of neutrons', 'Neutron count is not what groups columns.', 'Chemical behavior tracks electron configuration.'],
        ['The same state of matter always', 'Elements in one group can differ in state.', 'The strongest shared pattern is valence behavior.'],
    ]),
    ...apChemistryWorkoutGeneratedQuestions,
  ],
  apPhysics: [
    ...makeHighSchoolPhysicsNGSSQuiz(),
    makeSimpleQuestion(13301, 'AP', 'AP Physics Dock', 'Kinematics basics',
      'A cart starts from rest on a track and accelerates steadily at 2 m/s^2 for 4 seconds. If acceleration adds the same amount of velocity each second, what final velocity does the cart reach?',
      '8 m/s',
      [
        ['2 m/s', 'That is the acceleration value, not the final velocity.', 'Use v = u + at.'],
        ['4 m/s', 'That uses time only and ignores acceleration magnitude.', 'Multiply acceleration by time from rest.'],
        ['16 m/s', 'That applies the factor twice.', 'Single-step substitution gives 0 + 2*4.'],
      ],
      'Kinematics tracks how motion changes over time. When acceleration is constant, final velocity can be found with v = u + at: start with the initial velocity u, then add acceleration times time. Starting from rest means u = 0, so the whole final velocity comes from the acceleration accumulated over 4 seconds.',
      undefined,
      undefined,
      'Start from v = u + at. "From rest" means the initial velocity is 0, so only the acceleration-times-time part remains.',
      {
        solution: 'Use v = u + at. The cart starts from rest, so u = 0, and at = 2 × 4 = 8. The final velocity is 8 m/s.',
        alternatePrompts: {
          plain: 'A cart starts at 0 m/s and gains 2 m/s of speed every second for 4 seconds. What is its final velocity?',
          teaching: 'Think of acceleration as adding velocity each second. If the cart gains 2 m/s four times, what speed does it reach from rest?',
        },
        challengeRating: 6,
      }),
    makeSimpleQuestion(13302, 'AP', 'AP Physics Reef', 'Newton second law',
      'Newton’s second law is usually written as:',
      'F = ma',
      [
        ['E = mc^2', 'That is mass-energy equivalence, not Newton’s second law.', 'Match the formula to the topic.'],
        ['v = d/t', 'That is average speed.', 'Force relates mass and acceleration.'],
        ['pH = -log[H+]', 'That is chemistry, not mechanics.', 'Keep formulas in their domain.'],
      ]),
    makeSimpleQuestion(13303, 'AP', 'AP Physics Cove', 'Energy conservation',
      'If friction is negligible, what often stays constant in a closed mechanical system?',
      'Total mechanical energy',
      [
        ['Only velocity', 'Velocity can change while total energy stays the same.', 'Separate state variables from conserved totals.'],
        ['Only acceleration', 'Acceleration can vary with position or force.', 'Look for the conserved quantity.'],
        ['Only height', 'Height often changes as energy swaps forms.', 'Potential and kinetic trade off.'],
      ]),
    makeSimpleQuestion(13304, 'AP', 'AP Physics Lagoon', 'Momentum intuition',
      'Momentum is mass multiplied by:',
      'Velocity',
      [
        ['Acceleration', 'That belongs in force relationships.', 'Momentum uses motion amount, not rate of change of velocity.'],
        ['Distance', 'Distance is not part of momentum definition.', 'Use p = mv.'],
        ['Time', 'Time alone is not in the formula.', 'Stay with mass times velocity.'],
      ]),
    ...apPhysicsWorkoutGeneratedQuestions,
    // Wave 4 HS Sciences (2026-05-18): OpenStax + Wikibooks math-extensions cross-tier filler
    // removed per audit ("wrong-tier filler"). AP Physics now relies on its consolidated bank.
  ],
  apEnglish: [
    makeSimpleQuestion(13401, 'AP', 'AP English Lit Dock', 'Theme reading',
      'In literary analysis, a theme is best described as:',
      'A central idea or insight developed through the work',
      [
        ['The name of the main character', 'That is a character detail, not a theme.', 'Theme is about meaning, not labeling.'],
        ['Every event in chronological order', 'That is plot summary.', 'Analysis asks what the work is saying.'],
        ['The font used in the book', 'That is formatting, not interpretation.', 'Keep literary meaning separate from presentation.'],
      ]),
    makeSimpleQuestion(13402, 'AP', 'AP English Lit Reef', 'Evidence use',
      'What strengthens a literary analysis paragraph most?',
      'Specific textual evidence plus explanation of how it supports the claim',
      [
        ['A long summary with no quotes', 'Summary alone rarely proves interpretation.', 'Use evidence and analysis together.'],
        ['A quote with no explanation', 'Evidence without reasoning is incomplete.', 'Explain why the quoted detail matters.'],
        ['An unrelated personal opinion', 'Personal reaction is not enough for textual argument.', 'Stay anchored in the text.'],
      ]),
    makeSimpleQuestion(13403, 'AP', 'AP English Lit Cove', 'Tone clue',
      'Tone refers to the author’s or speaker’s:',
      'Attitude toward the subject or audience',
      [
        ['Sentence length only', 'Sentence length can contribute, but tone is broader.', 'Think attitude conveyed through language.'],
        ['Plot twist at the end', 'Plot and tone are different elements.', 'Tone is about feeling and stance.'],
        ['The page count of the work', 'Page count does not define tone.', 'Focus on language and attitude.'],
      ]),
    makeSimpleQuestion(13404, 'AP', 'AP English Lit Lagoon', 'Figurative language',
      'A metaphor does what?',
      'Compares unlike things without using “like” or “as”',
      [
        ['States only literal facts', 'Metaphor is figurative, not purely literal.', 'Look for implied comparison.'],
        ['Uses “like” or “as” directly', 'That is a simile.', 'Metaphor compares more directly.'],
        ['Ends every paragraph with rhyme', 'That is not metaphor.', 'Separate sound devices from comparison devices.'],
      ]),
    ...openTriviaCuratedLiteratureAdditionalQuestions,
    ...apEnglishWorkoutGeneratedQuestions,
  ],
  apHistory: [
    makeSimpleQuestion(13501, 'AP', 'AP U.S. History Dock', 'DBQ structure',
      'In a DBQ-style essay, what should come immediately after your thesis?',
      'Evidence and analysis that directly supports the thesis',
      [
        ['A full biography of every historical figure', 'Background can help but does not replace argument support.', 'Prioritize claim-evidence-reasoning.'],
        ['A completely new unrelated claim', 'That breaks argument coherence.', 'Keep paragraphs tied to the thesis.'],
        ['Only quotes with no explanation', 'Quotes alone are not analysis.', 'Explain how evidence proves your point.'],
      ]),
    makeSimpleQuestion(13502, 'AP', 'AP U.S. History Reef', 'Causation',
      'A strong historical causation answer usually does what?',
      'Explains how and why one development led to another',
      [
        ['Lists dates with no connection', 'Dates alone do not explain causation.', 'Show the relationship between events.'],
        ['Avoids evidence to stay brief', 'Causation claims need support.', 'Use evidence to trace the mechanism.'],
        ['Treats every event as equally important', 'Strong analysis weighs relative importance.', 'Not all causes matter equally.'],
      ]),
    makeSimpleQuestion(13503, 'AP', 'AP U.S. History Cove', 'Primary source use',
      'What makes a source “primary”?',
      'It was created during the period or by someone directly involved',
      [
        ['It appears first in a textbook chapter', 'Textbook order does not define source type.', 'Primary means direct from the time or participant.'],
        ['It is always more truthful than later sources', 'Primary sources can also be biased or limited.', 'Source type is not the same as reliability.'],
        ['It is shorter than a secondary source', 'Length is irrelevant.', 'Focus on origin and proximity.'],
      ]),
    makeSimpleQuestion(13504, 'AP', 'AP U.S. History Lagoon', 'Contextualization',
      'What is contextualization in AP history writing?',
      'Placing the argument within broader historical developments',
      [
        ['Repeating the thesis word for word', 'That restates, but does not contextualize.', 'Widen the frame around the argument.'],
        ['Adding random modern examples', 'Context should stay historically relevant.', 'Connect to the surrounding period and trends.'],
        ['Listing every fact you remember', 'Context is not a fact dump.', 'Select broader developments that illuminate the claim.'],
      ]),
    ...openTriviaCuratedHistoryAdditionalQuestions,
    ...schoolAssessmentUsHistoryQuestions,
    ...apHistoryWorkoutGeneratedQuestions,
  ],
  apEconomics: [
    makeSimpleQuestion(13601, 'AP', 'AP Economics Dock', 'Elasticity clue',
      'If demand changes a lot when price changes slightly, demand is:',
      'Elastic',
      [
        ['Inelastic', 'Inelastic demand changes less in response to price.', 'Large responsiveness means elasticity.'],
        ['Fixed by law', 'That is not an elasticity category.', 'Stay with the standard vocabulary.'],
        ['Always perfectly inelastic', 'The prompt says quantity reacts strongly.', 'Use the definition directly.'],
      ]),
    makeSimpleQuestion(13602, 'AP', 'AP Economics Reef', 'Opportunity cost',
      'Opportunity cost is best defined as:',
      'The value of the next best alternative you give up',
      [
        ['Only the money you pay', 'Costs can include more than cash.', 'Think in terms of forgone alternatives.'],
        ['Any benefit you gain', 'Benefit and cost are different.', 'Opportunity cost is what you sacrifice.'],
        ['A tax charged by the government', 'Taxes may be a cost, but not the general definition.', 'Use the broader economic idea.'],
      ]),
    makeSimpleQuestion(13603, 'AP', 'AP Economics Cove', 'Supply shift',
      'If production costs fall, what usually happens to supply?',
      'Supply increases',
      [
        ['Supply decreases', 'Lower production cost usually encourages more production.', 'Think about producer incentives.'],
        ['Demand increases automatically', 'The prompt is about supply, not demand.', 'Keep the side of the market straight.'],
        ['Price floors disappear', 'That is policy language, not the direct effect here.', 'Match the input to the market response.'],
      ]),
    makeSimpleQuestion(13604, 'AP', 'AP Economics Lagoon', 'Scarcity idea',
      'Scarcity in economics means:',
      'Resources are limited relative to wants',
      [
        ['Nobody can get anything', 'Scarcity does not mean zero availability.', 'It means tradeoffs exist because resources are limited.'],
        ['Only poor countries face limits', 'Scarcity is universal.', 'Every economy must choose among competing uses.'],
        ['Prices are always high', 'High prices can result, but that is not the definition.', 'Start with limited resources versus unlimited wants.'],
      ]),
    ...apEconomicsWorkoutGeneratedQuestions,
  ],
  apComputerScience: [
    makeSimpleQuestion(13701, 'AP', 'AP CS Dock', 'Loop behavior',
      'What is a loop mainly used for in programming?',
      'To repeat a block of instructions',
      [
        ['To rename every variable', 'Renaming is not the main purpose of loops.', 'Loops repeat work.'],
        ['To guarantee no bugs', 'Structure helps, but loops do not guarantee correctness.', 'Focus on repetition and iteration.'],
        ['To turn code into a database', 'That is not what loops do.', 'Stay with control flow.'],
      ]),
    makeSimpleQuestion(13702, 'AP', 'AP CS Reef', 'Boolean logic',
      'A Boolean value is the tiny yes-or-no switch that programs use in conditions like if-statements. Which pair of values can a Boolean have?',
      'True or false',
      [
        ['Only whole numbers', 'Booleans are logical values, not just numbers.', 'Think yes/no states.'],
        ['Any decimal between 0 and 1', 'That is not the usual programming definition.', 'Boolean means two-valued logic.'],
        ['A list of strings', 'That is a collection, not a Boolean.', 'Use the data type that matches condition checks.'],
      ],
      'A Boolean is a two-valued logic type: true or false. It is what a program uses when it asks a condition such as "is the score above 10?" or "has the user logged in?"\n\nNumbers, decimals, and lists can all be useful data, but they are not the basic yes-or-no result of a condition.',
      undefined,
      undefined,
      'Think of a Boolean as the answer to a yes/no question inside the code.',
      {
        solution: 'A Boolean value can be true or false. Those two values power condition checks, loops, and logical decisions in programs.',
        alternatePrompts: {
          plain: 'In programming, what two values can a Boolean usually have?',
          teaching: 'When code asks a yes/no question, what are the two possible Boolean answers?',
        },
        challengeRating: 2,
      }),
    makeSimpleQuestion(13703, 'AP', 'AP CS Cove', 'Algorithm quality',
      'A good algorithm should be:',
      'Clear, correct, and efficient enough for the task',
      [
        ['As long as possible', 'Length alone does not improve quality.', 'Clarity and correctness matter more.'],
        ['Impossible to read', 'Unreadable code is not a virtue.', 'Good algorithms communicate logic well.'],
        ['Always recursive', 'Recursion is a tool, not a requirement.', 'Choose the right approach for the problem.'],
      ]),
    makeSimpleQuestion(13704, 'AP', 'AP CS Lagoon', 'Array idea',
      'An array is best described as:',
      'A collection of items stored in order',
      [
        ['A function that never returns', 'That is unrelated to arrays.', 'Arrays organize multiple values.'],
        ['A comment written by the programmer', 'Comments explain code; they are not data structures.', 'Use the data-structure definition.'],
        ['A network connection', 'That belongs to networking, not storage structure.', 'Think ordered collection.'],
      ]),
    ...openTriviaApcsExtensionQuestions,
    ...apComputerScienceWorkoutGeneratedQuestions,
  ],
  // Wave 4 consolidation 2026-05-18: HS-tier econ tracks routed through this bundle.
  // Same content as the university-tier bank in universityAcademic.ts (single source of truth in
  // highEconomics.ts), but the HS routing sets put them on the "high-advanced" bundle.
  macroeconomics: [
    ...highMacroeconomicsHandBankQuestions,
    ...macroeconomicsWorkoutGeneratedQuestions,
  ],
  microeconomics: [
    ...highMicroeconomicsHandBankQuestions,
    ...microeconomicsWorkoutGeneratedQuestions,
  ],
    basic_javascript: basicJavascript,
    basic_html_and_html5: basicHtml,
    'col-intro-to-cs-python': introCsWorkoutGeneratedQuestions,
    ...buildOpenStaxQuestionCatalog(),
    ...buildWikibooksQuestionCatalog(),
  }

  const toppedUp = Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, topUpHighAgentGeneratedTrack(trackId, questions)),
    ]),
  )
  return enrichHighAdvancedQuestionQuality(toppedUp)
}
