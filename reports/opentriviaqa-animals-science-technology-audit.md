# OpenTriviaQA Animals and Science/Technology Course-Mapping Audit

Generated: 2026-05-03

Source: `data/raw_collections/opentriviaqa/opentriviaqa_questions.json`

Scope: OpenTriviaQA `animals` and `science-technology`. This is a reports-only audit; no app code or question catalog files were changed.

## Strict Recommendation

- Do not bulk-import either full category. Both category labels hide substantial noisy trivia, dated/current facts, answer-form issues, and wrong-course rows.
- Safest next import: a small manually reviewed micro-batch from `science-technology`, limited to stable chemistry formula/symbol rows and astronomy object-definition rows that survive the JSON screen.
- Hold `animals` for now unless a human review narrows it to AP Biology concept rows. The machine screen finds plausible biology rows, but too many nearby rows are pet trivia, conservation drift, record/superlative facts, and ambiguous odd-one-out prompts.
- Treat `reports/opentriviaqa-animals-science-technology-audit.json` as a candidate/rejection ledger, not an import manifest.

## Counts by Recommended Target Course

### `animals`

- Raw rows: 1366
- Machine-screened candidates: 164
- Rejected by strict screen: 1202
- `AP Biology`: 164

### `science-technology`

- Raw rows: 2486
- Machine-screened candidates: 562
- Rejected by strict screen: 1924
- `AP Biology`: 224
- `AP Chemistry`: 67
- `AP Computer Science`: 16
- `AP Environmental Science`: 49
- `AP Physics`: 29
- `Cosmology and Astronomy`: 177

## Rejection Reasons

### `animals`

- `no_clean_existing_course_mapping`: 512
- `not_enough_distinct_wrong_choices`: 348
- `noisy_trivia_stale_or_wrong_domain`: 186
- `ambiguous_all_none_answer`: 101
- `ambiguous_except_or_statement_form`: 51
- `answer_leakage`: 2
- `too_short_or_contextless`: 1
- `binary_or_thin_choice_set`: 1

### `science-technology`

- `no_clean_existing_course_mapping`: 1221
- `not_enough_distinct_wrong_choices`: 377
- `noisy_trivia_stale_or_wrong_domain`: 181
- `ambiguous_all_none_answer`: 99
- `ambiguous_except_or_statement_form`: 33
- `wrong_course_mapping_or_non_science_tech`: 4
- `too_short_or_contextless`: 4
- `answer_leakage`: 3
- `binary_or_thin_choice_set`: 2

## Sample Accepted Rows

### `animals`

Course: `AP Biology`
- `opentriviaqa::animals::19` [Animal Classification / Taxonomy] Cobras are venomous snakes of family Elapidae, that generally inhabit regions of these two continents. => `Asia and Africa`
- `opentriviaqa::animals::20` [Animal Structure and Function] The cobras most recognizable feature is its hood, a flap of skin and muscle behind the head, believed to serve this purpose. => `More threatening appearance`
- `opentriviaqa::animals::21` [Ecology and Adaptation] The Cobra is at the top of the food chain, with only two main predators -- one is man and the other is this animal. => `Mongoose`
- `opentriviaqa::animals::35` [Animal Classification / Taxonomy] This species of great apes with long arms and reddish hair suffer habitat destruction due to logging, mining and forest fires. => `Orangutan`
- `opentriviaqa::animals::36` [Ecology and Adaptation] What is the natural habitat of the snows leopard, that was hunted down for its beautiful fur, as a result of which its population went down to 1,000 animals in the 1960s? => `Central Asia`


### `science-technology`

