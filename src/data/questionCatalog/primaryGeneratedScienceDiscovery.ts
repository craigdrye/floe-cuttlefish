import { makeQuestionBank } from './base'
import type { Question, Topic } from './types'

type WrongTriple = readonly [answer: string, whyWrong: string, nudge: string]

type ConceptSeed = {
  chapter: string
  concept: string
  correct: string
  wrong: readonly [WrongTriple, WrongTriple, WrongTriple]
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
          wrong: seed.wrong.map((triple) => [triple[0], triple[1], triple[2]]) as [
            [string, string, string],
            [string, string, string],
            [string, string, string],
          ],
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
    wrong: [
      ['An object and a material always mean exactly the same thing.', 'The thing itself and the stuff it is made of are two different ideas, even when we describe the same item.', 'Try saying it both ways: "wooden spoon" names the object; "wood" names the material.'],
      ['A material is only used for living things.', 'Materials like plastic, metal, glass, and stone are used in things that were never alive.', 'Look around the room and notice that desks, windows, and pencils are all made from materials.'],
      ['An object is always made from just one material.', 'Many everyday objects, like shoes or pencils, use several materials joined together.', 'Pick up a pencil and count the different materials in it.'],
    ],
    lesson: 'A wooden spoon is the object; wood is the material. Scientists describe both the thing and what it is made from.',
  },
  {
    chapter: 'Everyday Materials',
    concept: 'waterproof materials',
    correct: 'A waterproof material stops water from passing through it.',
    wrong: [
      ['A waterproof material soaks up water quickly.', 'A material that soaks up water is absorbent, which is the opposite of waterproof.', 'Think about a sponge versus a raincoat: which one keeps you dry?'],
      ['A waterproof material must always be soft.', 'Some waterproof materials are soft, like rubber, but others are hard, like glass or metal.', 'Waterproof describes whether water gets through, not how the material feels.'],
      ['A waterproof material lets light pass through it.', 'Letting light through is transparency, not waterproofing.', 'Check whether you can pour water through it, not whether you can see through it.'],
    ],
    lesson: 'Raincoats and umbrellas use waterproof materials because they help keep water out.',
  },
  {
    chapter: 'Everyday Materials',
    concept: 'transparent materials',
    correct: 'Transparent materials let you see through them clearly.',
    wrong: [
      ['Transparent materials block all light.', 'A material that blocks all light is opaque, not transparent.', 'Hold the material up to a window: if you can see through it, it is transparent.'],
      ['Transparent materials are always magnetic.', 'Being transparent is about light passing through, not about attracting metal.', 'Test with a magnet: most clear glass and plastic are not magnetic at all.'],
      ['Transparent materials must float in water.', 'Floating depends on density, not on whether light passes through.', 'A clear marble is transparent but still sinks.'],
    ],
    lesson: 'Glass is useful for windows because it is transparent, so light and images can pass through.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'animal basic needs',
    correct: 'Animals need food, water, air, and a safe place to live.',
    wrong: [
      ['Animals only need toys and sunlight.', 'Toys are not survival needs, and many animals do well without much sunlight.', 'List what every animal must have to stay alive, not just things that might be fun.'],
      ['Animals need no water if they eat enough food.', 'Most animals get only some water from food and still need to drink.', 'Watch your pet on a hot day: even after eating, it looks for water.'],
      ['Animals can live without air.', 'Almost all animals need oxygen from air or water to survive.', 'Think about why fish swim near the surface when there is not enough oxygen.'],
    ],
    lesson: 'Different animals live in different places, but all animals have basic needs for survival.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'herbivores',
    correct: 'Herbivores are animals that eat plants.',
    wrong: [
      ['Herbivores eat only other animals.', 'Animals that mainly eat other animals are carnivores, not herbivores.', 'Use the start "herb-" as a clue: it points to plants, like herbs.'],
      ['Herbivores are animals with wings.', 'Herbivore describes what an animal eats, not how it moves.', 'A cow has no wings but is still a herbivore because it eats grass.'],
      ['Herbivores are animals that live only in water.', 'Herbivores live on land, in water, and in the air, depending on the species.', 'Sort animals by diet first, then notice where they live.'],
    ],
    lesson: 'Cows, rabbits, and many caterpillars are herbivores because plants are their food.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the five senses',
    correct: 'The five senses help us notice the world: sight, hearing, smell, taste, and touch.',
    wrong: [
      ['The five senses are only used by plants.', 'Plants respond to light and touch in their own way, but the five senses are a way of describing how animals like humans notice the world.', 'Match each sense to a body part that you have.'],
      ['The five senses are running, jumping, eating, sleeping, and reading.', 'Those are actions, not ways of noticing the world.', 'A sense gathers information; an action uses your body.'],
      ['The five senses work without body parts.', 'Each sense uses a body part, like eyes for sight or ears for hearing.', 'Cover one body part at a time and notice which sense becomes harder to use.'],
    ],
    lesson: 'Eyes help with sight, ears with hearing, nose with smell, tongue with taste, and skin with touch.',
  },
  {
    chapter: 'Plants',
    concept: 'plant parts',
    correct: 'Roots, stems, leaves, and flowers are common parts of a plant.',
    wrong: [
      ['Stems and leaves are only found on animals.', 'Stems and leaves are parts of plants, not parts of animals.', 'Look at a plant in a pot and point to a stem and a leaf.'],
      ['Only flowers are parts of plants.', 'Flowers are one part, but roots, stems, and leaves are also important plant parts.', 'A plant without roots or a stem usually cannot stay alive.'],
      ['Plants have bones instead of roots.', 'Plants do not have bones; they use roots to anchor themselves and take in water.', 'Pull a weed gently and notice the roots, which do the work bones do not.'],
    ],
    lesson: 'Each plant part has a job: roots hold the plant and take in water, while leaves catch light.',
  },
  {
    chapter: 'Plants',
    concept: 'plant basic needs',
    correct: 'Most plants need light, water, warmth, and space to grow well.',
    wrong: [
      ['Plants grow best with no light at all.', 'Most plants need light to make their food through their leaves.', 'Put one plant in a dark cupboard for a week and compare it to one in the sun.'],
      ['Plants need extra sugar and salt to grow.', 'Plants make their own food using light, water, and air; sugar and salt do not help them grow.', 'Stick to the basic needs: light, water, warmth, and space.'],
      ['Plants only need wind and rocks.', 'Wind and rocks alone cannot supply the light or water a plant needs.', 'Think about what dries up first when a plant is not watered.'],
    ],
    lesson: 'A fair plant test changes one need at a time, such as giving one plant less light.',
  },
  {
    chapter: 'Plants',
    concept: 'deciduous and evergreen trees',
    correct: 'Deciduous trees lose their leaves in a season, while evergreen trees keep leaves all year.',
    wrong: [
      ['Evergreen trees are always dead in winter.', 'Evergreens keep their green leaves through winter and are still alive.', 'Look at a pine or fir in winter: it is green because it is alive.'],
      ['Deciduous trees never change during the year.', 'Deciduous trees clearly change, especially when their leaves change colour and fall.', 'Watch an oak tree through the seasons.'],
      ['All trees lose all their leaves at the same time every week.', 'Leaf loss happens slowly across a season, not all at once every week.', 'Compare a deciduous tree in spring, summer, autumn, and winter.'],
    ],
    lesson: 'Oak trees are often deciduous; many pine trees are evergreen.',
  },
  {
    chapter: 'Seasonal Changes',
    concept: 'summer and winter day length',
    correct: 'Summer days usually have more daylight, and winter days usually have less daylight.',
    wrong: [
      ['Winter days are always the longest days.', 'Winter days are usually shorter, not longer, in places that have strong seasons.', 'Notice when it gets dark in December compared to June.'],
      ['Day length never changes during the year.', 'Day length changes through the year because of the Earth\'s tilt and orbit.', 'Compare sunrise and sunset times across the months.'],
      ['Summer has no sunlight.', 'Summer usually has plenty of sunlight; that is part of why it feels warm.', 'Step outside on a clear summer afternoon.'],
    ],
    lesson: 'Seasonal daylight patterns help explain why some outdoor activities and animal behaviors change through the year.',
  },
]

