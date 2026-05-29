// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Floe field identification banks (body parts, fossils, rocks,
// plants, birds, animals, fish, tracks & scat). Each hint names a specific
// diagnostic field mark — texture, plumage detail, fin pattern, track
// shape, etc. — without giving the answer outright.

export const FIELD_IDENTIFICATION_SUB_TOPICS: Record<string, number[]> = {
  // -------- Body Parts --------
  'Vital Organs': [6106001, 6106002, 6106005, 6106006],
  'Filter & Regulator Organs': [6106004],
  'Central Nervous System': [6106003, 6106011],
  'Skeletal System': [6106007, 6106008, 6106009],
  'Cardiovascular Plumbing': [6106010],
  'Respiratory Muscles': [6106012],

  // -------- Fossils --------
  'Marine Invertebrate Fossils': [6107001, 6107002, 6107003],
  'Trace Fossils & Tracks': [6107004],
  'Plant & Wood Fossils': [6107005, 6107006],
  'Vertebrate Hard Parts': [6107007, 6107008],
  'Coprolites (Fossil Dung)': [6107009, 6107010, 6107011, 6107012, 6107013, 6107014, 6107015],

  // -------- Rocks --------
  'Igneous Rocks': [6100001, 6100002, 6100003, 6100004],
  'Sedimentary Rocks': [6100005, 6100006, 6100010],
  'Metamorphic Rocks': [6100007, 6100008, 6100009],
  'Common Minerals': [6100011, 6100012],

  // -------- Plants --------
  'North American Flora': [6104001, 6104002],
  'Tropical & Latin American Flora': [6104003, 6104004],
  'European Flora': [6104005, 6104006],
  'Asian Flora': [6104007, 6104008],
  'Oceania & African Flora': [6104009, 6104010],

  // -------- Birds --------
  'Songbirds & Garden Birds': [6101001, 6101002, 6101003],
  'Waterfowl': [6101004, 6101005],
  'Hummingbirds & Tiny Birds': [6101006],
  'Raptors & Owls': [6101007, 6101008],
  'Seabirds & Flightless Birds': [6101009],
  'Wading Birds': [6101010, 6101011],
  'Woodpeckers & Tree Birds': [6101012],

  // -------- Animals --------
  'Carnivores & Canines': [6102001, 6102009],
  'Hoofed Mammals': [6102002],
  'Megafauna': [6102003, 6102004],
  'Marsupials': [6102005],
  'Amphibians': [6102006],
  'Reptiles': [6102007, 6102008],
  'Small Mammals & Bats': [6102010, 6102012],
  'Marine Mammals': [6102011],

  // -------- Fish --------
  'North American Freshwater Fish': [6105001, 6105002],
  'South American Fish': [6105003, 6105004],
  'European Fish': [6105005],
  'Eurasian & Ornamental Carp': [6105006, 6105007],
  'Indo-Pacific Reef Fish': [6105008, 6105010],
  'African Cichlids': [6105009],

  // -------- Tracks & Scat --------
  'Herbivore Pellet Scat': [6103001, 6103002],
  'Bear & Omnivore Scat': [6103003],
  'Canine & Carnivore Scat': [6103004, 6103005],
  'Bird & Waterfowl Sign': [6103006, 6103007],
  'Livestock Sign': [6103008, 6103009],
  'Pellets & Regurgitates': [6103010],
  'Invertebrate Soil Sign': [6103011],
  'Hoof & Paw Tracks': [6103012],
}