Course: `AP Environmental Science`
- `opentriviaqa::science-technology::2` [Earth Systems] Clouds are made up of these. => `Water droplets and ice crystals`
- `opentriviaqa::science-technology::3` [Earth Systems] This formation is a conical hill or mountain. It is formed by mantle material being pressed through an opening in the Earth's crust. => `A volcano`
- `opentriviaqa::science-technology::4` [Earth Systems] Japan suffers from this event very often. It is the sudden, light or violent movement of the earths surface caused by the release of energy in the earths crust. => `Earthquake`
- `opentriviaqa::science-technology::163` [Earth Systems] Due to this, there is almost no atmosphere on the Moon. => `Weak gravity`
- `opentriviaqa::science-technology::186` [Earth Systems] What term do scientists use to denote the gradual warming of the planet due to absorption of infrared radiation by the atmosphere? => `Greenhouse effect`

Course: `AP Biology`
- `opentriviaqa::science-technology::12` [Biology and Anatomy] Which of these organs has no known function in the human body? => `appendix`
- `opentriviaqa::science-technology::13` [Biology and Anatomy] The main function of this organ of respiration is to transport oxygen from the atmosphere into the bloodstream. => `lung`
- `opentriviaqa::science-technology::16` [Biology and Anatomy] These organs are very sensitive and often fail in people with very high blood pressure or diabetes. => `kidneys`
- `opentriviaqa::science-technology::45` [Biology and Anatomy] The medical term cardio, deriving from a Greek word, refers to which organ of the human body? => `Heart`
- `opentriviaqa::science-technology::49` [Biology and Anatomy] Erythrocytes are a type of blood cells, consisting mainly of hemoglobin. What does the word erythro mean? => `Red`

Course: `Cosmology and Astronomy`
- `opentriviaqa::science-technology::26` [Astronomy] These small bodies are considered left overs from the formation of the Solar system some 4.6 billion years ago. => `Asteroids`
- `opentriviaqa::science-technology::27` [Astronomy] These are lumps of ice and dust. When they get close enough to the Sun they gradually evaporate. Jets of gas and dust create long tails that people can see from Earth. => `Comets`
- `opentriviaqa::science-technology::28` [Astronomy] This planet is slightly smaller than Earth and its closest neighbor (excluding the Moon). => `Venus`
- `opentriviaqa::science-technology::30` [Astronomy] This planet of the Solar System was named after a Greek god of the sea and earthquakes. The name is actually the Roman translation of the gods name. => `Neptune`
- `opentriviaqa::science-technology::31` [Astronomy] As this is the closest planet to the Sun, its temperatures at the surface range between -300 and 800 F (hot enough for lead to melt). => `Mercury`

Course: `AP Physics`
- `opentriviaqa::science-technology::183` [Physics] What term is used to designate a hurricanes calm, low-pressure center around which winds of high velocity spin? => `Eye`
- `opentriviaqa::science-technology::271` [Physics] Seismic waves are classified in four types - P-waves (primary), S-waves (secondary), Love waves (surface waves) and this type. => `Rayleigh waves`
- `opentriviaqa::science-technology::373` [Physics] To find the acceleration of a particle what would we do to the velocity ? => `Differentiate once`
- `opentriviaqa::science-technology::390` [Physics] Who came up with the laws of gravity? => `Newton`
- `opentriviaqa::science-technology::593` [Physics] What do you call the force which slows down and stops a moving object? => `Friction`

Course: `AP Computer Science`
- `opentriviaqa::science-technology::380` [Computer Science Concepts] In Internet parlance, what is a cookie? => `Something stored on the client computer by a web pages program`
- `opentriviaqa::science-technology::815` [Computer Science Concepts] How are hard drives and floppy disks read? => `Magnetically`
- `opentriviaqa::science-technology::973` [Computer Science Concepts] Which one of these is an operating system? => `Vista`
- `opentriviaqa::science-technology::1001` [Computer Science Concepts] Which of these is an output device that produces audible sound? => `Speaker`
- `opentriviaqa::science-technology::1054` [Computer Science Concepts] Which programming language is based on Horn clauses? => `Prolog`

