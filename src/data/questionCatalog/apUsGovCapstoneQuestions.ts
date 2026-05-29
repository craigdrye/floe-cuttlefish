import { makeQuestionBank } from './base'
import type { Question } from './types'

// AP US GOVERNMENT CAPSTONE — Applied Civics Briefing (Greenfield County)
// ---------------------------------------------------------------------------
// 47 integrative questions (IDs 4360900–4360946) extending the existing
// capstone trio (4330100–4330102 in civicPoliticsQuestions.ts).
//
// The existing trio established Greenfield County (a US county in a US state)
// as the site of a voter-ID and mail-ballot dispute. Over the course of the
// applied civics briefing, the student-author now tracks the county's full
// constitutional docket as additional disputes accumulate: a school-board
// book-removal policy, a state redistricting plan that produces a new
// majority-minority district, a federal infrastructure grant tied to a
// uniform driver-licensing standard, a county police stop-and-frisk policy,
// county-election ad spending by an outside interest group, a state law that
// conflicts with a federal statute, a county council religious-display
// resolution, and the county's sanctuary policy on federal immigration
// detainers.
//
// The arc walks the student through the lifecycle of an applied civics
// briefing — issue identification, evidence and precedent, counterargument,
// recommendation, and synthesis to broader constitutional principles. Each
// question names at least one specific case or clause; each wrong answer
// carries a bespoke whyWrong; the lesson is the integrative takeaway about
// constitutional analysis, not a recitation of the case fact.
// ---------------------------------------------------------------------------

const CHAPTER = 'Capstone: Applied Civics Briefing'

