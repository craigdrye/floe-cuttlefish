import { makeQuestionBank } from './base'
import type { Question, Topic } from './types'

type ConceptSeed = {
  chapter: string
  concept: string
  correct: string
  wrong: readonly [string, string, string]
  lesson: string
}

const frames = [
  (seed: ConceptSeed) => ({
    title: `${seed.concept}: key idea`,
    prompt: `Which choice best explains ${seed.concept}?`,
  }),
  (seed: ConceptSeed) => ({
    title: `${seed.concept}: classroom check`,
    prompt: `A class is discussing ${seed.concept}. Which answer should they choose?`,
  }),
  (seed: ConceptSeed) => ({
    title: `${seed.concept}: science notebook`,
    prompt: `Which note about ${seed.concept} belongs in a careful science notebook?`,
  }),
  (seed: ConceptSeed) => ({
    title: `${seed.concept}: useful conclusion`,
    prompt: `What is the most useful conclusion about ${seed.concept}?`,
  }),
  (seed: ConceptSeed) => ({
    title: `${seed.concept}: spot the match`,
    prompt: `Which answer correctly matches the science idea of ${seed.concept}?`,
  }),
] as const

const buildGeneratedBank = (
  topic: Topic,
  baseId: number,
  sourceTrackId: string,
  seeds: readonly ConceptSeed[],
): Question[] =>
  makeQuestionBank(
    topic,
    seeds.flatMap((seed, seedIndex) =>
      frames.map((frame, frameIndex) => {
        const item = frame(seed)
        return {
          id: baseId + seedIndex * 10 + frameIndex,
          chapter: seed.chapter,
          title: item.title,
          prompt: item.prompt,
          correct: seed.correct,
          wrong: seed.wrong.map((answer) => [
            answer,
            `That is a plausible guess, but it does not match the evidence for ${seed.concept}.`,
            `Remember: ${seed.correct}`,
          ]) as [[string, string, string], [string, string, string], [string, string, string]],
          lesson: seed.lesson,
          source: `Generated primary science/discovery bank for ${sourceTrackId}`,
        }
      }),
    ),
  )

const scienceYear1Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Everyday Materials',
    concept: 'an object and its material',
    correct: 'An object is the thing, and the material is what the thing is made from.',
    wrong: ['An object and a material always mean exactly the same thing.', 'A material is only used for living things.', 'An object is always made from just one material.'],
    lesson: 'A wooden spoon is the object; wood is the material. Scientists describe both the thing and what it is made from.',
  },
  {
    chapter: 'Everyday Materials',
    concept: 'waterproof materials',
    correct: 'A waterproof material stops water from passing through it.',
    wrong: ['A waterproof material soaks up water quickly.', 'A waterproof material must always be soft.', 'A waterproof material lets light pass through it.'],
    lesson: 'Raincoats and umbrellas use waterproof materials because they help keep water out.',
  },
  {
    chapter: 'Everyday Materials',
    concept: 'transparent materials',
    correct: 'Transparent materials let you see through them clearly.',
    wrong: ['Transparent materials block all light.', 'Transparent materials are always magnetic.', 'Transparent materials must float in water.'],
    lesson: 'Glass is useful for windows because it is transparent, so light and images can pass through.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'animal basic needs',
    correct: 'Animals need food, water, air, and a safe place to live.',
    wrong: ['Animals only need toys and sunlight.', 'Animals need no water if they eat enough food.', 'Animals can live without air.'],
    lesson: 'Different animals live in different places, but all animals have basic needs for survival.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'herbivores',
    correct: 'Herbivores are animals that eat plants.',
    wrong: ['Herbivores eat only other animals.', 'Herbivores are animals with wings.', 'Herbivores are animals that live only in water.'],
    lesson: 'Cows, rabbits, and many caterpillars are herbivores because plants are their food.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the five senses',
    correct: 'The five senses help us notice the world: sight, hearing, smell, taste, and touch.',
    wrong: ['The five senses are only used by plants.', 'The five senses are running, jumping, eating, sleeping, and reading.', 'The five senses work without body parts.'],
    lesson: 'Eyes help with sight, ears with hearing, nose with smell, tongue with taste, and skin with touch.',
  },
  {
    chapter: 'Plants',
    concept: 'plant parts',
    correct: 'Roots, stems, leaves, and flowers are common parts of a plant.',
    wrong: ['Wheels, handles, and buttons are plant parts.', 'Only flowers are parts of plants.', 'Plants have bones instead of roots.'],
    lesson: 'Each plant part has a job: roots hold the plant and take in water, while leaves catch light.',
  },
  {
    chapter: 'Plants',
    concept: 'plant basic needs',
    correct: 'Most plants need light, water, warmth, and space to grow well.',
    wrong: ['Plants grow best with no light at all.', 'Plants need candy and toys to grow.', 'Plants only need wind and rocks.'],
    lesson: 'A fair plant test changes one need at a time, such as giving one plant less light.',
  },
  {
    chapter: 'Plants',
    concept: 'deciduous and evergreen trees',
    correct: 'Deciduous trees lose their leaves in a season, while evergreen trees keep leaves all year.',
    wrong: ['Evergreen trees are always dead in winter.', 'Deciduous trees never change during the year.', 'All trees lose all leaves every week.'],
    lesson: 'Oak trees are often deciduous; many pine trees are evergreen.',
  },
  {
    chapter: 'Seasonal Changes',
    concept: 'summer and winter day length',
    correct: 'Summer days usually have more daylight, and winter days usually have less daylight.',
    wrong: ['Winter days are always the longest days.', 'Day length never changes during the year.', 'Summer has no sunlight.'],
    lesson: 'Seasonal daylight patterns help explain why some outdoor activities and animal behaviors change through the year.',
  },
]

