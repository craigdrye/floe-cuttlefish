import { makeQuestionBank } from './base'
import type { Question } from './types'

// AP US GOVERNMENT — CHAPTER 7 EXPANSION
// ----------------------------------------------------------------------------
// 46 new questions (IDs 4360700–4360745) extending Chapter 7: Political
// Beliefs, Ideology, and Public Opinion in highApUsGovernmentQuestions
// (civicPoliticsQuestions.ts).
//
// The existing four chapter-level items already test: political socialization
// via family party ID (4330070), margin of error (482010), loaded question
// wording (4330071), and libertarian ideology mapping (4330072). Those
// concepts are not retested here; the new bank deepens coverage around:
//
//   - Socialization agents beyond family: school, peers, media, religion,
//     workplace, and major generational events (Great Depression, 9/11)
//   - Generational cohort vs life-cycle effects (Silent, Boomer, X, Y, Z)
//   - Ideology axes: economic vs social; libertarian vs populist
//   - American liberalism (New Deal, civil rights, regulatory state)
//   - American conservatism (limited government, traditional values,
//     federalism, free markets)
//   - Libertarianism (Cato, Reason) and populism (left and right)
//   - Polling methodology: sampling frame, random vs convenience, RDD,
//     online panels (YouGov, Ipsos), exit polls, push polls (banned by
//     AAPOR), tracking polls, cross-sectional vs panel vs longitudinal
//   - Sample size and margin of error: ~n=1000 -> ±3% at 95% CI;
//     halving MOE requires quadrupling N
//   - Question wording, order effects, social desirability bias
//   - Sampling error vs nonresponse bias; declining live-phone response
//   - Likely-voter screens and the 2016 / 2020 Trump-support misses
//   - Public opinion -> policy: latent vs salient, issue publics, mood
//   - Polarization: party-line voting, affective polarization, sorting
//   - Independents: leaners vs pure independents (~10%)
//   - Political efficacy: internal vs external
//   - Trust in government decline (~75% in 1964 to ~20% in 2020s)
//   - Civic engagement, Putnam "Bowling Alone"
//
// Voice: sober, nonpartisan, evidence-anchored. Every wrong answer has a
// bespoke whyWrong. Distractors are real AP student misconceptions, not
// strawmen. Lessons name the specific phenomenon, pollster, or study.
// US context throughout.
// ----------------------------------------------------------------------------

const CHAPTER = 'Chapter 7: Political Beliefs, Ideology, and Public Opinion'

