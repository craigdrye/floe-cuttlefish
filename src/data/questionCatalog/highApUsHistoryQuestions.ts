import { makeQuestionBank } from './base'

export const highApUsHistoryQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Period 1: 1491-1607 - Pre-Columbian societies and European encounter
  // -----------------------------------------------------------------------
  {
    id: 4400900,
    chapter: 'Period 1: 1491-1607',
    title: 'Pre-contact diversity',
    prompt: 'Which statement best characterizes Indigenous societies in North America before sustained European contact?',
    correct: 'They varied widely in political organization, economy, and settlement patterns depending on environment',
    wrong: [
      ['They shared a single language, religion, and political structure across the continent', 'No continental uniformity existed; Mississippian, Pueblo, Iroquoian, and Plains peoples differed sharply in language, religion, and government.', 'Think regional variation tied to environment.'],
      ['They were almost entirely nomadic and lacked permanent settlements', 'Cahokia, Pueblo Bonito, and Iroquois longhouse villages show large, permanent settlements existed.', 'Look for both farming towns and mobile peoples.'],
      ['They had no agricultural systems before European arrival', 'Maize, beans, and squash agriculture spread north from Mesoamerica long before 1492.', 'Maize cultivation was widespread before contact.'],
    ],
    lesson: 'AP Period 1 emphasizes Indigenous diversity: agricultural Pueblo and Mississippian societies, semi-sedentary Eastern Woodland peoples, and mobile Plains and Great Basin groups each adapted to distinct environments.',
  },
  {
    id: 4400901,
    chapter: 'Period 1: 1491-1607',
    title: 'Columbian Exchange demographics',
    prompt: 'The single largest demographic consequence of the Columbian Exchange in the Americas during the sixteenth century was:',
    correct: 'Catastrophic Indigenous population collapse driven primarily by Old World diseases',
    wrong: [
      ['A rapid rise in Indigenous population due to new European crops', 'Maize and potatoes spread to Europe, not the other way; Indigenous populations fell, sometimes by more than 80 percent in affected regions.', 'Disease moved faster than crops.'],
      ['A balanced exchange of populations between Europe and the Americas', 'European migration in the sixteenth century was modest compared to the scale of Indigenous deaths.', 'The flows were not symmetric.'],
      ['Mass African migration that replaced lost Indigenous labor immediately', 'The transatlantic slave trade grew over the seventeenth and eighteenth centuries; sixteenth-century labor demands were not yet primarily met that way.', 'Stay in the 1500s.'],
    ],
    lesson: 'Smallpox, measles, and influenza preceded most Europeans into the interior, producing demographic collapse that reshaped every later colonial encounter.',
  },
  {
    id: 4400902,
    chapter: 'Period 1: 1491-1607',
    title: 'Flora and fauna swap',
    prompt: 'Which pairing best illustrates the bidirectional movement of plants and animals in the Columbian Exchange?',
    correct: 'Horses and wheat moved to the Americas; maize and potatoes moved to Europe',
    wrong: [
      ['Tobacco and tomatoes moved to the Americas; sugar moved to Europe', 'Tobacco and tomatoes are American crops that moved to Europe, not the reverse; sugar moved from the Old World to the Americas.', 'Reverse those flows.'],
      ['Cattle and coffee moved to the Americas; rice moved to Europe', 'Rice was largely an Old World crop introduced to the Americas; the direction is wrong.', 'Check which crops are New World in origin.'],
      ['Horses and potatoes moved to the Americas; maize moved to Europe', 'Potatoes are Andean in origin and moved to Europe, not to the Americas.', 'Potatoes are a New World crop.'],
    ],
    lesson: 'The Columbian Exchange moved horses, cattle, pigs, wheat, sugar, and rice to the Americas while maize, potatoes, tomatoes, tobacco, and cacao moved to Europe and beyond.',
  },
  {
    id: 4400903,
    chapter: 'Period 1: 1491-1607',
    title: 'Spanish encomienda',
    prompt: 'The Spanish encomienda system in the sixteenth-century Americas is best described as:',
    correct: 'A grant of Indigenous labor and tribute to Spanish settlers in exchange for nominal Christianization',
    wrong: [
      ['A treaty system that recognized Indigenous sovereignty over their lands', 'Encomienda transferred control of labor and tribute to settlers, not sovereignty to Indigenous peoples.', 'Think coerced labor, not recognition.'],
      ['A market-based system of wage labor open to all colonial residents', 'Encomienda was coercive, not a wage market.', 'It rested on compulsion.'],
      ['A purely religious mission system run by Franciscans without secular ties', 'Mission and encomienda overlapped, but encomienda was a secular labor grant from the Crown to settlers.', 'It was a labor grant, not only a mission.'],
    ],
    lesson: 'Encomienda concentrated Indigenous labor under Spanish settlers and produced abuses that critics like Bartolome de las Casas attacked; the Crown later replaced it with the repartimiento and other systems.',
  },
  {
    id: 4400904,
    chapter: 'Period 1: 1491-1607',
    title: 'Imperial models compared',
    prompt: 'Which comparison of early Spanish, French, and Dutch colonization in North America is most accurate?',
    correct: 'Spanish built mission and tribute empires; French built fur-trade alliances; Dutch built commercial trading posts',
    wrong: [
      ['All three powers prioritized large agricultural settler populations from the start', 'Only the English colonies pursued large agricultural settlement on this scale; French and Dutch numbers stayed small.', 'Compare settlement size and goals.'],
      ['Spanish focused on fur trade; French and Dutch built mission empires', 'Spanish empire centered on silver and tribute, not fur; French traders, not missionaries, drove their North American economy.', 'Reverse those roles.'],
      ['All three powers banned interaction with Indigenous peoples', 'Each empire required Indigenous cooperation for labor, trade, or diplomacy; none banned contact.', 'Each empire depended on Indigenous partners.'],
    ],
    lesson: 'AP Period 1 contrasts imperial styles: Spanish extraction and conversion, French fur-trade kinship networks, Dutch commercial outposts, and later English plantation and town settlement.',
  },

  // -----------------------------------------------------------------------
  // Period 2: 1607-1754 - British colonies, slavery, Great Awakening
  // -----------------------------------------------------------------------
  {
    id: 4400905,
    chapter: 'Period 2: 1607-1754',
    title: 'Mayflower Compact',
    prompt: 'The 1620 Mayflower Compact is significant in AP US History primarily because it:',
    correct: 'Established a precedent of self-government by mutual consent in a colonial setting',
    wrong: [
      ['Created the first written constitution in world history', 'Earlier written governing documents existed; the Compact is a brief covenant, not a full constitution.', 'Its significance is about consent, not constitutional firsts.'],
      ['Granted full religious toleration to all settlers in Plymouth', 'Plymouth Separatists did not establish broad religious toleration; the Compact dealt with civil government.', 'It is about civil order, not toleration.'],
      ['Declared independence from the English Crown', 'The signers explicitly remained loyal subjects of King James I.', 'It predates any independence claim by 156 years.'],
    ],
    lesson: 'The Mayflower Compact is a foundational example of consent-based self-government, often paired with the Fundamental Orders of Connecticut as evidence of an emerging colonial political culture.',
  },
  {
    id: 4400906,
    chapter: 'Period 2: 1607-1754',
    title: 'Fundamental Orders of Connecticut',
    prompt: 'The Fundamental Orders of Connecticut (1639) differed from the Mayflower Compact most importantly because they:',
    correct: 'Created a written framework of government with defined offices and elections',
    wrong: [
      ['Recognized the sovereignty of the English Parliament over the colony', 'The Orders did not invoke Parliament; they organized local government.', 'They are notable for being self-generated.'],
      ['Established the first colonial assembly anywhere in North America', 'The Virginia House of Burgesses (1619) preceded the Connecticut Orders.', 'Virginia got there first.'],
      ['Granted voting rights to all adult residents regardless of property', 'Voting in Connecticut was restricted by property and church standing.', 'Voting was still limited.'],
    ],
    lesson: 'The Fundamental Orders are often called the first written constitution in the English colonies because they set up offices, elections, and procedures for self-government in writing.',
  },
  {
    id: 4400907,
    chapter: 'Period 2: 1607-1754',
    title: 'Bacon\'s Rebellion consequences',
    prompt: 'Which long-term consequence of Bacon\'s Rebellion (1676) is most emphasized by historians?',
    correct: 'A shift in Chesapeake labor from European indentured servants toward enslaved Africans',
    wrong: [
      ['The immediate end of slavery in the Chesapeake colonies', 'Slavery expanded sharply after Bacon\'s Rebellion, not the reverse.', 'Slavery grew, not shrank.'],
      ['The collapse of the Virginia colony and its return to Crown control', 'Virginia remained a royal colony and continued to grow.', 'Virginia survived the rebellion.'],
      ['The granting of full political rights to former servants', 'Elite planters tightened, not loosened, the racial and legal hierarchy after the rebellion.', 'Look at racial hardening, not expansion of rights.'],
    ],
    lesson: 'Bacon\'s Rebellion frightened elite planters by showing the danger of armed, landless former servants; the aftermath accelerated the shift to racialized chattel slavery and harder Black codes.',
  },
  {
    id: 4400908,
    chapter: 'Period 2: 1607-1754',
    title: 'Mercantilism',
    prompt: 'British mercantilist policy toward the North American colonies in the seventeenth and eighteenth centuries was designed mainly to:',
    correct: 'Channel colonial trade and raw materials to benefit the British economy and Crown revenue',
    wrong: [
      ['Encourage colonial manufacturing to compete with British producers', 'Mercantilism restricted colonial manufacturing that competed with British goods.', 'Britain wanted markets, not rivals.'],
      ['Permit free trade between the colonies and any European power', 'The Navigation Acts restricted enumerated goods to British ships and ports.', 'Free trade was the opposite of mercantilism.'],
      ['Promote colonial self-sufficiency independent of the empire', 'Mercantilism aimed at imperial integration, not colonial autonomy.', 'Self-sufficiency would defeat the purpose.'],
    ],
    lesson: 'Mercantilism treated colonies as suppliers of raw materials and captive markets for finished British goods, enforced through the Navigation Acts; enforcement remained loose until after 1763.',
  },
  {
    id: 4400909,
    chapter: 'Period 2: 1607-1754',
    title: 'Middle Passage',
    prompt: 'The Atlantic slave trade by the mid-eighteenth century is best characterized by which feature?',
    correct: 'A triangular trade that moved enslaved Africans to the Americas, plantation goods to Europe, and manufactures to Africa',
    wrong: [
      ['A direct two-way exchange between Africa and Britain alone', 'Sugar, tobacco, and rum tied the Americas, Europe, and Africa together in a triangular pattern.', 'Three legs, not two.'],
      ['A small-scale trade ended voluntarily by European states before 1750', 'The trade peaked in the eighteenth century; abolition came later, in the nineteenth.', 'Volume grew through the 1700s.'],
      ['An exchange driven mainly by free African migration for wages', 'Africans were captured, sold, and transported by force in the Middle Passage.', 'It was coerced, not voluntary.'],
    ],
    lesson: 'The transatlantic slave trade forcibly transported roughly 12.5 million Africans across the Atlantic, undergirding plantation economies in the Caribbean, Brazil, and the southern mainland colonies.',
  },
  {
    id: 4400910,
    chapter: 'Period 2: 1607-1754',
    title: 'Great Awakening',
    prompt: 'The First Great Awakening of the 1730s and 1740s is most significant for AP US History because it:',
    correct: 'Spread a shared emotional religious culture that crossed colonial lines and questioned established authority',
    wrong: [
      ['Established a single national church under Crown authority', 'The Awakening fragmented religious authority rather than consolidating it.', 'It splintered, not unified, denominations.'],
      ['Eliminated denominational differences among Protestants', 'New denominations and splits multiplied during and after the revivals.', 'It produced more, not fewer, sects.'],
      ['Brought formal political union to the thirteen colonies', 'Political union did not emerge until the imperial crises of the 1760s and 1770s.', 'Religion, not politics, came first.'],
    ],
    lesson: 'Preachers like George Whitefield and Jonathan Edwards drew massive intercolonial audiences, undermined deference to established clergy, and helped seed a culture of individual judgment that later shaped revolutionary politics.',
  },

  // -----------------------------------------------------------------------
  // Period 3: 1754-1800 - Seven Years War to early republic
  // -----------------------------------------------------------------------
  {
    id: 4400911,
    chapter: 'Period 3: 1754-1800',
    title: 'Seven Years War consequences',
    prompt: 'Which outcome of the Seven Years War (French and Indian War) most directly created tension between Britain and its mainland colonies?',
    correct: 'Britain ended its policy of salutary neglect and sought new colonial revenue to pay war debts',
    wrong: [
      ['Britain returned all French Canadian territory to France', 'The 1763 Treaty of Paris transferred French Canada and lands east of the Mississippi to Britain.', 'Britain gained, not lost, Canada.'],
      ['Spain expelled all British settlers from the eastern seaboard', 'Spain was not in a position to expel British settlers; it lost Florida to Britain in 1763.', 'Spain lost ground in the treaty.'],
      ['Colonial assemblies were abolished and replaced by military rule', 'Colonial assemblies continued to function; tensions came from new taxes and regulations, not abolition.', 'Assemblies remained, but were squeezed.'],
    ],
    lesson: 'Victory left Britain with massive debt and a larger empire to police; new revenue measures like the Sugar Act and Stamp Act ended salutary neglect and triggered the imperial crisis.',
  },
  {
    id: 4400912,
    chapter: 'Period 3: 1754-1800',
    title: 'Stamp Act crisis',
    prompt: 'When colonial assemblies protested the 1765 Stamp Act with the slogan "no taxation without representation," they were primarily objecting to:',
    correct: 'Parliament imposing internal taxes on colonies that elected no members to Parliament',
    wrong: [
      ['Any taxation by their own elected colonial assemblies', 'Colonists accepted taxes from their own assemblies; the dispute was about Parliament.', 'The complaint was about Parliament, not local assemblies.'],
      ['The amount of revenue collected, regardless of who imposed the tax', 'The principle of consent, not the size of the tax, dominated colonial rhetoric.', 'Focus on consent, not amount.'],
      ['Restrictions on the slave trade contained in the act', 'The Stamp Act taxed paper documents; it did not regulate the slave trade.', 'Look at what the Stamp Act actually did.'],
    ],
    lesson: 'The Stamp Act Congress framed representation as a constitutional right; Parliament responded with the Declaratory Act, claiming power to bind the colonies "in all cases whatsoever."',
  },
  {
    id: 4400913,
    chapter: 'Period 3: 1754-1800',
    title: 'Stamp Act resolves stimulus',
    prompt: 'The Virginia Stamp Act Resolves (1765) declare that "the taxation of the people by themselves, or by persons chosen by themselves to represent them, is the only security against a burdensome taxation, and the distinguishing characteristick of British freedom." This passage most directly supports which argument?',
    correct: 'Only assemblies elected by colonists themselves may legitimately tax them',
    wrong: [
      ['Parliament has full authority to tax all British subjects in all cases', 'The passage frames consent through representation as the only legitimate tax authority, the opposite of parliamentary supremacy.', 'Re-read "chosen by themselves to represent them."'],
      ['Colonial assemblies should be abolished in favor of direct rule from London', 'The Resolves defend, not abolish, colonial self-government.', 'The passage protects colonial assemblies.'],
      ['Taxation by any government violates British freedom', 'The Resolves accept taxation by elected representatives; they reject only taxation without representation.', 'Taxation by consent is fine.'],
    ],
    lesson: 'The Virginia Resolves crystallized the colonial constitutional argument that representation is the prerequisite for legitimate taxation, a principle carried into the Declaration and the Constitution.',
  },
  {
    id: 4400914,
    chapter: 'Period 3: 1754-1800',
    title: 'Virginia vs New Jersey Plans',
    prompt: 'At the 1787 Constitutional Convention, the central disagreement between the Virginia and New Jersey Plans concerned:',
    correct: 'Whether congressional representation should be by population or equal by state',
    wrong: [
      ['Whether to retain slavery in the new Constitution', 'Slavery was disputed at the Convention, but the Virginia-New Jersey clash was about representation.', 'Focus on the structure of Congress.'],
      ['Whether the new government should have a bill of rights', 'A bill of rights came up at ratification, not in the Virginia vs New Jersey debate.', 'That fight came later.'],
      ['Whether to abolish or preserve the Articles of Confederation', 'Both plans assumed major change; they differed on how the legislature would be structured.', 'Both wanted reform.'],
    ],
    lesson: 'The Virginia Plan favored large states with proportional representation, the New Jersey Plan favored small states with equal representation, and the Connecticut Compromise produced a bicameral Congress combining both.',
  },
  {
    id: 4400915,
    chapter: 'Period 3: 1754-1800',
    title: 'Connecticut Compromise',
    prompt: 'The Connecticut (Great) Compromise resolved the Convention deadlock by:',
    correct: 'Creating a bicameral Congress with proportional representation in the House and equal representation in the Senate',
    wrong: [
      ['Counting enslaved people fully toward state population', 'The Three-Fifths Compromise, not the Connecticut Compromise, addressed that question and counted three-fifths.', 'Different compromise.'],
      ['Abolishing one chamber of Congress entirely', 'The Compromise created two chambers, not one.', 'It built bicameralism.'],
      ['Giving the largest states veto power over all federal legislation', 'No state was granted such a veto; both chambers must agree.', 'Both states large and small are checked.'],
    ],
    lesson: 'The Great Compromise paired population-weighted representation in the House with equal state representation in the Senate, balancing large-state and small-state demands.',
  },
  {
    id: 4400916,
    chapter: 'Period 3: 1754-1800',
    title: 'Federalist vs Anti-Federalist',
    prompt: 'Which pairing most accurately captures the core disagreement between Federalists and Anti-Federalists during ratification?',
    correct: 'Federalists argued the extended republic and checks would protect liberty; Anti-Federalists feared distant consolidated power',
    wrong: [
      ['Both sides agreed on the Constitution\'s structure but disagreed about who would hold office', 'They disagreed deeply about the very structure of the new government, not just personnel.', 'Look at constitutional design, not candidates.'],
      ['Federalists wanted a confederation; Anti-Federalists wanted a unitary state', 'The labels reverse the actual positions: Federalists wanted stronger national power; Anti-Federalists feared it.', 'Reverse those labels.'],
      ['Federalists opposed any executive; Anti-Federalists demanded a king', 'Federalists supported a single executive; Anti-Federalists feared it could become monarchical.', 'Anti-Federalists feared monarchy, not demanded it.'],
    ],
    lesson: 'Federalist 10 and 51 (Madison) defend the extended republic and separated powers; Brutus 1 attacks consolidation and warns that distant representatives in a large republic will lose touch with the people.',
  },
  {
    id: 4400917,
    chapter: 'Period 3: 1754-1800',
    title: 'Federalist 10 stimulus',
    prompt: 'Madison writes: "Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens." Which argument does this most directly support?',
    correct: 'A large republic better controls majority faction than a small one',
    wrong: [
      ['Direct democracy is the safest form of government for liberty', 'Madison contrasts representative government with pure democracy and prefers the former.', 'He prefers representation.'],
      ['A confederation of small republics best protects rights', 'The passage argues precisely the opposite: a larger sphere is safer.', 'He defends the extended, not the small, republic.'],
      ['Only a single dominant party can guarantee stable government', 'Madison sees competing interests, not one-party rule, as the protection against faction.', 'Multiplicity, not monopoly.'],
    ],
    lesson: 'Federalist 10 inverts classical republican fears of size: in Madison\'s account, scale dilutes faction by multiplying interests, the core argument of the AP-required document.',
  },

  // -----------------------------------------------------------------------
  // Period 4: 1800-1848 - Market Revolution, Jackson, reform
  // -----------------------------------------------------------------------
  {
    id: 4400918,
    chapter: 'Period 4: 1800-1848',
    title: 'Marbury v Madison',
    prompt: 'Marbury v. Madison (1803) is most significant in AP US History because it:',
    correct: 'Established the Supreme Court\'s power of judicial review over acts of Congress',
    wrong: [
      ['Recognized slavery as a constitutional right protected nationwide', 'Marbury concerned a judicial commission, not slavery; that argument appeared in Dred Scott in 1857.', 'Wrong case for that holding.'],
      ['Created a federal income tax', 'A federal income tax came with the Sixteenth Amendment in 1913.', 'Far off in time and topic.'],
      ['Overturned the Alien and Sedition Acts directly', 'The Court did not rule on the Sedition Act; the acts expired and were not formally invalidated in Marbury.', 'Marbury did not rule on that law.'],
    ],
    lesson: 'Chief Justice John Marshall used Marbury to assert that the judiciary determines what the Constitution permits, an authority not explicitly granted in the text.',
  },
  {
    id: 4400919,
    chapter: 'Period 4: 1800-1848',
    title: 'Market Revolution',
    prompt: 'The early-nineteenth-century Market Revolution in the United States is best described as:',
    correct: 'A shift from local subsistence to commercial production tied together by canals, roads, and early factories',
    wrong: [
      ['A shift to fully unregulated free markets with no state involvement', 'States chartered banks, canals, and corporations; government deeply shaped the new market economy.', 'States actively built infrastructure.'],
      ['A planned economy directed by the federal government', 'The federal government supported some infrastructure but did not plan the economy.', 'It was not centrally planned.'],
      ['A return to colonial-era household production', 'The Market Revolution moved production out of, not back into, households.', 'It moved away from the household.'],
    ],
    lesson: 'The Erie Canal, turnpikes, steamboats, and textile mills knit regional markets together, drew labor out of households, and created new class and gender patterns by 1840.',
  },
  {
    id: 4400920,
    chapter: 'Period 4: 1800-1848',
    title: 'Missouri Compromise',
    prompt: 'The Missouri Compromise of 1820 most directly attempted to:',
    correct: 'Preserve sectional balance by admitting Missouri as a slave state and Maine as a free state while drawing a line in Louisiana Purchase territory',
    wrong: [
      ['Abolish slavery in all federal territories permanently', 'The Compromise allowed slavery south of 36°30\' and only restricted it north of that line.', 'It restricted, not abolished, slavery.'],
      ['Admit Texas to the Union as a slave state', 'Texas was annexed in 1845, not in 1820.', 'Wrong decade and territory.'],
      ['End the international slave trade', 'Congress banned the international slave trade in 1808, before the Missouri Compromise.', 'That happened earlier and separately.'],
    ],
    lesson: 'The Compromise preserved Senate parity between slave and free states and drew the 36°30\' line, which the Kansas-Nebraska Act of 1854 later repudiated.',
  },
  {
    id: 4400921,
    chapter: 'Period 4: 1800-1848',
    title: 'Trail of Tears',
    prompt: 'The forced removal of the Cherokee in 1838 occurred despite which Supreme Court ruling?',
    correct: 'Worcester v. Georgia (1832), which held that Georgia laws had no force within Cherokee territory',
    wrong: [
      ['Marbury v. Madison (1803), which addressed a federal judicial commission', 'Marbury concerned judicial review, not Indigenous rights or sovereignty.', 'Wrong case for this topic.'],
      ['Dred Scott v. Sandford (1857), which addressed Black citizenship', 'Dred Scott came nearly twenty years after the removal and addressed slavery and citizenship.', 'Too late and off-topic.'],
      ['Plessy v. Ferguson (1896), which addressed racial segregation', 'Plessy postdated removal by decades and addressed segregation, not tribal sovereignty.', 'Wrong era entirely.'],
    ],
    lesson: 'Worcester recognized Cherokee sovereignty against Georgia, but Andrew Jackson did not enforce the ruling; the Indian Removal Act of 1830 and the 1838 Trail of Tears followed anyway.',
  },
  {
    id: 4400922,
    chapter: 'Period 4: 1800-1848',
    title: 'Second Great Awakening',
    prompt: 'The Second Great Awakening (roughly 1790s-1840s) most directly contributed to which feature of antebellum reform?',
    correct: 'A widespread belief that society could be morally perfected through individual conversion and collective action',
    wrong: [
      ['A turn away from social reform toward private piety alone', 'The revivals fueled, not blunted, reform movements like temperance and abolition.', 'They energized reform, not retreat.'],
      ['Government-led reforms imposed by the federal government', 'Antebellum reform was largely voluntarist and church-driven, not federal.', 'Reform was bottom-up.'],
      ['Strict deference to colonial-era religious establishments', 'The Awakening empowered evangelical preachers outside established churches.', 'It bypassed establishments.'],
    ],
    lesson: 'Revivalists like Charles Finney preached that conversion could perfect both individuals and society, energizing temperance, abolition, women\'s rights, prison reform, and utopian communities.',
  },
  {
    id: 4400923,
    chapter: 'Period 4: 1800-1848',
    title: 'Seneca Falls stimulus',
    prompt: 'The 1848 Declaration of Sentiments asserts: "We hold these truths to be self-evident: that all men and women are created equal." This phrasing most directly reflects a strategy of:',
    correct: 'Adapting the Declaration of Independence to argue for women\'s political and civil rights',
    wrong: [
      ['Rejecting the Declaration of Independence as outdated', 'The framers of Seneca Falls borrow the Declaration\'s authority, not reject it.', 'They lean on, not abandon, the Declaration.'],
      ['Endorsing the Three-Fifths Compromise', 'The Declaration of Sentiments has nothing to do with the Three-Fifths Compromise and predates the Civil War.', 'Wrong topic.'],
      ['Calling for women to withdraw from public life entirely', 'The convention argued for women\'s expanded public role, including suffrage.', 'It pushed outward, not inward.'],
    ],
    lesson: 'Elizabeth Cady Stanton modeled the Declaration of Sentiments on Jefferson\'s text to claim founding ideals for women, making suffrage a central though contested demand.',
  },

  // -----------------------------------------------------------------------
  // Period 5: 1844-1877 - Manifest Destiny to Reconstruction
  // -----------------------------------------------------------------------
  {
    id: 4400924,
    chapter: 'Period 5: 1844-1877',
    title: 'Wilmot Proviso',
    prompt: 'The 1846 Wilmot Proviso, though never enacted, mattered because it:',
    correct: 'Reopened the question of slavery in territories acquired from Mexico and inflamed sectional politics',
    wrong: [
      ['Abolished slavery throughout the United States', 'The Proviso would only have barred slavery in territory acquired from Mexico, and it never passed.', 'It targeted territories, not the states.'],
      ['Ended the Mexican-American War immediately', 'The war ended with the Treaty of Guadalupe Hidalgo in 1848, not the Proviso.', 'It was a domestic political maneuver.'],
      ['Required all new states to permit slavery', 'It would have done the opposite: barred slavery from Mexican Cession territory.', 'Reverse the direction.'],
    ],
    lesson: 'The Proviso failed but forced both major parties to take a position on slavery in the territories, paving the way for the Free Soil Party and later Republican coalitions.',
  },
  {
    id: 4400925,
    chapter: 'Period 5: 1844-1877',
    title: 'Kansas-Nebraska Act',
    prompt: 'The Kansas-Nebraska Act of 1854 destabilized the political system primarily because it:',
    correct: 'Repealed the Missouri Compromise line and replaced it with popular sovereignty in those territories',
    wrong: [
      ['Banned slavery north of the Mason-Dixon line', 'The Act allowed, not banned, slavery in territories where it had been excluded under the Missouri Compromise.', 'It opened, not closed, those lands.'],
      ['Admitted California as a free state', 'California was admitted in 1850 as part of the Compromise of 1850, not the Kansas-Nebraska Act.', 'Wrong measure.'],
      ['Required slaveholders to free enslaved people who escaped to the North', 'The Fugitive Slave Act of 1850 did the opposite by forcing return of escapees.', 'Wrong direction and wrong act.'],
    ],
    lesson: 'Stephen Douglas\'s Act detonated the Missouri Compromise, produced Bleeding Kansas, helped birth the Republican Party, and accelerated the sectional crisis.',
  },
  {
    id: 4400926,
    chapter: 'Period 5: 1844-1877',
    title: 'Dred Scott decision',
    prompt: 'In Dred Scott v. Sandford (1857), the Supreme Court held that:',
    correct: 'African Americans were not citizens and Congress could not prohibit slavery in federal territories',
    wrong: [
      ['Congress had full power to ban slavery anywhere in the United States', 'The decision ruled the opposite: Congress could not ban slavery in territories.', 'Reverse the holding.'],
      ['The Missouri Compromise was constitutional and binding', 'The Court invalidated the Missouri Compromise restriction on slavery in territories.', 'It struck the Compromise down.'],
      ['Plessy v. Ferguson was overturned', 'Plessy came in 1896, decades after Dred Scott.', 'Wrong timeline.'],
    ],
    lesson: 'Chief Justice Taney\'s opinion denied Black citizenship, struck down the Missouri Compromise, and pushed Northern opinion toward Republican resistance and eventually war.',
  },
  {
    id: 4400927,
    chapter: 'Period 5: 1844-1877',
    title: 'Emancipation Proclamation timing',
    prompt: 'Lincoln issued the Emancipation Proclamation after the Battle of Antietam (September 1862) primarily because:',
    correct: 'A Union battlefield result let him present emancipation as a measure of strength, not desperation',
    wrong: [
      ['He had already secured Confederate surrender', 'Confederate surrender came in 1865, more than two years after the Proclamation.', 'The war was far from over.'],
      ['The Confederacy had abolished slavery on its own initiative', 'The Confederacy was founded to preserve slavery and did not abolish it.', 'That never happened.'],
      ['Congress required him to do so on a fixed date', 'The Proclamation was an executive war measure, not a congressional command.', 'It was a war power, not statute.'],
    ],
    lesson: 'Lincoln framed emancipation as a military necessity grounded in his war powers; he timed it after Antietam to claim strategic momentum and to discourage European recognition of the Confederacy.',
  },
  {
    id: 4400928,
    chapter: 'Period 5: 1844-1877',
    title: 'Emancipation Proclamation stimulus',
    prompt: 'The Emancipation Proclamation (Jan. 1, 1863) declares enslaved persons free "within any State or designated part of a State, the people whereof shall then be in rebellion against the United States." This wording most directly shows that the Proclamation:',
    correct: 'Applied only to areas under Confederate control and rested on Lincoln\'s war powers',
    wrong: [
      ['Freed every enslaved person in the United States immediately', 'It explicitly applied only to areas in rebellion, exempting loyal border states and Union-held territory.', 'Re-read "in rebellion."'],
      ['Required a constitutional amendment to take effect', 'Lincoln issued it as a wartime executive act; the Thirteenth Amendment came later in 1865.', 'It was executive, not constitutional.'],
      ['Granted full citizenship and voting rights to freed people', 'Citizenship came with the Fourteenth Amendment (1868) and voting rights with the Fifteenth (1870).', 'Citizenship came later.'],
    ],
    lesson: 'The Proclamation was a calibrated war measure: it freed enslaved people in Confederate territory, recruited Black soldiers, and pointed toward the Thirteenth Amendment without yet establishing full citizenship.',
  },
  {
    id: 4400929,
    chapter: 'Period 5: 1844-1877',
    title: 'Reconstruction amendments',
    prompt: 'Which sequence correctly matches the Reconstruction amendments with their purpose?',
    correct: '13th abolished slavery; 14th defined citizenship and equal protection; 15th protected voting rights regardless of race',
    wrong: [
      ['13th granted voting rights; 14th abolished slavery; 15th defined citizenship', 'The order is wrong: the 13th abolished slavery, not granted voting rights.', 'Reorder by topic.'],
      ['All three amendments only granted economic rights, not political rights', 'The 14th and 15th amendments addressed citizenship and voting, not only economic rights.', 'Political rights were central.'],
      ['All three amendments were repealed by 1877', 'None were repealed; enforcement weakened, but the amendments remained in force.', 'They were undermined, not repealed.'],
    ],
    lesson: 'Although the Reconstruction amendments remained in the Constitution, white redemption governments, Black Codes, the end of federal troop occupation in 1877, and later Jim Crow undercut their enforcement for decades.',
  },

  // -----------------------------------------------------------------------
  // Period 6: 1865-1898 - Gilded Age
  // -----------------------------------------------------------------------
  {
    id: 4400930,
    chapter: 'Period 6: 1865-1898',
    title: 'Plessy v Ferguson',
    prompt: 'Plessy v. Ferguson (1896) is best known in AP US History for:',
    correct: 'Upholding state-imposed racial segregation under the doctrine of "separate but equal"',
    wrong: [
      ['Striking down Jim Crow laws across the South', 'Plessy validated, not struck down, Jim Crow segregation.', 'Reverse the holding.'],
      ['Establishing that all federal laws must apply equally to states', 'Plessy concerned segregation under the Fourteenth Amendment, not federal supremacy.', 'Wrong principle.'],
      ['Overturning Dred Scott on Black citizenship', 'Dred Scott was effectively overruled by the Thirteenth and Fourteenth Amendments, not by Plessy.', 'Plessy did not undo Dred Scott.'],
    ],
    lesson: 'Plessy entrenched legal segregation in transportation, schools, and public accommodations until Brown v. Board of Education overruled the doctrine in 1954.',
  },
  {
    id: 4400931,
    chapter: 'Period 6: 1865-1898',
    title: 'Industrial trusts',
    prompt: 'The Sherman Antitrust Act (1890) was designed to:',
    correct: 'Prohibit combinations in restraint of trade and concentrations of corporate power that suppressed competition',
    wrong: [
      ['Establish federal income taxation', 'Federal income tax came with the Sixteenth Amendment in 1913.', 'Wrong policy area.'],
      ['Guarantee a minimum wage to industrial workers', 'A federal minimum wage came with the Fair Labor Standards Act in 1938.', 'Far later and different statute.'],
      ['Authorize the federal government to nationalize railroads', 'Sherman regulated competition; it did not nationalize industries.', 'Antitrust, not nationalization.'],
    ],
    lesson: 'The Sherman Act became the legal foundation for later Progressive trust-busting under Theodore Roosevelt and the Department of Justice\'s antimonopoly suits.',
  },
  {
    id: 4400932,
    chapter: 'Period 6: 1865-1898',
    title: 'New Immigration',
    prompt: 'The "new immigration" of roughly 1880-1924 differed from earlier waves chiefly because it:',
    correct: 'Came predominantly from southern and eastern Europe and concentrated in industrial cities',
    wrong: [
      ['Came mainly from England, Ireland, and Germany, like earlier waves', 'Those groups dominated earlier waves; later immigration shifted toward Italy, Poland, and the Russian Empire.', 'Source regions shifted.'],
      ['Settled overwhelmingly on western farmland', 'New immigrants concentrated in eastern and midwestern cities, not on farms.', 'They were urban, not rural.'],
      ['Was actively recruited and welcomed by the federal government', 'Federal policy moved toward restriction, including the Chinese Exclusion Act (1882) and later quota laws.', 'Restriction grew, not welcome.'],
    ],
    lesson: 'New immigration fed factory labor, reshaped urban politics, and provoked nativist backlash that culminated in the National Origins Acts of the 1920s.',
  },
  {
    id: 4400933,
    chapter: 'Period 6: 1865-1898',
    title: 'Populism',
    prompt: 'The Populist (People\'s) Party of the 1890s most centrally demanded:',
    correct: 'A flexible currency (including free silver), government regulation of railroads, and protections for farmers and workers',
    wrong: [
      ['A return to the gold standard and tight money', 'Populists wanted to expand the money supply, especially through silver coinage.', 'Reverse the monetary stance.'],
      ['The elimination of all federal regulation of business', 'Populists wanted more, not less, federal regulation of railroads and banks.', 'They demanded more regulation.'],
      ['A return to slavery and pre-Civil War economic patterns', 'Populism arose decades after slavery and rejected that order; it focused on farmer and worker grievances.', 'Wrong era and direction.'],
    ],
    lesson: 'The Omaha Platform of 1892 advanced a producer-class program; Bryan absorbed parts of it in 1896, after which the People\'s Party faded but its ideas shaped Progressivism.',
  },
  {
    id: 4400934,
    chapter: 'Period 6: 1865-1898',
    title: 'Urbanization',
    prompt: 'Late-nineteenth-century urbanization in the United States is most associated with which combination of features?',
    correct: 'Tenement housing, mass transit, machine politics, and industrial wage labor',
    wrong: [
      ['Declining city populations and a return to rural life', 'Urban populations grew rapidly in this period.', 'Cities grew, not shrank.'],
      ['Widespread suburban home ownership and automobile commuting', 'Mass suburbanization with cars came after World War II, not in the 1880s.', 'Wrong era for car suburbs.'],
      ['Federal public housing programs for the urban poor', 'Federal public housing emerged in the 1930s under the New Deal.', 'Too early for federal housing.'],
    ],
    lesson: 'Industrial cities grew through immigration and internal migration, producing dense tenement districts, streetcar systems, ward-based political machines, and reform challenges from settlement houses and muckrakers.',
  },

  // -----------------------------------------------------------------------
  // Period 7: 1890-1945 - Progressivism through WWII
  // -----------------------------------------------------------------------
  {
    id: 4400935,
    chapter: 'Period 7: 1890-1945',
    title: 'Square Deal vs New Freedom',
    prompt: 'How did Theodore Roosevelt\'s Square Deal differ from Woodrow Wilson\'s New Freedom?',
    correct: 'Roosevelt accepted big business under strong federal regulation; Wilson aimed to restore competition by breaking up trusts',
    wrong: [
      ['Roosevelt opposed all federal regulation; Wilson supported it', 'Roosevelt expanded federal regulation through trust-busting and the Hepburn Act.', 'Both supported federal action.'],
      ['Both leaders opposed any federal role in the economy', 'Both expanded federal economic involvement, just in different ways.', 'Both intervened, not retreated.'],
      ['Wilson supported imperial expansion; Roosevelt opposed it', 'Roosevelt was a vigorous expansionist (Panama Canal, Roosevelt Corollary); their domestic philosophies are the contrast here.', 'Look at trusts and regulation.'],
    ],
    lesson: 'Roosevelt embraced "good" trusts regulated by federal power; Wilson worried that bigness itself threatened liberty and pursued the Clayton Act, FTC, and Federal Reserve to restore competition.',
  },
  {
    id: 4400936,
    chapter: 'Period 7: 1890-1945',
    title: 'Wilson 14 Points stimulus',
    prompt: 'In his 1918 Fourteen Points, Wilson called for "open covenants of peace, openly arrived at" and "a general association of nations." Which postwar goal did this language most directly support?',
    correct: 'Replacing secret-treaty diplomacy with collective security under the League of Nations',
    wrong: [
      ['Maintaining the secret-treaty system that had triggered World War I', 'Wilson explicitly rejected secret diplomacy.', 'He sought the opposite.'],
      ['Imposing harsh punitive reparations on Germany alone', 'Wilson resisted purely punitive peace terms; the harsher Treaty of Versailles diverged from his plan.', 'Reparations came from European allies, not Wilson\'s plan.'],
      ['Withdrawing the United States from all international institutions', 'Wilson sought to build international institutions; isolationism dominated Senate opposition, not his proposal.', 'He pushed in, not out.'],
    ],
    lesson: 'Wilson built the Fourteen Points around free trade, self-determination, and collective security, but the Senate, led by Henry Cabot Lodge, refused to ratify the Treaty of Versailles and the League covenant.',
  },
  {
    id: 4400937,
    chapter: 'Period 7: 1890-1945',
    title: 'Treaty of Versailles fails',
    prompt: 'The U.S. Senate rejected the Treaty of Versailles primarily because:',
    correct: 'Opponents feared that Article X of the League covenant would bind the United States to foreign wars without congressional consent',
    wrong: [
      ['It abolished the U.S. Army', 'The treaty did not abolish the U.S. Army; debate centered on collective security obligations.', 'Wrong content.'],
      ['It required the United States to grant independence to the Philippines', 'Philippine independence came in 1946, after WWII, through separate U.S. legislation.', 'Different decolonization timeline.'],
      ['It returned Hawaii to native rule', 'The treaty had no bearing on Hawaii; Hawaii had been annexed in 1898.', 'Unrelated to Versailles.'],
    ],
    lesson: 'The Lodge reservations focused on protecting congressional war powers; Wilson refused compromise, the Senate rejected ratification, and the United States never joined the League.',
  },
  {
    id: 4400938,
    chapter: 'Period 7: 1890-1945',
    title: 'Nineteenth Amendment',
    prompt: 'The Nineteenth Amendment (1920) accomplished which of the following?',
    correct: 'Prohibited the federal and state governments from denying the right to vote on the basis of sex',
    wrong: [
      ['Granted suffrage to all U.S. residents regardless of race or sex', 'Race-based disfranchisement (poll taxes, literacy tests) continued for decades; the 19th addressed sex specifically.', 'Race-based restrictions persisted.'],
      ['Granted citizenship to immigrant women', 'The 19th Amendment concerned voting, not naturalization.', 'Wrong policy area.'],
      ['Repealed Prohibition', 'Prohibition came in with the 18th Amendment and was repealed by the 21st in 1933.', 'Different amendments.'],
    ],
    lesson: 'The 19th capped a long suffrage struggle from Seneca Falls through Carrie Chapman Catt and Alice Paul, but it did not erase race-based barriers that the Voting Rights Act of 1965 later attacked.',
  },
  {
    id: 4400939,
    chapter: 'Period 7: 1890-1945',
    title: 'New Deal agencies',
    prompt: 'Which grouping of New Deal programs best illustrates the "three Rs" of Relief, Recovery, and Reform?',
    correct: 'CCC and FERA for relief, NRA and AAA for recovery, SEC and Social Security for reform',
    wrong: [
      ['Lend-Lease, Marshall Plan, and NATO', 'These are foreign-policy initiatives from WWII and the early Cold War, not New Deal domestic programs.', 'Wrong era and topic.'],
      ['The Federal Reserve Act, Clayton Antitrust, and Sherman Act', 'These predate the New Deal and belong to Progressive-Era policy.', 'They are pre-New Deal.'],
      ['Medicare, Medicaid, and the Civil Rights Act', 'These belong to the Great Society of the 1960s.', 'Wrong decade.'],
    ],
    lesson: 'AP students distinguish New Deal phases by goal: short-term relief (CCC, FERA, WPA), industrial and agricultural recovery (NRA, AAA, TVA), and structural reform (SEC, Social Security, Wagner Act).',
  },
  {
    id: 4400940,
    chapter: 'Period 7: 1890-1945',
    title: 'FDR fireside chat stimulus',
    prompt: 'In a 1933 fireside chat Roosevelt told listeners: "There is an element in the readjustment of our financial system more important than currency, more important than gold, and that is the confidence of the people themselves." This passage most directly reveals Roosevelt\'s belief that:',
    correct: 'Restoring public confidence was essential to ending the banking crisis and stabilizing the economy',
    wrong: [
      ['The gold standard was the only legitimate basis for U.S. currency', 'The administration took the United States off the gold standard in 1933; FDR explicitly downplays gold here.', 'He minimizes gold, not elevates it.'],
      ['Federal action was unnecessary because markets would self-correct', 'Roosevelt pushed expansive federal action; the chat itself was part of that intervention.', 'He was actively intervening.'],
      ['The Federal Reserve should be abolished', 'FDR worked through, not against, the Federal Reserve and federal banking authority.', 'He used, not destroyed, it.'],
    ],
    lesson: 'The fireside chats made monetary and financial reform legible to ordinary citizens and helped end bank runs after the Emergency Banking Act and bank holiday.',
  },
  {
    id: 4400941,
    chapter: 'Period 7: 1890-1945',
    title: 'Court-packing',
    prompt: 'Roosevelt\'s 1937 court-packing plan is best understood as:',
    correct: 'A proposal to add justices to the Supreme Court after the Court struck down major New Deal laws',
    wrong: [
      ['A successful constitutional amendment that expanded the Court', 'The proposal failed in Congress and no amendment passed; the Court has had nine justices since 1869.', 'It failed politically.'],
      ['A plan to abolish judicial review entirely', 'FDR sought to change the Court\'s composition, not eliminate its review power.', 'He worked within, not against, judicial power.'],
      ['A bipartisan plan supported overwhelmingly by Congress', 'Both parties pushed back; even Democratic leaders opposed the plan.', 'It was politically toxic.'],
    ],
    lesson: 'Court-packing failed in Congress but coincided with a "switch in time" as the Court began upholding New Deal laws like the Wagner Act and Social Security.',
  },

  // -----------------------------------------------------------------------
  // Period 8: 1945-1980 - Cold War, civil rights, Vietnam
  // -----------------------------------------------------------------------
  {
    id: 4400942,
    chapter: 'Period 8: 1945-1980',
    title: 'Containment trio',
    prompt: 'Which sequence of policies best represents early U.S. containment of Soviet power in Europe (1947-1949)?',
    correct: 'Truman Doctrine, Marshall Plan, and the formation of NATO',
    wrong: [
      ['Lend-Lease, the Atlantic Charter, and the Tehran Conference', 'These are wartime measures from 1941-1943, before containment doctrine.', 'Wrong era.'],
      ['The Open Door Notes, the Roosevelt Corollary, and Dollar Diplomacy', 'These are turn-of-the-century U.S. foreign policy doctrines, not Cold War containment.', 'Wrong era and region.'],
      ['SALT I, the Helsinki Accords, and detente', 'These belong to 1970s detente, not the late 1940s.', 'Decades too late.'],
    ],
    lesson: 'George Kennan\'s "long telegram" framed containment; Truman aided Greece and Turkey, the Marshall Plan rebuilt Western Europe, and the 1949 North Atlantic Treaty created NATO as a mutual defense alliance.',
  },
  {
    id: 4400943,
    chapter: 'Period 8: 1945-1980',
    title: 'Brown v Board',
    prompt: 'Brown v. Board of Education (1954) is most significant because it:',
    correct: 'Overruled the "separate but equal" doctrine of Plessy in public education',
    wrong: [
      ['Established affirmative action programs in college admissions', 'Brown addressed school segregation; affirmative action emerged later through executive orders and cases like Bakke.', 'Different policy and era.'],
      ['Banned racial discrimination in private restaurants and hotels', 'That came with the Civil Rights Act of 1964 and Heart of Atlanta Motel v. United States.', 'Wrong measure for public accommodations.'],
      ['Required immediate desegregation of all federal employment', 'Brown concerned schools; federal employment desegregation began earlier under Truman\'s executive orders.', 'Wrong scope.'],
    ],
    lesson: 'Chief Justice Warren\'s unanimous opinion held that "separate educational facilities are inherently unequal," but Brown II\'s "all deliberate speed" remedy permitted years of resistance, requiring federal enforcement.',
  },
  {
    id: 4400944,
    chapter: 'Period 8: 1945-1980',
    title: 'MLK Birmingham stimulus',
    prompt: 'In his 1963 "Letter from Birmingham Jail," Martin Luther King Jr. writes: "One has not only a legal but a moral responsibility to obey just laws. Conversely, one has a moral responsibility to disobey unjust laws." This passage most directly defends:',
    correct: 'Nonviolent civil disobedience grounded in a higher moral standard',
    wrong: [
      ['Armed revolution against the federal government', 'King is defending nonviolent disobedience, not armed revolt.', 'Stay with the nonviolent argument.'],
      ['Strict legal positivism that obligates obedience to all laws', 'King distinguishes just from unjust laws and refuses uniform obedience.', 'He rejects strict positivism.'],
      ['Withdrawal from political life into private religious practice', 'King is defending public, organized protest, not retreat.', 'He pushes engagement, not withdrawal.'],
    ],
    lesson: 'King\'s letter answers white clergy who urged patience by linking civil-rights disobedience to a long Western tradition (Augustine, Aquinas, Thoreau, Niebuhr) of resisting unjust law.',
  },
  {
    id: 4400945,
    chapter: 'Period 8: 1945-1980',
    title: 'Tonkin Gulf Resolution',
    prompt: 'The 1964 Gulf of Tonkin Resolution is significant in AP US History because it:',
    correct: 'Authorized the president to use military force in Vietnam without a formal declaration of war',
    wrong: [
      ['Formally declared war on North Vietnam', 'Congress never formally declared war; the Resolution gave broad authority short of a declaration.', 'Authorization, not declaration.'],
      ['Established the Marshall Plan for Southeast Asia', 'The Marshall Plan was a 1948 European reconstruction program.', 'Wrong region and era.'],
      ['Mandated immediate withdrawal of U.S. forces from Vietnam', 'It expanded, not ended, U.S. involvement.', 'It opened the door wider.'],
    ],
    lesson: 'The Resolution gave Johnson sweeping authority for escalation and later became a touchstone for the War Powers Resolution of 1973, which sought to recover congressional war-making authority.',
  },
  {
    id: 4400946,
    chapter: 'Period 8: 1945-1980',
    title: 'Watergate to resignation',
    prompt: 'The Watergate scandal led most directly to which constitutional outcome in 1974?',
    correct: 'Richard Nixon resigned the presidency under threat of impeachment after United States v. Nixon ordered release of the tapes',
    wrong: [
      ['Congress passed a constitutional amendment abolishing the presidency', 'No such amendment was proposed or passed.', 'The office continued.'],
      ['The Supreme Court invalidated all executive privilege claims permanently', 'United States v. Nixon recognized a limited executive privilege but rejected an absolute claim in this case.', 'Privilege survives but is limited.'],
      ['Spiro Agnew was sworn in as president after Nixon\'s resignation', 'Agnew had already resigned in 1973 over a separate scandal; Gerald Ford succeeded Nixon.', 'Ford, not Agnew, succeeded.'],
    ],
    lesson: 'United States v. Nixon (1974) rejected absolute executive privilege over the tapes; facing impeachment in the House and conviction in the Senate, Nixon resigned in August 1974 and Ford pardoned him a month later.',
  },
  {
    id: 4400947,
    chapter: 'Period 8: 1945-1980',
    title: 'Stagflation',
    prompt: 'The 1970s "stagflation" challenged earlier economic assumptions because it featured:',
    correct: 'High inflation and high unemployment occurring together, contrary to Phillips-curve expectations',
    wrong: [
      ['Falling prices and falling unemployment simultaneously', 'That would be the opposite of stagflation; the 1970s saw rising prices and high unemployment.', 'Reverse the description.'],
      ['Stable prices and rapid growth at full employment', 'The 1970s were marked by slowdown, not boom.', 'Wrong economic conditions.'],
      ['Deflation comparable to the early 1930s', 'The Great Depression saw deflation; the 1970s saw the opposite.', 'Different problem entirely.'],
    ],
    lesson: 'Oil shocks, wage-price spirals, and slowing productivity produced stagflation, undermining Keynesian confidence and helping prepare the political ground for the Reagan revolution.',
  },

  // -----------------------------------------------------------------------
  // Period 9: 1980-Present - Reagan to 9/11 and after
  // -----------------------------------------------------------------------
  {
    id: 4400948,
    chapter: 'Period 9: 1980-present',
    title: 'Reagan revolution',
    prompt: 'The "Reagan revolution" of the 1980s is best characterized by which combination of policies?',
    correct: 'Major tax cuts, defense buildup, deregulation, and a more confrontational stance toward the Soviet Union',
    wrong: [
      ['Tax increases, defense cuts, expanded regulation, and detente with the USSR', 'Each item is the opposite of Reagan-era policy.', 'Reverse every component.'],
      ['Nationalization of industry and creation of a federal jobs guarantee', 'The Reagan agenda emphasized markets and deregulation, not nationalization.', 'Wrong direction.'],
      ['Withdrawal from NATO and rejection of arms negotiations entirely', 'Reagan kept NATO and negotiated arms reductions late in his term (INF Treaty, 1987).', 'He negotiated, not withdrew.'],
    ],
    lesson: 'Reagan\'s combination of supply-side tax cuts, military spending, deregulation, and Cold War confrontation reshaped politics through the 1980s; the INF Treaty and Gorbachev\'s reforms paved the way for the Soviet collapse in 1991.',
  },
  {
    id: 4400949,
    chapter: 'Period 9: 1980-present',
    title: '9/11 and Patriot Act',
    prompt: 'The Patriot Act, passed in October 2001, was most directly a response to:',
    correct: 'The September 11, 2001 terrorist attacks and the perceived need to expand surveillance and law-enforcement powers',
    wrong: [
      ['The 1991 collapse of the Soviet Union', 'The Soviet collapse predated the Patriot Act by a decade and a different conflict.', 'Wrong decade and crisis.'],
      ['The 2008 global financial crisis', 'The 2008 crisis postdated the Patriot Act by seven years.', 'Wrong sequence.'],
      ['The Vietnam War', 'Vietnam ended in 1975; the Patriot Act was a 2001 measure tied to terrorism.', 'Different war and era.'],
    ],
    lesson: 'After 9/11, Congress passed the Patriot Act and authorized military force in Afghanistan; the 2003 invasion of Iraq, founded on disputed WMD claims, followed and reshaped U.S. foreign policy in the 2000s.',
  },
])
