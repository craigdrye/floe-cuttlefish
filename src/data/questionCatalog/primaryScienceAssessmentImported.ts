import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  SCHOOL_ASSESSMENT_SUB_TOPICS,
  SCHOOL_ASSESSMENT_MENTOR_HINTS,
  SCHOOL_ASSESSMENT_CORRECT_SHORTENED,
} from './schoolAssessmentPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

type ImportedScienceQuestion = {
  id: number
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
  sourceId: string
  sourceName: string
  sourceUrl: string
}

const q = ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  sourceId,
  sourceName,
  sourceUrl,
}: ImportedScienceQuestion) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: `Converted from ${sourceName} raw item ${sourceId}. Source URL: ${sourceUrl}. The extracted row had a self-contained prompt, answer-key evidence, and complete fixed-choice distractors; explanations were authored during Floe import.`,
  source: `${sourceName} (${sourceId})`,
})

const staar2022 = 'https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions'
const staar2023Redesign = 'https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions'

const _basePrimaryScienceAssessmentGrade5Questions = makeQuestionBank('Primary', [
  q({
    id: 465001,
    chapter: 'Space Systems',
    title: 'Apparent motion of the sun',
    prompt: 'Which statement best explains why the sun appears to move across the sky during the day?',
    correct: 'The Earth is rotating on its axis.',
    wrong: [
      miss('The Earth is closest to the sun in the winter.', 'Earth-sun distance does not explain the daily apparent motion of the sun.', 'Daily sunrise-to-sunset motion is caused by rotation.'),
      miss('The Earth is revolving around the sun.', 'Revolution explains a year, not one day of apparent motion.', 'Match the timescale in the question.'),
      miss('The Earth is tilted at 23.5 degrees.', 'Tilt helps explain seasons, not the sun moving across the sky each day.', 'Think about Earth spinning once per day.'),
    ],
    sourceId: 'staar-2022::grade-5-science::2',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465002,
    chapter: 'Space Systems',
    title: 'Planet distance',
    prompt: 'Students make a solar system model on the playground. The school building represents the sun. They label round objects for each planet. Which planet should they place at the greatest distance from the school building?',
    correct: 'Neptune',
    wrong: [
      miss('Jupiter', 'Jupiter is farther from the sun than the inner planets, but it is not the farthest listed planet.', 'Use the order of planets from the sun.'),
      miss('Mercury', 'Mercury is the closest planet to the sun.', 'The model asks for the greatest distance.'),
      miss('Saturn', 'Saturn is beyond Jupiter, but Neptune is farther from the sun.', 'Compare the outer planets in order.'),
    ],
    sourceId: 'staar-2022::grade-5-science::9',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465003,
    chapter: 'Water Cycle',
    title: 'Condensation description',
    prompt: 'A student plans to make a chart that describes each process in the water cycle. Which sentence should the student use to describe the process of condensation?',
    correct: 'Water vapor collects to form droplets.',
    wrong: [
      miss('Water flows downhill.', 'That describes runoff, not condensation.', 'Condensation changes water vapor into liquid droplets.'),
      miss('Liquid water turns into water vapor.', 'That is evaporation.', 'Condensation goes from gas back to liquid.'),
      miss('Polar ice turns into liquid water.', 'That is melting.', 'Look for water vapor forming droplets.'),
    ],
    sourceId: 'staar-2022::grade-5-science::11',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465004,
    chapter: 'Matter',
    title: 'Evidence for metals',
    prompt: 'A student is classifying objects. Answering which question will provide the best evidence that an object is a metal?',
    correct: 'Does it conduct thermal energy?',
    wrong: [
      miss('What is its mass?', 'Mass can be measured for any object and does not identify metals by itself.', 'Use a property commonly associated with metals.'),
      miss('What is its physical state?', 'Many metals are solid, but state alone is not enough evidence.', 'Conductivity is the stronger clue.'),
      miss('How quickly does it dissolve in water?', 'Solubility in water is not the best general evidence for metals.', 'Metals commonly conduct heat and electricity.'),
    ],
    sourceId: 'staar-2022::grade-5-science::16',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465005,
    chapter: 'Matter',
    title: 'Sugar solution',
    prompt: 'A student pours 14 grams of sugar into a jar filled with 500 milliliters of water. The student thoroughly stirs the sugar and water to make a solution. Which change most likely occurs to the sugar when it is added to the water?',
    correct: 'The sugar completely dissolves in the solution.',
    wrong: [
      miss('The sugar breaks down to form a new substance in the solution.', 'Dissolving sugar in water is a physical change, not formation of a new substance.', 'The sugar particles spread through the water.'),
      miss('The sugar changes water into a new substance in the solution.', 'Water remains water in a sugar solution.', 'A solution is a mixture.'),
      miss('The sugar floats on the surface of the water in the solution.', 'After thorough stirring, the sugar dissolves rather than floating as solid pieces.', 'Think about what happens when sugar is mixed into water.'),
    ],
    sourceId: 'staar-2022::grade-5-science::18',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465006,
    chapter: 'Energy Resources',
    title: 'Renewable resources',
    prompt: 'A student lists resources that can be used to produce electricity: wind, coal, natural gas, water power, and petroleum. Which of the resources are renewable resources?',
    correct: 'Wind and water power',
    wrong: [
      miss('Wind, coal, and natural gas', 'Coal and natural gas are fossil fuels and are not renewable on human time scales.', 'Separate fossil fuels from replenished resources.'),
      miss('Coal, water power, and petroleum', 'Coal and petroleum are nonrenewable fossil fuels.', 'Water power is renewable, but the fossil fuels are not.'),
      miss('Coal, natural gas, water power, and petroleum', 'This includes several nonrenewable fossil fuels.', 'Choose only resources that are naturally replenished quickly.'),
    ],
    sourceId: 'staar-2022::grade-5-science::20',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465007,
    chapter: 'Matter',
    title: 'Cereal and magnets',
    prompt: 'Students grind breakfast cereal into powder, stir it into warm water, and hold a magnet against the side of the beaker while stirring. The students are trying to determine the presence of which substance in the cereal?',
    correct: 'Iron',
    wrong: [
      miss('Sugar', 'Sugar is not attracted to a magnet.', 'The magnet is the key tool.'),
      miss('Salt', 'Salt dissolves in water but is not separated by a magnet.', 'Ask which substance is magnetic.'),
      miss('Wheat', 'Wheat particles are not the magnetic target in this investigation.', 'Iron can be attracted by a magnet.'),
    ],
    sourceId: 'staar-2022::grade-5-science::23',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465008,
    chapter: 'Traits',
    title: 'Inherited traits exception',
    prompt: 'A group of students captured several insects to observe before releasing them outside. Each of the following characteristics is likely an inherited trait except:',
    correct: 'A fly missing an antenna',
    wrong: [
      miss('A butterfly with black-and-yellow stripes', 'Color patterns are commonly inherited traits.', 'Inherited traits are passed through genes.'),
      miss('A dragonfly with two sets of wings', 'Body structure, such as wings, is inherited.', 'Do not pick a normal species feature.'),
      miss('A beetle with green spots', 'Color markings are commonly inherited.', 'The exception is an injury or acquired condition.'),
    ],
    sourceId: 'staar-2022::grade-5-science::29',
    sourceName: 'STAAR 2022 Grade 5 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465009,
    chapter: 'Ecosystems',
    title: 'Forest understory growth',
    prompt: 'An old-growth forest has many tall trees. It also has many smaller shrubs and plants that grow much closer to the ground under the tall trees. Which factor is most likely responsible for limiting the growth of these smaller shrubs and plants in the forest?',
    correct: 'Limited access to sunlight',
    wrong: [
      miss('Limited access to water', 'The prompt emphasizes tall trees shading smaller plants, not a water shortage.', 'Think about what the canopy blocks.'),
      miss('Limited access to nutrients', 'Nutrients can matter, but the most direct limit from tall trees is shade.', 'Understory plants receive less light.'),
      miss('Limited access to oxygen', 'Plants in forests generally have access to atmospheric oxygen.', 'Photosynthesis depends on light.'),
    ],
    sourceId: 'staar-2023-redesign::grade-5-science::6',
    sourceName: 'STAAR 2023 Redesign Grade 5 Science',
    sourceUrl: staar2023Redesign,
  }),
  q({
    id: 465010,
    chapter: 'Earth Materials',
    title: 'Ice erosion landform',
    prompt: 'Which type of landform is caused by ice erosion?',
    correct: 'U-shaped valley',
    wrong: [
      miss('Delta', 'A delta is formed where sediment is deposited, often by a river.', 'Ice erosion points to glaciers.'),
      miss('Sand dune', 'Sand dunes are shaped mainly by wind.', 'Look for a landform carved by glacial ice.'),
      miss('V-shaped valley', 'V-shaped valleys are commonly carved by rivers and streams.', 'Glaciers carve broad U-shaped valleys.'),
    ],
    sourceId: 'staar-2023-redesign::grade-5-science::14',
    sourceName: 'STAAR 2023 Redesign Grade 5 Science',
    sourceUrl: staar2023Redesign,
  }),
])