const scienceYear2Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'living, dead, and never alive',
    correct: 'Living things grow and need food or energy; dead things were once alive; rocks were never alive.',
    wrong: ['A toy car is dead because it stops moving.', 'A fallen leaf was never alive.', 'All things that move are living.'],
    lesson: 'Movement alone is not enough. A wind-up toy can move, but it does not grow or need food.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'habitats',
    correct: 'A habitat is a place where a living thing gets what it needs to survive.',
    wrong: ['A habitat is only a human house.', 'A habitat is any place with no animals.', 'A habitat is the same as a toy box.'],
    lesson: 'Ponds, woodlands, deserts, and oceans are habitats because they provide food, water, and shelter.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'micro-habitats',
    correct: 'A micro-habitat is a very small habitat, such as under a log or in soil.',
    wrong: ['A micro-habitat is a whole planet.', 'A micro-habitat is a place with no living things possible.', 'A micro-habitat is only found in space.'],
    lesson: 'Small creatures such as woodlice may live in damp, dark micro-habitats under logs.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'simple food chains',
    correct: 'A food chain shows how energy passes from one living thing to another as food.',
    wrong: ['A food chain shows the alphabet order of animals.', 'A food chain always begins with a shark.', 'A food chain shows where animals sleep.'],
    lesson: 'A simple chain might be leaf to caterpillar to bird. The arrows show who gets energy from whom.',
  },
  {
    chapter: 'Plants: Growth and Survival',
    concept: 'seeds and bulbs',
    correct: 'Seeds and bulbs can grow into new plants when conditions are right.',
    wrong: ['Seeds are tiny animals.', 'Bulbs are only electric lights.', 'Seeds grow best with no water, warmth, or light.'],
    lesson: 'A seed has the start of a new plant inside it, while bulbs store food for a plant to regrow.',
  },
  {
    chapter: 'Plants: Growth and Survival',
    concept: 'roots absorbing water',
    correct: 'Roots help hold a plant in place and absorb water from the soil.',
    wrong: ['Roots make flowers smell sweet.', 'Roots are used by plants to fly.', 'Roots only appear after a plant dies.'],
    lesson: 'Roots are usually underground, but they are busy taking in water and helping anchor the plant.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'animal life cycles',
    correct: 'A life cycle shows how a living thing is born, grows, has young, and eventually dies.',
    wrong: ['A life cycle is a bicycle for animals.', 'A life cycle means animals never change.', 'A life cycle only happens to plants.'],
    lesson: 'Life cycles help scientists compare how frogs, butterflies, birds, and mammals grow.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'healthy human habits',
    correct: 'Exercise, healthy food, sleep, and hygiene help human bodies stay well.',
    wrong: ['Only sweets and screen time keep bodies healthy.', 'Washing hands has nothing to do with health.', 'Exercise means the body needs no sleep.'],
    lesson: 'Good habits work together: food gives energy, exercise strengthens the body, and hygiene reduces germs.',
  },
  {
    chapter: 'Uses of Everyday Materials',
    concept: 'choosing suitable materials',
    correct: 'A suitable material has properties that fit the job it needs to do.',
    wrong: ['The best material is always the shiniest one.', 'The best material is always the heaviest one.', 'Any material works equally well for every job.'],
    lesson: 'Glass suits windows because it is transparent; rubber suits some boots because it is flexible and waterproof.',
  },
  {
    chapter: 'Uses of Everyday Materials',
    concept: 'recycling materials',
    correct: 'Recycling means using materials again instead of throwing everything away.',
    wrong: ['Recycling means hiding rubbish under soil.', 'Recycling can only happen to food scraps.', 'Recycling means making more waste on purpose.'],
    lesson: 'Recycling can reduce waste and save useful materials such as paper, metal, glass, and some plastics.',
  },
]

