import { highCollectionGroups, highCoreTracks } from '../ageCatalog/high'
import { makeSimpleQuestion } from './base'
import { topUpHighAgentGeneratedTrack } from './highAgentGenerated'
import { highLogicArgumentationOpenLogicBatchQuestions } from './highLogicArgumentationOpenLogicBatch'
import { middleSchoolEarthSpaceStaarBatchQuestions } from './middleSchoolEarthSpaceStaarBatch'
import { middleSchoolBiologyStaarBatchQuestions } from './middleSchoolBiologyStaarBatch'
import { middleSchoolChemistryStaarBatchQuestions } from './middleSchoolChemistryStaarBatch'
import { middleSchoolPhysicsStaarBatchQuestions } from './middleSchoolPhysicsStaarBatch'
import {
  middleSchoolScienceAssessmentBiologyQuestions,
  middleSchoolScienceAssessmentChemistryQuestions,
  middleSchoolScienceAssessmentEarthSpaceQuestions,
  middleSchoolScienceAssessmentPhysicsQuestions,
} from './primaryScienceAssessmentImported'
import {
  schoolAssessmentLogicArgumentationQuestions,
  schoolAssessmentReadingWritingQuestions,
  schoolAssessmentUsHistoryQuestions,
} from './schoolAssessmentReadingSocialImported'
import { earthScienceStarterQuestions } from './courseExpansionStarterQuestions'
import {
  highApUsGovernmentQuestions,
  highConstitution101Questions,
  highPoliticalPhilosophyQuestions,
  highUsGovernmentCivicsQuestions,
} from './civicPoliticsQuestions'
import { highPracticalPoliticsQuestions } from './practicalPoliticsQuestions'
import { highApBiologyQuestions } from './highApBiologyQuestions'
import { highApChemistryQuestions } from './highApChemistryQuestions'
import { highApPhysicsQuestions } from './highApPhysicsQuestions'
import { highApCalculusQuestions } from './highApCalculusQuestions'
import { highApEnglishLitQuestions } from './highApEnglishLitQuestions'
import { highApEconomicsQuestions } from './highApEconomicsQuestions'
import { highApWorldHistoryQuestions } from './highApWorldHistoryQuestions'
import { highApArtHistoryQuestions } from './highApArtHistoryQuestions'
import { highApComputerScienceQuestions } from './highApComputerScienceQuestions'
import { highApUsHistoryQuestions as highApUsHistoryDedicatedQuestions } from './highApUsHistoryQuestions'
import { highApEuropeanHistoryQuestions } from './highApEuropeanHistoryQuestions'
import { AP_SCIENCE_SUB_TOPICS, AP_SCIENCE_MENTOR_HINTS, AP_SCIENCE_CORRECT_SHORTENED } from './apSciencePolish'
import { AP_QUANT_SUB_TOPICS, AP_QUANT_MENTOR_HINTS, AP_QUANT_CORRECT_SHORTENED } from './apQuantitativePolish'
import { AP_HUMANITIES_SUB_TOPICS, AP_HUMANITIES_MENTOR_HINTS, AP_HUMANITIES_CORRECT_SHORTENED } from './apHumanitiesPolish'
import { polish as runPolish } from './polishPipeline'

const _apSciencePolish = [{ subTopics: AP_SCIENCE_SUB_TOPICS, mentorHints: AP_SCIENCE_MENTOR_HINTS, correctShortened: AP_SCIENCE_CORRECT_SHORTENED, source: 'apScience' }]
const _apQuantPolish = [{ subTopics: AP_QUANT_SUB_TOPICS, mentorHints: AP_QUANT_MENTOR_HINTS, correctShortened: AP_QUANT_CORRECT_SHORTENED, source: 'apQuant' }]
const _apHumPolish = [{ subTopics: AP_HUMANITIES_SUB_TOPICS, mentorHints: AP_HUMANITIES_MENTOR_HINTS, correctShortened: AP_HUMANITIES_CORRECT_SHORTENED, source: 'apHumanities' }]

const polishedApBiologyQuestions = runPolish(highApBiologyQuestions, _apSciencePolish)
const polishedApChemistryQuestions = runPolish(highApChemistryQuestions, _apSciencePolish)
const polishedApPhysicsQuestions = runPolish(highApPhysicsQuestions, _apSciencePolish)
const polishedApCalculusQuestions = runPolish(highApCalculusQuestions, _apQuantPolish)
const polishedApEconomicsQuestions = runPolish(highApEconomicsQuestions, _apQuantPolish)
const polishedApComputerScienceQuestions = runPolish(highApComputerScienceQuestions, _apQuantPolish)
const polishedApEnglishLitQuestions = runPolish(highApEnglishLitQuestions, _apHumPolish)
const polishedApWorldHistoryQuestions = runPolish(highApWorldHistoryQuestions, _apHumPolish)
const polishedApArtHistoryQuestions = runPolish(highApArtHistoryQuestions, _apHumPolish)
import {
  guessTheAnimalQuestions,
  guessTheBirdQuestions,
  guessTheBodyPartQuestions,
  guessTheFishQuestions,
  guessTheFossilQuestions,
  guessThePlantQuestions,
  guessTheRockQuestions,
  tracksAndScatQuestions,
} from './fieldIdentificationQuestions'
import {
  guessTheArchitectureStyleQuestions,
  guessTheAircraftPartQuestions,
  guessTheArtMovementQuestions,
  guessTheCameraPartQuestions,
  guessTheCarPartQuestions,
  guessTheCatBreedQuestions,
  guessTheCheeseQuestions,
  guessTheCircuitComponentQuestions,
  guessTheCitySkylineQuestions,
  guessTheCloudTypeQuestions,
  guessTheCountryShapeQuestions,
  guessTheBridgeTypeQuestions,
  guessTheDentalToolQuestions,
  guessTheDinosaurQuestions,
  guessTheDogBreedQuestions,
  guessTheElectricalPartQuestions,
  guessTheFlagQuestions,
  guessTheGemstoneQuestions,
  guessTheHandToolQuestions,
  guessTheHistoricalFigureQuestions,
  guessTheHistoricalRuinQuestions,
  guessTheHouseplantQuestions,
  guessTheInsectQuestions,
  guessTheKitchenToolQuestions,
  guessTheKnotQuestions,
  guessTheLabGlasswareQuestions,
  guessTheLiteraryCharacterQuestions,
  guessTheMachineShopToolQuestions,
  guessTheMicroscopePartQuestions,
  guessTheMusicNotationQuestions,
  guessTheMushroomQuestions,
  guessThePastaShapeQuestions,
  guessThePlumbingPartQuestions,
  guessTheRoadSignQuestions,
  guessTheSeaweedQuestions,
  guessTheSpiceQuestions,
  guessTheSportsEquipmentQuestions,
  guessTheSpaceObjectQuestions,
  guessTheStrangeFruitQuestions,
  guessTheSurgicalToolQuestions,
  guessTheToxicPlantQuestions,
  guessTheSewingToolQuestions,
  guessTheTrainPartQuestions,
  guessTheConstellationQuestions,
  guessTheMedicalInstrumentQuestions,
  guessTheTypographyTermQuestions,
  guessTheTreeQuestions,
  guessTheWeatherInstrumentQuestions,
  guessTheWeirdInstrumentQuestions,
} from './bonusIdentificationQuestions'
import { guessTheMemeQuestions } from './memeLiteracyQuestions'
import type { Question, Topic } from './types'

type HighFamily = 'math' | 'science' | 'english' | 'history' | 'philosophy' | 'computing' | 'economics' | 'life' | 'creative' | 'exam'

type TrackSpec = {
  id: string
  title: string
  discipline: string
  family: HighFamily
  topic: Topic
}

type Blueprint = {
  chapter: string
  title: string
  prompt: (variant: number) => string
  correct: (variant: number) => string
  wrong: (variant: number) => [string, string, string][]
  lesson: (variant: number) => string
}

const generatedSource = 'Floe secondary generated syllabus bank v2'

type SimpleBlueprintSpec = {
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
  lesson: string
}

function slugifyTrackId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function collectionTrackId(title: string) {
  return `col-${slugifyTrackId(title)}`
}

function includesAny(text: string, needles: string[]) {
  return needles.some((needle) => text.includes(needle))
}

function normalizePrompt(prompt: string) {
  return prompt
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function simpleBlueprints(specs: SimpleBlueprintSpec[]): Blueprint[] {
  return specs.map((spec) => ({
    chapter: spec.chapter,
    title: spec.title,
    prompt: () => spec.prompt,
    correct: () => spec.correct,
    wrong: () => spec.wrong,
    lesson: () => spec.lesson,
  }))
}

function topicForFamily(family: HighFamily): Topic {
  if (family === 'math') return 'Mathematics'
  if (family === 'computing') return 'Software'
  if (family === 'creative') return 'Fun'
  if (family === 'life') return 'Career Skills'
  if (family === 'philosophy') return 'Extension'
  return 'AP'
}

function familyFor(title: string, discipline: string): HighFamily {
  const text = `${title} ${discipline}`.toLowerCase()
  if (includesAny(text, ['javascript', 'html', 'web', 'computer science', 'computer', 'programming', 'python', 'internet', 'pixar'])) return 'computing'
  if (includesAny(text, ['biology', 'chemistry', 'physics', 'science', 'earth', 'space', 'climate'])) return 'science'
  if (includesAny(text, ['reading', 'vocab', 'grammar', 'english', 'literature'])) return 'english'
  if (includesAny(text, ['history', 'government', 'civics', 'constitution', 'politics', 'voting', 'parliament', 'geography', 'art history', 'big history'])) return 'history'
  if (includesAny(text, ['ethics', 'logic', 'philosophy', 'epistemology', 'existentialism'])) return 'philosophy'
  if (includesAny(text, ['economics', 'microeconomics', 'macroeconomics', 'finance', 'capital markets'])) return 'economics'
  if (includesAny(text, ['life skills', 'adulting', 'admissions'])) return 'life'
  if (includesAny(text, ['chess', 'creative writing', 'mythology', 'monsters', 'game design', 'logic puzzles'])) return 'creative'
  if (includesAny(text, ['sat', 'gcse', 'jee', 'neet', 'naplan', 'hsc', 'vce', 'a-level'])) return 'exam'
  if (includesAny(text, ['algebra', 'geometry', 'math', 'calculus', 'trigonometry', 'statistics', 'precalculus', 'pre-algebra'])) return 'math'
  return 'exam'
}

function allVisibleSecondaryTracks(): TrackSpec[] {
  const byId = new Map<string, { title: string; discipline: string }>()

  for (const track of highCoreTracks) {
    byId.set(track.id, { title: track.title, discipline: track.discipline })
  }

  for (const group of highCollectionGroups) {
    for (const title of group.titles) {
      byId.set(collectionTrackId(title), { title, discipline: group.discipline })
    }
  }

  return Array.from(byId, ([id, track]) => {
    const family = familyFor(track.title, track.discipline)
    return {
      id,
      title: track.title,
      discipline: track.discipline,
      family,
      topic: topicForFamily(family),
    }
  })
}

function mathBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Ratios and Rates',
      title: 'Sticker robot rate',
      prompt: (variant) => {
        const groups = 3 + (variant % 3)
        const each = 4 + (variant % 5)
        return `A friendly robot packs ${groups * each} stickers evenly into ${groups} envelopes. How many stickers go into ${groups + 5} envelopes?`
      },
      correct: (variant) => String((4 + (variant % 5)) * (8 + (variant % 3))),
      wrong: (variant) => {
        const groups = 3 + (variant % 3)
        const each = 4 + (variant % 5)
        return [
          [String(groups * each), 'That is the original sticker count, not the scaled amount.', 'Find the unit rate, then scale it.'],
          [String(groups + each + 5), 'That adds quantities that should be multiplied after finding the rate.', 'Use stickers per envelope.'],
          [String(groups * each + 5), 'That adds five stickers instead of five more envelopes of stickers.', 'Scale by the new number of envelopes.'],
        ]
      },
      lesson: () => 'Find the unit rate first, then multiply by the new number of groups.',
    },
    {
      chapter: 'Linear Equations',
      title: 'Bracket rescue',
      prompt: (variant) => `Solve: ${variant + 2}(x - 3) = ${variant + 1}x + ${variant - 1}`,
      correct: (variant) => String(4 * variant + 5),
      wrong: (variant) => [
        [String(variant + 2), 'That copies the multiplier instead of solving.', 'Expand the bracket and collect x terms.'],
        [String(-(4 * variant + 5)), 'That flips the sign of the solution.', 'Watch signs when moving constants.'],
        ['3', 'That is the number inside the bracket, not the solution.', 'Substitute back to check.'],
      ],
      lesson: () => 'Expand brackets carefully, collect variable terms, then check by substitution.',
    },
    {
      chapter: 'Probability',
      title: 'Keys without replacement',
      prompt: () => 'A drawer has 5 silver keys and 7 brass keys. Two keys are picked without replacement. What is the probability both are silver?',
      correct: () => '5/33',
      wrong: () => [
        ['25/144', 'That treats the second pick as if the first pick did not change the drawer.', 'Without replacement changes the second probability.'],
        ['10/33', 'That doubles the result without a probability reason.', 'Multiply the two dependent probabilities.'],
        ['5/12', 'That is only the probability of the first key being silver.', 'The question asks for two silver keys.'],
      ],
      lesson: () => 'Without replacement means 5/12 times 4/11, which equals 5/33.',
    },
    {
      chapter: 'Coordinate Geometry',
      title: 'Drone gradient',
      prompt: () => 'A drone moves from (1, 9) to (7, -3) on a coordinate grid. What is the gradient of its path?',
      correct: () => '-2',
      wrong: () => [
        ['2', 'The sign is reversed.', 'The y-value decreases as x increases.'],
        ['-1/2', 'That is the reciprocal of the gradient.', 'Use change in y over change in x.'],
        ['12', 'That is the vertical change size without dividing by horizontal change.', 'Gradient is a ratio.'],
      ],
      lesson: () => 'Gradient is change in y divided by change in x: (-3 - 9)/(7 - 1) = -2.',
    },
    {
      chapter: 'Quadratics',
      title: 'Factor trap',
      prompt: () => 'What are the solutions of x^2 - 5x + 6 = 0?',
      correct: () => '2 and 3',
      wrong: () => [
        ['-2 and -3', 'Those signs would create x^2 + 5x + 6.', 'Check the middle term sign.'],
        ['1 and 6', 'Those multiply to 6 but add to 7, not 5.', 'The factors must multiply to 6 and add to 5.'],
        ['-1 and -6', 'Those signs do not match the equation.', 'Use (x - 2)(x - 3).'],
      ],
      lesson: () => 'Factor the quadratic as (x - 2)(x - 3), then set each factor to zero.',
    },
    {
      chapter: 'Calculus Readiness',
      title: 'Pancake puddle rate',
      prompt: () => 'A circular pancake puddle is spreading. When its radius is 10 cm, the radius is increasing at 0.5 cm/s. How fast is the area increasing?',
      correct: () => '10pi cm^2/s',
      wrong: () => [
        ['0.5 cm^2/s', 'That gives the radius rate, not the area rate.', 'Area changes depend on both r and dr/dt.'],
        ['20pi cm^2/s', 'That doubles the correct rate.', 'Substitute carefully into 2pi r dr/dt.'],
        ['100pi cm^2/s', 'That is the area, not the rate of change of area.', 'The question asks how fast area is changing.'],
      ],
      lesson: () => 'Differentiate A = pi r^2 with respect to time: dA/dt = 2pi r dr/dt.',
    },
  ]
}

function calculusBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Limits and Continuity',
      title: 'Goblin removable hole',
      prompt: () => 'A tiny math goblin defines f(x) = (x^2 - 9)/(x - 3) for x != 3, but scribbles f(3) = 2. What value should f(3) be so the function is continuous at x = 3?',
      correct: () => '6',
      wrong: () => [
        ['2', 'That is the current function value, not the value needed for continuity.', 'Continuity needs the value to match the limit.'],
        ['3', 'That is the x-value being approached, not the limiting y-value.', 'Simplify the expression first.'],
        ['The function cannot be made continuous', 'This discontinuity is removable.', 'The factor x - 3 cancels for the limit.'],
      ],
      lesson: () => 'Factor x^2 - 9 as (x - 3)(x + 3), so the limit as x approaches 3 is 6. Continuity needs f(3) to equal 6.',
    },
    {
      chapter: 'Related Rates',
      title: 'Pancake puddle',
      prompt: () => 'A circular pancake puddle is spreading. When its radius is 10 cm, the radius is increasing at 0.5 cm/s. How fast is the area increasing?',
      correct: () => '10pi cm^2/s',
      wrong: () => [
        ['0.5 cm^2/s', 'That is the radius rate, not the area rate.', 'Area depends on both r and dr/dt.'],
        ['20pi cm^2/s', 'That doubles the correct result.', 'Substitute carefully into 2pi r dr/dt.'],
        ['100pi cm^2/s', 'That is the area, not the rate of change of area.', 'The question asks how fast area is changing.'],
      ],
      lesson: () => 'Differentiate A = pi r^2 with respect to time: dA/dt = 2pi r dr/dt.',
    },
    {
      chapter: 'Continuity Parameters',
      title: 'Calculator dragon',
      prompt: () => 'A calculator dragon guards g(x) = (x^2 - 4)/(x - 2) for x != 2, and g(2) = k. What must k be so the graph has no hole at x = 2?',
      correct: () => '4',
      wrong: () => [
        ['0', 'That is not the limiting value as x approaches 2.', 'Simplify the expression for x != 2.'],
        ['2', 'That is the x-value of the hole, not the y-value needed.', 'Continuity matches function value to limit.'],
        ['No value of k works', 'This hole is removable.', 'The expression simplifies to x + 2.'],
      ],
      lesson: () => 'For x != 2, simplify to x + 2. The limit as x approaches 2 is 4, so continuity requires g(2) = 4.',
    },
    {
      chapter: 'Optimization',
      title: 'Nacho box',
      prompt: () => 'A snack engineer cuts squares of side x from a 20 by 12 inch rectangle and folds an open-top nacho box. Given V(x) = x(20 - 2x)(12 - 2x), which x maximizes V on 0 < x < 6?',
      correct: () => '(16 - 2sqrt(19))/3 inches',
      wrong: () => [
        ['6 inches', 'That makes one side length zero, so it cannot maximize volume.', 'Check the open interval and derivative.'],
        ['(16 + 2sqrt(19))/3 inches', 'That critical point is outside the physical domain.', 'Only 0 < x < 6 is valid.'],
        ['3 inches', 'That is plausible but not where V prime equals zero.', 'Use derivative reasoning rather than guessing.'],
      ],
      lesson: () => 'Use derivative reasoning: V prime is 12x^2 - 128x + 240. The valid critical point is (16 - 2sqrt(19))/3.',
    },
    {
      chapter: 'Rationalized Limits',
      title: 'Dragon smoke machine',
      prompt: () => 'For x != 4, a tiny dragon sets f(x) = (sqrt(x + 5) - 3)/(x - 4). What value of f(4) makes the smoke output continuous?',
      correct: () => '1/6',
      wrong: () => [
        ['0', 'The numerator and denominator both approach zero, but the limit is not zero.', 'Rationalize before substituting.'],
        ['1/3', 'That misses the full denominator after rationalizing.', 'The denominator becomes sqrt(x + 5) + 3.'],
        ['Does not exist', 'The discontinuity is removable.', 'Rationalizing reveals the limiting value.'],
      ],
      lesson: () => 'Rationalize the numerator. The expression becomes 1/(sqrt(x + 5) + 3), so the limit at x = 4 is 1/6.',
    },
    {
      chapter: 'Related Rates',
      title: 'Confetti cone',
      prompt: () => 'A cone-shaped party hat is leaking confetti. Its radius is always half its height. When h = 12 cm and dh/dt = -3 cm/s, how fast is the volume changing?',
      correct: () => '-108pi cm^3/s',
      wrong: () => [
        ['108pi cm^3/s', 'The sign is wrong because the height is decreasing.', 'The volume is shrinking.'],
        ['-36pi cm^3/s', 'That misses part of the chain-rule relationship.', 'Rewrite V in terms of h before differentiating.'],
        ['-432pi cm^3/s', 'That overcounts the h factor.', 'Use V = pi h^3/12.'],
      ],
      lesson: () => 'Since r = h/2, V = pi h^3/12. Then dV/dt = (pi/4)h^2 dh/dt = -108pi.',
    },
  ]
}

// Wave 4 HS Sciences (2026-05-18): generic scienceBlueprints() previously fed wrong-domain
// items (clover-to-fox energy, peppermint diffusion, fairy lights, albedo, pea cross) into
// chemistry- and physics-shaped tracks. Now split into per-domain blueprints, plus the
// original mixed helper kept for the broad 'science' family fallback only.

function biologyBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Energy Transfer',
      title: 'Clover to fox',
      prompt: () => 'A fox eats a rabbit that ate clover beside the bike shed. Where did most of the rabbit’s stored energy originally come from?',
      correct: () => 'Sunlight',
      wrong: () => [
        ['Soil minerals', 'Minerals help plants grow, but they are not the main energy source.', 'Plants capture light energy.'],
        ['The fox’s muscles', 'Energy moved to the fox after it ate the rabbit.', 'Trace the chain backward to the producer.'],
        ['Carbon dioxide', 'Carbon dioxide supplies carbon, not the energy source.', 'Photosynthesis uses sunlight.'],
      ],
      lesson: () => 'Producers capture sunlight by photosynthesis, then energy passes through feeding relationships.',
    },
    {
      chapter: 'Genetics',
      title: 'Purple pea cross',
      prompt: () => 'Two pea plants are both heterozygous for purple flowers, where purple is dominant. What fraction of offspring are expected to be white?',
      correct: () => '1 in 4',
      wrong: () => [
        ['0 in 4', 'A recessive phenotype can appear when both parents pass on the recessive allele.', 'Use a Punnett square.'],
        ['2 in 4', 'That is the expected heterozygous fraction, not the white-flower fraction.', 'White needs two recessive alleles.'],
        ['4 in 4', 'Dominant purple does not disappear in this cross.', 'Only one genotype is white.'],
      ],
      lesson: () => 'A heterozygote cross gives a 1:2:1 genotype ratio, so homozygous recessive appears 25% of the time.',
    },
  ]
}

function chemistryBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Particles',
      title: 'Peppermint diffusion',
      prompt: () => 'A classroom smells like peppermint 30 seconds after one student opens a sweet. Why does the smell spread?',
      correct: () => 'Particles move randomly and spread from high to low concentration',
      wrong: () => [
        ['Particles are attracted to the walls', 'The smell spreads through the air, not because walls pull it.', 'Think random particle motion.'],
        ['Particles become heavier', 'Becoming heavier would not explain spreading.', 'Diffusion is about motion and concentration.'],
        ['Particles stop moving in gases', 'Gas particles move constantly.', 'That motion is why smells spread.'],
      ],
      lesson: () => 'Diffusion happens because particles are constantly moving and tend to spread out.',
    },
    {
      chapter: 'Reactions and Conservation',
      title: 'Burning iron wool',
      prompt: () => 'A clump of iron wool is burned in pure oxygen on a balance. What happens to the mass of the iron wool?',
      correct: () => 'It increases as iron combines with oxygen to form iron oxide',
      wrong: () => [
        ['It decreases because heat escapes', 'Heat carries energy but does not remove the mass of the iron.', 'Track the atoms, not the energy.'],
        ['It stays exactly the same in any chemical reaction', 'Mass is conserved overall, but on the balance you only see the iron and the new compound.', 'Account for added oxygen.'],
        ['It becomes zero because metals burn away', 'Iron burning forms iron oxide, a solid product, not nothing.', 'Use the conservation idea.'],
      ],
      lesson: () => 'Conservation of mass means atoms are conserved. Iron plus oxygen combine, so the solid mass on the balance increases.',
    },
    {
      chapter: 'Acids and Bases',
      title: 'pH of lemon juice',
      prompt: () => 'Lemon juice turns universal indicator red. The most likely pH is:',
      correct: () => 'About 2 (acidic)',
      wrong: () => [
        ['About 7 (neutral)', 'A neutral solution would not turn indicator red.', 'Red indicates acid.'],
        ['About 12 (basic)', 'A basic solution would turn indicator purple or blue.', 'Red indicates acid.'],
        ['About 14 (strongly basic)', 'Lemon juice is acidic, not basic.', 'Use the color guide.'],
      ],
      lesson: () => 'Universal indicator colors map pH: red is strongly acidic; green is neutral; blue/purple is basic.',
    },
    {
      chapter: 'States of Matter',
      title: 'Ice melting on a counter',
      prompt: () => 'An ice cube melts on a kitchen counter. The water and ice taken together have:',
      correct: () => 'The same total mass before and after, even though state changed',
      wrong: () => [
        ['Less total mass because melting reduces matter', 'State change does not destroy matter.', 'Conservation of mass.'],
        ['More total mass because liquid is heavier than ice', 'Liquid water is denser than ice, but total mass is unchanged unless evaporation occurs.', 'Mass vs density.'],
        ['Zero mass because the ice disappeared', 'Visual change is not mass loss.', 'Track the matter.'],
      ],
      lesson: () => 'Melting is a physical change. Particles rearrange but total mass is conserved.',
    },
  ]
}

function physicsBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Circuits',
      title: 'Fairy lights',
      prompt: () => 'Two identical bulbs are in series with one battery. A third identical bulb is added in series. What happens to each bulb?',
      correct: () => 'Each bulb becomes dimmer',
      wrong: () => [
        ['Each bulb becomes brighter', 'Adding series resistance reduces current.', 'Less current usually means dimmer bulbs.'],
        ['Only the new bulb lights', 'All bulbs are in the same loop.', 'Series components share the current.'],
        ['Brightness stays the same', 'The circuit resistance changed.', 'More resistance changes the current.'],
      ],
      lesson: () => 'Adding components in series increases total resistance and reduces current.',
    },
    {
      chapter: 'Forces',
      title: 'Pushing a heavy box',
      prompt: () => 'A box does not slide when pushed with 5 N. The static friction force from the floor on the box is:',
      correct: () => 'Equal in magnitude to the applied force (5 N) and opposite in direction',
      wrong: () => [
        ['Zero, because the box is not moving', 'Friction is the reason the box is not moving; it is not zero.', 'Newton\'s third law applies.'],
        ['Greater than the applied force, pushing the box backwards', 'Static friction balances exactly, not more, while the box is in equilibrium.', 'Use equilibrium logic.'],
        ['Exactly 9.8 N upward', 'That mixes weight with friction.', 'Compare horizontal forces.'],
      ],
      lesson: () => 'Static friction equals the applied force (up to a maximum) while an object stays at rest.',
    },
    {
      chapter: 'Energy',
      title: 'Pendulum at the bottom',
      prompt: () => 'A pendulum is released from rest and swings down. At the lowest point of the swing, the pendulum has:',
      correct: () => 'Maximum kinetic energy and minimum gravitational potential energy',
      wrong: () => [
        ['Maximum potential energy and zero kinetic energy', 'That describes the release point, not the lowest point.', 'Trade off PE and KE.'],
        ['Zero energy of any kind', 'Energy is conserved; it transforms but does not vanish.', 'Use conservation.'],
        ['Equal kinetic and potential energy', 'KE peaks at the bottom; PE is at its minimum reference there.', 'Track each form.'],
      ],
      lesson: () => 'In an ideal pendulum, KE and PE swap. KE peaks at the lowest point.',
    },
    {
      chapter: 'Waves',
      title: 'Wave on a string',
      prompt: () => 'A wave on a stretched string has frequency 4 Hz and wavelength 0.5 m. Its speed is:',
      correct: () => '2 m/s',
      wrong: () => [
        ['8 m/s', 'You may have multiplied incorrectly or used the wrong relationship.', 'Use v = f x wavelength.'],
        ['0.125 m/s', 'You inverted the formula.', 'Speed equals frequency times wavelength.'],
        ['4.5 m/s', 'You added frequency and wavelength.', 'Multiply, do not add.'],
      ],
      lesson: () => 'Wave speed equals frequency times wavelength: v = f x lambda.',
    },
  ]
}

function earthScienceBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Climate Feedbacks',
      title: 'Dark rock, less ice',
      prompt: () => 'A shrinking ice patch exposes darker rock beneath it. Why can this speed local warming?',
      correct: () => 'Dark surfaces absorb more sunlight, causing more warming',
      wrong: () => [
        ['Dark surfaces reflect more sunlight', 'Dark surfaces usually reflect less sunlight than ice.', 'Lower albedo means more absorption.'],
        ['Ice creates extra carbon dioxide when it melts', 'Melting ice is not the direct source here.', 'The feedback is about reflectivity.'],
        ['Soil blocks all heat transfer', 'Soil can absorb and transfer heat.', 'The key is sunlight absorption.'],
      ],
      lesson: () => 'Lower albedo means less reflection and more solar energy absorbed.',
    },
    {
      chapter: 'Plate Tectonics',
      title: 'Subduction zone',
      prompt: () => 'When an oceanic plate meets a continental plate at a convergent boundary, what usually happens?',
      correct: () => 'The denser oceanic plate subducts beneath the less dense continental plate',
      wrong: () => [
        ['The continental plate subducts beneath the oceanic plate', 'Continental plates are less dense and tend to ride above.', 'Compare densities.'],
        ['Both plates slide past each other with no subduction', 'That is a transform boundary, not convergent.', 'Match boundary type.'],
        ['The plates fuse and never move again', 'Plates remain dynamic.', 'Subduction continues geologically.'],
      ],
      lesson: () => 'At ocean-continent convergent boundaries, the denser oceanic plate slides under the lighter continental plate.',
    },
    {
      chapter: 'Water Cycle',
      title: 'Evaporation source',
      prompt: () => 'The main energy source driving evaporation in the water cycle is:',
      correct: () => 'The Sun',
      wrong: () => [
        ['Earth\'s internal heat', 'Geothermal heat is small compared with solar input at the surface.', 'Use the dominant driver.'],
        ['Wind kinetic energy only', 'Wind helps evaporation but does not provide the latent heat.', 'Energy source vs transport.'],
        ['Lightning and storms', 'Storms move water but do not power evaporation overall.', 'Use the radiant source.'],
      ],
      lesson: () => 'Solar radiation supplies the energy that evaporates surface water, driving the water cycle.',
    },
  ]
}

function scienceBlueprints(): Blueprint[] {
  // Broad fallback for tracks whose subject area is unspecified or cross-domain.
  // Per-domain banks (biology, chemistry, physics, earth science) handle their tracks separately.
  return [
    ...biologyBlueprints(),
    ...chemistryBlueprints(),
    ...physicsBlueprints(),
    ...earthScienceBlueprints(),
  ]
}

function englishBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Inference',
      title: 'Umbrella clue',
      prompt: () => 'Maya packed an umbrella after seeing dark clouds, though the forecast said “clear.” What can you infer?',
      correct: () => 'She uses evidence from the situation to prepare',
      wrong: () => [
        ['She ignores all advice', 'She considered new evidence, not ignored it.', 'Inference combines clues and reasonable knowledge.'],
        ['She dislikes surprises', 'That may be possible, but the text does not support it best.', 'Stay close to the evidence.'],
        ['She is being rude', 'Nothing in the sentence suggests rudeness.', 'Avoid unsupported character judgments.'],
      ],
      lesson: () => 'Inference combines text clues with reasonable background knowledge.',
    },
    {
      chapter: 'Grammar',
      title: 'Comma splice repair',
      prompt: () => 'Choose the correct revision: “The laptop froze, I lost my notes.”',
      correct: () => 'The laptop froze, so I lost my notes.',
      wrong: () => [
        ['The laptop froze I lost my notes.', 'That removes punctuation but leaves the run-on problem.', 'Two complete thoughts need a proper join.'],
        ['The laptop froze, lost my notes.', 'This drops the subject of the second idea.', 'The sentence needs clear grammar.'],
        ['The laptop froze, and so lost notes.', 'The wording is incomplete and awkward.', 'Use a clear connector and subject.'],
      ],
      lesson: () => 'A comma alone cannot join two complete sentences.',
    },
    {
      chapter: 'Tone',
      title: 'Printer sarcasm',
      prompt: () => '“Lovely, the printer jammed exactly when the essay was due.” What is the tone?',
      correct: () => 'Sarcastic',
      wrong: () => [
        ['Grateful', 'The situation is frustrating, not welcome.', 'Positive words in a bad situation can signal sarcasm.'],
        ['Formal', 'The wording is conversational.', 'Tone is the speaker’s attitude.'],
        ['Curious', 'The speaker is reacting, not asking or wondering.', 'Use context to infer attitude.'],
      ],
      lesson: () => 'Positive words used in a negative situation often signal sarcasm.',
    },
    {
      chapter: 'Evidence',
      title: 'Best support',
      prompt: () => 'Claim: Later school start times improve student wellbeing. Which evidence best supports it?',
      correct: () => 'A study found students slept longer and reported lower stress after the change',
      wrong: () => [
        ['Many students enjoy seeing friends', 'That does not directly support wellbeing from later starts.', 'Evidence should match the claim.'],
        ['The school building was renovated', 'That is unrelated to start times.', 'Relevant evidence matters.'],
        ['Some teachers prefer morning meetings', 'Teacher preference does not prove student wellbeing.', 'Use data tied to the claim.'],
      ],
      lesson: () => 'Strong evidence directly supports the claim with relevant data.',
    },
    {
      chapter: 'Vocabulary in Context',
      title: 'Two senses of "novel"',
      prompt: () => 'In the sentence "The team tried a novel approach to the problem," the word novel most nearly means:',
      correct: () => 'New or original',
      wrong: () => [
        ['A long fictional book', 'That is a different sense of the word, used as a noun.', 'Look at how the word is used as an adjective here.'],
        ['Boring and routine', 'That is roughly the opposite meaning.', 'Trying something novel suggests fresh, not familiar.'],
        ['Loud or attention-seeking', 'Volume is not part of the meaning here.', 'Focus on the freshness of the approach.'],
      ],
      lesson: () => 'Vocabulary in context means selecting the meaning that fits the sentence, even when a word has several senses.',
    },
    {
      chapter: 'Vocabulary Roots',
      title: 'Bene- root family',
      prompt: () => 'Knowing that the Latin root "bene" means good or well, which word most likely describes something helpful?',
      correct: () => 'Beneficial',
      wrong: () => [
        ['Maleficent', 'The root mal means bad, so this word means the opposite.', 'Watch for the prefix.'],
        ['Belligerent', 'That comes from a root meaning war, not good.', 'Similar opening letters can mislead; check the meaning.'],
        ['Benighted', 'That comes from night and means lacking knowledge, not helpful.', 'Surface spellings can trick a reader who skips meaning.'],
      ],
      lesson: () => 'Greek and Latin roots are a reliable shortcut for guessing the meaning of unfamiliar academic words.',
    },
    {
      chapter: 'Figurative Language',
      title: 'Time is a thief',
      prompt: () => 'A poem reads, "Time is a thief that steals the afternoon." This line is best described as:',
      correct: () => 'A metaphor that compares time to a thief',
      wrong: () => [
        ['A simile', 'A simile uses like or as; this line equates the two directly.', 'Look at how the comparison is built.'],
        ['Literal description', 'Time does not literally take coins; this is figurative.', 'Decide whether the words mean exactly what they say.'],
        ['Onomatopoeia', 'That names words that imitate sounds, like buzz or thud.', 'No sound is being imitated.'],
      ],
      lesson: () => 'A metaphor states that one thing is another to highlight a shared quality; similes use like or as.',
    },
    {
      chapter: 'Author\'s Purpose',
      title: 'Inform or persuade',
      prompt: () => 'An article lists ingredients of a vaccine and describes how trials measured safety, without recommending any action. The author\'s primary purpose is most likely to:',
      correct: () => 'Inform readers about how the vaccine was tested',
      wrong: () => [
        ['Persuade readers to refuse the vaccine', 'The article does not recommend a decision either way.', 'Identify recommendations before assigning a persuasive purpose.'],
        ['Entertain through a story', 'A factual procedure description is not a narrative.', 'Look for plot or character to mark entertainment.'],
        ['Issue an emergency warning', 'A warning would name a danger and a required action.', 'Neutral procedure descriptions do not raise alarms.'],
      ],
      lesson: () => 'Author\'s purpose is judged from the actions a text invites: to inform, persuade, entertain, or instruct.',
    },
    {
      chapter: 'Claim and Support',
      title: 'Distinguishing claim from evidence',
      prompt: () => 'An essay states: "Reading aloud improves comprehension. A 2019 study of 800 students showed test scores rose 12% after a six-week read-aloud program." Which sentence is the claim?',
      correct: () => '"Reading aloud improves comprehension."',
      wrong: () => [
        ['"A 2019 study of 800 students showed test scores rose 12%."', 'That sentence reports evidence used to back the claim.', 'A claim asserts; evidence supports.'],
        ['Both sentences are claims', 'Only one is the main assertion being supported.', 'The other gives data in service of it.'],
        ['Neither sentence is a claim', 'The first sentence makes a general assertion the second backs.', 'Look for the sentence that could be argued for or against.'],
      ],
      lesson: () => 'A claim is the arguable assertion; evidence is the data, example, or quotation that supports it.',
    },
    {
      chapter: 'Grammar',
      title: 'Subject-verb agreement',
      prompt: () => 'Pick the correct sentence:',
      correct: () => 'The box of chocolates was empty by morning.',
      wrong: () => [
        ['The box of chocolates were empty by morning.', 'The subject is box (singular), not chocolates; the prepositional phrase does not change the verb.', 'Strip out "of chocolates" and re-check.'],
        ['The boxes of chocolates was empty by morning.', 'A plural subject needs a plural verb.', 'Match the verb to the head noun.'],
        ['The box of chocolates be empty by morning.', '"Be" without a helper is not standard finite English.', 'Use a conjugated form of to be.'],
      ],
      lesson: () => 'Verbs agree with their subjects; prepositional phrases that follow the subject do not change the verb form.',
    },
    {
      chapter: 'Point of View',
      title: 'First or third person',
      prompt: () => '"I had not slept in two days, and the corridor refused to stay still." This narration is in:',
      correct: () => 'First person',
      wrong: () => [
        ['Second person', 'Second person addresses the reader as "you," which does not appear here.', 'Look at the pronouns used for the narrator.'],
        ['Third person limited', 'Third person uses he, she, or they for the focal character, not I.', 'The narrator is the speaker, not someone described.'],
        ['Third person omniscient', 'Omniscient narration reports inside multiple characters from outside; this stays inside one I.', 'I-narration is first person by definition.'],
      ],
      lesson: () => 'Point of view is identified by the pronouns the narrator uses for themselves and the characters around them.',
    },
  ]
}

function historyBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Ancient Civilizations',
      title: 'River valley settlement',
      prompt: () => 'The earliest cities in Mesopotamia, Egypt, the Indus Valley, and along the Yellow River shared which geographic feature?',
      correct: () => 'A reliable river system that supported farming and trade',
      wrong: () => [
        ['Cool mountain climates with abundant timber', 'Most early civilizations rose in warm, river-fed lowlands rather than highlands.', 'List where the named civilizations grew.'],
        ['Long Atlantic coastlines with deep harbors', 'Atlantic trade did not shape early urban civilization in any of these regions.', 'Match the geography of the named valleys.'],
        ['Volcanic islands with little fresh water', 'Stable fresh water and floodplain soils were essential to early agriculture.', 'A civilization needs water and food before stone.'],
      ],
      lesson: () => 'Early urban civilizations clustered along rivers because predictable water and silt enabled farming surpluses that supported cities.',
    },
    {
      chapter: 'Classical Empires',
      title: 'Roads and roads of the empire',
      prompt: () => 'Why did the Roman, Persian, and Han empires all invest heavily in road networks?',
      correct: () => 'Roads sped the movement of armies, officials, and trade across long distances',
      wrong: () => [
        ['Roads were used only for ceremonial parades', 'Roads carried armies, taxes, mail, and merchants on a routine basis.', 'Consider what a large empire needs to do daily.'],
        ['Roads existed only to mark religious pilgrimage routes', 'Pilgrim routes existed, but state roads served administration first.', 'Think about administrative reach.'],
        ['Roads were built only after the empires collapsed', 'Imperial road systems were built and maintained while empires were strong.', 'Infrastructure is a tool of governance, not a memorial.'],
      ],
      lesson: () => 'Roads let classical empires project military force, collect taxes, and integrate distant provinces with the capital.',
    },
    {
      chapter: 'Trade Networks',
      title: 'Silk Road exchange',
      prompt: () => 'Beyond silk, the network linking China to the Mediterranean across Central Asia is most associated with the exchange of:',
      correct: () => 'Goods, religions, technologies, and diseases between distant regions',
      wrong: () => [
        ['Only silk and nothing else', 'The network carried spices, paper, glass, ideas, and plagues; silk was one famous item.', 'A long trade route rarely carries a single product.'],
        ['Slave-grown sugar to the Americas', 'That is the Atlantic plantation system, not the Silk Road.', 'Match the route to the era and geography.'],
        ['Coal and iron during the Industrial Revolution', 'Industrial bulk goods belong to a much later European trade era.', 'Choose the era that matches Central Asian caravan trade.'],
      ],
      lesson: () => 'The Silk Roads moved religions like Buddhism, technologies like paper, and pathogens alongside goods — long-distance trade transfers more than cargo.',
    },
    {
      chapter: 'European History',
      title: 'Printing press impact',
      prompt: () => 'The spread of Gutenberg-style printing presses in fifteenth-century Europe most directly accelerated:',
      correct: () => 'The wider distribution of texts, including reformist religious tracts',
      wrong: () => [
        ['The immediate end of all illiteracy', 'Literacy grew gradually; printing did not erase it overnight.', 'Look for a directly enabled change rather than a total one.'],
        ['A return to oral-only tradition', 'Printing reduced reliance on memorized oral transmission, not the reverse.', 'Match the direction of change.'],
        ['The invention of writing itself', 'Writing predated printing by thousands of years.', 'Printing reproduces writing; it does not invent it.'],
      ],
      lesson: () => 'Movable-type printing made identical texts cheap and plentiful, fueling the Reformation, scientific publication, and broader literacy.',
    },
    {
      chapter: 'European History',
      title: 'Industrial start in Britain',
      prompt: () => 'One reason the Industrial Revolution began in eighteenth-century Britain rather than elsewhere is that Britain combined:',
      correct: () => 'Coal, capital, colonial markets, and a stable patent system',
      wrong: () => [
        ['A complete absence of any government', 'Britain had a strong central state that enforced contracts and patents.', 'Industrial growth required institutions, not anarchy.'],
        ['No interest in trade or shipping', 'Britain was an aggressive maritime trading power; that was part of the cause.', 'List the conditions of the era.'],
        ['A purely agricultural economy with no cities', 'Britain already had large cities and a manufacturing base before steam.', 'Industrialization grew from existing commerce, not from its absence.'],
      ],
      lesson: () => 'No single cause explains industrialization; Britain assembled cheap coal, financial markets, imperial demand, and protections for inventors at the same time.',
    },
    {
      chapter: 'World History',
      title: 'Causes of WWI',
      prompt: () => 'Historians often summarize the long-term causes of the First World War with four words. Which set best names them?',
      correct: () => 'Militarism, alliances, imperialism, nationalism',
      wrong: () => [
        ['Feudalism, manorialism, serfdom, chivalry', 'Those describe medieval Europe, not the run-up to 1914.', 'Match the causes to the era.'],
        ['Reformation, humanism, exploration, printing', 'Those characterize the early modern period rather than 1914.', 'These belong to a different syllabus chapter.'],
        ['Containment, deterrence, brinksmanship, detente', 'Those are Cold War terms from after 1945.', 'Watch the date of the war you are explaining.'],
      ],
      lesson: () => 'The MAIN framework — militarism, alliances, imperialism, nationalism — names structural pressures that turned a regional assassination into a global war.',
    },
    {
      chapter: 'Decolonization',
      title: 'Mid-century independence wave',
      prompt: () => 'Between roughly 1945 and 1970, dozens of new states emerged across Asia and Africa primarily because:',
      correct: () => 'European colonial empires weakened after the world wars and faced organized independence movements',
      wrong: () => [
        ['Colonial powers had run out of natural resources', 'Resource scarcity was not the main driver; political and military factors were.', 'Examine why empires released colonies, not what they wanted from them.'],
        ['New continents were discovered', 'No new continents appeared in the twentieth century.', 'Decolonization was political, not geographical.'],
        ['A single global treaty granted independence at once', 'Independence happened state by state, often through long struggle.', 'Look at the pattern across decades rather than one event.'],
      ],
      lesson: () => 'Weakened empires, surging nationalist movements, and Cold War pressure combined to produce the wave of decolonization after 1945.',
    },
    {
      chapter: 'Human Geography',
      title: 'Push and pull',
      prompt: () => 'Drought pushes workers from farms while city wages attract them to factories. Which concept explains both forces?',
      correct: () => 'Push-pull migration',
      wrong: () => [
        ['Cultural diffusion', 'That is the spread of cultural traits, not this migration pattern.', 'One factor drives people away and another attracts.'],
        ['Site and situation', 'Those describe location characteristics.', 'The clue is movement caused by pressures and attractions.'],
        ['Demographic transition', 'That describes birth- and death-rate change over time, not movement between places.', 'The question is about migration, not population growth.'],
      ],
      lesson: () => 'Push factors drive people away from a place; pull factors attract them to another. Together they shape most migration patterns.',
    },
    {
      chapter: 'Historical Method',
      title: 'Primary or secondary',
      prompt: () => 'A soldier\'s 1944 letter home from the front and a 2010 history textbook chapter about that battle are best classified as:',
      correct: () => 'The letter is a primary source; the textbook is a secondary source',
      wrong: () => [
        ['Both are primary sources because both describe the battle', 'A primary source comes from the time and place of the event; the textbook was written decades later.', 'Check who produced each item and when.'],
        ['Both are secondary sources because both can be wrong', 'Reliability is a separate question from the primary-secondary distinction.', 'Time and origin set the category.'],
        ['Neither counts as a historical source', 'Both are usable evidence; they just play different roles.', 'Sources are categorized by relationship to the event.'],
      ],
      lesson: () => 'Primary sources come from the time studied; secondary sources interpret primary material later. Both are useful, but they answer different questions.',
    },
    {
      chapter: 'Civics',
      title: 'Constitutional government',
      prompt: () => 'In any constitutional government, what does the constitution do?',
      correct: () => 'Sets the rules that even the government itself must follow',
      wrong: () => [
        ['Lets the ruler change any law at will, in writing', 'A constitution that ranks below ordinary decree is not constraining government.', 'A constitution must outrank everyday lawmaking to matter.'],
        ['Names the national anthem and flag colors only', 'Those may be mentioned, but the core function is structuring power.', 'Look at what a constitution does to government, not its symbols.'],
        ['Replaces all courts with a single judge for life', 'That describes a feature of authoritarian systems, not constitutional government.', 'Constitutions usually distribute, not concentrate, judicial power.'],
      ],
      lesson: () => 'A constitution is a higher-law framework that defines how government is organized and what limits it must respect.',
    },
  ]
}

function computingBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Semantic HTML',
      title: 'Hamster news',
      prompt: () => 'Mia is building a gossip-free “Hamster News” page with site links and one complete news story. Which HTML structure uses meaning best?',
      correct: () => '<nav>...</nav><main><article>...</article></main>',
      wrong: () => [
        ['<div class="nav">...</div><div class="story">...</div>', 'Classes can help styling, but semantic elements carry meaning.', 'Use elements that describe purpose.'],
        ['<main>...</main><nav><article>...</article></nav>', 'The article should not sit inside the navigation.', 'Keep navigation and main content roles clear.'],
        ['<section><button>Home</button><button>News</button></section>', 'Buttons are for actions, not ordinary navigation links.', 'Choose elements by meaning.'],
      ],
      lesson: () => '<nav> marks navigation, <main> marks the main content, and <article> marks content that can stand alone.',
    },
    {
      chapter: 'Accessibility',
      title: 'Canteen link',
      prompt: () => 'The school website has a link to the lunch menu, but it just says “click here”. What link text would be most helpful?',
      correct: () => 'View the canteen menu',
      wrong: () => [
        ['Click here', 'That does not say where the link goes.', 'Link text should make sense on its own.'],
        ['More info', 'That is still too vague.', 'Name the destination or action.'],
        ['Blue lunch link', 'Color is not enough and may not help all users.', 'Use meaningful words.'],
      ],
      lesson: () => 'Good link text makes sense on its own, so users know what will happen before following it.',
    },
    {
      chapter: 'Controls',
      title: 'Trevor the Toad vote',
      prompt: () => 'A voting page lets students vote for Trevor the Toad as prom mascot. Which version is most accessible for a click action?',
      correct: () => '<button type="button"><img src="toad.png" alt="">Vote for Trevor the Toad</button>',
      wrong: () => [
        ['<div onclick="vote()"><img src="toad.png">Vote</div>', 'A div is not a real button by default.', 'Use native controls when possible.'],
        ['<a href="#"><img src="toad.png" alt="image">Click here</a>', 'The link text and alt text are vague.', 'The control should describe the action.'],
        ['<span tabindex="0"><img src="toad.png" alt="Trevor the Toad">Vote</span>', 'Adding tabindex does not make a span fully button-like.', 'Native button behavior is safer.'],
      ],
      lesson: () => 'A real button is keyboard-friendly by default, and decorative images can use empty alt text when visible text carries the meaning.',
    },
    {
      chapter: 'Debugging',
      title: 'Bug hunt',
      prompt: () => 'A tiny script works for normal names but crashes on an empty name. What should the student test next?',
      correct: () => 'Trace the empty-name case and add a check for missing input',
      wrong: () => [
        ['Delete the failing test', 'The failing test is useful evidence.', 'Bugs reveal assumptions.'],
        ['Rewrite the whole project immediately', 'A full rewrite may hide the actual issue.', 'Trace the smallest failing case first.'],
        ['Assume the browser is haunted', 'Tempting, but not a debugging method.', 'Use evidence from the failing input.'],
      ],
      lesson: () => 'Good debugging starts with the smallest failing case and the assumption it exposes.',
    },
  ]
}

function lifeEconomicsBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Tradeoffs',
      title: 'Opportunity cost of a Saturday',
      prompt: () => 'A student can spend Saturday earning $60 or rehearsing for a scholarship audition. What should their decision include?',
      correct: () => 'The value of the best option they give up',
      wrong: () => [
        ['Only the price of bus fare', 'Direct costs matter, but opportunity cost is broader than out-of-pocket spending.', 'Consider the next best alternative, not just receipts.'],
        ['Only the option that sounds easiest', 'Ease is one factor, but it does not capture the value of what is sacrificed.', 'Compare value and consequences, not effort.'],
        ['No tradeoff, because both options are useful', 'Useful options can still compete when time is scarce.', 'Choosing one always means giving up the other.'],
      ],
      lesson: () => 'Opportunity cost is the value of the next best alternative given up when you make a choice.',
    },
    {
      chapter: 'Tradeoffs',
      title: 'Career vs grad school',
      prompt: () => 'A graduate is choosing between a $50,000 job and a two-year masters degree that costs $30,000 in tuition. Which figure best captures the opportunity cost of the masters?',
      correct: () => 'Roughly $100,000 in forgone wages plus the $30,000 tuition',
      wrong: () => [
        ['Only the $30,000 tuition bill', 'Tuition is direct cost; the wages given up are the larger opportunity cost.', 'Add what you forgo, not just what you pay.'],
        ['Only the forgone salary, ignoring tuition', 'Tuition is a real cash outlay that should also be counted.', 'Opportunity cost combines forgone earnings and direct cost.'],
        ['Zero, since both choices end in employment', 'Both eventually employ, but the paths use different resources of time and money.', 'Compare the next best alternative through the full window.'],
      ],
      lesson: () => 'Opportunity cost of education is best estimated as forgone earnings during study plus the direct cost of the program.',
    },
    {
      chapter: 'Budgeting',
      title: 'Income, fixed, variable, save',
      prompt: () => 'A monthly budget typically organizes spending into which categories?',
      correct: () => 'Fixed expenses, variable expenses, and savings, against expected income',
      wrong: () => [
        ['One single "fun money" line', 'A real budget separates obligations from discretionary spending.', 'Useful budgets break costs out by type.'],
        ['Only rent and groceries', 'Many monthly costs (transport, insurance, subscriptions) get ignored if the list is this short.', 'Capture all recurring spending, not just the visible ones.'],
        ['Only savings, ignoring expenses', 'Without expense planning, savings goals collapse the first surprise month.', 'A budget plans inflow and outflow together.'],
      ],
      lesson: () => 'A workable budget compares income to fixed costs (rent, insurance), variable costs (food, transport), and savings as a planned line — not a leftover.',
    },
    {
      chapter: 'Credit',
      title: 'Carrying a card balance',
      prompt: () => 'What happens when someone pays only the minimum payment on a credit card with a 20% APR?',
      correct: () => 'The unpaid balance accumulates interest, so the total cost of the purchase grows over time',
      wrong: () => [
        ['The card freezes interest until the next statement', 'Interest is charged on the carried balance every billing cycle.', 'Minimum payment is enough to avoid late fees, not enough to avoid interest.'],
        ['The bank forgives the remaining balance after one minimum payment', 'Issuers do not forgive balances simply because a minimum was paid.', 'The bank profits when balances are carried.'],
        ['The card behaves like cash and costs nothing extra', 'Unpaid balances are loans, not cash, and they accrue interest.', 'Treat any balance you do not pay in full as borrowed money.'],
      ],
      lesson: () => 'Paying only the minimum keeps an account in good standing but allows interest to compound, often costing more than the original purchase.',
    },
    {
      chapter: 'Credit',
      title: 'What a credit score reflects',
      prompt: () => 'A consumer credit score is most directly built from:',
      correct: () => 'A history of on-time payments, amounts owed, length of credit history, and types of credit',
      wrong: () => [
        ['How much money sits in a checking account', 'Bank balances are not reported to credit bureaus.', 'Credit scores track borrowing behavior, not savings.'],
        ['Annual salary alone', 'Income is not part of standard consumer credit scores in most systems.', 'A high earner who misses payments can still have a low score.'],
        ['Whether the person owns a pet', 'Personal habits unrelated to borrowing do not feature in credit scores.', 'Only items reported by lenders affect the score.'],
      ],
      lesson: () => 'Credit scores summarize borrowing reliability, not wealth: paying on time, not maxing balances, and keeping accounts open over years all help.',
    },
    {
      chapter: 'Taxes',
      title: 'Gross vs net pay',
      prompt: () => 'A first paycheck for a 40-hour week at $20 per hour is less than $800. The difference between gross and net pay is usually because:',
      correct: () => 'Income taxes and payroll deductions are withheld before the worker is paid',
      wrong: () => [
        ['Employers are allowed to keep some hours unpaid', 'Hours worked must be paid; the deduction is to the government, not the employer.', 'Look at what shows up in the paycheck deductions section.'],
        ['The bank charges a fee for receiving a paycheck', 'Banks typically do not skim a percentage of incoming wages.', 'Check whether the gap appears on the paystub or the bank statement.'],
        ['The minimum wage replaces the hourly rate retroactively', 'Minimum wage sets a floor; it does not override an agreed higher rate.', 'Re-read the deduction lines on the paystub.'],
      ],
      lesson: () => 'Most workers see gross pay reduced by income tax, social-insurance, and sometimes retirement or health deductions before the net amount lands in their account.',
    },
    {
      chapter: 'Taxes',
      title: 'Marginal vs flat rate',
      prompt: () => 'In a progressive income tax with brackets at 10%, 20%, and 30%, what does it mean if someone is "in the 30% bracket"?',
      correct: () => 'Only income above the 30% threshold is taxed at 30%; lower portions are taxed at lower rates',
      wrong: () => [
        ['All of their income is taxed at 30%', 'In a bracketed system, each slice of income is taxed at its own rate.', 'Bracket = marginal, not average.'],
        ['Their tax bill is exactly 30% of every dollar earned', 'The effective rate is lower than the top bracket in a progressive system.', 'Compute the weighted average across the brackets.'],
        ['Crossing into the bracket lowers total take-home pay', 'Only the portion above the threshold is taxed more; total pay still rises with a raise.', 'Marginal rate applies to the next dollar, not to all dollars.'],
      ],
      lesson: () => 'In a progressive tax system, a "bracket" names the rate on the next dollar earned, not the rate on every dollar.',
    },
    {
      chapter: 'Saving and Compounding',
      title: 'Compound vs simple',
      prompt: () => 'Why does $1,000 deposited at 5% interest compounded annually grow to more than $1,500 after ten years, even though 10 × $50 is only $500?',
      correct: () => 'Each year\'s interest is added to the balance, so future interest is earned on past interest',
      wrong: () => [
        ['Banks add a bonus after ten years', 'The growth comes from compounding, not a loyalty bonus.', 'Track the balance year by year to see why.'],
        ['The interest rate secretly increases', 'The rate is fixed at 5%; the balance it applies to is what grows.', 'Look at what the rate is applied to each year.'],
        ['Inflation always increases stated balances', 'Inflation reduces the buying power of money, not the nominal balance.', 'Compounding works on the balance regardless of prices.'],
      ],
      lesson: () => 'Compound interest pays interest on prior interest, so longer time horizons matter much more than higher starting balances.',
    },
    {
      chapter: 'Insurance',
      title: 'Why insurance exists',
      prompt: () => 'A 19-year-old debates whether to buy renters insurance for $15 a month. The economic point of insurance is to:',
      correct: () => 'Trade a small certain cost for protection against a rare large loss',
      wrong: () => [
        ['Guarantee a profit every month', 'On average insurers expect to keep more in premiums than they pay out; the buyer is not buying profit.', 'Ask why an insurer would sell a policy that loses them money on average.'],
        ['Avoid paying any expense ever again', 'Premiums, deductibles, and uncovered events all still cost money.', 'Insurance bounds the worst case; it does not zero out spending.'],
        ['Earn interest on premiums paid', 'Customers do not earn interest on premiums paid to an insurer.', 'Premiums are payments for protection, not deposits.'],
      ],
      lesson: () => 'Insurance is risk transfer: many small predictable payments protect against rare but financially catastrophic events.',
    },
    {
      chapter: 'Decisions',
      title: 'Time as opportunity cost',
      prompt: () => 'A free-but-three-hour-long event downtown still has a cost. The most useful name for that cost is:',
      correct: () => 'The opportunity cost of three hours spent elsewhere',
      wrong: () => [
        ['Zero, because the event has no entry fee', 'Time is a scarce resource even when admission is free.', 'Free in money is not free in hours.'],
        ['Only the bus fare', 'Out-of-pocket costs are real but they are not the full picture.', 'Add the value of the time used.'],
        ['Only the cost if you complain about it later', 'Cost is the value forgone, regardless of mood.', 'Opportunity cost is objective, not emotional.'],
      ],
      lesson: () => 'Even free-in-cash activities have an opportunity cost equal to the value of the best alternative use of that time.',
    },
  ]
}

function philosophyCreativeBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Epistemology',
      title: 'Justified true belief',
      prompt: () => 'In the traditional analysis going back to Plato, what three conditions did philosophers say a belief had to meet to count as knowledge?',
      correct: () => 'The belief must be true, the believer must hold it, and it must be justified',
      wrong: () => [
        ['It must be popular, repeated, and feel certain', 'Popularity and feeling certain are not the philosophical conditions for knowledge.', 'Knowledge needs more than confidence.'],
        ['It must be written down, witnessed, and stamped', 'These are formal records, not philosophical conditions on knowledge.', 'Look at the conditions on the belief itself.'],
        ['It must be original, unusual, and shocking', 'Originality is not required for a claim to count as knowledge.', 'A familiar truth can still be known.'],
      ],
      lesson: () => 'The classical "justified true belief" analysis says knowledge requires truth, belief, and justification. Gettier cases famously challenge whether this is enough.',
    },
    {
      chapter: 'Ethics',
      title: 'Consequentialism vs deontology',
      prompt: () => 'What is the clearest difference between consequentialist ethics (like utilitarianism) and deontological ethics (like Kant\'s)?',
      correct: () => 'Consequentialism judges actions by their outcomes; deontology judges them by duties and rules regardless of outcomes',
      wrong: () => [
        ['Consequentialism rejects ethics entirely; deontology supports it', 'Both are serious ethical theories, not opposites of ethics itself.', 'Compare their criteria, not their commitment to morality.'],
        ['They are the same theory under two names', 'They disagree on whether outcomes or duties decide moral worth.', 'A lying-to-save-a-life case typically splits them.'],
        ['Consequentialism is only about money; deontology is only about feelings', 'Both can apply to any domain of action.', 'Outcomes vs duties, not money vs feelings.'],
      ],
      lesson: () => 'Consequentialist theories ask what results an action produces; deontological theories ask whether the action itself conforms to duty.',
    },
    {
      chapter: 'Virtue Ethics',
      title: 'Aristotle on flourishing',
      prompt: () => 'For Aristotle, the goal of ethical life is eudaimonia, often translated as flourishing or living well. He argued this is best achieved through:',
      correct: () => 'Habitually practicing virtues like courage, honesty, and practical wisdom',
      wrong: () => [
        ['Maximizing pleasure in each moment with no constraints', 'That describes a hedonist position closer to Epicureanism, not Aristotle.', 'Aristotle separates a life going well from feeling good.'],
        ['Following the will of a single authority without question', 'Aristotelian flourishing involves the active exercise of reason and character.', 'It is a life of self-developed virtues, not blind obedience.'],
        ['Avoiding all action to escape ethical risk', 'Aristotle sees the good life as an active life of virtuous action.', 'Flourishing is something you do, not something you escape.'],
      ],
      lesson: () => 'Virtue ethics, especially Aristotle\'s, locates a good life in the long-term cultivation of character traits expressed in habitual action.',
    },
    {
      chapter: 'Free Will',
      title: 'Compatibilism',
      prompt: () => 'Compatibilists in philosophy of free will argue that:',
      correct: () => 'Free will and a deterministic universe can coexist, provided people act on their own reasons and desires',
      wrong: () => [
        ['Free will requires that nothing in the brain is physical', 'Compatibilism does not depend on non-physical minds.', 'It tries to make free will and determinism friendly, not exotic.'],
        ['No one ever makes a real choice in any sense', 'That is hard determinism, the position compatibilism rejects.', 'Compatibilism preserves a meaningful notion of choice.'],
        ['Determinism is a hoax', 'Compatibilism takes determinism seriously and accommodates it.', 'It is not a denial of physical causes.'],
      ],
      lesson: () => 'Compatibilism defines free will so that being caused to act by one\'s own reasons still counts as acting freely, even in a deterministic world.',
    },
    {
      chapter: 'Mind-Body',
      title: 'Dualism vs physicalism',
      prompt: () => 'A physicalist about the mind holds that:',
      correct: () => 'Mental states are entirely the result of physical processes, especially in the brain',
      wrong: () => [
        ['Minds are made of a non-physical substance distinct from matter', 'That is substance dualism, the position physicalism rejects.', 'Physicalism denies a separate mental substance.'],
        ['Mental states do not exist at all', 'Most physicalists accept that mental states exist; they just say these states are physical.', 'Eliminativism is a stronger separate view.'],
        ['Only animals, not humans, have minds', 'Physicalism is about what minds are made of, not which species have them.', 'The question is metaphysical, not zoological.'],
      ],
      lesson: () => 'Physicalism about mind says mental phenomena reduce to or are realized by physical processes; substance dualism, in contrast, posits a separate mental substance.',
    },
    {
      chapter: 'Existentialism',
      title: 'Sartre on freedom',
      prompt: () => 'In Sartre\'s existentialism, what does it mean to act in "bad faith"?',
      correct: () => 'To deny one\'s freedom by pretending one had no choice in how to act',
      wrong: () => [
        ['To break a written contract dishonestly', 'Sartre\'s sense is metaphysical rather than legal.', 'The term refers to self-deception about freedom.'],
        ['To act on a strongly held religious commitment', 'Sartre uses bad faith to describe self-deception, not religious belief in general.', 'Bad faith is about evading responsibility.'],
        ['To make a choice based only on emotion', 'Emotional choices can still be authentic in Sartre\'s view.', 'Bad faith is the denial of choice itself.'],
      ],
      lesson: () => 'For Sartre, bad faith is the self-deceiving move of treating one\'s socially given role as fixed, denying the freedom and responsibility that come with being a conscious agent.',
    },
    {
      chapter: 'Logic',
      title: 'Validity vs soundness',
      prompt: () => 'A philosophy student says, "The argument is valid but unsound." What does that combination mean?',
      correct: () => 'The conclusion follows from the premises, but at least one premise is false',
      wrong: () => [
        ['The argument is well-written but has no conclusion', 'Validity is about logical structure, not writing quality, and the argument has a conclusion.', 'Validity and soundness are technical, not stylistic.'],
        ['The argument is sound but has bad structure', 'Soundness requires valid structure plus true premises, so this combination is impossible.', 'Check the technical definitions.'],
        ['The premises are all true but unrelated', 'Validity requires that the conclusion follow from the premises; unrelated premises would make it invalid.', 'A valid argument has structural support.'],
      ],
      lesson: () => 'A valid argument has a structure where true premises would guarantee a true conclusion; a sound argument is valid and has true premises.',
    },
    {
      chapter: 'Political Philosophy',
      title: 'Rawls\'s veil of ignorance',
      prompt: () => 'John Rawls asks readers to imagine choosing the principles of justice from behind a "veil of ignorance." The point of the device is to:',
      correct: () => 'Strip away knowledge of personal advantages so principles are chosen fairly',
      wrong: () => [
        ['Hide the future from people so they never plan', 'The veil is a thought experiment about choosing principles, not a literal blindfold on life.', 'It targets bias in justification, not foresight in general.'],
        ['Give the strongest people the right to set the rules', 'Rawls\'s aim is the opposite: removing the advantage of strength when picking principles.', 'The veil neutralizes power and identity.'],
        ['Replace ethics with majority votes', 'Rawls is not arguing for plain majoritarianism; the veil is about fair impartiality.', 'It is a fairness device, not a voting rule.'],
      ],
      lesson: () => 'The veil of ignorance asks us to choose principles of justice without knowing which social position we will occupy, aiming for principles no one could reasonably reject.',
    },
    {
      chapter: 'Strategy',
      title: 'Sufficient evidence',
      prompt: () => 'A detective has a suspect at the scene, a motive, and a partial fingerprint that does not exclude the suspect. The most careful conclusion is:',
      correct: () => 'The evidence is suggestive but not yet enough to identify a single culprit',
      wrong: () => [
        ['The case is fully solved beyond all doubt', 'The fingerprint only fails to exclude the suspect; that is weaker than a match.', 'Distinguish "consistent with" from "uniquely identifies."'],
        ['No conclusion is possible from any of this', 'The combined evidence still moves the case forward and narrows hypotheses.', 'Weighing evidence is not all-or-nothing.'],
        ['Whoever was nearest the door is guilty', 'Proximity is not by itself sufficient evidence.', 'Pick the option that fits inference to the best explanation under uncertainty.'],
      ],
      lesson: () => 'Inference to the best explanation requires the chosen hypothesis to fit the evidence better than rivals; weak partial matches usually do not justify a unique conclusion.',
    },
    {
      chapter: 'Strategy',
      title: 'Forcing the move',
      prompt: () => 'In chess and other strategy games, why are forcing moves (checks, captures, and threats) usually analyzed first when reading a position?',
      correct: () => 'They limit the opponent\'s replies, so calculation trees stay shallow and exact',
      wrong: () => [
        ['They are the prettiest type of move on the board', 'Aesthetics is not why strong players prioritize them.', 'Forcing moves shape the search, not the style.'],
        ['They never lose material under any circumstance', 'Forcing moves can still lose; they just narrow the opponent\'s options.', 'Forcing does not mean safe.'],
        ['They are required by the rules every turn', 'No game rule requires a check, capture, or threat every move.', 'Forcing is a calculation heuristic, not a rule.'],
      ],
      lesson: () => 'Forcing moves are studied first because they restrict the opponent\'s legal replies, making concrete calculation tractable before quieter positional ideas are considered.',
    },
  ]
}

