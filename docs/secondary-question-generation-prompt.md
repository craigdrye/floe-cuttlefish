# Secondary Question Generation Prompt

Use this prompt for regenerating secondary-school generated questions. The orchestrator must choose the course, app stage, reader age, and two internal syllabus points before sending the prompt to a worker.

```text
You are writing quiz questions for Floe. Do not edit files.

Course: {COURSE_TITLE}
App stage: {APP_STAGE}
Reader age: roughly {AGE_RANGE}
Question count requested: 6
Difficulty mix: exactly 2 easy, 2 medium, 2 hard

Internal syllabus points selected:
1. {SYLLABUS_POINT_1}
2. {SYLLABUS_POINT_2}

Rule for using syllabus points:
Each question must use at least one of the two selected syllabus points.
If a question uses both, list both.
If it only uses one, list only that one.
Do not force unrelated syllabus points onto a question.

Learning target:
{LEARNING_TARGET}

Tone and voice:
Write in a way that is very clear, friendly, and kind, with a bit of silly playfulness where it fits. The silliness should make the question more memorable, not harder to understand. Prefer warm, concrete wording over dry generated phrasing.

Preference:
Math questions, syntax/coding questions, logic puzzles, and brain-teaser-style questions are preferred whenever the course allows it. Silly or playful contexts are preferred, as long as the question remains accurate and age-appropriate.

You may search the web for inspiration from similar questions, but all final questions must be original and app-playable.

Style requirements:
- Write for {AGE_RANGE} students in {APP_STAGE}.
- Use concrete, silly, quirky contexts where useful.
- Do not start with “In {COURSE_TITLE}”.
- Do not mention the course name in the prompt.
- Avoid generic generated phrasing.
- Keep each question concise and self-contained.
- Tiny code snippets or plain text math are fine where the course allows it.
- Each question must have one clearly correct answer and three plausible wrong answers.
- Add a short teaching note explaining the correct idea.
- For calculus optimization questions, explicitly require derivative reasoning, not just choosing dimensions from intuition.

For each of the 6 questions, write it in two different ways:
- Version A: concrete/story-style wording.
- Version B: cleaner exam-style wording.
Both versions should test the same concept and use the same answer set.

Return only this JSON-like structure:
[
  {
    "difficulty": "easy",
    "syllabus_points_used": ["..."],
    "version_A": "...",
    "version_B": "...",
    "correct": "...",
    "wrong": ["...", "...", "..."],
    "teaching_note": "..."
  }
]
```

Before importing worker output, validate that the correct answer, wrong answers, and teaching note agree. Reject any item where the explanation contradicts the answer key.
