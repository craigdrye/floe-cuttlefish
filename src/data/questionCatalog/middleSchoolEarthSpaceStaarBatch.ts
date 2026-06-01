import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/earth systems|weather and climate/i.test(chapter)) {
    return `${title} is about how water, air, and energy move through Earth systems. The useful answer is "${correct}"; separate short-term weather events from longer patterns and energy-driven cycles.`
  }
  if (/plate tectonics|rocks and fossils/i.test(chapter)) {
    return `${title} is about evidence from Earth's crust. The useful answer is "${correct}"; connect rock layers, fossils, earthquakes, and volcanoes to plate motion over time.`
  }
  if (/space systems/i.test(chapter)) {
    return `${title} is about Sun-Earth-Moon geometry. The useful answer is "${correct}"; track illumination, tilt, orbit, and viewpoint rather than assuming objects are changing size.`
  }
  if (/energy resources|human impact/i.test(chapter)) {
    return `${title} is about how human choices interact with Earth systems. The useful answer is "${correct}"; ask whether a resource replenishes quickly and what materials flow into ecosystems.`
  }
  return `${title} is a middle-school Earth and space science concept. The useful answer is "${correct}"; connect the observation to the system causing it.`
}

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: lessonFor(chapter, title, correct),
  source: 'Generated from STAAR/NYSED middle-school science coverage',
})

export const middleSchoolEarthSpaceStaarBatchQuestions = makeQuestionBank('AP', [
  q(427001, 'Earth Systems', 'Water cycle driver', 'What provides most of the energy that drives evaporation in the water cycle?', 'The Sun', [
    miss('Earth magnetic field', 'Magnetism does not drive evaporation.', 'Think heat energy at the surface.'),
    miss('The Moon only', 'The Moon affects tides, not most evaporation.', 'Evaporation needs energy.'),
    miss('Deep ocean pressure', 'Pressure is not the main energy source here.', 'Surface heating matters.'),
  ]),
  q(427002, 'Earth Systems', 'Condensation', 'Clouds form when water vapor:', 'Cools and condenses into tiny droplets or ice crystals', [
    miss('Evaporates more quickly into invisible gas', 'Evaporation makes liquid water become vapor; cloud formation happens when vapor cools and condenses.', 'Track phase changes.'),
    miss('Disappears from the atmosphere', 'The vapor changes form rather than vanishing.', 'Condensation makes visible cloud particles.'),
    miss('Heats up and stays spread out as vapor', 'Heating tends to keep water as vapor; cooling helps droplets or ice crystals form.', 'Cooling is the clue.'),
  ]),
  q(427003, 'Weather and Climate', 'Weather vs climate', 'Which statement best describes climate?', 'The long-term pattern of weather in a region', [
    miss('The temperature at noon today', 'That is weather, not climate.', 'Climate is long-term.'),
    miss('One thunderstorm', 'A single event is weather.', 'Look for averages and patterns.'),
    miss('Only the shape of clouds right now', 'Current cloud shape is weather observation.', 'Climate uses long periods.'),
  ]),
  q(427004, 'Plate Tectonics', 'Plate boundary', 'Earthquakes and volcanoes are most common near:', 'Tectonic plate boundaries', [
    miss('The center of every continent equally', 'Geologic activity clusters near boundaries.', 'Plates interact at edges.'),
    miss('Only flat beaches', 'Beaches are not the main control.', 'Think plate movement.'),
    miss('Places where air pressure changes fastest', 'Air pressure affects weather, while earthquakes and volcanoes are mostly tied to plate interactions.', 'Use Earth structure.'),
  ]),
  q(427005, 'Plate Tectonics', 'Divergent boundary', 'At a divergent plate boundary, plates generally:', 'Move away from each other', [
    miss('Move toward each other', 'That describes convergent boundaries.', 'Divergent means separating.'),
    miss('Never move', 'Plate motion is central to the boundary type.', 'Use the word divergent.'),
    miss('Slide past each other side by side', 'That describes a transform boundary more than a divergent boundary.', 'Focus on movement.'),
  ]),
  q(427006, 'Rocks and Fossils', 'Fossil evidence', 'Fossils found in matching rock layers on different continents can support the idea that:', 'The continents were once connected or closer together', [
    miss('Rocks cannot preserve evidence', 'Fossils and rock layers are evidence.', 'Use matching patterns.'),
    miss('All continents are fixed forever', 'Matching fossils helped challenge that idea.', 'Think continental drift.'),
    miss('Fossils only form in clouds', 'Fossils form in sediments and rocks.', 'Stay with rock layers.'),
  ]),
  q(427007, 'Space Systems', 'Moon phases', 'The Moon appears to change shape during the month mainly because:', 'We see different portions of its sunlit half', [
    miss('The Moon physically shrinks and grows', 'The Moon size does not change that way.', 'Visibility changes, not size.'),
    miss('Earth shadow causes every phase', 'Earth shadow causes lunar eclipses, not ordinary phases.', 'Think Sun-Moon-Earth geometry.'),
    miss('Clouds block the same part of the Moon in a repeating monthly pattern', 'Clouds can hide the Moon, but phases follow predictable Sun-Moon-Earth geometry.', 'Use illumination.'),
  ]),
  q(427008, 'Space Systems', 'Seasons', 'Earth has seasons mainly because:', 'Earth axis is tilted as it orbits the Sun', [
    miss('Earth is much closer to the Sun in every summer worldwide', 'Distance is not the main cause of seasons.', 'Opposite hemispheres have opposite seasons.'),
    miss('The Moon blocks winter sunlight', 'That is not how seasons work.', 'Use tilt and direct sunlight.'),
    miss('Earth stops rotating each year', 'Earth continues rotating.', 'Tilt changes sunlight angle and day length.'),
  ]),
  q(427009, 'Energy Resources', 'Renewable resource', 'Which energy source is renewable on human time scales?', 'Wind', [
    miss('Coal', 'Coal forms over geologic time and is nonrenewable for human use.', 'Look for naturally replenished sources.'),
    miss('Petroleum', 'Petroleum is fossil fuel and nonrenewable on human time scales.', 'Avoid fossil fuels.'),
    miss('Natural gas', 'Natural gas is also a fossil fuel.', 'Wind is replenished continuously.'),
  ]),
  q(427010, 'Human Impact', 'Runoff pollution', 'Fertilizer washing from fields into lakes can cause:', 'Algal blooms that reduce oxygen in the water', [
    miss('A guaranteed increase in fish oxygen', 'Algal blooms can lead to oxygen depletion.', 'Think eutrophication.'),
    miss('Nutrients to vanish before any organisms can use them', 'Fertilizer adds nutrients that can feed rapid algae growth instead of disappearing harmlessly.', 'Stay with water pollution.'),
    miss('The lake to become cleaner because algae always add oxygen forever', 'Algae can produce oxygen at first, but bloom die-off and decomposition can reduce dissolved oxygen.', 'Focus on ecosystem impact.'),
  ]),
])
