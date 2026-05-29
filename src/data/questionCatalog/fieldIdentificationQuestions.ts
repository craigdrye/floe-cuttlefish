import { makeSimpleQuestion } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  FIELD_IDENTIFICATION_SUB_TOPICS,
  FIELD_IDENTIFICATION_MENTOR_HINTS,
  FIELD_IDENTIFICATION_CORRECT_SHORTENED,
} from './fieldIdentificationPolish'
import type { Question, QuestionMedia } from './types'

const source = 'Floe cartoon field identification bank v1'

type SpecimenKind = 'rock' | 'plant' | 'bird' | 'animal' | 'fish' | 'anatomy' | 'fossil' | 'scat'

type SpecimenVisual = {
  kind: SpecimenKind
  bg: string
  body: string
  accent: string
  accent2?: string
  pattern?: 'spots' | 'bands' | 'speckles' | 'grain' | 'shine' | 'pellets' | 'segments'
}

type SpecimenDifficulty = 'kids' | 'adults' | 'experts'

function difficultyFor(id: number): SpecimenDifficulty {
  const order: SpecimenDifficulty[] = ['kids', 'adults', 'experts']
  return order[id % order.length]
}

function difficultySetup(difficulty: SpecimenDifficulty) {
  if (difficulty === 'kids') {
    return [
      'Kids mode: start with the obvious clue, like color, shape, or one big pattern.',
      'Then choose the answer that matches the picture best.',
      'Do not worry about perfect scientific vocabulary yet.',
    ]
  }
  if (difficulty === 'adults') {
    return [
      'Adult mode: compare two or three field marks before choosing.',
      'Use the generated field-guide picture as your main clue.',
      'Pick the answer that fits the whole specimen, not just one clue.',
    ]
  }
  return [
    'Expert mode: use morphology, texture, habitat, region, and common lookalikes.',
    'Treat the generated field-guide picture as the visual evidence to defend.',
    'Choose the answer you could defend in a field notebook.',
  ]
}

const generatedSpecimenMediaById: Record<number, QuestionMedia> = {
  6_100_001: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/basalt-cartoon.png',
    alt: 'Realistic cartoon of a dark fine-grained basalt hand specimen.',
    caption: 'Dark, dense, fine-grained volcanic texture.',
  },
  6_100_002: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/granite-cartoon.png',
    alt: 'Realistic cartoon of a coarse-grained granite hand specimen with visible crystals.',
    caption: 'Big interlocking crystals: quartz, feldspar, and dark mica flecks.',
  },
  6_100_003: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/obsidian-cartoon.png',
    alt: 'Realistic cartoon of black glassy obsidian with curved fracture surfaces.',
    caption: 'Glassy shine and curved conchoidal fractures.',
  },
  6_100_004: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/pumice-cartoon.png',
    alt: 'Realistic cartoon of pale pumice with many vesicle holes.',
    caption: 'Frothy volcanic rock full of bubble holes.',
  },
  6_100_005: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/sandstone-cartoon.png',
    alt: 'Realistic cartoon of tan sandstone with visible sand grains and subtle bedding.',
    caption: 'Gritty compacted sand grains with faint layers.',
  },
  6_100_006: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/limestone-cartoon.png',
    alt: 'Realistic cartoon of pale limestone with shell and fossil fragments.',
    caption: 'Pale carbonate rock with shell-like flecks.',
  },
  6_100_007: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/slate-cartoon.png',
    alt: 'Realistic cartoon of dark slate splitting into thin flat sheets.',
    caption: 'Flat cleavage: it breaks into thin sheets.',
  },
  6_100_008: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/marble-cartoon.png',
    alt: 'Realistic cartoon of pale veined marble with crystalline texture.',
    caption: 'Pale crystalline stone with soft gray veins.',
  },
  6_100_009: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/gneiss-cartoon.png',
    alt: 'Realistic cartoon of gneiss with strong alternating light and dark bands.',
    caption: 'Strong light-and-dark metamorphic banding.',
  },
  6_100_010: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/rocks/conglomerate-cartoon.png',
    alt: 'Realistic cartoon of conglomerate made of rounded pebbles cemented together.',
    caption: 'Rounded pebbles cemented in a sandy matrix.',
  },
  6_101_001: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/american-robin-cartoon.png',
    alt: 'Realistic cartoon of an American robin with a gray-brown back and orange-red breast.',
    caption: 'Gray-brown songbird with a warm orange-red breast.',
  },
  6_101_002: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/northern-cardinal-cartoon.png',
    alt: 'Realistic cartoon of a male northern cardinal with red plumage and a crest.',
    caption: 'Bright red bird with a pointed crest and black face mask.',
  },
  6_101_003: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/blue-jay-cartoon.png',
    alt: 'Realistic cartoon of a blue jay with a blue crest and black necklace markings.',
    caption: 'Blue crest, white face, and bold black necklace markings.',
  },
  6_101_004: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/mallard-cartoon.png',
    alt: 'Realistic cartoon of a male mallard duck with a green head and yellow bill.',
    caption: 'Glossy green head, yellow bill, and duck-shaped body.',
  },
  6_101_005: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/canada-goose-cartoon.png',
    alt: 'Realistic cartoon of a Canada goose with a black neck and white chinstrap.',
    caption: 'Long black neck with a crisp white chinstrap patch.',
  },
  6_101_006: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/birds/hummingbird-cartoon.png',
    alt: 'Realistic cartoon of a hovering hummingbird with a long needle-like bill.',
    caption: 'Tiny hovering bird with a needle bill and iridescent throat.',
  },
  6_104_001: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/sugar-maple-cartoon.png',
    alt: 'Realistic cartoon of a sugar maple twig with lobed leaves and autumn color.',
    caption: 'Lobed maple leaves, fiery autumn color, and paired samaras.',
  },
  6_104_002: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/saguaro-cactus-cartoon.png',
    alt: 'Realistic cartoon of a tall ribbed saguaro cactus with upward arms.',
    caption: 'Tall ribbed cactus with upward arms and crown flowers.',
  },
  6_104_003: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/monstera-cartoon.png',
    alt: 'Realistic cartoon of glossy Monstera deliciosa leaves with splits and holes.',
    caption: 'Glossy leaves with dramatic splits and oval holes.',
  },
  6_104_004: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/cacao-tree-cartoon.png',
    alt: 'Realistic cartoon of cacao pods growing from a tree trunk.',
    caption: 'Ribbed cacao pods growing straight from the trunk.',
  },
  6_104_005: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/lavender-cartoon.png',
    alt: 'Realistic cartoon of lavender sprigs with purple flower spikes and gray-green leaves.',
    caption: 'Purple flower spikes above narrow gray-green leaves.',
  },
  6_104_006: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/plants/english-oak-cartoon.png',
    alt: 'Realistic cartoon of an English oak twig with rounded lobed leaves and acorns.',
    caption: 'Rounded oak leaves paired with acorns in little cups.',
  },
  6_107_001: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/trilobite-cartoon.png',
    alt: 'Realistic cartoon of a trilobite fossil preserved in a shale slab.',
    caption: 'Segmented body with three lengthwise lobes.',
  },
  6_107_002: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/ammonite-cartoon.png',
    alt: 'Realistic cartoon of a coiled ammonite fossil in stone.',
    caption: 'Coiled shell with chamber ribs and whorls.',
  },
  6_107_003: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/brachiopod-cartoon.png',
    alt: 'Realistic cartoon of a ribbed brachiopod fossil shell in stone.',
    caption: 'Ribbed shell fossil with a hinge-like edge.',
  },
  6_107_004: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/footprint-fossil-cartoon.png',
    alt: 'Realistic cartoon of a three-toed dinosaur footprint fossil in a rock slab.',
    caption: 'A track fossil: the animal left a mark, not a body part.',
  },
  6_107_005: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/leaf-imprint-cartoon.png',
    alt: 'Realistic cartoon of a leaf imprint fossil with visible veins in stone.',
    caption: 'Flat leaf outline with branching vein patterns.',
  },
  6_107_006: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/petrified-wood-cartoon.png',
    alt: 'Realistic cartoon of petrified wood showing mineralized growth rings.',
    caption: 'Wood grain preserved as colorful stone.',
  },
  6_107_009: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/coprolite-spiral-cartoon.png',
    alt: 'Realistic cartoon of a spiral coprolite fossil in sedimentary rock.',
    caption: 'A dry mineralized spiral, not a shell or fresh trace.',
  },
  6_107_010: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/coprolite-pellet-cartoon.png',
    alt: 'Realistic cartoon of pellet-like coprolite fossils clustered in rock.',
    caption: 'Rounded mineralized pellets embedded in stone.',
  },
  6_107_011: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/fish-coprolite-cartoon.png',
    alt: 'Realistic cartoon of a fish coprolite fossil with scale and bone inclusions.',
    caption: 'Tiny scales and fragments trapped in fossilized waste.',
  },
  6_107_012: {
    type: 'image',
    label: 'Realistic cartoon',
    src: '/assets/guess-the-thing/fossils/carnivore-coprolite-cartoon.png',
    alt: 'Realistic cartoon of a carnivore coprolite fossil with bone-chip inclusions.',
    caption: 'Bone chips hint at an ancient carnivore meal.',
  },
}

function slugifySpecimenName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function generatedAssetFolder(kind: SpecimenKind) {
  if (kind === 'rock') return 'rocks'
  if (kind === 'plant') return 'plants'
  if (kind === 'bird') return 'birds'
  if (kind === 'animal') return 'animals'
  if (kind === 'fish') return 'fish'
  if (kind === 'anatomy') return 'body-parts'
  if (kind === 'fossil') return 'fossils'
  return 'tracks-scat'
}

function fallbackGeneratedMedia(correct: string, visual: SpecimenVisual): QuestionMedia {
  const folder = generatedAssetFolder(visual.kind)
  const slug = slugifySpecimenName(correct)
  return {
    type: 'image',
    label: 'Generated field guide',
    src: `/assets/guess-the-thing/${folder}/${slug}-cartoon.png`,
    alt: `Generated field-guide cartoon of ${correct}.`,
    caption: 'Study the generated picture, then name the specimen.',
  }
}

function media(id: number, visual: SpecimenVisual, correct: string): QuestionMedia[] {
  const generated = generatedSpecimenMediaById[id] ?? fallbackGeneratedMedia(correct, visual)
  return [generated]
}

