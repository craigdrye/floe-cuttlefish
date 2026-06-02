import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// Investment Banking Roadmap — shard investmentBankingRoadmap#0, generated23 bank.
// Five integrative capstone questions anchored to the canonical Northwind
// Industries sell-side mandate (US specialty industrial distributor:
// ~$450M revenue, ~$55M adjusted EBITDA, $80M net debt, founder-CEO retiring,
// family minority stake rolling). Each forces the analyst to SYNTHESIZE across
// chapters — net-debt bridge (Ch2), valuation (Ch3), accretion/dilution and
// financing mix (Ch4/5), tie-out and QC (Ch7), and client-ready judgment (Ch8)
// — the way the capstone analyst packet actually requires. Voice and depth
// match the existing 4340100–4340102 trio and the 4351500-series bank.

export const investmentBankingRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9560000,
    'Career Skills',
    'Capstone: Sell-Side Analyst Packet and Synthesis',
    "EV-to-equity bridge for the board",
    'The winning bid for Northwind comes in at a $660M enterprise value on a cash-free, debt-free basis. The board asks the deal team for the number that matters to them: what the family actually walks away with at signing. Northwind carries $80M of net debt, the agreement sets a $35M net-working-capital peg (delivered at the peg, no true-up swing assumed), the family is rolling $40M of equity into the buyer, and estimated transaction expenses (advisory, legal, QofE) total $15M. What should the analyst put in front of the board as the headline?',
    'Bridge EV to equity proceeds: $660M EV minus $80M net debt = $580M equity value; minus the $40M family rollover and $15M of transaction expenses leaves roughly $525M of cash to the selling shareholders at close, and the analyst should present that net-to-seller figure, not the $660M EV',
    [
      ["Present the $660M enterprise value as the headline because that is the agreed purchase price", 'A cash-free, debt-free EV is what the buyer pays for the business, not what the seller receives. Quoting $660M to a board deciding whether to sell overstates their proceeds by the net debt, rollover, and fees — exactly the bridge the board needs.', 'Lead with net-to-seller, not EV: walk EV to equity value to cash-at-close before you put a headline in front of the board.'],
      ["Quote $580M equity value as the take-home, since net debt is the only adjustment between EV and what shareholders get", 'The EV-to-equity bridge gets you to $580M of equity value, but cash to the seller at close is lower still — the $40M rollover is reinvested, not received, and the $15M of fees comes out of proceeds. Stopping at equity value double-counts money the family does not actually pocket.', 'Carry the bridge past equity value: subtract the reinvested rollover and the fees to reach the cash the family actually banks.'],
      ["Add the $80M net debt to the $660M EV to reach a $740M equity figure for the board", 'Net debt is subtracted from EV to reach equity value, not added. Adding it inverts the bridge and hands the board a number $160M too high — the kind of untied figure that destroys the deal team\'s credibility in the room.', 'Subtract net debt from EV to reach equity value, never add it — and sanity-check the direction of every bridge item before it hits the deck.'],
    ],
    'The EV-to-equity bridge is the analyst\'s synthesis of Chapter 2 (net-debt bridge) into a client deliverable. A board deciding whether to sell cares about cash to shareholders at close, which is EV minus net debt minus rollover minus transaction expenses (and net of any working-capital true-up). Quoting the EV as if it were proceeds is the single most common — and most embarrassing — bridge error in a board deck.',
    'Floe generated',
    true,
    'The board is not buying the business; they are selling it. Walk the bridge from what the buyer pays to what the family banks, and stop only when you reach cash in hand.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9560001,
    'Career Skills',
    'Capstone: Sell-Side Analyst Packet and Synthesis',
    "Risk-adjusting a structured bid against all-cash",
    'Two final bids for Northwind land on the same deadline. Bidder A (a strategic) offers $640M all-cash, fully financed, with a clean balance sheet and no contingent consideration. Bidder B (a sponsor) offers a $680M headline: $590M cash at close, a $40M escrow released over 18 months tied to customer-retention reps, and a $50M earnout payable in year three if EBITDA exceeds $62M (current is $55M). The board wants to know which is the better deal for a retiring founder who values certainty. How should the analyst frame the comparison?',
    'Normalize to risk-adjusted, time-adjusted proceeds rather than headline: Bidder B\'s $680M is really $590M near-certain plus $40M at modest risk plus $50M genuinely contingent on hitting EBITDA growth the seller will no longer control post-close — so for a certainty-seeking retiree, Bidder A\'s $640M all-cash likely clears higher on a risk-adjusted basis, and the analyst should present the bids decomposed into certain, contingent, and at-risk dollars',
    [
      ["Recommend Bidder B because the $680M headline is $40M higher and a board should maximize price", 'Comparing headlines treats a contingent earnout dollar as equal to a certain cash dollar — it is not. The $50M earnout depends on post-close EBITDA growth the departing founder cannot influence; counting it at face value is exactly the error a sell-side analyst exists to prevent.', 'Weight each dollar by certainty: decompose the bid into certain, escrowed, and contingent pieces before comparing it to the all-cash offer.'],
      ["Recommend Bidder A because all-cash deals always beat structured deals", 'Certainty has value, but "always" is not analysis. The right move is to decompose Bidder B into certain, escrowed, and earnout dollars and compare the risk-adjusted total to Bidder A\'s $640M — a structured bid with a small earnout could still win if the contingent piece is reachable and the cash floor is competitive.', 'Drop the absolute rule: risk-adjust B\'s components and compare the total to A\'s $640M, since a reachable earnout can still win.'],
      ["Average the two headlines to a $660M expected value and present that as the deal range", 'Averaging two different bids produces a number neither buyer offered and obscures the structure question entirely. The board needs the bids decomposed and risk-adjusted, not blended into a midpoint that misstates what either party would actually sign.', 'Never blend two bids into a midpoint neither party offered; present them decomposed and risk-adjusted instead.'],
    ],
    'A higher headline with an earnout and escrow is not necessarily a higher cleared price. The analyst decomposes each bid into certain cash, escrowed-and-likely, and genuinely contingent dollars, then risk- and time-adjusts — especially when the seller is a retiring founder who will not control the post-close EBITDA an earnout rides on. Headline price is a marketing number; risk-adjusted proceeds are the decision number.',
    'Floe generated',
    true,
    'A contingent dollar and a certain dollar are not the same dollar. Decompose each bid before you compare, and weight the pieces by who controls the outcome after close.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9560002,
    'Career Skills',
    'Capstone: Sell-Side Analyst Packet and Synthesis',
    "Tying out the board deck before it goes out",
    'It is 9pm and the Northwind board deck goes to the client at 7am. On page 3 the executive summary states Northwind\'s adjusted EBITDA as $55M; on page 9 the football field is built off an $11.0x high multiple implying a $605M ceiling, but the implied math only works if EBITDA is $55M; on page 14 the comps table footnote shows adjusted EBITDA of $53M because it omits the $2M of documented bolt-on synergies the rest of the deck includes. The MD has not seen the merged draft. What is the analyst\'s move?',
    'Reconcile the inconsistency before sending: confirm the defensible adjusted-EBITDA figure (the $55M including documented synergies), correct page 14\'s footnote and any multiple math that flows from it so every page ties to the same number, then flag the change to the MD with a one-line note rather than circulating an unreconciled deck',
    [
      ["Send the deck as-is and note the $53M-vs-$55M discrepancy verbally in the morning, since the difference is only $2M", 'A $2M EBITDA gap moves the implied valuation by roughly $20M at an 11x multiple — and a client who spots two different EBITDA numbers in one deck stops trusting every figure in it. An untied number found by the client is the failure mode the QC discipline exists to prevent.', 'Reconcile before sending: a $2M gap is ~$20M of value at 11x, and a client-found mismatch taints confidence in the whole deck.'],
      ["Change page 3 down to $53M to match the comps footnote, because the most conservative figure is the safest to show a board", 'Conservatism is not the test; consistency to the defensible figure is. The $55M includes documented bolt-on synergies the rest of the deck supports — dropping the whole deck to $53M discards a credited adjustment and still leaves the analyst guessing rather than reconciling to the right number.', 'Reconcile to the defensible number ($55M with documented synergies), not to whichever figure is lowest.'],
      ["Leave the pages inconsistent and add a footnote on page 14 explaining that different sections use different EBITDA definitions", 'A board deck must speak with one number. A footnote rationalizing two different EBITDA figures advertises that the deck was not tied out and invites the client to ask which other numbers disagree — the opposite of the credibility a clean tie-out buys.', 'Make every page tie to one number rather than footnoting away a contradiction the client will notice.'],
    ],
    'Tie-out is the Chapter 7 discipline that protects every analytical chapter that feeds the deck: a multiple on one page must reconcile to the EBITDA and football field on another, or the document is not client-ready. When numbers disagree, the analyst reconciles to the single defensible figure, fixes the dependent math, and flags the change up — never circulates an unreconciled draft hoping no one reads both pages.',
    'Floe generated',
    true,
    'A client who finds two different numbers in one deck rechecks all of them. Pick the defensible figure, make every dependent page agree, and tell the MD what you changed.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9560003,
    'Career Skills',
    'Capstone: Sell-Side Analyst Packet and Synthesis',
    "Reading a strategic buyer's accretion math",
    'A strategic distributor circling Northwind trades at roughly 18x earnings; Northwind would be acquired at an implied ~11x EBITDA, which works out to a meaningfully lower earnings multiple than the buyer\'s own, and the strategic would fund the deal largely with stock plus modestly priced debt. The MD asks you, as the sell-side analyst, what this tells you about how hard this buyer can lean in on price. What is the most useful read for the packet?',
    'Because the strategic\'s own multiple is well above the multiple it would pay for Northwind, the deal is structurally accretive to the buyer\'s EPS before synergies — which means the buyer has room to raise its bid and still report accretion, so the analyst should treat this strategic as a credible top-of-range bidder and prepare to push it toward the precedent-transaction end of the football field',
    [
      ["Conclude the buyer will bid low, because acquiring a lower-multiple business means the buyer thinks Northwind is worth less", 'A lower acquisition multiple than the buyer\'s own does not signal a low opinion of Northwind — it is precisely what makes the deal accretive and gives the buyer headroom to pay up. Reading it as a reason to expect a weak bid inverts the accretion logic.', 'Read the multiple gap as accretion headroom, not a low opinion — expect a stronger bid from this buyer, not a weaker one.'],
      ["Conclude the deal must be dilutive because the buyer is issuing stock to fund it", 'Issuing stock does not by itself make a deal dilutive. When the acquirer\'s P/E exceeds the effective multiple paid for the target, a stock-funded acquisition of lower-multiple earnings is accretive — the financing mix matters, but the multiple gap is what drives the EPS effect here.', 'Check the multiple gap, not just the funding source: acquirer P/E above the multiple paid means stock-funded accretion, not dilution.'],
      ["Conclude accretion proves the deal is good for the buyer, so the analyst should assume this bidder wins regardless of price", 'Accretion measures the EPS arithmetic, not whether the deal creates value or whether this buyer outbids the field. Treating "accretive" as "good and certain to win" skips the competitive-tension and value questions the sell-side process still has to run.', 'Treat accretion as EPS arithmetic, not a verdict — still run the value and competitive-tension questions before assuming this bidder wins.'],
    ],
    'For a largely stock-funded acquisition, the rule of thumb is that buying a target at a lower effective earnings multiple than the acquirer\'s own P/E is accretive to the acquirer\'s EPS before synergies. On the sell side, that arithmetic is leverage: a structurally accretive strategic can raise its bid and still tell its own board the deal adds to EPS — so the analyst reads accretion headroom as a reason to push that bidder up the range, not as a verdict on whether the deal is wise or won.',
    'Floe generated',
    true,
    'Accretion is arithmetic about the multiple gap, not a judgment on quality. If the buyer pays a lower multiple than it trades at, ask how much higher it could go and still report accretion.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9560004,
    'Career Skills',
    'Capstone: Sell-Side Analyst Packet and Synthesis',
    "The two-sentence client recommendation",
    'The Northwind process is at the recommendation stage. Your analysis is complete: the strategic at $640M all-cash offers the higher-certainty path, the sponsor at $680M carries earnout and financing risk, the board values certainty for a retiring founder, and the one real risk is that the strategic\'s 4-month antitrust path leaves a window for disruption. The MD will deliver the call to the board and needs it in a form he can repeat. What should the analyst hand up?',
    'A two-sentence recommendation that names the call, the reasons, and the principal risk: "Recommend accepting the strategic\'s $640M all-cash offer — it is the higher-certainty path for a founder prioritizing clean proceeds, and the modest headline gap to the sponsor is more than offset by the sponsor\'s earnout and financing-condition risk. The principal risk is the strategic\'s four-month antitrust timeline, which we propose mitigating with a meaningful reverse termination fee."',
    [
      ["Hand up a two-page memo walking through every methodology, bid term, and sensitivity so the board has the full analysis", 'A board hears the recommendation through the MD in a meeting, not by reading the analyst\'s full workpapers. Burying the call inside two pages of analysis forces the MD to extract it live — the analyst\'s job is to synthesize the workpapers into the call the MD can repeat, with the detail held in reserve for questions.', 'Compress the workpapers into the call the MD can repeat, and hold the methodology detail in reserve for questions.'],
      ["Hand up a recommendation that lists both bids\' pros and cons evenly and lets the board decide which they prefer", 'The board hired the bank for a view, not a balanced menu. An even pro/con list with no verdict pushes the analyst\'s judgment back onto the client — confusing thoroughness with value and leaving the MD nothing to say beyond \"it depends.\"', 'Give the board a view: name the recommended call, not an even menu that hands the decision back to the client.'],
      ["Hand up the one-sentence call alone — \"take the strategic\" — and let the MD supply the reasons from memory", 'The verdict without its reasons and principal risk is not a deliverable a senior banker can defend if the board pushes back. A recommendation a board can act on names the call, the two or three reasons, and the main risk together — the one-liner strips out exactly what makes it defensible.', 'Attach the two or three reasons and the principal risk to the call, or it will not survive the board pushing back.'],
    ],
    'A client-ready recommendation states the call, the two or three reasons behind it, and the principal risk in language the decision-maker can repeat — typically two sentences, not a memo and not a bare verdict. The analyst\'s synthesis job is to compress complete analysis into a defensible call with its rationale and its main risk attached; volume is not value, and an unhedged "it depends" is the opposite of the judgment the senior team needs in the room.',
    'Floe generated',
    true,
    'The test is whether the MD can repeat it to the board verbatim. That means the call, the why, and the risk in one breath — not the workpapers and not a bare verdict.',
    { challengeRating: 5 },
  ),
]
