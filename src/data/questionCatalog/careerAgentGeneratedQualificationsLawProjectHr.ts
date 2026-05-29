import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'
import { CAREER_QUALS_LAW_PM_HR_SUB_TOPICS, CAREER_QUALS_LAW_PM_HR_MENTOR_HINTS, CAREER_QUALS_LAW_PM_HR_CORRECT_SHORTENED } from './careerQualsLawProjectHrPolish'
import { polish as runPolish } from './polishPipeline'


const SOURCE = 'Floe career qualifications law/project/HR canonical bank'

// Canonical Qualifications: Law / Project / HR subfamily
// (Bar Exam + PMP Wrangler + SHRM People Ops).
// Consolidates the prior LawProjectHr/LawProjectHr2/LawProjectHr3 triplet.
// Every wrong answer carries a bespoke "why this is wrong" line — no
// DEFAULT_FLAW constant. Chapter names align to syllabi:
//   src/data/syllabi/career/bar_exam.md
//   src/data/syllabi/career/pmp_wrangler.md
//   src/data/syllabi/career/shrm_people.md
function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][], // [label, bespoke whyWrong]
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const careerAgentGeneratedQualificationsLawProjectHrBaseQuestionsByTrack: Record<string, Question[]> = {
  // ---------------------------------------------------------------------------
  // BAR EXAM (Law Fog Machine)
  // Syllabus chapters (bar_exam.md):
  //  1. The Bar Exam Operating System
  //  2. MBE Core I - Civil Procedure, Constitutional Law, and Evidence
  //  3. MBE Core II - Contracts, Torts, Criminal Law, and Real Property
  //  4. Essay Subjects and MEE Rule Muscles
  //  5. MPT - Lawyering in a 90-Minute Box
  //  6. Memorization, Retrieval, and Attack Outlines
  //  7. MBE Strategy and Distractor Surgery
  //  8. Simulation, Final Review, and Exam-Day Execution
  // ---------------------------------------------------------------------------
  barExam: [
    // Chapter 1: The Bar Exam Operating System
    q(4250700, 'Career Skills', 'The Bar Exam Operating System', 'Call of the question first',
      'An MBE question has a long dispute narrative, but the call asks only which evidence objection should be sustained. What should the test taker do first?',
      'Use the call to classify the subject and legal task before mining the facts',
      [
        ['Read the answer choices first and pick the most familiar doctrine', 'Reading choices before the call invites familiarity bias toward whichever doctrine the test taker remembers best, which is rarely what the question asks.'],
        ['Assume every long fact pattern is civil procedure', 'Length is not a subject signal. Item writers vary length deliberately across subjects.'],
        ['Ignore the call because the story usually contains all the clues', 'The call defines the scoring task. Ignoring it almost guarantees writing a correct answer to the wrong question.'],
      ],
      'The call of the question is the exam compass. It keeps a long story from dragging the candidate into the wrong subject swamp.'),
    q(4250701, 'Career Skills', 'The Bar Exam Operating System', 'Element shopping list',
      'A contracts essay asks whether a buyer can enforce a promise, and the facts mention offer language, a delayed acceptance, and no payment yet. Strongest way to begin?',
      'Identify formation elements and apply the facts to offer, acceptance, consideration, and any timing problem',
      [
        ['Start with damages because money is usually interesting', 'Damages come after liability. Starting with remedies skips the entire question the call asked.'],
        ['Assume no contract exists whenever payment has not happened', 'Payment is not a formation element under common law or UCC. Skipping straight to no-contract loses the analysis points.'],
        ['Write a long paragraph about fairness without naming elements', 'Bar essays grade legal structure plus fact application. Fairness alone earns no doctrinal credit.'],
      ],
      'Essay points come from legal structure plus fact use. Formation questions need elements before the answer starts decorating the room.'),

    // Chapter 2: MBE Core I - Civil Procedure, Constitutional Law, and Evidence
    q(4250702, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Personal jurisdiction gap',
      'A federal-court question says venue is proper and subject-matter jurisdiction exists, but the defendant had no meaningful forum contacts. Which remaining issue is most likely decisive?',
      'Whether the court has personal jurisdiction over the defendant',
      [
        ['Whether the complaint uses numbered paragraphs', 'Formatting is a Rule 10 niche, not a jurisdiction issue. The facts point to minimum contacts.'],
        ['Whether venue alone cures every jurisdiction problem', 'Venue and personal jurisdiction are separate doctrines. Proper venue does not establish personal jurisdiction.'],
        ['Whether the plaintiff prefers federal court', 'Plaintiff preference is not a jurisdictional doctrine. The court still needs constitutional authority over the defendant.'],
      ],
      'Civil procedure loves separate boxes. Subject-matter jurisdiction, personal jurisdiction, venue, and pleadings each do different work.'),
    q(4250703, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Removal requirements',
      'A defendant receives a state-court complaint that could have been filed in federal court and wants to move the case there. Which issue should the examinee watch first?',
      'Removal requirements, including timing, federal jurisdiction, and any forum-defendant limit',
      [
        ['Whether the state judge personally prefers federal court', 'Judicial preferences are not a removal factor. The statute governs.'],
        ['Whether discovery has already made the case interesting', 'Interestingness is not a removal trigger. Statutory timing is.'],
        ['Whether the plaintiff used persuasive adjectives in the complaint', 'Removal turns on jurisdictional and procedural facts, not rhetorical style.'],
      ],
      'Civil procedure rewards procedural gateways. Removal has jurisdiction, timing, and statutory limits — not desire.'),
    q(4250704, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Default judgment',
      'A defendant was properly served, missed the response deadline, and the plaintiff seeks a default judgment. What should the examinee analyse before assuming the plaintiff wins everything?',
      'The default and default-judgment requirements, including notice, proof, and limits on requested relief',
      [
        ['Whether the defendant seems busy enough to deserve mercy', 'Sympathy is not a procedural test. Notice and proof are.'],
        ['Whether missing one deadline creates unlimited damages', 'Default does not waive proof of damages above what was demanded. Relief is bounded.'],
        ['Whether venue disappears after service', 'Venue is not eliminated by default. It is a separate question.'],
      ],
      'Default is powerful, but courts still require notice, proof of damages where applicable, and adherence to the relief pleaded.'),
    q(4250705, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'State action gate',
      'A private shopping centre excludes a speaker, and the call asks whether the speaker has a constitutional claim against the centre. Threshold issue?',
      'Whether there is state action or another basis for constitutional limits to apply',
      [
        ['Whether the speech is persuasive enough to deserve protection', 'Persuasiveness is not a constitutional test. Most speech qualifies whether or not it is good.'],
        ['Whether private property is always a public forum', 'Private property is generally not a public forum, which is exactly why state action is the threshold.'],
        ['Whether unfair private decisions violate the Constitution', 'The Constitution generally constrains government, not private actors. That is the whole state-action point.'],
      ],
      'Constitutional rights usually constrain government action. Before choosing scrutiny, ask whether the Constitution is in the room.'),
    q(4250706, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Levels of scrutiny',
      'A law treats people differently based on a classification, and the answer choices offer different levels of review. Best first step?',
      'Identify the right or classification at issue before selecting the level of scrutiny',
      [
        ['Pick strict scrutiny for every constitutional question', 'Strict scrutiny applies only to specific classifications and rights. Auto-selecting it overcompresses the analysis.'],
        ['Apply the mailbox rule because review levels sound procedural', 'The mailbox rule is a contracts doctrine. It is in the wrong subject entirely.'],
        ['Choose rational basis whenever the facts feel annoying', 'Rational basis is the default for ordinary classifications, but emotional reaction is not the trigger.'],
      ],
      'Con law questions sort before they argue. The classification or right points toward the review standard.'),
    q(4250707, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Prior restraint',
      'A city requires speakers to get approval before distributing political leaflets in a public park, and officials may deny permits for any reason. What jumps out?',
      'A prior restraint or licensing scheme with unbridled discretion affecting public-forum speech',
      [
        ['Rational basis is fine because parks are convenient', 'Public-forum speech regulation faces heightened scrutiny, not rational basis.'],
        ['Dormant Commerce Clause because leaflets travel', 'Dormant Commerce Clause governs interstate economic regulation, not speech licensing.'],
        ['Takings because paper has value', 'Permit denials are not takings. Wrong doctrine entirely.'],
      ],
      'Speech questions start with forum, content, and licensing discretion. Prior approval systems trigger heightened scrutiny.'),
    q(4250708, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Hearsay purpose',
      'A witness says, "I heard Dana yell that the floor was wet," offered to show Dana had notice, not that the floor was actually wet. Best hearsay move?',
      'Recognise that the statement may be nonhearsay if offered for notice rather than truth',
      [
        ['Exclude it automatically because all out-of-court words are hearsay', 'Hearsay requires the statement be offered for its truth. Notice purpose takes it outside the definition.'],
        ['Admit it only if Dana wrote it in a notarised diary', 'Notarisation is not a hearsay rule. The form does not change the purpose-based analysis.'],
        ['Treat notice and truth as the same purpose', 'Notice asks what the listener heard; truth asks whether the underlying fact was true. The Rules treat them differently.'],
      ],
      'Hearsay analysis starts with purpose. The same words can be hearsay for truth but nonhearsay for notice, effect, or state of mind.'),
    q(4250709, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Character trap',
      'In a civil negligence trial, the plaintiff offers testimony that the defendant is generally careless to prove the defendant acted carelessly during the accident. Likely issue?',
      'Improper character evidence offered to prove conduct in conformity',
      [
        ['Best evidence rule because someone is describing behaviour', 'Best evidence applies to the content of writings, not to behavioural testimony.'],
        ['Privilege because all bad habits are confidential', 'No privilege protects general reputation for carelessness. Wrong doctrine.'],
        ['Authentication because careless people need certificates', 'Authentication concerns identifying physical or documentary evidence, not character.'],
      ],
      'Evidence questions hide propensity traps in ordinary-sounding testimony. Ask what the evidence is offered to prove.'),
    q(4250710, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Business records embedded statement',
      'A hospital record is offered under the business-records exception, but the entry includes a visitor statement about how the accident happened. Likely issue?',
      'Hearsay within hearsay — each layer needs an exception or nonhearsay purpose',
      [
        ['The best evidence rule because hospitals use paper', 'Best evidence governs writings, not hearsay layers.'],
        ['Automatic admission because all records are business records', 'The records exception covers the file itself; embedded statements need their own basis.'],
        ['Privilege because visitors are always confidential', 'No general visitor privilege exists. Wrong doctrine.'],
      ],
      'Evidence questions love layers. A record exception may handle the file, while an embedded statement still needs its own ticket.'),
    q(4250711, 'Career Skills', 'MBE Core I - Civil Procedure, Constitutional Law, and Evidence', 'Impeachment vs substantive',
      'A prior inconsistent statement is offered only to challenge a witness\'s credibility, not to prove the statement true. Key distinction?',
      'It may be admissible for impeachment even if not admitted substantively for truth',
      [
        ['It must be excluded because all prior statements are useless', 'Prior inconsistent statements have established impeachment uses. Excluding all of them ignores the Rules.'],
        ['It proves the truth automatically in every jurisdiction', 'Substantive admissibility under Rule 801(d)(1)(A) has specific requirements. Not every prior inconsistency is substantive.'],
        ['It becomes character evidence about general kindness', 'Impeachment is not character evidence in the propensity sense. Different doctrine.'],
      ],
      'Evidence often turns on purpose and limiting use. Impeachment and substantive proof are different lanes.'),

    // Chapter 3: MBE Core II - Contracts, Torts, Criminal Law, and Real Property
    q(4250712, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'UCC vs common law',
      'A seller of office chairs and a buyer orally agree to change delivery from 100 chairs to 140 chairs. Before choosing a modification rule, what should the examinee classify?',
      'Whether the transaction is for goods and therefore governed by UCC Article 2',
      [
        ['Whether the parties used fancy letterhead', 'Stationery is not a doctrine. Goods-versus-services determines the framework.'],
        ['Whether contract law disappears after formation', 'Contract law continues to govern modifications. It does not vanish at signing.'],
        ['Whether the buyer owns the delivery truck', 'Truck ownership is irrelevant to UCC scope. Subject matter of the contract is the test.'],
      ],
      'Contracts questions become manageable after framework choice. Goods point toward UCC Article 2; other bargains point toward common law.'),
    q(4250713, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Acceptance by performance',
      'A reward offer promises $500 to anyone who returns a lost laptop, and a student returns it without sending advance notice. What should the answer analyse?',
      'Whether a unilateral contract was accepted by completing the requested performance',
      [
        ['Whether the student drafted a formal counteroffer', 'Counteroffers are not required to accept a unilateral offer. Performance is the acceptance.'],
        ['Whether consideration requires a notarised bargain', 'Consideration requires bargain, not notarisation. Wrong formality.'],
        ['Whether the laptop owner had a corporate seal', 'Seals are an antiquated formality, irrelevant here.'],
      ],
      'Some offers invite acceptance by doing the thing requested. Identify offer type before forcing facts into a signature ceremony.'),
    q(4250714, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Negligence elements',
      'A negligence question shows careless conduct but also says the same injury would have occurred moments later from an unrelated event. Which element is under pressure?',
      'Causation, because breach must be linked to the injury',
      [
        ['Intent, because negligence always requires desire to harm', 'Intent is not a negligence element. Wrong doctrine entirely.'],
        ['Publication, because every tort needs a public statement', 'Publication is a defamation element, not a negligence one.'],
        ['Consideration, because carelessness creates a contract', 'Consideration is a contracts concept; it does not appear in negligence analysis.'],
      ],
      'Negligence is not just bad behaviour. The plaintiff needs duty, breach, causation, and damages in a tidy row.'),
    q(4250715, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Substantial certainty intent',
      'An MBE torts question says the defendant knew with substantial certainty that contact would occur, even though the defendant did not want harm. What does that phrase cue?',
      'Intent for an intentional tort may be shown by purpose or knowledge with substantial certainty',
      [
        ['Negligence only, because the defendant hoped nothing bad would happen', 'Substantial certainty exceeds the negligence standard. It is the classic dual definition of intent.'],
        ['Strict liability, because certainty always implies ultrahazardous activity', 'Substantial-certainty intent does not transform ordinary conduct into ultrahazardous activity.'],
        ['No tort because harm was not desired', 'Desire is not required. Knowledge with substantial certainty satisfies intent for many torts.'],
      ],
      'Small phrases carry the rule. Intentional torts turn on knowledge with substantial certainty, not just an angry motive.'),
    q(4250716, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Attempt substantial step',
      'A defendant buys supplies and drives to the scene intending to commit burglary, but police stop the defendant before entry. What should the answer focus on?',
      'Whether the defendant took a substantial step toward the crime with the required intent',
      [
        ['Whether burglary requires the police to be impressed', 'Police impressions do not control. The MPC and most state tests focus on substantial step.'],
        ['Whether preparation alone is enough for attempt', 'Mere preparation is generally not enough. The defendant must have moved further toward commission.'],
        ['Whether abandonment is automatic after arrest', 'Abandonment is voluntary; police interruption is involuntary and not a defence in most jurisdictions.'],
      ],
      'Attempt asks how far conduct moved from planning toward commission. Intent plus a substantial step is the lane.'),
    q(4250717, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Search after valid stop',
      'Police validly stop a driver for speeding, then open the trunk without consent, warrant, probable cause, or another exception. Strongest focus?',
      'Whether the trunk search violated the Fourth Amendment despite the valid traffic stop',
      [
        ['Whether speeding is morally disappointing', 'Moral judgments are not Fourth Amendment doctrine.'],
        ['Whether the driver should have cleaned the trunk', 'Trunk cleanliness has no constitutional dimension.'],
        ['Whether a valid stop automatically permits every later search', 'A lawful stop does not grant a general search authority. Each escalation needs its own basis.'],
      ],
      'A lawful stop is not a blank check. Search scope and exceptions still need their own analysis.'),
    q(4250718, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Recording priority',
      'A property MBE question gives dates for two deeds, recording, and one buyer learning of the earlier sale. What should the examinee focus on?',
      'The recording statute type, notice facts, and recording order',
      [
        ['Which buyer has the nicer handwriting', 'Handwriting is irrelevant to priority. The recording statute governs.'],
        ['Only the first date mentioned in the question', 'Recording order, knowledge, and statute type all matter; cherry-picking one date misses the analysis.'],
        ['Whether the property has sentimental value', 'Sentiment does not enter the priority analysis. Statute and notice do.'],
      ],
      'Recording questions are mechanical in a good way. Statute type plus notice plus recording order drives priority.'),
    q(4250719, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Covenant running with land',
      'A deed restriction says each owner must pay for shared driveway upkeep, and a later buyer refuses because they never signed the original promise. What should the examinee examine?',
      'Whether the covenant or equitable servitude runs with the land and binds successors',
      [
        ['Whether driveway paint colour controls contract capacity', 'Aesthetics have no doctrinal role here. Running-covenant elements do.'],
        ['Whether promises always vanish after the first sale', 'Some promises run with the land precisely so they do not vanish at sale.'],
        ['Whether the buyer likes the neighbours', 'Neighbour relations do not determine whether a covenant runs.'],
      ],
      'Property questions love promises attached to land. Look for intent, notice, touch-and-concern, and the remedy sought.'),
    q(4250720, 'Career Skills', 'MBE Core II - Contracts, Torts, Criminal Law, and Real Property', 'Landlord notice and duty',
      'A tenant reports a broken stair, the landlord promises repair, and a guest is injured two weeks later when nothing is fixed. Issue?',
      'A landlord duty based on notice, control, lease terms, or undertaking to repair',
      [
        ['Adverse possession because stairs were used openly', 'Adverse possession is about acquiring title, not about injury duty. Wrong doctrine.'],
        ['Recording priority because the guest entered the building', 'Recording priority is unrelated to premises liability.'],
        ['Merger because promises about stairs are emotional', 'Merger doctrine handles conveyance issues, not premises injury duties.'],
      ],
      'Premises and landlord questions often turn on notice and control. A repair promise can reshape the duty picture.'),

    // Chapter 4: Essay Subjects and MEE Rule Muscles
    q(4250721, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Agency authority',
      'An employee signs a supply contract after the company repeatedly let that employee negotiate similar deals, though the employee lacked written authority this time. What should be analysed?',
      'Actual or apparent authority based on principal conduct and third-party perception',
      [
        ['Whether all contracts require board minutes', 'Board minutes are not a universal contract requirement. Authority can arise without them.'],
        ['Whether the employee personally liked the supplier', 'Personal feelings do not create or negate authority.'],
        ['Whether authority can exist only in magic words', 'Apparent authority exists precisely because manifestations matter, not magic words.'],
      ],
      'Agency questions turn on manifestations and reasonable reliance. Written authority helps, but conduct can matter a great deal.'),
    q(4250722, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Capacity vs undue influence',
      'A will leaves everything to a caregiver who isolated the testator during serious illness, but witnesses say the testator understood the property and heirs. What should the essay separate?',
      'Testamentary capacity from possible undue influence',
      [
        ['Capacity from venue because both involve serious paperwork', 'Venue is a procedural concept, not a wills doctrine.'],
        ['Undue influence from hearsay only', 'Hearsay rules are evidentiary; undue influence is a substantive wills doctrine. They are different layers.'],
        ['Caregiver kindness from every legal doctrine', 'Doctrines do not respond to caregiver kindness. They respond to facts about influence.'],
      ],
      'Wills essays test related but distinct doctrines. A person may have capacity while still being vulnerable to improper influence.'),
    q(4250723, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Best interests of the child',
      'A custody essay gives both parents workable schedules, one recent relocation plan, and school-stability facts. What should the answer emphasise?',
      'The best interests of the child using the concrete stability, caregiving, and practical facts provided',
      [
        ['Which parent writes more emotional text messages', 'Text-message style is not a custody standard. Best interests is.'],
        ['A punishment theory for the parent who moved', 'Family law does not punish relocation per se. It weighs effects on the child.'],
        ['A contract mirror-image rule for parenting plans', 'The mirror-image rule is a contracts doctrine, not a family-law one.'],
      ],
      'Family law questions ask for child-centred judgement. Organise facts around the governing standard, not the loudest adult.'),
    q(4250724, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Attachment before priority',
      'A lender claims a security interest in restaurant equipment but the facts are unclear about an authenticated security agreement. What must be established before priority?',
      'Attachment, including value, debtor rights in collateral, and an enforceable security agreement (or control/possession where applicable)',
      [
        ['Whether the lender has a charming logo', 'Branding does not establish a security interest.'],
        ['Whether priority can exist before any interest attaches', 'Priority is a question among interests that exist. No attachment means no interest to rank.'],
        ['Whether the debtor promised to be tidy', 'Tidiness is not an Article 9 element.'],
      ],
      'Secured transactions has a useful sequence. Attachment first, perfection second, priority third keeps the moving pieces from tap dancing.'),
    q(4250725, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Proceeds continuity',
      'A debtor sells inventory subject to a perfected security interest and receives identifiable cash proceeds. What should the creditor analyse next?',
      'Whether the security interest continues in proceeds and whether perfection in the proceeds remains effective',
      [
        ['Whether selling collateral makes all liens vanish politely', 'Selling collateral does not automatically extinguish the security interest. Article 9 follows the value.'],
        ['Whether proceeds matter only for real estate', 'Proceeds rules under Article 9 apply broadly, not just to real estate.'],
        ['Whether the debtor can rename cash to avoid Article 9', 'Relabelling does not escape Article 9. The doctrine looks at the economic substance.'],
      ],
      'Article 9 follows the value. Collateral can turn into proceeds, and the analysis follows that trail.'),
    q(4250726, 'Career Skills', 'Essay Subjects and MEE Rule Muscles', 'Specific performance',
      'A buyer wants a court order forcing sale of a unique parcel of land after the seller breaches. What should the answer consider?',
      'Specific performance and whether legal damages are inadequate',
      [
        ['Punitive damages for every breach of contract', 'Punitive damages are not generally available for breach of contract.'],
        ['Strict scrutiny because land is important', 'Strict scrutiny is a constitutional standard, not a contracts remedy.'],
        ['A criminal injunction against disappointment', 'Disappointment is not a basis for criminal action. Wrong category of law.'],
      ],
      'Equitable remedies need more than breach. Ask whether money damages are inadequate and whether equitable limits apply.'),

    // Chapter 5: MPT - Lawyering in a 90-Minute Box
    q(4250727, 'Career Skills', 'MPT - Lawyering in a 90-Minute Box', 'Follow the task memo',
      'An MPT task memo asks for an objective memo using two cases in the Library and client emails in the File. Safest workflow?',
      'Follow the assigned format, extract rules from the Library, and apply the File facts to those rules',
      [
        ['Use outside law from memory because more law is better', 'The MPT is a closed-packet test. Outside law is off-limits and signals the candidate did not follow the task.'],
        ['Write a persuasive brief because all legal writing is interchangeable', 'Objective and persuasive writing are different tasks with different conventions and tones.'],
        ['Ignore the task memo and summarise the packet chronologically', 'The task memo is the grading rubric. Ignoring it forfeits structural credit.'],
      ],
      'The MPT is an open-packet performance test. The task memo is your boss for 90 minutes — useful, if a little rude.'),
    q(4250728, 'Career Skills', 'MPT - Lawyering in a 90-Minute Box', 'Library synthesis',
      'An MPT library includes a statute and two cases, one of which limits the statute in a fact pattern similar to the client file. What should the response do?',
      'Synthesise the statute with the limiting case and apply both to the client facts',
      [
        ['Quote the statute only and ignore the limiting case', 'Limiting cases narrow the statute. Skipping them misstates the controlling law.'],
        ['Use outside law because the library seems short', 'The library is the controlling authority for the task. Outside law is forbidden.'],
        ['Summarise client emails without any legal analysis', 'The MPT grades legal analysis, not narrative summary.'],
      ],
      'The MPT rewards using the packet as a closed universe. When cases narrow a statute, the answer shows that relationship.'),
    q(4250729, 'Career Skills', 'MPT - Lawyering in a 90-Minute Box', 'Format obedience',
      'An MPT task asks for a client letter explaining risks, but the examinee wants to write an internal memo because it feels easier. What should the examinee do?',
      'Follow the requested client-letter format and translate the packet law into practical advice',
      [
        ['Use any format as long as the law appears somewhere', 'Format is part of the graded task. Wrong format loses points regardless of legal accuracy.'],
        ['Write to the supervising attorney instead and hope', 'Audience misdirection is a clear MPT failure mode.'],
        ['Ignore weak facts so the letter sounds confident', 'Honest risk assessment is the point of a client letter. Cherry-picking facts undermines the task.'],
      ],
      'The MPT grades task performance, not just legal memory. Format, audience, and useful application are part of the work.'),

    // Chapter 6: Memorization, Retrieval, and Attack Outlines
    q(4250730, 'Career Skills', 'Memorization, Retrieval, and Attack Outlines', 'Wrong-answer log',
      'A learner misses six MBE questions on similar hearsay issues and writes only "careless" in the review notes. How should review improve?',
      'Record the rule tested, the tempting trap, the fact that mattered, and a next-time cue',
      [
        ['Stop reviewing because wrong answers feel unpleasant', 'Practice only compounds with structured review. Stopping locks in the error.'],
        ['Memorise only the letter choice', 'Letter choice does not generalise to the next question. The rule and trap do.'],
        ['Assume six misses in one topic are random noise', 'Six misses on one topic is a signal, not noise. Treating it as random forfeits the diagnostic.'],
      ],
      'Practice only compounds if review finds patterns. A good wrong-answer log turns bruises into map pins.'),
    q(4250731, 'Career Skills', 'Memorization, Retrieval, and Attack Outlines', 'Final-week diet',
      'In the final week, a learner wants to read outlines all day because practice questions feel humbling. Better choice?',
      'Keep doing timed mixed practice and focused review, using outlines to repair specific weak rules',
      [
        ['Avoid timed work so confidence stays unbothered', 'Test-day stamina requires test-day conditions. Avoiding them leaves the candidate undertrained.'],
        ['Memorise only topic names from the table of contents', 'Topic names without doctrinal content do not transfer to the test.'],
        ['Stop reviewing missed questions because the exam is close', 'Missed questions in the final week are the most fertile improvement source.'],
      ],
      'The final week needs active retrieval and calibration. Outlines help most when they answer a weakness exposed by practice.'),

    // Chapter 7: MBE Strategy and Distractor Surgery
    q(4250732, 'Career Skills', 'MBE Strategy and Distractor Surgery', 'Too-broad answer',
      'An MBE answer states a correct general rule but ignores the exception clearly triggered by the facts. How should the examinee treat it?',
      'Reject it if the exception changes the outcome in this scenario',
      [
        ['Choose it because general rules always beat facts', 'MBE answers are fact-fit contests. Generality is not a tiebreaker.'],
        ['Choose the longest answer regardless of fit', 'Length is not a correctness signal. Item writers vary length deliberately.'],
        ['Avoid all exceptions because they are rare', 'Exceptions are the most common MBE testing target. Avoiding them ensures wrong answers.'],
      ],
      'MBE distractors often sound like outline headings. The best answer fits the exact facts, including exceptions.'),
    q(4250733, 'Career Skills', 'MBE Strategy and Distractor Surgery', 'Exception spotlight',
      'An MBE contracts question states a general rule in one answer, but another answer names a narrower exception triggered by the buyer reliance facts. What guides the choice?',
      'Select the answer that applies the exception if the facts satisfy it',
      [
        ['Pick the broadest rule because it sounds more official', 'Sounding official is not a doctrine. Fit is.'],
        ['Choose the answer with the most familiar vocabulary', 'Familiarity bias is exactly what the item tests against.'],
        ['Avoid exceptions because exam writers rarely mean them', 'Exam writers test exceptions constantly. Avoiding them is a strategy mistake.'],
      ],
      'MBE answers are fact-fit contests. The correct choice often looks less grand because it is tailored to the exact facts.'),
    q(4250734, 'Career Skills', 'MBE Strategy and Distractor Surgery', 'Answer change discipline',
      'On review, a candidate wants to change an MBE answer only because the original now feels too obvious. What should the candidate ask?',
      'Whether a specific rule or fact shows the original answer is wrong before changing it',
      [
        ['Whether anxiety has a preference', 'Anxiety is not evidence. Concrete rule-and-fact basis is.'],
        ['Whether the least obvious answer is always correct', 'Obscurity is not a correctness signal. Item writers do not reward second-guessing.'],
        ['Whether changing more answers proves diligence', 'Volume of changes is not evidence of accuracy.'],
      ],
      'Review time is for evidence-based correction. Change when there is a real reason.'),
    q(4250735, 'Career Skills', 'MBE Strategy and Distractor Surgery', 'Missing element',
      'An essay fact pattern strongly suggests fraud but gives no false statement and no reliance facts. What should the answer do?',
      'Discuss fraud only if relevant, noting the missing elements rather than inventing them',
      [
        ['Invent reliance because fraud sounds exam-worthy', 'Inventing facts is the surest way to lose credit on a bar essay.'],
        ['Ignore all elements and write a fairness paragraph', 'Fairness without elements earns no doctrinal credit.'],
        ['Assume every bad outcome is fraud', 'Bar essays grade element-by-element analysis. Assumed conclusions are not analysis.'],
      ],
      'Issue spotting includes spotting what is absent. Good analysis uses the record you have, not the record you wish for.'),

    // Chapter 8: Simulation, Final Review, and Exam-Day Execution
    q(4250736, 'Career Skills', 'Simulation, Final Review, and Exam-Day Execution', 'Triage stuck question',
      'On a timed MBE block, a candidate cannot narrow a question after reasonable effort. Strongest move?',
      'Eliminate clearly wrong choices, make the best supported selection, mark if allowed, and preserve time for other questions',
      [
        ['Spend unlimited time to protect one point', 'Bar exams are expected-value games. One stubborn question should not eat the picnic basket.'],
        ['Leave it blank as a protest', 'Blank guarantees zero. Any educated guess beats zero.'],
        ['Change every later answer to compensate', 'Later answers are independent items. Random changes destroy correct answers.'],
      ],
      'Timed exams require expected-value judgement. One stubborn question should not eat the whole block.'),
    q(4250737, 'Career Skills', 'Simulation, Final Review, and Exam-Day Execution', 'Five-minute fork',
      'During an essay, a candidate spends five minutes stuck trying to remember the exact exception name. Best survival choice?',
      'State the closest accurate rule, apply the facts, flag uncertainty briefly, and keep moving',
      [
        ['Keep staring until perfect memory arrives', 'Memory does not arrive on cue. Time bleeds away while the rest of the essay sits unwritten.'],
        ['Abandon the whole essay because one label is missing', 'Partial essays earn substantial credit. Abandonment forfeits all of it.'],
        ['Invent a dramatic rule that contradicts the facts', 'Invented rules are graded as wrong rules. They lose more credit than an honest gap.'],
      ],
      'A bar answer can earn credit with imperfect memory if the structure and fact application are legally sensible. Momentum is a skill.'),
    q(4250738, 'Career Skills', 'Simulation, Final Review, and Exam-Day Execution', 'Time allocation',
      'A candidate has three essays left and 90 minutes total, but the first remaining essay feels like a favourite subject. Best time strategy?',
      'Allocate time across all remaining essays and leave the favourite when planned time expires',
      [
        ['Spend most of the block on the favourite and hope charm carries the rest', 'Polishing one essay while leaving two blank loses more credit than three solid partial answers.'],
        ['Skip outlines because time plans are decorative', 'Outlines are time savers, not time sinks. Skipping them leads to disorganised drafting.'],
        ['Write until the first essay feels perfect', 'Perfection has a steep marginal cost. Time spent there does not transfer to the remaining essays.'],
      ],
      'Exam survival means rationing effort. A strong partial answer on three essays usually beats one polished island and two empty beaches.'),
  ],

  // ---------------------------------------------------------------------------
  // PMP WRANGLER (Scope Creep Rodeo)
  // Syllabus chapters (pmp_wrangler.md):
  //  1. PMP Operating System
  //  2. People - Teams, Conflict, and Communication
  //  3. Stakeholders, Vision, and Business Value
  //  4. Starting and Planning the Work
  //  5. Executing, Monitoring, and Controlling
  //  6. Risk, Issues, Compliance, and Procurement
  //  7. Agile, Hybrid, and Tailoring Lab
  //  8. Exam Strategy and Simulation
  // ---------------------------------------------------------------------------
  pmpWrangler: [
    // Chapter 1: PMP Operating System
    q(4250800, 'Career Skills', 'PMP Operating System', 'Vague charter ask',
      'A sponsor asks the project manager to start work before the business case, objectives, and authority are clear. What should happen first?',
      'Develop or confirm the project charter and clarify objectives, success criteria, and authority',
      [
        ['Begin assigning tasks so the project feels alive', 'Activity without authority is exactly what governance is meant to prevent.'],
        ['Create a detailed schedule without knowing the purpose', 'Scheduling unknown scope produces precise nonsense.'],
        ['Let each stakeholder define success privately', 'Private definitions become conflicting expectations later. Initiation prevents this.'],
      ],
      'Initiation gives the project its reason and authority. A clear charter keeps early motion from becoming expensive wandering.'),

    // Chapter 2: People - Teams, Conflict, and Communication
    q(4250801, 'Career Skills', 'People - Teams, Conflict, and Communication', 'Quiet conflict',
      'Two specialists disagree in planning, and the tension is starting to freeze decisions. What should a servant-leader project manager usually do first?',
      'Facilitate a collaborative discussion focused on facts, interests, and project objectives',
      [
        ['Escalate immediately so executives pick a winner', 'Escalation before facilitation skips the project manager\'s collaboration role and signals weakness.'],
        ['Ignore the conflict until the schedule slips', 'Suppressed conflict compounds. Schedule slip is the predictable consequence.'],
        ['Assign blame based on who spoke last', 'Blame ordering is not conflict resolution. It hardens positions.'],
      ],
      'People questions favour listen, facilitate, coach, and remove obstacles before unnecessary escalation.'),
    q(4250802, 'Career Skills', 'People - Teams, Conflict, and Communication', 'Skill bottleneck',
      'A team repeatedly misses commitments because only one person knows a critical testing tool. Best project-manager response?',
      'Work with the team to address the skill bottleneck through training, pairing, or staffing adjustments',
      [
        ['Pressure the one expert to work weekends indefinitely', 'Heroics around a single expert worsen the underlying single-point-of-failure risk.'],
        ['Ignore the pattern because skills are personal', 'Capability gaps that block delivery are project-management issues, not personal ones.'],
        ['Remove testing from the definition of done', 'Reducing quality to hide a staffing issue trades short-term relief for downstream defects.'],
      ],
      'Team performance problems often need system fixes. Cross-training and capacity planning beat heroic bottlenecks.'),
    q(4250803, 'Career Skills', 'People - Teams, Conflict, and Communication', 'Private complaint',
      'A team member privately says another member dominates meetings and shuts down alternatives. What should a servant-leader project manager do?',
      'Explore the facts, coach respectful collaboration, and facilitate healthier team discussion',
      [
        ['Publicly scold the accused person at the next meeting', 'Public scolding violates psychological safety norms and rarely produces lasting behaviour change.'],
        ['Ignore interpersonal dynamics because only tasks matter', 'Team dynamics drive delivery. Ignoring them creates persistent drag.'],
        ['Remove the complaining team member from meetings', 'Removing the reporter punishes the wrong person and chills future feedback.'],
      ],
      'Team leadership includes psychological safety and collaboration. Address behaviour constructively before it becomes project drag.'),

    // Chapter 3: Stakeholders, Vision, and Business Value
    q(4250804, 'Career Skills', 'Stakeholders, Vision, and Business Value', 'Late reviewer',
      'A high-power stakeholder skips sprint reviews, then rejects the increment near release because it does not match expectations. Best next move?',
      'Meet with the stakeholder to understand the gap and adjust the engagement and communication approach',
      [
        ['Blame the delivery team before learning what happened', 'Blame skips diagnosis. The gap may be alignment, not delivery.'],
        ['Remove the stakeholder from the register', 'Stakeholder registers reflect reality, not preference. Removal does not eliminate influence.'],
        ['Hide future increments until final acceptance', 'Hiding work increases the chance of late rejection, not reduces it.'],
      ],
      'Stakeholder engagement is active care and feeding. Influence, expectations, and feedback loops need management throughout the project.'),
    q(4250805, 'Career Skills', 'Stakeholders, Vision, and Business Value', 'Benefit owner missing',
      'A project closes soon, but nobody has been assigned to measure benefits after transition to operations. What should the project manager do?',
      'Work with stakeholders to identify benefit ownership, measures, and transition responsibilities',
      [
        ['Assume benefits prove themselves after cake is served', 'Benefits without owners go unmeasured. Cake does not measure outcomes.'],
        ['Keep the project open forever to own operations', 'Project ownership of operations blurs accountability and prevents closure.'],
        ['Delete benefits from the business case', 'Deleting benefits hides the question. The work was justified by them.'],
      ],
      'Benefits need owners and measures beyond delivery. Closure should hand off the outcome work clearly.'),
    q(4250806, 'Career Skills', 'Stakeholders, Vision, and Business Value', 'Output without outcome',
      'The project delivered the planned app, but adoption data shows the intended cost savings are not appearing. What should the project manager do?',
      'Review benefits assumptions with stakeholders and recommend adjustments or reassessment based on evidence',
      [
        ['Declare total success because every feature shipped', 'Shipping is delivery, not benefit. Reported success without outcome misleads sponsors.'],
        ['Hide adoption data until closure paperwork is signed', 'Hiding adoption data turns a fixable issue into a credibility crisis.'],
        ['Add random features without a value discussion', 'Adding features does not fix an adoption problem and creates more maintenance.'],
      ],
      'Modern PMP logic connects deliverables to outcomes. Shipping the thing is not always the same as realising the benefit.'),

    // Chapter 4: Starting and Planning the Work
    q(4250807, 'Career Skills', 'Starting and Planning the Work', 'Critical-path squeeze',
      'A critical-path task slips four days, but the required delivery date cannot move. What should the project manager analyse?',
      'Schedule compression options such as crashing or fast-tracking, including cost, risk, and quality tradeoffs',
      [
        ['Use float from an unrelated noncritical activity to erase the slip', 'Float on noncritical paths does not protect the critical path. The slip on critical work still threatens the date.'],
        ['Cancel stakeholder communication until the date is missed', 'Silence during slippage destroys trust faster than the slippage itself.'],
        ['Cut quality checks without assessing consequences', 'Quality cuts often re-emerge as defects that consume the saved time and more.'],
      ],
      'Critical-path delays threaten the finish date. Compression is possible, but tradeoffs need daylight.'),
    q(4250808, 'Career Skills', 'Starting and Planning the Work', 'Dependency surprise',
      'A planned activity cannot start until a vendor API is ready, but that dependency was not captured in the schedule. Best next action?',
      'Update the schedule model and risk or issue information, then assess impacts and responses',
      [
        ['Pretend the dependency is optional because it is inconvenient', 'Pretending does not change the dependency; it only hides the consequence.'],
        ['Ask the team to work overtime without impact analysis', 'Overtime is a response, not an analysis. It may not even address the dependency.'],
        ['Remove the activity from the plan', 'Removing work without scope agreement is silent scope reduction.'],
      ],
      'Schedule management depends on visible dependencies. Once a hidden one appears, make it explicit and manage the impact.'),
    q(4250809, 'Career Skills', 'Starting and Planning the Work', 'Reserve discipline',
      'A known risk occurs, and the team needs funds from the contingency reserve assigned to that risk response. What should the project manager do?',
      'Use the reserve according to the risk response plan and update cost and risk records',
      [
        ['Tap management reserve without approval because both reserves are money', 'Management reserve is for unknown unknowns and requires higher authorisation. The two reserves are not interchangeable.'],
        ['Ignore the reserve and cut random scope', 'Scope cuts without analysis create more problems than they solve.'],
        ['Spend the reserve on unrelated enhancements', 'Contingency funds are for the identified risk, not for opportunistic scope expansion.'],
      ],
      'Contingency reserves are for identified risks. Management reserves are controlled differently and usually need higher authorisation.'),
    q(4250810, 'Career Skills', 'Starting and Planning the Work', 'Float discipline',
      'A noncritical activity has five days of float, and a team lead wants to use all of it for extra polish. What should the project manager consider?',
      'Whether using the float affects risk, downstream flexibility, stakeholder expectations, and the approved plan',
      [
        ['Float is free time with no project consequences', 'Float is flexibility, not free time. Spending it removes future buffer.'],
        ['Every activity should consume all its float', 'Consuming all float turns noncritical paths into critical paths.'],
        ['The critical path no longer matters once float exists', 'Critical path always matters; float on other paths does not erase it.'],
      ],
      'Float is schedule flexibility, not a decorative cushion to spend casually. Using it changes risk and options.'),
    q(4250811, 'Career Skills', 'Starting and Planning the Work', 'Requirements traceability',
      'Customer service asks for "faster refunds," finance asks for audit controls, and compliance asks for approval history. What should the project manager help create?',
      'Clear, traceable requirements that connect stakeholder needs to scope and acceptance criteria',
      [
        ['A single vague requirement called "make refunds better"', 'Vague requirements cannot be tested or accepted. They invite scope arguments later.'],
        ['A schedule before anyone agrees what must be built', 'Scheduling unknown scope produces unreliable dates.'],
        ['A private wish list owned by the loudest department', 'Privately held requirements bypass governance and create surprise blockers.'],
      ],
      'Requirements turn needs into testable work. Traceability keeps useful voices from becoming a soup of good intentions.'),

    // Chapter 5: Executing, Monitoring, and Controlling
    q(4250812, 'Career Skills', 'Executing, Monitoring, and Controlling', 'Sponsor surprise feature',
      'After the scope baseline is approved, the sponsor asks the team to add a reporting feature by Friday because it sounds small. What should the project manager do first?',
      'Document the request and evaluate its impact on scope, schedule, cost, risk, and value through the agreed change process',
      [
        ['Tell the team to build it quietly because the sponsor is important', 'Quiet builds bypass governance and create unbudgeted work.'],
        ['Reject it automatically without analysis', 'Auto-rejecting valid sponsor requests is as broken as auto-accepting them.'],
        ['Trade away testing time before anyone reviews impact', 'Testing trades without analysis create defect risk and break the change process.'],
      ],
      'PMP change questions favour controlled flexibility. Small-sounding requests still need visible impact analysis.'),
    q(4250813, 'Career Skills', 'Executing, Monitoring, and Controlling', 'Gold-plated dashboard',
      'A developer adds an unrequested dashboard because it looks helpful, but it is outside approved scope and delays testing. What should the project manager do?',
      'Address the scope variance and route any desired feature through the change process',
      [
        ['Celebrate because extra features never create risk', 'Unapproved features create maintenance, training, and security work that was not budgeted.'],
        ['Hide the delay because the dashboard is pretty', 'Hiding delays delays the response and damages credibility.'],
        ['Let developers redefine scope whenever inspiration arrives', 'Ad hoc scope definition is the textbook definition of scope creep.'],
      ],
      'Gold plating can harm schedule, cost, quality, and expectations. Helpful ideas still need scope control.'),
    q(4250814, 'Career Skills', 'Executing, Monitoring, and Controlling', 'EVM signal',
      'A project reports CPI of 0.82 and SPI of 0.91. Simplest correct interpretation?',
      'The project is over budget and behind schedule',
      [
        ['Under budget and ahead of schedule', 'Both indices below 1 are unfavourable, not favourable.'],
        ['Exactly on budget because the two values average near one', 'Averaging two performance indices is not a defined PMP calculation.'],
        ['Finished, because both values are less than one', 'Values below 1 indicate performance, not completion status.'],
      ],
      'For CPI and SPI, above 1 is favourable and below 1 is trouble. Then explain which dimension is troubled.'),
    q(4250815, 'Career Skills', 'Executing, Monitoring, and Controlling', 'Inspection vs assurance',
      'A team reviews finished deliverables against acceptance criteria and finds defects before customer handoff. What activity is this primarily?',
      'Quality control',
      [
        ['Quality assurance only', 'Assurance focuses on the process; control focuses on the output. Inspection is control.'],
        ['Risk avoidance because defects no longer exist', 'Catching defects does not eliminate the risk; it manages it for this batch.'],
        ['Procurement planning', 'Procurement planning addresses external acquisition, not internal deliverable inspection.'],
      ],
      'Quality control checks outputs. Quality assurance improves confidence in the process that creates those outputs.'),
    q(4250816, 'Career Skills', 'Executing, Monitoring, and Controlling', 'Scope validation',
      'The team says a deliverable is complete, and now the customer must formally confirm it meets agreed criteria. Which process concept is involved?',
      'Validate Scope or formal acceptance of completed deliverables',
      [
        ['Create the project charter', 'Charter creation happens at initiation, not at deliverable acceptance.'],
        ['Control Quality only, with no customer role', 'Quality control happens before validation; the customer-acceptance step is separate.'],
        ['Identify risks for work not yet started', 'Risk identification is forward-looking and does not address current acceptance.'],
      ],
      'Scope validation is about customer or sponsor acceptance. Quality checks happen first, but acceptance is its own gate.'),
    q(4250817, 'Career Skills', 'Executing, Monitoring, and Controlling', 'Tailored communication',
      'A sponsor wants a one-page status update, but the project manager sends raw task exports with hundreds of rows and no decisions requested. What should improve?',
      'Tailor communication format, detail, and decision focus to the stakeholder need',
      [
        ['Send even more rows so the sponsor can feel included', 'More data without curation is less informative, not more.'],
        ['Stop communicating until the sponsor asks better questions', 'Silence after a feedback signal is the wrong response.'],
        ['Use only verbal hallway updates for governance decisions', 'Governance decisions need traceable documentation, not hallway exchanges.'],
      ],
      'Communication is not data dumping. PMP judgement asks who needs what, when, in what format, and for what decision.'),

    // Chapter 6: Risk, Issues, Compliance, and Procurement
    q(4250818, 'Career Skills', 'Risk, Issues, Compliance, and Procurement', 'Risk becomes issue',
      'A risk about supplier delays was logged with a contingency plan. The supplier now confirms a late shipment affecting a milestone. What should the project manager do?',
      'Treat it as an issue, implement the planned response or workaround, update logs, and communicate the impact',
      [
        ['Leave it in the risk register as if it is still uncertain', 'Once a risk happens, it is an issue. Mis-categorisation breaks reporting.'],
        ['Escalate with no impact assessment', 'Escalation without analysis wastes leadership time and signals poor preparation.'],
        ['Close the risk because the team predicted it', 'Prediction does not close the impact. The work is now active management.'],
      ],
      'A risk that happens becomes an issue. The exam likes calm conversion: plan, act, update, communicate.'),
    q(4250819, 'Career Skills', 'Risk, Issues, Compliance, and Procurement', 'Unknown unknown',
      'A new regulation nobody identified earlier creates urgent rework. It was not in the risk register. What should the project manager do?',
      'Manage it as an issue, analyse impacts, identify responses, and update project records and communications',
      [
        ['Insist it cannot affect the project because it was not registered', 'Unregistered risks are still risks once they happen. Denial is not management.'],
        ['Blame the risk owner for not predicting the future exactly', 'Risk owners cannot foresee every regulation. Blame substitutes for response.'],
        ['Delete the issue so the risk register stays tidy', 'Register tidiness is not the goal; informed management is.'],
      ],
      'Not every problem was a known risk. Once it is real, the project manager still needs calm issue management and impact visibility.'),
    q(4250820, 'Career Skills', 'Risk, Issues, Compliance, and Procurement', 'Positive risk',
      'A new automation tool might cut testing time by 30 percent if adopted early, but it requires a small pilot. What kind of risk response might fit?',
      'Exploit, enhance, or share the opportunity after assessing value and feasibility',
      [
        ['Avoid the opportunity because risk always means threat', 'PMP risk includes opportunities. Avoiding upside is leaving value on the table.'],
        ['Transfer it to legal automatically', 'Transfer is a threat response, not an opportunity strategy.'],
        ['Accept it by refusing to discuss it', 'Acceptance with no discussion is passive avoidance, not opportunity management.'],
      ],
      'PMP risk includes opportunities. Positive risks can be managed intentionally, not just admired from across the room.'),
    q(4250821, 'Career Skills', 'Risk, Issues, Compliance, and Procurement', 'Procurement risk allocation',
      'A buyer has a stable, well-defined scope and wants the seller to carry most cost-overrun risk. Which contract type generally fits best?',
      'Firm fixed-price',
      [
        ['Cost-reimbursable with no ceiling', 'Cost-reimbursable shifts risk to the buyer, the opposite of what the question wants.'],
        ['Time and materials with unlimited hours', 'T&M is appropriate for unclear scope, not stable scope, and concentrates risk on the buyer.'],
        ['A handshake plus hopeful vibes', 'Informal arrangements do not allocate risk reliably.'],
      ],
      'Procurement questions often ask where risk sits. Fixed-price contracts shift more cost risk to the seller when scope is clear.'),
    q(4250822, 'Career Skills', 'Risk, Issues, Compliance, and Procurement', 'Seller performance dip',
      'A vendor deliverable repeatedly misses acceptance criteria. What should the project manager do first?',
      'Review the contract, acceptance criteria, performance data, and issue process before deciding remedies or escalation',
      [
        ['Terminate immediately without checking contract terms', 'Termination without contract review can create breach exposure for the buyer.'],
        ['Rewrite the criteria after delivery so the vendor passes', 'Rewriting criteria to fit failed delivery undermines the entire contract.'],
        ['Complain informally but keep accepting bad outputs', 'Informal complaint without record loses the formal remedy path.'],
      ],
      'Procurement problems call for contract-aware action. Facts, criteria, records, and agreed remedies matter.'),

    // Chapter 7: Agile, Hybrid, and Tailoring Lab
    q(4250823, 'Career Skills', 'Agile, Hybrid, and Tailoring Lab', 'Product owner authority',
      'Two executives want different features next, and the development team asks who decides backlog order. In Scrum-style work, who is accountable for ordering the product backlog?',
      'The product owner, informed by stakeholders, product goals, and value',
      [
        ['The project sponsor assigning tasks directly to developers', 'Direct task assignment from sponsors bypasses the product owner and breaks the framework.'],
        ['The Scrum master choosing the highest-status stakeholder', 'The Scrum master is a facilitator, not a backlog decision-maker.'],
        ['Each developer taking the item they personally prefer', 'Personal preference ordering produces unaligned delivery.'],
      ],
      'Agile role questions reward clarity. The product owner owns value ordering; the team owns how to deliver selected work.'),
    q(4250824, 'Career Skills', 'Agile, Hybrid, and Tailoring Lab', 'Hybrid tailoring',
      'A compliance platform must meet a fixed regulatory date, but users are still discovering workflow needs. Most defensible approach?',
      'Use a tailored hybrid approach with predictive governance for fixed constraints and iterative delivery for uncertain features',
      [
        ['Use pure predictive planning for every screen because one date is fixed', 'Predictive planning for uncertain features creates rework, not certainty.'],
        ['Use pure agile and ignore the regulatory milestone', 'Pure agile that ignores a regulatory date risks compliance failure.'],
        ['Refuse to choose a life cycle because tailoring exists', 'Tailoring still requires a choice. Indecision is not a method.'],
      ],
      'Tailoring matches approach to uncertainty, risk, and constraints. The label matters less than the fit.'),
    q(4250825, 'Career Skills', 'Agile, Hybrid, and Tailoring Lab', 'Definition of done',
      'A team calls stories done even when security checks are incomplete, causing spillover every sprint. What should the agile lead address?',
      'Clarify and enforce the definition of done with the team and stakeholders',
      [
        ['Declare done based on developer optimism', 'Optimism is not a definition. Spillover is the predictable result.'],
        ['Remove security checks from reality, not just the list', 'Removing security work because it inconveniences the sprint creates serious downstream risk.'],
        ['Wait until release day to discuss quality expectations', 'Late quality conversations are too late. The definition exists to surface expectations early.'],
      ],
      'The definition of done protects quality and transparency. If it keeps changing shape, forecasting and trust get wobbly.'),
    q(4250826, 'Career Skills', 'Agile, Hybrid, and Tailoring Lab', 'Velocity comparison',
      'A manager wants to compare two agile teams by velocity alone and reward the higher number. Best coaching point?',
      'Velocity is a planning measure for a team, not a universal productivity ranking across teams',
      [
        ['Higher velocity always means better quality', 'Velocity measures throughput in team-specific points; it says nothing about quality.'],
        ['Teams should inflate estimates to look stronger', 'Inflated estimates corrupt forecasting and incentivise gaming.'],
        ['Velocity replaces customer value and outcomes', 'Velocity is a delivery measure, not a value measure.'],
      ],
      'Agile metrics can be useful or weaponised. Use them for forecasting and improvement, not simplistic team comparisons.'),
    q(4250827, 'Career Skills', 'Agile, Hybrid, and Tailoring Lab', 'Sprint interruption',
      'A senior leader asks developers to add an urgent feature during the sprint, bypassing the product owner. What should the agile lead encourage?',
      'Route the request through the product owner and discuss priority, impact, and whether sprint scope should change',
      [
        ['Let leaders inject work directly whenever inspiration strikes', 'Direct injection bypasses the product owner role and destabilises the sprint.'],
        ['Tell the team to hide the request from the backlog', 'Hiding work creates invisible commitments and misleads stakeholders.'],
        ['Cancel the sprint ceremony because hierarchy has spoken', 'Hierarchy does not override the agile framework; the team can re-plan transparently.'],
      ],
      'Adaptive work still has decision rights. The product owner protects value ordering and keeps interruptions visible.'),

    // Chapter 8: Exam Strategy and Simulation
    q(4250828, 'Career Skills', 'Exam Strategy and Simulation', 'Best next action',
      'A PMP scenario asks what the project manager should do next after a conflict, surprise risk, or stakeholder concern. Which exam habit helps most?',
      'Choose the response that assesses facts, engages the right people, and follows the appropriate process before drastic action',
      [
        ['Pick the most forceful answer because managers should look busy', 'PMP rarely rewards forceful unilateral action over collaborative process.'],
        ['Escalate every inconvenience immediately', 'Excessive escalation signals weak project management on PMP scenarios.'],
        ['Ignore process whenever the question sounds urgent', 'Urgency is not a process exemption in PMP scenarios.'],
      ],
      'PMP items test judgement under pressure. The best answer is often measured, collaborative, and process-aware.'),
    q(4250829, 'Career Skills', 'Exam Strategy and Simulation', 'Absolute answer smell',
      'A PMP answer choice says the project manager should always fire the vendor, always reject change, or never involve stakeholders. How should a test taker treat it?',
      'Be cautious because extreme absolutes are usually wrong unless the scenario clearly supports them',
      [
        ['Choose it because confidence beats context', 'Confidence is not a PMP scoring criterion. Context-fit is.'],
        ['Assume absolutes are required by every project plan', 'PMP scenarios reward judgement, not absolute rules.'],
        ['Ignore the scenario and trust the strongest verb', 'PMP items are scenario-based; the verb without context is not the answer.'],
      ],
      'PMP scenario answers usually favour context, process, and judgement. Absolute language is often a warning light.'),
    q(4250830, 'Career Skills', 'Exam Strategy and Simulation', 'Process before heroics',
      'A PMP scenario offers one answer where the project manager personally solves everything overnight and another where they involve the team, assess impact, and follow governance. Which pattern is usually stronger?',
      'The collaborative, impact-aware process response unless the scenario clearly demands immediate emergency action',
      [
        ['The solo hero answer because sleep is optional', 'PMP does not reward unsustainable heroics over collaborative governance.'],
        ['The answer that ignores stakeholders fastest', 'Stakeholder engagement is a core PMP value; ignoring it usually loses points.'],
        ['The most dramatic action because exams love flair', 'PMP exams reward measured judgement, not dramatics.'],
      ],
      'PMP scenarios usually reward leadership through people and process. Heroics are less reliable than good judgement.'),
    q(4250831, 'Career Skills', 'Exam Strategy and Simulation', 'Metric without meaning',
      'A dashboard shows many tasks at 90 percent complete for weeks, but deliverables are not being accepted. What should the project manager investigate?',
      'Whether progress measures reflect actual completed, accepted work and what blockers prevent completion',
      [
        ['Report that the project is nearly done because 90 percent sounds reassuring', '90% complete with no acceptance is a stall pattern, not a near-completion signal.'],
        ['Stop measuring deliverables because the numbers are awkward', 'Removing measurement does not remove the underlying delay.'],
        ['Ask teams to round everything to 100 percent', 'Rounding to 100% without acceptance creates false reporting and worse outcomes.'],
      ],
      'Useful metrics connect to real outcomes. Percent complete can mislead when work is stuck before acceptance.'),
  ],

  // ---------------------------------------------------------------------------
  // SHRM PEOPLE OPS MAZE
  // Syllabus chapters (shrm_people.md):
  //  1. SHRM Decision Logic and HR's Role
  //  2. People Domain: Talent, Total Rewards, and Employee Relations
  //  3. Organization Domain: Strategy, Structure, and Change
  //  4. Workplace Domain: Compliance, Risk, Safety, and Inclusion
  //  5. Behavioral Competencies in Practice
  //  6. Data, Metrics, and Evidence-Based HR
  //  7. Employee Relations Lab
  //  8. Exam Survival and Scenario Judgment
  // ---------------------------------------------------------------------------
  shrmPeople: [
    // Chapter 1: SHRM Decision Logic and HR's Role
    q(4250900, 'Career Skills', 'SHRM Decision Logic and HR\'s Role', 'Manager wants termination',
      'A manager asks HR to terminate an employee today after a tense meeting, but prior documentation is thin and similar cases were coached first. What should HR do first?',
      'Gather facts, review policy and past practice, assess risk, and advise on a consistent next step',
      [
        ['Approve the termination because the manager is annoyed', 'Annoyance is not a termination criterion. Documented cause and consistent practice are.'],
        ['Promise the employee the job is safe before reviewing facts', 'Premature promises bypass investigation and create their own credibility risk.'],
        ['Ignore past practice because each manager gets a personal rulebook', 'Inconsistent discipline is the textbook discrimination-risk pattern.'],
      ],
      'SHRM judgement starts with facts, policy, consistency, and risk. Humane process is the guardrail, not bureaucracy confetti.'),

    // Chapter 2: People Domain: Talent, Total Rewards, and Employee Relations
    q(4250901, 'Career Skills', 'People Domain: Talent, Total Rewards, and Employee Relations', 'Structured interviews',
      'A hiring panel asks different casual questions of each candidate and then compares "gut feel" scores. What should HR recommend?',
      'Use job-related structured questions with consistent scoring criteria tied to required competencies',
      [
        ['Keep the process loose because charm predicts every job', 'Unstructured charm-based selection has poor predictive validity and high adverse-impact risk.'],
        ['Avoid notes so nobody can question the decision', 'Avoiding records makes decisions harder to defend, not easier.'],
        ['Ask only puzzle questions unrelated to the role', 'Puzzle questions show low correlation with job performance and add adverse-impact risk.'],
      ],
      'Structured selection improves fairness and defensibility. The process should measure the job, not interviewer mood.'),
    q(4250902, 'Career Skills', 'People Domain: Talent, Total Rewards, and Employee Relations', 'Pay compression',
      'A company raises starting salaries to meet the market, and experienced employees now earn barely more than new hires. What should HR flag?',
      'Pay compression and the need to review internal equity, market alignment, and budget options',
      [
        ['A recruiting success with no employee-relations downside', 'Compression creates retention and morale risk among tenured staff.'],
        ['A reason to lower all new-hire pay below market automatically', 'Lowering market pay creates a different recruiting problem without solving compression.'],
        ['A benefits enrollment issue only', 'Compression is a compensation structure issue, not a benefits one.'],
      ],
      'Compensation decisions have internal and external effects. Market fixes can create equity and retention problems if handled alone.'),
    q(4250903, 'Career Skills', 'People Domain: Talent, Total Rewards, and Employee Relations', 'Surprise rating',
      'An employee receives a poor annual rating even though no concerns were shared during the year. What process weakness is most apparent?',
      'Performance feedback was not timely, documented, or connected to expectations throughout the cycle',
      [
        ['Annual reviews work best as surprise parties', 'Surprise reviews damage trust and remove the chance for behaviour change during the cycle.'],
        ['Employees should infer goals from silence', 'Inference from silence is the opposite of clear expectation-setting.'],
        ['Ratings should avoid examples to save time', 'Examples are exactly what make performance reviews defensible and useful.'],
      ],
      'Good performance management is continuous enough that the final review is not a plot twist.'),
    q(4250904, 'Career Skills', 'People Domain: Talent, Total Rewards, and Employee Relations', 'Calibration check',
      'One manager gives nearly everyone top ratings, while another rarely rates anyone above average. What should HR use to improve fairness?',
      'Performance calibration using shared criteria, evidence, and manager discussion',
      [
        ['Let every manager define excellence privately', 'Private definitions are exactly the source of rating drift.'],
        ['Average all ratings without looking at evidence', 'Averaging hides the variance instead of correcting it.'],
        ['Ban high ratings because consistency means low scores', 'Consistency means evidence-based judgement, not a low ceiling.'],
      ],
      'Calibration reduces rating drift. It does not replace judgement; it makes judgement more consistent and evidence-based.'),
    q(4250905, 'Career Skills', 'People Domain: Talent, Total Rewards, and Employee Relations', 'Bonus design',
      'A call-centre bonus rewards shortest call time, and customer complaints are rising because employees rush complex issues. What should HR analyse?',
      'Whether incentives align with desired service quality, customer outcomes, and ethical behaviour',
      [
        ['Increase the bonus because speed is the only metric that counts', 'Bigger incentives on the wrong measure amplify the wrong behaviour.'],
        ['Tell employees to care about quality while paying only for speed', 'Pay teaches behaviour. Mismatched incentives override stated values.'],
        ['Remove all performance measures forever', 'Removing all measures eliminates the ability to manage performance.'],
      ],
      'Rewards teach behaviour. If incentives point away from strategy, employees follow the pay plan instead of the poster.'),

    // Chapter 3: Organization Domain: Strategy, Structure, and Change
    q(4250906, 'Career Skills', 'Organization Domain: Strategy, Structure, and Change', 'New system resistance',
      'A new HRIS launch is technically working, but managers are bypassing it because they do not understand the workflow. What should HR focus on?',
      'Change management, training, communication, support, and feedback to improve adoption',
      [
        ['Blame managers and disable every old process overnight', 'Forced cutover without support breaks workflows and increases resistance.'],
        ['Buy another system before diagnosing adoption barriers', 'Replacing software does not address the people side of the change.'],
        ['Assume technical go-live equals behaviour change', 'Technical readiness is necessary but not sufficient for adoption.'],
      ],
      'Implementation success is not just software availability. People need readiness, support, reinforcement, and reason to use the new path.'),
    q(4250907, 'Career Skills', 'Organization Domain: Strategy, Structure, and Change', 'Strategic headcount ask',
      'The CEO asks HR for immediate headcount cuts to reduce cost, but a critical product launch is six weeks away. What should HR provide?',
      'A workforce risk analysis with alternatives, legal and operational considerations, and impact on strategic priorities',
      [
        ['Cut the newest employees automatically', 'Last-in-first-out without analysis can break the launch and create adverse-impact risk.'],
        ['Refuse to discuss cost because HR only handles feelings', 'HR has a strategic role in workforce cost decisions, not just a relational one.'],
        ['Recommend layoffs without checking business-critical roles', 'Layoffs without role analysis can damage the very capability the business needs.'],
      ],
      'Strategic HR connects people decisions to business consequences. Cost actions need risk, capability, compliance, and timing analysis.'),
    q(4250908, 'Career Skills', 'Organization Domain: Strategy, Structure, and Change', 'Workforce planning',
      'Data shows that many senior technicians in a critical role may retire within three years, and there is no internal bench. What should HR prioritise?',
      'Succession and workforce planning, including knowledge transfer, development, recruiting, and retention strategies',
      [
        ['Wait until resignations arrive with cake', 'Waiting eliminates the lead time needed to develop replacements.'],
        ['Rename junior employees as experts without preparation', 'Titles without capability do not solve a skills gap.'],
        ['Assume the labour market will solve timing perfectly', 'External hiring alone is rarely fast enough for critical-role retirements.'],
      ],
      'Workforce planning is forward-looking. Critical skill risk deserves action before farewell emails start lining up.'),
    q(4250909, 'Career Skills', 'Organization Domain: Strategy, Structure, and Change', 'Merger anxiety',
      'During a merger, employees hear rumours about layoffs while leaders delay communication until every detail is final. What should HR advise?',
      'Provide timely, honest communication about what is known, unknown, and how updates will occur',
      [
        ['Say nothing until every possible question has an answer', 'Silence during change is filled by rumour, which is worse than partial honesty.'],
        ['Promise no layoffs without authorisation', 'Unauthorised promises create legal and trust risks.'],
        ['Let rumours fill the communication plan', 'Rumours are not a communication strategy; they are the absence of one.'],
      ],
      'Change communication should be truthful and timely. People can handle uncertainty better when leaders name it clearly.'),
    q(4250910, 'Career Skills', 'Organization Domain: Strategy, Structure, and Change', 'Culture-value mismatch',
      'The company says collaboration is a strategic value, but bonus plans reward only individual sales with no team or customer measures. What should HR examine?',
      'Alignment between rewards, desired culture, performance measures, and business strategy',
      [
        ['Whether posters about teamwork are colourful enough', 'Posters do not override compensation incentives.'],
        ['Whether collaboration can be demanded while incentives point elsewhere', 'Demanding behaviour while paying for the opposite does not work in practice.'],
        ['Whether compensation should ignore strategy', 'Ignoring strategy in compensation design is exactly the misalignment problem.'],
      ],
      'People systems teach employees what the organisation truly values. Incentives should support, not sabotage, strategy.'),

    // Chapter 4: Workplace Domain: Compliance, Risk, Safety, and Inclusion
    q(4250911, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Adverse impact',
      'A physical test screens out a much higher percentage of applicants from one protected group, and the job link is unclear. What should HR analyse?',
      'Potential adverse impact and whether the selection practice is job-related and consistent with business necessity',
      [
        ['Whether the test looks impressive in recruiting videos', 'Marketing appeal is not a legal defence for selection devices.'],
        ['Whether candidates who pass feel proud', 'Pride is not a validity measure.'],
        ['Whether the hiring manager personally enjoys the test', 'Manager preference is not a selection-validity criterion.'],
      ],
      'Adverse impact analysis connects outcomes to protected groups and job relevance. A neutral-looking screen can still create legal risk.'),
    q(4250912, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Accommodation process',
      'An employee presents a medical restriction that may affect an essential job function. What should HR generally initiate?',
      'An interactive process to understand limitations, essential functions, and reasonable accommodation options',
      [
        ['Terminate immediately because restrictions are inconvenient', 'Termination without the interactive process is the textbook ADA-violation pattern.'],
        ['Ask for detailed diagnosis gossip for the whole team', 'Sharing medical information beyond need-to-know violates privacy obligations.'],
        ['Remove every job duty permanently without analysis', 'Permanent removal without analysis can both over- and under-accommodate.'],
      ],
      'Accommodation questions call for an interactive, individualised process. Essential functions, documentation, and reasonableness do the heavy lifting.'),
    q(4250913, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Retaliation risk',
      'After an employee reports discrimination, the manager removes the employee from a desirable client project without a clear business reason. What should HR assess?',
      'Potential retaliation and whether the action is supported by legitimate, documented reasons',
      [
        ['Whether the complaint made the manager uncomfortable', 'Manager discomfort is exactly the wrong reason for an adverse action.'],
        ['Whether retaliation is allowed if the manager is busy', 'Anti-retaliation protection is not waived by manager workload.'],
        ['Whether client work should be assigned by rumour', 'Informal assignment processes hide the very documentation needed to defend the action.'],
      ],
      'Anti-retaliation protection is central after complaints. HR should watch timing, reasons, consistency, and documentation.'),
    q(4250914, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Protected concerted activity',
      'Nonunion employees discuss wages in a group chat, and a supervisor wants to discipline them for being disruptive. What should HR flag?',
      'Potential protected concerted activity and the need to assess labour-law risk before discipline',
      [
        ['Wage discussions are always forbidden if managers dislike them', 'NLRA protections cover wage discussion in many circumstances regardless of manager preference.'],
        ['Only union employees can have labour-law rights', 'NLRA protections apply broadly to nonunion employees in covered employers.'],
        ['Group chats erase workplace protections', 'Communication channel does not strip protected-activity status.'],
      ],
      'Labour protections can apply outside union settings. HR should recognise protected concerted activity before managers react.'),
    q(4250915, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Promotion equity',
      'Promotion data shows one group advances at lower rates despite similar tenure and performance ratings. What should HR do first?',
      'Analyse the promotion process, criteria, decision records, and possible barriers before recommending interventions',
      [
        ['Assume the pattern is meaningless without looking closer', 'Patterns that meet adverse-impact thresholds require analysis, not dismissal.'],
        ['Announce a quota without understanding the process', 'Quotas without diagnosis can create legal exposure and may not address the cause.'],
        ['Delete the data because it creates questions', 'Deleting data destroys evidence and accountability.'],
      ],
      'Inclusion work needs evidence and process diagnosis. Patterns are signals to investigate criteria, access, sponsorship, and decision consistency.'),
    q(4250916, 'Career Skills', 'Workplace Domain: Compliance, Risk, Safety, and Inclusion', 'Near-miss reporting',
      'A warehouse has several near misses involving the same equipment, but no one has been injured yet. What should HR and operations do?',
      'Investigate root causes, reinforce reporting, and implement preventive controls before an injury occurs',
      [
        ['Wait for an injury because near misses are not data', 'Near misses are the highest-value safety data — they precede injuries.'],
        ['Punish reporters so the dashboard looks calmer', 'Punishing reporters destroys reporting culture and hides risk.'],
        ['Treat safety as unrelated to HR because equipment is involved', 'Safety is an integrated HR responsibility, including reporting culture and training.'],
      ],
      'Near misses are early warnings. A strong safety culture learns before harm becomes the teacher.'),

    // Chapter 5: Behavioral Competencies in Practice
    q(4250917, 'Career Skills', 'Behavioral Competencies in Practice', 'Investigation intake',
      'An employee reports harassment by a supervisor and asks HR to keep it secret from everyone. What should HR do?',
      'Respond respectfully, explain confidentiality limits, and begin a prompt, appropriate fact-finding process',
      [
        ['Promise absolute secrecy before investigating', 'Absolute-secrecy promises cannot be kept if investigation requires interviews.'],
        ['Tell the employee nothing can happen without public testimony', 'Many investigations proceed with confidentiality safeguards short of public testimony.'],
        ['Dismiss the complaint because it is uncomfortable', 'Dismissal of harassment complaints creates legal and ethical exposure.'],
      ],
      'HR can protect privacy but rarely promise total secrecy. Complaints need respectful intake, appropriate investigation, and anti-retaliation care.'),
    q(4250918, 'Career Skills', 'Behavioral Competencies in Practice', 'Confidential salary file',
      'An HR analyst is asked by a friend in another department to check a coworker\'s salary "just out of curiosity." What should the analyst do?',
      'Decline and follow confidentiality and authorised-access rules',
      [
        ['Look it up because friendship is a business need', 'Friendship is not a legitimate business purpose under data-access controls.'],
        ['Share a screenshot if the friend promises silence', 'Promises do not authorise data access; the rules do.'],
        ['Post the salary range in a casual chat', 'Posting compensation data outside authorised channels violates confidentiality norms.'],
      ],
      'HR roles carry privileged access. Ethical judgement means using employee data only for legitimate, authorised purposes.'),

    // Chapter 6: Data, Metrics, and Evidence-Based HR
    q(4250919, 'Career Skills', 'Data, Metrics, and Evidence-Based HR', 'Turnover diagnosis',
      'A dashboard shows rising turnover among first-year employees in one location. What should HR do before proposing a fix?',
      'Segment and investigate the data to understand timing, role, manager, selection, onboarding, and local factors',
      [
        ['Launch a companywide perk because perks are shiny', 'Companywide responses to local patterns waste resources and miss the cause.'],
        ['Assume all turnover has the same cause', 'Different segments often have different causes; aggregation hides them.'],
        ['Ignore the location pattern because averages look fine', 'Averages routinely mask localised problems. Segmentation reveals them.'],
      ],
      'HR metrics are prompts for diagnosis. Segmenting data helps separate hiring from onboarding, manager, pay, or workload problems.'),
    q(4250920, 'Career Skills', 'Data, Metrics, and Evidence-Based HR', 'Engagement hot spot',
      'Engagement scores are stable overall, but comments show one department has trust concerns tied to a new manager. What should HR do?',
      'Segment the data, validate themes, and partner on a targeted manager or team intervention',
      [
        ['Declare engagement healthy because the company average is fine', 'Healthy averages routinely mask department-level problems.'],
        ['Publish the manager name in a blame memo', 'Public blame skips diagnosis and creates legal exposure.'],
        ['Run a generic companywide event and avoid the local pattern', 'Generic events do not address localised manager issues.'],
      ],
      'Averages can hide hot spots. HR value often comes from finding the specific pattern and acting with care.'),
    q(4250921, 'Career Skills', 'Data, Metrics, and Evidence-Based HR', 'Absence pattern',
      'Absenteeism is up companywide, but a deeper view shows the spike is concentrated in one shift after a schedule change. What should HR do next?',
      'Investigate the localised cause and business context before designing a targeted response',
      [
        ['Launch a companywide discipline campaign immediately', 'Discipline targeted at the wrong cohort wastes goodwill and does not fix the cause.'],
        ['Average the data until the pattern disappears', 'Averaging hides actionable signal.'],
        ['Assume all absences have the same motivation', 'Different shifts often have different drivers; aggregation hides them.'],
      ],
      'Metrics become useful when segmented. A targeted diagnosis beats a blanket response to a specific pattern.'),

    // Chapter 7: Employee Relations Lab
    q(4250922, 'Career Skills', 'Employee Relations Lab', 'Policy inconsistency',
      'Two employees commit the same attendance violation, but one manager wants termination while another gave coaching last month. What should HR emphasise?',
      'Consistent application of policy, review of facts, and appropriate documentation before deciding discipline',
      [
        ['Let each manager invent consequences by mood', 'Mood-based discipline is the textbook discrimination-risk pattern.'],
        ['Terminate both employees without reviewing circumstances', 'Mirror-image termination without facts loses individual context that may matter.'],
        ['Ignore the prior case because consistency is inconvenient', 'Inconsistent treatment creates legal exposure and erodes trust.'],
      ],
      'Employee relations judgement rests on facts, consistency, documentation, and fairness. Similar cases should make HR pause and compare.'),
    q(4250923, 'Career Skills', 'Employee Relations Lab', 'Witness protection',
      'A witness in a harassment investigation is afraid the supervisor will cut their hours for cooperating. What should HR emphasise?',
      'Anti-retaliation expectations, appropriate confidentiality, documentation, and monitoring after the interview',
      [
        ['Promise nothing can ever change at work for any reason', 'Sweeping no-change promises are unenforceable and unrealistic.'],
        ['Tell the witness to stay quiet to avoid paperwork', 'Discouraging cooperation undermines the investigation and creates liability.'],
        ['Share the witness statement broadly to prove transparency', 'Broad sharing breaks confidentiality and chills future witness cooperation.'],
      ],
      'Investigations need trust and protection. HR should be clear about retaliation, privacy limits, and follow-up.'),

    // Chapter 8: Exam Survival and Scenario Judgment
    q(4250924, 'Career Skills', 'Exam Survival and Scenario Judgment', 'Balanced HR answer',
      'On a SHRM-style item, all options sound partly reasonable, but one gathers facts, aligns with policy, considers stakeholders, and protects fairness before acting. What should the test taker usually prefer?',
      'The option that balances business need, ethical practice, legal risk, and evidence-based people judgement',
      [
        ['The fastest option, even if it skips facts', 'Speed without facts is exactly what SHRM exam items penalise.'],
        ['The option that avoids all conversations', 'Avoidance is rarely the SHRM-preferred response.'],
        ['The option that makes one manager happy and ignores everyone else', 'Single-stakeholder satisfaction is not balanced HR judgement.'],
      ],
      'SHRM scenarios test balanced judgement. Look for the answer that is practical, fair, evidence-aware, and aligned with the organisation\'s mission.'),
    q(4250925, 'Career Skills', 'Exam Survival and Scenario Judgment', 'Too manager-pleasing',
      'A SHRM answer choice quickly satisfies a frustrated manager but skips facts, policy, employee impact, and legal risk. How should a test taker treat it?',
      'Be skeptical and favour the answer that balances business needs with compliance, fairness, and stakeholder impact',
      [
        ['Pick it because speed is the only executive language', 'Speed without analysis is not what SHRM scenarios reward.'],
        ['Assume HR should always say no to managers', 'HR is not the no department; it is the balanced-judgement department.'],
        ['Choose the answer with the sternest tone', 'Tone is not a SHRM scoring criterion.'],
      ],
      'SHRM exam judgement is balanced, not timid. Good HR advice serves the business by being fair, lawful, and practical.'),
  ],
}

export const careerAgentGeneratedQualificationsLawProjectHrQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  Object.entries(careerAgentGeneratedQualificationsLawProjectHrBaseQuestionsByTrack).map(([trackId, questions]) => [
    trackId,
    runPolish(questions, [{ subTopics: CAREER_QUALS_LAW_PM_HR_SUB_TOPICS, mentorHints: CAREER_QUALS_LAW_PM_HR_MENTOR_HINTS, correctShortened: CAREER_QUALS_LAW_PM_HR_CORRECT_SHORTENED, source: 'careerQualsLawProjectHr' }]),
  ]),
)
