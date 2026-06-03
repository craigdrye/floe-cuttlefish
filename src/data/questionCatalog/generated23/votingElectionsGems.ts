import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const votingElectionsGems: Question[] = [
  // ---------------------------------------------------------------------------
  // The Electoral College
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10112000,
    'Career Skills',
    'The Electoral College',
    'Why a vote in Wyoming weighs more',
    'Every state gets electors equal to its House seats plus its two senators. Wyoming has about 580,000 people and 3 electoral votes; California has about 39 million people and 54. Roughly how many people does each Wyoming electoral vote represent compared with each California one, and why?',
    'Far fewer: each Wyoming elector covers roughly 190,000 people versus roughly 720,000 in California, because the flat +2 senatorial bonus is a huge boost to small states.',
    [
      [
        'About the same, since electors are assigned strictly in proportion to population.',
        'Electors are not purely proportional: the two senatorial electors are flat per state regardless of population, structurally over-weighting small states.',
        'Picture the +2 as a fixed bonus. It barely dilutes California but nearly doubles tiny Wyoming, so per-person weight diverges sharply.',
      ],
      [
        'More people per Wyoming vote, because small states are penalized to protect majority rule.',
        'The arithmetic runs the opposite way: the flat bonus shrinks the population behind each small-state elector, giving those voters more relative weight, not less.',
        'Divide population by electors. Wyoming gets a smaller denominator-per-elector, so each of its votes carries more weight, not less.',
      ],
      [
        'Identical, because the National Popular Vote already governs how electors are awarded.',
        'No such national rule binds the allocation: the Constitution ties electors to congressional seats, and the senatorial pair guarantees a small-state premium.',
        'The allocation formula is House seats plus two. That structural +2 is exactly what breaks population proportionality between states.',
      ],
    ],
    'Lesson: The Electoral College allocates electors as representatives-plus-two-senators, so the flat senatorial bonus systematically over-weights small-state voters. This is deep because it reveals the system was never meant to measure one-person-one-vote: it encodes a federal compromise where states, not just people, are the unit of representation, and that design choice still tilts every presidential election.',
    'Floe generated',
    true,
    'Divide each state population by its electoral votes, and watch what the flat +2 does to the small denominator.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10112001,
    'Career Skills',
    'The Electoral College',
    'How a loser of the popular vote wins',
    'A candidate can lose the national popular vote yet win the presidency. Given that 48 states award all their electors to whoever wins that state by even one ballot, what is the mechanism that lets the popular-vote loser still assemble an Electoral College majority?',
    'Winner-take-all means runaway margins in losing states pile up popular votes that earn zero electors, while the winner squeaks narrow victories across enough states to collect their electors.',
    [
      [
        'Faithless electors switch their votes after the election to overturn the popular-vote result.',
        'Faithless electors have never changed an outcome and are now finable under Chiafalo v. Washington; the gap comes from vote distribution, not elector defection.',
        'The split is baked in before electors meet: it is about where votes are concentrated, not about electors breaking their pledges.',
      ],
      [
        'The Senate awards bonus electoral votes to the candidate who carries the most states.',
        'There is no such bonus and no Senate role in awarding electors; the divergence is purely an artifact of state-by-state winner-take-all tallies.',
        'No body hands out extra electors for carrying more states. The popular-vote gap emerges from margins inside each state, not a count of states won.',
      ],
      [
        'Census errors miscount population so that electors no longer match the popular vote.',
        'Apportionment uses fixed census numbers years in advance; the popular/electoral split happens with perfectly accurate vote counts because of how those votes cluster.',
        'Even with flawless counts the split occurs. The cause is winner-take-all geography, not measurement error.',
      ],
    ],
    'Lesson: Because most states are winner-take-all, votes beyond the threshold to win a state are wasted, so a candidate who wins many states narrowly can beat one who wins fewer states by landslides. This is deep because it shows an election can be decided by the geographic distribution of votes rather than their total, raising the question of whether the thing being maximized is consent of the majority or consent of the right places.',
    'Floe generated',
    true,
    'Ask what happens to the millionth extra vote in a state you already won by a million.',
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Districts, Apportionment, and Gerrymandering
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10112002,
    'Career Skills',
    'Districts, Apportionment, and Gerrymandering',
    'Packing and cracking',
    'A mapmaker wants their party to win the most seats with the same statewide votes. They draw one district that the rival party wins 90 to 10, and three districts the rival loses 45 to 55. What are these two moves called, and why do they manufacture seats?',
    'Packing (the 90-10 landslide) and cracking (the 45-55 losses): both bury the rivals votes where they cannot elect anyone, so the same total votes yield fewer rival seats.',
    [
      [
        'Apportionment and reapportionment, the routine redrawing required after each census.',
        'Apportionment is the neutral allocation of seats to states by population; deliberately wasting an opponent votes within districts is the partisan act of gerrymandering.',
        'Redrawing after a census is the occasion; packing and cracking are the manipulations done while drawing, designed to waste rival votes.',
      ],
      [
        'Malapportionment, where districts simply hold unequal numbers of people.',
        'These districts can hold equal populations and still be gerrymandered; the trick is how voters are sorted, not how many live in each district.',
        'Equal-population districts can still be rigged. The lever here is the partisan arrangement of voters, not unequal head counts.',
      ],
      [
        'Proportional representation, which guarantees seats match each party vote share.',
        'Proportional representation is the opposite goal; packing and cracking exist precisely to make seat share diverge from vote share under single-member districts.',
        'PR would prevent this distortion. Packing and cracking are how single-member maps break the link between votes and seats.',
      ],
    ],
    'Lesson: Packing concentrates the opponents voters into a few landslide districts and cracking splinters the rest below the winning threshold, so identical statewide vote totals translate into wildly different seat counts. This is deep because it exposes a hidden premise of single-member districts: representation depends not on how many vote for you but on how your supporters are partitioned, so whoever draws the lines can quietly pre-decide the winners.',
    'Floe generated',
    true,
    'Count the rival votes that elect nobody in each scenario, and ask who chose to strand them there.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10112003,
    'Career Skills',
    'Districts, Apportionment, and Gerrymandering',
    'The efficiency gap',
    'Courts wanted a number to detect partisan gerrymanders. The efficiency gap counts each party "wasted" votes: every vote for a loser, plus every vote beyond the 50%-plus-one a winner needed. Why does comparing the two parties wasted-vote totals reveal a rigged map?',
    'A fair map wastes roughly equal votes for both parties; a large imbalance means one party votes were systematically packed and cracked into not counting, which is the signature of a gerrymander.',
    [
      [
        'It measures how oddly shaped the districts are, since gerrymanders always look contorted.',
        'The efficiency gap ignores shape entirely; it counts wasted votes, and a map made of tidy squares can still strand one party votes massively.',
        'Compactness is a separate, weaker clue. The efficiency gap catches the harm directly by counting which votes failed to elect anyone.',
      ],
      [
        'It checks whether each district has an equal population, the core legal requirement.',
        'Equal population (one person, one vote) is a different rule; districts can be perfectly equal in size yet have a huge efficiency gap from partisan sorting.',
        'Equal headcounts can coexist with a rigged map. The efficiency gap measures wasted votes, not population balance.',
      ],
      [
        'It confirms the statewide vote share exactly equals the statewide seat share.',
        'Single-member districts never guarantee that match; the metric instead flags when wasted votes are lopsided, not when seats fail to mirror votes one-to-one.',
        'Vote-share equaling seat-share is a PR ideal. The efficiency gap tolerates some gap and only alarms at a partisan imbalance in wasted votes.',
      ],
    ],
    'Lesson: The efficiency gap quantifies gerrymandering by tallying wasted votes (losing votes plus surplus winning votes) for each party and flagging large asymmetries, turning a slippery accusation into a testable statistic. This is deep because it tries to make fairness measurable, yet it also reveals an uncomfortable truth: in single-member districts, every election wastes most votes, so the question is never whether votes are wasted but only whether they are wasted evenly.',
    'Floe generated',
    true,
    'Tally the votes that elected no one for each party, then ask whether the two piles are lopsided.',
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Voting Methods and Ranked-Choice
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10112004,
    'Career Skills',
    'Voting Methods and Ranked-Choice',
    'The Condorcet winner who lost',
    'In Burlington 2009, ranked-choice voting eliminated the centrist candidate early because he had the fewest first-choice votes, even though head-to-head he would have beaten every rival one-on-one. What does this case reveal about instant-runoff voting?',
    'Instant-runoff can eliminate a Condorcet winner: a broadly acceptable compromise candidate can be dropped for lacking first-place votes, even though a majority preferred him to each opponent individually.',
    [
      [
        'It proves ranked-choice voting always elects the candidate a majority prefers head-to-head.',
        'Burlington is the counterexample: the head-to-head (Condorcet) winner was eliminated, so instant-runoff does not guarantee electing the pairwise-preferred candidate.',
        'The whole point of the case is that the Condorcet winner lost, which is exactly what instant-runoff failed to protect.',
      ],
      [
        'It shows the centrist lost only because of a vote-counting error that has since been fixed.',
        'No error occurred; the rules worked as designed, and the paradox is a structural feature of sequential elimination, not a clerical mistake.',
        'The count was correct. The surprise is built into the method, not into the arithmetic.',
      ],
      [
        'It demonstrates that plurality (choose-one) voting would have produced the same fair result.',
        'Plurality would have elected the first-round leader, also not the Condorcet winner; the lesson is that both methods can miss the pairwise-preferred candidate, not that plurality fixes it.',
        'Plurality would have crowned a different non-Condorcet winner. Neither method reliably finds the head-to-head favorite.',
      ],
    ],
    'Lesson: A Condorcet winner beats every rival one-on-one, yet instant-runoff eliminates candidates by first-choice counts, so a consensus centrist can be cut before that strength ever registers. This is deep because it shows "the candidate the most people prefer" is genuinely ambiguous: most first choices, most pairwise wins, and most majority support can point to three different people, and the voting rule silently decides which one we call the will of the voters.',
    'Floe generated',
    true,
    'Ask whether being everyone second choice but few people first choice should win or lose.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10112005,
    'Career Skills',
    'Voting Methods and Ranked-Choice',
    'Arrow impossibility theorem',
    'Kenneth Arrow asked whether any ranked voting method could always satisfy a few modest fairness rules at once: no dictator, unanimous choices respected, and the ranking of A versus B unaffected by an irrelevant third candidate C. With three or more options, what did he prove?',
    'No ranked method can satisfy all of those reasonable conditions simultaneously; every system must violate at least one, so there is no perfect voting rule.',
    [
      [
        'He proved ranked-choice voting uniquely satisfies all the conditions and is therefore optimal.',
        'Arrow proved no method satisfies all conditions with three-plus options; ranked-choice is not exempt and fails some of them, like independence of irrelevant alternatives.',
        'The theorem is an impossibility result, not an endorsement. It rules out a flawless method, including ranked-choice.',
      ],
      [
        'He proved that with enough voters, any fair method converges on the same correct winner.',
        'The result is about the conflict among criteria for three-plus candidates, not about large electorates converging; adding voters does not rescue the impossibility.',
        'More voters do not dissolve the tension. The clash is logical, among the fairness rules themselves, not statistical.',
      ],
      [
        'He proved majority rule with two candidates also breaks down, so binary votes are unreliable.',
        'With exactly two options simple majority works fine and satisfies the conditions; the impossibility bites only when there are three or more alternatives.',
        'Two-candidate majority rule is the well-behaved case. Arrow trouble begins precisely at three or more options.',
      ],
    ],
    'Lesson: Arrow proved that for three or more options no ranked voting rule can jointly guarantee non-dictatorship, unanimity, and independence of irrelevant alternatives, so every method trades away some fairness ideal. This is deep because it reframes voting reform from "find the fair system" to "choose which unfairness you can live with," suggesting that aggregating many preferences into one collective ranking is not a solvable engineering problem but an inescapable compromise.',
    'Floe generated',
    true,
    'Ask whether the failures of voting systems are bugs to fix or a wall every system hits.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10112006,
    'Career Skills',
    'Voting Methods and Ranked-Choice',
    'The spoiler effect',
    'In a plurality election, two similar candidates split the vote that prefers their shared platform, letting a third candidate the majority dislikes win with the largest minority. Which fairness criterion does this violate, and what is the practical lesson voters draw?',
    'It violates independence of irrelevant alternatives: adding a similar candidate flips the outcome between the others, which pressures voters to abandon their true favorite and vote strategically for a likely winner.',
    [
      [
        'It violates the one-person-one-vote rule, because the spoiler candidate voters effectively voted twice.',
        'Everyone still casts one vote; the problem is how a third option reshuffles the result between the other two, not any double counting.',
        'No one votes twice. The flaw is that an irrelevant entrant changes who wins, which is a criterion failure, not a counting abuse.',
      ],
      [
        'It violates monotonicity, because ranking the winner higher made them lose.',
        'Monotonicity is a different paradox about a candidate own support backfiring; the spoiler effect is about a third candidate altering the contest between two others.',
        'Monotonicity concerns helping a candidate by ranking them lower. The spoiler issue is an irrelevant alternative swinging the result.',
      ],
      [
        'It violates nothing, because the candidate with the most votes legitimately won.',
        'Most votes is exactly the trap: a majority opposed the winner, and a near-clone entrant changed the outcome, which is the independence-of-irrelevant-alternatives failure.',
        'Winning a plurality is not the same as commanding a majority. The entrant flipping the result is the very defect at issue.',
      ],
    ],
    'Lesson: The spoiler effect violates independence of irrelevant alternatives because a third, similar candidate can flip the winner between the other two, which is why plurality voters feel forced to betray their favorite for a frontrunner. This is deep because it shows the act of voting honestly can sabotage your own goals, so the system quietly punishes sincerity and rewards strategy, distorting the very preferences it claims to measure.',
    'Floe generated',
    true,
    'Ask whether your honest first choice could be the move that hands victory to the side you least want.',
    { challengeRating: 6 },
  ),
]
