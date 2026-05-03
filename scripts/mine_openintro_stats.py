from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "openintro_stats_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "openintro_stats"
OUTPUT_JSON = OUTPUT_DIR / "openintro_stats_exercises.json"
OUTPUT_MD = OUTPUT_DIR / "openintro_stats_summary.md"
OPENINTRO_GIT = "https://github.com/OpenIntroStat/openintro-statistics.git"


@dataclass
class ExtractedExercise:
    source_id: str
    collection_id: str
    chapter_slug: str
    chapter_title: str
    exercise_number: int
    source_file: str
    title: str
    prompt_text: str
    raw_latex: str
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


def chapter_title_from_slug(slug: str) -> str:
    title = slug.replace("ch_", "").replace("_", " ").strip()
    return " ".join(word.capitalize() for word in title.split())


def extract_braced_block(text: str, start_index: int) -> tuple[str, int]:
    if text[start_index] != "{":
        raise ValueError("expected opening brace")

    depth = 0
    chunk: list[str] = []
    i = start_index
    while i < len(text):
        char = text[i]
        if char == "{":
            depth += 1
            if depth > 1:
                chunk.append(char)
        elif char == "}":
            depth -= 1
            if depth == 0:
                return ("".join(chunk), i + 1)
            chunk.append(char)
        else:
            chunk.append(char)
        i += 1

    raise ValueError("unterminated brace block")


def extract_eoce_blocks(text: str) -> list[tuple[int | None, str]]:
    results: list[tuple[int | None, str]] = []
    marker = r"\eoce"
    pos = 0
    pending_number: int | None = None

    while pos < len(text):
        comment = re.search(r"%\s*(\d+)", text[pos:])
        eoce = text.find(marker, pos)
        if eoce == -1:
            break

        if comment and pos + comment.start() < eoce:
            pending_number = int(comment.group(1))
            pos = pos + comment.end()
            continue

        first_brace = text.find("{", eoce + len(marker))
        if first_brace == -1:
            break
        block, next_pos = extract_braced_block(text, first_brace)
        results.append((pending_number, block.strip()))
        pending_number = None
        pos = next_pos

    return results


def extract_solution_blocks(text: str) -> dict[str, dict[int, str]]:
    chapter = ""
    solutions: dict[str, dict[int, str]] = {}
    pos = 0
    pending_number: int | None = None

    while pos < len(text):
        chapter_match = re.search(r"\\eocesolch\{([^}]*)\}", text[pos:])
        sol_pos = text.find(r"\eocesol{", pos)
        comment_match = re.search(r"%\s*(\d+)", text[pos:])

        candidates = []
        if chapter_match:
            candidates.append(("chapter", pos + chapter_match.start()))
        if sol_pos != -1:
            candidates.append(("solution", sol_pos))
        if comment_match:
            candidates.append(("comment", pos + comment_match.start()))
        if not candidates:
            break

        kind, absolute = min(candidates, key=lambda item: item[1])
        if kind == "chapter":
            chapter = chapter_match.group(1).strip()
            solutions.setdefault(chapter, {})
            pos = absolute + len(chapter_match.group(0))
            continue
        if kind == "comment":
            pending_number = int(comment_match.group(1))
            pos = absolute + len(comment_match.group(0))
            continue

        first_brace = text.find("{", sol_pos + len(r"\eocesol"))
        block, next_pos = extract_braced_block(text, first_brace)
        if chapter and pending_number is not None:
            solutions.setdefault(chapter, {})[pending_number] = block.strip()
        pending_number = None
        pos = next_pos

    return solutions


def clean_latex(text: str) -> str:
    compact = text
    compact = re.sub(r"(?<!\\)%.*", "", compact)
    compact = compact.replace("\n", " ")
    compact = re.sub(r"\\label\{[^{}]*\}", " ", compact)
    compact = re.sub(r"\\footfullcite\{[^{}]*\}", " ", compact)
    compact = re.sub(r"\\begin\{parts\}", " ", compact)
    compact = re.sub(r"\\end\{parts\}", " ", compact)
    compact = re.sub(r"\\item", " - ", compact)
    compact = re.sub(r"\\begin\{[^{}]*\}.*?\\end\{[^{}]*\}", " ", compact, flags=re.DOTALL)
    compact = re.sub(r"\\(textit|textbf|emph|texttt|code|underline)\{([^{}]*)\}", r"\2", compact)
    compact = re.sub(r"\\qt\{([^{}]*)\}", r"\1", compact)
    compact = re.sub(r"\\[A-Za-z]+(?:\[[^\]]*\])?(?:\{([^{}]*)\})?", lambda m: m.group(1) or " ", compact)
    compact = compact.replace("~", " ")
    compact = compact.replace("{", " ").replace("}", " ")
    compact = compact.replace("\\", " ")
    compact = re.sub(r"\s+", " ", compact).strip()
    return compact