function logicArgumentationBlueprints(): Blueprint[] {
  return simpleBlueprints([
    {
      chapter: 'Argument Structure',
      title: 'Snack machine conclusion',
      prompt: 'A poster says, "The snack machine is empty because the crisps are gone and the chocolate shelf is bare." Which part is the conclusion?',
      correct: 'The snack machine is empty',
      wrong: [
        ['The crisps are gone', 'That is evidence, not the main claim being supported.', 'Look for the claim the other sentences are trying to prove.'],
        ['The chocolate shelf is bare', 'That is another premise.', 'Premises support the conclusion.'],
        ['There is no conclusion', 'The poster does make a main claim.', 'Find the supported claim.'],
      ],
      lesson: 'A conclusion is the claim the reasons are meant to support.',
    },
    {
      chapter: 'Argument Structure',
      title: 'Umbrella premise',
      prompt: 'Mina says, "The pavement is wet, and everyone is carrying umbrellas, so it probably rained." Which statement is a premise?',
      correct: 'The pavement is wet',
      wrong: [
        ['It probably rained', 'That is the conclusion.', 'The premise is a reason for thinking it rained.'],
        ['Mina is definitely wrong', 'That is not stated as a reason.', 'Use only the argument text.'],
        ['Umbrellas are impossible', 'That contradicts the setup.', 'Stay with the stated evidence.'],
      ],
      lesson: 'A premise is a reason offered in support of a conclusion.',
    },
    {
      chapter: 'Deductive and Inductive Reasoning',
      title: 'Sock drawer certainty',
      prompt: 'A drawer contains only blue socks. Tavi pulls out one sock. "This sock must be blue." What kind of reasoning is this?',
      correct: 'Deductive reasoning',
      wrong: [
        ['Inductive reasoning', 'The conclusion follows with certainty if the premise is true.', 'Induction deals in probability.'],
        ['A red herring', 'Nothing irrelevant is introduced.', 'This is about certainty from premises.'],
        ['A hasty generalization', 'The argument is not generalizing from a tiny sample.', 'The drawer rule covers all socks.'],
      ],
      lesson: 'Deductive reasoning aims for conclusions that must follow if the premises are true.',
    },
    {
      chapter: 'Deductive and Inductive Reasoning',
      title: 'Canteen soup forecast',
      prompt: 'Every Friday this month, the canteen served tomato soup. Jo says, "They will probably serve tomato soup next Friday." What kind of reasoning is this?',
      correct: 'Inductive reasoning',
      wrong: [
        ['Deductive reasoning', 'The conclusion is probable, not guaranteed.', 'Past patterns support but do not force the future.'],
        ['Modus tollens', 'There is no if-then structure being denied.', 'Look at pattern-based reasoning.'],
        ['Circular reasoning', 'The conclusion is not being used as its own premise.', 'This is an inference from examples.'],
      ],
      lesson: 'Inductive reasoning uses evidence to support a probable conclusion.',
    },
    {
      chapter: 'Validity and Soundness',
      title: 'Dragon mammal valid',
      prompt: 'All dragons are mammals. Noodle is a dragon. Therefore Noodle is a mammal. If the first premise is false but the structure works, what is the argument?',
      correct: 'Valid but not sound',
      wrong: [
        ['Sound but not valid', 'Sound arguments must have true premises and valid structure.', 'A false premise blocks soundness.'],
        ['Invalid because dragons are silly', 'Silly subject matter does not decide validity.', 'Validity is about structure.'],
        ['Neither valid nor invalid', 'Arguments can be assessed for validity.', 'Check whether the conclusion follows from the premises.'],
      ],
      lesson: 'Validity is about structure; soundness requires validity plus true premises.',
    },
    {
      chapter: 'Validity and Soundness',
      title: 'Library card soundness',
      prompt: 'All students at the school need library cards. Asha is a student at the school. Therefore Asha needs a library card. If both premises are true, what is this argument?',
      correct: 'Sound',
      wrong: [
        ['Valid but definitely unsound', 'If the premises are true and the structure is valid, it is sound.', 'Soundness adds true premises to validity.'],
        ['A false dilemma', 'No two-option trap appears.', 'This is a syllogism.'],
        ['Ad hominem', 'No person is attacked.', 'Focus on premise truth and structure.'],
      ],
      lesson: 'A sound argument is valid and has true premises.',
    },
    {
      chapter: 'Formal Logic',
      title: 'Raincoat ponens',
      prompt: 'If it rains, Sam wears a raincoat. It rains. Therefore Sam wears a raincoat. What form is this?',
      correct: 'Modus ponens',
      wrong: [
        ['Modus tollens', 'Modus tollens denies the consequent to deny the antecedent.', 'Here the antecedent is affirmed.'],
        ['Denying the antecedent', 'The argument does not say it did not rain.', 'It says the if-part happened.'],
        ['Bandwagon', 'No popularity claim appears.', 'This is formal logic.'],
      ],
      lesson: 'Modus ponens has the form: If P then Q; P; therefore Q.',
    },
    {
      chapter: 'Formal Logic',
      title: 'No bell tollens',
      prompt: 'If the fire drill starts, the bell rings. The bell did not ring. Therefore the fire drill did not start. What form is this?',
      correct: 'Modus tollens',
      wrong: [
        ['Modus ponens', 'Modus ponens affirms the if-part.', 'This argument denies the then-part.'],
        ['Affirming the consequent', 'It does not say the bell rang.', 'It uses not-Q to infer not-P.'],
        ['Appeal to emotion', 'No emotion is used as evidence.', 'Look at the if-then structure.'],
      ],
      lesson: 'Modus tollens has the form: If P then Q; not Q; therefore not P.',
    },
    {
      chapter: 'Formal Fallacies',
      title: 'Toast dragon trap',
      prompt: 'All dragons love toast. Pebble loves toast. Therefore Pebble is a dragon. What is wrong?',
      correct: 'It affirms the consequent',
      wrong: [
        ['It is modus tollens', 'Modus tollens denies the consequent.', 'Here the then-part is affirmed.'],
        ['It has no conclusion', 'It concludes Pebble is a dragon.', 'The flaw is the reasoning form.'],
        ['It is sound because toast is tasty', 'Toast tastiness does not fix invalid logic.', 'Check the if-then pattern.'],
      ],
      lesson: 'From "If dragon then toast-lover" and "toast-lover," you cannot conclude "dragon."',
    },
    {
      chapter: 'Formal Fallacies',
      title: 'No homework antecedent',
      prompt: 'If Kai studies, Kai passes the quiz. Kai did not study. Therefore Kai did not pass. What is the flaw?',
      correct: 'Denying the antecedent',
      wrong: [
        ['Modus ponens', 'Modus ponens affirms the antecedent.', 'This argument denies it.'],
        ['Ad hominem', 'No person is attacked.', 'The flaw is formal.'],
        ['A strong induction', 'The structure is not a probability generalization.', 'It is an invalid if-then move.'],
      ],
      lesson: 'Denying the antecedent is invalid because Q might happen for another reason.',
    },
    {
      chapter: 'Logical Operators',
      title: 'And gate snacks',
      prompt: 'A club rule says, "You may enter if you bring a notebook AND a pencil." Ria brings only a notebook. What follows?',
      correct: 'Ria has not met the rule',
      wrong: [
        ['Ria met the rule because one item is enough', 'AND requires both conditions.', 'One true part is not enough for AND.'],
        ['The rule is about either item', 'That would be OR, not AND.', 'Read the operator carefully.'],
        ['Ria must be banned forever', 'The rule only says entry condition is unmet.', 'Do not add extra punishment.'],
      ],
      lesson: 'An AND condition is satisfied only when both parts are true.',
    },
    {
      chapter: 'Logical Operators',
      title: 'Or gate badge',
      prompt: 'A game door opens if you have a silver badge OR a gold badge. Noor has a gold badge. What should happen?',
      correct: 'The door should open',
      wrong: [
        ['The door stays shut unless Noor has both badges', 'That treats OR like AND.', 'Inclusive OR needs at least one condition.'],
        ['The door opens only with no badges', 'That reverses the rule.', 'Gold is one allowed badge.'],
        ['The rule cannot be evaluated', 'The setup gives enough information.', 'Check the OR condition.'],
      ],
      lesson: 'In ordinary logic questions, OR usually means at least one condition is enough.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Skateboard scientist',
      prompt: 'A scientist gives evidence about air pollution. The reply is, "Ignore her; she rides a ridiculous skateboard." Which fallacy is this?',
      correct: 'Ad hominem',
      wrong: [
        ['Straw man', 'Her argument is not being misrepresented.', 'The reply attacks the person.'],
        ['False cause', 'No causal claim is made.', 'Look for a personal attack.'],
        ['Modus ponens', 'This is not an if-then argument.', 'It is an informal fallacy.'],
      ],
      lesson: 'Ad hominem attacks a person instead of addressing the argument.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Homework straw monster',
      prompt: 'Maya says homework should be shorter. Leo replies, "Maya wants students to learn nothing ever." Which fallacy is this?',
      correct: 'Straw man',
      wrong: [
        ['Red herring', 'The reply distorts the original argument rather than changing topic.', 'A straw man makes a weaker fake version.'],
        ['Bandwagon', 'No popularity claim appears.', 'Focus on the distortion.'],
        ['Modus tollens', 'No if-then logic is used.', 'This is an informal fallacy.'],
      ],
      lesson: 'A straw man misrepresents an argument to make it easier to attack.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Cafeteria red herring',
      prompt: 'The class asks why lunch prices rose. The manager replies, "Our new posters are very colorful." Which fallacy is this?',
      correct: 'Red herring',
      wrong: [
        ['Ad hominem', 'No person is attacked.', 'The answer distracts from the issue.'],
        ['Circular reasoning', 'The conclusion is not repeated as evidence.', 'The topic has been shifted.'],
        ['Modus ponens', 'There is no if-then form.', 'This is a distraction fallacy.'],
      ],
      lesson: 'A red herring introduces an irrelevant point to distract from the main issue.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Everyone has slime shoes',
      prompt: 'An advert says, "Buy SlimeStep shoes because everyone cool already has them." Which appeal is being used?',
      correct: 'Bandwagon appeal',
      wrong: [
        ['Appeal to pity', 'The advert does not ask you to feel sorry.', 'It relies on popularity.'],
        ['False cause', 'No cause-effect claim is central.', 'The reason is that others do it.'],
        ['Denying the antecedent', 'No if-then form appears.', 'This is rhetoric, not formal logic.'],
      ],
      lesson: 'Bandwagon appeals treat popularity as if it proves a claim or choice is good.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Tiny survey giant claim',
      prompt: 'After asking two students, "Do you like maths?", Ben says nobody in the school likes maths. What fallacy is this?',
      correct: 'Hasty generalization',
      wrong: [
        ['Circular reasoning', 'The claim is not simply repeated as support.', 'The sample is too small.'],
        ['Appeal to authority', 'No expert is cited.', 'The problem is weak evidence.'],
        ['Modus ponens', 'No valid if-then pattern is present.', 'This is an overgeneralization.'],
      ],
      lesson: 'A hasty generalization draws a broad conclusion from too little evidence.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Lucky socks cause goals',
      prompt: 'Ravi wore penguin socks and scored a goal. He says the socks caused the goal. What fallacy might he be making?',
      correct: 'Post hoc false cause',
      wrong: [
        ['Ad hominem', 'No person is attacked.', 'The issue is mistaken causation.'],
        ['False dilemma', 'No forced two-choice setup appears.', 'Look at after-this therefore because-of-this.'],
        ['Valid syllogism', 'The conclusion does not follow from timing alone.', 'Sequence is not proof of cause.'],
      ],
      lesson: 'Post hoc reasoning mistakes one event happening before another for proof of causation.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Two lunch futures',
      prompt: 'A student says, "Either we serve pizza every day or lunch is ruined forever." Which fallacy is this?',
      correct: 'False dilemma',
      wrong: [
        ['Appeal to authority', 'No authority is cited.', 'The problem is pretending there are only two options.'],
        ['Tu quoque', 'No hypocrisy accusation appears.', 'Look for black-and-white framing.'],
        ['Modus tollens', 'This is not an if-then proof.', 'It is an informal fallacy.'],
      ],
      lesson: 'A false dilemma presents too few options when more possibilities exist.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'One button apocalypse',
      prompt: 'A teacher says, "If we allow one funny slide in a presentation, soon every lesson will be taught by tap-dancing raccoons." Which fallacy is this?',
      correct: 'Slippery slope',
      wrong: [
        ['Bandwagon', 'No popularity claim is made.', 'The argument predicts an extreme chain reaction.'],
        ['Hasty generalization', 'This is not mainly about a small sample.', 'It is an unsupported slide from one step to disaster.'],
        ['Sound deductive argument', 'The chain is not properly supported.', 'Check whether each step is justified.'],
      ],
      lesson: 'A slippery slope assumes a small step will lead to extreme results without enough support.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Because I am right',
      prompt: 'Nia says, "My plan is the best because no plan is better than mine." Which fallacy is this?',
      correct: 'Circular reasoning',
      wrong: [
        ['Red herring', 'The topic is not changed.', 'The support repeats the claim.'],
        ['Appeal to emotion', 'Emotion is not the main evidence.', 'Look for the conclusion inside the premise.'],
        ['Strong induction', 'No independent evidence is given.', 'A circle does not support itself.'],
      ],
      lesson: 'Circular reasoning uses the conclusion as if it were evidence for itself.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'But you littered',
      prompt: 'Ava says the park needs less litter. Max replies, "You dropped a wrapper last week, so your point is false." Which fallacy is this?',
      correct: 'Tu quoque',
      wrong: [
        ['Steelman', 'This does not improve Ava argument.', 'It accuses hypocrisy instead of answering the claim.'],
        ['False cause', 'No mistaken cause is argued.', 'The reply says "you too."'],
        ['Modus ponens', 'No if-then proof appears.', 'It is an appeal to hypocrisy.'],
      ],
      lesson: 'Tu quoque dismisses a claim by accusing the speaker of hypocrisy.',
    },
    {
      chapter: 'Informal Fallacies',
      title: 'Celebrity moon fact',
      prompt: 'A famous actor says the Moon is made of soup, so a student says it must be true. Which fallacy is this?',
      correct: 'Appeal to false authority',
      wrong: [
        ['Valid appeal to expertise', 'An actor is not presented as a Moon-science expert.', 'Authority must be relevant.'],
        ['Straw man', 'No one argument is distorted.', 'The problem is irrelevant authority.'],
        ['Competitive exclusion', 'That is biology, not argumentation.', 'Stay in logic.'],
      ],
      lesson: 'An authority is useful only when they are credible in the relevant area.',
    },
    {
      chapter: 'Rhetoric',
      title: 'Dentist ethos',
      prompt: 'An advert says, "Nine local dentists recommend this toothbrush." Which rhetorical appeal is strongest?',
      correct: 'Ethos',
      wrong: [
        ['Pathos', 'The advert is not mainly using emotion.', 'It leans on credibility.'],
        ['Logos only', 'There is some evidence, but the main appeal is expert trust.', 'Dentists provide credibility.'],
        ['Straw man', 'No opposing argument is distorted.', 'This is rhetoric.'],
      ],
      lesson: 'Ethos appeals to credibility or trustworthiness.',
    },
    {
      chapter: 'Rhetoric',
      title: 'Lost puppy pathos',
      prompt: 'A poster shows a shivering cartoon puppy and says, "Please donate blankets today." Which rhetorical appeal is strongest?',
      correct: 'Pathos',
      wrong: [
        ['Ethos', 'No speaker credibility is the main evidence.', 'The poster aims at feelings.'],
        ['Logos', 'No data or chain of reasoning is central.', 'The emotional image matters most.'],
        ['Modus tollens', 'No if-then proof appears.', 'This is rhetoric.'],
      ],
      lesson: 'Pathos appeals to emotion.',
    },
    {
      chapter: 'Rhetoric',
      title: 'Recycling numbers logos',
      prompt: 'A speech says, "Our school threw away 300 kg less paper after adding recycling bins." Which rhetorical appeal is strongest?',
      correct: 'Logos',
      wrong: [
        ['Pathos', 'The appeal uses evidence more than emotion.', 'Numbers point to logic.'],
        ['Ethos only', 'The speaker credibility is not the main feature.', 'The statistic supports the claim.'],
        ['Bandwagon', 'The speech does not say everyone is doing it.', 'It gives data.'],
      ],
      lesson: 'Logos appeals to reason, evidence, and logic.',
    },
    {
      chapter: 'Rhetoric',
      title: 'Charity before critique',
      prompt: 'Before criticizing an opponent, Layla restates their argument in the strongest fair version she can. What principle is she using?',
      correct: 'The principle of charity',
      wrong: [
        ['Ad hominem', 'She is not attacking the person.', 'She is interpreting fairly.'],
        ['Red herring', 'She is not changing the subject.', 'She strengthens the target before responding.'],
        ['False dilemma', 'No two-option trap is present.', 'This is fair argument practice.'],
      ],
      lesson: 'The principle of charity means interpreting an argument in its strongest reasonable form before critiquing it.',
    },
    {
      chapter: 'Rhetoric',
      title: 'Steel robot version',
      prompt: 'Omar turns a weak version of his opponent point into a clearer, stronger version before replying. What is this called?',
      correct: 'Steelmanning',
      wrong: [
        ['Strawmanning', 'A straw man weakens or distorts the opponent.', 'Steelman improves the version being answered.'],
        ['Bandwagoning', 'Popularity is not involved.', 'This is about fair reconstruction.'],
        ['Denying the antecedent', 'No if-then form appears.', 'It is an argumentation skill.'],
      ],
      lesson: 'Steelmanning is presenting the strongest fair version of another argument.',
    },
    {
      chapter: 'Counterarguments',
      title: 'Best objection',
      prompt: 'A claim says school should start at 10 a.m. Which is the strongest counterargument?',
      correct: 'Later starts could create childcare and transport problems for families',
      wrong: [
        ['The person suggesting it has messy handwriting', 'That attacks the person, not the idea.', 'Use relevant consequences.'],
        ['All clocks are suspicious', 'That is irrelevant and silly.', 'Answer the actual proposal.'],
        ['Everyone who disagrees hates sleep', 'That misrepresents opponents.', 'Use a fair objection.'],
      ],
      lesson: 'A strong counterargument directly challenges the claim with relevant reasons or evidence.',
    },
    {
      chapter: 'Evidence',
      title: 'Reliable source hunt',
      prompt: 'Which source is strongest for a claim about local air quality?',
      correct: 'Recent measurements from the city environmental monitoring station',
      wrong: [
        ['A meme saying the air smells crunchy', 'A meme is weak evidence for measurement claims.', 'Use relevant data.'],
        ['A celebrity guess from ten years ago', 'The authority and date are weak.', 'Prefer current expert evidence.'],
        ['A random dream about fog', 'Dreams are not reliable evidence.', 'Look for measured facts.'],
      ],
      lesson: 'Strong evidence is relevant, reliable, current, and appropriate to the claim.',
    },
    {
      chapter: 'Evidence',
      title: 'Anecdote alarm',
      prompt: 'One student says, "My cousin loved the new timetable, so everyone will love it." What is the evidence problem?',
      correct: 'One anecdote is too little evidence for a broad claim',
      wrong: [
        ['The claim has too much data', 'It has too little data.', 'One example is weak for "everyone."'],
        ['The cousin is a conclusion', 'The cousin is an example, not the conclusion.', 'Focus on evidence size.'],
        ['This is modus tollens', 'No if-then denial appears.', 'It is weak general evidence.'],
      ],
      lesson: 'Anecdotes can be useful starts, but broad claims need broader evidence.',
    },
    {
      chapter: 'Evidence',
      title: 'Correlation cookie',
      prompt: 'Students who bring cookies get higher quiz scores. Which conclusion is safest?',
      correct: 'Cookie-bringing is associated with higher scores, but may not cause them',
      wrong: [
        ['Cookies definitely cause intelligence', 'Correlation alone does not prove causation.', 'A third factor may explain both.'],
        ['The data proves cookies are unrelated', 'Association was observed.', 'Do not ignore the pattern.'],
        ['Quizzes cause cookies to exist', 'That reverses causation without evidence.', 'Stay cautious.'],
      ],
      lesson: 'Correlation shows association, not necessarily cause.',
    },
    {
      chapter: 'Evidence',
      title: 'Fair comparison',
      prompt: 'To test whether music helps revision, which setup is fairest?',
      correct: 'Compare similar students randomly assigned to revise with music or without music',
      wrong: [
        ['Compare music fans to students who hate music with no controls', 'Pre-existing differences could explain results.', 'Control confounders.'],
        ['Ask only the band club', 'That sample is biased.', 'Use a fair sample.'],
        ['Change music, snacks, sleep, and room temperature all at once', 'Too many variables change.', 'Isolate the factor being tested.'],
      ],
      lesson: 'Fair comparisons reduce confounding variables and isolate the factor being tested.',
    },
    {
      chapter: 'Cognitive Biases',
      title: 'Confirmation goblin',
      prompt: 'Jules only reads comments agreeing that pineapple pizza is heroic and ignores every disagreement. Which bias is this?',
      correct: 'Confirmation bias',
      wrong: [
        ['Anchoring', 'Anchoring relies too heavily on an initial number or idea.', 'Here Jules seeks confirming evidence.'],
        ['False dilemma', 'No two-option trap appears.', 'The issue is selective evidence.'],
        ['Modus ponens', 'No if-then proof is used.', 'This is a bias.'],
      ],
      lesson: 'Confirmation bias is favoring information that supports what you already believe.',
    },
    {
      chapter: 'Cognitive Biases',
      title: 'First price anchor',
      prompt: 'A shop first shows a backpack for 200 pounds, then "discounts" it to 80 pounds. Mina thinks 80 is cheap mostly because of the first number. Which bias is this?',
      correct: 'Anchoring',
      wrong: [
        ['Confirmation bias', 'She is not selectively seeking matching evidence.', 'The first number shapes judgment.'],
        ['Ad hominem', 'No person is attacked.', 'This is a judgment bias.'],
        ['Circular reasoning', 'No conclusion is repeated as evidence.', 'Think first-number influence.'],
      ],
      lesson: 'Anchoring happens when an initial number or idea strongly influences later judgment.',
    },
    {
      chapter: 'Cognitive Biases',
      title: 'Easy memory shark',
      prompt: 'After watching three shark videos, Priya thinks shark attacks are common because examples come to mind quickly. Which bias is this?',
      correct: 'Availability heuristic',
      wrong: [
        ['Principle of charity', 'She is not interpreting an argument fairly.', 'She judges frequency by easy recall.'],
        ['Modus tollens', 'No if-then argument appears.', 'This is a mental shortcut.'],
        ['Tu quoque', 'No hypocrisy reply appears.', 'Look at memory-based judgment.'],
      ],
      lesson: 'The availability heuristic estimates likelihood based on how easily examples come to mind.',
    },
    {
      chapter: 'Truth Tables',
      title: 'Not rainy',
      prompt: 'If P means "It is raining" and P is false, what is NOT P?',
      correct: 'True',
      wrong: [
        ['False', 'Because P is false, applying NOT flips it to true rather than leaving it false.', 'If P is false, not-P is true.'],
        ['Both true and false', 'Intro truth tables use one truth value at a time.', 'Apply negation.'],
        ['A premise, not a truth value', 'The question asks for truth value.', 'NOT P can be true or false.'],
      ],
      lesson: 'Negation flips true to false and false to true.',
    },
    {
      chapter: 'Truth Tables',
      title: 'And truth table',
      prompt: 'If P is true and Q is false, what is P AND Q?',
      correct: 'False',
      wrong: [
        ['True', 'AND requires both parts to be true.', 'One false part makes the conjunction false.'],
        ['Cannot be evaluated', 'The truth values are given.', 'Apply AND.'],
        ['Only true on Tuesdays', 'Day of week is irrelevant.', 'Use the operator.'],
      ],
      lesson: 'P AND Q is true only when both P and Q are true.',
    },
    {
      chapter: 'Truth Tables',
      title: 'Or truth table',
      prompt: 'If P is false and Q is true, what is P OR Q?',
      correct: 'True',
      wrong: [
        ['False', 'OR needs at least one true part.', 'Q is true.'],
        ['Only true if both are true', 'That describes AND, not OR.', 'OR is less strict.'],
        ['A fallacy', 'This is a truth table operation.', 'Evaluate the operator.'],
      ],
      lesson: 'P OR Q is true when at least one part is true.',
    },
    {
      chapter: 'Truth Tables',
      title: 'If then false case',
      prompt: 'For "If P, then Q," which case makes the conditional false?',
      correct: 'P is true and Q is false',
      wrong: [
        ['P is true and Q is true', 'That keeps the promise.', 'The if-part happens and the then-part happens.'],
        ['P is false and Q is true', 'A false antecedent does not break the conditional in standard truth tables.', 'The only false case is true then false.'],
        ['P is false and Q is false', 'In standard truth tables, this is not the false case.', 'Only P true and Q false violates it.'],
      ],
      lesson: 'A conditional is false only when the antecedent is true and the consequent is false.',
    },
    {
      chapter: 'Argument Repair',
      title: 'Missing bridge',
      prompt: 'Argument: "Lina is on the debate team. Therefore Lina practices speeches." Which missing premise would best strengthen the argument?',
      correct: 'Everyone on the debate team practices speeches',
      wrong: [
        ['Lina likes soup', 'That does not connect debate team to speeches.', 'Add a bridge premise.'],
        ['Some speeches are long', 'That does not show Lina practices them.', 'The missing link must mention Lina group.'],
        ['No one practices anything', 'That weakens the conclusion.', 'Choose support, not sabotage.'],
      ],
      lesson: 'A bridge premise connects the given evidence to the conclusion.',
    },
    {
      chapter: 'Argument Repair',
      title: 'Weak word swap',
      prompt: 'Which conclusion is best supported by "Most students surveyed preferred the new library chairs"?',
      correct: 'Most surveyed students preferred the new library chairs',
      wrong: [
        ['Every student in the country prefers the chairs', 'That overstates the evidence.', 'Keep the scope to the survey.'],
        ['The chairs are objectively perfect', 'Preference data does not prove perfection.', 'Do not exaggerate.'],
        ['Nobody disliked the chairs', 'Most does not mean all.', 'Leave room for minority responses.'],
      ],
      lesson: 'A strong conclusion matches the scope and strength of the evidence.',
    },
    {
      chapter: 'Argument Repair',
      title: 'Hidden assumption',
      prompt: 'A sign says, "Join chess club; it improves planning." What assumption does this rely on?',
      correct: 'Skills practiced in chess can help with planning more generally',
      wrong: [
        ['All chess pieces are edible', 'That is irrelevant and false.', 'Find the bridge between chess and planning.'],
        ['No one likes planning', 'The sign does not need that assumption.', 'It assumes a benefit transfers.'],
        ['Chess club meets underwater', 'That is not connected to the claim.', 'Stay with the argument.'],
      ],
      lesson: 'An assumption is an unstated idea the argument needs in order to work.',
    },
    {
      chapter: 'Argument Repair',
      title: 'Best revision',
      prompt: 'Which revision makes this claim more precise: "Phones are bad"?',
      correct: 'Using phones during homework can distract some students and reduce focus',
      wrong: [
        ['Phones are evil rectangle goblins', 'Funny, but not precise evidence-based wording.', 'Make the claim specific.'],
        ['Phones exist', 'That is true but not an argument.', 'Precision needs a clear effect.'],
        ['Everyone must throw phones into the sea', 'That is extreme and unsupported.', 'Narrow the claim.'],
      ],
      lesson: 'Precise claims state who, what, and how, without overreaching.',
    },
    {
      chapter: 'Debate',
      title: 'Rebuttal target',
      prompt: 'In a debate, which reply best rebuts "Uniforms save families money"?',
      correct: 'Some families may still need to buy both uniforms and ordinary clothes, increasing costs',
      wrong: [
        ['Uniforms are blue sometimes', 'That does not address saving money.', 'Answer the claim directly.'],
        ['The speaker has a squeaky chair', 'That attacks an irrelevant feature.', 'Stay on the argument.'],
        ['Money is a number word', 'That is not a rebuttal.', 'Use relevant evidence or reasoning.'],
      ],
      lesson: 'A rebuttal should respond directly to the reason offered by the other side.',
    },
    {
      chapter: 'Debate',
      title: 'Concession move',
      prompt: 'Which sentence makes a useful concession before arguing back?',
      correct: 'It is true uniforms can make mornings simpler, but they may also limit student expression',
      wrong: [
        ['My opponent is a sock wizard', 'That is not a fair concession.', 'Acknowledge a real point.'],
        ['There is no possible good point on the other side', 'That refuses concession.', 'Debates are stronger when fair.'],
        ['Uniforms are uniforms because they are uniforms', 'That is circular and unhelpful.', 'Concede then respond.'],
      ],
      lesson: 'A concession fairly acknowledges a point before explaining why your position still stands.',
    },
    {
      chapter: 'Debate',
      title: 'Claim evidence reasoning',
      prompt: 'In CER writing, what does the R stand for?',
      correct: 'Reasoning that explains how the evidence supports the claim',
      wrong: [
        ['Randomness added at the end', 'CER is structured, not random.', 'R links evidence to claim.'],
        ['Repeating the claim only', 'Reasoning should explain, not merely repeat.', 'Show the connection.'],
        ['Raccoon diagram', 'Memorable, but not CER.', 'Use the writing framework.'],
      ],
      lesson: 'CER means claim, evidence, reasoning; reasoning explains the link.',
    },
    {
      chapter: 'Debate',
      title: 'Burden of proof',
      prompt: 'A student claims the school roof contains a secret dragon gym. Who has the burden of proof?',
      correct: 'The student making the dragon-gym claim',
      wrong: [
        ['Everyone else must disprove it first', 'The claimant needs evidence for an unusual claim.', 'Burden of proof starts with the person asserting.'],
        ['The dragon, who is unavailable', 'Funny but not how argument works.', 'People making claims provide support.'],
        ['No one ever needs evidence', 'Arguments need reasons.', 'Especially for surprising claims.'],
      ],
      lesson: 'The burden of proof usually belongs to the person making the claim.',
    },
    {
      chapter: 'Analogy',
      title: 'Weak analogy',
      prompt: 'A student says, "Schools and submarines both have doors, so schools should have periscopes." What is the problem?',
      correct: 'The analogy relies on a shallow similarity',
      wrong: [
        ['The conclusion follows perfectly', 'Shared doors do not justify periscopes.', 'Relevant similarity matters.'],
        ['It is an appeal to pity', 'No pity is used.', 'The issue is a weak comparison.'],
        ['It is modus ponens', 'No if-then form is doing the work.', 'This is analogical reasoning.'],
      ],
      lesson: 'Analogies are stronger when the similarities are relevant to the conclusion.',
    },
    {
      chapter: 'Definitions',
      title: 'Equivocation bat',
      prompt: 'A sign says, "Bats are used in cricket. Bats are mammals. Therefore cricket uses mammals." What fallacy is this?',
      correct: 'Equivocation',
      wrong: [
        ['Ad hominem', 'No person is attacked.', 'The word bat changes meaning.'],
        ['Bandwagon', 'No popularity claim is made.', 'Look at the ambiguous term.'],
        ['Sound syllogism', 'The argument shifts meanings, so it fails.', 'Same word, different meanings.'],
      ],
      lesson: 'Equivocation uses a key word in different senses inside the same argument.',
    },
    {
      chapter: 'Definitions',
      title: 'Loaded question',
      prompt: 'Someone asks, "Have you stopped hiding cafeteria spoons?" even though there is no evidence you hid any. What is the problem?',
      correct: 'It is a loaded question',
      wrong: [
        ['It is a neutral survey question', 'It smuggles in an assumption.', 'Answering yes or no accepts the setup.'],
        ['It is modus ponens', 'No if-then proof appears.', 'This is about question wording.'],
        ['It is a strong analogy', 'No comparison is made.', 'Look for the hidden accusation.'],
      ],
      lesson: 'A loaded question contains a controversial assumption that has not been established.',
    },
    {
      chapter: 'Definitions',
      title: 'Slippery word',
      prompt: 'In an argument, "freedom" is used first to mean free time and later to mean political rights. What should a careful listener ask for?',
      correct: 'A clearer definition of the key term',
      wrong: [
        ['More volume', 'Louder speech does not fix unclear meaning.', 'Clarify the word.'],
        ['A different font', 'Presentation is not the logic issue.', 'Definitions matter.'],
        ['A popularity vote', 'Popularity does not settle meaning.', 'Ask what the term means.'],
      ],
      lesson: 'Arguments improve when key terms are defined consistently.',
    },
    {
      chapter: 'Probability and Claims',
      title: 'Likely not certain',
      prompt: 'A weather app says there is a 70% chance of rain. Which statement is most reasonable?',
      correct: 'Rain is more likely than not, but not guaranteed',
      wrong: [
        ['Rain is impossible', 'A 70% chance is not zero.', 'It supports likely rain.'],
        ['Rain is absolutely certain', 'A 70% chance is not 100%.', 'Probability leaves uncertainty.'],
        ['The app made no claim', 'A probability forecast is a claim with uncertainty.', 'Interpret the number carefully.'],
      ],
      lesson: 'Probabilistic claims can be strong without being certain.',
    },
    {
      chapter: 'Probability and Claims',
      title: 'Base rate robot',
      prompt: 'A robot detector is 90% accurate, but only 1 in 1,000 lockers contains a robot. What should you remember before panicking at one positive result?',
      correct: 'The low base rate matters when judging the result',
      wrong: [
        ['Accuracy always means certainty', 'Even good tests can have false positives.', 'Base rates affect interpretation.'],
        ['The robot must be in every locker', 'That ignores the low starting rate.', 'Use prior probability.'],
        ['No evidence can ever matter', 'The test is evidence, just not certainty.', 'Weigh it properly.'],
      ],
      lesson: 'Base rates help interpret evidence, especially when the event is rare.',
    },
    {
      chapter: 'Media Reasoning',
      title: 'Headline caution',
      prompt: 'A headline says, "New study proves broccoli makes students geniuses." What should a careful reader check first?',
      correct: 'What the study actually measured and whether it shows causation',
      wrong: [
        ['Whether broccoli has a cool cape', 'Fun image, not evidence.', 'Check methods and claims.'],
        ['Whether the headline uses green letters', 'Design does not prove the claim.', 'Look at the study.'],
        ['Whether all studies are fake', 'That is too dismissive.', 'Evaluate the evidence.'],
      ],
      lesson: 'Media claims should be checked against the evidence, method, and strength of conclusion.',
    },
    {
      chapter: 'Media Reasoning',
      title: 'Quote mining',
      prompt: 'A video uses one sentence from a long speech to make the speaker seem to say the opposite of their full point. What is the issue?',
      correct: 'The quote is taken out of context',
      wrong: [
        ['The quote is automatically valid because it is short', 'Short quotes can mislead.', 'Context matters.'],
        ['The speaker used modus tollens', 'The issue is selective quotation.', 'Look at context.'],
        ['The audience is using an AND operator', 'No truth table issue is central.', 'This is media reasoning.'],
      ],
      lesson: 'Quotations need enough context to preserve the speaker intended meaning.',
    },
    {
      chapter: 'Media Reasoning',
      title: 'Sponsored slime',
      prompt: 'A review says GlitterSlime is perfect but quietly notes, "Sponsored by GlitterSlime Ltd." What should a critical reader notice?',
      correct: 'A possible conflict of interest',
      wrong: [
        ['Proof that the review is definitely false', 'A conflict is a reason for caution, not automatic disproof.', 'Assess bias and evidence.'],
        ['A formal fallacy called affirming the consequent', 'No if-then structure is involved.', 'This is source evaluation.'],
        ['A guaranteed expert consensus', 'Sponsorship is not consensus.', 'Check independence.'],
      ],
      lesson: 'Conflicts of interest can affect trust and should prompt closer evaluation.',
    },
    {
      chapter: 'Epistemic Responsibility',
      title: 'Share before checking',
      prompt: 'A wild rumor says the headteacher is replacing exams with competitive spoon-juggling. What is the most responsible first move before sharing it?',
      correct: 'Check reliable sources before spreading the claim',
      wrong: [
        ['Share it faster because it is exciting', 'Excitement is not evidence.', 'Check before amplifying.'],
        ['Add extra details to make it funnier', 'That makes misinformation worse.', 'Do not invent support.'],
        ['Assume all rumors are true', 'Rumors need verification.', 'Use reliable sources.'],
      ],
      lesson: 'Epistemic responsibility means caring about evidence before believing or spreading claims.',
    },
    {
      chapter: 'Epistemic Responsibility',
      title: 'Changing your mind',
      prompt: 'Sam believed the debate club met on Friday, but the official schedule says Thursday. What is the rational response?',
      correct: 'Update the belief based on better evidence',
      wrong: [
        ['Ignore the schedule because changing your mind is illegal', 'Changing beliefs with evidence is rational.', 'Better evidence should matter.'],
        ['Insist Friday is true because Sam said it first', 'First belief is not always best.', 'Revise with reliable evidence.'],
        ['Attack the font on the schedule', 'That does not answer the evidence.', 'Focus on source reliability.'],
      ],
      lesson: 'Good reasoning includes revising beliefs when stronger evidence appears.',
    },
    {
      chapter: 'Epistemic Responsibility',
      title: 'Confidence meter',
      prompt: 'Which sentence shows the best confidence level for weak evidence?',
      correct: 'This might be true, but we need more evidence before accepting it',
      wrong: [
        ['This is absolutely certain because one person said it', 'Weak evidence does not justify certainty.', 'Match confidence to evidence.'],
        ['No claim can ever be believed', 'That is too extreme.', 'Some evidence supports cautious belief.'],
        ['Evidence is just decoration', 'Evidence should guide confidence.', 'Use proportional belief.'],
      ],
      lesson: 'A careful thinker matches confidence to the strength of evidence.',
    },
    {
      chapter: 'Review',
      title: 'Best fallacy match',
      prompt: 'Which pair is correctly matched?',
      correct: 'Ad hominem: attacking the person instead of the argument',
      wrong: [
        ['Straw man: using numbers in an argument', 'Numbers are not what makes a straw man.', 'Straw man means distortion.'],
        ['False dilemma: proving all possible options fairly', 'False dilemma hides extra options.', 'It is too narrow, not fair.'],
        ['Bandwagon: rejecting a claim because it is popular', 'Bandwagon uses popularity as support.', 'Popularity is treated as proof.'],
      ],
      lesson: 'Fallacy labels should match the specific reasoning mistake.',
    },
    {
      chapter: 'Review',
      title: 'Best argument habit',
      prompt: 'Which habit most improves a disagreement?',
      correct: 'State the other side fairly, give evidence, and respond to the actual claim',
      wrong: [
        ['Use louder adjectives until everyone gets tired', 'Volume is not reasoning.', 'Clarity and evidence help more.'],
        ['Change the topic whenever stuck', 'That is distraction.', 'Stay with the claim.'],
        ['Assume your first thought is perfect', 'First thoughts can be wrong.', 'Revise and support claims.'],
      ],
      lesson: 'Good argumentation is fair, relevant, evidence-based, and responsive.',
    },
  ])
}

