// Bespoke polish bundle for the bonus "Guess the X" identification banks
// (chapters 6_109 through 6_157 in bonusIdentificationQuestions.ts).
// Each mentor hint is hand-written to name the specific identifying feature
// of that question's correct answer. Each cluster groups questions by
// category (working tools, brass instruments, sight hounds, etc.).

export const BONUS_IDENTIFICATION_SUB_TOPICS: Record<string, number[]> = {
  // ---------- Seaweeds (6_109) ----------
  'Brown Seaweeds': [6109001, 6109002, 6109003, 6109005, 6109006],
  'Red Seaweeds': [6109004, 6109007, 6109009],
  'Green Seaweeds': [6109008],
  'Calcified Algae': [6109010],

  // ---------- Weird Instruments (6_110) ----------
  'Electronic Instruments': [6110001],
  'Crank-Powered Strings': [6110002, 6110006],
  'Glass and Metal Idiophones': [6110003, 6110004],
  'Long-Tube Winds': [6110005],
  'Capped-Reed Winds': [6110007],
  'Plucked Lutes': [6110008, 6110009],
  'Vessel Flutes': [6110010],

  // ---------- Houseplants (6_111) ----------
  'Tropical Aroids': [6111001, 6111002, 6111006],
  'Sword and Strap Houseplants': [6111003, 6111008],
  'Tough Foliage Houseplants': [6111004, 6111007],
  'Indoor Trees': [6111005, 6111010],
  'Succulent Houseplants': [6111009],

  // ---------- Strange Fruits (6_114) ----------
  'Spiky Tropical Fruits': [6114001, 6114002, 6114004],
  'Giant Tropical Fruits': [6114003],
  'Custard-Flesh Fruits': [6114005, 6114006],
  'Alien-Shape Fruits': [6114007, 6114009],
  'Citrus Curiosities': [6114008, 6114011, 6114012],
  'Perfumed Fruits': [6114010],

  // ---------- Country Shapes (6_115) ----------
  'Peninsula Countries': [6115001, 6115008],
  'Island Countries': [6115002, 6115003, 6115010, 6115012],
  'Continental Giants': [6115004, 6115005, 6115006],
  'Long-Strip Countries': [6115007],
  'European Outlines': [6115009],
  'African Outlines': [6115011],

  // ---------- City Skylines (6_116) ----------
  'North American Skylines': [6116001, 6116005, 6116006, 6116007],
  'European Skylines': [6116002, 6116004, 6116010, 6116011],
  'Harbor Skylines': [6116003, 6116009],
  'Desert Skylines': [6116008],
  'Mountain Skylines': [6116012],

  // ---------- Historical Ruins (6_117) ----------
  'Greco-Roman Ruins': [6117001, 6117002, 6117003],
  'Rock-Cut Sites': [6117004, 6117010, 6117012],
  'Pre-Columbian Sites': [6117005, 6117006, 6117007],
  'South Asian Temples': [6117008],
  'Ancient Near East': [6117009, 6117011],

  // ---------- Plumbing Parts (6_118) ----------
  'Pipe Fittings': [6118001, 6118002],
  'Drain Components': [6118003, 6118008],
  'Plumbing Valves': [6118004],
  'Toilet Parts': [6118005, 6118006],
  'Faucet Parts': [6118007],

  // ---------- Electrical Parts (6_119) ----------
  'Switches and Outlets': [6119001, 6119002],
  'Electrical Safety Devices': [6119003, 6119004],
  'Wire Connections': [6119005, 6119006],
  'Boxes and Raceways': [6119007, 6119008],

  // ---------- Car Parts (6_120) ----------
  'Engine Bay Components': [6120001, 6120002],
  'Ignition and Combustion': [6120003, 6120008],
  'Braking System': [6120004],
  'Exhaust System': [6120005],
  'Suspension and Steering': [6120006, 6120007],

  // ---------- Train Parts (6_121) ----------
  'Track Bed': [6121001, 6121002, 6121003],
  'Rolling Stock': [6121004, 6121005],
  'Electric Traction': [6121006],
  'Track Routing and Signals': [6121007, 6121008],

  // ---------- Architecture Styles (6_122) ----------
  'Classical and Medieval Revivals': [6122001, 6122002, 6122006],
  'Early Modern Styles': [6122003, 6122008],
  'Modernist Movements': [6122004, 6122005, 6122007],

  // ---------- Hand Tools (6_123) ----------
  'Gripping Tools': [6123001, 6123002],
  'Cutting Hand Tools': [6123003, 6123007],
  'Measuring and Layout': [6123004, 6123008],
  'Driving Tools': [6123005, 6123006],

  // ---------- Kitchen Tools (6_124) ----------
  'Prep Tools': [6124001, 6124002],
  'Mixing and Serving': [6124003, 6124004, 6124008],
  'Heat-Field Tools': [6124005],
  'Baking Tools': [6124006, 6124007],

  // ---------- Dog Breeds (6_125) ----------
  'Working Herding Dogs': [6125001, 6125008],
  'Scent Hounds': [6125002],
  'Sight Hounds': [6125003],
  'Northern Working Dogs': [6125004],
  'Companion Dogs': [6125005, 6125007],
  'Short-Legged Hunters': [6125006],

  // ---------- Cat Breeds (6_126) ----------
  'Longhair Cats': [6126001, 6126005],
  'Colorpoint Cats': [6126002, 6126008],
  'Hairless and Wavy Cats': [6126003, 6126007],
  'Patterned Cats': [6126004],
  'Blue-Coat Cats': [6126006],

  // ---------- Road Signs (6_127) ----------
  'Regulatory Signs': [6127001, 6127002, 6127005, 6127008],
  'Warning Signs': [6127003, 6127004, 6127007],
  'Guide Signs': [6127006],

  // ---------- Pasta Shapes (6_128) ----------
  'Long Pasta': [6128001, 6128002],
  'Tube Pasta': [6128003, 6128004],
  'Small Pasta': [6128005],
  'Shaped Pasta': [6128006, 6128007],
  'Stuffed Pasta': [6128008],

  // ---------- Cloud Types (6_129) ----------
  'Low Clouds': [6129001, 6129003],
  'High Clouds': [6129002, 6129007],
  'Storm Clouds': [6129004],
  'Mid-Level Clouds': [6129005, 6129006],
  'Special-Form Clouds': [6129008],

  // ---------- Flags (6_130) ----------
  'Nordic Cross Flags': [6130001, 6130002],
  'Symbol-Centered Flags': [6130003, 6130004],
  'Tricolor Flags': [6130005, 6130006],
  'Stars and Crescents': [6130007, 6130008],

  // ---------- Spices (6_131) ----------
  'Pods and Buds': [6131001, 6131004, 6131007],
  'Threads and Bark': [6131002, 6131003],
  'Roots and Seeds': [6131005, 6131006],
  'Powdered Pepper Spices': [6131008],

  // ---------- Cheeses (6_132) ----------
  'Veined Cheeses': [6132001],
  'Bloomy and Aged Cheeses': [6132002, 6132003, 6132007],
  'Fresh Cheeses': [6132004, 6132005, 6132008],
  'Block Cheeses': [6132006],

  // ---------- Art Movements (6_133) ----------
  'Modern Art Movements': [6133001, 6133002, 6133003, 6133004],
  'Drama and Decoration': [6133005, 6133008],
  'Reduction and Emotion': [6133006, 6133007],

  // ---------- Camera Parts (6_134) ----------
  'Camera Optics': [6134001, 6134003],
  'Camera Exposure Controls': [6134002],
  'Viewing and Recording': [6134004, 6134005],
  'Camera Mounts and Storage': [6134006, 6134007, 6134008],

  // ---------- Music Notation (6_135) ----------
  'Clefs': [6135001, 6135002],
  'Accidentals': [6135003, 6135004],
  'Rhythm Values': [6135005, 6135006, 6135007],
  'Score Structure': [6135008],

  // ---------- Sports Equipment (6_136) ----------
  'Racket Sport Gear': [6136001, 6136002],
  'Stick Sport Gear': [6136003, 6136004],
  'Bat Sport Gear': [6136005, 6136006],
  'Target Sport Gear': [6136007],
  'Protective Gear': [6136008],

  // ---------- Lab Glassware (6_137) ----------
  'Lab Containers': [6137001, 6137004, 6137008],
  'Lab Flasks': [6137002, 6137005],
  'Lab Measuring Tools': [6137003],
  'Titration and Transfer': [6137006, 6137007],

  // ---------- Insects (6_138) ----------
  'Pollinators': [6138001, 6138002],
  'Aerial Predators': [6138003, 6138007],
  'Beetles and Sappers': [6138004, 6138005],
  'Jumping Insects': [6138006],
  'Night-Active Insects': [6138008],

  // ---------- Mushrooms (6_139) ----------
  'Toxic and Iconic Fungi': [6139001],
  'Pitted-Cap Fungi': [6139002],
  'Shelf and Toothed Fungi': [6139003, 6139007],
  'Decurrent-Gilled Fungi': [6139004],
  'Cultivated Mushrooms': [6139005, 6139006],
  'Bolete Mushrooms': [6139008],

  // ---------- Constellations (6_140) ----------
  'Northern Sky Patterns': [6140001, 6140003],
  'Winter Constellations': [6140002, 6140008],
  'Star Clusters': [6140004],
  'Summer Triangle': [6140005, 6140006],
  'Zodiacal Patterns': [6140007],

  // ---------- Gemstones (6_141) ----------
  'Corundum Gems': [6141001, 6141002],
  'Beryl Gems': [6141003],
  'Quartz Gems': [6141004, 6141007],
  'Organic and Iridescent Gems': [6141005, 6141006],
  'Olivine Gems': [6141008],

  // ---------- Trees (6_142) ----------
  'Conifers': [6142001, 6142008],
  'Lobed-Leaf Trees': [6142002, 6142003],
  'Bark-Diagnostic Trees': [6142004, 6142007],
  'Waterside Trees': [6142005],
  'Fan-Leaf Trees': [6142006],

  // ---------- Weather Instruments (6_143) ----------
  'Temperature and Pressure Instruments': [6143001, 6143002],
  'Wind Instruments': [6143003, 6143004],
  'Precipitation and Humidity': [6143005, 6143006],
  'Solar and Cloud Instruments': [6143007, 6143008],

  // ---------- Aircraft Parts (6_144) ----------
  'Lift Surfaces': [6144001, 6144005],
  'Control Surfaces': [6144002, 6144003, 6144004],
  'Aircraft Structure': [6144006, 6144007],
  'Jet Propulsion': [6144008],

  // ---------- Medical Instruments (6_145) ----------
  'Listening and Vitals': [6145001, 6145002, 6145003],
  'Diagnostic Scopes': [6145004, 6145005, 6145007],
  'Neuro and Delivery': [6145006, 6145008],

  // ---------- Circuit Components (6_146) ----------
  'Passive Components': [6146001, 6146002, 6146006],
  'Semiconductor Components': [6146003, 6146004, 6146005],
  'Protection and Control': [6146007, 6146008],

  // ---------- Space Objects (6_147) ----------
  'Planets': [6147001, 6147002],
  'Dwarf Planets and Moons': [6147003, 6147004, 6147005],
  'Small Bodies': [6147006, 6147007],
  'Deep-Sky Objects': [6147008],

  // ---------- Surgical Tools (6_148) ----------
  'Cutting Surgical Tools': [6148001],
  'Grasping and Clamping': [6148002, 6148003],
  'Exposure Tools': [6148004, 6148006],
  'Closure and Access Tools': [6148005, 6148007],
  'Suction Tools': [6148008],

  // ---------- Dinosaurs (6_149) ----------
  'Armored Dinosaurs': [6149001, 6149006],
  'Horned Dinosaurs': [6149002],
  'Theropod Predators': [6149003, 6149007, 6149008],
  'Long-Necked Dinosaurs': [6149004],
  'Crested Hadrosaurs': [6149005],

  // ---------- Knots (6_150) ----------
  'Stopper Knots': [6150001, 6150007],
  'Loop Knots': [6150002],
  'Binding Knots': [6150003],
  'Hitches': [6150004],
  'Bends and Joins': [6150005, 6150008],
  'Friction Hitches': [6150006],

  // ---------- Machine Shop Tools (6_151) ----------
  'Shop Measuring Tools': [6151001, 6151002],
  'Material Removal Machines': [6151003, 6151004, 6151005],
  'Workholding and Threading': [6151006, 6151007, 6151008],

  // ---------- Microscope Parts (6_152) ----------
  'Microscope Lenses': [6152001, 6152002],
  'Slide Stage and Light': [6152003, 6152004, 6152005],
  'Microscope Focusing': [6152006, 6152007],
  'Microscope Structure': [6152008],

  // ---------- Toxic Plants (6_153) ----------
  'Contact-Irritant Plants': [6153001, 6153007],
  'Cardiac-Glycoside Plants': [6153002, 6153005],
  'Nightshade Family Toxins': [6153003, 6153008],
  'Umbelliferae Toxins': [6153004],
  'Evergreen Toxic Plants': [6153006],

  // ---------- Bridges (6_154) ----------
  'Compression Bridges': [6154001, 6154005],
  'Cable Bridges': [6154002, 6154003],
  'Truss and Cantilever Bridges': [6154004, 6154006],
  'Moveable Bridges': [6154007, 6154008],

  // ---------- Typography (6_155) ----------
  'Letter Anatomy': [6155001, 6155002, 6155005, 6155006],
  'Letter Spacing': [6155003, 6155004, 6155008],
  'Letter Joins': [6155007],

  // ---------- Sewing Tools (6_156) ----------
  'Sewing Cutters': [6156001, 6156002, 6156007],
  'Sewing Measuring and Marking': [6156003, 6156004],
  'Sewing Needle Aids': [6156005, 6156006],
  'Sewing Machine Parts': [6156008],

  // ---------- Dental Tools (6_157) ----------
  'Dental Inspection': [6157001, 6157002],
  'Dental Cleaning': [6157003, 6157007],
  'Dental Rinse and Suction': [6157004, 6157005],
  'Dental Support Tools': [6157006, 6157008],

  // ---------- Literary Characters (6_112) ----------
  'Shakespearean Characters': [6112001],
  'Austen Heroines': [6112002],
  'Victorian Detectives': [6112003],
  'Gothic Heroines': [6112004],
  'Jazz-Age Americans': [6112005, 6112010],
  'Victorian Novel Characters': [6112006],
  'Epic Heroes': [6112007, 6112009],
  'Greek Tragedy Figures': [6112008],

  // ---------- Historical Figures (6_113) ----------
  'Ancient Rulers': [6113001],
  'Women in Science': [6113002, 6113003],
  'Abolition and Civil War': [6113004, 6113006],
  'Revolutionary Leaders': [6113005, 6113008],
  'Medieval Scholars': [6113007],
  'Modern Resistance Leaders': [6113009, 6113010],
}

