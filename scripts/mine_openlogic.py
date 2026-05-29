from __future__ import annotations

import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path("/Users/Gideon/.openclaw/workspace/floe-rebuild8")
SCRATCH_REPO = REPO_ROOT / "scratch" / "openlogic_repo"
OUTPUT_DIR = REPO_ROOT / "data" / "raw_collections" / "open_logic_project"
OUTPUT_JSON = OUTPUT_DIR / "open_logic_project_problems.json"
OUTPUT_MD = OUTPUT_DIR / "open_logic_project_summary.md"
OPENLOGIC_GIT = "https://github.com/OpenLogicProject/OpenLogic.git"


@dataclass
class ExtractedProblem:
    source_id: str
    collection_id: str
    part: str
    source_file: str
    ordinal_in_file: int
    prompt_text: str
    raw_latex: str
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
        ["git", "clone", "--depth", "1", OPENLOGIC_GIT, str(SCRATCH_REPO)],
        check=True,
        capture_output=True,
        text=True,
    )


def extract_prob_blocks(text: str) -> list[str]:
    blocks: list[str] = []
    marker_start = "\\begin{prob}"
    marker_end = "\\end{prob}"
    cursor = 0

    while True:
        start = text.find(marker_start, cursor)
        if start == -1:
            break
        content_start = start + len(marker_start)
        end = text.find(marker_end, content_start)
        if end == -1:
            break
        blocks.append(text[content_start:end].strip())
        cursor = end + len(marker_end)

    return blocks


def clean_tex(text: str) -> str:
    compact = text
    compact = re.sub(r"(?<!\\)%.*", "", compact)
    compact = compact.replace("\n", " ")
    compact = re.sub(r"\\begin\{enumerate\}|\\end\{enumerate\}", " ", compact)
    compact = re.sub(r"\\item", " - ", compact)
    compact = re.sub(r"\\(emph|textbf|textit|ollabel|olref|olpart|olimport|iftag|tagitem|tagprob|tagendprob)\*?(?:\[[^\]]*\])?\{([^{}]*)\}", r"\2", compact)
    compact = re.sub(r"!!\{([^{}]+)\}", r"\1", compact)
    compact = re.sub(r"!!a\{([^{}]+)\}", r"\1", compact)
    compact = re.sub(r"\\[a-zA-Z]+(?:\[[^\]]*\])?(?:\{([^{}]*)\})?", lambda m: m.group(1) or " ", compact)
    compact = compact.replace("{", " ").replace("}", " ")
    compact = re.sub(r"\s+", " ", compact).strip()
    return compact


def infer_candidate_tracks(part: str, relative_path: str) -> list[str]:
    candidates = ["philosophy"]

    if "propositional-logic" in part or "first-order-logic" in part or "proof-theory" in part:
        candidates.append("logicCriticalThinking")
    if "model-theory" in part or "set-theory" in part:
        candidates.extend(["logicCriticalThinking", "linearAlgebra"])
    if "computability" in part or "turing-machines" in part or "lambda-calculus" in part:
        candidates.extend(["logicCriticalThinking", "dataStructures", "software"])
    if "applied-modal-logic" in part or "normal-modal-logic" in part or "intuitionistic-logic" in part:
        candidates.extend(["logicCriticalThinking", "philSenior"])
    if "counterfactuals" in part:
        candidates.extend(["philSenior", "philosophy"])

    if "syntax-and-semantics" in relative_path or "natural-deduction" in relative_path:
        candidates.append("logicCriticalThinking")

    deduped: list[str] = []
    for candidate in candidates:
        if candidate not in deduped:
            deduped.append(candidate)
    return deduped


def infer_topic_tags(part: str, relative_path: str) -> list[str]:
    raw_tags = [part.replace("-", " "), *relative_path.split("/")[1:-1]]
    tags: list[str] = []
    for tag in raw_tags:
        normalized = tag.replace("-", " ").strip()
        if normalized and normalized not in tags:
            tags.append(normalized)
    return tags


def extract_all_problems() -> list[ExtractedProblem]:
    problems: list[ExtractedProblem] = []

    for tex_file in sorted((SCRATCH_REPO / "content").rglob("*.tex")):
        relative_path = tex_file.relative_to(SCRATCH_REPO / "content").as_posix()
        part = relative_path.split("/")[0]
        text = tex_file.read_text(encoding="utf-8")
        blocks = extract_prob_blocks(text)

        for index, block in enumerate(blocks, start=1):
            prompt_text = clean_tex(block)
            if len(prompt_text) < 20:
                continue

            source_id = f"openlogic::{relative_path}::{index}"
            collection_id = f"open-logic-project::{part}"
            problems.append(
                ExtractedProblem(
                    source_id=source_id,
                    collection_id=collection_id,
                    part=part,
                    source_file=relative_path,
                    ordinal_in_file=index,
                    prompt_text=prompt_text,
                    raw_latex=block.strip(),
                    candidate_track_ids=infer_candidate_tracks(part, relative_path),
                    topic_tags=infer_topic_tags(part, relative_path),
                )
            )

    return problems


def write_outputs(problems: list[ExtractedProblem]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    summary_by_part: dict[str, int] = {}
    for problem in problems:
        summary_by_part[problem.part] = summary_by_part.get(problem.part, 0) + 1

    payload = {
        "source": "Open Logic Project",
        "license": "CC BY 4.0",
        "repository": OPENLOGIC_GIT,
        "collectionCount": len(summary_by_part),
        "questionCount": len(problems),
        "items": [problem.__dict__ for problem in problems],
    }
    OUTPUT_JSON.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    lines = [
        "# Open Logic Project Raw Collection",
        "",
        f"- Source: Open Logic Project",
        f"- License: CC BY 4.0",
        f"- Repository: {OPENLOGIC_GIT}",
        f"- Questions extracted: {len(problems)}",
        f"- Collections: {len(summary_by_part)}",
        "",
        "## By Part",
        "",
    ]
    for part, count in sorted(summary_by_part.items(), key=lambda item: (-item[1], item[0])):
        lines.append(f"- `{part}`: {count}")

    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    ensure_repo()
    problems = extract_all_problems()
    write_outputs(problems)
    print(f"Extracted {len(problems)} Open Logic Project problems into {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
