import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

type Variant = {
  label: string
  name: string
  friend: string
  place: string
  object: string
  animal: string
  text: string
}

type Value<T> = T | ((variant: Variant, cycle: number) => T)

type Blueprint = {
  chapter: string
  title: string
  prompt: Value<string>
  correct: Value<string>
  wrong: Value<[string, string, string][]>
  lesson: string
}

const variants: Variant[] = [
  { label: 'Garden', name: 'Mia', friend: 'Sam', place: 'school garden', object: 'seed tray', animal: 'robin', text: 'notice' },
  { label: 'Library', name: 'Noor', friend: 'Ben', place: 'library corner', object: 'book cart', animal: 'cat', text: 'story' },
  { label: 'Museum', name: 'Ava', friend: 'Jin', place: 'local museum', object: 'map', animal: 'fox', text: 'information card' },
  { label: 'Beach', name: 'Leo', friend: 'Ivy', place: 'rock pool', object: 'bucket', animal: 'crab', text: 'poster' },
  { label: 'Classroom', name: 'Kim', friend: 'Omar', place: 'classroom', object: 'pencil box', animal: 'rabbit', text: 'journal entry' },
]

const miss = (answer: string, flaw: string, reframe: string): [string, string, string] => [answer, flaw, reframe]

const valueOf = <T>(value: Value<T>, variant: Variant, cycle: number): T =>
  typeof value === 'function' ? (value as (variant: Variant, cycle: number) => T)(variant, cycle) : value

const buildTrack = (baseId: number, topic: Topic, blueprints: Blueprint[]): Question[] =>
  Array.from({ length: 50 }, (_, index) => {
    const blueprint = blueprints[index % blueprints.length]
    const cycle = Math.floor(index / blueprints.length)
    const variant = variants[cycle % variants.length]
    const question = makeSimpleQuestion(
      baseId + index,
      topic,
      blueprint.chapter,
      `${blueprint.title}: ${variant.label}`,
      valueOf(blueprint.prompt, variant, cycle),
      valueOf(blueprint.correct, variant, cycle),
      valueOf(blueprint.wrong, variant, cycle),
      blueprint.lesson,
      'Generated from Floe primary syllabus coverage',
    )

    if (index % 10 === 9) {
      question.kind = 'deep'
      question.xp = 16
    }

    return question
  })

const wordBuilderBlueprints: Blueprint[] = [
  {
    chapter: 'Phonics and Decoding',
    title: 'Digraph sound',
    prompt: ({ object }) => `Which word has the same starting sound as "ship" in this sentence: ${object} is on the shelf?`,
    correct: 'shell',
    wrong: [
      miss('sip', 'This starts with /s/, not the /sh/ digraph.', 'A digraph is two letters making one sound.'),
      miss('chip', 'This starts with /ch/, a different digraph.', 'Listen for the quiet /sh/ sound.'),
      miss('tip', 'This starts with /t/.', 'Match the first sound, not just the ending.'),
    ],
    lesson: 'The letters sh work together as one digraph sound, as in ship and shell.',
  },
  {
    chapter: 'Phonics and Decoding',
    title: 'Long vowel team',
    prompt: ({ animal }) => `In the sentence "The ${animal} can see the green leaf," which word has the ee vowel team?`,
    correct: 'green',
    wrong: [
      miss('leaf', 'Leaf uses ea, not ee.', 'Look at the exact vowel letters in the word.'),
      miss('can', 'Can has a short a sound.', 'The ee team usually makes a long e sound.'),
      miss('the', 'The does not contain the ee vowel team.', 'Find the two e letters side by side.'),
    ],
    lesson: 'Vowel teams such as ee, ai, and oa often make one long vowel sound.',
  },
  {
    chapter: 'Phonics and Decoding',
    title: 'Magic e',
    prompt: ({ name }) => `${name} changes "cap" by adding silent e at the end. What word is made?`,
    correct: 'cape',
    wrong: [
      miss('cap', 'This ignores the silent e.', 'A final silent e can change the vowel sound.'),
      miss('cup', 'This changes the vowel letter instead of adding e.', 'Keep the same letters and add e.'),
      miss('clap', 'This adds a consonant blend, not silent e.', 'The pattern is consonant-vowel-consonant-e.'),
    ],
    lesson: 'A split digraph, or magic e pattern, can turn a short vowel into a long vowel.',
  },
  {
    chapter: 'Phonics and Decoding',
    title: 'Blend the cluster',
    prompt: ({ place }) => `Which word begins with the same consonant cluster as "frog" in "${place}"?`,
    correct: 'from',
    wrong: [
      miss('fog', 'Fog begins with just f, not fr.', 'A cluster keeps both consonant sounds.'),
      miss('dog', 'Dog begins with d.', 'Listen to the first two sounds.'),
      miss('shop', 'Shop begins with the sh digraph, not an fr cluster.', 'Clusters are blended consonants.'),
    ],
    lesson: 'In a consonant cluster like fr, both sounds are heard and blended together.',
  },
  {
    chapter: 'Sight Words and Fluency',
    title: 'Common exception word',
    prompt: ({ name, place }) => `Choose the tricky word that completes the sentence: ${name} went to the ${place} ____.`,
    correct: 'today',
    wrong: [
      miss('toady', 'This has the letters in a similar order but is not the sight word.', 'Sight words must be recognized exactly.'),
      miss('tody', 'This spelling is missing a vowel.', 'Look for the common word today.'),
      miss('taday', 'This spelling does not match the common exception word.', 'Some common words are not spelled just as they sound.'),
    ],
    lesson: 'Some high-frequency words, such as today, need quick recognition because their spelling can be tricky.',
  },
  {
    chapter: 'Sight Words and Fluency',
    title: 'Sentence fit',
    prompt: ({ friend }) => `Which word best completes the sentence: "${friend} ____ a red hat."`,
    correct: 'has',
    wrong: [
      miss('his', 'His shows belonging and does not make the sentence complete.', 'Read the whole sentence aloud.'),
      miss('run', 'Run does not fit with "a red hat".', 'Choose a word that tells what the person owns or wears.'),
      miss('and', 'And joins ideas but does not complete this sentence.', 'The sentence needs an action word.'),
    ],
    lesson: 'Fluent readers use meaning and grammar together to choose the word that fits.',
  },
  {
    chapter: 'Reading Comprehension',
    title: 'Story sequence',
    prompt: ({ name, animal }) => `${name} fed the ${animal}. Then ${name} closed the gate. Last, ${name} washed their hands. What happened second?`,
    correct: ({ name }) => `${name} closed the gate.`,
    wrong: ({ name, animal }) => [
      miss(`${name} fed the ${animal}.`, 'That happened first.', 'Use words like then and last to order events.'),
      miss(`${name} washed their hands.`, 'That happened last.', 'The question asks for the second event.'),
      miss(`${name} opened a book.`, 'This event is not in the story.', 'Do not add events that are not stated.'),
    ],
    lesson: 'Sequence questions ask you to put story events in order using clue words.',
  },
  {
    chapter: 'Reading Comprehension',
    title: 'Where question',
    prompt: ({ name, object, place }) => `Read: "${name} put the ${object} beside the door in the ${place}." Where is the ${object}?`,
    correct: ({ place }) => `Beside the door in the ${place}`,
    wrong: ({ name }) => [
      miss(`Under the table`, 'The sentence never says under the table.', 'Point to the location words in the text.'),
      miss(`On the bus`, 'This place is not mentioned.', 'Use only details from the sentence.'),
      miss(`In ${name}'s pocket`, 'The object was put beside the door.', 'Check the exact preposition.'),
    ],
    lesson: 'Literal comprehension means finding the answer directly in the words you read.',
  },
  {
    chapter: 'Writing and Grammar Foundations',
    title: 'End punctuation',
    prompt: () => `Which sentence is punctuated correctly?`,
    correct: ({ friend }) => `${friend} is here!`,
    wrong: ({ friend }) => [
      miss(`${friend} is here`, 'This sentence needs ending punctuation.', 'A complete sentence should end with a mark.'),
      miss(`${friend} is here,`, 'A comma is not an end mark.', 'Use a full stop, question mark, or exclamation mark.'),
      miss(`${friend} is here?`, 'This is not asking a question.', 'Use a question mark only for a question.'),
    ],
    lesson: 'Writers use end punctuation to show whether a sentence tells, asks, or exclaims.',
  },
  {
    chapter: 'Writing and Grammar Foundations',
    title: 'Suffix meaning',
    prompt: ({ animal }) => `What does "jumping" mean in "The ${animal} is jumping"?`,
    correct: 'The action is happening now.',
    wrong: [
      miss('The action happened yesterday.', 'That would usually use jumped.', 'The suffix -ing often shows an action in progress.'),
      miss('There is more than one animal.', 'The suffix -s can show plural, not -ing.', 'Look at the ending.'),
      miss('The animal is the fastest.', 'That would use a comparison ending like -est.', 'Match the suffix to its job.'),
    ],
    lesson: 'The suffix -ing often shows that an action is happening right now.',
  },
]

const grade4ReadingBlueprints: Blueprint[] = [
  {
    chapter: 'Reading Literature',
    title: 'Character evidence',
    prompt: ({ name, friend }) => `In a story, ${name} gives up recess to help ${friend} finish a class job. What does this detail best show about ${name}?`,
    correct: ({ name }) => `${name} is helpful and responsible.`,
    wrong: ({ name }) => [
      miss(`${name} dislikes recess.`, 'The detail shows helping, not disliking recess.', 'Use the character action as evidence.'),
      miss(`${name} forgot the job.`, 'The prompt says the job was finished with help.', 'Do not invent a problem.'),
      miss(`${name} wants to be alone.`, 'Helping a friend suggests the opposite.', 'Connect actions to traits.'),
    ],
    lesson: 'Fourth-grade readers describe characters by using specific thoughts, words, and actions from the text.',
  },
  {
    chapter: 'Reading Literature',
    title: 'Theme from details',
    prompt: ({ object }) => `A tale shows a child repairing a broken ${object} instead of throwing it away. Which theme fits best?`,
    correct: 'Care and patience can save something valuable.',
    wrong: [
      miss('New things are always better.', 'The child repairs the old object.', 'Choose a message supported by the events.'),
      miss('Rules only matter when an adult is watching.', 'Rules are not the focus of the tale.', 'Theme is the story message, not any big idea.'),
      miss('It is best to hide mistakes.', 'Repairing the problem is not hiding it.', 'Look at what the character learns.'),
    ],
    lesson: 'A theme is a message supported by repeated story details.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Main idea',
    prompt: ({ animal }) => `An article explains where ${animal}s live, what they eat, and how they stay safe. What is the main idea?`,
    correct: ({ animal }) => `The article gives important facts about ${animal}s.`,
    wrong: [
      miss(`The article is only about one meal.`, 'Food is one detail, not the whole article.', 'Main idea covers all key details.'),
      miss(`The article tells a made-up adventure.`, 'The prompt describes informational facts.', 'Separate fiction from nonfiction.'),
      miss(`The article describes the writer's favourite zoo trip.`, 'The article gives general facts, not one personal trip.', 'Look for facts that apply to all of these animals.'),
    ],
    lesson: 'The main idea is the big point supported by several key details.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Text structure',
    prompt: ({ place }) => `A passage first explains a problem at the ${place}, then lists ways students solved it. Which structure is being used?`,
    correct: 'Problem and solution',
    wrong: [
      miss('Chronology only', 'The prompt focuses on a problem and ways to fix it.', 'Look for the relationship between sections.'),
      miss('Poem and stanza', 'This is an informational structure, not a poem form.', 'Use nonfiction structure terms.'),
      miss('Cause with no effect', 'The passage includes solutions, not only causes.', 'Problem-solution names both parts.'),
    ],
    lesson: 'Informational texts may be organized by chronology, comparison, cause/effect, or problem/solution.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Context clue',
    prompt: ({ name }) => `${name} was famished after the long walk, so lunch disappeared quickly. What does "famished" mean?`,
    correct: 'Very hungry',
    wrong: [
      miss('Very sleepy', 'Lunch disappearing points to hunger, not sleep.', 'Use the nearby clue about eating.'),
      miss('Very angry', 'The sentence gives no anger clue.', 'Let the context decide.'),
      miss('Very quiet', 'Quietness is not connected to lunch disappearing.', 'Look for cause and effect clues.'),
    ],
    lesson: 'Context clues around an unfamiliar word can reveal its meaning.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Root meaning',
    prompt: 'What does the root "photo" mean in photograph and photosynthesis?',
    correct: 'Light',
    wrong: [
      miss('Sound', 'Sound is connected to roots like phon.', 'Compare words that share the root.'),
      miss('Water', 'Water is not the meaning of photo.', 'Think of a photograph needing light.'),
      miss('Small', 'Small is not part of this root meaning.', 'Use known examples to infer roots.'),
    ],
    lesson: 'Greek and Latin roots help readers unlock the meanings of longer academic words.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Simile meaning',
    prompt: ({ animal }) => `What does the simile mean: "The ${animal} was as still as a statue"?`,
    correct: ({ animal }) => `The ${animal} was not moving.`,
    wrong: ({ animal }) => [
      miss(`The ${animal} was made of stone.`, 'A simile compares; it does not make the animal literally stone.', 'Look for the shared quality.'),
      miss(`The ${animal} was very loud.`, 'Still means unmoving, not loud.', 'Use the comparison word as.'),
      miss(`The ${animal} was drawing a statue.`, 'The sentence compares the animal to a statue.', 'Do not change the action.'),
    ],
    lesson: 'A simile uses like or as to compare two things and highlight one shared quality.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Idiom meaning',
    prompt: ({ friend }) => `${friend} said, "This puzzle is a piece of cake." What did ${friend} mean?`,
    correct: 'The puzzle is easy.',
    wrong: [
      miss('The puzzle is made of food.', 'Idioms are not usually literal.', 'Use the common meaning of the phrase.'),
      miss('The puzzle is missing pieces.', 'The phrase does not mean broken.', 'Think of how people use the idiom.'),
      miss('The puzzle is sticky.', 'Cake does not describe the puzzle physically here.', 'Idioms carry figurative meanings.'),
    ],
    lesson: 'Idioms have meanings that are different from the literal meanings of their words.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Relative pronoun',
    prompt: ({ name, object }) => `Choose the best word: "${name} found the ${object} ____ had been missing."`,
    correct: 'that',
    wrong: [
      miss('who', 'Who is usually used for people, not objects.', 'Match the relative pronoun to the noun.'),
      miss('where', 'Where refers to a place.', 'The blank describes the object.'),
      miss('when', 'When refers to time.', 'Use a word that links to the thing.'),
    ],
    lesson: 'Relative pronouns such as who, which, and that connect details to nouns.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Homophone choice',
    prompt: () => `Choose the correct sentence for an item belonging to a group:`,
    correct: ({ place }) => `Their project is about the ${place}.`,
    wrong: ({ place }) => [
      miss(`There project is about the ${place}.`, 'There points to a place, not ownership.', 'Their shows something belongs to people.'),
      miss(`They're project is about the ${place}.`, "They're means they are.", 'Test by replacing it with they are.'),
      miss(`Thair project is about the ${place}.`, 'This is not the standard spelling.', 'Use the correct homophone.'),
    ],
    lesson: 'Homophones sound alike, but their meanings and spellings differ.',
  },
]

