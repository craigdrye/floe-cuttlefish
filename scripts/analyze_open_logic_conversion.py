from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
RAW_JSON = REPO_ROOT / "data/raw_collections/open_logic_project/open_logic_project_problems.json"
REPORT_MD = REPO_ROOT / "reports/open-logic-conversion-readiness.md"
REPORT_JSON = REPO_ROOT / "reports/open-logic-conversion-readiness.json"


COURSE_RELEVANCE = {
    "first-order-logic": 5,
    "propositional-logic": 5,
    "sets-functions-relations": 4,
    "methods": 4,
    "proof-theory": 4,
    "normal-modal-logic": 3,
    "many-valued-logic": 2,
    "intuitionistic-logic": 2,
    "applied-modal-logic": 2,
    "model-theory": 2,
    "set-theory": 2,
    "computability": 1,
    "turing-machines": 1,
    "lambda-calculus": 1,
    "incompleteness": 1,
    "counterfactuals": 1,
    "second-order-logic": 1,
}

HIGH_VALUE_PATH_HINTS = {
    "methods/proofs": "argument/proof habits",
    "sets-functions-relations/relations": "relations and logical structure",
    "sets-functions-relations/functions": "functions and mappings",
    "sets-functions-relations/sets": "sets and set operations",
    "propositional-logic/syntax-and-semantics": "propositional syntax, truth, validity",
    "first-order-logic/syntax-and-semantics": "first-order syntax and semantics",
    "first-order-logic/introduction": "first-order logic overview",
    "first-order-logic/natural-deduction": "deductive proof rules",
    "first-order-logic/tableaux": "validity and countermodel practice",
    "first-order-logic/models-theories": "models, theories, definability",
    "proof-theory": "formal proof systems",
    "normal-modal-logic": "extension unit after core logic",
}


def has_fixed_choice_signal(raw_latex: str) -> bool:
    lower = raw_latex.lower()
    direct_markers = [
        "multiple choice",
        "choose one",
        "which answer",
        "correct answer",
        "\\begin{choices}",
        "\\begin{answers}",
        "\\correctchoice",
    ]
    return any(marker in lower for marker in direct_markers)


def classify_item(item: dict) -> str:
    raw = item["raw_latex"]
    prompt = item["prompt_text"].lower()
    if has_fixed_choice_signal(raw):
        return "fixed_choice_candidate"
    if "\\begin{enumerate}" in raw:
        if re.search(r"\bwhich of the following\b", prompt):
            return "enumerated_which_following"
        return "enumerated_subproblems"
    if re.search(r"\b(prove|show|give|find|construct|define|explain)\b", prompt):
        return "open_response"
    return "other"


def score_file(part: str, source_file: str, count: int) -> int:
    score = COURSE_RELEVANCE.get(part, 0) * 10 + min(count, 10)
    for hint in HIGH_VALUE_PATH_HINTS:
        if source_file.startswith(hint):
            score += 10
    return score


def chapter_for(source_file: str) -> str:
    parts = source_file.split("/")
    if len(parts) <= 2:
        return "/".join(parts[:-1]) or source_file
    return "/".join(parts[:2])


