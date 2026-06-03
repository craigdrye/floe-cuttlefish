import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// SIE "showcase gems" — three chapters chosen because each hides a genuine
// conceptual tension underneath the rote vocabulary the exam is famous for:
//   1. Products and Risks: Debt        — why the issuer's best case is the holder's worst case
//   2. Trading and Prohibited Activities — when avoiding a report is itself the crime
//   3. Customer Accounts and Suitability — "best interest" is not one standard but two
//
// Topic is "Career Skills" verbatim; every item is generated=true with exactly
// three distractor tuples [tempting wrong answer, bespoke flaw, reframe].

export const sieGems: Question[] = [
  // ── Products and Risks: Debt ───────────────────────────────────────────────
  makeSimpleQuestion(
    10094000,
    'Career Skills',
    'Products and Risks: Debt',
    'The yield your broker is allowed to quote',
    'You buy a callable corporate bond trading at a premium — its 6% coupon sits above today\'s market rate, so it sells for more than face value. The issuer can call it early. When your statement quotes a yield, regulators require the broker to show the lowest of all possible yields. For a premium callable bond, which yield is that?',
    'Yield to call — calling early ends the high coupon sooner, so it is the worst outcome for the holder and therefore the yield that must be disclosed',
    [
      [
        'Yield to maturity, because holding to maturity collects the most coupon payments',
        'For a premium bond the call shortens the life of an above-market coupon, so YTM is the optimistic case, not the worst — the rule demands the worst.',
        'Premium + callable means the call hurts you; the worst yield is yield to call, which is exactly what "yield to worst" selects.',
      ],
      [
        'Current yield, since it is the simplest and most conservative figure',
        'Current yield ignores the capital loss as a premium bond pulls toward par and ignores the call entirely, so it is not a "lowest possible" measure at all.',
        'Current yield is just coupon divided by price; "yield to worst" is a comparison across full-return scenarios, and the call scenario wins here.',
      ],
      [
        'The nominal (coupon) yield of 6%, because that is the contractual rate',
        'The coupon is fixed at issuance and says nothing about the premium you paid or the call; it cannot be the disclosed yield because it ignores your actual cost.',
        'The 6% is why the bond trades at a premium in the first place; the relevant yield must account for that premium being clawed back at the call.',
      ],
    ],
    'Lesson: A bond is a tug-of-war between two parties who optimize in opposite directions. The issuer calls a bond exactly when doing so is cheapest for it — when rates have fallen and it can refinance the above-market coupon. But the issuer\'s cheapest moment is the holder\'s costliest one: you lose the rich coupon precisely when you can only reinvest at lower rates. "Yield to worst" institutionalizes this asymmetry into a disclosure rule, forcing the broker to quote the scenario where the counterparty acts in its own interest against you. The deep point: in finance, an embedded option always belongs to one side, and the price already reflects who holds it.',
    'Floe generated',
    true,
    'Premium + callable: ask who benefits from the call, then quote the yield that reflects them acting on it.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094001,
    'Career Skills',
    'Products and Risks: Debt',
    'The "agency" bond that the government does not actually back',
    'Three mortgage-backed bonds sit on a desk: a Ginnie Mae, a Fannie Mae, and a Freddie Mac. A trainee says all three are "government bonds, so they are all risk-free." Which one is actually backed by the full faith and credit of the U.S. Treasury?',
    'Only Ginnie Mae — it carries an explicit U.S. government guarantee; Fannie and Freddie are GSEs with only an implicit, unguaranteed backing',
    [
      [
        'All three, because all three are federal housing agencies',
        'Fannie Mae and Freddie Mac are government-sponsored enterprises — private, shareholder-owned companies — not government agencies, and their debt is not Treasury-guaranteed.',
        'Sounding governmental is not the same as being guaranteed; only Ginnie Mae, a true government corporation, carries full faith and credit.',
      ],
      [
        'None of them, because mortgage-backed securities are private-sector products',
        'This overcorrects: Ginnie Mae securities genuinely do carry an explicit U.S. guarantee, so it is wrong to say none qualify.',
        'MBS can be government-guaranteed; the question is which issuer the Treasury actually stands behind, and that is Ginnie Mae.',
      ],
      [
        'Fannie and Freddie, since the 2008 conservatorship put them under government control',
        'Conservatorship gave the government control and a credit line, but Congress never converted the implicit backing into an explicit, full-faith-and-credit guarantee.',
        'Control is not a guarantee; even after 2008 Fannie and Freddie debt remains implicitly, not explicitly, backed.',
      ],
    ],
    'Lesson: Markets price the difference between a promise that is written down and a promise that is merely assumed. Ginnie Mae carries an explicit Treasury guarantee, so its bonds behave almost like Treasuries. Fannie and Freddie were long thought "too big to fail," and investors treated that assumption as a guarantee — until 2008 tested it. They were rescued, but through conservatorship, not by elevating their debt to full faith and credit. The lasting lesson: an implicit guarantee is a belief about how others will behave under stress, and beliefs can reprice violently. The single word "explicit" is the entire difference between a safe asset and a confident guess.',
    'Floe generated',
    true,
    'Two of the three are private, shareholder-owned companies; only one is a true government corporation.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094002,
    'Career Skills',
    'Products and Risks: Debt',
    'Why a tax-free bond can pay you more by paying less',
    'A municipal bond yields 4% federally tax-free. A comparable corporate bond yields 5%, fully taxable. Aiden is in the 37% federal bracket. Ignoring all else, which bond leaves more money in his pocket, and what is the muni\'s taxable-equivalent yield?',
    'The municipal bond — its taxable-equivalent yield is about 6.3% (4% / (1 − 0.37)), which beats the corporate\'s 5%',
    [
      [
        'The corporate bond, because 5% is simply a higher yield than 4%',
        'Comparing the stated yields directly ignores tax: the corporate\'s 5% is taxed away to about 3.15% after the 37% bite, while the muni\'s 4% is kept whole.',
        'You must compare after-tax to after-tax; grossing the muni up to its taxable equivalent (6.3%) shows it wins for a high-bracket investor.',
      ],
      [
        'The municipal bond, with a taxable-equivalent yield of about 2.5% (4% × (1 − 0.37))',
        'This multiplies by (1 − tax rate), which shrinks the yield — the correct operation divides by (1 − tax rate) to gross a tax-free yield up to its pre-tax equal.',
        'Tax-equivalent yield asks "what taxable yield would survive to this," so you divide the tax-free yield by (1 − rate), giving 6.3%, not 2.5%.',
      ],
      [
        'They are identical once you account for tax, since both are bonds of similar quality',
        'Equal quality does not mean equal after-tax yield; the whole point of the muni\'s tax exemption is that it changes the comparison in the holder\'s bracket.',
        'The tax shelter is real money — at 37% it turns a 4% coupon into a 6.3% taxable equivalent, so the bonds are not a wash.',
      ],
    ],
    'Lesson: Tax-equivalent yield is the trick that lets you compare two bonds living under different tax regimes by translating both into the same currency: pre-tax yield. The formula TEY = muni yield / (1 − tax rate) reveals something counterintuitive — a lower headline number can be the richer investment once the tax shelter is restored. The deeper idea is that the value of a tax exemption is not fixed; it scales with the investor\'s bracket. The same 4% muni is worth a 6.3% equivalent to Aiden at 37% but only about 5.3% to someone at 24%. Price reflects the marginal buyer, which is why high-tax investors crowd into munis — the exemption is worth more to them than to anyone else.',
    'Floe generated',
    true,
    'Divide the tax-free yield by (1 − tax rate) to find what taxable yield it equals, then compare.',
    { challengeRating: 6 },
  ),

  // ── Trading and Prohibited Activities ──────────────────────────────────────
  makeSimpleQuestion(
    10094003,
    'Career Skills',
    'Trading and Prohibited Activities',
    'The crime of being careful',
    'A customer has $15,000 in cash to deposit. Knowing that banks file a Currency Transaction Report on cash of more than $10,000, she splits it into two deposits of $7,500 on two different days specifically to stay under the threshold. The money is entirely legitimate — earned, taxed, clean. Has she committed a federal crime?',
    'Yes — "structuring" deposits to evade the reporting requirement is itself a crime under 31 USC 5324, regardless of whether the underlying money is clean',
    [
      [
        'No, because the money is legitimate and no other crime was committed',
        'The statute criminalizes the act of evading the report itself; it does not require the funds to be dirty or any predicate offense to exist.',
        'The violation is the evasion, not the source — clean money structured to dodge a CTR is still a federal felony.',
      ],
      [
        'No, because neither deposit exceeded $10,000, so no report was even required',
        'That each deposit fell under the threshold is precisely what makes it structuring; the law reaches transactions designed to keep any single one below the trigger.',
        'Staying under the line on purpose is the offense — the absence of a triggered CTR is the evidence of intent, not a defense.',
      ],
      [
        'No, but the bank must file a Suspicious Activity Report, which resolves the matter',
        'A SAR may indeed be filed, but the customer\'s own conduct is independently criminal; the bank\'s filing does not cure or excuse her violation.',
        'The SAR is the bank\'s duty; the structuring statute is the customer\'s liability — two separate obligations, not one.',
      ],
    ],
    'Lesson: Most laws punish a harmful act and treat reporting as secondary. Structuring inverts this: the reportable act (depositing cash) is perfectly legal, and it is the deliberate avoidance of the report that the law makes a felony. Congress did this because money launderers could otherwise defeat the entire reporting system simply by staying a dollar under each threshold. The unsettling implication is that intent alone — the purpose of keeping each transaction small — converts innocent behavior into a crime, even when the money is spotless. It teaches a recurring theme of financial regulation: the integrity of a monitoring system can be protected by making its evasion an offense in its own right, separate from anything the monitoring was meant to catch.',
    'Floe generated',
    true,
    'Ask what the law is actually protecting — the cleanliness of the money, or the integrity of the reporting system.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094004,
    'Career Skills',
    'Trading and Prohibited Activities',
    'The report you can never mention',
    'A firm files a Suspicious Activity Report on a long-time client whose wire patterns suddenly look like layering. The client, sensing something, asks his rep directly: "Did you flag my account to the government?" What is the rep legally permitted to say?',
    'Nothing that reveals the SAR — disclosing that a SAR was filed, or even its existence, to the subject is itself prohibited and carries civil and criminal penalties',
    [
      [
        'The rep must confirm it, because customers have a right to know what is reported about them',
        'SAR confidentiality overrides ordinary disclosure expectations; the law specifically forbids telling the subject, precisely to protect the investigation.',
        'There is no customer "right to know" here — the rep is legally gagged, and confirming the SAR would itself be a violation.',
      ],
      [
        'The rep may confirm it but must not share the contents of the report',
        'Even acknowledging that a SAR exists is forbidden; the prohibition covers the fact of filing, not merely the details inside it.',
        'The line is not "contents vs. existence" — both are confidential; the rep cannot even admit a SAR was filed.',
      ],
      [
        'The rep can disclose it because a CTR-style report is public record',
        'This confuses a SAR with a CTR; CTRs are mechanical and not confidential to the subject, but SARs are strictly confidential by design.',
        'A SAR is suspicion-based and secret; the public, mechanical filing the rep is thinking of is the CTR, which is a different report entirely.',
      ],
    ],
    'Lesson: A SAR is one of the few documents whose very existence is a secret from the person it concerns. The reason is structural: the report\'s value depends on the suspect not knowing it was filed, because a "tipped-off" subject can move money, destroy records, or flee before law enforcement acts. So the law builds confidentiality into the tool itself, forbidding the filer from confirming or denying a SAR even to the customer who asks point-blank. This sits in sharp contrast to the CTR, which is mechanical, threshold-driven, and not secret. The deep idea: not all reporting is alike — some monitoring works by being visible and routine, and some works only by being invisible, and the rules treat the two as opposites.',
    'Floe generated',
    true,
    'One of these reports works because it is routine and visible; the other works only because the subject never learns of it.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094005,
    'Career Skills',
    'Trading and Prohibited Activities',
    'The trades that are individually fine but collectively forbidden',
    'A broker has discretion over a retiree\'s account. Every single trade he makes is suitable on its own — good companies, sensible positions. But he trades the account dozens of times a month, generating heavy commissions while the portfolio barely changes its overall shape. No individual trade is wrong. What prohibited practice is this?',
    'Churning — excessive trading driven by the broker\'s commission interest rather than the customer\'s, judged by the pattern\'s frequency and cost, not any single trade',
    [
      [
        'Nothing prohibited, because each trade was individually suitable',
        'Suitability is judged trade-by-trade, but churning is judged across the whole pattern; a sequence of individually fine trades can still be excessive in aggregate.',
        'The violation lives in the volume, not in any one trade — which is exactly why "every trade was suitable" is no defense.',
      ],
      [
        'Front running, because the broker traded ahead of the customer for his own benefit',
        'Front running means trading on advance knowledge of a pending order; here there is no order being jumped, only excessive turnover for commissions.',
        'Front running is about timing against a known order; churning is about volume against the customer\'s interest — different sins.',
      ],
      [
        'Painting the tape, because the heavy trading creates a misleading impression of activity',
        'Painting the tape is manipulating a security\'s apparent market activity to deceive other investors; churning targets the customer\'s account, not the public market.',
        'Painting the tape deceives the market about a stock; churning extracts commissions from one client — the harm and the audience differ.',
      ],
    ],
    'Lesson: Churning exposes a blind spot in any rule that evaluates actions one at a time. Each trade can pass a suitability test in isolation, yet the aggregate — the sheer frequency relative to the account\'s objectives — serves the broker\'s commissions at the client\'s expense. This is why Reg BI\'s Care Obligation includes a "quantitative" prong that looks at trading volume regardless of the broker\'s stated intent: harm can emerge from a pattern even when no component is faulty. The conceptual hook is that wrongdoing is sometimes a property of the whole and invisible in the parts, so good supervision must zoom out from the individual transaction to the shape of the relationship over time.',
    'Floe generated',
    true,
    'Each trade passes a suitability test, so the problem must live in the pattern, not the parts.',
    { challengeRating: 6 },
  ),

  // ── Customer Accounts and Suitability ──────────────────────────────────────
  makeSimpleQuestion(
    10094006,
    'Career Skills',
    'Customer Accounts and Suitability',
    'Two people who both must act in your "best interest"',
    'A dual-registered professional sells Maria a mutual fund acting as a broker-dealer, then later, acting as an investment adviser, manages an ongoing advisory account for her. Both roles are described as serving her "best interest." What is the key difference in when each duty applies?',
    'Reg BI binds the broker-dealer at the moment of a recommendation; the Advisers Act fiduciary duty binds the investment adviser across the entire ongoing relationship',
    [
      [
        'There is no difference — "best interest" is a single legal standard that applies to both roles equally',
        'They are deliberately distinct regimes: Reg BI is recommendation-triggered for BDs, while the fiduciary duty is continuous for IAs, even if the SEC says they often reach similar results.',
        'Same phrase, two standards: one attaches at the point of a recommendation, the other governs the whole relationship over time.',
      ],
      [
        'The broker-dealer owes the higher duty, because Reg BI is newer and therefore stricter',
        'Newer does not mean higher; the fiduciary duty under the Advisers Act is the broader, ongoing obligation, and Reg BI was crafted to stop short of imposing it on BDs.',
        'Reg BI is a best-interest standard at the moment of advice; the IA fiduciary duty is the wider, continuous one — recency is irrelevant to which is broader.',
      ],
      [
        'The investment adviser only owes a duty when executing trades, just like the broker-dealer',
        'An IA\'s fiduciary duty is not limited to transactions; it includes ongoing duties of loyalty and care for as long as the advisory relationship lasts.',
        'The IA duty is relationship-wide, not transaction-bound — which is precisely how it differs from the recommendation-triggered Reg BI.',
      ],
    ],
    'Lesson: The same person can owe a client two different versions of "best interest" depending on which hat they are wearing in a given moment. As a broker-dealer under Reg BI, the duty crystallizes at the point of a recommendation and is largely satisfied once that recommendation is made in the client\'s best interest. As an investment adviser, the fiduciary duty under the Advisers Act is continuous — duties of loyalty and care that persist for the life of the relationship. The SEC kept them separate on purpose, reasoning that forcing the fiduciary standard onto all brokers would shrink transaction-based service and raise costs. The lingering tension: identical-sounding language can encode genuinely different obligations, and a client may never realize which standard is protecting them at any given instant.',
    'Floe generated',
    true,
    'One duty switches on at the moment advice is given; the other stays on for the whole relationship.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094007,
    'Career Skills',
    'Customer Accounts and Suitability',
    'The retirement account you can raid without penalty (mostly)',
    'Aiden, 30, has contributed $20,000 to his Roth IRA over several years; it has grown to $26,000. He suddenly needs cash. He is under 59½ and the account is well past five years old. How much can he withdraw right now with no taxes and no 10% penalty?',
    'Up to $20,000 — his own contributions come out first and are always tax- and penalty-free; only the $6,000 of earnings would be taxed and penalized if withdrawn early',
    [
      [
        'Nothing penalty-free, because he is under 59½ and all early Roth withdrawals are penalized',
        'This ignores the ordering rule: Roth contributions are after-tax money and can be withdrawn anytime free of tax and penalty, regardless of age.',
        'Contributions are your own already-taxed dollars; the age-59½ penalty applies only to the earnings layer, which comes out last.',
      ],
      [
        'The full $26,000, because the account has satisfied the five-year rule',
        'The five-year rule plus age 59½ is what makes earnings qualified; at 30 he meets only the five-year clock, so the $6,000 of earnings is still taxable and penalized.',
        'Five years alone is not enough for earnings — you also need to be 59½ (or an exception); contributions, though, are free regardless.',
      ],
      [
        'Only the $6,000 of earnings, since contributions are locked until retirement',
        'This reverses the rule: contributions are the freely accessible layer, and earnings are the locked-up part — the order is exactly backwards.',
        'It is contributions that come out first and freely; earnings are what stay penalized before 59½. The layers are inverted here.',
      ],
    ],
    'Lesson: A Roth IRA is really two pots of money wearing one name. Contributions are dollars you already paid tax on, so the IRS lets you take them back anytime, at any age, with no tax and no penalty — and withdrawal ordering rules say they always come out first. Earnings are the second pot: to escape tax and the 10% penalty, those need both five years and age 59½ (or a qualifying exception). The beautiful consequence is that a Roth quietly doubles as an emergency fund for your basis without ever touching the penalized layer. The deeper point: tax law tracks the character of each dollar — what was already taxed versus what grew untaxed — and treats them differently even inside a single account.',
    'Floe generated',
    true,
    'Think of the account as two layers; one is already-taxed money you can always reclaim, the other is growth that stays locked.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10094008,
    'Career Skills',
    'Customer Accounts and Suitability',
    'Whose money it is versus who signs for it',
    'A grandparent opens an UGMA custodial account for 8-year-old Lily and funds it with stock. The grandparent picks the investments and signs every form. When Lily turns the age of majority, the grandparent wants to keep control "until she is responsible enough." Who legally owns the assets, and can the grandparent refuse to hand them over?',
    'Lily owns the assets the moment they are gifted; the custodian merely manages them and must turn them over at the age of majority — control cannot be withheld',
    [
      [
        'The grandparent owns the account until they decide the child is ready',
        'A custodial gift is irrevocable and belongs to the minor immediately; the custodian controls but never owns, and has no discretion to delay the handover.',
        'Signing the forms is custody, not ownership — the assets were Lily\'s from the moment of the gift, and the law sets the handover date, not the adult.',
      ],
      [
        'Lily owns the assets, but the grandparent can legally extend control past the age of majority by amending the account',
        'There is no amendment that postpones the transfer; the age of majority is fixed by the state\'s UGMA/UTMA statute, not by the custodian\'s wishes.',
        'Ownership is Lily\'s and the deadline is statutory; the grandparent cannot rewrite the handover date no matter how well-intentioned.',
      ],
      [
        'Ownership is shared jointly between the grandparent and Lily until she reaches adulthood',
        'A custodial account is not a joint account; the minor is the sole owner from the start, and the custodian has no ownership stake to share.',
        'Custody is a role, not co-ownership — Lily alone owns the assets, and the grandparent holds no slice of them.',
      ],
    ],
    'Lesson: A custodial account cleanly separates two things people instinctively conflate — ownership and control. The moment a grandparent funds an UGMA/UTMA account, the gift is irrevocable and the minor becomes the sole legal owner; the adult is only a custodian, a manager with a fiduciary duty and a hard deadline. At the age of majority set by state law, control must transfer to the now-adult child, full stop, regardless of whether the custodian thinks they are "ready." The discomfort this provokes — handing a large sum to an 18- or 21-year-old — is exactly why advisers steer education savings toward 529 plans, where the owner retains control. The principle: who manages money and who owns it are distinct legal facts, and the law will not let good intentions blur them.',
    'Floe generated',
    true,
    'Separate two ideas that feel like one: who the assets belong to, and who is allowed to manage them.',
    { challengeRating: 6 },
  ),
]