function blueprintsFor(spec: TrackSpec) {
  const title = spec.title.toLowerCase()
  const id = spec.id.toLowerCase()
  if (title.includes('logic') && title.includes('argumentation')) return logicArgumentationBlueprints()
  if (title.includes('calculus') && !title.includes('precalculus')) return calculusBlueprints()
  if (spec.family === 'math') return mathBlueprints()
  if (spec.family === 'science') {
    // Domain-specific routing — avoids putting clover-to-fox energy under chemistry,
    // peppermint diffusion under physics, etc. (HS Sciences Wave 4 audit fix.)
    if (title.includes('chemistry') || id.includes('chemistry') || id.includes('chemist')) return chemistryBlueprints()
    if (title.includes('physics') || id.includes('physics')) return physicsBlueprints()
    if (title.includes('biolog') || id.includes('biolog')) return biologyBlueprints()
    if (title.includes('earth') || title.includes('geolog') || title.includes('climate') || id.includes('earth') || id.includes('climate')) return earthScienceBlueprints()
    return scienceBlueprints()
  }
  if (spec.family === 'computing') return computingBlueprints()
  if (spec.family === 'economics' || spec.family === 'life') return lifeEconomicsBlueprints()
  if (spec.family === 'philosophy' || spec.family === 'creative') return philosophyCreativeBlueprints()
  if (spec.family === 'english') return englishBlueprints()
  if (spec.family === 'history') return historyBlueprints()
  return [...mathBlueprints(), ...scienceBlueprints(), ...englishBlueprints()]
}

