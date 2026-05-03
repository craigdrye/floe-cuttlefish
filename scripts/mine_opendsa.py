from __future__ import annotations

import html
import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "opendsa_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "opendsa"
OUTPUT_JSON = OUTPUT_DIR / "opendsa_exercises.json"
OUTPUT_MD = OUTPUT_DIR / "opendsa_summary.md"
OPENDSA_GIT = "https://github.com/OpenDSA/OpenDSA.git"


@dataclass
class ExtractedExercise:
    source_id: str
    collection_id: str
    section: str
    source_file: str
    title: str
    prompt_text: str
    solution_text: str
    choices: list[str]
    is_templated: bool
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
        ["git", "clone", "--depth", "1", OPENDSA_GIT, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def extract_first(pattern: str, text: str) -> str | None:
    match = re.search(pattern, text, flags=re.IGNORECASE | re.DOTALL)
    if not match:
        return None
    return match.group(1)


def strip_html(fragment: str) -> str:
    cleaned = re.sub(r"<script\b.*?</script>", " ", fragment, flags=re.IGNORECASE | re.DOTALL)
    cleaned = re.sub(r"<style\b.*?</style>", " ", cleaned, flags=re.IGNORECASE | re.DOTALL)
    cleaned = re.sub(r"<br\s*/?>", "\n", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"</p\s*>", "\n", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"<li\b[^>]*>", "- ", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"</li\s*>", "\n", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"<[^>]+>", " ", cleaned)
    cleaned = html.unescape(cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def extract_choices(text: str) -> list[str]:
    choices_block = extract_first(r'<ul\b[^>]*class=["\'][^"\']*choices[^"\']*["\'][^>]*>(.*?)</ul>', text)
    if not choices_block:
        return []
    choices: list[str] = []
    for choice in re.findall(r"<li\b[^>]*>(.*?)</li>", choices_block, flags=re.IGNORECASE | re.DOTALL):
        cleaned = strip_html(choice)
        if cleaned:
            choices.append(cleaned)
    return choices


def infer_candidate_tracks(section: str, relative_path: str) -> list[str]:
    candidates = ["introCS"]
    lowered = f"{section}/{relative_path}".lower()

    if section in {"PL", "FLA"}:
        candidates.extend(["logicCriticalThinking", "software"])
    if section in {"Sorting", "Searching", "Graph", "Hashing", "Binary", "List", "Indexing"}:
        candidates.extend(["dataStructures", "software"])
    if section in {"Design", "SWDesignAndDataStructs", "IntroToSoftwareDesign", "CMP"}:
        candidates.extend(["software", "introCS"])
    if section in {"Background", "AlgAnal", "SeniorAlgAnal", "General"}:
        candidates.extend(["introCS", "logicCriticalThinking"])
    if "blockchain" in lowered:
        candidates.append("software")
    if "pointers" in lowered or "oop" in lowered:
        candidates.extend(["software", "dataStructures"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def infer_topic_tags(section: str, relative_path: str, title: str) -> list[str]:
    tags = [section.replace("_", " ")]
    for part in relative_path.split("/")[:-1]:
        normalized = part.replace("_", " ").strip()
        if normalized and normalized not in tags:
            tags.append(normalized)
    if title and title not in tags:
        tags.append(title)
    return tags


def extract_all_exercises() -> list[ExtractedExercise]:
    exercises: list[ExtractedExercise] = []
    base = SCRATCH_REPO / "Exercises"

    for html_file in sorted(base.rglob("*.html")):
        relative_path = html_file.relative_to(base).as_posix()
        section = relative_path.split("/")[0]
        text = html_file.read_text(encoding="utf-8", errors="ignore")

        question_html = extract_first(r'<(?:p|div)\b[^>]*class=["\'][^"\']*question[^"\']*["\'][^>]*>(.*?)</(?:p|div)>', text)
        solution_html = extract_first(r'<div\b[^>]*class=["\'][^"\']*solution[^"\']*["\'][^>]*>(.*?)</div>', text)
        if not question_html or not solution_html:
            continue

        prompt_text = strip_html(question_html)
        solution_text = strip_html(solution_html)
        if len(prompt_text) < 15 or len(solution_text) < 1:
            continue

        title_html = extract_first(r"<title>(.*?)</title>", text) or html_file.stem
        title = strip_html(title_html)
        choices = extract_choices(text)
        is_templated = any(token in text for token in ("<var", "JSAV", "randRange", "randFromArray", "data-type="))

        source_id = f"opendsa::{relative_path}"
        collection_id = f"open-dsa::{section.lower()}"
        exercises.append(
            ExtractedExercise(
                source_id=source_id,
                collection_id=collection_id,
                section=section,
                source_file=relative_path,
                title=title,
                prompt_text=prompt_text,
                solution_text=solution_text,
                choices=choices,
                is_templated=is_templated,
                candidate_track_ids=infer_candidate_tracks(section, relative_path),
                topic_tags=infer_topic_tags(section, relative_path, title),
            )
        )

    return exercises


def write_outputs(exercises: list[ExtractedExercise]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    summary_by_section: dict[str, int] = {}
    templated_by_section: dict[str, int] = {}
    multiple_choice = 0
    for exercise in exercises:
        summary_by_section[exercise.section] = summary_by_section.get(exercise.section, 0) + 1
        if exercise.is_templated:
            templated_by_section[exercise.section] = templated_by_section.get(exercise.section, 0) + 1
        if exercise.choices:
            multiple_choice += 1

    payload = {
        "source": "OpenDSA",
        "license": "MIT",
        "repository": OPENDSA_GIT,
        "collectionCount": len(summary_by_section),
        "questionCount": len(exercises),
        "multipleChoiceCount": multiple_choice,
        "templatedCount": sum(templated_by_section.values()),
        "items": [exercise.__dict__ for exercise in exercises],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenDSA Raw Collection",
        "",
        "- Source: OpenDSA",
        "- License: MIT",
        f"- Repository: {OPENDSA_GIT}",
        f"- Questions extracted: {len(exercises)}",
        f"- Collections: {len(summary_by_section)}",
        f"- With choices: {multiple_choice}",
        f"- Templated/dynamic: {sum(templated_by_section.values())}",
        "",
        "## By Section",
        "",
    ]
    for section, count in sorted(summary_by_section.items(), key=lambda item: (-item[1], item[0])):
        templated = templated_by_section.get(section, 0)
        lines.append(f"- `{section}`: {count} total, {templated} templated")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    exercises = extract_all_exercises()
    write_outputs(exercises)
    print(f"Extracted {len(exercises)} OpenDSA exercises into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
