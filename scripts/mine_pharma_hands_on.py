from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "pharma_hands_on_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "pharma_hands_on"
OUTPUT_JSON = OUTPUT_DIR / "pharma_hands_on_tasks.json"
OUTPUT_MD = OUTPUT_DIR / "pharma_hands_on_summary.md"
REPO_URL = "https://github.com/pfizer-opensource/pharma-hands-on-exercises.git"


@dataclass
class ExtractedTask:
    source_id: str
    collection_id: str
    project_slug: str
    source_file: str
    step_number: int
    title: str
    prompt_text: str
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
        ["git", "clone", "--depth", "1", REPO_URL, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def clean_markdown(text: str) -> str:
    cleaned = text
    cleaned = re.sub(r"```.*?```", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"`([^`]+)`", r"\1", cleaned)
    cleaned = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", cleaned)
    cleaned = re.sub(r"<([^>]+)>", r"\1", cleaned)
    cleaned = re.sub(r"\*\*([^*]+)\*\*", r"\1", cleaned)
    cleaned = re.sub(r"\*([^*]+)\*", r"\1", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def parse_project_title(text: str, fallback: str) -> str:
    match = re.search(r"^title:\s*\"([^\"]+)\"", text, flags=re.MULTILINE)
    if match:
        return clean_markdown(match.group(1))
    return fallback


def extract_numbered_blocks(text: str) -> list[tuple[int, str]]:
    pattern = re.compile(r"(?m)^(\d+)\.\s{1,}")
    matches = list(pattern.finditer(text))
    blocks: list[tuple[int, str]] = []
    for i, match in enumerate(matches):
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        number = int(match.group(1))
        block = text[start:end].strip()
        if block:
            blocks.append((number, block))
    return blocks


def infer_candidate_tracks(project_slug: str, prompt_text: str) -> list[str]:
    candidates = ["software", "introCS"]
    lowered = f"{project_slug} {prompt_text}".lower()

    if any(token in lowered for token in ["plot", "boxplot", "barplot", "visualization", "graph"]):
        candidates.extend(["introDataScience", "apStatistics"])
    if any(token in lowered for token in ["summar", "mean", "median", "count", "group", "filter"]):
        candidates.extend(["introDataScience", "apStatistics"])
    if any(token in lowered for token in ["function", "debug", "testthat", "snippet", "code style"]):
        candidates.extend(["software", "basic_javascript"])
    if any(token in lowered for token in ["clinical", "adam", "adsl", "subject"]):
        candidates.append("medical")

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_all_tasks() -> list[ExtractedTask]:
    tasks: list[ExtractedTask] = []
    for rmd_file in sorted(SCRATCH_REPO.glob("MiniProject*.Rmd")):
        text = rmd_file.read_text(encoding="utf-8", errors="ignore")
        project_slug = rmd_file.stem.lower()
        title = parse_project_title(text, rmd_file.stem)
        for step_number, block in extract_numbered_blocks(text):
            prompt = clean_markdown(block)
            if len(prompt) < 25:
                continue
            source_id = f"pharma-hands-on::{project_slug}::{step_number}"
            collection_id = f"pharma-hands-on::{project_slug}"
            tasks.append(
                ExtractedTask(
                    source_id=source_id,
                    collection_id=collection_id,
                    project_slug=project_slug,
                    source_file=rmd_file.relative_to(SCRATCH_REPO).as_posix(),
                    step_number=step_number,
                    title=title,
                    prompt_text=prompt,
                    candidate_track_ids=infer_candidate_tracks(project_slug, prompt),
                    topic_tags=[title, project_slug, f"step {step_number}"],
                )
            )
    return tasks


def write_outputs(tasks: list[ExtractedTask]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_project: dict[str, int] = {}
    for task in tasks:
        by_project[task.project_slug] = by_project.get(task.project_slug, 0) + 1

    payload = {
        "source": "Pfizer Pharma Hands-on Exercises",
        "license": "CC BY 4.0",
        "repository": REPO_URL,
        "collectionCount": len(by_project),
        "questionCount": len(tasks),
        "items": [task.__dict__ for task in tasks],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# Pharma Hands-on Raw Collection",
        "",
        "- Source: Pfizer Pharma Hands-on Exercises",
        "- License: CC BY 4.0",
        f"- Repository: {REPO_URL}",
        f"- Questions extracted: {len(tasks)}",
        f"- Collections: {len(by_project)}",
        "",
        "## By Project",
        "",
    ]
    for project, count in sorted(by_project.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{project}`: {count}")
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    tasks = extract_all_tasks()
    write_outputs(tasks)
    print(f"Extracted {len(tasks)} pharma hands-on tasks into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
