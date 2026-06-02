import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const barExamS0G23: Question[] = [
  makeSimpleQuestion(
    9140000,
    'Career Skills',
    'Memorization, Retrieval, and Attack Outlines',
    "Interleaving to Train Doctrine Discrimination",
    "Six weeks out, a NextGen candidate studies in blocked sets: a whole day of Evidence, then a whole day of Civil Procedure, then a whole day of Contracts. Within each blocked day she scores well and feels fluent. But on mixed standalone multiple-choice sets her accuracy collapses, and her errors cluster on choosing the wrong subject or doctrine before she even applies a rule. She knows the rules; she keeps misidentifying which one the call triggers. What change to her practice structure most directly attacks this failure?",
    "Switch to interleaved practice that mixes subjects and doctrines within each session, so she repeatedly practices discriminating which rule the facts trigger",
    [
      [
        "Add more blocked Evidence-only days because the within-subject high scores show that format is working",
        "The high blocked scores are a fluency illusion: when every question is the same subject, she never has to decide which doctrine applies, so blocking trains application but not discrimination. Doing more of it reinforces the wrong skill and leaves the actual exam failure (picking the subject) untouched.",
        "Interleave subjects so each item forces a fresh which-doctrine-applies decision, which is the skill the mixed exam actually measures.",
      ],
      [
        "Re-read and re-highlight the master attack outline until each rule feels automatic before returning to questions",
        "Her problem is not rule knowledge (she knows the rules); it is selecting the right rule under mixed cues. Passive rereading raises familiarity without training retrieval or discrimination, and the comfortable feeling it produces is itself the fluency illusion that masks the real gap.",
        "Use timed mixed retrieval, not rereading, so the practice condition matches the exam's discrimination demand.",
      ],
      [
        "Build a longer, more detailed full outline so every sub-rule and exception is captured in one place",
        "A bigger outline addresses coverage, but her misses are not gaps in content; they are failures to spot which captured rule the facts trigger. Adding pages can even worsen retrieval by burying high-yield cues, and it still never rehearses the cross-subject choice the exam requires.",
        "Compress to attack-outline cues and rehearse them against interleaved facts so retrieval is cued by issue, not by a known subject heading.",
      ],
    ],
    "Interleaving (mixing subjects and problem types within a session) underperforms blocked practice in the short term but produces markedly better delayed-test transfer, because it trains the brain to discriminate between similar-looking problems and match each to the correct technique. Blocked practice inflates in-session confidence (the fluency illusion) precisely because the subject is pre-announced, so the learner never rehearses the hardest move on a mixed exam: deciding which doctrine the facts trigger. When errors cluster on subject or issue selection rather than on rule statement, the fix is mixed retrieval practice, not more single-subject drilling or rereading.",
    "Floe generated",
    true,
    "Her rules are solid; her misses happen before she applies a rule. Ask which practice structure rehearses the decision she keeps getting wrong, and whether feeling fluent in a blocked set proves she can perform on a mixed one.",
    { challengeRating: 6 },
  ),
]