const scienceYear2Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'living, dead, and never alive',
    correct: 'Living things grow and need food or energy; dead things were once alive; rocks were never alive.',
    wrong: [
      ['A toy car is dead because it stops moving.', 'A toy car was never alive, so it cannot be dead; it just stopped moving.', 'Ask whether the thing ever grew, fed, or breathed.'],
      ['A fallen leaf was never alive.', 'A fallen leaf was once part of a living plant, so it is dead, not never alive.', 'Trace where the leaf came from before it fell.'],
      ['All things that move are living.', 'Many non-living things move, like cars, balls, and clouds.', 'Movement on its own is not enough; check growth and feeding too.'],
    ],
    lesson: 'Movement alone is not enough. A wind-up toy can move, but it does not grow or need food.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'habitats',
    correct: 'A habitat is a place where a living thing gets what it needs to survive.',
    wrong: [
      ['A habitat is only a human house.', 'Humans have homes, but every kind of living thing has its own habitat, from ponds to forests.', 'Pick an animal and describe where it actually lives.'],
      ['A habitat is any place with no living things at all.', 'A habitat is defined by being suitable for living things, not empty of them.', 'Look at where an animal finds food, water, and shelter.'],
      ['A habitat is the same as a single nest or burrow.', 'A nest is one shelter inside the larger habitat; the habitat includes the food and water too.', 'Zoom out from the shelter to the surrounding area.'],
    ],
    lesson: 'Ponds, woodlands, deserts, and oceans are habitats because they provide food, water, and shelter.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'micro-habitats',
    correct: 'A micro-habitat is a very small habitat, such as under a log or in soil.',
    wrong: [
      ['A micro-habitat is a whole planet.', 'A whole planet is far too large to be a micro-habitat; the prefix "micro" means very small.', 'Think about the smallest spaces a tiny creature might live in.'],
      ['A micro-habitat is a place where no living things can ever survive.', 'Micro-habitats are full of living things, especially small ones like woodlice and worms.', 'Look under a log or rock and notice what lives there.'],
      ['A micro-habitat is only found in outer space.', 'Micro-habitats are right under our feet, in soil, under stones, and inside fallen logs.', 'Explore a school garden carefully to find them.'],
    ],
    lesson: 'Small creatures such as woodlice may live in damp, dark micro-habitats under logs.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'simple food chains',
    correct: 'A food chain shows how energy passes from one living thing to another as food.',
    wrong: [
      ['A food chain shows the alphabet order of animals.', 'Food chains are ordered by who eats whom, not by spelling.', 'Use the arrows to follow the energy.'],
      ['A food chain always begins with a shark.', 'Most food chains begin with a producer, like a plant, not with a predator.', 'Find the living thing that gets its energy from the Sun.'],
      ['A food chain shows where animals sleep at night.', 'Where animals sleep is part of habitat, not part of a food chain.', 'Focus on what each animal eats.'],
    ],
    lesson: 'A simple chain might be leaf to caterpillar to bird. The arrows show who gets energy from whom.',
  },
  {
    chapter: 'Plants: Growth and Survival',
    concept: 'seeds and bulbs',
    correct: 'Seeds and bulbs can grow into new plants when conditions are right.',
    wrong: [
      ['Seeds are tiny animals.', 'Seeds come from plants and grow into new plants, not into animals.', 'Cut open a seed and look for the tiny plant inside.'],
      ['Bulbs are only the kind that go in electric lamps.', 'In gardening, a bulb is a swollen plant part with stored food, like an onion or daffodil bulb.', 'Compare a light bulb with an onion: they share a name but are different things.'],
      ['Seeds grow best with no water, no warmth, and no light.', 'Seeds need water and warmth to start growing, and most young plants then need light.', 'Try sprouting seeds in different conditions and compare.'],
    ],
    lesson: 'A seed has the start of a new plant inside it, while bulbs store food for a plant to regrow.',
  },
  {
    chapter: 'Plants: Growth and Survival',
    concept: 'roots absorbing water',
    correct: 'Roots help hold a plant in place and absorb water from the soil.',
    wrong: [
      ['Roots make flowers smell sweet.', 'Flower scents come from chemicals made in the flowers, not from roots.', 'Sniff a flower, then sniff a clean root.'],
      ['Roots are used by plants to fly.', 'Plants do not fly, and roots usually stay in the ground anchoring the plant.', 'Imagine pulling a plant up and feel how the roots hold on.'],
      ['Roots only appear after a plant dies.', 'Most plants grow roots while they are still alive and use them to take in water every day.', 'Carefully dig around a growing plant to see its roots.'],
    ],
    lesson: 'Roots are usually underground, but they are busy taking in water and helping anchor the plant.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'animal life cycles',
    correct: 'A life cycle shows how a living thing is born, grows, has young, and eventually dies.',
    wrong: [
      ['A life cycle is a special kind of bicycle for animals.', 'A life cycle is a pattern of stages, not a vehicle.', 'Use "cycle" to mean a repeating pattern, like the seasons.'],
      ['A life cycle means animals never change.', 'A life cycle is all about how animals change as they grow.', 'Compare a baby and an adult of the same animal.'],
      ['A life cycle only happens to plants.', 'Animals also have life cycles, from birth or hatching all the way to old age.', 'Think about a frog: egg, tadpole, froglet, adult.'],
    ],
    lesson: 'Life cycles help scientists compare how frogs, butterflies, birds, and mammals grow.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'healthy human habits',
    correct: 'Exercise, healthy food, sleep, and hygiene help human bodies stay well.',
    wrong: [
      ['Only sweets and screen time keep bodies healthy.', 'Sweets in large amounts and too much screen time are not what keep bodies well.', 'List habits that help the body, not just things that feel fun.'],
      ['Washing hands has nothing to do with health.', 'Washing hands reduces the germs that cause illness.', 'Notice when adults remind you to wash hands and ask why.'],
      ['Exercise means the body needs no sleep.', 'Exercise actually makes good sleep more important, not less.', 'Notice how tired you feel after a busy active day.'],
    ],
    lesson: 'Good habits work together: food gives energy, exercise strengthens the body, and hygiene reduces germs.',
  },
  {
    chapter: 'Uses of Everyday Materials',
    concept: 'choosing suitable materials',
    correct: 'A suitable material has properties that fit the job it needs to do.',
    wrong: [
      ['The best material is always the shiniest one.', 'Shine alone does not decide whether a material is fit for a job.', 'Ask what the material has to do, not just how it looks.'],
      ['The best material is always the heaviest one.', 'Many jobs need light materials, like clothes or kites.', 'Match the weight to the job.'],
      ['Any material works equally well for every job.', 'Different jobs need different properties, like flexibility, transparency, or waterproofness.', 'Try using a paper umbrella in rain and see what happens.'],
    ],
    lesson: 'Glass suits windows because it is transparent; rubber suits some boots because it is flexible and waterproof.',
  },
  {
    chapter: 'Uses of Everyday Materials',
    concept: 'recycling materials',
    correct: 'Recycling means using materials again instead of throwing everything away.',
    wrong: [
      ['Recycling means hiding rubbish under soil.', 'Burying rubbish is landfill, not recycling, and the materials are not reused.', 'Trace what happens to a recycled bottle versus a buried one.'],
      ['Recycling can only happen to food scraps.', 'Food scraps can be composted, but recycling also works with paper, glass, metal, and many plastics.', 'Sort items at home by which bin they belong in.'],
      ['Recycling means making more waste on purpose.', 'Recycling is about reducing waste, not making more of it.', 'Compare a recycled item with one thrown away.'],
    ],
    lesson: 'Recycling can reduce waste and save useful materials such as paper, metal, glass, and some plastics.',
  },
]