def extract_title(block: str) -> str:
    match = re.search(r"\\qt\{([^\\{}]+)", block)
    if match:
        return clean_latex(match.group(1))
    return ""


def infer_candidate_tracks(chapter_slug: str) -> list[str]:
    candidates = ["apStatistics", "introDataScience"]
    lowered = chapter_slug.lower()

    if any(key in lowered for key in ["probability", "distribution"]):
        candidates.extend(["quant", "quantAdvanced"])
    if any(key in lowered for key in ["regr", "regression"]):
        candidates.extend(["ml", "dataStructures"])
    if any(key in lowered for key in ["inference", "foundations_for_inf"]):
        candidates.extend(["quant", "medical"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_all_exercises() -> list[ExtractedExercise]:
    solutions_text = (SCRATCH_REPO / "extraTeX" / "eoceSolutions" / "eoceSolutions.tex").read_text(
        encoding="utf-8",
        errors="ignore",
    )
    solutions_by_chapter = extract_solution_blocks(solutions_text)

    exercises: list[ExtractedExercise] = []
    for review_file in sorted(SCRATCH_REPO.glob("ch_*/TeX/review_exercises.tex")):
        chapter_slug = review_file.parts[-3]
        chapter_title = chapter_title_from_slug(chapter_slug)
        chapter_solutions = solutions_by_chapter.get(chapter_title, {})
        review_text = review_file.read_text(encoding="utf-8", errors="ignore")

        for index, (number, block) in enumerate(extract_eoce_blocks(review_text), start=1):
            exercise_number = number or index
            title = extract_title(block) or f"{chapter_title} Exercise {exercise_number}"
            prompt_text = clean_latex(block)
            if len(prompt_text) < 25:
                continue

            solution_text = clean_latex(chapter_solutions.get(exercise_number, ""))
            source_id = f"openintro-stats::{chapter_slug}::{exercise_number}"
            collection_id = f"openintro-stats::{chapter_slug}"
            topic_tags = [chapter_title, "statistics"]
            if title not in topic_tags:
                topic_tags.append(title)

            exercises.append(
                ExtractedExercise(
                    source_id=source_id,
                    collection_id=collection_id,
                    chapter_slug=chapter_slug,
                    chapter_title=chapter_title,
                    exercise_number=exercise_number,
                    source_file=review_file.relative_to(SCRATCH_REPO).as_posix(),
                    title=title,
                    prompt_text=prompt_text,
                    raw_latex=block.strip(),
                    solution_text=solution_text,
                    candidate_track_ids=infer_candidate_tracks(chapter_slug),
                    topic_tags=topic_tags,
                )
            )

    return exercises


def write_outputs(exercises: list[ExtractedExercise]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_chapter: dict[str, int] = {}
    with_solutions = 0

    for exercise in exercises:
        by_chapter[exercise.chapter_slug] = by_chapter.get(exercise.chapter_slug, 0) + 1
        if exercise.solution_text:
            with_solutions += 1

    payload = {
        "source": "OpenIntro Statistics",
        "license": "CC BY-SA 3.0",
        "repository": OPENINTRO_GIT,
        "collectionCount": len(by_chapter),
        "questionCount": len(exercises),
        "withSolutionCount": with_solutions,
        "items": [exercise.__dict__ for exercise in exercises],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenIntro Statistics Raw Collection",
        "",
        "- Source: OpenIntro Statistics",
        "- License: CC BY-SA 3.0",
        f"- Repository: {OPENINTRO_GIT}",
        f"- Questions extracted: {len(exercises)}",
        f"- Collections: {len(by_chapter)}",
        f"- With matched solutions: {with_solutions}",
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
    print(f"Extracted {len(exercises)} OpenIntro Statistics exercises into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