const grade5ReadingBlueprints: Blueprint[] = [
  {
    chapter: 'Reading Literature',
    title: 'Quote evidence',
    prompt: ({ name }) => `A story says, "${name} checked the map twice before leading the group." Which inference is best supported?`,
    correct: ({ name }) => `${name} is careful about making decisions.`,
    wrong: ({ name }) => [
      miss(`${name} dislikes maps.`, 'Checking a map twice does not show dislike.', 'Use the quoted detail directly.'),
      miss(`${name} wants everyone to get lost.`, 'The action suggests preventing mistakes.', 'Infer from evidence, not the opposite of it.'),
      miss(`${name} has never led before.`, 'The sentence does not tell us that.', 'Avoid unsupported background details.'),
    ],
    lesson: 'Fifth-grade readers quote accurately and use the quotation to support an inference.',
  },
  {
    chapter: 'Reading Literature',
    title: 'Response to challenge',
    prompt: ({ friend, object }) => `${friend}'s ${object} breaks before the presentation, but ${friend} calmly makes a simple replacement. What theme fits best?`,
    correct: 'Staying calm helps people solve problems.',
    wrong: [
      miss('Presentations should always be cancelled.', 'The character solves the problem instead.', 'Theme should match the response to the challenge.'),
      miss('Broken objects are funny.', 'The prompt focuses on problem-solving, not humor.', 'Look at what the character learns.'),
      miss('Friends should never help.', 'Nothing supports that idea.', 'Do not choose a theme that contradicts the event.'),
    ],
    lesson: 'A theme can be shown through how a character responds to a challenge.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Two main ideas',
    prompt: ({ animal }) => `An article explains how ${animal}s find food and how people protect their habitat. Which summary is strongest?`,
    correct: ({ animal }) => `The article describes ${animal} survival and habitat protection.`,
    wrong: ({ animal }) => [
      miss(`The article only lists foods ${animal}s eat.`, 'That misses the protection idea.', 'Include both main ideas.'),
      miss(`The article tells a fantasy about ${animal}s.`, 'The prompt describes an informational article.', 'Match the genre.'),
      miss(`The article argues that habitats do not matter.`, 'Protection of habitat is one main idea.', 'Do not reverse the message.'),
    ],
    lesson: 'Longer informational texts may have more than one main idea, and summaries should include the important ones.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Evidence for a point',
    prompt: ({ place }) => `A passage claims the ${place} needs better signs. Which detail best supports that point?`,
    correct: 'Three visitors went the wrong way in one afternoon.',
    wrong: [
      miss('The signs are painted blue.', 'Color alone does not prove the signs are unclear.', 'Look for evidence of the problem.'),
      miss('The building opened last year.', 'Age does not support the claim about signs.', 'Evidence must connect to the claim.'),
      miss('The entrance has a bench.', 'A bench is unrelated to sign quality.', 'Choose the detail that proves confusion.'),
    ],
    lesson: 'Authors support points with reasons and evidence that connect directly to the claim.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Context from contrast',
    prompt: ({ name }) => `${name} expected the task to be simple; instead, it was arduous and took all afternoon. What does "arduous" mean?`,
    correct: 'Difficult and tiring',
    wrong: [
      miss('Quick and easy', 'Instead signals a contrast with simple.', 'Use contrast words as context clues.'),
      miss('Brightly colored', 'The sentence is about effort, not color.', 'Stay inside the sentence context.'),
      miss('Recently discovered', 'There is no clue about age or discovery.', 'Use the time and effort clues.'),
    ],
    lesson: 'Contrast clue words such as instead, but, and however can help define unfamiliar vocabulary.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Greek root',
    prompt: 'In photosynthesis, photograph, and photon, the root photo most nearly relates to:',
    correct: 'Light',
    wrong: [
      miss('Writing', 'Writing relates to graph, not photo.', 'Separate the parts of the word.'),
      miss('Heat', 'Light and heat can travel together, but photo means light.', 'Use several words with the same root.'),
      miss('Plants only', 'Photosynthesis happens in plants, but the root is broader.', 'The root meaning appears in photograph too.'),
    ],
    lesson: 'Roots can keep the same meaning even when they appear in words from different subjects.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Homograph in context',
    prompt: ({ name }) => `${name} watched the duck lower its head under the branch. What does "duck" mean in this sentence?`,
    correct: 'To move the head or body down',
    wrong: [
      miss('A kind of bird', 'The word is used as an action here.', 'Check how the word functions in the sentence.'),
      miss('To shout loudly', 'Duck does not mean shout.', 'Use grammar and context together.'),
      miss('A small boat', 'The sentence gives no boat clue.', 'Do not pick an unrelated meaning.'),
    ],
    lesson: 'Homographs can share spelling but have different meanings, so readers must use context.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Perfect tense',
    prompt: () => `Choose the sentence using present perfect tense correctly.`,
    correct: ({ friend }) => `${friend} has finished the poster.`,
    wrong: ({ friend }) => [
      miss(`${friend} finished the poster yesterday.`, 'This is simple past tense.', 'Present perfect uses has or have plus a past participle.'),
      miss(`${friend} will finish the poster.`, 'This is future tense.', 'Look for has finished or have finished.'),
      miss(`${friend} finishing the poster.`, 'This is not a complete standard sentence.', 'Use a helping verb correctly.'),
    ],
    lesson: 'The perfect tense uses helping verbs such as has, have, or had with a past participle.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Correlative conjunction',
    prompt: ({ object }) => `Choose the best pair: "____ the ${object} ____ the notebook must go in the bag."`,
    correct: 'Both; and',
    wrong: [
      miss('Either; and', 'Either pairs with or, not and.', 'Correlative conjunctions work in matched pairs.'),
      miss('Neither; and', 'Neither pairs with nor.', 'Use the pair that fits the meaning.'),
      miss('Both; or', 'Both pairs with and.', 'Keep the pair together.'),
    ],
    lesson: 'Correlative conjunctions such as both/and and either/or must be used as matching pairs.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Introductory comma',
    prompt: () => `Which sentence uses a comma after an introductory phrase correctly?`,
    correct: ({ place }) => `After lunch, we visited the ${place}.`,
    wrong: ({ place }) => [
      miss(`After lunch we, visited the ${place}.`, 'The comma splits the subject from the verb.', 'Place the comma after the introductory phrase.'),
      miss(`After, lunch we visited the ${place}.`, 'The comma interrupts the phrase.', 'Keep the phrase together.'),
      miss(`After lunch we visited, the ${place}.`, 'The comma is too late.', 'The pause comes after lunch.'),
    ],
    lesson: 'A comma can separate an introductory word or phrase from the rest of the sentence.',
  },
]

const grade6ReadingBlueprints: Blueprint[] = [
  {
    chapter: 'Reading Literature',
    title: 'Character arc',
    prompt: ({ name }) => `At first, ${name} refuses to speak during group work. By the end, ${name} presents the final idea. What has changed?`,
    correct: ({ name }) => `${name} has become more confident.`,
    wrong: ({ name }) => [
      miss(`${name} has become less involved.`, 'Presenting the final idea shows more involvement.', 'Track the change from beginning to end.'),
      miss(`${name} has forgotten the assignment.`, 'The prompt says the character presents an idea.', 'Use the plot events.'),
      miss(`${name} has changed schools.`, 'No school change is mentioned.', 'Avoid unsupported details.'),
    ],
    lesson: 'Sixth-grade readers analyze how characters respond and change as the plot moves forward.',
  },
  {
    chapter: 'Reading Literature',
    title: 'Word choice and tone',
    prompt: ({ place }) => `A narrator calls the ${place} "a cramped, whispering maze." What tone do these words create?`,
    correct: 'Uneasy and mysterious',
    wrong: [
      miss('Cheerful and open', 'Cramped and whispering suggest discomfort, not cheer.', 'Notice the connotations of the words.'),
      miss('Scientific and neutral', 'The phrase is descriptive and mood-setting, not neutral.', 'Tone comes from word choice.'),
      miss('Silly and careless', 'Maze may suggest confusion, but not silliness here.', 'Use all the words together.'),
    ],
    lesson: 'Connotation is the feeling a word carries, and it can shape the tone of a passage.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Objective summary',
    prompt: ({ animal }) => `Which sentence belongs in an objective summary of an article about ${animal} migration?`,
    correct: ({ animal }) => `${animal}s travel when food and weather change.`,
    wrong: ({ animal }) => [
      miss(`${animal}s are definitely the best animals.`, 'That is an opinion, not objective summary.', 'Leave out personal judgments.'),
      miss(`I would never want to migrate.`, 'This is personal reaction.', 'Summaries focus on the text.'),
      miss(`The article is boring.`, 'That evaluates the article instead of summarizing it.', 'State central ideas neutrally.'),
    ],
    lesson: 'An objective summary reports central ideas without personal opinions or judgments.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Author purpose',
    prompt: ({ place }) => `A brochure gives safety rules, route times, and emergency contacts for the ${place}. What is the author's main purpose?`,
    correct: 'To inform visitors how to use the place safely',
    wrong: [
      miss('To entertain with a fictional story', 'The details are practical information.', 'Match purpose to text features.'),
      miss('To sell a toy', 'No product is being sold.', 'Use the actual content.'),
      miss('To hide important information', 'The brochure provides important information.', 'Do not choose the opposite of the text evidence.'),
    ],
    lesson: 'Author purpose can be inferred from what information the text gives and how it is organized.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Connotation',
    prompt: ({ name }) => `Which word gives the most positive tone: "${name} was ____ with supplies"?`,
    correct: 'thrifty',
    wrong: [
      miss('stingy', 'Stingy has a negative connotation.', 'Choose the word with a positive association.'),
      miss('miserly', 'Miserly is strongly negative.', 'Words with similar definitions can feel different.'),
      miss('wasteful', 'Wasteful means using too much, not saving wisely.', 'Check both meaning and tone.'),
    ],
    lesson: 'Connotation helps readers choose between words with related meanings but different feelings.',
  },
  {
    chapter: 'Vocabulary Acquisition',
    title: 'Latin root',
    prompt: 'Audible, audience, and auditory all contain a root that means:',
    correct: 'Hear',
    wrong: [
      miss('See', 'Seeing relates to roots such as vis.', 'Use the shared meaning across the words.'),
      miss('Write', 'Writing relates to graph or scrib.', 'Think of an audience listening.'),
      miss('Carry', 'Carry relates to port.', 'Roots are meaning clues.'),
    ],
    lesson: 'Latin roots such as aud can reveal the meaning of academic vocabulary.',
  },
  {
    chapter: 'Reading Informational Text',
    title: 'Evaluate claim',
    prompt: ({ place }) => `A writer claims the ${place} is always quiet because it was quiet on one Monday morning. What is the weakness?`,
    correct: 'One observation is not enough evidence for "always."',
    wrong: [
      miss('The claim has too much evidence.', 'The problem is too little evidence.', 'Check whether the evidence supports the size of the claim.'),
      miss('Monday is never part of a week.', 'Monday is a real day; that is not the issue.', 'Focus on the leap from one case to always.'),
      miss('Quiet places cannot be described.', 'Places can be described as quiet.', 'Evaluate the reasoning, not the topic.'),
    ],
    lesson: 'Strong claims need enough relevant evidence; a single example may not support a broad claim.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Pronoun case',
    prompt: () => `Choose the standard sentence.`,
    correct: ({ friend }) => `${friend} and I finished the report.`,
    wrong: ({ friend }) => [
      miss(`Me and ${friend} finished the report.`, 'Me is not the standard subject pronoun here.', 'Use I as a subject.'),
      miss(`${friend} and me finished the report.`, 'Me is objective case, not subject case.', 'Remove the other name to test the pronoun.'),
      miss(`Myself and ${friend} finished the report.`, 'Myself is not used as the subject in this way.', 'Use intensive pronouns only when they refer back to a noun or pronoun.'),
    ],
    lesson: 'Pronoun case depends on whether the pronoun acts as a subject, object, or possessive.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Vague pronoun',
    prompt: ({ object }) => `Why is this sentence unclear? "When the ${object} hit the box, it broke."`,
    correct: 'It is unclear whether the object or the box broke.',
    wrong: [
      miss('The sentence has no nouns.', 'It has two nouns.', 'A vague pronoun has an unclear antecedent.'),
      miss('The verb is missing.', 'Hit and broke are verbs.', 'The issue is the pronoun it.'),
      miss('The sentence is a question.', 'It is a statement.', 'Identify what makes the meaning ambiguous.'),
    ],
    lesson: 'A pronoun should clearly refer to one antecedent so readers know what it means.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Parenthetical punctuation',
    prompt: () => `Which sentence correctly sets off extra information?`,
    correct: ({ place }) => `The ${place}, which closes at five, is beside the park.`,
    wrong: ({ place }) => [
      miss(`The ${place} which closes, at five is beside the park.`, 'The commas split the phrase incorrectly.', 'Set off the whole nonessential phrase.'),
      miss(`The ${place} which closes at five is beside, the park.`, 'The comma is placed inside the main clause for no reason.', 'Commas should mark the extra information.'),
      miss(`The, ${place} which closes at five is beside the park.`, 'The comma separates the article from the noun.', 'Do not split a noun phrase.'),
    ],
    lesson: 'Commas, dashes, or parentheses can set off extra nonessential information.',
  },
]

