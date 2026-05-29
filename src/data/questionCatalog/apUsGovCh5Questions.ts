import type { Question } from './types'
import { makeQuestionBank } from './base'

// -----------------------------------------------------------------------
// AP US Government — Chapter 5: The Courts and Constitutional Interpretation
// Extension bank (47 questions, IDs 4360500-4360546) layered on top of
// the three existing Chapter 5 items in civicPoliticsQuestions.ts
// (482004 Marbury, 482023 Federalist 78, 4330050 Checks on the Court).
//
// Coverage: required cases (Marbury, Brown, Gideon, Engel, Tinker, NYT v US,
// Schenck, Citizens United, McDonald, Heller, Roe, Dobbs); Federalist 78
// stimulus + lessons; federal court structure (district / circuit / SCOTUS);
// Article III jurisdiction (federal question, diversity, case-or-controversy,
// standing); judicial selection and confirmation; interpretive methods
// (originalism, textualism, structuralism, living constitution, common law);
// stare decisis and overruling (Brown/Plessy, Dobbs/Roe, Lawrence/Bowers);
// cert process (rule of four, ~70 per term, shadow docket); opinion types;
// political-question doctrine and justiciability (ripeness, mootness,
// standing, advisory-opinion bar); court-curbing tools by Congress and the
// president; activism vs restraint; Marshall / Warren / Roberts court
// signatures; Bush v Gore.
// -----------------------------------------------------------------------