export const apUsGovCh7Questions: Question[] = makeQuestionBank('AP', [
  // ---------------------------------------------------------------------
  // Political socialization — agents beyond family
  // ---------------------------------------------------------------------
  {
    id: 4360700,
    chapter: CHAPTER,
    title: 'Strongest socialization predictor',
    prompt: 'Decades of American National Election Studies (ANES) data show that, among the standard agents of political socialization, the single strongest predictor of a young adult\'s initial party identification is:',
    correct: 'The party identification of the adult\'s parents, especially when both parents share the same identification',
    wrong: [
      ['The political ideology of the adult\'s high-school civics teacher', 'School influences civic knowledge and participation but does not predict party identification as strongly as the family transmission ANES has tracked since the 1950s.', 'Schools matter, but family transmission is the heavier lift.'],
      ['The political content of the social-media accounts the adult follows', 'Media exposure can reinforce or shift views at the margin, but baseline party ID is typically formed earlier through family before heavy media exposure.', 'Media matters more for reinforcement than first formation.'],
      ['The political views of the adult\'s closest workplace colleagues', 'Workplace influence shapes adult attitudes, especially on economic issues, but it operates on identities largely already formed in adolescence.', 'Workplace is a secondary, not primary, socialization agent.'],
    ],
    lesson: 'Political scientists rank family as the strongest single agent of political socialization, with school, peers, religion, media, workplace, and major generational events filling in around it. Family transmission is most powerful when both parents share an identification.',
  },
  {
    id: 4360701,
    chapter: CHAPTER,
    title: 'Generational event shock',
    prompt: 'A 2020s study finds that Americans who came of voting age in 1933–1940 show unusually high lifetime support for federal economic-relief programs, even after controlling for income and region. The pattern is best explained by:',
    correct: 'A generational or cohort effect from coming of age during the Great Depression and the New Deal',
    wrong: [
      ['A life-cycle effect, because older voters always prefer more redistribution', 'Life-cycle effects describe changes as the same person ages; the pattern here is specific to the cohort that came of age in a single window, not to old age generally.', 'Distinguish cohort from life cycle.'],
      ['Selection bias in the sample, because Depression-era voters are no longer alive to be surveyed', 'Some members of this cohort were still surveyed into the 2010s and 2020s, and the cohort effect is observed in repeated cross-sectional studies before that.', 'The data exist; the question is how to interpret them.'],
      ['Affective polarization, because Depression-era voters dislike the opposing party more', 'Affective polarization describes emotional distance between parties; the observation here is about policy preference, not feelings about the out-party.', 'Policy preference, not partisan emotion, is the variable.'],
    ],
    lesson: 'Cohort effects (shared formative events at a generation\'s coming of age) differ from life-cycle effects (changes that come with aging). The Great Depression, World War II, the civil-rights movement, Vietnam, 9/11, and the 2008 financial crisis are commonly cited cohort-shaping events in US public-opinion research.',
  },
  {
    id: 4360702,
    chapter: CHAPTER,
    title: 'Cohort vs life cycle',
    prompt: 'Researchers observe that Americans tend to vote at higher rates as they age. They want to determine whether this is a cohort effect (a particular generation is more civic-minded) or a life-cycle effect (the same person becomes more likely to vote as they age). The most useful study design would be:',
    correct: 'A panel study following the same individuals across decades, tracking their voting behavior as they age',
    wrong: [
      ['A single cross-sectional poll asking respondents of all ages about their current voting habits', 'A single snapshot cannot separate cohort from life cycle because it observes each age group only once; differences could be either.', 'Cross-sections show both effects mixed together.'],
      ['An exit poll on Election Day measuring who actually voted that year', 'Exit polls capture a single election\'s voters and cannot follow the same person across decades.', 'Exit polls are point-in-time.'],
      ['A push poll designed to nudge older voters toward higher turnout', 'Push polls are advocacy disguised as research and are banned under AAPOR ethics; they are not a research method.', 'Push polls are not research.'],
    ],
    lesson: 'Separating cohort from life-cycle effects requires longitudinal data (a panel study) following the same individuals over time. Repeated cross-sections can approximate this but cannot rule out that observed change is cohort replacement rather than within-person change.',
  },
  {
    id: 4360703,
    chapter: CHAPTER,
    title: 'Religion as socialization agent',
    prompt: 'Pew Research Center surveys consistently find that white evangelical Protestants vote more Republican than the national average, while Black Protestants vote more Democratic. The pattern most directly illustrates that:',
    correct: 'Religious tradition acts as an agent of political socialization, especially through congregations and community networks',
    wrong: [
      ['Religion has no measurable effect on American voting behavior', 'The cited pattern is itself evidence of a measurable effect; the question is its mechanism, not its existence.', 'The data show effect; identify the mechanism.'],
      ['The Establishment Clause prevents religious influence on voting', 'The Establishment Clause restricts government action on religion, not private religious socialization or political behavior of believers.', 'The clause limits government, not voters.'],
      ['Religious voters are sampled at higher rates and skew the result', 'Major surveys weight to known demographic benchmarks; the pattern persists after weighting.', 'Sampling weights correct for this.'],
    ],
    lesson: 'Religion is a socialization agent in its own right. Different traditions (white evangelical, mainline Protestant, Catholic, Black Protestant, Jewish, unaffiliated) show distinct and persistent partisan patterns in Pew, PRRI, and ANES data, mediated by congregations, clergy, and community networks.',
  },
  {
    id: 4360704,
    chapter: CHAPTER,
    title: 'Peer influence in college',
    prompt: 'A longitudinal study finds that students who arrived at college with one set of political views often graduate four years later with views closer to those of their roommates and close friends. The phenomenon is best described as:',
    correct: 'Peer group socialization, an established secondary agent of political socialization in young adulthood',
    wrong: [
      ['Sampling error from the original survey at college entry', 'The change is observed across many students over time, not a measurement artifact in any single survey.', 'A consistent within-person shift is not sampling noise.'],
      ['A violation of academic freedom by university administration', 'The pattern describes peer influence among students, not action by the institution.', 'Peers, not policy.'],
      ['Affective polarization between students and faculty', 'Affective polarization describes growing emotional dislike between partisan groups, not the convergence of attitudes within a friend group.', 'The pattern is convergence, not dislike.'],
    ],
    lesson: 'Peers are a recognized secondary agent of political socialization, particularly during late adolescence and early adulthood when identities remain malleable. The Bennington College studies of the 1930s and follow-ups remain a canonical example.',
  },
  // ---------------------------------------------------------------------
  // Ideology — economic vs social axes; American conservatism / liberalism
  // ---------------------------------------------------------------------
  {
    id: 4360705,
    chapter: CHAPTER,
    title: 'Economic vs social axes',
    prompt: 'A voter favors progressive taxation, stronger business regulation, and traditional positions on social and religious questions. Standard ideological labels handle this voter poorly because:',
    correct: 'The voter is economically progressive but socially traditional, a cross-pressured combination that does not fit cleanly on a single left-right line',
    wrong: [
      ['The voter is internally inconsistent and cannot be classified', 'Cross-pressured voters are common, especially among working-class religious voters, and their positions are coherent within their own framework.', 'Cross-pressure is real, not incoherence.'],
      ['Ideological labels apply only to elites, never to voters', 'Voters do hold ideological positions; the issue is that one-dimensional labels collapse a two-dimensional space.', 'The issue is dimensionality, not whether labels apply.'],
      ['The voter is a libertarian because they favor regulation', 'Libertarians favor less economic regulation and broad personal liberty, the opposite of the position described on both axes.', 'Libertarians would reject the regulation position.'],
    ],
    lesson: 'AP ideology items reward recognizing the two-dimensional structure of political belief: economic (regulation, redistribution) and social (rights, tradition vs progress). Cross-pressured voters are a common AP scenario.',
  },
  {
    id: 4360706,
    chapter: CHAPTER,
    title: 'American liberalism core',
    prompt: 'Which combination of policy commitments best summarizes modern American liberalism as the term is used in mainstream US political discourse?',
    correct: 'A federal social safety net, broader civil-rights protections, and substantial regulation of business and the environment',
    wrong: [
      ['Free markets, limited government, and traditional social values', 'That description fits modern American conservatism, not liberalism, in the standard US sense.', 'This is the conservative cluster.'],
      ['Maximum personal liberty in both economic and social life', 'That description fits libertarianism, which combines small government with broad personal liberty.', 'This is libertarianism.'],
      ['Anti-elite framing combined with strong national identity claims', 'That description fits populism, which can appear on the left or right but is defined by its anti-elite rhetoric, not by safety-net policy commitments.', 'This is populism.'],
    ],
    lesson: 'In US political vocabulary, "liberal" refers to a New Deal–civil-rights tradition combining federal social programs, regulation, and rights expansion. It differs from "classical liberalism," which is closer to American libertarianism.',
  },
  {
    id: 4360707,
    chapter: CHAPTER,
    title: 'American conservatism core',
    prompt: 'Which combination best summarizes modern American conservatism as the term is typically used in US politics?',
    correct: 'Limited federal government, free markets, traditional social values, and a preference for federalism over national uniformity',
    wrong: [
      ['Strong central planning of the economy and weak personal-liberty protections', 'American conservatism generally rejects central planning and supports market allocation; this option describes a statist framework opposite to it.', 'This is not the conservative cluster.'],
      ['Maximalist personal liberty including on drugs, surveillance, and sexual conduct', 'That cluster fits libertarianism, which differs from mainstream American conservatism on several social questions.', 'This is libertarianism.'],
      ['Expanded federal regulation of business combined with traditional social positions', 'Modern American conservatism generally opposes expanded federal business regulation; the combination described here is closer to a national-populist cluster.', 'Conservatives generally oppose expanded federal regulation.'],
    ],
    lesson: 'Modern American conservatism, as theorized by figures like William F. Buckley and developed through Reagan-era policy, combines limited government, free markets, traditional values, and federalism. Variants include fiscal-conservative, social-conservative, and national-populist strands.',
  },
  {
    id: 4360708,
    chapter: CHAPTER,
    title: 'Libertarian institutions',
    prompt: 'A think tank publishes reports arguing for lower marginal tax rates, repeal of occupational licensing laws, ending the war on drugs, scaling back surveillance programs, and reducing US military commitments abroad. The think tank\'s ideological orientation is best described as:',
    correct: 'Libertarian, combining economic and personal-liberty maximalism with skepticism of state power across domains',
    wrong: [
      ['Mainstream Republican, because it favors lower taxes', 'Mainstream Republican policy typically supports drug enforcement, an active US military posture, and many surveillance authorities; this profile breaks with all three.', 'Lower taxes alone is not enough.'],
      ['Progressive, because it opposes the war on drugs', 'Progressives often agree on drug policy and surveillance but generally favor higher taxes and more business regulation; this profile contradicts that.', 'Tax and regulation positions disqualify.'],
      ['Populist, because it criticizes government institutions', 'Populism is defined by anti-elite framing and an appeal to "the people"; libertarianism is defined by liberty maximalism. They can overlap but are not equivalent.', 'Liberty maximalism is the defining test.'],
    ],
    lesson: 'Major US libertarian institutions (Cato Institute, Reason magazine, Reason Foundation) advance positions that cross conventional partisan lines: economic positions usually associated with the right and personal-liberty positions usually associated with the left.',
  },
  {
    id: 4360709,
    chapter: CHAPTER,
    title: 'Populism left and right',
    prompt: 'A 2010s analysis observed that Bernie Sanders supporters and certain Donald Trump supporters shared skepticism of international trade agreements, opposition to Wall Street, and a sense that elites had failed ordinary Americans. The shared feature is best described as:',
    correct: 'A populist style of politics that frames issues as ordinary people versus elites, which can appear on the left or the right',
    wrong: [
      ['Identical ideological positions across the two coalitions', 'Sanders and Trump differed substantially on taxation, immigration, social policy, and the role of government; only the populist framing overlapped.', 'Style overlapped, substance did not.'],
      ['Evidence that the two-party system had collapsed', 'Both candidates competed inside their respective major-party primaries and the two-party structure remained intact; the observation is about voter cross-pressure.', 'The parties remained intact.'],
      ['Pure libertarianism, because both opposed elite consensus', 'Libertarianism is defined by liberty maximalism, not by anti-elite framing alone; neither Sanders\'s economic program nor Trump\'s policy mix matches libertarianism.', 'Anti-elite alone is not libertarian.'],
    ],
    lesson: 'Populism is a style of political appeal — anti-elite, claiming to speak for ordinary people — that can attach to left or right ideological content. Recognizing populism as a style rather than a fixed substance is a frequent AP item.',
  },
  // ---------------------------------------------------------------------
  // Polling methodology
  // ---------------------------------------------------------------------
  {
    id: 4360710,
    chapter: CHAPTER,
    title: 'Sampling frame',
    prompt: 'A polling firm wants to measure opinions of all US registered voters but draws its sample only from one state\'s voter file. The most accurate critique of the study is that:',
    correct: 'The sampling frame does not match the target population, so results cannot be generalized to all US voters',
    wrong: [
      ['The margin of error will automatically be larger than the true uncertainty', 'A small or mismatched sampling frame can produce a misleading margin of error that looks tight while missing a large coverage error.', 'Mismatch is not corrected by reporting margin of error.'],
      ['The poll is acceptable as long as random digit dialing is used', 'Random digit dialing is a contact method; it cannot fix the fact that only one state is being sampled.', 'Contact method does not fix coverage.'],
      ['The poll violates the Voting Rights Act', 'The Voting Rights Act regulates government conduct on access to the ballot, not private polling design.', 'VRA is unrelated.'],
    ],
    lesson: 'The sampling frame is the list of units from which the sample is actually drawn. Mismatch between the frame and the target population produces coverage error, which is distinct from sampling error and is not captured by the reported margin of error.',
  },
  {
    id: 4360711,
    chapter: CHAPTER,
    title: 'Random vs convenience sampling',
    prompt: 'A campus newspaper polls readers by posting a link on its website and accepting any response. A polling firm uses random digit dialing to call a probability sample of households. The two studies differ most fundamentally because:',
    correct: 'Only the random sample supports statistical generalization to a broader population; the convenience sample does not',
    wrong: [
      ['Only the random sample is allowed under AAPOR ethical guidelines', 'AAPOR ethical guidelines do not prohibit convenience samples; they require honest disclosure of method.', 'AAPOR disclosure, not prohibition, is the test.'],
      ['The convenience sample will always have a larger margin of error', 'Self-selected samples do not have a meaningful margin of error to report; the issue is bias, not reported uncertainty.', 'The MOE concept does not apply cleanly to convenience samples.'],
      ['Random digit dialing always reaches every American with equal probability', 'RDD reaches phone numbers, which means cell-only households, no-phone households, and non-English speakers can still be under- or over-represented; weighting attempts to correct this.', 'RDD is approximate, not perfect.'],
    ],
    lesson: 'Probability sampling (random digit dialing, address-based sampling, calibrated online panels) is the foundation that allows pollsters to compute a meaningful margin of error and generalize to a population. Convenience samples are useful for some descriptive purposes but cannot support that inference.',
  },
  {
    id: 4360712,
    chapter: CHAPTER,
    title: 'Online panels',
    prompt: 'Major pollsters such as YouGov and Ipsos increasingly use large online panels rather than live telephone interviews. The most accurate description of this methodological shift is that:',
    correct: 'Online panels are calibrated through statistical weighting to approximate a probability sample as live-phone response rates decline below ten percent',
    wrong: [
      ['Online panels are convenience samples with no statistical adjustment', 'Major firms apply matching and weighting based on known demographic and political benchmarks; they are not raw convenience samples.', 'Weighting is part of the design.'],
      ['Online panels eliminate the margin of error entirely', 'Margin of error remains relevant; firms now also report credibility intervals reflecting model-based uncertainty.', 'Uncertainty does not disappear.'],
      ['Online panels are banned by AAPOR ethical guidelines', 'AAPOR has not banned online panels; it has updated transparency standards to require disclosure of weighting methods.', 'AAPOR requires disclosure, not prohibition.'],
    ],
    lesson: 'Live telephone response rates have fallen below ten percent in many AAPOR-tracked benchmarks, prompting major firms to rely on weighted online panels. The discipline now distinguishes traditional probability margins of error from model-based credibility intervals.',
  },
  {
    id: 4360713,
    chapter: CHAPTER,
    title: 'Exit polls',
    prompt: 'Networks rely on exit polls to characterize how groups voted on Election Day. Which limitation of exit polls is most important for an AP student to know?',
    correct: 'Exit polls measure voters who already voted on Election Day at sampled precincts, so they can miss early and mail-in voters and may misstate election results',
    wrong: [
      ['Exit polls are illegal because they reveal vote choice', 'Exit polls are legal; voters voluntarily respond after voting and the practice has been routine since the 1960s.', 'Exit polls are legal.'],
      ['Exit polls are perfectly reliable predictors of statewide winners', 'Exit polls have a documented history of misses (e.g., 2004 Bush-Kerry early calls) and have evolved to incorporate early-vote samples and pre-election surveys.', 'They are not perfect predictors.'],
      ['Exit polls cannot include demographic information about voters', 'Exit polls explicitly collect demographic data; that is one of their primary uses.', 'Demographics are core, not excluded.'],
    ],
    lesson: 'Exit polls (e.g., the National Election Pool conducted by Edison Research) sample voters as they leave selected precincts. The growth of early and mail voting means modern exit-poll designs blend in-person interviews with pre-election telephone and online samples to capture the full electorate.',
  },
  {
    id: 4360714,
    chapter: CHAPTER,
    title: 'Push polls',
    prompt: 'A campaign circulates a "poll" that asks voters: "Would you still support Senator Smith if you knew he had voted against children\'s healthcare?" The call is brief, no demographic data is collected, and thousands of voters are reached. The activity is best described as:',
    correct: 'A push poll, which AAPOR identifies as an advocacy tactic disguised as research and not a legitimate survey',
    wrong: [
      ['A tracking poll measuring movement in voter sentiment over time', 'Tracking polls are legitimate repeated surveys of representative samples; they collect demographic data and report margin of error.', 'Tracking polls are real research.'],
      ['A cross-sectional survey sampling a population at one point in time', 'A cross-sectional survey is a legitimate research design that measures opinions, not one designed to plant negative claims while pretending to ask a neutral question.', 'Cross-sectional is a legitimate design.'],
      ['An exit poll because it is conducted close to the election', 'Exit polls interview voters after they vote at the polling place; the activity described is a calling operation, not an exit interview.', 'Exit polls happen at the precinct after voting.'],
    ],
    lesson: 'AAPOR (the American Association for Public Opinion Research) condemns push polls because they masquerade as research while functioning as voter-contact propaganda. AP polling-methods items often use push polls as the wrong-method distractor.',
  },
  {
    id: 4360715,
    chapter: CHAPTER,
    title: 'Tracking poll',
    prompt: 'A campaign\'s pollster conducts a survey of 400 likely voters every night for the last three weeks of the race, reporting a rolling three-night average. The methodology is best described as a:',
    correct: 'Tracking poll, which uses repeated surveys to detect short-term movement in opinion',
    wrong: [
      ['Panel study, because the same individuals are surveyed nightly', 'A tracking poll typically samples new respondents each night, not the same individuals; a panel study by definition follows the same respondents over time.', 'Panel = same people each wave; tracking = new each wave.'],
      ['Exit poll, because it happens close to Election Day', 'Exit polls survey voters after they vote at the polling place; a pre-election nightly survey is not an exit poll.', 'Exit polls happen at the precinct.'],
      ['Push poll, because the campaign commissioned it', 'A campaign commissioning a poll does not make it a push poll; push polls are defined by their leading content, not by who paid for them.', 'Push poll is about content, not sponsor.'],
    ],
    lesson: 'Tracking polls roll a moving average across nightly samples to smooth noise while preserving the ability to detect trend changes. They differ from panel studies (same respondents over time) and from one-shot cross-sectional polls.',
  },
  {
    id: 4360716,
    chapter: CHAPTER,
    title: 'Cross-sectional vs panel',
    prompt: 'A researcher wants to study whether the same voters changed their opinions on a policy between 2020 and 2024. Which study design directly answers that question?',
    correct: 'A panel study that re-interviews the same respondents in 2020 and again in 2024',
    wrong: [
      ['A cross-sectional poll in 2024 that asks respondents what they thought in 2020', 'Recall data is unreliable; respondents often misremember past opinions in ways correlated with current views.', 'Recall does not equal panel data.'],
      ['Two independent cross-sectional polls of different respondents in 2020 and 2024', 'Independent cross-sections show aggregate change but cannot tell you whether the same individual changed her mind or whether the population composition changed.', 'Aggregate change is not within-person change.'],
      ['An exit poll on Election Day 2024', 'Exit polls measure that election\'s voters at a single moment; they cannot recover what those voters thought four years earlier.', 'Exit polls are single-point.'],
    ],
    lesson: 'Panel studies (e.g., portions of the ANES and the Cooperative Election Study) re-interview the same respondents across waves and are the standard design for measuring within-person attitude change. Cross-sectional polls capture different samples at different times.',
  },
  {
    id: 4360717,
    chapter: CHAPTER,
    title: 'Likely voter screens',
    prompt: 'A pollster reports two parallel results from the same sample: one estimate for "registered voters" and a second, narrower estimate for "likely voters." The likely-voter screen is included because:',
    correct: 'Not every registered voter actually turns out, and a screen that approximates the actual electorate often produces a different estimate',
    wrong: [
      ['Likely voter screens always make the pollster\'s preferred candidate look better', 'Likely voter screens are statistical filters based on past voting and stated intention; they are designed to approximate the actual electorate, not to favor a candidate.', 'The intent is accuracy, not partisanship.'],
      ['Federal law requires reporting only likely voters', 'Federal law does not regulate the universe a pollster reports; reporting both groups is common professional practice.', 'No federal mandate.'],
      ['Likely voters are guaranteed to match the eventual electorate exactly', 'Likely voter models are estimates; they were a major issue in the 2016 and 2020 cycles when Trump-supporting voters were underrepresented in some models.', 'Models can miss.'],
    ],
    lesson: 'Likely voter screens use stated intent and past behavior to approximate who will actually vote. AAPOR post-mortems of the 2016 and 2020 cycles identified weighting and likely-voter modeling among the contributors to the polling miss on Trump support, especially in non-college white populations.',
  },
  {
    id: 4360718,
    chapter: CHAPTER,
    title: '2016 and 2020 polling miss',
    prompt: 'The AAPOR Task Force reports on the 2016 and 2020 election cycles identified several contributors to underestimation of Donald Trump\'s support. Which finding from those reports is most accurate?',
    correct: 'State-level polls in some Midwestern and Rust Belt states underestimated Trump support, partly due to insufficient weighting on education',
    wrong: [
      ['National polls were entirely accurate in both cycles', 'National polls were closer to the final national popular vote, but they still showed notable error, and state-level polls in 2016 and 2020 missed by larger margins.', 'State polls had bigger misses.'],
      ['The misses were caused exclusively by voter fraud', 'AAPOR\'s analyses do not attribute the polling miss to fraud; they attribute it to weighting, likely-voter modeling, and possible nonresponse patterns.', 'Fraud is not in the AAPOR findings.'],
      ['Polls overstated Trump support in both cycles', 'The error in 2016 and 2020 generally ran the other direction: pollsters underestimated Trump, especially in state-level surveys.', 'Direction was understatement.'],
    ],
    lesson: 'AAPOR Task Force reviews of 2016 and 2020 concluded that key contributors included insufficient education weighting, possible nonresponse bias among Trump-supporting voters, and likely-voter model assumptions. Polling firms have since adjusted weighting protocols.',
  },
  // ---------------------------------------------------------------------
  // Sample size, MOE, error types
  // ---------------------------------------------------------------------
  {
    id: 4360719,
    chapter: CHAPTER,
    title: 'Sample size and MOE',
    prompt: 'A national poll of about 1,000 respondents typically reports a margin of error of plus or minus three percentage points at the 95 percent confidence level. Why does increasing sample size beyond about 1,000 yield diminishing returns for national polls?',
    correct: 'Margin of error shrinks with the square root of sample size, so halving the margin requires quadrupling the sample',
    wrong: [
      ['Margin of error stops shrinking entirely once a sample passes 1,000', 'Margin of error continues to shrink with larger samples; the relationship simply slows because of the square-root structure.', 'It slows; it does not stop.'],
      ['Larger samples introduce more sampling error, not less', 'Larger random samples produce smaller, not larger, sampling error; this is the opposite of the statistical relationship.', 'More data, less sampling error.'],
      ['Only nonresponse bias matters once the sample exceeds 1,000', 'Nonresponse bias matters at all sample sizes; sampling error and nonresponse error are distinct sources of uncertainty.', 'They are separate, not sequential.'],
    ],
    lesson: 'Margin of error scales with one over the square root of sample size. A typical national poll of n≈1,000 yields about ±3 points; n≈400 yields about ±5; n≈4,000 is required to halve the ±3 margin to ±1.5. National pollsters trade off cost and precision against this scaling law.',
  },
  {
    id: 4360720,
    chapter: CHAPTER,
    title: 'Subsample margin of error',
    prompt: 'A national poll of 1,000 respondents reports overall results with a margin of error of plus or minus three points. The same poll then reports results among 200 Latino voters in the sample. Which statement is most accurate?',
    correct: 'The Latino subsample has a substantially larger margin of error than the full sample because the subsample is much smaller',
    wrong: [
      ['The subsample inherits the same ±3 margin because it is part of the same poll', 'Margin of error depends on the size of the actual sample being analyzed; subgroups within a poll carry their own, larger margins.', 'Subgroups have their own MOE.'],
      ['The Latino subsample has zero margin of error because Latinos were specifically counted', 'Counting respondents does not eliminate sampling uncertainty; subgroup estimates retain uncertainty proportional to subgroup size.', 'Counting does not eliminate MOE.'],
      ['Subgroup analysis is forbidden by AAPOR guidelines', 'AAPOR encourages disclosure but does not forbid subgroup analysis; it requires honest reporting of subgroup margins of error.', 'Disclosure, not prohibition.'],
    ],
    lesson: 'Margin of error is calculated for the specific sample being analyzed. A subgroup of 200 within a 1,000-respondent poll has approximately a ±7 margin instead of ±3. AP quantitative items frequently test the subgroup-MOE trap.',
  },
  {
    id: 4360721,
    chapter: CHAPTER,
    title: 'Sampling vs nonresponse error',
    prompt: 'A pollster reports a margin of error of plus or minus three points but acknowledges a response rate of only seven percent. The acknowledged response rate is most directly relevant because:',
    correct: 'Margin of error reflects sampling error, not nonresponse bias, which is a separate and possibly larger source of total survey error',
    wrong: [
      ['Margin of error already incorporates nonresponse', 'Reported margin of error reflects only sampling error from the achieved sample; nonresponse bias is a distinct source not captured by the conventional MOE formula.', 'MOE excludes nonresponse.'],
      ['Low response rates always lead to overestimating Democratic support', 'The direction of nonresponse bias depends on who declines to respond; it is not uniformly partisan and varies by cycle and method.', 'Direction is not fixed.'],
      ['Response rate above one percent meets all polling standards', 'AAPOR\'s standards do not set a one-percent threshold; the discipline\'s norm is to disclose response rate and weighting and to interpret with care.', 'Disclosure, not a one-percent rule.'],
    ],
    lesson: 'Total survey error has several components, including sampling error (captured by MOE), coverage error, nonresponse error, and measurement error. Reported margin of error addresses only the first.',
  },
  {
    id: 4360722,
    chapter: CHAPTER,
    title: 'Nonresponse bias mechanism',
    prompt: 'During a cycle, certain types of voters become systematically harder to reach by telephone. The most accurate concern this raises for the resulting poll is:',
    correct: 'Nonresponse bias, because the voters who do answer may differ politically from the voters who do not',
    wrong: [
      ['Sampling error, which the margin of error already corrects', 'Sampling error from a random sample is captured by MOE; nonresponse is a different source of bias outside the MOE formula.', 'Different error type.'],
      ['Selective incorporation, because rights are being applied to states', 'Selective incorporation is a constitutional doctrine on civil liberties, unrelated to polling response patterns.', 'Wrong field of doctrine.'],
      ['Random digit dialing eliminates the concern', 'RDD is a contact method; it cannot fix the bias introduced when reachable households differ politically from unreachable ones.', 'Contact method does not fix nonresponse.'],
    ],
    lesson: 'Nonresponse bias arises when responders differ systematically from nonresponders on the variables of interest. With live-phone response rates often below ten percent, modern pollsters rely heavily on weighting and panel design to mitigate this, but cannot fully eliminate it.',
  },
  // ---------------------------------------------------------------------
  // Wording, order, social desirability
  // ---------------------------------------------------------------------
  {
    id: 4360723,
    chapter: CHAPTER,
    title: 'Order effects',
    prompt: 'A survey asks respondents whether they support stricter immigration enforcement immediately after a separate question about crime statistics. The same survey, given to a comparable sample, asks the same immigration question first. The two versions could yield different results because of:',
    correct: 'Question-order effects, in which earlier questions prime responses to later questions',
    wrong: [
      ['Sample size differences between the two versions', 'Sample size is set by the pollster and is independent of the ordering; either version could have any sample size.', 'Order, not size.'],
      ['Differences in the margin of error between the two versions', 'Margin of error reflects sample size and design, not question order.', 'MOE is not the variable.'],
      ['Nonresponse bias in the version that starts with crime statistics', 'Nonresponse bias arises from who declines to participate, not from internal question order; while order can sometimes affect attrition, the primary mechanism here is priming.', 'Priming is the cleaner answer.'],
    ],
    lesson: 'Order effects (priming) are a recognized source of measurement error. Best-practice survey design randomizes order across respondents or carefully separates topics to limit the carryover from preceding questions.',
  },
  {
    id: 4360724,
    chapter: CHAPTER,
    title: 'Social desirability bias',
    prompt: 'A survey asks respondents directly whether they regularly attend religious services. Records from congregations indicate actual attendance is lower than the survey suggests. The discrepancy is best explained by:',
    correct: 'Social desirability bias, in which respondents overreport behaviors they perceive as virtuous',
    wrong: [
      ['Random sampling error, because no two surveys agree exactly', 'The discrepancy is systematic and one-directional (over-reporting), which is the signature of bias rather than random error.', 'Systematic, not random.'],
      ['Push polling, because the question is leading', 'Push polls are advocacy tactics that spread negative claims; a sincere question about behavior is not a push poll.', 'Direct question is not a push poll.'],
      ['Margin of error, which the pollster failed to compute', 'The discrepancy persists regardless of margin of error; the error is in measurement (what respondents report), not in sampling precision.', 'Measurement, not MOE.'],
    ],
    lesson: 'Social desirability bias systematically inflates self-reports of socially approved behavior (voting, religious attendance, charitable giving) and depresses self-reports of stigmatized behavior. Survey design uses indirect questions, anonymity, and self-administered modes to mitigate it.',
  },
  {
    id: 4360725,
    chapter: CHAPTER,
    title: 'Leading question diagnostic',
    prompt: 'Which of the following questions is most clearly a leading question that an AP rubric would flag for measurement bias?',
    correct: '"Given that government regulations destroy small businesses, do you support cutting federal red tape?"',
    wrong: [
      ['"Do you favor or oppose the proposed federal rule limiting overtime pay?"', 'This is a neutrally phrased favor/oppose item that names the rule under consideration without prejudicial language.', 'Neutral favor/oppose phrasing.'],
      ['"On a scale of 1 to 5, how interested are you in federal regulatory policy?"', 'This measures self-reported interest neutrally and does not contain prejudicial framing of any position.', 'Neutral interest scale.'],
      ['"What is your party identification: Democrat, Republican, independent, or other?"', 'This is a standard party-identification battery used by ANES, Pew, and Gallup without prejudicial language.', 'Standard battery.'],
    ],
    lesson: 'Leading questions embed an evaluative claim ("destroy small businesses," "wasteful," "out of touch") inside the question, biasing the response. AP rubrics treat detection of leading questions as a core polling-methods skill.',
  },
  // ---------------------------------------------------------------------
  // Public opinion -> policy; latent / salient / issue publics
  // ---------------------------------------------------------------------
  {
    id: 4360726,
    chapter: CHAPTER,
    title: 'Latent vs salient opinion',
    prompt: 'A poll finds that 70 percent of Americans favor stricter background checks for firearm purchases, but the same respondents rank gun policy ninth among ten possible voting issues. The pattern best illustrates the distinction between:',
    correct: 'Latent opinion (broadly held but not strongly weighted in vote choice) and salient opinion (issues that actually drive how respondents vote)',
    wrong: [
      ['Margin of error and confidence level', 'Both are statistical properties of estimates; the contrast here is between opinion intensity and opinion direction.', 'Wrong distinction.'],
      ['Sampling error and nonresponse bias', 'Both describe sources of measurement uncertainty; the contrast here is about how opinions translate into political behavior.', 'Wrong distinction.'],
      ['Random sampling and convenience sampling', 'Both are sampling methods; the question is about the relationship between expressed support and voting weight.', 'Wrong distinction.'],
    ],
    lesson: 'Latent opinion is held broadly but exerts little electoral pressure; salient opinion drives vote choice. The contrast helps explain why majority-supported policies often do not pass: intensity, not just direction, shapes legislative response.',
  },
  {
    id: 4360727,
    chapter: CHAPTER,
    title: 'Issue publics',
    prompt: 'A small group of voters — roughly five percent of the electorate — care intensely about agricultural subsidy policy and reliably vote on the issue. Their political influence is best understood through the concept of:',
    correct: 'Issue publics, where a small intensely engaged group can shape policy disproportionate to its size',
    wrong: [
      ['Affective polarization, because they care strongly', 'Affective polarization describes emotional distance between partisan groups, not concentrated interest in a single policy issue.', 'Different phenomenon.'],
      ['Random sampling, because they were identified by survey', 'Survey identification of the group is the method of observation, not the conceptual phenomenon at issue.', 'Method, not concept.'],
      ['Political efficacy, because they believe they can influence outcomes', 'Efficacy is one ingredient but does not specifically describe the policy-narrow, intensity-driven character of issue-public influence.', 'Efficacy is broader.'],
    ],
    lesson: 'V.O. Key\'s concept of issue publics describes small groups with intense interest in narrow policy areas who can capture disproportionate influence in legislative and regulatory venues because the broader public is inattentive.',
  },
  {
    id: 4360728,
    chapter: CHAPTER,
    title: 'Public mood',
    prompt: 'Researchers like James Stimson construct an aggregate "public mood" measure that tracks general liberal-conservative sentiment over decades. Which finding from that line of research is best supported?',
    correct: 'Public mood swings in a thermostatic pattern, often turning against the policy direction of the incumbent administration',
    wrong: [
      ['Public mood never changes within a single decade', 'Stimson and other scholars document clear within-decade shifts; the empirical pattern is real movement, not stasis.', 'Movement is documented.'],
      ['Public mood follows the president\'s party regardless of policy', 'The thermostatic pattern is closer to the opposite: when policy moves left, mood often moves right, and vice versa.', 'Thermostatic is countervailing.'],
      ['Public mood is identical to presidential approval', 'Approval is a separate measure tied to a specific officeholder; public mood is a broader ideological indicator.', 'Different measures.'],
    ],
    lesson: 'The thermostatic public-opinion model (Wlezien, Stimson) describes the tendency of public mood to push back against the policy direction of the current administration, contributing to the regular partisan turnover seen in modern American politics.',
  },
  // ---------------------------------------------------------------------
  // Polarization, party-line voting, sorting
  // ---------------------------------------------------------------------
  {
    id: 4360729,
    chapter: CHAPTER,
    title: 'Affective polarization',
    prompt: 'ANES feeling-thermometer data show that Americans\' warmth toward the opposing party has declined sharply since the 1980s, even when their own policy positions have moved less. The trend is best described as:',
    correct: 'Affective polarization, an increase in emotional dislike of the out-party that can exceed ideological polarization on policy',
    wrong: [
      ['Ideological polarization, because policy positions have shifted', 'Affective polarization is distinct from ideological polarization; ANES data show emotional distance has grown more than policy distance.', 'Distinguish emotional from policy distance.'],
      ['Issue-public formation, because voters care more about specific policies', 'Issue-public theory describes narrow intense engagement on specific policies, not generalized hostility to the out-party.', 'Different mechanism.'],
      ['Social desirability bias, because voters now report dislike more readily', 'Social desirability would predict the opposite — that respondents would conceal hostility — and the trend is robust across modes.', 'Direction is wrong.'],
    ],
    lesson: 'Affective polarization, measured most often through ANES feeling thermometers and Pew batteries on cross-partisan trust, has grown markedly since the 1980s and is now a leading dependent variable in the American politics literature on polarization.',
  },
  {
    id: 4360730,
    chapter: CHAPTER,
    title: 'Partisan sorting',
    prompt: 'Surveys show that in the 1970s, many self-identified liberals were Republicans and many self-identified conservatives were Democrats. By the 2020s, the alignment between ideology and party has become much tighter. The change is best described as:',
    correct: 'Partisan sorting, the alignment of ideological self-placement with party identification',
    wrong: [
      ['A decline in political socialization, because people no longer learn ideology from parents', 'Family transmission of party identification remains strong; sorting reflects a change in the relationship between ideology and party, not a collapse of socialization.', 'Socialization persists; sorting changed.'],
      ['Pure sampling artifact in repeated cross-sections', 'The pattern appears across many independent surveys, multiple modes, and panel data; it is not a sampling artifact.', 'Robust across surveys.'],
      ['Affective polarization, because feelings about the parties have intensified', 'Affective polarization is a separate phenomenon about emotional distance; sorting is about the structural alignment of ideology with party.', 'Two different concepts.'],
    ],
    lesson: 'Partisan sorting is the historical realignment under which liberals concentrated in the Democratic Party and conservatives in the Republican Party, especially after the civil-rights realignment of the 1960s through the 1990s. It is conceptually distinct from polarization, though related.',
  },
  {
    id: 4360731,
    chapter: CHAPTER,
    title: 'Party-line voting',
    prompt: 'Roll-call analyses show that the share of Senate votes on which a majority of one party opposes a majority of the other has risen sharply since the 1990s. The phenomenon is best described as:',
    correct: 'Increased party-line voting in Congress, reflecting institutional polarization within the legislature',
    wrong: [
      ['A collapse of the two-party system, because parties no longer cooperate', 'The two-party system persists; the change is in the consistency of party voting blocs, not the existence of parties.', 'Party system intact.'],
      ['A constitutional change requiring votes along party lines', 'No constitutional change requires party-line voting; the trend reflects political incentives, not legal requirement.', 'Behavior, not law.'],
      ['Push-poll influence on individual senators\' votes', 'Push polls target voter contact, not legislator behavior; legislator votes reflect coalition dynamics and constituent pressure.', 'Different mechanism.'],
    ],
    lesson: 'Party-unity scores tracked by CQ Roll Call and other analyses show party-line voting in Congress at historically high levels since the late 1990s, contributing to legislative gridlock and increased reliance on reconciliation and executive action.',
  },
  // ---------------------------------------------------------------------
  // Independents and leaners
  // ---------------------------------------------------------------------
  {
    id: 4360732,
    chapter: CHAPTER,
    title: 'Pure independents',
    prompt: 'About 40 percent of Americans tell pollsters they are "independent." Closer analysis shows that most of these respondents, when asked a follow-up, say they lean toward one of the parties. Which statement is most accurate?',
    correct: 'Pure independents are about ten percent of voters; the rest are leaners who vote much like partisans of the party they lean toward',
    wrong: [
      ['Independents are a unified bloc that decides every election', 'Independents are not a unified bloc; leaners behave like partisans of their party, while pure independents have low turnout and weak preferences.', 'Independents are heterogeneous.'],
      ['Leaners vote randomly across the parties', 'ANES and other data show leaners voting for "their" party at rates similar to weak partisans.', 'Leaners vote with the party they lean toward.'],
      ['Independents are required by law to remain unaffiliated', 'Independents are a self-identified category; party registration is governed by state law and is distinct from how voters describe themselves to pollsters.', 'Self-ID, not law.'],
    ],
    lesson: 'AP items on independents test the distinction between pure independents (roughly ten percent of the electorate, low engagement) and leaning independents (who vote in line with the party they lean toward). Treating "independent" as a single bloc is a common AP misconception.',
  },
  {
    id: 4360733,
    chapter: CHAPTER,
    title: 'Leaner behavior',
    prompt: 'A poll reports the following: 40 percent of respondents say they are independents, but follow-up questions show 17 percent lean Democratic, 16 percent lean Republican, and 7 percent are pure independents. Which interpretation is best supported?',
    correct: 'Leaners typically vote similarly to weak partisans of the party they lean toward, so headline "40 percent independent" overstates persuadable voters',
    wrong: [
      ['Pure independents will determine the outcome of every election', 'Pure independents have lower turnout and weaker preferences and rarely decide national outcomes by themselves; they can matter in close races but are not always decisive.', 'Pure independents are smaller than the headline suggests.'],
      ['Leaning Democrats vote for Republicans about as often as for Democrats', 'ANES data show leaners voting for the party they lean toward at rates close to weak partisans, not at fifty-fifty.', 'Leaners vote with their party.'],
      ['The poll must have a sampling error because totals do not add to 100', 'The breakdown adds to 40 percent independent, with the remaining 60 percent presumed to identify as Democrats or Republicans directly; the numbers are internally consistent.', 'Math is consistent.'],
    ],
    lesson: 'AP polling-interpretation items often present the leaner-vs-pure-independent breakdown and ask which group is persuadable. Leaners are functionally partisan; pure independents are smaller, less engaged, and the genuinely persuadable group.',
  },
  // ---------------------------------------------------------------------
  // Political efficacy
  // ---------------------------------------------------------------------
  {
    id: 4360734,
    chapter: CHAPTER,
    title: 'Internal efficacy',
    prompt: 'A survey item reads: "I feel that I have a pretty good understanding of the important political issues facing our country." Strong agreement with this item is the standard ANES measure of:',
    correct: 'Internal political efficacy, the sense that one is competent to participate in politics',
    wrong: [
      ['External political efficacy, the sense that government responds to citizens', 'External efficacy is measured by separate items about whether officials care or whether elections respond to public input; the item shown captures self-competence.', 'Item is about self, not government.'],
      ['Affective polarization, the dislike of the out-party', 'Affective polarization is measured by feeling thermometers and party trust items, not by self-rated understanding of issues.', 'Different battery.'],
      ['Social desirability bias, because respondents may inflate self-assessment', 'Social desirability is a source of bias on this kind of item, but the item is conceptually a measure of efficacy, not a measure of bias.', 'Bias source vs measured construct.'],
    ],
    lesson: 'Internal efficacy items ask about the respondent\'s perceived competence to engage with politics. External efficacy items ask whether the respondent believes government and officials respond to citizens. Both are tracked by ANES across decades.',
  },
  {
    id: 4360735,
    chapter: CHAPTER,
    title: 'External efficacy',
    prompt: 'A survey item reads: "Public officials don\'t care much what people like me think." Strong agreement with this item indicates:',
    correct: 'Low external political efficacy, a sense that government is unresponsive to ordinary citizens',
    wrong: [
      ['High internal political efficacy, because the respondent has an opinion', 'Having an opinion does not measure internal efficacy; internal items ask about the respondent\'s own competence, not officials\' responsiveness.', 'Wrong construct.'],
      ['Trust in government, which is a separate measure', 'Trust items ask whether government does what is right; efficacy items ask whether government responds. The two are correlated but distinct.', 'Related but different.'],
      ['Partisan sorting, because the respondent identifies with a party', 'The item does not require any party identification; it measures perceived responsiveness regardless of which party is in power.', 'No party content.'],
    ],
    lesson: 'ANES has tracked external efficacy items since the 1960s. The "don\'t care much" item is part of the canonical external efficacy battery. Declining external efficacy is associated with lower turnout and higher protest activity.',
  },
  // ---------------------------------------------------------------------
  // Trust in government
  // ---------------------------------------------------------------------
  {
    id: 4360736,
    chapter: CHAPTER,
    title: 'Trust in government decline',
    prompt: 'Pew Research Center has tracked the share of Americans who say they trust the federal government to do what is right "always" or "most of the time." From a peak around 1964, the measure has declined to:',
    correct: 'Roughly twenty percent in the 2020s, with brief upticks (e.g., after the 9/11 attacks) within the broader decline',
    wrong: [
      ['Roughly fifty percent in the 2020s, having stabilized after 2010', 'The Pew measure has fluctuated in the mid-teens to low twenties through the 2010s and 2020s, not around fifty percent.', 'Closer to twenty, not fifty.'],
      ['Effectively zero in the 2020s', 'The measure has fallen sharply since 1964 but is not at zero; reported values cluster around the high teens to low twenties.', 'Low but not zero.'],
      ['Roughly seventy-five percent in the 2020s, having recovered', 'Roughly seventy-five percent matches the 1964 peak under Lyndon Johnson, not the 2020s level.', 'Confused with the peak.'],
    ],
    lesson: 'Pew\'s "trust in government" series is one of the most-cited long-run public-opinion benchmarks. The peak around the 1964 Johnson administration (~75%) has not been reached again; subsequent decades have shown a downward trajectory with brief post-9/11 and post-shock upticks.',
  },
  {
    id: 4360737,
    chapter: CHAPTER,
    title: 'Trust in branches',
    prompt: 'Gallup\'s "confidence in institutions" series asks Americans about their confidence in the presidency, Congress, the Supreme Court, and other institutions. Which statement is most accurate across recent decades?',
    correct: 'Confidence in Congress has typically been the lowest among the three branches, often below twenty percent',
    wrong: [
      ['Confidence in Congress has typically been the highest of the three branches', 'Congress consistently ranks at or near the bottom of Gallup\'s institutional confidence measures.', 'Congress ranks low.'],
      ['Confidence in the Supreme Court has been at or near 100 percent since 2000', 'Supreme Court confidence has declined notably from the 1990s, but has never been near 100 percent.', 'No institution sits near 100.'],
      ['All three branches show identical confidence trajectories', 'The three branches show different trajectories: Court confidence has fallen most sharply since the 2010s; Congress has stayed low; presidential confidence varies with the cycle.', 'Different patterns.'],
    ],
    lesson: 'Gallup\'s institutional-confidence series is a standard secondary source on trust by institution. Congress sits structurally low; the Supreme Court historically scored higher but has slipped in the 2020s; presidential confidence is highly cycle-dependent.',
  },
  // ---------------------------------------------------------------------
  // Civic engagement
  // ---------------------------------------------------------------------
  {
    id: 4360738,
    chapter: CHAPTER,
    title: 'Putnam Bowling Alone',
    prompt: 'Robert Putnam\'s book Bowling Alone argues that participation in civic associations (clubs, leagues, religious groups, neighborhood associations) declined substantially in the late twentieth century. Which conclusion does Putnam draw from this evidence?',
    correct: 'Decline in social capital weakens the civic infrastructure on which democracy depends',
    wrong: [
      ['Decline in civic associations was a deliberate policy choice by Congress', 'Putnam treats the decline as a result of generational, technological, and labor-market changes, not a legislative decision.', 'Not a policy story.'],
      ['Bowling leagues are the only meaningful form of civic participation', 'The bowling league is a metaphor for many forms of civic participation; Putnam tracks dozens of indicators, not just bowling.', 'Bowling is a metaphor.'],
      ['American civic participation actually increased steadily from 1950 to 2000', 'Putnam\'s evidence runs the other direction: decline across many indicators, especially among younger cohorts.', 'Direction is opposite.'],
    ],
    lesson: 'Putnam\'s Bowling Alone (2000) is the canonical text on declining social capital in late-twentieth-century America. AP items on civic engagement frequently reference its central claim: democracy depends on the civic infrastructure people build outside formal politics.',
  },
  {
    id: 4360739,
    chapter: CHAPTER,
    title: 'Forms of civic engagement',
    prompt: 'A study finds that working-class Americans participate in politics at lower rates than upper-middle-class Americans, but the gap is narrowest for one specific form of participation. Which form is it?',
    correct: 'Voting, where the participation gap by income is real but smaller than for activities like contacting officials, donating, or attending meetings',
    wrong: [
      ['Donating money to campaigns, where lower-income participation matches upper-income participation', 'Campaign donation participation is sharply skewed toward higher-income Americans; the gap there is among the largest.', 'Donation gap is large.'],
      ['Attending political meetings, where the gap is smallest', 'Meeting attendance shows substantial income-based participation gaps, larger than voting.', 'Meetings gap is large.'],
      ['Contacting elected officials, where there is no measurable income gap', 'Contacting officials shows clear income gradients in nearly every study; this is among the more skewed forms of participation.', 'Contact gap is large.'],
    ],
    lesson: 'Verba, Schlozman, and Brady\'s Voice and Equality remains the canonical mapping of US civic participation by socioeconomic status. Voting shows the smallest income gap; donations, contacting officials, and meeting attendance show much larger ones.',
  },
  // ---------------------------------------------------------------------
  // Generational baselines, application items
  // ---------------------------------------------------------------------
  {
    id: 4360740,
    chapter: CHAPTER,
    title: 'Generational labels',
    prompt: 'Pew Research Center uses the following birth-year ranges for its generational analysis (with minor variation across sources): Silent (1928–1945), Baby Boomer (1946–1964), Generation X (1965–1980), Millennial (1981–1996), Generation Z (1997–2012). Which AP-relevant claim about these cohorts is best supported by Pew, ANES, and CIRCLE data?',
    correct: 'Younger cohorts (Millennials and Generation Z) lean more Democratic in vote choice and more progressive on social issues than older cohorts, on average',
    wrong: [
      ['Older cohorts (Silent and Boomer) lean Democratic and younger cohorts lean Republican', 'The empirical pattern runs the other direction: younger cohorts lean Democratic on average; older cohorts split closer to the Republican column in recent cycles.', 'Direction reversed.'],
      ['Generational cohorts show identical partisan distributions', 'Generational differences in vote choice and ideology are well-documented in Pew and ANES; the cohorts are not identical.', 'Cohorts differ.'],
      ['Generation Z is the only cohort with measurable political opinions', 'All cohorts have measurable opinions tracked by Pew, ANES, and CIRCLE; no cohort is the only one studied.', 'All cohorts are tracked.'],
    ],
    lesson: 'Pew and CIRCLE generational data show younger US cohorts leaning more Democratic in recent cycles, with higher progressive social-policy support and lower religious-tradition affiliation than older cohorts. Differences persist after controlling for life-cycle effects in panel analyses.',
  },
  {
    id: 4360741,
    chapter: CHAPTER,
    title: 'Stimulus: Pew turnout breakdown',
    prompt: 'A Pew Research Center summary reports: "Among validated voters in 2020, turnout was 76 percent for those aged 65 and older, but only 53 percent for those aged 18–29. The age gap in turnout was larger than the gap by income within either age group." Which inference is best supported?',
    correct: 'Age is a stronger predictor of turnout than income within each age group, consistent with longstanding patterns in US elections',
    wrong: [
      ['Young voters did not vote in 2020', 'A 53 percent turnout rate among 18–29 voters is a substantial number; the inference that they did not vote misreads the data.', 'Lower is not zero.'],
      ['Income has no effect on turnout', 'The passage notes income gaps within age groups; income matters, but age dominates in this comparison.', 'Income matters; age dominates.'],
      ['The age gap is a measurement artifact of validated voting', 'Validated voting (matching survey self-reports to voter file records) is a more accurate measure of turnout than self-report alone, not an artifact.', 'Validation improves accuracy.'],
    ],
    lesson: 'AP source-analysis items reward close reading of comparative claims. Validated voting (used by Pew, ANES, and academic studies) corrects self-report inflation and consistently shows older Americans turning out at higher rates than younger Americans, with income gaps within each age group.',
  },
  {
    id: 4360742,
    chapter: CHAPTER,
    title: 'Stimulus: flawed poll question',
    prompt: 'A survey asks: "Most experts agree that excessive federal spending is dangerous. Do you support cutting the federal budget?" Which methodological flaw does this question most clearly illustrate?',
    correct: 'It is a leading question that asserts a conclusion ("most experts agree," "excessive," "dangerous") before asking for a response',
    wrong: [
      ['It is too short to produce a reliable answer', 'Question length is not the primary issue; many neutral questions are short. The problem is the embedded evaluative framing.', 'Length is not the issue.'],
      ['It violates the Twenty-Sixth Amendment', 'The Twenty-Sixth Amendment lowered the voting age to 18; it does not regulate polling language.', 'Amendment is unrelated.'],
      ['Its margin of error is unknown', 'Margin of error depends on the sample, not on this question\'s wording; the wording flaw exists regardless of MOE.', 'MOE is a separate issue.'],
    ],
    lesson: 'AP polling-methods items often present a stimulus question and ask the student to diagnose the specific flaw. Leading questions can be identified by embedded evaluative claims ("excessive," "wasteful," "dangerous") and unsupported authority appeals ("most experts agree").',
  },
  {
    id: 4360743,
    chapter: CHAPTER,
    title: 'Scenario: comparing two polls',
    prompt: 'Poll A surveys 1,500 randomly selected adults and reports Candidate X at 48 percent ±3. Poll B surveys 300 self-selected respondents from a partisan website and reports Candidate X at 32 percent. A reporter writes that Candidate X is "clearly losing ground." The most accurate critique is:',
    correct: 'Poll B is a self-selected convenience sample with no meaningful margin of error and cannot be compared head-to-head with Poll A',
    wrong: [
      ['Poll A has a sampling error larger than three points', 'A 1,500-person random sample yields a margin of error very close to ±3 at standard confidence levels; the reported value is accurate.', 'Poll A\'s MOE is correct.'],
      ['Both polls\' margins of error are equal because they cover the same race', 'Margin of error depends on the design and sample size of each poll, not on the topic.', 'MOE is per poll.'],
      ['Poll B is more reliable because it has 300 partisan respondents', 'Partisan self-selection makes Poll B less reliable for measuring overall opinion, not more reliable.', 'Self-selection reduces reliability.'],
    ],
    lesson: 'AP interpret-the-poll items often pair a reasonable probability survey with a partisan or convenience sample to test whether students will incorrectly equate the two. Self-selected samples cannot be used to compute meaningful margins of error or to draw inferences about the broader population.',
  },
  {
    id: 4360744,
    chapter: CHAPTER,
    title: 'Scenario: ideology breakdown',
    prompt: 'A student attempts to classify the following voter on a single liberal-conservative axis: supports universal healthcare and higher minimum wage, opposes most immigration, opposes federal involvement in social policy traditionally handled by churches, supports broad gun rights. The most defensible analytical move is to:',
    correct: 'Resist forcing the voter onto a single axis and instead describe distinct positions on economic, social, and cultural dimensions',
    wrong: [
      ['Label the voter "moderate" because they hold both liberal and conservative positions', 'Mixing positions is not the same as being moderate within each domain; the voter holds strong positions, just not all on the same end of one line.', 'Cross-pressured is not moderate.'],
      ['Label the voter a libertarian because of the gun rights position', 'Libertarianism combines economic and personal-liberty maximalism, including support for immigration; this voter contradicts that on multiple axes.', 'Gun rights alone is not libertarian.'],
      ['Conclude the voter is internally inconsistent and not classifiable', 'The voter\'s positions are coherent within a national-populist or working-class religious framework; "incoherent" misreads cross-pressure as confusion.', 'Cross-pressure is not incoherence.'],
    ],
    lesson: 'AP ideology items reward two-axis (or multi-axis) reasoning. The economic dimension (regulation, redistribution) and the cultural / social dimension (tradition, rights) often diverge, and forcing voters onto a single line conceals real political coalitions like working-class religious voters or libertarian-leaning younger voters.',
  },
  {
    id: 4360745,
    chapter: CHAPTER,
    title: 'Scenario: efficacy and trust',
    prompt: 'A community organizer notes that residents in one neighborhood say they understand local politics well (high self-rated competence) but believe city officials ignore them (low responsiveness). The combination is best described as:',
    correct: 'High internal efficacy combined with low external efficacy, a pattern associated with protest and non-electoral activism',
    wrong: [
      ['High trust in government combined with low internal efficacy', 'The residents reported feeling unheard by officials, which is low external efficacy or low trust, not high trust; and they reported feeling competent, which is high internal efficacy.', 'Wrong combination.'],
      ['Low internal efficacy combined with high external efficacy', 'The pattern in the scenario is the opposite: residents feel competent (high internal) and feel ignored (low external).', 'Opposite combination.'],
      ['Affective polarization without any efficacy component', 'Affective polarization concerns dislike of the out-party; the scenario is about residents\' beliefs about their own competence and government responsiveness.', 'Different construct.'],
    ],
    lesson: 'The internal-high / external-low combination is documented in studies of marginalized urban communities and is associated with protest, community organizing, and non-electoral participation rather than withdrawal. The opposite pattern (internal-low / external-high) is more associated with passive deference.',
  },
])