function q(
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  lesson: string,
  visual: SpecimenVisual,
) {
  const question = makeSimpleQuestion(id, 'Fun', chapter, title, prompt, correct, wrong, lesson, source)
  const difficulty = difficultyFor(id)
  return {
    ...question,
    difficultyTier: difficulty,
    briefing: 'Use the generated field-guide picture: notice the visible traits first, then name the specimen.',
    setup: difficultySetup(difficulty),
    media: media(id, visual, correct),
    fieldNote: 'Field identification is pattern recognition plus caution: one clue helps, but several clues together make the call stronger.',
    mentorHint: 'Say the visible clue out loud before looking at the answer choices.',
  } satisfies Question
}

const _baseGuessTheBodyPartQuestions: Question[] = [
  q(6_106_001, 'Organs', 'Heart slot', 'Which organ is a muscular pump with chambers that move blood through the body?', 'Heart', [['Lung', 'Lungs exchange gases but do not pump blood as their main job.', 'Look for the chambered pump clue.'], ['Kidney', 'Kidneys filter blood and make urine.', 'Filtering is not the same as pumping.'], ['Liver', 'The liver processes nutrients and toxins, but it is not the central pump.', 'The circulation clue points to heart.']], 'The heart is a muscular organ that pumps blood through pulmonary and systemic circulation. This is anatomy education, not medical advice.', { kind: 'anatomy', bg: '#f5e8e8', body: '#cf4c58', accent: '#8f2132', accent2: '#f3a1a7', pattern: 'bands' }),
  q(6_106_002, 'Organs', 'Lung slot', 'Which paired organs are built for gas exchange between air and blood?', 'Lungs', [['Heart', 'The heart pumps blood but does not exchange oxygen directly with air.', 'Gas exchange points to lungs.'], ['Stomach', 'The stomach starts digestion.', 'Air sacs and breathing point elsewhere.'], ['Spleen', 'The spleen filters blood and supports immune function.', 'The respiratory clue matters.']], 'The lungs contain branching airways and alveoli where oxygen and carbon dioxide exchange with blood.', { kind: 'anatomy', bg: '#e8f1f5', body: '#d9869b', accent: '#7f5f8a', accent2: '#f0c1cc', pattern: 'segments' }),
  q(6_106_003, 'Organs', 'Brain slot', 'Which organ is the central control organ protected by the skull?', 'Brain', [['Spinal cord', 'The spinal cord carries signals but is not the organ inside the skull.', 'Protected by the skull points to brain.'], ['Liver', 'The liver is in the abdomen and processes chemicals.', 'Location rules it out.'], ['Heart', 'The heart is a pump in the chest.', 'Control and skull protection point to brain.']], 'The brain coordinates sensation, movement, memory, emotion, and many automatic body functions.', { kind: 'anatomy', bg: '#eeeaf5', body: '#d7a2c6', accent: '#8e5f9f', accent2: '#f1c7dd', pattern: 'grain' }),
  q(6_106_004, 'Organs', 'Kidney slot', 'Which bean-shaped organ filters blood and helps regulate fluid balance?', 'Kidney', [['Liver', 'The liver processes nutrients and bile; it is not bean-shaped in a pair.', 'Bean shape plus filtering points to kidney.'], ['Stomach', 'The stomach digests food.', 'Fluid balance and filtration point elsewhere.'], ['Lung', 'Lungs exchange gases, not urine-forming filtration.', 'Use the filtering clue.']], 'Kidneys filter blood, help regulate electrolytes and fluid balance, and produce urine.', { kind: 'anatomy', bg: '#f2e8ec', body: '#9f3f5b', accent: '#5f2236', accent2: '#c76b82', pattern: 'shine' }),
  q(6_106_005, 'Organs', 'Liver slot', 'Which large upper-abdominal organ processes nutrients, makes bile, and detoxifies chemicals?', 'Liver', [['Kidney', 'Kidneys filter blood and make urine, but bile production points elsewhere.', 'Bile is a liver clue.'], ['Pancreas', 'The pancreas makes digestive enzymes and hormones, but it is not the large bile-producing organ.', 'Large upper abdomen points to liver.'], ['Spleen', 'The spleen helps filter blood and immune cells.', 'Nutrient processing and bile point to liver.']], 'The liver performs many metabolic jobs, including bile production, nutrient processing, and detoxification.', { kind: 'anatomy', bg: '#f3e8e1', body: '#7f3f36', accent: '#5d2b27', accent2: '#b86455', pattern: 'speckles' }),
  q(6_106_006, 'Organs', 'Stomach slot', 'Which organ is a muscular pouch that mixes food with acid and enzymes?', 'Stomach', [['Small intestine', 'The small intestine absorbs many nutrients but is long and coiled.', 'A muscular acidic pouch points to stomach.'], ['Liver', 'The liver makes bile but does not store and churn meals.', 'Mixing food is the clue.'], ['Heart', 'The heart pumps blood, not food.', 'Wrong system.']], 'The stomach stores and churns food while beginning chemical digestion with acid and enzymes.', { kind: 'anatomy', bg: '#f5ece4', body: '#d08b67', accent: '#9b5138', accent2: '#f0b08a', pattern: 'shine' }),
  q(6_106_007, 'Bones', 'Femur slot', 'Which bone is the long thigh bone and the longest bone in the human body?', 'Femur', [['Humerus', 'The humerus is the upper arm bone.', 'Thigh points to femur.'], ['Tibia', 'The tibia is a shin bone, below the knee.', 'The clue says thigh.'], ['Radius', 'The radius is in the forearm.', 'Wrong limb region.']], 'The femur is the thigh bone and runs from the hip to the knee.', { kind: 'anatomy', bg: '#f2efe5', body: '#e4d2b5', accent: '#a08b70', accent2: '#f5ead7', pattern: 'bands' }),
  q(6_106_008, 'Bones', 'Skull slot', 'Which bony structure protects the brain and forms the framework of the face?', 'Skull', [['Pelvis', 'The pelvis supports the lower trunk and connects to the legs.', 'Brain protection points to skull.'], ['Rib cage', 'The rib cage protects heart and lungs.', 'Face framework is the clue.'], ['Femur', 'The femur is the thigh bone.', 'Wrong shape and job.']], 'The skull protects the brain and supports structures of the face.', { kind: 'anatomy', bg: '#f0efe7', body: '#e8ddc6', accent: '#8d806d', accent2: '#f8f1df', pattern: 'shine' }),
  q(6_106_009, 'Bones', 'Rib cage slot', 'Which structure protects the heart and lungs while helping with breathing mechanics?', 'Rib cage', [['Skull', 'The skull protects the brain.', 'Chest protection points to rib cage.'], ['Pelvis', 'The pelvis protects pelvic organs and bears weight.', 'Heart and lungs are in the chest.'], ['Vertebrae', 'Vertebrae protect the spinal cord, not the whole chest cavity.', 'Use the cage shape.']], 'The rib cage protects thoracic organs and moves with breathing.', { kind: 'anatomy', bg: '#edf1f2', body: '#d9cbb6', accent: '#867867', accent2: '#f4ead9', pattern: 'segments' }),
  q(6_106_010, 'Vessels', 'Aorta slot', 'Which large artery carries oxygenated blood away from the left side of the heart?', 'Aorta', [['Vena cava', 'The vena cava returns blood to the heart rather than carrying it away.', 'Away from the left heart means aorta.'], ['Pulmonary vein', 'Pulmonary veins return oxygenated blood from lungs to heart.', 'The clue says away from the heart.'], ['Carotid nerve', 'Carotid is an artery region, but nerve is the wrong structure type.', 'This is a major artery.']], 'The aorta is the major systemic artery carrying blood from the left ventricle to the body.', { kind: 'anatomy', bg: '#f4e7e8', body: '#c63e4a', accent: '#7d1e2a', accent2: '#f39aa1', pattern: 'segments' }),
  q(6_106_011, 'Nerves', 'Spinal cord slot', 'Which structure carries signals between the brain and body through the vertebral canal?', 'Spinal cord', [['Brain', 'The brain is the central control organ inside the skull.', 'The vertebral canal points to spinal cord.'], ['Aorta', 'The aorta is a blood vessel, not nervous tissue.', 'Signal carrying points to nerves.'], ['Femur', 'The femur is a bone, not a neural pathway.', 'Wrong tissue type.']], 'The spinal cord is a major central nervous system pathway protected by the vertebral column.', { kind: 'anatomy', bg: '#eceaf5', body: '#d9c6ea', accent: '#7a5aa0', accent2: '#f1e3ff', pattern: 'bands' }),
  q(6_106_012, 'Landmarks', 'Diaphragm slot', 'Which dome-shaped muscle separates chest from abdomen and drives breathing?', 'Diaphragm', [['Rib cage', 'The rib cage protects organs, but it is bone, not the main breathing muscle.', 'Dome-shaped muscle points to diaphragm.'], ['Stomach', 'The stomach is a digestive pouch below the diaphragm.', 'The separator clue matters.'], ['Pelvis', 'The pelvis is a bony ring in the lower trunk.', 'Wrong region.']], 'The diaphragm is the main muscle of breathing and separates the thoracic and abdominal cavities.', { kind: 'anatomy', bg: '#eef1e8', body: '#c58aa0', accent: '#8a4d67', accent2: '#e2b8c8', pattern: 'bands' }),
]