export const apUsGovCh5Questions: Question[] = makeQuestionBank('AP', [
  // ---------------------------------------------------------------------
  // Block A: Foundations — Marbury, Federalist 78, judicial review limits
  // ---------------------------------------------------------------------
  {
    id: 4360500,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Marbury text excerpt',
    prompt: 'Chief Justice Marshall wrote: "It is emphatically the province and duty of the judicial department to say what the law is. Those who apply the rule to particular cases, must of necessity expound and interpret that rule." Which inference about the Court\'s constitutional role is best supported by this passage?',
    correct: 'Interpreting the Constitution in cases properly before it is a judicial function inherent in deciding the case',
    wrong: [
      ['Congress may overturn any Court interpretation by a simple majority vote', 'Marshall is locating the interpretive function in the judiciary; ordinary statutes cannot override a constitutional ruling.', 'The passage assigns the interpretive task to courts, not to Congress.'],
      ['The Court is free to issue advisory opinions whenever it identifies a legal question', 'Marshall ties the interpretive function to "particular cases" being decided; advisory opinions remain barred under Article III.', 'Notice the case-bound language.'],
      ['Judicial review is expressly granted to the Court by Article III itself', 'Article III does not use the phrase "judicial review"; Marshall infers the power from the judicial duty to decide cases under a written constitution.', 'Marbury infers the power; it is not textually spelled out.'],
    ],
    lesson: 'Marbury v. Madison (1803) grounds judicial review in the case-deciding function: where a statute conflicts with the Constitution, the Court applies the higher law because deciding the case requires it.',
  },
  {
    id: 4360501,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Federalist 78 least dangerous',
    prompt: 'Hamilton in Federalist 78 calls the judiciary "the least dangerous" branch because it has "neither force nor will, but merely judgment." Which structural feature most directly follows from this characterization?',
    correct: 'Courts must rely on the political branches to enforce their judgments, which constrains how far judicial review can practically reach',
    wrong: [
      ['Courts may direct the military to enforce any decision they issue', 'Hamilton stresses that the judiciary has no force of its own; enforcement depends on the executive.', 'Judgment, not force.'],
      ['Judges should be elected to keep them accountable to public will', 'Hamilton uses the "least dangerous" framing to defend life tenure and insulation from electoral pressure, not to argue for elections.', 'Independence is the point of the argument.'],
      ['The judiciary should write statutes when Congress is slow to act', 'Hamilton distinguishes judgment from will; lawmaking is the legislature\'s province in his framework.', 'Will belongs to the political branches.'],
    ],
    lesson: 'Federalist 78\'s "least dangerous branch" claim supports life tenure and judicial independence, and also explains why the Court\'s power is bounded by reliance on the political branches for enforcement.',
  },
  {
    id: 4360502,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Life tenure rationale',
    prompt: 'Article III provides that federal judges "shall hold their Offices during good Behaviour." Federalist 78 defends this arrangement primarily because it:',
    correct: 'Insulates judges from political reprisal so they can enforce constitutional limits against momentary majorities',
    wrong: [
      ['Guarantees that judges will agree with the sitting president on policy questions', 'Life tenure removes ongoing presidential leverage; it does not align judges with any one administration.', 'The point is insulation from political pressure, including the president\'s.'],
      ['Eliminates any check on judges, since they can never be removed', 'Judges remain subject to impeachment for "high Crimes and Misdemeanors"; "good behavior" is not absolute immunity.', 'Impeachment is the constitutional check.'],
      ['Allows judges to set their own salaries to whatever level they prefer', 'Article III bars salary reductions during a judge\'s tenure but does not let judges set their own pay.', 'Look at the independence rationale, not compensation.'],
    ],
    lesson: 'Article III "good behavior" tenure plus the salary-protection clause are the structural backbone of judicial independence Federalist 78 defends. Impeachment, used rarely, remains the constitutional check.',
  },
  {
    id: 4360503,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Judicial review not in text',
    prompt: 'A student claims that judicial review is "spelled out in Article III, Section 1." The most accurate response is that judicial review:',
    correct: 'Is not explicitly mentioned in the constitutional text and was established by Marbury v. Madison as inherent in the judicial function',
    wrong: [
      ['Was created by the Judiciary Act of 1789 and may be repealed by ordinary statute', 'The Judiciary Act structured the federal court system but did not create judicial review; Marbury actually invalidated a Judiciary Act provision.', 'Judicial review survives statutory change because it is constitutional in source.'],
      ['Appears in the Bill of Rights as a protection against unconstitutional laws', 'No Bill of Rights provision establishes judicial review; the doctrine emerges from Marbury, not the first ten amendments.', 'Wrong constitutional location.'],
      ['Was added to the Constitution by the Fourteenth Amendment after the Civil War', 'The Fourteenth Amendment is about citizenship, due process, and equal protection; it did not introduce judicial review, which predates it by more than sixty years.', 'Reconstruction amendments did not create this power.'],
    ],
    lesson: 'Judicial review is not in the constitutional text. Marbury (1803) inferred it from Article III\'s judicial-power vesting and the supremacy of a written Constitution. This is a heavily tested AP misconception.',
  },
  {
    id: 4360504,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Judicial review scope',
    prompt: 'Judicial review under Marbury allows federal courts to invalidate actions by:',
    correct: 'Federal and state legislative or executive actors when those actions conflict with the Constitution',
    wrong: [
      ['Only Congress, because Marbury involved a federal statute', 'Marbury concerned a federal statute, but the doctrine has since been applied to state laws and to executive actions at both levels.', 'The scope is broader than the original facts.'],
      ['Only state governments, leaving federal action immune from judicial review', 'The doctrine reaches federal action; Marbury itself struck down a section of the Judiciary Act of 1789.', 'Federal action is squarely within reach.'],
      ['Only private parties whose contracts violate the Constitution', 'Judicial review polices government actions against the Constitution; private contracts raise different doctrines (Contracts Clause, common law).', 'It is a check on government, not on private parties directly.'],
    ],
    lesson: 'Modern judicial review reaches federal statutes, federal executive actions, state laws, and state executive actions whenever they conflict with the Constitution. The state-action reach was extended through cases like Fletcher v. Peck (1810) and Martin v. Hunter\'s Lessee (1816).',
  },

  // ---------------------------------------------------------------------
  // Block B: Federal court structure
  // ---------------------------------------------------------------------
  {
    id: 4360505,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Three-tier structure',
    prompt: 'The federal court system as currently organized consists of:',
    correct: '94 district courts at the trial level, 13 circuit courts of appeals at the intermediate level, and the Supreme Court at the top',
    wrong: [
      ['50 district courts (one per state), 12 courts of appeals, and the Supreme Court', 'There are 94 district courts, not 50; some states contain multiple districts, and territories add several more.', 'Districts are subdivided within larger states.'],
      ['A single nationwide trial court and the Supreme Court only', 'Federal trial work is spread across 94 district courts; an intermediate appellate layer also sits between trial and Supreme Court review.', 'Three tiers, not two.'],
      ['District courts, state supreme courts, and the federal Supreme Court', 'State supreme courts are part of the state system; they are not a tier of the federal judiciary, though SCOTUS may review their decisions on federal questions.', 'Federal and state systems are parallel, not stacked.'],
    ],
    lesson: 'Article III creates the Supreme Court directly; Congress created the district and circuit courts under its Article III, Section 1 power to "ordain and establish" inferior courts. The 13 circuits include 11 numbered regional circuits, the DC Circuit, and the Federal Circuit.',
  },
  {
    id: 4360506,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Federal Circuit jurisdiction',
    prompt: 'The Court of Appeals for the Federal Circuit differs from the other twelve federal circuits because it:',
    correct: 'Has nationwide jurisdiction over specialized subject-matter appeals (such as patent cases and claims against the federal government)',
    wrong: [
      ['Hears appeals only from the District of Columbia', 'That role is served by the DC Circuit; the Federal Circuit is a separate, subject-matter court with nationwide reach.', 'The DC Circuit and the Federal Circuit are two different courts.'],
      ['Is composed entirely of Supreme Court justices sitting by designation', 'The Federal Circuit has its own life-tenured judges; justices do not staff it.', 'It is an Article III appellate court in its own right.'],
      ['Reviews state supreme court decisions on questions of state law', 'Federal appellate courts do not review state-law decisions of state supreme courts; SCOTUS may review them only on questions of federal law.', 'State-law questions belong to the state system.'],
    ],
    lesson: 'The Federal Circuit hears appeals nationwide in defined subject areas — most prominently patent law, international trade, and certain claims against the United States — while the other 12 circuits hear appeals from geographically defined districts.',
  },
  {
    id: 4360507,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'District court role',
    prompt: 'Federal district courts are best described as the:',
    correct: 'Trial courts of general jurisdiction in the federal system, where evidence is heard and findings of fact are made',
    wrong: [
      ['Highest appellate courts in the federal system', 'District courts sit at the bottom of the three-tier federal system; the Supreme Court is the highest.', 'They are trial-level, not top-of-system.'],
      ['Courts that review state supreme court decisions on state-law questions', 'District courts do not review state supreme court decisions; that role belongs to SCOTUS for federal questions only.', 'District courts begin federal cases, they do not review state courts.'],
      ['Specialty courts that hear only patent and international-trade disputes', 'Those subject-matter areas are routed to the Federal Circuit on appeal; district courts handle general federal civil and criminal trial work.', 'General trial jurisdiction is the defining feature.'],
    ],
    lesson: 'Each of the 94 district courts is a federal trial court with general subject-matter jurisdiction over federal-question and diversity cases. The factual record built at the district court controls appellate review.',
  },
  {
    id: 4360508,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Original vs appellate',
    prompt: 'A foreign ambassador is sued for conduct in his official capacity. Which court has original jurisdiction?',
    correct: 'The Supreme Court of the United States, because Article III gives it original jurisdiction in cases affecting ambassadors',
    wrong: [
      ['The federal district court in the ambassador\'s state of residence', 'Article III places cases involving ambassadors within SCOTUS original jurisdiction; district courts do not start such cases by default.', 'The Constitution carves out original jurisdiction for these cases.'],
      ['The state court of general jurisdiction where the conduct occurred', 'Cases affecting ambassadors are within SCOTUS original jurisdiction under Article III and statutory implementation, not the state system.', 'State courts do not host this category by default.'],
      ['Any circuit court of appeals chosen by the plaintiff', 'Circuit courts are appellate by nature; they do not exercise original jurisdiction even when a case might otherwise reach the Supreme Court.', 'Appellate courts review; they do not start cases.'],
    ],
    lesson: 'Article III, Section 2 gives the Supreme Court original jurisdiction in cases affecting ambassadors, public ministers, consuls, and cases where a state is a party. Almost all other SCOTUS cases come on appellate jurisdiction.',
  },
  {
    id: 4360509,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Most cases appellate',
    prompt: 'Of the cases the Supreme Court decides on the merits each term, the overwhelming majority arrive through:',
    correct: 'Appellate jurisdiction, almost always by writ of certiorari from lower federal courts or state supreme courts',
    wrong: [
      ['Original jurisdiction, with the Court conducting trials and finding facts itself', 'Original jurisdiction cases are rare and limited (mostly state-vs-state disputes); the bulk of the docket is appellate.', 'The Court is not primarily a trial court.'],
      ['Direct petitions from private citizens raising constitutional grievances', 'Citizens cannot bypass lower courts; cases must percolate up and then be granted cert.', 'There is no individual right to a SCOTUS hearing.'],
      ['Mandatory appeals from federal district courts in every constitutional case', 'Mandatory appellate jurisdiction has been almost entirely eliminated by statute; the Court chooses its docket through cert.', 'Cert is discretionary, not mandatory.'],
    ],
    lesson: 'Since the Judiciary Act of 1925 and subsequent reforms, SCOTUS controls its docket through discretionary review (cert). Mandatory appeals exist only in a narrow class of cases (e.g., certain three-judge district court rulings).',
  },

  // ---------------------------------------------------------------------
  // Block C: Article III jurisdiction, case-or-controversy, standing
  // ---------------------------------------------------------------------
  {
    id: 4360510,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Federal question jurisdiction',
    prompt: 'A plaintiff sues in federal district court claiming her employer violated the federal Americans with Disabilities Act. The most direct basis for federal jurisdiction is:',
    correct: 'Federal-question jurisdiction, because the claim arises under federal law',
    wrong: [
      ['Diversity jurisdiction, because the plaintiff and defendant disagree about facts', 'Diversity jurisdiction depends on the parties being citizens of different states and the amount in controversy, not on factual disagreement.', 'Diversity is about citizenship, not disputed facts.'],
      ['Original jurisdiction of the Supreme Court, because federal statutes are involved', 'Routine federal-question cases start in district court, not in SCOTUS original jurisdiction.', 'Original jurisdiction is narrow.'],
      ['Supplemental jurisdiction, because state law is also implicated', 'Supplemental jurisdiction is a way to add closely related state claims to an existing federal case; it does not by itself create the federal hook.', 'There must already be a federal anchor.'],
    ],
    lesson: 'Federal-question jurisdiction (28 U.S.C. § 1331) reaches civil actions arising under the Constitution, federal statutes, or treaties. Diversity jurisdiction (§ 1332) is a parallel route based on the parties\' state citizenship.',
  },
  {
    id: 4360511,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Diversity jurisdiction',
    prompt: 'A citizen of California sues a citizen of Texas in federal court for breach of contract, with $200,000 at stake. The contract is governed entirely by state law. The most accurate jurisdictional basis is:',
    correct: 'Diversity jurisdiction, because the parties are citizens of different states and the amount in controversy exceeds $75,000',
    wrong: [
      ['Federal-question jurisdiction, because all federal courts hear contract cases', 'Federal courts do not have general jurisdiction over contract disputes; a state-law contract claim needs a separate jurisdictional hook like diversity.', 'Contract law is generally state law.'],
      ['Supreme Court original jurisdiction, because two state citizens are involved', 'Two private state citizens do not trigger original jurisdiction; that category covers states as parties, ambassadors, and similar.', 'Citizens of different states do not get to start at SCOTUS.'],
      ['Pendent jurisdiction, because the case implicates two states\' laws', 'Pendent (now supplemental) jurisdiction attaches related claims to an existing federal case; it does not establish jurisdiction on its own.', 'Diversity is the direct hook here.'],
    ],
    lesson: 'Diversity jurisdiction under 28 U.S.C. § 1332 requires complete diversity of citizenship and an amount in controversy over $75,000. It exists to provide a neutral federal forum for state-law claims between citizens of different states.',
  },
  {
    id: 4360512,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Case or controversy',
    prompt: 'Article III limits federal courts to deciding actual "Cases" and "Controversies." This requirement most directly forbids federal courts from:',
    correct: 'Issuing advisory opinions on legal questions without an actual dispute between adverse parties',
    wrong: [
      ['Hearing any case that involves a constitutional question', 'Constitutional questions are routinely heard; the limit is that they must arise in a real dispute, not in the abstract.', 'The limit is about adversity, not subject matter.'],
      ['Resolving disputes between citizens of the same state in any circumstance', 'Same-state citizens may still litigate in federal court on federal-question or other grounds; the case-or-controversy rule is about ripeness and adversity, not citizenship alone.', 'Citizenship is a separate doctrine.'],
      ['Reviewing the constitutionality of state laws', 'State laws are reviewable when raised in a real case; the limit excludes hypothetical questions, not state-law subjects.', 'The bar is on advisory opinions, not on state-law cases.'],
    ],
    lesson: 'The Article III case-or-controversy requirement bars advisory opinions and underlies the justiciability doctrines: standing, ripeness, mootness, and the political-question doctrine. Federal courts decide concrete disputes, not abstract questions.',
  },
  {
    id: 4360513,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Standing requirements',
    prompt: 'To establish constitutional standing under Article III, a plaintiff must show:',
    correct: 'A concrete and particularized injury in fact, fairly traceable to the defendant, that is likely redressable by a favorable decision',
    wrong: [
      ['Only that the plaintiff disagrees with the policy being challenged', 'Ideological disagreement is not standing; the plaintiff needs a personal, concrete injury.', 'Generalized grievance is not enough.'],
      ['Only that the plaintiff is a U.S. citizen and a registered voter', 'Citizenship and voter status do not by themselves create standing; the plaintiff still needs injury, causation, and redressability.', 'Civic status is not a stand-in for injury.'],
      ['That the plaintiff has prevailed in a prior case raising the same issue', 'Prior victories do not establish standing for new disputes; each case must satisfy the requirements on its own facts.', 'Standing is case-specific.'],
    ],
    lesson: 'Standing has three elements (injury in fact, causation, redressability) drawn from Article III\'s case-or-controversy requirement. It is a threshold question separate from the merits — losing on standing does not mean losing on the underlying claim.',
  },
  {
    id: 4360514,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Standing vs merits',
    prompt: 'A federal court dismisses a constitutional challenge to a regulation, holding that the plaintiff has not shown a concrete injury. A student concludes that "the court ruled the regulation is constitutional." The student\'s conclusion is:',
    correct: 'Incorrect, because dismissal for lack of standing does not decide the constitutional merits',
    wrong: [
      ['Correct, because any dismissal automatically validates the challenged law', 'Dismissals can occur on procedural or jurisdictional grounds without reaching the merits; the law\'s constitutionality remains an open question.', 'Threshold dismissals do not adjudicate the merits.'],
      ['Correct, because federal courts only dismiss cases when the plaintiff is wrong on the law', 'Federal courts routinely dismiss cases for jurisdictional reasons unrelated to whether the plaintiff would have won on the merits.', 'Jurisdictional dismissals are common and merits-neutral.'],
      ['Incorrect only if the plaintiff was not a U.S. citizen', 'Citizenship is irrelevant to whether a standing dismissal decides the merits; the conclusion is wrong as a matter of doctrine, not identity.', 'Conflating standing with merits is the core error.'],
    ],
    lesson: 'Conflating standing with merits is among the most heavily tested AP misconceptions. A standing dismissal means the court cannot reach the merits in this case from this plaintiff; the underlying law remains untested.',
  },

  // ---------------------------------------------------------------------
  // Block D: Judicial selection and confirmation
  // ---------------------------------------------------------------------
  {
    id: 4360515,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Appointments clause',
    prompt: 'Federal judges are placed in office by which constitutional process?',
    correct: 'The president nominates and the Senate confirms by majority vote, after Judiciary Committee hearings',
    wrong: [
      ['The Senate nominates and the president confirms, with the House voting last', 'The Appointments Clause assigns nomination to the president and confirmation to the Senate; the House has no role in confirming judges.', 'House is excluded from judicial confirmations.'],
      ['Federal judges are elected in nationwide elections every six years', 'Article III federal judges are appointed, not elected; "good behavior" tenure replaces electoral accountability.', 'Federal judges do not stand for election.'],
      ['State legislatures nominate federal judges; the president signs', 'States have no formal role in selecting Article III judges; the choice is presidential, confirmed by the federal Senate.', 'The Constitution does not give states this role.'],
    ],
    lesson: 'Article II, Section 2 (the Appointments Clause) gives the president nomination authority and the Senate the advice-and-consent role. Senate Judiciary Committee hearings precede a confirmation vote by the full Senate.',
  },
  {
    id: 4360516,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Senatorial courtesy',
    prompt: 'When a federal district court seat opens, presidents historically consult with home-state senators before nominating. This convention is known as:',
    correct: 'Senatorial courtesy, an informal norm that gives home-state senators substantial influence over district-court nominations within their state',
    wrong: [
      ['The advice and consent power, which gives the Senate sole authority to nominate judges', 'Advice and consent describes the Senate\'s confirmation role; nomination remains with the president, with senatorial courtesy operating informally for district seats.', 'Nomination is presidential; advice and consent is confirmation.'],
      ['Recess appointment, which allows judges to be seated without consultation', 'Recess appointments bypass the confirmation process altogether and have nothing to do with home-state senator consultation.', 'These are different procedural channels.'],
      ['The blue slip, which is a constitutional requirement of approval from both senators', 'The "blue slip" is a related Senate Judiciary Committee custom, not a constitutional requirement; its strength has varied over time.', 'It is a norm, not a constitutional rule.'],
    ],
    lesson: 'Senatorial courtesy is most consequential for district-court nominations and weakens at the circuit-court level and at the Supreme Court, where the president has freer hand. The "blue slip" is the practical mechanism through which senatorial courtesy operates in Senate Judiciary Committee practice.',
  },
  {
    id: 4360517,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Confirmation steps',
    prompt: 'Place the following Supreme Court confirmation steps in correct order: (1) Senate Judiciary Committee hearings, (2) presidential nomination, (3) full Senate floor vote, (4) judicial commission and oath.',
    correct: '2 → 1 → 3 → 4',
    wrong: [
      ['1 → 2 → 3 → 4', 'Hearings cannot occur before there is a nominee; the president must first send a nomination to the Senate.', 'Nomination precedes hearings.'],
      ['2 → 3 → 1 → 4', 'The floor vote follows committee hearings, not the other way around; committee work shapes the floor record.', 'Committee precedes floor.'],
      ['3 → 1 → 2 → 4', 'A floor vote without a nominee or hearings is not how the process works; this sequence inverts the entire procedure.', 'The Senate cannot vote on a person not yet nominated.'],
    ],
    lesson: 'The Supreme Court confirmation sequence is: presidential nomination → Senate Judiciary Committee hearings → full Senate vote (simple majority since the 2017 elimination of the SCOTUS filibuster) → commission and judicial oath.',
  },
  {
    id: 4360518,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Good behavior tenure',
    prompt: 'A senator argues that Supreme Court justices should serve fixed eighteen-year terms instead of life. Under current constitutional rules, which change would actually be required?',
    correct: 'A constitutional amendment under Article V, because life tenure is set by Article III itself',
    wrong: [
      ['A simple statute passed by Congress with a majority vote', 'Article III "good behavior" tenure is a constitutional command; ordinary legislation cannot override it.', 'Statutes cannot rewrite Article III.'],
      ['An executive order from the president', 'Executive orders cannot amend the Constitution; tenure rules are textually entrenched in Article III.', 'The president cannot unilaterally restructure the Court.'],
      ['A Supreme Court ruling reinterpreting "good behavior" as a fixed term', 'A Court ruling cannot rewrite the constitutional text by judicial fiat; structural change of this kind requires amendment.', 'Interpretation cannot rewrite explicit text.'],
    ],
    lesson: 'Although term-limit proposals are debated, judicial tenure during "good behavior" is set in Article III, and most scholars agree only a constitutional amendment could impose fixed terms on sitting Article III judges. This is a structural-versus-statutory distinction the AP tests directly.',
  },
  {
    id: 4360519,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Impeaching judges',
    prompt: 'The Constitution permits the removal of federal judges through which mechanism?',
    correct: 'Impeachment by the House and conviction by two-thirds of the Senate for high crimes and misdemeanors',
    wrong: [
      ['A simple majority recall election in the judge\'s home district', 'Article III judges are not subject to recall; they are removable only through impeachment by Congress.', 'Recall is a state-court device, not federal.'],
      ['Presidential dismissal by executive order', 'The president cannot fire Article III judges; that is the entire point of life tenure during good behavior.', 'Executive removal is not available.'],
      ['Senate vote of no confidence, by simple majority', 'There is no constitutional "vote of no confidence" mechanism in the U.S. system; impeachment is the constitutional path.', 'The U.S. system does not use no-confidence votes.'],
    ],
    lesson: 'Article I gives the House sole power of impeachment and the Senate sole power to try impeachments. Conviction requires two-thirds of senators present. Of fifteen federal judges impeached, eight have been convicted by the Senate.',
  },

  // ---------------------------------------------------------------------
  // Block E: Interpretive methods
  // ---------------------------------------------------------------------
  {
    id: 4360520,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Originalism defined',
    prompt: 'A justice argues that constitutional text should be interpreted according to the meaning it had when ratified. This interpretive method is best described as:',
    correct: 'Originalism, which anchors interpretation in the text\'s original public meaning at ratification',
    wrong: [
      ['Living constitutionalism, which permits meaning to evolve with social change', 'That is the doctrine the originalist position is set against; it lets meaning shift over time, not fix it at ratification.', 'These are opposing methods.'],
      ['Structuralism, which infers meaning from the architecture of the Constitution as a whole', 'Structuralism reads provisions in light of the overall design; it is not focused on ratification-era meaning specifically.', 'Different method, different anchor.'],
      ['Common-law method, which builds doctrine case by case', 'The common-law method emphasizes incremental judicial development; it does not anchor meaning at ratification.', 'Different theory of interpretation.'],
    ],
    lesson: 'Modern originalism emphasizes the original public meaning of constitutional text — what an ordinary reader would have understood the words to mean at ratification — rather than the framers\' subjective intent, which is a related but distinct emphasis.',
  },
  {
    id: 4360521,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Textualism vs originalism',
    prompt: 'Textualism and originalism overlap but are not identical because:',
    correct: 'Textualism focuses on the meaning of the words used; originalism additionally anchors that meaning to the time of ratification',
    wrong: [
      ['Textualism allows judges to import any policy preference into the text', 'Textualism explicitly resists policy importation; that critique misstates the method.', 'Textualism constrains, not licenses, policy reading.'],
      ['Originalism rejects the constitutional text in favor of historical practice', 'Originalism takes the text as the starting point and reads it for its original public meaning; it does not reject the text.', 'Text is central to originalism.'],
      ['Textualism is used only for statutes, never for the Constitution', 'Textualism is applied to both statutory and constitutional interpretation; the methods overlap but are not domain-restricted.', 'Both domains use textualist tools.'],
    ],
    lesson: 'Textualism centers the words on the page; originalism centers those words at a particular moment in history. Many justices identify with both, but the two methods can diverge — for example, when text is clear but ratification-era practice cut a different way.',
  },
  {
    id: 4360522,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Living constitution',
    prompt: 'A justice writes that "the Constitution\'s broad phrases were designed to accommodate changing social conditions, so their meaning may evolve as society evolves." This view best illustrates:',
    correct: 'A living-constitutionalist approach to interpretation',
    wrong: [
      ['Strict textualism, which focuses on fixed dictionary meanings', 'Textualism resists evolution of meaning; this passage embraces evolution.', 'Opposite approach.'],
      ['Pure originalism, which fixes meaning at ratification', 'Originalism rejects the very claim this justice is making.', 'Opposite approach.'],
      ['Justiciability doctrine, which limits cases courts may hear', 'Justiciability is about which cases reach courts at all; it is not a theory of constitutional meaning.', 'Different category of doctrine.'],
    ],
    lesson: 'The living-constitution view holds that broad language (e.g., "cruel and unusual," "due process," "unreasonable") was intentionally pitched at a level of generality that lets meaning develop. Originalists answer that this collapses interpretation into policymaking.',
  },
  {
    id: 4360523,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Structuralism',
    prompt: 'A judge writes that the limits on executive privilege "follow from the overall design of separated powers and the necessity that the political branches remain accountable to one another." This reasoning best illustrates:',
    correct: 'Structuralism, which infers meaning from the Constitution\'s overall architecture',
    wrong: [
      ['Strict textualism, because the judge quoted specific clauses', 'No specific clause text was quoted; the judge reasoned from constitutional architecture.', 'The argument is structural, not textual.'],
      ['Originalism, because the judge invoked the framers\' personal beliefs', 'No reference to ratification-era meaning or framer intent is made; structure of the document is the basis.', 'No historical anchor was used.'],
      ['Stare decisis, because the judge cited prior cases', 'No prior cases were cited in the passage; the reasoning is from constitutional structure, not precedent.', 'Different interpretive resource.'],
    ],
    lesson: 'Structuralist reasoning draws inferences from how the Constitution is built — separation of powers, federalism, bicameralism, the Take Care Clause — rather than from any one clause read in isolation. Justice Charles Black\'s "Structure and Relationship" is the classic articulation.',
  },
  {
    id: 4360524,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Common-law method',
    prompt: 'A justice argues that constitutional doctrine should develop incrementally through case-by-case adjudication, with each ruling shaping the next. This approach is best described as:',
    correct: 'The common-law method of constitutional interpretation, in which doctrine accretes through precedent',
    wrong: [
      ['Originalism, which freezes meaning at ratification', 'The common-law method embraces incremental change; originalism resists it.', 'Opposite emphases.'],
      ['Living constitutionalism, which permits sudden judicial revision based on present values', 'Living constitutionalism is broader; the common-law method is specifically about incremental precedent-building, not present-day value updating.', 'Common law is gradualist by method.'],
      ['Structuralism, which infers meaning from constitutional architecture', 'Structuralism reasons from design; the common-law method reasons from accumulated cases.', 'Different interpretive resource.'],
    ],
    lesson: 'David Strauss\'s "The Living Constitution" defends a common-law approach where constitutional meaning develops through case-by-case reasoning much like common-law fields (torts, property). It overlaps with living constitutionalism but emphasizes precedent rather than evolving values.',
  },

  // ---------------------------------------------------------------------
  // Block F: Stare decisis and overruling
  // ---------------------------------------------------------------------
  {
    id: 4360525,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Stare decisis',
    prompt: 'The doctrine of stare decisis instructs courts to:',
    correct: 'Follow prior decisions on the same legal question absent special justification to depart from them',
    wrong: [
      ['Always overturn prior decisions when a new majority disagrees', 'Stare decisis runs the other way: it presumes adherence to precedent and asks for special justification before overruling.', 'The presumption favors precedent.'],
      ['Defer to congressional opinions on what prior cases meant', 'Stare decisis is an internal judicial norm; it does not transfer interpretive authority to Congress.', 'It is a court-to-court rule.'],
      ['Apply prior decisions only when the parties agree they should govern', 'Precedent applies regardless of party agreement; it is a structural feature of common-law adjudication.', 'Party consent is not the test.'],
    ],
    lesson: 'Stare decisis ("let the decision stand") promotes stability, predictability, and equality of treatment. The Court overrules precedent only after considering factors such as workability, reliance interests, doctrinal consistency, and changes in factual understanding.',
  },
  {
    id: 4360526,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Brown overruling Plessy',
    prompt: 'Brown v. Board of Education (1954) is a paradigm case of constitutional overruling because it:',
    correct: 'Rejected the "separate but equal" doctrine of Plessy v. Ferguson as inconsistent with the Equal Protection Clause',
    wrong: [
      ['Left Plessy intact while creating a new exception for elementary schools', 'Brown rejected the underlying separate-but-equal doctrine itself, not merely an exception within it.', 'The doctrine was overruled, not narrowed.'],
      ['Repealed Plessy through a constitutional amendment passed by Congress', 'Courts do not pass amendments; Brown is a Supreme Court ruling, and Plessy was overruled through judicial reasoning rather than Article V action.', 'No amendment was required.'],
      ['Found that segregation was acceptable under the Commerce Clause but not Equal Protection', 'The case is grounded in equal protection of the Fourteenth Amendment, not in the Commerce Clause; segregation was rejected under the relevant constitutional standard.', 'The clause matters.'],
    ],
    lesson: 'Brown is the canonical illustration of constitutional overruling — a unanimous Court rejecting a precedent (Plessy, 1896) that had stood for 58 years. The reasoning relied on a combination of equal-protection principle and changed factual understanding of segregation\'s harms.',
  },
  {
    id: 4360527,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Dobbs and Roe',
    prompt: 'Dobbs v. Jackson Women\'s Health Organization (2022) is significant in part because it:',
    correct: 'Overruled Roe v. Wade and Planned Parenthood v. Casey, returning regulation of abortion to the states',
    wrong: [
      ['Reaffirmed Roe and extended its reasoning to new fact patterns', 'Dobbs did the opposite: it overruled Roe rather than extending it.', 'Direction of the holding matters.'],
      ['Held that Congress alone could regulate abortion under the Commerce Clause', 'Dobbs returned the question to state legislatures; it did not hold that Congress had exclusive authority.', 'The opposite assignment of authority.'],
      ['Was decided by constitutional amendment ratified by three-quarters of states', 'Dobbs is a judicial decision, not a constitutional amendment; no Article V process was used.', 'Court rulings and amendments are different mechanisms.'],
    ],
    lesson: 'Dobbs returned the abortion question to the political process at the state level. As a precedent question for the AP exam, the case illustrates both the mechanics of overruling and the political consequences of doing so. The bank treats Dobbs as comparison material, not as a required case under the current AP framework.',
  },
  {
    id: 4360528,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Lawrence and Bowers',
    prompt: 'Lawrence v. Texas (2003) overruled Bowers v. Hardwick (1986). This sequence illustrates that:',
    correct: 'The Court will sometimes overrule a precedent it concludes was wrongly decided and out of step with the constitutional principles it claimed to interpret',
    wrong: [
      ['Stare decisis is absolute and Bowers must therefore still be controlling law', 'Lawrence overruled Bowers; stare decisis is a presumption, not an absolute rule.', 'Presumption, not prohibition.'],
      ['Only constitutional amendments can ever change Supreme Court precedent', 'The Court can overrule its own precedent through later cases; amendment is not the only mechanism.', 'The Court can correct itself.'],
      ['Congress overruled Bowers by passing a statute', 'Bowers was a constitutional ruling; Congress cannot overrule constitutional rulings by ordinary statute. The Court itself overruled Bowers in Lawrence.', 'Constitutional rulings need a Court reversal or amendment.'],
    ],
    lesson: 'Lawrence v. Texas is a clean example of constitutional overruling on the basis that the prior precedent (Bowers) was wrongly reasoned and out of step with substantive due process and equal protection. Lawrence together with Brown and Dobbs forms a useful set for AP stare-decisis comparisons.',
  },

  // ---------------------------------------------------------------------
  // Block G: Cert process and opinion types
  // ---------------------------------------------------------------------
  {
    id: 4360529,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Rule of four',
    prompt: 'The "Rule of Four" refers to the practice that:',
    correct: 'The Supreme Court grants certiorari and hears a case if at least four of the nine justices vote to do so',
    wrong: [
      ['A case must be heard by at least four federal courts before reaching SCOTUS', 'There is no four-court requirement; the Court typically hears cases that have gone through one or more lower federal or state courts but no fixed minimum exists.', 'The rule is about justices, not lower courts.'],
      ['Decisions become binding only after four justices issue separate opinions', 'A binding majority requires five votes; concurrence count does not control bindingness.', 'Five, not four, makes a majority.'],
      ['Four justices must agree on every word of an opinion for it to issue', 'Justices can join opinions in part, concur, or dissent; "rule of four" governs cert grants, not opinion drafting.', 'Different stage of the process.'],
    ],
    lesson: 'The rule of four lets a minority of the Court control its docket — useful for ensuring that a four-justice bloc can force review of issues a five-justice majority might prefer to leave alone. It governs the cert stage; deciding the merits still requires five votes for a binding holding.',
  },
  {
    id: 4360530,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Cert numbers',
    prompt: 'In a typical recent term, the Supreme Court receives approximately how many cert petitions and decides how many cases on the merits?',
    correct: 'Roughly 7,000 petitions, with merits decisions issued in about 70 cases',
    wrong: [
      ['Roughly 700 petitions and 700 merits decisions', 'The Court receives several thousand petitions and grants a small fraction; merits decisions are far rarer than petitions.', 'The ratio is closer to 1 in 100.'],
      ['Roughly 70 petitions and 70 merits decisions', 'The petition pool is much larger than the merits docket; the Court denies the overwhelming majority of petitions filed.', 'Petitions vastly outnumber merits cases.'],
      ['Roughly 7,000 petitions and 7,000 merits decisions', 'The merits docket is far smaller than the petition pool; the Court cannot decide thousands of cases per term.', 'Most petitions are denied.'],
    ],
    lesson: 'The cert process is intensely selective: of roughly 7,000–8,000 petitions filed each term, the Court typically grants and decides on the merits about 60–80 cases. The Court uses cert grants to resolve circuit splits and important questions, not to correct every error below.',
  },
  {
    id: 4360531,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Shadow docket',
    prompt: 'The term "shadow docket" most accurately describes:',
    correct: 'Emergency and procedural orders the Court issues without full briefing or oral argument',
    wrong: [
      ['Cases the Court hears in secret with no public record', 'Shadow-docket orders are public; the term refers to the absence of full briefing and argument, not to secrecy.', 'Public, but procedurally lean.'],
      ['Cases brought against the federal judiciary itself', 'The shadow docket is about format and procedure, not about who is sued.', 'Format, not subject.'],
      ['Lower-court cases the Supreme Court has refused to hear', 'Denials of cert are public and routine; the shadow docket refers to active orders issued without merits procedure.', 'Action versus inaction.'],
    ],
    lesson: 'The "shadow docket" (a term popularized by Will Baude) refers to orders issued outside the regular merits docket — for example, emergency stays, injunctions pending appeal, and summary reversals. Critics argue these orders increasingly settle major legal questions without full briefing.',
  },
  {
    id: 4360532,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Majority opinion',
    prompt: 'A "majority opinion" of the Supreme Court is:',
    correct: 'The opinion joined by at least five justices and which states the binding holding of the Court',
    wrong: [
      ['Any opinion issued by the Court regardless of how many justices joined it', 'Plurality, concurring, and dissenting opinions are all issued by the Court but do not all constitute majority opinions.', 'Vote count determines bindingness.'],
      ['The opinion drafted first, regardless of which justices ultimately joined it', 'Drafting order is not the criterion; the criterion is whether five justices have signed on.', 'Five votes, not draft order.'],
      ['The opinion that receives the most public approval', 'Public reception does not determine which opinion controls; this is a question of votes inside the Court, not outside.', 'Internal vote count, not public opinion.'],
    ],
    lesson: 'A majority opinion is binding precedent. When fewer than five justices agree on a single rationale (even if five agree on the result), the Court issues a plurality opinion, and lower courts apply the narrowest grounds supporting the judgment (Marks v. United States).',
  },
  {
    id: 4360533,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Concurrence vs dissent',
    prompt: 'Justice X writes that she agrees with the Court\'s judgment in favor of the plaintiff, but for different reasons than the majority opinion gives. Her opinion is best described as:',
    correct: 'A concurrence (concur in the result), because she joins the outcome but not the reasoning',
    wrong: [
      ['A dissent, because she disagrees with at least part of the majority opinion', 'Dissents reject the judgment; her disagreement is only with the rationale, while she joins the outcome.', 'Result vs reasoning.'],
      ['A per curiam opinion, because it is written separately from the majority', 'Per curiam opinions are unsigned opinions of the Court, not separate writings by individual justices.', 'Different category of opinion.'],
      ['A plurality opinion, because she writes only for herself', 'Plurality opinions are opinions of multiple justices that fail to reach five; an opinion written for one is just a concurrence (or dissent), not a plurality.', 'Plurality requires multiple authors short of majority.'],
    ],
    lesson: 'Concurrences come in two flavors: concur in the result (agrees with outcome only) and concur in part / dissent in part (agrees with some sections, disagrees with others). Dissents reject the judgment outright. Per curiam ("by the court") opinions are unsigned, typically short, and issued on behalf of the Court.',
  },
  {
    id: 4360534,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Per curiam',
    prompt: 'A "per curiam" opinion is best described as:',
    correct: 'An unsigned opinion issued on behalf of the Court as a whole, often in routine or summary dispositions',
    wrong: [
      ['A signed dissenting opinion by a single justice', 'Dissents are signed; per curiam opinions are not.', 'Different format entirely.'],
      ['The longest opinion in a case, written by the most senior justice', 'Per curiam opinions are typically short and unsigned, not the longest in the case.', 'Length and authorship cut the other way.'],
      ['A lower-court ruling that the Supreme Court has affirmed without reading', 'Per curiam opinions are written and issued by the Supreme Court itself; they are not silent affirmances.', 'They are SCOTUS opinions, not lower-court rulings.'],
    ],
    lesson: 'Per curiam opinions are issued in the name of the Court collectively and unsigned. They are common for summary reversals and many shadow-docket orders, but have also been used for landmark rulings such as Bush v. Gore (2000).',
  },

  // ---------------------------------------------------------------------
  // Block H: Justiciability — political question, ripeness, mootness, advisory
  // ---------------------------------------------------------------------
  {
    id: 4360535,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Political question doctrine',
    prompt: 'A federal court declines to decide whether the president\'s recognition of a foreign government was prudent, holding that the question is committed to the political branches. This holding most directly invokes:',
    correct: 'The political-question doctrine, which counsels nonjusticiability when a question is constitutionally committed to a political branch',
    wrong: [
      ['Lack of subject-matter jurisdiction under diversity', 'Diversity jurisdiction concerns the citizenship of the parties; the political-question doctrine is about whether the question itself is judicially resolvable.', 'Different doctrine.'],
      ['Mootness, because foreign recognition is no longer relevant', 'Mootness asks whether the live controversy has dissolved; the foreign-recognition question remains live but is committed elsewhere.', 'Not a mootness problem.'],
      ['Failure to state a claim under federal procedural rules', 'Failure to state a claim is a merits-adjacent procedural rule; the political-question doctrine is a separate justiciability bar.', 'Different stage.'],
    ],
    lesson: 'Baker v. Carr (1962) listed six factors for political-question analysis, including textual commitment to a coordinate branch, lack of judicially manageable standards, and the impossibility of independent resolution without disrespecting other branches. Foreign affairs has been a classic political-question domain.',
  },
  {
    id: 4360536,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Baker v Carr factors',
    prompt: 'Which of the following is one of the factors Baker v. Carr identified as indicating a nonjusticiable political question?',
    correct: 'A textually demonstrable constitutional commitment of the issue to a coordinate political branch',
    wrong: [
      ['Disagreement among the justices about the merits', 'Internal disagreement does not make a question nonjusticiable; the Court resolves disputes despite internal disagreement.', 'Internal disagreement is normal, not jurisdictional.'],
      ['A finding that the plaintiff cannot afford counsel', 'Indigent plaintiffs have remedies (counsel under Gideon for criminal defendants; in forma pauperis in civil cases), but cost has nothing to do with the political-question doctrine.', 'Wrong doctrine.'],
      ['The plaintiff\'s political party affiliation', 'Party affiliation is constitutionally irrelevant to justiciability; the doctrine asks structural questions about the issue, not the litigant.', 'Affiliation is not a justiciability factor.'],
    ],
    lesson: 'Baker\'s six factors: textual commitment to another branch; lack of judicially manageable standards; impossibility of decision without an initial policy determination; impossibility of independent resolution; need for unquestioning adherence to a political decision already made; and potential for embarrassment from multifarious pronouncements.',
  },
  {
    id: 4360537,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Ripeness and mootness',
    prompt: 'Which of the following best distinguishes ripeness from mootness?',
    correct: 'Ripeness asks whether a controversy has matured enough to be decided; mootness asks whether it has dissolved before decision',
    wrong: [
      ['Ripeness applies only to civil cases; mootness applies only to criminal cases', 'Both doctrines apply across civil and criminal contexts; the distinction is timing, not subject area.', 'Wrong axis of distinction.'],
      ['Ripeness and mootness are the same doctrine under different names', 'They are distinct doctrines addressing different points on the case lifecycle (too early versus too late).', 'Different timing, different inquiries.'],
      ['Ripeness is about subject-matter jurisdiction; mootness is about standing', 'Both are species of justiciability under Article III; neither is the same as subject-matter jurisdiction or standing in particular.', 'Both are justiciability, distinct from each other and from standing.'],
    ],
    lesson: 'Ripeness avoids premature adjudication of contingent disputes; mootness avoids adjudication of disputes that have lost their live character. Both flow from Article III\'s case-or-controversy requirement, alongside standing and the political-question doctrine.',
  },
  {
    id: 4360538,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Advisory opinions barred',
    prompt: 'Federal courts decline to issue advisory opinions because:',
    correct: 'Article III\'s case-or-controversy requirement bars deciding hypothetical or abstract legal questions without concrete adverse parties',
    wrong: [
      ['Article II expressly forbids them in the appointments clause', 'The appointments clause is about staffing federal offices; the advisory-opinion bar comes from Article III\'s case-or-controversy clause.', 'Wrong article.'],
      ['Congress passed a statute in 1789 banning advisory opinions', 'The doctrine is constitutional, traceable to early practice (the Correspondence of the Justices, 1793) rather than to statute.', 'Constitutional source, not statutory.'],
      ['The Supreme Court could not handle the additional workload', 'Workload is not the doctrinal reason; the bar is structural, not pragmatic.', 'Constitutional architecture is the reason given.'],
    ],
    lesson: 'In 1793 the Justices declined to give President Washington advisory opinions on foreign-affairs questions, locating the refusal in Article III. The advisory-opinion bar is foundational to the entire justiciability framework — standing, ripeness, mootness, and the political-question doctrine all enforce it indirectly.',
  },

  // ---------------------------------------------------------------------
  // Block I: Court-curbing tools (Congress and President)
  // ---------------------------------------------------------------------
  {
    id: 4360539,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Jurisdiction stripping',
    prompt: 'Congress passes a statute removing federal-court jurisdiction over a particular category of cases. This action is best understood as an exercise of:',
    correct: 'Congressional power under Article III, Section 2 to make exceptions and regulations regarding the appellate jurisdiction of federal courts',
    wrong: [
      ['Article II, Section 3, the Take Care Clause', 'The Take Care Clause concerns presidential enforcement duties; jurisdiction-stripping is a congressional Article III power.', 'Wrong branch and article.'],
      ['The Necessary and Proper Clause alone, with no Article III component', 'The Necessary and Proper Clause is supportive but not the principal grant; Article III, Section 2 directly empowers Congress to regulate appellate jurisdiction.', 'Article III is the direct authority.'],
      ['The Bill of Rights, specifically the Ninth Amendment', 'The Ninth Amendment concerns unenumerated rights; jurisdiction is a structural Article III matter, not a Bill of Rights question.', 'Wrong constitutional location.'],
    ],
    lesson: 'Article III, Section 2 lets Congress make "Exceptions" and "Regulations" governing the Court\'s appellate jurisdiction. Ex parte McCardle (1869) upheld a jurisdiction-stripping statute. The doctrine\'s outer limits remain debated, particularly when stripping appears aimed at constitutional rights.',
  },
  {
    id: 4360540,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Court packing',
    prompt: 'A president proposes increasing the size of the Supreme Court from nine to thirteen justices. The constitutional source authorizing such a change is:',
    correct: 'A statute passed by Congress, because the Constitution does not fix the size of the Court',
    wrong: [
      ['An executive order, because the president oversees the federal judiciary', 'The president does not oversee Article III courts; the size of the Court is set by statute, not by executive order.', 'Wrong branch.'],
      ['A constitutional amendment, because the size of the Court is set in Article III', 'Article III does not fix the number of justices; the number has varied over time by statute.', 'The Constitution is silent on Court size.'],
      ['A unanimous vote of the sitting justices to expand their own bench', 'The justices do not set their own institutional size; that is a legislative matter.', 'Self-expansion is not a constitutional mechanism.'],
    ],
    lesson: 'The Constitution does not specify Court size. The number has ranged from six (1789) to ten (briefly during the Civil War). It has been nine since 1869. FDR\'s 1937 court-packing plan failed politically, illustrating that the formal statutory mechanism is constrained by informal norms.',
  },
  {
    id: 4360541,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Constitutional amendment override',
    prompt: 'Which of the following methods can ultimately override a Supreme Court ruling that interprets a constitutional provision?',
    correct: 'A constitutional amendment under Article V, ratified by three-quarters of states',
    wrong: [
      ['A simple-majority statute passed by Congress', 'Ordinary statutes cannot override constitutional rulings; they only revise statutory ones.', 'Constitutional ruling needs constitutional response.'],
      ['An executive order issued by the president', 'Executive orders cannot override Article V or constitutional rulings.', 'Executive cannot rewrite the Constitution.'],
      ['A vote of the Court itself reaffirming the prior ruling', 'A reaffirmation does not override the ruling; it entrenches it.', 'Reaffirmance is not override.'],
    ],
    lesson: 'Constitutional rulings can be changed only by (1) the Court overruling itself in a later case or (2) constitutional amendment. The Eleventh, Fourteenth, Sixteenth, and Twenty-Sixth Amendments are examples of amendments that responded directly to specific Supreme Court rulings.',
  },
  {
    id: 4360542,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Presidential checks on Court',
    prompt: 'Of the following, which is the most direct presidential check on the federal judiciary?',
    correct: 'The appointment power, through which the president shapes the bench over time by nominating judges',
    wrong: [
      ['The line-item veto, by which the president strikes individual judicial rulings', 'There is no line-item veto over judicial rulings; the line-item statutory veto itself was held unconstitutional in Clinton v. City of New York (1998).', 'No such power exists.'],
      ['The pardon power applied to invalidate judicial decisions', 'Pardons can erase criminal punishments but do not invalidate the rulings as legal precedent.', 'Pardons reach punishments, not precedents.'],
      ['The power to dismiss federal judges at will', 'The president cannot fire Article III judges; impeachment is the only constitutional removal mechanism.', 'No at-will removal exists.'],
    ],
    lesson: 'Presidential influence on the federal judiciary is largely prospective and indirect: nominations shape the bench over years; the bully pulpit shapes narratives; enforcement choices shape how rulings take effect. Direct overrides of judicial decisions are not in the presidential toolkit.',
  },

  // ---------------------------------------------------------------------
  // Block J: Activism vs restraint, eras, Bush v Gore
  // ---------------------------------------------------------------------
  {
    id: 4360543,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Activism vs restraint',
    prompt: 'In analytical usage, "judicial activism" is best contrasted with "judicial restraint" as follows:',
    correct: 'Activist rulings invalidate political-branch action; restrained rulings defer to political-branch judgments where the Constitution permits',
    wrong: [
      ['Activism is liberal and restraint is conservative as a matter of definition', 'The labels describe the willingness to invalidate political-branch action, not ideological direction; conservative and liberal rulings alike can be activist or restrained.', 'The labels are not ideology-coded.'],
      ['Activism means following precedent strictly; restraint means departing from precedent', 'The standard usage is closer to the opposite framing; the labels track invalidation of political-branch action, not stare decisis.', 'Stare decisis is a separate axis.'],
      ['Activism applies only to constitutional cases; restraint applies only to statutory cases', 'Both labels apply to both kinds of cases; the analytical axis is willingness to invalidate, not the source of law.', 'Both can occur in either category.'],
    ],
    lesson: 'Activism and restraint describe the Court\'s posture toward political-branch decisions, not toward any ideological program. A conservative Court can be activist (striking economic regulation); a liberal Court can be restrained (deferring to economic regulation). AP exam questions probe whether students conflate these labels with partisanship.',
  },
  {
    id: 4360544,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Marshall vs Warren Court',
    prompt: 'Which characterization most accurately distinguishes the Marshall Court (1801–1835) from the Warren Court (1953–1969)?',
    correct: 'The Marshall Court is most associated with building federal supremacy and judicial review; the Warren Court is most associated with expanding civil rights and civil liberties',
    wrong: [
      ['The Marshall Court is associated with Brown v. Board; the Warren Court is associated with Marbury', 'The chronology is reversed: Brown was decided in 1954 (Warren Court) and Marbury in 1803 (Marshall Court).', 'Check the dates.'],
      ['Both Courts focused primarily on commercial regulation under the Commerce Clause', 'The Marshall Court did address commerce (Gibbons v. Ogden), but its signature contributions are federal supremacy and judicial review; the Warren Court is best known for civil-rights expansion.', 'Different signature contributions.'],
      ['Neither Court issued a significant constitutional ruling', 'Both Courts produced foundational constitutional rulings; this claim is historically incorrect.', 'Both eras were doctrinally consequential.'],
    ],
    lesson: 'Marshall Court signatures: Marbury (judicial review), McCulloch (implied powers), Gibbons v. Ogden (commerce). Warren Court signatures: Brown (segregation), Gideon (counsel), Mapp (exclusionary rule), Miranda (police warnings), Engel (school prayer), Tinker (student speech). The Roberts Court (2005–) is associated with Heller, Citizens United, Shelby County, Dobbs.',
  },
  {
    id: 4360545,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Bush v Gore',
    prompt: 'Bush v. Gore (2000) resolved a presidential election dispute on the constitutional ground that:',
    correct: 'The Florida recount procedures lacked uniform standards and violated the Equal Protection Clause',
    wrong: [
      ['Congress alone is authorized to count electoral votes, so the Court could not intervene', 'The Court did intervene, ruling on equal-protection grounds; the case is significant precisely for that intervention.', 'The Court reached the merits.'],
      ['The Commerce Clause does not allow recounts that affect interstate elections', 'The Commerce Clause was not the basis of the ruling; equal protection was.', 'Wrong constitutional clause.'],
      ['The Second Amendment was implicated because of poll-monitoring practices', 'The Second Amendment is unrelated to election-recount procedures; the case turned on equal-protection analysis.', 'Wrong amendment entirely.'],
    ],
    lesson: 'Bush v. Gore halted the Florida recount on equal-protection grounds, holding that varying standards across counties impermissibly treated similar ballots differently. The per curiam majority explicitly limited the holding to "the present circumstances," and the case remains contested in constitutional scholarship.',
  },
  {
    id: 4360546,
    chapter: 'Chapter 5: The Courts and Constitutional Interpretation',
    title: 'Heller and McDonald',
    prompt: 'District of Columbia v. Heller (2008) and McDonald v. Chicago (2010) together established that the Second Amendment:',
    correct: 'Protects an individual right to keep and bear arms that applies to both federal and state governments',
    wrong: [
      ['Protects only a collective right tied to state militia service', 'Heller rejected the militia-only reading and recognized an individual right.', 'Heller is the controlling reading.'],
      ['Applies to the federal government alone, leaving states free to regulate without constraint', 'McDonald incorporated the Second Amendment against the states through the Fourteenth Amendment, so state regulation is constrained.', 'Incorporation extends the right to states.'],
      ['Bars all firearms regulation by both levels of government', 'Heller expressly preserved space for "longstanding prohibitions" and other regulations; the individual right is not absolute.', 'The right is bounded by reasonable regulation.'],
    ],
    lesson: 'Heller (2008) recognized an individual right to keep and bear arms under the Second Amendment, focused on the District of Columbia (a federal enclave). McDonald (2010) extended the right to the states through selective incorporation via the Fourteenth Amendment. Both rulings allow for some regulation; neither makes the right absolute.',
  },
])
