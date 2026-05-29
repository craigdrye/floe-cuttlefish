import type { Question } from './types'
import {
  makeSimpleQuestion,
} from './base'
import {
  makeCol3rdGradeMathQuiz,
  makeCol4thGradeMathQuiz,
  makeCol5thGradeMathQuiz,
  makeCol6thGradeMathQuiz,
} from './primaryBuilders'
import {
  makeIndiaClass1MathQuiz,
  makeIndiaClass2MathQuiz,
  makeEurekaMathFoundations38Quiz,
  makeEurekaMath38Quiz,
} from './colGapBuilders'
import { buildKolibriQuestionCatalog } from './kolibri'
import { openTriviaForKidsQuestionsByTrack } from './openTriviaForKidsImported'
import { primaryGeneratedHumanitiesExamQuestionsByTrack } from './primaryGeneratedHumanitiesExam'
import { primaryGeneratedMathQuestionsByTrack } from './primaryGeneratedMath'
import { primaryScienceAssessmentGrade5Questions } from './primaryScienceAssessmentImported'
import * as generatedScienceDiscovery from './primaryGeneratedScienceDiscovery'
import { PRIMARY_SUB_TOPICS, PRIMARY_MENTOR_HINTS, PRIMARY_CORRECT_SHORTENED } from './primaryPolish'
import { polish as runPolish } from './polishPipeline'

const _primaryBundle = [{ subTopics: PRIMARY_SUB_TOPICS, mentorHints: PRIMARY_MENTOR_HINTS, correctShortened: PRIMARY_CORRECT_SHORTENED, source: 'primary' }]