function mentorHintForGeneratedHighQuestion(spec: TrackSpec, blueprint: Blueprint) {
  const chapter = blueprint.chapter.toLowerCase()
  const title = blueprint.title.toLowerCase()
  const family = spec.family

  if (family === 'math' || chapter.includes('equation') || chapter.includes('quadratic') || chapter.includes('ratio')) {
    if (chapter.includes('ratio') || chapter.includes('rate')) {
      return 'Find the unit rate first, then scale it to the new situation. Keep the two quantities in the same order so you do not accidentally compare envelopes to stickers or minutes to miles.'
    }
    if (chapter.includes('linear')) {
      return 'Distribute through parentheses before collecting terms, then undo operations in reverse order. Check the solution by substituting it back into the original equation.'
    }
    if (chapter.includes('probability')) {
      return 'Decide whether the draws are independent or without replacement before multiplying probabilities. The second draw may have a changed denominator or changed counts.'
    }
    if (chapter.includes('coordinate')) {
      return 'For gradient or slope, use change in y divided by change in x. Keep the point order consistent in both differences so the signs stay meaningful.'
    }
    if (chapter.includes('quadratic')) {
      return 'Look for two factors whose product gives the constant term and whose sum gives the middle coefficient. The solutions come from setting each factor equal to zero.'
    }
    if (chapter.includes('calculus')) {
      return 'Identify the changing quantity and the formula connecting it to the requested rate. Differentiate the relationship before substituting the instant’s numbers.'
    }
    return 'Name the operation or formula before calculating, then apply it to the exact numbers in the prompt. A nearby arithmetic value is usually a distractor, so check the result in context.'
  }

  if (family === 'science') {
    if (chapter.includes('genetic')) {
      return 'Track the alleles each parent can pass on and build the outcome combinations before choosing. Dominant traits can hide recessive alleles, so genotype and phenotype are not always the same.'
    }
    if (chapter.includes('energy') || title.includes('clover')) {
      return 'Follow the energy back through the food chain to its original source. Matter cycles through organisms, but usable energy enters most ecosystems through sunlight captured by producers.'
    }
    if (chapter.includes('chem') || chapter.includes('bond') || chapter.includes('reaction')) {
      return 'Identify the particles, bonds, or conservation rule involved before choosing. Chemistry answers should preserve atoms, charge, and the mechanism described in the prompt.'
    }
    if (chapter.includes('physics') || chapter.includes('force') || chapter.includes('motion')) {
      return 'Start by naming the quantity being asked for, such as force, energy, speed, or acceleration. Then use the relationship that connects the given numbers to that quantity.'
    }
    if (chapter.includes('earth') || chapter.includes('climate')) {
      return 'Separate the observation from the process that explains it. Earth and climate questions usually turn on timescale, energy flow, cycling matter, or evidence from patterns.'
    }
    return 'Identify the system, the variable that changes, and the mechanism that links cause to effect. The best science answer should match the stated conditions without adding a new assumption.'
  }

  if (family === 'economics' || family === 'life') {
    if (chapter.includes('tradeoff') || title.includes('opportunity')) {
      return 'Opportunity cost is the value of the next-best option you give up, not every possible benefit. Ask what choice is actually being sacrificed by the decision.'
    }
    if (chapter.includes('credit')) {
      return 'Separate borrowed principal from interest and repayment behavior. Credit questions often hinge on compounding balances, payment history, utilization, and the cost of carrying debt.'
    }
    if (chapter.includes('tax')) {
      return 'Distinguish gross pay from take-home pay and marginal tax rates from average rates. A higher bracket usually applies only to the next dollars in that bracket.'
    }
    if (chapter.includes('saving') || chapter.includes('compound')) {
      return 'Compound growth earns returns on earlier returns, while simple growth does not. Focus on the base that each period’s percentage is applied to.'
    }
    return 'Translate the situation into the economic choice, incentive, risk, or budget constraint being tested. Then pick the answer that explains the tradeoff rather than just naming money.'
  }

  if (family === 'computing') {
    return 'Identify what part of the computing system is being tested: data, control flow, networks, security, or user input. The best answer should describe what the system actually does, not just use a technical word.'
  }

  if (family === 'english') {
    return 'Read the sentence or passage for the specific job the word, claim, or detail performs. Use context and evidence from the text instead of choosing the answer that merely sounds sophisticated.'
  }

  if (family === 'history') {
    return 'Place the event or document in its historical context: who had power, what changed, and what evidence the prompt gives. Avoid choices that are true in another era but not in this situation.'
  }

  if (family === 'philosophy' || family === 'creative') {
    return 'Name the rule, assumption, or perspective behind the question before judging the answers. The best choice should fit the reasoning pattern, not just the most familiar term.'
  }

  return 'Identify the course concept and the exact task in the prompt before reading the choices. Eliminate answers that use familiar vocabulary but do not fit the situation described.'
}

