import { makeSimpleQuestion } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  GUESS_THE_ARTIFACT_SUB_TOPICS,
  GUESS_THE_ARTIFACT_MENTOR_HINTS,
  GUESS_THE_ARTIFACT_CORRECT_SHORTENED,
} from './guessTheArtifactPolish'
import type { Question, QuestionMedia } from './types'

const source = 'Floe artifact identification bank v1'

type ArtifactDifficulty = 'kids' | 'adults' | 'experts'

function media(src: string, label: string, caption: string): QuestionMedia[] {
  return [
    {
      type: 'image',
      src,
      alt: `Cartoon field-guide illustration of ${label}.`,
      label,
      caption,
    },
  ]
}

function q(
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrongEntries: Array<[string, string]>,
  lesson: string,
  difficulty: ArtifactDifficulty,
  imageSrc: string,
  imageCaption: string,
): Question {
  const wrong = wrongEntries.slice(0, 3).map(([label, whyWrong]): [string, string, string] => [
    label,
    whyWrong,
    'Look at material, shape, and likely use before guessing the culture.',
  ])
  return {
    ...makeSimpleQuestion(id, 'Fun', chapter, title, prompt, correct, wrong, lesson, source),
    difficultyTier: difficulty,
    media: media(imageSrc, title, imageCaption),
  }
}

// ---------------------------------------------------------------------------
// Ancient Artifacts — 20 hand-curated museum-object cards
// ---------------------------------------------------------------------------

