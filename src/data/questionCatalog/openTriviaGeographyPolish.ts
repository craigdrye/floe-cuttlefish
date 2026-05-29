// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the imported OpenTrivia Geography bank (~352 questions across four
// source chapters: World Capitals, Countries and Regions, Rivers and Oceans,
// Physical Geography).
//
// OPEN_TRIVIA_GEO_SUB_TOPICS regroups the questions by region (North America,
// South America, Europe, Africa, Asia, Oceania, Polar) crossed with type
// (Countries & Capitals, Landmarks, Physical Features, Borders & Geopolitics,
// Demographics, Flags). The original four chapters mixed all regions together;
// this regrouping is what surfaces in lesson scaffolding.
//
// OPEN_TRIVIA_GEO_MENTOR_HINTS overrides the generic catalog hint with a
// one-line, second-person nudge in the voice of a geography teacher who
// teaches by mnemonic, map-pointing, and visual cue — never by shortcut.
//
// OPEN_TRIVIA_GEO_CORRECT_SHORTENED trims any `correct` flagged by the audit
// (correct ≥1.8x longer than longest wrong AND ≥20 chars longer). The current
// bank has no flagged items, so this record is intentionally empty — the
// export is kept for parity with the catalog polish pattern.

export const OPEN_TRIVIA_GEO_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Countries & Capitals --------------------
  'Europe — Countries & Capitals': [
    336003, 336004, 336005, 336007, 336008, 336022, 336066, 336067, 336070,
    336074, 336086, 336095, 336097, 336119, 336121, 336124, 336199, 336201,
    336202, 336217, 336223, 336224, 336228, 336229, 336231, 336243, 336254,
    336257, 336318, 336322, 336351,
  ],
  'Asia — Countries & Capitals': [
    336001, 336006, 336023, 336030, 336096, 336105, 336117, 336232, 336253,
    336315, 336316, 336317, 336320, 336321,
  ],
  'Africa — Countries & Capitals': [
    336025, 336097, 336245, 336272, 336274, 336284, 336319, 336323, 336325,
    336326, 336327, 336328, 336329,
  ],
  'North America — Countries & Capitals': [
    336009, 336063, 336064, 336065, 336087, 336152, 336153, 336154, 336155,
    336157, 336158, 336159, 336205, 336264, 336265, 336266, 336282, 336294,
    336295, 336296, 336297, 336298, 336330, 336331, 336332, 336344,
  ],
  'South America — Countries & Capitals': [
    336100, 336352,
  ],
  'Oceania — Countries & Capitals': [
    336002, 336026, 336282,
  ],

  // -------------------- Physical Features: Rivers --------------------
  'Rivers — Europe': [
    336016, 336068, 336085, 336183, 336184, 336185, 336186, 336187, 336188,
    336189, 336190, 336191, 336204, 336226, 336257, 336263, 336338, 336339,
  ],
  'Rivers — Asia': [
    336010, 336012, 336013, 336015, 336017, 336082, 336112, 336137, 336256,
    336258, 336261,
  ],
  'Rivers — Africa': [
    336018, 336019, 336020, 336255, 336286,
  ],
  'Rivers — Americas': [
    336011, 336014, 336059, 336060, 336061, 336098, 336221, 336233, 336234,
    336235, 336236, 336237, 336238, 336239, 336240, 336241, 336242, 336259,
    336260, 336262, 336342,
  ],
  'Lakes & Inland Waters': [
    336038, 336039, 336040, 336041, 336042, 336080,
  ],

  // -------------------- Physical Features: Seas, Oceans & Coasts --------------------
  'Seas, Straits & Bays': [
    336029, 336049, 336101, 336110, 336111, 336113, 336114, 336115, 336116,
    336123, 336132, 336138, 336140, 336160, 336161, 336162, 336163, 336165,
    336166, 336167, 336168, 336283,
  ],
  'Oceans': [
    336134, 336135, 336136, 336139, 336182,
  ],
  'Reefs, Atolls & Coastal Features': [
    336057, 336058, 336107, 336108, 336109,
  ],

  // -------------------- Physical Features: Islands --------------------
  'Islands — Mediterranean': [
    336044, 336051, 336054, 336083, 336088, 336089, 336090, 336091, 336092,
    336093, 336127, 336129, 336131, 336141, 336181, 336211, 336216, 336247,
    336248, 336249, 336250, 336251, 336252,
  ],
  'Islands — Atlantic & Caribbean': [
    336130, 336149, 336180, 336208, 336213,
  ],
  'Islands — Indo-Pacific': [
    336050, 336052, 336053, 336128, 336133, 336142, 336143, 336144, 336146,
    336147, 336148, 336172, 336173, 336174, 336175, 336176, 336177, 336178,
    336179, 336192, 336193, 336194, 336195, 336196, 336197, 336198, 336206,
    336207, 336209, 336210, 336212, 336214, 336215, 336244, 336246, 336273,
    336275, 336276, 336277, 336279,
  ],
  'Islands — Polar & Misc.': [
    336145,
  ],

  // -------------------- Physical Features: Mountains, Volcanoes & Deserts --------------------
  'Mountains & Peaks': [
    336024, 336027, 336036, 336037, 336046, 336047, 336170, 336171, 336200,
    336230,
  ],
  'Volcanoes': [
    336021, 336043, 336044, 336045, 336047, 336048, 336103, 336198, 336292,
    336293, 336345, 336346, 336347, 336348,
  ],
  'Deserts & Arid Zones': [
    336028, 336299, 336300, 336301, 336302, 336303, 336304, 336305,
  ],
  'Waterfalls': [
    336018, 336221, 336267, 336268, 336269, 336270, 336271, 336288, 336289,
    336290, 336291,
  ],

  // -------------------- Borders & Geopolitics --------------------
  'Borders & Shared Lands': [
    336029, 336125, 336132, 336133, 336169, 336218, 336225, 336227, 336307,
    336333, 336334, 336335, 336336, 336337, 336340, 336350,
  ],
  'European Union & Membership': [
    336069, 336070, 336071, 336072, 336073, 336075, 336076, 336077, 336078,
    336079, 336081, 336150, 336151,
  ],
  'Historical Geography & Renaming': [
    336062, 336084, 336094, 336102, 336272, 336278, 336287, 336308, 336309,
    336310, 336311, 336312, 336313, 336314,
  ],

  // -------------------- Demographics & Culture --------------------
  'Population & Demographics': [
    336032, 336034, 336053, 336105, 336178, 336280, 336281, 336285,
  ],
  'Culture, Costume & Religion': [
    336055, 336056, 336104, 336126, 336219, 336220, 336253, 336261, 336349,
  ],
  'Flags & National Symbols': [
    336089, 336222, 336341,
  ],

  // -------------------- Polar --------------------
  'Polar Geography': [
    336043, 336103, 336134, 336299,
  ],

  // -------------------- Squares, Landmarks & Civic Sites --------------------
  'Famous Squares & Civic Landmarks': [
    336117, 336118, 336120, 336122, 336203, 336205, 336343,
  ],

  // -------------------- Misc & General --------------------
  'Geographic Records & Superlatives': [
    336031, 336033, 336035, 336099, 336106, 336156, 336164, 336306, 336324,
  ],
}

