from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "opentriviaqa_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "opentriviaqa"
OUTPUT_JSON = OUTPUT_DIR / "opentriviaqa_questions.json"
OUTPUT_MD = OUTPUT_DIR / "opentriviaqa_summary.md"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    category: str
    question_number: int
    prompt_text: str
    correct_answer: str
    answer_choices: list[str]
    source_file: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def infer_candidate_tracks(category: str, prompt: str) -> list[str]:
    lowered = f"{category} {prompt}".lower()
    candidates: list[str] = []

    if category in {"brain-teasers", "general"}:
        candidates.extend(["brainBurners", "logicCriticalThinking"])
    if any(key in lowered for key in ["number", "triangle", "sequence", "equation", "geometry"]):
        candidates.extend(["mathExtensions", "brainBurners"])
    if any(key in lowered for key in ["philosophy", "kant", "religion", "faith"]):
        candidates.extend(["philosophy", "moralCrossroads"])
    if any(key in lowered for key in ["science", "technology", "earthquake", "volcano", "organ", "crystal"]):
        candidates.extend(["genBio1", "genPhys1", "introDataScience"])
    if any(key in lowered for key in ["history", "geography", "literature", "music", "movies"]):
        candidates.extend(["apHistory", "ibHistory"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def parse_category_file(path: Path) -> list[ExtractedQuestion]:
    questions: list[ExtractedQuestion] = []
    category = path.name
    lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
    current_prompt = ""
    current_correct = ""
    current_choices: list[str] = []
    question_number = 0

    def flush() -> None:
        nonlocal current_prompt, current_correct, current_choices, question_number
        if not current_prompt or not current_correct:
            current_prompt = ""
            current_correct = ""
            current_choices = []
            return
        question_number += 1
        source_id = f"opentriviaqa::{category}::{question_number}"
        collection_id = f"opentriviaqa::{category}"
        questions.append(
            ExtractedQuestion(
                source_id=source_id,
                collection_id=collection_id,
                category=category,
                question_number=question_number,
                prompt_text=current_prompt.strip(),
                correct_answer=current_correct.strip(),
                answer_choices=[choice.strip() for choice in current_choices if choice.strip()],
                source_file=path.relative_to(SCRATCH_REPO).as_posix(),
                candidate_track_ids=infer_candidate_tracks(category, current_prompt),
                topic_tags=[category],
            )
        )
        current_prompt = ""
        current_correct = ""
        current_choices = []

    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            continue
        if line.startswith("#Q "):
            flush()
            current_prompt = line[3:].strip()
        elif line.startswith("^ "):
            current_correct = line[2:].strip()
        elif len(line) > 2 and line[0].isalpha() and line[1] == " ":
            current_choices.append(line[2:].strip())

    flush()
    return questions


def extract_all_questions() -> list[ExtractedQuestion]:
    questions: list[ExtractedQuestion] = []
    for path in sorted((SCRATCH_REPO / "categories").iterdir()):
        if path.is_file():
            questions.extend(parse_category_file(path))
    return questions


def write_outputs(questions: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    by_category: dict[str, int] = {}
    for question in questions:
        by_category[question.category] = by_category.get(question.category, 0) + 1

    payload = {
        "source": "OpenTriviaQA",
        "license": "CC BY-SA 4.0",
        "repository": "https://github.com/uberspot/OpenTriviaQA",
        "collectionCount": len(by_category),
        "questionCount": len(questions),
        "items": [asdict(question) for question in questions],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenTriviaQA Raw Collection",
        "",
        "- Source: OpenTriviaQA",
        "- License: CC BY-SA 4.0",
        "- Repository: https://github.com/uberspot/OpenTriviaQA",
        f"- Questions extracted: {len(questions)}",
        f"- Collections: {len(by_category)}",
        "",
        "## By Category",
        "",
    ]
    for category, count in sorted(by_category.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{category}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    questions = extract_all_questions()
    write_outputs(questions)
    print(f"Extracted {len(questions)} OpenTriviaQA questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
