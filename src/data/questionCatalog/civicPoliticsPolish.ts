// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings for
// the civic and political philosophy roadmap across five banks:
//   highConstitution101Questions     (480001-480038, 38 Qs)
//   highUsGovernmentCivicsQuestions  (481001-481038, 38 Qs)
//   highPoliticalPhilosophyQuestions (483001-483038, 38 Qs)
//   highPracticalPoliticsQuestions   (477001-477061, 61 Qs)
//   careerPublicAffairsQuestions     (479001-479052, 52 Qs)
//
// Three exports:
//   CIVIC_POLITICS_SUB_TOPICS         id -> cluster name (per chapter)
//   CIVIC_POLITICS_MENTOR_HINTS       id -> one-line second-person nudge
//   CIVIC_POLITICS_CORRECT_SHORTENED  id -> { newCorrect?, lessonAddendum? }
//
// Voice: civics teacher / political theory professor with constitutional law
// in hand. Hints name the specific case, clause, doctrine, thinker, or
// institutional move that the item tests, without revealing the answer.
// Sober, nonpartisan, US-centered with UK/EU/comparative notes where the
// item is comparative.

export const CIVIC_POLITICS_SUB_TOPICS: Record<number, string> = {
  // ============================================================
  // Constitution 101 (480001-480038)
  // ============================================================
  // -- Foundations & Structure --
  480001: 'Founding Principles',
  480002: 'Separation of Powers',
  480003: 'Federalism Basics',
  480004: 'Bill of Rights',
  480007: 'Article V',
  480024: 'Article V',
  480023: 'Constitutional Change',
  480011: 'Interpretation Methods',
  480021: 'Supremacy Clause',
  480016: 'Commerce Clause',
  480017: 'Necessary and Proper',

  // -- Due Process & Equal Protection --
  480005: 'Due Process Basics',
  480019: 'Habeas Corpus',
  480030: 'Procedural vs Substantive',
  480037: 'Vagueness Doctrine',
  480025: 'Fourteenth Amendment',
  480006: 'Equal Protection',

  // -- Rights and Liberties (Speech, Religion, Search) --
  480015: 'First Amendment Speech',
  480032: 'Prior Restraint',
  480036: 'Compelled Speech',
  480038: 'Overbreadth',
  480026: 'Religion Clauses',
  480014: 'Fourth Amendment',
  480027: 'Fifth Amendment & Miranda',
  480022: 'Fifth and Sixth Amendments',
  480029: 'Ex Post Facto',
  480018: 'Takings Clause',
  480013: 'Incorporation Doctrine',
  480035: 'Selective Incorporation',
  480031: 'Emergency Powers',

  // -- Judicial Review & Courts --
  480008: 'Judicial Review',
  480028: 'Standing',
  480033: 'Justiciability',
  480034: 'Jurisdiction',

  // -- Political Accountability --
  480009: 'Impeachment',
  480010: 'War Powers',
  480012: 'Voting Rights Amendments',
  480020: 'Election Law Authority',

  // ============================================================
  // US Government and Civics (481001-481038)
  // ============================================================
  // -- Federal Institutions --
  481002: 'Congress and Committees',
  481003: 'Executive Agencies',
  481004: 'Federal Courts',
  481020: 'Administrative Rulemaking',
  481026: 'Public Administration',

  // -- Federalism and Levels --
  481001: 'Local Authority',
  481005: 'Federalism in Practice',
  481013: 'Tribal Sovereignty',
  481016: 'State Courts',
  481021: 'County Government',
  481022: 'Special Districts',
  481025: 'State Constitutions',

  // -- Elections and Parties --
  481006: 'Political Parties',
  481007: 'Primaries',
  481008: 'Election Administration',
  481019: 'Redistricting',
  481024: 'Election Officials',
  481038: 'Ballot Initiatives',

  // -- Local Civic Life --
  481009: 'School Boards',
  481032: 'Constituent Services',
  481033: 'School Board Oversight',
  481034: 'Zoning and Land Use',
  481035: 'Participatory Budgeting',

  // -- Transparency, Ethics, Oversight --
  481018: 'Open Meetings',
  481023: 'Public Records',
  481027: 'Records Appeals',
  481028: 'Procurement',
  481030: 'Public Safety Oversight',
  481031: 'Civic Technology',
  481036: 'Ethics Commissions',
  481037: 'Inspectors General',

  // -- Public Finance and Service Delivery --
  481017: 'Public Budgets',
  481029: 'Local Tax Measures',
  481015: 'Public Health Authority',

  // -- Civic Participation and Media --
  481010: 'Media Literacy',
  481011: 'Interest Groups',
  481012: 'Civic Participation',
  481014: 'Emergency Powers',

  // ============================================================
  // Political Philosophy (483001-483038)
  // ============================================================
  // -- Legitimacy, Consent, and Authority --
  483001: 'Legitimacy',
  483002: 'Social Contract',
  483037: 'Democratic Legitimacy',

  // -- Liberty and Liberal Theory --
  483003: 'Mill and Liberty',
  483024: 'Libertarianism',
  483015: 'Republican Freedom',
  483016: 'Civic Republicanism',
  483026: 'Perfectionism vs Neutrality',
  483031: 'Privacy',

  // -- Justice, Equality, and Distribution --
  483004: 'Rawls and Justice',
  483005: 'Property',
  483025: 'Democratic Socialism',
  483028: 'Punishment Theory',
  483033: 'Restorative Justice',
  483034: 'Transitional Justice',

  // -- Democracy and Deliberation --
  483007: 'Majority and Minority',
  483008: 'Ideology',
  483020: 'Deliberative Democracy',
  483021: 'Recognition',
  483006: 'Civil Disobedience',

  // -- Identity, Power, and Inclusion --
  483009: 'Feminist Political Theory',
  483035: 'Feminist Political Theory',
  483010: 'Indigenous Sovereignty',
  483036: 'Indigenous Sovereignty',
  483014: 'Disability Justice',
  483030: 'Epistemic Injustice',
  483027: 'Colonialism',
  483017: 'Nationalism',
  483023: 'Care Ethics',
  483029: 'Workplace Democracy',

  // -- Global, Environmental, and Technological --
  483018: 'Environmental Theory',
  483019: 'Migration and Borders',
  483022: 'Global Justice',
  483011: 'Anarchism',
  483012: 'Technology and Power',
  483013: 'Religion and Public Reason',
  483032: 'Algorithmic Governance',
  483038: 'AI and Responsibility',

  // ============================================================
  // Practical Politics (477001-477061)
  // ============================================================
  // -- U.S. Institutions and Process --
  477001: 'Bill to Law',
  477002: 'House and Senate',
  477015: 'Presidential Veto',
  477016: 'Courts and Review',
  477025: 'Senate Confirmation',
  477014: 'Committee Bottlenecks',
  477045: 'Legislative Agendas',

  // -- UK and EU --
  477004: 'UK Prime Minister',
  477005: 'House of Lords',
  477022: 'Commons Money Power',
  477032: 'UK Devolution',
  477006: 'EU Lawmaking',
  477023: 'EU Membership',
  477033: 'European Councils',

  // -- Elections and Voting Systems --
  477003: 'First Past the Post',
  477018: 'Ranked Choice',
  477019: 'Primary Rules',
  477026: 'Electoral College',
  477028: 'Election Administration',
  477029: 'Ballot Measures',
  477037: 'Manifestos',
  477042: 'Petitioning',
  477043: 'Party Primaries',
  477046: 'Voter Guides',
  477047: 'Candidate Forums',
  477054: 'Election Observers',
  477058: 'Candidate Scorecards',
  477059: 'Voter Registration',

  // -- Ideas and Ideologies --
  477007: 'Socialism',
  477008: 'Conservatism',
  477024: 'Using Ideology',

  // -- Money, Influence, and Media --
  477009: 'Money in Politics',
  477021: 'Lobbying',
  477035: 'Disclosure',
  477010: 'Reading Polls',
  477020: 'Poll Quality',
  477027: 'Coverage Critique',
  477034: 'Misinformation',
  477039: 'Local News',
  477050: 'Ad Fact-Checking',
  477055: 'Debate Fact-Checking',

  // -- Engagement and Advocacy --
  477011: 'Casework',
  477030: 'Public Assembly',
  477038: 'Volunteering',
  477040: 'Issue Advocacy',
  477044: 'Contacting Officials',
  477049: 'Public Comment',
  477051: 'Coalition Letters',
  477053: 'Routing Issues',

  // -- Local Government --
  477013: 'Local Authority',
  477017: 'School Districts',
  477036: 'City Councils',
  477041: 'Town Halls',
  477057: 'Fiscal Notes',

  // -- Accountability --
  477012: 'Separation of Powers',
  477031: 'Peaceful Transfer',
  477048: 'Open Data',
  477052: 'Evaluating Promises',
  477056: 'Public Records',
  477060: 'Lawsuits',
  477061: 'Tracking Promises',

  // ============================================================
  // Career Public Affairs (479001-479052)
  // ============================================================
  // -- Mapping and Strategy --
  479001: 'Stakeholder Mapping',
  479009: 'Power Mapping',
  479008: 'Cross-Jurisdiction Mapping',

  // -- Legislative and Regulatory Engagement --
  479002: 'Legislative Timing',
  479003: 'Agency Rulemaking',
  479010: 'Comment Windows',
  479026: 'Consultations',
  479040: 'Regulator Mapping',
  479046: 'Regulator Meetings',
  479016: 'Hearing Testimony',
  479045: 'Select Committees',

  // -- Advocacy Craft --
  479004: 'Message Discipline',
  479006: 'Coalition Building',
  479012: 'Coalition Letters',
  479036: 'Coalition Maintenance',
  479041: 'Coalition Governance',
  479015: 'Records as Evidence',
  479039: 'FOI Strategy',

  // -- Compliance and Ethics --
  479007: 'Donation Compliance',
  479011: 'Lobbying Registration',
  479025: 'Opposition Research Ethics',
  479031: 'Revolving Door',
  479048: 'Partner Due Diligence',
  479052: 'Decision Logs',

  // -- Political Risk and Monitoring --
  479005: 'Policy Risk',
  479013: 'Risk Monitoring',
  479024: 'Due Diligence Scans',
  479043: 'Risk Registers',
  479047: 'Issue Heat Maps',
  479051: 'Post-Election Scenarios',

  // -- Crisis, Litigation, and Media --
  479018: 'Astroturf Risk',
  479019: 'Crisis Statements',
  479027: 'Media Pressure',
  479032: 'Rumor Response',
  479021: 'Legal Coordination',
  479033: 'Parallel Tracks',

  // -- Implementation and Procurement --
  479014: 'Budget Reality',
  479028: 'Implementation Dashboards',
  479044: 'Policy Handover',
  479049: 'Budget Asks',
  479017: 'EU Implementation',
  479020: 'Government Procurement',
  479030: 'Pre-Bid Engagement',
  479050: 'Public Inquiries',

  // -- Executive Briefings and Evaluation --
  479022: 'Advocacy Evaluation',
  479034: 'Outcome Evidence',
  479042: 'Campaign Retrospective',
  479029: 'Executive Briefings',
  479037: 'Ministerial Submissions',
  479038: 'Board Updates',
  479023: 'Stakeholder Escalation',
  479035: 'Senior Escalation',
}