const scienceYear3Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'sedimentary rocks',
    correct: 'Sedimentary rocks often form from layers of sand, mud, or tiny pieces pressed together.',
    wrong: ['Sedimentary rocks form only from fresh tree leaves.', 'Sedimentary rocks are made by animals weaving webs.', 'Sedimentary rocks are always soft like jelly.'],
    lesson: 'Layers are an important clue. Fossils are often found in sedimentary rocks.',
  },
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'fossil formation',
    correct: 'Fossils can form when remains are buried, protected, and slowly replaced or filled by minerals.',
    wrong: ['Fossils form when bones are painted gold overnight.', 'Fossils are made only by freezing living animals today.', 'Fossils form when rocks turn into living animals.'],
    lesson: 'Fossil formation takes a long time and usually needs burial in sediment.',
  },
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'soil formation',
    correct: 'Soil forms from broken-down rock mixed with decayed material from living things.',
    wrong: ['Soil is made only from plastic bags.', 'Soil appears instantly whenever it rains.', 'Soil is always pure water.'],
    lesson: 'Weathering breaks rocks into smaller pieces, and dead plants or animals add organic matter.',
  },
  {
    chapter: 'Light and Shadows',
    concept: 'light sources',
    correct: 'A light source gives out its own light, such as the Sun, a lamp, or a candle.',
    wrong: ['The Moon is a light source because it makes its own light.', 'A mirror is a light source because it reflects faces.', 'Every shiny object makes its own light.'],
    lesson: 'Reflectors bounce light from another source; they do not make light by themselves.',
  },
  {
    chapter: 'Light and Shadows',
    concept: 'shadow formation',
    correct: 'A shadow forms when an opaque object blocks light.',
    wrong: ['A shadow forms when an object makes more light.', 'A shadow forms only inside water.', 'Transparent glass always makes the darkest shadow.'],
    lesson: 'Opaque means light cannot pass through easily, so a dark shape appears behind the object.',
  },
  {
    chapter: 'Forces and Magnets',
    concept: 'friction',
    correct: 'Friction is a force that can slow movement when surfaces rub together.',
    wrong: ['Friction is the name for all magnets.', 'Friction makes every object float upward.', 'Friction only happens inside plants.'],
    lesson: 'Rougher surfaces usually create more friction than smoother surfaces.',
  },
  {
    chapter: 'Forces and Magnets',
    concept: 'magnetic materials',
    correct: 'Magnets attract some materials, especially iron and steel, but not all metals.',
    wrong: ['Magnets attract all plastic objects.', 'Magnets attract every metal equally.', 'Magnets only work on paper.'],
    lesson: 'Testing materials is useful because aluminium foil and copper coins are not attracted like iron or steel.',
  },
  {
    chapter: 'Plants: Functions and Life Cycle',
    concept: 'seed dispersal',
    correct: 'Seed dispersal moves seeds away from the parent plant by wind, water, animals, or bursting pods.',
    wrong: ['Seed dispersal means seeds stay glued to the parent forever.', 'Seed dispersal is how leaves make shadows.', 'Seed dispersal only happens when people paint seeds.'],
    lesson: 'Spreading seeds helps new plants find space, light, water, and nutrients.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the human skeleton',
    correct: 'The skeleton supports the body, helps movement, and protects organs.',
    wrong: ['The skeleton digests food in the stomach.', 'The skeleton pumps blood around the body.', 'The skeleton is only used for hearing sounds.'],
    lesson: 'The skull protects the brain, ribs protect the lungs and heart, and bones work with muscles for movement.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'balanced diets',
    correct: 'A balanced diet gives the body different nutrients in sensible amounts.',
    wrong: ['A balanced diet means eating only one food every day.', 'A balanced diet means avoiding water.', 'A balanced diet is only for plants.'],
    lesson: 'Carbohydrates, proteins, fats, vitamins, minerals, fibre, and water all help the body in different ways.',
  },
]

const scienceYear4Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'classification keys',
    correct: 'A classification key uses yes-or-no questions to help identify living things.',
    wrong: ['A classification key unlocks animal cages.', 'A classification key is a list of random guesses.', 'A classification key only works for rocks.'],
    lesson: 'Good keys use observable features, such as wings, legs, leaves, or body covering.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'environmental change',
    correct: 'Environmental change can help or harm living things by changing food, water, shelter, or safety.',
    wrong: ['Environmental change never affects animals or plants.', 'Environmental change only means changing classroom seats.', 'Environmental change always helps every species equally.'],
    lesson: 'Pollution, deforestation, new ponds, and protected spaces can all change habitats.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the digestive system',
    correct: 'The digestive system breaks food down so the body can use nutrients.',
    wrong: ['The digestive system makes shadows.', 'The digestive system pumps electricity through wires.', 'The digestive system stores memories.'],
    lesson: 'Food travels from the mouth through the oesophagus to the stomach and intestines.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'types of teeth',
    correct: 'Incisors cut, canines tear, and molars grind food.',
    wrong: ['Molars are only for smelling food.', 'Incisors are used to hear sound.', 'Canines are flat teeth for grinding only.'],
    lesson: 'Different tooth shapes are clues to the job each tooth does.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'producers in food chains',
    correct: 'A producer makes its own food, so green plants often start food chains.',
    wrong: ['A producer is always the top predator.', 'A producer is an animal that only eats meat.', 'A producer is a rock in a habitat.'],
    lesson: 'Plants use light to make food, then animals get energy by eating plants or other animals.',
  },
  {
    chapter: 'States of Matter',
    concept: 'solids, liquids, and gases',
    correct: 'Solids keep their shape, liquids flow and take the container shape, and gases spread out.',
    wrong: ['All materials are solids all the time.', 'Gases keep a fixed block shape.', 'Liquids cannot be poured.'],
    lesson: 'Changing temperature can cause some materials to change state.',
  },
  {
    chapter: 'States of Matter',
    concept: 'evaporation and condensation',
    correct: 'Evaporation changes liquid water to water vapour, and condensation changes vapour back to liquid.',
    wrong: ['Evaporation turns water into stone.', 'Condensation means ice catches fire.', 'Evaporation and condensation are names for animal groups.'],
    lesson: 'These changes are important parts of the water cycle.',
  },
  {
    chapter: 'Sound',
    concept: 'sound vibrations',
    correct: 'Sounds are made when objects vibrate and those vibrations travel to the ear.',
    wrong: ['Sound is made only when light bends.', 'Sound travels without any vibrating material.', 'Sound is the same thing as smell.'],
    lesson: 'A plucked string, a drum skin, and vocal cords all make sound by vibrating.',
  },
  {
    chapter: 'Sound',
    concept: 'pitch and volume',
    correct: 'Pitch describes how high or low a sound is, while volume describes how loud or quiet it is.',
    wrong: ['Pitch and volume mean exactly the same thing.', 'Pitch tells how heavy a sound is.', 'Volume tells what colour a sound is.'],
    lesson: 'Shorter or tighter strings often make a higher pitch; stronger vibrations often make a louder volume.',
  },
  {
    chapter: 'Electricity',
    concept: 'complete circuits',
    correct: 'A bulb lights only when it is part of a complete circuit loop with a power source.',
    wrong: ['A bulb lights when one wire touches nothing.', 'A bulb lights just by being near a battery.', 'A bulb lights better when the loop is broken.'],
    lesson: 'A switch works by opening or closing the circuit loop.',
  },
]

