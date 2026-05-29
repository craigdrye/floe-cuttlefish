import { makeQuestionBank } from './base'

export const highApArtHistoryQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Content Area 1: Global Prehistory (c. 30,000 - 500 BCE)
  // -----------------------------------------------------------------------
  {
    id: 4400700,
    chapter: 'Global Prehistory',
    title: 'Apollo 11 Stones',
    prompt: 'Seven small stone slabs found in a rock shelter in Namibia, carbon-dated to roughly 25,500 BCE, carry charcoal images of a feline-like figure with possibly human hind limbs. These are best identified as:',
    correct: 'The Apollo 11 Stones, among the oldest known representational images from the African continent',
    wrong: [
      ['The Hall of Bulls at Lascaux', 'Lascaux is a French cave painting site in limestone, not portable stone slabs from southern Africa.', 'Think portable, southern African, and earlier than European cave painting.'],
      ['The petroglyphs at Great Zimbabwe', 'Great Zimbabwe is a stone-walled city complex from the eleventh century CE, not Paleolithic image-making.', 'Look for a Paleolithic, not medieval, attribution.'],
      ['The White Lady of the Brandberg', 'The Brandberg figure is a much later rock painting in situ on a cliff wall, not portable slabs in a rock shelter.', 'Focus on the portable charcoal-on-stone medium.'],
    ],
    lesson: 'The Apollo 11 Stones are required works that anchor the AP curriculum in African prehistory and challenge older European-centered narratives of when representational image-making began.',
  },
  {
    id: 4400701,
    chapter: 'Global Prehistory',
    title: 'Stonehenge orientation',
    prompt: 'At Stonehenge in Wiltshire, the principal axis of the sarsen ring and the Heel Stone aligns most directly with:',
    correct: 'The midsummer sunrise and midwinter sunset, suggesting a ritual relationship to solar cycles',
    wrong: [
      ['The path of the Milky Way at the spring equinox', 'No scholarly consensus links the axis to a galactic alignment; the solstice alignment is the established reading.', 'Think solstices, not equinoxes or galactic features.'],
      ['The rising point of Sirius at the autumn equinox', 'The Sirius alignment belongs to Egyptian astronomical tradition, not Stonehenge.', 'That alignment is associated with the Nile flood, not Wiltshire.'],
      ['True magnetic north at the time of construction', 'Stonehenge does not align with magnetic or geographic north; its axis is solar.', 'Look for a seasonal sunrise alignment.'],
    ],
    lesson: 'Stonehenge\'s solstitial alignment lets students argue from form to function: the placement of sarsens encodes a calendar and likely shaped ritual gatherings.',
  },
  {
    id: 4400702,
    chapter: 'Global Prehistory',
    title: 'Hall of Bulls technique',
    prompt: 'In the Hall of Bulls at Lascaux, the painters achieved a sense of mass and movement primarily by:',
    correct: 'Combining contour line, earth pigment washes, and the natural curvature of the cave wall to suggest volume',
    wrong: [
      ['Applying true buon fresco over freshly laid plaster', 'There is no plaster ground at Lascaux; pigments were applied directly to limestone.', 'Buon fresco belongs to a much later tradition.'],
      ['Carving deep relief into the limestone surface', 'The bulls are painted, not carved in relief.', 'Look for painted, not sculpted, technique.'],
      ['Using lost-wax bronze armatures inside the wall', 'Lost-wax bronze is a metal casting process, irrelevant to cave painting.', 'The medium is pigment on stone.'],
    ],
    lesson: 'Lascaux\'s painters exploited the cave\'s natural geology, using rock contours as part of the image rather than working on a flat ground.',
  },
  {
    id: 4400703,
    chapter: 'Global Prehistory',
    title: 'Anthropomorphic stele comparison',
    prompt: 'The anthropomorphic stele from the Arabian Peninsula (c. 4th millennium BCE) compares most directly with the Running Horned Woman at Tassili n\'Ajjer in that both works:',
    correct: 'Reduce the human figure to a schematic frontal silhouette that emphasizes presence rather than naturalistic anatomy',
    wrong: [
      ['Were carved in lost-wax bronze for ritual procession', 'The stele is sandstone and the Tassili figure is painted rock; neither involves bronze.', 'Look at materials and silhouette, not metalwork.'],
      ['Show fully modeled musculature drawn from life observation', 'Both works abstract the body rather than rendering observed anatomy.', 'Schematic abstraction, not naturalism.'],
      ['Depict a named ruler in a specific historical event', 'Neither work names an individual or records an event; both function within ritual contexts.', 'These are not historical portraits.'],
    ],
    lesson: 'Cross-cultural comparison in prehistory often turns on shared formal strategies, not shared cultures: schematic frontality recurs across regions for ritual and presence.',
  },
  {
    id: 4400704,
    chapter: 'Global Prehistory',
    title: 'Jade cong function',
    prompt: 'A Liangzhu culture jade cong (c. 3300-2200 BCE) is a tube square on the outside and circular on the inside. Its form is most plausibly read as:',
    correct: 'A ritual object whose square-and-circle geometry may relate to cosmological ideas of earth and heaven',
    wrong: [
      ['A weight for measuring grain in early bureaucratic markets', 'Cong were buried in elite tombs, not used in grain markets.', 'Look for ritual, not commercial, use.'],
      ['A practical drinking vessel for a single elite household', 'The blocked geometry and burial context make functional drinking unlikely.', 'These are funerary, not domestic, objects.'],
      ['A piece of architectural masonry from a temple wall', 'Cong are small portable objects, not building blocks.', 'Think handheld ritual object.'],
    ],
    lesson: 'The jade cong illustrates how form and burial context together let art historians infer ritual and cosmological meaning even without surviving texts.',
  },

  // -----------------------------------------------------------------------
  // Content Area 2: Ancient Mediterranean (3500 BCE - 300 CE)
  // -----------------------------------------------------------------------
  {
    id: 4400705,
    chapter: 'Ancient Mediterranean',
    title: 'Parthenon program',
    prompt: 'The sculptural program of the Parthenon on the Athenian Acropolis (447-432 BCE) most directly served to:',
    correct: 'Celebrate Athena as patron of Athens and assert Athenian civic and imperial identity after the Persian Wars',
    wrong: [
      ['Commemorate the funerary rites of a single Athenian ruler', 'The Parthenon is a civic and religious monument, not a tomb for an individual.', 'Think civic patron deity, not funerary monument.'],
      ['Function as a private cult shrine closed to public procession', 'The Panathenaic procession depicted on the frieze culminated at the temple itself.', 'It anchored a public festival.'],
      ['Replace earlier images of Zeus as the central deity of the city', 'Athena, not Zeus, was the patron deity of Athens; the program centers on her.', 'The temple is named for Athena Parthenos.'],
    ],
    lesson: 'Pericles\' Acropolis program used sculpture, architecture, and procession to fuse religious devotion with imperial self-image after Persian destruction.',
  },
  {
    id: 4400706,
    chapter: 'Ancient Mediterranean',
    title: 'Doryphoros canon',
    prompt: 'Polykleitos\' Doryphoros (c. 450-440 BCE), known through Roman marble copies, is significant in the history of sculpture mainly because it:',
    correct: 'Embodies a written canon of proportion and demonstrates contrapposto as a balanced asymmetry of weight and motion',
    wrong: [
      ['Was the first sculpture in the Mediterranean to be cast in lost-wax bronze', 'Lost-wax bronze predates the Doryphoros by centuries in Mediterranean and African traditions.', 'It is not the first; it is canonical.'],
      ['Records an identifiable Athenian general from the Peloponnesian War', 'The work depicts an idealized spear-bearer, not a portrait of a specific general.', 'Idealization, not portraiture.'],
      ['Pioneered the rigid frontal pose later used in Archaic kouroi', 'The Doryphoros departs from Archaic frontality; kouroi precede it.', 'It moves away from, not toward, frontality.'],
    ],
    lesson: 'Polykleitos\' lost treatise and surviving copies let students argue that the Greek body became, in this period, a system of ratios as well as an image.',
  },
  {
    id: 4400707,
    chapter: 'Ancient Mediterranean',
    title: 'Pantheon dome',
    prompt: 'The Pantheon in Rome (c. 118-125 CE) achieves its hemispherical dome principally through:',
    correct: 'Unreinforced Roman concrete graded from heavy basalt aggregate at the base to lighter pumice near the oculus',
    wrong: [
      ['A wooden ribbed framework veneered in painted plaster', 'The dome is structural concrete, not wood; only the oculus is open.', 'Think Roman concrete engineering.'],
      ['A series of pointed arches braced by flying buttresses', 'Pointed arches and flying buttresses are Gothic, not Roman, devices.', 'Gothic vocabulary post-dates the Pantheon by a millennium.'],
      ['Iron tension rings imported from Han Dynasty China', 'There is no Han iron ring system in the Pantheon; the engineering is concrete.', 'No imported metalwork supports the dome.'],
    ],
    lesson: 'The Pantheon\'s dome is the clearest surviving demonstration of Roman concrete engineering: aggregate is graded by weight to keep the structure stable without ribs.',
  },
  {
    id: 4400708,
    chapter: 'Ancient Mediterranean',
    title: 'Augustus of Prima Porta',
    prompt: 'The breastplate and pose of the Augustus of Prima Porta (early 1st century CE) function as imperial propaganda by:',
    correct: 'Combining the Polykleitan contrapposto body with a cuirass narrating the return of Roman standards from Parthia',
    wrong: [
      ['Depicting Augustus as an aged senator in toga and republican modesty', 'The statue idealizes Augustus as a youthful, divinely descended commander, not as an aged senator.', 'Look for idealized youth and military costume.'],
      ['Showing him barefoot but otherwise indistinguishable from any soldier', 'Bare feet signal divinity, and the program is highly individuated, not generic.', 'Bare feet here are not soldierly.'],
      ['Replacing classical proportions with overtly Egyptian frontality', 'The work explicitly quotes Greek contrapposto, not Egyptian frontality.', 'Greek body, Roman message.'],
    ],
    lesson: 'Augustan portraiture borrows Polykleitos\' body to clothe new imperial ideology: the cuirass relief turns a diplomatic recovery into divinely sanctioned victory.',
  },
  {
    id: 4400709,
    chapter: 'Ancient Mediterranean',
    title: 'Greek ideal vs Egyptian frontality',
    prompt: 'Compared to the seated scribe statues of Old Kingdom Egypt, the Riace Warriors (c. 460-450 BCE) most distinctly differ by:',
    correct: 'Treating the body as a system of shifting weight and visible musculature observed from multiple angles',
    wrong: [
      ['Eliminating any reference to the human figure in favor of geometric abstraction', 'Both traditions depict the human figure; the comparison is in how it is rendered.', 'Both are figurative.'],
      ['Reducing the figure to a strictly frontal block carved from a single stone', 'That description fits the Egyptian convention, not the Greek bronzes.', 'You have the comparison reversed.'],
      ['Replacing bronze casting with painted limestone reliefs', 'The Riace Warriors are cast bronze; reliefs are a separate medium.', 'The Riace works are freestanding bronze.'],
    ],
    lesson: 'Egyptian frontality and Greek contrapposto are both choices, not failures of observation: each encodes a culture\'s ideas of permanence, divinity, and civic ideal.',
  },

  // -----------------------------------------------------------------------
  // Content Area 3: Early Europe and Colonial Americas (200-1750 CE)
  // -----------------------------------------------------------------------
  {
    id: 4400710,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Hagia Sophia pendentives',
    prompt: 'Hagia Sophia in Constantinople (532-537 CE), commissioned by Justinian, is structurally distinguished by:',
    correct: 'A central dome carried on pendentives that transition from a square plan to a circular base',
    wrong: [
      ['A timber roof supported on Corinthian colonnades with no masonry vaulting', 'The interior is masonry-vaulted; the dome is the defining feature.', 'Look for the central dome, not a timber roof.'],
      ['A Gothic ribbed vault with pointed arches over the nave', 'Pointed ribbed vaults are a later Gothic development in western Europe.', 'Gothic vocabulary postdates Hagia Sophia by centuries.'],
      ['A flat coffered ceiling modeled on the Pantheon\'s portico', 'The Pantheon\'s portico is flat, but Hagia Sophia uses pendentives, not coffered flatness.', 'Pendentives, not coffers.'],
    ],
    lesson: 'Pendentives let Byzantine builders set a circle on a square, an architectural problem the Pantheon\'s rotunda had not needed to solve.',
  },
  {
    id: 4400711,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Pala d\'Oro materials',
    prompt: 'The Pala d\'Oro in the Basilica of San Marco, Venice, is best described as:',
    correct: 'A gold altarpiece set with cloisonné enamels and gemstones reflecting Byzantine and Venetian craftsmanship',
    wrong: [
      ['A buon fresco cycle painted over a single Easter season', 'It is a metalwork altarpiece, not a fresco.', 'Think gold, enamel, and jewels.'],
      ['A carved walnut choir screen with painted gilding', 'The Pala d\'Oro is not wood carving; it is goldsmith work.', 'Material is gold, not wood.'],
      ['An oil-on-panel polyptych in the Northern Renaissance manner', 'It is centuries older than the Northern Renaissance and uses enamel, not oil paint.', 'Look for medieval Byzantine technique.'],
    ],
    lesson: 'The Pala d\'Oro shows how Venice imported, commissioned, and repurposed Byzantine enamelwork over centuries, building a single altarpiece that materially encodes its eastern entanglements.',
  },
  {
    id: 4400712,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Bayeux Tapestry medium',
    prompt: 'The Bayeux Tapestry (c. 1066-1080) is technically not a tapestry but rather:',
    correct: 'A wool embroidery on linen narrating the Norman conquest of England in continuous strip format',
    wrong: [
      ['A woven tapestry produced in the Gobelins workshop', 'The Gobelins workshop is seventeenth-century French; the Bayeux work predates it by centuries.', 'Wrong workshop and wrong technique.'],
      ['A buon fresco cycle on the walls of Bayeux Cathedral', 'It is portable textile, not wall painting.', 'It is moveable, not architectural.'],
      ['An illuminated manuscript bound as a single codex', 'It is one long embroidered cloth, not a manuscript.', 'Think continuous textile, not bound pages.'],
    ],
    lesson: 'Calling the Bayeux Tapestry an embroidery, not a tapestry, is more than pedantic: the needlework medium shapes its narrative pace and reading conventions.',
  },
  {
    id: 4400713,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Chartres style markers',
    prompt: 'Chartres Cathedral (begun 1145, rebuilt after 1194) is identified as High Gothic primarily by its:',
    correct: 'Pointed arches, ribbed vaults, flying buttresses, and large stained-glass clerestory windows',
    wrong: [
      ['Rounded arches, barrel vaults, and small clerestory windows', 'Those features describe the earlier Romanesque style that Gothic replaced.', 'You are describing Romanesque, not Gothic.'],
      ['Iron-frame curtain walls with industrial glass panels', 'Iron-frame curtain walls belong to the nineteenth century, not the twelfth.', 'Wrong century entirely.'],
      ['A central dome on pendentives derived from Hagia Sophia', 'Chartres has no central dome; its verticality comes from vaults and buttresses.', 'No dome at Chartres.'],
    ],
    lesson: 'The Gothic system at Chartres redistributes thrust outward through flying buttresses so the wall can dissolve into stained glass, the most visible difference from Romanesque construction.',
  },
  {
    id: 4400714,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Last Supper technique',
    prompt: 'Leonardo da Vinci\'s Last Supper (1495-1498) in Santa Maria delle Grazie has deteriorated severely because Leonardo:',
    correct: 'Painted in oil and tempera on a dry plaster wall rather than using true buon fresco',
    wrong: [
      ['Used true buon fresco that was destroyed in a 19th-century fire', 'The wall survived; the paint failed because it was not buon fresco.', 'The medium itself is the problem.'],
      ['Carved the image in low relief that eroded over time', 'The Last Supper is paint, not relief carving.', 'It is a painting, not a sculpture.'],
      ['Inlaid the figures in stone mosaic that fell from the wall', 'The work is painted on plaster, not assembled from stone tesserae.', 'Not mosaic.'],
    ],
    lesson: 'The Last Supper is a cautionary case in technique: buon fresco binds pigment into the plaster, but Leonardo\'s experimental oil-on-dry-wall method left the image to flake almost from the start.',
  },
  {
    id: 4400715,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Sistine Chapel patronage',
    prompt: 'Michelangelo\'s Sistine Chapel ceiling (1508-1512) was commissioned by:',
    correct: 'Pope Julius II as part of his program of papal renewal in Rome',
    wrong: [
      ['Cosimo de\' Medici as a private chapel decoration in Florence', 'The Sistine Chapel is in the Vatican, and the patron was the pope, not a Medici banker.', 'Wrong city and wrong patron.'],
      ['The Council of Trent as a response to Protestant iconoclasm', 'The ceiling predates the Council of Trent by decades.', 'Wrong chronology.'],
      ['Emperor Charles V to celebrate the sack of Rome', 'Charles V\'s troops sacked Rome in 1527, well after the ceiling was painted.', 'The sack is later, and the patron is the pope.'],
    ],
    lesson: 'Julius II\'s patronage of Michelangelo, Raphael, and Bramante is a textbook case of how a single ambitious pope can concentrate the Roman High Renaissance in one decade and a few rooms.',
  },
  {
    id: 4400716,
    chapter: 'Early Europe and Colonial Americas',
    title: 'David comparisons',
    prompt: 'Michelangelo\'s David (1501-1504) and Bernini\'s David (1623-1624) differ most fundamentally in that Bernini\'s figure:',
    correct: 'Captures a single instant of action that engages the viewer\'s surrounding space',
    wrong: [
      ['Stands in calm contrapposto contemplating the unseen Goliath', 'That description fits Michelangelo\'s David, not Bernini\'s.', 'You have the two reversed.'],
      ['Is carved from bronze rather than marble', 'Both Davids are marble.', 'Same material, different temporal moment.'],
      ['Eliminates any reference to the biblical narrative', 'Bernini\'s David is intensely biblical; the action is the sling release.', 'The narrative is foregrounded, not removed.'],
    ],
    lesson: 'Comparing the two Davids gives students a clean contrast between Renaissance equilibrium and Baroque theatricality, anchored in how each sculpture activates the surrounding viewer.',
  },
  {
    id: 4400717,
    chapter: 'Early Europe and Colonial Americas',
    title: 'Las Meninas reading',
    prompt: 'Velázquez\'s Las Meninas (1656) most directly raises questions about painting and power by:',
    correct: 'Placing the painter, royal family, mirror, and viewer in mutually implicating sightlines within a single canvas',
    wrong: [
      ['Eliminating the royal family from the painting altogether', 'The Infanta and her attendants are the literal center; the royal couple appear in the mirror.', 'The royals are present, not absent.'],
      ['Depicting an outdoor coronation in the Plaza Mayor', 'The setting is the painter\'s studio inside the Alcázar, not an outdoor public space.', 'Indoor royal interior, not plaza.'],
      ['Replicating Italian one-point perspective without modification', 'Velázquez exploits perspective in part to make the viewer\'s position structurally important, which is more than a copy of Italian models.', 'The painting interrogates, rather than just applies, perspective.'],
    ],
    lesson: 'Las Meninas is canonical because it makes the viewer\'s position part of the picture\'s argument: the painting is about who is looking at whom in a court.',
  },

  // -----------------------------------------------------------------------
  // Content Area 4: Later Europe and Americas (1750-1980)
  // -----------------------------------------------------------------------
  {
    id: 4400718,
    chapter: 'Later Europe and Americas',
    title: 'Liberty Leading the People',
    prompt: 'Eugène Delacroix\'s Liberty Leading the People (1830) commemorates which event?',
    correct: 'The July Revolution that overthrew Charles X and brought Louis-Philippe to the throne',
    wrong: [
      ['The storming of the Bastille in 1789', 'That earlier revolution is not the subject; Delacroix\'s painting depicts 1830, not 1789.', 'Look for the July, not the original, revolution.'],
      ['The Paris Commune of 1871', 'The Commune occurs decades after the painting was made.', 'Wrong chronology.'],
      ['Napoleon\'s coronation as emperor', 'That ceremony was commemorated by David, not Delacroix, and depicts the opposite political moment.', 'Wrong artist and wrong politics.'],
    ],
    lesson: 'Delacroix\'s painting is both Romantic in style and politically specific: Liberty is an allegory, but the bodies in the street and the flag are 1830.',
  },
  {
    id: 4400719,
    chapter: 'Later Europe and Americas',
    title: 'Olympia scandal',
    prompt: 'Édouard Manet\'s Olympia (1863) scandalized critics at the 1865 Salon mainly because it:',
    correct: 'Recast the Renaissance reclining nude as a confrontational contemporary Parisian sex worker who returns the viewer\'s gaze',
    wrong: [
      ['Was the first painting at the Salon to depict a female nude at all', 'Female nudes were standard at the Salon; the issue was how Manet treated the subject.', 'Nudes were common; this one was unusually direct.'],
      ['Used true buon fresco technique forbidden by Salon rules', 'Olympia is oil on canvas, and buon fresco was not banned.', 'Wrong medium.'],
      ['Hid the figure behind allegorical drapery so viewers could not identify her', 'Olympia is direct, not concealed; that directness is the source of the offense.', 'It is the opposite of concealed.'],
    ],
    lesson: 'Manet\'s Olympia rewrites Titian\'s Venus of Urbino for modern Paris: the same pose, but now a named worker who refuses idealization and looks back.',
  },
  {
    id: 4400720,
    chapter: 'Later Europe and Americas',
    title: 'Starry Night',
    prompt: 'Vincent van Gogh\'s The Starry Night (1889) was painted from a window at the asylum in Saint-Rémy-de-Provence and is best characterized by:',
    correct: 'Heavily worked impasto and rhythmic, swirling brushwork that translates observed landscape into emotional vibration',
    wrong: [
      ['Thin, smooth glazes typical of Italian High Renaissance oil technique', 'Van Gogh\'s surface is famously thick and gestural, not smooth glazing.', 'Look for impasto, not glazes.'],
      ['Mechanical photographic detail copied from a daguerreotype', 'Van Gogh worked from memory, observation, and imagination, not photographic reproduction.', 'Not a photograph.'],
      ['Buon fresco painting on the asylum chapel wall', 'The Starry Night is a portable oil on canvas, not fresco.', 'Wrong medium and wrong location.'],
    ],
    lesson: 'Van Gogh\'s late landscapes are a key case of Post-Impressionism: the marks themselves carry feeling, and the night sky is structured as a field of moving paint.',
  },
  {
    id: 4400721,
    chapter: 'Later Europe and Americas',
    title: 'Goya Third of May',
    prompt: 'Francisco Goya\'s The Third of May 1808 (1814) departs from earlier history painting by:',
    correct: 'Refusing to ennoble the victors and instead lighting an anonymous Spanish civilian about to be executed',
    wrong: [
      ['Replacing oil paint with watercolor on paper for greater speed', 'The work is large-scale oil on canvas, not watercolor.', 'Wrong medium.'],
      ['Showing Napoleon as a heroic equestrian conqueror in the foreground', 'Napoleon is absent; the French soldiers are faceless, and the moral focus is on the Spanish civilians.', 'No Napoleon in the painting.'],
      ['Depicting the event in tidy neoclassical balance and restrained color', 'The painting is deliberately unbalanced and emotionally charged, not neoclassically restrained.', 'It rejects neoclassical decorum.'],
    ],
    lesson: 'The Third of May is a turning point: history painting can now indict, rather than celebrate, the victors of an event.',
  },
  {
    id: 4400722,
    chapter: 'Later Europe and Americas',
    title: 'Picasso Demoiselles',
    prompt: 'Picasso\'s Les Demoiselles d\'Avignon (1907) integrates which two sources most importantly?',
    correct: 'Iberian sculpture and African mask traditions encountered in Paris, alongside Cézanne\'s late faceted figures',
    wrong: [
      ['Renaissance perspective treatises by Alberti and Brunelleschi', 'The painting deliberately breaks Renaissance perspective rather than applying it.', 'Picasso is moving away from this tradition.'],
      ['Japanese woodblock prints and Mughal miniatures alone', 'Those traditions matter elsewhere; the load-bearing sources here are Iberian and African, with Cézanne behind them.', 'Wrong sources for this picture.'],
      ['American Abstract Expressionism and Action Painting', 'Those movements postdate Demoiselles by four decades.', 'Wrong chronology entirely.'],
    ],
    lesson: 'Demoiselles is canonical because it stages a confrontation between European studio painting and non-European sources that European collectors had only just begun to confront critically.',
  },
  {
    id: 4400723,
    chapter: 'Later Europe and Americas',
    title: 'Lawrence Migration',
    prompt: 'Jacob Lawrence\'s Migration Series (1940-1941) is most accurately described as:',
    correct: 'A 60-panel sequence of small-scale tempera paintings narrating the Great Migration of African Americans from the South to the North',
    wrong: [
      ['A single large oil-on-canvas mural in a public post office', 'The Migration Series is a multi-panel work in tempera, not a single mural.', 'Sixty panels, not one canvas.'],
      ['A photographic essay published in Life magazine', 'Lawrence\'s work is painting, not photography.', 'Painted panels, not photographs.'],
      ['A bronze sculpture group commissioned for Rockefeller Center', 'The work is painting, not sculpture, and was not commissioned for Rockefeller Center.', 'Not sculpture.'],
    ],
    lesson: 'Lawrence painted all 60 panels simultaneously, one color at a time across the whole series, so the formal unity is part of how the migration narrative is structured.',
  },

  // -----------------------------------------------------------------------
  // Content Area 5: Indigenous Americas (1000 BCE - 1980 CE)
  // -----------------------------------------------------------------------
  {
    id: 4400724,
    chapter: 'Indigenous Americas',
    title: 'Templo Mayor',
    prompt: 'The Templo Mayor at Tenochtitlan was a twin-stair pyramid dedicated to:',
    correct: 'Huitzilopochtli, god of war and the sun, and Tlaloc, god of rain and agriculture',
    wrong: [
      ['Quetzalcoatl alone as feathered serpent of wind and learning', 'Quetzalcoatl is honored elsewhere in the precinct; Templo Mayor\'s two shrines are for Huitzilopochtli and Tlaloc.', 'Two deities, not one.'],
      ['The Christian Trinity introduced after Spanish contact', 'Templo Mayor predates Spanish contact and was systematically dismantled after the conquest.', 'It is pre-contact Mexica architecture.'],
      ['Tezcatlipoca and Xipe Totec as the central paired cult', 'Those gods are part of Mexica religion, but the twin shrines of Templo Mayor are dedicated to Huitzilopochtli and Tlaloc.', 'Wrong pair.'],
    ],
    lesson: 'The twin shrines at Templo Mayor encode a Mexica cosmology that pairs war and agriculture, sun and rain, in a single state monument at the center of Tenochtitlan.',
  },
  {
    id: 4400725,
    chapter: 'Indigenous Americas',
    title: 'Ruler\'s feather headdress',
    prompt: 'The Ruler\'s Feather Headdress associated with Moctezuma II is constructed primarily from:',
    correct: 'Quetzal and other tropical bird feathers attached with fiber and gold to a flexible base',
    wrong: [
      ['Painted ceramic tiles fired in a single kiln in Cholula', 'The headdress is featherwork, not ceramic.', 'Wrong medium entirely.'],
      ['Hammered silver sheet inlaid with European pearls', 'Featherwork, not metal, is the defining material.', 'No silver sheet.'],
      ['Woven cotton dyed exclusively with indigo and no other materials', 'Cotton textile is part of Mexica art, but the headdress is principally featherwork with gold.', 'Featherwork is the heart of the object.'],
    ],
    lesson: 'Mexica featherwork was diplomatic-grade craft: rare birds, specialized artisans, and gold attachments combined to make wearable objects of state power.',
  },
  {
    id: 4400726,
    chapter: 'Indigenous Americas',
    title: 'Bandolier bag',
    prompt: 'A nineteenth-century Lenape bandolier bag with dense glass-bead floral embroidery on dark wool reflects which dynamic?',
    correct: 'The adaptation of older quillwork and floral traditions to imported glass beads and trade cloth',
    wrong: [
      ['A purely pre-contact technique untouched by European trade goods', 'Glass beads and trade wool are themselves products of long contact.', 'Trade materials are essential to this object.'],
      ['A souvenir made exclusively for European tourists in the 1800s', 'Bandolier bags carry meanings, names, and uses within Indigenous communities and were not made only for tourists.', 'They are community objects, not only commodities.'],
      ['A devotional object placed inside Christian altars in the Lenape homeland', 'Bandolier bags are worn objects with their own functions, not altar furnishings.', 'They are worn, not installed in churches.'],
    ],
    lesson: 'Bandolier bags show how Indigenous artists incorporated trade materials without surrendering authorship: the beadwork vocabulary is continuous with older quillwork even as the materials change.',
  },
  {
    id: 4400727,
    chapter: 'Indigenous Americas',
    title: 'Maize cobs and Inka khipu',
    prompt: 'A small silver and gold maize cob made by Inka silversmiths and a knotted khipu both serve to:',
    correct: 'Record and communicate information central to imperial administration, ritual, and tribute',
    wrong: [
      ['Function as currency in long-distance maritime trade with Polynesia', 'The Inka did not use these objects as a trans-Pacific currency.', 'They serve internal administrative and ritual purposes.'],
      ['Replace alphabetic writing introduced earlier by Mesoamerican neighbors', 'Inka administration relied on khipu rather than an alphabetic script, and Mesoamerica did not export alphabetic writing to the Andes.', 'No alphabetic script underlies this system.'],
      ['Demonstrate Christian missionary influence on Andean material culture', 'Both objects predate the Christian missionary presence and reflect Inka, not Christian, systems.', 'These are Inka, not colonial Christian, objects.'],
    ],
    lesson: 'The Inka maize cob and the khipu remind students that record-keeping in the Andes used material and embodied media rather than alphabetic writing.',
  },
  {
    id: 4400728,
    chapter: 'Indigenous Americas',
    title: 'Yaxchilán lintels',
    prompt: 'The Maya lintels from Yaxchilán (e.g., Lintel 24) depict Lady Xoc performing a bloodletting rite. The form most directly serves to:',
    correct: 'Visualize royal women\'s ritual labor as evidence of dynastic legitimacy and divine contact',
    wrong: [
      ['Record the daily diet and trade economy of the city', 'These lintels are dynastic and ritual records, not economic ones.', 'Look for ritual political content.'],
      ['Depict a single battle scene in continuous narrative format', 'The lintels concern bloodletting and accession ritual, not a battle.', 'Not a battle narrative.'],
      ['Function as decorative borders unrelated to identifiable individuals', 'The lintels name specific historical individuals and date specific events.', 'They are highly individuated.'],
    ],
    lesson: 'Maya monumental art often makes ritual bodily acts of royal women central evidence of dynastic legitimacy, a point easy to miss in older readings that focused only on male rulers.',
  },

  // -----------------------------------------------------------------------
  // Content Area 6: Africa (1100-1980)
  // -----------------------------------------------------------------------
  {
    id: 4400729,
    chapter: 'Africa',
    title: 'Great Mosque of Djenné',
    prompt: 'The Great Mosque of Djenné in Mali, in its current form rebuilt in 1907 on a much older site, is constructed primarily of:',
    correct: 'Sun-dried earthen bricks faced with mud plaster and reinforced with projecting palm-wood toron beams',
    wrong: [
      ['Fired ceramic brick imported from Ottoman Anatolia', 'The building is local earthen architecture, not imported fired brick.', 'Local mud, not imported brick.'],
      ['Cut stone ashlar quarried from the Atlas Mountains', 'Djenné is built of earth, not Atlas stone.', 'Wrong material and wrong region.'],
      ['Reinforced concrete with steel rebar from French colonial works', 'The defining material is mud brick maintained by annual community replastering.', 'Not modern concrete.'],
    ],
    lesson: 'The toron beams of the Great Mosque are not only decorative: they are the scaffolding that lets the community replaster the building every year, so its maintenance is as architecturally important as its construction.',
  },
  {
    id: 4400730,
    chapter: 'Africa',
    title: 'Ife head',
    prompt: 'The naturalistic copper-alloy heads from Ife (c. 12th-15th century) were made using:',
    correct: 'Lost-wax casting in a sophisticated metallurgical tradition centered on a royal Yoruba city',
    wrong: [
      ['Direct hammering of cold copper sheet over a wooden core', 'Lost-wax casting, not cold-hammered sheet, is the established Ife technique.', 'Casting, not hammering.'],
      ['Ceramic kiln-fired terracotta with no metal content', 'Ife also made terracotta heads, but the copper-alloy heads are cast metal.', 'You are conflating two media.'],
      ['Carving directly from soft soapstone outcrops near the coast', 'The heads are cast metal, not carved stone.', 'Not stone carving.'],
    ],
    lesson: 'The Ife heads overturned mid-twentieth-century European assumptions about African metalwork: lost-wax casting in West Africa is as old and as sophisticated as parallel European traditions.',
  },
  {
    id: 4400731,
    chapter: 'Africa',
    title: 'Aka mask function',
    prompt: 'A Bwa or related Aka mask combining geometric plank forms and animal references functions most directly to:',
    correct: 'Animate ritual performance through dance, music, and costume rather than to be viewed as static sculpture',
    wrong: [
      ['Hang on a domestic wall as a privately owned decorative object', 'Bwa masks are worn in masquerade, not hung as wall art in domestic interiors.', 'They are performed objects, not paintings.'],
      ['Function as a written record of village land ownership', 'Bwa masks operate in dance and ritual, not as land records.', 'Not a written record.'],
      ['Serve as a piece of military armor in nineteenth-century conflicts', 'These are ritual masks, not armor.', 'Look at masquerade, not warfare.'],
    ],
    lesson: 'African masks are misread as static museum objects: their meanings depend on motion, music, and audience, which is why context is part of their form.',
  },
  {
    id: 4400732,
    chapter: 'Africa',
    title: 'Benin plaques',
    prompt: 'The brass plaques that once decorated the royal palace of Benin (16th-17th century) most directly served to:',
    correct: 'Record dynastic and court hierarchies through depictions of the Oba, court officials, and Portuguese traders',
    wrong: [
      ['Document Christian liturgical instructions for Benin congregations', 'The plaques record Benin dynastic and political subjects, not Christian liturgy.', 'Court, not Christian, content.'],
      ['Function as Yoruba ritual masks worn in masquerade', 'The plaques are architectural metalwork from Benin, not Yoruba performance objects.', 'Wrong kingdom and wrong type of object.'],
      ['Serve as European-made trade goods imported into the palace', 'The plaques were made by Benin guild-cast metalworkers, not imported.', 'They are made in Benin, not imported.'],
    ],
    lesson: 'The Benin plaques are a key example of African court art that already incorporates Europeans as a recurring subject by the sixteenth century, complicating later narratives of one-way "contact."',
  },
  {
    id: 4400733,
    chapter: 'Africa',
    title: 'Nkisi power figure',
    prompt: 'A Kongo nkisi nkondi power figure studded with iron blades and resins functions, in its original use, to:',
    correct: 'Bind oaths and adjudicate disputes through the activation of spiritual force by a ritual specialist',
    wrong: [
      ['Decorate a colonial chapel as part of missionary instruction', 'Nkisi nkondi belong to Kongo ritual practice, not missionary instruction.', 'Indigenous ritual, not Christian decor.'],
      ['Serve as a child\'s toy after the resins have dried', 'These are charged ritual objects, not toys.', 'Not domestic playthings.'],
      ['Mark a graveyard boundary in place of a stone marker', 'They are activated by a specialist for specific cases, not used as grave markers.', 'Not boundary stones.'],
    ],
    lesson: 'A nkisi nkondi is incomplete in a museum: the blades and resins are evidence of repeated activations, and the object\'s meaning is in the cases it has bound, not just in its silhouette.',
  },

  // -----------------------------------------------------------------------
  // Content Area 7: West and Central Asia (500 BCE - 1980 CE)
  // -----------------------------------------------------------------------
  {
    id: 4400734,
    chapter: 'West and Central Asia',
    title: 'Persepolis apadana',
    prompt: 'The apadana reliefs at Persepolis (c. 520-465 BCE) depict tribute bearers from many nations and most directly serve to:',
    correct: 'Project the Achaemenid empire as a multiethnic order whose subject peoples honor the Great King',
    wrong: [
      ['Record the daily ration distribution to construction workers', 'Ration records exist in separate Persepolis tablets; the reliefs are imperial ideological imagery.', 'Look at imperial ideology, not bookkeeping.'],
      ['Narrate a single military victory in continuous narrative friezes', 'The reliefs depict ordered tribute, not battle narrative.', 'Not a battle scene.'],
      ['Depict ordinary Persian farmers without reference to outside peoples', 'The whole point of the apadana reliefs is the diversity of imperial subjects.', 'Outside peoples are central, not absent.'],
    ],
    lesson: 'Achaemenid imperial sculpture builds its argument through repetition and order: each delegation distinct but each subordinated to the same ceremonial axis.',
  },
  {
    id: 4400735,
    chapter: 'West and Central Asia',
    title: 'Kaaba',
    prompt: 'The Kaaba in Mecca is, in Islamic tradition, understood as:',
    correct: 'The house first built by Ibrahim and Ismail and rededicated by Muhammad as the focus of Muslim prayer and pilgrimage',
    wrong: [
      ['A reliquary chapel built by Crusader knights in the 12th century', 'The Kaaba long predates the Crusades and is central to Islamic, not Crusader, practice.', 'Wrong tradition entirely.'],
      ['A Byzantine baptistery converted under Justinian', 'It has no Byzantine baptismal function or history.', 'Not Byzantine.'],
      ['A Persian fire temple repurposed by the Sasanian dynasty', 'Sasanian fire temples are a distinct architectural and religious type unrelated to the Kaaba.', 'Not Zoroastrian.'],
    ],
    lesson: 'For AP, the Kaaba is studied as both architecture and qibla: the building anchors a global geometry of prayer that crosses every other entry in the curriculum.',
  },
  {
    id: 4400736,
    chapter: 'West and Central Asia',
    title: 'Folio from Shahnama',
    prompt: 'A 16th-century Safavid folio from the Shahnama of Shah Tahmasp is best characterized by:',
    correct: 'Densely patterned figures and architecture rendered in opaque watercolor, ink, and gold on prepared paper',
    wrong: [
      ['Oil paint on stretched linen canvas in the Italian Renaissance manner', 'Persian manuscript painting uses opaque watercolor and ink on paper, not oil on canvas.', 'Wrong medium tradition.'],
      ['Buon fresco painted directly on a palace wall', 'These are manuscript folios, not wall paintings.', 'Look for paper, not plaster.'],
      ['Carved relief in soft sandstone with traces of original paint', 'It is painting on paper, not relief carving.', 'Not stone carving.'],
    ],
    lesson: 'Persian manuscript painting compresses architecture, landscape, and figure into a single decorative field; the technique is layered watercolor and gold, not modeled illusion.',
  },
  {
    id: 4400737,
    chapter: 'West and Central Asia',
    title: 'Court of the Lions',
    prompt: 'The Court of the Lions at the Alhambra (Granada, 14th century) achieves its character primarily through:',
    correct: 'Slender columns, intricate stucco muqarnas, and a central fountain integrating water with geometric ornament',
    wrong: [
      ['Massive Romanesque piers and small round-arched windows', 'The Alhambra\'s vocabulary is Nasrid Islamic, not Romanesque.', 'Wrong style entirely.'],
      ['Gothic flying buttresses around a central nave', 'The Alhambra is a palace with garden courtyards, not a Gothic church.', 'Different building type and tradition.'],
      ['Mughal red sandstone and inlaid white marble', 'Those materials and combinations belong to Mughal architecture in South Asia, not Nasrid Spain.', 'Wrong empire and wrong materials.'],
    ],
    lesson: 'The Alhambra makes water structural: channels and the lion fountain are not decoration around the architecture but part of how the courtyard is composed.',
  },
  {
    id: 4400738,
    chapter: 'West and Central Asia',
    title: 'Bahram Gur stimulus',
    prompt: 'In a Bahram Gur folio from a Khamsa of Nizami, the prince is shown small within a vertical landscape of patterned rocks and trees. The composition most directly reflects:',
    correct: 'A Persian convention of placing the protagonist within an elaborated landscape that organizes narrative through patterned space rather than single-point perspective',
    wrong: [
      ['A fully realized Italian one-point perspective system', 'Persian painting deliberately works against single-point perspective; the space is organized by pattern and viewpoint stacking.', 'Look for pattern, not vanishing points.'],
      ['A documentary photographic study of Iranian terrain', 'These are imaginative narrative paintings, not topographic documentation.', 'Not photographic.'],
      ['A Dutch landscape tradition centered on low horizon lines', 'Persian Khamsa painting uses high stacked space, not low horizons.', 'Wrong tradition.'],
    ],
    lesson: 'Persian narrative folios use scale and stacking to keep the protagonist legible within complex landscape; the visual logic is decorative narrative, not optical illusion.',
  },

  // -----------------------------------------------------------------------
  // Content Area 8: South, East, and Southeast Asia (300 BCE - 1980 CE)
  // -----------------------------------------------------------------------
  {
    id: 4400739,
    chapter: 'South, East, and Southeast Asia',
    title: 'Great Stupa at Sanchi',
    prompt: 'The Great Stupa at Sanchi (c. 3rd century BCE, with later gateways) was built to:',
    correct: 'Enshrine relics associated with the historical Buddha and to provide a focus for circumambulation by devotees',
    wrong: [
      ['Serve as a royal palace for the Maurya dynasty', 'Sanchi is a Buddhist relic monument, not a palace.', 'Religious, not residential.'],
      ['House a Christian community founded by Thomas the Apostle', 'Sanchi is Buddhist and predates the south Indian Thomas tradition.', 'Wrong tradition.'],
      ['Function as a Hindu temple to Vishnu', 'Hindu temples to Vishnu develop in different forms; the stupa is a Buddhist relic mound.', 'Different religion and form.'],
    ],
    lesson: 'The stupa is fundamentally about movement: the body of the devotee walking clockwise around it is part of what the building does.',
  },
  {
    id: 4400740,
    chapter: 'South, East, and Southeast Asia',
    title: 'Borobudur path',
    prompt: 'The 9th-century Mahayana monument of Borobudur in Java is best read as:',
    correct: 'A terraced mountain whose ascending levels move pilgrims through narrative reliefs toward the formless realm at the summit',
    wrong: [
      ['A single-room Buddha hall on a flat plan with no exterior reliefs', 'Borobudur is famously a terraced structure covered in reliefs; it is the opposite of a flat single-room hall.', 'Look for ascent, not enclosure.'],
      ['A walled royal palace serving the Sailendra dynasty\'s administration', 'Borobudur is a pilgrimage and devotional monument, not a palace.', 'It is religious, not residential.'],
      ['A Hindu temple complex dedicated to Shiva on the Dieng plateau', 'Borobudur is Buddhist and lies in central Java, not the Dieng plateau.', 'Wrong tradition and wrong site.'],
    ],
    lesson: 'Borobudur encodes Mahayana cosmology into a walk: the same building is a different teaching at every level.',
  },
  {
    id: 4400741,
    chapter: 'South, East, and Southeast Asia',
    title: 'Forbidden City axis',
    prompt: 'The Forbidden City in Beijing (early 15th century onward) organizes imperial authority through:',
    correct: 'A strict north-south axis of successive halls and gates ordered by hierarchical scale and orientation',
    wrong: [
      ['A radial street plan centered on a single domed cathedral', 'The Forbidden City has no central dome and no radial plan; it is axial.', 'Axis, not radial.'],
      ['An irregular medieval street network organized by clan compounds', 'It is a planned imperial compound with formal axial organization, not an organic street network.', 'It is planned, not organic.'],
      ['A grid of identical residential blocks for civil servants', 'The complex is hierarchical, not made of identical blocks.', 'Hierarchy is essential, not uniformity.'],
    ],
    lesson: 'The Ming-Qing Forbidden City turns Confucian and cosmological order into a path: hierarchy is something you walk through, not something you read in a book.',
  },
  {
    id: 4400742,
    chapter: 'South, East, and Southeast Asia',
    title: 'Jowo Rinpoche',
    prompt: 'The Jowo Rinpoche in the Jokhang temple in Lhasa is venerated as:',
    correct: 'A sacred image of Shakyamuni Buddha believed to have been crafted during the Buddha\'s lifetime and brought to Tibet in the 7th century',
    wrong: [
      ['A Mughal portrait of the emperor Akbar', 'Akbar is a 16th-century Mughal ruler, unrelated to the Jowo image in Lhasa.', 'Wrong tradition entirely.'],
      ['A Daoist immortals shrine carved in jade', 'The Jowo is a Buddhist devotional image, not a Daoist work.', 'Not Daoist.'],
      ['A purely modern reconstruction made in the 20th century', 'The image has a long devotional history far older than the 20th century.', 'Not a modern reconstruction.'],
    ],
    lesson: 'For Tibetan Buddhist practice, the Jowo Rinpoche is not principally an art object but a relic-presence whose devotional role frames every formal description.',
  },
  {
    id: 4400743,
    chapter: 'South, East, and Southeast Asia',
    title: 'Hokusai woodblock',
    prompt: 'Katsushika Hokusai\'s Under the Wave off Kanagawa (c. 1830-1832) from Thirty-six Views of Mount Fuji is technically:',
    correct: 'A multi-block color woodblock print produced through nishiki-e collaboration of designer, carver, and printer',
    wrong: [
      ['A single unique oil painting on stretched silk', 'The Great Wave is a print designed for multiple impressions, not a unique oil painting.', 'Print, not oil.'],
      ['A buon fresco mural in a Tokyo temple', 'It is a portable print, not a wall painting.', 'Wrong medium.'],
      ['A hand-drawn ink scroll by Hokusai with no other workers involved', 'Ukiyo-e prints are collaborative productions involving carvers and printers as well as the designer.', 'Collaboration, not solo drawing.'],
    ],
    lesson: 'Ukiyo-e prints are team productions whose mass distribution made Japanese visual culture accessible far beyond elite painting, including to nineteenth-century European artists.',
  },

  // -----------------------------------------------------------------------
  // Content Area 9: The Pacific (700-1980)
  // -----------------------------------------------------------------------
  {
    id: 4400744,
    chapter: 'The Pacific',
    title: 'Hawaiian feather cloak',
    prompt: 'A Hawaiian \'ahu \'ula (feather cloak) made of red and yellow feathers on netted fiber functioned, in its original use, to:',
    correct: 'Mark the ali\'i (chiefly class) and to convey spiritual mana through rare bird feathers',
    wrong: [
      ['Serve as a missionary baptismal robe introduced after Cook\'s arrival', 'The \'ahu \'ula is an Indigenous Hawaiian elite garment predating missionary contact, not a baptismal robe.', 'Indigenous chiefly garment, not Christian vestment.'],
      ['Function as a fisherman\'s daily working coat in island households', 'The labor and rare materials made these garments restricted to chiefly use, not daily fishing wear.', 'Elite use, not everyday labor.'],
      ['Wrap a lost-wax bronze sculpture in storage', 'There is no bronze sculpture being wrapped; the cloak is a wearable object of rank.', 'It is the object, not a wrapping.'],
    ],
    lesson: 'The labor required to harvest, sort, and net rare feathers concentrates mana in the garment itself: form, material, and class are inseparable in the \'ahu \'ula.',
  },
  {
    id: 4400745,
    chapter: 'The Pacific',
    title: 'Maori meeting house',
    prompt: 'A Māori wharenui (meeting house) most directly embodies:',
    correct: 'An ancestral body whose ridgepole, rafters, and carvings together personify a named tupuna and shelter the community',
    wrong: [
      ['A purely secular town hall with no ancestral or spiritual reference', 'Wharenui are explicitly ancestral and spiritual, not secular town halls.', 'Ancestral body, not secular hall.'],
      ['A private chapel reserved for individual Christian prayer', 'Wharenui are communal Māori ancestral houses, not individual chapels.', 'Communal and Māori, not private Christian.'],
      ['A grain storage facility built for nineteenth-century settlers', 'Wharenui are not storage buildings; they serve community gathering and ritual.', 'Not a granary.'],
    ],
    lesson: 'Entering a wharenui is understood as entering the body of the ancestor; the architectural metaphor is not decorative but constitutive.',
  },
  {
    id: 4400746,
    chapter: 'The Pacific',
    title: 'Moai context',
    prompt: 'The moai of Rapa Nui (Easter Island) are best understood as:',
    correct: 'Ancestral figures carved from volcanic tuff and erected on coastal ahu platforms facing inland toward the community',
    wrong: [
      ['Astronomical markers oriented exclusively toward the open sea', 'The moai typically face inland over their communities, not out to sea.', 'They face the village, not the ocean.'],
      ['Roman-influenced portrait sculptures of named magistrates', 'There is no Roman influence on Rapa Nui sculpture; the moai are Indigenous Polynesian works.', 'Wrong tradition entirely.'],
      ['Trade goods made for export to Hawai\'i and the Marquesas', 'Moai are site-specific monumental sculptures, not trade objects.', 'They were not exported.'],
    ],
    lesson: 'The moai are ancestral, not extraterrestrial: they face the community and stand on ahu platforms that connect lineage, land, and sky.',
  },
  {
    id: 4400747,
    chapter: 'The Pacific',
    title: 'Malagan ritual',
    prompt: 'A New Ireland malagan figure carved from light wood and used in funerary rites is most accurately described as:',
    correct: 'A temporary commemorative object intended to embody and then release the spirit of the deceased',
    wrong: [
      ['A permanent ancestral image kept and venerated for generations', 'Malagan figures are made for specific funerary cycles and are not necessarily kept permanently.', 'Temporary, not permanent.'],
      ['A grave marker carved in dense stone for centuries of weathering', 'They are carved in light wood for specific rituals, not in stone.', 'Wood, not stone.'],
      ['A trade currency exchanged with neighboring archipelagos', 'Malagan figures are ritual objects, not currency.', 'Not commodity exchange.'],
    ],
    lesson: 'Many Pacific ritual works are designed to do their job and then end: their value is in the rite, not in indefinite preservation.',
  },

  // -----------------------------------------------------------------------
  // Content Area 10: Global Contemporary (1980-present)
  // -----------------------------------------------------------------------
  {
    id: 4400748,
    chapter: 'Global Contemporary',
    title: 'Sherman Untitled Film Stills',
    prompt: 'Cindy Sherman\'s Untitled Film Stills (1977-1980) operate primarily by:',
    correct: 'Staging the artist herself in fictive scenes that mimic the visual conventions of mid-century cinema to expose how femininity is constructed',
    wrong: [
      ['Documenting real Hollywood actresses on set without staging', 'The series is staged by Sherman, who is herself the subject; the cinema is fictive.', 'They look documentary, but they are staged.'],
      ['Avoiding any reference to film or photography altogether', 'The series is explicitly photographic and references film stills; that is the central conceit.', 'They are about film and photography.'],
      ['Painting in oil in the manner of Edward Hopper interiors', 'They are photographs, not paintings, even if Hopper-like in mood.', 'Wrong medium.'],
    ],
    lesson: 'Sherman uses photographic conventions against themselves: by inhabiting roles, she shows how visual genres construct the women they pretend to depict.',
  },
  {
    id: 4400749,
    chapter: 'Global Contemporary',
    title: 'Spiral Jetty and Black Mountain',
    prompt: 'Robert Smithson\'s Spiral Jetty (1970) and Doris Salcedo\'s Shibboleth or related works share which approach?',
    correct: 'Both make site, material, and elapsed time part of the work\'s meaning rather than confining art to portable studio objects',
    wrong: [
      ['Both rely on traditional oil-on-canvas easel painting techniques', 'Neither artist primarily uses easel painting; they work in earthworks, installation, and intervention.', 'Wrong medium for both.'],
      ['Both refuse to engage with history, geography, or politics', 'Both works are deeply tied to specific histories and geographies, from the Great Salt Lake to colonial violence.', 'They are about, not against, context.'],
      ['Both produce small editioned prints sold through commercial galleries', 'Their characteristic works are large-scale, site-bound interventions, not commercial print editions.', 'Wrong scale and wrong market.'],
    ],
    lesson: 'Contemporary practice often makes the site and the duration of the work part of its content; the museum object is only one possible outcome of art, not its default state.',
  },
])
