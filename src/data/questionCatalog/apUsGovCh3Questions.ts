import type { Question } from './types'
import { makeQuestionBank } from './base'

// -----------------------------------------------------------------------
// AP US Government — Chapter 3: Congress and Representation
// Coverage expansion authored to close the flagship audit gap: the prior
// Chapter 3 block in civicPoliticsQuestions.ts held only six items. This
// bank adds 44 AP-level questions on House/Senate procedure, the Speaker,
// committees, redistricting precedents, representation models, lawmaking,
// oversight, the power of the purse, incumbency, and required documents.
// IDs: 4360300 – 4360343 inclusive.
// -----------------------------------------------------------------------

export const apUsGovCh3Questions: Question[] = makeQuestionBank('AP', [
  // -- House vs Senate procedure ------------------------------------------
  {
    id: 4360300,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Filibuster origins',
    prompt: 'Which statement most accurately describes the constitutional status of the Senate filibuster?',
    correct: 'It is a procedural practice arising from Senate rules, not a requirement found in the Constitution',
    wrong: [
      ['Article I requires a supermajority to end debate on any bill', 'The Constitution sets supermajority thresholds for treaties, conviction, and constitutional amendments, but ordinary legislative debate is governed by chamber rules.', 'Look at where the 60-vote rule actually appears.'],
      ['The Seventeenth Amendment created the filibuster when senators became directly elected', 'The Seventeenth Amendment changed how senators are chosen; it said nothing about debate.', 'The amendment is about elections, not debate.'],
      ['It was established by the Supreme Court in a redistricting case', 'No Supreme Court ruling created the filibuster; the Court does not write internal chamber rules.', 'Internal chamber rules are not judicial creations.'],
    ],
    lesson: 'The filibuster emerges from Senate Rule XXII and the chamber\'s tradition of unlimited debate. It is a rule the Senate could change by majority vote, not a constitutional mandate.',
  },
  {
    id: 4360301,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Cloture threshold',
    prompt: 'Under Senate Rule XXII, how many senators must vote to invoke cloture on most legislative debate?',
    correct: 'Three-fifths of senators duly chosen and sworn, which is 60 votes in a full Senate',
    wrong: [
      ['A simple majority of senators present and voting, which is at least 51', 'Cloture for ordinary legislation requires a supermajority; a simple majority would defeat the purpose of unlimited debate.', 'Cloture is a supermajority threshold.'],
      ['Two-thirds of senators present, which is the same threshold as a treaty ratification', 'Cloture moved from two-thirds to three-fifths in 1975; treaty ratification remains two-thirds, but the two are not the same number.', 'The threshold changed in 1975.'],
      ['A unanimous vote of all 100 senators', 'Unanimous consent is a separate mechanism used to set debate terms; cloture by definition allows debate to end without unanimity.', 'Unanimous consent is not cloture.'],
    ],
    lesson: 'Rule XXII sets cloture at three-fifths of the full Senate (60 votes) for most legislation. Nominations are an exception: in 2013 and 2017 the Senate lowered cloture for executive-branch and judicial nominees to a simple majority.',
  },
  {
    id: 4360302,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Senatorial hold',
    prompt: 'A senator notifies her leadership that she will object to any unanimous consent request to take up a particular nominee. The leader treats this notice as binding for now. This practice is known as:',
    correct: 'A hold, an informal courtesy by which a single senator can delay floor action through threatened objection',
    wrong: [
      ['Cloture, which automatically blocks any floor action without 60 votes', 'Cloture ends debate; it does not start a delay, and it is invoked by a vote, not a single senator\'s notice.', 'A hold is initiated by one senator, not by 60.'],
      ['A pocket veto, which lets one chamber kill a measure during adjournment', 'The pocket veto is a presidential power exercised at adjournment; it is not a Senate procedural tool.', 'Pocket vetoes are presidential, not senatorial.'],
      ['A discharge petition, which forces a measure out of committee', 'Discharge petitions are a House mechanism and they pull a bill toward action, not the opposite.', 'Holds delay; discharge petitions accelerate.'],
    ],
    lesson: 'A hold is a feature of Senate culture and leadership scheduling. It is informal, not in the Constitution or in the standing rules, but it is honored because so much Senate business runs by unanimous consent.',
  },
  {
    id: 4360303,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Unanimous consent agreements',
    prompt: 'Most floor activity in the Senate is structured through unanimous consent agreements. The most accurate institutional consequence is that:',
    correct: 'Any single senator can object and force the chamber to use its slower default rules, giving individuals significant leverage',
    wrong: [
      ['Only the majority leader\'s consent is required to set debate terms', 'Unanimous consent means every senator may object; the majority leader proposes but cannot impose terms alone.', 'The word "unanimous" is doing the work.'],
      ['The presiding officer can override an objection and proceed', 'The presiding officer enforces objections; they do not set them aside.', 'The chair enforces, not overrides.'],
      ['The House parliamentarian must approve the agreement before it takes effect', 'The House has its own officers and no role in Senate scheduling.', 'Each chamber sets its own rules under Article I, Section 5.'],
    ],
    lesson: 'Unanimous consent agreements are the workhorse of Senate scheduling. Because any senator can withhold consent, individual members carry leverage that has no equivalent in the House.',
  },
  {
    id: 4360304,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Rules Committee in the House',
    prompt: 'A House bill is reported favorably from the Energy and Commerce Committee and is set to reach the floor. The chamber wants to allow only two hours of debate and to bar any amendments not pre-cleared. Which committee structures that floor consideration?',
    correct: 'The Rules Committee, which issues a rule setting time limits and amendment terms for floor debate',
    wrong: [
      ['The Ways and Means Committee, which handles all floor scheduling', 'Ways and Means is the chief tax-writing committee; it does not schedule floor debate.', 'Ways and Means is taxes, not scheduling.'],
      ['The Senate Finance Committee, by joint convention with the House', 'Senate committees do not control House floor procedure; the chambers are separate under Article I, Section 5.', 'Each chamber governs its own floor.'],
      ['The Conference Committee, which always meets before final floor debate', 'Conference committees reconcile differences after both chambers pass a bill, not before House floor consideration.', 'Conference committees come at the end, not the beginning.'],
    ],
    lesson: 'The House Rules Committee is the majority leadership\'s tool for controlling floor debate. The rule it issues (open, closed, structured) determines what amendments are in order and how long debate runs.',
  },
  {
    id: 4360305,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Discharge petition',
    prompt: 'A bipartisan bill has popular support but has sat in committee for months because the chair refuses to bring it up. Which House mechanism can move the bill to the floor without committee approval?',
    correct: 'A discharge petition signed by a majority of the House (218 members) that releases the bill from committee',
    wrong: [
      ['A motion to recommit, which sends the bill from the floor back to committee', 'Motion to recommit moves a bill backward into committee, not out of it.', 'Recommit and discharge run in opposite directions.'],
      ['An override vote of two-thirds, the same threshold as a presidential veto', 'Two-thirds is the threshold to override a veto, not to free a bill from committee.', 'Veto override is a different action.'],
      ['A point of order against the committee chair, which automatically vacates the chair\'s position', 'Points of order address procedural violations; they do not depose committee chairs or free bills.', 'A point of order does not release legislation.'],
    ],
    lesson: 'Discharge petitions are rare but powerful: they let a majority bypass leadership and committee gatekeepers. They require open signatures from 218 members, which raises the political cost of signing.',
  },
  {
    id: 4360306,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Committee of the Whole',
    prompt: 'The House resolves itself into the Committee of the Whole to consider an appropriations bill. Which practical effect does this procedure produce?',
    correct: 'A lower quorum (100 members) and faster amendment procedures than the full House',
    wrong: [
      ['A binding vote that cannot be revisited on the House floor', 'The Committee of the Whole reports recommendations; final passage votes occur in the full House.', 'It recommends; the House finally votes.'],
      ['Joint consideration with the Senate sitting as one body', 'The two chambers do not meet jointly to legislate; Article I keeps them distinct.', 'It is a House device, not a joint session.'],
      ['Automatic referral of the bill to a conference committee', 'Conference is invoked only after the two chambers have passed different versions of a bill.', 'Conference comes later.'],
    ],
    lesson: 'The Committee of the Whole is a House parliamentary device for streamlining debate on appropriations and major bills. Lower quorum, five-minute amendment rule, and faster pace are its defining features.',
  },
  {
    id: 4360307,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Conference committees',
    prompt: 'The House and Senate pass different versions of a tax bill. Leadership appoints a small group of senior members from both chambers to negotiate a single text. The product of this process is:',
    correct: 'A conference report, which each chamber must adopt without further amendment before the bill can go to the president',
    wrong: [
      ['A discharge motion, which then frees the bill for further committee revision', 'Discharge motions move bills out of committee; they do not reconcile differing chamber texts.', 'Conference is reconciliation, not discharge.'],
      ['A pocket veto, which the president signs into law silently', 'Pocket vetoes are inaction by the president at adjournment; they are not legislative products.', 'A conference report is a congressional product, not a presidential one.'],
      ['A rule from the Rules Committee that automatically becomes law', 'House rules govern floor procedure; they do not enact legislation, and they have no Senate counterpart.', 'Rules govern process, not enactment.'],
    ],
    lesson: 'Conference committees produce a single reconciled text. Each chamber then takes an up-or-down vote on the conference report. In recent decades many bills bypass formal conference through informal "ping-pong" amendments between the chambers.',
  },
  {
    id: 4360308,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Filibuster scenario',
    prompt: 'A Senate bill has the support of 54 senators. The minority signals it will sustain extended debate. The bill is most likely to:',
    correct: 'Fail to advance unless six additional senators can be persuaded to vote for cloture',
    wrong: [
      ['Pass automatically because a majority of senators support it', 'Senate Rule XXII allows extended debate; a simple majority is not sufficient when cloture is contested.', 'Majority support is necessary but not sufficient.'],
      ['Move directly to the president once 51 senators agree', 'A bill needs to clear cloture (when invoked) before passage, and it must also pass the House.', 'There are two procedural steps still pending.'],
      ['Be referred to the Rules Committee for a debate rule', 'The Rules Committee is a House body, not a Senate one; the Senate has no equivalent committee setting floor rules.', 'Rules Committee is House, not Senate.'],
    ],
    lesson: 'The 60-vote cloture threshold is the operative ceiling on ordinary Senate legislation. Modern Senate scholarship sometimes refers to it as the "de facto supermajority" requirement.',
  },

  // -- Speaker of the House -----------------------------------------------
  {
    id: 4360309,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Speaker selection',
    prompt: 'How is the Speaker of the House selected?',
    correct: 'By a majority vote of the entire House at the start of each Congress, with nominees offered by each party caucus',
    wrong: [
      ['By the president, subject to advice and consent of the Senate', 'Article II appointments are executive offices; the Speaker is a legislative leader chosen by the House itself.', 'Article I, Section 2 vests this choice in the House.'],
      ['By seniority within the majority party caucus alone', 'Although the majority caucus nominates, the full House votes; in close Congresses the floor vote is consequential.', 'The full House votes.'],
      ['By the chief justice of the United States in a swearing-in ceremony', 'The chief justice swears in the president, not the Speaker; the Speaker is elected, not appointed.', 'Article I provides for House election.'],
    ],
    lesson: 'Article I, Section 2 says the House shall choose its Speaker. While the majority party caucus normally controls the outcome, recent Congresses have seen contested floor votes that took multiple ballots.',
  },
  {
    id: 4360310,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Speaker powers',
    prompt: 'Which power belongs to the Speaker of the House and not to the Senate Majority Leader?',
    correct: 'Referring bills to committees and influencing committee assignments through party machinery',
    wrong: [
      ['Recognizing senators to speak on the Senate floor', 'Senate floor recognition is a Majority Leader prerogative, not a Speaker function; the Speaker presides in the House.', 'Senate floor recognition is Senate-side.'],
      ['Casting a tie-breaking vote in the Senate', 'The vice president casts tie-breaking votes in the Senate under Article I, Section 3.', 'Tie-breaking is the vice president\'s role.'],
      ['Negotiating treaties on behalf of the United States', 'Treaty negotiation is an executive function under Article II.', 'Article II vests treaty power in the president.'],
    ],
    lesson: 'The Speaker controls bill referral, committee composition through the party Steering Committee, the Rules Committee majority, and floor scheduling. These tools have no full equivalent in the Senate, where unanimous consent and member-level prerogatives blunt centralized authority.',
  },
  {
    id: 4360311,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Speaker vs Majority Leader',
    prompt: 'A House bill and a similar Senate bill are stalled. The Speaker can compel floor action on the House bill; the Senate Majority Leader cannot compel comparable action on the Senate bill. The best institutional explanation is that:',
    correct: 'The Senate operates by unanimous consent and supermajority debate rules that limit centralized scheduling power',
    wrong: [
      ['The Speaker is appointed by the president and the Majority Leader is not', 'Neither leader is appointed by the president; both are chosen within their chambers.', 'Both are chosen by their own chambers.'],
      ['The Speaker has constitutional veto power that the Majority Leader lacks', 'Neither leader has a veto power; the veto belongs to the president.', 'Veto power is in Article I, Section 7 and belongs to the executive.'],
      ['The Senate Majority Leader needs House permission to schedule debate', 'The two chambers are independent; one does not authorize the other\'s scheduling.', 'Article I, Section 5 lets each chamber set its own rules.'],
    ],
    lesson: 'The Speaker exercises far more centralized scheduling power than the Senate Majority Leader. The procedural asymmetry reflects each chamber\'s rules, not constitutional design.',
  },

  // -- Committees ---------------------------------------------------------
  {
    id: 4360312,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Standing committees',
    prompt: 'Which best describes a standing committee?',
    correct: 'A permanent committee with subject-matter jurisdiction that handles most bills referred during a Congress',
    wrong: [
      ['A temporary panel created to investigate a specific issue', 'That description fits a select committee, not a standing committee.', 'Permanent vs. temporary is the distinction.'],
      ['A joint House-Senate body that issues binding regulations', 'Joint committees include members from both chambers, but they do not issue regulations; rulemaking is an executive function.', 'Committees legislate; agencies regulate.'],
      ['A panel made up only of party leaders that schedules the floor', 'Leadership groups schedule the floor; standing committees are workhorses of bill referral and markup.', 'Leadership is not the same as a committee.'],
    ],
    lesson: 'Standing committees are the permanent legislative backbone of each chamber. Bills are referred to them by subject, and most legislation lives or dies in committee.',
  },
  {
    id: 4360313,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Select committees',
    prompt: 'A select committee differs from a standing committee most clearly in that select committees:',
    correct: 'Are typically temporary and convened for a specific investigation or topic without permanent jurisdiction',
    wrong: [
      ['Always include members from both the House and the Senate', 'That feature describes a joint committee; select committees can be one-chamber.', 'Joint and select are not synonyms.'],
      ['Always have the power to send bills directly to the president', 'No committee sends a bill to the president; both chambers must pass identical text first.', 'Bills go to the president only after both chambers act.'],
      ['Are elected separately by the public outside of regular elections', 'No congressional committee is elected by the public; members are chosen within the chambers.', 'Committees are internal.'],
    ],
    lesson: 'Select committees focus on a specific question (often investigations) and dissolve when their mandate ends. Their reports usually inform later standing-committee or floor action.',
  },
  {
    id: 4360314,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Joint committees',
    prompt: 'Which is the most accurate description of a joint committee?',
    correct: 'A committee composed of members from both chambers, often used for housekeeping or studies rather than reporting legislation',
    wrong: [
      ['A committee that conferences the differences between two versions of a single bill', 'That role belongs to a conference committee, which is a distinct (though related) institution.', 'Conference committees reconcile texts.'],
      ['A committee created by the president to advise the White House', 'Presidential advisory groups are executive bodies; joint committees are congressional.', 'Congressional, not executive.'],
      ['A committee made up of one senator and the chief justice', 'No such body exists; committees are composed of members of Congress.', 'Committees are legislative.'],
    ],
    lesson: 'Joint committees draw members from both chambers but rarely originate legislation. The Joint Committee on Taxation, for example, supports tax-writing committees with technical analysis.',
  },
  {
    id: 4360315,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Conference committees revisited',
    prompt: 'Which scenario most clearly requires a conference committee?',
    correct: 'The House and Senate each pass versions of an infrastructure bill with significant differences in text',
    wrong: [
      ['One chamber passes a bill and the other has not yet considered it', 'Conference is invoked only after both chambers act; pending action in one chamber is not yet ripe for conference.', 'Both chambers must have passed something.'],
      ['The president vetoes a bill and both chambers want to override', 'Veto override is an up-or-down floor process; it does not require conference.', 'Override is a floor vote, not a conference.'],
      ['A subcommittee disagrees with its parent standing committee', 'Internal committee disputes are resolved within the committee or by the parent committee chair; conference is between chambers, not within one.', 'Conference is between chambers, not within them.'],
    ],
    lesson: 'Conference committees exist to reconcile inter-chamber differences. They are appointed by leadership, draft a single text, and return it to both chambers for a final up-or-down vote.',
  },
  {
    id: 4360316,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Markup process',
    prompt: 'During a committee markup, members:',
    correct: 'Amend the bill\'s text section by section and vote on whether to report it favorably to the floor',
    wrong: [
      ['Hear constituent testimony for the first time on the bill', 'Constituent testimony is usually heard during hearings, not markup; markup focuses on text revision and reporting.', 'Hearings precede markup in most committees.'],
      ['Cast the final vote on whether the bill becomes law', 'A committee vote reports a bill to the floor; final passage requires a full chamber vote.', 'Committees recommend; chambers enact.'],
      ['Negotiate the final text with the president before introduction', 'Bills must be introduced before markup, and negotiation with the president generally happens later, not in committee markup.', 'Sequence matters: introduction, hearings, markup.'],
    ],
    lesson: 'Markup is where committees rewrite a bill section by section. The reported text reflects the committee\'s preferences and is what the floor takes up unless leadership intervenes through the Rules Committee or a manager\'s amendment.',
  },
  {
    id: 4360317,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Committee gatekeeping',
    prompt: 'A bill is introduced and referred to committee, where it never receives a hearing. By the end of the Congress, the bill dies. This outcome reflects:',
    correct: 'The committee\'s gatekeeping role; bills not reported out typically die without floor action',
    wrong: [
      ['A pocket veto exercised by the committee chair', 'Pocket vetoes are presidential, not committee actions; the analogous committee tool is non-action.', 'Committees do not veto in the formal sense.'],
      ['Automatic referral to a conference committee at the end of the Congress', 'Conference is invoked only when both chambers have passed differing versions of the same bill.', 'Conference requires inter-chamber differences.'],
      ['A constitutional time-bar that forces all uncalled bills to expire', 'Bills die at the end of a Congress under congressional practice, not under a specific constitutional clock.', 'The death is by practice, not constitutional timer.'],
    ],
    lesson: 'Committees decide which bills get hearings, markup, and a favorable report. A committee\'s refusal to act is often a quiet but decisive form of legislative outcome.',
  },

  // -- Required cases -----------------------------------------------------
  {
    id: 4360318,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Baker v Carr justiciability',
    prompt: 'Before Baker v. Carr, federal courts treated reapportionment disputes as nonjusticiable "political questions." Baker changed this by holding that:',
    correct: 'Federal courts may adjudicate claims that legislative apportionment violates the Equal Protection Clause',
    wrong: [
      ['Reapportionment is a question solely for Congress to resolve', 'Baker rejected the prior political question barrier and made these claims justiciable in federal court.', 'Baker opens the courthouse door.'],
      ['State courts have exclusive authority over all districting disputes', 'Baker established federal jurisdiction under Equal Protection; it did not assign exclusivity to state courts.', 'Federal courts now adjudicate.'],
      ['The Senate has the sole power to certify state legislative maps', 'No such Senate power exists; Article I gives Congress oversight of federal elections but no certification of state legislative maps.', 'Senate has no such role.'],
    ],
    lesson: 'Baker v. Carr is the justiciability gateway. It is the doctrinal predicate for Reynolds v. Sims (one-person, one-vote) and for Shaw v. Reno (racial gerrymandering review).',
  },
  {
    id: 4360319,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Shaw v Reno standard',
    prompt: 'Shaw v. Reno held that a districting plan in which race is the predominant factor must:',
    correct: 'Satisfy strict scrutiny under the Equal Protection Clause',
    wrong: [
      ['Be approved by a unanimous Senate vote', 'Senate approval has no role in state districting; the constitutional standard is judicial review.', 'Districting is a judicial question, not a Senate one.'],
      ['Be presumed valid because the Voting Rights Act protects all majority-minority districts', 'The Voting Rights Act protects against vote dilution, but Shaw holds that race cannot be the predominant factor unless it satisfies strict scrutiny.', 'The VRA does not exempt districts from Equal Protection.'],
      ['Be reviewed only for partisan effect, not racial classification', 'Shaw is specifically about racial classification; partisan-effect challenges follow a different (and now mostly nonjusticiable) doctrinal line.', 'Shaw is race, not partisanship.'],
    ],
    lesson: 'Shaw v. Reno applies strict scrutiny to race-predominant districts. The state must show a compelling interest and that the plan is narrowly tailored, the demanding standard the Court reserves for racial classifications.',
  },
  {
    id: 4360320,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Rucho partisan gerrymandering',
    prompt: 'Voters challenge a state\'s congressional map as an extreme partisan gerrymander designed to entrench one party. Under Rucho v. Common Cause, the federal court will most likely:',
    correct: 'Decline to adjudicate on the merits because partisan gerrymandering claims are nonjusticiable political questions',
    wrong: [
      ['Apply Shaw v. Reno\'s strict scrutiny because partisan and racial gerrymanders are constitutionally identical', 'Shaw addresses race; Rucho specifically refused to extend judicial review to purely partisan claims.', 'Partisan and racial are treated differently.'],
      ['Order new districts based on Baker v. Carr alone', 'Baker established justiciability for malapportionment; Rucho took partisan claims off the federal docket.', 'Rucho narrows what Baker opened.'],
      ['Refer the case to the Senate for resolution', 'The Senate plays no adjudicative role in state districting; that is a judicial question.', 'Senate is not a court.'],
    ],
    lesson: 'Rucho v. Common Cause (2019) held federal courts could not police partisan gerrymandering. State constitutions and independent commissions remain available avenues, but federal Equal Protection review of partisan-only claims is foreclosed.',
  },
  {
    id: 4360321,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Baker vs Shaw vs Rucho',
    prompt: 'A plaintiff alleges a state legislative map (i) is malapportioned in population, (ii) sorts voters predominantly by race, and (iii) is drawn to entrench one party. Which precedent governs which claim?',
    correct: 'Baker for justiciability and malapportionment, Shaw for the racial classification, Rucho for the partisan claim being nonjusticiable',
    wrong: [
      ['Shaw governs all three because it consolidated districting law', 'Shaw addresses only racial classifications; population and partisan claims are governed by separate precedents.', 'Each precedent has a distinct role.'],
      ['Rucho governs all three because partisan motive underlies every map', 'Rucho is the partisan-only line; it does not displace Equal Protection review of racial or population claims.', 'Rucho is partisan-specific.'],
      ['Baker governs all three because it predates the others', 'Earlier in time does not mean broader in scope; Shaw and Rucho carve out distinct doctrinal terrain.', 'Sequence is not the same as scope.'],
    ],
    lesson: 'AP redistricting items often combine claims. Match each claim to its precedent: Baker (justiciability and malapportionment), Shaw (racial classification), Rucho (partisan claim nonjusticiable in federal court).',
  },

  // -- Required documents -------------------------------------------------
  {
    id: 4360322,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Federalist 51 bicameralism',
    prompt: 'Federalist 51 contributes to Chapter 3 analysis primarily because it explains that:',
    correct: 'Dividing the legislature into two chambers checks legislative power that might otherwise dominate the other branches',
    wrong: [
      ['Bicameralism is required to ensure direct election of all senators', 'Direct election of senators came with the Seventeenth Amendment, long after Federalist 51.', 'Federalist 51 predates direct election by more than a century.'],
      ['A unicameral national legislature would best protect minority rights', 'Madison argues the opposite: bicameralism is one safeguard among several against concentrated legislative power.', 'Madison favors division, not consolidation.'],
      ['The Speaker should be appointed by the executive to balance the branches', 'Federalist 51 defends each branch\'s independent selection, not executive appointment of legislative officers.', 'Branches are independent in selection.'],
    ],
    lesson: 'Federalist 51 frames bicameralism as a structural check inside the legislative branch. Madison treats the Senate and House as different institutions precisely so neither can act alone.',
  },
  {
    id: 4360323,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Federalist 10 and Senate size',
    prompt: 'How does Federalist 10\'s argument about the size of the republic connect to the Senate as designed in 1787?',
    correct: 'A larger republic and a smaller, more deliberative upper chamber were meant to filter factional passions through representation',
    wrong: [
      ['Madison argued the Senate should be elected directly to maximize factional energy', 'Madison defended the smaller, indirectly elected Senate as a brake on factional passion, not as an accelerator.', 'Federalist 10 is anti-faction, not pro-faction.'],
      ['Madison argued the Senate should have equal representation to dissolve all state distinctions', 'The Connecticut Compromise gave each state equal Senate representation precisely to preserve state distinctions, not erase them.', 'Equal representation preserved states.'],
      ['Madison rejected representation entirely in favor of direct democracy', 'Federalist 10 endorses representation as a refining filter; it does not endorse direct democracy.', 'Representation is the mechanism.'],
    ],
    lesson: 'Federalist 10 and the original Senate go together: representation, indirect selection in 1787, and a smaller body were all meant to refine and enlarge public views, exactly Madison\'s recipe for managing faction.',
  },
  {
    id: 4360324,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Federalist 51 stimulus',
    prompt: 'Madison writes in Federalist 51: "In republican government, the legislative authority necessarily predominates. The remedy for this inconveniency is to divide the legislature into different branches; and to render them, by different modes of election and different principles of action, as little connected with each other as the nature of their common functions and their common dependence on the society will admit." Which institutional design does this passage most directly support?',
    correct: 'Bicameralism with the House and Senate selected and structured differently to check each other',
    wrong: [
      ['A unitary executive with sole control over national lawmaking', 'The passage is about legislative design; Federalist 70, not 51, defends executive unity.', 'Read the passage: it is about the legislature.'],
      ['Judicial supremacy over both legislative chambers', 'Federalist 51 does not address judicial supremacy; it focuses on inter-branch and intra-branch checks.', 'Look for legislative-internal checks.'],
      ['Direct election of senators with two-year terms', 'Direct election came in 1913; six-year staggered terms are part of the original Senate design, not the position 51 critiques.', 'Match the passage to bicameral design.'],
    ],
    lesson: 'Stimulus items reward close reading: Madison\'s "different modes of election and different principles of action" is a precise description of bicameralism, the House and Senate originally being structured to act differently.',
  },

  // -- Models of representation ------------------------------------------
  {
    id: 4360325,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Delegate model',
    prompt: 'A House member polls her district and votes consistently with majority opinion at home, even on issues where she personally disagrees. She is most clearly using the:',
    correct: 'Delegate model, voting as her constituents instruct',
    wrong: [
      ['Trustee model, voting on her own judgment of the public interest', 'A trustee would override constituent preference when she disagreed; she does not.', 'Trustee votes are about independent judgment.'],
      ['Politico model, alternating models without a discernible pattern', 'Politico requires a pattern of switching based on issue salience; consistent constituent-following is delegate.', 'Politico is the mixed strategy.'],
      ['Partisan model, voting in line with party leadership', 'Voting with constituents is not the same as voting with party leadership; the two often diverge.', 'Constituents and party are different masters.'],
    ],
    lesson: 'The delegate model treats representatives as instructed messengers of constituent preference. Edmund Burke critiqued it; modern political science still treats it as a baseline against which trustee and politico behavior are measured.',
  },
  {
    id: 4360326,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Trustee model',
    prompt: 'A senator votes against a popular state-level demand to ban a pharmaceutical she believes is safe based on FDA analysis. Her behavior best illustrates the:',
    correct: 'Trustee model, in which the representative exercises independent judgment on behalf of long-run constituent interest',
    wrong: [
      ['Delegate model, in which the representative follows current constituent preferences', 'A delegate would defer to the popular demand; she does not.', 'Trustee overrides; delegate follows.'],
      ['Descriptive representation, in which legislators mirror constituent demographics', 'Descriptive representation concerns identity, not voting basis on a particular bill.', 'Demographics are not at issue here.'],
      ['Substantive representation, in which a representative explicitly disclaims expertise', 'Substantive representation means advocating constituent interests; the senator here invokes expertise rather than disclaiming it.', 'Substantive representation is about outcomes, not disclaimers.'],
    ],
    lesson: 'Trustees claim Burkean license to use their own judgment. AP items often stage the trustee vote as a defection from current constituent preference rooted in technical or moral reasoning.',
  },
  {
    id: 4360327,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Politico model',
    prompt: 'A House member acts as a trustee on technical regulatory matters her constituents do not follow but as a delegate on highly salient social issues. Her behavior best illustrates the:',
    correct: 'Politico model, which combines delegate and trustee depending on issue salience',
    wrong: [
      ['Pure delegate model on all issues regardless of salience', 'A pure delegate would follow constituents on regulatory issues too; she does not.', 'She switches modes by issue.'],
      ['Pure trustee model on all issues regardless of salience', 'A pure trustee would override constituents on social issues too; she does not.', 'She switches modes by issue.'],
      ['Descriptive representation across all issue types', 'Descriptive representation is about identity match, not strategy across issues.', 'Identity vs strategy.'],
    ],
    lesson: 'The politico model is the realistic middle. It reflects how working representatives manage attention, accountability, and expertise: they follow constituents where constituents follow them and lead where constituents do not.',
  },
  {
    id: 4360328,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Partisan voting',
    prompt: 'In modern Congresses, party unity scores on roll-call votes routinely exceed 90 percent. Which model of representation does this empirical pattern most clearly track?',
    correct: 'The partisan model, in which legislators vote primarily with their party caucus',
    wrong: [
      ['The pure delegate model, in which legislators follow constituent polls regardless of party', 'Pure delegate behavior would produce more cross-party variation reflecting district preference; high party-unity scores point to party, not poll.', 'Polls and party are not the same.'],
      ['The pure trustee model, in which legislators vote on independent judgment', 'Pure trustee behavior would also produce variation; consistent party-line voting is not best explained by independent judgment alone.', 'Trustees would not cluster by party.'],
      ['Descriptive representation, in which legislators mirror constituents demographically', 'Descriptive representation is about who legislators are, not how they vote in patterns.', 'Demographics do not explain roll-call patterns alone.'],
    ],
    lesson: 'High party-unity voting in modern Congresses suggests that the partisan model has substantial explanatory power, especially on procedural votes and signature legislation.',
  },

  // -- Lawmaking process --------------------------------------------------
  {
    id: 4360329,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Lawmaking sequence',
    prompt: 'A bill is introduced in the House. Which sequence reflects the normal lawmaking process to enactment?',
    correct: 'Committee referral and markup, House floor vote, Senate referral and markup, Senate floor vote, conference if needed, president\'s signature or veto',
    wrong: [
      ['House floor vote, presidential signature, Senate ratification, Supreme Court approval', 'Presidential signature comes after both chambers act; the Supreme Court has no enactment role.', 'Both chambers must pass before the president acts.'],
      ['Presidential proposal, Senate ratification by two-thirds, House confirmation', 'Two-thirds ratification is for treaties; statutes pass by simple majority of each chamber.', 'Treaties and statutes are different processes.'],
      ['Direct popular referendum followed by Supreme Court certification', 'The United States has no national referendum process for federal statutes; bills move through Congress.', 'No federal referendum exists for statutes.'],
    ],
    lesson: 'The textbook lawmaking arc is bicameral and committee-driven. Most bills never get past committee; those that do still face floor consideration, the other chamber, possible conference, and presidential action.',
  },
  {
    id: 4360330,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Veto override',
    prompt: 'The president vetoes a bill that passed both chambers by simple majorities. To override the veto, each chamber must:',
    correct: 'Pass the bill again by a two-thirds vote',
    wrong: [
      ['Pass the bill again by a simple majority', 'Simple majority is the original passage threshold; override requires two-thirds in each chamber.', 'Article I, Section 7 sets the override at two-thirds.'],
      ['Refer the bill to the Supreme Court for reconsideration', 'The Court does not reconsider vetoed legislation; Article I assigns the override to Congress.', 'Override is a congressional power.'],
      ['Wait for the next Congress and reintroduce the bill', 'A new Congress can reintroduce, but that is not an override; an override happens in the same Congress at two-thirds.', 'Override and reintroduction are different.'],
    ],
    lesson: 'The two-thirds override is one of the few supermajority thresholds in Article I. Vetoed bills can return to the same Congress for override; new Congresses begin the legislative process fresh.',
  },
  {
    id: 4360331,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Pocket veto',
    prompt: 'Which scenario produces a pocket veto?',
    correct: 'Congress passes a bill, adjourns within ten days, and the president neither signs nor returns it',
    wrong: [
      ['The president signs the bill and Congress then withdraws it', 'Signed bills become law; Congress cannot withdraw enacted legislation.', 'Once signed, the bill is law.'],
      ['Both chambers pass a bill by two-thirds despite a veto threat', 'That is a veto override, not a pocket veto.', 'Override and pocket veto are opposites.'],
      ['The Supreme Court strikes down a bill before signature', 'Courts do not preemptively strike down unsigned bills; the case must arise as concrete controversy after enactment.', 'Courts review after enactment.'],
    ],
    lesson: 'A pocket veto kills a bill at adjournment by presidential inaction. Because Congress is not in session to receive the bill back, the ten-day window closes and the bill dies without an override option.',
  },

  // -- Oversight ----------------------------------------------------------
  {
    id: 4360332,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Legislative vs investigative hearings',
    prompt: 'Which best distinguishes a legislative hearing from an investigative hearing?',
    correct: 'Legislative hearings inform the drafting of a specific bill, while investigative hearings examine implementation, scandal, or wrongdoing',
    wrong: [
      ['Legislative hearings are televised and investigative hearings are always closed', 'Both can be open or closed depending on subject matter and chamber rules.', 'Openness is not the distinguishing feature.'],
      ['Legislative hearings have subpoena power and investigative hearings do not', 'Both can issue subpoenas under their committee\'s authority.', 'Subpoena power is shared.'],
      ['Investigative hearings can only target private parties, never executive officials', 'Investigative hearings frequently target executive officials, which is core to oversight.', 'Executive officials are common witnesses.'],
    ],
    lesson: 'Legislative hearings gather information for lawmaking. Investigative hearings exercise the implied oversight power, examining how laws are administered or whether misconduct has occurred.',
  },
  {
    id: 4360333,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Subpoena power',
    prompt: 'A congressional committee subpoenas a private contractor that received federal funds. The contractor refuses to appear. The most accurate constitutional analysis is:',
    correct: 'Congress\'s subpoena power is implied from its lawmaking and oversight authority and is subject to judicial enforcement',
    wrong: [
      ['Subpoenas are valid only if the president personally signs them', 'Subpoenas are issued by committees, not the president; they are a legislative tool.', 'Legislative, not executive.'],
      ['Subpoenas are unlimited and can compel any disclosure including national-security secrets', 'Subpoenas are subject to constitutional limits, executive privilege claims, and judicial review.', 'There are limits.'],
      ['Subpoenas require unanimous consent of all 535 members of Congress', 'Subpoenas are committee actions; chamber-wide unanimity is not required.', 'Committees act on their own authority.'],
    ],
    lesson: 'Subpoena power is implied from Article I and confirmed by long practice and Supreme Court precedent. It is also limited: privilege claims, judicial review, and political costs all constrain its exercise.',
  },
  {
    id: 4360334,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Advice and consent',
    prompt: 'Under Article II, the Senate\'s advice and consent role applies to:',
    correct: 'Treaties (by two-thirds vote) and principal executive and judicial appointments (by simple majority)',
    wrong: [
      ['All executive orders before they take effect', 'Executive orders are not subject to Senate approval; they rest on constitutional or statutory authority.', 'Orders are not nominations.'],
      ['The House Speaker before she may assume office', 'The Speaker is chosen by the House under Article I; the Senate has no role.', 'Each chamber chooses its own officers.'],
      ['All Supreme Court opinions before they become precedent', 'The Senate does not review Court opinions; that would breach separation of powers.', 'Courts decide; Senate does not review opinions.'],
    ],
    lesson: 'Advice and consent applies to treaties (two-thirds) and to many appointments (simple majority, after rules changes in 2013 and 2017 for executive-branch and judicial nominees). It is the Senate\'s primary check on Article II personnel and treaty powers.',
  },
  {
    id: 4360335,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Impeachment division of labor',
    prompt: 'Which statement most accurately describes the impeachment process under Article I?',
    correct: 'The House impeaches by simple majority; the Senate tries the impeachment and convicts by two-thirds',
    wrong: [
      ['The Senate impeaches and the House tries the impeachment', 'The roles are reversed; the House impeaches, the Senate tries.', 'House first, Senate second.'],
      ['Both chambers must impeach by two-thirds for the official to be removed', 'The House threshold is simple majority; conviction is two-thirds in the Senate.', 'Two-thirds is a Senate-only threshold.'],
      ['The Supreme Court conducts the impeachment trial in all cases', 'The chief justice presides only when a president is tried; the Senate is the trier of fact.', 'Senate is the trier; the chief justice presides for the president only.'],
    ],
    lesson: 'Impeachment is bicameral: House charges, Senate tries. The two thresholds (majority to charge, two-thirds to convict) reflect a deliberate asymmetry that makes removal hard.',
  },
  {
    id: 4360336,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'War Powers Resolution',
    prompt: 'The War Powers Resolution of 1973 requires the president to:',
    correct: 'Notify Congress within 48 hours of introducing armed forces into hostilities and withdraw within 60-90 days absent congressional authorization',
    wrong: [
      ['Obtain a formal declaration of war before any deployment of troops', 'Modern deployments rarely involve formal declarations of war; the resolution sets notification and time-limit rules instead.', 'It is not a declaration-of-war requirement.'],
      ['Receive Supreme Court approval before deploying troops abroad', 'Courts do not pre-approve military deployments; the resolution allocates between the political branches.', 'Courts are not the gatekeepers.'],
      ['Defer entirely to the secretary of defense on deployment timing', 'The secretary of defense is an executive officer; the resolution constrains the executive branch, not transfers power within it.', 'It addresses Congress vs the president.'],
    ],
    lesson: 'The War Powers Resolution is Congress\'s post-Vietnam attempt to reassert authority over the use of force. Presidents from both parties have argued it is unconstitutional and have often complied while denying it binds them.',
  },

  // -- Power of the purse -------------------------------------------------
  {
    id: 4360337,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Authorization vs appropriation',
    prompt: 'Which best distinguishes authorization legislation from appropriations legislation?',
    correct: 'Authorization establishes or continues a program and sets policy; appropriation actually provides the funding for that program to spend',
    wrong: [
      ['They are synonyms used by different committees', 'They are distinct categories handled by different committees (authorizing committees vs Appropriations); programs are sometimes authorized but not funded.', 'They are not synonyms.'],
      ['Authorization is a Senate function and appropriation is a House function', 'Both chambers participate in both, although the Constitution requires revenue bills to originate in the House.', 'Both chambers do both.'],
      ['Authorization requires presidential signature and appropriation does not', 'Both require enactment by both chambers and presidential action.', 'Both go to the president.'],
    ],
    lesson: 'Authorization sets policy; appropriation provides money. A program can be authorized but unfunded, and an appropriation can sometimes be made without underlying authorization, though both committees prefer the regular sequence.',
  },
  {
    id: 4360338,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Continuing resolutions',
    prompt: 'Congress passes a continuing resolution because the fiscal year is ending and full appropriations bills are not finished. The most accurate description is that a CR:',
    correct: 'Extends current funding levels temporarily so agencies can keep operating while negotiations continue',
    wrong: [
      ['Permanently locks in spending levels for the next decade', 'CRs are temporary, often weeks or months; long-term budgeting requires regular or omnibus appropriations.', 'CRs are bridges, not permanent budgets.'],
      ['Replaces appropriations bills with executive-branch budget directives', 'CRs are still acts of Congress passed under Article I, not executive directives.', 'Congress passes CRs.'],
      ['Authorizes the Treasury to print currency outside of statutory limits', 'Currency policy is not what CRs do; CRs concern appropriations.', 'CRs are spending bridges.'],
    ],
    lesson: 'Continuing resolutions are the bridge funding instrument Congress uses when full appropriations stall. They have become routine in modern budgeting, frustrating budget-discipline reformers in both parties.',
  },
  {
    id: 4360339,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Debt ceiling',
    prompt: 'The debt ceiling is best described as:',
    correct: 'A statutory cap on how much the federal government may borrow to pay obligations Congress has already authorized',
    wrong: [
      ['A constitutional limit on annual federal spending', 'The Constitution does not set a spending or borrowing cap; the debt ceiling is a statute.', 'It is statutory, not constitutional.'],
      ['A cap on how much state governments may borrow', 'States have their own debt rules; the federal debt ceiling applies to the federal government.', 'It is federal-only.'],
      ['A limit on the size of any single appropriations bill', 'The ceiling concerns total borrowing, not the size of any particular bill.', 'Total debt, not single-bill size.'],
    ],
    lesson: 'The debt ceiling restricts borrowing, not spending. Because Congress has already authorized the spending and revenue that produce the deficit, refusing to raise the ceiling threatens default rather than restraining future commitments.',
  },
  {
    id: 4360340,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Omnibus bills',
    prompt: 'Why has Congress increasingly relied on omnibus appropriations bills?',
    correct: 'They package many appropriations into a single must-pass vehicle, making it harder to block any one item and easier to clear deadlines',
    wrong: [
      ['Omnibus bills are required under the Constitution for any spending over one billion dollars', 'No such constitutional rule exists; omnibus packaging is a procedural choice, not a requirement.', 'Procedure, not constitutional rule.'],
      ['Omnibus bills exempt the legislation from presidential review', 'Every bill, including omnibus, goes to the president for signature or veto.', 'Article I, Section 7 applies to all bills.'],
      ['Omnibus bills must originate in the Senate under the Revenue Clause', 'Revenue bills must originate in the House; omnibus appropriations bundle many measures and follow the same process.', 'Revenue origination is House-side.'],
    ],
    lesson: 'Omnibus appropriations have become common because regular order rarely produces 12 separate bills on time. They concentrate negotiation pressure and limit member ability to remove specific provisions before final passage.',
  },

  // -- Pork barrel, logrolling, earmarks ----------------------------------
  {
    id: 4360341,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Logrolling and earmarks',
    prompt: 'Two senators trade votes: each supports the other\'s favored district-level project in exchange for a reciprocal vote. This practice is:',
    correct: 'Logrolling, a classic legislative bargain that often produces pork-barrel spending',
    wrong: [
      ['A discharge petition, since both senators want to free a bill', 'Discharge petitions are a House mechanism for freeing bills from committee; vote-trading is logrolling.', 'Discharge moves bills out of committee.'],
      ['Cloture, since both want to end debate on the bill', 'Cloture ends debate; vote-trading is about whipping support, not ending debate.', 'Cloture is procedural; logrolling is substantive.'],
      ['An impeachment, since both members vote on the same measure', 'Impeachment is a constitutional process; vote-trading on district projects is everyday bargaining.', 'Wholly different process.'],
    ],
    lesson: 'Logrolling and earmarks were curtailed by a 2011 moratorium and partially restored under new transparency rules a decade later. They illustrate the tension between localism and broader budget discipline.',
  },

  // -- Incumbency advantage ----------------------------------------------
  {
    id: 4360342,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Incumbency advantage',
    prompt: 'House incumbents win reelection at rates routinely above 90 percent. Which factor best explains this pattern?',
    correct: 'A combination of name recognition, casework, franking, fundraising advantages, and favorable district boundaries',
    wrong: [
      ['Incumbents are appointed automatically until they retire', 'Incumbents must run for reelection; they are not appointed.', 'They face elections.'],
      ['Federal law bars challengers from raising any campaign funds', 'Challengers may raise funds; the asymmetry comes from incumbent resource advantages, not a legal bar on challengers.', 'No such bar exists.'],
      ['The Supreme Court certifies all incumbent reelections without a vote', 'No such certification process exists; voters elect House members.', 'Voters elect; courts do not certify.'],
    ],
    lesson: 'Incumbency advantage is multi-causal: name recognition, district service (casework), the franking privilege, fundraising scale, and often favorable redistricting all compound. AP items reward recognizing the bundle rather than picking a single cause.',
  },

  // -- Districting and Senate features (final) ---------------------------
  {
    id: 4360343,
    chapter: 'Chapter 3: Congress and Representation',
    title: 'Senate features and 17th Amendment',
    prompt: 'Which combination of features describes the Senate as it operates today?',
    correct: 'Two senators per state, six-year staggered terms, direct election under the Seventeenth Amendment, and advice-and-consent powers on treaties and appointments',
    wrong: [
      ['One senator per state, two-year terms, elected by state legislatures, with no role in appointments', 'Each state has two senators with six-year terms; senators have been directly elected since 1913 and play a central role in confirmations.', 'Check the term length and selection method.'],
      ['Three senators per state, four-year terms, chosen by the governor', 'No state has three senators; governors fill some vacancies under state law but do not select senators in regular elections.', 'Two per state, not three.'],
      ['Apportioned by state population, with two-year terms, and limited to revenue bills', 'Population-based apportionment and revenue origination are House features; the Senate is two per state and has broader jurisdiction than revenue bills.', 'Population apportionment is House-side.'],
    ],
    lesson: 'The Senate is two per state (Article I, Section 3), six-year staggered terms, direct election (Seventeenth Amendment, 1913), and advice and consent (Article II, Section 2). The House caps at 435 under the Apportionment Act of 1929, with two-year terms and revenue origination under Article I, Section 7.',
  },
])
