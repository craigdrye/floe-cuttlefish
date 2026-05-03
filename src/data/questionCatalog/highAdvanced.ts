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
import { buildWikibooksQuestionCatalog } from './wikibooks'
import { openTriviaGeographyQuestions } from './openTriviaGeographyImported'
import { openTriviaAnimalBiologyQuestions } from './openTriviaAnimalBiologyImported'
import { openTriviaMolecularBiologyQuestions } from './openTriviaMolecularBiologyImported'
import { openTriviaApBiologyScienceBatch2Questions } from './openTriviaApBiologyScienceBatch2Imported'
import { apBiologyAnimalEcologyBatchQuestions } from './apBiologyAnimalEcologyBatch'
import { openTriviaChemistryQuestions } from './openTriviaScienceMicroImported'
import { openTriviaChemistryExtensionQuestions } from './openTriviaChemistryExtensionImported'
import { openTriviaPhysicsQuestions } from './openTriviaEarthPhysicsMicroImported'
import { openTriviaPhysicsExtensionQuestions } from './openTriviaPhysicsExtensionImported'
import { openTriviaLiteratureQuestions } from './openTriviaLiteratureMicroImported'
import { openTriviaLiteratureCanonQuestions } from './openTriviaLiteratureCanonImported'
import { openTriviaLiteraryFormsShakespeareQuestions } from './openTriviaLiteraryFormsShakespeareImported'
import { openTriviaLiteratureModernExtensionQuestions } from './openTriviaLiteratureModernExtensionImported'
import { openTriviaLiteratureCanonicalOpeningsShakespeareQuestions } from './openTriviaLiteratureCanonicalOpeningsShakespeareImported'
import { openTriviaLiteraturePoetsAuthorsQuestions } from './openTriviaLiteraturePoetsAuthorsImported'
import { openTriviaLiteratureShakespeareModernistQuestions } from './openTriviaLiteratureShakespeareModernistImported'
import { openTriviaLiteraturePoetryIdentityQuestions } from './openTriviaLiteraturePoetryIdentityImported'
import { openTriviaLiteratureFinalIdentityQuestions } from './openTriviaLiteratureFinalIdentityImported'
import { openTriviaApcsExtensionQuestions } from './openTriviaApcsExtensionImported'
import { openTriviaHistoryQuestions } from './openTriviaHistoryMicroImported'
import { openTriviaWorldHistoryExtensionQuestions } from './openTriviaWorldHistoryExtensionImported'
import { openTriviaUsHistoryExtensionQuestions } from './openTriviaUsHistoryExtensionImported'
import { openTriviaHistoryWwiiColdWarQuestions } from './openTriviaHistoryWwiiColdWarImported'
import { openTriviaWorldHistoryFoundationsQuestions } from './openTriviaWorldHistoryFoundationsImported'
import { openTriviaModernHistoryColdWarQuestions } from './openTriviaModernHistoryColdWarImported'
import { openTriviaUsHistoryAnchorQuestions } from './openTriviaUsHistoryAnchorImported'
import { openTriviaWorldHistoryAnchorQuestions } from './openTriviaWorldHistoryAnchorImported'
import { openTriviaWorldHistoryFinalTwoQuestions } from './openTriviaWorldHistoryFinalTwoImported'
import { openSatReadingWritingQuestions } from './openSatImported'
import { openDsaFormalLanguagesQuestions } from './openDsaFormalLanguagesImported'
import { openDsaAlgorithmQuestions } from './openDsaAlgorithmsImported'
import { apBiologyExamBatchQuestions } from './apBiologyExamBatch'
import { apComputerScienceExamBatchQuestions } from './apComputerScienceExamBatch'
import { apEconomicsExamBatchQuestions } from './apEconomicsExamBatch'
import { apEnglishExamBatchQuestions } from './apEnglishExamBatch'
import { apHistoryExamBatchQuestions } from './apHistoryExamBatch'
import { apHumanGeographyExamBatchQuestions } from './apHumanGeographyExamBatch'
import { highSchoolBiologyNgssExamBatchQuestions } from './highSchoolBiologyNgssExamBatch'
import { highSchoolPhysicsNgssExamBatchQuestions } from './highSchoolPhysicsNgssExamBatch'
import { apChemistryExamBatchQuestions } from './apChemistryExamBatch'
import { apPhysicsExamBatchQuestions } from './apPhysicsExamBatch'
import { apPsychologyExamBatchQuestions } from './apPsychologyExamBatch'
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
import { worldHistoryModernExamBatchQuestions } from './worldHistoryModernExamBatch'
import { worldHistoryOriginsExamBatchQuestions } from './worldHistoryOriginsExamBatch'

