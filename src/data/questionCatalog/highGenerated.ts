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
import {
  guessTheAnimalQuestions,
  guessTheBirdQuestions,
  guessTheBodyPartQuestions,
  guessTheFishQuestions,
  guessTheFossilQuestions,
  guessThePlantQuestions,
  guessTheRockQuestions,
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

function scienceBlueprints(): Blueprint[] {
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
  ]
}

function historyBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Civics',
      title: 'Press freedom',
      prompt: () => 'A city official threatens to shut down a local paper for negative editorials. What civic protection applies?',
      correct: () => 'Freedom of the press',
      wrong: () => [
        ['Trial by jury', 'That concerns legal trials, not criticism by newspapers.', 'Match the right constitutional protection.'],
        ['Eminent domain', 'That concerns government taking property for public use.', 'This is about speech and publication.'],
        ['Reserved powers', 'That concerns powers kept by states.', 'The press protection is in the First Amendment.'],
      ],
      lesson: () => 'The First Amendment protects criticism of government by the press.',
    },
    {
      chapter: 'Constitution',
      title: 'Veto override',
      prompt: () => 'Congress passes a law, the president vetoes it, and Congress overrides the veto. What system is being shown?',
      correct: () => 'Checks and balances',
      wrong: () => [
        ['Judicial review', 'No court is reviewing a law here.', 'This example involves Congress and the president.'],
        ['Popular sovereignty', 'That means government authority comes from the people.', 'The question asks about branches limiting each other.'],
        ['Federalism', 'Federalism divides power between national and state governments.', 'This is branch-to-branch power.'],
      ],
      lesson: () => 'Checks and balances allow each branch to limit another branch’s power.',
    },
    {
      chapter: 'Human Geography',
      title: 'Push and pull',
      prompt: () => 'Drought pushes workers from farms while city wages attract them to factories. Which concept explains both forces?',
      correct: () => 'Push-pull migration',
      wrong: () => [
        ['Cultural diffusion', 'That is the spread of cultural traits, not this migration pattern.', 'One factor drives people away and another attracts.'],
        ['Gerrymandering', 'That is drawing political districts for advantage.', 'This question is about migration.'],
        ['Site and situation', 'Those describe location characteristics.', 'The clue is movement caused by pressures and attractions.'],
      ],
      lesson: () => 'Push factors drive people away; pull factors attract them elsewhere.',
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
      title: 'Opportunity cost',
      prompt: () => 'A student can spend Saturday earning $60 or rehearsing for a scholarship audition. What should their decision include?',
      correct: () => 'The value of the best option they give up',
      wrong: () => [
        ['Only the price of bus fare', 'Direct costs matter, but opportunity cost is broader.', 'Consider the next best alternative.'],
        ['Only the option that sounds easiest', 'Ease is not the full tradeoff.', 'Compare value and consequences.'],
        ['No tradeoff, because both options are useful', 'Useful options can still compete.', 'Choosing one means giving up the other.'],
      ],
      lesson: () => 'Opportunity cost is the value of the next best alternative you give up.',
    },
    {
      chapter: 'Incentives',
      title: 'Mystery queue',
      prompt: () => 'A canteen gives a free cookie to anyone who returns a tray. Why might the tray pile shrink?',
      correct: () => 'The cookie changes the incentive for returning trays',
      wrong: () => [
        ['The trays became lighter overnight', 'Nothing says the trays changed physically.', 'Look at the reward.'],
        ['Students forgot what cookies are', 'The reward likely makes action more attractive.', 'Incentives affect choices.'],
        ['Rules never affect behavior', 'Rules and rewards often change behavior.', 'Think incentives.'],
      ],
      lesson: () => 'Incentives help explain why people choose certain actions.',
    },
  ]
}

function philosophyCreativeBlueprints(): Blueprint[] {
  return [
    {
      chapter: 'Logic',
      title: 'Premise check',
      prompt: () => 'A classmate says, “All dragons love toast. Pebble loves toast. Therefore Pebble is a dragon.” What is wrong?',
      correct: () => 'The conclusion does not follow from the premises',
      wrong: () => [
        ['The argument has no conclusion', 'It does make a conclusion about Pebble.', 'The issue is validity.'],
        ['The premises are written too politely', 'Tone is not the logical flaw.', 'Focus on structure.'],
        ['Every argument about dragons is automatically valid', 'Silly content can still have invalid logic.', 'Test the reasoning form.'],
      ],
      lesson: () => 'A valid argument needs the conclusion to follow from the premises, not merely sound related.',
    },
    {
      chapter: 'Creative Design',
      title: 'Game loop',
      prompt: () => 'A game asks players to collect moon cheese, upgrade a backpack, then collect stranger cheese. What is being described?',
      correct: () => 'A core loop',
      wrong: () => [
        ['A loading screen', 'The prompt describes repeated play, not waiting.', 'Look for the repeated action-reward cycle.'],
        ['A legal contract', 'Nothing here is about publishing terms.', 'This is a design structure.'],
        ['Only the final boss', 'A core loop happens throughout the game.', 'It is the repeated pattern of play.'],
      ],
      lesson: () => 'A core loop is the repeated cycle of action, reward, and next action.',
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
        ['False', 'NOT reverses the truth value.', 'If P is false, not-P is true.'],
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
  if (title.includes('logic') && title.includes('argumentation')) return logicArgumentationBlueprints()
  if (title.includes('calculus') && !title.includes('precalculus')) return calculusBlueprints()
  if (spec.family === 'math') return mathBlueprints()
  if (spec.family === 'science') return scienceBlueprints()
  if (spec.family === 'computing') return computingBlueprints()
  if (spec.family === 'economics' || spec.family === 'life') return lifeEconomicsBlueprints()
  if (spec.family === 'philosophy' || spec.family === 'creative') return philosophyCreativeBlueprints()
  if (spec.family === 'english') return englishBlueprints()
  if (spec.family === 'history') return historyBlueprints()
  return [...mathBlueprints(), ...scienceBlueprints(), ...englishBlueprints()]
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
  us_history: schoolAssessmentUsHistoryQuestions,
  'col-ap-u-s-history': schoolAssessmentUsHistoryQuestions,
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
