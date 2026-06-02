import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const ccepS0G23: Question[] = [
  makeSimpleQuestion(
    8900000,
    'Career Skills',
    'Reporting Channels and Escalation',
    "Anonymity versus confidentiality at intake",
    "A reporter calls the hotline, gives her name, and describes a manager falsifying expense approvals. Before answering, she asks the intake specialist, \"Will this stay completely confidential? Nobody will ever know I called?\" Which response best reflects how a well-run program should handle the promise it makes at intake?",
    "Tell her the program will limit access to her identity to those with a need to know and protect her from retaliation, but cannot guarantee absolute secrecy because an investigation or legal process may eventually require disclosure",
    [
      ["Promise her the report will remain completely confidential and that her identity will never be revealed to anyone", "This over-promises what the process can keep: investigations, legal holds, and litigation can compel disclosure, and a broken confidentiality promise destroys trust and can expose the company to a retaliation claim it invited.", "Commit to need-to-know access and anti-retaliation protection, and be honest about the limits before she relies on a guarantee you cannot keep."],
      ["Tell her that because she gave her name the report is now anonymous and therefore fully protected from disclosure", "This confuses anonymity with confidentiality: a named report is by definition not anonymous, and confidentiality only restricts who may see her identity rather than erasing it.", "Distinguish the two: anonymity means identity was never collected; confidentiality means a known identity is shared only on a need-to-know basis."],
      ["Decline to take the report unless she agrees to be identified openly to the accused manager so the process is fair to him", "Forcing the reporter to be named to the subject defeats the protective purpose of the channel and is a classic retaliation pathway; fairness to the subject comes through investigation discipline, not exposing the source at intake.", "Accept the report, protect her identity on a need-to-know basis, and ensure fairness to the subject through evidence-based investigation rather than disclosure of the reporter."],
    ],
    "Anonymity and confidentiality are different promises. Anonymity means the program never collected the reporter's identity; confidentiality means a known identity is disclosed only to those with a need to know. A program should protect identity and guarantee non-retaliation, but it should not promise absolute secrecy it cannot keep, because investigations and legal process can compel disclosure. Over-promising confidentiality is a named intake trap: the broken promise harms trust and the reporter more than honest limits would.",
    "Floe generated",
    true,
    "Ask what the program can actually guarantee once an investigation or a court is involved, and whether a named report can ever be truly anonymous.",
    { challengeRating: 6 },
  ),
]