Course: `AP Chemistry`
- `opentriviaqa::science-technology::626` [Chemistry] What molecule has the formula O3? => `Ozone`
- `opentriviaqa::science-technology::656` [Chemistry] What is the building block of green plants that cant be broken down into sugar molecules and passes through the human body undigested? => `dietary fiber`
- `opentriviaqa::science-technology::739` [Chemistry] Waters extraordinary physical properties are a result of its chemical structure - it consists of two hydrogen atoms and one oxygen atom bonded in what type of molecule? => `Polar`
- `opentriviaqa::science-technology::748` [Chemistry] This intricate name, given to water, is a common hoax to misleadingly present water as a dangerous and harmful compound. => `Dihydrogen monoxide (DHMO)`
- `opentriviaqa::science-technology::767` [Chemistry] What is the chemical symbol for Boron? => `B`

## Sample Rejected Rows

### `animals`

Reason: `ambiguous_except_or_statement_form`
- `opentriviaqa::animals::1` Three of these animals hibernate. Which one does not? => `Sloth`
- `opentriviaqa::animals::3` Three of these Latin names are names of bears. Which is the odd one? => `Felis silvestris catus`
- `opentriviaqa::animals::4` These are typical Australian animals except one. => `Sloth`

Reason: `ambiguous_all_none_answer`
- `opentriviaqa::animals::2` All of these animals are omnivorous except one. => `Snail`
- `opentriviaqa::animals::8` All of these animals have large ears (relative to their size) except one. => `Polar bears`
- `opentriviaqa::animals::64` All but one of the following are true types of bears. Which is the odd one? => `Moon bear`

Reason: `not_enough_distinct_wrong_choices`
- `opentriviaqa::animals::7` All dogs, cats and birds are colorblind. => `False`
- `opentriviaqa::animals::12` Snakes reproduce only by laying eggs. => `False`
- `opentriviaqa::animals::14` Snake skin is covered in scales. => `True`

Reason: `no_clean_existing_course_mapping`
- `opentriviaqa::animals::9` This percentage of all snakes on Earth are lethal to humans. => `15%`
- `opentriviaqa::animals::10` Snakes are this kind of animals. => `Carnivorous`
- `opentriviaqa::animals::11` Snakes consume their food by means of this process. => `Swallowing`

Reason: `too_short_or_contextless`
- `opentriviaqa::animals::13` Snakes are deaf. => `True`

Reason: `noisy_trivia_stale_or_wrong_domain`
- `opentriviaqa::animals::29` What breed is known as the favourite breed of Queen Elizabeth II? => `Welsh Corgi`
- `opentriviaqa::animals::30` What was the name of Fraisers fathers dog on the hit TV show set in Seattle? => `Eddie`
- `opentriviaqa::animals::31` Which one of these sea mammals is not in the endangered species lists? => `Pilot whale`

Reason: `answer_leakage`
- `opentriviaqa::animals::210` What is an adult male rooster known as? => `Rooster`
- `opentriviaqa::animals::920` Cockroaches belong to the order Blattaria. What is the meaning of the Latin word blatta? => `Cockroach`

Reason: `binary_or_thin_choice_set`
- `opentriviaqa::animals::1009` This species, also known as Yaminon, is the largest wombat species on the planet. => `Northern Hairy-nosed Wombat`


### `science-technology`

Reason: `not_enough_distinct_wrong_choices`
- `opentriviaqa::science-technology::1` Immanuel Kant criticized Emanuel Swedenborg and termed him a "spook hunter". => `True`
- `opentriviaqa::science-technology::15` The cerebellum section of the brain controls the fine movement and equilibrium, among other things. => `True`
- `opentriviaqa::science-technology::17` Tooth enamel is the hardest substance in the body. => `True`

Reason: `noisy_trivia_stale_or_wrong_domain`
- `opentriviaqa::science-technology::5` It is the only continent that does not have land areas below sea level. => `Antarctica`
- `opentriviaqa::science-technology::6` It is the longest river in the world => `The Nile`
- `opentriviaqa::science-technology::11` This is the largest island on Earth and one third of it is a national park. => `Greenland`

