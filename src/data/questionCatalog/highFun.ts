import type { Question } from './types'
import { makeSimpleQuestion } from './base'
import { topUpHighGeneratedTrack } from './highGenerated'

// Wave 4 consolidation 2026-05-18: `gameDesignBasics` (syllabus-aligned track id) and
// `gameDesign` (legacy track id) both route to this hand-authored gameDesign bank. Audit will
// later collapse the duplicate ids.
export function buildHighFunQuestionCatalog(): Record<string, Question[]> {
  const catalog: Record<string, Question[]> = {
  chessTactics: [
    makeSimpleQuestion(15001, 'Fun', 'Chess Dock', 'Fork alert',
      'A fork in chess is best described as:',
      'One piece attacking two targets at the same time',
      [
        ['A move that always gives checkmate', 'Forks can be strong without ending the game immediately.', 'Focus on the double attack idea.'],
        ['Trading queens on purpose', 'That is an exchange decision, not a tactical pattern.', 'A fork threatens multiple pieces at once.'],
        ['Only a knight move to the edge of the board', 'Knights often fork, but forks are not limited to one piece or square type.', 'Think pattern before piece.'],
      ]),
    makeSimpleQuestion(15002, 'Fun', 'Chess Reef', 'Piece value',
      'Which chess piece is usually valued around 9 points?',
      'The queen',
      [
        ['The bishop', 'A bishop is usually valued near 3 points.', 'Use the standard rough material scale.'],
        ['The rook', 'A rook is usually valued near 5 points.', 'Queen is the most valuable major piece.'],
        ['The knight', 'A knight is usually valued near 3 points.', 'Keep the basic point ladder in mind.'],
      ]),
    makeSimpleQuestion(15003, 'Fun', 'Chess Cove', 'Opening principle',
      'Which is a standard opening principle?',
      'Develop pieces and fight for the center',
      [
        ['Move the same pawn back and forth', 'That wastes time and development.', 'Openings reward useful activity.'],
        ['Bring the queen out as early as possible every game', 'Early queen adventures are often easy to attack.', 'Develop minor pieces and coordinate first.'],
        ['Ignore king safety until the endgame', 'King safety matters early.', 'Castling and central control are core basics.'],
      ]),
    makeSimpleQuestion(15004, 'Fun', 'Chess Lagoon', 'Check response',
      'If your king is in check, what must happen on your move?',
      'You must remove the check',
      [
        ['You may ignore it once', 'You cannot leave your king in check.', 'Check is an immediate threat that must be answered.'],
        ['You must capture the attacking piece every time', 'Capture is one option, but not the only one.', 'Blocking or moving the king can also work.'],
        ['You have to resign', 'Many checks are defendable.', 'The rule is to neutralize the threat, not surrender automatically.'],
      ]),
  ],
  creativeWritingStudio: [
    makeSimpleQuestion(15101, 'Fun', 'Writing Dock', 'Show vs tell',
      'Which line is the strongest example of "show, don’t tell"?',
      'Her hands shook so hard the tea rippled over the rim',
      [
        ['She was nervous', 'That tells the feeling directly.', 'Showing uses sensory detail and action.'],
        ['This was a nervous moment', 'That summarizes rather than dramatizes.', 'Let the reader infer the emotion.'],
        ['Nervousness happened', 'That is abstract and flat.', 'Concrete detail carries mood better.'],
      ]),
    makeSimpleQuestion(15102, 'Fun', 'Writing Reef', 'Conflict engine',
      'A story usually becomes interesting when:',
      'A character wants something and something blocks them',
      [
        ['Nothing changes for anyone', 'Stillness rarely creates narrative momentum.', 'Stories need tension or movement.'],
        ['Every problem is solved immediately', 'Instant resolution drains suspense.', 'Conflict drives curiosity.'],
        ['The setting description goes on forever', 'Atmosphere helps, but conflict gives shape.', 'Ask what the character wants.'],
      ]),
    makeSimpleQuestion(15103, 'Fun', 'Writing Cove', 'Point of view',
      'If a narrator says "I ran down the stairs," the point of view is:',
      'First person',
      [
        ['Second person', 'Second person uses "you".', 'Match pronouns to viewpoint.'],
        ['Third person limited', 'Third person uses "he", "she", or "they".', 'First person uses "I".'],
        ['Omniscient by default', 'Omniscience is about scope of knowledge, not the presence of "I".', 'Start with the pronoun clue.'],
      ]),
    makeSimpleQuestion(15104, 'Fun', 'Writing Lagoon', 'Dialogue clue',
      'Good dialogue usually does what?',
      'Reveals character or moves the scene forward',
      [
        ['Repeats information the reader already knows word for word', 'That tends to feel stiff and redundant.', 'Dialogue earns its place by adding something.'],
        ['Makes every character sound identical', 'That weakens voice and characterization.', 'People on the page should sound distinct.'],
        ['Avoids subtext at all costs', 'Subtext often makes dialogue more alive.', 'Not everything needs to be stated directly.'],
      ]),
  ],
  mythologyAndMonsters: [
    makeSimpleQuestion(15201, 'Fun', 'Myth Dock', 'Myth pattern',
      'A common feature of myths is:',
      'They explain the world through symbolic stories',
      [
        ['They are laboratory reports', 'Myths work through narrative and symbolism, not controlled experiments.', 'Think cultural explanation, not scientific method.'],
        ['They always happen in modern cities', 'Some can be adapted, but classic myths are not defined by that setting.', 'Focus on purpose, not one backdrop.'],
        ['They never contain larger-than-life characters', 'Myths often depend on them.', 'Heroes, gods, and monsters are common.'],
      ]),
    makeSimpleQuestion(15202, 'Fun', 'Monster Reef', 'Hero problem',
      'Why are monsters useful in stories?',
      'They make inner fears visible through outer conflict',
      [
        ['Because they always win in the end', 'Monsters can lose and still matter.', 'Their symbolic role matters more than victory.'],
        ['Because every story needs the same villain', 'Stories vary widely.', 'Monsters often reflect a specific fear or theme.'],
        ['Because they avoid all moral questions', 'Monsters often intensify moral questions.', 'Symbolic conflict usually raises stakes.'],
      ]),
    makeSimpleQuestion(15203, 'Fun', 'Myth Cove', 'Trickster move',
      'A trickster character is usually known for:',
      'Breaking rules, bending expectations, and causing disruption',
      [
        ['Perfect obedience to authority', 'That is the opposite of the archetype.', 'Tricksters unsettle systems.'],
        ['Never changing anything', 'Tricksters usually trigger movement or confusion.', 'They disturb the normal order.'],
        ['Speaking only in equations', 'That is not the defining trait.', 'Focus on mischief and disruption.'],
      ]),
    makeSimpleQuestion(15204, 'Fun', 'Monster Lagoon', 'Symbol reading',
      'If a dragon guards a cave full of treasure, the dragon may symbolize:',
      'A danger or fear standing between the hero and growth',
      [
        ['Only a lizard with no story purpose', 'Literal description misses the symbolic layer myths often use.', 'Ask what obstacle the creature represents.'],
        ['A weather forecast', 'That is too narrow and usually unrelated.', 'Myth creatures often stand in for inner or social conflict.'],
        ['Guaranteed historical fact', 'Myths are not usually read that way.', 'Symbolic meaning is central here.'],
      ]),
  ],
  gameDesignBasics: [
    makeSimpleQuestion(15301, 'Fun', 'Game Design Dock', 'Core loop',
      'A game’s core loop is:',
      'The main repeated cycle of action and reward',
      [
        ['The color of the title screen', 'Presentation matters, but that is not the loop.', 'The loop describes what the player keeps doing.'],
        ['A legal contract for the game studio', 'That is unrelated to play structure.', 'Core loop is gameplay rhythm.'],
        ['Only the final boss fight', 'Boss fights can sit on top of a loop but are not the whole system.', 'Look for the repeatable pattern.'],
      ]),
    makeSimpleQuestion(15302, 'Fun', 'Game Design Reef', 'Player choice',
      'Good player choice usually means:',
      'Different options lead to meaningful tradeoffs',
      [
        ['Every option is secretly identical', 'That makes choice feel fake.', 'Meaningful choice changes outcomes or risk.'],
        ['One option is obviously correct every time', 'That narrows play instead of opening it.', 'Interesting choices create tension.'],
        ['The player gets no feedback', 'Feedback helps players understand consequences.', 'Choices need readable results.'],
      ]),
    makeSimpleQuestion(15303, 'Fun', 'Game Design Cove', 'Difficulty tuning',
      'A fair difficulty spike should usually:',
      'Challenge the player using skills the game has already taught',
      [
        ['Punish players for information they could not know', 'That feels arbitrary rather than fair.', 'Good challenge tests learned skills.'],
        ['Ignore all pacing and come out of nowhere', 'Sharp surprises can work, but pure randomness often feels bad.', 'Difficulty should feel legible.'],
        ['Remove all consequences so nothing matters', 'No stakes weakens the challenge.', 'Fair does not mean consequence-free.'],
      ]),
    makeSimpleQuestion(15304, 'Fun', 'Game Design Lagoon', 'Feedback signal',
      'Why is clear feedback important in games?',
      'Players need to understand what happened and why',
      [
        ['To hide the rules', 'Hidden rules usually create confusion.', 'Feedback teaches the system.'],
        ['So every action feels the same', 'That reduces clarity and texture.', 'Different outcomes should read differently.'],
        ['Because menus must always be bigger than gameplay', 'That is not the reason.', 'Feedback is about readability and learning.'],
      ]),
  ],
  detectiveLogic: [
    makeSimpleQuestion(15401, 'Fun', 'Detective Dock', 'Best clue',
      'Which clue is usually strongest in a logic puzzle?',
      'A clue that clearly eliminates possibilities',
      [
        ['A clue with dramatic wording but no useful constraint', 'Exciting language is not the same as information.', 'Strong clues narrow the search space.'],
        ['A clue that can mean anything', 'Ambiguity weakens deduction.', 'Good clues reduce uncertainty.'],
        ['A clue you decide to ignore', 'Unused clues do not help solve the puzzle.', 'Track what each clue rules out.'],
      ]),
    makeSimpleQuestion(15402, 'Fun', 'Detective Reef', 'Contradiction test',
      'In deduction, a contradiction tells you:',
      'An assumption or path must be wrong',
      [
        ['You are definitely done solving', 'A contradiction usually helps you rule something out, not finish automatically.', 'Use it to reject the bad branch.'],
        ['Every clue is false', 'Usually one assumption is the issue, not the entire puzzle.', 'Narrow the failure point.'],
        ['The puzzle has become a poem', 'That changes genre, not logic.', 'Contradictions are elimination tools.'],
      ]),
    makeSimpleQuestion(15403, 'Fun', 'Detective Cove', 'Good process',
      'A strong way to solve a logic grid puzzle is to:',
      'Track possibilities systematically and update them clue by clue',
      [
        ['Guess wildly and hope for vibes', 'That creates noise instead of progress.', 'Systematic elimination is faster and safer.'],
        ['Ignore clues that seem inconvenient', 'Inconvenient clues are often the useful ones.', 'Every clue should update the grid somehow.'],
        ['Memorize the answer pattern in advance', 'Logic puzzles depend on deduction from the given clues.', 'Solve from evidence, not templates.'],
      ]),
    makeSimpleQuestion(15404, 'Fun', 'Detective Lagoon', 'Sufficient evidence',
      'In a mystery-style reasoning problem, when is a claim justified?',
      'When the available clues support it better than the alternatives',
      [
        ['When it sounds coolest', 'Style is not evidence.', 'Choose the explanation with the strongest clue support.'],
        ['When it matches your first guess', 'First guesses can be wrong.', 'Keep updating with evidence.'],
        ['When it avoids all hard thinking', 'That defeats the point of deduction.', 'Justification comes from reasoning, not convenience.'],
      ]),
  ],
  }
  // Mirror the gameDesign content under the syllabus-aligned `gameDesignBasics` id so users
  // opening that track see the same hand-authored bank (Wave 4 routing fix).
  if (catalog.gameDesign) {
    catalog.gameDesignBasics = catalog.gameDesign
  }

  return Object.fromEntries(
    Object.entries(catalog).map(([trackId, questions]) => [
      trackId,
      topUpHighGeneratedTrack(trackId, questions),
    ]),
  )
}
