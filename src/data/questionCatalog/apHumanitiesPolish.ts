// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the three AP Humanities banks: English Literature (4400400-449),
// World History (4400600-649), and Art History (4400700-749).
//
// AP_HUMANITIES_SUB_TOPICS maps each question ID to a lesson-shaped cluster
// label drawn from the AP CED for each discipline.
//
// AP_HUMANITIES_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line nudge whose voice matches the discipline — close-reading instincts
// for the Lit teacher, causal/contextual chains for the AP historian, and
// form/function/context reading for the art historian.
//
// AP_HUMANITIES_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ≥1.8x longer than longest wrong AND
// ≥20 character gap). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no information is lost from the bank.

// ---------------------------------------------------------------------------
// AP_HUMANITIES_SUB_TOPICS — id -> cluster label
// ---------------------------------------------------------------------------

export const AP_HUMANITIES_SUB_TOPICS: Record<number, string> = {
  // ---------- AP English Literature (4400400-449) ----------
  // Poetic Devices
  4400400: 'Poetic Devices',
  4400401: 'Poetic Devices',
  4400402: 'Poetic Devices',
  4400403: 'Poetic Devices',
  4400404: 'Poetic Devices',
  4400405: 'Poetic Devices',
  4400406: 'Poetic Devices',
  4400407: 'Poetic Devices',
  4400408: 'Poetic Devices',
  4400409: 'Poetic Devices',
  4400410: 'Poetic Devices',
  4400411: 'Poetic Devices',
  // Drama & Shakespeare
  4400412: 'Drama & Shakespeare',
  4400413: 'Drama & Shakespeare',
  4400414: 'Drama & Shakespeare',
  4400415: 'Drama & Shakespeare',
  4400416: 'Drama & Shakespeare',
  4400417: 'Drama & Shakespeare',
  4400418: 'Drama & Shakespeare',
  4400419: 'Drama & Shakespeare',
  // Prose Fiction & Narrative Technique
  4400420: 'Prose Fiction & Narrative Technique',
  4400421: 'Prose Fiction & Narrative Technique',
  4400422: 'Prose Fiction & Narrative Technique',
  4400423: 'Prose Fiction & Narrative Technique',
  4400424: 'Prose Fiction & Narrative Technique',
  4400425: 'Prose Fiction & Narrative Technique',
  4400426: 'Prose Fiction & Narrative Technique',
  4400427: 'Prose Fiction & Narrative Technique',
  4400428: 'Prose Fiction & Narrative Technique',
  4400429: 'Prose Fiction & Narrative Technique',
  4400430: 'Prose Fiction & Narrative Technique',
  4400431: 'Prose Fiction & Narrative Technique',
  // Character & Relationships
  4400432: 'Character & Relationships',
  4400433: 'Character & Relationships',
  4400434: 'Character & Relationships',
  4400435: 'Character & Relationships',
  4400436: 'Character & Relationships',
  4400437: 'Character & Relationships',
  // Theme & Meaning
  4400438: 'Theme & Meaning',
  4400439: 'Theme & Meaning',
  4400440: 'Theme & Meaning',
  4400441: 'Theme & Meaning',
  4400442: 'Theme & Meaning',
  4400443: 'Theme & Meaning',
  // Essay Craft
  4400444: 'Essay Craft',
  4400445: 'Essay Craft',
  4400446: 'Essay Craft',
  4400447: 'Essay Craft',
  4400448: 'Essay Craft',
  4400449: 'Essay Craft',

  // ---------- AP World History (4400600-649) ----------
  // Unit 1: Global Tapestry 1200-1450
  4400600: 'Global Tapestry 1200-1450',
  4400601: 'Global Tapestry 1200-1450',
  4400602: 'Global Tapestry 1200-1450',
  4400603: 'Global Tapestry 1200-1450',
  4400604: 'Global Tapestry 1200-1450',
  4400605: 'Global Tapestry 1200-1450',
  // Unit 2: Networks of Exchange 1200-1450
  4400606: 'Networks of Exchange 1200-1450',
  4400607: 'Networks of Exchange 1200-1450',
  4400608: 'Networks of Exchange 1200-1450',
  4400609: 'Networks of Exchange 1200-1450',
  4400610: 'Networks of Exchange 1200-1450',
  // Unit 3: Land-Based Empires 1450-1750
  4400611: 'Land-Based Empires 1450-1750',
  4400612: 'Land-Based Empires 1450-1750',
  4400613: 'Land-Based Empires 1450-1750',
  4400614: 'Land-Based Empires 1450-1750',
  4400615: 'Land-Based Empires 1450-1750',
  4400616: 'Land-Based Empires 1450-1750',
  // Unit 4: Transoceanic Interconnections 1450-1750
  4400617: 'Transoceanic Interconnections 1450-1750',
  4400618: 'Transoceanic Interconnections 1450-1750',
  4400619: 'Transoceanic Interconnections 1450-1750',
  4400620: 'Transoceanic Interconnections 1450-1750',
  4400621: 'Transoceanic Interconnections 1450-1750',
  // Unit 5: Revolutions 1750-1900
  4400622: 'Revolutions 1750-1900',
  4400623: 'Revolutions 1750-1900',
  4400624: 'Revolutions 1750-1900',
  4400625: 'Revolutions 1750-1900',
  4400626: 'Revolutions 1750-1900',
  // Unit 6: Industrialization & Imperialism 1750-1900
  4400627: 'Industrialization & Imperialism 1750-1900',
  4400628: 'Industrialization & Imperialism 1750-1900',
  4400629: 'Industrialization & Imperialism 1750-1900',
  4400630: 'Industrialization & Imperialism 1750-1900',
  4400631: 'Industrialization & Imperialism 1750-1900',
  // Unit 7: Global Conflict 1900-present
  4400632: 'Global Conflict 1900-present',
  4400633: 'Global Conflict 1900-present',
  4400634: 'Global Conflict 1900-present',
  4400635: 'Global Conflict 1900-present',
  4400636: 'Global Conflict 1900-present',
  // Unit 8: Cold War & Decolonization 1900-present
  4400637: 'Cold War & Decolonization 1900-present',
  4400638: 'Cold War & Decolonization 1900-present',
  4400639: 'Cold War & Decolonization 1900-present',
  4400640: 'Cold War & Decolonization 1900-present',
  4400641: 'Cold War & Decolonization 1900-present',
  4400642: 'Cold War & Decolonization 1900-present',
  // Unit 9: Globalization 1900-present
  4400643: 'Globalization 1900-present',
  4400644: 'Globalization 1900-present',
  4400645: 'Globalization 1900-present',
  4400646: 'Globalization 1900-present',
  4400647: 'Globalization 1900-present',
  4400648: 'Globalization 1900-present',
  4400649: 'Globalization 1900-present',

  // ---------- AP Art History (4400700-749) ----------
  // Global Prehistory
  4400700: 'Global Prehistory',
  4400701: 'Global Prehistory',
  4400702: 'Global Prehistory',
  4400703: 'Global Prehistory',
  4400704: 'Global Prehistory',
  // Ancient Mediterranean
  4400705: 'Ancient Mediterranean',
  4400706: 'Ancient Mediterranean',
  4400707: 'Ancient Mediterranean',
  4400708: 'Ancient Mediterranean',
  4400709: 'Ancient Mediterranean',
  // Early Europe & Colonial Americas
  4400710: 'Early Europe & Colonial Americas',
  4400711: 'Early Europe & Colonial Americas',
  4400712: 'Early Europe & Colonial Americas',
  4400713: 'Early Europe & Colonial Americas',
  4400714: 'Early Europe & Colonial Americas',
  4400715: 'Early Europe & Colonial Americas',
  4400716: 'Early Europe & Colonial Americas',
  4400717: 'Early Europe & Colonial Americas',
  // Later Europe & Americas
  4400718: 'Later Europe & Americas',
  4400719: 'Later Europe & Americas',
  4400720: 'Later Europe & Americas',
  4400721: 'Later Europe & Americas',
  4400722: 'Later Europe & Americas',
  4400723: 'Later Europe & Americas',
  // Indigenous Americas
  4400724: 'Indigenous Americas',
  4400725: 'Indigenous Americas',
  4400726: 'Indigenous Americas',
  4400727: 'Indigenous Americas',
  4400728: 'Indigenous Americas',
  // Africa
  4400729: 'Africa',
  4400730: 'Africa',
  4400731: 'Africa',
  4400732: 'Africa',
  4400733: 'Africa',
  // West & Central Asia
  4400734: 'West & Central Asia',
  4400735: 'West & Central Asia',
  4400736: 'West & Central Asia',
  4400737: 'West & Central Asia',
  4400738: 'West & Central Asia',
  // South/East/SE Asia
  4400739: 'South/East/SE Asia',
  4400740: 'South/East/SE Asia',
  4400741: 'South/East/SE Asia',
  4400742: 'South/East/SE Asia',
  4400743: 'South/East/SE Asia',
  // The Pacific
  4400744: 'The Pacific',
  4400745: 'The Pacific',
  4400746: 'The Pacific',
  4400747: 'The Pacific',
  // Global Contemporary
  4400748: 'Global Contemporary',
  4400749: 'Global Contemporary',
}