const scienceYear5Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'mammal life cycles',
    correct: 'Most mammals grow inside the mother before birth, then are fed and cared for as young.',
    wrong: ['Most mammals hatch from jelly eggs in ponds.', 'Most mammals begin life as caterpillars.', 'Most mammals split in half to reproduce.'],
    lesson: 'Life cycles differ between mammals, amphibians, insects, and birds.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'complete metamorphosis',
    correct: 'Complete metamorphosis has egg, larva, pupa, and adult stages.',
    wrong: ['Complete metamorphosis has only adult and old adult stages.', 'Complete metamorphosis means a plant grows roots.', 'Complete metamorphosis is the Moon changing shape.'],
    lesson: 'Butterflies and beetles are familiar examples of insects with complete metamorphosis.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'plant reproduction by runners and bulbs',
    correct: 'Some plants can reproduce asexually using runners, bulbs, or similar structures.',
    wrong: ['Runners are always animal footprints.', 'Bulbs can never grow into new plants.', 'All plant reproduction requires two parent plants.'],
    lesson: 'Asexual reproduction uses one parent plant and can make new plants without pollination.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'human development stages',
    correct: 'Humans develop through stages such as infancy, childhood, adolescence, adulthood, and old age.',
    wrong: ['Humans skip childhood and become adults overnight.', 'Humans never change after birth.', 'Old age happens before infancy.'],
    lesson: 'A life timeline helps place body changes in a sensible order.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'solubility',
    correct: 'A soluble substance dissolves in a liquid to form a solution.',
    wrong: ['A soluble substance cannot mix with any liquid.', 'Solubility means a material is magnetic.', 'Solubility means a material is always transparent.'],
    lesson: 'Salt and sugar can dissolve in water; sand does not dissolve in the same way.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'separating mixtures',
    correct: 'Sieving, filtering, and evaporating can separate different kinds of mixtures.',
    wrong: ['Every mixture must be separated with a magnet.', 'Filtering is used to separate planets.', 'Evaporating is only used to cut paper.'],
    lesson: 'Choose the method based on particle size, solubility, and state of matter.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'reversible and irreversible changes',
    correct: 'Melting and freezing are usually reversible, but burning usually makes new materials and is not easily reversed.',
    wrong: ['Burning paper is easy to turn back into the same paper.', 'Freezing water always makes a new chemical material.', 'All changes can be reversed by waiting one minute.'],
    lesson: 'A reversible change can be undone to get the material back; an irreversible change often forms something new.',
  },
  {
    chapter: 'Earth and Space',
    concept: 'Earth rotation and day and night',
    correct: 'Day and night happen because Earth rotates, turning different places toward or away from the Sun.',
    wrong: ['Day and night happen because the Sun turns off.', 'Day and night happen because Earth changes size each day.', 'Day and night happen because clouds push the Sun around Earth.'],
    lesson: 'One full rotation of Earth takes about one day.',
  },
  {
    chapter: 'Earth and Space',
    concept: 'planet orbits',
    correct: 'Planets orbit the Sun, and one Earth orbit takes about one year.',
    wrong: ['The Sun orbits every planet once a day.', 'Planets travel in straight lines away from the Sun forever.', 'Earth does not move in space.'],
    lesson: 'Orbit means a path around another body due to gravity.',
  },
  {
    chapter: 'Forces',
    concept: 'air resistance and water resistance',
    correct: 'Air resistance and water resistance are forces that oppose motion through air or water.',
    wrong: ['Air resistance pulls objects toward magnets.', 'Water resistance only happens in deserts.', 'Air resistance makes motion faster every time.'],
    lesson: 'Parachutes use air resistance to slow falling; streamlined shapes reduce resistance.',
  },
]

