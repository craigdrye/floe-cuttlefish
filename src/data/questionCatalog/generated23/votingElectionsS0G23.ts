import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const votingElectionsS0G23: Question[] = [
  makeSimpleQuestion(
    9260000,
    'Career Skills',
    'Voting Methods and Ranked-Choice',
    "Duverger's law",
    'A country elects its entire legislature using single-member districts decided by plurality (the top vote-getter in each district wins the one seat). Over many cycles, two large parties keep dominating while minor parties win almost nothing. Which mechanism best explains this persistent two-party tendency?',
    "Single-member plurality wastes votes for non-leading candidates and pushes voters to back one of the two viable contenders, the pattern Duverger's law describes",
    [
      ["It is required by the federal constitution, which caps the number of national parties at two", "No US (or comparable) constitution limits the number of parties; the two-party tendency emerges from the voting rule, not a legal cap.", "Locate the cause in the electoral system (single-seat plurality), not an imaginary statute."],
      ["Proportional representation is in use, so seats are split between exactly two parties", "Proportional representation does the opposite: it tends to support multiple viable parties by awarding seats in proportion to votes. The scenario describes single-member plurality, not PR.", "Match the mechanism to the rule described: plurality concentrates support; PR disperses it."],
      ["Ranked-choice voting forces voters to pick only their top two parties", "Ranked-choice lets voters rank every candidate and is associated with reducing the wasted-vote problem, not creating a two-party lock; the scenario uses plurality, not RCV.", "Distinguish the rule in play (plurality) from RCV, which changes incentives rather than reinforcing them."],
    ],
    "Duverger's law observes that single-member-district plurality systems tend toward two dominant parties through two forces: a mechanical effect (votes for non-leading candidates win no seats, so a third party's support translates poorly into seats) and a psychological effect (voters anticipate this and strategically back a viable major-party candidate to avoid wasting their vote). Proportional systems weaken both forces and typically sustain more parties.",
    'Floe generated',
    true,
    "Ask what the voting rule does to a vote cast for a candidate who finishes third, and how voters react once they expect that.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9260001,
    'Career Skills',
    'Direct Democracy and Ballot Measures',
    'Indirect vs direct initiative',
    'Citizens in a state collect enough valid signatures for a proposed statute. By that state\'s rules, the measure is first transmitted to the legislature, which may enact it as written; only if lawmakers reject it or take no action does it then go on the ballot for voters. What kind of initiative is this?',
    'An indirect initiative, because it is routed through the legislature before reaching the ballot',
    [
      ["A direct initiative, since citizens gathered the signatures themselves", "Citizen signatures qualify both direct and indirect initiatives; what distinguishes this one is the mandatory stop at the legislature first. A direct initiative skips the legislature and goes straight to the ballot.", "Key on the routing, not who signed: legislature-first means indirect."],
      ["A legislative referendum, because the legislature is involved", "A legislative referendum is a measure the legislature itself refers to voters; here the measure originated with citizens and the legislature is merely given a chance to adopt it.", "Track the origin: citizen-originated measures are initiatives, even when lawmakers get a first look."],
      ["A recall, because voters are acting against the legislature's inaction", "A recall removes an official from office; this process concerns enacting a proposed law, not removing a person.", "Recalls target people; initiatives target laws. This is about a statute."],
    ],
    'Ballot initiatives come in two procedural forms. A direct initiative goes straight onto the ballot once enough valid signatures are filed. An indirect initiative is first submitted to the legislature, which can enact it (sparing a popular vote) or decline; only then does it advance to voters. Both are citizen-originated, so the legislature step, not who collected signatures, is the deciding feature.',
    'Floe generated',
    true,
    "Both forms start with citizen signatures, so the label hinges on one procedural detour. Where does the measure go before voters see it?",
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9260002,
    'Career Skills',
    'Direct Democracy and Ballot Measures',
    'Single-subject rule',
    "An initiative sponsor bundles a popular minimum-wage increase with an unrelated tax break for a specific industry into one measure, so voters must accept or reject the package as a whole. A court in a state with this safeguard strikes the measure from the ballot. Which rule did the measure most likely violate?",
    "The single-subject rule, which requires a ballot initiative to address only one subject",
    [
      ["The secret-ballot requirement, because bundling reveals how people vote", "The secret ballot protects the privacy of an individual's choices; it has nothing to do with how many topics a measure contains.", "Separate ballot privacy from measure content: the problem here is scope, not secrecy."],
      ["The supermajority rule, because combined measures need a two-thirds vote", "The defect is that the measure combines unrelated subjects, not the vote threshold needed to pass; courts removed it before any vote, not for missing a supermajority.", "Focus on why it was struck before voting: too many subjects, not too few yes-votes."],
      ["Federal preemption, because Congress controls minimum-wage initiatives", "There is no federal initiative process and federal preemption is not why a state court would pull a measure for bundling; the issue is the measure's multiple subjects under state law.", "Recognize this as a state-law content rule, not a federal-versus-state conflict."],
    ],
    'Many states that allow initiatives impose a single-subject rule: a ballot measure may cover only one subject. The rule prevents "logrolling" (bundling a popular item with an unrelated, weaker one so the package drags the second across the line) and reduces voter confusion. Courts test compliance by asking whether the parts share a natural and necessary connection to one purpose; unrelated provisions can get the whole measure struck.',
    'Floe generated',
    true,
    "The measure was pulled for what it contained, not for how it would be tallied. Think about why combining unrelated policies in one vote is itself a problem.",
    { challengeRating: 6 },
  ),
]
