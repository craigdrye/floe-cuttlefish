import { makeQuestionBank } from './base'
import type { Question } from './types'

// AP US GOVERNMENT CHAPTER 1 EXPANSION
// ---------------------------------------------------------------------------
// 42 new questions (IDs 4360100–4360141) extending the existing eight-question
// Chapter 1 block in civicPoliticsQuestions.ts (highApUsGovernmentQuestions,
// lines ~997–1106). The existing eight cover: Declaration of Independence
// (consent), Articles of Confederation weaknesses, Federalist 10 definition
// and stimulus, Federalist 51 definition and application, Brutus 1 definition
// and application, and the Federalist-10-vs-Brutus-1 document pair. None of
// those concepts are re-tested here.
//
// These 42 expand into the rest of the chapter surface required by the AP
// US Government CED for Unit 1 (Foundations of American Democracy):
//   - The Great Compromise / Connecticut Compromise (bicameral mechanics)
//   - Three-Fifths Compromise and its constitutional consequences
//   - Article V amendment process (proposal and ratification routes)
//   - Ratification-era Federalist Papers 10, 51, 70, 78 — each paired
//     with its load-bearing argument
//   - Anti-Federalist arguments: standing army, federal judiciary, Bill
//     of Rights demand
//   - Specific clauses: necessary and proper, supremacy, commerce, full
//     faith and credit
//   - Constitutional principles: popular sovereignty, limited government,
//     separation of powers, checks and balances, federalism, judicial
//     review, rule of law
//   - Bill of Rights origin
//   - Democracy (direct) vs republic (representative) vs federal democracy
//   - Stimulus items pulling paraphrased excerpts from Declaration,
//     Constitution preamble, Federalist 10, 51, 70, 78, Brutus 1
//   - Application: state-vs-federal conflict under supremacy
//   - Synthesis: Federalist 10 vs Brutus 1, Federalist 51 vs Brutus 1,
//     Federalist 70 vs Brutus, etc.
//
// Voice anchor: the existing Chapter 1 block in civicPoliticsQuestions.ts
// (sober, nonpartisan, evidence-anchored, clause-named, document-named).
// Every wrong-answer rationale is unique. Distractors target real AP
// student misconceptions, not strawmen. US context throughout.
// ---------------------------------------------------------------------------