export function buildHighAdvancedQuestionCatalog(): Record<string, Question[]> {
  const fcc = buildFCCQuestionCatalog()
  const basicJavascript = fcc['basic-javascript'] || []
  const basicHtml = fcc['basic-html-and-html5'] || []
  const catalog: Record<string, Question[]> = {
  'col-high-school-biology-ngss': [
    ...makeHighSchoolBiologyNGSSQuiz(),
    ...highSchoolBiologyNgssExamBatchQuestions,
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
    ...apHumanGeographyExamBatchQuestions,
    ...apHumanGeographyWorkoutGeneratedQuestions,
  ],
  apPsychology: [...apPsychologyExamBatchQuestions, ...apPsychologyWorkoutGeneratedQuestions],
  'col-sat-reading-and-writing': openSatReadingWritingQuestions,
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
    ...openTriviaAnimalBiologyQuestions,
    ...openTriviaMolecularBiologyQuestions,
    ...openTriviaApBiologyScienceBatch2Questions,
    ...apBiologyAnimalEcologyBatchQuestions,
    ...apBiologyExamBatchQuestions,
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
    ...openTriviaChemistryQuestions,
    ...openTriviaChemistryExtensionQuestions,
    ...apChemistryExamBatchQuestions,
    ...apChemistryWorkoutGeneratedQuestions,
  ],
  apPhysics: [
    ...makeHighSchoolPhysicsNGSSQuiz(),
    makeSimpleQuestion(13301, 'AP', 'AP Physics Dock', 'Kinematics basics',
      'An object starts from rest and accelerates at 2 m/s^2 for 4 seconds. Final velocity?',
      '8 m/s',
      [
        ['2 m/s', 'That is the acceleration value, not the final velocity.', 'Use v = u + at.'],
        ['4 m/s', 'That uses time only and ignores acceleration magnitude.', 'Multiply acceleration by time from rest.'],
        ['16 m/s', 'That applies the factor twice.', 'Single-step substitution gives 0 + 2*4.'],
      ]),
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
    ...openTriviaPhysicsQuestions,
    ...openTriviaPhysicsExtensionQuestions,
    ...apPhysicsExamBatchQuestions,
    ...apPhysicsWorkoutGeneratedQuestions,
    ...(buildOpenStaxQuestionCatalog()['openstax'] || []),
    ...(buildWikibooksQuestionCatalog()['mathematics_extensions'] || []),
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
    ...openTriviaLiteratureQuestions,
    ...openTriviaLiteratureCanonQuestions,
    ...openTriviaLiteraryFormsShakespeareQuestions,
    ...openTriviaLiteratureModernExtensionQuestions,
    ...openTriviaLiteratureCanonicalOpeningsShakespeareQuestions,
    ...openTriviaLiteraturePoetsAuthorsQuestions,
    ...openTriviaLiteratureShakespeareModernistQuestions,
    ...openTriviaLiteraturePoetryIdentityQuestions,
    ...openTriviaLiteratureFinalIdentityQuestions,
    ...apEnglishExamBatchQuestions,
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
    ...openTriviaHistoryQuestions,
    ...openTriviaWorldHistoryExtensionQuestions,
    ...openTriviaUsHistoryExtensionQuestions,
    ...openTriviaHistoryWwiiColdWarQuestions,
    ...openTriviaWorldHistoryFoundationsQuestions,
    ...openTriviaModernHistoryColdWarQuestions,
    ...openTriviaUsHistoryAnchorQuestions,
    ...openTriviaWorldHistoryAnchorQuestions,
    ...openTriviaWorldHistoryFinalTwoQuestions,
    ...apHistoryExamBatchQuestions,
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
    ...apEconomicsExamBatchQuestions,
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
      'A Boolean value can be:',
      'True or false',
      [
        ['Only whole numbers', 'Booleans are logical values, not just numbers.', 'Think yes/no states.'],
        ['Any decimal between 0 and 1', 'That is not the usual programming definition.', 'Boolean means two-valued logic.'],
        ['A list of strings', 'That is a collection, not a Boolean.', 'Use the data type that matches condition checks.'],
      ]),
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
    ...openDsaFormalLanguagesQuestions,
    ...openDsaAlgorithmQuestions,
    ...openTriviaApcsExtensionQuestions,
    ...apComputerScienceExamBatchQuestions,
    ...apComputerScienceWorkoutGeneratedQuestions,
  ],
  alevelMaths: [
    makeSimpleQuestion(14001, 'A-level', 'A-level Maths Dock', 'Quadratic roots',
      'For x^2 - 5x + 6 = 0, what are the roots?',
      'x = 2 and x = 3',
      [
        ['x = -2 and x = -3', 'Signs are incorrect for this factorization.', 'Factor as (x - 2)(x - 3).'],
        ['x = 1 and x = 6', 'Those values multiply to 6 but do not sum to 5 in the right way for roots.', 'Check both product and middle term structure.'],
        ['x = 0 and x = 6', 'That does not satisfy the equation.', 'Substitute back to verify roots.'],
      ]),
    makeSimpleQuestion(14002, 'A-level', 'A-level Maths Reef', 'Function notation',
      'If f(x) = 2x + 5, what is f(4)?',
      '13',
      [
        ['8', 'That doubles x but ignores the +5.', 'Substitute fully, then simplify.'],
        ['9', 'That adds 5 incorrectly after substitution.', 'Compute 2*4 first, then add 5.'],
        ['20', 'That multiplies instead of evaluating the function correctly.', 'Follow the formula step by step.'],
      ]),
    makeSimpleQuestion(14003, 'A-level', 'A-level Maths Cove', 'Coordinate gradient',
      'What is the gradient between (1, 2) and (3, 6)?',
      '2',
      [
        ['4', 'That uses vertical change only.', 'Gradient is rise over run.'],
        ['1/2', 'That reverses the ratio.', 'Use change in y divided by change in x.'],
        ['8', 'That adds coordinates instead of comparing them.', 'Subtract corresponding coordinates first.'],
      ]),
    makeSimpleQuestion(14004, 'A-level', 'A-level Maths Lagoon', 'Indices rule',
      'What is x^3 x x^2?',
      'x^5',
      [
        ['x^6', 'That multiplies exponents instead of adding them.', 'Same base multiplied means add exponents.'],
        ['x^1', 'That cancels incorrectly.', 'There is no division here.'],
        ['2x^3', 'That treats powers like coefficients.', 'Keep coefficient and exponent rules separate.'],
      ]),
  ],
  alevelBiology: [
    makeSimpleQuestion(14101, 'A-level', 'A-level Biology Dock', 'Osmosis',
      'Osmosis is the movement of:',
      'Water through a partially permeable membrane',
      [
        ['Protein through a cell wall', 'Osmosis is about water, not protein transport.', 'Focus on water and membrane.'],
        ['Glucose by active transport only', 'That is a different transport mechanism.', 'Separate osmosis from active transport.'],
        ['DNA between cells', 'That is not osmosis.', 'Use the core water-membrane definition.'],
      ]),
    makeSimpleQuestion(14102, 'A-level', 'A-level Biology Reef', 'Enzyme effect',
      'What do enzymes do in cells?',
      'Speed up chemical reactions',
      [
        ['Store all genetic information', 'DNA stores genetic information, not enzymes.', 'Enzymes are biological catalysts.'],
        ['Destroy all substrates', 'They act on substrates, but the key role is catalysis.', 'Think reaction rate, not destruction.'],
        ['Make energy out of nothing', 'They help reactions but do not violate energy conservation.', 'Stay with catalyst function.'],
      ]),
    makeSimpleQuestion(14103, 'A-level', 'A-level Biology Cove', 'DNA location',
      'In eukaryotic cells, DNA is mainly found in the:',
      'Nucleus',
      [
        ['Cell membrane', 'The membrane encloses the cell but does not mainly store DNA.', 'Match structure to function.'],
        ['Ribosome', 'Ribosomes make proteins.', 'Do not mix protein synthesis with DNA storage.'],
        ['Vacuole', 'Vacuoles serve storage roles, not main DNA storage.', 'The nucleus is the primary location.'],
      ]),
    makeSimpleQuestion(14104, 'A-level', 'A-level Biology Lagoon', 'Gas exchange',
      'The main function of alveoli in the lungs is:',
      'Gas exchange',
      [
        ['Blood cell production', 'That happens in bone marrow, not alveoli.', 'Alveoli exchange oxygen and carbon dioxide.'],
        ['Digestion of food', 'That belongs to the digestive system.', 'Match organ structure to system function.'],
        ['Nerve transmission', 'That belongs to the nervous system.', 'Stay within respiration.'],
      ]),
  ],
  alevelChemistry: [
    makeSimpleQuestion(14201, 'A-level', 'A-level Chemistry Dock', 'Mole concept',
      'What is one mole?',
      '6.022 x 10^23 particles of a substance',
      [
        ['The mass of one gram exactly', 'One mole is a counting unit, not always one gram.', 'Molar mass links grams to moles by substance.'],
        ['The number of atoms in one molecule', 'Atoms per molecule depend on chemical formula.', 'A mole counts entities, whatever those entities are.'],
        ['A fixed volume of any gas at any condition', 'Gas volume depends on temperature and pressure.', 'Use particle count as the core definition.'],
      ]),
    makeSimpleQuestion(14202, 'A-level', 'A-level Chemistry Reef', 'Acid definition',
      'An acid is commonly described as a substance that:',
      'Releases H+ ions in solution',
      [
        ['Always contains oxygen', 'Many acids do not.', 'Use the ion-based definition.'],
        ['Only reacts with metals', 'Acids can do that, but that is not the core definition.', 'Define first, then infer behavior.'],
        ['Must be purple in color', 'Color is not part of the definition.', 'Ignore irrelevant sensory details.'],
      ]),
    makeSimpleQuestion(14203, 'A-level', 'A-level Chemistry Cove', 'Bond type',
      'Ionic bonding usually involves:',
      'Transfer of electrons',
      [
        ['Sharing electrons equally', 'That is covalent language.', 'Ionic bonding is transfer, not sharing.'],
        ['No electrons at all', 'Bonding depends on electron behavior.', 'Use the transfer model.'],
        ['Only neutrons moving between atoms', 'Neutrons are not transferred in bonding.', 'Keep subatomic roles straight.'],
      ]),
    makeSimpleQuestion(14204, 'A-level', 'A-level Chemistry Lagoon', 'Exothermic idea',
      'An exothermic reaction:',
      'Releases energy to the surroundings',
      [
        ['Always freezes the container', 'Temperature effects vary and that is not the definition.', 'Focus on energy flow direction.'],
        ['Absorbs energy from the surroundings', 'That is endothermic.', 'Exothermic means energy out.'],
        ['Creates matter from nothing', 'That is not chemistry.', 'Stay with energy transfer.'],
      ]),
  ],
  alevelPhysics: [
    makeSimpleQuestion(14301, 'A-level', 'A-level Physics Dock', 'Kinematics basics',
      'An object accelerates uniformly from rest at 2 m/s^2 for 4 seconds. Final velocity?',
      '8 m/s',
      [
        ['2 m/s', 'That is the acceleration value, not final velocity.', 'Use v = u + at.'],
        ['4 m/s', 'That uses time only and ignores acceleration magnitude.', 'Multiply acceleration by time from rest.'],
        ['16 m/s', 'That over-multiplies by applying the rule twice.', 'Single-step substitution gives v = 0 + 2*4.'],
      ]),
    makeSimpleQuestion(14302, 'A-level', 'A-level Physics Reef', 'Power equation',
      'Electrical power is commonly calculated as:',
      'P = IV',
      [
        ['F = ma', 'That is Newton’s second law.', 'Use the electricity formula.'],
        ['v = f lambda', 'That is a wave relation.', 'Match the equation to the topic.'],
        ['E = mc^2', 'That is relativity, not basic circuit power.', 'Stay inside the unit being tested.'],
      ]),
    makeSimpleQuestion(14303, 'A-level', 'A-level Physics Cove', 'Wave property',
      'Frequency is measured in:',
      'Hertz',
      [
        ['Newtons', 'Newtons measure force.', 'Hertz measures cycles per second.'],
        ['Joules', 'Joules measure energy.', 'Choose the unit tied to oscillation rate.'],
        ['Volts', 'Volts measure electric potential difference.', 'Do not mix units across topics.'],
      ]),
    makeSimpleQuestion(14304, 'A-level', 'A-level Physics Lagoon', 'Momentum equation',
      'Momentum is given by:',
      'p = mv',
      [
        ['p = ma', 'That mixes momentum with acceleration.', 'Momentum depends on mass and velocity.'],
        ['p = F/t', 'That is not the standard definition.', 'Start from mass times velocity.'],
        ['p = V/I', 'That belongs to resistance calculations.', 'Keep formulas domain-specific.'],
      ]),
  ],
  alevelEconomics: [
    makeSimpleQuestion(14401, 'A-level', 'A-level Economics Dock', 'Price elasticity',
      'If demand changes a lot when price changes slightly, demand is:',
      'Price elastic',
      [
        ['Price inelastic', 'Inelastic demand changes little with price changes.', 'Large responsiveness means elastic.'],
        ['Perfectly fixed', 'Perfectly fixed means no response.', 'The prompt says demand changes a lot.'],
        ['Unit free', 'This is not an elasticity category.', 'Use the standard elastic/inelastic classification.'],
      ]),
    makeSimpleQuestion(14402, 'A-level', 'A-level Economics Reef', 'Opportunity cost',
      'Opportunity cost is:',
      'The next best alternative forgone',
      [
        ['Only the cash price paid', 'Opportunity cost is broader than money.', 'Include what you give up by choosing one option.'],
        ['Any profit you make later', 'Profit is different from sacrificed alternative value.', 'Stay with forgone choice.'],
        ['A mandatory tax', 'Taxes are not the general definition.', 'Use the broader economic term.'],
      ]),
    makeSimpleQuestion(14403, 'A-level', 'A-level Economics Cove', 'Inflation idea',
      'Inflation means:',
      'A general rise in prices over time',
      [
        ['All wages doubling instantly', 'Wages may move differently.', 'Inflation is about the general price level.'],
        ['Every good becoming scarce', 'Scarcity and inflation are related but not identical.', 'Use the price-level definition.'],
        ['Interest rates always falling', 'Interest rates can move either way.', 'Do not confuse policy reaction with definition.'],
      ]),
    makeSimpleQuestion(14404, 'A-level', 'A-level Economics Lagoon', 'Market equilibrium',
      'Market equilibrium happens where:',
      'Quantity demanded equals quantity supplied',
      [
        ['Demand is zero', 'That is not equilibrium by itself.', 'Equilibrium balances both sides of the market.'],
        ['Prices never change again', 'Equilibrium can shift when conditions change.', 'It is a balancing point, not permanent stillness.'],
        ['Supply is always larger than demand', 'That would imply surplus, not equilibrium.', 'Use equality of quantity supplied and demanded.'],
      ]),
  ],
  alevelHistory: [
    makeSimpleQuestion(14501, 'A-level', 'A-level History Dock', 'Source evaluation',
      'When evaluating a historical source, what matters most first?',
      'Who created it, when, and for what purpose',
      [
        ['How long the source is', 'Length does not determine usefulness.', 'Origin and purpose come first.'],
        ['Whether the handwriting is neat', 'Presentation is secondary.', 'Start with provenance and motive.'],
        ['Whether it agrees with your first opinion', 'Agreement does not make a source stronger.', 'Evaluate source context before interpretation.'],
      ]),
    makeSimpleQuestion(14502, 'A-level', 'A-level History Reef', 'Argument structure',
      'A strong history essay paragraph usually begins with:',
      'A clear analytical point',
      [
        ['A random fact', 'Facts need to support an argument.', 'Lead with the point, then support it.'],
        ['A long quotation', 'Quotations work better after a point is established.', 'Argument first, evidence second.'],
        ['The final conclusion of the essay', 'That belongs at the end.', 'Build the case step by step.'],
      ]),
    makeSimpleQuestion(14503, 'A-level', 'A-level History Cove', 'Causation',
      'Good causation analysis in history should:',
      'Explain relative importance and how causes connect',
      [
        ['List causes without explanation', 'Listing is weaker than analysis.', 'Show how causes interact and which matter most.'],
        ['Treat all causes as equal automatically', 'Strong essays often rank or weigh causes.', 'Relative importance matters.'],
        ['Avoid evidence to save time', 'Analysis still needs support.', 'Use evidence to justify the causal claim.'],
      ]),
    makeSimpleQuestion(14504, 'A-level', 'A-level History Lagoon', 'Continuity and change',
      'A continuity-and-change question asks you to identify:',
      'What stayed the same and what changed over time',
      [
        ['Only dates in order', 'Chronology helps, but the question asks for pattern analysis.', 'Compare persistence with change.'],
        ['Only one dramatic event', 'The task is broader than a single event.', 'Track patterns across time.'],
        ['A fictional version of events', 'History analysis uses evidence, not invention.', 'Stay with real developments over time.'],
      ]),
  ],
  alevelEnglish: [
    makeSimpleQuestion(14601, 'A-level', 'A-level English Dock', 'Theme',
      'A theme in literature is:',
      'A central idea explored through the text',
      [
        ['The cover design', 'That is presentation, not literary meaning.', 'Themes are about ideas and insights.'],
        ['The order of page numbers', 'That is formatting, not interpretation.', 'Keep the focus on meaning.'],
        ['The author’s address', 'Biographical detail is not theme.', 'Theme comes from the text’s ideas.'],
      ]),
    makeSimpleQuestion(14602, 'A-level', 'A-level English Reef', 'Close reading',
      'Close reading means paying careful attention to:',
      'Language, structure, and detail in the text',
      [
        ['Only the title', 'The whole text matters.', 'Read specific wording and construction carefully.'],
        ['Only your first emotional reaction', 'Response matters, but analysis needs textual detail.', 'Ground interpretation in the words on the page.'],
        ['The movie version instead of the text', 'That swaps the source entirely.', 'Stay with the text itself.'],
      ]),
    makeSimpleQuestion(14603, 'A-level', 'A-level English Cove', 'Characterization',
      'Characterization is how a writer:',
      'Builds and reveals a character',
      [
        ['Prints the page', 'That is production, not writing craft.', 'Characterization shapes people in the story.'],
        ['Solves algebra equations', 'That belongs to maths, not literature.', 'Stay with literary technique.'],
        ['Names the chapters only', 'Chapter titles can help, but characterization is broader.', 'Think of actions, speech, and description.'],
      ]),
    makeSimpleQuestion(14604, 'A-level', 'A-level English Lagoon', 'Comparison skill',
      'In a comparison essay, the best structure usually:',
      'Links similarities and differences to a clear argument',
      [
        ['Summarizes one text fully, then stops', 'Comparison needs both texts engaged.', 'Keep the central argument active across both works.'],
        ['Ignores differences completely', 'Differences often matter as much as similarities.', 'Compare and contrast with purpose.'],
        ['Lists quotations without analysis', 'Quotation alone is not enough.', 'Use evidence to support comparison points.'],
      ]),
  ],
  alevelComputerScience: [
    makeSimpleQuestion(14701, 'A-level', 'A-level CS Dock', 'Algorithm idea',
      'An algorithm is best described as:',
      'A step-by-step method for solving a problem',
      [
        ['A single random guess', 'Algorithms follow defined steps.', 'Think procedure, not guesswork.'],
        ['A picture only', 'Diagrams can help, but the algorithm is the method itself.', 'Focus on process.'],
        ['The computer hardware case', 'Hardware and algorithms are different things.', 'Algorithm refers to logic, not equipment.'],
      ]),
    makeSimpleQuestion(14702, 'A-level', 'A-level CS Reef', 'Binary digits',
      'Binary is a number system based on:',
      '2',
      [
        ['10', 'That is decimal.', 'Binary uses only 0 and 1.'],
        ['16', 'That is hexadecimal.', 'Match the base to the system name.'],
        ['8', 'That is octal.', 'Binary is base 2.'],
      ]),
    makeSimpleQuestion(14703, 'A-level', 'A-level CS Cove', 'Variable role',
      'A variable in a program is used to:',
      'Store a value that can be referenced or changed',
      [
        ['Print the monitor', 'Variables do not control hardware printing.', 'Think storage in a program.'],
        ['Guarantee the program is bug-free', 'Variables are useful, but they do not guarantee correctness.', 'Separate language features from quality outcomes.'],
        ['Delete the operating system', 'That is unrelated and absurd.', 'Use the programming definition.'],
      ]),
    makeSimpleQuestion(14704, 'A-level', 'A-level CS Lagoon', 'Conditionals',
      'A conditional statement is mainly for:',
      'Making decisions based on whether a condition is true',
      [
        ['Drawing graphics automatically', 'Conditionals are about choice, not graphics specifically.', 'Think if/else logic.'],
        ['Repeating code forever', 'That is loop behavior, not conditionals.', 'Conditionals choose between paths.'],
        ['Turning text into sound', 'That is unrelated to control flow.', 'Use the decision-making definition.'],
      ]),
  ],
    basic_javascript: basicJavascript,
    basic_html_and_html5: basicHtml,
    ...buildOpenStaxQuestionCatalog(),
    ...buildWikibooksQuestionCatalog(),
  }

  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, topUpHighAgentGeneratedTrack(trackId, questions)),
    ]),
  )
}