export const FIELD_IDENTIFICATION_MENTOR_HINTS: Record<number, string> = {
  // -------- Body Parts --------
  6106001: "Look for the four-chambered muscular pump sitting in the mediastinum — its job is rhythmic contraction, not filtering or digestion.",
  6106002: "The paired spongy organs sit in the thorax and host alveoli where oxygen crosses into capillary blood — gas exchange is the giveaway.",
  6106003: "Find the soft, folded organ housed inside the cranial vault — gyri and sulci on its surface mark the central control hub.",
  6106004: "Bean-shaped, retroperitoneal, paired — the nephron-packed filter that produces urine and balances electrolytes and fluid.",
  6106005: "The large reddish-brown wedge sitting under the right diaphragm — it metabolizes nutrients, detoxifies drugs, and secretes bile.",
  6106006: "A J-shaped muscular sac in the left upper abdomen with rugae folds inside — it churns food with hydrochloric acid and pepsin.",
  6106007: "The longest, strongest bone in the body, running thigh-length from hip socket to knee — easy to spot by sheer size alone.",
  6106008: "A fused cranial vault plus facial bones forming the skeletal helmet for the brain — sutures and orbits are the landmark.",
  6106009: "A curved cage of twelve paired bones articulating with the spine and sternum — it shields heart and lungs and flexes with each breath.",
  6106010: "The thick, arching trunk artery leaving the left ventricle — the highway from which every systemic artery branches.",
  6106011: "A long bundle of nerve tissue threaded down the vertebral canal — it relays motor and sensory signals to and from the brain.",
  6106012: "A thin dome of skeletal muscle anchored to the lower ribs — when it contracts and flattens, the thoracic cavity expands and air rushes in.",

  // -------- Fossils --------
  6107001: "Three-lobed Paleozoic arthropods with a clear cephalon, thorax, and pygidium — segmented like a wood louse but extinct since the Permian.",
  6107002: "A flat planispiral shell with chambered internal walls — extinct cephalopods related to today's nautilus, common in Mesozoic seas.",
  6107003: "Two unequal valves with a top-bottom symmetry plane (not left-right like clams) — Paleozoic seafloor filter feeders.",
  6107004: "A trace fossil: it preserves behavior, not body parts — the impression of a foot pressed into ancient mud and lithified.",
  6107005: "A carbonaceous compression on bedding plane: outline plus a fine venation pattern (parallel, palmate, or pinnate) tells you it's plant tissue.",
  6107006: "Mineral replacement (silica or calcite) preserves the cellular grain and growth rings of woody tissue — looks stone-hard but reads like timber.",
  6107007: "A serrated triangular crown with a root attachment — sharks shed continuously, so these are the most abundant vertebrate fossils.",
  6107008: "Mineralized skeletal tissue with Haversian bone structure — heavy, dense, often cracked along original growth fabric.",
  6107009: "A coiled or twisted lump preserving gut content — the spiral shape comes from a vertebrate's spiral intestinal valve.",
  6107010: "Small ovoid mineralized droppings clustered like rabbit pellets — herbivore lagomorph or rodent gut output preserved in stone.",
  6107011: "Look for fish scales or vertebrae embedded inside a phosphatic lump — fish predators leave diagnostic prey fragments behind.",
  6107012: "A predator's dropping holds splintered bone fragments and tooth marks in the matrix — meat-eaters break and swallow bone.",
  6107013: "Fibrous texture, plant cuticle fragments, and seed casts inside the matrix — a plant-eater's gut output preserved in phosphate.",
  6107014: "Phosphatic lumpy mass with no crystal cleavage and irregular inclusions — that's organic-origin chemistry, not a mineral.",
  6107015: "Fossilized dung is the rarest direct evidence of diet — it reveals what an extinct animal actually ate, not just what it looked like.",

  // -------- Rocks --------
  6100001: "Fine-grained extrusive igneous rock, dark from plagioclase and pyroxene, formed when basaltic lava cooled fast at the surface.",
  6100002: "Coarse-grained plutonic igneous rock with visible interlocking quartz, alkali feldspar, and biotite or hornblende — slow cooling at depth.",
  6100003: "Volcanic glass: no crystals, glossy vitreous luster, conchoidal fracture — rhyolitic lava quenched too fast to form minerals.",
  6100004: "Frothy silica-rich volcanic rock packed with vesicles from trapped gas — so porous it floats on water.",
  6100005: "Clastic sedimentary rock of cemented sand-sized quartz grains — gritty to the touch with visible cross-bedding or laminations.",
  6100006: "Carbonate sedimentary rock built from calcite, often packed with shell, coral, or microfossil grains — fizzes with dilute HCl.",
  6100007: "Low-grade metamorphic rock with strong slaty cleavage — fine clay minerals realigned under stress let it split into roof-tile sheets.",
  6100008: "Metamorphosed limestone — recrystallized calcite gives a sugary saccharoidal texture with swirled veining.",
  6100009: "High-grade metamorphic rock with gneissic banding — alternating felsic (quartz-feldspar) and mafic (biotite-hornblende) layers from intense P-T conditions.",
  6100010: "Clastic sedimentary rock with rounded gravel-sized clasts in a finer matrix — round clasts mean long fluvial transport.",
  6100011: "Trigonal silica (SiO2) with hexagonal prism habit and conchoidal fracture — hardness 7, scratches glass and shows no cleavage.",
  6100012: "The violet quartz variety colored by trace iron plus natural irradiation — same hexagonal crystal habit as clear quartz, just purple.",

  // -------- Plants --------
  6104001: "Opposite branching with five-lobed palmate leaves and U-shaped sinuses — fall anthocyanins flare scarlet across northeastern hardwood forests.",
  6104002: "Tall ribbed columnar cactus with vertical pleats and pleated arms angling skyward — endemic to Sonoran Desert washes.",
  6104003: "Climbing aroid with glossy fenestrate leaves — natural splits and oval holes develop as the leaf matures (leaf fenestration).",
  6104004: "Cauliflorous tropical understory tree: pods grow directly off the trunk and main branches, each holding cocoa beans in pulp.",
  6104005: "Narrow gray-green opposite leaves on woody square stems, topped with violet flower spikes — classic Mediterranean Lamiaceae aromatic.",
  6104006: "Deciduous tree with lobed leaves having rounded sinuses and acorns sitting in shallow cups — a keystone European hardwood.",
  6104007: "Woody grass with hollow jointed culms (with nodes) and lanceolate leaves — fastest-growing flowering plant on earth.",
  6104008: "Prunus tree showing pale pink five-petaled flowers in clusters before leaf-out — twigs have horizontal lenticels on smooth bark.",
  6104009: "Aromatic Myrtaceae with sickle-shaped (falcate) leaves hanging vertically, smooth peeling bark, and oil-filled glands.",
  6104010: "Massively swollen water-storing trunk (pachycaul habit) with short stubby branches — looks like a tree planted upside-down on the savanna.",

  // -------- Birds --------
  6101001: "Plump thrush with gray-brown back, brick-orange breast, white eye-arcs, and yellow bill — runs and stops across lawns hunting worms.",
  6101002: "Crested songbird with all-red plumage (males) and a heavy conical seed-cracking bill — black mask around the bill base.",
  6101003: "Crested corvid with blue back, white underparts, and black necklace — loud jeering calls and white wingbars in flight.",
  6101004: "Dabbling duck: males show iridescent green head, yellow bill, white neck-ring, and chestnut breast — females mottled brown.",
  6101005: "Long black neck and head with bold white chinstrap, grayish-brown body, black tail — honking V-formation flight.",
  6101006: "Tiny iridescent body, needle-thin bill for nectar, wings beating 50+ times a second to hover at flowers.",
  6101007: "Massive dark-bodied raptor with bright white head and tail (in adults), heavy yellow hooked bill — fish specialist near water.",
  6101008: "Pale heart-shaped facial disk channels sound to asymmetric ear openings — silent flight on rounded wings hunting rodents at night.",
  6101009: "Flightless seabird with countershaded plumage and flipper-like wings — bones are dense for diving rather than hollow for flight.",
  6101010: "Pink plumage from carotenoids in algae and brine shrimp, stilt-legs, and a downcurved bill held upside-down to filter water.",
  6101011: "Tall slate-blue wading bird with S-curved neck, yellow dagger bill, and black plume above the eye — stalks shallows.",
  6101012: "Stiff tail props it upright on tree trunks while a chisel bill hammers bark — zygodactyl feet (two toes forward, two back) grip vertical wood.",

  // -------- Animals --------
  6102001: "Small canid with rusty-red coat, black stockings, white belly, and a long bushy white-tipped tail — direct register trotting gait.",
  6102002: "Cervid with reddish-brown summer coat, white belly, and the namesake white tail flag raised in alarm — split hoof prints.",
  6102003: "Massive gray pachyderm: prehensile trunk fuses nose and upper lip, huge fan-shaped ears radiate heat, columnar legs bear immense weight.",
  6102004: "Long-necked African ruminant with reticulated chestnut patches separated by cream lines, ossicones on the head, and a stilt-legged amble.",
  6102005: "Marsupial with massive hind legs for hopping (saltatory locomotion), small forelimbs, and a thick muscular tail used as a tripod.",
  6102006: "Tail-less amphibian with long folded hind legs for jumping, moist permeable skin requiring damp habitat, and bulging eyes for ambush hunting.",
  6102007: "Legless reptile with elongated vertebral column, scaled belly, and a forked tongue collecting scent particles — lateral undulation.",
  6102008: "Reptile with a fused bony carapace plus plastron, retractable head and limbs, and a toothless horny beak — slow but armored.",
  6102009: "Plantigrade carnivore with stocky body, short rounded ears, small eyes, and broad five-clawed paws — flat-footed shuffling gait.",
  6102010: "Lagomorph with long ears for thermoregulation, powerful saltatorial hindlimbs, and a short cottony tail — twin-paired hop tracks.",
  6102011: "Toothed cetacean with streamlined fusiform body, falcate dorsal fin, paired flippers, and a melon for echolocation.",
  6102012: "Only mammal with true powered flight — a patagium of skin stretches between elongated finger bones, hindlimbs, and tail.",

  // -------- Fish --------
  6105001: "Olive-green centrarchid with a dark lateral stripe and a jaw hinge extending well past the eye — ambush predator in weedy lakes.",
  6105002: "Salmonid with dense black spots over body and tail plus a rosy lateral band — cold, clear, oxygen-rich freshwater.",
  6105003: "Deep-bodied serrasalmid with interlocking triangular teeth, a slightly underslung jaw, and silver flanks — Amazon and Orinoco basins.",
  6105004: "Laterally compressed cichlid with a near-circular outline and vertical bars on flank — slow blackwater rivers of the Amazon.",
  6105005: "Gadoid with three dorsal fins, two anal fins, and a single chin barbel — cold North Atlantic continental shelves.",
  6105006: "Robust cyprinid with two pairs of barbels at the corners of the mouth and large smooth cycloid scales — sluggish lowland rivers.",
  6105007: "Selectively bred Cyprinus carpio with vivid metallic red, white, black, or yellow blotches — same barbel-and-scale anatomy as wild carp.",
  6105008: "Pomacentrid with bright orange body, three white vertical bars edged in black, and obligate mutualism with stinging anemones.",
  6105009: "Hardy mouth-brooding cichlid with a deep laterally compressed body and vertical barring — tolerates warm, low-oxygen freshwater.",
  6105010: "Silver Lates with a concave forehead profile, large terminal mouth, and forked tail — catadromous estuarine ambush predator.",

  // -------- Tracks & Scat --------
  6103001: "Small acorn-shaped pellets, 1-2 cm long, deposited in clustered piles — pointed at one end, slightly flattened on the other.",
  6103002: "Spherical dry pea-sized pellets of fibrous plant matter scattered in latrines near feeding lawns — uniformly round, not tapered.",
  6103003: "Large tubular masses, 4-5 cm thick, frequently studded with berry seeds, fruit skins, or grass mats — omnivore diet on display.",
  6103004: "Slender tapered rope with a twisted point and a hair-and-bone matrix — left prominently on rocks or trail intersections as a scent mark.",
  6103005: "Rope-like segments thicker than fox scat (2-3 cm diameter), often gray with packed hair and bone shards — deposited on trail centers.",
  6103006: "Semi-solid dark fecal portion topped by a chalky white urate cap — birds excrete urine and feces through one cloacal vent.",
  6103007: "Cylindrical green-and-white tubes, 5-8 cm long, deposited in dense scatter on grass — almost entirely undigested grass fiber.",
  6103008: "Wide circular splat 30+ cm across with a soft semi-liquid texture and concentric ridges — pure grass diet means no formed pellets.",
  6103009: "Loose pile of fibrous spherical balls, 5-7 cm across, full of visible chopped grass and hay fragments — hindgut fermenter output.",
  6103010: "Compact gray cylindrical mass of fur, feathers, and bones — regurgitated, not defecated, so bones are intact rather than dissolved.",
  6103011: "Tiny stacked coil of soil ribbons squeezed out at the burrow opening — castings show worm gut shape and aerate the topsoil.",
  6103012: "Cloven heart-shaped print with two pointed crescent halves and occasional dewclaw dots behind — even-toed ungulate signature.",
}

export const FIELD_IDENTIFICATION_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}