export function buildPrimaryQuestionCatalog(): Record<string, Question[]> {
  const kolibri = buildKolibriQuestionCatalog()
  const khan = kolibri['khanacademy'] || []
  const ck12 = kolibri['ck12'] || []
  const generatedScienceDiscoveryQuestionsByTrack: Record<string, Question[]> = {
    scienceYear1: generatedScienceDiscovery.scienceYear1,
    scienceYear2: generatedScienceDiscovery.scienceYear2,
    scienceYear3: generatedScienceDiscovery.scienceYear3,
    scienceYear4: generatedScienceDiscovery.scienceYear4,
    scienceYear5: generatedScienceDiscovery.scienceYear5,
    scienceYear6: generatedScienceDiscovery.scienceYear6,
    dinosPrimary: generatedScienceDiscovery.dinosPrimary,
    planetsPrimary: generatedScienceDiscovery.planetsPrimary,
    oceanPrimary: generatedScienceDiscovery.oceanPrimary,
    bugsPrimary: generatedScienceDiscovery.bugsPrimary,
  }
  const generatedHumanitiesExamQuestionsByTrack: Record<string, Question[]> =
    primaryGeneratedHumanitiesExamQuestionsByTrack
  
  // Helper to filter by chapter keyword
  const filterQs = (qs: Question[], keywords: string[]) => 
    qs.filter(q => keywords.some(k => q.chapter.toLowerCase().includes(k.toLowerCase())))

  const topUp = (trackId: string, existing: Question[] = []) => [
    ...existing,
    ...(primaryGeneratedMathQuestionsByTrack[trackId] || []),
    ...(generatedHumanitiesExamQuestionsByTrack[trackId] || []),
    ...(generatedScienceDiscoveryQuestionsByTrack[trackId] || []),
  ]

  const _catalog: Record<string, Question[]> = {
    // ── Class 1 Math ────────────────────────────────────────
    'col-class-1-math': [
      ...makeIndiaClass1MathQuiz(),
      ...filterQs(khan, ['counting', 'add within 10', 'subtract within 10', 'shapes', 'small numbers']),
      ...filterQs(ck12, ['counting', 'shapes', 'identify the value']),
    ],
    
    // ── Class 2 Math ────────────────────────────────────────
    'col-class-2-math': [
      ...makeIndiaClass2MathQuiz(),
      ...filterQs(khan, ['place value', 'add within 100', 'subtract within 100', 'money', 'time']),
      ...filterQs(ck12, ['place value', 'money', 'time']),
    ],
    
    // ── Class 3 Math ────────────────────────────────────────
    'col-class-3-math': [
      ...makeCol3rdGradeMathQuiz(),
      ...filterQs(khan, ['multiplication', 'division', 'fractions intro', 'area', 'perimeter']),
      ...filterQs(ck12, ['multiplication', 'division', 'fractions']),
    ],
    
    // ── Class 4 Math ────────────────────────────────────────
    'col-class-4-math': [
      ...makeCol4thGradeMathQuiz(),
      ...filterQs(khan, ['decimals', 'multi-digit', 'factors', 'prime']),
      ...filterQs(ck12, ['decimals', 'factors']),
    ],

    // ── Class 5 Math ────────────────────────────────────────
    'col-class-5-math': [
      ...makeCol5thGradeMathQuiz(),
      ...filterQs(khan, ['coordinate plane', 'volume', 'algebraic thinking']),
      ...filterQs(ck12, ['coordinate plane', 'volume']),
    ],

    // ── Class 6 Math ────────────────────────────────────────
    'col-class-6-math': [
      ...makeCol6thGradeMathQuiz(),
      ...filterQs(khan, ['ratios', 'rates', 'negative numbers', 'equations', 'inequalities']),
      ...filterQs(ck12, ['ratios', 'rates', 'integers']),
    ],

    // ── Science Tracks ──────────────────────────────────────
    'scienceEarlyYears': filterQs(ck12, ['nature', 'animals', 'plants', 'seasons']),
    'scienceYear1': topUp('scienceYear1', [
      ...filterQs(ck12, ['weather', 'habitat', 'living things']),
      ...(openTriviaForKidsQuestionsByTrack.scienceYear1 || []),
    ]),
    'scienceYear2': topUp('scienceYear2', filterQs(ck12, ['matter', 'forces', 'magnets'])),
    'scienceYear3': topUp('scienceYear3', [
      ...filterQs(ck12, ['solar system', 'earth', 'rocks']),
      ...(openTriviaForKidsQuestionsByTrack.scienceYear3 || []),
    ]),
    'scienceYear4': topUp('scienceYear4'),
    'scienceYear5': topUp('scienceYear5', [
      ...filterQs(ck12, ['human body', 'cells', 'genetics']),
      ...primaryScienceAssessmentGrade5Questions,
    ]),
    'scienceYear6': topUp('scienceYear6', filterQs(ck12, ['chemistry', 'physics', 'electricity'])),

    arithmetic: topUp('arithmetic', openTriviaForKidsQuestionsByTrack.arithmetic || []),
    timesTables: topUp('timesTables', openTriviaForKidsQuestionsByTrack.timesTables || []),
    moneyBasics: openTriviaForKidsQuestionsByTrack.moneyBasics || [],
    basicGeometry: topUp('basicGeometry', openTriviaForKidsQuestionsByTrack.basicGeometry || []),
    class5Math: [
      ...makeCol5thGradeMathQuiz(),
      ...(openTriviaForKidsQuestionsByTrack.class5Math || []),
    ],
    class6Math: [
      ...makeCol6thGradeMathQuiz(),
      ...(openTriviaForKidsQuestionsByTrack.class6Math || []),
    ],
    class1Math: topUp('class1Math'),
    class2Math: topUp('class2Math'),
    class3Math: topUp('class3Math'),
    class4Math: topUp('class4Math'),
    readingVocab4th: topUp('readingVocab4th', openTriviaForKidsQuestionsByTrack.readingVocab4th || []),
    readingVocab5th: topUp('readingVocab5th', openTriviaForKidsQuestionsByTrack.readingVocab5th || []),
    wordBuilders: topUp('wordBuilders'),
    codingBasics: topUp('codingBasics'),
    philosophyYear1: topUp('philosophyYear1'),
    philosophyYear2: topUp('philosophyYear2'),
    philosophyYear3: topUp('philosophyYear3'),
    philosophyYear4: topUp('philosophyYear4'),
    philosophyYear5: topUp('philosophyYear5'),
    philosophyYear6: topUp('philosophyYear6'),
    dinosPrimary: topUp('dinosPrimary'),
    planetsPrimary: topUp('planetsPrimary'),
    oceanPrimary: topUp('oceanPrimary', openTriviaForKidsQuestionsByTrack.oceanPrimary || []),
    bugsPrimary: topUp('bugsPrimary'),
    naplanYear3: topUp('naplanYear3'),
    naplanYear5: topUp('naplanYear5'),
    elevenPlus: topUp('elevenPlus'),
    pslePrep: topUp('pslePrep'),

    'col-3rd-grade-math': makeCol3rdGradeMathQuiz(),
    'col-4th-grade-math': makeCol4thGradeMathQuiz(),
    'col-5th-grade-math': makeCol5thGradeMathQuiz(),
    'col-6th-grade-math': makeCol6thGradeMathQuiz(),
    'col-eureka-math-foundations-3rd-8th-grade': makeEurekaMathFoundations38Quiz(),
    'col-eureka-math-3rd-8th-grade': makeEurekaMath38Quiz(),
    'col-arithmetic': topUp('col-arithmetic'),
    'col-basic-geometry-and-measurement': topUp('col-basic-geometry-and-measurement'),
    'col-times-tables': topUp('col-times-tables'),
    'col-early-math-review': topUp('col-early-math-review'),
    'col-word-builders': topUp('col-word-builders'),
    'col-coding-basics': topUp('col-coding-basics'),
    'col-3rd-grade': topUp('col-3rd-grade'),
    'col-3rd-grade-ny-next-gen': topUp('col-3rd-grade-ny-next-gen'),
    'col-get-ready-for-3rd-grade': topUp('col-get-ready-for-3rd-grade'),
    'col-4th-grade-ny-next-gen': topUp('col-4th-grade-ny-next-gen'),
    'col-get-ready-for-4th-grade': topUp('col-get-ready-for-4th-grade'),
    'col-4th-grade-reading-and-vocab': topUp('col-4th-grade-reading-and-vocab'),
    'col-5th-grade-ny-next-gen': topUp('col-5th-grade-ny-next-gen'),
    'col-get-ready-for-5th-grade': topUp('col-get-ready-for-5th-grade'),
    'col-5th-grade-reading-and-vocab': topUp('col-5th-grade-reading-and-vocab'),
    'col-6th-grade-ny-next-gen': topUp('col-6th-grade-ny-next-gen'),
    'col-get-ready-for-6th-grade': topUp('col-get-ready-for-6th-grade'),
    'col-6th-grade-reading-and-vocab': topUp('col-6th-grade-reading-and-vocab'),
    
    'khanacademy': khan,
    'ck12': ck12,

    primary: [
      makeSimpleQuestion(12001, 'Primary', 'Number Reef', 'Friendly fractions',
      'Which fraction is the largest?',
      '3/4',
      [
        ['1/2', 'One half is smaller than three quarters.', 'Think of a pizza: 3/4 means more slices than 1/2.'],
        ['2/5', 'Two fifths is less than one half.', 'Use a common denominator or decimal to compare quickly.'],
        ['1/3', 'One third is smaller than one half and much smaller than three quarters.', 'Bigger denominator means smaller pieces when the numerator is the same.'],
      ]),
    makeSimpleQuestion(12002, 'Primary', 'Logic Lagoon', 'Pattern step',
      'What comes next: 2, 4, 8, 16, ?',
      '32',
      [
        ['20', 'This adds 4, but the sequence is doubling each time.', 'Check whether each step uses the same rule.'],
        ['24', 'This mixes different rules and breaks the doubling pattern.', 'Multiply by 2 from one term to the next.'],
        ['30', '30 is close to 32 but does not match the rule.', 'Use exact operations, not rough estimates.'],
      ]),
    makeSimpleQuestion(12003, 'Primary', 'Word Dock', 'Reading detail',
      'A story says: "Mia packed a coat because the sky was dark and windy." Why did Mia pack a coat?',
      'She expected cold or bad weather',
      [
        ['She wanted to swim', 'Dark, windy weather does not suggest swimming.', 'Use clues from the sentence.'],
        ['She forgot her shoes', 'The sentence only explains coat choice.', 'Answer the exact question asked.'],
        ['She bought a new coat yesterday', 'That detail is not in the sentence.', 'Do not invent details that are not provided.'],
      ]),
    makeSimpleQuestion(12004, 'Primary', 'Curiosity Cove', 'Simple science',
      'Which is an example of evaporation?',
      'A puddle slowly disappearing on a sunny day',
      [
        ['Ice turning into water', 'That is melting, not evaporation.', 'Evaporation is liquid to gas.'],
        ['Water freezing into ice', 'That is freezing, not evaporation.', 'Look for water turning into vapor.'],
        ['Rain falling from clouds', 'That is precipitation.', 'Evaporation happens before clouds form.'],
      ]),
  ],
    ...buildKolibriQuestionCatalog(),
  }
  const polished: Record<string, Question[]> = {}
  for (const [trackId, questions] of Object.entries(_catalog)) {
    polished[trackId] = runPolish(questions, _primaryBundle)
  }
  return polished
}
