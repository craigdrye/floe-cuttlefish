import type { Question } from './types'
import {
  makeKhanAlgebraNyNextGenQuiz,
  makeKhanGeometryQuiz,
  makeKhanAlgebra2Quiz,
  makeKhanPrecalculusQuiz,
  makeKhanHighSchoolStatisticsQuiz,
  makeKhanTrigonometryQuiz,
  makeKhanStatisticsProbabilityQuiz,
} from './highBuilders'
import {
  makeIndiaClass7MathQuiz,
  makeIndiaClass8MathQuiz,
  makeIndiaClass9MathQuiz,
  makeIndiaClass10MathQuiz,
  makeIllustrativeMath678Quiz,
} from './khanGapBuilders'

export function buildHighMathQuestionCatalog(): Record<string, Question[]> {
  return {
  'khan-illustrative-mathematics-6th-8th-grade': makeIllustrativeMath678Quiz(),
  'khan-class-7-math': makeIndiaClass7MathQuiz(),
  'khan-class-8-math': makeIndiaClass8MathQuiz(),
  'khan-class-9-math': makeIndiaClass9MathQuiz(),
  'khan-class-10-math': makeIndiaClass10MathQuiz(),
  'khan-algebra-1-ny-next-gen': makeKhanAlgebraNyNextGenQuiz(),
  'khan-eureka-math-algebra-i': makeKhanAlgebraNyNextGenQuiz(),
  'khan-geometry': makeKhanGeometryQuiz(),
  'khan-eureka-math-geometry': makeKhanGeometryQuiz(),
  'khan-algebra-2': makeKhanAlgebra2Quiz(),
  'khan-eureka-math-algebra-ii': makeKhanAlgebra2Quiz(),
  'khan-precalculus': makeKhanPrecalculusQuiz(),
  'khan-high-school-statistics': makeKhanHighSchoolStatisticsQuiz(),
  'khan-trigonometry': makeKhanTrigonometryQuiz(),
  'khan-statistics-probability': makeKhanStatisticsProbabilityQuiz(),
  }
}
