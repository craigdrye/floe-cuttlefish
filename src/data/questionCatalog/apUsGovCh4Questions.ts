import { makeQuestionBank } from './base'
import type { Question } from './types'

// =============================================================================
// AP US Government — Chapter 4: The Presidency and the Bureaucracy
// -----------------------------------------------------------------------------
// 45 questions, IDs 4360400–4360444. Authored to fill the Chapter 4 gaps
// identified in docs/audit/high/_flagship/apUsGovernment_review.md. Covers
// Article II powers, Federalist 70, vetoes, executive orders and signing
// statements, executive agreements vs treaties, appointments and recess
// appointments, the War Powers Resolution, the cabinet and independent
// agencies, civil-service reform, iron triangles vs issue networks,
// bureaucratic discretion under the Administrative Procedure Act, Senate
// confirmation, and Chevron/Loper Bright. Companion to the 5 existing
// Chapter 4 questions in civicPoliticsQuestions.ts; does not duplicate them.
// =============================================================================

const CHAPTER = 'Chapter 4: The Presidency and the Bureaucracy'

export const apUsGovCh4Questions: Question[] = makeQuestionBank('AP', [
  {
    id: 4360400,
    chapter: CHAPTER,
    title: 'Federalist 70 stimulus',
    prompt:
      'Hamilton writes in Federalist 70 that "energy in the executive is a leading character in the definition of good government." The argument most directly supports which design choice in Article II?',
    correct: 'Vesting executive power in a single president rather than a plural executive council',
    wrong: [
      [
        'Allowing Congress to remove the president without impeachment when policy disagreements arise',
        'Federalist 70 defends accountability through unity and fixed terms, not legislative removal at will; impeachment for high crimes is the constitutional standard.',
        'Energy means unity and fixed responsibility, not legislative dominance.',
      ],
      [
        'Requiring that all executive decisions be approved by a council of state governors',
        'Hamilton specifically rejects plural executives because they diffuse responsibility and slow decision-making.',
        'A council would dilute, not concentrate, executive energy.',
      ],
      [
        'Letting the Supreme Court direct the conduct of foreign policy',
        'Article II vests foreign-affairs leadership in the president, not the judiciary; Federalist 70 defends a single executive, not judicial direction.',
        'Energy in the executive is executive, not judicial.',
      ],
    ],
    lesson:
      'Federalist 70 grounds the unitary executive argument: a single president provides decision, activity, secrecy, and dispatch — and, crucially, accountability. The required-document line "energy in the executive" anchors many AP stimulus prompts.',
  },
  {
    id: 4360401,
    chapter: CHAPTER,
    title: 'Commander in chief',
    prompt:
      'Under Article II, the president serves as Commander in Chief of the armed forces. Which of the following is the most accurate description of that power?',
    correct: 'The president directs military operations, but only Congress can formally declare war and fund the military',
    wrong: [
      [
        'The president has sole authority to declare war whenever national security requires it',
        'The Constitution gives the power to declare war to Congress in Article I, Section 8; the president directs forces once committed.',
        'Declaring war is a legislative power, not an executive one.',
      ],
      [
        'The president commands state militias only after governors give written consent',
        'When militias are called into federal service, they fall under presidential command without gubernatorial veto, though Congress sets the terms for calling them up.',
        'Federal service triggers federal command.',
      ],
      [
        'The president must obtain Supreme Court approval before ordering troop movements',
        'Operational command is executive in nature; the judiciary reviews legal questions, not tactical orders.',
        'Courts review legality, not deployment orders.',
      ],
    ],
    lesson:
      'The Commander-in-Chief Clause (Art II §2) vests operational command in the president, while Article I §8 gives Congress the powers to declare war, raise armies, and appropriate funds. The two clauses together produce the recurring war-powers tension.',
  },
  {
    id: 4360402,
    chapter: CHAPTER,
    title: 'Treaty-making power',
    prompt:
      'The president negotiates a treaty with a foreign government to limit chemical-weapons stockpiles. To enter into force as a treaty under the Constitution, the agreement must:',
    correct: 'Be ratified by a two-thirds vote of the Senate',
    wrong: [
      [
        'Be ratified by a simple majority of both houses of Congress',
        'Treaties require Senate concurrence by a two-thirds vote, not bicameral majority approval; that procedure describes ordinary statutes.',
        'Two-thirds of the Senate, not majorities of both chambers.',
      ],
      [
        'Be approved by a national referendum of voters',
        'The Constitution provides no national referendum mechanism for any federal action, including treaties.',
        'There is no federal referendum.',
      ],
      [
        'Be signed by the secretary of state and certified by the Supreme Court',
        'The secretary of state may negotiate, but ratification authority belongs to the Senate; the Court has no certifying role.',
        'Ratification is a Senate function.',
      ],
    ],
    lesson:
      'Article II §2 requires the "advice and consent" of two-thirds of senators present for treaty ratification. The high threshold is why presidents often use executive agreements for routine accords.',
  },
  {
    id: 4360403,
    chapter: CHAPTER,
    title: 'Executive agreements vs treaties',
    prompt:
      'A president signs an executive agreement with another head of state to coordinate cybersecurity standards. The most important constitutional distinction between this agreement and a treaty is that the executive agreement:',
    correct: 'Does not require Senate ratification but may be more easily reversed by a future president',
    wrong: [
      [
        'Requires a two-thirds vote of both the House and Senate before it can take effect',
        'Executive agreements take effect without congressional approval; treaties require two-thirds of the Senate, not both chambers.',
        'No congressional vote is required for an executive agreement.',
      ],
      [
        'Has the same constitutional durability as a treaty and binds future presidents',
        'Because executive agreements rest on presidential authority alone, successor presidents can rescind them; treaties, once ratified, are part of the supreme law of the land.',
        'Treaties are more durable than executive agreements.',
      ],
      [
        'Must be reviewed and signed by the chief justice before it becomes binding',
        'Judicial review can occur in a later case, but no chief-justice signature is required to make an executive agreement effective.',
        'No judicial pre-approval is required.',
      ],
    ],
    lesson:
      'Executive agreements are pacts between the president and a foreign leader that do not require Senate ratification. They are common, fast, and flexible but less durable than treaties because a successor can revoke them.',
  },
  {
    id: 4360404,
    chapter: CHAPTER,
    title: 'Appointments and advice and consent',
    prompt:
      'The president nominates a federal district judge. Under Article II, the appointment becomes effective only after:',
    correct: 'A majority vote of the Senate confirms the nominee',
    wrong: [
      [
        'The House of Representatives approves the nominee by a two-thirds vote',
        'The House plays no role in confirming federal judges; that authority rests with the Senate alone under the Appointments Clause.',
        'Judicial confirmation is a Senate function.',
      ],
      [
        'The Supreme Court rules that the nominee is qualified',
        'The Court does not screen nominees; the Senate Judiciary Committee and the full Senate decide.',
        'Confirmation is political, not judicial.',
      ],
      [
        'The American Bar Association issues a "well-qualified" rating',
        'ABA ratings are advisory and influential but carry no constitutional weight; only Senate confirmation makes an appointment effective.',
        'ABA ratings inform but do not confirm.',
      ],
    ],
    lesson:
      'The Appointments Clause (Art II §2) requires Senate "advice and consent" for principal officers (justices, judges, ambassadors, cabinet secretaries). Most confirmations now pass by simple majority after the Senate eliminated the 60-vote cloture threshold for nominations.',
  },
  {
    id: 4360405,
    chapter: CHAPTER,
    title: 'Pardon power limits',
    prompt:
      'A state attorney general convicts a defendant of a state robbery. The defendant asks the president for a pardon. The president cannot grant a pardon here because:',
    correct: 'The federal pardon power reaches only federal offenses, not state crimes',
    wrong: [
      [
        'Pardons are barred entirely once a conviction has been entered',
        'Article II §2 authorizes pardons after conviction; the post-conviction posture is not a bar.',
        'Pardons can come before or after conviction.',
      ],
      [
        'The Supreme Court must approve every pardon before it takes effect',
        'Pardons are not subject to judicial pre-approval; presidential pardon authority is plenary within the federal sphere.',
        'No judicial sign-off is required.',
      ],
      [
        'Pardons require a two-thirds vote of the Senate',
        'No legislative vote is needed for a federal pardon; the limitation here is jurisdictional, not procedural.',
        'Federal pardons are unilateral within the federal sphere.',
      ],
    ],
    lesson:
      'Article II §2 grants the president power to pardon "offenses against the United States" — i.e., federal crimes only. It also explicitly excludes impeachment cases. Governors hold the analogous power over state offenses.',
  },
  {
    id: 4360406,
    chapter: CHAPTER,
    title: 'Pardon and impeachment',
    prompt:
      'After the House impeaches and the Senate convicts a federal officer, the officer is removed from office. Can the president pardon that conviction?',
    correct: 'No, because Article II expressly excludes impeachment cases from the pardon power',
    wrong: [
      [
        'Yes, because Article II grants the pardon power without limits',
        'Article II §2 expressly excepts cases of impeachment from the pardon power.',
        'Impeachment is the one explicit exception to pardon.',
      ],
      [
        'Yes, but only if two-thirds of the Senate concurs',
        'There is no concurrence mechanism that revives the pardon power over impeachment cases.',
        'No vote restores pardon power over impeachment.',
      ],
      [
        'No, because impeachment convictions are reviewed by the Supreme Court before becoming final',
        'The Senate is the sole trier of impeachment under Article I §3; the Court does not review the conviction. The pardon limit is textual, not jurisdictional.',
        'The Senate is the impeachment court of last resort.',
      ],
    ],
    lesson:
      'The pardon power has two textual limits: federal offenses only, and "except in cases of impeachment." The exclusion preserves the legislative removal mechanism from being unwound by the executive.',
  },
  {
    id: 4360407,
    chapter: CHAPTER,
    title: 'Regular veto',
    prompt:
      'Congress passes a bill and presents it to the president, who returns it unsigned to the chamber of origin with written objections within ten days while Congress remains in session. What has occurred?',
    correct: 'A regular veto, which Congress may override with a two-thirds vote of both chambers',
    wrong: [
      [
        'A pocket veto, which Congress cannot override',
        'A pocket veto occurs only when Congress has adjourned and the president takes no action; here Congress remains in session and the veto is returned with objections.',
        'Pocket vetoes happen only at adjournment.',
      ],
      [
        'A signing statement, because the president has commented on the bill',
        'A signing statement accompanies a signed bill; vetoes are returns, not signatures with comment.',
        'Signing statements come with signatures, not refusals.',
      ],
      [
        'An automatic enactment, because the bill was returned within ten days',
        'Return within ten days while Congress is in session is the definition of a regular veto, not enactment.',
        'Returning a bill is the opposite of letting it become law.',
      ],
    ],
    lesson:
      'A regular veto (Art I §7) is the president\'s formal return of a bill with objections. Congress can override by a two-thirds vote of both chambers — a high bar that gives the veto significant agenda-setting weight.',
  },
  {
    id: 4360408,
    chapter: CHAPTER,
    title: 'Pocket veto',
    prompt:
      'Congress passes a bill and presents it to the president on the last day of a session. The president takes no action and Congress adjourns three days later. What is the constitutional result?',
    correct: 'The bill dies as a pocket veto and cannot be overridden',
    wrong: [
      [
        'The bill becomes law automatically after ten days',
        'Ordinarily, ten days of inaction enacts a bill — but only if Congress remains in session. Adjournment within that window converts inaction into a pocket veto.',
        'Adjournment changes the rule.',
      ],
      [
        'Congress can override the inaction with a simple majority',
        'A pocket veto cannot be overridden at all; the bill must be reintroduced and passed again.',
        'No override mechanism applies to pocket vetoes.',
      ],
      [
        'The bill is referred to the Supreme Court for an enactment ruling',
        'Courts do not enact statutes; the Constitution\'s presentment procedure handles bill disposition.',
        'Enactment is constitutional procedure, not litigation.',
      ],
    ],
    lesson:
      'Under Article I §7, if the president fails to act within ten days and Congress has adjourned, the bill is killed by a "pocket veto" with no override available. The mechanism explains why presidents often hold controversial bills at session-end.',
  },
  {
    id: 4360409,
    chapter: CHAPTER,
    title: 'Override threshold',
    prompt:
      'Congress wishes to enact a bill over a presidential veto. The minimum required to override is:',
    correct: 'Two-thirds of those present and voting in both the House and the Senate',
    wrong: [
      [
        'A simple majority of both chambers',
        'A simple majority is enough to pass an ordinary bill but not to override a veto, which requires a supermajority.',
        'Override is supermajority, not majority.',
      ],
      [
        'Three-fifths of the Senate only',
        'A three-fifths vote applies to ending Senate filibusters on legislation under cloture rules, not to overriding a veto.',
        'Cloture is not override.',
      ],
      [
        'A two-thirds vote of the Senate alone',
        'Both chambers must vote to override; one chamber alone cannot enact a bill over a veto.',
        'Bicameralism applies to override as it does to passage.',
      ],
    ],
    lesson:
      'The two-thirds bicameral override (Art I §7) is the hardest legislative threshold in the Constitution other than amendment. Successful overrides are historically rare, which is why the veto threat is a powerful bargaining lever.',
  },
  {
    id: 4360410,
    chapter: CHAPTER,
    title: 'Line-item veto',
    prompt:
      'Congress passes a 1996 statute giving the president authority to cancel individual spending items in appropriations bills without vetoing the entire bill. In Clinton v. New York (1998), the Supreme Court held that this line-item veto:',
    correct: 'Violated the Presentment Clause because it allowed unilateral amendment of duly enacted statutes',
    wrong: [
      [
        'Was a permissible exercise of executive discretion under Article II',
        'The Court found that single-item cancellation effectively rewrote the law, which is a legislative act requiring bicameralism and presentment.',
        'Article II discretion does not extend to amending statutes.',
      ],
      [
        'Was valid because Congress had voluntarily delegated the power',
        'Even with congressional authorization, the procedure violated Article I §7 because it altered enacted text without bicameral passage.',
        'Congress cannot delegate around the Constitution\'s lawmaking procedures.',
      ],
      [
        'Could be used only on appropriations bills greater than one billion dollars',
        'The Court invalidated the statute entirely; no dollar threshold saved it.',
        'There is no constitutional dollar threshold for vetoes.',
      ],
    ],
    lesson:
      'Clinton v. New York (1998) struck down the Line Item Veto Act, holding that the president cannot cancel specific items within an enacted statute. Any presidential repeal of statutory text must satisfy bicameralism and presentment, just like the original enactment.',
  },
  {
    id: 4360411,
    chapter: CHAPTER,
    title: 'Executive order authority',
    prompt:
      'A president issues an executive order directing federal contractors to adopt specified workplace standards. For the order to survive a court challenge, it must:',
    correct: 'Rest on authority delegated by the Constitution or a federal statute',
    wrong: [
      [
        'Be ratified by Congress within ninety days of issuance',
        'Executive orders do not require congressional ratification; they require pre-existing authority.',
        'Existing authority, not future ratification, is the test.',
      ],
      [
        'Be issued only during a declared national emergency',
        'Routine executive orders need no emergency declaration; many implement ordinary statutes.',
        'Emergency declarations are not a prerequisite.',
      ],
      [
        'Be limited to topics that the Supreme Court has previously addressed',
        'The Court need not have previously ruled on a topic for an executive order to be lawful; the requirement is statutory or constitutional authority, not prior precedent.',
        'Prior caselaw is not a precondition.',
      ],
    ],
    lesson:
      'Executive orders are not free-standing lawmaking; they must rest on either an Article II constitutional power or congressional delegation. Without that foundation, they are vulnerable to judicial invalidation, as in Youngstown Sheet & Tube v. Sawyer (1952).',
  },
  {
    id: 4360412,
    chapter: CHAPTER,
    title: 'Signing statements',
    prompt:
      'A president signs a bill into law and issues a written statement asserting that one provision will be enforced only insofar as it is consistent with the president\'s view of Article II. This document is best described as a:',
    correct: 'Signing statement, which states the executive\'s interpretation of how the law will be implemented',
    wrong: [
      [
        'Line-item veto, which strikes the targeted provision from the bill',
        'Line-item veto would remove the provision; signing statements interpret rather than excise. Clinton v. New York invalidated line-item vetoes.',
        'A signing statement does not delete text.',
      ],
      [
        'Recess appointment, which fills a vacancy without Senate confirmation',
        'Recess appointments fill federal offices, not interpret statutes.',
        'Different power, different purpose.',
      ],
      [
        'Executive agreement, which binds another nation to the statute\'s terms',
        'Executive agreements deal with foreign powers, not domestic statutory interpretation.',
        'Wrong domain — foreign vs domestic.',
      ],
    ],
    lesson:
      'Signing statements are presidential commentary on legislation accompanying a signature. They are constitutionally controversial because critics argue they amount to a line-item veto in disguise; defenders see them as part of the president\'s Take Care Clause duty.',
  },
  {
    id: 4360413,
    chapter: CHAPTER,
    title: 'Recess appointments',
    prompt:
      'During a Senate recess, a president appoints a commissioner to fill a vacancy on a federal regulatory commission. The appointment is valid, but it expires:',
    correct: 'At the end of the next Senate session unless the Senate confirms the nominee for a full term',
    wrong: [
      [
        'After ten years, the same length as a Senate term plus four years',
        'Senate terms are six years, and recess appointments are not tied to senator tenure; they expire by session, not by term.',
        'Recess appointments are session-bound, not term-bound.',
      ],
      [
        'Never, because recess appointments are permanent once made',
        'Recess appointments are explicitly temporary; the Recess Appointments Clause caps them at the end of the next session.',
        'Recess appointments are explicitly time-limited.',
      ],
      [
        'After ninety days unless the House of Representatives ratifies the appointment',
        'The House has no role in confirming appointments; the Senate alone does, and the time limit runs by session, not by days.',
        'Confirmation is a Senate matter.',
      ],
    ],
    lesson:
      'The Recess Appointments Clause (Art II §2) lets the president temporarily fill vacancies when the Senate is in recess. Such appointments expire at the end of the next Senate session, providing a Senate workaround that is intentionally short-lived.',
  },
  {
    id: 4360414,
    chapter: CHAPTER,
    title: 'NLRB v. Noel Canning',
    prompt:
      'In NLRB v. Noel Canning (2014), the Supreme Court held that the Recess Appointments Clause:',
    correct: 'Allows recess appointments only during recesses of substantial length, not brief pro forma breaks',
    wrong: [
      [
        'Allows the president to make any appointment without Senate confirmation at any time',
        'The clause is narrowly read in Noel Canning; it does not eliminate the Senate role in confirmations.',
        'Recess appointments are an exception, not the rule.',
      ],
      [
        'Permits only judicial recess appointments, not executive-branch ones',
        'The clause covers all federal vacancies, executive and judicial; Noel Canning addressed timing, not category.',
        'The clause is not branch-specific.',
      ],
      [
        'Requires the House to schedule the recess before the appointment is made',
        'The House has no role in defining a Senate recess; the Senate determines its own schedule.',
        'Each chamber governs its own calendar.',
      ],
    ],
    lesson:
      'NLRB v. Noel Canning (2014) limited recess appointments by holding that the Senate is in session whenever it says it is — including during pro forma sessions. Brief recesses of fewer than ten days are presumptively too short to trigger the clause.',
  },
  {
    id: 4360415,
    chapter: CHAPTER,
    title: 'State of the Union',
    prompt:
      'Article II §3 requires the president to "from time to time give to the Congress Information of the State of the Union." Modern presidents fulfill this duty primarily by:',
    correct: 'Delivering an annual address to a joint session of Congress and proposing a legislative agenda',
    wrong: [
      [
        'Submitting written reports only, in keeping with George Washington\'s practice',
        'Washington delivered oral addresses; Jefferson switched to written messages; modern practice since Wilson has reverted to oral joint-session addresses.',
        'Modern practice is the joint-session address.',
      ],
      [
        'Publishing the federal budget in the Federal Register each January',
        'Budget submissions are separate documents governed by the Budget and Accounting Act, not the State of the Union itself.',
        'Different document, different purpose.',
      ],
      [
        'Holding closed-door briefings with congressional leadership only',
        'The State of the Union is a public communication, not a private briefing; bully-pulpit communication is part of its purpose.',
        'The State of the Union is a public address.',
      ],
    ],
    lesson:
      'The State of the Union is constitutionally required and politically essential. It is the canonical setting for the president\'s legislative agenda and a textbook example of "going public" through the bully pulpit.',
  },
  {
    id: 4360416,
    chapter: CHAPTER,
    title: 'Bully pulpit and going public',
    prompt:
      'A president delivers a prime-time televised address urging citizens to call their representatives in support of a stalled bill. This strategy is best described as:',
    correct: 'Going public — using direct communication with citizens to pressure Congress',
    wrong: [
      [
        'Executive order, because the address directs policy implementation',
        'Executive orders are written legal instruments, not televised speeches; the speech does not by itself change any rule.',
        'Orders are legal acts; speeches are political acts.',
      ],
      [
        'Signing statement, because the address comments on legislation',
        'Signing statements accompany a signed bill; the speech here addresses citizens, not statutory text.',
        'Signing statements are documents, not broadcasts.',
      ],
      [
        'Pocket veto, because the address may delay the bill',
        'A pocket veto requires inaction plus adjournment; a speech is neither.',
        'A speech is not a veto.',
      ],
    ],
    lesson:
      'Going public — a term coined by Samuel Kernell — describes presidents bypassing institutional bargaining and appealing directly to voters. The bully pulpit is its rhetorical instrument and a major informal source of presidential influence.',
  },
  {
    id: 4360417,
    chapter: CHAPTER,
    title: 'War Powers Resolution notification',
    prompt:
      'Under the War Powers Resolution of 1973, after the president introduces U.S. armed forces into hostilities or imminent hostilities, the president must notify Congress within:',
    correct: '48 hours',
    wrong: [
      [
        '30 days',
        'Thirty days is the period during which the president must withdraw forces in some readings of the resolution; notification itself must occur within 48 hours.',
        'Mixing notification timeline with withdrawal timeline.',
      ],
      [
        '60 days',
        'Sixty days is the cap on continued military commitment without congressional authorization, not the notification deadline.',
        'Confusing commitment cap with notification.',
      ],
      [
        '10 days',
        'There is no ten-day requirement in the War Powers Resolution; the prescribed notification window is 48 hours.',
        'The statute specifies 48 hours.',
      ],
    ],
    lesson:
      'The War Powers Resolution requires presidential notification of Congress within 48 hours of introducing forces into hostilities. The notification clock is paired with a 60-day commitment cap (extendable by 30 days for withdrawal), creating a statutory check on unilateral military action.',
  },
  {
    id: 4360418,
    chapter: CHAPTER,
    title: 'War Powers Resolution cap',
    prompt:
      'The War Powers Resolution provides that, absent congressional authorization or a declaration of war, the president must withdraw U.S. armed forces from hostilities within:',
    correct: '60 days, with a possible 30-day extension for safe withdrawal',
    wrong: [
      [
        '48 hours, the same period as the notification requirement',
        '48 hours is the notification window; the withdrawal cap is 60 days plus a possible 30-day extension.',
        'Two distinct clocks in the same statute.',
      ],
      [
        '180 days, after which Congress automatically authorizes the deployment',
        'No automatic authorization exists; the statutory presumption runs against continued commitment after 60 days without authorization.',
        'The presumption is for withdrawal, not authorization.',
      ],
      [
        '12 months, after which an automatic constitutional declaration of war takes effect',
        'There is no automatic declaration of war; only Congress can declare war under Article I §8.',
        'Declaration of war is a constitutional act, not a statutory default.',
      ],
    ],
    lesson:
      'The 60-day commitment cap is the War Powers Resolution\'s structural lever. Presidents have routinely contested its constitutionality, but Congress has neither repealed it nor seen a court rule definitively on its enforcement.',
  },
  {
    id: 4360419,
    chapter: CHAPTER,
    title: 'War Powers compliance',
    prompt:
      'Presidents from both parties have generally:',
    correct: 'Notified Congress of military deployments while disputing that the War Powers Resolution constitutionally binds them',
    wrong: [
      [
        'Treated the War Powers Resolution as a binding constitutional rule and complied with every deadline',
        'Most presidents have asserted that the statute infringes on Article II commander-in-chief authority and have notified Congress without conceding the statute\'s constitutionality.',
        'Compliance with reporting is not concession on constitutionality.',
      ],
      [
        'Refused to inform Congress of any military deployment until after combat ended',
        'Notification practice exists; presidents typically provide notice consistent with the statute even when contesting its binding force.',
        'Reporting happens even when authority is contested.',
      ],
      [
        'Asked the Supreme Court in advance to rule on the legality of each deployment',
        'The Court has avoided ruling on War Powers Resolution challenges on political-question grounds; advance rulings are not part of the practice.',
        'Courts have not been an active forum here.',
      ],
    ],
    lesson:
      'The recurring War Powers pattern: presidents notify Congress, dispute that the resolution constrains them, and Congress rarely follows through with the override or funding cutoff the resolution contemplates. The result is a working but contested check.',
  },
  {
    id: 4360420,
    chapter: CHAPTER,
    title: 'Cabinet departments',
    prompt:
      'The federal cabinet currently consists of how many executive departments led by secretaries who require Senate confirmation?',
    correct: '15',
    wrong: [
      [
        '13, the number of original colonies',
        'The number of cabinet departments has grown from 4 under Washington to 15 today; the original-colony number is unrelated.',
        'Cabinet size is unrelated to colonial history.',
      ],
      [
        '10, fixed by statute since 1947',
        'No 1947 statute fixed cabinet size at 10; the National Security Act of 1947 reorganized defense and intelligence but did not cap departments.',
        'Cabinet number is set by separate enabling statutes, not capped.',
      ],
      [
        '20, including all independent regulatory commissions',
        'Independent regulatory commissions are distinct from cabinet departments; cabinet count is 15.',
        'Commissions are not cabinet departments.',
      ],
    ],
    lesson:
      'The cabinet has 15 executive departments — from State (1789) to Homeland Security (2002). Each is headed by a secretary requiring Senate confirmation and reports to the president as part of the executive branch.',
  },
  {
    id: 4360421,
    chapter: CHAPTER,
    title: 'Independent regulatory commission',
    prompt:
      'The Federal Communications Commission is structured with five commissioners serving fixed staggered terms, removable only for cause. This design is characteristic of:',
    correct: 'An independent regulatory commission, deliberately insulated from at-will presidential control',
    wrong: [
      [
        'A cabinet department, headed by a single secretary who serves at the president\'s pleasure',
        'Cabinet secretaries serve at the president\'s pleasure and can be removed at will; the FCC structure intentionally limits that removal power.',
        'Multi-member, for-cause removal is the marker of independence.',
      ],
      [
        'A government corporation, structured to earn revenue from public services',
        'Government corporations like USPS or Amtrak are organized around revenue-generating services, not regulatory rulemaking.',
        'Different design, different mission.',
      ],
      [
        'An independent executive agency, such as NASA or the EPA',
        'Independent executive agencies have single administrators who typically serve at the president\'s pleasure; they are not multi-member with fixed terms.',
        'Single administrator at-will, not multi-member for-cause.',
      ],
    ],
    lesson:
      'Independent regulatory commissions (FCC, FTC, FERC, SEC, NLRB) share three structural features: multi-member, fixed staggered terms, and removal only for cause. The design is intended to insulate technical regulatory judgments from partisan pressure.',
  },
  {
    id: 4360422,
    chapter: CHAPTER,
    title: 'Government corporations',
    prompt:
      'The U.S. Postal Service, Amtrak, and the Federal Deposit Insurance Corporation share which structural feature that distinguishes them from cabinet departments?',
    correct: 'They are organized to provide a market-like service and to generate revenue, though they may also receive federal subsidies',
    wrong: [
      [
        'They are funded entirely by the legislative branch and report directly to congressional committees',
        'Government corporations are executive-branch entities, not legislative subagencies; congressional oversight applies but is not direct control.',
        'Corporations are executive entities, not legislative ones.',
      ],
      [
        'They are headed by Supreme Court justices serving ex officio',
        'No federal agency is led by a sitting justice; that would violate separation-of-powers norms.',
        'Justices do not run executive agencies.',
      ],
      [
        'They have constitutional status under Article II and cannot be abolished by statute',
        'Government corporations are statutory creations; Congress can restructure or abolish them.',
        'Statutory status, not constitutional status.',
      ],
    ],
    lesson:
      'Government corporations occupy a hybrid space: they perform commercial-style services (mail, passenger rail, deposit insurance) under federal charter. They are executive entities but operate with more autonomy and revenue logic than traditional cabinet departments.',
  },
  {
    id: 4360423,
    chapter: CHAPTER,
    title: 'Independent executive agency',
    prompt:
      'NASA and the Environmental Protection Agency are best classified as:',
    correct: 'Independent executive agencies — single-administrator entities outside the cabinet but within the executive branch',
    wrong: [
      [
        'Cabinet departments because their administrators attend cabinet meetings',
        'Some administrators may attend cabinet meetings, but neither NASA nor the EPA is a statutory cabinet department; they remain independent executive agencies.',
        'Attendance at cabinet meetings does not equal cabinet status.',
      ],
      [
        'Independent regulatory commissions, with multi-member boards and for-cause removal',
        'NASA and EPA are headed by single administrators who serve at the president\'s pleasure, not multi-member commissions with for-cause protections.',
        'Single administrator at-will marks them as executive agencies.',
      ],
      [
        'Government corporations, designed to generate revenue from public services',
        'NASA and EPA are mission agencies funded by appropriations, not revenue-generating corporations.',
        'No commercial revenue model.',
      ],
    ],
    lesson:
      'Independent executive agencies (NASA, EPA, CIA, SSA) are headed by single administrators and sit within the executive branch but outside cabinet departments. They are typically subject to ordinary presidential removal authority — distinguishing them from independent regulatory commissions.',
  },
  {
    id: 4360424,
    chapter: CHAPTER,
    title: 'Pendleton Act',
    prompt:
      'The Pendleton Civil Service Act of 1883 most directly changed the federal bureaucracy by:',
    correct: 'Replacing the spoils system with merit-based hiring for many federal positions',
    wrong: [
      [
        'Creating the cabinet and establishing the position of secretary of state',
        'The cabinet and State Department predate the Pendleton Act by nearly a century; the act addressed personnel reform, not departmental creation.',
        'Pendleton is hiring reform, not structural creation.',
      ],
      [
        'Establishing the independent regulatory commission as a federal agency type',
        'The first independent regulatory commission, the Interstate Commerce Commission, was created by a separate act in 1887.',
        'Different statute, different reform.',
      ],
      [
        'Authorizing the president to remove any federal civil servant without cause',
        'Pendleton moved in the opposite direction — toward merit protections and away from at-will patronage dismissals.',
        'Pendleton restricts, not expands, removal.',
      ],
    ],
    lesson:
      'The Pendleton Act (1883), passed after President Garfield\'s assassination by a disappointed office-seeker, established competitive examinations and merit principles for federal hiring. It is the foundational statute of the modern civil service.',
  },
  {
    id: 4360425,
    chapter: CHAPTER,
    title: 'Hatch Act',
    prompt:
      'The Hatch Act of 1939 restricts federal civil servants from:',
    correct: 'Engaging in certain partisan political activities while on duty or using their official authority',
    wrong: [
      [
        'Joining any political party or voting in federal elections',
        'The Hatch Act does not bar party membership or voting; those activities are protected First Amendment rights.',
        'The act limits campaigning, not membership or voting.',
      ],
      [
        'Serving more than one four-year term in any federal position',
        'There is no term limit for civil servants under the Hatch Act; the statute regulates political activity, not tenure.',
        'Hatch is about political conduct, not tenure.',
      ],
      [
        'Earning more than the salary of a member of Congress',
        'The Hatch Act does not regulate salaries; pay scales are set by separate statutes.',
        'Salary is governed elsewhere.',
      ],
    ],
    lesson:
      'The Hatch Act (1939) bars covered federal employees from partisan campaigning on the job or in official capacity. The principle: civil servants serve administrations of both parties, so their public role should remain politically neutral.',
  },
  {
    id: 4360426,
    chapter: CHAPTER,
    title: 'Spoils vs merit',
    prompt:
      'A nineteenth-century president fills most federal jobs with personal supporters who campaigned for him. After he leaves office, his successor replaces those workers with his own supporters. This describes:',
    correct: 'The spoils system, which the Pendleton Act later largely replaced with merit hiring',
    wrong: [
      [
        'The Hatch Act, which restricts federal employees\' political activities',
        'The Hatch Act regulates the political behavior of sitting civil servants; it does not describe historical patronage hiring.',
        'Different statute, different problem.',
      ],
      [
        'Independent regulatory commission staffing, with fixed terms and for-cause removal',
        'Independent commissions were a later innovation insulating personnel from politics, not an example of patronage.',
        'Opposite of patronage.',
      ],
      [
        'The iron triangle, in which agencies hire campaign donors directly',
        'Iron triangles describe policy networks among Congress, agencies, and interest groups, not hiring practices.',
        'Iron triangles are policy networks, not hiring methods.',
      ],
    ],
    lesson:
      'The spoils system, named from Senator Marcy\'s phrase "to the victor belong the spoils," dominated nineteenth-century federal employment. Pendleton (1883) created the merit-based civil service that limits but does not eliminate patronage.',
  },
  {
    id: 4360427,
    chapter: CHAPTER,
    title: 'Iron triangle: agriculture',
    prompt:
      'For decades, the Department of Agriculture, the House and Senate Agriculture Committees, and major farm-lobby groups have cooperated to write farm subsidies and crop-insurance rules. This durable subgovernment is a textbook example of:',
    correct: 'An iron triangle, with shared interests linking an agency, congressional committees, and an interest group',
    wrong: [
      [
        'An issue network, formed briefly and broadly around a single hearing',
        'Issue networks are wider, looser, and more permeable than iron triangles. The agriculture example is narrow, durable, and three-cornered — the classic iron triangle.',
        'Iron triangles are narrow and durable; issue networks are broad and shifting.',
      ],
      [
        'A line-item veto exercised by farm-state senators',
        'The line-item veto was struck down in Clinton v. New York; this scenario describes policymaking cooperation, not vetoes.',
        'No veto is described.',
      ],
      [
        'An executive order issued by the secretary of agriculture',
        'Executive orders are presidential instruments, not products of congressional-agency-lobby cooperation.',
        'Different mechanism.',
      ],
    ],
    lesson:
      'Iron triangles are stable three-cornered subgovernments. Agriculture is the canonical example: USDA writes the rules, the agriculture committees authorize and appropriate, and the farm lobby provides political support and information. The structure persists across administrations.',
  },
  {
    id: 4360428,
    chapter: CHAPTER,
    title: 'Iron triangle: defense',
    prompt:
      'A defense contractor lobbies the House and Senate Armed Services Committees and the Department of Defense in support of a weapons program that benefits the contractor, suits committee members\' districts, and aligns with DoD priorities. The arrangement illustrates:',
    correct: 'An iron triangle in the defense policy area',
    wrong: [
      [
        'A pocket veto, since the contractor can prevent program cancellation',
        'A pocket veto is a presidential instrument exercised at congressional adjournment, not a lobbying outcome.',
        'Pocket vetoes are presidential, not industrial.',
      ],
      [
        'A signing statement issued by the defense contractor',
        'Only the president issues signing statements; contractors do not.',
        'Signing statements are presidential documents.',
      ],
      [
        'Bureaucratic discretion exercised by congressional members',
        'Bureaucratic discretion describes choices by agencies in implementing statutes, not coordination among committees, agencies, and lobbies.',
        'Discretion is agency choice, not subgovernment coordination.',
      ],
    ],
    lesson:
      'Defense procurement is a frequently cited iron triangle: DoD, the Armed Services committees, and major contractors share an interest in stable, well-funded programs. The arrangement persists across administrations because each corner benefits from the other two.',
  },
  {
    id: 4360429,
    chapter: CHAPTER,
    title: 'Issue networks',
    prompt:
      'Surrounding a proposed climate regulation, dozens of think tanks, academic researchers, industry associations, environmental groups, journalists, and congressional staff exchange briefs and testimony over several months before the rule is finalized. This pattern is best described as:',
    correct: 'An issue network — a broad, fluid set of participants that contests policy in a particular area',
    wrong: [
      [
        'An iron triangle, because the participants share a common interest',
        'Iron triangles are narrow, durable, and three-cornered. The pattern here is wide, shifting, and includes many actors — the defining traits of an issue network.',
        'Iron triangles are narrow and stable; issue networks are wide and fluid.',
      ],
      [
        'A line-item veto, applied to specific provisions of the rule',
        'Rules are not subject to line-item vetoes; rulemaking is an agency process.',
        'No veto applies to rulemaking.',
      ],
      [
        'A recess appointment, used to staff the rulemaking team',
        'Recess appointments fill federal offices, not policy debates.',
        'Different concept.',
      ],
    ],
    lesson:
      'Issue networks (a term associated with Hugh Heclo) describe the broader, more permeable, and more conflict-prone successors to iron triangles. They reflect the rise of think tanks, expert witnesses, and policy entrepreneurs who participate in policy contests without long-term institutional commitments.',
  },
  {
    id: 4360430,
    chapter: CHAPTER,
    title: 'Delegated rulemaking',
    prompt:
      'Congress passes a statute directing the Securities and Exchange Commission to write rules requiring "adequate" disclosure of climate-related financial risk. The agency then issues detailed rules specifying disclosure metrics and timelines. This sequence illustrates:',
    correct: 'Delegated rulemaking, in which Congress authorizes an agency to fill in policy details',
    wrong: [
      [
        'Judicial review, in which a court interprets the statute',
        'Judicial review may come later in a challenge to the rule, but the rulemaking itself is an executive activity, not a judicial one.',
        'Rulemaking happens before judicial review.',
      ],
      [
        'A recess appointment, in which the agency fills personnel gaps',
        'Recess appointments concern personnel, not regulatory drafting.',
        'Personnel vs policy.',
      ],
      [
        'A treaty ratification, in which the Senate consents to a foreign agreement',
        'Treaty ratification concerns foreign relations and the Senate; this scenario is a domestic agency-rulemaking process.',
        'Different process entirely.',
      ],
    ],
    lesson:
      'Delegated rulemaking is the engine of the administrative state: Congress passes broad statutes and agencies write detailed rules. The Administrative Procedure Act governs how those rules must be developed, and the courts review them for statutory and constitutional fidelity.',
  },
  {
    id: 4360431,
    chapter: CHAPTER,
    title: 'Notice-and-comment process',
    prompt:
      'Under the Administrative Procedure Act, the typical sequence for a major federal agency rule is:',
    correct: 'Publish a proposed rule in the Federal Register, collect public comments, issue a final rule with a reasoned response to significant comments',
    wrong: [
      [
        'Convene a closed-door meeting with congressional leaders, then publish the rule',
        'The APA explicitly requires public notice and an open comment period; closed-door drafting would render the rule procedurally invalid.',
        'Process must be open under the APA.',
      ],
      [
        'Hold a national referendum on the rule, then implement the result',
        'There is no national referendum process for federal rulemaking.',
        'No federal referendum exists.',
      ],
      [
        'Issue the rule first and then collect comments only if Congress objects',
        'Putting the rule first and the comments later would invert the APA\'s procedural sequence and risk invalidation.',
        'Notice precedes the rule, not the other way around.',
      ],
    ],
    lesson:
      'Notice-and-comment rulemaking under APA §553 is the canonical method for issuing major federal rules. It produces a public record, supports judicial review, and is the procedural foundation for most modern regulation.',
  },
  {
    id: 4360432,
    chapter: CHAPTER,
    title: 'Chevron and Loper Bright',
    prompt:
      'For decades, courts deferred to an agency\'s reasonable interpretation of an ambiguous statute under Chevron U.S.A. v. NRDC (1984). In Loper Bright Enterprises v. Raimondo (2024), the Supreme Court:',
    correct: 'Overruled Chevron, holding that courts must exercise independent judgment when interpreting statutes',
    wrong: [
      [
        'Reaffirmed Chevron and extended deference to constitutional questions',
        'Loper Bright moved in the opposite direction and explicitly overruled Chevron.',
        'Loper Bright overruled, not extended.',
      ],
      [
        'Held that Chevron applies only to environmental statutes administered by the EPA',
        'Chevron was a general administrative-law doctrine spanning many agencies, not limited to environmental statutes; and the Court did not narrow it that way before overruling.',
        'Chevron was domain-general, not domain-specific.',
      ],
      [
        'Transferred all agency rulemaking power to the executive office of the president',
        'Loper Bright concerns judicial interpretation, not executive reorganization; it does not move rulemaking authority.',
        'The change is doctrinal, not structural.',
      ],
    ],
    lesson:
      'Loper Bright (2024) overruled Chevron and shifted the balance of statutory interpretation toward independent judicial judgment. Agencies still write rules under their delegated authority, but courts no longer defer to agency readings of ambiguous statutory text.',
  },
  {
    id: 4360433,
    chapter: CHAPTER,
    title: 'Bureaucracy and judicial review',
    prompt:
      'A trade association sues a federal agency, arguing that the agency\'s final rule exceeds the authority Congress delegated to it. Under the Administrative Procedure Act, a reviewing court will most likely:',
    correct: 'Determine whether the agency acted within its statutory authority and was not arbitrary or capricious',
    wrong: [
      [
        'Defer to the agency\'s reading of the statute under Chevron in all close cases',
        'Loper Bright (2024) ended general Chevron deference; courts now exercise independent statutory judgment.',
        'Chevron deference no longer applies.',
      ],
      [
        'Refer the rule to Congress for a binding ratification vote',
        'Congress can repeal or override rules through statute or the Congressional Review Act, but courts do not refer rules for legislative votes during litigation.',
        'Litigation is judicial, not legislative.',
      ],
      [
        'Decline review because rulemaking is unreviewable executive action',
        'Final agency action is presumptively reviewable under APA §704; only narrow exceptions apply.',
        'Agency action is generally reviewable.',
      ],
    ],
    lesson:
      'APA review asks whether the agency had statutory authority, followed required procedures, and acted reasoned (not "arbitrary, capricious, or otherwise not in accordance with law"). Loper Bright reinforced courts\' role in interpreting the underlying statute themselves.',
  },
  {
    id: 4360434,
    chapter: CHAPTER,
    title: 'Senate confirmation scope',
    prompt:
      'Which of the following appointments does NOT require Senate confirmation?',
    correct: 'Senior advisors on the White House staff such as the chief of staff',
    wrong: [
      [
        'A federal court of appeals judge',
        'All Article III judges require Senate advice and consent under the Appointments Clause.',
        'Article III judges are confirmation positions.',
      ],
      [
        'A cabinet secretary',
        'All cabinet secretaries are principal officers requiring Senate confirmation.',
        'Cabinet posts require confirmation.',
      ],
      [
        'A U.S. ambassador',
        'Ambassadors are expressly named in the Appointments Clause and require Senate confirmation.',
        'Ambassadors are confirmation positions.',
      ],
    ],
    lesson:
      'The Appointments Clause distinguishes principal officers (cabinet, judges, ambassadors, agency heads — Senate-confirmed) from inferior officers and personal staff. White House advisers in the Executive Office of the President typically do not require confirmation, which gives presidents a flexible personal team.',
  },
  {
    id: 4360435,
    chapter: CHAPTER,
    title: 'Acting officials',
    prompt:
      'When a cabinet position becomes vacant and the president has not yet secured Senate confirmation of a successor, the president often relies on the Federal Vacancies Reform Act to designate an "acting" official. The most important constitutional check on this practice is that:',
    correct: 'The acting official\'s service is limited in duration, and a permanent appointment still requires Senate confirmation',
    wrong: [
      [
        'Acting officials serve indefinitely without confirmation',
        'The Federal Vacancies Reform Act caps acting service to defined periods; indefinite acting service would defeat the confirmation requirement.',
        'Acting service is explicitly time-limited.',
      ],
      [
        'Acting officials must be confirmed by the House of Representatives',
        'Confirmation authority lies with the Senate, not the House; acting service does not need House approval.',
        'House plays no confirmation role.',
      ],
      [
        'Acting officials are appointed and removed by the Supreme Court',
        'The Court does not appoint or remove acting executive officials.',
        'Appointment is an executive function.',
      ],
    ],
    lesson:
      'The Federal Vacancies Reform Act (1998) lets presidents fill executive vacancies with acting officials on a strict clock. The check on the practice is the time limit plus the eventual requirement of Senate confirmation for a permanent appointee.',
  },
  {
    id: 4360436,
    chapter: CHAPTER,
    title: 'Executive Office of the President',
    prompt:
      'The Office of Management and Budget, the National Security Council, and the Council of Economic Advisers are part of the Executive Office of the President. Their main role is to:',
    correct: 'Assist the president in coordinating policy across the executive branch',
    wrong: [
      [
        'Write final regulations that bind cabinet departments and independent agencies',
        'EOP units coordinate and review; final rules are issued by agencies under their own statutory authority.',
        'EOP coordinates, agencies promulgate.',
      ],
      [
        'Confirm judicial nominees on behalf of the Senate',
        'The Senate confirms nominees; EOP staff may help vet them but cannot vote on confirmation.',
        'EOP supports, Senate confirms.',
      ],
      [
        'Hold cabinet secretaries personally accountable to Congress through subpoenas',
        'Congress, not EOP, exercises subpoena authority; EOP supports the president internally.',
        'Subpoena is a congressional power.',
      ],
    ],
    lesson:
      'The Executive Office of the President (established 1939) staffs the modern presidency. OMB reviews budgets and rules; NSC coordinates foreign policy; CEA advises on the economy. EOP is how a single executive scales across a vast administrative state.',
  },
  {
    id: 4360437,
    chapter: CHAPTER,
    title: 'OMB regulatory review',
    prompt:
      'Before a major rule is published in the Federal Register, the Office of Information and Regulatory Affairs (OIRA), housed within OMB, typically:',
    correct: 'Reviews the rule for costs, benefits, and consistency with the president\'s priorities',
    wrong: [
      [
        'Rewrites the rule\'s text without informing the originating agency',
        'OIRA reviews and negotiates with the agency; it does not unilaterally rewrite rules in the dark.',
        'Review is collaborative, not covert rewriting.',
      ],
      [
        'Holds a public referendum on the rule',
        'No federal regulatory referendum exists; comment from the public happens through the APA notice-and-comment process.',
        'No referendum step exists.',
      ],
      [
        'Submits the rule to the Supreme Court for advance approval',
        'The Court does not pre-approve rules; review occurs only in litigation.',
        'No advisory review by the Court.',
      ],
    ],
    lesson:
      'OIRA review (formalized under Executive Order 12866) lets the White House coordinate rulemaking across agencies and apply cost-benefit analysis. It is a major informal lever of presidential control over the bureaucracy.',
  },
  {
    id: 4360438,
    chapter: CHAPTER,
    title: 'Removal power',
    prompt:
      'A president dismisses the chair of an independent regulatory commission three years into a five-year fixed term, citing policy disagreement. The chair sues. The most relevant precedent for evaluating the removal is:',
    correct: 'Humphrey\'s Executor v. United States (1935), which limits presidential at-will removal of commissioners with statutory for-cause protection',
    wrong: [
      [
        'Marbury v. Madison (1803), which holds that the Constitution is the supreme law of the land',
        'Marbury addresses judicial review, not the removal power; Humphrey\'s Executor is the on-point case.',
        'Marbury is judicial review, not removal.',
      ],
      [
        'Clinton v. New York (1998), which struck down the line-item veto',
        'Clinton v. New York is a Presentment Clause case, not a removal case.',
        'Different doctrinal area.',
      ],
      [
        'United States v. Lopez (1995), which limited the Commerce Clause',
        'Lopez addresses federalism limits on Congress, not presidential removal of agency officials.',
        'Different power, different doctrine.',
      ],
    ],
    lesson:
      'Humphrey\'s Executor (1935) held that Congress may protect officers of independent commissions from at-will removal, allowing dismissal only for cause. The decision remains the doctrinal cornerstone of independent agencies, though the Court has narrowed it in recent cases like Seila Law (2020).',
  },
  {
    id: 4360439,
    chapter: CHAPTER,
    title: 'Bureaucracy size',
    prompt:
      'Roughly how many civilian employees does the federal bureaucracy employ today, excluding the military?',
    correct: 'About 2 million',
    wrong: [
      [
        'About 20,000',
        'Twenty thousand would not staff even a single large cabinet department; the actual figure is roughly two million.',
        'Off by two orders of magnitude.',
      ],
      [
        'About 20 million',
        'Twenty million would exceed the entire federal civilian workforce by an order of magnitude; the actual figure is closer to two million.',
        'Off by an order of magnitude high.',
      ],
      [
        'About 200,000',
        'Two hundred thousand is roughly the size of a single large department, not the whole civilian bureaucracy.',
        'Off by an order of magnitude.',
      ],
    ],
    lesson:
      'The federal civilian workforce is roughly 2 million employees, plus another 1.3 million in the military. The size has been remarkably stable since the 1960s even as federal spending and contracting have grown.',
  },
  {
    id: 4360440,
    chapter: CHAPTER,
    title: 'Executive order text',
    prompt:
      'A presidential executive order states: "By the authority vested in me as President by the Constitution and the laws of the United States, including the Clean Air Act, 42 U.S.C. 7401 et seq., I hereby direct..." The cited Clean Air Act reference is included primarily to:',
    correct: 'Establish the statutory foundation that gives the order legal authority',
    wrong: [
      [
        'Indicate that Congress has voted to approve the order in advance',
        'Statutory citations identify pre-existing delegated authority; they do not signal a separate congressional vote on the order.',
        'Citations show source of authority, not approval votes.',
      ],
      [
        'Show that the order will expire when the Clean Air Act is amended',
        'Statutory citations identify authority; they do not act as automatic sunset clauses tied to amendments.',
        'No automatic sunset is implied.',
      ],
      [
        'Demonstrate that the Supreme Court has previously upheld the order',
        'A statutory citation is not equivalent to prior judicial approval; only court rulings establish that.',
        'Statutory citation is not precedent.',
      ],
    ],
    lesson:
      'Executive orders standardly cite the constitutional and statutory authorities they rely on. The citation matters legally: an order without an identifiable source of authority is the kind that courts in the Youngstown tradition strike down.',
  },
  {
    id: 4360441,
    chapter: CHAPTER,
    title: 'Power to declare war',
    prompt:
      'A student claims that the president can constitutionally declare war on another nation whenever the president judges that national security requires it. The strongest correction to this view is that:',
    correct: 'Article I §8 vests the power to declare war in Congress, not the president',
    wrong: [
      [
        'The Supreme Court must approve any declaration of war before it takes effect',
        'No Supreme Court approval is required; the constitutional power is legislative, not judicial.',
        'Declaration of war is legislative, not judicial.',
      ],
      [
        'Declarations of war are made only by the United Nations Security Council',
        'The UN Security Council can authorize uses of force under international law, but U.S. constitutional war power is divided between Congress and the president and is not delegated to the UN.',
        'International authorization does not equal U.S. constitutional declaration.',
      ],
      [
        'The president can declare war only with the consent of state governors',
        'Governors play no role in declarations of war; the relevant actors are Congress and the president.',
        'States are not in the declaration process.',
      ],
    ],
    lesson:
      'A persistent misconception conflates "commander in chief" with the power to declare war. Article I §8 reserves war-declaration to Congress. Modern practice has blurred this through congressional authorizations for use of military force, but the constitutional allocation is clear.',
  },
  {
    id: 4360442,
    chapter: CHAPTER,
    title: 'Executive order misconception',
    prompt:
      'A student claims that executive orders are just like statutes and require congressional approval. The most precise correction is that executive orders:',
    correct: 'Do not require congressional approval, but must rest on existing constitutional or statutory authority',
    wrong: [
      [
        'Require approval by both chambers of Congress and the Supreme Court',
        'Executive orders need no congressional vote and no judicial pre-approval; they need a source of authority.',
        'Authority, not approval, is the requirement.',
      ],
      [
        'Require approval by a national referendum',
        'No federal referendum mechanism exists.',
        'No referendum.',
      ],
      [
        'Are valid only if Congress declines to act on the same subject',
        'Congressional inaction does not establish presidential authority; relevant authority must come from a statute or the Constitution itself.',
        'Inaction is not authorization.',
      ],
    ],
    lesson:
      'Executive orders are unilateral presidential instructions to the executive branch. They do not need congressional approval, but they cannot create new substantive law without statutory or constitutional grounding — the lesson of Youngstown Sheet & Tube v. Sawyer.',
  },
  {
    id: 4360443,
    chapter: CHAPTER,
    title: 'Recess appointment misconception',
    prompt:
      'A student argues that once made, recess appointments are permanent because the Constitution does not specify an end date. The most precise correction is that:',
    correct: 'Recess appointments expire at the end of the next Senate session',
    wrong: [
      [
        'Recess appointments expire only when the appointee dies, resigns, or is impeached',
        'Recess appointments have a defined termination by session, separate from the ordinary grounds for vacating an office.',
        'Session-bound expiration applies.',
      ],
      [
        'Recess appointments expire at the end of the president\'s term',
        'They expire at the end of the next Senate session, often well before the end of a presidential term.',
        'Senate session, not presidential term.',
      ],
      [
        'Recess appointments expire after fifteen years, the average length of judicial service',
        'There is no fifteen-year cap; the constitutional rule keys to Senate sessions.',
        'No multi-year cap exists in the clause.',
      ],
    ],
    lesson:
      'Article II §2 expressly limits recess appointments to the end of the next Senate session. That built-in expiration is what distinguishes recess appointments from confirmed appointments and is the structural reason the Senate still controls the long-term composition of executive offices.',
  },
  {
    id: 4360444,
    chapter: CHAPTER,
    title: 'Synthesis: presidency and bureaucracy',
    prompt:
      'Which statement best captures how the modern presidency operates within constitutional limits?',
    correct: 'The president exercises broad informal powers (executive orders, going public, signing statements) within a constitutional structure that requires statutory or constitutional authority and remains subject to legislative and judicial checks',
    wrong: [
      [
        'The president can act unilaterally on any domestic or foreign matter without legislative or judicial review',
        'Even broad informal powers are constrained by Congress\'s power of the purse, judicial review, and the Take Care Clause\'s grounding requirement.',
        'Informal power is bounded, not unlimited.',
      ],
      [
        'The president\'s only powers are those listed explicitly in Article II',
        'Modern presidential practice has built substantial informal power on top of Article II text, including executive orders, agreements, and the bully pulpit; but it remains grounded in constitutional or statutory authority.',
        'Informal powers exist; they are not unconstrained.',
      ],
      [
        'The president serves at the pleasure of Congress and can be removed by simple majority vote',
        'Impeachment and conviction require a House majority and a two-thirds Senate vote; the president is not removable at congressional will.',
        'Removal is by impeachment, not simple majority.',
      ],
    ],
    lesson:
      'The presidency synthesizes formal Article II powers, informal practices (executive orders, going public, signing statements, executive agreements), and constraints (War Powers Resolution, judicial review, congressional appropriations, the Appointments Clause). Federalist 70\'s "energy in the executive" sits inside a structure designed to channel that energy, not to free it.',
  },
])