const scienceYear3Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'sedimentary rocks',
    correct: 'Sedimentary rocks often form from layers of sand, mud, or tiny pieces pressed together.',
    wrong: [
      ['Sedimentary rocks form only from fresh tree leaves.', 'Sediment is mostly broken pieces of older rock and the remains of many living things, not just fresh leaves.', 'List the kinds of sediment: sand, silt, mud, shell pieces.'],
      ['Sedimentary rocks are made when one rock melts and cools again.', 'Melting and cooling form igneous rocks, not sedimentary ones.', 'Match the process to the rock type.'],
      ['Sedimentary rocks are always as soft as jelly.', 'Many sedimentary rocks, like sandstone and limestone, are hard enough to build with.', 'Compare a piece of sandstone with jelly.'],
    ],
    lesson: 'Layers are an important clue. Fossils are often found in sedimentary rocks.',
  },
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'fossil formation',
    correct: 'Fossils can form when remains are buried, protected, and slowly replaced or filled by minerals.',
    wrong: [
      ['Fossils form when an animal is painted with gold.', 'Fossil formation is a slow natural process involving burial and minerals, not painting.', 'Think of fossils forming over thousands of years.'],
      ['Fossils form only when scientists freeze living animals today.', 'Most fossils are very old and formed long before refrigeration; freezing is just one rare way.', 'Look at fossils in a museum and notice how old they are.'],
      ['Fossils form when rocks turn back into living animals.', 'Fossils are records of past life, not living animals themselves.', 'A fossil is a clue, not a creature.'],
    ],
    lesson: 'Fossil formation takes a long time and usually needs burial in sediment.',
  },
  {
    chapter: 'Rocks, Soils and Fossils',
    concept: 'soil formation',
    correct: 'Soil forms from broken-down rock mixed with decayed material from living things.',
    wrong: [
      ['Soil is made only from plastic bags.', 'Plastic is not what soil is made from; soil is mostly broken rock and decayed plants and animals.', 'Look closely at soil with a hand lens.'],
      ['Soil appears instantly whenever it rains.', 'Soil forms slowly over many years through weathering and decay, not instantly.', 'Watch the same patch of ground over a long time.'],
      ['Soil is just pure water with nothing else in it.', 'Soil contains minerals, decayed material, air, water, and living things all mixed together.', 'Squeeze a handful of damp soil and notice the bits.'],
    ],
    lesson: 'Weathering breaks rocks into smaller pieces, and dead plants or animals add organic matter.',
  },
  {
    chapter: 'Light and Shadows',
    concept: 'light sources',
    correct: 'A light source gives out its own light, such as the Sun, a lamp, or a candle.',
    wrong: [
      ['The Moon is a light source because it makes its own light.', 'The Moon reflects sunlight; it does not make its own light.', 'Watch the Moon shine only when the Sun could light it.'],
      ['A mirror is a light source because it reflects faces.', 'A mirror reflects light from another source; it does not produce light by itself.', 'Turn off all the lights and see what a mirror does.'],
      ['Every shiny object makes its own light.', 'Shiny objects often just reflect light from nearby sources.', 'Check a shiny spoon in a dark cupboard.'],
    ],
    lesson: 'Reflectors bounce light from another source; they do not make light by themselves.',
  },
  {
    chapter: 'Light and Shadows',
    concept: 'shadow formation',
    correct: 'A shadow forms when an opaque object blocks light.',
    wrong: [
      ['A shadow forms when an object makes more light.', 'Shadows form where light is blocked, not where it is made.', 'Watch what happens when an object steps in front of a torch.'],
      ['A shadow forms only inside water.', 'Shadows form in air and on the ground too, wherever light is blocked.', 'Try making shadows on a wall.'],
      ['Transparent glass always makes the darkest shadow.', 'Transparent objects let most light through, so their shadow is faint, not dark.', 'Compare a glass and a book held in front of a lamp.'],
    ],
    lesson: 'Opaque means light cannot pass through easily, so a dark shape appears behind the object.',
  },
  {
    chapter: 'Forces and Magnets',
    concept: 'friction',
    correct: 'Friction is a force that can slow movement when surfaces rub together.',
    wrong: [
      ['Friction is another name for magnetism.', 'Magnetism pulls or pushes magnetic materials; friction acts between any two surfaces that rub.', 'Try rubbing your hands together: that is friction, not magnetism.'],
      ['Friction makes every object float upward.', 'Friction does not lift objects; it acts along the surfaces in contact.', 'Push a book on a table and feel the resistance.'],
      ['Friction only happens between two leaves on a plant.', 'Friction happens any time surfaces rub, including shoes on a floor or hands on a rope.', 'Slide a chair across the carpet and feel the friction.'],
    ],
    lesson: 'Rougher surfaces usually create more friction than smoother surfaces.',
  },
  {
    chapter: 'Forces and Magnets',
    concept: 'magnetic materials',
    correct: 'Magnets attract some materials, especially iron and steel, but not all metals.',
    wrong: [
      ['Magnets attract all plastic objects.', 'Plastics are not magnetic; magnets attract certain metals like iron and steel.', 'Test plastic objects with a magnet.'],
      ['Magnets attract every metal equally.', 'Aluminium and copper, for example, are metals that magnets do not attract strongly.', 'Try a magnet on a copper coin versus a steel paperclip.'],
      ['Magnets only attract paper.', 'Paper is not magnetic; the magnet usually pulls a paperclip that holds the paper.', 'Try a magnet on a single sheet of paper with no clip.'],
    ],
    lesson: 'Testing materials is useful because aluminium foil and copper coins are not attracted like iron or steel.',
  },
  {
    chapter: 'Plants: Functions and Life Cycle',
    concept: 'seed dispersal',
    correct: 'Seed dispersal moves seeds away from the parent plant by wind, water, animals, or bursting pods.',
    wrong: [
      ['Seed dispersal means seeds stay glued to the parent plant forever.', 'Dispersal is exactly the opposite: it spreads seeds away from the parent.', 'Watch dandelion seeds blow in the wind.'],
      ['Seed dispersal is how leaves make shadows.', 'Shadows come from blocked light, not from seed movement.', 'Match the word "dispersal" to spreading out, not to shade.'],
      ['Seed dispersal only happens when people throw seeds.', 'Plants have many ways to spread seeds without people, including wind, water, and animals.', 'Notice a burr stuck to your sock after a walk.'],
    ],
    lesson: 'Spreading seeds helps new plants find space, light, water, and nutrients.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the human skeleton',
    correct: 'The skeleton supports the body, helps movement, and protects organs.',
    wrong: [
      ['The skeleton digests food in the stomach.', 'Digestion is the job of the digestive system, not the skeleton.', 'Sort each job to the right body system.'],
      ['The skeleton pumps blood around the body.', 'Pumping blood is the job of the heart, not bones.', 'Place a hand on your chest and feel the heart, not bones, pumping.'],
      ['The skeleton is only used for hearing sounds.', 'Hearing involves the ears; bones in the ear help, but the whole skeleton has many jobs.', 'List several jobs the skeleton does besides one.'],
    ],
    lesson: 'The skull protects the brain, ribs protect the lungs and heart, and bones work with muscles for movement.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'balanced diets',
    correct: 'A balanced diet gives the body different nutrients in sensible amounts.',
    wrong: [
      ['A balanced diet means eating only one food every day.', 'Eating only one food misses many of the nutrients the body needs.', 'List foods from several food groups.'],
      ['A balanced diet means avoiding water completely.', 'Water is essential for the body; a balanced diet includes drinking enough water.', 'Notice how thirsty you feel after exercise.'],
      ['A balanced diet is only meant for plants, not humans.', 'Plants do not eat food; humans and other animals need balanced diets.', 'Use the word "diet" to mean what an animal eats.'],
    ],
    lesson: 'Carbohydrates, proteins, fats, vitamins, minerals, fibre, and water all help the body in different ways.',
  },
]

const scienceYear4Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'classification keys',
    correct: 'A classification key uses yes-or-no questions to help identify living things.',
    wrong: [
      ['A classification key is a metal key that unlocks animal cages.', 'A classification key is a chart of questions, not a metal key.', 'Use the word "key" to mean a guide, like a map key.'],
      ['A classification key is a list of random guesses.', 'A key uses careful observation, not guessing.', 'Each question in a key narrows the choices.'],
      ['A classification key only works for rocks.', 'Keys can be made for animals, plants, leaves, and many other things.', 'Try a key for trees at school.'],
    ],
    lesson: 'Good keys use observable features, such as wings, legs, leaves, or body covering.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'environmental change',
    correct: 'Environmental change can help or harm living things by changing food, water, shelter, or safety.',
    wrong: [
      ['Environmental change never affects animals or plants.', 'Changes in food, water, or shelter clearly do affect living things.', 'Think about what happens to fish if a pond dries up.'],
      ['Environmental change only means changing seats in the classroom.', 'Environmental change in science refers to changes in habitats, not classroom moves.', 'Match the word "environment" to nature, not furniture.'],
      ['Environmental change always helps every species equally.', 'Some species benefit while others are harmed by the same change.', 'Consider how clearing a forest helps some animals but harms others.'],
    ],
    lesson: 'Pollution, deforestation, new ponds, and protected spaces can all change habitats.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the digestive system',
    correct: 'The digestive system breaks food down so the body can use nutrients.',
    wrong: [
      ['The digestive system stores all human memories.', 'Memories are stored by the brain, not the digestive system.', 'Match each job to the right body system.'],
      ['The digestive system pumps electricity through wires.', 'The body is not powered by electric wires; the digestive system handles food.', 'Trace the path of a piece of food, not a current.'],
      ['The digestive system mainly controls breathing.', 'Breathing is controlled by the respiratory system, not the digestive system.', 'Separate where food goes from where air goes.'],
    ],
    lesson: 'Food travels from the mouth through the oesophagus to the stomach and intestines.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'types of teeth',
    correct: 'Incisors cut, canines tear, and molars grind food.',
    wrong: [
      ['Molars are only for smelling food.', 'Smelling is done with the nose; molars grind food into smaller pieces.', 'Touch your molars with your tongue: they feel flat, not nose-shaped.'],
      ['Incisors are used to hear sound.', 'Hearing is done with the ears; incisors at the front cut food.', 'Bite into an apple with your front teeth.'],
      ['Canines are flat teeth for grinding only.', 'Canines are pointed, used for tearing, not grinding.', 'Feel the shape of canine teeth with your tongue.'],
    ],
    lesson: 'Different tooth shapes are clues to the job each tooth does.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'producers in food chains',
    correct: 'A producer makes its own food, so green plants often start food chains.',
    wrong: [
      ['A producer is always the top predator in the chain.', 'The top predator is usually a consumer, not a producer.', 'Producers come first in the chain.'],
      ['A producer is an animal that only eats meat.', 'A meat-eating animal is a carnivore consumer, not a producer.', 'Use "producer" to mean an organism that makes its own food.'],
      ['A producer is a rock that gives off energy.', 'Rocks do not make food; living plants and other producers do.', 'Check whether the organism is living and makes its own food.'],
    ],
    lesson: 'Plants use light to make food, then animals get energy by eating plants or other animals.',
  },
  {
    chapter: 'States of Matter',
    concept: 'solids, liquids, and gases',
    correct: 'Solids keep their shape, liquids flow and take the container shape, and gases spread out.',
    wrong: [
      ['All materials are solids all the time, even water and steam.', 'Water can be a solid, liquid, or gas depending on temperature.', 'Compare ice, water, and steam.'],
      ['Gases stay in a fixed block shape just like solids.', 'Gases spread out to fill their container; only solids keep a fixed shape.', 'Open a perfume bottle and notice the smell spreading.'],
      ['Liquids cannot be poured at all.', 'Pouring is one of the main ways we know something is a liquid.', 'Pour water from a jug into a cup.'],
    ],
    lesson: 'Changing temperature can cause some materials to change state.',
  },
  {
    chapter: 'States of Matter',
    concept: 'evaporation and condensation',
    correct: 'Evaporation changes liquid water to water vapour, and condensation changes vapour back to liquid.',
    wrong: [
      ['Evaporation turns water into solid stone.', 'Evaporation produces water vapour, a gas, not stone.', 'Watch a puddle dry on a sunny day.'],
      ['Condensation means ice catches fire.', 'Condensation is water vapour cooling into liquid drops, not burning.', 'Look at the drops on a cold glass.'],
      ['Evaporation and condensation are the same thing.', 'They are opposite processes: one is liquid to gas, the other is gas to liquid.', 'Pair each word with the direction of the change.'],
    ],
    lesson: 'These changes are important parts of the water cycle.',
  },
  {
    chapter: 'Sound',
    concept: 'sound vibrations',
    correct: 'Sounds are made when objects vibrate and those vibrations travel to the ear.',
    wrong: [
      ['Sound is made only when light bends through a prism.', 'Light bending is about light, not sound; sound needs vibrations.', 'Pluck a guitar string and feel it vibrate.'],
      ['Sound can travel even with no material to vibrate.', 'Sound needs particles to travel through, such as air or water.', 'Try ringing a bell in a sealed jar with air pumped out.'],
      ['Sound is the same thing as smell.', 'Smell is detected by the nose; sound is detected by the ears as vibration.', 'Match each sense to its kind of input.'],
    ],
    lesson: 'A plucked string, a drum skin, and vocal cords all make sound by vibrating.',
  },
  {
    chapter: 'Sound',
    concept: 'pitch and volume',
    correct: 'Pitch describes how high or low a sound is, while volume describes how loud or quiet it is.',
    wrong: [
      ['Pitch and volume mean exactly the same thing.', 'Pitch and volume describe different features of a sound.', 'Listen to a quiet high note and a loud low note.'],
      ['Pitch tells you how heavy a sound is.', 'Sounds do not have weight; pitch is about how high or low they are.', 'Match pitch to high or low, not heavy.'],
      ['Volume tells you what colour a sound is.', 'Sounds do not have colour; volume is how loud or quiet they are.', 'Match volume to loud or quiet.'],
    ],
    lesson: 'Shorter or tighter strings often make a higher pitch; stronger vibrations often make a louder volume.',
  },
  {
    chapter: 'Electricity',
    concept: 'complete circuits',
    correct: 'A bulb lights only when it is part of a complete circuit loop with a power source.',
    wrong: [
      ['A bulb lights when one wire touches nothing.', 'A loose wire breaks the loop, so current cannot flow.', 'Trace the loop from one end of the battery to the other.'],
      ['A bulb lights just by being placed near a battery.', 'There must be a complete connection, not just being close.', 'Check that wires actually link bulb to battery.'],
      ['A bulb lights better when the loop is broken on purpose.', 'A broken loop stops the current; the bulb will go out.', 'Open the switch and watch the bulb go off.'],
    ],
    lesson: 'A switch works by opening or closing the circuit loop.',
  },
]