function buildTrackQuestions(spec: TrackSpec, trackIndex: number): Question[] {
  const blueprints = blueprintsFor(spec)
  const baseId = 1_900_000 + trackIndex * 100
  const seenPrompts = new Set<string>()
  const questions: Question[] = []

  for (let index = 0; index < 50; index += 1) {
    const blueprint = blueprints[index % blueprints.length]
    const variant = Math.floor(index / blueprints.length) + 1
    const prompt = blueprint.prompt(variant)
    const promptKey = normalizePrompt(prompt)
    if (seenPrompts.has(promptKey)) continue
    seenPrompts.add(promptKey)

    questions.push(makeSimpleQuestion(
      baseId + index,
      spec.topic,
      `${blueprint.chapter} ${variant}`,
      `${spec.title}: ${blueprint.title} ${variant}`,
      prompt,
      blueprint.correct(variant),
      blueprint.wrong(variant),
      blueprint.lesson(variant),
      generatedSource,
      undefined,
      mentorHintForGeneratedHighQuestion(spec, blueprint),
    ))
  }

  return questions
}

const highGeneratedTrackSpecs = allVisibleSecondaryTracks()

export const highGeneratedTrackIds = highGeneratedTrackSpecs.map((track) => track.id)

const schoolAssessmentReadingSocialQuestionsByTrack: Record<string, Question[]> = {
  'col-7th-grade-reading-and-vocab': schoolAssessmentReadingWritingQuestions,
  'col-8th-grade-reading-and-vocab': schoolAssessmentReadingWritingQuestions,
  'col-sat-reading-and-writing': schoolAssessmentReadingWritingQuestions,
  logicAndArgumentation: schoolAssessmentLogicArgumentationQuestions,
  usHistory: schoolAssessmentUsHistoryQuestions,
  'col-ap-u-s-history': [...schoolAssessmentUsHistoryQuestions, ...highApUsHistoryDedicatedQuestions],
  apEuropeanHistory: highApEuropeanHistoryQuestions,
  'col-ap-european-history': highApEuropeanHistoryQuestions,
  'col-ap-biology': polishedApBiologyQuestions,
  'col-ap-chemistry': polishedApChemistryQuestions,
  'col-ap-physics': polishedApPhysicsQuestions,
  'col-ap-calculus': polishedApCalculusQuestions,
  'col-ap-english-literature': polishedApEnglishLitQuestions,
  'col-ap-economics': polishedApEconomicsQuestions,
  'col-ap-world-history': polishedApWorldHistoryQuestions,
  'col-ap-art-history': polishedApArtHistoryQuestions,
  'col-ap-computer-science': polishedApComputerScienceQuestions,
}

const dedicatedHighCivicQuestionsByTrack: Record<string, Question[]> = {
  usGovAndCivics: highUsGovernmentCivicsQuestions,
  'col-us-government-and-civics': highUsGovernmentCivicsQuestions,
  constitution101: highConstitution101Questions,
  'col-constitution-101': highConstitution101Questions,
  'col-ap-us-government-politics': highApUsGovernmentQuestions,
  politicalPhilosophy: highPoliticalPhilosophyQuestions,
  philYear9: highPoliticalPhilosophyQuestions,
  'col-political-philosophy': highPoliticalPhilosophyQuestions,
  practicalPolitics: highPracticalPoliticsQuestions,
  'col-practical-politics-voting': highPracticalPoliticsQuestions,
}

const dedicatedHighFieldIdQuestionsByTrack: Record<string, Question[]> = {
  guessTheThing: [
    ...guessTheRockQuestions,
    ...guessTheFossilQuestions,
    ...guessThePlantQuestions,
    ...guessTheBirdQuestions,
    ...guessTheAnimalQuestions,
    ...guessTheFishQuestions,
    ...guessTheBodyPartQuestions,
    ...tracksAndScatQuestions,
    ...guessTheMemeQuestions,
    ...guessTheSeaweedQuestions,
    ...guessTheWeirdInstrumentQuestions,
    ...guessTheHouseplantQuestions,
    ...guessTheStrangeFruitQuestions,
    ...guessTheCountryShapeQuestions,
    ...guessTheCitySkylineQuestions,
    ...guessTheHistoricalRuinQuestions,
    ...guessThePlumbingPartQuestions,
    ...guessTheElectricalPartQuestions,
    ...guessTheCarPartQuestions,
    ...guessTheTrainPartQuestions,
    ...guessTheArchitectureStyleQuestions,
    ...guessTheHandToolQuestions,
    ...guessTheKitchenToolQuestions,
    ...guessTheDogBreedQuestions,
    ...guessTheCatBreedQuestions,
    ...guessTheRoadSignQuestions,
    ...guessThePastaShapeQuestions,
    ...guessTheCloudTypeQuestions,
    ...guessTheFlagQuestions,
    ...guessTheSpiceQuestions,
    ...guessTheCheeseQuestions,
    ...guessTheArtMovementQuestions,
    ...guessTheCameraPartQuestions,
    ...guessTheMusicNotationQuestions,
    ...guessTheSportsEquipmentQuestions,
    ...guessTheLabGlasswareQuestions,
    ...guessTheInsectQuestions,
    ...guessTheMushroomQuestions,
    ...guessTheConstellationQuestions,
    ...guessTheGemstoneQuestions,
    ...guessTheTreeQuestions,
    ...guessTheWeatherInstrumentQuestions,
    ...guessTheAircraftPartQuestions,
    ...guessTheMedicalInstrumentQuestions,
    ...guessTheCircuitComponentQuestions,
    ...guessTheSpaceObjectQuestions,
    ...guessTheSurgicalToolQuestions,
    ...guessTheDinosaurQuestions,
    ...guessTheKnotQuestions,
    ...guessTheMachineShopToolQuestions,
    ...guessTheMicroscopePartQuestions,
    ...guessTheToxicPlantQuestions,
    ...guessTheBridgeTypeQuestions,
    ...guessTheTypographyTermQuestions,
    ...guessTheSewingToolQuestions,
    ...guessTheDentalToolQuestions,
    ...guessTheLiteraryCharacterQuestions,
    ...guessTheHistoricalFigureQuestions,
  ],
  guessTheScatMaster: [
    ...tracksAndScatQuestions,
    ...guessTheFossilQuestions.filter((question) => question.chapter === 'Coprolites' || question.chapter === 'Trace Fossils'),
  ],
  guessTheTravelBug: [
    ...guessTheCountryShapeQuestions,
    ...guessTheCitySkylineQuestions,
    ...guessTheHistoricalRuinQuestions,
    ...guessTheFlagQuestions,
  ],
  guessTheAnatomy: [
    ...guessTheBodyPartQuestions,
    ...guessTheMedicalInstrumentQuestions,
    ...guessTheSurgicalToolQuestions,
    ...guessTheDentalToolQuestions,
  ],
  guessTheEcologist: [
    ...guessThePlantQuestions,
    ...guessTheTreeQuestions,
    ...guessTheSeaweedQuestions,
    ...guessTheMushroomQuestions,
    ...guessTheInsectQuestions,
    ...guessTheBirdQuestions,
    ...guessTheAnimalQuestions,
    ...guessTheFishQuestions,
    ...tracksAndScatQuestions,
  ],
  guessThePlants: [
    ...guessThePlantQuestions,
    ...guessTheHouseplantQuestions,
    ...guessTheTreeQuestions,
    ...guessTheToxicPlantQuestions,
    ...guessTheSeaweedQuestions,
    ...guessTheStrangeFruitQuestions,
  ],
  guessTheFossil: guessTheFossilQuestions,
  guessTheRock: guessTheRockQuestions,
  guessThePlant: guessThePlantQuestions,
  guessTheBird: guessTheBirdQuestions,
  guessTheAnimal: guessTheAnimalQuestions,
  guessTheFish: guessTheFishQuestions,
  guessTheBodyPart: guessTheBodyPartQuestions,
  guessTheMeme: guessTheMemeQuestions,
  guessTheSeaweed: guessTheSeaweedQuestions,
  guessTheWeirdInstrument: guessTheWeirdInstrumentQuestions,
  guessTheHouseplant: guessTheHouseplantQuestions,
  guessTheStrangeFruit: guessTheStrangeFruitQuestions,
  guessTheCountryShape: guessTheCountryShapeQuestions,
  guessTheCitySkyline: guessTheCitySkylineQuestions,
  guessTheHistoricalRuin: guessTheHistoricalRuinQuestions,
  guessThePlumbingPart: guessThePlumbingPartQuestions,
  guessTheElectricalPart: guessTheElectricalPartQuestions,
  guessTheCarPart: guessTheCarPartQuestions,
  guessTheTrainPart: guessTheTrainPartQuestions,
  guessTheArchitectureStyle: guessTheArchitectureStyleQuestions,
  guessTheHandTool: guessTheHandToolQuestions,
  guessTheKitchenTool: guessTheKitchenToolQuestions,
  guessTheDogBreed: guessTheDogBreedQuestions,
  guessTheCatBreed: guessTheCatBreedQuestions,
  guessTheRoadSign: guessTheRoadSignQuestions,
  guessThePastaShape: guessThePastaShapeQuestions,
  guessTheCloudType: guessTheCloudTypeQuestions,
  guessTheFlag: guessTheFlagQuestions,
  guessTheSpice: guessTheSpiceQuestions,
  guessTheCheese: guessTheCheeseQuestions,
  guessTheArtMovement: guessTheArtMovementQuestions,
  guessTheCameraPart: guessTheCameraPartQuestions,
  guessTheMusicNotation: guessTheMusicNotationQuestions,
  guessTheSportsEquipment: guessTheSportsEquipmentQuestions,
  guessTheLabGlassware: guessTheLabGlasswareQuestions,
  guessTheInsect: guessTheInsectQuestions,
  guessTheMushroom: guessTheMushroomQuestions,
  guessTheConstellation: guessTheConstellationQuestions,
  guessTheGemstone: guessTheGemstoneQuestions,
  guessTheTree: guessTheTreeQuestions,
  guessTheWeatherInstrument: guessTheWeatherInstrumentQuestions,
  guessTheAircraftPart: guessTheAircraftPartQuestions,
  guessTheMedicalInstrument: guessTheMedicalInstrumentQuestions,
  guessTheCircuitComponent: guessTheCircuitComponentQuestions,
  guessTheSpaceObject: guessTheSpaceObjectQuestions,
  guessTheSurgicalTool: guessTheSurgicalToolQuestions,
  guessTheDinosaur: guessTheDinosaurQuestions,
  guessTheKnot: guessTheKnotQuestions,
  guessTheMachineShopTool: guessTheMachineShopToolQuestions,
  guessTheMicroscopePart: guessTheMicroscopePartQuestions,
  guessTheToxicPlant: guessTheToxicPlantQuestions,
  guessTheBridgeType: guessTheBridgeTypeQuestions,
  guessTheTypographyTerm: guessTheTypographyTermQuestions,
  guessTheSewingTool: guessTheSewingToolQuestions,
  guessTheDentalTool: guessTheDentalToolQuestions,
  guessTheLiteraryCharacter: guessTheLiteraryCharacterQuestions,
  guessTheHistoricalFigure: guessTheHistoricalFigureQuestions,
}

export const highGeneratedQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  highGeneratedTrackSpecs.map((track, index) => {
    const schoolAssessmentQuestions = schoolAssessmentReadingSocialQuestionsByTrack[track.id] || []
    const dedicatedCivicQuestions = dedicatedHighCivicQuestionsByTrack[track.id] || []
    const dedicatedFieldIdQuestions = dedicatedHighFieldIdQuestionsByTrack[track.id] || []
    const generatedQuestions = dedicatedFieldIdQuestions.length
      ? []
      : track.id === 'logicAndArgumentation' || track.id === 'philYear8'
      ? [...highLogicArgumentationOpenLogicBatchQuestions, ...buildTrackQuestions(track, index)]
      : track.id === 'earthScience'
        ? [...earthScienceStarterQuestions, ...middleSchoolEarthSpaceStaarBatchQuestions, ...middleSchoolScienceAssessmentEarthSpaceQuestions, ...buildTrackQuestions(track, index)]
      : track.id === 'middleSchoolEarthSpace'
        ? [...middleSchoolEarthSpaceStaarBatchQuestions, ...middleSchoolScienceAssessmentEarthSpaceQuestions, ...buildTrackQuestions(track, index)]
      : track.id === 'middleSchoolBiology'
        ? [...middleSchoolBiologyStaarBatchQuestions, ...middleSchoolScienceAssessmentBiologyQuestions, ...buildTrackQuestions(track, index)]
      : track.id === 'middleSchoolChemistry'
        ? [...middleSchoolChemistryStaarBatchQuestions, ...middleSchoolScienceAssessmentChemistryQuestions, ...buildTrackQuestions(track, index)]
      : track.id === 'middleSchoolPhysics'
      ? [...middleSchoolPhysicsStaarBatchQuestions, ...middleSchoolScienceAssessmentPhysicsQuestions, ...buildTrackQuestions(track, index)]
      : buildTrackQuestions(track, index)

    return [track.id, [...schoolAssessmentQuestions, ...dedicatedCivicQuestions, ...dedicatedFieldIdQuestions, ...generatedQuestions]]
  }),
)

export function topUpHighGeneratedTrack(trackId: string, existing: Question[], minimum = 50) {
  if (existing.length >= minimum) return existing
  const generated = highGeneratedQuestionsByTrack[trackId] || []
  const seenPrompts = new Set(existing.map((question) => normalizePrompt(question.prompt)))
  const additions = generated.filter((question) => {
    const promptKey = normalizePrompt(question.prompt)
    if (seenPrompts.has(promptKey)) return false
    seenPrompts.add(promptKey)
    return true
  })
  return [...existing, ...additions.slice(0, minimum - existing.length)]
}

export function buildHighGeneratedQuestionCatalog() {
  return Object.fromEntries(
    highGeneratedTrackIds.map((trackId) => [
      trackId,
      topUpHighGeneratedTrack(trackId, topUpHighAgentGeneratedTrack(trackId, [])),
    ]),
  )
}
