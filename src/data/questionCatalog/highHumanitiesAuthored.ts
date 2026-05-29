import { makeQuestionBank } from './base'
import type { Question } from './types'
import { AP_EURHISTORY_SUB_TOPICS, AP_EURHISTORY_MENTOR_HINTS, AP_EURHISTORY_CORRECT_SHORTENED } from './apEuropeanHistoryPolish'
import { MISC_BANKS_SUB_TOPICS, MISC_BANKS_MENTOR_HINTS, MISC_BANKS_CORRECT_SHORTENED } from './miscBanksPolish'
import { polish as runPolish } from './polishPipeline'

// Hand-authored Wave 4 HS Humanities banks (2026-05-18).
// Closes two confirmed coverage gaps surfaced in docs/audit/high/:
//   - apEuropeanHistory.md: track was 'playable' with zero dedicated content, fell through to the
//     historyBlueprints fallback (US civics-flavoured), then demoted to 'soon' by the C1 sweep.
//   - middleSchoolBigHistory.md: same pattern, but kept at 'soon' pending human review.
// Voice model: civicPoliticsQuestions.ts (sober AP voice). The middle-school bank softens tone
// per the audit guidance while keeping per-distractor whys grounded in actual misconceptions.
// Chapter names align to the syllabi at src/data/syllabi/high/ap_european_history.md and
// src/data/syllabi/high/middle_school_big_history.md.