const philosophyBlueprints = (year: 1 | 2 | 3 | 4 | 5 | 6): Blueprint[] => {
  const banks: Record<number, Blueprint[]> = {
    1: [
      {
        chapter: 'Rules and Responsibility',
        title: 'Fair rule',
        prompt: ({ place }) => `Which classroom rule for the ${place} is fairest?`,
        correct: 'Everyone takes turns and explains if they need extra help.',
        wrong: [
          miss('Only the fastest child may use the materials.', 'Speed is not a fair reason to exclude others.', 'A fair rule considers everyone.'),
          miss('No one may ask questions.', 'This stops learning and responsibility.', 'Good rules help people act well.'),
          miss('The rule changes secretly each day.', 'A hidden rule is hard to follow.', 'Fair rules should be clear.'),
        ],
        lesson: 'Good rules are clear, help people, and can be explained with a reason.',
      },
      {
        chapter: 'Friendship and Kindness',
        title: 'Kind choice',
        prompt: ({ friend }) => `${friend} is left out of a game. What is the kindest useful action?`,
        correct: 'Invite them in and help explain the game.',
        wrong: [
          miss('Pretend not to notice.', 'Ignoring someone left out does not include them.', 'Kindness often means taking action.'),
          miss('Laugh so everyone feels silly.', 'Laughing at the situation may hurt feelings.', 'Choose an action that helps.'),
          miss('Tell them they can never play.', 'That excludes the person further.', 'Good friends include others.'),
        ],
        lesson: 'Kindness is not just feeling nice; it often means doing something helpful.',
      },
      {
        chapter: 'Truth and Honesty',
        title: 'Lie or mistake',
        prompt: ({ name }) => `${name} says the lunch bell rang, but then notices it was a phone sound. What is this?`,
        correct: 'A mistake that can be corrected',
        wrong: [
          miss('A lie on purpose', 'The prompt says the person noticed a mistake.', 'A lie means trying to make someone believe something false.'),
          miss('A fact forever', 'New evidence changed what the person knew.', 'Facts must match reality.'),
          miss('A rule', 'This is about a statement, not a rule.', 'Sort the kind of idea first.'),
        ],
        lesson: 'A mistake is different from a lie because a lie is meant to deceive.',
      },
      {
        chapter: 'The Natural World',
        title: 'Care for living things',
        prompt: ({ animal }) => `Why should a class handle a ${animal} gently?`,
        correct: 'Living things can be harmed and may have feelings or needs.',
        wrong: [
          miss('Because animals are toys.', 'Animals are living things, not toys.', 'Think about what living things need.'),
          miss('Because rough handling is always faster.', 'Speed is not the important value.', 'Care matters more than rushing.'),
          miss('Because plants and animals never change.', 'Living things do change and can be affected.', 'Consider consequences.'),
        ],
        lesson: 'Ethical thinking about nature asks how our actions affect other living things.',
      },
      {
        chapter: 'Thinking Skills',
        title: 'Reasoned opinion',
        prompt: () => `Which answer gives an opinion with a reason?`,
        correct: ({ name }) => `${name}: "I think we should share because everyone helped."`,
        wrong: ({ name }) => [
          miss(`${name}: "Share."`, 'This gives an opinion but no reason.', 'Use because to explain thinking.'),
          miss(`${name}: "Blue is a color."`, 'This is a fact, not an opinion about what to do.', 'Separate facts from opinions.'),
          miss(`${name}: "I am right."`, 'This does not explain why.', 'A reason makes an idea stronger.'),
        ],
        lesson: 'A strong classroom discussion uses reasons, not just answers.',
      },
      {
        chapter: 'Rules and Responsibility',
        title: 'Consequence',
        prompt: ({ object }) => `If someone leaves a shared ${object} outside in the rain, which consequence best teaches responsibility?`,
        correct: 'They help dry it and plan where to store it next time.',
        wrong: [
          miss('Everyone is banned from using it forever.', 'That punishes people who did not choose the action.', 'Consequences should be connected and fair.'),
          miss('No one talks about it.', 'That does not teach how to do better.', 'Responsible consequences help repair.'),
          miss('The person gets extra turns.', 'That rewards the careless action.', 'Consequences should match the problem.'),
        ],
        lesson: 'A useful consequence helps repair harm and teaches a better choice.',
      },
      {
        chapter: 'Friendship and Kindness',
        title: 'Different friends',
        prompt: ({ name, friend }) => `${name} and ${friend} like different games. Can they still be friends?`,
        correct: 'Yes, because friends can respect differences and take turns choosing.',
        wrong: [
          miss('No, friends must like exactly the same things.', 'Friendship does not require being identical.', 'Differences can be respected.'),
          miss('Only if one person always gives in.', 'That would not be fair to both friends.', 'Friendship involves listening both ways.'),
          miss('Only if an adult chooses every game.', 'Adults can help, but friends can reason together.', 'Look for mutual respect.'),
        ],
        lesson: 'Friendship can include difference when people listen and treat each other fairly.',
      },
      {
        chapter: 'Truth and Honesty',
        title: 'Trust',
        prompt: ({ friend }) => `${friend} often tells untrue stories to avoid blame. What may happen?`,
        correct: 'Other people may find it harder to trust them.',
        wrong: [
          miss('Everyone will trust them more.', 'Repeated lying usually weakens trust.', 'Think about consequences over time.'),
          miss('No one will ever notice.', 'People often notice patterns.', 'Trust depends on honesty.'),
          miss('The stories become true.', 'Saying something does not make it true.', 'Truth must match reality.'),
        ],
        lesson: 'Honesty matters because trust grows or shrinks through repeated choices.',
      },
      {
        chapter: 'The Natural World',
        title: 'Environmental effect',
        prompt: ({ place }) => `Why is dropping litter in the ${place} a problem?`,
        correct: 'It can hurt animals, people, and the shared space.',
        wrong: [
          miss('Litter always disappears immediately.', 'Litter can remain and cause harm.', 'Think about what happens after the action.'),
          miss('Only grown-ups can care about litter.', 'Children can also notice and help.', 'Responsibility can be shared.'),
          miss('It makes the place cleaner.', 'Litter makes places less clean.', 'Choose the answer that follows the consequence.'),
        ],
        lesson: 'Environmental reasoning connects small actions to their effects on shared places.',
      },
      {
        chapter: 'Thinking Skills',
        title: 'Respectful disagreement',
        prompt: ({ name, friend }) => `${name} disagrees with ${friend}. Which response is best?`,
        correct: `"I see it differently because of this reason..."`,
        wrong: [
          miss('"You are silly."', 'That attacks the person instead of the idea.', 'Disagree with reasons and respect.'),
          miss('"I will not listen."', 'Listening is part of good thinking.', 'You can listen and still disagree.'),
          miss('"Only my idea counts."', 'Discussion should allow more than one voice.', 'Give a reason and invite response.'),
        ],
        lesson: 'Respectful disagreement focuses on reasons, not insults.',
      },
    ],
    2: [
      {
        chapter: 'Fairness and Justice',
        title: 'Equal or needed',
        prompt: ({ name, friend }) => `${name} has two pencils and ${friend} has none. What is the fairest choice?`,
        correct: 'Give the spare pencil to the person who needs one.',
        wrong: [
          miss('Break both pencils so they are equal.', 'That treats equality as sameness even when it harms everyone.', 'Fairness can mean meeting needs.'),
          miss('Let no one write.', 'That does not solve the need.', 'Justice often asks what helps people participate.'),
          miss('Give both pencils to the person who already has them.', 'That ignores the person without a pencil.', 'Consider need as well as ownership.'),
        ],
        lesson: 'Equity means people may need different support to have a fair chance.',
      },
      {
        chapter: 'Courage and Fear',
        title: 'Brave and scared',
        prompt: ({ friend }) => `${friend} feels nervous but tells a teacher someone is being bullied. What does this show?`,
        correct: 'Courage can mean doing the right thing while scared.',
        wrong: [
          miss('Courage means never feeling fear.', 'The scenario shows fear and courage together.', 'Bravery is not the absence of fear.'),
          miss('It is always wrong to ask adults for help.', 'Asking for help can protect someone.', 'Wise courage can include support.'),
          miss('Being scared means the action cannot be brave.', 'Fear can make courage more meaningful.', 'Look at the choice, not only the feeling.'),
        ],
        lesson: 'Moral courage is standing up for what is right even when it feels difficult.',
      },
      {
        chapter: 'Knowledge and Belief',
        title: 'Evidence check',
        prompt: ({ animal }) => `Someone says a ${animal} visited the classroom at night. What is the best way to check?`,
        correct: 'Look for reliable evidence, such as a camera record or clear tracks.',
        wrong: [
          miss('Believe it because the story is vivid and fun to imagine.', 'A vivid story is not evidence.', 'Ask how we could know.'),
          miss('Decide too quickly that it cannot happen.', 'That is a belief without evidence too.', 'Good thinking investigates.'),
          miss('Vote on whether it happened.', 'A vote does not prove an event.', 'Evidence is stronger than popularity.'),
        ],
        lesson: 'Knowledge claims become stronger when they are supported by evidence.',
      },
      {
        chapter: 'Community and Difference',
        title: 'Prejudice',
        prompt: ({ name }) => `${name} assumes a new student will be bad at games before meeting them. What is the problem?`,
        correct: 'That judges someone before knowing them.',
        wrong: [
          miss('That is careful evidence gathering.', 'No evidence has been gathered.', 'Prejudice happens before fair knowledge.'),
          miss('That is the same as welcoming them.', 'The assumption is unfair, not welcoming.', 'Respect starts before friendship is formed.'),
          miss('That proves the assumption is true.', 'An assumption does not prove itself.', 'Check with real experience.'),
        ],
        lesson: 'Prejudice is harmful because it judges people before knowing them fairly.',
      },
      {
        chapter: 'Imagination and Possibility',
        title: 'What if reasoning',
        prompt: ({ place }) => `What is the best philosophical question about "What if the ${place} had no rules for a day?"`,
        correct: 'What good and bad consequences might happen?',
        wrong: [
          miss('What color is the door?', 'That is not about the rule question.', 'A big question explores reasons and consequences.'),
          miss('Can we stop thinking now?', 'That avoids the question.', 'Philosophy keeps asking why and what follows.'),
          miss('Who can shout loudest?', 'Shouting is not reasoning.', 'Look for a question that opens discussion.'),
        ],
        lesson: 'Imaginative thought experiments help us test ideas by considering consequences.',
      },
      {
        chapter: 'Fairness and Justice',
        title: 'Second chance',
        prompt: ({ friend }) => `${friend} breaks a game rule once, admits it, and wants to try again. What is the fairest response?`,
        correct: 'Allow a second chance with a clear reminder of the rule.',
        wrong: [
          miss('Ban them forever immediately.', 'That may be too harsh for one admitted mistake.', 'Fairness can include learning.'),
          miss('Pretend the rule never mattered.', 'Rules still matter.', 'A second chance can include responsibility.'),
          miss('Punish a different child instead.', 'Consequences should match the person and action.', 'Justice should not blame the wrong person.'),
        ],
        lesson: 'Second chances can be fair when they help people learn and repair trust.',
      },
      {
        chapter: 'Courage and Fear',
        title: 'Reckless or brave',
        prompt: ({ animal }) => `A child runs into a busy road to chase a ${animal}. Is that brave or reckless?`,
        correct: 'Reckless, because it ignores serious danger.',
        wrong: [
          miss('Brave, because all risk is good.', 'Risk alone is not enough for courage.', 'Wise courage considers safety.'),
          miss('Kind, because roads are always safe.', 'Busy roads are dangerous.', 'Good intentions still need safe choices.'),
          miss('Fair, because everyone should run.', 'Fairness is not the main issue.', 'Identify the value being tested.'),
        ],
        lesson: 'Courage should be guided by judgment; reckless actions ignore avoidable danger.',
      },
      {
        chapter: 'Knowledge and Belief',
        title: 'Changing your mind',
        prompt: ({ name }) => `${name} believes the box is empty, then sees books inside. What should ${name} do?`,
        correct: 'Change the belief because new evidence arrived.',
        wrong: [
          miss('Keep the old belief no matter what.', 'Ignoring evidence is weak reasoning.', 'Good thinkers update beliefs.'),
          miss('Hide the books to stay right.', 'That changes the situation unfairly.', 'The aim is truth, not winning.'),
          miss('Say evidence never matters.', 'Evidence helps us know things.', 'Use what you can check.'),
        ],
        lesson: 'Changing your mind for a good reason is a strength, not a weakness.',
      },
      {
        chapter: 'Community and Difference',
        title: 'Community role',
        prompt: ({ place }) => `Which action helps build a community in the ${place}?`,
        correct: 'People share jobs and help each other keep it welcoming.',
        wrong: [
          miss('One person keeps every resource.', 'That weakens shared life.', 'Communities involve mutual help.'),
          miss('No one listens to anyone else.', 'Listening helps people belong.', 'Community is more than being in the same room.'),
          miss('People are judged only by appearance.', 'That is unfair and harmful.', 'Respect supports community.'),
        ],
        lesson: 'A community is built by shared spaces, responsibilities, and respect.',
      },
      {
        chapter: 'Imagination and Possibility',
        title: 'Creative change',
        prompt: ({ name }) => `${name} imagines a school where every child can suggest one improvement. What value does this show?`,
        correct: 'Creative thinking can help people improve the world.',
        wrong: [
          miss('New ideas should never be heard.', 'The scenario invites ideas.', 'Imagination can lead to change.'),
          miss('Only adults can imagine possibilities.', 'Children can imagine and reason too.', 'Consider who is included.'),
          miss('Every idea must be accepted without thinking.', 'Ideas should still be discussed.', 'Creativity works with reasoning.'),
        ],
        lesson: 'Possibility thinking asks how the world could be different and why that might matter.',
      },
    ],
    3: [
      {
        chapter: 'Rights and Responsibilities',
        title: 'Right with responsibility',
        prompt: ({ name }) => `${name} has a right to learn. Which responsibility goes with it?`,
        correct: 'Try to learn while also letting others learn.',
        wrong: [
          miss('Stop others from asking questions.', 'That blocks their right to learn.', 'Rights often come with duties to others.'),
          miss('Repeat the same mistake without thinking about the lesson.', 'That rejects the responsibility connected to education.', 'A right is supported by responsible action.'),
          miss('Take everyone else’s books.', 'That harms others learning.', 'Respect shared rights.'),
        ],
        lesson: 'Rights and responsibilities often fit together in a shared community.',
      },
      {
        chapter: 'Environment and Our Choices',
        title: 'Individual action',
        prompt: ({ place }) => `One class recycles paper at the ${place}. Why can this still matter?`,
        correct: 'Small actions can join with others to create a bigger effect.',
        wrong: [
          miss('One action can never matter at all.', 'Collective change is made of many smaller actions.', 'Think about repeated and shared choices.'),
          miss('Recycling one class solves every environmental problem.', 'That overstates the effect.', 'Good reasoning avoids exaggeration.'),
          miss('The paper becomes food.', 'That is not how recycling works.', 'Use real consequences.'),
        ],
        lesson: 'Environmental reasoning weighs both individual action and collective impact.',
      },
      {
        chapter: 'History, Memory and Stories',
        title: 'Myth or fact',
        prompt: () => `Which statement is most likely a myth rather than a historical fact?`,
        correct: ({ animal }) => `A talking ${animal} built the first bridge in one night.`,
        wrong: [
          miss('The town opened a bridge in 1920.', 'This is a checkable historical claim.', 'Facts can often be verified with records.'),
          miss('Workers used stone from a nearby hill.', 'This sounds like a realistic factual detail.', 'Myths often include impossible events.'),
          miss('People crossed the river to trade goods.', 'This is a plausible historical action.', 'Look for magical or legendary clues.'),
        ],
        lesson: 'Historical facts are supported by evidence; myths and legends may include symbolic or impossible events.',
      },
      {
        chapter: 'Power and Authority',
        title: 'Legitimate authority',
        prompt: ({ place }) => `Which use of authority in the ${place} is most legitimate?`,
        correct: 'A teacher explains a safety rule and applies it to everyone.',
        wrong: [
          miss('A leader changes rules to help only friends.', 'That is unfair use of power.', 'Legitimate authority needs reasons and fairness.'),
          miss('One child orders others around with no reason.', 'Power without a good reason is weak authority.', 'Ask why the authority should be accepted.'),
          miss('Rules are hidden until someone breaks them.', 'Hidden rules are not fair.', 'Clear rules support legitimacy.'),
        ],
        lesson: 'Authority is stronger when it is fair, clear, and connected to a good purpose.',
      },
      {
        chapter: 'Complex Moral Reasoning',
        title: 'Loyalty or honesty',
        prompt: ({ friend }) => `${friend} damages a display and asks you to keep it secret. Which response best balances loyalty and honesty?`,
        correct: 'Encourage them to tell the truth and offer to go with them.',
        wrong: [
          miss('Lie for them forever.', 'That protects loyalty by abandoning honesty and repair.', 'Balance competing values.'),
          miss('Tell everyone loudly to embarrass them.', 'That may be honest but not loyal or kind.', 'How truth is told also matters.'),
          miss('Pretend damage repairs itself.', 'Ignoring the harm does not solve it.', 'Responsible honesty helps repair.'),
        ],
        lesson: 'Moral dilemmas can involve more than one value, so strong answers explain the balance.',
      },
      {
        chapter: 'Rights and Responsibilities',
        title: 'Right to be heard',
        prompt: ({ name }) => `${name} wants to share an idea in class. What does the right to be heard mean?`,
        correct: 'The class should listen respectfully, though they may still disagree.',
        wrong: [
          miss('Everyone must agree with the idea.', 'Being heard is not the same as being agreed with.', 'Rights protect fair treatment.'),
          miss('Only loud people may speak.', 'Volume should not decide whose voice matters.', 'Respect includes quieter voices.'),
          miss('No one else may speak again.', 'Others also have a right to be heard.', 'Rights are shared.'),
        ],
        lesson: 'The right to be heard means having a fair chance to speak and be listened to.',
      },
      {
        chapter: 'Environment and Our Choices',
        title: 'Trade-off',
        prompt: ({ place }) => `A factory near the ${place} gives jobs but pollutes a stream. What is the best first question?`,
        correct: 'How can people protect jobs while reducing harm to the stream?',
        wrong: [
          miss('Why should only one side matter?', 'The dilemma has two real concerns.', 'Trade-offs require weighing values.'),
          miss('Can pollution be ignored if jobs exist?', 'Ignoring harm is not balanced reasoning.', 'Consider both consequences.'),
          miss('Can jobs be ignored because nature matters?', 'People’s needs also matter.', 'Look for a fair solution path.'),
        ],
        lesson: 'Environmental dilemmas often involve trade-offs that require careful balancing.',
      },
      {
        chapter: 'History, Memory and Stories',
        title: 'Perspective',
        prompt: ({ place }) => `Two people describe the same event at the ${place} differently. What should a historian do?`,
        correct: 'Compare the accounts and ask what evidence supports each one.',
        wrong: [
          miss('Trust the louder person because they sound more certain.', 'Volume is not evidence.', 'Historians compare sources.'),
          miss('Throw away both accounts automatically.', 'Different accounts can still contain useful evidence.', 'Evaluate, do not dismiss blindly.'),
          miss('Trust the account that looks neatest rather than the one with the best evidence.', 'Appearance is not reliability.', 'Focus on evidence and perspective.'),
        ],
        lesson: 'History includes perspectives, so readers compare sources and evidence.',
      },
      {
        chapter: 'Power and Authority',
        title: 'Rule or law',
        prompt: () => `Which is the best difference between a school rule and a law?`,
        correct: 'A school rule applies in school; a law applies in the wider country or community.',
        wrong: [
          miss('Rules are always unfair and laws are always fair.', 'Both rules and laws can be fair or unfair.', 'Define the categories first.'),
          miss('Laws only apply to teachers.', 'Laws apply widely, not only teachers.', 'Think about scope.'),
          miss('Rules can never be written down.', 'Rules can be written or spoken.', 'The key difference is authority and scope.'),
        ],
        lesson: 'Rules and laws both guide behavior, but they come from different authorities and cover different groups.',
      },
      {
        chapter: 'Complex Moral Reasoning',
        title: 'Bystander responsibility',
        prompt: ({ friend }) => `${friend} sees someone being teased and does nothing. What question best explores responsibility?`,
        correct: 'Could they safely help or get support from an adult?',
        wrong: [
          miss('Does doing nothing always solve harm?', 'Doing nothing may allow harm to continue.', 'Think about possible safe actions.'),
          miss('Is teasing always harmless?', 'Teasing can hurt people.', 'Consider consequences.'),
          miss('Should bystanders never think?', 'The point is to reason about responsibility.', 'Ask what action was possible.'),
        ],
        lesson: 'Bystander responsibility asks what someone could reasonably and safely do when they see harm.',
      },
    ],
    4: [
      {
        chapter: 'Ethics and Intentions',
        title: 'Intentions and outcomes',
        prompt: ({ name, object }) => `${name} accidentally breaks a ${object} while helping clean. How should we judge the action?`,
        correct: 'Consider both the helpful intention and the broken object.',
        wrong: [
          miss('Only the outcome matters, so it is the same as breaking it on purpose.', 'Intention changes how we judge the action.', 'Ethical reasoning can include both motive and result.'),
          miss('Only the intention matters, so no repair is needed.', 'A good intention does not erase the harm.', 'Repair still matters.'),
          miss('No one should ask what happened.', 'Understanding the event helps judge fairly.', 'Use evidence and reasons.'),
        ],
        lesson: 'Ethical judgment often considers intentions, outcomes, and repair together.',
      },
      {
        chapter: 'Truth and Media',
        title: 'Reliable source',
        prompt: ({ animal }) => `A website claims ${animal}s can read minds but gives no evidence. What should a careful reader do?`,
        correct: 'Look for reliable sources and evidence before believing it.',
        wrong: [
          miss('Believe it because it is online.', 'Online claims still need evidence.', 'Check source reliability.'),
          miss('Share it quickly before checking.', 'That can spread false information.', 'Pause before passing on claims.'),
          miss('Believe only the headline.', 'Headlines are not enough evidence.', 'Read and check supporting details.'),
        ],
        lesson: 'Media literacy means checking evidence, source reliability, and possible bias.',
      },
      {
        chapter: 'Wealth and Poverty',
        title: 'Charity or justice',
        prompt: ({ place }) => `A group donates lunch today, then asks why some families near the ${place} lack food every week. What idea are they exploring?`,
        correct: 'The difference between short-term charity and longer-term justice',
        wrong: [
          miss('Why helping once is always useless', 'Short-term help can matter, but it may not solve causes.', 'Separate immediate help from structural questions.'),
          miss('Why food is never a need', 'Food is a basic need.', 'Needs are different from wants.'),
          miss('Why questions should not be asked', 'Questions help understand causes.', 'Justice asks why problems happen.'),
        ],
        lesson: 'Charity can meet immediate needs, while justice asks about the causes of unfair conditions.',
      },
      {
        chapter: 'Human Nature and Society',
        title: 'Freedom and security',
        prompt: ({ place }) => `A rule closes the ${place} during a storm. What trade-off does this show?`,
        correct: 'Some freedom is limited to keep people safe.',
        wrong: [
          miss('Safety rules can never be fair.', 'Some safety rules have good reasons.', 'Ask whether the limit is justified.'),
          miss('Freedom means no rule can ever exist.', 'Societies often balance freedom with protection.', 'Trade-offs involve two values.'),
          miss('Storms are opinions.', 'A storm is a real condition, not a preference.', 'Use the facts of the scenario.'),
        ],
        lesson: 'Political philosophy often studies trade-offs between freedom and security.',
      },
      {
        chapter: 'Art, Beauty and Value',
        title: 'What counts as art',
        prompt: ({ object }) => `A student arranges old ${object}s into a sculpture. Which question is most philosophical?`,
        correct: 'What makes something art rather than just an object?',
        wrong: [
          miss('How heavy is the finished sculpture?', 'Weight is a measurement, not a question about art.', 'Philosophy asks about meaning and criteria, not facts about the object.'),
          miss('Did the student have permission to use the objects?', 'That is a practical or rule question, not a philosophical one about art.', 'Focus on the concept of art itself.'),
          miss('How quickly was the sculpture made?', 'Speed of making is not what defines whether something counts as art.', 'Ask a question about definition or value.'),
        ],
        lesson: 'Aesthetic questions ask about art, beauty, value, and interpretation.',
      },
      {
        chapter: 'Ethics and Intentions',
        title: 'Hard kindness',
        prompt: ({ friend }) => `${friend} asks for an answer during a test. Which action is kind but honest?`,
        correct: 'Refuse to give the answer and encourage them to ask for help after the test.',
        wrong: [
          miss('Give the answer because kindness means saying yes.', 'That helps cheating and is not honest.', 'Kindness can include a firm no.'),
          miss('Mock them loudly.', 'That is neither kind nor helpful.', 'Reject the request respectfully.'),
          miss('Take their paper away.', 'That is not a fair or appropriate response.', 'Choose a responsible action.'),
        ],
        lesson: 'Kindness can be difficult when it also requires honesty and fairness.',
      },
      {
        chapter: 'Truth and Media',
        title: 'Bias',
        prompt: ({ place }) => `A review says the ${place} is terrible, but the writer owns a competing place nearby. What should readers notice?`,
        correct: 'The writer may have a bias or personal interest.',
        wrong: [
          miss('The review must be false in every detail.', 'Bias does not prove every sentence false.', 'Bias means read carefully and check evidence.'),
          miss('The review is automatically the best source.', 'A personal interest can weaken reliability.', 'Consider motive and evidence.'),
          miss('Competition makes evidence unnecessary.', 'Evidence is still important.', 'Evaluate the support.'),
        ],
        lesson: 'Bias is a point of view or interest that may shape how information is presented.',
      },
      {
        chapter: 'Wealth and Poverty',
        title: 'Needs and wants',
        prompt: ({ name }) => `${name} must choose between clean water for a village and a newer game table. Which is the need?`,
        correct: 'Clean water',
        wrong: [
          miss('A newer game table', 'A game table may be wanted, but water is necessary for life.', 'Needs are required for health and safety.'),
          miss('Neither, because people need nothing.', 'People have basic needs.', 'Consider survival and dignity.'),
          miss('Both in exactly the same way', 'Both may be valued, but they are not equally necessary.', 'Separate needs from wants.'),
        ],
        lesson: 'Needs are things people require for health and dignity; wants are things people may like but can live without.',
      },
      {
        chapter: 'Human Nature and Society',
        title: 'State of nature',
        prompt: ({ place }) => `What is the best reason to imagine the ${place} with no rules for a year?`,
        correct: 'To test why societies create rules and governments.',
        wrong: [
          miss('To prove every rule is pointless before thinking.', 'A thought experiment investigates; it does not assume the answer.', 'Use imagination to reason.'),
          miss('To avoid considering consequences.', 'Consequences are central to the question.', 'Ask what would happen and why.'),
          miss('To memorize a spelling list.', 'This is not the point of the scenario.', 'Focus on society and rules.'),
        ],
        lesson: 'State-of-nature thought experiments help us ask why societies need shared rules.',
      },
      {
        chapter: 'Art, Beauty and Value',
        title: 'Subjective beauty',
        prompt: ({ name, friend }) => `${name} loves a song, but ${friend} dislikes it. What is the best conclusion?`,
        correct: 'People can reasonably experience beauty differently.',
        wrong: [
          miss('One person must be lying.', 'Different judgments do not prove dishonesty.', 'Taste can vary.'),
          miss('Music cannot have value.', 'Disagreement does not remove value.', 'Value can be debated.'),
          miss('Only the louder person is correct.', 'Volume is not a reason.', 'Use reasons, not force.'),
        ],
        lesson: 'Questions about beauty often involve both personal experience and shared reasons.',
      },
    ],
    5: [
      {
        chapter: 'Identity and the Self',
        title: 'What makes you you',
        prompt: ({ name }) => `${name} changes hairstyle, hobbies, and school. Which question best explores identity?`,
        correct: 'Which parts of a person can change while they remain the same person?',
        wrong: [
          miss('How many letters are in the name?', 'That is not about personal identity.', 'Ask what makes someone the same over time.'),
          miss('Can no person ever change?', 'People clearly can change.', 'The issue is identity through change.'),
          miss('Should everyone have the same hobby?', 'That ignores individuality.', 'Focus on selfhood.'),
        ],
        lesson: 'Identity questions ask what makes a person the same person over time despite change.',
      },
      {
        chapter: 'Society, Law and Justice',
        title: 'Unjust law',
        prompt: ({ friend }) => `A rule unfairly excludes ${friend} from a public place. What is the strongest response?`,
        correct: 'A law or rule can be questioned if it violates fairness and rights.',
        wrong: [
          miss('Every law is fair just because it is written.', 'Written rules can still be unjust.', 'Justice can be used to evaluate laws.'),
          miss('No one should ever obey any rule.', 'Some rules are fair and useful.', 'Critique does not mean rejecting all law.'),
          miss('Only quiet people deserve rights.', 'Rights do not depend on being quiet.', 'Human rights are broader.'),
        ],
        lesson: 'Civil disobedience and justice discussions ask whether laws can be morally wrong.',
      },
      {
        chapter: 'Technology and the Future',
        title: 'AI rights',
        prompt: ({ name }) => `${name} asks whether a very advanced robot should have rights. What must be considered first?`,
        correct: 'Whether it can have experiences, interests, or be harmed.',
        wrong: [
          miss('Whether it looks like a human.', 'Looking human is appearance; what matters for rights is what the robot can experience, not how it appears.', 'Rights questions concern moral status, not outward form.'),
          miss('Whether it is expensive to build or buy.', 'Cost is an economic question, not a moral one; expensive things do not automatically have rights.', 'Ask about capacities and possible harm, not price.'),
          miss('Whether it can solve hard problems quickly.', 'Being fast or clever is a capability question, but rights usually depend on whether something can suffer or have interests.', 'Consider consciousness or interests, not just skill.'),
        ],
        lesson: 'Technology ethics asks how new beings or tools should be treated and why.',
      },
      {
        chapter: 'Epistemology',
        title: 'Senses and certainty',
        prompt: ({ object }) => `An optical illusion makes a straight ${object} look bent. What does this show?`,
        correct: 'Our senses can be useful but sometimes misleading.',
        wrong: [
          miss('Seeing is always perfect proof.', 'The illusion shows sight can mislead.', 'Evidence may need checking.'),
          miss('We should never use our senses.', 'Senses are useful, just not infallible.', 'Good reasoning tests evidence.'),
          miss('Objects cannot be straight.', 'The object can be straight even if it appears bent.', 'Separate appearance from reality.'),
        ],
        lesson: 'Epistemology studies how we know things and what the limits of our evidence are.',
      },
      {
        chapter: 'Global Ethics',
        title: 'Far-away help',
        prompt: ({ name }) => `${name} can help a child nearby or donate to help a child far away. What is the key ethical question?`,
        correct: 'Does distance change our responsibility to help someone in need?',
        wrong: [
          miss('Should we only help people we have met in person?', 'That assumes distance ends responsibility without asking the question; the ethical question is whether it should.', 'Global ethics asks us to compare duties, not assume the answer.'),
          miss('Does helping nearby make far-away help wrong?', 'Helping one person does not by itself prove helping another is wrong; the two duties need comparison.', 'Ask how responsibilities are weighed, not whether one cancels the other.'),
          miss('Is it always better to give larger donations than smaller ones?', 'Donation size is a separate question from whether distance changes our duty to help.', 'Focus on the role of distance, not amount.'),
        ],
        lesson: 'Global ethics asks what responsibilities we have to people beyond our immediate community.',
      },
      {
        chapter: 'Identity and the Self',
        title: 'Nature and nurture',
        prompt: ({ friend }) => `${friend} becomes confident after joining a supportive club. What identity idea does this show?`,
        correct: 'Environment can shape how a person develops.',
        wrong: [
          miss('Where we grow up never affects how we develop.', 'The scenario shows the supportive club changing confidence; the environment is doing real work here.', 'Consider how nurture shapes identity.'),
          miss('Personality is fixed at birth and cannot be changed.', 'The scenario shows confidence developing later, which a fixed view cannot explain.', 'Compare nature and nurture as competing explanations.'),
          miss('Confidence comes only from biology, never from experience.', 'A biology-only view ignores the supportive club, which is the experience that changed things.', 'Stay with the identity concept and account for both factors.'),
        ],
        lesson: 'Nature-versus-nurture discussions ask how biology and environment shape who we become.',
      },
      {
        chapter: 'Society, Law and Justice',
        title: 'Restorative justice',
        prompt: ({ object }) => `A student damages a shared ${object}. Which response is most restorative?`,
        correct: 'They meet those affected, understand the harm, and help repair it.',
        wrong: [
          miss('They are punished but never learn who was harmed.', 'That may be retributive, not restorative.', 'Restorative justice focuses on repair.'),
          miss('Everyone ignores the damage.', 'Ignoring harm does not repair it.', 'Restoration requires action.'),
          miss('Another student repairs it secretly.', 'The person responsible does not face the harm.', 'Repair should include accountability.'),
        ],
        lesson: 'Restorative justice emphasizes repairing harm and rebuilding relationships.',
      },
      {
        chapter: 'Technology and the Future',
        title: 'Privacy trade-off',
        prompt: ({ name }) => `${name} says all private messages should be read to prevent danger. What is the main trade-off?`,
        correct: 'Security may increase, but privacy and freedom may decrease.',
        wrong: [
          miss('There is no possible downside.', 'Losing privacy is a serious downside.', 'Technology ethics weighs competing values.'),
          miss('Privacy and security are exactly the same thing.', 'They are related but distinct values.', 'Define each value.'),
          miss('Messages cannot affect safety.', 'Some messages may be relevant, but not all monitoring is justified.', 'Avoid extremes.'),
        ],
        lesson: 'Ethical technology decisions often balance privacy, security, and trust.',
      },
      {
        chapter: 'Epistemology',
        title: 'Scientific fact',
        prompt: ({ animal }) => `Which makes a claim about ${animal}s more scientific?`,
        correct: 'It can be tested with observations that others can check.',
        wrong: [
          miss('It is believed by one person only.', 'Belief alone is not scientific evidence.', 'Science needs testable support.'),
          miss('It cannot ever be checked.', 'Uncheckable claims are not strong scientific claims.', 'Look for testability.'),
          miss('It sounds mysterious.', 'Mystery is not evidence.', 'Use methods and observations.'),
        ],
        lesson: 'Scientific knowledge depends on testable claims, evidence, and repeatable checking.',
      },
      {
        chapter: 'Global Ethics',
        title: 'Resource ownership',
        prompt: ({ place }) => `A river near the ${place} serves many communities. What is the fairest question?`,
        correct: 'How can the water be shared without harming people downstream?',
        wrong: [
          miss('Can the first person take all the water forever?', 'That ignores others who depend on it.', 'Shared resources raise justice questions.'),
          miss('Does water matter only if it is sold?', 'Water has basic value beyond price.', 'Think about needs and rights.'),
          miss('Should downstream people be ignored?', 'Fairness includes affected people.', 'Consider all stakeholders.'),
        ],
        lesson: 'Global ethics includes questions about shared resources, need, and responsibility.',
      },
    ],
    6: [
      {
        chapter: 'Logic and Arguments',
        title: 'Premise and conclusion',
        prompt: ({ place }) => `Argument: "The ${place} is closed because the lights are off and the door is locked." What is the conclusion?`,
        correct: ({ place }) => `The ${place} is closed.`,
        wrong: [
          miss('The lights are off.', 'That is a reason, or premise.', 'The conclusion is what the reasons support.'),
          miss('The door is locked.', 'That is another premise.', 'Find the claim being argued for.'),
          miss('Because is a noun.', 'That is unrelated to the argument.', 'Analyze the reasoning structure.'),
        ],
        lesson: 'Arguments use premises as reasons to support a conclusion.',
      },
      {
        chapter: 'Logic and Arguments',
        title: 'Ad hominem',
        prompt: ({ name }) => `${name} says, "Your recycling idea is wrong because your shoes are ugly." Which fallacy is this?`,
        correct: 'Ad hominem',
        wrong: [
          miss('Strong evidence', 'The comment attacks the person, not the idea.', 'Evaluate the argument, not the person.'),
          miss('Correlation', 'No relationship between two variables is being discussed.', 'Name the fallacy pattern.'),
          miss('Careful definition', 'The statement does not define anything.', 'Look at what is being attacked.'),
        ],
        lesson: 'Ad hominem attacks the person instead of answering the argument.',
      },
      {
        chapter: 'Ethics and Action',
        title: 'Utilitarian reasoning',
        prompt: ({ place }) => `A plan for the ${place} helps thirty people but mildly inconveniences two. Which framework asks about total good for the greatest number?`,
        correct: 'Utilitarianism',
        wrong: [
          miss('Ad hominem', 'That is a fallacy, not an ethical framework.', 'Match the idea to consequences for many people.'),
          miss('Ethical egoism', 'Egoism focuses on what is good for the one person acting, not overall welfare.', 'Utilitarianism counts everyone affected.'),
          miss('Virtue ethics', 'Virtue ethics judges actions by character traits, not by totalling consequences.', 'Look for the framework that focuses on outcomes for many.'),
        ],
        lesson: 'Utilitarianism evaluates actions by their consequences for overall well-being.',
      },
      {
        chapter: 'Ethics and Action',
        title: 'Duty ethics',
        prompt: ({ friend }) => `${friend} says, "Even if lying helps me, I should tell the truth because honesty is my duty." Which framework is closest?`,
        correct: 'Deontology',
        wrong: [
          miss('Hedonism', 'Hedonism focuses on pleasure, not duty.', 'Look for rule-based reasoning.'),
          miss('Correlation', 'This is not about statistical relationship.', 'Identify the ethical framework.'),
          miss('Straw man', 'No argument is being misrepresented.', 'Duty points to deontology.'),
        ],
        lesson: 'Deontological ethics emphasizes duties and rules, not only outcomes.',
      },
      {
        chapter: 'Political Philosophy and the State',
        title: 'Social contract',
        prompt: ({ name }) => `${name} says people accept some rules so everyone can live more safely together. What idea is this?`,
        correct: 'The social contract',
        wrong: [
          miss('Divine right of kings', 'Divine right says rulers get authority from a deity, not from people agreeing to rules.', 'Social contract puts the source of authority in the people.'),
          miss('Anarchism', 'Anarchism rejects the idea of accepting government rules at all.', 'The statement is about accepting rules together, not rejecting them.'),
          miss('Ad hominem', 'No one is attacked personally.', 'Do not confuse logic fallacies with political ideas.'),
        ],
        lesson: 'Social contract theory asks why people accept government and shared rules.',
      },
      {
        chapter: 'Political Philosophy and the State',
        title: 'Freedom types',
        prompt: ({ friend }) => `${friend} is allowed to join a club but cannot afford the bus fare. Which idea is missing?`,
        correct: 'Positive freedom: having the resources to act',
        wrong: [
          miss('Negative freedom only: no one directly bans them', 'They are not banned, but they still lack practical ability.', 'Separate permission from resources.'),
          miss('Censorship', 'No speech is being restricted.', 'Use the correct political concept.'),
          miss('Meritocracy', 'The issue is access, not reward for skill.', 'Focus on freedom.'),
        ],
        lesson: 'Negative freedom concerns absence of interference; positive freedom concerns real ability and resources.',
      },
      {
        chapter: 'Philosophy of Mind and AI',
        title: 'Turing Test',
        prompt: ({ name }) => `${name} cannot tell whether chat replies come from a human or a computer. Which test is this closest to?`,
        correct: 'The Turing Test',
        wrong: [
          miss('The social contract', 'That is about government and rules, not whether a machine can imitate a person.', 'This question is about machine intelligence.'),
          miss('The trolley problem', 'That is an ethics dilemma about choosing whom to harm.', 'Match the AI thought experiment that focuses on conversation.'),
          miss('The Chinese Room argument', 'The Chinese Room argues a system can pass conversation tests without understanding; it does not define the test itself.', 'Use the test that asks whether a machine can convincingly imitate a person.'),
        ],
        lesson: 'The Turing Test asks whether a machine can imitate human conversation convincingly.',
      },
      {
        chapter: 'Philosophy of Mind and AI',
        title: 'Other minds',
        prompt: ({ friend }) => `Why is it hard to prove that ${friend} has feelings exactly like yours?`,
        correct: 'You can observe behavior, but you cannot directly experience their mind.',
        wrong: [
          miss('Because other people never behave.', 'People do behave; the issue is inner experience.', 'Separate observation from consciousness.'),
          miss('Because feelings are always visible as text.', 'Feelings are not directly visible like words on a page.', 'This is the problem of other minds.'),
          miss('Because a strong feeling is enough proof.', 'Proof and evidence are useful but limited here.', 'Think about what can be directly known.'),
        ],
        lesson: 'The problem of other minds asks how we know others have conscious experiences.',
      },
      {
        chapter: 'Meaning and the Good Life',
        title: 'Experience machine',
        prompt: ({ name }) => `${name} can enter a machine that creates perfect pleasure but no real relationships. What question does this raise?`,
        correct: 'Is pleasure alone enough for a good life?',
        wrong: [
          miss('Could the machine ever break down?', 'Whether the machine works is a technical question, not a question about a good life.', 'Ask about value and meaning, not reliability.'),
          miss('Is the machine cheaper than real life?', 'Cost is not the philosophical issue; the question is about what makes a life worth living.', 'Use the details about pleasure and real relationships.'),
          miss('Are simulated pleasures the same as real pleasures?', 'That sounds close, but the deeper question is whether pleasure alone is enough, not just whether it is real.', 'Look at the contrast with real relationships, not only with real feelings.'),
        ],
        lesson: 'The experience machine thought experiment tests whether happiness, reality, achievement, and relationships all matter.',
      },
      {
        chapter: 'Meaning and the Good Life',
        title: 'Created meaning',
        prompt: ({ friend }) => `${friend} says, "My life matters because of the choices and projects I commit to." Which idea is closest?`,
        correct: 'People can create meaning through choices.',
        wrong: [
          miss('Life can have no projects.', 'The statement is about projects creating meaning.', 'Identify the meaning claim.'),
          miss('Only pleasure matters.', 'The statement is about commitment, not just pleasure.', 'Distinguish hedonism from meaning-making.'),
          miss('Arguments need no reasons.', 'The statement gives a reason-like explanation.', 'Stay with the good-life topic.'),
        ],
        lesson: 'Some existentialist ideas emphasize creating meaning through choices and commitments.',
      },
    ],
  }

  return banks[year]
}

