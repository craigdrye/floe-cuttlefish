import type { Question } from './questionCatalog/types'

export const starterQuestions: Question[] = [
  {
    id: 1,
    kind: 'quick',
    topic: 'Game theory',
    chapter: 'Dockside Game Theory',
    title: 'Pirates, but make it corporate',
    briefing:
      'This is a backward-induction puzzle. You are not trying to make the fairest split; you are trying to find the cheapest proposal that the lead pirate can get approved.',
    setup: [
      'Five pirates must divide 100 gold coins.',
      'The pirates are numbered by seniority. Pirate 5 is the most senior and proposes first. Pirate 1 is the least senior.',
      'After pirate 5 proposes a split, all five pirates vote. Pirate 5 gets to vote for their own proposal.',
      'A proposal passes if at least half the pirates vote yes. With five pirates, that means pirate 5 needs three yes votes total.',
      'If pirate 5 fails to get three yes votes, pirate 5 is fed to the sharks. Then pirate 4 becomes the most senior remaining pirate and makes a new proposal under the same rules.',
      'A pirate votes yes only if the offer is better than what they expect to get after rejecting the proposal. If the money is tied, they prefer the proposer to be fed to the sharks.',
    ],
    prompt:
      'What should pirate 5 offer in the very first proposal, assuming pirate 5 wants the proposal to pass and wants to keep as many coins as possible?',
    fieldNote:
      'The key question is: what does each lower pirate get if pirate 5 is fed to the sharks? Pirate 5 only needs to beat that fallback for two other pirates, because pirate 5 already supplies one yes vote.',
    mentorHint:
      'Pirate 5 already votes yes for their own plan, so they need exactly two more yes votes. Work out who gets zero coins if pirate 5 is fed to the sharks.',
    xp: 12,
    answers: [
      {
        id: 'a',
        label: 'Pirate 5 keeps 98; pirates 1 and 3 get 1 each; pirates 2 and 4 get 0',
        correct: true,
      },
      {
        id: 'b',
        label: 'Pirate 5 keeps 96; pirates 1, 2, 3, and 4 each get 1',
        correct: false,
        misconceptions: [
          {
            tempting:
              'This feels democratic and avoids making anyone salty enough to start a tiny maritime coup.',
            flaw:
              'Pirate 5 does not need everyone. With five pirates, three yes votes pass, and pirate 5 already supplies one of those votes.',
            reframe:
              'Pirate 5 only needs two more yes votes. In the four-pirate fallback, pirates 1 and 3 get zero, so one coin each is enough.',
          },
          {
            tempting:
              'Spreading coins around feels safer because unhappy pirates are dangerous.',
            flaw:
              'The rules make pirates rational vote calculators, not workplace culture ambassadors.',
            reframe:
              'Compare each pirate to their fallback payoff. If the offer beats that payoff, they vote yes.',
          },
        ],
      },
      {
        id: 'c',
        label: 'Pirate 5 keeps 99; pirate 4 gets 1; everyone else gets 0',
        correct: false,
        misconceptions: [
          {
            tempting:
              'Pirate 4 is the next most senior, so it feels natural to buy off the person closest to power.',
            flaw:
              'If pirate 5 is fed to the sharks, pirate 4 becomes proposer and can keep 99 coins in the four-pirate game. One coin is much worse than that.',
            reframe:
              'The next proposer is expensive to buy. Pirate 5 should buy pirates whose fallback is zero.',
          },
        ],
      },
      {
        id: 'd',
        label: 'No proposal can pass; pirate 5 is fed to the sharks',
        correct: false,
        misconceptions: [
          {
            tempting:
              'The lower pirates can always choose chaos and hope to do better in the next round.',
            flaw:
              'Some pirates do worse if pirate 5 is fed to the sharks. In the next round, pirates 1 and 3 get zero, so one coin is enough to win their votes.',
            reframe:
              'Voting no is only leverage when the fallback beats the current offer.',
          },
        ],
      },
    ],
    solution:
      'Work backward one step. If pirate 5 is fed to the sharks, the four-pirate outcome is: pirate 4 keeps 99, pirate 2 gets 1, and pirates 1 and 3 get 0. Pirate 5 needs two yes votes besides their own. The cheapest voters are pirates 1 and 3, because each will accept 1 coin instead of getting 0 in the fallback. So pirate 5 proposes: 98 for pirate 5, 1 for pirate 1, 1 for pirate 3, and 0 for pirates 2 and 4.',
  },
  {
    id: 2,
    kind: 'quick',
    topic: 'Probability',
    chapter: 'Base Rate Swamp',
    title: 'Bayes in a trench coat',
    briefing:
      'This is the classic Bayes interview trap from the quant guide: a test sounds very accurate, but the event is rare. The question is not how often the test works; it is who is inside the group of people who tested positive.',
    setup: [
      'Use a concrete crowd of 1,000 people. That makes the percentages easier to see.',
      'Only 1% actually have the event, so 10 people have it and 990 people do not.',
      'The test is 90% sensitive. That means it correctly flags 90% of the 10 true cases, so about 9 true cases test positive.',
      'The test is 90% specific. That means 10% of the 990 people without the event still get a false positive, so about 99 non-cases test positive.',
      'Now focus only on the people who tested positive: 9 true positives plus 99 false positives.',
    ],
    prompt:
      'If you are randomly chosen from the positive-test group, roughly what is the probability you are one of the true cases?',
    fieldNote:
      'The trap is confusing P(positive test | event), which is 90%, with P(event | positive test), which is much smaller because false positives come from a much larger group.',
    mentorHint:
      'Do not start with the 90% test accuracy number. Start with the positive bucket: 9 true positives and 99 false positives.',
    xp: 10,
    answers: [
      { id: 'a', label: 'About 90%', correct: false, misconceptions: [
        {
          tempting: 'The test is 90% accurate, so a positive result sounds almost definitive.',
          flaw: 'Base rates are doing the spooky background music here. False positives from the large healthy group swamp true positives.',
          reframe: 'Out of 1,000 people, about 9 true positives and 99 false positives appear. That is 9 out of 108 positives.',
        },
      ] },
      { id: 'b', label: 'About 50%', correct: false, misconceptions: [
        {
          tempting: 'A positive result and rare base rate seem to cancel into uncertainty.',
          flaw: 'They do not cancel evenly. The false positive pool is still much larger.',
          reframe: 'Calculate the actual positive bucket: 9 true positives versus 99 false positives.',
        },
      ] },
      { id: 'c', label: 'About 8%', correct: true },
      { id: 'd', label: 'About 1%', correct: false, misconceptions: [
        {
          tempting: 'The event is rare, so maybe the test barely moves the probability.',
          flaw: 'The test does move the probability a lot: from 1% to about 8%. Just not to 90%.',
          reframe: 'Positive evidence matters, but base rates decide how much it matters.',
        },
      ] },
    ],
    solution:
      'In 1,000 people, 10 have the event and 990 do not. The test catches 90% of the 10 true cases, giving 9 true positives. It falsely flags 10% of the 990 non-cases, giving 99 false positives. So among all positive tests there are 9 + 99 = 108 positives, but only 9 are real cases. P(event | positive) = 9 / 108, about 8.3%.',
  },
  {
    id: 3,
    kind: 'quick',
    topic: 'Expected value',
    chapter: 'Rain Desk',
    title: 'Umbrella EV, because markets are wet',
    briefing:
      'Sergeant Ink has shoved you onto the wettest trading floor in the sea. The instrument is simple, the weather is rude, and the spreadsheet is pretending not to judge you.',
    setup: [
      'A trader is considering a simple one-period bet tied to the weather.',
      'If it rains, the trader loses $100.',
      'If it does not rain, the trader gains $20.',
      'The probability of rain is 30%, so the probability of no rain is 70%.',
    ],
    prompt:
      'What is the expected payoff of the trade?',
    fieldNote:
      'Expected value is not the most common outcome. It is the long-run average if you could repeat the bet many times.',
    mentorHint:
      'Weight each outcome by its probability, then add.',
    xp: 10,
    answers: [
      { id: 'a', label: '-$10', correct: false, misconceptions: [
        {
          tempting: 'This averages the two dollar amounts and gives a rough downside feel.',
          flaw: 'Expected value is probability-weighted. A 30% bad event and 70% good event are not equal roommates.',
          reframe: 'Compute 0.3 x -100 plus 0.7 x 20.',
        },
      ] },
      { id: 'b', label: '-$16', correct: true },
      { id: 'c', label: '+$20', correct: false, misconceptions: [
        {
          tempting: 'The no-rain scenario is more likely, and +$20 is the common outcome.',
          flaw: 'The rare loss is five times larger than the gain. It still dominates the average.',
          reframe: 'Common does not mean profitable. Expected value cares about size and probability.',
        },
      ] },
      { id: 'd', label: '+$14', correct: false, misconceptions: [
        {
          tempting: 'This accounts for the 70% chance of earning $20 but forgets the rainy downside.',
          flaw: 'Ignoring the loss leg is how spreadsheets become crime scenes.',
          reframe: 'Include every mutually exclusive outcome in the weighted sum.',
        },
      ] },
    ],
    solution:
      'Expected payoff = 0.3(-100) + 0.7(20) = -30 + 14 = -16 dollars.',
  },
  {
    id: 4,
    kind: 'deep',
    topic: 'Game theory',
    chapter: 'Boss Puzzle Lagoon',
    title: 'Tiger island: HR has declined comment',
    briefing:
      'Cuttlebella Jones has dragged the team to an island with one sheep, one hundred tigers, and absolutely no functioning risk committee. This is the boss fight: same induction muscle, stranger costume.',
    setup: [
      'There are 100 rational tigers and exactly one sheep on an island.',
      'Any tiger may choose to eat the sheep, but a tiger that eats the sheep immediately turns into a sheep.',
      'All tigers prefer eating sheep to eating grass, but they care more about survival than about getting a sheep meal.',
      'Every tiger knows the others are perfectly rational and can reason all the way forward.',
    ],
    prompt:
      'Under those rules, will the sheep eventually be eaten?',
    fieldNote:
      'The trap is thinking “more tigers means more danger.” The right question is whether one tiger is safe after it changes the game state.',
    mentorHint:
      'Solve n = 1, 2, 3, 4 first. The safety of eating flips every time you add one tiger.',
    xp: 22,
    answers: [
      { id: 'a', label: 'Yes, because any tiger would rather eat sheep than grass', correct: false, misconceptions: [
        {
          tempting: 'The preference for sheep sounds like it should trigger immediate lunch.',
          flaw: 'Survival is ranked above food preference. A tiger will not become tomorrow’s snack for a nicer dinner today.',
          reframe: 'Ask whether the tiger is safe after transforming, not whether sheep tastes better.',
        },
      ] },
      { id: 'b', label: 'No, because 100 is even', correct: true },
      { id: 'c', label: 'Yes, because with many tigers someone will take the risk', correct: false, misconceptions: [
        {
          tempting: 'Large groups feel unstable. Surely one reckless tiger YOLOs the wool buffet.',
          flaw: 'The tigers are perfectly rational, so nobody takes a survival-negative risk.',
          reframe: 'The group size only matters through backward induction. Odd means eat; even means do not eat.',
        },
      ] },
      { id: 'd', label: 'No for every number above 3', correct: false, misconceptions: [
        {
          tempting: 'More tigers seems like more danger for any tiger who becomes a sheep.',
          flaw: 'With five tigers, eating leaves four tigers, and four-tiger islands are safe for sheep.',
          reframe: 'The pattern alternates forever: 1 eat, 2 safe, 3 eat, 4 safe, 5 eat.',
        },
      ] },
    ],
    solution:
      'With one tiger, it eats. With two, neither eats because the eater becomes sheep and is eaten. With three, eating leaves two tigers, where sheep is safe, so one eats. The logic alternates. Since 100 is even, the sheep is not eaten.',
  },
  {
    id: 5,
    kind: 'quick',
    topic: 'Statistics',
    chapter: 'Regression Dojo',
    title: 'Regression myth banished by algebra',
    briefing:
      'Sensei Cuttle opens the regression dojo. On the wall: one projection diagram, one suspiciously intense whiteboard marker, and one rule: geometry before incantation.',
    setup: [
      'Consider ordinary least squares with a design matrix X that includes an intercept term.',
      'The fitted values are the projection of y onto the column space of X.',
      'The residual vector is the difference between the observed vector y and the fitted values.',
    ],
    prompt:
      'Why are the residuals orthogonal to the fitted values in this setup?',
    fieldNote:
      'Interviewers like this because it distinguishes memorized regression words from the projection picture underneath OLS.',
    mentorHint:
      'OLS projects y onto the column space of X. The residual is what is left after projection.',
    xp: 14,
    answers: [
      { id: 'a', label: 'Because residuals are always normally distributed', correct: false, misconceptions: [
        {
          tempting: 'Normality is often discussed near regression, so it sounds like the magic ingredient.',
          flaw: 'OLS orthogonality is algebraic. It does not require normally distributed errors.',
          reframe: 'The normal equations give X^T e = 0, and fitted values live in the span of X.',
        },
      ] },
      { id: 'b', label: 'Because OLS minimizes absolute error', correct: false, misconceptions: [
        {
          tempting: 'Minimizing error sounds broadly right.',
          flaw: 'OLS minimizes squared error, not absolute error. That squared objective creates the normal equations.',
          reframe: 'Different loss functions have different geometry. Squared loss gives projection.',
        },
      ] },
      { id: 'c', label: 'Because the residual vector is orthogonal to the column space of X', correct: true },
      { id: 'd', label: 'Because the intercept absorbs all model bias', correct: false, misconceptions: [
        {
          tempting: 'The intercept does force residuals to sum to zero, which feels close.',
          flaw: 'Zero-sum residuals are only one part. Orthogonality to fitted values follows from all regressors via X^T e = 0.',
          reframe: 'Think projection geometry: fitted values are in the model space; residuals point perpendicular to it.',
        },
      ] },
    ],
    solution:
      'OLS solves X^T(y - X beta) = 0. The fitted vector X beta lies in the column space of X, and the residual y - X beta is orthogonal to that space, so residuals are orthogonal to fitted values.',
  },
]