const _baseGuessTheAncientArtifactQuestions: Question[] = [
  q(6_160_001, 'Ancient Artifacts', 'Antikythera mechanism', 'A corroded bronze instrument with intricate geared dials was hauled from a Greek shipwreck. Which artifact is this?', 'Antikythera mechanism',
    [['Astrolabe', 'Astrolabes are flat brass instruments for star altitude, not a geared bronze mechanism with multiple dials.'], ['Mechanical clock from Renaissance Europe', 'The Antikythera dates to the 1st century BC, more than a thousand years before Renaissance European clocks.'], ['Sundial', 'A sundial uses a single gnomon and a flat dial; this device contains dozens of meshed gears.']],
    'The Antikythera mechanism is a ~150-100 BC Greek analog computer for predicting astronomical positions and eclipses.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/antikythera-mechanism-cartoon.png', 'Bronze gear cluster; multiple concentric dials.'),
  q(6_160_002, 'Ancient Artifacts', 'Code of Hammurabi', 'A tall black diorite stele with a king-and-deity scene above dense cuneiform text. Which artifact?', 'Code of Hammurabi',
    [['Rosetta Stone', 'The Rosetta Stone is granodiorite and inscribed in three scripts, not a single cuneiform legal code.'], ['Stele of the Vultures', 'The Stele of the Vultures depicts a battle and is earlier Sumerian, not a Babylonian law code.'], ['Cyrus Cylinder', 'The Cyrus Cylinder is a baked clay cylinder, not a tall stone stele.']],
    'The Code of Hammurabi (~1754 BC) is one of the earliest extant written legal codes, carved on a 2.25m basalt stele now at the Louvre.',
    'adults', '/assets/guess-the-thing/ancient-artifacts/code-of-hammurabi-cartoon.png', 'Tall black stele; king above, dense cuneiform below.'),
  q(6_160_003, 'Ancient Artifacts', 'Cyrus Cylinder', 'A baked clay barrel-shaped cylinder covered with Akkadian cuneiform, dated to the 6th century BC. Which artifact?', 'Cyrus Cylinder',
    [['Gilgamesh Tablet', 'The Gilgamesh tablets are flat rectangular clay tablets, not a barrel-shaped cylinder.'], ['Kish Tablet', 'The Kish Tablet is a small early pictographic limestone tablet, not a cylindrical baked clay artifact.'], ['Standard of Ur', 'The Standard of Ur is a wooden box with mosaic panels, not a cylindrical inscription.']],
    'The Cyrus Cylinder (~539 BC) records Cyrus the Great\'s capture of Babylon and his policies, sometimes called an early charter of rights.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/cyrus-cylinder-cartoon.png', 'Barrel-shaped baked clay cylinder; circumferential cuneiform.'),
  q(6_160_004, 'Ancient Artifacts', 'Gilgamesh tablet', 'A clay tablet with cuneiform recounting a flood narrative that predates the Hebrew Bible. Which artifact?', 'Gilgamesh tablet',
    [['Code of Hammurabi', 'The Code of Hammurabi is a legal code on a stele, not a flood-narrative clay tablet.'], ['Kish Tablet', 'The Kish Tablet shows early pictographs, not the developed cuneiform narrative of Gilgamesh.'], ['Phaistos Disc', 'The Phaistos Disc is stamped Minoan symbols on a clay disc, not Mesopotamian cuneiform.']],
    'The Epic of Gilgamesh tablets, especially Tablet XI, contain a flood narrative that influenced and predates the Genesis account.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/gilgamesh-tablet-cartoon.png', 'Rectangular clay tablet; dense cuneiform lines.'),
  q(6_160_005, 'Ancient Artifacts', 'Jade burial suit', 'A suit assembled from hundreds of polished jade plaques wired together with gold thread, found in a Han Dynasty tomb. Which artifact?', 'Jade burial suit',
    [['Sutton Hoo helmet', 'The Sutton Hoo helmet is a single iron-and-bronze Anglo-Saxon piece, not an articulated jade suit.'], ['Terracotta warrior', 'Terracotta warriors are individual life-sized clay soldiers, not jade-plaque body armor.'], ['Mask of Tutankhamun', 'The mask of Tutankhamun is a single gold funeral mask, not a full-body jade suit.']],
    'Jade burial suits were reserved for Han Dynasty royalty; jade was believed to preserve the body, and thread color (gold/silver/copper) reflected rank.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/jade-burial-suit-cartoon.png', 'Body-shaped articulated jade-plate suit; gold-thread joints.'),
  q(6_160_006, 'Ancient Artifacts', 'Kish Tablet', 'A small limestone tablet with very early pictographic proto-cuneiform marks, often cited as one of the earliest known writing samples. Which artifact?', 'Kish Tablet',
    [['Rosetta Stone', 'The Rosetta Stone is a much later trilingual decree, not an early proto-cuneiform pictographic tablet.'], ['Phaistos Disc', 'The Phaistos Disc bears stamped Minoan symbols on terracotta, not Sumerian pictographs on limestone.'], ['Cyrus Cylinder', 'The Cyrus Cylinder is a much later baked clay cylinder with developed cuneiform, not early pictographs.']],
    'The Kish Tablet (~3500 BC) shows early Sumerian pictographs that became cuneiform, and is sometimes considered the oldest known writing artifact.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/kish-tablet-cartoon.png', 'Small flat limestone tablet; rows of pictographic marks.'),
  q(6_160_007, 'Ancient Artifacts', 'Lion-man of Hohlenstein-Stadel', 'A small ivory figurine with a lion\'s head on a human body, carved from mammoth tusk ~40,000 years ago. Which artifact?', 'Lion-man',
    [['Venus of Willendorf', 'The Venus of Willendorf is a limestone female figurine, not an ivory therianthrope.'], ['Standard of Ur', 'The Standard of Ur is a Sumerian wooden box, ~5000 years more recent and not a figurine.'], ['Phaistos Disc', 'The Phaistos Disc is a clay disc with stamped symbols, not a carved ivory figurine.']],
    'The Lion-man is among the earliest known figurative sculpture and the oldest known representation of a therianthrope (human-animal hybrid).',
    'experts', '/assets/guess-the-thing/ancient-artifacts/lion-man-cartoon.png', 'Standing figurine with feline head and human body; mammoth ivory.'),
  q(6_160_008, 'Ancient Artifacts', 'Lycurgus Cup', 'A 4th-century Roman cup carved from glass that appears green in reflected light and red when lit from inside. Which artifact?', 'Lycurgus Cup',
    [['Warka Vase', 'The Warka Vase is a carved alabaster vase from Uruk, not a color-changing Roman glass cup.'], ['Mask of Tutankhamun', 'The mask of Tutankhamun is solid gold, not glass.'], ['Standard of Ur', 'The Standard of Ur is a wooden box with shell-and-lapis mosaic, not a single glass vessel.']],
    'The Lycurgus Cup is a 4th-century Roman dichroic glass cup; its color shift comes from nanoscale gold-silver particles embedded in the glass.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/lycurgus-cup-cartoon.png', 'Carved glass cup with relief scene; appears green and red depending on lighting.'),
  q(6_160_009, 'Ancient Artifacts', 'Mask of Tutankhamun', 'A gold funeral mask with blue lapis lazuli stripes, found in a Valley of the Kings tomb. Which artifact?', 'Mask of Tutankhamun',
    [['Nefertiti Bust', 'The Nefertiti Bust is a painted limestone bust, not a gold-and-lapis funeral mask.'], ['Sutton Hoo helmet', 'The Sutton Hoo helmet is iron and bronze, not solid gold with lapis inlay.'], ['Jade burial suit', 'The jade burial suit is a body-covering jade plaque garment, not a face mask.']],
    'The funeral mask of Tutankhamun (~1323 BC) was discovered by Howard Carter in 1922 and remains the most iconic single artifact from ancient Egypt.',
    'kids', '/assets/guess-the-thing/ancient-artifacts/mask-of-tutankhamun-cartoon.png', 'Pharaoh\'s gold face mask; striped nemes headdress.'),
  q(6_160_010, 'Ancient Artifacts', 'Narmer Palette', 'A shield-shaped slate palette showing a king wearing two different crowns and smiting an enemy, ~3100 BC. Which artifact?', 'Narmer Palette',
    [['Code of Hammurabi', 'The Code of Hammurabi is a Babylonian basalt stele, not an Egyptian commemorative palette.'], ['Standard of Ur', 'The Standard of Ur is a Sumerian wooden box with mosaic panels, not an Egyptian carved stone palette.'], ['Phaistos Disc', 'The Phaistos Disc is a Minoan clay disc, not an Egyptian shield-shaped slate.']],
    'The Narmer Palette commemorates the unification of Upper and Lower Egypt under King Narmer; he wears both crowns to mark the new dual kingship.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/narmer-palette-cartoon.png', 'Shield-shaped slate palette; carved king with double crown smiting enemy.'),
  q(6_160_011, 'Ancient Artifacts', 'Nebra Sky Disk', 'A bronze disk with gold inlay showing a crescent moon, sun, and stars, dated to the Bronze Age. Which artifact?', 'Nebra Sky Disk',
    [['Phaistos Disc', 'The Phaistos Disc is clay with stamped script-like symbols, not a bronze disk with celestial gold inlay.'], ['Antikythera mechanism', 'The Antikythera mechanism is a complex Greek geared device, not a flat disk with inlay.'], ['Lycurgus Cup', 'The Lycurgus Cup is a carved Roman glass vessel, not a bronze disk.']],
    'The Nebra Sky Disk (~1600 BC, central Germany) is the oldest known concrete depiction of celestial phenomena; it may have aided seasonal timekeeping.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/nebra-sky-disk-cartoon.png', 'Bronze disk with gold-leaf sun, crescent moon, and star cluster.'),
  q(6_160_012, 'Ancient Artifacts', 'Nefertiti Bust', 'A painted limestone bust of an Egyptian queen with a tall blue crown, found at Amarna. Which artifact?', 'Nefertiti Bust',
    [['Mask of Tutankhamun', 'The mask of Tutankhamun is solid gold-and-lapis, not painted limestone.'], ['Narmer Palette', 'The Narmer Palette depicts a king smiting an enemy, not a single queen\'s portrait bust.'], ['Standard of Ur', 'The Standard of Ur is a Sumerian wooden box, not an Egyptian limestone portrait.']],
    'The Nefertiti Bust (~1345 BC) was sculpted by the workshop of Thutmose at Amarna; one eye remains unfinished, possibly intentionally.',
    'adults', '/assets/guess-the-thing/ancient-artifacts/nefertiti-bust-cartoon.png', 'Painted limestone bust; tall blue flat-topped crown.'),
  q(6_160_013, 'Ancient Artifacts', 'Oracle bone', 'A polished cattle scapula or turtle plastron incised with early Chinese characters used for divination. Which artifact?', 'Oracle bone',
    [['Kish Tablet', 'The Kish Tablet is Sumerian limestone with pictographs, not a Chinese divination bone.'], ['Gilgamesh tablet', 'The Gilgamesh tablets are Mesopotamian clay, not Chinese bone or shell.'], ['Standard of Ur', 'The Standard of Ur is a Sumerian wooden box, not a Chinese oracle bone.']],
    'Shang Dynasty oracle bones (~1200 BC) contain the earliest substantial corpus of Chinese writing; cracks from heating were interpreted as divine answers.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/oracle-bone-cartoon.png', 'Polished cattle scapula or turtle plastron; rows of incised early Chinese characters.'),
  q(6_160_014, 'Ancient Artifacts', 'Phaistos Disc', 'A small fired clay disc covered both sides with stamped symbols arranged in a spiral, from Minoan Crete. Which artifact?', 'Phaistos Disc',
    [['Nebra Sky Disk', 'The Nebra Sky Disk is bronze with gold celestial inlays, not stamped script-like symbols on terracotta.'], ['Kish Tablet', 'The Kish Tablet is limestone with Sumerian pictographs, not a stamped Minoan disc.'], ['Cyrus Cylinder', 'The Cyrus Cylinder is a baked clay barrel, not a flat disc.']],
    'The Phaistos Disc (~1700 BC) bears 241 symbols stamped (not written) in a spiral; the script remains undeciphered.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/phaistos-disc-cartoon.png', 'Flat fired clay disc; spiral of stamped symbols on both faces.'),
  q(6_160_015, 'Ancient Artifacts', 'Rosetta Stone', 'A granodiorite slab with the same decree in hieroglyphic, demotic, and ancient Greek. Which artifact?', 'Rosetta Stone',
    [['Code of Hammurabi', 'The Code of Hammurabi is a Babylonian stele with one cuneiform script, not a trilingual Egyptian decree.'], ['Narmer Palette', 'The Narmer Palette is a small shield-shaped slate, not a multi-script granodiorite stele.'], ['Cyrus Cylinder', 'The Cyrus Cylinder is a baked clay cylinder with one cuneiform inscription, not three parallel scripts.']],
    'The Rosetta Stone (196 BC, found 1799) provided the key to deciphering Egyptian hieroglyphs by comparing the same text in three scripts.',
    'kids', '/assets/guess-the-thing/ancient-artifacts/rosetta-stone-cartoon.png', 'Dark stele with three bands of script: hieroglyphic, demotic, Greek.'),
  q(6_160_016, 'Ancient Artifacts', 'Standard of Ur', 'A wooden box covered with mosaic panels of lapis lazuli, shell, and red limestone, showing war and peace scenes. Which artifact?', 'Standard of Ur',
    [['Narmer Palette', 'The Narmer Palette is Egyptian shield-shaped slate, not a Sumerian inlaid wooden box.'], ['Sutton Hoo helmet', 'The Sutton Hoo helmet is an Anglo-Saxon iron-and-bronze piece, not a Sumerian mosaic box.'], ['Code of Hammurabi', 'The Code of Hammurabi is a tall basalt stele, not a small inlaid box.']],
    'The Standard of Ur (~2600 BC) is a Sumerian box with two mosaic panels — "war" and "peace" — showing one of the earliest depictions of social hierarchy.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/standard-of-ur-cartoon.png', 'Trapezoidal wooden box; lapis-lazuli and shell mosaic panels of war and peace.'),
  q(6_160_017, 'Ancient Artifacts', 'Sulawesi cave art', 'A wall painting of a wild pig and human-animal figures, dated to about 45,000 years ago. Which artifact?', 'Sulawesi cave art',
    [['Lion-man', 'The Lion-man is a carved ivory figurine, not painted cave art.'], ['Lascaux cave paintings', 'Lascaux is in France and dates to ~17,000 years ago, much later than the ~45,000-year-old Sulawesi figurative art.'], ['Sutton Hoo helmet', 'The Sutton Hoo helmet is a 7th-century AD Anglo-Saxon metal artifact, not Paleolithic cave painting.']],
    'Sulawesi cave paintings include some of the earliest known figurative art and have shifted estimates of when symbolic image-making emerged.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/sulawesi-cave-art-cartoon.png', 'Rock-wall painting of a wild pig and stylized human-animal figures.'),
  q(6_160_018, 'Ancient Artifacts', 'Sutton Hoo helmet', 'An iron-and-bronze ceremonial helmet with a face mask, found in an Anglo-Saxon ship burial in Suffolk. Which artifact?', 'Sutton Hoo helmet',
    [['Mask of Tutankhamun', 'The mask of Tutankhamun is solid gold from an Egyptian tomb, not an iron-and-bronze Anglo-Saxon helmet.'], ['Jade burial suit', 'The jade burial suit is a full-body Han Dynasty Chinese garment, not an Anglo-Saxon helmet.'], ['Standard of Ur', 'The Standard of Ur is a Sumerian wooden box, not a helmet.']],
    'The Sutton Hoo helmet (~625 AD) came from a royal ship burial and is iconic of early medieval Anglo-Saxon material culture.',
    'adults', '/assets/guess-the-thing/ancient-artifacts/sutton-hoo-helmet-cartoon.png', 'Iron-and-bronze full-face helmet with crested ridge.'),
  q(6_160_019, 'Ancient Artifacts', 'Terracotta warrior', 'A life-sized clay soldier with individualized facial features, one of thousands in an emperor\'s tomb complex. Which artifact?', 'Terracotta warrior',
    [['Jade burial suit', 'The jade burial suit is a single body-covering jade-plaque garment, not a life-sized clay statue.'], ['Sutton Hoo helmet', 'The Sutton Hoo helmet is a single Anglo-Saxon piece, not a Chinese tomb soldier.'], ['Lion-man', 'The Lion-man is a tiny Paleolithic ivory figurine, not a life-sized clay warrior.']],
    'The Terracotta Army (~210 BC) was buried with Emperor Qin Shi Huang; each of the thousands of figures has individualized features.',
    'kids', '/assets/guess-the-thing/ancient-artifacts/terracotta-warrior-cartoon.png', 'Life-sized clay soldier in armor; individualized facial features.'),
  q(6_160_020, 'Ancient Artifacts', 'Warka Vase', 'A carved alabaster vase from Uruk with horizontal registers showing offerings to a goddess. Which artifact?', 'Warka Vase',
    [['Narmer Palette', 'The Narmer Palette is an Egyptian shield-shaped slate, not a Mesopotamian alabaster vase.'], ['Code of Hammurabi', 'The Code of Hammurabi is a tall stele with cuneiform, not a relief vase with offering scenes.'], ['Phaistos Disc', 'The Phaistos Disc is a stamped clay disc from Minoan Crete, not a Mesopotamian alabaster vase.']],
    'The Warka Vase (~3200 BC, Uruk) is among the earliest narrative reliefs and shows offerings to Inanna in stacked horizontal registers.',
    'experts', '/assets/guess-the-thing/ancient-artifacts/warka-vase-cartoon.png', 'Tall alabaster vase; horizontal carved registers of figures and offerings.'),
]