const naplanYear3Blueprints: Blueprint[] = [
  {
    chapter: 'Reading',
    title: 'Literal detail',
    prompt: ({ name, object, place }) => `Read: "${name} put the ${object} on the shelf before leaving the ${place}." What did ${name} put on the shelf?`,
    correct: ({ object }) => `The ${object}`,
    wrong: ({ place, animal, friend }) => [
      miss(`The ${place}`, 'That is where the action happened, not the item.', 'Answer the exact who/what/where question.'),
      miss(`The ${animal}`, 'The animal is not mentioned in the sentence.', 'Use only the text.'),
      miss(`${friend}`, 'The friend is not the object placed on the shelf.', 'Find the noun after "the".'),
    ],
    lesson: 'NAPLAN reading questions often ask for directly stated details from a short text.',
  },
  {
    chapter: 'Reading',
    title: 'Inference',
    prompt: ({ name }) => `${name} zipped a coat, looked at the grey clouds, and picked up an umbrella. What can you infer?`,
    correct: ({ name }) => `${name} thinks it may rain or be cold.`,
    wrong: ({ name }) => [
      miss(`${name} is going swimming.`, 'The clues point to weather protection, not swimming.', 'Use all the clues together.'),
      miss(`${name} lost the coat.`, 'The coat is being zipped, not lost.', 'Do not contradict the text.'),
      miss(`${name} dislikes umbrellas.`, 'Picking up an umbrella does not show dislike.', 'Infer only what the evidence supports.'),
    ],
    lesson: 'Inference means using clues in the text to work out an unstated idea.',
  },
  {
    chapter: 'Reading',
    title: 'Text feature',
    prompt: ({ text }) => `In a nonfiction ${text}, what does a caption usually do?`,
    correct: 'Explains a picture or diagram',
    wrong: [
      miss('Names the author only', 'Author names may appear elsewhere, but captions explain visuals.', 'Connect captions to images.'),
      miss('Ends every sentence', 'Punctuation does that, not captions.', 'Use text feature vocabulary.'),
      miss('Shows the price of every word', 'Captions do not price words.', 'Choose the real purpose.'),
    ],
    lesson: 'Text features such as headings, captions, and diagrams help readers find and understand information.',
  },
  {
    chapter: 'Writing',
    title: 'Narrative order',
    prompt: 'Which order best fits a simple narrative?',
    correct: 'Beginning, middle, end',
    wrong: [
      miss('End, end, end', 'A story needs development before the ending.', 'Use the basic story sequence.'),
      miss('Reasons, reasons, no opinion', 'That sounds more like poor persuasive writing.', 'Narratives tell events.'),
      miss('Title, caption, graph', 'Those are text features, not story structure.', 'Choose a narrative structure.'),
    ],
    lesson: 'A basic narrative has a beginning that sets up the story, a middle with events, and an ending.',
  },
  {
    chapter: 'Writing',
    title: 'Persuasive reason',
    prompt: ({ place }) => `Which sentence gives a clear persuasive reason for cleaning the ${place}?`,
    correct: ({ place }) => `We should clean the ${place} because everyone uses it.`,
    wrong: ({ place }) => [
      miss(`Clean the ${place}.`, 'This gives an opinion or command but no reason.', 'A persuasive answer should say why.'),
      miss(`The ${place} is a noun.`, 'That is grammar, not a persuasive reason.', 'Connect to the opinion.'),
      miss(`I went there yesterday.`, 'This does not explain why cleaning matters.', 'Use a reason that supports the claim.'),
    ],
    lesson: 'Persuasive writing states an opinion and supports it with reasons.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Homophone',
    prompt: ({ animal }) => `Choose the correct word: "The ${animal} is over ____."`,
    correct: 'there',
    wrong: [
      miss('their', 'Their shows belonging.', 'Use there for place.'),
      miss("they're", "They're means they are.", 'Test whether "they are" fits.'),
      miss('thare', 'This is not the standard spelling.', 'Use the correct homophone.'),
    ],
    lesson: 'Homophones sound alike but have different meanings and spellings.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Parts of speech',
    prompt: ({ object }) => `In the phrase "a shiny ${object}", what part of speech is "shiny"?`,
    correct: 'Adjective',
    wrong: [
      miss('Verb', 'Shiny does not show an action.', 'Adjectives describe nouns.'),
      miss('Noun', 'The object is the noun being described.', 'Ask what the word does.'),
      miss('Pronoun', 'A pronoun replaces a noun.', 'Shiny describes the noun.'),
    ],
    lesson: 'Adjectives describe nouns by telling what kind, which one, or how many.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Contraction apostrophe',
    prompt: 'Which word correctly means "do not"?',
    correct: "don't",
    wrong: [
      miss('dont', 'The apostrophe is missing.', 'A contraction uses an apostrophe for omitted letters.'),
      miss("do'nt", 'The apostrophe is in the wrong place.', 'Place the apostrophe where the missing letter would be.'),
      miss('doesnt', 'This means does not when spelled correctly, not do not.', 'Match the exact words.'),
    ],
    lesson: 'Apostrophes in contractions show where letters have been left out.',
  },
  {
    chapter: 'Numeracy',
    title: 'Place value',
    prompt: 'What is the value of the digit 4 in 472?',
    correct: '400',
    wrong: [
      miss('40', 'That would be the tens place.', 'The 4 is in the hundreds place.'),
      miss('4', 'That would be the ones place.', 'Use place value.'),
      miss('70', 'That is the value of the 7.', 'Match the digit being asked about.'),
    ],
    lesson: 'Place value tells how much a digit is worth based on its position.',
  },
  {
    chapter: 'Numeracy',
    title: 'Data reading',
    prompt: 'A class chart shows 6 votes for apples, 9 for bananas, and 4 for pears. Which fruit has the most votes?',
    correct: 'Bananas',
    wrong: [
      miss('Apples', 'Six is less than nine.', 'Compare the numbers on the chart.'),
      miss('Pears', 'Four is the smallest number.', 'Find the greatest count.'),
      miss('All are equal', 'The counts are different.', 'Read each value carefully.'),
    ],
    lesson: 'Data questions ask you to read and compare values in charts or tables.',
  },
]

