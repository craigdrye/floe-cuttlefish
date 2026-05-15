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
import { imsTutorialsImportedQuestions } from './imsTutorialsImported'
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

export function buildUniversityCollegeQuestionCatalog(): Record<string, Question[]> {
  const calculusAB = makeColCalculusABQuiz()
  const apStatistics = makeColAPStatisticsQuiz()
  const collegeAlgebra = makeColCollegeAlgebraQuiz()
  const calculusBC = makeColCalculusBCQuiz()
  const precalculus = makeColPrecalculusQuiz()
  const class11Math = makeIndiaClass11MathQuiz()
  const class12Math = makeIndiaClass12MathQuiz()
  return {
  'col-class-11-math': class11Math,
  'col-class-12-math': class12Math,
  'col-college-algebra': [...collegeAlgebra, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  'col-eureka-math-precalculus': [...precalculus, ...numbasWebworkAdditionalTrigonometryQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  class11Math,
  class12Math,
  apCalculusAB: [...calculusAB, ...calculusWorkoutGeneratedQuestions, ...numbasWebworkCalculusQuestions, ...numbasWebworkAdditionalCalculusQuestions, ...numbasWebworkThirdCalculusQuestions],
  apStatistics: [
    ...apStatistics,
    ...imsTutorialsImportedQuestions,
    ...openIntroImsImportedQuestions,
    ...openIntroStatsAdditionalImportedQuestions,
    ...openIntroStatsSlidesQuestions,
    ...statisticsReasoningWorkoutGeneratedQuestions,
    ...numbasWebworkStatisticsQuestions,
    ...numbasWebworkAdditionalStatisticsQuestions,
    ...numbasWebworkThirdStatisticsQuestions,
  ],
  introDataScience: [
    ...imsTutorialsImportedQuestions,
    ...openIntroImsImportedQuestions,
    ...openIntroStatsAdditionalImportedQuestions,
    ...openIntroStatsSlidesQuestions,
    ...statisticsReasoningWorkoutGeneratedQuestions,
    ...numbasWebworkStatisticsQuestions,
    ...numbasWebworkAdditionalStatisticsQuestions,
    ...numbasWebworkThirdStatisticsQuestions,
  ],
  mathDiagnostics: mathDiagnosticsGeneratedQuestions,
  collegeAlgebra: [...collegeAlgebra, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  collegeAlgebraWorkout: [...collegeAlgebraWorkoutGeneratedQuestions, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  apCalculusBc: [...calculusBC, ...apCalculusBcNumbasBatchQuestions, ...numbasWebworkCalculusQuestions, ...numbasWebworkAdditionalCalculusQuestions, ...numbasWebworkThirdCalculusQuestions],
  differentialEquations: differentialEquationsWorkoutGeneratedQuestions,
  multivariableCalculus: multivariableCalculusWorkoutGeneratedQuestions,
  linearAlgebra: [
    ...makeQuestionBank('University', [
    { id: 16001, chapter: 'Linear Algebra Dock', title: 'Vector length', prompt: 'What does the magnitude of a vector describe?', correct: 'Its size or length', wrong: [['Its color only', 'Vectors are mathematical objects, not colored by definition.', 'Think geometric size.'], ['Only the direction it points', 'Direction matters, but magnitude is the size part.', 'Separate size from direction.'], ['The number of equations in a system', 'That is unrelated to a vector’s magnitude.', 'Stay with vector geometry.']] },
    { id: 16002, chapter: 'Linear Algebra Reef', title: 'Matrix role', prompt: 'A matrix is most useful for organizing:', correct: 'Numbers in rows and columns', wrong: [['Only paragraphs of text', 'Matrices are numerical structures, not prose containers.', 'Think rows and columns.'], ['A list with no order', 'Matrices have explicit arrangement.', 'Structure matters in linear algebra.'], ['Circular shapes', 'That is geometry, not the main matrix definition.', 'Use the array-of-values idea.']] },
    { id: 16003, chapter: 'Linear Algebra Cove', title: 'Identity matrix', prompt: 'Multiplying by the identity matrix usually does what?', correct: 'Leaves the vector or matrix unchanged', wrong: [['Turns everything into zero', 'That would be a zero matrix effect.', 'Identity acts like multiplying by 1.'], ['Swaps every row automatically', 'Identity does not perform row swaps.', 'Think neutral element.'], ['Always changes the dimensions', 'Identity preserves compatible dimensions.', 'No change is the key idea.']] },
    { id: 16004, chapter: 'Linear Algebra Lagoon', title: 'Independent vectors', prompt: 'Linearly independent vectors are vectors that:', correct: 'Cannot be built from each other by linear combination', wrong: [['Always point the same way', 'That usually suggests dependence, not independence.', 'Independence means none is redundant.'], ['Must all have length 1', 'Unit length is not required.', 'This is about combination, not normalization.'], ['Can only exist in 2D', 'Independence exists in many dimensions.', 'Do not limit the idea to one space.']] },
    ]),
    ...linearAlgebraWorkoutGeneratedQuestions,
    ...numbasWebworkLinearAlgebraQuestions,
    ...numbasWebworkAdditionalLinearAlgebraQuestions,
    ...numbasWebworkThirdLinearAlgebraQuestions,
  ],
  }
}