// ---------------------------------------------------------------------------
// Subject Artifact mini-lanes — 4 cards each across 7 subjects
// ---------------------------------------------------------------------------

const _baseGuessTheBusinessFinanceArtifactQuestions: Question[] = [
  q(6_161_001, 'Business and Finance Artifacts', 'Lydian lion coin', 'An electrum coin stamped with a roaring lion head, made in the 7th century BC. Which artifact?', 'Lydian lion coin',
    [['Roman denarius', 'The Roman denarius is a silver coin from centuries later, not an electrum Lydian piece with a lion stamp.'], ['VOC share certificate', 'A VOC share certificate is paper-based and from 17th-century Amsterdam, not an ancient stamped coin.'], ['Rai stone', 'Rai stones are large carved limestone disks from Yap, not portable stamped electrum coins.']],
    'The Lydian lion coin (~600 BC) is among the earliest known stamped coins; the lion head was the royal mark of King Alyattes.',
    'experts', '/assets/guess-the-thing/subject-artifacts/business-finance/lydian-lion-coin.png', 'Small electrum coin with stamped lion head.'),
  q(6_161_002, 'Business and Finance Artifacts', 'VOC share certificate', 'A printed Dutch document dated 1606 entitling the bearer to a fractional share in a chartered trading company. Which artifact?', 'VOC share certificate',
    [['Lydian lion coin', 'Lydian lion coins are ancient stamped electrum; this is an early-modern printed share document.'], ['Exchequer tally stick', 'A tally stick is a notched wooden record, not a printed share certificate.'], ['Rai stone', 'Rai stones are large stone disk money from Yap, not printed European securities.']],
    'The Dutch East India Company (Vereenigde Oostindische Compagnie) issued the first publicly tradable shares; this 1606 certificate is the earliest known surviving example.',
    'experts', '/assets/guess-the-thing/subject-artifacts/business-finance/voc-share-certificate.png', 'Early-modern printed paper share; ornate border and seal.'),
  q(6_161_003, 'Business and Finance Artifacts', 'Exchequer tally stick', 'A wooden stick notched along its length and then split into two halves so creditor and debtor each held one record. Which artifact?', 'Exchequer tally stick',
    [['Rai stone', 'Rai stones are large stone disks used as money in Yap, not split notched wooden records.'], ['VOC share certificate', 'A VOC share is a printed paper security, not a notched wooden stick.'], ['Lydian lion coin', 'A Lydian lion coin is a small stamped electrum piece, not a length of notched wood.']],
    'English Exchequer tally sticks (~12th–19th century) recorded debts by notch and were split lengthwise so the two halves had to match to verify the transaction.',
    'adults', '/assets/guess-the-thing/subject-artifacts/business-finance/exchequer-tally-stick.png', 'Wooden stick split lengthwise; matching notches along the edge.'),
  q(6_161_004, 'Business and Finance Artifacts', 'Rai stone', 'A massive carved limestone disk with a central hole, used as a form of money on a Pacific island. Which artifact?', 'Rai stone',
    [['Lydian lion coin', 'Lydian lion coins are small portable electrum pieces, not massive limestone disks.'], ['Exchequer tally stick', 'A tally stick is a small notched wooden record, not a large carved stone disk.'], ['Cowrie shell currency', 'Cowrie shells are small natural shell money, not large carved stone disks with central holes.']],
    'Rai stones from Yap (Micronesia) are large carved limestone disks; ownership transferred without physical movement, so value tracked social ledger rather than possession.',
    'experts', '/assets/guess-the-thing/subject-artifacts/business-finance/rai-stone-money.png', 'Large carved limestone disk with central hole; rests on edge.'),
]