const _baseGuessTheFossilQuestions: Question[] = [
  q(6_107_001, 'Classic Fossils', 'Trilobite slot', 'Which fossil is a segmented marine arthropod with a three-lobed body plan?', 'Trilobite', [['Ammonite', 'Ammonites are coiled shells, not segmented arthropods.', 'Look for body segmentation.'], ['Coprolite', 'Coprolites are fossilized feces, not an animal body fossil.', 'This one preserves an animal shape.'], ['Dinosaur tooth', 'A tooth is a single hard part, not a many-segmented body.', 'The repeated segments point to trilobite.']], 'Trilobites were marine arthropods with segmented bodies and three lengthwise lobes.', { kind: 'fossil', bg: '#eee8dc', body: '#806f5f', accent: '#473d34', accent2: '#c7b49a', pattern: 'segments' }),
  q(6_107_002, 'Classic Fossils', 'Ammonite slot', 'Which fossil is a coiled spiral shell from an extinct marine cephalopod?', 'Ammonite', [['Trilobite', 'Trilobites are segmented arthropods, not coiled shells.', 'The spiral shell is the giveaway.'], ['Brachiopod', 'Brachiopods have two shells but not the same spiral coil.', 'Think coiled cephalopod.'], ['Coprolite', 'Coprolites are fossilized droppings, not shells.', 'The shell geometry matters.']], 'Ammonites were extinct marine cephalopods with coiled shells, useful for dating rocks.', { kind: 'fossil', bg: '#e9eef0', body: '#9a7a53', accent: '#6d4f35', accent2: '#dbc097', pattern: 'bands' }),
  q(6_107_003, 'Classic Fossils', 'Brachiopod slot', 'Which fossil looks like a small clam-like shell but belongs to a different group with unequal valves?', 'Brachiopod', [['Ammonite', 'Ammonites are coiled shells.', 'This is a hinged shell, not a spiral.'], ['Shark tooth', 'A shark tooth is triangular and pointed.', 'The shell shape points elsewhere.'], ['Trace fossil', 'Trace fossils preserve activity, not usually a shell body.', 'This is a body fossil.']], 'Brachiopods are marine animals with two shells; their fossils are common in Paleozoic rocks.', { kind: 'fossil', bg: '#eef0df', body: '#b89f78', accent: '#7f6240', accent2: '#e0d0b2', pattern: 'bands' }),
  q(6_107_004, 'Trace Fossils', 'Footprint slot', 'Which fossil preserves an animal track rather than the animal body itself?', 'Footprint fossil', [['Body fossil', 'A body fossil preserves remains like bone, shell, or leaf tissue.', 'Tracks are evidence of activity.'], ['Coprolite', 'Coprolite preserves fossilized feces, not a footprint.', 'Different trace fossil.'], ['Petrified wood', 'Petrified wood preserves plant tissue replaced by minerals.', 'No wood grain is shown.']], 'Footprint fossils are trace fossils: they preserve behavior or activity rather than body parts.', { kind: 'fossil', bg: '#eee6d8', body: '#a7835b', accent: '#65442a', accent2: '#d5bd9a', pattern: 'spots' }),
  q(6_107_005, 'Plant Fossils', 'Leaf imprint slot', 'Which fossil is a flat impression showing veins and leaf outline?', 'Leaf imprint', [['Petrified wood', 'Petrified wood preserves woody tissue in three dimensions.', 'This is a flat leaf impression.'], ['Ammonite', 'Ammonites are coiled marine shells.', 'The vein pattern points to a plant.'], ['Coprolite', 'Coprolites are fossilized feces.', 'The leaf outline rules that out.']], 'Leaf imprints preserve the shape and vein patterns of ancient leaves in sedimentary rock.', { kind: 'fossil', bg: '#e8efe1', body: '#8b7a58', accent: '#4f6b42', accent2: '#c8bd9f', pattern: 'grain' }),
  q(6_107_006, 'Plant Fossils', 'Petrified wood slot', 'Which fossil forms when wood tissue is replaced by minerals but keeps wood-like grain?', 'Petrified wood', [['Leaf imprint', 'Leaf imprints are flat outlines, not mineralized logs.', 'Wood grain and replacement point to petrified wood.'], ['Bone fossil', 'Bone fossils preserve skeletal tissue, not tree structure.', 'The grain clue matters.'], ['Coprolite', 'Coprolites preserve fossilized feces, not wood tissue.', 'Use the wood texture.']], 'Petrified wood forms when minerals replace plant tissue while preserving wood structure.', { kind: 'fossil', bg: '#f0eadf', body: '#9a6c45', accent: '#5e3c24', accent2: '#c59b6d', pattern: 'grain' }),
  q(6_107_007, 'Teeth and Bones', 'Shark tooth slot', 'Which fossil is a triangular pointed tooth often found because sharks shed many teeth?', 'Shark tooth', [['Dinosaur claw', 'A claw is curved and often thicker, not a flat triangular tooth.', 'The tooth shape is the clue.'], ['Ammonite', 'Ammonites are spiral shells.', 'No coiled shell is shown.'], ['Coprolite', 'Coprolites are fossilized droppings.', 'A tooth is a body fossil.']], 'Shark teeth fossilize commonly because sharks shed and replace teeth throughout life.', { kind: 'fossil', bg: '#e6eef1', body: '#6f6b62', accent: '#2f2d2a', accent2: '#e8dfcd', pattern: 'shine' }),
  q(6_107_008, 'Teeth and Bones', 'Dinosaur bone slot', 'Which fossil is a mineralized skeletal part from a dinosaur rather than a track or shell?', 'Dinosaur bone', [['Dinosaur footprint', 'A footprint records movement, not the bone itself.', 'The prompt asks for a skeletal part.'], ['Ammonite', 'Ammonites are marine shell fossils.', 'This is vertebrate bone.'], ['Coprolite', 'Coprolite may come from an animal, but it is fossilized feces, not bone.', 'Look for skeletal structure.']], 'Dinosaur bones are body fossils where original bone material may be mineralized or replaced.', { kind: 'fossil', bg: '#efe8dc', body: '#c2aa85', accent: '#7b6041', accent2: '#ead9bd', pattern: 'segments' }),
  q(6_107_009, 'Coprolites', 'Coprolite spiral slot', 'Which fossil is fossilized feces, sometimes spiral or twisted from an ancient animal gut?', 'Coprolite', [['Ammonite', 'Ammonites are coiled shells with chamber structure.', 'This is ancient waste, not a shell.'], ['Petrified wood', 'Petrified wood preserves plant tissue.', 'The twisted scat-like form points to coprolite.'], ['Footprint fossil', 'Footprints preserve tracks, not droppings.', 'Different trace fossil.']], 'Coprolites are fossilized feces. They can reveal diet, digestion, and ancient ecosystems.', { kind: 'fossil', bg: '#efe7d9', body: '#6a4d36', accent: '#3f2b1e', accent2: '#9a7654', pattern: 'segments' }),
  q(6_107_010, 'Coprolites', 'Coprolite pellet slot', 'Which fossil may look like a cluster of mineralized pellets rather than a bone or shell?', 'Coprolite', [['Trilobite', 'Trilobites preserve segmented arthropod bodies.', 'Pellet-like fossil waste points to coprolite.'], ['Brachiopod', 'Brachiopods preserve shell valves.', 'This is not a hinged shell.'], ['Leaf imprint', 'Leaf imprints show plant outlines and veins.', 'No leaf pattern is shown.']], 'Some coprolites preserve pellet-like droppings, especially when the original feces had that form.', { kind: 'fossil', bg: '#eee8dc', body: '#71553c', accent: '#4a3424', accent2: '#a3835f', pattern: 'pellets' }),
  q(6_107_011, 'Coprolites', 'Fish coprolite slot', 'Which trace fossil can preserve fish scales or bone fragments inside ancient feces?', 'Coprolite', [['Fish fossil', 'A fish fossil preserves the fish body or skeleton itself.', 'Fragments inside feces point to coprolite.'], ['Shark tooth', 'A shark tooth is a single tooth fossil.', 'The clue mentions contents inside waste.'], ['Burrow fossil', 'Burrows preserve animal movement through sediment.', 'This trace fossil is digestive evidence.']], 'Coprolites may contain undigested fragments such as bones, scales, seeds, or shells.', { kind: 'fossil', bg: '#e9ece3', body: '#5e4935', accent: '#2f332e', accent2: '#8f7659', pattern: 'speckles' }),
  q(6_107_012, 'Coprolites', 'Carnivore coprolite slot', 'Which fossilized dropping is most likely to contain bone chips from prey?', 'Carnivore coprolite', [['Herbivore coprolite', 'Herbivore coprolites more often show plant matter, seeds, or fibrous material.', 'Bone chips point toward carnivore diet.'], ['Petrified wood', 'Petrified wood contains plant grain, not prey bones.', 'This is digestive evidence.'], ['Dinosaur footprint', 'A footprint does not contain food remains.', 'Look for diet clues.']], 'Carnivore coprolites can preserve bone fragments, giving evidence about ancient food webs.', { kind: 'fossil', bg: '#f0e7da', body: '#5a3d2c', accent: '#e7dbc8', accent2: '#8a6042', pattern: 'speckles' }),
  q(6_107_013, 'Coprolites', 'Herbivore coprolite slot', 'Which fossilized dropping is most likely to preserve plant fragments, seeds, or fibrous texture?', 'Herbivore coprolite', [['Carnivore coprolite', 'Carnivore coprolites are more likely to contain bone or scales.', 'Plant fragments point to herbivore diet.'], ['Leaf imprint', 'A leaf imprint preserves a whole leaf outline, not digested plant bits.', 'This is fossilized feces.'], ['Brachiopod', 'Brachiopods are shelled marine animals.', 'The diet clue points elsewhere.']], 'Herbivore coprolites can preserve plant tissues and help reconstruct ancient diets.', { kind: 'fossil', bg: '#edf0dc', body: '#6c5c37', accent: '#466b35', accent2: '#9d8b55', pattern: 'grain' }),
  q(6_107_014, 'Coprolites', 'Coprolite vs rock slot', 'A lumpy brown fossil contains tiny inclusions and no crystal faces. Which answer best fits?', 'Coprolite', [['Quartz nodule', 'Quartz usually shows glassy mineral texture or crystal faces, not digestive inclusions.', 'Inclusions and lumpy form suggest coprolite.'], ['Basalt', 'Basalt is dark volcanic rock, usually fine-grained and not full of dietary fragments.', 'This clue is paleontology, not volcanology.'], ['Ammonite', 'Ammonites show organized shell coiling.', 'The lumpy non-shell shape points away from ammonite.']], 'Coprolites can look rock-like, so identification relies on shape, inclusions, context, and sometimes lab analysis.', { kind: 'fossil', bg: '#ece6d8', body: '#6b5138', accent: '#332519', accent2: '#a68964', pattern: 'speckles' }),
  q(6_107_015, 'Coprolites', 'Coprolite detective slot', 'Which fossil is valuable because it can tell paleontologists what an extinct animal ate?', 'Coprolite', [['Footprint fossil', 'Footprints reveal movement, gait, and behavior but usually not diet.', 'Diet clues point to coprolite.'], ['Dinosaur bone', 'Bones reveal anatomy and growth but not direct meal contents.', 'Food remains can be inside fossil feces.'], ['Petrified wood', 'Petrified wood tells us about ancient plants, not an animal meal.', 'The clue says what an animal ate.']], 'Coprolites are funny, but scientifically serious: they can preserve direct evidence of diet and ecosystem relationships.', { kind: 'fossil', bg: '#eee8dc', body: '#63462f', accent: '#4a2f20', accent2: '#a07c58', pattern: 'pellets' }),
]