const naplanYear5Blueprints: Blueprint[] = [
  {
    chapter: 'Reading',
    title: 'Author purpose',
    prompt: ({ place }) => `A text gives reasons why the ${place} should stay open late and asks readers to sign a petition. What is its purpose?`,
    correct: 'To persuade',
    wrong: [
      miss('To list random facts only', 'The text gives reasons and asks readers to act.', 'Look for persuasive features.'),
      miss('To tell a fantasy story', 'No fictional plot is described.', 'Match purpose to structure.'),
      miss('To explain a recipe', 'No steps for cooking appear.', 'Use evidence from the prompt.'),
    ],
    lesson: 'Persuasive texts try to convince readers to think or act in a certain way.',
  },
  {
    chapter: 'Reading',
    title: 'Visual text',
    prompt: 'A map key shows a blue square means "water tap." What should a reader use to find water taps on the map?',
    correct: 'Look for blue squares',
    wrong: [
      miss('Count all red circles', 'Red circles represent something else.', 'Use the key symbol exactly.'),
      miss('Use the picture without matching it to the map key.', 'The key explains the symbols.', 'Visual texts require reading symbols and labels.'),
      miss('Read only the title', 'The title will not locate each tap.', 'Use the map key.'),
    ],
    lesson: 'Maps, diagrams, and tables include visual information that must be interpreted alongside words.',
  },
  {
    chapter: 'Reading',
    title: 'Metaphor effect',
    prompt: ({ name }) => `A passage says, "${name}'s idea was a spark that lit the whole project." What does the metaphor suggest?`,
    correct: ({ name }) => `${name}'s idea started energy and action.`,
    wrong: ({ name }) => [
      miss(`${name} set the project on fire.`, 'The metaphor is not literal.', 'Find the figurative meaning.'),
      miss(`${name}'s idea ended the project.`, 'A spark lighting something suggests beginning, not ending.', 'Use the effect of the image.'),
      miss(`${name} disliked the project.`, 'The metaphor suggests positive energy.', 'Connect image to tone.'),
    ],
    lesson: 'Metaphors compare things directly to create meaning and effect.',
  },
  {
    chapter: 'Writing',
    title: 'Transition',
    prompt: ({ place }) => `Which transition best shows a different point in a persuasive paragraph about the ${place}?`,
    correct: 'However,',
    wrong: [
      miss('Also,', 'Also adds another similar idea; it does not signal a contrasting point.', 'Find a word that says "but here is a different view."'),
      miss('For example,', 'For example introduces an instance, not a contrasting point.', 'Choose a transition that signals contrast, not illustration.'),
      miss('Finally,', 'Finally signals the last idea in a sequence, not a contrasting one.', 'Use a word that switches direction in the argument.'),
    ],
    lesson: 'Transitions such as however, therefore, and for example guide readers through an argument.',
  },
  {
    chapter: 'Writing',
    title: 'Precise vocabulary',
    prompt: () => `Which sentence uses the most precise verb?`,
    correct: ({ animal }) => `The ${animal} darted under the fence.`,
    wrong: ({ animal }) => [
      miss(`The ${animal} went under the fence.`, 'Went is general and less vivid.', 'Precise verbs show exact action.'),
      miss(`The ${animal} did under the fence.`, 'This is not standard grammar.', 'Choose a clear verb.'),
      miss(`The ${animal} thing under the fence.`, 'Thing is not a verb here.', 'Use a word that shows action.'),
    ],
    lesson: 'Precise vocabulary makes writing clearer and more engaging.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Suffix spelling',
    prompt: 'Which word is spelled correctly?',
    correct: 'permission',
    wrong: [
      miss('permision', 'This is missing an s in the -ssion pattern.', 'Listen for the /shun/ ending and know common spellings.'),
      miss('permisshun', 'This is phonetic but not standard spelling.', 'Use standard suffix spelling.'),
      miss('permissian', 'The ending is not correct here.', 'Check the -sion/-ssion pattern.'),
    ],
    lesson: 'NAPLAN spelling often tests common suffix patterns such as -tion, -sion, and -ssion.',
  },
  {
    chapter: 'Language Conventions',
    title: 'Subject verb agreement',
    prompt: () => `Choose the correct sentence.`,
    correct: ({ object }) => `The boxes of ${object}s are heavy.`,
    wrong: ({ object }) => [
      miss(`The boxes of ${object}s is heavy.`, 'The subject boxes is plural.', 'Match the verb to the main subject.'),
      miss(`The box of ${object}s are heavy.`, 'The subject box is singular.', 'Do not be distracted by the noun after of.'),
      miss(`The boxes of ${object}s be heavy.`, 'Be is not the standard verb form here.', 'Use standard agreement.'),
    ],
    lesson: 'Subject-verb agreement depends on the main subject, not a nearby distracting noun.',
  },
  {
    chapter: 'Numeracy',
    title: 'Decimal money',
    prompt: 'A pen costs $2.35 and a notebook costs $4.20. How much do they cost altogether?',
    correct: '$6.55',
    wrong: [
      miss('$6.45', 'The cents have been added incorrectly.', 'Add dollars and cents carefully.'),
      miss('$2.85', 'This does not include both prices.', 'Add both amounts.'),
      miss('$655', 'The decimal point is missing.', 'Money uses dollars and cents.'),
    ],
    lesson: 'Financial mathematics requires careful place value with dollars and cents.',
  },
  {
    chapter: 'Numeracy',
    title: 'Area',
    prompt: 'A rectangle is 8 cm long and 5 cm wide. What is its area?',
    correct: '40 square cm',
    wrong: [
      miss('26 cm', 'That is the perimeter, not the area.', 'Area uses length times width.'),
      miss('13 square cm', 'That adds the sides.', 'Multiply for area.'),
      miss('40 cm', 'The number is right, but area uses square units.', 'Use square units for area.'),
    ],
    lesson: 'Area measures surface and is written in square units.',
  },
  {
    chapter: 'Numeracy',
    title: 'Probability',
    prompt: 'A bag has 1 red counter and 9 blue counters. Which statement is best?',
    correct: 'Picking blue is more likely than picking red.',
    wrong: [
      miss('Picking red is certain.', 'There is only one red counter, and blue is possible too.', 'Certain means guaranteed.'),
      miss('Picking red and blue are equally likely.', 'There are many more blue counters.', 'Compare counts.'),
      miss('Picking blue is impossible.', 'There are 9 blue counters.', 'Impossible means cannot happen.'),
    ],
    lesson: 'Probability compares how likely outcomes are based on the number of possible results.',
  },
]