const scienceYear5Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'mammal life cycles',
    correct: 'Most mammals grow inside the mother before birth, then are fed and cared for as young.',
    wrong: [
      ['Most mammals hatch from jelly eggs laid in ponds.', 'Jelly-like pond eggs are typical of amphibians like frogs, not mammals.', 'Match birth methods to the right animal group.'],
      ['Most mammals begin life as caterpillars.', 'Caterpillars are larval stages of certain insects, not mammals.', 'Look at how kittens or puppies are born.'],
      ['Most mammals split in half to make new mammals.', 'Splitting in half is asexual reproduction seen in some simple organisms, not in mammals.', 'Think about how baby mammals usually have two parents.'],
    ],
    lesson: 'Life cycles differ between mammals, amphibians, insects, and birds.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'complete metamorphosis',
    correct: 'Complete metamorphosis has egg, larva, pupa, and adult stages.',
    wrong: [
      ['Complete metamorphosis has only adult stages and skips everything else.', 'Skipping early stages would mean no real metamorphosis at all.', 'List the four stages in order.'],
      ['Complete metamorphosis is when a plant grows roots.', 'Plants grow but do not go through metamorphosis like insects do.', 'Use the word for animals with several life stages.'],
      ['Complete metamorphosis is the same as the Moon changing shape.', 'Moon phases are not biological; metamorphosis is a change in a living thing.', 'Separate space science from life cycles.'],
    ],
    lesson: 'Butterflies and beetles are familiar examples of insects with complete metamorphosis.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'plant reproduction by runners and bulbs',
    correct: 'Some plants can reproduce asexually using runners, bulbs, or similar structures.',
    wrong: [
      ['Runners in plants are always footprints left by animals.', 'In botany, a runner is a stem that grows along the ground and makes new plants, not a footprint.', 'Watch a strawberry plant send out a runner.'],
      ['Bulbs can never grow into new plants.', 'Bulbs like daffodils and onions store food and grow into new plants.', 'Plant a bulb in soil and watch.'],
      ['All plant reproduction requires exactly two parent plants.', 'Asexual reproduction needs only one parent plant.', 'Compare a plant grown from a cutting with one grown from seed.'],
    ],
    lesson: 'Asexual reproduction uses one parent plant and can make new plants without pollination.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'human development stages',
    correct: 'Humans develop through stages such as infancy, childhood, adolescence, adulthood, and old age.',
    wrong: [
      ['Humans skip childhood and become adults overnight.', 'Childhood and adolescence both take many years.', 'Compare how you have changed since being a baby.'],
      ['Humans never change at all after birth.', 'Humans grow taller, develop new abilities, and change in many ways through life.', 'Look at family photos at different ages.'],
      ['Old age usually happens before infancy.', 'Old age comes after adulthood, near the end of a human life cycle.', 'Put the stages in order on a timeline.'],
    ],
    lesson: 'A life timeline helps place body changes in a sensible order.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'solubility',
    correct: 'A soluble substance dissolves in a liquid to form a solution.',
    wrong: [
      ['A soluble substance cannot mix with any liquid at all.', 'A soluble substance is defined by being able to mix with a liquid.', 'Put salt in water and stir.'],
      ['Solubility means a material is always magnetic.', 'Solubility is about dissolving in liquid, not being attracted to magnets.', 'Test a sugar cube with a magnet, then with water.'],
      ['Solubility means a material is always transparent.', 'Some solutions are transparent, but the test for solubility is whether the substance dissolves, not its colour.', 'Stir cocoa powder into milk: it dissolves but is not clear.'],
    ],
    lesson: 'Salt and sugar can dissolve in water; sand does not dissolve in the same way.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'separating mixtures',
    correct: 'Sieving, filtering, and evaporating can separate different kinds of mixtures.',
    wrong: [
      ['Every mixture must be separated with a magnet.', 'A magnet only works for magnetic materials; other separations need sieves or filters.', 'Pick the method based on the mixture.'],
      ['Filtering is used to separate one planet from another.', 'Filtering separates a solid from a liquid, not planets.', 'Use filtering for tea leaves and water, not space.'],
      ['Evaporating is only used to cut paper into pieces.', 'Evaporating removes a liquid by changing it into a gas; it does not cut paper.', 'Try evaporating salty water and see what is left.'],
    ],
    lesson: 'Choose the method based on particle size, solubility, and state of matter.',
  },
  {
    chapter: 'Properties and Changes of Materials',
    concept: 'reversible and irreversible changes',
    correct: 'Melting and freezing are usually reversible, but burning usually makes new materials and is not easily reversed.',
    wrong: [
      ['Burning paper is easy to turn back into the same sheet of paper.', 'Burning creates ash and gases, and the original paper cannot be remade from them.', 'Compare a burnt edge with the unburnt sheet.'],
      ['Freezing water always makes a brand new chemical material.', 'Freezing changes water into ice, which is still water in solid form, not a new chemical.', 'Melt the ice and notice you get water back.'],
      ['All changes can be reversed by waiting one minute.', 'Many changes, especially burning and cooking, cannot be reversed at all.', 'Try to un-cook a boiled egg.'],
    ],
    lesson: 'A reversible change can be undone to get the material back; an irreversible change often forms something new.',
  },
  {
    chapter: 'Earth and Space',
    concept: 'Earth rotation and day and night',
    correct: 'Day and night happen because Earth rotates, turning different places toward or away from the Sun.',
    wrong: [
      ['Day and night happen because the Sun turns off at night.', 'The Sun keeps shining; Earth turns away from it for night.', 'Use a globe and a torch to model day and night.'],
      ['Day and night happen because Earth changes size each day.', 'Earth stays the same size; it just rotates on its axis.', 'A spinning globe shows the day/night cycle.'],
      ['Day and night happen because clouds push the Sun around Earth.', 'Clouds cannot move the Sun; the Sun is far away and Earth itself spins.', 'Notice that day and night happen even on clear days.'],
    ],
    lesson: 'One full rotation of Earth takes about one day.',
  },
  {
    chapter: 'Earth and Space',
    concept: 'planet orbits',
    correct: 'Planets orbit the Sun, and one Earth orbit takes about one year.',
    wrong: [
      ['The Sun orbits around every planet once each day.', 'The Sun is at the centre of the solar system; planets orbit it, not the other way round.', 'Model orbits with a torch as the Sun.'],
      ['Planets travel in straight lines away from the Sun forever.', 'Planets travel in curved paths around the Sun because of gravity.', 'Trace an oval path on paper.'],
      ['Earth does not move at all in space.', 'Earth is constantly moving as it rotates and orbits the Sun.', 'Compare day, year, and Earth\'s motion.'],
    ],
    lesson: 'Orbit means a path around another body due to gravity.',
  },
  {
    chapter: 'Forces',
    concept: 'air resistance and water resistance',
    correct: 'Air resistance and water resistance are forces that oppose motion through air or water.',
    wrong: [
      ['Air resistance pulls objects toward magnets.', 'Magnetic forces pull magnetic materials; air resistance pushes back against moving objects.', 'Compare a magnet test with a feather drop.'],
      ['Water resistance only happens in deserts.', 'Deserts have very little water; water resistance happens in oceans, rivers, and pools.', 'Swim through water and feel the push back.'],
      ['Air resistance always makes objects move faster.', 'Air resistance slows objects down by pushing against their motion.', 'Drop a flat sheet and a crumpled ball.'],
    ],
    lesson: 'Parachutes use air resistance to slow falling; streamlined shapes reduce resistance.',
  },
]

