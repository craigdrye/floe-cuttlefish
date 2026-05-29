import { makeQuestionBank } from './base'
import type { Question } from './types'

// AP US Government — Chapter 6: Civil Liberties and Civil Rights expansion bank.
// These 37 items (IDs 4360600–4360636) expand the chapter beyond the 13 questions
// already in `highApUsGovernmentQuestions` (civicPoliticsQuestions.ts). They cover
// the selective incorporation mechanic, Establishment and Free Exercise doctrine,
// modern speech tests, search and seizure, Miranda and self-incrimination, jury
// rights, Eighth Amendment limits, equal-protection tiers, the major civil-rights
// statutes, Obergefell, the Griswold–Roe–Dobbs privacy line, and the Bruen
// Second Amendment framework. Voice mirrors the existing AP US Gov bank: sober,
// nonpartisan, AP-rigorous; every distractor carries a bespoke whyWrong reflecting
// a real student misconception, not a strawman.

export const apUsGovCh6Questions: Question[] = makeQuestionBank('AP', [
  // ---------------------------------------------------------------------------
  // Selective incorporation mechanic — gateway clause, what is in, what is out
  // ---------------------------------------------------------------------------
  {
    id: 4360600,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Incorporation gateway clause',
    prompt: 'Selective incorporation applies most Bill of Rights protections to the states through which specific constitutional text?',
    correct: 'The Due Process Clause of the Fourteenth Amendment',
    wrong: [
      ['The Privileges or Immunities Clause of the Fourteenth Amendment, which has been the operative incorporation vehicle since the Slaughter-House Cases', 'The Slaughter-House Cases (1873) actually narrowed the Privileges or Immunities Clause so much that the Court turned to Due Process instead; only the McDonald plurality has revisited Privileges or Immunities seriously.', 'Look at which clause the Court actually uses, not the one the text seems to invite.'],
      ['The Supremacy Clause of Article VI', 'The Supremacy Clause makes valid federal law supreme over state law, but it does not extend Bill of Rights protections to state governments by itself.', 'Supremacy resolves conflicts; incorporation is about scope.'],
      ['The Ninth Amendment, which the Court treats as the source of all rights binding on the states', 'The Ninth Amendment is rarely a freestanding source of enforceable rights, and the Court has not used it as the incorporation vehicle.', 'Incorporation runs through the Fourteenth Amendment, not the Ninth.'],
    ],
    lesson: 'AP US Gov tests incorporation as a Fourteenth Amendment Due Process Clause doctrine. Naming the wrong clause is a common student error worth memorizing past.',
  },
  {
    id: 4360601,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Rights not incorporated',
    prompt: 'Which of the following Bill of Rights protections has NOT been incorporated against the states?',
    correct: 'The Fifth Amendment right to indictment by a grand jury',
    wrong: [
      ['The Sixth Amendment right to counsel in serious criminal cases', 'Gideon v. Wainwright incorporated the right to counsel against the states in 1963.', 'Gideon is the leading example of incorporation.'],
      ['The Second Amendment individual right to keep and bear arms', 'McDonald v. Chicago incorporated the Second Amendment against the states in 2010.', 'McDonald followed Heller and reached the states.'],
      ['The Fourth Amendment protection against unreasonable searches and seizures', 'Mapp v. Ohio applied the exclusionary rule, and earlier cases applied the underlying Fourth Amendment, against the states.', 'Fourth Amendment protections bind the states.'],
    ],
    lesson: 'The grand jury indictment clause and the Seventh Amendment civil jury right are the two textbook examples of unincorporated rights. AP item writers favor these as distractors against rights students assume must be incorporated.',
  },
  {
    id: 4360602,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Civil jury trial',
    prompt: 'A plaintiff sues a defendant in state court for breach of contract and demands a jury under the Seventh Amendment right to civil jury trial. The state court rules the right does not apply because state procedure governs civil cases. Under current Supreme Court doctrine, the state court is:',
    correct: 'Correct, because the Seventh Amendment civil jury right has not been incorporated against the states',
    wrong: [
      ['Wrong, because every provision of the Bill of Rights binds the states automatically', 'Incorporation is selective and case by case; not every provision binds the states.', 'Selective incorporation is not total incorporation.'],
      ['Wrong, because the Seventh Amendment was incorporated in Mapp v. Ohio', 'Mapp incorporated the Fourth Amendment exclusionary rule, not the Seventh Amendment civil jury right.', 'Mapp is a search-and-seizure case, not a civil procedure case.'],
      ['Correct, because state courts may ignore any federal constitutional provision they find inconvenient', 'State courts must follow incorporated federal rights; they are not free to ignore federal law generally.', 'The reason is the doctrine of selective incorporation, not state autonomy at large.'],
    ],
    lesson: 'The Seventh Amendment civil jury right is the cleanest example of a Bill of Rights provision that remains unincorporated. AP students often assume all jury rights bind the states; only the criminal jury right does.',
  },
  // ---------------------------------------------------------------------------
  // Establishment Clause tests
  // ---------------------------------------------------------------------------
  {
    id: 4360603,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Lemon test',
    prompt: 'The Lemon test from Lemon v. Kurtzman asked courts to evaluate Establishment Clause challenges by considering whether a law:',
    correct: 'Has a secular purpose, has a primary effect that neither advances nor inhibits religion, and avoids excessive government entanglement with religion',
    wrong: [
      ['Receives the approval of a supermajority of state legislators', 'Lemon set a judicial test, not a legislative supermajority requirement; voting margins do not cure an Establishment Clause violation.', 'Look for purpose, effect, and entanglement.'],
      ['Treats every religion identically in funding decisions', 'Equal treatment is not enough on its own; even neutral funding can violate Lemon if it has a religious purpose or fosters entanglement.', 'Lemon asks more than nondiscrimination.'],
      ['Requires a public referendum before any school may host a religious activity', 'Lemon does not impose a referendum requirement; it imposes substantive constitutional limits enforceable by courts.', 'The test is judicial, not plebiscitary.'],
    ],
    lesson: 'The three-prong Lemon test dominated Establishment Clause doctrine for decades. Kennedy v. Bremerton School District (2022) largely abandoned Lemon in favor of historical practices and understandings, but AP exams still expect familiarity with the test.',
  },
  {
    id: 4360604,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Kennedy v. Bremerton',
    prompt: 'In Kennedy v. Bremerton School District (2022), the Supreme Court shifted Establishment Clause analysis toward:',
    correct: 'Historical practices and understandings, moving away from the Lemon test',
    wrong: [
      ['A strict ban on any religious speech by public employees at any time', 'The Court protected the coach\'s personal religious expression and read the Establishment Clause more narrowly, not more broadly.', 'The shift was toward, not against, religious expression.'],
      ['A new requirement that schools compose nondenominational prayers', 'Engel v. Vitale forbids school-composed prayer; Kennedy did not reverse that and did not require school-composed prayer.', 'Engel remains good law on school-composed prayer.'],
      ['A return to the strict separation framework of Everson v. Board of Education', 'Kennedy is widely read as a move away from strict separation, not back toward it.', 'The doctrinal arrow points away from Everson, not back to it.'],
    ],
    lesson: 'Kennedy v. Bremerton is the most recent landmark Establishment Clause case AP item writers reach for. It marks a doctrinal pivot away from Lemon toward a history-and-tradition approach.',
  },
  {
    id: 4360605,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Endorsement and coercion',
    prompt: 'A city places a large Christmas nativity scene alone on the front steps of city hall during the holiday season. Critics argue this violates the Establishment Clause under the endorsement test because it:',
    correct: 'Communicates government approval of a particular religion to a reasonable observer',
    wrong: [
      ['Requires every passerby to participate in a religious ceremony', 'The endorsement test does not require active participation; it asks how the display reads symbolically to a reasonable observer.', 'Endorsement, not coercion, is the trigger.'],
      ['Violates the Free Exercise Clause by burdening non-Christian religious practice', 'A passive display does not by itself substantially burden anyone\'s religious practice; the issue is government endorsement.', 'This is an establishment, not free-exercise, question.'],
      ['Constitutes excessive entanglement under the Lemon test', 'Excessive entanglement typically describes ongoing administrative or financial relationships, not a one-off display.', 'Endorsement and entanglement are distinct prongs.'],
    ],
    lesson: 'The endorsement test (Justice O\'Connor in Lynch v. Donnelly) asks whether a reasonable observer would conclude that the government is endorsing religion. Coercion is a separate test that focuses on direct pressure on individuals to participate.',
  },
  // ---------------------------------------------------------------------------
  // Free Exercise — Smith, Sherbert/Yoder, RFRA, Hobby Lobby
  // ---------------------------------------------------------------------------
  {
    id: 4360606,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Employment Division v. Smith',
    prompt: 'Employment Division v. Smith (1990) held that the Free Exercise Clause generally does NOT exempt religious practitioners from:',
    correct: 'Neutral, generally applicable laws that incidentally burden religious conduct',
    wrong: [
      ['Laws specifically targeting a religion for disfavored treatment', 'Smith leaves laws that target religion subject to strict scrutiny; Church of Lukumi Babalu Aye later confirmed this.', 'Smith addresses neutral laws, not targeted ones.'],
      ['Any law a religious adherent finds inconvenient', 'The pre-Smith Sherbert framework, not Smith, asked courts to balance burdens against state interests; Smith narrowed that.', 'Smith narrowed protection, not expanded it.'],
      ['Laws regulating only the internal governance of religious organizations', 'The ministerial exception (Hosanna-Tabor) protects internal governance; Smith addresses external regulation of conduct.', 'Internal governance has its own doctrine.'],
    ],
    lesson: 'Smith is the modern baseline Free Exercise rule: neutral, generally applicable laws survive even when they incidentally burden religious conduct. The Sherbert-Yoder strict scrutiny framework still applies when a law targets religion or involves individualized exemptions.',
  },
  {
    id: 4360607,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Religious Freedom Restoration Act',
    prompt: 'Congress passed the Religious Freedom Restoration Act (RFRA) in 1993 mainly to:',
    correct: 'Restore strict scrutiny for federal laws that substantially burden religious exercise, displacing the Smith standard for federal action',
    wrong: [
      ['Repeal the Free Exercise Clause and replace it with a statutory standard', 'RFRA supplements the constitutional standard with a statutory one; it cannot repeal a constitutional clause.', 'Statutes cannot repeal the Constitution.'],
      ['Require every state to fund religious schools equally', 'RFRA does not impose funding requirements; it sets a scrutiny standard for laws burdening religious exercise.', 'RFRA is about burdens, not funding.'],
      ['Authorize religious organizations to ignore antidiscrimination laws categorically', 'RFRA requires case-by-case strict scrutiny; it does not categorically exempt religious organizations from any general law.', 'The standard is balancing, not categorical exemption.'],
    ],
    lesson: 'RFRA reinstates a compelling-interest test for federal laws after Smith narrowed Free Exercise doctrine. City of Boerne v. Flores later held RFRA cannot be applied to the states by Congress, though many states have enacted parallel state RFRAs.',
  },
  {
    id: 4360608,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Burwell v. Hobby Lobby',
    prompt: 'In Burwell v. Hobby Lobby (2014), the Supreme Court held that under RFRA:',
    correct: 'A closely held for-profit corporation can assert a religious exercise claim against a federal regulation that substantially burdens that exercise',
    wrong: [
      ['Only individuals, never any kind of corporation, can assert religious-exercise claims', 'Hobby Lobby explicitly extended RFRA protection to closely held for-profit corporations.', 'Hobby Lobby is the case that broke this older assumption.'],
      ['The Free Exercise Clause itself directly forbids the contraceptive mandate', 'The Court relied on RFRA, the federal statute, not directly on the Free Exercise Clause.', 'Watch for statutory versus constitutional grounding.'],
      ['Publicly traded corporations have the same religious-exercise rights as churches', 'The decision was carefully limited to closely held corporations, not publicly traded ones.', 'Closely held is a load-bearing modifier.'],
    ],
    lesson: 'Hobby Lobby is a leading example of RFRA in action and a key AP case on the question of who can hold a religious-exercise claim. Distinguishing closely held from publicly traded corporations is a frequent distractor target.',
  },
  // ---------------------------------------------------------------------------
  // Speech — content-based vs content-neutral, symbolic, fighting words,
  // incitement, true threats, commercial
  // ---------------------------------------------------------------------------
  {
    id: 4360609,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Content-based scrutiny',
    prompt: 'A city ordinance prohibits signs that contain political messages but permits commercial signs of identical size and placement. Under modern First Amendment doctrine, courts will most likely review this ordinance under:',
    correct: 'Strict scrutiny, because the ordinance is content-based',
    wrong: [
      ['Rational basis review, because all sign regulations are economic regulations', 'Sign regulations that discriminate by content trigger strict scrutiny, not rational basis.', 'Look at whether the regulation depends on what the sign says.'],
      ['Intermediate scrutiny, because political signs are commercial speech', 'Political signs are core political speech, not commercial speech; intermediate scrutiny applies to commercial speech specifically.', 'Political speech sits at the core of the First Amendment.'],
      ['No scrutiny, because cities have plenary authority over signs', 'Cities have substantial authority over time, place, and manner of signs but not over content; First Amendment review applies.', 'Content discrimination triggers heightened scrutiny.'],
    ],
    lesson: 'Reed v. Town of Gilbert (2015) made clear that any regulation drawing distinctions based on the content of the message faces strict scrutiny. Content-neutral time, place, and manner regulations get intermediate scrutiny.',
  },
  {
    id: 4360610,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Time, place, and manner',
    prompt: 'A city requires demonstrators to obtain a permit and to keep noise below 80 decibels in a residential park. The rule applies to every speaker regardless of message. Under First Amendment doctrine, the rule is most likely:',
    correct: 'A valid content-neutral time, place, and manner regulation if it is narrowly tailored to a significant government interest and leaves open ample alternatives',
    wrong: [
      ['Per se invalid because any restriction on speech violates the First Amendment', 'The First Amendment permits reasonable content-neutral regulations of time, place, and manner.', 'The First Amendment is not absolute.'],
      ['Subject to strict scrutiny because it requires a permit at all', 'Permit requirements alone do not trigger strict scrutiny if they are content-neutral and procedurally fair.', 'Strict scrutiny applies to content-based rules.'],
      ['Valid only if the city can show actual past disturbances by every applicant', 'Time, place, and manner rules need a significant interest, not a record of individual past misconduct.', 'The standard is forward-looking and general.'],
    ],
    lesson: 'Time, place, and manner regulations are constitutional when (1) content-neutral, (2) narrowly tailored to a significant government interest, and (3) leave open ample alternative channels of expression. This three-part test is heavily AP-tested.',
  },
  {
    id: 4360611,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Texas v. Johnson',
    prompt: 'Texas v. Johnson (1989) held that burning the American flag in political protest is:',
    correct: 'Protected symbolic expression under the First Amendment',
    wrong: [
      ['Outside First Amendment protection because it is conduct, not speech', 'The Court has long protected symbolic conduct intended to communicate a particularized message; flag burning was treated as expressive conduct.', 'Expressive conduct gets First Amendment protection.'],
      ['Punishable as a federal crime under any statute Congress writes', 'After Johnson, the Court struck down a follow-up federal flag-protection statute in United States v. Eichman.', 'Subsequent federal statute also failed.'],
      ['Permitted only if the protester has obtained a parade permit', 'Symbolic expression does not require a permit on its own; permit requirements apply to assembly mechanics, not message.', 'The protest analysis does not turn on permits.'],
    ],
    lesson: 'Texas v. Johnson is the leading symbolic-speech case at the AP level. It also illustrates that government cannot punish speech because it finds the message offensive.',
  },
  {
    id: 4360612,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Brandenburg v. Ohio',
    prompt: 'Brandenburg v. Ohio (1969) replaced the older clear-and-present-danger framework with a standard that protects advocacy unless it is:',
    correct: 'Directed to inciting imminent lawless action and likely to produce such action',
    wrong: [
      ['Critical of the federal government during wartime', 'Mere criticism of government, even in wartime, does not satisfy the Brandenburg test.', 'Imminence and likelihood are essential.'],
      ['Spoken by a member of a disfavored political organization', 'Brandenburg explicitly protects abstract advocacy by political organizations.', 'Membership and advocacy are protected.'],
      ['Likely to be misunderstood by some listeners', 'The test focuses on imminence and likelihood of lawless action, not subjective audience misunderstanding.', 'Audience interpretation alone is not the trigger.'],
    ],
    lesson: 'Brandenburg replaced Schenck\'s clear-and-present-danger language with a much more speech-protective imminent-lawless-action test. AP answers should distinguish the two: Schenck is the historical test, Brandenburg the current one.',
  },
  {
    id: 4360613,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Fighting words',
    prompt: 'The fighting words doctrine from Chaplinsky v. New Hampshire (1942) covers speech that:',
    correct: 'Is directed at a specific person and likely to provoke an immediate violent response',
    wrong: [
      ['Offends listeners in any way', 'Offense alone is not enough; the doctrine requires likelihood of immediate violent reaction to a face-to-face exchange.', 'Mere offense is not unprotected.'],
      ['Argues for unpopular political positions', 'Political advocacy, however unpopular, is protected; fighting words are narrowly defined and seldom upheld in modern cases.', 'Unpopularity is not the trigger.'],
      ['Is spoken in public spaces without a permit', 'Public-space speech without a permit is regulated by time, place, and manner rules, not fighting words doctrine.', 'Different doctrines, different tests.'],
    ],
    lesson: 'Fighting words remain a recognized but very narrow category of unprotected speech. Modern courts almost never sustain fighting-words convictions, and the doctrine should not be confused with offensive or hateful speech generally.',
  },
  {
    id: 4360614,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'True threats',
    prompt: 'Under the Supreme Court\'s "true threats" doctrine, a statement falls outside First Amendment protection when:',
    correct: 'A speaker communicates a serious expression of intent to commit unlawful violence against a specific person or group',
    wrong: [
      ['A listener subjectively feels frightened by political rhetoric', 'A reasonable-listener fear standard alone has been rejected; the speaker\'s mental state and the seriousness of the expression matter.', 'Subjective fear alone is not the test.'],
      ['A statement uses harsh or hyperbolic language', 'Hyperbole and rhetoric remain protected; the threat must be a serious expression of intent to harm.', 'Hyperbole is not a threat.'],
      ['A statement criticizes a public official\'s job performance', 'Criticism of officials is core protected political speech, not a threat.', 'Criticism is protected.'],
    ],
    lesson: 'True threats are unprotected, but the bar is high: serious intent to commit unlawful violence against a specific target. Counterman v. Colorado (2023) clarified that the speaker must at least recklessly disregard the threatening nature of the statement.',
  },
  {
    id: 4360615,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Commercial speech',
    prompt: 'Commercial speech receives First Amendment protection but is subject to a more relaxed standard than political speech. Under the Central Hudson test, restrictions on truthful commercial speech are constitutional only if:',
    correct: 'They directly advance a substantial government interest and are no more extensive than necessary',
    wrong: [
      ['They have any conceivable rational basis whatsoever', 'Central Hudson sets intermediate scrutiny, which is more demanding than rational basis.', 'Commercial speech triggers more than rational basis.'],
      ['They are content-neutral and merely regulate time, place, and manner', 'Most commercial-speech restrictions are content-based; the question is whether the substance is true and non-misleading.', 'Time, place, and manner is a separate doctrine.'],
      ['They satisfy strict scrutiny with a compelling interest', 'Commercial speech gets intermediate, not strict, scrutiny; truthful, non-misleading ads still get less protection than political speech.', 'Different speech, different tier.'],
    ],
    lesson: 'Central Hudson Gas v. Public Service Commission (1980) established the intermediate standard for truthful commercial speech. False or misleading commercial speech receives no protection.',
  },
  // ---------------------------------------------------------------------------
  // Press — NYT v Sullivan, prior restraint
  // ---------------------------------------------------------------------------
  {
    id: 4360616,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'New York Times v. Sullivan',
    prompt: 'New York Times v. Sullivan (1964) established that a public official suing a newspaper for defamation must prove:',
    correct: 'That the statement was made with actual malice, meaning knowledge of falsity or reckless disregard for the truth',
    wrong: [
      ['That the statement embarrassed the official in front of constituents', 'Embarrassment alone is not the legal standard; the official must prove actual malice.', 'Look for the actual-malice standard.'],
      ['That the newspaper failed to obtain a federal license to publish', 'No federal license is required to publish a newspaper; that would be prior restraint.', 'No licensing regime applies.'],
      ['That the statement was about a private personal matter unrelated to official duties', 'Sullivan applies to statements about a public official\'s conduct in office; private matters can use a different standard.', 'The doctrine focuses on official conduct.'],
    ],
    lesson: 'Sullivan\'s actual-malice rule is the cornerstone of modern press freedom doctrine. Gertz v. Welch later refined the standard for private figures.',
  },
  // ---------------------------------------------------------------------------
  // Assembly / Association
  // ---------------------------------------------------------------------------
  {
    id: 4360617,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'NAACP v. Alabama',
    prompt: 'NAACP v. Alabama ex rel. Patterson (1958) protected associational privacy by holding that the state could not:',
    correct: 'Compel disclosure of a civil rights organization\'s membership list when disclosure would chill associational rights',
    wrong: [
      ['Tax civil rights organizations like any other nonprofit', 'The case involved compelled disclosure of membership, not taxation; nonprofits remain subject to ordinary tax rules.', 'Membership disclosure was the issue.'],
      ['Allow members of any organization to remain anonymous in court testimony', 'The decision protected membership lists from state demand, not witnesses\' identities in unrelated proceedings.', 'Look at the specific membership-list context.'],
      ['Require labor unions to register their officers with state authorities', 'The case is about civil rights association privacy; union registration is a separate regulatory issue.', 'Wrong context.'],
    ],
    lesson: 'NAACP v. Alabama is the foundational freedom-of-association case. The Court recognized that compelled disclosure of membership in a controversial organization could deter people from joining and so violated First Amendment associational rights.',
  },
  // ---------------------------------------------------------------------------
  // Second Amendment — Heller, McDonald, Bruen
  // ---------------------------------------------------------------------------
  {
    id: 4360618,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'District of Columbia v. Heller',
    prompt: 'District of Columbia v. Heller (2008) held that the Second Amendment:',
    correct: 'Protects an individual right to keep and bear arms in the home for self-defense, unconnected to militia service',
    wrong: [
      ['Protects only the collective right of state militias to be armed', 'Heller rejected this reading and held the right is individual, not collective.', 'Heller broke the older collective-rights reading.'],
      ['Allows the federal government to ban all civilian possession of firearms', 'Heller narrowed federal authority to ban handgun possession in the home; it did not authorize a general ban.', 'The case constrains, not expands, federal regulation.'],
      ['Applies directly to state and local laws without further analysis', 'Heller dealt with a federal-enclave law; McDonald v. Chicago later incorporated the right against the states.', 'The state-law step is McDonald, not Heller.'],
    ],
    lesson: 'Heller established that the Second Amendment protects an individual right. McDonald incorporated that right against the states two years later. Together the cases form the modern Second Amendment baseline.',
  },
  {
    id: 4360619,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'NYSRPA v. Bruen',
    prompt: 'In New York State Rifle and Pistol Association v. Bruen (2022), the Supreme Court adopted which standard for Second Amendment claims?',
    correct: 'A test based on the text of the amendment and the nation\'s historical tradition of firearm regulation',
    wrong: [
      ['Strict scrutiny applied uniformly to every firearm regulation', 'Bruen replaced the means-end scrutiny lower courts had been applying with a history-and-tradition test.', 'It is not a tier-of-scrutiny test.'],
      ['Rational basis review focused on the government\'s stated public safety interest', 'Bruen made review more demanding than rational basis, not less.', 'The test is stricter than rational basis.'],
      ['Deference to the legislature in any close case involving firearms', 'Bruen explicitly disclaims general deference to legislatures on Second Amendment questions.', 'No general deference is built into the test.'],
    ],
    lesson: 'Bruen rejected the two-step framework lower courts had used after Heller and required governments defending firearm regulations to point to analogous historical regulations. United States v. Rahimi (2024) later clarified how the historical analogue need not be a dead match.',
  },
  // ---------------------------------------------------------------------------
  // Fourth Amendment — Mapp, Terry, automobile, plain view, Carpenter
  // ---------------------------------------------------------------------------
  {
    id: 4360620,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Mapp v. Ohio',
    prompt: 'Mapp v. Ohio (1961) is most significant because it:',
    correct: 'Applied the Fourth Amendment exclusionary rule to the states through the Fourteenth Amendment',
    wrong: [
      ['Created the warrant requirement for the first time in any American court', 'The warrant requirement long predated Mapp; the case was about applying the exclusionary remedy to state courts.', 'Mapp is about remedy, not the underlying right.'],
      ['Eliminated all use of evidence obtained without a warrant', 'Many exceptions to the warrant requirement remain (consent, exigent circumstances, search incident to arrest); Mapp did not eliminate them.', 'Mapp did not abolish warrantless searches.'],
      ['Held that state police are not bound by the Fourth Amendment', 'Mapp held the opposite: state police are bound and the exclusionary rule applies to them.', 'Mapp bound the states more, not less.'],
    ],
    lesson: 'Mapp is the leading example of selective incorporation in the Fourth Amendment context. It made the exclusionary rule binding on state criminal prosecutions, dramatically changing state criminal procedure.',
  },
  {
    id: 4360621,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Terry v. Ohio',
    prompt: 'Terry v. Ohio (1968) allows police to briefly stop and frisk a person when officers have:',
    correct: 'Reasonable suspicion based on specific and articulable facts that the person is involved in criminal activity and may be armed',
    wrong: [
      ['Probable cause based on direct eyewitness identification', 'Terry stops require less than probable cause; that is precisely why the doctrine matters.', 'Terry is a lower threshold than arrest.'],
      ['A mere hunch with no particular factual basis', 'A bare hunch is not enough; the standard requires specific and articulable facts.', 'The standard is more than a hunch.'],
      ['Consent from the person being stopped', 'Consent is a separate basis for searches; Terry permits a stop without consent on reasonable suspicion.', 'Consent and Terry are different doctrines.'],
    ],
    lesson: 'Terry stops sit between consensual encounters and full custodial arrests. Reasonable suspicion of criminal activity supports a brief stop; reasonable suspicion that the person is armed supports a pat-down for weapons.',
  },
  {
    id: 4360622,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Automobile exception',
    prompt: 'The automobile exception to the warrant requirement permits warrantless searches of vehicles because:',
    correct: 'Vehicles are mobile and the occupant has a reduced expectation of privacy compared with the home',
    wrong: [
      ['Drivers waive all Fourth Amendment rights when they obtain a license', 'No such broad license waiver exists; the exception rests on mobility and reduced privacy, not on license terms.', 'There is no Fourth Amendment waiver baked into licensing.'],
      ['Cars are not considered "effects" under the Fourth Amendment', 'Cars are effects within the meaning of the Fourth Amendment; the doctrine simply reduces the warrant requirement for them.', 'Cars are covered but with reduced requirements.'],
      ['Police can never obtain a warrant to search a vehicle', 'Police often can and do obtain warrants for vehicles; the exception permits a warrantless search where probable cause exists.', 'A warrant is permitted but not required.'],
    ],
    lesson: 'The automobile exception requires probable cause to believe the vehicle contains evidence of a crime. Carroll v. United States (1925) created it, and the doctrine has been narrowed and refined in cases like Collins v. Virginia (curtilage limit).',
  },
  {
    id: 4360623,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Carpenter v. United States',
    prompt: 'In Carpenter v. United States (2018), the Supreme Court held that the government generally needs a warrant to obtain:',
    correct: 'Historical cell-site location records from a wireless carrier',
    wrong: [
      ['Any data ever transmitted over the Internet from a private user', 'The case was specifically about cell-site location records, not all Internet traffic.', 'Carpenter is narrower than that.'],
      ['Information voluntarily posted on public social media', 'Material the user makes public has no reasonable expectation of privacy; Carpenter addresses records held by a third-party carrier.', 'Public posts are different from carrier records.'],
      ['Records of phone calls already disclosed to the public', 'Information already public is not covered by Carpenter; the case addresses non-public location data held by carriers.', 'Carpenter targets non-public carrier records.'],
    ],
    lesson: 'Carpenter narrowed the third-party doctrine and required a warrant for historical cell-site location records. It is the leading modern Fourth Amendment digital-privacy case and a likely AP item topic.',
  },
  // ---------------------------------------------------------------------------
  // Fifth Amendment — Miranda, double jeopardy, takings
  // ---------------------------------------------------------------------------
  {
    id: 4360624,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Miranda v. Arizona',
    prompt: 'Miranda v. Arizona (1966) requires police to inform suspects in custodial interrogation of their rights mainly to protect:',
    correct: 'The Fifth Amendment right against compelled self-incrimination',
    wrong: [
      ['The Fourth Amendment right against unreasonable searches', 'Miranda is a Fifth Amendment self-incrimination decision, not a search and seizure case.', 'Different amendment.'],
      ['The Eighth Amendment ban on cruel and unusual punishment', 'Miranda concerns custodial interrogation procedures, not punishment after conviction.', 'Punishment is a different stage.'],
      ['The Tenth Amendment reservation of powers to the states', 'Miranda restricts state police practices through a federal constitutional rule; the Tenth Amendment is not the source of the right.', 'The rule constrains states, not vice versa.'],
    ],
    lesson: 'Miranda warnings operationalize the Fifth Amendment right against compelled self-incrimination during custodial interrogation. AP item writers test the rights\' source, not just the warning script.',
  },
  {
    id: 4360625,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Double jeopardy',
    prompt: 'The Fifth Amendment Double Jeopardy Clause forbids:',
    correct: 'A second prosecution by the same sovereign for the same offense after acquittal',
    wrong: [
      ['Any retrial after any mistrial', 'A mistrial declared with the defendant\'s consent, or due to manifest necessity, generally does not bar retrial.', 'Mistrials are treated differently.'],
      ['A federal prosecution after a state prosecution for the same underlying conduct', 'The dual-sovereignty doctrine permits separate state and federal prosecutions for the same conduct.', 'Different sovereigns are an exception.'],
      ['Civil liability after a criminal acquittal', 'Civil liability after criminal acquittal is permitted; double jeopardy applies only to criminal proceedings by the same sovereign.', 'Civil and criminal are separate.'],
    ],
    lesson: 'Double jeopardy protects against second prosecution by the same sovereign for the same offense after acquittal or conviction. Dual sovereignty and civil proceedings are the main exceptions AP item writers test.',
  },
  {
    id: 4360626,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Takings Clause',
    prompt: 'The Fifth Amendment Takings Clause requires that when government takes private property for public use, it must:',
    correct: 'Provide just compensation to the owner',
    wrong: [
      ['Hold a referendum among affected residents before condemnation', 'The Takings Clause requires just compensation and public use, not a referendum.', 'Compensation, not referendum.'],
      ['Limit takings to military installations only', 'Public use has been read broadly to include public projects beyond military bases.', 'Public use is broader.'],
      ['Pay no compensation if the project benefits the broader community', 'Community benefit does not displace the compensation requirement.', 'Just compensation is required.'],
    ],
    lesson: 'The Takings Clause requires public use and just compensation. Kelo v. City of New London (2005) controversially extended public use to economic development takings, prompting many states to enact statutory protections.',
  },
  // ---------------------------------------------------------------------------
  // Sixth Amendment — speedy trial, impartial jury, confrontation
  // ---------------------------------------------------------------------------
  {
    id: 4360627,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Sixth Amendment trial rights',
    prompt: 'Which of the following is NOT among the rights the Sixth Amendment guarantees in criminal prosecutions?',
    correct: 'The right to a unanimous civil jury in all civil suits',
    wrong: [
      ['The right to a speedy and public trial', 'The Sixth Amendment expressly guarantees a speedy and public trial.', 'This right is enumerated.'],
      ['The right to confront witnesses against the accused', 'The Confrontation Clause is a core Sixth Amendment right.', 'Confrontation is enumerated.'],
      ['The right to an impartial jury of the state and district where the crime occurred', 'The Sixth Amendment includes the impartial-jury and vicinage requirement.', 'Impartial jury is enumerated.'],
    ],
    lesson: 'The Sixth Amendment applies to criminal prosecutions only. The Seventh Amendment, not the Sixth, addresses civil juries, and the Seventh Amendment has not been incorporated against the states.',
  },
  // ---------------------------------------------------------------------------
  // Eighth Amendment — Roper, Graham, Miller
  // ---------------------------------------------------------------------------
  {
    id: 4360628,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Roper v. Simmons',
    prompt: 'Roper v. Simmons (2005) held that the Eighth Amendment bars:',
    correct: 'The death penalty for offenders who committed their crimes while under 18 years of age',
    wrong: [
      ['The death penalty for all offenders regardless of age', 'Roper drew the line at age 18; capital punishment remains constitutional for adult offenders subject to other constraints.', 'Roper is age-specific.'],
      ['Life without parole for any juvenile offender', 'Roper addressed capital punishment; later cases (Graham, Miller) addressed juvenile life without parole separately.', 'Different cases address LWOP.'],
      ['Any punishment exceeding the statutory minimum', 'Roper concerns capital punishment for juveniles, not statutory minimums generally.', 'Wrong scope.'],
    ],
    lesson: 'Roper is the AP-canonical Eighth Amendment juvenile case for capital punishment. Graham v. Florida (2010) and Miller v. Alabama (2012) later extended Eighth Amendment juvenile-sentencing protections to life without parole.',
  },
  {
    id: 4360629,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Miller v. Alabama',
    prompt: 'Miller v. Alabama (2012) held that mandatory life without parole for juvenile offenders violates the Eighth Amendment because:',
    correct: 'Mandatory schemes prevent courts from considering the diminished culpability and capacity for change that characterize youth',
    wrong: [
      ['Life without parole is categorically unconstitutional for any offender', 'Life without parole remains permissible in many cases; Miller targets mandatory schemes for juveniles.', 'Miller is targeted, not categorical.'],
      ['Juveniles cannot be tried in adult court under any circumstances', 'Juveniles may be tried as adults under state transfer statutes; Miller addresses sentencing, not transfer.', 'Trial and sentencing are different stages.'],
      ['The death penalty applies to all juvenile offenders', 'Roper held the opposite, barring the death penalty for juvenile offenders; Miller followed Roper\'s reasoning into LWOP.', 'Roper bars juvenile death penalty.'],
    ],
    lesson: 'Miller forbids mandatory life-without-parole sentences for juvenile offenders. Graham v. Florida (2010) had already barred life without parole for juvenile non-homicide offenses. Together with Roper, these cases form the modern juvenile Eighth Amendment trilogy.',
  },
  // ---------------------------------------------------------------------------
  // Equal Protection tiers and affirmative action
  // ---------------------------------------------------------------------------
  {
    id: 4360630,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Tiers of scrutiny',
    prompt: 'A state law classifies people by sex. Under Equal Protection doctrine, courts will review the classification under:',
    correct: 'Intermediate scrutiny, requiring substantial relation to an important government interest',
    wrong: [
      ['Strict scrutiny, the same standard applied to race classifications', 'Strict scrutiny applies to race and national origin classifications; sex classifications get intermediate scrutiny.', 'Tier matters; sex is intermediate.'],
      ['Rational basis review, the most deferential standard', 'Rational basis is too deferential for sex classifications; the Court applies intermediate scrutiny.', 'Rational basis is the default, not the sex-discrimination test.'],
      ['No scrutiny at all because sex is biological and beyond constitutional review', 'Sex classifications by government are reviewable under the Equal Protection Clause.', 'Sex classifications are reviewable.'],
    ],
    lesson: 'Three tiers structure modern equal-protection review: strict scrutiny (race, national origin), intermediate scrutiny (sex), and rational basis (everything else). Knowing which tier attaches to which classification is high-yield AP material.',
  },
  {
    id: 4360631,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'SFFA v. Harvard',
    prompt: 'In Students for Fair Admissions v. Harvard (2023), the Supreme Court held that race-conscious admissions programs at colleges and universities:',
    correct: 'Generally violate the Equal Protection Clause and Title VI when they use race as a factor in selecting applicants',
    wrong: [
      ['Are permitted as long as racial quotas are also adopted', 'Quotas have been impermissible since Regents of the University of California v. Bakke; SFFA did not authorize them.', 'Quotas have long been impermissible.'],
      ['Are required of every public institution to remedy past discrimination', 'No such constitutional requirement exists; SFFA cut sharply in the opposite direction.', 'SFFA narrows, not expands, the use of race.'],
      ['Are governed only by Title IX, which has nothing to do with admissions', 'Title IX addresses sex discrimination, not race; SFFA rests on equal protection and Title VI.', 'Title IX is a different statute.'],
    ],
    lesson: 'SFFA materially narrowed the use of race in admissions, ending the limited race-conscious approach approved in Grutter v. Bollinger (2003) and rooted in Bakke (1978). AP items should reference the case soberly without editorializing on contested policy implications.',
  },
  // ---------------------------------------------------------------------------
  // Civil Rights statutes
  // ---------------------------------------------------------------------------
  {
    id: 4360632,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Civil Rights Act of 1964',
    prompt: 'Title VII of the Civil Rights Act of 1964 primarily prohibits discrimination on the basis of race, color, religion, sex, or national origin in:',
    correct: 'Employment by employers above a statutory size threshold',
    wrong: [
      ['Voting eligibility in federal elections', 'Voting protections are largely in the Voting Rights Act of 1965 and the Fifteenth, Nineteenth, and Twenty-Sixth Amendments.', 'Voting is a different statute.'],
      ['Admission to private religious schools', 'Title VII covers employment; religious-school admissions involve separate doctrines including ministerial exception protections.', 'Title VII is employment, not admissions.'],
      ['Federally funded public programs only', 'Title VI, not Title VII, governs federally funded programs; Title VII is the employment title.', 'Title VI and Title VII are different titles.'],
    ],
    lesson: 'The Civil Rights Act of 1964 is a multi-title statute. Title VI bars discrimination in programs receiving federal funds; Title VII bars employment discrimination; Title II addresses public accommodations. AP items frequently test the title-to-context match.',
  },
  {
    id: 4360633,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Shelby County v. Holder',
    prompt: 'Shelby County v. Holder (2013) struck down which provision of the Voting Rights Act of 1965?',
    correct: 'The Section 4(b) coverage formula used to determine which jurisdictions were subject to Section 5 preclearance',
    wrong: [
      ['Section 2, the nationwide ban on voting practices that result in racial discrimination', 'Section 2 was not struck down and remains the primary tool for current VRA litigation.', 'Section 2 survives.'],
      ['The entire Voting Rights Act in its current form', 'Only the Section 4(b) coverage formula was struck down; much of the statute remains in force.', 'The Court invalidated a formula, not the whole act.'],
      ['The Twenty-Fourth Amendment ban on poll taxes', 'Constitutional amendments cannot be struck down by the Court; Shelby County addressed a statutory formula.', 'Amendments and statutes are different.'],
    ],
    lesson: 'Shelby County rendered the Section 5 preclearance regime effectively dormant by invalidating its coverage formula. Section 2 enforcement litigation remains active and is the primary current VRA tool.',
  },
  {
    id: 4360634,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Title IX and ADA',
    prompt: 'A public university wants to know which federal statute primarily protects students with disabilities from discrimination in educational programs. The clearest answer is:',
    correct: 'The Americans with Disabilities Act, together with Section 504 of the Rehabilitation Act',
    wrong: [
      ['Title IX of the Education Amendments of 1972', 'Title IX addresses sex discrimination in federally funded education programs, not disability.', 'Title IX is sex, not disability.'],
      ['Title VI of the Civil Rights Act of 1964', 'Title VI bars race, color, and national origin discrimination in programs receiving federal funds, not disability discrimination.', 'Title VI is race, not disability.'],
      ['The Voting Rights Act of 1965', 'The Voting Rights Act addresses voting, not educational access; though it intersects with disability voting access, it is not the primary disability statute.', 'VRA is voting, not education.'],
    ],
    lesson: 'The ADA (1990) and Section 504 of the Rehabilitation Act (1973) are the principal federal disability statutes. AP item writers commonly distinguish them from Title VI (race), Title VII (employment), and Title IX (sex in education).',
  },
  // ---------------------------------------------------------------------------
  // Same-sex marriage and the Griswold–Roe–Dobbs privacy line
  // ---------------------------------------------------------------------------
  {
    id: 4360635,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Obergefell v. Hodges',
    prompt: 'Obergefell v. Hodges (2015) recognized the right of same-sex couples to marry primarily under:',
    correct: 'The Due Process and Equal Protection Clauses of the Fourteenth Amendment',
    wrong: [
      ['The Establishment Clause of the First Amendment', 'The Establishment Clause addresses government endorsement of religion, not marriage rights.', 'Wrong clause.'],
      ['The Commerce Clause of Article I', 'The Commerce Clause regulates interstate economic activity, not personal marriage rights.', 'Marriage is not regulated as commerce here.'],
      ['The Privileges or Immunities Clause of the Fourteenth Amendment, as revived in Obergefell', 'Obergefell did not rely on Privileges or Immunities; it grounded the right in Due Process and Equal Protection.', 'Different clause.'],
    ],
    lesson: 'Obergefell rests on a combined Due Process and Equal Protection rationale: marriage is a fundamental right and excluding same-sex couples denies equal protection of the laws. The decision is a milestone in modern substantive-due-process doctrine.',
  },
  {
    id: 4360636,
    chapter: 'Chapter 6: Civil Liberties and Civil Rights',
    title: 'Griswold v. Connecticut',
    prompt: 'Griswold v. Connecticut (1965) is foundational for modern privacy doctrine because the Court located a right to marital privacy in:',
    correct: 'Penumbras formed by several Bill of Rights guarantees, applied through the Fourteenth Amendment',
    wrong: [
      ['A specific privacy clause written into the original Bill of Rights', 'There is no express privacy clause in the Bill of Rights; Griswold inferred the right from several provisions.', 'No express privacy clause exists.'],
      ['The Tenth Amendment reservation of powers to the states', 'Griswold did the opposite by limiting state authority to regulate marital contraception use.', 'Griswold constrained, not protected, state power here.'],
      ['The Commerce Clause regulation of interstate sales of contraceptives', 'Griswold was about a state criminal prohibition on contraceptive use, not interstate commerce regulation.', 'Wrong doctrine.'],
    ],
    lesson: 'Griswold is the headwater of the modern unenumerated-rights line: marital privacy in Griswold, contraception in Eisenstadt, abortion in Roe, intimacy in Lawrence, marriage equality in Obergefell. Dobbs v. Jackson Women\'s Health Organization (2022) overruled Roe; the rest of the line remains formally intact, although Dobbs invited future challenges.',
  },
])