const _baseGuessTheDigitalCultureArtifactQuestions: Question[] = [
  q(6_162_001, 'Digital Culture Artifacts', 'ENIAC vacuum tube', 'A glowing glass tube with a metal grid and filament inside, one of ~18,000 in an early room-sized computer. Which artifact?', 'ENIAC vacuum tube',
    [['Transistor', 'A transistor is a small solid-state semiconductor, not a glass vacuum tube with glowing filament.'], ['Punch card', 'A punch card is a paper data-input medium, not an active glass tube.'], ['Wooden computer mouse', 'A wooden computer mouse is a pointing input device, not a glowing tube for amplification or switching.']],
    'ENIAC (1945) used about 17,500 vacuum tubes; tubes acted as electronic switches before transistors took over.',
    'experts', '/assets/guess-the-thing/subject-artifacts/digital-culture/eniac-vacuum-tube.png', 'Glass tube with filament and metal grid; glowing inside.'),
  q(6_162_002, 'Digital Culture Artifacts', 'IBM 5150 PC', 'A beige boxy personal computer with a separate monitor, keyboard, and two floppy drives, released in 1981. Which artifact?', 'IBM 5150 PC',
    [['Apple II', 'The Apple II is from 1977 with a one-piece keyboard-and-CPU body and uses a different aesthetic, not the IBM 5150 beige tower.'], ['Commodore 64', 'The Commodore 64 is a keyboard-with-built-in-computer design, not a separate tower-monitor-keyboard combination.'], ['Wooden computer mouse', 'A wooden computer mouse is a single pointing device, not a complete desktop computer.']],
    'The IBM Personal Computer 5150 (1981) helped establish the open architecture and form factor that dominated business desktops for decades.',
    'adults', '/assets/guess-the-thing/subject-artifacts/digital-culture/ibm-5150-pc.png', 'Beige horizontal CPU; separate monitor on top; full-size keyboard.'),
  q(6_162_003, 'Digital Culture Artifacts', 'Wooden computer mouse', 'A small wooden box with one button and two perpendicular wheels on the bottom, the first computer pointing device. Which artifact?', 'Wooden computer mouse',
    [['IBM 5150 PC', 'The IBM 5150 is a full personal computer, not a single pointing device.'], ['Punch card', 'A punch card is paper input media, not a wooden pointing device with wheels.'], ['ENIAC vacuum tube', 'An ENIAC vacuum tube is glass with a glowing filament, not a wooden pointing device.']],
    'Doug Engelbart\'s 1964 wooden prototype used two perpendicular wheels to track X-Y motion; he demonstrated it publicly in 1968 at "The Mother of All Demos."',
    'experts', '/assets/guess-the-thing/subject-artifacts/digital-culture/wooden-computer-mouse.png', 'Small wooden block with single button; two perpendicular wheels underneath.'),
  q(6_162_004, 'Digital Culture Artifacts', 'Punch card', 'A rectangular paper card with rows of small rectangular holes, used to input programs and data to early computers. Which artifact?', 'Punch card',
    [['ENIAC vacuum tube', 'An ENIAC vacuum tube is glass with a filament, not a holed paper card.'], ['Wooden computer mouse', 'A wooden computer mouse is a pointing input device, not a punched-paper card.'], ['Floppy disk', 'A floppy disk is a magnetic plastic disk in a square jacket, not a rigid paper card with rectangular holes.']],
    'IBM\'s 80-column punch card (introduced 1928, standard for decades) encoded one character per column; the rectangular hole pattern survived into the early 1980s.',
    'kids', '/assets/guess-the-thing/subject-artifacts/digital-culture/punch-card.png', 'Rectangular paper card; rows of rectangular holes punched in columns.'),
]

