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
import { openSatMathQuestions } from './openSatImported'
import { topUpHighGeneratedTrack } from './highGenerated'
import { algebra1ExamBatchQuestions } from './algebra1ExamBatch'
import { algebra2ExamBatchQuestions } from './algebra2ExamBatch'
import { geometryExamBatchQuestions } from './geometryExamBatch'
import { grade10MathExamBatchQuestions } from './grade10MathExamBatch'
import { grade7MathExamBatchQuestions } from './grade7MathExamBatch'
import { grade8MathExamBatchQuestions } from './grade8MathExamBatch'
import { grade9MathExamBatchQuestions } from './grade9MathExamBatch'
import { middleMathExamBatchQuestions } from './middleMathExamBatch'
import { precalculusExamBatchQuestions } from './precalculusExamBatch'
import { statisticsExamBatchQuestions } from './statisticsExamBatch'
import { trigonometryExamBatchQuestions } from './trigonometryExamBatch'

export function buildHighMathQuestionCatalog(): Record<string, Question[]> {
  const catalog: Record<string, Question[]> = {
  'col-illustrative-mathematics-6th-8th-grade': [
    ...makeIllustrativeMath678Quiz(),
    ...middleMathExamBatchQuestions,
  ],
  'col-class-7-math': [...makeIndiaClass7MathQuiz(), ...grade7MathExamBatchQuestions],
  'col-class-8-math': [...makeIndiaClass8MathQuiz(), ...grade8MathExamBatchQuestions],
  'col-class-9-math': [...makeIndiaClass9MathQuiz(), ...grade9MathExamBatchQuestions],
  'col-class-10-math': [...makeIndiaClass10MathQuiz(), ...grade10MathExamBatchQuestions],
  'col-algebra-1-ny-next-gen': [...makeColAlgebraNyNextGenQuiz(), ...algebra1ExamBatchQuestions],
  'col-eureka-math-algebra-i': [...makeColAlgebraNyNextGenQuiz(), ...algebra1ExamBatchQuestions],
  'col-geometry': [...makeColGeometryQuiz(), ...geometryExamBatchQuestions],
  'col-eureka-math-geometry': [...makeColGeometryQuiz(), ...geometryExamBatchQuestions],
  'col-algebra-2': [...makeColAlgebra2Quiz(), ...algebra2ExamBatchQuestions],
  'col-eureka-math-algebra-ii': [...makeColAlgebra2Quiz(), ...algebra2ExamBatchQuestions],
  'col-precalculus': [...makeColPrecalculusQuiz(), ...precalculusExamBatchQuestions],
  'col-high-school-statistics': [...makeColHighSchoolStatisticsQuiz(), ...statisticsExamBatchQuestions],
  'col-trigonometry': [...makeColTrigonometryQuiz(), ...trigonometryExamBatchQuestions],
  'col-statistics-probability': [...makeColStatisticsProbabilityQuiz(), ...statisticsExamBatchQuestions],
  'col-sat-math': openSatMathQuestions,
  }

  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, questions),
    ]),
  )
}
