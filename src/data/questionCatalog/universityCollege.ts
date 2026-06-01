import type { Question } from './types'
import { makeQuestionBank } from './base'
import {
  makeColCalculusABQuiz,
  makeColAPStatisticsQuiz,
  makeColCollegeAlgebraQuiz,
  makeColCalculusBCQuiz,
} from './universityBuilders'
import { makeColPrecalculusQuiz } from './highBuilders'
import {
  makeIndiaClass11MathQuiz,
  makeIndiaClass12MathQuiz,
} from './colGapBuilders'
import { openIntroImsImportedQuestions } from './openIntroImsImported'
import { openIntroStatsAdditionalImportedQuestions } from './openIntroStatsAdditionalImported'
import { openIntroStatsSlidesQuestions } from './openIntroStatsSlidesImported'
import { mathDiagnosticsGeneratedQuestions } from './mathDiagnosticsGenerated'
import { collegeAlgebraWorkoutGeneratedQuestions } from './collegeAlgebraWorkoutGenerated'
import { statisticsReasoningWorkoutGeneratedQuestions } from './statisticsReasoningWorkoutGenerated'
import { calculusWorkoutGeneratedQuestions } from './calculusWorkoutGenerated'
import { linearAlgebraWorkoutGeneratedQuestions } from './linearAlgebraWorkoutGenerated'
import { differentialEquationsWorkoutGeneratedQuestions } from './differentialEquationsWorkoutGenerated'
import { multivariableCalculusWorkoutGeneratedQuestions } from './multivariableCalculusWorkoutGenerated'
import { apCalculusBcNumbasBatchQuestions } from './apCalculusBcNumbasBatch'
import {
  numbasWebworkAlgebraQuestions,
  numbasWebworkCalculusQuestions,
  numbasWebworkLinearAlgebraQuestions,
  numbasWebworkStatisticsQuestions,
} from './numbasWebworkMathImported'
import {
  numbasWebworkAdditionalAlgebraQuestions,
  numbasWebworkAdditionalCalculusQuestions,
  numbasWebworkAdditionalLinearAlgebraQuestions,
  numbasWebworkAdditionalStatisticsQuestions,
  numbasWebworkAdditionalTrigonometryQuestions,
} from './numbasWebworkMathAdditionalImported'
import {
  numbasWebworkThirdAlgebraQuestions,
  numbasWebworkThirdCalculusQuestions,
  numbasWebworkThirdLinearAlgebraQuestions,
  numbasWebworkThirdStatisticsQuestions,
  numbasWebworkThirdTrigonometryQuestions,
} from './numbasWebworkMathThirdImported'

function universityMathLesson(question: Question): string {
  const title = question.title || question.chapter || 'this math problem'
  const answer = question.solution || 'the correct answer'
  return `This problem is practicing a reusable math move. For "${title}", the key result is: ${answer}. Name the rule first, work cleanly through the algebra or calculation, and check the final answer against the requested form.`
}

function rewriteUniversityMathPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (prompt.endsWith('?')) return question.prompt
  if (prompt.endsWith(':')) {
    return `${prompt} Which answer correctly completes this math idea?`
  }
  return `${prompt} What is the correct answer?`
}

function enrichUniversityMathQuestionQuality(catalog: Record<string, Question[]>): Record<string, Question[]> {
  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      questions.map((question) => ({
        ...question,
        prompt: rewriteUniversityMathPrompt(question),
        lesson: question.lesson || universityMathLesson(question),
      })),
    ]),
  )
}