const _baseGuessTheRockQuestions: Question[] = [
  q(6_100_001, 'Igneous Rocks', 'Basalt field sketch', 'Which rock or mineral is this dark, fine-grained cartoon specimen most likely showing?', 'Basalt', [['Granite', 'Granite is usually coarse-grained with visible crystals.', 'Dark fine grains point toward basalt.' ], ['Sandstone', 'Sandstone usually looks grainy and sedimentary, not dark and fine igneous.', 'Think lava cooled quickly at the surface.' ], ['Marble', 'Marble is metamorphic and often crystalline or veined.', 'Use the dark volcanic look.']], 'Basalt is a dark, fine-grained igneous rock formed from quickly cooled lava.', { kind: 'rock', bg: '#dcefe8', body: '#2f3a3d', accent: '#536065', pattern: 'speckles' }),
  q(6_100_002, 'Igneous Rocks', 'Granite field sketch', 'Which rock is suggested by the pale body with scattered big crystal flecks?', 'Granite', [['Basalt', 'Basalt is usually fine-grained and dark.', 'Large visible crystals point to slow cooling underground.' ], ['Obsidian', 'Obsidian looks glassy rather than speckled with crystals.', 'Look for interlocking grains.' ], ['Limestone', 'Limestone is sedimentary and often fossil-rich or dull.', 'This sketch emphasizes coarse igneous crystals.']], 'Granite is an intrusive igneous rock with visible mineral grains, often quartz, feldspar, and mica.', { kind: 'rock', bg: '#eaf2df', body: '#c8bbb0', accent: '#f4efe6', pattern: 'speckles' }),
  q(6_100_003, 'Igneous Rocks', 'Obsidian field sketch', 'Which rock matches the black, glassy, sharp-edged look?', 'Obsidian', [['Pumice', 'Pumice is full of holes and usually much lighter.', 'Glassy fracture is the key clue.' ], ['Slate', 'Slate splits into sheets but is not volcanic glass.', 'This is about shine and conchoidal fracture.' ], ['Gneiss', 'Gneiss has bands, not a glassy surface.', 'No layered striping is shown.']], 'Obsidian is volcanic glass formed when lava cools so quickly that crystals do not grow.', { kind: 'rock', bg: '#e7ecf4', body: '#15191d', accent: '#353a42', pattern: 'shine' }),
  q(6_100_004, 'Igneous Rocks', 'Pumice field sketch', 'Which rock is light-colored and full of bubble holes from trapped gas?', 'Pumice', [['Obsidian', 'Obsidian is glassy and dense-looking, not frothy.', 'The bubble texture matters most.' ], ['Quartz', 'Quartz is a mineral crystal, not a vesicular lava rock.', 'Look for many gas pockets.' ], ['Marble', 'Marble is metamorphosed limestone and lacks vesicles.', 'The holes point to volcanic gas.']], 'Pumice is a vesicular volcanic rock; gas bubbles leave many holes and can make it very light.', { kind: 'rock', bg: '#e9f0e1', body: '#d5d0bd', accent: '#ede8d8', pattern: 'spots' }),
  q(6_100_005, 'Sedimentary Rocks', 'Sandstone field sketch', 'Which rock is most likely made from compacted sand grains?', 'Sandstone', [['Granite', 'Granite has interlocking crystals, not rounded sand grains.', 'Think sediment built from weathered particles.' ], ['Basalt', 'Basalt is dark volcanic rock.', 'The tan grainy texture is the clue.' ], ['Slate', 'Slate is metamorphic and sheet-like.', 'Sandstone is clastic and gritty.']], 'Sandstone forms when sand-sized sediment is compacted and cemented.', { kind: 'rock', bg: '#eef0df', body: '#d49a5b', accent: '#e6c18a', pattern: 'grain' }),
  q(6_100_006, 'Sedimentary Rocks', 'Limestone field sketch', 'Which rock often forms from shells, coral fragments, or chemical precipitation in warm shallow seas?', 'Limestone', [['Sandstone', 'Sandstone is made mostly of sand grains.', 'The pale fossil-like flecks point to carbonate rock.' ], ['Gneiss', 'Gneiss is metamorphic with bands.', 'This question is about marine carbonate material.' ], ['Obsidian', 'Obsidian is volcanic glass.', 'The setting clue points away from igneous rock.']], 'Limestone is a carbonate sedimentary rock often linked to shells, reefs, and calcium carbonate deposits.', { kind: 'rock', bg: '#e4f1ed', body: '#d9d2bc', accent: '#f5f0da', pattern: 'speckles' }),
  q(6_100_007, 'Metamorphic Rocks', 'Slate field sketch', 'Which rock is best known for splitting into thin flat sheets?', 'Slate', [['Limestone', 'Limestone reacts with acid but does not split into neat sheets.', 'The flat cleavage is the clue.' ], ['Conglomerate', 'Conglomerate contains rounded pebbles.', 'No pebble mix is shown.' ], ['Pumice', 'Pumice is bubbly volcanic rock.', 'This is a foliated metamorphic texture.']], 'Slate is a low-grade metamorphic rock with cleavage that lets it split into thin sheets.', { kind: 'rock', bg: '#e9edf1', body: '#4a5560', accent: '#6c7884', pattern: 'bands' }),
  q(6_100_008, 'Metamorphic Rocks', 'Marble field sketch', 'Which metamorphic rock is suggested by pale crystalline stone with soft veins?', 'Marble', [['Slate', 'Slate is dark and sheet-like.', 'Marble is crystalline and often veined.' ], ['Basalt', 'Basalt is dark igneous rock.', 'The pale veined look points elsewhere.' ], ['Sandstone', 'Sandstone is gritty and sedimentary.', 'Metamorphosed limestone becomes marble.']], 'Marble forms when limestone is metamorphosed into a crystalline rock.', { kind: 'rock', bg: '#eef4f1', body: '#ede9df', accent: '#c5c2ba', pattern: 'bands' }),
  q(6_100_009, 'Metamorphic Rocks', 'Gneiss field sketch', 'Which rock is most associated with strong light-and-dark mineral banding?', 'Gneiss', [['Granite', 'Granite may have speckles but not the strong metamorphic bands.', 'Banding is the giveaway.' ], ['Limestone', 'Limestone is sedimentary carbonate rock.', 'This is high-grade metamorphic texture.' ], ['Obsidian', 'Obsidian is glassy, not banded with minerals.', 'Look for alternating stripes.']], 'Gneiss is a high-grade metamorphic rock with distinct compositional banding.', { kind: 'rock', bg: '#e9f1ee', body: '#7b6f65', accent: '#d9d2c4', pattern: 'bands' }),
  q(6_100_010, 'Sedimentary Rocks', 'Conglomerate field sketch', 'Which rock is made of rounded pebbles cemented together?', 'Conglomerate', [['Breccia', 'Breccia has angular fragments rather than rounded pebbles.', 'Rounded clasts point to transport by water.' ], ['Slate', 'Slate has fine layers, not pebble clasts.', 'Look for mixed rounded pieces.' ], ['Quartz', 'Quartz is a mineral, not a pebble-cemented rock.', 'The texture is clastic sedimentary.']], 'Conglomerate is a sedimentary rock made of rounded clasts cemented in a matrix.', { kind: 'rock', bg: '#eef0e3', body: '#b88a5e', accent: '#d8c19a', pattern: 'pellets' }),
  q(6_100_011, 'Minerals', 'Quartz field sketch', 'Which mineral is commonly clear to milky, hard enough to scratch glass, and grows as hexagonal crystals?', 'Quartz', [['Calcite', 'Calcite is softer and reacts with acid.', 'Hardness and crystal habit point to quartz.' ], ['Gypsum', 'Gypsum is much softer.', 'A fingernail can scratch gypsum, not quartz.' ], ['Pumice', 'Pumice is a rock with vesicles, not a single hard crystal mineral.', 'The question asks for a mineral.']], 'Quartz is a hard silicate mineral common in many rocks and often seen as clear or milky crystals.', { kind: 'rock', bg: '#e8f3f5', body: '#dce8ec', accent: '#ffffff', pattern: 'shine' }),
  q(6_100_012, 'Minerals', 'Amethyst field sketch', 'Which purple variety of quartz is being hinted at?', 'Amethyst', [['Obsidian', 'Obsidian is black volcanic glass.', 'The purple crystal clue matters.' ], ['Granite', 'Granite is a rock made of several minerals.', 'This is a quartz variety.' ], ['Limestone', 'Limestone is carbonate rock, not purple quartz.', 'Use color plus crystal context.']], 'Amethyst is the purple variety of quartz, colored by trace impurities and radiation effects.', { kind: 'rock', bg: '#eee9f5', body: '#8a63b0', accent: '#c6a7ee', pattern: 'shine' }),
]