export const apUsGovCapstoneQuestions: Question[] = makeQuestionBank('AP', [
  // -------------------------------------------------------------------------
  // LESSONS 1–2 — Issue identification (4360900–4360909)
  // What's the constitutional question? Which doctrine applies?
  // -------------------------------------------------------------------------
  {
    id: 4360900,
    chapter: CHAPTER,
    title: 'Greenfield: identifying the book-removal frame',
    prompt: 'The Greenfield County school board votes to remove eight titles from middle-school libraries citing "age-inappropriate content." A coalition of parents and students seeks to challenge the removal. For the briefing\'s issue-identification section, the primary constitutional frame should be:',
    correct: 'First Amendment free-speech analysis under Board of Education v. Pico, focusing on whether the removals were based on disagreement with ideas rather than legitimate pedagogical concerns',
    wrong: [
      ['Second Amendment analysis, because removing materials from a public institution implicates fundamental rights generally', 'The Second Amendment governs arms-bearing, not library content. Conflating "fundamental right" with "any individual right" is a common student error in issue identification.', 'Match the clause to the activity regulated.'],
      ['Tenth Amendment analysis, because education is a state function and the federal Constitution has no role', 'The Tenth Amendment does not exempt state school boards from First Amendment scrutiny. State actors are bound by the Bill of Rights through the Fourteenth Amendment.', 'Federalism does not displace incorporated rights.'],
      ['Equal Protection analysis, because some students may be more affected than others by the removals', 'Equal protection requires a classification along suspect or quasi-suspect lines; a content-based removal of library materials is most directly a speech and access-to-ideas issue under the First Amendment.', 'Pick the doctrine that maps onto the government action.'],
    ],
    lesson: 'Issue identification means naming the clause whose text and doctrine actually govern the government action at issue. Library-removal cases are paradigmatically First Amendment access-to-ideas questions, not generic "rights" disputes.',
  },
  {
    id: 4360901,
    chapter: CHAPTER,
    title: 'Greenfield: identifying the redistricting frame',
    prompt: 'The state legislature redraws Greenfield County into a new state-senate district that is 58% Black voting-age population — drawn deliberately to comply with Section 2 of the Voting Rights Act after a finding of past dilution. White voters in the new district file suit alleging racial gerrymandering. The briefing\'s issue-identification section should frame this primarily under:',
    correct: 'Equal Protection analysis under Shaw v. Reno and its progeny, asking whether race was the predominant factor in drawing the district and, if so, whether the plan survives strict scrutiny under a compelling VRA-compliance interest',
    wrong: [
      ['First Amendment associational analysis, because districting affects political parties', 'Racial gerrymandering claims sound in equal protection, not freedom of association. Shaw v. Reno is the controlling line; party-association claims are a different doctrinal track.', 'Race-based districting runs through Shaw, not party association.'],
      ['Article I election authority alone, because states draw their own districts and federal courts do not intervene', 'Article I gives states districting authority, but Shaw, Miller v. Johnson, and the VRA all subject those maps to federal constitutional and statutory review.', 'State authority does not foreclose federal review.'],
      ['Tenth Amendment analysis, because districting is a reserved state power immune from federal scrutiny', 'The Tenth Amendment does not insulate state action from Fourteenth Amendment equal protection scrutiny; incorporation and federal supremacy override the reservation.', 'Reserved powers are still subject to incorporated rights.'],
    ],
    lesson: 'Racial gerrymandering doctrine sits at the intersection of equal protection (Shaw, Miller) and statutory VRA compliance. Identifying the right doctrinal frame in the briefing is the predicate for evaluating evidence in later lessons.',
  },
  {
    id: 4360902,
    chapter: CHAPTER,
    title: 'Greenfield: conditional grant frame',
    prompt: 'Congress passes an infrastructure act offering Greenfield County\'s state a $400M highway grant conditioned on the state adopting a uniform federal driver-licensing standard. The governor argues this is unconstitutional federal coercion. The briefing should frame the question as:',
    correct: 'A conditional-spending analysis under South Dakota v. Dole, asking whether the condition is related to the federal interest, unambiguous, in pursuit of the general welfare, and not so coercive as to cross into compulsion (NFIB v. Sebelius)',
    wrong: [
      ['A pure Tenth Amendment anti-commandeering question under Printz, because Congress is dictating state action', 'Conditional spending differs from commandeering: states can decline the funds. Printz governs direct federal commands to state officers; Dole governs strings attached to federal money.', 'Money with conditions is not the same as a direct command.'],
      ['A Commerce Clause question, because highways involve interstate commerce', 'The federal authority to offer the grant rests on the spending power, not the commerce power. The constitutional fight is about the conditions attached, not Congress\'s power to fund roads.', 'Identify the power exercised, not just the subject matter.'],
      ['A Supremacy Clause preemption question, because federal law overrides state licensing rules', 'No federal statute purports to override state licensing here; the federal government is offering money in exchange for state action. Preemption applies when federal and state law collide, not when federal funds carry conditions.', 'Preemption requires a conflict, not a contract.'],
    ],
    lesson: 'Conditional-spending challenges run through the Dole four-part test, with NFIB v. Sebelius adding a coercion limit when the financial stakes are so large that states have no real choice. Misidentifying this as commandeering or preemption is a common student error.',
  },
  {
    id: 4360903,
    chapter: CHAPTER,
    title: 'Greenfield: stop-and-frisk frame',
    prompt: 'The Greenfield County sheriff adopts a written policy authorizing deputies to stop and pat down any pedestrian in three designated "high-crime corridors" if the deputy can articulate "any suspicious circumstance." Civil-rights groups challenge the policy. The briefing should frame the question primarily under:',
    correct: 'Fourth Amendment reasonable-suspicion analysis under Terry v. Ohio, asking whether the policy\'s "any suspicious circumstance" standard meets the specific, articulable-facts threshold Terry requires for a brief investigatory stop',
    wrong: [
      ['Fifth Amendment self-incrimination analysis, because the stop may lead to questioning', 'A Terry stop is a seizure analyzed under the Fourth Amendment. Miranda and the Fifth Amendment govern custodial interrogation, a distinct stage that may or may not occur after the stop.', 'The seizure is Fourth Amendment; custodial questioning is Fifth.'],
      ['Sixth Amendment counsel analysis, because the stopped person has not yet been advised of rights', 'The Sixth Amendment right to counsel attaches at the initiation of adversarial proceedings, not at a street-level investigatory stop. The constitutional fight at the stop stage is reasonableness under the Fourth Amendment.', 'Right to counsel attaches later in the criminal process.'],
      ['Eighth Amendment analysis, because aggressive policing inflicts hardship', 'The Eighth Amendment governs criminal punishment (excessive bail, cruel and unusual punishments). A street-level investigatory stop is not punishment; it is a seizure governed by the Fourth Amendment.', 'Punishment doctrine does not apply to investigatory stops.'],
    ],
    lesson: 'Terry stops are governed by Fourth Amendment reasonableness — specifically, the requirement of specific, articulable facts giving rise to reasonable suspicion. Bright-line policies that authorize stops on a lower standard collide with Terry\'s text.',
  },
  {
    id: 4360904,
    chapter: CHAPTER,
    title: 'Greenfield: outside-spending frame',
    prompt: 'An independent-expenditure-only committee runs $1.4M in television ads in the Greenfield County sheriff\'s election, funded almost entirely by a single out-of-state donor. State officials consider a county ordinance capping independent expenditures at $50,000 per election. The briefing should frame the constitutional issue under:',
    correct: 'First Amendment political-speech analysis under Buckley v. Valeo and Citizens United v. FEC, which protect independent expenditures from spending caps because such limits burden core political speech and the government interest in preventing quid pro quo corruption does not extend to independent spending',
    wrong: [
      ['Equal protection analysis, because wealthy donors can spend more than ordinary citizens', 'Wealth-based disparities in political speech were considered and rejected as a basis for expenditure caps in Buckley; the Court treats independent expenditures as protected speech regardless of speaker wealth.', 'Buckley already addressed wealth disparities.'],
      ['Tenth Amendment analysis, because state and local election rules are reserved to the states', 'State authority to regulate elections does not displace First Amendment limits on speech regulation; the substantive constitutional question is the speech burden, not the federalism allocation.', 'State authority is bounded by incorporated rights.'],
      ['Equal Protection one-person-one-vote analysis under Reynolds v. Sims, because spending affects political equality', 'Reynolds governs apportionment of representation, not campaign-finance regulation. The constitutional vocabulary for spending limits is First Amendment, not voting-equality.', 'Apportionment cases do not govern speech regulation.'],
    ],
    lesson: 'Independent expenditures are protected First Amendment political speech under Buckley and Citizens United. The doctrinal frame matters because contribution limits (Buckley upheld) and expenditure limits (Buckley struck down) are evaluated differently — a distinction many students collapse.',
  },
  {
    id: 4360905,
    chapter: CHAPTER,
    title: 'Greenfield: supremacy frame',
    prompt: 'Greenfield County\'s state has enacted a statute requiring all employers to verify employee immigration status using a state-designed system; federal law (the Immigration Reform and Control Act) preempts states from imposing certain employer sanctions for hiring unauthorized workers. The briefing\'s issue-identification section should frame this under:',
    correct: 'Supremacy Clause preemption analysis (Article VI), asking whether the state statute is expressly preempted, field preempted, or in conflict with the federal scheme such that compliance with both is impossible or the state law stands as an obstacle to the federal purpose',
    wrong: [
      ['Tenth Amendment analysis, because immigration enforcement affects state authority over labor', 'The Tenth Amendment reserves only powers not delegated to the federal government. The Supremacy Clause makes federal statutes the supreme law over conflicting state law within delegated subject matter.', 'Reserved powers do not insulate state law from preemption.'],
      ['Equal protection analysis, because employer verification may disparately affect noncitizens', 'Equal protection might be relevant to enforcement practices, but the threshold constitutional issue when a state statute collides with a federal scheme is preemption under Article VI.', 'Preemption is the gating question when federal and state law collide.'],
      ['Commerce Clause analysis, because hiring affects interstate commerce', 'The federal authority to legislate on immigration and employment rests on enumerated powers, but the constitutional clash between the state and federal statutes runs through the Supremacy Clause, not Commerce Clause scrutiny.', 'Commerce is the federal power; supremacy is the conflict rule.'],
    ],
    lesson: 'When a state statute and a federal statute regulate the same conduct, the threshold constitutional question is preemption under Article VI. Students often reach for the Tenth Amendment, but Tenth Amendment doctrine governs anti-commandeering, not statute-on-statute conflicts.',
  },
  {
    id: 4360906,
    chapter: CHAPTER,
    title: 'Greenfield: religious-display frame',
    prompt: 'The Greenfield County council passes a resolution placing a permanent granite Ten Commandments monument at the entrance to the county courthouse, citing the document\'s "historical role in American law." A taxpayer files suit. The briefing should frame this under:',
    correct: 'Establishment Clause analysis, evaluated under the Court\'s post-Kennedy v. Bremerton historical-practice-and-understanding test, with attention to the monument\'s context, history, and any coercive effect on courthouse users',
    wrong: [
      ['Free Exercise Clause analysis, because the monument expresses religious content', 'Free Exercise governs burdens on private religious practice. A government-sponsored religious display is the paradigmatic Establishment Clause concern, not a Free Exercise claim.', 'Government endorsement is Establishment; burdens on practice are Free Exercise.'],
      ['Free Speech analysis under the public-forum doctrine, because the county is regulating speech at the courthouse', 'Government speech (the county erecting its own monument) is not analyzed under the public-forum doctrine; the constitutional limit on government religious speech is the Establishment Clause.', 'Government as speaker is bounded by Establishment, not forum doctrine.'],
      ['Equal Protection analysis, because non-Christians may feel excluded', 'Felt exclusion from a religious display is the Establishment Clause harm Lemon and its successors addressed directly; equal protection is the wrong vocabulary for this category of injury.', 'Establishment doctrine is the home for endorsement-of-religion claims.'],
    ],
    lesson: 'Establishment Clause doctrine has shifted away from Lemon toward a historical-practice test (Kennedy v. Bremerton, American Legion v. American Humanist Assn). Identifying the correct contemporary test — rather than reciting Lemon — is part of issue identification in the briefing.',
  },
  {
    id: 4360907,
    chapter: CHAPTER,
    title: 'Greenfield: sanctuary-policy frame',
    prompt: 'Greenfield County adopts a resolution instructing the county jail not to honor federal Immigration and Customs Enforcement (ICE) detainer requests unless accompanied by a judicial warrant. The federal government argues the county must comply with ICE detainers. The briefing should frame the issue under:',
    correct: 'Anti-commandeering doctrine under Printz v. United States and Murphy v. NCAA, which prohibit the federal government from compelling state or local officers to administer or enforce a federal regulatory program',
    wrong: [
      ['Supremacy Clause preemption, because federal immigration law overrides state and local choices', 'The Supremacy Clause makes federal law supreme over conflicting state law, but it does not authorize Congress to commandeer state and local officers as federal agents. Printz draws that line.', 'Supremacy displaces conflicting law; it does not conscript local officers.'],
      ['Tenth Amendment as a general reservation of unlimited state authority over law enforcement', 'The Tenth Amendment\'s anti-commandeering principle is specific (states cannot be conscripted into federal regulatory programs), not a general grant of unlimited state authority free from federal law.', 'Anti-commandeering is a narrow doctrine, not a sovereign-immunity blanket.'],
      ['Equal protection, because immigration enforcement may disparately affect noncitizens', 'Equal protection might attach to specific enforcement practices, but the constitutional question about whether the county must honor detainers is anti-commandeering, not equal protection.', 'Match the constitutional doctrine to the federal-state conflict at issue.'],
    ],
    lesson: 'Anti-commandeering doctrine (Printz, Murphy) protects state and local officers from being conscripted into federal regulatory enforcement. It is a structural federalism doctrine distinct from both Tenth Amendment generalities and Supremacy Clause preemption.',
  },
  {
    id: 4360908,
    chapter: CHAPTER,
    title: 'Greenfield: tier-of-scrutiny identification',
    prompt: 'Returning to the Greenfield voter-ID and mail-ballot dispute from the briefing\'s opening section: when a court reviews the burden the rules impose on the right to vote, the most accurate description of the applicable standard under Crawford v. Marion County Election Board and the Anderson-Burdick line is:',
    correct: 'A sliding-scale balancing test that weighs the character and magnitude of the burden against the state\'s asserted regulatory interests, rather than strict scrutiny or rational basis applied categorically',
    wrong: [
      ['Strict scrutiny in every case, because voting is a fundamental right and any burden on a fundamental right triggers strict scrutiny', 'Crawford and Anderson-Burdick reject the "any burden on a fundamental right = strict scrutiny" move. The Court applies a sliding scale because election rules necessarily impose some burdens.', 'Voting rights cases use balancing, not categorical strict scrutiny.'],
      ['Rational basis in every case, because election administration is a traditional state function', 'Rational basis under-protects the right to vote; the Anderson-Burdick line explicitly calibrates scrutiny to the magnitude of the burden imposed.', 'Severe burdens get more than rational basis review.'],
      ['Intermediate scrutiny, applied uniformly because voting is a quasi-fundamental right', 'The Court does not formally use intermediate scrutiny in this area; the operative framework is the Anderson-Burdick sliding scale, not the gender-discrimination intermediate-scrutiny formula.', 'Anderson-Burdick is its own balancing test, not intermediate scrutiny.'],
    ],
    lesson: 'A central student error in applied constitutional analysis is mechanically picking a tier of scrutiny by the right at stake. Voting-rules cases use the Anderson-Burdick sliding scale; identifying the actual standard the doctrine uses is part of issue identification.',
  },
  {
    id: 4360909,
    chapter: CHAPTER,
    title: 'Greenfield: docket overview',
    prompt: 'The Greenfield briefing\'s opening "issues catalog" now lists eight pending constitutional questions across the county. For the catalog\'s organizing principle, the most analytically useful grouping is:',
    correct: 'By the constitutional provision or doctrine governing each dispute (First Amendment speech, Establishment Clause, Fourth Amendment, Equal Protection / VRA, conditional spending, preemption, anti-commandeering, campaign finance), since this lets the briefing match each dispute to the applicable test',
    wrong: [
      ['By the partisan identity of the officials involved, since outcomes turn on political alignment', 'A nonpartisan civic briefing organizes by legal frame, not party. Outcomes in constitutional litigation turn on doctrine and evidence; partisan groupings produce a worse map of the disputes.', 'The briefing organizes legal questions, not coalitions.'],
      ['By the dollar value of the dispute, since cost determines constitutional significance', 'Constitutional significance does not track dollar value; a school-library removal can raise stakes as central as a $400M grant dispute. Dollar-grouping mischaracterizes the briefing\'s analytic task.', 'Money is not the organizing axis.'],
      ['By chronological order of the dispute\'s arrival in the news, since recency drives priority', 'Recency is editorial, not analytic. The briefing\'s purpose is to map constitutional doctrine to facts, not to track media cycles.', 'The map is doctrinal, not temporal.'],
    ],
    lesson: 'Organizing an applied civics briefing by constitutional doctrine (rather than by personality, money, or recency) lets the analyst pair each fact pattern with the controlling case law and test. That pairing is the foundation everything else in the briefing builds on.',
  },

  // -------------------------------------------------------------------------
  // LESSONS 3–4 — Evidence and precedent (4360910–4360919)
  // Which cases and clauses are on point, and how strongly?
  // -------------------------------------------------------------------------
  {
    id: 4360910,
    chapter: CHAPTER,
    title: 'Greenfield: Tinker as precedent for the library case',
    prompt: 'Evaluating the strength of Tinker v. Des Moines as precedent for the Greenfield book-removal dispute, the most analytically honest assessment for the briefing is:',
    correct: 'Tinker establishes that students do not "shed their constitutional rights to freedom of speech or expression at the schoolhouse gate," but Tinker addressed student expression; Board of Education v. Pico is the more directly on-point precedent for library-removal disputes, with Tinker supplying the broader principle',
    wrong: [
      ['Tinker is directly controlling because it governs all student First Amendment cases in public schools', 'Tinker is influential but not directly controlling; it concerned student-initiated expression (armbands), not government decisions to remove materials. Pico, Hazelwood, and other cases address different school-speech contexts.', 'Student-speech cases sort by who is speaking and what is being regulated.'],
      ['Tinker has been overruled by Morse v. Frederick and provides no support for the coalition', 'Morse v. Frederick narrowed Tinker in the specific context of pro-drug-use speech at school events; it did not overrule Tinker, which remains the foundational student-speech case.', 'Morse narrows, not overrules.'],
      ['Tinker is irrelevant because the dispute concerns adult library users, not students', 'Greenfield\'s book-removal policy targets middle-school libraries; students are the affected population. Tinker is relevant background even though Pico is the closer fit.', 'Identify the affected population before discarding precedent.'],
    ],
    lesson: 'Strong evidence-and-precedent work distinguishes directly controlling authority from background principles. Tinker is foundational student-speech doctrine; Pico is the closer fit for library removals. The briefing should cite both at appropriate weight.',
  },
  {
    id: 4360911,
    chapter: CHAPTER,
    title: 'Greenfield: VRA Section 2 evidence',
    prompt: 'To defend the new majority-minority district as VRA-compliant, the strongest evidentiary showing for the briefing draws on the Gingles factors. The most accurate statement of what those factors require is:',
    correct: 'The minority group must be sufficiently large and geographically compact to constitute a majority in a single-member district; the minority group must be politically cohesive; and the white majority must vote sufficiently as a bloc to usually defeat the minority\'s preferred candidate',
    wrong: [
      ['The minority group must constitute a majority of the entire state population, not just of a single district', 'Gingles asks whether the group is large and compact enough to form a majority in a hypothetical district, not in the state. The first prong is district-level, not statewide.', 'Gingles prong one is about district compactness, not state demographics.'],
      ['The state must show subjective racist intent by the legislators who drew the original districts', 'Section 2 reaches discriminatory effects, not just intent; the Gingles factors are about voting patterns and group cohesion, not legislator motive.', 'Section 2 is an effects test, not intent-only.'],
      ['The minority group must have lost every election in the preceding 20 years', 'Gingles asks whether the white bloc "usually" defeats the minority-preferred candidate, not whether the minority has lost every election; a categorical 20-year rule is not the test.', 'The standard is "usually defeats," not "always loses."'],
    ],
    lesson: 'Citing precedent precisely matters more than citing it broadly. The Gingles three-part threshold (numerosity-compactness, political cohesion, white bloc voting) is the gateway to a Section 2 claim, and stating it accurately is the difference between a credible evidence section and a vulnerable one.',
  },
  {
    id: 4360912,
    chapter: CHAPTER,
    title: 'Greenfield: Dole conditions applied',
    prompt: 'Applying the Dole four-part test to the federal highway grant tied to the uniform driver-licensing standard, which prong is most likely to be the disputed one in the Greenfield briefing?',
    correct: 'The "relatedness" prong — whether tying driver-licensing standardization to highway funds bears a sufficient relationship to the federal interest in safe interstate travel, with NFIB v. Sebelius adding a possible coercion challenge if the grant amount is large enough to leave the state no real choice',
    wrong: [
      ['The "general welfare" prong, because critics argue highway funding does not serve the general welfare', 'The general-welfare prong is famously deferential — almost any congressional spending purpose qualifies. It is rarely the live dispute under Dole.', 'General welfare is the easy prong, not the hard one.'],
      ['The "unambiguous" prong, because all federal statutes are inherently ambiguous', 'The unambiguous prong asks whether conditions are stated clearly enough that states accept them knowingly; clarity of drafting is usually achievable and rarely the central dispute.', 'Drafting clarity is usually a fixable technical question.'],
      ['The "independent constitutional bar" prong, because driver licensing is constitutionally protected', 'There is no independent constitutional right to a particular state driver-licensing scheme. The independent-constitutional-bar prong applies when a condition would require violating some other constitutional rule, which is not in play here.', 'No other constitutional rule bars uniform licensing standards.'],
    ],
    lesson: 'Applied constitutional analysis is the discipline of asking which prong of a multi-prong test is actually contested. In Dole challenges, relatedness and coercion are usually the live questions; the other prongs are routinely satisfied.',
  },
  {
    id: 4360913,
    chapter: CHAPTER,
    title: 'Greenfield: Terry doctrine applied',
    prompt: 'Evaluating the sheriff\'s stop-and-frisk policy against Terry v. Ohio, the strongest constitutional objection the briefing can make is:',
    correct: 'Terry requires specific, articulable facts giving rise to reasonable suspicion of criminal activity in the individual stopped; a policy authorizing stops based on "any suspicious circumstance" within a geographic corridor delegates discretion below the Terry threshold and resembles the regime invalidated in Floyd v. City of New York (SDNY 2013)',
    wrong: [
      ['Terry has been overruled by recent Fourth Amendment cases and provides no support', 'Terry remains the foundational stop-and-frisk doctrine. Recent cases (Heien, Strieff, Glover) refine its application but do not overrule it.', 'Terry is foundational, not overruled.'],
      ['Terry permits any stop a reasonable officer would make, so the policy is presumptively valid', 'Terry does not authorize "any reasonable stop" — it requires specific, articulable facts. Pacing the standard to officer discretion alone is the error Terry was decided to correct.', 'Articulable facts, not officer judgment alone, is the standard.'],
      ['Terry applies only to traffic stops, so the pedestrian context places the policy outside Fourth Amendment scrutiny', 'Terry itself was a pedestrian-stop case. The Fourth Amendment applies to seizures of persons whether on foot or in a vehicle; the reasonable-suspicion standard is the same.', 'Terry started with pedestrians; Whren extended it to traffic.'],
    ],
    lesson: 'Precedent strength comes from matching the case facts as well as the holding. Terry\'s articulable-facts requirement, combined with appellate applications like Floyd, gives the briefing concrete doctrinal language to challenge a policy that delegates broad discretion.',
  },
  {
    id: 4360914,
    chapter: CHAPTER,
    title: 'Greenfield: Citizens United precedent strength',
    prompt: 'Applying Citizens United v. FEC and SpeechNow.org v. FEC to the proposed $50,000 cap on independent expenditures in the Greenfield sheriff\'s election, the briefing should conclude:',
    correct: 'A flat cap on independent expenditures is almost certainly unconstitutional under Citizens United and SpeechNow, which together hold that independent expenditures do not give rise to the quid pro quo corruption interest that justifies limits on direct contributions',
    wrong: [
      ['Citizens United applies only to federal elections; states and counties remain free to cap independent expenditures', 'Citizens United\'s First Amendment reasoning is not jurisdiction-limited; it has been applied to invalidate state and local limits on independent expenditures across the country.', 'First Amendment limits apply at every level of government.'],
      ['Citizens United permits caps as long as the cap is generous enough that some speech remains possible', 'Citizens United did not adopt a "some speech remaining" test for expenditure limits; the holding rejects expenditure limits on independent spending as a constitutional category.', 'Caps on independent expenditures fail categorically, not by amount.'],
      ['McConnell v. FEC upheld broad limits on independent expenditures and remains controlling', 'McConnell upheld limits on certain electioneering communications by corporations and unions, but that holding was substantially overruled by Citizens United, which is now controlling.', 'Citizens United overruled the relevant parts of McConnell.'],
    ],
    lesson: 'Knowing what a case actually decided — and what later cases changed — is the difference between confident precedent work and a brief that gets shredded on review. Citizens United and SpeechNow together make independent-expenditure caps a near-categorical loser.',
  },
  {
    id: 4360915,
    chapter: CHAPTER,
    title: 'Greenfield: preemption types',
    prompt: 'In the Greenfield employer-verification preemption dispute, the briefing distinguishes among types of preemption to identify which is most likely to control. The most accurate framing is:',
    correct: 'Three pathways — express preemption (the federal statute explicitly preempts), field preemption (federal regulation is so pervasive that no state law is permitted), and conflict preemption (compliance with both is impossible, or state law obstructs the federal purpose) — with the briefing applying each in turn to the state verification statute',
    wrong: [
      ['Only express preemption counts; courts will not infer preemption from the structure of federal law', 'Field and conflict preemption are well-established doctrines that operate even where no express preemption clause exists. Limiting preemption to express terms is doctrinally wrong.', 'Implied preemption exists in two flavors.'],
      ['Preemption requires Congress to have specifically named the state statute being preempted', 'Preemption operates through the relationship between federal and state law, not through statute-by-statute naming. Express preemption clauses can be general; implied preemption requires no naming at all.', 'Naming is not the test.'],
      ['Preemption requires unanimous federal-court agreement on the federal scheme\'s scope', 'Courts decide preemption case by case; intra-judicial disagreement does not defeat preemption analysis. The briefing\'s job is to apply the three pathways, not to wait for unanimity.', 'Doctrine operates without judicial consensus.'],
    ],
    lesson: 'Strong preemption sections work through all three pathways rather than collapsing them. Identifying express, field, and conflict preemption separately lets the briefing diagnose precisely where the state statute fails — and where it might survive.',
  },
  {
    id: 4360916,
    chapter: CHAPTER,
    title: 'Greenfield: Bremerton historical-practice test',
    prompt: 'Applying Kennedy v. Bremerton School District (2022) to the county courthouse Ten Commandments monument, the briefing\'s strongest reading of current Establishment Clause doctrine is:',
    correct: 'The Court instructed lower courts to interpret the Establishment Clause "by reference to historical practices and understandings," displacing the Lemon test; the monument\'s constitutionality will depend on its history, context (including whether it stands alone or among comparable historical markers), and any coercive effect',
    wrong: [
      ['Lemon v. Kurtzman remains the controlling test; the briefing should apply Lemon\'s three prongs', 'Kennedy v. Bremerton explicitly rejected Lemon as the governing test in Establishment Clause cases. The briefing must apply the current historical-practice framework, not Lemon, even if Lemon is more familiar to students.', 'Lemon is out; historical practice is in.'],
      ['Kennedy v. Bremerton resolves all Establishment Clause questions in favor of religious displays', 'Kennedy did not announce a categorical rule favoring displays; it announced a different test. Whether a particular display passes still depends on history, context, and coercion.', 'New test, not blanket permission.'],
      ['Endorsement test under Lynch v. Donnelly is the live doctrine for monuments', 'The endorsement test (associated with Justice O\'Connor) is no longer the operative doctrine after Kennedy. Citing Lynch as controlling would misstate current law.', 'The endorsement test has been displaced.'],
    ],
    lesson: 'Establishment Clause doctrine has shifted substantially. A briefing that cites Lemon as controlling in 2024 is citing displaced law — and a careful evidence section names the displacement, the new framework, and the open questions about how lower courts will apply it.',
  },
  {
    id: 4360917,
    chapter: CHAPTER,
    title: 'Greenfield: Printz applied to sanctuary detainers',
    prompt: 'Applying Printz v. United States to the county\'s refusal to honor ICE detainers, the briefing\'s precedent analysis should conclude:',
    correct: 'Printz prohibits the federal government from compelling state or local officers to administer or enforce a federal regulatory program, and Murphy v. NCAA (2018) extended the principle to prohibit Congress from issuing direct orders to states; ICE detainers function as requests, and federal courts have generally held local refusals do not violate federal law',
    wrong: [
      ['Printz requires localities to honor any federal detainer because federal immigration law is supreme', 'Printz holds the opposite: even where federal law is supreme within its sphere, the federal government cannot conscript state or local officers as enforcement agents.', 'Supremacy of federal law does not equal conscription power.'],
      ['Printz applies only to background-check requirements and has no implications for immigration enforcement', 'Printz\'s reasoning is a structural anti-commandeering principle, applied across regulatory contexts. Its holding is not limited to the Brady Act facts.', 'The principle is structural, not topic-bound.'],
      ['Printz has been overruled by Arizona v. United States (2012)', 'Arizona v. United States preempted certain Arizona immigration provisions but did not overrule Printz; the anti-commandeering doctrine remains in force and was reaffirmed in Murphy v. NCAA in 2018.', 'Arizona narrows; Printz still controls.'],
    ],
    lesson: 'Precedent work means tracing a doctrine through its development: Printz states the rule, Murphy extends it, and lower-court applications to ICE detainers map it onto the sanctuary-policy dispute. Each step strengthens the briefing\'s claim.',
  },
  {
    id: 4360918,
    chapter: CHAPTER,
    title: 'Greenfield: voter-ID evidence strength',
    prompt: 'Returning to the Greenfield voter-ID dispute, the briefing now considers Crawford v. Marion County Election Board (2008) as the controlling Supreme Court precedent. The most accurate description of Crawford\'s holding is:',
    correct: 'Crawford upheld Indiana\'s photo-ID requirement on a facial challenge under the Anderson-Burdick balancing framework, finding the burden on most voters was minimal and the state interest in election integrity was legitimate, but the Court left open as-applied challenges by voters who could show particularized burdens',
    wrong: [
      ['Crawford categorically upheld all voter-ID laws and foreclosed any future challenge', 'Crawford was a facial challenge that left as-applied challenges available; it did not categorically immunize all voter-ID regimes.', 'Facial loss does not bar as-applied claims.'],
      ['Crawford struck down Indiana\'s voter-ID law as an unconstitutional burden on voting', 'Crawford upheld the Indiana law against the facial challenge. Misstating the outcome is a fundamental precedent error.', 'Crawford upheld, did not strike.'],
      ['Crawford applied strict scrutiny and required Indiana to show a compelling interest', 'Crawford applied the Anderson-Burdick balancing framework, not strict scrutiny. Tier-of-scrutiny errors compound through the rest of the brief.', 'Anderson-Burdick balancing, not strict scrutiny.'],
    ],
    lesson: 'Reading a precedent for what it actually held (and what it left open) is the core skill of the evidence-and-precedent section. Crawford upheld a voter-ID law facially while preserving as-applied challenges — both facts are load-bearing for the Greenfield briefing.',
  },
  {
    id: 4360919,
    chapter: CHAPTER,
    title: 'Greenfield: evidence-quality hierarchy',
    prompt: 'When the briefing ranks evidence supporting its constitutional claims, the most defensible hierarchy is:',
    correct: 'Binding Supreme Court precedent on point > circuit-court precedent in the relevant circuit > persuasive sister-circuit authority > non-judicial expert reports and historical practice > opinion pieces and advocacy materials',
    wrong: [
      ['Recency of publication is the controlling factor — the most recent authority always wins', 'Recency matters only within a binding-authority framework. A 1969 Supreme Court precedent outweighs a 2023 district-court opinion in most circumstances.', 'Binding authority dominates recency.'],
      ['Quantity of citations controls — the position with the most supporting sources is strongest', 'Two binding precedents outweigh fifty advocacy pieces. The briefing\'s strength depends on the type of evidence, not the count.', 'Weight, not headcount.'],
      ['Media coverage and op-eds carry equal weight with judicial decisions in constitutional analysis', 'A nonpartisan civic briefing distinguishes legal authority from commentary. Op-eds may surface arguments but do not bind courts.', 'Argument is not authority.'],
    ],
    lesson: 'An evidence hierarchy is part of constitutional reasoning. Briefings that cannot rank their sources cannot defend their conclusions; binding authority must lead, with everything else placed in its proper supporting role.',
  },

  // -------------------------------------------------------------------------
  // LESSONS 5–6 — Counterargument (4360920–4360929)
  // What's the strongest case for the other side, and why is your position
  // still defensible?
  // -------------------------------------------------------------------------
  {
    id: 4360920,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on book removal',
    prompt: 'The Greenfield school board\'s strongest constitutional defense of the book-removal policy is:',
    correct: 'Under Hazelwood School District v. Kuhlmeier and Pico\'s plurality reasoning, school officials retain substantial discretion over school-sponsored materials when the basis for removal is pedagogical (age-appropriateness, curricular fit) rather than political viewpoint suppression',
    wrong: [
      ['School boards have absolute authority over libraries because students have no First Amendment rights at school', 'Tinker forecloses the "no rights at school" framing. The school\'s strongest counter rests on pedagogical discretion within constitutional limits, not on denying student rights altogether.', 'Schools have discretion, not unlimited authority.'],
      ['The First Amendment applies only to spoken speech, not to library content', 'The First Amendment protects access to ideas as well as expression; library removals are within First Amendment scrutiny. The school\'s counter cannot rest on this misstatement.', 'Speech doctrine covers access to ideas.'],
      ['Pico is non-precedential because it produced no majority opinion', 'Pico is a plurality decision, but its reasoning has been cited by lower courts and is influential. Calling it "non-precedential" overstates the weakness; it remains the closest Supreme Court engagement with library removals.', 'Plurality is not the same as no precedent.'],
    ],
    lesson: 'A strong counterargument names the best version of the other side\'s case. The school\'s pedagogical-discretion argument is the most defensible counter; the briefing must engage it, not strawman it as "no rights at school."',
  },
  {
    id: 4360921,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on redistricting',
    prompt: 'White-voter plaintiffs challenging the new majority-minority district will make their strongest case by arguing:',
    correct: 'Under Miller v. Johnson, where race is the predominant factor in drawing district lines (subordinating traditional districting principles like compactness, contiguity, and respect for political subdivisions), the plan triggers strict scrutiny — and the state must show the plan was narrowly tailored to a compelling VRA-compliance interest, not merely that VRA-compliance was the goal',
    wrong: [
      ['Any consideration of race in districting is unconstitutional under the Equal Protection Clause', 'Race may be considered in districting; the Court draws the line at race being the predominant factor. Categorical "no race" arguments overstate Shaw.', 'Race-consciousness is not the bright line; predominance is.'],
      ['The Voting Rights Act was held unconstitutional in Shelby County v. Holder and provides no defense', 'Shelby County struck down the Section 4(b) coverage formula for Section 5 preclearance; it did not invalidate Section 2 of the VRA, which still requires majority-minority districts in appropriate circumstances.', 'Shelby struck the coverage formula, not Section 2.'],
      ['Strict scrutiny is impossible to satisfy, so the plan must fail', 'Strict scrutiny is demanding but not categorically fatal; compliance with the VRA has been recognized as a compelling interest in racial-gerrymandering cases when narrowly tailored.', 'Strict scrutiny is hard, not impossible.'],
    ],
    lesson: 'Counterargument work requires getting the other side\'s strongest framing right. The Miller v. Johnson predominance test, paired with strict scrutiny on a VRA-compliance interest, is the structure plaintiffs will use — and the structure the briefing must address head-on.',
  },
  {
    id: 4360922,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on the grant',
    prompt: 'The federal government\'s strongest defense of the conditional highway grant is:',
    correct: 'Under South Dakota v. Dole, the spending power authorizes Congress to attach conditions to federal funds; the driver-licensing standard is sufficiently related to highway safety, the condition is unambiguous, and the grant amount (while substantial) is not so large as to cross the NFIB v. Sebelius coercion threshold that applied to the Medicaid expansion',
    wrong: [
      ['Congress has unlimited spending power under Article I and conditions are unreviewable', 'Dole itself establishes that spending-power conditions are reviewable. Asserting unlimited authority overstates federal power and concedes the analytical question.', 'Spending is reviewable, not absolute.'],
      ['Federal grants are gifts and states have no constitutional standing to challenge them', 'States can and do challenge conditions on federal grants; standing is well-established in this area, as NFIB v. Sebelius itself demonstrated.', 'Standing exists to challenge spending conditions.'],
      ['NFIB v. Sebelius has been overruled, removing any coercion limit', 'NFIB v. Sebelius remains good law. The coercion limit it announced is a live constraint on the spending power, not a doctrinal artifact.', 'NFIB is current law, not overruled.'],
    ],
    lesson: 'Defending a conditional grant means applying Dole carefully and showing that the NFIB v. Sebelius coercion threshold is not crossed. A federal-government counterargument that overclaims (unlimited spending, no standing) is weaker than one that meets Dole on its own terms.',
  },
  {
    id: 4360923,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on the stop policy',
    prompt: 'The Greenfield sheriff\'s strongest defense of the stop-and-frisk policy is:',
    correct: 'The policy text references reasonable suspicion and "articulable circumstances," and operational guidance can be revised to require deputies to document specific facts before each stop; properly trained, the policy may operate within Terry — making the as-applied record (rather than facial invalidity) the litigation frontier',
    wrong: [
      ['Police have inherent authority to stop anyone in a high-crime area without reasonable suspicion', 'Terry forecloses this. The Court rejected unfettered street-stop discretion as inconsistent with Fourth Amendment reasonableness.', 'Reasonable suspicion is the floor, not a suggestion.'],
      ['The Fourth Amendment does not apply to pedestrian stops, only to vehicle stops or formal arrests', 'Terry itself was a pedestrian stop. The Fourth Amendment applies whenever a person is seized by police, regardless of the mode.', 'Pedestrians are protected by Terry.'],
      ['"High-crime corridor" designation by the sheriff is itself sufficient reasonable suspicion for any stop in that area', 'High-crime area is a contextual factor (Illinois v. Wardlow) but is not itself reasonable suspicion. A blanket rule would invert the Terry standard.', 'Context informs; it does not substitute.'],
    ],
    lesson: 'A strong police-policy defense engages with Terry rather than evading it. The defensible move is to argue that the policy can be implemented within Terry through training and documentation; arguing that Terry does not apply is doctrinally untenable.',
  },
  {
    id: 4360924,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on expenditure caps',
    prompt: 'Reformers defending the $50,000 cap on independent expenditures in the Greenfield sheriff\'s election will make their strongest, most realistic argument by:',
    correct: 'Conceding the cap is foreclosed by Citizens United and SpeechNow as currently understood and pivoting to mandatory disclosure rules — which the Citizens United majority itself endorsed as a less-restrictive alternative consistent with the First Amendment',
    wrong: [
      ['Arguing Citizens United was wrongly decided and asking the lower court to disregard it', 'Lower courts cannot disregard binding Supreme Court precedent. An argument predicated on lower-court disobedience is procedurally hopeless.', 'Inferior courts follow superior courts.'],
      ['Arguing the cap is content-neutral and therefore subject only to rational basis', 'Expenditure caps are not content-neutral in the speech-doctrine sense; they regulate political speech by amount, and courts apply heightened scrutiny regardless.', 'Caps on political speech trigger heightened review.'],
      ['Arguing local elections are constitutionally distinct from federal elections and Citizens United does not apply', 'The First Amendment applies to local elections; Citizens United\'s reasoning has been extended to state and local contexts by lower courts. There is no "local elections" carve-out.', 'No local-elections exception exists.'],
    ],
    lesson: 'A nonpartisan briefing identifies the realistic counterargument, not the ideologically satisfying one. After Citizens United, the live reform space is disclosure; pretending the cap survives review is not a defensible litigation posture.',
  },
  {
    id: 4360925,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on preemption',
    prompt: 'The state defending its employer-verification statute against federal preemption will make its strongest argument by:',
    correct: 'Distinguishing the state statute from the federal scheme — arguing the state law operates only as a licensing condition (an area traditionally reserved to states) rather than as employer sanctions of the kind Congress preempted, with Chamber of Commerce v. Whiting (2011) as supporting authority',
    wrong: [
      ['Asserting the Tenth Amendment categorically immunizes state employment law from federal preemption', 'The Tenth Amendment does not immunize states from valid federal preemption; the state\'s argument must engage the federal scheme\'s actual scope, not assert blanket immunity.', 'Tenth Amendment does not displace Supremacy.'],
      ['Arguing the Supremacy Clause applies only when Congress explicitly says so in the federal statute', 'The Supremacy Clause operates through express, field, and conflict preemption; limiting it to express statements is doctrinally wrong.', 'Implied preemption is real.'],
      ['Arguing that federal immigration enforcement has failed, so states must fill the gap', 'Failure-of-federal-enforcement is a policy argument, not a constitutional defense. The Supremacy Clause does not bend to the federal government\'s enforcement choices.', 'Policy critique is not preemption analysis.'],
    ],
    lesson: 'States defending against preemption must engage the federal scheme\'s actual scope and find the doctrinal space the federal law leaves open. Whiting is the model: a careful distinction between preempted employer sanctions and permissible state licensing operations.',
  },
  {
    id: 4360926,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on the monument',
    prompt: 'The Greenfield County council defending the Ten Commandments monument will make its strongest argument by:',
    correct: 'Citing Van Orden v. Perry (2005), which upheld a Ten Commandments monument on the Texas State Capitol grounds based on its historical context and longevity, and pairing this with Kennedy v. Bremerton\'s historical-practice framework to argue the monument fits within a constitutional tradition of public acknowledgment of religious heritage',
    wrong: [
      ['Arguing that the Establishment Clause applies only to formal state religions, not to monuments', 'The Establishment Clause reaches beyond formal church establishment; it has long applied to government religious displays, including monuments. The state\'s argument cannot deny the doctrinal frame.', 'Establishment is broader than formal church.'],
      ['Arguing that any taxpayer plaintiff lacks standing because the monument causes no concrete injury', 'Taxpayer standing in Establishment Clause cases (Flast v. Cohen and its progeny) is narrowed but not foreclosed; a categorical no-standing argument is unlikely to succeed and concedes the merits debate.', 'Standing is complicated, not nonexistent.'],
      ['Arguing McCreary County v. ACLU (2005) upheld the monument and is directly controlling', 'McCreary County struck down a Ten Commandments display in Kentucky courthouses. Misstating the outcome of a paired precedent damages the brief\'s credibility.', 'McCreary struck down, Van Orden upheld.'],
    ],
    lesson: 'The Ten Commandments cases (Van Orden upheld, McCreary struck down) come down to context. The defense\'s strongest move is to invoke Van Orden plus Bremerton historical-practice analysis; the briefing\'s job is to engage that argument seriously while distinguishing the Greenfield context.',
  },
  {
    id: 4360927,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on sanctuary policy',
    prompt: 'The federal government\'s strongest argument against the county\'s detainer-refusal policy is:',
    correct: 'Conceding Printz forbids commandeering but arguing that federal funding conditions (analogous to Dole) can permissibly induce cooperation, so federal grant programs may condition law-enforcement funds on detainer compliance — though this argument also faces NFIB v. Sebelius coercion limits',
    wrong: [
      ['Asserting that Printz has been narrowed and no longer applies to immigration enforcement', 'Printz remains controlling and was reaffirmed in Murphy v. NCAA in 2018. Asserting narrowing that has not occurred is a precedent error.', 'Printz is current and recently reaffirmed.'],
      ['Arguing the Supremacy Clause requires localities to enforce all federal laws', 'The Supremacy Clause makes federal law supreme but does not compel state and local officers to enforce it; that is exactly the line Printz draws.', 'Supremacy is not enforcement-conscription.'],
      ['Arguing that immigration is a federal-only subject and local action in this area is preempted', 'Local non-cooperation is not the same as local regulation of immigration; Printz directly addresses whether the federal government can compel local enforcement, and the answer is no.', 'Non-cooperation is not regulation.'],
    ],
    lesson: 'The federal government\'s realistic counterargument shifts from commandeering (a losing move under Printz) to conditional spending (a viable move under Dole). Identifying the actual live legal frontier is the work of a serious counterargument section.',
  },
  {
    id: 4360928,
    chapter: CHAPTER,
    title: 'Greenfield: strongest counter on voter ID',
    prompt: 'The state defending the Greenfield voter-ID and mail-ballot rules against the equal-protection challenge will make its strongest argument by:',
    correct: 'Invoking Crawford v. Marion County Election Board and the Anderson-Burdick balancing framework to argue the rules impose minimal burdens on most voters, serve legitimate interests in election integrity, and that as-applied challenges (rather than facial invalidation) are the proper remedy for particularized burdens',
    wrong: [
      ['Arguing that voting is not a fundamental right and only rational basis review applies', 'Voting is a fundamental right; rational basis under-protects it. The state\'s argument must engage Anderson-Burdick balancing, not deny the right\'s status.', 'Voting is fundamental; the test is balancing.'],
      ['Arguing the Fourteenth Amendment does not apply to state election rules', 'The Fourteenth Amendment, the Fifteenth Amendment, and the VRA all apply to state election administration. This is settled and not an available defense.', 'Federal constitutional review of state elections is settled.'],
      ['Arguing the state can demonstrate widespread in-person voter fraud and therefore satisfies any tier of scrutiny', 'The Greenfield record (per the briefing\'s data section) shows no significant in-person fraud; asserting fraud without evidence weakens the brief and invites adverse credibility findings.', 'Fact-bound claims need fact support.'],
    ],
    lesson: 'A strong defense engages the actual doctrine and the actual record. Crawford and Anderson-Burdick give the state a real argument; categorical denials of voting rights or fabricated fraud claims would be both legally weak and ethically untenable.',
  },
  {
    id: 4360929,
    chapter: CHAPTER,
    title: 'Greenfield: counterargument standards',
    prompt: 'The capstone\'s counterargument standard requires the briefing to present the opposing side as its proponents would present it. The best way to operationalize this in the Greenfield brief is:',
    correct: 'For each disputed issue, identify the strongest case in the relevant circuit (or Supreme Court) that supports the opposing position, state the opposing argument in language its advocates would recognize, and explain why the briefing\'s position remains defensible after engaging with it',
    wrong: [
      ['Present the opposing argument in its weakest form to make rebuttal easier', 'Strawmanning the opposition is the AP rubric\'s explicit anti-pattern. A capstone-quality counterargument names the best opposing version.', 'No strawmen on a capstone brief.'],
      ['Omit counterarguments where they would weaken the briefing\'s conclusion', 'Omission is intellectual dishonesty and signals to the reader that the briefing cannot defend itself. A serious brief addresses the hard counters.', 'Hidden weakness is worse than addressed weakness.'],
      ['Quote partisan media coverage as a representative statement of the opposing view', 'Media quotes are not the strongest formulation of constitutional counterarguments; legal authority and the actual filings of opposing advocates are.', 'Use legal sources for legal counters.'],
    ],
    lesson: 'The capstone standard for counterargument is the standard for serious legal writing: state the opposing case in its strongest form, then explain why your position survives. Anything less invites the reader to do the rebuttal-of-the-rebuttal themselves.',
  },

  // -------------------------------------------------------------------------
  // LESSONS 7–8 — Recommendation (4360930–4360939)
  // What should the local government do, and what's the constitutional reasoning?
  // -------------------------------------------------------------------------
  {
    id: 4360930,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on book removal',
    prompt: 'For the school-board book-removal dispute, the briefing\'s most defensible recommendation to the school board is:',
    correct: 'Adopt a written removal procedure requiring pedagogical findings (age-appropriateness, curricular alignment, professional review by certified librarians), public comment, and documented reasons for each title removed — pulling the board\'s actions toward Pico\'s permissible-removal lane and away from viewpoint-suppression challenges',
    wrong: [
      ['Remove all titles the board finds objectionable and litigate any challenges later', 'A recommendation to ignore litigation risk is irresponsible governance advice; the briefing\'s value is helping the board act within constitutional limits before litigation, not after.', 'Constitutional risk should be managed before, not after.'],
      ['Refuse to remove any title under any circumstance to avoid First Amendment exposure', 'Pico permits removals on legitimate pedagogical grounds; a blanket no-removal policy overcorrects and concedes school-board curricular discretion the Constitution allows.', 'Constitutional space exists for legitimate pedagogical curation.'],
      ['Delegate all removal decisions to a single elected official to reduce political dispute', 'Concentrating discretion in one person increases viewpoint-suppression risk; written procedures with multiple inputs are the better constitutional and governance posture.', 'Procedural safeguards reduce constitutional risk.'],
    ],
    lesson: 'Constitutional recommendations focus on process. Pico does not forbid removals but forbids removals motivated by disagreement with ideas; a written, pedagogically-grounded procedure pulls the board toward the permissible side of that line.',
  },
  {
    id: 4360931,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on redistricting',
    prompt: 'For the new majority-minority district, the briefing\'s most defensible recommendation to the state legislature is:',
    correct: 'Document the VRA-compliance findings underpinning the district (vote-dilution evidence, Gingles factors satisfied), apply traditional districting principles where consistent with compliance, and avoid drawing lines so irregular that race predominates over compactness and contiguity — preserving the plan\'s narrow-tailoring case under strict scrutiny',
    wrong: [
      ['Decline to comply with the VRA to avoid Shaw-line litigation', 'Section 2 of the VRA is enforceable federal law; declining to comply invites a different (and likely losing) lawsuit. The recommendation must protect against Shaw without violating Section 2.', 'Two doctrines, both binding.'],
      ['Draw the district as a contiguous shape ignoring racial composition entirely', 'Ignoring racial composition in a vote-dilution context may itself violate Section 2; the legislature is required to consider race carefully, not to disregard it.', 'Section 2 sometimes requires race-conscious districting.'],
      ['Wait for litigation to dictate the district\'s shape rather than acting proactively', 'Letting litigation drive districting is the worst governance posture: courts will redraw lines under emergency conditions and the legislature loses control. Proactive compliance is the recommendation.', 'Litigation-driven design is the worst path.'],
    ],
    lesson: 'Districting under the VRA requires threading two doctrines simultaneously: Section 2 compliance (sometimes mandatory) and Shaw\'s predominance limit. The recommendation builds the record needed to defend the plan on both fronts.',
  },
  {
    id: 4360932,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on the grant',
    prompt: 'For the conditional federal highway grant, the briefing\'s most defensible recommendation to the governor is:',
    correct: 'Accept the grant while documenting concerns in the state\'s formal acceptance letter, preserving the option for a coalition of states to challenge the licensing condition\'s relatedness and coercion (under Dole and NFIB v. Sebelius) if implementation creates concrete burdens — combining policy pragmatism with preserved legal avenues',
    wrong: [
      ['Reject the grant on principle to make a constitutional statement', 'A symbolic rejection costs the state $400M in highway funds while doing nothing to advance the legal challenge. Constitutional litigation does not require forfeiting accepted funds.', 'Funds and litigation are separate moves.'],
      ['Accept the grant and abandon any constitutional challenge', 'Acceptance with documented reservations preserves litigation options; categorical abandonment forecloses them unnecessarily.', 'Acceptance does not require waiver.'],
      ['Sue immediately to invalidate the grant program before any state accepts funds', 'Pre-acceptance, the state has weaker standing to challenge specific application of the conditions; the recommendation builds the record before litigating.', 'Standing and ripeness shape litigation timing.'],
    ],
    lesson: 'Constitutional recommendations balance immediate policy interests with preserved legal options. A documented acceptance keeps the funds flowing while leaving the Dole-NFIB challenge available for the right moment and the right plaintiff coalition.',
  },
  {
    id: 4360933,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on stop-and-frisk',
    prompt: 'For the sheriff\'s stop-and-frisk policy, the briefing\'s most defensible recommendation to the county is:',
    correct: 'Revise the policy to require deputies to document specific, articulable facts before each stop (with supervisor review), train deputies on Terry\'s reasonable-suspicion standard, and collect demographic data on stops to identify and correct any disparate impact — bringing the policy into Terry compliance and managing equal-protection risk',
    wrong: [
      ['Continue the policy unchanged and rely on individual deputies\' judgment about reasonable suspicion', 'The current policy authorizes stops on "any suspicious circumstance," which is below Terry. Continuing it unchanged invites Section 1983 liability and Department of Justice review.', 'The current text falls below Terry.'],
      ['Suspend all pedestrian stops in high-crime corridors to avoid any litigation', 'Suspending lawful policing tools categorically overcorrects. Terry stops with proper articulation are constitutional; the fix is the standard, not abolition of the tool.', 'Fix the standard, not the tool.'],
      ['Move the stops to a different geographic area to avoid the "high-crime corridor" designation', 'Geographic relocation does not address the Terry deficiency in the policy\'s articulation standard; the constitutional flaw travels with the policy.', 'The defect is the standard, not the location.'],
    ],
    lesson: 'Constitutional recommendations on policing focus on training, documentation, and disparate-impact monitoring. The Terry standard is workable; the briefing\'s job is to recommend the procedures that make it work in practice.',
  },
  {
    id: 4360934,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on campaign ads',
    prompt: 'For the county-election independent-expenditure dispute, the briefing\'s most defensible recommendation to the county council is:',
    correct: 'Abandon the proposed $50,000 cap (foreclosed by Citizens United and SpeechNow) and adopt robust real-time disclosure rules requiring sponsors of independent expenditures to disclose donors above a meaningful threshold — the regulatory space Citizens United itself preserved as constitutional',
    wrong: [
      ['Enact the cap and litigate, betting on a future Supreme Court reversal of Citizens United', 'Litigating against settled Supreme Court precedent in hopes of a future reversal wastes county resources and invites attorney-fees liability under Section 1988. It is not a defensible governance recommendation.', 'Hope is not a litigation strategy.'],
      ['Enact the cap and rely on lower-court sympathy in the relevant circuit', 'Lower courts follow Supreme Court precedent; sympathy does not authorize them to disregard Citizens United. The cap loses at the trial court, the circuit, and the Supreme Court.', 'Lower courts cannot ignore higher courts.'],
      ['Abandon all regulation in this area and allow unrestricted spending', 'Disclosure regulation is constitutionally available and policy-relevant; abandoning the entire area concedes accountability tools the briefing should recommend.', 'Disclosure remains a live regulatory space.'],
    ],
    lesson: 'Workable constitutional recommendations distinguish foreclosed options from available ones. Caps are foreclosed; disclosure is available — and the Citizens United majority explicitly identified disclosure as the less-restrictive constitutional alternative.',
  },
  {
    id: 4360935,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on preemption',
    prompt: 'For the state employer-verification statute under federal preemption pressure, the briefing\'s most defensible recommendation to the state is:',
    correct: 'Narrow the statute to operate only as a state-licensing condition (the space Chamber of Commerce v. Whiting protected) rather than as a parallel sanctions regime, and adopt the federal E-Verify framework as the verification mechanism to reduce conflict-preemption exposure',
    wrong: [
      ['Defend the statute as enacted and litigate aggressively', 'A losing posture in litigation is not a recommendation; the briefing must identify how to reformulate the statute to maximize its surviving operation, not just defend the indefensible.', 'Defense of a flawed statute is not the goal.'],
      ['Repeal the statute entirely and yield the field to federal authority', 'Whiting confirms that states retain real authority in this area; total repeal cedes constitutionally available state power unnecessarily.', 'Total repeal overcorrects.'],
      ['Challenge the federal statute as exceeding Congress\'s enumerated powers', 'Federal authority over immigration is well-established under the foreign-commerce and naturalization powers; a frontal challenge to federal immigration legislation is a losing strategy.', 'Federal immigration authority is settled.'],
    ],
    lesson: 'Constitutional recommendations operate in the doctrinal space that actually exists. Whiting preserved a real lane for state licensing-based action; the recommendation builds the statute to fit inside that lane.',
  },
  {
    id: 4360936,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on the monument',
    prompt: 'For the courthouse Ten Commandments monument, the briefing\'s most defensible recommendation to the county council is:',
    correct: 'Either modify the display to place the Ten Commandments among comparable historical legal-tradition markers (Hammurabi, Magna Carta, Justinian) and accompany the placement with an explanatory historical plaque — improving its Van Orden-style historical-context defense — or remove it; an unaccompanied standalone monument carries elevated Establishment Clause risk after Bremerton',
    wrong: [
      ['Keep the monument as installed and litigate; courts are increasingly tolerant of religious displays', 'Even under Bremerton\'s historical-practice framework, context matters; a standalone display without historical framing remains at risk. "Courts are increasingly tolerant" is not a recommendation, it is a hope.', 'Context still matters under the new test.'],
      ['Remove the monument and ban all religious imagery from county property as a categorical rule', 'A categorical ban overcorrects; many religious-historical references at government sites have been upheld. The recommendation should manage risk, not eliminate the category.', 'Categorical bans are not constitutionally required.'],
      ['Move the monument to a non-courthouse county building to escape Establishment Clause scrutiny', 'Establishment Clause scrutiny applies to government religious displays generally, not only to courthouses. Relocation does not solve the problem.', 'The scrutiny travels with the government action.'],
    ],
    lesson: 'Religious-display recommendations focus on context. Van Orden upheld a Ten Commandments display amid other historical markers; the recommendation rebuilds the Greenfield display\'s context or accepts that the unaccompanied version may not survive Bremerton scrutiny.',
  },
  {
    id: 4360937,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on sanctuary policy',
    prompt: 'For the county\'s ICE-detainer refusal policy, the briefing\'s most defensible recommendation to the county is:',
    correct: 'Continue the policy of declining detainers without a judicial warrant (consistent with Printz and Murphy v. NCAA), document the policy basis (anti-commandeering and Fourth Amendment seizure concerns about detainer-based custody extension), and maintain cooperative communication with federal authorities on matters where local-federal cooperation is voluntary and lawful',
    wrong: [
      ['Honor all ICE detainers to avoid federal litigation', 'Detainers without judicial warrants raise Fourth Amendment concerns (Miranda v. ICE, Jimenez Moreno v. Napolitano) about extended custody on civil immigration grounds. Reflexive honor creates a different category of liability.', 'Detainer compliance carries its own legal risk.'],
      ['Refuse all federal cooperation in any law-enforcement matter as a constitutional statement', 'Anti-commandeering protects against compulsion, not voluntary cooperation. A categorical refusal goes far beyond what the doctrine requires and harms legitimate joint operations.', 'Voluntary cooperation remains lawful.'],
      ['Petition Congress to require localities to honor detainers, eliminating the policy ambiguity', 'Such a statute would be vulnerable under Printz; the better recommendation is to build the county policy within the existing doctrinal frame, not to invite a likely-unconstitutional federal command.', 'Statutory commandeering invites constitutional challenge.'],
    ],
    lesson: 'Constitutional recommendations in federalism disputes work within structural doctrine. Anti-commandeering permits non-cooperation but does not require obstruction; the briefing\'s recommendation distinguishes the two.',
  },
  {
    id: 4360938,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation on voter ID',
    prompt: 'For the original Greenfield voter-ID and mail-ballot dispute, the briefing\'s most defensible recommendation to county officials is:',
    correct: 'Implement the rules with significant burden-mitigation measures (free ID issuance at multiple county sites, expanded mail-ballot reasons, robust voter education, post-election audits) to address as-applied burdens under Crawford\'s preserved as-applied avenue, while documenting the state interest in election integrity in the rule\'s administrative record',
    wrong: [
      ['Repeal both rules entirely to eliminate any equal-protection exposure', 'Crawford upheld voter-ID rules facially; repeal overcorrects. The recommendation should make the rules constitutionally defensible, not abandon them.', 'Repeal is not required after Crawford.'],
      ['Implement the rules without mitigation and litigate any as-applied challenges aggressively', 'Crawford explicitly preserved as-applied challenges; without mitigation, the rules invite plaintiff-favorable findings that the burden is more than minimal for specific groups.', 'Mitigation is the as-applied risk control.'],
      ['Add additional rules (proof of citizenship, address verification, fingerprinting) to deter challenges', 'Stacking additional rules increases the cumulative burden the Anderson-Burdick balancing test weighs against the state; it worsens, rather than improves, the constitutional posture.', 'Anderson-Burdick weighs cumulative burdens.'],
    ],
    lesson: 'Crawford left the constitutional space for voter-ID rules but conditioned it on the absence of as-applied burdens. The Greenfield recommendation builds the mitigation infrastructure that keeps the rules inside Crawford\'s preserved space.',
  },
  {
    id: 4360939,
    chapter: CHAPTER,
    title: 'Greenfield: recommendation standards',
    prompt: 'Across all eight disputes, the capstone\'s recommendation standard requires the briefing to:',
    correct: 'Provide an action recommendation grounded in named precedent, document the constitutional reasoning, anticipate the strongest opposing legal position, and identify the procedural safeguards (process, documentation, review) that make the recommendation constitutionally defensible in practice',
    wrong: [
      ['Identify the most politically popular recommendation and defend it on partisan grounds', 'The capstone is explicitly nonpartisan; popularity is not a constitutional argument. Recommendations defend on legal grounds, not political ones.', 'Nonpartisan is the rubric.'],
      ['Recommend whatever maximizes county discretion regardless of constitutional risk', 'Maximizing discretion without legal grounding produces recommendations that fail in court and cost the county litigation expenses and reputational damage.', 'Discretion within constitutional bounds, not beyond them.'],
      ['Refuse to recommend, citing the complexity of constitutional analysis', 'The capstone explicitly requires a recommendation; refusal abandons the assignment. Complexity is what the briefing is built to navigate, not what justifies silence.', 'A briefing must conclude.'],
    ],
    lesson: 'The capstone recommendation standard mirrors how serious legal advisors actually write: a named action, named precedent, anticipated opposition, and procedural safeguards. Anything less is opinion; this is analysis.',
  },

  // -------------------------------------------------------------------------
  // LESSONS 9–10 — Synthesis (4360940–4360946)
  // Connecting the local decision to broader constitutional principles
  // -------------------------------------------------------------------------
  {
    id: 4360940,
    chapter: CHAPTER,
    title: 'Greenfield: federalism synthesis',
    prompt: 'Looking across all eight disputes, the briefing\'s synthesis section observes that federalism doctrine operates through several distinct mechanisms. The most accurate statement of those mechanisms is:',
    correct: 'Anti-commandeering (Printz, Murphy) limits direct federal commands to states; preemption (Article VI) resolves conflicts between federal and state statutes; conditional spending (Dole, NFIB) allows federal influence through grant conditions subject to coercion limits; and the Tenth Amendment reserves powers not delegated to the federal government — each operating in a distinct doctrinal space',
    wrong: [
      ['The Tenth Amendment is the master federalism doctrine and the others are subsidiary applications', 'The Tenth Amendment is a reservation, not a master doctrine; anti-commandeering, preemption, and conditional spending operate as separate doctrines with their own tests.', 'The Tenth is one piece, not the whole.'],
      ['Federalism doctrine collapses into a single state-vs-federal balance that courts apply ad hoc', 'Federalism doctrine is structurally differentiated; courts apply distinct tests depending on whether the question is commandeering, preemption, spending, or reserved-powers analysis.', 'Distinct doctrines, distinct tests.'],
      ['Federalism doctrine has been displaced by Commerce Clause analysis in modern cases', 'Commerce Clause cases (Lopez, Morrison, Sebelius) address congressional power\'s scope, but federalism doctrine — anti-commandeering, preemption, conditional spending — remains structurally separate and frequently controlling.', 'Commerce and federalism are different axes.'],
    ],
    lesson: 'Capstone-level synthesis means seeing that federalism is not one doctrine but a family of distinct doctrines with distinct tests. Greenfield\'s disputes — sanctuary, preemption, grants — each map onto a different member of the family.',
  },
  {
    id: 4360941,
    chapter: CHAPTER,
    title: 'Greenfield: separation-of-powers synthesis',
    prompt: 'The briefing\'s synthesis section observes that several Greenfield disputes implicate separation of powers within levels of government. The most accurate generalization is:',
    correct: 'Separation of powers operates at the federal level (Article I lawmaking, Article II execution, Article III adjudication) and is mirrored at the state and local levels through state constitutions; many Greenfield disputes (book removal by a school board, sheriff stop policy, county council resolutions) involve executive or quasi-legislative bodies acting in zones the Constitution constrains',
    wrong: [
      ['Separation of powers applies only to the federal government and has no state-level analogue', 'Every state constitution structures separation of powers among legislative, executive, and judicial branches; the federal model is replicated, not unique.', 'State constitutions structure separation locally.'],
      ['Local government bodies are not constrained by separation-of-powers principles', 'Local government bodies are creatures of state law and state constitutions, both of which impose structural constraints; they are also bound by the federal Constitution when they act as state actors.', 'Local actors are bounded actors.'],
      ['Separation of powers is purely about federal-state divisions, not within-government branch divisions', 'Separation of powers (branch-versus-branch) and federalism (federal-versus-state) are distinct structural doctrines; conflating them produces analytical confusion.', 'Two structural axes, not one.'],
    ],
    lesson: 'Synthesis across the Greenfield docket reveals that constitutional structure operates on two axes: vertical (federalism) and horizontal (separation of powers). The capstone\'s integrative value is seeing both at once in a single local dispute.',
  },
  {
    id: 4360942,
    chapter: CHAPTER,
    title: 'Greenfield: civil-liberties tradeoffs',
    prompt: 'The briefing\'s synthesis section observes that several Greenfield disputes require weighing civil liberties against legitimate government interests. The most accurate generalization about how constitutional doctrine performs this weighing is:',
    correct: 'Courts use tiered scrutiny (rational basis, intermediate, strict) calibrated to the right at issue, plus context-specific frameworks like Anderson-Burdick balancing for voting, Terry reasonableness for stops, and historical-practice analysis for the Establishment Clause — there is no single weighing formula across all rights',
    wrong: [
      ['Constitutional doctrine always applies strict scrutiny when civil liberties are at stake', 'Strict scrutiny is the most demanding tier but is not universally applied; many civil-liberties contexts use intermediate scrutiny, rational basis with bite, or context-specific frameworks.', 'Tiers are calibrated, not universal.'],
      ['Constitutional doctrine treats civil liberties as absolute, with no balancing allowed', 'No civil liberty is absolute; even core First Amendment rights are subject to time-place-manner regulation, defamation rules, and other doctrinal limits.', 'No right is absolute under doctrine.'],
      ['Constitutional doctrine balances all rights against all interests using a single ad-hoc proportionality test', 'US doctrine has developed differentiated frameworks rather than a single proportionality test; the proportionality model is more European than American.', 'US uses tiered and context-specific, not unified proportionality.'],
    ],
    lesson: 'Capstone synthesis recognizes that constitutional doctrine is plural: tiers of scrutiny, balancing tests, historical-practice analyses, and context-specific frameworks coexist. Mastering applied analysis means picking the right framework for the right right.',
  },
  {
    id: 4360943,
    chapter: CHAPTER,
    title: 'Greenfield: judicial review synthesis',
    prompt: 'The briefing\'s synthesis section observes that every Greenfield dispute ultimately runs through judicial review. The most accurate generalization is:',
    correct: 'Judicial review (established in Marbury v. Madison, 1803) gives courts authority to invalidate legislative and executive action inconsistent with the Constitution, applied at both federal and state levels; this authority is exercised through case-by-case adjudication of standing, ripeness, and merits, not through abstract review',
    wrong: [
      ['Judicial review is unlimited and allows courts to invalidate any law they disagree with', 'Judicial review requires standing, ripeness, and a justiciable case or controversy; courts cannot issue advisory opinions or invalidate laws they merely dislike.', 'Justiciability constrains review.'],
      ['Judicial review applies only to federal laws, not to state or local action', 'Judicial review applies at every level; federal courts review state laws against the federal Constitution, and state courts review state and local action against state constitutions.', 'Review operates at every level.'],
      ['Judicial review was eliminated by the Eleventh Amendment and now applies only to federal actors', 'The Eleventh Amendment limits suits against states in federal court (sovereign immunity), but does not eliminate judicial review of state action; many doctrinal pathways (Ex parte Young, individual capacity suits) preserve review.', 'Eleventh Amendment narrows access, not review.'],
    ],
    lesson: 'Synthesis at the capstone level connects every applied dispute to its enforcement mechanism. Marbury\'s judicial-review architecture is what gives every Greenfield doctrine its bite — without enforceable review, doctrine would be advisory.',
  },
  {
    id: 4360944,
    chapter: CHAPTER,
    title: 'Greenfield: incorporation synthesis',
    prompt: 'The briefing\'s synthesis section observes that the Greenfield disputes implicate provisions of the Bill of Rights even though the actors are state and local. The doctrinal bridge is:',
    correct: 'The Fourteenth Amendment, through the doctrine of selective incorporation, applies most Bill of Rights protections (First, Fourth, Fifth except Grand Jury, Sixth, Eighth, Second per McDonald v. Chicago) to the states and their political subdivisions',
    wrong: [
      ['The Bill of Rights applies directly to state and local actors without need for incorporation', 'The original Bill of Rights bound only the federal government (Barron v. Baltimore, 1833); application to the states required the Fourteenth Amendment and selective incorporation.', 'Incorporation is the doctrinal bridge.'],
      ['Total incorporation applies — every Bill of Rights provision binds the states automatically', 'The Court adopted selective incorporation, not total incorporation; some provisions (Third, Seventh, Grand Jury part of Fifth) have not been incorporated.', 'Selective, not total.'],
      ['Incorporation applies only to procedural rights, not to substantive rights', 'Incorporation includes both procedural and substantive protections (e.g., First Amendment substantive speech rights, Second Amendment per McDonald, Fourth Amendment search-and-seizure protections).', 'Incorporation covers both procedural and substantive.'],
    ],
    lesson: 'A synthesis-level briefing recognizes that the Fourteenth Amendment is the doctrinal bridge from federal Bill of Rights protections to state and local accountability. Greenfield\'s school board, sheriff, and council are bound through this bridge.',
  },
  {
    id: 4360945,
    chapter: CHAPTER,
    title: 'Greenfield: democratic-theory synthesis',
    prompt: 'The briefing\'s closing synthesis observes that constitutional doctrine shapes how local democratic deliberation operates. The most accurate generalization is:',
    correct: 'Constitutional doctrine constrains democratic majorities at the local level (voting-rights protections, First Amendment limits on majority speech regulation, Establishment Clause limits on majority religious endorsement) precisely because the Framers anticipated that local majorities could violate minority rights — a Madisonian concern articulated in Federalist 10 and 51',
    wrong: [
      ['Constitutional doctrine assumes local democratic majorities will always respect minority rights and therefore imposes minimal constraints', 'The Framers were skeptical of local majorities (Federalist 10, 51); the constitutional structure imposes substantial constraints on majoritarian action precisely because of that skepticism.', 'Madison built in skepticism of majorities.'],
      ['Constitutional doctrine treats local democratic outcomes as conclusive and not subject to judicial second-guessing', 'Judicial review explicitly subjects local democratic outcomes to constitutional scrutiny; counter-majoritarianism is a feature, not a bug.', 'Counter-majoritarianism is structural.'],
      ['Constitutional doctrine prioritizes pure majoritarianism over minority rights', 'The Bill of Rights and the Fourteenth Amendment exist precisely to protect minority rights against majoritarian preferences; doctrine prioritizes neither absolutely but balances both.', 'Rights protect against majorities.'],
    ],
    lesson: 'Capstone synthesis closes by connecting doctrine to democratic theory. Every Greenfield dispute is, at root, a test of how a local majority\'s preference interacts with constitutional minority-rights protections — the Madisonian question that animates the whole framework.',
  },
  {
    id: 4360946,
    chapter: CHAPTER,
    title: 'Greenfield: capstone integration',
    prompt: 'Closing the briefing, the synthesis section names the unifying skill the capstone has taught. The most accurate articulation is:',
    correct: 'Constitutional analysis is the disciplined practice of identifying the right doctrine for a given fact pattern, applying the doctrine\'s actual test (not a generic tier of scrutiny), engaging the strongest counterargument, and recommending action grounded in precedent and procedural safeguards — across federalism, separation of powers, civil liberties, and democratic-theory dimensions simultaneously',
    wrong: [
      ['Constitutional analysis is memorizing case names and applying whichever case sounds most relevant', 'Case-name recall is a starting point, not the skill. The capstone tests doctrinal application and integration, not flashcard knowledge.', 'Recall is the floor, not the ceiling.'],
      ['Constitutional analysis is identifying the partisan winner in each dispute', 'The capstone is explicitly nonpartisan; partisan framing is precisely what the rubric excludes.', 'Nonpartisanship is the rubric.'],
      ['Constitutional analysis is determining whether the Founders would approve of a given action', 'Original-intent analysis is one interpretive approach among several; capstone-level work engages multiple interpretive methods (text, structure, precedent, history) rather than collapsing to one.', 'Originalism is one tool among several.'],
    ],
    lesson: 'The capstone\'s integrative claim is that constitutional reasoning is one discipline, applied across many doctrines. Mastering it means moving fluently between doctrine and fact, precedent and prediction, recommendation and safeguard — and doing so on a defined record, in a nonpartisan voice, for a real decision-maker.',
  },
])
