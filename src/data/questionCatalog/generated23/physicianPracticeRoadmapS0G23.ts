import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const physicianPracticeRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9440000,
    'Career Skills',
    'Revenue Cycle and Documentation',
    "E/M leveling under the 2021 rules",
    "An established patient is seen for a stable chronic condition. The clinician documents a problem-focused note whose medical decision-making supports 99213, but also records 34 minutes of total time on the date of the encounter (review of outside records, the visit, and documentation). Under the 2021 office-visit rules, what level may the practice report?",
    "99214, because time alone supports it and you may select the level using whichever single method, MDM or total time, yields the higher code",
    [
      ["99213, because the medical decision-making was only moderate-to-low and MDM governs the level", "Since 2021, MDM is not the only path; you may level by MDM or by total time and choose the higher supportable code. Defaulting to MDM here discards a fully documented 34 minutes that supports 99214.", "Compare both methods and report the higher one the documentation supports."],
      ["99215, by adding the MDM points to the documented minutes to reach the top code", "MDM and time are not additive; you pick one method per encounter, not a blend. Stacking them inflates the level and is exactly what an audit will reverse.", "Use one method, either MDM or total time, for a single encounter and select the highest level that method alone supports."],
      ["99213, because the history and exam were only problem-focused and limit the level", "History and exam no longer drive the office-visit level under the 2021 rules; they are performed as clinically appropriate but do not cap the code. The 34 documented minutes still support 99214.", "Level by MDM or total time; treat history and exam as clinical context, not as level-setters."],
    ],
    "Under the 2021 office/outpatient E/M rules (99202-99215), the level is chosen by either medical decision-making or total time on the date of the encounter, never both, and you may report the higher code that one method supports. History and exam are documented as clinically indicated but no longer set the level. For an established patient, 30-39 minutes of total time supports 99214 even when MDM alone would land at 99213.",
    "Floe generated",
    true,
    "Two doors lead to the level; you walk through one, and you may pick the door that opens onto the higher code.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9440001,
    'Career Skills',
    'Revenue Cycle and Documentation',
    "Modifier 25 justification",
    "A patient comes in solely to have a previously identified skin tag removed, a minor procedure with a zero-day global period. The clinician confirms the lesion, checks vitals, and performs the removal. A coder wants to append modifier 25 and also bill a 99213 office visit. Is that defensible?",
    "No; the only E/M performed was the routine pre-procedure work inherent to the removal, so no separately identifiable E/M exists to support modifier 25",
    [
      ["Yes, because any face-to-face evaluation on the same day as a procedure justifies a separate E/M with modifier 25", "Every minor procedure already includes an inherent E/M component (vitals, confirming the site, appropriateness). Billing that routine work as a separate E/M is precisely the modifier 25 abuse payers audit.", "Append modifier 25 only when a significant, separately identifiable E/M is documented above and beyond the procedure's inherent evaluation."],
      ["Yes, because modifier 25 is required whenever an E/M and a procedure occur on the same date", "Modifier 25 is permitted, not required, and only when a distinct E/M actually occurred; same-day timing alone does not create separate E/M work.", "First confirm a separately identifiable E/M exists and is documented apart from the procedure note, then consider the modifier."],
      ["No, and the practice should also drop the procedure charge to avoid an audit", "The procedure itself was performed and is properly billable; the error is the unsupported add-on E/M, not the procedure. Dropping the legitimate charge writes off earned revenue.", "Bill the procedure as performed and simply omit the unsupported E/M and modifier 25."],
    ],
    "Modifier 25 marks a significant, separately identifiable E/M furnished by the same provider on the day of a procedure, and the E/M must be work above and beyond the evaluation inherent to that procedure, documented distinctly in the record. Because every minor procedure bundles a routine pre-procedure assessment, appending modifier 25 to bill that inherent work as a separate visit is a common and auditable error. When the visit exists only to do the procedure, there is no separate E/M to report.",
    "Floe generated",
    true,
    "Ask what evaluation happened beyond the prep that any such procedure already includes.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9440002,
    'Career Skills',
    'Revenue Cycle and Documentation',
    "Rejection versus denial",
    "A clean-claims report shows a batch of claims that the clearinghouse bounced back the same day for an invalid subscriber ID, never reaching the payer. A biller files formal appeals with clinical documentation for each one. What is the more effective response, and why?",
    "These are rejections, not denials; correct the subscriber ID and resubmit, because the claims were never adjudicated and need no appeal",
    [
      ["Filing appeals is correct, since any claim the practice did not get paid on must be appealed to the payer", "Appeals apply to adjudicated denials, where the payer evaluated the claim and decided not to pay. A rejection was never processed, so there is nothing to appeal; the work is wasted and clocks burn against timely-filing limits.", "Treat a pre-adjudication rejection as a fix-and-resubmit, reserving appeals for denials the payer actually decided."],
      ["Write the claims off as uncollectible because the clearinghouse already refused them", "The clearinghouse rejected for a fixable technical error, not a payment decision; the claims are fully collectible once the subscriber ID is corrected. Writing them off forfeits earned revenue.", "Correct the data error and resubmit before the timely-filing window closes."],
      ["Appeal now but also resubmit the same claims unchanged to cover both paths", "Resubmitting the same invalid subscriber ID just produces the same rejection, and appealing an un-adjudicated claim has nothing to challenge. Neither path can succeed without correcting the underlying registration data.", "Fix the front-end data first, then resubmit a single corrected claim."],
    ],
    "A rejection occurs before adjudication, when a clearinghouse or payer edit bounces a claim for a technical or data error so it is never processed; the fix is to correct the error and resubmit. A denial occurs after the payer adjudicates and decides not to pay for a business or clinical reason; that is what appeals address. Confusing the two wastes effort and, because rejections often trace to a front-end registration error, the durable fix is upstream at registration, not in the appeals queue.",
    "Floe generated",
    true,
    "Was the claim ever actually looked at by the payer, or did it bounce before reaching them?",
    { challengeRating: 5 },
  ),
]
