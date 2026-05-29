import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe usGovAndCivics high top-up'

export const usGovAndCivicsHighTopUpQuestions: Question[] = makeQuestionBank('High', [
  // Chapter 1: Constitutional Foundations and Democratic Ideas
  {
    id: 7574000,
    chapter: 'Constitutional Foundations and Democratic Ideas',
    title: 'Madison on factions',
    prompt: 'In Federalist No. 10, what is James Madison’s main argument for why a large republic is better at controlling the dangers of faction?',
    correct: 'A large republic contains so many competing interests that no single faction can easily form a tyrannical majority',
    wrong: [
      miss('A large republic can simply outlaw factions and the groups that cause them', 'Madison rejects removing the causes of faction, saying liberty is to faction what air is to fire — you cannot abolish factions without destroying liberty.', 'Madison wants to control the effects of factions, not ban them.'),
      miss('A large republic lets the federal government censor any group that disagrees with the majority', 'Federalist 10 relies on diversity and competition among factions, not government censorship of dissent.', 'Think about many interests checking each other, not silencing them.'),
      miss('A large republic guarantees that the majority always gets exactly what it wants', 'Madison’s goal is the opposite — to stop a single majority faction from imposing its will on the minority.', 'Madison fears majority faction, so he would not celebrate guaranteed majority rule.'),
    ],
    lesson: 'Federalist No. 10 argues that factions cannot be eliminated without destroying liberty, so the Constitution should control their effects. Madison claims a large, diverse republic makes it hard for any one faction to become a tyrannical majority, because many competing interests must negotiate and compromise.',
    source,
    generated: true,
  },
  // Chapter 2: Federalism and "Who Can Fix This?"
  {
    id: 7574001,
    chapter: 'Federalism and "Who Can Fix This?"',
    title: 'When laws conflict',
    prompt: 'A valid federal law and a state law directly conflict on the same issue. Under the Supremacy Clause, which one generally prevails?',
    correct: 'The federal law prevails, as long as the federal government acted within its constitutional powers',
    wrong: [
      miss('The state law always prevails because states are closer to the people', 'The Supremacy Clause makes constitutional federal law the supreme law of the land; closeness to the people does not override it.', 'Read Article VI on which law is supreme.'),
      miss('Whichever law was passed more recently automatically prevails', 'For a federal-state conflict the date of passage is not the test — valid federal law is supreme regardless of which came first.', 'This is about federal vs. state, not newer vs. older.'),
      miss('Both laws are automatically void and the matter goes unregulated', 'A conflict does not erase both laws; the constitutional federal law controls while the conflicting state provision yields.', 'One side wins under the Supremacy Clause rather than both losing.'),
    ],
    lesson: 'The Supremacy Clause (Article VI) makes the Constitution and valid federal laws the supreme law of the land. When a constitutional federal law conflicts with a state law, the federal law prevails — but only if Congress acted within its enumerated powers.',
    source,
    generated: true,
  },
  {
    id: 7574002,
    chapter: 'Federalism and "Who Can Fix This?"',
    title: 'Powers reserved to states',
    prompt: 'The Tenth Amendment is the constitutional basis for which idea?',
    correct: 'Powers not given to the federal government, nor denied to the states, are reserved to the states or the people',
    wrong: [
      miss('Powers shared by both the federal and state governments, like taxation', 'Shared authority describes concurrent powers; the Tenth Amendment specifically reserves leftover powers to the states or the people.', 'The Tenth Amendment is about what is left over, not what is shared.'),
      miss('The exclusive list of powers granted to Congress in Article I', 'Those are enumerated powers; the Tenth Amendment addresses powers that are not enumerated.', 'Enumerated powers are listed; reserved powers are the remainder.'),
      miss('The power of courts to review and strike down unconstitutional laws', 'That is judicial review from Marbury v. Madison, not the Tenth Amendment.', 'This amendment is about who keeps unlisted powers, not court authority.'),
    ],
    lesson: 'The Tenth Amendment reserves to the states or the people any powers the Constitution neither grants to the federal government nor forbids to the states. These reserved powers underpin state authority over areas like education, policing, and most local matters.',
    source,
    generated: true,
  },
  // Chapter 3: Congress and Lawmaking
  {
    id: 7574003,
    chapter: 'Congress and Lawmaking',
    title: 'Breaking a filibuster',
    prompt: 'How many votes are normally required in the U.S. Senate to invoke cloture and end a filibuster on most legislation?',
    correct: '60 votes (three-fifths of the Senate)',
    wrong: [
      miss('51 votes (a simple majority)', 'A simple majority can pass a bill once debate ends, but it is not enough to overcome a filibuster and force a vote.', 'Cloture needs a supermajority, not just a majority.'),
      miss('67 votes (two-thirds of the Senate)', 'Two-thirds was the old standard before 1975; the cloture threshold for most legislation was lowered to three-fifths, or 60 votes.', 'The modern threshold is lower than two-thirds.'),
      miss('100 votes (unanimous consent)', 'Unanimous consent is a separate procedure; cloture exists precisely so the Senate can end debate without total agreement.', 'If everyone agreed, there would be no filibuster to break.'),
    ],
    lesson: 'A filibuster lets senators extend debate to block a vote. Under Senate Rule XXII, ending debate (cloture) on most legislation requires 60 votes, a three-fifths supermajority. This is why a simple 51-vote majority often cannot pass a bill in the Senate.',
    source,
    generated: true,
  },
  {
    id: 7574004,
    chapter: 'Congress and Lawmaking',
    title: 'Authorize vs. fund',
    prompt: 'Congress passes a law creating a new national tutoring program but never provides the dollars to run it. What is the most accurate description of what happened?',
    correct: 'The program was authorized but not appropriated, so it may legally exist yet have no funding to operate',
    wrong: [
      miss('The program is fully operational because passing a law automatically provides its budget', 'Passing an authorizing law does not move money; a separate appropriations bill is normally required to fund it.', 'Authorizing and funding are two different steps.'),
      miss('The program is unconstitutional because Congress cannot create programs without the president', 'Congress can create programs through legislation; the issue here is funding, not constitutionality.', 'Nothing here violates the Constitution — it is a budget gap.'),
      miss('The Supreme Court must now decide whether to fund the program', 'Funding decisions belong to Congress through appropriations, not to the courts.', 'Courts do not write spending bills.'),
    ],
    lesson: 'Authorization and appropriation are separate steps in Congress. An authorization bill creates or permits a program; an appropriations bill actually provides the money. A program can be authorized yet sit idle if Congress never appropriates funds for it.',
    source,
    generated: true,
  },
  // Chapter 4: Presidency, Bureaucracy, and Executive Power
  {
    id: 7574005,
    chapter: 'Presidency, Bureaucracy, and Executive Power',
    title: 'Limits of executive orders',
    prompt: 'A president issues an executive order. Which statement best describes a key limit on executive orders?',
    correct: 'A later president can rescind it, and courts can strike it down if it exceeds the president’s legal authority',
    wrong: [
      miss('Once signed, an executive order has the same permanence as a constitutional amendment', 'Executive orders are far easier to undo than amendments; the next president can simply reverse them.', 'Amendments need ratification; orders need only a signature to create or cancel.'),
      miss('An executive order can repeal any act of Congress the president dislikes', 'A president cannot use an order to override a statute; orders must operate within existing law.', 'Orders direct the executive branch; they do not erase laws.'),
      miss('An executive order requires a two-thirds vote of Congress before it takes effect', 'Executive orders do not need congressional approval to take effect; that requirement is invented.', 'The president acts alone, which is exactly why orders are vulnerable.'),
    ],
    lesson: 'An executive order directs the executive branch and takes effect without congressional approval, which makes it fast but fragile. A future president can rescind it, courts can invalidate it if it exceeds the president’s authority, and it cannot override an act of Congress.',
    source,
    generated: true,
  },
  // Chapter 5: Courts, Civil Liberties, and Civil Rights
  {
    id: 7574006,
    chapter: 'Courts, Civil Liberties, and Civil Rights',
    title: 'Marbury’s legacy',
    prompt: 'The 1803 case Marbury v. Madison is most important for establishing which principle?',
    correct: 'Judicial review — the power of courts to declare a law unconstitutional and void',
    wrong: [
      miss('Selective incorporation of the Bill of Rights against the states', 'Incorporation came much later through the Fourteenth Amendment; Marbury established judicial review.', 'Marbury is about court power, not applying rights to states.'),
      miss('The president’s authority to deliver judicial commissions', 'The Court actually ruled it could not order delivery in this case; the lasting principle was judicial review.', 'Focus on the broad power the case created, not the dispute over a single commission.'),
      miss('The supremacy of state courts over federal courts', 'Marbury strengthened federal judicial authority; it did not elevate state courts over federal ones.', 'The case expanded federal court power.'),
    ],
    lesson: 'In Marbury v. Madison (1803), Chief Justice John Marshall established judicial review: the power of federal courts to strike down laws that conflict with the Constitution. It made the Constitution enforceable law rather than a statement of ideals, and is a foundation of the modern judiciary.',
    source,
    generated: true,
  },
  {
    id: 7574007,
    chapter: 'Courts, Civil Liberties, and Civil Rights',
    title: 'Liberties vs. rights',
    prompt: 'Which pairing correctly distinguishes a civil liberty from a civil right?',
    correct: 'Free speech is a civil liberty (protection from government); equal treatment regardless of race is a civil right (protection from discrimination)',
    wrong: [
      miss('Both free speech and equal treatment are civil rights with no meaningful difference', 'They are usually distinguished: liberties protect freedoms from government, while rights protect against discrimination.', 'One protects a freedom; the other protects equal treatment.'),
      miss('Free speech is a civil right and equal protection is a civil liberty', 'This reverses the categories; free speech is a liberty and equal protection is a civil right.', 'Check which one is a freedom from government action.'),
      miss('Civil liberties apply only to citizens while civil rights apply only to non-citizens', 'Both concepts can protect people broadly; the citizen/non-citizen line is not the distinction.', 'The difference is what kind of protection, not who is covered.'),
    ],
    lesson: 'Civil liberties are protections from government interference with individual freedoms, such as speech, religion, and privacy. Civil rights are protections against discrimination that guarantee equal treatment, such as equal protection regardless of race or sex. Mixing the two is a common error.',
    source,
    generated: true,
  },
  {
    id: 7574008,
    chapter: 'Courts, Civil Liberties, and Civil Rights',
    title: 'Applying rights to states',
    prompt: 'Through which constitutional mechanism does the Supreme Court apply most protections in the Bill of Rights to state governments?',
    correct: 'Selective incorporation using the Due Process Clause of the Fourteenth Amendment',
    wrong: [
      miss('The Supremacy Clause of Article VI', 'The Supremacy Clause settles federal-state conflicts but is not the tool for applying the Bill of Rights to states.', 'Incorporation works through a specific amendment, not Article VI.'),
      miss('The Tenth Amendment’s reservation of powers to the states', 'The Tenth Amendment protects state powers; it is not the route for binding states to the Bill of Rights.', 'You need an amendment that limits the states, not one that empowers them.'),
      miss('A unanimous vote of all fifty state legislatures', 'Incorporation is a judicial process decided by the courts, not a vote of state legislatures.', 'Courts do this case by case, not legislatures.'),
    ],
    lesson: 'Originally the Bill of Rights limited only the federal government. Through selective incorporation, the Supreme Court has used the Fourteenth Amendment’s Due Process Clause to apply most of those protections to the states, one fundamental right at a time.',
    source,
    generated: true,
  },
  // Chapter 6: Political Ideologies, Public Opinion, and Media
  {
    id: 7574009,
    chapter: 'Political Ideologies, Public Opinion, and Media',
    title: 'Reading the margin of error',
    prompt: 'A poll reports Candidate A at 48% and Candidate B at 45%, with a margin of error of plus or minus 4 points. What is the most accurate interpretation?',
    correct: 'The race is effectively a statistical tie, because the candidates’ ranges overlap within the margin of error',
    wrong: [
      miss('Candidate A is certain to win because 48% is higher than 45%', 'A 3-point gap is smaller than the 4-point margin of error, so the lead is not statistically meaningful.', 'Compare the gap to the margin of error before claiming a winner.'),
      miss('The margin of error means exactly 4% of voters are undecided', 'Margin of error reflects sampling uncertainty, not the share of undecided voters.', 'Margin of error is about poll precision, not undecided counts.'),
      miss('The poll is invalid because the percentages do not add up to 100%', 'Polls often leave room for undecided or other responses; not summing to 100 does not invalidate them.', 'Remaining percentage can be undecided or other.'),
    ],
    lesson: 'A poll’s margin of error shows how much sampling could shift the true value. When the gap between candidates is smaller than the margin of error, their likely ranges overlap and the result is a statistical tie — not a clear lead.',
    source,
    generated: true,
  },
  // Chapter 7: Elections, Parties, Interest Groups, and Money
  {
    id: 7574010,
    chapter: 'Elections, Parties, Interest Groups, and Money',
    title: 'Winning the presidency',
    prompt: 'How many of the 538 electoral votes must a presidential candidate win to be elected outright?',
    correct: '270 — a majority of the 538 electoral votes',
    wrong: [
      miss('269 — exactly half of the electoral votes', '269 is only half; a 269–269 split is a tie, so a candidate needs one more, which is 270.', 'A tie does not win; you need a majority.'),
      miss('A simple majority of the national popular vote', 'The presidency is decided by electoral votes, not directly by the national popular vote total.', 'Think electors, not raw vote counts.'),
      miss('435 — the number of seats in the House of Representatives', '435 is the size of the House, not the electoral-vote threshold for the presidency.', 'That number describes a chamber of Congress, not electors.'),
    ],
    lesson: 'The Electoral College has 538 electors, equal to all members of Congress plus three for Washington, D.C. A candidate needs a majority — 270 — to win. If no one reaches 270, the House chooses the president, with each state delegation casting one vote.',
    source,
    generated: true,
  },
  // Chapter 8: Public Policy and Civic Action Lab
  {
    id: 7574011,
    chapter: 'Public Policy and Civic Action Lab',
    title: 'Aiming civic action',
    prompt: 'A student wants the speed limit lowered on the road outside their public high school. Which first step is most likely to be effective?',
    correct: 'Identify which body controls that road — often the city council or county — and bring evidence to the right decision-maker before the relevant vote',
    wrong: [
      miss('Email the President of the United States, since the president runs the country', 'Local road speed limits are set by city or county authorities, not the president.', 'Match the issue to the level of government that controls it.'),
      miss('Wait until after the budget and traffic decisions are finalized, then complain publicly', 'Civic action works best when it is timed before the decision, not after it is locked in.', 'Timing matters — act before the vote.'),
      miss('Start a petition demanding the U.S. Supreme Court change the speed limit', 'Courts resolve legal disputes; they do not set local speed limits through petitions.', 'This is a policy decision for local officials, not a court.'),
    ],
    lesson: 'Effective civic action starts by mapping authority: identify which body actually controls the decision, bring specific evidence, and act before the decision is made. Aiming at the wrong level of government or acting too late wastes effort — a core lesson of the "who can fix this?" approach.',
    source,
    generated: true,
  },
])
