from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "ims_tutorials_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "ims_tutorials"
OUTPUT_JSON = OUTPUT_DIR / "ims_tutorials_questions.json"
OUTPUT_MD = OUTPUT_DIR / "ims_tutorials_summary.md"
IMS_TUTORIALS_GIT = "https://github.com/OpenIntroStat/ims-tutorials.git"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    module_slug: str
    lesson_slug: str
    source_file: str
    prompt_text: str
    choices: list[str]
    correct_choice: str
    candidate_track_ids: list[str]
    topic_tags: list[str]


def ensure_repo() -> None:
    if SCRATCH_REPO.exists():
        subprocess.run(
            ["git", "-C", str(SCRATCH_REPO), "pull", "--ff-only"],
            check=True,
            capture_output=True,
            text=True,
        )
        return

    SCRATCH_REPO.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["git", "clone", "--depth", "1", IMS_TUTORIALS_GIT, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def clean_text(text: str) -> str:
    cleaned = text
    cleaned = cleaned.replace("\\n", " ")
    cleaned = re.sub(r"`([^`]+)`", r"\1", cleaned)
    cleaned = re.sub(r"\*\*([^*]+)\*\*", r"\1", cleaned)
    cleaned = re.sub(r"\*([^*]+)\*", r"\1", cleaned)
    cleaned = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", cleaned)
    cleaned = re.sub(r"\\\((.*?)\\\)", r"\1", cleaned)
    cleaned = re.sub(r"\\\[(.*?)\\\]", r"\1", cleaned)
    cleaned = re.sub(r"\\\\", " ", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def find_balanced_call(text: str, start_index: int) -> tuple[str, int]:
    depth = 0
    in_string = False
    escaped = False
    chunk: list[str] = []
    i = start_index
    while i < len(text):
        char = text[i]
        chunk.append(char)
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
        else:
            if char == '"':
                in_string = True
            elif char == "(":
                depth += 1
            elif char == ")":
                depth -= 1
                if depth == 0:
                    return ("".join(chunk), i + 1)
        i += 1
    raise ValueError("unbalanced call")


def split_top_level_args(call_body: str) -> list[str]:
    args: list[str] = []
    depth = 0
    in_string = False
    escaped = False
    current: list[str] = []

    for char in call_body:
        if in_string:
            current.append(char)
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue

        if char == '"':
            in_string = True
            current.append(char)
            continue

        if char in "([{":
            depth += 1
        elif char in ")]}":
            depth -= 1

        if char == "," and depth == 0:
            args.append("".join(current).strip())
            current = []
        else:
            current.append(char)

    tail = "".join(current).strip()
    if tail:
        args.append(tail)
    return args


def parse_string_literal(text: str) -> str:
    match = re.match(r'"((?:[^"\\]|\\.)*)"', text.strip(), flags=re.DOTALL)
    if not match:
        return clean_text(text.strip())
    return clean_text(bytes(match.group(1), "utf-8").decode("unicode_escape"))


def extract_question_blocks(text: str) -> list[str]:
    blocks: list[str] = []
    marker = "question("
    pos = 0
    while True:
        idx = text.find(marker, pos)
        if idx == -1:
            break
        call, next_pos = find_balanced_call(text, idx + len("question"))
        blocks.append(call[1:-1].strip())
        pos = next_pos
    return blocks


def parse_answers(question_args: list[str]) -> tuple[list[str], str]:
    choices: list[str] = []
    correct_choice = ""
    for arg in question_args[1:]:
        stripped = arg.strip()
        if not stripped.startswith("answer("):
            continue
        call, _ = find_balanced_call(stripped, len("answer"))
        answer_args = split_top_level_args(call[1:-1].strip())
        if not answer_args:
            continue
        answer_text = parse_string_literal(answer_args[0])
        choices.append(answer_text)
        if any("correct = TRUE" in item or "correct=TRUE" in item for item in answer_args[1:]):
            correct_choice = answer_text
    return choices, correct_choice


def infer_candidate_tracks(module_slug: str) -> list[str]:
    candidates = ["apStatistics", "introDataScience"]
    lowered = module_slug.lower()
    if "model" in lowered:
        candidates.extend(["ml", "quantAdvanced"])
    if "infer" in lowered or "foundations" in lowered:
        candidates.extend(["quant", "medical"])
    if "explore" in lowered or "data" in lowered:
        candidates.append("logicCriticalThinking")

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_all_questions() -> list[ExtractedQuestion]:
    extracted: list[ExtractedQuestion] = []
    for rmd_file in sorted(SCRATCH_REPO.glob("*-*/**/*-lesson.Rmd")):
        relative = rmd_file.relative_to(SCRATCH_REPO)
        parts = relative.parts
        if len(parts) < 3:
            continue
        module_slug = parts[0]
        lesson_slug = parts[1]
        text = rmd_file.read_text(encoding="utf-8", errors="ignore")
        question_blocks = extract_question_blocks(text)

        for index, block in enumerate(question_blocks, start=1):
            args = split_top_level_args(block)
            if not args:
                continue
            prompt = parse_string_literal(args[0])
            choices, correct_choice = parse_answers(args)
            if len(prompt) < 10 or len(choices) < 2 or not correct_choice:
                continue

            collection_id = f"ims-tutorials::{module_slug}"
            source_id = f"ims-tutorials::{module_slug}::{lesson_slug}::{index}"
            extracted.append(
                ExtractedQuestion(
                    source_id=source_id,
                    collection_id=collection_id,
                    module_slug=module_slug,
                    lesson_slug=lesson_slug,
                    source_file=relative.as_posix(),
                    prompt_text=prompt,
                    choices=choices,
                    correct_choice=correct_choice,
                    candidate_track_ids=infer_candidate_tracks(module_slug),
                    topic_tags=[module_slug.replace("-", " "), lesson_slug.replace("-", " "), prompt[:80]],
                )
            )

    return extracted


def write_outputs(questions: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_module: dict[str, int] = {}
    for question in questions:
        by_module[question.module_slug] = by_module.get(question.module_slug, 0) + 1

    payload = {
        "source": "IMS Tutorials",
        "license": "CC BY-SA 3.0",
        "repository": IMS_TUTORIALS_GIT,
        "collectionCount": len(by_module),
        "questionCount": len(questions),
        "items": [question.__dict__ for question in questions],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# IMS Tutorials Raw Collection",
        "",
        "- Source: IMS Tutorials",
        "- License: CC BY-SA 3.0",
        f"- Repository: {IMS_TUTORIALS_GIT}",
        f"- Questions extracted: {len(questions)}",
        f"- Collections: {len(by_module)}",
        "",
        "## By Module",
        "",
    ]
    for module, count in sorted(by_module.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{module}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    questions = extract_all_questions()
    write_outputs(questions)
    print(f"Extracted {len(questions)} IMS tutorial questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
