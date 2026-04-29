import type { Question } from './types'
import { makeQuestionBank } from './base'
import {
  makeKhanCalculusABQuiz,
  makeKhanAPStatisticsQuiz,
  makeKhanCollegeAlgebraQuiz,
  makeKhanCalculusBCQuiz,
} from './universityBuilders'
import { makeKhanPrecalculusQuiz } from './highBuilders'
import {
  makeIndiaClass11MathQuiz,
  makeIndiaClass12MathQuiz,
} from './khanGapBuilders'

export function buildUniversityCollegeQuestionCatalog(): Record<string, Question[]> {
  return {
  'khan-class-11-math': makeIndiaClass11MathQuiz(),
  'khan-class-12-math': makeIndiaClass12MathQuiz(),
  'khan-ap-college-calculus-ab': makeKhanCalculusABQuiz(),
  'khan-ap-college-statistics': makeKhanAPStatisticsQuiz(),
  'khan-college-algebra': makeKhanCollegeAlgebraQuiz(),
  'khan-ap-college-calculus-bc': makeKhanCalculusBCQuiz(),
  'khan-eureka-math-precalculus': makeKhanPrecalculusQuiz(),
  linearAlgebra: makeQuestionBank('University', [
    { id: 16001, chapter: 'Linear Algebra Dock', title: 'Vector length', prompt: 'What does the magnitude of a vector describe?', correct: 'Its size or length', wrong: [['Its color only', 'Vectors are mathematical objects, not colored by definition.', 'Think geometric size.'], ['Only the direction it points', 'Direction matters, but magnitude is the size part.', 'Separate size from direction.'], ['The number of equations in a system', 'That is unrelated to a vector’s magnitude.', 'Stay with vector geometry.']] },
    { id: 16002, chapter: 'Linear Algebra Reef', title: 'Matrix role', prompt: 'A matrix is most useful for organizing:', correct: 'Numbers in rows and columns', wrong: [['Only paragraphs of text', 'Matrices are numerical structures, not prose containers.', 'Think rows and columns.'], ['A list with no order', 'Matrices have explicit arrangement.', 'Structure matters in linear algebra.'], ['Circular shapes', 'That is geometry, not the main matrix definition.', 'Use the array-of-values idea.']] },
    { id: 16003, chapter: 'Linear Algebra Cove', title: 'Identity matrix', prompt: 'Multiplying by the identity matrix usually does what?', correct: 'Leaves the vector or matrix unchanged', wrong: [['Turns everything into zero', 'That would be a zero matrix effect.', 'Identity acts like multiplying by 1.'], ['Swaps every row automatically', 'Identity does not perform row swaps.', 'Think neutral element.'], ['Always changes the dimensions', 'Identity preserves compatible dimensions.', 'No change is the key idea.']] },
    { id: 16004, chapter: 'Linear Algebra Lagoon', title: 'Independent vectors', prompt: 'Linearly independent vectors are vectors that:', correct: 'Cannot be built from each other by linear combination', wrong: [['Always point the same way', 'That usually suggests dependence, not independence.', 'Independence means none is redundant.'], ['Must all have length 1', 'Unit length is not required.', 'This is about combination, not normalization.'], ['Can only exist in 2D', 'Independence exists in many dimensions.', 'Do not limit the idea to one space.']] },
  ]),
  }
}
