import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// Series 7 "showcase gems" — three chapters chosen for the conceptual tensions
// that make retail securities genuinely interesting rather than merely
// memorizable:
//   1. Options Strategies — a position's payoff geometry, not its name, is its risk
//   2. Debt Products      — where a bond's credit lives, and the yield the headline hides
//   3. Margin             — SMA as a memory of a price that has already gone
//
// Topic is "Career Skills" verbatim; every item is generated=true with exactly
// three distractor tuples [tempting, flaw, reframe]. IDs run 10089000–10089008.

export const series7Gems: Question[] = [
  // ── Options Strategies ──────────────────────────────────────────────────────
  makeSimpleQuestion(
    10089000,
    'Career Skills',
    'Options Strategies',
    'The lopsided cliff of the short straddle',
    'Dev sells a 100 call and a 100 put on the same stock, same expiry, collecting $8 total — a short straddle, betting the stock barely moves. His friend says "your risk is symmetric, $100 a side." Dev disagrees. On which side of $100 is Dev exposed to a theoretically unlimited loss, and why is the other side merely large?',
    'The upside — a short call has no ceiling because a stock can rise without limit, while the downside loss is capped because the stock can only fall to zero',
    [
      [
        'Neither — selling a call and a put at the same strike cancels out, leaving a roughly riskless position',
        'The two short legs do not offset; they stack. Whichever way the stock breaks, one leg goes deep in the money against him with no offsetting long position.',
        'A short straddle is doubly exposed, not hedged. The premium is the only cushion, and it is thin.',
      ],
      [
        'The downside — a falling stock is the classic danger, so the short put is the unlimited-loss leg',
        'A stock cannot fall below zero, so the short put\'s worst case is bounded at strike minus premium. The short call, by contrast, faces a price that can climb forever.',
        'Bounded loss lives where price is bounded. Zero is a floor; there is no ceiling above.',
      ],
      [
        'Both equally — the call and put are written at the identical strike, so the exposure must be mirror-image',
        'Equal strikes do not mean equal risk. The geometry is asymmetric because the underlying price can travel infinitely up but only finitely down.',
        'Same strike, very different tails. Symmetry of strikes is not symmetry of risk.',
      ],
    ],
    'Lesson: A short straddle looks balanced because both legs share a strike, but its risk is profoundly lopsided: the short call exposes the writer to an unbounded loss (stocks have no upper limit), while the short put\'s loss is capped at the strike minus premium (a stock floors at zero). The deeper idea is that an option position\'s true risk lives in the shape of its payoff diagram, not in the tidy symmetry of its description. "Direction-neutral" describes the bet, not the danger — and the danger is anything but neutral.',
    'Floe generated',
    true,
    'Ask how far the stock can travel in each direction. One way has a wall at zero; the other has open sky.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089001,
    'Career Skills',
    'Options Strategies',
    'The income strategy that only feels like insurance',
    'Maria, 64, holds 100 shares she bought at $50 and sells a covered call for a $3 premium to generate income. The stock then falls steadily to $30. A colleague reassures her, "the covered call protected you on the way down." Where is that reassurance wrong?',
    'The premium only offsets the first $3 of decline; below $47 she loses dollar-for-dollar with the stock, so a covered call caps upside but does not hedge downside',
    [
      [
        'It is correct — writing the call hedges the position, so Maria is shielded as the stock drops',
        'A covered call is an income strategy, not a hedge. The only downside cushion is the premium received, here a mere $3 against a $20 fall.',
        'Selling a call buys a little income, not protection. To actually hedge the downside she would have needed to buy a put.',
      ],
      [
        'It is wrong because the covered call actually increased her downside risk versus holding the stock alone',
        'The premium slightly reduces her loss; it does not increase it. The flaw is calling a small offset "protection," not claiming added risk.',
        'The call makes her marginally better off on the way down than naked stock — but only by the $3 premium, which is not a hedge.',
      ],
      [
        'It is correct as long as the stock stayed above the call\'s strike price the whole time',
        'Downside protection is needed precisely when the stock falls below where she started, not when it stays high. Above the strike there is nothing to protect against.',
        'Protection matters in a decline, and in a decline the premium is the entire defense. A $3 buffer is not a floor.',
      ],
    ],
    'Lesson: A covered call (long stock + short call) sells away the upside above the strike in exchange for premium income. That premium nudges the breakeven down to cost basis minus premium — here $47 — but below that the holder bleeds with the stock all the way to zero. The conceptual hook is that a strategy\'s name advertises its intent, not its protection: "covered" means the call is backed by shares, not that the shareholder is covered against loss. Real downside insurance is a long put, which costs money rather than collecting it — and that asymmetry is the whole point.',
    'Floe generated',
    true,
    'Count exactly how many dollars of decline the $3 premium absorbs before the loss begins.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089002,
    'Career Skills',
    'Options Strategies',
    'Two cages that look alike and trap differently',
    'A client expects a stock pinned near $50 and low volatility. You can build an iron condor (short the 45 put, 55 call; long the 40 put, 60 call) or an iron butterfly (short the 50 put and 50 call; long the 45 put, 55 call). Both are four-leg, defined-risk, range-bound trades. What is the essential difference in where each one actually pays off best?',
    'The iron condor profits across a whole band between its inner strikes, while the iron butterfly maximizes profit at a single pinned price and earns more premium for that precision',
    [
      [
        'There is no real difference — both are range-bound credit strategies, so they pay the same when the stock stays still',
        'They share a category but not a payoff. The butterfly\'s peak is a spike at one strike; the condor\'s peak is a plateau across a range.',
        'Same family, different shapes. One rewards "somewhere in the zone," the other rewards "right on the number."',
      ],
      [
        'The iron butterfly is the safer of the two because it has a wider zone of profit',
        'It is the reverse: the butterfly has a narrower profit zone but a higher peak credit; the condor trades that peak away for a wider, flatter profit band.',
        'Wider comfort comes from the condor. The butterfly concentrates the reward and the precision required.',
      ],
      [
        'The iron condor pays off only if the stock moves sharply, while the butterfly needs it to stay flat',
        'Both want the stock to stay range-bound; neither profits from a sharp move. A big move is the shared enemy of both structures.',
        'These are both bets on calm, not on motion. The difference is how narrowly "calm" must be defined to win.',
      ],
    ],
    'Lesson: Iron condors and iron butterflies are both defined-risk, four-leg, neutral strategies, which is exactly why candidates conflate them. The difference is the profit shape: a condor has a plateau (it wins anywhere between its inner short strikes), while a butterfly has a spike (it wins most at one strike, because both shorts share that strike and collect more premium). The enduring idea is the tradeoff between forgiveness and reward — the wider you spread your shorts, the more outcomes you tolerate but the less you collect. Precision is paid for in premium, and comfort is paid for in profit.',
    'Floe generated',
    true,
    'Picture each payoff diagram: is the peak a flat tabletop between two strikes, or a sharp tent at one strike?',
    { challengeRating: 6 },
  ),

  // ── Debt Products ─────────────────────────────────────────────────────────────
  makeSimpleQuestion(
    10089003,
    'Career Skills',
    'Debt Products',
    'The bond that quietly moves out of its hometown',
    'A city issues a BBB-rated revenue bond backed only by a toll bridge\'s tolls. Years later the city pre-refunds it: proceeds of a new issue buy US Treasuries placed in escrow to pay the old bond to its call date. Overnight the bond is rated AAA. What has actually happened to the source of repayment?',
    'Repayment now comes from the escrowed US Treasuries, not the toll revenue — so its credit reflects the government collateral, no longer the issuer\'s shaky project',
    [
      [
        'The toll bridge must have started generating far more revenue, which is why the rating jumped to AAA',
        'The project\'s cash flows are now irrelevant; the upgrade has nothing to do with traffic on the bridge and everything to do with the Treasuries in escrow.',
        'The rating rose because the collateral changed, not because the bridge got busier. The bond stopped depending on tolls entirely.',
      ],
      [
        'The bond was converted into a general obligation bond, gaining the city\'s full taxing power',
        'Pre-refunding does not pledge the city\'s taxing power; it substitutes Treasury collateral. The bond becomes Treasury-backed, not GO.',
        'It did not gain the taxing power of the city — it gained the credit of the US government sitting in escrow.',
      ],
      [
        'Nothing of substance changed — it is still a municipal revenue bond, and rating agencies simply revised an old, overly harsh grade',
        'Something fundamental changed: the entire repayment source was swapped for Treasuries. The AAA is earned by new collateral, not by re-grading old risk.',
        'The whole point of pre-refunding is that the credit story is replaced, not reinterpreted. New money backs the bond now.',
      ],
    ],
    'Lesson: A pre-refunded (escrowed-to-call) municipal bond is repaid from US Treasuries held in escrow, so its credit detaches from the original issuer and floats up toward AAA — regardless of whether it began life as a wobbly revenue or GO bond. The conceptual hook is that a bond\'s name (revenue, GO) describes its origin, but its credit quality describes who actually pays, and pre-refunding silently swaps the latter. The holder still owns "a muni," yet the risk they bear has effectively become Treasury risk. Where the money truly comes from, not the label on the certificate, is what a rating measures.',
    'Floe generated',
    true,
    'Trace the dollars that will actually pay the holder at maturity. Are they tolls, taxes, or Treasuries?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089004,
    'Career Skills',
    'Debt Products',
    'The 3% bond that beats the 4% bond',
    'A client in the 37% federal bracket compares a corporate bond yielding 4.0% with an in-state municipal bond yielding 3.0%. The muni\'s coupon is lower, so the corporate "obviously" pays more. Using the taxable-equivalent yield, which bond actually delivers more after-tax income, and what is the muni\'s equivalent?',
    'The muni wins: its taxable-equivalent yield is 3.0% / (1 − 0.37) ≈ 4.76%, well above the corporate\'s 4.0%',
    [
      [
        'The corporate wins because 4.0% is plainly higher than 3.0%, and a higher coupon always means more income',
        'A higher coupon is not higher income once tax is taken. The corporate\'s 4.0% is taxed; the muni\'s 3.0% is kept whole, so the right comparison is after-tax.',
        'Compare what the client keeps, not what is printed on the bond. Tax-free 3% can outrun taxable 4%.',
      ],
      [
        'They are equivalent once you subtract a typical tax, so the choice is a wash and comes down to credit risk alone',
        'They are not equivalent: 4.76% versus 4.00% is a meaningful 0.76% gap in the muni\'s favor for this high-bracket client.',
        'Run the actual division. For a 37% bracket the muni\'s edge is real, not negligible.',
      ],
      [
        'The muni wins, but its equivalent is 3.0% × (1 − 0.37) ≈ 1.89%, which still beats the corporate after tax',
        'That formula taxes the tax-free bond, which is backwards. You gross the muni up by dividing by (1 − rate), not multiplying.',
        'To compare a tax-free yield to a taxable one, divide by (1 − tax rate). Multiplying shrinks it the wrong way.',
      ],
    ],
    'Lesson: Taxable-equivalent yield reveals that a bond\'s headline coupon answers the wrong question for a taxed investor. TEY = muni yield / (1 − marginal rate); here 3.0% / 0.63 ≈ 4.76%, beating the taxable 4.0%. The deeper point is that tax brackets, not coupons, decide who a muni is "for": the same 3% bond is a bargain for a 37%-bracket client and a poor choice for someone in a low bracket. Yield is not a property of the bond alone — it is a relationship between the bond and the specific taxpayer holding it.',
    'Floe generated',
    true,
    'Gross the tax-free yield up to its pre-tax equal by dividing by (1 − bracket), then compare.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089005,
    'Career Skills',
    'Debt Products',
    'Which yield tells the truth on a premium callable',
    'A bond bought at $1,080 (a premium) carries a 6% coupon and is callable in five years at par, or matures in twenty years at par. A green associate quotes the client the yield to maturity because "longer is better." Under the yield-to-worst principle, which yield should be quoted, and why is it lower?',
    'Yield to call — on a premium bond an early call is the worst case, because the client loses the premium faster over fewer years, dragging the realized yield below YTM',
    [
      [
        'Yield to maturity, because holding longer always gives the bondholder more total interest and thus the higher yield',
        'On a premium bond, longer is not better for yield. A premium is recovered against par; pulling the redemption forward shortens the time to absorb that loss, lowering the yield.',
        'More coupons do not rescue a premium that must amortize to par. The earlier call is the worse, and the binding, outcome.',
      ],
      [
        'Yield to call, but it is higher than YTM because getting paid back sooner is favorable to the investor',
        'The direction is wrong. For a premium bond YTC is lower, not higher, because the above-par price erodes to par over fewer years.',
        'Early redemption of a premium bond hurts yield. The right yield to quote is the call yield precisely because it is the lower one.',
      ],
      [
        'Whichever yield is higher, since a salesperson should always present the most attractive number to the client',
        'Yield-to-worst exists to prevent exactly this. You quote the lowest plausible yield so the client is not misled by a number a call could erase.',
        'The rule is conservative on purpose: quote the worst, not the best. On a premium callable, that is the yield to call.',
      ],
    ],
    'Lesson: Yield-to-worst tells you to quote the lowest yield the bond could realistically deliver. For a premium bond the danger is an early call, because the price paid above par must shrink to par by redemption; calling it sooner forces that loss into fewer years, so yield to call sits below yield to maturity. (For a discount bond the logic flips and YTM is the worst.) The conceptual hook is that honest yield disclosure assumes the outcome least favorable to the client — a built-in humility that protects buyers from a salesperson\'s most flattering arithmetic.',
    'Floe generated',
    true,
    'A premium must melt down to par by redemption. Does an earlier redemption help or hurt the yield?',
    { challengeRating: 6 },
  ),

  // ── Margin ────────────────────────────────────────────────────────────────────
  makeSimpleQuestion(
    10089006,
    'Career Skills',
    'Margin',
    'The memory of a price that has already vanished',
    'A client\'s long margin account once rose enough to generate $4,000 of SMA. The market then falls sharply and her current excess equity is now zero. She insists "my SMA must have evaporated with the drop." What is actually true about that $4,000?',
    'The $4,000 SMA persists — once recorded it does not fall when the market falls; it only shrinks when she uses it, though withdrawing it must still leave the account above maintenance',
    [
      [
        'She is right — SMA tracks current excess equity, so when equity fell to zero the SMA fell to zero with it',
        'SMA is a high-water mark, not a live mirror of equity. It is written down only when used, not when the market drops, which is exactly what makes it counterintuitive.',
        'SMA remembers the high point; it does not follow the equity back down. Falling markets erase excess equity, not the SMA line.',
      ],
      [
        'The $4,000 is real cash sitting in her account that she can simply withdraw at any time, no strings attached',
        'SMA is not cash — it is a line of credit recorded by the firm. Withdrawing it is borrowing, and only allowed if the account still meets maintenance afterward.',
        'SMA is a memo of borrowing power, not a balance of money. Spending it adds debt and is gated by the maintenance test.',
      ],
      [
        'The SMA doubled to $8,000 because falling prices increase a margin account\'s buying power',
        'Falling prices reduce equity and buying power, never increase them. SMA does not grow on a decline; at best it stays put.',
        'A drop cannot manufacture buying power. SMA holds at its prior level; it does not multiply when the account weakens.',
      ],
    ],
    'Lesson: SMA (the Special Memorandum Account) is a "memo," not money: it records excess equity once generated and then behaves like a high-water mark — it stays put when the market falls and is reduced only when the client borrows against it or withdraws it. Even then, the withdrawal is allowed only if the account still satisfies maintenance margin. The conceptual hook is that SMA is a memory of a favorable past, not a measurement of the present, which is why it can persist in an account whose equity has already collapsed — and why treating that stale credit line as spendable cash is how leverage quietly compounds risk.',
    'Floe generated',
    true,
    'Ask what makes SMA go down. It is not a falling market — it is the act of using it.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089007,
    'Career Skills',
    'Margin',
    'When the loan stays fixed and the value does not',
    'A client buys $20,000 of stock on 50% margin: $10,000 of her cash and a $10,000 loan from the firm (the debit). The stock then falls 40% to $12,000. Her equity is now $2,000. A maintenance call triggers if equity drops below 25% of market value. Is she called, and what is the deeper reason a 40% drop wiped out so much more than 40% of her stake?',
    'Yes — 25% of $12,000 is $3,000 and she has only $2,000, so she is called; the loan is fixed in dollars while the asset shrinks, so every loss lands entirely on her equity',
    [
      [
        'No call — her loss is only 40%, matching the stock, and 40% is comfortably under the 25% maintenance trigger',
        'Her loss is not 40% of her stake; it is 80%, because the fixed loan absorbs none of the decline. And the trigger is equity below 25% of market value, which she breaches.',
        'Leverage means losses hit equity, not the loan. A 40% asset drop became an 80% equity loss, and equity now fails the 25% test.',
      ],
      [
        'No call, because her $10,000 cash contribution is more than enough to cover any maintenance requirement',
        'The original cash is gone into the position; what matters is current equity ($2,000) versus the current requirement ($3,000), and current equity falls short.',
        'Maintenance looks at equity today, not the cash deposited yesterday. Today\'s equity is below the line.',
      ],
      [
        'Yes, she is called, but only because the loan itself grew larger as the stock fell',
        'The loan did not grow — that is the crux. The debit stayed fixed at $10,000; the damage came entirely from the asset shrinking around a constant loan.',
        'The debt is a fixed anchor, not a moving one. It is the asset that fell, and a fixed loan makes the equity loss outsized.',
      ],
    ],
    'Lesson: Margin\'s danger is arithmetic, not psychology. The broker\'s loan is fixed in dollars, so when the asset falls, the entire decline is subtracted from the client\'s equity — a 40% drop on a 2-to-1 position becomes an 80% equity loss. Maintenance margin (here 25% of the $12,000 market value = $3,000) is the floor that forces fresh cash when equity thins; her $2,000 falls short and triggers the call. The enduring idea is that leverage is asymmetric by construction: borrowing magnifies gains and losses alike, because a constant debt cannot share in the bad news. The same lever that lifts you faster drops you harder.',
    'Floe generated',
    true,
    'The loan stays $10,000 no matter what. Subtract it from the new market value to find current equity, then test it against 25%.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10089008,
    'Career Skills',
    'Margin',
    'The number that locks money in to keep it nimble',
    'A new active trader funds an account with exactly $25,000 to qualify as a pattern day trader, deposits the cash on Monday, and asks to wire it back out Tuesday afternoon "since I met the minimum." Why does the firm refuse, and what does the $25,000 requirement actually represent?',
    'The $25,000 is a minimum equity that must remain in the account, and cash deposited to meet it cannot be withdrawn for two business days — it is a standing floor, not a deposit you can reclaim once "checked off"',
    [
      [
        'The firm refuses because the $25,000 is a fee paid to FINRA for day-trading privileges and is never returned',
        'It is not a fee; it is the trader\'s own equity. The money stays hers — it simply must remain in the account as a maintained floor and cannot be pulled for two business days.',
        'No one keeps the $25,000. It is a floor she must hold, not a charge she pays away.',
      ],
      [
        'The firm should allow the withdrawal — once the $25,000 minimum has been touched even momentarily, the PDT status is permanently granted',
        'The minimum is continuous, not a one-time gate. Withdrawing it drops equity below $25,000 and freezes day-trading buying power until it is restored.',
        'PDT status is conditioned on staying above the line, not on having crossed it once. Drop below and the privilege freezes.',
      ],
      [
        'The firm refuses because day-trading buying power is only 2x equity, so she needs $50,000 to trade at all',
        'Day-trading buying power is up to 4x maintenance excess, not 2x, and that is a separate point from why the deposit is locked. The withdrawal is barred by the two-day hold and the standing minimum.',
        'The buying-power multiple is 4x, and it is beside the question. The block here is the maintained $25,000 floor and the settlement hold.',
      ],
    ],
    'Lesson: The pattern-day-trader rule requires a flagged account to maintain at least $25,000 in equity at all times, and cash deposited to satisfy it is locked for two business days. The conceptual hook is the paradox baked into the rule: a sum is frozen in place precisely so the trader can move quickly within the market. Regulators demand standing skin in the game from those who trade most aggressively, because the privilege of 4x day-trading buying power is granted only to accounts that keep a real cushion underneath it. The minimum is a continuously tested floor, not a turnstile you pass through once.',
    'Floe generated',
    true,
    'Ask whether $25,000 is something paid away, or something that must stay sitting in the account.',
    { challengeRating: 6 },
  ),
]