function normalizeApStatisticsChapter(question: Question): Question {
  const chapter = question.chapter.trim()
  const context = `${question.title} ${question.prompt}`.toLowerCase()
  let mappedChapter = chapter

  switch (chapter) {
    case 'Unit 1: Exploring categorical data':
    case 'Unit 2: Displaying and describing quantitative data':
    case 'Unit 3: Summary statistics':
    case 'Unit 4: Percentiles, z-scores, and the normal distribution':
    case 'Exploratory Data Analysis':
    case 'Exploring Data':
    case 'Introduction to Data':
    case 'Variables':
    case 'Summary Statistics':
    case 'Normal Distribution':
    case 'Distributions':
      mappedChapter = 'Chapter 1: Exploring One-Variable Data'
      break
    case 'Unit 5: Exploring two-variable quantitative data':
      mappedChapter = 'Chapter 2: Exploring Two-Variable Data'
      break
    case 'Unit 6: Collecting data':
    case 'Data and Study Design':
    case 'Data Basics and Study Design':
      mappedChapter = 'Chapter 3: Collecting Data'
      break
    case 'Unit 7: Probability':
    case 'Unit 8: Random variables and probability distributions':
    case 'Probability':
    case 'Probability Density':
    case 'Independent Events':
      mappedChapter = 'Chapter 4: Probability and Random Variables'
      break
    case 'Unit 9: Sampling distributions':
    case 'Sampling Distributions':
      mappedChapter = 'Chapter 5: Sampling Distributions'
      break
    case 'Unit 10: Inference for categorical data: Proportions':
    case 'Inference for Categorical Data':
      mappedChapter = 'Chapter 6: Inference for Proportions'
      break
    case 'Unit 11: Inference for quantitative data: Means':
    case 'Inference for Means':
    case 'Inference for Numerical Data':
    case 'Paired Tests':
    case 'ANOVA':
      mappedChapter = 'Chapter 7: Inference for Means'
      break
    case 'Unit 12: Inference for categorical data: Chi-square':
    case 'Unit 13: Inference for quantitative data: slopes':
    case 'Linear Regression':
    case 'Multiple and Logistic Regression':
    case 'Multiple Regression':
      mappedChapter = 'Chapter 8: Chi-Square and Inference for Regression'
      break
    case 'Foundations of Inference':
    case 'Foundations for Inference':
    case 'Confidence Intervals':
    case 'Hypothesis Tests':
      mappedChapter = context.includes('proportion') || context.includes('categorical')
        ? 'Chapter 6: Inference for Proportions'
        : 'Chapter 7: Inference for Means'
      break
  }

  return mappedChapter === question.chapter ? question : { ...question, chapter: mappedChapter }
}