const _baseGuessThePhilosophyArtifactQuestions: Question[] = [
  q(6_163_001, 'Philosophy Artifacts', 'Diogenes\' lantern', 'A small rustic clay or bronze oil lamp associated with a Greek philosopher who searched the marketplace for an honest person. Which artifact?', 'Diogenes\' lantern',
    [['Aladdin\'s lamp', 'Aladdin\'s lamp is from the Arabian Nights tale, not a Greek philosophical metaphor.'], ['Olympic torch', 'The Olympic torch is a ceremonial relay torch, not a small philosopher\'s lantern.'], ['Roman oil lamp', 'A generic Roman oil lamp is a household item; this lantern carries a specific Cynic-philosophy story.']],
    'Diogenes of Sinope (~4th century BC) reportedly carried a lantern through Athens in daylight, looking for "an honest man" — a Cynic critique of social hypocrisy.',
    'experts', '/assets/guess-the-thing/subject-artifacts/philosophy/diogenes-lantern.png', 'Small clay oil lamp with single handle and lit wick.'),
  q(6_163_002, 'Philosophy Artifacts', 'Socrates bust', 'A marble bust of a bald, broad-faced philosopher with a snub nose and thoughtful expression. Which artifact?', 'Socrates bust',
    [['Plato bust', 'Plato is typically depicted with a longer face, full hair, and beard, not Socrates\'s broad bald features.'], ['Aristotle bust', 'Aristotle is depicted with shorter hair and a longer face, not the snub-nosed bald Socrates type.'], ['Nefertiti bust', 'The Nefertiti bust is an Egyptian queen with a tall blue crown, not a Greek philosopher.']],
    'Roman copies of Greek originals fixed Socrates\'s iconography: bald, broad-faced, snub-nosed — features used to comic effect in Plato\'s dialogues.',
    'kids', '/assets/guess-the-thing/subject-artifacts/philosophy/socrates-bust.png', 'Marble bust; bald head, broad face, snub nose, contemplative expression.'),
  q(6_163_003, 'Philosophy Artifacts', 'Chak-pur sand mandala tool', 'A ridged metal funnel used by Tibetan Buddhist monks to deposit colored sand grains in precise patterns. Which artifact?', 'Chak-pur sand mandala tool',
    [['Calligraphy brush', 'A calligraphy brush is for ink on paper or silk, not for depositing grains of sand.'], ['Diogenes\' lantern', 'Diogenes\' lantern is a Greek oil lamp, not a Tibetan sand-deposition tool.'], ['Buddhist prayer wheel', 'A prayer wheel is a cylindrical hand-spun mantra device, not a ridged metal funnel for sand mandalas.']],
    'Chak-pur are paired ridged metal funnels; rubbing one against the other vibrates colored sand grains out in a controlled stream, used to construct intricate mandalas dissolved after completion.',
    'experts', '/assets/guess-the-thing/subject-artifacts/philosophy/chak-pur-sand-mandala-tool.png', 'Two ridged metal funnels held together; colored sand stream emerging.'),
  q(6_163_004, 'Philosophy Artifacts', 'Jade bi disc', 'A flat circular jade disk with a central hole, used in ancient Chinese ritual to symbolize heaven and metaphysical balance. Which artifact?', 'Jade bi disc',
    [['Rai stone', 'Rai stones are large carved limestone Pacific disks used as money, not flat jade ritual disks.'], ['Chak-pur', 'Chak-pur are Tibetan ridged metal funnels for sand mandalas, not flat jade disks.'], ['Phaistos disc', 'The Phaistos disc is a stamped clay Minoan disc, not a Chinese jade ritual disk.']],
    'Jade bi disks (~Neolithic onward in China) symbolized heaven (round) often paired with the cong (square) symbolizing earth — a structuring metaphor for cosmology and balance.',
    'experts', '/assets/guess-the-thing/subject-artifacts/philosophy/jade-bi-disc.png', 'Flat circular jade disk with central hole; smooth polished surface.'),
]

