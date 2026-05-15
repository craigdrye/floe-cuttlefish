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
import {
  numbasWebworkAlgebraQuestions,
  numbasWebworkStatisticsQuestions,
} from './numbasWebworkMathImported'
import {
  schoolAssessmentAlgebra1Questions,
  schoolAssessmentGrade7MathQuestions,
  schoolAssessmentGrade8MathQuestions,
} from './schoolAssessmentMathScienceImported'
import {
  numbasWebworkAdditionalAlgebraQuestions,
  numbasWebworkAdditionalStatisticsQuestions,
  numbasWebworkAdditionalTrigonometryQuestions,
} from './numbasWebworkMathAdditionalImported'
import {
  numbasWebworkThirdAlgebraQuestions,
  numbasWebworkThirdStatisticsQuestions,
  numbasWebworkThirdTrigonometryQuestions,
} from './numbasWebworkMathThirdImported'

export function buildHighMathQuestionCatalog(): Record<string, Question[]> {
  const catalog: Record<string, Question[]> = {
  'col-illustrative-mathematics-6th-8th-grade': [
    ...makeIllustrativeMath678Quiz(),
    ...middleMathExamBatchQuestions,
  ],
  'col-class-7-math': [...makeIndiaClass7MathQuiz(), ...grade7MathExamBatchQuestions, ...schoolAssessmentGrade7MathQuestions],
  'col-class-8-math': [...makeIndiaClass8MathQuiz(), ...grade8MathExamBatchQuestions, ...schoolAssessmentGrade8MathQuestions],
  'col-class-9-math': [...makeIndiaClass9MathQuiz(), ...grade9MathExamBatchQuestions],
  'col-class-10-math': [...makeIndiaClass10MathQuiz(), ...grade10MathExamBatchQuestions],
  'col-algebra-1-ny-next-gen': [...makeColAlgebraNyNextGenQuiz(), ...algebra1ExamBatchQuestions, ...schoolAssessmentAlgebra1Questions],
  'col-eureka-math-algebra-i': [...makeColAlgebraNyNextGenQuiz(), ...algebra1ExamBatchQuestions, ...schoolAssessmentAlgebra1Questions],
  'col-geometry': [...makeColGeometryQuiz(), ...geometryExamBatchQuestions],
  'col-eureka-math-geometry': [...makeColGeometryQuiz(), ...geometryExamBatchQuestions],
  'col-algebra-2': [...makeColAlgebra2Quiz(), ...algebra2ExamBatchQuestions, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  'col-eureka-math-algebra-ii': [...makeColAlgebra2Quiz(), ...algebra2ExamBatchQuestions, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  'col-precalculus': [...makeColPrecalculusQuiz(), ...precalculusExamBatchQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  'col-high-school-statistics': [...makeColHighSchoolStatisticsQuiz(), ...statisticsExamBatchQuestions, ...numbasWebworkStatisticsQuestions, ...numbasWebworkAdditionalStatisticsQuestions, ...numbasWebworkThirdStatisticsQuestions],
  'col-trigonometry': [...makeColTrigonometryQuiz(), ...trigonometryExamBatchQuestions, ...numbasWebworkAdditionalTrigonometryQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  'col-statistics-probability': [...makeColStatisticsProbabilityQuiz(), ...statisticsExamBatchQuestions, ...numbasWebworkStatisticsQuestions, ...numbasWebworkAdditionalStatisticsQuestions, ...numbasWebworkThirdStatisticsQuestions],
  'col-sat-math': openSatMathQuestions,
  }

  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, questions),
    ]),
  )
}
