import { makeQuestionBank } from './base'

export const highApWorldHistoryQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Unit 1: The Global Tapestry, c. 1200-1450
  // -----------------------------------------------------------------------
  {
    id: 4400600,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'Song China bureaucracy',
    prompt: 'The Song dynasty (960-1279) is best known for expanding which institution as a tool of imperial administration?',
    correct: 'A merit-based civil service examination grounded in Confucian texts',
    wrong: [
      ['A hereditary military caste drawn from the steppe nobility', 'Song China deliberately reduced the political role of hereditary military families after the warlordism of the late Tang and Five Dynasties period.', 'Think examinations, not bloodlines.'],
      ['A theocratic council of Buddhist monks', 'Buddhism was influential in Song society, but the state apparatus was Confucian and secular in its formal structure.', 'The Song civil service was Confucian, not monastic.'],
      ['A feudal system of independent landed lords', 'The Song state centralized authority through a bureaucratic apparatus rather than devolving power to feudal vassals.', 'Compare with medieval Europe, not Song China.'],
    ],
    lesson: 'The Song expanded the imperial examination system, broadening (in theory) access to government office and entrenching Confucian scholar-officials as the administrative elite.',
  },
  {
    id: 4400601,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'Dar al-Islam continuity',
    prompt: 'After the collapse of the Abbasid Caliphate in 1258, the Islamic world remained culturally unified largely because:',
    correct: 'Shared religion, Arabic as a scholarly language, and Sharia legal traditions persisted across successor states',
    wrong: [
      ['A single caliph continued to govern all Muslim lands from Cairo with real political power', 'The Mamluk-sponsored Abbasid caliph in Cairo was largely symbolic; political authority fragmented into sultanates and emirates.', 'Cultural unity is not the same as political unity.'],
      ['The Mongols converted to Islam and reunified the caliphate by force', 'The Ilkhanate and Golden Horde eventually adopted Islam, but they did not restore a unified caliphal state.', 'Look for cultural, not political, continuity.'],
      ['Latin replaced Arabic as the common language of Islamic scholarship', 'Arabic remained the prestige language of religion, law, and science across Dar al-Islam.', 'Arabic, not Latin, was the lingua franca of Islamic learning.'],
    ],
    lesson: 'Dar al-Islam in 1200-1450 was held together by shared faith, law, language of scholarship, and trade networks rather than by one political center.',
  },
  {
    id: 4400602,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'Mali and Mansa Musa',
    prompt: 'Mansa Musa\'s 1324-1325 hajj to Mecca is most often cited by historians as evidence of:',
    correct: 'The wealth of Mali derived from West African gold and its integration into Afro-Eurasian trade and the Muslim world',
    wrong: [
      ['Mali\'s military conquest of Egypt and the Hijaz', 'Mansa Musa traveled as a pilgrim, not a conqueror; he passed through Mamluk Egypt as a wealthy guest.', 'It was a pilgrimage, not an invasion.'],
      ['The collapse of trans-Saharan trade in the fourteenth century', 'The hajj demonstrated the vitality, not the collapse, of trans-Saharan exchange.', 'Gold flowed north, not the other way.'],
      ['The triumph of indigenous African religion over Islam in the Sahel', 'Mansa Musa was himself a Muslim ruler who patronized Islamic scholarship at Timbuktu.', 'Mali\'s elite culture was Islamic.'],
    ],
    lesson: 'Mali under Mansa Musa demonstrated how trans-Saharan gold, Islamic learning, and ruler patronage tied Sub-Saharan Africa into wider Afro-Eurasian networks.',
  },
  {
    id: 4400603,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'Aztec and Inca comparison',
    prompt: 'A key difference between the Aztec (Mexica) and Inca state systems before 1492 was that the Inca, more than the Aztec:',
    correct: 'Used the mit\'a labor obligation and a road network to integrate a vast Andean territory',
    wrong: [
      ['Conducted no warfare and relied entirely on voluntary tribute', 'The Inca conquered and incorporated many Andean peoples; expansion involved coercion as well as negotiation.', 'Both empires used force; the difference is in administration.'],
      ['Built large urban capitals while the Aztec did not', 'Tenochtitlan was one of the largest cities in the world circa 1500; both societies built major capitals.', 'Tenochtitlan was huge; rethink.'],
      ['Relied on chattel slavery rather than labor obligations', 'Andean labor was organized largely through mit\'a rotational service rather than chattel slavery.', 'Mit\'a, not chattel slavery, anchored Inca labor.'],
    ],
    lesson: 'The Inca state integrated rugged Andean terrain through mit\'a labor drafts, terraced agriculture, quipu accounting, and an extensive road system.',
  },
  {
    id: 4400604,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'European feudalism',
    prompt: 'In Western Europe around 1300, the manorial system most directly:',
    correct: 'Tied peasants to land they worked in exchange for protection, with obligations owed to a local lord',
    wrong: [
      ['Created a wage-labor market for free peasants in cities', 'Wage labor existed in towns, but the manor was a rural unit of obligation, not a free labor market.', 'Manors were rural and customary, not urban wage markets.'],
      ['Abolished serfdom and replaced it with chattel slavery', 'Serfdom persisted across much of Europe; it was not replaced by chattel slavery before 1450.', 'Serfdom was the dominant rural relation.'],
      ['Granted peasants ownership of the land they cultivated', 'Peasants generally held use-rights, not freehold ownership; lords retained legal claim.', 'Use-rights and obligations, not ownership.'],
    ],
    lesson: 'The medieval manor combined customary obligations, agricultural self-sufficiency, and local lordship; it began to weaken after the Black Death in the mid-fourteenth century.',
  },
  {
    id: 4400605,
    chapter: 'Unit 1: The Global Tapestry (c. 1200-1450)',
    title: 'Marco Polo stimulus',
    prompt: 'Marco Polo wrote of Hangzhou in the late thirteenth century: "There are in this city ten principal squares or market-places, besides innumerable others for the daily provision of the inhabitants... merchants from India and other foreign parts repair to this place." This passage is most useful as evidence for:',
    correct: 'The commercial vitality and urban scale of Song and Yuan China within Indian Ocean and overland networks',
    wrong: [
      ['The decline of Chinese cities after the Mongol conquest', 'Polo\'s description portrays a flourishing city under Mongol (Yuan) rule, not one in decline.', 'Read the passage; he describes vitality.'],
      ['The absence of foreign merchants in Yuan China', 'The passage explicitly mentions merchants from India and other foreign places trading at Hangzhou.', 'The text says the opposite.'],
      ['A purely agrarian Chinese economy with little urbanization', 'Polo describes ten major markets and a dense commercial city, the opposite of a purely agrarian image.', 'Note "ten principal squares" and merchants.'],
    ],
    lesson: 'European observers like Marco Polo, however embellished, recorded the commercial scale of Yuan-era Chinese cities and their integration into longer Eurasian and Indian Ocean trade.',
  },

  // -----------------------------------------------------------------------
  // Unit 2: Networks of Exchange, c. 1200-1450
  // -----------------------------------------------------------------------
  {
    id: 4400606,
    chapter: 'Unit 2: Networks of Exchange (c. 1200-1450)',
    title: 'Pax Mongolica',
    prompt: 'Historians use the term Pax Mongolica primarily to describe:',
    correct: 'Relative security across overland Eurasian trade routes under unified Mongol authority in the thirteenth and fourteenth centuries',
    wrong: [
      ['A formal treaty between the Mongols and Latin Christendom guaranteeing free trade', 'No such treaty existed; the term describes de facto conditions, not a signed agreement.', 'Pax Mongolica is a historians\' label, not a treaty.'],
      ['The conversion of the Mongol khans to Roman Catholicism', 'Most Mongol successor states adopted Islam or Tibetan Buddhism, not Catholicism.', 'Religion is not the basis of the term.'],
      ['A period of pacifist Mongol policy that ended conquest entirely', 'The Mongols continued military campaigns; "pax" refers to security on conquered routes, not pacifism.', 'Pax here means policed trade routes, not peace.'],
    ],
    lesson: 'Pax Mongolica describes how Mongol rule, however violent in its conquests, lowered transaction costs for caravans, missionaries, and diplomats moving across Eurasia.',
  },
  {
    id: 4400607,
    chapter: 'Unit 2: Networks of Exchange (c. 1200-1450)',
    title: 'Indian Ocean monsoon trade',
    prompt: 'Indian Ocean commerce between 1200 and 1450 differed from overland Silk Roads trade primarily because Indian Ocean trade:',
    correct: 'Moved larger and bulkier cargoes more cheaply by relying on predictable monsoon winds',
    wrong: [
      ['Was dominated entirely by European merchants before 1450', 'Arab, Persian, Gujarati, Swahili, and Chinese merchants dominated Indian Ocean trade well before sustained European entry.', 'Europeans entered the system in force after 1498.'],
      ['Carried only luxury goods and no staple commodities', 'It moved bulk goods like timber, grain, and ceramics in addition to luxuries such as spices and textiles.', 'Bulk and luxury both moved by sea.'],
      ['Avoided diasporic merchant communities at port cities', 'Diasporic communities of Arabs, Gujaratis, and others were central features of port cities from Kilwa to Malacca.', 'Diasporas were the rule, not the exception.'],
    ],
    lesson: 'Maritime trade on the Indian Ocean used monsoons, dhows, and junks to carry bulk goods at lower cost than caravan trade, anchored by cosmopolitan port cities.',
  },
  {
    id: 4400608,
    chapter: 'Unit 2: Networks of Exchange (c. 1200-1450)',
    title: 'Trans-Saharan trade',
    prompt: 'Which technological or organizational change best explains the expansion of trans-Saharan trade between the eighth and fourteenth centuries?',
    correct: 'Widespread adoption of the camel and camel saddle, combined with Muslim merchant networks',
    wrong: [
      ['Construction of paved Roman-style roads across the Sahara', 'No paved road network was built across the Sahara; caravan tracks remained the means of travel.', 'Caravans, not Roman roads.'],
      ['The introduction of steam-powered transport by 1300', 'Steam power postdates the Industrial Revolution and is irrelevant to medieval Saharan trade.', 'Wrong century by half a millennium.'],
      ['Diplomatic union of West African and North African kingdoms into one empire', 'Trans-Saharan trade thrived among separate states such as Ghana, Mali, Songhai, and the various North African dynasties.', 'It was networks, not one empire.'],
    ],
    lesson: 'Camels, saddles, and oasis-based caravanserai infrastructure, together with the spread of Islam among merchants, made the Sahara a connector rather than a barrier.',
  },
  {
    id: 4400609,
    chapter: 'Unit 2: Networks of Exchange (c. 1200-1450)',
    title: 'Black Death spread',
    prompt: 'The Black Death of the mid-fourteenth century is most often cited as evidence that:',
    correct: 'Intensified Eurasian connectivity carried pathogens as well as goods and ideas',
    wrong: [
      ['Trade collapsed across Eurasia in the thirteenth century and never recovered', 'Trade was vigorous enough on the eve of the plague to spread it; long-distance commerce continued after recovery.', 'The plague spread because trade was active.'],
      ['Disease only spread within isolated regions before 1500', 'The Black Death moved from Central Asia to the Mediterranean and beyond, showing the opposite.', 'It moved across continents.'],
      ['European medical knowledge was sufficient to contain epidemic disease', 'Medieval medicine could not identify or contain the plague; mortality reached roughly a third of European population in many areas.', 'Containment failed broadly.'],
    ],
    lesson: 'The Black Death used the same Mongol-era trade routes that moved silk and silver, killing perhaps a third of affected populations and reshaping labor and society.',
  },
  {
    id: 4400610,
    chapter: 'Unit 2: Networks of Exchange (c. 1200-1450)',
    title: 'Ibn Battuta stimulus',
    prompt: 'Ibn Battuta wrote of Kilwa in 1331: "It is one of the most beautiful and well-constructed towns in the world... the people are devout, chaste, and virtuous; they are Shafi\'i in rite." This passage best supports the claim that:',
    correct: 'Swahili Coast city-states had become commercial nodes and centers of Sunni Muslim culture by the fourteenth century',
    wrong: [
      ['East Africa was isolated from the wider Muslim world before 1500', 'Ibn Battuta\'s identification of Kilwa\'s Shafi\'i jurisprudence indicates direct integration with the Sunni Muslim world.', 'The passage indicates integration.'],
      ['Kilwa was a Christian outpost converted by Portuguese missionaries', 'Portuguese arrival on the Swahili Coast came in the late fifteenth century; in 1331 Kilwa was an established Muslim port.', 'Portugal arrived later.'],
      ['Swahili merchants rejected the Indian Ocean trading system', 'Kilwa\'s prosperity depended on Indian Ocean trade in gold, ivory, and other goods.', 'Kilwa was central to that system.'],
    ],
    lesson: 'Ibn Battuta\'s travel record is a major source for the religious and commercial life of fourteenth-century Dar al-Islam, including the Swahili Coast.',
  },

  // -----------------------------------------------------------------------
  // Unit 3: Land-Based Empires, c. 1450-1750
  // -----------------------------------------------------------------------
  {
    id: 4400611,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Gunpowder empires',
    prompt: 'Historians group the Ottoman, Safavid, and Mughal states as "gunpowder empires" because each:',
    correct: 'Used heavy artillery and firearms to consolidate large territorial states between roughly 1450 and 1700',
    wrong: [
      ['Industrialized small-arms production for mass civilian markets', 'Gunpowder empires used firearms militarily; mass industrial production of small arms emerged in the nineteenth century.', 'Wrong era for mass production.'],
      ['Outlawed cavalry warfare entirely in favor of musket infantry', 'Cavalry remained central, especially for the Ottomans, Safavids, and Mughals; gunpowder supplemented rather than replaced it.', 'Cavalry persisted.'],
      ['Refused to incorporate non-Muslim subjects into their administrations', 'All three integrated diverse religious populations, including Christians, Hindus, and others, into their governance.', 'They were religiously plural empires.'],
    ],
    lesson: 'Gunpowder weaponry, especially siege cannon, helped Ottoman, Safavid, and Mughal rulers conquer and hold large multiethnic territories.',
  },
  {
    id: 4400612,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Ottoman millet system',
    prompt: 'The Ottoman millet system was best described as:',
    correct: 'A framework giving recognized religious communities limited autonomy in personal and communal law',
    wrong: [
      ['A policy of forced conversion of all non-Muslim subjects to Islam', 'Forced conversion was not Ottoman general policy; non-Muslims paid the jizya tax and largely kept their faith.', 'It was not forced conversion.'],
      ['A purely military hierarchy of slave-soldiers', 'That describes elements of the devshirme and janissary system, not the millet.', 'Millet is religious-civil, not military.'],
      ['A modern parliamentary system based on equal citizenship', 'Equal citizenship arrived (in theory) only with the nineteenth-century Tanzimat reforms, not the classical millet system.', 'Citizenship reforms came later.'],
    ],
    lesson: 'The millet system let Greek Orthodox, Armenian, Jewish, and other communities run their own religious courts within Ottoman law, in exchange for taxes and political loyalty.',
  },
  {
    id: 4400613,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Akbar\'s policy',
    prompt: 'The Mughal emperor Akbar (r. 1556-1605) is most associated with which administrative innovation?',
    correct: 'Religious toleration measures including abolition of the jizya on non-Muslims and integration of Hindu elites',
    wrong: [
      ['Aggressive enforcement of strict Sunni orthodoxy across the empire', 'That describes the later policies of Aurangzeb, not Akbar; Akbar was famously eclectic.', 'You are thinking of Aurangzeb.'],
      ['The military conquest of southern China', 'Akbar expanded Mughal control across northern India, not into China.', 'India, not China.'],
      ['Establishment of a national parliament drawn from Hindu and Muslim representatives', 'Akbar centralized power around the throne with Hindu and Muslim officials, not through a parliament.', 'There was no parliament.'],
    ],
    lesson: 'Akbar managed religious diversity through toleration policies, Rajput marriage alliances, and the mansabdari ranking system for officers.',
  },
  {
    id: 4400614,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Zheng He and Ming retrenchment',
    prompt: 'Between 1405 and 1433 the Ming admiral Zheng He led seven major maritime expeditions across the Indian Ocean. The fact that the Ming court soon halted these voyages while Portugal pressed onward into the Indian Ocean is best explained by:',
    correct: 'Ming priorities favoring northern frontier defense and Confucian skepticism of merchant influence, while Portugal lacked an alternative path to Asian wealth',
    wrong: [
      ['Chinese inability to build ocean-going ships', 'Zheng He\'s ships were among the largest of their era; the issue was political will and budget, not technology.', 'It was politics, not technology.'],
      ['Portuguese military victories that destroyed the Ming navy', 'No such direct conflict occurred; the Ming chose to end the voyages on their own terms.', 'There was no Portuguese-Ming war.'],
      ['The collapse of Indian Ocean trade after 1433', 'Indian Ocean trade continued vigorously; the Ming simply stopped sponsoring imperial fleets.', 'The ocean stayed busy.'],
    ],
    lesson: 'Ming retrenchment from oceanic voyages reflected Confucian, fiscal, and strategic priorities, while Portugal had strong incentives to bypass Venetian and Muslim middlemen.',
  },
  {
    id: 4400615,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Russia under the Romanovs',
    prompt: 'Russia\'s expansion across Siberia between 1580 and 1700 was driven most directly by:',
    correct: 'The fur trade, Cossack expeditions, and a relatively weak indigenous opposition compared with Inner Asian khanates',
    wrong: [
      ['A formal partition treaty with the Qing dynasty granting Russia all of Siberia', 'The Treaty of Nerchinsk (1689) limited Russian expansion in the Amur region rather than granting all of Siberia.', 'Nerchinsk limited, not enabled, expansion.'],
      ['The discovery of large oil reserves in western Siberia', 'Oil-driven expansion is a much later phenomenon; in this period the prized commodity was sable fur.', 'Wrong commodity for the era.'],
      ['A papal grant of mission territory in northern Asia', 'Russia\'s Orthodox church did not receive territory by papal grant; the tsar acted on his own initiative.', 'No papal grant existed for Russia.'],
    ],
    lesson: 'Russian eastward expansion was fueled by furs, Cossack initiative, and serf-state organization, eventually meeting Qing China at the Amur.',
  },
  {
    id: 4400616,
    chapter: 'Unit 3: Land-Based Empires (c. 1450-1750)',
    title: 'Tokugawa Japan',
    prompt: 'The Tokugawa shogunate\'s policy of sakoku (closed country) after the 1630s most directly aimed to:',
    correct: 'Limit Christian missionary influence and foreign political interference while preserving controlled trade through Nagasaki',
    wrong: [
      ['End all contact with foreign states and merchants', 'Trade with the Dutch and Chinese continued at Nagasaki, and Korea and the Ryukyus through other channels; the closure was selective.', 'Trade was restricted, not eliminated.'],
      ['Open the country to European colonization', 'Sakoku had the opposite intent; it sought to prevent European political encroachment.', 'It was a closure, not an opening.'],
      ['Force adoption of Christianity as the state religion', 'The Tokugawa regime suppressed Christianity, not encouraged it.', 'Christianity was banned, not imposed.'],
    ],
    lesson: 'Sakoku channeled foreign contact through tightly managed ports such as Nagasaki, limiting Christianity and European influence while keeping access to Chinese and Dutch knowledge.',
  },

  // -----------------------------------------------------------------------
  // Unit 4: Transoceanic Interconnections, c. 1450-1750
  // -----------------------------------------------------------------------
  {
    id: 4400617,
    chapter: 'Unit 4: Transoceanic Interconnections (c. 1450-1750)',
    title: 'Columbian Exchange demographics',
    prompt: 'The demographic catastrophe in the Americas after 1492 is best explained by:',
    correct: 'Eurasian diseases such as smallpox encountering populations with no prior immunity',
    wrong: [
      ['Mass deportation of indigenous people to Europe', 'Some enslavement and forced movement occurred, but the bulk of population collapse came from disease, not transatlantic deportation.', 'Disease, not deportation, drove population collapse.'],
      ['A series of severe earthquakes across the Americas', 'There is no demographic case linking the catastrophe to seismic events; the collapse is overwhelmingly attributed to disease.', 'It was epidemiological, not seismic.'],
      ['Climate change caused by Atlantic shipping emissions', 'Industrial-era emissions are anachronistic to the sixteenth century; this is not a recognized cause of indigenous demographic collapse.', 'Wrong century for emissions.'],
    ],
    lesson: 'Smallpox, measles, and other pathogens carried during the Columbian Exchange likely killed a majority of indigenous Americans, restructuring labor and politics in the hemisphere.',
  },
  {
    id: 4400618,
    chapter: 'Unit 4: Transoceanic Interconnections (c. 1450-1750)',
    title: 'Joint-stock companies',
    prompt: 'Joint-stock companies such as the Dutch and English East India Companies were significant for global history primarily because they:',
    correct: 'Pooled private capital and spread risk across many investors, enabling sustained long-distance trade and quasi-state powers',
    wrong: [
      ['Were directly owned and operated by the king or queen', 'They were chartered by states but owned by private shareholders, which was the central innovation.', 'They were private under charter, not crown-owned.'],
      ['Limited their activities to a single port at home', 'They operated globally, with factories and forts across Asia, Africa, and the Americas.', 'They were global by design.'],
      ['Refused to use force or coercion against trading partners', 'Both VOC and EIC used military force, including treaty enforcement and conquest, to control trade.', 'They were armed corporations.'],
    ],
    lesson: 'Joint-stock companies combined private risk-sharing with state-granted monopolies and military rights, prefiguring modern multinational corporations.',
  },
  {
    id: 4400619,
    chapter: 'Unit 4: Transoceanic Interconnections (c. 1450-1750)',
    title: 'Triangular trade',
    prompt: 'In the classic schema of Atlantic triangular trade, which combination best describes the flows along the three legs?',
    correct: 'Manufactured goods from Europe to Africa, enslaved Africans to the Americas, and raw commodities back to Europe',
    wrong: [
      ['Tea from China to Europe, silver from Europe to Asia, and silk from Asia to the Americas', 'That describes the global silver trade and Pacific exchange, not the Atlantic triangular trade.', 'You are describing Pacific trade.'],
      ['Iron from West Africa to Europe, enslaved Europeans to Africa, and sugar from Asia to the Americas', 'The directions and goods are inverted; enslaved Africans moved to the Americas, not the reverse.', 'The flow ran the other way.'],
      ['Wheat from the Americas to Europe, rum from Africa to the Americas, and gold from Europe to Asia', 'The directions of rum and the absence of enslaved people in the schema make this incorrect.', 'Look for the slave-trade leg explicitly.'],
    ],
    lesson: 'The triangular trade simplifies a complex Atlantic system but captures the central horror: the Middle Passage moved roughly twelve million enslaved Africans to the Americas.',
  },
  {
    id: 4400620,
    chapter: 'Unit 4: Transoceanic Interconnections (c. 1450-1750)',
    title: 'Encomienda and labor',
    prompt: 'The Spanish encomienda system in the sixteenth-century Americas:',
    correct: 'Granted Spanish settlers the right to extract labor and tribute from indigenous communities in exchange for "protection" and Christianization',
    wrong: [
      ['Required colonists to pay indigenous workers wages comparable to those in Spain', 'Encomienda labor was coerced and unpaid in any modern sense; wage labor became more common only later.', 'It was coerced labor, not wage labor.'],
      ['Was the same as chattel slavery and could be inherited indefinitely', 'Encomienda was distinct from chattel slavery; the Crown tried (with mixed success) to restrict inheritance through the New Laws of 1542.', 'Compare with chattel slavery; the legal forms differ.'],
      ['Applied only to enslaved Africans, not indigenous people', 'Encomienda specifically targeted indigenous labor; African slavery operated under separate legal codes.', 'Encomienda was indigenous-focused.'],
    ],
    lesson: 'Encomienda combined labor coercion, tribute, and a fig leaf of religious instruction; reformist laws like the New Laws and critics like Las Casas tried but failed to dismantle it quickly.',
  },
  {
    id: 4400621,
    chapter: 'Unit 4: Transoceanic Interconnections (c. 1450-1750)',
    title: 'Silver and global trade',
    prompt: 'The flow of silver from Potosi and Mexican mines through Manila to Ming and Qing China between 1571 and 1700 most directly shows that:',
    correct: 'American silver supply met Chinese demand for monetary metal, creating a genuinely global economy',
    wrong: [
      ['China refused to participate in Pacific trade before 1800', 'Chinese demand for silver, codified in the Single Whip tax reforms, was a major driver of Pacific trade.', 'China pulled silver in, not pushed it away.'],
      ['Europe sent no silver to Asia because it had none to spare', 'Europe sent enormous amounts of silver to Asia precisely because Asian demand made the trade profitable.', 'Europe ran silver deficits with Asia.'],
      ['The Manila galleon trade collapsed after just a few years', 'The Manila galleon connected Acapulco and Manila for roughly 250 years.', 'It ran for centuries.'],
    ],
    lesson: 'Silver tied the Americas, Europe, and East Asia into a single bullion-driven economy and entrenched Chinese demand at the center of early modern global trade.',
  },

  // -----------------------------------------------------------------------
  // Unit 5: Revolutions, 1750-1900
  // -----------------------------------------------------------------------
  {
    id: 4400622,
    chapter: 'Unit 5: Revolutions (1750-1900)',
    title: 'Enlightenment ideas',
    prompt: 'Which Enlightenment idea most directly underwrote the Atlantic revolutions of the late eighteenth century?',
    correct: 'That legitimate political authority rests on the consent of the governed and respects natural rights',
    wrong: [
      ['That kings rule by divine right and cannot be lawfully resisted', 'Enlightenment thinkers like Locke and Rousseau attacked divine right; the revolutions rejected it.', 'They challenged divine right, not defended it.'],
      ['That economic equality must be enforced before political equality', 'That argument is more associated with later socialist thought than with the Atlantic revolutionaries.', 'Wrong tradition for 1776-1804.'],
      ['That hereditary aristocracy is the only safeguard against tyranny', 'The revolutionaries generally attacked hereditary privilege, not defended it.', 'Aristocracy was a target, not a remedy.'],
    ],
    lesson: 'Locke, Rousseau, and Montesquieu provided the vocabulary of natural rights, consent, separation of powers, and popular sovereignty that revolutionaries deployed against monarchies and empires.',
  },
  {
    id: 4400623,
    chapter: 'Unit 5: Revolutions (1750-1900)',
    title: 'Haitian Revolution',
    prompt: 'The Haitian Revolution (1791-1804) is historically significant because it was the:',
    correct: 'First successful large-scale revolt of enslaved people, producing the first independent Black-led state in the Americas',
    wrong: [
      ['First revolution to fail entirely and restore the prior colonial order', 'Haiti became independent in 1804 and abolished slavery; the revolt succeeded.', 'It succeeded; rethink.'],
      ['Only major revolution that left slavery legally intact', 'Haitian independence specifically ended slavery in the new state.', 'Slavery was abolished, not preserved.'],
      ['Cause of immediate worldwide abolition of slavery by 1810', 'Slavery persisted in many places for decades; Britain abolished the trade in 1807 and slavery in 1833, the US in 1865, Brazil in 1888.', 'Abolition came piecemeal across the century.'],
    ],
    lesson: 'The Haitian Revolution shocked the Atlantic world: it linked Enlightenment rights talk to enslaved people\'s self-emancipation and prompted both inspiration and ferocious backlash.',
  },
  {
    id: 4400624,
    chapter: 'Unit 5: Revolutions (1750-1900)',
    title: 'Latin American independence',
    prompt: 'Latin American independence movements between 1810 and 1825 were led most prominently by:',
    correct: 'Creole elites such as Simon Bolivar and Jose de San Martin who sought to displace peninsular Spanish authority',
    wrong: [
      ['Peninsular-born Spanish officials seeking to break with Madrid', 'Peninsular Spaniards generally supported the colonial regime; creoles were the leading independence faction.', 'Peninsulares mostly opposed independence.'],
      ['Coalitions of indigenous communities under unified continental leadership', 'Indigenous communities played varied roles, but the lead leadership was creole; there was no unified continental indigenous command.', 'Creole leadership predominated.'],
      ['United States military forces invading Spanish America directly', 'The United States did not invade Spanish America; the Monroe Doctrine of 1823 came after most independence wars.', 'US involvement came later and differently.'],
    ],
    lesson: 'Latin American independence largely substituted creole-led republics for Spanish viceroyalties without immediately overturning racial or labor hierarchies.',
  },
  {
    id: 4400625,
    chapter: 'Unit 5: Revolutions (1750-1900)',
    title: 'Why Britain first',
    prompt: 'Historians often explain why the Industrial Revolution began in Britain by pointing to:',
    correct: 'A combination of coal, navigable waterways, expanding capital markets, agricultural productivity, and access to Atlantic and imperial markets',
    wrong: [
      ['A unique British absence of property rights and contract law', 'Britain in fact had relatively secure property rights and a developed contract law tradition, often cited as a precondition.', 'Property law was strong, not absent.'],
      ['British rejection of overseas trade and empire', 'British industrialization was tightly connected with colonial markets, the Atlantic economy, and slave-produced raw cotton.', 'Empire was a feeder, not a barrier.'],
      ['A government policy banning all mechanical innovation', 'Britain encouraged patents and innovation rather than banning them.', 'Innovation was rewarded, not banned.'],
    ],
    lesson: 'Britain\'s industrial takeoff drew on coal geology, transport, agricultural change, financial institutions, slave-produced cotton, and imperial markets; no one factor sufficed.',
  },
  {
    id: 4400626,
    chapter: 'Unit 5: Revolutions (1750-1900)',
    title: 'Tocqueville stimulus',
    prompt: 'Tocqueville observed in the 1830s: "In no country in the world has the principle of association been more successfully used or applied to a greater multitude of objects than in America." This observation is most useful as evidence for:',
    correct: 'A nineteenth-century European fascination with the density of voluntary civic associations in the new United States',
    wrong: [
      ['American hostility to all forms of organized civic life', 'Tocqueville claims the opposite: he highlights how widespread associational life was.', 'He is praising, not denouncing.'],
      ['The absence of class distinctions in 1830s America', 'Tocqueville did write about equality of conditions among white Americans, but this specific passage is about associations.', 'The passage is about associations, not class.'],
      ['The collapse of the United States into autocracy by 1850', 'Tocqueville is observing a vibrant civil society, not predicting authoritarian collapse.', 'The passage is descriptive of strength.'],
    ],
    lesson: 'Tocqueville\'s Democracy in America remains a touchstone for arguments that durable democracy depends on dense, non-state associational life.',
  },

  // -----------------------------------------------------------------------
  // Unit 6: Industrialization and Imperialism, 1750-1900
  // -----------------------------------------------------------------------
  {
    id: 4400627,
    chapter: 'Unit 6: Industrialization and Imperialism (1750-1900)',
    title: 'Berlin Conference',
    prompt: 'The Berlin Conference of 1884-1885 is most often cited for:',
    correct: 'Setting European ground rules for the partition of Africa without African representation',
    wrong: [
      ['Granting independence to African colonies under a League of Nations mandate', 'The League of Nations did not exist until after World War I; decolonization came largely after 1945.', 'Wrong era for independence grants.'],
      ['Banning the European slave trade for the first time', 'Britain had already abolished its slave trade in 1807; the Berlin Conference did not initiate Atlantic abolition.', 'Abolition was decades earlier.'],
      ['Recognizing the sovereignty of major African states such as Ethiopia and Sokoto', 'The conference largely ignored African sovereignty and set rules for European powers to claim territory.', 'It was a European partition, not a recognition.'],
    ],
    lesson: 'The Berlin Conference codified the rules under which European powers carved up Africa, producing borders that often cut across or amalgamated existing political communities.',
  },
  {
    id: 4400628,
    chapter: 'Unit 6: Industrialization and Imperialism (1750-1900)',
    title: 'Opium Wars',
    prompt: 'The Treaty of Nanjing (1842), ending the First Opium War, marked the start of what historians often call:',
    correct: 'The "century of humiliation" in which unequal treaties opened Qing China to foreign commercial and legal privileges',
    wrong: [
      ['Chinese annexation of British India', 'Qing China did not annex British India; the war ended in Chinese defeat, not expansion.', 'China lost the war; rethink.'],
      ['Full Chinese isolation from world trade after 1842', 'The opposite occurred: treaty ports and foreign concessions multiplied after 1842.', 'It was forced opening, not isolation.'],
      ['The abolition of extraterritorial rights for foreigners in China', 'Extraterritoriality was established and expanded after 1842, not abolished.', 'Extraterritoriality grew; it did not vanish.'],
    ],
    lesson: 'The Opium Wars, treaty ports, extraterritoriality, and indemnities reshaped nineteenth-century China and fueled later nationalist and revolutionary movements.',
  },
  {
    id: 4400629,
    chapter: 'Unit 6: Industrialization and Imperialism (1750-1900)',
    title: 'Meiji Restoration',
    prompt: 'The Meiji Restoration of 1868 in Japan is best understood as:',
    correct: 'A defensive modernization that adopted Western military, industrial, and legal models to avoid colonization',
    wrong: [
      ['A return to Tokugawa institutions and rejection of foreign technology', 'Meiji leaders dismantled samurai privileges and adopted Western technology; they did not restore Tokugawa structures.', 'Meiji broke with Tokugawa, not restored it.'],
      ['The colonization of Japan by Britain', 'Japan avoided colonization; in fact it later became a colonial power itself.', 'Japan stayed sovereign.'],
      ['A purely cultural movement with no political or economic effects', 'Meiji reform restructured politics, the economy, the military, and education; it was anything but purely cultural.', 'It restructured the state.'],
    ],
    lesson: 'Meiji reformers selectively imported Western models, abolished domains and samurai status, industrialized through state-led conglomerates, and built an empire that fought Russia in 1904-1905.',
  },
  {
    id: 4400630,
    chapter: 'Unit 6: Industrialization and Imperialism (1750-1900)',
    title: 'Indian uprising of 1857',
    prompt: 'A direct political consequence of the Indian uprising of 1857 was that:',
    correct: 'Rule of India passed from the East India Company to direct British Crown administration under the Government of India Act of 1858',
    wrong: [
      ['India became fully independent from Britain in 1858', 'Indian independence came in 1947, not 1858.', 'Independence is in 1947, not 1858.'],
      ['The Mughal emperor was restored to effective power across India', 'The last Mughal, Bahadur Shah II, was deposed and exiled after the uprising; the dynasty effectively ended.', 'The Mughal dynasty ended after 1857.'],
      ['Britain abandoned all colonial holdings in South Asia', 'Britain consolidated, not abandoned, its hold on India after 1857.', 'Britain tightened control.'],
    ],
    lesson: 'After 1857 the British Raj replaced Company rule, the last Mughal emperor was deposed, and Britain restructured its army and administration in India.',
  },
  {
    id: 4400631,
    chapter: 'Unit 6: Industrialization and Imperialism (1750-1900)',
    title: 'Berlin Treaty stimulus',
    prompt: 'The General Act of the Berlin Conference (1885) declared: "Any Power which henceforth takes possession of a tract of land on the coasts of the African Continent... shall accompany the respective act with a notification thereof... to the other Signatory Powers." This clause most directly served to:',
    correct: 'Reduce the risk of war among European powers by formalizing how they would recognize each other\'s African claims',
    wrong: [
      ['Recognize African political authorities as full participants in territorial decisions', 'African states were not signatories and were not represented at Berlin.', 'African actors were excluded.'],
      ['Outlaw European colonization of Africa', 'The act enabled rather than outlawed colonization.', 'It facilitated colonization.'],
      ['Establish a single multinational African federation under European trusteeship', 'The act preserved separate European spheres, not a unified federation.', 'No federation was created.'],
    ],
    lesson: 'Berlin\'s notification clause and "effective occupation" doctrine were tools for managing European rivalry, not for protecting African sovereignty.',
  },

  // -----------------------------------------------------------------------
  // Unit 7: Global Conflict, 1900-present
  // -----------------------------------------------------------------------
  {
    id: 4400632,
    chapter: 'Unit 7: Global Conflict (1900-present)',
    title: 'Causes of WWI',
    prompt: 'Which combination best captures the deep causes of World War I as commonly taught in AP World History?',
    correct: 'Militarism, alliances, imperial rivalries, and nationalism, triggered by the assassination of Archduke Franz Ferdinand',
    wrong: [
      ['A direct German invasion of the United States in 1914', 'The United States entered the war in 1917 in response to unrestricted submarine warfare and the Zimmermann Telegram, not a German invasion.', 'There was no German invasion of the US.'],
      ['A pact between Russia and Japan to dismantle the Ottoman Empire', 'No such pact existed; Russia and Japan were on opposite sides in 1904-1905 and aligned differently in 1914.', 'No Russo-Japanese partition pact.'],
      ['The League of Nations declaration of war on Germany', 'The League of Nations was created after the war, not before it.', 'The League came later.'],
    ],
    lesson: 'The MAIN framework (militarism, alliances, imperialism, nationalism) plus the 1914 Sarajevo trigger is the standard AP causal sketch for WWI.',
  },
  {
    id: 4400633,
    chapter: 'Unit 7: Global Conflict (1900-present)',
    title: 'Treaty of Versailles',
    prompt: 'Historians often argue that the Treaty of Versailles (1919) helped sow the seeds of World War II by:',
    correct: 'Imposing harsh reparations and territorial losses on Germany while denying it full participation in the postwar order',
    wrong: [
      ['Granting Germany favorable trade terms and full membership in the League of Nations', 'Germany was excluded from the League at first and faced heavy reparations under the treaty.', 'Germany was punished, not rewarded.'],
      ['Restoring Germany\'s overseas colonies and the Alsace-Lorraine region', 'Germany lost both its colonies (as mandates) and Alsace-Lorraine to France.', 'Germany lost colonies and Alsace-Lorraine.'],
      ['Establishing a unified German-Austrian federation under Allied protection', 'Anschluss (German-Austrian unification) was forbidden by Versailles and St. Germain.', 'Unification was banned, not arranged.'],
    ],
    lesson: 'Versailles combined reparations, territorial losses, the war-guilt clause, and weak enforcement mechanisms, providing material and emotional fuel for German revanchism in the 1930s.',
  },
  {
    id: 4400634,
    chapter: 'Unit 7: Global Conflict (1900-present)',
    title: 'Total war and home fronts',
    prompt: 'Both World War I and World War II can be described as "total wars" largely because they:',
    correct: 'Mobilized entire economies and civilian populations and blurred the line between military and civilian targets',
    wrong: [
      ['Were fought entirely between professional armies with no civilian involvement', 'The opposite is true: both wars depended on mass civilian mobilization and afflicted civilian populations.', 'Civilians were central, not absent.'],
      ['Used only nineteenth-century technology and tactics', 'Both wars saw rapid technological change; WWII especially deployed new aircraft, radar, and atomic weapons.', 'Technology evolved fast in both.'],
      ['Were limited to European battlefields with no global scope', 'Both wars had Asian, African, and oceanic theaters and global economic effects.', 'Both wars were genuinely global.'],
    ],
    lesson: 'Total war meant conscription, rationing, propaganda, women in industrial labor, and the targeting of civilian morale and infrastructure across both world wars.',
  },
  {
    id: 4400635,
    chapter: 'Unit 7: Global Conflict (1900-present)',
    title: 'The Holocaust in context',
    prompt: 'The Holocaust is distinct from many earlier mass atrocities in part because it combined:',
    correct: 'An explicit racial ideology of extermination with industrial-bureaucratic methods organized by a modern state',
    wrong: [
      ['Spontaneous mob violence with no state planning', 'The Holocaust was organized by the Nazi state through extensive bureaucracy, not spontaneous mobs alone.', 'It was state-organized.'],
      ['A purely military campaign without civilian targets', 'Jewish civilians, along with Roma, Soviet POWs, disabled people, and others, were the central targets.', 'Civilians were the target.'],
      ['Religious conversion as its primary goal', 'Nazi racial ideology defined Jewishness as a biological category to be exterminated, not converted.', 'Extermination, not conversion, was the goal.'],
    ],
    lesson: 'The Holocaust\'s combination of racial ideology, modern state capacity, and industrial methods is central to twentieth-century moral and historical reflection.',
  },
  {
    id: 4400636,
    chapter: 'Unit 7: Global Conflict (1900-present)',
    title: 'Versailles stimulus',
    prompt: 'Article 231 of the Treaty of Versailles stated: "The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage... as a consequence of the war imposed upon them by the aggression of Germany and her allies." Which inference about interwar Germany is best supported by this passage?',
    correct: 'The clause provided German nationalists with a powerful symbolic grievance to mobilize against the Weimar Republic',
    wrong: [
      ['Germany accepted the war-guilt clause without political controversy', 'The "war-guilt clause" became one of the most bitterly resented features of the treaty in German politics.', 'It was deeply controversial.'],
      ['The clause assigned equal responsibility to all combatants', 'The clause specifically names Germany and its allies as responsible.', 'The clause singles out Germany.'],
      ['The clause guaranteed Germany a permanent veto in the League of Nations', 'Germany was not even a founding League member; no such veto existed.', 'No League veto for Germany.'],
    ],
    lesson: 'Article 231 became a lightning rod for German nationalist politics in the 1920s and 1930s and is often cited as one ingredient in the rise of fascism.',
  },

  // -----------------------------------------------------------------------
  // Unit 8: Cold War and Decolonization, 1900-present
  // -----------------------------------------------------------------------
  {
    id: 4400637,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'Indian Partition',
    prompt: 'The 1947 Partition of British India produced:',
    correct: 'Two new states, India and Pakistan, accompanied by massive population transfers and communal violence',
    wrong: [
      ['A unified secular Indian state with no territorial division', 'Partition explicitly divided the subcontinent along religious-majority lines into India and Pakistan.', 'There was a division; rethink.'],
      ['Permanent British rule under a renewed Government of India Act', 'British rule ended in 1947; Partition was the end, not a continuation, of the Raj.', 'British rule ended in 1947.'],
      ['The immediate creation of Bangladesh as a third independent state', 'Bangladesh became independent only in 1971, after separating from Pakistan.', 'Bangladesh independence came in 1971.'],
    ],
    lesson: 'Partition displaced more than ten million people and produced violence whose death toll is still debated; it also set the stage for ongoing India-Pakistan rivalry, including over Kashmir.',
  },
  {
    id: 4400638,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'African independence wave',
    prompt: 'Between roughly 1957 and 1965, more than thirty African states gained independence from European empires. This wave is best explained by:',
    correct: 'Weakened European powers after WWII, anti-colonial nationalism, and Cold War pressure on overt empire',
    wrong: [
      ['A unified African military conquest of European capitals', 'No such conquest occurred; independence came mostly through political negotiation, sometimes armed struggle.', 'It was negotiation and pressure, not conquest of Europe.'],
      ['A single United Nations decree dissolving all empires in 1957', 'The UN supported decolonization (notably with Resolution 1514 in 1960) but did not dissolve empires by a single decree in 1957.', 'No one decree did it.'],
      ['Spontaneous European decisions to abolish colonialism for ethical reasons alone', 'Ethical arguments mattered, but material constraints, anti-colonial pressure, and superpower politics drove the actual timing.', 'Multiple pressures, not pure ethics, set the timing.'],
    ],
    lesson: 'Ghana\'s 1957 independence opened a rapid wave; by 1965 most of sub-Saharan Africa was formally independent, though many states inherited colonial borders and economies.',
  },
  {
    id: 4400639,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'Korean War',
    prompt: 'The Korean War (1950-1953) is often cited as the first major hot conflict of the Cold War because it:',
    correct: 'Pitted a US-led UN coalition against North Korean and Chinese forces along an east-west divide of communist and non-communist spheres',
    wrong: [
      ['Was fought entirely without superpower involvement', 'The United States led the UN coalition and China intervened directly; the USSR provided material support.', 'The superpowers were heavily involved.'],
      ['Resulted in the immediate reunification of Korea under one government', 'The war ended in armistice in 1953 with a divided Korea still in place.', 'Korea remained divided.'],
      ['Took place before the founding of the United Nations', 'The UN was founded in 1945; Korea was a UN-authorized military action.', 'The UN authorized the coalition.'],
    ],
    lesson: 'Korea set the template for Cold War proxy conflicts: superpower involvement, divided post-colonial states, and stalemate along ideological lines.',
  },
  {
    id: 4400640,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'Cuban Missile Crisis',
    prompt: 'The Cuban Missile Crisis of October 1962 is most significant for:',
    correct: 'Bringing the superpowers to the brink of nuclear war and prompting subsequent arms-control measures like the hotline and Limited Test Ban Treaty',
    wrong: [
      ['Ending the Cold War immediately and dismantling Soviet missile forces worldwide', 'The Cold War continued for nearly three decades after 1962; Soviet missile forces grew, not shrank.', 'It did not end the Cold War.'],
      ['Bringing about the immediate overthrow of Fidel Castro', 'Castro remained in power until 2008 and lived until 2016; the crisis did not end his rule.', 'Castro stayed in power.'],
      ['Causing the United States to withdraw from NATO', 'The US remained a leading NATO member after 1962; the crisis tightened, not loosened, Cold War alignments.', 'No NATO withdrawal occurred.'],
    ],
    lesson: 'The thirteen-day crisis showcased how Cold War alliances, deterrence, and brinkmanship combined; afterwards, both superpowers invested in arms-control structures.',
  },
  {
    id: 4400641,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'Non-Aligned Movement',
    prompt: 'The Bandung Conference of 1955 is best known for:',
    correct: 'Bringing together newly independent Asian and African states to chart a path between US and Soviet blocs',
    wrong: [
      ['Founding the Warsaw Pact under Soviet leadership', 'The Warsaw Pact was founded in 1955 as a Soviet-led alliance, but Bandung was a different gathering of mostly non-aligned states.', 'These are two different 1955 events.'],
      ['Creating the European Economic Community among Western European states', 'The EEC was created by the 1957 Treaty of Rome, not at Bandung.', 'Different conference entirely.'],
      ['Restoring colonial control of Asia and Africa to European powers', 'Bandung pushed in the opposite direction, denouncing colonialism and supporting independence movements.', 'Bandung opposed colonialism.'],
    ],
    lesson: 'Bandung and the later Non-Aligned Movement gave newly independent states a diplomatic voice that resisted being reduced to Cold War clients.',
  },
  {
    id: 4400642,
    chapter: 'Unit 8: Cold War and Decolonization (1900-present)',
    title: 'Nasser stimulus',
    prompt: 'Gamal Abdel Nasser declared in 1956: "The canal is our canal. The canal was built by Egypt and the Egyptians, and was paid for by Egypt and the Egyptians... we shall nationalize the company." This statement is best read as:',
    correct: 'An assertion of post-colonial sovereignty over strategic infrastructure once controlled by European powers',
    wrong: [
      ['A renunciation of Egyptian sovereignty over the Suez Canal', 'The passage asserts, rather than renounces, Egyptian sovereignty.', 'He is claiming, not surrendering.'],
      ['A formal request for British re-occupation of Egypt', 'Nasser was nationalizing the canal in defiance of British and French interests, not requesting their return.', 'He is defying, not inviting, Britain.'],
      ['A pledge to abolish Egyptian state ownership of all industries', 'The speech moves in the opposite direction, expanding rather than abolishing state ownership.', 'It is a nationalization, not privatization.'],
    ],
    lesson: 'The 1956 Suez Crisis exposed European post-imperial weakness, the new American and Soviet dominance, and the appeal of Arab nationalism for newly independent states.',
  },

  // -----------------------------------------------------------------------
  // Unit 9: Globalization, 1900-present
  // -----------------------------------------------------------------------
  {
    id: 4400643,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'Collapse of the USSR',
    prompt: 'The dissolution of the Soviet Union in December 1991 is most directly associated with:',
    correct: 'Economic stagnation, Gorbachev\'s reforms (glasnost and perestroika), and nationalist movements within Soviet republics',
    wrong: [
      ['A US military invasion of Moscow in 1991', 'No such invasion occurred; the dissolution came from internal political and economic collapse.', 'No invasion of Russia took place.'],
      ['A successful coup that restored Stalin-era central planning', 'The August 1991 coup against Gorbachev failed; it accelerated rather than reversed the collapse.', 'The coup failed.'],
      ['The expansion of the Warsaw Pact across Western Europe', 'The Warsaw Pact dissolved in 1991, the same year as the USSR; it did not expand westward.', 'The Warsaw Pact dissolved.'],
    ],
    lesson: 'Internal economic and political pressures, combined with nationalist movements in republics like the Baltics and Ukraine, dismantled the Soviet Union without a major war between the superpowers.',
  },
  {
    id: 4400644,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'European integration',
    prompt: 'European integration through the European Economic Community and later the European Union was driven primarily by the desire to:',
    correct: 'Prevent another major European war by binding national economies together and providing shared institutions',
    wrong: [
      ['Restore the Habsburg Empire as a continental political authority', 'European integration was a democratic post-WWII project, not a restoration of Habsburg rule.', 'It was not a Habsburg restoration.'],
      ['Establish a purely Eastern European bloc independent of the West', 'European integration began in Western Europe and only later expanded eastward after 1989.', 'Eastward expansion came later.'],
      ['Permanently exclude Germany from European political and economic life', 'German integration was central to the project, with the Coal and Steel Community in 1951 binding former enemies together.', 'Germany was included, not excluded.'],
    ],
    lesson: 'From the Schuman Plan to the Treaty of Rome to Maastricht, European integration combined economic interdependence and institutional politics to make another European war unthinkable.',
  },
  {
    id: 4400645,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'China and the WTO',
    prompt: 'China\'s accession to the World Trade Organization in 2001 is significant in global history because it:',
    correct: 'Integrated the world\'s most populous country deeply into global trade and supply chains under WTO rules',
    wrong: [
      ['Marked China\'s decision to abandon export-led growth', 'WTO accession reinforced rather than abandoned China\'s export-led growth model.', 'It cemented exports, not abandoned them.'],
      ['Forced China to restore central planning across its entire economy', 'China continued to liberalize many sectors after WTO accession; central planning did not return.', 'Markets expanded, not shrank.'],
      ['Required China to formally renounce one-party rule', 'WTO accession imposed trade rules, not regime change; the Communist Party remained in power.', 'The WTO did not require regime change.'],
    ],
    lesson: 'WTO accession dramatically expanded Chinese manufacturing exports and reshaped global supply chains, labor markets, and political debates in many countries.',
  },
  {
    id: 4400646,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'Neoliberalism',
    prompt: 'The set of policies often called neoliberalism in the 1980s and 1990s typically included:',
    correct: 'Privatization, deregulation, trade liberalization, and reductions in some forms of state spending',
    wrong: [
      ['Mass nationalization of major industries across OECD economies', 'Neoliberal policy usually moved in the opposite direction, privatizing nationalized firms.', 'Privatization, not nationalization.'],
      ['Imposition of foreign-exchange controls and autarky', 'Neoliberalism generally favored open capital flows and trade, not autarky.', 'It promoted openness.'],
      ['Restoration of strict Bretton Woods fixed-exchange rates after 1980', 'Bretton Woods fixed rates ended in the early 1970s; neoliberal policy embraced floating rates and financial liberalization.', 'Floating rates, not fixed.'],
    ],
    lesson: 'Neoliberalism, associated with figures like Thatcher and Reagan and institutions like the IMF, restructured many economies and produced ongoing political contestation about inequality and growth.',
  },
  {
    id: 4400647,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'BRICs and shifting power',
    prompt: 'The term BRIC (later BRICS) was coined in the early 2000s to describe:',
    correct: 'A group of large emerging economies (Brazil, Russia, India, China, later South Africa) expected to reshape global growth',
    wrong: [
      ['A formal military alliance to replace NATO', 'BRICS is not a formal military alliance; it is a loose economic and diplomatic grouping.', 'It is not a military bloc.'],
      ['A subgroup of OPEC oil exporters', 'OPEC and BRICS overlap only partially; the BRICS category is about economic size, not oil exports.', 'Not an OPEC subgroup.'],
      ['A new currency union pegged to the gold standard', 'BRICS has discussed alternative payment arrangements but has not established a gold-standard currency union.', 'No gold-standard union exists.'],
    ],
    lesson: 'BRICS captures one piece of a broader shift in twenty-first-century economic gravity toward several large non-Western economies, with mixed but real consequences for global institutions.',
  },
  {
    id: 4400648,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'Climate change politics',
    prompt: 'International climate diplomacy since the 1992 Rio Earth Summit has most consistently struggled with which fundamental tension?',
    correct: 'How to balance historical emissions by wealthy countries against current and future emissions by developing economies',
    wrong: [
      ['Whether greenhouse gases exist at all in the atmosphere', 'The basic physics of greenhouse gases has not been the subject of credible international scientific dispute.', 'The physics is not the political dispute.'],
      ['Whether to formally rejoin the Bretton Woods fixed-exchange system', 'That is a monetary, not climate, debate.', 'Wrong policy domain.'],
      ['Whether the UN should govern outer space settlements', 'Outer space governance is a related but distinct policy field.', 'Different policy area.'],
    ],
    lesson: 'From Rio (1992) to Kyoto (1997) to Paris (2015), climate diplomacy has wrestled with "common but differentiated responsibilities" and the politics of who pays for transition and adaptation.',
  },
  {
    id: 4400649,
    chapter: 'Unit 9: Globalization (1900-present)',
    title: 'Long arc comparison',
    prompt: 'Comparing the Mongol-era Eurasian network of the thirteenth century with the post-1991 globalized economy, a defensible point of continuity is that:',
    correct: 'Both periods saw intensified long-distance exchange of goods, ideas, technologies, and pathogens enabled by political and infrastructural conditions',
    wrong: [
      ['Both periods featured identical political institutions and ideologies', 'Mongol khanates and contemporary states differ dramatically in form; only the connectivity claim is defensible.', 'Connectivity, not ideology, is the continuity.'],
      ['Both periods avoided major pandemics entirely', 'The Black Death (mid-fourteenth century) and COVID-19 (2020) show the opposite.', 'Pandemics happened in both arcs.'],
      ['Both periods relied chiefly on subsistence agriculture with no long-distance trade', 'Both periods are notable precisely for active long-distance exchange, not its absence.', 'Both are integration-heavy, not subsistence-only.'],
    ],
    lesson: 'AP-style long-arc comparisons reward identifying durable structural patterns (connectivity, exchange of pathogens, technology diffusion) without flattening crucial differences in scale, technology, and politics.',
  },
])
