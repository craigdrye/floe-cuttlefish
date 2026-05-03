from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "openintro_stats_slides_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "openintro_stats_slides"
OUTPUT_JSON = OUTPUT_DIR / "openintro_stats_slides_questions.json"
OUTPUT_MD = OUTPUT_DIR / "openintro_stats_slides_summary.md"
REPO_URL = "https://github.com/OpenIntroStat/openintro-statistics-slides.git"


@dataclass
class ExtractedQuestion:
    source_id: str
    collection_id: str
    chapter_slug: str
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
        ["git", "clone", "--depth", "1", REPO_URL, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def extract_braced_block(text: str, start_index: int) -> tuple[str, int]:
    if text[start_index] != "{":
        raise ValueError("expected opening brace")
    depth = 0
    result: list[str] = []
    i = start_index
    while i < len(text):
        char = text[i]
        if char == "{":
            depth += 1
            if depth > 1:
                result.append(char)
        elif char == "}":
            depth -= 1
            if depth == 0:
                return ("".join(result), i + 1)
            result.append(char)
        else:
            result.append(char)
        i += 1
    raise ValueError("unterminated brace block")


def clean_latex(text: str) -> str:
    cleaned = text
    cleaned = re.sub(r"\\webURL\{([^}]*)\}", r"\1", cleaned)
    cleaned = re.sub(r"\\(underline|emph|textit|textbf|hl|orange|mathhl)\{([^}]*)\}", r"\2", cleaned)
    cleaned = re.sub(r"\\%","%", cleaned)
    cleaned = cleaned.replace("~", " ")
    cleaned = cleaned.replace("\\\\", " ")
    cleaned = re.sub(r"\\[A-Za-z]+\*?(?:\[[^\]]*\])?(?:\{([^{}]*)\})?", lambda m: m.group(1) or " ", cleaned)
    cleaned = cleaned.replace("{", " ").replace("}", " ")
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def parse_enumerate_choices(text: str) -> list[str]:
    choices: list[str] = []
    matches = list(re.finditer(r"\\item\b", text))
    for i, match in enumerate(matches):
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        chunk = text[start:end]
        chunk = re.sub(r"\\solnMult\{[^}]*\}", " ", chunk)
        chunk = re.sub(r"\\soln\{[^}]*\}", " ", chunk)
        cleaned = clean_latex(chunk)
        if cleaned:
            choices.append(cleaned)
    return choices


def infer_candidate_tracks(chapter_slug: str) -> list[str]:
    candidates = ["apStatistics", "introDataScience"]
    lowered = chapter_slug.lower()
    if any(key in lowered for key in ["chp3", "chp4", "chp5", "chp6", "chp7"]):
        candidates.extend(["quant", "quantAdvanced"])
    if any(key in lowered for key in ["chp8", "chp9"]):
        candidates.extend(["ml", "quantAdvanced"])
    if any(key in lowered for key in ["chp1", "chp2"]):
        candidates.append("logicCriticalThinking")

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_all_questions() -> list[ExtractedQuestion]:
    extracted: list[ExtractedQuestion] = []

    for tex_file in sorted(SCRATCH_REPO.rglob("*.tex")):
        relative = tex_file.relative_to(SCRATCH_REPO).as_posix()
        if relative == "lec_style.tex":
            continue
        chapter_slug = relative.split("/")[0].replace(" ", "_").lower()
        text = tex_file.read_text(encoding="utf-8", errors="ignore")
        pos = 0
        q_index = 0

        while True:
            marker = text.find(r"\pq{", pos)
            if marker == -1:
                break
            prompt, after_prompt = extract_braced_block(text, marker + len(r"\pq"))
            frame_end = text.find(r"\end{frame}", after_prompt)
            if frame_end == -1:
                frame_end = len(text)
            frame_text = text[after_prompt:frame_end]

            soln_match = re.search(r"\\solnMult\{([^}]*)\}", frame_text, flags=re.DOTALL)
            enum_match = re.search(r"\\begin\{enumerate\}(.*?)\\end\{enumerate\}", frame_text, flags=re.DOTALL)
            if not soln_match or not enum_match:
                pos = after_prompt
                continue

            correct_choice = clean_latex(soln_match.group(1))
            choices = parse_enumerate_choices(enum_match.group(1))
            if len(choices) < 1 or not correct_choice:
                pos = after_prompt
                continue

            q_index += 1
            clean_prompt = clean_latex(prompt)
            if len(clean_prompt) < 10:
                pos = after_prompt
                continue

            collection_id = f"openintro-stats-slides::{chapter_slug}"
            source_id = f"openintro-stats-slides::{chapter_slug}::{q_index}"
            extracted.append(
                ExtractedQuestion(
                    source_id=source_id,
                    collection_id=collection_id,
                    chapter_slug=chapter_slug,
                    source_file=relative,
                    prompt_text=clean_prompt,
                    choices=choices,
                    correct_choice=correct_choice,
                    candidate_track_ids=infer_candidate_tracks(chapter_slug),
                    topic_tags=[chapter_slug, clean_prompt[:80]],
                )
            )
            pos = after_prompt

    return extracted


def write_outputs(questions: list[ExtractedQuestion]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    by_chapter: dict[str, int] = {}
    for question in questions:
        by_chapter[question.chapter_slug] = by_chapter.get(question.chapter_slug, 0) + 1

    payload = {
        "source": "OpenIntro Statistics Slides",
        "license": "CC BY-SA 3.0",
        "repository": REPO_URL,
        "collectionCount": len(by_chapter),
        "questionCount": len(questions),
        "items": [question.__dict__ for question in questions],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# OpenIntro Statistics Slides Raw Collection",
        "",
        "- Source: OpenIntro Statistics Slides",
        "- License: CC BY-SA 3.0",
        f"- Repository: {REPO_URL}",
        f"- Questions extracted: {len(questions)}",
        f"- Collections: {len(by_chapter)}",
        "",
        "## By Chapter",
        "",
    ]
    for chapter, count in sorted(by_chapter.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{chapter}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    questions = extract_all_questions()
    write_outputs(questions)
    print(f"Extracted {len(questions)} OpenIntro Statistics slide questions into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