const highHumanitiesAuthoredApEuropeanHistoryBaseQuestions = makeQuestionBank('AP', [
  {
    id: 482001,
    chapter: 'Chapter 1: Historical Thinking and Early Modern Europe',
    title: 'Printing press impact',
    prompt: 'Why is Gutenberg’s movable-type printing press a turning point historians regularly cite for the European 15th century?',
    correct: 'It made identical texts cheap to reproduce, accelerating literacy, vernacular publishing, and the circulation of new ideas',
    wrong: [
      ['It eliminated handwriting as a daily skill across Europe within a generation', 'Handwriting remained dominant for centuries; print supplemented, not replaced, manuscript culture.', 'Look at what print scaled rather than what it abolished.'],
      ['It was first invented in Florence and tied directly to the Medici banking family', 'Movable-type printing in Europe is associated with Mainz and Johannes Gutenberg, not Florentine banking.', 'Match the technology to the right city and figure.'],
      ['It only mattered for printing royal proclamations and had no role in religious or scientific change', 'Print was central to the Reformation, the spread of vernacular Bibles, and the diffusion of scientific findings.', 'Count what kinds of texts the press multiplied.'],
    ],
    lesson: 'Movable type lowered the cost of producing identical books, which scaled vernacular literacy, fed the Reformation’s pamphlet wars, and made the Scientific Revolution’s correspondence networks possible.',
  },
  {
    id: 482002,
    chapter: 'Chapter 2: Reformation, Religious Conflict, and State Power',
    title: 'Peace of Westphalia',
    prompt: 'In AP European History, the 1648 Peace of Westphalia is most often taught as the formal benchmark for which political idea?',
    correct: 'Sovereign territorial states, with rulers exercising primary authority within recognised borders',
    wrong: [
      ['Universal religious toleration across all of Europe with no further confessional restrictions', 'Westphalia mainly regularised the existing Augsburg framework and added Calvinism; it did not establish universal toleration.', 'Recall how confessional choice still tracked rulers and territories.'],
      ['The unification of Germany under a single emperor with full executive control', 'German unification came in the 19th century; Westphalia actually reinforced princely autonomy inside the Empire.', 'Mind the century and the direction of political power.'],
      ['The dissolution of the papacy as a recognised institution', 'The papacy condemned the settlement but continued to function; Westphalia did not abolish it.', 'Westphalia is about state sovereignty, not church abolition.'],
    ],
    lesson: 'Westphalia is taught as the canonical marker of sovereign territoriality in Europe: rulers gained recognised authority within defined borders, and external interference based on confession was constrained.',
  },
  {
    id: 482003,
    chapter: 'Chapter 3: Absolutism, Constitutionalism, and Scientific Revolution',
    title: 'Glorious Revolution',
    prompt: 'The English Glorious Revolution of 1688–89 is significant for European political history because it:',
    correct: 'Established the principle that the monarch ruled with Parliament under a Bill of Rights, anchoring a constitutional rather than absolutist trajectory',
    wrong: [
      ['Made England an absolutist monarchy modelled directly on the court of Louis XIV', 'It moved in the opposite direction, away from Stuart absolutist claims toward parliamentary supremacy.', 'Compare its outcome to the French model rather than aligning the two.'],
      ['Abolished the monarchy and established a republic that lasted until the French Revolution', 'England remained a monarchy after 1689 under William and Mary; the only republican interregnum was the earlier Commonwealth.', 'Check whether a crown still existed afterwards.'],
      ['Returned England to direct papal authority by replacing Anglican leadership', 'The settlement reinforced a Protestant succession; it did not restore papal authority.', 'Notice the religious settlement embedded in 1689.'],
    ],
    lesson: 'The Glorious Revolution institutionalised the English Bill of Rights and parliamentary supremacy, contrasting with the absolutist trajectory of Louis XIV’s France and shaping later constitutional thought.',
  },
  {
    id: 482004,
    chapter: 'Chapter 4: Enlightenment, Revolution, and Napoleon',
    title: 'Napoleonic Code',
    prompt: 'Which AP-level claim about the Napoleonic Code is most defensible?',
    correct: 'It standardised civil law on Enlightenment principles such as legal equality of male citizens while restricting many rights for women',
    wrong: [
      ['It granted full legal and political equality to women across all French territories', 'The Code actually reduced women’s legal autonomy compared with revolutionary-era statutes; full equality was not its programme.', 'Look at what the Code did to married women’s property rights.'],
      ['It restored feudal privileges and noble tax exemptions across continental Europe', 'The Code abolished feudal privilege and codified careers open to talent; that was a key continuity with the Revolution.', 'Track the Code’s position on feudalism, not the Bourbon restoration’s.'],
      ['It abolished slavery throughout the French colonial empire on Napoleon’s personal initiative', 'Napoleon reinstated slavery in the French colonies in 1802 after its revolutionary abolition; the Code did not abolish it.', 'Separate the metropolitan Code from colonial policy.'],
    ],
    lesson: 'The Code spread legal uniformity, secular law, and male civic equality across territories Napoleon controlled, while explicitly limiting married women’s legal personality — a key complexity argument in AP Euro essays.',
  },
  {
    id: 482005,
    chapter: 'Chapter 5: Industrialization, Ideologies, and Social Change',
    title: 'Why Britain first',
    prompt: 'Which combination of factors is most commonly used in AP European History to explain why industrialisation began earliest in Britain rather than spreading evenly across Europe?',
    correct: 'Coal deposits near navigable water, agricultural productivity gains, capital from overseas trade, a relatively flexible labour market, and patent-protected mechanical innovations',
    wrong: [
      ['A single inventor (James Watt) acting independently of any wider economic conditions', 'The steam engine mattered, but Watt operated inside a dense ecosystem of capital, coal, and markets; single-cause stories are weak in AP essays.', 'Strong AP arguments stack multiple factors.'],
      ['British use of forced peasant labour identical to Russian serfdom', 'British agriculture had moved away from serfdom centuries earlier; the labour story is enclosure and wage labour, not serfdom.', 'Compare the labour systems rather than equating them.'],
      ['The discovery of Atlantic oil reserves under English control by the 1750s', 'Industrialisation in this period was coal-powered; petroleum did not become a major industrial fuel until much later.', 'Match the energy source to the period.'],
    ],
    lesson: 'The standard AP Euro causal story bundles geography (coal, water), capital (Atlantic trade profits and banking), institutions (patents, property law, relatively flexible labour) and prior agricultural change — a multi-factor argument earns complexity credit.',
  },
  {
    id: 482006,
    chapter: 'Chapter 6: Nationalism, Imperialism, and Modern Culture',
    title: 'Realpolitik in unification',
    prompt: 'When AP European History describes Bismarck’s diplomacy as Realpolitik, the term most precisely refers to:',
    correct: 'Pursuing concrete national-interest goals through whatever practical means available, rather than acting from fixed ideological or moral principles',
    wrong: [
      ['A strict adherence to liberal-revolutionary ideals as articulated in 1848', 'Bismarck explicitly distanced himself from the liberal-nationalist project of 1848; that is part of the contrast taught.', 'Pair Realpolitik with the rejection of 1848, not its continuation.'],
      ['A commitment to pan-European peace through binding multilateral treaties', 'Bismarck did pursue alliances after 1871, but Realpolitik names a method, not a peace doctrine.', 'Method versus aim is the distinction here.'],
      ['Religious crusading politics aimed at unifying Catholic Europe under a single throne', 'Realpolitik is explicitly secular and pragmatic; Bismarck even waged the Kulturkampf against Catholic political power.', 'Realpolitik contrasts with confessional politics.'],
    ],
    lesson: 'Realpolitik names a pragmatic, interest-driven approach to statecraft. AP responses should connect it to specific Bismarckian moves — the wars of unification, the alliance system, and the rejection of 1848 liberalism.',
  },
  {
    id: 482007,
    chapter: 'Chapter 7: Global Conflict, Cold War, and Contemporary Europe',
    title: 'Marshall Plan rationale',
    prompt: 'Which best captures the AP-level argument for why the United States proposed the Marshall Plan in 1947?',
    correct: 'To accelerate European economic recovery, stabilise democratic governments vulnerable to communist parties, and build a market for US exports',
    wrong: [
      ['To militarily reoccupy Western Europe and impose direct US administration', 'The Plan provided aid through European recipient governments; it did not establish US occupation.', 'Check whether sovereignty changed hands.'],
      ['To rebuild Germany under Soviet supervision as a single demilitarised state', 'The Plan deliberately bypassed Soviet-aligned governments; the Soviets rejected participation.', 'The Plan deepened the East–West divide rather than bridging it.'],
      ['To prepare an immediate ground invasion of the Soviet Union', 'The Plan was an economic and political instrument, not a military operation against the USSR.', 'Separate Marshall aid from later NATO defence planning.'],
    ],
    lesson: 'Marshall aid combined humanitarian recovery, anti-communist political stabilisation, and market-building for US goods — the standard three-part explanation in AP Cold War essays.',
  },
  {
    id: 482008,
    chapter: 'Chapter 8: AP European History Exam Studio',
    title: 'DBQ outside evidence',
    prompt: 'In an AP European History DBQ, what most distinguishes effective use of outside evidence?',
    correct: 'A specific historical fact, figure, or event from the relevant period that is not in the provided documents and that directly supports the thesis',
    wrong: [
      ['Restating one of the document quotations word-for-word in a new paragraph', 'Outside evidence by definition must come from beyond the DBQ packet; restating documents earns no credit.', 'Read the rubric phrase: outside means not in the packet.'],
      ['A generic statement about historical change with no named actor, date, or location', 'Vague generalisations rarely earn the outside-evidence point; specificity is the standard.', 'Name a thing, not a trend.'],
      ['A modern political analogy unconnected to the period under study', 'Outside evidence must be drawn from the historical period the prompt addresses, not contemporary analogy.', 'Stay inside the period of the prompt.'],
    ],
    lesson: 'Outside evidence is one specific, period-appropriate historical detail (a figure, event, or development) that is not in the documents and that strengthens the argument — a single high-quality reference usually clears the point.',
  },
])