Reason: `no_clean_existing_course_mapping`
- `opentriviaqa::science-technology::7` Why do travelers to La Paz, Bolivia, often become ill as soon as they arrive? => `Because of the altitude`
- `opentriviaqa::science-technology::8` In the US, why do we change our clocks on the daylight saving time dates in April and October? => `To conserve energy`
- `opentriviaqa::science-technology::9` These are places of arid land with really low rainfall and high tempertures variation. Their vegetation is insignificant and the population of people and animals is very limited. => `Deserts`

Reason: `ambiguous_all_none_answer`
- `opentriviaqa::science-technology::22` What are common side effects of pregnancy? => `All of the these`
- `opentriviaqa::science-technology::57` Which of these statements, related to the effects of eating turkey, is true? => `None of these`
- `opentriviaqa::science-technology::59` What food results in negative calories when eaten? => `All of these`

Reason: `ambiguous_except_or_statement_form`
- `opentriviaqa::science-technology::145` Which one of these statements about facial microexpressions is not true? => `Microexpressions can be easily read by any person.`
- `opentriviaqa::science-technology::197` Three of these snakes produce venom, lethal to humans. Which one does not? => `Desert Kingsnake`
- `opentriviaqa::science-technology::222` Three of the following four disorders are actually different names for the same disease. Which is the odd one? => `Maniac`

Reason: `wrong_course_mapping_or_non_science_tech`
- `opentriviaqa::science-technology::233` Australopithecus were early hominids that differed in many ways from modern-day humans -- they were short, and their brain-case was much smaller. In 1924, Raymond Dart found the first remains of an Australopithecus on this continent. => `Africa`
- `opentriviaqa::science-technology::264` The Shaanxi earthquake is regarded as the deadliest recorded earthquake, killing approximately 830,000 people. It occurred on February 14, 1556 in this country. => `China`
- `opentriviaqa::science-technology::696` The first oil refinery in the world, bombarded in 1943 by US Air Force in operation Tidal Wave, was built in this country in 1856. => `Romania`

Reason: `too_short_or_contextless`
- `opentriviaqa::science-technology::372` Calculate 6! => `720`
- `opentriviaqa::science-technology::1314` What is soap? => `a base with a bitter taste`
- `opentriviaqa::science-technology::1337` What is FireWire? => `a method of transporting data between two digital devices`

Reason: `binary_or_thin_choice_set`
- `opentriviaqa::science-technology::1180` Which of these can be defined as a clones biological mother and father? => `None of these`
- `opentriviaqa::science-technology::1800` On average, how long is the sunspot cycle? => `11.1 years`

Reason: `answer_leakage`
- `opentriviaqa::science-technology::1205` Mr. A picks three cards from a 52-card deck. Mr. B rolls a pair of dice once. Mr. C rolls three dice. Mr. A must pick three aces. Mr. B must roll a 13. Mr. C must roll a two. Who has the best odds? => `Mr. A`
- `opentriviaqa::science-technology::1454` This 2003 independent film, directed by Jim Jarmusch, consists of eleven short stories, which focus on coffee and cigarettes. => `Coffee and Cigarettes`
- `opentriviaqa::science-technology::2476` A body is orbiting another body in an elliptical orbit with a closest approach of 1000 kilometers and a farthest approach of 2000 kilometers. At its farthest approach, a triangle formed by connecting its orbital positions one day apart to its parent body covers an area of 100,000 square kilometers. How large of an area does this body sweep out in the period of one day at its closest approach? => `100,000 square kilometers`

## Import Guardrails

- Keep all accepted rows out of app code until manually reviewed against the target course syllabus.
- Reject binary True/False rows for this import pass; they are often low-signal trivia and offer no distractor quality check.
- Reject `all of these`, `none of these`, odd-one-out, and negative exception prompts unless rewritten, because they are fragile in shuffled-choice quiz UI and can leak test-taking strategy instead of course knowledge.
- Reject current/status/record/superlative facts, including endangered-status, Guinness/world-record, largest/fastest/oldest, launch/current-product, and dated-health rows.
- Prefer concept definitions, stable taxonomic/physical science facts, formulas, symbols, and course vocabulary over named-person, product-history, pet-care, or pop-culture trivia.