export const CIVIC_POLITICS_MENTOR_HINTS: Record<number, string> = {
  // ============================================================
  // Constitution 101 (480001-480038)
  // ============================================================
  480001: 'The Preamble names the source of authority. Sovereignty answers the question "by whose right."',
  480002: 'Madison\'s Federalist 51 logic: ambition counteracts ambition. The branches share work to prevent capture.',
  480003: 'Article IV plus the Tenth Amendment: distinct sovereigns operating in overlapping space, not a hierarchy.',
  480004: 'The first ten amendments are negative restraints on federal action, written to answer Anti-Federalist fear.',
  480005: 'Fifth and Fourteenth Amendments: process before deprivation. Notice, hearing, neutral decision-maker.',
  480006: '"Nor deny to any person within its jurisdiction the equal protection of the laws" - Fourteenth Amendment, Section 1.',
  480007: 'Two-thirds to propose, three-fourths to ratify. Article V is hard on purpose - durability over momentary majorities.',
  480008: 'Marbury v. Madison, 1803. The job courts gave themselves and which Congress and presidents have largely accepted.',
  480009: 'Article I, Section 2 (House impeaches) and Section 3 (Senate tries). Start at the chamber that begins the process.',
  480010: 'Article I, Section 8 versus Article II, Section 2: divided war power, with Congress holding the declaration.',
  480011: 'Originalism, textualism, structuralism, living constitutionalism - all are theories of meaning, not of facts.',
  480012: 'Fifteenth, Nineteenth, Twenty-Fourth, Twenty-Sixth: the amendments removed specific barriers rather than guaranteeing turnout.',
  480013: 'Gitlow v. New York (1925) and later cases: the Fourteenth Amendment is the bridge from federal to state.',
  480014: 'Reasonableness is the touchstone; warrants and probable cause are the usual proof of it. Carpenter v. United States.',
  480015: 'R.A.V. v. St. Paul and Rosenberger: government may regulate when, where, and how - not which side gets to speak.',
  480016: 'Wickard v. Filburn marks the high point; Lopez and Morrison mark the limits. Interstate substance, not pretext.',
  480017: 'McCulloch v. Maryland: a means-ends test, not an open-ended grant. The end must itself be a constitutional power.',
  480018: 'Kelo v. New London made this politically live. The clause has two requirements: public use and just compensation.',
  480019: 'Article I, Section 9 suspension clause limits when even Congress may pause the writ. The judiciary tests the detention.',
  480020: 'Elections Clause (Article I, Section 4) plus the Voting Rights Act: state administration sits inside federal floors.',
  480021: 'Article VI, Clause 2. Note that the federal law must itself be valid - supremacy applies only to constitutional federal action.',
  480022: 'Fifth covers what the government cannot make you do or do to you twice. Sixth covers the trial that follows.',
  480023: 'Think Senate filibuster norms or the practice of judicial review itself - meaning that shifted without textual change.',
  480024: 'Article V offers two proposing paths and two ratifying paths. The common path has been Congress-then-states.',
  480025: 'Fourteenth Amendment, Section 1 contains both clauses; the question is whether the harm is unfair process or unequal treatment.',
  480026: 'First Amendment: "no law respecting an establishment ... or prohibiting the free exercise thereof." Two clauses, one tension.',
  480027: 'Miranda v. Arizona, 1966: warnings are required only when both conditions are present, not for every police contact.',
  480028: 'Lujan v. Defenders of Wildlife sets the three-part test: injury-in-fact, causation, redressability.',
  480029: 'Article I, Section 9 and Section 10. Retroactive criminal law violates the basic notice principle of fair warning.',
  480030: 'Procedural asks "how"; substantive asks "whether." Lochner-era debates and modern fundamental-rights cases shape this line.',
  480031: 'Youngstown Sheet & Tube v. Sawyer (1952) sets the famous three-zone framework. Emergencies do not suspend Justice Jackson.',
  480032: 'Near v. Minnesota and New York Times v. United States (Pentagon Papers): prior restraint carries the heaviest First Amendment presumption.',
  480033: 'Article III\'s "cases and controversies" requirement underlies both doctrines. Past and future both raise the same problem in mirror.',
  480034: 'Article III, Section 2 lists original jurisdiction; everything else gets to the Supreme Court on appeal.',
  480035: 'Palko v. Connecticut and the long line through Duncan v. Louisiana and McDonald v. Chicago: one right, one case, at a time.',
  480036: 'West Virginia v. Barnette and Wooley v. Maynard: the right to speak implies the right not to be conscripted as the speaker.',
  480037: 'Connally v. General Construction Co.: laws that require guessing about meaning fail both notice and equal-enforcement tests.',
  480038: 'Broadrick v. Oklahoma: the standard third-party standing rule bends for speech because chilling is the injury.',

  // ============================================================
  // US Government and Civics (481001-481038)
  // ============================================================
  481001: 'Dillon\'s Rule: cities act with state-delegated authority. Land use is the classic local domain.',
  481002: 'Speaker, Rules Committee, and chairs decide what reaches the floor. Committees are the legislative funnel.',
  481003: 'Chevron and Loper Bright deal with deference to agency interpretations; either way, agencies fill statutory gaps.',
  481004: 'Marbury v. Madison frames the basic move. Courts decide legality through cases brought to them.',
  481005: 'Three layers, each with constitutional or statutory authority. Federalism is structure, not affiliation.',
  481006: 'V.O. Key called them "linkage institutions" - the bridge from voter preference to governing coalition.',
  481007: 'Primaries replaced party caucuses through the early 1900s reforms. They are how parties pick standard-bearers.',
  481008: 'HAVA and the NVRA set federal floors; states and counties run the actual mechanics of registration and counting.',
  481009: 'Local school boards make front-line decisions on curriculum, calendar, transit, and budget priorities.',
  481010: 'Lateral reading is the move journalists use: leave the source to check it against independent ones.',
  481011: 'Pluralism, capture, mobilization, signaling - groups influence policy through several distinct channels.',
  481012: 'Tocqueville\'s "art of association": democratic life lives in school boards, juries, and meetings, not only in voting booths.',
  481013: 'Worcester v. Georgia and the Marshall Trilogy: tribes are "domestic dependent nations" with inherent powers.',
  481014: 'Stafford Act at federal level; state-law analogues at state level. Authority widens, but legal limits remain.',
  481015: 'Jacobson v. Massachusetts established the police-power baseline. States lead public health regulation.',
  481016: 'State courts handle roughly 98% of U.S. cases by volume. Federal courts hear narrow constitutional and statutory categories.',
  481017: 'Aaron Wildavsky: "The choice of expenditures is the politics of the budget." Money names priorities.',
  481018: 'Sunshine laws at state level and FACA at federal level: meetings of public bodies are presumptively public.',
  481019: 'Shaw v. Reno and Rucho v. Common Cause set the boundaries. Lines drawn after each census reshape representation.',
  481020: 'The Administrative Procedure Act (1946) - notice-and-comment is the spine of legitimate federal rulemaking.',
  481021: 'Counties were originally creatures of the state for administering state law; they remain the workhorse local unit.',
  481022: 'Special districts often exceed cities in count - water, transit, mosquito control - each with its own taxing authority.',
  481023: 'Federal FOIA and state public records laws have a presumption of access with enumerated exemptions.',
  481024: 'County clerks, registrars, and boards of elections - the operational layer below Secretary of State.',
  481025: 'State constitutions often grant more rights than the federal floor and are easier to amend. Read them as their own document.',
  481026: 'Woodrow Wilson\'s "Study of Administration" set the field: politics decides, administration delivers.',
  481027: 'Most records laws have a built-in appeal path - administrative review, attorney general, or court action.',
  481028: 'Competitive bidding is the procurement counterpart to open meetings: visibility as the check on favoritism.',
  481029: 'Proposition 13 and the post-1970s wave: voter approval of revenue measures is a defining feature of local finance.',
  481030: 'Civilian review boards vary widely in subpoena power and authority - the structure matters more than the name.',
  481031: 'Open data, Code for America, and 311 systems: civic tech makes administrative data legible to residents.',
  481032: 'Casework is the unsung half of representation - more contact happens through service requests than legislation.',
  481033: 'School boards are governing bodies, not advisory ones. Policy, budget, and personnel are their three levers.',
  481034: 'Standing-room-only zoning hearings are where local power most visibly meets neighborhood preference.',
  481035: 'Pioneered in Porto Alegre, Brazil; adapted across many U.S. cities. It is direct democracy on a budget slice.',
  481036: 'Ethics commissions reflect the legal-realist principle that rules without enforcement are aspiration, not law.',
  481037: 'IG offices were strengthened by the Inspector General Act of 1978 - independence and reporting authority are the design features.',
  481038: 'Initiative, referendum, and recall - Progressive-Era reforms that vary widely by state.',

  // ============================================================
  // Political Philosophy (483001-483038)
  // ============================================================
  483001: 'Weber distinguished legitimate from merely effective authority. The question is about right to rule, not capacity.',
  483002: 'Hobbes, Locke, Rousseau, and Rawls all sit in this tradition. The shared move is justifying authority through agreement.',
  483003: 'Mill, On Liberty, Chapter 1: "The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others."',
  483004: 'A Theory of Justice (1971): impartiality through stripped-back information. The original position is the device, the veil is the constraint.',
  483005: 'Locke, Marx, Nozick, and Murphy & Nagel: property is contested at the level of justification, not just allocation.',
  483006: 'Thoreau, Gandhi, King. Civil disobedience accepts punishment to address moral conscience to the community.',
  483007: 'Mill, Considerations on Representative Government; Madison, Federalist 10. Both name the worry of majority faction.',
  483008: 'Ideologies organize values and assumptions; they do not waive the requirement to defend conclusions with evidence.',
  483009: 'Pateman, Okin, Young: the personal is political because power circulates through household, body, and care work.',
  483010: 'Vitoria, Kymlicka, Coulthard: sovereignty is not granted by the colonizing state but recognized by it.',
  483011: 'Bakunin, Kropotkin, Graeber: the family argument is against unjustified hierarchy, not against organization.',
  483012: 'Pasquale, Zuboff, Suzor: platforms are quasi-governments setting rules for speech, association, and visibility.',
  483013: 'Rawls (Political Liberalism), Habermas: public reason looks for terms strangers in a pluralist polity could share.',
  483014: 'Sins Invalid, Mingus, Kafer: design choices about "normal participation" distribute political standing.',
  483015: 'Pettit, Skinner: freedom as non-domination differs from Berlin\'s negative liberty - it asks about standing, not just acts.',
  483016: 'Sandel, Pettit, Pocock: republicanism treats citizenship as participation, not just rights-bearing.',
  483017: 'Anderson\'s "Imagined Communities" frames the double face: solidarity and exclusion travel together.',
  483018: 'Hans Jonas, the precautionary principle, climate justice: politics with intergenerational and non-human stakes.',
  483019: 'Carens, Wellman, Miller: the debate is between bounded democracy and universal moral standing.',
  483020: 'Habermas, Gutmann, Thompson: legitimacy through reason-giving and revisability, not just vote-counting.',
  483021: 'Honneth, Fraser, Taylor: the politics of recognition adds dignity to the distributive picture.',
  483022: 'Pogge, Singer, Beitz: do duties of justice stop at the border, or do they follow persons?',
  483023: 'Tronto, Held, Kittay: dependency is the universal human condition, not the exception that liberal theory treats it as.',
  483024: 'Nozick (Anarchy, State, and Utopia), Hayek: self-ownership and voluntary exchange ground the libertarian position.',
  483025: 'Cohen, Wright, Sanders: the wager is that democracy and economic power must move together to remain real.',
  483026: 'Raz vs. Rawls: should the state promote good lives, or remain neutral among reasonable conceptions of the good?',
  483027: 'Fanon, Memmi, Mamdani: colonialism is the test case for theories of consent, sovereignty, and legitimate rule.',
  483028: 'Retributivism, deterrence, rehabilitation, restoration: each justification implies different limits on punishment.',
  483029: 'Anderson (Private Government), Dahl: workplaces govern, and the question is whether democratic norms apply.',
  483030: 'Miranda Fricker (Epistemic Injustice): testimonial and hermeneutical injustice are wrongs done in capacity as a knower.',
  483031: 'Warren and Brandeis on privacy; Solove\'s taxonomy: privacy protects multiple goods, not only secrecy.',
  483032: 'Pasquale (Black Box Society), Eubanks (Automating Inequality): accountability transfers when decisions move into code.',
  483033: 'Howard Zehr, Braithwaite: restorative practice asks "who was harmed, what do they need, who is responsible."',
  483034: 'Truth commissions, lustration, reparations, prosecutions - the post-conflict toolkit and its sequencing problems.',
  483035: 'MacKinnon, Crenshaw: formal equality can leave underlying structures of dependence intact.',
  483036: 'Coulthard, Simpson: nation-to-nation framing rejects the politics of recognition that grants what is already inherent.',
  483037: 'Habermas\'s deliberative model presupposes a baseline of shared epistemic conditions. Misinformation attacks the baseline.',
  483038: 'Bostrom, Floridi, Mittelstadt: moral status, agency, and responsibility for AI systems are now live policy questions.',

  // ============================================================
  // Practical Politics (477001-477061)
  // ============================================================
  477001: 'Article I, Section 7: bicameralism plus presentment. Bills die in either chamber.',
  477002: 'Connecticut Compromise. Population-based House, equal state representation in the Senate.',
  477003: 'Duverger\'s Law: plurality systems push toward two-party competition. Winner takes the seat.',
  477004: 'No separate election for prime minister - the office follows Commons confidence. Cabinet sits in Parliament.',
  477005: 'Parliament Acts 1911 and 1949 capped the Lords\' delay power. Revising chamber, not coequal Senate.',
  477006: 'Commission proposes, Parliament and Council co-decide. Three institutions, distinct roles.',
  477007: 'Public ownership, collective provision, redistribution - the common thread across democratic-socialist programs.',
  477008: 'Burke, Oakeshott, Scruton: prudence about change, respect for inherited institutions, scepticism of abstract schemes.',
  477009: 'Influence operates through access, attention, and capacity - not usually as direct quid pro quo.',
  477010: 'Sampling error, response error, and timing all live in the margin. Treat the lead as a range, not a point.',
  477011: 'Casework is constituent service: liaison and inquiry, not directive power over the agency.',
  477012: 'Federalist 51: "the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself."',
  477013: 'Step one of any campaign: who owns this road, building, or rule? Authority precedes ask.',
  477014: 'Most bills die in committee. Hearings, markups, and chair discretion are the choke points.',
  477015: 'Article I, Section 7: two-thirds of present-and-voting in each chamber. Override is rare but constitutional.',
  477016: 'Marbury v. Madison still frames the move. Courts test legality through real cases.',
  477017: 'Local school boards usually have direct policy authority; mayors rarely run schools directly outside a few cities.',
  477018: 'Maine, Alaska, and several cities use IRV. Eliminate the lowest, transfer ballots, until someone has a majority.',
  477019: 'Closed, open, top-two, jungle - the rule shapes the electorate, which shapes the incentive to moderate.',
  477020: 'A skewed frame can produce 90% support for things almost no one supports. Start with the sampling design.',
  477021: 'Lobbying disclosure laws make this routine and lawful when registered. Drafting language is a normal tool.',
  477022: 'Commons financial privilege dates to the 17th century - the Lords cannot amend supply bills.',
  477023: 'Article 50 and the EU treaties: members keep parliaments while accepting shared rules in defined areas.',
  477024: 'Ideology gives the value frame. Facts about the specific case still have to be checked.',
  477025: 'Article II, Section 2: advice and consent. Simple majority confirms; the House plays no role here.',
  477026: 'Article II and the Twelfth Amendment. Electors total 538, allocated by congressional representation plus DC.',
  477027: 'Thomas Patterson called this the "game schema." Strategy crowds out substance when coverage is contest-focused.',
  477028: 'Decentralized administration is a feature, not a bug. Local officials run elections under state and federal rules.',
  477029: 'Initiatives, referendums, recall - state-level direct democracy mechanisms vary widely.',
  477030: 'Time, place, and manner restrictions are permitted; content and viewpoint restrictions face strict scrutiny.',
  477031: 'Norm, not law, but it was central to every American transfer from Adams-Jefferson onward until 2021.',
  477032: 'Scotland Act 1998, Government of Wales Act, Good Friday Agreement - power transferred but not constitutionalized as in federalism.',
  477033: 'The European Council (heads of state, broad direction) is not the Council of the EU (ministers, legislation) - distinct bodies.',
  477034: 'Verify first, then share. Verification beats engagement in the long run on platform algorithms too.',
  477035: 'Buckley v. Valeo (1976) constitutionalized disclosure as a permissible interest. Transparency is the constitutional purchase.',
  477036: 'Home-rule cities and Dillon\'s Rule cities differ on the breadth, but day-to-day local governance lives here.',
  477037: 'In parliamentary systems, manifestos act as the mandate the governing party claims from voters.',
  477038: 'Canvassing and phone banking - voter-contact work is the labor backbone of campaigns.',
  477039: 'Local news collapse correlates with lower turnout, more partisan voting, and weaker accountability - the empirical pattern is clear.',
  477040: 'Issue advocacy organizations (501(c)(4)s in the U.S.) are distinct from candidate campaigns and have different rules.',
  477041: 'Specific question, named impact, requested action - the formula that helps officials respond substantively.',
  477042: 'Petition rules vary by state: signature counts, deadlines, geographic distribution, and wording review.',
  477043: 'A primary is the party\'s nomination contest, not the general election. Different electorate, different rules.',
  477044: 'Staff triage messages. Specific bill, constituent connection, evidence, clear ask - the four-part formula.',
  477045: 'Reading an agenda is reading the schedule of opportunity. First reading is signal, final vote is decision.',
  477046: 'Source, criteria, method - the three questions to ask of any voter guide before relying on it.',
  477047: 'Distinguish promises that fit the office\'s authority from promises that do not. The latter cannot be delivered.',
  477048: 'Open data shifts the burden of proof: residents can now check claims against the published numbers.',
  477049: 'The follow-up letter is where the comment becomes a record the official can act on or be held to.',
  477050: 'Adopted budgets, amendments, and minutes are the primary documents. Ads are secondary at best.',
  477051: 'Coalition letters signal breadth. The list of signers carries information beyond the demand itself.',
  477052: 'The "iron triangle" of cut taxes, more services, and less debt requires showing the math, not the slogan.',
  477053: 'Three problems, three offices. Federalism turns into a routing exercise for any active citizen.',
  477054: 'Election observation has formal credentials and rules; it is monitoring within the process, not part of administration.',
  477055: 'Definitions, dates, denominators - the three vocabulary checks before accepting a comparative statistic.',
  477056: 'Specific agency, specific records, specific dates. Narrow requests get answered; broad ones get dragged.',
  477057: 'Fiscal notes are produced by legislative analysts to make the cost side legible alongside the policy.',
  477058: 'Scorecards earn trust through transparent method, not through claimed neutrality. Show the rubric.',
  477059: 'Registration deadlines, ID rules, and form acceptance vary by state and can disqualify good-faith outreach.',
  477060: 'Lujan v. Defenders of Wildlife on standing; ripeness, mootness, and remedy availability shape what courts can do.',
  477061: 'Define the promise, find the measurable outputs, follow the votes and budgets. Track, not just react.',

  // ============================================================
  // Career Public Affairs (479001-479052)
  // ============================================================
  479001: 'Map authority, incentive, and impact - not just visibility. The power-influence-interest grid is the standard tool.',
  479002: 'The legislative kill points sit well before the floor vote. Drafting, markup, and whip count are the live windows.',
  479003: 'Agencies turn statutory broad strokes into operational rules. The action is in the implementation phase.',
  479004: 'Ask, evidence, affected people, authority match - four parts. Any one missing and the message loses bite.',
  479005: 'Policy risk is exposure to changes in the rules that govern operations - regulatory, fiscal, and political.',
  479006: 'Coalitions trade reach for coordination cost. The mathematics of pooled credibility versus governance friction.',
  479007: 'Federal Election Campaign Act and state analogues set the perimeter. Approval matrix and disclosure first, tactics second.',
  479008: 'Across systems, authority and process are the constants worth mapping. Headlines vary; institutions persist.',
  479009: 'Sequencing matters as much as who. Right person, right evidence, right time on the decision curve.',
  479010: 'Comments enter the rulemaking record under the APA. Evidence-tied to the agency\'s own question is the discipline.',
  479011: 'Lobbying Disclosure Act, state lobbying laws, and revolving-door rules - check before the first meeting, not after.',
  479012: 'Coalition letters fail through inattention to sign-off, evidence claims, and spokesperson rules. The mechanics matter.',
  479013: 'Election results, committee activity, fiscal pressure, and agency guidance - the four signals worth tracking systematically.',
  479014: 'Authority without resources is unfunded mandate. Track appropriation and staffing, not just enactment.',
  479015: 'FOIA at federal level, state public records laws elsewhere - records are evidence when scoped tightly.',
  479016: 'Testimony is bounded performance: core message, evidence trail, anticipated questions, clear ask. Hearings reward discipline.',
  479017: 'Directives vs. regulations under EU law - the legal instrument predicts how much national variation is built in.',
  479018: 'Astroturf is the classic credibility loss: hidden coordination, disclosed too late, destroys the campaign\'s legitimacy.',
  479019: 'Crisis communications discipline: acknowledge, share verified facts, commit to updates. Speculation creates the second crisis.',
  479020: 'Federal Acquisition Regulation and state procurement codes set contact restrictions during live tenders.',
  479021: 'Legal hold obligations attach when litigation is reasonably anticipated. Privilege and preservation are not optional.',
  479022: 'Contribution analysis, not attribution: did the campaign move target actors, or did external factors carry the change?',
  479023: 'Severity triggers, named owners, decision rights, escalation thresholds - the operational anatomy of incident response.',
  479024: 'FCPA and UK Bribery Act risk live here. Ownership, sanctions, government ties, and documented scope are the must-checks.',
  479025: 'Opposition research lives in public records and lawful sources. Hacking, deception, and harassment cross the line.',
  479026: 'Consultation responses with executive summary, evidence, and concrete edits are read; complaint letters are filed.',
  479027: 'Holding lines under deadline: narrow, verified, and conditional. Buy time without making it worse.',
  479028: 'Implementation dashboards translate enactment into milestones, owners, and risk - the operational scoreboard.',
  479029: 'Decision, options, evidence, risk, recommended path - the five-part briefing structure that ministers actually use.',
  479030: 'Pre-bid market engagement is permitted but governed: documented contacts, no unfair advantage, separate streams.',
  479031: 'Revolving-door restrictions and cooling-off periods apply to many former officials. Pause and check before engaging.',
  479032: 'Confirm internal facts before crafting external response. A premature denial that proves wrong becomes the story.',
  479033: 'Parallel-track coordination: public claims, privilege, discovery, and settlement posture interact. Counsel reviews substance.',
  479034: 'Theory of change, touchpoints, decision-maker movement, rival explanations - the credible contribution case.',
  479035: 'A long-supportive stakeholder going hostile is a high-information signal. Diagnose specifics before responding generically.',
  479036: 'Coalitions drift after early wins. Reconfirming shared goal, decision rules, and message boundaries is maintenance, not weakness.',
  479037: 'Ministerial submissions are decision documents: define the decision, compare options, surface risk, recommend a path.',
  479038: 'Board updates translate public affairs detail into governance terms: material risk, strategic choice, decisions needed.',
  479039: 'FOI strategy works backward from the information gap. Right body, narrow scope, planned for exemptions.',
  479040: 'Regulator mapping covers authority, priorities, decision process, team contacts, and contact rules - five layers, not one.',
  479041: 'Governance rules are how coalitions outlast their founding momentum. Decision rights, spokespersons, funding, exit conditions.',
  479042: 'Retrospectives update the operating model. What assumptions held, what tactics moved actors, what evidence was weak.',
  479043: 'A risk without an owner is a wish. Triggers, mitigations, status, and review date are the operational minimum.',
  479044: 'Policy wins die in handover. Intent, commitments, owners, timelines, and monitoring plan transfer with the file.',
  479045: 'Select committee preparation: previous statements, evidence trail, disclosure duties, anticipated lines of pressure.',
  479046: 'Regulator meetings during consultations are permitted, structured, and recorded. Purpose, evidence, attendees, follow-up.',
  479047: 'Heat maps surface relative priority by likelihood, impact, intensity, and timing. Color without action is decorative.',
  479048: 'Partner due diligence covers funding sources, conflicts, data practices, and reputation - not just headline alignment.',
  479049: 'Budget asks succeed on cost evidence and delivery plan, not on moral urgency alone. Translate to funding terms.',
  479050: 'Public inquiry responses require coordinated legal, records, and subject expertise. Preserve documents from day one.',
  479051: 'Post-election scenario planning maps governing arrangements, priorities, appointments, and legislative math.',
  479052: 'Decision logs preserve the basis: what was considered, who approved, what evidence supported the choice.',
}