// ---------------------------------------------------------------------------
// AP_HUMANITIES_MENTOR_HINTS — id -> one-line second-person nudge
// Voice: Lit teacher with strong close-reading instincts; AP historian who
// connects causes and effects; art historian who reads form, function, context.
// ---------------------------------------------------------------------------

export const AP_HUMANITIES_MENTOR_HINTS: Record<number, string> = {
  // ---------- AP English Literature ----------
  4400400: 'Look at where the pause sits — line endings carry their own grammar. If syntax spills past the break, that is enjambment.',
  4400401: 'The mark is mid-line, not at the break. Name the device that lives inside a line, not across one.',
  4400402: 'Strike "like" and "as" from your toolkit first — what is left when the comparison is asserted as identity?',
  4400403: 'Ask whether the substitute is literally a piece of the thing or merely associated with it. Part-for-whole is synecdoche.',
  4400404: 'Tone is the speaker\'s posture toward the subject. Mood is what the reader feels. Locate the seat of the feeling.',
  4400405: 'Compare the connotations side by side. "Busy" is neutral; "throbbing" carries the body into the street.',
  4400406: 'List the senses the lines actually engage. Bishop is asking the reader to feel the gill, not just see it.',
  4400407: 'Count syllables. Five iambs gives you ten beats — unstressed, stressed, ten times. That is the sonnet baseline.',
  4400408: 'Map the form first. Shakespearean sonnets develop, develop, develop, then turn in the closing couplet.',
  4400409: 'Whitman has no metrical contract. If the line organizes by breath and image rather than by foot, you are in free verse.',
  4400410: 'Ask who else is on stage. The Duke is speaking at someone who never answers — that auditor is the form.',
  4400411: 'Allusion does interpretive work, not biographical decoration. What does Dante\'s damned soul lend to Prufrock\'s mouth?',
  4400412: 'Soliloquy requires solitude on stage. Count the bodies first, then label.',
  4400413: 'Local irony lives in a single line; dramatic irony lives across the audience-character gap. Iago\'s lie is structural.',
  4400414: 'Noble characters in serious moments speak verse. Unrhymed iambic pentameter is Shakespeare\'s default register.',
  4400415: 'Hamartia is the error or flaw. Hubris is one variety; catharsis is the audience\'s feeling; anagnorisis is the recognition.',
  4400416: 'Comedies end in marriage and integration; tragedies end in death and disorder. Map the closing ritual.',
  4400417: 'An aside lives during ongoing action with others present but conveniently unhearing. Soliloquy needs an empty stage.',
  4400418: 'Single-line, alternating, fast — that is the rhythm of stichomythia. Listen for the volley.',
  4400419: 'One foot of substitution stays inside the metrical contract; it does not abandon it. The departure itself is the meaning.',
  4400420: 'Check the pronouns. Third-person grammar colored by a character\'s diction is the signature of free indirect discourse.',
  4400421: 'Ask what you the reader are meant to do — believe the narrator, or read past them? The latter answer names unreliability.',
  4400422: 'When thought arrives unsorted — sensation, memory, association, juxtaposed without exposition — call it stream of consciousness.',
  4400423: 'Where does the story start in time? In medias res names a structural starting choice, not a plot device.',
  4400424: 'Setting in serious fiction is not backdrop; it is pressure. Ask whether the choices would still make sense elsewhere.',
  4400425: 'Count the minds the narrator can enter. One = limited; many = omniscient; the grammar reveals which.',
  4400426: 'A frame opens with a storyteller telling someone the story you are about to read. Locate the outer scene.',
  4400427: 'Motifs accumulate. A single image is a symbol; the same image returning, transformed by each appearance, is a motif.',
  4400428: 'Time is the prose writer\'s clay. Compression names summary; expansion names scene. Ask what the author chose to dwell on.',
  4400429: 'The protagonist grows up across the novel. That formation arc names the genre — Dickens, Brontë, Joyce, Morrison.',
  4400430: 'Listen for the gap between elevated diction and a trivial premise. That gap is where Austen\'s irony lives.',
  4400431: 'Strong setting mirrors and intensifies interior weather. Brontë\'s storms are what passion looks like on a map.',
  4400432: 'A foil illuminates by contrast, not by opposition. Laertes is doing the same job Hamlet refuses to do.',
  4400433: 'Dynamic vs static is the change axis; flat vs round is the complexity axis. Keep them separate.',
  4400434: 'When the same character type recurs across cultures and centuries, you are naming an archetype, not a borrowing.',
  4400435: 'Forster cares about complexity, not morality. A flat villain is still flat; a round saint is still round.',
  4400436: 'Show, don\'t tell. When character emerges from action and detail rather than narrator label, that is indirect characterization.',
  4400437: 'Antagonism need not be a person. Class, gender, family expectation can carry the conflict — name the force.',
  4400438: 'A theme is a full sentence about a topic. A noun phrase is a label; only a claim is a theme.',
  4400439: 'Treat repeated images as a network, not a list. Let the meanings rub against each other.',
  4400440: 'Designed ambiguity is the meaning, not the puzzle. Name what is being held open and ask what the holding does.',
  4400441: 'Adjacency does the work. Wedding next to funeral, plenty next to famine — the meaning lives in the gap.',
  4400442: 'A pattern repeated across a whole novel is design, not coincidence. Hardy\'s inversions indict the moral order itself.',
  4400443: 'Great symbols carry multiple meanings simultaneously. Forcing a single decoding flattens what makes the image great.',
  4400444: 'A defensible thesis is an interpretive claim someone could disagree with — not a fact, not a list, not a vague compliment.',
  4400445: 'Restating the poem in different words is paraphrase. Commentary explains how the language makes the meaning happen.',
  4400446: 'A line of reasoning is the chain of claims connecting paragraphs to thesis. Lists of devices are not arguments.',
  4400447: 'Sophistication is a quality of thinking, not of vocabulary. Name the tension the work refuses to resolve.',
  4400448: 'Weave the quotation into your own sentence. Embedded fragments do more work than block-and-restate every time.',
  4400449: 'Three moves: name the technique, identify the effect, connect it to the larger claim. Skip any one and you have not earned the credit.',

  // ---------- AP World History ----------
  4400600: 'Song China deliberately weakened hereditary military families. Look for the bureaucratic alternative they built up instead.',
  4400601: 'After 1258 the political center fragments, but the cultural infrastructure — law, language, faith — keeps the world connected.',
  4400602: 'The hajj is the cause; the cause shows itself through ostentatious gold-spending across Mamluk Egypt. Read it as evidence of wealth and integration.',
  4400603: 'Both empires conquered. The difference is in administration — what tools did each use to hold space?',
  4400604: 'Manors are use-rights plus obligations, not freehold ownership and not wage labor. Locate the customary tie to the lord.',
  4400605: 'Read the passage on its own terms. Polo describes ten markets and foreign merchants — that is vitality, not collapse.',
  4400606: 'Pax Mongolica is a historian\'s shorthand for trade-route security, not a treaty. Ask what made the routes safer to use.',
  4400607: 'Bulk vs luxury, and how the wind cooperated. Monsoons let dhows carry timber and grain, not just spice and silk.',
  4400608: 'The technology is the camel, and the network is Muslim merchants. Both arrive together to break the Sahara as a barrier.',
  4400609: 'The plague rode the same routes silk did. Connectivity carried pathogens as efficiently as it carried goods.',
  4400610: 'Ibn Battuta names the jurisprudence school — Shafi\'i. That detail places Kilwa inside the Sunni Muslim world by 1331.',
  4400611: 'Gunpowder empires use artillery to build large multiethnic states. Cavalry persists; mass production does not yet exist.',
  4400612: 'Millets give recognized religious communities limited autonomy. It is religious-civil, not military, and not forced conversion.',
  4400613: 'Akbar is the religious-toleration emperor. Aurangzeb is the orthodoxy emperor — keep them straight.',
  4400614: 'Two halves of the same question: why China retreated, and why Portugal pressed on. Each answer is about incentives, not capability.',
  4400615: 'The commodity is sable fur. The actors are Cossacks. The constraint is the Qing border at the Amur.',
  4400616: 'Sakoku is selective closure, not total isolation. Trade kept running at Nagasaki; Christianity was the target.',
  4400617: 'No prior immunity is the load-bearing phrase. Smallpox, measles, and others did the demographic work.',
  4400618: 'Joint-stock companies pool capital and spread risk. They are private under charter, not crown-owned, and they are armed.',
  4400619: 'Find the slave-trade leg explicitly. Goods to Africa, enslaved people to the Americas, raw commodities back to Europe.',
  4400620: 'Encomienda is coerced indigenous labor in exchange for "protection" and Christianization. Distinct in law from chattel slavery, in practice often worse.',
  4400621: 'Chinese demand for silver pulled American silver across the Pacific via Manila. The system is global by 1571.',
  4400622: 'The revolutions speak the language of natural rights and consent of the governed. Divine right is the target, not the foundation.',
  4400623: 'Haiti is the first successful large-scale enslaved revolt. It produced a Black-led state and ended slavery there in 1804.',
  4400624: 'Creole elites lead independence to displace peninsular Spanish authority. Indigenous communities play varied roles but do not lead.',
  4400625: 'No single factor. List the British advantages — coal, transport, capital, agriculture, empire — and read them as a stack.',
  4400626: 'Tocqueville is observing associational density, not class or politics. Read the passage on what it actually praises.',
  4400627: 'Berlin codified European partition rules without African representation. Africa was the object, not a party.',
  4400628: 'Nanjing opens the "century of humiliation" — unequal treaties, treaty ports, extraterritoriality, indemnities. China lost.',
  4400629: 'Meiji is defensive modernization: import Western models to keep sovereignty. It breaks with Tokugawa, not restores it.',
  4400630: 'After 1857 the Crown replaces the Company. The Government of India Act of 1858 is the legal hinge.',
  4400631: 'Berlin\'s notification clause is a tool for managing European rivalry. African sovereignty is not what is being protected.',
  4400632: 'MAIN plus Sarajevo. Militarism, alliances, imperialism, nationalism — and the spark that lit them in 1914.',
  4400633: 'Reparations, territorial loss, war-guilt, exclusion from the League. The treaty\'s punishments fed German revanchism.',
  4400634: 'Total war mobilizes whole economies and civilian populations. The civilian-military line blurs in both world wars.',
  4400635: 'Racial ideology of extermination plus modern state bureaucracy plus industrial methods. The combination is what is distinctive.',
  4400636: 'Article 231 names Germany. Read it as fuel for nationalist mobilization against the Weimar Republic.',
  4400637: 'Partition produces two states and immense displacement. Bangladesh is a 1971 event; do not collapse it into 1947.',
  4400638: 'Three causes, not one: weakened Europe after WWII, anti-colonial nationalism, Cold War pressure on overt empire.',
  4400639: 'Korea is the first hot Cold War proxy. UN coalition against North Korea and China; superpower involvement on both sides.',
  4400640: 'The crisis brings the brink, then yields arms-control structures — hotline, Limited Test Ban Treaty. The Cold War continues.',
  4400641: 'Bandung gathers newly independent Asian and African states between the two blocs. Not Warsaw Pact, not EEC.',
  4400642: 'Nasser asserts post-colonial sovereignty over strategic infrastructure. Read the passage as nationalization, not surrender.',
  4400643: 'Stagnation plus Gorbachev\'s reforms plus republic-level nationalism. No invasion, no successful coup.',
  4400644: 'Integration was built to make another European war unthinkable. Coal and Steel, then EEC, then EU.',
  4400645: 'WTO accession deepens integration, not autonomy. China stayed export-led and stayed one-party.',
  4400646: 'Neoliberalism is privatization, deregulation, trade liberalization, and selective state retrenchment. The direction is openness.',
  4400647: 'BRIC is an economic-size grouping, not a military alliance. Brazil, Russia, India, China, later South Africa.',
  4400648: 'The fight is over historical vs current emissions and who pays for the transition. Climate diplomacy is distributive.',
  4400649: 'Look for durable structural continuities — connectivity, pathogen flow, technology diffusion — without flattening real differences.',

  // ---------- AP Art History ----------
  4400700: 'Portable charcoal-on-stone slabs from a Namibian rock shelter. The medium and continent matter together.',
  4400701: 'Solstice alignment, not equinox or magnetic north. The Heel Stone marks the midsummer sunrise.',
  4400702: 'The cave is part of the painting. The bulls use rock contour to suggest volume — no plaster, no relief.',
  4400703: 'Both works flatten the figure to a schematic silhouette. Compare strategies of abstraction, not materials.',
  4400704: 'Square outside, circle inside, buried in tombs. The geometry is cosmological; the context is ritual.',
  4400705: 'The Parthenon is civic-religious propaganda for post-Persian-War Athens, with Athena at its center.',
  4400706: 'Polykleitos wrote a canon and showed contrapposto. The body becomes a system of ratios.',
  4400707: 'Roman concrete graded by weight — heavy at the base, lighter near the oculus. Engineering, not Gothic, not iron.',
  4400708: 'Polykleitan body plus narrative cuirass. The Greek form serves a new Roman imperial message.',
  4400709: 'Greek contrapposto vs Egyptian frontality — both choices, both encoding cultural priorities. Read them as parallel solutions.',
  4400710: 'Pendentives let a circle sit on a square. That is the Hagia Sophia move.',
  4400711: 'Gold, enamel, gemstones. Byzantine technique reused and expanded by Venice over centuries.',
  4400712: 'It is embroidery, not tapestry. The needlework medium is part of the narrative pacing.',
  4400713: 'High Gothic = pointed arches, ribbed vaults, flying buttresses, stained-glass clerestory. The wall dissolves into light.',
  4400714: 'Leonardo experimented with oil on dry plaster instead of buon fresco. The medium itself is the deterioration.',
  4400715: 'Julius II is the patron. Vatican, not Florence. Pre-Trent, pre-sack.',
  4400716: 'Renaissance equilibrium vs Baroque action. Bernini freezes the sling release; Michelangelo holds calm contrapposto.',
  4400717: 'The painting makes the viewer\'s position part of its argument. Sightlines and the mirror do the work.',
  4400718: 'Liberty is allegory; the bodies and the tricolor are 1830. The July Revolution overthrew Charles X.',
  4400719: 'Manet rewrites Titian for modern Paris — same pose, but she looks back. The scandal is the gaze.',
  4400720: 'Impasto and swirling brushwork. The surface itself carries the feeling of the night sky.',
  4400721: 'Goya refuses to ennoble the victors. The light falls on the anonymous Spanish civilian, not on Napoleon.',
  4400722: 'Iberian sculpture plus African masks plus late Cézanne. Three sources colliding in one canvas.',
  4400723: 'Sixty panels of tempera, painted one color at a time across the whole series. Migration narrated as sequence.',
  4400724: 'Two shrines on top: Huitzilopochtli (war/sun) and Tlaloc (rain/agriculture). Mexica cosmology paired.',
  4400725: 'Featherwork plus gold on a flexible base. Quetzal feathers are the diplomatic-grade material.',
  4400726: 'Trade beads and trade wool, but the floral vocabulary continues older quillwork. Materials change; authorship does not.',
  4400727: 'Both objects record imperial information — administration, ritual, tribute. The Andes used material media, not alphabetic script.',
  4400728: 'Royal women\'s ritual labor as dynastic evidence. Lady Xoc\'s bloodletting is political theology.',
  4400729: 'Earthen architecture with toron beams. The beams are scaffolding for annual community replastering.',
  4400730: 'Lost-wax cast copper alloy at a royal Yoruba center. Sophisticated metallurgy in West Africa, c. 12th-15th century.',
  4400731: 'Masks are performed, not displayed. The dance, music, and audience are part of the form.',
  4400732: 'Benin plaques record the Oba and his court — and already include Portuguese traders as a recurring subject.',
  4400733: 'A nkisi nkondi binds oaths and adjudicates disputes through a ritual specialist. The blades record activations.',
  4400734: 'Apadana reliefs project Achaemenid order through repeated, ordered delegations. Each delegation distinct; all subordinated.',
  4400735: 'In Islamic tradition the Kaaba is the house of Ibrahim and Ismail, rededicated by Muhammad. It anchors the qibla globally.',
  4400736: 'Opaque watercolor, ink, and gold on prepared paper. Persian manuscript painting is layered, not modeled.',
  4400737: 'The Alhambra makes water structural. Slender columns, stucco muqarnas, central fountain — a Nasrid composition.',
  4400738: 'Persian narrative folios use scale and stacking, not single-point perspective. The space is decorative narrative.',
  4400739: 'A stupa enshrines relics and supports circumambulation. The body of the devotee is part of what the building does.',
  4400740: 'Borobudur is a walked teaching. The terraces move pilgrims through reliefs toward the formless realm.',
  4400741: 'Forbidden City = strict north-south axis of successive halls. Hierarchy is something you walk through.',
  4400742: 'Jowo Rinpoche is a relic-presence, not principally an art object. The devotional frame governs every description.',
  4400743: 'Ukiyo-e is collaborative: designer, carver, printer. Multi-block color print, not solo drawing.',
  4400744: 'Rare feathers, chiefly use, mana concentrated in the garment. The \'ahu \'ula is an Indigenous Hawaiian ali\'i marker.',
  4400745: 'Entering a wharenui is entering the body of the ancestor. The architectural metaphor is constitutive, not decorative.',
  4400746: 'Moai face inland, toward the community, on ahu platforms. They are ancestral, not astronomical, not extraterrestrial.',
  4400747: 'Malagan figures do their funerary job and end. The value is in the rite, not in indefinite preservation.',
  4400748: 'Sherman stages herself in fictive film stills. The conventions of cinema are used to expose how femininity is constructed.',
  4400749: 'Both works make site, material, and elapsed time part of the meaning. Earthworks and intervention, not portable studio objects.',
}