const _baseGuessThePlantQuestions: Question[] = [
  q(6_104_001, 'North America', 'Sugar maple slot', 'The slot lands on a lobed leaf that turns fiery red-orange in autumn. Which plant is it?', 'Sugar maple', [['Poison ivy', 'Poison ivy usually has three leaflets, not a single lobed maple leaf.', 'Use the leaf shape.' ], ['Saguaro cactus', 'Saguaro is a cactus with arms, not a broadleaf tree.', 'The autumn leaf clue matters.' ], ['Lavender', 'Lavender has narrow aromatic leaves and purple flower spikes.', 'This is a tree leaf.']], 'Sugar maple is native to eastern North America and famous for lobed leaves, autumn color, and maple syrup sap.', { kind: 'plant', bg: '#eef1df', body: '#d94b35', accent: '#925f2c', accent2: '#f2a23f', pattern: 'bands' }),
  q(6_104_002, 'North America', 'Saguaro slot', 'Which plant has a tall columnar cactus body with upward arms, native to the Sonoran Desert?', 'Saguaro cactus', [['Barrel cactus', 'Barrel cacti are shorter and barrel-shaped.', 'The tall arms are the giveaway.' ], ['Joshua tree', 'Joshua trees branch with spiky leaf clusters, not cactus arms.', 'Look for columnar cactus shape.' ], ['Agave', 'Agaves grow as rosettes of thick leaves.', 'This sketch is upright and columnar.']], 'Saguaro cacti are iconic Sonoran Desert plants with tall columns and arm-like branches.', { kind: 'plant', bg: '#f1ebdc', body: '#4f9a65', accent: '#2e6f4a', accent2: '#74bd7f', pattern: 'speckles' }),
  q(6_104_003, 'Latin America', 'Monstera slot', 'Which tropical plant has large glossy leaves with dramatic natural splits and holes?', 'Monstera deliciosa', [['Banana plant', 'Banana leaves are huge but usually not naturally holey like monstera.', 'The split-leaf pattern is the clue.' ], ['Coffee plant', 'Coffee has smaller oval leaves and berries.', 'This is a large ornamental tropical leaf.' ], ['Oak', 'Oak leaves are lobed but not glossy split tropical leaves.', 'Use the fenestrations.']], 'Monstera deliciosa is native to tropical forests of southern Mexico and Central America and has fenestrated leaves.', { kind: 'plant', bg: '#e3f0df', body: '#247a4c', accent: '#f3f7e9', accent2: '#49a267', pattern: 'spots' }),
  q(6_104_004, 'Latin America', 'Cacao slot', 'Which plant grows pods on the trunk that contain beans used to make chocolate?', 'Cacao tree', [['Coffee plant', 'Coffee produces small cherries rather than large trunk pods.', 'Chocolate beans come from cacao pods.' ], ['Maize', 'Maize grows ears on tall grasses.', 'The pod-on-tree clue points to cacao.' ], ['Avocado tree', 'Avocados are fleshy fruits, not ridged cacao pods with beans.', 'Use the chocolate clue.']], 'Cacao is native to tropical Latin America; its pods contain seeds used to make chocolate.', { kind: 'plant', bg: '#edf0de', body: '#4d8a49', accent: '#9b5532', accent2: '#77a95d', pattern: 'pellets' }),
  q(6_104_005, 'Europe', 'Lavender slot', 'The slot shows narrow gray-green leaves with purple flower spikes. What plant is it?', 'Lavender', [['Rosemary', 'Rosemary has narrow aromatic leaves but not the same purple flower spike display.', 'The purple spikes are the clue.' ], ['Tulip', 'Tulips have cup-shaped flowers and broad leaves.', 'This sketch is a spike-flowered herb.' ], ['Holly', 'Holly has glossy spiky leaves and berries.', 'No berry clusters are shown.']], 'Lavender is strongly associated with Mediterranean Europe and is recognized by aromatic narrow leaves and purple flower spikes.', { kind: 'plant', bg: '#eee9f4', body: '#6e8b67', accent: '#7b58bd', accent2: '#9b7ede', pattern: 'speckles' }),
  q(6_104_006, 'Europe', 'English oak slot', 'Which European tree is suggested by rounded lobed leaves and acorns?', 'English oak', [['Sugar maple', 'Maple leaves have pointed lobes and paired winged seeds, not acorns.', 'Acorns point to oak.' ], ['Olive tree', 'Olives have narrow silvery leaves and small fruits.', 'This is a lobed broadleaf.' ], ['Lavender', 'Lavender is a small herb, not a tree with acorns.', 'Use scale and fruit clue.']], 'English oak is native across much of Europe and is recognized by rounded lobed leaves and acorns.', { kind: 'plant', bg: '#e8f0dc', body: '#5e9a54', accent: '#8b5e32', accent2: '#7cb26b', pattern: 'pellets' }),
  q(6_104_007, 'Asia', 'Bamboo slot', 'Which plant has jointed hollow stems and narrow leaves, with many species native to Asia?', 'Bamboo', [['Sugarcane', 'Sugarcane also has jointed stems but thicker grassy canes grown for sugar.', 'The slender clustered culms fit bamboo.' ], ['Sakura', 'Cherry trees have woody branches and blossoms, not hollow canes.', 'Use the cane joints.' ], ['Rice', 'Rice is a grass grown in paddies but not tall woody culms.', 'This sketch shows bamboo-like stems.']], 'Bamboos are fast-growing grasses with jointed culms; many species are native across Asia.', { kind: 'plant', bg: '#e6f1df', body: '#5aaa4f', accent: '#356f32', accent2: '#8bc876', pattern: 'bands' }),
  q(6_104_008, 'Asia', 'Cherry blossom slot', 'Which plant is hinted by pale pink spring blossoms on a small tree branch?', 'Cherry blossom', [['Lotus', 'Lotus grows in water with round leaves and large flowers.', 'This is a flowering tree branch.' ], ['Bamboo', 'Bamboo has jointed canes, not pink blossoms.', 'The blossom cluster is the clue.' ], ['Tea plant', 'Tea plants have evergreen leaves and small white flowers.', 'The pink spring display points to cherry.']], 'Cherry blossoms are culturally iconic in Japan and other parts of East Asia, especially for spring flowering displays.', { kind: 'plant', bg: '#f4eaf0', body: '#f5aac5', accent: '#7d563e', accent2: '#ffd6e3', pattern: 'speckles' }),
  q(6_104_009, 'Oceania', 'Eucalyptus slot', 'Which Australian tree has long sickle-shaped leaves and aromatic oils?', 'Eucalyptus', [['Kelp', 'Kelp is marine algae, not a tree.', 'The aromatic leaves point to eucalyptus.' ], ['Tea plant', 'Tea has smaller glossy leaves.', 'This is an Australian tree clue.' ], ['Oak', 'Oaks have lobed leaves and acorns.', 'The leaf shape is different.']], 'Eucalyptus trees are widespread in Australia and often have aromatic, narrow, curved leaves.', { kind: 'plant', bg: '#e5efed', body: '#789b86', accent: '#536f5e', accent2: '#a6c0ad', pattern: 'bands' }),
  q(6_104_010, 'Africa', 'Baobab slot', 'Which tree has a huge bottle-like trunk and sparse branches, famous in African savannas?', 'Baobab', [['Palm tree', 'Palms have tall slender trunks with fronds at the top.', 'The swollen trunk is the clue.' ], ['Acacia', 'Acacias have flatter umbrella crowns and thorns.', 'Baobab has the bottle-like trunk.' ], ['Bamboo', 'Bamboo has jointed stems, not a massive trunk.', 'Use the silhouette.']], 'Baobabs are iconic trees of African landscapes, recognized by swollen trunks used to store water.', { kind: 'plant', bg: '#f0eadc', body: '#8f6b4d', accent: '#537044', accent2: '#b8926d', pattern: 'grain' }),
]