export const CIVIC_POLITICS_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ============================================================
  // Constitution 101 - length-imbalance fixes
  // ============================================================
  480012: {
    newCorrect: 'They expanded voting rights by banning specific barriers such as race, sex, poll taxes, and age over 18.',
    lessonAddendum: 'The Fifteenth, Nineteenth, Twenty-Fourth, and Twenty-Sixth Amendments each removed a specific exclusionary criterion rather than guaranteeing universal access. The pattern is incremental: one barrier at a time, each requiring its own constitutional moment.',
  },
  480020: {
    newCorrect: 'States set many election rules, but federal law and constitutional protections can limit them.',
    lessonAddendum: 'The Elections Clause (Article I, Section 4) gives Congress authority over the manner of federal elections, while the Voting Rights Act and constitutional amendments set additional floors. State authority operates inside these federal limits, especially for federal races.',
  },
  480023: {
    newCorrect: 'Practices, court interpretations, and traditions changing how the Constitution works without changing its text.',
    lessonAddendum: 'Examples include the Senate filibuster, the practice of judicial review itself, modern presidential war-making practices, and the rise of administrative agencies. The text stays fixed; the operative constitution shifts through interpretation and convention.',
  },
  480026: {
    newCorrect: 'The Establishment Clause limits government sponsorship of religion; Free Exercise protects religious practice.',
    lessonAddendum: 'The two clauses work in tension: too much accommodation of religion under Free Exercise can look like establishment, while strict separation under Establishment can burden exercise. Modern cases live in the seam between them.',
  },
  480028: {
    newCorrect: 'Has a concrete injury that is fairly traceable to the defendant and redressable by the court.',
    lessonAddendum: 'Lujan v. Defenders of Wildlife (1992) sets the three-part test. Each prong is jurisdictional, not optional: courts dismiss cases that fail any of the three.',
  },
  480033: {
    newCorrect: 'Article III courts decide live disputes, not problems that are already over or too speculative.',
    lessonAddendum: 'Mootness and ripeness sit on either side of the live-controversy requirement. Standing addresses whether the right plaintiff is in court; mootness and ripeness address whether the dispute is at the right point in time.',
  },
  480037: {
    newCorrect: 'Fails to give people fair notice of what is illegal and invites arbitrary enforcement.',
    lessonAddendum: 'Connally v. General Construction Co. and Kolender v. Lawson set the doctrine. Notice and non-arbitrary enforcement are the two prongs - a law can fail either independently.',
  },

  // ============================================================
  // US Government & Civics
  // ============================================================
  481020: {
    newCorrect: 'Rulemaking to create detailed rules under authority granted by law.',
    lessonAddendum: 'The Administrative Procedure Act (1946) establishes notice-and-comment as the standard process: agency publishes a proposed rule, accepts public comment, then issues a final rule with response to substantive comments. This is the spine of legitimate federal regulation.',
  },

  // ============================================================
  // Political Philosophy - length-imbalance fixes
  // ============================================================
  483017: {
    newCorrect: 'Build solidarity and belonging while also risking exclusion or domination of outsiders and minorities.',
    lessonAddendum: 'Benedict Anderson\'s "Imagined Communities" gives the canonical statement: national identity creates the in-group and the out-group in the same gesture. The political work is holding both effects in view.',
  },
  483023: {
    newCorrect: 'Dependency, caregiving, vulnerability, and relationships are central political facts, not private afterthoughts.',
    lessonAddendum: 'Tronto, Held, and Kittay developed care ethics partly as a critique of contractualist theories that idealize independent rational agents. Real political life involves children, aging, illness, disability - dependency is the universal condition.',
  },
  483025: {
    newCorrect: 'Greater social and economic equality through democratic institutions and labor or public ownership.',
    lessonAddendum: 'The democratic-socialist family includes social democracy (Esping-Andersen\'s Nordic model), market socialism (Roemer), and worker-cooperative models (Wright). The shared move is treating economic power as a democratic question.',
  },
  483032: {
    newCorrect: 'How automated systems should be made accountable when they classify, rank, predict, or decide.',
    lessonAddendum: 'Pasquale (Black Box Society) and Eubanks (Automating Inequality) document how delegating decisions to algorithms transfers accountability. The political question is reconstructing oversight, contestability, and explanation in the new locus.',
  },
  483034: {
    newCorrect: 'Truth, accountability, reparations, institutional reform, and reconciliation after serious injustice.',
    lessonAddendum: 'The transitional-justice toolkit includes truth commissions (South Africa, Chile), lustration (Eastern Europe), prosecutions (ICC), reparations, and memorialization. Sequencing and combination depend on the specific transition.',
  },

  // ============================================================
  // Practical Politics - length-imbalance fixes
  // ============================================================
  477019: {
    newCorrect: 'Different rules change who can participate, which changes the electorate and candidate incentives.',
    lessonAddendum: 'Closed primaries restrict to registered party members; open primaries allow same-day choice; top-two and jungle primaries advance the top two regardless of party. Each rule selects for different median voters and different candidate strategies.',
  },
  477033: {
    newCorrect: 'The European Council sets direction with heads of state; the Council of the EU makes law with ministers.',
    lessonAddendum: 'Add the Council of Europe (a separate body of 46 states with the European Court of Human Rights) and the confusion deepens. Three near-identically named bodies, three distinct mandates.',
  },
  477034: {
    newCorrect: 'Check reliable sources such as official election offices, court records, and credible reporting first.',
    lessonAddendum: 'Lateral reading - leaving the suspect source to verify against independent ones - is the move trained journalists and fact-checkers use. Sharing before verifying is how misinformation propagates fastest.',
  },
  477054: {
    newCorrect: 'Watch the process, document concerns, and report through legal channels without interfering.',
    lessonAddendum: 'Election observers carry formal credentials and follow rules about distance, photography, and contact. Their role is monitoring, not administration; observed concerns go through complaint procedures, not direct intervention.',
  },
  477056: {
    newCorrect: 'Find the public records law, identify the agency, and make a specific request with dates and topics.',
    lessonAddendum: 'Narrow requests get answered; sweeping ones get delayed or denied. State the legal basis (FOIA at federal level, state public records law elsewhere), identify the records custodian, and define the scope.',
  },
  477061: {
    newCorrect: 'Define the promise, follow relevant votes and budgets, and compare progress against a realistic timeline.',
    lessonAddendum: 'A vague promise cannot be tracked. Translate the promise into specific votes, appointments, regulations, or appropriations, then check the public record at predictable intervals.',
  },

  // ============================================================
  // Career Public Affairs - length-imbalance fixes
  // ============================================================
  479001: {
    newCorrect: 'Who has formal authority, who influences markup, who is affected, and what each actor wants.',
    lessonAddendum: 'The power-influence-interest grid is the standard public-affairs tool. Formal authority sets the floor; influence sits above it (committee leaders, staff directors, agency heads); interests explain behavior across both layers.',
  },
  479009: {
    newCorrect: 'A prioritized outreach sequence based on authority, influence, timing, and evidence needs.',
    lessonAddendum: 'Sequencing matters as much as targeting: the right actor briefed at the wrong moment loses the window. Map the decision curve, then back-plan briefings against it.',
  },
  479010: {
    newCorrect: 'Submit evidence-based comments tied to the agency\'s question, legal authority, and implementation concerns.',
    lessonAddendum: 'Under the APA, comments that engage the agency\'s specific factual and legal questions enter the record in ways that broad slogans do not. Substantive comments that propose alternative language or cite evidence can shape the final rule.',
  },
  479013: {
    newCorrect: 'Election results, committee activity, party positions, fiscal pressure, and agency guidance.',
    lessonAddendum: 'A working political-risk monitor watches these five signal streams continuously. Single-point alerts are usually too late; the diagnostic value comes from pattern across streams.',
  },
  479022: {
    newCorrect: 'Whether media attention moved decision-makers, grew coalitions, or credibly contributed to the outcome.',
    lessonAddendum: 'Contribution analysis is the evaluation standard: not whether the campaign caused the outcome alone, but whether it materially shifted the inputs that led to the outcome. Coverage alone is output, not impact.',
  },
  479027: {
    newCorrect: 'Verify what can be said, align legal and leadership on a narrow holding line, and respond by deadline.',
    lessonAddendum: 'Reporter deadlines under two hours force the choice between a narrow, accurate holding line and no comment. Silence often becomes the story; speculation becomes the second crisis. The disciplined middle is the verified, bounded statement.',
  },
  479028: {
    newCorrect: 'Milestones, agencies, deadlines, budget status, guidance, risks, and decision points.',
    lessonAddendum: 'The implementation dashboard translates a policy win into operational tracking. Without it, leaders learn about implementation problems through external complaint rather than internal monitoring.',
  },
  479030: {
    newCorrect: 'Use permitted market-engagement channels, document contacts, and separate advocacy from bid prep.',
    lessonAddendum: 'Pre-tender market engagement is allowed under most procurement codes but governed by contact rules. Documentation of who said what to whom protects the process and the bidder; informal channels create the risk of disqualification.',
  },
  479032: {
    newCorrect: 'Confirm whether regulators attended any site, alert legal and operations, and prepare a conditional line.',
    lessonAddendum: 'A categorical denial that proves wrong becomes the crisis. The disciplined first step is internal verification across operations, legal, and any potentially affected sites, then a holding line that fits the verified facts.',
  },
  479037: {
    newCorrect: 'Set out the decision needed, options, evidence, risks, stakeholder views, and a clear recommendation.',
    lessonAddendum: 'Ministerial submissions are decision instruments, not briefing notes. The structure - decision, options, recommendation - matches how ministers actually work through choices under time pressure.',
  },
  479038: {
    newCorrect: 'Material risk, strategic choices, timelines, stakeholder positions, and decisions needed from the board.',
    lessonAddendum: 'Boards govern; they do not manage. Updates that surface material risk and present clear strategic choices match the governance role. Daily media noise without analysis wastes the board\'s time.',
  },
  479040: {
    newCorrect: 'Which bodies have authority, their priorities, relevant teams, contact rules, and history.',
    lessonAddendum: 'A regulator map is multi-layer: legal authority sets the formal frame, but priorities, working-level contacts, and contact rules determine how engagement actually works. Single-point relationships are fragile.',
  },
  479041: {
    newCorrect: 'Membership rules, decision rights, spokespersons, approvals, funding transparency, and exit conditions.',
    lessonAddendum: 'Coalition governance documents are how informal alliances become durable institutions. Without them, decisions get made by whoever speaks loudest at the moment, which erodes trust within months.',
  },
  479042: {
    newCorrect: 'Which assumptions held, which tactics moved actors, where risk was missed, and what should change.',
    lessonAddendum: 'A retrospective worth the team\'s time updates the operating model rather than rehearsing the campaign timeline. The deliverable is changes to the playbook, not a celebration deck.',
  },
  479044: {
    newCorrect: 'Policy intent, commitments made, agencies, timelines, open risks, and the monitoring plan.',
    lessonAddendum: 'The handover document is what stands between a policy win and a delivery failure. Without it, the implementing team rediscovers the bargain and the commitments by accident, often months in.',
  },
  479049: {
    newCorrect: 'The objective, costed request, evidence of need, delivery plan, expected impact, and timing.',
    lessonAddendum: 'Budget holders evaluate asks against competing claims on the same fiscal envelope. Cost, delivery, impact, and timing are the comparable terms; moral urgency without these gets routed to a later round.',
  },
  479051: {
    newCorrect: 'Governing arrangements, policy priorities, key appointments, legislative math, and business implications.',
    lessonAddendum: 'Post-election scenario planning is most useful when started before the result is known. Branching plans across two or three plausible outcomes lets leaders respond on day one rather than waiting for the dust to settle.',
  },
}