const _baseMiddleSchoolScienceAssessmentEarthSpaceQuestions = makeQuestionBank('AP', [
  q({
    id: 465101,
    chapter: 'Space Systems',
    title: 'Solar eclipse model',
    prompt: 'A student is building a model of a solar eclipse. Solar eclipses occur only during a new moon phase. Which motion best demonstrates a solar eclipse?',
    correct: 'The moon moves between the sun and Earth, casting a shadow of the moon on Earth.',
    wrong: [
      miss('The sun moves between the moon and Earth, casting a shadow of the sun on Earth.', 'The sun does not move between Earth and the moon in an eclipse model.', 'For a solar eclipse, the moon is between the sun and Earth.'),
      miss('Earth moves between the sun and the moon, casting a shadow of Earth on the moon.', 'That describes a lunar eclipse, not a solar eclipse.', 'Solar means the sun is blocked from view on Earth.'),
      miss('Earth moves between the sun and the moon, casting a shadow of the moon on the sun.', 'Earth between the sun and moon is the wrong alignment for a solar eclipse.', 'Place the moon between the sun and Earth.'),
    ],
    sourceId: 'staar-2022::grade-8-science::17',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465102,
    chapter: 'Space Systems',
    title: 'Sun brightness',
    prompt: 'Which statement best explains why the sun appears brighter to people on Earth than any other star?',
    correct: 'The sun is closer to Earth than any other star.',
    wrong: [
      miss('Sunlight reaches Earth’s atmosphere at an angle that causes the sun’s light rays to intensify.', 'Atmospheric angle does not explain why the sun outshines other stars from Earth.', 'Brightness as seen from Earth depends strongly on distance.'),
      miss('Unique chemical reactions in the sun’s core produce a high-energy wavelength of light.', 'The sun is a typical star in its energy source; proximity is the main reason it appears brightest.', 'Compare apparent brightness, not total power.'),
      miss('The sun burns at a higher temperature than any other star.', 'Many stars are hotter than the sun.', 'The sun appears brightest because it is nearby.'),
    ],
    sourceId: 'staar-2022::grade-8-science::20',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465103,
    chapter: 'Space Systems',
    title: 'Alpha Centauri',
    prompt: 'Alpha Centauri appears as a bright object visible in the Milky Way galaxy. Alpha Centauri is actually a system of three objects. Each object produces light and rotates on its own axis. Based on this information, the three objects that make up the Alpha Centauri system are all:',
    correct: 'Stars',
    wrong: [
      miss('Asteroids', 'Asteroids do not produce their own light like stars.', 'Producing light is the key clue.'),
      miss('Comets', 'Comets reflect sunlight and do not shine by their own nuclear processes.', 'The objects produce light themselves.'),
      miss('Planets', 'Planets reflect light from stars rather than producing their own starlight.', 'A self-luminous rotating object in a star system is a star.'),
    ],
    sourceId: 'staar-2022::grade-8-science::39',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
])

const _baseMiddleSchoolScienceAssessmentBiologyQuestions = makeQuestionBank('AP', [
  q({
    id: 465201,
    chapter: 'Ecosystems',
    title: 'Fertilizer and water quality',
    prompt: 'Farmers can best reduce negative effects on the water quality of nearby streams and lakes by planting crops that:',
    correct: 'Need less fertilizer',
    wrong: [
      miss('Produce less oxygen', 'Oxygen production by crops is not the main pollution issue here.', 'Think about runoff into water.'),
      miss('Produce less carbon dioxide', 'Carbon dioxide production by crops is not the direct water-quality problem.', 'Fertilizer nutrients can wash into streams and lakes.'),
      miss('Need less solar energy', 'Solar energy needs do not directly reduce fertilizer runoff.', 'Choose the crop trait that lowers nutrient pollution.'),
    ],
    sourceId: 'staar-2022::grade-8-science::7',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465202,
    chapter: 'Ecosystems',
    title: 'Invasive grass',
    prompt: 'Buffelgrass is an invasive species of grass from Africa that outcompetes native Texas grasses for space and water. Which long-term change to a Texas grassland would most likely occur due to the introduction of buffelgrass?',
    correct: 'The population of native grasses will decrease.',
    wrong: [
      miss('The population of native grasses will increase.', 'The prompt says buffelgrass outcompetes native grasses.', 'Competition for space and water reduces the native population.'),
      miss('Buffelgrass offspring will develop traits like those of native grasses.', 'Offspring do not become native grasses because they compete with them.', 'Focus on population effects.'),
      miss('Buffelgrass offspring will develop traits like those of other invasive species.', 'The expected effect is on native grass populations, not a guaranteed trait change.', 'Use the competition described in the prompt.'),
    ],
    sourceId: 'staar-2022::grade-8-science::8',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465203,
    chapter: 'Cells',
    title: 'Membranes and walls',
    prompt: 'What function do both cell membranes and cell walls perform?',
    correct: 'Allowing water to move into and out of cells',
    wrong: [
      miss('Producing energy for cellular processes', 'Energy production is mainly associated with organelles such as mitochondria and chloroplasts.', 'Think boundary structures.'),
      miss('Synthesizing genetic material', 'DNA synthesis is not the shared function of membranes and walls.', 'The question asks about movement across cell boundaries.'),
      miss('Directing the reproduction of the cell', 'Cell reproduction is not directed by the cell wall.', 'Membranes and walls help manage exchange and support.'),
    ],
    sourceId: 'staar-2022::grade-8-science::18',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465204,
    chapter: 'Classification',
    title: 'Plant kingdom evidence',
    prompt: 'Students observe an unknown species during a field study. They observe that the organism is multicellular, is autotrophic, and can reproduce both sexually and asexually. Which kingdom does this organism most likely belong to?',
    correct: 'Plantae',
    wrong: [
      miss('Archaea', 'Archaea are single-celled prokaryotes, not multicellular autotrophic organisms like plants.', 'Use the multicellular and autotrophic clues.'),
      miss('Animalia', 'Animals are multicellular but are not autotrophic.', 'Autotrophic means making its own food.'),
      miss('Bacteria', 'Bacteria are single-celled prokaryotes.', 'This organism fits plant traits best.'),
    ],
    sourceId: 'staar-2022::grade-8-science::24',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465205,
    chapter: 'Human Impact',
    title: 'Overfishing evidence',
    prompt: 'Humans depend upon food that comes from the ocean. Some human activities negatively impact these food supplies. Which statement provides the best evidence that human activities contribute to this impact?',
    correct: 'Humans catch marine fish at a faster rate than the fish are able to reproduce.',
    wrong: [
      miss('Human visitors to coral reef systems break corals growing on rocks.', 'This is a human impact, but it is less direct evidence about reducing ocean food supplies than overfishing.', 'Match the evidence to food supply.'),
      miss('Humans raise fish in a hatchery for commercial sale.', 'Hatcheries can increase food supply rather than showing a negative impact.', 'The question asks for evidence of harm.'),
      miss('Humans construct artificial reefs to attract tourists.', 'This does not directly show reduced marine food supplies.', 'Look for harvesting faster than replacement.'),
    ],
    sourceId: 'staar-2022::grade-8-science::30',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
])

const _baseMiddleSchoolScienceAssessmentChemistryQuestions = makeQuestionBank('AP', [
  q({
    id: 465301,
    chapter: 'Chemical Changes',
    title: 'Evidence of reaction',
    prompt: 'Which of these observations is an indication that a chemical reaction has occurred?',
    correct: 'A solid forms when two clear solutions are mixed.',
    wrong: [
      miss('Steam forms above boiling water.', 'Boiling is a physical change from liquid to gas.', 'Look for evidence of a new substance.'),
      miss('A solid forms when a clear solution is frozen.', 'Freezing is a physical change of state.', 'A reaction changes chemical composition.'),
      miss('Sugar crystals form on the sides of a boiling pot of sugar water.', 'Crystallizing sugar from solution is a physical separation process.', 'A new solid from two clear solutions suggests a precipitate.'),
    ],
    sourceId: 'staar-2022::grade-8-science::19',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465302,
    chapter: 'Periodic Table',
    title: 'Similar properties to sulfur',
    prompt: 'Which element has chemical properties that are most similar to the chemical properties of sulfur, S?',
    correct: 'Selenium, Se',
    wrong: [
      miss('Silicon, Si', 'Silicon is not in the same periodic-table group as sulfur.', 'Elements in the same column tend to have similar properties.'),
      miss('Chlorine, Cl', 'Chlorine is adjacent to sulfur but in a different group.', 'Look for the same group, not just nearby atomic number.'),
      miss('Phosphorus, P', 'Phosphorus is in a different group from sulfur.', 'Sulfur and selenium are both chalcogens.'),
    ],
    sourceId: 'staar-2022::grade-8-science::26',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
])

const _baseMiddleSchoolScienceAssessmentPhysicsQuestions = makeQuestionBank('AP', [
  q({
    id: 465401,
    chapter: 'Motion',
    title: 'Constant speed distances',
    prompt: 'Two students record the distance they each traveled in 60 seconds. Student 1 travels 40 meters in 60 seconds, and Student 2 travels 20 meters in 60 seconds. If the students continue at the same speed, which statement describes the total distance traveled after 90 seconds?',
    correct: 'Student 1 traveled 60 m, and Student 2 traveled 30 m.',
    wrong: [
      miss('Student 1 traveled 40 m, and Student 2 traveled 20 m.', 'Those are the distances after 60 seconds, not 90 seconds.', 'Scale each distance by 90/60.'),
      miss('Student 1 traveled 50 m, and Student 2 traveled 30 m.', 'Student 2 is correct, but Student 1 would travel 60 m at the same speed.', 'Student 1 covers 40 m per minute, then another half-minute.'),
      miss('Student 1 traveled 70 m, and Student 2 traveled 25 m.', 'These distances do not preserve the constant speeds from the table.', 'Use proportional reasoning.'),
    ],
    sourceId: 'staar-2022::grade-8-science::9',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465402,
    chapter: 'Energy',
    title: 'Bicyclist energy change',
    prompt: 'A bicyclist increases speed while riding down a hill during a bicycle race. Which statement accurately describes the potential and kinetic energy of this bicyclist?',
    correct: 'Kinetic energy increases. Potential energy decreases.',
    wrong: [
      miss('Kinetic energy increases. Potential energy remains constant.', 'Riding downhill lowers gravitational potential energy.', 'Height decreases while speed increases.'),
      miss('Kinetic energy remains constant. Potential energy decreases.', 'Increasing speed means kinetic energy increases.', 'Kinetic energy depends on motion.'),
      miss('Kinetic energy remains constant. Potential energy increases.', 'The rider is speeding up and moving downhill, so both parts are reversed.', 'Downhill means less height and more speed.'),
    ],
    sourceId: 'staar-2022::grade-8-science::35',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
  q({
    id: 465403,
    chapter: 'Forces',
    title: 'Coin and gravity',
    prompt: 'When a coin is tossed in the air, it travels upward, gradually slows down, momentarily reaches zero speed, then moves back downward with increasing speed. Which statement best explains this change in the coin’s motion?',
    correct: 'The force of gravity causes the coin to change its velocity.',
    wrong: [
      miss('The coin’s inertia decreases on the way up and increases on the way down.', 'Inertia depends on mass and does not change this way during the toss.', 'Gravity is the force acting downward.'),
      miss('The action-reaction force pair of gravity and the applied force cancel each other.', 'The applied throw force is not a continuing force that cancels gravity throughout the motion.', 'After release, gravity changes the coin velocity.'),
      miss('The coin remains in its state of upward motion until the force of friction acts upon it.', 'Friction is not the main reason the coin slows, stops, and falls.', 'Gravity accelerates objects downward.'),
    ],
    sourceId: 'staar-2022::grade-8-science::38',
    sourceName: 'STAAR 2022 Grade 8 Science',
    sourceUrl: staar2022,
  }),
])

const _schoolAssessmentPolishBundles = [
  {
    subTopics: SCHOOL_ASSESSMENT_SUB_TOPICS,
    mentorHints: SCHOOL_ASSESSMENT_MENTOR_HINTS,
    correctShortened: SCHOOL_ASSESSMENT_CORRECT_SHORTENED,
    source: 'schoolAssessment',
  },
]

export const primaryScienceAssessmentGrade5Questions = runPolish(
  _basePrimaryScienceAssessmentGrade5Questions,
  _schoolAssessmentPolishBundles,
)
export const middleSchoolScienceAssessmentEarthSpaceQuestions = runPolish(
  _baseMiddleSchoolScienceAssessmentEarthSpaceQuestions,
  _schoolAssessmentPolishBundles,
)
export const middleSchoolScienceAssessmentBiologyQuestions = runPolish(
  _baseMiddleSchoolScienceAssessmentBiologyQuestions,
  _schoolAssessmentPolishBundles,
)
export const middleSchoolScienceAssessmentChemistryQuestions = runPolish(
  _baseMiddleSchoolScienceAssessmentChemistryQuestions,
  _schoolAssessmentPolishBundles,
)
export const middleSchoolScienceAssessmentPhysicsQuestions = runPolish(
  _baseMiddleSchoolScienceAssessmentPhysicsQuestions,
  _schoolAssessmentPolishBundles,
)