export const apUsGovCh1Questions: Question[] = makeQuestionBank('AP', [
  {
    id: 4360100,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Great Compromise',
    prompt: 'At the Constitutional Convention, delegates from large and small states deadlocked over legislative representation. The Connecticut (Great) Compromise resolved the deadlock by:',
    correct: 'Creating a bicameral Congress with a House apportioned by population and a Senate with two senators per state',
    wrong: [
      ['Adopting the Virginia Plan in full, with both chambers apportioned by population', 'The Virginia Plan was rejected by small states precisely because population-based representation in both chambers would marginalize them; the compromise split the difference.', 'Population for one chamber, equality for the other.'],
      ['Adopting the New Jersey Plan in full, with one chamber and one vote per state', 'The New Jersey Plan kept the unicameral structure of the Articles; the compromise added a population-based chamber alongside an equal-state chamber.', 'The compromise was bicameral, not unicameral.'],
      ['Letting state legislatures pick a rotating set of representatives by lot', 'No proposal at the convention used lot-based selection; the dispute was about apportionment, not selection method.', 'Look for a bicameral structural fix.'],
    ],
    lesson: 'The Great Compromise produced bicameralism: a House apportioned by population (favoring large states) and a Senate with equal representation (favoring small states). Article I, Sections 2 and 3 codify the result.',
  },
  {
    id: 4360101,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Three-Fifths Compromise',
    prompt: 'The Three-Fifths Compromise affected the early federal government most directly by:',
    correct: 'Inflating Southern representation in the House and the Electoral College by counting three-fifths of the enslaved population for apportionment',
    wrong: [
      ['Granting partial voting rights to enslaved people in federal elections', 'Enslaved people had no federal voting rights; the compromise concerned how they were counted for apportionment, not whether they could vote.', 'The compromise was about counting, not voting.'],
      ['Setting the rate at which states would be taxed on imports of enslaved people', 'A separate clause (Article I, Section 9) addressed the slave-trade prohibition timing and a small head tax; the Three-Fifths Compromise was about apportionment.', 'Distinguish apportionment from the slave-trade clause.'],
      ['Requiring Northern states to return self-emancipated people to slaveholders', 'That was the Fugitive Slave Clause (Article IV, Section 2), a separate constitutional provision.', 'Match the compromise to the apportionment mechanic.'],
    ],
    lesson: 'The Three-Fifths Compromise (Article I, Section 2) counted three-fifths of enslaved persons toward state population for House and Electoral College apportionment, amplifying Southern political power until the Reconstruction Amendments.',
  },
  {
    id: 4360102,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Article V proposal routes',
    prompt: 'Article V provides two routes for proposing constitutional amendments. Which pairing accurately describes them?',
    correct: 'Two-thirds of both houses of Congress, or a national convention called by two-thirds of state legislatures',
    wrong: [
      ['A simple majority of both houses of Congress, or a presidential proclamation', 'Article V requires supermajorities, not simple majorities, and the president has no formal role in proposing amendments.', 'Look for supermajority thresholds.'],
      ['The Supreme Court certifying a constitutional defect, or three-fourths of governors agreeing', 'The Court has no proposing role; governors do not propose amendments under Article V.', 'Proposal happens through Congress or a convention, not the Court.'],
      ['Two-thirds of state legislatures, or three-fourths of state conventions', 'Three-fourths is the ratification threshold, not a proposal threshold; mixing the two is a common error.', 'Distinguish propose from ratify.'],
    ],
    lesson: 'Article V proposal: two-thirds of both houses of Congress, or a convention called by two-thirds of state legislatures (never used). Ratification is the separate three-fourths step.',
  },
  {
    id: 4360103,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Article V ratification routes',
    prompt: 'Once an amendment is properly proposed, Article V allows two routes for ratification. Which pairing accurately describes them?',
    correct: 'Three-fourths of state legislatures, or three-fourths of state ratifying conventions called for the purpose',
    wrong: [
      ['Two-thirds of state legislatures, or a national referendum of the people', 'The Constitution has no national referendum mechanism, and the ratification threshold is three-fourths, not two-thirds.', 'Three-fourths, by states.'],
      ['A majority of state governors, or approval by the Supreme Court', 'Neither governors nor the Court ratify amendments; ratification runs through state legislatures or state conventions.', 'Ratification is a state-level process.'],
      ['Three-fourths of both houses of Congress, voting separately on the proposal', 'Congress proposes by two-thirds; ratification then moves to the states for the three-fourths step.', 'After proposal, the action moves to the states.'],
    ],
    lesson: 'Article V ratification: three-fourths of state legislatures (the route used 26 of 27 times) or three-fourths of state ratifying conventions (used once, for the Twenty-First Amendment).',
  },
  {
    id: 4360104,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 70 argument',
    prompt: 'Federalist 70 is most directly used as evidence for which constitutional design choice?',
    correct: 'A single energetic executive accountable to the people, rather than a plural or weak executive',
    wrong: [
      ['A council of state that shares executive authority with the president', 'Hamilton specifically rejects plural executives in Federalist 70 because they diffuse responsibility and obscure accountability.', 'Hamilton wants energy and accountability concentrated in one person.'],
      ['Direct popular election of the president by national majority vote', 'Federalist 70 defends a unitary executive, not the method of selection; the Electoral College is defended elsewhere.', 'The argument is about structure, not selection.'],
      ['A purely ceremonial executive, with policy power resting in Congress', 'Hamilton argues the opposite: a weak executive cannot execute the laws or respond to emergencies effectively.', 'Hamilton wants an energetic, not ceremonial, executive.'],
    ],
    lesson: 'Federalist 70 argues that energy in the executive requires unity, duration, adequate provision, and competent powers. It is the required document for justifying a single, accountable president.',
  },
  {
    id: 4360105,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 78 argument',
    prompt: 'Federalist 78 most directly defends which feature of the federal judiciary?',
    correct: 'An independent judiciary with life tenure during good behavior and the power to void laws repugnant to the Constitution',
    wrong: [
      ['Fixed renewable terms for federal judges to keep them accountable to the people', 'Hamilton argues for tenure during good behavior precisely to insulate judges from political pressure; renewable terms would undermine that independence.', 'Independence requires insulation, not renewal.'],
      ['Original jurisdiction over all federal criminal cases', 'Federalist 78 is about judicial independence and the legitimacy of judicial review, not about the scope of original jurisdiction.', 'Focus on independence and review.'],
      ['Federal judges serving simultaneously in state supreme courts', 'No such dual service is contemplated; Hamilton stresses a separate, independent federal bench.', 'Independence implies separation, not overlap.'],
    ],
    lesson: 'Federalist 78 calls the judiciary the "least dangerous branch" because it has neither force nor will. Life tenure protects independence; judicial review enforces the Constitution against ordinary legislation.',
  },
  {
    id: 4360106,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Anti-Federalist standing army',
    prompt: 'A core Anti-Federalist objection to the proposed Constitution focused on the federal power to:',
    correct: 'Raise and maintain a standing army in peacetime, which they feared could be turned against the people or used to coerce the states',
    wrong: [
      ['Establish a national church under the supervision of Congress', 'No proposal at the convention created a national church; the establishment concern was addressed later in the First Amendment, but it was not the army worry.', 'The fear is about military force, not religion.'],
      ['Coin money, which they argued should be reserved entirely to the states', 'Anti-Federalists generally accepted federal coinage; their structural worries were about consolidation, taxation, and the army, not currency.', 'Look for a military or coercive concern.'],
      ['Conduct foreign treaty negotiations without state consultation', 'Anti-Federalists worried about treaty power but the standing-army objection was distinct and especially prominent in Brutus and the Federal Farmer.', 'Standing armies were singled out in Anti-Federalist writing.'],
    ],
    lesson: 'Anti-Federalists feared that a peacetime standing army under a distant federal government could destroy state militias and coerce the people. The Second and Third Amendments respond to this concern.',
  },
  {
    id: 4360107,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Necessary and Proper Clause',
    prompt: 'The Necessary and Proper Clause of Article I, Section 8 most directly grants Congress the power to:',
    correct: 'Pass laws needed to carry out its enumerated powers, supporting the doctrine of implied powers',
    wrong: [
      ['Override state constitutions whenever a state policy conflicts with congressional preference', 'Override flows from the Supremacy Clause (Article VI), not the Necessary and Proper Clause; the latter authorizes means, not supremacy.', 'Distinguish means (Necessary and Proper) from priority (Supremacy).'],
      ['Exercise any power the Court has previously approved in a federalism case', 'Necessary and Proper is a textual grant of authority; it does not depend on prior judicial approval.', 'The clause itself is the grant.'],
      ['Add new enumerated powers to Article I by majority vote', 'New powers can only be added by amendment under Article V; the clause authorizes implementing existing powers.', 'Implementation, not enlargement.'],
    ],
    lesson: 'The Necessary and Proper Clause (Article I, Section 8) is the textual basis for implied powers. McCulloch v. Maryland (1819) read it broadly to uphold the national bank as a means of executing enumerated fiscal powers.',
  },
  {
    id: 4360108,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Supremacy Clause',
    prompt: 'The Supremacy Clause in Article VI most directly establishes that:',
    correct: 'The Constitution, federal laws made under it, and treaties are the supreme law of the land and bind state judges',
    wrong: [
      ['State law prevails over federal law when a state has a more recent statute on point', 'The Supremacy Clause makes federal law (made under the Constitution) supreme regardless of which law is more recent.', 'Federal law made under the Constitution prevails.'],
      ['The Supreme Court is supreme over Congress in all matters of policy', 'The clause concerns the hierarchy of legal sources (federal over state), not the relationship among federal branches.', 'The clause is vertical (federal vs state), not horizontal (branch vs branch).'],
      ['Treaties require state legislative approval before they bind state courts', 'Treaties properly made under the Constitution bind state judges directly under Article VI; no state ratification is required.', 'Treaties bind state judges directly.'],
    ],
    lesson: 'Article VI, Clause 2 (the Supremacy Clause) makes the Constitution, federal statutes made under it, and treaties the supreme law of the land. State judges are bound notwithstanding any contrary state law.',
  },
  {
    id: 4360109,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Commerce Clause',
    prompt: 'The Commerce Clause in Article I, Section 8 grants Congress power to regulate commerce:',
    correct: 'With foreign nations, among the several states, and with Indian tribes',
    wrong: [
      ['Within any single state whenever Congress declares an economic interest', 'The clause reaches commerce among the states, not purely intrastate activity absent a substantial effect on interstate commerce (Lopez).', 'Look at the three categories named in the clause.'],
      ['Only with foreign nations, leaving interstate trade to the states alone', 'Interstate commerce is explicitly within the clause; one of its main purposes was to fix the interstate trade barriers that plagued the Articles era.', 'Interstate commerce is included.'],
      ['Through executive agreements rather than statutes', 'Commerce regulation is a legislative power vested in Congress, exercised by statute, not by executive agreement.', 'Article I vests this in Congress.'],
    ],
    lesson: 'The Commerce Clause (Article I, Section 8, Clause 3) reaches commerce with foreign nations, among the several states, and with Indian tribes. United States v. Lopez (1995) marked a judicially enforceable limit on its interstate reach.',
  },
  {
    id: 4360110,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Full Faith and Credit Clause',
    prompt: 'A couple legally married in one state moves to another state that has different marriage rules. Which constitutional provision most directly governs whether the second state must recognize the marriage?',
    correct: 'The Full Faith and Credit Clause of Article IV, Section 1',
    wrong: [
      ['The Privileges and Immunities Clause of Article IV, Section 2', 'That clause prevents states from discriminating against citizens of other states in matters like the right to travel or to earn a living; recognition of public acts and records runs through Full Faith and Credit.', 'Match the clause to recognition of acts and records.'],
      ['The Equal Protection Clause of the Fourteenth Amendment', 'Equal protection limits state classifications generally; recognition of out-of-state acts and judicial proceedings is the specific job of Full Faith and Credit.', 'Look for the clause about acts and records.'],
      ['The Tenth Amendment reservation of powers', 'The Tenth Amendment reserves undelegated powers to the states but does not address how states recognize each other\'s public acts.', 'Reservation does not address recognition.'],
    ],
    lesson: 'Full Faith and Credit (Article IV, Section 1) requires each state to give effect to the public acts, records, and judicial proceedings of every other state. It is the structural glue of interstate legal recognition.',
  },
  {
    id: 4360111,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Popular sovereignty',
    prompt: 'Which feature of the Constitution most directly reflects the principle of popular sovereignty?',
    correct: 'The opening words "We the People" and the requirement that ratification flow through state conventions chosen by the people',
    wrong: [
      ['Life tenure for federal judges during good behavior', 'Judicial independence insulates judges from popular pressure; it is a separation-of-powers feature, not a popular-sovereignty feature.', 'Look for direct grounding in the people.'],
      ['The Necessary and Proper Clause granting Congress implied powers', 'Implied powers concern the scope of congressional authority, not the source of constitutional legitimacy.', 'The principle is about whose authority underlies the document.'],
      ['Two-thirds supermajorities to override a presidential veto', 'Veto override is a checks-and-balances mechanism among branches, not a statement about the people as the source of authority.', 'Match the principle to the document\'s origin and ratification.'],
    ],
    lesson: 'Popular sovereignty holds that government derives its legitimate authority from the people. The Preamble and the ratification-by-convention process are the clearest constitutional expressions of the principle.',
  },
  {
    id: 4360112,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Limited government',
    prompt: 'Which constitutional feature most clearly expresses the principle of limited government?',
    correct: 'A written enumeration of powers granted to the federal government, with reserved powers and individual-rights protections operating as boundaries',
    wrong: [
      ['Congressional power to declare war by simple majority of both chambers', 'War-declaring power illustrates an enumerated power, not a limit; limited government works by boundaries on power, not by listing powers alone.', 'Look for boundaries, not grants.'],
      ['The president\'s authority to grant pardons for federal offenses', 'Pardon power is an executive grant; it is not the structural mechanism that limits government generally.', 'Pardon is a grant, not a limit.'],
      ['The requirement that all federal employees take an oath of office', 'Oath-taking confirms allegiance to the Constitution but does not, by itself, define the limits of government power.', 'Allegiance is not the same as limit.'],
    ],
    lesson: 'Limited government means government may exercise only the powers granted to it and is constrained by reserved powers (Tenth Amendment) and by individual-rights protections (Bill of Rights, Fourteenth Amendment).',
  },
  {
    id: 4360113,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Checks and balances',
    prompt: 'A president vetoes a bill, Congress overrides the veto by two-thirds in both chambers, and the resulting law is later struck down by the Supreme Court as unconstitutional. This sequence most clearly illustrates:',
    correct: 'Checks and balances, because each branch exercises a power that constrains the others within a separated-powers framework',
    wrong: [
      ['Federalism, because the conflict is between the national government and the states', 'Federalism concerns the vertical national-state relationship; the sequence here is entirely among federal branches.', 'No state actor appears in the sequence.'],
      ['Judicial supremacy, because the Court alone determines the validity of every action', 'The Court\'s role here is one check among several; judicial supremacy overstates the conclusion. Each branch checks the others.', 'Multiple branches act, not just the Court.'],
      ['Popular sovereignty, because the people directly resolved the dispute', 'No popular vote resolved the sequence; the resolution came through institutional checks among branches.', 'Look for branch-on-branch action.'],
    ],
    lesson: 'Checks and balances permit each branch to constrain the others (veto, override, judicial review, confirmation, impeachment). Federalist 51 frames this as ambition counteracting ambition.',
  },
  {
    id: 4360114,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalism principle',
    prompt: 'Which feature of the Constitution most directly expresses the principle of federalism?',
    correct: 'The division of authority between a national government of enumerated powers and state governments with reserved powers',
    wrong: [
      ['The separation of legislative, executive, and judicial functions into three branches', 'That is separation of powers, a horizontal division within the national government; federalism is the vertical national-state division.', 'Vertical vs horizontal divisions.'],
      ['The requirement of presidential signature on every congressional bill', 'Presidential signature reflects the bicameral-presentment process and the executive check on legislation, not federalism.', 'Presentment is not the federalism principle.'],
      ['The election of senators by direct popular vote since the Seventeenth Amendment', 'Direct election changed the method of Senate selection but did not by itself express federalism; federalism is about the allocation of authority, not selection method.', 'Allocation, not selection.'],
    ],
    lesson: 'Federalism divides authority between national and state governments. Article I enumerates federal powers; the Tenth Amendment reserves the remainder to the states or the people.',
  },
  {
    id: 4360115,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Judicial review principle',
    prompt: 'The principle of judicial review allows the federal courts to:',
    correct: 'Declare acts of Congress, the executive, and the states unconstitutional when they conflict with the Constitution',
    wrong: [
      ['Veto bills before they reach the president for signature', 'Veto is an executive power, not a judicial one; courts review laws after they are enacted and applied.', 'Review happens after enactment.'],
      ['Issue advisory opinions on proposed legislation before it is passed', 'Federal courts decide cases and controversies; they do not issue advisory opinions, a deliberate constitutional limit.', 'Article III requires a case or controversy.'],
      ['Override a state court ruling without any case being brought before them', 'Courts act only on cases properly before them; sua sponte review of state rulings without a case is not how judicial review works.', 'A case must be properly presented.'],
    ],
    lesson: 'Judicial review, established in Marbury v. Madison (1803), is the courts\' power to invalidate government actions that conflict with the Constitution. Federalist 78 supplies the theoretical defense.',
  },
  {
    id: 4360116,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Rule of law',
    prompt: 'The principle of the rule of law is best illustrated by which constitutional feature?',
    correct: 'The requirement that government action conform to known general rules that apply to officials and citizens alike',
    wrong: [
      ['The power of the president to pardon federal offenses', 'Pardon power is an executive grant; rule of law concerns predictability and equal application of rules to officials, not the existence of pardons.', 'Look for predictable rules applying to all.'],
      ['The right of state legislatures to apportion their own districts', 'Apportionment authority is one piece of federalism; rule of law is a broader principle about lawful constraint of all government action.', 'Apportionment is not the principle.'],
      ['The president\'s ability to negotiate executive agreements without Senate approval', 'Executive agreements illustrate executive practice; rule of law goes to whether government acts under preexisting law that binds it.', 'Rule of law constrains the actor, including the president.'],
    ],
    lesson: 'Rule of law means government acts under preexisting, general, publicly known rules that apply to officials and citizens alike. Article VI\'s oath and the Bill of Rights help anchor it.',
  },
  {
    id: 4360117,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Bill of Rights origin',
    prompt: 'Which best explains why the Bill of Rights was added to the Constitution after ratification?',
    correct: 'Anti-Federalists demanded explicit protections of individual rights as a condition for ratification in key states',
    wrong: [
      ['The original Constitution made no mention of any rights, and Federalists immediately recognized the omission', 'The original Constitution did include some specific rights (habeas corpus, no bills of attainder, jury trial in criminal cases); Federalists initially argued a separate bill was unnecessary.', 'The original text was not silent about all rights.'],
      ['The Supreme Court ordered Congress to draft a bill of rights to resolve early cases', 'The Court did not exist yet at the moment the Bill of Rights was drafted; it was a political response to ratification politics, not a judicial mandate.', 'The Court did not order this.'],
      ['Foreign treaty obligations required the United States to enact a written list of rights', 'No treaty drove this; the impetus came from domestic ratification politics, especially in Virginia, New York, and Massachusetts.', 'The pressure was domestic and political.'],
    ],
    lesson: 'The Bill of Rights (ratified 1791) responded to Anti-Federalist demands during ratification. Federalist 84 had argued such a list was unnecessary; Madison ultimately drafted it as a political concession that became a foundational liberty document.',
  },
  {
    id: 4360118,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Republic vs direct democracy',
    prompt: 'Madison in Federalist 10 distinguishes a republic from a pure democracy primarily on the ground that a republic:',
    correct: 'Operates through elected representatives, which can refine and enlarge public views and accommodate a larger territory',
    wrong: [
      ['Allows every citizen to vote directly on every law passed', 'That description fits a pure democracy; Madison contrasts the republic against it.', 'Direct voting on every law is what he is rejecting.'],
      ['Prohibits any form of voting by ordinary citizens', 'A republic in Madison\'s sense still rests on popular election of representatives; he is not abolishing voting.', 'Voting still exists, indirectly.'],
      ['Concentrates lawmaking power in a single executive officer', 'A republic with one decision-maker would not match Madison\'s definition; he stresses representation and deliberation.', 'Representation, not concentration in one person.'],
    ],
    lesson: 'In Federalist 10, a republic uses representation and can extend over a larger territory and population than a direct democracy. Madison argues the larger republic better controls the effects of faction.',
  },
  {
    id: 4360119,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federal democracy',
    prompt: 'The American constitutional system is most accurately described as a:',
    correct: 'Federal democratic republic, combining representative government with divided national and state authority',
    wrong: [
      ['Unitary democracy, with all authority concentrated in a single national government', 'Unitary systems centralize authority; the United States is federal, with significant state authority.', 'Authority is divided between levels.'],
      ['Pure direct democracy, with citizens voting on each policy decision', 'The United States uses representation; it is a republic, not a pure direct democracy.', 'Citizens elect representatives, they do not vote on every law.'],
      ['Confederation, with sovereign states delegating only revocable powers to the center', 'That described the Articles of Confederation; the Constitution moved away from confederation toward federalism with a stronger national government.', 'Confederation is the prior system, not the current one.'],
    ],
    lesson: 'A federal democratic republic combines representation (republic) with popular elections (democracy) and divided authority (federalism). The label captures all three features the founders worked into the design.',
  },
  {
    id: 4360120,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Declaration stimulus',
    prompt: 'The Declaration of Independence states: "Governments are instituted among Men, deriving their just powers from the consent of the governed, that whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it." Which inference is best supported by this passage?',
    correct: 'Government legitimacy depends on consent, and the people retain a right of revolution when government violates its purposes',
    wrong: [
      ['Only legislative majorities, never the people themselves, may change government', 'The passage explicitly locates the right to alter or abolish in "the People," not in legislative majorities alone.', 'Re-read who holds the right.'],
      ['Government, once established, is permanent and cannot be changed', 'The passage says the opposite: government can be altered or abolished when it becomes destructive of its proper ends.', 'The right of revolution is explicit.'],
      ['Government powers derive from divine right rather than from the governed', 'The passage roots just powers in consent of the governed, not in divine right.', 'Consent is named directly.'],
    ],
    lesson: 'The Declaration grounds legitimate authority in consent of the governed and asserts a right to alter or abolish government that destroys natural rights. Popular sovereignty is the principle named.',
  },
  {
    id: 4360121,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Preamble stimulus',
    prompt: 'The Preamble to the Constitution reads: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America." Which principle is most directly expressed by the opening phrase "We the People"?',
    correct: 'Popular sovereignty, because the document\'s authority is grounded in the people rather than in the states or the king',
    wrong: [
      ['Federalism, because the people are organized into separate states with their own governments', 'Federalism appears elsewhere in the structural design, but the opening phrase emphasizes the people as the source of authority, not the state-national division.', 'Look at whose authority is named.'],
      ['Judicial review, because the people authorize courts to interpret the document', 'Judicial review is not what "We the People" expresses; the principle named in the opening phrase is the source of authority.', 'Source of authority, not interpretive practice.'],
      ['Separation of powers, because the people separate branches of government', 'Separation of powers appears in the body of the Constitution (Articles I, II, III); the opening phrase names the source of legitimacy.', 'The opening phrase is about origin, not structure.'],
    ],
    lesson: 'The Preamble\'s opening phrase ("We the People") locates constitutional authority in the people, not in the states or in monarchy. That move from "We the States" (Articles of Confederation drafts) to "We the People" was a deliberate change.',
  },
  {
    id: 4360122,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 51 stimulus',
    prompt: 'Madison writes in Federalist 51: "Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place." Which constitutional design choice is most directly supported by this passage?',
    correct: 'Vesting each branch with independent powers and means to resist encroachment by the others',
    wrong: [
      ['Selecting officials by lot to eliminate ambition from public life', 'Madison treats ambition as inevitable and uses it as the lever; he is not trying to eliminate it.', 'Madison uses ambition, he does not erase it.'],
      ['Giving Congress complete authority over the other branches', 'Madison rejects concentration; the whole point is that each branch must have constitutional means to resist the others.', 'Resistance, not concentration.'],
      ['Requiring direct popular elections for all federal offices', 'The passage is about institutional checks among branches, not about election method.', 'Branches checking branches, not election design.'],
    ],
    lesson: 'Federalist 51 grounds separation of powers and checks and balances in the realistic assumption that officials will pursue ambition. The Constitution channels that ambition by giving each branch the means to resist the others.',
  },
  {
    id: 4360123,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 70 stimulus',
    prompt: 'Hamilton writes in Federalist 70: "Energy in the Executive is a leading character in the definition of good government. It is essential to the protection of the community against foreign attacks; it is not less essential to the steady administration of the laws." Which design choice is most directly supported by this passage?',
    correct: 'A single executive with sufficient duration in office to govern with energy and accountability',
    wrong: [
      ['A multi-person executive council that votes on every administrative action', 'Hamilton rejects plural executives precisely because they dilute energy and obscure responsibility.', 'Hamilton wants unity, not plurality.'],
      ['Strict legislative control over every executive decision in peacetime', 'Hamilton argues the executive must be energetic enough to act, especially in foreign affairs and law execution, not minutely controlled by Congress.', 'Energy requires room to act.'],
      ['Lifetime tenure for the president to maximize accountability', 'Hamilton wants duration sufficient for energy but not lifetime tenure; presidential terms are bounded under Article II.', 'Adequate duration, not lifetime.'],
    ],
    lesson: 'Federalist 70 defends a single, energetic executive on grounds of accountability, decisive law execution, and effective response to threats. It is the required document for Article II structural design.',
  },
  {
    id: 4360124,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 78 stimulus',
    prompt: 'Hamilton writes in Federalist 78: "The judiciary is beyond comparison the weakest of the three departments of power; ... it has no influence over either the sword or the purse." Which inference about the judiciary is best supported?',
    correct: 'The judiciary depends on the legitimacy of its reasoning and on enforcement by the other branches, since it commands neither force nor money',
    wrong: [
      ['The judiciary should be abolished because it lacks meaningful power', 'Hamilton calls the judiciary weak relative to the others but argues it is essential to enforce constitutional limits; he is defending it, not abolishing it.', 'Hamilton defends the judiciary in the same essay.'],
      ['The judiciary may freely use military force to enforce its rulings', 'Hamilton expressly notes the judiciary lacks the sword; military force is not a judicial tool.', 'The judiciary lacks the sword.'],
      ['The judiciary alone determines all national policy', 'Hamilton is highlighting judicial weakness, not supremacy across all policy domains.', 'Weakness, not supremacy.'],
    ],
    lesson: 'Federalist 78 describes the judiciary as the "least dangerous branch" because it controls neither force nor money. Its authority rests on independence (life tenure) and on the persuasiveness of its constitutional reasoning.',
  },
  {
    id: 4360125,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Brutus 1 stimulus',
    prompt: 'Brutus 1 warns: "In so extensive a republic, the great officers of government would soon become above the control of the people, and abuse their power to the purpose of aggrandizing themselves." Which Anti-Federalist concern is most directly supported by this passage?',
    correct: 'Distance between rulers and ruled in a large republic would weaken accountability and invite abuse of power',
    wrong: [
      ['The proposed Constitution would underfund the federal government and produce weakness', 'Brutus feared excessive federal strength and remote authority, not insufficient funding.', 'Brutus worried about too much power, not too little.'],
      ['Federal officers would be elected too often to govern effectively', 'Brutus worried that representatives were too distant and unaccountable, not that they faced excessive elections.', 'Distance and unaccountability, not over-election.'],
      ['The Bill of Rights would unnecessarily constrain effective government', 'Brutus actually argued for an explicit bill of rights as a check on federal power; the concern was unconstrained federal authority.', 'Brutus wanted more rights protections, not fewer.'],
    ],
    lesson: 'Brutus 1 argues a large republic places officials beyond effective popular control, undermining accountability. It is the AP counterpoint to Madison\'s extended-republic thesis in Federalist 10.',
  },
  {
    id: 4360126,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Supremacy application',
    prompt: 'A state legalizes a substance that federal law treats as a controlled substance under a valid federal statute. A state resident charged in federal court argues the state law overrides the federal prohibition within that state. Which constitutional provision most directly defeats the argument?',
    correct: 'The Supremacy Clause of Article VI, because valid federal law made under the Constitution prevails over conflicting state law',
    wrong: [
      ['The Tenth Amendment, because all police powers belong exclusively to the states', 'The Tenth Amendment reserves undelegated powers but does not permit states to override valid federal law within fields Congress has constitutional authority to regulate.', 'Reserved powers do not include nullification.'],
      ['The Privileges and Immunities Clause, because residents of one state cannot be treated differently in another state', 'That clause addresses interstate discrimination against citizens, not the priority of federal over state law.', 'Match the clause to the federal-state conflict.'],
      ['Full Faith and Credit, because the state must respect prior federal recognition', 'Full Faith and Credit governs interstate recognition of acts and records, not the priority of federal law over state law.', 'Full Faith and Credit is state-to-state, not federal-over-state.'],
    ],
    lesson: 'The Supremacy Clause (Article VI) makes valid federal law supreme over conflicting state law. State legalization of conduct does not displace a valid federal prohibition within constitutional bounds.',
  },
  {
    id: 4360127,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Necessary and Proper application',
    prompt: 'Congress, citing its power to regulate interstate commerce, passes a law creating a national consumer-fraud database that requires banks to report certain interstate wire transfers. A bank argues no enumerated clause expressly authorizes such a database. Which constitutional argument best supports the law?',
    correct: 'The Necessary and Proper Clause authorizes Congress to choose appropriate means to carry out an enumerated power like regulating interstate commerce',
    wrong: [
      ['The Tenth Amendment authorizes any federal action so long as it benefits the states', 'The Tenth Amendment reserves powers to the states, not the federal government; it is not a source of federal authority.', 'The Tenth Amendment is about reservation, not grant.'],
      ['The Supremacy Clause grants Congress new powers to address national problems', 'Supremacy describes the priority of valid federal law, not the source of substantive federal powers.', 'Supremacy is priority, not power.'],
      ['Article III implied powers permit Congress to create regulatory programs', 'Article III addresses the judiciary; congressional implied powers run through Article I and the Necessary and Proper Clause.', 'Wrong article for the source of congressional powers.'],
    ],
    lesson: 'McCulloch v. Maryland reads the Necessary and Proper Clause as authorizing Congress to choose appropriate means for carrying out enumerated ends. Interstate commerce regulation supports incidental programs reasonably adapted to that end.',
  },
  {
    id: 4360128,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 10 vs Brutus 1',
    prompt: 'Federalist 10 and Brutus 1 disagree most sharply about whether:',
    correct: 'A large, extended republic is more or less likely to protect liberty and control faction than a small one',
    wrong: [
      ['The federal government should have the power to coin money', 'Both authors accept federal coinage; their core dispute is about the size and reach of the republic itself, not coinage.', 'Look for the size-of-republic question.'],
      ['The presidency should be a single office or a plural executive', 'That dispute appears between Hamilton (Federalist 70) and some Anti-Federalists, but it is not the central Madison-Brutus disagreement.', 'Madison and Brutus argue about extent, not executive structure.'],
      ['Slavery should be permitted in the new republic', 'Federalist 10 and Brutus 1 do not centrally argue about slavery; the disagreement at issue concerns the extent of the republic.', 'Their disagreement is structural, not about slavery.'],
    ],
    lesson: 'Madison (Federalist 10) defends an extended republic on the ground that multiplicity of interests checks faction; Brutus 1 argues the opposite — distance and size weaken accountability and threaten liberty. The disagreement is the AP exam\'s canonical dialectic.',
  },
  {
    id: 4360129,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 51 vs Brutus 1',
    prompt: 'Federalist 51 and Brutus 1 differ most clearly because Federalist 51 emphasizes:',
    correct: 'Internal institutional checks (separated branches, federalism) as sufficient to control abuse, while Brutus 1 doubts that institutional design can offset the dangers of distant national power',
    wrong: [
      ['Direct popular election of every federal officer', 'Federalist 51 does not advocate direct popular election of every office; it defends institutional design as the principal safeguard.', 'Madison defends design, not plebiscites.'],
      ['Abolition of the states as redundant authorities', 'Federalist 51 explicitly defends federalism as a second safeguard; Madison does not seek to abolish the states.', 'Madison preserves the states.'],
      ['Direct democracy at the national level', 'Federalist 51 is a defense of structural checks within a republic, not a brief for direct democracy.', 'Madison wants checks, not direct democracy.'],
    ],
    lesson: 'Federalist 51 argues that ambition counteracting ambition plus the "double security" of federalism will control abuse; Brutus 1 questions whether any institutional design can substitute for closeness between rulers and ruled.',
  },
  {
    id: 4360130,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 70 vs Anti-Federalists',
    prompt: 'Anti-Federalists who feared the proposed presidency would have most directly disputed which claim in Federalist 70?',
    correct: 'That a single energetic executive is more accountable and responsible than a plural or weak executive',
    wrong: [
      ['That the president should serve a four-year renewable term', 'Specific term length was not the principal Anti-Federalist target; the deeper worry was about the structure and reach of executive power.', 'The dispute was about structure, not term length.'],
      ['That treaty-making should require Senate participation', 'Federalist 70 is silent on treaty procedure; Senate participation in treaties is actually a check Anti-Federalists could welcome.', 'Treaty procedure is not the Federalist 70 question.'],
      ['That Congress should retain the power to declare war', 'Federalist 70 does not contest the war power; Anti-Federalists generally agreed that declaring war should rest with Congress.', 'Not the dispute Federalist 70 raised.'],
    ],
    lesson: 'Federalist 70 defends unity in the executive on accountability grounds; Anti-Federalists worried that a single energetic executive would resemble the monarchy they had fought, regardless of constitutional limits.',
  },
  {
    id: 4360131,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalist 78 application',
    prompt: 'A federal court invalidates a popular state law on constitutional grounds. A critic argues the ruling is illegitimate because unelected judges should not override the will of an elected majority. Which argument from Federalist 78 best answers the critic?',
    correct: 'Judicial independence and review protect the Constitution\'s long-term commitments from short-term legislative majorities',
    wrong: [
      ['Judges are elected by the people and therefore equally accountable as legislators', 'Federal judges are appointed and confirmed, not elected; Hamilton defends judicial independence precisely because judges are not directly accountable to majorities.', 'Federal judges are not elected.'],
      ['The judiciary is the most powerful branch and may override Congress at will', 'Hamilton calls the judiciary the least dangerous branch and ties review to fidelity to the Constitution, not to raw power.', 'Least dangerous, not most powerful.'],
      ['Constitutional rulings can be overturned by simple legislative majority', 'Constitutional holdings cannot be overturned by ordinary statute; they require amendment or judicial reversal.', 'Constitutional rulings need amendment, not statute.'],
    ],
    lesson: 'Federalist 78 defends judicial review as the mechanism by which the higher law of the Constitution constrains ordinary legislation. Independence (life tenure) makes that role possible.',
  },
  {
    id: 4360132,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Articles of Confederation amendment',
    prompt: 'A frequently cited weakness of the Articles of Confederation was that amendment of the document required:',
    correct: 'Unanimous consent of all thirteen state legislatures, which made structural reform nearly impossible',
    wrong: [
      ['A simple majority vote of the Confederation Congress only', 'A simple majority would have been an easier amendment process; the actual rule was unanimous state consent, which paralyzed reform.', 'Unanimity, not majority.'],
      ['Three-fourths of state ratifying conventions called for the purpose', 'That describes one of the routes under Article V of the new Constitution, not under the Articles of Confederation.', 'Wrong document; that is Article V.'],
      ['A two-thirds vote of state governors', 'Governors had no formal amendment role under either the Articles or the Constitution.', 'Amendment runs through legislatures or conventions, not governors.'],
    ],
    lesson: 'The Articles required unanimous state consent to amend (Article XIII of the Articles). That rule, plus weak taxing, commerce, and enforcement powers, motivated the move from amendment to a new Constitution.',
  },
  {
    id: 4360133,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Shays\' Rebellion significance',
    prompt: 'Shays\' Rebellion (1786–87) most directly influenced the move toward a new Constitution by:',
    correct: 'Demonstrating that the Confederation could not raise force to suppress armed unrest or guarantee domestic tranquility',
    wrong: [
      ['Proving that the Confederation president had insufficient veto power', 'The Articles created no separate president; there was no veto to expand. The lesson the framers drew was about national enforcement capacity, not executive vetoes.', 'The Articles had no executive.'],
      ['Convincing states to abolish their militias entirely', 'States retained militias under the new Constitution; the rebellion did not lead to militia abolition.', 'States kept militias.'],
      ['Establishing the precedent that federal courts could try state insurrections', 'No federal judiciary existed under the Articles, and the new Constitution did not assign insurrection trials uniquely to federal courts.', 'Not the lesson the framers drew.'],
    ],
    lesson: 'Shays\' Rebellion exposed the Confederation\'s inability to respond to internal armed unrest. The Preamble\'s "insure domestic Tranquility" and Article I, Section 8\'s militia-calling power respond directly.',
  },
  {
    id: 4360134,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Separation of powers',
    prompt: 'Separation of powers refers most precisely to:',
    correct: 'Dividing the functions of government into legislative, executive, and judicial branches with distinct primary responsibilities',
    wrong: [
      ['Dividing authority between the national government and the states', 'That is federalism, the vertical division; separation of powers is the horizontal division within the national government.', 'Horizontal vs vertical.'],
      ['Allowing the Supreme Court to assign powers between Congress and the president', 'No constitutional provision empowers the Court to reassign powers among branches; assignment is fixed by the constitutional text.', 'The text assigns powers, not the Court.'],
      ['Giving the president authority to override Congress on policy disagreements', 'The president has a qualified veto but cannot override Congress unilaterally; separation of powers concerns the division of functions, not executive override.', 'Veto is not override.'],
    ],
    lesson: 'Separation of powers (Articles I, II, III) assigns lawmaking, execution, and adjudication to three branches. Checks and balances overlay separation by giving each branch tools to constrain the others.',
  },
  {
    id: 4360135,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Republican guarantee clause',
    prompt: 'Article IV, Section 4 provides that the United States shall guarantee to every state a "Republican Form of Government." This guarantee most directly forbids:',
    correct: 'A state from replacing representative government with monarchy or other nonrepublican institutions',
    wrong: [
      ['A state from amending its own state constitution', 'States routinely amend their own constitutions; the guarantee speaks to republican form, not to amendment authority.', 'Amendment within a republican form is allowed.'],
      ['A state from enforcing its own criminal laws', 'States retain broad criminal jurisdiction as part of their reserved powers; the guarantee does not bar ordinary state law enforcement.', 'Criminal enforcement is a reserved power.'],
      ['A state from creating a bicameral legislature with two chambers', 'Bicameralism is one common form of republican structure; the guarantee does not prohibit it.', 'Bicameralism is permitted.'],
    ],
    lesson: 'The Guarantee Clause (Article IV, Section 4) commits the federal government to ensuring that states retain representative government. It has rarely been litigated but anchors the constitutional commitment to republicanism nationwide.',
  },
  {
    id: 4360136,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Federalism vs separation of powers',
    prompt: 'A scenario in which a state attorney general sues the federal Environmental Protection Agency over a federal rule that the state argues exceeds federal authority best illustrates:',
    correct: 'Federalism, because the conflict is between a state government and the national government',
    wrong: [
      ['Separation of powers, because two government actors are in conflict', 'Two actors in conflict is not enough; separation of powers refers to conflict among federal branches, not between a state and a federal agency.', 'Identify whether the conflict is national-state or branch-branch.'],
      ['Checks and balances, because one branch is checking another', 'Checks and balances describes intra-federal branch interactions; here the state is an external actor, not a federal branch.', 'A state is not a federal branch.'],
      ['Judicial review, because the case is filed in court', 'Filing in court invites judicial review of the rule, but the principle the scenario most directly illustrates is the vertical federalism conflict.', 'The conflict is structurally federalism, even if courts decide it.'],
    ],
    lesson: 'Federalism describes the vertical national-state division; separation of powers describes the horizontal division among federal branches. Identifying which axis the conflict runs along is the first move on AP scenarios.',
  },
  {
    id: 4360137,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Articles vs Constitution',
    prompt: 'Which change marks the clearest shift from the Articles of Confederation to the Constitution?',
    correct: 'The federal government gained direct power to tax individuals and regulate interstate commerce',
    wrong: [
      ['States lost the power to make their own laws on any subject', 'States retained substantial lawmaking power under the Tenth Amendment; the new Constitution did not strip states of all legislative authority.', 'States kept reserved powers.'],
      ['Congress lost the power to coin money', 'The Constitution preserved and clarified the federal power to coin money in Article I, Section 8.', 'Coining money remained a federal power.'],
      ['Amendment became easier than under the Articles by requiring only a simple majority of one chamber', 'Amendment under Article V still requires supermajorities; it became easier than unanimity but not as easy as a simple one-chamber majority.', 'Amendment is easier, but still requires supermajorities.'],
    ],
    lesson: 'The Constitution\'s most consequential structural change from the Articles was the federal power to act directly on individuals — by taxing, by regulating interstate commerce, and by enforcing law without state intermediaries.',
  },
  {
    id: 4360138,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Bicameralism rationale',
    prompt: 'A defender of bicameralism in the Federalist tradition would most likely argue that two chambers:',
    correct: 'Slow legislation, encourage deliberation, and require coalitions broad enough to satisfy both population and state interests',
    wrong: [
      ['Allow each chamber to pass identical bills without coordination', 'Bicameralism requires identical text from both chambers, which forces coordination, not its absence.', 'Both chambers must agree on the same text.'],
      ['Permit the Supreme Court to act as a third legislative chamber', 'The Court is not a legislative chamber; bicameralism describes the two-house Congress, not judicial lawmaking.', 'The Court is not in the legislative process.'],
      ['Eliminate the need for presidential signature on legislation', 'Presentment to the president remains required regardless of bicameralism; the two are separate features.', 'Bicameralism does not displace presentment.'],
    ],
    lesson: 'Bicameralism slows legislation and forces deliberation, requiring coalitions across both a population-based House and an equal-state Senate. It was the Great Compromise\'s structural answer to representation disputes.',
  },
  {
    id: 4360139,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Anti-Federalist judiciary',
    prompt: 'Anti-Federalists writing as Brutus expressed particular alarm at the proposed federal judiciary because they feared it would:',
    correct: 'Expand federal power through broad constitutional interpretation while remaining insulated from political accountability',
    wrong: [
      ['Refuse to hear cases involving federal officers', 'Brutus worried about expansive jurisdiction, not refusal to act; the concern was over-reach, not abdication.', 'Brutus feared too much judicial activity, not too little.'],
      ['Apply only state law to federal disputes, ignoring the Constitution', 'Brutus feared federal courts would apply federal law expansively, displacing state authority, not that they would ignore the Constitution.', 'Brutus feared more federal interpretation, not less.'],
      ['Lack any power to interpret the meaning of the Constitution', 'Brutus actually warned that federal judges would exercise broad interpretive power without effective checks.', 'Brutus feared broad interpretive power, not its absence.'],
    ],
    lesson: 'Brutus 11 and related essays warned that federal judges, with life tenure and broad constitutional interpretive power, would steadily expand federal authority at the expense of the states. Federalist 78 is the direct Federalist reply.',
  },
  {
    id: 4360140,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Document pairing skill',
    prompt: 'A student argues that the Constitution\'s design assumes officials will pursue self-interest and that the structure must channel that self-interest into mutual restraint. Which two required documents most directly support that argument?',
    correct: 'Federalist 10 (faction is sown in the nature of man) and Federalist 51 (ambition must counteract ambition)',
    wrong: [
      ['Declaration of Independence and Letter from Birmingham Jail', 'Both are foundational documents but address natural rights and civil disobedience, not the realistic-incentives premise of institutional design.', 'Look for documents about faction and ambition.'],
      ['Federalist 70 and Brutus 1', 'Federalist 70 defends executive energy and Brutus 1 fears consolidation; together they do not specifically support the realistic-incentives institutional argument the prompt describes.', 'Match the documents to the realistic-incentives premise.'],
      ['Articles of Confederation and the U.S. Constitution', 'The Articles and the Constitution are governing documents, not the analytical defenses of the design the prompt asks about.', 'Match arguments, not governing texts.'],
    ],
    lesson: 'Federalist 10 (faction as inevitable) and Federalist 51 (ambition counteracting ambition) jointly ground the realistic-incentives premise of constitutional design. They are the natural pair for that argument on AP document-comparison items.',
  },
  {
    id: 4360141,
    chapter: 'Chapter 1: Constitutional Foundations and Democratic Ideals',
    title: 'Synthesis: ratification debate',
    prompt: 'A historian summarizes the ratification debate by writing that Federalists and Anti-Federalists disagreed less about ends than about which constitutional structure best secured those ends. Which pairing best illustrates that claim?',
    correct: 'Both sides sought liberty and self-government, but Federalists trusted an extended republic with checks and balances while Anti-Federalists trusted small republics with closer accountability and explicit rights protections',
    wrong: [
      ['Both sides sought monarchy, but disagreed about whether the king should be elected', 'Neither side sought monarchy; both worked within republican premises.', 'Republican ends, not monarchical.'],
      ['Federalists sought to abolish the states entirely while Anti-Federalists sought to abolish Congress', 'Federalists defended a federal system that preserved the states; Anti-Federalists did not want to abolish Congress.', 'Neither side sought to abolish a major institution.'],
      ['Both sides rejected popular sovereignty and grounded government in monarchy', 'Both sides accepted popular sovereignty; their disagreement concerned the structure that best protected it.', 'Both accept popular sovereignty.'],
    ],
    lesson: 'The ratification debate was a structural disagreement within a shared republican framework: extended vs small republic, broad federal authority vs explicit state protections, faith in structural checks vs demand for written rights. The Bill of Rights was the political price of resolution.',
  },
])
