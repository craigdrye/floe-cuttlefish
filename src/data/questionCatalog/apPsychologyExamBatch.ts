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
    'Coverage source: OpenStax Psychology, AP Psychology-aligned OER, and public psychology review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenStax/OER AP Psychology coverage',
})

export const apPsychologyExamBatchQuestions = makeQuestionBank('AP', [
  q(452001, 'Research Methods', 'Operational definition', 'In psychology research, an operational definition is:', 'A precise description of how a variable is measured or manipulated', [
    miss('A vague synonym for the variable', 'Operational definitions must be specific and observable.', 'Ask how the variable is measured.'),
    miss('A result that proves causation every time', 'Definitions do not prove causation.', 'Separate measurement from inference.'),
    miss('A personal opinion about the topic', 'Research variables need observable procedures.', 'Use measurable terms.'),
  ]),
  q(452002, 'Biological Bases', 'Neurotransmitters', 'Neurotransmitters mainly function to:', 'Carry chemical signals across synapses', [
    miss('Store long-term memories inside bones', 'That is not a neural communication function.', 'Think neuron-to-neuron signaling.'),
    miss('Act as the skull around the brain', 'The skull protects; neurotransmitters signal.', 'Use synapse context.'),
    miss('Turn every reflex into conscious thought', 'Neurotransmitters do not have that single role.', 'Focus on chemical messaging.'),
  ]),
  q(452003, 'Sensation and Perception', 'Absolute threshold', 'Absolute threshold is the minimum stimulation needed to:', 'Detect a stimulus about half the time', [
    miss('Notice a stimulus every single time with certainty', 'Thresholds are probabilistic in standard psych definitions.', 'Remember the 50% benchmark.'),
    miss('Ignore all sensory input', 'Threshold concerns detection, not ignoring stimuli.', 'Use sensory measurement.'),
    miss('Change personality permanently', 'That is unrelated to sensory thresholds.', 'Stay in sensation.'),
  ]),
  q(452004, 'Learning', 'Negative reinforcement', 'Negative reinforcement means:', 'Removing an unpleasant stimulus to increase a behavior', [
    miss('Adding punishment to decrease behavior', 'That is positive punishment.', 'Negative means removal; reinforcement means increase.'),
    miss('Removing a reward to decrease behavior', 'That is negative punishment.', 'Check both words separately.'),
    miss('Any consequence that feels bad', 'The term has a precise learning definition.', 'Use remove/increase.'),
  ]),
  q(452005, 'Cognition', 'Working memory', 'Working memory is best described as:', 'A limited-capacity system for temporarily holding and manipulating information', [
    miss('A permanent store with unlimited capacity', 'Working memory is limited and temporary.', 'Think active mental workspace.'),
    miss('Only muscle memory for physical skills', 'Working memory handles active information processing.', 'Use cognition context.'),
    miss('A reflex that bypasses the brain', 'Working memory is a cognitive system.', 'Focus on temporary mental handling.'),
  ]),
  q(452006, 'Development', 'Object permanence', 'Object permanence is the understanding that:', 'Objects continue to exist even when out of sight', [
    miss('Objects become imaginary whenever hidden', 'Object permanence is the opposite understanding.', 'Think infant cognition.'),
    miss('People cannot learn before adulthood', 'Developmental learning occurs much earlier.', 'Use the specific concept.'),
    miss('Only moving objects are real', 'The concept is about existence despite invisibility.', 'Focus on hidden objects.'),
  ]),
  q(452007, 'Personality', 'Trait theory', 'Trait theories of personality emphasize:', 'Stable patterns of thinking, feeling, and behaving', [
    miss('Only unconscious dream symbols', 'That is closer to psychodynamic interpretation.', 'Trait theory describes stable dimensions.'),
    miss('Random behavior with no consistency', 'Traits imply some consistency.', 'Look for stable patterns.'),
    miss('Brain reflex arcs only', 'Personality traits are broader than reflex pathways.', 'Use personality framework.'),
  ]),
  q(452008, 'Psychological Disorders', 'Anxiety disorder', 'Which feature is most central to anxiety disorders?', 'Excessive fear or worry that interferes with functioning', [
    miss('A complete absence of emotion', 'Anxiety disorders involve heightened fear or worry.', 'Use the core symptom cluster.'),
    miss('Perfect memory for every event', 'That is not central to anxiety disorders.', 'Focus on fear and worry.'),
    miss('Only a preference for quiet rooms', 'A preference alone is not a disorder.', 'Look for impairment and excessive distress.'),
  ]),
  q(452009, 'Therapy', 'Cognitive-behavioral therapy', 'Cognitive-behavioral therapy most directly focuses on:', 'Changing maladaptive thoughts and behaviors', [
    miss('Changing only eye color', 'That is not a psychotherapy goal.', 'CBT targets cognition and behavior.'),
    miss('Avoiding all discussion of behavior', 'Behavior change is part of CBT.', 'Use both cognitive and behavioral pieces.'),
    miss('Prescribing medication as its only method', 'Medication can be useful, but CBT is a psychotherapy approach.', 'Distinguish therapy type.'),
  ]),
  q(452010, 'Social Psychology', 'Conformity', 'Conformity occurs when a person:', 'Changes behavior or beliefs to match a group', [
    miss('Always refuses any group influence', 'That is nonconformity, not conformity.', 'Think matching group norms.'),
    miss('Learns only through classical conditioning', 'Conformity is a social influence concept.', 'Use group pressure context.'),
    miss('Loses all memory of the group', 'Memory loss is unrelated.', 'Focus on behavior or belief change.'),
  ]),
])