const _baseGuessTheExamPrepArtifactQuestions: Question[] = [
  q(6_164_001, 'Exam Prep Artifacts', 'Imperial exam cheat undershirt', 'A silk undershirt densely inscribed with miniature handwritten text from the Chinese Confucian classics. Which artifact?', 'Imperial exam cheat undershirt',
    [['Sumerian school tablet', 'A Sumerian school tablet is a small clay practice tablet, not a silk garment with miniature script.'], ['Slate writing board', 'A slate writing board is a reusable rigid student slate, not a silk undershirt.'], ['Hornbook primer', 'A hornbook is a paddle-shaped board for teaching young children, not an examination cheating tool.']],
    'During the Chinese imperial examinations (Ming/Qing era), candidates sometimes smuggled in silk undershirts inscribed with classical texts in tiny script — examiners searched aggressively to catch them.',
    'experts', '/assets/guess-the-thing/subject-artifacts/exam-prep/imperial-exam-cheat-undershirt.png', 'White silk undergarment covered in tightly packed miniature Chinese characters.'),
  q(6_164_002, 'Exam Prep Artifacts', 'Sumerian school tablet', 'A small clay tablet showing teacher cuneiform on one side and a student attempt copying it on the other. Which artifact?', 'Sumerian school tablet',
    [['Gilgamesh tablet', 'The Gilgamesh tablets are literary works, not pedagogical practice tablets used in scribal schools.'], ['Code of Hammurabi', 'The Code of Hammurabi is a public-display stele of laws, not a pedagogical school tablet.'], ['Phaistos disc', 'The Phaistos disc is a stamped Minoan clay disc, not a Sumerian student practice tablet.']],
    'Sumerian edubba (tablet-house) school tablets often show teacher cuneiform above with student practice rows below — early surviving artifacts of formal schooling.',
    'experts', '/assets/guess-the-thing/subject-artifacts/exam-prep/sumerian-school-tablet.png', 'Small clay tablet; teacher cuneiform above, student practice rows below.'),
  q(6_164_003, 'Exam Prep Artifacts', 'Slate writing board', 'A small rigid black writing surface used with chalk, reusable by erasing — common in 19th-century classrooms. Which artifact?', 'Slate writing board',
    [['Hornbook primer', 'A hornbook is a paddle with a parchment sheet under thin horn, not a black slate used with chalk.'], ['Punch card', 'A punch card is a paper data-input medium, not a reusable student writing surface.'], ['Sumerian school tablet', 'A Sumerian school tablet is clay; this is a hard rigid framed slate used with chalk.']],
    'Slate writing boards were standard student tools in the 19th and early 20th centuries — reusable when erased, replacing scarce paper for daily drills.',
    'kids', '/assets/guess-the-thing/subject-artifacts/exam-prep/slate-writing-board.png', 'Small framed black slate; chalk pencil; eraser.'),
  q(6_164_004, 'Exam Prep Artifacts', 'Abacus counting board', 'A rectangular frame containing rows of beads on rods, used to perform arithmetic by sliding beads. Which artifact?', 'Abacus',
    [['Slide rule', 'A slide rule uses logarithmic scales on sliding rules, not bead-and-rod columns.'], ['Slate writing board', 'A slate writing board is a flat writing surface, not a bead-and-rod arithmetic frame.'], ['Cuneiform tablet', 'A cuneiform tablet stores written marks; an abacus performs live arithmetic with movable beads.']],
    'The abacus has independent regional traditions (Chinese suanpan, Japanese soroban, Russian schoty) and remained the dominant arithmetic device for millennia before mechanical calculators.',
    'kids', '/assets/guess-the-thing/subject-artifacts/exam-prep/abacus-counting-board.png', 'Rectangular wood frame; rows of beads strung on horizontal rods.'),
]

