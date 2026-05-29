# Phase 2 Review — Brain Teasers

**37 questions** · core: 37 · advanced: 0

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19001 | 🟢 core | Screwy Pirates | Five rational pirates must divide 100 gold coins. The senior pirate proposes a split. If 50% or more vote yes, it passe… | 98 to himself, 1 to pirate 3, 1 to pirate 5 |
| 2 | 19002 | 🟢 core | River Crossing | Four people take 1, 2, 5, and 10 minutes to cross a bridge. They have one flashlight. A maximum of two people can cross… | 17 minutes |
| 3 | 19003 | 🟢 core | Burning Ropes | You have two ropes of varying thickness. Each takes exactly 60 minutes to burn completely. How can you measure exactly… | Light both ends of rope 1 and one end of rope 2. When rope… |
| 4 | 19004 | 🟢 core | Defective Ball | You have 12 identical-looking balls and a balance scale. One ball is heavier or lighter than the rest. What is the mini… | 3 |
| 5 | 19005 | 🟢 core | Trailing Zeros | How many trailing zeros are there in 100! (100 factorial)? | 24 |
| 6 | 19006 | 🟢 core | Horse Race | You have 25 horses and a 5-lane track. What is the minimum number of races to find the top 3 fastest horses? | 7 |
| 7 | 19007 | 🟢 core | Box Packing | Can you pack 53 bricks of dimensions 1x1x4 into a 6x6x6 box? | No |
| 8 | 19008 | 🟢 core | Calendar Cubes | You have two cubes to display the day of the month (01-31). What digits must be on the two cubes? | Cube 1: 0,1,2,3,4,5. Cube 2: 0,1,2,6,7,8 (using 6 as 9) |
| 9 | 19009 | 🟢 core | Light Switches | You are outside a closed room with 3 light switches. Inside is 1 bulb. You can flip switches, but only enter the room o… | Turn on Switch 1 for 10 mins. Turn it off, turn on Switch 2… |
| 10 | 19010 | 🟢 core | Quant Salary | 8 quants want to know their average salary without revealing their own. How? | Quant 1 adds a random number to their salary and passes it.… |
| 11 | 19011 | 🟢 core | Coin Piles | Blindfolded, you have 1000 coins: 980 tails, 20 heads. Split them into two piles with an equal number of heads. | Take 20 coins to form a new pile. Flip all 20 coins in the… |
| 12 | 19012 | 🟢 core | Mislabeled Bags | You have 3 bags: Apples, Oranges, and Mixed. ALL are mislabeled. You can pick one fruit from one bag. How do you fix th… | Pick from the "Mixed" bag. If it is an apple, that bag is A… |
| 13 | 19013 | 🟢 core | Missing Integers | An array has 98 distinct integers from 1 to 100. How do you efficiently find the missing two? | Calculate the sum and sum of squares of the array. Compare… |
| 14 | 19014 | 🟢 core | Counterfeit Coins I | 10 bags of coins. One bag has fake coins weighing 9g (real ones are 10g). You have a digital scale and one weighing. Fi… | Take 1 coin from bag 1, 2 from bag 2... up to 10 from bag 1… |
| 15 | 19015 | 🟢 core | Glass Balls | You have 2 glass balls and a 100-story building. Find the lowest floor they break from in the minimum worst-case drops. | 14 drops. Drop from 14, 27, 39... decreasing the gap by 1 e… |
| 16 | 19016 | 🟢 core | Door to Offer | A truth-teller guards the door to the exit; a liar guards the door to a job offer. You don't know which is which. What… | What door would the other guard say is the door to the offe… |
| 17 | 19017 | 🟢 core | Message Delivery | You want to send a secure message to a friend in a box. You both have multiple padlocks but no shared keys. How can you… | Lock the box, send it. Friend adds their lock and sends it… |
| 18 | 19018 | 🟢 core | Last Ball | A bag has 20 blue and 14 red balls. You take two out. If same color, add a blue ball. If different, add a red ball. Wha… | Blue |
| 19 | 19019 | 🟢 core | Wise Men | 50 wise men are in separate rooms. A sultan calls them one by one to a room with a glass. They can flip it or do nothin… | One "spokesman" always flips the glass down. The others fli… |
| 20 | 19020 | 🟢 core | Clock Pieces | A clock face breaks into 3 pieces. The sum of the numbers on each piece is the same. What is the sum of each piece? | 26 |
| 21 | 19021 | 🟢 core | Matching Socks | A drawer has 10 black and 10 white socks. What is the minimum number of socks you must pull out to guarantee a matching… | 3 |
| 22 | 19022 | 🟢 core | Meeting People | In a group of 6 people, can you guarantee that either 3 people know each other or 3 people are strangers? | Yes, this is a result of Ramsey Theory (R(3,3)=6). |
| 23 | 19023 | 🟢 core | Prisoner Problem | 100 prisoners are assigned numbers 1-100. They enter a room with 100 boxes containing random numbers. Each can open 50… | Each prisoner follows the "cycle" starting with the box lab… |
| 24 | 19024 | 🟢 core | Division by 9 | A number is divisible by 9 if and only if: | The sum of its digits is divisible by 9. |
| 25 | 19025 | 🟢 core | Chameleon Colors | On an island there are 13 red, 15 green, and 17 blue chameleons. When two of different colors meet, they both change to… | No, because the differences between the counts modulo 3 are… |
| 26 | 19026 | 🟢 core | Coin Split | You have n coins in a pile. You split a pile into two piles of size x and y, and write down the product x*y. You repeat… | n(n-1) / 2 |
| 27 | 19027 | 🟢 core | Chocolate Bar | You have a 6x8 chocolate bar. What is the minimum number of breaks to separate it into 48 1x1 pieces? (A break is along… | 47 |
| 28 | 19028 | 🟢 core | Race Track | N gas cans are on a circular track. Total gas is enough for one lap. Can you always find a starting point to complete t… | Yes, by induction or by finding the point of minimum cumula… |
| 29 | 19029 | 🟢 core | Rainbow Hats | 7 prisoners have hats of 7 possible colors. They see all but their own. They must guess their own color simultaneously.… | Assign colors 0-6. Prisoner i guesses the color that makes… |
| 30 | 19030 | 🟢 core | Staircase Problem | How many ways are there to climb 10 stairs if you can take 1 or 2 steps at a time? | 89 (the 11th Fibonacci number) |
| 31 | 19404 | 🟢 core | 100th Digit | What is the 100th digit to the right of the decimal point for (1 + sqrt(2))^3000 ? | 9 |
| 32 | 19406 | 🟢 core | Ants on a Square | There are 51 ants on a square with side length of 1. If you have a glass with a radius of 1/7, can you put your glass a… | Yes, separate the square into 25 smaller areas of 1/5 x 1/5… |
| 33 | 19407 | 🟢 core | Counterfeit Coins II | There are 5 bags with 100 coins in each bag. A coin can weigh 9g, 10g or 11g. Each bag contains coins of equal weight,… | 1 time. Take 1, 3, 9, 27, and 81 coins from bags 1 to 5 res… |
| 34 | 19408 | 🟢 core | Handshakes | At a party with 26 people, random handshaking occurs. Can you guarantee there are at least two people who shook hands w… | Yes. Each person shakes 0 to 25 hands, but 0 and 25 cannot… |
| 35 | 19409 | 🟢 core | Irrational Root | When proving that the square root of 2 is irrational by contradiction (assuming it equals m/n for integers m,n with no… | Both m and n must be even numbers, contradicting that they… |
| 36 | 19818 | 🟢 core | The Shrinking Blotter | A whiteboard starts with the numbers 1 through 20. Each move, you erase two numbers a and b and write one new number: a… | 191 |
| 37 | 19819 | 🟢 core | The Spread Gossip Committee | A hidden bid-ask spread is exactly 1, 2, 3, or 4 basis points. Four analysts make claims. Ada says, "It is not 1." Ben… | 3 basis points |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