def main() -> None:
    data = json.loads(RAW_JSON.read_text(encoding="utf-8"))
    items = data["items"]

    by_part = Counter(item["part"] for item in items)
    by_class = Counter(classify_item(item) for item in items)
    fixed_choice = [item for item in items if classify_item(item) == "fixed_choice_candidate"]
    enumerated_which = [item for item in items if classify_item(item) == "enumerated_which_following"]

    file_counts: dict[tuple[str, str], int] = Counter(
        (item["part"], item["source_file"]) for item in items
    )
    file_examples: dict[str, list[str]] = defaultdict(list)
    for item in items:
        if len(file_examples[item["source_file"]]) < 2:
            file_examples[item["source_file"]].append(item["prompt_text"])

    ranked_files = sorted(
        (
            {
                "part": part,
                "source_file": source_file,
                "problem_count": count,
                "score": score_file(part, source_file, count),
                "course_fit": HIGH_VALUE_PATH_HINTS.get(
                    next((hint for hint in HIGH_VALUE_PATH_HINTS if source_file.startswith(hint)), ""),
                    "supporting or advanced topic",
                ),
                "examples": file_examples[source_file],
            }
            for (part, source_file), count in file_counts.items()
        ),
        key=lambda row: (-row["score"], row["source_file"]),
    )

    chapter_counts: Counter[tuple[str, str]] = Counter()
    chapter_files: dict[str, set[str]] = defaultdict(set)
    for (part, source_file), count in file_counts.items():
        chapter = chapter_for(source_file)
        chapter_counts[(part, chapter)] += count
        chapter_files[chapter].add(source_file)

    ranked_chapters = sorted(
        (
            {
                "part": part,
                "chapter": chapter,
                "problem_count": count,
                "source_file_count": len(chapter_files[chapter]),
                "score": score_file(part, chapter, count),
                "course_fit": HIGH_VALUE_PATH_HINTS.get(
                    next((hint for hint in HIGH_VALUE_PATH_HINTS if chapter.startswith(hint)), ""),
                    "supporting or advanced topic",
                ),
                "representative_files": sorted(chapter_files[chapter])[:5],
            }
            for (part, chapter), count in chapter_counts.items()
        ),
        key=lambda row: (-row["score"], row["chapter"]),
    )

    high_value = ranked_chapters[:18]

    report = {
        "source": data["source"],
        "license": data["license"],
        "repository": data["repository"],
        "question_count": len(items),
        "part_counts": dict(by_part.most_common()),
        "classification_counts": dict(by_class.most_common()),
        "direct_fixed_choice_count": len(fixed_choice),
        "enumerated_which_following_count": len(enumerated_which),
        "highest_value_chapters": high_value,
        "highest_value_source_files": ranked_files[:18],
        "sample_transformed_mcq_candidates": [],
        "conversion_recommendation": "No direct fixed-choice subset was found. Use an authored conversion pipeline with source-grounded item templates and human review.",
    }

    REPORT_JSON.parent.mkdir(parents=True, exist_ok=True)
    REPORT_JSON.write_text(json.dumps(report, indent=2), encoding="utf-8")

    lines = [
        "# Open Logic Project Conversion Readiness",
        "",
        "## Finding",
        "",
        "No direct fixed-choice subset was found in the extracted Open Logic Project raw collection.",
        f"The extractor found {len(items)} `prob` blocks; {len(fixed_choice)} contain direct fixed-choice markers such as `choices`, `correct answer`, or `correctchoice`.",
        f"{len(enumerated_which)} block(s) use “which of the following” phrasing, but these are enumerated tasks without an answer key or complete local context.",
        "",
        "## Shape of Source Items",
        "",
    ]
    for label, count in by_class.most_common():
        lines.append(f"- `{label}`: {count}")

    lines.extend(
        [
            "",
            "## Highest-Value Chapters for Formal Logic / Logic Critical Thinking",
            "",
        ]
    )
    for row in high_value:
        lines.append(
            f"- `{row['chapter']}`: {row['problem_count']} problem(s) across {row['source_file_count']} file(s), {row['course_fit']}."
        )

    lines.extend(
        [
            "",
            "## Recommended Authored Conversion Pipeline",
            "",
            "1. Normalize LaTeX source into lesson-sized concept records: definition, theorem/proposition, example, exercise, dependencies, and source citation.",
            "2. Select core chapters first: methods/proofs, sets-functions-relations basics, propositional syntax/semantics, first-order syntax/semantics, and natural deduction/tableaux.",
            "3. Generate fixed-choice items from source-grounded templates only where the surrounding definition or theorem is local enough to support a keyed answer.",
            "4. Use deterministic validators for formula/truth-table/semantic-notion questions where possible; otherwise route to human review.",
            "5. Add critical-thinking wrappers that translate formal tasks into argument analysis: validity, counterexample, ambiguity, sufficient/necessary condition, and proof strategy.",
            "6. Keep advanced parts as enrichment: modal logic, proof theory, many-valued/intuitionistic logic, model theory, computability, and incompleteness.",
            "",
            "## MCQ Candidate Policy",
            "",
            "No sample transformed MCQ candidates are included because the currently extracted problem blocks do not carry enough local context plus keyed answers to generate fixed-choice items without risking missing context.",
        ]
    )
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Wrote {REPORT_MD}")
    print(f"Wrote {REPORT_JSON}")


if __name__ == "__main__":
    main()