const _baseGuessThePracticalSkillsArtifactQuestions: Question[] = [
  q(6_165_001, 'Practical Skills Artifacts', 'Neolithic hand axe', 'A teardrop-shaped piece of flint flaked on both faces, used for cutting and chopping. Which artifact?', 'Neolithic hand axe',
    [['Roman gladius', 'A gladius is a Roman iron short sword, not a knapped flint hand axe.'], ['Bronze Age sickle', 'A Bronze Age sickle is curved cast bronze with a tang for a handle, not a flaked teardrop stone.'], ['Steel chisel', 'A steel chisel is a forged metal woodworking tool, not a flaked stone hand axe.']],
    'Neolithic hand axes (the Acheulean tradition predates the Neolithic but the teardrop form persisted) were a foundational tool form — symmetrical flaking on both faces yields a versatile cutting edge.',
    'adults', '/assets/guess-the-thing/subject-artifacts/practical-skills/neolithic-hand-axe.png', 'Teardrop-shaped flaked flint; symmetrical edge.'),
  q(6_165_002, 'Practical Skills Artifacts', 'Brass marine sextant', 'A brass navigation instrument with a graduated arc, mirrors, and a small telescope for measuring angles between celestial bodies and the horizon. Which artifact?', 'Brass marine sextant',
    [['Astrolabe', 'An astrolabe is a flat brass plate with rotating components for star altitude on land; a sextant is a triangular arc instrument with mirrors used at sea.'], ['Theodolite', 'A theodolite is a mounted surveying instrument for measuring horizontal and vertical angles on land, not for celestial navigation at sea.'], ['Chronometer', 'A marine chronometer is a precise timekeeping clock; a sextant measures angles.']],
    'The marine sextant (developed mid-1700s) measures the angle between a celestial body and the horizon to determine latitude (and, with a chronometer, longitude).',
    'experts', '/assets/guess-the-thing/subject-artifacts/practical-skills/brass-marine-sextant.png', 'Triangular brass instrument; graduated arc, small telescope, paired mirrors.'),
  q(6_165_003, 'Practical Skills Artifacts', 'Blacksmith anvil', 'A heavy iron block with a flat top, pointed horn at one end, and pritchel and hardy holes for shaping hot metal. Which artifact?', 'Blacksmith anvil',
    [['Bronze Age cast mold', 'A casting mold receives molten bronze poured in; an anvil receives hammered hot metal on its flat face.'], ['Wheelwright wheel', 'A wheelwright works wheels, not as a forging surface with horn and hardy hole.'], ['Stone mortar', 'A stone mortar receives a pestle for grinding, not a hammer on hot iron.']],
    'Anvil features — flat face, horn for curves, hardy and pritchel holes for tooling — let a smith form, bend, and punch hot iron without redesigning the workspace.',
    'kids', '/assets/guess-the-thing/subject-artifacts/practical-skills/blacksmith-anvil.png', 'Iron anvil block; flat face, pointed horn, hardy and pritchel holes.'),
  q(6_165_004, 'Practical Skills Artifacts', 'Archimedes screw', 'A long inclined cylinder containing a helical screw, turned by a handle to lift water from a lower level to a higher one. Which artifact?', 'Archimedes screw',
    [['Waterwheel', 'A waterwheel uses falling water to drive rotation; an Archimedes screw uses rotation to lift water.'], ['Bucket elevator', 'A bucket elevator uses discrete buckets on a chain to lift; an Archimedes screw uses a continuous helical surface.'], ['Norse mill', 'A Norse (horizontal) mill grinds grain with falling water power; an Archimedes screw lifts water for irrigation.']],
    'The Archimedes screw (~3rd century BC) is among the earliest documented mechanical engineering devices and remains in use for water lifting, sewage handling, and some hydropower today.',
    'adults', '/assets/guess-the-thing/subject-artifacts/practical-skills/archimedes-screw-model.png', 'Inclined cylinder; internal helical screw; hand crank at one end.'),
]

const _baseGuessTheArtsMusicArtifactQuestions: Question[] = [
  q(6_166_001, 'Arts and Music Artifacts', 'Lyre of Ur', 'An ornate ancient string instrument with a bull-head decoration in gold and lapis lazuli, from a Sumerian royal tomb. Which artifact?', 'Lyre of Ur',
    [['Egyptian harp', 'Egyptian harps are typically arched, not box-bodied with a bull-head decoration in the Sumerian style.'], ['Roman lyre', 'A Roman lyre lacks the distinctive Sumerian bull-head iconography and lapis-and-gold inlay.'], ['Cretan lyre', 'A Cretan lyre is a bowed bowl-bodied folk instrument, not a Bronze Age Sumerian gold-and-lapis instrument.']],
    'The Lyres of Ur (~2500 BC) were excavated from royal Sumerian tombs; the bull-head iconography linked music to ritual.',
    'experts', '/assets/guess-the-thing/subject-artifacts/arts-music/lyre-of-ur.png', 'Ancient string instrument; gold and lapis-lazuli bull head at the soundbox.'),
  q(6_166_002, 'Arts and Music Artifacts', 'Divje Babe flute', 'A short fragment of bear femur with carved holes, dated to the Middle Paleolithic and possibly the oldest known musical instrument. Which artifact?', 'Divje Babe flute',
    [['Bone whistle', 'A simple bone whistle has a single hole; this fragment shows multiple aligned holes consistent with a flute.'], ['Roman tibia', 'A Roman tibia is a paired reed instrument; this Paleolithic single bone fragment predates Rome by tens of thousands of years.'], ['Mesolithic harp', 'No surviving Mesolithic harps exist; this is a Paleolithic bone fragment, not a stringed instrument.']],
    'The Divje Babe flute (~50,000+ years old) is a controversial but widely cited candidate for the oldest known musical instrument and may be of Neanderthal origin.',
    'experts', '/assets/guess-the-thing/subject-artifacts/arts-music/divje-babe-flute.png', 'Short cave-bear femur fragment; aligned circular holes carved along one side.'),
  q(6_166_003, 'Arts and Music Artifacts', 'Stradivarius violin', 'A small wooden violin with amber-toned varnish, built in Cremona in the early 18th century. Which artifact?', 'Stradivarius violin',
    [['Amati viola', 'An Amati is older Cremonese craftsmanship, but the Stradivarius name specifically refers to instruments from Antonio Stradivari\'s workshop.'], ['Modern factory violin', 'A modern factory violin lacks the documented provenance and craftsmanship of an early-1700s Stradivarius.'], ['Cretan lyre', 'A Cretan lyre is a folk bowed bowl-bodied instrument, not a violin.']],
    'Antonio Stradivari (1644-1737) made roughly 1,100 instruments; about 650 survive, and they remain among the most valued string instruments.',
    'adults', '/assets/guess-the-thing/subject-artifacts/arts-music/stradivarius-violin.png', 'Wooden violin; amber varnish; f-holes; carved scroll.'),
  q(6_166_004, 'Arts and Music Artifacts', 'Illuminated manuscript page', 'A medieval book page covered in gold leaf, intricate floral borders, and miniature painted scenes around hand-lettered text. Which artifact?', 'Illuminated manuscript page',
    [['Gutenberg Bible page', 'A Gutenberg Bible page is a printed page (1450s movable type), not a hand-painted illuminated manuscript page.'], ['Dead Sea Scroll fragment', 'Dead Sea Scrolls are parchment with Hebrew/Aramaic script and no gold leaf or painted miniatures.'], ['Rosetta stone fragment', 'The Rosetta Stone is a carved trilingual stele, not a painted manuscript page.']],
    'European medieval illuminated manuscripts (often Books of Hours or Gospel books) were painstakingly produced by scribes and illuminators, with gold leaf used for highlights and to depict divine light.',
    'kids', '/assets/guess-the-thing/subject-artifacts/arts-music/illuminated-manuscript-page.png', 'Manuscript page with gold leaf, decorative borders, hand-lettered text, and small painted scenes.'),
]

