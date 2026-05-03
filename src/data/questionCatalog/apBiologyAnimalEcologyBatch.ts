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
    'Coverage source: reviewed OpenTriviaQA animals and biology-adjacent rows. This is an authored Floe-native conversion item, not a direct species-trivia import.',
  source: 'OpenTriviaQA/OER AP Biology animal ecology coverage',
})

export const apBiologyAnimalEcologyBatchQuestions = makeQuestionBank('AP', [
  q(460001, 'Animal Classification', 'Vertebrate clue', 'A cobra belongs in which broad animal group?', 'Vertebrates', [
    miss('Fungi', 'Cobras are animals, not fungi.', 'Snakes have backbones.'),
    miss('Flowering plants', 'Cobras are not photosynthetic plants.', 'Use animal classification.'),
    miss('Bacteria', 'Cobras are multicellular animals.', 'Think chordates and vertebrates.'),
  ]),
  q(460002, 'Animal Classification', 'Arthropod trait', 'A horseshoe crab is best classified as an arthropod because it has:', 'Jointed appendages and an external skeleton', [
    miss('A backbone and mammary glands', 'Those are vertebrate/mammal traits.', 'Arthropods have jointed limbs.'),
    miss('Only one cell with no tissues', 'Arthropods are multicellular animals.', 'Use body-plan traits.'),
    miss('Petals and seeds', 'Those are plant structures.', 'Animal classification.'),
  ]),
  q(460003, 'Animal Classification', 'Cephalopods', 'Octopuses belong to the cephalopod group, which is part of the phylum:', 'Mollusca', [
    miss('Chordata', 'Octopuses are not vertebrate chordates.', 'Cephalopods are mollusks.'),
    miss('Arthropoda', 'Arthropods include insects, spiders, and crustaceans.', 'Octopus is a mollusk.'),
    miss('Cnidaria', 'Cnidarians include jellyfish and corals.', 'Think squid, octopus, nautilus.'),
  ]),
  q(460004, 'Animal Classification', 'Marsupial clue', 'Kangaroos are marsupials, meaning they are mammals that typically:', 'Give birth to very underdeveloped young that continue developing in a pouch', [
    miss('Lay hard-shelled eggs like most birds', 'Most marsupials do not lay eggs.', 'Pouch development is the clue.'),
    miss('Have no hair and no milk production', 'Mammals have hair and produce milk.', 'Marsupials are mammals.'),
    miss('Carry out photosynthesis', 'Animals do not photosynthesize as their main energy source.', 'Use reproductive biology.'),
  ]),
  q(460005, 'Animal Classification', 'Cetacean families', 'Dolphins and porpoises are both cetaceans, which means they are:', 'Aquatic mammals', [
    miss('Cartilaginous fish', 'Sharks are cartilaginous fish; cetaceans are mammals.', 'They breathe air and nurse young.'),
    miss('Marine flowering plants', 'Cetaceans are animals.', 'Think whales, dolphins, porpoises.'),
    miss('Insects with gills', 'Cetaceans are mammals, not insects.', 'Use mammal traits.'),
  ]),
  q(460006, 'Animal Structure', 'Snake scales', 'Snake skin is covered mostly with:', 'Scales made of keratin', [
    miss('Feathers made for flight', 'Snakes do not have feathers.', 'Reptile body covering.'),
    miss('Petals used for pollination', 'That is plant anatomy.', 'Animal integument.'),
    miss('Mammary glands', 'Those are mammal structures, not skin covering.', 'Scales are the clue.'),
  ]),
  q(460007, 'Animal Structure', 'Hood display', 'A cobra spreading its hood is best understood as:', 'A defensive display that makes it look more threatening', [
    miss('A method for photosynthesis', 'The hood is not a light-capturing organ.', 'Behavioral defense.'),
    miss('A way to digest food outside the body', 'That is not the hood function.', 'Think threat display.'),
    miss('A sign the snake has become a bird', 'No classification change occurs.', 'It is behavior and anatomy.'),
  ]),
  q(460008, 'Animal Structure', 'Porcupine quills', 'Porcupine quills are modified:', 'Hairs used for defense', [
    miss('Teeth used for chewing', 'Quills are not teeth.', 'They are body covering structures.'),
    miss('Flower stems used for reproduction', 'Porcupines are animals.', 'Think mammal hair.'),
    miss('Fish scales used for swimming', 'Porcupines are mammals, not fish.', 'Modified hair.'),
  ]),
  q(460009, 'Animal Structure', 'Bird feathers', 'Feathers in birds are important for flight, insulation, and display, and are made mostly of:', 'Keratin', [
    miss('Cellulose', 'Cellulose is a plant cell-wall material.', 'Animal integument protein.'),
    miss('Chitin only', 'Chitin is common in arthropod exoskeletons.', 'Feathers use keratin.'),
    miss('Glucose crystals', 'Feathers are not sugar crystals.', 'Structural protein.'),
  ]),
  q(460010, 'Animal Structure', 'Gharial snout', 'A gharial’s narrow snout is an example of a body structure related to:', 'Feeding adaptation', [
    miss('Cellular respiration in mitochondria only', 'The snout is anatomy, not a cellular pathway.', 'Shape can fit feeding ecology.'),
    miss('Photosynthesis', 'Gharials are animals.', 'Use form and function.'),
    miss('Seed dispersal', 'That is plant reproduction.', 'Animal feeding structure.'),
  ]),
  q(460011, 'Animal Behavior', 'Nocturnal behavior', 'An animal described as nocturnal is most active:', 'At night', [
    miss('Only during photosynthesis', 'Animals do not depend on photosynthesis for activity timing.', 'Nocturnal means night-active.'),
    miss('Only while hibernating', 'Hibernation is dormancy, not ordinary activity.', 'Night activity.'),
    miss('Only underwater', 'Nocturnal refers to time, not habitat.', 'Use day/night timing.'),
  ]),
  q(460012, 'Animal Behavior', 'Ballooning spiders', 'Small spiders dispersing by catching wind on silk is called ballooning and is mainly a form of:', 'Dispersal', [
    miss('Digestion', 'The spider is moving, not breaking down food.', 'Movement to new locations.'),
    miss('Binary fission', 'Spiders do not reproduce by binary fission.', 'This is behavior.'),
    miss('Courtroom testimony', 'Not a biology concept.', 'Dispersal ecology.'),
  ]),
  q(460013, 'Animal Behavior', 'Brood parasitism', 'A bird laying eggs in another bird’s nest is an example of:', 'Brood parasitism', [
    miss('Photosynthetic mutualism', 'This is not plant energy capture or mutual benefit by default.', 'One species shifts parental cost.'),
    miss('Cellular respiration', 'That is an energy pathway, not reproductive behavior.', 'Nest and parental care.'),
    miss('Osmosis', 'Osmosis is water movement across membranes.', 'This is reproductive strategy.'),
  ]),
  q(460014, 'Animal Behavior', 'Migration reason', 'Many animals migrate primarily to:', 'Track resources, breeding conditions, or seasonal climate', [
    miss('Avoid all energy use forever', 'Migration costs energy.', 'Animals move because benefits can exceed costs.'),
    miss('Become a different species instantly', 'Migration does not cause instant speciation.', 'Movement across habitats.'),
    miss('Stop interacting with ecosystems', 'Migration changes ecological interactions.', 'Resources and reproduction.'),
  ]),
  q(460015, 'Animal Behavior', 'Hibernation', 'Hibernation helps some animals survive by:', 'Reducing metabolic activity during harsh conditions', [
    miss('Increasing activity to maximum all winter', 'Hibernation lowers activity and metabolism.', 'Energy conservation.'),
    miss('Turning animals into plants', 'No classification change occurs.', 'Dormancy strategy.'),
    miss('Removing the need for stored energy', 'Stored energy is often important.', 'Lower metabolism conserves reserves.'),
  ]),
  q(460016, 'Ecology', 'Predator role', 'A predator is an organism that:', 'Kills and eats other organisms', [
    miss('Makes its own food from sunlight only', 'That describes many producers.', 'Predator-consumer role.'),
    miss('Always decomposes dead leaves only', 'That describes decomposers/detritivores.', 'Predation involves consuming prey.'),
    miss('Never affects population dynamics', 'Predators can strongly affect prey populations.', 'Food-web interaction.'),
  ]),
  q(460017, 'Ecology', 'Prey adaptation', 'Camouflage helps prey animals mainly by:', 'Reducing detection by predators', [
    miss('Making predators easier to see', 'That is the opposite of camouflage.', 'Blend with background.'),
    miss('Producing ATP directly from sunlight', 'Camouflage is not photosynthesis.', 'Avoid detection.'),
    miss('Guaranteeing unlimited reproduction', 'It may improve survival but not guarantee reproduction.', 'Survival advantage.'),
  ]),
  q(460018, 'Ecology', 'Food chain top', 'A top predator usually has:', 'Few or no regular predators as adults', [
    miss('No need for food', 'Top predators still need energy.', 'They are high in the food web.'),
    miss('Only photosynthetic cells', 'Predators are consumers.', 'Food-web role.'),
    miss('No effect on prey', 'Top predators can affect prey and ecosystems.', 'Trophic interactions.'),
  ]),
  q(460019, 'Ecology', 'Herbivore', 'An herbivore primarily eats:', 'Plants or algae', [
    miss('Only other predators', 'That describes carnivory higher in a food web.', 'Herb means plant.'),
    miss('Only rocks', 'Rocks are not food for herbivores.', 'Plant material.'),
    miss('Only decomposed plastic', 'That is not the definition.', 'Producer biomass.'),
  ]),
  q(460020, 'Ecology', 'Omnivore', 'An omnivore is an animal that:', 'Eats both plant and animal material', [
    miss('Eats only one kind of mineral', 'That is not omnivory.', 'Omni means all/both types.'),
    miss('Never consumes organic matter', 'Animals need organic food.', 'Mixed diet.'),
    miss('Makes food only through photosynthesis', 'That is producer/autotroph behavior.', 'Omnivores are consumers.'),
  ]),
  q(460021, 'Evolution', 'Adaptive trait', 'A trait is adaptive when it:', 'Increases survival or reproductive success in a particular environment', [
    miss('Looks interesting but has no effect anywhere', 'Adaptive traits affect fitness in context.', 'Environment matters.'),
    miss('Is chosen because an organism wants it', 'Evolution is not based on individual wanting.', 'Heritable fitness effects.'),
    miss('Appears only after every individual dies', 'Selection acts through survival and reproduction.', 'Fitness consequence.'),
  ]),
  q(460022, 'Evolution', 'Convergent evolution', 'When unrelated animals evolve similar traits because they face similar pressures, that is:', 'Convergent evolution', [
    miss('Genetic drift only', 'Drift is random allele frequency change.', 'Similar selection pressures can shape similar traits.'),
    miss('Osmosis', 'Osmosis is water movement.', 'This is evolutionary pattern.'),
    miss('A food web', 'Food webs show feeding relationships, not trait origin pattern.', 'Independent similarity.'),
  ]),
  q(460023, 'Evolution', 'Endemism', 'A species is endemic to an area when it:', 'Naturally occurs there and nowhere else', [
    miss('Migrates through every continent every day', 'That is the opposite of restricted range.', 'Endemic means place-limited.'),
    miss('Is found only in laboratories', 'Endemism refers to natural geographic range.', 'Native and restricted.'),
    miss('Has no habitat at all', 'Endemic species have habitats in their region.', 'Geography clue.'),
  ]),
  q(460024, 'Evolution', 'Extinction', 'A species is extinct when:', 'No living members remain', [
    miss('It has a small population but still reproduces', 'That may be endangered, not extinct.', 'Extinct means none left.'),
    miss('It moves to a new habitat', 'Movement is not extinction.', 'Living members matter.'),
    miss('It changes color seasonally', 'Seasonal color change is not extinction.', 'Population existence.'),
  ]),
  q(460025, 'Conservation Biology', 'Habitat loss', 'Habitat destruction threatens species mainly because it:', 'Removes or fragments the resources and spaces they need to survive', [
    miss('Always creates unlimited new resources', 'Habitat destruction usually reduces usable habitat.', 'Shelter, food, breeding sites.'),
    miss('Has no link to population size', 'Habitat affects carrying capacity and survival.', 'Resource base.'),
    miss('Only changes Latin names', 'Taxonomy labels are not the main impact.', 'Physical habitat changes.'),
  ]),
  q(460026, 'Conservation Biology', 'Inbreeding risk', 'Very small isolated populations can suffer because:', 'Low genetic diversity can increase inbreeding and vulnerability', [
    miss('They have infinite genetic variation', 'Small isolated populations often have less diversity.', 'Genetic bottleneck risk.'),
    miss('They are immune to disease and chance events', 'Small populations are more vulnerable, not immune.', 'Demographic and genetic risk.'),
    miss('They stop needing reproduction', 'Reproduction remains essential.', 'Population viability.'),
  ]),
  q(460027, 'Conservation Biology', 'Indicator species', 'An indicator species is useful because changes in it can:', 'Signal changes in environmental conditions', [
    miss('Prove every ecosystem is perfectly stable', 'Indicator changes often reveal stress.', 'Signal, not guarantee.'),
    miss('Replace all environmental measurement', 'Indicators help but do not replace all data.', 'Biological signal.'),
    miss('Show only the species name origin', 'Name origin is taxonomy trivia, not indicator function.', 'Environmental clue.'),
  ]),
  q(460028, 'Biodiversity', 'Species richness', 'Species richness means:', 'The number of different species in a community', [
    miss('The amount of money a species has', 'Richness is ecological count, not wealth.', 'Count species.'),
    miss('Only the mass of one organism', 'That is not species richness.', 'Diversity component.'),
    miss('The pH of rainfall', 'That is chemistry/environmental measurement.', 'Community species count.'),
  ]),
  q(460029, 'Biodiversity', 'Keystone predator', 'A keystone predator can maintain biodiversity by:', 'Preventing one prey or competitor species from dominating the community', [
    miss('Removing every species except itself', 'That would reduce biodiversity.', 'Keystone effects can balance communities.'),
    miss('Turning prey into sunlight', 'No.', 'Trophic control.'),
    miss('Having no ecological interactions', 'Keystone species have strong interactions.', 'Disproportionate effect.'),
  ]),
  q(460030, 'Experimental Design', 'Field observation', 'When studying animal behavior in the wild, repeated observations are important because they:', 'Reduce the chance of mistaking one unusual event for a general pattern', [
    miss('Guarantee the hypothesis is true before data collection', 'Data tests hypotheses; it does not guarantee them.', 'Replication improves confidence.'),
    miss('Eliminate the need to define behavior clearly', 'Clear definitions are still needed.', 'Repeated, consistent measurement.'),
    miss('Make sample size irrelevant', 'Sample size still matters.', 'More observations reduce noise.'),
  ]),
])