export function buildUniversityCollegeQuestionCatalog(): Record<string, Question[]> {
  const calculusAB = makeColCalculusABQuiz()
  const apStatistics = [
    ...makeColAPStatisticsQuiz(),
    ...openIntroImsImportedQuestions,
    ...openIntroStatsAdditionalImportedQuestions,
    ...openIntroStatsSlidesQuestions,
    ...statisticsReasoningWorkoutGeneratedQuestions,
    ...numbasWebworkStatisticsQuestions,
    ...numbasWebworkAdditionalStatisticsQuestions,
    ...numbasWebworkThirdStatisticsQuestions,
  ].map(normalizeApStatisticsChapter)
  const collegeAlgebra = makeColCollegeAlgebraQuiz()
  const calculusBC = makeColCalculusBCQuiz()
  const precalculus = makeColPrecalculusQuiz()
  const class11Math = makeIndiaClass11MathQuiz()
  const class12Math = makeIndiaClass12MathQuiz()
  return enrichUniversityMathQuestionQuality({
  'col-class-11-math': class11Math,
  'col-class-12-math': class12Math,
  'col-college-algebra': [...collegeAlgebra, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  'col-eureka-math-precalculus': [...precalculus, ...numbasWebworkAdditionalTrigonometryQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  class11Math,
  class12Math,
  apCalculusAB: [...calculusAB, ...calculusWorkoutGeneratedQuestions, ...numbasWebworkCalculusQuestions, ...numbasWebworkAdditionalCalculusQuestions, ...numbasWebworkThirdCalculusQuestions],
  apStatistics,
  // introDataScience: pre-launch slimmed pool. Distinct from apStatistics by dropping the
  // numbasWebwork pure-math statistics problem sets (those stay on apStatistics for AP rubric
  // practice) and keeping the framed EDA / study-design / inference content from the
  // OpenIntro family plus the hand-authored statisticsReasoning workout. Chapters 1-3, 6-8 of
  // the data_science syllabus (notebooks, Python, Pandas, SQL, ML, ethics) remain unauthored
  // and are a Wave 5 backlog item.
  introDataScience: [
    ...openIntroImsImportedQuestions,
    ...openIntroStatsAdditionalImportedQuestions,
    ...openIntroStatsSlidesQuestions,
    ...statisticsReasoningWorkoutGeneratedQuestions,
  ],
  mathDiagnostics: mathDiagnosticsGeneratedQuestions,
  collegeAlgebra: [...collegeAlgebra, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  collegeAlgebraWorkout: [...collegeAlgebraWorkoutGeneratedQuestions, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  apCalculusBc: [...calculusBC, ...apCalculusBcNumbasBatchQuestions, ...numbasWebworkCalculusQuestions, ...numbasWebworkAdditionalCalculusQuestions, ...numbasWebworkThirdCalculusQuestions],
  differentialEquations: differentialEquationsWorkoutGeneratedQuestions,
  multivariableCalculus: multivariableCalculusWorkoutGeneratedQuestions,
  linearAlgebra: [
    ...makeQuestionBank('University', [
    { id: 16001, chapter: 'Vectors, Systems, and Row Reduction', title: 'Vector length', prompt: 'What does the magnitude of a vector describe?', correct: 'Its size or length', wrong: [['The angle the vector makes with the x-axis', 'That is the vector\'s direction, a separate quantity.', 'Think geometric size.'], ['Only the direction it points', 'Direction matters, but magnitude is the size part.', 'Separate size from direction.'], ['The number of equations in a system', "That is unrelated to a vector's magnitude.", 'Stay with vector geometry.']] },
    { id: 16002, chapter: 'Matrices, Linear Maps, and Invertibility', title: 'Matrix role', prompt: 'A matrix is most useful for organizing:', correct: 'Numbers in rows and columns', wrong: [['Free-form paragraphs of text', 'Matrices are numerical structures, not prose containers.', 'Think rows and columns.'], ['A list with no order', 'Matrices have explicit arrangement.', 'Structure matters in linear algebra.'], ['Continuous functions on the real line', 'Functions can be inputs to matrices, but matrices themselves are rectangular numerical arrays.', 'Use the array-of-values idea.']] },
    { id: 16003, chapter: 'Matrices, Linear Maps, and Invertibility', title: 'Identity matrix', prompt: 'Multiplying by the identity matrix usually does what?', correct: 'Leaves the vector or matrix unchanged', wrong: [['Turns everything into zero', 'That would be a zero matrix effect.', 'Identity acts like multiplying by 1.'], ['Swaps every row automatically', 'Identity does not perform row swaps.', 'Think neutral element.'], ['Always changes the dimensions', 'Identity preserves compatible dimensions.', 'No change is the key idea.']] },
    { id: 16004, chapter: 'Subspaces, Bases, Dimension, and Rank', title: 'Independent vectors', prompt: 'Linearly independent vectors are vectors that:', correct: 'Cannot be built from each other by linear combination', wrong: [['Always point the same way', 'That usually suggests dependence, not independence.', 'Independence means none is redundant.'], ['Must all have length 1', 'Unit length is not required.', 'This is about combination, not normalization.'], ['Can only exist in 2D', 'Independence exists in many dimensions.', 'Do not limit the idea to one space.']] },
    ]),
    ...linearAlgebraWorkoutGeneratedQuestions,
    ...numbasWebworkLinearAlgebraQuestions,
    ...numbasWebworkAdditionalLinearAlgebraQuestions,
    ...numbasWebworkThirdLinearAlgebraQuestions,
  ],
  })
}