const scienceYear6Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'classifying living things',
    correct: 'Living things can be classified by shared observable characteristics and similarities.',
    wrong: ['Living things are classified only by favourite colour.', 'Classification means putting all organisms in one group.', 'Only large animals can be classified.'],
    lesson: 'Classification helps scientists organise plants, animals, fungi, and micro-organisms.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'micro-organisms',
    correct: 'Micro-organisms are tiny living things, such as bacteria, some fungi, and some protists.',
    wrong: ['Micro-organisms are always large mammals.', 'Micro-organisms can all be seen clearly without magnification.', 'Micro-organisms are the same as planets.'],
    lesson: 'Some micro-organisms cause disease, but many are useful in soil, food, and ecosystems.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the circulatory system',
    correct: 'The circulatory system moves blood around the body using the heart and blood vessels.',
    wrong: ['The circulatory system breaks rocks into soil.', 'The circulatory system carries electricity to light bulbs.', 'The circulatory system is only used for chewing.'],
    lesson: 'Blood carries oxygen, nutrients, and waste products around the body.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'heart function',
    correct: 'The heart is a muscle that pumps blood through blood vessels.',
    wrong: ['The heart stores all memories.', 'The heart digests food into sugar.', 'The heart makes bones longer.'],
    lesson: 'Exercise can make the heart beat faster because working muscles need more oxygen.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'inherited variation',
    correct: 'Offspring are the same kind as their parents but usually have small differences.',
    wrong: ['Offspring are always identical copies of both parents.', 'Offspring never inherit any features.', 'A learned skill is always inherited by babies.'],
    lesson: 'Inherited traits come from parents, while acquired skills are learned during life.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'adaptation and natural selection',
    correct: 'Helpful adaptations can make survival and reproduction more likely in a particular environment.',
    wrong: ['Adaptations are chosen instantly because an animal wants them.', 'Natural selection means the strongest animal always wins a race.', 'Adaptations never affect survival.'],
    lesson: 'Over many generations, helpful inherited features can become more common.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'fossils as evidence',
    correct: 'Fossils give evidence about living things that existed long ago.',
    wrong: ['Fossils show what every future animal will look like.', 'Fossils are made from plastic toys only.', 'Fossils prove that living things never change.'],
    lesson: 'Fossils help scientists compare ancient organisms with modern ones.',
  },
  {
    chapter: 'Light',
    concept: 'light travelling in straight lines',
    correct: 'Light travels in straight lines until it is reflected, absorbed, or refracted.',
    wrong: ['Light always travels in curly loops.', 'Light can only travel through metal wires.', 'Light stops existing when it reaches air.'],
    lesson: 'Straight-line travel helps explain shadows and how we see objects.',
  },
  {
    chapter: 'Light',
    concept: 'seeing reflected light',
    correct: 'We see many objects because light reflects from them into our eyes.',
    wrong: ['We see all objects because our eyes shine powerful beams on them.', 'Objects are visible without any light at all.', 'Only objects that make their own light can be seen.'],
    lesson: 'A book does not make its own light, but you can see it when light bounces from the book to your eyes.',
  },
  {
    chapter: 'Electricity',
    concept: 'cell voltage and component output',
    correct: 'Adding suitable cells can make a bulb brighter or a buzzer louder in a working circuit.',
    wrong: ['More cells always make a broken circuit work without a loop.', 'Cells make bulbs darker every time.', 'Voltage only changes the colour of wires.'],
    lesson: 'Components still need a complete circuit, and too much voltage can damage them.',
  },
]

const dinosPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'The Mesozoic Era',
    concept: 'the three dinosaur periods',
    correct: 'The main dinosaur periods were Triassic, Jurassic, and Cretaceous.',
    wrong: ['The main dinosaur periods were Monday, Tuesday, and Friday.', 'Dinosaurs lived only in the Ice Age.', 'The three periods were Ocean, Desert, and Mountain.'],
    lesson: 'The Mesozoic Era is often divided into Triassic, Jurassic, and Cretaceous time.',
  },
  {
    chapter: 'The Mesozoic Era',
    concept: 'Pangaea breaking apart',
    correct: 'Pangaea was a supercontinent that slowly broke apart as plates moved.',
    wrong: ['Pangaea was a dinosaur that ate continents.', 'Pangaea was a single ocean with no land.', 'Pangaea broke apart in one afternoon.'],
    lesson: 'Continental drift helps explain why similar fossils can be found on different continents.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'bipedal dinosaurs',
    correct: 'Bipedal dinosaurs walked mainly on two legs.',
    wrong: ['Bipedal dinosaurs swam using eight fins.', 'Bipedal dinosaurs had no legs at all.', 'Bipedal dinosaurs always walked on six legs.'],
    lesson: 'Many theropods, including Tyrannosaurus rex, were bipedal.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'Stegosaurus plates',
    correct: 'Stegosaurus plates may have helped with display, species recognition, or body temperature.',
    wrong: ['Stegosaurus plates were used as helicopter blades.', 'Stegosaurus plates were removable dinner plates.', 'Stegosaurus plates were only for chewing leaves.'],
    lesson: 'Scientists infer function by comparing fossils, living animals, and body structures.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'feathered dinosaurs',
    correct: 'Some dinosaurs had feathers, and birds are living relatives of theropod dinosaurs.',
    wrong: ['No dinosaur ever had feathers.', 'Feathers prove dinosaurs were actually plants.', 'Birds are unrelated to any ancient reptiles.'],
    lesson: 'Fossils with feather impressions help show the link between some dinosaurs and birds.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'body fossils',
    correct: 'Body fossils are preserved parts of an organism, such as bones, teeth, or shells.',
    wrong: ['Body fossils are dinosaur jokes written in books.', 'Body fossils are only footprints.', 'Body fossils are always fresh skin from living animals.'],
    lesson: 'Body fossils differ from trace fossils because they come from the body itself.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'trace fossils',
    correct: 'Trace fossils preserve evidence of activity, such as footprints, burrows, or droppings.',
    wrong: ['Trace fossils are maps to buried treasure only.', 'Trace fossils are never made by living things.', 'Trace fossils are the same as modern plastic toys.'],
    lesson: 'Trackways can show how an animal moved and whether it travelled alone or in a group.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'Mary Anning',
    correct: 'Mary Anning was an important fossil hunter who found major fossils on the Jurassic Coast.',
    wrong: ['Mary Anning was the first person to land on Mars.', 'Mary Anning invented electric circuits.', 'Mary Anning was a dinosaur from the Cretaceous.'],
    lesson: 'Mary Anning helped change what scientists knew about ancient life.',
  },
  {
    chapter: 'Extinction and Legacy',
    concept: 'the K-Pg extinction',
    correct: 'The K-Pg extinction about 66 million years ago wiped out many dinosaurs after a major asteroid impact and other changes.',
    wrong: ['The K-Pg extinction happened last Tuesday.', 'The K-Pg extinction was caused by dinosaurs forgetting to sleep.', 'The K-Pg extinction made every living thing disappear.'],
    lesson: 'Evidence includes the Chicxulub crater and a worldwide layer rich in iridium.',
  },
  {
    chapter: 'Extinction and Legacy',
    concept: 'survivors after dinosaur extinction',
    correct: 'Birds, mammals, crocodilians, and many other groups survived the K-Pg extinction.',
    wrong: ['No living thing survived the K-Pg extinction.', 'Only Tyrannosaurus rex survived unchanged.', 'Only plants survived and all animals vanished.'],
    lesson: 'Extinction events remove many species but do not always remove every branch of life.',
  },
]

const planetsPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'The Solar System',
    concept: 'the Sun at the centre',
    correct: 'The Sun is at the centre of our solar system, and planets orbit it.',
    wrong: ['Earth is at the centre and the Sun orbits Earth every hour.', 'The Moon is the centre of the solar system.', 'The solar system has no star.'],
    lesson: 'The Sun is a star whose gravity helps keep planets in orbit.',
  },
  {
    chapter: 'The Solar System',
    concept: 'inner rocky planets',
    correct: 'Mercury, Venus, Earth, and Mars are the inner rocky planets.',
    wrong: ['Jupiter, Saturn, Uranus, and Neptune are the inner rocky planets.', 'Only Earth is a planet.', 'The inner rocky planets are all made of cheese.'],
    lesson: 'The inner planets are closer to the Sun and have solid rocky surfaces.',
  },
  {
    chapter: 'The Solar System',
    concept: 'outer giant planets',
    correct: 'Jupiter, Saturn, Uranus, and Neptune are outer giant planets.',
    wrong: ['Mercury and Venus are the outer giant planets.', 'The outer planets are tiny rocks with no atmospheres.', 'The outer planets are all closer to the Sun than Earth.'],
    lesson: 'The outer giant planets are much larger than Earth and have thick atmospheres.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'Earth tilt and seasons',
    correct: 'Seasons happen because Earth is tilted as it orbits the Sun.',
    wrong: ['Seasons happen because Earth gets much closer to the Sun every summer everywhere.', 'Seasons happen because the Moon changes colour.', 'Seasons happen because the Sun turns cold in winter.'],
    lesson: 'Tilt changes the angle and length of sunlight in each hemisphere through the year.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'Moon phases',
    correct: 'Moon phases are the changing shapes of sunlight we see on the Moon as it orbits Earth.',
    wrong: ['Moon phases happen because the Moon changes its real shape each night.', 'Moon phases are caused by clouds painting the Moon.', 'Moon phases happen because the Moon makes its own light.'],
    lesson: 'The Moon reflects sunlight, and we see different lit parts during the month.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'tides and the Moon',
    correct: "The Moon's gravity is a major cause of ocean tides on Earth.",
    wrong: ['Tides are caused only by fish swimming together.', 'Tides happen because beaches breathe air.', 'The Moon has no connection to tides.'],
    lesson: 'The Sun also affects tides, but the Moon is the main influence students usually study first.',
  },
  {
    chapter: 'Stars, Galaxies and The Universe',
    concept: 'light years',
    correct: 'A light year is a unit of distance, not a unit of time.',
    wrong: ['A light year is exactly one school year.', 'A light year measures how bright a lamp is.', 'A light year is the time it takes to eat lunch in space.'],
    lesson: 'A light year is the distance light travels in one year.',
  },
  {
    chapter: 'Stars, Galaxies and The Universe',
    concept: 'the Milky Way',
    correct: 'The Milky Way is our galaxy and contains billions of stars.',
    wrong: ['The Milky Way is only one small moon.', 'The Milky Way is a planet next to Mars.', 'The Milky Way contains no stars.'],
    lesson: 'Our Sun is one star within the Milky Way galaxy.',
  },
  {
    chapter: 'Space Exploration',
    concept: 'Apollo 11',
    correct: 'Apollo 11 was the mission that first landed humans on the Moon.',
    wrong: ['Apollo 11 first landed humans on Jupiter.', 'Apollo 11 discovered dinosaurs.', 'Apollo 11 was a deep ocean submarine.'],
    lesson: 'In 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin walked on the Moon.',
  },
  {
    chapter: 'Space Exploration',
    concept: 'Mars rovers',
    correct: 'Mars rovers are robotic vehicles that explore the surface of Mars.',
    wrong: ['Mars rovers are whales that live in craters.', 'Mars rovers are rockets that orbit only the Sun and never land.', 'Mars rovers are telescopes at the bottom of the ocean.'],
    lesson: 'Rovers use cameras and instruments to study rocks, soil, weather, and signs of past water.',
  },
]

const oceanPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'Ocean Zones',
    concept: 'the sunlight zone',
    correct: 'The sunlight zone is the upper ocean layer where enough light supports photosynthesis.',
    wrong: ['The sunlight zone is the deepest trench with no light.', 'The sunlight zone is only inside volcanoes.', 'The sunlight zone has no living things.'],
    lesson: 'Many ocean food chains begin near the surface because algae and phytoplankton need light.',
  },
  {
    chapter: 'Ocean Zones',
    concept: 'the twilight zone',
    correct: 'The twilight zone is dim, with less sunlight and many animals adapted to low light.',
    wrong: ['The twilight zone is brighter than the beach at noon.', 'The twilight zone is dry land.', 'The twilight zone is only found inside coral skeletons.'],
    lesson: 'Some twilight-zone animals use large eyes or bioluminescence.',
  },
  {
    chapter: 'Ocean Zones',
    concept: 'the midnight zone',
    correct: 'The midnight zone has no sunlight and very high pressure.',
    wrong: ['The midnight zone is the top few centimetres of water.', 'The midnight zone is always full of grass and bees.', 'The midnight zone has bright sunlight for photosynthesis.'],
    lesson: 'Deep-sea animals need special adaptations for darkness, cold, and pressure.',
  },
  {
    chapter: 'Marine Ecosystems and Food Chains',
    concept: 'phytoplankton as producers',
    correct: 'Phytoplankton are tiny producers that use sunlight to make food.',
    wrong: ['Phytoplankton are top predators with sharp teeth.', 'Phytoplankton are plastic pellets.', 'Phytoplankton never need light or nutrients.'],
    lesson: 'These tiny organisms support huge ocean food webs.',
  },
  {
    chapter: 'Marine Ecosystems and Food Chains',
    concept: 'apex predators',
    correct: 'Apex predators, such as orcas, are predators near the top of a food web.',
    wrong: ['Apex predators are always plants.', 'Apex predators are animals that are eaten by every other animal.', 'Apex predators are grains of sand.'],
    lesson: 'Apex predators still depend on the health of the whole food web beneath them.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'fish gills',
    correct: 'Fish use gills to take oxygen from water.',
    wrong: ['Fish use gills to grow flowers.', 'Fish use gills to breathe air exactly like human lungs on land.', 'Fish use gills only to hear music.'],
    lesson: 'Gills let fish exchange gases with water as water passes over them.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'marine mammals breathing',
    correct: 'Marine mammals breathe air with lungs and must surface to breathe.',
    wrong: ['Marine mammals breathe through leaves.', 'Marine mammals never need oxygen.', 'Marine mammals are fish because they live in water.'],
    lesson: 'Whales, dolphins, and seals are mammals, so they breathe air even though they live in the ocean.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'octopus camouflage',
    correct: 'An octopus can change colour and texture to blend in or communicate.',
    wrong: ['An octopus uses feathers for camouflage.', 'An octopus turns into a rock permanently.', 'An octopus can only hide by closing its eyes.'],
    lesson: 'Camouflage helps many animals avoid predators or surprise prey.',
  },
  {
    chapter: 'Ocean Conservation',
    concept: 'coral bleaching',
    correct: 'Coral bleaching can happen when warming or stress makes corals lose helpful algae.',
    wrong: ['Coral bleaching means corals are washed with soap for fun.', 'Coral bleaching is caused by too many moon phases.', 'Coral bleaching makes reefs healthier every time.'],
    lesson: 'Bleached corals are stressed and may die if conditions do not improve.',
  },
  {
    chapter: 'Ocean Conservation',
    concept: 'plastic pollution',
    correct: 'Plastic pollution can harm marine animals when it is swallowed or traps them.',
    wrong: ['Plastic pollution is food for all sea turtles.', 'Plastic pollution disappears instantly in seawater.', 'Plastic pollution only affects mountains.'],
    lesson: 'Reducing, reusing, recycling, and careful disposal help keep plastics out of the ocean.',
  },
]

const bugsPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'Classification and Anatomy',
    concept: 'insect body parts',
    correct: 'Insects have a head, thorax, abdomen, six legs, and usually antennae.',
    wrong: ['Insects have eight legs and no body sections.', 'Insects have a shell, fins, and gills.', 'Insects have roots, stems, and leaves.'],
    lesson: 'Counting legs and body sections helps separate insects from spiders and other arthropods.',
  },
  {
    chapter: 'Classification and Anatomy',
    concept: 'arachnids',
    correct: 'Arachnids, such as spiders and scorpions, usually have eight legs.',
    wrong: ['Arachnids are insects with six legs.', 'Arachnids are all flowering plants.', 'Arachnids are fish with scales.'],
    lesson: 'Spiders are arthropods, but they are not insects.',
  },
  {
    chapter: 'Classification and Anatomy',
    concept: 'exoskeletons',
    correct: 'An exoskeleton is a hard outer covering that supports and protects an arthropod.',
    wrong: ['An exoskeleton is a soft pillow inside the body.', 'An exoskeleton is a type of flower pollen.', 'An exoskeleton is the Moon phase of an insect.'],
    lesson: 'Because exoskeletons do not stretch much, many arthropods moult as they grow.',
  },
  {
    chapter: 'Life Cycles and Metamorphosis',
    concept: 'complete metamorphosis in insects',
    correct: 'Complete metamorphosis goes egg, larva, pupa, adult.',
    wrong: ['Complete metamorphosis goes adult, rock, cloud, adult.', 'Complete metamorphosis has no young stages.', 'Complete metamorphosis is the same as hibernation.'],
    lesson: 'Butterflies, moths, beetles, and flies have complete metamorphosis.',
  },
  {
    chapter: 'Life Cycles and Metamorphosis',
    concept: 'incomplete metamorphosis',
    correct: 'Incomplete metamorphosis goes egg, nymph, adult, without a pupa stage.',
    wrong: ['Incomplete metamorphosis always includes a chrysalis pupa.', 'Incomplete metamorphosis means insects never grow.', 'Incomplete metamorphosis is a type of ocean tide.'],
    lesson: 'Grasshoppers and dragonflies are examples of insects with nymph stages.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'pollination',
    correct: 'Pollination moves pollen to the part of a flower that can help make seeds.',
    wrong: ['Pollination means insects paint flowers blue.', 'Pollination is how spiders build webs.', 'Pollination means seeds turn into rocks.'],
    lesson: 'Bees, butterflies, wind, and other helpers can move pollen between flowers.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'worker bees',
    correct: 'Worker bees collect food, care for young, build wax comb, and help protect the hive.',
    wrong: ['Worker bees are the only bees that lay all the eggs.', 'Worker bees are fish that live in honey.', 'Worker bees do not help the colony.'],
    lesson: 'Bee colonies have different roles, including queen, workers, and drones.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'decomposer insects',
    correct: 'Some insects help ecosystems by breaking down dead plants, dung, or dead animals.',
    wrong: ['Decomposer insects turn sunlight into planets.', 'Decomposer insects only make rubbish last longer.', 'Decomposer insects are never part of food webs.'],
    lesson: 'Decomposers recycle nutrients so they can be used again by living things.',
  },
  {
    chapter: 'Adaptation and Conservation',
    concept: 'camouflage in insects',
    correct: 'Camouflage helps insects blend in with their surroundings.',
    wrong: ['Camouflage helps insects become louder.', 'Camouflage means insects glow brighter than the Sun.', 'Camouflage only works in outer space.'],
    lesson: 'Stick insects and leaf insects can be hard to see because their bodies match their habitats.',
  },
  {
    chapter: 'Adaptation and Conservation',
    concept: 'helping insect conservation',
    correct: 'Planting flowers, protecting habitats, and avoiding unnecessary pesticides can help insects.',
    wrong: ['Removing every wild plant helps insects most.', 'Using more pesticides everywhere is always best for insects.', 'Bug hotels and flowers can never help any insect.'],
    lesson: 'Many insects pollinate plants, feed other animals, and recycle nutrients, so healthy habitats matter.',
  },
]

export const scienceYear1 = buildGeneratedBank('Primary', 611000, 'scienceYear1', scienceYear1Seeds)
export const scienceYear2 = buildGeneratedBank('Primary', 612000, 'scienceYear2', scienceYear2Seeds)
export const scienceYear3 = buildGeneratedBank('Primary', 613000, 'scienceYear3', scienceYear3Seeds)
export const scienceYear4 = buildGeneratedBank('Primary', 614000, 'scienceYear4', scienceYear4Seeds)
export const scienceYear5 = buildGeneratedBank('Primary', 615000, 'scienceYear5', scienceYear5Seeds)
export const scienceYear6 = buildGeneratedBank('Primary', 616000, 'scienceYear6', scienceYear6Seeds)
export const dinosPrimary = buildGeneratedBank('Fun', 617000, 'dinosPrimary', dinosPrimarySeeds)
export const planetsPrimary = buildGeneratedBank('Fun', 618000, 'planetsPrimary', planetsPrimarySeeds)
export const oceanPrimary = buildGeneratedBank('Fun', 619000, 'oceanPrimary', oceanPrimarySeeds)
export const bugsPrimary = buildGeneratedBank('Fun', 620000, 'bugsPrimary', bugsPrimarySeeds)