export const highHumanitiesAuthoredApEuropeanHistoryQuestions: Question[] = runPolish(
  highHumanitiesAuthoredApEuropeanHistoryBaseQuestions,
  [{ subTopics: AP_EURHISTORY_SUB_TOPICS, mentorHints: AP_EURHISTORY_MENTOR_HINTS, correctShortened: AP_EURHISTORY_CORRECT_SHORTENED, source: 'apEuropeanHistory' }],
)

const _highHumanitiesAuthoredMiddleSchoolBigHistoryBase = makeQuestionBank('AP', [
  {
    id: 483001,
    chapter: 'Chapter 1: Big Questions, Big Time, and Evidence',
    title: 'Scale of time',
    prompt: 'A class is making a single timeline strip that runs from the Big Bang on the left to today on the right. Which placement is most accurate?',
    correct: 'Almost the entire strip is empty space and stars; humans appear only in the very last sliver on the right',
    wrong: [
      ['Humans take up about half the strip because human history feels long to us', 'Roughly 13.8 billion years versus a few hundred thousand for our species means humans fit in a tiny sliver, not half.', 'Compare a few hundred thousand to nearly fourteen billion.'],
      ['Dinosaurs and humans appear in the same section of the strip', 'Non-avian dinosaurs went extinct about 66 million years ago; modern humans appear only in the last 300,000 years or so.', 'Stack the dates and check whether they overlap.'],
      ['Farming starts at the very beginning of the strip, right after the Big Bang', 'Farming began only about 12,000 years ago, after billions of years of universe, Earth, and life history.', 'Farming sits near the end of the strip, not the start.'],
    ],
    lesson: 'A Big History scale-of-time strip is a humility exercise: nearly all of cosmic time is non-human, and being able to draw that to scale is the chapter’s core evidence skill.',
  },
  {
    id: 483002,
    chapter: 'Chapter 2: The Big Bang and the First Ingredients',
    title: 'Redshift as evidence',
    prompt: 'When astronomers say distant galaxies are "redshifted," what evidence does that give us about the universe?',
    correct: 'Their light is stretched to longer wavelengths because space itself is expanding, which supports the Big Bang model',
    wrong: [
      ['Distant galaxies are painted red, so they are physically red objects we can see directly', 'Redshift is about wavelength change, not paint or surface colour; it shows up in spectra, not snapshots.', 'Think wavelength of light rather than visible colour.'],
      ['Distant galaxies are getting closer to us very quickly', 'Redshift indicates galaxies are moving away from us, not approaching; approaching light would be blueshifted.', 'Compare what red and blue ends of the spectrum mean for motion.'],
      ['Light from distant galaxies cools down and turns into heat by the time it arrives', 'Light is not converted into heat by travel; redshift is a wavelength stretch caused by expanding space.', 'Stay with wavelength change, not temperature.'],
    ],
    lesson: 'Redshift is the key evidence-based reason astronomers say the universe is expanding, which is the single strongest support for the Big Bang model in middle-school Big History.',
  },
  {
    id: 483003,
    chapter: 'Chapter 3: Stars, Elements, and Cosmic Recycling',
    title: 'Where elements come from',
    prompt: 'Where do most chemical elements heavier than hydrogen and helium actually come from?',
    correct: 'From nuclear fusion inside stars and from violent stellar deaths such as supernovae',
    wrong: [
      ['From Earth’s crust originally, then spread outward into space', 'Heavy elements were already present when Earth formed; Earth got them from older stars, not the other way around.', 'Run the timeline: stars first, then planets.'],
      ['From the Big Bang itself, which produced all the elements on the periodic table at once', 'The Big Bang produced mostly hydrogen and helium; almost all heavier elements were built later in stars.', 'Separate "first ingredients" from later element-building.'],
      ['From plants and animals over the last few million years', 'Living things rearrange elements but cannot create new chemical elements; that requires nuclear processes in stars.', 'Biology shuffles atoms; only stars forge new ones.'],
    ],
    lesson: 'Carbon, oxygen, iron, and the other heavier elements were assembled inside stars and scattered by supernovae. The atoms in your body have, in this sense, an old stellar biography.',
  },
  {
    id: 483004,
    chapter: 'Chapter 4: Earth, the Moon, and Goldilocks Conditions',
    title: 'Goldilocks conditions',
    prompt: 'In Big History, "Goldilocks conditions" most accurately describes:',
    correct: 'A specific range of conditions, such as temperature and the presence of liquid water, that allow complex things like life to form',
    wrong: [
      ['Conditions that are extremely hot, which always speed up the formation of life', 'Most life we know about cannot persist in extreme heat; the term emphasises a moderate range, not maximum heat.', 'Goldilocks means "just right," not "as hot as possible."'],
      ['Conditions that are exactly identical on every planet in the solar system', 'Mercury, Venus, Earth, and Mars have very different conditions; Earth’s position is a key part of why life developed here.', 'Different planets have very different chemistries.'],
      ['Conditions present only at the moment of the Big Bang itself', 'The Big Bang was extreme and short; "Goldilocks" refers to long-lived conditions friendly to complex structures, not the first instant.', 'Goldilocks is about durable, supportive conditions.'],
    ],
    lesson: 'Goldilocks conditions are the in-between ranges — of temperature, energy, and chemistry — that allow complexity to build up. Earth sitting in the Sun’s habitable zone is the headline example.',
  },
  {
    id: 483005,
    chapter: 'Chapter 5: Life Begins and Changes the Planet',
    title: 'Photosynthesis and the atmosphere',
    prompt: 'How did early photosynthesising microbes change Earth’s atmosphere over billions of years?',
    correct: 'They released oxygen as a waste product, eventually transforming the atmosphere into one that could support oxygen-breathing life',
    wrong: [
      ['They produced nitrogen for the first time, before which the atmosphere had only carbon dioxide', 'Nitrogen was already a major component of the early atmosphere; the dramatic change microbes drove was the oxygen rise.', 'Track the gas that microbes actually added.'],
      ['They had no effect on the atmosphere because microbes are too small to change planet-scale things', 'Trillions of microbes acting over billions of years are exactly the kind of small-things-at-scale that changed Earth.', 'Big History keeps asking what scale plus time can do.'],
      ['They created the Moon by releasing material into orbit', 'The Moon formed long before life appeared, from a giant impact early in Earth’s history.', 'Match the right event to the right chapter.'],
    ],
    lesson: 'Tiny photosynthesising organisms changed Earth’s air over enormous time scales — oxygen-breathing life (including us) depends on what they did billions of years ago.',
  },
  {
    id: 483006,
    chapter: 'Chapter 6: Humans, Migration, and Collective Learning',
    title: 'Collective learning',
    prompt: 'Big History uses the phrase "collective learning" to describe a human ability that is unusually powerful. What does it mean?',
    correct: 'Humans can share and accumulate knowledge across generations through language, symbols, and writing, so each generation builds on what earlier ones figured out',
    wrong: [
      ['Every individual person already knows everything other humans have ever learned, just by being born', 'Knowledge has to be transmitted through language, teaching, and culture; nothing is automatically known at birth.', 'Collective learning needs communication, not magic inheritance.'],
      ['Animals such as ants and chimpanzees do collective learning in the same way and at the same pace as humans', 'Other animals do learn, but no other species accumulates knowledge across generations at the human scale and speed.', 'The phrase highlights what is unusual about humans.'],
      ['Humans only learn from direct trial and error and never from older generations', 'Learning from elders and from stored records (oral or written) is exactly what the phrase points to.', 'Memory and storytelling are part of the answer.'],
    ],
    lesson: 'Language, symbols, and later writing let humans accumulate know-how across generations. That is the engine Big History uses to explain why human change has accelerated so dramatically.',
  },
  {
    id: 483007,
    chapter: 'Chapter 7: Farming, Cities, and Written Records',
    title: 'Costs of settled life',
    prompt: 'A balanced Big History argument about the shift to farming should recognise that, alongside its benefits, settled agricultural life often brought:',
    correct: 'New social inequalities, more infectious disease, and harder physical labour for many people, even when food supply grew',
    wrong: [
      ['Universal improvements in health, equality, and happiness for everyone immediately', 'Skeletal evidence and other records show that early farmers were often less healthy than foragers; a one-sided story misses the costs.', 'Look at what the evidence shows about health and inequality.'],
      ['No new diseases, because settled communities were always far apart from animals', 'Living near domesticated animals and in denser settlements actually increased zoonotic disease risk.', 'Farming and herding bring people closer to animals, not further away.'],
      ['Immediate writing systems in every farming village by the time farming began', 'Writing developed later, in some farming societies, after surplus and city life created accounting needs.', 'Separate farming’s start from the much later spread of writing.'],
    ],
    lesson: 'Farming made surpluses, cities, and writing possible — but it also brought new diseases, social inequality, and harder labour. A balanced middle-school argument names both sides with evidence.',
  },
  {
    id: 483008,
    chapter: 'Chapter 8: The Modern Revolution and the Anthropocene',
    title: 'Why change sped up',
    prompt: 'Big History describes the past few centuries as a "great acceleration." Which factor is most central to explaining why change sped up so dramatically after roughly 1750?',
    correct: 'Tapping fossil fuels (coal, then oil and gas) unlocked enormous stored energy, scaling industry, population, transport, and information networks',
    wrong: [
      ['Humans suddenly became biologically smarter than earlier humans starting in 1750', 'Brain biology has not changed in any major way over a few centuries; the acceleration is about energy and networks, not new biology.', 'Look at what changed in the world, not in our bodies.'],
      ['The planet started rotating faster, making each year shorter and more productive', 'Earth’s rotation has not sped up perceptibly; the acceleration is about human energy use, not astronomy.', 'Stay with human energy systems.'],
      ['A single inventor in one country produced every modern technology by themselves', 'Modern industry is the product of many people, networks, and prior knowledge, not one inventor; collective learning matters here.', 'Apply Chapter 6’s collective-learning lens.'],
    ],
    lesson: 'Fossil-fuel energy plus collective learning is the standard Big History pair of causes for why change accelerated so much in the modern revolution — and why humans are now visibly reshaping Earth systems.',
  },
])

export const highHumanitiesAuthoredMiddleSchoolBigHistoryQuestions = runPolish(
  _highHumanitiesAuthoredMiddleSchoolBigHistoryBase,
  [{ subTopics: MISC_BANKS_SUB_TOPICS, mentorHints: MISC_BANKS_MENTOR_HINTS, correctShortened: MISC_BANKS_CORRECT_SHORTENED, source: 'miscBanks' }],
)
