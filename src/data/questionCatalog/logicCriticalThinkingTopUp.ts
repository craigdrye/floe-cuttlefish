import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe logicCriticalThinking top-up'

export const logicCriticalThinkingTopUpQuestions: Question[] = makeQuestionBank('University', [
  // Chapter 1: Arguments, Charity, and Standard Form
  {
    id: 7435000,
    chapter: 'Arguments, Charity, and Standard Form',
    title: 'Soundness vs. Validity',
    prompt:
      'An argument is valid but you discover one of its premises is actually false. What can you correctly conclude about the argument?',
    mentorHint:
      'Separate the argument\'s logical shape from the truth of its starting claims. Validity asks whether the conclusion would follow if the premises were true; soundness asks whether that valid structure is also built on true premises.',
    correct: 'It is valid but not sound, so its conclusion is not established by this argument',
    wrong: [
      miss(
        'It is invalid, because a false premise breaks validity',
        'Validity is purely about form: if the premises were true, the conclusion would have to be true. A false premise does not change that.',
        'Validity concerns the connection between premises and conclusion, not whether the premises are actually true.',
      ),
      miss(
        'It is unsound, so its conclusion must be false',
        'An unsound argument simply fails to establish its conclusion; the conclusion could still happen to be true for other reasons.',
        'Failing to prove a claim is different from disproving it.',
      ),
      miss(
        'It is still sound, since the logic is correct',
        'Soundness requires both validity and all-true premises. One false premise destroys soundness.',
        'Sound = valid AND every premise actually true.',
      ),
    ],
    lesson:
      'Validity is about form (true premises would force a true conclusion); soundness is validity plus actually-true premises. A valid argument with a false premise is unsound, so it fails to establish its conclusion — but that conclusion might still be true for unrelated reasons. Refuting an argument is not the same as refuting its conclusion.',
    source,
    generated: true,
  },
  {
    id: 7435001,
    chapter: 'Arguments, Charity, and Standard Form',
    title: 'Supplying the Hidden Premise',
    prompt:
      'Someone argues: "Maria is a licensed pediatrician, so she completed medical school." Which suppressed premise makes this a valid deductive argument?',
    mentorHint:
      'Treat the argument as an enthymeme: something unstated must connect the stated premise to the conclusion. The missing bridge has to be strong enough to cover Maria because of her being a licensed pediatrician, not because of an unrelated trait.',
    correct: 'All licensed pediatricians have completed medical school',
    wrong: [
      miss(
        'Some doctors complete medical school',
        'A "some" premise cannot guarantee the conclusion about Maria specifically; the inference would remain invalid.',
        'You need a premise strong enough to force the conclusion for this individual.',
      ),
      miss(
        'Maria wants to help children',
        'Her motivation is irrelevant to whether she completed medical school; it does not connect the premise to the conclusion.',
        'The missing premise must link "licensed pediatrician" to "completed medical school."',
      ),
      miss(
        'Anyone who completes medical school becomes a pediatrician',
        'This reverses the relationship; it would not let you infer schooling from being a pediatrician.',
        'Watch the direction: you are going from pediatrician to schooling, not the reverse.',
      ),
    ],
    lesson:
      'An enthymeme is an argument with an unstated premise. To make this one valid you need the universal bridge "All licensed pediatricians completed medical school." The principle of charity says you should supply the most plausible premise that makes the argument work before deciding whether to accept it.',
    source,
    generated: true,
  },
  {
    id: 7435002,
    chapter: 'Arguments, Charity, and Standard Form',
    title: 'Abductive Reasoning',
    prompt:
      'You come home to find the kitchen floor wet, a toppled glass nearby, and your dog hiding. You conclude the dog knocked the glass over. Which kind of reasoning is this?',
    mentorHint:
      'Ask what the reasoning is trying to do: guarantee a conclusion, generalize from repeated cases, or explain a set of clues. Here the evidence points toward a likely cause, while still leaving other causes logically possible.',
    correct: 'Abductive (inference to the best explanation)',
    wrong: [
      miss(
        'Deductive, because the conclusion follows necessarily',
        'The evidence does not guarantee the conclusion; another cause is logically possible, so it is not deductive.',
        'Deduction makes the conclusion impossible to deny if the premises hold.',
      ),
      miss(
        'Inductive, because it generalizes from many observed cases',
        'Induction extends a pattern observed across many instances; here you are explaining one specific scene, not generalizing.',
        'Are you projecting a repeated pattern, or explaining a single event?',
      ),
      miss(
        'It is not reasoning at all, just a guess',
        'Selecting the most plausible explanation from evidence is a recognized inference pattern, not a random guess.',
        'Choosing the best available explanation is a standard, named form of inference.',
      ),
    ],
    lesson:
      'Abduction, or inference to the best explanation, picks the hypothesis that best accounts for the observed evidence. Unlike deduction it does not guarantee truth, and unlike induction it explains a particular situation rather than projecting a pattern. Coined by C. S. Peirce, it is how detectives, doctors, and scientists reason from clues to causes.',
    source,
    generated: true,
  },
  {
    id: 7435003,
    chapter: 'Arguments, Charity, and Standard Form',
    title: 'The Principle of Charity',
    prompt:
      'You are about to respond to an opponent. Applying the principle of charity means you should first:',
    mentorHint:
      'Fair criticism begins by making sure you are answering the best reasonable version of the view, not a convenient caricature. Charity improves disagreement by targeting the real structure of the opponent\'s reasons.',
    correct: "Reconstruct their argument in its strongest, most plausible form before criticizing it",
    wrong: [
      miss(
        'Find the weakest version of their claim so it is easiest to refute',
        'That is straw-manning, the opposite of charity; it attacks a position your opponent does not actually hold.',
        'Charity strengthens your opponent before you reply, it does not weaken them.',
      ),
      miss(
        'Agree with their conclusion to keep the discussion friendly',
        'Charity is about interpreting fairly, not conceding; you can still disagree once you have understood the strongest version.',
        'Being fair to an argument is not the same as accepting it.',
      ),
      miss(
        'Assume they are arguing in bad faith and dismiss them',
        'Charity assumes the most reasonable reading available, not the worst possible motive.',
        'The principle is about generous interpretation, not suspicion.',
      ),
    ],
    lesson:
      'The principle of charity says to interpret an argument in its strongest, most reasonable form before responding. Combined with steelmanning (building the best version of the opposing case), it prevents straw-man attacks and makes your eventual criticism land on the real position rather than a caricature.',
    source,
    generated: true,
  },

  // Chapter 2: Propositional Logic
  {
    id: 7435004,
    chapter: 'Propositional Logic',
    title: 'Affirming the Consequent',
    prompt:
      '"If it rained, the streets are wet. The streets are wet. Therefore it rained." This argument is:',
    mentorHint:
      'Map the conditional as "if P, then Q," then notice which part the second premise asserts. A true consequent can have more than one possible explanation, so do not treat Q as proof of P.',
    correct: 'Invalid — it affirms the consequent',
    wrong: [
      miss(
        'Valid by modus ponens',
        'Modus ponens affirms the antecedent ("it rained"), not the consequent; this argument affirms the consequent instead.',
        'Modus ponens runs: if P then Q, P, therefore Q — here the second premise is Q, not P.',
      ),
      miss(
        'Valid by modus tollens',
        'Modus tollens denies the consequent ("the streets are not wet"); this argument affirms it, which is a different, invalid pattern.',
        'Modus tollens needs "not-Q" in the second premise, not "Q."',
      ),
      miss(
        'Invalid because the premises are false',
        'The form is invalid regardless of the premises; the streets could be wet from a street cleaner, a hose, or melting snow.',
        'Look at the structure, not the real-world truth of the sentences.',
      ),
    ],
    lesson:
      'Affirming the consequent ("If P then Q; Q; therefore P") is a classic invalid form: Q can be true for reasons other than P. Only modus ponens (P, therefore Q) and modus tollens (not-Q, therefore not-P) are valid for conditionals. Wet streets do not prove rain.',
    source,
    generated: true,
  },
  {
    id: 7435005,
    chapter: 'Propositional Logic',
    title: "De Morgan's Laws",
    prompt:
      'By De Morgan\'s laws, the statement "It is not the case that (P and Q)" is logically equivalent to:',
    mentorHint:
      'Translate "not both" into ordinary language before choosing symbols. Denying a conjunction only requires at least one side to fail, so the outside negation changes both the parts and the connective.',
    correct: 'Not-P or not-Q',
    wrong: [
      miss(
        'Not-P and not-Q',
        'That is the negation of "P or Q," not of "P and Q"; De Morgan flips the connective when distributing the negation.',
        'Negating an AND turns it into an OR, not another AND.',
      ),
      miss(
        'P or Q',
        'This drops the negation entirely instead of distributing it across both terms.',
        'A negation cannot simply disappear; it must attach to each part.',
      ),
      miss(
        'Not (P or Q)',
        'This negates the wrong connective; ¬(P∧Q) becomes a disjunction, not a negated disjunction.',
        'The result should be an OR of negations, written out fully.',
      ),
    ],
    lesson:
      "De Morgan's laws: ¬(P∧Q) ≡ (¬P∨¬Q) and ¬(P∨Q) ≡ (¬P∧¬Q). Negation distributes across the connective and flips AND to OR (and vice versa). \"Not both\" means \"at least one is false,\" which is a disjunction.",
    source,
    generated: true,
  },
  {
    id: 7435006,
    chapter: 'Propositional Logic',
    title: 'Conditional and Contrapositive',
    prompt:
      'The conditional "If a figure is a square, then it has four sides" is logically equivalent to which statement?',
    mentorHint:
      'For conditionals, the truth-preserving transformation is not simply swapping the two parts. The equivalent form reverses the direction and changes each part to its denial, which protects the original necessary condition.',
    correct: 'If a figure does not have four sides, then it is not a square',
    wrong: [
      miss(
        'If a figure has four sides, then it is a square',
        'That is the converse, which is not equivalent — a rectangle has four sides but is not a square.',
        'Swapping antecedent and consequent gives the converse, which can fail.',
      ),
      miss(
        'If a figure is not a square, then it does not have four sides',
        'That is the inverse, which is also not equivalent — non-squares can still have four sides.',
        'Negating both parts without swapping them gives the inverse, not the contrapositive.',
      ),
      miss(
        'A figure is a square if and only if it has four sides',
        'A biconditional claims both directions; the original conditional only claims one direction.',
        'A one-way "if-then" is weaker than a two-way "if and only if."',
      ),
    ],
    lesson:
      'A conditional P→Q is logically equivalent to its contrapositive ¬Q→¬P, formed by swapping AND negating both parts. The converse (Q→P) and inverse (¬P→¬Q) are NOT equivalent to the original. This is why "all squares have four sides" does not let you conclude four-sided figures are squares.',
    source,
    generated: true,
  },
  {
    id: 7435007,
    chapter: 'Propositional Logic',
    title: 'Translating "Only If"',
    prompt:
      'How should "You may enter only if you have a ticket" be translated into a conditional?',
    mentorHint:
      '"Only if" marks a necessary condition: it tells you what must be true for the first claim to be allowed. Ask which situation would violate the rule, then build the conditional so that violation is impossible.',
    correct: 'If you enter, then you have a ticket (Enter → Ticket)',
    wrong: [
      miss(
        'If you have a ticket, then you may enter (Ticket → Enter)',
        '"Only if" introduces the consequent (necessary condition), not the antecedent; this reverses the conditional.',
        '"P only if Q" means Q is necessary for P, so P implies Q — not the other way around.',
      ),
      miss(
        'You enter if and only if you have a ticket',
        'A biconditional would also require that everyone with a ticket enters, which the sentence does not say.',
        '"Only if" gives a necessary condition, not a necessary-and-sufficient one.',
      ),
      miss(
        'If you do not have a ticket, then you may enter',
        'This negates the necessary condition and reverses the meaning entirely.',
        'A ticket is required for entry, so no ticket should block entry.',
      ),
    ],
    lesson:
      '"P only if Q" means Q is a necessary condition for P, so it translates to P → Q. By contrast, "P if Q" means Q is sufficient, translating to Q → P. "Only if" points to the consequent; mixing it up with plain "if" reverses the conditional.',
    source,
    generated: true,
  },
  {
    id: 7435008,
    chapter: 'Propositional Logic',
    title: 'Tautology, Contradiction, Contingency',
    prompt:
      'A compound statement that is true under every possible assignment of truth values to its components is called a:',
    mentorHint:
      'Think in terms of the final column of a truth table. Some compound statements are always true, some always false, and some depend on the row; this question asks for the "always true" category.',
    correct: 'Tautology',
    wrong: [
      miss(
        'Contradiction',
        'A contradiction is false under every assignment, not true under every one.',
        'You want the one that is always true, not always false.',
      ),
      miss(
        'Contingency',
        'A contingency is true under some assignments and false under others, so not always true.',
        'A statement that is sometimes true and sometimes false is contingent, not the answer here.',
      ),
      miss(
        'Biconditional',
        'A biconditional is a connective (P↔Q); it is only sometimes true, so it is not necessarily a tautology.',
        'You are naming a truth-table pattern, not a logical connective.',
      ),
    ],
    lesson:
      'In a truth table, a tautology is true in every row (e.g., P∨¬P), a contradiction is false in every row (P∧¬P), and a contingency is true in some rows and false in others. Classifying a statement this way is the first thing a truth table is used for.',
    source,
    generated: true,
  },

  // Chapter 3: Predicate Logic and Quantifiers
  {
    id: 7435009,
    chapter: 'Predicate Logic and Quantifiers',
    title: 'Negating a Universal',
    prompt:
      'What is the correct negation of "All swans are white"?',
    mentorHint:
      'To negate a universal claim, look for the smallest possible counterexample. You do not need to prove the opposite universal; you only need a case that makes "all" fail.',
    correct: 'There is at least one swan that is not white',
    wrong: [
      miss(
        'No swans are white',
        'This is the contrary, not the negation; "all are white" being false only requires one exception, not that every swan is non-white.',
        'To make "all are white" false you only need a single counterexample.',
      ),
      miss(
        'All swans are non-white',
        'This is even stronger than "no swans are white" and is not what denying a universal requires.',
        'Denying "every S is P" does not assert "every S is not-P."',
      ),
      miss(
        'Some swans are white',
        'This is consistent with the original being true, so it cannot be its negation.',
        'A negation must be incompatible with the original statement.',
      ),
    ],
    lesson:
      'The negation of "All S are P" (∀x(Sx→Px)) is "Some S is not P" (∃x(Sx∧¬Px)) — a single counterexample. People wrongly jump to the contrary "No S are P," which is a much stronger claim. One black swan refutes "all swans are white."',
    source,
    generated: true,
  },
  {
    id: 7435010,
    chapter: 'Predicate Logic and Quantifiers',
    title: 'Quantifier Order',
    prompt:
      'Which pair of statements can differ in truth value purely because of the ORDER of the quantifiers?',
    mentorHint:
      'Mixed quantifiers are sensitive to order because "for each person there may be someone" is different from "there is one person for everyone." Track whether the existential choice can vary by individual or must be the same object throughout.',
    correct: '"Everyone loves someone" vs. "Someone is loved by everyone"',
    wrong: [
      miss(
        '"All cats are mammals" vs. "All mammals are cats"',
        'These differ because subject and predicate are swapped, not because of quantifier order; both quantifiers are universal.',
        'Look for a case mixing a "for all" and a "there exists," not two universals.',
      ),
      miss(
        '"Some dogs bark" vs. "Some dogs do not bark"',
        'These differ because of a negation on the predicate, not the order of quantifiers.',
        'Quantifier-order effects need two different quantifiers whose sequence is reversed.',
      ),
      miss(
        '"No fish fly" vs. "No birds swim"',
        'These are simply about different subjects; there is no shared structure whose quantifier order is reversed.',
        'You need the same predicate with the quantifiers in a different sequence.',
      ),
    ],
    lesson:
      'With mixed quantifiers, order matters. "∀x∃y Loves(x,y)" (everyone loves someone, possibly different people) is far weaker than "∃y∀x Loves(x,y)" (one specific person is loved by everyone). Swapping ∀ and ∃ can change a true sentence into a false one.',
    source,
    generated: true,
  },
  {
    id: 7435011,
    chapter: 'Predicate Logic and Quantifiers',
    title: 'Translating "Only"',
    prompt:
      'Which is the correct symbolic reading of "Only members may borrow books" (Mx = x is a member, Bx = x may borrow books)?',
    mentorHint:
      '"Only" sets a boundary around who qualifies for the second property. Test the sentence by asking: if someone may borrow, what must be true about that person?',
    correct: '∀x (Bx → Mx)',
    wrong: [
      miss(
        '∀x (Mx → Bx)',
        'This says every member may borrow, which the sentence does not claim; "only" restricts borrowers to members, not the reverse.',
        '"Only A are B" tells you B implies A, not A implies B.',
      ),
      miss(
        '∃x (Mx ∧ Bx)',
        'This merely says some member may borrow, losing the universal restriction "only."',
        '"Only" is a universal restriction, so an existential cannot capture it.',
      ),
      miss(
        '∀x (¬Mx → Bx)',
        'This says non-members may borrow, the exact opposite of the restriction.',
        'Non-members should be excluded from borrowing, not granted it.',
      ),
    ],
    lesson:
      '"Only A are B" translates to ∀x(Bx → Ax): being B requires being A. So "only members may borrow" means "if you may borrow, you are a member." A frequent error is reading it as "all members may borrow" (Mx → Bx), which reverses the direction.',
    source,
    generated: true,
  },
  {
    id: 7435012,
    chapter: 'Predicate Logic and Quantifiers',
    title: 'Building a Countermodel',
    prompt:
      'To show the argument "Some athletes are vegetarians; some vegetarians are runners; therefore some athletes are runners" is invalid, you should:',
    mentorHint:
      'Invalidity is shown by a possible interpretation, not by checking whether the real-world claims are true. Build a small model where the two "some" statements are satisfied by different individuals and the conclusion still fails.',
    correct: 'Describe a small domain where both premises are true but the conclusion is false',
    wrong: [
      miss(
        'Find one real-world example where an athlete is a runner',
        'A confirming example does not test validity; you must show the premises can hold while the conclusion fails.',
        'Validity is refuted by a true-premises-false-conclusion case, not by a supporting instance.',
      ),
      miss(
        'Show that the premises are factually false',
        'Validity does not depend on whether the premises are true; an invalid argument can have true premises.',
        'Invalidity is about form, so focus on a possible interpretation, not the facts.',
      ),
      miss(
        'Convert each premise into a universal statement first',
        'Rewriting "some" as "all" changes the argument; you must evaluate the argument as given.',
        'Do not strengthen the premises; test the actual ones.',
      ),
    ],
    lesson:
      'A countermodel refutes validity by exhibiting an interpretation where every premise is true and the conclusion is false. Here, let athlete = {A}, vegetarian = {A, B}, runner = {B}: both "some" premises hold yet no athlete is a runner. One countermodel is enough to prove invalidity.',
    source,
    generated: true,
  },

  // Chapter 4: Informal Fallacies and Cognitive Bias
  {
    id: 7435013,
    chapter: 'Informal Fallacies and Cognitive Bias',
    title: 'Straw Man',
    prompt:
      'A senator proposes raising the speed limit on rural highways by 5 mph. An opponent replies, "My colleague wants to let people drive as fast as they please and endanger every family on the road." The opponent has committed:',
    mentorHint:
      'Compare the reply to the original proposal before naming the fallacy. If the response attacks a more extreme version than the one actually offered, the reasoning has shifted away from the real argument.',
    correct: 'A straw man fallacy',
    wrong: [
      miss(
        'An ad hominem fallacy',
        'Ad hominem attacks the person; here the opponent misrepresents the proposal itself, which is a straw man.',
        'Is the attack aimed at the person or at a distorted version of their argument?',
      ),
      miss(
        'A false dichotomy',
        'A false dichotomy offers only two options when more exist; here the issue is distortion of the actual position.',
        'No forced either/or is presented — look at how the proposal is described.',
      ),
      miss(
        'A valid rebuttal',
        'It is not valid: it refutes a position ("drive as fast as they please") the senator never took.',
        'A fair rebuttal must answer the real proposal, a 5 mph increase.',
      ),
    ],
    lesson:
      'A straw man replaces an opponent\'s actual claim with a distorted, easier-to-attack version, then refutes that. The antidote is the principle of charity: restate the real position ("a modest 5 mph increase") accurately before responding. Distorting a claim is different from attacking the person (ad hominem).',
    source,
    generated: true,
  },
  {
    id: 7435014,
    chapter: 'Informal Fallacies and Cognitive Bias',
    title: 'Begging the Question',
    prompt:
      'Which argument begs the question (assumes what it sets out to prove)?',
    mentorHint:
      'Look for whether the premise gives independent support or merely repackages the conclusion in different words. Circular reasoning can sound emphatic, but it does not move the audience from a reason to a claim.',
    correct: '"This policy is the fairest option, because no other option is as fair as this one."',
    wrong: [
      miss(
        '"This policy reduced wait times by 30% in three trial cities, so it likely helps."',
        'This offers independent evidence (trial data) rather than restating the conclusion.',
        'Begging the question uses no support beyond a reworded version of the claim.',
      ),
      miss(
        '"Either we adopt this policy or the system collapses entirely."',
        'That is a false dichotomy, presenting only two options, not circular reasoning.',
        'Look for an argument whose premise simply repeats its conclusion.',
      ),
      miss(
        '"Experts in three fields independently endorsed this policy."',
        'This appeals to evidence (expert endorsement); whether it is strong is separate from circularity.',
        'Circular reasoning gives a premise that is just the conclusion rephrased.',
      ),
    ],
    lesson:
      'Begging the question (petitio principii) is circular reasoning: the premise simply restates the conclusion, so it provides no independent support. "It is fairest because nothing is fairer" assumes exactly what was to be shown. Note: in logic "begging the question" means circular reasoning, not "raising a question."',
    source,
    generated: true,
  },
  {
    id: 7435015,
    chapter: 'Informal Fallacies and Cognitive Bias',
    title: 'Equivocation',
    prompt:
      '"Nothing is better than lifelong happiness. A cheese sandwich is better than nothing. So a cheese sandwich is better than lifelong happiness." The flaw is:',
    mentorHint:
      'A deductive chain needs key terms to keep the same meaning throughout. If a word quietly changes roles between premises, the surface grammar may look valid while the underlying concepts no longer connect.',
    correct: 'Equivocation — "nothing" shifts meaning between the premises',
    wrong: [
      miss(
        'Affirming the consequent',
        'There is no conditional being mishandled here; the trouble is a word used in two senses.',
        'Look at whether a single term changes meaning, not at a faulty if-then.',
      ),
      miss(
        'Hasty generalization',
        'No generalization from a small sample is being made; the issue is an ambiguous term.',
        'Has a pattern been over-extended, or has one word done two different jobs?',
      ),
      miss(
        'The argument is actually valid',
        'It is not valid: "nothing" means "no thing is better" in premise one and "the absence of food" in premise two.',
        'Check whether the same word carries the same meaning throughout.',
      ),
    ],
    lesson:
      'Equivocation trades on a word used in two different senses within one argument. Here "nothing" means "there is no thing better than X" in the first premise but "having no sandwich" in the second. Once you fix a single consistent meaning, the inference collapses.',
    source,
    generated: true,
  },
  {
    id: 7435016,
    chapter: 'Informal Fallacies and Cognitive Bias',
    title: 'Sunk-Cost Fallacy',
    prompt:
      'A studio has spent $200M on a film that test screenings show audiences dislike, and finishing it will cost $50M more with little expected return. "We have already spent $200M, so we must finish it." This reasoning illustrates:',
    mentorHint:
      'For a rational forward-looking choice, separate costs that can still be changed from costs that are already unrecoverable. Past investment can explain emotional pressure, but it should not by itself justify more spending.',
    correct: 'The sunk-cost fallacy',
    wrong: [
      miss(
        'The gambler\'s fallacy',
        'The gambler\'s fallacy expects independent random events to "balance out"; this is about throwing good money after bad.',
        'There is no streak of random outcomes here — the issue is past spending driving a future choice.',
      ),
      miss(
        'Confirmation bias',
        'Confirmation bias is seeking evidence that fits a belief; the error here is letting unrecoverable past costs dictate a forward-looking decision.',
        'Ask what is irrationally influencing the decision: prior spending or selective evidence?',
      ),
      miss(
        'A sound business decision',
        'It is not sound: the $200M is gone regardless, and the only relevant question is whether the extra $50M is worth it.',
        'Rational choices weigh future costs and benefits, not money already spent.',
      ),
    ],
    lesson:
      'The sunk-cost fallacy lets unrecoverable past investment drive present decisions. The $200M is spent either way; the only rational question is whether spending $50M more produces enough expected value. Honoring sunk costs leads people to keep funding failing projects.',
    source,
    generated: true,
  },
  {
    id: 7435017,
    chapter: 'Informal Fallacies and Cognitive Bias',
    title: 'Anchoring',
    prompt:
      'A shirt is tagged "$120, now $45." Shoppers feel the $45 is a great deal largely because the $120 figure shaped their sense of its value. This is best described as:',
    mentorHint:
      'Notice whether the judgment is being pulled by an initial reference point. A number can shape later estimates even when it is not reliable evidence of the item\'s real value.',
    correct: 'The anchoring bias',
    wrong: [
      miss(
        'The availability heuristic',
        'Availability judges likelihood by how easily examples come to mind; here a number is biasing a value judgment.',
        'Is the shopper estimating how common something is, or being swayed by a starting number?',
      ),
      miss(
        'The framing effect',
        'Framing concerns how equivalent options are worded (e.g., "90% survive" vs. "10% die"); anchoring is about a numeric reference point.',
        'A single reference number, not a reworded equivalent, is driving the judgment.',
      ),
      miss(
        'Confirmation bias',
        'Confirmation bias is favoring evidence for an existing belief; here a prior number anchors a new estimate.',
        'No pre-existing belief is being selectively confirmed; a presented figure sets the baseline.',
      ),
    ],
    lesson:
      'Anchoring is the tendency to rely too heavily on the first number offered when estimating value. The "$120" anchor makes "$45" feel cheap regardless of the shirt\'s real worth. Marketers, negotiators, and surveys exploit anchors constantly; naming it helps you discount the irrelevant reference point.',
    source,
    generated: true,
  },

  // Chapter 5: Induction, Probability, and Causation
  {
    id: 7435018,
    chapter: 'Induction, Probability, and Causation',
    title: 'The Base-Rate Fallacy',
    prompt:
      'A disease affects 1% of people. A test catches 95% of those who have it (sensitivity) but also flags 10% of healthy people (false positives). You test positive. Roughly what is the chance you actually have the disease?',
    mentorHint:
      'Convert the percentages into natural frequencies, such as imagining 10,000 tested people. Rare conditions create many more healthy people than sick people, so even a modest false-positive rate can dominate the positive results.',
    correct: 'About 9% — false positives from the 99% healthy majority swamp the true positives',
    wrong: [
      miss(
        'About 95%, because the test catches 95% of sick people',
        'That confuses sensitivity P(positive | sick) with the posterior P(sick | positive); it ignores how rare the disease is.',
        'You need P(sick | positive), which depends on the base rate, not just the test\'s sensitivity.',
      ),
      miss(
        'About 90%, because the test is 90% specific',
        'Specificity is P(negative | healthy); it does not directly give your chance of being sick given a positive.',
        'A high specificity still produces many false positives when almost everyone is healthy.',
      ),
      miss(
        'About 50%, since a positive could go either way',
        'The two outcomes are not equally likely; the rarity of the disease makes a positive far more likely to be a false alarm.',
        'Plug the numbers into Bayes’ rule rather than assuming an even split.',
      ),
    ],
    lesson:
      'By Bayes: among 10,000 people, 100 are sick (95 test positive) and 9,900 are healthy (about 990 false positives). True positives / all positives ≈ 95 / 1,085 ≈ 9%. When a condition is rare, even an accurate test yields mostly false positives. Ignoring the base rate is the base-rate fallacy.',
    source,
    generated: true,
  },
  {
    id: 7435019,
    chapter: 'Induction, Probability, and Causation',
    title: 'Confounding Variables',
    prompt:
      'A study finds that towns with more ice cream sales also have more drowning deaths. The most likely explanation is:',
    mentorHint:
      'When two variables rise together, compare three possibilities: direct causation, reverse causation, or a shared cause behind both. The strongest explanation often asks what third factor would make both patterns increase at the same time.',
    correct: 'A confounder — hot weather increases both ice cream sales and swimming',
    wrong: [
      miss(
        'Eating ice cream causes people to drown',
        'This assumes the correlation is direct causation, ignoring an obvious common cause.',
        'Before claiming X causes Y, ask whether a third factor drives both.',
      ),
      miss(
        'Drowning incidents cause people to buy more ice cream',
        'Reverse causation is implausible here and still ignores the shared seasonal driver.',
        'Consider whether a single underlying variable explains both trends.',
      ),
      miss(
        'The correlation must be a coincidence with no explanation',
        'There is a clear systematic explanation (temperature), so it is not mere coincidence.',
        'A strong, repeatable pattern usually has a cause, even if not a direct one.',
      ),
    ],
    lesson:
      'A confounder is a third variable that influences both correlated variables, creating an association with no direct causal link between them. Hot weather drives both ice cream sales and swimming (hence drownings). "Correlation is not causation" — always look for a lurking common cause.',
    source,
    generated: true,
  },
  {
    id: 7435020,
    chapter: 'Induction, Probability, and Causation',
    title: 'Transposing the Conditional',
    prompt:
      'Most people who have a rare genetic disorder test positive for marker M. A patient reasons, "Since I tested positive for M, I almost certainly have the disorder." The error is:',
    mentorHint:
      'Conditional probabilities have a direction. Evidence about how often people with a disorder test positive does not automatically tell you how often positive testers have the disorder, especially when the disorder is rare.',
    correct: 'Confusing P(positive | disorder) with P(disorder | positive)',
    wrong: [
      miss(
        'Committing the gambler\'s fallacy',
        'No sequence of independent random events is involved; the error is swapping a conditional probability.',
        'The mistake is about direction of conditioning, not about random streaks.',
      ),
      miss(
        'Ignoring the test\'s sensitivity',
        'Sensitivity is exactly what the patient used; the problem is they treated it as the reverse conditional.',
        'They had the sensitivity right but applied it backwards.',
      ),
      miss(
        'Making a valid Bayesian inference',
        'It is not valid: a rare disorder means few people have it, so most positives can still be people without it.',
        'Without the base rate, you cannot flip P(B|A) into P(A|B).',
      ),
    ],
    lesson:
      'P(A|B) is not the same as P(B|A). "Most people with the disorder test positive" is P(positive | disorder), but the patient wants P(disorder | positive). For a rare disorder the latter can be small. Flipping conditionals without the base rate (Bayes’ theorem) is a core probabilistic error.',
    source,
    generated: true,
  },
  {
    id: 7435021,
    chapter: 'Induction, Probability, and Causation',
    title: 'Expected Value',
    prompt:
      'A lottery ticket costs $2. It pays $1,000 with probability 0.001 and nothing otherwise. What is the expected net value of buying one ticket?',
    mentorHint:
      'Expected value is not the best-case payoff; it is the probability-weighted average across outcomes. Compute the average prize first, then include the cost of the ticket to get the net result.',
    correct: '-$1 (you lose $1 on average per ticket)',
    wrong: [
      miss(
        '+$998, because you could win $1,000 for $2',
        'That counts only the winning scenario and ignores its tiny probability and the near-certain loss.',
        'Expected value weights each outcome by its probability, not just the best case.',
      ),
      miss(
        '$0, because gambling is break-even',
        'There is no general law making bets fair; this one is deliberately negative-value.',
        'Compute the probability-weighted payoff and subtract the cost.',
      ),
      miss(
        '+$1, since the prize outweighs the cost',
        'The prize is huge but extremely unlikely; the weighted payoff is far below the ticket price.',
        'Multiply $1,000 by 0.001 before comparing to the $2 cost.',
      ),
    ],
    lesson:
      'Expected value = Σ(probability × payoff). Here the gross expected payoff is 0.001 × $1,000 = $1, minus the $2 cost = -$1 per ticket. Most lotteries have negative expected value; understanding this is the antidote to over-weighting rare jackpots.',
    source,
    generated: true,
  },
  {
    id: 7435022,
    chapter: 'Induction, Probability, and Causation',
    title: 'Hasty Generalization and Sample Size',
    prompt:
      'An online poll on a celebrity\'s fan page asks 300 followers whether the celebrity should run for office; 92% say yes. A headline reports "The public overwhelmingly supports the celebrity\'s candidacy." The main flaw is:',
    mentorHint:
      'A survey can have an impressive percentage and still fail if the sample does not match the population being described. Ask whether the respondents were selected in a way that represents "the public" or in a way that bakes in a predictable bias.',
    correct: 'The sample is unrepresentative (self-selected fans), so it cannot generalize to the public',
    wrong: [
      miss(
        'The sample of 300 is simply too small to mean anything',
        'Size is secondary here; even 30,000 self-selected fans would still be biased toward the celebrity.',
        'The deeper problem is who is in the sample, not just how many.',
      ),
      miss(
        'Percentages should never be used in survey reporting',
        'Percentages are fine; the issue is the biased group they were drawn from.',
        'The statistic is not the problem — the sampling frame is.',
      ),
      miss(
        'There is no flaw; 92% of 300 is a clear majority',
        'A clear majority of an unrepresentative sample does not represent the public.',
        'Ask whether the people polled reflect the population the headline describes.',
      ),
    ],
    lesson:
      'A generalization is only as good as its sample\'s representativeness. A poll of a celebrity\'s own followers is self-selected and biased, so it cannot speak for "the public" no matter how large or lopsided. Representativeness matters more than raw size for avoiding hasty generalization.',
    source,
    generated: true,
  },

  // Chapter 6: Scientific Reasoning and Evidence
  {
    id: 7435023,
    chapter: 'Scientific Reasoning and Evidence',
    title: 'Falsifiability',
    prompt:
      'According to Karl Popper, what distinguishes a genuinely scientific claim from a pseudoscientific one?',
    mentorHint:
      'Popper focused on whether a claim takes a real empirical risk. A theory that rules out possible observations can be tested, while a theory compatible with every outcome cannot be meaningfully challenged by evidence.',
    correct: 'A scientific claim makes risky predictions that could in principle be proven false',
    wrong: [
      miss(
        'A scientific claim has been proven true with certainty',
        'Popper held that scientific theories are never conclusively proven, only corroborated or refuted; certainty is not the criterion.',
        'Popper’s test is about being open to refutation, not about final proof.',
      ),
      miss(
        'A scientific claim is endorsed by a majority of experts',
        'Consensus is not Popper’s demarcation criterion; an unfalsifiable claim endorsed by many is still unscientific.',
        'Demarcation is about the logical form of the claim, not who agrees with it.',
      ),
      miss(
        'A scientific claim can explain any possible observation',
        'Explaining everything is a vice, not a virtue: a theory compatible with every outcome forbids nothing and is unfalsifiable.',
        'A theory that can never be wrong tells you nothing testable.',
      ),
    ],
    lesson:
      'Popper’s criterion of falsifiability says a theory is scientific only if it forbids some observations — it must stick its neck out with predictions that could fail. Theories that can accommodate any result (some versions of astrology) are unfalsifiable and thus not scientific, though "unfalsifiable" means empty, not necessarily false.',
    source,
    generated: true,
  },
  {
    id: 7435024,
    chapter: 'Scientific Reasoning and Evidence',
    title: 'The Quine-Duhem Problem',
    prompt:
      'A telescope observation contradicts a theory’s prediction. The Quine-Duhem (underdetermination) problem points out that:',
    mentorHint:
      'A prediction usually comes from a whole package: the core theory plus assumptions about instruments, background conditions, and calculations. When the prediction fails, the evidence tells you something in the package is wrong, but not automatically which part.',
    correct: 'You cannot be sure whether the core theory or some auxiliary assumption (e.g., the instrument working correctly) is at fault',
    wrong: [
      miss(
        'A single failed prediction always conclusively refutes the core theory',
        'That is exactly what Quine and Duhem deny: the failure could lie in an auxiliary assumption instead.',
        'A prediction relies on the theory PLUS background assumptions, so blame is not automatic.',
      ),
      miss(
        'Theories can never be tested by observation at all',
        'Theories can be tested; the point is only that a failure does not uniquely identify the culprit.',
        'Testing still works — it just does not pinpoint exactly what went wrong.',
      ),
      miss(
        'Observations are always more reliable than theories',
        'The problem concerns which assumption to revise, not a ranking of observation over theory.',
        'The issue is locating the error among many assumptions, not trusting data over theory.',
      ),
    ],
    lesson:
      'Predictions are derived from a theory together with many auxiliary assumptions (instruments, initial conditions, background laws). When a prediction fails, the Quine-Duhem thesis notes you can rationally save the core theory by revising an auxiliary instead. This makes naive falsification harder than it first appears.',
    source,
    generated: true,
  },
  {
    id: 7435025,
    chapter: 'Scientific Reasoning and Evidence',
    title: 'Interpreting a p-value',
    prompt:
      'A study reports a statistically significant result at p = 0.03. Which interpretation is correct?',
    mentorHint:
      'Keep the conditioning straight: a p-value starts by assuming the null hypothesis and then asks how surprising the observed data would be. It does not directly state the probability that the hypothesis is true or the size of the effect.',
    correct: 'If there were truly no effect, results this extreme or more would occur about 3% of the time',
    wrong: [
      miss(
        'There is a 97% probability that the hypothesis is true',
        'A p-value is not the probability that a hypothesis is true; it is computed assuming the null hypothesis holds.',
        'The p-value conditions on "no effect," it does not give the probability of the hypothesis.',
      ),
      miss(
        'There is only a 3% chance the result was due to random chance',
        'This common phrasing misstates it; p assumes the null is true and measures data extremeness, not the chance the result is a fluke.',
        'p is P(data this extreme | null true), not P(result is chance).',
      ),
      miss(
        'The effect is large and practically important',
        'Statistical significance says nothing about effect size; a tiny effect can be significant with a big sample.',
        'Significance and magnitude are independent — check the effect size separately.',
      ),
    ],
    lesson:
      'A p-value is the probability of observing data at least as extreme as yours IF the null hypothesis (no effect) were true. It is not the probability the hypothesis is true, nor a measure of effect size. Misreading p-values fuels p-hacking and overclaiming; always report effect sizes and seek replication.',
    source,
    generated: true,
  },

  // Chapter 7: Public Discourse, Digital Claims, and AI
  {
    id: 7435026,
    chapter: 'Public Discourse, Digital Claims, and AI',
    title: 'Lateral Reading',
    prompt:
      'Stanford research found that professional fact-checkers judge an unfamiliar website’s credibility far better than professors and students. Their key habit is to:',
    mentorHint:
      'Credibility checks should not depend only on a source\'s own design, biography page, or self-description. Strong verification asks what independent sources say about the site before trusting the site\'s presentation of itself.',
    correct: 'Leave the site and open new tabs to see what independent sources say about it (lateral reading)',
    wrong: [
      miss(
        'Stay on the page and rely on its design, branding, and "About" section',
        'That is vertical reading — the very approach that fooled professors and students by trusting polished presentation.',
        'Judging a source by its own self-presentation is exactly what failed in the study.',
      ),
      miss(
        'Check whether the site’s domain ends in .org or .edu',
        'Domain suffix is a weak signal; anyone can register .org, and credibility comes from what others report.',
        'A domain extension is not evidence of reliability.',
      ),
      miss(
        'Read the entire article top to bottom before forming any judgment',
        'Thorough on-page reading still keeps you trapped inside the source’s own framing.',
        'Verification requires information from outside the page, not just careful reading of it.',
      ),
    ],
    lesson:
      'Lateral reading (Wineburg & McGrew, SHEG): instead of evaluating a source by reading it vertically (judging its look and self-description), fact-checkers immediately open new tabs to see what independent, reputable sources say about it. This is faster and far more accurate than trusting a site’s own presentation.',
    source,
    generated: true,
  },
  {
    id: 7435027,
    chapter: 'Public Discourse, Digital Claims, and AI',
    title: 'Misinformation vs. Disinformation',
    prompt:
      'A user shares a false health claim they sincerely believe is true and helpful. By the standard distinction, this is:',
    mentorHint:
      'Classify the bad information by both truth value and intent. A false claim can mislead even when shared sincerely, while deliberate deception belongs in a different category.',
    correct: 'Misinformation — false content spread without intent to deceive',
    wrong: [
      miss(
        'Disinformation, because the content is false',
        'Disinformation requires deliberate intent to deceive; here the sharer believes the claim, so intent is absent.',
        'The distinction hinges on intent, not just on whether the content is false.',
      ),
      miss(
        'Neither, since sharing a sincere belief cannot mislead',
        'Sincerely held false claims still mislead readers; sincerity does not make content accurate.',
        'False-but-sincere content is still a recognized category of bad information.',
      ),
      miss(
        'Satire, because no harm was intended',
        'Lack of harmful intent does not make a literal false health claim satire.',
        'Satire signals it is not meant literally; a sincere false claim does not.',
      ),
    ],
    lesson:
      'Misinformation is false information spread without intent to deceive (an honest mistake); disinformation is false information spread deliberately to mislead. The same false claim can be either depending on the sharer’s intent. Distinguishing them guides how you respond — correction vs. countering a deliberate campaign.',
    source,
    generated: true,
  },
  {
    id: 7435028,
    chapter: 'Public Discourse, Digital Claims, and AI',
    title: 'AI Hallucination',
    prompt:
      'A chatbot confidently cites a specific journal article, authors, and page numbers that turn out not to exist. The most accurate description and response is:',
    mentorHint:
      'Precision is not the same as verification. Language models can produce plausible-looking details, so treat an AI citation as a claim to check against external sources rather than as evidence by itself.',
    correct: 'This is a hallucination (confabulation); always independently verify AI-provided citations',
    wrong: [
      miss(
        'The citation must be real because the model gave exact page numbers',
        'Specificity is not evidence of truth; language models can generate fluent, detailed, yet entirely fabricated references.',
        'Confident, precise detail from an AI is not the same as a verified fact.',
      ),
      miss(
        'The model deliberately lied and should be treated as committing fraud',
        'Fraud requires intent; a model has no intent — it produces plausible text, which is error, not deception.',
        'Distinguish a system generating false output from a person intending to deceive.',
      ),
      miss(
        'Such errors never happen with modern AI systems',
        'Fabricated citations remain a well-documented failure mode of current language models.',
        'Hallucinated references are a known, ongoing risk, not a solved problem.',
      ),
    ],
    lesson:
      'AI "hallucination" (better: confabulation) is when a language model generates fluent, confident output that is factually false — including invented citations. Because models optimize for plausible text, not truth, treat every AI claim and reference as a hypothesis to verify against primary sources, not as evidence itself.',
    source,
    generated: true,
  },

  // Chapter 8: Argument Mapping and Reasoned Prose
  {
    id: 7435029,
    chapter: 'Argument Mapping and Reasoned Prose',
    title: 'The Toulmin Warrant',
    prompt:
      'In the Toulmin model, an argument states: "The bridge is unsafe (claim) because its inspection found severe corrosion (grounds)." What is the WARRANT?',
    mentorHint:
      'In Toulmin analysis, separate what is being claimed, what evidence is offered, and what assumption authorizes the move from evidence to claim. The warrant is usually the quiet bridge that makes the grounds relevant.',
    correct: 'The unstated assumption that severe corrosion makes a bridge unsafe',
    wrong: [
      miss(
        'The inspection report documenting the corrosion',
        'That is the grounds (the data/evidence), not the warrant that links grounds to claim.',
        'The warrant is the bridging assumption, not the evidence itself.',
      ),
      miss(
        'The conclusion that the bridge is unsafe',
        'That is the claim; the warrant is the principle connecting the evidence to that claim.',
        'You are looking for the link between evidence and conclusion, not the conclusion.',
      ),
      miss(
        'A qualifier such as "probably" or "in most cases"',
        'A qualifier limits the force of the claim; the warrant is the inferential bridge from grounds to claim.',
        'Hedging words are qualifiers, not the connecting assumption.',
      ),
    ],
    lesson:
      'In Toulmin’s model the warrant is the (often unstated) assumption that licenses the move from grounds to claim — here, "severe corrosion makes bridges unsafe." Distinguishing grounds (evidence) from warrant (the connecting principle) is the key analytic move; backing then justifies the warrant, and qualifiers/rebuttals limit the claim.',
    source,
    generated: true,
  },
  {
    id: 7435030,
    chapter: 'Argument Mapping and Reasoned Prose',
    title: 'Objection and Reply',
    prompt:
      'You are writing an essay defending a thesis. The strongest section to include for an honest, persuasive argument is one that:',
    mentorHint:
      'A strong argumentative essay does not merely pile up friendly evidence; it shows the thesis can survive serious pressure. Look for the move that engages the best opposing reason and then explains why the thesis still stands.',
    correct: 'States the most powerful objection to your thesis and then replies to it',
    wrong: [
      miss(
        'Lists only the evidence that supports your thesis and ignores objections',
        'Ignoring objections leaves your argument fragile and reads as one-sided; addressing the best counterargument is more convincing.',
        'A strong essay anticipates and answers the best opposing case, not just its own side.',
      ),
      miss(
        'Mentions a weak, easily dismissed objection so your thesis looks strong',
        'Refuting a weak objection is a straw man; it does not test your thesis against the real challenge.',
        'Choose the strongest objection, not the most convenient one.',
      ),
      miss(
        'Attacks the character of people who hold the opposing view',
        'That is an ad hominem and does not engage the opposing argument’s actual content.',
        'Engage the opposing reasons, not the people who hold them.',
      ),
    ],
    lesson:
      'Rigorous argumentative prose raises the strongest objection to its own thesis and answers it. This demonstrates intellectual honesty, pre-empts the reader’s doubts, and shows your thesis survives real scrutiny. Refuting a weak objection (straw man) or attacking opponents (ad hominem) does neither.',
    source,
    generated: true,
  },
])