export const BONUS_IDENTIFICATION_MENTOR_HINTS: Record<number, string> = {
  // ---------- Seaweeds (6_109) ----------
  6109001: "Giant kelp is the only seaweed that builds towering subtidal forests — long blades buoyed by pneumatocyst gas floats anchored by holdfasts on rock.",
  6109002: "Sargassum's tell is the pea-sized berry-like air bladders studding its branches; those floats let it drift in open-ocean mats like the Sargasso Sea.",
  6109003: "Bladderwrack shows paired oval bladders straddling the midrib of a forked frond — that twin-bubble symmetry is the field mark on intertidal rocks.",
  6109004: "Nori is the red alga Porphyra/Pyropia, pressed wet and dried into the paper-thin dark sheets used as sushi wraps.",
  6109005: "Kombu is thick leathery brown kelp (Saccharina) prized for glutamate-rich dashi stock — the umami workhorse of Japanese cooking.",
  6109006: "Wakame rehydrates into soft bright-green ribbons with a tender midrib — the standard miso-soup and seaweed-salad seaweed.",
  6109007: "Dulse is Palmaria palmata, a reddish-purple frond that dries to chewy salty strips — a coastal snack in Ireland, Iceland, and Atlantic Canada.",
  6109008: "Sea lettuce (Ulva) forms translucent neon-green sheets just two cell layers thick — wavy-edged blades draped over tide-pool rocks.",
  6109009: "Irish moss (Chondrus crispus) is the historical carrageenan source — short branched red fronds harvested for the gelling polysaccharide.",
  6109010: "Coralline algae lay down calcium carbonate in their cell walls, producing the rigid pink crusts that cement coral reefs.",

  // ---------- Weird Instruments (6_110) ----------
  6110001: "The theremin's tell is no-touch playing — pitch and volume change with the player's hand distance from two antennas in the instrument's electromagnetic field.",
  6110002: "The hurdy-gurdy's rosined wheel acts as a continuous mechanical bow while a row of tangent keys stops the strings — drone strings buzz underneath.",
  6110003: "Franklin's glass armonica is a row of nested tuned glass bowls on a spindle; wet fingers on the spinning rims produce eerie sustained tones.",
  6110004: "The Hang's tell is a closed UFO-shaped steel shell with hammered tone fields around a central ding — played by hand, not stick.",
  6110005: "The didgeridoo is a long hollowed eucalyptus tube; players use circular breathing to sustain its deep buzzing drone for minutes at a time.",
  6110006: "The nyckelharpa carries a key box on the neck — pressing keys pushes tangents against the strings, all while a separate bow draws sound across them.",
  6110007: "The crumhorn's J-shaped curved body and capped double reed give it a buzzy windcap tone — the player blows through a cap, never touching the reed.",
  6110008: "The oud's tell is the bowl-back pear-shaped body with no frets and a sharply angled pegbox — the ancestor of the European lute.",
  6110009: "The sitar carries movable curved metal frets and a bank of sympathetic strings beneath the playing strings — those resonate to produce the shimmering bloom.",
  6110010: "An ocarina is a closed vessel flute (often egg- or pendant-shaped) whose enclosed air chamber gives it a soft round tone unlike open tubes.",

  // ---------- Houseplants (6_111) ----------
  6111001: "Monstera deliciosa's signature is mature leaf fenestration — natural splits and oval holes that develop as juvenile leaves grow into the climbing form.",
  6111002: "Pothos shows alternate heart-shaped leaves on a trailing aroid vine, often marbled gold or white in cultivars like Golden or Marble Queen.",
  6111003: "Sansevieria's vertical sword leaves with banded cross-mottling and waxy cuticle let it tolerate deep shade and weeks of drought.",
  6111004: "ZZ plant's pinnate fronds of glossy paired leaflets rise from underground rhizomes that store water — that's why it shrugs off neglect.",
  6111005: "Ficus lyrata is identified by huge fiddle- or violin-shaped leaves with prominent pale veins — and a famously sulky reaction to any change.",
  6111006: "Spathiphyllum's white 'flower' is actually a spathe bract wrapping a green spadix — and the plant droops dramatically the day before it needs water.",
  6111007: "Calatheas show bold patterned leaves with purple undersides that fold up at night (nyctinasty) — the prayer-plant trait gives them away.",
  6111008: "Spider plant produces stoloniferous runners that dangle baby plantlets with their own tiny roots — propagation by air, basically.",
  6111009: "Aloe vera has fleshy triangular leaves with toothed margins and a clear mucilage gel inside — that gel is what made it a folk remedy.",
  6111010: "Rubber plant (Ficus elastica) shows thick oval leaves with a pointed drip tip and a sheath protecting each emerging leaf — a tree-form ficus.",

  // ---------- Strange Fruits (6_114) ----------
  6114001: "Dragon fruit (pitaya) is a Hylocereus cactus fruit — bright pink skin in leafy scales, with mild speckled white or red flesh inside.",
  6114002: "Rambutan's name comes from Malay rambut (hair) — its red shell sports soft pliable hair-like spines around translucent lychee-like flesh.",
  6114003: "Jackfruit is the world's largest tree-borne fruit — bumpy green hide hiding hundreds of yellow fleshy bulbs (arils) around large seeds.",
  6114004: "Durian's tell is the spiky armored shell plus the unmistakable sulfur-onion-custard aroma — the smell alone IDs it, banned in many hotels.",
  6114005: "Cherimoya's skin shows leaf-like scale impressions on green flesh, with creamy custard interior — Mark Twain called it 'deliciousness itself'.",
  6114006: "Mangosteen wears a thick deep-purple rind topped by a four-lobed green calyx crown, opening to bright white segmented flesh.",
  6114007: "Kiwano (horned melon) wears bright orange skin studded with stubby horn-spikes; inside, lime-green jelly cradles edible seeds.",
  6114008: "Buddha's hand is a citron variant that splits into fragrant finger-like sections with almost no juicy pulp — grown purely for its zest.",
  6114009: "Starfruit's five longitudinal ridges create the perfect star outline when sliced crosswise — the diagnostic feature in every fruit-platter photo.",
  6114010: "Feijoa is a small green oval whose perfumed pineapple-mint aroma and gritty cream flesh come from its myrtle family kinship with guava.",
  6114011: "Kumquats are tiny oblong citrus eaten whole — the trick is the sweet aromatic peel balancing the tart pulp inside.",
  6114012: "Yuzu shows knobbly bumpy rind and small dense seeds; its perfume — somewhere between mandarin, grapefruit, and lime — is the East Asian signature.",

  // ---------- Country Shapes (6_115) ----------
  6115001: "Italy's silhouette is the world's most-recognized boot — heel at Apulia, toe of Calabria kicking Sicily across the Messina Strait.",
  6115002: "New Zealand's outline is two long N–S islands separated by Cook Strait — North Island bent like a stingray, South Island spined by the Alps.",
  6115003: "Japan's arc curves from Hokkaido through Honshu, Shikoku, and Kyushu — Honshu is the long thick crescent at its heart.",
  6115004: "Australia's outline is unmistakable — a continent-sized landmass with a Great Australian Bight scoop in the south and triangular Tasmania below.",
  6115005: "Canada's outline runs from the Pacific past Hudson Bay's huge inland sea and out through the fragmented Arctic Archipelago — hence the longest coastline.",
  6115006: "Brazil bulges east into the Atlantic with a distinctive northeast hump (the Nordeste) and tapers south past the Pampas — biggest country in South America.",
  6115007: "Chile is a 4,300-km ribbon squeezed between the Andes spine and the Pacific — the longest north-south country on Earth.",
  6115008: "India tapers to a sharp triangular tip at Kanyakumari, with the Arabian Sea to the west, Bay of Bengal to the east — a giant inverted V.",
  6115009: "France's mainland outline approximates a hexagon — three land sides (north, east, southeast) and three coastal sides (Atlantic, Mediterranean, English Channel).",
  6115010: "Indonesia stretches east-west over 5,000 km — Sumatra and Java in the west, half of Borneo, the Sulawesi crab-shape, and western New Guinea in the east.",
  6115011: "South Africa wraps the southern tip, with the Atlantic on the west, Indian Ocean on the east, and the enclave of Lesotho punched out of its interior.",
  6115012: "Sri Lanka's pear/teardrop silhouette sits just southeast of India's tip, separated by the shallow Palk Strait — small island, distinctive outline.",

  // ---------- City Skylines (6_116) ----------
  6116001: "New York's signature is Manhattan's dense skyline rising from water — the Empire State Building's stepped Art Deco crown and One WTC are anchors.",
  6116002: "Paris's skyline reads instantly from Eiffel's wrought-iron lattice — 324 m tall, alone in a low-rise city kept under 37 m by historic zoning.",
  6116003: "Sydney's harbor pairs the white sail-shell roofs of the Opera House (Jørn Utzon) with the steel arch of Harbour Bridge directly behind.",
  6116004: "London's skyline mixes Westminster's Gothic Elizabeth Tower (Big Ben's clock) with City glass like the Gherkin and the Shard along the Thames.",
  6116005: "Seattle's silhouette centers on the Space Needle's flying-saucer observation deck (built for the 1962 World's Fair) with Mt. Rainier looming behind.",
  6116006: "Toronto rises around the CN Tower's tapered concrete spike (553 m, world's tallest free-standing structure 1975-2007) over Lake Ontario.",
  6116007: "San Francisco shows fog-shrouded International Orange suspension cables of the Golden Gate spanning the strait, plus Coit Tower on Telegraph Hill.",
  6116008: "Dubai's spike is the Burj Khalifa (828 m), thinning to a needle pinnacle — the tallest building on Earth, standing in a cluster of modern towers.",
  6116009: "Hong Kong's tell is the densest tower cluster on Earth crammed onto Hong Kong Island, rising into Victoria Peak across Victoria Harbour.",
  6116010: "Rome's profile mixes the Colosseum's stacked travertine arches with low domes and umbrella pines — strict height limits keep the historic center horizontal.",
  6116011: "Istanbul's skyline straddles the Bosphorus with the Blue Mosque's six minarets and Hagia Sophia's massive central dome — Byzantine plus Ottoman.",
  6116012: "Rio's silhouette is Sugarloaf and Corcovado mountains over Guanabara Bay, crowned by the 38-m Christ the Redeemer statue with outstretched arms.",

  // ---------- Historical Ruins (6_117) ----------
  6117001: "The Colosseum is the giant elliptical Flavian Amphitheatre — three tiers of stacked arches (Doric, Ionic, Corinthian) once seating 50,000+ for spectacles.",
  6117002: "The Parthenon caps the Athenian Acropolis — Doric peripteral temple built 447-432 BCE for Athena Parthenos, with sculpted metopes and frieze.",
  6117003: "Pompeii's tell is intact Roman streetscapes — frescoes, mosaics, wheel-rutted basalt roads, and body-cast voids — all preserved under Vesuvius ash from 79 CE.",
  6117004: "Petra's tell is Al-Khazneh, the rose-pink Treasury façade carved straight into Nabataean sandstone cliffs at the end of the narrow Siq canyon.",
  6117005: "Machu Picchu sits 2,430 m up the Andes on a saddle between peaks — terraced agricultural platforms and mortarless ashlar Inca stonework.",
  6117006: "Chichén Itzá's tell is El Castillo — the stepped Pyramid of Kukulkán whose stairway-shadow snakes coil down on equinox afternoons.",
  6117007: "Tikal's tell is the steep limestone temple-pyramids (notably Temples I and II) breaking above the Petén rainforest canopy in Guatemala.",
  6117008: "Angkor Wat's five lotus-bud tower silhouette (one central, four corner) over a moat is the signature — built for Suryavarman II as a Vishnu temple.",
  6117009: "Karnak's tell is the Great Hypostyle Hall — 134 papyrus-bud and open-papyrus columns up to 21 m tall, with a colonnaded avenue of ram sphinxes outside.",
  6117010: "Abu Simbel's four 20-m colossi of Ramesses II sit shoulder-to-shoulder cut into the cliff face — relocated piece-by-piece in the 1960s ahead of Lake Nasser.",
  6117011: "Persepolis's tell is the great Apadana terrace stair with bas-reliefs of tribute-bearers from every Achaemenid satrapy — Darius and Xerxes's ceremonial capital.",
  6117012: "Mesa Verde's Cliff Palace and other sites tuck Ancestral Puebloan masonry kivas and towers inside sandstone alcoves under the canyon rims.",

  // ---------- Plumbing Parts (6_118) ----------
  6118001: "An elbow is a single fitting curved 45° or 90° to redirect one pipe run — two openings, fixed angle.",
  6118002: "A tee fitting has three openings in a T configuration — main run plus a branch, the standard way to split flow.",
  6118003: "A P-trap's U-bend holds a column of water in the drain that physically blocks sewer gas from rising into the room.",
  6118004: "Fixture shutoff (angle stop) valves sit under sinks or behind toilets with a small knurled knob — close one without killing water to the whole house.",
  6118005: "The wax ring is a soft beeswax doughnut compressed between the toilet horn and the floor closet flange — seals against sewage and gas escape.",
  6118006: "The flapper is the hinged rubber disc at the tank outlet — flush handle lifts it via chain, tank dumps into bowl, gravity reseats it.",
  6118007: "A faucet aerator is the threaded screen at the spout tip — mixes air into the stream, prevents splash, and catches grit before it hits dishes.",
  6118008: "A cleanout plug is a threaded brass or PVC cap on a Y- or T-fitting in the drain — unscrew it to snake a clog without cutting pipe.",

  // ---------- Electrical Parts (6_119) ----------
  6119001: "A toggle switch breaks and remakes the hot conductor through internal contacts — flipping the lever physically opens or closes the load circuit.",
  6119002: "A receptacle (outlet) presents NEMA slots — line, neutral, and ground — that mate with a cord plug to deliver house power on demand.",
  6119003: "A circuit breaker combines a thermal bimetallic strip (slow overload) with a magnetic coil (instant short-circuit) — it trips to protect wiring.",
  6119004: "A GFCI senses tiny imbalance between hot and neutral currents (a leak through a person or to ground) and snaps off in milliseconds — note the Test/Reset buttons.",
  6119005: "A wire nut is a tapered plastic shell with internal coil spring — twisting it onto stripped conductor ends bites them into a gas-tight splice.",
  6119006: "The equipment-grounding conductor (bare or green) is the dedicated low-impedance fault path — it lets fault current spike high enough to trip the breaker fast.",
  6119007: "A junction box is the metal or PVC enclosure that contains every splice and devices, providing mechanical protection and arc containment.",
  6119008: "Conduit (EMT, IMC, or rigid) is the metal raceway shielding conductors from physical and crush damage as they run through walls or exposed locations.",

  // ---------- Car Parts (6_120) ----------
  6120001: "The radiator is a thin-tubed heat exchanger at the front — coolant flows through its fins while ram air or fan air strips heat to atmosphere.",
  6120002: "The alternator is the belt-driven three-phase generator — its rotor field spins inside a stator winding, output rectified by a diode bridge to charge the battery.",
  6120003: "A spark plug delivers a high-voltage arc across its center-to-ground electrode gap, igniting the compressed air-fuel mixture in a gasoline cylinder.",
  6120004: "A brake caliper is a hydraulic clamp — pistons squeeze friction pads against the spinning rotor on either side, converting kinetic energy to heat.",
  6120005: "A catalytic converter is a honeycomb monolith coated with platinum/palladium/rhodium — it oxidizes CO and HC and reduces NOx in the exhaust stream.",
  6120006: "A shock absorber is an oil-filled telescoping damper — its piston forces fluid through orifices, dissipating spring energy as heat to stop bounce.",
  6120007: "Tie rods are the threaded steering linkages — rack motion pushes inner tie rod → outer tie rod end → steering knuckle to swing the wheel.",
  6120008: "The piston is the reciprocating cylindrical slug — combustion pressure on its crown drives it down, transmitting force through the connecting rod to the crank.",

  // ---------- Train Parts (6_121) ----------
  6121001: "Rails are the rolled steel running surfaces with a head, web, and foot cross-section — wheel flanges ride their inner edges to stay in gauge.",
  6121002: "Sleepers (ties) are the crosswise wooden, concrete, or steel members that fix the two rails at a constant gauge and distribute load to the ballast.",
  6121003: "Ballast is the angular crushed-rock bed beneath the ties — it locks ties laterally, spreads load, and lets water drain away fast.",
  6121004: "A bogie (truck) is the pivoting wheel-and-axle frame under each end of a railcar — usually two axles, with suspension to handle curves and uneven track.",
  6121005: "A coupler (knuckle in North America, screw or buffer-and-chain in Europe) is the rigid jaw or link that locks one car's drawhead into the next.",
  6121006: "A pantograph is the roof-mounted spring-loaded current collector — its carbon contact strip rides the overhead catenary wire to pick up traction power.",
  6121007: "Switch points (tongues) are the tapered movable rail ends that pivot against a stock rail to guide the wheel flange onto either route at a turnout.",
  6121008: "A signal is the trackside aspect — color light, semaphore arm, or position light — communicating movement authority and speed to the train crew.",

  // ---------- Architecture Styles (6_122) ----------
  6122001: "Greek Revival borrows the temple front — pedimented gable, full-height fluted columns, symmetrical façade — popular in 19th-century U.S. civic buildings.",
  6122002: "Gothic Revival's tell is the pointed (lancet) arch plus tracery windows, ribbed vaults, steep gables, and verticality — Pugin and Viollet-le-Duc reanimated it.",
  6122003: "Art Deco shows stepped ziggurat setbacks, chevron and sunburst ornament, chrome accents, and stylized streamlined motifs — Chrysler Building is the icon.",
  6122004: "Bauhaus (Gropius) preaches form-follows-function — flat roofs, ribbon windows, white planar walls, no applied ornament, art-craft-industry unity.",
  6122005: "Brutalism celebrates béton brut — exposed board-formed concrete, sculptural mass, and honest structure. Le Corbusier's Unité is the spiritual root.",
  6122006: "Tudor Revival shows exposed half-timbered framing infilled with stucco or brick nogging, tall narrow casement windows, and steeply pitched gables.",
  6122007: "Mid-century Modern shows low horizontal rooflines, post-and-beam glazing, an open plan, and indoor-outdoor flow — Eichler, Neutra, Case Study Houses.",
  6122008: "Art Nouveau lavishes whiplash curves and stylized plant forms — Hector Guimard's metro entrances, Horta's stair railings, Mucha posters.",

  // ---------- Hand Tools (6_123) ----------
  6123001: "An adjustable (crescent) wrench has one fixed jaw and one parallel jaw driven by a worm screw — turn the knurled screw to dial jaw width to the nut.",
  6123002: "Needle-nose pliers narrow to a long pointed jaw for reaching into tight spots, gripping small parts, and bending wire — usually with side cutters at the base.",
  6123003: "A hacksaw frame tensions a thin replaceable blade (typically 18-32 TPI) — fine-pitch teeth cut metal, plastic, and conduit cleanly.",
  6123004: "A caliper combines outside jaws, inside jaws, and a depth rod on one sliding scale — dial or vernier gives precision well below a ruler's resolution.",
  6123005: "Allen (hex) keys are L-shaped six-sided bars — the short leg gives torque, long leg gives reach into hex-socket cap screws.",
  6123006: "A Torx bit fits a six-lobed star recess — the flat drive flanks resist cam-out and let you transmit far more torque before stripping.",
  6123007: "A wood chisel has a flat-back blade with a single ground bevel — keep the back dead flat and pare or strike to slice fibres in shaping joinery.",
  6123008: "A spirit level reads true horizontal or plumb when the air bubble in its sealed curved vial centers between the two marks — the bubble rises to the high end.",

  // ---------- Kitchen Tools (6_124) ----------
  6124001: "A Microplane is a chemically etched stainless rasp — its tiny razor-sharp teeth shave whisper-fine zest, garlic, or hard cheese without tearing.",
  6124002: "A mandoline is a flat sled with an adjustable razor blade — fingers ride a guard while the food drops into uniform sheets, julienne, or batonnet.",
  6124003: "A whisk is a cage of bowed wire loops — it folds air into liquids, breaking up clumps and forming the foam that gives sauces and creams their lift.",
  6124004: "A ladle is a deep hemispherical bowl on a long offset handle — sized to scoop and pour a measured portion of soup, stew, or sauce.",
  6124005: "A spider (or skimmer) is a wide shallow wire-mesh basket on a long handle — built to lift many small fried items from oil while draining instantly.",
  6124006: "A bench scraper is a stiff rectangular steel blade with a riveted grip — cleanly divides dough into portions and scrapes flour and gunk off the board.",
  6124007: "An offset spatula's blade steps down from the handle so your knuckles stay clear of frosting — sweeps cake tops flat without dragging the handle through icing.",
  6124008: "Tongs are spring-tensioned hinged scissors-style arms — pinch food without piercing it, so juices stay in your steak instead of dripping onto coals.",

  // ---------- Dog Breeds (6_125) ----------
  6125001: "Border Collies show 'eye' — the crouched stalk and unblinking stare that controls sheep without barking. Look for the medium build and white shawl collar.",
  6125002: "Beagles have a tricolor coat, big velvety drop ears, a square muzzle, and a high-set white-tipped tail flagging upright as they trail scent.",
  6125003: "Greyhounds show the classic sighthound build — deep narrow chest, tucked waist, long thin legs, and a streamlined skull — built for 45-mph sprints.",
  6125004: "Siberian Huskies wear a thick double coat with mask markings, prick triangular ears, and almond eyes often blue or particolored — sled-team athletes.",
  6125005: "Pugs are brachycephalic with a wrinkled flat face, deep nose roll, dark mask, and a tightly curled corkscrew tail set high over the back.",
  6125006: "Dachshunds are achondroplastic — long thoracic body on short legs with a deep keel chest — purpose-built to follow badgers into setts.",
  6125007: "Poodles' tell is the dense single-layer curly waterproof coat over a square athletic frame — bred as retrievers, with trims originally protecting joints.",
  6125008: "Welsh Corgis are short-legged but not dwarfed — fox-like head, prick ears, and (Pembroke) a docked or natural bobtail — herders that nip cattle heels.",

  // ---------- Cat Breeds (6_126) ----------
  6126001: "Maine Coons are the biggest domestic breed (males 13-18 lb) — shaggy water-resistant coat, lynx-tipped ears, ruff, and a long full bushy tail.",
  6126002: "Siamese show colorpoint Himalayan pattern — pale body with dark mask, ears, paws, and tail — over a slender oriental build with vivid blue almond eyes.",
  6126003: "Sphynx aren't truly hairless — a fine peach-fuzz coat over wrinkled warm skin, with huge bat ears, prominent cheekbones, and long whippy tails.",
  6126004: "Bengals show rosetted or marbled coats developed by crossing domestic cats with Asian leopard cats — a sleek athletic build with belly spotting too.",
  6126005: "Persians are extreme brachycephalic longhairs — flat face, round skull, small round ears, and a dense double coat needing daily grooming.",
  6126006: "Russian Blues show a uniformly dense double coat in pure blue-gray with a silver tipping that gives a shimmer — emerald green eyes seal it.",
  6126007: "Devon Rex have a soft wavy coat from a recessive mutation, plus huge low-set ears, prominent cheekbones, and an elfin face — pixie cats.",
  6126008: "Ragdolls are large pointed semi-longhairs that famously go limp when picked up (their name) — bright blue eyes are the breed standard.",

  // ---------- Road Signs (6_127) ----------
  6127001: "The stop sign is the only octagonal regulatory sign — that unique 8-sided red shape is readable even from the back or in heavy snow.",
  6127002: "A yield sign is the only downward-pointing equilateral triangle in regulatory signage — red border on white, telling you to slow and give way.",
  6127003: "Pedestrian-crossing signs use a fluorescent yellow-green diamond with a walking-figure pictogram — high-visibility color reserved for vulnerable users.",
  6127004: "Railroad crossing uses the white X-shaped crossbuck at the track itself, plus a yellow round advance-warning disc with 'RR' some distance back.",
  6127005: "Do Not Enter is the red circle with a horizontal white bar — universally means wrong-way for this approach (often facing exit ramps).",
  6127006: "A One Way sign is a black-on-white horizontal rectangle with a single bold arrow — that arrow direction is the only permitted travel direction.",
  6127007: "Merge signs are yellow diamonds showing two lines converging into one — typically with the merging arrow on a slope joining a straight main lane.",
  6127008: "No U-turn is a red circle and slash over a U-shaped arrow pictogram — bans the 180° reversal at that location even if other turns are allowed.",

  // ---------- Pasta Shapes (6_128) ----------
  6128001: "Spaghetti are long round solid rods 1.8-2.0 mm diameter — extruded through bronze dies, the round cross-section is the defining clue.",
  6128002: "Fettuccine are flat ribbon noodles roughly 6-8 mm wide — broad enough to carry rich butter-and-cream sauces like Alfredo.",
  6128003: "Penne are short tubes cut at a sharp diagonal so the angled mouths look like quill pens — ridged (rigate) versions hold sauce.",
  6128004: "Rigatoni are large straight-cut ridged tubes wider than penne — the bold ribs and bigger bore catch chunky ragùs like amatriciana.",
  6128005: "Orzo (Italian for 'barley') are small pasta grains the size and shape of rice — soups, pilafs, and orzo salads love them.",
  6128006: "Farfalle is bow-tie or butterfly pasta — a rectangle pinched at the center so the two flat ends ruffle out into wings.",
  6128007: "Fusilli are corkscrew spirals — the helical twist traps thin sauces and pesto in its grooves rather than letting them slide off.",
  6128008: "Ravioli are flat square or round stuffed pillows sealed at the edges — a filling of cheese, meat, or pumpkin between two sheets of pasta.",

  // ---------- Cloud Types (6_129) ----------
  6129001: "Cumulus are detached cauliflower-puff clouds with flat dark bases and bright crisp tops — fair-weather convection rising from sun-warmed surfaces.",
  6129002: "Cirrus are high (>6 km) ice-crystal wisps drawn into 'mares' tails' by upper-tropospheric wind shear — the fine hairlike streaks are the giveaway.",
  6129003: "Stratus is a low featureless gray uniform sheet hugging the ground — sometimes drizzles, but never thunder; just an overcast blanket.",
  6129004: "Cumulonimbus is the tower — deep vertical development from low base up through the troposphere, often capped by a flat icy anvil at the tropopause.",
  6129005: "Altocumulus is mid-level (2-6 km) heap clouds in patches or rolls — small individual cloudlets in regular sheets, like sky pebbles.",
  6129006: "Nimbostratus is the thick uniform dark gray rain-snow layer — no structure, just a featureless deck producing continuous precipitation.",
  6129007: "Cirrostratus is a thin high translucent ice-crystal veil — its ice crystals refract sun or moonlight into a 22° halo, the diagnostic optical effect.",
  6129008: "Lenticular clouds are smooth lens-shaped UFO-disc stacks parked over mountain peaks — mountain-wave standing waves condense the lee crests.",

  // ---------- Flags (6_130) ----------
  6130001: "Denmark's Dannebrog is the oldest continuously used national flag — a white off-center Nordic cross on a red field, dated to the 13th century.",
  6130002: "Sweden's flag is a yellow Scandinavian cross offset toward the hoist on light blue — drawn from the national arms' golden charges on blue.",
  6130003: "Canada's Maple Leaf is a stylized red 11-pointed sugar-maple leaf centered between two red vertical 'Canadian pale' bars (1965).",
  6130004: "Japan's Hinomaru is a single bright red sun disc centered on plain white — diameter is 3/5 the flag height, slightly offset toward the hoist.",
  6130005: "France's Tricolore is three equal vertical bands of blue (hoist), white, red — Revolutionary symbol pairing Paris's blue-red with royal Bourbon white.",
  6130006: "Italy's Tricolore is vertical green-white-red — green at the hoist, originally inspired by the Cisalpine Republic and Napoleonic Italy.",
  6130007: "The Stars and Stripes carries 13 red-and-white horizontal stripes (the original colonies) and a blue canton with 50 white stars (current states).",
  6130008: "Turkey's flag is a white waxing crescent and five-pointed star slightly off-center on a red field — Ottoman emblem retained by the Republic.",

  // ---------- Spices (6_131) ----------
  6131001: "Cardamom shows three-sided green pods (Elettaria) splitting to reveal sticky black seeds — sweet eucalyptol notes for chai and Scandinavian baking.",
  6131002: "Saffron is the hand-picked dried red-orange stigma of Crocus sativus — three threads per flower, ~150,000 flowers for a kilo, hence the price.",
  6131003: "Cinnamon sticks (quills) are rolled inner bark of Cinnamomum trees — true Ceylon is layered thin and crumbly; cassia is one thick fused curl.",
  6131004: "Cloves are dried unopened flower buds of Syzygium aromaticum — a small ball atop a four-pronged calyx tube gives them their nail shape.",
  6131005: "Turmeric is dried ground Curcuma longa rhizome — the polyphenol curcumin gives the brilliant warm-gold color staining everything it touches.",
  6131006: "Cumin seeds are pale ridged elongated grains with longitudinal stripes — earthy warm aroma from cuminaldehyde, the soul of taco and curry blends.",
  6131007: "Star anise is the eight-pointed star-shaped dried fruit of Illicium verum — anethole gives the licorice aroma; key to Chinese five-spice and pho.",
  6131008: "Paprika is finely ground dried Capsicum annuum peppers — Hungarian and Spanish varieties span sweet to smoky (pimentón ahumado) to hot.",

  // ---------- Cheeses (6_132) ----------
  6132001: "Blue cheeses are deliberately inoculated with Penicillium roqueforti or glaucum — needles pierce the wheel so the mold breathes and veins blue-green.",
  6132002: "Brie's bloomy rind is a white felt of Penicillium candidum — ripens inward over weeks, leaving a buttery to runny paste at room temperature.",
  6132003: "Parmesan (Parmigiano-Reggiano) is a hard cooked-curd cow's milk cheese aged 12-36 months — fractures in granular sheets with tyrosine crystals.",
  6132004: "Fresh mozzarella is pasta filata — curd plunged in hot whey and stretched into elastic strands, then shaped into balls in brine; mild milky tang.",
  6132005: "Feta is sheep (and sometimes goat) milk curd salted and brine-aged — crumbly, tangy, salty cubes that hold their shape in salads.",
  6132006: "Cheddar is bandage-wrapped or block-aged cow's milk cheese made by 'cheddaring' (stacking and milling curd slabs) — sharper with age, from mild to extra-sharp.",
  6132007: "Gouda is a Dutch pressed semi-hard wheel — young rounds are mild waxed orange-coated, aged years develop caramel and crunchy tyrosine crystals.",
  6132008: "Ricotta ('recooked') is made by reheating whey from another cheese until residual proteins coagulate into fluffy fresh curds — light and spoonable.",

  // ---------- Art Movements (6_133) ----------
  6133001: "Impressionism (Monet, Renoir, Pissarro, 1870s Paris) painted en plein air with broken brushstrokes capturing momentary light rather than detail.",
  6133002: "Cubism (Picasso and Braque, 1907-14) fractures subjects into faceted planes and shows multiple viewpoints simultaneously — Analytic then Synthetic phases.",
  6133003: "Surrealism (Breton, Dalí, Magritte, 1924+) tapped Freudian dream imagery — impossible juxtapositions, automatism, and 'pure psychic automatism' on canvas.",
  6133004: "Pop Art (Warhol, Lichtenstein, Hamilton, 1950s-60s) appropriated mass-media imagery — Brillo boxes, soup cans, Ben-Day dots — flat commercial color.",
  6133005: "Baroque (Caravaggio, Bernini, Rubens, 17th c.) wields tenebrist chiaroscuro, diagonal compositions, and theatrical emotion in service of Counter-Reformation drama.",
  6133006: "Minimalism (Judd, Stella, LeWitt, 1960s) reduces art to industrial materials and geometric units in serial repetition — 'what you see is what you see'.",
  6133007: "Romanticism (Friedrich, Géricault, Turner, late 18th-mid 19th c.) elevates emotion, the sublime, the wild, and the heroic individual against vast nature.",
  6133008: "Rococo (Boucher, Fragonard, 18th c.) is light pastel decoration, asymmetric C-and-S curves, cherubs, and pleasure-garden aristocratic frivolity.",

  // ---------- Camera Parts (6_134) ----------
  6134001: "The lens is a stack of ground glass elements that gathers and converges incoming light onto the sensor plane — focal length sets angle of view.",
  6134002: "The shutter (focal-plane or leaf) is the timed gate — two curtains travel across the frame opening then closing to set exposure duration.",
  6134003: "The aperture is the lens's iris diaphragm — a ring of blades opens (f/1.4) for shallow depth-of-field or closes (f/16) for deep focus.",
  6134004: "The viewfinder is the framing window — optical (OVF, pentaprism or rangefinder) or electronic (EVF, tiny live-view OLED) — you peer through it to compose.",
  6134005: "The image sensor (CMOS or CCD) is the silicon photosite array — each pixel collects photons and converts them to electrons, then to a digital value.",
  6134006: "The hot shoe is the top-mounted bracket with center contact (and proprietary side pins) — accepts external flashes that fire when the shutter trips.",
  6134007: "The card slot accepts removable storage — SD, CFexpress, or XQD media — where the image processor writes RAW or JPEG files after each capture.",
  6134008: "The tripod socket is a standard 1/4-20 UNC (or 3/8-16) threaded insert in the camera base — universal connection for tripod plates and rigs.",

  // ---------- Music Notation (6_135) ----------
  6135001: "The treble (G) clef's curl wraps the second staff line from the bottom, fixing that line as G4 — the standard clef for high voices and right-hand piano.",
  6135002: "The bass (F) clef's two dots straddle the fourth line from the bottom, fixing that line as F3 — used for low voices and left-hand piano.",
  6135003: "A sharp (♯) is the cross-hatched symbol that raises a note's pitch by one semitone for the rest of that measure.",
  6135004: "A flat (♭) is the rounded-belly symbol that lowers a note's pitch by one semitone for the rest of that measure.",
  6135005: "A quarter note has a filled black notehead and a plain stem — in 4/4 time it gets one beat, the standard pulse unit.",
  6135006: "An eighth note is a filled notehead with a stem plus one flag (or beamed in groups) — half a beat in 4/4, dividing the pulse into pairs.",
  6135007: "A rest is the rhythmic silence symbol — whole, half, quarter, and eighth rests each match their note durations in beats of silence.",
  6135008: "A time signature is the stacked pair at the staff's start — top number = beats per measure, bottom number = which note value gets the beat.",

  // ---------- Sports Equipment (6_136) ----------
  6136001: "A tennis racket is a strung oval head (typically 95-110 sq in) on a beam frame — 16x19 string pattern hits a felted 6-cm pressurized rubber ball.",
  6136002: "A shuttlecock is a cone of 16 overlapping goose feathers (or molded plastic) on a cork base — high drag causes its diagnostic decelerating flight.",
  6136003: "A hockey puck is a 1-inch-thick vulcanized rubber disc, 3 inches diameter, 6 oz — frozen before play to reduce bounce on the rink ice.",
  6136004: "A lacrosse stick (crosse) has a netted leather-and-mesh pocket head on a shaft — the pocket cradles, catches, and slings the rubber ball.",
  6136005: "A cricket bat has a flat front face, a raised spine on the back, and a sprung cane handle — willow blade, weight rules limit thickness.",
  6136006: "A baseball glove is a leather mitt with a deep pocket between thumb and index — fielder-specific designs (catcher's mitt, first-base mitt) vary in shape.",
  6136007: "A golf club is a steel-or-graphite shaft topped with a numbered head — driver, irons (3-9), wedges, and putter, each lofted for distance and trajectory.",
  6136008: "Shin guards are molded plastic plates with foam padding worn over the tibia under socks — protect the front shin from kicks in soccer.",

  // ---------- Lab Glassware (6_137) ----------
  6137001: "A beaker is a cylindrical container with a small pouring spout — graduations are approximate (±5%), used for stirring and rough volumes.",
  6137002: "An Erlenmeyer flask has a conical body and narrow neck — the slope lets you swirl without splashing, and the small neck reduces evaporation.",
  6137003: "A graduated cylinder is a tall narrow vessel calibrated 'to deliver' (TD) — read the meniscus at eye level to ±1% precision.",
  6137004: "A test tube is a thin round-bottomed glass cylinder open at one end — small sample reactions, often heated over a burner in a tube holder.",
  6137005: "A volumetric flask has a long thin neck with a single ring etched at the calibrated volume — filled exactly to the mark for a stoichiometric solution.",
  6137006: "A burette is a long graduated tube with a stopcock at the bottom — used to deliver titrant drop-by-drop until the endpoint is reached.",
  6137007: "A pipette is a slender calibrated transfer tube — bulb (volumetric), graduated (measuring), or micropipette — for precise small-volume delivery.",
  6137008: "A watch glass is a shallow concave disc of borosilicate — covers a beaker to slow evaporation or holds small samples for weighing or evaporating.",

  // ---------- Insects (6_138) ----------
  6138001: "Honeybees (Apis mellifera) carry pollen in concave corbiculae on their hind tibiae — the packed yellow pollen baskets are the worker bee tell.",
  6138002: "Monarchs (Danaus plexippus) show stained-glass orange wings with thick black veins and white-spotted black borders — multigenerational migration to Mexico.",
  6138003: "Dragonflies show two pairs of independent transparent wings, huge compound eyes, and a long abdomen — they hold wings out at rest (damselflies fold).",
  6138004: "Ladybugs (Coccinellidae) are domed beetles with red-orange-yellow elytra patterned with species-specific black spots — aphid-eating biocontrol darlings.",
  6138005: "Cicadas leave brittle amber nymph exuviae clinging to bark after final molt — adult males' tymbal organs produce species-specific buzzing songs in heat.",
  6138006: "Grasshoppers (Caelifera) have short antennae (shorter than body) and saltatorial enlarged hind femurs — crickets are the long-antennaed counterpart.",
  6138007: "Praying mantises hold their spined raptorial forelegs folded in 'prayer' — those Velcro-spined arms snap shut on prey in under 50 ms.",
  6138008: "Moths show feathery (pectinate) antennae and scale-dusted wings held flat or roof-like at rest — most are night-active, drawn by moonlight navigation cues.",

  // ---------- Mushrooms (6_139) ----------
  6139001: "Fly agaric (Amanita muscaria) shows a scarlet cap with floccose white wart-fragments of the universal veil — toxic, hallucinogenic, and culturally iconic.",
  6139002: "True morels (Morchella) have hollow stems and conical caps pitted in honeycomb ridges and valleys — never solid cotton-filled (those are false morels).",
  6139003: "Oyster mushrooms (Pleurotus) grow as overlapping fan-shaped shelves with decurrent white gills and a lateral or absent stem — saprophytes on dead wood.",
  6139004: "Chanterelles (Cantharellus) are egg-yolk golden, vase-shaped, with blunt forked false gills (ridges) running down the stem — apricot smell when fresh.",
  6139005: "Shiitake (Lentinula edodes) have umber-brown caps cracked with white scales when dry-grown — cultivated on oak logs or supplemented sawdust.",
  6139006: "Button mushrooms (Agaricus bisporus) are the supermarket workhorse — white or brown (cremini) caps, pink-then-chocolate-brown gills, ring on the stem.",
  6139007: "Lion's mane (Hericium erinaceus) is a single white globe of dangling soft spines — toothed not gilled, growing on hardwood; tastes like crab when cooked.",
  6139008: "Porcini (Boletus edulis) have a chestnut domed cap, bulbous stem with white netting (reticulation), and a sponge of pores (not gills) underneath.",

  // ---------- Constellations (6_140) ----------
  6140001: "The Big Dipper is an asterism within Ursa Major — seven bright stars forming a ladle; the bowl-edge pointers Merak and Dubhe lead to Polaris.",
  6140002: "Orion is centered on the three-star Belt (Alnitak, Alnilam, Mintaka) flanked by red Betelgeuse (shoulder) and blue Rigel (knee).",
  6140003: "Cassiopeia is the five-star W (or M) circumpolar asterism in the northern Milky Way — the seated-queen counterpart to Ursa Major across Polaris.",
  6140004: "The Pleiades (M45) are a compact open cluster in Taurus — six or seven stars visible naked-eye in a tight dipper-shape, wrapped in blue reflection nebulosity.",
  6140005: "Cygnus is the Northern Cross — Deneb at the tail, Albireo at the beak, wings spread along the Milky Way; part of the Summer Triangle.",
  6140006: "Lyra is a tiny parallelogram beneath blazing Vega (one of the closest bright stars at 25 ly) — the lyre of Orpheus.",
  6140007: "Scorpius's curved tail of stars ends in the stinger Shaula, and its heart is the red supergiant Antares — a true rival to Mars in color.",
  6140008: "Taurus shows a V-shaped face (the Hyades cluster) tipped by orange Aldebaran (the bull's eye), with the Pleiades on the shoulder.",

  // ---------- Gemstones (6_141) ----------
  6141001: "Sapphire is corundum (Al₂O₃) — blue from trace iron and titanium; Mohs 9, the hardest natural gem after diamond; non-blue colors called 'fancy sapphires'.",
  6141002: "Ruby is red corundum — chromium trace impurities cause both the red color and the characteristic fluorescence under UV.",
  6141003: "Emerald is green beryl (Be₃Al₂Si₆O₁₈) colored by chromium and vanadium — natural inclusions ('jardin') are expected and prove authenticity.",
  6141004: "Amethyst is the purple variety of quartz — color from trace iron and natural gamma irradiation; often forms in geodes as pointed hexagonal crystals.",
  6141005: "Pearls form inside bivalve mollusks (Pinctada, freshwater Hyriopsis) as concentric layers of aragonite nacre around an irritant — the only organic gem grown this way.",
  6141006: "Precious opal's play-of-color comes from diffraction off ordered silica microspheres — sphere size determines the spectral bands you see flashing.",
  6141007: "Citrine is yellow-orange quartz — natural citrine is rare; most commercial citrine is heat-treated amethyst from Brazil.",
  6141008: "Peridot is gem-quality forsterite olivine (Mg₂SiO₄) — its color comes from iron in the crystal structure (idiochromatic), not trace impurities.",

  // ---------- Trees (6_142) ----------
  6142001: "Pines bear needles in fascicles (bundles of 2-5) wrapped at the base by a papery sheath — count the needles per bundle to identify species.",
  6142002: "Oaks (Quercus) bear acorns — single nuts in scaled cups — and most species have lobed leaves; white oaks have rounded lobes, red oaks have bristle tips.",
  6142003: "Maples (Acer) have opposite simple palmate leaves and paired winged samaras (the 'helicopters') that split and spin to disperse.",
  6142004: "Birches (Betula) shed papery white bark in horizontal strips, marked by dark lenticels — small double-toothed ovate leaves and pendulous catkins.",
  6142005: "Willows (Salix) bear narrow lanceolate leaves on slender flexible whip-like branchlets, plus pussy-willow catkins — riparian dioecious trees.",
  6142006: "Ginkgo biloba bears unique dichotomously veined fan-shaped leaves that turn brilliant yellow and drop almost overnight in fall — a living fossil lineage.",
  6142007: "Sycamores (Platanus) shed thin bark in irregular plates exposing cream-tan-green camouflage patches underneath; the ball-shaped seed clusters confirm.",
  6142008: "True cedars (Cedrus) bear needle clusters on short shoots plus upright barrel cones; thuja and juniper 'cedars' have flat aromatic scale-leaf sprays.",

  // ---------- Weather Instruments (6_143) ----------
  6143001: "A thermometer measures temperature via thermal expansion (liquid-in-glass), thermistor resistance change, or thermocouple voltage at a junction.",
  6143002: "A barometer measures atmospheric pressure — mercury column (Torricelli) or aneroid evacuated capsule deflection; falling pressure foretells storms.",
  6143003: "A cup anemometer's three or four hemispherical cups rotate around a vertical axis — rotation rate is proportional to wind speed.",
  6143004: "A wind vane (weathervane) is a horizontally pivoting arrow whose tail is bigger than its head — the arrow points into the wind, naming where it's from.",
  6143005: "A standard rain gauge is a calibrated funnel-and-cylinder — funnel concentrates rain into a narrow tube where 1 mm equals 1 mm depth across the funnel.",
  6143006: "A hygrometer measures relative humidity — hair (mechanical), wet-and-dry bulb (psychrometric), or capacitive polymer sensor methods are all common.",
  6143007: "A pyranometer uses a black thermopile under a glass dome to measure global solar irradiance (W/m²) — the hemispherical dome blocks IR while admitting visible-NIR.",
  6143008: "A ceilometer fires a vertical laser pulse and times the return scattered by cloud-base droplets — distance gives the cloud ceiling height.",

  // ---------- Aircraft Parts (6_144) ----------
  6144001: "Wings produce lift via the cambered airfoil's pressure differential — most aircraft lift comes from the wing's upper-surface low-pressure region.",
  6144002: "The rudder is the hinged vertical-stabilizer trailing-edge surface — deflecting it sideways yaws the nose left or right (about the vertical axis).",
  6144003: "Ailerons are paired trailing-edge wing surfaces that deflect oppositely — one up, one down — to roll the aircraft around its longitudinal axis.",
  6144004: "Elevators hinge on the horizontal stabilizer trailing edge — both deflect together to pitch the nose up or down (around the lateral axis).",
  6144005: "Flaps extend and droop from the wing's trailing edge to increase chord, camber, and area — boosting lift coefficient for slower takeoff and landing speeds.",
  6144006: "Landing gear consists of struts, wheels (or skids/floats), and oleo shock absorbers — retractable on most airliners, fixed on simple light aircraft.",
  6144007: "The fuselage is the central tube that carries crew, passengers, and cargo, joining wings, empennage, and gear into a single load-bearing structure.",
  6144008: "A turbofan has a large bypass fan up front — most thrust comes from cold-bypass air around the core, giving better efficiency and lower noise than a turbojet.",

  // ---------- Medical Instruments (6_145) ----------
  6145001: "A stethoscope's bell or diaphragm picks up auscultatory sounds, transmitting them through air-filled tubing to the clinician's earpieces.",
  6145002: "A sphygmomanometer inflates a cuff over the brachial artery — the operator listens with a stethoscope for Korotkoff sounds to find systolic and diastolic pressure.",
  6145003: "A pulse oximeter clips on a finger and shines red and infrared LEDs through tissue — the absorbance ratio yields SpO₂ percentage.",
  6145004: "An otoscope has a handle, light source, magnifying lens, and disposable speculum tip — examines the external canal and tympanic membrane.",
  6145005: "An ophthalmoscope shines a collimated beam through the pupil and lets the examiner view the retina, optic disc, vessels, and macula directly.",
  6145006: "A reflex hammer (Taylor, Tromner, or Queen Square) taps tendons to elicit deep tendon reflexes — checks for intact monosynaptic spinal-reflex arcs.",
  6145007: "A laryngoscope has a handle and curved Macintosh or straight Miller blade plus a light — used to visualize the glottis for endotracheal intubation.",
  6145008: "A syringe pairs a calibrated barrel with a sliding plunger — pulling draws fluid in via a needle or Luer tip; pushing delivers a controlled volume.",

  // ---------- Circuit Components (6_146) ----------
  6146001: "A resistor's four colored bands encode value (two digits + multiplier + tolerance) — ohms law V = IR; it dissipates power as heat.",
  6146002: "A capacitor stores energy in the electric field between two conductive plates separated by a dielectric — E = ½CV².",
  6146003: "A diode is a p-n junction that conducts when forward-biased (anode positive) and blocks reverse bias — the band on the body marks the cathode.",
  6146004: "An LED is a forward-biased diode whose junction releases photons as electrons recombine — color depends on semiconductor bandgap; needs current limiting.",
  6146005: "A bipolar transistor (or MOSFET) has three terminals — base/gate current/voltage controls a much larger collector-emitter / drain-source current. Switch or amplifier.",
  6146006: "An inductor is a coil that stores energy in its magnetic field — voltage = L(di/dt); opposes changes in current, key to filters and switching regulators.",
  6146007: "A fuse is a thin wire calibrated to melt and open the circuit when its rated current is exceeded — sacrificial overcurrent protection.",
  6146008: "A potentiometer is a three-terminal variable resistor — a wiper slides along a resistive element to tap off an adjustable fraction of the voltage.",

  // ---------- Space Objects (6_147) ----------
  6147001: "Mars's red comes from oxidized iron(III) dust covering its surface — basalt regolith plus hematite makes it the iron-rust planet.",
  6147002: "Saturn's broad bright rings are mostly water-ice particles in distinct lettered bands (D-F), shepherded by moons; only ~10-100 m thick.",
  6147003: "Pluto's Tombaugh Regio — a bright nitrogen-ice plain shaped like a heart, imaged by New Horizons in 2015 — sits beside red-brown Cthulhu Regio.",
  6147004: "Titan is the only moon with a thick atmosphere (N₂ + methane) and hosts liquid methane-ethane lakes — Cassini-Huygens mapped Kraken and Ligeia Mare.",
  6147005: "Europa's icy crust shows long brown linea cracks over a likely 100-km-deep salty water ocean kept liquid by tidal heating — top astrobiology target.",
  6147006: "Comets are dirty-ice bodies — solar heating sublimates volatiles into a coma, and solar wind plus radiation pressure drive the ion and dust tails.",
  6147007: "Most asteroids occupy the main belt 2.2-3.2 AU between Mars and Jupiter — rocky, metallic, or carbonaceous leftover planetesimals.",
  6147008: "Nebulae are interstellar gas-and-dust clouds — emission (HII, ionized by hot stars), reflection (dust scattering starlight), or dark absorption types.",

  // ---------- Surgical Tools (6_148) ----------
  6148001: "A scalpel is a thin blade (#10, #11, #15 etc.) on a handle (#3 or #4) — single-bevel high-carbon or disposable for precise sharp incision.",
  6148002: "Surgical forceps come as tweezers (Adson, DeBakey) or ring-handled hemostats — toothed for tough tissue, atraumatic for vessels.",
  6148003: "Hemostats (Kelly, Crile, Halsted mosquito) are locking ratcheted clamps with grooved jaws — occlude bleeding vessels until ligation.",
  6148004: "A retractor (Army-Navy, Richardson, Deaver, or self-retaining Weitlaner) holds tissue planes apart for surgical exposure.",
  6148005: "Surgical needles are curved (3/8 or 1/2 circle) with swaged-on suture — driven through tissue by a needle holder; types include cutting, taper, and reverse-cutting.",
  6148006: "A speculum (vaginal, nasal, anal) is a hinged or sliding double-bladed retractor that holds a body cavity open for inspection.",
  6148007: "A trocar is a sharp-pointed obturator inside a hollow cannula — punctures the abdominal wall for laparoscopic ports, then the obturator withdraws.",
  6148008: "A Yankauer suction tip is a rigid curved oropharyngeal-style sucker with a bulbous tip — clears blood and saliva from the operative field.",

  // ---------- Dinosaurs (6_149) ----------
  6149001: "Stegosaurus shows two staggered rows of large pentagonal dermal plates down its back and four tail-tip spikes — the 'thagomizer' was its defensive weapon.",
  6149002: "Triceratops sports two long brow horns over the eyes, one short nasal horn, and a solid scalloped bony neck frill — a Late Cretaceous ceratopsid.",
  6149003: "T. rex shows a 1.5-m skull packed with banana-sized serrated teeth, binocular vision, and famously reduced two-fingered forelimbs.",
  6149004: "Brachiosaurus had front limbs longer than its hind legs, tilting the spine upward to a giraffe-like high-shouldered browsing posture — head 9+ m above ground.",
  6149005: "Parasaurolophus's hollow elongated tube crest curves back over the skull — internal nasal passages may have resonated as a low-frequency call horn.",
  6149006: "Ankylosaurus was a walking tank — fused osteoderm body armor, side spikes, and a massive bony tail club for swing-strike defense.",
  6149007: "Spinosaurus had elongated dorsal neural spines forming a 2-m back sail, a long crocodile-like snout with conical fish-catching teeth, and short hind legs — semi-aquatic.",
  6149008: "Velociraptor was turkey-sized, feathered, with a hyperextensible sickle claw on each second toe — used as a pinning weapon on prey.",

  // ---------- Knots (6_150) ----------
  6150001: "The figure-eight stopper is the climber's signature — laid figure-eight pattern is bulkier than an overhand and unjams readily after heavy fall loading.",
  6150002: "A bowline forms a fixed loop that won't slip tighter under load — 'rabbit out of the hole, around the tree, back down the hole'.",
  6150003: "The square (reef) knot crosses right-over-left then left-over-right to bind two ends — fine for shoelaces, never for joining loaded ropes.",
  6150004: "A clove hitch is two crossing turns around a post or rail — fast to tie and adjust, but it can slip if the load rotates or shifts.",
  6150005: "A sheet bend joins ropes of unequal diameter by passing the smaller line through a bight of the larger — far more secure than a square knot.",
  6150006: "A Prusik is a girth hitch with extra wraps (3+ symmetric coils) — grips when loaded perpendicular, slides freely when unloaded; the climber's classic ascender.",
  6150007: "The overhand knot is the simplest stopper — a single loop pulled tight; jams under heavy load but works for casual line ends.",
  6150008: "Fisherman's knots (improved clinch, blood knot, Palomar) tie braided or monofilament line to hooks, swivels, or other line — designed for slick synthetics.",

  // ---------- Machine Shop Tools (6_151) ----------
  6151001: "A caliper carries outside, inside, and depth scales on a single sliding beam — vernier, dial, or digital readouts give 0.02 mm precision.",
  6151002: "A micrometer uses a precision threaded spindle (typically 0.5 mm pitch) — one thimble revolution = 0.5 mm; thimble graduations resolve to 0.01 mm.",
  6151003: "A lathe spins the workpiece on a horizontal axis while a single-point tool on a cross slide removes material — basis of all cylindrical turning.",
  6151004: "An end mill is a multi-flute side-and-end cutter — flutes spiral up to evacuate chips while the tool cuts slots, profiles, pockets, and faces in a mill.",
  6151005: "A drill press is a column-mounted spindle with quill feed lever — straight, perpendicular holes via the rotating drill bit lowered into clamped work.",
  6151006: "A bench vise has two parallel jaws driven by a square-thread Acme screw — clamps work for filing, sawing, drilling, and assembly on the bench.",
  6151007: "A tap is a hardened cutter that grooves internal threads inside a pre-drilled hole — taper, plug, and bottoming styles in HSS or carbide.",
  6151008: "A reamer takes a fixed-diameter pass through an existing hole to bring it to precise tolerance and improve surface finish — hand or machine, fluted.",

  // ---------- Microscope Parts (6_152) ----------
  6152001: "The eyepiece (ocular) sits at the top — typically 10× magnification, often with a focusable diopter and built-in pointer or reticle.",
  6152002: "Objective lenses thread into the revolving nosepiece — 4×, 10×, 40×, 100× oil-immersion; total magnification = objective × ocular.",
  6152003: "The stage is the flat platform under the objective — mechanical stages have x-y vernier controls and stage clips to hold the slide square.",
  6152004: "The Abbe condenser sits below the stage with focusing lenses — concentrates illuminator light onto the specimen for resolved imaging.",
  6152005: "The iris diaphragm is the adjustable aperture inside the condenser — closing it increases contrast and depth of field at the cost of resolution.",
  6152006: "The coarse focus is the larger outer knob — rapid up/down motion to bring the specimen near focus at low magnification.",
  6152007: "The fine focus is the smaller inner knob with a high-ratio drive — single-micron adjustments at high magnification to sharpen the image.",
  6152008: "The revolving nosepiece is the rotating turret holding the parfocal objective lenses — clicks each into the optical path at the same image-plane height.",

  // ---------- Toxic Plants (6_153) ----------
  6153001: "Poison ivy's 'leaves of three, let it be' — three glossy almond-shaped leaflets per stem; urushiol oil in the sap triggers delayed allergic dermatitis.",
  6153002: "Foxglove (Digitalis purpurea) has tall racemes of speckled tubular bells — the cardiac glycosides digoxin and digitoxin slow the heart; tiny doses become medicine.",
  6153003: "Atropa belladonna shows solitary dull-purple-brown bell flowers with shiny black berries — tropane alkaloids (atropine, scopolamine) dilate pupils and stop the heart.",
  6153004: "Poison hemlock (Conium maculatum) shows lacy fern-like leaves with white compound umbel flowers on smooth purple-blotched stems — coniine paralyzes nerves.",
  6153005: "Oleander (Nerium oleander) has lance-shaped leathery whorled leaves and pink-white five-petal pinwheel flowers — every part contains cardiotoxic oleandrin.",
  6153006: "Yew (Taxus) has flat dark-green needles and red fleshy berry-like arils — the seed inside the aril is loaded with cardiotoxic taxane alkaloids.",
  6153007: "Stinging nettle (Urtica dioica) bears toothed leaves and stems covered in tiny hollow trichomes that inject histamine and formic acid on contact.",
  6153008: "Pokeweed (Phytolacca americana) shows magenta-purple stems and drooping racemes of dark berries — phytolaccatoxin and saponins are most concentrated in the root.",

  // ---------- Bridges (6_154) ----------
  6154001: "Arch bridges carry load through a curved compression member into abutments at each end — the abutments must resist the outward horizontal thrust.",
  6154002: "Suspension bridges drape main cables over two towers with vertical hangers carrying the deck — Golden Gate, Akashi-Kaikyō, Verrazzano-Narrows are the icons.",
  6154003: "Cable-stayed bridges run straight cables directly from a pylon to the deck in fan or harp patterns — no main catenary cable, towers take direct compression.",
  6154004: "Truss bridges use triangulated frames (Pratt, Warren, Howe) — triangles can't deform without changing member length, so loads stay axial.",
  6154005: "Beam bridges are the simplest — a horizontal beam (or girder) spans two supports and carries load by bending; limited span before depth becomes impractical.",
  6154006: "Cantilever bridges have arms projecting from piers, anchored at one end and free at the other — pairs meet at midspan (sometimes via a suspended span).",
  6154007: "A bascule bridge is a counterweighted drawbridge — single or double leaves pivot upward around a horizontal trunnion to open for tall vessels.",
  6154008: "Pontoon (floating) bridges rest on floating hulls anchored in place — used where water is too deep or soft for fixed piers (Hood Canal, Lake Washington).",

  // ---------- Typography (6_155) ----------
  6155001: "Serifs are the small projecting strokes at the terminals of letterforms — derived from chisel finishing on Roman stone-carved capitals.",
  6155002: "Sans-serif faces (Futura, Helvetica, Gotham) omit terminal strokes — clean geometric or humanist letterforms feel modern and read well at small sizes.",
  6155003: "Kerning adjusts space between specific letter pairs (like 'AV' or 'To') — fixing optical gaps that uniform side-bearings leave behind.",
  6155004: "Leading (rhymes with 'wedding') is the vertical space from baseline to baseline — historically lead strips between lines of metal type; today it's line-height.",
  6155005: "X-height is the vertical height of lowercase letters without ascenders or descenders (measured on the 'x') — large x-heights feel more readable at small sizes.",
  6155006: "The baseline is the invisible horizontal line where letters rest — descenders (g, j, p, q, y) extend below it; baseline grids align text to it.",
  6155007: "A ligature is a single glyph fusing two or more letters — 'fi', 'fl', 'ff', 'ffi' avoid awkward collisions where a dotted 'i' would clash with the 'f' hook.",
  6155008: "Tracking adjusts spacing uniformly across a run of text — open it for headlines (especially all-caps) and tighten it for tight display work.",

  // ---------- Sewing Tools (6_156) ----------
  6156001: "Fabric shears (Gingher, Kai) have offset bent handles so the blade rests flat on the table while cutting cloth — never use them on paper or they dull.",
  6156002: "A seam ripper has a small forked blade with a sharp inner edge and a red ball-tip safety guard — slips under stitches to slice the thread.",
  6156003: "A tape measure is a flexible 60-inch/152-cm fiberglass or PVC strip with millimeter and inch graduations on both faces — wraps around curves for body measurements.",
  6156004: "Tailor's chalk (clay or wax) marks temporary cutting and seam lines on fabric — clay brushes off, wax irons or washes out.",
  6156005: "A thimble is a metal or leather finger cap with dimpled top — pushes the needle eye through tough fabric without piercing your fingertip.",
  6156006: "A needle threader has a thin diamond-shaped wire loop on a handle — push it through the needle eye, thread through the loop, pull back to draw the thread through.",
  6156007: "A rotary cutter is a circular disc blade on a spindle handle — rolls along a ruler edge over a self-healing mat to cut perfect straight or curved fabric lines.",
  6156008: "A bobbin is the small lower-thread spool that nests in the machine's bobbin case — its thread loops up to interlock with the upper thread, forming each lockstitch.",

  // ---------- Dental Tools (6_157) ----------
  6157001: "A dental mouth mirror is a small concave reflective disc on a handle — provides indirect view of distal surfaces and reflects light into shadowed areas.",
  6157002: "A dental explorer (#5, #17, or shepherd's hook) has a thin pointed tine — tactile probing of fissures, margins, and proximal surfaces to detect caries.",
  6157003: "A sickle scaler has a triangular cross-section with a sharp pointed tip — used supragingivally to chip and lift off calcified plaque (calculus).",
  6157004: "The triplex air-water syringe sprays air, water, or atomized spray via thumb-controlled buttons — rinses debris, dries fields, and tests sensitivity.",
  6157005: "A saliva ejector is a thin curved plastic suction tube — placed under the tongue, low-volume suction removes pooled saliva and water during work.",
  6157006: "Cotton pliers are angled tweezers with fine serrated tips — pick up cotton rolls, gauze, and small materials without contaminating gloved fingers.",
  6157007: "A periodontal curette (Gracey or universal) has a rounded toe and one or two cutting edges — adapts subgingivally to root surfaces for scaling and root planing.",
  6157008: "A bite block (or mouth prop) is a soft rubber or silicone wedge placed between molars — props the jaw open passively so the patient's muscles can rest.",

  // ---------- Literary Characters (6_112) ----------
  6112001: "Hamlet is Prince of Denmark in Shakespeare's tragedy — son of the murdered king, grieving, philosophical, and paralyzed by 'to be or not to be' indecision.",
  6112002: "Elizabeth Bennet is the witty second Bennet daughter in Austen's Pride and Prejudice — she misjudges Darcy then revises 'her first impressions' of him.",
  6112003: "Sherlock Holmes is Conan Doyle's consulting detective at 221B Baker Street — observation, deduction, violin, and Watson as patient chronicler.",
  6112004: "Jane Eyre is the orphan governess narrator of Charlotte Brontë's novel — works at Thornfield Hall, falls in love with Rochester, insists on dignity above all.",
  6112005: "Jay Gatsby is Fitzgerald's self-made millionaire in West Egg — throws lavish parties hoping to recover his pre-war romance with Daisy Buchanan.",
  6112006: "Ebenezer Scrooge is the Dickensian miser of A Christmas Carol — visited by ghosts of Christmas Past, Present, and Yet to Come, transformed by morning.",
  6112007: "Odysseus is the cunning king of Ithaca in Homer's Odyssey — twenty years away, weathering Cyclops, sirens, and Circe to return to Penelope.",
  6112008: "Antigone is Sophocles's Theban princess — defies King Creon's edict to bury her brother Polynices according to divine law, choosing duty over life.",
  6112009: "Don Quixote is Cervantes's aging Spanish gentleman who reads too many chivalric romances and rides out as a knight, tilting at windmills he sees as giants.",
  6112010: "Holden Caulfield is the 16-year-old narrator of Salinger's Catcher in the Rye — expelled from Pencey, wandering Manhattan, raging at 'phonies' over grief for Allie.",

  // ---------- Historical Figures (6_113) ----------
  6113001: "Cleopatra VII was the last active Ptolemaic ruler of Egypt — Greek-descended, fluent in Egyptian, allied politically and romantically with Caesar and Mark Antony.",
  6113002: "Ada Lovelace wrote the first algorithm intended for a machine (Note G on Babbage's Analytical Engine, 1843) — envisioning symbol manipulation beyond pure arithmetic.",
  6113003: "Marie Skłodowska Curie won Physics Nobel 1903 (with Pierre and Becquerel) for radioactivity and Chemistry Nobel 1911 for radium and polonium isolation.",
  6113004: "Frederick Douglass escaped slavery in 1838, became the most photographed American of the 19th century, and used his Narrative and orations to attack slavery.",
  6113005: "Toussaint Louverture led the enslaved uprising in Saint-Domingue, defeated French, Spanish, and British armies, and pushed the colony toward emancipation before his 1803 death.",
  6113006: "Abraham Lincoln issued the Emancipation Proclamation in 1863 declaring enslaved people in rebelling states free, and pushed the 13th Amendment through Congress in 1865.",
  6113007: "Ibn Sina (Avicenna, 980-1037) wrote The Canon of Medicine and The Book of Healing — Persian polymath whose works dominated European medical schools for 600 years.",
  6113008: "Joan of Arc, an illiterate teenage peasant claiming saintly visions, helped lift the siege of Orléans (1429), saw Charles VII crowned, and was burned in Rouen in 1431.",
  6113009: "Mohandas Gandhi led satyagraha against British rule — the Salt March, the Quit India movement, and a philosophy of nonviolent resistance influencing King and Mandela.",
  6113010: "Rosa Parks refused to give up her bus seat in Montgomery on December 1, 1955 — her arrest sparked the 381-day bus boycott led by a young Martin Luther King Jr.",
}

export const BONUS_IDENTIFICATION_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}
