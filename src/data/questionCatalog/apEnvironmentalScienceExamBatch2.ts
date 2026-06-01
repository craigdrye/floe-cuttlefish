import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/weather|hazards|earth systems|climate|oceans/i.test(chapter)) {
    return `${title} is about Earth systems reacting to energy and risk. The useful answer is "${correct}"; connect the observation to storm timing, magnitude, ocean heat, or climate feedbacks.`
  }
  if (/atmosphere|biogeochemical/i.test(chapter)) {
    return `${title} is about gases as environmental reservoirs. The useful answer is "${correct}"; track which gases store heat, shape surface conditions, or move through global cycles.`
  }
  if (/nutrients|minerals/i.test(chapter)) {
    return `${title} is about elements moving through ecosystems and diets. The useful answer is "${correct}"; separate essential trace nutrients from inert gases or non-nutrient materials.`
  }
  if (/weather indicators|pollution/i.test(chapter)) {
    return `${title} is about interpreting environmental signals. The useful answer is "${correct}"; connect the indicator to humidity, acidity, runoff, or ecosystem response.`
  }
  return `${title} is an environmental science concept. The useful answer is "${correct}"; identify the Earth system involved before choosing the effect.`
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
  source: 'OpenTriviaQA/OER AP Environmental Science coverage',
})

export const apEnvironmentalScienceExamBatch2Questions = makeQuestionBank('University', [
  q(458001, 'Weather and Hazards', 'Lightning safety', 'After the last thunder is heard, a common outdoor lightning-safety rule is to wait about:', '30 minutes before resuming activity', [
    miss('30 seconds before resuming activity', 'Lightning risk can remain after the storm seems to pass.', 'Use the standard safety buffer.'),
    miss('2 minutes before resuming activity', 'That is still too short for the usual rule.', 'Think half an hour.'),
    miss('No waiting period is needed', 'Residual storm risk matters.', 'Lightning safety uses a delay.'),
  ]),
  q(458002, 'Earth Systems', 'Earthquake magnitude', 'On the Richter-style magnitude scale, a magnitude 4.9 earthquake is most likely to be described as:', 'Noticeable shaking with significant damage unlikely', [
    miss('A global catastrophe across continents', 'That greatly overstates a magnitude 4.9 event.', 'Magnitude scales are logarithmic, but 4.9 is moderate.'),
    miss('A microearthquake that nobody can feel', 'Magnitude 4.9 is often felt.', 'Do not treat it as tiny.'),
    miss('A hurricane category, not an earthquake measure', 'The prompt is about earthquake magnitude.', 'Separate hazard scales.'),
  ]),
  q(458003, 'Climate and Oceans', 'Coral bleaching', 'Warm-water stress during strong El Nino events can damage coral reefs mainly by causing:', 'Bleaching when corals lose their symbiotic algae', [
    miss('Corals to gain extra algae that make them darker and healthier', 'Bleaching is usually the loss of symbiotic algae, not a gain of protective algae.', 'Think coral-algae relationship.'),
    miss('Corals to become permanently immune to later heat stress', 'Heat stress often makes reefs more vulnerable, especially if bleaching is repeated.', 'Bleaching is harmful.'),
    miss('Coral polyps to migrate quickly into deep cold water', 'Coral reefs are fixed communities; heat stress affects their living tissue in place.', 'Stress affects living tissue.'),
  ]),
  q(458004, 'Atmosphere', 'Greenhouse planet', 'Venus is extremely hot largely because its dense atmosphere is rich in:', 'Carbon dioxide', [
    miss('Oxygen', 'Venus is not oxygen-rich like Earth.', 'Think greenhouse gas.'),
    miss('Neon', 'Neon is not the main greenhouse driver here.', 'Use CO2.'),
    miss('Pure hydrogen', 'Hydrogen is not the bulk of Venus atmosphere.', 'Venus has a dense CO2 atmosphere.'),
  ]),
  q(458005, 'Atmosphere', 'Gas giant atmosphere', 'Jupiter and Saturn are mostly composed of:', 'Hydrogen and helium', [
    miss('Oxygen and nitrogen', 'That is closer to Earth atmosphere composition, not gas giants.', 'Gas giants are hydrogen-rich.'),
    miss('Carbon dioxide and ozone', 'Those are not the main gases in Jupiter and Saturn.', 'Think light elements.'),
    miss('Iron and liquid water', 'Those are not the bulk atmospheric composition.', 'Use planetary atmosphere composition.'),
  ]),
  q(458006, 'Biogeochemical Cycles', 'Atmospheric reservoirs', 'Why do planetary atmospheres matter in environmental science?', 'They store and move gases that affect climate, radiation, and surface conditions', [
    miss('They never interact with surface conditions', 'Atmospheres strongly affect temperature and weather.', 'Think climate coupling.'),
    miss('They only contain solid rocks', 'Atmospheres are gaseous layers.', 'Focus on gases.'),
    miss('They eliminate all energy transfer', 'Atmospheres mediate energy transfer.', 'Radiation and heat matter.'),
  ]),
  q(458007, 'Nutrients and Minerals', 'Seaweed mineral', 'Irish moss and some seaweeds are notable dietary sources of:', 'Iodine', [
    miss('Sodium only, with no important trace minerals', 'Seaweeds can contain sodium, but the notable trace nutrient in this clue is iodine.', 'Think thyroid-related mineral.'),
    miss('Calcium carbonate from reef skeletons', 'Calcium compounds matter in marine systems, but Irish moss and seaweeds are especially known for iodine.', 'Seaweed is known for iodine.'),
    miss('Nitrogen gas trapped in the leaves', 'Nitrogen gas is not the dietary mineral clue here.', 'Choose the essential trace element.'),
  ]),
  q(458008, 'Nutrients and Minerals', 'Marine nutrient', 'Some edible seaweeds are rich in minerals such as iron, which matters because minerals:', 'Support biological functions but must cycle through ecosystems and diets', [
    miss('Are always harmful at every dose', 'Many minerals are essential in appropriate amounts.', 'Dose and role matter.'),
    miss('Cannot move through food webs', 'Minerals can cycle through organisms and environments.', 'Biogeochemical cycling.'),
    miss('Are identical to fossil fuels', 'Minerals and fossil fuels are different resource types.', 'Think nutrients and elements.'),
  ]),
  q(458009, 'Weather Indicators', 'Pine cone indicator', 'Pine cones can act as simple weather indicators because they often:', 'Open in dry conditions and close when wet', [
    miss('Open only underwater', 'The clue is dry versus wet air.', 'Humidity affects scales.'),
    miss('Close in dry air and open as humidity rises', 'This reverses the usual moisture response of many pine cones.', 'Think moisture response.'),
    miss('Change shape mainly because of air pressure, not moisture', 'Moisture affects the cone scales more directly than air pressure here.', 'This is a humidity cue.'),
  ]),
  q(458010, 'Air and Water Pollution', 'Acid rain threshold', 'Rain is typically considered acid rain when its pH is below about:', '5.6', [
    miss('9.6', 'That would be basic, not acidic.', 'Acid means lower pH.'),
    miss('7.0 exactly', 'Natural rain is slightly acidic; the acid-rain threshold is lower.', 'Remember about 5.6.'),
    miss('14.0', 'That is extremely basic.', 'Use the low pH threshold.'),
  ]),
])
