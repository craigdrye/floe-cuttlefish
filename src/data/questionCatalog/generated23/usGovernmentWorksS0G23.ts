import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const usGovernmentWorksS0G23: Question[] = [
  makeSimpleQuestion(
    9240000,
    'Career Skills',
    'Putting It Together',
    "Anatomy of a shutdown",
    "It is October 1 and Congress has not passed the annual appropriations bills or a continuing resolution. National parks close and many federal employees are sent home. A neighbor insists, \"The President shut the government down.\" Using the course vocabulary, what actually happened and which branch holds the lever?",
    "Funding lapsed because Congress did not appropriate money, and agencies must stop most spending; the power of the purse rests with Congress, not the President",
    [
      ["The President shut it down by refusing to sign a spending bill that Congress had already passed", "This invents a bill that does not exist. A shutdown here comes from the absence of any enacted appropriation, not from a presidential veto of a passed bill; if Congress had passed funding, there would be a bill to sign or veto in the first place.", "Identify the trigger: a lapse in appropriations means no funding law was enacted at all, which is Congress's failure to act, not a veto."],
      ["The Supreme Court ordered agencies to close until the budget dispute is resolved", "Courts do not run agency operations or order shutdowns; the closure flows automatically from the law barring spending without an appropriation, not from a judicial command.", "Trace the mechanism to the statute that forbids spending absent an appropriation, and to Congress as the body that controls funding."],
      ["Agencies kept spending on essentials only because the President personally authorized continued funding from the Treasury", "No money may be drawn from the Treasury except by appropriations made by law, so the President cannot self-authorize spending; excepted activities continue under existing legal authority, not a presidential funding order.", "Remember that spending requires a congressional appropriation; the executive carries out funding decisions but cannot create them."],
    ],
    "A government shutdown is a lapse in appropriations: when Congress fails to enact funding (regular appropriations or a continuing resolution), the Antideficiency Act bars agencies from spending money that has not been appropriated, so non-excepted operations halt. The Constitution gives Congress the power of the purse (no money leaves the Treasury except by appropriations made by law), so the lever belongs to Congress; the President proposes a budget and signs or vetoes bills but cannot appropriate or spend on his own.",
    "Floe generated",
    true,
    "Ask what is missing that forces the closure, and which branch is the only one that can supply it.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9240001,
    'Career Skills',
    'Putting It Together',
    "When state and federal law collide",
    "A state passes a law that directly conflicts with a valid, constitutional federal statute on the same subject, and a resident sues. A friend argues, \"It is the state's own territory, so the state law should win there.\" Mapping this onto branches, levels, and checks, how should the conflict be resolved?",
    "The valid federal law prevails under the Supremacy Clause, and the conflicting state law is preempted; a state cannot nullify valid federal law",
    [
      ["The state law wins inside the state because the Tenth Amendment reserves all unlisted powers to the states", "The Tenth Amendment reserves powers not delegated to the federal government, but it does not let a state override a federal law that is itself constitutional; reserved powers do not include nullifying valid federal law.", "Check validity first: if the federal law is within federal authority, the Supremacy Clause makes it controlling regardless of state preference."],
      ["Whichever law was enacted later controls, so a newer state law displaces an older federal statute", "This applies a last-in-time rule that governs conflicts between two laws of the same sovereign, not the federal-state hierarchy; under the Supremacy Clause federal law prevails regardless of which was passed first.", "Recognize that timing settles conflicts within one lawmaking body, while supremacy, not chronology, settles federal-versus-state conflicts."],
      ["The two laws coexist and residents may simply choose whichever law they prefer to follow", "Genuinely conflicting laws cannot both be obeyed, which is exactly why the Constitution supplies a tie-breaker; letting individuals pick would defeat the rule of decision the Supremacy Clause provides.", "When compliance with both is impossible, the conflict is resolved by preemption in favor of the valid federal law, not by personal choice."],
    ],
    "The Supremacy Clause in Article VI makes the Constitution and valid federal laws the supreme law of the land, so a constitutional federal statute preempts a conflicting state law no matter the order of enactment. This is a federalism question (which level prevails), distinct from separation of powers (which branch acts). The crucial caveat is validity: federal law only preempts when it is itself within federal power, and a state may not nullify a valid federal law, though courts decide whether the federal law is truly valid.",
    "Floe generated",
    true,
    "Decide whether this is a levels question or a branches question, then ask what makes the federal law controlling and what condition it must first satisfy.",
    { challengeRating: 7 },
  ),
]