const _baseGuessTheBirdQuestions: Question[] = [
  q(6_101_001, 'Garden Birds', 'Robin field sketch', 'Which bird is suggested by a gray-brown body and a warm orange-red breast?', 'American robin', [['Northern cardinal', 'A cardinal is mostly bright red with a crest.', 'The orange breast with gray-brown back points to robin.' ], ['Blue jay', 'Blue jays are blue and white with a crest.', 'Use the breast color.' ], ['Mallard', 'Mallards are ducks with broad bills and waterbird bodies.', 'This sketch is a perching bird.']], 'American robins are often recognized by their orange-red breast and gray-brown upperparts.', { kind: 'bird', bg: '#e9f2df', body: '#6f6c63', accent: '#f08a44', accent2: '#c55b32', pattern: 'speckles' }),
  q(6_101_002, 'Garden Birds', 'Cardinal field sketch', 'Which bird is bright red with a crest and a chunky seed-cracking bill?', 'Northern cardinal', [['American robin', 'Robins have orange breasts but are not mostly bright red.', 'The crest is a major clue.' ], ['House sparrow', 'Sparrows are smaller brown streaked birds.', 'This is a bold red bird.' ], ['Barn owl', 'Barn owls have pale heart-shaped faces.', 'The silhouette is not an owl.']], 'Northern cardinals are famous for bright red plumage, a crest, and a stout conical bill.', { kind: 'bird', bg: '#f1eadf', body: '#d72f2f', accent: '#e49d42', accent2: '#a91f28', pattern: 'bands' }),
  q(6_101_003, 'Garden Birds', 'Blue jay field sketch', 'Which bird is blue, white, and black with a noisy crest?', 'Blue jay', [['Bald eagle', 'Bald eagles are large raptors with white heads and brown bodies.', 'This is a crested backyard bird.' ], ['Mallard', 'Mallards are ducks, not crested perching birds.', 'Look at the blue-and-white pattern.' ], ['Hummingbird', 'Hummingbirds are tiny with needle bills.', 'The bill and body are not hummingbird-like.']], 'Blue jays are crested songbirds with blue, white, and black patterning.', { kind: 'bird', bg: '#e0eff7', body: '#4c8ed9', accent: '#1e2f46', accent2: '#f6f8fb', pattern: 'bands' }),
  q(6_101_004, 'Water Birds', 'Mallard field sketch', 'Which water bird has a green head, yellow bill, and duck-shaped body?', 'Mallard', [['Canada goose', 'Canada geese have long black necks and white chin patches.', 'This is a duck with a colored head.' ], ['Great blue heron', 'Herons are tall wading birds.', 'The body shape is not long-legged.' ], ['Woodpecker', 'Woodpeckers cling to tree trunks and have chisel bills.', 'The waterbird body is the clue.']], 'Male mallards are easy to spot by their glossy green heads, yellow bills, and duck silhouette.', { kind: 'bird', bg: '#e3f0ed', body: '#7b5b38', accent: '#e4b733', accent2: '#16705c', pattern: 'bands' }),
  q(6_101_005, 'Water Birds', 'Canada goose field sketch', 'Which bird has a long black neck with a pale chin patch?', 'Canada goose', [['Mallard', 'Mallards are smaller ducks with short necks.', 'The long neck and chin patch point to goose.' ], ['Flamingo', 'Flamingos are pink with very long legs.', 'No pink wading shape is shown.' ], ['Penguin', 'Penguins are flightless marine birds with flipper-like wings.', 'This is a goose profile.']], 'Canada geese are often identified by their black head and neck plus a white chinstrap patch.', { kind: 'bird', bg: '#eaf0e8', body: '#6b5b46', accent: '#f1eadb', accent2: '#15191c', pattern: 'bands' }),
  q(6_101_006, 'Tiny Birds', 'Hummingbird field sketch', 'Which bird is tiny with a needle-like bill and fast hovering flight?', 'Hummingbird', [['Blue jay', 'Blue jays are larger crested birds.', 'Needle bill plus hovering points to hummingbird.' ], ['Robin', 'Robins hop and forage with normal songbird bills.', 'The bill is too long and thin.' ], ['Goose', 'Geese are large waterfowl.', 'Scale and bill shape rule that out.']], 'Hummingbirds hover and feed from flowers using long narrow bills.', { kind: 'bird', bg: '#e6f4ed', body: '#38a06f', accent: '#333333', accent2: '#ca3f69', pattern: 'shine' }),
  q(6_101_007, 'Raptors', 'Bald eagle field sketch', 'Which raptor has a dark body, white head, and hooked yellow bill?', 'Bald eagle', [['Barn owl', 'Barn owls have heart-shaped pale faces, not white heads on dark bodies.', 'Look for the eagle profile.' ], ['Blue jay', 'Blue jays are small crested songbirds.', 'This is a large raptor.' ], ['Great blue heron', 'Herons have spear bills, not hooked bills.', 'Hooked bill means raptor.']], 'Adult bald eagles have white heads, dark bodies, and hooked bills for feeding as raptors.', { kind: 'bird', bg: '#e6edf3', body: '#4d3427', accent: '#e5b72d', accent2: '#f5f2e8', pattern: 'shine' }),
  q(6_101_008, 'Night Birds', 'Barn owl field sketch', 'Which bird is known for a pale heart-shaped face?', 'Barn owl', [['Bald eagle', 'Bald eagles have white heads but not heart-shaped facial disks.', 'The face shape matters.' ], ['Cardinal', 'Cardinals are red crested songbirds.', 'This is an owl clue.' ], ['Mallard', 'Mallards are ducks.', 'No duck bill or waterbird body is shown.']], 'Barn owls have distinctive pale heart-shaped facial disks that help focus sound.', { kind: 'bird', bg: '#efe9dc', body: '#c79b63', accent: '#eee7d8', accent2: '#f7f2e8', pattern: 'speckles' }),
  q(6_101_009, 'Sea Birds', 'Penguin field sketch', 'Which bird is flightless, black-and-white, and built for swimming?', 'Penguin', [['Great blue heron', 'Herons are long-legged wading birds.', 'Penguins have compact swimming bodies.' ], ['Canada goose', 'Geese fly and have long necks.', 'The flipper-like wing clue points to penguin.' ], ['Hummingbird', 'Hummingbirds are tiny hovering birds.', 'This is a marine swimming bird.']], 'Penguins are flightless seabirds with streamlined bodies and flipper-like wings.', { kind: 'bird', bg: '#e6f3f5', body: '#222832', accent: '#f0b640', accent2: '#f8f6ee', pattern: 'bands' }),
  q(6_101_010, 'Wading Birds', 'Flamingo field sketch', 'Which bird is pink with very long legs and a curved filtering bill?', 'Flamingo', [['Robin', 'Robins are small perching birds.', 'Long legs and pink plumage rule out robin.' ], ['Mallard', 'Mallards are ducks with short legs.', 'This is a tall wading bird.' ], ['Barn owl', 'Barn owls are nocturnal raptors, not pink waders.', 'Use body shape first.']], 'Flamingos are wading birds with long legs, pink coloration, and specialized bills for filter feeding.', { kind: 'bird', bg: '#f4eaf0', body: '#ee7fa4', accent: '#26222a', accent2: '#f6a8c0', pattern: 'bands' }),
  q(6_101_011, 'Wading Birds', 'Heron field sketch', 'Which bird is tall and gray-blue with long legs and a spear-like bill?', 'Great blue heron', [['Canada goose', 'Geese have thicker bodies and shorter bills.', 'The spear bill and long legs point to heron.' ], ['Blue jay', 'Blue jays are small crested songbirds.', 'This is a wader.' ], ['Penguin', 'Penguins are compact swimmers, not long-legged waders.', 'Use the leg length.']], 'Great blue herons are tall wading birds that hunt with long spear-like bills.', { kind: 'bird', bg: '#e5eef1', body: '#6f8796', accent: '#d6b45c', accent2: '#2f4858', pattern: 'bands' }),
  q(6_101_012, 'Tree Birds', 'Woodpecker field sketch', 'Which bird has a chisel bill and clings to trees while pecking for insects?', 'Woodpecker', [['Hummingbird', 'Hummingbirds have needle bills for nectar.', 'A chisel bill points to woodpecker.' ], ['Mallard', 'Mallards are water birds.', 'Tree-clinging is the context clue.' ], ['Flamingo', 'Flamingos are long-legged waders.', 'The feeding behavior is different.']], 'Woodpeckers use stiff tails, strong feet, and chisel-like bills to forage on wood.', { kind: 'bird', bg: '#edf0df', body: '#1f2933', accent: '#d63636', accent2: '#f5f0df', pattern: 'speckles' }),
]

const _baseGuessTheAnimalQuestions: Question[] = [
  q(6_102_001, 'Mammals', 'Fox field sketch', 'Which animal is suggested by a small canine body, pointed ears, and a bushy tail?', 'Red fox', [['White-tailed deer', 'Deer have hooves, long legs, and no bushy canine tail.', 'Look at body shape first.' ], ['Rabbit', 'Rabbits have long ears and hopping hind legs.', 'The pointed snout and tail point to fox.' ], ['Turtle', 'Turtles have shells.', 'This is a mammal silhouette.']], 'Red foxes have pointed ears, narrow muzzles, and bushy tails.', { kind: 'animal', bg: '#f1eadf', body: '#d16b36', accent: '#f4efe5', accent2: '#b94b2e', pattern: 'shine' }),
  q(6_102_002, 'Mammals', 'Deer field sketch', 'Which animal has long legs, hooves, and a small tail flag?', 'White-tailed deer', [['Fox', 'Foxes are canines with paws and bushy tails.', 'Hooves and long legs point to deer.' ], ['Bear', 'Bears are heavy plantigrade mammals.', 'This sketch is slender and hoofed.' ], ['Dolphin', 'Dolphins have flippers and live in water.', 'The body is terrestrial.']], 'White-tailed deer are hoofed mammals with long legs and a tail that can flash white.', { kind: 'animal', bg: '#e7f0df', body: '#b88455', accent: '#f3eee0', accent2: '#8a5c38', pattern: 'spots' }),
  q(6_102_003, 'Mammals', 'Elephant field sketch', 'Which animal is identified by a trunk, large ears, and pillar-like legs?', 'Elephant', [['Giraffe', 'Giraffes have long necks and spots, not trunks.', 'The trunk is decisive.' ], ['Bear', 'Bears do not have trunks or huge ears.', 'Use the face shape.' ], ['Horse', 'Horses have hooves and manes, not trunks.', 'The trunk rules it out.']], 'Elephants are large mammals recognized by trunks, tusks, and broad ears.', { kind: 'animal', bg: '#e7ecef', body: '#8b9296', accent: '#e8e0ce', accent2: '#a0a8ac', pattern: 'bands' }),
  q(6_102_004, 'Mammals', 'Giraffe field sketch', 'Which animal has an extremely long neck and patchy coat pattern?', 'Giraffe', [['Horse', 'Horses have shorter necks and no giraffe patches.', 'The neck length is the main clue.' ], ['Deer', 'Deer are hoofed but lack the extreme neck.', 'This is the taller browsing specialist.' ], ['Zebra', 'Zebras have stripes, not patches.', 'Pattern type matters.']], 'Giraffes are tall browsing mammals with long necks and irregular coat patches.', { kind: 'animal', bg: '#f2ead8', body: '#d9a85b', accent: '#8d5b35', accent2: '#f0c571', pattern: 'spots' }),
  q(6_102_005, 'Mammals', 'Kangaroo field sketch', 'Which animal has huge hind legs, a long balancing tail, and small forelimbs?', 'Kangaroo', [['Rabbit', 'Rabbits hop but do not use a massive balancing tail.', 'The long thick tail points to kangaroo.' ], ['Fox', 'Foxes have four similar walking legs.', 'The hind-leg emphasis is different.' ], ['Frog', 'Frogs are amphibians with squat bodies.', 'This is a mammal with a tail.']], 'Kangaroos use powerful hind legs and a long tail for balance.', { kind: 'animal', bg: '#f0eadf', body: '#b57648', accent: '#e8d4bd', accent2: '#a0623d', pattern: 'shine' }),
  q(6_102_006, 'Amphibians', 'Frog field sketch', 'Which animal has a squat body, long jumping legs, and moist-looking skin?', 'Frog', [['Turtle', 'Turtles have shells.', 'The jumping legs point to frog.' ], ['Snake', 'Snakes lack legs entirely.', 'This sketch has folded hind legs.' ], ['Rabbit', 'Rabbits are furry mammals with long ears.', 'Moist skin and amphibian posture matter.']], 'Frogs are amphibians with powerful hind legs and moist skin.', { kind: 'animal', bg: '#e4f2dc', body: '#5ca35d', accent: '#f2d67b', accent2: '#7cc576', pattern: 'speckles' }),
  q(6_102_007, 'Reptiles', 'Snake field sketch', 'Which animal is legless, elongated, and moves with a sinuous body?', 'Snake', [['Turtle', 'Turtles have legs and shells.', 'Legless body is the clue.' ], ['Dolphin', 'Dolphins have fins and live in water.', 'This is a reptile body plan.' ], ['Fox', 'Foxes have four legs and fur.', 'No legs are shown.']], 'Snakes are legless reptiles with elongated bodies and scales.', { kind: 'animal', bg: '#e9efd9', body: '#6e8d3f', accent: '#d9c06a', accent2: '#496229', pattern: 'bands' }),
  q(6_102_008, 'Reptiles', 'Turtle field sketch', 'Which animal is best recognized by its hard shell?', 'Turtle', [['Frog', 'Frogs have no shell.', 'The shell is the main clue.' ], ['Rabbit', 'Rabbits are mammals with fur and ears.', 'A shell points to turtle.' ], ['Bat', 'Bats have wings, not shells.', 'Use the body armor clue.']], 'Turtles are reptiles with protective shells formed from ribs and other bony structures.', { kind: 'animal', bg: '#e4f0e0', body: '#4d7c4b', accent: '#7b5d34', accent2: '#86a35a', pattern: 'segments' }),
  q(6_102_009, 'Mammals', 'Bear field sketch', 'Which animal has a large heavy body, rounded ears, and broad paws?', 'Bear', [['Deer', 'Deer are slender and hoofed.', 'Broad paws and heavy body point to bear.' ], ['Fox', 'Foxes are smaller and more narrow-bodied.', 'The silhouette is too heavy.' ], ['Horse', 'Horses have hooves and longer legs.', 'This is a stocky pawed mammal.']], 'Bears are large mammals with heavy bodies, short tails, rounded ears, and broad paws.', { kind: 'animal', bg: '#eee8dd', body: '#6d4a35', accent: '#9a755c', accent2: '#5a3929', pattern: 'shine' }),
  q(6_102_010, 'Mammals', 'Rabbit field sketch', 'Which animal is small with long ears and powerful hopping hind legs?', 'Rabbit', [['Kangaroo', 'Kangaroos are much larger and have long balancing tails.', 'The small body plus long ears point to rabbit.' ], ['Fox', 'Foxes have pointed snouts and bushy tails.', 'This sketch has long ears.' ], ['Frog', 'Frogs have moist skin and no long external ears.', 'The ear clue matters.']], 'Rabbits are small mammals with long ears and hind legs adapted for hopping.', { kind: 'animal', bg: '#edf1e6', body: '#b7a08d', accent: '#f0d5d1', accent2: '#d4c1ae', pattern: 'speckles' }),
  q(6_102_011, 'Marine Mammals', 'Dolphin field sketch', 'Which animal has a streamlined body, dorsal fin, and flippers?', 'Dolphin', [['Shark', 'Sharks are fish, not mammals, and often have vertical tail movement clues.', 'The question asks animal ID from a friendly mammal-like sketch.' ], ['Penguin', 'Penguins are birds with flipper-like wings.', 'Dorsal fin and dolphin body point elsewhere.' ], ['Snake', 'Snakes are legless reptiles without fins.', 'This is aquatic and finned.']], 'Dolphins are marine mammals with streamlined bodies, flippers, and dorsal fins.', { kind: 'animal', bg: '#e1f0f5', body: '#597f98', accent: '#dcecf2', accent2: '#80a9be', pattern: 'shine' }),
  q(6_102_012, 'Mammals', 'Bat field sketch', 'Which mammal has wings made from stretched skin between long fingers?', 'Bat', [['Bird', 'Birds have feathered wings, not skin membranes between fingers.', 'Wing structure is the clue.' ], ['Flying squirrel', 'Flying squirrels glide with a membrane but do not have true powered wings like bats.', 'Bats are the flying mammals.' ], ['Owl', 'Owls are birds with feathered wings and facial disks.', 'This is a mammal clue.']], 'Bats are mammals capable of powered flight using skin membranes stretched over elongated fingers.', { kind: 'animal', bg: '#e8e5f0', body: '#343042', accent: '#625978', accent2: '#1f1d2c', pattern: 'bands' }),
]

