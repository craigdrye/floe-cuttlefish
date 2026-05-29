import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CHAPTER 5 — Execution, Comments, and Quality Control
// ----------------------------------------------------------------------------
// 42 questions (IDs 4351400–4351441) extending the existing 8-question Ch5
// bank in careerAgentGeneratedRoadmapFinance.ts (4103015, 4105074, 4107320,
// 4107794, 4107793, 4107799, 4340030, 4340031). The existing 8 cover the
// basics — version-control conflict, footnote mismatch, Q&A log, currency,
// formula break, distribution list, tie-out, management presentation prep.
//
// These 42 push deeper into the lived analyst experience: model audit
// hygiene, comments turnaround mechanics, client-management escalation
// paths, staffing and weekend culture, year-end review components, the
// "binder" mindset, pitchbook craftsmanship, output ownership across the
// analyst/associate/VP stack, and the structural rules around what an
// analyst can and cannot send to a client without senior sign-off.
//
// Voice anchored on jargonBusters.ts IB section and the existing Ch5 set.
// Every wrong-answer rationale is bespoke; no boilerplate distractors.
// US context throughout (bulge-bracket and EB norms — pitchbooks, MDs,
// VP/associate/analyst stack, sell-side/buy-side conventions).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB Ch5 canonical bank'

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
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

const CHAPTER = 'Execution, Comments, and Quality Control'

// Difficulty distribution: 13 at 3, 21 at 4, 8 at 5.
export const IB_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Model audit and quality control (4351400–4351410)
  4351400: 3, // Cross-check sum-of-parts
  4351401: 4, // Cell-by-cell trace on a borrowed model
  4351402: 3, // Hard-code highlighting convention
  4351403: 3, // Color convention — blue inputs, black formulas
  4351404: 4, // Error checks at the top of every tab
  4351405: 4, // Footing tables and summing rows
  4351406: 4, // Balancing the balance sheet — where it usually breaks
  4351407: 5, // Catching a circular that "resolves" to the wrong number
  4351408: 4, // Sensitivity table sanity check
  4351409: 3, // Naming convention for inputs vs outputs
  4351410: 4, // Print preview as an audit tool

  // Version control and file discipline (4351411–4351416)
  4351411: 3, // v1 / v2 / draft / final naming discipline
  4351412: 4, // Who holds the live copy at any given moment
  4351413: 4, // Restoring from a working draft after a crash
  4351414: 3, // Saving over the wrong file
  4351415: 5, // Two people editing the same model on a Saturday
  4351416: 4, // The "final_final_v3_clean" anti-pattern

  // Comments turnaround mechanics (4351417–4351422)
  4351417: 3, // Printing the red-line markup
  4351418: 4, // "Answering all comments" before sending back up
  4351419: 4, // Tracking unresolved items across multiple turns
  4351420: 5, // Reading an MD comment vs an associate comment
  4351421: 4, // Stamping comments as resolved when they are not
  4351422: 3, // The comment turnaround clock

  // Client management at the analyst level (4351423–4351427)
  4351423: 4, // Never emailing the client directly as analyst
  4351424: 5, // Escalation path when the VP and associate are unreachable
  4351425: 4, // MD/VP relationship management — analyst's role
  4351426: 4, // What NOT to send to client without review
  4351427: 3, // CC discipline on external emails

  // Staffing and weekend culture (4351428–4351431)
  4351428: 4, // Live deal protection on weekends
  4351429: 3, // Dead-week expectations
  4351430: 4, // Saying no to a second staffing
  4351431: 4, // Protected Saturday policy and how it actually works

  // Reviews and feedback culture (4351432–4351436)
  4351432: 4, // Year-end review components
  4351433: 5, // Bottom-decile dynamics
  4351434: 4, // What gets you a top bucket
  4351435: 3, // Receiving feedback from a VP after a bad turn
  4351436: 4, // Giving feedback up — associate-to-analyst signaling

  // Pitchbook craftsmanship and output ownership (4351437–4351441)
  4351437: 5, // Font sizes, header conventions, page breaks
  4351438: 4, // Source line discipline
  4351439: 5, // Output ownership — analyst owns model, associate owns story, VP owns message
  4351440: 3, // Pre-meeting prep ritual — the binder
  4351441: 4, // Printing for in-person meetings
}

