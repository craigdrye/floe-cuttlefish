import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

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
  lesson:
    'Coverage source: reviewed OpenTriviaQA science/technology Earth-systems rows. This is an authored Floe-native conversion item, not a direct raw import.',
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
    miss('Instant formation of new limestone mountains', 'Bleaching is a stress response, not mountain building.', 'Think coral-algae relationship.'),
    miss('Corals to become immune to heat forever', 'Heat stress increases vulnerability.', 'Bleaching is harmful.'),
    miss('All coral reefs to move into deep ocean water overnight', 'Corals are fixed animals; they do not relocate like that.', 'Stress affects living tissue.'),
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
    miss('Helium', 'Helium is not a dietary mineral.', 'Think thyroid-related mineral.'),
    miss('Quartz', 'Quartz is a mineral but not the nutrient clue here.', 'Seaweed is known for iodine.'),
    miss('Neon', 'Neon is an inert gas, not a seaweed nutrient.', 'Choose the essential trace element.'),
  ]),
  q(458008, 'Nutrients and Minerals', 'Marine nutrient', 'Some edible seaweeds are rich in minerals such as iron, which matters because minerals:', 'Support biological functions but must cycle through ecosystems and diets', [
    miss('Are always harmful at every dose', 'Many minerals are essential in appropriate amounts.', 'Dose and role matter.'),
    miss('Cannot move through food webs', 'Minerals can cycle through organisms and environments.', 'Biogeochemical cycling.'),
    miss('Are identical to fossil fuels', 'Minerals and fossil fuels are different resource types.', 'Think nutrients and elements.'),
  ]),
  q(458009, 'Weather Indicators', 'Pine cone indicator', 'Pine cones can act as simple weather indicators because they often:', 'Open in dry conditions and close when wet', [
    miss('Open only underwater', 'The clue is dry versus wet air.', 'Humidity affects scales.'),
    miss('Turn into lightning rods', 'That is not the biological mechanism.', 'Think moisture response.'),
    miss('Measure earthquake magnitude directly', 'Pine cones do not measure seismic energy.', 'This is a humidity cue.'),
  ]),
  q(458010, 'Air and Water Pollution', 'Acid rain threshold', 'Rain is typically considered acid rain when its pH is below about:', '5.6', [
    miss('9.6', 'That would be basic, not acidic.', 'Acid means lower pH.'),
    miss('7.0 exactly', 'Natural rain is slightly acidic; the acid-rain threshold is lower.', 'Remember about 5.6.'),
    miss('14.0', 'That is extremely basic.', 'Use the low pH threshold.'),
  ]),
])