const _baseGuessTheFishQuestions: Question[] = [
  q(6_105_001, 'North America', 'Largemouth bass slot', 'The slot lands on a greenish freshwater fish with a big mouth reaching past the eye. Which fish is it?', 'Largemouth bass', [['Rainbow trout', 'Trout have spots and often a pink side stripe, not an oversized mouth.', 'The mouth size is the clue.' ], ['Bluegill', 'Bluegill are deeper-bodied panfish with smaller mouths.', 'This is a bass profile.' ], ['Atlantic cod', 'Cod are marine fish with chin barbels.', 'This is freshwater bass.']], 'Largemouth bass are North American freshwater predators recognized by a large mouth and greenish body.', { kind: 'fish', bg: '#e4f1e2', body: '#5e8a45', accent: '#2f5a2f', accent2: '#8fb56e', pattern: 'bands' }),
  q(6_105_002, 'North America', 'Rainbow trout slot', 'Which fish is suggested by spots and a pinkish stripe along the side?', 'Rainbow trout', [['Largemouth bass', 'Bass have large mouths and a different stripe pattern.', 'The pink side stripe points to rainbow trout.' ], ['Clownfish', 'Clownfish are orange reef fish with white bands.', 'Wrong habitat and pattern.' ], ['Piranha', 'Piranhas are deeper-bodied South American fish.', 'This looks like a trout.']], 'Rainbow trout are native to Pacific drainages of North America and are known for spots and a rosy lateral stripe.', { kind: 'fish', bg: '#e5f0f2', body: '#8da9a5', accent: '#e68093', accent2: '#b9d1ca', pattern: 'speckles' }),
  q(6_105_003, 'Latin America', 'Piranha slot', 'Which South American fish has a deep body and a reputation for sharp teeth?', 'Piranha', [['Rainbow trout', 'Trout are more streamlined and spotted.', 'The deep body and Amazon clue point elsewhere.' ], ['Clownfish', 'Clownfish are small orange reef fish with white bands.', 'This is a freshwater South American fish.' ], ['Koi', 'Koi are ornamental carp, not sharp-toothed predators.', 'Use the teeth clue.']], 'Piranhas are South American freshwater fish, many with strong jaws and sharp teeth.', { kind: 'fish', bg: '#e6f1ec', body: '#7b8790', accent: '#c44d3d', accent2: '#aeb8bd', pattern: 'shine' }),
  q(6_105_004, 'Latin America', 'Discus slot', 'Which Amazon basin fish is round, flat, and brightly patterned like a living coin?', 'Discus', [['Piranha', 'Piranhas are deep-bodied but not typically shown as round ornamental disks.', 'Round flat body plus bright pattern points to discus.' ], ['Angelfish', 'Angelfish have tall triangular fins.', 'The body shape here is more disk-like.' ], ['Cod', 'Cod are long marine fish.', 'This is tropical freshwater.']], 'Discus are colorful, laterally compressed fish native to the Amazon basin.', { kind: 'fish', bg: '#e6eef3', body: '#e28b42', accent: '#2e82a8', accent2: '#f2cf6f', pattern: 'bands' }),
  q(6_105_005, 'Europe', 'Atlantic cod slot', 'Which fish is suggested by a long pale marine body with a small chin barbel?', 'Atlantic cod', [['Rainbow trout', 'Trout lack the cod chin barbel and have freshwater salmonid shapes.', 'The barbel is the clue.' ], ['Carp', 'Carp are freshwater and deeper-bodied.', 'This is a cold marine fish.' ], ['Clownfish', 'Clownfish are small orange reef fish.', 'Pattern and habitat are wrong.']], 'Atlantic cod are cold-water marine fish found around the North Atlantic, including European waters, with a small chin barbel.', { kind: 'fish', bg: '#e4eef2', body: '#a89b83', accent: '#655845', accent2: '#c9bea9', pattern: 'speckles' }),
  q(6_105_006, 'Europe/Asia', 'Common carp slot', 'Which fish is a sturdy freshwater species with barbels near the mouth, common across Europe and Asia?', 'Common carp', [['Atlantic cod', 'Cod are marine fish with a different body shape.', 'Freshwater plus carp-like body points to common carp.' ], ['Koi', 'Koi are ornamental varieties of carp, often brightly colored.', 'The wild sturdy fish is common carp.' ], ['Piranha', 'Piranhas are South American predators.', 'Wrong continent and shape.']], 'Common carp are freshwater fish native to Europe and Asia and widely introduced elsewhere.', { kind: 'fish', bg: '#e9f0df', body: '#9b8351', accent: '#6e5a32', accent2: '#d1b978', pattern: 'speckles' }),
  q(6_105_007, 'Asia', 'Koi slot', 'Which ornamental carp is often white, orange, black, or gold in garden ponds?', 'Koi', [['Common carp', 'Koi are domesticated ornamental carp, but the bright patchy pond form is the best answer.', 'Use the ornamental color clue.' ], ['Clownfish', 'Clownfish are saltwater reef fish, not pond carp.', 'Habitat and body shape differ.' ], ['Discus', 'Discus are round Amazon fish.', 'This is a carp body.']], 'Koi are ornamental varieties of Amur/common carp associated with Japanese pond culture.', { kind: 'fish', bg: '#eaf1ec', body: '#f4f1e6', accent: '#e36f32', accent2: '#2d2d2d', pattern: 'spots' }),
  q(6_105_008, 'Asia/Pacific', 'Clownfish slot', 'Which small reef fish is orange with white bands and lives among sea anemones?', 'Clownfish', [['Koi', 'Koi are pond carp and do not live in anemones.', 'Anemone partnership points to clownfish.' ], ['Discus', 'Discus are Amazon freshwater fish.', 'This is marine reef ecology.' ], ['Rainbow trout', 'Trout are freshwater salmonids.', 'Wrong color pattern and habitat.']], 'Clownfish are Indo-Pacific reef fish famous for orange bodies, white bands, and anemone associations.', { kind: 'fish', bg: '#e4f1f3', body: '#f47a2a', accent: '#ffffff', accent2: '#1d2a33', pattern: 'bands' }),
  q(6_105_009, 'Africa', 'Nile tilapia slot', 'Which African freshwater fish is a hardy cichlid widely farmed for food?', 'Nile tilapia', [['Discus', 'Discus are Amazon cichlids but not the hardy farmed African food fish.', 'The Nile and aquaculture clues point to tilapia.' ], ['Atlantic cod', 'Cod are marine North Atlantic fish.', 'Wrong habitat.' ], ['Bluegill', 'Bluegill are North American sunfish.', 'Wrong region.']], 'Nile tilapia are African freshwater cichlids widely farmed around the world.', { kind: 'fish', bg: '#e5f0e9', body: '#6f8b72', accent: '#425b48', accent2: '#9db79c', pattern: 'bands' }),
  q(6_105_010, 'Oceania', 'Barramundi slot', 'Which Indo-Pacific fish is silver, predatory, and famous in northern Australian waters?', 'Barramundi', [['Rainbow trout', 'Trout are salmonids and not the iconic northern Australian predator.', 'Use the region and silver predator clues.' ], ['Clownfish', 'Clownfish are small reef fish with bands.', 'This is a larger predatory fish.' ], ['Carp', 'Carp are freshwater bottom-feeders with different shape.', 'The silver sport fish profile points to barramundi.']], 'Barramundi are large predatory fish native to the Indo-West Pacific and popular in Australia.', { kind: 'fish', bg: '#e1eef1', body: '#bcc6c8', accent: '#7f9398', accent2: '#dce4e5', pattern: 'shine' }),
]