const elevenPlusBlueprints: Blueprint[] = [
  {
    chapter: 'Verbal Reasoning',
    title: 'Synonym',
    prompt: 'Which word is closest in meaning to "cautious"?',
    correct: 'careful',
    wrong: [
      miss('reckless', 'Reckless is nearly the opposite.', 'Use precise vocabulary knowledge.'),
      miss('sleepy', 'Sleepy is unrelated.', 'Choose a meaning match.'),
      miss('noisy', 'Noisy describes sound, not care.', 'Think of someone avoiding risk.'),
    ],
    lesson: '11+ verbal reasoning often tests exact vocabulary meanings, not just familiar-looking words.',
  },
  {
    chapter: 'Verbal Reasoning',
    title: 'Antonym',
    prompt: 'Which word is the opposite of "scarce"?',
    correct: 'abundant',
    wrong: [
      miss('rare', 'Rare is similar to scarce.', 'Antonyms have opposite meanings.'),
      miss('hidden', 'Hidden is not the opposite of scarce.', 'Focus on quantity.'),
      miss('fragile', 'Fragile means easily broken.', 'Choose a word about plenty.'),
    ],
    lesson: 'Antonym questions require identifying the opposite meaning exactly.',
  },
  {
    chapter: 'Verbal Reasoning',
    title: 'Letter code',
    prompt: 'If A = 1, B = 2, C = 3, what is the code for BAD?',
    correct: '2-1-4',
    wrong: [
      miss('1-2-4', 'That codes ABD, not BAD.', 'Keep the letter order.'),
      miss('2-4-1', 'That puts A and D in the wrong places.', 'Convert each letter one by one.'),
      miss('3-1-4', 'B is 2, not 3.', 'Use alphabet positions.'),
    ],
    lesson: 'Alphabet code questions test sequence precision and letter-position mapping.',
  },
  {
    chapter: 'Verbal Reasoning',
    title: 'Logic clue',
    prompt: 'A is taller than B. C is shorter than B. Who is tallest?',
    correct: 'A',
    wrong: [
      miss('B', 'B is shorter than A.', 'Draw or order the clues.'),
      miss('C', 'C is shorter than B, so cannot be tallest.', 'Use both statements.'),
      miss('They are all the same height', 'The clues describe unequal heights.', 'Do not ignore comparative words.'),
    ],
    lesson: 'Verbal logic puzzles reward ordering clues carefully before answering.',
  },
  {
    chapter: 'Non-Verbal Reasoning',
    title: 'Shape sequence',
    prompt: 'A pattern goes circle, square, circle, square, __. What comes next?',
    correct: 'circle',
    wrong: [
      miss('triangle', 'Triangle has not appeared in the repeating pattern.', 'Find the repeating unit.'),
      miss('square', 'Square would come after circle, not after the second square.', 'The pattern alternates.'),
      miss('cube', 'The pattern uses 2D shapes.', 'Stay with the given sequence.'),
    ],
    lesson: 'Non-verbal sequence questions test the rule behind a visual pattern.',
  },
  {
    chapter: 'Non-Verbal Reasoning',
    title: 'Rotation',
    prompt: 'An arrow points up. After a quarter-turn clockwise, where does it point?',
    correct: 'right',
    wrong: [
      miss('left', 'Left is a quarter-turn anticlockwise from up.', 'Imagine the clock direction.'),
      miss('down', 'Down is a half-turn from up.', 'A quarter-turn is 90 degrees.'),
      miss('up', 'That would mean no turn.', 'Apply the rotation.'),
    ],
    lesson: 'Spatial reasoning often asks you to mentally rotate or reflect a shape.',
  },
  {
    chapter: 'Advanced Mathematics',
    title: 'Number properties',
    prompt: 'Which number is prime?',
    correct: '17',
    wrong: [
      miss('15', '15 has factors 3 and 5.', 'Prime numbers have exactly two factors.'),
      miss('21', '21 has factors 3 and 7.', 'Check divisibility.'),
      miss('1', '1 is not prime because it has only one factor.', 'A prime has exactly two positive factors.'),
    ],
    lesson: 'Prime-number questions require checking factors, not just choosing an odd number.',
  },
  {
    chapter: 'Advanced Mathematics',
    title: 'Sequence rule',
    prompt: 'What is the next number in 4, 7, 10, 13, __?',
    correct: '16',
    wrong: [
      miss('15', 'The pattern adds 3 each time.', 'Find the common difference.'),
      miss('17', 'That adds 4 at the end.', 'Keep the same rule.'),
      miss('20', 'That jumps too far.', 'Move one step only.'),
    ],
    lesson: '11+ sequences often use a repeated arithmetic rule.',
  },
  {
    chapter: 'English Comprehension and Grammar',
    title: 'Part of speech',
    prompt: 'In "The swift runner smiled", what part of speech is "swift"?',
    correct: 'adjective',
    wrong: [
      miss('verb', 'Swift describes the runner; it is not an action here.', 'Adjectives describe nouns.'),
      miss('preposition', 'Prepositions show relationships such as in or under.', 'Ask what job the word performs.'),
      miss('pronoun', 'Pronouns replace nouns.', 'Swift modifies runner.'),
    ],
    lesson: 'Grammar questions require identifying how a word functions in the sentence.',
  },
  {
    chapter: 'English Comprehension and Grammar',
    title: 'Literary device',
    prompt: 'Which sentence uses personification?',
    correct: 'The wind whispered through the trees.',
    wrong: [
      miss('The tree was tall.', 'This is description, not personification.', 'Personification gives human action to nonhuman things.'),
      miss('The wind was like ice.', 'This is a simile.', 'Look for human qualities.'),
      miss('The trees were green and brown.', 'This lists colors.', 'Find the nonhuman thing acting like a person.'),
    ],
    lesson: 'Personification gives human actions or qualities to something nonhuman.',
  },
]