const _baseGuessTheGeographyHistoryArtifactQuestions: Question[] = [
  q(6_167_001, 'Geography and History Artifacts', 'Tabula Rogeriana', 'A 12th-century world map produced in Norman Sicily for King Roger II, showing south at the top. Which artifact?', 'Tabula Rogeriana',
    [['Mappa Mundi', 'A mappa mundi is a medieval European symbolic world map, typically with east at the top, not the Norman-Sicilian south-up Tabula Rogeriana.'], ['Portolan chart', 'Portolan charts are late-medieval Mediterranean nautical charts with compass rhumb lines, not a 12th-century world map produced for Roger II.'], ['Polynesian stick chart', 'Polynesian stick charts are Pacific wave-and-island navigational aids, not a parchment world map.']],
    'The Tabula Rogeriana (1154) was produced by al-Idrisi for the Norman king Roger II of Sicily and is among the most advanced world maps of its time; medieval Islamic convention placed south at the top.',
    'experts', '/assets/guess-the-thing/subject-artifacts/geography-history/tabula-rogeriana-map.png', 'Detailed world map; south at top; Mediterranean prominent in center.'),
  q(6_167_002, 'Geography and History Artifacts', 'Portolan chart', 'A late-medieval nautical chart of the Mediterranean with a network of compass rhumb lines radiating from wind roses. Which artifact?', 'Portolan chart',
    [['Tabula Rogeriana', 'The Tabula Rogeriana is a world map with south at the top, not a Mediterranean coastline chart with rhumb-line networks.'], ['Mappa Mundi', 'A mappa mundi is a symbolic European world map; portolans are practical navigation charts with rhumb lines.'], ['Polynesian stick chart', 'Polynesian stick charts encode Pacific swells and island positions in lashed sticks, not on parchment with compass rhumb lines.']],
    'Portolan charts (14th-16th centuries) were the first practical nautical charts; rhumb-line networks let pilots plot bearings between ports.',
    'adults', '/assets/guess-the-thing/subject-artifacts/geography-history/portolan-chart.png', 'Mediterranean coast chart; wind-rose centers; radiating rhumb lines.'),
  q(6_167_003, 'Geography and History Artifacts', 'Mappa Mundi', 'A symbolic medieval European world map showing Jerusalem at the center with biblical and mythical creatures arranged around the known world. Which artifact?', 'Mappa Mundi',
    [['Tabula Rogeriana', 'The Tabula Rogeriana is a more geographically literal Norman-Sicilian map, not a symbolic Jerusalem-centered medieval map.'], ['Portolan chart', 'A portolan chart is a practical nautical Mediterranean chart with rhumb lines, not a symbolic theological world map.'], ['Stick chart', 'A Polynesian stick chart is a Pacific navigational aid, not a parchment theological map.']],
    'European mappae mundi (especially the Hereford and Ebstorf mappae mundi, ~13th century) were as much theological diagrams as geographical aids — orienting Christian cosmology rather than navigating routes.',
    'experts', '/assets/guess-the-thing/subject-artifacts/geography-history/mappa-mundi.png', 'Circular medieval map; Jerusalem at center; symbolic creatures and continents arranged outward.'),
  q(6_167_004, 'Geography and History Artifacts', 'Polynesian stick chart', 'A grid of lashed wooden sticks with small shells at certain intersections, used to encode ocean swell patterns and island positions in the Pacific. Which artifact?', 'Polynesian stick chart',
    [['Portolan chart', 'A portolan is a parchment Mediterranean nautical chart, not a stick-and-shell Pacific navigational aid.'], ['Mappa Mundi', 'A mappa mundi is a European symbolic map on parchment, not a Polynesian stick navigational device.'], ['Tabula Rogeriana', 'The Tabula Rogeriana is a Norman-Sicilian parchment world map, not a Pacific stick chart.']],
    'Marshall Islander rebbelib and meddo stick charts encoded ocean swell patterns and the way they bent around islands — a navigator memorized the chart, then left it behind on the voyage.',
    'experts', '/assets/guess-the-thing/subject-artifacts/geography-history/polynesian-stick-chart.png', 'Grid of lashed coconut-frond ribs; small cowrie shells marking island positions.'),
]

// ---------------------------------------------------------------------------
// Polish pipeline: attach mentor hints and sub-topic clusters to every bank.
// ---------------------------------------------------------------------------

const _guessTheArtifactPolishBundles = [
  {
    subTopics: GUESS_THE_ARTIFACT_SUB_TOPICS,
    mentorHints: GUESS_THE_ARTIFACT_MENTOR_HINTS,
    correctShortened: GUESS_THE_ARTIFACT_CORRECT_SHORTENED,
    source: 'guessTheArtifact',
  },
]

export const guessTheAncientArtifactQuestions = runPolish(
  _baseGuessTheAncientArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessTheBusinessFinanceArtifactQuestions = runPolish(
  _baseGuessTheBusinessFinanceArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessTheDigitalCultureArtifactQuestions = runPolish(
  _baseGuessTheDigitalCultureArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessThePhilosophyArtifactQuestions = runPolish(
  _baseGuessThePhilosophyArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessTheExamPrepArtifactQuestions = runPolish(
  _baseGuessTheExamPrepArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessThePracticalSkillsArtifactQuestions = runPolish(
  _baseGuessThePracticalSkillsArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessTheArtsMusicArtifactQuestions = runPolish(
  _baseGuessTheArtsMusicArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
export const guessTheGeographyHistoryArtifactQuestions = runPolish(
  _baseGuessTheGeographyHistoryArtifactQuestions,
  _guessTheArtifactPolishBundles,
)