const scienceYear6Seeds: readonly ConceptSeed[] = [
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'classifying living things',
    correct: 'Living things can be classified by shared observable characteristics and similarities.',
    wrong: [
      ['Living things are classified only by favourite colour.', 'Scientific classification uses features like body parts, not colour preferences.', 'List features that biologists actually compare.'],
      ['Classification means putting all organisms into one large group.', 'Classification splits organisms into groups based on differences, not into one group.', 'Look at how plants, animals, and fungi are separated.'],
      ['Only large animals can be classified, not small ones.', 'All living things, including bacteria and tiny plants, can be classified.', 'Microscopes reveal many small organisms.'],
    ],
    lesson: 'Classification helps scientists organise plants, animals, fungi, and micro-organisms.',
  },
  {
    chapter: 'Living Things and Their Habitats',
    concept: 'micro-organisms',
    correct: 'Micro-organisms are tiny living things, such as bacteria, some fungi, and some protists.',
    wrong: [
      ['Micro-organisms are very large mammals like elephants.', 'The word "micro" means very small, the opposite of large mammals.', 'Check whether a microscope is needed to see them.'],
      ['Micro-organisms can all be seen clearly without any magnification.', 'Most micro-organisms are too small for the eye and need a microscope.', 'Use a microscope to find them in pond water.'],
      ['Micro-organisms are non-living particles of dust.', 'Micro-organisms are alive: they feed, grow, and reproduce.', 'Compare dust with bacteria seen under a microscope.'],
    ],
    lesson: 'Some micro-organisms cause disease, but many are useful in soil, food, and ecosystems.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'the circulatory system',
    correct: 'The circulatory system moves blood around the body using the heart and blood vessels.',
    wrong: [
      ['The circulatory system breaks rocks down into soil.', 'Soil forms through weathering of rock, not by anything inside the body.', 'Match the system to the body, not the ground.'],
      ['The circulatory system carries electricity to light bulbs.', 'Electricity for bulbs comes from circuits, not from the human body.', 'Sort body systems from electrical systems.'],
      ['The circulatory system is only used for chewing food.', 'Chewing is done by the mouth; the circulatory system moves blood.', 'Match each job to the right body part.'],
    ],
    lesson: 'Blood carries oxygen, nutrients, and waste products around the body.',
  },
  {
    chapter: 'Animals Including Humans',
    concept: 'heart function',
    correct: 'The heart is a muscle that pumps blood through blood vessels.',
    wrong: [
      ['The heart stores all human memories.', 'Memories are stored by the brain, not the heart.', 'Match each job to the right organ.'],
      ['The heart digests food and turns it into sugar.', 'Digestion happens in the stomach and intestines, not the heart.', 'Trace the food path versus the blood path.'],
      ['The heart makes bones grow longer.', 'Bones grow through special cells in the bone itself, not because of the heart.', 'Separate the skeletal and circulatory systems.'],
    ],
    lesson: 'Exercise can make the heart beat faster because working muscles need more oxygen.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'inherited variation',
    correct: 'Offspring are the same kind as their parents but usually have small differences.',
    wrong: [
      ['Offspring are always exact identical copies of both parents.', 'Mixing of inherited features from two parents means offspring usually differ from both.', 'Compare siblings: they look related but not identical.'],
      ['Offspring never inherit any features from their parents.', 'Many features, like eye colour, clearly pass from parents to offspring.', 'Notice family resemblances in photos.'],
      ['A skill someone learns during life is always passed to their children.', 'Learned skills are not inherited; only features carried in genes are passed on.', 'Separate inherited traits from learned ones.'],
    ],
    lesson: 'Inherited traits come from parents, while acquired skills are learned during life.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'adaptation and natural selection',
    correct: 'Helpful adaptations can make survival and reproduction more likely in a particular environment.',
    wrong: [
      ['Adaptations appear instantly because an animal wants them.', 'Adaptations develop across many generations through natural selection, not by wishing.', 'Look at how slowly populations change in fossil records.'],
      ['Natural selection means the strongest animal always wins every race.', 'Natural selection favours whatever traits help survival and reproduction in an environment, not just strength.', 'Think of small camouflaged animals that survive by hiding.'],
      ['Adaptations never affect survival at all.', 'Adaptations like sharp claws, warm fur, or thick stems clearly help survival.', 'Pick an animal and list its adaptations.'],
    ],
    lesson: 'Over many generations, helpful inherited features can become more common.',
  },
  {
    chapter: 'Evolution and Inheritance',
    concept: 'fossils as evidence',
    correct: 'Fossils give evidence about living things that existed long ago.',
    wrong: [
      ['Fossils show exactly what every future animal will look like.', 'Fossils tell us about the past, not the future.', 'Use fossils to look backwards in time.'],
      ['Fossils are made from modern factory-made objects.', 'Fossils form from real ancient living things, not modern manufactured items.', 'Compare a real fossil to a modern plastic copy.'],
      ['Fossils prove that living things never change over time.', 'Fossils actually show major changes in life over millions of years.', 'Compare ancient fossils with modern animals.'],
    ],
    lesson: 'Fossils help scientists compare ancient organisms with modern ones.',
  },
  {
    chapter: 'Light',
    concept: 'light travelling in straight lines',
    correct: 'Light travels in straight lines until it is reflected, absorbed, or refracted.',
    wrong: [
      ['Light always travels in curly loops through air.', 'Light travels in straight lines in a uniform material like clear air.', 'Look at a laser pointer beam in dust.'],
      ['Light can only travel through metal wires.', 'Light travels through air, glass, water, and space; metal wires often block it.', 'Hold a torch up and notice the beam in air.'],
      ['Light stops existing the moment it leaves the source.', 'Light continues to travel until it is reflected, absorbed, or refracted.', 'Watch sunlight cross a whole room.'],
    ],
    lesson: 'Straight-line travel helps explain shadows and how we see objects.',
  },
  {
    chapter: 'Light',
    concept: 'seeing reflected light',
    correct: 'We see many objects because light reflects from them into our eyes.',
    wrong: [
      ['We see objects because our eyes shine powerful beams onto them.', 'Eyes detect light; they do not shine light out like torches.', 'Try seeing in a perfectly dark room without any light.'],
      ['Objects are visible even with no light at all.', 'Without any light, our eyes cannot see objects.', 'Notice that a dark room hides everything until a light comes on.'],
      ['Only objects that make their own light can ever be seen.', 'Most objects we see are seen by reflected light, not because they glow.', 'Look at a book under a lamp: the book is not glowing.'],
    ],
    lesson: 'A book does not make its own light, but you can see it when light bounces from the book to your eyes.',
  },
  {
    chapter: 'Electricity',
    concept: 'cell voltage and component output',
    correct: 'Adding suitable cells can make a bulb brighter or a buzzer louder in a working circuit.',
    wrong: [
      ['More cells will make a broken circuit work even with no complete loop.', 'No number of cells will light a bulb without a complete loop.', 'Check that the circuit loop is unbroken.'],
      ['Adding more cells always makes the bulb darker.', 'More cells normally make a bulb brighter, up to its limit.', 'Test with one cell, then two, then three.'],
      ['Voltage only changes the colour of the wires, not the bulb.', 'Voltage drives the current and changes how bright the bulb is, not the wire colour.', 'Watch the bulb, not the wire, change as you add cells.'],
    ],
    lesson: 'Components still need a complete circuit, and too much voltage can damage them.',
  },
]

const dinosPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'The Mesozoic Era',
    concept: 'the three dinosaur periods',
    correct: 'The main dinosaur periods were Triassic, Jurassic, and Cretaceous.',
    wrong: [
      ['Cambrian, Jurassic, and Ice Age.', 'Cambrian came long before the dinosaurs, and the Ice Age came long after, so only Jurassic fits.', 'Group the three dinosaur periods inside the Mesozoic Era.'],
      ['Dinosaurs lived only during the Ice Age, not before it.', 'The Ice Age came millions of years after the dinosaurs died out.', 'Place dinosaur periods on a timeline before the Ice Age.'],
      ['The three periods were Ocean, Desert, and Mountain.', 'Those are kinds of habitats, not geological periods.', 'Periods are time spans, not landscapes.'],
    ],
    lesson: 'The Mesozoic Era is often divided into Triassic, Jurassic, and Cretaceous time.',
  },
  {
    chapter: 'The Mesozoic Era',
    concept: 'Pangaea breaking apart',
    correct: 'Pangaea was a supercontinent that slowly broke apart as plates moved.',
    wrong: [
      ['Pangaea was a single huge ocean with no land at all.', 'Pangaea was the opposite: one massive landmass, not an ocean.', 'Use the word "supercontinent" as a clue.'],
      ['Pangaea broke apart in just one afternoon.', 'Pangaea split very slowly over many millions of years.', 'Plate movement is measured in centimetres per year.'],
      ['Pangaea was the name of a single dinosaur species.', 'Pangaea was a landmass, not a kind of dinosaur.', 'Look for the word "continent" inside "Pangaea" stories.'],
    ],
    lesson: 'Continental drift helps explain why similar fossils can be found on different continents.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'bipedal dinosaurs',
    correct: 'Bipedal dinosaurs walked mainly on two legs.',
    wrong: [
      ['Bipedal dinosaurs swam using eight fins instead of legs.', '"Bipedal" means two-legged walking, not swimming with fins.', 'Use the root "bi-" to mean two.'],
      ['Bipedal dinosaurs had no legs at all and slid along the ground.', 'Bipedal means walking on two legs, so they had legs.', 'Picture Tyrannosaurus rex standing on its hind legs.'],
      ['Bipedal dinosaurs always walked on six legs at once.', 'Six legs would not be bipedal; "bi-" means two.', 'Count: two means bipedal, four means quadrupedal.'],
    ],
    lesson: 'Many theropods, including Tyrannosaurus rex, were bipedal.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'Stegosaurus plates',
    correct: 'Stegosaurus plates may have helped with display, species recognition, or body temperature.',
    wrong: [
      ['Stegosaurus plates were a kind of flat dinner dish for sharing food.', 'The bony plates were part of the body, not removable dishes.', 'Look at fossil skeletons to see plates as bones.'],
      ['Stegosaurus plates were used to dig burrows underground.', 'The plates rose from the back, not a shape for digging.', 'Find another body part that would dig, like claws.'],
      ['Stegosaurus plates were only used for chewing leaves.', 'Chewing happens in the mouth; the plates were on the back.', 'Match plates to back, teeth to chewing.'],
    ],
    lesson: 'Scientists infer function by comparing fossils, living animals, and body structures.',
  },
  {
    chapter: 'Anatomy and Adaptation',
    concept: 'feathered dinosaurs',
    correct: 'Some dinosaurs had feathers, and birds are living relatives of theropod dinosaurs.',
    wrong: [
      ['No dinosaur ever had feathers, only smooth scales.', 'Fossil evidence clearly shows feathers on some dinosaurs.', 'Look at feathered fossils from China.'],
      ['Feathers prove that dinosaurs were actually a type of plant.', 'Feathers are made by animals, not plants.', 'Sort feathers as an animal feature.'],
      ['Birds are completely unrelated to any ancient reptile.', 'Birds are descended from theropod dinosaurs, a kind of ancient reptile.', 'Compare a bird skeleton with a small theropod.'],
    ],
    lesson: 'Fossils with feather impressions help show the link between some dinosaurs and birds.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'body fossils',
    correct: 'Body fossils are preserved parts of an organism, such as bones, teeth, or shells.',
    wrong: [
      ['Body fossils are dinosaur stories written in modern books.', 'Body fossils are physical remains, not stories.', 'Use the word "body" as a clue.'],
      ['Body fossils are only footprints in mud.', 'Footprints are trace fossils; body fossils are actual body parts.', 'Sort footprints into traces and bones into body fossils.'],
      ['Body fossils are always fresh skin from animals living today.', 'Body fossils are usually very old and from extinct species.', 'Compare modern skin to a fossilised bone.'],
    ],
    lesson: 'Body fossils differ from trace fossils because they come from the body itself.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'trace fossils',
    correct: 'Trace fossils preserve evidence of activity, such as footprints, burrows, or droppings.',
    wrong: [
      ['Trace fossils are only maps that show where to find buried treasure.', 'Trace fossils are records of behaviour, not treasure maps.', 'Match "trace" to "what was left behind by movement".'],
      ['Trace fossils are never made by any living thing.', 'Living things create trace fossils through their actions.', 'A footprint requires a living foot.'],
      ['Trace fossils are the same as plastic models of dinosaurs.', 'Trace fossils are real ancient evidence, not modern models.', 'Compare a real fossil track with a toy.'],
    ],
    lesson: 'Trackways can show how an animal moved and whether it travelled alone or in a group.',
  },
  {
    chapter: 'Fossils and The Fossil Record',
    concept: 'Mary Anning',
    correct: 'Mary Anning was an important fossil hunter who found major fossils on the Jurassic Coast.',
    wrong: [
      ['Mary Anning was the first person to land on Mars.', 'Mary Anning lived in the 1800s, long before any space travel.', 'Match her to fossils on the English coast.'],
      ['Mary Anning invented the first electric circuit.', 'Mary Anning was a fossil hunter, not an electrical inventor.', 'Match her to palaeontology, not electricity.'],
      ['Mary Anning was a kind of large dinosaur.', 'Mary Anning was a person who studied fossils, not a dinosaur.', 'Search for her photograph or portrait.'],
    ],
    lesson: 'Mary Anning helped change what scientists knew about ancient life.',
  },
  {
    chapter: 'Extinction and Legacy',
    concept: 'the K-Pg extinction',
    correct: 'The K-Pg extinction about 66 million years ago wiped out many dinosaurs after a major asteroid impact and other changes.',
    wrong: [
      ['The K-Pg extinction happened just a few years ago.', 'The K-Pg extinction was about 66 million years ago, long before humans.', 'Place it on a long timeline of Earth\'s history.'],
      ['The K-Pg extinction was caused by dinosaurs forgetting to eat.', 'Mass extinctions involve global changes like asteroid impact and climate, not forgetting.', 'Look up the Chicxulub crater.'],
      ['The K-Pg extinction made every living thing on Earth disappear.', 'Many groups, including birds and mammals, survived the K-Pg extinction.', 'List survivors versus species that died out.'],
    ],
    lesson: 'Evidence includes the Chicxulub crater and a worldwide layer rich in iridium.',
  },
  {
    chapter: 'Extinction and Legacy',
    concept: 'survivors after dinosaur extinction',
    correct: 'Birds, mammals, crocodilians, and many other groups survived the K-Pg extinction.',
    wrong: [
      ['No living thing at all survived the K-Pg extinction.', 'If nothing had survived, life on Earth would not be here today.', 'List groups that survived to give us modern animals.'],
      ['Only Tyrannosaurus rex survived completely unchanged.', 'Non-bird dinosaurs like T. rex did not survive the K-Pg event.', 'Match T. rex with extinction, not survival.'],
      ['Only plants survived and every animal vanished.', 'Many animal groups, including birds, mammals, and crocodilians, survived.', 'Compare extinct groups with surviving ones.'],
    ],
    lesson: 'Extinction events remove many species but do not always remove every branch of life.',
  },
]

const planetsPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'The Solar System',
    concept: 'the Sun at the centre',
    correct: 'The Sun is at the centre of our solar system, and planets orbit it.',
    wrong: [
      ['Earth is at the centre and the Sun orbits Earth once every hour.', 'In our solar system, Earth orbits the Sun, not the other way round, and the time scale is a year.', 'Model the orbits with a ball and a torch.'],
      ['The Moon is the centre of the solar system.', 'The Moon orbits Earth; both orbit the Sun, which is the centre.', 'Order the bodies from centre outward.'],
      ['The solar system has no star at all.', 'The Sun is the star at the centre of our solar system.', 'A solar system needs a star, and ours is the Sun.'],
    ],
    lesson: 'The Sun is a star whose gravity helps keep planets in orbit.',
  },
  {
    chapter: 'The Solar System',
    concept: 'inner rocky planets',
    correct: 'Mercury, Venus, Earth, and Mars are the inner rocky planets.',
    wrong: [
      ['Jupiter, Saturn, Uranus, and Neptune are the inner rocky planets.', 'Those four are the outer gas and ice giants, not the inner rocky planets.', 'List planets in order from the Sun.'],
      ['Only Earth is a planet, and the others are stars.', 'Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune are all planets too.', 'Eight planets orbit the Sun.'],
      ['The inner rocky planets are made mostly of gas, not rock.', 'The inner planets have solid rocky surfaces; the gas giants are further out.', 'Match each planet to its main material.'],
    ],
    lesson: 'The inner planets are closer to the Sun and have solid rocky surfaces.',
  },
  {
    chapter: 'The Solar System',
    concept: 'outer giant planets',
    correct: 'Jupiter, Saturn, Uranus, and Neptune are outer giant planets.',
    wrong: [
      ['Mercury and Venus are the outer giant planets.', 'Mercury and Venus are small rocky planets close to the Sun, not outer giants.', 'Outer planets are the four largest.'],
      ['The outer planets are tiny rocks with no atmospheres.', 'The outer planets are huge worlds with thick atmospheres.', 'Compare Jupiter to Earth in size.'],
      ['The outer planets are all closer to the Sun than Earth.', 'The outer planets are farther from the Sun than Earth, not closer.', 'Order planets by distance from the Sun.'],
    ],
    lesson: 'The outer giant planets are much larger than Earth and have thick atmospheres.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'Earth tilt and seasons',
    correct: 'Seasons happen because Earth is tilted as it orbits the Sun.',
    wrong: [
      ['Seasons happen because Earth gets much closer to the Sun in summer everywhere.', 'Earth\'s distance from the Sun barely changes; both hemispheres do not have summer at the same time.', 'Compare summer in the north with summer in the south.'],
      ['Seasons happen because the Moon changes its colour.', 'The Moon\'s appearance does not cause Earth\'s seasons.', 'Trace seasons to Earth\'s tilt, not the Moon.'],
      ['Seasons happen because the Sun turns cold in winter.', 'The Sun does not get cold; less direct sunlight on a tilted hemisphere makes winter.', 'Model tilt with a torch and a ball.'],
    ],
    lesson: 'Tilt changes the angle and length of sunlight in each hemisphere through the year.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'Moon phases',
    correct: 'Moon phases are the changing shapes of sunlight we see on the Moon as it orbits Earth.',
    wrong: [
      ['Moon phases happen because the Moon physically changes shape each night.', 'The Moon stays the same shape; we just see different lit parts.', 'Model the Moon and Sun with a ball and a torch.'],
      ['Moon phases are caused by clouds painting the Moon different colours.', 'Clouds in our sky do not paint the Moon; phases come from sunlight angle.', 'Phases happen even on clear nights.'],
      ['Moon phases happen because the Moon makes its own light.', 'The Moon reflects sunlight; it does not produce its own.', 'Compare the Moon with a real light source.'],
    ],
    lesson: 'The Moon reflects sunlight, and we see different lit parts during the month.',
  },
  {
    chapter: 'Earth, Moon and Gravity',
    concept: 'tides and the Moon',
    correct: "The Moon's gravity is a major cause of ocean tides on Earth.",
    wrong: [
      ['Tides are caused only by groups of fish swimming together.', 'Fish do not cause tides; gravity from the Moon and Sun does.', 'Look at tide tables that follow the Moon, not fish.'],
      ['Tides happen because beaches breathe air in and out.', 'Beaches do not breathe; tides come from gravitational pulls.', 'Watch tides rise and fall over hours.'],
      ['The Moon has no connection to tides at all.', 'The Moon\'s gravity is the main driver of tides.', 'Compare high tides at full and new moons.'],
    ],
    lesson: 'The Sun also affects tides, but the Moon is the main influence students usually study first.',
  },
  {
    chapter: 'Stars, Galaxies and The Universe',
    concept: 'light years',
    correct: 'A light year is a unit of distance, not a unit of time.',
    wrong: [
      ['A light year is exactly one school year long in time.', 'A light year measures how far light travels in a year, not a school calendar.', 'Use a light year to measure distance to stars.'],
      ['A light year measures how bright a lamp shines.', 'Brightness uses different units; a light year is a distance.', 'Match light years to distance, lumens to brightness.'],
      ['A light year is the time it takes to eat lunch in space.', 'A light year is a distance in space, not a meal time.', 'Use units that match space distances.'],
    ],
    lesson: 'A light year is the distance light travels in one year.',
  },
  {
    chapter: 'Stars, Galaxies and The Universe',
    concept: 'the Milky Way',
    correct: 'The Milky Way is our galaxy and contains billions of stars.',
    wrong: [
      ['The Milky Way is just one small moon orbiting Earth.', 'The Milky Way is a whole galaxy of stars, not a single moon.', 'Compare a moon with a galaxy in size.'],
      ['The Milky Way is a planet right next to Mars.', 'The Milky Way is not a planet; it is the galaxy that contains the Sun and Mars.', 'Sort by scale: planet, star system, galaxy.'],
      ['The Milky Way contains no stars at all.', 'The Milky Way contains billions of stars, including the Sun.', 'Look at the night sky on a clear, dark night.'],
    ],
    lesson: 'Our Sun is one star within the Milky Way galaxy.',
  },
  {
    chapter: 'Space Exploration',
    concept: 'Apollo 11',
    correct: 'Apollo 11 was the mission that first landed humans on the Moon.',
    wrong: [
      ['Apollo 11 was the mission that first landed humans on Jupiter.', 'Jupiter is a gas giant with no solid surface; no humans have landed there.', 'Match Apollo 11 with the Moon, not Jupiter.'],
      ['Apollo 11 was the spacecraft that discovered dinosaurs.', 'Dinosaurs are discovered through fossils on Earth, not by spacecraft.', 'Apollo missions were lunar missions, not dig sites.'],
      ['Apollo 11 was a deep-ocean submarine, not a spacecraft.', 'Apollo 11 was a space mission; submarines explore oceans.', 'Match Apollo with NASA space missions.'],
    ],
    lesson: 'In 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin walked on the Moon.',
  },
  {
    chapter: 'Space Exploration',
    concept: 'Mars rovers',
    correct: 'Mars rovers are robotic vehicles that explore the surface of Mars.',
    wrong: [
      ['Mars rovers are large rockets that orbit only the Sun and never land anywhere.', 'Rovers are landers that drive on a planet\'s surface, not orbital rockets.', 'Match rovers to ground travel.'],
      ['Mars rovers are telescopes placed at the bottom of the ocean.', 'Telescopes look at space and are not in the ocean; rovers operate on Mars.', 'Look up images of NASA rovers on Mars.'],
      ['Mars rovers are crewed spacecraft that carry many astronauts.', 'Rovers are robotic and uncrewed; no astronauts ride inside them.', 'Compare a rover with the Apollo lander.'],
    ],
    lesson: 'Rovers use cameras and instruments to study rocks, soil, weather, and signs of past water.',
  },
]

const oceanPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'Ocean Zones',
    concept: 'the sunlight zone',
    correct: 'The sunlight zone is the upper ocean layer where enough light supports photosynthesis.',
    wrong: [
      ['The sunlight zone is the deepest trench, where no light reaches at all.', 'Deep trenches are the midnight zone, not the sunlight zone.', 'Match "sunlight" with the top of the ocean.'],
      ['The sunlight zone is inside volcanoes, not in the ocean.', 'Sunlight zone is an ocean layer; volcanoes are unrelated.', 'Use zones to describe ocean depth.'],
      ['The sunlight zone has no living things in it.', 'The sunlight zone is full of life, including algae and many fish.', 'Look at coral reefs near the surface.'],
    ],
    lesson: 'Many ocean food chains begin near the surface because algae and phytoplankton need light.',
  },
  {
    chapter: 'Ocean Zones',
    concept: 'the twilight zone',
    correct: 'The twilight zone is dim, with less sunlight and many animals adapted to low light.',
    wrong: [
      ['The twilight zone is brighter than a sunny beach at noon.', 'The twilight zone is dimmer than the surface, not brighter.', 'Match "twilight" with low light.'],
      ['The twilight zone is dry land, not part of the ocean.', 'The twilight zone is an ocean depth zone, not land.', 'Use ocean zones for water depths.'],
      ['The twilight zone is only found inside the skeletons of coral.', 'The twilight zone is a layer of open ocean water, not a tiny space inside coral.', 'Sort coral animals from ocean layers.'],
    ],
    lesson: 'Some twilight-zone animals use large eyes or bioluminescence.',
  },
  {
    chapter: 'Ocean Zones',
    concept: 'the midnight zone',
    correct: 'The midnight zone has no sunlight and very high pressure.',
    wrong: [
      ['The midnight zone is only the top few centimetres of water.', 'The top is the sunlight zone; the midnight zone is much deeper.', 'Order zones from surface to seafloor.'],
      ['The midnight zone is full of grass and flying bees.', 'The midnight zone is deep ocean with no light, where grass and bees do not live.', 'Use grass and bees on land, not the abyss.'],
      ['The midnight zone has bright sunlight for photosynthesis.', 'Sunlight does not reach the midnight zone, so plant-like photosynthesis cannot happen there.', 'Match the zone with darkness.'],
    ],
    lesson: 'Deep-sea animals need special adaptations for darkness, cold, and pressure.',
  },
  {
    chapter: 'Marine Ecosystems and Food Chains',
    concept: 'phytoplankton as producers',
    correct: 'Phytoplankton are tiny producers that use sunlight to make food.',
    wrong: [
      ['Phytoplankton are top predators with sharp teeth and large fins.', 'Phytoplankton are tiny producers, not large predators.', 'Match phytoplankton to the start of food chains.'],
      ['Phytoplankton are pieces of plastic floating in the sea.', 'Phytoplankton are living organisms, not plastic.', 'Compare a microscope view of plankton with plastic.'],
      ['Phytoplankton never need light or nutrients at all.', 'Phytoplankton use sunlight and nutrients to grow.', 'Match producers to needing light.'],
    ],
    lesson: 'These tiny organisms support huge ocean food webs.',
  },
  {
    chapter: 'Marine Ecosystems and Food Chains',
    concept: 'apex predators',
    correct: 'Apex predators, such as orcas, are predators near the top of a food web.',
    wrong: [
      ['Apex predators are always small plants on the seafloor.', 'Plants are producers, not apex predators.', 'Match apex predators to top hunters.'],
      ['Apex predators are animals that are eaten by every other animal.', 'Apex predators have very few or no natural predators of their own.', 'Place them at the top of the web.'],
      ['Apex predators are non-living parts of the ecosystem like sand.', 'Apex predators are living animals like orcas or great whites.', 'Pick a specific apex predator and describe it.'],
    ],
    lesson: 'Apex predators still depend on the health of the whole food web beneath them.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'fish gills',
    correct: 'Fish use gills to take oxygen from water.',
    wrong: [
      ['Fish use gills to grow flowers on their bodies.', 'Gills take oxygen from water; they do not grow flowers.', 'Match gills to breathing in water.'],
      ['Fish use gills to breathe air directly, just like human lungs on land.', 'Gills work in water by extracting dissolved oxygen, not air-breathing on land.', 'Compare gills with lungs.'],
      ['Fish use gills only to hear underwater music.', 'Fish sense vibrations with their lateral line and ears, not gills.', 'Match gills to breathing, not hearing.'],
    ],
    lesson: 'Gills let fish exchange gases with water as water passes over them.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'marine mammals breathing',
    correct: 'Marine mammals breathe air with lungs and must surface to breathe.',
    wrong: [
      ['Marine mammals breathe through leaves like underwater plants.', 'Marine mammals breathe air with lungs, not leaves.', 'Watch a whale surfacing to blow air.'],
      ['Marine mammals never need oxygen at all to survive.', 'All mammals, including marine ones, need oxygen.', 'Notice that whales come up to breathe.'],
      ['Marine mammals are actually fish because they live in the ocean.', 'Living in the ocean does not make an animal a fish; mammals have lungs and feed young milk.', 'Compare a whale with a tuna.'],
    ],
    lesson: 'Whales, dolphins, and seals are mammals, so they breathe air even though they live in the ocean.',
  },
  {
    chapter: 'Marine Biology',
    concept: 'octopus camouflage',
    correct: 'An octopus can change colour and texture to blend in or communicate.',
    wrong: [
      ['An octopus uses feathers on its skin for camouflage.', 'Octopuses do not have feathers; they use special skin cells to change colour.', 'Look at chromatophores in an octopus.'],
      ['An octopus turns permanently into a hard rock to hide.', 'An octopus changes colour and texture but stays a soft-bodied animal.', 'Watch an octopus return to its normal form.'],
      ['An octopus can only hide by closing its eyes very tightly.', 'Closing eyes does not hide the body; colour and texture change does.', 'Watch the skin, not the eyes.'],
    ],
    lesson: 'Camouflage helps many animals avoid predators or surprise prey.',
  },
  {
    chapter: 'Ocean Conservation',
    concept: 'coral bleaching',
    correct: 'Coral bleaching can happen when warming or stress makes corals lose helpful algae.',
    wrong: [
      ['Coral bleaching means reef workers wash corals with cleaning soap.', 'Coral bleaching is a biological stress response, not a cleaning task.', 'Match bleaching to ocean warming.'],
      ['Coral bleaching is caused by too many Moon phases each month.', 'Moon phases do not cause coral bleaching; ocean warming and stress do.', 'Look at ocean temperatures, not the Moon.'],
      ['Coral bleaching always makes reefs healthier than before.', 'Bleached corals are stressed and may die without recovery.', 'Compare healthy and bleached reefs.'],
    ],
    lesson: 'Bleached corals are stressed and may die if conditions do not improve.',
  },
  {
    chapter: 'Ocean Conservation',
    concept: 'plastic pollution',
    correct: 'Plastic pollution can harm marine animals when it is swallowed or traps them.',
    wrong: [
      ['Plastic pollution is healthy food for all sea turtles.', 'Sea turtles can confuse plastic for food, which can hurt them.', 'Match plastic to harm, not nutrition.'],
      ['Plastic pollution disappears instantly when it enters seawater.', 'Plastic can persist in the ocean for many years, breaking only into smaller pieces.', 'Look at long-lived plastic on beaches.'],
      ['Plastic pollution only affects mountains, not oceans.', 'Plastic in waterways often ends up in the ocean and affects marine life.', 'Trace a piece of plastic from land to sea.'],
    ],
    lesson: 'Reducing, reusing, recycling, and careful disposal help keep plastics out of the ocean.',
  },
]

