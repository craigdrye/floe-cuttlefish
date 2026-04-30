import type { Question } from './types'
import {
  makeSimpleQuestion,
  makeQuestionBank,
} from './base'
import {
  makeCol3rdGradeMathQuiz,
  makeCol4thGradeMathQuiz,
  makeCol5thGradeMathQuiz,
  makeCol6thGradeMathQuiz,
} from './primaryBuilders'
import {
  makeIndiaClass1MathQuiz,
  makeIndiaClass2MathQuiz,
  makeEurekaMathFoundations38Quiz,
  makeEurekaMath38Quiz,
} from './colGapBuilders'

export function buildPrimaryQuestionCatalog(): Record<string, Question[]> {
  return {
  'col-class-1-math': makeIndiaClass1MathQuiz(),
  'col-class-2-math': makeIndiaClass2MathQuiz(),
  'col-class-3-math': makeCol3rdGradeMathQuiz(),
  'col-class-4-math': makeCol4thGradeMathQuiz(),
  'col-class-5-math': makeCol5thGradeMathQuiz(),
  'col-class-6-math': makeCol6thGradeMathQuiz(),
  'col-3rd-grade-math': makeCol3rdGradeMathQuiz(),
  'col-4th-grade-math': makeCol4thGradeMathQuiz(),
  'col-5th-grade-math': makeCol5thGradeMathQuiz(),
  'col-6th-grade-math': makeCol6thGradeMathQuiz(),
  'col-eureka-math-foundations-3rd-8th-grade': makeEurekaMathFoundations38Quiz(),
  'col-eureka-math-3rd-8th-grade': makeEurekaMath38Quiz(),
  primary: [
    makeSimpleQuestion(12001, 'Primary', 'Number Reef', 'Friendly fractions',
      'Which fraction is the largest?',
      '3/4',
      [
        ['1/2', 'One half is smaller than three quarters.', 'Think of a pizza: 3/4 means more slices than 1/2.'],
        ['2/5', 'Two fifths is less than one half.', 'Use a common denominator or decimal to compare quickly.'],
        ['1/3', 'One third is smaller than one half and much smaller than three quarters.', 'Bigger denominator means smaller pieces when the numerator is the same.'],
      ]),
    makeSimpleQuestion(12002, 'Primary', 'Logic Lagoon', 'Pattern step',
      'What comes next: 2, 4, 8, 16, ?',
      '32',
      [
        ['20', 'This adds 4, but the sequence is doubling each time.', 'Check whether each step uses the same rule.'],
        ['24', 'This mixes different rules and breaks the doubling pattern.', 'Multiply by 2 from one term to the next.'],
        ['30', '30 is close to 32 but does not match the rule.', 'Use exact operations, not rough estimates.'],
      ]),
    makeSimpleQuestion(12003, 'Primary', 'Word Dock', 'Reading detail',
      'A story says: "Mia packed a coat because the sky was dark and windy." Why did Mia pack a coat?',
      'She expected cold or bad weather',
      [
        ['She wanted to swim', 'Dark, windy weather does not suggest swimming.', 'Use clues from the sentence.'],
        ['She forgot her shoes', 'The sentence only explains coat choice.', 'Answer the exact question asked.'],
        ['She bought a new coat yesterday', 'That detail is not in the sentence.', 'Do not invent details that are not provided.'],
      ]),
    makeSimpleQuestion(12004, 'Primary', 'Curiosity Cove', 'Simple science',
      'Which is an example of evaporation?',
      'A puddle slowly disappearing on a sunny day',
      [
        ['Ice turning into water', 'That is melting, not evaporation.', 'Evaporation is liquid to gas.'],
        ['Water freezing into ice', 'That is freezing, not evaporation.', 'Look for water turning into vapor.'],
        ['Rain falling from clouds', 'That is precipitation.', 'Evaporation happens before clouds form.'],
      ]),
  ],
  primaryStorybook: makeQuestionBank('Primary', [
    { id: 12101, chapter: 'Storybook Dock', title: 'Main idea', prompt: 'What is the main idea of a short story?', correct: 'What the story is mostly about', wrong: [['The color of the book cover', 'The cover is not the same as the story idea.', 'Focus on the central point of the text.'], ['The name of every side character only', 'Names are details, not the main idea.', 'Main idea is broader than one detail.'], ['How many pages the story has', 'Length does not tell you the main idea.', 'Think about the biggest message or focus.']] },
    { id: 12102, chapter: 'Storybook Reef', title: 'Character feeling', prompt: 'If a character is crying and hiding, they are most likely:', correct: 'Upset or scared', wrong: [['Ready for lunch', 'Nothing in the clue suggests hunger.', 'Use the emotional clues in the action.'], ['Winning a race', 'Crying and hiding do not suggest victory.', 'Match actions to likely feelings.'], ['Building a robot', 'That is unrelated to the clue.', 'Answer from the evidence given.']] },
    { id: 12103, chapter: 'Storybook Cove', title: 'Beginning middle end', prompt: 'Why do stories often have a beginning, middle, and end?', correct: 'To help events happen in an understandable order', wrong: [['To confuse the reader', 'That is not the purpose of structure.', 'Story structure helps readers follow events.'], ['So only three sentences are needed', 'Story structure is not about sentence count.', 'Think order and clarity, not length.'], ['Because every story must rhyme', 'Rhyme is not required for story structure.', 'Beginning-middle-end is about sequence.']] },
    { id: 12104, chapter: 'Storybook Lagoon', title: 'Prediction clue', prompt: 'If dark clouds gather in a story, what is a reasonable prediction?', correct: 'It may rain soon', wrong: [['The moon will explode', 'That prediction does not follow the clue.', 'Good predictions use story evidence.'], ['Everyone forgets their name', 'That is unrelated to clouds.', 'Stay close to the information you have.'], ['The book is over immediately', 'Clouds do not directly imply the story ends.', 'Choose the most supported next event.']] },
  ]),
  primaryNature: makeQuestionBank('Primary', [
    { id: 12201, chapter: 'Nature Dock', title: 'Plant needs', prompt: 'Which do plants need to grow?', correct: 'Water and sunlight', wrong: [['Only video games', 'Games do not help plants grow.', 'Think basic living needs.'], ['Just paint and glue', 'Those are art supplies, not growth needs.', 'Plants need natural resources.'], ['Only moonlight at noon', 'That does not describe a normal growth need.', 'Use the standard plant basics.']] },
    { id: 12202, chapter: 'Nature Reef', title: 'Animal group', prompt: 'Which animal is a mammal?', correct: 'A dolphin', wrong: [['A goldfish', 'Fish are not mammals.', 'Mammals breathe air and feed milk to babies.'], ['A lizard', 'Lizards are reptiles.', 'Separate mammals from reptiles and fish.'], ['A frog', 'Frogs are amphibians.', 'Use the animal group clues.']] },
    { id: 12203, chapter: 'Nature Cove', title: 'Season change', prompt: 'Which season is often linked to leaves falling from trees?', correct: 'Autumn', wrong: [['Spring', 'Spring is more associated with new growth.', 'Think about the usual yearly pattern.'], ['Summer', 'Summer is not the classic leaf-fall season.', 'Match the clue to the season.'], ['Every season equally', 'Leaf fall is much more linked to one season.', 'Choose the best fit, not the broadest one.']] },
    { id: 12204, chapter: 'Nature Lagoon', title: 'Habitat match', prompt: 'Where does a camel live best?', correct: 'In a desert habitat', wrong: [['At the bottom of the ocean', 'Camels are not sea animals.', 'Match the animal to its environment.'], ['In a freezer', 'Extreme cold is not a camel habitat.', 'Camels fit hot, dry regions.'], ['Inside a volcano', 'That is not a normal animal habitat.', 'Use the desert clue.']] },
  ]),
  primaryShapes: makeQuestionBank('Primary', [
    { id: 12301, chapter: 'Shape Dock', title: 'Triangle sides', prompt: 'How many sides does a triangle have?', correct: '3', wrong: [['2', 'A shape with 2 sides would not be a triangle.', 'The name tri- helps here.'], ['4', 'Four sides is a quadrilateral, not a triangle.', 'Count the edges carefully.'], ['5', 'Five sides is a pentagon.', 'Match the name to the side count.']] },
    { id: 12302, chapter: 'Shape Reef', title: 'Rectangle fact', prompt: 'Which is true about a rectangle?', correct: 'It has 4 sides and 4 right angles', wrong: [['It always has 3 sides', 'That describes a triangle, not a rectangle.', 'Rectangles are four-sided shapes.'], ['It is always a circle', 'Circles have no sides.', 'Keep shape families separate.'], ['It must be purple', 'Color does not define a rectangle.', 'Use geometry facts, not appearance.']] },
    { id: 12303, chapter: 'Shape Cove', title: 'Sphere clue', prompt: 'Which object is closest to a sphere shape?', correct: 'A basketball', wrong: [['A ruler', 'A ruler is long and flat, not ball-shaped.', 'Look for a round 3D object.'], ['A book', 'A book is box-like.', 'Sphere means round all around.'], ['A paperclip', 'A paperclip is not a sphere.', 'Choose the object shaped like a ball.']] },
    { id: 12304, chapter: 'Shape Lagoon', title: 'Pattern blocks', prompt: 'What helps you solve a shape pattern?', correct: 'Look for what changes and what stays the same', wrong: [['Guess without looking', 'Patterns reward noticing structure.', 'Check the rule before answering.'], ['Count only the colors and ignore shape', 'The rule may involve more than one feature.', 'Use all useful clues.'], ['Cover the pattern with your hand', 'Hiding the evidence makes it harder.', 'Observe before you answer.']] },
  ]),
  primaryTimesTables: makeQuestionBank('Primary', [
    { id: 12401, chapter: 'Times Table Dock', title: 'Two times', prompt: 'What is 2 x 6?', correct: '12', wrong: [['8', 'That is too small.', 'Two groups of six make twelve.'], ['10', 'That misses one pair.', 'Count 6 + 6.'], ['14', 'That is too large.', 'Multiply exactly, not approximately.']] },
    { id: 12402, chapter: 'Times Table Reef', title: 'Five times', prompt: 'What is 5 x 4?', correct: '20', wrong: [['9', 'That adds 5 and 4 instead of multiplying.', 'Use groups, not just addition of the two numbers.'], ['15', 'That is one group short.', 'Count 5, 10, 15, 20.'], ['25', 'That would be 5 x 5.', 'Keep track of the second factor.']] },
    { id: 12403, chapter: 'Times Table Cove', title: 'Ten times', prompt: 'What is 10 x 7?', correct: '70', wrong: [['17', 'That adds instead of multiplies.', 'Ten times shifts to tens.'], ['700', 'That adds an extra zero.', 'Use one zero for multiplication by ten.'], ['60', 'That is one ten too few.', 'Count seven tens.']] },
    { id: 12404, chapter: 'Times Table Lagoon', title: 'Three times', prompt: 'What is 3 x 3?', correct: '9', wrong: [['6', 'That is 3 + 3, not 3 x 3.', 'Three groups of three make nine.'], ['12', 'That is too high.', 'Count 3, 6, 9.'], ['3', 'That ignores repeated groups.', 'Multiplication means more than one group.']] },
  ]),
  primaryWordBuilders: makeQuestionBank('Primary', [
    { id: 12501, chapter: 'Word Dock', title: 'Synonym clue', prompt: 'Which word means nearly the same as "happy"?', correct: 'Glad', wrong: [['Tiny', 'That describes size, not feeling.', 'Stay in the emotion category.'], ['Heavy', 'That describes weight, not mood.', 'Match the meaning of the word.'], ['Sleepy', 'That is a different feeling.', 'A synonym should be close in meaning.']] },
    { id: 12502, chapter: 'Word Reef', title: 'Opposite word', prompt: 'What is the opposite of "hot"?', correct: 'Cold', wrong: [['Fast', 'That is about speed, not temperature.', 'Opposites should match the same idea.'], ['Tall', 'That is about height, not temperature.', 'Stay in the same category.'], ['Loud', 'That is about sound.', 'Find the temperature opposite.']] },
    { id: 12503, chapter: 'Word Cove', title: 'Sentence meaning', prompt: 'Which sentence uses the word "bark" to mean a dog sound?', correct: 'The dog began to bark at the mail carrier', wrong: [['The tree bark felt rough', 'That uses bark to mean tree covering.', 'Same word, different meaning.'], ['She barked the canoe by the lake', 'That is not standard usage here.', 'Pick the sentence with the dog clue.'], ['We painted the bark blue', 'That refers to tree bark again.', 'Context gives the meaning.']] },
    { id: 12504, chapter: 'Word Lagoon', title: 'Missing letter', prompt: 'Which word is spelled correctly?', correct: 'Because', wrong: [['Beacause', 'That adds an extra vowel in the wrong place.', 'Look carefully at common tricky spellings.'], ['Becuse', 'That leaves out needed letters.', 'Check the full word shape.'], ['Bekause', 'That uses the wrong consonant pattern.', 'Use the standard spelling.']] },
  ]),
  primaryWorldExplorer: makeQuestionBank('Primary', [
    { id: 12601, chapter: 'World Dock', title: 'Map symbol', prompt: 'What does a map help you do?', correct: 'Find places and understand where they are', wrong: [['Bake a cake', 'Maps are not cooking tools.', 'Think directions and place.'], ['Measure only the weather', 'Maps can show weather, but their main job is place and location.', 'Use the broad purpose first.'], ['Turn pencils into crayons', 'That is unrelated.', 'Maps help with location.']] },
    { id: 12602, chapter: 'World Reef', title: 'Continent idea', prompt: 'Which is a continent?', correct: 'Africa', wrong: [['Nile', 'The Nile is a river.', 'Separate landmasses from features on them.'], ['Atlantic', 'The Atlantic is an ocean.', 'Continents are large land areas.'], ['Sahara', 'The Sahara is a desert region.', 'Choose the continent name.']] },
    { id: 12603, chapter: 'World Cove', title: 'Ocean clue', prompt: 'Most of Earth is covered by:', correct: 'Water', wrong: [['Only desert', 'Deserts cover far less than oceans.', 'Think about the planet from space.'], ['Only mountains', 'Mountains cover some land, not most of Earth.', 'Water covers the majority.'], ['Roads', 'Roads are human-built and limited.', 'Use the largest natural surface.']] },
    { id: 12604, chapter: 'World Lagoon', title: 'Direction word', prompt: 'If you move toward the top of a standard map, which direction are you usually moving?', correct: 'North', wrong: [['South', 'South is usually downward on standard maps.', 'Use the usual map orientation.'], ['West', 'West is usually to the left.', 'Top is north on standard maps.'], ['Underground', 'That is not a map direction.', 'Choose a compass direction.']] },
  ]),
  primaryArtStudio: makeQuestionBank('Primary', [
    { id: 12701, chapter: 'Art Dock', title: 'Primary colors', prompt: 'Which is a primary color?', correct: 'Red', wrong: [['Pink', 'Pink is usually a mix rather than a primary color.', 'Primary colors are the starting set.'], ['Brown', 'Brown is a mixed color.', 'Pick from the basic color set.'], ['Silver', 'Silver is not one of the basic paint primaries.', 'Use the classic primary list.']] },
    { id: 12702, chapter: 'Art Reef', title: 'Warm color', prompt: 'Which color is usually considered warm?', correct: 'Orange', wrong: [['Blue', 'Blue is usually considered cool.', 'Warm colors feel sun-like or fiery.'], ['Purple ice', 'That is not the standard warm example.', 'Choose a classic warm tone.'], ['Teal', 'Teal is usually cooler in feel.', 'Orange sits in the warm family.']] },
    { id: 12703, chapter: 'Art Cove', title: 'Pattern use', prompt: 'What is a pattern in art?', correct: 'A repeated visual design', wrong: [['A color that can never be used twice', 'Patterns often repeat by definition.', 'Look for repetition.'], ['Only a drawing of one eye', 'That is too narrow.', 'Pattern is broader than one object.'], ['A broken pencil', 'That is not an art principle.', 'Use the visual-design meaning.']] },
    { id: 12704, chapter: 'Art Lagoon', title: 'Mixing colors', prompt: 'What do blue and yellow usually make when mixed as paint?', correct: 'Green', wrong: [['Purple', 'Purple usually comes from red and blue.', 'Think common paint mixing.'], ['Orange', 'Orange usually comes from red and yellow.', 'Use the standard color wheel idea.'], ['Black', 'Those two do not usually make black.', 'Blue plus yellow gives green.']] },
  ]),
  primaryMusicPatterns: makeQuestionBank('Primary', [
    { id: 12801, chapter: 'Music Dock', title: 'Beat clue', prompt: 'A beat in music is the steady:', correct: 'Pulse you can tap along with', wrong: [['Color of the instrument', 'Beat is about time, not color.', 'Think rhythm and pulse.'], ['Name of the singer only', 'Beat is part of the music itself.', 'Stay with timing.'], ['Shape of a trumpet', 'That is unrelated to rhythm.', 'Beat is what you count.']] },
    { id: 12802, chapter: 'Music Reef', title: 'Loud and soft', prompt: 'If music gets softer, it is becoming:', correct: 'Quieter', wrong: [['Faster only', 'Volume and speed are different.', 'This clue is about sound level.'], ['Longer only', 'Length and loudness are different.', 'Use the volume idea.'], ['Redder', 'Color is unrelated here.', 'Quieter is the direct match.']] },
    { id: 12803, chapter: 'Music Cove', title: 'Rhythm pattern', prompt: 'What helps you follow a rhythm pattern?', correct: 'Listening for repeated timing', wrong: [['Closing your ears', 'That removes the clue you need.', 'Rhythm is heard in timing patterns.'], ['Ignoring every repeat', 'Repeats help reveal the pattern.', 'Patterns become clearer through repetition.'], ['Counting colors instead of sounds', 'Rhythm is not a color pattern.', 'Use timing cues.']] },
    { id: 12804, chapter: 'Music Lagoon', title: 'Instrument family', prompt: 'Which is a percussion instrument?', correct: 'A drum', wrong: [['A bookmark', 'That is not an instrument.', 'Percussion instruments are struck or shaken.'], ['A cloud', 'That is not an instrument.', 'Choose the object used to make rhythm.'], ['A pencil case', 'That is not the intended music tool.', 'A drum is a classic percussion example.']] },
  ]),
  primaryCoding: makeQuestionBank('Primary', [
    { id: 12901, chapter: 'Coding Dock', title: 'Instruction idea', prompt: 'A computer program is a set of:', correct: 'Instructions', wrong: [['Clouds only', 'Programs are not weather.', 'Computers follow step-by-step directions.'], ['Random guesses', 'Programs are designed logic, not guesses.', 'Think commands and steps.'], ['Sandwiches', 'That is unrelated.', 'Use the instruction idea.']] },
    { id: 12902, chapter: 'Coding Reef', title: 'Bug meaning', prompt: 'In coding, a bug is usually:', correct: 'A mistake in the program', wrong: [['A pet you feed', 'That is a literal bug, not the coding meaning.', 'Use the computer-science meaning.'], ['A type of keyboard color', 'That is unrelated.', 'A bug is an error or problem.'], ['A perfect answer', 'A bug means something went wrong.', 'Think mistake, not success.']] },
    { id: 12903, chapter: 'Coding Cove', title: 'Loop idea', prompt: 'A loop helps a program:', correct: 'Repeat steps', wrong: [['Forget every step', 'Loops are for repetition, not erasing.', 'Think do it again.'], ['Turn into paper', 'That is unrelated.', 'Loops repeat instructions.'], ['Only work on Sundays', 'That is not what loops mean.', 'Use the repeat pattern idea.']] },
    { id: 12904, chapter: 'Coding Lagoon', title: 'If statement', prompt: 'An if statement helps a program:', correct: 'Make a choice', wrong: [['Paint a wall', 'That is unrelated to code logic.', 'If statements choose between paths.'], ['Grow a tree', 'That is not a programming action.', 'Think decision-making.'], ['Sing louder', 'That is unrelated.', 'Use the idea of choosing what happens next.']] },
  ]),
  primaryMoney: makeQuestionBank('Primary', [
    { id: 12911, chapter: 'Money Dock', title: 'Coin value', prompt: 'Which is worth more?', correct: 'A quarter', wrong: [['A penny', 'A penny is worth much less.', 'Compare the coin values.'], ['A button', 'A button is not money.', 'Choose the actual coin with the higher value.'], ['A tiny rock', 'That is not money.', 'Use the real coin system.']] },
    { id: 12912, chapter: 'Money Reef', title: 'Saving idea', prompt: 'What does saving money mean?', correct: 'Keeping some money for later', wrong: [['Spending everything right away', 'That is the opposite of saving.', 'Saving is about waiting to use money.'], ['Throwing coins into the ocean', 'That loses money rather than saves it.', 'Saving keeps money available.'], ['Turning money into paper airplanes', 'That destroys value, not saves it.', 'Think future use.']] },
    { id: 12913, chapter: 'Money Cove', title: 'Need or want', prompt: 'Which is more likely to be a need?', correct: 'Food', wrong: [['A gold crown', 'That is more of a want.', 'Needs are basics for living.'], ['A laser scooter', 'That is not a basic necessity.', 'Choose the essential item.'], ['A pile of glitter', 'That is not a survival need.', 'Needs come before extras.']] },
    { id: 12914, chapter: 'Money Lagoon', title: 'Counting coins', prompt: 'Two dimes are worth:', correct: '20 cents', wrong: [['2 cents', 'A dime is worth 10 cents, not 1.', 'Add 10 + 10.'], ['12 cents', 'That mixes values incorrectly.', 'Use the value of each dime.'], ['50 cents', 'That is too high.', 'Two dimes make twenty cents.']] },
  ]),
  }
}
