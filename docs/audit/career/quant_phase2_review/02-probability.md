# Phase 2 Review — Probability

**59 questions** · core: 59 · advanced: 0

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19101 | 🟢 core | Boy or Girl | A family has two children. One is a boy. What is the probability the other is a boy? | 1/3 |
| 2 | 19102 | 🟢 core | Russian Roulette | Two bullets are loaded into adjacent chambers of a 6-chamber revolver. The first player fires and survives. Should you… | Do not spin. The probability of dying is 1/4 if you don't s… |
| 3 | 19103 | 🟢 core | Aces | 52 cards are dealt to 4 players (13 each). What is the probability each player gets exactly one Ace? | Approximately 10.5%. (39/51) * (26/50) * (13/49) |
| 4 | 19104 | 🟢 core | Gambler's Ruin | You have $1. You win $1 with p=0.5, lose $1 with p=0.5. You stop when you reach $100 or $0. What is the probability of… | 1/100 |
| 5 | 19105 | 🟢 core | N Points on a Circle | N points are drawn randomly on a circle. What is the probability they all lie within the same semicircle? | N / 2^(N-1) |
| 6 | 19106 | 🟢 core | Birthday Problem | How many people do you need in a room to have a >50% chance that two share a birthday? | 23 |
| 7 | 19107 | 🟢 core | Drunk Passenger | 100 passengers board a plane. Passenger 1 is drunk and takes a random seat. Everyone else takes their assigned seat, or… | 1/2 |
| 8 | 19108 | 🟢 core | Connecting Noodles | A bowl has 100 noodles. You randomly tie ends together until no ends are left. What is the expected number of closed lo… | Sum from k=1 to 100 of [1 / (2k - 1)] |
| 9 | 19109 | 🟢 core | Dice Game | You roll a die. For 4, 5, 6 you roll again and accumulate money. For 1, 2, 3 the game stops. What is your expected payo… | $7 |
| 10 | 19110 | 🟢 core | Card Game Ace | Cards are drawn from a 52-card deck. What is the expected number of cards drawn to see the first Ace? | 10.6 |
| 11 | 19111 | 🟢 core | Unfair Coin | You have 1000 coins. 999 are fair, 1 is double-headed. You pick one, toss it 10 times, and get 10 heads. What is the pr… | 1024 / 2023 (approx 50%) |
| 12 | 19112 | 🟢 core | Fair from Unfair | You have a biased coin with unknown probability p of heads. How do you simulate a fair coin toss? | Toss twice. If HT, call it Heads. If TH, call it Tails. If… |
| 13 | 19113 | 🟢 core | Coupon Collector | Cereal boxes contain one of N distinct coupons uniformly. What is the expected number of boxes to collect all N? | N * Sum(1/i) for i=1 to N |
| 14 | 19114 | 🟢 core | Random Ants | 500 ants are placed randomly on a 1-meter stick. They walk at 1 meter/minute. When they collide, they reverse direction… | Maximum of 500 independent uniform[0,1] variables, which is… |
| 15 | 19115 | 🟢 core | Expected Max | X and Y are independent uniform(0,1) random variables. What is the expected value of max(X, Y)? | 2/3 |
| 16 | 19116 | 🟢 core | Hopping Rabbit | A rabbit starts at 0 and hops 1 or 2 units forward with equal probability. What is the probability it ever lands on 10? | [2 + (-1/2)^10] / 3 |
| 17 | 19117 | 🟢 core | Chess Tournament | 8 players in a knockout tournament. Player 1 is best, Player 2 is second best. What is the probability they meet in the… | 4/7 |
| 18 | 19118 | 🟢 core | Application Letters | n letters are sent to n addresses. What is the probability that NO letter reaches the correct address as n goes to infi… | 1/e (approx 36.8%) |
| 19 | 19119 | 🟢 core | All-Girl World | In a world where families stop having children as soon as they have a girl, what is the expected ratio of girls to boys… | 1:1 |
| 20 | 19120 | 🟢 core | Dart Game | You throw n darts. Each is further from the center than the first. If you throw one more, what is the probability it is… | n / (n+1) |
| 21 | 19121 | 🟢 core | Birthday Line | A theater gives a free ticket to the first person in line with the same birthday as someone already in line. What posit… | 20 |
| 22 | 19122 | 🟢 core | Dice Order | You throw 3 dice. What is the probability the values are in strictly increasing order? | 5 / 54 |
| 23 | 19123 | 🟢 core | Monty Hall | 3 doors, 1 car, 2 goats. You pick a door. Monty opens a door with a goat. Should you switch? | Yes, switching doubles your win probability from 1/3 to 2/3. |
| 24 | 19124 | 🟢 core | Amoeba Population | An amoeba can die, stay same, split into 2, or split into 3 with equal probability. What is the probability the populat… | sqrt(2) - 1 (approx 0.414) |
| 25 | 19125 | 🟢 core | Candies in a Jar | A jar has 10 red, 20 blue, and 30 green candies. Probability that at least one blue and one green are left when all red… | 7/12 |
| 26 | 19126 | 🟢 core | Basketball Scores | In a basketball game, Team A has scored n points and Team B has scored m points (n > m). What is the probability Team A… | (n - m) / (n + m) |
| 27 | 19127 | 🟢 core | Cars on Road | Cars enter a road at a Poisson rate lambda. You see no cars for 10 minutes. What is the probability you see a car in th… | 1 - e^(-lambda) |
| 28 | 19128 | 🟢 core | Meeting Probability | Two people arrive at a park at random times between 12:00 and 1:00. Each stays for 15 minutes. What is the probability… | 7/16 |
| 29 | 19129 | 🟢 core | Triangle Probability | A stick of length 1 is broken at two random points. What is the probability the 3 pieces can form a triangle? | 1/4 |
| 30 | 19131 | 🟢 core | Secretary Problem | You interview n candidates one by one. You must decide immediately after each. What is the optimal strategy to pick the… | Reject the first n/e candidates, then pick the first one be… |
| 31 | 19132 | 🟢 core | Sum of Uniforms | What is the expected number of Uniform(0,1) variables to sum to more than 1? | e |
| 32 | 19133 | 🟢 core | First Passage Time | In a standard Brownian Motion, what is the distribution of the first time it hits a level a > 0? | Inverse Gaussian (Levy) distribution |
| 33 | 19134 | 🟢 core | Reflection Principle | The probability that a Brownian Motion reaches level a by time T is equal to: | 2 * P(W_T > a) |
| 34 | 19135 | 🟢 core | Unfair Gambler's Ruin | In Gambler's Ruin with p != 0.5, the probability of reaching N before 0 starting at i is: | ((q/p)^i - 1) / ((q/p)^N - 1) |
| 35 | 19136 | 🟢 core | Steady State | When does a discrete Markov chain have a unique steady state? | If it is irreducible and aperiodic. |
| 36 | 19137 | 🟢 core | Random Walk on Graph | In a random walk on a graph, the steady state probability of a node is proportional to: | Its degree (number of edges) |
| 37 | 19146 | 🟢 core | MLE | What is the principle of Maximum Likelihood Estimation (MLE)? | To find the parameter values that maximize the probability… |
| 38 | 19147 | 🟢 core | Sample Variance Bias | Why do we divide by n-1 instead of n when calculating sample variance? | To make the estimator unbiased; dividing by n underestimate… |
| 39 | 19148 | 🟢 core | Law of Large Numbers | What is the difference between the Weak and Strong Law of Large Numbers? | Weak Law implies convergence in probability; Strong Law imp… |
| 40 | 19150 | 🟢 core | Memoryless Property | Which continuous distribution has the property P(X > s+t \| X > s) = P(X > t)? | Exponential |
| 41 | 19151 | 🟢 core | Central Limit Theorem | What does the Central Limit Theorem state about the sum of i.i.d. variables? | The sum (or mean) tends toward a Normal distribution as N i… |
| 42 | 19152 | 🟢 core | Correlation vs Causation | Can a correlation of 0.9 between X and Y prove that X causes Y? | No, there could be a latent "common cause" Z or it could be… |
| 43 | 19153 | 🟢 core | Conditional Probability | If P(A) = 0.3 and P(B) = 0.4 and they are independent, what is P(A\|B)? | 0.3 |
| 44 | 19154 | 🟢 core | Expected Max (3 Dice) | You roll a die. You can keep the result or roll again (up to 3 times total). What is your expected payoff with optimal… | About 4.66 |
| 45 | 19156 | 🟢 core | Correlation Bounds | If Corr(A,B)=0.9 and Corr(B,C)=0.8, can Corr(A,C) be 0.1? | No, the minimum correlation is 0.9*0.8 - sqrt(1-0.9^2)*sqrt… |
| 46 | 19159 | 🟢 core | Order Statistics (Range) | For N independent Uniform(0,1) variables, what is the expected difference between Max and Min? | (N - 1) / (N + 1) |
| 47 | 19160 | 🟢 core | Infinite Variance | Which of these distributions has infinite variance? | Cauchy Distribution |
| 48 | 19161 | 🟢 core | Sum of Uniforms | What is the PDF of the sum of two independent Uniform(0,1) variables? | A triangular distribution on [0, 2]. |
| 49 | 19162 | 🟢 core | Covariance Matrix | Why is a covariance matrix always positive semi-definite? | Because the variance of any linear combination of variables… |
| 50 | 19163 | 🟢 core | Gaussian CDF Expectation | If X is N(0,1) and N(.) is the standard normal CDF, what is E[N(X)]? | 1/2 |
| 51 | 19405 | 🟢 core | Expected Value of Dice | You roll two standard dice. What is the expected value of their sum? | 7 |
| 52 | 19812 | 🟢 core | The Overexcited Risk Flag | A trade is truly suspicious with probability 2%. A risk model flags 90% of suspicious trades and also falsely flags 5%… | About 26.9% |
| 53 | 19813 | 🟢 core | Badge Numbers Behaving Nicely | A candidate is assigned a random badge number from 1 to 30. Let A be the event that the number is even, and B be the ev… | Yes, they are independent |
| 54 | 19814 | 🟢 core | The Snack Table Committee | There are 7 analysts and 5 engineers in a prep group. A 4-person mock interview panel is chosen uniformly at random. Wh… | 21/55 |
| 55 | 19815 | 🟢 core | Expected Coffee Damage | During a quant screen, each of 6 independent questions has a 40% chance of making the candidate take one emergency coff… | 2.4 |
| 56 | 19816 | 🟢 core | Two Resume Typos | A resume has 8 distinct sections. Exactly 2 sections contain typos, chosen uniformly at random. If the interviewer chec… | 9/14 |
| 57 | 19817 | 🟢 core | The Symmetric Elevator Bet | Three candidates enter an office building with 10 floors numbered 1 through 10. Each independently chooses one floor un… | 27/100 |
| 58 | 19820 | 🟢 core | The Office Dice IPO | You may pay an entry fee to play this game once. Roll a fair six-sided die. If it lands 6, you receive $12. If it lands… | $3 |
| 59 | 19821 | 🟢 core | The Bonus With Teeth | You can take a guaranteed $400 bonus or a risky bonus with a 70% chance of gaining $2,000 and a 30% chance of losing $3… | The risky bonus has expected value $500, which is $100 bett… |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

