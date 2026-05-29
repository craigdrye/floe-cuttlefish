// Polish bundle for guess-the-artifact picture quiz banks.
// - GUESS_THE_ARTIFACT_SUB_TOPICS groups every question id into a thematic cluster.
// - GUESS_THE_ARTIFACT_MENTOR_HINTS gives each question a bespoke one-line mentor cue
//   that names role, era, civilization, or distinguishing physical detail.
// - GUESS_THE_ARTIFACT_CORRECT_SHORTENED is reserved for tightening accepted-answer
//   strings or appending to lessons; left empty intentionally.

export const GUESS_THE_ARTIFACT_SUB_TOPICS: Record<string, number[]> = {
  // Ancient Artifacts bank --------------------------------------------------
  'Mesopotamian Tablets & Cylinders': [6_160_002, 6_160_003, 6_160_004, 6_160_006, 6_160_016, 6_160_020],
  'Egyptian Royal Artifacts': [6_160_009, 6_160_010, 6_160_012, 6_160_015],
  'Paleolithic & Prehistoric Art': [6_160_007, 6_160_017],
  'Bronze Age Astronomy & Engineering': [6_160_001, 6_160_011],
  'East Asian Tomb & Ritual Artifacts': [6_160_005, 6_160_013, 6_160_019],
  'Aegean & Roman Mysteries': [6_160_008, 6_160_014],
  'Early Medieval Burial Finds': [6_160_018],
  // Business & Finance bank ------------------------------------------------
  'Earliest Coined Money': [6_161_001],
  'Joint-Stock & Paper Securities': [6_161_002],
  'Ledger & Tally Records': [6_161_003],
  'Commodity & Stone Money': [6_161_004],
  // Digital Culture bank ---------------------------------------------------
  'Pre-Transistor Computing Hardware': [6_162_001, 6_162_004],
  'Early Personal Computers': [6_162_002],
  'Human-Computer Interface Origins': [6_162_003],
  // Philosophy bank --------------------------------------------------------
  'Greek Philosophy Iconography': [6_163_001, 6_163_002],
  'Buddhist & East Asian Ritual Objects': [6_163_003, 6_163_004],
  // Exam Prep bank ---------------------------------------------------------
  'Cheating & Examination History': [6_164_001],
  'Scribal & Classroom Tablets': [6_164_002, 6_164_003],
  'Pre-Electronic Calculating Tools': [6_164_004],
  // Practical Skills bank --------------------------------------------------
  'Stone & Metal Hand Tools': [6_165_001, 6_165_003],
  'Navigation Instruments': [6_165_002],
  'Mechanical Engineering Antiquities': [6_165_004],
  // Arts & Music bank ------------------------------------------------------
  'Ancient Musical Instruments': [6_166_001, 6_166_002],
  'Master-Crafted Western Instruments': [6_166_003],
  'Manuscript & Book Arts': [6_166_004],
  // Geography & History bank -----------------------------------------------
  'Medieval World Maps': [6_167_001, 6_167_003],
  'Practical Nautical Charts': [6_167_002],
  'Indigenous Wayfinding Tools': [6_167_004],
}