const bugsPrimarySeeds: readonly ConceptSeed[] = [
  {
    chapter: 'Classification and Anatomy',
    concept: 'insect body parts',
    correct: 'Insects have a head, thorax, abdomen, six legs, and usually antennae.',
    wrong: [
      ['Insects have eight legs and no body sections at all.', 'Eight legs and no sections describes some other arthropods, not insects.', 'Count legs carefully on an insect.'],
      ['Insects have a fish-like body with scales and fins.', 'Insects have exoskeletons and segmented bodies, not scales and fins like fish.', 'Compare a fish with a beetle.'],
      ['Insects have roots, stems, and leaves like plants.', 'Insects are animals; roots and leaves are parts of plants.', 'Sort each feature into plant or animal.'],
    ],
    lesson: 'Counting legs and body sections helps separate insects from spiders and other arthropods.',
  },
  {
    chapter: 'Classification and Anatomy',
    concept: 'arachnids',
    correct: 'Arachnids, such as spiders and scorpions, usually have eight legs.',
    wrong: [
      ['Arachnids are insects that have six legs and antennae.', 'Arachnids are not insects; they have eight legs and usually no antennae.', 'Count legs to tell them apart.'],
      ['Arachnids are flowering plants that grow in fields.', 'Arachnids are animals, not plants.', 'Look at a spider or scorpion.'],
      ['Arachnids are fish that breathe with gills.', 'Arachnids are land-living arthropods, not fish.', 'Match each animal group to its habitat.'],
    ],
    lesson: 'Spiders are arthropods, but they are not insects.',
  },
  {
    chapter: 'Classification and Anatomy',
    concept: 'exoskeletons',
    correct: 'An exoskeleton is a hard outer covering that supports and protects an arthropod.',
    wrong: [
      ['An exoskeleton is a soft inner skeleton like the bones inside a human.', 'A human has an inner endoskeleton of bones; arthropods have an outer exoskeleton instead.', 'Use "exo-" to mean outside.'],
      ['An exoskeleton is a kind of pollen made by flowers.', 'Pollen is a plant material; exoskeletons are animal body coverings.', 'Sort by living group: plant or animal.'],
      ['An exoskeleton is the layer of fluid inside an insect\'s body.', 'The exoskeleton is the hard outer layer, not the fluid inside.', 'Tap a beetle\'s back to feel the hard outside.'],
    ],
    lesson: 'Because exoskeletons do not stretch much, many arthropods moult as they grow.',
  },
  {
    chapter: 'Life Cycles and Metamorphosis',
    concept: 'complete metamorphosis in insects',
    correct: 'Complete metamorphosis goes egg, larva, pupa, adult.',
    wrong: [
      ['Complete metamorphosis goes from adult straight to old age with no young stages.', 'Complete metamorphosis includes egg, larva, and pupa as young stages before adult.', 'List all four stages in order.'],
      ['Complete metamorphosis has no young stages, only adult flying insects.', 'Young stages are central to complete metamorphosis.', 'Watch a butterfly life cycle.'],
      ['Complete metamorphosis is the same as winter hibernation in mammals.', 'Hibernation is sleeping through winter; metamorphosis is a body change in insects.', 'Sort the words: insects metamorphose, mammals hibernate.'],
    ],
    lesson: 'Butterflies, moths, beetles, and flies have complete metamorphosis.',
  },
  {
    chapter: 'Life Cycles and Metamorphosis',
    concept: 'incomplete metamorphosis',
    correct: 'Incomplete metamorphosis goes egg, nymph, adult, without a pupa stage.',
    wrong: [
      ['Incomplete metamorphosis always includes a chrysalis or cocoon stage.', 'A chrysalis is a pupa stage, which is part of complete metamorphosis, not incomplete.', 'Match pupa with complete, not incomplete.'],
      ['Incomplete metamorphosis means an insect never grows at all.', 'Nymphs grow and moult through several stages before reaching adult.', 'Watch a grasshopper grow.'],
      ['Incomplete metamorphosis is a kind of ocean wave pattern.', 'Metamorphosis is a biology word for body change, not an ocean wave.', 'Use it for insect life cycles.'],
    ],
    lesson: 'Grasshoppers and dragonflies are examples of insects with nymph stages.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'pollination',
    correct: 'Pollination moves pollen to the part of a flower that can help make seeds.',
    wrong: [
      ['Pollination is when insects paint flowers a different colour.', 'Pollination moves pollen between flower parts; it does not paint petals.', 'Watch a bee carry pollen on its legs.'],
      ['Pollination is how spiders build their webs.', 'Webs are built from silk, not pollen.', 'Sort spiders building from bees pollinating.'],
      ['Pollination means seeds turn into hard rocks.', 'Pollination helps make seeds; it does not turn seeds into rocks.', 'Follow a flower from blossom to seed.'],
    ],
    lesson: 'Bees, butterflies, wind, and other helpers can move pollen between flowers.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'worker bees',
    correct: 'Worker bees collect food, care for young, build wax comb, and help protect the hive.',
    wrong: [
      ['Worker bees are the only bees that lay all the eggs in the hive.', 'The queen lays almost all the eggs; workers do many other jobs.', 'Match queens to eggs and workers to chores.'],
      ['Worker bees are tiny fish that live inside honey jars.', 'Worker bees are insects, not fish; honey is made from nectar.', 'Look at a bee and notice six legs and wings.'],
      ['Worker bees do not help the colony in any way.', 'Worker bees do most of the day-to-day work that keeps the colony alive.', 'List jobs workers do for the hive.'],
    ],
    lesson: 'Bee colonies have different roles, including queen, workers, and drones.',
  },
  {
    chapter: 'Pollination, Colonies and Ecosystems',
    concept: 'decomposer insects',
    correct: 'Some insects help ecosystems by breaking down dead plants, dung, or dead animals.',
    wrong: [
      ['Decomposer insects use sunlight to build whole new planets.', 'Decomposers recycle nutrients in ecosystems; they do not build planets.', 'Match decomposers with recycling, not space.'],
      ['Decomposer insects only make rubbish last longer in the environment.', 'Decomposers break dead matter down faster, not keep it intact.', 'Watch how a dead leaf breaks down with insects.'],
      ['Decomposer insects are never part of any food web.', 'Decomposers are an important part of food webs because they recycle nutrients.', 'Trace nutrients back through the food web.'],
    ],
    lesson: 'Decomposers recycle nutrients so they can be used again by living things.',
  },
  {
    chapter: 'Adaptation and Conservation',
    concept: 'camouflage in insects',
    correct: 'Camouflage helps insects blend in with their surroundings.',
    wrong: [
      ['Camouflage helps insects become louder to scare predators.', 'Camouflage is about not being noticed; loud sounds are a different defence.', 'Look at how stick insects stay still.'],
      ['Camouflage makes insects glow brighter than the Sun.', 'Camouflage hides insects; bright glowing would do the opposite.', 'Compare a moth\'s wings with the bark behind it.'],
      ['Camouflage only works in outer space, not on Earth.', 'Insects use camouflage on Earth, in habitats like forests and grasslands.', 'Find a leaf insect on a leaf.'],
    ],
    lesson: 'Stick insects and leaf insects can be hard to see because their bodies match their habitats.',
  },
  {
    chapter: 'Adaptation and Conservation',
    concept: 'helping insect conservation',
    correct: 'Planting flowers, protecting habitats, and avoiding unnecessary pesticides can help insects.',
    wrong: [
      ['Removing every wild plant from a garden helps insects most.', 'Wild plants give insects food and shelter, so removing them harms most insects.', 'Compare a wild patch with a bare lawn.'],
      ['Using more pesticides everywhere is always best for insects.', 'Pesticides can kill helpful insects like bees, not just pests.', 'Use pesticides sparingly when really needed.'],
      ['Building shelters and planting flowers cannot help any insect at all.', 'Bug hotels and pollinator-friendly flowers can support many insects.', 'Set up a small bug hotel and watch what arrives.'],
    ],
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
