import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const equityResearchRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9580000,
    'Career Skills',
    'Research Note and Investor Debate',
    "Variant perception versus disguised consensus",
    'An analyst initiates on a software firm at Buy. The note argues, "We believe durable demand, a strong management team, and category leadership will drive years of growth." Consensus is already Buy across the Street, estimates sit in line with the company, and the target is built on the sector-average multiple. A PM reads it and asks, "What is your variant perception here?" What is the most accurate critique of this note?',
    'It restates consensus rather than offering a variant perception, because nothing in the thesis, estimates, or multiple differs from what the Street already believes',
    [
      ['The note is fine because the bullish facts about the business are all true and well-supported', 'True facts that the whole market already knows carry no edge; if the price already reflects them, there is no money in being right about consensus.', 'Identify a specific line in the model where your number differs from the Street and the evidence that supports the gap.'],
      ['The problem is that the target uses a multiple instead of a DCF, which is why there is no edge', 'The valuation method is not the issue; a sector-average multiple paired with in-line estimates simply reproduces the consensus price. A DCF tuned to the same assumptions would output the same answer.', 'The edge lives in a differentiated assumption (estimate or multiple), not in switching valuation tools.'],
      ['The note lacks conviction language, so it should assert the bull case more forcefully', 'Louder assertion of a consensus view is still a consensus view; emphasis does not create an informational or analytical edge over the market.', 'Replace volume with a falsifiable claim that differs from the Street, then show why you are right and they are wrong.'],
    ],
    'Variant perception is a well-founded view that is meaningfully different from consensus -- a specific estimate, multiple, or interpretation the Street has not yet adopted. Because price already embeds the consensus, agreeing with it (however true) offers no edge; the alpha comes from being differentiated AND correct. The discriminating test is to name the exact line where your number departs from the Street and the evidence behind the gap.',
    'Floe generated',
    true,
    'Ask what specific number or interpretation in this note the rest of the Street would disagree with -- if none, where is the edge?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9580001,
    'Career Skills',
    'Research Note and Investor Debate',
    "The catalyst path and why act now",
    'An analyst is bullish on an industrial company and writes a Buy note. The valuation page shows 30 percent upside to target. A portfolio manager says, "I agree the stock looks cheap, but cheap stocks can stay cheap. Why should I buy it today instead of revisiting in six months?" Which addition to the note most directly answers that question?',
    'A catalyst path that names the dated, identifiable events (e.g., the Q3 print, a contract renewal, a capacity ramp) expected to move estimates or sentiment and force the gap to close',
    [
      ['A larger discounted-cash-flow model showing even deeper intrinsic value than the 30 percent already cited', 'More valuation evidence answers "is it cheap," which the PM already conceded; it says nothing about what makes the market re-rate the stock now rather than later.', 'Add the dated events that will revalue the stock, not more proof of the value the PM already accepts.'],
      ['A stronger conviction statement and a higher price target to signal the analyst believes in the call', 'Raising the target without a catalyst just widens the upside on paper; it gives no reason the market closes the gap on any particular timeline.', 'Tie the call to specific upcoming events and what each one does to estimates or sentiment.'],
      ['A note that the stock has underperformed for two years and is therefore due for a rebound', 'Mean-reversion-by-time-elapsed is not a catalyst; a cheap stock has no obligation to move, and "it is overdue" is a behavioral hope, not an event.', 'Replace the time-based hope with concrete events on the calendar that re-rate the name.'],
    ],
    'A research note must answer "why now," not just "why cheap." The catalyst path is the sequence of dated, identifiable events -- earnings prints, product launches, contract decisions, regulatory rulings, capital-allocation moves -- expected to push estimates or sentiment in the thesis direction and force the price gap to close. Valuation establishes the prize; the catalyst establishes the timing and the reason a busy investor should act before the rest of the market does.',
    'Floe generated',
    true,
    'Distinguish "the stock is cheap" from "here is the dated event that will make the market agree" -- only the latter answers why act today.',
    { challengeRating: 5 },
  ),
]