export const GUESS_THE_ARTIFACT_MENTOR_HINTS: Record<number, string> = {
  // Ancient Artifacts -------------------------------------------------------
  6_160_001:
    'Antikythera mechanism: ~150-100 BCE Greek bronze gear-train, recovered from a shipwreck off Antikythera; predicted eclipses and planetary positions like an analog computer.',
  6_160_002:
    'Code of Hammurabi: ~1754 BCE Babylonian basalt stele, ~2.25m tall, with relief of Shamash above and ~282 cuneiform laws below; now at the Louvre.',
  6_160_003:
    'Cyrus Cylinder: ~539 BCE Achaemenid baked-clay barrel, Akkadian cuneiform circling its length, recording Cyrus the Great\'s capture of Babylon.',
  6_160_004:
    'Gilgamesh tablet: Mesopotamian clay tablet (notably Tablet XI from Nineveh\'s Library of Ashurbanipal, ~7th C BCE) carrying the Babylonian flood narrative.',
  6_160_005:
    'Jade burial suit: Han Dynasty (~2nd C BCE) royal funerary garment of hundreds of polished jade plaques wired with gold, silver, or copper thread by rank.',
  6_160_006:
    'Kish Tablet: ~3500 BCE Sumerian limestone fragment with proto-cuneiform pictographs; among the earliest known writing artifacts, before signs became wedge-shaped.',
  6_160_007:
    'Lion-man of Hohlenstein-Stadel: ~40,000-year-old Aurignacian mammoth-ivory figurine from Germany; the oldest known therianthrope and Paleolithic figurative sculpture.',
  6_160_008:
    'Lycurgus Cup: 4th-century Roman dichroic glass cup; nanoscale gold-silver colloids make it appear green in reflected light, red when lit from within.',
  6_160_009:
    'Mask of Tutankhamun: ~1323 BCE solid gold funeral mask with lapis-lazuli striped nemes, recovered by Howard Carter in 1922 from KV62 in the Valley of the Kings.',
  6_160_010:
    'Narmer Palette: ~3100 BCE Egyptian shield-shaped greywacke ceremonial palette commemorating the unification of Upper and Lower Egypt under King Narmer.',
  6_160_011:
    'Nebra Sky Disk: ~1600 BCE central-German bronze disk inlaid with gold sun, crescent moon and Pleiades cluster; oldest known concrete depiction of the night sky.',
  6_160_012:
    'Nefertiti Bust: ~1345 BCE painted limestone bust by Thutmose\'s Amarna workshop, famously with one eye left unfinished; now in Berlin\'s Neues Museum.',
  6_160_013:
    'Oracle bone: Shang Dynasty (~1200 BCE) cattle scapula or turtle plastron heat-cracked for divination; carries the earliest substantial corpus of Chinese script.',
  6_160_014:
    'Phaistos Disc: ~1700 BCE Minoan fired-clay disc with 241 symbols stamped (not written) in a spiral on both faces; script remains undeciphered.',
  6_160_015:
    'Rosetta Stone: 196 BCE Ptolemaic granodiorite decree in hieroglyphic, demotic, and Greek; Champollion\'s key to deciphering Egyptian writing in 1822.',
  6_160_016:
    'Standard of Ur: ~2600 BCE Sumerian trapezoidal wooden box with lapis-lazuli, shell, and red-limestone mosaic panels of war and peace from the Royal Cemetery at Ur.',
  6_160_017:
    'Sulawesi cave art: ~45,500-year-old Indonesian rock paintings of warty pigs and therianthropes; pushes figurative image-making back well before Europe\'s Lascaux.',
  6_160_018:
    'Sutton Hoo helmet: ~625 CE Anglo-Saxon iron-and-tinned-bronze ceremonial helmet from Mound 1 ship burial in Suffolk; centerpiece of early-medieval English regalia.',
  6_160_019:
    'Terracotta warrior: ~210 BCE Qin Dynasty life-sized clay soldier from Emperor Qin Shi Huang\'s mausoleum near Xi\'an; each face uniquely modeled.',
  6_160_020:
    'Warka Vase: ~3200 BCE Uruk carved alabaster vessel with stacked horizontal registers of offerings to Inanna; among the earliest narrative reliefs in stone.',
  // Business & Finance ------------------------------------------------------
  6_161_001:
    'Lydian lion coin: ~600 BCE electrum stater of King Alyattes; the roaring-lion punch is among the first state-stamped coinages, minted in Sardis.',
  6_161_002:
    'VOC share certificate: 1606 Dutch East India Company share — the earliest surviving publicly tradable equity, foundation stone of the Amsterdam Bourse.',
  6_161_003:
    'Exchequer tally stick: English medieval split-wood debt record (~12th-19th C); matching notches on the two halves authenticated Treasury obligations.',
  6_161_004:
    'Rai stone: Yapese carved limestone disk money quarried in Palau; ownership transferred socially without moving the stone — an early oral ledger system.',
  // Digital Culture ---------------------------------------------------------
  6_162_001:
    'ENIAC vacuum tube: 1945 Philadelphia room-sized computer used ~17,500 glass tubes as electronic switches before semiconductors replaced them in the 1950s.',
  6_162_002:
    'IBM 5150 PC: 1981 IBM Personal Computer with Intel 8088 CPU and open architecture; set the beige tower-monitor-keyboard template for business desktops.',
  6_162_003:
    'Wooden computer mouse: Doug Engelbart\'s 1964 SRI prototype with two perpendicular wheels; debuted publicly at the 1968 "Mother of All Demos."',
  6_162_004:
    'Punch card: IBM\'s 80-column Hollerith-style paper card (standardized 1928); one character per column, dominant program-and-data medium into the early 1980s.',
  // Philosophy --------------------------------------------------------------
  6_163_001:
    'Diogenes\' lantern: emblem of Diogenes of Sinope (~4th C BCE Cynic philosophy); he walked Athens by daylight searching for an honest man as a critique of social hypocrisy.',
  6_163_002:
    'Socrates bust: Roman marble copy of a Greek original — bald, broad-faced, snub-nosed, an iconography Plato\'s dialogues used to play against Socrates\'s ethical depth.',
  6_163_003:
    'Chak-pur sand mandala tool: paired ridged Tibetan-Buddhist metal funnels; rubbing them vibrates colored sand into mandalas later swept away to teach impermanence.',
  6_163_004:
    'Jade bi disc: Neolithic-and-later Chinese flat ritual disk symbolizing heaven (round), paired with the square cong for earth — cosmological geometry in jade.',
  // Exam Prep ---------------------------------------------------------------
  6_164_001:
    'Imperial exam cheat undershirt: Ming/Qing silk garment covered in miniature Confucian classics; smuggled into civil-service exam cells, hence intrusive body searches.',
  6_164_002:
    'Sumerian school tablet: edubba "tablet-house" practice clay; teacher\'s cuneiform on one side, student\'s wobbly copy on the other — earliest surviving formal schooling.',
  6_164_003:
    'Slate writing board: 19th-century framed slate used with chalk; reusable and erasable, it replaced costly paper for daily drills in mass-schooling classrooms.',
  6_164_004:
    'Abacus: bead-and-rod arithmetic frame; Chinese suanpan, Japanese soroban, and Russian schoty all derive from this pre-mechanical calculator tradition.',
  // Practical Skills --------------------------------------------------------
  6_165_001:
    'Neolithic hand axe: symmetrical bifacial flaked-flint cutter; the teardrop form inherited from Acheulean tradition gave a long usable edge for butchery and woodwork.',
  6_165_002:
    'Brass marine sextant: mid-1700s navigation instrument; double-reflection via mirrors lets a navigator shoot the sun-horizon angle on a pitching deck to fix latitude.',
  6_165_003:
    'Blacksmith anvil: cast or wrought iron block; flat face for drawing out, horn for curves, hardy hole for cutoff tools, pritchel hole for punching hot stock.',
  6_165_004:
    'Archimedes screw: ~3rd-C BCE Hellenistic helical lift; a hand-cranked screw inside an inclined tube raises water for irrigation, dewatering mines, and modern micro-hydro.',
  // Arts & Music ------------------------------------------------------------
  6_166_001:
    'Lyre of Ur: ~2500 BCE Sumerian royal-tomb stringed instrument; gold-foil-and-lapis bull head at the soundbox tied music to ritual at the city of Ur.',
  6_166_002:
    'Divje Babe flute: Slovenian Mousterian-era cave-bear femur fragment (~50,000+ years old); aligned holes make it a contested candidate for oldest known instrument, possibly Neanderthal.',
  6_166_003:
    'Stradivarius violin: early-1700s Cremonese instrument from Antonio Stradivari\'s workshop; amber varnish and arched plates underlie its prized resonant tone.',
  6_166_004:
    'Illuminated manuscript page: medieval European Book of Hours or Gospel folio; gold leaf, miniature scenes, and decorated initials hand-rendered by scribes and illuminators.',
  // Geography & History -----------------------------------------------------
  6_167_001:
    'Tabula Rogeriana: al-Idrisi\'s 1154 world map made in Norman Sicily for King Roger II; oriented with south at the top per medieval Islamic cartographic convention.',
  6_167_002:
    'Portolan chart: 14th-16th-century Mediterranean nautical parchment; networks of rhumb lines radiating from wind roses let pilots plot bearings between ports.',
  6_167_003:
    'Mappa Mundi: medieval European symbolic world map (Hereford, Ebstorf, ~13th C); Jerusalem at center, biblical and legendary creatures arrayed as theological diagram.',
  6_167_004:
    'Polynesian stick chart: Marshall Islander rebbelib/meddo grid of lashed sticks and cowrie shells; encodes ocean swell refraction around islands for memorized wayfinding.',
}

export const GUESS_THE_ARTIFACT_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {}
