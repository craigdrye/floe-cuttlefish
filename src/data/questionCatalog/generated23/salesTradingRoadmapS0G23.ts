import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const salesTradingRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9600000,
    'Career Skills',
    'Regulation and Desk Communication',
    "Spoofing versus a genuine resting order",
    "A futures trader posts a large sell order three ticks above the best offer, and within two seconds of a small buy filling on the bid, cancels the large sell. In a recorded chat the trader wrote earlier, \"drop a big offer up top to scare them, then I'll buy the dip and pull it.\" Surveillance flags the pattern. Which feature most clearly makes this spoofing rather than legitimate trading?",
    "The large sell order was non-bona-fide — placed with no intent to execute it, only to create a false impression of supply so the trader could buy more cheaply, and the chat documents that intent",
    [
      ["The order was large relative to the trader's usual size, and oversized orders are themselves manipulative", "Order size alone is not manipulation; desks legitimately post large bona-fide orders they are willing to be hit on. What makes this spoofing is the intent to cancel before execution, not the notional size.", "Anchor on intent and bona-fide status: was the trader genuinely willing to be filled, or was the order placed purely to mislead and then pulled?"],
      ["The trader cancelled the order, and cancelling any posted order within seconds is prohibited", "Fast cancellation is routine and legal; markets see millions of cancels as quotes update. A cancel is only damning when the order was never intended to trade and was placed to deceive — proven here by the chat.", "Distinguish a normal quote update from a non-bona-fide order: the violation is the deceptive purpose, evidenced by the plan to 'scare them' and 'pull it.'"],
      ["The trader profited on the buy, and profiting from your own order activity is front-running", "Front-running is trading ahead of a known client order or pending information; there is no client order or MNPI here. This is creating a false impression of supply/demand, which is spoofing, not front-running.", "Name the correct offense: false-impression order placement with intent to cancel is spoofing/layering, a separate manipulation category from front-running."],
    ],
    "Spoofing is placing a non-bona-fide order — one the trader has no intent to execute — to create a false impression of supply or demand, then cancelling it after the real trade fills on the other side; layering is the multi-price-tier version of the same scheme. The bright line is intent, not size or speed: legitimate large orders the desk is genuinely willing to fill are fine, and cancels are normal. Contemporaneous chats are decisive because surveillance and prosecutors reconstruct intent from the desk's own words, which is exactly why a single message like 'scare them, then pull it' converts an ambiguous pattern into a criminal-conduct case.",
    "Floe generated",
    true,
    "Ask what the order was for: was the trader ever willing to be filled on it, or was it placed only to mislead? The chat answers that.",
    { challengeRating: 6 },
  ),
]