export const ibCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // MODEL AUDIT AND QUALITY CONTROL (4351400–4351410)
  // The discipline that keeps an analyst's model from blowing up in a live
  // call. Centered on the small, repeatable habits — cross-checks, color
  // conventions, error rows, foot-and-sum passes — that catch errors before
  // a VP does.
  // -------------------------------------------------------------------------
  q(4351400, 'Career Skills', CHAPTER, 'Cross-check sum-of-parts',
    'Your operating model has revenue built three different ways: a bottom-up segment build, a top-down growth rate applied to last year, and a customer-count × ARPU build. The three lines give $482M, $479M, and $487M for next year. The VP asks for "the number." What is the right next move?',
    'Use the bottom-up segment build as the primary line, place all three on the same cross-check row at the top of the revenue tab, and reconcile the $5M gap to specific drivers — the cross-check is the audit, not a number to average',
    [
      ['Average the three to get $482.7M and use that as the consensus revenue line', 'Averaging hides which method is right. The three methods are an audit tool — if they disagree by $5M, the question is *why*, not *what is the mean*. Reporting an average to the VP signals you did not investigate.'],
      ['Use the top-down growth rate because it is the cleanest and easiest to explain', 'Picking the easiest method to defend is backwards — you pick the most defensible method (usually bottom-up segment) and use the others as sanity checks. "Easy to explain" is a tell that the analyst is optimizing for the conversation, not the model.'],
      ['Pick whichever of the three is closest to consensus and use that one', 'Anchoring on sell-side consensus to choose between your own methodologies is the opposite of audit discipline — it lets the street decide your operating model. The three builds are supposed to triangulate the *operator* view, not match the street.'],
    ],
    'Sum-of-parts cross-checks are an audit habit, not an averaging mechanism. The three independent builds sit together on a cross-check row so any gap is investigated to a specific driver. The analyst who picks the average or the easiest line is the analyst who gets caught when a VP asks "where does the $5M difference live?".'),

  q(4351401, 'Career Skills', CHAPTER, 'Cell-by-cell trace on a borrowed model',
    'Your group reuses a model from a prior deal as the starting point for a new sell-side. The associate says "it should mostly work — just update the financials." Two days later the VP asks if you have audited it. What is the actual job?',
    'Cell-by-cell trace from inputs through every output — every link, every hardcode, every assumption row — flagging anything that points at the old deal\'s tabs, currency, or fiscal-year convention; an inherited model is a fresh model that pretends to be done',
    [
      ['Update the financials and run a quick sanity check on the EBITDA and free cash flow lines', 'Headline-line sanity is not an audit. The traps in an inherited model live in the middle — a tax rate hardcoded for the old jurisdiction, a working-capital assumption pointing at the prior company\'s DSO, a debt schedule still amortizing the old loan. None of those show up on EBITDA.'],
      ['Run the model on the new numbers and compare to the prior deal\'s output as a reasonableness check', 'Comparing to the prior output reasons from the wrong baseline — the prior output reflects the prior company. The new model has to stand on its own audit, not borrow credibility from the file it forked from.'],
      ['Ask the associate which sections they have already checked so you do not duplicate work', 'On a borrowed model the analyst is the last line of defense — the associate has not actually checked, that is why they handed it to you. "Did you check?" is what an analyst asks to absolve themselves; the answer is that *you* check.'],
    ],
    'An inherited model is the most dangerous starting point in banking. Every link, every hardcode, every assumption needs a fresh trace — the old deal\'s context is invisible to the next reader. The discipline: trace every input cell, flag every hardcode, verify every formula in the output tab against its source.'),

  q(4351402, 'Career Skills', CHAPTER, 'Hard-code highlighting convention',
    'You are auditing a model and you want to find every hardcoded number — assumptions sitting inside formulas rather than in the input row. What is the cleanest convention to surface them?',
    'Color every hardcoded number a single distinctive color (typically red or orange) so any reviewer can scan a tab and immediately see what is an assumption embedded in a formula versus what is a clean linked formula',
    [
      ['Add a comment to every cell that contains a hardcode so reviewers can hover and see the note', 'Excel comments are easy to miss on a scan. The whole point of a hardcode highlight is that a VP flipping through tabs at 11pm sees the red number without hovering. Comments are a fallback, not the system.'],
      ['Keep the hardcodes uncolored but list them in a separate sheet so they are tracked centrally', 'A central list separated from the cells is exactly what gets out of sync the moment the model evolves. The whole convention works because the color lives *on* the cell that has the hardcode — moving the cell moves the flag.'],
      ['Avoid hardcodes entirely so there is nothing to highlight', 'Some hardcodes are unavoidable — tax rates, interest spreads, deal-specific override assumptions. The convention exists because you cannot eliminate them; the discipline is making them visible so they can be reviewed.'],
    ],
    'Hardcode highlighting is the cheapest audit tool in modeling. One color, applied consistently, lets any reviewer see in seconds which numbers will not respond to driver changes — the exact cells that break a sensitivity table or a scenario flip if no one notices them.'),

  q(4351403, 'Career Skills', CHAPTER, 'Color convention — blue inputs, black formulas',
    'A senior associate joins a new team and finds the analyst is using all-black cells throughout the model. The associate asks for the convention to change. Which convention is the IB standard and why does it matter on a live deal?',
    'Blue for inputs and hardcodes, black for formulas, green for links to other workbooks — the standard exists so any reviewer can tell at a glance which cells they can change without breaking downstream math',
    [
      ['Black for everything since the formulas tell you what each cell does anyway', 'Reading every formula to figure out what kind of cell it is wastes the reviewer\'s time at exactly the moment they do not have any — usually 1am the night before a board meeting. The color convention exists so the model is auditable without opening each cell.'],
      ['Use whatever colors the analyst prefers as long as they are consistent within the model', 'Cross-deal consistency is the point. A new associate joining the deal at the comment stage should not have to learn a custom color system — they should be able to read the model the way they read every other model on the floor.'],
      ['Use red for formulas to emphasize where the calculations happen', 'Red is reserved for hardcodes-inside-formulas or error flags in the standard convention. Using it for formulas overloads the signal and means a reviewer cannot distinguish a calculation from a buried assumption.'],
    ],
    'The blue/black/green convention is the lingua franca of modeling in US banking. It exists so a VP or MD picking up an unfamiliar model can audit it without a conversation — blue is what you can change, black is what computes, green crosses workbook boundaries and needs extra care.'),

  q(4351404, 'Career Skills', CHAPTER, 'Error checks at the top of every tab',
    'Your associate asks you to add "error checks" to every tab of a leveraged-buyout model. What does that actually look like in practice and which check matters most?',
    'A small block at the top of each tab with named checks — balance sheet balances to zero, sources equal uses, cash flow ties to balance sheet cash delta, debt schedule beginning balance ties to prior period ending balance — each formatted to flash red if violated',
    [
      ['One overall "MODEL OK" cell on the summary tab that returns TRUE when no errors are present', 'A single rolled-up flag tells the reviewer that something is wrong, not where. The point of per-tab checks is locality — when the model breaks, the reviewer needs to know *which* check failed without auditing every tab.'],
      ['A note at the top of the model listing what the analyst checked manually before sending', 'A static "I checked X" note ages the moment the model is edited. Error checks are formulas that update with the model — they are the live audit, not a verbal claim from yesterday.'],
      ['A separate audit tab that hides the checks so the model looks clean for client distribution', 'Hiding the audit machinery means the next reviewer cannot see it — and on a live deal, the next reviewer is usually a VP who has 20 minutes before sending to a client. Visible checks at the top of each tab are the point.'],
    ],
    'Error checks are the cheapest defense against the most expensive class of model errors — the ones that compile silently and surface only when a buyer\'s diligence team asks why sources do not equal uses. Each check is small; together they catch the structural breaks that no eyeball pass will find.'),

  q(4351405, 'Career Skills', CHAPTER, 'Footing tables and summing rows',
    'You build a comps table — eight companies down, twelve columns across (revenue, EBITDA, growth, margins, multiples). At 8pm the VP says "foot the table before you send it." What is actually being asked?',
    'Sum each column independently and verify the total ties to a reasonable check (e.g., total market cap to a reference); sum each row where there is a logical row total; verify every ratio recomputes from its inputs in the same row; verify mean/median match the underlying rows',
    [
      ['Re-check the headline numbers — revenue and EBITDA — for the top three rows and assume the rest are fine if formulas were copied down', 'Top-three spot-checking is the canonical comps trap. Copy-down errors usually live where the source company had an irregular fiscal year, a stub period, or a missing line — meaning the broken row is rarely in the top three.'],
      ['Verify that the table prints to one page and the formatting is consistent', 'Print discipline is separate from footing. Footing is arithmetic verification — making sure every number is what it claims to be — and a beautifully formatted page can still ship with a broken multiple if no one summed the columns.'],
      ['Confirm the source companies match the trading-comp universe you and the associate agreed on', 'Universe agreement is a different audit step (and a real one). Footing is specifically about the arithmetic *inside* the table once the universe is set — confusing the two means the universe check happens but the math does not.'],
    ],
    'Footing a table is the arithmetic version of a tie-out. Every column sums to a verifiable number, every ratio recomputes from its inputs, every mean and median ties to the visible rows. The trap is treating "foot" as "skim" — footing is the row-by-row, column-by-column check that catches the silent paste errors a copy-down hides.'),

  q(4351406, 'Career Skills', CHAPTER, 'Balancing the balance sheet — where it breaks',
    'Your three-statement model worked fine until you added a new acquisition financing scenario, and now the balance sheet is off by $12M starting in year 3. The cash flow statement looks reasonable. Where is the most likely source of the break?',
    'A debt schedule line that flows to the balance sheet but not to the cash flow statement (or vice versa) — usually a new tranche, an OID amortization, or a deferred financing fee that was added on one side without the matching entry on the other',
    [
      ['Retained earnings — net income is probably miscalculating because of the new interest expense', 'If the cash flow statement looks reasonable then net income is flowing correctly to retained earnings. The break in a newly-modified financing model is almost always at the financing line on the cash flow vs the financing line on the balance sheet — not in the equity section.'],
      ['Inventory or AR — working capital is probably drifting because of the new revenue profile', 'Working capital does not break a balance sheet on its own — the cash flow statement\'s working-capital adjustment captures the change. A balance sheet break introduced by a new financing scenario is structurally on the financing side.'],
      ['Goodwill or intangibles — the purchase price allocation probably did not flow correctly to the asset side', 'A purchase price allocation error would break the balance sheet from period 1, not period 3. The break starting in year 3 points at something that begins to accrue in year 3 — usually a debt amortization or a fee schedule, not the opening PPA.'],
    ],
    'Balance sheet breaks in a financing scenario are almost always on the financing side — a new tranche, an OID amortization, a deferred fee. The discipline is to start there before checking the operating sections. The error signature (timing of when it appears, whether cash flow looks reasonable) tells you which side of the balance sheet to interrogate.'),

  q(4351407, 'Career Skills', CHAPTER, 'Circular that resolves to the wrong number',
    'Your LBO model has a working circular reference (interest expense → net income → cash → debt paydown → interest expense). It resolves cleanly in iterative calc mode. The MD says "the IRR looks high — check the circular." What is the failure mode that resolves cleanly but gives the wrong answer?',
    'A circular that resolves to a stable but wrong number — usually because the cash sweep is paying down debt with cash that was already paid out as a dividend, or because a tax-shield is being calculated on pre-circular interest while the post-circular interest is the real number; the iteration converges but on the wrong cash flow tree',
    [
      ['The circular is not actually circular — Excel is silently treating one of the cells as a constant and ignoring the loop', 'If Excel were ignoring the loop, the model would either error or refuse to iterate, not converge cleanly to a wrong number. Silent convergence on the wrong answer is the dangerous case, and it is almost always a flow logic problem, not Excel treating cells as constants.'],
      ['The iterative calc setting is set too low — increasing the iteration count from 100 to 1000 will fix the IRR', 'A circular that converges in 100 iterations will converge to the same number in 1000. The IRR error is in the cash flow tree, not in iteration depth — more iterations of a wrong logic still resolves to a wrong logic.'],
      ['The IRR is high because the model is correctly capturing strong cash generation — the MD\'s instinct is wrong', '"Disagree with the MD" is rarely the right answer when the MD says check the circular. MDs ask because they have seen this pattern before — a model that converges to a flattering IRR is almost always concealing a cash flow plumbing error somewhere.'],
    ],
    'The dangerous circular is the one that converges. It does not throw an error, does not flash a warning, just produces a stable number that is structurally wrong. The discipline: when an MD or VP says "check the circular," they mean trace the cash flow tree manually — confirm that every dollar enters and exits exactly once, that interest is calculated on the right balance, that the sweep matches the schedule.'),

  q(4351408, 'Career Skills', CHAPTER, 'Sensitivity table sanity check',
    'Your sensitivity table shows IRR ranging from 18% (low case) to 24% (base) to 31% (high). The associate says "make sure the corners make sense." What is the actual sanity check you do?',
    'Manually compute IRR for the two corner cells (worst input × worst input, best × best) by switching the model inputs and reading the IRR directly — compare to the table; if they match within rounding, the data-table mechanics are right; if not, the table is pointing at stale references',
    [
      ['Confirm the headline base-case number ties to the model — if base ties, the data table is wired correctly', 'Base-case tying is necessary but not sufficient. The most common sensitivity-table failure is when the row or column variable is offset by one or pointing at the wrong input cell — base case still ties because the data table happens to compute correctly at the base, while the corners are silently wrong.'],
      ['Check that the IRR range looks reasonable for the deal — 18% to 31% is a plausible band for an LBO', 'Plausibility is not verification. A table can look reasonable and be wrong — the corners can resolve to the right number for the wrong reason, especially if two offsetting errors cancel out at the midpoint.'],
      ['Re-press F9 to recalculate the data table and verify the numbers do not change', 'Recalculation does not catch a misreferenced input cell — it just refreshes the wrong computation. The sanity check has to actually flip the inputs and confirm the table reads what the model produces under those inputs.'],
    ],
    'Sensitivity tables fail in a specific way — the data-table mechanics point at the wrong input cell, and the base case happens to tie while the corners are nonsense. The discipline is to manually compute two corners by flipping inputs in the model itself and confirming the table matches. Anything else is a vibe check, not a sanity check.'),

  q(4351409, 'Career Skills', CHAPTER, 'Naming convention for inputs vs outputs',
    'You are starting a new model from scratch. The associate says "stick to the group convention." Which file-and-tab structure is the standard you should adopt?',
    'A dedicated "Inputs" or "Drivers" tab where every assumption lives — colored blue — and dedicated output tabs (income statement, balance sheet, cash flow, valuation summary) that contain only formulas linking back; inputs and outputs never share a tab',
    [
      ['Keep inputs next to the outputs they drive so a reviewer can see both at once on the same page', 'Co-locating inputs and outputs feels intuitive but breaks at scale — by the time you have a dozen scenarios and three tax jurisdictions, you cannot find the one assumption you need to flip. Centralizing inputs is what makes a model auditable and scenario-flippable.'],
      ['Use whatever structure makes the model run fastest — calculation time matters on big LBOs', 'Calculation time is almost never the constraint on the kinds of models analysts build. Structure-for-speed at the cost of audit clarity trades a problem you do not have for one you will have at 2am.'],
      ['Mix inputs and outputs within tabs but use color coding to distinguish them', 'Color coding helps but does not solve the structural problem — a reviewer flipping the model to a downside scenario still has to hunt through every tab. Centralized inputs means one tab to change to drive every downstream output.'],
    ],
    'The inputs/outputs separation is the architectural backbone of an auditable model. Every assumption lives in one place; every output formula links back. The convention is what lets a VP open the model six months later and flip a scenario in two minutes instead of two hours.'),

  q(4351410, 'Career Skills', CHAPTER, 'Print preview as an audit tool',
    'A VP tells you "before you send any deck, print preview every page." A junior analyst thinks this is about formatting. What is the deeper audit purpose?',
    'Print preview shows the page as the MD will actually see it — text that runs off the page, footnotes that get orphaned, source lines that disappear, charts that have a wrong axis label, and rows that print blank because the spreadsheet froze on screen but the value did not save — all of which are invisible in the on-screen edit view',
    [
      ['Print preview confirms the fonts and margins are right before printing — it is a formatting check', 'Formatting is part of it, but the deeper purpose is that print preview is a different *rendering* of the document. Errors that hide in screen view (orphaned footnotes, off-page text, blank rows) become visible because the print rendering is what the reader will actually see.'],
      ['Print preview confirms the deck is short enough — page count discipline matters for MDs who do not want long decks', 'Page count is a separate consideration. The audit value is what the print rendering exposes — content errors and layout breaks that the editor view conceals because Excel and PowerPoint show you the working file, not the output.'],
      ['Print preview is mostly habit — modern PDFs render the same way as the screen so it is increasingly optional', 'PDFs render differently from the editing view in PowerPoint and Excel — what you see on screen is the live editing state, what prints is the rendered output. The difference is exactly where errors hide, and treating print preview as optional is how those errors reach the client.'],
    ],
    'Print preview is an audit pass disguised as a formatting check. The point is that the screen view and the printed view are different renderings of the same document — and the differences are where errors live. Every analyst who has had an MD point at an orphaned footnote in front of a client learns this lesson once.'),

  // -------------------------------------------------------------------------
  // VERSION CONTROL AND FILE DISCIPLINE (4351411–4351416)
  // The file-naming, ownership, and recovery rules that keep a deal team
  // from sending the wrong version. The existing Ch5 bank covered the
  // headline "two finals" problem; this section goes deeper.
  // -------------------------------------------------------------------------
  q(4351411, 'Career Skills', CHAPTER, 'File naming discipline',
    'You are managing the operating model for a sell-side deal. The MD wants to see updates twice a day. Which file-naming convention actually works in practice across a four-week deal?',
    'Project_Name_OperatingModel_YYYYMMDD_v##_initials.xlsx — date for ordering, version number within the day, initials so the last toucher is visible; the previous file moves to an /archive subfolder, never gets overwritten',
    [
      ['Just call it "Model.xlsx" and rely on the file timestamp to track versions', 'A single overwritten file is exactly the failure mode the convention is designed to prevent. The moment something breaks at 11pm you need yesterday\'s good version, and "Model.xlsx" gives you no way back.'],
      ['Model_v1, Model_v2, Model_v3 — keep a clean numeric sequence with no dates', 'Pure numeric versioning loses the chronology when multiple people edit on the same day. v2 from Tuesday morning and v2 from Thursday afternoon look identical in a file list, and the team picks the wrong one under time pressure.'],
      ['Model_draft, Model_final, Model_final_clean — semantic names that describe the state of the model', 'Semantic naming is the source of the "final_final_v3" anti-pattern. "Draft" and "final" are not orderable — once you have two finals, the convention has collapsed and no one knows which file is live.'],
    ],
    'File naming on a live deal is a piece of infrastructure, not a personal style choice. Date + version + initials makes the chronology and ownership unambiguous; archiving the prior version preserves recovery. The whole system exists so that at 2am, the right file is obvious to anyone on the team.'),

  q(4351412, 'Career Skills', CHAPTER, 'Who holds the live copy',
    'At 4pm the associate emails the model to a VP. At 4:30pm the analyst gets comments back on an earlier version from a different VP. The analyst is about to edit. Who has the live copy and what is the correct move?',
    'The associate\'s 4pm version is now the live copy because it has been sent up — the analyst should pull that file from the email or shared folder, apply the second VP\'s comments on top of it, and rename to the next version; editing on the older file orphans the associate\'s work',
    [
      ['Edit on the earlier version since that is the file the second VP commented on, then merge the associate\'s changes afterward', 'Merging back is exactly the work that creates version confusion. Once the model has been sent up, edits happen on top of that version — going back to the file the VP commented on means rebuilding the associate\'s changes by hand, which is where errors enter.'],
      ['Ask the associate which version is live and wait for an answer before editing', 'Waiting for the associate to disambiguate is reasonable but the rule is already clear: the version that has been sent up is the live version. Asking is fine as a sanity check but the convention should not be re-derived every time the question comes up.'],
      ['Edit on both copies in parallel and reconcile at the end of the day', 'Parallel editing on a live deal is exactly how two files diverge irreconcilably. The deal team needs one source of truth at all times — parallel work is a guarantee of a merge problem later.'],
    ],
    'The live copy is the most recently sent-up version. Once a file has been emailed to a senior banker, that file is the canonical state — all subsequent edits happen on top of it. The discipline prevents the most common version-control disaster: the analyst rebuilding the associate\'s work because they did not realize it had been sent.'),

  q(4351413, 'Career Skills', CHAPTER, 'Restoring from a working draft',
    'You crash Excel at 11pm and lose three hours of unsaved work on a model. Auto-recovery surfaces a partial version. The deal is going to client tomorrow at noon. What is the right move?',
    'Open the auto-recovery file, save it as a new version with the time stamp, and reconcile against the last known good version cell-by-cell on the tabs you edited — recover what you can, redo what you cannot, and document for the associate what was rebuilt versus auto-recovered',
    [
      ['Trust the auto-recovery file and continue editing from there since Excel saved most of the work', 'Auto-recovery files are partial and sometimes silently corrupt — formulas can come back as values, links can break, and the analyst will not see the damage until a downstream output goes wrong. They are a starting point, not a substitute for verification.'],
      ['Start over from the last saved version and redo the three hours of work', 'Throwing away auto-recovery means more work and the same audit need — the redone version still has to be audited against the last good file. Use auto-recovery as the starting point and verify selectively.'],
      ['Wait for IT to recover the file from a backup before continuing', 'IT can sometimes recover from a server snapshot, but the timeline (noon tomorrow) does not have room for that uncertainty. The analyst owns the recovery and works in parallel — IT escalation is a fallback, not a primary plan.'],
    ],
    'Auto-recovery is a useful starting point but it is not a substitute for verification. The discipline: save the recovered file as a new version, reconcile against the last known good copy on the tabs you actually edited, and document what was rebuilt for the associate. The combination of recovery + verification is what protects the deal timeline without inheriting an unreliable file.'),

  q(4351414, 'Career Skills', CHAPTER, 'Saving over the wrong file',
    'You meant to save the new operating model as v07 but accidentally hit Ctrl+S while the v05 file (from yesterday morning) was open. v05 is now overwritten with today\'s work, and v06 is somewhere in the archive folder. What is the recovery sequence?',
    'Immediately stop editing, copy the file that you just saved over to a clearly-named "recovered_v05_corrupted" file, restore v06 from archive as the new working baseline, and reconcile any edits between v06 and the overwritten state — the priority is preserving evidence before continuing edits',
    [
      ['Keep editing — the file is fine because the latest content is what matters', 'The file is not fine — the chronology has broken and v05 no longer means v05. Continuing to edit propagates the confusion into v07 and v08, and now no one on the team knows which file actually represents which state.'],
      ['Email the team that you need to start over and rebuild from v06', 'Starting over assumes the edits since v06 are lost, which they are not — they are sitting in the file you just saved over. The right move is to preserve evidence first, then reconcile, not announce a redo.'],
      ['Hide the mistake by renaming the file to v07 quietly and continuing', 'Hiding a version-control mistake is the start of a much bigger problem — six hours later when the associate asks where v06 went, the chronology is unrecoverable. The discipline is to surface the mistake immediately so the team can reconstruct the chain.'],
    ],
    'Saving over the wrong file is recoverable if the analyst stops, preserves the current state, restores the correct baseline, and reconciles transparently. The mistake itself is normal — the dangerous version is the one where the analyst tries to hide it. Surface, preserve, reconcile.'),

  q(4351415, 'Career Skills', CHAPTER, 'Two people editing the same model on a Saturday',
    'It is Saturday morning. You and another analyst on the same deal are both edits-deep in the operating model — you are updating the comps tab, they are updating the LBO. Neither of you realized the other was working. By noon there are two divergent files. What is the right reconciliation?',
    'Stop both copies, identify which tabs each person touched (yours: comps; theirs: LBO; shared: links to assumption tab), reconcile by copying the touched tabs forward into a single new master, and verify every link from the assumption tab fires correctly into both tabs — the priority is rebuilding a single source of truth before sending up',
    [
      ['Pick whichever version is more recent based on save timestamp and discard the other person\'s work', 'Discarding the other analyst\'s work because of timestamp is exactly the mistake that ends collaborative-modeling weekends in arguments. Save time tells you nothing about which edits are right or which sections each person touched.'],
      ['Email both files to the associate and let them decide which one to use', 'Punting the merge to the associate is what the team will remember when the analyst is up for review. Reconciliation on a parallel-editing weekend is an analyst job — the associate sees the merged result, not the merge process.'],
      ['Continue editing both files in parallel until evening and merge at the end of the day', 'Letting the divergence grow makes the merge harder, not easier — more cells changed means more opportunity for one file to silently overwrite a good change in the other. Stop, reconcile, then continue.'],
    ],
    'Parallel-editing collisions are recoverable when you reconcile tab-by-tab against the last common version — touched-by-A vs touched-by-B vs shared. The discipline is to stop the moment the divergence is discovered, not let it grow. Two analysts on the same model is a coordination failure; the merge is how you recover from it without losing work.'),

  q(4351416, 'Career Skills', CHAPTER, 'The final_final_v3_clean anti-pattern',
    'Your deal\'s shared folder contains: Model_final.xlsx, Model_final_v2.xlsx, Model_final_clean.xlsx, Model_FINAL.xlsx, and Model_final_v3_REAL.xlsx. The MD is on the phone in 20 minutes asking for the model. How did the team get here and what is the right move now?',
    'The team got here by never using a date+version naming convention; the right move now is to identify the genuine live version (most recent send-up email is the canonical anchor), rename it with date+version+initials, archive all the others to a clearly-labeled archive folder, and circulate the new file name to the team',
    [
      ['Send the MD all five files and let them pick — they will know which one is right', 'Sending an MD a folder of files is exactly the move that gets an analyst remembered for the wrong reason. The analyst\'s job is to deliver one file with confidence, not delegate the disambiguation upward.'],
      ['Pick the file with "REAL" in the name since that is presumably the latest convention', 'Convention-by-suffix is the disease, not the cure. "REAL", "FINAL", "v3_clean" are all someone\'s guess that their file is the real one — the only authoritative anchor is which file has actually been sent up in the most recent email.'],
      ['Open all five and compare to figure out which is actually most recent', 'Opening five files at minute 19 of a 20-minute window before an MD call is how the wrong one gets picked. The most-recent-send-up email is the canonical anchor and finding it is faster than opening five files.'],
    ],
    'The "final_final_v3" folder is a forensics problem and a process problem. The forensics: the most recent send-up email is the canonical anchor — that file is live, the rest are archive. The process: rename the live file to date+version+initials going forward and quietly retire the semantic naming that produced the mess.'),

  // -------------------------------------------------------------------------
  // COMMENTS TURNAROUND MECHANICS (4351417–4351422)
  // The discipline of receiving, processing, and resolving comments on a
  // deck or model — the actual mechanics of an IB comment-turn cycle.
  // -------------------------------------------------------------------------
  q(4351417, 'Career Skills', CHAPTER, 'Printing the red-line markup',
    'An MD red-lines a 40-page pitchbook by hand on a Friday afternoon and hands you the marked-up printout. The deck is due to the client Monday morning. What is the actual workflow over the weekend?',
    'Scan or photograph the marked-up pages, work page-by-page from the printout (not from memory of the conversation), make each change in the live deck, mark each comment as "done" on the printout as you go, and at the end produce a clean reprint to verify against the original red-line page-by-page',
    [
      ['Read through the red-line once to absorb the changes and then make edits from memory while the MD\'s intent is fresh', 'Memory is the worst input on a 40-page red-line. Forty pages of comments means dozens of small changes; making them from memory means missing some and inventing others. The printout is the document of record.'],
      ['Type up all the comments into a Word document first to have a digital list, then work from the digital list', 'Re-typing the comments doubles the work and introduces transcription errors — the printout is already the canonical list. Work from the printout directly and mark each comment as done on the page where it lives.'],
      ['Ask the MD to redo the comments digitally so you do not have to work from a paper copy', 'Asking an MD to redo a red-line they just spent two hours producing by hand is not a request an analyst makes. Hand red-lines are a standard tool — the discipline is working from them, not converting them.'],
    ],
    'Red-line workflow is page-by-page, comment-by-comment, marked-as-done. The printout is the document of record; the analyst\'s job is to apply every change and prove it. A clean reprint verified against the marked-up original is the proof — anything short of that is hoping no comment got missed.'),

  q(4351418, 'Career Skills', CHAPTER, 'Answering all comments',
    'You send a model back up to the associate with comments addressed. The associate emails back: "you did not answer all comments." You go through and find three comments you skipped because you were not sure how to handle them. What is the right move?',
    'For each unanswered comment, document explicitly what you did and why — even if the answer is "I was unsure how to handle this; here is the question I have" — so the associate sees the comment was read and is in some active state, not silently dropped',
    [
      ['Make a best-guess edit on each of the three to avoid going back with "I do not know" responses', 'Best-guessing an edit you are unsure about pushes the uncertainty downstream — the associate or VP will see your guess as a deliberate choice and may not catch it. "Unsure, here is the question" is a better answer than "guess, hope no one notices."'],
      ['Address only the comments you understood and leave the three unclear ones for the next turn', 'Silently leaving comments unanswered is what produced the "you did not answer all comments" email in the first place. The discipline is that every comment gets a response — even "I am not sure how to interpret this, here is what I think you meant" is a response.'],
      ['Send the model back up and verbally tell the associate about the three you skipped when you next see them', 'Verbal updates do not survive the email trail. The associate is going to forward the model to the VP, and the verbal note about three skipped comments will not travel with it. Document the skipped comments in writing with the model.'],
    ],
    'Answering all comments means every comment is in a closed state when the model goes back up — applied, applied-with-question, or explicitly flagged for discussion. The trap is silently dropping the ones you did not understand; the discipline is responding to every one, even if the response is a question back.'),

  q(4351419, 'Career Skills', CHAPTER, 'Tracking unresolved items across turns',
    'A pitchbook has been through three rounds of MD comments. Each round resolved most items but left two or three open ("come back to this", "VP to confirm", "depending on data room update"). By round three you have eight open items distributed across the deck. What is the right tracking mechanism?',
    'A running open-items log — one row per unresolved comment, columns for page, comment text, current status, owner, and target close — visible to the team and reviewed at the top of every turn so nothing falls between rounds',
    [
      ['Highlight each unresolved comment in yellow within the deck itself so they are visible page-by-page', 'In-deck highlighting works for one or two items but does not scale across eight items distributed through a 40-page deck. Highlights are easy to miss on a fast scan and easy to leave behind by accident in a client send.'],
      ['Trust the comment threads in the document — they show what is open and what is closed already', 'Comment threads in Word or PowerPoint are unreliable across versions — when the file is re-saved or sent up, comments can disappear or merge. The threads supplement the open-items log; they do not replace it.'],
      ['Keep a mental list of the unresolved items so the deck stays clean', 'A mental list does not survive a weekend, a staffing change, or a parallel deal. The whole point of a written log is that an item flagged in round one is still tracked in round four, regardless of who is on the deck.'],
    ],
    'A running open-items log is the difference between a clean deal team and a deal team that ships unresolved comments to the client. One row per item, visible to everyone, reviewed each turn — the log is what catches the comment that was supposed to be revisited in round three and was not.'),

  q(4351420, 'Career Skills', CHAPTER, 'Reading an MD comment vs an associate comment',
    'You receive comments on a pitchbook. The associate has written: "change the EBITDA multiple to 12.0x on page 14." The MD has written: "is the multiple really the right anchor for this buyer?" Why do you handle these two comments differently?',
    'The associate comment is mechanical — make the change, verify it on every downstream page, send back. The MD comment is a thesis question — it requires the analyst to think about what the MD is really asking (the multiple may be right but the framing wrong, or the comparable set may need a different anchor), and the response is a written rationale, not just an edit',
    [
      ['Both comments are instructions to change the multiple — make the change to 12.0x and reframe the section, then send back', 'Treating an MD\'s question as an instruction misses what the MD is actually doing — they are signaling that the analytical anchor needs rethinking, not asking for a number swap. Acting on the surface of the question loses the depth.'],
      ['The MD comment is rhetorical and does not need a response — change the multiple per the associate and move on', 'MD comments are almost never rhetorical. An MD asking "is the multiple really the right anchor" is asking the analyst to defend the choice or change the framing — silence on that comment is read as the analyst not engaging with the senior question.'],
      ['Escalate the MD comment to the associate to interpret since the associate knows the MD\'s style better', 'Escalating interpretation upward is sometimes appropriate but here it abdicates the analyst\'s job. The analyst reads the MD\'s comment, drafts an interpretation and a response, and brings that to the associate — not "what does this mean?"'],
    ],
    'Associate comments are mechanical; MD comments are thesis questions. The analyst who treats them the same loses on both ends — fails to apply the mechanical change correctly and fails to engage with the senior question. Reading the level of the comment is part of reading the room.'),

  q(4351421, 'Career Skills', CHAPTER, 'Stamping comments as resolved when they are not',
    'You are tired at 1am and mark a comment as "done" in the running log when you have not actually addressed it — you plan to come back to it in the morning. The associate reviews the log at 7am, sees it marked done, and circulates the deck to the VP. What just happened?',
    'A comment that was supposed to be revisited is now downstream of the next reviewer who trusted the log — the fix is to immediately tell the associate the truth, identify the comment that was prematurely marked done, and re-open it before the VP touches the deck',
    [
      ['Make the change now and update the log to truly reflect "done" — the VP will probably not notice the gap', 'Making the change after the deck has already gone up depends on the VP not opening it before you finish. Hoping the VP is slow is not a process. The right move is to surface the issue immediately, not race to catch up.'],
      ['Leave the log as marked-done since the deck has already moved up and the associate will catch it on review', 'The associate has already trusted the log to circulate the deck — they are not going to re-audit it because no one told them anything is wrong. The error propagates if it is not flagged.'],
      ['Quietly fix the comment now and update no one — the issue was minor and probably will not matter', 'A pattern of quiet fixes erodes the log\'s reliability for the whole team — once the log cannot be trusted, the team loses its main coordination mechanism. The integrity of the log matters more than the embarrassment of admitting the false-done.'],
    ],
    'Marking a comment as resolved when it is not is a process failure that damages the team\'s ability to coordinate. The recovery is to surface immediately — the associate needs to know the log was wrong so they can pull the deck back or alert the VP. Quiet fixes preserve nothing and damage the team\'s trust in the log going forward.'),

  q(4351422, 'Career Skills', CHAPTER, 'The comment turnaround clock',
    'An MD red-lines a deck at 6pm and says "back to me tonight." A new analyst plans to deliver at 11pm with a clean comprehensive turn. What is the right framing for the comment turnaround clock?',
    'Turn the deck quickly — 8 to 9pm — even if not every comment is fully resolved, with a clear note about what is still open; comment turnaround is a velocity discipline because the MD has other work to slot in and needs to see your progress, not wait silently for a perfect version',
    [
      ['Take the full time to deliver a clean, comprehensive version because quality matters more than speed', 'Quality matters but "back to me tonight" means MDs are building their evening around your turn. Holding the deck until 11pm for a complete version blocks them — they would rather see an 80% turn at 8pm with a note than a 100% turn at 11pm.'],
      ['Deliver in pieces — turn the first ten pages at 7pm, the next ten at 9pm, and the rest at 11pm', 'Piece-wise delivery makes the MD re-read overlapping content multiple times and creates ambiguity about which version is live. Turn the whole deck once with notes, not in tranches.'],
      ['Email at 10pm to ask whether the MD wants the deck tonight or first thing in the morning', 'Asking for the deadline that was already given is a tell that the analyst is not driving the work. "Back to me tonight" was the deadline — re-asking signals avoidance, not coordination.'],
    ],
    'Comment turnaround is a velocity discipline as much as an accuracy discipline. MDs build their schedule around when they expect to see your turn; holding a deck for perfection blocks them. Turn quickly with notes on what is still open — the next round picks up the open items.'),

  // -------------------------------------------------------------------------
  // CLIENT MANAGEMENT AT THE ANALYST LEVEL (4351423–4351427)
  // The structural rules around what an analyst can and cannot do with a
  // client, how escalation works, and what NEVER goes out without senior
  // sign-off. The most-broken category in junior banking errors.
  // -------------------------------------------------------------------------
  q(4351423, 'Career Skills', CHAPTER, 'Never emailing the client directly as analyst',
    'A CFO at the client emails you (the analyst) directly with a question about the model: "Can you send me your latest WACC build?" Your VP and associate are both in flights. What is the right move?',
    'Reply acknowledging receipt with a placeholder ("Will follow up shortly"), text the associate even though they are flying, and wait for senior sign-off before sending anything substantive — analysts do not send substantive content to the client without explicit authorization, even when the content is innocuous',
    [
      ['Send the CFO the WACC build directly since you built it and the request is innocuous', 'The WACC build is innocuous in content but the precedent is what matters — once the analyst emails the client substantive material once, the client starts cc\'ing the analyst on real questions and the senior bankers lose visibility. The discipline holds even for innocuous requests.'],
      ['Tell the CFO that you cannot help and they need to wait for the VP — full stop, no acknowledgment', 'A bare "wait" reads as unhelpful and damages the client relationship. Acknowledge receipt, signal that the response is coming, but do not send the content — the courtesy is in the placeholder, the discipline is in the wait.'],
      ['Forward the email to the associate and wait silently — the client will figure out that the analyst is not the right contact', 'Silently forwarding leaves the client wondering whether the email was received. A placeholder reply is the courtesy that closes that loop while preserving the escalation discipline.'],
    ],
    'Analysts do not send substantive material to the client without explicit authorization. The rule holds even for innocuous requests because the precedent erodes the senior bankers\' visibility into client communication. Acknowledge, escalate, wait — the placeholder reply is the courtesy that holds the line.'),

  q(4351424, 'Career Skills', CHAPTER, 'Escalation when the VP and associate are unreachable',
    'It is Saturday at 9pm. The client CEO emails the deal team with what looks like a substantive issue about deal mechanics ("we are getting cold feet on the structure"). Your associate has been radio silent all day; your VP is on a flight to Asia. What is the right escalation path?',
    'Call the MD directly — substantive client communication on a live deal escalates up the chain when the next-in-line is unreachable; do not respond to the CEO until you have spoken to the MD, and do not let the silence stretch past an hour for a "cold feet" message',
    [
      ['Wait until the associate or VP becomes reachable — the analyst should not call the MD over the associate\'s head', 'On a "cold feet" message from the client CEO, waiting is the wrong default. The associate-protection convention applies to routine work; a deal-jeopardizing client signal escalates immediately. The MD will be unhappy not to have been called.'],
      ['Reply to the CEO acknowledging the message and saying the team will discuss Monday morning', 'Punting a cold-feet signal to Monday risks the client making decisions over the weekend without the bank in the conversation. The whole point of escalation is to get a senior on the line before the client moves further.'],
      ['Forward the email to the entire deal team distribution list and wait for someone to respond', 'Distribution-list broadcasts on a sensitive client message are a tell that the analyst could not decide whom to call. The escalation path is direct — MD on the phone, not a group email that may or may not be seen.'],
    ],
    'Escalation paths flatten when the message is deal-jeopardizing. The default chain (analyst → associate → VP → MD) holds for routine work but the analyst calls up the chain directly when downstream people are unreachable and the situation is urgent. The MD will always prefer to be called on a "cold feet" message than to learn about it Monday.'),

  q(4351425, 'Career Skills', CHAPTER, 'MD/VP relationship management',
    'You notice that your MD repeatedly asks for analyses that your VP has already pushed back on internally. The MD does not seem to know the VP has reservations. As the analyst, what is your role in that gap?',
    'Surface the gap to the VP directly — "the MD asked again for X, I know you had concerns; how should I proceed" — and let the VP decide whether to handle it with the MD or whether you should produce the analysis with the VP\'s caveats; the analyst does not arbitrate between senior bankers but does keep both informed',
    [
      ['Just produce the analysis the MD asked for since the MD is the senior person and the VP can sort it out later', 'Producing the analysis without flagging the VP\'s reservation means the analyst is implicitly siding with the MD in an internal disagreement they do not see fully. The analyst stays out of the politics by flagging, not by picking a side.'],
      ['Tell the MD that the VP has concerns and let them work it out between themselves', 'Telling the MD what the VP thinks is the analyst inserting themselves into a senior conversation. The communication runs through the VP — the analyst flags the VP, the VP decides how to handle the MD.'],
      ['Do nothing and wait for the VP to bring up the disagreement with the MD on their own time', 'Silent waiting risks the MD getting frustrated that the analysis has not appeared and the VP not realizing the MD is still asking. The analyst\'s job is to keep the senior bankers in sync by flagging, not to wait for the gap to resolve itself.'],
    ],
    'The analyst sits at the intersection of multiple senior bankers and the job is to keep them in sync without arbitrating between them. Flag what each senior is asking for to the other; let them resolve the substance. Acting on an MD\'s request the VP has reservations about — silently — puts the analyst in the middle of a disagreement they cannot resolve.'),

  q(4351426, 'Career Skills', CHAPTER, 'What NOT to send to client',
    'You are preparing a buyer-rationale page for client distribution. The page in your working deck contains a sensitive internal note: "Buyer A is unlikely to be aggressive — they always come in light at first round." The MD has not seen the deck yet. What is the discipline before any external distribution?',
    'Sensitive internal commentary, unreviewed analyses, internal handicapping notes, and any "color" commentary that reveals the bank\'s read on a buyer never go out — the deck for client distribution is a separate version with all internal notes stripped, and that scrubbed version is what the MD reviews and signs off before going out',
    [
      ['Send the deck as-is to the MD for review and let them decide what to strip before going to client', 'Asking the MD to do the strip-out is a job an analyst owes the MD — by the time the MD is reviewing, the version should be scrubbed of internal notes. Mixing internal commentary into the client version makes the MD do the analyst\'s cleanup.'],
      ['Keep the internal note in but format it in a smaller font so the client probably will not read it', 'Smaller font is not redaction. Anything in the file is in the file — formatting tricks do not stop a careful reader, and the right move is to remove the note from the client version entirely.'],
      ['Move the internal commentary to the speaker notes section so it is not on the slide itself', 'Speaker notes travel with the file — they are visible in print, in PDF export, and in some PowerPoint viewers. Moving internal commentary into speaker notes is the same as leaving it on the slide for any client who knows where to look.'],
    ],
    'The client version of a deck is a separate, scrubbed version — all internal commentary, handicapping notes, and unreviewed analyses removed. The discipline is to maintain two versions deliberately, not to hope that a senior reviewer will catch the internal note before it ships. Speaker notes count.'),

  q(4351427, 'Career Skills', CHAPTER, 'CC discipline on external emails',
    'You are drafting an external email on the deal — going to the buyer\'s deal team — and you reflexively cc the entire internal deal team. What is the right cc discipline?',
    'External emails cc only the seniors required to be visible — typically the MD and the relevant VP — and put the broader internal team on bcc or leave them off entirely; cc\'ing the full internal team on external mail exposes the team structure (and especially the junior bankers) in a way external counterparts can use against you',
    [
      ['CC the full internal team so everyone is in the loop on what was sent', 'Internal-loop visibility is a separate goal from external email composition. The buyer\'s deal team does not need to see five analysts and three associates on a cc line — that reveals staffing and gives them a list of people to route end-runs to.'],
      ['Skip cc entirely and forward the sent email to the internal team afterward', 'Forwarding-after is fine for internal awareness but it loses the audit trail — the sent email\'s addressing is the record of who was officially in the conversation. Cc the seniors required, bcc the rest.'],
      ['Use reply-all on the existing thread so everyone who has been on it stays on it', 'Reply-all on a thread that includes the buyer\'s side is exactly how an inappropriate cc creeps in — the broader internal team gets cc\'d as a side effect of how the thread was started. Compose external mail deliberately.'],
    ],
    'External email cc discipline matters because the cc line is visible to the buyer\'s team. They learn your staffing, see your juniors\' email addresses, and can route around you when they want. Seniors on cc, juniors on bcc or off — the email is a deliberate communication, not a default reply-all.'),

  // -------------------------------------------------------------------------
  // STAFFING AND WEEKEND CULTURE (4351428–4351431)
  // The norms around weekend protection, dead-week expectations, live-deal
  // priority, and how an analyst manages multiple stagings without burning
  // out or dropping balls.
  // -------------------------------------------------------------------------
  q(4351428, 'Career Skills', CHAPTER, 'Live deal protection on weekends',
    'You are staffed on two deals: a live sell-side (kickoff next Tuesday, very active) and a pitch (Friday-deadline new business pitch). It is Saturday morning and both VPs ping you with weekend work. How do you decide?',
    'Live deal takes priority — the sell-side is in process and the bank has fiduciary obligations to the client; ping the pitch VP transparently to flag the conflict and either negotiate a tighter scope on the pitch work or escalate to the staffer to rebalance; do not silently slip pitch deliverables',
    [
      ['Do the pitch first since the deadline is sooner (Friday vs Tuesday kickoff)', 'Pitch deadlines are real but live deals carry fiduciary weight — the bank is being paid to execute the sell-side, and a live deal in process outranks pitch work. The deadline gap is not the right tiebreaker.'],
      ['Try to do both and split your weekend between the two — neither VP needs to know about the conflict', 'Silently splitting time means both deliverables are at risk and neither VP can plan accordingly. The right move is transparent — flag the conflict, get help reshaping one of the two, do not absorb the conflict quietly and underdeliver on both.'],
      ['Tell both VPs to talk to each other and figure out which deliverable is more important', 'Sending the VPs to fight each other is not how staffing conflicts get resolved — it is how analysts get bad reputations with both. The conflict goes through the staffer, not directly between two VPs, and the analyst surfaces it cleanly.'],
    ],
    'Live deal protection is a structural norm — paying clients in active process take precedence over pitches. The discipline when conflicts arise is to flag transparently to both VPs and the staffer, not to silently absorb and underdeliver. Letting both VPs know early is how the bank rebalances; silent failure is how analysts get sideways with two seniors at once.'),

  q(4351429, 'Career Skills', CHAPTER, 'Dead-week expectations',
    'Your deal closed last Friday and your next staffing has not landed. The group has a "dead week" between deals. What is actually expected during dead week?',
    'Available, reachable, and proactively useful — ping the staffer that you are open, offer help on other live deals, work through the internal training backlog and the credentials in-progress; "dead week" is the bank not putting you on a deal, not you being off',
    [
      ['Take the week as a recovery week and minimize availability — push back if asked to help on other deals', 'Pushing back on help requests during dead week is exactly how dead weeks turn into bad reviews. The bank is paying for capacity even when you are between deals — "I am between deals so I am unavailable" is not how the group reads dead week.'],
      ['Wait at your desk for staffing to land without proactively offering help — the staffer will reach out when needed', 'Passive waiting wastes the week and reads as low initiative at year-end. Proactive offers (helping on other deals, finishing internal training, getting ahead on Series 79) is what differentiates the analyst who got staffed back quickly from the one who did not.'],
      ['Work the same hours as a live deal week so seniors do not notice the dead week — perform busyness', 'Performing busyness when actually free is a different failure — it leaves the analyst exhausted on no useful work and unable to capacity-up when the next deal lands. Be honest about availability, be useful with the time.'],
    ],
    'Dead week is a capacity buffer for the bank, not a vacation for the analyst. Be reachable, offer help proactively, work through internal training and credentials. Visible usefulness during dead week is one of the ways the staffer learns whom to put on the next big deal.'),

  q(4351430, 'Career Skills', CHAPTER, 'Saying no to a second staffing',
    'You are deep on a live M&A deal — 80-hour weeks, daily MD meetings, Saturday work — and the staffer pings you about a new pitch staffing. How do you respond?',
    'Acknowledge the staffer, explain the current load with specifics ("M&A is 80-hour, MD meeting daily, deliverables Tuesday and Thursday"), ask whether the pitch is firmer than a maybe, and let the staffer decide; do not unilaterally refuse, but do not silently absorb either — the staffer needs the data to balance the floor',
    [
      ['Refuse the pitch outright since you are already at capacity — the staffer should know better than to pile on', 'Unilateral refusal puts the staffer on the defensive and signals the analyst is not solving problems. The staffer needs information to redistribute work; the analyst provides the information, the staffer makes the call.'],
      ['Accept the pitch staffing without flagging the M&A load — the staffer will figure it out when deliverables slip', 'Silently accepting both and letting deliverables slip is how analysts develop bad reputations with multiple VPs at once. The staffer has to know the load before it is taken so the work can be balanced — surfacing the conflict is the analyst\'s job.'],
      ['Counter-propose by suggesting another analyst should take the pitch instead', 'Suggesting a specific colleague for the work positions the analyst as routing around the staffer. The staffer knows the bench and decides whom to pull in — the analyst flags load and lets the staffer choose.'],
    ],
    'Saying no to a second staffing is a transparency play, not a refusal. Specifics about current load (hours, meetings, deliverables) give the staffer the data to decide. The staffer\'s job is to balance the floor; the analyst\'s job is to surface the constraint cleanly without silently absorbing or unilaterally refusing.'),

  q(4351431, 'Career Skills', CHAPTER, 'Protected Saturday policy',
    'Your bank has a "protected Saturday" policy — no work between 9pm Friday and 9am Sunday. On Friday at 7pm your VP says "I need this turned by Sunday morning." How does the policy actually work in practice?',
    'The policy is enforced by the staffer and group head, not the line VP — if a VP asks for protected-Saturday work, the analyst flags it to the staffer (who pushes back upward) rather than refusing the VP directly; live-deal exceptions exist but are explicit, documented, and approved up the chain, not unilateral VP overrides',
    [
      ['Refuse the work directly to the VP — protected Saturday is a bank policy and the VP has to respect it', 'Direct refusal to a VP is rarely how analysts navigate this — the policy is enforced through staffing, not through line-level confrontation. The analyst surfaces to the staffer, the staffer takes the conversation up.'],
      ['Do the work silently — the policy is mostly aspirational and saying no to a VP is career-limiting', 'Silently breaking protected Saturday undermines the policy for the whole group and burns out the analyst over time. The policy exists because the bank decided it was worth enforcing — using it correctly is part of the bank\'s expectations.'],
      ['Tell the VP that you will do the work but you will be slow to respond on Saturday to maintain the spirit of the policy', 'Half-doing the work while pretending to honor the policy is the worst of both — the deliverable slips and the policy is not actually exercised. Either work the day with explicit approval, or invoke the policy through the staffer.'],
    ],
    'Protected Saturday works because it is enforced at the staffing/group-head level, not analyst-by-VP. The analyst surfaces conflicts to the staffer, who pushes back upward through the formal channel. Live-deal exceptions exist but are approved up the chain, not declared unilaterally by a VP — and not silently absorbed by an analyst.'),

  // -------------------------------------------------------------------------
  // REVIEWS AND FEEDBACK CULTURE (4351432–4351436)
  // How analysts get reviewed, what differentiates the buckets, and how
  // feedback actually flows up and down the analyst-associate-VP chain.
  // -------------------------------------------------------------------------
  q(4351432, 'Career Skills', CHAPTER, 'Year-end review components',
    'Your year-end review is coming up. What are the actual components and which one drives the bucket outcome most heavily for a first-year analyst?',
    'Three components: 360 written reviews from MDs/VPs/associates you worked with, deal-by-deal feedback compiled by the staffer/group head, and a self-review; for a first-year analyst the 360 written reviews dominate because there is not yet a track record of deal outcomes to weigh — being remembered well by named seniors is the bucket lever',
    [
      ['Compensation is mostly driven by the analyst\'s billable hours and the deals that closed during the year', 'Hours and closures matter but for a first-year analyst they are largely a function of staffing — the analyst did not pick the deals. Buckets reflect *how* the analyst performed within the staffings, not the staffings themselves.'],
      ['The self-review is the most important component because that is where the analyst makes the case for their bucket', 'Self-reviews are read but they do not drive the bucket — the 360 reviews from named seniors do. A self-review that contradicts the 360 reviews is at best ignored, at worst marks the analyst as unaware.'],
      ['Year-end is a roll-up of mid-year feedback so the analyst already knows their bucket by the time the review meeting happens', 'Mid-year feedback is directional but the bucket is decided in the year-end calibration committee. Analysts often think they know their bucket and are surprised — the calibration is across the whole class, not deal-by-deal.'],
    ],
    'First-year analyst reviews are dominated by the 360 written feedback from seniors. The analyst\'s job through the year is to be remembered well by named MDs and VPs — not by maximizing hours or self-advocacy. The calibration committee reads the 360s and compares analysts across the class; that comparison is what sets buckets.'),

  q(4351433, 'Career Skills', CHAPTER, 'Bottom-decile dynamics',
    'A first-year analyst lands in the bottom decile at year-end. What does that usually mean in US banking practice and what is the actual recovery path?',
    'Bottom decile is typically a formal performance-improvement signal — explicit conversation with the staffer or group head, named development areas, and a window (often 60-90 days) to demonstrate change; it is recoverable in the first year but not in the second, and the recovery requires staffer help to get on a deal where the analyst can visibly improve, not just trying harder on the same staffings',
    [
      ['Bottom decile is informal — just an internal ranking that does not affect compensation or career path materially', 'Bottom decile typically materially affects compensation (lower bonus or zero) and signals serious performance concern. Treating it as informal underestimates the situation and misses the recovery window.'],
      ['Bottom decile means immediate termination — the analyst should start interviewing externally', 'Termination is not the typical first-year outcome — bottom decile is usually a performance-improvement step, not immediate exit. The second time it happens is when exit follows. First time, the recovery path is real if used.'],
      ['Bottom decile recovery is about working harder on the same deals to prove the rating wrong', 'Harder work on the same deals usually does not move the needle — the staffer or VPs who gave the bad feedback have a fixed read. Recovery typically requires new staffings with new seniors where the analyst can build a different track record.'],
    ],
    'Bottom decile in year one is recoverable but the path runs through the staffer. The analyst needs to surface to the staffer, name the development areas honestly, and get put on a deal where new seniors can form a fresh read. Trying harder on the same staffings rarely changes the existing seniors\' minds — new evaluators is the lever.'),

  q(4351434, 'Career Skills', CHAPTER, 'What gets you a top bucket',
    'A first-year analyst wants to position for the top bucket at year-end. Which behavior actually moves the bucket, distinct from the long list of things every analyst is told to do?',
    'Being the analyst that VPs and MDs ask for specifically on new staffings — that pull signal is what calibration committees weight most heavily because it is the cleanest revealed preference; everything else (hours, deals, polish) feeds into whether seniors ask for you again',
    [
      ['Logging the most hours in the class — billable hours are the most-cited metric and analysts who log the most are remembered', 'Hours are a side effect of staffing, not a driver of the bucket. Logging the most hours often means being on the most deals (which is staffer-decided) and does not by itself differentiate the top bucket from the middle.'],
      ['Closing the most deals during the year — analysts staffed on deals that closed get credit for those closures', 'Deal closures are largely a function of which deals the analyst was put on — and being put on closing deals is itself a function of being asked-for by seniors. The closure is downstream of the pull signal, not upstream.'],
      ['Producing the cleanest, most polished pitchbooks and models — visible quality is what gets remembered at calibration', 'Polish matters but every analyst in the class is producing polished work — that is the floor, not the ceiling. The differentiator is whether seniors decided they wanted you back on the next deal, not whether your last deck was clean.'],
    ],
    'Top-bucket positioning is downstream of one signal: being asked for by name on new staffings. That pull signal aggregates everything else (quality, ownership, judgment, attitude) into a revealed preference seniors are not faking. The discipline is to focus on the seniors who could ask for you next time, not on logging hours that do not move the dial.'),

  q(4351435, 'Career Skills', CHAPTER, 'Receiving feedback from a VP after a bad turn',
    'Your VP sends a Slack at 11pm: "this turn is rough — let\'s sit down tomorrow at 9am." You do not know which deliverable they mean. How do you prepare for the 9am?',
    'Open every deliverable you sent up to the VP in the last two days, audit each one for the kinds of errors a rough turn signals (tie-out, formula, framing), bring the printouts with self-identified weaknesses already flagged, and be ready to ask "which specific item triggered this so I can address the right thing" — preparation plus humility, not defense',
    [
      ['Wait until 9am to see which deliverable the VP wants to discuss — preparing for an unknown topic is a waste of time', 'Walking into the 9am cold reads as not taking the feedback seriously. The signal "this turn is rough" usually means the VP can name several issues — the analyst who has already self-audited and identified weaknesses is the one who recovers fastest.'],
      ['Prepare a defense of your work — figure out which deliverable they likely mean and have arguments ready for why the choices were reasonable', 'Walking in defensively turns a feedback meeting into an adversarial one. The 9am is an opportunity to learn; rehearsing arguments closes it before it starts. Take the feedback, ask clarifying questions, do not litigate.'],
      ['Ask the VP over Slack tonight which deliverable they mean so you can come in focused', 'Asking the VP at 11pm to specify the issue offloads the prep onto them when they have signaled the meeting will cover it. Self-audit first; ask for specificity in the meeting itself.'],
    ],
    'Receiving difficult feedback well is half the work; the other half is preparing for it. Self-audit every deliverable in scope before the meeting, bring printouts with weaknesses already flagged, ask for specificity in the room. Defense forecloses the lesson; preparation plus humility is what differentiates analysts who recover from rough turns.'),

  q(4351436, 'Career Skills', CHAPTER, 'Giving feedback up',
    'Your associate has been sending you the same boilerplate comments repeatedly without engaging with the substance — "fix the formatting" with no specifics, "tighten the language" without pointing at lines. You think they are not really reading your work. How do you handle that?',
    'Raise it directly with the associate, framed as a question about how to improve — "I noticed the last few turns have been quick comment passes; is there a higher-level concern I should be addressing, or specific examples I can dig into?" — invites a real conversation without accusing the associate of phoning it in',
    [
      ['Go around the associate to the VP and flag that the associate is not engaging with your work', 'Routing around the associate to the VP is a relationship-damaging move that the VP will read as the analyst playing politics. The conversation belongs with the associate first; the VP only enters if the associate cannot or will not engage.'],
      ['Stop trying — accept that some associates are checked out and focus on getting feedback from the VP instead', 'Giving up on the associate channel means losing one of the analyst\'s main coaching relationships. Associates who feel called out gently often re-engage; the analyst who stops trying does not get the coaching and does not improve.'],
      ['Match the associate\'s energy — send back work with the minimum needed for the next turn and stop overinvesting', 'Lowering your own work quality to match a checked-out associate is the worst response — it affects the deal output and reads to the VP as the analyst declining in performance. The associate\'s disengagement is not a license to disengage yourself.'],
    ],
    'Feedback up the chain works when it is framed as a question about improvement, not an accusation about engagement. Associates who feel the analyst is asking for coaching usually re-engage; associates who feel called out shut down further. The conversation belongs at the associate level first — VP escalation only if the associate channel genuinely fails.'),

  // -------------------------------------------------------------------------
  // PITCHBOOK CRAFTSMANSHIP AND OUTPUT OWNERSHIP (4351437–4351441)
  // The visible craft of pitchbook production — typography, headers, source
  // lines — and the deeper question of who owns which layer of the output.
  // -------------------------------------------------------------------------
  q(4351437, 'Career Skills', CHAPTER, 'Font sizes, header conventions, page breaks',
    'You are building a 30-page pitchbook from scratch. The MD has not given you a template and the group has implicit conventions but nothing written. What conventions actually matter for a US bank pitchbook?',
    'Body text 10-11pt; chart labels and source lines 8-9pt; page header (deal/section name) consistent across all pages; section divider pages use a distinct treatment; never break a single chart or table across two pages; source line at the bottom of every page with the data; one MD/group typographic template applied consistently — pitchbooks are read on a screen and a printed page and the conventions hold for both',
    [
      ['Use whatever font sizes look readable to you and adjust on a page-by-page basis as needed', 'Page-by-page typographic improvisation produces a deck that looks inconsistent — the reader\'s eye picks up the change between pages and reads it as sloppy. Consistency is the convention; variation is the error.'],
      ['Match the formatting of the most recent pitchbook the group sent — exact replication is the safest bet', 'Replicating a prior deck is reasonable as a starting point but the conventions are the discipline, not the file. Group conventions evolve and analysts who only replicate are caught when the convention shifts.'],
      ['Skip the section divider pages — they waste space in a 30-page book', 'Section dividers are not waste — they break the deck into navigable sections for a reader flipping through under time pressure. Cutting them to save pages defeats the navigation logic of a pitch.'],
    ],
    'Pitchbook craftsmanship is a set of conventions that read as "professional" because they are consistent. Body 10-11, source 8-9, header on every page, no broken charts, source lines on every data page. The conventions are invisible when followed and obvious when not — the deck that breaks them is the deck that looks junior, even when the analysis underneath is fine.'),

  q(4351438, 'Career Skills', CHAPTER, 'Source line discipline',
    'Every chart and table in a pitchbook needs a source line. A junior analyst writes "Source: Internal analysis" on every page. What is the actual discipline?',
    'Every chart cites the underlying primary source (Capital IQ, Bloomberg, company filings, broker reports) with a date stamp; "Internal analysis" only appears when the chart is genuinely the bank\'s own synthesis (e.g., a football field, a synergy build), and even then the inputs are sub-cited; the discipline is so a reader can replicate any number in the deck back to its source',
    [
      ['"Source: Internal analysis" is fine as a blanket attribution since most pitchbook content is some form of bank analysis', 'Most pitchbook content is not actually internal — it is filings data, broker estimates, comps from a data provider. Mis-attributing everything to "internal" is both inaccurate and signals to a careful reader (CFO, board member) that the analyst is hiding the data lineage.'],
      ['Source lines are required only on charts where the data could be controversial — straightforward charts do not need them', 'Source lines are required on every chart and data table, controversial or not. The discipline is uniform; selectively skipping source lines is exactly where errors hide because no one has named where the number came from.'],
      ['"Source: company filings" is sufficient for any chart that uses public-company data — specifics are not needed', '"Company filings" is too coarse — was it the 10-K, the 10-Q, the proxy, the investor day? A CFO reading a chart wants to verify against the same document. The specificity is what makes the source line useful, not the existence of it.'],
    ],
    'Source line discipline is part of the deck\'s integrity. Every chart cites the primary source with enough specificity that a careful reader can verify the number themselves. "Internal analysis" is reserved for genuine bank synthesis, with sub-cites where applicable. The blanket-attribution shortcut is a tell that the analyst did not own the data lineage.'),

  q(4351439, 'Career Skills', CHAPTER, 'Output ownership across the stack',
    'A pitch is going to client Monday. Who owns which layer of the output, and what is the failure mode when the layers blur?',
    'Analyst owns the model — every number, every formula, every tie-out; associate owns the slide story — page sequence, narrative arc, what each slide contributes; VP owns the message — what the meeting is for, what the client needs to hear, the room dynamics; failure mode is when an analyst tries to own the story (overproduced slides, mis-positioned), an associate tries to own the message (gets out over their skis), or a VP edits the model directly (introduces errors only the analyst can catch)',
    [
      ['Everyone owns everything — pitchbooks are collaborative and the layers are not really separate', 'In practice the layers are very separate — each role has a specific accountability and the most common failure mode is when the layers blur. The collaboration happens across well-defined ownership, not across an undifferentiated shared accountability.'],
      ['The MD owns everything top-to-bottom and the analyst/associate/VP execute against MD direction', 'The MD owns the *relationship and the message at the top* but does not own the layers underneath day-to-day. The analyst still owns the model in a way the MD does not — and when the MD edits a number directly, the analyst still has to verify it because the MD will not catch a downstream break.'],
      ['Ownership rotates by deal — whichever person is most invested in a given deal owns most layers on that deal', 'Ownership is structural, not deal-by-deal. The roles are designed so that each layer is accountable to one person; rotating ownership by deal collapses the structure and creates the blurring that produces errors.'],
    ],
    'Layered ownership is what lets a pitchbook ship without errors. Analyst owns the model (numbers must be right); associate owns the story (pages must build an argument); VP owns the message (the meeting must achieve something). When an analyst tries to own the story, the deck looks overproduced; when a VP edits the model, errors compound; when an associate tries to own the message, the room dynamics get mishandled. The structure protects each layer.'),

  q(4351440, 'Career Skills', CHAPTER, 'Pre-meeting prep ritual — the binder',
    'Your MD has a 9am client meeting. At 8am you assemble the "binder" — what actually goes in it, and what does the ritual exist to enable?',
    'The latest pitchbook printed and tabbed; the operating model output pages printed; comparable transactions summary; recent press on the client and the buyers/sellers in scope; a one-pager of likely client questions with the bank\'s answers; the MD\'s notes from the last meeting; the ritual exists so the MD can answer any client question without saying "let me get back to you" — the binder is the in-room knowledge base',
    [
      ['Just the pitchbook — modern MDs read everything on iPad and the binder is anachronistic', 'Many MDs still prefer printed materials in client meetings, partly because flipping printed pages is easier in conversation than swiping on a screen. The binder is current practice in US banking, not anachronistic.'],
      ['The pitchbook and the model — the MD will not need anything beyond those two', 'Pitch and model are the core but the binder includes the surrounding context (press, comparable transactions, prior-meeting notes) that lets the MD answer the unexpected question. Without the surrounding context, the MD has to defer on anything outside the deck.'],
      ['The MD\'s personal preferences vary widely so there is no standard binder content', 'MD preferences vary on details (binder vs folder vs iPad with PDFs) but the substance is fairly standardized — deck, model, comps, press, Q&A, prior notes. The variations are formatting, not content.'],
    ],
    'The binder is the in-room knowledge base — what the MD needs to answer any client question without deferring. Deck, model, comps, press, anticipated Q&A, prior meeting notes. The ritual exists because client meetings turn on the unexpected question — the MD who has the answer in hand looks prepared; the one who defers looks unprepared, regardless of the underlying pitch.'),

  q(4351441, 'Career Skills', CHAPTER, 'Printing for in-person meetings',
    'Your MD is going to a Tuesday in-person meeting with the client CEO. You are preparing the printed pitchbook. What is the discipline around printing — color, paper, binding, copy count?',
    'Print on heavy stock (24-32lb), color throughout (not selective color which looks cheap), spiral or velo bind (not staple), one copy per expected attendee plus 1-2 spares, print the night before to catch reprint needs, and verify every chart prints with readable axes and that footnotes did not orphan; the print is part of the impression the meeting makes before anyone has spoken',
    [
      ['Print on standard paper in black and white to save cost — the content is what matters, not the production', 'Black-and-white printing erases charts that depend on color coding (football fields, sensitivity tables, deal-flow diagrams) and signals to the client that the bank treats the meeting as routine. Production matters as part of the message.'],
      ['Print on heavy stock in color but staple instead of binding — saves time and looks fine', 'Stapled decks at a real in-person meeting look junior; the binding is part of the impression. Spiral or velo bind is the standard, and the small extra time at the print shop is part of the prep, not a corner to cut.'],
      ['Print one copy per attendee with no spares — copy count should match exactly so unused copies do not signal over-preparation', 'No-spares is a guarantee that one attendee will lose theirs, one will arrive without one, or an unexpected attendee will join. One per expected attendee plus 1-2 spares is the standard; running out of copies looks worse than over-counting.'],
    ],
    'Print discipline for an in-person meeting is part of the impression the bank makes before anyone has spoken. Heavy stock, full color, proper binding, accurate count plus spares, verified the night before. The deck is the product; the print is the packaging — both have to land.'),
]