export const OPEN_TRIVIA_GEO_MENTOR_HINTS: Record<number, string> = {
  // ---------- World Capitals (336001-336008) ----------
  336001: 'Picture the Khyber Pass and the K-sound at the gateway to Central Asia — capital starts with the same K.',
  336002: 'Sydney and Melbourne fought, so the capital was built fresh between them. Look for the planned city, not the famous one.',
  336003: 'Belgium speaks French in the south, Dutch in the north — its capital sits at the seam, the seat of the EU.',
  336004: 'Cradle of democracy, home of the Parthenon. The city and the city-state share the same name.',
  336005: 'All roads lead to it. The capital is older than Italy itself.',
  336006: 'Tel Aviv is the business hub; the contested capital is the holy city on the hill.',
  336007: 'Cold-War split, then reunified. The capital is where the Wall once stood.',
  336008: 'Fjord country — the capital sits at the head of its own long inlet, not on the open coast.',

  // ---------- Hawaii & Pacific (336009) ----------
  336009: 'The state nicknamed the Aloha State has a capital starting with the same H. Picture Diamond Head behind the skyline.',

  // ---------- Asian rivers (336010-336013, 336015) ----------
  336010: 'Two short syllables. A Siberian river born where the Biya and Katun meet — three letters, lots of names but only one short answer.',
  336011: 'Andean source of the Amazon. "Nevado" tells you it is a snow-capped peak — pick the Peruvian one, not the Ecuadorian volcano.',
  336012: 'Chang Jiang = Long River. The dolphin and paddlefish clue points to China\'s great central artery.',
  336013: 'Huang He literally means yellow river — the silt color names the river. Read the prompt for the giveaway.',
  336015: 'Six countries on one river: China, Myanmar, Thailand, Laos, Cambodia, Vietnam. That sweep is mainland Southeast Asia\'s spine.',

  // ---------- More rivers (336014, 336016-336020) ----------
  336014: 'Mississippi rises in Minnesota — the source is a small headwater lake, not one of the Great Lakes.',
  336016: 'Second-longest in Europe, after the Volga. Flows through Vienna, Budapest, Belgrade — picture the Strauss waltz.',
  336017: 'The Ganges empties south into the Indian Ocean via a vast delta — the bay named for Bengal.',
  336018: 'Victoria Falls divides Zambia from Zimbabwe — the river named for one of those Z-countries.',
  336019: 'Lake Victoria sits at the eastern equator. Three countries share its shoreline — picture U-K-T like the East African Community itself.',
  336020: 'Tagus/Tajo, Ebro, Duero/Douro, Guadiana — these are the great Iberian rivers. Which Iberian country has all four?',

  // ---------- Countries by feature (336021-336028) ----------
  336021: 'Fuji is the giveaway. Akan and Aso are Japanese volcano names in the same archipelago.',
  336022: 'Onega is the clue — it sits in northwest Russia. Khanka borders China but is mostly Russian. Pattern: vast lake-rich country.',
  336023: 'The Yellow and Pearl rivers are both Chinese. Pearl River = Zhujiang in the south, Yellow River = Huang He in the north.',
  336024: 'Pico = peak in Portuguese. A South American country that speaks Portuguese — there is only one.',
  336025: 'Kainji is a dammed lake on the Niger River inside the country that shares the river\'s name (but bigger). The N-country south of Niger.',
  336026: 'Mitchell, Flinders, Leichhardt — all are 19th-century British/German explorers honored by Australian rivers in the tropical north.',
  336027: 'Sami place names: Kaska-, Akka, Sielmma-. That suffix style says Scandinavian north — pick the country with the longest Sami territory.',
  336028: 'Kavir = salt desert in Persian. The country sits between Mesopotamia and South Asia — its name is in the prompt suffix.',

  // ---------- Borders & geography (336029-336035) ----------
  336029: 'The Dead Sea has only two shores — west bank is one country, east bank is the other. No Lebanon, no Syria.',
  336030: 'Istanbul straddles the Bosphorus. Before the Ottoman conquest of 1453 it was named for Constantine — the emperor.',
  336031: 'The shortest river in the world is the Roe — about 200 feet long, in the United States. Mountain state, not Wales or Tasmania.',
  336032: 'Sub-Saharan Sahel country, often confused with its larger neighbor of the same name. Highest fertility on Earth.',
  336033: 'Trace the Gulf coast west to east: Texas, Louisiana, Mississippi, Alabama, Florida. Count them.',
  336034: 'Cheap power, hot afternoons, and a huge Bangkok middle class watching late-night dramas. The TV-hours record sits in Southeast Asia.',
  336035: 'Pacific states: California, Oregon, Washington — plus Alaska and Hawaii. Five, not three.',

  // ---------- US peaks, mountains (336036-336037) ----------
  336036: 'After Denali (McKinley), the second-tallest US peak is on the Yukon border — a Saint named for an emperor.',
  336037: 'Hillary the beekeeper hailed from the same country as the kiwi and the All Blacks. Not the UK.',

  // ---------- Lakes & islands (336038-336054) ----------
  336038: 'Thousand-lake country in the Nordic north — the one whose flag is a blue cross on white.',
  336039: 'Country that sits on the Canadian Shield — glaciation scoured millions of basins into the bedrock.',
  336040: 'A lake island in Lake Huron, Ontario. The world\'s largest freshwater-lake island — Mani-toulin.',
  336041: 'Largest lake on an island, on Baffin Island, Nunavut. Begins with N — not Aral, not one of the Great Lakes.',
  336042: 'Lowest point on Earth, between Israel and Jordan. The salty one — its name says it all.',
  336043: 'Antarctica\'s active volcano, on Ross Island, named after Greek Erebos (god of darkness).',
  336044: 'Europe\'s largest active volcano sits on Sicily. The other Italian giant, Vesuvius, is smaller.',
  336045: 'Popocatépetl is near a capital of Aztec heritage. The Spanish-speaking American country with an Aztec past.',
  336046: 'Extinct, Andean, Ecuadorian, capped with snow. Cotopaxi is the active one — pick its dormant taller neighbor.',
  336047: 'Mauna = mountain in Hawaiian. Loa = long. Read the literal translation in the prompt.',
  336048: 'Tenerife is in the Canary Islands — Spanish territory. The peak there is the highest point in Spain.',
  336049: 'Norway-Belgium-Denmark-England all face the same shallow shelf sea — north of the English Channel.',
  336050: 'Lemurs and baobabs — the fourth-largest island, off East Africa. Not Greenland (largest), not New Guinea (second).',
  336051: 'Aphrodite emerged from the foam off the southern coast — the island shaped like a frying-pan in the eastern Med.',
  336052: 'World\'s largest island, sparsely populated, ice cap covering most of it. Hint is in the name.',
  336053: 'World\'s most populous island, home to ~150 million in Indonesia. Five letters, named for the coffee.',
  336054: 'Largest Mediterranean island sits at the toe of Italy\'s boot. Etna is the visual cue.',

  // ---------- Costume & culture (336055-336056) ----------
  336055: 'Gowni — robe-like East African Muslim dress. Country famous for Kilimanjaro and Zanzibar.',
  336056: 'Barong tagalog — sheer embroidered shirt, formal wear in the country named for King Philip II of Spain.',

  // ---------- British rivers & legends (336057-336058) ----------
  336057: 'In the Mabinogion, Bran\'s head is buried in the White Tower to protect Britain from invasion. The head is one of three "concealments".',
  336058: 'A buried London river: Fleet Street is named after it. Runs from Hampstead under King\'s Cross down to the Thames.',

  // ---------- US rivers & valleys (336059-336065) ----------
  336059: 'Grand Valley = Grand Junction, Colorado. The river that carved the Grand Canyon shares the name.',
  336060: 'A river valley reshaped by glaciation looks like a trough, not a sharp V. Carved by ice, not flowing water.',
  336061: '"Owens Valley" sits east of the Sierra Nevada in California — south of Mono Lake, west of Death Valley.',
  336062: 'Anne, not Roger — the woman banished from Massachusetts Bay for her Antinomian beliefs, killed in present-day Bronx in 1643.',
  336063: 'Capital is Little Rock — the state directly west of Mississippi, home of Bill Clinton.',
  336064: 'Trenton + Newark = the Garden State. Mid-Atlantic, between New York and Pennsylvania.',
  336065: '"Flat water" in Otoe. The state stretches along the Platte River across the Great Plains.',

  // ---------- Europe by name (336066-336081) ----------
  336066: 'Österreich = Eastern Realm. The country in the eastern Alps, capital Vienna.',
  336067: 'Brussels hosts the EU institutions — capital of the country whose famous comic detective is Tintin.',
  336068: 'The Danube forms most of this country\'s border with Romania. South of Romania, Black Sea on the east.',
  336069: 'First Nordic into the EU (1973) — the country that owns Greenland. Not Sweden, which joined later.',
  336070: 'Liberty, Equality, Fraternity — the motto of the republic born from the 1789 revolution.',
  336071: 'Ceuta and Melilla are this country\'s African enclaves on Morocco\'s coast.',
  336072: 'The Netherlands literally means "low lands." About a quarter of the country sits below sea level.',
  336073: 'Medieval Grand Duchy stretched from the Baltic to the Black Sea — modern remnant is one of the smaller Baltic states.',
  336074: 'Belgium-Germany-France triangle. EEC founding mini-state, capital shares its name with the country.',
  336075: 'Biggest economy in the EU = biggest contributor to the budget. Hint: starts with G.',
  336076: 'Two referendums (1972 and 1994), both no. Country with oil money, fjords, and a king — outside the EU.',
  336077: 'Solidarity movement, Lech Wałęsa, Gdansk shipyard — the spark for 1989 in Eastern Europe.',
  336078: 'Velvet Divorce of 1993 split Czechoslovakia. The eastern half — capital Bratislava.',
  336079: 'Famous for numbered bank accounts and neutrality — never joined the EU. Four official languages.',
  336080: 'Vänern is the EU\'s biggest lake, in southern Sweden. Easy mnemonic: Volvo country = Vänern.',
  336081: 'Bridges Europe and Asia at the Bosphorus. Muslim-majority candidate since 1999.',

  // ---------- Misc (336082-336089) ----------
  336082: 'Wat Chiang Man in Chiang Mai houses an ancient shrine featuring this animal supporting the cosmos — sacred in Hindu-Buddhist tradition.',
  336083: 'Rhode Island is mostly mainland Rhode Island plus Aquidneck Island and others — the island in the name is misleading.',
  336084: 'September 1, 1939: Germany invades a single country. That was the start of WWII.',
  336085: 'Longest river contained inside a single country/state — Polish river that flows through Krakow and Warsaw before emptying into the Baltic.',
  336086: 'A country whose capital shares its name — like Mexico City, Mexico, but smaller. Mini-state in central Europe.',
  336087: '"Sweet Home" — Birmingham is the largest city of the southern US state with the same nickname as the song.',
  336088: 'Minorca/Menorca is a Balearic island — Spanish, not Greek. The others are Aegean Greek isles.',
  336089: 'The Maltese flag was awarded the George Cross during WWII — two colors only. Red is paired with the lighter one, not green.',
  336090: 'Largest Med island = Sicily. Etna lives there. Sardinia is second, Corsica third.',
  336091: 'Napoleon was born in 1769 — the French-ruled island just north of Sardinia.',

  // ---------- Various islands & history (336092-336100) ----------
  336092: 'Vengaboys 1999 dance hit named for a Balearic party island starting with I.',
  336093: 'Djerba off Tunisia\'s southern coast — site of the 2002 Ghriba synagogue bombing.',
  336094: 'The forced march that killed thousands of Cherokee in 1838-39. Three-word name evoking grief on the trail.',
  336095: 'Latvia\'s capital, on the Daugava, was a Hanseatic League port. Estonian capital is Tallinn, Lithuanian is Vilnius.',
  336096: 'Founded May 14, 1948 — Ben-Gurion\'s declaration. The country at the eastern Med, south of Lebanon.',
  336097: 'Madagascar\'s capital has a long Malagasy name starting with A, meaning "city of the thousand."',
  336098: 'Forms the border between Washington and Oregon, mouth at Astoria. Lewis and Clark followed it to the Pacific.',
  336099: 'Cook\'s third voyage of 1770 named the eastern coast New South Wales. Phillip came later with the First Fleet.',
  336100: 'Che was born in Rosario in 1928 — country of tango, pampas, and the río de la Plata.',

  // ---------- Trojan war, etc (336101-336116, mostly Dead Sea) ----------
  336101: 'Troy faced the sea named for the wine-dark waters of Greek mythology — between the Greek mainland and Anatolia.',
  336102: 'East/West split 1949-1990. The country reunified on October 3, 1990 — Berlin Wall fell first.',
  336103: 'Ross Island is on the southernmost continent. The volcano is named after the Greek god of darkness.',
  336104: 'Selassie ruled the Horn of Africa nation that resisted Italian colonization — capital Addis Ababa, third-most-populous in Africa.',
  336105: 'Tiny city-state at the tip of the Malay Peninsula — 5+ million people on 280 square miles. Sin-ga-pore.',
  336106: 'WTO HQ shares its Swiss city with WHO and the UN European HQ — on the lake of the same name.',
  336107: 'A reef of coral in the sea — the literal English term, not the ring-shaped atoll or raised coral island.',
  336108: 'Sound the brand: a-HA-va — Hebrew for "love." Israeli Dead Sea cosmetics maker.',
  336109: 'Jewish sect believed to have produced the Dead Sea Scrolls at Qumran. Starts with E.',
  336110: 'Same answer as the Dead Sea borders question: Israel west bank, Jordan east bank.',
  336111: 'The Dead Sea is roughly 10 times saltier than the ocean (~3.5%). Pick the percentage that lands around 30.',
  336112: 'Only one river drains into the Dead Sea — the one Christ was baptized in.',
  336113: 'Genesis 19: his wife looked back at Sodom and turned to a pillar of salt. Three letters.',
  336114: 'The Dead Sea shore sits about a quarter mile below sea level — around 430m. Pick the number closest to that.',
  336115: 'Herod\'s desert fortress on a high mesa, site of the 73 CE Jewish-Roman siege. Five letters.',
  336116: 'Great Rift Valley runs from Lebanon down through East Africa — about 6,000 km, roughly 3,700 miles long.',

  // ---------- Squares & civic landmarks (336117-336122) ----------
  336117: 'Mao\'s portrait hangs at the north end. The square sits in front of the Forbidden City — capital of China.',
  336118: 'The square in front of the basilica, designed by Bernini with sweeping colonnades. Catholic Church\'s public face.',
  336119: 'Grand Place / Grote Markt — the medieval guildhall square at the heart of the EU\'s de facto capital.',
  336120: 'Azadi Square is in Tehran, not Karachi. Spot the mis-paired Iranian capital landmark.',
  336121: 'Bell tower, basilica, the Doge\'s Palace. The "drawing room" sits on the Venetian lagoon.',
  336122: 'Vlad the Impaler country. The 1989 revolution overthrew Ceaușescu — capital starts with B.',

  // ---------- Netherlands (336123-336126) ----------
  336123: 'North Sea on the west and north. Not the Red, not the Black, not the Med.',
  336124: 'Capital of the Netherlands has canals and is the largest city. The Hague is the seat of government — different.',
  336125: 'The Netherlands shares borders with two neighbors: one to the east, one to the south. Belgium and Germany.',
  336126: 'Spoken in the north of the country, recognized as the second official language. Closely related to Old English.',

  // ---------- Shared islands (336127-336133) ----------
  336127: 'Divided since the 1974 Turkish invasion. Greek south, Turkish north — only Turkey recognizes the TRNC.',
  336128: 'Land of fire at the southern tip of South America — split between Chile and Argentina along a meridian.',
  336129: 'Northern Ireland (UK) occupies the northeast of the island. The Republic occupies the rest.',
  336130: 'The Greater Antilles island shared between Haiti (west) and the Dominican Republic (east). Old Spanish name.',
  336131: 'Smallest divided territory in the world. Northern half French (Saint-Martin), southern half Dutch (Sint Maarten).',
  336132: 'Tiny granite islet in the Baltic\'s Åland Sea. Two Nordic neighbors share it — both heavily Lutheran.',
  336133: 'Sebatik is the divided island just east of Borneo. The other half belongs to Borneo\'s biggest country.',

  // ---------- Oceans (336134-336140) ----------
  336134: 'Smallest of the five oceans, mostly ice-covered, encircles the North Pole.',
  336135: 'The Mariana Trench is east of the Philippines, in the largest ocean — Pacific.',
  336136: 'Mare Pacificum = "peaceful sea." Magellan named it for the calm waters he encountered after rounding South America.',
  336137: 'Saigon is the city — and the river beside it drains into the South China Sea, not the Indian Ocean.',
  336138: 'Bounded by currents, not coasts. The Atlantic gyre sea with the floating brown seaweed.',
  336139: 'The Bering Sea sits between Alaska and Russia. Both face the largest ocean — the same one Magellan crossed.',
  336140: 'Pillars of Hercules — a narrow channel between Spain and Morocco. Iconic landmark of the western Med.',

  // ---------- Artificial islands (336141-336149) ----------
  336141: 'Île Notre-Dame built for Expo 67 in Montreal. Country of Quebec and the Rockies.',
  336142: 'Tokyo Bay artificial island named "Dream Island" in Japanese — read Yume = dream.',
  336143: 'Petrochemical industrial island created off Singapore by merging seven natural islets.',
  336144: 'Panama Canal artificial island in Gatun Lake — Smithsonian research station. "Red clay" in Spanish.',
  336145: 'Long thin Danube island in Vienna — locals nicknamed it after Rio\'s famous beach.',
  336146: 'Rokko Island sits in Osaka Bay — the country of bullet trains and Mount Fuji.',
  336147: 'Treasure Island in San Francisco Bay was built for the 1939 Golden Gate International Exposition.',
  336148: '"Pepper Islet" in Danish — half of the Øresund Bridge\'s artificial-island anchor between Copenhagen and Malmö.',
  336149: 'Floating Mexican plastic-bottle island off Isla Mujeres — in the warm sea between Mexico, Cuba, and Central America.',

  // ---------- EU (336150-336151) ----------
  336150: 'EEC founders: France, West Germany, Italy, Belgium, Netherlands, Luxembourg. The UK joined in 1973.',
  336151: 'Same Nordic no-EU country as 336076 — twice rejected in referendums.',

  // ---------- US states again (336152-336159) ----------
  336152: 'Montgomery capital + Birmingham largest = the Yellowhammer State. "Sweet Home" song.',
  336153: 'French-named state on the Gulf, named for Louis XIV. Capital starts with B.',
  336154: 'Summerfest is in Milwaukee — biggest music festival, sponsored by lager brewers since 1968.',
  336155: '"Great river" in Ojibwe. State runs along the river that defines the eastern Plains-South boundary.',
  336156: 'Fargo, ND — Coen Brothers film territory. North of South Dakota.',
  336157: 'Washington State capital is on Puget Sound\'s southern tip — small city, not Seattle.',
  336158: 'Kansas capital is also the home of Brown v. Board of Education (1954). Starts with T.',
  336159: 'Twin Cities state — Saint Paul is the capital, Minneapolis is the bigger twin.',

  // ---------- Black Sea region (336160-336168) ----------
  336160: 'A small almost-landlocked sea connected to the Black Sea by the Strait of Kerch — fed by the Don. Named for a Turkic tribe.',
  336161: 'Turkey has the longest Black Sea coast — the entire south shore from Istanbul to Batumi.',
  336162: 'Largest Black Sea coastal city other than Istanbul — major Ukrainian port founded by Catherine the Great.',
  336163: 'Three D-rivers: Danube (Romania), Dniester and Dnieper — the latter two both end in the same country.',
  336164: 'Sukhumi is the capital of the breakaway region on Georgia\'s northwestern Black Sea coast. Recognized by Russia.',
  336165: 'Meromictic = layers do not mix. Without mixing, the lower layer is starved of one gas vital for life.',
  336166: 'North-Black-Sea Ukraine is famously flat grassland — the breadbasket plains of the steppe.',
  336167: 'The Sea of Azov is famous for being barely 14 meters deep at most — almost a giant puddle by ocean standards.',
  336168: 'Urals run north-south through central Russia — far from the Black Sea. The Balkans, Caucasus, and Anatolia all touch it.',

  // ---------- Everest & islands (336169-336181) ----------
  336169: 'Everest\'s summit ridge straddles the Tibet-Nepal border. China (via Tibet) and Nepal — not India.',
  336170: 'Sir George Everest was the British surveyor of the Great Trigonometric Survey of India — the mountain was named after him as a profession honor.',
  336171: 'Same as 336037: Hillary was from the same country as the kiwi bird — not Britain.',
  336172: 'Largest island = Greenland. Ice-capped, Danish-administered.',
  336173: 'Second largest island, north of Australia, divided between Indonesia and PNG. Two-word name.',
  336174: 'Third-largest island; "Kalimantan" is the Indonesian name. Shared by Indonesia, Malaysia, and Brunei.',
  336175: 'Fourth largest island, home of lemurs and 5% of the world\'s species — off East Africa.',
  336176: 'Largest European island is Great Britain — none of the listed answers (Sicily/Sardinia/Cyprus) is correct.',
  336177: 'Canada\'s largest island lies northeast in Nunavut — between Greenland and the mainland. Five-letter name.',
  336178: 'Most populous island, Indonesian, home to ~150M people. Same as 336053 — coffee island.',
  336179: 'Old name = Ceylon. Tear-drop island off India\'s southeast tip.',
  336180: 'Kingston is the capital of the reggae island. Three syllables — not Haiti, not Hispaniola.',
  336181: 'Largest Mediterranean island, home of Etna and Sicilian cuisine. Same as 336054 and 336090.',

  // ---------- Explorers & rivers (336182-336191) ----------
  336182: 'Danish-born Russian navy captain who proved Asia and America are separate. His name is on the strait.',
  336183: 'Russia\'s great river drains into the Caspian. Famous for boat songs and stretches through cities like Volgograd.',
  336184: 'France\'s longest river curves through château country before emptying into the Atlantic at Saint-Nazaire.',
  336185: 'Rises in the Krkonoše of the Czech Republic, flows through Dresden and Hamburg into the North Sea. Single syllable.',
  336186: 'Welsh-mythology river goddess; flows past Shrewsbury and Worcester to the Bristol Channel.',
  336187: 'Ten European countries, EU\'s longest — same as 336016. Begins with D.',
  336188: 'Iberian river through Toledo and Lisbon — the longest river on the peninsula. Three letters.',
  336189: 'Same Polish river as 336085 — through Krakow, Warsaw, Gdansk to the Baltic.',
  336190: 'Po rises in the Cottian Alps in the northwest — Italian boot country.',
  336191: 'Europe\'s longest bridge spans the Tagus at Lisbon — named for the Portuguese explorer who reached India.',

  // ---------- Islands of Indonesia & Pacific (336192-336198) ----------
  336192: 'East Timor gained independence in 2002. Indonesia holds the western half — divided island starting with T.',
  336193: 'Three nations on one island: Indonesia, Malaysia, Brunei. Third-largest island, same as 336174.',
  336194: 'Homo floresiensis ("the Hobbit") was found in 2003 on this Indonesian island — same as the flower name.',
  336195: 'Same answer as 336173 — the world\'s second-largest island, shared by Indonesia and PNG.',
  336196: 'Sumatran coffee and orangutans — Indonesia\'s sixth-largest landmass, just west of Java.',
  336197: 'Krakatau sits in the Sunda Strait — between Java and Sumatra, the two big western Indonesian islands.',
  336198: 'Tambora\'s 1815 eruption caused the "year without a summer." On Sumbawa, just east of Lombok.',

  // ---------- Italy & European cities (336199-336205) ----------
  336199: 'Capital of Italy = same as 336005. Eternal City.',
  336200: 'The Alps cross northern Italy but are not entirely Italian — the Apennines run the spine of the boot, all Italian.',
  336201: 'Lutetia was the Roman name for the Parisii\'s city on the Seine — modern City of Lights.',
  336202: 'San Marco and Grand Canal mean only one place — same as 336121.',
  336203: 'Bavarian fairy-tale castle built by Ludwig II — country of beer halls and Oktoberfest.',
  336204: 'The Vltava (Smetana\'s "Moldau") runs through this Czech capital — city of a hundred spires.',
  336205: 'Broadway is on Manhattan — the theater district of the largest US city.',

  // ---------- Pacific & Caribbean islands (336206-336216) ----------
  336206: 'French Polynesian honeymoon island with a lagoon ringed by motus. Name repeats — like the dance.',
  336207: '"Beautiful garland" in the Indian Ocean — chain of low coral atolls just southwest of India and Sri Lanka.',
  336208: 'Largest Greater Antilles island, capital Havana — Castro country.',
  336209: 'Old Portuguese name "Formosa" (beautiful). Big island east of mainland China — Taipei is the capital.',
  336210: '"The Big Island" of the Hawaiian chain shares its name with the state.',
  336211: 'Nicosia is the capital, divided north-south since 1974. Third-largest Med island.',
  336212: 'Indonesian island famous for Hindu temples and surfing — small, just east of Java.',
  336213: 'Reykjavík capital, North Atlantic, Vikings and geysers. Largest geothermal economy per capita.',
  336214: 'Sixth-largest island worldwide, entirely Indonesian. Same as 336196.',
  336215: 'Australian island off the southeast coast, with its own marsupial devil. Apple-shaped on the map.',
  336216: 'Valletta capital, knights of St John, Maltese cross. Tiny Med country south of Sicily.',

  // ---------- Spain & misc (336217-336220) ----------
  336217: 'Madrid sits in the geographic center of the Iberian Peninsula — capital is *inland*, look for the dot in the middle.',
  336218: 'Spain borders Portugal (west), France (north), Andorra (Pyrenees), and Gibraltar (UK enclave). Not Germany.',
  336219: 'Eilat at the southern tip of Israel on the Red Sea — founded shortly after Israeli independence in 1948.',
  336220: 'Eilat\'s twin-city pairings include several U.S. coastal resorts — biggest is the Pacific entertainment metropolis.',

  // ---------- Niagara & Rhode Island (336221-336222) ----------
  336221: 'Horseshoe Falls (Canadian side) gets the lion\'s share of the Niagara River flow — about 90%, not 50%.',
  336222: 'Rhode Island\'s nickname plays off its long Atlantic coastline — not "Marine" or "Island."',

  // ---------- Slovakia & Slovenia (336223-336227) ----------
  336223: 'Slovakia\'s capital on the Danube — west of the country, near Vienna. Starts with B.',
  336224: 'Slovenia\'s capital sits between the Alps and the Adriatic — starts with L, ends in a vowel.',
  336225: 'Country bordering both Slovakia (north of it) and Slovenia (east of it) is the same Alpine state — Austria.',
  336226: 'The Danube touches Slovakia (Bratislava is on it) but not Slovenia. Easy way: "Slovakia = Slov-Aqua."',
  336227: 'Slovakia borders Ukraine (non-EU at the time); Slovenia borders Croatia (which joined later). Both border non-EU.',

  // ---------- Switzerland (336228-336231) ----------
  336228: 'Chocolate, watches, cheese — Swiss craftsmanship trifecta. All three.',
  336229: 'Swiss capital is Bern — federal city, not the financial one (Zurich) or the diplomatic one (Geneva).',
  336230: 'Switzerland is mostly the Alps — Apennines are Italian, Andes are South American, Ararat is Turkish.',
  336231: 'Switzerland\'s biggest city is the banking center on the Limmat — same name as a luxury insurance brand.',

  // ---------- North Korea (336232) ----------
  336232: 'NK capital sits on the Taedong River — Kim dynasty city. Six letters.',

  // ---------- US rivers (336233-336242) ----------
  336233: '"Colorado" literally means red-colored in Spanish. The river carved sandstone into the Grand Canyon.',
  336234: 'The Missouri is technically longer than its tributary the Mississippi — longest river in the US.',
  336235: 'Ohio River flows along Kentucky\'s northern border and through Illinois and West Virginia — but not through Virginia.',
  336236: 'Sacramento drains the Central Valley to San Francisco Bay — wholly inside California.',
  336237: 'Mississippi = "great river" in Ojibwe. Misi (great) + ziibi (river) — say it slowly.',
  336238: 'All three Pacific salmon species — Chinook, Coho, Steelhead — return to the Columbia to spawn.',
  336239: 'Rio Grande on the US side, Rio Bravo on the Mexican side. "Brave" not "red" or "fire."',
  336240: 'Skagit River in northwest Washington hosts the largest US bald eagle wintering ground.',
  336241: 'Mohawk "Kaniatarowanenneh" means "big waterway." Saint Lawrence is the only large North American river the answer fits.',
  336242: 'Yukon River flows from the Yukon Territory through Alaska to the Bering Sea — most of it in Alaska.',

  // ---------- Norway, Madagascar, Greek islands (336243-336252) ----------
  336243: 'Norway\'s capital at the head of Oslofjord. Same as 336008.',
  336244: 'Madagascar\'s top predator looks cat-like but is actually a mongoose relative. Three letters.',
  336245: 'Madagascar capital again — same answer as 336097.',
  336246: 'Baobab is called "bottle tree," "monkey-bread tree," and "upside-down tree." All names for the same tree.',
  336247: 'Largest Greek island — Minoan civilization, in the southern Aegean. Five letters.',
  336248: 'Navagio (Shipwreck Beach) sits on this Ionian island whose name starts with Z.',
  336249: 'Knights Hospitaller built this medieval palace as their headquarters on a southeast-Aegean island.',
  336250: 'Gozo is part of Malta, not Greece — the odd one out among Greek isles.',
  336251: 'Cave of Melissani is in the Ionian — on the island shared with Odysseus\'s Ithaca, but the bigger one.',
  336252: 'Kavala is a mainland port in Macedonia, Greece — the others are all islands.',

  // ---------- Kyoto, Thames (336253-336254) ----------
  336253: 'Shinsengumi were the Tokugawa-era swordsmen of the old imperial capital — not Tokyo.',
  336254: 'The river through London under Tower Bridge — same as the one called "Old Father" by Dickens.',

  // ---------- Famous rivers (336255-336263) ----------
  336255: 'Longest river on Earth (~6,650 km) drains northeast Africa into the Mediterranean. Three letters.',
  336256: 'Holy river of Hinduism, descending from the Himalayas through Varanasi to the Bay of Bengal.',
  336257: 'River through Paris — the Eiffel Tower stands on its left bank. Five letters.',
  336258: 'Same as 336012 — longest river in Asia, third-longest in world.',
  336259: 'Missouri gave its name to a US state — same as 336234, the country\'s longest river.',
  336260: 'Largest river by volume — drains the world\'s biggest rainforest into the Atlantic.',
  336261: 'Christ\'s baptism site — the river that flows into the Dead Sea from the north.',
  336262: 'Same as 336241 — the Mohawk "big waterway" is the Saint Lawrence.',
  336263: 'Rises in the Black Forest, flows east, empties into the Black Sea via a delta. Same as 336016 and 336187.',

  // ---------- Oklahoma & waterfalls (336264-336271) ----------
  336264: 'Sylvan Goldman invented the shopping cart in 1937 in a small south-central Oklahoma city.',
  336265: 'May 1999 tornado outbreak hit Moore, OK with 300+ mph wind speeds — strongest ever measured.',
  336266: 'Toledo is in Ohio, not Oklahoma. Spot the misfit.',
  336267: 'Angel Falls (Salto Ángel) drops 979m off Auyán-Tepuí in the Gran Sabana — Venezuelan tepui country.',
  336268: 'Jog Falls is in Karnataka, India — among the world\'s top plunge waterfalls.',
  336269: 'Rhine Falls at Schaffhausen — northern Switzerland\'s spectacular cataract.',
  336270: 'Waihilau on the Big Island — tallest US waterfall sits in the same state as Mauna Loa.',
  336271: 'Jurong Bird Park\'s 30-meter man-made waterfall — in the same small SE Asian city-state as 336105.',

  // ---------- Madagascar history & PNG (336272-336282) ----------
  336272: 'Pre-1975 name — "Malagasy" describes the people and language of the island.',
  336273: 'Madagascar is on Madagascar Island — obvious but tested.',
  336274: 'Bodrum is a Turkish resort on the Aegean, not in Madagascar.',
  336275: 'Portuguese sea captain who sighted Madagascar in 1500, blown off course en route to India. Surname starts with D.',
  336276: 'Western half = Indonesian Papua. Eastern half = Papua New Guinea. Two halves of New Guinea.',
  336277: 'Guinea is in West Africa — Equatorial Guinea, Guinea-Bissau, and Guinea sit on the same coast.',
  336278: 'PNG\'s colonial administrator until 1975 was Australia. Geographic proximity is the clue.',
  336279: 'Indonesia is "the thousand-island country" but actually has over 17,000 islands. Largest number choice.',
  336280: 'PNG is among the world\'s least urbanized — about 86% of its people live rurally.',
  336281: 'PNG\'s 2006 fertility rate (~4.6 births per woman) is among the world\'s higher rates — pick the largest plausible number.',
  336282: 'PNG\'s capital sits on the southern coast on the Gulf of Papua. Two-word, named for an Admiralty official.',

  // ---------- Egypt & Luxembourg (336283-336287) ----------
  336283: 'Egypt\'s eastern shore faces the Red Sea — opposite Saudi Arabia.',
  336284: 'Africa\'s largest city sits in the Nile delta — five letters, ancient and modern.',
  336285: 'Egypt\'s area is about 1,000,000 km². Roughly double that of a major Iberian country with 500,000 km².',
  336286: 'Herodotus\'s phrase — "Egypt is the gift of the Nile" — describes the annual inundation that fed the Nile valley.',
  336287: 'Luxembourg City\'s wealth comes from being an EU institutional and banking hub — small, central, multilingual.',

  // ---------- Waterfalls again (336288-336291) ----------
  336288: 'Virginia Falls is on the Nahanni River in the Northwest Territories — same country as the Rockies\' northern half.',
  336289: 'Eas a Chual Aluinn — Scotland\'s highest waterfall, in Sutherland. Country also known as Britain.',
  336290: 'Yumbilla Falls in Amazonas, Peru — fifth-tallest in the world.',
  336291: 'Gocta in northern Peru — only "discovered" by the wider world in 2005.',

  // ---------- Volcanoes again (336292-336293) ----------
  336292: 'Mount Unzen is on Kyushu — country of volcanoes and the Ring of Fire archipelago.',
  336293: 'Santorini\'s caldera is in the southern Aegean — Greek island chain (Cyclades).',

  // ---------- US cities (336294-336298) ----------
  336294: 'Saint Louis sits on the Mississippi\'s west bank — "Gateway to the West" was the gateway state\'s motto.',
  336295: 'Malcolm Little was born in 1925 in the largest Nebraska city — on the Missouri River.',
  336296: 'Illinois capital is the small central city where Lincoln practiced law — not Chicago.',
  336297: 'Leadville, CO — at over 10,000 feet, highest incorporated US city. Silver-mining boomtown.',
  336298: 'Amelia Earhart was born in 1897 in a small Missouri-River town in Kansas — A-tchison.',

  // ---------- Deserts (336299-336306) ----------
  336299: 'Antarctica is technically the world\'s largest desert by precipitation — the polar plateau is bone-dry.',
  336300: 'Kalahari covers parts of Botswana, Namibia, and South Africa — southern African plateau, not central Asia.',
  336301: 'Namib runs along southwest Africa\'s Atlantic coast — oldest desert, home of dunes at Sossusvlei.',
  336302: 'Rangipo on the North Island\'s volcanic plateau — barren because of pumice soil and pyroclastic ash.',
  336303: 'Atacama plateau is full of salars — salt flats. The mineral cue is the same one mined for lithium today.',
  336304: 'Simpson Desert features the parallel north-south dunes around Uluru in central Australia.',
  336305: 'Makhtesh Ramon — the great erosion crater in southern Israel\'s Negev. Iconic Negev landmark.',
  336306: 'Smallest continent and the only one entirely in one country — surrounded by ocean.',

  // ---------- Historical geography (336307-336314) ----------
  336307: 'Poland\'s pre-1989 neighbors (USSR, East Germany, Czechoslovakia) no longer exist; it now borders seven states.',
  336308: 'Kingdom of Dahomey existed in modern-day West Africa — its name was retained until 1975, when the country renamed itself B-.',
  336309: 'Former Yugoslav Republic of Macedonia, renamed North Macedonia in 2019. The acronym FYROM stands for that.',
  336310: 'Polish-Lithuanian Commonwealth (1569-1795) stretched from the Baltic to the Black Sea — biggest European state at the time.',
  336311: 'Phoenicians came from the Levantine coast — modern Lebanon\'s Sidon and Tyre were their original city-states.',
  336312: 'Myanmar was Burma until the 1989 junta renamed it. Three letters.',
  336313: 'The Republic of Turkey (1923) succeeded the Ottoman Empire — Atatürk founded the modern state.',
  336314: 'Albania was communist but never a Soviet republic — Hoxha\'s regime broke with Moscow in 1961.',

  // ---------- More capitals (336315-336323) ----------
  336315: 'Jamaica\'s capital and reggae heart — same as 336180.',
  336316: 'New Delhi was inaugurated as British India\'s capital in 1931, distinguishing it from Old Delhi.',
  336317: 'Honduras\'s capital — "silver hill" in Nahuatl. Six syllables, starts with T.',
  336318: 'Romania\'s capital sits on the Dâmbovița. Same as 336122 — "Little Paris" of the East.',
  336319: 'Ethiopia\'s capital — "new flower" in Amharic. African Union HQ.',
  336320: 'Lebanon\'s capital and port on the Mediterranean — civil-war scarred but rebuilt. Six letters.',
  336321: 'Nepal\'s capital sits in a Himalayan valley — gateway to Everest trekking.',
  336322: 'Latvia\'s capital — same as 336095. Hanseatic League port on the Baltic.',
  336323: 'Morocco\'s administrative capital on the Atlantic, even though Casablanca is bigger and more famous.',

  // ---------- Quito, Harare, etc (336324-336329) ----------
  336324: 'Quito sits in the Andes near the equator — the country named for that geographic line.',
  336325: 'Zimbabwe\'s capital, formerly Salisbury under Rhodesia. Six letters.',
  336326: 'Republic of the Congo (small one) has its capital across the river from DRC\'s Kinshasa. Starts with B.',
  336327: 'Guinea\'s port capital on the Atlantic — same name as a famous Cognac region but spelled with K.',
  336328: 'Libya\'s capital on the Mediterranean — Phoenician Oea, modern T-.',
  336329: 'Kenya\'s capital sits on a high plateau — "cool waters" in Maasai.',

  // ---------- US west (336330-336333) ----------
  336330: 'Wyoming capital, named after a Plains tribe — rodeo town on the high plains.',
  336331: 'Albuquerque is in the desert Southwest — state named "new" before "Mexico." Capital is Santa Fe.',
  336332: 'Montana capital — small mining town, named for an Alaskan port. Starts with H.',
  336333: 'Louisiana borders Texas (west), Arkansas (north), Mississippi (east). Oklahoma is one state north.',

  // ---------- Euroregions (336334-336340) ----------
  336334: 'Beskidy spans the Carpathian crook — Czech Republic, Poland, Slovakia all meet there.',
  336335: 'Adriatic Euroregion includes Italy and the Balkan coast — but Serbia is landlocked since 2006.',
  336336: 'Tornio River = Torne River — forms the Sweden-Finland border in Lapland.',
  336337: 'Cross-Channel covers Kent and Pas-de-Calais — France, UK, Belgium share that maritime triangle.',
  336338: 'Pomerania straddles the river that forms the Germany-Poland border. Same name in Polish: Odra.',
  336339: '"Tri" means three Rhine countries: France (Alsace), Germany (Baden), Switzerland (Basel).',
  336340: 'Pyrenees mountains separate two countries — France in the north, Spain in the south.',

  // ---------- Colorado & misc (336341-336348) ----------
  336341: 'Rocky Mountain National Park\'s emblematic species — curled-horn ungulate of high alpine.',
  336342: 'Colorado River flows through Hoover Dam, Grand Canyon, and Arches NP — all three.',
  336343: '"Richest Square Mile" — the gold-rush town in Gilpin County, just west of Denver.',
  336344: 'Denver\'s Mile-High City boasts more parks than any other US city — over 200.',
  336345: 'Mount Nyiragongo is in the DRC — Africa\'s most active volcano.',
  336346: 'Sakurajima looms over Kagoshima Bay in southern Kyushu — Japan\'s most active volcano.',
  336347: 'Koryaksky sits on Kamchatka — Far East Russia\'s peninsula of volcanoes.',
  336348: 'Fourpeaked Mountain is in Katmai — Alaska\'s peninsula of volcanoes between the mainland and the Aleutians.',

  // ---------- Mount Athos & Sweden (336349-336352) ----------
  336349: 'Mount Athos was incorporated into Greece by treaty in 1913 — same year as the Treaty of Bucharest.',
  336350: 'Sweden borders Norway (west) and Finland (east). Denmark is across the Øresund — no land border.',
  336351: 'Sweden\'s capital on an archipelago of 14 islands — Nobel Prizes are awarded there.',
  336352: 'Brazil moved its capital inland from Rio to a planned modernist city in the highlands — completed in 1960.',
}

// No questions in the current geography bank trip the audit (correct ≥1.8x longer
// than the longest wrong AND ≥20-char gap). The map is kept empty for parity
// with the catalog polish pattern; entries can be added later if the data shifts.
export const OPEN_TRIVIA_GEO_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {}
