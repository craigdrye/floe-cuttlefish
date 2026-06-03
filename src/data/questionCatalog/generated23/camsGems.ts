import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const camsGems: Question[] = [
  // ---------------------------------------------------------------------------
  // Chapter: Stages of ML
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10010000,
    'Career Skills',
    'Stages of ML',
    'The clean money that is dirty',
    "A charity collects small, fully legitimate donations from honest supporters. The bookkeeping is spotless and every dollar has a lawful source. Yet a financial intelligence unit treats the account as a terrorist-financing risk. What makes this case so different from classic money laundering, where the whole problem is hiding a criminal origin?",
    "In terrorist financing the source of the funds can be entirely clean; the danger lives in the destination and end-use, so the usual 'trace it back to the crime' logic fails",
    [
      [
        'It must secretly be laundering, because suspicious funds always trace back to a criminal source',
        'This assumes laundering and terrorist financing share the same signal, but TF can run on lawful money',
        'Money laundering disguises a dirty origin; terrorist financing can take clean money toward a dirty purpose',
      ],
      [
        'The amounts are simply too large to be legitimate donations',
        'TF is often the opposite: small, fragmented amounts that stay below every monitoring threshold',
        'Terrorist financing is frequently low-dollar, which is exactly why source-based detection misses it',
      ],
      [
        'It cannot be a real risk, since clean source plus clean records means nothing to investigate',
        'This treats provenance as the only thing worth checking and ignores where the value is going',
        'A clean source is not a clean bill of health when the end-use is the actual threat',
      ],
    ],
    "Lesson: Money laundering and terrorist financing look identical on the surface but invert the core question. Laundering asks 'where did this money come from?' and tries to launder a criminal origin into apparent legitimacy. Terrorist financing can start with perfectly lawful money — wages, donations, business income — and the harm is entirely downstream in the end-use. That inversion matters deeply: an AML control built only to detect dirty origins will pass clean-sourced TF straight through. It forces the profession to monitor purpose and destination, not just provenance, and explains why a tiny, well-documented transfer can be more dangerous than a huge, murky one.",
    'Floe generated',
    true,
    'Ask which direction the suspicion runs: backward to the origin, or forward to the use.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010001,
    'Career Skills',
    'Stages of ML',
    'Layering versus integration',
    "A launderer moves drug cash through a dozen shell-company wires across three offshore jurisdictions, then finally uses the funds to buy a downtown apartment building that produces real rental income. Investigators say two different stages happened here, and that you would detect each with a completely different technique. Which description of the two stages is right?",
    'Layering is the maze of transactions that obscures the audit trail; integration is the return of the funds to the legitimate economy as an apparently lawful asset',
    [
      [
        'Both the wires and the property purchase are layering, since both involve moving money around',
        'This collapses two distinct stages and misses that the building re-enters the funds into the real economy',
        'Moving money to obscure it is layering; parking it in a legitimate asset is integration',
      ],
      [
        'The wires are integration and the property purchase is layering',
        'This reverses the stages: the complex transfers obscure, the asset purchase legitimises',
        'Integration is the destination, not the maze; the apartment is the integration step',
      ],
      [
        'It is all placement, because the cash had to enter the system first',
        'Placement already happened when the cash got in; what follows is obscuring and then legitimising',
        'Placement is the entry point only; layering and integration are the two later stages',
      ],
    ],
    "Lesson: The placement-layering-integration model is the spine of AML, and the layering/integration boundary is where most exam (and real) confusion lives. Layering deliberately complicates the trail — many transactions, jurisdictions, and instruments — so you hunt it with complexity and velocity rules in transaction monitoring. Integration quietly returns the value to the lawful economy as a business, a building, or art, so you catch it by reverse-tracing from a suspicious asset back through ownership. The deep point: the same dollar requires opposite investigative instincts at different stages, which is why practitioners stress that the stages overlap and blur rather than marching in tidy order.",
    'Floe generated',
    true,
    'One stage hides the trail; the other brings the money home looking legitimate.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010002,
    'Career Skills',
    'Stages of ML',
    'Why placement is the choke point',
    "A cartel has hundreds of millions in physical banknotes and a sophisticated network of accountants who can move money invisibly once it is digital. Veteran investigators say the cartel's hardest, most dangerous moment is not the clever offshore wiring but the very first step. Why is getting bulk cash into the financial system the most vulnerable stage for a launderer?",
    'Placement is where illicit cash first touches a regulated, recorded system, so it is the point most exposed to reporting thresholds, KYC, and detection — once it is digital and layered, tracing it back becomes far harder',
    [
      [
        'Because layering is actually trivial and never leaves any trail to follow',
        'Layering does leave trails; it just multiplies them — but placement is where the raw cash is most exposed',
        'Layering is hard to trace by design, yet placement is the moment of greatest exposure to controls',
      ],
      [
        'Because integration is illegal but placement and layering are not',
        'All three stages are part of the laundering offence; legality is not what distinguishes the risk',
        'The stages are degrees of one crime, not a legal/illegal split; placement is risky for detection reasons',
      ],
      [
        'Because cash deposits are the only form placement can take',
        'Placement also runs through crypto on-ramps, prepaid cards, and MSBs — the exposure is the point, not the form',
        'Placement is any first entry into the system, cash or not; its danger is contact with controls, not its form',
      ],
    ],
    "Lesson: Placement is the launderer's bottleneck, and that is precisely why the AML system concentrates firepower there — currency transaction reports, structuring rules, and KYC at account opening. The conceptual hook is that detection difficulty is asymmetric across the laundering lifecycle: at placement the dirty value collides with recorded, regulated infrastructure for the first time, but once it is digital and fragmented across layers, the trail fractures and reverse-tracing grows exponentially harder. Defenders therefore get the most leverage at the entry point, while criminals get the most cover the deeper into layering they go. Note too that placement is not always cash — crypto on-ramps and prepaid loads are placement too.",
    'Floe generated',
    true,
    'Think about which stage forces the criminal to touch a recorded, regulated system first.',
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Chapter: Typologies
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10010003,
    'Career Skills',
    'Typologies',
    'The wire that never crosses the border',
    "A worker in London hands cash to a local broker and, within hours, his family in Karachi receives the equivalent in rupees. No bank wire, no SWIFT message, and crucially no money ever physically or electronically crosses the border between the two brokers at the moment of transfer. How does value get from London to Karachi in this hawala system?",
    'The two brokers simply record offsetting debts to each other and settle their net balance later through trade, cash, or other arrangements — the value moves as a bookkeeping entry, not as a cross-border payment',
    [
      [
        'The London broker secretly wires the funds to Karachi through a hidden correspondent bank',
        'That would be an ordinary bank transfer; hawala specifically avoids moving funds across the border',
        'Hawala leaves no cross-border payment trail because nothing is wired — only obligations are netted',
      ],
      [
        'The cash is physically smuggled from London to Karachi by a courier',
        'Physical smuggling is bulk-cash movement, the opposite of hawala, which keeps cash in place on each side',
        'In hawala the cash stays put on both ends; only an IOU between brokers crosses, and only on paper',
      ],
      [
        'It is impossible without a regulated money-transfer license, so the transfer cannot really happen',
        'It demonstrably happens worldwide, often unlicensed, precisely because it bypasses formal rails',
        'Hawala works outside formal rails by netting obligations, which is exactly what makes it hard to trace',
      ],
    ],
    "Lesson: Hawala (and other informal value transfer systems) reveals a startling idea: value can move across the world while money stays still. The London broker owes the Karachi broker; they settle the net later through trade invoices, cash balancing, or further transfers. Because no transaction crosses the border at the moment of transfer, there is no SWIFT message, no correspondent record, no audit trail — which is what makes it efficient for honest migrant workers and attractive to launderers and terrorist financiers alike. The detection signal is not the transfer itself but the pattern: funds flowing to and from individuals in places where formal banking is impractical. It also reframes 'moving money' as moving obligations.",
    'Floe generated',
    true,
    'If no payment crosses the border, what is it that the two brokers actually exchange?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010004,
    'Career Skills',
    'Typologies',
    'Smuggling value through an honest-looking invoice',
    "Two genuinely trading companies, an exporter and an importer, want to shift two million dollars of criminal value across a border without any suspicious wire. They ship a real container of goods worth one million but write the invoice for three million, and the importer pays the full three. No rule against wiring money was broken. How did trade-based money laundering move the extra value?",
    "By over-invoicing: the inflated invoice justifies a payment far above the goods' real worth, so the excess two million crosses the border disguised as a legitimate trade payment",
    [
      [
        'They structured the payment into many small wires to stay under reporting thresholds',
        'That is structuring of a cash/wire flow, not TBML; here the value hides inside the price of real goods',
        'TBML smuggles value in the mispriced invoice itself, not by slicing a wire into small pieces',
      ],
      [
        'The importer simply bribed a customs officer to ignore the shipment',
        'Bribery may grease the scheme but is not the laundering mechanism; the value moves via the inflated price',
        'The laundering happens in the invoice mispricing; customs evasion is a separate problem',
      ],
      [
        'No value moved, because a real container of goods was actually shipped',
        'A real shipment is the camouflage; the mispriced payment is what transfers the illicit value',
        'Genuine goods make it look clean, but the price gap is precisely where the dirty value travels',
      ],
    ],
    "Lesson: Trade-based money laundering is conceptually elegant and disturbingly hard to police: it hides value transfer inside the price of legitimate-looking trade. Over-invoicing pushes value to the exporter; under-invoicing pushes value to the importer; phantom shipments move value with no goods at all. The genius — and the danger — is that every individual element can look lawful: real companies, a real (or plausible) shipment, a paid invoice. The crime lives only in the gap between the invoiced price and the goods' true market value. That is why TBML is estimated to carry a large share of global illicit flows yet evades transaction monitoring built to watch money, not merchandise. The red flag is price wildly outside market range, not the payment itself.",
    'Floe generated',
    true,
    'Compare what the goods are actually worth with what the invoice says was paid.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010005,
    'Career Skills',
    'Typologies',
    'Pseudonymous is not anonymous',
    "A criminal moves stolen funds in Bitcoin, convinced the blockchain hides him. An investigator, with no special access and no subpoena, later reconstructs much of his activity by reading the public ledger and clustering addresses. Yet at one point in the trail the investigator hits a genuine wall. What is the most accurate statement about tracing Bitcoin?",
    'Bitcoin is pseudonymous, not anonymous: every transaction is permanently public and traceable between addresses, so the real obstacle is linking an address to a real identity — which tools like mixers and chain-hopping try to break',
    [
      [
        'Bitcoin is fully anonymous, so the ledger reveals nothing useful to an investigator',
        'The ledger is completely public and permanent; the gap is identity attribution, not transaction visibility',
        'Every Bitcoin transaction is visible forever — only the link to a person is hidden, not the flow',
      ],
      [
        'Bitcoin transactions are private by default and only visible with a court order',
        'No order is needed to read the chain; anyone can, which is why blockchain analytics exists',
        'The blockchain is open to all; the investigative challenge is who, not what or how much',
      ],
      [
        'Mixers and chain-hopping make Bitcoin truly untraceable, defeating any analysis',
        'They raise opacity and cost, but they obscure rather than guarantee untraceability; many are unwound',
        'Obfuscation tools increase difficulty, yet the permanent public ledger still anchors much of the trail',
      ],
    ],
    "Lesson: The crypto-pseudonymity distinction overturns a popular myth. Bitcoin's ledger is radically transparent — every transaction is public and permanent — so the chain itself is a forensic gift, the opposite of a hiding place. The true weak point for an investigator is attribution: tying a string of addresses to a flesh-and-blood owner, usually at the on/off ramps where regulated exchanges apply KYC and the Travel Rule. That is exactly what launderers attack with mixers, peel chains, and chain-hopping into privacy coins, trying to sever the address-to-identity link rather than hide the transactions. The lingering implication: a system designed for transparency can be more accountable than cash, yet the last mile of identity is where the real fight happens.",
    'Floe generated',
    true,
    'Separate two questions: can you see the transactions, and can you name the person behind them?',
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Chapter: Sanctions
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10010006,
    'Career Skills',
    'Sanctions',
    'Blocked without ever being listed',
    "A bank screens a prospective corporate client against the OFAC SDN list and gets a clean hit: the company's exact name appears nowhere on any sanctions list. The bank's sanctions officer nonetheless concludes the company is blocked and refuses to open the account. Under the OFAC 50 Percent Rule, how can an unlisted company be blocked?",
    'If one or more blocked persons own 50 percent or more of the company in the aggregate, directly or indirectly, the company is blocked by operation of law even though it never appears on the SDN list itself',
    [
      [
        'It cannot be blocked, because only entities actually named on the SDN list are sanctioned',
        'This misses that ownership by blocked persons extends the block automatically beyond the named list',
        'The SDN list is not exhaustive: 50%+ ownership by blocked persons blocks an entity by law',
      ],
      [
        'It is blocked only if a single blocked person owns the full 50 percent alone',
        'OFAC aggregates the interests of multiple blocked persons, so two 25% owners can trip the rule',
        'Aggregation is the whole point: separate blocked owners are summed to test the 50% threshold',
      ],
      [
        'It is blocked because owning even one percent through a blocked person taints the entity',
        'There is a defined threshold; below 50% aggregate the entity is not blocked by the rule (though caution applies)',
        'The rule draws a bright line at 50% aggregate ownership, not at any trace of blocked ownership',
      ],
    ],
    "Lesson: The OFAC 50 Percent Rule is one of sanctions law's most counterintuitive ideas: a company can be fully blocked without ever being named, purely because blocked persons own at least 50 percent of it in the aggregate — summing direct and indirect stakes, even across different sanctions programs. Sanctions follow ownership, not just names. The profound consequence is that a name-only screen is structurally insufficient: a sanctioned oligarch can place 25% with himself and 25% with an associate, or hide behind a chain of holding companies, and the front entity stays off every list. Compliance therefore demands beneficial-ownership due diligence, not just list matching — and the rule blocks by operation of law, so ignorance is no defence.",
    'Floe generated',
    true,
    'Ask what OFAC sanctions follow: the printed name, or the ownership behind it.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010007,
    'Career Skills',
    'Sanctions',
    "When one country's law reaches a deal it is not part of",
    "A German company, using euros and no US persons or US dollars, sells equipment to a heavily sanctioned regime. No US law was broken inside the transaction itself. Yet US authorities can still penalise the German firm by cutting it off from the US financial system. What kind of sanctions power is this, and how does it differ from ordinary 'primary' sanctions?",
    'These are secondary sanctions: they target non-US persons for dealing with a sanctioned party, using access to the US financial system as leverage, rather than directly prohibiting conduct under US jurisdiction',
    [
      [
        'These are primary sanctions, the same rules that bind US persons directly',
        'Primary sanctions govern US persons and US-nexus conduct; this firm had neither, so a different power applies',
        'Primary sanctions need a US nexus; reaching a wholly foreign deal is the hallmark of secondary sanctions',
      ],
      [
        'The US has no power here at all, since no US person, dollar, or jurisdiction was involved',
        'It overlooks that the US weaponises access to its financial system to influence foreign conduct',
        'Even with no direct jurisdiction, the threat of losing US market access gives secondary sanctions their bite',
      ],
      [
        'This is simply the OFAC 50 Percent Rule applied to the German company',
        'The 50% Rule concerns ownership by blocked persons, not penalising a foreign party for its dealings',
        'Ownership aggregation and secondary sanctions are different tools; here the lever is the deal, not the owners',
      ],
    ],
    "Lesson: Secondary sanctions are where compliance meets geopolitics. Primary sanctions bind those a state actually has jurisdiction over — US persons, US-dollar clearing, US territory. Secondary sanctions reach further: they punish foreign parties with no US nexus for trading with a sanctioned target, not by claiming legal authority over them but by threatening to deny them the thing they cannot do without — access to the US financial system and dollar. The conceptual hook is sovereignty by leverage rather than by jurisdiction: a deal entirely outside US law still carries US risk because the dollar is a global utility. For an AML officer this means screening must consider not just whether your own conduct is lawful, but whether a counterparty's other dealings could expose them — and you — to secondary exposure.",
    'Floe generated',
    true,
    'Ask whether the US is claiming legal authority over the firm, or just controlling access to something it needs.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10010008,
    'Career Skills',
    'Sanctions',
    'The difference between a CTR and a SAR',
    "An AML analyst processes two transactions. The first is a fully ordinary, above-board cash deposit of 12,000 dollars from a long-trusted customer — nothing remotely suspicious. The second is a strange 4,000-dollar transfer pattern that smells wrong but is below any fixed dollar trigger. Which transaction triggers a mandatory filing, and on what basis?",
    'The 12,000-dollar cash deposit triggers a mandatory Currency Transaction Report purely because it exceeds the 10,000-dollar cash threshold, with no suspicion required; the odd 4,000-dollar pattern may warrant a suspicion-based SAR even though it is below the CTR threshold',
    [
      [
        'Only the suspicious 4,000-dollar pattern must be filed, since reporting is about suspicion, not amount',
        'It forgets the CTR is a flat threshold rule that fires on cash over 10,000 regardless of any suspicion',
        'CTRs are amount-driven and mandatory; SARs are suspicion-driven — the two run on different triggers',
      ],
      [
        'Neither is reportable: the deposit is innocent and the transfer is too small to matter',
        'Innocence does not exempt a large cash CTR, and small size does not exempt a genuinely suspicious SAR',
        'A CTR ignores intent and a SAR ignores any fixed floor, so both filings can be required here',
      ],
      [
        'Both must be filed as CTRs, since both are reportable cash events',
        'A SAR, not a CTR, captures suspicion, and the 4,000 transfer is not even a large cash event',
        'Only the cash deposit fits the CTR; the suspicious pattern belongs in a SAR, a different form and logic',
      ],
    ],
    "Lesson: The CTR/SAR distinction captures two utterly different philosophies of surveillance living side by side. A Currency Transaction Report is mechanical and blind: any cash transaction over 10,000 dollars must be reported, no suspicion needed and no discretion allowed — the system simply records the fact. A Suspicious Activity Report is the opposite: it has no fixed dollar floor that compels it (only minimums that permit it) and turns entirely on human judgment that something is wrong, however small. The deep tension is between bright-line rules that catch everyone equally (including the innocent) and judgment-based rules that catch the right people but depend on a fallible analyst. A good AML program needs both, precisely because each covers the other's blind spot.",
    'Floe generated',
    true,
    'One filing is triggered by a number you cannot argue with; the other by a feeling you have to justify.',
    { challengeRating: 6 },
  ),
]