const psleBlueprints: Blueprint[] = [
  {
    chapter: 'Mathematics: Heuristics and Problem Solving',
    title: 'Bar model ratio',
    prompt: 'Ali has 3 units of stickers and Mei has 5 units. Together they have 64 stickers. How many stickers does Mei have?',
    correct: '40',
    wrong: [
      miss('24', 'That is Ali’s 3-unit share.', 'There are 8 units total, so one unit is 8.'),
      miss('32', 'That splits the total equally, ignoring the ratio.', 'Use the ratio units.'),
      miss('56', 'That subtracts only one unit from the total.', 'Mei has 5 of the 8 units.'),
    ],
    lesson: 'The Singapore bar model turns ratio parts into equal units before finding the required share.',
  },
  {
    chapter: 'Mathematics: Heuristics and Problem Solving',
    title: 'Assumption method',
    prompt: 'There are chickens and cows with 10 heads and 28 legs altogether. How many cows are there?',
    correct: '4',
    wrong: [
      miss('6', 'Six cows and four chickens would make 32 legs.', 'Start by assuming all chickens, then add 2 extra legs for each cow.'),
      miss('5', 'Five cows and five chickens would make 30 legs.', 'Check the total legs.'),
      miss('2', 'Two cows and eight chickens would make 24 legs.', 'Use the leg difference.'),
    ],
    lesson: 'Assumption method problems compare a simple starting case with the extra amount needed.',
  },
  {
    chapter: 'Mathematics: Heuristics and Problem Solving',
    title: 'Working backwards',
    prompt: 'A number is doubled, then 6 is added, giving 30. What was the number?',
    correct: '12',
    wrong: [
      miss('18', 'That subtracts 6 but does not undo doubling.', 'Work backwards with inverse operations.'),
      miss('15', 'That halves 30 before undoing the added 6.', 'Undo the last operation first.'),
      miss('24', 'That adds instead of subtracting.', 'Reverse each step.'),
    ],
    lesson: 'Working backwards means undoing operations in reverse order.',
  },
  {
    chapter: 'Mathematics: Heuristics and Problem Solving',
    title: 'Pattern nth term',
    prompt: 'The pattern is 5, 9, 13, 17, ... What is the 6th term?',
    correct: '25',
    wrong: [
      miss('21', 'That is the 5th term.', 'Count terms carefully.'),
      miss('24', 'The pattern adds 4, not 3.', 'Find the common difference.'),
      miss('29', 'That is the 7th term.', 'Stop at the 6th term.'),
    ],
    lesson: 'Pattern questions require both the rule and the term number.',
  },
  {
    chapter: 'Science: Application and Process Skills',
    title: 'Variables',
    prompt: 'A plant experiment changes the amount of sunlight and measures plant height. What is the dependent variable?',
    correct: 'Plant height',
    wrong: [
      miss('Amount of sunlight', 'That is the independent variable being changed.', 'Dependent means measured result.'),
      miss('The type of ruler', 'That should be kept consistent, not measured as the outcome.', 'Identify what changes in response.'),
      miss('The plant pot color', 'This is not the measured outcome.', 'Use the experiment description.'),
    ],
    lesson: 'In experiments, the dependent variable is the outcome measured after changing the independent variable.',
  },
  {
    chapter: 'Science: Application and Process Skills',
    title: 'Control variable',
    prompt: 'In a fair test of different fertilisers, which should be kept the same?',
    correct: 'The type and starting size of the plants',
    wrong: [
      miss('The fertiliser type', 'That is the variable being tested.', 'Controls stay constant.'),
      miss('The final height only', 'Final height is measured, not controlled.', 'Keep starting conditions fair.'),
      miss('The conclusion', 'Conclusions come after data.', 'Control variables are parts of the setup.'),
    ],
    lesson: 'Control variables keep a test fair by making sure only the chosen variable changes.',
  },
  {
    chapter: 'Science: Application and Process Skills',
    title: 'Energy conversion',
    prompt: 'In a torch, a battery powers a bulb. Which energy change is most accurate?',
    correct: 'Chemical energy to electrical energy to light and heat',
    wrong: [
      miss('Light energy to chemical energy only', 'The battery starts with stored chemical energy.', 'Trace the path through the circuit.'),
      miss('Sound energy to wind energy', 'A torch does not mainly use sound or wind.', 'Use the device described.'),
      miss('Heat energy to food energy', 'That is not the torch pathway.', 'Identify each component.'),
    ],
    lesson: 'Energy-conversion questions ask you to trace energy from source to useful and waste outputs.',
  },
  {
    chapter: 'English: Language Use and Comprehension',
    title: 'Sentence synthesis',
    prompt: 'Combine without changing meaning: "It was raining. We continued the match."',
    correct: 'Although it was raining, we continued the match.',
    wrong: [
      miss('Because it was raining, we continued the match.', 'Because changes the relationship to cause.', 'Use a contrast connector.'),
      miss('It was raining, we continued the match.', 'This comma splice is not standard.', 'Use a proper connector.'),
      miss('We continued the match so it was raining.', 'This reverses the logic.', 'Keep the original meaning.'),
    ],
    lesson: 'Synthesis and transformation questions require preserving meaning while changing sentence structure.',
  },
  {
    chapter: 'English: Language Use and Comprehension',
    title: 'Vocabulary cloze',
    prompt: 'Choose the most precise word: "The scientist examined the results ____ before drawing a conclusion."',
    correct: 'carefully',
    wrong: [
      miss('carelessly', 'That means without enough care, the opposite of what a scientist should do.', 'Use context and precision.'),
      miss('loudly', 'Volume does not fit examining results.', 'Choose a word about method.'),
      miss('brightly', 'Brightness does not describe examining results well.', 'Use the adverb that fits the action.'),
    ],
    lesson: 'Vocabulary cloze questions test the most precise word for context, not just a grammatical word.',
  },
  {
    chapter: 'English: Language Use and Comprehension',
    title: 'Visual text',
    prompt: 'A flyer says "Free entry before 10 a.m.; ticket required after 10 a.m." What can a reader infer?',
    correct: 'A visitor arriving at 10:30 a.m. needs a ticket.',
    wrong: [
      miss('Entry is free all day.', 'The flyer limits free entry to before 10 a.m.', 'Read conditions carefully.'),
      miss('No one may enter before 10 a.m.', 'The flyer says entry is free before 10 a.m.', 'Do not reverse the condition.'),
      miss('Tickets are required only before 10 a.m.', 'The requirement is after 10 a.m.', 'Track time words exactly.'),
    ],
    lesson: 'Visual-text comprehension often depends on reading conditions, times, and implied consequences accurately.',
  },
]