// ---------------------------------------------------------------------------
// AP_HUMANITIES_CORRECT_SHORTENED — questions where the correct answer ran
// substantially longer than the longest distractor (ratio ≥1.8x AND ≥20 char
// gap). Each entry shortens `correct` to a punchier line and pushes the
// trimmed explanatory detail into `lessonAddendum`.
// ---------------------------------------------------------------------------

export const AP_HUMANITIES_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- English Literature ----------
  4400406: {
    newCorrect: 'Tactile and visual imagery that estranges a familiar object',
    lessonAddendum: 'Bishop\'s lines work by insisting on the fish\'s strangeness — the gills are "fresh and crisp with blood," registering as both touch and sight at once. The estrangement is what turns a caught fish into an object of attention.',
  },
  4400409: {
    newCorrect: 'Free verse — no regular meter or rhyme, organized by breath and image',
    lessonAddendum: 'Whitman\'s long lines abandon the metrical contract and lean instead on parallelism, anaphora, and the cataloguing breath. Later modernists extend the mode; the founding English-language practitioner is Whitman.',
  },
  4400411: {
    newCorrect: 'Framing Prufrock\'s confession as a damned soul\'s — one who speaks only because no one returns',
    lessonAddendum: 'Eliot borrows Dante\'s Guido da Montefeltro, who confesses freely from hell because he believes none will carry the words back. The epigraph turns the love song that follows into a confession from a place of no return.',
  },
  4400430: {
    newCorrect: 'Ironic — grand "universally acknowledged" inflates a marketplace cliché',
    lessonAddendum: 'Austen\'s mock-philosophical opening lets elevated diction overshoot a trivial premise until it audibly mocks itself. The whole novel\'s tonal contract is set in this single sentence — read every later judgment with one ear tuned to that gap.',
  },
  4400438: {
    newCorrect: 'Self-knowledge arrives too late to redeem the choices it would have changed',
    lessonAddendum: 'Topics are nouns (self-knowledge, family, coming of age). Themes are full claims about those topics. The AP rubric specifically rewards theme statements that take the shape of a sentence, not a label — which is exactly why this question\'s correct answer must run longer than its distractors.',
  },
  4400447: {
    newCorrect: 'Identifying a tension the work holds open, and arguing for its interpretive significance',
    lessonAddendum: 'The sophistication point is reserved for complexity of thought, not vocabulary or volume. The most reliable path is to name a contradiction the text refuses to resolve and to show what that refusal does for the work\'s meaning.',
  },
  4400448: {
    newCorrect: 'Donne\'s speaker collapses devotion and demand in "Busy old fool, unruly Sun"',
    lessonAddendum: 'The embedded fragment grafts intimate impatience onto the cosmological order, doing analytical work inside the writer\'s own sentence. Embedded quotation outperforms block-and-restate because it keeps interpretive pressure on the words even as they appear.',
  },
  4400449: {
    newCorrect: 'Name the technique, identify the precise effect, and connect it to the larger claim',
    lessonAddendum: 'Each of the three moves is independently necessary. Skipping the technique gives you reaction. Skipping the effect gives you label. Skipping the connection gives you trivia. Commentary earns its keep only when all three land in a single passage of analysis.',
  },

  // ---------- World History ----------
  4400604: {
    newCorrect: 'Tied peasants to land they worked, with obligations owed to a local lord',
    lessonAddendum: 'The medieval manor combined customary obligations, agricultural self-sufficiency, and local lordship in exchange for protection. Peasants held use-rights rather than freehold. The system began to weaken after the Black Death in the mid-fourteenth century.',
  },
  4400614: {
    newCorrect: 'Ming priorities favored frontier defense over fleets; Portugal had no alternative path to Asian wealth',
    lessonAddendum: 'Ming retrenchment reflected Confucian skepticism of merchant influence, fiscal strain, and strategic focus on the northern frontier. Portugal, locked out of Venetian and Muslim middleman networks, had every incentive to push around Africa and across the Indian Ocean.',
  },
  4400616: {
    newCorrect: 'Limit Christian missionary influence while preserving controlled trade through Nagasaki',
    lessonAddendum: 'Sakoku channelled foreign contact through tightly managed ports — Nagasaki for Chinese and Dutch traders, Korea and the Ryukyus via separate channels — while suppressing Christianity and blocking European political encroachment. The closure was selective, not total.',
  },
  4400618: {
    newCorrect: 'Pooled private capital and spread risk, enabling sustained long-distance trade and quasi-state powers',
    lessonAddendum: 'Joint-stock companies combined state-granted monopolies with private risk-sharing and military rights, prefiguring modern multinational corporations. The Dutch VOC and English EIC are the textbook examples; both were chartered by states but owned by shareholders, and both used armed force.',
  },
  4400625: {
    newCorrect: 'A stack: coal, transport, capital markets, agricultural productivity, Atlantic and imperial markets',
    lessonAddendum: 'No single factor sufficed. Britain combined coal geology, navigable waterways and canals, secure property rights, financial institutions, slave-produced cotton, and colonial markets. Historians debate weighting; the AP move is to refuse a monocausal answer.',
  },
  4400626: {
    newCorrect: 'European fascination with the density of voluntary civic associations in the new United States',
    lessonAddendum: 'Tocqueville\'s Democracy in America is a touchstone for arguments that durable democracy depends on dense, non-state associational life. The cited passage is specifically about associations, not about the equality of conditions Tocqueville treats elsewhere.',
  },
  4400630: {
    newCorrect: 'Rule passed from the East India Company to the British Crown under the 1858 Government of India Act',
    lessonAddendum: 'After 1857 the British Raj replaced Company rule, the last Mughal emperor was deposed and exiled, and Britain restructured its army and administration in India. Indian independence is in 1947, not 1858.',
  },
  4400632: {
    newCorrect: 'MAIN — militarism, alliances, imperialism, nationalism — triggered by Sarajevo in 1914',
    lessonAddendum: 'The MAIN framework plus the assassination of Archduke Franz Ferdinand is the standard AP causal sketch for WWI. The United States entered in 1917 in response to unrestricted submarine warfare and the Zimmermann Telegram, well after the war began.',
  },
  4400635: {
    newCorrect: 'Racial ideology of extermination combined with industrial-bureaucratic state methods',
    lessonAddendum: 'The Holocaust\'s combination of racial ideology, modern state capacity, and industrial methods is central to twentieth-century moral and historical reflection. Jewish civilians were the principal target, alongside Roma, Soviet POWs, disabled people, and others.',
  },
  4400639: {
    newCorrect: 'A US-led UN coalition fought North Korean and Chinese forces across a Cold War divide',
    lessonAddendum: 'Korea set the template for Cold War proxy conflicts: superpower involvement, divided post-colonial states, and ideological stalemate. The war ended in armistice in 1953 with the peninsula still divided; the Soviet Union supplied material support to the communist side throughout.',
  },
  4400640: {
    newCorrect: 'Brought the superpowers to the brink and prompted arms-control measures afterward',
    lessonAddendum: 'The thirteen-day crisis showcased deterrence and brinkmanship; the aftermath produced the Moscow-Washington hotline and the Limited Test Ban Treaty (1963). The Cold War itself continued for nearly three decades; Castro remained in power until 2008.',
  },
  4400643: {
    newCorrect: 'Stagnation, Gorbachev\'s reforms, and nationalist movements within the republics',
    lessonAddendum: 'Internal economic and political pressures combined with nationalist movements in the Baltics, Ukraine, and elsewhere to dismantle the Soviet Union without a major superpower war. The August 1991 coup against Gorbachev failed and accelerated rather than reversed the collapse.',
  },
  4400647: {
    newCorrect: 'A group of large emerging economies expected to reshape global growth',
    lessonAddendum: 'BRIC — Brazil, Russia, India, China, with South Africa added later — was coined in the early 2000s as an economic-size category, not a military alliance or a currency union. It captured one piece of a broader shift in twenty-first-century economic gravity toward several large non-Western economies.',
  },
  4400649: {
    newCorrect: 'Both periods intensified long-distance exchange of goods, ideas, technologies, and pathogens',
    lessonAddendum: 'AP-style long-arc comparisons reward identifying durable structural patterns — connectivity, pathogen flow, technology diffusion — enabled by political and infrastructural conditions, without flattening crucial differences in scale, institutions, and technology.',
  },

  // ---------- Art History ----------
  4400700: {
    newCorrect: 'The Apollo 11 Stones from Namibia',
    lessonAddendum: 'The Apollo 11 Stones are among the oldest known representational images from the African continent — charcoal on portable stone slabs from a Namibian rock shelter, carbon-dated to roughly 25,500 BCE. They anchor the AP curriculum in African prehistory and challenge older European-centered narratives of when representational image-making began.',
  },
  4400701: {
    newCorrect: 'The midsummer sunrise and midwinter sunset — a solstitial alignment',
    lessonAddendum: 'Stonehenge\'s solstitial alignment lets students argue from form to function: the placement of the sarsens and Heel Stone encodes a calendar and almost certainly shaped ritual gatherings tied to solar cycles.',
  },
  4400702: {
    newCorrect: 'Contour line, earth pigment washes, and the cave wall\'s natural curvature suggesting volume',
    lessonAddendum: 'Lascaux\'s painters exploited the cave\'s natural geology, using rock contours as part of the image rather than working on a flat ground. There is no plaster ground; the technique is pigment applied directly to limestone.',
  },
  4400703: {
    newCorrect: 'Reduce the human figure to a schematic frontal silhouette emphasizing presence over anatomy',
    lessonAddendum: 'Cross-cultural comparison in prehistory often turns on shared formal strategies, not shared cultures: schematic frontality recurs across regions for ritual and presence, from the Arabian Peninsula stele to the Running Horned Woman at Tassili n\'Ajjer.',
  },
  4400707: {
    newCorrect: 'Roman concrete graded from heavy basalt at the base to lighter pumice near the oculus',
    lessonAddendum: 'The Pantheon\'s dome is the clearest surviving demonstration of Roman concrete engineering: aggregate is graded by weight to keep the unreinforced structure stable without ribs or buttresses. Only the oculus is open.',
  },
  4400712: {
    newCorrect: 'A wool embroidery on linen narrating the Norman conquest in continuous strip format',
    lessonAddendum: 'Calling the Bayeux Tapestry an embroidery rather than a tapestry is more than pedantic: the needlework medium shapes its narrative pace and reading conventions. It is portable textile, not wall painting or manuscript.',
  },
  4400718: {
    newCorrect: 'The July Revolution that brought Louis-Philippe to the throne',
    lessonAddendum: 'Delacroix\'s painting commemorates the 1830 July Revolution that overthrew Charles X. It is both Romantic in style and politically specific: Liberty is an allegory, but the bodies in the street and the tricolor are 1830 — not 1789, and not the 1871 Commune.',
  },
  4400723: {
    newCorrect: 'A 60-panel tempera sequence narrating the Great Migration from South to North',
    lessonAddendum: 'Lawrence painted all 60 panels simultaneously, one color at a time across the whole series, so the formal unity is part of how the migration narrative is structured. The work is multi-panel tempera, not a single mural and not photography.',
  },
  4400735: {
    newCorrect: 'The house of Ibrahim and Ismail, rededicated by Muhammad as the focus of Muslim prayer',
    lessonAddendum: 'For AP, the Kaaba is studied as both architecture and qibla. In Islamic tradition the building anchors a global geometry of prayer that crosses every other entry in the curriculum, well predating the Crusader, Byzantine, or Sasanian traditions sometimes confused with it.',
  },
  4400737: {
    newCorrect: 'Slender columns, intricate stucco muqarnas, and a central fountain composing the courtyard',
    lessonAddendum: 'The Alhambra makes water structural: channels and the lion fountain are not decoration around the architecture but part of how the courtyard is composed. The vocabulary is Nasrid Islamic, not Romanesque, Gothic, or Mughal.',
  },
  4400738: {
    newCorrect: 'A Persian convention of patterned space organizing narrative without single-point perspective',
    lessonAddendum: 'Persian narrative folios use scale and stacking to keep the protagonist legible within complex landscape; the visual logic is decorative narrative, not optical illusion. The Khamsa tradition deliberately works against single-point perspective.',
  },
  4400739: {
    newCorrect: 'Enshrine relics of the Buddha and provide a focus for circumambulation',
    lessonAddendum: 'The stupa is fundamentally about movement: the body of the devotee walking clockwise around it is part of what the building does. Sanchi houses relics associated with the historical Buddha and predates the south Indian Thomas tradition by centuries.',
  },
  4400742: {
    newCorrect: 'A sacred image of Shakyamuni Buddha said to date from the Buddha\'s lifetime',
    lessonAddendum: 'For Tibetan Buddhist practice, the Jowo Rinpoche is not principally an art object but a relic-presence. Tradition holds it was crafted during the Buddha\'s lifetime and brought to Tibet in the 7th century; its devotional role frames every formal description.',
  },
  4400746: {
    newCorrect: 'Ancestral figures of volcanic tuff on ahu platforms, facing inland toward the community',
    lessonAddendum: 'The moai are ancestral, not extraterrestrial: they face the community and stand on ahu platforms that connect lineage, land, and sky. They are site-specific monumental sculptures within Indigenous Polynesian practice, not trade goods.',
  },
  4400748: {
    newCorrect: 'Staging the artist in fictive film stills that mimic mid-century cinema\'s conventions',
    lessonAddendum: 'Sherman uses photographic conventions against themselves: by inhabiting roles drawn from mid-century film genres, she shows how visual genres construct the women they pretend to depict. The series exposes femininity as something assembled by the camera, not discovered by it.',
  },
}
