import type { Question } from './types'
import {
  makeColAlgebraNyNextGenQuiz,
  makeColGeometryQuiz,
  makeColAlgebra2Quiz,
  makeColPrecalculusQuiz,
  makeColHighSchoolStatisticsQuiz,
  makeColTrigonometryQuiz,
  makeColStatisticsProbabilityQuiz,
} from './highBuilders'
import {
  makeIndiaClass7MathQuiz,
  makeIndiaClass8MathQuiz,
  makeIndiaClass9MathQuiz,
  makeIndiaClass10MathQuiz,
  makeIllustrativeMath678Quiz,
} from './colGapBuilders'

export function buildHighMathQuestionCatalog(): Record<string, Question[]> {
  return {
  'col-illustrative-mathematics-6th-8th-grade': makeIllustrativeMath678Quiz(),
  'col-class-7-math': makeIndiaClass7MathQuiz(),
  'col-class-8-math': makeIndiaClass8MathQuiz(),
  'col-class-9-math': makeIndiaClass9MathQuiz(),
  'col-class-10-math': makeIndiaClass10MathQuiz(),
  'col-algebra-1-ny-next-gen': makeColAlgebraNyNextGenQuiz(),
  'col-eureka-math-algebra-i': makeColAlgebraNyNextGenQuiz(),
  'col-geometry': makeColGeometryQuiz(),
  'col-eureka-math-geometry': makeColGeometryQuiz(),
  'col-algebra-2': makeColAlgebra2Quiz(),
  'col-eureka-math-algebra-ii': makeColAlgebra2Quiz(),
  'col-precalculus': makeColPrecalculusQuiz(),
  'col-high-school-statistics': makeColHighSchoolStatisticsQuiz(),
  'col-trigonometry': makeColTrigonometryQuiz(),
  'col-statistics-probability': makeColStatisticsProbabilityQuiz(),
  }
}
