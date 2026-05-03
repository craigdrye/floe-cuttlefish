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
    'Coverage source: OpenTriviaQA geography, AP Human Geography-aligned OER, and public geography review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenTriviaQA/OER AP Human Geography coverage',
})

export const apHumanGeographyExamBatchQuestions = makeQuestionBank('AP', [
  q(453001, 'Geographic Thinking', 'Scale', 'In geography, scale most directly affects:', 'The level of detail and pattern visible in an analysis', [
    miss('Only the physical size of a paper map', 'Map size is one use, but geographic scale is broader.', 'Think local, regional, national, global.'),
    miss('Whether data can ever be mapped', 'Data can be mapped at many scales.', 'Scale changes interpretation.'),
    miss('The color of map symbols only', 'Symbol color is cartography, not scale itself.', 'Use level of analysis.'),
  ]),
  q(453002, 'Population', 'Demographic transition', 'In the demographic transition model, death rates usually fall early because of:', 'Improved food supply, sanitation, and medicine', [
    miss('A sudden end to all births', 'Birth rates usually fall later than death rates.', 'Track stages of the model.'),
    miss('The disappearance of all cities', 'Urbanization often increases, not disappears.', 'Focus on mortality causes.'),
    miss('A ban on migration', 'Migration is separate from the classic death-rate transition.', 'Think health and survival.'),
  ]),
  q(453003, 'Migration', 'Push factor', 'Which is a push factor for migration?', 'Political persecution in the origin country', [
    miss('High wages in the destination country', 'That is a pull factor.', 'Push factors drive people away from origins.'),
    miss('Family already living in the destination', 'That usually pulls migrants toward a place.', 'Classify by origin versus destination.'),
    miss('A scholarship offered abroad', 'That is a destination attraction.', 'Push means pressure to leave.'),
  ]),
  q(453004, 'Culture', 'Cultural diffusion', 'Cultural diffusion is:', 'The spread of cultural traits or ideas from one place or group to another', [
    miss('The total isolation of all cultures', 'Diffusion involves spread and contact.', 'Think movement of ideas.'),
    miss('The physical erosion of mountains', 'That is a geomorphic process, not cultural diffusion.', 'Use human geography.'),
    miss('The birth rate of one population', 'Birth rate is demographic, not cultural diffusion.', 'Focus on traits and ideas.'),
  ]),
  q(453005, 'Political Geography', 'Nation-state', 'A nation-state is best described as:', 'A state whose borders largely align with a single national identity', [
    miss('A city with no government', 'A state has political organization and territory.', 'Think nation plus state.'),
    miss('An empire with no shared identity anywhere', 'Nation-state refers to alignment, not imperial diversity.', 'Use borders and identity.'),
    miss('A map projection', 'A projection is a way to represent Earth on a map.', 'This is political geography.'),
  ]),
  q(453006, 'Agriculture', 'Intensive agriculture', 'Intensive agriculture generally uses:', 'High inputs of labor or capital on smaller areas of land', [
    miss('Very little labor on vast land areas only', 'That describes extensive agriculture more closely.', 'Intensive means more input per land area.'),
    miss('No technology or labor at all', 'Agriculture requires inputs.', 'Compare intensity of inputs.'),
    miss('Only fishing in open oceans', 'Fishing is not the standard agriculture category here.', 'Stay with land-based production.'),
  ]),
  q(453007, 'Urban Geography', 'Urban sprawl', 'Urban sprawl refers to:', 'Low-density outward expansion of urban development', [
    miss('The complete disappearance of suburbs', 'Sprawl often involves suburban expansion.', 'Think outward growth.'),
    miss('A city becoming denser only in its center', 'That is not the usual sprawl pattern.', 'Low-density expansion is key.'),
    miss('A country banning all roads', 'Road networks often support sprawl.', 'Use urban land-use pattern.'),
  ]),
  q(453008, 'Development', 'HDI', 'The Human Development Index combines measures related to:', 'Health, education, and standard of living', [
    miss('Only military size', 'HDI is not a military index.', 'Think human welfare measures.'),
    miss('Only land area', 'Land area does not define HDI.', 'Use development indicators.'),
    miss('Only climate zones', 'Climate is not the HDI formula.', 'Recall the three broad components.'),
  ]),
  q(453009, 'Industry', 'Break-of-bulk point', 'A break-of-bulk point is a place where:', 'Goods transfer from one transportation mode to another', [
    miss('No transportation can occur', 'Break-of-bulk points are transport nodes.', 'Think port, rail, truck transfer.'),
    miss('A population pyramid is calculated', 'That is demographic analysis.', 'Use industrial/transport geography.'),
    miss('A country loses all sovereignty', 'That is political, not break-of-bulk.', 'Focus on freight movement.'),
  ]),
  q(453010, 'Environment', 'Possibilism', 'Possibilism argues that:', 'The environment offers constraints and opportunities, but humans can make choices', [
    miss('Environment determines every human action completely', 'That is environmental determinism.', 'Possibilism leaves room for human agency.'),
    miss('Humans have no relationship with environment', 'Possibilism still considers environmental context.', 'Balance limits and choices.'),
    miss('Maps cannot show environmental features', 'Maps can show many environmental features.', 'This is a human-environment theory.'),
  ]),
])
