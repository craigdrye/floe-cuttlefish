// Optional per-lesson explainer text, keyed by a question's `subTopic` (the lesson
// name). When present, the trainer renders it at the top of the "Before you dive"
// card on the first question of the lesson — a once-up-front primer that frames the
// whole lesson before any individual question.
export const LESSON_INTROS: Record<string, { heading: string; paragraphs: string[] }> = {
  'Backward Induction': {
    heading: 'What "backward induction" means',
    paragraphs: [
      'Most of these puzzles share one trick, so it\'s worth stating once up front. Backward induction means you solve a problem by starting at the end and working back to the beginning, instead of starting at the beginning and guessing forward.',
      'In a game, that means: don\'t ask "what\'s my best move right now?" Ask "which final positions win, and which earlier positions force my opponent into a losing one?" You label the very last situations first ("if it\'s your turn here, you\'ve already lost"), then step backward one move at a time, carrying those labels with you. By the time you reach the starting position, you already know who wins and exactly how. It feels like cheating, because it is — you\'re reading the last page of the book first.',
    ],
  },
}
