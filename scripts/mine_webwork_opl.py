from __future__ import annotations

import json
import re
import subprocess
from dataclasses import asdict, dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "webwork_opl_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "webwork_opl"
OUTPUT_JSON = OUTPUT_DIR / "webwork_opl_problems.json"
OUTPUT_MD = OUTPUT_DIR / "webwork_opl_summary.md"
REPO_URL = "https://github.com/openwebwork/webwork-open-problem-library.git"


@dataclass
class ExtractedProblem:
    source_id: str
    collection_id: str
    source_file: str
    subject: str
    chapter: str
    section: str
    level: str
    title_text: str
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


def first_match(pattern: str, text: str) -> str:
    match = re.search(pattern, text, flags=re.MULTILINE)
    return match.group(1).strip() if match else ""


def extract_block(text: str) -> str:
    for start, end in [("BEGIN_PGML", "END_PGML"), ("BEGIN_TEXT", "END_TEXT")]:
        match = re.search(rf"{start}\s*(.*?){end}", text, flags=re.DOTALL)
        if match:
            return match.group(1).strip()
    return ""


def clean_prompt(text: str) -> str:
    cleaned = text
    cleaned = re.sub(r"(?m)^\s*[%#].*$", " ", cleaned)
    cleaned = re.sub(r"\\\{[^{}]*\}", " ", cleaned)
    cleaned = re.sub(r"\{[^{}]*ans_rule[^{}]*\}", " ", cleaned)
    cleaned = re.sub(r"\$PAR|\$BR|\$BBOLD|\$EBOLD|\$HR", " ", cleaned)
    cleaned = re.sub(r"\b(END_TEXT|BEGIN_TEXT|END_PGML|BEGIN_PGML)\b", " ", cleaned)
    cleaned = re.sub(r"\[(?:@|`)?[^\]]*\]\([^)]+\)", " ", cleaned)
    cleaned = re.sub(r"`([^`]+)`", r"\1", cleaned)
    cleaned = re.sub(r"\$\$.*?\$\$", " ", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\$(.*?)\$", r"\1", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\\\((.*?)\\\)", r"\1", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\\\[(.*?)\\\]", r"\1", cleaned, flags=re.DOTALL)
    cleaned = re.sub(r"\\[A-Za-z]+", " ", cleaned)
    cleaned = cleaned.replace("{", " ").replace("}", " ")
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned


def infer_candidate_tracks(subject: str, chapter: str, section: str, prompt: str) -> list[str]:
    lowered = f"{subject} {chapter} {section} {prompt}".lower()
    candidates: list[str] = []

    if any(key in lowered for key in ["algebra", "functions", "precalculus"]):
        candidates.extend(["high_algebra_2", "elevenPlus", "mathExtensions"])
    if any(key in lowered for key in ["geometry", "trigonometry"]):
        candidates.extend(["basicGeometry", "mathExtensions"])
    if any(key in lowered for key in ["calculus", "derivative", "integral", "series", "limits"]):
        candidates.extend(["apCalculusAB", "apCalculusBC", "genMath1"])
    if any(key in lowered for key in ["linear algebra", "matrix", "vector"]):
        candidates.extend(["linearAlgebra", "quantAdvanced"])
    if any(key in lowered for key in ["probability", "statistics", "distribution", "combinatorics"]):
        candidates.extend(["apStatistics", "quant", "quantAdvanced"])
    if any(key in lowered for key in ["differential equations", "ode", "pde", "fourier"]):
        candidates.extend(["genMath1", "quantAdvanced"])
    if any(key in lowered for key in ["logic", "proof", "set theory"]):
        candidates.extend(["logicCriticalThinking", "brainBurners"])

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def extract_problems() -> list[ExtractedProblem]:
    problems: list[ExtractedProblem] = []
    pg_files = sorted((SCRATCH_REPO / "OpenProblemLibrary").rglob("*.pg"))
    for pg_file in pg_files:
        text = pg_file.read_text(encoding="utf-8", errors="ignore")
        prompt_block = extract_block(text)
        if not prompt_block:
            continue
        prompt_text = clean_prompt(prompt_block)
        if len(prompt_text) < 40:
            continue

        subject = first_match(r"DBsubject\('([^']*)'\)", text)
        chapter = first_match(r"DBchapter\('([^']*)'\)", text)
        section = first_match(r"DBsection\('([^']*)'\)", text)
        level = first_match(r"Level\(([^)]*)\)", text)
        title_text = first_match(r"TitleText1\('([^']*)'\)", text)

        relative_path = pg_file.relative_to(SCRATCH_REPO).as_posix()
        collection_bits = [bit for bit in [subject or "unknown-subject", chapter or "unknown-chapter"] if bit]
        collection_id = "webwork-opl::" + "::".join(bit.lower().replace(" ", "-") for bit in collection_bits)
        source_id = f"webwork-opl::{relative_path}"
        topic_tags = [tag for tag in [subject, chapter, section, title_text] if tag]

        problems.append(
            ExtractedProblem(
                source_id=source_id,
                collection_id=collection_id,
                source_file=relative_path,
                subject=subject,
                chapter=chapter,
                section=section,
                level=level,
                title_text=title_text,
                prompt_text=prompt_text,
                candidate_track_ids=infer_candidate_tracks(subject, chapter, section, prompt_text),
                topic_tags=topic_tags,
            )
        )
    return problems


def write_outputs(problems: list[ExtractedProblem]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    by_subject: dict[str, int] = {}
    by_collection: dict[str, int] = {}
    for problem in problems:
        subject = problem.subject or "Unknown"
        by_subject[subject] = by_subject.get(subject, 0) + 1
        by_collection[problem.collection_id] = by_collection.get(problem.collection_id, 0) + 1

    payload = {
        "source": "WeBWorK Open Problem Library",
        "license": "CC BY-NC-SA 3.0",
        "repository": REPO_URL,
        "collectionCount": len(by_collection),
        "questionCount": len(problems),
        "items": [asdict(problem) for problem in problems],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# WeBWorK Open Problem Library Raw Collection",
        "",
        "- Source: WeBWorK Open Problem Library",
        "- License: CC BY-NC-SA 3.0",
        f"- Repository: {REPO_URL}",
        f"- Questions extracted: {len(problems)}",
        f"- Collections: {len(by_collection)}",
        "",
        "## Top Subjects",
        "",
    ]
    for subject, count in sorted(by_subject.items(), key=lambda item: (-item[1], item[0]))[:20]:
        lines.append(f"- `{subject}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    problems = extract_problems()
    write_outputs(problems)
    print(f"Extracted {len(problems)} webwork-opl problems into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