const _baseTracksAndScatQuestions: Question[] = [
  q(6_103_001, 'Pellet Clues', 'Deer scat sketch', 'Which field sign is shown by many small oval pellets in a clustered pile?', 'Deer scat', [['Cow pat', 'A cow pat is a broad flat splat, not a pile of small pellets.', 'Pellet shape points to deer.' ], ['Fox scat', 'Fox scat is usually twisted and tapered.', 'This sketch emphasizes pellets.' ], ['Bird droppings', 'Bird droppings are often splashy white-and-dark marks.', 'These are solid pellets.']], 'Deer scat is commonly seen as clusters of small oval pellets, especially when the diet is woody or dry.', { kind: 'scat', bg: '#edf0df', body: '#5b3f2f', accent: '#70513d', pattern: 'pellets' }),
  q(6_103_002, 'Pellet Clues', 'Rabbit scat sketch', 'Which field sign is made of small round dry pellets, often scattered near feeding spots?', 'Rabbit scat', [['Bear scat', 'Bear scat is much larger and variable.', 'Scale and pellet form point to rabbit.' ], ['Goose scat', 'Goose scat is often greenish and tubular.', 'Rabbit pellets are rounder and drier.' ], ['Owl pellet', 'Owl pellets are regurgitated masses with bones or fur.', 'This is scat, not a pellet of prey remains.']], 'Rabbit scat is typically small, round, dry pellets.', { kind: 'scat', bg: '#eef1e8', body: '#6f563e', accent: '#8a6f53', pattern: 'pellets' }),
  q(6_103_003, 'Large Mammals', 'Bear scat sketch', 'Which scat is usually large, chunky, and may show berries, seeds, or mixed plant material?', 'Bear scat', [['Rabbit scat', 'Rabbit scat is small round pellets.', 'This is much larger and mixed.' ], ['Bird droppings', 'Bird droppings are usually white-and-dark splashes.', 'The chunky material points elsewhere.' ], ['Deer scat', 'Deer scat is usually many oval pellets.', 'This is not a neat pellet cluster.']], 'Bear scat varies with diet but is often large and may contain visible plant material, berries, or seeds.', { kind: 'scat', bg: '#eee8de', body: '#5d4637', accent: '#8b5a3b', accent2: '#6f8a45', pattern: 'speckles' }),
  q(6_103_004, 'Carnivore Clues', 'Fox scat sketch', 'Which scat is often twisted, tapered at the end, and may contain hair or small bones?', 'Fox scat', [['Cow pat', 'Cow pats are broad and flat.', 'Tapered twisted shape points to a carnivore.' ], ['Deer scat', 'Deer scat is pellet-like.', 'Hair and tapering are the clues.' ], ['Earthworm casting', 'Worm castings are tiny soil coils, not carnivore scat.', 'The sign is much larger.']], 'Fox scat is often twisted and tapered, with hair, bone, or seed remains depending on diet.', { kind: 'scat', bg: '#f0eadf', body: '#5b3a27', accent: '#7b5132', pattern: 'segments' }),
  q(6_103_005, 'Carnivore Clues', 'Coyote scat sketch', 'Which scat is larger than fox scat and often rope-like with hair from prey?', 'Coyote scat', [['Rabbit scat', 'Rabbit scat is round dry pellets.', 'Rope-like shape points to canid scat.' ], ['Goose scat', 'Goose scat is often green and grassy.', 'Hair from prey points to a carnivore.' ], ['Horse droppings', 'Horse droppings are rounded fibrous balls.', 'This is a tapered carnivore sign.']], 'Coyote scat is often rope-like, tapered, and may include hair or bone fragments.', { kind: 'scat', bg: '#eee9dc', body: '#4f382a', accent: '#7d695b', pattern: 'segments' }),
  q(6_103_006, 'Bird Clues', 'Bird dropping sketch', 'Which field sign often appears as a dark spot with a white uric-acid splash?', 'Bird droppings', [['Deer scat', 'Deer scat forms oval pellets.', 'The white splash is a bird clue.' ], ['Cow pat', 'Cow pats are broad brown-green piles.', 'This is a small white-and-dark mark.' ], ['Fox scat', 'Fox scat is tapered and may contain hair.', 'The white cap/splash is different.']], 'Bird droppings often combine dark fecal material with white uric acid.', { kind: 'scat', bg: '#e8eef1', body: '#333333', accent: '#f7f6ec', pattern: 'shine' }),
  q(6_103_007, 'Waterfowl Clues', 'Goose scat sketch', 'Which field sign is often greenish, tubular, and found in grassy parks near water?', 'Goose scat', [['Rabbit scat', 'Rabbit pellets are round and dry.', 'Goose scat is more tubular and grassy.' ], ['Owl pellet', 'Owl pellets contain prey remains and are regurgitated.', 'This is droppings near grazing areas.' ], ['Bear scat', 'Bear scat is much larger and chunkier.', 'Scale and setting point to goose.']], 'Goose scat is often greenish and tubular because geese graze heavily on grass.', { kind: 'scat', bg: '#e5f0df', body: '#5f7b3d', accent: '#8aa35a', pattern: 'segments' }),
  q(6_103_008, 'Domestic Clues', 'Cow pat sketch', 'Which sign is a broad, flat, splatted pat from a grazing animal?', 'Cow pat', [['Horse droppings', 'Horse droppings are more ball-like piles.', 'The flat pat shape points to cow.' ], ['Deer scat', 'Deer scat is pellet clusters.', 'A broad splat is different.' ], ['Fox scat', 'Fox scat is twisted and tapered.', 'This is not carnivore scat.']], 'Cow pats are broad and flat because cattle digestion and diet produce wetter dung than pellet-forming grazers.', { kind: 'scat', bg: '#edf1dc', body: '#5d4a35', accent: '#806341', pattern: 'spots' }),
  q(6_103_009, 'Domestic Clues', 'Horse droppings sketch', 'Which sign appears as fibrous rounded balls in a pile?', 'Horse droppings', [['Cow pat', 'Cow pats are flatter and wetter-looking.', 'Rounded fibrous balls point to horse.' ], ['Bird droppings', 'Bird droppings are white-and-dark splashes.', 'This is a large herbivore sign.' ], ['Fox scat', 'Fox scat is rope-like and tapered.', 'The rounded pile shape is different.']], 'Horse droppings often appear as rounded fibrous balls because horses process grasses differently from ruminants.', { kind: 'scat', bg: '#f0eadf', body: '#6a4b33', accent: '#98724f', pattern: 'pellets' }),
  q(6_103_010, 'Not Quite Scat', 'Owl pellet sketch', 'Which field sign is a regurgitated mass that may contain tiny bones and fur?', 'Owl pellet', [['Bird droppings', 'Bird droppings are waste, often with white uric acid.', 'Owl pellets are regurgitated prey remains.' ], ['Rabbit scat', 'Rabbit scat is many small round pellets.', 'Bones and fur point elsewhere.' ], ['Goose scat', 'Goose scat is grassy and tubular.', 'The prey-remain clue does not fit.']], 'Owl pellets are regurgitated indigestible prey parts, not feces, and often contain bones or fur.', { kind: 'scat', bg: '#ece8df', body: '#59514a', accent: '#d8d1c4', pattern: 'speckles' }),
  q(6_103_011, 'Soil Signs', 'Earthworm casting sketch', 'Which sign is a tiny coiled pile of processed soil left at the surface?', 'Earthworm casting', [['Rabbit scat', 'Rabbit pellets are separate round droppings, not soil coils.', 'This is processed soil.' ], ['Fox scat', 'Fox scat is larger, twisted, and animal-based.', 'Scale and soil texture matter.' ], ['Cow pat', 'Cow pats are broad and flat.', 'This is tiny and coiled.']], 'Earthworm castings are small piles of nutrient-rich soil passed through an earthworm.', { kind: 'scat', bg: '#edf0df', body: '#6b563d', accent: '#8e7554', pattern: 'segments' }),
  q(6_103_012, 'Track Clues', 'Hoof track sketch', 'Which track clue shows two pointed hoof halves rather than paw pads?', 'Deer track', [['Fox track', 'Fox tracks show paw pads and claw marks, not split hooves.', 'Two hoof halves point to deer.' ], ['Bear track', 'Bear tracks are broad with five toes.', 'This is a narrow hoof print.' ], ['Rabbit track', 'Rabbit tracks show paired hind feet and smaller forefeet.', 'The split hoof is the clue.']], 'Deer tracks usually show two pointed hoof halves and no paw pad.', { kind: 'scat', bg: '#e6efe5', body: '#4d3b2d', accent: '#755b43', pattern: 'bands' }),
]

const _fieldIdentificationPolishBundles = [
  {
    subTopics: FIELD_IDENTIFICATION_SUB_TOPICS,
    mentorHints: FIELD_IDENTIFICATION_MENTOR_HINTS,
    correctShortened: FIELD_IDENTIFICATION_CORRECT_SHORTENED,
    source: 'fieldIdentification',
  },
]

export const guessTheBodyPartQuestions = runPolish(_baseGuessTheBodyPartQuestions, _fieldIdentificationPolishBundles)
export const guessTheFossilQuestions = runPolish(_baseGuessTheFossilQuestions, _fieldIdentificationPolishBundles)
export const guessTheRockQuestions = runPolish(_baseGuessTheRockQuestions, _fieldIdentificationPolishBundles)
export const guessThePlantQuestions = runPolish(_baseGuessThePlantQuestions, _fieldIdentificationPolishBundles)
export const guessTheBirdQuestions = runPolish(_baseGuessTheBirdQuestions, _fieldIdentificationPolishBundles)
export const guessTheAnimalQuestions = runPolish(_baseGuessTheAnimalQuestions, _fieldIdentificationPolishBundles)
export const guessTheFishQuestions = runPolish(_baseGuessTheFishQuestions, _fieldIdentificationPolishBundles)
export const tracksAndScatQuestions = runPolish(_baseTracksAndScatQuestions, _fieldIdentificationPolishBundles)