const codingBlueprints: Blueprint[] = [
  {
    chapter: 'Algorithms and Sequences',
    title: 'Algorithm meaning',
    prompt: ({ name }) => `${name} writes steps for brushing teeth in order. What is this list of steps called?`,
    correct: 'An algorithm',
    wrong: [
      miss('A bug', 'A bug is a mistake in instructions.', 'An algorithm is the step-by-step plan.'),
      miss('A password', 'A password is used for access, not a list of steps.', 'Use coding vocabulary.'),
      miss('A screen', 'A screen displays information.', 'Name the instructions.'),
    ],
    lesson: 'An algorithm is a clear set of step-by-step instructions for completing a task.',
  },
  {
    chapter: 'Algorithms and Sequences',
    title: 'Correct order',
    prompt: 'Which step should come first when making a jam sandwich?',
    correct: 'Get the bread.',
    wrong: [
      miss('Eat the sandwich.', 'Eating comes after making it.', 'Put instructions in useful order.'),
      miss('Put the plate away before using it.', 'You usually need the plate during the task.', 'Think about sequence.'),
      miss('Close the lunchbox after nothing is inside.', 'That skips the making steps.', 'Start with required materials.'),
    ],
    lesson: 'Computers and people need instructions in the right sequence.',
  },
  {
    chapter: 'Algorithms and Sequences',
    title: 'Precise instruction',
    prompt: ({ friend }) => `Which instruction is clearest for helping ${friend} move on a grid?`,
    correct: 'Move forward two squares, then turn left.',
    wrong: [
      miss('Go over there.', 'This is too vague for a computer or grid robot.', 'Use exact steps.'),
      miss('Do the thing.', 'This does not say what action to take.', 'Instructions must be precise.'),
      miss('Move somehow.', 'Somehow gives no clear direction.', 'Say the movement and amount.'),
    ],
    lesson: 'Computers follow exact instructions, so algorithms must be precise.',
  },
  {
    chapter: 'Debugging',
    title: 'Bug meaning',
    prompt: 'In coding, what is a bug?',
    correct: 'A mistake in the instructions',
    wrong: [
      miss('Only an insect on a desk', 'In coding, bug has a special meaning that came from a real insect story but now means an error in instructions.', 'Use the computing definition, not the everyday word.'),
      miss('A finished program with no problems', 'A bug means something is wrong; a program with no bugs is the opposite.', 'Debugging fixes mistakes, so a bug must be a mistake.'),
      miss('A special command that makes a program faster', 'Bugs do not speed up a program; they cause unwanted behaviour.', 'Choose the term that names a problem, not a feature.'),
    ],
    lesson: 'A bug is an error that makes instructions behave differently from what was intended.',
  },
  {
    chapter: 'Debugging',
    title: 'Find the error',
    prompt: 'Steps: 1. Put socks on. 2. Put shoes on. 3. Tie shoes. Which change fixes the sequence if step 2 says "put shoes on before socks"?',
    correct: 'Swap the sock and shoe steps.',
    wrong: [
      miss('Tie shoes before wearing them.', 'You cannot tie shoes usefully before putting them on.', 'Debug by finding the wrong order, not adding a new bug.'),
      miss('Remove the sock step from the list.', 'Deleting socks avoids the problem instead of fixing the order; you still need socks first.', 'Fix the order of the instructions, not the whole task.'),
      miss('Repeat step 2 twice in a row.', 'Repeating the broken step does not put it in the right order.', 'Make the smallest useful correction that fixes the sequence.'),
    ],
    lesson: 'Debugging means finding the instruction that causes the problem and changing it.',
  },
  {
    chapter: 'Loops and Patterns',
    title: 'Loop meaning',
    prompt: 'Instead of writing "clap, clap, clap," which instruction uses a loop?',
    correct: 'Repeat clap 3 times.',
    wrong: [
      miss('Clap zero times.', 'That does not match three claps.', 'A loop repeats an action the needed number of times.'),
      miss('Jump once.', 'That changes the action.', 'Keep the same repeated action.'),
      miss('Stop before clapping.', 'That prevents the repeated action.', 'Use repeat.'),
    ],
    lesson: 'A loop lets us repeat an instruction without writing it again and again.',
  },
  {
    chapter: 'Loops and Patterns',
    title: 'Pattern repeat',
    prompt: 'The pattern red, blue, red, blue, red, blue can be described as:',
    correct: 'Repeat red, blue three times.',
    wrong: [
      miss('Repeat red only three times.', 'That misses blue.', 'Find the repeated unit.'),
      miss('Repeat blue, red once.', 'That gives only two colors and starts differently.', 'Match the whole pattern.'),
      miss('Never repeat anything.', 'The pattern clearly repeats.', 'Look for the loop.'),
    ],
    lesson: 'Patterns can often be expressed as loops using the repeated unit.',
  },
  {
    chapter: 'Logic and Prediction',
    title: 'If then',
    prompt: 'Rule: If it is raining, then take an umbrella. It is raining. What should happen?',
    correct: 'Take an umbrella.',
    wrong: [
      miss('Take sunglasses because it is sunny outside.', 'The condition tells us it is raining, not sunny, so the umbrella rule applies.', 'Apply the if/then rule using the actual condition stated.'),
      miss('Do nothing because the rule has not been triggered.', 'The condition "it is raining" matches, so the rule has been triggered.', 'Use the stated condition.'),
      miss('Take an umbrella only if it is also windy.', 'The rule does not require wind, only rain.', 'Apply the action exactly as stated when the condition is met.'),
    ],
    lesson: 'If/then logic tells what action should happen when a condition is true.',
  },
  {
    chapter: 'Logic and Prediction',
    title: 'True false',
    prompt: 'A light switch is ON. Which statement is true?',
    correct: 'The switch is not OFF.',
    wrong: [
      miss('The switch is OFF.', 'ON and OFF are opposite states; the prompt says ON.', 'Binary choices have two clear states; pick the one that matches.'),
      miss('The switch is both ON and OFF at the same time.', 'In simple binary logic a switch is in one state, not both.', 'Use the single state given in the prompt.'),
      miss('The switch state cannot be known yet.', 'The state is given directly in the prompt: it is ON.', 'Read the stated condition and choose what must follow.'),
    ],
    lesson: 'Computers often use simple true/false or on/off states.',
  },
  {
    chapter: 'Stretch: Decomposition',
    title: 'Break into parts',
    prompt: ({ name }) => `${name} wants to tidy a messy desk. Which plan uses decomposition?`,
    correct: 'Sort books, collect pencils, throw away scraps, then wipe the desk.',
    wrong: [
      miss('Say "tidy everything" with no smaller steps.', 'That is too broad to guide action.', 'Decomposition breaks a big task into parts.'),
      miss('Do nothing and hope it tidies itself.', 'No task is broken down or completed.', 'Choose actionable subtasks.'),
      miss('Only count the desk legs.', 'That does not solve the tidy task.', 'Subtasks should support the goal.'),
    ],
    lesson: 'Decomposition means breaking a large task into smaller steps that are easier to solve.',
  },
]

export const wordBuilders = buildTrack(410001, 'Primary', wordBuilderBlueprints)
export const colWordBuilders = buildTrack(410101, 'Primary', wordBuilderBlueprints)
export const col4thGradeReadingAndVocab = buildTrack(410201, 'Primary', grade4ReadingBlueprints)
export const col5thGradeReadingAndVocab = buildTrack(410301, 'Primary', grade5ReadingBlueprints)
export const col6thGradeReadingAndVocab = buildTrack(410401, 'Primary', grade6ReadingBlueprints)
export const philosophyYear1 = buildTrack(410501, 'Primary', philosophyBlueprints(1))
export const philosophyYear2 = buildTrack(410601, 'Primary', philosophyBlueprints(2))
export const philosophyYear3 = buildTrack(410701, 'Primary', philosophyBlueprints(3))
export const philosophyYear4 = buildTrack(410801, 'Primary', philosophyBlueprints(4))
export const philosophyYear5 = buildTrack(410901, 'Primary', philosophyBlueprints(5))
export const philosophyYear6 = buildTrack(411001, 'Primary', philosophyBlueprints(6))
export const naplanYear3 = buildTrack(411101, 'Primary', naplanYear3Blueprints)
export const naplanYear5 = buildTrack(411201, 'Primary', naplanYear5Blueprints)
export const elevenPlus = buildTrack(411301, 'Primary', elevenPlusBlueprints)
export const pslePrep = buildTrack(411401, 'Primary', psleBlueprints)
export const codingBasics = buildTrack(411501, 'Software', codingBlueprints)
export const colCodingBasics = buildTrack(411601, 'Software', codingBlueprints)

export const primaryGeneratedHumanitiesExamQuestionsByTrack = {
  wordBuilders,
  'col-word-builders': colWordBuilders,
  'col-4th-grade-reading-and-vocab': col4thGradeReadingAndVocab,
  'col-5th-grade-reading-and-vocab': col5thGradeReadingAndVocab,
  'col-6th-grade-reading-and-vocab': col6thGradeReadingAndVocab,
  philosophyYear1,
  philosophyYear2,
  philosophyYear3,
  philosophyYear4,
  philosophyYear5,
  philosophyYear6,
  naplanYear3,
  naplanYear5,
  elevenPlus,
  pslePrep,
  codingBasics,
  'col-coding-basics': colCodingBasics,
} satisfies Record<string, Question[]>
