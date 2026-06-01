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

function highMathLesson(question: Question): string {
  const title = question.title || question.chapter || 'this math problem'
  const answer = question.solution || 'the correct answer'
  return `This problem is practicing mathematical structure, not just answer-picking. For "${title}", the key result is: ${answer}. Identify the operation or theorem, keep each algebraic step balanced, and check whether the final form matches what the question asked for.`
}

function rewriteHighMathPrompt(question: Question): string {
  const prompt = question.prompt.trim()
  if (prompt.endsWith('?')) return question.prompt
  if (prompt.endsWith(':')) {
    return `${prompt} Which answer correctly completes this math idea?`
  }
  return `${prompt} What is the correct answer?`
}

function enrichHighMathQuestionQuality(catalog: Record<string, Question[]>): Record<string, Question[]> {
  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      questions.map((question) => ({
        ...question,
        prompt: rewriteHighMathPrompt(question),
        lesson: question.lesson || highMathLesson(question),
      })),
    ]),
  )
}

export function buildHighMathQuestionCatalog(): Record<string, Question[]> {
  // makeColStatisticsProbabilityQuiz content folded into col-high-school-statistics —
  // col-statistics-probability had no age-catalog entry (dead key).
  const statsAndProbability = [
    ...makeColHighSchoolStatisticsQuiz(),
    ...makeColStatisticsProbabilityQuiz(),
    ...statisticsExamBatchQuestions,
    ...numbasWebworkStatisticsQuestions,
    ...numbasWebworkAdditionalStatisticsQuestions,
    ...numbasWebworkThirdStatisticsQuestions,
  ]
  const catalog: Record<string, Question[]> = {
  'col-illustrative-mathematics-6th-8th-grade': [
    ...makeIllustrativeMath678Quiz(),
    ...middleMathExamBatchQuestions,
  ],
  'col-class-7-math': [...makeIndiaClass7MathQuiz(), ...grade7MathExamBatchQuestions, ...schoolAssessmentGrade7MathQuestions],
  'col-class-8-math': [...makeIndiaClass8MathQuiz(), ...grade8MathExamBatchQuestions, ...schoolAssessmentGrade8MathQuestions],
  'col-class-9-math': [...makeIndiaClass9MathQuiz(), ...grade9MathExamBatchQuestions],
  'col-class-10-math': [...makeIndiaClass10MathQuiz(), ...grade10MathExamBatchQuestions],
  'col-algebra-1': [...makeColAlgebraNyNextGenQuiz(), ...algebra1ExamBatchQuestions, ...schoolAssessmentAlgebra1Questions],
  'col-geometry': [...makeColGeometryQuiz(), ...geometryExamBatchQuestions],
  'col-algebra-2': [...makeColAlgebra2Quiz(), ...algebra2ExamBatchQuestions, ...numbasWebworkAlgebraQuestions, ...numbasWebworkAdditionalAlgebraQuestions, ...numbasWebworkThirdAlgebraQuestions],
  // Renamed from col-precalculus (dead key) to match the age-catalog track id.
  'col-get-ready-for-precalculus': [...makeColPrecalculusQuiz(), ...precalculusExamBatchQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  'col-high-school-statistics': statsAndProbability,
  // Renamed from col-trigonometry (dead key) to match the age-catalog track id (camelCase 'trigonometry').
  trigonometry: [...makeColTrigonometryQuiz(), ...trigonometryExamBatchQuestions, ...numbasWebworkAdditionalTrigonometryQuestions, ...numbasWebworkThirdTrigonometryQuestions],
  'col-sat-math': openSatMathQuestions,
  }

  const toppedUp = Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, questions),
    ]),
  )
  return enrichHighMathQuestionQuality(toppedUp)
}
