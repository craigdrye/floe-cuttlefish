from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "openintro_ims_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "openintro_ims"
OUTPUT_JSON = OUTPUT_DIR / "openintro_ims_exercises.json"
OUTPUT_MD = OUTPUT_DIR / "openintro_ims_summary.md"
OPENINTRO_GIT = "https://github.com/OpenIntroStat/ims.git"


@dataclass
class ExtractedExercise:
    source_id: str
    collection_id: str
    chapter_slug: str
    source_file: str
    solution_file: str
    exercise_number: int
    title: str
    prompt_text: str
    solution_text: str
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
        ["git", "clone", "--depth", "1", OPENINTRO_GIT, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def clean_markdown(text: str) -> str:
    cleaned = text
    cleaned = re.sub(r"```.*?```", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", cleaned)
    cleaned = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", cleaned)
    cleaned = re.sub(r"\[@[^\]]+\]", " ", cleaned)
    cleaned = re.sub(r"\{#[^}]+\}", " ", cleaned)
    cleaned = cleaned.replace("\\vfill", " ").replace("\\clearpage", " ")
    cleaned = re.sub(r"\\addtocounter\{[^}]+\}\{[^}]+\}", " ", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def split_numbered_markdown(text: str) -> list[str]:
    pattern = re.compile(r"(?m)^\d+\.\s")
    matches = list(pattern.finditer(text))
    blocks: list[str] = []
    for i, match in enumerate(matches):
        start = match.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end].strip()
        if block:
            blocks.append(block)
    return blocks


def parse_title(block: str) -> str:
    first_line = block.splitlines()[0]
    first_line = re.sub(r"^\d+\.\s*", "", first_line).strip()
    bold = re.match(r"\*\*(.+?)\*\*", first_line)
    if bold:
        return clean_markdown(bold.group(1))
    return clean_markdown(first_line[:100])


def chapter_slug_from_filename(name: str) -> str:
    stem = name.removesuffix(".qmd").lstrip("_")
    parts = stem.split("-")
    if len(parts) >= 3:
        return "-".join(parts[2:])
    return stem


def infer_candidate_tracks(chapter_slug: str) -> list[str]:
    candidates = ["apStatistics", "introDataScience"]
    lowered = chapter_slug.lower()
    if "model" in lowered or "regression" in lowered or "logistic" in lowered:
        candidates.extend(["ml", "quantAdvanced"])
    if "inference" in lowered or "foundations" in lowered:
        candidates.extend(["quant", "medical"])
    if "explore" in lowered or "data" in lowered:
        candidates.extend(["logicCriticalThinking"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_all_exercises() -> list[ExtractedExercise]:
    exercises_dir = SCRATCH_REPO / "exercises"
    extracted: list[ExtractedExercise] = []

    for ex_file in sorted(exercises_dir.glob("*-ex-*.qmd")):
        sa_file = ex_file.with_name(ex_file.name.replace("-ex-", "-sa-"))
        if not sa_file.exists():
            continue

        chapter_slug = chapter_slug_from_filename(ex_file.name)
        ex_blocks = split_numbered_markdown(ex_file.read_text(encoding="utf-8", errors="ignore"))
        sa_blocks = split_numbered_markdown(sa_file.read_text(encoding="utf-8", errors="ignore"))

        for index, block in enumerate(ex_blocks, start=1):
            cleaned_prompt = clean_markdown(block)
            if len(cleaned_prompt) < 25:
                continue
            solution_block = sa_blocks[index - 1] if index - 1 < len(sa_blocks) else ""
            cleaned_solution = clean_markdown(re.sub(r"^\d+\.\s*", "", solution_block))
            title = parse_title(block) or f"{chapter_slug} exercise {index}"
            collection_id = f"openintro-ims::{chapter_slug}"
            source_id = f"openintro-ims::{chapter_slug}::{index}"

            extracted.append(
                ExtractedExercise(
                    source_id=source_id,
                    collection_id=collection_id,
                    chapter_slug=chapter_slug,
                    source_file=ex_file.relative_to(SCRATCH_REPO).as_posix(),
                    solution_file=sa_file.relative_to(SCRATCH_REPO).as_posix(),
                    exercise_number=index,
                    title=title,
                    prompt_text=cleaned_prompt,
                    solution_text=cleaned_solution,
                    candidate_track_ids=infer_candidate_tracks(chapter_slug),
                    topic_tags=[chapter_slug.replace("-", " "), "statistics", title],
                )
            )

    return extracted


def write_outputs(exercises: list[ExtractedExercise]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_chapter: dict[str, int] = {}
    with_solutions = 0

    for exercise in exercises:
        by_chapter[exercise.chapter_slug] = by_chapter.get(exercise.chapter_slug, 0) + 1
        if exercise.solution_text:
            with_solutions += 1

    payload = {
        "source": "Introduction to Modern Statistics",
        "license": "CC BY-SA 3.0",
        "repository": OPENINTRO_GIT,
        "collectionCount": len(by_chapter),
        "questionCount": len(exercises),
        "withSolutionCount": with_solutions,
        "items": [exercise.__dict__ for exercise in exercises],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenIntro IMS Raw Collection",
        "",
        "- Source: Introduction to Modern Statistics",
        "- License: CC BY-SA 3.0",
        f"- Repository: {OPENINTRO_GIT}",
        f"- Questions extracted: {len(exercises)}",
        f"- Collections: {len(by_chapter)}",
        f"- With paired solutions: {with_solutions}",
        "",
        "## By Chapter",
        "",
    ]
    for chapter, count in sorted(by_chapter.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{chapter}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    exercises = extract_all_exercises()
    write_outputs(exercises)
    print(f"Extracted {len(exercises)} OpenIntro IMS exercises into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
