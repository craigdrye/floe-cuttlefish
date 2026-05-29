import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: Open Logic Project raw collection, adapted into a high-school argumentation drill. This is an authored Floe-native item, not a direct raw import.',
  source: 'Generated from Open Logic Project coverage',
})

export const highLogicArgumentationOpenLogicBatchQuestions = makeQuestionBank('Extension', [
  q(425001, 'Argument Structure', 'Premise or conclusion', 'In the argument "All cats are mammals; Luna is a cat; therefore Luna is a mammal," what is the conclusion?', 'Luna is a mammal', [
    miss('All cats are mammals', 'That is a premise supporting the final claim.', 'Look for what the argument is trying to prove.'),
    miss('Luna is a cat', 'That is another premise.', 'The conclusion follows after "therefore."'),
    miss('There is no conclusion', 'The argument states a final claim.', 'Use the therefore clue.'),
  ]),
  q(425002, 'Validity', 'Valid form', 'An argument is valid when:', 'It is impossible for the premises to be true and the conclusion false', [
    miss('The conclusion sounds persuasive', 'Persuasion is not the same as validity.', 'Validity is structural.'),
    miss('Every sentence is factually true', 'Truth of premises matters for soundness, not validity alone.', 'Separate validity from truth.'),
    miss('The argument has exactly three sentences', 'Length does not decide validity.', 'Check truth preservation.'),
  ]),
  q(425003, 'Soundness', 'Sound argument', 'A sound deductive argument must be:', 'Valid and have true premises', [
    miss('Invalid but emotionally powerful', 'Emotion does not create soundness.', 'Soundness needs valid structure.'),
    miss('Valid with at least one false premise', 'False premises block soundness.', 'Soundness adds truth to validity.'),
    miss('Short and memorable', 'Style is not enough.', 'Use the formal definition.'),
  ]),
  q(425004, 'Conditionals', 'Conditional false case', 'For the claim "If P, then Q," which case makes it false in standard logic?', 'P is true and Q is false', [
    miss('P is false and Q is true', 'A false antecedent does not falsify a material conditional.', 'The promise is broken only when P happens without Q.'),
    miss('P is true and Q is true', 'That satisfies the conditional.', 'P happened and Q followed.'),
    miss('P is false and Q is false', 'In standard truth tables this does not make the conditional false.', 'Only true-then-false breaks it.'),
  ]),
  q(425005, 'Formal Fallacies', 'Affirming the consequent', 'What is wrong with "If it is a raven, it is black. This bird is black. Therefore it is a raven"?', 'It affirms the consequent', [
    miss('It is modus ponens', 'Modus ponens would affirm the antecedent, not the consequent.', 'The argument starts from the then-part.'),
    miss('It is sound because ravens can be black', 'Other black birds may exist.', 'The conclusion does not follow.'),
    miss('It denies the antecedent', 'The argument does not say the bird is not a raven.', 'It affirms Q to infer P.'),
  ]),
  q(425006, 'Formal Fallacies', 'Denying the antecedent', 'What is wrong with "If the alarm is set, the light blinks. The alarm is not set. Therefore the light does not blink"?', 'It denies the antecedent', [
    miss('It is modus tollens', 'Modus tollens denies the consequent, not the antecedent.', 'Here not-P is used to infer not-Q.'),
    miss('It is valid because the first premise has if-then form', 'Not every if-then argument is valid.', 'Check the exact pattern.'),
    miss('It affirms the consequent', 'That would start from Q.', 'This argument starts from not-P.'),
  ]),
  q(425007, 'Quantifier Thinking', 'Universal claim', 'The claim "All students in the club have badges" is disproved by:', 'One club student without a badge', [
    miss('One non-club student without a badge', 'The claim is only about students in the club.', 'Counterexamples must be inside the target group.'),
    miss('One club student with a badge', 'That supports the claim but does not prove all cases.', 'To disprove all, find one failure.'),
    miss('A teacher with a badge', 'Teachers are outside the stated group.', 'Use the quantified subject.'),
  ]),
  q(425008, 'Quantifier Thinking', 'Existential claim', 'The claim "Some library books are mysteries" is proven by:', 'At least one library book that is a mystery', [
    miss('Every book in town being a textbook', 'That would not prove the mystery claim.', 'Some means at least one.'),
    miss('No library books being mysteries', 'That contradicts the claim.', 'Find a witness.'),
    miss('One mystery film in the library', 'The claim is about books, not films.', 'Match the object type.'),
  ]),
  q(425009, 'Counterexample', 'Counterexample role', 'A counterexample is useful because it:', 'Shows that a general claim fails in at least one case', [
    miss('Makes a claim true by repeating it', 'Repeating a claim is circular.', 'Counterexamples challenge claims.'),
    miss('Changes the topic to something easier', 'That is distraction, not counterexample.', 'Stay on the same claim.'),
    miss('Proves every other claim false', 'A counterexample targets a specific generalization.', 'Use it against the stated rule.'),
  ]),
  q(425010, 'Definitions', 'Necessary condition', 'If oxygen is necessary for this candle to burn, what follows if there is no oxygen?', 'The candle will not burn', [
    miss('The candle must burn brighter', 'Removing a necessary condition blocks the outcome.', 'Necessary means required.'),
    miss('Oxygen is optional', 'That contradicts the setup.', 'Necessary conditions cannot be absent.'),
    miss('The candle becomes a conclusion', 'That confuses grammar with logic.', 'Think condition and result.'),
  ]),
])
